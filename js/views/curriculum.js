/* Kurikulum: peta level → unit → pelajaran, dan pemutar pelajaran. */

import { $, el, html, raw, esc, ring, toast, shuffle, sample } from '../ui.js';
import { tipBantuan } from '../comfortui.js';
import { state, unitPct, lessonDone, markLesson, addXP, addMinutes } from '../state.js';
import { runQuiz } from '../quiz.js';
import { LEVELS, levelById, unitById, grammarById, packById, ALL_PACKS,
         DICTATIONS, READINGS, SHADOWING, SPEAKING_PROMPTS, WRITING_TASKS, CEFR_CANDO } from '../data.js';
import { renderTopicBody } from './grammar.js';
import { flashSession } from './vocab.js';

/* ── Daftar level ─────────────────────────────────────────────── */
export function renderLevels() {
  const s = state();
  $('#main').innerHTML = html`
  ${raw(tipBantuan('kurikulum-en',
    'Kurikulum ini <b>tidak mengunci</b> apa pun. Kerjakan dari atas kalau kamu baru mulai, atau lompat ke unit yang kamu butuhkan. Cincin persentase di tiap unit menandakan berapa pelajaran yang sudah kamu tutup.'))}
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Peta belajar</span>
      <h1>Kurikulum CEFR A1 → C2</h1>
      <p>Enam level, ${LEVELS.reduce((a, l) => a + l.units.length, 0)} unit, disusun berurutan.
         Setiap unit berisi pelajaran tata bahasa, kosakata tematik, latihan keterampilan, dan ujian unit.</p>
    </div>
    <a class="btn btn--soft" href="#/placement">🧭 Tidak yakin mulai dari mana?</a>
  </div>

  <div class="lv-track">
    ${LEVELS.map(l => {
      const p = Math.round(l.units.reduce((a, u) => a + unitPct(u), 0) / l.units.length);
      return `<a class="lv-card" href="#/level/${l.id}" style="--lv:var(--lv-${l.id.toLowerCase()})">
        <div class="lv-card__badge">${l.id}</div>
        <div class="lv-card__body">
          <h2 class="sec-h">${esc(l.nameId)} <span class="muted small">· ${esc(l.name)}</span></h2>
          <p>${esc(l.blurb)}</p>
          <div class="row" style="gap:var(--s-2);margin-top:.5rem">
            <span class="badge">${l.units.length} unit</span>
            <span class="badge">${l.units.reduce((a, u) => a + u.lessons.length, 0)} pelajaran</span>
            <span class="badge">~${l.hours} jam</span>
            <span class="badge badge--brand">${esc(l.ieltsEq.split('·')[0].trim())}</span>
          </div>
        </div>
        <div class="lv-card__pct"><b>${p}%</b><div class="xs muted">selesai</div></div>
      </a>`;
    }).join('')}
  </div>

  <div class="card" style="margin-top:var(--s-6)">
    <div class="card__title">Cara memakai kurikulum ini</div>
    <div class="grid grid--3" style="margin-top:var(--s-4)">
      ${[
        ['1. Urut, jangan lompat','Tiap unit mengandalkan unit sebelumnya. Melompat membuat lubang yang muncul lagi di level atas.'],
        ['2. Selesaikan ujian unit','Nilai di bawah 80% berarti ulangi pelajarannya, bukan lanjut.'],
        ['3. Kartu hafalan tiap hari','Sepuluh menit kartu hafalan harian lebih berguna daripada dua jam sekali seminggu.']
      ].map(([t, d]) => `<div class="card card--flat"><div class="b">${esc(t)}</div>
        <p class="small soft" style="margin-top:.3rem">${esc(d)}</p></div>`).join('')}
    </div>
  </div>`;
}

/* ── Satu level ───────────────────────────────────────────────── */
export function renderLevel(id) {
  const l = levelById(id);
  if (!l) return $('#main').innerHTML = '<p>Level tidak ditemukan.</p>';
  const p = Math.round(l.units.reduce((a, u) => a + unitPct(u), 0) / l.units.length);

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/curriculum">← Semua level</a>
      <h1 style="margin-top:.4rem"><span class="badge badge--lv lv-${l.id}">${l.id}</span> ${esc(l.nameId)}</h1>
      <p>${esc(l.blurb)}</p>
      <p class="small"><b>Target:</b> ${esc(l.target)}</p>
      <p class="small muted">${esc(l.ieltsEq)} · perkiraan ${l.hours} jam belajar</p>
    </div>
    ${raw(ring(p, { size: 96, sub: 'selesai' }))}
  </div>

  <div class="note" style="margin-bottom:var(--s-5)">
    <strong>Yang bisa kamu lakukan setelah level ini</strong>
    ${raw(CEFR_CANDO[l.id].map(c => `<div>• ${esc(c)}</div>`).join(''))}
  </div>

  <div class="grid grid--2">
    ${l.units.map(u => {
      const up = unitPct(u);
      return `<a class="card card--link" href="#/unit/${u.id}">
        <div class="row row--between">
          <div class="card__title">Unit ${u.n} · ${esc(u.titleId)}</div>
          <span class="badge ${up === 100 ? 'badge--ok' : ''}">${up}%</span>
        </div>
        <div class="card__sub">${esc(u.title)}</div>
        <p class="small soft" style="margin:.6rem 0">${esc(u.goal)}</p>
        <div class="bar"><i style="width:${up}%"></i></div>
        <div class="row" style="margin-top:.7rem;gap:6px">
          ${u.lessons.map(ls => `<span class="badge ${lessonDone(ls.id) ? 'badge--ok' : ''}"
            title="${esc(ls.title)}">${ls.icon}</span>`).join('')}
        </div>
      </a>`;
    }).join('')}
  </div>`;
}

/* ── Satu unit ────────────────────────────────────────────────── */
export function renderUnit(id) {
  const u = unitById(id);
  if (!u) return $('#main').innerHTML = '<p>Unit tidak ditemukan.</p>';
  const lv = levelById(u.level);
  const p = unitPct(u);

  /* Judul dan anak judul sekarang ikut tersimpan di data pelajarannya
     (lihat data/curriculum.js), jadi tampilan ini tidak perlu lagi
     menebaknya — dan pemutar pelajaran, pencarian, serta halaman
     kemajuan memakai judul yang sama persis. */
  const label = ls => ls.title;
  const sub = ls => ls.sub || ({
    listen: 'Dikte dari kalimat unit ini', speak: 'Rekam dan dapatkan skor',
    read: 'Bacaan + soal pemahaman', write: 'Kerangka, model, dan pemeriksa',
    test: `${u.grammar.length * 4} soal campuran`
  }[ls.type] || '');

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/level/${u.level}">← ${esc(lv.nameId)} (${u.level})</a>
      <h1 style="margin-top:.4rem">Unit ${u.n} · ${esc(u.titleId)}</h1>
      <p>${esc(u.goal)}</p>
    </div>
    ${raw(ring(p, { size: 92 }))}
  </div>

  ${raw(u.cando.length ? `<div class="note note--ok" style="margin-bottom:var(--s-5)">
    <strong>Setelah unit ini kamu bisa</strong>
    ${u.cando.map(c => `<div>• ${esc(c)}</div>`).join('')}</div>` : '')}

  <div class="unit-list">
    ${u.lessons.map((ls, i) => `
      <a class="unit ${lessonDone(ls.id) ? 'is-done' : ''}" href="#/lesson/${u.id}/${ls.id}">
        <span class="unit__n">${lessonDone(ls.id) ? '✓' : i + 1}</span>
        <span style="font-size:1.15rem">${ls.icon}</span>
        <span class="unit__b"><strong>${esc(label(ls))}</strong><span>${esc(sub(ls))}</span></span>
        <span class="badge">+${ls.xp} XP</span>
      </a>`).join('')}
  </div>`;
}

/* ── Pemutar pelajaran ────────────────────────────────────────── */
export function renderLesson(unitId, lessonId) {
  const u = unitById(unitId);
  const ls = u?.lessons.find(x => x.id === lessonId);
  if (!u || !ls) return $('#main').innerHTML = '<p>Pelajaran tidak ditemukan.</p>';

  const head = el('div', { class: 'page-head' });
  head.innerHTML = html`
    <div class="page-head__txt">
      <a class="small muted" href="#/unit/${u.id}">← Unit ${u.n} · ${esc(u.titleId)}</a>
      <h1 style="margin-top:.4rem">${ls.icon} ${esc(ls.title)}</h1>
      ${ls.sub ? `<p class="soft">${esc(ls.sub)}</p>` : ''}
      ${ls.tujuan ? `<p class="small muted" style="margin-top:.3rem">🎯 ${esc(ls.tujuan)}</p>` : ''}
    </div>
    <span class="badge badge--lv lv-${u.level}">${u.level}</span>`;
  const body = el('div', { id: 'lessonBody' });
  $('#main').append(head, body);

  /* Lihat catatan yang sama di js/views/langcourse.js: pelajaran tetap
     ditandai selesai walau antrean kartunya kosong, tetapi XP dan waktu
     belajar hanya diberikan atas pekerjaan yang benar-benar terjadi. */
  const finish = (pct = 100, { adaKerja = true } = {}) => {
    markLesson(ls.id, pct);
    if (adaKerja) {
      addXP(ls.xp, ls.type === 'grammar' ? 'grammar' : ls.type === 'vocab' ? 'vocab' : ls.type);
      addMinutes(8);
    }
    const next = u.lessons[u.lessons.indexOf(ls) + 1];
    body.innerHTML = html`
      <div class="card card--pad-lg t-c stack">
        <div style="font-size:2.4rem">🎉</div>
        <h2>Pelajaran selesai</h2>
        <p class="soft">+${ls.xp} XP · skor ${pct}%</p>
        <div class="row" style="justify-content:center">
          <a class="btn btn--soft" href="#/unit/${u.id}">Kembali ke unit</a>
          ${raw(next ? `<a class="btn btn--primary" href="#/lesson/${u.id}/${next.id}">Pelajaran berikutnya →</a>`
                     : `<a class="btn btn--primary" href="#/level/${u.level}">Unit berikutnya →</a>`)}
        </div>
      </div>`;
    toast(`+${ls.xp} XP · ${ls.title} selesai`, 'ok');
  };

  if (ls.type === 'grammar')  return lessonGrammar(body, ls, finish);
  if (ls.type === 'vocab')    return lessonVocab(body, ls, finish);
  if (ls.type === 'listen')   return lessonListen(body, u, finish);
  if (ls.type === 'speak')    return lessonSpeak(body, u, finish);
  if (ls.type === 'read')     return lessonRead(body, u, finish);
  if (ls.type === 'write')    return lessonWrite(body, u, finish);
  if (ls.type === 'test')     return lessonTest(body, u, finish);
}

function lessonGrammar(body, ls, finish) {
  const g = grammarById(ls.ref);
  if (!g) return body.innerHTML = '<p>Materi tidak ditemukan.</p>';
  const wrap = el('div', { class: 'stack' });
  wrap.append(el('div', { html: renderTopicBody(g) }));
  const startBtn = el('button', { class: 'btn btn--primary btn--lg' }, '▶ Kerjakan latihan (' + g.drills.length + ' soal)');
  const quizBox = el('div');
  startBtn.onclick = () => {
    startBtn.remove();
    runQuiz(quizBox, g.drills.map(d => ({ ...d, level: g.level, tag: g.title })), {
      skill: 'grammar', quizKey: 'g:' + g.id, onDone: r => finish(r.pct)
    });
  };
  wrap.append(startBtn, quizBox);
  body.append(wrap);
}

function lessonVocab(body, ls, finish) {
  const pack = packById(ls.ref) || ALL_PACKS.find(p => p.id === ls.ref);
  if (!pack) return body.innerHTML = '<p>Paket tidak ditemukan.</p>';
  flashSession(body, pack.items, { title: pack.titleId, limit: 20,
    onDone: (pct, info) => finish(100, info) });
}

/* Kalimat contoh dari tata bahasa unit ini — bahan lab keterampilannya.

   Sebelumnya tiap lab mengambil satu set dikte per TINGKAT, sehingga
   ketujuh unit A1 melatih kalimat yang sama persis dan berbagi satu
   catatan skor. Sekarang labnya memakai kalimat dari topik yang baru
   saja dipelajari di unit itu: tiap unit jadi berbeda, dan latihannya
   mengulang materi unitnya sendiri. Bahannya sudah ada — 459 kalimat
   contoh di bank tata bahasa — jadi tidak ada isi baru yang perlu
   ditulis, hanya disambungkan ke tempat yang benar. */
function kalimatUnit(u) {
  const keluar = [];
  for (const gid of u.grammar) {
    const g = grammarById(gid);
    for (const [en] of (g?.ex || [])) if (en && en.split(/\s+/).length >= 3) keluar.push(en);
  }
  return [...new Set(keluar)];
}

function lessonListen(body, u, finish) {
  const dariUnit = kalimatUnit(u);
  /* Kalau unitnya belum punya cukup kalimat, dilengkapi dari set dikte
     tingkatnya — supaya labnya tidak pernah kosong. */
  const set = DICTATIONS.find(d => d.level === u.level) || DICTATIONS[0];
  const kolam = dariUnit.length >= 4 ? dariUnit : [...dariUnit, ...set.items];
  const items = sample(kolam, 6).map(t => ({ t: 'dictate', text: t, level: u.level }));
  body.innerHTML = `<p class="soft" style="margin-bottom:1rem">Dengarkan lalu tulis persis.
    Kalimatnya diambil dari tata bahasa unit ini, jadi sekaligus mengulangnya.
    Kamu boleh memutar ulang dan memperlambat.</p>`;
  const box = el('div'); body.append(box);
  runQuiz(box, items, { skill: 'listening', quizKey: 'lis:' + u.id, onDone: r => finish(r.pct) });
}

function lessonSpeak(body, u, finish) {
  const dariUnit = kalimatUnit(u);
  const sh = SHADOWING.find(s => s.level === u.level) || SHADOWING[0];
  const prompts = SPEAKING_PROMPTS.find(s => s.level === u.level) || SPEAKING_PROMPTS[0];
  const kolam = dariUnit.length >= 3 ? dariUnit : [...dariUnit, ...sh.lines];
  const items = [
    ...sample(kolam, 4).map(t => ({ t: 'speak', text: t, level: u.level, tag: u.titleId })),
    ...sample(prompts.items, 1).map(p => ({ t: 'speak', text: p, level: u.level, tag: 'Prompt', tol: 55 }))
  ];
  body.innerHTML = `<p class="soft" style="margin-bottom:1rem">Dengarkan contoh, lalu ucapkan.
    Kalimatnya dari unit ini. Skor dihitung dari kecocokan kata yang terdengar.</p>`;
  const box = el('div'); body.append(box);
  runQuiz(box, items, { skill: 'speaking', quizKey: 'spk:' + u.id, onDone: r => finish(r.pct) });
}

function lessonRead(body, u, finish) {
  const level = u.level;
  /* Bacaan diputar menurut nomor unit. Sebelumnya tiap unit di satu
     tingkat memakai bacaan yang sama — dengan hanya 10 bacaan untuk 44
     unit, pengulangan tidak terhindarkan, tapi setidaknya sekarang unit
     yang berdampingan tidak memakai teks yang sama persis. */
  const sePeringkat = READINGS.filter(x => x.level === level);
  const kolam = sePeringkat.length ? sePeringkat : READINGS;
  const r = kolam[(u.n - 1) % kolam.length];
  body.innerHTML = html`
    <div class="card" style="margin-bottom:var(--s-5)">
      <div class="row row--between"><div class="card__title">${esc(r.title)}</div>
        <span class="badge">${r.words} kata · ~${r.minutes} menit</span></div>
      <div class="passage" style="margin-top:var(--s-4)">${esc(r.text)}</div>
    </div>`;
  const box = el('div'); body.append(box);
  runQuiz(box, r.questions.map(q => ({ ...q, level, tag: 'Reading' })),
    { skill: 'reading', quizKey: 'rd:' + u.id, onDone: res => finish(res.pct) });
}

function lessonWrite(body, u, finish) {
  const level = u.level;
  const sePeringkat = WRITING_TASKS.filter(x => x.level === level);
  const kolam = sePeringkat.length ? sePeringkat : WRITING_TASKS;
  const t = kolam[(u.n - 1) % kolam.length];
  body.innerHTML = html`
    <div class="card">
      <div class="card__title">${esc(t.type)} · ${t.minutes} menit · target ${t.words} kata</div>
      <p style="margin:var(--s-3) 0">${esc(t.prompt)}</p>
      <div class="note"><strong>Kerangka</strong>${raw(t.frame.map(f => `<div>• ${esc(f)}</div>`).join(''))}</div>
      <textarea class="textarea" id="wrArea" style="margin-top:var(--s-4)" placeholder="Tulis di sini…"></textarea>
      <div class="wc-row" style="margin-top:.6rem"><span>Kata: <b id="wc">0</b></span></div>
      <div class="row" style="margin-top:var(--s-4)">
        <button class="btn btn--primary" id="wrDone">Selesai & lihat model</button>
        <a class="btn btn--ghost" href="#/writing">Buka laboratorium menulis →</a>
      </div>
      <div id="wrModel"></div>
    </div>`;
  const ta = $('#wrArea');
  ta.oninput = () => $('#wc').textContent = ta.value.trim().split(/\s+/).filter(Boolean).length;
  $('#wrDone').onclick = () => {
    const n = ta.value.trim().split(/\s+/).filter(Boolean).length;
    if (n < 20) return toast('Tulis minimal 20 kata dulu.', 'warn');
    $('#wrModel').innerHTML = t.model
      ? `<div class="note note--ok" style="margin-top:var(--s-4)"><strong>Contoh jawaban model</strong>
         <div class="passage" style="font-size:var(--fs-md);margin-top:.5rem">${esc(t.model)}</div></div>`
      : `<div class="note note--warn" style="margin-top:var(--s-4)">Model untuk tugas ini tersedia di laboratorium menulis.</div>`;
    finish(100);
  };
}

function lessonTest(body, u, finish) {
  const pool = u.grammar.flatMap(gid => {
    const g = grammarById(gid);
    return (g?.drills || []).map(d => ({ ...d, level: g.level, tag: g.title }));
  });
  const pack = packById([].concat(u.vocab)[0]);
  const vocabQ = pack ? sample(pack.items, 5).map(it => {
    const wrong = sample(pack.items.filter(x => x.id !== it.id), 3).map(x => x.id_);
    const opts = shuffle([it.id_, ...wrong]);
    return { t: 'mcq', q: `Apa arti "${it.w}"?`, opts, a: opts.indexOf(it.id_),
             tag: 'Kosakata', level: it.level, why: it.ex };
  }) : [];
  const items = shuffle([...sample(pool, Math.min(15, pool.length)), ...vocabQ]);

  body.innerHTML = `<div class="note note--warn" style="margin-bottom:var(--s-4)">
    <strong>Ujian Unit</strong>Nilai minimal 80% dianjurkan sebelum lanjut ke unit berikutnya.</div>`;
  const box = el('div'); body.append(box);
  runQuiz(box, items, { skill: 'grammar', quizKey: 'unit:' + u.id, xpPerItem: 8,
    onDone: r => {
      if (r.pct < 80) toast('Skor di bawah 80% — sebaiknya ulangi pelajaran unit ini.', 'warn', 5000);
      finish(r.pct);
    } });
}
