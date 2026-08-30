/* KAMUS PRANCIS — kata paling sering dipakai.

   Bentuk kata yang disertakan:
     kata kerja  infinitif · participe passé · présent (il/elle)
     kata benda  artikel + tunggal · jamak
     kata sifat  maskulin · feminin · jamak

   Artikel ikut ditulis karena jenis kelamin kata benda Prancis tidak
   bisa ditebak dari bentuknya, dan ia menentukan artikel, kata sifat,
   serta bentuk kata ganti yang menggantikannya.

   Participe passé disertakan karena passé composé adalah bentuk lampau
   yang dipakai sehari-hari, dan participe-nya banyak yang menyimpang:
   avoir → eu, être → été, faire → fait, prendre → pris. Présent orang
   ketiga ikut karena itulah bentuk yang paling sering didengar.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './fr-kamus-1.js';
import { BAGIAN as B2 } from './fr-kamus-2.js';
import { BAGIAN as B3 } from './fr-kamus-3.js';
import { BAGIAN as B4 } from './fr-kamus-4.js';
import { BAGIAN as B5 } from './fr-kamus-5.js';
import { BAGIAN as B6 } from './fr-kamus-6.js';
import { BAGIAN as B7 } from './fr-kamus-7.js';
import { BAGIAN as B8 } from './fr-kamus-8.js';

export const KAMUS = {
  kode: 'fr',
  bentukLabel: {
    v: ['infinitif', 'participe passé', 'présent (il)'],
    n: ['tunggal', 'jamak'],
    adj: ['maskulin', 'feminin', 'jamak']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
