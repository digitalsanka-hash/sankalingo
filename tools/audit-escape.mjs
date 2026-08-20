/* ── Cari teks materi yang bisa rusak saat digambar ────────────────
   Tag `html` di js/ui.js SENGAJA tidak meng-escape apa pun: banyak view
   menyisipkan potongan markup buatan sendiri lewat ${}. Konsekuensinya,
   setiap string MATERI yang memuat  <  atau  >  atau entitas seperti
   &nbsp; akan ditelan sebagai markup — teksnya hilang dari layar, tanpa
   error apa pun di konsol.

   Ini nyata untuk aplikasi bahasa: rumus tata bahasa sering ditulis
   "S + V2 + O <-> S + didn't + V1", dan panah <-> itu cukup untuk
   memakan sisa kalimat.

   Alat ini hanya MENDAFTAR string materi yang berisiko. Menentukan
   apakah string tertentu sudah lewat esc() perlu penelusuran alur yang
   tidak bisa dipercaya secara statis, jadi keputusannya dibaca manusia. */

import { readFileSync, readdirSync, statSync } from 'node:fs';

const BS = String.fromCharCode(92);

/* String literal berkutip tunggal/ganda, escape ikut dilewati. */
const RE_STR = new RegExp(
  "'((?:[^'" + BS + BS + "]|" + BS + BS + ".)*)'" + '|' +
  '"((?:[^"' + BS + BS + "]|" + BS + BS + '.)*)"', 'g');

const RE_ENTITAS = /&[a-zA-Z#][a-zA-Z0-9]{1,8};/;
const RE_KOMENTAR = /^\s*(\/\/|\*|\/\*)/;

const files = [];
(function w(d) {
  for (const e of readdirSync(d)) {
    const p = d + '/' + e;
    statSync(p).isDirectory() ? w(p) : (e.endsWith('.js') && files.push(p));
  }
})(process.argv[2] || 'data');

const hit = [];
for (const f of files) {
  readFileSync(f, 'utf8').split('\n').forEach((b, i) => {
    if (RE_KOMENTAR.test(b)) return;
    RE_STR.lastIndex = 0;
    for (const m of b.matchAll(RE_STR)) {
      const s = m[1] ?? m[2];
      if (!s) continue;
      if (/[<>]/.test(s) || RE_ENTITAS.test(s)) hit.push([f, i + 1, s]);
    }
  });
}

const perf = new Map();
hit.forEach(([f]) => perf.set(f, (perf.get(f) || 0) + 1));

console.log(`string materi berisi < > atau entitas &  :  ${hit.length} di ${perf.size} berkas\n`);
[...perf].sort((a, b) => b[1] - a[1]).forEach(([f, n]) => console.log(`  ${String(n).padStart(4)}  ${f}`));
if (hit.length) {
  console.log('\n=== semua kemunculan ===');
  hit.forEach(([f, l, s]) => console.log(`  ${f}:${l}  |  ${s.length > 90 ? s.slice(0, 90) + '…' : s}`));
}
