/* ── Pekan 4 · Bahasa dan uang ────────────────────────────────────

   Tiga pekan pertama mengajar. Pekan ini menjawab pertanyaan yang
   sebenarnya ada di kepala orang: apa untungnya buat saya. Kerja
   jarak jauh, gaji, pindah negara, dan pekerjaan yang tertutup
   bukan karena kemampuan teknis, tapi karena bahasa.

   Angka di sini sengaja tidak dipatok pasti. Yang dipakai: pola
   yang bisa diperiksa sendiri pembaca di situs lowongan.          */

import { TAGAR } from './pekan1.mjs';
const t = (...k) => k.map(x => TAGAR[x]).join(' ');

export const PEKAN4 = [
/* ══ HARI 22 ═════════════════════════════════════════════════════ */
{ hari: 22, slot: 1, jenis: 'tunggal', nama: 'lowongan-tersaring',
  gambar: [{ tipe: 'hook', glif: '×',
    pita: 'Yang jarang disadari',
    judul: 'Lamaranmu ditolak <span class="api">sebelum dibaca.</span>',
    isi: 'Bukan karena pengalamanmu kurang. Karena satu baris di iklan lowongannya: <b>"English proficiency required"</b>.<br><br>Penyaringan itu terjadi di menit pertama, oleh mesin, sebelum ada manusia yang melihat namamu.',
    kaki: 'Kemampuan teknismu tidak sempat diuji.' }],
  caption: `Yang paling menyakitkan dari penolakan lamaran kerja bukan ditolak setelah wawancara.

Tapi ditolak sebelum ada manusia yang membaca namamu.

Banyak lowongan bagus menyaring otomatis dengan satu syarat: kemampuan bahasa Inggris. Sistemnya menyaring di menit pertama. Pengalaman lima tahunmu tidak sempat dilihat.

Kamu tidak akan pernah tahu ini terjadi. Tidak ada email yang bilang "kamu tersaring di syarat bahasa". Yang ada cuma sepi.

Coba buka situs lowongan sekarang, cari posisi yang kamu incar, dan hitung berapa yang mencantumkan syarat bahasa. Angkanya biasanya mengejutkan.`,
  tagar: t('karier','inggris') },

{ hari: 22, slot: 2, jenis: 'carousel', nama: 'kerja-jarak-jauh',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '🌐',
      pita: 'Carousel · kerja jarak jauh',
      judul: 'Kerja dari Indonesia, <span class="api">dibayar dari luar.</span>',
      isi: 'Ini bukan mimpi. Ini sudah biasa. Yang membatasi kebanyakan orang bukan keterampilan teknisnya — tapi kemampuan berkomunikasi dalam bahasa Inggris.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Yang benar-benar dibutuhkan',
      judul: 'Bukan bahasa Inggris sempurna',
      butir: [['Menulis jelas','Sebagian besar kerja jarak jauh terjadi lewat teks, bukan suara.'],
              ['Ikut rapat','Tidak perlu fasih. Perlu bisa menangkap dan menanggapi.'],
              ['Menjelaskan masalah','Kemampuan bilang "ini kendalanya, ini rencanaku" tanpa berputar.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Bidang yang paling terbuka',
      judul: 'Yang tidak menuntut hadir fisik',
      butir: [['Teknologi','Pemrograman, QA, dukungan teknis, analisis data.'],
              ['Desain dan konten','Desain grafis, penulisan, penyuntingan video.'],
              ['Operasional','Layanan pelanggan, asisten virtual, admin, akuntansi.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Yang menjatuhkan pelamar',
      judul: 'Tiga kesalahan bahasa',
      butir: [['Email terlalu kaku','"Dear Sir/Madam, I would like to humbly apply…" — terdengar seperti surat 1990-an.'],
              ['Terlalu banyak minta maaf','"Sorry for my bad English" di awal email menurunkan posisimu sebelum mulai.'],
              ['Tidak berani bertanya','Salah paham instruksi lebih mahal daripada terlihat tidak paham.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '=',
      pita: 'Yang berubah',
      judul: 'Bayaranmu berhenti diukur dengan standar lokal.',
      isi: 'Pekerjaan yang sama, keterampilan yang sama. Yang berbeda cuma siapa yang membayar — dan itu ditentukan oleh apakah kamu bisa berkomunikasi dengan mereka.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Bahasa kerjanya',
      judul: 'Bahasa Inggris kerja, bukan Inggris sekolah.',
      isi: '326 pelajaran CEFR A1–C2 plus TOEIC — ujian yang paling banyak dipakai perusahaan untuk mengukur bahasa Inggris kerja.' }],
  caption: `Kerja dari rumah di Indonesia, dibayar perusahaan luar negeri, dalam mata uang mereka. Ini sudah biasa — bukan mimpi.

Yang membatasi kebanyakan orang bukan keterampilan teknisnya. Tapi komunikasi.

Slide 2: yang dibutuhkan BUKAN bahasa Inggris sempurna. Sebagian besar kerja jarak jauh terjadi lewat teks. Menulis jelas jauh lebih penting daripada logat.

Slide 4, kesalahan yang paling sering menjatuhkan: menulis "Sorry for my bad English" di awal email. Kamu menurunkan posisimu sendiri sebelum mulai.

Slide 5 yang paling penting untuk direnungkan.

Kamu di bidang apa? 👇`,
  tagar: t('karier','inggris') },

{ hari: 22, slot: 3, jenis: 'tunggal', nama: 'koreksi-sorry-english',
  gambar: [{ tipe: 'koreksi',
    pita: 'Email kerja',
    judul: 'Kalimat yang <span class="api">menurunkan</span> posisimu.',
    salah: 'Sorry for my bad English.', benar: '(hapus saja, langsung ke isi)',
    sebab: 'Kalimat ini memberi tahu pembaca untuk <b>mulai meragukanmu</b> sebelum ia membaca isinya. Kalau bahasa Inggrismu memang bisa dipahami, permintaan maaf itu tidak perlu. Kalau tidak bisa dipahami, permintaan maaf juga tidak menolong.',
    kaki: 'Penutur asli tidak minta maaf atas grammar mereka. Kamu juga tidak perlu.' }],
  caption: `"Sorry for my bad English."

Hapus kalimat ini dari semua emailmu.

Alasannya sederhana: kalimat itu memberi tahu pembaca untuk mulai meragukanmu sebelum ia sampai ke isi.

Kalau bahasa Inggrismu bisa dipahami — dan biasanya bisa — permintaan maaf itu tidak perlu.
Kalau tidak bisa dipahami, permintaan maaf juga tidak menolong.

Yang menariknya: penutur asli membuat kesalahan grammar setiap hari dan tidak pernah minta maaf untuk itu.

Langsung ke isi. Kejelasan yang dinilai orang, bukan kesempurnaan.`,
  tagar: t('karier','inggris') },

{ hari: 22, slot: 4, jenis: 'tunggal', nama: 'jual-satu-kali',
  gambar: [{ tipe: 'banding',
    pita: 'Hitungan',
    judul: 'Sekali bayar, <span class="emas">bukan langganan.</span>',
    kiri: { judul: 'Langganan bulanan', isi: 'Berhenti bayar, akses hilang. Setahun berhenti, <b>mulai lagi dari nol biaya</b>.', cap: 'terus berjalan' },
    kanan: { judul: 'SankaLingo GO', isi: 'Rp199.000 sekali. <b>Berhenti setahun, kembali kapan saja</b> — akunnya masih ada.', cap: 'selesai' },
    kaki: 'Belajar bahasa itu berhenti dan mulai lagi. Harganya sebaiknya mengikuti.' }],
  caption: `Belajar bahasa itu tidak pernah lurus. Ada bulan yang rajin, ada bulan yang hilang sama sekali.

Yang bikin langganan bulanan tidak cocok untuk ini: kamu tetap membayar di bulan-bulan yang hilang, atau kamu berhenti berlangganan lalu kehilangan segalanya.

SankaLingo GO dibayar sekali. Berhenti tiga bulan, kembali — akunmu masih di sana, riwayat belajarmu masih di sana.

Rp199.000 untuk lima bahasa. Rp299.000 untuk sembilan.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 23 ═════════════════════════════════════════════════════ */
{ hari: 23, slot: 1, jenis: 'tunggal', nama: 'jepang-kerja',
  gambar: [{ tipe: 'daftar',
    pita: 'Kerja di Jepang',
    judul: 'Yang <span class="emas">benar-benar</span> ditanya perusahaan Jepang.',
    butir: [['JLPT N2','Ambang paling umum. N3 kadang cukup untuk bidang teknis.'],
            ['Keigo dasar','Bahasa sopan kerja. Tidak diuji JLPT, tapi dipakai tiap hari.'],
            ['Bisa membaca email','Bagian yang paling banyak menyita waktu kerja harian.'],
            ['Bicara di rapat','Ironisnya, ini yang paling tidak dilatih JLPT.']],
    kaki: 'Lulus N2 tidak otomatis siap kerja. Bagian bicaranya harus dilatih terpisah.' }],
  caption: `Kalau targetmu kerja di Jepang, JLPT N2 cuma tiket masuk — bukan kesiapan.

Yang ditanya perusahaan:
— JLPT N2 (kadang N3 cukup untuk bidang teknis)
— Keigo dasar, bahasa sopan kerja
— Bisa membaca email dan dokumen internal
— Bisa bicara di rapat

Yang ironis: JLPT tidak menguji bicara sama sekali. Kamu bisa lulus N2 tanpa pernah mengucapkan satu kalimat Jepang.

Jadi kalau persiapanmu cuma soal-soal JLPT, kamu akan lulus ujian dan tetap gugup di hari pertama kerja.

Latih bicaranya terpisah. Sejak sekarang, bukan setelah lulus.`,
  tagar: '#kerjadijepang #jlpt ' + TAGAR.jepang },

{ hari: 23, slot: 2, jenis: 'carousel', nama: 'negara-tujuan',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '✈',
      pita: 'Carousel · pindah negara',
      judul: 'Bahasa mana yang <span class="api">membuka pintu mana.</span>',
      isi: 'Kalau tujuanmu bekerja atau menetap di luar negeri, pilihan bahasamu sebaiknya mengikuti tujuannya — bukan mengikuti mana yang paling menarik.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Jepang',
      judul: 'Yang perlu disiapkan',
      butir: [['JLPT N2','Ambang kerja paling umum di perusahaan Jepang.'],
              ['Kebutuhan tenaga tinggi','Terutama perawatan, konstruksi, manufaktur, dan teknologi.'],
              ['Kejutan terbesar','Budaya kerjanya, bukan bahasanya. Siapkan keduanya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Korea',
      judul: 'Jalur yang jelas',
      butir: [['TOPIK','Level tertentu jadi syarat banyak visa kerja dan beasiswa.'],
              ['Program pemerintah','Ada jalur resmi penempatan kerja yang menuntut sertifikat bahasa.'],
              ['Hangeul cepat','Aksaranya bisa seminggu. Yang lama tata bahasa dan kesopanannya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Jerman',
      judul: 'Paling terbuka untuk tenaga terampil',
      butir: [['B1–B2','Sebagian besar jalur kerja dan studi menuntut sertifikat Jerman.'],
              ['Kuliah bisa gratis','Banyak universitas negeri tanpa biaya kuliah, termasuk untuk asing.'],
              ['Kebutuhan perawat & teknik','Dua bidang dengan jalur paling terbuka bertahun-tahun terakhir.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Timur Tengah',
      judul: 'Arab: nilai yang berbeda',
      butir: [['Kerja sering pakai Inggris','Tapi yang bisa Arab naik lebih cepat, karena masuk ke lingkaran dalam.'],
              ['Nilai keagamaan','Bagi banyak orang Indonesia, ini alasan utamanya — dan itu alasan yang sah.'],
              ['Aksara dulu','Membaca kanan-ke-kiri butuh dua minggu sampai otomatis.']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Semuanya ada',
      judul: 'Sembilan bahasa, satu aplikasi.',
      isi: 'Inggris, Jepang, Korea, Mandarin, Arab, Jerman, Prancis, Spanyol, Rusia — beserta ujian resmi masing-masing. Rp299.000 sekali bayar.' }],
  caption: `Kalau tujuanmu bekerja atau menetap di luar negeri, pilih bahasanya berdasarkan tujuan — bukan berdasarkan mana yang terdengar paling keren.

🇯🇵 Jepang — JLPT N2. Kebutuhan tenaga tinggi di perawatan, konstruksi, manufaktur.
🇰🇷 Korea — TOPIK, dengan jalur penempatan kerja resmi.
🇩🇪 Jerman — B1/B2. Kuliah negeri banyak yang tanpa biaya, termasuk untuk asing.
🇸🇦 Arab — kerja sering pakai Inggris, tapi yang bisa Arab naik lebih cepat.

Slide 2 hal yang paling sering mengejutkan orang yang berangkat ke Jepang: bukan bahasanya, tapi budaya kerjanya.

Tujuanmu ke mana? 👇`,
  tagar: '#kerjadiluarnegeri #jlpt #topik ' + TAGAR.karier },

{ hari: 23, slot: 3, jenis: 'tunggal', nama: 'relate-umur',
  gambar: [{ tipe: 'hook', glif: '?',
    pita: 'Pertanyaan yang sering masuk',
    judul: '"Umur 35, <span class="api">masih sempat?"</span>',
    isi: 'Anak-anak unggul di logat. Orang dewasa unggul di hampir semua hal lain: memahami pola, menghubungkan dengan bahasa yang sudah dikuasai, dan belajar dengan sengaja.<br><br><b>Yang hilang seiring umur bukan kemampuan. Waktu luangnya.</b>',
    kaki: 'Dan itu masalah jadwal, bukan masalah otak.' }],
  caption: `"Umur 35, masih sempat belajar bahasa baru?"

Pertanyaan ini masuk hampir tiap minggu, dan jawabannya selalu sama: iya, dan mungkin lebih cepat daripada dugaanmu.

Anak-anak memang unggul di satu hal: logat. Mereka menyerap bunyi tanpa usaha.

Tapi orang dewasa unggul di hampir semua hal lain — memahami pola tata bahasa, menghubungkan dengan bahasa yang sudah dikuasai, dan yang paling penting: belajar dengan sengaja, bukan menunggu terpapar.

Yang benar-benar hilang seiring umur bukan kemampuan otak. Tapi waktu luang.

Dan itu masalah jadwal, bukan masalah bakat. 30 menit sehari bisa dicari.`,
  tagar: t('umum') },

{ hari: 23, slot: 4, jenis: 'tunggal', nama: 'jual-9-bahasa',
  gambar: [{ tipe: 'jual',
    pita: 'Paket lengkap',
    judul: 'Sembilan bahasa <span class="emas">Rp299.000.</span>',
    isi: 'Inggris · Jepang · Korea · Mandarin · Arab · Jerman · Prancis · Spanyol · Rusia. Sekali bayar, tanpa perpanjangan, tanpa bahasa yang dijual terpisah.' }],
  caption: `Sembilan bahasa, satu kali bayar Rp299.000:

🇬🇧 Inggris — 44 unit CEFR A1–C2
🇯🇵 Jepang — hiragana, katakana, kanji
🇰🇷 Korea — hangeul dan tiga tingkat kesopanan
🇨🇳 Mandarin — pinyin, nada, karakter
🇸🇦 Arab — aksara kanan-ke-kiri, bentuk kata kerja
🇩🇪 Jerman — tiga gender, empat kasus
🇫🇷 Prancis — bunyi yang tidak ada di bahasa kita
🇪🇸 Spanyol — paling ramah untuk penutur Indonesia
🇷🇺 Rusia — Kiril dan enam kasus

Total 9.052 entri kamus, 326+ pelajaran, dan sepuluh simulasi ujian resmi.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 24 ═════════════════════════════════════════════════════ */
{ hari: 24, slot: 1, jenis: 'tunggal', nama: 'wawancara-inggris',
  gambar: [{ tipe: 'daftar',
    pita: 'Wawancara kerja',
    judul: 'Empat pertanyaan yang <span class="emas">selalu</span> muncul.',
    butir: [['Tell me about yourself','Bukan riwayat hidup. Tiga kalimat: siapa, apa yang kamu kerjakan, kenapa di sini.'],
            ['Why do you want this role?','Sebutkan sesuatu yang khusus tentang mereka, bukan tentang dirimu.'],
            ['What\'s your weakness?','Sebut yang nyata, lalu ceritakan apa yang kamu lakukan atasnya.'],
            ['Do you have questions?','Jangan jawab "no". Ini bagian yang paling dinilai.']],
    kaki: 'Latih empatnya keras-keras. Membaca dalam hati tidak sama.' }],
  caption: `Empat pertanyaan yang hampir pasti muncul di wawancara bahasa Inggris. Siapkan jawabannya, hafalkan bentuknya, jangan hafalkan kalimatnya.

"Tell me about yourself" — ini bukan permintaan riwayat hidup. Tiga kalimat: siapa kamu, apa yang kamu kerjakan sekarang, kenapa kamu di ruangan ini.

"Why do you want this role?" — sebut sesuatu yang khusus tentang perusahaannya. Jawaban tentang dirimu sendiri terdengar seperti kamu melamar ke mana saja.

"What's your weakness?" — sebut kelemahan nyata, lalu ceritakan apa yang sedang kamu lakukan atasnya. Jawaban "saya terlalu perfeksionis" sudah tidak mempan sejak lama.

"Do you have any questions?" — JANGAN jawab "no". Ini bagian yang paling menunjukkan seberapa serius kamu.

Latih keras-keras. Membaca dalam hati tidak sama.`,
  tagar: t('karier','inggris') },

{ hari: 24, slot: 2, jenis: 'carousel', nama: 'cv-inggris',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'CV',
      pita: 'Carousel · CV bahasa Inggris',
      judul: 'CV-mu <span class="api">diterjemahkan, bukan ditulis.</span>',
      isi: 'Dan itu terlihat dalam tiga detik. Bukan dari grammar-nya — dari bentuk kalimatnya.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '2/6',
      pita: 'Kesalahan 1',
      judul: 'Kalimat pasif',
      salah: 'Was responsible for handling customer complaints.', benar: 'Resolved 40+ customer complaints monthly.',
      sebab: 'CV bahasa Inggris memakai <b>kata kerja aktif di awal</b> dan angka kalau ada. "Responsible for" menggambarkan tugas; kata kerja aktif menggambarkan hasil.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '3/6',
      pita: 'Kesalahan 2',
      judul: 'Data pribadi berlebihan',
      salah: 'Umur, agama, status nikah, foto', benar: '(hapus semua)',
      sebab: 'Di Indonesia ini biasa. Di banyak negara lain, mencantumkannya justru membuat CV-mu <b>sulit diproses</b> — sebagian perusahaan diwajibkan membuang lamaran yang memuat data itu.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '4/6',
      pita: 'Kesalahan 3',
      judul: 'Waktu kerja yang salah',
      salah: 'Currently I <b>am work</b> at… / I <b>working</b> at…', benar: 'Currently working at… / I work at…',
      sebab: 'Dua bentuk bercampur. Bahasa Indonesia tidak menandai waktu lewat kata kerja, jadi penutur Indonesia sering menempelkan dua penanda sekaligus.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Kata kerja pembuka yang kuat',
      judul: 'Pakai ini di awal butir',
      butir: [['Built · Led · Reduced','Untuk hasil yang bisa diukur.'],
              ['Designed · Launched · Improved','Untuk hal yang kamu mulai atau ubah.'],
              ['Hindari: Helped, Assisted','Terdengar seperti kamu bukan pelaku utamanya.']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Bahasa kerjanya',
      judul: 'Inggris yang dipakai melamar, bukan yang diajarkan sekolah.',
      isi: '1.364 kosakata Inggris berurutan CEFR, plus TOEIC — ujian yang paling banyak dipakai perusahaan.' }],
  caption: `CV bahasa Inggris yang diterjemahkan dari CV Indonesia ketahuan dalam tiga detik. Bukan dari grammar — dari bentuk kalimatnya.

Slide 2: ganti "was responsible for handling complaints" jadi "resolved 40+ complaints monthly". Kata kerja aktif, dengan angka.

Slide 3 yang paling banyak bikin kaget: hapus umur, agama, status nikah, dan foto. Di Indonesia itu biasa. Di banyak negara lain, mencantumkannya justru membuat lamaranmu sulit diproses.

Slide 5: berhenti memakai "helped" dan "assisted". Kamu terdengar seperti bukan pelaku utamanya.

Simpan sebelum kirim lamaran berikutnya. 📌`,
  tagar: t('karier','inggris') },

{ hari: 24, slot: 3, jenis: 'tunggal', nama: 'relate-grammar-lumpuh',
  gambar: [{ tipe: 'hook', glif: '🔒',
    pita: 'Yang menghambat paling banyak orang',
    judul: 'Takut salah <span class="api">lebih merugikan</span> daripada salah.',
    isi: 'Orang yang bicara dengan sepuluh kesalahan tiap hari akan mengalahkan orang yang menunggu sempurna sebelum membuka mulut.<br><br><b>Kesalahan bisa diperbaiki. Diam tidak menghasilkan apa pun untuk diperbaiki.</b>',
    kaki: 'Penutur asli pun salah tiap hari. Mereka cuma tidak berhenti.' }],
  caption: `Hal yang paling menghambat orang Indonesia belajar bahasa asing bukan kurang kosakata.

Takut salah.

Kita dibesarkan di sekolah yang menghukum jawaban salah, jadi kita belajar untuk diam sampai yakin benar. Itu strategi bagus untuk ujian, dan strategi buruk untuk bahasa.

Orang yang bicara dengan sepuluh kesalahan tiap hari akan mengalahkan orang yang menunggu sempurna sebelum membuka mulut. Selalu.

Kesalahan bisa diperbaiki. Diam tidak menghasilkan apa pun untuk diperbaiki.

Dan penutur asli pun salah tiap hari. Mereka cuma tidak berhenti bicara karenanya.

Kamu pernah menahan diri karena takut salah? 👇`,
  tagar: t('umum','inggris') },

{ hari: 24, slot: 4, jenis: 'tunggal', nama: 'jual-latihan-jelaskan',
  gambar: [{ tipe: 'jual',
    pita: 'Yang membedakan',
    judul: 'Tiap latihan <span class="emas">menjelaskan kenapa</span> kamu salah.',
    isi: 'Bukan sekadar benar atau salah. Tiap koreksi menunjukkan kebiasaan berbahasa Indonesia mana yang menyeretmu — karena kesalahan yang dipahami tidak terulang.' }],
  caption: `Kebanyakan aplikasi bahasa cuma bilang "salah" lalu memberi jawaban yang benar.

Masalahnya, kamu akan mengulangi kesalahan yang sama minggu depan — karena kamu tidak tahu kenapa otakmu memilih jawaban itu.

767 latihan di SankaLingo GO menjelaskan sebabnya. Dan sebabnya hampir selalu sama: kebiasaan bahasa Indonesia yang terbawa.

Kita tidak punya bentuk lampau, jadi kita lupa memakainya.
Kita tidak punya gender kata benda, jadi Jerman terasa sewenang-wenang.
Kita menaruh keterangan waktu di depan, jadi urutan kalimat kita janggal.

Kesalahan yang dipahami sebabnya tidak terulang. Itu bedanya.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 25 ═════════════════════════════════════════════════════ */
{ hari: 25, slot: 1, jenis: 'tunggal', nama: 'jerman-perawat',
  gambar: [{ tipe: 'daftar',
    pita: 'Jerman',
    judul: 'Kenapa <span class="emas">Jerman</span> masuk daftar.',
    butir: [['Kuliah negeri banyak yang gratis','Termasuk untuk mahasiswa asing, di banyak negara bagian.'],
            ['Kebutuhan tenaga terampil','Perawatan dan teknik jadi dua bidang paling terbuka.'],
            ['Syaratnya jelas','B1 atau B2 — bukan tebak-tebakan, ada ujian resminya.'],
            ['Tidak sesulit rumornya','Tata bahasanya berat di awal, tapi sangat teratur setelah itu.']],
    kaki: 'Yang berat: tiga gender dan empat kasus. Yang ringan: hampir tidak ada kejutan bunyi.' }],
  caption: `Jerman jarang jadi pilihan pertama orang Indonesia, padahal jalurnya termasuk yang paling jelas.

Kuliah di universitas negeri banyak yang tanpa biaya kuliah — termasuk untuk mahasiswa asing, di banyak negara bagian.

Kebutuhan tenaga terampil tinggi, terutama di perawatan dan teknik.

Syaratnya jelas: sertifikat B1 atau B2. Bukan tebak-tebakan.

Soal sulitnya: tata bahasa Jerman berat di awal — tiga gender kata benda dan empat kasus. Tapi setelah pola itu masuk, bahasa ini sangat teratur. Hampir tidak ada kejutan cara baca; ditulis begitu, dibaca begitu.

Kebalikan dari bahasa Inggris.`,
  tagar: '#bahasajerman #daad #kuliahdiluarnegeri ' + TAGAR.karier },

{ hari: 25, slot: 2, jenis: 'carousel', nama: 'bahasa-eropa',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'ñ',
      pita: 'Carousel · bahasa Eropa',
      judul: 'Mana yang <span class="api">paling mudah</span> untuk kita?',
      isi: 'Jawabannya bukan bahasa Inggris. Dan bukan karena bahasa Inggris sulit — karena ada yang jauh lebih ramah untuk telinga Indonesia.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Spanyol',
      judul: 'Paling ramah',
      butir: [['Dibaca seperti ditulis','Hampir sepenuhnya. Ini keunggulan besar untuk penutur Indonesia.'],
              ['Bunyinya akrab','Vokalnya lima, sama seperti bahasa kita.'],
              ['Yang sulit','Kata kerjanya berubah menurut pelaku. Itu saja rintangan utamanya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Prancis',
      judul: 'Tulisan mudah, bunyi sulit',
      butir: [['Banyak huruf tak dibunyikan','beaucoup dibaca "boku". Ini yang bikin frustrasi di awal.'],
              ['Bunyi hidung','Tidak ada padanannya di bahasa Indonesia. Butuh latihan telinga.'],
              ['Kosakatanya akrab','Banyak kata yang sudah masuk ke bahasa Indonesia lewat Belanda.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Jerman',
      judul: 'Berat di awal, teratur setelahnya',
      butir: [['Tiga gender','der, die, das — dan tidak bisa ditebak dari bentuk katanya.'],
              ['Empat kasus','Bentuk kata berubah menurut perannya di kalimat.'],
              ['Bacaannya konsisten','Sekali tahu aturannya, kamu bisa membaca kata apa pun.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Rusia',
      judul: 'Paling menakutkan, tidak paling sulit',
      butir: [['Kiril seminggu','Aksaranya terlihat asing tapi cepat dikuasai — 33 huruf.'],
              ['Enam kasus','Ini yang berat, bukan aksaranya.'],
              ['Tidak ada "adalah"','"Saya guru" cukup dua kata. Mirip bahasa Indonesia.']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Empat-empatnya ada',
      judul: 'Jerman, Prancis, Spanyol, Rusia.',
      isi: 'Lengkap dengan ujian resminya — Goethe, DELF, DELE, TORFL. Termasuk dalam paket sembilan bahasa Rp299.000.' }],
  caption: `Bahasa Eropa mana yang paling mudah untuk penutur Indonesia? Jawabannya bukan bahasa Inggris.

🇪🇸 Spanyol — paling ramah. Dibaca hampir persis seperti ditulis, dan vokalnya lima seperti bahasa kita.

🇫🇷 Prancis — tulisannya mudah, bunyinya sulit. beaucoup dibaca "boku". Butuh latihan telinga.

🇩🇪 Jerman — berat di awal (tiga gender, empat kasus), tapi sangat teratur setelahnya.

🇷🇺 Rusia — terlihat paling menakutkan karena aksaranya, padahal Kiril cuma butuh seminggu. Yang berat kasusnya.

Slide 5 fakta menarik: bahasa Rusia tidak punya kata "adalah". "Saya guru" cukup dua kata — persis seperti bahasa Indonesia.

Mau mulai yang mana? 👇`,
  tagar: '#bahasaspanyol #bahasaprancis #bahasajerman ' + TAGAR.umum },

{ hari: 25, slot: 3, jenis: 'tunggal', nama: 'koreksi-jerman-gender',
  gambar: [{ tipe: 'koreksi',
    pita: 'Jerman',
    judul: 'Gender <span class="api">tidak bisa ditebak.</span>',
    salah: 'das Mädchen = "gadis" harusnya die (perempuan)', benar: 'das Mädchen — netral, dan itu benar',
    sebab: 'Gender kata benda Jerman <b>bukan soal jenis kelamin</b>, tapi soal bentuk kata. Akhiran <i>-chen</i> selalu netral, apa pun artinya. Penutur Indonesia sering mencoba menebak dari maknanya — dan hampir selalu salah.',
    kaki: 'Hafalkan kata benda bersama artikelnya sejak hari pertama, bukan belakangan.' }],
  caption: `Kata "gadis" dalam bahasa Jerman — das Mädchen — bergender netral, bukan perempuan.

Ini bikin bingung semua pemula, dan penyebabnya salah paham yang mendasar: gender kata benda Jerman bukan soal jenis kelamin. Itu soal bentuk kata.

Akhiran -chen selalu netral. Apa pun artinya.

Kesalahan yang paling merugikan pemula: mencoba menebak gender dari makna. Meja kenapa maskulin? Matahari kenapa feminin? Tidak ada logikanya untuk ditebak.

Cara yang benar: hafalkan kata bendanya BERSAMA artikelnya, sejak hari pertama. Bukan "Tisch = meja", tapi "der Tisch = meja".

Memperbaiki ini belakangan jauh lebih sulit daripada memulainya benar.`,
  tagar: '#bahasajerman #deutsch ' + TAGAR.umum },

{ hari: 25, slot: 4, jenis: 'tunggal', nama: 'jual-kamus',
  gambar: [{ tipe: 'jual',
    pita: 'Kamus',
    judul: '<span class="emas">9.052 entri</span> — dengan bentuk yang berubah.',
    isi: 'Bukan cuma arti. Tiap entri memuat bentuk yang tidak bisa ditebak: jamak Jerman, kata kerja tak beraturan Prancis, bentuk て Jepang, jamak pecah Arab.' }],
  caption: `Kamus biasa memberi arti. Itu bagian yang paling mudah.

Yang benar-benar menghambat pemelajar: bentuk yang berubah, dan tidak bisa ditebak.

— Jamak Jerman: Buch → Bücher (bukan Buchs)
— Kata kerja Prancis: aller → je vais (sama sekali beda)
— Bentuk て Jepang: 行く → 行って (bukan 行きて)
— Jamak pecah Arab: كتاب → كتب (seluruh bentuknya berubah)

9.052 entri di SankaLingo GO memuat bentuk-bentuk ini, masing-masing dengan tombol suaranya sendiri. Sekitar seribu kata per bahasa, dipilih yang paling sering dipakai.

Rp299.000 untuk sembilan bahasa. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 26 ═════════════════════════════════════════════════════ */
{ hari: 26, slot: 1, jenis: 'tunggal', nama: 'mandarin-dagang',
  gambar: [{ tipe: 'daftar',
    pita: 'Mandarin',
    judul: 'Bahasa <span class="emas">pemasok</span> kamu.',
    butir: [['Sebagian besar impor dari Tiongkok','Kalau kamu berdagang, lawan bicaramu ada di sana.'],
            ['Nego langsung lebih murah','Perantara mengambil selisih yang bisa jadi milikmu.'],
            ['Tata bahasanya paling sederhana','Tidak ada tenses, tidak ada perubahan bentuk kata.'],
            ['Yang berat: karakter dan nada','Dua ini saja. Sisanya lebih ringan dari bahasa Eropa mana pun.']],
    kaki: 'Untuk pedagang, Mandarin sering lebih berdampak langsung daripada Inggris.' }],
  caption: `Kalau kamu berdagang barang impor, Mandarin mungkin lebih berdampak langsung daripada bahasa Inggris.

Alasannya sederhana: sebagian besar pemasokmu ada di Tiongkok, dan nego lewat perantara selalu ada selisihnya.

Kabar baiknya, tata bahasa Mandarin termasuk yang paling sederhana di dunia:
— Tidak ada tenses
— Tidak ada perubahan bentuk kata kerja
— Tidak ada gender kata benda
— Tidak ada bentuk jamak

我吃 (wǒ chī) = saya makan. Kemarin, sekarang, besok — kata kerjanya tetap sama persis. Waktu ditunjukkan dengan kata keterangan, persis seperti bahasa Indonesia.

Yang berat cuma dua: karakter dan nada.

Dua rintangan, tapi keduanya bisa dilatih.`,
  tagar: '#bahasamandarin #hsk #bisnis ' + TAGAR.karier },

{ hari: 26, slot: 2, jenis: 'carousel', nama: 'mandarin-nada',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '妈',
      pita: 'Carousel · Mandarin',
      judul: 'Satu bunyi, <span class="api">empat arti.</span>',
      isi: 'mā, má, mǎ, mà — ibu, rami, kuda, memarahi. Bagian bahasa Mandarin yang paling ditakuti, dan paling salah dipahami.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Empat nada',
      judul: 'Kenali bentuknya',
      butir: [['mā — datar tinggi','Seperti menahan satu nada. 妈 = ibu'],
              ['má — naik','Seperti bertanya "hah?" 麻 = rami'],
              ['mǎ — turun lalu naik','Seperti ragu-ragu. 马 = kuda'],
              ['mà — turun tajam','Seperti membentak. 骂 = memarahi']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '3/6', glif: '!',
      pita: 'Yang menenangkan',
      judul: 'Kamu sudah memakai nada tiap hari.',
      isi: '"Apa?" datar = pertanyaan biasa. "Apa?!" naik = kaget. "Apaa…" turun = kecewa.<br><br><b>Bedanya cuma satu: di Mandarin, nada mengubah kata — bukan mengubah perasaan.</b>',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Cara melatihnya',
      judul: 'Tiga yang benar-benar bekerja',
      butir: [['Latih berpasangan','mā/má berdampingan, sampai telingamu bisa memisahkan.'],
              ['Rekam dirimu','Kamu akan kaget mendengar nada yang kamu kira sudah benar.'],
              ['Jangan hafal kata tanpa nada','Nadanya bagian dari katanya, bukan hiasan.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Karakter',
      judul: 'Kabar baik yang jarang disebut',
      butir: [['Berulang','Karakter tersusun dari komponen. Kenali komponennya, tebakanmu makin tajam.'],
              ['HSK 1–3 cukup ±600','Bukan puluhan ribu. Itu untuk sastra klasik.'],
              ['Petunjuk bunyi','Banyak karakter memuat bagian yang memberi tahu bunyinya.']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Latihannya',
      judul: 'Nada dengan tombol suara di tiap kata.',
      isi: 'Kamus Mandarin 1.002 entri dengan pinyin, nada, dan bunyinya — karena membaca "mā" tidak pernah cukup untuk tahu bunyinya.' }],
  caption: `mā, má, mǎ, mà — ibu, rami, kuda, memarahi. Satu bunyi, empat arti.

Ini bagian bahasa Mandarin yang paling ditakuti, dan paling salah dipahami.

Slide 3 yang menenangkan: kamu sudah memakai nada tiap hari.
"Apa?" datar = pertanyaan.
"Apa?!" naik = kaget.
"Apaa…" turun = kecewa.

Bedanya cuma satu: di Mandarin, nada mengubah KATA-nya, bukan perasaannya.

Slide 5 kabar baik soal karakter: HSK 1–3 cuma butuh sekitar 600 karakter. Bukan puluhan ribu — itu untuk sastra klasik.

Simpan buat latihan. 🇨🇳`,
  tagar: '#bahasamandarin #hsk #pinyin ' + TAGAR.umum },

{ hari: 26, slot: 3, jenis: 'tunggal', nama: 'relate-nunggu-sempat',
  gambar: [{ tipe: 'hook', glif: '⏳',
    pita: 'Yang perlu didengar',
    judul: '"Nanti kalau <span class="api">sudah longgar."</span>',
    isi: 'Waktu longgar itu tidak pernah datang sendiri — ia harus diambil. Dan yang diambil biasanya bukan satu jam, tapi tiga puluh menit yang selama ini habis untuk menggulir layar.<br><br><b>Setahun dari sekarang, kamu akan berharap mulai hari ini.</b>',
    kaki: 'Bukan menunggu waktu. Memilih 30 menit yang mana.' }],
  caption: `"Nanti kalau sudah longgar, saya mulai belajar."

Waktu longgar tidak pernah datang sendiri. Ia harus diambil dari sesuatu.

Dan biasanya yang diambil bukan satu jam yang tidak kamu punya — tapi tiga puluh menit yang selama ini habis menggulir layar tanpa ingat isinya.

Bukan menghakimi. Semua orang begitu, termasuk saya.

Yang mau saya bilang cuma ini: setahun dari sekarang, kamu akan berada di salah satu dari dua tempat. Sudah punya kemampuan bahasa yang baru, atau persis di tempat yang sama sambil bilang kalimat yang sama.

Bedanya bukan waktu luang. Tapi 30 menit yang mana yang kamu pilih.`,
  tagar: t('umum') },

{ hari: 26, slot: 4, jenis: 'tunggal', nama: 'jual-tanpa-internet',
  gambar: [{ tipe: 'jual',
    pita: 'Praktis',
    judul: 'Jalan di <span class="emas">HP mana saja.</span>',
    isi: 'Bukan aplikasi yang harus diunduh dari toko. Buka lewat peramban, pasang ke layar utama, dan pelajarannya tetap terbuka meski sinyal hilang.' }],
  caption: `Tidak perlu unduh dari Play Store atau App Store.

SankaLingo GO dibuka lewat peramban, lalu bisa dipasang ke layar utama HP seperti aplikasi biasa. Setelah itu:

— Jalan di Android, iPhone, dan komputer dengan akun yang sama
— Tidak memakan ruang penyimpanan besar
— Pelajaran yang sudah dibuka tetap bisa dibaca meski sinyal hilang
— Tidak ada pembaruan yang harus diunduh

Buka sankalingogo.com dari HP-mu, dan pilih "Tambahkan ke Layar Utama".

Rp199.000 sekali bayar.`,
  tagar: t('jual','umum') },

/* ══ HARI 27 ═════════════════════════════════════════════════════ */
{ hari: 27, slot: 1, jenis: 'tunggal', nama: 'arab-alasan',
  gambar: [{ tipe: 'daftar',
    pita: 'Arab',
    judul: 'Tiga alasan orang Indonesia <span class="emas">belajar Arab.</span>',
    butir: [['Memahami bacaan sendiri','Membaca dan memahami itu dua hal berbeda.'],
            ['Kerja di Timur Tengah','Kerja sering pakai Inggris, tapi yang bisa Arab naik lebih cepat.'],
            ['Kuliah keagamaan','Sebagian besar rujukan aslinya tidak diterjemahkan.']],
    kaki: 'Aksaranya butuh dua minggu sampai otomatis. Setelah itu jalannya jauh lebih ringan.' }],
  caption: `Tiga alasan orang Indonesia belajar bahasa Arab — dan ketiganya sah:

1. Memahami bacaan sendiri. Banyak orang bisa membaca huruf Arab sejak kecil tapi tidak tahu artinya. Membaca dan memahami itu dua kemampuan berbeda.

2. Kerja di Timur Tengah. Pekerjaannya sering memakai bahasa Inggris, tapi yang bisa Arab naik lebih cepat — karena masuk ke lingkaran percakapan yang tidak diterjemahkan.

3. Kuliah keagamaan. Sebagian besar rujukan aslinya tidak pernah diterjemahkan lengkap.

Soal sulitnya: aksara Arab butuh sekitar dua minggu sampai otomatis, karena bentuk hurufnya berubah menurut posisinya dalam kata.

Setelah itu, jalannya jauh lebih ringan daripada dugaan orang.`,
  tagar: t('arab','umum') },

{ hari: 27, slot: 2, jenis: 'carousel', nama: 'arab-aksara',
  gambar: [
    { tipe: 'aksara', nomor: '1/6',
      pita: 'Carousel · aksara Arab',
      judul: 'Satu huruf, <span class="api">empat bentuk.</span>',
      huruf: [['ع','di awal'],['ـعـ','di tengah'],['ـع','di akhir'],['ع','sendiri']],
      kaki: 'Ini yang membuat Arab terasa sulit di awal — dan berhenti sulit setelah dua minggu.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '2/6', glif: '←',
      pita: 'Yang pertama harus dibiasakan',
      judul: 'Dibaca dari kanan.',
      isi: 'Termasuk angka halamannya, arah membuka bukunya, dan urutan kolom dalam tabel.<br><br><b>Butuh beberapa hari sampai matamu berhenti melompat ke kiri.</b>',
      geser: 'geser →' },
    { tipe: 'aksara', nomor: '3/6',
      pita: 'Mulai dari sini',
      judul: 'Lima huruf pertama',
      huruf: [['ا','alif'],['ب','ba'],['ت','ta'],['م','mim'],['ل','lam']],
      kaki: 'Lima ini muncul di hampir semua kata. Kuasai dulu, sisanya menyusul lebih cepat.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Yang mengejutkan',
      judul: 'Tiga hal',
      butir: [['Vokal sering tidak ditulis','Teks sehari-hari tanpa harakat. Pembacanya menebak dari konteks.'],
              ['Akar tiga huruf','ك-ت-ب melahirkan kitab, katib, maktab. Satu akar, keluarga kata.'],
              ['Jamak "pecah"','كتاب → كتب. Bentuknya berubah di dalam, bukan ditambah di belakang.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '3',
      pita: 'Kunci belajar Arab',
      judul: 'Akar tiga huruf mengubah segalanya.',
      isi: 'Begitu kamu mengenali akar, kamu berhenti menghafal kata satu per satu dan mulai <b>mengenali keluarga kata</b>.<br><br>Satu akar bisa membuka sepuluh kata sekaligus.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Selengkapnya',
      judul: 'Kamus Arab dengan jamak dan bentuk kata kerjanya.',
      isi: '1.002 entri Arab lengkap dengan bentuk jamak pecah dan perubahan kata kerja — masing-masing dengan tombol suaranya.' }],
  caption: `Aksara Arab terlihat sulit karena satu alasan: satu huruf punya empat bentuk, tergantung posisinya dalam kata.

Slide 1 contohnya dengan huruf ع.

Slide 3: mulai dari lima huruf yang muncul di hampir semua kata — ا ب ت م ل. Kuasai lima ini dulu, sisanya menyusul jauh lebih cepat.

Slide 5 kunci yang mengubah segalanya: akar tiga huruf.

ك-ت-ب melahirkan kitab (buku), katib (penulis), maktab (kantor/meja tulis), maktabah (perpustakaan).

Begitu kamu mengenali akar, kamu berhenti menghafal kata satu per satu — dan mulai mengenali keluarga kata. Satu akar membuka sepuluh kata sekaligus.

Simpan. 📌`,
  tagar: t('arab','umum') },

{ hari: 27, slot: 3, jenis: 'tunggal', nama: 'relate-bisa-baca-gak-paham',
  gambar: [{ tipe: 'hook', glif: '؟',
    pita: 'Yang banyak dialami',
    judul: 'Bisa membaca, <span class="api">tidak tahu artinya.</span>',
    isi: 'Banyak orang Indonesia lancar melafalkan huruf Arab sejak kecil, tapi tidak pernah diajari apa yang sedang dibacanya.<br><br><b>Itu bukan kegagalan. Itu cuma pekerjaan yang belum dilanjutkan.</b>',
    kaki: 'Dan bagian tersulitnya — aksaranya — sudah kamu lewati bertahun-tahun lalu.' }],
  caption: `Banyak orang Indonesia bisa melafalkan huruf Arab dengan lancar sejak kecil, tapi tidak tahu arti yang dibacanya.

Ini sering terasa seperti kegagalan. Padahal bukan.

Membaca aksara dan memahami bahasa memang dua keterampilan berbeda, dan yang diajarkan sejak kecil biasanya hanya yang pertama.

Kabar baiknya besar: bagian yang paling sulit dan paling lama — mengenali aksara sampai otomatis — sudah kamu lewati bertahun-tahun lalu.

Yang tersisa justru bagian yang lebih ringan: kosakata dan pola kalimat.

Kamu tidak mulai dari nol. Kamu mulai dari setengah jalan.`,
  tagar: t('arab','umum') },

{ hari: 27, slot: 4, jenis: 'tunggal', nama: 'jual-kenapa-9',
  gambar: [{ tipe: 'jual',
    pita: 'Pertanyaan yang sering masuk',
    judul: '"Sembilan bahasa <span class="emas">sekaligus?"</span>',
    isi: 'Tidak. Mulai dari satu. Sembilan itu bukan tugas — itu pintu yang sudah terbuka, supaya waktu kamu butuh bahasa kedua, tidak ada yang perlu dibeli lagi.' }],
  caption: `"Sembilan bahasa? Satu aja saya belum bisa."

Sembilan bahasa bukan tugas yang harus diselesaikan. Itu pintu yang sudah terbuka.

Mulai dari satu. Selesaikan sampai terasa berguna. Lalu kalau setahun lagi pekerjaan atau rencanamu berubah dan kamu butuh bahasa lain — sudah ada di dalam. Tidak ada yang perlu dibeli lagi, tidak ada langganan baru.

Ini sengaja dirancang begitu, karena hidup orang berubah. Yang hari ini butuh Inggris untuk kerja, tiga tahun lagi mungkin butuh Jepang untuk pindah.

Rp199.000 untuk lima bahasa. Rp299.000 untuk sembilan.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 28 ═════════════════════════════════════════════════════ */
{ hari: 28, slot: 1, jenis: 'tunggal', nama: 'rangkuman-pekan4',
  gambar: [{ tipe: 'daftar',
    pita: 'Rangkuman',
    judul: 'Bahasa <span class="emas">dan uang.</span>',
    butir: [['Penyaringan diam-diam','Lamaran tersaring di syarat bahasa sebelum dibaca manusia.'],
            ['Kerja jarak jauh','Yang dibutuhkan menulis jelas, bukan logat sempurna.'],
            ['Jalur per negara','Jepang N2 · Korea TOPIK · Jerman B1–B2.'],
            ['CV yang benar','Kata kerja aktif, angka, dan buang data pribadi.']],
    kaki: 'Semua ini bisa diperiksa sendiri di situs lowongan hari ini juga.' }],
  caption: `Rangkuman pekan keempat — bagian yang paling jarang dibahas: bahasa dan uang.

— Lamaran sering tersaring di syarat bahasa sebelum ada manusia yang membacanya
— Kerja jarak jauh butuh menulis jelas, bukan logat sempurna
— Jalur per negara: Jepang N2, Korea TOPIK, Jerman B1–B2
— CV bahasa Inggris: kata kerja aktif, angka, buang umur dan foto
— Hapus "sorry for my bad English" dari semua emailmu

Semua ini bisa kamu periksa sendiri di situs lowongan hari ini juga. Buka, cari posisi yang kamu incar, hitung berapa yang mensyaratkan bahasa.

Dua hari lagi kita tutup rangkaian ini.`,
  tagar: t('karier','umum') },

{ hari: 28, slot: 2, jenis: 'carousel', nama: 'salah-belajar',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '✕',
      pita: 'Carousel · kesalahan belajar',
      judul: 'Enam cara belajar yang <span class="api">terasa produktif</span> tapi tidak.',
      isi: 'Bukan malas yang menghambat kebanyakan orang. Tapi rajin dengan cara yang salah — dan itu jauh lebih menyakitkan.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Yang paling sering',
      judul: 'Dua kesalahan besar',
      butir: [['Menonton tanpa mencoba','Menonton penjelasan terasa seperti belajar. Otak menandainya sebagai "sudah paham" padahal belum bisa dipakai.'],
              ['Mengumpulkan bahan','Mengunduh sepuluh buku dan lima aplikasi memberi rasa maju tanpa kemajuan.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Yang membuang waktu',
      judul: 'Dua lagi',
      butir: [['Menghafal daftar kata acak','Kata tanpa kalimat tidak menempel. Hafal dalam kalimat, bukan dalam daftar.'],
              ['Menunggu tata bahasa sempurna','Kamu tidak akan pernah merasa siap. Mulai bicara di minggu pertama.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Yang paling halus',
      judul: 'Dua terakhir',
      butir: [['Loncat-loncat sumber','Hari ini aplikasi A, besok kanal B. Tidak ada yang menumpuk.'],
              ['Sesi panjang seminggu sekali','Empat jam Minggu kalah jauh dari 30 menit tiap hari.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '✓',
      pita: 'Yang benar-benar bekerja',
      judul: 'Satu sumber. Tiap hari. Diuji, bukan dibaca.',
      isi: 'Tiga hal ini terdengar terlalu sederhana untuk berarti.<br><br><b>Justru karena sederhana ia bertahan — dan bertahan yang menentukan hasilnya.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Satu sumber',
      judul: 'Kurikulum berurutan, bukan tumpukan bahan.',
      isi: '326 pelajaran A1–C2, kartu ulang terjadwal, dan latihan yang menjelaskan sebab kesalahanmu. Sembilan bahasa, sekali bayar.' }],
  caption: `Bukan malas yang menghambat kebanyakan orang belajar bahasa. Tapi rajin dengan cara yang salah — dan itu jauh lebih menyakitkan.

Enam kebiasaan yang terasa produktif tapi tidak:

1. Menonton penjelasan tanpa pernah mencoba
2. Mengumpulkan bahan — sepuluh buku, lima aplikasi
3. Menghafal daftar kata acak
4. Menunggu tata bahasa sempurna sebelum bicara
5. Loncat-loncat sumber
6. Sesi panjang seminggu sekali

Slide 2 yang paling menipu: menonton penjelasan. Otak menandainya sebagai "sudah paham" padahal belum bisa dipakai. Itu sebabnya kamu merasa mengerti waktu menonton dan blank waktu disuruh membuat kalimat.

Slide 5 yang benar-benar bekerja. Sederhana sampai mengecewakan.

Kamu pernah kena yang mana? 👇`,
  tagar: t('umum') },

{ hari: 28, slot: 3, jenis: 'tunggal', nama: 'koreksi-nonton-paham',
  gambar: [{ tipe: 'koreksi',
    pita: 'Jebakan belajar',
    judul: 'Paham <span class="api">bukan berarti bisa.</span>',
    salah: 'Nonton penjelasan → merasa paham → lanjut', benar: 'Nonton → coba pakai → salah → perbaiki',
    sebab: 'Otak menandai penjelasan yang jelas sebagai "sudah dikuasai". Rasa itu palsu — <b>ia muncul dari mengenali, bukan dari bisa menghasilkan</b>. Itu sebabnya kamu mengerti waktu menonton dan kosong waktu disuruh membuat kalimat.',
    kaki: 'Ujian kecil hari ini lebih berharga daripada tiga video penjelasan.' }],
  caption: `Kenapa kamu mengerti waktu menonton penjelasan grammar, tapi kosong waktu disuruh membuat kalimat sendiri?

Karena otak menandai penjelasan yang jelas sebagai "sudah dikuasai".

Rasa itu palsu. Ia datang dari mengenali — bukan dari bisa menghasilkan. Dua kemampuan yang sama sekali berbeda.

Cara mengujinya gampang: tutup videonya, lalu buat tiga kalimat sendiri memakai aturan yang barusan dijelaskan. Kalau macet, kamu belum menguasainya. Kamu cuma mengenalinya.

Ini bukan tanda kamu bodoh. Ini terjadi pada semua orang, dan penyebabnya cara belajar — bukan kemampuan.

Ujian kecil hari ini lebih berharga daripada tiga video penjelasan.`,
  tagar: t('umum') },

{ hari: 28, slot: 4, jenis: 'tunggal', nama: 'jual-empat-pekan',
  gambar: [{ tipe: 'jual',
    pita: 'Empat pekan',
    judul: 'Semua yang dibagikan <span class="emas">gratis</span> — dan yang tidak.',
    isi: 'Yang gratis: aturan, strategi, dan arah. Yang di dalam: urutan yang menumpuk, latihan yang menguji, dan pengulangan yang terjadwal — bagian yang tidak bisa dibagikan lewat gambar.' }],
  caption: `Empat pekan konten di feed ini, semuanya gratis dan tetap akan gratis.

Yang bisa dibagikan lewat gambar: aturan, strategi, arah. Itu berguna, dan saya tidak menahannya.

Yang tidak bisa dibagikan lewat gambar: urutan yang menumpuk selama berbulan-bulan, latihan yang menguji apakah kamu benar-benar bisa, dan pengulangan yang datang persis sebelum kamu lupa.

Itu bagian yang butuh sistem, bukan unggahan.

9.052 entri kamus · 326 pelajaran · 767 latihan · 10 simulasi ujian · 9 bahasa.

Rp199.000 untuk lima. Rp299.000 untuk sembilan. Sekali bayar, selamanya.

sankalingogo.com`,
  tagar: t('jual','umum') },
];
