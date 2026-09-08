/* Pemeriksa set simulasi TOEFL ITP.

   Memastikan tiap berkas data/itp/itp-NN.js memenuhi blueprint resmi
   ITP Level 1 — 50 Listening (30 + 8 + 12), 40 Structure & Written
   Expression (15 + 25), 50 Reading (5 × 10) — dan aturan penulisan
   yang membuat soalnya layak dipakai: empat pilihan yang berbeda,
   kunci tersebar rata, tidak ada soal kembar, panjang bacaan wajar.

   Jalankan:
     node tools/cek-itp.mjs data/itp/itp-01.js
     node tools/cek-itp.mjs data/itp/*.js        (sekalian cek kembar antar-set)

   Keluar dengan kode 1 bila ada cacat.                                 */

import { pathToFileURL } from 'node:url';
import { basename, resolve } from 'node:path';

const berkas = process.argv.slice(2);
if (!berkas.length) { console.error('Sebutkan berkas set.'); process.exit(2); }

const HURUF = 'ABCD';
const kataDari = s => String(s).trim().split(/\s+/).filter(Boolean).length;

let cacatTotal = 0;
const semuaJudulBacaan = new Map();
const semuaPembukaA = new Map();

for (const jalur of berkas) {
  const cacat = [];
  const nama = basename(jalur, '.js');                 // itp-07
  const nomor = nama.match(/(\d+)$/)?.[1];
  const namaEkspor = `ITP_${nomor}`;

  let set;
  try {
    const m = await import(pathToFileURL(resolve(jalur)).href);
    set = m[namaEkspor];
    if (!set) cacat.push(`ekspor ${namaEkspor} tidak ada (yang ada: ${Object.keys(m).join(', ')})`);
  } catch (e) {
    console.log(`\n${nama}: GAGAL DIMUAT — ${e.message}`);
    cacatTotal++;
    continue;
  }
  if (!set) { laporkan(nama, cacat); cacatTotal++; continue; }

  const soalTerlihat = new Set();
  const cekSoal = (it, tempat, { pilihan = true, kunciMaks = 3 } = {}) => {
    if (!it || typeof it !== 'object') return cacat.push(`${tempat}: bukan objek`);
    if (typeof it.q !== 'string' || !it.q.trim()) cacat.push(`${tempat}: q kosong`);
    if (pilihan) {
      if (!Array.isArray(it.opts) || it.opts.length !== 4) cacat.push(`${tempat}: opts harus 4`);
      else {
        const bersih = it.opts.map(o => String(o ?? '').trim());
        if (bersih.some(o => !o)) cacat.push(`${tempat}: ada pilihan kosong`);
        if (new Set(bersih.map(o => o.toLowerCase())).size !== 4) cacat.push(`${tempat}: pilihan kembar`);
      }
    }
    if (!Number.isInteger(it.a) || it.a < 0 || it.a > kunciMaks) cacat.push(`${tempat}: a harus 0..${kunciMaks}`);
    if (typeof it.why !== 'string' || it.why.trim().length < 12) cacat.push(`${tempat}: why kosong/terlalu pendek`);
    /* Kembar = pertanyaan DAN pilihannya sama persis. Batang pertanyaan
       yang berulang justru khas ITP: "What does the woman mean?" muncul
       belasan kali di Part A, dan "What does the passage mainly discuss?"
       sekali di tiap bacaan. Yang harus ditangkap adalah butir yang
       benar-benar disalin, bukan batang yang seragam. */
    const kunciTeks = (it.q.trim() + '||' + (it.opts || []).join('|')).toLowerCase();
    if (soalTerlihat.has(kunciTeks)) cacat.push(`${tempat}: butir kembar (pertanyaan + pilihan sama persis) — "${it.q.slice(0, 50)}"`);
    soalTerlihat.add(kunciTeks);
  };

  const cekSebaranKunci = (daftar, tempat) => {
    if (!daftar.length) return;
    const n = daftar.length;
    const hitung = [0, 0, 0, 0];
    let beruntun = 1, maksBeruntun = 1;
    daftar.forEach((a, i) => {
      if (Number.isInteger(a) && a >= 0 && a <= 3) hitung[a]++;
      if (i && a === daftar[i - 1]) { beruntun++; maksBeruntun = Math.max(maksBeruntun, beruntun); }
      else beruntun = 1;
    });
    hitung.forEach((h, k) => {
      const bagian = h / n;
      if (bagian < 0.15 || bagian > 0.35)
        cacat.push(`${tempat}: kunci ${HURUF[k]} muncul ${h}/${n} (${Math.round(bagian * 100)}%) — harus 15–35%`);
    });
    if (maksBeruntun > 3) cacat.push(`${tempat}: kunci sama ${maksBeruntun}× berturut-turut (maks 3)`);
  };

  const cekBaris = (lines, tempat, min, maks) => {
    if (!Array.isArray(lines)) return cacat.push(`${tempat}: lines bukan larik`);
    if (lines.length < min || lines.length > maks) cacat.push(`${tempat}: ${lines.length} baris (harus ${min}–${maks})`);
    lines.forEach((l, i) => {
      if (!/^(M|W|N):\s\S/.test(String(l))) cacat.push(`${tempat} baris ${i + 1}: harus diawali "M: ", "W: ", atau "N: "`);
    });
  };

  /* ── Listening ─────────────────────────────────────────────── */
  const L = set.listening || {};
  const A = L.partA || [], B = L.partB || [], C = L.partC || [];
  if (A.length !== 30) cacat.push(`Part A: ${A.length} butir (harus 30)`);
  A.forEach((it, i) => {
    const t = `Part A #${i + 1}`;
    cekSoal(it, t);
    cekBaris(it.lines, t, 3, 5);
    if (Array.isArray(it.lines) && it.lines.length) {
      const akhir = String(it.lines[it.lines.length - 1]);
      if (!akhir.startsWith('N:')) cacat.push(`${t}: baris terakhir harus narator (N:) yang membacakan pertanyaan`);
      if (!/\?\s*$/.test(akhir)) cacat.push(`${t}: pertanyaan narator harus diakhiri tanda tanya`);
      const pembuka = String(it.lines[0]).toLowerCase();
      const dimana = semuaPembukaA.get(pembuka);
      if (dimana && dimana !== nama) cacat.push(`${t}: kalimat pembuka sama dengan ${dimana}`);
      semuaPembukaA.set(pembuka, nama);
    }
  });
  cekSebaranKunci(A.map(x => x.a), 'Part A');

  if (B.length !== 2) cacat.push(`Part B: ${B.length} percakapan (harus 2)`);
  B.forEach((p, i) => {
    const t = `Part B percakapan ${i + 1}`;
    if (!p.title) cacat.push(`${t}: title kosong`);
    cekBaris(p.lines, t, 8, 16);
    const kata = (p.lines || []).reduce((a, l) => a + kataDari(String(l).replace(/^[MWN]:\s*/, '')), 0);
    if (kata < 120 || kata > 230) cacat.push(`${t}: ${kata} kata (harus 120–230)`);
    if (!Array.isArray(p.questions) || p.questions.length !== 4) cacat.push(`${t}: harus 4 soal`);
    (p.questions || []).forEach((q, k) => cekSoal(q, `${t} soal ${k + 1}`));
  });

  if (C.length !== 3) cacat.push(`Part C: ${C.length} ceramah (harus 3)`);
  C.forEach((p, i) => {
    const t = `Part C ceramah ${i + 1}`;
    if (!p.title) cacat.push(`${t}: title kosong`);
    cekBaris(p.lines, t, 6, 14);
    if ((p.lines || []).some(l => /^W:|^M:/.test(l) && false)) {}
    const kata = (p.lines || []).reduce((a, l) => a + kataDari(String(l).replace(/^[MWN]:\s*/, '')), 0);
    if (kata < 120 || kata > 220) cacat.push(`${t}: ${kata} kata (harus 120–220)`);
    if (!Array.isArray(p.questions) || p.questions.length !== 4) cacat.push(`${t}: harus 4 soal`);
    (p.questions || []).forEach((q, k) => cekSoal(q, `${t} soal ${k + 1}`));
  });
  cekSebaranKunci([...B, ...C].flatMap(p => (p.questions || []).map(q => q.a)), 'Part B+C');

  /* ── Structure & Written Expression ────────────────────────── */
  const S = set.structure || [], W = set.written || [];
  if (S.length !== 15) cacat.push(`Structure: ${S.length} butir (harus 15)`);
  S.forEach((it, i) => {
    const t = `Structure #${i + 1}`;
    cekSoal(it, t);
    const rumpang = (String(it.q || '').match(/_{3,}/g) || []).length;
    if (rumpang !== 1) cacat.push(`${t}: harus ada tepat satu rumpang "___" (ada ${rumpang})`);
  });
  cekSebaranKunci(S.map(x => x.a), 'Structure');

  if (W.length !== 25) cacat.push(`Written Expression: ${W.length} butir (harus 25)`);
  W.forEach((it, i) => {
    const t = `Written #${i + 1}`;
    cekSoal(it, t, { pilihan: false });
    const seg = String(it.q || '').match(/\{\{([^}]+)\}\}/g) || [];
    if (seg.length !== 4) cacat.push(`${t}: harus tepat 4 segmen {{...}} (ada ${seg.length})`);
    if (seg.some(s => !s.slice(2, -2).trim())) cacat.push(`${t}: ada segmen kosong`);
    if (typeof it.fix !== 'string' || !it.fix.trim()) cacat.push(`${t}: fix (bentuk yang benar) kosong`);
    if (it.opts) cacat.push(`${t}: jangan tulis opts — pilihannya diturunkan dari segmen`);
  });
  cekSebaranKunci(W.map(x => x.a), 'Written Expression');

  /* ── Reading ───────────────────────────────────────────────── */
  const R = set.reading || [];
  if (R.length !== 5) cacat.push(`Reading: ${R.length} bacaan (harus 5)`);
  R.forEach((r, i) => {
    const t = `Reading ${i + 1}`;
    if (!r.title) cacat.push(`${t}: title kosong`);
    else {
      const judul = String(r.title).toLowerCase();
      const dimana = semuaJudulBacaan.get(judul);
      if (dimana && dimana !== nama) cacat.push(`${t}: judul "${r.title}" sama dengan ${dimana}`);
      semuaJudulBacaan.set(judul, nama);
    }
    const kata = kataDari(r.text || '');
    if (kata < 250 || kata > 380) cacat.push(`${t}: ${kata} kata (harus 250–380)`);
    const paragraf = String(r.text || '').split(/\n\s*\n/).filter(p => p.trim()).length;
    if (paragraf < 3 || paragraf > 6) cacat.push(`${t}: ${paragraf} paragraf (harus 3–6, dipisah baris kosong)`);
    if (!Array.isArray(r.questions) || r.questions.length !== 10) cacat.push(`${t}: harus 10 soal`);
    (r.questions || []).forEach((q, k) => cekSoal(q, `${t} soal ${k + 1}`));
  });
  cekSebaranKunci(R.flatMap(r => (r.questions || []).map(q => q.a)), 'Reading');

  const total = A.length + B.reduce((a, p) => a + (p.questions?.length || 0), 0)
    + C.reduce((a, p) => a + (p.questions?.length || 0), 0) + S.length + W.length
    + R.reduce((a, r) => a + (r.questions?.length || 0), 0);
  if (total !== 140) cacat.push(`TOTAL ${total} butir (harus 140)`);

  laporkan(nama, cacat, total);
  if (cacat.length) cacatTotal++;
}

function laporkan(nama, cacat, total) {
  if (!cacat.length) { console.log(`${nama}: OK — ${total} butir, semua aturan terpenuhi`); return; }
  console.log(`\n${nama}: ${cacat.length} cacat`);
  cacat.slice(0, 60).forEach(c => console.log('  · ' + c));
  if (cacat.length > 60) console.log(`  … dan ${cacat.length - 60} lagi`);
}

console.log(`\n${berkas.length} berkas diperiksa, ${cacatTotal} bermasalah.`);
process.exit(cacatTotal ? 1 : 0);
