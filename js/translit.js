/* ── Alih aksara otomatis ──────────────────────────────────────────
   Mesin suara berlapis butuh romanisasi supaya suara Indonesia bisa
   membacakan bahasa yang suaranya belum terpasang. Masalahnya, sebagian
   besar materi — contoh tata bahasa, soal ujian, kalimat dikte — hanya
   punya aksara aslinya. Tanpa romanisasi, lapisan cadangan tidak punya
   bahan dan tombolnya diam.

   Berkas ini membangkitkan romanisasi itu sendiri, langsung dari aksara:

     Korea  · Hangul diurai jadi awal+tengah+akhir → Romanisasi Revisi
     Jepang · kana (hiragana & katakana) → Hepburn; kanji lewat kamus
     Rusia  · Kiril → Latin
     Arab   · huruf + harakat → Latin
     Mandarin · lewat kamus (pinyin tidak bisa ditebak dari bentuk aksara)

   Ejaannya sengaja dibuat gaya Indonesia (sy, c, kh) supaya terdengar
   wajar dibaca suara id-ID.                                            */

/* ── Korea ────────────────────────────────────────────────────── */
const KO_AWAL = ['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const KO_TENGAH = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo',
                   'u','wo','we','wi','yu','eu','ui','i'];
const KO_AKHIR = ['','k','k','ks','n','nj','nh','t','l','lk','lm','lp','ls','lt','lp','lh',
                  'm','p','ps','t','t','ng','t','t','k','t','p','h'];

function koSuku(ch) {
  const kode = ch.charCodeAt(0) - 0xAC00;
  if (kode < 0 || kode > 11171) return null;
  return {
    awal:   KO_AWAL[Math.floor(kode / 588)],
    tengah: KO_TENGAH[Math.floor((kode % 588) / 28)],
    akhir:  KO_AKHIR[kode % 28]
  };
}

/* Jamo tunggal (dipakai halaman aksara: ㄱ ㅏ ㅁ …) */
const KO_JAMO = {
  'ㄱ':'g','ㄲ':'kk','ㄴ':'n','ㄷ':'d','ㄸ':'tt','ㄹ':'r','ㅁ':'m','ㅂ':'b','ㅃ':'pp',
  'ㅅ':'s','ㅆ':'ss','ㅇ':'ng','ㅈ':'j','ㅉ':'jj','ㅊ':'ch','ㅋ':'k','ㅌ':'t','ㅍ':'p','ㅎ':'h',
  'ㅏ':'a','ㅐ':'ae','ㅑ':'ya','ㅒ':'yae','ㅓ':'eo','ㅔ':'e','ㅕ':'yeo','ㅖ':'ye','ㅗ':'o',
  'ㅘ':'wa','ㅙ':'wae','ㅚ':'oe','ㅛ':'yo','ㅜ':'u','ㅝ':'wo','ㅞ':'we','ㅟ':'wi','ㅠ':'yu',
  'ㅡ':'eu','ㅢ':'ui','ㅣ':'i'
};

function koLatin(teks) {
  let out = '';
  for (const ch of teks) {
    const s = koSuku(ch);
    if (s) { out += s.awal + s.tengah + s.akhir; continue; }
    out += KO_JAMO[ch] ?? ch;
  }
  return out;
}

/* ── Jepang: kana ─────────────────────────────────────────────── */
const KANA_DASAR = {
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
  'さ':'sa','し':'syi','す':'su','せ':'se','そ':'so',
  'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'た':'ta','ち':'ci','つ':'tsu','て':'te','と':'to',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','ゐ':'i','ゑ':'e','を':'o','ん':'n',
  'ゃ':'ya','ゅ':'yu','ょ':'yo','ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o',
  'っ':'*', 'ー':'-', '・':' ', '　':' '
};
/* Katakana = hiragana + 0x60 */
const KANA = (() => {
  const m = { ...KANA_DASAR };
  for (const [k, v] of Object.entries(KANA_DASAR)) {
    const c = k.charCodeAt(0);
    if (c >= 0x3041 && c <= 0x3096) m[String.fromCharCode(c + 0x60)] = v;
  }
  m['ヴ'] = 'vu'; m['ヵ'] = 'ka'; m['ヶ'] = 'ke';
  return m;
})();

/* Kana kecil dibedakan dari kana penuh: ukurannya menentukan makna.
   ゃゅょ menyusutkan suku kata sebelumnya; やゆよ berdiri sendiri. */
const KANA_KECIL_Y = { 'ゃ':'ya','ゅ':'yu','ょ':'yo','ャ':'ya','ュ':'yu','ョ':'yo' };
const KANA_KECIL_V = { 'ぁ':'a','ぃ':'i','ぅ':'u','ぇ':'e','ぉ':'o',
                       'ァ':'a','ィ':'i','ゥ':'u','ェ':'e','ォ':'o' };

function jaKana(teks, kamus) {
  let out = '';
  let rangkap = false;
  let hilang = 0;                  /* kanji yang tidak ketemu di kamus */
  const ch = [...teks];
  for (let i = 0; i < ch.length; i++) {
    const c = ch[i];
    const kini = KANA[c];
    if (kini === undefined) {
      /* kanji atau huruf lain → coba kamus per satu aksara */
      const k = kamus?.get(c);
      if (k) { out += k + ' '; continue; }
      if (/[一-鿿]/.test(c)) { hilang++; continue; }
      out += c;
      continue;
    }
    if (kini === '*') { rangkap = true; continue; }
    if (kini === '-') { out += out.slice(-1); continue; }
    /* Partikel: は dibaca "wa" dan へ dibaca "e" saat berdiri di akhir kata
       (こんにちは → konnichiwa, わたしは → watashi wa). */
    if ((c === 'は' || c === 'へ') && i > 0) {
      const sesudah = ch[i + 1];
      if (sesudah === undefined || /[\s、。,.!?]/.test(sesudah)) {
        out += c === 'は' ? 'wa' : 'e';
        continue;
      }
    }
    let suku = kini;
    /* youon: き + ゃ → kya. HANYA kana KECIL yang menyusut, dan hanya
       sesudah kolom -i. Memakai tabel KANA di sini dulu menjadi bug:
       ゃ dan や sama-sama terbaca 'ya', jadi かようび ikut menyusut
       menjadi "kyoubi" — huruf a-nya hilang. */
    const kecil = KANA_KECIL_Y[ch[i + 1]];
    if (kecil && kini.length >= 2 && kini.endsWith('i')) {
      const batang = kini.slice(0, -1);
      /* sy, c, j sudah mengandung bunyi lunaknya — cukup vokalnya saja,
         supaya しょ jadi "syo" bukan "syyo" dan ちょ jadi "co" bukan "cyo". */
      suku = /(sy|c|j)$/.test(batang) ? batang + kecil.slice(1) : batang + kecil;
      i++;
    } else {
      /* Vokal kecil menempel: フィ fi, ティ ti, ウェ we, ヴァ va. */
      const vk = KANA_KECIL_V[ch[i + 1]];
      if (vk && /[aiueo]$/.test(kini) && !'aiueo'.includes(kini)) {
        suku = kini.slice(0, -1) + vk;
        i++;
      }
    }
    if (rangkap) { suku = suku[0] + suku; rangkap = false; }
    /* ん di depan vokal butuh pemisah: きんえん = kin'en, bukan kinen. */
    if (out.endsWith('n') && /^[aiueoy]/.test(suku) && KANA[ch[i - 1]] === 'n') out += "'";
    out += suku;
  }
  /* Ada kanji yang terpaksa dibuang → hasilnya bukan kalimat utuh lagi,
     lebih baik mengaku tidak bisa daripada membacakan potongan ngawur. */
  return hilang ? '' : out;
}

/* ── Rusia ────────────────────────────────────────────────────── */
const RU = {
  'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zy','з':'z','и':'i',
  'й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t',
  'у':'u','ф':'f','х':'kh','ц':'ts','ч':'c','ш':'sy','щ':'syc','ъ':'','ы':'y','ь':'',
  'э':'e','ю':'yu','я':'ya'
};
const RU_VOKAL = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
/* е dibaca "ye" hanya di awal kata atau sesudah vokal / ъ / ь;
   di tengah kata sesudah konsonan bunyinya "e" biasa. */
function ruLatin(t) {
  const ch = [...t];
  return ch.map((c, i) => {
    const kecil = c.toLowerCase();
    let k = RU[kecil];
    if (k === undefined) return c;
    if (kecil === 'е') {
      const sblm = ch[i - 1];
      k = (!sblm || !/[а-яА-ЯёЁ]/.test(sblm) || RU_VOKAL.includes(sblm) || 'ъьЪЬ'.includes(sblm))
        ? 'ye' : 'e';
    }
    return c === kecil ? k : (k ? k[0].toUpperCase() + k.slice(1) : k);
  }).join('');
}

/* ── Arab ─────────────────────────────────────────────────────── */
const AR = {
  'ا':'a','أ':'a','إ':'i','آ':'aa','ب':'b','ت':'t','ث':'ts','ج':'j','ح':'h','خ':'kh',
  'د':'d','ذ':'dz','ر':'r','ز':'z','س':'s','ش':'sy','ص':'sh','ض':'dh','ط':'th','ظ':'zh',
  /* ع dan ء ditulis apostrof. Keduanya memang tak punya padanan bunyi
     Latin, tetapi MEMISAHKAN suku kata; menjatuhkannya menghilangkan satu
     ketukan — طعام itu "tha'aam", bukan "thaam". Ejaan Indonesia untuk
     naskah Arab pun memakai apostrof di sini: jum'at, ni'mat. */
  'ع':"'",'غ':'gh','ف':'f','ق':'q','ك':'k','ل':'l','م':'m','ن':'n','ه':'h','ة':'h',
  'و':'w','ي':'y','ى':'a','ء':"'",'ئ':'y','ؤ':'w','ٱ':'a',
  'َ':'a','ِ':'i','ُ':'u','ً':'an','ٍ':'in','ٌ':'un','ْ':'','ٰ':'a','ٓ':'',
  '،':',','؛':';','؟':'?'
};
/* Huruf syamsiyah: "al" melebur ke huruf sesudahnya — الشمس dibaca
   asy-syams, bukan al-syams. Aplikasi mengajarkan aturan ini, jadi
   suaranya pun harus menuruti. */
const AR_SYAMSIYAH = 'تثدذرزسشصضطظلن';

function arLatin(teks) {
  /* Hasil disusun sebagai daftar token, bukan satu untai teks.
     Alasannya tasydid: ia menggandakan KONSONAN, dan gandaannya harus
     disisipkan sebelum vokal yang sudah terlanjur ditulis.
       مُدَرِّس  →  mu-dar-ri-s  →  "mudarris"   (bukan "mudarirs")
     Dengan token, penggandaan cukup menyisipkan ulang konsonan terakhir
     di posisinya yang benar. */
  const tok = [];                       // { j: 'k' | 'v' | 'x', t: '…' }
  const ch = [...teks];
  const HARAKAT = /[ًٌٍَُِّْٰٓ]/;
  const hurufSaja = c => AR[c] !== undefined && !HARAKAT.test(c);
  const konsonanTerakhir = () => {
    for (let i = tok.length - 1; i >= 0; i--) if (tok[i].j === 'k') return i;
    return -1;
  };

  for (let i = 0; i < ch.length; i++) {
    const c = ch[i];

    /* Tasydid: gandakan konsonan terakhir di tempatnya. */
    if (c === 'ّ') {
      const k = konsonanTerakhir();
      if (k >= 0 && !tok[k].sudahGanda) {
        tok.splice(k + 1, 0, { j: 'k', t: tok[k].t, sudahGanda: true });
        tok[k].sudahGanda = true;
      }
      continue;
    }

    /* ا + ل + huruf syamsiyah → "asy-sy", "ar-r", "at-t" …
       Huruf syamsiyah itu sendiri ikut ditulis di sini, lalu tasydidnya
       (kalau ada) dilewati karena penggandaannya sudah terjadi. */
    /* "ال" hanya kata sandang kalau berada di AWAL KATA. Di tengah kata,
       ا adalah vokal panjang biasa — الطَّالِب punya ا-ل di tengah yang bukan
       kata sandang, dan memperlakukannya begitu menghasilkan "thaal-ibu". */
    const diAwalKata = i === 0 || /[\s،؛؟.,!?()"'«»-]/.test(ch[i - 1] || ' ');
    if (diAwalKata && (c === 'ا' || c === 'ٱ') && ch[i + 1] === 'ل') {
      let j = i + 2;
      while (j < ch.length && !hurufSaja(ch[j])) j++;
      const berikut = ch[j];
      if (berikut && AR_SYAMSIYAH.includes(berikut)) {
        const u = AR[berikut] || '';
        tok.push({ j: 'v', t: 'a' });
        tok.push({ j: 'k', t: u, sudahGanda: true });
        tok.push({ j: 'x', t: '-' });
        tok.push({ j: 'k', t: u, sudahGanda: true });
        i = j;                                  // lompat ke huruf syamsiyahnya
        if (ch[i + 1] === 'ّ') i++;             // tasydidnya sudah terwakili
        continue;
      }
      tok.push({ j: 'v', t: 'a' }, { j: 'k', t: 'l' }, { j: 'x', t: '-' });
      i++;
      continue;
    }

    const k = AR[c];
    if (k === undefined) { tok.push({ j: 'x', t: c }); continue; }

    /* Hamzah yang bersukun adalah konsonan penuh: بَأْس itu "ba's".
       Tanpa aturan ini sandarannya terbaca sebagai vokal dan hilang. */
    if ('أإؤئ'.includes(c) && ch[i + 1] === 'ْ') { tok.push({ j: 'k', t: "'" }); continue; }

    /* Alif yang langsung diikuti harakat hanyalah penyangga — vokalnya
       datang dari harakat itu. Tanpa aturan ini, أَنا jadi "aana". */
    if ('اأإٱ'.includes(c) && HARAKAT.test(ch[i + 1] || '')) continue;

    /* Alif penyangga sesudah tanwin fathah tidak dibaca:
       غَدًا itu "ghadan", bukan "ghadana". */
    if ((c === 'ا' || c === 'ى') && ch[i - 1] === 'ً') continue;

    /* Ta marbutah ة dibaca "h" saat berhenti, tetapi "t" kalau masih
       berlanjut — العَرَبِيَّةَ itu "al-arabiyyata", bukan "al-arabiyyaha". */
    if (c === 'ة' && /[َُِ]/.test(ch[i + 1] || '')) { tok.push({ j: 'k', t: 't' }); continue; }


    /* و dan ي berperan ganda: konsonan (w, y) ATAU vokal panjang (u, i).
       Jadi vokal panjang kalau tidak diikuti harakat dan bukan di awal kata —
       tanpa aturan ini إندونيسيا terbaca "indwnysya", bukan "indunisia". */
    if ((c === 'و' || c === 'ي') && !HARAKAT.test(ch[i + 1] || '') && tok.length) {
      tok.push({ j: 'v', t: c === 'و' ? 'u' : 'i' });
      continue;
    }

    if (HARAKAT.test(c)) tok.push({ j: 'v', t: k });
    else tok.push({ j: 'k', t: k });
  }

  return tok.map(x => x.t).join('')
            .replace(/([aiu])\1{2,}/g, '$1$1')    // "aaa" tidak menambah kejelasan
            .replace(/''+/g, "'")                 // ء dan ع berdampingan
            .replace(/(^|[\s-])'+/g, '$1');       // di awal kata apostrof tak terdengar
/* Apostrof di AKHIR kata sengaja dipertahankan (مَاء → "maa'"): mesin bicara
   memang tak melafalkannya, tetapi pembaca perlu tahu hamzahnya ada. */
}

/* ── Kamus bawaan aplikasi ────────────────────────────────────────
   Mandarin dan kanji Jepang tidak bisa ditebak dari bentuk aksaranya.
   Untungnya hampir seluruh teks di aplikasi ini berasal dari kosakata
   dan frasa aplikasi sendiri — yang SUDAH punya romanisasi. Kamusnya
   disusun dari sana saat modul bahasa dimuat.                        */
const kamusPerBahasa = new Map();

export function daftarkanKamus(code, L) {
  if (!L || kamusPerBahasa.has(code)) return;
  const m = new Map();
  const tambah = (asli, rom) => {
    if (!asli || !rom) return;
    const a = String(asli).trim(), r = String(rom).trim();
    if (a && r && !m.has(a)) m.set(a, r);
  };
  /* Bentuk data tiap bahasa tidak seragam betul; satu bentuk tak terduga
     tidak boleh menggagalkan pemuatan seluruh modul bahasa. */
  const arr = x => (Array.isArray(x) ? x : []);
  const telusuri = simpul => {
    if (Array.isArray(simpul)) {
      if (simpul.length >= 2 && typeof simpul[0] === 'string' && typeof simpul[1] === 'string')
        tambah(simpul[0], simpul[1]);
      else simpul.forEach(telusuri);
      return;
    }
    if (simpul && typeof simpul === 'object') {
      if (simpul.c) tambah(simpul.c, simpul.r || simpul.rom || simpul.romaji);
      arr(simpul.words).forEach(telusuri);
      arr(simpul.items).forEach(telusuri);
      arr(simpul.chars).forEach(telusuri);
    }
  };
  try {
    [L.vocab, L.phrases, L.scripts, L.numbers, L.compound, L.syllable]
      .forEach(bagian => telusuri(bagian));

    /* Kata contoh pada modul kanji: 315 pasangan tulisan↔kana yang
       menutup justru kata-kata berkanji, yang paling sering membuat
       lapisan suara menyerah. Bacaannya dialihaksarakan di sini karena
       kamus menyimpan hasil jadi, bukan kana mentah. Pencocokan di
       lewatKamus mendahulukan potongan terpanjang, jadi 学校 terbaca
       utuh "gakkou" — bukan dua kanji lepas. */
    /* Contoh tata bahasa memakai bentuk [asli, terjemahan, romanisasi] —
       kolom ketiga, bukan kedua. Karena itu ia tidak boleh lewat telusuri()
       yang selalu memasangkan kolom pertama dengan kedua; kalau dipaksa,
       yang terdaftar justru terjemahan Indonesianya. */
    arr(L.grammar).forEach(g => arr(g.ex).forEach(e => {
      if (Array.isArray(e) && e.length >= 3) tambah(e[0], e[2]);
    }));

    arr(L.kanji).forEach(k => arr(k.kata).forEach(([tulis, baca]) => {
      if (!tulis || !baca) return;
      const r = code === 'ja' ? jaKana(baca, null) : '';
      if (r) tambah(tulis, r);
    }));
  } catch (e) { console.warn('Kamus alih aksara', code, 'tidak lengkap:', e); }
  /* Kunci terpanjang menentukan lebar jendela pencocokan di lewatKamus.
     Dulu lebarnya dipatok 8 aksara, sehingga frasa panjang yang SUDAH
     ada di kamus — もう一度お願いします (10 aksara) — tetap tak terbaca. */
  m.maksPanjang = Math.max(1, ...[...m.keys()].map(k => k.length));
  kamusPerBahasa.set(code, m);
}
export const kamus = code => kamusPerBahasa.get(code) || null;

/**
 * Penggal teks memakai kamus, dari potongan terpanjang.
 * @param sisa fungsi untuk aksara yang tidak ada di kamus; kembalikan null
 *   kalau aksara itu tidak bisa dibaca sama sekali — seluruh hasil dibatalkan.
 */
function lewatKamus(teks, m, sisa) {
  if (!m || !m.size) return null;
  let out = '', i = 0, kena = 0;
  const maks = m.maksPanjang || 8;
  while (i < teks.length) {
    let cocok = null;
    for (let n = Math.min(maks, teks.length - i); n >= 1; n--) {
      const potong = teks.slice(i, i + n);
      if (m.has(potong)) { cocok = m.get(potong); i += n; kena += n; break; }
    }
    if (cocok) { out += ' ' + cocok + ' '; continue; }
    const hasil = sisa(teks[i]);
    /* Satu aksara yang tidak terbaca sudah cukup membuat kalimatnya salah.
       Lebih baik mengaku tidak bisa daripada mengucapkan potongan ngawur. */
    if (hasil === null) return null;
    out += hasil;
    i++;
  }
  return kena > 0 ? out.replace(/\s{2,}/g, ' ').trim() : null;
}

/* Aksara yang bukan huruf bahasa itu (spasi, tanda baca, angka) selalu aman. */
const netral = c => (/[\s。、，,.!?！？；;:：0-9]/.test(c) ? c : null);

/* ── Pintu masuk ──────────────────────────────────────────────── */
const PUNYA_AKSARA = {
  ko: /[가-힣ㄱ-ㆎ]/,
  ja: /[぀-ヿ一-鿿]/,
  zh: /[一-鿿㐀-䶿]/,
  ru: /[Ѐ-ӿ]/,
  ar: /[؀-ۿ]/
};

/** Apakah teks ini memang beraksara asing sehingga perlu dialihaksarakan? */
export const perluAlih = (code, teks) =>
  !!PUNYA_AKSARA[code]?.test(String(teks || ''));

/**
 * Ubah teks beraksara asing menjadi ejaan Latin gaya Indonesia.
 * @returns {string} string kosong kalau tidak bisa dialihaksarakan dengan layak
 */
export function keLatin(code, teks) {
  const t = String(teks || '').trim();
  if (!t) return '';
  const m = kamus(code);

  switch (code) {
    case 'ko': return rapikan(koLatin(t));
    case 'ru': return rapikan(ruLatin(t));
    case 'ar': return rapikan(arLatin(t));
    case 'ja': {
      /* Tanpa kanji, tabel kana sudah cukup dan lebih tepat. */
      if (!/[一-鿿]/.test(t)) {
        const kana = jaKana(t, m);
        return kana ? rapikan(kana) : '';
      }
      /* Ada kanji → kamus dulu; kana yang tersisa tetap diubah lewat tabel,
         kanji yang tidak ada di kamus membatalkan seluruh hasil. */
      const lewat = lewatKamus(t, m, c => {
        if (KANA[c] !== undefined) return jaKana(c, m) || null;
        return /[一-鿿]/.test(c) ? null : netral(c);
      });
      return lewat ? rapikan(lewat) : '';
    }
    case 'zh': {
      const lewat = lewatKamus(t, m, c => (/[一-鿿㐀-䶿]/.test(c) ? null : netral(c)));
      return lewat ? rapikan(lewat) : '';
    }
    default: return '';
  }
}

/** Rapikan spasi & tanda baca supaya enak dibaca mesin. */
function rapikan(s) {
  return String(s)
    .replace(/[·•]/g, ' ')
    .replace(/\s*([,.!?;:])\s*/g, '$1 ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Ejaan Latin apa pun → ejaan yang wajar dibaca suara Indonesia. */
export function keEjaanIndonesia(s) {
  return String(s || '')
    .replace(/sh/g, 'sy').replace(/Sh/g, 'Sy')
    .replace(/ch(?![aeiou]?k)/g, 'c').replace(/Ch/g, 'C')
    .replace(/ph/g, 'f')
    .replace(/(^|\s)x/g, '$1ks')
    .replace(/th/g, 't')
    .replace(/oo/g, 'u').replace(/ee/g, 'i');
}
