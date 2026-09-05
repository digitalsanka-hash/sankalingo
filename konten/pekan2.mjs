/* ── Pekan 2 · Tata bahasa yang menjebak penutur Indonesia ────────

   Pekan ini menyentuh bagian yang paling sering membuat orang berhenti:
   aturan yang tidak punya padanan di bahasa kita, jadi tidak pernah
   terasa "kurang" sampai ada yang menunjukkannya.                    */

import { TAGAR } from './pekan1.mjs';
const t = (...k) => k.map(x => TAGAR[x]).join(' ');

export const PEKAN2 = [
/* ══ HARI 8 ══════════════════════════════════════════════════════ */
{ hari: 8, slot: 1, jenis: 'tunggal', nama: 'tiga-tenses',
  gambar: [{ tipe: 'daftar',
    pita: 'Tenses',
    judul: 'Tiga tenses <span class="emas">menutup 80%</span> percakapan.',
    butir: [['Present simple','Kebiasaan dan fakta: I work here. She lives in Bandung.'],
            ['Past simple','Selesai di masa lalu: I sent the email yesterday.'],
            ['Present perfect','Dimulai dulu, masih berlaku: I have worked here for two years.']],
    kaki: 'Dua belas tenses itu ada. Tapi bukan di sini kamu mulai.' }],
  caption: `Kamu tidak perlu hafal dua belas tenses untuk mulai bicara.

Tiga ini menutup sekitar 80% percakapan sehari-hari:

Present simple — kebiasaan dan fakta
Past simple — selesai di masa lalu
Present perfect — dimulai dulu, masih berlaku sekarang

Yang bikin orang mandek bukan jumlah tensesnya, tapi urutan belajarnya: dilempar dua belas sekaligus di bab pertama, padahal sembilan sisanya jarang dipakai di percakapan biasa.

Kuasai tiga dulu. Sisanya menyusul sendiri saat kamu butuh.`,
  tagar: t('inggris','umum') },

{ hari: 8, slot: 2, jenis: 'carousel', nama: 'tenses-yang-cukup',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'T',
      pita: 'Carousel · tenses',
      judul: 'Berhenti hafal <span class="api">dua belas tenses.</span>',
      isi: 'Tiga sudah cukup untuk bicara. Sisanya kamu pelajari saat benar-benar butuh — dan itu jauh lebih cepat melekat daripada dihafal di awal.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '2/6',
      pita: 'Present simple',
      judul: 'Untuk yang berulang',
      salah: 'I am working here since 2020.', benar: 'I work here. / I have worked here since 2020.',
      sebab: '<b>Present simple</b> dipakai untuk kebiasaan dan fakta, bukan untuk sesuatu yang sedang berlangsung sekarang. "Saya kerja di sini" = I work here.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '3/6',
      pita: 'Past simple',
      judul: 'Selesai, titik',
      salah: 'I have sent it yesterday.', benar: 'I sent it yesterday.',
      sebab: 'Begitu ada keterangan waktu yang <b>sudah selesai</b> — yesterday, last week, in 2020 — pakai past simple. Present perfect tidak boleh bertemu waktu tertentu.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '4/6',
      pita: 'Present perfect',
      judul: 'Mulai dulu, masih jalan',
      salah: 'I work here since two years.', benar: 'I have worked here for two years.',
      sebab: 'Bahasa kita bilang "sudah dua tahun kerja di sini" tanpa mengubah kata kerjanya. Inggris menuntut <b>have + V3</b>, dan <b>for</b> untuk lama waktu, <b>since</b> untuk titik mulai.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Cara memilih dalam 2 detik',
      judul: 'Tanya satu hal ini',
      butir: [['Masih berlanjut sampai sekarang?','Ya → present perfect (have + V3)'],
              ['Sudah selesai, ada waktunya?','Ya → past simple (V2)'],
              ['Kebiasaan atau fakta umum?','Ya → present simple (V1)']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Latihannya',
      judul: '767 latihan, masing-masing dengan alasannya.',
      isi: 'Bukan cuma "salah" atau "benar" — tiap latihan menyebut kebiasaan berbahasa Indonesia mana yang membuatmu tergelincir di soal itu.' }],
  caption: `Kalau kamu pernah hafal tabel dua belas tenses lalu tetap bingung waktu bicara — masalahnya bukan hafalanmu.

Tabel mengajarkan bentuk. Yang kamu butuhkan waktu bicara adalah cara memilih.

Slide 5 isinya satu pertanyaan yang menyelesaikan pilihan dalam dua detik: apakah kejadiannya masih berlanjut sampai sekarang?

Simpan buat dipakai besok pagi.`,
  tagar: t('inggris','umum') },

{ hari: 8, slot: 3, jenis: 'tunggal', nama: 'relate-grammar-nazi',
  gambar: [{ tipe: 'hook', glif: '!',
    pita: 'Yang perlu diluruskan',
    judul: 'Grammar bukan untuk <span class="api">dinilai orang.</span>',
    isi: 'Ia untuk memastikan maksudmu sampai. "I will call when he will arrive" tetap dimengerti — tapi memaksa lawan bicaramu berhenti sepersekian detik untuk menerjemahkan.<br><br><b>Di rapat, sepersekian detik itu berulang lima puluh kali.</b>',
    kaki: 'Bukan soal benar. Soal beban yang kamu titipkan ke pendengar.' }],
  caption: `"Yang penting orang ngerti kan?"

Setuju — sampai titik tertentu.

Kalimat yang keliru memang masih dimengerti. Tapi tiap kekeliruan menitipkan beban kecil ke pendengar: dia harus berhenti sepersekian detik, menerjemahkan ulang, lalu lanjut.

Sekali dua kali tidak masalah. Dalam rapat satu jam, itu berulang puluhan kali — dan yang tersisa di kepala mereka bukan isi pendapatmu, tapi rasa lelah mendengarkanmu.

Grammar bukan supaya kamu terdengar pintar. Supaya idemu sampai tanpa ongkos tambahan.`,
  tagar: t('inggris','karier') },

{ hari: 8, slot: 4, jenis: 'tunggal', nama: 'jual-latihan',
  gambar: [{ tipe: 'jual',
    pita: 'Yang membedakan',
    judul: 'Tiap latihan menyebut <span class="emas">kenapa</span> kamu salah.',
    isi: 'Bukan "jawabanmu salah, coba lagi". Tapi: kebiasaan berbahasa Indonesia mana yang menyeretmu ke situ, dan kenapa kesalahan itu tidak terasa salah.' }],
  caption: `Aplikasi bahasa umumnya bilang: salah, coba lagi.

Kamu ulangi sampai hafal jawabannya — bukan sampai paham polanya. Enam bulan kemudian, kesalahan yang sama muncul lagi di kalimat berbeda.

767 latihan di SankaLingo GO ditulis dari sisi sebaliknya: kebiasaan berbahasa Indonesia mana yang membuatmu tergelincir di soal ini, dan kenapa kesalahan itu justru terasa benar.

Yang diperbaiki bukan jawabanmu. Kebiasaannya.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 9 ══════════════════════════════════════════════════════ */
{ hari: 9, slot: 1, jenis: 'tunggal', nama: 'wa-vs-ga',
  gambar: [{ tipe: 'koreksi',
    pita: 'Partikel Jepang',
    judul: 'Dua partikel, <span class="api">satu kata</span> di bahasa kita.',
    salah: '私が学生です。 (memperkenalkan diri)', benar: '私は学生です。',
    sebab: 'Bahasa Indonesia cuma punya satu cara: "Saya mahasiswa." Jepang memisahkan <b>は</b> (topik: soal saya, ...) dan <b>が</b> (penunjuk: yang mahasiswa itu SAYA). Salah pilih tidak membuat kalimat rusak, tapi membuat penekanannya bergeser.',
    kaki: 'Ini beda antara "saya mahasiswa" dan "SAYA yang mahasiswa".' }],
  caption: `私は学生です vs 私が学生です

Dua-duanya artinya "saya mahasiswa". Bedanya di penekanan — dan bahasa Indonesia tidak punya alat untuk itu.

は (wa) = topik. "Soal saya, saya mahasiswa."
が (ga) = penunjuk. "Yang mahasiswa itu SAYA."

Kalau ditanya "kamu siapa?", jawabnya pakai は.
Kalau ditanya "siapa yang mahasiswa?", jawabnya pakai が.

Ini salah satu yang paling lama dikuasai pelajar Jepang di seluruh dunia — bukan cuma orang Indonesia. Tapi begitu polanya masuk, kalimat Jepang berhenti terasa acak.`,
  tagar: t('jepang','umum') },

{ hari: 9, slot: 2, jenis: 'carousel', nama: 'partikel-jepang',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'は',
      pita: 'Carousel · partikel',
      judul: 'Partikel Jepang: <span class="api">kata terkecil</span> yang paling menentukan.',
      isi: 'Bahasa Indonesia menandai peran kata lewat urutan. Bahasa Jepang lewat partikel — dan itu sebabnya urutan katanya bisa dibolak-balik tanpa mengubah arti.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Empat yang wajib',
      judul: 'Mulai dari sini',
      butir: [['は (wa) — topik','Menandai apa yang sedang dibicarakan. 私は = soal saya…'],
              ['を (o) — objek','Menandai yang dikenai perbuatan. パンを食べます = makan roti.'],
              ['に (ni) — arah/waktu','学校に行きます = pergi ke sekolah. 7時に = pada jam 7.'],
              ['で (de) — tempat kegiatan','学校で勉強します = belajar DI sekolah.']],
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '3/6',
      pita: 'Jebakan 1',
      judul: 'に atau で?',
      salah: '学校で行きます', benar: '学校に行きます',
      sebab: 'Kita memakai satu kata "di/ke" tergantung rasa. Jepang tegas: <b>に</b> untuk arah tujuan, <b>で</b> untuk tempat kegiatan berlangsung. Pergi itu arah, jadi に.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '4/6',
      pita: 'Jebakan 2',
      judul: 'Objek butuh を',
      salah: '本読みます', benar: '本を読みます',
      sebab: 'Dalam percakapan santai partikel memang sering dibuang, tapi saat belajar — dan saat ujian — <b>を</b> wajib ada. Membuangnya sejak awal membuat polanya tidak pernah terbentuk.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: 'を',
      pita: 'Kenapa ini penting',
      judul: 'Urutan bebas, partikel tidak.',
      isi: '私はパンを食べます<br>パンを私は食べます<br><br>Dua-duanya benar dan artinya sama — karena <b>partikelnya yang menandai peran</b>, bukan urutannya. Ini yang membuat bahasa Jepang terasa aneh di awal, lalu terasa rapi setelahnya.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Selengkapnya',
      judul: 'Partikel, bentuk kata, dan alasannya.',
      isi: 'Di dalam aplikasi: tiap topik tata bahasa Jepang dijelaskan dari sisi kebiasaan berbahasa Indonesia, plus 1.002 entri kamus dengan bentuk sopan, bentuk て, dan lampau.' }],
  caption: `Partikel adalah kata terkecil dalam bahasa Jepang, dan yang paling menentukan artinya.

Bahasa Indonesia menandai peran kata lewat urutan: "Saya makan roti" beda dengan "Roti makan saya". Bahasa Jepang menandainya lewat partikel, jadi urutannya boleh dibolak-balik.

Slide 3 dan 4 dua jebakan yang paling sering: に vs で, dan を yang hilang.

Simpan. Besok kita masuk kata kerja Korea.`,
  tagar: t('jepang','umum') },

{ hari: 9, slot: 3, jenis: 'tunggal', nama: 'relate-hafal-kosakata',
  gambar: [{ tipe: 'hook', glif: '∞',
    pita: 'Yang sering terjadi',
    judul: 'Hafal 500 kata, <span class="api">tetap tidak bisa bicara.</span>',
    isi: 'Kosakata tanpa pola cuma tumpukan bahan. Kamu tahu "makan", "sudah", "roti" — tapi tidak tahu bagaimana ketiganya disusun jadi kalimat yang benar dalam bahasa itu.<br><br><b>Yang kurang bukan kata. Yang kurang lem.</b>',
    kaki: 'Tata bahasa itu lemnya.' }],
  caption: `Hafal 500 kata. Tetap diam waktu harus bicara.

Ini terjadi karena kosakata dan tata bahasa dipelajari terpisah — padahal keduanya baru berguna kalau bertemu.

Kamu tahu "taberu" (makan), "pan" (roti), "mashita" (sudah). Tapi kalau tidak tahu partikelnya, ketiganya tetap jadi tiga kata lepas, bukan kalimat.

Kosakata itu bahan. Tata bahasa itu lem. Menumpuk bahan tanpa lem menghasilkan tumpukan, bukan bangunan.

Kamu sedang di tahap mana — nambah kosakata terus, atau sudah mulai merangkai? 👇`,
  tagar: t('umum') },

{ hari: 9, slot: 4, jenis: 'tunggal', nama: 'jual-kartu-ulang',
  gambar: [{ tipe: 'jual',
    pita: 'Kartu ulang terjadwal',
    judul: 'Muncul lagi <span class="emas">tepat sebelum</span> kamu lupa.',
    isi: 'Kata baru hilang dari ingatan dalam hitungan hari kalau tidak diulang. Kartu ulang di aplikasi memunculkannya kembali persis di ambang itu — bukan tiap hari, bukan terlambat.' }],
  caption: `Kata yang kamu hafal hari ini akan hilang dalam tiga sampai tujuh hari kalau tidak diulang. Itu bukan kelemahanmu — itu cara kerja ingatan manusia.

Solusinya bukan belajar lebih lama, tapi mengulang di saat yang tepat: persis sebelum kata itu hilang.

Terlalu cepat, kamu buang waktu mengulang yang masih ingat. Terlalu lambat, kamu mulai dari nol lagi.

SankaLingo GO menjadwalkannya untukmu, per kata, berdasarkan seberapa sering kamu benar.

Rp199.000 sekali bayar, akses selamanya. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 10 ═════════════════════════════════════════════════════ */
{ hari: 10, slot: 1, jenis: 'tunggal', nama: 'korea-haeyo',
  gambar: [{ tipe: 'aksara', fontKelas: 'ko',
    pita: 'Kata kerja Korea',
    judul: 'Satu akhiran untuk <span class="emas">hampir semua</span> percakapan.',
    huruf: [['가다','gada · dasar'],['가요','gayo · sopan'],['갔어요','gasseoyo · lampau'],['갈 거예요','gal geoyeyo · nanti']],
    ket: 'Bentuk <b>-요 (yo)</b> adalah bentuk sopan sehari-hari yang dipakai hampir di semua situasi: ke kasir, ke rekan kerja, ke orang yang baru dikenal. Kuasai ini dulu sebelum bentuk formal.',
    kaki: 'Satu pola, ribuan kata kerja.' }],
  caption: `가다 → 가요 → 갔어요

Kata kerja Korea berubah menurut kesopanan, bukan menurut siapa pelakunya. Tidak ada I/you/he yang mengubah bentuk seperti bahasa Inggris.

Yang perlu kamu kuasai duluan cuma satu: bentuk -요.

가요 (pergi)
먹어요 (makan)
봐요 (lihat)

Ini bentuk sopan sehari-hari — aman dipakai ke kasir, rekan kerja, atau orang yang baru dikenal. Bentuk formal (-습니다) baru perlu di pidato dan berita.

Satu pola untuk ribuan kata kerja. Ini yang bikin Korea lebih cepat dikuasai daripada yang orang kira.`,
  tagar: t('korea','umum') },

{ hari: 10, slot: 2, jenis: 'carousel', nama: 'korea-tingkat-bahasa',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: '요',
      pita: 'Carousel · kesopanan',
      judul: 'Salah tingkat bicara <span class="api">lebih fatal</span> daripada salah kata.',
      isi: 'Di Korea, memakai bentuk santai ke orang yang lebih tua bukan sekadar keliru — itu terdengar kurang ajar. Ini yang tidak pernah diajarkan drama.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/5',
      pita: 'Tiga tingkat',
      judul: 'Yang perlu dibedakan',
      butir: [['반말 (banmal)','Santai. Ke teman sebaya akrab, adik, atau diri sendiri. 가 (ga).'],
              ['해요체 (haeyo)','Sopan sehari-hari. Ke hampir semua orang. 가요 (gayo).'],
              ['합쇼체 (hapsyo)','Formal. Pidato, berita, pelanggan. 갑니다 (gamnida).']],
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '3/5',
      pita: 'Jebakan drama',
      judul: 'Yang kamu dengar di drama',
      salah: '어디 가? (ke atasan)', benar: '어디 가세요?',
      sebab: 'Drama penuh percakapan antarteman yang memakai <b>반말</b>. Menirunya ke orang yang lebih tua atau atasan terdengar seperti anak kecil menegur orang dewasa.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: '세',
      pita: 'Kunci amannya',
      judul: 'Kalau ragu, pakai -요.',
      isi: 'Bentuk 해요 tidak pernah terdengar kasar, dan tidak pernah terdengar terlalu kaku.<br><br><b>Ini bentuk yang paling sering dipakai orang Korea sendiri dalam sehari-hari.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Selengkapnya',
      judul: 'Tiga tingkat, dan kapan memakainya.',
      isi: 'Kamus Korea di aplikasi memuat bentuk dasar, sopan, dan lampau untuk tiap kata kerja — lengkap dengan tombol suara di tiap bentuknya.' }],
  caption: `Kalau kamu belajar Korea dari drama, ada satu hal yang perlu diluruskan sebelum kamu bicara dengan orang Korea sungguhan.

Drama penuh percakapan antarteman — yang memakai bentuk santai (반말). Menirukannya ke orang yang lebih tua atau ke atasan terdengar seperti anak kecil menegur orang dewasa.

Slide 4 kunci amannya: kalau ragu, pakai -요. Bentuk itu tidak pernah terdengar kasar dan tidak pernah terlalu kaku.

Simpan sebelum kamu ke Korea. 🇰🇷`,
  tagar: t('korea','umum') },

{ hari: 10, slot: 3, jenis: 'tunggal', nama: 'koreksi-modal-can',
  gambar: [{ tipe: 'koreksi',
    pita: 'Bahasa Inggris',
    judul: 'Sesudah <span class="api">can</span>, kata kerjanya telanjang.',
    salah: 'I can to swim. / She can swims.', benar: 'I can swim. / She can swim.',
    sebab: 'Sesudah <b>can, will, must, should, may</b> — kata kerjanya bentuk dasar, tanpa <b>to</b> dan tanpa <b>-s</b>. Kita sering menambahkannya karena terbiasa "bisa untuk berenang".',
    kaki: 'Modal tidak pernah berubah bentuk. Itu bagian mudahnya.' }],
  caption: `"She can swims." atau "I can to swim."

Dua-duanya salah, dan dua-duanya berasal dari kebiasaan yang berbeda.

Yang pertama: kita terbiasa kata kerja menyesuaikan subjek (she works, she swims), lalu menerapkannya juga setelah can. Padahal setelah modal, kata kerjanya selalu telanjang.

Yang kedua: "bisa untuk berenang" diterjemahkan apa adanya, jadi muncul "to" yang tidak perlu.

Yang benar: I can swim. She can swim. They can swim.

Kabar baiknya, modal (can, will, must, should, may) tidak pernah berubah bentuk. Sekali paham, selesai selamanya.`,
  tagar: t('inggris','umum') },

{ hari: 10, slot: 4, jenis: 'tunggal', nama: 'jual-sinkron',
  gambar: [{ tipe: 'jual',
    pita: 'HP dan laptop',
    judul: 'Belajar di HP, <span class="emas">lanjut di laptop.</span>',
    isi: 'Masuk dengan email dan kata sandi yang sama. Kemajuan belajarmu ikut berpindah — tidak ada yang perlu diulang dari awal.' }],
  caption: `Belajar di HP waktu di angkot, lanjut di laptop waktu di kos — tanpa mengulang dari nol.

Masuk dengan email dan kata sandi yang sama di dua perangkat, kemajuanmu ikut pindah: kosakata yang sudah dikuasai, pelajaran yang sudah selesai, jadwal kartu ulang.

Dan kalau HP-mu hilang atau ganti baru, semuanya masih ada.

Ini yang membedakan aplikasi yang dipakai bertahun-tahun dengan yang dipakai dua minggu lalu ditinggalkan.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 11 ═════════════════════════════════════════════════════ */
{ hari: 11, slot: 1, jenis: 'tunggal', nama: 'kata-bantu-mandarin',
  gambar: [{ tipe: 'aksara', fontKelas: 'zh',
    pita: 'Mandarin',
    judul: 'Tidak ada <span class="api">"tiga buku"</span> di Mandarin.',
    huruf: [['本','běn · buku'],['张','zhāng · lembaran'],['只','zhī · hewan'],['辆','liàng · kendaraan']],
    ket: 'Benda tidak bisa dihitung langsung. Bukan 三书, melainkan <b>三本书</b> — tiga <i>ben</i> buku. Tiap benda punya kata bantunya sendiri, dan itu harus dihafal bersama kata bendanya.',
    kaki: 'Sama seperti kita: sebatang rokok, seekor kucing, selembar kertas.' }],
  caption: `三本书 — tiga buku.
Kenapa ada 本 di tengah?

Karena dalam bahasa Mandarin, benda tidak bisa dihitung langsung. Harus ada kata bantu bilangan di antara angka dan bendanya.

Kabar baiknya: bahasa Indonesia juga punya ini.

Sebatang rokok. Seekor kucing. Selembar kertas. Sebuah rumah.

Kamu sudah paham konsepnya sejak kecil — cuma di Mandarin jumlahnya lebih banyak dan lebih ketat.

本 untuk buku, 张 untuk yang lembaran, 只 untuk hewan kecil, 辆 untuk kendaraan.

Hafal bersama kata bendanya, jangan terpisah.`,
  tagar: '#belajarbahasamandarin #mandarin #hsk ' + TAGAR.umum },

{ hari: 11, slot: 2, jenis: 'carousel', nama: 'mandarin-tanpa-tenses',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: '了',
      pita: 'Carousel · Mandarin',
      judul: 'Mandarin <span class="api">tidak punya tenses.</span>',
      isi: 'Kata kerjanya tidak pernah berubah bentuk — tidak ada go/went/gone. Ini kabar baik yang jarang disebut waktu orang menakut-nakuti soal Mandarin.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '2/5', glif: '去',
      pita: 'Satu bentuk saja',
      judul: '去 tetap 去',
      isi: '我去 — saya pergi<br>我昨天去 — saya kemarin pergi<br>我明天去 — saya besok pergi<br><br><b>Kata kerjanya sama persis.</b> Yang menentukan waktu adalah keterangan waktunya, seperti bahasa Indonesia.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/5',
      pita: 'Penanda yang perlu',
      judul: 'Tiga kata kecil',
      butir: [['了 (le)','Menandai perubahan atau selesai: 我吃了 = saya sudah makan.'],
              ['过 (guo)','Pernah mengalami: 我去过 = saya pernah ke sana.'],
              ['在 (zài)','Sedang berlangsung: 我在吃 = saya sedang makan.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: '难',
      pita: 'Lalu apa yang sulit?',
      judul: 'Nada dan tulisannya.',
      isi: 'Tata bahasanya termasuk paling sederhana di dunia. Yang menuntut kerja keras: empat nada, dan menghafal karakter.<br><br><b>Tapi keduanya soal latihan, bukan soal aturan yang berlapis-lapis.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Lanjutannya',
      judul: '1.004 entri kamus Mandarin.',
      isi: 'Lengkap dengan pinyin bernada, kata bantu bilangan tiap benda, contoh kalimat, dan tombol suara di tiap kata.' }],
  caption: `Mandarin sering disebut bahasa paling sulit di dunia. Setengahnya benar, setengahnya mitos.

Yang benar: nada dan karakternya menuntut latihan panjang.

Yang mitos: tata bahasanya rumit. Justru sebaliknya — tidak ada tenses, tidak ada perubahan bentuk kata kerja, tidak ada jenis kelamin kata, tidak ada jamak.

我去 (saya pergi) dipakai untuk kemarin, hari ini, dan besok. Yang membedakan cuma keterangan waktunya — persis seperti bahasa Indonesia.

Slide 3: tiga kata kecil yang perlu kamu tahu. Simpan.`,
  tagar: '#belajarbahasamandarin #mandarin #hsk ' + TAGAR.umum },

{ hari: 11, slot: 3, jenis: 'tunggal', nama: 'relate-malu-salah',
  gambar: [{ tipe: 'hook', glif: '?',
    pita: 'Yang menahan banyak orang',
    judul: 'Takut salah <span class="api">lebih mahal</span> daripada salah.',
    isi: 'Orang yang berani salah lima kali sehari maju lima kali lebih cepat dari yang menunggu sampai yakin benar.<br><br><b>Dan penutur asli hampir tidak pernah peduli — mereka justru senang kamu mencoba bahasanya.</b>',
    kaki: 'Yang menilai keras biasanya sesama pemelajar, bukan penutur aslinya.' }],
  caption: `Hal yang paling banyak menahan orang Indonesia belajar bahasa bukan waktu, bukan biaya. Malu.

Malu salah grammar. Malu logatnya aneh. Malu ditertawakan.

Dua hal yang perlu diketahui:

Satu, penutur asli hampir tidak pernah menilai. Mereka justru senang ada orang asing mencoba bahasanya — coba ingat perasaanmu waktu ada bule ngomong "terima kasih" dengan logat kaku.

Dua, yang biasanya menilai keras justru sesama pemelajar, bukan penutur aslinya.

Orang yang berani salah lima kali sehari maju lima kali lebih cepat dari yang menunggu sampai yakin benar.`,
  tagar: t('umum') },

{ hari: 11, slot: 4, jenis: 'tunggal', nama: 'jual-9052',
  gambar: [{ tipe: 'jual',
    pita: 'Angka yang bisa dihitung',
    judul: '<span class="emas">9.052</span> entri. <span class="emas">767</span> latihan. <span class="emas">326</span> pelajaran.',
    isi: 'Bukan janji "cepat fasih". Cuma isi yang bisa kamu hitung sendiri sebelum membeli — dan dipakai selama kamu mau.' }],
  caption: `Kami tidak menjanjikan kamu fasih dalam 30 hari. Tidak ada aplikasi yang bisa menjanjikan itu dengan jujur.

Yang bisa dijanjikan: isinya.

9.052 entri kamus, sembilan bahasa
326 pelajaran berurutan A1–C2
767 latihan tata bahasa
10 simulasi ujian resmi
Jalan tanpa internet setelah dibuka sekali

Semua angka itu bisa kamu hitung sendiri di dalam aplikasinya.

Berapa cepat kamu bisa? Itu tergantung berapa sering kamu buka. Yang kami urus: begitu kamu buka, ada urutan yang jelas dan penjelasan yang masuk akal.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 12 ═════════════════════════════════════════════════════ */
{ hari: 12, slot: 1, jenis: 'tunggal', nama: 'arab-bilangan',
  gambar: [{ tipe: 'koreksi',
    pita: 'Arab',
    judul: 'Bilangan yang <span class="api">membalik</span> jenis kelamin.',
    salah: 'ثلاثة بنات', benar: 'ثلاث بنات',
    sebab: 'Bahasa Indonesia menyebut angka tanpa perubahan apa pun: tiga anak, tiga buku. Bahasa Arab <b>membalik jenis bilangan tiga sampai sepuluh</b> — benda perempuan memakai bilangan bentuk laki-laki, dan sebaliknya. Aturan ini tidak punya padanan di bahasa mana pun yang kita kenal.',
    kaki: 'Muncul di setiap kalimat yang menyebut jumlah.' }],
  caption: `Aturan bahasa Arab yang paling sering dilewati orang Indonesia — dan muncul hampir di setiap kalimat yang menyebut jumlah.

Bilangan tiga sampai sepuluh MEMBALIK jenis kelaminnya.

بنات (banat) = anak perempuan → pakai bilangan bentuk laki-laki: ثلاث
أولاد (aulad) = anak laki-laki → pakai bilangan bentuk perempuan: ثلاثة

Kenapa sering dilewati? Karena bahasa kita sama sekali tidak punya konsep ini. Tiga anak ya tiga anak, mau perempuan atau laki-laki.

Kalau tidak ada yang menunjukkan aturannya, otak kita tidak punya alasan mencarinya.

Simpan. Ini muncul di ujian dan di percakapan sehari-hari.`,
  tagar: t('arab','umum') },

{ hari: 12, slot: 2, jenis: 'carousel', nama: 'arab-akar-kata',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: 'ك',
      pita: 'Carousel · Arab',
      judul: 'Satu akar, <span class="api">sepuluh kata.</span>',
      isi: 'Kosakata Arab tidak dihafal satu per satu. Ia tumbuh dari akar tiga huruf — dan begitu kamu tahu akarnya, sepuluh kata datang sekaligus.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/5',
      pita: 'Akar ك-ت-ب',
      judul: 'Semua soal menulis',
      butir: [['كتب (kataba)','menulis'],['كتاب (kitab)','buku — yang ditulis'],
              ['كاتب (katib)','penulis — yang menulis'],['مكتب (maktab)','kantor — tempat menulis'],
              ['مكتبة (maktaba)','perpustakaan — tempat buku']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/5',
      pita: 'Polanya berulang',
      judul: 'Akar د-ر-س',
      butir: [['درس (darasa)','belajar'],['درس (dars)','pelajaran'],
              ['مدرس (mudarris)','guru'],['مدرسة (madrasa)','sekolah — tempat belajar']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: 'م',
      pita: 'Pola yang sama',
      judul: 'مَ + akar = tempatnya',
      isi: 'مكتب kantor · مدرسة sekolah · مطبخ dapur · مسجد masjid<br><br>Semua diawali <b>م</b> dan semuanya berarti <i>tempat untuk…</i>. Satu pola, puluhan kata.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Selengkapnya',
      judul: '1.002 entri Arab, lengkap bentuknya.',
      isi: 'Tiap kata kerja disertai bentuk madhi, mudhari, dan masdar. Tiap kata benda disertai jamaknya — termasuk jamak taksir yang tidak bisa ditebak.' }],
  caption: `Kosakata Arab tidak dihafal satu per satu. Ia tumbuh dari akar tiga huruf.

ك-ت-ب semuanya soal menulis:
kataba (menulis), kitab (buku), katib (penulis), maktab (kantor), maktaba (perpustakaan)

د-ر-س semuanya soal belajar:
darasa (belajar), dars (pelajaran), mudarris (guru), madrasa (sekolah)

Lihat polanya? Awalan م selalu berarti "tempat untuk…"

Ini yang membuat kosakata Arab meledak cepat setelah 50 akar pertama dikuasai. Bukan menghafal 500 kata, tapi 50 akar plus beberapa pola.

Simpan buat besok. 📖`,
  tagar: t('arab','umum') },

{ hari: 12, slot: 3, jenis: 'tunggal', nama: 'koreksi-there-is',
  gambar: [{ tipe: 'koreksi',
    pita: 'Bahasa Inggris',
    judul: '"Ada" <span class="api">butuh subjek.</span>',
    salah: 'In my house have three rooms.', benar: 'There are three rooms in my house.',
    sebab: 'Bahasa Indonesia bisa berkalimat tanpa subjek: "Di rumah saya ada tiga kamar." Inggris menuntut subjek di tiap kalimat, dan untuk menyatakan keberadaan dipakai <b>there is / there are</b> — bukan <i>have</i>.',
    kaki: 'Salah paling khas orang Indonesia, dan paling cepat terdengar.' }],
  caption: `"In my house have three rooms."

Kalimat ini langsung menandai penuturnya orang Indonesia — dan sebabnya menarik.

Bahasa kita bisa berkalimat tanpa subjek. "Di rumah saya ada tiga kamar." Tidak ada yang kurang.

Bahasa Inggris menuntut subjek di setiap kalimat. Untuk menyatakan keberadaan, subjeknya adalah "there".

There are three rooms in my house.
There is a problem.
There were many people.

Have dipakai untuk kepemilikan (I have a car), bukan keberadaan.

Satu perbaikan kecil, dan bahasa Inggrismu langsung terdengar jauh lebih rapi.`,
  tagar: t('inggris','umum') },

{ hari: 12, slot: 4, jenis: 'tunggal', nama: 'jual-akses-selamanya',
  gambar: [{ tipe: 'jual',
    pita: 'Tanpa tanggal kedaluwarsa',
    judul: 'Beli sekarang, <span class="emas">pakai lima tahun lagi.</span>',
    isi: 'Kode yang ditebus menempel pada akunmu tanpa masa berlaku. Berhenti enam bulan lalu kembali? Semuanya masih di tempatnya.' }],
  caption: `Belajar bahasa tidak pernah lurus.

Ada bulan sibuk kerja, ada bulan sakit, ada bulan kehilangan semangat lalu kembali lagi. Itu normal — dan itu justru yang menghukum orang di sistem langganan.

Berhenti tiga bulan, akses hilang. Mau lanjut? Bayar lagi dari awal.

Di sini kodenya menempel pada akunmu tanpa tanggal kedaluwarsa. Berhenti setahun, kembali, semuanya masih di tempatnya — termasuk kemajuan belajarmu.

Rp199.000 sekali. Itu saja.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 13 ═════════════════════════════════════════════════════ */
{ hari: 13, slot: 1, jenis: 'tunggal', nama: 'jerman-di-ke',
  gambar: [{ tipe: 'koreksi',
    pita: 'Jerman',
    judul: 'Kata depan sama, <span class="api">arti berbeda.</span>',
    salah: 'Ich gehe in der Schule. (maksudnya: ke sekolah)', benar: 'Ich gehe in die Schule.',
    sebab: 'Bahasa Indonesia memakai dua kata berbeda — <b>di</b> dan <b>ke</b> — jadi bedanya selalu terlihat. Bahasa Jerman memakai kata depan yang sama dan membedakannya lewat kasus: <b>in der Schule</b> (di sekolah) tetapi <b>in die Schule</b> (ke sekolah).',
    kaki: 'Tidak ada isyarat apa pun untuk mengingatkan. Karena itu hampir selalu terlewat.' }],
  caption: `in der Schule = di sekolah
in die Schule = ke sekolah

Kata depannya sama: in. Yang berubah cuma satu huruf di kata sandangnya — dan itu mengubah arti dari "berada di" jadi "menuju ke".

Kenapa orang Indonesia hampir selalu tergelincir di sini?

Karena bahasa kita memakai dua kata yang jelas berbeda: di dan ke. Bedanya selalu terlihat, jadi kita tidak pernah perlu memikirkannya.

Dalam bahasa Jerman, tidak ada isyarat apa pun yang mengingatkan bahwa ada yang harus dipilih. Kata depannya kelihatan sama saja.

Aturannya: kalau ada perpindahan tempat, pakai akusatif (die). Kalau diam di satu tempat, pakai datif (der).`,
  tagar: '#belajarbahasajerman #bahasajerman #ausbildung #goethe ' + TAGAR.umum },

{ hari: 13, slot: 2, jenis: 'carousel', nama: 'jerman-untuk-ausbildung',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'ß',
      pita: 'Carousel · Jerman untuk kerja',
      judul: 'Jerman butuh <span class="api">perawat dan teknisi.</span>',
      isi: 'Program Ausbildung membuka jalur kerja sambil belajar untuk lulusan SMA. Syarat bahasanya B1 atau B2 — dan itu bagian yang paling sering menggagalkan pelamar Indonesia.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Yang perlu disiapkan',
      judul: 'Tiga hal, urut',
      butir: [['Bahasa dulu','B1 minimal untuk hampir semua program. B2 untuk keperawatan.'],
              ['Sertifikat Goethe atau telc','Ujian resmi yang diakui. Bukan sertifikat kursus biasa.'],
              ['Dokumen dan visa','Baru diurus setelah bahasanya siap — bukan sebaliknya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Yang bikin gagal',
      judul: 'Tiga kesalahan umum',
      butir: [['Mulai dari agen, bukan dari bahasa','Agen bisa mengurus berkas. Bahasamu tidak bisa diwakilkan.'],
              ['Belajar tanpa target ujian','B1 punya format yang jelas. Belajar tanpa mengenal formatnya membuang waktu.'],
              ['Mengabaikan bagian menyimak','Bagian yang paling sering di bawah ambang minimum — dan bisa menggagalkan meski total nilaimu cukup.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/6', glif: 'B1',
      pita: 'Berapa lama',
      judul: 'A1 ke B1 butuh waktu.',
      isi: 'Perkiraan umum lembaga bahasa: sekitar 350–600 jam belajar dari nol sampai B1, tergantung intensitas dan latar belakangmu.<br><br><b>Satu jam sehari = kira-kira satu setengah tahun. Dua jam sehari = jauh lebih cepat.</b>',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '5/6',
      pita: 'Contoh soal B1',
      judul: 'Mana yang benar?',
      salah: 'Ich habe gestern nach Berlin gefahren.', benar: 'Ich bin gestern nach Berlin gefahren.',
      sebab: 'Kata kerja yang menyatakan <b>perpindahan tempat</b> memakai <b>sein</b>, bukan <b>haben</b>. Ini muncul di hampir setiap ujian B1.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Persiapannya',
      judul: 'Simulasi Goethe A1 sampai C1.',
      isi: 'Format dan ambang kelulusannya ditiru, termasuk aturan nilai minimum per bagian yang sering menggagalkan orang meski totalnya cukup.' }],
  caption: `Buat yang lagi mengincar Ausbildung di Jerman — geser sampai slide 3.

Kesalahan paling sering: mulai dari agen, bukan dari bahasa. Agen bisa mengurus berkas, visa, dan pencarian tempat. Bahasamu tidak bisa diwakilkan siapa pun.

Slide 4 perkiraan waktunya, dan slide 5 satu contoh soal B1 yang paling sering salah: kapan pakai sein, kapan pakai haben.

Ada yang sedang persiapan Ausbildung? Cerita di komentar 👇`,
  tagar: '#ausbildung #kerjadijerman #bahasajerman #goethe ' + TAGAR.karier },

{ hari: 13, slot: 3, jenis: 'tunggal', nama: 'relate-umur',
  gambar: [{ tipe: 'hook', glif: '30',
    pita: 'Yang sering ditanya',
    judul: 'Umur 30 <span class="api">bukan terlambat.</span>',
    isi: 'Anak kecil belajar bahasa lebih cepat dalam hal logat. Dalam hal tata bahasa dan kosakata, <b>orang dewasa justru lebih cepat</b> — karena bisa memahami pola, bukan cuma meniru.<br><br>Yang dimiliki anak kecil dan sering tidak dimiliki orang dewasa: waktu, dan izin untuk terdengar bodoh.',
    kaki: 'Dua-duanya bisa kamu atur sendiri.' }],
  caption: `"Udah 30, telat nggak sih belajar bahasa baru?"

Tidak. Dan alasannya sering disalahpahami.

Anak kecil memang unggul di satu hal: logat. Setelah masa kanak-kanak, sangat sulit terdengar persis seperti penutur asli.

Tapi untuk tata bahasa dan kosakata, orang dewasa justru lebih cepat. Kamu bisa memahami pola, membandingkan dengan bahasa yang sudah kamu kuasai, dan bertanya "kenapa begitu" — hal yang tidak bisa dilakukan anak lima tahun.

Yang dimiliki anak kecil dan sering hilang pada orang dewasa cuma dua: waktu, dan izin untuk terdengar bodoh.

Dua-duanya bisa kamu atur sendiri.`,
  tagar: t('umum') },

{ hari: 13, slot: 4, jenis: 'tunggal', nama: 'jual-goethe',
  gambar: [{ tipe: 'jual',
    pita: 'Untuk yang mengejar sertifikat',
    judul: 'Sepuluh ujian, <span class="emas">satu aplikasi.</span>',
    isi: 'IELTS · TOEFL · TOEIC · JLPT · TOPIK · HSK · Goethe · DELF · DELE · TORFL — beserta aturan nilai minimum tiap bagiannya.' }],
  caption: `Kalau targetmu sertifikat — bukan sekadar bisa ngobrol — ada satu hal yang sering diabaikan sampai hari ujian: aturan nilai minimum per bagian.

Di JLPT, Goethe, dan beberapa ujian lain, total nilai yang cukup TETAP bisa dinyatakan gagal kalau satu bagian ada di bawah ambang.

Banyak yang nilai membacanya tinggi, menyimaknya rendah, lalu kaget waktu hasilnya keluar.

Simulasi di SankaLingo GO meniru format dan ambang itu, termasuk aturan minimumnya — jadi kamu tahu bagian mana yang perlu diselamatkan sebelum mendaftar.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: '#ielts #toefl #jlpt #goethe #hsk ' + TAGAR.umum },

/* ══ HARI 14 ═════════════════════════════════════════════════════ */
{ hari: 14, slot: 1, jenis: 'tunggal', nama: 'rangkuman-pekan2',
  gambar: [{ tipe: 'daftar',
    pita: 'Rangkuman',
    judul: 'Enam aturan yang <span class="emas">tidak ada</span> di bahasa kita.',
    butir: [['Jamak -s','Inggris menaruhnya di ekor kata, kita mengulang katanya.'],
            ['は vs が','Jepang memisahkan topik dan penunjuk. Kita tidak.'],
            ['Tingkat kesopanan','Korea mengubah kata kerjanya. Kita mengubah kata sapaan.'],
            ['Kata bantu bilangan','Mandarin menuntutnya di tiap hitungan.'],
            ['Bilangan membalik jenis','Arab, tiga sampai sepuluh.'],
            ['Kasus di/ke','Jerman memakai kata depan yang sama.']],
    kaki: 'Semuanya terlewat karena tidak terasa kurang.' }],
  caption: `Dua pekan, enam aturan yang tidak punya padanan di bahasa Indonesia.

Ini yang membuat orang merasa "saya tidak berbakat": aturan-aturan ini tidak terasa kurang waktu kita bicara, karena otak kita tidak punya slot untuknya.

Jamak -s. は vs が. Tingkat kesopanan Korea. Kata bantu bilangan Mandarin. Bilangan Arab yang membalik jenis. Kasus di/ke Jerman.

Tidak ada satu pun dari ini yang bisa kamu sadari sendiri dengan "banyak-banyak nonton film". Harus ada yang menunjukkannya.

Itu inti dari cara kami menyusun pelajaran: bukan mengajarkan bahasa asing, tapi mengajarkannya untuk otak yang berbahasa Indonesia.

Pekan depan: kosakata yang benar-benar dipakai, dan persiapan ujian.`,
  tagar: t('umum') },

{ hari: 14, slot: 2, jenis: 'carousel', nama: 'uji-diri-pekan2',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '?',
      pita: 'Carousel · uji diri',
      judul: 'Lima soal tata bahasa. <span class="api">Berapa yang lolos?</span>',
      isi: 'Semuanya dari materi pekan ini. Jawab dalam hati, kunci di slide terakhir.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '2/6',
      pita: 'Soal 1',
      judul: 'Mana yang benar?',
      salah: 'I have sent it yesterday.', benar: 'I sent it yesterday.',
      sebab: 'Keterangan waktu yang <b>sudah selesai</b> menuntut past simple. Present perfect tidak boleh bertemu waktu tertentu.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '3/6',
      pita: 'Soal 2',
      judul: 'Partikel mana?',
      salah: '学校で行きます', benar: '学校に行きます',
      sebab: '<b>に</b> untuk arah tujuan, <b>で</b> untuk tempat kegiatan. Pergi itu arah.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '4/6',
      pita: 'Soal 3',
      judul: 'Sesudah modal',
      salah: 'She can swims.', benar: 'She can swim.',
      sebab: 'Sesudah can, will, must — kata kerjanya bentuk dasar. Tanpa -s, tanpa to.',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '5/6',
      pita: 'Soal 4 dan 5',
      judul: 'Dua terakhir',
      salah: 'In my house have three rooms. / Ich gehe in der Schule.', benar: 'There are three rooms in my house. / Ich gehe in die Schule.',
      sebab: 'Inggris menuntut subjek (<b>there</b>) untuk menyatakan keberadaan. Jerman membedakan arah dan tempat lewat kasus, bukan lewat kata depan.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Kalau banyak yang meleset',
      judul: 'Itu bukan kabar buruk.',
      isi: 'Kelimanya justru bagian yang paling jarang dijelaskan. Di dalam aplikasi, tiap topiknya dibedah dari sisi kebiasaan berbahasa Indonesia — 767 latihan, sembilan bahasa.' }],
  caption: `Uji diri pekan kedua: lima soal tata bahasa yang semuanya sudah kita bahas.

Jawab dalam hati dulu, jangan langsung geser ke kunci.

Kalau banyak yang meleset, itu justru wajar — kelimanya termasuk aturan yang paling jarang dijelaskan alasannya. Yang biasa terjadi: disuruh hafal, tanpa pernah diberi tahu kenapa versi salahnya terasa benar.

Berapa yang kamu dapat? 👇`,
  tagar: t('umum') },

{ hari: 14, slot: 3, jenis: 'tunggal', nama: 'relate-dua-minggu',
  gambar: [{ tipe: 'hook', glif: '14',
    pita: 'Dua pekan',
    judul: 'Kamu sudah tahu lebih banyak <span class="emas">dari yang kamu kira.</span>',
    isi: 'Lima aksara, enam aturan tata bahasa, sepuluh kata kantor, dan alasan di balik semuanya.<br><br><b>Semuanya dari scroll — tanpa kelas, tanpa membayar.</b>',
    kaki: 'Bayangkan dengan urutan yang tersusun.' }],
  caption: `Dua pekan feed ini, dan tanpa membayar apa pun kamu sudah dapat:

— lima aksara: hiragana, hangeul, hanzi, Arab, Kiril
— enam aturan tata bahasa yang tidak ada padanannya di bahasa kita
— sepuluh kata Inggris kantor yang sering salah
— alasan di balik semuanya, bukan cuma hafalannya

Itu bukan pamer. Itu supaya kamu tahu isi kepalanya seperti apa sebelum memutuskan membeli.

Kalau yang gratis saja sudah berguna, kamu bisa menebak isi yang berbayarnya seperti apa: 326 pelajaran berurutan, 767 latihan, sembilan bahasa.

Yang belum ikuti akun ini, sekarang saatnya. Pekan depan: kosakata yang benar-benar dipakai.`,
  tagar: t('umum') },

{ hari: 14, slot: 4, jenis: 'tunggal', nama: 'jual-pekan2-tutup',
  gambar: [{ tipe: 'banding',
    pita: 'Penutup pekan kedua',
    judul: 'Belajar sendiri, <span class="emas">atau dengan urutan?</span>',
    kiri: { judul: 'Sendiri dari internet', isi: 'Gratis, tapi acak. Hari ini kosakata, besok tenses, lusa lupa lagi. <b>Tidak ada yang menumpuk.</b>', cap: 'lelah, lambat' },
    kanan: { judul: 'SankaLingo GO', isi: '326 pelajaran berurutan, kartu ulang terjadwal, sembilan bahasa. <b>Rp199.000 sekali.</b>', cap: 'sekali bayar, selamanya' },
    kaki: 'Dua-duanya butuh usahamu. Yang satu tidak membuang usahanya.' }],
  caption: `Belajar dari internet gratis itu mungkin. Banyak yang berhasil.

Tapi perhatikan yang berhasil: hampir semuanya punya urutan sendiri. Mereka tidak lompat dari video tenses ke kosakata makanan ke tips logat dalam seminggu.

Yang tidak berhasil biasanya bukan kurang usaha — usahanya tersebar, jadi tidak ada yang menumpuk.

Yang kamu bayar di sini bukan informasinya. Informasi memang ada gratis di mana-mana. Yang kamu bayar: urutannya, penjelasan kenapa kamu salah, dan sistem yang memunculkan kata tepat sebelum kamu melupakannya.

Rp199.000 sekali. sankalingogo.com`,
  tagar: t('jual','umum') },
];
