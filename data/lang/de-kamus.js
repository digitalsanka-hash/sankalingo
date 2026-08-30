/* KAMUS JERMAN — kata paling sering dipakai, diurut menurut frekuensi.

   Bentuk kata yang disertakan:
     kata kerja  infinitif · Präteritum · Partizip II
     kata benda  artikel + tunggal · jamak
     kata sifat  dasar · komparatif · superlatif

   Artikel ikut ditulis di bentuk kata benda karena di Jerman jenis kata
   benda tidak bisa ditebak dari bentuknya, dan salah artikel merembet ke
   seluruh kalimat: der/die/das menentukan akhiran kata sifat dan bentuk
   kasusnya. Menghafal "Tisch" tanpa "der" berarti menghafal setengah.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './de-kamus-1.js';
import { BAGIAN as B2 } from './de-kamus-2.js';

export const KAMUS = {
  kode: 'de',
  bentukLabel: {
    v: ['infinitif', 'Präteritum', 'Partizip II'],
    n: ['tunggal', 'jamak'],
    adj: ['dasar', 'lebih', 'paling']
  },
  kata: [...B1, ...B2]
};
