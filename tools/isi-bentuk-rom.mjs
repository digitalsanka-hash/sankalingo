/* ── Pengisi romanisasi kolom bentuk (br) ─────────────────────────

   Tombol suara di kolom bentuk butuh teks Latin sebagai cadangan: kalau
   perangkat tidak punya suara TTS bahasa itu, yang dibacakan adalah
   romanisasinya. Tanpa itu tombolnya diam — dan tombol diam lebih buruk
   daripada tidak ada tombol, karena orang mengira suaranya rusak.

   Diisi lewat alat, bukan diketik satu per satu, karena bentuk kata
   BISA dihitung dari aksaranya di tiga bahasa ini:

     ja  batang kanji tidak berubah bunyinya, yang berubah hanya
         okurigana di ekornya. Jadi: rom bentuk = (rom lema dikurangi
         rom ekor kananya) + rom ekor kana bentuk itu. 行く 'iku' →
         ekor く 'ku' → batang 'i' → 行きます = 'i' + 'kimasu'.
     ko  Hangeul itu aksara fonetik: suku katanya bisa diurai jadi
         awalan-vokal-akhiran, lalu dirangkai ulang menurut Romanisasi
         Baru, termasuk aturan sambung (akhiran pindah jadi awalan bila
         suku berikutnya mulai dengan ㅇ).
     ru  Kiril hampir satu huruf satu bunyi.

   Yang TIDAK bisa dihitung ditambal di tabel KHUSUS di bawah — kata
   kerja Jepang yang tak beraturan mengubah bacaan batangnya sendiri
   (来る kuru → 来ます kimasu, bukan kumasu).

   Mandarin tidak ikut di sini: hanzi tidak memberi petunjuk bunyi sama
   sekali, jadi kata bantu bilangannya diisi dari tabel pinyin sendiri.
   Arab juga tidak: tulisannya tanpa harakat, vokalnya memang tidak ada
   di teks, jadi menghitungnya hanya akan menghasilkan tebakan.

   Jalankan:  node tools/isi-bentuk-rom.mjs [ja|ko|ru|semua]           */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { AR_VERBA, AR_BENDA, AR_SIFAT } from './ar-bentuk-rom.js';

/* ── Jepang ─────────────────────────────────────────────────────── */

const KANA = {
  あ:'a', い:'i', う:'u', え:'e', お:'o',
  か:'ka', き:'ki', く:'ku', け:'ke', こ:'ko',
  が:'ga', ぎ:'gi', ぐ:'gu', げ:'ge', ご:'go',
  さ:'sa', し:'shi', す:'su', せ:'se', そ:'so',
  ざ:'za', じ:'ji', ず:'zu', ぜ:'ze', ぞ:'zo',
  た:'ta', ち:'chi', つ:'tsu', て:'te', と:'to',
  だ:'da', ぢ:'ji', づ:'zu', で:'de', ど:'do',
  な:'na', に:'ni', ぬ:'nu', ね:'ne', の:'no',
  は:'ha', ひ:'hi', ふ:'fu', へ:'he', ほ:'ho',
  ば:'ba', び:'bi', ぶ:'bu', べ:'be', ぼ:'bo',
  ぱ:'pa', ぴ:'pi', ぷ:'pu', ぺ:'pe', ぽ:'po',
  ま:'ma', み:'mi', む:'mu', め:'me', も:'mo',
  や:'ya', ゆ:'yu', よ:'yo',
  ら:'ra', り:'ri', る:'ru', れ:'re', ろ:'ro',
  わ:'wa', を:'o', ん:'n',
  ぁ:'a', ぃ:'i', ぅ:'u', ぇ:'e', ぉ:'o',
};
/* Bunyi cantum: dua kana dibaca satu suku (きゃ = kya, しょ = sho). */
const YOON = { ゃ:'ya', ゅ:'yu', ょ:'yo' };

/** Romanisasi deretan kana. っ menggandakan konsonan berikutnya. */
function romKana(teks) {
  const k = [...String(teks || '')];
  let out = '';
  for (let i = 0; i < k.length; i++) {
    const c = k[i], next = k[i + 1];
    if (c === 'っ') {                    // sokuon: gandakan konsonan sesudahnya
      const sesudah = next && (KANA[next] || '');
      if (sesudah) out += sesudah[0] === 'c' ? 't' : sesudah[0];
      continue;
    }
    if (next && YOON[next]) {            // きゃ → kya
      const dasar = KANA[c] || '';
      const y = YOON[next];
      out += dasar.length > 1 && dasar.endsWith('i')
        ? (dasar === 'shi' || dasar === 'chi' || dasar === 'ji'
            ? dasar.slice(0, -1) + y.slice(1)   // shi + ya → sha
            : dasar.slice(0, -1) + y)
        : dasar + y;
      i++;
      continue;
    }
    out += KANA[c] ?? c;
  }
  return out;
}

const adalahKana = c => KANA[c] !== undefined || YOON[c] !== undefined || c === 'っ';

/** Ekor kana sebuah kata: bagian kana yang menempel di ujung kanan. */
function ekorKana(kata) {
  const k = [...String(kata || '')];
  let i = k.length;
  while (i > 0 && adalahKana(k[i - 1])) i--;
  return k.slice(i).join('');
}

/* Bacaan batang yang berubah sendiri — tidak ada aturan yang menutup ini. */
const KHUSUS_JA = {
  '来ます': 'kimasu', '来て': 'kite', '来た': 'kita',
};

/** Buang ekor `ekor` dari `rom`, mengabaikan spasi; null bila tak cocok. */
function potongEkor(rom, ekor) {
  if (!ekor) return null;
  let i = rom.length, sisa = ekor.length;
  while (i > 0 && sisa > 0) {
    i--;
    if (rom[i] === ' ') continue;
    if (rom[i] !== ekor[--sisa]) return null;
  }
  return sisa === 0 ? rom.slice(0, i) : null;
}

function romBentukJa(entri, bentuk, i) {
  if (bentuk === entri.k) return entri.r;
  if (KHUSUS_JA[bentuk]) return KHUSUS_JA[bentuk];

  const ekorLema = ekorKana(entri.k);
  const romEkorLema = romKana(ekorLema);
  const rLema = String(entri.r || '');
  /* Batang = rom lema tanpa ekor kananya. Spasi diabaikan waktu
     mencocokkan ekor, karena kata sifat -na romnya ditulis dua kata
     (静かだ = 'shizuka da') padahal かだ itu satu ekor kana. */
  const batang = ekorLema === entri.k ? '' : potongEkor(rLema, romEkorLema);
  if (batang === null) return null;

  let rom = batang + romKana(ekorKana(bentuk));
  /* です berdiri sendiri sebagai kata, bukan akhiran: 高いです dibaca
     "takai desu", bukan "takaidesu". */
  rom = rom.replace(/(?!^)(desu|deshita)$/, ' $1').replace(/\s+/g, ' ').trim();
  return rom;
}

/* ── Korea ──────────────────────────────────────────────────────── */

const KO_AWAL = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const KO_VOKAL = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
/* 28 akhiran, HARUS 28 - satu saja terlewat dan seluruh sisanya
   bergeser satu langkah: ㅋㅇ pernah terbaca 't' dan 충분해요 keluar
   sebagai "chutbunhaeyo". */
const KO_AKHIR = ['','k','k','k','n','n','n','t','l','k','m','l','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','t'];
/* Akhiran yang berpindah jadi awalan suku berikutnya dibaca sebagai
   konsonan awal, bukan sebagai akhiran: ㅅ jadi 's' bukan 't', ㄹ
   jadi 'r' (놀아요 = norayo), dan ㅎ hilang sama sekali
   (좋아요 = joayo). */
const KO_AKHIR_SAMBUNG = ['','g','kk','ks','n','nj','n','d','r','lg','lm','lb','ls','lt','lp','r','m','b','bs','s','ss','ng','j','ch','k','t','p',''];

function romKo(teks) {
  const k = [...String(teks || '')];
  let out = '';
  for (let i = 0; i < k.length; i++) {
    const kode = k[i].charCodeAt(0) - 0xac00;
    if (kode < 0 || kode > 11171) { out += k[i]; continue; }
    const awal = Math.floor(kode / 588);
    const vokal = Math.floor((kode % 588) / 28);
    const akhir = kode % 28;

    out += KO_AWAL[awal] + KO_VOKAL[vokal];

    if (!akhir) continue;
    /* Aturan sambung: kalau suku berikutnya mulai dengan ㅇ (bisu),
       akhiran ini pindah jadi awalannya — 먹었 dibaca "meogeoss",
       bukan "meokeos". */
    const lanjut = k[i + 1];
    const kodeLanjut = lanjut ? lanjut.charCodeAt(0) - 0xac00 : -1;
    const berikutnyaBisu = kodeLanjut >= 0 && kodeLanjut <= 11171 &&
                           Math.floor(kodeLanjut / 588) === 11;   // ㅇ
    out += berikutnyaBisu ? KO_AKHIR_SAMBUNG[akhir] : KO_AKHIR[akhir];
  }
  return out;
}

/* ── Rusia ──────────────────────────────────────────────────────── */

const RU = {
  а:'a', б:'b', в:'v', г:'g', д:'d', е:'e', ё:'yo', ж:'zh', з:'z', и:'i',
  й:'y', к:'k', л:'l', м:'m', н:'n', о:'o', п:'p', р:'r', с:'s', т:'t',
  у:'u', ф:'f', х:'kh', ц:'ts', ч:'ch', ш:'sh', щ:'shch', ъ:'', ы:'y',
  ь:'', э:'e', ю:'yu', я:'ya',
};
const romRu = teks => [...String(teks || '').toLowerCase()]
  .map(c => (RU[c] !== undefined ? RU[c] : c)).join('');

/* ── Penulisan kembali berkas ───────────────────────────────────── */

const PEMBUAT = {
  ja: romBentukJa,
  ko: (e, v) => (v === e.k ? e.r : romKo(v)),
  /* Arab dibaca dari tabel tulisan tangan: tanpa harakat, vokalnya
     tidak ada di teks sehingga tidak bisa dihitung. Kata sifat jadi
     pengecualian - femininnya hanya menambah ة, jadi romnya = rom
     maskulin + 'a', kecuali dua belas yang menyimpang. */
  ar: (e, v, i) => {
    if (v === e.k) return e.r;
    if (e.p === 'v') return AR_VERBA[e.k]?.[i - 1] ?? null;
    if (e.p === 'n') return AR_BENDA[e.k]?.[0] ?? null;
    if (e.p === 'adj') return AR_SIFAT[e.k]?.[0] ?? (e.r ? e.r + 'a' : null);
    return null;
  },
  /* Kolom ketiga kata benda Rusia berisi LABEL jenis ('netral'),
     bukan bentuk kata - dikosongkan supaya tak dibacakan. */
  ru: (e, v) => (v === e.k ? e.r : (/[Ѐ-ӿ]/.test(v) ? romRu(v) : '')),
};

/** Sisipkan `br: [...]` tepat sesudah `b: [...]` pada berkas bagian. */
function isi(kode) {
  const pembuat = PEMBUAT[kode];
  const berkas = readdirSync('data/lang').filter(f => new RegExp(`^${kode}-kamus-\\d+\\.js$`).test(f));
  let diisi = 0, gagal = [];

  for (const nama of berkas) {
    const jalur = `data/lang/${nama}`;
    let s = readFileSync(jalur, 'utf8');

    /* Satu entri = satu objek `{ ... }` pada baris-barisnya sendiri.
       Diproses per objek supaya lema, r, dan b milik entri yang sama. */
    s = s.replace(/\{ k: '(.*?)'[\s\S]*?\n?\s*\}/g, blok => {
      if (/\bbr: \[/.test(blok)) return blok;
      const mb = blok.match(/\bb: \[([^\]]*)\]/);
      if (!mb) return blok;
      const k = blok.match(/\bk: '([^']*)'/)?.[1] || '';
      const r = blok.match(/\br: '([^']*)'/)?.[1] || '';
      const kelas = blok.match(/\bp: '([^']*)'/)?.[1] || '';
      const bentuk = [...mb[1].matchAll(/'([^']*)'/g)].map(m => m[1]);
      const rom = bentuk.map((v, i) => pembuat({ k, r, p: kelas }, v, i));
      if (rom.some(x => x == null)) { gagal.push(`${k} → ${bentuk.join(' / ')}`); return blok; }
      diisi++;
      return blok.replace(mb[0], `${mb[0]}, br: [${rom.map(x => `'${x}'`).join(', ')}]`);
    });

    writeFileSync(jalur, s);
  }
  console.log(`${kode}: ${diisi} entri diisi` + (gagal.length ? `, ${gagal.length} gagal` : ''));
  gagal.slice(0, 20).forEach(g => console.log('   gagal:', g));
}

const minta = process.argv[2] || 'semua';
(minta === 'semua' ? ['ja', 'ko', 'ru', 'ar'] : [minta]).forEach(isi);
