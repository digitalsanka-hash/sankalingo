/* ── Goresan huruf Rusia: titik pada Ё dibetulkan ─────────────────
   Sama seperti umlaut Jerman: dua titik di atas Ё ditulis sebagai
   garis tegak sepanjang 8 satuan, sehingga tergambar sebagai tunggul
   gemuk oleh pena bulat setebal 7 — bukan titik.

   Hanya Ё yang diganti; 32 huruf Kiril lainnya memang sudah benar. */

const t = (x, y) => `M${x - 0.4} ${y} L${x + 0.4} ${y}`;

export const GORESAN = {
  'Ё': ['M30 24 L30 84', 'M30 24 L74 24', 'M30 52 L64 52', 'M30 84 L74 84',
        t(40, 13), t(60, 13)],
};
