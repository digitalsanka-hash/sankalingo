/* ── Audit suara ───────────────────────────────────────────────────
   Menguji setiap bahasa satu per satu dan melaporkan apa yang benar-benar
   terjadi: suara mana yang dipakai, lapisan cadangan keberapa, berapa
   milidetik sampai bunyi keluar, dan apakah utterance-nya sungguh jalan.
   Tanpa halaman ini, "tombol suara tidak bunyi" cuma bisa ditebak-tebak. */

import { $, $$, esc, toast, nf } from '../ui.js';
import { ico } from '../icons.js';
import { LANGS } from '../../data/lang/registry.js';
import { ready, resolve, ucap, stop, allVoices, suaraUntuk, potong,
         voicePilihan, setVoicePilihan, bersihkanRom, PANDUAN_PASANG,
         namaBahasa, ttsAda } from '../voice.js';
import { keLatin, perluAlih } from '../translit.js';
import { loadLangData } from '../langctx.js';
import { muatManifes, punyaAudio } from '../audio.js';

/* Contoh uji: satu kata sapaan yang pasti ada di tiap bahasa, plus
   romanisasi gaya Indonesia sebagai bahan lapisan cadangan. */
export const CONTOH = {
  en: { text: 'Good morning, how are you today?', rom: 'gud morning, hau ar yu tudei' },
  ko: { text: '안녕하세요, 만나서 반갑습니다', rom: 'annyeonghaseyo, mannaseo bangapseumnida' },
  ja: { text: 'こんにちは、はじめまして', rom: 'konnichiwa, hajimemashite' },
  zh: { text: '你好，很高兴认识你', rom: 'ni hau, hen kaosing rense ni' },
  ar: { text: 'السَّلامُ عَلَيْكُم، كَيْفَ حالُك', rom: 'assalamu alaikum, kaifa haluk' },
  ru: { text: 'Здравствуйте, очень приятно', rom: 'zdrastvuyte, ochin priyatna' },
  de: { text: 'Guten Morgen, wie geht es Ihnen?', rom: 'gutn morgn, vi geet es iinen' },
  fr: { text: 'Bonjour, enchanté de vous rencontrer', rom: 'bonzyur, angsyante de vu rangkontre' },
  es: { text: 'Buenos días, mucho gusto', rom: 'buenos dias, mucyo gusto' }
};

const LABEL_MODE = {
  rekaman:    ['Rekaman F5-TTS',               'badge--ok'],
  native:     ['Suara peramban',               'badge--ok'],
  'roman-id': ['Romanisasi · suara Indonesia', 'badge--warn'],
  'roman-en': ['Romanisasi · suara Inggris',   'badge--warn'],
  none:       ['Tidak ada suara',              'badge--bad'],
  kosong:     ['Teks kosong',                  'badge--bad'],
  'tak-terbaca': ['Aksara tak terbaca',        'badge--bad'],
  batal:      ['Dibatalkan',                   'badge--warn']
};

export async function renderAuditSuara() {
  await ready();
  const semua = allVoices();

  $('#main').innerHTML = `
    <div class="page-head">
      <div class="page-head__txt">
        <span class="eyebrow">${ico('stethoscope', { size: 14 })} Diagnosis</span>
        <h1>Audit suara semua bahasa</h1>
        <p class="lede">Halaman ini benar-benar memutar contoh di setiap bahasa dan mencatat
        hasilnya — bukan menebak dari daftar suara. Pakai kalau ada tombol suara yang diam.</p>
      </div>
      <div class="row">
        <button class="btn btn--primary" id="auJalan">${ico('play', { size: 15 })} Jalankan audit</button>
        <button class="btn btn--soft" id="auDiam">${ico('pause', { size: 15 })} Hentikan</button>
      </div>
    </div>

    <div class="grid grid--4" style="margin-bottom:var(--s-5)">
      <div class="stat"><div class="stat__k">Mesin bicara</div>
        <div class="stat__v" style="font-size:var(--fs-lg);color:${ttsAda() ? 'var(--ok)' : 'var(--bad)'}">
          ${ttsAda() ? 'Tersedia' : 'Tidak ada'}</div></div>
      <div class="stat"><div class="stat__k">Suara terpasang</div>
        <div class="stat__v" style="font-size:var(--fs-lg)">${semua.length}</div></div>
      <div class="stat"><div class="stat__k">Bahasa bersuara asli</div>
        <div class="stat__v" style="font-size:var(--fs-lg)" id="auAsli">—</div></div>
      <div class="stat"><div class="stat__k">Peramban</div>
        <div class="stat__v" style="font-size:var(--fs-md)">${esc(namaPeramban())}</div></div>
    </div>

    <div class="card">
      <div class="card__title">Hasil per bahasa</div>
      <p class="small soft" style="margin:.4rem 0 1rem">
        <b>Suara asli</b> berarti pelafalannya benar. <b>Romanisasi</b> berarti tombolnya tetap
        berbunyi tetapi memakai ejaan Latin gaya Indonesia — mendekati, bukan pelafalan asli.
        <b>Tidak ada suara</b> berarti perangkat ini tidak punya mesin bicara sama sekali.</p>
      <div class="table-wrap"><table class="tbl">
        <thead><tr><th>Bahasa</th><th>Lapisan</th><th>Suara dipakai</th>
          <th>Berbunyi?</th><th>Waktu</th><th></th></tr></thead>
        <tbody id="auBody"></tbody>
      </table></div>
      <div class="bar bar--sm" id="auBar" hidden style="margin-top:var(--s-4)"><i style="width:0%"></i></div>
      <p class="small" id="auPesan" style="margin-top:.7rem"></p>
    </div>

    <div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">${ico('speaker')} Rekaman F5-TTS</div>
      <p class="small soft" style="margin:.4rem 0 1rem">
        Lapisan suara terbaik: audio yang sudah direkam lebih dulu memakai F5-TTS,
        jadi pelafalannya benar dan tidak ada waktu inferensi saat tombol ditekan.
        Bahasa tanpa rekaman jatuh ke pembaca teks bawaan peramban.</p>
      <div id="auRekaman"><p class="small muted">Memeriksa…</p></div>
    </div>

    <div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">${ico('layers')} Cakupan materi</div>
      <p class="small soft" style="margin:.4rem 0 1rem">
        Berapa banyak teks berbahasa asing di aplikasi yang benar-benar bisa dibunyikan —
        entah lewat suara asli, romanisasi yang sudah ditulis, atau alih aksara otomatis.
        Angka di bawah 100% berarti ada materi yang tombol suaranya akan diam.</p>
      <div id="auIsi"><p class="small muted">Menghitung…</p></div>
    </div>

    <div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">${ico('volume')} Semua suara di perangkat ini</div>
      <p class="small soft" style="margin:.4rem 0 1rem">
        ${semua.length} suara terdeteksi. Yang bertanda ✓ bisa dipakai salah satu bahasa di SankaLingo GO.</p>
      <div class="table-wrap"><table class="tbl">
        <thead><tr><th>Nama</th><th>Kode</th><th>Sumber</th><th>Dipakai untuk</th></tr></thead>
        <tbody>${semua.map(v => {
          const untuk = LANGS.filter(l => suaraUntuk(l.code).some(x => x.voiceURI === v.voiceURI))
                             .map(l => l.name);
          return `<tr>
            <td>${untuk.length ? '✓ ' : ''}<b>${esc(v.name)}</b></td>
            <td class="mono small">${esc(v.lang)}</td>
            <td class="small muted">${v.localService ? 'lokal' : 'daring'}</td>
            <td class="small">${untuk.length ? esc(untuk.join(', ')) : '<span class="muted">—</span>'}</td>
          </tr>`; }).join('') ||
          '<tr><td colspan="4" class="small muted">Tidak ada suara terdeteksi.</td></tr>'}
        </tbody></table></div>
    </div>

    <div class="card" style="margin-top:var(--s-4)">
      <div class="card__title">${ico('download')} Menambah suara yang hilang</div>
      <ol class="stack stack--sm" style="margin-top:.8rem;padding-left:1.2rem;list-style:decimal">
        ${PANDUAN_PASANG('ko').langkah.map(x => `<li class="small soft">${esc(x)}</li>`).join('')}
      </ol>
      <p class="xs muted" style="margin-top:.7rem">${esc(PANDUAN_PASANG('ko').catatan)}</p>
    </div>`;

  gambarBaris();
  $('#auJalan').onclick = jalankanAudit;
  $('#auDiam').onclick = () => { stop(); $('#auPesan').textContent = 'Dihentikan.'; };
  hitungAsli();
  gambarRekaman();
  gambarCakupan();
}

/* ── Rekaman F5-TTS ───────────────────────────────────────────────
   Melaporkan apa adanya: berapa berkas yang benar-benar ada, dari model
   apa, dan berapa persen materi bahasa itu sudah tertutup. */
async function gambarRekaman() {
  const host = $('#auRekaman');
  if (!host) return;
  const arr = x => (Array.isArray(x) ? x : []);
  const baris = [];

  for (const l of LANGS) {
    if (l.code === 'en') continue;
    const m = await muatManifes(l.code);
    const L = await loadLangData(l.code);
    let korpus = 0;
    if (L) {
      const t = new Set();
      arr(L.scripts).forEach(s => arr(s.chars).forEach(c => t.add(c.c)));
      arr(L.vocab).forEach(p => arr(p.words).forEach(w => t.add(w[0])));
      arr(L.phrases).forEach(g => arr(g.items).forEach(it => t.add(it[0])));
      arr(L.grammar).forEach(g => arr(g.ex).forEach(e => t.add(e[0])));
      korpus = t.size;
    }
    baris.push({ nama: l.name, kode: l.code, punya: m.kunci.size,
                 korpus, model: m.model || '', dibuat: m.dibuat || '' });
  }

  const adaSatuPun = baris.some(b => b.punya > 0);
  host.innerHTML = `<div class="table-wrap"><table class="tbl">
    <thead><tr><th>Bahasa</th><th>Berkas rekaman</th><th>Cakupan</th><th>Model</th></tr></thead>
    <tbody>${baris.map(b => {
      const pct = b.korpus ? Math.min(100, Math.round((b.punya / b.korpus) * 100)) : 0;
      return `<tr>
        <td><b>${esc(b.nama)}</b></td>
        <td class="mono small">${b.punya ? nf(b.punya) : '—'}</td>
        <td>${b.punya
          ? `<b style="color:${pct >= 95 ? 'var(--ok)' : 'var(--warn)'}">${pct}%</b>`
          : '<span class="small muted">belum direkam</span>'}</td>
        <td class="small muted">${esc(b.model || '—')}</td></tr>`;
    }).join('')}</tbody></table></div>
    ${adaSatuPun ? '' : `<div class="note note--warn" style="margin-top:var(--s-4)">
      <strong>Belum ada satu pun rekaman</strong>
      Semua bahasa masih memakai pembaca teks bawaan peramban. Untuk merekam,
      jalankan <code>node tools/dump-corpus.mjs</code> lalu
      <code>python tools/render_f5.py --semua</code>.
      Petunjuk lengkapnya ada di <code>tools/README.md</code>.
    </div>`}`;
}

/* ── Cakupan materi ───────────────────────────────────────────────
   Menghitung tiap potong teks berbahasa asing di seluruh modul dan
   memeriksa apakah lapisan cadangan punya bahan untuk membacakannya. */
async function gambarCakupan() {
  const host = $('#auIsi');
  if (!host) return;
  const arr = x => (Array.isArray(x) ? x : []);
  const baris = [];

  for (const l of LANGS) {
    if (l.code === 'en') continue;
    const L = await loadLangData(l.code);
    if (!L) { baris.push([l.name, 0, 0, 'modul gagal dimuat']); continue; }
    const teks = [];
    arr(L.phrases).forEach(g => arr(g.items).forEach(it => teks.push([it[0], it[1]])));
    arr(L.vocab).forEach(p => arr(p.words).forEach(w => teks.push([w[0], w[1]])));
    arr(L.grammar).forEach(g => arr(g.ex).forEach(e => teks.push([e[0], e[2]])));
    arr(L.scripts).forEach(s => arr(s.chars).forEach(c => teks.push([c.c, c.r || c.rom])));

    let gagal = 0;
    const contoh = [];
    for (const [asli, rom] of teks) {
      if (rom || !perluAlih(l.code, asli)) continue;
      if (!keLatin(l.code, asli)) { gagal++; if (contoh.length < 3) contoh.push(asli); }
    }
    baris.push([l.name, teks.length, gagal, contoh.join(' · ')]);
  }

  const semuaBaik = baris.every(b => b[2] === 0 && b[1] > 0);
  host.innerHTML = `<div class="table-wrap"><table class="tbl">
    <thead><tr><th>Bahasa</th><th>Butir teks</th><th>Bisa dibunyikan</th><th>Yang diam</th></tr></thead>
    <tbody>${baris.map(([nama, total, gagal, contoh]) => {
      const pct = total ? Math.round((total - gagal) / total * 100) : 0;
      return `<tr>
        <td><b>${esc(nama)}</b></td>
        <td class="mono small">${nf(total)}</td>
        <td><b style="color:${pct === 100 ? 'var(--ok)' : 'var(--warn)'}">${pct}%</b></td>
        <td class="small muted">${gagal ? esc(contoh) : '—'}</td></tr>`;
    }).join('')}</tbody></table></div>
    <p class="small" style="margin-top:.7rem">${semuaBaik
      ? '<b style="color:var(--ok)">Seluruh materi bisa dibunyikan.</b> ' +
        'Teks yang tidak menyertakan romanisasi dialihaksarakan otomatis dari aksara aslinya.'
      : 'Sebagian materi belum punya romanisasi dan aksaranya belum bisa dialihaksarakan otomatis.'}</p>`;
}

function namaPeramban() {
  const u = navigator.userAgent;
  if (/Edg\//.test(u)) return 'Microsoft Edge';
  if (/OPR\//.test(u)) return 'Opera';
  if (/Firefox\//.test(u)) return 'Firefox';
  if (/Chrome\//.test(u)) return 'Chrome';
  if (/Safari\//.test(u)) return 'Safari';
  return 'Lain';
}

function hitungAsli() {
  const n = LANGS.filter(l => resolve(l.code).mode === 'native').length;
  const el = $('#auAsli');
  if (el) { el.textContent = `${n} / ${LANGS.length}`; el.style.color = n === LANGS.length ? 'var(--ok)' : 'var(--warn)'; }
}

function gambarBaris(hasil = {}) {
  const body = $('#auBody');
  if (!body) return;
  body.innerHTML = LANGS.map(l => {
    const r = resolve(l.code);
    const h = hasil[l.code];
    const [teks, kelas] = LABEL_MODE[h?.mode || r.mode] || ['—', ''];
    const contoh = CONTOH[l.code] || {};
    const dibaca = r.mode === 'native' ? contoh.text : bersihkanRom(contoh.rom || contoh.text || '');
    return `<tr data-row="${l.code}">
      <td><b>${esc(l.name)}</b><div class="xs muted">${esc(l.native)}</div></td>
      <td><span class="badge ${kelas}">${esc(teks)}</span></td>
      <td class="small">${esc(r.voice ? r.voice.name : '—')}
        <div class="xs muted mono">${esc(r.voice ? r.voice.lang : '')}</div></td>
      <td class="small">${h ? (h.berbunyi
          ? '<b style="color:var(--ok)">ya</b>'
          : '<b style="color:var(--bad)">tidak</b>') : '<span class="muted">belum diuji</span>'}</td>
      <td class="small mono">${h ? h.ms + ' md' : '—'}</td>
      <td><button class="btn btn--soft btn--sm" data-uji="${l.code}"
            title="${esc(dibaca).slice(0, 90)}">${ico('volume', { size: 14 })} Uji</button></td>
    </tr>`;
  }).join('');

  $$('[data-uji]', body).forEach(b => b.onclick = async () => {
    const c = b.dataset.uji;
    b.disabled = true;
    const h = await ujiSatu(c);
    b.disabled = false;
    gambarBaris({ ...hasil, [c]: h });
    toast(h.berbunyi ? `${namaBahasa(c)}: berbunyi (${h.ms} md)`
                     : `${namaBahasa(c)}: TIDAK berbunyi`, h.berbunyi ? 'ok' : 'bad');
  });
}

async function ujiSatu(code) {
  const t0 = performance.now();
  let msMulai = null;
  const r = await ucap(code, { ...CONTOH[code], rate: 1.35,
    onMulai: () => { msMulai = Math.round(performance.now() - t0); } });
  return { mode: r.mode, berbunyi: !!r.berbunyi,
           ms: msMulai ?? Math.round(performance.now() - t0) };
}

async function jalankanAudit() {
  const bar = $('#auBar'), pesan = $('#auPesan');
  bar.hidden = false;
  const hasil = {};
  for (let i = 0; i < LANGS.length; i++) {
    const l = LANGS[i];
    pesan.innerHTML = `Menguji <b>${esc(l.name)}</b>…`;
    bar.querySelector('i').style.width = `${Math.round((i / LANGS.length) * 100)}%`;
    hasil[l.code] = await ujiSatu(l.code);
    gambarBaris(hasil);
    await new Promise(r => setTimeout(r, 160));
  }
  bar.querySelector('i').style.width = '100%';
  const bunyi = Object.values(hasil).filter(h => h.berbunyi).length;
  const asli = Object.values(hasil).filter(h => h.mode === 'native').length;
  const rata = Math.round(Object.values(hasil).reduce((a, h) => a + h.ms, 0) / LANGS.length);
  pesan.innerHTML = bunyi === LANGS.length
    ? `<b style="color:var(--ok)">Semua ${LANGS.length} bahasa berbunyi.</b> ${asli} memakai suara asli, ` +
      `${LANGS.length - asli} memakai romanisasi. Rata-rata jeda sampai bunyi keluar: <b>${rata} md</b>.`
    : `<b style="color:var(--bad)">${LANGS.length - bunyi} bahasa tidak berbunyi.</b> ` +
      `Kalau angkanya sama dengan jumlah bahasa, mesin bicara peramban sedang bermasalah — ` +
      `muat ulang halaman, atau coba Microsoft Edge.`;
  hitungAsli();
}
