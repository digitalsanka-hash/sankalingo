/* Kerangka aplikasi.

   Semua bahasa setara. Aplikasi selalu berada DI DALAM satu bahasa dan
   seluruh menu, rute, judul, serta warna aksen mengikuti bahasa itu.
   Bentuk rute:  #/<kode-bahasa>/<bagian>   contoh: #/ko/aksara  ·  #/en/grammar */

import { $, $$, el, html, raw, esc, toast, bump } from './ui.js';
import { state, mutate, onChange, liveStreak, xpLevel, recordVisit, lastVisit,
         onGagalSimpan, perluCadangan, exportData } from './state.js';
import { comfort, setComfort, terapkan as terapkanComfort,
         ikutiSistemPertamaKali } from './comfort.js';
import { pasangPanelCepat, pasangSpandukLuring, pasangAjakanInstal,
         pasangPenutupTip, gambarTabbar, setTabbarDue } from './comfortui.js';
import { daftarkan as daftarkanLuring } from './luring.js';
import { pasangOtomatis as pasangSinkronAwan } from './awan.js';
import { dueIds } from './srs.js';
import { loadVoices, stopSpeaking, say, ttsReady, englishVoices } from './speech.js';
import { ucap as ucapLang, stop as stopUcap, ready as suaraSiap } from './voice.js';
import { search, CONTENT_STATS, ID_LEX_INGGRIS } from './data.js';
import { ico } from './icons.js';
import { LANGS, langByCode } from '../data/lang/registry.js';
import { currentLang, setLang, loadLangData, cachedLang, applyAccent, navFor,
         lexOf, phraseLexOf, kanjiLexOf, isLangCode } from './langctx.js';

import * as Dash from './views/dashboard.js';
import * as Curr from './views/curriculum.js';
import * as Vocab from './views/vocab.js';
import * as Gram from './views/grammar.js';
import * as Skills from './views/skills.js';
import * as Exams from './views/exams.js';
import * as Mock from './views/mock.js';
import * as Plan from './views/plan.js';
import * as Acct from './views/stats.js';
import * as Lang from './views/lang.js';
import * as LP from './views/langpages.js';
import * as LC from './views/langcourse.js';
import * as Pandu from './views/panduan.js';
import * as Audit from './views/auditsuara.js';
import * as Adm from './views/admin.js';
import * as MockL from './views/mocklang.js';
import * as Tense from './views/tenses.js';
import { mulaiPandu, sudahDipandu } from './views/onboard.js';

/* ── Rute bahasa Inggris ──────────────────────────────────────── */
const ROUTES_EN = [
  [/^$/,                          () => Dash.render()],
  [/^kurikulum$/,                 () => Curr.renderLevels()],
  [/^level\/(.+)$/,               m => Curr.renderLevel(m[1])],
  [/^unit\/(.+)$/,                m => Curr.renderUnit(m[1])],
  [/^lesson\/([^/]+)\/(.+)$/,     m => Curr.renderLesson(m[1], m[2])],
  [/^grammar$/,                   () => Gram.renderIndex()],
  [/^grammar\/(.+)$/,             m => Gram.renderTopic(m[1])],
  [/^tenses$/,                    () => Tense.renderTenses()],
  [/^tenses\/(.+)$/,              m => Tense.renderTenses(m[1])],
  [/^kosakata$/,                  () => Vocab.renderIndex()],
  [/^kosakata\/([^?]+)/,          m => Vocab.renderPack(m[1])],
  [/^kartu$/,                     () => Vocab.renderReview()],
  [/^menyimak$/,                  () => Skills.renderListening()],
  [/^berbicara$/,                 () => Skills.renderSpeaking()],
  [/^membaca$/,                   () => Skills.renderReadingIndex()],
  [/^membaca\/(.+)$/,             m => Skills.renderReading(m[1])],
  [/^menulis$/,                   () => Skills.renderWriting()],
  [/^pelafalan$/,                 () => Skills.renderPronunciation()],
  [/^ujian$/,                     () => Exams.renderHub()],
  [/^ujian\/([^/]+)$/,            m => Exams.renderExam(m[1])],
  [/^ujian\/([^/]+)\/simulasi$/,  m => Mock.renderMock(m[1])],
  [/^penempatan$/,                () => Plan.renderPlacement()],
  [/^rencana$/,                   () => Plan.renderIndex()],
  [/^rencana\/(.+)$/,             m => Plan.renderPlan(m[1])],
  [/^trik$/,                      () => Plan.renderTricks()],
  [/^kemajuan$/,                  () => Acct.renderStats()],
  [/^pengaturan$/,                () => Acct.renderSettings()],
  [/^panduan$/,                   () => Pandu.renderPanduan()],
  [/^suara$/,                     () => Audit.renderAuditSuara()],
  [/^admin$/,                     () => Adm.renderAdmin()]
];

/* ── Rute bahasa lain (satu tabel, dipakai kedelapan bahasa) ──── */
const ROUTES_LANG = [
  [/^$/,                  (c, L) => LP.home(c, L)],
  [/^kurikulum$/,         (c, L) => LC.curriculum(c, L)],
  [/^tingkat\/(.+)$/,     (c, L, m) => LC.level(c, L, m[1])],
  [/^unit\/(.+)$/,        (c, L, m) => LC.unit(c, L, m[1])],
  [/^pelajaran\/([^/]+)\/(.+)$/, (c, L, m) => LC.lesson(c, L, m[1], m[2])],
  [/^kanji$/,             (c, L) => kanjiRoute(c, L, v => v.kanjiIndex(c, L))],
  [/^kanji\/latihan$/,    (c, L) => kanjiRoute(c, L, v => v.kanjiLatihan(c, L))],
  [/^kanji\/([^?]+)/,     (c, L, m) => kanjiRoute(c, L, v => v.kanjiDetail(c, L, m[1]))],
  [/^aksara$/,            (c, L) => LP.scriptIndex(c, L)],
  [/^aksara\/([^?]+)/,    (c, L, m) => LP.scriptTrainer(c, L, m[1])],
  [/^grammar$/,           (c, L) => LP.grammar(c, L)],
  [/^verba$/,             (c, L) => Tense.renderVerba(c, L?.verba, langByCode(c)?.name || c)],
  [/^kosakata$/,          (c, L) => LP.vocab(c, L)],
  [/^kartu$/,             (c, L) => LP.cards(c, L)],
  [/^frasa$/,             (c, L) => LP.phrases(c, L)],
  [/^pelafalan$/,         (c, L) => LP.pronunciation(c, L)],
  [/^menyimak$/,          (c, L) => LP.listening(c, L)],
  [/^berbicara$/,         (c, L) => LP.speaking(c, L)],
  [/^ujian$/,             (c, L) => LP.exam(c, L)],
  [/^ujian\/simulasi$/,   (c, L) => MockL.pilihTingkat(c, L)],
  [/^ujian\/simulasi\/([^/]+)$/,          (c, L, m) => MockL.mulaiSimulasi(c, L, m[1], false)],
  [/^ujian\/simulasi\/([^/]+)\/ringkas$/, (c, L, m) => MockL.mulaiSimulasi(c, L, m[1], true)],
  [/^trik$/,              () => Plan.renderTricks()],
  [/^kemajuan$/,          () => Acct.renderStats()],
  [/^pengaturan$/,        () => Acct.renderSettings()],
  [/^panduan$/,           () => Pandu.renderPanduan()],
  [/^suara$/,             () => Audit.renderAuditSuara()],
  [/^admin$/,             () => Adm.renderAdmin()]
];

/* Kanji hanya ada di bahasa Jepang. Datanya 105 butir, jadi berkasnya
   diambil saat halaman ini dibuka — bukan saat aplikasi dinyalakan. */
async function kanjiRoute(code, L, jalankan) {
  if (code !== 'ja') { location.hash = `#/${code}/`; return; }
  try {
    jalankan(await import('./views/kanji.js'));
  } catch (e) {
    console.error(e);
    $('#main').innerHTML = '<div class="card card--pad-lg t-c"><h2>Modul kanji gagal dimuat</h2>'
      + '<p class="soft">Coba muat ulang halaman.</p></div>';
  }
}

/* Rute lama (sebelum ada awalan bahasa) supaya tautan lama tetap hidup. */
const LEGACY = {
  '': '', curriculum: 'kurikulum', vocab: 'kosakata', review: 'kartu',
  listening: 'menyimak', speaking: 'berbicara', reading: 'membaca',
  writing: 'menulis', pronunciation: 'pelafalan', exams: 'ujian',
  exam: 'ujian', mock: 'ujian', plans: 'rencana', plan: 'rencana',
  placement: 'penempatan', tricks: 'trik', stats: 'kemajuan', settings: 'pengaturan',
  grammar: 'grammar', level: 'level', unit: 'unit', lesson: 'lesson',
  pengaturan: 'pengaturan', panduan: 'panduan', kemajuan: 'kemajuan', help: 'panduan',
  suara: 'suara', admin: 'admin'
};

const main = () => $('#main');
let navCode = null;   // bahasa yang sedang tergambar di menu

/* ── Router ───────────────────────────────────────────────────── */
async function route() {
  /* Jangkar DALAM HALAMAN dibiarkan lewat.

     Router ini melucuti '#' maupun '#/' dengan pola yang sama, sehingga
     '#main' — tautan "Lompat ke konten" di index.html:49 — terbaca
     sebagai rute 'main'. Rute itu tidak ada, LEGACY tidak mengenalnya,
     dan cabang terakhir melempar pemakai ke beranda. Justru fitur
     ketermudahan-akses yang rusak: pemakai papan ketik atau pembaca layar
     yang menekan Tab lalu Enter di halaman pelajaran kehilangan tempatnya.

     Rute aplikasi ini SELALU berbentuk '#/...'. Hash yang tidak berawalan
     '#/' berarti jangkar biasa; biarkan peramban menggulir ke sana. */
  if (location.hash && !location.hash.startsWith('#/')) return;

  const raw_ = location.hash.replace(/^#\/?/, '');
  const [pathRaw] = [raw_];
  const path = pathRaw.split('?')[0];
  const seg = path.split('/');
  stopSpeaking();
  stopUcap();
  $$('.is-on[data-say-lang], .is-on[data-say]').forEach(x => x.classList.remove('is-on'));

  /* Pemilih bahasa */
  if (seg[0] === 'lang') {
    if (seg[1] && isLangCode(seg[1])) return location.replace('#/' + seg[1]);
    if (seg[1] === undefined || seg[1] === '') { /* hub */ }
    main().innerHTML = '';
    Lang.renderHub();
    paintChromeFor('hub');
    return;
  }

  /* Bagian ?kueri dipertahankan saat mengalihkan.

     Tanpa ini, tautan hasil pencarian '#/vocab/<paket>?q=<kata>' kehilangan
     ?q= begitu dialihkan ke '#/en/kosakata/<paket>', sehingga pemelajar
     yang mencari SATU kata dijatuhkan di paket berisi ratusan kata tanpa
     kata itu tersaring — penyaringnya sudah ada di js/views/vocab.js:52,
     hanya tidak pernah menerima nilainya. */
  const kueri = raw_.includes('?') ? '?' + raw_.split('?').slice(1).join('?') : '';

  /* Tanpa awalan bahasa → alihkan ke bahasa aktif */
  if (!isLangCode(seg[0])) {
    const code = currentLang();
    if (!path) return location.replace('#/' + code);
    /* Tautan lama #/script/<kode>/<aksara> — kodenya ada di segmen kedua,
       jadi tidak bisa lewat LEGACY yang hanya menukar segmen pertama. */
    if (seg[0] === 'script' && isLangCode(seg[1]))
      return location.replace(`#/${seg[1]}/aksara/${seg.slice(2).join('/')}`);
    const head = LEGACY[seg[0]];
    if (head !== undefined) {
      const rest = [head, ...seg.slice(1)].filter(Boolean).join('/');
      if (seg[0] === 'mock') return location.replace(`#/${code}/ujian/${seg[1]}/simulasi`);
      return location.replace(`#/${code}/${rest}${kueri}`);
    }
    return location.replace('#/' + code);
  }

  const code = seg[0];
  const rest = seg.slice(1).join('/');
  setLang(code);

  let L = null;
  if (code !== 'en') {
    L = cachedLang(code);
    if (!L) {
      main().innerHTML = `<div class="empty"><div class="empty__ico">${ico('globe', { size: 34 })}</div>
        <p class="small muted">Memuat modul ${esc(langByCode(code)?.name || code)}…</p></div>`;
      L = await loadLangData(code);
    }
    if (!L) {
      main().innerHTML = html`<div class="empty"><div class="empty__ico">${raw(ico('warn', { size: 34 }))}</div>
        <h3>Modul bahasa gagal dimuat</h3>
        <a class="btn btn--soft" href="#/lang">Pilih bahasa lain</a></div>`;
      return;
    }
  }

  await paintNavFor(code, L);

  const table = code === 'en' ? ROUTES_EN : ROUTES_LANG;
  const hit = table.find(([re]) => re.test(rest));
  main().innerHTML = '';
  /* Bahasa halaman ini — dibaca penangan suara global. */
  main().dataset.langScope = code;
  try {
    if (!hit) notFound(code);
    else if (code === 'en') hit[1](rest.match(hit[0]));
    else hit[1](code, L, rest.match(hit[0]));
  } catch (e) {
    console.error(e);
    main().innerHTML = html`<div class="empty"><div class="empty__ico">${raw(ico('warn', { size: 34 }))}</div>
      <h3>Terjadi kesalahan saat memuat halaman</h3>
      <p class="small">${esc(e.message)}</p>
      <a class="btn btn--soft" href="#/${code}">Kembali ke beranda</a></div>`;
  }
  paintActive(code, rest);
  main().focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function notFound(code) {
  main().innerHTML = html`<div class="empty"><div class="empty__ico">${raw(ico('compass', { size: 34 }))}</div>
    <h3>Halaman tidak ditemukan</h3>
    <a class="btn btn--primary" href="#/${code}">Kembali ke beranda</a></div>`;
}

/* ── Menu mengikuti bahasa ────────────────────────────────────── */
async function paintNavFor(code, L) {
  applyAccent(code);
  const meta = langByCode(code);
  if (navCode === code) return paintChromeFor(code, L);

  navCode = code;
  const items = navFor(code, L);
  const nav = $('#nav');
  nav.innerHTML = '';
  items.forEach(item => {
    if (item.group) return nav.append(el('div', { class: 'nav__group' }, item.group));
    const href = `#/${code}${item.to ? '/' + item.to : ''}`;
    const a = el('a', { href, 'data-to': item.to });
    a.innerHTML = ico(item.ico, { size: 18 }) + `<span>${esc(item.label)}</span>`;
    if (item.badge === 'due') a.append(el('span', { class: 'tail', 'data-due': '' }, '0'));
    nav.append(a);
  });

  $('.brand-txt strong').textContent = 'SankaLingo GO';
  $('.brand-txt span').textContent = code === 'en' ? 'English' : meta.name;
  $('[data-nav-panduan]')?.setAttribute('href', `#/${code}/panduan`);
  $('[data-nav-atur]')?.setAttribute('href', `#/${code}/pengaturan`);
  paintTabbar(code, items);
  paintChromeFor(code, L);
}

/* Lima tujuan terpenting untuk layar kecil, dipilih dari menu bahasa itu. */
function paintTabbar(code, items) {
  const cari = (...keys) => items.find(i => keys.includes(i.to));
  const pakai = [];
  const tambah = (it, label, ico2, badge) => {
    if (!it || pakai.some(p => p.to === it.to)) return;
    pakai.push({ to: it.to, key: it.to || 'home', label: label || it.label, ico: ico2 || it.ico, badge });
  };
  tambah({ to: '', label: 'Beranda', ico: 'home' });
  tambah(cari('kurikulum'), 'Kurikulum', 'map');
  tambah(cari('kartu'), 'Kartu', 'cards', true);
  tambah(cari('aksara', 'grammar'), null, null);
  tambah(cari('ujian', 'rencana'), null, null);
  const lima = pakai.slice(0, 4);
  lima.push({ act: 'open-nav', key: '__menu', label: 'Menu', ico: 'list' });
  gambarTabbar(code, lima, hashHead());
}

const hashHead = () => {
  const seg = location.hash.replace(/^#\/?/, '').split('?')[0].split('/');
  const rest = isLangCode(seg[0]) ? seg.slice(1) : seg;
  const alias = { level: 'kurikulum', unit: 'kurikulum', lesson: 'kurikulum',
                  tingkat: 'kurikulum', pelajaran: 'kurikulum' };
  const h = rest[0] || '';
  return alias[h] || h || 'home';
};

function paintActive(code, rest) {
  const head = rest.split('/')[0] || '';
  const alias = { level: 'kurikulum', unit: 'kurikulum', lesson: 'kurikulum',
                  tingkat: 'kurikulum', pelajaran: 'kurikulum' };
  const target = alias[head] || head;
  let label = 'Beranda';
  $$('#nav a').forEach(a => {
    const on = a.dataset.to === target;
    a.classList.toggle('is-active', on);
    if (on) label = a.textContent.trim();
  });
  const meta = langByCode(code);
  const name = code === 'en' ? 'English' : meta.name;
  $('#crumb').innerHTML = `${esc(name)} <span class="muted">/</span> <b>${esc(label)}</b>`;
  document.title = `${label} · SankaLingo GO ${name}`;
  $('#langswName').textContent = name;
  $('#langswDot').style.background = meta.accent;
  $$('#langswMenu .langsw__item').forEach(a => a.classList.toggle('is-active', a.dataset.lang === code));
  $$('#tabbar [data-tb]').forEach(n => n.classList.toggle('is-active', n.dataset.tb === (alias[head] || head || 'home')));
  $('#shell').classList.remove('nav-open');
  $('.sidebar__scrim').hidden = true;
  recordVisit(code, location.hash, label);
  /* Umumkan halaman baru buat pengguna pembaca layar. */
  const ann = $('#ann');
  if (ann) { ann.textContent = ''; setTimeout(() => { ann.textContent = `${label} — ${name}`; }, 60); }
}

/* ── Ringkasan di sidebar & topbar ────────────────────────────── */
function paintChromeFor(code, L) {
  const s = state();
  const meta = code === 'hub' ? null : langByCode(code);
  let due = 0, total = 0, learned = 0;

  /* Kolamnya WAJIB disaring per bahasa. state().srs menyimpan kartu
     kesembilan bahasa dalam satu objek, jadi dueCount() tanpa kolam
     menampilkan kartu Jepang dan Korea di lencana antarmuka Inggris —
     pemelajar yang belum punya satu pun kartu Inggris tetap melihat
     angka besar, menekannya, lalu mendapat sesi berisi bahasa lain. */
  if (code === 'en') { due = dueIds(ID_LEX_INGGRIS).length; total = CONTENT_STATS.kata; }
  else if (meta && L) {
    /* Kanji IKUT dihitung. Sebelumnya kolamnya hanya kosakata dan frasa,
       sehingga pemelajar Jepang yang kartunya seluruhnya kanji melihat
       lencananya HILANG — bukan cuma salah angka — padahal halaman Kartu
       Hafalan tetap menagih kartu-kartu itu (js/views/langpages.js:758). */
    const lex = [...lexOf(code, L), ...phraseLexOf(code, L), ...kanjiLexOf(code, L)];
    const ids = lex.map(x => x.id);
    due = dueIds(ids).length; total = lex.length;
    learned = lex.filter(x => s.srs[x.id]).length;
  }

  $('#streakChip').querySelector('b').textContent = liveStreak();
  $('#xpChip').querySelector('b').textContent = s.xp;
  $('#dueChip').querySelector('b').textContent = due;
  $$('#nav [data-due]').forEach(b => { b.textContent = due; b.style.display = due ? '' : 'none'; });
  setTabbarDue(due);

  const lv = xpLevel();
  if (code === 'en') {
    $('#sideMe').innerHTML = html`
      <div class="me-top">
        <div><div class="me-lv">Level bahasa</div>
          <div class="me-name">${s.level} · ${esc(s.name || 'Pembelajar')}</div></div>
        <span class="badge badge--lv lv-${s.level}">${s.level}</span>
      </div>
      <div class="bar bar--sm"><i style="width:${lv.pct}%"></i></div>
      <div class="xs muted">Tingkat ${lv.lv} · ${s.xp} / ${lv.next} XP</div>`;
  } else if (meta) {
    const glyphs = (L?.scripts || []).reduce((a, x) => a + x.chars.length, 0);
    const done = (L?.scripts || []).flatMap(x => x.chars)
      .filter(c => s.checklist[`glyph:${code}:${c.c}`]).length;
    $('#sideMe').innerHTML = html`
      <div class="me-top">
        <div><div class="me-lv">Sedang belajar</div>
          <div class="me-name">${esc(meta.name)} · ${esc(meta.native)}</div></div>
        <span class="badge" style="background:${meta.accent};color:#fff">${esc(meta.exam.split(' ')[0])}</span>
      </div>
      <div class="bar bar--sm"><i style="width:${glyphs ? (done / glyphs) * 100 : 0}%"></i></div>
      <div class="xs muted">${done} / ${glyphs} huruf · ${learned} / ${total} kartu</div>`;
  }

  $('#footStat').textContent = code === 'en'
    ? `${CONTENT_STATS.kata.toLocaleString('id-ID')} entri kosakata · ${CONTENT_STATS.grammar} topik tata bahasa · ${CONTENT_STATS.drill} latihan`
    : meta ? `${meta.name} · aksara ${meta.script} · ujian ${meta.exam}`
           : `Sembilan bahasa, satu metode`;
}

/* ── Pengalih bahasa ──────────────────────────────────────────── */
function buildLangSwitch() {
  const menu = $('#langswMenu');
  menu.innerHTML = LANGS.map(l => `
    <a class="langsw__item" href="#/${l.code}" data-lang="${l.code}">
      <span class="langsw__dot" style="background:${l.accent}"></span>
      <span class="langsw__txt"><b>${esc(l.name)}</b><em>${esc(l.native)}</em></span>
      <small>${esc(l.exam.split('·')[0].trim())}</small>
    </a>`).join('') +
    `<a class="langsw__all" href="#/lang">Bandingkan semua bahasa →</a>`;

  const btn = $('#langswBtn');
  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  btn.onclick = e => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
    btn.setAttribute('aria-expanded', String(!menu.hidden));
  };
  document.addEventListener('click', e => { if (!e.target.closest('#langsw')) close(); });
  menu.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── Palet pencarian ──────────────────────────────────────────── */
let paletteSel = 0, paletteItems = [];
function openPalette() {
  $('#palette').hidden = false;
  const inp = $('#paletteInput');
  inp.value = ''; renderPalette([]);
  setTimeout(() => inp.focus(), 20);
}
const closePalette = () => { $('#palette').hidden = true; };

function paletteSearch(q) {
  const code = currentLang();
  const langHits = LANGS
    .filter(l => l.name.toLowerCase().includes(q.toLowerCase()) || l.native.includes(q))
    .map(l => ({ t: `Belajar ${l.name} — ${l.native}`, k: 'Bahasa', href: `#/${l.code}` }));
  const navHits = $$('#nav a').filter(a => a.textContent.toLowerCase().includes(q.toLowerCase()))
    .map(a => ({ t: a.textContent.trim(), k: 'Menu', href: a.getAttribute('href') }));
  return [...langHits, ...navHits, ...(code === 'en' ? search(q) : [])].slice(0, 40);
}

function renderPalette(items) {
  paletteItems = items; paletteSel = 0;
  const box = $('#paletteResults');
  if (!items.length) {
    box.innerHTML = `<div class="pr muted" style="cursor:default">Ketik nama bahasa, menu, atau materi…</div>`;
    return;
  }
  box.innerHTML = items.map((x, i) =>
    `<div class="pr ${i === 0 ? 'is-sel' : ''}" data-i="${i}"><span>${esc(x.t)}</span><small>${esc(x.k)}</small></div>`).join('');
  $$('#paletteResults .pr').forEach(n => n.onclick = () => go(items[+n.dataset.i].href));
}
const go = href => { location.hash = href; closePalette(); };

function movePalette(d) {
  if (!paletteItems.length) return;
  paletteSel = (paletteSel + d + paletteItems.length) % paletteItems.length;
  $$('#paletteResults .pr').forEach((n, i) => n.classList.toggle('is-sel', i === paletteSel));
  $$('#paletteResults .pr')[paletteSel]?.scrollIntoView({ block: 'nearest' });
}

/* ── Tema ─────────────────────────────────────────────────────── */
function applyTheme(t) {
  setComfort({ tema: t });
  mutate(s => { s.settings.theme = t; });
}

/* ── Mulai ────────────────────────────────────────────────────── */
function boot() {
  /* Pilihan tema lama (sebelum ada modul kenyamanan) tetap dihormati. */
  if (!localStorage.getItem('fasih.comfort') && state().settings.theme) {
    setComfort({ tema: state().settings.theme });
  }
  ikutiSistemPertamaKali();
  terapkanComfort();
  pasangPanelCepat();
  pasangSpandukLuring();
  pasangAjakanInstal();
  pasangPenutupTip();
  daftarkanLuring();
  /* Penyelarasan awan hanya menyala kalau js/awan-config.js diisi. */
  pasangSinkronAwan();
  buildLangSwitch();

  /* Kalau penyimpanan penuh, katakan terus terang — jangan gagal diam-diam. */
  onGagalSimpan(() => toast(
    'Peramban menolak menyimpan kemajuan (ruang penuh atau mode penyamaran). ' +
    'Kemajuan sesi ini <b>tidak akan tersimpan</b>. Coba tutup tab lain atau keluar dari mode penyamaran.',
    'bad', 12000));

  /* ── Satu-satunya penangan tombol suara ────────────────────────
     Dulu tiap halaman memasang penangannya sendiri. Berpindah bahasa
     menumpuk penangan, satu klik memicu beberapa ucapan yang saling
     membatalkan, dan tombolnya terdengar rusak. Sekarang: satu
     penangan, bahasa diambil dari wadah terdekat. */
  document.addEventListener('click', async e => {
    const btn = e.target.closest('[data-say-lang], [data-say]');
    if (!btn || e.defaultPrevented) return;
    e.preventDefault();

    if (!ttsReady()) return toast('Peramban ini belum mendukung pembacaan suara.', 'bad');

    /* Klik kedua pada tombol yang sedang berbunyi = hentikan. */
    if (btn.classList.contains('is-on')) {
      stopSpeaking(); stopUcap();
      $$('.is-on[data-say-lang], .is-on[data-say]').forEach(x => x.classList.remove('is-on'));
      return;
    }
    $$('.is-on[data-say-lang], .is-on[data-say]').forEach(x => x.classList.remove('is-on'));
    btn.classList.add('is-on');

    const teksLang = btn.dataset.sayLang;
    if (teksLang !== undefined) {
      const kode = btn.dataset.sayCode ||
                   btn.closest('[data-lang-scope]')?.dataset.langScope ||
                   currentLang();
      const r = await ucapLang(kode, { text: teksLang, rom: btn.dataset.rom });
      btn.classList.remove('is-on');
      if (r.mode === 'none' && !boot._warnLang) {
        boot._warnLang = true;
        toast('Perangkat ini belum punya suara TTS sama sekali. Coba buka di Microsoft Edge, ' +
              'atau pasang suara lewat Settings → Time &amp; language → Speech.', 'bad', 9000);
      }
      return;
    }

    if (!englishVoices().length && !boot._warned) {
      boot._warned = true;
      toast('Tidak ada suara bahasa Inggris di perangkat ini. Buka di Microsoft Edge, atau pasang ' +
            'suara natural lewat Settings → Time &amp; language → Speech.', 'warn', 8000);
    }
    await say(btn.dataset.say);
    btn.classList.remove('is-on');
  });

  document.addEventListener('click', e => {
    const pemicu = e.target.closest('[data-act]');
    const act = pemicu?.dataset.act;
    if (!act) return;
    /* Aksi ini menjalankan sesuatu, bukan berpindah halaman. Beberapa di
       antaranya ditulis sebagai <a href="#"> di dalam pesan sembul; tanpa
       preventDefault peramban tetap mengubah hash, router ikut jalan, dan
       pemakai dilempar ke beranda. Untuk tautan "Unduh cadangan sekarang"
       yang muncul enam detik sesudah aplikasi terbuka, itu berarti berkas
       cadangannya terunduh TAPI pelajaran atau simulasi yang sedang
       dikerjakan ditinggalkan. */
    if (pemicu.tagName === 'A') e.preventDefault();
    if (act === 'toggle-theme') applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    if (act === 'open-nav') { $('#shell').classList.add('nav-open'); $('.sidebar__scrim').hidden = false; }
    if (act === 'close-nav') { $('#shell').classList.remove('nav-open'); $('.sidebar__scrim').hidden = true; }
    if (act === 'open-search') openPalette();
    if (act === 'goto-plan') location.hash = `#/${currentLang()}/${currentLang() === 'en' ? 'rencana' : 'trik'}`;
    if (act === 'goto-stats') location.hash = `#/${currentLang()}/kemajuan`;
    if (act === 'goto-review') location.hash = `#/${currentLang()}/kartu`;
    if (act === 'ekspor-sekarang') { exportData(); toast('Berkas cadangan diunduh.', 'ok'); }
  });

  /* Salin alamat halaman — dipakai spanduk yang menyarankan membuka di Edge. */
  document.addEventListener('click', async e => {
    if (!e.target.closest('[data-salin-url]')) return;
    try {
      await navigator.clipboard.writeText(location.href);
      toast('Alamat disalin. Buka Microsoft Edge, tempel di bilah alamat, lalu tekan Enter.', 'ok', 8000);
    } catch {
      toast('Salin sendiri alamat ini: <b>' + esc(location.href) + '</b>', '', 12000);
    }
  });

  $('#paletteInput').addEventListener('input', e => renderPalette(paletteSearch(e.target.value)));
  $('#palette').addEventListener('click', e => { if (e.target.id === 'palette') closePalette(); });

  document.addEventListener('keydown', e => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if (!$('#palette').hidden) {
      if (e.key === 'Escape') closePalette();
      if (e.key === 'ArrowDown') { e.preventDefault(); movePalette(1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); movePalette(-1); }
      if (e.key === 'Enter' && paletteItems[paletteSel]) go(paletteItems[paletteSel].href);
      return;
    }
    if (typing) return;
    if (e.key === '/' || (e.key === 'k' && (e.ctrlKey || e.metaKey))) { e.preventDefault(); openPalette(); }
    if (e.key === 'l' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); $('#langswBtn').click(); }
    if (e.key === '?' ) { e.preventDefault(); location.hash = `#/${currentLang()}/panduan`; }
    /* Alt+1…5 melompat ke lima menu teratas — jalan pintas tanpa tetikus. */
    if (e.altKey && /^[1-5]$/.test(e.key)) {
      const tautan = $$('#nav a')[+e.key - 1];
      if (tautan) { e.preventDefault(); location.hash = tautan.getAttribute('href'); }
    }
  });

  onChange(() => paintChromeFor(currentLang(), cachedLang(currentLang())));
  window.addEventListener('hashchange', route);
  loadVoices();
  suaraSiap();          /* daftar suara dimuat lebih awal supaya klik pertama tidak menunggu */
  route();

  const tampilkanShell = () => {
    /* Memberi tahu penjaga boot di index.html bahwa aplikasi sudah
       benar-benar terbuka, supaya ia membatalkan pesan gagalnya. */
    dispatchEvent(new Event('sankalingo:siap'));
    $('#boot')?.classList.add('is-out');
    $('#shell').hidden = false;
    setTimeout(() => $('#boot')?.remove(), 500);
  };
  setTimeout(tampilkanShell, comfort().gerak === 'kurangi' ? 0 : 380);

  /* Pengingat menyalin kemajuan — sekali sehari, dan hanya kalau sudah ada isinya. */
  setTimeout(() => {
    const c = perluCadangan();
    const kunci = 'fasih.ingatCadangan';
    if (!c || localStorage.getItem(kunci) === new Date().toDateString()) return;
    try { localStorage.setItem(kunci, new Date().toDateString()); } catch {}
    toast(`Kemajuanmu (${c.butir} butir) hanya ada di peramban ini dan ` +
      (c.pernah ? `belum disalin ${c.hari} hari.` : 'belum pernah disalin.') +
      ' <a href="#" data-act="ekspor-sekarang">Unduh cadangan sekarang</a> — sekali klik.',
      'warn', 14000);
  }, 6000);

  /* Kunjungan pertama: pandu tujuh layar, bukan sekadar pesan sekilas. */
  if (!sudahDipandu()) {
    setTimeout(() => mulaiPandu({
      onSelesai: hasil => {
        if (!hasil) return;
        location.hash = `#/${hasil.lang}`;
        setTimeout(() => toast(
          'Siap. Tekan <b>Kurikulum</b> di menu kiri untuk pelajaran pertama, ' +
          'atau buka <a href="#/' + hasil.lang + '/panduan">Panduan</a> kalau mau berkeliling dulu.',
          'ok', 9000), 700);
      }
    }), 500);
  }
}

boot();
