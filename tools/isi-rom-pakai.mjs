/* Isi kolom romanisasi contoh yang bertanda '@' di data/lang/<kode>-pakai.js.

   Romanisasi TIDAK ditulis tangan supaya tidak lahir sistem kedua yang
   lama-lama menyimpang dari yang diajarkan halaman aksara. Semuanya
   dihitung dari js/translit.js — sumber yang sama dengan mesin suara.

   Hanya berlaku untuk bahasa yang alih aksaranya BERBASIS ATURAN
   (ko, ar, ru). Jepang dan Mandarin berbasis kamus: bacaan kanji dan
   pinyin tidak bisa ditebak dari bentuk aksaranya, jadi romanisasinya
   memang harus ditulis manusia.

   Jalankan: node tools/isi-rom-pakai.mjs [kode…]                       */
import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const { keLatin } = await import(pathToFileURL(join(AKAR, 'js/translit.js')).href);

const BERATURAN = ['ko', 'ar', 'ru'];
const minta = process.argv.slice(2).filter(x => BERATURAN.includes(x));
const KODE = minta.length ? minta : BERATURAN;

for (const c of KODE) {
  const p = join(AKAR, `data/lang/${c}-pakai.js`);
  if (!fs.existsSync(p)) { console.log(`  ${c}: belum ada berkasnya`); continue; }

  const mod = await import(pathToFileURL(p).href + '?t=' + Date.now());
  const PAKAI = mod.PAKAI;
  let s = fs.readFileSync(p, 'utf8');

  let isi = 0, gagal = [];
  for (const [kata, nilai] of Object.entries(PAKAI)) {
    if (!Array.isArray(nilai) || nilai[2] !== '@') continue;
    const rom = keLatin(c, nilai[0]);
    if (!rom) { gagal.push(kata); continue; }

    /* Ganti hanya tanda '@' yang berada DI BARIS kata ini — jangan
       mengandalkan urutan, karena satu contoh bisa muncul di mana saja. */
    const kunci = nilai[0];
    const at = s.indexOf(kunci);
    if (at < 0) { gagal.push(kata + ' (contoh tidak ketemu di berkas)'); continue; }
    const tutup = s.indexOf("'@'", at);
    if (tutup < 0) { gagal.push(kata + " (penanda '@' tidak ketemu)"); continue; }
    const kutip = rom.includes("'") ? '"' + rom + '"' : "'" + rom + "'";
    s = s.slice(0, tutup) + kutip + s.slice(tutup + 3);
    isi++;
  }

  fs.writeFileSync(p, s);
  console.log(`  ${c}: ${isi} romanisasi diisi${gagal.length ? `, ${gagal.length} gagal` : ''}`);
  gagal.slice(0, 8).forEach(x => console.log('       gagal: ' + x));
}
