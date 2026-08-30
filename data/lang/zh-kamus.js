/* KAMUS MANDARIN — kata paling sering dipakai.

   Tiap entri wajib punya romanisasi: lema (r) DAN kalimat contohnya
   (cr). Hanzi tidak memberi petunjuk bunyi sama sekali — tanpa pinyin,
   entri yang benar pun tidak bisa dilafalkan.

   Yang disertakan di kolom bentuk hanya KATA BANTU BILANGAN kata benda.

   Alasannya: kata kerja Mandarin tidak berubah bentuk sama sekali —
   tidak ada bentuk lampau, tidak ada penyesuaian pelaku, tidak ada
   bentuk sopan. Waktu ditandai partikel (了, 过, 着) dan keterangan
   waktu, dan itu urusan tata bahasa. Membuat kolom bentuk untuk kata
   kerja hanya akan mengulang lemanya tiga kali.

   Yang justru TIDAK bisa ditebak adalah kata bantu bilangannya. Benda
   Mandarin tidak bisa dihitung telanjang: bukan 一书 melainkan 一本书,
   bukan 一鱼 melainkan 一条鱼. Tidak ada aturan yang menurunkannya dari
   makna kata, jadi ia harus dihafal bersama kata bendanya — persis
   seperti jenis kata di bahasa Jerman atau Rusia. Karena itu ia
   ditaruh di tempat yang paling terlihat.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './zh-kamus-1.js';
import { BAGIAN as B2 } from './zh-kamus-2.js';
import { BAGIAN as B3 } from './zh-kamus-3.js';
import { BAGIAN as B4 } from './zh-kamus-4.js';
import { BAGIAN as B5 } from './zh-kamus-5.js';
import { BAGIAN as B6 } from './zh-kamus-6.js';
import { BAGIAN as B7 } from './zh-kamus-7.js';
import { BAGIAN as B8 } from './zh-kamus-8.js';

export const KAMUS = {
  kode: 'zh',
  bentukLabel: {
    n: ['kata bantu bilangan']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7, ...B8]
};
