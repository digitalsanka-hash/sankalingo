/* ── Pemeriksa paket kosakata tambahan ────────────────────────────
   Dijalankan: node tools/validasi-kata.mjs
   Mengisi pengucapan: node tools/validasi-kata.mjs --isi

   Berkas <kode>-kata.js memuat DUA hal sekaligus: paket kata baru dan
   contoh pemakaiannya. Menaruhnya dalam satu berkas membuat kata dan
   contohnya tidak bisa terpisah — tapi juga membuat dua daftar yang
   harus tetap sejalan. Itulah yang diperiksa di sini.

   Yang diperiksa dan kenapa:

   · tiap kata WAJIB punya contoh, dan tiap contoh wajib punya katanya.
     Contoh yatim tidak akan pernah tampil di mana pun — ia tertulis
     tapi tak terpakai, dan tidak ada yang memberi tahu;
   · kata kembar antarpaket. Kartu hafalan membuang kemunculan kedua,
     jadi kata kembar diam-diam kehilangan contohnya yang kedua;
   · contoh HARUS memuat katanya. Ini yang paling sering meleset saat
     menulis cepat, dan hasilnya contoh yang tidak mencontohkan apa pun;
   · terjemahan tidak boleh menyalin kalimat aslinya;
   · pengucapan tidak boleh kosong — kolom itulah yang dibaca pemelajar
     yang belum hafal ejaan bahasanya.

   Untuk ko/ar/ru pengucapannya DIHITUNG dari aksaranya lewat
   js/translit.js: tulis '@' di kolom kedua, lalu jalankan --isi. Dengan
   begitu ejaannya persis sama dengan yang dipakai mesin suara, dan
   tidak lahir sistem romanisasi kedua.                                */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { keLatin } from '../js/translit.js';

const akar = join(dirname(fileURLToPath(import.meta.url)), '..');
const P = p => join(akar, p);
const isiMode = process.argv.includes('--isi');

const KODE = ['ar', 'de', 'es', 'fr', 'ja', 'ko', 'ru', 'zh'];
/* Bahasa yang pengucapannya bisa dihitung dari aksaranya. ja & zh tidak
   masuk: bacaan kanji dan pinyin tidak bisa ditebak dari bentuk
   aksaranya, jadi harus ditulis tangan. */
const BERATURAN = ['ko', 'ar', 'ru'];
/* Bahasa tanpa spasi antar kata — pemeriksa "contoh memuat katanya"
   tidak bisa memecah kalimatnya per kata. */
const TANPA_SPASI = new Set(['ja', 'zh']);

const rapi = s => String(s ?? '').trim();
const kecil = s => rapi(s).toLowerCase().replace(/\s+/g, ' ');

/* Kata sandang di depan kata benda tidak ikut muncul apa adanya di
   kalimat (der Tisch → dem Tisch, la nube → las nubes), jadi yang
   dicocokkan adalah kata INTINYA. */
const SANDANG = /^(der|die|das|le|la|les|l'|el|los|las|un|une|una)\s*/i;
const inti = w => rapi(w).replace(SANDANG, '').trim();

/* ── Pencocokan kata di dalam kalimat ─────────────────────────────
   Ini bagian yang paling menuntut kehati-hatian. Pencocokan lugu
   (contoh.includes(kata)) menolak kalimat yang justru PALING BENAR,
   karena kata memang berubah bentuk begitu dipakai:

     die Hand → "Wasch dir die HÄNDE"        (jamak berumlaut)
     abfahren → "Wann FÄHRT der Zug AB?"     (kata kerja terpisah —
                 justru inti pelajarannya, awalannya memang terbang
                 ke ujung kalimat)
     sano     → "La fruta es muy SANA"       (penyesuaian jenis kelamin)
     salir    → "El tren SALE a las ocho"    (konjugasi)

   Menolak semua itu berarti alat ini menghukum penulisan yang benar
   dan memaksa contoh yang kaku. Jadi tiap perubahan bentuk itu
   diajarkan ke alatnya satu per satu.                                */

/* Awalan yang memisahkan diri pada kata kerja Jerman. Diurutkan dari
   yang terpanjang supaya "herunter" tidak keburu tertangkap "her". */
const AWALAN_PISAH = ['herunter', 'zurück', 'hoch', 'nach', 'vor', 'mit', 'zu',
  'auf', 'aus', 'ein', 'ab', 'an', 'weg', 'los', 'her', 'hin', 'um'];

/* Umlaut muncul-hilang saat kata berubah bentuk: Hand→Hände,
   fahren→fährt, Buch→Bücher. Disamakan supaya pangkalnya cocok. */
const lipatUmlaut = s => s
  .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');

/* Aksen Romawi & Slavia dilipat dengan cara yang sama. */
const lipatAksen = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

const lipat = s => lipatAksen(lipatUmlaut(kecil(s)));

/* ── Akar kata kerja Korea ────────────────────────────────────────
   Bentuk kamus ber-다 hampir tidak pernah muncul apa adanya di
   kalimat: 아프다 jadi 아파요, 끄다 jadi 껐어요, 올리다 jadi 올려요.
   Vokal suku terakhirnya BERUBAH saat bertemu akhiran, dan itu memang
   aturan bahasanya — bukan kesalahan penulisan contoh.

   Suku Hangul dihitung: kode = 0xAC00 + (awal*21 + vokal)*28 + akhir.
   Jadi vokalnya bisa diganti dengan aritmetika, tanpa tabel besar. */
const GANTI_VOKAL = { 18: [0, 4], 20: [6], 13: [14], 8: [9] };  /* ㅡ→ㅏ/ㅓ · ㅣ→ㅕ · ㅜ→ㅝ · ㅗ→ㅘ */

function akarKorea(kata) {
  let stem = kata.replace(/다$/, '');
  if (!stem) return [];
  const hasil = new Set([stem]);
  const akhir = stem.codePointAt(stem.length - 1) - 0xAC00;
  if (akhir >= 0 && akhir < 11172) {
    const awal = Math.floor(akhir / 588);
    const vokal = Math.floor((akhir % 588) / 28);
    const tutup = akhir % 28;
    for (const v of GANTI_VOKAL[vokal] || []) {
      /* Semua konsonan penutup dicoba, bukan cuma yang aslinya.
         Akhiran lampau MENAMBAHKAN penutup ke sukunya: 끄다 → 껐어요,
         di mana 꺼 menyerap ㅆ jadi 껐. Tanpa ini, satu-satunya bentuk
         yang benar-benar dipakai orang justru tidak dikenali. */
      for (let t = 0; t < 28; t++)
        hasil.add(stem.slice(0, -1) + String.fromCodePoint(0xAC00 + (awal * 21 + v) * 28 + t));
    }
    /* Suku terakhir tanpa konsonan penutup — 받다 → 받았 tetap cocok,
       tapi 걷다 → 걸었 tidak, jadi pangkalnya juga dicoba. */
    if (stem.length > 1) hasil.add(stem.slice(0, -1));
  }
  return [...hasil].filter(x => x.length);
}

/* ── Penyeragaman tulisan Arab ────────────────────────────────────
   Satu kata Arab bisa tampil dengan bentuk yang sangat berbeda tanpa
   berubah katanya:

     سِنّ  →  السِّنُّ     (kata sandang ال + akhiran kasus)
     صِحَّة →  الصِّحَّةُ
     دَوَاء →  الدَّوَاءَ

   Tiga hal yang berubah: HARAKAT (mengikuti kasus, jadi tidak boleh
   ikut dibandingkan), KATA SANDANG ال di depan, dan bentuk alif yang
   berganti (أ إ آ ا). Semuanya diseragamkan dulu sebelum dicocokkan.

   Perhatikan ال pada huruf syamsiyah: السِّنُّ ditulis ا + ل + س
   bersyadda, jadi membuang "ال" saja sudah cukup — syaddanya ikut
   terbuang bersama harakatnya. */
const HARAKAT = /[ً-ْٰـ]/g;   /* fathah…sukun, alif khanjariah, tatwil */
const seragamArab = s => String(s)
  .replace(HARAKAT, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ة/g, 'ه')
  .trim();

function termuat(kata, contoh, kode) {
  const k = lipat(inti(kata));
  const c = lipat(contoh);
  if (!k) return true;
  if (TANPA_SPASI.has(kode)) return contoh.includes(inti(kata));
  if (c.includes(k)) return true;

  if (kode === 'ar') {
    const ka = seragamArab(kata);
    const ca = seragamArab(contoh);
    if (ca.includes(ka)) return true;
    /* Kata sandang ال menempel di depan kata dalam kalimat. */
    if (ca.includes('ال' + ka)) return true;
    /* Kata benda berakhiran ة yang di kalimatnya jadi ت, dan sebaliknya. */
    const tanpaAkhir = ka.replace(/ه$/, '');
    if (tanpaAkhir.length >= 2 && ca.includes(tanpaAkhir)) return true;

    /* JAMAK TAKSIR (جمع تكسير). Arab membentuk sebagian jamaknya bukan
       dengan menambah akhiran, melainkan dengan MENYUSUN ULANG akarnya:

         قَدَم → أَقْدَام      نَجْم → نُجُوم      كِتَاب → كُتُب

       Huruf-hurufnya sama, urutannya sama, tapi vokal panjangnya
       berpindah — sehingga pencocokan huruf demi huruf pasti gagal.
       Yang tetap adalah AKARNYA: tiga konsonan yang sama, berurutan.
       Itulah yang dibandingkan di sini, dan itu pula yang diajarkan
       halaman sistem kata kerja Arab. */
    const rangka = t => seragamArab(t).replace(/[اوي]/g, '');
    const akarKata = rangka(kata);
    if (akarKata.length >= 3) {
      for (const potong of ca.split(/\s+/)) {
        const r = rangka(potong);
        /* Akar harus muncul BERURUTAN di dalam rangka katanya. */
        let i = 0;
        for (const huruf of r) if (huruf === akarKata[i]) i++;
        if (i === akarKata.length) return true;
      }
    }
  }

  if (kode === 'ko') {
    for (const akar of akarKorea(kata)) if (contoh.includes(akar)) return true;
  }

  /* Kata kerja terpisah Jerman: pangkalnya dan awalannya muncul di
     tempat yang berbeda dalam kalimat, dan itu memang benar. */
  if (kode === 'de') {
    for (const aw of AWALAN_PISAH) {
      if (!k.startsWith(aw) || k.length <= aw.length + 2) continue;
      const pangkal = k.slice(aw.length).replace(/en$/, '');
      /* Pangkalnya sendiri bisa berubah vokal (fahren → fährt), jadi
         cukup dicocokkan empat huruf pertamanya. */
      const potong = pangkal.slice(0, Math.max(3, Math.min(4, pangkal.length)));
      if (potong.length >= 3 && c.includes(potong) && c.includes(aw)) return true;
    }
  }

  for (const bagian of k.split(/\s+/)) {
    if (bagian.length < 3) continue;
    if (c.includes(bagian)) return true;

    /* Akhiran yang berganti: konjugasi dan penyesuaian bentuk.

       Huruf Kiril WAJIB ditulis sendiri di sini. Sempat terlewat, dan
       akibatnya seluruh pemenggal ini tidak berbuat apa-apa untuk
       bahasa Rusia: "а" Kiril (U+0430) bukan "a" Latin (U+0061),
       sehingga pola /(o|a|e)$/ tidak pernah cocok dan рука tidak pernah
       terhubung ke руки. Kesalahan yang tidak menimbulkan galat — hanya
       laporan salah tuduh yang tampak seperti kesalahan data. */
    const tanpaAkhiran = bagian
      .replace(/(ться|тся|ть|ся)$/, '')   /* infinitif & refleksif Rusia */
      .replace(/(ar|er|ir|re)$/, '')      /* infinitif Romawi & Prancis  */
      .replace(/(o|a|e)$/, '')            /* penyesuaian jenis kelamin   */
      .replace(/[аяоеыиуьйю]$/, '');      /* akhiran kasus Rusia         */
    /* Ambang tiga huruf, bukan empat: banyak kata Spanyol dan Prancis
       yang pangkalnya memang cuma tiga — sano→san, salir→sal,
       subir→sub. Dengan ambang empat, justru kata-kata pendek yang
       paling sering dipakai yang tertolak. */
    if (tanpaAkhiran.length >= 3 && c.includes(tanpaAkhiran)) return true;

    /* Pangkal umum: buang tiga huruf terakhir, sisakan minimal empat. */
    const pangkal = bagian.slice(0, Math.max(4, bagian.length - 3));
    if (pangkal.length >= 4 && c.includes(pangkal)) return true;
  }
  return false;
}

const masalah = [];
const lapor = (kode, pesan) => masalah.push({ kode, pesan });
const ringkas = {};

for (const kode of KODE) {
  const berkas = `data/lang/${kode}-kata.js`;
  if (!existsSync(P(berkas))) continue;

  let K;
  try { K = (await import(`../${berkas}`)).KATA; }
  catch (e) { lapor(kode, `berkas gagal dimuat: ${e.message}`); continue; }

  const paket = K.vocab || [];
  const pakai = K.pakai || {};
  const semuaKata = [];
  const kunciPaket = new Set();

  for (const p of paket) {
    for (const k of ['id', 'title', 'level']) if (!rapi(p[k])) lapor(kode, `paket tanpa "${k}"`);
    if (kunciPaket.has(p.id)) lapor(kode, `id paket kembar: ${p.id}`);
    kunciPaket.add(p.id);
    if (!(p.words || []).length) lapor(kode, `paket ${p.id} kosong`);

    for (const w of p.words || []) {
      if (!Array.isArray(w) || w.length < 3) { lapor(kode, `${p.id}: entri bukan [kata, ucapan, arti]`); continue; }
      const [kata, ucap, arti] = w;
      if (!rapi(kata)) lapor(kode, `${p.id}: ada kata kosong`);
      if (!rapi(arti)) lapor(kode, `${p.id}: "${kata}" tanpa arti`);
      if (!rapi(ucap)) lapor(kode, `${p.id}: "${kata}" tanpa pengucapan`);
      else if (ucap === '@' && !BERATURAN.includes(kode))
        lapor(kode, `${p.id}: "${kata}" memakai '@' padahal bahasa ini harus ditulis tangan`);
      semuaKata.push(kata);
    }
  }

  /* Kata kembar antarpaket — kemunculan kedua hilang dari kartu hafalan. */
  const terlihat = new Map();
  for (const k of semuaKata) {
    if (terlihat.has(k)) lapor(kode, `kata kembar antarpaket: "${k}"`);
    terlihat.set(k, true);
  }

  /* Tiap kata punya contoh; tiap contoh punya katanya. */
  const setKata = new Set(semuaKata);
  for (const k of semuaKata) if (!pakai[k]) lapor(kode, `"${k}" tanpa contoh pemakaian`);
  for (const k of Object.keys(pakai)) if (!setKata.has(k)) lapor(kode, `contoh yatim: "${k}" tidak ada di paket mana pun`);

  const contohDipakai = new Set();
  for (const [kata, c] of Object.entries(pakai)) {
    if (!Array.isArray(c) || c.length < 2) { lapor(kode, `contoh "${kata}" bukan [kalimat, terjemahan]`); continue; }
    const [kal, arti] = c;
    if (!rapi(kal)) lapor(kode, `contoh "${kata}" kalimatnya kosong`);
    if (!rapi(arti)) lapor(kode, `contoh "${kata}" terjemahannya kosong`);
    if (kecil(kal) === kecil(arti)) lapor(kode, `contoh "${kata}" terjemahan menyalin aslinya`);
    if (rapi(kal) && !termuat(kata, kal, kode)) lapor(kode, `contoh "${kata}" tidak memuat katanya — "${kal}"`);
    const kk = kecil(kal);
    if (contohDipakai.has(kk)) lapor(kode, `kalimat contoh kembar: "${kal}"`);
    contohDipakai.add(kk);
    /* Ambang panjang kalimat berbeda per bahasa, dan itu bukan
       kelonggaran melainkan tata bahasa: Rusia MELESAPKAN kopula, jadi
       "Окно открыто." (Jendelanya terbuka) sudah kalimat lengkap dengan
       dua kata. Menuntut tiga kata di sana berarti memaksa kalimat yang
       justru tidak wajar. Arab juga begitu lewat kalimat nominal, dan
       Korea lewat partikel yang menempel — "머리가 아파요." dihitung dua
       kata padahal memuat subjek, penanda, kata kerja, dan kesopanan. */
    const panjang = TANPA_SPASI.has(kode) ? rapi(kal).length : rapi(kal).split(/\s+/).length;
    const min = TANPA_SPASI.has(kode) ? 4 : ['ru', 'ar', 'ko'].includes(kode) ? 2 : 3;
    if (panjang < min) lapor(kode, `contoh "${kata}" terlalu pendek`);
  }

  ringkas[kode] = {
    paket: paket.length,
    kata: semuaKata.length,
    contoh: Object.keys(pakai).length,
    kosongUcap: semuaKata.filter((k, i) => false).length,
  };
}

/* ── Mengisi pengucapan yang ditandai '@' ───────────────────────── */
if (isiMode) {
  let diisi = 0;
  for (const kode of BERATURAN) {
    const berkas = P(`data/lang/${kode}-kata.js`);
    if (!existsSync(berkas)) continue;
    let teks = readFileSync(berkas, 'utf8');
    /* Barisnya berbentuk  ['kata', '@', 'arti'],  — hanya baris itu
       yang disentuh, sisanya dibiarkan apa adanya. */
    teks = teks.replace(/\['([^']+)',\s*'@',/g, (m, kata) => {
      const rom = keLatin(kode, kata);
      if (!rom) return m;
      diisi++;
      /* Romanisasi Arab memuat APOSTROF untuk hamzah dan ain — ra's,
         dziraa', su'aal. Ditulis di dalam kutip tunggal, apostrof itu
         menutup stringnya di tengah jalan dan seluruh berkasnya rusak
         sintaks. Karena itu yang berapostrof dibungkus kutip ganda. */
      const kutip = rom.includes("'") ? `"${rom}"` : `'${rom}'`;
      return `['${kata}', ${kutip},`;
    });
    writeFileSync(berkas, teks);
  }
  console.log(`${diisi} pengucapan diisi dari aksaranya.`);
  process.exit(0);
}

/* ── Laporan ────────────────────────────────────────────────────── */
if (masalah.length) {
  const per = {};
  for (const m of masalah) (per[m.kode] ||= []).push(m.pesan);
  for (const [k, list] of Object.entries(per)) {
    console.log(`\n[${k}] ${list.length} masalah`);
    for (const p of list.slice(0, 20)) console.log('   ' + p);
    if (list.length > 20) console.log(`   … ${list.length - 20} lagi`);
  }
}

console.log('\nkode   paket   kata  contoh');
console.log('-'.repeat(30));
let T = { paket: 0, kata: 0, contoh: 0 };
for (const [k, s] of Object.entries(ringkas)) {
  console.log(`${k.padEnd(6)} ${String(s.paket).padStart(5)} ${String(s.kata).padStart(6)} ${String(s.contoh).padStart(7)}`);
  T.paket += s.paket; T.kata += s.kata; T.contoh += s.contoh;
}
console.log('-'.repeat(30));
console.log(`${'TOTAL'.padEnd(6)} ${String(T.paket).padStart(5)} ${String(T.kata).padStart(6)} ${String(T.contoh).padStart(7)}`);
console.log(`\n${masalah.length} masalah`);
process.exit(masalah.length ? 1 : 0);
