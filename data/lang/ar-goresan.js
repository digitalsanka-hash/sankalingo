/* ── Goresan huruf hijaiyah, ditulis ulang ────────────────────────
   Menggantikan jalur goresan di data/lang/ar.js. Berkas aslinya tidak
   disentuh; penggantinya ditempel di js/langctx.js saat memuat.

   KENAPA DITULIS ULANG

   Seluruh 28 huruf sebelumnya berupa POLYLINE 4–37 titik — jejak
   telusur tangan yang direkam mentah. Huruf Arab pada dasarnya
   melengkung, dan garis patah tidak bisa menirunya. Yang paling parah
   jim (ج): satu goresan berisi 33 titik yang berbalik-balik ke
   koordinat hampir sama —

       … L45.3 16.3 L67.1 14.3 L72.6 10.9 L69.1 13.5 L45 16.1 …

   — sehingga tergambar sebagai gumpalan, bukan huruf.

   Di sini semuanya memakai kurva Bézier. Bentuknya disederhanakan
   (naskhi tanpa hiasan) supaya jelas diikuti pemelajar yang baru
   pertama memegang pena Arab, tetapi tiap ciri pembedanya
   dipertahankan: gigi sin, simpul shad, kepala ain, ekor ya.

   TITIK (nuqta) ditulis sebagai goresan sepanjang ±0,8 satuan.
   Penggambarnya memakai stroke-linecap bulat setebal 7, jadi goresan
   sependek itu tergambar sebagai TITIK BULAT yang rapi. Sebelumnya
   titik jim panjangnya 9,9 — tergambar sebagai tunggul gemuk, bukan
   titik.

   URUTAN GORESAN mengikuti cara menulis sesungguhnya: badan huruf
   lebih dulu, selalu dari sisi KANAN, baru titiknya. Angka pada
   lingkaran di layar mengikuti urutan larik ini.

   Tata letak dalam kotak 0–100:
     garis dasar   y ≈ 70      puncak badan  y ≈ 40
     puncak tegak  y ≈ 18      ekor turun    y ≈ 86
     mulai kanan   x ≈ 84      habis kiri    x ≈ 17          */

/** Titik huruf: goresan sependek mungkin, tergambar sebagai titik. */
const t = (x, y) => `M${x - 0.4} ${y} L${x + 0.4} ${y}`;

export const GORESAN = {

  /* ── Tegak & bergigi ── */
  'ا': ['M50 18 L50 82'],

  'ب': ['M82 44 C82 62 72 70 56 70 C40 70 26 68 20 60', t(50, 84)],
  'ت': ['M82 44 C82 62 72 70 56 70 C40 70 26 68 20 60', t(43, 32), t(59, 32)],
  'ث': ['M82 44 C82 62 72 70 56 70 C40 70 26 68 20 60', t(51, 24), t(43, 34), t(59, 34)],

  /* ── Keluarga jim: kepala miring lalu mangkuk dalam ── */
  'ج': ['M78 28 C64 32 52 34 46 38 C34 44 26 54 28 64 C31 74 45 81 60 80 C73 79 83 72 86 62',
        t(54, 64)],
  'ح': ['M78 28 C64 32 52 34 46 38 C34 44 26 54 28 64 C31 74 45 81 60 80 C73 79 83 72 86 62'],
  'خ': ['M78 28 C64 32 52 34 46 38 C34 44 26 54 28 64 C31 74 45 81 60 80 C73 79 83 72 86 62',
        t(57, 18)],

  /* ── Keluarga dal: sudut lalu kaki mendatar ── */
  'د': ['M70 28 C58 36 48 48 44 58 C41 66 47 72 57 72 L78 72'],
  'ذ': ['M70 28 C58 36 48 48 44 58 C41 66 47 72 57 72 L78 72', t(59, 20)],

  /* ── Keluarga ra: lengkung turun melewati garis dasar ── */
  'ر': ['M70 36 C68 50 61 63 50 71 C42 77 33 81 25 82'],
  'ز': ['M70 36 C68 50 61 63 50 71 C42 77 33 81 25 82', t(65, 24)],

  /* ── Keluarga sin: tiga gigi lalu mangkuk ── */
  'س': ['M86 64 L82 48 L78 64 L74 48 L70 64 L66 48 L62 64 C56 74 42 78 30 72 C22 67 17 58 17 50'],
  'ش': ['M86 64 L82 48 L78 64 L74 48 L70 64 L66 48 L62 64 C56 74 42 78 30 72 C22 67 17 58 17 50',
        t(71, 30), t(79, 30), t(75, 22)],

  /* ── Keluarga shad: simpul bulat lalu mangkuk ── */
  'ص': ['M80 52 C80 44 72 39 64 41 C56 43 52 52 57 59 C61 65 71 65 77 61 C71 74 51 79 37 75 C25 71 18 61 18 52'],
  'ض': ['M80 52 C80 44 72 39 64 41 C56 43 52 52 57 59 C61 65 71 65 77 61 C71 74 51 79 37 75 C25 71 18 61 18 52',
        t(67, 26)],

  /* ── Keluarga tha: simpul mendatar lalu tiang tegak ── */
  'ط': ['M76 60 C70 67 54 70 43 65 C34 61 32 52 39 47 C45 43 55 46 59 53 C62 59 62 66 60 72',
        'M74 20 L74 70'],
  'ظ': ['M76 60 C70 67 54 70 43 65 C34 61 32 52 39 47 C45 43 55 46 59 53 C62 59 62 66 60 72',
        'M74 20 L74 70', t(65, 16)],

  /* ── Keluarga ain: kepala terbuka lalu ekor menukik ── */
  'ع': ['M78 34 C70 28 58 30 54 38 C50 46 56 53 64 54 C56 60 46 70 42 78 C39 84 44 88 52 86'],
  'غ': ['M78 34 C70 28 58 30 54 38 C50 46 56 53 64 54 C56 60 46 70 42 78 C39 84 44 88 52 86',
        t(63, 22)],

  /* ── Keluarga fa & qaf: simpul kecil lalu badan mendatar ── */
  'ف': ['M74 44 C74 37 66 34 60 38 C54 42 55 50 62 52 C70 54 78 52 82 46 C80 60 66 66 52 66 L26 66',
        t(69, 24)],
  'ق': ['M74 44 C74 37 66 34 60 38 C54 42 55 50 62 52 C70 54 78 52 82 46 C80 62 62 70 46 68 C32 66 24 56 26 46',
        t(61, 22), t(75, 22)],

  /* ── Bersudut & bertiang ── */
  'ك': ['M76 22 L76 64 C76 70 70 72 62 72 L24 72', 'M40 40 L58 34'],
  'ل': ['M66 18 L66 56 C66 68 56 74 44 74 C32 74 24 66 24 56'],

  /* ── Bersimpul & berekor ── */
  'م': ['M68 48 C68 41 60 38 54 42 C48 46 49 55 57 57 C65 59 72 55 74 48 C72 62 66 76 58 86'],
  'ن': ['M76 42 C76 58 68 70 52 70 C36 70 24 60 24 46', t(50, 30)],
  'ه': ['M56 40 C46 40 40 48 42 58 C44 68 56 72 66 68 C74 65 76 56 70 48 C64 41 52 38 46 44'],
  'و': ['M72 44 C72 36 63 32 56 36 C49 40 49 50 57 54 C65 58 74 54 76 46 C76 62 70 78 56 88'],
  'ي': ['M78 44 C78 58 70 66 56 66 C42 66 32 60 30 50 C28 60 34 72 46 78 C58 84 72 82 80 74',
        t(45, 88), t(59, 88)],
};
