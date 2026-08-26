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
  for (const tambahan of [`${c}-course`, `${c}-plus`, `${c}-plus2`]) {
    if (!existsSync(join(AKAR, 'data', 'lang', `${tambahan}.js`))) continue;
    const mod = await imp(`data/lang/${tambahan}.js`);
    bundel.push(mod.COURSE || mod.PLUS || Object.values(mod)[0]);
  }

  const vocab = bundel.flatMap(b => arr(b?.vocab));
  const phrases = bundel.flatMap(b => arr(b?.phrases));
  /* Topik ber-id sama DIGABUNG, persis seperti gabung() di js/course.js.
     Berkas perluasan kedua sengaja memakai id topik yang sudah ada untuk
     MENAMBAH latihan ke topik itu; menghitungnya sebagai dua topik akan
     melaporkan 18 "id ganda" palsu di tiap bahasa dan menutupi id ganda
     yang benar-benar keliru. */
  const grammar = [];
  for (const g of bundel.flatMap(b => arr(b?.grammar))) {
    const ada = grammar.find(x => x.id === g.id);
    if (!ada) { grammar.push({ ...g, drills: [...arr(g.drills)], ex: [...arr(g.ex)], traps: [...arr(g.traps)] }); continue; }
    ada.drills.push(...arr(g.drills));
    ada.ex.push(...arr(g.ex));
    ada.traps.push(...arr(g.traps));
    for (const k of ['title', 'titleId', 'why', 'form', 'level'])
      if (g[k] !== undefined && ada[k] === undefined) ada[k] = g[k];
  }
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

  /* Kata kembar — hanya DI DALAM satu paket yang salah.

     Pemeriksaan ini dulu menghitung kembar di seluruh bahasa sekaligus,
     dan melaporkan 168 "masalah" pada delapan bahasa. Semuanya derau:
     tumpang-tindih antarpaket memang DISENGAJA — paket "kata inti" adalah
     cicipan, paket tema adalah kurikulumnya, jadi 水 memang muncul di
     keduanya (lihat komentar lexOf di js/langctx.js). Kartu hafalan sudah
     membuang kembarnya sendiri, sementara daftar kosakata memang harus
     menampilkan isi utuh tiap paket.

     Alat yang selalu melaporkan delapan masalah palsu membuat masalah
     yang sungguhan tidak terlihat. Yang benar-benar keliru adalah kata
     yang muncul dua kali di dalam SATU paket — di situ pemelajar melihat
     entri yang sama berturut-turut di halaman yang sama. */
  vocab.forEach(p => {
    const kata = new Map();
    arr(p.words).forEach((w, i) => {
      const k = String(w[0]).trim();
      if (k) kata.set(k, [...(kata.get(k) || []), i]);
    });
    for (const [k, ix] of kata)
      if (ix.length > 1)
        catat(c, 'vocab', `paket ${p.id}: "${k}" muncul ${ix.length}× (indeks ${ix.join(', ')})`);
  });
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

/* Status keluar HARUS mencerminkan hasilnya. Sebelumnya berkas ini selalu
   keluar dengan 0, jadi ia melaporkan delapan masalah di layar sementara
   rangkaian pemeriksaan menganggapnya lulus — persis keadaan yang membuat
   sebuah alat pemeriksa tidak ada gunanya. */
process.exit(masalah.length ? 1 : 0);
