/* Halaman-halaman untuk bahasa selain Inggris.

   Seluruh suara di berkas ini lewat js/voice.js yang punya cadangan
   berlapis, jadi tombol suara tetap berguna walau suara asli bahasa
   targetnya belum terpasang di perangkat. */

import { $, $$, el, html, raw, esc, toast, sample, shuffle } from '../ui.js';
import { ico } from '../icons.js';
import { state, mutate, addXP, addMinutes, lastVisit } from '../state.js';
import { nextLesson, coursePct, unitsOf } from '../course.js';
import { tipBantuan } from '../comfortui.js';
import { runQuiz } from '../quiz.js';
import { flashSession } from './vocab.js';
import { buildBoard, animateStrokes, showAll, enableTracing } from '../stroke.js';
import { dueIds, card as srsCard, stats as srsStats } from '../srs.js';
import { lexOf, phraseLexOf, kanjiLexOf, langMeta } from '../langctx.js';
import { perluAlih } from '../translit.js';
import { ready, resolve, ucap, ucapDaftar, stopDaftar, stop as stopVoice,
         bersihkanRom, PANDUAN_PASANG, namaBahasa, saranEdge } from '../voice.js';

/* ── Suara ────────────────────────────────────────────────────── */

/** Tombol suara standar. Menyimpan teks asli DAN romanisasinya. */
const spk = (text, rom, size = 14) =>
  `<button class="speak-btn" data-say-lang="${esc(text)}" data-rom="${esc(rom || '')}"
     aria-label="Dengarkan">${ico('volume', { size })}</button>`;

/** Tandai bahasa wadah ini. Penangan kliknya SATU dan global (js/app.js).
    Dulu tiap halaman memasang penangannya sendiri; berpindah bahasa
    menumpuk penangan sehingga satu klik memanggil ucap() berkali-kali
    dan tiap panggilan membatalkan yang sebelumnya — tombolnya jadi bisu. */
function bindSay(root, code) { root.dataset.langScope = code; }

/** Spanduk status suara — dipasang di setiap halaman yang berbunyi. */
async function voiceBanner(code) {
  await ready();
  const r = resolve(code);
  if (r.mode === 'native') {
    return `<div class="vbanner is-ok">
      ${ico('volume', { size: 16 })}
      <div><b>${esc(r.label)}</b><span>${esc(r.note)}</span></div>
    </div>`;
  }
  const g = PANDUAN_PASANG(code);
  const edge = saranEdge(code);
  return `<div class="vbanner ${r.mode === 'none' ? 'is-bad' : 'is-warn'}">
    ${ico('warn', { size: 16 })}
    <div>
      <b>${esc(r.label)}</b>
      <span>${esc(r.note)}</span>
      ${edge.layak ? `
        <div class="vbanner__aksi">
          <p class="small"><b>Cara tercepat memperbaikinya:</b> ${esc(edge.ajakan)}</p>
          <div class="row" style="margin-top:.5rem">
            <button class="btn btn--primary btn--sm" data-salin-url>
              ${ico('download', { size: 14 })} Salin alamat halaman ini</button>
            <span class="xs muted">lalu tempel di Microsoft Edge</span>
          </div>
        </div>` : ''}
      <details><summary>${esc(g.judul)}</summary>
        <ol>${g.langkah.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
        <p class="xs muted">${esc(g.catatan)}</p>
      </details>
    </div>
  </div>`;
}

/** Sisipkan spanduk ke elemen bertanda id tertentu setelah halaman tergambar. */
async function pasangBanner(code, id = 'vb') {
  const host = $('#' + id);
  if (host) host.innerHTML = await voiceBanner(code);
}

const P = (code, sec) => `#/${code}${sec ? '/' + sec : ''}`;
const labelOf = code => ({ ko:'Hangul', ja:'Kana', zh:'Hanzi', ar:'Huruf Hijaiyah',
  ru:'Abjad Kiril', de:'Huruf Khusus', fr:'Huruf Beraksen', es:'Huruf Khusus' }[code] || 'Aksara');

/* ── Beranda bahasa ───────────────────────────────────────────── */
/* ── "Lanjutkan" ──────────────────────────────────────────────────
   Satu tombol yang selalu tahu langkah berikutnya, supaya membuka
   aplikasi tidak pernah berarti harus memutuskan sesuatu dulu.        */
function blokLanjut(code, L) {
  const nx = L.levels?.length ? nextLesson(code, L) : null;
  const pct = L.levels?.length ? coursePct(code, L) : 0;
  const jejak = lastVisit(code);
  const totalPel = L.levels?.length ? unitsOf(L).reduce((a, u) => a + u.lessons.length, 0) : 0;
  if (!nx && !jejak) return '';

  const utama = nx
    ? { href: `#/${code}/pelajaran/${nx.unit.id}/${nx.lesson.id}`,
        judul: nx.lesson.title,
        ket: `${nx.unit.titleId || nx.unit.title} · ${nx.unit.levelName || nx.unit.level || ''}` }
    : { href: jejak.hash, judul: jejak.label || 'Halaman terakhir', ket: 'Tempat kamu berhenti' };

  return `<div class="resume">
    <div class="resume__txt">
      <div class="xs">${nx ? 'Pelajaran berikutnya' : 'Kamu berhenti di sini'}</div>
      <b>${esc(utama.judul)}</b>
      <div class="xs">${esc(utama.ket)}</div>
    </div>
    ${totalPel ? `<div class="resume__txt" style="flex:0 0 auto;text-align:right" data-gamif>
      <div class="xs">Kurikulum</div><b>${pct}%</b>
      <div class="xs">${totalPel} pelajaran</div></div>` : ''}
    <a class="btn btn--primary btn--lg" href="${utama.href}">${ico('play', { size: 17 })} Lanjutkan</a>
    ${nx && jejak && jejak.hash !== utama.href
      ? `<a class="btn btn--soft" href="${jejak.hash}">Kembali ke halaman terakhir</a>` : ''}
  </div>`;
}

export function home(code, L) {
  const meta = langMeta(code);
  const lex = [...lexOf(code, L), ...phraseLexOf(code, L), ...kanjiLexOf(code, L)];
  const learned = lex.filter(x => srsCard(x.id)).length;
  const glyphs = (L.scripts || []).reduce((a, s) => a + s.chars.length, 0);
  const glyphDone = (L.scripts || []).flatMap(s => s.chars)
    .filter(c => state().checklist[`glyph:${code}:${c.c}`]).length;

  $('#main').innerHTML = html`
  ${raw(tipBantuan('home-' + code,
    'Bingung mulai dari mana? Tekan <b>Lanjutkan</b> di bawah — aplikasi memilihkan pelajaran ' +
    'berikutnya untukmu. Kalau mau tahu isi tiap menu dulu, buka <a href="#/' + code + '/panduan">Panduan</a>.'))}
  ${raw(blokLanjut(code, L))}
  <section class="hero" style="--accent:${meta.accent}">
    <span class="eyebrow">${esc(meta.native)} · ${esc(meta.exam)}</span>
    <h1>${esc(L.intro.headline)}</h1>
    <p>${esc(L.intro.body.split('\n\n')[0])}</p>
    <div class="hero__actions">
      ${raw(L.scripts?.length ? `<a class="btn btn--primary btn--lg" href="${P(code, 'aksara')}">
        ${ico('pen')} Mulai dari aksara</a>` : '')}
      <a class="btn btn--soft btn--lg" href="${P(code, 'frasa')}">${raw(ico('quote'))} 21 frasa inti</a>
      <a class="btn btn--ghost btn--lg" href="${P(code, 'ujian')}">${raw(ico('target'))} ${esc(L.exam.name)}</a>
    </div>
    <div class="hero__meta">
      <div><b>${glyphs}</b><span>huruf bergoresan</span></div>
      <div><b>${glyphDone}</b><span>sudah dilatih</span></div>
      <div><b>${lex.length}</b><span>kartu tersedia</span></div>
      <div><b>${learned}</b><span>kartu dipelajari</span></div>
    </div>
  </section>

  <div id="vb" style="margin-top:var(--s-5)"></div>

  <div class="grid grid--2" style="margin-top:var(--s-5)">
    <div class="card">
      <div class="card__title">${raw(ico('info'))} Kenapa bahasa ini masuk akal</div>
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
  </div>

  <h2 class="sec-h" style="margin:var(--s-8) 0 var(--s-3)">Jalur belajar ${esc(meta.name)}</h2>
  <div class="grid grid--4">
    ${[
      L.scripts?.length ? ['aksara', 'pen', labelOf(code), `${glyphs} huruf, animasi goresan`] : null,
      code === 'ja' ? ['kanji', 'grammar', 'Kanji', '105 kanji N5 per tema'] : null,
      ['frasa', 'quote', 'Frasa & Angka', '21 frasa siap pakai'],
      ['pelafalan', 'speaker', 'Pelafalan', 'Bunyi yang menjebak'],
      ['grammar', 'grammar', 'Tata Bahasa', `${L.grammar.length} topik berlatihan`],
      ['kosakata', 'cards', 'Kosakata', `${L.vocab[0].words.length} kata inti`],
      ['kartu', 'repeat', 'Kartu Hafalan', 'Pengulangan berjarak'],
      ['menyimak', 'headphones', 'Menyimak', 'Dikte frasa'],
      ['berbicara', 'mic', 'Berbicara', 'Shadowing berurutan'],
      ['ujian', 'target', L.exam.name, 'Format & taktik']
    ].filter(Boolean).map(([to, i, t, d]) => `
      <a class="card card--link card--flat" href="${P(code, to)}">
        <div style="color:var(--brand-text)">${ico(i, { size: 22 })}</div>
        <div class="b" style="margin-top:.4rem">${esc(t)}</div>
        <div class="xs muted">${esc(d)}</div>
      </a>`).join('')}
  </div>`;
  bindSay($('#main'), code);
  pasangBanner(code);
}

/* ── Aksara: daftar ───────────────────────────────────────────── */
export function scriptIndex(code, L) {
  const meta = langMeta(code);
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(meta.native)}</span>
      <h1>${esc(labelOf(code))}</h1>
      <p>Setiap huruf punya animasi urutan goresan, titik mulai bernomor, trik mengingat,
         dan mode latihan menulis yang menilai arah serta jalur goresanmu.</p>
    </div>
  </div>

  ${L.scripts.map(s => `
    <div class="card" style="margin-bottom:var(--s-4)">
      <div class="row row--between">
        <div><div class="card__title">${esc(s.name)} <span class="muted">${esc(s.native || '')}</span></div>
          <div class="card__sub">${s.chars.length} huruf</div></div>
        <a class="btn btn--primary btn--sm" href="${P(code, 'aksara/' + s.id)}">
          ${ico('pen', { size: 15 })} Latih menulis</a>
      </div>
      <p class="small soft" style="margin:.7rem 0">${esc(s.note)}</p>
      <div class="jamo-grid">
        ${s.chars.map(c => `<a class="jamo" href="${P(code, 'aksara/' + s.id)}?c=${encodeURIComponent(c.c)}"
          title="${esc(c.trick)}">
          <span class="jamo__c">${esc(c.c)}</span>
          <span class="jamo__r">${esc(c.rom)}</span>
          <span class="jamo__n">${c.strokes.length}</span>
        </a>`).join('')}
      </div>
    </div>`).join('')}

  ${raw(L.mirip ? `<div class="card" style="margin-bottom:var(--s-4)">
    <div class="card__title">${ico('warn')} Huruf yang gampang tertukar</div>
    <p class="small soft" style="margin:.4rem 0 1rem">Pasangan berikut adalah sumber kesalahan
       terbesar pemula. Bedanya selalu pada ARAH goresan atau LETAK titik — perhatikan animasinya.</p>
    <div class="stack stack--sm">
      ${L.mirip.map(([pair, note]) => `<div class="pair-row">
        <b class="jamo__c" style="min-width:5ch">${esc(pair.split(' ')[0])}</b>
        <span class="small soft">${esc(note)}</span></div>`).join('')}
    </div></div>` : '')}

  ${raw(L.compound ? `<div class="card">
    <div class="card__title">Bentuk & tanda tambahan</div>
    <div class="grid grid--2" style="margin-top:var(--s-4)">
      <div><div class="sec-facts__k">Perubahan bunyi</div>
        <div class="stack stack--sm" style="margin-top:.5rem">
        ${L.compound.tense.map(([c, r, n]) => `<div class="pair-row"><b class="jamo__c">${esc(c)}</b>
          <span class="mono">${esc(r)}</span><span class="small soft">${esc(n)}</span></div>`).join('')}</div></div>
      <div><div class="sec-facts__k">Gabungan</div>
        <div class="stack stack--sm" style="margin-top:.5rem">
        ${L.compound.vowels.map(([c, r, n]) => `<div class="pair-row"><b class="jamo__c">${esc(c)}</b>
          <span class="mono">${esc(r)}</span><span class="small soft">${esc(n)}</span></div>`).join('')}</div></div>
    </div></div>` : '')}

  ${raw(L.syllable ? `<div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${ico('layers')} Aturan menyusun</div>
    <div class="stack stack--sm" style="margin-top:var(--s-4)">
      ${L.syllable.rules.map(([r, e2]) => `<div class="rule-row">
        <span class="small">${esc(r)}</span><b class="jamo__c">${esc(e2)}</b></div>`).join('')}
    </div>
    <div class="syl-demo">
      ${L.syllable.demo.map(d => `<div class="syl">
        <div class="syl__block">${esc(d.block)}</div>
        <div class="syl__parts">${d.parts.map(p => `<span>${esc(p)}</span>`).join('<i>+</i>')}</div>
        <div class="syl__rom">${esc(d.rom)}</div>
        <div class="xs muted">${esc(d.layout)}</div>
        ${spk(d.block, d.rom, 13)}</div>`).join('')}
    </div>
    <div class="note note--warn" style="margin-top:var(--s-4);white-space:pre-line">${esc(L.syllable.batchim)}</div>
  </div>` : '')}`;
  bindSay($('#main'), code);
}

/* ── Aksara: pelatih menulis ──────────────────────────────────── */
export function scriptTrainer(code, L, scriptId) {
  $('#main').innerHTML = '<div id="stHost"></div>';
  scriptTrainerInto($('#stHost'), code, L, scriptId, 'watch', true);
}

/** Pelatih menulis yang bisa ditanam di wadah mana pun. */
export function scriptTrainerInto(host, code, L, scriptId, modeAwal = 'watch', kepala = false) {
  const S = L.scripts.find(s => s.id === scriptId) || L.scripts[0];
  const want = new URLSearchParams(location.hash.split('?')[1] || '').get('c');
  let i = Math.max(0, S.chars.findIndex(c => c.c === want));
  let board = null, tracer = null, mode = modeAwal;

  host.innerHTML = html`
  ${kepala ? `<div class="page-head">
    <div class="page-head__txt">
      <a class="small muted" href="${P(code, 'aksara')}">${ico('chevronL', { size: 14 })} ${esc(labelOf(code))}</a>
      <h1 style="margin-top:.4rem">Menulis ${esc(S.name)}</h1>
      <p>${esc(S.note)}</p>
    </div>` : `<div class="page-head"><div class="page-head__txt">
      <h2>${esc(S.name)}</h2><p class="small soft">${esc(S.note)}</p></div>`}
    <div style="display:none"></div>
    <div class="tabs" style="width:auto">
      <button class="${modeAwal === 'watch' ? 'is-active' : ''}" data-mode="watch">Lihat</button>
      <button class="${modeAwal === 'trace' ? 'is-active' : ''}" data-mode="trace">Tulis sendiri</button>
    </div>
  </div>

  <div class="writer">
    <aside class="writer__list">
      ${S.chars.map((c, k) => `<button class="writer__item ${k === i ? 'is-active' : ''}" data-i="${k}">
        <span class="jamo__c">${esc(c.c)}</span><span class="mono xs">${esc(c.rom)}</span></button>`).join('')}
    </aside>

    <div class="writer__stage">
      <div class="writer__head">
        <div>
          <div class="writer__c" id="wC"></div>
          <div class="writer__meta" id="wMeta"></div>
        </div>
        <div class="row">
          <button class="btn btn--soft btn--sm" id="wPlay">${raw(ico('play', { size: 14 }))} Putar goresan</button>
          <button class="btn btn--ghost btn--sm" id="wSay">${raw(ico('volume', { size: 14 }))} Bunyi huruf</button>
          <button class="btn btn--ghost btn--sm" id="wShow">Tampilkan penuh</button>
        </div>
      </div>
      <div class="writer__board" id="wBoard"></div>
      <div class="writer__foot">
        <div class="bar" style="flex:1"><i id="wBar" style="width:0%"></i></div>
        <span class="small muted" id="wProg"></span>
      </div>
      <div id="wSayInfo" class="writer__say"></div>
      <div id="wMsg" class="writer__msg"></div>
      <div class="note" id="wTrick" style="margin-top:var(--s-3)"></div>
      <div id="wForms"></div>
      <div class="row" style="margin-top:var(--s-4);justify-content:space-between">
        <button class="btn btn--soft" id="wPrev">${raw(ico('chevronL', { size: 15 }))} Sebelumnya</button>
        <button class="btn btn--primary" id="wNext">Berikutnya ${raw(ico('chevronR', { size: 15 }))}</button>
      </div>
    </div>
  </div>`;

  const draw = () => {
    const c = S.chars[i];
    $('#wC', host).textContent = c.c;
    $('#wMeta', host).innerHTML = `${esc(c.name || '')} · <span class="mono">${esc(c.rom)}</span>` +
      (c.ipa ? ` <span class="ipa">${esc(c.ipa)}</span>` : '') + ` · ${c.strokes.length} goresan`;
    $('#wTrick', host).innerHTML = `<strong>Trik mengingat</strong>${esc(c.trick)}`;
    $('#wForms', host).innerHTML = c.forms ? `<div class="forms-row">
      ${['Terpisah', 'Awal', 'Tengah', 'Akhir'].map((lbl, k) =>
        `<div class="form-cell"><b>${esc(c.forms[k])}</b><span>${lbl}</span></div>`).join('')}
      </div>` : '';
    $('#wMsg', host).textContent = '';
    $$('.writer__item', host).forEach((b, k) => b.classList.toggle('is-active', k === i));
    $$('.writer__item', host)[i]?.scrollIntoView({ block: 'nearest' });

    tracer?.destroy();
    board = buildBoard($('#wBoard', host), c, { size: 300 });
    if (mode === 'watch') {
      $('#wProg', host).textContent = `${i + 1} / ${S.chars.length}`;
      $('#wBar', host).style.width = `${((i + 1) / S.chars.length) * 100}%`;
      animateStrokes(board);
    } else {
      $('#wProg', host).textContent = `0 / ${c.strokes.length} goresan`;
      $('#wBar', host).style.width = '0%';
      tracer = enableTracing(board, c, {
        onProgress: (done, total, res) => {
          $('#wProg', host).textContent = `${done} / ${total} goresan`;
          $('#wBar', host).style.width = `${(done / total) * 100}%`;
          if (res) {
            $('#wMsg', host).className = 'writer__msg ' + (res.ok ? 'is-ok' : 'is-bad');
            $('#wMsg', host).textContent = res.reason;
          }
        },
        onDone: r => {
          $('#wMsg', host).className = 'writer__msg is-ok';
          $('#wMsg', host).textContent = `Selesai — skor kerapian ${r.score}.`;
          mutate(s => { s.checklist[`glyph:${code}:${c.c}`] = Date.now(); });
          addXP(12, 'writing'); addMinutes(1);
          toast(`${c.c} dikuasai · +12 XP`, 'ok');
        }
      });
    }
  };

  /* Huruf tunggal sering tidak terbaca mesin suara. Karena itu yang
     diucapkan adalah nama hurufnya, lalu sebuah CONTOH KATA.

     Pemilihan contohnya dulu asal ambil apa pun yang memuat huruf itu
     di posisi mana pun — termasuk frasa panjang. Hasilnya janggal:
     untuk huruf ج terpilih frasa "لَذِيذ جِدًّا" hanya karena جِدًّا
     memuat ج, sehingga tombolnya membacakan "jim. ladzidz jiddan" —
     "jim. enak sekali". Pemelajar tidak belajar apa pun dari itu.

     Sekarang urutannya jelas, dari yang paling mengajarkan:

       1. suku kata contoh yang memang disiapkan untuk huruf itu
       2. KATA TUNGGAL yang DIAWALI huruf itu  ← paling berguna,
          karena bunyinya terdengar di awal, tempat paling jelas
       3. frasa yang diawali huruf itu
       4. kata tunggal yang sekadar memuatnya
       5. frasa yang sekadar memuatnya

     Dalam tiap tingkat dipilih yang TERPENDEK, supaya hurufnya tidak
     tenggelam di tengah kalimat panjang. */

  /* Untuk menilai "diawali", tanda baca dan penanda bunyi dibuang
     dulu — kata Arab hampir selalu berharakat, dan banyak yang
     diawali kata sandang ال yang bukan bagian katanya. */
  const pangkalKata = s => String(s || '')
    .replace(/[ً-ْٰـ]/g, '')   /* harakat & tatwil Arab */
    .replace(/^(ال|اَل)/, '')                          /* kata sandang Arab     */
    .replace(/^[«"'¿¡\s]+/, '')
    .trim();

  /* ── Menyamakan huruf dengan isi kata ──────────────────────────
     Dua bahasa perlu perlakuan khusus, dan tanpanya pelatih aksaranya
     TIDAK PERNAH menemukan contoh sama sekali:

     KOREA. Huruf di daftar aksara adalah jamo tunggal (ㄱ, U+3131),
     sedangkan kata Korea ditulis sebagai SUKU TERSUSUN — 사람, bukan
     ㅅ+ㅏ+ㄹ+ㅏ+ㅁ. Jadi "사람".includes("ㄱ") selamanya salah, dan
     KESELURUHAN 24 huruf Korea tidak pernah punya contoh kata.
     Suku Hangul karena itu diurai dulu jadi jamo penyusunnya.

     RUSIA (dan abjad Latin). Huruf di daftar ditulis KAPITAL (Б),
     kosakatanya huruf kecil (большой). startsWith("Б") tidak pernah
     cocok, sehingga 13 huruf hanya menemukan frasa yang kebetulan
     diawali kapital. Karena itu perbandingannya tidak peduli besar
     kecilnya huruf.                                                  */

  /* Suku Hangul dihitung: kode = 0xAC00 + (awal*21 + tengah)*28 + akhir */
  const CHO = [...'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'];
  const JUNG = [...'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'];
  const JONG = ['', ...'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'];

  const uraiHangul = teks => [...String(teks)].map(ch => {
    const k = ch.codePointAt(0) - 0xAC00;
    if (k < 0 || k > 11171) return ch;
    return CHO[Math.floor(k / 588)] + JUNG[Math.floor((k % 588) / 28)] + JONG[k % 28];
  }).join('');

  /* Bentuk yang dipakai untuk membandingkan: Korea diurai jadi jamo,
     sisanya cukup disamakan besar-kecil hurufnya. */
  const banding = teks => code === 'ko'
    ? uraiHangul(teks)
    : String(teks).toLowerCase();
  const hurufBanding = h => code === 'ko' ? h : String(h).toLowerCase();

  const contohUntuk = c => {
    /* Contoh pilihan tangan didahulukan. Ia hanya ada untuk aksara yang
       memang tidak tertutup kosakata bahasanya — 25 aksara Jepang,
       hampir semuanya katakana, tidak pernah menemukan contoh apa pun
       lewat pencarian di bawah karena kosakata inti aplikasi ini
       ditulis hiragana dan kanji. */
    const tangan = L.contohAksara?.[c.c];
    if (tangan) return { teks: tangan[0], rom: tangan[1], arti: tangan[2] };

    /* Suku kata contoh IKUT diperingkat, tidak lagi dipakai begitu saja.

       Sebelumnya daftar ini dicari dengan .find() — kemunculan pertama
       yang memuat hurufnya langsung menang. Untuk ب itu memberi كِتَاب
       (indeks 0) padahal بَيْت ada di daftar yang sama di indeks 5 dan
       justru DIAWALI ب. Empat huruf sekaligus (ا ب ت ك) sama-sama
       mendapat "kitāb" karena itu. */
    const demo = (L.syllable?.demo || [])
      .map(d => ({ teks: d.block, rom: d.rom, arti: d.layout }));
    const kata = (L.vocab || []).flatMap(p => p.words || [])
      .map(w => ({ teks: w[0], rom: w[1], arti: w[2] }));
    const frasa = (L.phrases || []).flatMap(g => g.items || [])
      .map(f => ({ teks: f[0], rom: f[1], arti: f[2] }));

    const h = hurufBanding(c.c);
    const diawali = k => banding(pangkalKata(k.teks)).startsWith(h);
    const memuat  = k => banding(k.teks).includes(h);
    const terpendek = arr => arr.length
      ? arr.reduce((a, b) => (String(a.teks).length <= String(b.teks).length ? a : b))
      : null;

    for (const kelompok of [
      demo.filter(diawali),  kata.filter(diawali),  frasa.filter(diawali),
      demo.filter(memuat),   kata.filter(memuat),   frasa.filter(memuat),
    ]) {
      const pilih = terpendek(kelompok);
      if (pilih && pilih.teks && pilih.rom) return pilih;
    }
    return null;
  };

  const bunyiHuruf = async () => {
    const c = S.chars[i];
    const ct = contohUntuk(c);
    const nama = c.name || c.rom;
    const teksAsli = ct ? `${c.c}. ${ct.teks}` : c.c;
    const teksRom = ct ? `${bersihkanRom(nama)}. ${bersihkanRom(ct.rom)}`
                       : bersihkanRom(nama);
    const btn = $('#wSay', host);
    btn.disabled = true; btn.classList.add('is-on');
    const r = await ucap(code, { text: teksAsli, rom: teksRom, rate: 0.85 });
    btn.disabled = false; btn.classList.remove('is-on');

    const kotak = $('#wSayInfo', host);
    if (r.mode === 'none') {
      kotak.className = 'writer__say is-bad';
      kotak.innerHTML = `${ico('warn', { size: 14 })} Perangkat ini belum punya suara apa pun.
        <a href="${P(code, 'pengaturan')}">Buka Pengaturan</a>`;
      return;
    }
    /* Nama huruf dan contoh katanya dipisah.

       Dulu keduanya dirangkai jadi satu kalimat — "jim. ladzidz
       jiddan — Enak sekali" — yang terbaca seperti omong kosong.
       Pemelajar tidak bisa tahu mana nama hurufnya, mana contohnya,
       dan kenapa artinya "enak sekali". */
    const asliHuruf = r.mode === 'native' ? c.c : bersihkanRom(nama);
    const asliContoh = ct ? (r.mode === 'native' ? ct.teks : bersihkanRom(ct.rom)) : '';
    kotak.className = 'writer__say ' + (r.mode === 'native' ? 'is-ok' : 'is-warn');
    kotak.innerHTML = `${ico('volume', { size: 14 })}
      <span>Dibunyikan <b>${esc(asliHuruf)}</b>${ct
        ? `, lalu contohnya <b>${esc(asliContoh)}</b>
           <span class="soft">(${esc(ct.rom)}) &ldquo;${esc(ct.arti)}&rdquo;</span>`
        : ''}</span>
      <em>${esc(r.voice ? r.voice.name : '')}${r.mode === 'native' ? '' : ' · romanisasi'}</em>`;
  };

  $('#wPlay', host).onclick = () => animateStrokes(board);
  $('#wShow', host).onclick = () => showAll(board);
  $('#wSay', host).onclick = bunyiHuruf;
  $('#wPrev', host).onclick = () => { i = (i - 1 + S.chars.length) % S.chars.length; draw(); };
  $('#wNext', host).onclick = () => { i = (i + 1) % S.chars.length; draw(); };
  $$('.writer__item', host).forEach(b => b.onclick = () => { i = +b.dataset.i; draw(); });
  $$('[data-mode]', host).forEach(b => b.onclick = () => {
    $$('[data-mode]', host).forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active'); mode = b.dataset.mode; draw();
  });
  draw();
}

/* ── Frasa & angka ────────────────────────────────────────────── */
export function phrases(code, L) {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Frasa & Angka</h1>
      <p>Frasa utuh jauh lebih berguna daripada kata lepas. Semua bisa didengar dan dijadikan kartu hafalan.</p>
    </div>
    <div class="row">
      <button class="btn btn--soft" id="phAll">${raw(ico('play', { size: 16 }))} Putar semua</button>
      <button class="btn btn--primary" id="phCards">${raw(ico('cards', { size: 16 }))} Jadikan kartu</button>
    </div>
  </div>
  <div id="vb"></div>
  <div id="phHost"></div>
  <div class="grid grid--2" style="margin-top:var(--s-4)">
    ${L.phrases.map(g => `<div class="card">
      <div class="card__title">${esc(g.g)}</div>
      <div class="stack stack--sm" style="margin-top:.7rem">
        ${g.items.map(([t, r, id2]) => `<div class="phrase">
          <div class="phrase__t">${esc(t)}</div>
          <div class="phrase__r mono">${esc(r)}</div>
          <div class="phrase__id">${esc(id2)}</div>
          ${spk(t, r)}
        </div>`).join('')}
      </div></div>`).join('')}
  </div>

  ${raw(L.numbers ? `<div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${ico('list')} Angka</div>
    <p class="small soft" style="margin:.4rem 0 1rem">${esc(L.numbers.note)}</p>
    <div class="grid grid--2">
      ${[L.numbers.sino, L.numbers.native].map(sys => `<div class="card card--flat">
        <b>${esc(sys.title)}</b>
        <p class="xs muted" style="margin:.2rem 0 .6rem">Dipakai untuk: ${esc(sys.use)}</p>
        <div class="num-grid">${sys.list.map(([c, r, v]) => `<div class="num-cell"
          data-say-lang="${esc(c)}" data-rom="${esc(r)}" role="button" tabindex="0">
          <b>${esc(c)}</b><span class="mono">${esc(r)}</span><em>${esc(v)}</em></div>`).join('')}</div>
      </div>`).join('')}
    </div>
    <div class="note" style="margin-top:var(--s-4)">${esc(L.numbers.clock)}</div>
  </div>` : '')}`;
  bindSay($('#main'), code);
  pasangBanner(code);

  $('#phCards').onclick = () => {
    $('#phCards').remove();
    flashSession($('#phHost'), phraseLexOf(code, L), { title: 'Frasa', limit: 21 });
    $('#phHost').scrollIntoView({ behavior: 'smooth' });
  };
  let main = true;
  $('#phAll').onclick = () => {
    if (!main) { stopDaftar(); main = true; $('#phAll').innerHTML = ico('play', { size: 16 }) + ' Putar semua'; return; }
    main = false;
    $('#phAll').innerHTML = ico('pause', { size: 16 }) + ' Hentikan';
    const list = L.phrases.flatMap(g => g.items).map(([t, r]) => ({ text: t, rom: r }));
    ucapDaftar(code, list, 900).then(() => {
      main = true; $('#phAll').innerHTML = ico('play', { size: 16 }) + ' Putar semua';
    });
  };
}

/* ── Pelafalan ────────────────────────────────────────────────── */
export function pronunciation(code, L) {
  /* Tabel bunyi ini datanya TIDAK seragam antarbahasa:
       ko  ['가 / 카 / 까', 'g — k(h) — kk', ...]   kolom 1 = teks target
       ja  ['Vokal panjang', 'おじさん / おじいさん', ...] kolom 2 = teks target
       zh  ['mā má mǎ mà', 'ibu · rami · kuda', ...]  keduanya BUKAN teks target
       de  ['ü / u', 'über vs Uhr', ...]              kolom 2 = kata nyata

     Dulu kode ini selalu mengambil kolom 2. Untuk Mandarin itu berarti
     mengirim "ibu · rami · kuda" ke suara Tionghoa — dan tombolnya diam.
     Sekarang: unsur ke-4 dipakai kalau ada, kalau tidak dipilih kolom yang
     benar-benar beraksara bahasa target. */
  const pilihUcap = (c, r, eksplisit) => {
    if (eksplisit) return { teks: String(eksplisit).trim(), rom: String(r || '').trim() };
    /* Pilih kolom yang PALING BANYAK beraksara bahasa target, bukan sekadar
       yang mengandung satu huruf. Baris Jepang seperti
       ['っ (konsonan rangkap)', 'きて / きって'] punya kana di kedua kolom;
       yang layak diucapkan jelas kolom kedua. */
    const kadar = t => {
      const x = String(t || '');
      if (!x) return 0;
      let n = 0;
      for (const ch of x) if (perluAlih(code, ch)) n++;
      return n / [...x].length;
    };
    const kc = kadar(c), kr = kadar(r);
    if (kc > 0 || kr > 0) {
      return kr >= kc
        ? { teks: String(r).trim(), rom: '' }
        : { teks: String(c).trim(), rom: String(r || '').trim() };
    }
    /* Bahasa beraksara Latin: kolom 2 berisi kata sungguhan, kolom 1 hanya huruf. */
    const kata = String(r || '').replace(/\s+(?:vs|atau)\s+/g, ', ').trim();
    return { teks: kata || String(c).trim(), rom: '' };
  };

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Pelafalan</h1>
      <p>Bunyi yang tidak ada di bahasa Indonesia perlu dilatih terpisah sebelum kamu menumpuk kosakata.</p>
    </div>
  </div>
  <div id="vb"></div>
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">${raw(ico('speaker'))} Bunyi yang menjebak</div>
    <div class="table-wrap" style="margin-top:var(--s-4)"><table class="tbl">
      <thead><tr><th>Bunyi</th><th>Contoh</th><th>Cara membedakan</th><th></th></tr></thead>
      <tbody>${L.phonology.triples.map(([c, r, n, u]) => {
        const s2 = pilihUcap(c, r, u);
        return `<tr>
        <td class="jamo__c" style="font-size:1.2rem">${esc(c)}</td>
        <td class="mono">${esc(r)}</td><td class="small">${esc(n)}</td>
        <td>${spk(s2.teks, s2.rom)}</td>
      </tr>`; }).join('')}</tbody></table></div>
  </div>
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Perubahan bunyi saat kata bersambung</div>
    <div class="stack stack--sm" style="margin-top:var(--s-4)">
      ${L.phonology.liaison.map(([w, r, n]) => `<div class="pair-row">
        <b class="jamo__c">${esc(w)}</b><span class="mono">${esc(r)}</span>
        <span class="small soft">${esc(n)}</span>
        ${spk(w, r)}</div>`).join('')}
    </div>
  </div>
  <div class="card" style="margin-top:var(--s-4)">
    <div class="card__title">Catatan penting</div>
    <ul class="stack stack--sm" style="margin-top:.6rem">
      ${L.phonology.notes.map(n => `<li class="small soft">• ${esc(n)}</li>`).join('')}
    </ul>
  </div>`;
  bindSay($('#main'), code);
  pasangBanner(code);
}

/* ── Tata bahasa ──────────────────────────────────────────────── */
export function grammar(code, L) {
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Tata Bahasa</h1>
      <p>${L.grammar.length} topik inti. Tiap topik menjelaskan mengapa penutur Indonesia sering keliru di titik itu.</p>
    </div>
  </div>
  ${L.grammar.map(g => `
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
        ${g.ex.map(([t, id2, rom]) => `<div class="ex"><span class="en">${esc(t)}
          ${spk(t, rom || '', 13)}</span>
          ${rom ? `<span class="mono xs" style="color:var(--info)">${esc(rom)}</span>` : ''}
          <span class="id-txt">${esc(id2)}</span></div>`).join('')}
      </div>
      ${g.traps ? `<div class="ex-list" style="margin-top:.6rem">
        ${g.traps.map(([b, gd, w]) => `<div class="ex ex--bad"><span class="en">${esc(b)}</span>
          <span class="en" style="color:var(--ok);text-decoration:none">${esc(gd)}</span>
          <span class="id-txt">${esc(w)}</span></div>`).join('')}</div>` : ''}
      <button class="btn btn--primary btn--sm" style="margin-top:.9rem" data-drill="${esc(g.id)}">
        ${ico('play', { size: 14 })} Latihan</button>
      <div id="d-${esc(g.id)}"></div>
    </div>`).join('')}`;
  bindSay($('#main'), code);
  $('#main').addEventListener('click', e => {
    const b = e.target.closest('[data-drill]');
    if (!b) return;
    const g = L.grammar.find(x => x.id === b.dataset.drill);
    b.remove();
    runQuiz($('#d-' + g.id), g.drills.map(d => ({ ...d, tag: g.titleId, level: g.level })),
      { quizKey: 'lg:' + g.id, skill: 'grammar' });
  });
}

/* ── Kosakata ─────────────────────────────────────────────────── */
export function vocab(code, L) {
  const lex = lexOf(code, L);
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Kosakata</h1>
      <p>${lex.length} kata inti yang menutupi sebagian besar percakapan dasar.
         ${raw(lex.filter(x => x.ex).length ? `<b>${lex.filter(x => x.ex).length}</b> di antaranya disertai contoh kalimat.` : '')}</p>
    </div>
    <div class="row">
      <input class="input" id="vSearch" type="search" placeholder="Saring…"
             aria-label="Saring daftar kata" style="max-width:220px" />
      <button class="btn btn--primary" id="vFlash">${raw(ico('cards', { size: 16 }))} Kartu hafalan</button>
    </div>
  </div>
  <div id="vb"></div>
  <div id="vHost"></div>
  <div class="vocab-grid" id="vGrid" style="margin-top:var(--s-4)"></div>`;

  const paint = () => {
    const q = ($('#vSearch').value || '').toLowerCase();
    const list = lex.filter(x => !q || x.w.toLowerCase().includes(q) ||
      x.id_.toLowerCase().includes(q) || x.pos.toLowerCase().includes(q) ||
      (x.ex || '').toLowerCase().includes(q) || (x.exId || '').toLowerCase().includes(q));
    $('#vGrid').innerHTML = list.map(x => {
      const c = srsCard(x.id);
      return `<div class="vocab-item">
        <div class="vocab-item__top">
          <span class="vocab-item__w jamo__c">${esc(x.w)}</span>
          ${spk(x.w, x.pos)}
        </div>
        <div class="mono small" style="color:var(--info)">${esc(x.pos)}</div>
        <div class="vocab-item__id">${esc(x.id_)}</div>
        ${x.ex ? `<div class="vocab-item__ex">
          <div class="vocab-item__ex-t">${esc(x.ex)}${spk(x.ex, x.exRom || '')}</div>
          ${x.exRom ? `<div class="mono xs" style="color:var(--text-mute)">${esc(x.exRom)}</div>` : ''}
          <div class="id-txt xs">${esc(x.exId)}</div>
        </div>` : ''}
        ${c ? `<span class="badge badge--ok">⟳ ${c.iv}h</span>` : ''}
      </div>`;
    }).join('') || '<div class="empty"><p>Tidak ada yang cocok.</p></div>';
  };
  paint();
  $('#vSearch').oninput = paint;
  bindSay($('#main'), code);
  pasangBanner(code);
  $('#vFlash').onclick = () => {
    $('#vGrid').innerHTML = '';
    flashSession($('#vHost'), lex, { title: 'Kosakata', limit: 25 });
  };
}

/* ── Kartu hafalan ────────────────────────────────────────────── */
export function cards(code, L) {
  const lex = [...lexOf(code, L), ...phraseLexOf(code, L), ...kanjiLexOf(code, L)];
  const ids = lex.map(x => x.id);
  const due = dueIds(ids);
  const st = srsStats();
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Kartu Hafalan</h1>
      <p>Kartu ditampilkan tepat saat kamu hampir melupakannya. Berisi kosakata${raw(L.kanji ? ', kanji,' : ' dan')} frasa ${esc(langMeta(code).name)}.</p>
    </div>
  </div>
  <div class="grid grid--4" style="margin-bottom:var(--s-5)">
    <div class="stat"><div class="stat__k">Jatuh tempo</div><div class="stat__v">${due.length}</div></div>
    <div class="stat"><div class="stat__k">Tersedia</div><div class="stat__v">${lex.length}</div></div>
    <div class="stat"><div class="stat__k">Sudah dipelajari</div><div class="stat__v">${lex.filter(x => srsCard(x.id)).length}</div></div>
    <div class="stat"><div class="stat__k">Matang</div><div class="stat__v">${st.mature}</div></div>
  </div>
  <div id="cHost"></div>`;
  const host = $('#cHost');
  if (due.length) flashSession(host, due.map(id => lex.find(x => x.id === id)).filter(Boolean),
    { title: 'Ulangan', limit: 60, lang: code });
  else {
    host.innerHTML = `<div class="card"><div class="card__title">Belum ada yang jatuh tempo</div>
      <p class="soft small" style="margin:.5rem 0 1rem">Mulai kartu baru sekarang.</p>
      <button class="btn btn--primary" id="cNew">Pelajari 20 kartu baru</button></div>`;
    $('#cNew').onclick = () => {
      const fresh = lex.filter(x => !srsCard(x.id));
      flashSession(host, sample(fresh, 20), { title: 'Kartu baru', lang: code });
    };
  }
}

/* ── Menyimak: dikte ──────────────────────────────────────────── */
export async function listening(code, L) {
  await ready();
  const r = resolve(code);
  const pakaiRom = r.mode !== 'native';     // audio berbunyi romanisasi

  const items = L.phrases.flatMap(g => g.items).map(([t, rom, id2]) => ({
    text: t, rom, arti: id2,
    target: pakaiRom ? bersihkanRom(rom) : t
  }));

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Menyimak</h1>
      <p>Dengarkan lalu tulis apa yang kamu dengar.</p>
    </div>
  </div>
  <div id="vb"></div>
  <div class="note ${pakaiRom ? 'note--warn' : ''}" style="margin:var(--s-4) 0">
    <strong>${pakaiRom ? 'Mode romanisasi' : 'Mode aksara asli'}</strong>
    ${pakaiRom
      ? `Karena suara ${esc(namaBahasa(code))} belum terpasang, audio membacakan ROMANISASI-nya. ` +
        `Jadi tulislah romanisasinya (contoh: “annyeonghaseyo”), bukan aksara aslinya. ` +
        `Aksara aslinya tetap ditampilkan setelah kamu menjawab.`
      : `Audio memakai suara asli ${esc(namaBahasa(code))}. Tulis dengan aksara aslinya.`}
  </div>
  <div id="lHost"></div>`;
  pasangBanner(code);
  jalankanDikte($('#lHost'), sample(items, 8), code, pakaiRom);
}

function jalankanDikte(host, items, code, pakaiRom, onDone) {
  let i = 0, right = 0;
  const norm = s => String(s).toLowerCase()
    .replace(/[.,!?;:"'¿¡·]/g, '').replace(/\s+/g, ' ').trim();

  const draw = () => {
    const it = items[i];
    host.innerHTML = html`
      <div class="lesson-top"><div class="bar"><i style="width:${(i / items.length) * 100}%"></i></div>
        <span class="small muted nowrap">${i + 1} / ${items.length}</span></div>
      <div class="q-card">
        <div class="q-prompt">Dengarkan, lalu tulis ${pakaiRom ? 'romanisasinya' : 'dengan aksara aslinya'}.</div>
        <div class="row" style="margin-top:.9rem">
          <button class="btn btn--soft" id="qPlay">${raw(ico('play', { size: 16 }))} Putar</button>
          <button class="btn btn--ghost btn--sm" id="qSlow">${raw(ico('turtle', { size: 16 }))} Pelan</button>
          <button class="btn btn--ghost btn--sm" id="qSkip">Lewati</button>
        </div>
        <label for="qA" class="sr-only">Tulis apa yang kamu dengar</label>
        <textarea class="textarea" id="qA" style="margin-top:.9rem;min-height:80px"
          placeholder="Tulis di sini…" autocomplete="off"></textarea>
        <button class="btn btn--primary" id="qGo" style="margin-top:.8rem">Periksa</button>
        <div id="qFb"></div>
      </div>`;

    const putar = (rate = 0.9) => ucap(code, { text: it.text, rom: it.rom, rate });
    $('#qPlay').onclick = () => putar();
    $('#qSlow').onclick = () => putar(0.6);
    $('#qSkip').onclick = () => lanjut(false);
    putar();

    $('#qGo').onclick = () => {
      const given = $('#qA').value.trim();
      if (!given) return toast('Tulis dulu apa yang kamu dengar.', 'warn');
      const ok = norm(given) === norm(it.target);
      if (ok) { right++; addXP(6, 'listening'); }
      $('#qGo').remove();
      $('#qFb').innerHTML = `<div class="feedback feedback--${ok ? 'ok' : 'bad'}" style="margin-top:1rem">
        <h4>${ok ? '✓ Tepat' : '✕ Belum tepat'}</h4>
        <p>Aksara asli: <b class="jamo__c">${esc(it.text)}</b></p>
        <p>Romanisasi: <b class="mono">${esc(it.rom)}</b></p>
        <p class="small soft">Artinya: ${esc(it.arti)}</p>
        <button class="btn btn--primary" id="qNext" style="margin-top:.8rem">
          ${i + 1 < items.length ? 'Lanjut' : 'Lihat hasil'}</button></div>`;
      $('#qNext').onclick = () => lanjut(true);
    };
  };

  const lanjut = () => {
    i++;
    if (i < items.length) return draw();
    stopVoice();
    addMinutes(6);
    const pct = Math.round((right / items.length) * 100);
    onDone?.(pct);
    host.innerHTML = `<div class="card card--pad-lg t-c stack">
      <h2>${right} dari ${items.length} tepat</h2>
      <p class="soft">Ulangi sampai kamu bisa menulis semuanya tanpa ragu.</p>
      <div><button class="btn btn--primary" id="qAgain">Sesi lagi</button></div></div>`;
    $('#qAgain').onclick = () => { i = 0; right = 0; draw(); };
  };

  draw();
}

/* ── Berbicara ────────────────────────────────────────────────── */
export function speaking(code, L) {
  const semua = L.phrases.flatMap(g => g.items);
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>Berbicara</h1>
      <p>Dengarkan contoh, lalu ucapkan. Metode shadowing: ikuti dengan jeda setengah detik, tiru iramanya.</p>
    </div>
  </div>
  <div id="vb"></div>

  <div class="card" style="margin:var(--s-4) 0">
    <div class="card__title">${raw(ico('mic'))} Shadowing berurutan</div>
    <p class="small soft" style="margin:.4rem 0 1rem">Aplikasi membacakan satu per satu dengan jeda; ikuti dengan suara keras.</p>
    <div class="row">
      <button class="btn btn--primary" id="shGo">${raw(ico('play', { size: 16 }))} Mulai (10 frasa)</button>
      <button class="btn btn--ghost" id="shStop">${raw(ico('pause', { size: 16 }))} Berhenti</button>
      <span class="badge" id="shCount">0 / 10</span>
    </div>
    <div class="heard" id="shNow" style="margin-top:1rem">…</div>
  </div>

  <div class="grid grid--2">
    ${L.phrases.map(g => `<div class="card">
      <div class="card__title">${esc(g.g)}</div>
      <div class="stack stack--sm" style="margin-top:.7rem">
        ${g.items.map(([t, r, id2]) => `<div class="phrase">
          <div class="phrase__t">${esc(t)}</div>
          <div class="phrase__r mono">${esc(r)}</div>
          <div class="phrase__id">${esc(id2)}</div>
          ${spk(t, r)}
        </div>`).join('')}
      </div></div>`).join('')}
  </div>`;
  bindSay($('#main'), code);
  pasangBanner(code);

  let jalan = false;
  $('#shGo').onclick = async () => {
    if (jalan) return;
    jalan = true;
    const list = sample(semua, 10);
    for (let k = 0; k < list.length; k++) {
      if (!jalan) break;
      const [t, r, id2] = list[k];
      $('#shCount').textContent = `${k + 1} / ${list.length}`;
      $('#shNow').innerHTML = `<b class="jamo__c">${esc(t)}</b>
        <span class="mono small">${esc(r)}</span><br><span class="small soft">${esc(id2)}</span>`;
      await ucap(code, { text: t, rom: r });
      if (!jalan) break;
      await new Promise(res => setTimeout(res, 1800));
    }
    if (jalan) {
      $('#shNow').textContent = 'Selesai. Ulangi sampai terasa otomatis.';
      addXP(20, 'speaking'); addMinutes(5);
    }
    jalan = false;
  };
  $('#shStop').onclick = () => { jalan = false; stopDaftar(); $('#shNow').textContent = 'Dihentikan.'; };
}

/* ── Ujian ────────────────────────────────────────────────────── */
export function exam(code, L) {
  const X = L.exam;
  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">${esc(langMeta(code).native)}</span>
      <h1>${esc(X.name)}</h1>
      <p>${esc(X.tagline)}</p>
    </div>
  </div>
  <div class="spec-strip">
    ${Object.entries(X.overview).map(([k, v]) => `<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}
  </div>
  <div class="resume" style="margin-top:var(--s-5)">
    <div class="resume__txt">
      <div class="xs">Simulasi bertimer</div>
      <b>Coba format aslinya sekarang</b>
      <div class="xs">Jumlah soal, urutan bagian, dan batas waktu mengikuti ketentuan resmi.</div>
    </div>
    <a class="btn btn--primary btn--lg" href="${P(code, 'ujian/simulasi')}">
      ${ico('target', { size: 17 })} Mulai simulasi</a>
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
  <h2 class="sec-h" style="margin:var(--s-6) 0 var(--s-3)">Trik jitu</h2>
  ${X.tactics.map((t, i) => `<article class="tactic">
    <div class="tactic__n">${String(i + 1).padStart(2, '0')}</div>
    <div class="tactic__body">
      <div class="row row--between"><h3 class="sec-h4">${esc(t.title)}</h3>
        ${t.budget !== '—' ? `<span class="badge badge--brand">${esc(t.budget)}</span>` : ''}</div>
      <ol class="tactic__steps">${t.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      <div class="tactic__why">${ico('bulb', { size: 15 })}<span>${esc(t.why)}</span></div>
    </div></article>`).join('')}
  <div class="card">
    <div class="card__title">${raw(ico('info'))} Sumber</div>
    <ul class="stack stack--sm" style="margin-top:.6rem">
      ${X.sources.map(([t, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join('')}
    </ul>
  </div>`;
}

/* ── Pembungkus agar bisa dipakai kurikulum ───────────────────── */

/** Ubah satu paket kosakata jadi kartu hafalan. */
export const lexOfPack = (code, pack) => pack.words.map((w, i) => ({
  id: `${code}-${pack.id}-${i}`, pack: pack.id, packTitle: pack.title,
  level: pack.level || 'A1', w: w[0], ipa: '', pos: w[1], id_: w[2],
  ex: w[3] || '', exId: w[4] || '', exRom: w[5] || ''
}));

/** Ubah satu grup frasa jadi kartu hafalan. */
export const phraseLex = (code, grup) => grup.items.map((it, i) => ({
  id: `${code}-ph-${grup.g}-${i}`, pack: 'phrases', packTitle: 'Frasa ' + grup.g,
  level: 'A1', w: it[0], ipa: '', pos: it[1], id_: it[2], ex: '', exId: ''
}));

/** Dikte yang bisa ditanam, memakai daftar frasa apa pun. */
export async function dikteInto(host, code, items, onDone) {
  await ready();
  const r = resolve(code);
  const pakaiRom = r.mode !== 'native';
  const soal = sample(items, Math.min(8, items.length)).map(([t, rom, arti]) => ({
    text: t, rom, arti, target: pakaiRom ? bersihkanRom(rom) : t
  }));
  host.innerHTML = `<div class="note ${pakaiRom ? 'note--warn' : ''}" style="margin-bottom:var(--s-4)">
    <strong>${pakaiRom ? 'Mode romanisasi' : 'Mode aksara asli'}</strong>
    ${pakaiRom
      ? `Suara ${esc(namaBahasa(code))} belum terpasang, jadi audio membacakan ROMANISASI-nya —
         tulislah romanisasinya. Aksara aslinya muncul setelah kamu menjawab.`
      : `Audio memakai suara asli ${esc(namaBahasa(code))}. Tulis dengan aksara aslinya.`}
  </div><div id="dkInner"></div>`;
  jalankanDikte($('#dkInner', host), soal, code, pakaiRom, onDone);
}

/** Shadowing yang bisa ditanam. */
export function shadowingInto(host, code, items, onDone) {
  const daftar = sample(items, Math.min(10, items.length));
  host.innerHTML = `
    <div class="card">
      <div class="card__title">${ico('mic')} Shadowing berurutan</div>
      <p class="small soft" style="margin:.4rem 0 1rem">Dengarkan, lalu ikuti dengan suara keras
         berjeda setengah detik. Tiru iramanya, bukan hanya kata-katanya.</p>
      <div class="row">
        <button class="btn btn--primary" id="shGo2">${ico('play', { size: 16 })} Mulai</button>
        <button class="btn btn--ghost" id="shStop2">${ico('pause', { size: 16 })} Berhenti</button>
        <span class="badge" id="shCount2">0 / ${daftar.length}</span>
      </div>
      <div class="heard" id="shNow2" style="margin-top:1rem">…</div>
    </div>`;
  let jalan = false;
  $('#shGo2', host).onclick = async () => {
    if (jalan) return;
    jalan = true;
    for (let k = 0; k < daftar.length; k++) {
      if (!jalan) break;
      const [t, rom, arti] = daftar[k];
      $('#shCount2', host).textContent = `${k + 1} / ${daftar.length}`;
      $('#shNow2', host).innerHTML = `<b class="jamo__c">${esc(t)}</b>
        <span class="mono small">${esc(rom)}</span><br><span class="small soft">${esc(arti)}</span>`;
      await ucap(code, { text: t, rom });
      if (!jalan) break;
      await new Promise(res => setTimeout(res, 1700));
    }
    if (jalan) { $('#shNow2', host).textContent = 'Selesai. Ulangi sampai terasa otomatis.'; onDone?.(); }
    jalan = false;
  };
  $('#shStop2', host).onclick = () => { jalan = false; stopDaftar(); };
}
