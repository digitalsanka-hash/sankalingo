/* Trik jitu TOEFL ITP — per bagian, dengan anggaran waktu.
   Dipisah dari exam-tactics.js supaya berkas itu tidak perlu disentuh. */

const T = (title, budget, steps, why) => ({ title, budget, steps, why });

export const TACTICS_ITP = {
  listening: [
    T('Baca empat pilihan SEBELUM rekaman berbunyi', '±5 dtk tiap soal',
      ['Selagi narator membaca petunjuk Part A, matamu sudah di pilihan soal 1.',
       'Cari kata yang sama di dua pilihan atau lebih — biasanya topiknya di situ.',
       'Begitu jawaban dipilih, langsung pindah ke pilihan soal berikutnya. Jangan menunggu.'],
      'Pertanyaan tidak tercetak. Satu-satunya cara "membaca dulu" adalah membaca pilihannya.'),
    T('Part A: jawaban ada di ucapan penutur KEDUA', '—',
      ['Penutur pertama membuka konteks; penutur kedua membawa jawabannya.',
       'Kalau penutur kedua memakai idiom, jangan pilih pilihan yang menerjemahkannya secara harfiah.',
       'Kalau ada pilihan yang memakai kata yang bunyinya mirip dengan yang terdengar (sail/sale), curigai — itu jebakan bunyi.'],
      'Hampir semua soal Part A dibangun di sekitar kalimat penutur kedua.'),
    T('Part B & C: tangkap tujuan di 10 detik pertama', '—',
      ['Kalimat pengantar narator ("Listen to a talk in a biology class") memberi tahu bidangnya — pakai untuk menebak kosakata.',
       'Soal pertama hampir selalu gagasan utama; jawabannya ada di pembukaan.',
       'Angka, nama, dan urutan langkah adalah bahan soal detail — tandai di kepala saat terdengar.'],
      'Empat soal per rekaman, dan urutannya mengikuti urutan isi rekaman.'),
    T('Jangan pernah kosong', '—',
      ['Kalau pertanyaannya terlewat, pilih pilihan yang paling "aman" secara isi, lalu lanjut.',
       'Tidak ada pengurangan nilai. Kosong = 0, tebakan = 25% peluang.',
       'Jangan mengejar soal yang lewat — rekaman terus berjalan.'],
      'Satu soal yang terlewat cuma satu soal. Mengejarnya bisa merugikan tiga soal berikutnya.')
  ],
  structure: [
    T('Structure: cari subjek dan kata kerja utama dulu', '30 dtk/soal',
      ['Sebelum melihat pilihan, tanya: kalimat ini sudah punya subjek? sudah punya verba utama?',
       'Yang belum ada itulah yang harus diisi rumpangnya.',
       'Coret pilihan yang membuat kalimat punya dua verba utama atau tanpa subjek.'],
      'Tiga dari empat distraktor ETS bekerja dengan merusak pasangan subjek–verba.'),
    T('Written Expression: periksa dalam urutan tetap', '35 dtk/soal',
      ['1) Kesesuaian subjek–kata kerja. 2) Bentuk kata (noun/adj/adv). 3) Paralelisme dalam daftar.',
       '4) Kata ganti dan rujukannya. 5) Artikel dan preposisi. 6) Perbandingan.',
       'Kalau setelah enam langkah belum ketemu, curigai kata yang tampak "terlalu benar" — redundansi atau urutan kata.'],
      'Urutan tetap mencegah kamu membaca ulang kalimat lima kali dan kehabisan waktu.'),
    T('Bagian bergaris bawah yang panjang belum tentu salah', '—',
      ['ETS sering menggarisbawahi frasa panjang yang benar sebagai pengalih.',
       'Kesalahan lebih sering di kata pendek: has/have, is/are, its/it\'s, a/an, than/then.',
       'Uji tiap bagian dengan pertanyaan: kalau bagian ini dihapus atau diganti, kalimatnya jadi benar?'],
      'Mata cenderung curiga pada yang panjang. Soalnya justru dirancang sebaliknya.'),
    T('Anggaran waktu: 15 soal Structure dalam 8 menit', '8 + 17 mnt',
      ['Structure 8 menit (≈30 detik/soal), Written Expression 17 menit (≈40 detik/soal).',
       'Kalau satu soal Structure lewat 45 detik, tebak, tandai, lanjut.',
       'Sisakan 1 menit terakhir untuk mengisi semua yang kosong.'],
      '40 soal dalam 25 menit adalah bagian dengan tekanan waktu tertinggi di ITP.')
  ],
  reading: [
    T('Baca soalnya dulu, teksnya kemudian', '11 mnt per bacaan',
      ['Baca sepuluh pertanyaannya (bukan pilihannya) selama 40 detik. Tandai kata kunci: nama, angka, istilah.',
       'Baru baca teksnya sekali, cepat, sambil menandai di mana kata kunci itu muncul.',
       'Jawab soal detail dengan kembali ke lokasi yang sudah ditandai — jangan membaca ulang dari awal.'],
      'Lima bacaan dalam 55 menit. Membaca tiap teks dua kali membuatmu kehabisan waktu di bacaan keempat.'),
    T('Soal kosakata: tutup pilihannya, tebak dulu', '—',
      ['Kembali ke kalimatnya, ganti kata itu dengan kata yang menurutmu cocok, baru buka pilihan.',
       'Pilih yang paling dekat dengan tebakanmu — bukan sinonim yang paling "keren".',
       'Kalau tidak tahu katanya, pakai konteks kalimat sesudahnya; ETS sering memberi petunjuk di situ.'],
      'Empat pilihan dirancang masuk akal semua secara tata bahasa. Yang membedakan hanya konteks.'),
    T('Soal NOT/EXCEPT: cari tiga yang ADA', '—',
      ['Tiga pilihan pasti disebut di teks. Temukan tiga itu satu per satu dan coret.',
       'Yang tersisa adalah jawabannya.',
       'Jangan mencari yang "salah" — carilah yang benar, sisanya jawabannya.'],
      'Mencari sesuatu yang tidak ada jauh lebih lambat daripada mencari tiga yang ada.'),
    T('Soal rujukan (it / they / this): ganti dan baca ulang', '—',
      ['Masukkan tiap pilihan ke posisi kata gantinya, baca kalimatnya.',
       'Hanya satu yang masuk akal dan cocok bilangan (tunggal/jamak).',
       'Rujukannya hampir selalu kata benda TERDEKAT sebelum kata ganti, tapi periksa — kadang ETS melompati satu frasa.'],
      'Ini soal paling cepat dijawab di Reading kalau caranya benar — 20 detik.'),
    T('Bacaan kelima tersulit: jangan simpan di akhir tanpa waktu', '—',
      ['Kalau di bacaan ketiga waktu tersisa kurang dari 25 menit, percepat: jawab soal detail dan kosakata, lewati inferensi.',
       'Bacaan kelima butuh ±13 menit; sisakan itu.',
       'Dua menit terakhir: isi semua yang kosong dengan huruf yang sama.'],
      'Skor Reading turun paling banyak bukan karena salah, tapi karena sepuluh soal terakhir tidak sempat dibaca.')
  ]
};

export const TIME_BUDGET_ITP = [
  ['Listening', '35 menit', '50 soal', 'Diatur rekaman — baca pilihan sebelum audio'],
  ['Structure', '8 menit', '15 soal', '≈30 dtk/soal'],
  ['Written Expression', '17 menit', '25 soal', '≈40 dtk/soal'],
  ['Reading', '55 menit', '50 soal', '≈11 mnt per bacaan, bacaan ke-5 paling lama']
];
