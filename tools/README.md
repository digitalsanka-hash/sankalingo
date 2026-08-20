# Perkakas pengembangan

| Berkas | Guna |
|---|---|
| `audit-isi.mjs` | menghitung isi materi tiap bahasa |
| `validasi-materi.mjs` | memeriksa bentuk data yang cacat |
| `isi-romanisasi.mjs` | mengisi kolom romanisasi yang kosong |
| `goresan-ar.js` | membangkitkan jalur goresan huruf Arab dari huruf Amiri (OFL) — dijalankan di konsol peramban |
| `dump-corpus.mjs`, `render_f5.py`, `models.json`, `ref/` | jalur perekaman F5-TTS — **tidak dipakai**, lihat di bawah |

---

## Status suara saat ini: pembaca teks peramban

**Aplikasi memakai Web Speech API bawaan peramban, bukan rekaman audio.**
Tidak ada satu pun berkas audio di dalamnya. Itu keputusan sadar: rekaman
F5-TTS berarti bobot model berlisensi nonkomersial untuk enam dari tujuh
bahasa, dan aplikasi ini sengaja dijaga bebas dari kewajiban lisensi supaya
boleh dijual.

Sebagai gantinya, `js/voice.js` memakai cadangan berlapis: suara asli bahasa
itu kalau terpasang di perangkat → kalau tidak, romanisasinya dibacakan suara
Indonesia → kalau itu pun tidak ada, suara Inggris → barulah menyerah dengan
pesan yang jelas. Romanisasinya dihitung `js/translit.js` dan menutup 100%
materi berhuruf asing.

## Jalur F5-TTS (disimpan, tidak aktif)

Berkas di bawah ini adalah sisa rancangan lama yang merekam seluruh materi
lebih dulu. Semuanya masih utuh dan bisa dihidupkan lagi, tetapi **tidak
dipakai** dan tidak memengaruhi aplikasi. Baca bagian lisensi sebelum
memakainya untuk apa pun yang dijual.

Alasan rancangan itu dulu dipilih:

| | Pembaca bawaan peramban | Rekaman F5-TTS |
|---|---|---|
| Pelafalan | salah untuk 8 dari 9 bahasa — perangkat tidak punya suaranya | benar, dari model yang dilatih pada bahasa itu |
| Jeda klik→bunyi | 54–210 md, tergantung mesin bicara | selama decode berkas saja |
| Saat luring | mati kalau suaranya daring | jalan, berkasnya ikut tersimpan |
| Antar perangkat | beda-beda | sama persis |

Perenderan dijalankan **sekali di komputer pengembang**. Pengguna akhir tidak
perlu Python, tidak perlu GPU, tidak perlu apa pun.

---

## Alurnya

```
data/lang/*.js  ──node──►  tools/corpus.json  ──python+F5-TTS──►  audio/<kode>/*.opus
                                                                  audio/<kode>/manifest.json
                                                                        │
                                                              js/audio.js memutar
```

Penghubungnya sebuah kunci: **16 hex pertama SHA-256 dari teks yang
dinormalkan** (NFC, spasi dirapikan). Rumus itu ditulis tiga kali — di
`tools/dump-corpus.mjs`, `tools/render_f5.py`, dan `js/audio.js` — dan sudah
diuji menghasilkan angka yang sama persis. Karena itu tidak ada daftar
perantara yang bisa basi: kalau berkasnya ada, ia pasti ketemu.

---

## Langkah

### 1. Kumpulkan korpus

```bash
node tools/dump-corpus.mjs
```

Menghasilkan `tools/corpus.json` — 2.749 potong teks dari delapan bahasa
(aksara, kosakata, frasa, contoh tata bahasa, bacaan ujian).

### 2. Siapkan lingkungan Python

PyTorch belum mendukung Python 3.14, jadi diperlukan 3.11 atau 3.12.

```bash
py -3.12 -m venv .venv-tts
.venv-tts\Scripts\activate
pip install torch torchaudio --index-url https://download.pytorch.org/whl/cu124
pip install f5-tts
```

Periksa kesiapannya:

```bash
python tools/render_f5.py --periksa
```

### 3. Siapkan audio contoh

F5-TTS adalah *zero-shot voice cloning* — ia tidak punya suara sendiri.
Tiap bahasa butuh satu berkas WAV pendek berisi suara penutur asli, plus
transkripnya. Lihat **[tools/ref/README.md](ref/README.md)** untuk syarat dan
sumber yang sah (Common Voice berlisensi CC0 adalah jalan termudah).

### 4. Render

Coba dua puluh butir dulu, dengarkan hasilnya:

```bash
python tools/render_f5.py --bahasa ar --batas 20
```

Kalau sudah enak didengar, jalankan semuanya:

```bash
python tools/render_f5.py --semua --hapus-model
```

`--hapus-model` membuang bobot dari cache tiap selesai satu bahasa. **Wajib
dipakai kalau ruang disk di bawah 30 GB** — lihat bagian Disk di bawah.

Perenderan bisa dihentikan dan dilanjutkan kapan saja: berkas yang sudah ada
dilewati.

---

## Model per bahasa

Semua diverifikasi lewat API HuggingFace pada 16 Agustus 2026.

| Bahasa | Repo | Bobot | Lisensi | Komersial |
|---|---|---|---|---|
| Mandarin | `SWivid/F5-TTS` | 1,3 GB | CC-BY-NC-4.0 | tidak |
| Jepang | `Jmica/F5TTS` | 5,4 GB | CC-BY-NC-SA-4.0 | tidak |
| Arab | `silma-ai/silma-tts` | 2,6 GB | **Apache-2.0** | **ya** |
| Jerman | `hvoss-techfak/F5-TTS-German` | 1,35 GB | CC-BY-NC-4.0 | tidak |
| Prancis | `RASPIAUDIO/F5-French-MixedSpeakers-reduced` | 5,4 GB | CC-BY-NC-4.0 | tidak |
| Spanyol | `jpgallegoar/F5-Spanish` | 5,4 GB | CC-BY-NC-4.0 | tidak |
| Rusia | `hotstone228/F5-TTS-Russian` | 3,4 GB | CC-BY-NC-SA-4.0 | tidak |

Periksa sendiri kapan saja, tanpa mengunduh bobotnya:

```bash
python tools/render_f5.py --daftar
```

### Korea tidak ada

Tidak ada checkpoint F5-TTS bahasa Korea. Daftar resmi *community finetunes*
(`src/f5_tts/infer/SHARED.md` di repo SWivid) memuat Arab, Finlandia, Prancis,
Jerman, Hindi, Italia, Jepang, Latvia, Rusia, dan Spanyol — Korea tidak ada.
Penelusuran API HuggingFace bertag `f5-tts` juga nihil.

Selama belum ada, bahasa Korea di SankaLingo GO tetap memakai lapisan suara peramban.
Alih aksara Hangul→Latin di `js/translit.js` sudah menutup 100% materinya,
jadi tombolnya tetap berbunyi — hanya bukan pelafalan asli.

---

## Lisensi — baca sebelum menjual apa pun

Kode F5-TTS berlisensi MIT, tetapi **bobot modelnya CC-BY-NC** karena data
latihnya (Emilia) dikumpulkan dari sumber terbuka. Non-komersial. Semua
finetune turunannya mewarisi batasan itu.

Artinya: rekaman yang dihasilkan enam dari tujuh model di atas **tidak boleh
dipakai untuk produk berbayar**. Hanya Arab (`silma-ai/silma-tts`, Apache-2.0)
yang bebas.

Kalau SankaLingo GO akan dijual, pakai profil `_permisif` di `tools/models.json` —
berisi checkpoint berlisensi Apache-2.0 untuk Inggris, Rusia, dan Mandarin.
Untuk Jepang, Jerman, Prancis, dan Spanyol belum ada penggantinya yang
permisif; bahasa-bahasa itu harus memakai mesin TTS lain atau tetap pada
lapisan suara peramban.

---

## Disk, waktu, dan VRAM

**Disk.** Jumlah seluruh bobot ±24,8 GB. Dengan `--hapus-model`, puncak
pemakaian hanya sebesar model terbesar (5,4 GB) plus PyTorch (±5 GB).
Hasil akhirnya jauh lebih kecil: 2.749 berkas Opus 32 kbps ≈ **60–90 MB**.

**Waktu.** F5-TTS mengklaim RTF 0,15. Pada RTX 4050 Laptop, satu butir
pendek memakan sekitar 1–3 detik. Perkiraan kasar untuk seluruh korpus:
**1,5–3 jam**, sekali seumur proyek. Turunkan `--nfe` (bawaan 32) untuk
mempercepat dengan mengorbankan kehalusan.

**VRAM.** Inferensi butuh ±2–3 GB. RTX 4050 dengan 6 GB cukup. Jangan
mengosongkan `ref_text` — kalau kosong, Whisper large-v3-turbo ikut dimuat
untuk mentranskrip dan VRAM bisa tidak cukup.

---

## Kalau ada yang gagal

| Gejala | Sebab paling sering |
|---|---|
| Audio senyap atau kacau | vocab salah. Jepang **wajib** `vocab_japanese.txt` dari folder checkpoint-nya |
| `CUDA out of memory` | jalankan satu bahasa saja, atau tambahkan `--cpu` |
| Suara logatnya aneh | ganti audio contohnya, bukan setelan modelnya |
| Kata terakhir terpotong | audio contoh kurang hening di ujung; tambahkan ±1 detik |
| `ffmpeg gagal` | ffmpeg tidak ada di PATH |

Aplikasi tidak akan rusak kalau perenderan gagal separuh jalan: bahasa yang
belum punya rekaman otomatis kembali ke lapisan suara peramban. Cek keadaan
sebenarnya di halaman **Audit suara** (`#/<kode>/suara`).
