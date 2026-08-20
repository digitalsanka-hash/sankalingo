/* ── Integritas rujukan kurikulum INGGRIS ─────────────────────────
   Dijalankan: node tools/validasi-inggris.mjs

   tools/validasi-materi.mjs memeriksa delapan bahasa non-Inggris dan
   TIDAK memeriksa Inggris sama sekali — padahal kurikulum Inggris yang
   terbesar di aplikasi ini (44 unit, 284 pelajaran, ratusan topik tata
   bahasa dan puluhan paket kosakata).

   Rujukan menggantung di sini tidak menimbulkan error apa pun. Unit
   menyebut id topik tata bahasa; kalau idnya tidak ada, .find()
   mengembalikan undefined dan pelajarannya cuma tampil kosong dengan
   judul umum "Tata Bahasa". Pemelajar melihat halaman yang seolah-olah
   memang tidak berisi apa-apa.

   Yang diperiksa:
     · tiap id grammar yang disebut unit benar-benar ada
     · tiap id paket kosakata yang disebut unit benar-benar ada
     · tiap id keterampilan dikenali
     · id unit dan id pelajaran tidak ganda
     · tiap topik tata bahasa punya isi minimum (rumus dan contoh)      */

import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const imp = p => import(pathToFileURL(join(AKAR, p)).href);
const arr = x => (Array.isArray(x) ? x : []);

const masalah = [];
const catat = (jenis, pesan) => masalah.push({ jenis, pesan });

const kur = await imp('data/curriculum.js');
const dat = await imp('js/data.js');

const UNITS = arr(kur.ALL_UNITS);
const LESSONS = arr(kur.ALL_LESSONS);

/* Semua topik tata bahasa yang benar-benar ada, lewat jalur yang sama
   dengan yang dipakai aplikasi saat menggambar halaman. */
const GRAMMAR = arr(dat.GRAMMAR ?? dat.ALL_GRAMMAR ?? dat.GRAMMAR_TOPICS);
const idGrammar = new Set(GRAMMAR.map(g => g.id));

/* ALL_PACKS, bukan VOCAB_PACKS: paket leksis (phrasal verb, idiom,
   kolokasi) juga bisa dirujuk unit, dan memakai daftar yang lebih sempit
   akan menuduhnya menggantung padahal ada. */
const PACKS = arr(dat.ALL_PACKS ?? dat.VOCAB_PACKS);
const idPack = new Set(PACKS.map(p => p.id));

const KETERAMPILAN = new Set(['listen', 'speak', 'read', 'write', 'pron', 'pronunciation']);

if (!GRAMMAR.length) catat('sumber', 'daftar topik tata bahasa kosong — nama ekspornya mungkin berubah');
if (!PACKS.length) catat('sumber', 'daftar paket kosakata kosong — nama ekspornya mungkin berubah');

/* ── rujukan tiap unit ── */
for (const u of UNITS) {
  for (const g of arr(u.grammar))
    if (!idGrammar.has(g)) catat('grammar menggantung', `unit ${u.id} menyebut topik '${g}' yang tidak ada`);

  const paket = Array.isArray(u.vocab) ? u.vocab : (u.vocab ? [u.vocab] : []);
  for (const v of paket)
    if (!idPack.has(v)) catat('kosakata menggantung', `unit ${u.id} menyebut paket '${v}' yang tidak ada`);

  for (const s of arr(u.skills))
    if (!KETERAMPILAN.has(s)) catat('keterampilan tak dikenal', `unit ${u.id} menyebut '${s}'`);

  if (!arr(u.grammar).length) catat('unit kosong', `unit ${u.id} tidak punya topik tata bahasa`);
}

/* ── id ganda ── */
const lihat = (daftar, label, ambil = x => x.id) => {
  const sudah = new Set();
  for (const x of daftar) {
    const id = ambil(x);
    if (sudah.has(id)) catat('id ganda', `${label} '${id}' muncul lebih dari sekali`);
    sudah.add(id);
  }
};
lihat(UNITS, 'unit');
lihat(LESSONS, 'pelajaran');
lihat(GRAMMAR, 'topik tata bahasa');
lihat(PACKS, 'paket kosakata');

/* ── isi minimum tiap topik ── */
for (const g of GRAMMAR) {
  if (!g.form && !g.rumus) catat('topik tanpa rumus', `${g.id} tidak punya form/rumus`);
  if (!arr(g.ex).length) catat('topik tanpa contoh', `${g.id} tidak punya contoh kalimat`);
}

/* ── topik yang tidak pernah dipakai unit mana pun ── */
const dipakai = new Set(UNITS.flatMap(u => arr(u.grammar)));
const yatim = GRAMMAR.filter(g => !dipakai.has(g.id));

/* ── laporan ── */
console.log(`unit ${UNITS.length} · pelajaran ${LESSONS.length} · topik tata bahasa ${GRAMMAR.length} · paket kosakata ${PACKS.length}`);
console.log(`topik yang tidak dirujuk unit mana pun: ${yatim.length}` +
  (yatim.length ? ` (${yatim.slice(0, 8).map(g => g.id).join(', ')}${yatim.length > 8 ? ' …' : ''})` : ''));

if (masalah.length) {
  const per = {};
  for (const m of masalah) (per[m.jenis] ||= []).push(m.pesan);
  for (const [jenis, list] of Object.entries(per)) {
    console.log(`\n[${jenis}] ${list.length}`);
    list.slice(0, 20).forEach(p => console.log('   ' + p));
    if (list.length > 20) console.log(`   … dan ${list.length - 20} lagi`);
  }
}
console.log(`\n${masalah.length} masalah`);
process.exit(masalah.length ? 1 : 0);
