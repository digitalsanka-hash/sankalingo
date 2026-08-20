/* KURSUS JERMAN — enam tingkat Goethe-Zertifikat A1–C2. */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const G = (id, level, title, titleId, why, form, notes, ex, traps, drills) =>
  ({ id, level, title, titleId, why, form, notes, ex, traps, drills });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

const VOCAB = [
V('de-v-num','Angka, Waktu & Hari','A1',
  'Angka dua digit dibaca TERBALIK — ini sumber kehilangan poin terbesar di ujian menyimak.',
  [['eins','ains','satu'],['zwei','tsvai','dua'],['drei','drai','tiga'],['vier','fiir','empat'],
   ['fünf','fuenf','lima'],['sechs','zeks','enam'],['sieben','ziibn','tujuh'],['acht','akht','delapan'],
   ['neun','noyn','sembilan'],['zehn','tseen','sepuluh'],['zwanzig','tsvantsisy','dua puluh'],
   ['hundert','hundert','seratus'],['tausend','tauznt','seribu'],['die Uhr','di uur','jam'],
   ['die Minute','di minute','menit'],['der Tag','der taak','hari'],['die Woche','di vokhe','minggu'],
   ['der Monat','der monat','bulan'],['das Jahr','das yaar','tahun'],['Montag','montaak','Senin'],
   ['Dienstag','diinstaak','Selasa'],['Mittwoch','mitvokh','Rabu'],['Donnerstag','donerstaak','Kamis'],
   ['Freitag','fraitaak','Jumat'],['Samstag','zamstaak','Sabtu'],['Sonntag','zontaak','Minggu'],
   ['der Morgen','der morgn','pagi'],['der Mittag','der mitaak','tengah hari'],
   ['der Abend','der abnt','sore'],['jetzt','yetst','sekarang']]),

V('de-v-fam','Keluarga & Orang','A1',
  'Hafalkan kata benda BERSAMA artikelnya — ini penentu seluruh kalimat sesudahnya.',
  [['die Familie','di familie','keluarga'],['der Vater','der fater','ayah'],['die Mutter','di muter','ibu'],
   ['der Bruder','der bruder','saudara laki-laki'],['die Schwester','di syvester','saudara perempuan'],
   ['der Sohn','der zoon','anak laki-laki'],['die Tochter','di tokhter','anak perempuan'],
   ['der Großvater','der groosfater','kakek'],['die Großmutter','di groosmuter','nenek'],
   ['der Mann','der man','laki-laki / suami'],['die Frau','di frau','perempuan / istri'],
   ['das Kind','das kint','anak'],['der Freund','der froynt','teman'],['der Lehrer','der leerer','guru'],
   ['der Student','der sytudent','mahasiswa'],['der Arzt','der artst','dokter'],
   ['der Kollege','der kolege','rekan kerja'],['der Nachbar','der nakhbar','tetangga'],
   ['der Name','der name','nama'],['das Alter','das alter','umur'],['das Land','das lant','negara'],
   ['Deutschland','doytsylant','Jerman'],['Indonesien','indonezien','Indonesia'],
   ['der Mensch','der mensy','manusia'],['die Leute','di loyte','orang-orang'],
   ['das Mädchen','das medkhen','gadis (netral!)'],['der Junge','der yunge','anak laki-laki'],
   ['die Eltern','di eltern','orang tua'],['der Beruf','der beruuf','profesi'],['die Adresse','di adrese','alamat']]),

V('de-v-food','Makanan & Minuman','A1',
  'Kosakata pertama yang dipakai di supermarket dan restoran Jerman.',
  [['das Essen','das esen','makanan'],['das Brot','das broot','roti'],['das Fleisch','das flaisy','daging'],
   ['der Fisch','der fisy','ikan'],['das Ei','das ai','telur'],['die Milch','di milkh','susu'],
   ['das Wasser','das vaser','air'],['der Kaffee','der kafe','kopi'],['der Tee','der tee','teh'],
   ['der Saft','der zaft','jus'],['das Bier','das biir','bir'],['die Suppe','di zupe','sup'],
   ['der Salat','der zalat','salad'],['die Kartoffel','di kartofel','kentang'],
   ['das Gemüse','das gemuese','sayuran'],['das Obst','das oopst','buah'],['der Apfel','der apfel','apel'],
   ['der Zucker','der tsuker','gula'],['das Salz','das zalts','garam'],['der Käse','der keeze','keju'],
   ['lecker','leker','enak'],['süß','zuess','manis'],['salzig','zaltsisy','asin'],
   ['scharf','syarf','pedas'],['hungrig','hungrisy','lapar'],['durstig','durstisy','haus'],
   ['das Frühstück','das fruestuek','sarapan'],['das Mittagessen','das mitaakesen','makan siang'],
   ['das Abendessen','das abntesen','makan malam'],['das Restaurant','das restoran','restoran']]),

V('de-v-place','Tempat & Arah','A2',
  'Kata tempat sering dipakai bersama preposisi berkasus — hafalkan berpasangan.',
  [['das Haus','das haus','rumah'],['die Wohnung','di vonung','apartemen'],['die Schule','di syule','sekolah'],
   ['die Universität','di univerzitet','universitas'],['das Büro','das buero','kantor'],
   ['der Supermarkt','der zupermarkt','supermarket'],['die Apotheke','di apoteke','apotek'],
   ['das Krankenhaus','das krankenhaus','rumah sakit'],['die Bank','di bank','bank'],
   ['die Post','di post','kantor pos'],['der Bahnhof','der banhoof','stasiun'],
   ['der Flughafen','der fluukhafen','bandara'],['das Hotel','das hotel','hotel'],
   ['die Toilette','di toalete','toilet'],['der Park','der park','taman'],
   ['die Bibliothek','di bibliotek','perpustakaan'],['die Straße','di sytrase','jalan'],
   ['die Stadt','di sytat','kota'],['das Dorf','das dorf','desa'],['links','links','kiri'],
   ['rechts','rekhts','kanan'],['geradeaus','geradeaus','lurus'],['hier','hiir','di sini'],
   ['dort','dort','di sana'],['oben','obn','di atas'],['unten','untn','di bawah'],
   ['vorne','forne','di depan'],['hinten','hintn','di belakang'],['neben','nebn','di samping'],
   ['zwischen','tsvisyn','di antara']]),

V('de-v-verb','Kata Kerja Inti','A2',
  'Sebagian besar kata kerja Jerman beraturan — yang tak beraturan hanya sekitar 200 dan sering dipakai.',
  [['sein','zain','menjadi / ada'],['haben','habn','punya'],['werden','verdn','menjadi'],
   ['gehen','geen','pergi'],['kommen','komen','datang'],['fahren','faarn','berkendara'],
   ['essen','esn','makan'],['trinken','trinkn','minum'],['sehen','zeen','melihat'],
   ['hören','hoeren','mendengar'],['sprechen','syprekhn','berbicara'],['lesen','leezn','membaca'],
   ['schreiben','syraibn','menulis'],['kaufen','kaufn','membeli'],['machen','makhn','melakukan'],
   ['arbeiten','arbaitn','bekerja'],['lernen','lernen','belajar'],['wohnen','vonen','tinggal'],
   ['schlafen','sylaafn','tidur'],['aufstehen','aufsyteen','bangun'],['treffen','trefn','bertemu'],
   ['warten','vartn','menunggu'],['beginnen','beginen','memulai'],['enden','endn','berakhir'],
   ['verstehen','fersyteen','memahami'],['wissen','visn','tahu'],['helfen','helfn','membantu'],
   ['geben','gebn','memberi'],['nehmen','neemen','mengambil'],['bringen','bringen','membawa']]),

V('de-v-abs','Gagasan & Kerja','B1',
  'Kosakata untuk membaca berita dan menulis esai Goethe B1–B2.',
  [['die Gesellschaft','di gezelsyaft','masyarakat'],['die Kultur','di kultuur','budaya'],
   ['die Wirtschaft','di virtsyaft','ekonomi'],['die Politik','di politiik','politik'],
   ['die Umwelt','di umvelt','lingkungan'],['die Bildung','di bildung','pendidikan'],
   ['die Technik','di tekhnik','teknologi'],['die Information','di informatsion','informasi'],
   ['das Problem','das problem','masalah'],['die Lösung','di loezung','solusi'],
   ['der Grund','der grunt','alasan'],['das Ergebnis','das ergebnis','hasil'],
   ['der Einfluss','der ainflus','pengaruh'],['die Veränderung','di ferenderung','perubahan'],
   ['die Entwicklung','di entviklung','perkembangan'],['der Unterschied','der untersyiit','perbedaan'],
   ['die Beziehung','di betsiiung','hubungan'],['die Meinung','di mainung','pendapat'],
   ['die Möglichkeit','di moeglikhkait','kemungkinan'],['die Bedingung','di bedingung','syarat'],
   ['die Verantwortung','di ferantvortung','tanggung jawab'],['das Recht','das rekht','hak'],
   ['die Pflicht','di pflikht','kewajiban'],['die Arbeit','di arbait','pekerjaan'],
   ['die Besprechung','di besyprekhung','rapat'],['der Bericht','der berikht','laporan'],
   ['der Vertrag','der fertraak','kontrak'],['das Gehalt','das gehalt','gaji'],
   ['der Termin','der termiin','janji temu'],['die Erfahrung','di erfaarung','pengalaman']])
];

const GRAMMAR = [
G('de-g5','A1','Präsens & Verbendungen','Konjugasi Kata Kerja Sekarang',
  'Kata kerja Jerman berubah menurut pelakunya. Pola akhirannya sangat teratur.',
  'ich -e · du -st · er/sie/es -t\nwir -en · ihr -t · sie/Sie -en',
  ['Kata kerja tak beraturan mengubah vokal batang pada du dan er: fahren → du fährst.',
   'sein dan haben harus dihafal terpisah: ich bin, du bist; ich habe, du hast.',
   'Sie (Anda) selalu memakai bentuk jamak dan ditulis kapital.'],
  [['Ich wohne in Jakarta.','Saya tinggal di Jakarta.'],
   ['Er fährt nach Berlin.','Dia berkendara ke Berlin.'],
   ['Wir lernen Deutsch.','Kami belajar bahasa Jerman.']],
  [['Er fahrt nach Berlin','Er fährt nach Berlin','Kata kerja tak beraturan mengubah vokal batang.']],
  [{t:'mcq',q:'Akhiran untuk "du" adalah',opts:['-e','-st','-t','-en'],a:1},
   {t:'mcq',q:'"Wir" memakai akhiran',opts:['-e','-st','-t','-en'],a:3}]),

G('de-g6','A1','Modalverben','Kata Kerja Modal',
  'Enam modal membuka ratusan kalimat. Kata kerja utamanya melompat ke akhir.',
  'können bisa · müssen harus · wollen mau · dürfen boleh · sollen sebaiknya · mögen suka\nModal di posisi 2, kata kerja utama di AKHIR bentuk dasar',
  ['Ich kann gut schwimmen — schwimmen di akhir.',
   'ich dan er memakai bentuk yang sama: ich kann, er kann.',
   'möchte (ingin) adalah bentuk paling sopan untuk memesan.'],
  [['Ich muss heute arbeiten.','Hari ini saya harus bekerja.'],
   ['Kannst du mir helfen?','Bisakah kamu membantuku?'],
   ['Ich möchte einen Kaffee.','Saya ingin secangkir kopi.']],
  [['Ich kann schwimmen gut','Ich kann gut schwimmen','Kata kerja utama di akhir kalimat.']],
  [{t:'mcq',q:'Dalam kalimat bermodal, kata kerja utama berada di',opts:['posisi 2','akhir','awal','setelah subjek'],a:1},
   {t:'mcq',q:'Bentuk paling sopan untuk memesan adalah',opts:['will','möchte','muss','darf'],a:1}]),

G('de-g7','A2','Perfekt','Bentuk Lampau Percakapan',
  'Bentuk lampau yang dipakai dalam percakapan sehari-hari — bukan Präteritum.',
  'haben/sein (posisi 2) + Partizip II (akhir)\nBeraturan: ge-…-t · Tak beraturan: ge-…-en',
  ['Kata kerja gerak dan perubahan keadaan memakai sein: ich bin gegangen.',
   'Sisanya memakai haben: ich habe gegessen.',
   'Kata kerja berakhiran -ieren tidak memakai ge-: studiert.'],
  [['Ich habe gestern gearbeitet.','Kemarin saya bekerja.'],
   ['Wir sind nach Berlin gefahren.','Kami pergi ke Berlin.'],
   ['Hast du schon gegessen?','Sudah makan?']],
  [['Ich habe nach Berlin gefahren','Ich bin nach Berlin gefahren','Kata kerja gerak memakai sein.']],
  [{t:'mcq',q:'Kata kerja gerak memakai kata bantu',opts:['haben','sein','werden','müssen'],a:1},
   {t:'mcq',q:'Partizip II dari machen adalah',opts:['gemacht','gemachen','machte','gemachtet'],a:0}]),

G('de-g8','A2','Dativ','Kasus Datif',
  'Kasus ketiga yang harus dikuasai. Muncul setelah banyak preposisi dan kata kerja.',
  'dem (mask) · der (fem) · dem (netral) · den + n (jamak)\nPreposisi wajib datif: aus, bei, mit, nach, seit, von, zu',
  ['Kata kerja datif yang sering: helfen, danken, gefallen, gehören.',
   'Jamak datif menambah -n: mit den Kindern.',
   'Hafalkan tujuh preposisi datif sebagai satu daftar.'],
  [['Ich helfe dem Mann.','Saya membantu pria itu.'],
   ['Wir fahren mit dem Bus.','Kami naik bus.'],
   ['Das Buch gehört der Frau.','Buku itu milik wanita itu.']],
  [['Ich helfe den Mann','Ich helfe dem Mann','helfen menuntut datif.']],
  [{t:'mcq',q:'Preposisi mit menuntut kasus',opts:['nominatif','akusatif','datif','genitif'],a:2},
   {t:'mcq',q:'Bentuk datif feminin adalah',opts:['die','der','dem','den'],a:1}]),

G('de-g9','B1','Nebensätze','Anak Kalimat',
  'Aturan paling khas Jerman: dalam anak kalimat, kata kerja melompat ke akhir.',
  'weil, dass, wenn, obwohl, damit + … + KATA KERJA di akhir\nIch bleibe zu Hause, weil ich müde bin.',
  ['Bandingkan: denn TIDAK mengubah urutan kata.',
   'Kalau anak kalimat di depan, kata kerja induk langsung menyusul: Weil ich müde bin, bleibe ich zu Hause.',
   'Dengan modal, modalnya yang paling akhir: …, weil ich arbeiten muss.'],
  [['Ich weiß, dass er kommt.','Saya tahu bahwa dia datang.'],
   ['Wenn es regnet, bleibe ich zu Hause.','Kalau hujan, saya tinggal di rumah.'],
   ['Obwohl es teuer war, habe ich es gekauft.','Meskipun mahal, saya membelinya.']],
  [['…, weil ich bin müde','…, weil ich müde bin','Kata kerja di akhir anak kalimat.']],
  [{t:'mcq',q:'Setelah weil, kata kerja berada di',opts:['posisi 2','akhir','awal','bebas'],a:1},
   {t:'mcq',q:'Penghubung yang TIDAK mengubah urutan kata adalah',opts:['weil','dass','denn','obwohl'],a:2}]),

G('de-g10','B1','Adjektivdeklination','Akhiran Kata Sifat',
  'Bagian yang paling ditakuti pembelajar Jerman. Kuncinya: siapa yang sudah menandai kasusnya.',
  'Setelah der/die/das → akhiran lemah (-e / -en)\nSetelah ein/kein → akhiran campuran\nTanpa artikel → akhiran kuat',
  ['der gute Mann · ein guter Mann · guter Wein.',
   'Aturan praktis: kalau artikel sudah menunjukkan kasus, kata sifat cukup -e atau -en.',
   'Dalam ujian, kesalahan ini jarang menghalangi makna tetapi menurunkan nilai ketepatan.'],
  [['Das ist ein guter Film.','Itu film yang bagus.'],
   ['Ich mag den neuen Lehrer.','Saya suka guru yang baru.'],
   ['Ich trinke gern kalten Saft.','Saya suka minum jus dingin.']],
  [['ein gute Mann','ein guter Mann','Setelah ein, kata sifat menanggung penanda maskulin.']],
  [{t:'mcq',q:'Setelah der, akhiran kata sifat adalah',opts:['kuat','lemah','campuran','tidak ada'],a:1},
   {t:'mcq',q:'"Ein ___ Film" (gut) =',opts:['gute','guter','guten','gutes'],a:1}]),

G('de-g11','B2','Passiv & Konjunktiv II','Pasif & Bentuk Pengandaian',
  'Dua bentuk yang membedakan tulisan B2 dari tulisan A2.',
  'Pasif: werden + Partizip II\nKonjunktiv II: würde + infinitif · hätte · wäre · könnte',
  ['Das Haus wird gebaut = rumah itu sedang dibangun.',
   'Ich hätte gern… adalah bentuk paling sopan untuk meminta.',
   'Wenn ich Zeit hätte, würde ich kommen.'],
  [['Der Brief wird geschrieben.','Suratnya sedang ditulis.'],
   ['Ich hätte gern einen Kaffee.','Saya ingin secangkir kopi.'],
   ['Wenn ich reich wäre, würde ich reisen.','Kalau saya kaya, saya akan bepergian.']],
  [['Ich will einen Kaffee (di restoran)','Ich hätte gern einen Kaffee','wollen terdengar kasar saat memesan.']],
  [{t:'mcq',q:'Pasif Jerman memakai kata bantu',opts:['sein','haben','werden','müssen'],a:2},
   {t:'mcq',q:'Bentuk paling sopan meminta adalah',opts:['ich will','ich hätte gern','ich muss','ich soll'],a:1}])
];

const PHRASES = [
{ g:'Di Restoran', items:[
  ['Die Karte, bitte','di karte bite','Menunya, tolong'],
  ['Ich hätte gern…','ish hete gern','Saya ingin…'],
  ['Was empfehlen Sie?','vas empfelen zii','Apa yang Anda sarankan?'],
  ['Die Rechnung, bitte','di rekhnung bite','Bill, tolong'],
  ['Es hat sehr gut geschmeckt','es hat zeer guut gesymekt','Rasanya sangat enak'],
  ['Zum Mitnehmen, bitte','tsum mitnemen bite','Dibungkus, tolong']
]},
{ g:'Belanja', items:[
  ['Was kostet das?','vas kostet das','Berapa harganya?'],
  ['Das ist zu teuer','das ist tsu toyer','Ini terlalu mahal'],
  ['Haben Sie das in einer anderen Größe?','habn zii das in ainer anderen groese','Ada ukuran lain?'],
  ['Kann ich mit Karte zahlen?','kan ish mit karte tsalen','Bisa bayar pakai kartu?'],
  ['Ich nehme das','ish neme das','Saya ambil ini']
]},
{ g:'Transportasi', items:[
  ['Wo ist der Bahnhof?','vo ist der banhoof','Di mana stasiunnya?'],
  ['Eine Fahrkarte nach Berlin, bitte','aine faarkarte nakh berlin bite','Satu tiket ke Berlin'],
  ['Wann fährt der nächste Zug?','van feert der nekste tsuuk','Kapan kereta berikutnya?'],
  ['Muss ich umsteigen?','mus ish umsytaign','Perlu ganti kereta?'],
  ['Halten Sie bitte hier','haltn zii bite hiir','Tolong berhenti di sini']
]},
{ g:'Keadaan Darurat', items:[
  ['Hilfe!','hilfe','Tolong!'],
  ['Rufen Sie einen Krankenwagen','rufn zii ainen krankenvagn','Panggil ambulans'],
  ['Mir geht es nicht gut','mia geet es nikht guut','Saya merasa tidak enak'],
  ['Wo ist das Krankenhaus?','vo ist das krankenhaus','Di mana rumah sakit?'],
  ['Ich habe meinen Pass verloren','ish habe mainen pas ferloren','Paspor saya hilang'],
  ['Ich habe mich verlaufen','ish habe mikh ferlaufn','Saya tersesat']
]}
];

export const COURSE = {
  levels: [
  { id:'A1', name:'Goethe A1', nameId:'Pemula', exam:'Start Deutsch 1', hours:80,
    target:'Memperkenalkan diri, mengisi formulir, dan memakai ungkapan sehari-hari sederhana.',
    cando:['Membaca semua kata Jerman dengan aturan baca yang benar','Menghafal kata benda bersama artikelnya',
           'Mengonjugasikan kata kerja sekarang','Menyebut angka dua digit yang dibaca terbalik'],
    units:[
      U('de-a1-1','Spelling & Sounds','Ejaan & Bunyi','Aturan baca Jerman yang hampir tanpa pengecualian.',
        { script:['umlaut'], grammar:['de-g5'], phrases:['Sapaan'], skills:['speak'],
          cando:['Membaca ei, ie, eu, sch, z, w dengan benar','Mengucapkan ä ö ü'] }),
      U('de-a1-2','Articles','Der, Die, Das','Pondasi seluruh tata bahasa Jerman.',
        { grammar:['de-g1'], vocab:['de-v-fam'], phrases:['Perkenalan'], skills:['listen','speak'],
          cando:['Menebak gender dari akhiran kata','Menghafal kata benda bersama artikelnya'] }),
      U('de-a1-3','Numbers & Modals','Angka & Modal','Angka terbalik dan enam kata kerja modal.',
        { grammar:['de-g6'], vocab:['de-v-num','de-v-food'], phrases:['Di Restoran'], skills:['listen'],
          cando:['Menangkap angka dua digit saat menyimak','Memesan dengan möchte'] })
    ]},

  { id:'A2', name:'Goethe A2', nameId:'Dasar', exam:'Start Deutsch 2', hours:120,
    target:'Berkomunikasi dalam situasi rutin dan menjelaskan hal-hal di sekitar.',
    cando:['Bercerita tentang kejadian kemarin dengan Perfekt','Memakai kasus akusatif dan datif',
           'Bertanya arah dan berbelanja'],
    units:[
      U('de-a2-1','Word Order','Posisi Kedua','Aturan paling khas bahasa Jerman.',
        { grammar:['de-g2'], vocab:['de-v-verb'], phrases:['Belanja'], skills:['listen','speak'],
          cando:['Menempatkan kata kerja di posisi kedua','Memulai kalimat dengan keterangan'] }),
      U('de-a2-2','Perfekt & Dativ','Lampau & Datif','Dua alat wajib untuk bercerita.',
        { grammar:['de-g7','de-g8','de-g3'], vocab:['de-v-place'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Memilih haben atau sein','Memakai tujuh preposisi datif'] })
    ]},

  { id:'B1', name:'Goethe B1', nameId:'Menengah', exam:'Zertifikat B1 · syarat kewarganegaraan', hours:200,
    target:'Mandiri dalam perjalanan dan pekerjaan sederhana.',
    cando:['Menyusun anak kalimat dengan weil, dass, wenn','Memakai akhiran kata sifat',
           'Menulis surel semi-formal'],
    units:[
      U('de-b1-1','Subordinate Clauses','Anak Kalimat','Kata kerja melompat ke akhir.',
        { grammar:['de-g9','de-g4'], vocab:['de-v-abs'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Menyusun kalimat dengan weil dan dass','Memakai kata kerja terpisah dalam anak kalimat'] }),
      U('de-b1-2','Adjective Endings','Akhiran Kata Sifat','Bagian yang paling ditakuti, dituntaskan sekali.',
        { grammar:['de-g10'], vocab:['de-v-abs'], phrases:['Belanja'], skills:['listen'],
          cando:['Memilih akhiran lemah, campuran, atau kuat'] })
    ]},

  { id:'B2', name:'Goethe B2', nameId:'Menengah Atas', exam:'Zertifikat B2 · ambang kuliah', hours:300,
    target:'Berdiskusi topik kompleks dan menulis teks berargumen.',
    cando:['Memakai kalimat pasif','Memakai Konjunktiv II untuk kesopanan dan pengandaian',
           'Membaca artikel surat kabar'],
    units:[
      U('de-b2-1','Passive & Konjunktiv','Pasif & Pengandaian','Dua penanda tulisan tingkat B2.',
        { grammar:['de-g11'], vocab:['de-v-abs'], phrases:['Di Restoran'], skills:['listen','speak'],
          cando:['Menyusun kalimat pasif','Meminta dengan sangat sopan'] })
    ]},

  { id:'C1', name:'Goethe C1', nameId:'Mahir', exam:'Zertifikat C1', hours:420,
    target:'Menyusun argumen kompleks dan mengikuti kuliah penuh.',
    cando:['Menulis esai berargumen','Memahami teks akademik','Berdiskusi dengan nuansa'],
    units:[
      U('de-c1-1','Academic German','Jerman Akademik','Kosakata abstrak dan gaya tulis formal.',
        { vocab:['de-v-abs'], grammar:['de-g11'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Memakai kosakata abstrak','Menyusun argumen tertulis'] })
    ]},

  { id:'C2', name:'Goethe C2', nameId:'Sangat Mahir', exam:'Großes Deutsches Sprachdiplom', hours:600,
    target:'Setara penutur terdidik; syarat mengajar bahasa Jerman.',
    cando:['Memahami teks sastra dan hukum','Menulis dengan gaya yang tepat sasaran',
           'Berdebat dalam bahasa Jerman'],
    units:[
      U('de-c2-1','Mastery','Penguasaan','Menyatukan seluruh keterampilan.',
        { vocab:['de-v-abs'], grammar:['de-g11'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Menguasai ragam gaya','Menulis setara penutur terdidik'] })
    ]}
  ],
  grammar: GRAMMAR,
  vocab: VOCAB,
  phrases: PHRASES
};
