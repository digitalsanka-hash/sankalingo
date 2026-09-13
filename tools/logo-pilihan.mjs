/* Tujuh usulan logo SankaLingo GO.

   Semuanya dibangun dari bentuk geometris — lingkaran, busur, persegi
   membulat, garis bersudut — bukan kurva tangan bebas. Alasannya bukan
   selera: logo dipakai sebesar 512 piksel di layar muka ponsel dan
   sekecil 32 piksel di tab peramban, dan bentuk geometris tetap tajam
   di kedua ujung itu sementara kurva halus berubah jadi bubur.

   Tiap logo dipakai di dua tempat yang latarnya berlawanan — aplikasi
   bergelap malam, tetapi ikon PWA sering duduk di atas latar terang
   buatan sistem. Jadi tiap usulan digambar dua kali: sebagai lencana
   (punya latar sendiri, aman di mana pun) dan sebagai tanda telanjang
   (mengambil warna dari sekitarnya).

   Jalankan:  node tools/logo-pilihan.mjs
   Keluaran:  assets/merek/pilihan/*.svg  dan  output/logo/banding.png  */

import { writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const KELUAR_SVG = join(AKAR, 'assets', 'merek', 'pilihan');
const KELUAR_PNG = join(AKAR, 'output', 'logo');
const SEMENTARA = join(KELUAR_PNG, '_render');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const W = {
  api: '#ff4b1f', api2: '#ff7a4d', emas: '#ffc531',
  malam: '#0a0f1f', malam2: '#111a33', teks: '#f3f6ff', kabut: '#9aabcd',
};

/* Lencana: persegi membulat berlatar gelap, ukuran aman untuk ikon. */
const lencana = (isi, id) => `
  <defs>
    <linearGradient id="bg${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${W.malam2}"/><stop offset="1" stop-color="${W.malam}"/>
    </linearGradient>
    <linearGradient id="api${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${W.api}"/><stop offset="1" stop-color="${W.emas}"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="120" height="120" rx="27" fill="url(#bg${id})"/>
  ${isi}`;

/* ── 1 · Monogram S ───────────────────────────────────────────────
   Satu huruf, dua busur. Paling aman dan paling cepat dikenali waktu
   kecil; mengandalkan nama, bukan cerita. */
const satu = lencana(`
  <path d="M74 33 A16 16 0 1 0 60 60 A16 16 0 1 1 46 87"
        fill="none" stroke="url(#api1)" stroke-width="13" stroke-linecap="round"/>`, 1);

/* ── 2 · Gelembung bicara ─────────────────────────────────────────
   Lambang percakapan yang dipahami tanpa penjelasan di semua budaya.
   Tiga titik = sedang mengetik, jadi geraknya terbaca walau diam. */
const dua = lencana(`
  <path d="M26 32h68a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H58l-18 16v-16h-14a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12z"
        fill="url(#api2)"/>
  <circle cx="44" cy="59" r="6" fill="${W.malam}"/>
  <circle cx="60" cy="59" r="6" fill="${W.malam}"/>
  <circle cx="76" cy="59" r="6" fill="${W.malam}"/>`, 2);

/* ── 3 · Tarsi, disederhanakan ────────────────────────────────────
   Maskot yang ada sekarang dipangkas sampai tinggal yang benar-benar
   menandainya: sepasang mata raksasa. Bulu, paruh, dan senyumnya
   dibuang karena tiga hal itu yang membuatnya terbaca sebagai kartun. */
/* Telinga digambar BULAT DI SISI kepala, bukan jambul di atasnya.
   Jambul adalah penanda burung hantu, dan README merek ini menolak
   burung hantu sejak awal justru supaya tidak dibandingkan dengan Duo.
   Tarsius bertelinga kecil membulat di samping — dan kepalanya lebih
   jangkung daripada bundar, itu yang membedakan siluetnya. */
const tiga = lencana(`
  <ellipse cx="27" cy="58" rx="8" ry="10" fill="${W.api2}"/>
  <ellipse cx="93" cy="58" rx="8" ry="10" fill="${W.api2}"/>
  <path d="M60 20c20 0 31 16 31 37 0 24-14 41-31 41S29 81 29 57c0-21 11-37 31-37z" fill="url(#api3)"/>
  <circle cx="45" cy="53" r="15" fill="${W.malam}"/>
  <circle cx="75" cy="53" r="15" fill="${W.malam}"/>
  <circle cx="45" cy="53" r="6.5" fill="${W.emas}"/>
  <circle cx="75" cy="53" r="6.5" fill="${W.emas}"/>
  <path d="M55 80c3 3 7 3 10 0" fill="none" stroke="${W.malam}"
        stroke-width="3.4" stroke-linecap="round" opacity=".55"/>`, 3);

/* ── 4 · Cincin sembilan ──────────────────────────────────────────
   Sembilan ruas mengelilingi lingkaran, lima menyala. Angkanya bukan
   hiasan: lima bahasa paket Esensi, sembilan paket Lengkap. Satu-
   satunya usulan yang menyimpan isi produk di dalam bentuknya. */
const ruasCincin = () => {
  const buah = [];
  for (let i = 0; i < 9; i++) {
    const a0 = (i * 40 - 90 + 4) * Math.PI / 180;
    const a1 = ((i + 1) * 40 - 90 - 4) * Math.PI / 180;
    const R = 38, c = 60;
    const x0 = c + R * Math.cos(a0), y0 = c + R * Math.sin(a0);
    const x1 = c + R * Math.cos(a1), y1 = c + R * Math.sin(a1);
    buah.push(`<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}"
      fill="none" stroke="${i < 5 ? W.api : W.kabut}" stroke-opacity="${i < 5 ? 1 : .32}"
      stroke-width="11" stroke-linecap="round"/>`);
  }
  return buah.join('\n  ');
};
const empat = lencana(`
  ${ruasCincin()}
  <circle cx="60" cy="60" r="13" fill="${W.emas}"/>`, 4);

/* ── 5 · Panah GO ─────────────────────────────────────────────────
   Dua sudut maju. Paling banyak gerak dari semuanya, dan satu-satunya
   yang berbicara soal "GO" pada namanya, bukan soal bahasa. */
const lima = lencana(`
  <path d="M40 34 L66 60 L40 86" fill="none" stroke="url(#api5)" stroke-width="13"
        stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M70 34 L96 60 L70 86" fill="none" stroke="${W.emas}" stroke-opacity=".42"
        stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>`, 5);

/* ── 6 · Kisi aksara ──────────────────────────────────────────────
   Sembilan petak, satu menyala. Membaca sebagai papan huruf — dekat
   ke tabel hiragana dan hangeul yang memang dipakai di dalam aplikasi. */
const kisi = () => {
  const p = [];
  const isi = [0, 4, 8, 2];          // diagonal + satu, supaya tidak simetris mati
  for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) {
    const i = r * 3 + k;
    const x = 26 + k * 24, y = 26 + r * 24;
    const nyala = isi.includes(i);
    p.push(`<rect x="${x}" y="${y}" width="20" height="20" rx="6"
      fill="${nyala ? (i === 4 ? W.emas : W.api) : W.kabut}"
      fill-opacity="${nyala ? 1 : .22}"/>`);
  }
  return p.join('\n  ');
};
const enam = lencana(`  ${kisi()}`, 6);

/* ── 7 · Gelembung berhuruf S ─────────────────────────────────────
   Ruang kosong di dalam gelembung membentuk S. Yang paling banyak
   dilihat dua kali — dan satu-satunya yang membawa nama sekaligus
   lambang percakapan dalam satu bentuk. */
const tujuh = lencana(`
  <path d="M28 30h64a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12H62l-20 16v-16H28a12 12 0 0 1-12-12V42a12 12 0 0 1 12-12z"
        fill="url(#api7)"/>
  <path d="M72 46 A12 12 0 1 0 60 64 A12 12 0 1 1 48 82"
        fill="none" stroke="${W.malam}" stroke-width="10" stroke-linecap="round"/>`, 7);

const LOGO = [
  { id: 1, nama: 'Monogram S', svg: satu,
    kata: 'Satu huruf, dua busur. Paling cepat dikenali waktu kecil.' },
  { id: 2, nama: 'Gelembung bicara', svg: dua,
    kata: 'Lambang percakapan yang dipahami tanpa penjelasan.' },
  { id: 3, nama: 'Tarsi disederhanakan', svg: tiga,
    kata: 'Maskot sekarang, dipangkas sampai tinggal sepasang matanya.' },
  { id: 4, nama: 'Cincin sembilan', svg: empat,
    kata: 'Sembilan ruas, lima menyala. Isi produk ada di dalam bentuknya.' },
  { id: 5, nama: 'Panah GO', svg: lima,
    kata: 'Dua sudut maju. Bicara soal "GO", bukan soal bahasa.' },
  { id: 6, nama: 'Kisi aksara', svg: enam,
    kata: 'Sembilan petak — dekat ke papan hiragana dan hangeul.' },
  { id: 7, nama: 'Gelembung berhuruf S', svg: tujuh,
    kata: 'Ruang kosongnya membentuk S. Nama dan percakapan sekaligus.' },
];

const bungkus = (isi) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">${isi}</svg>`;

mkdirSync(KELUAR_SVG, { recursive: true });
mkdirSync(SEMENTARA, { recursive: true });
for (const l of LOGO) writeFileSync(join(KELUAR_SVG, `logo-${l.id}.svg`), bungkus(l.svg), 'utf8');
console.log(`${LOGO.length} berkas SVG ditulis ke assets/merek/pilihan/`);

/* ── Lembar banding ───────────────────────────────────────────────
   Tiap usulan ditampilkan pada empat ukuran sekaligus, karena logo
   yang bagus di 96 piksel sering hancur di 28 — dan 28 itulah yang
   dilihat orang di tab peramban. */
const baris = (l) => `
  <tr>
    <td class="no">${l.id}</td>
    <td class="uji">
      <svg viewBox="0 0 120 120" width="96" height="96">${l.svg}</svg>
      <svg viewBox="0 0 120 120" width="56" height="56">${l.svg}</svg>
      <svg viewBox="0 0 120 120" width="36" height="36">${l.svg}</svg>
      <svg viewBox="0 0 120 120" width="28" height="28">${l.svg}</svg>
    </td>
    <td class="kunci">
      <div class="lockup">
        <svg viewBox="0 0 120 120" width="42" height="42">${l.svg}</svg>
        <span>SankaLingo <b>GO</b></span>
      </div>
      <div class="lockup terang">
        <svg viewBox="0 0 120 120" width="42" height="42">${l.svg}</svg>
        <span>SankaLingo <b>GO</b></span>
      </div>
    </td>
    <td class="ket"><b>${l.nama}</b><span>${l.kata}</span></td>
  </tr>`;

const html = `<!doctype html><html lang="id"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;800&display=swap">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1500px;background:${W.malam};color:${W.teks};font-family:Inter,sans-serif;padding:46px 40px}
  h1{font-family:Anton,sans-serif;font-size:40px;text-transform:uppercase;letter-spacing:.01em}
  .sub{color:${W.kabut};font-size:17px;margin:10px 0 32px;max-width:1000px;line-height:1.5}
  table{width:100%;border-collapse:collapse}
  th{text-align:left;font-size:13px;letter-spacing:.15em;text-transform:uppercase;color:${W.kabut};
     padding:0 16px 14px;font-weight:600}
  td{padding:22px 16px;border-top:1px solid #24334f;vertical-align:middle}
  .no{font-family:Anton,sans-serif;font-size:34px;color:${W.api};width:52px}
  .uji{display:flex;align-items:center;gap:22px;width:290px}
  .kunci{width:430px}
  .lockup{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:${W.malam2}}
  .lockup + .lockup{margin-top:10px}
  .lockup span{font-family:Anton,sans-serif;font-size:23px}
  .lockup b{color:${W.api2};font-weight:400}
  .terang{background:#f3f6ff}
  .terang span{color:#0a0f1f}
  .ket b{display:block;font-size:19px;margin-bottom:5px}
  .ket span{color:${W.kabut};font-size:15px;line-height:1.5}
</style></head><body>
<h1>Tujuh usulan logo — SankaLingo GO</h1>
<p class="sub">Tiap usulan diuji pada empat ukuran sekaligus: 96, 56, 36, dan 28 piksel.
Yang 28 itu ukuran sebenarnya di tab peramban, dan di situlah kebanyakan logo gugur.
Kolom ketiga menunjukkan bentuk terpakainya di latar gelap dan latar terang.</p>
<table>
  <thead><tr><th></th><th>96 · 56 · 36 · 28 piksel</th><th>Bentuk terpakai</th><th>Gagasan</th></tr></thead>
  <tbody>${LOGO.map(baris).join('')}</tbody>
</table>
</body></html>`;

const berkasHtml = join(SEMENTARA, 'banding.html');
writeFileSync(berkasHtml, html, 'utf8');

mkdirSync(KELUAR_PNG, { recursive: true });
execFileSync(CHROME, [
  `--user-data-dir=${join(SEMENTARA, '_profil')}`,
  '--headless=old', '--disable-gpu', '--hide-scrollbars',
  '--window-size=1500,1560', '--virtual-time-budget=9000',
  `--screenshot=${join(KELUAR_PNG, 'banding.png')}`,
  pathToFileURL(berkasHtml).href,
], { stdio: 'ignore' });

console.log('lembar banding → output/logo/banding.png');
