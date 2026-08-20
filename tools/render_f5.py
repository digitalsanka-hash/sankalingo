#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Perender audio Fasih memakai F5-TTS.

F5-TTS adalah model text-to-speech berbasis flow matching di atas Diffusion
Transformer. Ia bekerja secara zero-shot: diberi satu potong audio contoh
beserta transkripnya, ia menirukan suara itu untuk kalimat baru.

Perender ini dijalankan SEKALI di luar aplikasi. Hasilnya berkas audio statis
yang tinggal diputar peramban — jadi pengguna tidak pernah menunggu inferensi,
dan aplikasinya tetap berjalan tanpa Python maupun GPU.

    python tools/render_f5.py --bahasa ko ja zh
    python tools/render_f5.py --semua
    python tools/render_f5.py --bahasa ko --batas 20     # coba dulu 20 butir

Keluaran:
    audio/<kode>/<kunci>.opus
    audio/<kode>/manifest.json

Kunci = 16 hex pertama SHA-256 teks yang dinormalkan (NFC + spasi dirapikan).
Rumus yang sama dipakai tools/dump-corpus.mjs dan js/audio.js.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import subprocess
import sys
import time
import unicodedata
from pathlib import Path

AKAR = Path(__file__).resolve().parent.parent
KORPUS = AKAR / "tools" / "corpus.json"
MODEL_JSON = AKAR / "tools" / "models.json"
KELUARAN = AKAR / "audio"
CONTOH = AKAR / "tools" / "ref"


# ── Kunci audio ──────────────────────────────────────────────────────
def normalkan(teks: str) -> str:
    return " ".join(unicodedata.normalize("NFC", str(teks)).split())


def kunci_audio(teks: str) -> str:
    return hashlib.sha256(normalkan(teks).encode("utf-8")).hexdigest()[:16]


# ── Muat daftar model ────────────────────────────────────────────────
def muat_model_cfg() -> dict:
    if not MODEL_JSON.exists():
        sys.exit(
            f"Berkas {MODEL_JSON} tidak ada.\n"
            "Berkas itu memetakan tiap bahasa ke checkpoint F5-TTS-nya."
        )
    mentah = json.loads(MODEL_JSON.read_text(encoding="utf-8"))
    # Kunci berawalan '_' adalah catatan dan profil cadangan, bukan bahasa.
    return {k: v for k, v in mentah.items() if not k.startswith("_")}


# ── Penemuan berkas checkpoint ───────────────────────────────────────
BOBOT = (".safetensors", ".pt")


def berkas_repo(repo: str) -> list[tuple[str, int]]:
    """Daftar (nama, ukuran) berkas sebuah repo HuggingFace."""
    from huggingface_hub import HfApi

    info = HfApi().model_info(repo, files_metadata=True)
    return [(s.rfilename, s.size or 0) for s in info.siblings]


def tebak_berkas(repo: str) -> tuple[str, str]:
    """Cari berkas bobot terbesar dan berkas vocab yang mendampinginya.

    Dipakai kalau tools/models.json tidak menyebut nama berkasnya. Menebak
    dari isi repo yang sebenarnya jauh lebih aman daripada menuliskan nama
    berkas dari ingatan — nama berkas checkpoint sering berubah.
    """
    berkas = berkas_repo(repo)
    kandidat = [(n, u) for n, u in berkas
                if n.lower().endswith(BOBOT) and "optimizer" not in n.lower()]
    if not kandidat:
        raise RuntimeError(f"Tidak ada berkas bobot (.safetensors/.pt) di {repo}")
    kandidat.sort(key=lambda x: x[1], reverse=True)
    ckpt = kandidat[0][0]

    folder = ckpt.rsplit("/", 1)[0] if "/" in ckpt else ""
    vocabs = [n for n, _ in berkas if n.lower().endswith(".txt") and "vocab" in n.lower()]
    # utamakan vocab di folder yang sama dengan bobotnya
    sefolder = [v for v in vocabs if v.rsplit("/", 1)[0] == folder] if folder else []
    vocab = (sefolder or vocabs or [""])[0]
    return ckpt, vocab


def perintah_daftar(cfg_semua: dict) -> None:
    """Tampilkan isi tiap repo tanpa mengunduh bobotnya."""
    for code, cfg in cfg_semua.items():
        repo = cfg.get("repo", "")
        print(f"\n[{code}] {repo}  ({cfg.get('lisensi','?')}"
              f"{', boleh komersial' if cfg.get('komersial') else ', NONKOMERSIAL'})")
        try:
            berkas = berkas_repo(repo)
        except Exception as e:  # noqa: BLE001
            print(f"    GAGAL: {type(e).__name__}: {e}")
            continue
        bobot = [(n, u) for n, u in berkas if n.lower().endswith(BOBOT)]
        vocab = [n for n, _ in berkas if n.lower().endswith(".txt") and "vocab" in n.lower()]
        for n, u in sorted(bobot, key=lambda x: x[1], reverse=True)[:6]:
            print(f"    bobot  {n}  ({u / 1e9:.2f} GB)" if u else f"    bobot  {n}")
        for v in vocab[:4]:
            print(f"    vocab  {v}")
        if cfg.get("ckpt"):
            ada = any(n == cfg["ckpt"] for n, _ in berkas)
            print(f"    → models.json menunjuk {cfg['ckpt']} … "
                  f"{'ADA' if ada else 'TIDAK DITEMUKAN'}")


# ── Pemeriksaan lingkungan ───────────────────────────────────────────
def periksa_lingkungan() -> None:
    masalah = []

    if sys.version_info >= (3, 14):
        masalah.append(
            f"Python {sys.version_info.major}.{sys.version_info.minor} terlalu baru untuk PyTorch.\n"
            "  Pasang Python 3.11 atau 3.12, lalu buat lingkungan virtual:\n"
            "    py -3.12 -m venv .venv-tts\n"
            "    .venv-tts\\Scripts\\activate"
        )

    try:
        import torch  # noqa: F401
    except ImportError:
        masalah.append(
            "PyTorch belum terpasang. Untuk kartu NVIDIA:\n"
            "    pip install torch torchaudio --index-url https://download.pytorch.org/whl/cu124"
        )
    else:
        import torch

        if not torch.cuda.is_available():
            print("  ! CUDA tidak terdeteksi — perenderan akan memakai CPU dan jauh lebih lambat.")

    try:
        import f5_tts  # noqa: F401
    except ImportError:
        masalah.append("Paket f5-tts belum terpasang:\n    pip install f5-tts")

    if not shutil.which("ffmpeg"):
        masalah.append("ffmpeg tidak ditemukan di PATH. Diperlukan untuk mengemas audio ke Opus.")

    if masalah:
        print("\nLingkungan belum siap:\n")
        for m in masalah:
            print("  - " + m + "\n")
        sys.exit(1)


# ── Pemuatan model ───────────────────────────────────────────────────
_cache_model: dict[str, object] = {}


def ambil_model(cfg: dict, perangkat: str):
    """Muat satu model F5-TTS, pakai ulang bila checkpoint-nya sama."""
    from f5_tts.api import F5TTS
    from huggingface_hub import hf_hub_download

    kunci = f"{cfg.get('repo','')}|{cfg.get('ckpt','')}|{cfg.get('arsitektur','F5TTS_v1_Base')}"
    if kunci in _cache_model:
        return _cache_model[kunci]

    ckpt_file = ""
    vocab_file = ""
    repo = cfg.get("repo", "")
    if repo and repo != "SWivid/F5-TTS":
        nama_ckpt, nama_vocab = cfg.get("ckpt", ""), cfg.get("vocab", "")
        if not nama_ckpt:
            nama_ckpt, tebakan_vocab = tebak_berkas(repo)
            nama_vocab = nama_vocab or tebakan_vocab
            print(f"    berkas ditemukan sendiri: {nama_ckpt}"
                  + (f" + {nama_vocab}" if nama_vocab else ""))
        print(f"    mengunduh {repo}/{nama_ckpt} …")
        ckpt_file = hf_hub_download(repo_id=repo, filename=nama_ckpt)
        if nama_vocab:
            vocab_file = hf_hub_download(repo_id=repo, filename=nama_vocab)
    elif repo == "SWivid/F5-TTS" and cfg.get("ckpt"):
        print(f"    mengunduh {repo}/{cfg['ckpt']} …")
        ckpt_file = hf_hub_download(repo_id=repo, filename=cfg["ckpt"])

    model = F5TTS(
        model=cfg.get("arsitektur", "F5TTS_v1_Base"),
        ckpt_file=ckpt_file,
        vocab_file=vocab_file,
        device=perangkat,
    )
    _cache_model[kunci] = model
    return model


# ── Perenderan ───────────────────────────────────────────────────────
def ke_opus(wav_sementara: Path, tujuan: Path) -> bool:
    """Kemas WAV jadi Opus 24 kHz mono — kecil dan didukung semua peramban modern."""
    tujuan.parent.mkdir(parents=True, exist_ok=True)
    hasil = subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav_sementara),
         "-ac", "1", "-ar", "24000", "-c:a", "libopus", "-b:a", "32k",
         "-application", "voip", str(tujuan)],
        capture_output=True,
    )
    if hasil.returncode != 0:
        print("      ffmpeg gagal:", hasil.stderr.decode("utf-8", "ignore")[:200])
        return False
    return True


def render_bahasa(code: str, data: dict, cfg: dict, args) -> dict:
    import torch

    perangkat = "cuda" if torch.cuda.is_available() and not args.cpu else "cpu"
    butir = data["butir"]
    if args.batas:
        butir = butir[: args.batas]

    keluar = KELUARAN / code
    keluar.mkdir(parents=True, exist_ok=True)
    sementara = keluar / "_sementara.wav"

    ref_audio = CONTOH / cfg["ref_audio"]
    if not ref_audio.exists():
        print(f"  ! Audio contoh tidak ada: {ref_audio}")
        print("    Lihat tools/ref/README.md untuk cara menyiapkannya.")
        return {"code": code, "sukses": 0, "gagal": len(butir), "lewat": 0}

    print(f"\n[{code}] {data['nama']} — {len(butir)} butir "
          f"· model {cfg.get('repo') or cfg.get('arsitektur')} · {perangkat}")

    model = ambil_model(cfg, perangkat)
    ref_text = cfg.get("ref_text", "")

    sukses = gagal = lewat = 0
    mulai = time.time()

    for i, b in enumerate(butir, 1):
        tujuan = keluar / f"{b['kunci']}.opus"
        if tujuan.exists() and not args.paksa:
            lewat += 1
            continue

        teks = b["teks"]
        try:
            model.infer(
                ref_file=str(ref_audio),
                ref_text=ref_text,
                gen_text=teks,
                file_wave=str(sementara),
                remove_silence=True,
                speed=cfg.get("kecepatan", 1.0),
                nfe_step=args.nfe,
                seed=1234,
            )
            if ke_opus(sementara, tujuan):
                sukses += 1
            else:
                gagal += 1
        except Exception as e:  # noqa: BLE001
            gagal += 1
            print(f"      gagal [{b['kunci']}] {teks[:30]!r}: {type(e).__name__}: {e}")

        if i % 25 == 0 or i == len(butir):
            lewat_dtk = time.time() - mulai
            per = lewat_dtk / max(1, sukses + gagal)
            sisa = per * (len(butir) - i)
            print(f"    {i}/{len(butir)}  ok={sukses} gagal={gagal} lewat={lewat}  "
                  f"~{per:.1f} dtk/butir  sisa ±{sisa/60:.0f} mnt")

    if sementara.exists():
        sementara.unlink()

    tulis_manifes(code, data, cfg)
    return {"code": code, "sukses": sukses, "gagal": gagal, "lewat": lewat}


def buang_cache_model(repo: str) -> int:
    """Hapus bobot sebuah repo dari cache HuggingFace.

    Total bobot ketujuh bahasa sekitar 25 GB. Kalau ruang disk terbatas,
    rendernya satu bahasa dulu lalu bobotnya dibuang — puncak pemakaian
    tinggal sebesar model terbesar (±5,5 GB), bukan jumlah semuanya.
    """
    from huggingface_hub.constants import HF_HUB_CACHE

    folder = Path(HF_HUB_CACHE) / ("models--" + repo.replace("/", "--"))
    if not folder.exists():
        return 0
    besar = sum(f.stat().st_size for f in folder.rglob("*") if f.is_file())
    shutil.rmtree(folder, ignore_errors=True)
    print(f"    cache {repo} dibuang ({besar / 1e9:.2f} GB dikembalikan)")
    return besar


def tulis_manifes(code: str, data: dict, cfg: dict) -> None:
    """Daftar kunci yang benar-benar punya berkas — bukan yang seharusnya ada."""
    keluar = KELUARAN / code
    kunci = sorted(p.stem for p in keluar.glob("*.opus"))
    manifes = {
        "v": 1,
        "bahasa": code,
        "format": "opus",
        "mesin": "F5-TTS",
        "model": cfg.get("repo") or cfg.get("arsitektur", ""),
        "dibuat": time.strftime("%Y-%m-%d"),
        "jumlah": len(kunci),
        "dariKorpus": data["jumlah"],
        "kunci": kunci,
    }
    (keluar / "manifest.json").write_text(
        json.dumps(manifes, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )
    print(f"    manifest.json → {len(kunci)} berkas "
          f"({len(kunci) * 100 // max(1, data['jumlah'])}% dari korpus)")


# ── Utama ────────────────────────────────────────────────────────────
def main() -> None:
    p = argparse.ArgumentParser(description="Render audio Fasih dengan F5-TTS")
    p.add_argument("--bahasa", nargs="*", help="kode bahasa, mis. ko ja zh")
    p.add_argument("--semua", action="store_true", help="render semua bahasa yang punya model")
    p.add_argument("--batas", type=int, default=0, help="hanya N butir pertama (untuk uji coba)")
    p.add_argument("--nfe", type=int, default=32, help="langkah NFE; makin besar makin halus & lambat")
    p.add_argument("--paksa", action="store_true", help="render ulang walau berkasnya sudah ada")
    p.add_argument("--cpu", action="store_true", help="paksa pakai CPU")
    p.add_argument("--periksa", action="store_true", help="hanya periksa lingkungan lalu keluar")
    p.add_argument("--daftar", action="store_true",
                   help="tampilkan isi tiap repo model tanpa mengunduh bobotnya")
    p.add_argument("--hapus-model", dest="hapus_model", action="store_true",
                   help="buang bobot dari cache setelah satu bahasa selesai (hemat disk)")
    args = p.parse_args()

    if args.daftar:
        perintah_daftar(muat_model_cfg())
        return

    periksa_lingkungan()
    if args.periksa:
        print("Lingkungan siap.")
        return

    if not KORPUS.exists():
        sys.exit(f"{KORPUS} tidak ada. Jalankan dulu:  node tools/dump-corpus.mjs")

    korpus = json.loads(KORPUS.read_text(encoding="utf-8"))
    model_cfg = muat_model_cfg()

    if args.semua:
        kodes = [k for k in korpus["bahasa"] if k in model_cfg]
    elif args.bahasa:
        kodes = args.bahasa
    else:
        sys.exit("Sebutkan --bahasa <kode...> atau --semua")

    hasil = []
    for code in kodes:
        if code not in korpus["bahasa"]:
            print(f"! {code}: tidak ada di korpus"); continue
        if code not in model_cfg:
            print(f"! {code}: belum ada model F5-TTS di tools/models.json — dilewati"); continue
        cfg = model_cfg[code]
        hasil.append(render_bahasa(code, korpus["bahasa"][code], cfg, args))
        if args.hapus_model and cfg.get("repo"):
            _cache_model.clear()
            try:
                import torch, gc
                gc.collect()
                if torch.cuda.is_available():
                    torch.cuda.empty_cache()
            except Exception:
                pass
            buang_cache_model(cfg["repo"])

    print("\n── Ringkasan ──")
    for h in hasil:
        print(f"  {h['code']}  berhasil={h['sukses']}  gagal={h['gagal']}  dilewati={h['lewat']}")


if __name__ == "__main__":
    main()
