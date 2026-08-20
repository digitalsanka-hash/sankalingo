/* ── Pemeriksa kerangka luring ────────────────────────────────────
   Dijalankan: node tools/audit-luring.mjs
   Menulis ulang daftarnya: node tools/audit-luring.mjs --tulis

   Latar belakangnya satu kegagalan nyata: aplikasi tersangkut di layar
   "Menyiapkan laboratorium…" tanpa pesan apa pun, karena berkas yang
   DIIMPOR SECARA STATIS oleh js/app.js tidak ada di daftar KERANGKA
   sw.js. Impor statis tidak punya jalan mundur — satu berkas gagal
   diambil berarti SELURUH grafik modul gagal dan boot() tidak pernah
   dipanggil.

   Aturannya karena itu sederhana dan mutlak:

     apa pun yang bisa dicapai lewat rantai impor statis dari
     js/app.js WAJIB ada di KERANGKA.

   Daftar yang dijaga dengan tangan pasti melenceng — tiap modul baru
   menambah satu kesempatan lupa. Alat ini menelusuri rantainya sendiri
   lalu membandingkannya dengan sw.js, jadi kelupaan itu ketahuan mesin,
   bukan oleh pemakai yang layarnya diam.

   Impor DINAMIS (import() di dalam fungsi) sengaja tidak ikut: ia punya
   jalan mundur dan boleh diambil belakangan.                          */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve, relative, posix } from 'node:path';

const akar = join(dirname(fileURLToPath(import.meta.url)), '..');
const P = p => join(akar, p);
const tulis = process.argv.includes('--tulis');

/* ── Telusuri rantai impor statis ───────────────────────────────── */
/* Hanya "import … from '…'" dan "export … from '…'" di awal baris —
   import() dinamis di dalam fungsi tidak cocok dengan pola ini. */
const POLA = /^\s*(?:import|export)[^'"]*?from\s*['"]([^'"]+)['"]/gm;
const POLA_POLOS = /^\s*import\s*['"]([^'"]+)['"]/gm;

const terlihat = new Set();
function telusuri(berkasAbs) {
  const rel = posix.join(...relative(akar, berkasAbs).split(/[\\/]/));
  if (terlihat.has(rel)) return;
  terlihat.add(rel);
  if (!existsSync(berkasAbs)) return;
  const isi = readFileSync(berkasAbs, 'utf8');
  for (const pola of [POLA, POLA_POLOS]) {
    pola.lastIndex = 0;
    let m;
    while ((m = pola.exec(isi))) {
      const spec = m[1];
      if (!spec.startsWith('.')) continue;          /* modul luar — tidak ada */
      telusuri(resolve(dirname(berkasAbs), spec));
    }
  }
}
telusuri(P('js/app.js'));

/* Berkas yang bukan modul tapi tetap wajib ada sebelum aplikasi tampil. */
const BUKAN_MODUL = [
  './', './index.html', './manifest.webmanifest',
  './assets/css/tokens.css', './assets/css/base.css',
  './assets/css/components.css', './assets/css/views.css',
  './assets/css/comfort.css',
  './assets/icon-192.svg', './assets/icon-512.svg',
  './assets/merek/maskot-kepala.svg', './assets/merek/maskot.svg',
];

const wajib = [...BUKAN_MODUL, ...[...terlihat].sort().map(p => './' + p)];

/* ── Skrip sebaris di index.html harus sah sintaksnya ───────────── */
/* Penjaga boot sengaja ditulis sebagai skrip biasa, bukan modul, supaya
   ia tetap jalan justru saat modulnya gagal. Tapi itu berarti tidak ada
   yang memeriksanya: satu salah ketik membuatnya diam, dan yang hilang
   justru satu-satunya pesan yang akan dilihat pemakai saat aplikasi
   gagal terbuka.

   Sudah pernah terjadi: sebuah alat penyunting meruntuhkan urutan
   backslash-n menjadi baris baru sungguhan di tengah string, penjaganya
   mati sintaks, dan layarnya kembali diam tanpa jejak. Karena itu
   diperiksa di sini. */
const html = readFileSync(P('index.html'), 'utf8');
const skripRusak = [];
{
  const pola = /<script>([\s\S]*?)<\/script>/g;
  let m, n = 0;
  while ((m = pola.exec(html))) {
    n++;
    try { new Function(m[1]); }
    catch (e) { skripRusak.push(`skrip sebaris #${n}: ${e.message}`); }
  }
}

/* ── Bandingkan dengan KERANGKA di sw.js ────────────────────────── */
const sw = readFileSync(P('sw.js'), 'utf8');
const blok = sw.match(/const KERANGKA = \[([\s\S]*?)\n\];/);
if (!blok) { console.error('KERANGKA tidak ditemukan di sw.js'); process.exit(2); }
const punya = new Set([...blok[1].matchAll(/'([^']+)'/g)].map(m => m[1]));

const kurang = wajib.filter(f => !punya.has(f));
const lebih  = [...punya].filter(f => !wajib.includes(f));
const hilangDiDisk = wajib.filter(f => !existsSync(P(f.replace('./', ''))) && f !== './');

if (tulis && kurang.length) {
  const daftar = wajib.map(f => `  '${f}',`).join('\n').replace(/,$/, '');
  const baru = sw.replace(/const KERANGKA = \[[\s\S]*?\n\];/,
    `const KERANGKA = [\n${daftar}\n];`);
  writeFileSync(P('sw.js'), baru);
  console.log(`sw.js ditulis ulang — ${wajib.length} berkas di kerangka.`);
  process.exit(0);
}

console.log(`Modul terjangkau impor statis dari js/app.js : ${terlihat.size}`);
console.log(`Berkas wajib di kerangka (termasuk css/aset)  : ${wajib.length}`);
console.log(`Tercantum di sw.js                            : ${punya.size}`);

if (hilangDiDisk.length) {
  console.log(`\n✗ ${hilangDiDisk.length} berkas dirujuk tapi tidak ada di disk:`);
  for (const f of hilangDiDisk) console.log('   ' + f);
}
if (kurang.length) {
  console.log(`\n✗ ${kurang.length} berkas WAJIB tapi belum ada di KERANGKA:`);
  for (const f of kurang) console.log('   ' + f);
  console.log('\n   Tanpa ini, aplikasi berhenti di layar boot begitu jaringan mati.');
  console.log('   Perbaiki: node tools/audit-luring.mjs --tulis');
}
if (lebih.length) {
  console.log(`\n· ${lebih.length} berkas di kerangka yang tidak wajib (boleh, sekadar catatan):`);
  for (const f of lebih.slice(0, 10)) console.log('   ' + f);
}
if (skripRusak.length) {
  console.log('\n✗ skrip sebaris di index.html tidak sah:');
  for (const r of skripRusak) console.log('   ' + r);
  console.log('   Penjaga boot yang rusak = pesan gagal tidak pernah muncul.');
}
if (!kurang.length && !hilangDiDisk.length && !skripRusak.length)
  console.log('\n  kerangka lengkap · skrip sebaris sah');

process.exit(kurang.length + hilangDiDisk.length + skripRusak.length ? 1 : 0);
