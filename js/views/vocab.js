/* Kosakata: daftar paket, penjelajah kata, dan sesi kartu hafalan SRS. */

import { $, $$, el, html, raw, esc, toast, shuffle, sample, nf, bump } from '../ui.js';
import { ico } from '../icons.js';
import { tipBantuan } from '../comfortui.js';
import { state, addMinutes } from '../state.js';
import { say, stopSpeaking } from '../speech.js';
import { ucap, stop as stopVoice } from '../voice.js';
import { grade, card, buildQueue, dueIds, stats as srsStats, GRADES } from '../srs.js';
import { ALL_PACKS, ALL_LEX, lexById, CONTENT_STATS } from '../data.js';

/* ── Daftar paket ─────────────────────────────────────────────── */
export function renderIndex() {
  const srs = state().srs;
  const learned = p => p.items.filter(i => srs[i.id]).length;

  $('#main').innerHTML = html`
  ${raw(tipBantuan('kosakata-en',
    'Kata yang kamu buka di sini otomatis masuk ke <b>Kartu</b> dan dijadwalkan ulang sesuai seberapa sering kamu lupa. Tidak perlu mencatat sendiri.'))}
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Kosakata</span>
      <h1>${nf(CONTENT_STATS.kata)} entri, tersusun per tema</h1>
      <p>Setiap entri punya IPA, arti Indonesia, dan contoh kalimat dua bahasa.
         Klik ikon suara untuk mendengar pengucapannya.</p>
    </div>
    <a class="btn btn--primary" href="#/review">⟳ Ulangi kartu jatuh tempo (${dueIds().length})</a>
  </div>

  <div class="grid grid--3">
    ${ALL_PACKS.map(p => {
      const n = learned(p), pct = Math.round((n / p.items.length) * 100);
      return `<a class="card card--link" href="#/vocab/${p.id}">
        <div class="row row--between">
          <div style="font-size:1.6rem">${p.icon}</div>
          <span class="badge badge--lv lv-${p.level}">${p.level}</span>
        </div>
        <div class="card__title" style="margin-top:.6rem">${esc(p.titleId)}</div>
        <div class="card__sub">${esc(p.title)} · ${p.items.length} kata</div>
        <p class="small soft" style="margin:.6rem 0">${esc(p.blurb)}</p>
        <div class="bar bar--ok"><i style="width:${pct}%"></i></div>
        <div class="xs muted" style="margin-top:.4rem">${n} dari ${p.items.length} sudah masuk kartu hafalan</div>
      </a>`;
    }).join('')}
  </div>`;
}

/* ── Satu paket ───────────────────────────────────────────────── */
export function renderPack(id) {
  const p = ALL_PACKS.find(x => x.id === id);
  if (!p) return $('#main').innerHTML = '<p>Paket tidak ditemukan.</p>';
  const q = new URLSearchParams(location.hash.split('?')[1] || '').get('q') || '';

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/vocab">← Semua paket</a>
      <h1 style="margin-top:.4rem">${p.icon} ${esc(p.titleId)}</h1>
      <p>${esc(p.blurb)}</p>
    </div>
    <div class="row">
      <button class="btn btn--soft" id="playAll">🔊 Putar semua</button>
      <button class="btn btn--primary" id="startFlash">▶ Mulai kartu hafalan</button>
    </div>
  </div>

  <div class="row" style="margin-bottom:var(--s-4)">
    <input class="input" id="vSearch" type="search" placeholder="Saring kata atau arti…"
           aria-label="Saring kata atau arti" value="${esc(q)}" style="max-width:340px" />
    <span class="badge" id="vCount">${p.items.length} kata</span>
  </div>

  <div id="flashHost"></div>
  <div class="vocab-grid" id="vGrid"></div>`;

  const grid = $('#vGrid');
  const paint = () => {
    const term = $('#vSearch').value.trim().toLowerCase();
    const list = p.items.filter(i =>
      !term || i.w.toLowerCase().includes(term) || i.id_.toLowerCase().includes(term));
    $('#vCount').textContent = `${list.length} kata`;
    grid.innerHTML = list.map(i => {
      const c = card(i.id);
      return `<div class="vocab-item">
        <div class="vocab-item__top">
          <span class="vocab-item__w">${esc(i.w)}</span>
          ${i.ipa ? `<span class="ipa">${esc(i.ipa)}</span>` : ''}
          <button class="speak-btn" data-say="${esc(i.w)}" aria-label="Dengar">🔊</button>
        </div>
        <div class="row" style="gap:6px">
          <span class="badge">${esc(i.pos)}</span>
          ${c ? `<span class="badge badge--ok" title="Interval ${c.iv} hari">⟳ ${c.iv}h</span>` : ''}
        </div>
        <div class="vocab-item__id">${esc(i.id_)}</div>
        <div class="vocab-item__ex">
          <div>${esc(i.ex)}</div>
          <div class="id-txt xs">${esc(i.exId)}</div>
        </div>
      </div>`;
    }).join('') || '<div class="empty"><div class="empty__ico">🔍</div><p>Tidak ada yang cocok.</p></div>';
  };
  paint();
  $('#vSearch').oninput = paint;

  $('#playAll').onclick = async () => {
    const list = p.items.slice(0, 40);
    toast('Memutar ' + list.length + ' kata. Klik lagi untuk berhenti.', '');
    for (const i of list) { await say(`${i.w}. ${i.ex}`); }
  };

  $('#startFlash').onclick = () => {
    grid.innerHTML = '';
    $('#vSearch').closest('.row').style.display = 'none';
    flashSession($('#flashHost'), p.items, { title: p.titleId });
  };
}

/* ── Sesi kartu hafalan (SRS) ─────────────────────────────────── */
export function flashSession(host, items, { title = 'Kartu Hafalan', limit = 25, onDone, lang = 'en' } = {}) {
  const bunyikan = it => lang === 'en'
    ? say(it.w)
    : ucap(lang, { text: it.w, rom: it.pos });
  const ids = items.map(i => i.id);
  const queue = buildQueue(ids, { newLimit: limit, reviewLimit: limit * 3 });
  if (!queue.length) {
    host.innerHTML = html`<div class="empty"><div class="empty__ico">✨</div>
      <h3>Tidak ada kartu jatuh tempo</h3>
      <p class="small">Semua kartu di sini sudah kamu kuasai untuk hari ini.</p>
      <a class="btn btn--soft" href="#/vocab">Pilih paket lain</a></div>`;
    onDone?.();
    return;
  }

  let i = 0, right = 0;
  host.innerHTML = html`
    <div class="lesson-top">
      <div class="bar"><i id="fBar" style="width:0%"></i></div>
      <span class="small muted nowrap" id="fCount"></span>
    </div>
    <div class="flash" id="flash">
      <div class="flash__inner">
        <div class="flash__face" id="faceFront"></div>
        <div class="flash__face flash__face--back" id="faceBack"></div>
      </div>
    </div>
    <div id="fCtrl" style="margin-top:var(--s-5)"></div>
    <p class="xs muted t-c" style="margin-top:var(--s-3)">
      Tekan <kbd>Spasi</kbd> untuk membalik · <kbd>1</kbd>–<kbd>4</kbd> untuk menilai</p>`;

  const flash = $('#flash', host);
  const byId = new Map(items.filter(Boolean).map(x => [x.id, x]));
  const draw = () => {
    /* Cabang lexById dipakai kalau entri di byId ADA tetapi KOSONG —
       bukan hanya kalau tidak ada sama sekali. Sebelumnya syaratnya
       cuma "tidak ada", sehingga sebuah stub {id} yang truthy tetapi
       tanpa kata apa pun lolos dan tergambar sebagai kartu putih. */
    const dariDaftar = byId.get(queue[i]);
    const it = (dariDaftar && dariDaftar.w) ? dariDaftar : (lexById(queue[i]) || dariDaftar);
    if (!it || !it.w) return next(true);
    flash.classList.remove('is-flip');
    $('#fBar', host).style.width = `${(i / queue.length) * 100}%`;
    $('#fCount', host).textContent = `${i + 1} / ${queue.length}`;
    $('#faceFront', host).innerHTML = html`
      <div class="flash__word">${esc(it.w)}</div>
      ${raw(it.ipa ? `<div class="flash__ipa">${esc(it.ipa)}</div>` : '')}
      ${raw(lang !== 'en' && it.pos ? `<div class="flash__ipa mono">${esc(it.pos)}</div>` : '')}
      ${raw(lang === 'en' ? `<div class="badge">${esc(it.pos)}</div>` : '')}
      <button class="btn btn--soft btn--sm" data-say-card>${ico('volume', { size: 15 })} Dengar</button>
      <div class="xs muted">klik kartu untuk membalik</div>`;
    $('#faceBack', host).innerHTML = html`
      <div class="flash__id">${esc(it.id_)}</div>
      <div class="flash__ex">${esc(it.ex)}</div>
      <div class="flash__ex id-txt">${esc(it.exId)}</div>`;
    $('#fCtrl', host).innerHTML = `<button class="btn btn--primary btn--block btn--lg" id="revealBtn">Lihat jawaban</button>`;
    $('#revealBtn', host).onclick = reveal;
    if (state().settings.autoSpeak) bunyikan(it);
  };

  const reveal = () => {
    flash.classList.add('is-flip');
    $('#fCtrl', host).innerHTML = `<div class="grade-row">
      ${GRADES.map((g, k) => `<button class="grade" data-g="${g.g}">${g.label}
        <small>${g.hint}</small><small>${k + 1}</small></button>`).join('')}</div>`;
    $$('#fCtrl .grade', host).forEach(b => b.onclick = () => {
      const g = +b.dataset.g;
      grade(queue[i], g);
      if (g >= 3) right++;
      next();
    });
  };

  const next = (silent) => {
    i++;
    if (i < queue.length) return draw();
    stopSpeaking(); stopVoice();
    addMinutes(Math.max(2, Math.round(queue.length * 0.25)));
    const pct = Math.round((right / queue.length) * 100);
    host.innerHTML = html`
      <div class="card card--pad-lg t-c stack">
        <div style="font-size:2.4rem">🗂</div>
        <h2>Sesi selesai</h2>
        <p class="soft">${right} dari ${queue.length} kartu kamu ingat (${pct}%)</p>
        <div class="row" style="justify-content:center">
          <button class="btn btn--soft" id="againBtn">Sesi lagi</button>
          <a class="btn btn--primary" href="#/">Kembali ke beranda</a>
        </div>
      </div>`;
    $('#againBtn', host).onclick = () => flashSession(host, items, { title, limit, onDone });
    if (!silent) bump(document.querySelector('#xpChip b'));
    onDone?.(pct);
  };

  flash.onclick = e => {
    if (e.target.closest('[data-say-card]')) {
      e.stopPropagation();
      const it = lexById(queue[i]) || items.find(x => x.id === queue[i]);
      if (it) bunyikan(it);
      return;
    }
    if (!flash.classList.contains('is-flip')) reveal();
  };

  const keys = e => {
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.code === 'Space') { e.preventDefault(); flash.classList.contains('is-flip') ? null : reveal(); }
    if (flash.classList.contains('is-flip') && '1234'.includes(e.key)) {
      $$('#fCtrl .grade', host)[+e.key - 1]?.click();
    }
  };
  document.addEventListener('keydown', keys);
  const stop = new MutationObserver(() => {
    if (!document.body.contains(host)) { document.removeEventListener('keydown', keys); stop.disconnect(); }
  });
  stop.observe(document.body, { childList: true, subtree: true });

  draw();
}

/* ── Ulangan harian gabungan ──────────────────────────────────── */
export function renderReview() {
  const due = dueIds();
  const st = srsStats();

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Pengulangan berjarak</span>
      <h1>Kartu Hafalan Harian</h1>
      <p>Sistem ini menampilkan kartu tepat saat kamu hampir melupakannya — cara paling hemat waktu untuk mengingat jangka panjang.</p>
    </div>
  </div>

  <div class="grid grid--4" style="margin-bottom:var(--s-5)">
    <div class="stat"><div class="stat__k">Jatuh tempo</div><div class="stat__v">${due.length}</div><div class="stat__note">siap diulang hari ini</div></div>
    <div class="stat"><div class="stat__k">Total kartu</div><div class="stat__v">${st.total}</div><div class="stat__note">dari ${nf(CONTENT_STATS.kata)} tersedia</div></div>
    <div class="stat"><div class="stat__k">Matang</div><div class="stat__v">${st.mature}</div><div class="stat__note">interval ≥ 21 hari</div></div>
    <div class="stat"><div class="stat__k">Kemudahan rata-rata</div><div class="stat__v">${st.avgEf}</div><div class="stat__note">2,5 = normal</div></div>
  </div>

  <div id="revHost"></div>

  ${raw(due.length ? '' : `
  <div class="card">
    <div class="card__title">Belum ada yang jatuh tempo</div>
    <p class="soft small" style="margin:.5rem 0 1rem">Tambahkan kartu baru dari paket kosakata mana pun, atau pelajari kata acak sekarang.</p>
    <div class="row"><button class="btn btn--primary" id="mixBtn">Pelajari 20 kata baru acak</button>
    <a class="btn btn--soft" href="#/vocab">Pilih paket</a></div>
  </div>`)}`;

  if (due.length) {
    /* Dulu di sini dikirim `due.map(id => ({ id }))` — stub yang hanya
       berisi id. Di dalam flashSession, draw() mencari kartunya lewat
       `byId.get(...) || lexById(...)`, dan byId dibangun dari items yang
       baru saja dikirim. Stub itu TRUTHY, jadi cabang lexById — yang
       memang disiapkan untuk mengisi datanya — tidak pernah dijalankan.
       Hasilnya setiap kartu tergambar kosong: tanpa kata, tanpa IPA,
       tanpa arti, tanpa contoh. Tombol nilai tetap hidup, sehingga
       pemelajar menilai kartu yang tidak bisa dibacanya dan jadwal SM-2
       seluruh deknya rusak.

       Sekarang kartunya diisi lebih dulu, sama seperti yang sudah lama
       dilakukan halaman bahasa lain (js/views/langpages.js:778).
       filter(Boolean) sekaligus membuang id yang bukan milik dek Inggris
       — dueIds() tidak menyaring bahasa. */
    const kartuJatuhTempo = due.map(id => lexById(id)).filter(Boolean);
    flashSession($('#revHost'), kartuJatuhTempo, { title: 'Ulangan harian', limit: 60 });
  } else {
    const b = $('#mixBtn');
    if (b) b.onclick = () => {
      const fresh = ALL_LEX.filter(x => !state().srs[x.id]);
      flashSession($('#revHost'), sample(fresh, 20), { title: 'Kata baru' });
      b.closest('.card').remove();
    };
  }
}
