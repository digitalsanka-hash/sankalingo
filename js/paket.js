/* ── Dua paket ────────────────────────────────────────────────────

   Esensi  — lima bahasa: Inggris, Jepang, Korea, Mandarin, Arab.
   Lengkap — sembilan: ditambah Jerman, Prancis, Spanyol, Rusia.

   Daftar ini satu-satunya tempat pembagiannya ditulis. Halaman jualan,
   panel admin, pengalih bahasa, dan penjaga rute semuanya membacanya
   dari sini — karena kalau isi paket ditulis ulang di empat tempat,
   satu di antaranya pasti tertinggal waktu isinya berubah, dan yang
   tertinggal itu yang akan dilihat pembeli.

   PENTING soal bawaan. Siapa pun yang tidak punya keterangan paket
   diperlakukan sebagai 'lengkap', bukan 'esensi'. Kolom paketnya baru
   ditambahkan belakangan, jadi profil yang sudah ada tidak menyebut
   apa pun — dan mereka membeli ketika aplikasi memang memberi sembilan
   bahasa. Menebak 'esensi' berarti diam-diam mencabut empat bahasa
   dari orang yang sudah membayarnya.                                 */

export const ESENSI = ['en', 'ja', 'ko', 'zh', 'ar'];
export const TAMBAHAN = ['de', 'fr', 'es', 'ru'];

export const NAMA_PAKET = {
  esensi:  { label: 'Esensi',  jumlah: 5, harga: 'Rp149.000' },
  lengkap: { label: 'Lengkap', jumlah: 9, harga: 'Rp199.000' },
};

/** Tautan checkout khusus naik paket dari Esensi ke Lengkap. */
export const TAUTAN_UPGRADE = 'https://digital-store-27.myscalev.com/upgradekefullbahasa';

/** Paket seseorang, dengan bawaan yang aman. */
export const paketDari = (profil) =>
  profil?.paket === 'esensi' ? 'esensi' : 'lengkap';

/** Bahasa ini boleh dibuka dengan paket itu? */
export const bolehBahasa = (kode, paket) =>
  paket !== 'esensi' || ESENSI.includes(kode);

/** Bahasa yang terkunci untuk paket itu. Kosong berarti tidak ada. */
export const bahasaTerkunci = (paket) =>
  paket === 'esensi' ? [...TAMBAHAN] : [];

/* ── Paket pemakai saat ini ───────────────────────────────────────

   Disimpan sebagai nilai biasa, bukan dibaca ulang tiap kali, karena
   penjaga rute berjalan SERENTAK: ia harus memutuskan sebelum modul
   bahasanya dimuat, dan menunggu jawaban jaringan di titik itu membuat
   layar berkedip ke bahasa yang sebentar lagi ditolak.

   Diisi js/gerbang.js sesudah profil dibaca — termasuk dari catatan
   luring, supaya pembatasannya tetap benar tanpa internet.           */
let sekarang = 'lengkap';
export const setPaketSaya = (p) => { sekarang = p === 'esensi' ? 'esensi' : 'lengkap'; };
export const paketSaya = () => sekarang;
