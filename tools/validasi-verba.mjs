/* ── Pemeriksa sistem kala & kata kerja ───────────────────────────
   Dijalankan: node tools/validasi-verba.mjs

   Memeriksa dua hal: petak 12 kala Inggris (data/tenses-en.js) dan
   sistem kata kerja delapan bahasa lain (data/lang/<kode>-verba.js).

   Yang diperiksa dipilih karena bisa salah tanpa kelihatan:

   · petak kala harus LENGKAP — 3 waktu × 4 rupa = 12. Kalau satu sel
     kosong, halaman kalanya bolong dan tidak ada yang tahu sampai ada
     yang membukanya;
   · tiap kala menunjuk `topik` yang HARUS ada di bank tata bahasa.
     Halaman ini sengaja jadi peta, bukan salinan kedua — kalau
     tautannya putus, petanya menunjuk ke ruang kosong;
   · tiap jebakan sisi salahnya tidak boleh sama dengan sisi benarnya;
   · tabel konjugasi tiap barisnya harus sepanjang kolomnya — baris
     pendek menggeser seluruh isi tabel ke kolom yang salah;
   · contoh tiga bahasa (asli · bacaan · terjemahan) tidak boleh ada
     yang kosong, dan terjemahannya tidak boleh menyalin aslinya.      */

import { TENSES, WAKTU, RUPA, DEPAN_LAIN, PASIF, PENGENAL } from '../data/tenses-en.js';
import { SEMUA as GRAMMAR } from '../data/grammar-gabung.js';

const KODE = ['ar', 'de', 'es', 'fr', 'ja', 'ko', 'ru', 'zh'];
const rapi = s => String(s ?? '').trim();
const kecil = s => rapi(s).toLowerCase().replace(/\s+/g, ' ');

const masalah = [];
const lapor = (bagian, pesan) => masalah.push({ bagian, pesan });

/* ── Petak 12 kala Inggris ──────────────────────────────────────── */
{
  const idGrammar = new Set(GRAMMAR.map(g => g.id));
  const terlihat = new Set();

  for (const t of TENSES) {
    const n = `EN/${t.id || '(tanpa id)'}`;
    for (const k of ['id', 'nama', 'namaId', 'waktu', 'rupa', 'rumus', 'inti', 'beda', 'topik'])
      if (!rapi(t[k])) lapor(n, `kolom "${k}" kosong`);

    if (terlihat.has(t.id)) lapor(n, 'id kembar');
    terlihat.add(t.id);

    if (!WAKTU.some(w => w.id === t.waktu)) lapor(n, `waktu "${t.waktu}" tak dikenal`);
    if (!RUPA.some(r => r.id === t.rupa)) lapor(n, `rupa "${t.rupa}" tak dikenal`);

    /* Tautan ke bank tata bahasa — inti dari halaman ini. */
    if (t.topik && !idGrammar.has(t.topik))
      lapor(n, `menunjuk topik "${t.topik}" yang tidak ada di bank tata bahasa`);

    if ((t.ex || []).length < 2) lapor(n, `contoh cuma ${(t.ex || []).length}`);
    (t.ex || []).forEach((e, i) => {
      if (!Array.isArray(e) || !rapi(e[0]) || !rapi(e[1])) lapor(n, `contoh #${i + 1} tidak lengkap`);
      else if (kecil(e[0]) === kecil(e[1])) lapor(n, `contoh #${i + 1} terjemahan menyalin aslinya`);
    });

    if ((t.jebakan || []).length < 2) lapor(n, `jebakan cuma ${(t.jebakan || []).length}`);
    (t.jebakan || []).forEach((j, i) => {
      if (!Array.isArray(j) || j.length < 3) return lapor(n, `jebakan #${i + 1} bukan [salah, benar, sebab]`);
      if (kecil(j[0]) === kecil(j[1])) lapor(n, `jebakan #${i + 1} sisi salah = sisi benar`);
      if (!rapi(j[2])) lapor(n, `jebakan #${i + 1} tanpa sebab`);
    });

    if (!(t.kapan || []).length) lapor(n, 'tanpa daftar "kapan dipakai"');
  }

  /* Petaknya harus penuh — 3 × 4 = 12. */
  for (const w of WAKTU)
    for (const r of RUPA)
      if (!TENSES.some(t => t.waktu === w.id && t.rupa === r.id))
        lapor('EN/petak', `sel kosong: ${w.nama} ${r.nama}`);

  if (TENSES.length !== 12) lapor('EN/petak', `jumlah kala ${TENSES.length}, seharusnya 12`);
  if (PASIF.length < 6) lapor('EN/pasif', `tabel pasif cuma ${PASIF.length} baris`);
  if (PENGENAL.length !== 12) lapor('EN/pengenal', `daftar pengenal ${PENGENAL.length}, seharusnya 12`);
  for (const d of DEPAN_LAIN)
    if (d.topik && !idGrammar.has(d.topik))
      lapor('EN/depan-lain', `"${d.nama}" menunjuk topik "${d.topik}" yang tidak ada`);
}

/* ── Sistem kata kerja delapan bahasa ───────────────────────────── */
const ringkas = {};
for (const kode of KODE) {
  let V;
  try { V = (await import(`../data/lang/${kode}-verba.js`)).VERBA; }
  catch (e) { lapor(kode, `berkas tidak bisa dimuat: ${e.message}`); continue; }

  const n = k => `${kode}/${k}`;
  for (const k of ['kode', 'judul', 'ringkas'])
    if (!rapi(V[k])) lapor(kode, `kolom "${k}" kosong`);
  if (V.kode !== kode) lapor(kode, `kode di dalam berkas "${V.kode}" tidak cocok nama berkasnya`);

  if ((V.bedaBesar || []).length < 3) lapor(kode, `"bedaBesar" cuma ${(V.bedaBesar || []).length}`);
  if ((V.catatan || []).length < 2) lapor(kode, `"catatan" cuma ${(V.catatan || []).length}`);

  const sistem = V.sistem || [];
  if (sistem.length < 4) lapor(kode, `bagian sistem cuma ${sistem.length}`);

  const judulDipakai = new Set();
  for (const s of sistem) {
    const m = n(s.nama || '(tanpa nama)');
    for (const k of ['nama', 'namaId', 'rumus', 'inti'])
      if (!rapi(s[k])) lapor(m, `kolom "${k}" kosong`);

    if (judulDipakai.has(kecil(s.nama))) lapor(m, 'nama bagian kembar');
    judulDipakai.add(kecil(s.nama));

    if ((s.kapan || []).length < 2) lapor(m, `"kapan" cuma ${(s.kapan || []).length}`);

    if ((s.ex || []).length < 2) lapor(m, `contoh cuma ${(s.ex || []).length}`);
    (s.ex || []).forEach((e, i) => {
      if (!Array.isArray(e) || e.length < 3)
        return lapor(m, `contoh #${i + 1} bukan [asli, bacaan, terjemahan]`);
      const [asli, baca, arti] = e;
      if (!rapi(asli)) lapor(m, `contoh #${i + 1} tanpa kalimat asli`);
      if (!rapi(baca)) lapor(m, `contoh #${i + 1} tanpa bacaan`);
      if (!rapi(arti)) lapor(m, `contoh #${i + 1} tanpa terjemahan`);
      if (rapi(asli) && kecil(asli) === kecil(arti)) lapor(m, `contoh #${i + 1} terjemahan menyalin aslinya`);
    });

    (s.jebakan || []).forEach((j, i) => {
      if (!Array.isArray(j) || j.length < 3) return lapor(m, `jebakan #${i + 1} bukan [salah, benar, sebab]`);
      if (kecil(j[0]) === kecil(j[1])) lapor(m, `jebakan #${i + 1} sisi salah = sisi benar`);
      if (!rapi(j[2])) lapor(m, `jebakan #${i + 1} tanpa sebab`);
    });
  }

  /* Tabel konjugasi: baris pendek menggeser isi ke kolom yang salah. */
  const T = V.tabel;
  if (!T) lapor(kode, 'tanpa tabel konjugasi');
  else {
    if (!rapi(T.judul)) lapor(kode, 'tabel tanpa judul');
    const lebar = (T.kolom || []).length;
    if (lebar < 3) lapor(kode, `tabel cuma ${lebar} kolom`);
    if ((T.baris || []).length < 5) lapor(kode, `tabel cuma ${(T.baris || []).length} baris`);
    (T.baris || []).forEach((b, i) => {
      if (!Array.isArray(b)) return lapor(kode, `tabel baris #${i + 1} bukan larik`);
      if (b.length !== lebar) lapor(kode, `tabel baris #${i + 1} punya ${b.length} sel, kolomnya ${lebar}`);
      b.forEach((sel, k) => { if (!rapi(sel)) lapor(kode, `tabel baris #${i + 1} kolom ${k + 1} kosong`); });
    });
  }

  ringkas[kode] = {
    bagian: sistem.length,
    contoh: sistem.reduce((a, s) => a + (s.ex?.length || 0), 0),
    jebakan: sistem.reduce((a, s) => a + (s.jebakan?.length || 0), 0),
    baris: (T?.baris || []).length,
  };
}

/* ── Laporan ────────────────────────────────────────────────────── */
if (masalah.length) {
  const per = {};
  for (const m of masalah) (per[m.bagian] ||= []).push(m.pesan);
  for (const [b, list] of Object.entries(per)) {
    console.log(`\n[${b}]`);
    for (const p of list.slice(0, 12)) console.log('   ' + p);
    if (list.length > 12) console.log(`   … ${list.length - 12} lagi`);
  }
}

console.log('\nkode   bagian  contoh  jebakan  barisTabel');
console.log('-'.repeat(46));
let T = { bagian: 0, contoh: 0, jebakan: 0, baris: 0 };
for (const [k, s] of Object.entries(ringkas)) {
  console.log(`${k.padEnd(6)} ${String(s.bagian).padStart(6)} ${String(s.contoh).padStart(7)} ` +
              `${String(s.jebakan).padStart(8)} ${String(s.baris).padStart(11)}`);
  T.bagian += s.bagian; T.contoh += s.contoh; T.jebakan += s.jebakan; T.baris += s.baris;
}
console.log('-'.repeat(46));
console.log(`${'TOTAL'.padEnd(6)} ${String(T.bagian).padStart(6)} ${String(T.contoh).padStart(7)} ` +
            `${String(T.jebakan).padStart(8)} ${String(T.baris).padStart(11)}`);

const exEN = TENSES.reduce((a, t) => a + (t.ex?.length || 0), 0);
const jebEN = TENSES.reduce((a, t) => a + (t.jebakan?.length || 0), 0);
console.log(`\nInggris: ${TENSES.length} kala · ${exEN} contoh · ${jebEN} jebakan · ` +
            `${PASIF.length} baris pasif · ${DEPAN_LAIN.length} bentuk depan lain`);

console.log(`\n${masalah.length} masalah`);
process.exit(masalah.length ? 1 : 0);
