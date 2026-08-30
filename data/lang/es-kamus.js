/* KAMUS SPANYOL — kata paling sering dipakai.

   Bentuk kata yang disertakan:
     kata kerja  infinitivo · pretérito (él) · participio
     kata benda  artikel + tunggal · jamak
     kata sifat  maskulin · feminin · jamak

   Artikel ikut ditulis di kata benda karena jenis kelamin kata Spanyol
   menentukan bentuk artikel DAN akhiran kata sifat yang mengikutinya.
   Menghafal "mesa" tanpa "la" berarti menghafal setengah, dan separuh
   yang hilang itulah yang bikin kalimatnya salah.

   Pretérito dipilih daripada presente karena di situlah kata kerja tak
   beraturan Spanyol paling banyak menyimpang: ir → fue, tener → tuvo,
   hacer → hizo. Bentuk yang paling sering keliru adalah yang paling
   perlu ditampilkan.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './es-kamus-1.js';
import { BAGIAN as B2 } from './es-kamus-2.js';
import { BAGIAN as B3 } from './es-kamus-3.js';
import { BAGIAN as B4 } from './es-kamus-4.js';
import { BAGIAN as B5 } from './es-kamus-5.js';
import { BAGIAN as B6 } from './es-kamus-6.js';
import { BAGIAN as B7 } from './es-kamus-7.js';
import { BAGIAN as B8 } from './es-kamus-8.js';

export const KAMUS = {
  kode: 'es',
  bentukLabel: {
    v: ['infinitivo', 'pretérito (él)', 'participio'],
    n: ['tunggal', 'jamak'],
    adj: ['maskulin', 'feminin', 'jamak']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
