/* RUSIA — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk 18 topik yang sudah ada. Topik inti ru-g1..ru-g10
      cuma punya dua latihan dan topik lanjutan ru-p1..ru-p8 punya tiga,
      sementara topik bahasa Inggris rata-rata 4,7. Ditambah tiga untuk
      tiap topik inti dan dua untuk tiap topik lanjutan.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (ru-q1..ru-q5). Semuanya tata bahasa dasar yang
      belum tertutup ru-g* maupun ru-p*, dan tiap satunya punya titik
      gelincir yang khas penutur Indonesia:
        q1 числительные — angka mengubah kasus kata bendanya
        q2 свой         — "-nya" yang salah pakai mengubah siapa pemiliknya
        q3 множественное число — jamak yang tidak beraturan
        q4 нет + родительный — menyangkal keberadaan mengubah kasus
        q5 степени сравнения — perbandingan

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema uang dan kesehatan
      sehari-hari. Grup "Belanja" dan "Keadaan Darurat" sudah ada, jadi
      yang ditambah di sini urusan bank dan kunjungan dokter biasa.

      Romanisasi paket ini DIBERI TANDA TEKANAN, karena tekanan dalam
      bahasa Rusia tidak bisa ditebak dari ejaannya dan mengubah makna.

   Awalan id: tata bahasa ru-q, kosakata ru-qv-, supaya tidak pernah
   bentrok dengan ru-g*, ru-p*, ru-v*, ru-pv*.                          */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK YANG SUDAH ADA ═══════════════ */
grammar: [

{ id:'ru-g1', drills:[
  { t:'mcq', q:'"Saya seorang mahasiswa" =', opts:['Я есть студент','Я студент','Я быть студент','Я являюсь студент'], a:1,
    why:'Bahasa Rusia masa kini tidak memakai kata kerja "adalah".' },
  { t:'mcq', q:'Kata kerja "adalah" muncul kembali pada bentuk', opts:['masa kini','lampau dan masa depan','perintah','pengandaian'], a:1,
    why:'Он был студентом, он будет студентом.' },
  { t:'mcq', q:'Tanda hubung — dipakai antara dua kata benda ketika', opts:['kalimatnya panjang','keduanya kata benda dalam kasus nominatif','ada kata sifat','ada kata ganti'], a:1,
    why:'Москва — столица России.' } ] },

{ id:'ru-g2', drills:[
  { t:'mcq', q:'Jumlah kasus dalam bahasa Rusia adalah', opts:['empat','lima','enam','tujuh'], a:2,
    why:'Именительный, родительный, дательный, винительный, творительный, предложный.' },
  { t:'mcq', q:'Yang menentukan kasus sebuah kata benda adalah', opts:['artinya','peran kata itu dalam kalimat','panjangnya','jenis kelaminnya'], a:1,
    why:'Peran — pelaku, sasaran, kepemilikan — yang menentukan akhirannya.' },
  { t:'mcq', q:'Kasus dasar yang tercantum di kamus adalah', opts:['родительный','именительный','винительный','предложный'], a:1,
    why:'Bentuk kamus selalu nominatif tunggal.' } ] },

{ id:'ru-g3', drills:[
  { t:'mcq', q:'Aspek tidak sempurna (несовершенный вид) menekankan', opts:['hasil akhir','proses atau pengulangan','perintah','kemungkinan'], a:1,
    why:'Я читал книгу — menekankan kegiatannya, bukan selesainya.' },
  { t:'mcq', q:'Aspek sempurna (совершенный вид) TIDAK punya bentuk', opts:['lampau','masa depan','masa kini','perintah'], a:2,
    why:'Sesuatu yang selesai tidak bisa sedang berlangsung sekarang.' },
  { t:'mcq', q:'Я прочитал книгу berarti', opts:['saya sedang membaca buku','saya sudah selesai membaca buku','saya biasa membaca buku','saya akan membaca buku'], a:1,
    why:'Awalan про- menandai penyelesaian.' } ] },

{ id:'ru-g4', drills:[
  { t:'mcq', q:'Kata benda berakhiran -а atau -я biasanya berjenis', opts:['laki-laki','perempuan','netral','tidak tentu'], a:1,
    why:'книга, неделя — perempuan.' },
  { t:'mcq', q:'Kata benda berakhiran -о atau -е berjenis', opts:['laki-laki','perempuan','netral','jamak'], a:2,
    why:'окно, море — netral.' },
  { t:'mcq', q:'Kata папа dan дядя berjenis', opts:['perempuan karena berakhiran -а','laki-laki meski berakhiran -а','netral','dua-duanya'], a:1,
    why:'Jenisnya ditentukan maknanya, bukan akhirannya.' } ] },

{ id:'ru-g5', drills:[
  { t:'mcq', q:'Kasus akusatif menandai', opts:['pelaku','sasaran langsung perbuatan','kepemilikan','alat'], a:1,
    why:'Я читаю книгу — buku sasarannya.' },
  { t:'mcq', q:'Kata benda laki-laki BERNYAWA dalam akusatif berbentuk sama dengan', opts:['nominatif','genitif','datif','instrumental'], a:1,
    why:'Я вижу брата — bentuknya sama dengan genitif.' },
  { t:'mcq', q:'Kata benda laki-laki TIDAK bernyawa dalam akusatif berbentuk sama dengan', opts:['nominatif','genitif','datif','predlozhnyj'], a:0,
    why:'Я вижу стол — bentuknya tidak berubah.' } ] },

{ id:'ru-g6', drills:[
  { t:'mcq', q:'Kasus preposisional selalu didahului', opts:['kata kerja','kata depan','kata sifat','angka'], a:1,
    why:'Namanya sendiri menunjukkan: tidak pernah berdiri tanpa kata depan.' },
  { t:'mcq', q:'"Di sekolah" =', opts:['в школу','в школе','в школы','в школой'], a:1,
    why:'в + preposisional menyatakan tempat berada.' },
  { t:'mcq', q:'"Ke sekolah" =', opts:['в школе','в школу','в школы','в школой'], a:1,
    why:'в + akusatif menyatakan arah tujuan.' } ] },

{ id:'ru-g7', drills:[
  { t:'mcq', q:'Kasus genitif menyatakan', opts:['sasaran','kepemilikan atau ketiadaan','alat','tempat'], a:1,
    why:'книга брата, нет времени.' },
  { t:'mcq', q:'Sesudah kata у dipakai kasus', opts:['nominatif','genitif','datif','instrumental'], a:1,
    why:'У меня есть книга — "pada saya ada buku".' },
  { t:'mcq', q:'"Saya punya waktu" dalam bahasa Rusia diungkapkan sebagai', opts:['Я имею время','У меня есть время','Мне есть время','Я есть время'], a:1,
    why:'Bahasa Rusia menyusunnya sebagai "pada saya ada", bukan "saya punya".' } ] },

{ id:'ru-g8', drills:[
  { t:'mcq', q:'идти dan ходить berbeda dalam hal', opts:['waktu','arah tunggal atau berulang','kesopanan','jenis kelamin'], a:1,
    why:'идти satu arah saat ini, ходить berulang atau bolak-balik.' },
  { t:'mcq', q:'"Saya sedang berjalan ke sekolah (sekarang)" =', opts:['Я хожу в школу','Я иду в школу','Я ездил в школу','Я пойду в школу'], a:1,
    why:'Satu arah dan sedang berlangsung memakai идти.' },
  { t:'mcq', q:'Yang dipakai untuk perjalanan berkendaraan adalah', opts:['идти / ходить','ехать / ездить','нести / носить','вести / водить'], a:1,
    why:'Bahasa Rusia membedakan berjalan kaki dan berkendaraan.' } ] },

{ id:'ru-g9', drills:[
  { t:'mcq', q:'Kasus datif menandai', opts:['penerima perbuatan','alat','tempat','pelaku'], a:0,
    why:'Я дал брату книгу — saudara penerimanya.' },
  { t:'mcq', q:'Kasus instrumental menandai', opts:['penerima','alat atau pendamping','tempat','kepemilikan'], a:1,
    why:'Я пишу ручкой, я иду с другом.' },
  { t:'mcq', q:'Sesudah kata с yang berarti "bersama" dipakai kasus', opts:['datif','instrumental','genitif','akusatif'], a:1,
    why:'с другом, с сестрой.' } ] },

{ id:'ru-g10', drills:[
  { t:'mcq', q:'Pasangan aspek biasanya dibentuk dengan', opts:['mengubah jenis kelamin','menambahkan awalan atau mengubah akhiran','menambah kata depan','mengubah tekanan saja'], a:1,
    why:'писать / написать, решать / решить.' },
  { t:'mcq', q:'Masa depan aspek tidak sempurna dibentuk dengan', opts:['awalan','буду + kata kerja dasar','akhiran -ся','tanpa perubahan'], a:1,
    why:'Я буду читать — masa depan yang berproses.' },
  { t:'mcq', q:'Masa depan aspek sempurna berbentuk', opts:['буду + kata kerja','sama seperti bentuk masa kini','memakai бы','memakai -ся'], a:1,
    why:'Я прочитаю berbentuk masa kini tapi bermakna masa depan.' } ] },

{ id:'ru-p1', drills:[
  { t:'mcq', q:'Sesudah kata начать dipakai aspek', opts:['sempurna','tidak sempurna','dua-duanya','tanpa kata kerja'], a:1,
    why:'начать читать — memulai sebuah proses, jadi tidak sempurna.' },
  { t:'mcq', q:'Larangan "jangan lakukan" biasanya memakai aspek', opts:['sempurna','tidak sempurna','tergantung penutur','tidak ada aturannya'], a:1,
    why:'Не открывай окно — larangan umum memakai tidak sempurna.' } ] },

{ id:'ru-p2', drills:[
  { t:'mcq', q:'Awalan при- pada kata kerja gerak berarti', opts:['pergi menjauh','tiba','melewati','masuk'], a:1,
    why:'прийти = datang tiba.' },
  { t:'mcq', q:'Awalan у- berarti', opts:['tiba','pergi meninggalkan tempat','masuk','keluar sebentar'], a:1,
    why:'уйти = pergi meninggalkan.' } ] },

{ id:'ru-p3', drills:[
  { t:'mcq', q:'Причастие berfungsi seperti', opts:['kata keterangan','kata sifat yang dibentuk dari kata kerja','kata depan','kata sambung'], a:1,
    why:'читающий студент = mahasiswa yang sedang membaca.' },
  { t:'mcq', q:'Причастие harus sesuai dengan kata bendanya dalam hal', opts:['jenis, jumlah, dan kasus','waktu saja','aspek saja','tidak perlu sesuai'], a:0,
    why:'Karena berperilaku sebagai kata sifat.' } ] },

{ id:'ru-p4', drills:[
  { t:'mcq', q:'Деепричастие menerangkan', opts:['kata benda','perbuatan lain yang menyertai','tempat','waktu saja'], a:1,
    why:'Читая книгу, он заснул.' },
  { t:'mcq', q:'Syarat memakai деепричастие adalah kedua perbuatan', opts:['dilakukan pelaku yang sama','terjadi di tempat sama','berbeda waktunya','berlawanan'], a:0,
    why:'Kalau pelakunya berbeda, kalimatnya salah.' } ] },

{ id:'ru-p5', drills:[
  { t:'mcq', q:'Partikel бы selalu dipakai bersama kata kerja bentuk', opts:['masa kini','lampau','masa depan','perintah'], a:1,
    why:'Я бы пошёл — meski maknanya bukan lampau.' },
  { t:'mcq', q:'Kalimat dengan бы menyatakan', opts:['kenyataan','pengandaian atau permintaan halus','perintah','larangan'], a:1,
    why:'Я хотел бы… = saya ingin, diperhalus.' } ] },

{ id:'ru-p6', drills:[
  { t:'mcq', q:'Bentuk perintah sopan kepada orang yang belum akrab berakhiran', opts:['-и','-ите','-ешь','-ать'], a:1,
    why:'Скажите, пожалуйста.' },
  { t:'mcq', q:'Permintaan halus sering ditambah kata', opts:['уже','пожалуйста','очень','тоже'], a:1,
    why:'Tanpa itu, kalimat perintah Rusia terdengar tegas.' } ] },

{ id:'ru-p7', drills:[
  { t:'mcq', q:'Dalam kalimat tak langsung bahasa Rusia, waktu kata kerjanya', opts:['digeser mundur seperti bahasa Inggris','tetap seperti kalimat aslinya','selalu jadi lampau','dihilangkan'], a:1,
    why:'Он сказал, что он работает — tetap masa kini.' },
  { t:'mcq', q:'Pertanyaan tak langsung tanpa kata tanya memakai', opts:['что','ли','как','когда'], a:1,
    why:'Он спросил, приду ли я.' } ] },

{ id:'ru-p8', drills:[
  { t:'mcq', q:'Sesudah чтобы, kata kerjanya berbentuk', opts:['masa kini','lampau atau infinitif','masa depan','perintah'], a:1,
    why:'Я хочу, чтобы ты пришёл — berbentuk lampau meski maknanya bukan.' },
  { t:'mcq', q:'если бы menyatakan', opts:['syarat nyata','pengandaian yang tidak terjadi','waktu','sebab'], a:1,
    why:'Если бы я знал… = andai saja saya tahu.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'ru-q1', level:'2', title:'Числительные и падеж', titleId:'Angka Mengubah Kasus Kata Bendanya',
  why:'Bahasa Indonesia menyebut jumlah tanpa mengubah apa pun: satu buku, dua buku, lima buku. Bahasa Rusia mengubah bentuk kata bendanya tiga kali menurut angkanya — 1 nominatif, 2–4 genitif tunggal, 5 ke atas genitif jamak. Karena tidak ada bahasa yang dikenal penutur Indonesia yang berlaku begitu, aturan ini biasanya baru disadari setelah berkali-kali dikoreksi.',
  form:'1 (и 21, 31…) + именительный единственного: один час, двадцать один час\n2, 3, 4 (и 22, 23…) + родительный ЕДИНСТВЕННОГО: два часа, три книги\n5–20 dan seterusnya + родительный МНОЖЕСТВЕННОГО: пять часов, десять книг\nAngka berakhiran 11–14 selalu genitif jamak: одиннадцать часов\nСколько + родительный множественного: сколько книг?',
  notes:['Yang menentukan adalah angka TERAKHIR, kecuali untuk 11–14 yang selalu genitif jamak.',
         'один berubah menurut jenis kata bendanya: один стол, одна книга, одно окно.',
         'два untuk laki-laki dan netral, две untuk perempuan — satu-satunya angka yang berjenis kelamin.',
         'Sesudah много, мало, несколько juga dipakai genitif jamak.',
         'Aturan ini berlaku pada kasus nominatif dan akusatif; di kasus lain seluruh frasa ikut berubah bersama.'],
  ex:[['У меня одна книга.','Saya punya satu buku.','u menyá odná kníga.'],
      ['Я купил две книги.','Saya membeli dua buku.','ya kupíl dve knígi.'],
      ['В комнате пять книг.','Di kamar ada lima buku.','v kómnate pyat knig.'],
      ['Сейчас три часа.','Sekarang jam tiga.','seychás tri chasá.'],
      ['Прошло одиннадцать дней.','Sudah lewat sebelas hari.','proshló odínnadtsat dney.'],
      ['Сколько студентов в группе?','Berapa mahasiswa di kelompok itu?','skólko studéntov v grúppe?']],
  traps:[['две книга','две книги','2–4 diikuti genitif tunggal.'],
         ['пять книги','пять книг','5 ke atas diikuti genitif jamak.'],
         ['двадцать два часов','двадцать два часа','Yang menentukan angka terakhir, yaitu 2.'],
         ['два книги (untuk книга)','две книги','книга perempuan, jadi angkanya две.']],
  drills:[
    { t:'mcq', q:'"Dua buku" =', opts:['два книга','две книги','две книг','два книг'], a:1,
      why:'книга perempuan jadi две, dan 2–4 diikuti genitif tunggal.' },
    { t:'mcq', q:'"Lima buku" =', opts:['пять книга','пять книги','пять книг','пять книгу'], a:2,
      why:'5 ke atas diikuti genitif jamak.' },
    { t:'mcq', q:'Yang menentukan bentuk kata benda pada angka majemuk adalah', opts:['angka pertamanya','angka terakhirnya','panjang angkanya','jenis kata bendanya'], a:1,
      why:'двадцать два часа — yang menentukan angka 2 di belakang.' },
    { t:'fill', q:'Сейчас три ___. (jam tiga — час)', a:['часа'],
      why:'Angka 3 diikuti genitif tunggal.' },
    { t:'mcq', q:'Angka berakhiran 11–14 selalu diikuti', opts:['nominatif tunggal','genitif tunggal','genitif jamak','datif'], a:2,
      why:'одиннадцать дней — kecualian yang harus dihafal.' } ] },

{ id:'ru-q2', level:'2', title:'Свой и притяжательные местоимения', titleId:'Kata Milik dan Jebakan свой',
  why:'Bahasa Indonesia memakai "-nya" untuk siapa saja: "dia mengambil bukunya" bisa berarti bukunya sendiri atau buku orang lain, dan konteks yang menyelesaikannya. Bahasa Rusia memaksa memilih: свой berarti milik SUBJEK kalimat itu, его berarti milik orang lain. Memilih yang salah bukan membuat kalimat janggal, melainkan mengubah siapa pemiliknya — dan penutur Indonesia hampir selalu memakai его karena itulah yang terasa seperti "-nya".',
  form:'мой / твой / наш / ваш — berubah menurut jenis, jumlah, kasus benda yang dimiliki\nего / её / их — TIDAK PERNAH berubah bentuk\nсвой — milik SUBJEK kalimat, berubah seperti мой\nОн взял свою книгу = dia mengambil bukunya SENDIRI\nОн взял его книгу = dia mengambil buku ORANG LAIN',
  notes:['свой tidak pernah dipakai sebagai subjek kalimat — ia selalu menerangkan benda yang dimiliki.',
         'Untuk orang pertama dan kedua, свой boleh dipakai boleh tidak: я люблю свою работу dan я люблю мою работу dua-duanya sah.',
         'Untuk orang ketiga, pilihannya WAJIB dan mengubah makna.',
         'его, её, их tidak ikut berubah walaupun bendanya berubah kasus — satu-satunya kata milik yang tetap.',
         'свой juga dipakai dengan makna "sendiri" dalam ungkapan: своими глазами = dengan mata kepala sendiri.'],
  ex:[['Он взял свою книгу.','Dia mengambil bukunya sendiri.','on vzyal svoyú knígu.'],
      ['Он взял его книгу.','Dia mengambil buku orang lain.','on vzyal yevó knígu.'],
      ['Я люблю свою работу.','Saya mencintai pekerjaan saya.','ya lyublyú svoyú rabótu.'],
      ['Она рассказала о своей семье.','Dia bercerita tentang keluarganya sendiri.','oná rasskazála o svoyéy semyé.'],
      ['Это её сумка.','Ini tas dia (perempuan).','éto yeyó súmka.'],
      ['Они продали свой дом.','Mereka menjual rumah mereka sendiri.','oní prodáli svoy dom.']],
  traps:[['Он взял его книгу untuk maksud "bukunya sendiri"','Он взял свою книгу','его menunjuk orang lain, bukan subjek kalimat.'],
         ['Свой брат работает здесь','Его брат работает здесь','свой tidak boleh jadi subjek.'],
         ['Он говорил о его семье (maksudnya keluarganya sendiri)','Он говорил о своей семье','Milik subjek memakai свой.'],
         ['ихний','их','ихний bukan bahasa baku.']],
  drills:[
    { t:'mcq', q:'"Dia mengambil bukunya SENDIRI" =', opts:['Он взял его книгу','Он взял свою книгу','Он взял её книгу','Он взял книгу его'], a:1,
      why:'Milik subjek kalimat memakai свой.' },
    { t:'mcq', q:'Kata milik yang TIDAK pernah berubah bentuk adalah', opts:['мой','свой','его, её, их','наш'], a:2,
      why:'Ketiganya tetap apa pun kasus dan jenis bendanya.' },
    { t:'mcq', q:'свой TIDAK boleh dipakai sebagai', opts:['penerang objek','subjek kalimat','keterangan','pelengkap'], a:1,
      why:'Свой брат… salah; harus Его брат….' },
    { t:'fill', q:'Она рассказала о ___ семье. (tentang keluarganya sendiri)', a:['своей'],
      why:'Milik subjek, dalam kasus preposisional bentuk perempuan.' },
    { t:'mcq', q:'Untuk orang pertama, свой dan мой', opts:['artinya berbeda','dua-duanya sah dan artinya sama','tidak boleh dipakai','hanya свой yang benar'], a:1,
      why:'Wajibnya memilih hanya berlaku pada orang ketiga.' } ] },

{ id:'ru-q3', level:'1', title:'Множественное число', titleId:'Bentuk Jamak',
  why:'Bahasa Indonesia menyatakan jamak dengan mengulang kata atau menambahkan angka, dan bentuk kata bendanya tidak berubah sama sekali. Bahasa Rusia mengubah akhirannya menurut jenis kelamin, lalu menyimpan puluhan kecualian yang harus dihafal — дом jadi дома, друг jadi друзья, ребёнок jadi дети. Penutur Indonesia yang menghafal satu aturan akan tersandung pada kata-kata yang paling sering dipakai, karena justru kata seharilah yang paling banyak menyimpang.',
  form:'Laki-laki: konsonan + -ы / -и — стол → столы, словарь → словари\nPerempuan: -а → -ы, -я → -и — книга → книги, неделя → недели\nNetral: -о → -а, -е → -я — окно → окна, море → моря\nSesudah к, г, х, ж, ч, ш, щ selalu -и: книга → книги\nKecualian sering: дом → дома, город → города, друг → друзья, брат → братья, ребёнок → дети, человек → люди',
  notes:['Akhiran -а pada jamak laki-laki (дома, города) selalu bertekanan dan harus dihafal satu per satu.',
         'Kata benda yang berakhiran -ь bisa laki-laki maupun perempuan; jamaknya sama-sama -и tetapi kasus lainnya berbeda.',
         'человек memakai bentuk люди untuk jamak, tetapi sesudah angka tetap человек: пять человек.',
         'Sebagian kata hanya ada dalam bentuk jamak: деньги, очки, часы (jam tangan).',
         'Tekanan sering berpindah saat berjamak — окно́ jadi о́кна — dan ini tidak terlihat dari ejaannya.'],
  ex:[['В комнате два стола.','Di kamar ada dua meja.','v kómnate dva stolá.'],
      ['Это мои книги.','Ini buku-buku saya.','éto moí knígi.'],
      ['Окна в доме большие.','Jendela-jendela di rumah itu besar.','ókna v dóme bolshíye.'],
      ['Мои друзья живут в Москве.','Teman-teman saya tinggal di Moskwa.','moí druzyá zhivút v Moskvé.'],
      ['В парке много людей.','Di taman banyak orang.','v párke mnógo lyudéy.'],
      ['Где мои очки?','Di mana kacamata saya?','gde moí ochkí?']],
  traps:[['другы','друзья','Kata sehari-hari justru paling banyak menyimpang.'],
         ['человеки','люди','Bentuk jamaknya sama sekali berbeda.'],
         ['книгы','книги','Sesudah г selalu -и, tidak pernah -ы.'],
         ['домы','дома','Sebagian kata laki-laki berjamak dengan -а bertekanan.']],
  drills:[
    { t:'mcq', q:'Bentuk jamak dari книга adalah', opts:['книгы','книги','книгa','книгу'], a:1,
      why:'Sesudah г selalu dipakai -и.' },
    { t:'mcq', q:'Bentuk jamak dari друг adalah', opts:['другы','други','друзья','другие'], a:2,
      why:'Kecualian yang harus dihafal.' },
    { t:'mcq', q:'Bentuk jamak dari человек adalah', opts:['человеки','человека','люди','человеков'], a:2,
      why:'Bentuknya berbeda sama sekali dari bentuk tunggalnya.' },
    { t:'fill', q:'Это мои ___. (buku-buku saya — книга)', a:['книги'],
      why:'Jamak dari книга.' },
    { t:'mcq', q:'Kata деньги, очки, часы adalah kata yang', opts:['hanya ada dalam bentuk tunggal','hanya ada dalam bentuk jamak','tidak berubah','berjenis netral'], a:1,
      why:'Tidak punya bentuk tunggal sama sekali.' } ] },

{ id:'ru-q4', level:'2', title:'Отрицание и родительный падеж', titleId:'Menyangkal Keberadaan',
  why:'Bahasa Indonesia menyangkal dengan menambahkan satu kata: "ada" jadi "tidak ada", dan kata bendanya diam saja. Bahasa Rusia mengubah kalimatnya secara menyeluruh: subjeknya berpindah ke kasus genitif dan kalimatnya kehilangan subjek nominatif sama sekali. Karena itu Брата нет дома bukan sekadar penyangkalan Брат дома — susunannya berbeda, dan penutur Indonesia yang cuma menempelkan не akan salah.',
  form:'ADA: есть + именительный — У меня есть время\nTIDAK ADA: нет + родительный — У меня нет времени\nLAMPAU: не было + родительный — У меня не было времени\nMASA DEPAN: не будет + родительный — У меня не будет времени\nKeberadaan di tempat: Брат дома → Брата нет дома',
  notes:['нет, не было, не будет ketiganya menuntut genitif, tidak peduli waktunya.',
         'не было selalu berbentuk netral tunggal, tidak peduli jenis kata bendanya.',
         'Kalau yang disangkal bukan keberadaan melainkan sifat, kasusnya tidak berubah: Он не студент.',
         'Objek langsung yang disangkal boleh genitif boleh akusatif: Я не читал книгу atau книги — keduanya dipakai.',
         'Bahasa Rusia membolehkan penyangkalan berganda dan itu justru yang baku: Я никогда ничего не говорил.'],
  ex:[['У меня нет времени.','Saya tidak punya waktu.','u menyá net vrémeni.'],
      ['Брата нет дома.','Saudara laki-laki saya tidak ada di rumah.','bráta net dóma.'],
      ['Вчера у нас не было воды.','Kemarin kami tidak punya air.','vcherá u nas ne býlo vodý.'],
      ['Завтра не будет урока.','Besok tidak ada pelajaran.','závtra ne búdet uróka.'],
      ['Я никогда ничего не говорил.','Saya tidak pernah mengatakan apa pun.','ya nikogdá nichevó ne govoríl.'],
      ['В городе нет метро.','Di kota itu tidak ada kereta bawah tanah.','v górode net metró.']],
  traps:[['У меня нет время','У меня нет времени','нет menuntut genitif.'],
         ['Брат нет дома','Брата нет дома','Subjeknya pun berpindah ke genitif.'],
         ['У меня не была воды','У меня не было воды','не было selalu berbentuk netral.'],
         ['Я не говорил ничего… tanpa не','Я ничего не говорил','Penyangkalan berganda justru yang baku.']],
  drills:[
    { t:'mcq', q:'"Saya tidak punya waktu" =', opts:['У меня нет время','У меня нет времени','У меня не время','Я не имею время'], a:1,
      why:'нет selalu diikuti genitif.' },
    { t:'mcq', q:'"Saudara saya tidak ada di rumah" =', opts:['Брат нет дома','Брата нет дома','Брату нет дома','Брат не дома'], a:1,
      why:'Subjeknya berpindah ke genitif.' },
    { t:'mcq', q:'Bentuk lampau dari нет adalah', opts:['не был','не была','не было','не были'], a:2,
      why:'Selalu netral tunggal, tidak peduli jenis kata bendanya.' },
    { t:'fill', q:'Завтра не будет ___. (tidak ada pelajaran — урок)', a:['урока'],
      why:'не будет menuntut genitif.' },
    { t:'mcq', q:'Penyangkalan berganda dalam bahasa Rusia', opts:['salah','justru bentuk yang baku','hanya di percakapan','hanya di puisi'], a:1,
      why:'Я ничего не знаю — dua penyangkalan dalam satu kalimat.' } ] },

{ id:'ru-q5', level:'2', title:'Степени сравнения', titleId:'Perbandingan',
  why:'Bahasa Indonesia membandingkan dengan menyisipkan "lebih" dan "daripada" tanpa mengubah kata sifatnya. Bahasa Rusia punya dua jalan yang tidak boleh dicampur — bentuk pendek (интереснее) atau bentuk panjang dengan более — dan pilihan itu menentukan pula bagaimana pembandingnya disebut: dengan genitif tanpa kata, atau dengan чем. Penutur Indonesia sering menggabungkan keduanya sekaligus menjadi более интереснее, yang salah dalam bahasa Rusia.',
  form:'Bentuk pendek: интересный → интереснее, быстрый → быстрее\nBentuk panjang: более + kata sifat dasar — более интересный\nPembanding: genitif tanpa kata — Он старше меня\n            atau чем + nominatif — Он старше, чем я\nSuperlatif: самый + kata sifat — самый интересный\nKecualian: хороший → лучше, плохой → хуже, большой → больше, маленький → меньше',
  notes:['более dan bentuk pendek TIDAK boleh dipakai bersamaan.',
         'Bentuk pendek tidak berubah menurut jenis maupun kasus — ia sudah jadi kata keterangan bentuknya.',
         'Kalau pembandingnya bukan kata benda sederhana, memakai чем lebih aman.',
         'самый berubah mengikuti kata bendanya: самая интересная книга.',
         'лучше dan хуже sering dipakai sebagai kata keterangan juga: он говорит лучше.'],
  ex:[['Эта книга интереснее.','Buku ini lebih menarik.','éta kníga interésneye.'],
      ['Он старше меня на два года.','Dia dua tahun lebih tua dari saya.','on stárshe menyá na dva góda.'],
      ['Москва больше, чем Казань.','Moskwa lebih besar daripada Kazan.','Moskvá bólshe, chem Kazán.'],
      ['Это самый интересный фильм.','Ini film yang paling menarik.','éto sámyy interésnyy film.'],
      ['Сегодня погода хуже, чем вчера.','Hari ini cuacanya lebih buruk daripada kemarin.','sevódnya pogóda khúzhe, chem vcherá.'],
      ['Он говорит по-русски лучше всех.','Dia berbahasa Rusia paling baik di antara semuanya.','on govorít po-rússki lúchshe vsekh.']],
  traps:[['более интереснее','интереснее','Dua cara membandingkan tidak boleh ditumpuk.'],
         ['Он старше от меня','Он старше меня','Pembandingnya cukup genitif tanpa kata depan.'],
         ['более хороший','лучше','хороший punya bentuk perbandingan sendiri.'],
         ['самый лучше','самый лучший','Superlatif memakai bentuk panjang.']],
  drills:[
    { t:'mcq', q:'"Buku ini lebih menarik" =', opts:['Эта книга более интереснее','Эта книга интереснее','Эта книга самый интересный','Эта книга более интересно'], a:1,
      why:'более tidak boleh digabung dengan bentuk pendek.' },
    { t:'mcq', q:'"Dia lebih tua dari saya" =', opts:['Он старше от меня','Он старше меня','Он более старше меня','Он старее меня'], a:1,
      why:'Pembandingnya dinyatakan dengan genitif tanpa kata depan.' },
    { t:'mcq', q:'Bentuk perbandingan dari хороший adalah', opts:['хорошее','более хороший','лучше','самый хороший'], a:2,
      why:'Termasuk kecualian yang harus dihafal.' },
    { t:'fill', q:'Это ___ интересный фильм. (paling menarik)', a:['самый'],
      why:'Superlatif memakai самый + bentuk panjang.' },
    { t:'mcq', q:'Bentuk pendek perbandingan seperti интереснее', opts:['berubah menurut jenis kelamin','tidak berubah sama sekali','berubah menurut kasus','hanya untuk jamak'], a:1,
      why:'Bentuknya tetap apa pun kata bendanya.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'ru-qv-dengi', title:'Деньги и здоровье', titleId:'Uang, Bank & Ke Dokter', level:'A2', words:[
  ['деньги','dén-gi','uang'],
  ['наличные','nalíchnyye','uang tunai'],
  ['банк','bank','bank'],
  ['счёт','schyot','rekening'],
  ['карта','kárta','kartu'],
  ['пароль','paról','kata sandi'],
  ['банкомат','bankomát','mesin ATM'],
  ['снять деньги','snyat dén-gi','menarik uang'],
  ['положить деньги','polozhít dén-gi','menyetor uang'],
  ['перевод','perevód','transfer'],
  ['валюта','valyúta','mata uang'],
  ['курс','kurs','kurs'],
  ['комиссия','komíssiya','biaya administrasi'],
  ['счёт за услуги','schyot za uslúgi','tagihan'],
  ['чек','chek','struk'],
  ['зарплата','zarpláta','gaji'],
  ['кредит','kredít','pinjaman'],
  ['долг','dolg','utang'],
  ['сбережения','sberezhéniya','tabungan'],
  ['бюджет','byudzhét','anggaran'],
  ['врач','vrach','dokter'],
  ['поликлиника','poliklínika','klinik'],
  ['больница','bolnítsa','rumah sakit'],
  ['запись к врачу','zápis k vrachú','janji dengan dokter'],
  ['аптека','aptéka','apotek'],
  ['лекарство','lekárstvo','obat'],
  ['рецепт','retsépt','resep dokter'],
  ['боль','bol','rasa sakit'],
  ['температура','temperatúra','demam'],
  ['кашель','káshel','batuk'],
  ['насморк','násmork','pilek'],
  ['головная боль','golovnáya bol','sakit kepala'],
  ['тошнота','toshnotá','mual'],
  ['аллергия','allergíya','alergi'],
  ['анализ','análiz','pemeriksaan laboratorium'],
  ['укол','ukól','suntikan'],
  ['отдых','ótdykh','istirahat'],
  ['страховка','strakhóvka','asuransi'],
  ['скорая помощь','skóraya pómoshch','ambulans'],
  ['выздоровление','vyzdorovléniye','kesembuhan']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Bank & Urusan Uang', items:[
  ['Я хочу открыть счёт.','ya khochú otkrýt schyot.','Saya ingin membuka rekening.'],
  ['Где ближайший банкомат?','gde blizháyshiy bankomát?','Di mana ATM terdekat?'],
  ['Какой сегодня курс?','kakóy sevódnya kurs?','Berapa kursnya hari ini?'],
  ['Есть ли комиссия?','yest li komíssiya?','Apakah ada biaya administrasinya?'],
  ['Я хочу снять деньги.','ya khochú snyat dén-gi.','Saya ingin menarik uang.'],
  ['Можно сделать перевод?','mózhno sdélat perevód?','Bisakah melakukan transfer?'],
  ['Дайте, пожалуйста, чек.','dáyte, pozháluysta, chek.','Tolong berikan struknya.'],
  ['Я забыл пароль.','ya zabýl paról.','Saya lupa kata sandinya.']
] },
{ g:'Di Klinik & Apotek', items:[
  ['Я хочу записаться к врачу.','ya khochú zapisátsya k vrachú.','Saya ingin membuat janji dengan dokter.'],
  ['У меня болит здесь.','u menyá bolít zdes.','Saya sakit di sini.'],
  ['У меня температура два дня.','u menyá temperatúra dva dnya.','Saya demam dua hari.'],
  ['У вас есть аллергия?','u vas yest allergíya?','Apakah Anda punya alergi?'],
  ['Мне нужен рецепт.','mne núzhen retsépt.','Saya perlu resep dokter.'],
  ['Как принимать это лекарство?','kak prinimát éto lekárstvo?','Bagaimana cara minum obat ini?'],
  ['Это лекарство без рецепта?','éto lekárstvo bez retsépta?','Apakah obat ini bisa tanpa resep?'],
  ['У меня есть страховка.','u menyá yest strakhóvka.','Saya punya asuransi.']
] }
]

};
