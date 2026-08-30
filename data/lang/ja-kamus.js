/* KAMUS JEPANG — kata paling sering dipakai.

   Tiap entri wajib punya romanisasi: lema (r) DAN kalimat contohnya
   (cr). Tulisan Jepang memakai tiga aksara sekaligus, dan kanji tidak
   memberi petunjuk bunyi sama sekali — tanpa romanisasi, entri yang
   benar pun tidak bisa dibaca.

   Bentuk kata yang disertakan:
     kata kerja  bentuk kamus · ます · て · た
     kata sifat  dasar · sopan · lampau

   Bentuk て ikut dimuat pada kata kerja karena hampir semua pola tata
   bahasa Jepang menempel padanya: ～ている, ～てください, ～てもいい,
   ～てから. Tanpa bentuk itu, kata kerjanya hanya bisa berdiri sendiri
   dan tidak bisa dirangkai.

   Kata sifat ada dua jenis dan keduanya dicantumkan apa adanya: kata
   sifat-i berubah sendiri (高い → 高かった), kata sifat-na memakai kata
   bantu (静かです → 静かでした). Lemanya ditulis dengan だ supaya
   jenisnya langsung kelihatan.

   Kata benda tidak diberi daftar bentuk: kata benda Jepang tidak
   berubah — tidak ada jamak wajib dan tidak ada jenis kata.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './ja-kamus-1.js';
import { BAGIAN as B2 } from './ja-kamus-2.js';
import { BAGIAN as B3 } from './ja-kamus-3.js';
import { BAGIAN as B4 } from './ja-kamus-4.js';
import { BAGIAN as B5 } from './ja-kamus-5.js';
import { BAGIAN as B6 } from './ja-kamus-6.js';
import { BAGIAN as B7 } from './ja-kamus-7.js';
import { BAGIAN as B8 } from './ja-kamus-8.js';

export const KAMUS = {
  kode: 'ja',
  bentukLabel: {
    v: ['bentuk kamus', 'ます', 'て', 'た'],
    adj: ['dasar', 'sopan', 'lampau']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
