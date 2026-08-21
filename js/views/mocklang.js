/* ── Simulasi ujian bahasa ─────────────────────────────────────────
   Satu pemain ujian untuk kedelapan bahasa. Bentuknya mengikuti cetak
   biru resmi: urutan bagian, jumlah soal, batas waktu per bagian, dan
   cara penilaiannya. Waktu habis = bagian ditutup, persis seperti aslinya. */

import { $, $$, esc, html, raw, toast, mmss, confirmDialog, nf } from '../ui.js';
import { ico } from '../icons.js';
import { state, recordExam, addXP, addMinutes } from '../state.js';
import { blueprintUntuk, menitTotal, soalTotal } from '../../data/lang/exam-blueprints.js';
import { bangunUjian, nilai } from '../mockgen.js';
import { ucap, stop as stopSuara } from '../voice.js';
import { langMeta } from '../langctx.js';

const main = () => $('#main');
const P = (code, s) => `#/${code}${s ? '/' + s : ''}`;

/* ── Halaman pilih tingkat ────────────────────────────────────── */
export function pilihTingkat(code, L) {
  const bp = blueprintUntuk(code);
  const meta = langMeta(code);
  if (!bp) {
    main().innerHTML = `<div class="empty"><div class="empty__ico">${ico('warn', { size: 34 })}</div>
      <h3>Belum ada cetak biru ujian untuk bahasa ini</h3>
      <a class="btn btn--soft" href="${P(code, 'ujian')}">Kembali</a></div>`;
    return;
  }

  main().innerHTML = `
    <div class="page-head">
      <div class="page-head__txt">
        <span class="eyebrow">${esc(meta.name)} · simulasi</span>
        <h1>${esc(bp.nama)}</h1>
        <p class="lede">${esc(bp.catatan)}</p>
      </div>
    </div>

    <div class="note" style="margin-bottom:var(--s-5)">
      <strong>Yang ditiru dan yang tidak</strong>
      Struktur bagian, jumlah soal, batas waktu, dan cara penilaian mengikuti ketentuan
      ${esc(bp.penuh)}. Isi soalnya disusun dari materi SankaLingo GO sendiri — bukan salinan soal
      ujian sungguhan. Karena itu skor di sini adalah <b>perkiraan kesiapan</b>, bukan nilai resmi.
    </div>

    <div class="grid grid--2">
      ${bp.tingkat.map((t, i) => {
        const menit = menitTotal(t), soal = soalTotal(t);
        return `<div class="card">
          <div class="row row--between">
            <div class="card__title">${esc(t.nama)}</div>
            <span class="badge badge--brand">${esc(t.untuk)}</span>
          </div>
          <dl class="spec-list" style="margin-top:var(--s-3)">
            <div><dt>Bagian</dt><dd>${t.sections.length}</dd></div>
            <div><dt>Soal</dt><dd>${soal}</dd></div>
            <div><dt>Durasi</dt><dd>${menit} menit</dd></div>
            <div><dt>Skala</dt><dd>${t.total}${t.lulus ? ` · lulus ${t.lulus}` : ''}</dd></div>
          </dl>
          <ul class="stack stack--sm" style="margin-top:var(--s-3)">
            ${t.sections.map(s => `<li class="small soft">${esc(s.name)} — ${s.count} soal / ${s.minutes} mnt</li>`).join('')}
          </ul>
          <div class="row" style="margin-top:var(--s-4)">
            <a class="btn btn--primary" href="${P(code, 'ujian/simulasi/' + t.id)}">
              ${ico('play', { size: 15 })} Ujian penuh</a>
            <a class="btn btn--soft" href="${P(code, 'ujian/simulasi/' + t.id + '/ringkas')}">
              Versi singkat</a>
          </div>
        </div>`;
      }).join('')}
    </div>

    ${riwayat(code)}`;
}

function riwayat(code) {
  const daftar = (state().exams || []).filter(x => x.lang === code).slice(0, 8);
  if (!daftar.length) return '';
  return `<div class="card" style="margin-top:var(--s-5)">
    <div class="card__title">${ico('chart')} Riwayat simulasimu</div>
    <div class="table-wrap" style="margin-top:var(--s-4)"><table class="tbl">
      <thead><tr><th>Tanggal</th><th>Tingkat</th><th>Skor</th><th>Hasil</th></tr></thead>
      <tbody>${daftar.map(x => `<tr>
        <td class="small">${new Date(x.at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</td>
        <td class="small">${esc(x.tingkat || '')}</td>
        <td><b>${esc(String(x.score))}</b> <span class="xs muted">/ ${x.skala || ''}</span></td>
        <td class="small">${x.lulus === true ? '<b style="color:var(--ok)">lulus</b>'
                          : x.lulus === false ? '<span style="color:var(--warn)">belum</span>' : '—'}</td>
      </tr>`).join('')}</tbody></table></div></div>`;
}

/* ── Sesi ujian ───────────────────────────────────────────────── */
let sesi = null;

export function mulaiSimulasi(code, L, tingkatId, ringkas = false) {
  const bp = blueprintUntuk(code);
  const idx = Math.max(0, bp.tingkat.findIndex(t => t.id === tingkatId));
  const tingkat = { ...bp.tingkat[idx], __idx: idx };
  const paket = bangunUjian(code, L, tingkat, Date.now() % 100000, ringkas);

  sesi = { code, L, bp, paket, jawaban: {}, bagian: 0, mulai: Date.now(), selesai: false };
  gambarPembuka();
}

function gambarPembuka() {
  const { paket, bp } = sesi;
  const t = paket.tingkat;
  main().innerHTML = `
    <div class="card card--pad-lg" style="max-width:var(--max-read);margin-inline:auto">
      <span class="eyebrow">${esc(bp.nama)}</span>
      <h1 style="margin:.3rem 0 .6rem">${esc(t.nama)}${paket.ringkas ? ' · versi singkat' : ''}</h1>
      <p class="soft">${esc(t.untuk)}</p>

      <div class="grid grid--3" style="margin-top:var(--s-5)">
        <div class="stat"><div class="stat__k">Soal</div><div class="stat__v">${paket.totalSoal}</div></div>
        <div class="stat"><div class="stat__k">Waktu</div><div class="stat__v">${paket.totalMenit}<span class="xs"> mnt</span></div></div>
        <div class="stat"><div class="stat__k">Bagian</div><div class="stat__v">${paket.sections.length}</div></div>
      </div>

      <div class="note note--warn" style="margin-top:var(--s-5)">
        <strong>Aturan yang ditiru dari ujian aslinya</strong>
        Setiap bagian punya batas waktunya sendiri. Waktu habis berarti bagian itu ditutup dan
        kamu tidak bisa kembali — sama seperti di ruang ujian. Audio pada bagian menyimak
        ${sesi.code === 'zh' && t.id <= 'hsk3' ? 'boleh diputar dua kali' : 'sebaiknya diputar sekali saja'}.
        Siapkan kertas coretan sebelum mulai.
      </div>

      <ol class="stack stack--sm" style="margin-top:var(--s-4);display:grid;gap:.5rem">
        ${paket.sections.map((s, i) => `<li class="tile">
          <div class="row row--between"><b>${i + 1}. ${esc(s.name)}</b>
            <span class="badge">${s.items.length} soal · ${s.minutes} mnt</span></div>
          ${s.note ? `<p class="xs muted" style="margin-top:.3rem">${esc(s.note)}</p>` : ''}
        </li>`).join('')}
      </ol>

      <div class="row" style="margin-top:var(--s-5)">
        <button class="btn btn--primary btn--lg" id="mkGo">${ico('play', { size: 17 })} Mulai ujian</button>
        <a class="btn btn--ghost" href="${P(sesi.code, 'ujian/simulasi')}">Batal</a>
      </div>
    </div>`;
  $('#mkGo').onclick = () => gambarBagian(0);
}

/* ── Satu bagian ──────────────────────────────────────────────── */
let timerId = null;

function gambarBagian(n) {
  clearInterval(timerId);
  stopSuara();
  sesi.bagian = n;
  const sec = sesi.paket.sections[n];
  if (!sec) return gambarHasil();

  const batas = Date.now() + sec.minutes * 60000;

  main().innerHTML = `
    <div class="mock-bar">
      <div>
        <span class="eyebrow">Bagian ${n + 1} dari ${sesi.paket.sections.length}</span>
        <b>${esc(sec.name)}</b>
      </div>
      <div class="mock-bar__time" id="mkTimer" aria-live="off">--:--</div>
      <div class="mock-bar__prog"><span id="mkProg">0</span> / ${sec.items.length}</div>
      <button class="btn btn--soft btn--sm" id="mkNext">Selesaikan bagian →</button>
    </div>
    ${sec.note ? `<p class="small muted" style="margin:var(--s-4) 0">${esc(sec.note)}</p>` : ''}
    <div id="mkList" class="stack" style="gap:var(--s-4);margin-top:var(--s-4)"></div>
    <div class="row" style="margin-top:var(--s-6);justify-content:center">
      <button class="btn btn--primary btn--lg" id="mkNext2">Selesaikan bagian ini →</button>
    </div>`;

  gambarSoal(sec);

  const tick = () => {
    const sisa = Math.max(0, Math.round((batas - Date.now()) / 1000));
    const el = $('#mkTimer');
    if (!el) return clearInterval(timerId);
    el.textContent = mmss(sisa);
    el.classList.toggle('is-warn', sisa <= 60 && sisa > 10);
    el.classList.toggle('is-bad', sisa <= 10);
    if (sisa <= 0) {
      clearInterval(timerId);
      toast('Waktu bagian ini habis.', 'warn', 4000);
      lanjutBagian(true);
    }
  };
  tick();
  timerId = setInterval(tick, 250);

  const konfirmasi = async () => {
    const terjawab = sec.items.filter((_, i) => sesi.jawaban[`${sec.id}:${i}`] !== undefined ||
      sesi.jawaban[`${sec.id}:tulis:${i}`] !== undefined).length;
    if (terjawab < sec.items.length) {
      const ya = await confirmDialog('Tutup bagian ini?',
        `Masih ada ${sec.items.length - terjawab} soal yang belum kamu jawab. ` +
        `Setelah ditutup kamu tidak bisa kembali ke bagian ini.`, 'Ya, tutup');
      if (!ya) return;
    }
    lanjutBagian(false);
  };
  $('#mkNext').onclick = konfirmasi;
  $('#mkNext2').onclick = konfirmasi;
}

function lanjutBagian(otomatis) {
  clearInterval(timerId);
  stopSuara();
  const n = sesi.bagian + 1;
  if (n >= sesi.paket.sections.length) return gambarHasil();
  gambarJeda(n, otomatis);
}

function gambarJeda(n, otomatis) {
  const sec = sesi.paket.sections[n];
  main().innerHTML = `
    <div class="card card--pad-lg t-c stack" style="max-width:560px;margin-inline:auto">
      <div style="font-size:2rem">${otomatis ? '⏱' : '✓'}</div>
      <h2>${otomatis ? 'Waktu habis' : 'Bagian selesai'}</h2>
      <p class="soft">Berikutnya: <b>${esc(sec.name)}</b> — ${sec.items.length} soal dalam ${sec.minutes} menit.</p>
      ${sec.note ? `<p class="small muted">${esc(sec.note)}</p>` : ''}
      <p class="xs muted">Waktu bagian berikutnya baru berjalan setelah kamu menekan tombol.</p>
      <button class="btn btn--primary btn--lg" id="mkGo2" style="margin-top:var(--s-3)">
        Mulai bagian ${n + 1} →</button>
    </div>`;
  $('#mkGo2').onclick = () => gambarBagian(n);
}

/* ── Soal ─────────────────────────────────────────────────────── */
function gambarSoal(sec) {
  const host = $('#mkList');
  host.innerHTML = sec.items.map((it, i) => {
    if (it.t === 'write') return kartuTulis(sec, it, i);
    return kartuMcq(sec, it, i);
  }).join('');

  host.addEventListener('click', async e => {
    const opt = e.target.closest('[data-opt]');
    if (opt) {
      const [i, j] = opt.dataset.opt.split(':').map(Number);
      sesi.jawaban[`${sec.id}:${i}`] = j;
      $$(`[data-opt^="${i}:"]`, host).forEach(b => b.classList.remove('is-picked'));
      opt.classList.add('is-picked');
      hitungProgres(sec);
      return;
    }
    const play = e.target.closest('[data-audio]');
    if (play) {
      const it = sec.items[+play.dataset.audio];
      play.classList.add('is-on');
      const putar = +(play.dataset.putar || 0) + 1;
      play.dataset.putar = putar;
      await ucap(sesi.code, { ...it.audio, rate: 0.92 });
      play.classList.remove('is-on');
      play.querySelector('.mk-play__n').textContent = `diputar ${putar}×`;
    }
  });

  host.addEventListener('change', e => {
    const cek = e.target.closest('[data-rubrik]');
    if (cek) {
      const [i, r] = cek.dataset.rubrik.split(':').map(Number);
      const kunci = `${sec.id}:tulis:${i}`;
      const arr = sesi.jawaban[kunci] || [];
      arr[r] = cek.checked;
      sesi.jawaban[kunci] = arr;
      hitungProgres(sec);
    }
  });

  host.addEventListener('input', e => {
    const ta = e.target.closest('[data-tulis]');
    if (!ta) return;
    const i = +ta.dataset.tulis;
    /* Jawabannya DISIMPAN. Sebelumnya penangan ini hanya memperbarui
       penghitung huruf, jadi teks yang diketik peserta hilang begitu
       bagiannya ditutup — dan layar tinjauan pun tidak pernah
       menampilkannya. Untuk bagian menulis, teks itulah satu-satunya
       hasil kerjanya. */
    sesi.jawaban[`${sec.id}:teks:${i}`] = ta.value;
    const n = ta.value.trim().length;
    const info = $(`#mkHit${i}`, host);
    const it = sec.items[i];
    if (info) {
      info.textContent = `${nf(n)} huruf` + (it.min ? ` · target ${nf(it.min)}` : '');
      info.style.color = it.min && n >= it.min ? 'var(--ok)' : 'var(--text-mute)';
    }
  });
}

function hitungProgres(sec) {
  const n = sec.items.filter((_, i) =>
    sesi.jawaban[`${sec.id}:${i}`] !== undefined ||
    (sesi.jawaban[`${sec.id}:tulis:${i}`] || []).some(Boolean)).length;
  const el = $('#mkProg');
  if (el) el.textContent = n;
}

function kartuMcq(sec, it, i) {
  const bacaan = it.bacaan ? `
    <div class="mock-passage" style="margin-bottom:var(--s-3)">
      <div class="row row--between">
        <b>${esc(it.bacaan.judul)}</b>
        <span class="badge">${esc(it.bacaan.jenis)} · ${esc(it.bacaan.level)}</span>
      </div>
      <p style="white-space:pre-line;margin-top:.6rem;font-size:var(--fs-lg);line-height:1.8">${esc(it.bacaan.teks)}</p>
      ${it.bacaan.rom ? `<details style="margin-top:.6rem"><summary class="xs">Lihat romanisasi</summary>
        <p class="xs mono" style="white-space:pre-line;color:var(--info)">${esc(it.bacaan.rom)}</p></details>` : ''}
    </div>` : '';

  const audio = it.audio ? `
    <button class="btn btn--soft mk-play" data-audio="${i}" type="button">
      ${ico('volume', { size: 16 })} Putar audio
      <span class="mk-play__n xs muted" style="margin-left:.4rem">belum diputar</span>
    </button>` : '';

  return `<div class="card" id="mkQ${i}">
    ${bacaan}
    <div class="row row--between" style="align-items:flex-start">
      <div class="mock-q">
        <span class="mock-q__n">${i + 1}</span>
        <span style="white-space:pre-line">${esc(it.q)}</span>
      </div>
      ${it.tag ? `<span class="badge">${esc(it.tag)}</span>` : ''}
    </div>
    ${audio ? `<div style="margin-top:var(--s-3)">${audio}</div>` : ''}
    <div class="opts" style="margin-top:var(--s-3)">
      ${it.opts.map((o, j) => `<button class="opt" type="button" data-opt="${i}:${j}">
        <span class="opt__k">${'ABCD'[j]}</span><span>${esc(o)}</span></button>`).join('')}
    </div>
  </div>`;
}

function kartuTulis(sec, it, i) {
  return `<div class="card">
    <div class="mock-q"><span class="mock-q__n">${i + 1}</span>
      <span><b>${esc(it.q)}</b></span></div>
    <p class="small soft" style="margin-top:.5rem">${esc(it.petunjuk)}</p>
    <label class="sr-only" for="mkTa${i}">Jawaban tertulis soal ${i + 1}</label>
    <textarea class="textarea" id="mkTa${i}" data-tulis="${i}" rows="8"
      style="margin-top:var(--s-3)" placeholder="Tulis jawabanmu di sini…">${esc(sesi?.jawaban?.[`${sec.id}:teks:${i}`] || '')}</textarea>
    <div class="row row--between" style="margin-top:.4rem">
      <span class="xs muted" id="mkHit${i}">0 huruf${it.min ? ` · target ${nf(it.min)}` : ''}</span>
    </div>
    <div class="note" style="margin-top:var(--s-3)">
      <strong>Nilai sendiri dengan rubrik</strong>
      Bagian menulis pada ujian asli dinilai penguji manusia. Di sini kamu menilainya sendiri —
      baca ulang tulisanmu dengan jujur lalu centang yang benar-benar terpenuhi.
      <div class="stack stack--sm" style="margin-top:.7rem">
        ${it.rubrik.map((r, k) => `<label class="switch">
          <input type="checkbox" data-rubrik="${i}:${k}" />
          <span>${esc(r)}</span></label>`).join('')}
      </div>
    </div>
  </div>`;
}

/* ── Hasil ────────────────────────────────────────────────────── */
function gambarHasil() {
  clearInterval(timerId);
  stopSuara();
  sesi.selesai = true;
  const { paket, code } = sesi;
  const h = nilai(paket, sesi.jawaban);
  const menit = Math.round((Date.now() - sesi.mulai) / 60000);

  recordExam({ exam: paket.tingkat.id, lang: code, tingkat: paket.tingkat.nama,
               right: h.perBagian.reduce((a, s) => a + s.benar, 0),
               total: h.perBagian.reduce((a, s) => a + s.dari, 0),
               score: h.skor, skala: h.skala, lulus: h.lulus });
  addXP(Math.round(h.persen / 2), 'grammar');
  addMinutes(menit);

  main().innerHTML = `
    <div class="page-head">
      <div class="page-head__txt">
        <span class="eyebrow">${esc(sesi.bp.nama)} · ${esc(paket.tingkat.nama)}</span>
        <h1>${h.lulus === true ? 'Lulus perkiraan' : h.lulus === false ? 'Belum lulus' : 'Hasil simulasi'}</h1>
        <p class="lede">${esc(h.catatan)}</p>
      </div>
    </div>

    <div class="grid grid--4" style="margin-bottom:var(--s-5)">
      <div class="stat"><div class="stat__k">Skor</div>
        <div class="stat__v">${h.skor}</div><div class="stat__note">dari ${h.skala}</div></div>
      <div class="stat"><div class="stat__k">Ketepatan</div>
        <div class="stat__v">${h.persen}%</div></div>
      <div class="stat"><div class="stat__k">Waktu terpakai</div>
        <div class="stat__v">${menit}<span class="xs"> mnt</span></div>
        <div class="stat__note">jatah ${paket.totalMenit} menit</div></div>
      <div class="stat"><div class="stat__k">Soal benar</div>
        <div class="stat__v">${h.perBagian.reduce((a, s) => a + s.benar, 0)}</div>
        <div class="stat__note">dari ${h.perBagian.reduce((a, s) => a + s.dari, 0)}</div></div>
    </div>

    <div class="card">
      <div class="card__title">Rincian per bagian</div>
      <div class="stack stack--sm" style="margin-top:var(--s-4)">
        ${h.perBagian.map(s => {
          const sec = paket.sections.find(x => x.id === s.id);
          const pct = Math.round(s.rasio * 100);
          return `<div>
            <div class="row row--between">
              <b>${esc(s.nama)}</b>
              <span class="small">${s.dari ? `${s.benar}/${s.dari} benar · ` : ''}<b>${s.poin}</b> / ${sec.points}</span>
            </div>
            <div class="bar" style="margin-top:.3rem"><i style="width:${pct}%;
              background:${pct >= 60 ? 'var(--ok)' : pct >= 40 ? 'var(--warn)' : 'var(--bad)'}"></i></div>
          </div>`;
        }).join('')}
      </div>
      <p class="xs muted" style="margin-top:var(--s-4)">${esc(sesi.bp.catatan)}</p>
    </div>

    <div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">${ico('bulb')} Yang perlu kamu perbaiki</div>
      ${saran(h, paket)}
    </div>

    <div class="row" style="margin-top:var(--s-5)">
      <button class="btn btn--primary" id="mkReview">${ico('list', { size: 15 })} Tinjau semua soal</button>
      <a class="btn btn--soft" href="${P(code, 'ujian/simulasi')}">Simulasi lain</a>
      <a class="btn btn--ghost" href="${P(code, 'ujian')}">Kembali ke halaman ujian</a>
    </div>
    <div id="mkReviewBox" style="margin-top:var(--s-5)"></div>`;

  $('#mkReview').onclick = () => gambarTinjauan();
}

function saran(h, paket) {
  const lemah = h.perBagian.filter(s => s.rasio < 0.6).sort((a, b) => a.rasio - b.rasio);
  if (!lemah.length) {
    return `<p class="small soft" style="margin-top:.6rem">Semua bagian di atas 60%.
      Naikkan tingkat kesulitan, atau kerjakan versi penuh kalau tadi kamu memilih versi singkat.</p>`;
  }
  const petunjuk = {
    listen: ['Kerjakan menu <b>Menyimak</b> tiap hari 10 menit — dikte melatih telinga jauh lebih cepat daripada mendengar pasif.',
             'Putar audio satu kali saja saat berlatih, persis seperti ujian.'],
    read:   ['Baca pertanyaannya dulu, baru teksnya — ini menghemat sepertiga waktu.',
             'Kerjakan menu <b>Kurikulum</b> bagian bacaan dan tandai kata yang tidak kamu kenal.'],
    grammar:['Buka <b>Tata Bahasa</b> dan kerjakan latihan pada topik yang skornya rendah.',
             'Perhatikan bagian “jebakan khas penutur Indonesia” di tiap topik.'],
    vocab:  ['Buka <b>Kartu</b> setiap hari. Kosakata naik paling cepat lewat pengulangan berjarak.',
             'Tambah satu paket kosakata baru per minggu, jangan lebih.'],
    write:  ['Tulis satu paragraf tiap hari lalu bandingkan dengan contoh di materi.',
             'Hitung panjang tulisanmu — kehabisan panjang adalah penyebab paling sering nilai turun.']
  };
  return `<div class="stack stack--sm" style="margin-top:.7rem">
    ${lemah.map(s => {
      const sec = paket.sections.find(x => x.id === s.id);
      const tips = petunjuk[sec.kind] || [];
      return `<div class="tile">
        <div class="row row--between"><b>${esc(s.nama)}</b>
          <span class="badge badge--warn">${Math.round(s.rasio * 100)}%</span></div>
        <ul class="stack stack--sm" style="margin-top:.5rem;display:grid;gap:.35rem">
          ${tips.map(t => `<li class="small soft">▸ ${t}</li>`).join('')}
        </ul></div>`;
    }).join('')}</div>`;
}

function gambarTinjauan() {
  const box = $('#mkReviewBox');
  const { paket } = sesi;
  box.innerHTML = paket.sections.map(sec => `
    <h2 class="sec-h" style="margin:var(--s-6) 0 var(--s-3)">${esc(sec.name)}</h2>
    ${sec.items.map((it, i) => {
      if (it.t === 'write') {
        const teks = sesi.jawaban[`${sec.id}:teks:${i}`] || '';
        const jml = teks.trim() ? teks.trim().split(/\s+/).length : 0;
        return `<div class="card" style="margin-bottom:var(--s-3)">
          <b>${esc(it.q)}</b><p class="small soft">${esc(it.petunjuk)}</p>
          ${teks.trim()
            ? `<div class="row row--between" style="margin-top:.6rem">
                 <span class="xs muted">Tulisanmu</span>
                 <span class="badge">${jml} kata${it.min ? ` · target ${nf(it.min)} huruf` : ''}</span></div>
               <div class="passage small" style="margin-top:.3rem">${esc(teks)}</div>`
            : `<p class="xs muted" style="margin-top:.6rem">Tidak ada jawaban tertulis.</p>`}
        </div>`;
      }
      const jwb = sesi.jawaban[`${sec.id}:${i}`];
      const benar = jwb === it.a;
      return `<div class="card ${benar ? '' : 'card--bad'}" style="margin-bottom:var(--s-3)">
        <div class="row row--between">
          <span class="small"><b>${i + 1}.</b> ${esc(it.q)}</span>
          <span class="badge ${benar ? 'badge--ok' : 'badge--bad'}">${benar ? 'benar' : 'salah'}</span>
        </div>
        <div class="stack stack--sm" style="margin-top:.6rem">
          ${it.opts.map((o, j) => `<div class="small ${j === it.a ? 'b' : ''}"
            style="color:${j === it.a ? 'var(--ok)' : j === jwb ? 'var(--bad)' : 'var(--text-soft)'}">
            ${'ABCD'[j]}. ${esc(o)}${j === it.a ? ' ✓' : j === jwb ? ' ← jawabanmu' : ''}</div>`).join('')}
        </div>
        ${it.why ? `<p class="xs muted" style="margin-top:.5rem">${esc(it.why)}</p>` : ''}
      </div>`;
    }).join('')}`).join('');
  box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  $('#mkReview').textContent = 'Tinjauan ditampilkan di bawah';
  $('#mkReview').disabled = true;
}
