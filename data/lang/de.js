/* BAHASA JERMAN — huruf khusus, aturan ejaan, kasus, dan Goethe-Zertifikat. */

const G = (c, rom, trick, strokes, name) => ({ c, rom, trick, strokes, name });

export const DE = {
code:'de', name:'Jerman', native:'Deutsch', dir:'ltr',

intro: {
  headline:'Ejaannya paling jujur di Eropa. Tata bahasanya paling menuntut.',
  body:`Bahasa Jerman memberi tawaran yang adil: begitu kamu tahu aturan bacanya — dan aturannya
sedikit serta hampir tanpa pengecualian — kamu bisa membaca kata apa pun dengan benar, termasuk
kata yang belum pernah kamu lihat. Tidak ada kejutan seperti bahasa Inggris (through, though, tough).

Imbalannya dibayar di tata bahasa: setiap kata benda punya jenis kelamin (der/die/das) yang harus
dihafal bersama katanya, dan empat kasus mengubah bentuk kata sandang. Ditambah kata kerja yang
sering terlempar ke akhir kalimat.

Untuk penutur Indonesia ada satu keuntungan nyata: bunyi vokal Jerman sebagian besar mirip bahasa
Indonesia, dan huruf dibaca konsisten.`,
  facts:[
    '26 huruf Latin + 4 huruf khusus: ä, ö, ü, ß.',
    'Semua kata benda ditulis dengan huruf besar — di mana pun letaknya dalam kalimat.',
    'Tiga jenis kelamin kata: der (maskulin), die (feminin), das (netral).',
    'Empat kasus: Nominativ, Akkusativ, Dativ, Genitiv.'
  ],
  hardForId:[
    'Jenis kelamin kata benda tidak bisa ditebak dari maknanya — das Mädchen (gadis) justru netral.',
    'Kata kerja pindah ke posisi kedua dalam kalimat berita, dan ke akhir dalam anak kalimat.',
    'Bunyi ü dan ö tidak ada di bahasa Indonesia.',
    'ch punya dua bunyi berbeda: keras (ach) dan lembut (ich).',
    'Kata majemuk bisa sangat panjang, tetapi selalu bisa dipecah jadi kata-kata kecil.'
  ]
},

scripts: [
{
  id:'umlaut', name:'Huruf Khusus Jerman', native:'Sonderzeichen', count:8,
  note:'Selain 26 huruf Latin, bahasa Jerman punya tiga huruf ber-umlaut dan satu huruf ß. Umlaut BUKAN hiasan — ia mengubah bunyi dan sering mengubah makna.',
  chars: [
    G('ä','ä','A dengan dua titik. Dibaca seperti "e" pada "enak", bukan "a".',
      ['M50 42 C34 42 26 54 26 66 C26 78 36 86 50 86 C62 86 72 78 72 66','M72 42 L72 86','M38.0 20.0 L38.0 28.0','M60.0 20.0 L60.0 28.0'],'a-umlaut'),
    G('ö','ö','O dengan dua titik. Bulatkan bibir seperti "o", lalu ucapkan "e".',
      ['M50 42 C34 42 24 54 24 64 C24 76 34 86 50 86 C66 86 76 76 76 64 C76 54 66 42 50 42','M38.0 20.0 L38.0 28.0','M62.0 20.0 L62.0 28.0'],'o-umlaut'),
    G('ü','ü','U dengan dua titik. Bulatkan bibir seperti "u", lalu ucapkan "i".',
      ['M26 42 L26 70 C26 82 38 88 50 84','M74 42 L74 86','M38.0 20.0 L38.0 28.0','M62.0 20.0 L62.0 28.0'],'u-umlaut'),
    G('ß','ß','Eszett — dibaca "ss" panjang. Hanya muncul setelah vokal panjang.',
      ['M30 88 L30 40 C30 24 46 18 58 24 C68 30 66 44 54 48 C68 50 76 62 70 74 C64 84 46 86 38 80'],'eszett'),
    G('Ä','Ä','Bentuk kapitalnya.',
      ['M50 34 L24 88','M50 34 L76 88','M34 72 L66 72','M38.0 14.0 L38.0 22.0','M62.0 14.0 L62.0 22.0'],'A-umlaut'),
    G('Ö','Ö','Bentuk kapitalnya.',
      ['M50 34 C30 34 22 52 22 62 C22 76 32 88 50 88 C68 88 78 76 78 62 C78 52 70 34 50 34','M38.0 14.0 L38.0 22.0','M62.0 14.0 L62.0 22.0'],'O-umlaut'),
    G('Ü','Ü','Bentuk kapitalnya.',
      ['M26 34 L26 68 C26 82 38 88 50 88 C62 88 74 82 74 68 L74 34','M38.0 14.0 L38.0 22.0','M62.0 14.0 L62.0 22.0'],'U-umlaut'),
    G('sch','sch','Tiga huruf, satu bunyi: "sy". Muncul di ribuan kata.',
      ['M22 60 C22 48 40 46 44 56','M56 40 L56 86','M56 60 C60 48 78 48 78 60 L78 86'],'gugus sch')
  ]
}
],

compound: {
  tense: [
    ['ei','dibaca "ai"','nein = "nain", Wein = "vain". Bacalah huruf KEDUA.'],
    ['ie','dibaca "ii" panjang','sieben = "ziibn", die = "dii".'],
    ['eu / äu','dibaca "oi"','neu = "noi", Häuser = "hoizer".'],
    ['v','dibaca "f"','Vater = "fater". Kecuali kata serapan: Vase = "vaze".'],
    ['w','dibaca "v"','Wasser = "vasser". Ini kebalikan bahasa Inggris.'],
    ['z','dibaca "ts"','Zeit = "tsait", zehn = "tseen".'],
    ['s di awal + vokal','dibaca "z"','sagen = "zagen", Sonne = "zonne".'],
    ['st / sp di awal','dibaca "syt / syp"','Straße = "syt-rase", Sport = "syport".']
  ],
  vowels: [
    ['a e i o u','vokal dasar','Dibaca hampir sama seperti bahasa Indonesia.'],
    ['ä ö ü','vokal berumlaut','Mengubah makna: Mutter (ibu) vs Mütter (ibu-ibu).'],
    ['Vokal panjang','h atau huruf ganda','Ohr, Saal, ihn — vokal ditahan lebih lama.'],
    ['ch keras','setelah a o u','Bach, Buch — seperti berdehem.'],
    ['ch lembut','setelah i e ä ö ü','ich, Milch — seperti mendesis lembut.']
  ]
},

syllable: {
  rules: [
    ['Semua kata benda ditulis kapital.','das Haus, die Zeit, der Mann'],
    ['Kata kerja berada di posisi KEDUA dalam kalimat berita.','Heute gehe ich nach Hause.'],
    ['Dalam anak kalimat, kata kerja melompat ke AKHIR.','…, weil ich müde bin.'],
    ['Kata majemuk digabung tanpa spasi dan jenis kelaminnya mengikuti kata TERAKHIR.','die Haustür (Haus + Tür)']
  ],
  demo: [
    { block:'Guten Tag', parts:['Gu','ten','Tag'], rom:'gutn taak', layout:'selamat siang' },
    { block:'Danke schön', parts:['Dan','ke','schön'], rom:'danke syoen', layout:'terima kasih banyak' },
    { block:'Entschuldigung', parts:['Ent','schul','di','gung'], rom:'entsyuldigung', layout:'permisi / maaf' },
    { block:'Straße', parts:['Stra','ße'], rom:'sytrase', layout:'jalan' },
    { block:'Zeitung', parts:['Zei','tung'], rom:'tsaitung', layout:'surat kabar' },
    { block:'Krankenhaus', parts:['Kran','ken','haus'], rom:'krankenhaus', layout:'rumah sakit' }
  ],
  batchim:`EMPAT KASUS mengubah kata sandang, bukan kata bendanya:

              maskulin   feminin   netral   jamak
Nominativ     der        die       das      die     (subjek)
Akkusativ     den        die       das      die     (objek langsung)
Dativ         dem        der       dem      den     (objek tak langsung)
Genitiv       des        der       des      der     (kepemilikan)

Perhatikan: hanya maskulin yang berubah di Akkusativ. Ini menjelaskan mengapa
banyak kesalahan pemula terjadi pada kata maskulin.`
},

phonology: {
  triples: [
    ['ü / u','über vs Uhr','Bulatkan bibir untuk "u", lalu ucapkan "i" tanpa mengubah bibir.'],
    ['ö / o','schön vs schon','Sama caranya, tetapi mulai dari posisi "o".'],
    ['ch keras / ch lembut','Buch vs ich','Bergantung vokal sebelumnya — aturannya mutlak. Sesudah a/o/u/au bunyinya berat seperti "kh" dalam akhir; sesudah e/i/ä/ö/ü dan pada akhiran -ig bunyinya tipis, paling dekat ke "sy" dalam syukur.'],
    ['r di akhir','Vater ≈ "fata"','r di akhir suku kata melemah jadi bunyi seperti "a".'],
    ['e di akhir','bitte ≈ "bitə"','Vokal lemah, hampir seperti "e" pada "besar".']
  ],
  liaison: [
    ['Guten Tag','gutn taak','e lemah sering hilang dalam ucapan cepat.'],
    ['ich habe','ish habe','ch lembut, bukan "ik".'],
    ['sechs','zeks','ch di sini justru dibaca "k".'],
    ['Entschuldigung','entsyuldigung','sch = "sy".'],
    ['Wie geht es dir?','vii geets dia','es dir sering melebur jadi "s dia".']
  ],
  notes: [
    'Tekanan hampir selalu pada suku kata pertama, kecuali kata serapan.',
    'Konsonan akhir menjadi tak bersuara: Tag dibaca "taak", nicht "nisyt".',
    'Bahasa Jerman diucapkan lebih tegas dan bersudut dibanding bahasa Indonesia — jangan takut terdengar "keras".'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['Guten Morgen','gutn morgn','Selamat pagi'],
    ['Guten Tag','gutn taak','Selamat siang'],
    ['Hallo','halo','Halo'],
    ['Auf Wiedersehen','auf viderzeen','Sampai jumpa'],
    ['Wie geht es Ihnen?','vii geet es iinen','Apa kabar? (sopan)']
  ]},
  { g:'Sopan santun', items:[
    ['Danke schön','danke syoen','Terima kasih banyak'],
    ['Bitte','bite','Silakan / sama-sama'],
    ['Entschuldigung','entsyuldigung','Permisi / maaf'],
    ['Es tut mir leid','es tut mia lait','Saya menyesal'],
    ['Kein Problem','kain problem','Tidak masalah']
  ]},
  { g:'Bertahan hidup', items:[
    ['Wie viel kostet das?','vii fiil kostet das','Berapa harganya?'],
    ['Ich möchte das','ish moesyte das','Saya mau yang ini'],
    ['Wo ist die Toilette?','vo ist di toalete','Di mana toilet?'],
    ['Hilfe, bitte','hilfe bite','Tolong'],
    ['Ich verstehe nicht','ish fersytee nikht','Saya tidak mengerti'],
    ['Sprechen Sie langsamer, bitte','syprekhn zii langzamer bite','Tolong bicara lebih pelan'],
    ['Ich spreche ein bisschen Deutsch','ish sypresye ain bisyen doytsy','Saya bisa sedikit bahasa Jerman']
  ]},
  { g:'Perkenalan', items:[
    ['Ich heiße ○○','ish haise ○○','Nama saya ○○'],
    ['Ich komme aus Indonesien','ish kome aus indonezien','Saya dari Indonesia'],
    ['Ich bin Student','ish bin sytudent','Saya mahasiswa'],
    ['Ich lerne Deutsch','ish lerne doytsy','Saya belajar bahasa Jerman']
  ]}
],

numbers: {
  note:'Angka Jerman dibaca TERBALIK untuk puluhan: 21 = "satu dan dua puluh". Ini penyebab kesalahan paling sering saat mendengar angka.',
  sino: { title:'Angka 1–12', use:'dasar',
    list:[['eins','ains','1'],['zwei','tsvai','2'],['drei','drai','3'],['vier','fiir','4'],
          ['fünf','fuenf','5'],['sechs','zeks','6'],['sieben','ziibn','7'],['acht','akht','8'],
          ['neun','noyn','9'],['zehn','tseen','10'],['elf','elf','11'],['zwölf','tsvoelf','12']] },
  native: { title:'Pola puluhan (dibaca terbalik)', use:'wajib dilatih khusus',
    list:[['einundzwanzig','21','satu-dan-dua puluh'],['zweiunddreißig','32','dua-dan-tiga puluh'],
          ['dreiundvierzig','43','tiga-dan-empat puluh'],['vierundfünfzig','54','empat-dan-lima puluh'],
          ['hundert','100','seratus'],['tausend','1.000','seribu']] },
  clock:'Jam: halb drei berarti pukul SETENGAH TIGA (14.30), bukan setengah lewat tiga. Ini jebakan klasik.'
},

grammar: [
{ id:'de-g1', level:'A1', title:'Jenis Kelamin Kata Benda', titleId:'der / die / das',
  why:'Setiap kata benda punya jenis kelamin, dan semua kata sandang serta kata sifat mengikutinya. Salah gender merembet ke seluruh kalimat.',
  form:'der (maskulin) · die (feminin) · das (netral) · die (jamak untuk semua)',
  notes:['Hafalkan kata benda SELALU bersama kata sandangnya: bukan "Tisch", tetapi "der Tisch".',
         'Petunjuk yang bisa dipegang: -ung, -heit, -keit, -schaft, -ion selalu feminin; -chen dan -lein selalu netral.',
         'Kata majemuk mengikuti gender kata terakhir: die Haustür karena die Tür.'],
  ex:[['der Tisch','meja (maskulin)'],
      ['die Zeitung','surat kabar (feminin, akhiran -ung)'],
      ['das Mädchen','gadis (netral, akhiran -chen)']],
  traps:[['die Mädchen (tunggal)','das Mädchen','Akhiran -chen selalu netral, apa pun maknanya.']],
  drills:[
    { t:'mcq', q:'Kata berakhiran -ung berjenis', opts:['maskulin','feminin','netral','bebas'], a:1 },
    { t:'mcq', q:'"das Mädchen" netral karena', opts:['maknanya netral','akhiran -chen','pengecualian acak','bentuk jamak'], a:1 }
  ]},
{ id:'de-g2', level:'A1', title:'Kata Kerja di Posisi Kedua', titleId:'Aturan Posisi Kedua',
  why:'Aturan paling khas bahasa Jerman. Sekali dipahami, kalimatmu langsung terdengar benar.',
  form:'Unsur 1 + KATA KERJA + sisanya\nIch gehe heute nach Hause. / Heute gehe ich nach Hause.',
  notes:['Yang di posisi pertama boleh apa saja: subjek, waktu, tempat.',
         'Yang penting kata kerja tetap di posisi KEDUA.',
         'Dalam anak kalimat dengan weil, dass, wenn — kata kerja pindah ke akhir.'],
  ex:[['Ich lerne Deutsch.','Saya belajar bahasa Jerman.'],
      ['Heute lerne ich Deutsch.','Hari ini saya belajar bahasa Jerman.'],
      ['Ich bleibe zu Hause, weil ich müde bin.','Saya tinggal di rumah karena saya lelah.']],
  traps:[['Heute ich gehe nach Hause.','Heute gehe ich nach Hause.','Kata kerja harus tetap kedua.']],
  drills:[
    { t:'mcq', q:'"Morgen ___ ich nach Berlin." Kata yang benar:', opts:['ich fahre','fahre','fahren','zu fahren'], a:1 },
    { t:'mcq', q:'Dalam anak kalimat dengan weil, kata kerja berada di', opts:['posisi kedua','awal','akhir','bebas'], a:2 }
  ]},
{ id:'de-g3', level:'A2', title:'Nominativ dan Akkusativ', titleId:'Dua Kasus Pertama',
  why:'Dua kasus ini menutupi sebagian besar kalimat sehari-hari. Kuasai keduanya dulu sebelum menyentuh Dativ.',
  form:'Nominativ = subjek (der/die/das)\nAkkusativ = objek langsung (den/die/das)',
  notes:['Hanya maskulin yang berubah: der → den. Feminin dan netral tetap.',
         'Kata kerja seperti haben, sehen, kaufen menuntut Akkusativ.',
         'Preposisi durch, für, gegen, ohne, um selalu diikuti Akkusativ.'],
  ex:[['Der Mann liest das Buch.','Pria itu membaca buku.'],
      ['Ich sehe den Mann.','Saya melihat pria itu.'],
      ['Ich kaufe einen Tisch für meinen Bruder.','Saya membeli meja untuk saudara saya.']],
  traps:[['Ich sehe der Mann.','Ich sehe den Mann.','Objek langsung maskulin memakai den.']],
  drills:[
    { t:'mcq', q:'"Saya melihat pria itu" =', opts:['Ich sehe der Mann','Ich sehe den Mann','Ich sehe dem Mann','Ich sehe des Mann'], a:1 },
    { t:'mcq', q:'Kasus mana yang mengubah bentuk maskulin saja?', opts:['Nominativ','Akkusativ','Genitiv','Semua'], a:1 }
  ]},
{ id:'de-g4', level:'B1', title:'Kata Kerja Terpisah', titleId:'Trennbare Verben',
  why:'Awalan yang terlempar ke akhir kalimat sering membuat pemula kehilangan makna kalimat.',
  form:'aufstehen → Ich stehe um sieben auf.\nEinkaufen → Wir kaufen im Supermarkt ein.',
  notes:['Awalan (auf-, ein-, an-, aus-, mit-) terpisah dan pindah ke AKHIR kalimat.',
         'Dalam anak kalimat dan bentuk infinitif, awalan menempel kembali.',
         'Dengarkan sampai akhir kalimat — awalannya bisa mengubah makna sepenuhnya.'],
  ex:[['Ich stehe um sechs auf.','Saya bangun jam enam.'],
      ['Sie ruft mich morgen an.','Dia menelepon saya besok.'],
      ['Wir fangen jetzt an.','Kita mulai sekarang.']],
  traps:[['Ich aufstehe um sechs.','Ich stehe um sechs auf.','Awalan wajib dipisah dan diletakkan di akhir.']],
  drills:[
    { t:'mcq', q:'"Saya menelepon dia" (anrufen) =', opts:['Ich anrufe ihn','Ich rufe ihn an','Ich rufe an ihn','Ich an ihn rufe'], a:1 },
    { t:'mcq', q:'Awalan terpisah diletakkan di', opts:['awal','posisi kedua','akhir kalimat','setelah subjek'], a:2 }
  ]}
],

vocab: [
{ id:'de-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['der Mensch','mensy','orang'],['das Wasser','vaser','air'],['das Essen','esen','makanan'],
    ['das Haus','haus','rumah'],['die Schule','syule','sekolah'],['der Freund','froynt','teman'],
    ['die Zeit','tsait','waktu'],['das Geld','gelt','uang'],['die Arbeit','arbait','pekerjaan'],
    ['heute','hoyte','hari ini'],['morgen','morgn','besok'],['gestern','gestern','kemarin'],
    ['jetzt','yetst','sekarang'],['hier','hiir','di sini'],['dort','dort','di sana'],
    ['dies','diis','ini'],['das','das','itu'],['was','vas','apa'],
    ['wer','veer','siapa'],['wo','vo','di mana'],['wann','van','kapan'],
    ['warum','varum','mengapa'],['wie','vii','bagaimana'],['wie viel','vii fiil','berapa'],
    ['gehen','geen','pergi'],['kommen','komen','datang'],['essen','esen','makan'],
    ['trinken','trinkn','minum'],['sehen','zeen','melihat'],['hören','hoeren','mendengar'],
    ['machen','makhn','melakukan'],['haben','habn','punya'],['sein','zain','menjadi / ada'],
    ['gut','guut','bagus'],['groß','groos','besar'],['klein','klain','kecil'],
    ['viel','fiil','banyak'],['wenig','veenisy','sedikit'],['neu','noy','baru'],
    ['lecker','leker','enak'],['teuer','toyer','mahal'],['billig','bilisy','murah']
  ]}
],

exam: {
  id:'goethe', name:'Goethe-Zertifikat', full:'Goethe-Zertifikat A1–C2 (Goethe-Institut)',
  tagline:'Sertifikat bahasa Jerman yang paling luas diakui, selaras penuh dengan CEFR.',
  overview:{
    tingkat:'A1 · A2 · B1 · B2 · C1 · C2',
    bagian:'Empat modul: Lesen (membaca), Hören (menyimak), Schreiben (menulis), Sprechen (berbicara)',
    kelulusan:'Umumnya 60% dari total; sejak B1 tiap modul dapat diambil dan diulang TERPISAH',
    kegunaan:'A1 untuk visa penyatuan keluarga · B1 untuk kewarganegaraan · B2/C1 untuk kuliah dan kerja profesional'
  },
  levels:[
    ['A1','Start Deutsch 1','Memperkenalkan diri, mengisi formulir, ungkapan sehari-hari sederhana.'],
    ['A2','Start Deutsch 2','Berkomunikasi dalam situasi rutin dan menjelaskan hal-hal sekitar.'],
    ['B1','Zertifikat B1','Mandiri dalam perjalanan dan pekerjaan sederhana; syarat kewarganegaraan Jerman.'],
    ['B2','Zertifikat B2','Berdiskusi topik kompleks; ambang umum masuk universitas dan bekerja di bidang perawatan.'],
    ['C1','Zertifikat C1','Menyusun argumen kompleks; sebagian program pascasarjana mensyaratkannya.'],
    ['C2','Großes Deutsches Sprachdiplom','Setara penutur terdidik; syarat mengajar bahasa Jerman.']
  ],
  sections:[
    { name:'Lesen', items:'Membaca', note:'Iklan, surel, artikel; pada B2 ke atas termasuk teks berargumen.' },
    { name:'Hören', items:'Menyimak', note:'Percakapan, pengumuman, wawancara radio. Sebagian diputar dua kali pada tingkat rendah.' },
    { name:'Schreiben', items:'Menulis', note:'Dari mengisi formulir (A1) sampai esai berargumen (C1).' },
    { name:'Sprechen', items:'Berbicara', note:'Berpasangan dengan peserta lain pada sebagian tingkat; termasuk presentasi singkat.' }
  ],
  tactics:[
    { title:'Hafalkan kata benda bersama artikelnya — selalu', budget:'—',
      steps:['Tulis setiap kata baru sebagai "die Zeitung", bukan "Zeitung".',
             'Beri warna berbeda untuk der/die/das di catatanmu.',
             'Uji diri dengan menyebut artikelnya lebih dulu, baru katanya.'],
      why:'Memperbaiki gender setelah salah hafal jauh lebih sulit daripada menghafalnya benar sejak awal.' },
    { title:'Latih angka terbalik secara khusus', budget:'10 mnt/hari',
      steps:['Minta seseorang menyebut angka dua digit acak; tulis secepat mungkin.',
             'Ingat polanya: satuan dulu, baru puluhan.',
             'Latih juga jam dengan halb — halb drei = 14.30.'],
      why:'Di Hören, angka adalah sumber kehilangan poin terbesar bagi peserta Indonesia.' },
    { title:'Modul bisa diulang terpisah — manfaatkan', budget:'—',
      steps:['Sejak B1, kamu boleh mengambil ulang hanya modul yang gagal.',
             'Fokuskan latihan pada modul terlemah, bukan mengulang semuanya.',
             'Catat skor tiap modul dari setiap latihan untuk melihat polanya.'],
      why:'Banyak peserta membuang waktu dan biaya mengulang seluruh ujian padahal tidak perlu.' },
    { title:'Sprechen: siapkan kerangka, bukan naskah', budget:'—',
      steps:['Hafalkan lima frasa pembuka pendapat dan tiga frasa mengulur waktu.',
             'Latih struktur: pendapat → alasan → contoh → penutup.',
             'Pada ujian berpasangan, ajukan pertanyaan balik — interaksi ikut dinilai.'],
      why:'Naskah hafalan langsung terdengar dan menurunkan nilai interaksi.' }
  ],
  sources:[
    ['Goethe-Institut — sertifikat bahasa Jerman','https://www.goethe.de/en/spr/kup/prf.html'],
    ['Kerangka CEFR','https://www.coe.int/en/web/common-european-framework-reference-languages']
  ]
}
};
