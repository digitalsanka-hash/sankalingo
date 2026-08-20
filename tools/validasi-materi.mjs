/* Pemeriksa bentuk data materi bahasa.
   Menangkap kesalahan yang gampang lolos saat menulis materi banyak:
   kolom tertukar, romanisasi kosong, id ganda, rujukan menggantung.

   Jalankan:  node tools/validasi-materi.mjs                              */
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const imp = p => import(pathToFileURL(join(AKAR, p)).href);
const arr = x => (Array.isArray(x) ? x : []);
const KODE = ['ko', 'ja', 'zh', 'ar', 'ru', 'de', 'fr', 'es'];

/* Aksara asli tiap bahasa. Dipakai memeriksa kolom mana yang seharusnya
   berisi teks bahasa target — kesalahan paling sering saat menulis massal. */
const AKSARA = {
  ko: /[가-힣ㄱ-ㆎ]/, ja: /[぀-ヿ一-鿿]/, zh: /[一-鿿]/,
  ar: /[؀-ۿ]/, ru: /[Ѐ-ӿ]/, de: null, fr: null, es: null
};

const masalah = [];
const catat = (kode, jenis, pesan) => masalah.push({ kode, jenis, pesan });

for (const c of KODE) {
  const m = await imp(`data/lang/${c}.js`);
  const L = m[c.toUpperCase()] || Object.values(m)[0];
  const bundel = [L];
  for (const tambahan of [`${c}-course`, `${c}-plus`]) {
    if (!existsSync(join(AKAR, 'data', 'lang', `${tambahan}.js`))) continue;
    const mod = await imp(`data/lang/${tambahan}.js`);
    bundel.push(mod.COURSE || mod.PLUS || Object.values(mod)[0]);
  }

  const vocab = bundel.flatMap(b => arr(b?.vocab));
  const phrases = bundel.flatMap(b => arr(b?.phrases));
  const grammar = bundel.flatMap(b => arr(b?.grammar));
  const levels = bundel.flatMap(b => arr(b?.levels));
  const re = AKSARA[c];

  /* id ganda */
  const lihat = (daftar, label, ambil) => {
    const n = new Map();
    daftar.forEach(x => {
      const id = ambil(x);
      if (!id) return catat(c, label, `ada butir tanpa id`);
      n.set(id, (n.get(id) || 0) + 1);
    });
    [...n].filter(([, v]) => v > 1)
      .forEach(([id, v]) => catat(c, label, `id ganda "${id}" (${v}×)`));
  };
  lihat(vocab, 'vocab', p => p.id);
  lihat(grammar, 'grammar', g => g.id);

  /* bentuk baris kosakata & frasa */
  const periksaBaris = (baris, asal, i) => {
    if (!Array.isArray(baris) || baris.length < 3)
      return catat(c, asal, `baris ${i} bukan [asli, romanisasi, arti]`);
    const [a, r, arti] = baris;
    if (!a || !arti) return catat(c, asal, `baris ${i} ada kolom kosong: ${JSON.stringify(baris).slice(0, 60)}`);
    if (re) {
      if (!re.test(String(a)))
        catat(c, asal, `kolom 1 bukan aksara ${c}: "${String(a).slice(0, 24)}"`);
      if (!String(r || '').trim())
        catat(c, asal, `romanisasi kosong untuk "${String(a).slice(0, 24)}"`);
      /* Keterangan dalam kurung seperti "besar (い)" atau "suka (な)" SAH —
         itu penanda jenis kata sifat, bukan kolom yang tertukar. Yang salah
         adalah kalau arti Indonesianya SEBAGIAN BESAR beraksara asli. */
      const tanpaKurung = String(arti).replace(/\([^)]*\)/g, '');
      const kadarAsing = [...tanpaKurung].filter(ch => re.test(ch)).length /
                         Math.max(1, [...tanpaKurung].length);
      if (kadarAsing > 0.4)
        catat(c, asal, `kolom arti tampak tertukar: "${String(arti).slice(0, 24)}"`);
    }
  };
  vocab.forEach(p => arr(p.words).forEach((w, i) => periksaBaris(w, `vocab:${p.id}`, i)));
  phrases.forEach(g => arr(g.items).forEach((it, i) => periksaBaris(it, `frasa:${g.g}`, i)));

  /* contoh tata bahasa */
  let exTanpaRom = 0;
  grammar.forEach(g => arr(g.ex).forEach((e, i) => {
    if (!Array.isArray(e) || e.length < 2) return catat(c, `grammar:${g.id}`, `contoh ${i} bentuknya salah`);
    if (re && !re.test(String(e[0])))
      catat(c, `grammar:${g.id}`, `contoh ${i} kolom 1 bukan aksara ${c}`);
    if (re && !String(e[2] || '').trim()) exTanpaRom++;
  }));
  if (exTanpaRom)
    catat(c, 'grammar', `${exTanpaRom} contoh kalimat belum punya romanisasi ` +
          `(tetap berbunyi lewat alih aksara otomatis, tapi tidak tampil di layar)`);

  /* latihan pilihan ganda */
  grammar.forEach(g => arr(g.drills).forEach((d, i) => {
    if (d.t !== 'mcq') return;
    if (!Array.isArray(d.opts) || d.opts.length < 2)
      catat(c, `grammar:${g.id}`, `latihan ${i} pilihannya kurang`);
    else if (typeof d.a !== 'number' || d.a < 0 || d.a >= d.opts.length)
      catat(c, `grammar:${g.id}`, `latihan ${i} kunci jawaban di luar jangkauan`);
    if (new Set(d.opts).size !== (d.opts || []).length)
      catat(c, `grammar:${g.id}`, `latihan ${i} punya pilihan kembar`);
  }));

  /* rujukan unit → materi */
  const idG = new Set(grammar.map(g => g.id));
  const idV = new Set(vocab.map(p => p.id));
  const idP = new Set(phrases.map(g => g.g));
  const idS = new Set(arr(L.scripts).map(s => s.id));
  levels.forEach(lv => arr(lv.units).forEach(u => {
    arr(u.grammar).forEach(x => { if (!idG.has(x)) catat(c, `unit:${u.id}`, `grammar "${x}" tidak ada`); });
    arr(u.vocab).forEach(x => { if (!idV.has(x)) catat(c, `unit:${u.id}`, `vocab "${x}" tidak ada`); });
    arr(u.phrases).forEach(x => { if (!idP.has(x)) catat(c, `unit:${u.id}`, `frasa "${x}" tidak ada`); });
    arr(u.script).forEach(x => { if (!idS.has(x)) catat(c, `unit:${u.id}`, `aksara "${x}" tidak ada`); });
  }));

  /* kata kembar dalam satu bahasa */
  const kata = new Map();
  vocab.forEach(p => arr(p.words).forEach(w => {
    const k = String(w[0]).trim();
    if (k) kata.set(k, (kata.get(k) || 0) + 1);
  }));
  const kembar = [...kata].filter(([, v]) => v > 1);
  if (kembar.length > 6)
    catat(c, 'vocab', `${kembar.length} kata kembar, contoh: ${kembar.slice(0, 5).map(x => x[0]).join(', ')}`);
  else kembar.forEach(([k, v]) => catat(c, 'vocab', `kata kembar "${k}" (${v}×)`));
}

if (!masalah.length) {
  console.log('Bersih — tidak ada masalah bentuk data.');
} else {
  const perBahasa = {};
  masalah.forEach(x => (perBahasa[x.kode] ||= []).push(x));
  for (const [c, list] of Object.entries(perBahasa)) {
    console.log(`\n[${c}] ${list.length} masalah`);
    list.slice(0, 25).forEach(x => console.log(`   ${x.jenis}: ${x.pesan}`));
    if (list.length > 25) console.log(`   … dan ${list.length - 25} lagi`);
  }
  console.log(`\nTOTAL ${masalah.length} masalah`);
}
