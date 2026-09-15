/* ── Layar naik paket ─────────────────────────────────────────────

   Muncul ketika pemegang paket Esensi membuka salah satu dari empat
   bahasa yang tidak ia beli.

   Dua keputusan yang menentukan rasanya:

   1. Layar ini TIDAK menuduh. Orangnya tidak melakukan kesalahan — ia
      membeli lima bahasa dan sedang melihat yang keenam. Jadi yang
      ditampilkan lebih dulu adalah apa yang ia dapat kalau naik, bukan
      pengumuman bahwa ia ditolak.

   2. Tombol "Saya sudah bayar" TIDAK memberi akses. Ia cuma menaruh
      nama orangnya di daftar tunggu admin. Tombol di peramban bisa
      ditekan siapa saja tanpa pernah membayar, dan kalau ia langsung
      membuka sembilan bahasa maka paket Lengkap berhenti punya arti
      pada hari pertama. Karena itu kalimatnya juga jujur: "akan
      diperiksa", bukan "langsung aktif".                             */

import { $, html, raw, esc, toast } from '../ui.js';
import { ico } from '../icons.js';
import { fungsi } from '../lisensi.js';
import { LANGS } from '../../data/lang/registry.js';
import { TAMBAHAN, TAUTAN_UPGRADE, NAMA_PAKET } from '../paket.js';

const nama = (kode) => LANGS.find(l => l.code === kode)?.name || kode;

export function renderUpgrade(kodeDiminta) {
  const diminta = nama(kodeDiminta);
  const l = NAMA_PAKET.lengkap;

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Paket ${esc(NAMA_PAKET.esensi.label)}</span>
      <h1>${esc(diminta)} ada di paket ${esc(l.label)}</h1>
      <p>Paketmu sekarang memuat lima bahasa. ${esc(l.label)} membuka keempat bahasa Eropa
         — sekali bayar, tanpa langganan.</p>
    </div>
  </div>

  <div class="card">
    <div class="card__title">${raw(ico('globe'))} Yang terbuka kalau naik</div>
    <div class="grid grid--4" style="margin-top:var(--s-4)">
      ${TAMBAHAN.map(k => {
        const b = LANGS.find(x => x.code === k);
        return `<div class="card card--flat" style="text-align:center">
          <div style="font-size:var(--fs-xl);font-weight:700;color:${b?.accent || 'var(--brand)'}">${esc(b?.native || k)}</div>
          <div class="small" style="margin-top:.25rem">${esc(b?.name || k)}</div>
          <div class="xs muted">${esc(b?.script || '')}</div>
        </div>`;
      }).join('')}
    </div>

    <div class="note" style="margin-top:var(--s-5)">
      <strong>Yang kamu bayar cuma selisihnya</strong>
      Bukan harga penuh paket ${esc(l.label)}. Bahasa yang sudah kamu punya tidak dibeli dua kali,
      dan kemajuan belajarmu tidak disentuh.
    </div>

    <div class="row" style="margin-top:var(--s-5);flex-wrap:wrap">
      <a class="btn btn--primary btn--lg" href="${esc(TAUTAN_UPGRADE)}"
         target="_blank" rel="noopener">${raw(ico('spark', { size: 16 }))} Naik ke paket ${esc(l.label)}</a>
      <a class="btn btn--soft" href="#/en">Kembali belajar</a>
    </div>
  </div>

  <div class="card" style="margin-top:var(--s-5)">
    <div class="card__title">${raw(ico('check'))} Sudah membayar?</div>
    <p class="small soft" style="margin:.4rem 0 var(--s-4)">
      Tekan tombol ini sesudah pembayaranmu selesai. Kami periksa dulu pembayarannya,
      lalu paketmu dinaikkan — biasanya tidak lama. Kamu tidak perlu menekan berkali-kali.</p>
    <button class="btn btn--soft" id="upgSudah">Saya sudah bayar, tolong periksa</button>
    <div id="upgKabar" style="margin-top:var(--s-4)"></div>
  </div>`;

  $('#upgSudah').onclick = async (ev) => {
    const t = ev.currentTarget;
    t.disabled = true; t.textContent = 'Mengirim…';
    try {
      const r = await fungsi('minta-upgrade', {});
      $('#upgKabar').innerHTML = r?.sudahLengkap
        ? `<div class="note note--ok"><strong>Paketmu sudah Lengkap.</strong>
             Muat ulang halaman ini, semua bahasa sudah terbuka.</div>`
        : `<div class="note note--ok"><strong>Sudah kami terima.</strong>
             Pembayaranmu diperiksa dulu, lalu paketmu dinaikkan. Kamu akan bisa membuka
             keempat bahasa itu tanpa perlu membayar apa pun lagi.</div>`;
      t.textContent = 'Sudah terkirim';
    } catch (e) {
      toast(e.message, 'bad', 6000);
      t.disabled = false; t.textContent = 'Saya sudah bayar, tolong periksa';
    }
  };

  window.scrollTo({ top: 0, behavior: 'instant' });
}
