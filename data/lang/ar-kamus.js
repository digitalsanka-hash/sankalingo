/* KAMUS ARAB — kata paling sering dipakai.

   Tiap entri wajib punya romanisasi: lema (r) DAN kalimat contohnya
   (cr). Tulisan Arab tidak memuat harakat dalam pemakaian sehari-hari,
   jadi tanpa romanisasi pemula tidak punya cara membaca vokalnya sama
   sekali.

   Bentuk kata yang disertakan:
     kata kerja  madhi (lampau) · mudhari (kini) · masdar
     kata benda  tunggal · jamak
     kata sifat  maskulin · feminin

   Kata kerja Arab dicantumkan lengkap dengan MASDAR-nya karena masdar
   adalah kata benda dari kata kerja itu — 'ذهب' (pergi) melahirkan
   'ذهاب' (kepergian) — dan ketiganya berdiri di atas akar yang sama.
   Mengenali akar tiga huruf itu adalah kunci membaca bahasa Arab:
   sekali polanya tertangkap, ratusan kata lain ikut terbaca.

   Jamak kata benda Arab sering TIDAK beraturan (jamak taksir): كتاب
   menjadi كتب, bukan dengan menambahkan akhiran. Karena itu jamaknya
   harus dihafal bersama tunggalnya, dan itulah alasan ia dimuat di
   kolom bentuk.

   Kata sifat diberi bentuk maskulin dan femininnya karena kata sifat
   Arab harus mengikuti jenis kata bendanya — kesalahan yang paling
   cepat terdengar dari penutur Indonesia, yang bahasanya tidak
   mengenal jenis kata sama sekali.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './ar-kamus-1.js';
import { BAGIAN as B2 } from './ar-kamus-2.js';
import { BAGIAN as B3 } from './ar-kamus-3.js';
import { BAGIAN as B4 } from './ar-kamus-4.js';
import { BAGIAN as B5 } from './ar-kamus-5.js';
import { BAGIAN as B6 } from './ar-kamus-6.js';
import { BAGIAN as B7 } from './ar-kamus-7.js';
import { BAGIAN as B8 } from './ar-kamus-8.js';

export const KAMUS = {
  kode: 'ar',
  bentukLabel: {
    v: ['madhi (lampau)', 'mudhari (kini)', 'masdar'],
    n: ['tunggal', 'jamak'],
    adj: ['maskulin', 'feminin']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
