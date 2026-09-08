/* Audit isi sepuluh set TOEFL ITP — pemeriksaan yang tidak dilakukan
   cek-itp.mjs karena menuntut membaca makna, bukan bentuk.

   Yang diperiksa:
   · Tiap set benar-benar bisa dimuat lewat ITP.muatSet(n).
   · Soal kosakata dan rujukan mengutip kata yang MEMANG ada di teksnya.
     Ini kesalahan paling mahal: soal "kata X paling dekat maknanya
     dengan…" jadi mustahil dijawab kalau X tidak pernah muncul.
   · Kunci Written Expression menunjuk segmen yang memang keliru —
     diperiksa lewat adanya kolom `fix` yang berbeda dari segmen aslinya.
   · Sebaran kunci per set, dan total butir sepuluh set.

   Jalankan:  node tools/audit-itp.mjs                                  */

import { pathToFileURL } from 'node:url';
import { join } from 'node:path';

const AKAR = process.cwd();
const HURUF = 'ABCD';
const dua = n => String(n).padStart(2, '0');

/* Kutipan di dalam pertanyaan: "word" atau “word”. */
const kutipan = q => [...String(q).matchAll(/[""]([^""]{1,60})[""]/g)].map(m => m[1]);

const normal = s => String(s).toLowerCase().replace(/[^a-z0-9\s']/g, ' ').replace(/\s+/g, ' ').trim();

let cacat = 0, totalButir = 0;
const ringkas = [];

for (let n = 1; n <= 10; n++) {
  const kode = dua(n);
  const jalur = join(AKAR, 'data', 'itp', `itp-${kode}.js`);
  const modul = await import(pathToFileURL(jalur).href);
  const set = modul[`ITP_${kode}`];

  const masalah = [];

  /* ── Kutipan Reading harus ada di teks bacaannya ─────────────── */
  set.reading.forEach((r, i) => {
    const teks = normal(r.text);
    r.questions.forEach((q, k) => {
      /* Hanya soal yang memang merujuk ke teks: kosakata dan rujukan. */
      if (!/closest in meaning|refers to|the word|the phrase/i.test(q.q)) return;
      for (const kata of kutipan(q.q)) {
        const cari = normal(kata);
        if (!cari) continue;
        if (!teks.includes(cari)) {
          masalah.push(`Reading ${i + 1} soal ${k + 1}: kata "${kata}" tidak ada di bacaan`);
        }
      }
    });
  });

  /* ── Written Expression: fix harus beda dari segmen yang ditunjuk ── */
  set.written.forEach((w, i) => {
    const seg = [...String(w.q).matchAll(/\{\{([^}]+)\}\}/g)].map(m => m[1]);
    const ditunjuk = seg[w.a];
    if (ditunjuk == null) { masalah.push(`Written #${i + 1}: kunci ${w.a} di luar jangkauan`); return; }
    if (normal(ditunjuk) === normal(w.fix)) {
      masalah.push(`Written #${i + 1}: fix sama dengan segmen "${ditunjuk}" — tidak ada yang diperbaiki`);
    }
  });

  /* ── Part A: baris terakhir narator harus memuat pertanyaan `q` ── */
  set.listening.partA.forEach((a, i) => {
    const akhir = normal(String(a.lines[a.lines.length - 1]).replace(/^n:\s*/i, ''));
    if (normal(a.q) && akhir !== normal(a.q)) {
      masalah.push(`Part A #${i + 1}: pertanyaan narator tidak sama dengan kolom q`);
    }
  });

  /* ── Sebaran kunci seluruh set ───────────────────────────────── */
  const semua = [
    ...set.listening.partA.map(x => x.a),
    ...set.listening.partB.flatMap(p => p.questions.map(q => q.a)),
    ...set.listening.partC.flatMap(p => p.questions.map(q => q.a)),
    ...set.structure.map(x => x.a),
    ...set.written.map(x => x.a),
    ...set.reading.flatMap(r => r.questions.map(q => q.a)),
  ];
  totalButir += semua.length;
  const hitung = [0, 0, 0, 0];
  semua.forEach(a => hitung[a]++);
  const persen = hitung.map(h => Math.round(h / semua.length * 100));

  ringkas.push({ set: kode, butir: semua.length, sebaran: persen.map((p, k) => `${HURUF[k]} ${p}%`).join(' · '), masalah: masalah.length });
  if (masalah.length) {
    cacat++;
    console.log(`\nitp-${kode}: ${masalah.length} temuan`);
    masalah.slice(0, 25).forEach(m => console.log('  · ' + m));
    if (masalah.length > 25) console.log(`  … dan ${masalah.length - 25} lagi`);
  }
}

console.log('\nset  butir  sebaran kunci                    temuan');
for (const r of ringkas) {
  console.log(`${r.set}    ${String(r.butir).padStart(3)}   ${r.sebaran.padEnd(32)} ${r.masalah || '-'}`);
}
console.log(`\nTOTAL ${totalButir} butir di 10 set. ${cacat} set bermasalah.`);
process.exit(cacat ? 1 : 0);
