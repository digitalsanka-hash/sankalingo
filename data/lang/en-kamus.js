/* KAMUS INGGRIS — kata paling sering dipakai.

   Berbeda dari kamus Korea, Jepang, Mandarin, Arab, dan Rusia, entri di
   sini tidak memuat romanisasi: tulisan Inggris memakai aksara Latin
   yang sudah dikenal pembaca Indonesia. Yang tidak terbaca dari ejaan
   Inggris adalah BUNYI-nya, dan itu ditangani pelajaran pelafalan,
   bukan kolom kamus.

   Bentuk kata yang disertakan:
     kata kerja  dasar (V1) · lampau (V2) · partisip (V3)
     kata benda  tunggal · jamak
     kata sifat  dasar · lebih · paling

   V1-V2-V3 dimuat lengkap karena kata kerja tak beraturan tidak bisa
   diturunkan dari pola apa pun: go menjadi went, bukan goed. Justru
   kata yang paling sering dipakai adalah yang paling tak beraturan,
   jadi ketiganya harus dihafal sekaligus.

   Jamak yang tidak beraturan ikut dicatat di kolom bentuk — child
   menjadi children, bukan childs — karena tepat di situ penutur
   Indonesia paling sering tergelincir: bahasa Indonesia tidak menandai
   jamak pada kata bendanya sama sekali.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './en-kamus-1.js';
import { BAGIAN as B2 } from './en-kamus-2.js';
import { BAGIAN as B3 } from './en-kamus-3.js';
import { BAGIAN as B4 } from './en-kamus-4.js';
import { BAGIAN as B5 } from './en-kamus-5.js';
import { BAGIAN as B6 } from './en-kamus-6.js';
import { BAGIAN as B7 } from './en-kamus-7.js';
import { BAGIAN as B8 } from './en-kamus-8.js';

export const KAMUS = {
  kode: 'en',
  bentukLabel: {
    v: ['dasar (V1)', 'lampau (V2)', 'partisip (V3)'],
    n: ['tunggal', 'jamak'],
    adj: ['dasar', 'lebih', 'paling']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
