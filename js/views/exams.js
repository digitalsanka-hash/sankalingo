/* IELTS · TOEFL iBT · TOEIC — halaman informasi berbasis spesifikasi
   resmi (data/exam-specs.js) dan trik jitu (data/exam-tactics.js). */

import { $, $$, el, html, raw, esc, toast, shuffle, nf } from '../ui.js';
import { ico } from '../icons.js';
import { tipBantuan } from '../comfortui.js';
import { state, mutate } from '../state.js';
import { runQuiz } from '../quiz.js';
import { say, sayList, stopSpeaking } from '../speech.js';
import { EXAMS, EXAM_LIST, SPECS, SOURCES, VERIFIED_ON, TACTICS, TIME_BUDGET } from '../data.js';

const EXAM_ICON = { ielts: 'globe', toefl: 'brain', toeic: 'target' };

/* ── Hub ──────────────────────────────────────────────────────── */
export function renderHub() {
  const s = state();
  $('#main').innerHTML = html`
  ${raw(tipBantuan('ujian-en',
    'Halaman ini bukan sekadar daftar. Tiap ujian punya <b>format resmi</b>, cara penilaian, taktik per bagian, dan simulasi bertimer yang jumlah soalnya sama dengan tes aslinya.'))}
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Persiapan ujian</span>
      <h1>IELTS · TOEFL iBT · TOEIC</h1>
      <p>Format, waktu, jumlah butir, dan cara penyekoran di halaman ini diverifikasi langsung
         ke penerbit ujian pada ${VERIFIED_ON}.</p>
    </div>
  </div>

  <div class="grid grid--3">
    ${EXAM_LIST.map(e => {
      const sp = SPECS[e.id];
      return `<a class="card card--link exam-card" href="#/exam/${e.id}">
        <div class="row row--between">
          <span class="exam-card__ico">${ico(EXAM_ICON[e.id], { size: 22 })}</span>
          ${e.badgeNote ? `<span class="badge badge--warn">${esc(e.badgeNote)}</span>` : ''}
          ${s.goal === e.id ? '<span class="badge badge--ok">target kamu</span>' : ''}
        </div>
        <div class="card__title" style="margin-top:.7rem">${esc(e.name)}</div>
        <div class="card__sub">${esc(e.full)}</div>
        <p class="small soft" style="margin:.7rem 0">${esc(e.tagline)}</p>
        <dl class="spec-list">
          <div><dt>Durasi</dt><dd>${esc(sp.totalTime.split('(')[0].trim())}</dd></div>
          <div><dt>Bagian</dt><dd>${sp.sections.length}</dd></div>
          <div><dt>Skor</dt><dd>${esc(sp.scoring.split('.')[0])}</dd></div>
        </dl>
      </a>`;
    }).join('')}
  </div>

  <div class="card" style="margin-top:var(--s-6)">
    <div class="card__title">${raw(ico('route'))} Mana yang cocok untukmu?</div>
    <div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl">
        <thead><tr><th>Tujuan</th><th>Pilih</th><th>Alasan</th></tr></thead>
        <tbody>
          <tr><td>Kuliah di Inggris / Australia / Selandia Baru</td><td><b>IELTS Academic</b></td><td>Paling diterima luas dan sering disyaratkan untuk visa.</td></tr>
          <tr><td>Kuliah di Amerika Serikat / Kanada</td><td><b>TOEFL iBT</b></td><td>Standar utama universitas Amerika Utara.</td></tr>
          <tr><td>Migrasi / kerja terampil</td><td><b>IELTS General Training</b></td><td>Diakui badan imigrasi Australia, Kanada, Inggris.</td></tr>
          <tr><td>Rekrutmen & promosi perusahaan</td><td><b>TOEIC</b></td><td>Fokus bahasa Inggris kerja.</td></tr>
          <tr><td>Belum tahu, mau ukur diri</td><td><b>Tes penempatan SankaLingo GO</b></td><td>Gratis, 30 soal, langsung tahu level CEFR-mu.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="row" style="margin-top:var(--s-4)">
      <a class="btn btn--primary" href="#/placement">${raw(ico('compass', { size: 16 }))} Tes penempatan</a>
      <a class="btn btn--soft" href="#/plans">${raw(ico('calendar', { size: 16 }))} Rencana sprint ujian</a>
    </div>
  </div>

  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Perbandingan skor antar ujian</div>
    <div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl">
        <thead><tr><th>CEFR</th><th>IELTS</th><th>TOEFL iBT (1–6)</th><th>TOEFL (0–120, transisi)</th><th>TOEIC L&R</th></tr></thead>
        <tbody>
          <tr><td><span class="badge badge--lv lv-A2">A2</span></td><td>3.0–4.0</td><td>2</td><td>32–45</td><td>255–400</td></tr>
          <tr><td><span class="badge badge--lv lv-B1">B1</span></td><td>4.0–5.0</td><td>3</td><td>46–70</td><td>405–600</td></tr>
          <tr><td><span class="badge badge--lv lv-B2">B2</span></td><td>5.5–6.5</td><td>4</td><td>71–93</td><td>605–780</td></tr>
          <tr><td><span class="badge badge--lv lv-C1">C1</span></td><td>7.0–8.0</td><td>5</td><td>94–114</td><td>785–900</td></tr>
          <tr><td><span class="badge badge--lv lv-C2">C2</span></td><td>8.5–9.0</td><td>6</td><td>115–120</td><td>905–990</td></tr>
        </tbody>
      </table>
    </div>
    <p class="xs muted" style="margin-top:var(--s-3)">Kesetaraan bersifat perkiraan; tiap institusi menetapkan ambangnya sendiri.</p>
  </div>`;
}

/* ── Halaman satu ujian ───────────────────────────────────────── */
export function renderExam(id) {
  const e = EXAMS[id], sp = SPECS[id];
  if (!e) return $('#main').innerHTML = '<p>Ujian tidak ditemukan.</p>';
  const s = state();
  const history = s.exams.filter(x => x.exam === id);

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/exams">${ico('chevronL', { size: 14 })} Semua ujian</a>
      <h1 style="margin-top:.4rem">${esc(e.name)}
        ${e.badgeNote ? `<span class="badge badge--warn" style="vertical-align:middle">${esc(e.badgeNote)}</span>` : ''}</h1>
      <p>${esc(e.tagline)}</p>
    </div>
    <div class="row">
      <button class="btn ${s.goal === id ? 'btn--ok' : 'btn--soft'}" id="goalBtn">
        ${s.goal === id ? 'Target kamu' : 'Jadikan target'}</button>
      <a class="btn btn--primary" href="#/mock/${id}">${raw(ico('timer', { size: 16 }))} Simulasi</a>
    </div>
  </div>

  <div class="spec-strip">
    <div><span>Durasi total</span><b>${esc(sp.totalTime)}</b></div>
    <div><span>Penyekoran</span><b>${esc(sp.scoring)}</b></div>
    <div><span>Diverifikasi</span><b>${VERIFIED_ON}</b></div>
  </div>

  <div class="tabs" id="eTabs" style="margin:var(--s-5) 0">
    <button class="is-active" data-t="format">Format resmi</button>
    <button data-t="tactics">Trik jitu</button>
    <button data-t="score">Skor & band</button>
    <button data-t="writing">Writing</button>
    <button data-t="speaking">Speaking</button>
    <button data-t="practice">Latihan cepat</button>
    <button data-t="myth">Mitos</button>
    <button data-t="src">Sumber</button>
    ${raw(history.length ? '<button data-t="hist">Riwayat</button>' : '')}
  </div>
  <div id="eBody"></div>`;

  $('#goalBtn').onclick = () => {
    mutate(st => { st.goal = st.goal === id ? 'general' : id; });
    toast(state().goal === id ? `${e.name} jadi target belajarmu.` : 'Target dilepas.', 'ok');
    renderExam(id);
  };

  const body = $('#eBody');
  const paint = t => {
    stopSpeaking();
    if (t === 'format') paintFormat(body, e, sp);
    if (t === 'tactics') paintTactics(body, id, sp);
    if (t === 'score') paintScore(body, e, sp);
    if (t === 'writing') paintWriting(body, e);
    if (t === 'speaking') paintSpeaking(body, e);
    if (t === 'practice') renderPracticeInto(body, id);
    if (t === 'myth') body.innerHTML = e.mitos.map(([m, r]) => `
      <div class="myth">
        <div class="myth__x">${ico('x', { size: 16 })}</div>
        <div><b>${esc(m)}</b><p class="small soft" style="margin-top:.3rem">${esc(r)}</p></div>
      </div>`).join('');
    if (t === 'src') body.innerHTML = html`
      <div class="card">
        <div class="card__title">${raw(ico('info'))} Sumber yang dipakai</div>
        <p class="small soft" style="margin:.4rem 0 1rem">Seluruh angka format, waktu, dan penyekoran di halaman ini
          diambil dari laman resmi penerbit ujian, diperiksa pada ${VERIFIED_ON}.</p>
        <ul class="stack stack--sm">
          ${SOURCES.map(([t2, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t2)}</a></li>`).join('')}
        </ul>
        <div class="note note--warn" style="margin-top:var(--s-4)">
          <strong>Tentang isi soal</strong>
          Soal ujian yang sesungguhnya berhak cipta dan tidak boleh disalin. Semua butir latihan di
          aplikasi ini ditulis sendiri mengikuti jenis, tingkat kesulitan, dan pola jebakan resmi.
        </div>
      </div>`;
    if (t === 'hist') body.innerHTML = `<div class="table-wrap"><table class="tbl">
      <thead><tr><th>Tanggal</th><th>Jenis</th><th>Benar</th><th>Skor</th></tr></thead>
      <tbody>${history.map(h => `<tr><td>${new Date(h.at).toLocaleString('id-ID')}</td>
        <td>${esc(h.kind)}</td><td>${h.right}/${h.total}</td><td><b>${esc(String(h.score))}</b></td></tr>`).join('')}
      </tbody></table></div>`;
  };
  paint('format');
  $$('#eTabs button').forEach(b => b.onclick = () => {
    $$('#eTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); paint(b.dataset.t);
  });
}

/* ── Tab: format resmi ────────────────────────────────────────── */
function paintFormat(body, e, sp) {
  body.innerHTML = html`
  ${raw(sp.newIn2026 ? `<div class="note note--warn" style="margin-bottom:var(--s-5)">
    <strong>Yang berubah pada format ${e.name} 2026</strong>
    ${sp.newIn2026.map(x => `<div>• ${esc(x)}</div>`).join('')}</div>` : '')}

  <div class="stack stack--lg">
    ${sp.sections.map((sec, i) => `
      <section class="sec-card">
        <header class="sec-card__head">
          <span class="sec-card__n">${String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>${esc(sec.name)}</h3>
            <div class="sec-card__meta">
              <span>${ico('clock', { size: 14 })} ${sec.minutes} menit</span>
              ${sec.items ? `<span>${ico('list', { size: 14 })} ${sec.items} butir</span>` : ''}
              ${sec.adaptive ? '<span class="badge badge--brand">adaptif</span>' : ''}
              ${sec.extra ? `<span class="muted">${esc(sec.extra)}</span>` : ''}
            </div>
          </div>
        </header>
        <div class="sec-card__body">
          <div class="sec-parts">
            ${sec.parts.map(p => `<div class="sec-part">
              <div class="sec-part__top">
                <b>${esc(p.name)}</b>
                ${p.items ? `<span class="badge">${p.items} butir</span>` : ''}
                ${p.minutes ? `<span class="badge">${p.minutes} mnt</span>` : ''}
                ${p.words ? `<span class="badge">min ${p.words} kata</span>` : ''}
                ${p.range ? `<span class="badge badge--brand">${esc(p.range)}</span>` : ''}
              </div>
              <p class="small soft">${esc(p.note || '')}</p>
            </div>`).join('')}
          </div>
          <aside class="sec-facts">
            <div class="sec-facts__k">Penilaian</div>
            <p class="small">${esc(sec.marks || '')}</p>
            ${sec.facts ? `<div class="sec-facts__k" style="margin-top:.8rem">Fakta penting</div>
              <ul class="stack stack--sm">${sec.facts.map(f => `<li class="small soft">• ${esc(f)}</li>`).join('')}</ul>` : ''}
          </aside>
        </div>
      </section>`).join('')}
  </div>

  <div class="card" style="margin-top:var(--s-6)">
    <div class="card__title">${raw(ico('timer'))} Anggaran waktu yang harus kamu hafal</div>
    <div class="table-wrap" style="margin-top:var(--s-4)">
      <table class="tbl"><thead><tr><th>Bagian</th><th>Waktu</th><th>Beban</th><th>Anggaran</th></tr></thead>
      <tbody>${TIME_BUDGET[e.id].map(r => `<tr>${r.map((c, i) => i === 0 ? `<td><b>${esc(c)}</b></td>` : `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}
      </tbody></table>
    </div>
  </div>`;
}

/* ── Tab: trik jitu ───────────────────────────────────────────── */
function paintTactics(body, id, sp) {
  const groups = TACTICS[id] || {};
  const keys = Object.keys(groups);
  body.innerHTML = html`
    <div class="tabs tabs--sub" id="tacTabs" style="margin-bottom:var(--s-4)">
      ${keys.map((k, i) => `<button class="${i === 0 ? 'is-active' : ''}" data-k="${k}">${esc(sectionLabel(sp, k))}</button>`).join('')}
    </div>
    <div id="tacBody"></div>`;
  const paint = k => {
    $('#tacBody').innerHTML = groups[k].map((t, i) => `
      <article class="tactic">
        <div class="tactic__n">${String(i + 1).padStart(2, '0')}</div>
        <div class="tactic__body">
          <div class="row row--between">
            <h4>${esc(t.title)}</h4>
            ${t.budget && t.budget !== '—' ? `<span class="badge badge--brand nowrap">${esc(t.budget)}</span>` : ''}
          </div>
          <ol class="tactic__steps">${t.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
          <div class="tactic__why">${ico('bulb', { size: 15 })}<span>${esc(t.why)}</span></div>
        </div>
      </article>`).join('');
  };
  paint(keys[0]);
  $$('#tacTabs button').forEach(b => b.onclick = () => {
    $$('#tacTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); paint(b.dataset.k);
  });
}
const sectionLabel = (sp, key) => sp.sections.find(s => s.id === key)?.name || key;

/* ── Tab: skor & band ─────────────────────────────────────────── */
function paintScore(body, e, sp) {
  body.innerHTML = html`
    <div class="note" style="margin-bottom:var(--s-4)">
      <strong>Cara skormu dihitung</strong>${esc(sp.scoring)}
      ${raw(sp.rounding ? `<div style="margin-top:.4rem">${esc(sp.rounding)}</div>` : '')}
    </div>

    <div class="card">
      <div class="card__title">Deskriptor band</div>
      <div class="band-table" style="margin-top:var(--s-4)">
        ${sp.bandScale.map(([b, label, desc]) => `
          <div class="band-row">
            <div class="band-row__b">${esc(String(b))}</div>
            <div><b>${esc(label)}</b><p class="small soft">${esc(desc)}</p></div>
          </div>`).join('')}
      </div>
    </div>

    ${raw(sp.legacyMap ? `<div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">Setara skala lama 0–120</div>
      <p class="small soft" style="margin:.4rem 0 1rem">Dilaporkan berdampingan selama masa transisi dua tahun.</p>
      <div class="pill-row">${sp.legacyMap.map(([b, r]) => `<span class="badge badge--brand">Band ${b} ≈ ${esc(r)}</span>`).join('')}</div>
    </div>` : '')}

    ${raw(sp.convert ? `<div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">Konversi jumlah benar → skor</div>
      <p class="small muted" style="margin:.3rem 0 1rem">Perkiraan; tiap sesi ujian punya penyesuaian sendiri.</p>
      <div class="grid grid--2">
        ${Object.entries(sp.convert).map(([k, rows]) => `<div class="card card--flat">
          <div class="b" style="margin-bottom:.5rem;text-transform:capitalize">${esc(k)}</div>
          <div class="conv-grid">
            ${rows.map(([r, sc]) => `<div class="conv"><span>${r}+</span><b>${sc}</b></div>`).join('')}
          </div></div>`).join('')}
      </div></div>` : '')}`;
}

/* ── Tab: writing ─────────────────────────────────────────────── */
function paintWriting(body, e) {
  const w = e.writing, T = e.tasks2026;
  const groups = [];
  if (w?.task1Academic) groups.push(['Task 1 — Academic', w.task1Academic]);
  if (w?.task1General) groups.push(['Task 1 — General Training', w.task1General]);
  if (w?.task2) groups.push(['Task 2 — Esai', w.task2]);
  if (w?.tasks) groups.push(['Tugas', w.tasks.map(x => ({ prompt: x.type, plan: [x.hint] }))]);
  if (T?.buildSentence) groups.push(['Build a Sentence',
    T.buildSentence.map(b => ({ prompt: b.words.join(' · '), plan: ['Kunci: ' + b.a] }))]);
  if (T?.emails) groups.push(['Write an Email', T.emails.map(x => ({ prompt: x.situation, model: x.model }))]);
  if (T?.discussions) groups.push(['Write for an Academic Discussion',
    T.discussions.map(d => ({ prompt: d.professor, plan: ['Student A: ' + d.studentA, 'Student B: ' + d.studentB], model: d.model }))]);

  body.innerHTML = groups.map(([title, list]) => `
    <div class="card" style="margin-bottom:var(--s-4)">
      <div class="card__title">${esc(title)}</div>
      ${list.map((x, i) => `<div class="card card--flat" style="margin-top:.8rem">
        ${x.type ? `<span class="badge badge--brand">${esc(x.type)}</span>` : ''}
        <p style="margin:.5rem 0"><b>${esc(x.prompt || '')}</b></p>
        ${x.data ? `<div class="formula">${esc(x.data)}</div>` : ''}
        ${x.plan ? `<div class="note small"><strong>Kerangka</strong>${x.plan.map(p => `<div>• ${esc(p)}</div>`).join('')}</div>` : ''}
        ${x.model ? `<details style="margin-top:.6rem"><summary class="b" style="cursor:pointer">Lihat jawaban model</summary>
          <div class="passage small" style="margin-top:.5rem">${esc(x.model)}</div></details>` : ''}
      </div>`).join('')}
    </div>`).join('') + (w?.checklist ? `
    <div class="card">
      <div class="card__title">Daftar periksa sebelum menyerahkan</div>
      <div class="stack stack--sm" style="margin-top:.8rem">
        ${w.checklist.map(c => `<div class="check" style="cursor:default">
          <span class="check__box">${ico('check', { size: 12 })}</span><span class="check__txt">${esc(c)}</span></div>`).join('')}
      </div>
      <a class="btn btn--primary" style="margin-top:1rem" href="#/writing">Buka laboratorium menulis</a>
    </div>` : '');
}

/* ── Tab: speaking ────────────────────────────────────────────── */
function paintSpeaking(body, e) {
  const sp = e.speaking, T = e.tasks2026;
  body.innerHTML = html`
    ${raw(sp?.formula ? `<div class="note note--ok" style="margin-bottom:var(--s-4)">
      <strong>Rumus jawaban</strong>${sp.formula.map(f => `<div>• ${esc(f)}</div>`).join('')}</div>` : '')}
    ${raw(sp?.part1 ? listCard('Part 1 — pertanyaan pemanasan', sp.part1) : '')}
    ${raw(sp?.part2 ? `<div class="card" style="margin-bottom:var(--s-4)">
      <div class="card__title">Part 2 — kartu topik</div>
      <div class="grid grid--2" style="margin-top:.8rem">
        ${sp.part2.map(c => `<div class="card card--flat"><b>${esc(c.card)}</b>
          <ul style="margin-top:.4rem">${c.bullets.map(b => `<li class="small soft">• ${esc(b)}</li>`).join('')}</ul>
          <div class="pill-row" style="margin-top:.6rem">${c.lexis.map(l => `<span class="badge badge--brand">${esc(l)}</span>`).join('')}</div>
        </div>`).join('')}</div></div>` : '')}
    ${raw(sp?.part3 ? listCard('Part 3 — diskusi abstrak', sp.part3) : '')}
    ${raw(T?.repeat ? listCard('Listen and Repeat', T.repeat) : '')}
    ${raw(T?.interview ? listCard('Take an Interview', T.interview) : '')}
    ${raw(sp?.task1 ? listCard('Tugas berbicara', sp.task1) : '')}
    <a class="btn btn--primary" href="#/speaking">${raw(ico('mic', { size: 16 }))} Latih & rekam di laboratorium berbicara</a>`;
  body.addEventListener('click', ev => {
    const b = ev.target.closest('[data-say]');
    if (b) say(b.dataset.say);
  });
}
const listCard = (title, items) => `<div class="card" style="margin-bottom:var(--s-4)">
  <div class="card__title">${esc(title)}</div>
  <div class="stack stack--sm" style="margin-top:.7rem">
    ${items.map(q => `<div class="prompt-row"><span>${esc(q)}</span>
      <button class="speak-btn" data-say="${esc(q)}" aria-label="Dengar">${ico('volume', { size: 14 })}</button></div>`).join('')}
  </div></div>`;

/* ── Latihan cepat ────────────────────────────────────────────── */
export function renderPractice(id) {
  $('#main').innerHTML = `<div class="page-head"><div class="page-head__txt">
    <a class="small muted" href="#/exam/${id}">Kembali</a><h1>Latihan cepat</h1></div></div><div id="pb"></div>`;
  renderPracticeInto($('#pb'), id);
}

function renderPracticeInto(host, id) {
  const e = EXAMS[id];
  host.innerHTML = html`
    <div class="card">
      <div class="card__title">Latihan cepat ${esc(e.name)}</div>
      <p class="small soft" style="margin:.4rem 0 1rem">Campuran soal format, tata bahasa, dan pemahaman.</p>
      <div class="row">
        <button class="btn btn--primary" data-run="quick">${raw(ico('spark', { size: 16 }))} ${e.quickBank.length} soal cepat</button>
        ${raw(e.readings.map((r, i) => `<button class="btn btn--soft" data-run="r${i}">${ico('book', { size: 16 })} ${esc(r.title)}</button>`).join(''))}
        ${raw(e.listenings.map((l, i) => `<button class="btn btn--soft" data-run="l${i}">${ico('headphones', { size: 16 })} ${esc(l.title)}</button>`).join(''))}
      </div>
      <div id="prBox" style="margin-top:var(--s-5)"></div>
    </div>`;

  host.addEventListener('click', ev => {
    const b = ev.target.closest('[data-run]');
    if (!b) return;
    const box = $('#prBox', host), v = b.dataset.run;
    if (v === 'quick') {
      runQuiz(box, shuffle(e.quickBank).map(q => ({ ...q, tag: e.name })), { quizKey: 'ex:' + id, skill: 'reading' });
    } else if (v[0] === 'r') {
      const r = e.readings[+v.slice(1)];
      box.innerHTML = `<div class="card card--flat" style="margin-bottom:var(--s-4)">
        <div class="passage">${esc(r.text)}</div></div><div id="rq"></div>`;
      runQuiz($('#rq', box), r.questions.map(q => ({ ...q, tag: r.title, level: r.level })),
        { quizKey: 'exr:' + r.id, skill: 'reading' });
    } else {
      const l = e.listenings[+v.slice(1)];
      box.innerHTML = `<div class="card card--flat" style="margin-bottom:var(--s-4)">
        <div class="row"><button class="btn btn--soft btn--sm" id="plB">${ico('play', { size: 16 })} Putar</button>
        <button class="btn btn--ghost btn--sm" id="scB">Tampilkan teks</button></div>
        <div id="scr" class="hide passage small" style="margin-top:.7rem"></div></div><div id="lq"></div>`;
      $('#plB', box).onclick = () => sayList(l.lines, 420);
      $('#scB', box).onclick = () => {
        const sc = $('#scr', box); sc.classList.toggle('hide');
        sc.innerHTML = l.lines.map(x => `<div>${esc(x)}</div>`).join('');
      };
      sayList(l.lines, 420);
      runQuiz($('#lq', box), l.questions.map(q => ({ ...q, tag: l.title, level: l.level })),
        { quizKey: 'exl:' + l.id, skill: 'listening' });
    }
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
