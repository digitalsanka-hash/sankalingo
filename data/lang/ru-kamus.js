/* KAMUS RUSIA — kata paling sering dipakai.

   Tiap entri wajib punya romanisasi: lema (r) DAN kalimat contohnya
   (cr). Aksara Kiril bukan sekadar hiasan bagi pemula — tanpa
   romanisasi ia tidak bisa dilafalkan sama sekali, dan kamus yang tidak
   bisa dilafalkan cuma berguna separuh.

   Bentuk kata yang disertakan:
     kata kerja  tak sempurna · sempurna · lampau (dia lk)
     kata benda  tunggal · jamak · jenis
     kata sifat  maskulin · feminin · netral

   Pasangan ASPEK adalah kunci kata kerja Rusia dan tidak ada padanannya
   di bahasa Indonesia: satu bentuk untuk kejadian yang berlangsung atau
   berulang (несовершенный), satu lagi untuk kejadian yang tuntas
   (совершенный). Menghafal satu bentuk saja berarti separuh kata
   kerjanya tidak bisa dipakai.

   Jenis kata benda ikut ditulis karena ia menentukan akhiran kata sifat
   dan bentuk lampau kata kerjanya.

   Isinya ada di berkas bagian; berkas ini hanya menyatukannya. */

import { BAGIAN as B1 } from './ru-kamus-1.js';
import { BAGIAN as B2 } from './ru-kamus-2.js';
import { BAGIAN as B3 } from './ru-kamus-3.js';
import { BAGIAN as B4 } from './ru-kamus-4.js';
import { BAGIAN as B5 } from './ru-kamus-5.js';
import { BAGIAN as B6 } from './ru-kamus-6.js';
import { BAGIAN as B7 } from './ru-kamus-7.js';

export const KAMUS = {
  kode: 'ru',
  bentukLabel: {
    v: ['tak sempurna', 'sempurna', 'lampau (он)'],
    n: ['tunggal', 'jamak', 'jenis'],
    adj: ['maskulin', 'feminin', 'netral']
  },
  kata: [...B1, ...B2, ...B3, ...B4, ...B5, ...B6, ...B7]
};
