/* ── Perbandingan teks: normalisasi, jarak, dan penilaian kalimat ──

   Modul ini SENGAJA bebas DOM. Isinya dulu tersebar di js/speech.js, yang
   menyentuh window.speechSynthesis pada baris ketujuh, sehingga aturan
   penilaian jawaban tidak bisa diuji tanpa peramban — padahal justru
   aturan itulah yang menentukan benar-salahnya jawaban pemelajar.

   js/speech.js dan js/quiz.js sama-sama mengambil dari sini, jadi tidak
   ada dua salinan yang bisa menyimpang diam-diam.                       */

/** Bentuk baku untuk membandingkan: huruf kecil, tanda baca dibuang. */
export const norm = s => String(s ?? '').toLowerCase().trim()
  .replace(/[.,!?;:"]/g, '').replace(/\s+/g, ' ');

/** Jarak Levenshtein per huruf. */
export function lev(a, b) {
  const x = String(a ?? ''), y = String(b ?? '');
  const d = Array.from({ length: x.length + 1 }, (_, i) =>
    Array.from({ length: y.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= x.length; i++)
    for (let j = 1; j <= y.length; j++)
      d[i][j] = x[i - 1] === y[j - 1]
        ? d[i - 1][j - 1]
        : 1 + Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]);
  return d[x.length][y.length];
}

/** Kemiripan 0–100 per HURUF. */
export function similarity(a, b) {
  const x = norm(a), y = norm(b);
  if (!x && !y) return 100;
  const d = lev(x, y);
  return Math.max(0, Math.round((1 - d / Math.max(x.length, y.length, 1)) * 100));
}

/* ── Penilaian kalimat bebas (dikte & terjemah) ───────────────────

   Dulu penilaiannya hanya `similarity(kunci, jawaban) >= 88` — jarak
   Levenshtein per HURUF. Untuk kalimat sungguhan ukuran itu longgar
   dengan cara yang paling merugikan: perbedaan yang MEMBALIK MAKNA cuma
   menambah tiga huruf.

   Diukur pada 133 butir trans/dictate yang benar-benar ada di aplikasi:
     · 68 dari 76 kalimat yang bisa dinegasikan (89%) tetap dinilai BENAR
       ketika maknanya dibalik. "They are waiting outside." dijawab
       "They aren't waiting outside." memperoleh 89%.
     · 343 dari 846 penghilangan satu kata (41%) juga lolos, karena kata
       fungsi yang pendek nyaris tidak berbiaya dalam jarak per huruf.

   Padahal kartu dikte sendiri berbunyi "tulis PERSIS apa yang kamu
   dengar".

   Dua perubahan:

   1. PENJAGA NEGASI — kalau jumlah penanda negasi kunci dan jawaban
      berbeda, jawabannya salah berapa pun kemiripan hurufnya. Ini bukan
      soal ketelitian mengetik, melainkan lawan makna.

   2. JARAK PER KATA, bukan per huruf. Tiap kata yang hilang berbiaya satu
      slot penuh, jadi menghilangkan satu dari lima kata memberi 80% dan
      gagal — tidak lagi bergantung pada panjang kata itu.

      Supaya salah ketik biasa tetap dimaafkan, dua kata dianggap sama
      kalau jarak Damerau-Levenshteinnya <= 1 — termasuk huruf yang
      TERTUKAR, yang pada Levenshtein biasa berbiaya dua dan membuat
      "Seh" untuk "She" terbaca sebagai kata yang hilang.

   Terukur sesudahnya, pada bahan yang sama:
     · pembalikan makna yang lolos: 68 dari 76  →  0 dari 76
     · jawaban kunci yang diterima: 245 dari 245
     · salah ketik ringan yang dimaafkan: 117 dari 133
     · penghilangan satu kata yang lolos: 343 dari 846 → 197 dari 846

   Angka-angka itu diukur ulang tiap kali oleh tools/audit-penilaian.mjs.
   Ambangnya tidak boleh dinilai dengan dibaca saja: longgar-ketatnya
   bergantung pada panjang kalimat, dan percobaan pertama saya — yang
   diuji pada kalimat pendek buatan sendiri — memberi kesan keliru bahwa
   penilaian lama sudah cukup ketat.                                    */

/* Singkatan DIURAI lebih dulu, di kedua sisi.

   Perbandingan per kata tidak boleh menghukum bentuk singkat: "She isn't
   a teacher" berisi empat kata, "She is not a teacher" lima. Tanpa
   penguraian ini, jawaban yang benar-benar setara dinilai kehilangan satu
   kata dan ditolak — terukur 42% jawaban kunci sendiri ikut ditolak pada
   percobaan pertama. */
const URAIAN = [
  [/\bcan't\b/g, 'can not'], [/\bwon't\b/g, 'will not'], [/\bshan't\b/g, 'shall not'],
  [/\bn't\b/g, ' not'],
  [/\bi'm\b/g, 'i am'], [/\b(\w+)'re\b/g, '$1 are'],
  [/\b(\w+)'ve\b/g, '$1 have'], [/\b(\w+)'ll\b/g, '$1 will'],
  [/\b(\w+)'d\b/g, '$1 would'],
  [/\bit's\b/g, 'it is'], [/\bthat's\b/g, 'that is'],
  [/\bhe's\b/g, 'he is'], [/\bshe's\b/g, 'she is'],
  [/\bwhat's\b/g, 'what is'], [/\bthere's\b/g, 'there is'],
  [/\blet's\b/g, 'let us'],
];

export function uraikan(s) {
  let t = String(s ?? '').toLowerCase().replace(/[’]/g, "'");
  t = t.replace(/(\w)n't\b/g, '$1 not');
  for (const [re, ganti] of URAIAN) t = t.replace(re, ganti);
  return t;
}

const PENANDA_NEGASI =
  /\b(not|no|never|none|nothing|nobody|nowhere|neither|nor)\b/g;

/** Berapa penanda negasi dalam kalimat ini. */
export function hitungNegasi(s) {
  return (uraikan(s).match(PENANDA_NEGASI) || []).length;
}

/* Jarak Damerau-Levenshtein: huruf BERTUKARAN dihitung satu langkah, bukan
   dua. Ini yang membedakan salah ketik ("Seh" untuk "She", "ened" untuk
   "need") dari kata yang benar-benar lain. Dengan Levenshtein biasa
   pertukaran berbiaya 2 dan salah ketik sepele pada kata pendek terbaca
   sebagai kata yang hilang. */
function levTukar(a, b) {
  const x = String(a), y = String(b);
  const d = Array.from({ length: x.length + 1 }, (_, i) =>
    Array.from({ length: y.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= x.length; i++)
    for (let j = 1; j <= y.length; j++) {
      const biaya = x[i - 1] === y[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + biaya);
      if (i > 1 && j > 1 && x[i - 1] === y[j - 2] && x[i - 2] === y[j - 1])
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  return d[x.length][y.length];
}

/** Dua kata dianggap kata yang SAMA meski salah ketik ringan. */
export function kataSama(p, q) {
  if (p === q) return true;
  if (p.length < 3 || q.length < 3) return false;   // kata pendek harus tepat
  return levTukar(p, q) <= 1;
}

export const kataDari = s => norm(uraikan(s)).split(' ').filter(Boolean);

/** Kemiripan 0–1 per KATA; kata yang salah ketik ringan dianggap sama.
 *
 *  TIDAK dibulatkan ke persen. Pembulatan sempat membuat kalimat delapan
 *  kata yang kehilangan satu kata (7/8 = 87,5%) naik jadi 88 dan lolos
 *  ambang 88 — tepat kasus yang mau ditolak. */
export function nisbahPerKata(a, b) {
  const x = kataDari(a), y = kataDari(b);
  if (!x.length && !y.length) return 1;
  const d = Array.from({ length: x.length + 1 }, (_, i) =>
    Array.from({ length: y.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= x.length; i++)
    for (let j = 1; j <= y.length; j++)
      d[i][j] = kataSama(x[i - 1], y[j - 1])
        ? d[i - 1][j - 1]
        : 1 + Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]);
  return Math.max(0, 1 - d[x.length][y.length] / Math.max(x.length, y.length, 1));
}

/** Kemiripan 0–100 per KATA (untuk ditampilkan). */
export const miripPerKata = (a, b) => Math.round(nisbahPerKata(a, b) * 100);

/** Apakah jawaban bebas ini cukup cocok dengan kuncinya.
 *
 *  @param {boolean} [pilihan.ketat] jumlah kata harus sama persis.
 *    Dipakai untuk DIKTE, yang kartunya memang berbunyi "tulis PERSIS apa
 *    yang kamu dengar". Tanpa syarat ini, kalimat panjang tetap boleh
 *    kehilangan satu kata: sepuluh kata dikurangi satu masih 90% dan lolos
 *    ambang 88. Kata yang hilang selalu mengubah jumlah kata; salah ketik
 *    tidak, jadi syarat ini tidak menghukum pengetikan. */
export function cocokKalimat(kunci, jawaban, tol = 88, { ketat = false } = {}) {
  if (hitungNegasi(kunci) !== hitungNegasi(jawaban)) return false;
  if (ketat && kataDari(kunci).length !== kataDari(jawaban).length) return false;
  /* Ukuran per KATA yang menentukan; ukuran per huruf tidak lagi dipakai
     sebagai syarat kedua karena setelah singkatan diurai kedua sisi bisa
     berbeda panjang hurufnya tanpa berbeda maknanya. */
  return nisbahPerKata(kunci, jawaban) >= tol / 100;
}
