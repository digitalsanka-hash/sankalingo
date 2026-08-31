/* ── Kotak saran ──────────────────────────────────────────────────

   Saluran satu arah dari pemakai ke pembuat: keluhan, usul, dan
   laporan "kata ini salah". Sengaja TIDAK menuntut pengguna masuk
   dulu — saran paling tajam biasanya datang dari orang yang baru lima
   menit mencoba, dan orang seperti itu tidak akan mendaftar hanya
   untuk mengeluh. Tabelnya di Supabase memang mengizinkan anon
   menulis (lihat supabase/saran.sql), dan hanya menulis.

   Dua hal yang membuat saran benar-benar bisa ditindaklanjuti:

   1. KONTEKS IKUT TERKIRIM. "Ada yang salah di sini" tidak berguna
      tanpa kata "di sini". Halaman, bahasa yang sedang dibuka, versi
      aplikasi, dan jenis perangkat dilampirkan otomatis.

   2. TIDAK ADA SARAN YANG HILANG KARENA SINYAL. Kalau pengiriman
      gagal, isinya diantre di localStorage dan dicoba lagi saat
      jaringan kembali. Orang yang sedang kesal tidak akan mengetik
      ulang keluhannya.                                                */

import { modal, esc, toast } from './ui.js';
import { ico } from './icons.js';
import { panggilAwan, awanSiap, masukSebagai } from './awan.js';

const KUNCI_ANTRE = 'fasih.saran.antre';

const JENIS = [
  { id: 'saran',   label: 'Saran',        tanya: 'Apa yang membuat aplikasi ini lebih enak dipakai?' },
  { id: 'masalah', label: 'Ada masalah',  tanya: 'Apa yang rusak atau tidak jalan? Sebutkan langkahnya.' },
  { id: 'kata',    label: 'Isi keliru',   tanya: 'Kata, arti, atau contoh mana yang salah? Bagaimana seharusnya?' },
];

/* ── Konteks ──────────────────────────────────────────────────── */

/** Bahasa yang sedang dibuka, dibaca dari rute: #/ja/kamus → 'ja'.
 *  Rute Inggris tidak memakai awalan bahasa (#/kamus), jadi yang
 *  tidak berupa dua huruf berarti Inggris. */
function bahasaKini() {
  const bagian = String(location.hash || '').replace(/^#\/?/, '').split('/');
  return /^[a-z]{2}$/.test(bagian[0]) ? bagian[0] : 'en';
}

/** Versi aplikasi diambil dari nama cache service worker, bukan dari
 *  konstanta yang ditulis ulang di sini. Satu tempat yang harus
 *  diperbarui tiap rilis sudah cukup; dua tempat berarti suatu hari
 *  keduanya berbeda dan laporan bugnya menyebut versi yang salah. */
async function versiApp() {
  try {
    const nama = (await caches.keys()).find(n => n.startsWith('fasih-v'));
    return nama || 'tanpa-sw';
  } catch { return 'tanpa-sw'; }
}

const perangkat = () => [
  navigator.userAgent.slice(0, 120),
  `${screen.width}x${screen.height}`,
].join(' · ');

/* ── Antrean ──────────────────────────────────────────────────── */

const bacaAntre = () => {
  try { return JSON.parse(localStorage.getItem(KUNCI_ANTRE) || '[]'); }
  catch { return []; }
};
const tulisAntre = a => localStorage.setItem(KUNCI_ANTRE, JSON.stringify(a.slice(-20)));

async function kirimSatu(baris) {
  await panggilAwan('/rest/v1/saran', {
    metode: 'POST',
    badan: baris,
    tambahan: { Prefer: 'return=minimal' },
  });
}

/** Kirim ulang yang sempat tertahan. Diam-diam: dipanggil saat boot
 *  dan saat jaringan kembali, jadi tidak boleh mengganggu layar. */
export async function kirimAntrean() {
  if (!awanSiap()) return;
  const antre = bacaAntre();
  if (!antre.length) return;

  const sisa = [];
  for (const baris of antre) {
    try { await kirimSatu(baris); }
    catch { sisa.push(baris); }
  }
  tulisAntre(sisa);
  const terkirim = antre.length - sisa.length;
  if (terkirim) toast(`${terkirim} saran yang tertunda sudah terkirim. Terima kasih.`, 'ok');
}

/** Pasang pengiriman ulang otomatis. Aman dipanggil sekali saja. */
export function pasangSaranOtomatis() {
  addEventListener('online', () => kirimAntrean());
  /* Ditunda sebentar supaya tidak berebut jalur dengan pemuatan awal. */
  setTimeout(() => kirimAntrean(), 4000);
}

/* ── Layar ────────────────────────────────────────────────────── */

export function bukaSaran(jenisAwal = 'saran') {
  const email = masukSebagai() || '';
  const pilihan = JENIS.map(j => `
    <button type="button" class="btn btn--sm saran__jenis${j.id === jenisAwal ? ' btn--primary' : ' btn--ghost'}"
            data-jenis="${j.id}">${esc(j.label)}</button>`).join('');

  const tutup = modal(`
    <div class="modal__head">
      <h3>${ico('quote', { size: 18 })} Kotak saran</h3>
      <button class="icon-btn" data-close aria-label="Tutup">✕</button>
    </div>
    <div class="modal__body">
      <p class="xs muted">Ditulis siapa pun, tanpa perlu masuk. Halaman yang sedang kamu buka
        ikut terkirim supaya masukanmu bisa langsung ditelusuri.</p>

      <div class="saran__jenis-baris" style="display:flex;gap:var(--s-1);flex-wrap:wrap;margin:var(--s-2) 0">
        ${pilihan}
      </div>

      <label class="xs muted" for="saranIsi" id="saranTanya"></label>
      <textarea id="saranIsi" class="input" rows="5" maxlength="2000"
                placeholder="Tulis di sini…" style="width:100%;resize:vertical"></textarea>
      <div class="xs muted" style="display:flex;justify-content:space-between;margin-top:var(--s-1)">
        <span id="saranSisa">2000 huruf tersisa</span>
        <span>Boleh bahasa apa saja</span>
      </div>

      <label class="xs muted" for="saranEmail" style="display:block;margin-top:var(--s-2)">
        Email (boleh dikosongkan — hanya dipakai kalau kami perlu bertanya balik)
      </label>
      <input id="saranEmail" class="input" type="email" autocomplete="email"
             value="${esc(email)}" placeholder="nama@email.com" style="width:100%">
    </div>
    <div class="modal__foot">
      <button class="btn btn--ghost" data-close>Batal</button>
      <button class="btn btn--primary" id="saranKirim">Kirim saran</button>
    </div>`, {
    onMount(box, close) {
      let jenis = jenisAwal;
      const isi = box.querySelector('#saranIsi');
      const tanya = box.querySelector('#saranTanya');
      const sisa = box.querySelector('#saranSisa');
      const kirim = box.querySelector('#saranKirim');

      const setJenis = id => {
        jenis = id;
        box.querySelectorAll('.saran__jenis').forEach(b => {
          const aktif = b.dataset.jenis === id;
          b.classList.toggle('btn--primary', aktif);
          b.classList.toggle('btn--ghost', !aktif);
        });
        tanya.textContent = JENIS.find(j => j.id === id).tanya;
      };
      setJenis(jenisAwal);

      isi.addEventListener('input', () => {
        sisa.textContent = `${2000 - isi.value.length} huruf tersisa`;
      });
      box.querySelectorAll('.saran__jenis')
         .forEach(b => b.addEventListener('click', () => setJenis(b.dataset.jenis)));

      kirim.addEventListener('click', async () => {
        const teks = isi.value.trim();
        /* Batas bawahnya sama dengan yang dipasang di basis data. Kalau
           hanya dijaga di sini, kiriman lewat REST langsung tetap lolos. */
        if (teks.length < 3) { toast('Tulis dulu saranmu, ya.', 'warn'); isi.focus(); return; }

        const baris = {
          jenis,
          isi: teks,
          email: box.querySelector('#saranEmail').value.trim() || null,
          bahasa: bahasaKini(),
          halaman: location.hash.slice(0, 120) || '#/',
          versi: await versiApp(),
          perangkat: perangkat(),
        };

        kirim.disabled = true;
        kirim.textContent = 'Mengirim…';
        try {
          if (!awanSiap()) throw new Error('Awan belum dikonfigurasi.');
          await kirimSatu(baris);
          toast('Terkirim. Terima kasih — tiap saran dibaca.', 'ok');
        } catch {
          /* Gagal kirim bukan alasan menghilangkan tulisan orang. */
          tulisAntre([...bacaAntre(), baris]);
          toast('Belum bisa terkirim, saranmu disimpan dan dikirim otomatis nanti.', 'warn', 4200);
        }
        close();
      });

      isi.focus();
    },
  });
  return tutup;
}
