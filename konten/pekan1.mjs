/* ── Pekan 1 · Aksara dan langkah pertama ─────────────────────────

   Pekan pembuka sengaja tidak menjual apa pun sampai slot keempat tiap
   hari. Orang yang baru menemukan akun ini belum punya alasan percaya;
   yang bisa diberikan lebih dulu adalah kemampuan kecil yang langsung
   terasa — membaca satu baris hiragana, mengenali satu kesalahan yang
   selama ini tidak pernah dijelaskan.

   Empat slot tiap hari, urutannya tetap:
     1. edukasi ringan        (pagi)
     2. carousel mendalam     (siang)   ← minimal satu tiap hari
     3. koreksi / relatable   (sore)
     4. penawaran             (malam)                                */

export const TAGAR = {
  umum: '#belajarbahasa #bahasainggris #sankalingo #belajarbahasaasing #kursusbahasa #bahasaasing #belajarmandiri #skillbaru',
  jepang: '#belajarbahasajepang #hiragana #katakana #jlpt #bahasajepang #nihongo #belajarjepang #anime',
  korea: '#belajarbahasakorea #hangeul #topik #bahasakorea #kpop #belajarkorea #annyeong',
  inggris: '#bahasainggris #belajaringgris #grammar #ielts #toefl #englishtips #tensesbahasainggris',
  arab: '#bahasaarab #belajarbahasaarab #hurufhijaiyah #arabic',
  karier: '#lowongankerja #karier #beasiswa #freshgraduate #tipskarir #kerjaremote #upgradeskill',
  jual: '#promo #aplikasibelajar #belajarbahasa #investasidiri #bayarsekali',
};

const t = (...k) => k.map(x => TAGAR[x]).join(' ');

export const PEKAN1 = [
/* ══ HARI 1 ══════════════════════════════════════════════════════ */
{ hari: 1, slot: 1, jenis: 'tunggal', nama: 'hiragana-baris-a',
  gambar: [{ tipe: 'aksara', fontKelas: 'ja',
    pita: 'Aksara Jepang',
    judul: 'Lima huruf ini <span class="emas">sudah cukup</span> untuk mulai.',
    huruf: [['あ','a'],['い','i'],['う','u'],['え','e'],['お','o']],
    ket: 'Hiragana hanya punya 46 huruf, dan bunyinya <b>tidak pernah berubah</b> — tidak seperti bahasa Inggris, di mana "a" pada <i>cat</i>, <i>car</i>, dan <i>care</i> berbunyi berbeda-beda.',
    kaki: 'Lima hari lagi kamu bisa membaca semuanya.' }],
  caption: `あ い う え お

Lima huruf. Dibaca a-i-u-e-o. Persis seperti bunyi vokal kita.

Ini yang bikin hiragana sebenarnya lebih mudah daripada bahasa Inggris: satu huruf, satu bunyi, selamanya. Tidak ada "read" yang bisa dibaca dua cara.

Yang bikin orang berhenti bukan kesulitannya — tapi karena tidak ada yang bilang bahwa 46 huruf itu bisa dihafal dalam seminggu.

Simpan postingan ini. Besok kita lanjut baris ka-ki-ku-ke-ko.`,
  tagar: t('jepang','umum') },

{ hari: 1, slot: 2, jenis: 'carousel', nama: 'baca-hiragana-5-menit',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: 'あ',
      pita: 'Carousel · 5 menit',
      judul: 'Kamu bisa baca <span class="api">hiragana</span> sebelum kopi ini dingin.',
      isi: 'Bukan hafal semuanya. Cukup lima baris pertama — dan itu sudah membuka setengah kata yang muncul di anime, lagu, dan menu restoran Jepang.',
      geser: 'geser →' },
    { tipe: 'aksara', nomor: '2/5', fontKelas: 'ja',
      pita: 'Langkah 1',
      judul: 'Vokal: a i u e o',
      huruf: [['あ','a'],['い','i'],['う','u'],['え','e'],['お','o']],
      ket: 'Semua huruf hiragana lain adalah <b>konsonan + salah satu vokal ini</b>. Kuasai lima ini, sisanya tinggal menempel.',
      geser: 'geser →' },
    { tipe: 'aksara', nomor: '3/5', fontKelas: 'ja',
      pita: 'Langkah 2',
      judul: 'Tambah K: ka ki ku ke ko',
      huruf: [['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko']],
      ket: 'Perhatikan polanya: bentuknya berubah, tapi urutan vokalnya <b>selalu a-i-u-e-o</b>. Pola itu berlaku untuk seluruh tabel.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: 'き',
      pita: 'Coba baca',
      judul: 'あき · かき · いけ',
      isi: 'a-ki (musim gugur) · ka-ki (kesemek) · i-ke (kolam)<br><br>Sepuluh huruf tadi, dan kamu <b>baru saja membaca tiga kata Jepang</b> tanpa romaji.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Sisanya ada di dalam',
      judul: '36 huruf lagi, lalu kata pertamamu.',
      isi: 'Di aplikasinya: seluruh hiragana dan katakana lengkap dengan urutan goresan, cara membaca, dan latihan sampai otomatis. Ditambah delapan bahasa lain.' }],
  caption: `Lima menit. Sepuluh huruf. Tiga kata Jepang yang bisa kamu baca sendiri.

Geser sampai slide 4 — di situ kamu akan sadar sudah bisa membaca sesuatu yang tadinya cuma coretan.

Yang bikin belajar aksara terasa mustahil bukan jumlahnya, tapi cara mengajarkannya: dilempar 46 huruf sekaligus, disuruh hafal. Padahal polanya cuma satu, dan begitu polanya kelihatan, sisanya tinggal waktu.

Simpan dulu. Besok lanjut baris berikutnya.`,
  tagar: t('jepang','umum') },

{ hari: 1, slot: 3, jenis: 'tunggal', nama: 'koreksi-two-book',
  gambar: [{ tipe: 'koreksi',
    pita: 'Kesalahan paling sering',
    judul: 'Ekor kecil yang <span class="api">wajib</span>.',
    salah: 'I buy two book.', benar: 'I buy two books.',
    sebab: '<b>Kebiasaan kita:</b> bahasa Indonesia mengulang kata — buku-buku, anak-anak. Bahasa Inggris menambahkan <b>-s</b>, dan huruf sekecil itu tidak boleh hilang. Ini kelalaian paling sering penutur Indonesia, bahkan yang sudah lancar bicara.',
    kaki: 'Sudah tahu? Bagus. Yang belum, sekarang tahu.' }],
  caption: `"I buy two book."

Kelihatan benar? Kebanyakan orang Indonesia merasa begitu — dan itu masuk akal.

Bahasa kita menunjukkan jamak dengan mengulang: buku-buku, anak-anak. Bahasa Inggris menaruhnya di satu huruf di ekor kata. Huruf itu tidak terdengar penting di telinga kita, jadi otak kita membuangnya.

Bukan karena kurang pintar. Karena kebiasaan berbahasa ibu tidak pernah dijelaskan sebagai sumber masalahnya.

Kamu pernah salah yang ini? Jujur di komentar 👇`,
  tagar: t('inggris','umum') },

{ hari: 1, slot: 4, jenis: 'tunggal', nama: 'jual-hari1',
  gambar: [{ tipe: 'jual',
    pita: 'Kenapa sembilan bahasa sekaligus',
    judul: 'Satu aplikasi. <span class="emas">Sembilan bahasa.</span> Sekali bayar.',
    isi: 'Inggris, Jepang, Korea, Mandarin, Arab, Jerman, Prancis, Spanyol, Rusia. Tidak ada tagihan bulanan, tidak ada masa berlaku.' }],
  caption: `Kenapa sembilan bahasa dalam satu aplikasi, bukan satu bahasa yang "fokus"?

Karena kebutuhanmu berubah. Hari ini Inggris untuk kerja. Tahun depan mungkin Jepang karena ada peluang di sana. Tiga tahun lagi mungkin Arab.

Kalau tiap bahasa harus beli lagi, kamu akan menunda sampai "nanti kalau sudah butuh" — dan waktu butuh itu datang, kamu mulai dari nol lagi.

Rp199.000 sekali. Lima bahasa. Mau sembilan? Rp299.000, selisihnya bisa dibayar kapan saja.

Link di bio.`,
  tagar: t('jual','umum') },

/* ══ HARI 2 ══════════════════════════════════════════════════════ */
{ hari: 2, slot: 1, jenis: 'tunggal', nama: 'hangeul-konsonan',
  gambar: [{ tipe: 'aksara', fontKelas: 'ko',
    pita: 'Aksara Korea',
    judul: 'Hangeul <span class="emas">dirancang</span> supaya cepat dipelajari.',
    huruf: [['ㄱ','g'],['ㄴ','n'],['ㄷ','d'],['ㄹ','r'],['ㅁ','m'],['ㅂ','b'],['ㅅ','s'],['ㅇ','ng'],['ㅈ','j'],['ㅎ','h']],
    ket: 'Bentuk hurufnya meniru posisi lidah dan bibir saat mengucapkannya. Ini satu-satunya aksara besar di dunia yang <b>sengaja diciptakan</b>, bukan tumbuh sendiri — dan itu sebabnya rapi.',
    kaki: 'Sepuluh konsonan. Besok vokalnya.' }],
  caption: `ㄱ ㄴ ㄷ ㄹ ㅁ

Hangeul bukan aksara yang tumbuh perlahan selama ribuan tahun seperti kebanyakan aksara lain. Ia diciptakan pada abad ke-15, dengan tujuan yang ditulis terang-terangan: supaya rakyat biasa bisa belajar membaca dengan cepat.

Bentuk hurufnya meniru posisi mulut saat mengucapkannya. ㄱ itu lidah yang menempel di langit-langit. ㅁ itu bibir yang tertutup.

Karena itu banyak orang bisa membaca hangeul dalam hitungan hari — bukan bulan.

Besok: sepuluh vokalnya, lalu kamu bisa membaca nama-nama di poster K-pop.`,
  tagar: t('korea','umum') },

{ hari: 2, slot: 2, jenis: 'carousel', nama: 'hangeul-satu-jam',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: '한',
      pita: 'Carousel · hangeul',
      judul: 'Kenapa hangeul <span class="api">jauh lebih mudah</span> dari yang kamu kira.',
      isi: 'Bukan karena orang Korea pintar mengajar. Karena aksaranya memang dirancang untuk itu, oleh raja yang bosan melihat rakyatnya buta huruf.',
      geser: 'geser →' },
    { tipe: 'aksara', nomor: '2/5', fontKelas: 'ko',
      pita: 'Konsonan',
      judul: 'Sepuluh bentuk dasar',
      huruf: [['ㄱ','g'],['ㄴ','n'],['ㄷ','d'],['ㄹ','r'],['ㅁ','m'],['ㅂ','b'],['ㅅ','s'],['ㅇ','ng'],['ㅈ','j'],['ㅎ','h']],
      ket: 'ㄱ meniru lidah menempel langit-langit. ㅁ meniru bibir tertutup. <b>Bentuknya bukan kesepakatan acak</b> — ia menggambarkan mulutmu sendiri.',
      geser: 'geser →' },
    { tipe: 'aksara', nomor: '3/5', fontKelas: 'ko',
      pita: 'Vokal',
      judul: 'Garis, titik, arah',
      huruf: [['ㅏ','a'],['ㅑ','ya'],['ㅓ','eo'],['ㅕ','yeo'],['ㅗ','o'],['ㅛ','yo'],['ㅜ','u'],['ㅠ','yu'],['ㅡ','eu'],['ㅣ','i']],
      ket: 'Satu garis tambahan mengubah <b>a</b> jadi <b>ya</b>. Polanya sama untuk semua pasangan — hafal separuh, separuh lagi ikut sendiri.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: '가',
      pita: 'Dirangkai',
      judul: 'ㄱ + ㅏ = 가',
      isi: 'Hangeul tidak ditulis berderet seperti Latin. Konsonan dan vokal <b>disusun jadi satu blok suku kata</b>.<br><br>ㅅ + ㅏ + ㄴ = 산 (gunung)<br>ㅁ + ㅜ + ㄹ = 물 (air)',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Lanjutannya',
      judul: 'Dari huruf ke kalimat pertamamu.',
      isi: 'Di dalam aplikasi: urutan goresan tiap huruf, latihan merangkai suku kata, lalu kosakata dan tata bahasa Korea yang menjelaskan kenapa penutur Indonesia sering keliru.' }],
  caption: `Hangeul sering disebut aksara paling logis di dunia. Ini alasannya — dan kenapa kamu bisa membacanya jauh lebih cepat dari yang kamu kira.

Slide 4 bagian yang paling sering bikin orang kaget: hurufnya tidak berderet, tapi disusun jadi kotak suku kata. Begitu paham itu, tulisan Korea berhenti terlihat seperti gambar dan mulai terlihat seperti tulisan.

Simpan buat dibaca ulang. Besok kita pakai untuk membaca kata sungguhan.`,
  tagar: t('korea','umum') },

{ hari: 2, slot: 3, jenis: 'tunggal', nama: 'koreksi-when-will',
  gambar: [{ tipe: 'koreksi',
    pita: 'Jebakan yang terasa benar',
    judul: 'Logikanya benar. <span class="api">Kalimatnya salah.</span>',
    salah: 'I will call when he will arrive.', benar: 'I will call when he arrives.',
    sebab: 'Peristiwanya <i>memang</i> belum terjadi, jadi <b>will</b> terasa masuk akal. Tapi sesudah <b>when, after, before, until</b>, bahasa Inggris memakai bentuk sekarang untuk peristiwa masa depan. Ini kesalahan paling awet — bertahan bahkan setelah bertahun-tahun belajar.',
    kaki: 'Bukan karena kurang teliti. Karena logikanya memang menipu.' }],
  caption: `"I will call when he will arrive."

Salah. Tapi coba pikir kenapa kamu merasa itu benar: peristiwanya memang belum terjadi. Logikamu tidak keliru — aturannya saja yang tidak mengikuti logika.

Sesudah when, after, before, until — bahasa Inggris memakai bentuk sekarang untuk sesuatu yang belum terjadi.

I will call when he arrives.
I will text you after I get home.

Ini kesalahan yang paling awet. Orang yang sudah lancar ngomong pun masih sering kepeleset di sini, karena tidak ada yang pernah menjelaskan alasannya — cuma disuruh hafal.

Kamu masih sering salah yang mana? 👇`,
  tagar: t('inggris','umum') },

{ hari: 2, slot: 4, jenis: 'tunggal', nama: 'jual-selamanya',
  gambar: [{ tipe: 'banding',
    pita: 'Hitung ulang sebentar',
    judul: 'Langganan berhenti. <span class="emas">Bahasa tidak.</span>',
    kiri: { judul: 'Langganan bulanan', isi: 'Bayar tiap bulan. Berhenti membayar, akses hilang — padahal bahasa butuh <b>tahunan</b>, bukan mingguan.', cap: 'terus menumpuk' },
    kanan: { judul: 'SankaLingo GO', isi: 'Rp199.000 sekali. Kodenya menempel di akunmu <b>tanpa tanggal kedaluwarsa</b>.', cap: 'bayar sekali, selesai' },
    kaki: 'Sekitar Rp40.000 per bahasa.' }],
  caption: `Kalau kamu pernah berlangganan aplikasi bahasa lalu berhenti setelah dua bulan, kamu tidak sendirian — dan itu bukan soal niat.

Langganan menghukum orang yang belajarnya tidak lurus. Padahal belajar bahasa memang tidak lurus: ada bulan sibuk, ada bulan libur, ada bulan hilang semangat lalu kembali lagi.

Bayar sekali menghapus hukuman itu. Berhenti tiga bulan, kembali lagi, semuanya masih di tempatnya.

Rp199.000 untuk 5 bahasa. Rp299.000 untuk 9.
Link di bio.`,
  tagar: t('jual','umum') },

/* ══ HARI 3 ══════════════════════════════════════════════════════ */
{ hari: 3, slot: 1, jenis: 'tunggal', nama: 'mandarin-nada',
  gambar: [{ tipe: 'aksara', fontKelas: 'zh',
    pita: 'Mandarin',
    judul: 'Satu bunyi, <span class="emas">empat arti.</span>',
    huruf: [['妈','mā · ibu'],['麻','má · rami'],['马','mǎ · kuda'],['骂','mà · memarahi']],
    ket: 'Empat kata ini bunyinya sama: <b>ma</b>. Yang membedakan cuma naik-turun suaranya. Bahasa Indonesia tidak punya ini — dan itu sebabnya nada terasa mustahil sampai ada yang menjelaskan polanya.',
    kaki: 'Empat nada. Bukan empat puluh.' }],
  caption: `妈 麻 马 骂

Empat kata. Satu bunyi: "ma". Yang membedakan hanya nadanya.

妈 (mā) nada datar tinggi — ibu
麻 (má) naik — rami
马 (mǎ) turun lalu naik — kuda
骂 (mà) turun tajam — memarahi

Orang Indonesia sering menyerah di sini karena merasa "telinga saya tidak bisa". Padahal bahasa kita juga memakai nada, cuma untuk hal lain: coba ucapkan "hah?" bingung, lalu "hah!" kaget. Nadamu berubah, dan kamu melakukannya tanpa berpikir.

Bedanya di Mandarin, nada mengubah arti kata — bukan emosi kalimat.

Cuma ada empat. Bisa dihafal.`,
  tagar: '#belajarbahasamandarin #mandarin #hsk #bahasamandarin ' + TAGAR.umum },

{ hari: 3, slot: 2, jenis: 'carousel', nama: 'hanzi-tidak-seseram',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: '中',
      pita: 'Carousel · Mandarin',
      judul: 'Hanzi <span class="api">tidak seseram</span> kelihatannya.',
      isi: 'Yang bikin orang menyerah: mengira harus menghafal ribuan gambar acak. Padahal sebagian besar hanzi tersusun dari potongan yang berulang — dan potongan itu punya arti.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/5',
      pita: 'Potongan dasar',
      judul: 'Kenali empat ini dulu',
      butir: [['人 · orang','Gambar orang berdiri. Muncul di ratusan kata lain.'],
              ['口 · mulut','Kotak. Semua yang berhubungan dengan bicara dan makan memakainya.'],
              ['木 · pohon','Batang dengan cabang. Dua pohon jadi 林 (hutan kecil), tiga jadi 森 (rimba).'],
              ['日 · matahari','Muncul di semua kata soal waktu dan hari.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '3/5', glif: '休',
      pita: 'Digabung',
      judul: '人 + 木 = 休',
      isi: 'Orang (人) bersandar di pohon (木) — artinya <b>istirahat</b>.<br><br>Bukan hafalan acak. Ini gambar yang bercerita, dan begitu ceritanya kelihatan, karakternya susah dilupakan.',
      geser: 'geser →' },
    { tipe: 'aksara', nomor: '4/5', fontKelas: 'zh',
      pita: 'Coba tebak sendiri',
      judul: 'Sekarang kamu bisa membacanya',
      huruf: [['林','hutan'],['明','terang'],['好','baik'],['众','banyak orang']],
      ket: '林 = dua pohon. 明 = matahari + bulan. 好 = perempuan + anak. 众 = tiga orang. <b>Semuanya masuk akal setelah polanya kelihatan.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Selanjutnya',
      judul: 'Dari potongan ke kalimat.',
      isi: 'Di dalam aplikasi: hanzi diajarkan dari potongannya, lengkap dengan urutan goresan, pinyin, kata bantu bilangan, dan contoh kalimat. Ditambah delapan bahasa lain.' }],
  caption: `Kalau kamu pernah membuka pelajaran Mandarin lalu langsung tutup karena hurufnya terlihat seperti gambar acak — geser postingan ini.

Sebagian besar hanzi tersusun dari potongan yang berulang, dan potongan itu punya arti sendiri.

人 (orang) + 木 (pohon) = 休 (istirahat). Orang bersandar di pohon.

Begitu polanya kelihatan, hanzi berhenti jadi hafalan dan mulai jadi teka-teki yang bisa dipecahkan. Itu bedanya orang yang bertahan dan yang menyerah di minggu pertama.

Simpan buat besok. 中`,
  tagar: '#belajarbahasamandarin #hanzi #mandarin #hsk ' + TAGAR.umum },

{ hari: 3, slot: 3, jenis: 'tunggal', nama: 'koreksi-since-for',
  gambar: [{ tipe: 'koreksi',
    pita: 'Dua kata yang tertukar',
    judul: 'Sejak kapan, <span class="api">atau berapa lama?</span>',
    salah: 'I live here since three years.', benar: 'I have lived here for three years.',
    sebab: 'Bahasa Indonesia memakai <b>"sejak"</b> untuk dua-duanya: sejak 2020, sejak tiga tahun. Bahasa Inggris memisahkan — <b>since</b> untuk titik mulai (since 2020), <b>for</b> untuk lamanya (for three years). Ditambah "sudah" yang menuntut have + V3.',
    kaki: 'Satu kalimat, dua jebakan sekaligus.' }],
  caption: `"I live here since three years."

Ada dua kesalahan sekaligus di kalimat ini, dan dua-duanya berasal dari kebiasaan bahasa kita.

Pertama: kita memakai "sejak" untuk titik waktu maupun lama waktu. Sejak 2020. Sejak tiga tahun. Bahasa Inggris memisahkan — since untuk titik mulai, for untuk durasi.

Kedua: "sudah tinggal dan masih tinggal" butuh have + V3, bukan bentuk sekarang.

Yang benar: I have lived here for three years.

Kalimat ini sering muncul di wawancara kerja dan tes IELTS speaking. Simpan.`,
  tagar: TAGAR.inggris + ' ' + TAGAR.umum },

{ hari: 3, slot: 4, jenis: 'tunggal', nama: 'jual-5-vs-9',
  gambar: [{ tipe: 'banding', netral: true,
    pita: 'Dua paket',
    judul: 'Lima bahasa, <span class="emas">atau sembilan?</span>',
    kiri: { judul: 'Esensi · Rp199.000', isi: 'Inggris, Jepang, Korea, Mandarin, Arab.<br><b>≈ Rp40.000 per bahasa.</b>', cap: 'yang paling dicari' },
    kanan: { judul: 'Lengkap · Rp299.000', isi: 'Ditambah Jerman, Prancis, Spanyol, Rusia.<br><b>≈ Rp33.000 per bahasa.</b>', cap: 'plus bahasa berikutnya, gratis' },
    kaki: 'Ambil Esensi dulu? Selisihnya bisa dibayar kapan saja.' }],
  caption: `Sering ditanya: ambil yang mana?

Esensi (Rp199.000) — lima bahasa yang paling banyak dicari di Indonesia: Inggris, Jepang, Korea, Mandarin, Arab.

Lengkap (Rp299.000) — sembilan bahasa, plus bahasa apa pun yang ditambahkan nanti tanpa bayar lagi.

Selisihnya Rp100.000 untuk empat bahasa Eropa. Kalau kamu belum yakin butuh Jerman atau Prancis, ambil Esensi dulu — nanti tinggal bayar selisihnya, dan kemajuan belajarmu tetap utuh.

Dua-duanya bayar sekali. Tidak ada tagihan bulanan.

Link di bio.`,
  tagar: TAGAR.jual + ' ' + TAGAR.umum },

/* ══ HARI 4 ══════════════════════════════════════════════════════ */
{ hari: 4, slot: 1, jenis: 'tunggal', nama: 'arab-huruf',
  gambar: [{ tipe: 'aksara', fontKelas: 'ar',
    pita: 'Arab',
    judul: 'Huruf yang <span class="emas">berubah bentuk</span> menurut posisinya.',
    huruf: [['ب','ba'],['ت','ta'],['ث','tsa'],['ج','jim']],
    ket: 'Satu huruf punya sampai empat wujud: berdiri sendiri, di awal, di tengah, di akhir kata. Terdengar rumit — sampai kamu sadar tulisan tangan Latin kita juga begitu: <b>a</b> tegak dan <b>a</b> sambung.',
    kaki: '28 huruf. Ditulis dari kanan.' }],
  caption: `ب ت ث ج

Yang bikin huruf Arab terlihat sulit bukan jumlahnya — cuma 28, lebih sedikit dari yang orang kira.

Yang bikin bingung: satu huruf bisa punya empat wujud, tergantung posisinya di dalam kata.

Tapi kita sebenarnya sudah terbiasa dengan itu. Huruf "a" di tulisan cetak dan "a" di tulisan sambung tangan juga berbeda bentuk, dan kamu membacanya tanpa berpikir.

Bedanya cuma satu: tidak ada yang pernah menjelaskan itu ke kita sebelum menyuruh menghafal.

Besok: cara membaca dari kanan tanpa pusing.`,
  tagar: TAGAR.arab + ' ' + TAGAR.umum },

{ hari: 4, slot: 2, jenis: 'carousel', nama: 'arab-dari-kanan',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: 'ع',
      pita: 'Carousel · huruf Arab',
      judul: 'Kenapa Arab <span class="api">ditulis dari kanan?</span>',
      isi: 'Bukan untuk menyulitkan. Aksara kuno dipahat di batu, dan orang kidal-palu memegang pahat di kiri, martil di kanan — arah itu ikut sampai sekarang.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/5',
      pita: 'Tiga hal yang perlu diketahui',
      judul: 'Sebelum mulai membaca',
      butir: [['Hurufnya konsonan','Vokal pendek tidak ditulis. Kata yang sama bisa dibaca beberapa cara — konteks yang menentukan.'],
              ['Bersambung','Kebanyakan huruf menempel dengan tetangganya. Enam huruf tidak pernah menyambung ke kiri.'],
              ['Angka tetap dari kiri','Tahun 2026 ditulis 2026, bukan dibalik. Ini sering bikin pemula bingung.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '3/5', glif: 'ك',
      pita: 'Contoh',
      judul: 'كتب = k-t-b',
      isi: 'Tiga konsonan itu akar kata "menulis".<br><br>كتاب (kitab) buku · كاتب (katib) penulis · مكتب (maktab) kantor<br><br><b>Satu akar, satu keluarga kata.</b> Ini yang membuat kosakata Arab bertumbuh cepat setelah akarnya dikuasai.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '4/5', glif: 'م',
      pita: 'Kabar baiknya',
      judul: 'Kamu sudah tahu ratusan katanya.',
      isi: 'Kitab, kursi, kertas, majelis, waktu, kalimat, sabun, lemari, kabar, salam — semuanya serapan Arab yang sudah kamu pakai sejak kecil.<br><br><b>Kamu tidak mulai dari nol.</b>',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Lanjutannya',
      judul: 'Dari huruf ke Al-Qur\'an dan percakapan.',
      isi: 'Di dalam aplikasi: 28 huruf dengan urutan goresan, kaidah menyambung, 1.002 entri kamus Arab lengkap dengan bentuk kata kerja dan jamaknya.' }],
  caption: `Kalau kamu pernah merasa huruf Arab mustahil dipelajari orang dewasa — geser dulu.

Slide 4 yang paling sering bikin orang kaget: kita sudah memakai ratusan kata Arab tiap hari. Kitab, kursi, kertas, waktu, kabar, salam, lemari, sabun.

Kamu tidak memulai dari nol. Kamu memulai dari sudah-tahu-ratusan-kata, cuma belum tahu cara menuliskannya.

Simpan. Besok kita bahas kenapa bilangan Arab membalik jenis kelaminnya — aturan yang tidak ada padanannya di bahasa mana pun yang kita kenal.`,
  tagar: TAGAR.arab + ' ' + TAGAR.umum },

{ hari: 4, slot: 3, jenis: 'tunggal', nama: 'koreksi-jerman-v2',
  gambar: [{ tipe: 'koreksi',
    pita: 'Bahasa Jerman',
    judul: 'Posisi kedua <span class="api">milik kata kerja.</span>',
    salah: 'Heute ich gehe zur Schule.', benar: 'Heute gehe ich zur Schule.',
    sebab: 'Kita terbiasa "Hari ini saya pergi" — keterangan, subjek, kata kerja. Dalam bahasa Jerman, apa pun yang membuka kalimat, <b>posisi kedua tetap milik kata kerja</b>, dan subjeknya menggeser ke belakang. Aturan ini tidak punya padanan sama sekali di bahasa kita.',
    kaki: 'Sekali paham, seluruh kalimat Jerman jadi masuk akal.' }],
  caption: `"Heute ich gehe zur Schule."

Terjemahan kata per kata dari "Hari ini saya pergi ke sekolah". Dan salah.

Bahasa Jerman punya satu aturan yang mengatur hampir seluruh kalimatnya: kata kerja selalu di posisi kedua. Apa pun yang ditaruh di depan — keterangan waktu, tempat, apa saja — subjeknya pindah ke belakang kata kerja.

Heute gehe ich zur Schule.
Morgen komme ich später.

Orang Indonesia hampir selalu tergelincir di sini, karena kita menerjemahkan urutannya apa adanya. Sekali aturan ini masuk, kalimat Jerman berhenti terasa acak.

Ada yang lagi belajar Jerman untuk Ausbildung? 👇`,
  tagar: '#belajarbahasajerman #bahasajerman #ausbildung #goethe ' + TAGAR.umum },

{ hari: 4, slot: 4, jenis: 'tunggal', nama: 'jual-kamus',
  gambar: [{ tipe: 'jual',
    pita: 'Isi yang bisa dihitung',
    judul: '<span class="emas">9.052</span> entri kamus, sembilan bahasa.',
    isi: 'Tiap entri memuat arti, contoh kalimat, frasa pemakaian, dan bentuk kata yang tidak bisa ditebak — lengkap dengan pelafalan tiap bentuknya.' }],
  caption: `9.052 entri kamus. Sembilan bahasa. Semuanya bisa dibuka tanpa internet.

Yang membedakan dari kamus biasa: tiap entri tidak berhenti di arti.

行く (iku) — pergi
行きます (ikimasu) — bentuk sopan
行って (itte) — bentuk て
行った (itta) — lampau

Empat bentuk, masing-masing dengan tombol suaranya sendiri. Karena yang bikin orang mandek bukan tidak tahu artinya, tapi tidak tahu bentuk mana yang dipakai kapan.

Rp199.000 sekali bayar. Link di bio.`,
  tagar: TAGAR.jual + ' ' + TAGAR.umum },

/* ══ HARI 5 ══════════════════════════════════════════════════════ */
{ hari: 5, slot: 1, jenis: 'tunggal', nama: 'kiril-menipu',
  gambar: [{ tipe: 'aksara',
    pita: 'Kiril',
    judul: 'Huruf yang <span class="api">kelihatan kenal</span> — padahal bukan.',
    huruf: [['В','v'],['Р','r'],['С','s'],['Н','n'],['У','u'],['Х','kh']],
    ket: 'Enam huruf ini mirip huruf Latin, tapi berbunyi lain sama sekali. <b>Ресторан</b> dibaca "restoran", bukan "pectopah" — dan begitu kamu sadar itu, papan nama Rusia mulai terbaca.',
    kaki: '33 huruf. Setengahnya sudah kamu kenal bentuknya.' }],
  caption: `Р bukan "P". Dibaca "R".
В bukan "B". Dibaca "V".
С bukan "C". Dibaca "S".
Н bukan "H". Dibaca "N".

Ini jebakan pertama huruf Kiril: separuh hurufnya terlihat seperti huruf Latin yang kita kenal, tapi bunyinya berbeda.

Kabar baiknya, begitu enam huruf penipu ini kamu kuasai, sisanya jauh lebih jinak. РЕСТОРАН langsung terbaca "restoran". ТАКСИ jadi "taksi". МЕТРО jadi "metro".

Banyak kata Rusia modern adalah serapan yang bunyinya mirip kata kita.

33 huruf. Bisa dibaca dalam seminggu.`,
  tagar: '#belajarbahasarusia #bahasarusia #kiril #cyrillic ' + TAGAR.umum },

{ hari: 5, slot: 2, jenis: 'carousel', nama: 'kenapa-berhenti-minggu-3',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '?',
      pita: 'Carousel · yang tidak dibahas',
      judul: 'Kenapa belajar bahasa <span class="api">selalu berhenti</span> di minggu ketiga.',
      isi: 'Bukan karena malas. Ada empat sebab yang berulang pada hampir semua orang — dan tiga di antaranya bisa dihindari sejak awal.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/6',
      pita: 'Sebab 1',
      judul: 'Tidak pernah tahu kenapa salah',
      butir: [['Aplikasi bilang "salah"','Kamu ulangi sampai hafal jawabannya, bukan sampai paham polanya.'],
              ['Enam bulan kemudian','Kesalahan yang sama muncul lagi di kalimat berbeda. Karena yang diperbaiki cuma jawabannya.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/6',
      pita: 'Sebab 2 dan 3',
      judul: 'Target kabur, hasil tak terlihat',
      butir: [['"Pokoknya bisa bahasa Inggris"','Target tanpa ukuran tidak pernah terasa tercapai, jadi tidak pernah terasa maju.'],
              ['Belajar acak tiap hari','Hari ini kosakata makanan, besok tenses, lusa nonton film. Tidak ada yang menumpuk.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/6',
      pita: 'Sebab 4',
      judul: 'Lupa yang kemarin dipelajari',
      butir: [['Kata baru hilang dalam 3 hari','Otak membuang yang tidak diulang. Ini bukan kelemahanmu — ini cara kerja ingatan.'],
              ['Solusinya bukan belajar lebih lama','Tapi mengulang di saat yang tepat: persis sebelum kata itu hilang.']],
      geser: 'geser →' },
    { tipe: 'hook', nomor: '5/6', glif: '✓',
      pita: 'Yang bisa kamu lakukan hari ini',
      judul: 'Tiga hal, tanpa aplikasi apa pun.',
      isi: '<b>1.</b> Ganti target jadi ukuran: "bisa memesan makanan", bukan "bisa bahasa Jepang".<br><br><b>2.</b> Pilih satu jalur, jangan lompat-lompat.<br><br><b>3.</b> Ulangi kosakata kemarin sebelum menambah yang baru.',
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Kalau mau yang sudah tersusun',
      judul: 'Empat sebab itu sudah ditutup di dalamnya.',
      isi: 'Kurikulum berurutan A1–C2, penjelasan yang menyebut kebiasaan berbahasa Indonesia mana yang menyeretmu, dan kartu ulang terjadwal yang memunculkan kata tepat sebelum kamu melupakannya.' }],
  caption: `Kalau kamu sudah tiga kali memulai belajar bahasa dan tiga kali berhenti — ini bukan soal niat.

Ada empat sebab yang berulang pada hampir semua orang. Geser untuk lihat, dan slide 5 bisa kamu terapkan hari ini tanpa membeli apa pun.

Yang paling sering: kita diberi tahu "jawabanmu salah", tidak pernah diberi tahu kenapa. Jadi yang diperbaiki cuma jawabannya, bukan kebiasaan yang membuatnya salah.

Enam bulan kemudian kesalahan yang sama muncul lagi di kalimat berbeda.

Kamu berhenti di sebab yang mana? 👇`,
  tagar: TAGAR.umum },

{ hari: 5, slot: 3, jenis: 'tunggal', nama: 'relate-nonton-anime',
  gambar: [{ tipe: 'hook', glif: 'ア',
    pita: 'Yang sering terjadi',
    judul: 'Sepuluh tahun nonton anime, <span class="api">masih baca subtitle.</span>',
    isi: 'Menonton tanpa struktur memang menambah telinga — kamu mulai mengenali <i>arigatou</i>, <i>sugoi</i>, <i>yamete</i>. Tapi mengenali bunyi bukan memahami kalimat.<br><br><b>Yang kurang bukan jam menonton. Yang kurang pola.</b>',
    kaki: 'Menonton itu bahan bakar. Struktur itu mesinnya.' }],
  caption: `Sepuluh tahun nonton anime. Masih baca subtitle.

Kalau ini kamu, kamu tidak sedang gagal — kamu cuma sedang mengumpulkan bahan bakar tanpa punya mesin.

Menonton memang menambah telinga. Kamu hafal arigatou, sugoi, daijoubu, yamete. Tapi mengenali bunyi bukan memahami kalimat. Untuk sampai ke sana, kamu perlu tahu kenapa 行きます jadi 行った, kenapa は dan が beda, kenapa kalimat Jepang selalu berakhir dengan kata kerjanya.

Sepuluh tahun menontonmu tidak sia-sia. Ia baru saja tidak punya rangka.

Kasih rangkanya, dan sepuluh tahun itu langsung terpakai.`,
  tagar: TAGAR.jepang + ' ' + TAGAR.umum },

{ hari: 5, slot: 4, jenis: 'tunggal', nama: 'jual-offline',
  gambar: [{ tipe: 'jual',
    pita: 'Dipakai di mana saja',
    judul: 'Jalan penuh <span class="emas">tanpa internet.</span>',
    isi: 'Sekali dibuka, seluruh materi tersimpan di perangkatmu. Di kereta, di kelas, di daerah tanpa sinyal — pelajarannya tetap terbuka. Kemajuan ikut pindah begitu tersambung lagi.' }],
  caption: `Waktu belajar paling sering muncul di tempat yang paling buruk sinyalnya: di kereta, di angkot, di ruang tunggu, di kelas yang membosankan.

Aplikasi yang butuh internet penuh berarti waktu-waktu itu terbuang.

SankaLingo GO menyimpan seluruh materinya di perangkatmu setelah dibuka sekali. Kamus 9.052 entri, semua pelajaran, semua latihan — semuanya tetap terbuka tanpa sinyal.

Begitu tersambung lagi, kemajuanmu ikut berpindah ke HP atau laptop lain.

Rp199.000 sekali bayar, akses selamanya. Link di bio.`,
  tagar: TAGAR.jual + ' ' + TAGAR.umum },

/* ══ HARI 6 ══════════════════════════════════════════════════════ */
{ hari: 6, slot: 1, jenis: 'tunggal', nama: 'email-kerja',
  gambar: [{ tipe: 'daftar',
    pita: 'Inggris untuk kerja',
    judul: 'Empat kalimat yang <span class="emas">menyelamatkan</span> email kerjamu.',
    butir: [['I\'ve attached…','Bukan "I attach here". Lampiran selalu memakai bentuk sudah: I\'ve attached the report.'],
            ['Could you please…','Lebih sopan dari "Please send me". Di email kerja, nada menentukan balasan.'],
            ['Let me know if…','Penutup yang membuka pintu tanpa memaksa: Let me know if you need anything else.'],
            ['Apologies for the delay','Lebih baik daripada "Sorry I\'m late reply" yang salah bentuk.']],
    kaki: 'Empat kalimat ini muncul di hampir semua email kerja.' }],
  caption: `Empat kalimat yang paling sering salah di email kerja orang Indonesia:

❌ I attach the file here.
✅ I've attached the file.

❌ Please send me the data.
✅ Could you please send me the data?

❌ Sorry I'm late reply.
✅ Apologies for the delay.

❌ Thanks before.
✅ Thanks in advance. ("Thanks before" tidak ada dalam bahasa Inggris — ini terjemahan langsung dari "terima kasih sebelumnya".)

Simpan. Empat kalimat ini muncul di hampir setiap email kerja.`,
  tagar: TAGAR.inggris + ' ' + TAGAR.karier },

{ hari: 6, slot: 2, jenis: 'carousel', nama: 'sepuluh-kata-kantor',
  gambar: [
    { tipe: 'hook', nomor: '1/5', glif: 'A',
      pita: 'Carousel · Inggris kantor',
      judul: 'Sepuluh kata yang <span class="api">salah dipakai</span> di kantor.',
      isi: 'Bukan kosakata sulit. Justru kata sehari-hari yang artinya bergeser sedikit — cukup untuk membuat pesanmu terbaca lain dari maksudmu.',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '2/5',
      pita: 'Tiga pertama',
      judul: 'Yang paling sering',
      butir: [['Fix ≠ perbaiki jadwal','"Let\'s fix a meeting" terdengar seperti memperbaiki rapat yang rusak. Pakai <b>set up</b> atau <b>schedule</b>.'],
              ['Discuss tanpa "about"','Discuss the plan, bukan discuss about the plan.'],
              ['Inform butuh objek','Inform <b>me</b> about it — bukan "please inform" tanpa siapa.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '3/5',
      pita: 'Tiga berikutnya',
      judul: 'Yang bikin salah paham',
      butir: [['Confirm ≠ konfirmasi kehadiran saja','Confirm the price, confirm the time — dipakai untuk memastikan apa pun.'],
              ['Revised, bukan "revisi"','Please send the revised version. "Revision" itu kata benda proses.'],
              ['Follow up bukan "menagih"','Netral dan sopan: I\'m following up on my previous email.']],
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '4/5',
      pita: 'Empat terakhir',
      judul: 'Yang tidak ada di bahasa Inggris',
      butir: [['"Thanks before"','Tidak ada. Yang benar: thanks in advance.'],
              ['"How if…"','Terjemahan dari "bagaimana kalau". Yang benar: what if… atau how about…'],
              ['"I will inform to you"','Buang <b>to</b>. Cukup: I will inform you.'],
              ['"Already" untuk semua "sudah"','I already sent it kadang perlu jadi I\'ve sent it.']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '5/5',
      pita: 'Semuanya dijelaskan',
      judul: 'Bukan cuma daftar. Alasannya juga.',
      isi: '767 latihan tata bahasa di dalam aplikasi, masing-masing menyebut kebiasaan berbahasa Indonesia mana yang membuatmu tergelincir di situ.' }],
  caption: `Sepuluh kata Inggris yang paling sering salah dipakai di kantor — dan hampir semuanya karena diterjemahkan langsung dari kebiasaan kita.

"Thanks before" tidak ada dalam bahasa Inggris. Itu terjemahan dari "terima kasih sebelumnya". Yang benar: thanks in advance.

"How if we meet at 3?" juga tidak ada. Yang benar: what if, atau how about.

Yang bikin ini penting bukan gengsi. Email yang janggal membuat orang asing membaca ulang dua kali, dan di dunia kerja, dibaca ulang dua kali artinya dibalas belakangan.

Simpan buat besok pagi sebelum kirim email. 📩`,
  tagar: TAGAR.inggris + ' ' + TAGAR.karier },

{ hari: 6, slot: 3, jenis: 'tunggal', nama: 'koreksi-kapan-a-an',
  gambar: [{ tipe: 'koreksi',
    pita: 'Kata kecil yang sering hilang',
    judul: 'Kita <span class="api">tidak punya</span> kata ini.',
    salah: 'She is teacher.', benar: 'She is a teacher.',
    sebab: 'Bahasa Indonesia tidak punya <b>a/an/the</b>. "Dia guru" sudah lengkap. Karena tidak ada padanannya di kepala kita, kata itu hilang tanpa terasa — dan ini kesalahan yang paling cepat terdengar oleh penutur asli.',
    kaki: 'Satu huruf. Beda antara terdengar fasih dan terdengar kaku.' }],
  caption: `"She is teacher."

Kalimat ini terdengar lengkap buat telinga kita — karena bahasa Indonesia memang tidak punya a, an, atau the.

"Dia guru." Selesai. Tidak ada yang kurang.

Tapi dalam bahasa Inggris, kata benda tunggal hampir selalu butuh penanda: a teacher, the teacher, my teacher.

Ini kesalahan yang paling cepat terdengar oleh penutur asli — bukan karena mengubah arti, tapi karena telinga mereka menunggu kata yang tidak datang.

Kabar baiknya: begitu polanya paham, ini termasuk yang paling cepat diperbaiki.

Pernah kepeleset di sini? 👇`,
  tagar: TAGAR.inggris + ' ' + TAGAR.umum },

{ hari: 6, slot: 4, jenis: 'tunggal', nama: 'jual-ujian',
  gambar: [{ tipe: 'jual',
    pita: 'Simulasi ujian',
    judul: 'Sepuluh ujian resmi, <span class="emas">format aslinya.</span>',
    isi: 'IELTS · TOEFL · TOEIC · JLPT · TOPIK · HSK · Goethe · DELF · DELE · TORFL. Termasuk aturan nilai minimum per bagian — yang sering membuat orang gagal meski total nilainya cukup.' }],
  caption: `Banyak orang gagal ujian bahasa bukan karena kemampuannya kurang, tapi karena tidak tahu aturan mainnya.

Contoh: di JLPT dan Goethe, nilai total yang cukup tetap bisa dinyatakan tidak lulus kalau satu bagian di bawah ambang minimum. Ada yang nilai membacanya tinggi sekali, menyimaknya nol — dan gagal.

Di aplikasinya ada simulasi sepuluh ujian resmi: IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, Goethe, DELF, DELE, TORFL. Meniru format dan ambang kelulusannya, termasuk aturan nilai minimum per bagian.

Soal-soalnya ditulis sendiri — bukan bocoran soal asli, karena soal ujian resmi berhak cipta.

Rp199.000 sekali. Link di bio.`,
  tagar: '#ielts #toefl #jlpt #topik #hsk ' + TAGAR.umum },

/* ══ HARI 7 ══════════════════════════════════════════════════════ */
{ hari: 7, slot: 1, jenis: 'tunggal', nama: 'rangkuman-pekan',
  gambar: [{ tipe: 'hook', glif: '7',
    pita: 'Rangkuman',
    judul: 'Tujuh hari lalu semuanya <span class="api">cuma coretan.</span>',
    isi: 'Sekarang kamu bisa membaca あ い う え お, mengenali ㄱ ㄴ ㄷ, tahu kenapa 休 berarti istirahat, dan sadar Р dibaca "R".<br><br><b>Tanpa membayar apa pun.</b>',
    kaki: 'Itu baru pekan pertama.' }],
  caption: `Coba lihat ke belakang tujuh hari.

Senin: あ い う え お
Selasa: ㄱ ㄴ ㄷ ㄹ ㅁ
Rabu: 人 + 木 = 休
Kamis: ب ت ث ج
Jumat: Р dibaca "R", bukan "P"

Lima aksara. Tanpa kelas, tanpa bayar, cuma dari scroll Instagram.

Yang bikin orang merasa "saya tidak berbakat bahasa" biasanya karena tidak pernah melihat kemajuannya sendiri. Kemajuannya terlalu kecil untuk terasa, sampai ada yang menunjukkannya sekaligus.

Kalau tujuh hari begini saja sudah sejauh ini, bayangkan tiga bulan dengan urutan yang benar.

Pekan depan kita masuk tata bahasa. Ikuti biar tidak ketinggalan.`,
  tagar: TAGAR.umum },

{ hari: 7, slot: 2, jenis: 'carousel', nama: 'uji-diri-pekan1',
  gambar: [
    { tipe: 'hook', nomor: '1/6', glif: '?',
      pita: 'Carousel · uji diri',
      judul: 'Lima soal. <span class="api">Berapa yang kamu bisa?</span>',
      isi: 'Semuanya dari materi pekan ini. Jawab dalam hati dulu, kunci ada di slide terakhir.',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '2/6', glif: 'あ',
      pita: 'Soal 1 dan 2',
      judul: 'Baca ini',
      isi: '<b>1.</b> あき — apa bunyinya?<br><br><b>2.</b> 산 tersusun dari ㅅ + ㅏ + ㄴ. Apa bunyinya?',
      geser: 'geser →' },
    { tipe: 'hook', nomor: '3/6', glif: '休',
      pita: 'Soal 3 dan 4',
      judul: 'Tebak artinya',
      isi: '<b>3.</b> 休 tersusun dari 人 (orang) dan 木 (pohon). Artinya apa?<br><br><b>4.</b> РЕСТОРАН dibaca apa?',
      geser: 'geser →' },
    { tipe: 'koreksi', nomor: '4/6',
      pita: 'Soal 5',
      judul: 'Mana yang benar?',
      salah: 'I will call when he will arrive.', benar: 'I will call when he arrives.',
      sebab: 'Kalau kamu langsung tahu yang kedua benar — <b>kamu sudah melewati kesalahan paling awet penutur Indonesia.</b>',
      geser: 'geser →' },
    { tipe: 'daftar', nomor: '5/6',
      pita: 'Kunci',
      judul: 'Cocokkan jawabanmu',
      butir: [['1. a-ki','musim gugur'],['2. san','gunung'],['3. istirahat','orang bersandar di pohon'],
              ['4. restoran','Р=R, Е=E, С=S, Т=T, О=O, Р=R, А=A, Н=N'],['5. when he arrives','sesudah when, pakai bentuk sekarang']],
      geser: 'geser →' },
    { tipe: 'jual', nomor: '6/6',
      pita: 'Kalau kebanyakan benar',
      judul: 'Kamu belajar lebih cepat dari yang kamu kira.',
      isi: 'Lima hari, lima aksara, tanpa kelas. Bayangkan dengan urutan yang tersusun: 326 pelajaran, 767 latihan, sembilan bahasa. Sekali bayar Rp199.000.' }],
  caption: `Uji diri: lima soal dari materi pekan ini. Jawab dalam hati, kunci di slide 5.

Kalau kamu bisa menjawab tiga saja, itu bukan kebetulan — itu bukti bahwa aksara asing memang bisa dipelajari orang dewasa dengan cepat, asal diajarkan polanya dulu, bukan hafalannya.

Berapa yang kamu dapat? Tulis di komentar 👇

Pekan depan: tata bahasa. Bagian yang paling sering bikin orang menyerah, dan paling jarang dijelaskan dengan benar.`,
  tagar: TAGAR.umum },

{ hari: 7, slot: 3, jenis: 'tunggal', nama: 'relate-bakat',
  gambar: [{ tipe: 'hook', glif: '!',
    pita: 'Yang perlu diluruskan',
    judul: 'Tidak ada yang namanya <span class="api">"tidak berbakat bahasa".</span>',
    isi: 'Kamu sudah menguasai satu bahasa penuh sebelum umur lima tahun, tanpa buku dan tanpa guru. Mesinnya jelas ada.<br><br><b>Yang tidak ada selama ini: urutan yang masuk akal, dan penjelasan kenapa kamu salah.</b>',
    kaki: 'Bahasa Indonesia juga bahasa asing — bagi orang lain.' }],
  caption: `"Saya memang tidak berbakat bahasa."

Kalimat ini hampir selalu keliru, dan ini alasannya.

Kamu sudah menguasai satu bahasa penuh sebelum umur lima tahun — lengkap dengan imbuhan, urutan kata, dan nada bicara — tanpa buku, tanpa kelas, tanpa satu pun tabel tata bahasa.

Mesinnya jelas ada. Yang tidak ada selama ini cuma dua: urutan belajar yang masuk akal, dan orang yang menjelaskan kenapa kamu salah, bukan sekadar bilang salah.

Bahasa Indonesia yang kamu pakai tiap hari itu, bagi orang Jerman, termasuk bahasa yang cukup sulit.

Kamu bukan tidak berbakat. Kamu cuma belum pernah diajari dengan benar.`,
  tagar: TAGAR.umum },

{ hari: 7, slot: 4, jenis: 'tunggal', nama: 'jual-pekan1-tutup',
  gambar: [{ tipe: 'jual',
    pita: 'Penutup pekan pertama',
    judul: 'Lima aksara gratis. <span class="emas">Sisanya di dalam.</span>',
    isi: 'Sembilan bahasa, 326 pelajaran berurutan, 9.052 entri kamus, 767 latihan, sepuluh simulasi ujian. Sekali bayar, tanpa tanggal kedaluwarsa.' }],
  caption: `Pekan ini kamu dapat lima aksara, empat kesalahan yang tidak pernah dijelaskan, dan sepuluh kata kantor — semuanya gratis dari feed ini.

Itu memang niatnya. Kalau tujuh hari saja sudah berguna, kamu jadi tahu isi aplikasinya seperti apa sebelum mengeluarkan uang.

Yang di dalam: 326 pelajaran berurutan A1–C2, 9.052 entri kamus sembilan bahasa, 767 latihan yang masing-masing menjelaskan kebiasaan berbahasa Indonesia mana yang menyeretmu, dan sepuluh simulasi ujian resmi.

Rp199.000 untuk 5 bahasa. Rp299.000 untuk 9. Sekali bayar, dipakai selamanya.

sankalingogo.com — link di bio.`,
  tagar: TAGAR.jual + ' ' + TAGAR.umum },

];
