/* Beranda: ringkasan kemajuan, tugas hari ini, dan pintasan. */

import { $, html, raw, esc, ring, radar, heatmap, sparkBars, nf } from '../ui.js';
import { tipBantuan } from '../comfortui.js';
import { state, liveStreak, xpLevel, todayKey, unitPct, planDay, planTaskDone, togglePlanTask } from '../state.js';
import { stats as srsStats, dueCount, forecast } from '../srs.js';
import { LEVELS, ALL_LESSONS, ALL_UNITS, CONTENT_STATS, PLANS, EXAM_LIST } from '../data.js';

const greeting = () => {
  const h = new Date().getHours();
  return h < 11 ? 'Selamat pagi' : h < 15 ? 'Selamat siang' : h < 19 ? 'Selamat sore' : 'Selamat malam';
};

/* Cari pelajaran berikutnya yang belum selesai. */
export function nextLesson() {
  const s = state();
  const order = ['A1','A2','B1','B2','C1','C2'];
  const start = Math.max(0, order.indexOf(s.level));
  for (let i = start; i < order.length; i++) {
    const lv = LEVELS.find(l => l.id === order[i]);
    for (const u of lv.units)
      for (const l of u.lessons)
        if (!s.lessons[l.id]) return { unit: u, lesson: l, level: lv };
  }
  for (const u of ALL_UNITS)
    for (const l of u.lessons)
      if (!s.lessons[l.id]) return { unit: u, lesson: l, level: LEVELS.find(x => x.id === u.level) };
  return null;
}

export function render() {
  const s = state();
  const lv = xpLevel();
  const nx = nextLesson();
  const done = Object.keys(s.lessons).length;
  const pctAll = Math.round((done / ALL_LESSONS.length) * 100);
  const hist = s.history;
  const last14 = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (13 - i));
    return hist[todayKey(d)]?.xp || 0;
  });
  const maxSkill = Math.max(1, ...Object.values(s.skills));
  const skillPct = Object.fromEntries(Object.entries({
    Simak: s.skills.listening, Bicara: s.skills.speaking, Baca: s.skills.reading,
    Tulis: s.skills.writing, Grammar: s.skills.grammar, Kosakata: s.skills.vocab
  }).map(([k, v]) => [k, Math.round((v / maxSkill) * 100)]));

  const plan = s.plan ? PLANS.find(p => p.id === s.plan.id) : null;
  const day = plan ? Math.min(plan.days, planDay()) : 0;
  const todayTasks = plan ? plan.build()[day - 1]?.tasks || [] : [];

  $('#main').innerHTML = html`
  ${raw(tipBantuan('beranda-en',
    'Kalau kamu hanya punya sepuluh menit hari ini: tekan <b>Lanjut belajar</b>, lalu <b>Kartu jatuh tempo</b>. Dua tombol itu saja sudah cukup untuk menjaga rentetanmu.'))}
  <section class="hero">
    <span class="eyebrow">SankaLingo GO</span>
    <h1>${greeting()}${s.name ? ', ' + esc(s.name) : ''} — mari lanjutkan.</h1>
    <p>${raw(nx
      ? `Pelajaran berikutnya: <b>${esc(nx.unit.titleId)}</b> di level ${nx.level.id}. Sisihkan ${s.dailyMin} menit hari ini dan rentetanmu tetap hidup.`
      : 'Kamu sudah menyelesaikan seluruh kurikulum. Lanjutkan dengan simulasi ujian dan kartu hafalan.')}</p>
    <div class="hero__actions">
      ${raw(nx ? `<a class="btn btn--primary btn--lg" href="#/lesson/${nx.unit.id}/${nx.lesson.id}">▶ Lanjut belajar</a>` : '')}
      <a class="btn btn--soft btn--lg" href="#/review">⟳ Kartu jatuh tempo (${dueCount()})</a>
      ${raw(!s.placed ? '<a class="btn btn--ghost btn--lg" href="#/placement">🧭 Tes penempatan</a>' : '')}
    </div>
    <div class="hero__meta">
      <div><b>${liveStreak()}</b><span>hari berturut</span></div>
      <div><b>${nf(s.xp)}</b><span>XP · tingkat ${lv.lv}</span></div>
      <div><b>${done}</b><span>dari ${ALL_LESSONS.length} pelajaran</span></div>
      <div><b>${srsStats().total}</b><span>kartu dipelajari</span></div>
    </div>
  </section>

  <div class="grid grid--2" style="margin-top:var(--s-6)">
    <div class="card">
      <div class="row row--between" style="margin-bottom:var(--s-4)">
        <div><div class="card__title">Kemajuan kurikulum</div>
          <div class="card__sub">Enam level CEFR, ${ALL_UNITS.length} unit</div></div>
        ${raw(ring(pctAll, { size: 72, stroke: 8 }))}
      </div>
      <div class="stack stack--sm">
        ${LEVELS.map(l => {
          const p = Math.round(l.units.reduce((a, u) => a + unitPct(u), 0) / l.units.length);
          return `<a href="#/level/${l.id}" style="text-decoration:none">
            <div class="row" style="gap:var(--s-3)">
              <span class="badge badge--lv lv-${l.id}" style="width:34px;justify-content:center">${l.id}</span>
              <div class="bar" style="flex:1"><i style="width:${p}%"></i></div>
              <span class="small num muted" style="width:38px;text-align:right">${p}%</span>
            </div></a>`;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card__title">Peta kemampuan</div>
      <div class="card__sub">Berdasarkan XP yang kamu kumpulkan tiap keterampilan</div>
      <div style="display:grid;place-items:center;margin-top:var(--s-3)">
        ${raw(radar(skillPct, { size: 250 }))}
      </div>
    </div>
  </div>

  ${raw(plan ? `
  <div class="card" style="margin-top:var(--s-4)">
    <div class="row row--between" style="margin-bottom:var(--s-3)">
      <div><div class="card__title">📋 Tugas hari ini — hari ${day} dari ${plan.days}</div>
        <div class="card__sub">${esc(plan.name)}</div></div>
      <a class="btn btn--ghost btn--sm" href="#/plan/${plan.id}">Lihat rencana penuh</a>
    </div>
    <div class="stack stack--sm">
      ${todayTasks.map((t, i) => `
        <button class="check ${planTaskDone(day, i) ? 'is-done' : ''}" data-task="${i}">
          <span class="check__box">✓</span>
          <span class="check__txt">${esc(t.title)}
            <span class="check__meta">${t.min} menit · ${esc(t.kind)}</span></span>
        </button>`).join('')}
    </div>
  </div>` : `
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">📋 Belum ada rencana harian</div>
    <p class="soft small" style="margin:.4rem 0 1rem">Pilih satu rencana agar setiap hari kamu tahu persis apa yang harus dikerjakan — tanpa mikir lagi.</p>
    <div class="pill-row">
      ${PLANS.slice(0, 4).map(p => `<a class="btn btn--soft btn--sm" href="#/plan/${p.id}">${esc(p.name)}</a>`).join('')}
    </div>
  </div>`)}

  <div class="grid grid--3" style="margin-top:var(--s-4)">
    <div class="card">
      <div class="card__title">🔥 Rentetan & aktivitas</div>
      <div class="card__sub">14 hari terakhir</div>
      <div style="margin:var(--s-4) 0">${raw(sparkBars(last14, { color: 'var(--warn)' }))}</div>
      <div style="overflow-x:auto">${raw(heatmap(hist, 91))}</div>
      <p class="xs muted" style="margin-top:var(--s-2)">Rekor terbaik: ${s.streak.best} hari</p>
    </div>
    <div class="card">
      <div class="card__title">⟳ Beban ulangan</div>
      <div class="card__sub">Perkiraan 14 hari ke depan</div>
      <div style="margin:var(--s-4) 0">${raw(sparkBars(forecast(14), { color: 'var(--ok)' }))}</div>
      <div class="row" style="gap:var(--s-4)">
        <div><div class="stat__k">Matang</div><div class="b num">${srsStats().mature}</div></div>
        <div><div class="stat__k">Muda</div><div class="b num">${srsStats().young}</div></div>
        <div><div class="stat__k">Baru</div><div class="b num">${srsStats().learning}</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card__title">🎯 Target ujian</div>
      <div class="card__sub">${s.goal === 'general' ? 'Belum dipilih' : s.goal.toUpperCase()}</div>
      <div class="stack stack--sm" style="margin-top:var(--s-4)">
        ${EXAM_LIST.map(e => `<a class="btn btn--soft btn--block" href="#/exam/${e.id}">${esc(e.name)} →</a>`).join('')}
      </div>
      <p class="xs muted" style="margin-top:var(--s-3)">${CONTENT_STATS.soalUjian} butir soal ujian tersedia.</p>
    </div>
  </div>

  <h2 class="sec-h" style="margin:var(--s-8) 0 var(--s-3)">Mulai cepat</h2>
  <div class="grid grid--4">
    ${[
      ['#/review','⟳','Kartu Hafalan','Ulangi yang jatuh tempo'],
      ['#/grammar','📐',`${CONTENT_STATS.grammar} Topik Grammar`,'Dari A1 sampai C2'],
      ['#/vocab','🗂',`${nf(CONTENT_STATS.kata)} Kata`,'Tematik & bertingkat'],
      ['#/listening','🎧','Dikte & Simakan','Latih telinga'],
      ['#/speaking','🎙','Rekam & Nilai','Skor pengucapan otomatis'],
      ['#/writing','✍️','Periksa Tulisan','Deteksi kesalahan khas'],
      ['#/pronunciation','🔊','Pelafalan','Bunyi sulit orang Indonesia'],
      ['#/tricks','💡',`${CONTENT_STATS.trik} Trik Belajar`,'Metode yang terbukti']
    ].map(([h, i, t, d]) => `
      <a class="card card--link card--flat" href="${h}">
        <div style="font-size:1.5rem">${i}</div>
        <div class="b" style="margin-top:.4rem">${esc(t)}</div>
        <div class="xs muted">${esc(d)}</div>
      </a>`).join('')}
  </div>`;

  $('#main').querySelectorAll('[data-task]').forEach(btn => {
    btn.onclick = () => { togglePlanTask(day, +btn.dataset.task); render(); };
  });
}
