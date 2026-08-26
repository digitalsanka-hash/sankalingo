/* ── Goresan huruf Jerman: titik umlaut dibetulkan ────────────────
   Hanya huruf berumlaut yang diganti; sisanya memakai goresan di
   data/lang/de.js apa adanya.

   MASALAHNYA: titik umlaut ditulis sebagai GARIS TEGAK sepanjang 8
   satuan — "M38 20 L38 28". Penggambarnya memakai pena bulat setebal
   7, jadi garis sepanjang 8 tergambar sebagai TUNGGUL GEMUK, bukan
   titik. Umlaut jadi terlihat seperti dua coretan pendek di atas
   huruf, dan pemelajar meniru bentuk yang salah.

   Titik yang benar panjangnya di bawah tebal penanya sendiri; ujung
   bulatnya yang membentuk lingkaran. Di sini dipakai 0,8.            */

const t = (x, y) => `M${x - 0.4} ${y} L${x + 0.4} ${y}`;

export const GORESAN = {
  'ä': ['M50 42 C34 42 26 54 26 66 C26 78 36 86 50 86 C62 86 72 78 72 66',
        'M72 42 L72 86', t(38, 24), t(60, 24)],
  'ö': ['M50 42 C34 42 24 54 24 64 C24 76 34 86 50 86 C66 86 76 76 76 64 C76 54 66 42 50 42',
        t(38, 24), t(62, 24)],
  'ü': ['M26 42 L26 70 C26 82 38 88 50 88 C62 88 74 82 74 70', 'M74 42 L74 86', t(38, 24), t(62, 24)],
  'Ä': ['M50 34 L24 88', 'M50 34 L76 88', 'M34 72 L66 72', t(38, 18), t(62, 18)],
  'Ö': ['M50 34 C30 34 22 52 22 62 C22 76 32 88 50 88 C68 88 78 76 78 62 C78 52 70 34 50 34',
        t(38, 18), t(62, 18)],
  'Ü': ['M26 34 L26 68 C26 82 38 88 50 88 C62 88 74 82 74 68 L74 34', t(38, 18), t(62, 18)],
};
