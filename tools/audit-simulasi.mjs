/* ── Mutu soal & aturan lulus simulasi 8 bahasa ────────────────────
   Dijalankan: node tools/audit-simulasi.mjs

   Simulasi ujian dibangkitkan di tempat (js/mockgen.js), bukan ditulis
   satu per satu, jadi cacatnya tidak bisa dilihat dengan membaca data.
   Ia harus dibangkitkan lalu diperiksa.

   Yang diperiksa:

   · PILIHAN KEMBAR — dua pilihan bertulisan sama pada satu soal. Soal
     seperti itu mustahil dijawab dengan pasti: pemelajar menekan salinan
     kedua lalu dinilai SALAH atas jawaban yang teksnya sama dengan kunci.
     Sebelum diperbaiki, pengecoh disaring terhadap kunci saja dan tidak
     terhadap sesama pengecoh.

   · INDEKS KUNCI — `a` harus menunjuk pilihan yang benar-benar ada.
     Pembangkit lama memakai `opts.indexOf(kunci)`, yang menunjuk salinan
     PERTAMA — jadi ia rusak persis ketika ada yang kembar.

   · SEBARAN KUNCI — kalau kunci menumpuk di satu huruf, skor bisa
     dikarang dengan menekan tombol yang sama terus.

   · ATURAN LULUS — tingkat yang mensyaratkan nilai minimum per modul
     harus benar-benar menolak peserta yang nol di salah satu modul.
     Goethe B1+ mencetak aturan itu di layar hasil tetapi dulu tidak
     memberlakukannya.                                                  */

import { bangunUjian, nilai } from '../js/mockgen.js';
import { loadLangData } from '../js/langctx.js';
import { BLUEPRINTS, UJIAN_BAHASA, blueprintUntuk } from '../data/lang/exam-blueprints.js';

const KODE = ['ko', 'ja', 'zh', 'ar', 'ru', 'de', 'fr', 'es'];
const BENIH = [1, 7, 23, 99];

let soalTotal = 0, kembar = 0, indeksBuruk = 0;
const contoh = [];
const sebaran = [0, 0, 0, 0];

for (const kode of KODE) {
  const L = await loadLangData(kode);
  if (!L) { console.log(`  ${kode}: modul tidak termuat`); continue; }
  const blueprint = blueprintUntuk(kode);
  if (!blueprint) { console.log(`  ${kode}: tidak punya blueprint ujian`); continue; }

  for (const tingkat of blueprint.tingkat)
    for (const benih of BENIH) {
      let paket;
      try { paket = bangunUjian(kode, L, tingkat, benih, true); } catch { continue; }
      for (const sec of paket.sections)
        for (const it of sec.items) {
          if (it.t !== 'mcq' || !Array.isArray(it.opts)) continue;
          soalTotal++;
          const teks = it.opts.map(o => String(o).trim());
          if (new Set(teks).size !== teks.length) {
            kembar++;
            if (contoh.length < 4) contoh.push(`[${kode} ${tingkat.id}] ${it.q} → ${teks.join(' | ')}`);
          }
          if (!(it.a >= 0 && it.a < teks.length)) indeksBuruk++;
          else if (it.a < 4) sebaran[it.a]++;
        }
    }
}

console.log(`soal pilihan ganda dibangkitkan : ${soalTotal}`);
console.log(`  berpilihan kembar             : ${kembar}`);
console.log(`  indeks kunci di luar jangkauan: ${indeksBuruk}`);
contoh.forEach(c => console.log('     ' + c));

const jml = sebaran.reduce((a, b) => a + b, 0) || 1;
console.log('  sebaran kunci                 : ' +
  sebaran.map((n, i) => `${'ABCD'[i]} ${Math.round(n / jml * 100)}%`).join(' · ') + '   (rata = 25%)');

/* ── Janji yang dicetak vs aturan yang benar-benar berlaku ────────

   Percobaan pertama alat ini hanya menguji tingkat yang SUDAH menyatakan
   minBagian, dan melewati sisanya dengan `continue`. Artinya ia tidak
   mungkin menangkap cacat aslinya: Goethe B1/B2/C1 tidak menyatakan apa
   pun, jadi barisnya sekadar hilang dari laporan — bukan dilaporkan
   salah. Alat yang tidak bisa menangkap bug yang melahirkannya tidak ada
   gunanya, dan itu baru ketahuan sesudah diuji regresi.

   Yang dibandingkan sekarang adalah CATATAN yang dicetak aplikasi di
   layar hasil. Kalau catatannya menjanjikan aturan per modul, harus ada
   tingkat yang benar-benar memberlakukannya. */
console.log('janji di layar vs aturan yang berlaku:');
let janjiIngkar = 0;
const JANJI = /tiap modul|per modul|tiap bagian|satu bagian|masing-masing/i;
for (const [kunciBp, bp] of Object.entries(BLUEPRINTS)) {
  if (!JANJI.test(bp.catatan || '')) continue;
  const punya = (bp.tingkat || []).filter(t => t.minBagian).map(t => t.id);
  const tanpa = (bp.tingkat || []).filter(t => !t.minBagian).map(t => t.id);
  if (!punya.length) {
    janjiIngkar++;
    console.log(`  ${kunciBp.padEnd(8)} MENJANJIKAN aturan per modul tetapi TIDAK SATU tingkat pun memberlakukannya`);
    console.log(`     catatan: ${bp.catatan}`);
  } else {
    console.log(`  ${kunciBp.padEnd(8)} berlaku di: ${punya.join(', ')}` +
      (tanpa.length ? `  · tanpa aturan: ${tanpa.join(', ')}` : ''));
  }
}

/* ── Aturan lulus per modul benar-benar menolak ── */
console.log('\nuji: nol di satu modul, sempurna di sisanya:');
let lulusSalah = 0;
for (const [kunciBp, bp] of Object.entries(BLUEPRINTS)) {
  for (const tingkat of bp.tingkat || []) {
    if (!tingkat.minBagian) continue;
    /* Peserta hipotetis: sempurna di semua bagian KECUALI satu yang nol. */
    const kode = Object.keys(UJIAN_BAHASA).find(k => UJIAN_BAHASA[k] === kunciBp);
    if (!kode) continue;
    const L = await loadLangData(kode);
    let paket;
    try { paket = bangunUjian(kode, L, tingkat, 1, true); } catch { continue; }
    const jawab = {};
    paket.sections.forEach((sec, si) => {
      sec.items.forEach((it, i) => {
        if (it.t === 'mcq') jawab[`${sec.id}:${i}`] = si === 0 ? -1 : it.a;
        if (it.t === 'write') jawab[`${sec.id}:tulis:${i}`] = si === 0 ? [] : [1, 1, 1, 1, 1];
      });
    });
    const r = nilai(paket, jawab);
    const benar = r.lulus === false;
    if (!benar) lulusSalah++;
    console.log(`  ${(kunciBp + ' ' + tingkat.id).padEnd(14)} nol di "${paket.sections[0].name}" → ` +
      `${r.lulus ? 'LULUS (salah)' : 'tidak lulus (benar)'}  · ${r.catatan}`);
  }
}

const gagal = kembar > 0 || indeksBuruk > 0 || lulusSalah > 0 || janjiIngkar > 0;
console.log(`\n${gagal ? 'GAGAL' : 'Lulus: tidak ada pilihan kembar, indeks kunci sah, aturan per modul berlaku.'}`);
process.exit(gagal ? 1 : 0);
