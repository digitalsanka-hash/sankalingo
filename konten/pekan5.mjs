/* ── Pekan 5 · Penutup ────────────────────────────────────────────

   Dua hari terakhir. Hari 29 merangkum seluruh rangkaian dan
   memberi satu bahan terakhir yang benar-benar berguna. Hari 30
   menutup dengan penawaran — tanpa tekanan palsu, tanpa angka
   yang dikarang.                                                   */

import { TAGAR } from './pekan1.mjs';
const t = (...k) => k.map(x => TAGAR[x]).join(' ');

export const PEKAN5 = [
/* ══ HARI 29 ═════════════════════════════════════════════════════ */
{ hari: 29, slot: 1, jenis: 'tunggal', nama: 'satu-aturan',
  gambar: [{ tipe: 'hook', glif: '1',
    pita: 'Kalau cuma boleh ingat satu hal',
    judul: 'Pakai <span class="emas">lebih awal</span> dari yang kamu rasa siap.',
    isi: 'Semua orang yang berhasil menguasai bahasa asing punya satu kesamaan: mereka memakainya sebelum merasa pantas.<br><br><b>Rasa siap itu datang setelah dipakai, bukan sebelum.</b>',
    kaki: 'Menunggu siap adalah cara paling halus untuk tidak pernah mulai.' }],
  caption: `Kalau dari seluruh rangkaian ini kamu cuma boleh mengingat satu hal, ingat yang ini:

Pakai lebih awal dari yang kamu rasa siap.

Semua orang yang akhirnya menguasai bahasa asing punya kesamaan itu. Mereka menulis email yang belum sempurna, ikut rapat dengan kosakata setengah, membalas komentar dengan kalimat yang mungkin salah.

Rasa siap datang SETELAH dipakai, bukan sebelum. Ia hasil, bukan syarat.

Menunggu sampai merasa pantas adalah cara paling halus untuk tidak pernah mulai — dan alasannya terdengar masuk akal terus sampai bertahun-tahun lewat.

Besok hari terakhir rangkaian ini.`,
  tagar: t('umum') },

{ hari: 29, slot: 2, jenis: 'carousel', nama: 'seluruh-rangkaian',
  gambar: [
    { tipe: 'hook', nomor: '1/7', glif: '30',
      pita: 'Carousel · rangkuman penuh',
      judul: 'Tiga puluh hari, <span class="api">dirangkum jadi satu.</span>',
      isi: 'Kalau kamu baru menemukan akun ini hari ini, geser. Semua yang penting dari rangkaian ini ada di tujuh slide berikut.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/7',
      pita: 'Aksara',
      judul: 'Yang terlihat mustahil, ternyata paling cepat',
      butir: [['Hangeul','Bisa dibaca dalam satu jam. Dirancang untuk cepat dipelajari.'],
              ['Hiragana','Sekitar dua minggu sampai otomatis.'],
              ['Kiril','33 huruf, sebagian sudah kamu kenali bentuknya.'],
              ['Arab','Dua minggu — lama karena satu huruf punya empat bentuk.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/7',
      pita: 'Jebakan tata bahasa',
      judul: 'Yang menandai penutur Indonesia',
      butir: [['Lampau','Bahasa kita tidak menandai waktu di kata kerja. Inggris menuntutnya.'],
              ['Gender kata benda','Jerman, Prancis, Spanyol. Hafalkan bersama artikelnya sejak hari pertama.'],
              ['Kesopanan','Jepang dan Korea. Salah tingkat lebih fatal daripada salah kata.'],
              ['Nada','Mandarin. Nada bagian dari katanya, bukan hiasan.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/7',
      pita: 'Kerja dan ujian',
      judul: 'Yang berdampak langsung',
      butir: [['CV','Kata kerja aktif dan angka. Buang umur, agama, foto.'],
              ['Email','Hapus "sorry for my bad English". Selalu.'],
              ['IELTS','Dahulukan listening dan reading — paling cepat naik.'],
              ['JLPT','N2 kalau targetmu kerja. N5 jarang berpengaruh untuk lamaran.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/7',
      pita: 'Cara belajar',
      judul: 'Empat yang menentukan',
      butir: [['30 menit sehari','Mengalahkan 4 jam seminggu sekali. Selalu.'],
              ['Satu sumber','Loncat-loncat sumber membuat tidak ada yang menumpuk.'],
              ['Diuji, bukan dibaca','Menonton penjelasan terasa seperti belajar. Bukan.'],
              ['Mulai bicara minggu pertama','Bukan setelah tata bahasamu rapi.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '6/7', glif: '↻',
      pita: 'Untuk yang pernah gagal',
      judul: 'Mulai lagi bukan mulai dari nol.',
      isi: 'Yang pernah masuk ke kepalamu tertidur, tidak hilang. Ia bangun jauh lebih cepat daripada waktu pertama dipelajari.<br><br><b>Kamu tidak mengulang. Kamu melanjutkan.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '7/7',
      pita: 'Semuanya tersusun',
      judul: 'Sembilan bahasa, satu kali bayar.',
      isi: '9.052 entri kamus · 326 pelajaran berurutan · 767 latihan yang menjelaskan sebabnya · 10 simulasi ujian resmi. Rp199.000 untuk lima bahasa, Rp299.000 untuk sembilan.' }],
  caption: `Tiga puluh hari dirangkum jadi tujuh slide. Kalau kamu baru menemukan akun ini hari ini, mulai dari sini.

Slide 2 — aksara: yang terlihat paling mustahil ternyata bagian paling cepat. Hangeul bisa dibaca dalam satu jam.

Slide 3 — empat jebakan yang menandai penutur Indonesia di bahasa mana pun.

Slide 4 — yang berdampak langsung ke pekerjaan: CV, email, dan target ujian yang benar.

Slide 5 — empat cara belajar yang menentukan hasilnya, lebih besar daripada bakat.

Slide 6 khusus untuk yang pernah berhenti di tengah jalan.

Simpan yang ini. Isinya cukup untuk memulai tanpa membeli apa pun. 📌`,
  tagar: t('umum') },

{ hari: 29, slot: 3, jenis: 'tunggal', nama: 'relate-satu-tahun',
  gambar: [{ tipe: 'hook', glif: '365',
    pita: 'Yang ingin saya tanyakan',
    judul: 'Setahun lagi, <span class="api">kamu di mana?</span>',
    isi: 'Dua kemungkinan. Sudah bisa membaca, mendengar, dan menjawab dalam bahasa yang hari ini masih asing — atau persis di tempat yang sama, mengucapkan kalimat yang sama.<br><br><b>Bedanya bukan bakat. Bedanya apa yang kamu lakukan bulan ini.</b>',
    kaki: 'Setahun akan lewat dengan atau tanpa kamu memutuskan.' }],
  caption: `Setahun dari hari ini, kamu ada di salah satu dari dua tempat.

Pertama: bisa membaca, mendengar, dan menjawab dalam bahasa yang hari ini masih terasa asing. Bukan fasih — tapi berguna. Cukup untuk melamar, untuk bepergian, untuk mengerti tanpa terjemahan.

Kedua: persis di tempat yang sama seperti hari ini, mengucapkan kalimat yang sama tentang nanti kalau sudah longgar.

Bedanya bukan bakat, bukan umur, bukan kecerdasan.

Bedanya apa yang kamu lakukan bulan ini.

Setahun itu akan lewat dengan atau tanpa kamu memutuskan apa pun. Itu bagian yang tidak bisa ditawar.`,
  tagar: t('umum') },

{ hari: 29, slot: 4, jenis: 'tunggal', nama: 'jual-isi-lengkap',
  gambar: [{ tipe: 'daftar',
    pita: 'Isi lengkapnya',
    judul: 'Apa yang <span class="emas">sebenarnya</span> kamu dapat.',
    butir: [['9.052 entri kamus','Sekitar seribu kata per bahasa, dengan bentuk yang berubah dan tombol suara.'],
            ['326 pelajaran berurutan','Inggris CEFR A1–C2 dalam 44 unit, plus kurikulum delapan bahasa lain.'],
            ['767 latihan','Masing-masing menjelaskan kebiasaan bahasa Indonesia mana yang menyeretmu.'],
            ['10 simulasi ujian','IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, Goethe, DELF, DELE, TORFL.']],
    kaki: 'Sekali bayar. Tanpa langganan, tanpa level tambahan, tanpa tanggal kedaluwarsa.' }],
  caption: `Isi lengkap SankaLingo GO, tanpa dilebih-lebihkan:

📖 9.052 entri kamus — sekitar seribu kata per bahasa. Bukan cuma artinya: bentuk jamak, bentuk lampau, bentuk sopan, masing-masing dengan tombol suaranya sendiri.

📚 326 pelajaran berurutan — Inggris lengkap CEFR A1 sampai C2 dalam 44 unit, plus kurikulum delapan bahasa lain.

✍️ 767 latihan — dan tiap koreksi menjelaskan kenapa kamu salah, bukan cuma bahwa kamu salah.

📝 10 simulasi ujian — IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, Goethe, DELF, DELE, TORFL. Format dan penilaiannya ditiru; soalnya ditulis sendiri.

Rp199.000 untuk lima bahasa. Rp299.000 untuk sembilan.

Sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 30 ═════════════════════════════════════════════════════ */
{ hari: 30, slot: 1, jenis: 'tunggal', nama: 'hari-terakhir',
  gambar: [{ tipe: 'hook', glif: '✓',
    pita: 'Hari terakhir rangkaian',
    judul: 'Tiga puluh hari. <span class="emas">Semuanya masih di sana.</span>',
    isi: 'Aksara, jebakan tata bahasa, strategi ujian, CV, dan rencana 90 hari — semuanya gratis dan tetap akan gratis.<br><br><b>Gulir ke bawah kapan saja. Tidak ada yang dihapus.</b>',
    kaki: 'Kalau ini berguna, simpan satu yang paling kamu butuhkan.' }],
  caption: `Hari terakhir rangkaian tiga puluh hari.

Semuanya masih di sana, dan tetap gratis: lima aksara, jebakan tata bahasa yang menandai penutur Indonesia, strategi empat ujian, cara menulis CV bahasa Inggris, rencana 90 hari.

Tidak ada yang dihapus, tidak ada yang dikunci belakangan.

Kalau ada satu yang paling kamu butuhkan, simpan sekarang selagi ingat.

Terima kasih sudah mengikuti sampai hari ini. 🙏`,
  tagar: t('umum') },

{ hari: 30, slot: 2, jenis: 'carousel', nama: 'penutup-tawaran',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '9',
      pita: 'Carousel · penutup',
      judul: 'Sembilan bahasa. <span class="api">Sekali bayar.</span>',
      isi: 'Kalau tiga puluh hari kemarin berguna, ini isi lengkap yang tidak muat dibagikan lewat unggahan.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Yang ada di dalam',
      judul: 'Empat bagian',
      butir: [['9.052 entri kamus','Dengan bentuk yang berubah dan tombol suara tiap bentuk.'],
              ['326 pelajaran','Berurutan, menumpuk. Kamu selalu tahu ada di mana.'],
              ['767 latihan','Tiap koreksi menjelaskan sebabnya.'],
              ['10 simulasi ujian','Format dan ambang nilainya ditiru dari ujian resmi.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Sembilan bahasa',
      judul: 'Semuanya termasuk',
      butir: [['Inggris · Jepang · Korea','Tiga yang paling banyak dicari.'],
              ['Mandarin · Arab','Dagang, dan pemahaman bacaan sendiri.'],
              ['Jerman · Prancis · Spanyol · Rusia','Kuliah, kerja, dan perjalanan Eropa.']],
      geser: 'geser →' },
    { tipe: 'banding', nomor: '4/6', netral: true,
      pita: 'Dua pilihan',
      judul: 'Pilih yang mana',
      kiri: { judul: 'Lima bahasa', isi: '<b>Rp199.000</b><br>≈ Rp40.000 per bahasa', cap: 'sekali bayar' },
      kanan: { judul: 'Sembilan bahasa', isi: '<b>Rp299.000</b><br>≈ Rp33.000 per bahasa', cap: 'sekali bayar' },
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '∞',
      pita: 'Yang membuatnya berbeda',
      judul: 'Tidak ada bagian kedua yang dijual terpisah.',
      isi: 'Tidak ada langganan bulanan, tidak ada level tambahan, tidak ada bahasa yang dikunci.<br><br><b>Berhenti setahun lalu kembali — akunmu masih ada.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Mulai',
      judul: 'sankalingogo.com',
      isi: 'Buka dari HP, pasang ke layar utama, dan mulai dari bahasa pertama yang kamu butuhkan. Sisanya menunggu kalau suatu saat diperlukan.' }],
  caption: `Penutup rangkaian tiga puluh hari.

Kalau yang kemarin-kemarin berguna, ini isi lengkapnya:

📖 9.052 entri kamus dengan bentuk yang berubah dan tombol suara
📚 326 pelajaran berurutan A1–C2
✍️ 767 latihan yang menjelaskan sebab kesalahanmu
📝 10 simulasi ujian resmi

Sembilan bahasa: Inggris, Jepang, Korea, Mandarin, Arab, Jerman, Prancis, Spanyol, Rusia.

Rp199.000 untuk lima bahasa.
Rp299.000 untuk sembilan.

Sekali bayar. Tidak ada langganan, tidak ada level tambahan, tidak ada bahasa yang dikunci belakangan.

sankalingogo.com`,
  tagar: t('jual','umum') },

{ hari: 30, slot: 3, jenis: 'tunggal', nama: 'jujur-bukan-untuk-siapa',
  gambar: [{ tipe: 'daftar',
    pita: 'Sebelum kamu beli',
    judul: 'Ini <span class="api">bukan</span> untuk semua orang.',
    butir: [['Bukan untuk yang mau fasih instan','Tidak ada yang bisa memberi itu. Ini butuh bulanan, bukan pekan.'],
            ['Bukan pengganti lawan bicara','Bicara dengan manusia tetap tidak tergantikan.'],
            ['Bukan bocoran soal ujian','Formatnya yang ditiru; soalnya ditulis sendiri.'],
            ['Bukan kelas dengan guru','Ini bahan dan sistem, bukan pendampingan.']],
    kaki: 'Kalau empat hal di atas yang kamu cari, jangan beli.' }],
  caption: `Sebelum kamu memutuskan, ini yang BUKAN kamu dapat:

❌ Fasih instan. Tidak ada yang bisa memberi itu dengan jujur. Ini butuh bulanan, bukan pekan.

❌ Pengganti lawan bicara. Bicara dengan manusia tetap tidak tergantikan oleh aplikasi mana pun.

❌ Bocoran soal ujian resmi. Yang ditiru formatnya dan cara penilaiannya — soalnya ditulis sendiri, karena soal asli berhak cipta.

❌ Kelas dengan guru. Ini bahan dan sistem, bukan pendampingan.

Kalau salah satu dari empat itu yang kamu cari, jangan beli. Saya lebih suka kamu tidak membeli daripada kecewa.

Yang kamu dapat: urutan yang menumpuk, latihan yang menjelaskan sebabnya, dan sembilan bahasa yang tidak perlu dibeli lagi.

sankalingogo.com`,
  tagar: t('jual','umum') },

{ hari: 30, slot: 4, jenis: 'tunggal', nama: 'penutup-terakhir',
  gambar: [{ tipe: 'jual',
    pita: 'Penutup',
    judul: 'Bahasa <span class="emas">membuka pintu</span> yang tidak kamu tahu ada.',
    isi: 'Pekerjaan, beasiswa, percakapan, bacaan — semuanya menunggu di balik satu keterampilan yang tidak pernah kedaluwarsa.<br><br>Rp199.000 untuk lima bahasa · Rp299.000 untuk sembilan.' }],
  caption: `Bagian paling menarik dari menguasai bahasa asing bukan yang kamu rencanakan.

Tapi yang muncul tanpa diduga.

Lowongan yang tiba-tiba terbuka karena syarat bahasanya kamu penuhi. Percakapan dengan orang yang tidak akan pernah kamu temui lewat terjemahan. Buku yang tidak pernah diterjemahkan. Tawaran yang datang karena seseorang tahu kamu bisa.

Pintu-pintu itu tidak terlihat sekarang, karena pintu yang tertutup memang tidak terlihat.

Itu sebabnya bahasa termasuk keterampilan yang paling awet nilainya: ia tidak menyelesaikan satu masalah, ia membuka satu kategori kemungkinan.

Rp199.000 untuk lima bahasa. Rp299.000 untuk sembilan. Sekali bayar, selamanya.

sankalingogo.com

Terima kasih sudah mengikuti tiga puluh hari ini. 🙏`,
  tagar: t('jual','umum') },
];
