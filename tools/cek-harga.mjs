/* Pemeriksa harga — menjaga dua paket tidak tertukar.

   Ada satu kesalahan yang sudah pernah lolos ke halaman jualan DAN ke
   tiga kreatif iklan sekaligus: harga paket LIMA bahasa dipasangkan
   dengan janji SEMBILAN bahasa. Mata tidak menangkapnya karena kedua
   angkanya sama-sama masuk akal; yang salah cuma pasangannya.

   Berkas ini jadi satu-satunya tempat harga ditulis. Jalankan sesudah
   mengubah harga di mana pun:

     node tools/cek-harga.mjs

   Keluar dengan kode 1 kalau ada yang tidak cocok.                    */

import { readFileSync, existsSync } from 'node:fs';

export const HARGA = {
  lima:     { rp: 'Rp149.000', perBahasa: 'Rp30.000', jumlah: 5 },
  sembilan: { rp: 'Rp199.000', perBahasa: 'Rp22.000', jumlah: 9 },
};
/* Selisih paket, dipakai di tombol "hemat" dan tawaran naik kelas. */
export const SELISIH = 'Rp50.000';

const BERKAS = [
  'lp/index.html',
  'iklan/1-nama.html', 'iklan/2-investasi.html', 'iklan/3-tersaring.html',
  'iklan/VOICE-OVER.md',
  'konten/template.mjs',
  'konten/pekan1.mjs', 'konten/pekan2.mjs', 'konten/pekan3.mjs',
  'konten/pekan4.mjs', 'konten/pekan5.mjs',
  'output/BIO-IG.md', 'output/iklan/SETUP-ADS.md',
];

/* Harga lama tidak boleh tersisa di mana pun. */
const USANG = ['Rp299.000', 'Rp199rb', 'Rp40.000 per bahasa', 'Rp33.000 per bahasa',
               'dua ratus sembilan puluh sembilan ribu', 'empat puluh ribu per bahasa'];

/* Sebutan sembilan bahasa; kalau salah satunya muncul di baris yang
   juga memuat harga, harganya wajib harga paket sembilan. */
const SEMBILAN = /\b(sembilan bahasa|9 bahasa|semua(nya)? bahasa)\b/i;
const LIMA = /\b(lima bahasa|5 bahasa|paket esensi|esensi)\b/i;

let cacat = 0;

for (const jalur of BERKAS) {
  if (!existsSync(jalur)) { console.error(`HILANG: ${jalur}`); cacat++; continue; }
  const baris = readFileSync(jalur, 'utf8').split(/\r?\n/);
  const temuan = [];

  baris.forEach((b, i) => {
    const no = i + 1;

    for (const u of USANG) {
      if (b.includes(u)) temuan.push(`${no}: harga lama tersisa — "${u}"`);
    }

    const adaLima = b.includes(HARGA.lima.rp);
    const adaSembilan = b.includes(HARGA.sembilan.rp);

    /* Baris yang menyebut sembilan bahasa dan memasang harga paket lima,
       tanpa menyebut paket lima juga (baris pembanding sah memuat dua). */
    if (adaLima && !adaSembilan && SEMBILAN.test(b) && !LIMA.test(b)) {
      temuan.push(`${no}: janji sembilan bahasa dengan harga paket lima (${HARGA.lima.rp}) — ${b.trim().slice(0, 78)}`);
    }
    /* Kebalikannya: harga sembilan dipasang pada janji lima bahasa. */
    if (adaSembilan && !adaLima && LIMA.test(b) && !SEMBILAN.test(b)) {
      temuan.push(`${no}: janji lima bahasa dengan harga paket sembilan (${HARGA.sembilan.rp}) — ${b.trim().slice(0, 78)}`);
    }
    /* Per-bahasa harus ikut paketnya. */
    if (b.includes(HARGA.lima.perBahasa) && SEMBILAN.test(b) && !LIMA.test(b)) {
      temuan.push(`${no}: per-bahasa paket lima (${HARGA.lima.perBahasa}) pada janji sembilan bahasa`);
    }
    if (b.includes(HARGA.sembilan.perBahasa) && LIMA.test(b) && !SEMBILAN.test(b)) {
      temuan.push(`${no}: per-bahasa paket sembilan (${HARGA.sembilan.perBahasa}) pada janji lima bahasa`);
    }
  });

  if (temuan.length) {
    cacat++;
    console.log(`\n${jalur}: ${temuan.length} temuan`);
    temuan.forEach(t => console.log('  · ' + t));
  } else {
    console.log(`OK  ${jalur}`);
  }
}

console.log(`\nHarga berlaku: lima ${HARGA.lima.rp} (≈${HARGA.lima.perBahasa}/bahasa) · ` +
            `sembilan ${HARGA.sembilan.rp} (≈${HARGA.sembilan.perBahasa}/bahasa) · selisih ${SELISIH}`);
console.log(`${BERKAS.length} berkas diperiksa, ${cacat} bermasalah.`);
process.exit(cacat ? 1 : 0);
