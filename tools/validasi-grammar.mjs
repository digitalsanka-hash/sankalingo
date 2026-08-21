/* ── Pemeriksa materi tata bahasa Inggris ─────────────────────────
   Dijalankan: node tools/validasi-grammar.mjs

   Ditulis SEBELUM topik-topik barunya, supaya kesalahan tertangkap
   mesin dan bukan oleh pemakai. Yang diperiksa bukan cuma "kolomnya
   terisi" — itu mudah dan tidak menangkap apa-apa. Yang diperiksa
   adalah hal yang benar-benar merusak pelajaran:

   · kunci jawaban pilihan ganda menunjuk ke luar daftar pilihan,
   · pilihan pengecoh kembar dengan jawabannya (dua jawaban benar),
   · soal isian tanpa tempat mengisi,
   · jebakan yang "salah"-nya sama persis dengan "benar"-nya,
   · id kembar antar berkas — topik saling menimpa diam-diam,
   · dan LETAK JAWABAN yang berpola. Kalau jawaban benar selalu di
     pilihan B, pemelajar lulus latihan tanpa paham apa pun. Ini
     kesalahan yang paling tidak terlihat saat menulis satu per satu
     dan paling mudah dilihat mesin.                                  */

/* Dibaca lewat penggabung yang SAMA dengan yang dipakai aplikasi.
   Kalau validator menggabung sendiri, ia bisa meluluskan susunan yang
   tidak pernah benar-benar tampil di layar. */
import { PER_TINGKAT as BERKAS } from '../data/grammar-gabung.js';

const JENIS = ['mcq', 'fill', 'order', 'trans', 'dictate', 'speak'];
const rapi = s => String(s ?? '').trim();
const kecil = s => rapi(s).toLowerCase().replace(/\s+/g, ' ');

let masalah = [];
const lapor = (tingkat, id, pesan) => masalah.push({ tingkat, id, pesan });

/* Id dilihat menyeluruh: tabrakan antar berkas tidak akan ketahuan
   kalau tiap berkas hanya diperiksa sendiri-sendiri. */
const semuaId = new Map();

for (const [lv, daftar] of Object.entries(BERKAS)) {
  if (!Array.isArray(daftar)) { lapor(lv, '-', 'bukan larik'); continue; }

  const judulDipakai = new Map();

  for (const g of daftar) {
    const id = rapi(g.id) || '(tanpa id)';

    /* ── Kolom wajib ── */
    for (const k of ['id', 'level', 'title', 'titleId', 'why', 'form'])
      if (!rapi(g[k])) lapor(lv, id, `kolom "${k}" kosong`);

    if (semuaId.has(id)) lapor(lv, id, `id kembar dengan ${semuaId.get(id)}`);
    else semuaId.set(id, lv);

    if (g.level !== lv) lapor(lv, id, `level "${g.level}" tidak cocok tingkatnya`);

    /* Judul kembar bikin dua kartu tak terbedakan di indeks. */
    const jk = kecil(g.titleId);
    if (judulDipakai.has(jk)) lapor(lv, id, `judul Indonesia kembar dengan ${judulDipakai.get(jk)}`);
    else judulDipakai.set(jk, id);

    /* Tanpa kelompok, topik ini tidak muncul di indeks bertema —
       hanya bisa ditemukan lewat pencarian. Jadi ini masalah, bukan
       kerapian. */
    if (!rapi(g.kel)) lapor(lv, id, 'belum punya kelompok tema');

    /* "why" harus menjelaskan, bukan mengulang judul. */
    if (rapi(g.why).length < 40) lapor(lv, id, `"why" terlalu pendek (${rapi(g.why).length} huruf)`);

    /* ── Contoh ── */
    const ex = g.ex || [];
    if (ex.length < 2) lapor(lv, id, `contoh cuma ${ex.length}`);
    const exDipakai = new Set();
    ex.forEach((e, i) => {
      if (!Array.isArray(e)) return lapor(lv, id, `contoh #${i + 1} bukan larik`);
      const [en, idn] = e;
      if (!rapi(en)) lapor(lv, id, `contoh #${i + 1} kalimat Inggrisnya kosong`);
      if (!rapi(idn)) lapor(lv, id, `contoh #${i + 1} terjemahannya kosong`);
      if (kecil(en) === kecil(idn)) lapor(lv, id, `contoh #${i + 1} terjemahan menyalin aslinya`);
      const k = kecil(en);
      if (exDipakai.has(k)) lapor(lv, id, `contoh kembar: "${en}"`);
      exDipakai.add(k);
      /* Terjemahan Indonesia tidak boleh menyisakan kata Inggris utuh
         dari kalimatnya — tanda salin-tempel yang belum diterjemahkan. */
      if (rapi(idn) && kecil(idn).includes(kecil(en).replace(/[.?!]$/, '')))
        lapor(lv, id, `contoh #${i + 1} terjemahannya memuat kalimat Inggrisnya`);
    });

    /* ── Jebakan ── */
    (g.traps || []).forEach((t, i) => {
      if (!Array.isArray(t) || t.length < 3)
        return lapor(lv, id, `jebakan #${i + 1} bukan [salah, benar, alasan]`);
      const [buruk, baik, sebab] = t;
      if (!rapi(buruk) || !rapi(baik)) lapor(lv, id, `jebakan #${i + 1} ada sisi yang kosong`);
      if (kecil(buruk) === kecil(baik))
        lapor(lv, id, `jebakan #${i + 1} sisi salah = sisi benar`);
      if (!rapi(sebab)) lapor(lv, id, `jebakan #${i + 1} tanpa alasan`);
    });

    /* ── Latihan ── */
    const dr = g.drills || [];
    if (dr.length < 4) lapor(lv, id, `latihan cuma ${dr.length} (minimum 4)`);

    const soalDipakai = new Set();
    dr.forEach((d, i) => {
      const n = `latihan #${i + 1}`;
      if (!JENIS.includes(d.t)) return lapor(lv, id, `${n} jenis "${d.t}" tak dikenal`);

      const kunciSoal = kecil(d.q || d.id || d.text || '');
      if (kunciSoal) {
        if (soalDipakai.has(kunciSoal)) lapor(lv, id, `${n} soal kembar`);
        soalDipakai.add(kunciSoal);
      }

      if (d.t === 'mcq') {
        if (!rapi(d.q)) lapor(lv, id, `${n} tanpa pertanyaan`);
        if (!Array.isArray(d.opts) || d.opts.length < 3)
          return lapor(lv, id, `${n} pilihan kurang dari 3`);
        if (!Number.isInteger(d.a) || d.a < 0 || d.a >= d.opts.length)
          return lapor(lv, id, `${n} kunci "${d.a}" di luar ${d.opts.length} pilihan`);
        const unik = new Set(d.opts.map(kecil));
        if (unik.size !== d.opts.length) lapor(lv, id, `${n} ada pilihan kembar`);
        if (d.opts.some(o => !rapi(o))) lapor(lv, id, `${n} ada pilihan kosong`);
      }

      if (d.t === 'fill') {
        if (!rapi(d.q)) lapor(lv, id, `${n} tanpa pertanyaan`);
        /* Tanpa tempat mengisi, pemelajar tidak tahu apa yang diminta. */
        else if (!/_{2,}/.test(d.q)) lapor(lv, id, `${n} isian tanpa "___"`);
        const a = Array.isArray(d.a) ? d.a : [d.a];
        if (!a.length || a.some(x => !rapi(x))) lapor(lv, id, `${n} kunci jawaban kosong`);
      }

      if (d.t === 'trans') {
        if (!rapi(d.id)) lapor(lv, id, `${n} tanpa kalimat Indonesia`);
        const a = Array.isArray(d.a) ? d.a : [d.a];
        if (!a.length || a.some(x => !rapi(x))) lapor(lv, id, `${n} kunci jawaban kosong`);
      }

      if (d.t === 'order') {
        if (!rapi(d.a)) lapor(lv, id, `${n} tanpa kunci urutan`);
        /* Susun kata perlu lebih dari dua kata, kalau tidak tak ada yang disusun. */
        else if (rapi(d.a).split(/\s+/).length < 3) lapor(lv, id, `${n} kunci terlalu pendek`);

        /* `words` adalah bank kata yang ditekan pemelajar. Cabang ini dulu
           hanya memeriksa d.a dan tidak pernah menyentuh d.words, sehingga
           satu butir yang melupakannya lolos dengan "0 masalah" — padahal
           di layar ia menghentikan seluruh sesi latihan unit pertama.

           Isinya juga diperiksa, bukan cuma keberadaannya: kalau bank
           katanya tidak bisa dirangkai menjadi kuncinya, soal itu mustahil
           dijawab benar. Perbandingannya memakai normalisasi yang sama
           dengan js/quiz.js — huruf kecil, tanda baca dibuang. */
        const bakuKata = s => String(s ?? '').toLowerCase()
          .replace(/[.,!?;:"]/g, '').split(/\s+/).filter(Boolean).sort().join(' ');
        if (!Array.isArray(d.words) || !d.words.length)
          lapor(lv, id, `${n} tanpa larik words — bank katanya kosong dan latihan berhenti di layar kosong`);
        else if (rapi(d.a) && bakuKata(d.words.join(' ')) !== bakuKata(d.a))
          lapor(lv, id, `${n} bank kata tidak bisa merangkai kuncinya: [${d.words.join(' | ')}] vs "${d.a}"`);
      }
    });
  }
}

/* ── Letak jawaban pilihan ganda ──────────────────────────────────
   CATATAN: js/quiz.js mengacak urutan pilihan saat latihan dijalankan
   (`shuffleOpts` menyala secara bawaan), jadi condongnya letak jawaban
   di berkas sumber TIDAK sampai ke pemelajar. Angka ini dilaporkan
   sebagai keterangan, bukan masalah — berguna kalau suatu saat ada
   yang mematikan pengacakan atau mencetak soalnya ke kertas.        */
const semua = Object.values(BERKAS).flat();
const letak = [0, 0, 0, 0, 0, 0];
let jmlMcq = 0;
for (const g of semua)
  for (const d of g.drills || [])
    if (d.t === 'mcq' && Number.isInteger(d.a) && d.a < 6) { letak[d.a]++; jmlMcq++; }

const condong = [];
if (jmlMcq >= 40)
  letak.forEach((n, i) => {
    const p = n / jmlMcq;
    if (p > 0.40) condong.push(`pilihan ke-${i + 1} dipakai ${(p * 100).toFixed(0)}% di sumber ` +
      `(tidak terasa di aplikasi — quiz.js mengacak pilihan)`);
  });

/* ── Laporan ─────────────────────────────────────────────────── */
const perTingkat = {};
for (const [lv, daftar] of Object.entries(BERKAS)) {
  const dr = daftar.reduce((a, g) => a + (g.drills?.length || 0), 0);
  perTingkat[lv] = {
    topik: daftar.length,
    latihan: dr,
    rata: daftar.length ? (dr / daftar.length).toFixed(1) : '0',
    contoh: daftar.reduce((a, g) => a + (g.ex?.length || 0), 0),
    jebakan: daftar.reduce((a, g) => a + (g.traps?.length || 0), 0),
    tipis: daftar.filter(g => (g.drills?.length || 0) < 4).length,
  };
}

if (masalah.length) {
  const per = {};
  for (const m of masalah) (per[m.tingkat] ||= []).push(m);
  for (const [lv, list] of Object.entries(per)) {
    console.log(`\n[${lv}] ${list.length} masalah`);
    for (const m of list.slice(0, 30)) console.log(`   ${m.id}: ${m.pesan}`);
    if (list.length > 30) console.log(`   … ${list.length - 30} lagi`);
  }
}
if (condong.length) {
  console.log('\n[letak jawaban]');
  for (const c of condong) console.log('   ' + c);
}

console.log('\ntingkat  topik  latihan   rata   contoh  jebakan  <4latihan');
console.log('-'.repeat(62));
let T = { topik: 0, latihan: 0, contoh: 0, jebakan: 0, tipis: 0 };
for (const [lv, s] of Object.entries(perTingkat)) {
  console.log(`${lv.padEnd(8)} ${String(s.topik).padStart(5)} ${String(s.latihan).padStart(8)} ` +
              `${String(s.rata).padStart(6)} ${String(s.contoh).padStart(8)} ` +
              `${String(s.jebakan).padStart(8)} ${String(s.tipis).padStart(10)}`);
  T.topik += s.topik; T.latihan += s.latihan; T.contoh += s.contoh;
  T.jebakan += s.jebakan; T.tipis += s.tipis;
}
console.log('-'.repeat(62));
console.log(`${'TOTAL'.padEnd(8)} ${String(T.topik).padStart(5)} ${String(T.latihan).padStart(8)} ` +
            `${(T.latihan / T.topik).toFixed(1).padStart(6)} ${String(T.contoh).padStart(8)} ` +
            `${String(T.jebakan).padStart(8)} ${String(T.tipis).padStart(10)}`);
console.log(`\nSebaran kunci pilihan ganda (${jmlMcq} soal): ` +
            letak.slice(0, 4).map((n, i) => `${i + 1}:${(n / jmlMcq * 100).toFixed(0)}%`).join('  '));
console.log(`\n${masalah.length} masalah`);
/* Condong letak jawaban TIDAK dihitung masalah: quiz.js mengacak
   pilihan, jadi tidak ada yang sampai ke pemelajar. */
process.exit(masalah.length ? 1 : 0);
