/* ── Penggabung materi tata bahasa ────────────────────────────────
   Satu tempat menggabungkan berkas grammar asli dengan berkas
   tambahannya. Dipakai BERSAMA oleh aplikasi (js/data.js) dan oleh
   pemeriksanya (tools/validasi-grammar.mjs) — supaya yang diperiksa
   mesin persis sama dengan yang dibaca pemakai. Kalau keduanya
   menggabung sendiri-sendiri, validator bisa lulus untuk susunan yang
   tidak pernah benar-benar tampil.

   Dua macam tambahan:
   · TOPIK BARU  — ditambahkan ke ujung daftar tingkatnya.
   · ISIAN       — latihan/contoh yang MENAMBAH topik yang sudah ada;
                   tidak pernah menimpa, hanya menyambung ke belakang.

   Urutannya sengaja: topik lama tetap di tempatnya, topik baru menyusul
   di belakang. Dengan begitu tautan #/grammar/<id> yang sudah pernah
   disimpan pemakai tidak berpindah maknanya.                         */

import { GRAMMAR_A1 } from './grammar-a1.js';
import { GRAMMAR_A2 } from './grammar-a2.js';
import { GRAMMAR_B1 } from './grammar-b1.js';
import { GRAMMAR_B2 } from './grammar-b2.js';
import { GRAMMAR_C1, GRAMMAR_C2 } from './grammar-c.js';

import { PLUS_A1, PLUS_A2 } from './grammar-plus-a.js';
import { PLUS_B1, PLUS_B2 } from './grammar-plus-b.js';
import { PLUS_C1, PLUS_C2 } from './grammar-plus-c.js';
import { ISI_AB } from './grammar-isi-ab.js';
import { ISI_C } from './grammar-isi-c.js';
import { KELOMPOK_TOPIK } from './grammar-kelompok.js';

const ISI = { ...ISI_AB, ...ISI_C };

/* Menyambung dua daftar TANPA kembar.

   Ini bukan kerapian belaka. Saat menulis isian tambahan, contoh yang
   sudah ada di berkas asli gampang sekali ikut tersalin — dan hasilnya
   pemelajar melihat kalimat yang sama dua kali dalam satu kartu. Lebih
   baik dicegah di sini sekali daripada dijaga manual di tiap berkas
   tambahan yang akan ditulis nanti.

   Kuncinya memakai elemen PERTAMA untuk larik (kalimat Inggrisnya pada
   contoh, sisi salah pada jebakan) dan pertanyaannya untuk latihan. */
const kunci = x => (Array.isArray(x) ? x[0] : (x?.q ?? x?.id ?? x?.text ?? x))
  ?.toString().trim().toLowerCase().replace(/\s+/g, ' ');

function tanpaKembar(lama, tambahan) {
  const keluar = [...lama];
  const sudah = new Set(lama.map(kunci));
  for (const x of tambahan) {
    const k = kunci(x);
    if (k && sudah.has(k)) continue;
    sudah.add(k); keluar.push(x);
  }
  return keluar;
}

/**
 * Menempelkan isian tambahan ke satu topik.
 * Menghasilkan SALINAN — berkas aslinya tidak pernah diubah, jadi
 * memuat ulang modul ini dua kali tidak menggandakan latihan.
 */
function sambung(g) {
  const t = ISI[g.id];
  /* Kelompok tema dipasang di sini, bukan di tiap berkas materi: dengan
     begitu satu topik tidak bisa punya dua kelompok yang berbeda. */
  const kel = KELOMPOK_TOPIK[g.id] || null;
  if (!t) return { ...g, kel };
  return {
    ...g, kel,
    why:    t.why || g.why,
    ex:     tanpaKembar(g.ex     || [], t.ex     || []),
    traps:  tanpaKembar(g.traps  || [], t.traps  || []),
    notes:  tanpaKembar(g.notes  || [], t.notes  || []),
    drills: tanpaKembar(g.drills || [], t.drills || []),
  };
}

const susun = (asli, baru) => [...asli.map(sambung), ...baru.map(sambung)];

export const A1 = susun(GRAMMAR_A1, PLUS_A1);
export const A2 = susun(GRAMMAR_A2, PLUS_A2);
export const B1 = susun(GRAMMAR_B1, PLUS_B1);
export const B2 = susun(GRAMMAR_B2, PLUS_B2);
export const C1 = susun(GRAMMAR_C1, PLUS_C1);
export const C2 = susun(GRAMMAR_C2, PLUS_C2);

export const PER_TINGKAT = { A1, A2, B1, B2, C1, C2 };
export const SEMUA = [...A1, ...A2, ...B1, ...B2, ...C1, ...C2];
