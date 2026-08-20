/* Cari kunci ganda di dalam SATU objek literal yang sama.

   Kunci ganda tidak pernah menimbulkan error — nilai terakhir diam-diam
   menimpa yang pertama, jadi satu entri data hilang tanpa jejak apa pun.

   Pemeriksaan berbasis INDENTASI tidak bisa dipakai untuk ini: di dalam
   larik objek — [{id:…}, {id:…}] — semua saudara berada di indentasi yang
   sama, sehingga setiap larik akan tampak penuh "kunci ganda". Yang
   benar-benar membedakan satu objek dari saudaranya adalah KEDALAMAN
   KURUNG, jadi berkas dipindai karakter demi karakter dengan tumpukan
   lingkup: '{' membuka lingkup objek baru, '}' menutupnya.

   Pemindainya melewati komentar, string, dan templat supaya tanda kurung
   di dalamnya tidak mengacaukan hitungan.                              */

import { readFileSync, readdirSync, statSync } from 'node:fs';

const BS = String.fromCharCode(92);   // backslash, ditulis begini supaya
                                      // aman dari alat yang menggilas escape

const spasi = c => c === ' ' || c === '\t' || c === '\n' || c === '\r';

export function kunciGanda(src) {
  const hasil = [];
  const tumpuk = [];      // {jenis:'obj'|'arr', kunci:Map}
  let i = 0, baris = 1;
  let atom = null;        // calon kunci terakhir: {teks, baris}
  const n = src.length;

  while (i < n) {
    const c = src[i];

    if (c === '\n') { baris++; i++; continue; }

    /* ── komentar ── */
    if (c === '/' && src[i + 1] === '/') { while (i < n && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) { if (src[i] === '\n') baris++; i++; }
      i += 2; continue;
    }

    /* ── string ── isinya jadi calon kunci ('nama': …) */
    if (c === "'" || c === '"') {
      const q = c; let j = i + 1, isi = '';
      while (j < n && src[j] !== q) {
        if (src[j] === BS) { isi += src[j + 1]; j += 2; continue; }
        if (src[j] === '\n') baris++;
        isi += src[j]; j++;
      }
      atom = { teks: isi, baris }; i = j + 1; continue;
    }

    /* ── templat ── isinya diabaikan, tetapi kurung di dalam ${…} dihitung */
    if (c === '`') {
      let j = i + 1, dalam = 0;
      while (j < n) {
        if (src[j] === BS) { j += 2; continue; }
        if (src[j] === '\n') baris++;
        if (src[j] === '$' && src[j + 1] === '{') { dalam++; j += 2; continue; }
        if (src[j] === '}' && dalam) { dalam--; j++; continue; }
        if (src[j] === '`' && !dalam) break;
        j++;
      }
      atom = null; i = j + 1; continue;
    }

    /* ── kurung ── */
    if (c === '{') { tumpuk.push({ jenis: 'obj', kunci: new Map(), tanya: 0 }); atom = null; i++; continue; }
    if (c === '[') { tumpuk.push({ jenis: 'arr', tanya: 0 }); atom = null; i++; continue; }
    if (c === '}' || c === ']') { tumpuk.pop(); atom = null; i++; continue; }

    /* ── tanda tanya ── pembuka ternary.
       Titik dua sesudahnya milik ternary itu, BUKAN pemisah kunci; tanpa
       ini `v ? v.title : 'x'` terbaca sebagai kunci `title` dan tiap
       ternary di dalam objek dilaporkan sebagai kunci ganda palsu.
       `?.` (rantai opsional) dan `??` bukan ternary. */
    if (c === '?') {
      if (src[i + 1] === '.' || src[i + 1] === '?') { atom = null; i += 2; continue; }
      const top = tumpuk[tumpuk.length - 1];
      if (top) top.tanya++;
      atom = null; i++; continue;
    }

    /* pemisah membatalkan calon kunci */
    if (c === ',' || c === ';') { atom = null; i++; continue; }

    /* ── titik dua ── kalau lingkup teratas objek dan ada atom, itu kunci */
    if (c === ':') {
      const top = tumpuk[tumpuk.length - 1];
      if (top && top.tanya > 0) { top.tanya--; atom = null; i++; continue; }
      if (top && top.jenis === 'obj' && atom) {
        const lama = top.kunci.get(atom.teks);
        if (lama !== undefined) hasil.push({ kunci: atom.teks, pertama: lama, kedua: atom.baris });
        else top.kunci.set(atom.teks, atom.baris);
      }
      atom = null; i++; continue;
    }

    /* pengenal / angka */
    if (/[A-Za-z0-9_$]/.test(c)) {
      let j = i; while (j < n && /[A-Za-z0-9_$]/.test(src[j])) j++;
      atom = { teks: src.slice(i, j), baris }; i = j; continue;
    }

    if (!spasi(c)) atom = null;
    i++;
  }
  return hasil;
}

/* ── jalan mandiri ── */
if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`
    || process.argv[1].endsWith('audit-kunci-ganda.mjs')) {
  const akar = process.argv[2] || 'data';
  const files = [];
  (function w(d) {
    for (const e of readdirSync(d)) {
      const p = d + '/' + e;
      statSync(p).isDirectory() ? w(p) : (e.endsWith('.js') && files.push(p));
    }
  })(akar);

  let total = 0;
  for (const f of files) {
    const d = kunciGanda(readFileSync(f, 'utf8'));
    if (!d.length) continue;
    console.log(f);
    d.forEach(x => console.log(`    '${x.kunci}'  baris ${x.pertama} lalu ${x.kedua}`));
    total += d.length;
  }
  console.log(total
    ? `\nKUNCI GANDA: ${total}`
    : `Bersih — ${files.length} berkas dipindai, tidak ada kunci ganda.`);
  process.exit(total ? 1 : 0);
}
