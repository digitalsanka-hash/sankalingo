/* ── Kamus ────────────────────────────────────────────────────────

   Seribu kata per bahasa, diurut menurut sering-pakai, bisa dicari dari
   dua arah: dari kata asing maupun dari arti Indonesianya.

   Dua keputusan yang menentukan halaman ini:

   1. TIDAK semua entri digambar sekaligus. Seribu entri berarti belasan
      ribu simpul DOM; di ponsel itu terasa sebagai halaman yang macet
      saat digulir. Digambar bertahap 60 entri, ditambah saat diminta.

   2. Pencarian TIDAK menunggu tombol. Menekan Enter untuk mencari di
      kamus terasa salah — orang mengetik lalu menghapus lalu mengetik
      lagi sampai ketemu. Jadi disaring tiap ketikan, dan karena
      penyaringannya cuma menelusuri larik di memori, itu tetap ringan. */

import { $, $$, html, raw, esc, toast } from '../ui.js';
import { ico } from '../icons.js';
import { muatKamus, cariKata, urutkanHasil, KELAS_KATA } from '../kamus.js';
import { langMeta } from '../langctx.js';

const SEKALI = 60;

export async function renderKamus(code) {
  const meta = langMeta(code) || { name: code, native: '' };

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Kamus</span>
      <h1>Kamus ${esc(meta.name)}</h1>
      <p>Kata yang paling sering dipakai, lengkap dengan kalimat, frasa, dan
         bentuk katanya. Cari dari kata asingnya atau dari arti Indonesianya.</p>
    </div>
  </div>
  <div id="kamusIsi"><div class="empty"><p>Memuat kamus…</p></div></div>`;

  const K = await muatKamus(code);
  const kotak = $('#kamusIsi');

  if (!K?.kata?.length) {
    kotak.innerHTML = `<div class="empty">
      <div class="empty__ico">📖</div>
      <p>Kamus ${esc(meta.name)} belum tersedia.</p></div>`;
    return;
  }

  /* Kelas kata yang benar-benar ada di kamus ini saja. Keping saringan
     untuk kelas yang nol isinya cuma menambah benda untuk dilewati mata. */
  const jml = {};
  for (const e of K.kata) jml[e.p] = (jml[e.p] || 0) + 1;
  const kelasAda = Object.keys(KELAS_KATA).filter(p => jml[p]);

  let cari = '', kelas = 'semua', tampil = SEKALI;

  kotak.innerHTML = `
  <div class="kamus-bar">
    <input class="input" id="kmCari" type="search" autocomplete="off"
           placeholder="Cari kata atau artinya…" aria-label="Cari di kamus">
    <div class="gram-chips" id="kmKelas" role="group" aria-label="Saring menurut kelas kata">
      <button class="chip is-active" data-p="semua">Semua <b>${K.kata.length}</b></button>
      ${kelasAda.map(p =>
        `<button class="chip" data-p="${esc(p)}">${esc(KELAS_KATA[p])} <b>${jml[p]}</b></button>`
      ).join('')}
    </div>
  </div>
  <p class="small muted" id="kmJml" role="status" aria-live="polite"></p>
  <div class="kamus-list" id="kmDaftar"></div>
  <div class="row" style="justify-content:center;margin-top:var(--s-5)">
    <button class="btn btn--soft" id="kmLagi" hidden>Tampilkan 60 lagi</button>
  </div>`;

  const suara = (teks, rom) => code === 'en'
    ? `<button class="speak-btn" data-say="${esc(teks)}" aria-label="Dengarkan">${ico('volume', { size: 14 })}</button>`
    : `<button class="speak-btn" data-say-lang="${esc(teks)}" data-say-code="${esc(code)}"
         data-rom="${esc(rom || '')}" aria-label="Dengarkan">${ico('volume', { size: 14 })}</button>`;

  const label = K.bentukLabel || {};

  /* Romanisasi satu bentuk kata. Sumbernya tiga lapis, dari yang paling
     tepat: `br` yang ditulis khusus per bentuk, lalu `r` lema bila
     bentuknya memang sama dengan lemanya, lalu kosong — dan yang kosong
     ditalangi keLatin() di lapisan suara. Bentuk pertama TIDAK selalu
     sama dengan lema: di Mandarin kolom bentuk berisi kata bantu
     bilangan, bukan kata itu sendiri. Karena itu dicocokkan, bukan
     diasumsikan dari nomor urutnya. */
  const romBentuk = (e, v, i) => e.br?.[i] || (v === e.k ? e.r || '' : '');

  /* Tidak semua isi kolom bentuk adalah kata. Kata benda Rusia memakai
     kolom ketiga untuk LABEL jenisnya ('netral'), dan label bukan
     sesuatu yang bisa dilafalkan - tombolnya hanya akan membacakan kata
     Indonesia dengan suara Rusia. Jadi untuk bahasa beraksara sendiri,
     tombol dipasang hanya bila bentuknya memang ditulis dengan aksara
     itu. */
  const AKSARA = {
    ko: /[가-힣]/, ja: /[぀-ヿ一-鿿]/,
    zh: /[一-鿿]/, ru: /[Ѐ-ӿ]/, ar: /[؀-ۿ]/,
  };
  const bisaDiucap = v => !AKSARA[code] || AKSARA[code].test(v);

  const kartu = e => {
    const bentuk = Array.isArray(e.b) && e.b.length
      ? `<div class="kamus-bentuk">
           ${e.b.map((v, i) => `<span class="kamus-bentuk__i">
             <span class="xs muted">${esc(label[e.p]?.[i] || `bentuk ${i + 1}`)}</span>
             <span class="kamus-bentuk__v"><b>${esc(v)}</b>${bisaDiucap(v) ? suara(v, romBentuk(e, v, i)) : ''}</span>
             ${e.br?.[i] ? `<span class="mono xs kamus-bentuk__r">${esc(e.br[i])}</span>` : ''}
           </span>`).join('')}
         </div>`
      : '';
    return `<article class="kamus-item">
      <div class="kamus-item__kepala">
        <div>
          <span class="kamus-item__k">${esc(e.k)}</span>
          ${e.r ? `<span class="mono xs kamus-item__r">${esc(e.r)}</span>` : ''}
          ${suara(e.k, e.r)}
        </div>
        <span class="badge">${esc(KELAS_KATA[e.p] || e.p)}</span>
      </div>
      <p class="kamus-item__a">${esc(e.a)}</p>
      ${bentuk}
      <div class="kamus-contoh">
        <span class="kamus-contoh__t">${esc(e.c)} ${suara(e.c, e.cr)}</span>
        ${e.cr ? `<span class="mono xs">${esc(e.cr)}</span>` : ''}
        <span class="kamus-contoh__id">${esc(e.ca)}</span>
      </div>
      <div class="kamus-frasa">
        <span class="xs muted">Frasa lazim</span>
        <span class="kamus-frasa__t">${esc(e.f)} ${suara(e.f, '')}</span>
        <span class="kamus-frasa__id">${esc(e.fa)}</span>
      </div>
    </article>`;
  };

  const saring = () => {
    let d = K.kata;
    if (kelas !== 'semua') d = d.filter(e => e.p === kelas);
    d = cariKata(d, cari);
    return urutkanHasil(d, cari);
  };

  const gambar = () => {
    const d = saring();
    const potong = d.slice(0, tampil);
    $('#kmDaftar').innerHTML = potong.length
      ? potong.map(kartu).join('')
      : `<div class="empty"><div class="empty__ico">🔍</div>
         <p>Tidak ada kata yang cocok dengan “${esc(cari)}”.</p></div>`;
    $('#kmJml').textContent = d.length
      ? `${d.length} kata ditampilkan${d.length > potong.length ? ` · ${potong.length} tergambar` : ''}`
      : '';
    const lagi = $('#kmLagi');
    lagi.hidden = d.length <= tampil;
    lagi.textContent = `Tampilkan ${Math.min(SEKALI, d.length - tampil)} lagi`;
  };

  $('#kmCari').oninput = e => { cari = e.target.value; tampil = SEKALI; gambar(); };
  $('#kmKelas').onclick = e => {
    const b = e.target.closest('[data-p]');
    if (!b) return;
    $$('#kmKelas .chip').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    kelas = b.dataset.p; tampil = SEKALI; gambar();
  };
  $('#kmLagi').onclick = () => { tampil += SEKALI; gambar(); };

  /* Penangan suara global (js/app.js) mencari penanda ini untuk tahu
     bahasa mana yang sedang dibaca. */
  kotak.dataset.langScope = code;

  gambar();
}
