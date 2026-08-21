/* ── Modul Kanji ──────────────────────────────────────────────────
   Halaman kanji untuk bahasa Jepang.

   Disusun menurut TEMA, bukan urutan coretan, dan menekankan komponen
   pembentuk — menuruti nasihat yang sudah tertulis di halaman ujian
   JLPT aplikasi ini sendiri: "Kanji: hafalkan lewat komponen, bukan
   coretan."

   Tidak ada animasi goresan di sini. Data urutan coretan kanji yang
   beredar bebas semuanya berlisensi berbagi-serupa atau lebih ketat,
   dan aplikasi ini sengaja dijaga bebas dari kewajiban lisensi. Yang
   hilang cuma animasinya; cara menghafal yang lebih ampuh justru tetap
   ada.                                                                */

import { $, $$, el, html, raw, esc, toast, shuffle, sample, buatPilihan } from '../ui.js';
import { ico } from '../icons.js';
import { addXP, addMinutes, state } from '../state.js';
import { runQuiz } from '../quiz.js';
import { ensure as srsEnsure, card as srsCard, grade as srsGrade } from '../srs.js';
import { keLatin } from '../translit.js';
import { KANJI, KANJI_GRUP, cariKanji } from '../../data/lang/ja-kanji.js';

const P = (code, to) => `#/${code}/${to}`;
const rom = t => keLatin('ja', t) || '';

/** Tombol suara standar — sama seperti di halaman bahasa lain. */
const spk = (teks, size = 14) =>
  `<button class="speak-btn" data-say-lang="${esc(teks)}" data-rom="${esc(rom(teks))}"
     title="Dengarkan" aria-label="Dengarkan ${esc(teks)}">${ico('speaker', { size })}</button>`;

/** Bacaan + alih aksaranya, dipakai di daftar on'yomi/kun'yomi. */
const bacaan = r => `<span class="kj-baca">${esc(r)}
  <i class="kj-baca__r">${esc(rom(r))}</i>${spk(r.replace(/-/g, ''), 12)}</span>`;

/* ── Daftar kanji ─────────────────────────────────────────────── */
export function kanjiIndex(code, L) {
  const main = $('#main');
  const dikuasai = KANJI.filter(k => srsCard(kartuId(k.k))).length;

  main.innerHTML = html`
  <a class="small muted" href="${P(code, '')}">${raw(ico('chevronL', { size: 14 }))} ${esc(L.name)}</a>

  <div class="row row--between" style="align-items:flex-start;margin:var(--s-3) 0 var(--s-2)">
    <div>
      <h1 style="margin:0">Kanji</h1>
      <p class="soft" style="margin:.3rem 0 0">
        ${KANJI.length} kanji tingkat N5 — yang paling sering muncul di papan
        penunjuk, menu, dan tiket. Dikelompokkan menurut tema supaya saling
        mengikat, bukan berdiri sendiri-sendiri.</p>
    </div>
    <a class="btn btn--primary" href="${P(code, 'kanji/latihan')}">
      ${raw(ico('target', { size: 16 }))} Latihan</a>
  </div>

  <div class="note" style="margin-bottom:var(--s-5)">
    <strong>Dua jenis bacaan.</strong> <b>On'yomi</b> (ditulis katakana)
    adalah bunyi serapan dari Tionghoa — muncul saat kanji bergabung dengan
    kanji lain: 学校 <i>gakkou</i>. <b>Kun'yomi</b> (ditulis hiragana) adalah
    kata Jepang aslinya — muncul saat kanji berdiri sendiri atau berekor
    hiragana: 学ぶ <i>manabu</i>. Menebak yang mana yang dipakai adalah
    kesulitan sesungguhnya, dan satu-satunya jalan adalah menghafal per kata,
    bukan per kanji.
  </div>

  ${raw(dikuasai ? `<div class="row" style="margin-bottom:var(--s-4)">
    <div class="bar" style="flex:1"><i style="width:${Math.round(dikuasai / KANJI.length * 100)}%"></i></div>
    <span class="small muted nowrap">${dikuasai} / ${KANJI.length} masuk kartu hafalan</span>
  </div>` : '')}

  ${KANJI_GRUP.map(g => `
    <div class="card" style="margin-bottom:var(--s-4)">
      <div class="card__title">${esc(g.nama)}
        <span class="muted">${g.kanji.length} kanji</span></div>
      <p class="small soft" style="margin:.6rem 0 .9rem">${esc(g.catatan)}</p>
      <div class="kj-grid">
        ${g.kanji.map(k => `<a class="kj-cell${srsCard(kartuId(k.k)) ? ' is-hafal' : ''}"
            href="${P(code, 'kanji/' + encodeURIComponent(k.k))}" title="${esc(k.arti)}">
            <span class="kj-cell__k">${esc(k.k)}</span>
            <span class="kj-cell__a">${esc(k.arti.split(';')[0])}</span>
            <span class="kj-cell__n">${k.coret}</span>
          </a>`).join('')}
      </div>
    </div>`).join('')}`;

  main.dataset.langScope = code;
}

/* ── Satu kanji ───────────────────────────────────────────────── */
export function kanjiDetail(code, L, huruf) {
  const k = cariKanji(decodeURIComponent(huruf));
  const main = $('#main');
  if (!k) {
    main.innerHTML = html`<div class="card card--pad-lg t-c stack">
      <h2>Kanji itu belum ada di modul ini</h2>
      <p class="soft">Modul ini memuat ${KANJI.length} kanji tingkat N5.</p>
      <a class="btn btn--primary" href="${P(code, 'kanji')}">Lihat daftarnya</a></div>`;
    return;
  }

  const i = KANJI.indexOf(k);
  const sblm = KANJI[i - 1], sesudah = KANJI[i + 1];
  const grup = KANJI_GRUP.find(g => g.id === k.grup);
  const sudah = !!srsCard(kartuId(k.k));

  main.innerHTML = html`
  <a class="small muted" href="${P(code, 'kanji')}">${raw(ico('chevronL', { size: 14 }))} Kanji</a>

  <div class="kj-head card" style="margin:var(--s-3) 0 var(--s-4)">
    <div class="kj-head__glyph">${esc(k.k)}</div>
    <div class="kj-head__info stack">
      <div>
        <h1 style="margin:0">${esc(k.arti)}</h1>
        <div class="small muted">${k.coret} coretan · ${esc(grup?.nama || '')}</div>
      </div>
      <div class="kj-bacaan">
        <div><span class="kj-tag">on'yomi</span>
          ${raw(k.on.length ? k.on.map(bacaan).join('') : '<i class="muted small">tidak dipakai</i>')}</div>
        <div><span class="kj-tag kj-tag--kun">kun'yomi</span>
          ${raw(k.kun.length ? k.kun.map(bacaan).join('') : '<i class="muted small">tidak dipakai</i>')}</div>
      </div>
      <button class="btn ${sudah ? '' : 'btn--primary'} btn--sm" id="kjHafal" ${sudah ? 'disabled' : ''}>
        ${raw(ico('cards', { size: 15 }))} ${sudah ? 'Sudah di kartu hafalan' : 'Masukkan ke kartu hafalan'}</button>
    </div>
  </div>

  <div class="card" style="margin-bottom:var(--s-4)">
    <div class="card__title">${raw(ico('grammar', { size: 17 }))} Dari mana bentuknya</div>
    <p style="margin:.7rem 0 0">${esc(k.komponen)}</p>
  </div>

  <div class="card" style="margin-bottom:var(--s-4)">
    <div class="card__title">Kata yang memakainya</div>
    <div class="stack" style="margin-top:.8rem">
      ${k.kata.map(([tulis, baca, arti]) => `
        <div class="kj-kata">
          <div class="kj-kata__t">${esc(tulis)}${spk(tulis)}</div>
          <div class="kj-kata__b">${esc(baca)} <i>${esc(rom(baca))}</i></div>
          <div class="kj-kata__a soft">${esc(arti)}</div>
        </div>`).join('')}
    </div>
  </div>

  <div class="row row--between">
    ${raw(sblm ? `<a class="btn btn--sm" href="${P(code, 'kanji/' + encodeURIComponent(sblm.k))}">
      ${ico('chevronL', { size: 14 })} ${esc(sblm.k)} ${esc(sblm.arti.split(';')[0])}</a>` : '<span></span>')}
    ${raw(sesudah ? `<a class="btn btn--sm" href="${P(code, 'kanji/' + encodeURIComponent(sesudah.k))}">
      ${esc(sesudah.k)} ${esc(sesudah.arti.split(';')[0])} ${ico('chevronR', { size: 14 })}</a>` : '<span></span>')}
  </div>`;

  main.dataset.langScope = code;

  $('#kjHafal')?.addEventListener('click', e => {
    srsEnsure(kartuId(k.k));
    addXP(4, 'reading');
    e.target.closest('button').disabled = true;
    e.target.closest('button').textContent = 'Sudah di kartu hafalan';
    toast(`${k.k} masuk kartu hafalan`);
  });
}

const kartuId = c => `ja:kanji:${c}`;

/* ── Latihan ──────────────────────────────────────────────────── */
export function kanjiLatihan(code, L) {
  const main = $('#main');
  main.innerHTML = html`
    <a class="small muted" href="${P(code, 'kanji')}">${raw(ico('chevronL', { size: 14 }))} Kanji</a>
    <h1 style="margin:var(--s-3) 0 var(--s-4)">Latihan kanji</h1>
    <div id="kjKuis"></div>`;
  main.dataset.langScope = code;

  const mulai = Date.now();
  runQuiz($('#kjKuis'), soalKanji(20), {
    title: 'Latihan kanji', xpPerItem: 7, skill: 'reading', quizKey: 'ja:kanji',
    onDone: () => addMinutes(Math.max(1, Math.round((Date.now() - mulai) / 6e4)))
  });
}

/**
 * Soal dibuat dari data yang sama, jadi tidak bisa menyimpang darinya.
 * Tiga bentuk, diselang-seling supaya tidak ada satu pola yang bisa
 * ditebak tanpa memahami kanjinya.
 */
function soalKanji(n = 20) {
  const kolam = shuffle(KANJI.slice());
  const soal = [];

  for (const k of kolam) {
    if (soal.length >= n) break;
    const bentuk = soal.length % 3;

    if (bentuk === 0) {
      /* kanji → arti */
      const salah = shuffle(KANJI.filter(x => x.k !== k.k && x.grup !== k.grup));
      const pil = buatPilihan(k.arti, salah.map(x => x.arti));
      if (!pil) continue;
      soal.push({ t: 'mcq', tag: 'arti', q: `Apa arti ${k.k}?`, opts: pil.opts, a: pil.a,
                  why: k.komponen });

    } else if (bentuk === 1) {
      /* kata → bacaannya */
      const [tulis, baca, arti] = k.kata[0];
      const lain = shuffle(KANJI.filter(x => x.k !== k.k && x.kata[0]));
      const pil = buatPilihan(baca, lain.map(x => x.kata[0][1]));
      if (!pil) continue;
      soal.push({ t: 'mcq', tag: 'bacaan', q: `Bagaimana ${tulis} dibaca?`, opts: pil.opts, a: pil.a,
                  why: `${tulis} = ${arti}. Dibaca ${baca} (${rom(baca)}).` });

    } else {
      /* arti → kanji mana. Pengecohnya diambil dari kanji berjumlah
         coretan sama supaya soalnya tidak bisa ditebak dari bentuknya;
         kalau tidak cukup, baru diambil sembarang. */
      const sepadan = KANJI.filter(x => x.k !== k.k && x.coret === k.coret);
      const salah = shuffle(sepadan.length >= 3 ? sepadan : KANJI.filter(x => x.k !== k.k));
      const pil = buatPilihan(k.k, salah.map(x => x.k));
      if (!pil) continue;
      const opts = pil.opts;
      soal.push({ t: 'mcq', tag: 'tulisan', q: `Kanji mana yang berarti "${k.arti}"?`, opts, a: pil.a,
                  why: `${k.k} — ${k.komponen}` });
    }
  }
  return soal;
}
