/* Hub semua bahasa: kartu pemilih ke sembilan bahasa.

   Berkas ini DULU juga berisi halaman-satu-bahasa (renderLang), modal
   aksara (showGlyphModal), dan pelatih menulis (renderScript) — 440 baris.
   Ketiganya sudah digantikan js/views/langpages.js sejak rute berawalan
   kode bahasa diperkenalkan, dan sejak itu tidak pernah dipanggil lagi:
   app.js hanya memakai renderHub.

   Kode itu dihapus, bukan disimpan, karena ia sudah menyesatkan sekali.
   Tautannya masih berbentuk #/script/<kode>/<id> — bentuk rute sebelum
   ada awalan bahasa — sehingga audit tautan melaporkannya sebagai tombol
   utama yang rusak, padahal tak seorang pun bisa menekannya. Ia juga
   punya loadLang() sendiri yang TIDAK menggabungkan -course, -plus,
   -kata, -verba, dan -goresan seperti langctx.loadLangData(), jadi kalau
   suatu saat dihidupkan lagi ia akan menampilkan materi yang tidak utuh.

   Riwayatnya tetap ada di git kalau sewaktu-waktu diperlukan.          */

import { $, html, raw, esc } from '../ui.js';
import { ico } from '../icons.js';
import { LANGS } from '../../data/lang/registry.js';

/* ── Hub semua bahasa ─────────────────────────────────────────── */
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
