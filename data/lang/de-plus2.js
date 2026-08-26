/* JERMAN — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk sebelas topik inti de-g1..de-g11. Tiap topik inti
      cuma punya dua latihan, sementara de-g12..de-g18 sudah punya empat
      dan topik bahasa Inggris rata-rata 4,7. Yang timpang justru topik
      DASARNYA. Ditambah tiga per topik inti.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (de-q1..de-q5). Semuanya tata bahasa dasar yang
      belum tertutup de-g*, dan tiap satunya punya titik gelincir yang
      khas penutur Indonesia:
        q1 Wechselpräpositionen — satu kata depan, dua kasus
        q2 Präteritum          — bentuk lampau tulis yang belum diajarkan
        q3 Imperativ           — perintah yang berubah menurut lawan bicara
        q4 nicht atau kein     — dua cara menyangkal, satu kata "tidak"
        q5 Komparativ          — perbandingan

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema uang dan kesehatan
      sehari-hari. Grup "Belanja" dan "Keadaan Darurat" sudah ada, jadi
      yang ditambah di sini urusan bank dan kunjungan dokter biasa.

   Awalan id: tata bahasa de-q, kosakata de-qv-, supaya tidak pernah
   bentrok dengan de-g*, de-v*.
   Kolom kedua adalah ancar-ancar bunyi dengan ejaan Indonesia.         */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK INTI ═════════════════════════ */
grammar: [

{ id:'de-g1', drills:[
  { t:'mcq', q:'Kata benda berakhiran -ung hampir selalu', opts:['der','die','das','tidak tentu'], a:1,
    why:'die Wohnung, die Zeitung, die Rechnung — tanpa kecuali yang berarti.' },
  { t:'mcq', q:'Kata benda berakhiran -chen atau -lein selalu', opts:['der','die','das','jamak'], a:2,
    why:'das Mädchen — bentuk pengecil selalu netral, meski maknanya perempuan.' },
  { t:'mcq', q:'Kata sandang jamak untuk semua jenis adalah', opts:['der','die','das','den'], a:1,
    why:'Dalam nominatif jamak, ketiga jenis memakai die.' } ] },

{ id:'de-g2', drills:[
  { t:'mcq', q:'"Morgen fahre ich nach Berlin" menempatkan kata kerja di posisi', opts:['pertama','kedua','ketiga','terakhir'], a:1,
    why:'Apa pun yang di depan, kata kerja tetap di posisi kedua.' },
  { t:'mcq', q:'Kalau kalimat diawali keterangan, subjeknya', opts:['dihilangkan','pindah ke belakang kata kerja','tetap di depan','diulang'], a:1,
    why:'Posisi kedua milik kata kerja, jadi subjeknya bergeser.' },
  { t:'mcq', q:'Yang benar adalah', opts:['Heute ich gehe ins Kino','Heute gehe ich ins Kino','Ich heute gehe ins Kino','Gehe heute ich ins Kino'], a:1,
    why:'Kata kerja di posisi kedua, subjek menyusul.' } ] },

{ id:'de-g3', drills:[
  { t:'mcq', q:'Kata sandang der berubah menjadi den dalam kasus', opts:['Nominativ','Akkusativ','Dativ','Genitiv'], a:1,
    why:'Hanya jenis laki-laki yang berubah bentuk di akusatif.' },
  { t:'mcq', q:'"Ich sehe ___ Mann" =', opts:['der','den','dem','des'], a:1,
    why:'Sasaran perbuatan memakai akusatif.' },
  { t:'mcq', q:'Kata sandang die dan das dalam akusatif', opts:['berubah jadi den','berubah jadi dem','tidak berubah','hilang'], a:2,
    why:'Karena itu kesalahan akusatif paling sering terjadi pada kata laki-laki.' } ] },

{ id:'de-g4', drills:[
  { t:'mcq', q:'Pada kalimat utama, awalan kata kerja terpisah diletakkan', opts:['tetap menempel','di akhir kalimat','sebelum subjek','sesudah subjek'], a:1,
    why:'Ich stehe um sieben Uhr auf.' },
  { t:'mcq', q:'Dalam anak kalimat, kata kerja terpisah', opts:['tetap terpisah','menyatu kembali di akhir','hilang','pindah ke depan'], a:1,
    why:'…, weil ich um sieben Uhr aufstehe.' },
  { t:'mcq', q:'Yang menentukan sebuah awalan terpisah atau tidak adalah', opts:['panjang katanya','tekanannya','artinya','jumlah hurufnya'], a:1,
    why:'Awalan bertekanan terpisah; awalan tak bertekanan seperti ver-, be-, ent- tidak.' } ] },

{ id:'de-g5', drills:[
  { t:'mcq', q:'Akhiran kata kerja untuk ich adalah', opts:['-e','-st','-t','-en'], a:0,
    why:'ich mache, ich gehe.' },
  { t:'mcq', q:'Bentuk untuk du dari kata kerja fahren adalah', opts:['fahrst','fährst','fahrest','fahren'], a:1,
    why:'Sebagian kata kerja mengubah vokalnya pada du dan er/sie/es.' },
  { t:'mcq', q:'Bentuk wir dan sie (jamak) berakhiran', opts:['-e','-t','-en','-st'], a:2,
    why:'Sama dengan bentuk dasarnya.' } ] },

{ id:'de-g6', drills:[
  { t:'mcq', q:'Dalam kalimat bermodal, kata kerja utamanya diletakkan', opts:['sesudah modal','di akhir kalimat dalam bentuk dasar','sebelum subjek','tidak ditulis'], a:1,
    why:'Ich muss heute arbeiten.' },
  { t:'mcq', q:'Modal yang berarti "boleh" adalah', opts:['müssen','dürfen','sollen','mögen'], a:1,
    why:'dürfen = izin; müssen = keharusan.' },
  { t:'mcq', q:'nicht müssen berarti', opts:['tidak boleh','tidak perlu','harus tidak','belum boleh'], a:1,
    why:'Larangan dinyatakan dengan nicht dürfen, bukan nicht müssen.' } ] },

{ id:'de-g7', drills:[
  { t:'mcq', q:'Perfekt dibentuk dengan', opts:['haben atau sein + Partizip II','werden + Infinitiv','sein + Infinitiv','haben + Infinitiv'], a:0,
    why:'Ich habe gearbeitet; ich bin gegangen.' },
  { t:'mcq', q:'Kata kerja gerak dan perubahan keadaan memakai', opts:['haben','sein','werden','müssen'], a:1,
    why:'gehen, fahren, kommen, aufstehen, sterben — semuanya dengan sein.' },
  { t:'mcq', q:'Partizip II dari kata kerja beraturan berbentuk', opts:['ge- + akar + -t','ge- + akar + -en','akar + -te','akar + -st'], a:0,
    why:'machen jadi gemacht.' } ] },

{ id:'de-g8', drills:[
  { t:'mcq', q:'"Ich helfe ___ Mann" =', opts:['der','den','dem','des'], a:2,
    why:'helfen menuntut datif, bukan akusatif.' },
  { t:'mcq', q:'Kata depan yang SELALU datif adalah', opts:['für, ohne, gegen','mit, nach, bei, seit, von, zu','durch, um','an, auf, in'], a:1,
    why:'Kelompok ini dihafal sebagai satu daftar.' },
  { t:'mcq', q:'Kata sandang die (jamak) dalam datif berubah jadi', opts:['die','den + akhiran -n pada kata bendanya','dem','der'], a:1,
    why:'mit den Kindern — kata bendanya pun bertambah -n.' } ] },

{ id:'de-g9', drills:[
  { t:'mcq', q:'Dalam anak kalimat, kata kerja diletakkan', opts:['posisi kedua','di akhir','di awal','sesudah subjek'], a:1,
    why:'…, weil ich müde bin.' },
  { t:'mcq', q:'weil dan denn berbeda dalam hal', opts:['artinya','susunan kalimat sesudahnya','waktunya','kesopanannya'], a:1,
    why:'Sesudah denn susunannya tetap normal; sesudah weil kata kerjanya ke akhir.' },
  { t:'mcq', q:'Kalau anak kalimat diletakkan di DEPAN, kalimat utamanya diawali', opts:['subjek','kata kerja','kata depan','kata sandang'], a:1,
    why:'Weil ich müde bin, gehe ich nach Hause.' } ] },

{ id:'de-g10', drills:[
  { t:'mcq', q:'Akhiran kata sifat bergantung pada', opts:['panjang katanya','kata sandang, jenis, dan kasusnya','maknanya','tekanannya'], a:1,
    why:'Tiga hal sekaligus — inilah yang membuatnya sulit.' },
  { t:'mcq', q:'"der gute Mann" — akhiran -e muncul karena', opts:['kata sandangnya sudah menunjukkan kasus','kata sifatnya pendek','maknanya positif','jenisnya laki-laki'], a:0,
    why:'Kalau kata sandang sudah jelas, kata sifatnya memakai akhiran lemah.' },
  { t:'mcq', q:'Tanpa kata sandang, kata sifat memakai akhiran', opts:['lemah','kuat, menirukan kata sandang yang hilang','tanpa akhiran','selalu -e'], a:1,
    why:'guter Wein, kaltes Wasser.' } ] },

{ id:'de-g11', drills:[
  { t:'mcq', q:'Kalimat pasif dibentuk dengan', opts:['sein + Partizip II','werden + Partizip II','haben + Partizip II','müssen + Infinitiv'], a:1,
    why:'Das Haus wird gebaut.' },
  { t:'mcq', q:'Pelaku dalam kalimat pasif ditandai', opts:['für','von','mit','zu'], a:1,
    why:'von dem Architekten.' },
  { t:'mcq', q:'Konjunktiv II dipakai untuk', opts:['kenyataan','pengandaian dan permintaan sopan','perintah','waktu lampau'], a:1,
    why:'Ich hätte gern… = saya ingin, diperhalus.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'de-q1', level:'A2', title:'Wechselpräpositionen', titleId:'Satu Kata Depan, Dua Kasus',
  why:'Bahasa Indonesia memakai "di" dan "ke" sebagai dua kata yang berbeda, jadi bedanya selalu terlihat. Bahasa Jerman memakai kata depan yang SAMA untuk keduanya dan membedakannya lewat kasus: in der Schule (di sekolah) tetapi in die Schule (ke sekolah). Karena kata depannya tidak berubah, penutur Indonesia tidak punya isyarat apa pun untuk mengingat bahwa ada yang harus dipilih — dan hampir selalu memakai datif untuk dua-duanya.',
  form:'Sembilan kata depan bergilir: an, auf, hinter, in, neben, über, unter, vor, zwischen\nWOHIN? (arah, ada gerak) → AKKUSATIV: Ich gehe in die Küche\nWO? (letak, tidak ada gerak) → DATIV: Ich bin in der Küche\nGabungan lazim: ins = in das, im = in dem, ans = an das, am = an dem\nKata depan lain tetap: für/ohne/gegen/um/durch selalu akusatif; mit/nach/bei/seit/von/zu selalu datif',
  notes:['Yang menentukan bukan kata kerjanya, melainkan ada tidaknya perpindahan tempat.',
         'stellen/legen/setzen/hängen (meletakkan) memakai akusatif; stehen/liegen/sitzen/hängen (berada) memakai datif.',
         'hängen punya dua bentuk: hängte (meletakkan, beraturan) dan hing (tergantung, tak beraturan).',
         'Pertanyaannya membantu: wohin? jawabannya akusatif, wo? jawabannya datif.',
         'Kata depan yang selalu satu kasus tidak termasuk kelompok ini dan tidak perlu dipilih.'],
  ex:[['Ich gehe in die Küche.','Saya pergi ke dapur.','ikh gehe in di kyukhe'],
      ['Ich bin in der Küche.','Saya ada di dapur.','ikh bin in der kyukhe'],
      ['Er hängt das Bild an die Wand.','Dia menggantung lukisan itu ke dinding.','er hengt das bilt an di vant'],
      ['Das Bild hängt an der Wand.','Lukisan itu tergantung di dinding.','das bilt hengt an der vant'],
      ['Wir fahren aufs Land.','Kami pergi ke pedesaan.','vir faren aufs lant'],
      ['Die Kinder spielen auf dem Hof.','Anak-anak bermain di halaman.','di kinder sypilen auf dem hof']],
  traps:[['Ich gehe in der Schule','Ich gehe in die Schule','Ada perpindahan tempat, jadi akusatif.'],
         ['Ich bin in die Schule','Ich bin in der Schule','Tidak ada gerak, jadi datif.'],
         ['Er legt das Buch auf dem Tisch','Er legt das Buch auf den Tisch','legen menyatakan perpindahan.'],
         ['Das Buch liegt auf den Tisch','Das Buch liegt auf dem Tisch','liegen menyatakan letak.']],
  drills:[
    { t:'mcq', q:'"Saya pergi ke dapur" =', opts:['Ich gehe in der Küche','Ich gehe in die Küche','Ich gehe in dem Küche','Ich gehe in Küche'], a:1,
      why:'Ada perpindahan tempat, jadi akusatif.' },
    { t:'mcq', q:'"Saya ada di dapur" =', opts:['Ich bin in die Küche','Ich bin in der Küche','Ich bin in den Küche','Ich bin an die Küche'], a:1,
      why:'Tidak ada gerak, jadi datif.' },
    { t:'mcq', q:'Yang menentukan pilihan kasusnya adalah', opts:['kata kerjanya','ada tidaknya perpindahan tempat','jenis kata bendanya','panjang kalimatnya'], a:1,
      why:'wohin? akusatif; wo? datif.' },
    { t:'fill', q:'Er hängt das Bild an ___ Wand. (ke dinding)', a:['die'],
      why:'Ada gerak menuju dinding, jadi akusatif.' },
    { t:'mcq', q:'Kata kerja legen, stellen, setzen menuntut', opts:['datif','akusatif','genitif','nominatif'], a:1,
      why:'Semuanya menyatakan perpindahan.' } ] },

{ id:'de-q2', level:'B1', title:'Präteritum & Plusquamperfekt', titleId:'Lampau Tulis dan Lampau Sebelum Lampau',
  why:'Bentuk lampau yang diajarkan lebih dulu adalah Perfekt, dan itu memang yang dipakai berbicara. Tetapi begitu pemelajar membuka koran, buku, atau berita, yang muncul adalah Präteritum — bentuk yang belum pernah dilihatnya. Akibatnya ia bisa berbicara tetapi tidak bisa membaca. Ditambah lagi, kata kerja yang paling sering dipakai justru hampir selalu memakai Präteritum bahkan dalam percakapan: war, hatte, konnte, musste.',
  form:'Beraturan: akar + -te + akhiran — machen → ich machte, du machtest\nTak beraturan: vokal akar berubah — gehen → ich ging, kommen → ich kam\nBentuk ich dan er/sie/es SAMA persis: ich ging, er ging\nPlusquamperfekt: hatte/war + Partizip II — Ich hatte gegessen\nDipakai untuk kejadian yang lebih dulu daripada kejadian lampau lain, sering dengan nachdem',
  notes:['sein, haben, dan kata kerja modal memakai Präteritum bahkan dalam percakapan sehari-hari.',
         'Präteritum tidak berarti lebih lampau daripada Perfekt — bedanya ragam tulis dan lisan, bukan waktu.',
         'Di Jerman selatan dan Austria, Perfekt dipakai hampir untuk segalanya; Präteritum terasa tertulis.',
         'Plusquamperfekt hampir selalu berpasangan dengan kalimat lampau lain — sendirian ia janggal.',
         'nachdem hampir selalu menuntut Plusquamperfekt di anak kalimatnya.'],
  ex:[['Ich war gestern zu Hause.','Kemarin saya di rumah.','ikh var gestern tsu hauze'],
      ['Er hatte keine Zeit.','Dia tidak punya waktu.','er hate kaine tsait'],
      ['Sie ging langsam nach Hause.','Dia berjalan pelan-pelan pulang.','zi ging langzam nakh hauze'],
      ['Nachdem ich gegessen hatte, ging ich schlafen.','Setelah saya makan, saya pergi tidur.','nakhdem ikh gegesen hate, ging ikh sylafen'],
      ['Damals konnten wir noch kein Deutsch.','Waktu itu kami belum bisa bahasa Jerman.','damals konten vir nokh kain doitsy'],
      ['Der Zug fuhr um acht Uhr ab.','Keretanya berangkat jam delapan.','der tsuk fur um akht ur ap']],
  traps:[['Ich habe gestern zu Hause gewesen','Ich war gestern zu Hause','sein hampir selalu dipakai dalam Präteritum.'],
         ['ich gingte','ich ging','Kata kerja tak beraturan tidak memakai akhiran -te.'],
         ['er machtete','er machte','Akhiran -te sudah cukup, tidak diulang.'],
         ['Nachdem ich gegessen habe, ging ich schlafen','Nachdem ich gegessen hatte, ging ich schlafen','nachdem menuntut Plusquamperfekt.']],
  drills:[
    { t:'mcq', q:'Präteritum dari sein untuk ich adalah', opts:['bin','war','gewesen','wäre'], a:1,
      why:'sein hampir selalu dipakai dalam Präteritum, juga saat berbicara.' },
    { t:'mcq', q:'Bentuk ich dan er/sie/es dalam Präteritum', opts:['selalu berbeda','sama persis','berbeda hanya pada kata beraturan','tidak ada'], a:1,
      why:'ich ging, er ging — tanpa akhiran tambahan.' },
    { t:'mcq', q:'Plusquamperfekt dibentuk dengan', opts:['haben/sein bentuk sekarang + Partizip II','hatte/war + Partizip II','werden + Partizip II','würde + Infinitiv'], a:1,
      why:'Ich hatte gegessen.' },
    { t:'fill', q:'Nachdem ich gegessen ___, ging ich schlafen.', a:['hatte'],
      why:'nachdem menuntut Plusquamperfekt.' },
    { t:'mcq', q:'Perbedaan Perfekt dan Präteritum terutama soal', opts:['waktu kejadian','ragam lisan atau tulis','kesopanan','jumlah pelaku'], a:1,
      why:'Keduanya menunjuk waktu lampau yang sama.' } ] },

{ id:'de-q3', level:'A1', title:'Imperativ', titleId:'Bentuk Perintah',
  why:'Perintah dalam bahasa Indonesia dibentuk dari kata dasarnya begitu saja, dan satu bentuk cukup untuk siapa pun. Bahasa Jerman punya tiga bentuk yang berbeda menurut lawan bicara, dan yang paling sering dipakai orang asing — bentuk Sie — justru mempertahankan kata gantinya, sesuatu yang tidak dilakukan bentuk du maupun ihr. Salah bentuk di sini bukan sekadar keliru tata bahasa: memerintah dengan bentuk du kepada orang yang belum akrab terdengar kasar.',
  form:'du: akar tanpa -st, tanpa kata ganti — Komm! Geh! Mach!\nihr: sama dengan bentuk ihr biasa, tanpa kata ganti — Kommt! Geht!\nSie: kata kerja + Sie — Kommen Sie! Gehen Sie!\nKata kerja vokal berubah e→i ikut berubah: nehmen → Nimm!\nKata kerja vokal a→ä TIDAK berubah: fahren → Fahr!\nsein menyimpang: Sei! Seid! Seien Sie!',
  notes:['Kata kerja terpisah tetap terpisah dan awalannya ke akhir: Steh bitte auf!',
         'Menambahkan bitte hampir selalu diperlukan — tanpa itu perintah Jerman terdengar tajam.',
         'Bentuk du tidak pernah memakai kata ganti; menuliskan Komm du! justru menekankan dan terdengar menantang.',
         'Bentuk Sie satu-satunya yang mempertahankan kata gantinya, dan urutannya kata kerja dulu.',
         'Untuk permintaan yang lebih halus lagi dipakai Könnten Sie… bitte…?, bukan bentuk perintah.'],
  ex:[['Komm bitte her!','Tolong ke sini!','kom bite her'],
      ['Kommen Sie bitte herein!','Silakan masuk!','komen zi bite herain'],
      ['Nimm das Buch!','Ambil buku itu!','nim das bukh'],
      ['Steh bitte auf!','Tolong berdiri!','sytee bite auf'],
      ['Seid bitte leise!','Tolong tenang! (kepada beberapa orang)','zait bite laize'],
      ['Fahr langsam!','Jalankan pelan-pelan!','far langzam']],
  traps:[['Kommst!','Komm!','Akhiran -st dibuang pada bentuk du.'],
         ['Kommen!','Kommen Sie!','Bentuk Sie mempertahankan kata gantinya.'],
         ['Nehm das Buch!','Nimm das Buch!','Kata kerja dengan pergantian e→i ikut berubah.'],
         ['Fähr langsam!','Fahr langsam!','Pergantian a→ä TIDAK terjadi pada bentuk perintah.']],
  drills:[
    { t:'mcq', q:'Bentuk perintah du dari kommen adalah', opts:['Kommst!','Komm!','Kommen!','Kommt!'], a:1,
      why:'Akhiran -st dibuang dan kata gantinya tidak ditulis.' },
    { t:'mcq', q:'Bentuk perintah kepada orang yang belum akrab adalah', opts:['Komm!','Kommt!','Kommen Sie!','Kommen!'], a:2,
      why:'Hanya bentuk Sie yang mempertahankan kata ganti.' },
    { t:'mcq', q:'Bentuk perintah du dari nehmen adalah', opts:['Nehm!','Nimm!','Nehme!','Nimmst!'], a:1,
      why:'Pergantian vokal e→i ikut terbawa.' },
    { t:'fill', q:'___ bitte auf! (tolong berdiri — aufstehen, bentuk du)', a:['Steh'],
      why:'Awalannya tetap terpisah dan pindah ke akhir.' },
    { t:'mcq', q:'Pergantian vokal a→ä pada bentuk perintah', opts:['selalu terjadi','tidak pernah terjadi','hanya pada bentuk Sie','hanya pada bentuk ihr'], a:1,
      why:'fahren jadi Fahr!, bukan Fähr!.' } ] },

{ id:'de-q4', level:'A2', title:'nicht oder kein', titleId:'Dua Cara Menyangkal',
  why:'Bahasa Indonesia menyangkal dengan satu kata untuk apa pun: tidak punya waktu, tidak datang, bukan mahasiswa. Bahasa Jerman memaksa memilih antara nicht dan kein menurut APA yang disangkal, lalu menuntut nicht diletakkan di tempat tertentu dalam kalimat. Dua hal ini digabung membuat penyangkalan Jerman jadi salah satu bagian yang paling sering keliru — dan kekeliruannya langsung terdengar.',
  form:'kein — menyangkal kata benda yang ber-ein atau tanpa kata sandang: Ich habe kein Auto\nnicht — menyangkal segala yang lain: kata kerja, kata sifat, keterangan, kata benda ber-der/die/das\nkein berubah seperti ein: keinen, keinem, keine\nLETAK nicht: sesudah objek tertentu, sebelum kata sifat, sebelum keterangan tempat, dan sebelum bagian kalimat di akhir\nIch kenne den Mann nicht · Ich bin nicht müde · Ich komme nicht mit',
  notes:['Kalau kata bendanya memakai der/die/das atau kata milik, penyangkalnya nicht, bukan kein.',
         'nicht hampir selalu berdiri SEBELUM bagian yang paling penting di akhir kalimat.',
         'Menjawab pertanyaan bernada penyangkalan dengan "ya" memakai doch, bukan ja.',
         'nicht ein hampir tidak pernah dipakai; bentuknya kein.',
         'Untuk menyangkal satu bagian saja, nicht diletakkan tepat di depan bagian itu: Nicht heute, sondern morgen.'],
  ex:[['Ich habe kein Auto.','Saya tidak punya mobil.','ikh habe kain auto'],
      ['Ich kenne den Mann nicht.','Saya tidak kenal lelaki itu.','ikh kene den man nikht'],
      ['Ich bin nicht müde.','Saya tidak lelah.','ikh bin nikht myude'],
      ['Er kommt heute nicht mit.','Hari ini dia tidak ikut.','er komt hoite nikht mit'],
      ['Das ist nicht mein Buch.','Itu bukan buku saya.','das ist nikht main bukh'],
      ['Nicht heute, sondern morgen.','Bukan hari ini, melainkan besok.','nikht hoite, zondern morgen']],
  traps:[['Ich habe nicht ein Auto','Ich habe kein Auto','Kata benda ber-ein disangkal dengan kein.'],
         ['Ich kenne kein den Mann','Ich kenne den Mann nicht','Kata benda ber-der disangkal dengan nicht.'],
         ['Ich nicht bin müde','Ich bin nicht müde','nicht berdiri sebelum kata sifat, bukan sebelum kata kerja.'],
         ['Das ist kein mein Buch','Das ist nicht mein Buch','Kata milik disangkal dengan nicht.']],
  drills:[
    { t:'mcq', q:'"Saya tidak punya mobil" =', opts:['Ich habe nicht ein Auto','Ich habe kein Auto','Ich habe nicht Auto','Ich habe kein nicht Auto'], a:1,
      why:'Kata benda ber-ein disangkal dengan kein.' },
    { t:'mcq', q:'"Saya tidak kenal lelaki itu" =', opts:['Ich kenne kein den Mann','Ich kenne den Mann nicht','Ich nicht kenne den Mann','Ich kenne nicht den Mann'], a:1,
      why:'Kata benda tertentu disangkal dengan nicht, dan letaknya di belakang objek.' },
    { t:'mcq', q:'Kata benda dengan kata milik seperti mein Buch disangkal dengan', opts:['kein','nicht','nichts','ohne'], a:1,
      why:'kein hanya untuk yang ber-ein atau tanpa kata sandang.' },
    { t:'fill', q:'Ich bin ___ müde. (tidak lelah)', a:['nicht'],
      why:'Kata sifat disangkal dengan nicht yang berdiri di depannya.' },
    { t:'mcq', q:'Menjawab "ya" atas pertanyaan bernada penyangkalan memakai', opts:['ja','doch','schon','noch'], a:1,
      why:'Bist du nicht müde? — Doch!' } ] },

{ id:'de-q5', level:'A2', title:'Komparativ & Superlativ', titleId:'Perbandingan',
  why:'Bahasa Indonesia membandingkan dengan menambahkan "lebih" dan "paling" tanpa mengubah kata sifatnya. Bahasa Jerman mengubah kata sifatnya sendiri dan sering menambahkan Umlaut yang tidak bisa ditebak — alt jadi älter, groß jadi größer, tetapi klar tetap klarer. Ditambah lagi, superlatif punya dua bentuk yang berbeda pemakaiannya, dan penutur Indonesia sering memakai bentuk am schönsten di tempat yang seharusnya der schönste.',
  form:'Komparativ: kata sifat + -er — klein → kleiner, schnell → schneller\nSuperlatif: am + kata sifat + -sten — am kleinsten\n           atau der/die/das + kata sifat + -ste — der kleinste\nPembanding: als — Er ist größer als ich\nKesamaan: so … wie — Er ist so groß wie ich\nUmlaut sering muncul: alt → älter, jung → jünger, groß → größer, lang → länger\nKecualian: gut → besser → am besten · viel → mehr → am meisten · gern → lieber → am liebsten',
  notes:['Membandingkan memakai als; menyatakan sama memakai wie. Menukarnya adalah kesalahan yang paling sering.',
         'am …sten dipakai kalau tidak ada kata benda sesudahnya; der/die/das …ste kalau ada.',
         'Kata sifat satu suku kata paling sering ber-Umlaut, tetapi tidak semuanya — daftarnya harus dihafal.',
         'Kata sifat berakhiran -t, -d, -s, -ß, -z menyisipkan e: am ältesten, am heißesten.',
         'mehr tidak pernah digabung dengan bentuk -er: mehr größer salah.'],
  ex:[['Mein Bruder ist größer als ich.','Saudara laki-laki saya lebih tinggi daripada saya.','main bruder ist groser als ikh'],
      ['Sie ist so alt wie ich.','Dia seumur dengan saya.','zi ist zo alt vi ikh'],
      ['Das ist das schönste Haus.','Itu rumah yang paling indah.','das ist das syonste haus'],
      ['Im Winter ist es am kältesten.','Pada musim dingin paling dingin.','im vinter ist es am keltesten'],
      ['Ich trinke lieber Tee.','Saya lebih suka minum teh.','ikh trinke liber te'],
      ['Er spricht am besten Deutsch.','Dia berbahasa Jerman paling baik.','er syprikht am besten doitsy']],
  traps:[['Er ist größer wie ich','Er ist größer als ich','Membandingkan memakai als.'],
         ['Er ist so groß als ich','Er ist so groß wie ich','Menyatakan sama memakai wie.'],
         ['mehr größer','größer','Bentuk -er sudah cukup, tidak ditambah mehr.'],
         ['Das ist am schönste Haus','Das ist das schönste Haus','Kalau ada kata benda, dipakai bentuk der/die/das.']],
  drills:[
    { t:'mcq', q:'"Dia lebih tinggi daripada saya" =', opts:['Er ist größer wie ich','Er ist größer als ich','Er ist mehr groß als ich','Er ist so größer wie ich'], a:1,
      why:'Membandingkan memakai als, bukan wie.' },
    { t:'mcq', q:'"Dia sama tuanya dengan saya" =', opts:['Er ist so alt als ich','Er ist so alt wie ich','Er ist älter wie ich','Er ist am ältesten ich'], a:1,
      why:'Menyatakan kesamaan memakai wie.' },
    { t:'mcq', q:'Bentuk perbandingan dari gut adalah', opts:['guter','gutter','besser','am gut'], a:2,
      why:'Termasuk kecualian yang harus dihafal.' },
    { t:'fill', q:'Das ist das ___ Haus. (paling indah — schön)', a:['schönste'],
      why:'Ada kata benda sesudahnya, jadi dipakai bentuk der/die/das …ste.' },
    { t:'mcq', q:'Bentuk am …sten dipakai ketika', opts:['ada kata benda sesudahnya','tidak ada kata benda sesudahnya','kalimatnya panjang','ada kata depan'], a:1,
      why:'Im Winter ist es am kältesten — tidak ada kata benda yang menyusul.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'de-qv-geld', title:'Geld & Gesundheit', titleId:'Uang, Bank & Ke Dokter', level:'A2', words:[
  ['das Geld','das gelt','uang'],
  ['das Bargeld','das bargelt','uang tunai'],
  ['die Bank','di bank','bank'],
  ['das Konto','das konto','rekening'],
  ['die Karte','di karte','kartu'],
  ['die Geheimzahl','di gehaimtsal','kata sandi kartu'],
  ['der Geldautomat','der geltautomat','mesin ATM'],
  ['abheben','aphében','menarik uang'],
  ['einzahlen','aintsalen','menyetor uang'],
  ['die Überweisung','di yuberwaizung','transfer'],
  ['die Währung','di verung','mata uang'],
  ['der Wechselkurs','der vekselkurs','kurs'],
  ['die Gebühr','di gebyur','biaya administrasi'],
  ['die Rechnung','di rekhnung','tagihan'],
  ['die Quittung','di kvitung','kuitansi'],
  ['das Gehalt','das gehalt','gaji'],
  ['der Kredit','der kredit','pinjaman'],
  ['die Schulden','di syulden','utang'],
  ['die Ersparnisse','di ersyparnise','tabungan'],
  ['das Budget','das budzye','anggaran'],
  ['der Arzt','der artst','dokter'],
  ['die Praxis','di praksis','klinik dokter'],
  ['das Krankenhaus','das krankenhaus','rumah sakit'],
  ['der Termin','der termin','janji temu'],
  ['die Apotheke','di apoteke','apotek'],
  ['das Medikament','das medikament','obat'],
  ['das Rezept','das retsept','resep dokter'],
  ['die Schmerzen','di symertsen','rasa sakit'],
  ['das Fieber','das fiber','demam'],
  ['der Husten','der husten','batuk'],
  ['der Schnupfen','der synupfen','pilek'],
  ['die Kopfschmerzen','di kopfsymertsen','sakit kepala'],
  ['die Übelkeit','di yubelkait','mual'],
  ['die Allergie','di alergi','alergi'],
  ['die Untersuchung','di untersukhung','pemeriksaan'],
  ['die Spritze','di sypritse','suntikan'],
  ['die Ruhe','di rue','istirahat'],
  ['die Krankenkasse','di krankenkase','asuransi kesehatan'],
  ['der Notdienst','der notdinst','layanan gawat darurat'],
  ['die Genesung','di genezung','kesembuhan']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Bank & Urusan Uang', items:[
  ['Ich möchte ein Konto eröffnen.','ikh mœkhte ain konto erœfnen','Saya ingin membuka rekening.'],
  ['Wo ist der nächste Geldautomat?','vo ist der nekste geltautomat','Di mana ATM terdekat?'],
  ['Wie ist der Wechselkurs heute?','vi ist der vekselkurs hoite','Berapa kursnya hari ini?'],
  ['Gibt es eine Gebühr?','gipt es aine gebyur','Apakah ada biaya administrasinya?'],
  ['Ich möchte Geld abheben.','ikh mœkhte gelt aphében','Saya ingin menarik uang.'],
  ['Kann ich eine Überweisung machen?','kan ikh aine yuberwaizung makhen','Bisakah saya melakukan transfer?'],
  ['Kann ich bitte eine Quittung haben?','kan ikh bite aine kvitung haben','Boleh minta kuitansinya?'],
  ['Ich habe meine Geheimzahl vergessen.','ikh habe maine gehaimtsal fergesen','Saya lupa kata sandi kartunya.']
] },
{ g:'Di Klinik & Apotek', items:[
  ['Ich möchte einen Termin vereinbaren.','ikh mœkhte ainen termin ferainbaren','Saya ingin membuat janji.'],
  ['Ich habe hier Schmerzen.','ikh habe hir symertsen','Saya sakit di sini.'],
  ['Ich habe seit zwei Tagen Fieber.','ikh habe zait tsvai tagen fiber','Saya demam sejak dua hari.'],
  ['Haben Sie eine Allergie?','haben zi aine alergi','Apakah Anda punya alergi?'],
  ['Ich brauche ein Rezept.','ikh braukhe ain retsept','Saya perlu resep dokter.'],
  ['Wie soll ich das Medikament einnehmen?','vi zol ikh das medikament ainnémen','Bagaimana cara minum obat ini?'],
  ['Gibt es das ohne Rezept?','gipt es das one retsept','Apakah ini bisa tanpa resep?'],
  ['Ich bin gesetzlich versichert.','ikh bin gezetslikh ferzikhert','Saya punya asuransi kesehatan negeri.']
] }
]

};
