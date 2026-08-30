/* KAMUS KOREA — kata paling sering dipakai.

   Tiap entri wajib punya romanisasi: lema (r) DAN kalimat contohnya
   (cr). Hangeul memang bisa dibaca dalam sehari, tetapi pemula yang
   baru mulai belum bisa, dan kamus yang belum bisa dilafalkan hanya
   berguna separuh.

   Bentuk kata yang disertakan:
     kata kerja  bentuk kamus · bentuk sopan (해요) · lampau (했어요)
     kata sifat  bentuk kamus · bentuk sopan (해요) · lampau (했어요)

   Kata sifat Korea DIKONJUGASIKAN seperti kata kerja — 크다 menjadi
   커요, bukan disandingkan dengan kata 'adalah'. Itu sebabnya kata
   sifat di sini diberi tiga bentuk yang sama persis polanya dengan kata
   kerja, bukan tingkat perbandingan seperti di bahasa Eropa.

   Kata benda TIDAK diberi daftar bentuk: kata benda Korea tidak berubah
   — tidak ada jamak wajib, tidak ada jenis kata. Menuliskan kolom
   bentuk yang isinya sama semua hanya akan menyesatkan.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './ko-kamus-1.js';
import { BAGIAN as B2 } from './ko-kamus-2.js';
import { BAGIAN as B3 } from './ko-kamus-3.js';
import { BAGIAN as B4 } from './ko-kamus-4.js';
import { BAGIAN as B5 } from './ko-kamus-5.js';
import { BAGIAN as B6 } from './ko-kamus-6.js';
import { BAGIAN as B7 } from './ko-kamus-7.js';
import { BAGIAN as B8 } from './ko-kamus-8.js';

export const KAMUS = {
  kode: 'ko',
  bentukLabel: {
    v: ['bentuk kamus', 'sopan (해요)', 'lampau (했어요)'],
    adj: ['bentuk kamus', 'sopan (해요)', 'lampau (했어요)']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
