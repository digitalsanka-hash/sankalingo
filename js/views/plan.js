/* Rencana belajar, tes penempatan, dan trik belajar. */

import { $, $$, el, html, raw, esc, toast, ring, shuffle } from '../ui.js';
import { state, mutate, startPlan, planDay, planTaskDone, togglePlanTask, addXP } from '../state.js';
import { runQuiz } from '../quiz.js';
import { PLANS, TRICKS, PLACEMENT, placementResult, LEVELS, CEFR_CANDO } from '../data.js';

/* ── Daftar rencana ───────────────────────────────────────────── */
export function renderIndex() {
  const s = state();
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Rencana</span>
      <h1>Rencana Belajar Harian</h1>
      <p>Belajar gagal bukan karena kurang materi, tapi karena tidak tahu harus mengerjakan apa hari ini.
         Pilih satu rencana, dan setiap pagi kamu tinggal membuka daftar centang.</p>
    </div>
  </div>

  ${raw(s.plan ? `<div class="note note--ok" style="margin-bottom:var(--s-5)">
    <strong>Rencana aktif</strong>
    ${esc(PLANS.find(p => p.id === s.plan.id)?.name || '')} · hari ${planDay()} dimulai ${esc(s.plan.start)}
    <a href="#/plan/${s.plan.id}">buka →</a></div>` : '')}

  <div class="grid grid--2">
    ${PLANS.map(p => `<div class="card ${s.plan?.id === p.id ? '' : ''}">
      <div class="row row--between">
        <div class="card__title">${esc(p.name)}</div>
        <span class="badge badge--brand">${p.days} hari</span>
      </div>
      <div class="card__sub">${esc(p.nameEn)} · ${p.minutes} menit/hari</div>
      <p class="small soft" style="margin:.7rem 0"><b>Untuk siapa:</b> ${esc(p.for)}</p>
      <div class="note small"><strong>Hasil yang dijanjikan</strong>${esc(p.outcome)}</div>
      <div class="row" style="margin-top:.9rem">
        <a class="btn btn--soft btn--sm" href="#/plan/${p.id}">Lihat rincian</a>
        <button class="btn btn--primary btn--sm" data-start="${p.id}">
          ${s.plan?.id === p.id ? 'Mulai ulang' : 'Pakai rencana ini'}</button>
      </div>
    </div>`).join('')}
  </div>

  <div class="card" style="margin-top:var(--s-6)">
    <div class="card__title">Prinsip yang membuat rencana ini berhasil</div>
    <div class="grid grid--3" style="margin-top:var(--s-4)">
      ${[
        ['Sedikit tapi tiap hari','Empat sesi 25 menit mengalahkan satu sesi tiga jam. Otak butuh jarak, bukan durasi.'],
        ['Jangan bolos dua kali','Sekali bolos itu kecelakaan. Dua kali berturut-turut adalah awal kebiasaan baru.'],
        ['Ukur proses, bukan hasil','"Belajar 25 menit" sepenuhnya dalam kendalimu. "Naik satu band" tidak.']
      ].map(([t, d]) => `<div class="card card--flat"><div class="b">${esc(t)}</div>
        <p class="small soft" style="margin-top:.3rem">${esc(d)}</p></div>`).join('')}
    </div>
  </div>`;

  $$('[data-start]').forEach(b => b.onclick = () => {
    startPlan(b.dataset.start);
    toast('Rencana dimulai. Tugas hari pertama sudah menunggu di beranda.', 'ok');
    location.hash = '#/plan/' + b.dataset.start;
  });
}

/* ── Satu rencana ─────────────────────────────────────────────── */
export function renderPlan(id) {
  const p = PLANS.find(x => x.id === id);
  if (!p) return $('#main').innerHTML = '<p>Rencana tidak ditemukan.</p>';
  const s = state();
  const active = s.plan?.id === id;
  const days = p.build();
  const today = active ? Math.min(p.days, planDay()) : 0;
  const doneDays = active ? Object.keys(s.plan.done).filter(d =>
    (s.plan.done[d] || []).length >= (days[+d - 1]?.tasks.length || 99)).length : 0;
  const pct = Math.round((doneDays / p.days) * 100);

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/plans">← Semua rencana</a>
      <h1 style="margin-top:.4rem">${esc(p.name)}</h1>
      <p>${esc(p.for)}</p>
      <p class="small"><b>Hasil:</b> ${esc(p.outcome)}</p>
    </div>
    ${raw(active ? ring(pct, { size: 92, sub: 'hari tuntas' })
      : `<button class="btn btn--primary btn--lg" id="usePlan">Pakai rencana ini</button>`)}
  </div>

  ${raw(active ? `<div class="note note--ok" style="margin-bottom:var(--s-5)">
    <strong>Hari ini: hari ${today} dari ${p.days}</strong>
    ${esc(days[today - 1]?.focus || '')}</div>` : '')}

  <div id="dayDetail"></div>

  <h2 class="sec-h" style="margin:var(--s-6) 0 var(--s-3)">Peta ${p.days} hari</h2>
  <div class="day-grid" id="dayGrid">
    ${days.map(d => {
      const full = active && (s.plan.done[d.day] || []).length >= d.tasks.length;
      return `<button class="day ${active && d.day === today ? 'is-today' : ''} ${full ? 'is-done' : ''}" data-day="${d.day}">
        <span class="day__n">Hari ${d.day}</span>
        <span class="day__t">${esc(d.focus)}</span>
        <span class="xs muted">${d.tasks.reduce((a, t) => a + t.min, 0)} menit</span>
      </button>`;
    }).join('')}
  </div>`;

  const ub = $('#usePlan');
  if (ub) ub.onclick = () => { startPlan(id); toast('Rencana dimulai.', 'ok'); renderPlan(id); };

  const showDay = n => {
    const d = days[n - 1];
    $('#dayDetail').innerHTML = html`
      <div class="card">
        <div class="row row--between">
          <div><div class="card__title">Hari ${d.day} · ${esc(d.focus)}</div>
            <div class="card__sub">${d.tasks.reduce((a, t) => a + t.min, 0)} menit</div></div>
          ${raw(active ? '' : '<span class="badge badge--warn">aktifkan rencana untuk mencentang</span>')}
        </div>
        <div class="stack stack--sm" style="margin-top:var(--s-4)">
          ${d.tasks.map((t, i) => `<button class="check ${active && planTaskDone(d.day, i) ? 'is-done' : ''}"
            data-t="${i}" ${active ? '' : 'disabled'}>
            <span class="check__box">✓</span>
            <span class="check__txt">${esc(t.title)}<span class="check__meta">${t.min} menit · ${esc(t.kind)}</span></span>
          </button>`).join('')}
        </div>
      </div>`;
    if (active) $$('#dayDetail [data-t]').forEach(b => b.onclick = () => {
      togglePlanTask(d.day, +b.dataset.t);
      const all = (state().plan.done[d.day] || []).length >= d.tasks.length;
      if (all) { addXP(20); toast(`Hari ${d.day} tuntas. +20 XP`, 'ok'); }
      renderPlan(id);
      showDay(n);
    });
  };
  showDay(active ? today : 1);
  $$('#dayGrid [data-day]').forEach(b => b.onclick = () => {
    showDay(+b.dataset.day);
    $('#dayDetail').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ── Tes penempatan ───────────────────────────────────────────── */
export function renderPlacement() {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Mulai dari sini</span>
      <h1>Tes Penempatan CEFR</h1>
      <p>${PLACEMENT.length} soal, sekitar 10 menit. Hasilnya menentukan level awalmu di kurikulum
         dan rencana belajar yang paling masuk akal untukmu. Jangan menebak asal — hasil yang jujur lebih berguna.</p>
    </div>
  </div>
  <div class="card card--pad-lg t-c stack" id="plStart">
    <div style="font-size:2.2rem">🧭</div>
    <h2 class="sec-h">Siap mengukur?</h2>
    <p class="soft small">Soal disusun dari mudah ke sulit. Kalau tidak tahu, pilih yang paling masuk akal lalu lanjut.</p>
    <div><button class="btn btn--primary btn--lg" id="plGo">Mulai tes</button></div>
  </div>
  <div id="plBox"></div>`;

  $('#plGo').onclick = () => {
    $('#plStart').remove();
    runQuiz($('#plBox'), PLACEMENT.map(p => ({ ...p, level: p.lv, tag: 'Penempatan' })), {
      xpPerItem: 3, showWhy: false, quizKey: 'placement',
      onDone: r => {
        const res = placementResult(r.right);
        mutate(s => { s.level = res.level; s.placed = true; });
        const lv = LEVELS.find(l => l.id === res.level);
        $('#plBox').innerHTML = html`
          <div class="band-hero">
            <span>Level CEFR kamu</span><b>${res.level}</b>
            <span>${r.right} dari ${PLACEMENT.length} benar</span>
          </div>
          <div class="card" style="margin-top:var(--s-5)">
            <div class="card__title">${esc(lv.nameId)} — ${esc(lv.name)}</div>
            <p class="soft" style="margin:.5rem 0">${esc(res.note)}</p>
            <div class="note note--ok"><strong>Yang sudah bisa kamu lakukan</strong>
              ${raw(CEFR_CANDO[res.level].map(c => `<div>• ${esc(c)}</div>`).join(''))}</div>
            <p class="small muted" style="margin-top:.8rem">${esc(lv.ieltsEq)}</p>
            <div class="row" style="margin-top:var(--s-5)">
              <a class="btn btn--primary" href="#/level/${res.level}">▶ Mulai kurikulum ${res.level}</a>
              <a class="btn btn--soft" href="#/plans">🗓 Pilih rencana harian</a>
              <a class="btn btn--ghost" href="#/exams">🎯 Lihat target ujian</a>
            </div>
          </div>`;
        toast(`Level kamu: ${res.level}. Kurikulum sudah disesuaikan.`, 'ok', 5000);
      }
    });
  };
}

/* ── Trik & metode ────────────────────────────────────────────── */
export function renderTricks() {
  const groups = [...new Set(TRICKS.map(t => t.g))];
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Metode</span>
      <h1>${TRICKS.length} Trik Belajar yang Benar-benar Bekerja</h1>
      <p>Dikumpulkan dari praktik pengajaran bahasa dan riset ingatan. Ambil tiga yang paling cocok
         denganmu dan pakai konsisten — lebih berguna daripada mencoba semuanya sekaligus.</p>
    </div>
  </div>

  <h2 class="sec-h sr-only">Daftar trik</h2>
  <div class="tabs" id="tTabs" style="margin-bottom:var(--s-5)" role="group" aria-label="Saring trik menurut kelompok">
    <button class="is-active" data-g="all">Semua</button>
    ${groups.map(g => `<button data-g="${esc(g)}">${esc(g)}</button>`).join('')}
  </div>
  <div class="grid grid--2" id="tList"></div>`;

  let f = 'all';
  const paint = () => {
    const list = f === 'all' ? TRICKS : TRICKS.filter(t => t.g === f);
    $('#tList').innerHTML = list.map((t, i) => `
      <div class="trick" data-n="${String(TRICKS.indexOf(t) + 1).padStart(2, '0')}" id="t${TRICKS.indexOf(t)}">
        <span class="badge badge--brand">${esc(t.g)}</span>
        <h3 class="sec-h4">${esc(t.t)}</h3>
        <p>${esc(t.d)}</p>
      </div>`).join('');
  };
  paint();

  /* Hasil pencarian menunjuk trik tertentu lewat '#/trik?t=<indeks>'.
     Dipakai kueri, bukan pagar kedua: alamat berpagar dua ('#/trik#t3')
     terbaca router sebagai satu ruas rute dan berujung di beranda. */
  const t = new URLSearchParams(location.hash.split('?')[1] || '').get('t');
  if (t !== null) {
    const sasaran = $('#t' + Number(t));
    if (sasaran) {
      sasaran.scrollIntoView({ behavior: 'smooth', block: 'center' });
      sasaran.classList.add('is-sorot');
      setTimeout(() => sasaran.classList.remove('is-sorot'), 2400);
    }
  }

  $$('#tTabs button').forEach(b => b.onclick = () => {
    $$('#tTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); f = b.dataset.g; paint();
  });
}
