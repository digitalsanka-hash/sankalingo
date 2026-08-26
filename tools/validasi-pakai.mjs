/* Validasi bank contoh pemakaian (data/lang/<kode>-pakai.js).

   Ditulis SEBELUM datanya, supaya kesalahan tidak bisa lolos diam-diam.
   Menulis ribuan kalimat contoh tanpa pemeriksaan mekanis adalah cara
   paling pasti untuk menyelipkan kesalahan yang baru ketahuan setelah
   dipakai orang.

   Yang diperiksa:
     1. kunci menunjuk kata yang MEMANG ADA di paket kosakata
     2. contoh benar-benar MENGANDUNG kata itu (bukan kalimat asal)
     3. ada terjemahan Indonesianya, dan tidak sekadar menyalin contoh
     4. bahasa beraksara non-Latin punya romanisasi contoh
     5. romanisasi tidak mengandung aksara aslinya (tanda bocor)
     6. contoh tidak kembar antar kata (tanda salin-tempel)
     7. panjang contoh masuk akal — bukan satu kata, bukan paragraf

   Jalankan: node tools/validasi-pakai.mjs                              */
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

const AKAR = join(dirname(fileURLToPath(import.meta.url)), '..');
const imp = p => import(pathToFileURL(join(AKAR, p)).href);
const KODE = ['ko', 'ja', 'zh', 'ar', 'ru', 'de', 'fr', 'es'];
/* Bahasa yang tidak memisahkan kata dengan spasi. */
const TANPA_SPASI = new Set(['ja', 'zh']);

/* Bahasa yang aksaranya bukan Latin WAJIB menyertakan romanisasi contoh,
   kalau tidak, contohnya tidak bisa dibunyikan oleh lapisan suara. */
const AKSARA = {
  ko: /[가-힯ᄀ-ᇿ]/,
  ja: /[぀-ヿ一-鿿]/,
  zh: /[一-鿿]/,
  ar: /[؀-ۿ]/,
  ru: /[Ѐ-ӿ]/
};

/* Konsonan yang berubah teratur saat kata kerja Rusia dikonjugasikan. */
const MUTASI = { 'с': 'ш', 'д': 'ж', 'т': 'ч', 'к': 'ч', 'г': 'ж', 'з': 'ж', 'х': 'ш' };

/* ── Korea ────────────────────────────────────────────────────────
   Bentuk kamus kata kerja & kata sifat Korea SELALU berakhiran 다, dan
   다 itu SELALU lenyap begitu kata dipakai dalam kalimat: 가다 → 가요,
   맵다 → 매워요. Mencocokkan bentuk kamus apa adanya berarti menolak
   hampir setiap contoh yang wajar.

   Ditambah lagi sebagian akarnya berubah bentuk (ㅂ tak beraturan:
   맵 → 매, ㄷ tak beraturan: 걷 → 걸), jadi akhiran konsonannya pun
   perlu dicoba dilepas dan ditukar.                                    */
const HANGUL_AWAL = 0xAC00, HANGUL_AKHIR = 0xD7A3;
const AKHIRAN_D = 7, AKHIRAN_L = 8;      // ㄷ dan ㄹ pada tabel jongseong

function akarKorea(kata) {
  if (!kata.endsWith('다') || kata.length < 2) return [];
  const akar = kata.slice(0, -1);
  const keluar = [akar];
  const c = akar.codePointAt(akar.length - 1);
  if (c >= HANGUL_AWAL && c <= HANGUL_AKHIR) {
    const kode = c - HANGUL_AWAL, akhiran = kode % 28;
    if (akhiran) {
      /* tanpa konsonan akhir: 맵 → 매, 춥 → 추 */
      keluar.push(akar.slice(0, -1) + String.fromCodePoint(c - akhiran));
      /* ㄷ berubah jadi ㄹ: 걷 → 걸, 듣 → 들 */
      if (akhiran === AKHIRAN_D)
        keluar.push(akar.slice(0, -1) + String.fromCodePoint(c - AKHIRAN_D + AKHIRAN_L));
    }
  }
  return keluar;
}

/* ── Jepang ───────────────────────────────────────────────────────
   Bentuk kamus kata kerja & kata sifat Jepang selalu berakhiran kana
   yang BERUBAH begitu dipakai: 行く → 行きます, 飲む → 飲みます,
   食べる → 食べます, 甘い → 甘すぎます. Yang bertahan adalah akarnya.

   Perubahannya teratur — kana baris -u bergeser ke baris -i — jadi bisa
   diperiksa dengan tabel, bukan dengan menghafal tiap kata.            */
const BARIS_I = { 'く':'き','ぐ':'ぎ','す':'し','つ':'ち','ぬ':'に',
                  'ぶ':'び','む':'み','る':'り','う':'い' };

function akarJepang(kata) {
  if (kata.length < 2) return [];
  const keluar = [];
  const akhir = kata.at(-1);
  const batang = kata.slice(0, -1);
  /* ichidan & kata sifat -i: akhirannya cukup dibuang (食べる → 食べ) */
  keluar.push(batang);
  /* godan: kana -u bergeser ke baris -i (行く → 行き) */
  if (BARIS_I[akhir]) keluar.push(batang + BARIS_I[akhir]);
  return keluar.filter(x => x.length >= 1);
}

/** Apakah contoh memuat kata itu, dengan kelonggaran yang wajar? */
function cocokKata(kataAsli, contohAsli) {
  /* Perbandingan TANPA membedakan huruf besar-kecil. Bahasa Jerman
     mengawali kalimat dengan huruf besar dan menulis semua kata benda
     berhuruf besar, jadi pencocokan peka huruf akan salah menuduh
     hampir setiap kata keterangan. */
  /* Aksen diratakan sebelum dibandingkan: bahasa Prancis menggeser
     aksen saat mengonjugasi (gérer → il gère), dan itu bukan kesalahan
     data melainkan tata bahasanya. */
  const rata = t => t.toLowerCase().normalize('NFD').replace(/\p{M}+/gu, '');
  const kata = rata(kataAsli);
  const contoh = rata(contohAsli);
  if (contoh.includes(kata)) return true;
  const rapikan = t => t
    .replace(/^(der|die|das|le|la|les|el|los|las|un|une)\s+/i, '')
    /* Élision Prancis menempel tanpa spasi: l'eau, d'argent, s'appuyer. */
    .replace(/^[ldcjmnst]'/i, '')
    .replace(/^(sich|se|zu)\s+/i, '')
    /* Kata sandang Arab ال menempel langsung pada katanya. */
    .replace(/^ال/, '')
    .trim();

  /* Rusia menuliskan pasangan aspek sebagai "читать / прочитать".
     Keduanya kata yang sah, jadi contoh boleh memakai yang mana pun. */
  const anggota = kata.split('/').map(x => rapikan(x.trim())).filter(Boolean);
  const bersih = anggota[0] || rapikan(kata);
  for (const a of anggota) if (a && contoh.includes(a)) return true;

  /* Bentuk kamus Korea: cocokkan akarnya, harus di AWAL sebuah kata
     supaya akar sependek satu suku kata tidak asal kena.

     PENTING: dipakai teks ASLI, bukan yang sudah diratakan aksennya.
     Perataan memakai NFD, dan NFD MEMBONGKAR suku Hangul menjadi jamo
     (가 → ᄀ+ᅡ) sehingga pemeriksaan berakhiran 다 tidak pernah benar. */
  const kataNFC = kataAsli.normalize('NFC');
  const contohNFC = contohAsli.normalize('NFC');
  /* Ta marbutah ة berubah jadi ت begitu katanya bersambung dengan
     akhiran kepemilikan: جَدَّة → جَدَّتِي. Bentuk itu ikut dicoba. */
  for (const a of anggota)
    if (a.includes('ة') && contoh.includes(a.replace(/ة/g, 'ت'))) return true;

  /* Bentuk kamus Jepang: cocokkan akarnya. */
  for (const akar of akarJepang(kataAsli))
    if (contohAsli.includes(akar)) return true;

  const kataKorea = contohNFC.split(/[^가-힣]+/).filter(Boolean);
  for (const a of kataNFC.split('/').map(x => x.trim()).filter(Boolean))
    for (const akar of akarKorea(a)) {
      if (kataKorea.some(w => w.startsWith(akar))) return true;
      /* Suku terakhir akar sering MENYERAP konsonan akhir dari akhiran:
         하다 → 할, 크다 → 큰, 타다 → 탈. Basis sukunya tetap sama. */
      const c = akar.codePointAt(akar.length - 1);
      if (c >= HANGUL_AWAL && c <= HANGUL_AKHIR && (c - HANGUL_AWAL) % 28 === 0) {
        const awalan = akar.slice(0, -1);
        if (kataKorea.some(w => {
          if (!w.startsWith(awalan)) return false;
          const suku = w.codePointAt(awalan.length);
          return suku >= HANGUL_AWAL && suku <= HANGUL_AKHIR &&
                 suku - ((suku - HANGUL_AWAL) % 28) === c;
        })) return true;
      }
    }

  /* Pecah jadi penggalan; cukup SATU penggalan bermakna yang muncul. */
  const penggalan = anggota.flatMap(a => a.split(/[\s-]+/)).filter(x => x.length >= 3);
  for (const g of penggalan) {
    if (contoh.includes(g)) return true;
    /* Buang akhiran supaya bentuk terinfleksi tetap kena. Batasnya tiga
       aksara: akar kata Slavia pendek-pendek (спать → спал, ждать → жду),
       dan batas empat membuat hampir semuanya luput. */
    for (const potong of [1, 2, 3, 4])
      if (g.length - potong >= 3 && contoh.includes(g.slice(0, -potong))) return true;
    /* Mutasi konsonan Rusia saat dikonjugasikan: писать → пишу,
       ходить → хожу. Yang berubah konsonan terakhir akarnya. */
    for (const potong of [1, 2, 3, 4]) {
      const akar = g.slice(0, -potong);
      if (akar.length < 3) break;
      const ganti = MUTASI[akar.at(-1)];
      if (ganti && contoh.includes(akar.slice(0, -1) + ganti)) return true;
    }
    /* Partisip Jerman menyisipkan ge- di TENGAH kata kerja terpisah:
       ablehnen → abgelehnt. Coba juga bentuk sisipannya. */
    for (let i = 2; i <= 4 && i < g.length - 3; i++) {
      const sisip = g.slice(0, i) + 'ge' + g.slice(i);
      if (contoh.includes(sisip.slice(0, -2))) return true;
    }
  }
  /* Kata kerja Spanyol berubah vokal akarnya saat dikonjugasikan:
     querer → quiere, empezar → empieza, poder → puede. Contoh yang
     MEMPERLIHATKAN perubahan itu justru yang paling mengajarkan, jadi
     yang disesuaikan adalah pemeriksanya: kalimatnya dikembalikan dulu
     ke bentuk akar sebelum dicocokkan. */
  /* Kedua penggantian dicoba TERPISAH, tidak dirantai: merantainya
     merusak kata yang memuat keduanya — quieres → queres → "qores". */
  const varian = [contoh.replace(/ie/g, 'e'), contoh.replace(/ue/g, 'o')];
  for (const v of varian)
    for (const g of penggalan) {
      if (v.includes(g)) return true;
      for (const potong of [1, 2, 3])
        if (g.length - potong >= 4 && v.includes(g.slice(0, -potong))) return true;
    }

  /* ── Kata kerja terpisah Jerman ─────────────────────────────────
     herunterladen → "Ich lade die Datei herunter." Awalannya terlempar
     ke akhir kalimat dan akarnya ikut ditasrifkan, jadi tidak ada satu
     penggalan pun yang utuh. Diterima kalau AWALAN dan tiga huruf
     pertama akarnya sama-sama muncul — cukup ketat untuk tidak asal
     lolos, karena keduanya harus hadir sekaligus. */
  const AWALAN_DE = ['herunter', 'heraus', 'hinein', 'zurück', 'durch',
                     'unter', 'über', 'hoch', 'fest', 'frei',
                     'nach', 'auf', 'aus', 'ein', 'mit', 'vor', 'zu',
                     'her', 'hin', 'weg', 'los', 'bei', 'ab', 'an', 'um'];
  for (const a of anggota) {
    if (a.includes(' ')) continue;
    for (const aw of AWALAN_DE) {
      if (!a.startsWith(aw) || a.length - aw.length < 5) continue;
      const akar = a.slice(aw.length, aw.length + 3);
      if (contoh.includes(aw) && contoh.includes(akar)) return true;
    }
  }

  /* ── Akar tiga huruf Arab ───────────────────────────────────────
     قَدَم → الأَقْدَام, نَجْم → النُّجُوم. Jamak taksir mengubah pola vokal
     dan menyisipkan huruf, jadi pencocokan harfiah tidak pernah kena.
     Yang TIDAK berubah adalah urutan huruf akarnya. Diterima kalau
     seluruh huruf akar kunci muncul BERURUTAN di dalam satu kata pada
     kalimatnya. */
  if (/[ء-ي]/.test(kataAsli)) {
    const hurufSaja = t => t.replace(/[^ء-ي]/g, '')
                            .replace(/^ال/, '').replace(/[ةى]/g, 'ه');
    const akar = hurufSaja(kataAsli);
    if (akar.length >= 3) {
      for (const kataKal of contohAsli.split(/\s+/)) {
        const kal = hurufSaja(kataKal);
        let i = 0;
        for (const ch of kal) if (ch === akar[i]) i++;
        if (i === akar.length) return true;
      }
    }
  }

  /* ── Kata kerja Korea berakar vokal ㅡ ──────────────────────────
     끄다 → 껐어요, 쓰다 → 썼어요, 크다 → 커요. Vokal ㅡ pada suku
     terakhir akar LULUH begitu bertemu akhiran, berganti ㅓ atau ㅏ.
     Yang bertahan cuma konsonan awalnya, jadi itulah yang dicocokkan —
     dan hanya untuk akar yang memang bervokal ㅡ, supaya aturan ini
     tidak melonggarkan pencocokan Korea secara umum. */
  for (const a of kataNFC.split('/').map(x => x.trim()).filter(Boolean))
    for (const akar of akarKorea(a)) {
      const c = akar.codePointAt(akar.length - 1);
      if (c < HANGUL_AWAL || c > HANGUL_AKHIR) continue;
      const kode = c - HANGUL_AWAL;
      if (Math.floor(kode / 28) % 21 !== 18) continue;   // jungseong ㅡ
      const awalan = akar.slice(0, -1), cho = Math.floor(kode / 588);
      if (contohNFC.split(/[^가-힣]+/).some(w => {
        if (!w.startsWith(awalan)) return false;
        const suku = w.codePointAt(awalan.length);
        return suku >= HANGUL_AWAL && suku <= HANGUL_AKHIR &&
               Math.floor((suku - HANGUL_AWAL) / 588) === cho;
      })) return true;
    }

  /* Kata pendek (di bawah empat aksara) diperiksa sebagai kata utuh saja,
     supaya "das" tidak dianggap muncul di dalam "Adresse". Dicocokkan
     dengan memecah kalimatnya, bukan dengan regex yang harus di-escape. */
  if (bersih.length < 4) {
    const potongan = contoh.split(/[^\p{L}\p{M}]+/u);
    if (potongan.includes(bersih)) return true;
  }
  return false;
}

let totalMasalah = 0, totalContoh = 0;
const ringkas = [];

for (const c of KODE) {
  const masalah = [];

  /* Kumpulkan seluruh kata yang ada, dari ketiga sumber. */
  const kata = new Map();          // kata → { paket, level }
  const m = await imp(`data/lang/${c}.js`);
  const L = m[c.toUpperCase()] || Object.values(m)[0];
  const sumber = [L];
  try { sumber.push((await imp(`data/lang/${c}-course.js`)).COURSE); } catch {}
  try { sumber.push((await imp(`data/lang/${c}-plus.js`)).PLUS); } catch {}
  /* Perluasan kedua dan paket <kode>-kata.js juga digabung saat aplikasi
     berjalan; tanpa keduanya, alat ini menganggap kata baru "tidak ada di
     paket kosakata mana pun" dan menolak contoh yang justru benar. */
  try { sumber.push((await imp(`data/lang/${c}-plus2.js`)).PLUS2); } catch {}
  try { const k = await imp(`data/lang/${c}-kata.js`); sumber.push(Object.values(k)[0]); } catch {}
  for (const s of sumber)
    for (const p of (s?.vocab || []))
      for (const w of (p.words || []))
        if (w?.[0] && !kata.has(w[0])) kata.set(w[0], { paket: p.id, level: p.level || '-' });

  /* Berkas yang RUSAK dan berkas yang BELUM ADA harus dibedakan.
     Sebelumnya keduanya ditelan satu catch dan dilaporkan sama: "belum
     ada berkas". Akibatnya salah ketik satu koma pada berkas yang sudah
     berisi 340 entri terbaca sebagai "belum ditulis" — persis kesalahan
     yang membuat alat pemeriksa tidak ada gunanya. */
  let PAKAI = null;
  const jalurPakai = join(AKAR, 'data', 'lang', `${c}-pakai.js`);
  if (existsSync(jalurPakai)) {
    try {
      PAKAI = (await imp(`data/lang/${c}-pakai.js`)).PAKAI;
      if (!PAKAI) masalah.push(`${c}-pakai.js ada tetapi tidak mengekspor PAKAI`);
    } catch (e) {
      masalah.push(`${c}-pakai.js GAGAL DIMUAT: ${e.message}`);
      ringkas.push([c, kata.size, 0, 0, '× berkas rusak']);
      continue;
    }
  }
  /* Bank contoh TIDAK hanya hidup di <kode>-pakai.js. Paket tema di
     <kode>-kata.js membawa peta `pakai` sendiri, dan langctx.js
     memasangnya SESUDAH berkas utama — jadi untuk kata yang ada di
     kedua tempat, yang benar-benar dilihat pemelajar adalah yang dari
     <kode>-kata.js.

     Alat ini dulu hanya membaca berkas utama dan melaporkan liputan
     100% karena penyebutnya pun hanya kosakata inti. Begitu penyebutnya
     diperbaiki (paket tema ikut dihitung), angkanya jatuh ke 71-75% dan
     tampak seperti 1.081 kata tanpa contoh — padahal semuanya sudah
     punya, hanya di berkas yang tidak dibaca. Satu alat yang setengah
     benar lebih menyesatkan daripada alat yang jelas-jelas salah. */
  let DARI_KATA = null;
  try { DARI_KATA = (await imp(`data/lang/${c}-kata.js`)).KATA?.pakai
        || Object.values(await imp(`data/lang/${c}-kata.js`))[0]?.pakai || null; } catch {}
  if (DARI_KATA) PAKAI = { ...(PAKAI || {}), ...DARI_KATA };

  if (!PAKAI) { ringkas.push([c, kata.size, 0, 0, '— belum ada berkas']); continue; }

  const entri = Object.entries(PAKAI);
  const contohTerlihat = new Map();

  for (const [k, v] of entri) {
    const di = (t) => masalah.push(`${k}: ${t}`);

    if (!Array.isArray(v)) { di('nilainya bukan larik'); continue; }
    const [ex, exId, rom] = v;

    if (!kata.has(k)) { di('kata ini tidak ada di paket kosakata mana pun'); continue; }
    if (!ex || typeof ex !== 'string')   { di('contoh kosong'); continue; }
    if (!exId || typeof exId !== 'string') { di('terjemahan kosong'); continue; }

    /* Contoh harus benar-benar memuat katanya. Pencocokannya tidak bisa
       sekadar includes(): bahasa berimbuhan mengubah bentuk kata, kata
       kerja terpisah Jerman memecahnya ke dua ujung kalimat (aufstehen →
       "steht … auf"), dan idiom multi-kata jarang muncul utuh. Karena itu
       yang diperiksa adalah PENGGALAN BERMAKNA-nya. */
    if (!cocokKata(k, ex)) di(`contoh tidak memuat katanya — "${ex.slice(0, 40)}"`);

    if (ex.trim() === exId.trim()) di('terjemahan sama persis dengan contohnya');
    /* Jepang dan Mandarin TIDAK memakai spasi antar kata, jadi menghitung
       spasi akan menuduh setiap kalimatnya "cuma satu kata". Untuk kedua
       bahasa itu yang diukur panjangnya, bukan jumlah spasinya. */
    if (TANPA_SPASI.has(c)) {
      if ([...ex.trim()].length < 5) di('contoh terlalu pendek');
    } else if (ex.trim().split(/\s+/).length < 2) di('contoh cuma satu kata');
    if (ex.length > 120) di(`contoh terlalu panjang (${ex.length} aksara)`);

    if (AKSARA[c]) {
      if (!rom) di('tidak ada romanisasi contoh (wajib untuk aksara non-Latin)');
      else if (AKSARA[c].test(rom)) di('aksara asli bocor ke kolom romanisasi');
    }

    const sudah = contohTerlihat.get(ex);
    if (sudah) di(`contohnya sama persis dengan kata "${sudah}"`);
    else contohTerlihat.set(ex, k);
  }

  totalContoh += entri.length;
  totalMasalah += masalah.length;
  const pct = kata.size ? Math.round(entri.length / kata.size * 100) : 0;
  ringkas.push([c, kata.size, entri.length, pct, masalah.length ? `${masalah.length} masalah` : 'bersih']);

  if (masalah.length) {
    console.log(`\n[${c}] ${masalah.length} masalah`);
    masalah.slice(0, 25).forEach(x => console.log('   ' + x));
    if (masalah.length > 25) console.log(`   … dan ${masalah.length - 25} lagi`);
  }
}

console.log('\n' + 'kode'.padEnd(6) + 'kata'.padStart(7) + 'bercontoh'.padStart(11) +
            'liputan'.padStart(9) + '  keadaan');
console.log('-'.repeat(52));
for (const [c, n, e, pct, st] of ringkas)
  console.log(c.padEnd(6) + String(n).padStart(7) + String(e).padStart(11) +
              (typeof pct === 'number' ? `${pct}%` : '').padStart(9) + '  ' + st);
console.log('-'.repeat(52));
console.log(`TOTAL ${totalContoh} contoh pemakaian · ${totalMasalah} masalah`);
process.exit(totalMasalah ? 1 : 0);
