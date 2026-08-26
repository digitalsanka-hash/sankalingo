/* Tata bahasa: indeks 162 topik + halaman topik dengan latihan. */

import { $, $$, el, html, raw, esc, toast } from '../ui.js';
import { ico } from '../icons.js';
import { state, recordQuiz, toggleSave, isSaved } from '../state.js';
import { say } from '../speech.js';
import { runQuiz } from '../quiz.js';
import { GRAMMAR, grammarById, CONTENT_STATS } from '../data.js';
import { KELOMPOK } from '../../data/grammar-kelompok.js';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export function renderIndex() {
  const q = state().quiz;

  /* Skor terbaik per topik dipakai di tiga tempat sekaligus — lencana
     kartu, ringkasan kelompok, dan saringan "perlu diulang". Dihitung
     lewat satu fungsi supaya ketiganya tidak bisa berbeda. */
  const skor  = g => q['g:' + g.id]?.best;
  const kuasa = g => (skor(g) ?? -1) >= 80;

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Tata bahasa</span>
      <h1>${CONTENT_STATS.grammar} topik, ${CONTENT_STATS.drill} latihan</h1>
      <p>Disusun berjenjang A1 sampai C2. Setiap topik menjelaskan <b>mengapa</b> orang Indonesia
         sering keliru di titik itu, lalu memberi rumus, contoh, jebakan, dan latihan.</p>
    </div>
    <input class="input" id="gSearch" type="search" placeholder="Cari topik, rumus, atau jebakan…"
           aria-label="Cari topik tata bahasa" style="max-width:280px" />
  </div>

  <div class="gram-bar">
    <div class="tabs" id="gTabs" role="tablist" aria-label="Saring menurut tingkat">
      <button class="is-active" data-lv="all" role="tab" aria-selected="true">Semua</button>
      ${LEVELS.map(l => `<button data-lv="${l}" role="tab" aria-selected="false">${l}</button>`).join('')}
      <button data-lv="weak" role="tab" aria-selected="false">⚠ Perlu diulang</button>
    </div>
    <div class="gram-chips" id="gKel" role="group" aria-label="Saring menurut tema"></div>
  </div>

  <p class="gram-count small muted" id="gCount" role="status" aria-live="polite"></p>
  <div id="gList"></div>`;

  let tingkat = 'all', tema = 'all', cari = '';

  /* Daftar sesudah saringan tingkat & pencarian, TAPI belum disaring
     temanya — supaya angka di tiap keping tema tetap benar walau salah
     satu tema sedang dipilih. */
  const sebelumTema = () => {
    let list = GRAMMAR;
    if (tingkat === 'weak') list = list.filter(g => skor(g) !== undefined && skor(g) < 80);
    else if (tingkat !== 'all') list = list.filter(g => g.level === tingkat);
    if (cari) list = list.filter(g =>
      (g.title + ' ' + g.titleId + ' ' + g.why + ' ' + g.form).toLowerCase().includes(cari));
    return list;
  };

  const kartu = g => {
    const sk = skor(g);
    return `<a class="card card--link gram-card${kuasa(g) ? ' is-kuasa' : ''}" href="#/grammar/${g.id}">
      <div class="row row--between">
        <span class="badge badge--lv lv-${g.level}">${g.level}</span>
        ${sk !== undefined
          ? `<span class="badge ${sk >= 80 ? 'badge--ok' : 'badge--warn'}">skor ${sk}%</span>`
          : ''}
      </div>
      <div class="card__title" style="margin-top:.5rem">${esc(g.titleId)}</div>
      <div class="card__sub">${esc(g.title)}</div>
      <p class="small soft" style="margin-top:.5rem">${esc(g.why.slice(0, 120))}${g.why.length > 120 ? '…' : ''}</p>
      <div class="row" style="margin-top:.6rem;gap:6px">
        <span class="badge">${g.drills.length} latihan</span>
        ${g.traps?.length ? `<span class="badge badge--bad">${g.traps.length} jebakan</span>` : ''}
      </div>
    </a>`;
  };

  const gambar = () => {
    const dasar = sebelumTema();

    /* Keping tema hanya ditampilkan kalau masih ada isinya sesudah
       saringan tingkat dan pencarian. Keping berangka nol tidak
       menambah apa pun selain benda yang harus dilewati mata. */
    const jml = {};
    for (const g of dasar) jml[g.kel] = (jml[g.kel] || 0) + 1;
    if (tema !== 'all' && !jml[tema]) tema = 'all';

    $('#gKel').innerHTML =
      `<button class="chip${tema === 'all' ? ' is-active' : ''}" data-kel="all"
               aria-pressed="${tema === 'all'}">Semua tema <b>${dasar.length}</b></button>` +
      KELOMPOK.filter(k => jml[k.id]).map(k =>
        `<button class="chip${tema === k.id ? ' is-active' : ''}" data-kel="${k.id}"
                 aria-pressed="${tema === k.id}">${k.ikon} ${esc(k.nama)} <b>${jml[k.id]}</b></button>`
      ).join('');

    const list = tema === 'all' ? dasar : dasar.filter(g => g.kel === tema);
    const sudah = list.filter(kuasa).length;
    $('#gCount').textContent = list.length
      ? `${list.length} topik ditampilkan · ${sudah} sudah dikuasai (skor ≥ 80%)`
      : '';

    if (!list.length) {
      $('#gList').innerHTML =
        '<div class="empty"><div class="empty__ico">🔍</div><p>Tidak ada topik yang cocok.</p></div>';
      return;
    }

    /* Saat sedang mencari, pengelompokan justru menghalangi: yang dicari
       adalah satu topik tertentu, bukan peta. Jadi hasilnya diratakan. */
    if (cari || tema !== 'all') {
      $('#gList').innerHTML = `<div class="grid grid--2">${list.map(kartu).join('')}</div>`;
      return;
    }

    $('#gList').innerHTML = KELOMPOK.filter(k => list.some(g => g.kel === k.id)).map(k => {
      const isi = list.filter(g => g.kel === k.id);
      const kk = isi.filter(kuasa).length;
      return `<section class="gram-sec">
        <header class="gram-sec__h">
          <h2><span aria-hidden="true">${k.ikon}</span> ${esc(k.nama)}</h2>
          <span class="small muted nowrap">${kk} / ${isi.length} dikuasai</span>
        </header>
        <div class="bar bar--thin" aria-hidden="true"><i style="width:${Math.round(kk / isi.length * 100)}%"></i></div>
        <div class="grid grid--2" style="margin-top:var(--s-4)">${isi.map(kartu).join('')}</div>
      </section>`;
    }).join('');
  };

  gambar();

  $$('#gTabs button').forEach(b => b.onclick = () => {
    $$('#gTabs button').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
    b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
    tingkat = b.dataset.lv; gambar();
  });

  /* Kepingnya digambar ulang setiap kali, jadi pendengar klik dipasang
     di wadahnya — bukan di tombol yang sebentar lagi diganti. */
  $('#gKel').onclick = e => {
    const b = e.target.closest('[data-kel]');
    if (!b) return;
    tema = b.dataset.kel; gambar();
  };

  $('#gSearch').oninput = e => { cari = e.target.value.trim().toLowerCase(); gambar(); };
}

/* Badan penjelasan — dipakai juga di pemutar pelajaran. */
/**
 * Badan satu topik tata bahasa.
 * @param g topik
 * @param code kode bahasa. Selain 'en' contohnya dibacakan lewat mesin
 *   suara berlapis (js/voice.js); memakai suara Inggris untuk kalimat
 *   Korea atau Arab hanya menghasilkan diam.
 */
export function renderTopicBody(g, code = 'en') {
  const tombolSuara = (teks, rom) => code === 'en'
    ? `<button class="speak-btn" data-say="${esc(teks)}"
         aria-label="Dengarkan" style="display:inline-grid;vertical-align:middle">🔊</button>`
    : `<button class="speak-btn" data-say-lang="${esc(teks)}" data-say-code="${esc(code)}"
         data-rom="${esc(rom || '')}" aria-label="Dengarkan"
         style="display:inline-grid;vertical-align:middle">🔊</button>`;
  /* Kepala kartu: lambang berwarna + judul. Lambangnya memakai ikon
     yang sudah ada di js/icons.js, bukan emoji — supaya bentuk dan
     ketebalannya seragam dengan seluruh aplikasi. */
  const kepala = (ikon, judul) =>
    `<div class="lesson-card__head">
       <span class="lesson-card__mark">${ico(ikon, { size: 17 })}</span>
       <span class="lesson-card__title">${esc(judul)}</span>
     </div>`;

  return html`
  <div class="lesson-body">
    <p class="lesson-lead">${esc(g.why)}</p>

    ${raw(g.ajar?.length ? `<div class="lesson-card lc--paham">
      ${kepala('book', 'Pahami dulu')}
      <div class="ajar">
        ${g.ajar.map(([judul, teks, ex], i) => `
        <div class="ajar__step">
          <span class="ajar__num">${i + 1}</span>
          <div>
            <h3 class="ajar__title">${esc(judul)}</h3>
            <p class="ajar__text">${esc(teks)}</p>
            ${ex ? `<div class="ajar__ex">
              <span class="en">${esc(ex[0])} ${tombolSuara(ex[0], ex[2])}</span>
              ${ex[2] ? `<span class="mono xs" style="color:var(--acc)">${esc(ex[2])}</span>` : ''}
              <span class="id-txt">${esc(ex[1])}</span></div>` : ''}
          </div>
        </div>`).join('')}
      </div></div>` : '')}

    <div class="lesson-card lc--rumus">
      ${raw(kepala('grammar', 'Rumus'))}
      <div class="formula">${esc(g.form)}</div>
    </div>

    ${raw(g.notes?.length ? `<div class="lesson-card lc--catatan">
      ${kepala('bulb', 'Catatan kunci')}
      <ul class="lesson-list">
        ${g.notes.map(n => `<li><span>${esc(n)}</span></li>`).join('')}
      </ul></div>` : '')}

    ${raw(g.ex?.length ? `<div class="lesson-card lc--contoh">
      ${kepala('quote', 'Contoh')}
      <div class="ex-list">
        ${g.ex.map(([en, id, rom]) => `<div class="ex">
          <span class="en">${esc(en)} ${tombolSuara(en, rom)}</span>
          ${rom ? `<span class="mono xs" style="color:var(--acc)">${esc(rom)}</span>` : ''}
          <span class="id-txt">${esc(id)}</span></div>`).join('')}
      </div></div>` : '')}

    ${raw(g.traps?.length ? `<div class="lesson-card lc--jebakan">
      ${kepala('warn', 'Jebakan khas penutur Indonesia')}
      <div class="ex-list">
        ${g.traps.map(([bad, good, why]) => `<div class="ex ex--bad">
          <span class="en">${esc(bad)}</span>
          <span class="en" style="color:var(--ok);text-decoration:none">✓ ${esc(good)}</span>
          <span class="id-txt">${esc(why)}</span></div>`).join('')}
      </div></div>` : '')}
  </div>`;
}

export function renderTopic(id) {
  const g = grammarById(id);
  if (!g) return $('#main').innerHTML = '<p>Topik tidak ditemukan.</p>';
  const idx = GRAMMAR.indexOf(g);
  const prev = GRAMMAR[idx - 1], next = GRAMMAR[idx + 1];
  const rec = state().quiz['g:' + g.id];

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/grammar">← Semua topik</a>
      <h1 style="margin-top:.4rem">${esc(g.titleId)}</h1>
      <p class="soft">${esc(g.title)}</p>
    </div>
    <div class="row">
      <span class="badge badge--lv lv-${g.level}">${g.level}</span>
      ${raw(rec ? `<span class="badge ${rec.best >= 80 ? 'badge--ok' : 'badge--warn'}">terbaik ${rec.best}%</span>` : '')}
      <button class="btn btn--ghost btn--sm" id="saveBtn">${isSaved(g.id) ? '★ Tersimpan' : '☆ Simpan'}</button>
    </div>
  </div>

  <div class="split">
    <aside class="sticky-col">
      <div class="card card--flat">
        <div class="card__title" style="font-size:var(--fs-md)">Topik level ${g.level}</div>
        <div class="gram-nav" style="margin-top:.6rem">
          ${GRAMMAR.filter(x => x.level === g.level).map(x =>
            `<button data-go="${x.id}" class="${x.id === g.id ? 'is-active' : ''}">${esc(x.titleId)}</button>`).join('')}
        </div>
      </div>
    </aside>

    <div>
      <div id="gBody">${raw(renderTopicBody(g))}</div>
      <div class="card" style="margin-top:var(--s-5)">
        <div class="card__title">Latihan (${g.drills.length} soal)</div>
        <p class="small soft" style="margin:.4rem 0 1rem">Kerjakan sampai skormu minimal 80% sebelum lanjut.</p>
        <button class="btn btn--primary btn--lg" id="startDrill">▶ Mulai latihan</button>
        <div id="drillBox" style="margin-top:var(--s-4)"></div>
      </div>

      <div class="row row--between" style="margin-top:var(--s-6)">
        ${raw(prev ? `<a class="btn btn--soft" href="#/grammar/${prev.id}">← ${esc(prev.titleId)}</a>` : '<span></span>')}
        ${raw(next ? `<a class="btn btn--soft" href="#/grammar/${next.id}">${esc(next.titleId)} →</a>` : '<span></span>')}
      </div>
    </div>
  </div>`;

  $('#main').addEventListener('click', e => {
    const goBtn = e.target.closest('[data-go]');
    if (goBtn) location.hash = '#/grammar/' + goBtn.dataset.go;
  });

  $('#saveBtn').onclick = () => {
    const on = toggleSave({ id: g.id, t: g.titleId, href: '#/grammar/' + g.id });
    $('#saveBtn').textContent = on ? '★ Tersimpan' : '☆ Simpan';
  };

  $('#startDrill').onclick = () => {
    $('#startDrill').remove();
    runQuiz($('#drillBox'), g.drills.map(d => ({ ...d, level: g.level, tag: g.title })),
      { skill: 'grammar', quizKey: 'g:' + g.id });
  };
}
