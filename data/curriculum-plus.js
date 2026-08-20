/* ── Topik tata bahasa baru → unit kurikulum ──────────────────────
   Menambahkan 42 topik ke indeks saja tidak cukup: orang yang mengikuti
   jalur belajar berurutan tidak pernah melewati indeks, jadi topiknya
   ada tapi tak pernah ditemui. Berkas ini menautkan tiap topik baru ke
   unit yang tepat, dan pelajarannya terbentuk sendiri karena
   curriculum.js membangkitkan pelajaran dari daftar grammar unitnya.

   Penempatannya mengikuti isi unit yang sudah ada, bukan urutan nomor:
   "have got" masuk unit yang sudah membahas kepemilikan, "klausa waktu
   masa depan" masuk unit yang membahas rencana, dan seterusnya.

   Topik menyusul di BELAKANG daftar unitnya, jadi urutan pelajaran yang
   sudah dikerjakan pemakai lama tidak bergeser — kemajuan mereka
   disimpan menurut id pelajaran seperti "a1-u3-g2", dan id itu terbentuk
   dari POSISI dalam daftar. Menyisipkan di tengah akan memindahkan
   kemajuan orang ke pelajaran yang salah.                             */

export const UNIT_TAMBAHAN = {
  /* ── A1 ── */
  'a1-u1': ['a1-26'],                     // urutan kata dasar
  'a1-u3': ['a1-22'],                     // suka + kata kerja, kebiasaan
  'a1-u4': ['a1-21', 'a1-23'],            // kepemilikan
  'a1-u6': ['a1-24', 'a1-25'],            // arah gerak, jam & tanggal

  /* ── A2 ── */
  'a2-u3': ['a2-26'],                     // klausa waktu masa depan
  'a2-u4': ['a2-21'],                     // sifat -ed / -ing
  'a2-u5': ['a2-23', 'a2-24', 'a2-29'],   // penakar & kata ganti tak tentu
  'a2-u6': ['a2-28', 'a2-30'],            // pilihan kata kerja, meminta
  'a2-u7': ['a2-22', 'a2-25', 'a2-27'],   // membangun kalimat

  /* ── B1 ── */
  'b1-u2': ['b1-25'],                     // bentuk sekarang untuk jadwal
  'b1-u3': ['b1-23'],                     // syarat selain if
  'b1-u4': ['b1-29'],                     // kata sambung tempat & waktu
  'b1-u6': ['b1-24'],                     // penyesalan & kritik
  'b1-u7': ['b1-26', 'b1-27', 'b1-30'],   // penguat struktur
  'b1-u8': ['b1-28', 'b1-31', 'b1-32'],   // ketelitian

  /* ── B2 ── */
  'b2-u1': ['b2-24', 'b2-30'],            // pengandaian
  'b2-u3': ['b2-23', 'b2-26'],            // pemadatan klausa
  'b2-u4': ['b2-28', 'b2-29'],            // pola kata kerja
  'b2-u7': ['b2-25'],                     // kepadatan kalimat
  'b2-u8': ['b2-27'],                     // pemolesan

  /* ── C1 ── */
  'c1-u1': ['c1-21'],                     // struktur bertanda
  'c1-u3': ['c1-24'],                     // kekuatan kata benda
  'c1-u4': ['c1-23'],                     // nuansa
  'c1-u7': ['c1-22'],                     // suara akademik

  /* ── C2 ── */
  'c2-u2': ['c2-19'],                     // modalitas & wacana
  'c2-u3': ['c2-17', 'c2-20'],            // ketepatan kata
  'c2-u6': ['c2-18'],                     // penguasaan
};

/** Menyambungkan topik tambahan ke daftar grammar satu unit. */
export const grammarUnit = u =>
  UNIT_TAMBAHAN[u.id]
    ? [...u.grammar, ...UNIT_TAMBAHAN[u.id].filter(g => !u.grammar.includes(g))]
    : u.grammar;
