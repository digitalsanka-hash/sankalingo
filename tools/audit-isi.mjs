/* Audit isi materi — menghitung apa yang benar-benar ada, per bahasa.
   Jalankan: node tools/audit-isi.mjs                                    */
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const imp = p => import(pathToFileURL(join(AKAR, p)).href);
const arr = x => (Array.isArray(x) ? x : []);
const KODE = ['ko', 'ja', 'zh', 'ar', 'ru', 'de', 'fr', 'es'];

const T = {};
const DATA = {};   /* modul tiap bahasa, dipakai lagi di laporan romanisasi */
let tot = { kata: 0, frasa: 0, grammar: 0, latihan: 0, contoh: 0, aksara: 0, kanji: 0, kataKanji: 0, contohPakai: 0,
            unit: 0, pelajaran: 0, bacaan: 0, soalBacaan: 0, tingkat: 0 };

for (const c of KODE) {
  const m = await imp(`data/lang/${c}.js`);
  const L = m[c.toUpperCase()] || Object.values(m)[0];
  DATA[c] = L;
  let C = null;
  try { const cm = await imp(`data/lang/${c}-course.js`); C = cm.COURSE || Object.values(cm)[0]; } catch {}
  /* Perluasan materi hidup di berkas terpisah dan digabung saat aplikasi
     berjalan; audit harus ikut membacanya, kalau tidak angkanya bohong. */
  let P = null;
  try { const pm = await imp(`data/lang/${c}-plus.js`); P = pm.PLUS || Object.values(pm)[0]; } catch {}
  /* Bank contoh pemakaian: satu kalimat per kata, memperlihatkan kata itu
     benar-benar dipakai. Ikut dihitung karena inilah yang membedakan
     daftar kata dari bahan belajar. */
  let PK = null;
  try { const km = await imp(`data/lang/${c}-pakai.js`); PK = km.PAKAI || Object.values(km)[0]; } catch {}

  /* Unit perluasan menyatu ke level yang ID-nya sudah ada — sama seperti
     yang dilakukan gabung() di js/course.js. */
  const levels = arr(C?.levels).map(lv => ({ ...lv, units: [...arr(lv.units)] }));
  for (const lv of arr(P?.levels)) {
    const ada = levels.find(x => x.id === lv.id);
    if (ada) ada.units.push(...arr(lv.units));
    else levels.push(lv);
  }

  const gab = {
    vocab:   [...arr(L.vocab), ...arr(C?.vocab), ...arr(P?.vocab)],
    phrases: [...arr(L.phrases), ...arr(C?.phrases), ...arr(P?.phrases)],
    grammar: [...arr(L.grammar), ...arr(C?.grammar), ...arr(P?.grammar)],
    levels
  };
  const { BACAAN } = await imp('data/lang/exam-bacaan.js');
  const bc = arr(BACAAN[c]);

  const r = {
    tingkat:   gab.levels.length,
    unit:      gab.levels.reduce((a, lv) => a + arr(lv.units).length, 0),
    paketKata: gab.vocab.length,
    kata:      gab.vocab.reduce((a, p) => a + arr(p.words).length, 0),
    grupFrasa: gab.phrases.length,
    frasa:     gab.phrases.reduce((a, g) => a + arr(g.items).length, 0),
    grammar:   gab.grammar.length,
    latihan:   gab.grammar.reduce((a, g) => a + arr(g.drills).length, 0),
    contoh:    gab.grammar.reduce((a, g) => a + arr(g.ex).length, 0),
    aksara:    arr(L.scripts).reduce((a, s) => a + arr(s.chars).length, 0),
    contohPakai: PK ? Object.keys(PK).length : 0,
    kanji:     arr(L.kanji).length,
    kataKanji: arr(L.kanji).reduce((a, k) => a + arr(k.kata).length, 0),
    bacaan:    bc.length,
    soalBacaan: bc.reduce((a, b) => a + arr(b.soal).length, 0)
  };
  T[c] = r;
  for (const k of Object.keys(tot)) if (r[k] !== undefined) tot[k] += r[k];
}

const kol = ['tingkat','unit','aksara','kanji','kataKanji','paketKata','kata','contohPakai','grupFrasa','frasa',
             'grammar','contoh','latihan','bacaan','soalBacaan'];
console.log('kode ' + kol.map(k => k.padStart(10)).join(''));
console.log('-'.repeat(5 + kol.length * 10));
for (const c of KODE)
  console.log(c.padEnd(5) + kol.map(k => String(T[c][k] ?? 0).padStart(10)).join(''));
console.log('-'.repeat(5 + kol.length * 10));
console.log('TOT  ' + kol.map(k => String(KODE.reduce((a,c)=>a+(T[c][k]||0),0)).padStart(10)).join(''));

const butir = KODE.reduce((a,c) => a + T[c].kata + T[c].frasa + T[c].contoh + T[c].latihan + T[c].aksara + T[c].soalBacaan + T[c].kanji + T[c].kataKanji + T[c].contohPakai, 0);
console.log(`\nTOTAL BUTIR MATERI (8 bahasa): ${butir}`);
console.log(`Rata-rata per bahasa          : ${Math.round(butir / 8)}`);

/* ── Kelengkapan romanisasi & tanda tekanan ───────────────────────

   Romanisasi bukan hiasan: untuk bahasa beraksara asing, itulah yang
   dibacakan mesin suara ketika perangkat pemelajar tidak punya suara
   bahasa aslinya.

   Tanda tekanan dilaporkan khusus untuk bahasa Rusia karena tekanan di
   sana TIDAK BISA ditebak dari ejaannya dan mengubah makna (за́мок kastil
   vs замо́к gembok). Aplikasi ini mengajarkannya untuk kosakata inti lalu
   berhenti tanpa mengatakan apa-apa pada kosakata tambahan — pemelajar
   tidak punya cara tahu bahwa yang satu lengkap dan yang lain tidak.

   Menambalnya berarti menuliskan tekanan 150 kata Rusia satu per satu.
   Itu pekerjaan penulisan materi, bukan perbaikan kode, dan menebaknya
   akan mengajarkan pelafalan yang keliru — jadi di sini ia DILAPORKAN,
   bukan dikarang. */
const TEKANAN = /[áéíóúýàèìòùÁÉÍÓÚ]/;
console.log('\nromanisasi kosakata (bahasa beraksara asing):');
for (const c of ['ja', 'ko', 'zh', 'ar', 'ru']) {
  const L = DATA[c];
  if (!L?.vocab) continue;
  /* Paket tambahan di <kode>-kata.js ikut dihitung: aplikasi
     menggabungkannya saat berjalan, jadi laporan yang hanya membaca
     <kode>.js akan menyebut 42 kata padahal pemelajar melihat 192. */
  let TAMBAHAN = null;
  try { TAMBAHAN = await imp(`data/lang/${c}-kata.js`).then(m => Object.values(m)[0]); } catch {}
  const paketTambahan = arr(TAMBAHAN?.paket || TAMBAHAN?.vocab);
  const kata = [...L.vocab, ...paketTambahan].flatMap(p => p.words || []);
  const berrom = kata.filter(w => w[1]).length;
  let baris = `  ${c}  ${berrom}/${kata.length} berromanisasi`;
  if (c === 'ru') {
    const tk = kata.filter(w => w[1] && TEKANAN.test(w[1])).length;
    baris += `  ·  ${tk}/${berrom} bertanda tekanan` +
      (tk < berrom ? `  ← ${berrom - tk} kata tanpa tekanan; tekanan Rusia tidak bisa ditebak dari ejaan` : '');
  }
  console.log(baris);
}

/* Alat ini MENGHITUNG, tidak menilai — tidak ada ambang yang bisa
   disebut lulus atau gagal, jadi ia selalu keluar dengan 0. Ditulis
   tegas di sini supaya tidak dikira kelupaan seperti yang pernah
   terjadi pada validasi-materi.mjs, yang mencetak delapan masalah lalu
   melaporkan sukses. */
process.exit(0);
