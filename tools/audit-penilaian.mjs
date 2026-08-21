/* ── Seberapa ketat penilaian jawaban bebas ───────────────────────
   Dijalankan: node tools/audit-penilaian.mjs

   Butir 'trans' dan 'dictate' dinilai dengan membandingkan jawaban ke
   kuncinya. Ambangnya tidak bisa dinilai dengan membacanya — ia harus
   DIUKUR terhadap materi yang benar-benar ada, karena longgar-ketatnya
   bergantung pada panjang kalimat.

   Empat besaran diukur sekaligus, dan keduanya harus bergerak ke arah
   yang benar. Ambang yang menolak semua pembalikan makna tetapi juga
   menolak jawaban kunci itu sendiri bukan perbaikan.

     PEMBALIKAN MAKNA  kunci dinegasikan (is → isn't). Harus DITOLAK.
     HILANG SATU KATA  satu kata dibuang. Harus DITOLAK.
     JAWABAN KUNCI     kunci itu sendiri, termasuk kunci alternatif.
                       Harus DITERIMA.
     SALAH KETIK       dua huruf bersebelahan tertukar. Harus DITERIMA —
                       pemelajar sedang belajar bahasa, bukan mengetik.  */

import { cocokKalimat } from '../js/teks.js';
import { GRAMMAR } from '../js/data.js';

const butir = [];
for (const g of GRAMMAR)
  for (const d of g.drills || [])
    if (d.t === 'trans' || d.t === 'dictate') {
      const kunci = Array.isArray(d.a) ? d.a[0] : (d.a ?? d.text);
      if (kunci) butir.push({
        id: g.id, kunci: String(kunci), tol: d.tol ?? 88,
        semuaKunci: Array.isArray(d.a) ? d.a : [kunci]
      });
    }

const NEGASI = [
  [/\bis\b/, "isn't"], [/\bare\b/, "aren't"], [/\bwas\b/, "wasn't"],
  [/\bwere\b/, "weren't"], [/\bcan\b/, "can't"], [/\bwill\b/, "won't"],
  [/\bhave\b/, "haven't"], [/\bhas\b/, "hasn't"], [/\bdo\b/, "don't"],
  [/\bdoes\b/, "doesn't"], [/\bdid\b/, "didn't"],
];
const balikkan = k => {
  for (const [re, ganti] of NEGASI) if (re.test(k)) return k.replace(re, ganti);
  return null;
};
const tukarHuruf = s => s.replace(/([a-z])([a-z])/, '$2$1');

/* Ditiru dari js/quiz.js checkAnswer: jawaban dibandingkan ke SETIAP
   kunci, bukan cuma kunci pertama. Percobaan pertama alat ini
   membandingkannya ke kunci pertama saja, sehingga kunci alternatif yang
   memang sah — "There are a lot of people here." untuk "There are many
   people here." — dilaporkan sebagai jawaban benar yang ditolak. Yang
   keliru alat ukurnya, bukan penilaiannya. */
const diterimaOlehAplikasi = (kunciSemua, jawaban, tol) =>
  kunciSemua.some(k => cocokKalimat(k, jawaban, tol));

const ukur = (nama, kasus, harusDiterima) => {
  let n = 0, diterima = 0;
  const contoh = [];
  for (const { kunciSemua, kunci, jawaban, tol } of kasus) {
    n++;
    const ok = diterimaOlehAplikasi(kunciSemua || [kunci], jawaban, tol);
    if (ok) diterima++;
    if (ok !== harusDiterima && contoh.length < 4) contoh.push(`${kunci}  ⟵  ${jawaban}`);
  }
  const benar = harusDiterima ? diterima : n - diterima;
  const pct = n ? Math.round((benar / n) * 100) : 100;
  console.log(`${nama.padEnd(34)} ${String(benar).padStart(4)}/${String(n).padEnd(5)} ${String(pct).padStart(3)}% dinilai tepat`);
  contoh.forEach(c => console.log(`     salah: ${c}`));
  return { n, benar };
};

const kasusBalik = [];
const kasusHilang = [];
const kasusKunci = [];
const kasusTypo = [];
for (const b of butir) {
  const j = balikkan(b.kunci);
  if (j) kasusBalik.push({ kunciSemua: b.semuaKunci, kunci: b.kunci, jawaban: j, tol: b.tol });

  const w = b.kunci.split(/\s+/);
  if (w.length >= 4)
    for (let i = 0; i < w.length; i++)
      kasusHilang.push({ kunciSemua: b.semuaKunci, kunci: b.kunci,
                         jawaban: w.filter((_, k) => k !== i).join(' '), tol: b.tol });

  for (const k of b.semuaKunci) kasusKunci.push({ kunciSemua: b.semuaKunci, kunci: b.kunci, jawaban: k, tol: b.tol });

  const t = tukarHuruf(b.kunci);
  if (t !== b.kunci) kasusTypo.push({ kunciSemua: b.semuaKunci, kunci: b.kunci, jawaban: t, tol: b.tol });
}

console.log(`butir trans/dictate di materi: ${butir.length}\n`);
const r1 = ukur('pembalikan makna ditolak', kasusBalik, false);
const r2 = ukur('hilang satu kata ditolak', kasusHilang, false);
const r3 = ukur('jawaban kunci diterima', kasusKunci, true);
const r4 = ukur('salah ketik ringan diterima', kasusTypo, true);

/* Ambang: pembalikan makna TIDAK BOLEH ada yang lolos, dan jawaban kunci
   tidak boleh ada yang ditolak. Dua besaran lain dilaporkan sebagai angka
   mutu, bukan syarat lulus — menolak 100% penghilangan kata menuntut
   ambang yang juga menolak salah ketik wajar. */
const gagal = (r1.benar !== r1.n) || (r3.benar !== r3.n);
console.log(`\n${gagal ? 'GAGAL — lihat contoh di atas' : 'Lulus: tidak ada pembalikan makna yang lolos, tidak ada kunci yang ditolak.'}`);
process.exit(gagal ? 1 : 0);
