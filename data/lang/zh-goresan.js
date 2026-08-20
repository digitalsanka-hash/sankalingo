/* ── Goresan hanzi yang hilang ────────────────────────────────────
   你 (nǐ) terdaftar sebagai karakter yang bisa dilatih, tetapi larik
   goresannya KOSONG. Akibatnya papan latihnya tidak menggambar apa
   pun: tombol "Putar goresan" ditekan, tidak terjadi apa-apa, dan
   tidak ada pesan yang menjelaskan kenapa.

   你 = 亻 (radikal orang, 2 goresan) + 尔 (5 goresan) = 7 goresan.
   Urutannya mengikuti aturan baku: radikal kiri lebih dulu, lalu
   bagian kanan dari atas ke bawah, titik-titiknya paling akhir.     */

export const GORESAN = {
  '你': [
    'M31 13 C28 27 23 42 13 54',        /* 丿 radikal orang           */
    'M25 35 L25 93',                     /* 丨 tiang radikal           */
    'M66 10 C63 18 57 26 50 33',        /* 丿 puncak 尔               */
    'M41 37 C55 36 72 35 85 35',        /* 一 mendatar                */
    'M63 37 L63 83 C63 91 57 94 49 90', /* 亅 tiang berkait           */
    'M52 52 C48 59 45 66 43 73',        /* 丶 titik kiri              */
    'M77 52 C80 60 84 68 87 76',        /* 丶 titik kanan             */
  ],
};
