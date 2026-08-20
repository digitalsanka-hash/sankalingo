/* Isi romanisasi yang kosong pada contoh kalimat tata bahasa.

   Memakai mesin alih aksara aplikasi sendiri (js/translit.js) — mesin yang
   sudah terbukti menutup 100% materi untuk ko, ru, ar, ja, dan zh. Jadi
   romanisasinya konsisten dengan yang dipakai mesin suara, bukan tulisan
   tangan yang bisa berbeda gaya.

   Jalankan:
     node tools/isi-romanisasi.mjs           uji coba, tidak menulis apa-apa
     node tools/isi-romanisasi.mjs --tulis   simpan perubahannya
*/

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const imp = p => import(pathToFileURL(join(AKAR, p)).href);
const TULIS = process.argv.includes('--tulis');
const KODE = ['ko', 'ja', 'zh', 'ar', 'ru'];
const arr = x => (Array.isArray(x) ? x : []);

const T = await imp('js/translit.js');

/* Kamus alih aksara dibangun dari materi bahasa itu sendiri — wajib untuk
   Mandarin dan kanji Jepang yang bacaannya tidak bisa ditebak dari bentuknya. */
async function siapkanKamus(c) {
  const m = await imp(`data/lang/${c}.js`);
  const L = m[c.toUpperCase()] || Object.values(m)[0];
  let vocab = arr(L.vocab), phrases = arr(L.phrases);
  for (const t of [`${c}-course`, `${c}-plus`]) {
    try {
      const mod = await imp(`data/lang/${t}.js`);
      const b = mod.COURSE || mod.PLUS || Object.values(mod)[0];
      vocab = [...vocab, ...arr(b?.vocab)];
      phrases = [...phrases, ...arr(b?.phrases)];
    } catch { /* berkas tambahan memang boleh tidak ada */ }
  }
  T.daftarkanKamus(c, { ...L, vocab, phrases });
}

/* Cocokkan pasangan ['<teks>','<arti>'] yang belum punya unsur ketiga.
   Dibangun lewat RegExp(...) supaya pelolosan garis miringnya cuma satu
   lapis — menulisnya sebagai literal regex terlalu mudah rusak. */
const POLA = new RegExp(
  "\\['((?:[^'\\\\]|\\\\.)*)',\\s*'((?:[^'\\\\]|\\\\.)*)'\\]", 'g'
);

let totalIsi = 0, totalLewat = 0;

for (const c of KODE) {
  await siapkanKamus(c);
  for (const nama of [`${c}.js`, `${c}-course.js`, `${c}-plus.js`]) {
    const jalur = join(AKAR, 'data', 'lang', nama);
    let teks;
    try { teks = readFileSync(jalur, 'utf8'); } catch { continue; }

    let isi = 0, lewat = 0;
    const baru = teks.replace(POLA, (utuh, a, arti) => {
      if (!T.perluAlih(c, a)) return utuh;              // bukan teks bahasa target
      const rom = T.keLatin(c, a);
      /* Tanda kutip tunggal di hasil akan merusak berkasnya; lewati saja. */
      if (!rom || rom.includes("'")) { lewat++; return utuh; }
      isi++;
      return `['${a}','${arti}','${rom}']`;
    });

    if (isi && TULIS) writeFileSync(jalur, baru, 'utf8');
    if (isi || lewat) console.log(`${nama.padEnd(18)} diisi=${String(isi).padStart(4)}  dilewati=${lewat}`);
    totalIsi += isi; totalLewat += lewat;
  }
}

console.log(`\nTOTAL diisi ${totalIsi}, dilewati ${totalLewat}` +
  (TULIS ? '   (berkas SUDAH ditulis)' : '   (uji coba — tambahkan --tulis untuk menyimpan)'));
