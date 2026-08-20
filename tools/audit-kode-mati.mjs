/* ── Cari fungsi yang diekspor tetapi tidak pernah terjangkau ──────
   Dijalankan: node tools/audit-kode-mati.mjs

   Kode mati di aplikasi ini bukan sekadar berantakan — ia MENYESATKAN.
   js/views/lang.js pernah berisi 440 baris halaman bahasa yang sudah
   digantikan langpages.js. Tautannya masih memakai bentuk rute lama
   (#/script/<kode>/<id>), sehingga audit tautan melaporkan "tombol utama
   tiap bahasa rusak" padahal tak seorang pun bisa menekannya.

   Menghitungnya perlu hati-hati. Dua cara naif keduanya salah:

     · Hanya menghitung `import { nama }` — melewatkan pemakaian di dalam
       berkasnya sendiri, sehingga checkWriting() yang dipanggil sebaris
       di bawahnya dilaporkan mati.
     · Menghitung nama telanjang saja (menolak yang didahului titik) —
       melewatkan `import * as LP` lalu `LP.scriptIndex(...)`, yaitu cara
       app.js memanggil HAMPIR SEMUA view. Sekali coba, cara ini
       melaporkan 48 fungsi mati; hampir semuanya hidup.

   Jadi alias namespace dipetakan dulu ke berkas tujuannya, dan `X.nama`
   hanya dihitung sebagai pemakaian `nama` kalau X memang alias untuk
   berkas yang mengekspornya.                                          */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, resolve, relative } from 'node:path';

const files = [];
(function w(d) {
  for (const e of readdirSync(d)) {
    if (e === 'node_modules' || e === '.git') continue;
    const p = d + '/' + e;
    statSync(p).isDirectory() ? w(p) : (e.endsWith('.js') && files.push(p));
  }
})(process.argv[2] || 'js');

const src = files.map(f => [resolve(f), readFileSync(f, 'utf8')]);

/* nama yang diekspor tiap berkas */
const ekspor = new Map();          // jalurMutlak -> [nama…]
for (const [f, s] of src) {
  const daftar = [];
  for (const m of s.matchAll(/export\s+(?:async\s+)?(?:function|const|let|class)\s+([A-Za-z0-9_]+)/g))
    daftar.push(m[1]);
  ekspor.set(f, daftar);
}

/* pemakaian: nama telanjang di berkas mana pun */
const pakaiTelanjang = new Map();  // nama -> jumlah
const tambah = (n, j = 1) => pakaiTelanjang.set(n, (pakaiTelanjang.get(n) || 0) + j);

const semuaNama = new Set([...ekspor.values()].flat());
for (const n of semuaNama) {
  const re = new RegExp('(?<![A-Za-z0-9_.])' + n + '(?![A-Za-z0-9_])', 'g');
  let total = 0;
  for (const [, s] of src) total += (s.match(re) || []).length;
  tambah(n, total);
}

/* pemakaian lewat alias namespace: import * as X from './y.js'  →  X.nama */
const lewatAlias = new Set();      // "jalur|nama"
for (const [f, s] of src) {
  for (const m of s.matchAll(/import\s*\*\s*as\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g)) {
    const alias = m[1];
    const tujuan = resolve(dirname(f), m[2]);
    const punya = ekspor.get(tujuan);
    if (!punya) continue;
    for (const n of punya) {
      const re = new RegExp('(?<![A-Za-z0-9_.])' + alias + '\\s*\\.\\s*' + n + '(?![A-Za-z0-9_])', 'g');
      if (re.test(s)) lewatAlias.add(tujuan + '|' + n);
    }
  }
}

/* Jaring pengaman terakhir: modul yang diambil lewat import() DINAMIS
   tidak punya alias yang bisa dipetakan secara statis — app.js memanggil
   halaman kanji sebagai `jalankan(await import('./views/kanji.js'))`,
   lalu `K.kanjiIndex(...)` di dalam callback, dengan K berupa parameter
   biasa. Karena itu, nama yang muncul sesudah TITIK di mana pun tidak
   dituduh mati. Ini memang bisa melewatkan kode mati yang namanya
   kebetulan sama dengan properti lain, tetapi lebih baik melewatkan
   daripada menuduh — tuduhan palsu persis yang membuat dua percobaan
   sebelumnya tidak terpakai. */
const pakaiTitik = new Set();
for (const n of semuaNama) {
  const re = new RegExp('\\.\\s*' + n + '(?![A-Za-z0-9_])');
  for (const [, s] of src) if (re.test(s)) { pakaiTitik.add(n); break; }
}

const mati = [];
for (const [f, daftar] of ekspor)
  for (const n of daftar) {
    /* satu kemunculan telanjang = deklarasinya sendiri */
    if ((pakaiTelanjang.get(n) || 0) > 1) continue;
    if (lewatAlias.has(f + '|' + n)) continue;
    if (pakaiTitik.has(n)) continue;
    mati.push([relative('.', f), n]);
  }

console.log(`ekspor diperiksa: ${[...ekspor.values()].flat().length}`);
console.log(`dipakai lewat alias namespace: ${lewatAlias.size}`);
console.log(mati.length
  ? `\n=== TIDAK TERJANGKAU: ${mati.length} ===`
  : '\nSemua ekspor terjangkau.');
mati.forEach(([f, n]) => console.log('  ' + n.padEnd(22) + f));
