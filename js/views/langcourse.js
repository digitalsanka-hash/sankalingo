/* Kurikulum berjenjang untuk bahasa selain Inggris:
   peta tingkat → unit → pelajaran, plus pemutar pelajarannya. */

import { $, $$, el, html, raw, esc, toast, ring, sample, shuffle } from '../ui.js';
import { ico } from '../icons.js';
import { tipBantuan } from '../comfortui.js';
import { addXP, addMinutes, markLesson } from '../state.js';
import { runQuiz } from '../quiz.js';
import { flashSession } from './vocab.js';
import { langMeta, phraseLexOf } from '../langctx.js';
import { unitsOf, unitById, lessonsOf, lessonDone, unitPct, levelPct,
         coursePct, nextLesson, lessonKey } from '../course.js';
import { renderTopicBody } from './grammar.js';
import { scriptTrainerInto, dikteInto, shadowingInto, lexOfPack } from './langpages.js';

const P = (code, sec) => `#/${code}${sec ? '/' + sec : ''}`;

/* ── Peta tingkat ─────────────────────────────────────────────── */
export function curriculum(code, L) {
  const meta = langMeta(code);
  if (!L.levels?.length) {
    $('#main').innerHTML = html`
      <div class="empty"><div class="empty__ico">${raw(ico('map', { size: 34 }))}</div>
        <h3>Kurikulum ${esc(meta.name)} sedang disusun</h3>
        <p class="small soft">Materinya sudah bisa dipakai lewat menu Aksara, Tata Bahasa, dan Kosakata.</p>
        <a class="btn btn--soft" href="${P(code)}">Kembali ke beranda</a></div>`;
    return;
  }
  const nx = nextLesson(code, L);
  const total = unitsOf(L).length;

  $('#main').innerHTML = html`
  ${raw(tipBantuan('kurikulum-lang',
    'Jenjangnya mengikuti ujian resmi bahasa ini. Tiap unit ditutup <b>ujian kecil</b>; lulus 80% berarti kamu boleh lanjut dengan tenang.'))}
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(meta.native)}</span>
      <h1>Kurikulum ${esc(meta.name)}</h1>
      <p>${L.levels.length} tingkat, ${total} unit, disusun berurutan dari nol sampai mahir.
         Tiap unit berisi aksara, tata bahasa, kosakata, frasa, latihan keterampilan, dan ujian unit.</p>
    </div>
    ${raw(ring(coursePct(code, L), { size: 92, sub: 'selesai' }))}
  </div>

  ${raw(nx ? `<div class="note note--ok" style="margin-bottom:var(--s-5)">
    <strong>Lanjutkan dari sini</strong>
    ${esc(nx.unit.titleId)} — ${esc(nx.lesson.title)}
    <a href="${P(code, 'pelajaran/' + nx.unit.id + '/' + nx.lesson.id)}">buka →</a></div>` : '')}

  <div class="lv-track">
    ${L.levels.map(lv => {
      const p = levelPct(code, L, lv);
      return `<a class="lv-card" href="${P(code, 'tingkat/' + lv.id)}" style="--lv:${meta.accent}">
        <div class="lv-card__badge" style="background:${meta.accent};color:#fff">${esc(lv.id)}</div>
        <div class="lv-card__body">
          <h2 class="sec-h">${esc(lv.nameId || lv.name)} <span class="muted small">· ${esc(lv.exam || '')}</span></h2>
          <p>${esc(lv.target)}</p>
          <div class="row" style="gap:var(--s-2);margin-top:.5rem">
            <span class="badge">${(lv.units || []).length} unit</span>
            <span class="badge">${(lv.units || []).reduce((a, u) => a + lessonsOf(L, u).length, 0)} pelajaran</span>
            ${lv.hours ? `<span class="badge">~${lv.hours} jam</span>` : ''}
          </div>
        </div>
        <div class="lv-card__pct"><b>${p}%</b><div class="xs muted">selesai</div></div>
      </a>`;
    }).join('')}
  </div>`;
}

/* ── Satu tingkat ─────────────────────────────────────────────── */
export function level(code, L, lvId) {
  const lv = L.levels?.find(x => x.id === lvId);
  if (!lv) return curriculum(code, L);
  const meta = langMeta(code);
  const us = unitsOf(L).filter(u => u.level === lv.id);

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="${P(code, 'kurikulum')}">${ico('chevronL', { size: 14 })} Semua tingkat</a>
      <h1 style="margin-top:.4rem">
        <span class="badge" style="background:${meta.accent};color:#fff">${esc(lv.id)}</span>
        ${esc(lv.nameId || lv.name)}</h1>
      <p>${esc(lv.target)}</p>
      ${raw(lv.exam ? `<p class="small muted">Setara: ${esc(lv.exam)}</p>` : '')}
    </div>
    ${raw(ring(levelPct(code, L, lv), { size: 92 }))}
  </div>

  ${raw(lv.cando?.length ? `<div class="note" style="margin-bottom:var(--s-5)">
    <strong>Setelah tingkat ini kamu bisa</strong>
    ${lv.cando.map(c => `<div>• ${esc(c)}</div>`).join('')}</div>` : '')}

  <div class="grid grid--2">
    ${us.map(u => {
      const p = unitPct(code, u);
      return `<a class="card card--link" href="${P(code, 'unit/' + u.id)}">
        <div class="row row--between">
          <div class="card__title">Unit ${u.n} · ${esc(u.titleId)}</div>
          <span class="badge ${p === 100 ? 'badge--ok' : ''}">${p}%</span>
        </div>
        <div class="card__sub">${esc(u.title || '')}</div>
        <p class="small soft" style="margin:.6rem 0">${esc(u.goal)}</p>
        <div class="bar"><i style="width:${p}%"></i></div>
        <div class="row" style="margin-top:.7rem;gap:5px">
          ${u.lessons.map(l => `<span class="badge ${lessonDone(code, u.id, l.id) ? 'badge--ok' : ''}"
            title="${esc(l.title)}">${ico(l.ico, { size: 13 })}</span>`).join('')}
        </div>
      </a>`;
    }).join('')}
  </div>`;
}

/* ── Satu unit ────────────────────────────────────────────────── */
export function unit(code, L, unitId) {
  const u = unitById(L, unitId);
  if (!u) return curriculum(code, L);
  const meta = langMeta(code);

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="${P(code, 'tingkat/' + u.level)}">
        ${ico('chevronL', { size: 14 })} Tingkat ${esc(u.level)}</a>
      <h1 style="margin-top:.4rem">Unit ${u.n} · ${esc(u.titleId)}</h1>
      <p>${esc(u.goal)}</p>
    </div>
    ${raw(ring(unitPct(code, u), { size: 92 }))}
  </div>

  ${raw(u.cando?.length ? `<div class="note note--ok" style="margin-bottom:var(--s-5)">
    <strong>Target unit ini</strong>
    ${u.cando.map(c => `<div>• ${esc(c)}</div>`).join('')}</div>` : '')}

  <div class="unit-list">
    ${u.lessons.map((l, i) => `
      <a class="unit ${lessonDone(code, u.id, l.id) ? 'is-done' : ''}"
         href="${P(code, 'pelajaran/' + u.id + '/' + l.id)}">
        <span class="unit__n">${lessonDone(code, u.id, l.id) ? '✓' : i + 1}</span>
        <span style="color:${meta.accent}">${ico(l.ico, { size: 18 })}</span>
        <span class="unit__b"><strong>${esc(l.title)}</strong>
          <span>${esc(subJudul(L, l))}</span></span>
        <span class="badge">+${l.xp} XP</span>
      </a>`).join('')}
  </div>`;
}

const subJudul = (L, l) => ({
  script: 'Animasi goresan + latihan menulis',
  grammar: (L.grammar.find(g => g.id === l.ref)?.title) || 'Pola kalimat',
  vocab: `${(L.vocab.find(v => v.id === l.ref)?.words || []).length} kata`,
  phrase: 'Frasa siap pakai + kartu hafalan',
  listen: 'Dikte dengan suara', speak: 'Shadowing berurutan',
  write: 'Latihan menulis aksara',
  test: 'Soal campuran seluruh unit'
}[l.type] || '');

/* ── Pemutar pelajaran ────────────────────────────────────────── */
export function lesson(code, L, unitId, lessonId) {
  const u = unitById(L, unitId);
  const l = u?.lessons.find(x => x.id === lessonId);
  if (!u || !l) return curriculum(code, L);
  const meta = langMeta(code);

  const head = el('div', { class: 'page-head' });
  head.innerHTML = html`
    <div class="page-head__txt">
      <a class="small muted" href="${P(code, 'unit/' + u.id)}">
        ${ico('chevronL', { size: 14 })} Unit ${u.n} · ${esc(u.titleId)}</a>
      <h1 style="margin-top:.4rem">${esc(l.title)}</h1>
    </div>
    <span class="badge" style="background:${meta.accent};color:#fff">${esc(u.level)}</span>`;
  const body = el('div', { id: 'lsBody' });
  $('#main').append(head, body);

  const selesai = (pct = 100) => {
    markLesson(lessonKey(code, u.id, l.id), pct);
    addXP(l.xp, l.type === 'grammar' ? 'grammar'
      : l.type === 'vocab' || l.type === 'phrase' ? 'vocab'
      : l.type === 'listen' ? 'listening'
      : l.type === 'speak' ? 'speaking' : 'writing');
    addMinutes(8);
    const idx = u.lessons.indexOf(l);
    const next = u.lessons[idx + 1];
    body.innerHTML = html`
      <div class="card card--pad-lg t-c stack">
        <div style="font-size:2.4rem">🎉</div>
        <h2>Pelajaran selesai</h2>
        <p class="soft">+${l.xp} XP · skor ${pct}%</p>
        <div class="row" style="justify-content:center">
          <a class="btn btn--soft" href="${P(code, 'unit/' + u.id)}">Kembali ke unit</a>
          ${raw(next
            ? `<a class="btn btn--primary" href="${P(code, 'pelajaran/' + u.id + '/' + next.id)}">Pelajaran berikutnya →</a>`
            : `<a class="btn btn--primary" href="${P(code, 'tingkat/' + u.level)}">Unit berikutnya →</a>`)}
        </div>
      </div>`;
    toast(`+${l.xp} XP · ${l.title} selesai`, 'ok');
  };

  if (l.type === 'script' || l.type === 'write') {
    const S = L.scripts.find(s => s.id === l.ref) || L.scripts[0];
    body.innerHTML = `<div id="trHost"></div>
      <div class="row" style="margin-top:var(--s-5);justify-content:center">
        <button class="btn btn--primary btn--lg" id="lsDone">Selesai — tandai sudah dilatih</button></div>`;
    scriptTrainerInto($('#trHost'), code, L, S.id, l.type === 'write' ? 'trace' : 'watch');
    $('#lsDone').onclick = () => selesai(100);
    return;
  }

  if (l.type === 'grammar') {
    const g = L.grammar.find(x => x.id === l.ref);
    if (!g) return selesai();
    body.innerHTML = renderTopicBody(g, code);
    const btn = el('button', { class: 'btn btn--primary btn--lg', style: 'margin-top:var(--s-5)' },
      `▶ Kerjakan latihan (${g.drills.length} soal)`);
    const box = el('div');
    btn.onclick = () => { btn.remove();
      runQuiz(box, g.drills.map(d => ({ ...d, tag: g.titleId, level: g.level })),
        { quizKey: 'lg:' + g.id, skill: 'grammar', onDone: r => selesai(r.pct) }); };
    body.append(btn, box);
    return;
  }

  if (l.type === 'vocab') {
    const pack = L.vocab.find(v => v.id === l.ref);
    if (!pack) return selesai();
    body.innerHTML = `<div class="note" style="margin-bottom:var(--s-4)">
      <strong>${esc(pack.title)}</strong>${esc(pack.note || 'Kuasai kata-kata ini sampai otomatis.')}</div>
      <div id="fsHost"></div>`;
    flashSession($('#fsHost'), lexOfPack(code, pack), { title: pack.title, limit: 20,
      lang: code, onDone: pct => selesai(pct ?? 100) });
    return;
  }

  if (l.type === 'phrase') {
    const g = L.phrases.find(x => x.g === l.ref);
    if (!g) return selesai();
    body.innerHTML = `<div id="fsHost"></div>`;
    /* phraseLexOf, bukan pembentuk id sendiri — lihat catatannya di
       js/langctx.js. Skema id yang berbeda membuat kartu frasa dari
       pelajaran ini terpisah dari dek Kartu Hafalan. */
    flashSession($('#fsHost'), phraseLexOf(code, L, { grup: g }), { title: 'Frasa ' + g.g, limit: 20,
      lang: code, onDone: pct => selesai(pct ?? 100) });
    return;
  }

  if (l.type === 'listen') {
    const grup = (u.phrases || []).length
      ? L.phrases.filter(g => u.phrases.includes(g.g))
      : L.phrases;
    body.innerHTML = '<div id="dkHost"></div>';
    dikteInto($('#dkHost'), code, grup.flatMap(g => g.items), r => selesai(r));
    return;
  }

  if (l.type === 'speak') {
    const grup = (u.phrases || []).length
      ? L.phrases.filter(g => u.phrases.includes(g.g))
      : L.phrases;
    body.innerHTML = '<div id="shHost"></div>';
    shadowingInto($('#shHost'), code, grup.flatMap(g => g.items), () => selesai(100));
    return;
  }

  if (l.type === 'test') {
    const soalG = (u.grammar || []).flatMap(gid => {
      const g = L.grammar.find(x => x.id === gid);
      return (g?.drills || []).map(d => ({ ...d, tag: g.titleId, level: g.level }));
    });
    const kata = (u.vocab || []).flatMap(vid => (L.vocab.find(v => v.id === vid)?.words) || []);
    const soalV = sample(kata, Math.min(8, kata.length)).map(([t, r, arti]) => {
      const salah = sample(kata.filter(w => w[0] !== t), 3).map(w => w[2]);
      const opts = shuffle([arti, ...salah]);
      return { t: 'mcq', q: `Apa arti ${t} (${r})?`, opts, a: opts.indexOf(arti), tag: 'Kosakata' };
    });
    const items = shuffle([...soalG, ...soalV]);
    if (!items.length) return selesai();
    body.innerHTML = `<div class="note note--warn" style="margin-bottom:var(--s-4)">
      <strong>Ujian Unit</strong>Nilai minimal 80% dianjurkan sebelum lanjut ke unit berikutnya.</div>
      <div id="tsHost"></div>`;
    runQuiz($('#tsHost'), items, { quizKey: 'lu:' + code + ':' + u.id, skill: 'grammar',
      xpPerItem: 8, onDone: r => {
        if (r.pct < 80) toast('Skor di bawah 80% — sebaiknya ulangi unit ini.', 'warn', 5000);
        selesai(r.pct);
      } });
    return;
  }

  selesai();
}
