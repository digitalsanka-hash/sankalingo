/* ── Pekan 3 · Kosakata yang dipakai dan persiapan ujian ──────────

   Pekan kedua membedah aturan. Pekan ini memberi bahan: kata dan
   kalimat yang benar-benar muncul di email kerja, di kasir toko, di
   ruang ujian — bukan kosakata buah-buahan yang dihafal lalu tidak
   pernah terpakai.                                                   */

import { TAGAR } from './pekan1.mjs';
const t = (...k) => k.map(x => TAGAR[x]).join(' ');

export const PEKAN3 = [
/* ══ HARI 15 ═════════════════════════════════════════════════════ */
{ hari: 15, slot: 1, jenis: 'tunggal', nama: 'kata-rapat',
  gambar: [{ tipe: 'daftar',
    pita: 'Inggris rapat',
    judul: 'Empat kalimat untuk <span class="emas">bertahan</span> di rapat bahasa Inggris.',
    butir: [['Could you repeat that?','Lebih baik daripada diam lalu salah paham sepanjang rapat.'],
            ['Let me make sure I understand…','Membeli waktu sambil terdengar teliti, bukan bingung.'],
            ['I\'d like to add something','Cara masuk ke pembicaraan tanpa memotong kasar.'],
            ['Can we circle back to this?','Menunda topik tanpa menolaknya. Sangat sering dipakai.']],
    kaki: 'Empat kalimat ini menyelamatkan lebih banyak rapat daripada seribu kosakata.' }],
  caption: `Rapat bahasa Inggris yang bikin panik biasanya bukan karena kosakatamu kurang. Karena kamu tidak punya kalimat untuk menyelamatkan diri.

Empat ini cukup:

"Could you repeat that?" — jauh lebih baik daripada diam lalu salah paham sejam penuh.

"Let me make sure I understand…" — membeli waktu, dan terdengar teliti bukan bingung.

"I'd like to add something." — cara masuk tanpa memotong.

"Can we circle back to this?" — menunda topik tanpa menolaknya.

Hafal empat ini sebelum rapat berikutnya. Simpan.`,
  tagar: t('inggris','karier') },

{ hari: 15, slot: 2, jenis: 'carousel', nama: 'inggris-kerja-nyata',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'W',
      pita: 'Carousel · Inggris kerja',
      judul: 'Kosakata kerja <span class="api">bukan kosakata buah.</span>',
      isi: 'Sebagian besar orang hafal apple, banana, strawberry — lalu diam waktu harus menulis email menagih pekerjaan yang telat.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Menagih tanpa kasar',
      judul: 'Follow up',
      butir: [['I\'m following up on…','Netral. Bukan menagih, cuma mengingatkan.'],
              ['Just a gentle reminder','Lebih halus lagi, dipakai untuk atasan atau klien.'],
              ['Any update on this?','Singkat, dipakai untuk rekan sebaya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Menolak tanpa menutup pintu',
      judul: 'Say no politely',
      butir: [['I\'m afraid that won\'t be possible','Penolakan tegas tapi sopan.'],
              ['Unfortunately, we can\'t accommodate…','Untuk permintaan klien yang tidak bisa dipenuhi.'],
              ['Would an alternative work?','Menolak sambil menawarkan jalan lain.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Minta kejelasan',
      judul: 'Tanpa terdengar bodoh',
      butir: [['Could you clarify what you mean by…','Menunjukkan kamu menyimak, bukan tidak paham.'],
              ['Just to confirm, you\'d like…','Merangkum ulang. Sangat aman untuk instruksi penting.'],
              ['What\'s the deadline for this?','Pertanyaan yang paling sering lupa ditanyakan.']],
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '5/6',
      pita: 'Jangan pakai ini',
      judul: 'Terjemahan langsung',
      salah: 'Thanks before. / Please kindly to send.', benar: 'Thanks in advance. / Please send.',
      sebab: '"Thanks before" tidak ada dalam bahasa Inggris — itu terjemahan dari "terima kasih sebelumnya". <b>Kindly</b> sudah sopan sendiri; menambah <i>please</i> dan <i>to</i> membuatnya janggal.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Selengkapnya',
      judul: 'Kosakata yang disusun per situasi.',
      isi: '1.364 kosakata Inggris di aplikasi disusun mengikuti kurikulum CEFR — bukan daftar acak, tapi urutan yang membuat kalimat pertamamu keluar lebih cepat.' }],
  caption: `Kosakata yang diajarkan di sekolah: apple, banana, strawberry.
Kosakata yang kamu butuhkan besok pagi: follow up, clarify, deadline, alternative.

Geser untuk 12 kalimat kerja yang paling sering dipakai — menagih tanpa kasar, menolak tanpa menutup pintu, minta kejelasan tanpa terdengar bodoh.

Slide 5 dua kesalahan yang paling menandai penutur Indonesia: "thanks before" dan "please kindly to send".

Simpan sebelum kirim email berikutnya. 📩`,
  tagar: t('inggris','karier') },

{ hari: 15, slot: 3, jenis: 'tunggal', nama: 'relate-diam-di-rapat',
  gambar: [{ tipe: 'hook', glif: '…',
    pita: 'Yang jarang diakui',
    judul: 'Diam di rapat <span class="api">bukan berarti tidak punya pendapat.</span>',
    isi: 'Kamu punya. Tapi menyusun kalimatnya butuh delapan detik, dan rapat sudah pindah topik di detik ketiga.<br><br><b>Yang hilang bukan idemu. Kecepatan menyusunnya.</b>',
    kaki: 'Dan kecepatan itu bisa dilatih.' }],
  caption: `Orang yang diam di rapat bahasa Inggris sering dikira tidak punya pendapat.

Padahal yang terjadi biasanya begini: kamu punya idenya, lengkap. Tapi menyusunnya jadi kalimat Inggris butuh delapan detik — dan rapat sudah pindah topik di detik ketiga.

Yang hilang bukan idemu. Kecepatan menyusunnya.

Kabar baiknya, kecepatan itu bukan bakat. Ia tumbuh dari pola kalimat yang sudah otomatis di kepala — bukan dari kosakata yang lebih banyak.

Itu sebabnya latihan yang benar bukan menghafal daftar kata, tapi mengulang pola sampai keluar tanpa dipikir.

Kamu pernah kehilangan momen bicara karena ini? 👇`,
  tagar: t('inggris','karier') },

{ hari: 15, slot: 4, jenis: 'tunggal', nama: 'jual-cefr',
  gambar: [{ tipe: 'jual',
    pita: 'Urutan yang jelas',
    judul: '<span class="emas">326 pelajaran</span> berurutan, A1 sampai C2.',
    isi: '44 unit yang menumpuk — dari perkenalan diri sampai wacana akademik. Kamu selalu tahu sedang di mana dan apa berikutnya.' }],
  caption: `Masalah belajar dari internet bukan kualitas materinya. Banyak yang bagus.

Masalahnya urutan. Hari ini video tenses, besok kosakata makanan, lusa tips logat. Tiga-tiganya bagus, tapi tidak menumpuk jadi apa pun.

326 pelajaran di SankaLingo GO disusun mengikuti CEFR A1–C2 dalam 44 unit. Tiap unit berdiri di atas unit sebelumnya.

Kamu selalu tahu ada di mana, dan apa yang berikutnya. Itu yang membuat orang bertahan sampai bulan ketiga — bukan motivasi.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 16 ═════════════════════════════════════════════════════ */
{ hari: 16, slot: 1, jenis: 'tunggal', nama: 'jepang-toko',
  gambar: [{ tipe: 'daftar',
    pita: 'Jepang praktis',
    judul: 'Empat kalimat untuk <span class="emas">bertahan</span> di toko Jepang.',
    butir: [['これをください','kore o kudasai — tolong yang ini'],
            ['いくらですか','ikura desu ka — berapa harganya'],
            ['カードで払えますか','kaado de haraemasu ka — bisa bayar kartu?'],
            ['袋はいりません','fukuro wa irimasen — tidak perlu kantong']],
    kaki: 'Empat kalimat ini menutup hampir semua transaksi.' }],
  caption: `Kalau kamu ke Jepang bulan depan dan cuma sempat hafal empat kalimat — hafal empat ini.

これをください (kore o kudasai) — tolong yang ini
いくらですか (ikura desu ka) — berapa harganya
カードで払えますか (kaado de haraemasu ka) — bisa bayar kartu?
袋はいりません (fukuro wa irimasen) — tidak perlu kantong

Yang terakhir sering dilupakan turis, padahal di Jepang kantong plastik berbayar dan kasir selalu bertanya.

Perhatikan pola ください — dipakai untuk meminta apa pun sambil menunjuk. Satu kalimat, ribuan situasi.

Simpan sebelum berangkat. 🇯🇵`,
  tagar: t('jepang','umum') },

{ hari: 16, slot: 2, jenis: 'carousel', nama: 'jepang-sopan-turis',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: 'す',
      pita: 'Carousel · Jepang praktis',
      judul: 'Sepuluh kalimat, <span class="api">satu minggu di Jepang.</span>',
      isi: 'Bukan kalimat buku pelajaran. Ini yang benar-benar kamu ucapkan di konbini, stasiun, dan restoran.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Di toko',
      judul: 'Tiga yang wajib',
      butir: [['これをください','kore o kudasai — tolong yang ini (sambil menunjuk)'],
              ['いくらですか','ikura desu ka — berapa harganya'],
              ['袋はいりません','fukuro wa irimasen — tidak usah kantong']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Di stasiun',
      judul: 'Tiga yang menyelamatkan',
      butir: [['〜はどこですか','~ wa doko desu ka — di mana ~?'],
              ['この電車は〜に行きますか','kono densha wa ~ ni ikimasu ka — kereta ini ke ~?'],
              ['すみません','sumimasen — permisi / maaf / terima kasih. Kata paling berguna di Jepang.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Di restoran',
      judul: 'Dua yang sering lupa',
      butir: [['お願いします','onegaishimasu — tolong ya (penutup permintaan apa pun)'],
              ['ごちそうさまでした','gochisousama deshita — diucapkan setelah selesai makan. Bukan formalitas; ini diperhatikan.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '?',
      pita: 'Satu hal yang perlu diingat',
      judul: 'Bahasa Jepang berhemat subjek.',
      isi: '"Saya mau yang ini" cukup jadi これをください.<br><br>Menambahkan 私は (saya) di tiap kalimat justru terdengar janggal — <b>seperti orang Indonesia yang bilang "saya" di setiap kalimat percakapan.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Selengkapnya',
      judul: 'Dari kalimat turis ke percakapan.',
      isi: 'Kamus Jepang 1.002 entri dengan bentuk sopan, bentuk て, dan lampau — lengkap dengan tombol suara di tiap bentuknya.' }],
  caption: `Sepuluh kalimat yang benar-benar dipakai di Jepang — bukan yang ada di buku pelajaran.

Slide 3: すみません, kata paling berguna di seluruh Jepang. Bisa berarti permisi, maaf, dan terima kasih tergantung nadanya.

Slide 4: ごちそうさまでした setelah makan. Banyak turis melewatkannya, padahal ini diperhatikan.

Slide 5 yang paling sering salah: bahasa Jepang berhemat subjek. Menambahkan 私は di tiap kalimat justru terdengar janggal.

Simpan buat perjalanan berikutnya. 🇯🇵`,
  tagar: t('jepang','umum') },

{ hari: 16, slot: 3, jenis: 'tunggal', nama: 'koreksi-sumimasen',
  gambar: [{ tipe: 'koreksi',
    pita: 'Jepang',
    judul: 'Bukan cuma <span class="api">"maaf".</span>',
    salah: 'すみません = maaf (saja)', benar: 'すみません = permisi / maaf / terima kasih',
    sebab: 'Bahasa Indonesia memisahkan ketiganya. Jepang memakai satu kata yang artinya bergeser menurut situasi — dan penutur Indonesia sering memakainya terlalu sempit, cuma saat minta maaf, padahal ini <b>kata pembuka percakapan</b> yang paling umum.',
    kaki: 'Dipanggil pelayan? すみません. Nabrak orang? すみません. Dibantu orang? すみません.' }],
  caption: `すみません bukan cuma "maaf".

Ini kata paling berguna di Jepang, dan orang Indonesia biasanya memakainya terlalu sempit.

Memanggil pelayan → すみません
Menyenggol orang → すみません
Dibantu orang asing → すみません (terima kasih yang bercampur "maaf merepotkan")
Mau bertanya arah → dibuka dengan すみません

Bahasa Indonesia memisahkan permisi, maaf, dan terima kasih. Jepang memakai satu kata yang artinya digeser oleh situasi dan nada.

Kalau kamu cuma hafal satu kata Jepang sebelum berangkat, hafal yang ini.`,
  tagar: t('jepang','umum') },

{ hari: 16, slot: 4, jenis: 'tunggal', nama: 'jual-suara',
  gambar: [{ tipe: 'jual',
    pita: 'Bukan cuma teks',
    judul: 'Tiap bentuk kata <span class="emas">bisa didengar.</span>',
    isi: '行く · 行きます · 行って · 行った — empat bentuk, empat tombol suara. Karena membaca romaji tidak pernah cukup untuk tahu bunyinya.' }],
  caption: `Masalah belajar bahasa dari teks: kamu hafal tulisannya, tapi tidak tahu bunyinya.

Lalu waktu bicara dengan penutur asli, mereka tidak paham — dan kamu menyimpulkan "saya memang tidak bisa".

Padahal yang salah cuma bunyinya, dan itu paling cepat diperbaiki.

Di SankaLingo GO, tiap bentuk kata punya tombol suaranya sendiri. Bukan cuma kata dasarnya:

行く (iku) · 行きます (ikimasu) · 行って (itte) · 行った (itta)

Empat bentuk, empat tombol. Termasuk yang tidak beraturan — yang justru paling sering dipakai.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 17 ═════════════════════════════════════════════════════ */
{ hari: 17, slot: 1, jenis: 'tunggal', nama: 'korea-travel',
  gambar: [{ tipe: 'daftar',
    pita: 'Korea praktis',
    judul: 'Empat kalimat <span class="emas">wajib</span> di Korea.',
    butir: [['이거 주세요','igeo juseyo — tolong yang ini'],
            ['얼마예요?','eolmayeyo — berapa harganya'],
            ['화장실 어디예요?','hwajangsil eodiyeyo — toilet di mana'],
            ['괜찮아요','gwaenchanayo — tidak apa-apa / cukup, terima kasih']],
    kaki: '괜찮아요 bisa berarti "ya, boleh" atau "tidak usah" — tergantung nada.' }],
  caption: `Empat kalimat Korea yang paling sering dipakai turis:

이거 주세요 (igeo juseyo) — tolong yang ini
얼마예요? (eolmayeyo) — berapa harganya
화장실 어디예요? (hwajangsil eodiyeyo) — toilet di mana
괜찮아요 (gwaenchanayo) — tidak apa-apa / cukup, terima kasih

Yang terakhir menarik: 괜찮아요 bisa berarti "ya, boleh" ATAU "tidak usah", tergantung nada dan situasi. Persis seperti "nggak apa-apa" dalam bahasa kita.

Perhatikan pola 주세요 — sama seperti ください dalam bahasa Jepang. Tunjuk barangnya, ucapkan itu, selesai.

Simpan. 🇰🇷`,
  tagar: t('korea','umum') },

{ hari: 17, slot: 2, jenis: 'carousel', nama: 'korea-drama-vs-nyata',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: '드',
      pita: 'Carousel · Korea',
      judul: 'Yang kamu pelajari dari drama, <span class="api">dan yang tidak.</span>',
      isi: 'Drama guru yang bagus untuk telinga dan kosakata emosi. Tapi ada tiga hal yang justru dilatihnya salah.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/5',
      pita: 'Yang dilatih benar',
      judul: 'Drama unggul di sini',
      butir: [['Telinga','Kecepatan bicara asli, jauh lebih cepat dari audio buku pelajaran.'],
              ['Kosakata emosi','진짜, 대박, 어떡해 — kata yang jarang masuk kurikulum tapi sering dipakai.'],
              ['Nada dan ekspresi','Bagian yang tidak bisa dipelajari dari teks.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/5',
      pita: 'Yang dilatih salah',
      judul: 'Hati-hati tiga ini',
      butir: [['Tingkat bicara','Drama penuh 반말 antarteman. Dipakai ke orang tua atau atasan, itu kasar.'],
              ['Kalimat dramatis','"너 없이 못 살아" tidak dipakai di kehidupan nyata sesering di drama.'],
              ['Tata bahasa','Percakapan drama membuang partikel. Kamu perlu tahu bentuk lengkapnya dulu.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: '+',
      pita: 'Cara memakai drama dengan benar',
      judul: 'Struktur dulu, drama kemudian.',
      isi: 'Pelajari pola dasarnya lebih dulu, lalu tonton drama untuk melihat pola itu hidup.<br><br><b>Menonton tanpa struktur = mengumpulkan bahan bakar tanpa punya mesin.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Strukturnya',
      judul: 'Tiga tingkat bicara, dan kapan memakainya.',
      isi: 'Kamus Korea 1.002 entri dengan bentuk dasar, sopan, dan lampau tiap kata kerja — plus penjelasan kesopanan yang tidak diajarkan drama.' }],
  caption: `Drama Korea guru yang bagus — untuk sebagian hal, dan guru yang buruk untuk sebagian lain.

Bagus untuk: telinga, kosakata emosi, nada bicara.
Buruk untuk: tingkat kesopanan, dan tata bahasa lengkap.

Slide 3 yang paling penting: drama penuh percakapan antarteman yang memakai bentuk santai. Kalau kamu meniru itu ke orang Korea yang lebih tua, kamu terdengar kurang ajar — bukan akrab.

Slide 4 cara memakainya dengan benar.

Sudah berapa drama tapi masih baca subtitle? 👇`,
  tagar: t('korea','umum') },

{ hari: 17, slot: 3, jenis: 'tunggal', nama: 'relate-lupa-lagi',
  gambar: [{ tipe: 'hook', glif: '↺',
    pita: 'Yang bikin frustrasi',
    judul: 'Hafal hari ini, <span class="api">lupa tiga hari lagi.</span>',
    isi: 'Itu bukan tanda kamu bodoh. Itu cara kerja ingatan: apa pun yang tidak diulang akan dibuang, termasuk hal yang kamu pahami dengan sempurna kemarin.<br><br><b>Yang membedakan orang yang maju: bukan menghafal lebih keras, tapi mengulang di saat yang tepat.</b>',
    kaki: 'Terlalu cepat buang waktu. Terlalu lambat mulai dari nol.' }],
  caption: `"Kemarin hafal, hari ini lupa lagi. Emang otak saya nggak cocok buat bahasa."

Bukan. Itu cara kerja ingatan semua orang.

Apa pun yang tidak diulang akan dibuang otak — termasuk hal yang kemarin kamu pahami dengan sempurna. Ini berlaku untuk semua orang, di semua umur.

Yang membedakan orang yang maju bukan menghafal lebih keras. Tapi mengulang di saat yang tepat: persis sebelum kata itu hilang.

Terlalu cepat, kamu buang waktu mengulang yang masih ingat.
Terlalu lambat, kamu mulai dari nol lagi.

Itu sebabnya kartu ulang terjadwal ada di aplikasi ini — supaya kamu tidak perlu menebak kapan waktunya.`,
  tagar: t('umum') },

{ hari: 17, slot: 4, jenis: 'tunggal', nama: 'jual-per-bahasa',
  gambar: [{ tipe: 'banding',
    pita: 'Hitungan sederhana',
    judul: 'Rp40.000 <span class="emas">per bahasa.</span>',
    kiri: { judul: 'Kursus satu bahasa', isi: 'Ratusan ribu sampai jutaan per level, dan <b>berhenti begitu kelasnya selesai</b>.', cap: 'per level, per bahasa' },
    kanan: { judul: 'SankaLingo GO', isi: 'Rp199.000 untuk lima bahasa. <b>Tanpa level tambahan, tanpa perpanjangan.</b>', cap: '≈ Rp40.000 per bahasa' },
    kaki: 'Paket sembilan bahasa: sekitar Rp33.000 per bahasa.' }],
  caption: `Rp199.000 dibagi lima bahasa = sekitar Rp40.000 per bahasa.
Rp299.000 dibagi sembilan = sekitar Rp33.000 per bahasa.

Sebagai perbandingan: satu kali makan di luar.

Yang membuat angka ini masuk akal bukan murahnya, tapi tidak adanya lanjutan. Tidak ada level dua yang harus dibeli lagi, tidak ada perpanjangan tahunan, tidak ada bahasa yang dijual terpisah.

Sekali bayar, selesai.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 18 ═════════════════════════════════════════════════════ */
{ hari: 18, slot: 1, jenis: 'tunggal', nama: 'ielts-bagian',
  gambar: [{ tipe: 'daftar',
    pita: 'IELTS',
    judul: 'Bagian yang <span class="emas">paling cepat</span> dinaikkan.',
    butir: [['Listening','Paling cepat naik. Formatnya berpola, dan latihan rutin langsung terasa.'],
            ['Reading','Naik lewat strategi, bukan kosakata: skimming, scanning, dan urutan menjawab.'],
            ['Writing','Paling lambat. Butuh koreksi dari orang, bukan cuma latihan sendiri.'],
            ['Speaking','Naik kalau dilatih bicara, bukan dibaca. Rekam dirimu sendiri.']],
    kaki: 'Kalau waktumu tinggal sebulan, dahulukan listening dan reading.' }],
  caption: `Kalau waktu persiapan IELTS-mu tinggal sebulan, jangan bagi rata ke empat bagian.

Listening — paling cepat naik. Formatnya berpola, dan latihan rutin langsung terasa hasilnya.

Reading — naik lewat strategi, bukan kosakata. Skimming, scanning, dan urutan menjawab lebih menentukan daripada jumlah kata yang kamu tahu.

Writing — paling lambat. Butuh koreksi dari orang lain; latihan sendiri tanpa umpan balik sering justru mengulang kesalahan yang sama.

Speaking — naik kalau dilatih dengan bicara, bukan dibaca. Rekam dirimu, dengarkan lagi.

Dahulukan dua yang pertama.`,
  tagar: '#ielts #toefl #beasiswa ' + TAGAR.inggris },

{ hari: 18, slot: 2, jenis: 'carousel', nama: 'ielts-strategi',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '7',
      pita: 'Carousel · IELTS',
      judul: 'Band 6.5 <span class="api">bukan soal pintar.</span>',
      isi: 'Banyak yang bahasa Inggrisnya bagus tapi skornya rendah — karena ujian ini menguji strategi sebanyak ia menguji bahasa.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Listening',
      judul: 'Tiga hal yang menaikkan skor',
      butir: [['Baca soal dulu','Waktu jeda dipakai membaca soal berikutnya, bukan mengecek jawaban sebelumnya.'],
              ['Tulis sambil dengar','Rekamannya cuma sekali. Menunggu sampai paham penuh = kehilangan jawaban.'],
              ['Perhatikan batas kata','"No more than two words" — tiga kata langsung salah meski isinya benar.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Reading',
      judul: 'Yang paling sering bikin kehabisan waktu',
      butir: [['Membaca seluruh teks dulu','Salah. Baca soal dulu, lalu cari jawabannya di teks.'],
              ['Terpaku pada satu soal','Satu soal sulit menghabiskan waktu tiga soal mudah. Lewati, kembali nanti.'],
              ['True/False/Not Given','Bagian yang paling sering salah. "Not Given" bukan berarti salah — berarti teks tidak menyebutnya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Writing Task 2',
      judul: 'Empat paragraf, selesai',
      butir: [['Pendahuluan','Parafrase soalnya, lalu nyatakan posisimu. Dua kalimat cukup.'],
              ['Dua paragraf isi','Satu ide utama per paragraf, dengan satu contoh nyata.'],
              ['Penutup','Ulangi posisimu dengan kata lain. Jangan menambah ide baru di sini.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Speaking',
      judul: 'Yang dinilai bukan kebenaran pendapatmu',
      butir: [['Kelancaran','Lebih baik salah tapi mengalir daripada benar tapi terpotong-potong.'],
              ['Jangan jawab pendek','"Do you like music?" — "Yes" saja menurunkan skor. Jelaskan alasan dan contoh.'],
              ['Boleh mengarang','Penguji tidak memeriksa kebenaran ceritamu. Yang dinilai bahasanya.']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Latihannya',
      judul: 'Simulasi format aslinya.',
      isi: 'IELTS, TOEFL, dan TOEIC di aplikasi meniru format dan penilaiannya — termasuk aturan nilai minimum per bagian yang sering menggagalkan orang meski totalnya cukup.' }],
  caption: `Band 6.5 bukan soal pintar. Banyak yang bahasa Inggrisnya bagus tapi skornya di bawah target, karena IELTS menguji strategi sebanyak ia menguji bahasa.

Slide 3, kesalahan paling mahal di Reading: membaca seluruh teks dulu. Waktunya tidak akan cukup. Baca soal dulu, baru cari jawabannya.

Slide 5, yang jarang diberitahukan: di Speaking, penguji tidak memeriksa kebenaran ceritamu. Yang dinilai bahasanya. Kamu boleh mengarang contoh.

Simpan buat persiapan. Ada yang lagi kejar band berapa? 👇`,
  tagar: '#ielts #beasiswa #toefl ' + TAGAR.inggris },

{ hari: 18, slot: 3, jenis: 'tunggal', nama: 'koreksi-ielts-writing',
  gambar: [{ tipe: 'koreksi',
    pita: 'IELTS Writing',
    judul: 'Kalimat yang <span class="api">menurunkan</span> skormu.',
    salah: 'Nowadays, technology is very important in our life.', benar: 'Smartphone ownership in Indonesia rose sharply between 2015 and 2023.',
    sebab: 'Kalimat pembuka yang terlalu umum — <b>nowadays, in this modern era, technology is important</b> — dihitung sebagai pengisi tanpa isi. Penguji IELTS melihatnya ribuan kali. Ganti dengan pernyataan spesifik yang langsung menyentuh topik soal.',
    kaki: 'Satu kalimat pembuka bisa membedakan band 6 dan band 7.' }],
  caption: `"Nowadays, technology is very important in our life."

Kalimat ini muncul di ribuan lembar jawaban IELTS setiap tahun. Penguji hafal.

Masalahnya bukan salah grammar — kalimatnya benar. Masalahnya kosong: ia tidak menyampaikan apa pun yang khusus tentang topik yang ditanyakan.

Ganti dengan sesuatu yang spesifik:
"Smartphone ownership in Indonesia rose sharply between 2015 and 2023."

Aturannya sederhana: kalau kalimat pembukamu bisa dipakai untuk topik apa pun, ia tidak berguna untuk topik ini.

Satu kalimat pembuka bisa jadi beda antara band 6 dan band 7.`,
  tagar: '#ielts #writing #beasiswa ' + TAGAR.inggris },

{ hari: 18, slot: 4, jenis: 'tunggal', nama: 'jual-simulasi',
  gambar: [{ tipe: 'jual',
    pita: 'Sebelum bayar ujian resmi',
    judul: 'Ujian IELTS <span class="emas">jutaan rupiah.</span> Simulasinya di sini.',
    isi: 'Tahu posisi nilaimu sebelum mendaftar. Sepuluh simulasi ujian resmi, termasuk aturan nilai minimum tiap bagian.' }],
  caption: `Biaya ujian IELTS resmi jutaan rupiah. Sekali gagal, bayar lagi penuh.

Yang bikin mahal bukan cuma uangnya — tapi jarak antara "merasa siap" dan "benar-benar siap", yang baru ketahuan setelah hasilnya keluar.

Simulasi di SankaLingo GO meniru format dan penilaian sepuluh ujian resmi: IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, Goethe, DELF, DELE, TORFL.

Termasuk aturan nilai minimum per bagian — yang membuat banyak orang gagal meski total nilainya cukup.

Soalnya ditulis sendiri, bukan bocoran soal asli. Yang ditiru formatnya.

Rp199.000 sekali bayar. sankalingogo.com`,
  tagar: '#ielts #toefl #jlpt ' + TAGAR.umum },

/* ══ HARI 19 ═════════════════════════════════════════════════════ */
{ hari: 19, slot: 1, jenis: 'tunggal', nama: 'toefl-vs-ielts',
  gambar: [{ tipe: 'banding', netral: true,
    pita: 'Pilih yang mana',
    judul: 'TOEFL <span class="emas">atau</span> IELTS?',
    kiri: { judul: 'TOEFL iBT', isi: 'Seluruhnya di komputer. Speaking direkam, bukan tatap muka. Aksen Amerika. <b>Cocok untuk yang gugup bicara dengan orang.</b>', cap: 'kampus AS' },
    kanan: { judul: 'IELTS', isi: 'Speaking tatap muka dengan penguji. Aksen Britania dan lainnya. <b>Cocok untuk yang lebih lancar bicara langsung.</b>', cap: 'Inggris, Australia, Eropa' },
    kaki: 'Cek dulu syarat kampus atau instansi tujuanmu — sebagian hanya menerima salah satu.' }],
  caption: `TOEFL atau IELTS? Jawabannya tergantung dua hal, dan hanya satu yang soal kemampuan.

Pertama, syarat tujuanmu. Sebagian kampus dan instansi hanya menerima salah satu. Cek dulu sebelum belajar — ini yang paling sering terlewat.

Kedua, gaya ujiannya:

TOEFL iBT — seluruhnya di komputer, speaking direkam. Cocok kalau kamu gugup bicara berhadapan dengan orang.

IELTS — speaking tatap muka dengan penguji sungguhan. Cocok kalau kamu justru lebih lancar bicara langsung daripada bicara ke mikrofon.

Kemampuan bahasamu sama. Yang berbeda cuma cara ia diukur.`,
  tagar: '#toefl #ielts #beasiswa ' + TAGAR.inggris },

{ hari: 19, slot: 2, jenis: 'carousel', nama: 'beasiswa-syarat-bahasa',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '$',
      pita: 'Carousel · beasiswa',
      judul: 'Beasiswa gagal <span class="api">di syarat bahasa,</span> bukan di nilai.',
      isi: 'Banyak pelamar dengan IPK bagus dan esai kuat tersaring lebih awal — karena sertifikat bahasanya belum ada saat pendaftaran dibuka.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Urutan yang benar',
      judul: 'Bahasa dulu, selalu',
      butir: [['Sertifikat butuh waktu','Dari nol ke IELTS 6.5 bisa berbulan-bulan. Pendaftaran beasiswa cuma buka beberapa minggu.'],
              ['Masa berlaku terbatas','Sertifikat IELTS dan TOEFL umumnya berlaku dua tahun. Ambil terlalu awal juga masalah.'],
              ['Bisa dipakai berkali-kali','Satu sertifikat untuk beberapa pendaftaran sekaligus.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Yang sering salah kaprah',
      judul: 'Tiga hal',
      butir: [['"Nanti kalau lolos administrasi"','Sertifikat biasanya syarat administrasi itu sendiri.'],
              ['"Yang penting IPK tinggi"','IPK tinggi tanpa sertifikat tidak akan dibaca.'],
              ['"Nunggu ada dana"','Biaya ujian tetap, tapi waktu persiapannya yang mahal kalau ditunda.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Selain Inggris',
      judul: 'Beasiswa yang menuntut bahasa lain',
      butir: [['Jepang (MEXT)','JLPT jadi nilai tambah besar, bahkan untuk program berbahasa Inggris.'],
              ['Korea (GKS)','TOPIK level tertentu sering jadi syarat, dan ada tahun persiapan bahasa.'],
              ['Jerman (DAAD)','Banyak program menuntut sertifikat Jerman B1–B2.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '⏳',
      pita: 'Hitung mundurnya',
      judul: 'Kuotanya dibuka setahun sekali.',
      isi: 'Melewatkan satu siklus berarti menunggu dua belas bulan penuh — dengan kemampuan yang sama persis, kalau tidak dimulai hari ini.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Persiapannya',
      judul: 'Sepuluh ujian, satu aplikasi.',
      isi: 'IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, Goethe, DELF, DELE, TORFL — beserta aturan nilai minimum tiap bagiannya.' }],
  caption: `Pelamar beasiswa dengan IPK 3.8 dan esai kuat tetap bisa tersaring di minggu pertama — karena sertifikat bahasanya belum ada.

Slide 2 urutan yang benar: bahasa selalu didahulukan. Bukan karena paling penting, tapi karena paling lama.

Dari nol ke IELTS 6.5 bisa berbulan-bulan. Pendaftaran beasiswa cuma buka beberapa minggu.

Slide 4 untuk yang mengincar Jepang, Korea, atau Jerman — masing-masing punya syarat bahasanya sendiri.

Ada yang lagi persiapan beasiswa? Tujuan ke mana? 👇`,
  tagar: '#beasiswa #lpdp #mext #daad ' + TAGAR.karier },

{ hari: 19, slot: 3, jenis: 'tunggal', nama: 'relate-sertifikat-basi',
  gambar: [{ tipe: 'hook', glif: '2',
    pita: 'Yang sering dilupakan',
    judul: 'Sertifikat bahasa <span class="api">punya tanggal kedaluwarsa.</span>',
    isi: 'IELTS dan TOEFL umumnya berlaku dua tahun. Ambil terlalu dini, dan ia mati sebelum kamu sempat memakainya.<br><br><b>Kemampuannya tidak ikut mati — cuma kertasnya.</b>',
    kaki: 'Itu sebabnya kemampuan lebih berharga daripada sertifikat.' }],
  caption: `Sertifikat IELTS dan TOEFL umumnya berlaku dua tahun. Setelah itu harus ujian lagi — bayar lagi.

Yang tidak kedaluwarsa: kemampuannya.

Ini yang sering terbalik di kepala orang. Kita mengejar sertifikat lalu berhenti belajar begitu dapat, seolah kertasnya yang berharga.

Padahal kalau kemampuannya benar-benar ada, ujian ulang cuma soal jadwal dan biaya. Kalau kemampuannya kejar tayang, dua tahun lagi kamu mulai dari nol.

Kejar kemampuannya. Sertifikatnya akan ikut, dan bisa diulang kapan saja.`,
  tagar: '#ielts #toefl #beasiswa ' + TAGAR.umum },

{ hari: 19, slot: 4, jenis: 'tunggal', nama: 'jual-investasi',
  gambar: [{ tipe: 'jual',
    pita: 'Investasi jangka panjang',
    judul: 'Kemampuan bahasa <span class="emas">tidak pernah basi.</span>',
    isi: 'Sertifikat kedaluwarsa dua tahun. Kursus habis masa berlakunya. Kemampuan yang sudah masuk ke kepalamu menempel seumur hidup — dan membuka pintu berikutnya tanpa dibeli ulang.' }],
  caption: `Keterampilan teknis punya umur. Perangkat lunak berganti, tren berganti, sertifikasi harus diperbarui.

Bahasa tidak begitu.

Bahasa Inggris yang kamu kuasai hari ini masih akan berguna dua puluh tahun lagi, dalam pekerjaan yang belum ada namanya sekarang.

Itu sebabnya bahasa termasuk investasi paling awet yang bisa kamu beli — dan kenapa membelinya sekali seumur hidup lebih masuk akal daripada menyewanya bulanan.

Rp199.000 untuk lima bahasa. Rp299.000 untuk sembilan.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 20 ═════════════════════════════════════════════════════ */
{ hari: 20, slot: 1, jenis: 'tunggal', nama: 'jlpt-level',
  gambar: [{ tipe: 'daftar',
    pita: 'JLPT',
    judul: 'Level mana yang <span class="emas">sebenarnya</span> kamu butuh?',
    butir: [['N5 – N4','Dasar. Cukup untuk wisata dan percakapan sederhana. Bukan untuk kerja.'],
            ['N3','Ambang praktis. Mulai bisa mengikuti percakapan sehari-hari di tempat kerja.'],
            ['N2','Syarat paling umum untuk kerja di perusahaan Jepang.'],
            ['N1','Untuk pekerjaan yang menuntut membaca dokumen dan menulis laporan.']],
    kaki: 'Kalau targetmu kerja, N2 biasanya angka yang dicari.' }],
  caption: `Salah target level JLPT membuang waktu berbulan-bulan.

N5–N4 — dasar. Cukup untuk wisata dan percakapan sederhana. Hampir tidak pernah cukup untuk melamar kerja.

N3 — ambang praktis. Mulai bisa mengikuti percakapan sehari-hari di tempat kerja.

N2 — ini yang paling sering diminta perusahaan Jepang. Kalau targetmu kerja, ini angkanya.

N1 — untuk pekerjaan yang menuntut membaca dokumen resmi dan menulis laporan.

Banyak orang mengejar N5 dulu "biar ada sertifikat", padahal untuk lamaran kerja itu jarang berpengaruh. Kalau tujuanmu jelas, langsung bidik N3 atau N2.`,
  tagar: '#jlpt #bahasajepang #kerjadijepang ' + TAGAR.jepang },

{ hari: 20, slot: 2, jenis: 'carousel', nama: 'ujian-asia',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '級',
      pita: 'Carousel · ujian Asia',
      judul: 'JLPT, TOPIK, HSK: <span class="api">mana yang paling cepat?</span>',
      isi: 'Ketiganya menguji hal berbeda dengan cara berbeda. Salah memilih strategi membuat persiapanmu dua kali lebih lama.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'JLPT · Jepang',
      judul: 'Yang perlu diketahui',
      butir: [['Tidak ada speaking','Hanya membaca, menyimak, dan tata bahasa. Kamu bisa lulus N2 tanpa bisa bicara.'],
              ['Ada nilai minimum per bagian','Total cukup tetap gagal kalau satu bagian di bawah ambang.'],
              ['Kanji penentu','Di N2 dan N1, kanji yang membedakan lulus dan tidak.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'TOPIK · Korea',
      judul: 'Bedanya dengan JLPT',
      butir: [['Ada menulis','TOPIK II menuntut mengarang. Ini yang paling sering menurunkan nilai.'],
              ['Level ditentukan skor','Kamu tidak mendaftar level tertentu — skormu yang menentukan level yang didapat.'],
              ['Hangeul cepat, kosakata lambat','Aksaranya seminggu. Kosakatanya yang butuh waktu.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'HSK · Mandarin',
      judul: 'Yang membuatnya berbeda',
      butir: [['Tata bahasa paling sederhana','Tidak ada tenses, tidak ada perubahan bentuk kata.'],
              ['Karakter penentu segalanya','Seluruh kesulitan HSK terletak di jumlah karakter yang harus dikenali.'],
              ['Nada tidak diuji langsung','Tapi menentukan pemahaman menyimakmu.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '=',
      pita: 'Jawabannya',
      judul: 'Yang paling cepat: yang paling kamu butuhkan.',
      isi: 'Ujian yang punya alasan konkret — beasiswa, kerja, pindah negara — selalu selesai lebih cepat daripada ujian yang diambil "biar ada".<br><br><b>Motivasi menentukan kecepatan lebih besar daripada kesulitan bahasanya.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Persiapan ketiganya',
      judul: 'Format aslinya ditiru, termasuk ambang nilainya.',
      isi: 'JLPT, TOPIK, dan HSK di aplikasi — bersama tujuh ujian lain. Soalnya ditulis sendiri; yang ditiru formatnya, karena soal ujian resmi berhak cipta.' }],
  caption: `JLPT, TOPIK, HSK — tiga ujian yang paling banyak diambil orang Indonesia, dan tiga cara yang berbeda menguji.

Slide 2: kamu bisa lulus JLPT N2 tanpa bisa bicara sepatah pun. Tidak ada bagian speaking. Ini kabar baik dan buruk sekaligus.

Slide 3: TOPIK punya bagian menulis, dan di situ nilai paling sering jatuh.

Slide 4: seluruh kesulitan HSK ada di karakter. Tata bahasanya justru paling sederhana di antara ketiganya.

Kamu lagi siap-siap ujian yang mana? 👇`,
  tagar: '#jlpt #topik #hsk ' + TAGAR.umum },

{ hari: 20, slot: 3, jenis: 'tunggal', nama: 'koreksi-kanji-vs-hanzi',
  gambar: [{ tipe: 'koreksi',
    pita: 'Salah kaprah',
    judul: 'Kanji dan hanzi <span class="api">bukan hal yang sama.</span>',
    salah: 'Bisa Mandarin = otomatis bisa baca Jepang', benar: 'Bentuknya mirip, bacaannya berbeda total',
    sebab: 'Jepang meminjam karakter Tionghoa, tapi memberinya bacaan sendiri — dan sering <b>lebih dari satu bacaan</b> per karakter. 生 dibaca sei, shou, i, u, nama, ki tergantung katanya. Di Mandarin, 生 hampir selalu shēng.',
    kaki: 'Yang bisa dipinjam cuma tebakan arti, bukan cara membacanya.' }],
  caption: `"Kalau sudah bisa Mandarin, otomatis bisa baca Jepang dong?"

Sebagian, dan bagian yang sebagian itu menipu.

Bentuk karakternya memang banyak yang sama, dan artinya sering berdekatan. Jadi kamu bisa menebak isi tulisan.

Tapi bacaannya berbeda total. Lebih parah lagi: satu kanji Jepang bisa punya banyak bacaan.

生 dibaca sei, shou, i, u, nama, ki — tergantung kata dan pasangannya.
Di Mandarin, 生 hampir selalu shēng.

Jadi orang yang bisa Mandarin punya keuntungan besar dalam menebak arti tulisan Jepang, dan hampir tidak punya keuntungan dalam membacanya keras-keras.`,
  tagar: '#kanji #hanzi #jlpt #hsk ' + TAGAR.umum },

{ hari: 20, slot: 4, jenis: 'tunggal', nama: 'jual-sembilan-sekali',
  gambar: [{ tipe: 'jual',
    pita: 'Kenapa sekaligus',
    judul: 'Bahasa keduamu <span class="emas">jauh lebih cepat</span> dari yang pertama.',
    isi: 'Begitu kamu paham cara bahasa bekerja — pola, akar kata, urutan — bahasa berikutnya masuk lebih cepat. Punya sembilan sejak awal berarti tidak perlu menunggu izin dompet untuk mencoba.' }],
  caption: `Orang yang sudah menguasai satu bahasa asing hampir selalu belajar bahasa kedua lebih cepat.

Bukan karena otaknya berubah. Karena dia sudah tahu caranya belajar bahasa: mengenali pola, tidak panik melihat aturan asing, tahu kapan harus menghafal dan kapan harus memahami.

Itu sebabnya punya sembilan bahasa sekaligus masuk akal — bukan supaya kamu belajar sembilan-sembilannya sekarang, tapi supaya waktu bahasa kedua terasa memanggil, tidak ada yang perlu dibeli lagi.

Rp199.000 untuk lima. Rp299.000 untuk sembilan.

sankalingogo.com`,
  tagar: t('jual','umum') },

/* ══ HARI 21 ═════════════════════════════════════════════════════ */
{ hari: 21, slot: 1, jenis: 'tunggal', nama: 'rangkuman-pekan3',
  gambar: [{ tipe: 'daftar',
    pita: 'Rangkuman',
    judul: 'Tiga pekan, <span class="emas">bahan yang bisa dipakai.</span>',
    butir: [['Kalimat rapat dan email','Empat penyelamat rapat, dua belas kalimat kerja.'],
            ['Kalimat turis','Jepang dan Korea, untuk toko, stasiun, restoran.'],
            ['Strategi ujian','IELTS, TOEFL, JLPT, TOPIK, HSK — dan bagian mana yang paling cepat naik.'],
            ['Urutan beasiswa','Bahasa dulu, selalu — karena itu yang paling lama.']],
    kaki: 'Semuanya bisa dipakai minggu ini, bukan tahun depan.' }],
  caption: `Tiga pekan. Ringkasan yang bisa kamu pakai minggu ini:

— Empat kalimat penyelamat rapat bahasa Inggris
— Dua belas kalimat email kerja yang sering salah
— Kalimat turis Jepang dan Korea untuk toko dan stasiun
— Strategi IELTS: dahulukan listening dan reading
— Level JLPT yang benar-benar dicari perusahaan (N2)
— Urutan beasiswa: bahasa dulu, karena itu yang paling lama

Kalau kamu baru menemukan akun ini, gulir ke bawah. Semuanya masih di sana, gratis.

Pekan depan: bagian yang jarang dibahas — bahasa dan uang.`,
  tagar: t('umum') },

{ hari: 21, slot: 2, jenis: 'carousel', nama: 'rencana-90-hari',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '90',
      pita: 'Carousel · rencana nyata',
      judul: '90 hari. <span class="api">Bukan janji fasih.</span>',
      isi: 'Tidak ada yang bisa menjanjikan kamu fasih dalam tiga bulan dengan jujur. Yang bisa dijanjikan: sampai di mana kamu kalau konsisten 30 menit sehari.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Hari 1–30',
      judul: 'Fondasi',
      butir: [['Aksara sampai otomatis','Untuk bahasa beraksara lain. Jangan lanjut sebelum ini lancar.'],
              ['200–300 kosakata inti','Kata yang muncul di hampir semua kalimat, bukan kata langka.'],
              ['Pola kalimat dasar','Subjek-kata kerja-objek, negatif, tanya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Hari 31–60',
      judul: 'Merangkai',
      butir: [['Bentuk kata kerja','Lampau, sedang, akan. Bagian yang membuat kalimatmu hidup.'],
              ['Kalimat majemuk','Menyambung dua ide: karena, tetapi, kalau.'],
              ['Menyimak bahan asli','Konten pendek dulu, dengan teks pendamping.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Hari 61–90',
      judul: 'Memakai',
      butir: [['Bicara ke diri sendiri','Ceritakan harimu dalam bahasa itu, keras-keras. Terdengar konyol, sangat efektif.'],
              ['Menulis tiga kalimat sehari','Tentang apa pun. Tulis, periksa, ulangi besok.'],
              ['Simulasi ujian pertama','Untuk tahu posisi, bukan untuk lulus.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '30',
      pita: 'Yang menentukan',
      judul: '30 menit sehari > 4 jam seminggu sekali.',
      isi: 'Ingatan menumpuk lewat pengulangan berjarak, bukan lewat sesi panjang.<br><br><b>Empat jam hari Minggu hampir seluruhnya menguap sebelum Rabu.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Semuanya sudah tersusun',
      judul: 'Tidak perlu menyusun rencananya sendiri.',
      isi: '326 pelajaran berurutan, kartu ulang terjadwal, dan simulasi ujian — sembilan bahasa, sekali bayar Rp199.000.' }],
  caption: `Rencana 90 hari yang tidak menjanjikan kamu fasih — karena tidak ada yang bisa menjanjikan itu dengan jujur.

Yang bisa dijanjikan: sampai di mana kamu kalau benar-benar 30 menit sehari.

Hari 1–30: fondasi. Aksara sampai otomatis, 200–300 kosakata inti.
Hari 31–60: merangkai. Bentuk kata kerja, kalimat majemuk.
Hari 61–90: memakai. Bicara sendiri, menulis tiga kalimat sehari.

Slide 5 yang paling menentukan: 30 menit sehari mengalahkan 4 jam seminggu sekali. Bukan soal disiplin — soal cara ingatan bekerja.

Simpan dan mulai hari ini. 📌`,
  tagar: t('umum') },

{ hari: 21, slot: 3, jenis: 'tunggal', nama: 'relate-mulai-lagi',
  gambar: [{ tipe: 'hook', glif: '↻',
    pita: 'Untuk yang pernah berhenti',
    judul: 'Mulai lagi <span class="emas">bukan mulai dari nol.</span>',
    isi: 'Yang pernah kamu pelajari tidak hilang seluruhnya — ia cuma tertidur, dan bangun jauh lebih cepat daripada belajar pertama kali.<br><br><b>Orang yang mengulang dari awal biasanya melewati tiga bab pertama dalam beberapa hari.</b>',
    kaki: 'Kamu tidak mengulang. Kamu melanjutkan.' }],
  caption: `"Udah pernah belajar, tapi berhenti. Sekarang harus mulai dari nol lagi."

Tidak.

Yang pernah masuk ke kepalamu tidak hilang seluruhnya. Ia tertidur — dan bangun jauh lebih cepat daripada waktu pertama kali dipelajari.

Ini terlihat jelas pada orang yang kembali belajar setelah berhenti setahun: tiga bab pertama yang dulu makan sebulan, sekarang selesai dalam beberapa hari.

Rasanya seperti mulai dari nol karena kamu tidak bisa memakainya. Tapi bedanya besar antara "tidak bisa dipakai" dan "tidak ada".

Kamu tidak mengulang. Kamu melanjutkan yang tertunda.`,
  tagar: t('umum') },

{ hari: 21, slot: 4, jenis: 'tunggal', nama: 'jual-pekan3-tutup',
  gambar: [{ tipe: 'jual',
    pita: 'Penutup pekan ketiga',
    judul: 'Tiga pekan gratis. <span class="emas">Isinya jauh lebih banyak.</span>',
    isi: '9.052 entri kamus · 326 pelajaran · 767 latihan · 10 simulasi ujian · sembilan bahasa. Sekali bayar Rp199.000, tanpa tanggal kedaluwarsa.' }],
  caption: `Tiga pekan konten gratis di feed ini. Kalau kamu ikuti dari awal, kamu sudah punya:

lima aksara, enam aturan tata bahasa yang tidak ada di bahasa kita, dua belas kalimat kerja, strategi empat ujian, dan rencana 90 hari.

Itu semua memang dibagikan gratis dengan sengaja — supaya kamu tahu isi kepalanya seperti apa sebelum memutuskan.

Yang di dalam aplikasinya: 9.052 entri kamus, 326 pelajaran berurutan, 767 latihan yang masing-masing menjelaskan kebiasaan berbahasa Indonesia mana yang menyeretmu, dan sepuluh simulasi ujian.

Rp199.000 untuk lima bahasa. Rp299.000 untuk sembilan. Sekali bayar.

sankalingogo.com`,
  tagar: t('jual','umum') },
];
