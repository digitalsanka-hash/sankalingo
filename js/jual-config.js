/* ── Tempat membeli ───────────────────────────────────────────────

   Satu-satunya tempat alamat jualan ditulis. Layar gerbang, pesan
   "kode tidak dikenal", dan tombol "belum punya kode" semuanya
   membacanya dari sini — supaya ganti halaman checkout cukup sekali
   ubah, bukan berburu tautan di tiga berkas.

   Kosongkan (string kosong) kalau belum ada halaman jualannya: tombol
   otomatis hilang dan yang tersisa hanya keterangan bahwa kode
   diperoleh dari penjual. Aplikasi tetap jalan.                      */

export const JUAL = {
  /* Halaman checkout. Contoh: 'https://sankalingo.scalev.id/paket' */
  beli: '',
  /* Nomor WhatsApp untuk bertanya, format internasional tanpa tanda
     plus. Contoh: '6281234567890'. Kosongkan kalau belum dipakai. */
  wa: '',
  /* Ditempel jadi pesan pertama di WhatsApp. */
  waPesan: 'Halo, saya mau tanya soal kode akses SankaLingo GO.',
};

export const tautanBeli = () => JUAL.beli || '';
export const tautanWa = () => JUAL.wa
  ? `https://wa.me/${JUAL.wa}?text=${encodeURIComponent(JUAL.waPesan)}`
  : '';
