/* ── Ekstraksi korpus suara ────────────────────────────────────────
   Mengumpulkan SETIAP potong teks berbahasa asing yang punya tombol suara
   di aplikasi, lalu menuliskannya ke tools/corpus.json.

   Berkas itu jadi masukan perender audio (tools/render_f5.py). Kuncinya
   sebuah hash pendek yang dihitung dengan cara yang sama persis di Node,
   Python, dan peramban — supaya berkas audio bisa ditemukan tanpa daftar
   perantara apa pun.

   Jalankan:  node tools/dump-corpus.mjs                                  */

import { createHash } from 'node:crypto';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const impor = p => import(pathToFileURL(join(AKAR, p)).href);

/** Kunci audio: 16 hex pertama dari SHA-256 teks yang sudah dinormalkan.
    Normalisasi NFC + rapikan spasi supaya Node/Python/peramban sepakat. */
export const normalkan = s => String(s).normalize('NFC').replace(/\s+/g, ' ').trim();
export const kunciAudio = s => createHash('sha256').update(normalkan(s), 'utf8')
  .digest('hex').slice(0, 16);

const arr = x => (Array.isArray(x) ? x : []);

/** Kumpulkan {teks, rom, arti, asal} unik untuk satu bahasa. */
function kumpulkan(L, courseL) {
  const peta = new Map();
  const tambah = (teks, rom, arti, asal) => {
    const t = normalkan(teks);
    if (!t) return;
    if (peta.has(t)) {
      const a = peta.get(t);
      if (!a.rom && rom) a.rom = String(rom).trim();
      if (!a.arti && arti) a.arti = String(arti).trim();
      return;
    }
    peta.set(t, { teks: t, rom: rom ? String(rom).trim() : '',
                  arti: arti ? String(arti).trim() : '', asal });
  };

  for (const sumber of [L, courseL].filter(Boolean)) {
    arr(sumber.scripts).forEach(s => arr(s.chars).forEach(c =>
      tambah(c.c, c.r || c.rom, c.name || c.n, 'aksara')));
    arr(sumber.vocab).forEach(p => arr(p.words).forEach(w =>
      tambah(w[0], w[1], w[2], 'kosakata')));
    arr(sumber.phrases).forEach(g => arr(g.items).forEach(it =>
      tambah(it[0], it[1], it[2], 'frasa')));
    arr(sumber.grammar).forEach(g => arr(g.ex).forEach(e =>
      tambah(e[0], e[2], e[1], 'contoh-tatabahasa')));
    arr(sumber.compound).forEach(c => tambah(c.c || c[0], c.r || c[1], c.id || c[2], 'gabungan'));
    arr(sumber.syllable).forEach(s => tambah(s.block || s[0], s.rom || s[1], s.id || s[2], 'suku-kata'));
    /* numbers kadang objek {cardinal:[…], native:[…]}, kadang larik. */
    const angka = sumber.numbers;
    if (Array.isArray(angka)) angka.forEach(n => arr(n.items).forEach(it => tambah(it[0], it[1], it[2], 'angka')));
    else if (angka && typeof angka === 'object')
      Object.values(angka).forEach(v => arr(v).forEach(it =>
        Array.isArray(it) ? tambah(it[0], it[1], it[2], 'angka') : null));
  }
  return [...peta.values()];
}

/* Bacaan ujian dipecah per kalimat supaya tiap potongnya pendek. */
function kumpulkanBacaan(code, BACAAN) {
  const out = [];
  (BACAAN[code] || []).forEach(b => {
    const kalimat = String(b.teks).split(/\n+|(?<=[.!?。！？؟])\s+/)
      .map(x => x.trim()).filter(x => x.length > 1);
    kalimat.forEach(k => out.push({ teks: normalkan(k), rom: '', arti: '', asal: 'bacaan-ujian' }));
  });
  return out;
}

const KODE = ['ko', 'ja', 'zh', 'ar', 'ru', 'de', 'fr', 'es'];

const { BACAAN } = await impor('data/lang/exam-bacaan.js');
const { LANGS } = await impor('data/lang/registry.js');

const hasil = { dibuat: new Date().toISOString().slice(0, 10), bahasa: {} };
let total = 0;

for (const code of KODE) {
  const mod = await impor(`data/lang/${code}.js`);
  const L = mod[code.toUpperCase()] || Object.values(mod)[0];
  let courseL = null;
  try {
    const cm = await impor(`data/lang/${code}-course.js`);
    courseL = cm.COURSE || Object.values(cm)[0];
  } catch { /* tidak semua bahasa punya berkas kursus terpisah */ }

  const butir = [...kumpulkan(L, courseL), ...kumpulkanBacaan(code, BACAAN)];
  /* buang duplikat lintas sumber */
  const unik = new Map();
  butir.forEach(x => { if (!unik.has(x.teks)) unik.set(x.teks, x); });
  const daftar = [...unik.values()].map(x => ({ ...x, kunci: kunciAudio(x.teks) }));

  const meta = LANGS.find(l => l.code === code) || {};
  hasil.bahasa[code] = {
    nama: meta.name || code,
    asli: meta.native || '',
    jumlah: daftar.length,
    butir: daftar
  };
  total += daftar.length;
  const perAsal = {};
  daftar.forEach(x => { perAsal[x.asal] = (perAsal[x.asal] || 0) + 1; });
  console.log(`${code}  ${String(daftar.length).padStart(5)} butir  ` +
    Object.entries(perAsal).map(([k, v]) => `${k}=${v}`).join(' '));
}

hasil.total = total;
mkdirSync(join(AKAR, 'tools'), { recursive: true });
writeFileSync(join(AKAR, 'tools', 'corpus.json'), JSON.stringify(hasil, null, 1), 'utf8');
console.log(`\nTOTAL ${total} butir → tools/corpus.json`);
