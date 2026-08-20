/* Platform multibahasa: beranda bahasa, halaman bahasa, dan
   pelatih menulis aksara dengan animasi urutan goresan. */

import { $, $$, el, html, raw, esc, toast, ring, sample, shuffle } from '../ui.js';
import { ico } from '../icons.js';
import { state, mutate, addXP, addMinutes, toggleCheck, isChecked } from '../state.js';
import { say, stopSpeaking } from '../speech.js';
import { runQuiz } from '../quiz.js';
import { buildBoard, animateStrokes, showAll, enableTracing } from '../stroke.js';
import { LANGS, langByCode, otherLangs } from '../../data/lang/registry.js';

/* Muat modul bahasa sesuai permintaan. */
const cache = new Map();
async function loadLang(code) {
  if (cache.has(code)) return cache.get(code);
  try {
    const mod = await import(`../../data/lang/${code}.js`);
    const data = mod[code.toUpperCase()] || Object.values(mod)[0];
    cache.set(code, data);
    return data;
  } catch { return null; }
}

/* ── Beranda semua bahasa ─────────────────────────────────────── */
export function renderHub() {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Multibahasa</span>
      <h1>Sembilan bahasa, satu metode</h1>
      <p>Metode yang sama dipakai untuk semua bahasa: kuasai aksaranya dulu sampai otomatis,
         lalu bunyi, lalu pola kalimat, baru kosakata dalam konteks. Untuk bahasa beraksara
         asing tersedia pelatih menulis dengan animasi urutan goresan.</p>
    </div>
  </div>

  <div class="lang-grid">
    ${LANGS.map(l => `
      <a class="lang-card ${l.ready ? '' : 'is-soon'}" href="#/${l.code}" style="--accent:${l.accent}">
        <div class="lang-card__top">
          <div class="lang-card__native">${esc(l.native)}</div>
          ${l.ready ? '' : '<span class="badge">segera</span>'}
        </div>
        <h2 class="sec-h">${esc(l.name)}</h2>
        <p class="small soft">${esc(l.blurb)}</p>
        <dl class="spec-list">
          <div><dt>Aksara</dt><dd>${esc(l.script)}</dd></div>
          ${l.letters ? `<div><dt>Jumlah huruf</dt><dd>${l.letters}</dd></div>` : ''}
          <div><dt>Ujian</dt><dd>${esc(l.exam)}</dd></div>
        </dl>
      </a>`).join('')}
  </div>

  <div class="card" style="margin-top:var(--s-6)">
    <div class="card__title">${raw(ico('route'))} Urutan yang terbukti untuk bahasa beraksara asing</div>
    <div class="grid grid--4" style="margin-top:var(--s-4)">
      ${[
        ['1. Aksara dulu','Jangan belajar kosakata lewat tulisan Latin. Menghafal "annyeonghaseyo" membuat otak menolak 안녕하세요 nanti.'],
        ['2. Bunyi yang tak ada di bahasa kita','Latih khusus bunyi yang tidak dikenal telinga Indonesia sebelum menumpuk kosakata.'],
        ['3. Pola kalimat','Kuasai 10 pola kalimat inti; kosakata tinggal ditukar-tukar di dalamnya.'],
        ['4. Kosakata dalam konteks','Selalu dalam frasa utuh, tidak pernah kata lepas.']
      ].map(([t, d]) => `<div class="card card--flat"><div class="b">${esc(t)}</div>
        <p class="small soft" style="margin-top:.3rem">${esc(d)}</p></div>`).join('')}
    </div>
  </div>`;
}

/* ── Halaman satu bahasa ──────────────────────────────────────── */
export async function renderLang(code) {
  const meta = langByCode(code);
  if (!meta) return $('#main').innerHTML = '<p>Bahasa tidak ditemukan.</p>';
  if (code === 'en') { location.hash = '#/'; return; }

  $('#main').innerHTML = `<div class="empty"><div class="empty__ico">${ico('globe', { size: 34 })}</div>
    <p class="small muted">Memuat modul ${esc(meta.name)}…</p></div>`;
  const L = await loadLang(code);

  if (!L) {
    $('#main').innerHTML = html`
    <div class="page-head">
      <div class="page-head__txt">
        <a class="small muted" href="#/lang">${ico('chevronL', { size: 14 })} Semua bahasa</a>
        <h1 style="margin-top:.4rem">${esc(meta.name)} · ${esc(meta.native)}</h1>
        <p>${esc(meta.blurb)}</p>
      </div>
    </div>
    <div class="card">
      <div class="card__title">${raw(ico('clock'))} Modul sedang disiapkan</div>
      <p class="soft" style="margin:.5rem 0 1rem">Kerangka bahasa ini sudah ada di sistem
        (aksara ${esc(meta.script)}, ujian ${esc(meta.exam)}). Materinya sedang ditulis dengan
        standar yang sama seperti modul Korea: aksara bergoresan animasi, trik mengingat,
        pelafalan, pola kalimat, dan spesifikasi ujian resmi.</p>
      <a class="btn btn--soft" href="#/ko">Lihat contoh modul yang sudah jadi →</a>
    </div>`;
    return;
  }

  const totalChars = (L.scripts || []).reduce((a, s) => a + s.chars.length, 0);
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/lang">${ico('chevronL', { size: 14 })} Semua bahasa</a>
      <h1 style="margin-top:.4rem">${esc(meta.name)} <span class="lang-native">${esc(L.native)}</span></h1>
      <p>${esc(L.intro.headline)}</p>
    </div>
    <a class="btn btn--primary" href="#/${code}/aksara/${L.scripts[0].id}">
      ${raw(ico('pen', { size: 16 }))} Mulai dari aksara</a>
  </div>

  <div class="tabs" id="lTabs" style="margin-bottom:var(--s-5)">
    <button class="is-active" data-t="intro">Pengantar</button>
    <button data-t="script">Aksara (${totalChars})</button>
    <button data-t="sound">Pelafalan</button>
    <button data-t="phrase">Frasa & Angka</button>
    <button data-t="grammar">Tata Bahasa</button>
    <button data-t="vocab">Kosakata</button>
    <button data-t="exam">${esc(L.exam.name)}</button>
  </div>
  <div id="lBody"></div>`;

  const body = $('#lBody');
  const paint = t => {
    stopSpeaking();
    if (t === 'intro') body.innerHTML = html`
      <div class="grid grid--2">
        <div class="card">
          <div class="card__title">${raw(ico('info'))} Kenapa aksara ini masuk akal</div>
          <p class="soft" style="margin-top:.6rem;white-space:pre-line">${esc(L.intro.body)}</p>
          <ul class="stack stack--sm" style="margin-top:var(--s-4)">
            ${L.intro.facts.map(f => `<li class="row" style="align-items:flex-start;gap:.6rem">
              <span style="color:var(--brand-text)">▸</span><span class="small">${esc(f)}</span></li>`).join('')}
          </ul>
        </div>
        <div class="card">
          <div class="card__title">${raw(ico('warn'))} Yang sulit bagi penutur Indonesia</div>
          <div class="stack stack--sm" style="margin-top:var(--s-4)">
            ${L.intro.hardForId.map(h => `<div class="note note--warn small">${esc(h)}</div>`).join('')}
          </div>
        </div>
      </div>`;

    if (t === 'script') body.innerHTML = html`
      ${L.scripts.map(s => `
        <div class="card" style="margin-bottom:var(--s-4)">
          <div class="row row--between">
            <div><div class="card__title">${esc(s.name)} <span class="muted">${esc(s.native || '')}</span></div>
              <div class="card__sub">${s.chars.length} huruf</div></div>
            <a class="btn btn--primary btn--sm" href="#/${code}/aksara/${s.id}">
              ${ico('pen', { size: 15 })} Latih menulis</a>
          </div>
          <p class="small soft" style="margin:.7rem 0">${esc(s.note)}</p>
          <div class="jamo-grid">
            ${s.chars.map(c => `<button class="jamo" data-c="${esc(c.c)}" title="${esc(c.trick)}">
              <span class="jamo__c">${esc(c.c)}</span>
              <span class="jamo__r">${esc(c.rom)}</span>
              <span class="jamo__n">${c.strokes.length}</span>
            </button>`).join('')}
          </div>
        </div>`).join('')}

      ${raw(L.compound ? `<div class="card">
        <div class="card__title">Huruf gabungan</div>
        <div class="grid grid--2" style="margin-top:var(--s-4)">
          <div><div class="sec-facts__k">Konsonan ditegangkan</div>
            <div class="stack stack--sm" style="margin-top:.5rem">
            ${L.compound.tense.map(([c, r, n]) => `<div class="pair-row"><b class="jamo__c">${esc(c)}</b>
              <span class="mono">${esc(r)}</span><span class="small soft">${esc(n)}</span></div>`).join('')}</div></div>
          <div><div class="sec-facts__k">Vokal gabungan</div>
            <div class="stack stack--sm" style="margin-top:.5rem">
            ${L.compound.vowels.map(([c, r, n]) => `<div class="pair-row"><b class="jamo__c">${esc(c)}</b>
              <span class="mono">${esc(r)}</span><span class="small soft">${esc(n)}</span></div>`).join('')}</div></div>
        </div></div>` : '')}

      ${raw(L.syllable ? `<div class="card" style="margin-top:var(--s-4)">
        <div class="card__title">${ico('layers')} Menyusun blok suku kata</div>
        <div class="stack stack--sm" style="margin-top:var(--s-4)">
          ${L.syllable.rules.map(([r, e2]) => `<div class="rule-row">
            <span class="small">${esc(r)}</span><b class="jamo__c">${esc(e2)}</b></div>`).join('')}
        </div>
        <div class="syl-demo">
          ${L.syllable.demo.map(d => `<div class="syl">
            <div class="syl__block">${esc(d.block)}</div>
            <div class="syl__parts">${d.parts.map(p => `<span>${esc(p)}</span>`).join('<i>+</i>')}</div>
            <div class="syl__rom">${esc(d.rom)}</div></div>`).join('')}
        </div>
        <div class="note note--warn" style="margin-top:var(--s-4);white-space:pre-line">${esc(L.syllable.batchim)}</div>
      </div>` : '')}`;

    if (t === 'sound') body.innerHTML = html`
      <div class="card">
        <div class="card__title">${raw(ico('speaker'))} Tiga tingkat konsonan</div>
        <p class="small soft" style="margin:.4rem 0 1rem">Bagi telinga Indonesia ketiganya terdengar mirip, padahal membedakan makna.</p>
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th>Huruf</th><th>Bunyi</th><th>Cara membedakan</th></tr></thead>
          <tbody>${L.phonology.triples.map(([c, r, n]) => `<tr>
            <td class="jamo__c" style="font-size:1.4rem">${esc(c)}</td><td class="mono">${esc(r)}</td>
            <td class="small">${esc(n)}</td></tr>`).join('')}</tbody></table></div>
      </div>
      <div class="card" style="margin-top:var(--s-4)">
        <div class="card__title">Bunyi bersambung & perubahan bunyi</div>
        <div class="stack stack--sm" style="margin-top:var(--s-4)">
          ${L.phonology.liaison.map(([w, r, n]) => `<div class="pair-row">
            <b class="jamo__c">${esc(w)}</b><span class="mono">${esc(r)}</span>
            <span class="small soft">${esc(n)}</span>
            <button class="speak-btn" data-say-lang="${esc(w)}">${ico('volume', { size: 14 })}</button></div>`).join('')}
        </div>
      </div>
      <div class="card" style="margin-top:var(--s-4)">
        <div class="card__title">Catatan penting</div>
        <ul class="stack stack--sm" style="margin-top:.6rem">
          ${L.phonology.notes.map(n => `<li class="small soft">• ${esc(n)}</li>`).join('')}
        </ul>
      </div>`;

    if (t === 'phrase') body.innerHTML = html`
      <div class="grid grid--2">
        ${L.phrases.map(g => `<div class="card">
          <div class="card__title">${esc(g.g)}</div>
          <div class="stack stack--sm" style="margin-top:.7rem">
            ${g.items.map(([t2, r, id2]) => `<div class="phrase">
              <div class="phrase__t">${esc(t2)}</div>
              <div class="phrase__r mono">${esc(r)}</div>
              <div class="phrase__id">${esc(id2)}</div>
              <button class="speak-btn" data-say-lang="${esc(t2)}">${ico('volume', { size: 14 })}</button>
            </div>`).join('')}
          </div></div>`).join('')}
      </div>
      ${raw(L.numbers ? `<div class="card" style="margin-top:var(--s-4)">
        <div class="card__title">${ico('list')} Dua sistem angka</div>
        <p class="small soft" style="margin:.4rem 0 1rem">${esc(L.numbers.note)}</p>
        <div class="grid grid--2">
          ${[L.numbers.sino, L.numbers.native].map(sys => `<div class="card card--flat">
            <b>${esc(sys.title)}</b>
            <p class="xs muted" style="margin:.2rem 0 .6rem">Dipakai untuk: ${esc(sys.use)}</p>
            <div class="num-grid">${sys.list.map(([c, r, v]) => `<div class="num-cell">
              <b>${esc(c)}</b><span class="mono">${esc(r)}</span><em>${esc(v)}</em></div>`).join('')}</div>
          </div>`).join('')}
        </div>
        <div class="note" style="margin-top:var(--s-4)">${esc(L.numbers.clock)}</div>
      </div>` : '')}`;

    if (t === 'grammar') body.innerHTML = L.grammar.map(g => `
      <div class="card" style="margin-bottom:var(--s-4)">
        <div class="row row--between">
          <div class="card__title">${esc(g.titleId)}</div>
          <span class="badge badge--lv lv-${g.level}">${g.level}</span>
        </div>
        <div class="card__sub">${esc(g.title)}</div>
        <div class="note" style="margin-top:.8rem"><strong>Mengapa penting</strong>${esc(g.why)}</div>
        <div class="formula" style="margin-top:.8rem">${esc(g.form)}</div>
        <ul class="stack stack--sm" style="margin-top:.8rem">
          ${g.notes.map(n => `<li class="small soft">• ${esc(n)}</li>`).join('')}
        </ul>
        <div class="ex-list" style="margin-top:.8rem">
          ${g.ex.map(([t2, id2]) => `<div class="ex"><span class="en">${esc(t2)}
            <button class="speak-btn" data-say-lang="${esc(t2)}" style="display:inline-grid;vertical-align:middle">${ico('volume', { size: 13 })}</button></span>
            <span class="id-txt">${esc(id2)}</span></div>`).join('')}
        </div>
        ${g.traps ? `<div class="ex-list" style="margin-top:.6rem">
          ${g.traps.map(([b, gd, w]) => `<div class="ex ex--bad"><span class="en">${esc(b)}</span>
            <span class="en" style="color:var(--ok);text-decoration:none">${esc(gd)}</span>
            <span class="id-txt">${esc(w)}</span></div>`).join('')}</div>` : ''}
        <button class="btn btn--primary btn--sm" style="margin-top:.9rem" data-drill="${esc(g.id)}">
          ${ico('play', { size: 14 })} Latihan</button>
        <div id="d-${esc(g.id)}"></div>
      </div>`).join('');

    if (t === 'vocab') body.innerHTML = L.vocab.map(p => `
      <div class="card">
        <div class="row row--between">
          <div><div class="card__title">${esc(p.title)}</div>
            <div class="card__sub">${p.words.length} kata</div></div>
          <button class="btn btn--primary btn--sm" data-vquiz="${esc(p.id)}">${ico('cards', { size: 14 })} Uji diri</button>
        </div>
        <div class="vocab-grid" style="margin-top:var(--s-4)">
          ${p.words.map(([t2, r, id2]) => `<div class="vocab-item">
            <div class="vocab-item__top">
              <span class="vocab-item__w jamo__c">${esc(t2)}</span>
              <button class="speak-btn" data-say-lang="${esc(t2)}">${ico('volume', { size: 14 })}</button>
            </div>
            <div class="mono small" style="color:var(--info)">${esc(r)}</div>
            <div class="vocab-item__id">${esc(id2)}</div>
          </div>`).join('')}
        </div>
        <div id="vq-${esc(p.id)}" style="margin-top:var(--s-4)"></div>
      </div>`).join('');

    if (t === 'exam') {
      const X = L.exam;
      body.innerHTML = html`
        <div class="spec-strip">
          ${Object.entries(X.overview).map(([k, v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}
        </div>
        <div class="card" style="margin-top:var(--s-4)">
          <div class="card__title">${raw(ico('award'))} Tingkat & ambang skor</div>
          <div class="band-table" style="margin-top:var(--s-4)">
            ${X.levels.map(([lv, sc, d]) => `<div class="band-row">
              <div class="band-row__b" style="font-size:var(--fs-md)">${esc(lv)}</div>
              <div><b>${esc(sc)}</b><p class="small soft">${esc(d)}</p></div></div>`).join('')}
          </div>
        </div>
        <div class="card" style="margin-top:var(--s-4)">
          <div class="card__title">Bagian ujian</div>
          <div class="sec-parts" style="margin-top:var(--s-4)">
            ${X.sections.map(s => `<div class="sec-part">
              <div class="sec-part__top"><b>${esc(s.name)}</b><span class="badge">${esc(s.items)}</span></div>
              <p class="small soft">${esc(s.note)}</p></div>`).join('')}
          </div>
        </div>
        <div style="margin-top:var(--s-4)">
          ${X.tactics.map((t2, i) => `<article class="tactic">
            <div class="tactic__n">${String(i + 1).padStart(2, '0')}</div>
            <div class="tactic__body">
              <div class="row row--between"><h3 class="sec-h4">${esc(t2.title)}</h3>
                ${t2.budget !== '—' ? `<span class="badge badge--brand">${esc(t2.budget)}</span>` : ''}</div>
              <ol class="tactic__steps">${t2.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
              <div class="tactic__why">${ico('bulb', { size: 15 })}<span>${esc(t2.why)}</span></div>
            </div></article>`).join('')}
        </div>
        <div class="card">
          <div class="card__title">${raw(ico('info'))} Sumber</div>
          <ul class="stack stack--sm" style="margin-top:.6rem">
            ${X.sources.map(([t2, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t2)}</a></li>`).join('')}
          </ul>
        </div>`;
    }

    /* interaksi bersama */
    body.dataset.langScope = code;   /* suara ditangani penangan global di app.js */
    body.addEventListener('click', ev => {
      const jm = ev.target.closest('[data-c]');
      if (jm) showGlyphModal(L, jm.dataset.c, code);
      const dr = ev.target.closest('[data-drill]');
      if (dr) {
        const g = L.grammar.find(x => x.id === dr.dataset.drill);
        dr.remove();
        runQuiz($('#d-' + g.id), g.drills.map(d => ({ ...d, tag: g.titleId, level: g.level })),
          { quizKey: 'lg:' + g.id, skill: 'grammar' });
      }
      const vq = ev.target.closest('[data-vquiz]');
      if (vq) {
        const p = L.vocab.find(x => x.id === vq.dataset.vquiz);
        const items = sample(p.words, Math.min(10, p.words.length)).map(([t2, r, id2]) => {
          const wrong = sample(p.words.filter(w => w[0] !== t2), 3).map(w => w[2]);
          const opts = shuffle([id2, ...wrong]);
          return { t:'mcq', q:`Apa arti ${t2} (${r})?`, opts, a: opts.indexOf(id2), tag:'Kosakata' };
        });
        runQuiz($('#vq-' + p.id), items, { quizKey: 'lv:' + p.id, skill: 'vocab' });
      }
    });
  };
  paint('intro');
  $$('#lTabs button').forEach(b => b.onclick = () => {
    $$('#lTabs button').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); paint(b.dataset.t);
  });
}

/* Suara dibaca lewat js/voice.js (berlapis: asli → romanisasi + suara
   Indonesia → romanisasi + suara Inggris), dipicu penangan global di
   js/app.js. Mesin suara kedua yang dulu ada di berkas ini menyerah
   begitu suara asli tidak ada — itu penyebab banyak tombol bisu. */

/* ── Modal satu huruf ─────────────────────────────────────────── */
function showGlyphModal(L, ch, code) {
  const s = L.scripts.find(sc => sc.chars.some(c => c.c === ch));
  const c = s?.chars.find(x => x.c === ch);
  if (!c) return;
  const root = $('#modalRoot');
  const wrap = el('div', { class: 'modal' });
  wrap.innerHTML = `<div class="modal__box glyph-modal">
    <div class="row row--between">
      <div><div class="card__title" style="font-size:var(--fs-2xl)">${esc(c.c)}</div>
        <div class="card__sub">${esc(c.name || '')} · ${esc(c.rom)} ${c.ipa ? `<span class="ipa">${esc(c.ipa)}</span>` : ''}</div></div>
      <button class="icon-btn" data-close>${ico('x')}</button>
    </div>
    <div class="glyph-modal__body">
      <div id="gBoard"></div>
      <div>
        <div class="note"><strong>Trik mengingat</strong>${esc(c.trick)}</div>
        ${c.pos ? `<div class="note note--warn" style="margin-top:.6rem"><strong>Catatan posisi</strong>${esc(c.pos)}</div>` : ''}
        <div class="row" style="margin-top:.9rem">
          <button class="btn btn--soft btn--sm" id="gPlay">${ico('play', { size: 14 })} Putar goresan</button>
          <button class="btn btn--ghost btn--sm" data-say-lang="${esc(c.c)}">${ico('volume', { size: 14 })} Bunyi</button>
        </div>
        <p class="xs muted" style="margin-top:.6rem">${c.strokes.length} goresan · nomor menunjukkan titik mulai</p>
      </div>
    </div>
    <a class="btn btn--primary btn--block" style="margin-top:1rem" href="#/${code}/aksara/${s.id}" data-close>
      Latih menulis seluruh ${esc(s.name)}</a>
  </div>`;
  root.append(wrap);
  const close = () => wrap.remove();
  wrap.dataset.langScope = code;
  wrap.addEventListener('click', e => {
    if (e.target === wrap || e.target.closest('[data-close]')) close();
  });
  const board = buildBoard($('#gBoard', wrap), c, { size: 190 });
  animateStrokes(board);
  $('#gPlay', wrap).onclick = () => animateStrokes(board);
}

/* ── Pelatih menulis aksara ───────────────────────────────────── */
export async function renderScript(code, scriptId) {
  const meta = langByCode(code);
  const L = await loadLang(code);
  if (!L) return $('#main').innerHTML = '<p>Modul belum tersedia.</p>';
  const S = L.scripts.find(s => s.id === scriptId) || L.scripts[0];

  let i = 0, board = null, tracer = null, mode = 'watch';

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="#/lang/${code}">${ico('chevronL', { size: 14 })} ${esc(meta.name)}</a>
      <h1 style="margin-top:.4rem">Menulis ${esc(S.name)}</h1>
      <p>${esc(S.note)}</p>
    </div>
    <div class="tabs" style="width:auto">
      <button class="is-active" data-mode="watch">Lihat</button>
      <button data-mode="trace">Tulis sendiri</button>
    </div>
  </div>

  <div class="writer">
    <aside class="writer__list">
      ${S.chars.map((c, k) => `<button class="writer__item ${k === 0 ? 'is-active' : ''}" data-i="${k}">
        <span class="jamo__c">${esc(c.c)}</span><span class="mono xs">${esc(c.rom)}</span></button>`).join('')}
    </aside>

    <div class="writer__stage">
      <div class="writer__head">
        <div>
          <div class="writer__c" id="wC"></div>
          <div class="writer__meta" id="wMeta"></div>
        </div>
        <div class="row">
          <button class="btn btn--soft btn--sm" id="wPlay">${raw(ico('play', { size: 14 }))} Putar</button>
          <button class="btn btn--ghost btn--sm" id="wShow">Tampilkan penuh</button>
          <button class="btn btn--ghost btn--sm" id="wReset">Ulang</button>
        </div>
      </div>
      <div class="writer__board" id="wBoard"></div>
      <div class="writer__foot">
        <div class="bar" style="flex:1"><i id="wBar" style="width:0%"></i></div>
        <span class="small muted" id="wProg"></span>
      </div>
      <div id="wMsg" class="writer__msg"></div>
      <div class="note" id="wTrick" style="margin-top:var(--s-3)"></div>
      <div class="row" style="margin-top:var(--s-4);justify-content:space-between">
        <button class="btn btn--soft" id="wPrev">${raw(ico('chevronL', { size: 15 }))} Sebelumnya</button>
        <button class="btn btn--primary" id="wNext">Berikutnya ${raw(ico('chevronR', { size: 15 }))}</button>
      </div>
    </div>
  </div>`;

  const draw = () => {
    const c = S.chars[i];
    $('#wC').textContent = c.c;
    $('#wMeta').innerHTML = `${esc(c.name || '')} · <span class="mono">${esc(c.rom)}</span>` +
      (c.ipa ? ` <span class="ipa">${esc(c.ipa)}</span>` : '') +
      ` · ${c.strokes.length} goresan`;
    $('#wTrick').innerHTML = `<strong>Trik mengingat</strong>${esc(c.trick)}`;
    $('#wMsg').textContent = '';
    $$('.writer__item').forEach((b, k) => b.classList.toggle('is-active', k === i));
    $$('.writer__item')[i]?.scrollIntoView({ block: 'nearest' });

    tracer?.destroy();
    board = buildBoard($('#wBoard'), c, { size: 300 });
    if (mode === 'watch') {
      $('#wProg').textContent = `${i + 1} / ${S.chars.length}`;
      $('#wBar').style.width = `${((i + 1) / S.chars.length) * 100}%`;
      animateStrokes(board);
    } else {
      $('#wProg').textContent = `0 / ${c.strokes.length} goresan`;
      $('#wBar').style.width = '0%';
      tracer = enableTracing(board, c, {
        onProgress: (done, total, res) => {
          $('#wProg').textContent = `${done} / ${total} goresan`;
          $('#wBar').style.width = `${(done / total) * 100}%`;
          if (res) {
            $('#wMsg').className = 'writer__msg ' + (res.ok ? 'is-ok' : 'is-bad');
            $('#wMsg').textContent = res.reason;
          }
        },
        onDone: r => {
          $('#wMsg').className = 'writer__msg is-ok';
          $('#wMsg').textContent = `Selesai — skor kerapian ${r.score}. ${r.tries > S.chars[i].strokes.length ? 'Beberapa goresan diulang.' : 'Tanpa kesalahan urutan.'}`;
          addXP(12, 'writing'); addMinutes(1);
          toast(`${c.c} dikuasai · +12 XP`, 'ok');
        }
      });
    }
  };

  $('#wPlay').onclick = () => animateStrokes(board);
  $('#wShow').onclick = () => showAll(board);
  $('#wReset').onclick = () => (mode === 'trace' ? tracer?.reset() : draw());
  $('#wPrev').onclick = () => { i = (i - 1 + S.chars.length) % S.chars.length; draw(); };
  $('#wNext').onclick = () => { i = (i + 1) % S.chars.length; draw(); };
  $$('.writer__item').forEach(b => b.onclick = () => { i = +b.dataset.i; draw(); });
  $$('[data-mode]').forEach(b => b.onclick = () => {
    $$('[data-mode]').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); mode = b.dataset.mode; draw();
  });

  draw();
}
