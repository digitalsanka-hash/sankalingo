/* ── Perluasan Jerman: tingkat B2, C1, C2 ─────────────────────────
   Sebelum berkas ini ada, ketiga tingkat teratas Jerman hanya menunjuk
   ulang materi B1: satu topik tata bahasa yang sama (de-g11) dipakai
   bertiga, kosakatanya paket B1, dan frasanya diambil dari pelajaran
   pemula — halaman C1 secara harfiah mengajarkan "Wo ist der Bahnhof?".

   Berkas ini mengisinya dengan materi yang memang membedakan tiap
   tingkat menurut silabus Goethe-Institut:

     B2  menyambung kalimat (Konnektoren) dan Relativsatz
     C1  gaya nominal, Konjunktiv I, dan atribut partisip — tiga ciri
         bahasa Jerman tulis yang tidak pernah muncul di percakapan
     C2  Modalpartikel dan tingkat tutur — yang memisahkan "benar"
         dari "terdengar seperti penutur asli"

   Romanisasi mengikuti aturan yang dipakai seluruh materi Jerman:
   sesudah a/o/u/au bunyi ch ditulis "kh" (ach-Laut), sesudah e/i/ä/ö/ü
   dan pada akhiran -ig ditulis "sy" (ich-Laut).                       */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

/* ── Tata bahasa ─────────────────────────────────────────────── */
const GRAMMAR = [

{ id:'de-g12', level:'B2', title:'Konnektoren', titleId:'Penyambung Kalimat',
  why:'Di B2 penilai tidak lagi menghitung apakah kalimatmu benar, melainkan apakah kalimatmu SALING TERHUBUNG. Penyambunglah yang membedakan karangan B2 dari daftar kalimat pendek A2.',
  form:'Tiga golongan, dan posisi kata kerjanya BERBEDA:\n' +
       '· aber, denn, und, oder, sondern → kata kerja tetap di posisi kedua\n' +
       '· deshalb, trotzdem, dennoch, außerdem → kata kerja LANGSUNG sesudahnya\n' +
       '· weil, obwohl, während, damit → kata kerja ke AKHIR anak kalimat',
  notes:[
    'obwohl dan trotzdem sama artinya "meskipun", tetapi tata letaknya berlawanan: Obwohl es regnet, gehe ich. / Es regnet, trotzdem gehe ich.',
    'je … desto membandingkan dua hal yang naik bersama: Je mehr ich lerne, desto besser verstehe ich. Perhatikan — bagian je memakai susunan anak kalimat, bagian desto memakai posisi kedua.',
    'sondern hanya dipakai SESUDAH kalimat negatif: Nicht heute, sondern morgen.',
    'denn dan weil sama-sama "karena", tetapi denn tidak melemparkan kata kerja ke akhir. denn lebih ringan; weil lebih lazim dalam tulisan.'
  ],
  ex:[
    ['Obwohl es regnet, gehe ich spazieren.','Meskipun hujan, saya tetap jalan-jalan.','obvool es reegnet, gee isy sypatsiiren'],
    ['Es regnet, trotzdem gehe ich spazieren.','Hujan; meskipun begitu saya tetap jalan-jalan.','es reegnet, trotsdeem gee isy sypatsiiren'],
    ['Je mehr ich übe, desto sicherer werde ich.','Makin banyak saya berlatih, makin percaya diri saya.','yee meer isy uebe, desto zisyerer verde isy'],
    ['Ich lerne Deutsch, damit ich in Berlin studieren kann.','Saya belajar bahasa Jerman supaya bisa kuliah di Berlin.','isy lerne doytsy, damit isy in berliin sytudiiren kan']
  ],
  traps:[
    ['Obwohl es regnet, ich gehe spazieren','Obwohl es regnet, gehe ich spazieren','Sesudah anak kalimat yang berdiri di depan, kata kerja induk langsung menyusul — bukan subjeknya.'],
    ['Trotzdem es regnet, gehe ich','Obwohl es regnet, gehe ich','trotzdem TIDAK bisa membuka anak kalimat. Yang bisa hanya obwohl.'],
    ['Ich bin müde, weil ich habe viel gearbeitet','Ich bin müde, weil ich viel gearbeitet habe','weil melempar kata kerja ke ujung kalimat.']
  ],
  drills:[
    { t:'mcq', q:'Mana yang MELEMPAR kata kerja ke akhir anak kalimat?',
      opts:['deshalb','trotzdem','obwohl','außerdem'], a:2,
      why:'obwohl adalah konjungsi subordinatif; tiga lainnya adalah kata keterangan yang justru diikuti kata kerja.' },
    { t:'mcq', q:'"Es regnet, ___ gehe ich spazieren." (meskipun begitu)',
      opts:['obwohl','trotzdem','weil','damit'], a:1,
      why:'Di posisi ini butuh kata keterangan, dan kata kerjanya langsung menyusul.' },
    { t:'fill', q:'Nicht heute, ___ morgen.', a:['sondern'],
      why:'Sesudah kalimat negatif, "melainkan" adalah sondern — bukan aber.' },
    { t:'mcq', q:'"Je mehr er isst, ___ dicker wird er."',
      opts:['desto','umso mehr','trotzdem','sondern'], a:0,
      why:'Pasangan tetapnya je … desto.' }
  ] },

{ id:'de-g13', level:'B2', title:'Relativsätze', titleId:'Anak Kalimat Penjelas',
  why:'Tanpa Relativsatz, setiap gagasan harus jadi kalimat sendiri. Inilah alat yang membuat tulisanmu padat — dan alat yang wajib bisa dibaca kalau ingin memahami surat kabar Jerman.',
  form:'Kata ganti penghubungnya sama dengan artikel: der, die, das, die (jamak).\n' +
       'GENDER mengikuti kata yang dijelaskan; KASUS mengikuti perannya di anak kalimat.\n' +
       'Kata kerjanya selalu di AKHIR.',
  notes:[
    'Der Mann, der dort steht → der karena Mann maskulin DAN pelaku di anak kalimat.',
    'Der Mann, den ich kenne → den karena di anak kalimat ia menjadi objek akusatif.',
    'Datif jamak memakai denen, bukan den: die Leute, denen ich helfe.',
    'Sesudah kata depan, kata depannya ikut pindah ke depan: das Haus, IN DEM ich wohne.',
    'was dipakai sesudah alles, nichts, etwas, dan sesudah kalimat utuh: Alles, was du sagst…'
  ],
  ex:[
    ['Der Mann, der dort steht, ist mein Lehrer.','Lelaki yang berdiri di sana itu guru saya.','der man, der dort syteet, ist main leerer'],
    ['Das Buch, das ich lese, ist spannend.','Buku yang sedang saya baca itu seru.','das buukh, das isy leeze, ist sypanent'],
    ['Die Frau, der ich geholfen habe, war dankbar.','Perempuan yang saya bantu itu berterima kasih.','di frau, der isy geholfen haabe, var dankbaar'],
    ['Das ist das Haus, in dem ich geboren wurde.','Ini rumah tempat saya dilahirkan.','das ist das haus, in deem isy geboren vurde']
  ],
  traps:[
    ['Der Mann, der ich kenne','Der Mann, den ich kenne','Di anak kalimat ia menjadi OBJEK, jadi akusatif den — bukan der.'],
    ['die Leute, den ich helfe','die Leute, denen ich helfe','Datif jamak berbentuk khusus: denen.'],
    ['Das Buch, das ich lese ist gut','Das Buch, das ich lese, ist gut','Anak kalimat penjelas SELALU diapit koma di kedua sisinya.']
  ],
  drills:[
    { t:'mcq', q:'"Der Film, ___ wir gestern gesehen haben, war gut."',
      opts:['der','den','dem','dessen'], a:1,
      why:'Film maskulin, dan di anak kalimat ia objek akusatif → den.' },
    { t:'mcq', q:'"Die Kinder, ___ ich ein Buch gegeben habe…"',
      opts:['die','denen','deren','das'], a:1,
      why:'geben menuntut datif; datif jamak = denen.' },
    { t:'fill', q:'Das ist alles, ___ ich weiß.', a:['was'],
      why:'Sesudah alles/nichts/etwas dipakai was, bukan das.' },
    { t:'mcq', q:'Di Relativsatz, kata kerjanya berada',
      opts:['di posisi kedua','tepat sesudah kata penghubung','di AKHIR','bebas'], a:2 }
  ] },

{ id:'de-g14', level:'C1', title:'Nominalstil', titleId:'Gaya Nominal',
  why:'Inilah ciri paling kentara bahasa Jerman resmi. Kalimat C1 memindahkan isinya dari kata kerja ke kata benda. Kalau kamu menulis dengan gaya percakapan di ujian C1, isinya benar tetapi nadanya salah — dan itu terbaca jelas oleh penilai.',
  form:'Percakapan (Verbalstil):  Weil die Preise gestiegen sind, …\n' +
       'Tulisan  (Nominalstil):   Aufgrund des Preisanstiegs …\n\n' +
       'Alatnya dua: (1) kata kerja diubah jadi kata benda, (2) konjungsi diganti kata depan.',
  notes:[
    'Pasangan konjungsi → kata depan yang wajib hafal: weil → wegen/aufgrund · obwohl → trotz · wenn → bei/im Falle · nachdem → nach · damit → zwecks/zur.',
    'Kata depan itu menuntut kasus: wegen + genitif, trotz + genitif, nach + datif.',
    'Funktionsverbgefüge — kata kerja "kosong" yang bermakna lewat kata bendanya: in Betracht ziehen (mempertimbangkan), zur Verfügung stellen (menyediakan), Anwendung finden (dipakai), in Kraft treten (mulai berlaku).',
    'Jangan berlebihan. Gaya nominal yang bertumpuk justru dinilai buruk; pakai untuk laporan dan argumen, bukan untuk seluruh karangan.'
  ],
  ex:[
    ['Aufgrund des starken Regens fiel das Spiel aus.','Karena hujan deras, pertandingan dibatalkan.','aufgrunt des sytarken reegens fiil das sypiil aus'],
    ['Trotz der hohen Kosten wurde das Projekt genehmigt.','Meskipun biayanya tinggi, proyek itu disetujui.','trots der hoen kosten vurde das proyekt geneemisyt'],
    ['Wir stellen Ihnen die Unterlagen zur Verfügung.','Kami menyediakan berkasnya untuk Anda.','viir sytelen iinen di unterlaagen tsur ferfuegung'],
    ['Das Gesetz tritt im Januar in Kraft.','Undang-undang itu mulai berlaku bulan Januari.','das gezets trit im yanuar in kraft']
  ],
  traps:[
    ['wegen dem Regen','wegen des Regens','wegen menuntut genitif dalam ragam tulis. Bentuk datif hanya lazim di percakapan.'],
    ['Trotz die hohen Kosten','Trotz der hohen Kosten','trotz juga genitif.'],
    ['Ich mache eine Entscheidung','Ich treffe eine Entscheidung','Tiap kata benda punya kata kerja pasangannya sendiri — dan itu harus dihafal berpasangan.']
  ],
  drills:[
    { t:'mcq', q:'Bentuk nominal dari "weil es geregnet hat" adalah',
      opts:['trotz des Regens','wegen des Regens','nach dem Regen','ohne Regen'], a:1,
      why:'weil menyatakan sebab → wegen/aufgrund + genitif.' },
    { t:'mcq', q:'"eine Entscheidung ___" (mengambil keputusan)',
      opts:['machen','treffen','nehmen','geben'], a:1,
      why:'Pasangan tetapnya eine Entscheidung TREFFEN.' },
    { t:'mcq', q:'wegen menuntut kasus',
      opts:['nominatif','akusatif','datif','genitif'], a:3 },
    { t:'fill', q:'Das Gesetz tritt morgen in ___.', a:['Kraft'],
      why:'in Kraft treten = mulai berlaku.' }
  ] },

{ id:'de-g15', level:'C1', title:'Konjunktiv I', titleId:'Kalimat Tak Langsung',
  why:'Setiap berita Jerman ditulis dengan bentuk ini. Ia menandai bahwa penulis MENERUSKAN ucapan orang lain tanpa ikut menjaminnya. Salah membacanya berarti mengira pendapat narasumber sebagai fakta.',
  form:'Bentuknya: batang kata kerja + e, est, e, en, et, en\n' +
       'sein tidak beraturan dan paling sering muncul: sei, seiest, sei, seien, seiet, seien\n' +
       'Kalau bentuknya sama persis dengan Präsens, dipakai Konjunktiv II sebagai gantinya.',
  notes:[
    'Er sagt, er sei krank = ia mengatakan dirinya sakit (penulis tidak menjamin).',
    'Er sagt, er ist krank = penulis ikut menegaskan bahwa ia memang sakit. Perbedaan yang halus tetapi bermakna hukum di dunia jurnalistik.',
    'Untuk "sie" jamak, habe/haben bertabrakan dengan Präsens → dipakai hätten. Inilah alasan Konjunktiv II sering muncul di teks berita.',
    'Perintah tak langsung memakai sollen: Er sagte, ich solle warten.'
  ],
  ex:[
    ['Der Minister sagte, er sei zurückgetreten.','Menteri itu mengatakan dirinya telah mengundurkan diri.','der minister zaakte, er zai tsuruekgetreeten'],
    ['Sie behauptet, sie habe nichts gewusst.','Ia mengaku tidak mengetahui apa pun.','zii behauptet, zii haabe nisyts gevust'],
    ['Die Zeugen sagten, sie hätten nichts gesehen.','Para saksi mengatakan mereka tidak melihat apa pun.','di tsoygen zaakten, zii heten nisyts gezeen'],
    ['Er sagte, ich solle auf ihn warten.','Ia bilang saya harus menunggunya.','er zaakte, isy zole auf iin varten']
  ],
  traps:[
    ['Er sagt, er ist krank (di berita)','Er sagt, er sei krank','Präsens membuat penulis ikut menjamin kebenarannya.'],
    ['Sie sagten, sie haben nichts gesehen','Sie sagten, sie hätten nichts gesehen','haben bertabrakan dengan Präsens, jadi beralih ke Konjunktiv II.'],
    ['Er sagte, ich muss warten','Er sagte, ich solle warten','Perintah yang diteruskan memakai sollen.']
  ],
  drills:[
    { t:'mcq', q:'Konjunktiv I dari "er ist" adalah',
      opts:['er wäre','er sei','er ist','er war'], a:1 },
    { t:'mcq', q:'Mengapa berita memakai "sie hätten", bukan "sie haben"?',
      opts:['lebih sopan','lebih pendek','bentuknya bertabrakan dengan Präsens','aturan ejaan'], a:2,
      why:'Kalau Konjunktiv I tak terbedakan dari Präsens, dipakai Konjunktiv II.' },
    { t:'fill', q:'Er sagt, er ___ krank. (Konjunktiv I)', a:['sei'] },
    { t:'mcq', q:'"Er sagt, er sei krank" berarti penulis',
      opts:['menjamin ia sakit','hanya meneruskan ucapannya','meragukannya','tidak tahu'], a:1 }
  ] },

{ id:'de-g16', level:'C1', title:'Partizipialattribute', titleId:'Atribut Partisip',
  why:'Bentuk ini memadatkan satu anak kalimat penuh ke dalam ruang sebelum kata benda. Ia hampir tidak pernah diucapkan, tetapi bertebaran di teks hukum, ilmiah, dan surat kabar — dan inilah penyebab utama kalimat Jerman terasa "tidak bisa ditembus" pada tingkat C1.',
  form:'Relativsatz:  die Reform, die von der Regierung beschlossen wurde\n' +
       'Dipadatkan:   die von der Regierung beschlossene Reform\n\n' +
       'Partizip II (beschlossen) = makna PASIF, sudah terjadi.\n' +
       'Partizip I (steigend)    = makna AKTIF, sedang berlangsung.\n' +
       'zu + Partizip I          = sesuatu yang HARUS/DAPAT dilakukan.',
  notes:[
    'Cara membacanya: lompati dulu ke kata bendanya di ujung, baru mundur membaca keterangannya.',
    'die zu lösende Aufgabe = tugas yang harus diselesaikan. Sisipan zu inilah penanda keharusan.',
    'Partisipnya tetap mengambil akhiran kata sifat sesuai gender, kasus, dan artikelnya.',
    'Dalam karangan ujian, satu atau dua bentuk seperti ini sudah cukup menaikkan nilai; memakainya di setiap kalimat justru membuat teks tak terbaca.'
  ],
  ex:[
    ['die von der Regierung beschlossene Reform','reformasi yang telah diputuskan pemerintah','di fon der reegiirung besylosene reform'],
    ['die ständig steigenden Preise','harga-harga yang terus naik','di sytendisy sytaigenden praize'],
    ['die zu lösende Aufgabe','tugas yang harus diselesaikan','di tsu loezende aufgaabe'],
    ['das im letzten Jahr gebaute Haus','rumah yang dibangun tahun lalu','das im letsten yaar gebaute haus']
  ],
  traps:[
    ['die steigende Preise','die steigenden Preise','Partisip tetap memakai akhiran kata sifat; jamak dengan die menuntut -en.'],
    ['die lösende Aufgabe (maksudnya: harus diselesaikan)','die zu lösende Aufgabe','Tanpa zu, artinya berbalik menjadi "tugas yang menyelesaikan".'],
    ['die beschlossene von der Regierung Reform','die von der Regierung beschlossene Reform','Seluruh keterangan berdiri SEBELUM partisipnya.']
  ],
  drills:[
    { t:'mcq', q:'"die zu lösende Aufgabe" berarti',
      opts:['tugas yang sedang diselesaikan','tugas yang harus diselesaikan','tugas yang sudah selesai','tugas yang menyelesaikan'], a:1 },
    { t:'mcq', q:'Partizip I (steigend) menyatakan makna',
      opts:['pasif dan selesai','aktif dan berlangsung','keharusan','lampau'], a:1 },
    { t:'mcq', q:'Bentuk padat dari "das Haus, das letztes Jahr gebaut wurde"',
      opts:['das gebaute letztes Jahr Haus','das im letzten Jahr gebaute Haus','das Haus gebaute im letzten Jahr','das bauende Haus'], a:1 },
    { t:'fill', q:'die von der Regierung ___ Reform (beschließen)', a:['beschlossene'] }
  ] },

{ id:'de-g17', level:'C2', title:'Modalpartikeln', titleId:'Partikel Rasa',
  why:'Kata-kata kecil ini tidak menambah informasi sedikit pun — ia menambah SIKAP. Kalimat tanpa partikel tetap benar tetapi terdengar datar dan asing. Inilah lapisan terakhir yang memisahkan penutur mahir dari penutur yang terdengar seperti buku teks.',
  form:'Selalu berdiri di tengah kalimat, tidak pernah ditekankan, dan tidak bisa diterjemahkan satu-satu.\n' +
       'doch · mal · ja · eben · halt · wohl · schon · denn · etwa',
  notes:[
    'doch = membantah dugaan lawan bicara, atau melunakkan perintah: Komm doch mit!',
    'mal melunakkan permintaan jadi santai: Warte mal. Tanpa mal, terdengar seperti perintah.',
    'ja menandai "kita berdua sudah sama-sama tahu": Das ist ja bekannt.',
    'eben dan halt berarti pasrah — begitulah adanya: Das ist eben so. halt lebih ke selatan, eben lebih ke utara.',
    'denn hanya di kalimat tanya, membuatnya ramah bukan menginterogasi: Was machst du denn?',
    'Tanpa denn, "Was machst du?" bisa terdengar menuduh. Ini kesalahan halus yang paling sering dibuat pemelajar mahir.'
  ],
  ex:[
    ['Komm doch mit!','Ayo ikut sajalah!','kom dokh mit'],
    ['Warte mal kurz.','Tunggu sebentar, ya.','varte maal kurts'],
    ['Das ist ja interessant!','Wah, ternyata menarik!','das ist yaa interesant'],
    ['Was machst du denn hier?','Lho, sedang apa kamu di sini?','vas makhst duu den hiir'],
    ['Das ist eben so.','Ya memang begitulah.','das ist eeben zoo']
  ],
  traps:[
    ['Was machst du hier? (menyapa teman)','Was machst du denn hier?','Tanpa denn, pertanyaannya terdengar seperti menuduh.'],
    ['Warte! (kepada teman)','Warte mal.','Tanpa mal, itu perintah, bukan permintaan.'],
    ['Komm mit doch','Komm doch mit','Partikel berdiri sesudah kata kerja, sebelum bagian lainnya — urutannya tidak bebas.']
  ],
  drills:[
    { t:'mcq', q:'Partikel mana yang membuat pertanyaan terdengar ramah?',
      opts:['ja','denn','eben','wohl'], a:1 },
    { t:'mcq', q:'"Das ist eben so" menyatakan',
      opts:['keheranan','kepasrahan','pertanyaan','bantahan'], a:1 },
    { t:'mcq', q:'"Warte mal" berbeda dari "Warte!" karena mal',
      opts:['menambah waktu','melunakkan jadi permintaan','menandai lampau','menegaskan'], a:1 },
    { t:'fill', q:'Komm ___ mit! (ayo ikut sajalah)', a:['doch'] }
  ] },

{ id:'de-g18', level:'C2', title:'Register & Stil', titleId:'Tingkat Tutur',
  why:'Pada C2 yang dinilai bukan lagi benar atau salah, melainkan PANTAS atau tidak. Kata yang tepat di kedai kopi bisa merusak surat lamaran, dan sebaliknya bahasa kantor di percakapan santai terdengar kaku dan dingin.',
  form:'Tiga lapis yang harus bisa kamu bedakan dan pilih sadar:\n' +
       '· umgangssprachlich  — santai, lisan, antarteman\n' +
       '· standardsprachlich — netral, aman di mana saja\n' +
       '· gehoben/formell    — resmi, tertulis, jarak sosial',
  notes:[
    'kriegen (santai) · bekommen (netral) · erhalten (resmi) — ketiganya "menerima".',
    'Kalau surat resmi: "Hiermit erhalten Sie…" · Kalau pesan ke teman: "Du kriegst das morgen."',
    'reden (santai) · sprechen (netral) · sich äußern (resmi).',
    'Idiom tetap milik ragam lisan: Das ist mir Wurst (masa bodoh) TIDAK boleh masuk surat lamaran.',
    'Ciri paling menonjol ragam resmi Jerman: gaya nominal, kalimat pasif, dan penghindaran kata "ich" — dua yang pertama sudah kamu pelajari di C1.'
  ],
  ex:[
    ['Ich kriege das morgen.','Besok aku dapat itu.','isy kriige das morgen'],
    ['Sie erhalten die Unterlagen in Kürze.','Anda akan menerima berkasnya dalam waktu dekat.','zii erhalten di unterlaagen in kuertse'],
    ['Dazu möchte ich mich nicht äußern.','Saya tidak ingin berkomentar mengenai hal itu.','datsuu moesyte isy misy nisyt oysern'],
    ['Das ist mir Wurst.','Masa bodoh.','das ist miir vurst']
  ],
  traps:[
    ['Ich kriege Ihre Mail (surat resmi)','Ich habe Ihre Mail erhalten','kriegen terlalu santai untuk surat resmi.'],
    ['Ich äußere mich dazu (ke teman)','Ich sag dazu nichts','Ragam resmi di percakapan santai terdengar dingin dan menjauhkan.'],
    ['Das ist mir Wurst (di wawancara kerja)','Das ist mir nicht so wichtig','Idiom lisan tidak punya tempat dalam wawancara.']
  ],
  drills:[
    { t:'mcq', q:'Mana yang paling pantas untuk surat resmi?',
      opts:['Sie kriegen','Sie bekommen','Sie erhalten','Du kriegst'], a:2 },
    { t:'mcq', q:'"Das ist mir Wurst" termasuk ragam',
      opts:['resmi','netral','santai/lisan','ilmiah'], a:2 },
    { t:'mcq', q:'Ciri khas ragam resmi Jerman tulis adalah',
      opts:['banyak partikel rasa','gaya nominal dan pasif','kalimat pendek','banyak idiom'], a:1 },
    { t:'fill', q:'Padanan resmi dari "bekommen" adalah ___.', a:['erhalten'] }
  ] }
];

/* ── Kosakata ────────────────────────────────────────────────── */
const VOCAB = [

V('de-v-media','Media & Pendapat','B2',
  'Kosakata yang menyusun bagian menulis dan berbicara ujian B2: menyatakan pendapat, menimbang dua sisi, lalu menyimpulkan.',
  [['die Meinung','di mainung','pendapat'],['der Standpunkt','der sytantpunkt','sudut pandang'],
   ['das Argument','das argument','argumen'],['der Vorteil','der fortail','keuntungan'],
   ['der Nachteil','der nakhtail','kerugian'],['die Ursache','di uurzakhe','sebab'],
   ['die Folge','di folge','akibat'],['der Grund','der grunt','alasan'],
   ['das Beispiel','das baisypiil','contoh'],['der Vergleich','der ferglaisy','perbandingan'],
   ['die Lösung','di loezung','solusi'],['das Problem','das probleem','masalah'],
   ['die Entwicklung','di entviklung','perkembangan'],['die Veränderung','di ferenderung','perubahan'],
   ['der Einfluss','der ainflus','pengaruh'],['die Auswirkung','di ausvirkung','dampak'],
   ['die Umfrage','di umfraage','jajak pendapat'],['die Studie','di sytuudie','studi'],
   ['die Statistik','di sytatistik','statistik'],['der Anteil','der antail','proporsi'],
   ['die Mehrheit','di meerhait','mayoritas'],['die Minderheit','di minderhait','minoritas'],
   ['behaupten','behaupten','mengklaim'],['bezweifeln','betsvaifeln','meragukan'],
   ['zustimmen','tsusytimen','menyetujui'],['ablehnen','ableenen','menolak'],
   ['begründen','begruenden','memberi alasan'],['zusammenfassen','tsuzamenfasen','merangkum'],
   ['einerseits','ainerzaits','di satu sisi'],['andererseits','anderezaits','di sisi lain']]),

V('de-v-work','Dunia Kerja','B2',
  'Bahasa Jerman tingkat B2 adalah syarat kerja di banyak bidang; kosakata inilah yang muncul di lowongan, kontrak, dan rapat.',
  [['die Bewerbung','di beverbung','lamaran kerja'],['der Lebenslauf','der leebenslauf','riwayat hidup'],
   ['das Vorstellungsgespräch','das forsytelungsgesypresy','wawancara kerja'],['der Vertrag','der fertraak','kontrak'],
   ['die Stelle','di sytele','posisi'],['die Abteilung','di abtailung','divisi'],
   ['der Vorgesetzte','der forgezetste','atasan'],['der Kollege','der kolege','rekan kerja'],
   ['die Besprechung','di besypresyung','rapat'],['die Frist','di frist','tenggat'],
   ['der Termin','der termiin','janji temu'],['die Aufgabe','di aufgaabe','tugas'],
   ['die Verantwortung','di ferantvortung','tanggung jawab'],['die Erfahrung','di erfaarung','pengalaman'],
   ['die Kenntnisse','di kentnise','pengetahuan'],['die Fähigkeit','di fesyisykait','kemampuan'],
   ['die Weiterbildung','di vaiterbildung','pelatihan lanjutan'],['das Gehalt','das gehalt','gaji'],
   ['die Überstunde','di uebersytunde','lembur'],['der Urlaub','der urlaup','cuti'],
   ['die Kündigung','di kuendigung','pemutusan kerja'],['die Versicherung','di ferzisyerung','asuransi'],
   ['die Steuer','di sytoyer','pajak'],['der Antrag','der antraak','pengajuan'],
   ['die Unterlagen','di unterlaagen','berkas'],['die Bescheinigung','di besyainigung','surat keterangan'],
   ['einreichen','ainraisyen','mengajukan'],['erledigen','erleedigen','menyelesaikan'],
   ['sich bewerben','zisy beverben','melamar'],['zuständig','tsusytendisy','bertanggung jawab atas']]),

V('de-v-acad','Bahasa Ilmiah','C1',
  'Kosakata teks kuliah, jurnal, dan makalah — lapisan yang paling sering membuat pemelajar C1 tersendat saat membaca.',
  [['die Forschung','di forsyung','penelitian'],['die These','di teeze','tesis'],
   ['die Hypothese','di hipoteeze','hipotesis'],['der Beweis','der bevais','bukti'],
   ['die Methode','di metoode','metode'],['die Analyse','di analuuze','analisis'],
   ['das Ergebnis','das ergeepnis','hasil'],['die Schlussfolgerung','di sylusfolgerung','kesimpulan'],
   ['die Voraussetzung','di forauszetsung','prasyarat'],['die Annahme','di annaame','asumsi'],
   ['der Zusammenhang','der tsuzamenhang','keterkaitan'],['der Widerspruch','der viidersyprukh','kontradiksi'],
   ['die Ausnahme','di ausnaame','pengecualian'],['der Zweck','der tsvek','tujuan'],
   ['der Begriff','der begrif','istilah'],['die Definition','di definitsioon','definisi'],
   ['die Quelle','di kvele','sumber'],['das Zitat','das tsitaat','kutipan'],
   ['die Abhandlung','di abhandlung','risalah'],['der Nachweis','der nakhvais','pembuktian'],
   ['die Erkenntnis','di erkentnis','temuan'],['der Ansatz','der anzats','pendekatan'],
   ['die Fragestellung','di fraagesytelung','rumusan masalah'],['die Auswertung','di ausvertung','pengolahan data'],
   ['erörtern','eroertern','membahas mendalam'],['nachweisen','nakhvaizen','membuktikan'],
   ['verdeutlichen','ferdoytlisyen','memperjelas'],['veranschaulichen','feransyaulisyen','mengilustrasikan'],
   ['hinsichtlich','hinzisytlisy','sehubungan dengan'],['dementsprechend','deementsypresyent','sesuai dengan itu']]),

V('de-v-idiom','Ungkapan & Idiom','C2',
  'Idiom tidak bisa diterjemahkan kata per kata dan tidak pernah diajarkan dalam daftar tata bahasa — padahal justru inilah yang membuat bahasamu terdengar hidup. Perhatikan ragamnya: hampir semuanya milik percakapan.',
  [['die Daumen drücken','di daumen druekn','mendoakan keberhasilan'],
   ['ins Wasser fallen','ins vaser falen','batal'],
   ['unter vier Augen','unter fiir augen','berdua saja'],
   ['die Nase voll haben','di naaze fol haabn','sudah muak'],
   ['auf dem Schlauch stehen','auf deem sylaukh syteen','tidak paham-paham'],
   ['die Katze im Sack kaufen','di katse im zak kaufen','membeli tanpa memeriksa'],
   ['Schwein haben','syvain haabn','beruntung'],
   ['aus dem Häuschen sein','aus deem hoyssyen zain','girang bukan main'],
   ['den Nagel auf den Kopf treffen','deen naagel auf deen kopf trefen','tepat sekali'],
   ['ins Fettnäpfchen treten','ins fetnepfsyen treeten','salah bicara'],
   ['über den Berg sein','ueber deen berk zain','sudah melewati masa sulit'],
   ['Bahnhof verstehen','baanhoof fersyteen','tidak mengerti sama sekali'],
   ['die Flinte ins Korn werfen','di flinte ins korn verfen','menyerah'],
   ['jemandem die Daumen halten','yeemandem di daumen halten','mendukung seseorang'],
   ['Tacheles reden','takheles reeden','bicara terus terang'],
   ['auf Wolke sieben','auf volke ziibn','sangat berbahagia'],
   ['ein Auge zudrücken','ain auge tsudruekn','memaklumi'],
   ['aus der Reihe tanzen','aus der raie tantsen','tidak mengikuti aturan bersama'],
   ['Öl ins Feuer gießen','oel ins foyer giisen','memperkeruh keadaan'],
   ['im Eimer sein','im aimer zain','rusak, gagal'],
   ['die Hand ins Feuer legen','di hant ins foyer leegen','menjamin sepenuhnya'],
   ['auf Nummer sicher gehen','auf numer zisyer geen','bermain aman'],
   ['jemandem auf den Keks gehen','yeemandem auf deen keeks geen','menjengkelkan'],
   ['unter den Tisch fallen','unter deen tisy falen','terabaikan'],
   ['Hals über Kopf','hals ueber kopf','terburu-buru'],
   ['mit einem blauen Auge davonkommen','mit ainem blauen auge dafonkomen','lolos dengan kerugian kecil'],
   ['die Ohren spitzen','di ooren sypitsen','memasang telinga'],
   ['einen Bock schießen','ainen bok syiisen','membuat kesalahan besar'],
   ['ins Schwarze treffen','ins syvartse trefen','tepat sasaran'],
   ['am Ball bleiben','am bal blaibn','terus menekuni']])
];

/* ── Frasa ───────────────────────────────────────────────────── */
const PHRASES = [
{ g:'Berdiskusi', items:[
  ['Meiner Meinung nach …','mainer mainung nakh','Menurut pendapat saya …'],
  ['Ich bin der Ansicht, dass …','isy bin der anzisyt, das','Saya berpandangan bahwa …'],
  ['Da bin ich anderer Meinung.','daa bin isy anderer mainung','Saya berbeda pendapat soal itu.'],
  ['Das sehe ich genauso.','das zee isy genauzoo','Saya melihatnya persis begitu.'],
  ['Einerseits …, andererseits …','ainerzaits, anderezaits','Di satu sisi …, di sisi lain …'],
  ['Darf ich kurz einhaken?','darf isy kurts ainhaakn','Boleh saya menyela sebentar?'],
  ['Zusammenfassend lässt sich sagen …','tsuzamenfasent lest zisy zaagen','Sebagai rangkuman dapat dikatakan …']
]},
{ g:'Rapat & Presentasi', items:[
  ['Vielen Dank für Ihre Aufmerksamkeit.','fiilen dank fuer iire aufmerkzamkait','Terima kasih atas perhatian Anda.'],
  ['Ich komme nun zum nächsten Punkt.','isy kome nun tsum neksten punkt','Saya lanjut ke poin berikutnya.'],
  ['Wie aus der Grafik hervorgeht …','vii aus der graafik hervorgeet','Sebagaimana terlihat dari grafik …'],
  ['Dürfte ich Sie um eine Rückmeldung bitten?','duerfte isy zii um aine ruekmeldung biten','Bolehkah saya meminta tanggapan Anda?'],
  ['Ich melde mich diesbezüglich.','isy melde misy diisbetsueglisy','Saya akan menghubungi Anda mengenai hal ini.'],
  ['Wir halten das für sinnvoll.','viir halten das fuer zinfol','Kami menilai itu masuk akal.'],
  ['Können wir das noch einmal aufgreifen?','koenen viir das nokh ainmaal aufgraifen','Bisakah kita bahas ulang hal itu?']
]},
{ g:'Ungkapan Sehari-hari', items:[
  ['Das kommt drauf an.','das komt drauf an','Tergantung.'],
  ['Kein Wunder!','kain vunder','Pantas saja!'],
  ['Mach dir keinen Kopf.','makh diir kainen kopf','Jangan dipikirkan.'],
  ['Das war knapp.','das var knap','Nyaris saja.'],
  ['Da ist was dran.','daa ist vas dran','Ada benarnya juga.'],
  ['Lass uns das angehen.','las uns das angeen','Ayo kita kerjakan.'],
  ['Ich drück dir die Daumen.','isy druek diir di daumen','Semoga berhasil, ya.']
]}
];

/* ── Unit tambahan untuk tingkat yang sudah ada ──────────────── */
const LEVELS = [
{ id:'B2', units:[
  U('de-b2-2','Connectors','Menyambung Kalimat','Alat yang mengubah daftar kalimat pendek menjadi karangan yang mengalir.',
    { grammar:['de-g12'], vocab:['de-v-media'], phrases:['Berdiskusi'], skills:['speak','listen'],
      cando:['Membedakan obwohl, trotzdem, dan weil beserta letak kata kerjanya',
             'Menyusun argumen dua sisi dengan einerseits/andererseits'] }),
  U('de-b2-3','Relative Clauses','Anak Kalimat Penjelas','Memadatkan dua kalimat jadi satu — syarat membaca surat kabar.',
    { grammar:['de-g13'], vocab:['de-v-work'], phrases:['Rapat & Presentasi'], skills:['listen','speak'],
      cando:['Memilih der/den/dem/denen menurut peran di anak kalimat',
             'Membaca kalimat panjang berisi Relativsatz bertingkat'] })
]},
{ id:'C1', units:[
  U('de-c1-2','Nominal Style','Gaya Nominal','Ciri paling kentara bahasa Jerman resmi dan ilmiah.',
    { grammar:['de-g14'], vocab:['de-v-acad'], phrases:['Rapat & Presentasi'], skills:['listen','speak'],
      cando:['Mengubah anak kalimat weil/obwohl menjadi wegen/trotz + genitif',
             'Memakai Funktionsverbgefüge yang lazim di teks resmi'] }),
  U('de-c1-3','Reported Speech','Kalimat Tak Langsung','Bentuk yang dipakai setiap berita Jerman.',
    { grammar:['de-g15'], vocab:['de-v-media'], phrases:['Berdiskusi'], skills:['listen','speak'],
      cando:['Membentuk Konjunktiv I dan tahu kapan beralih ke Konjunktiv II',
             'Membedakan pernyataan narasumber dari penegasan penulis'] }),
  U('de-c1-4','Participial Attributes','Atribut Partisip','Penyebab utama kalimat ilmiah Jerman terasa tak tertembus.',
    { grammar:['de-g16'], vocab:['de-v-acad'], phrases:['Rapat & Presentasi'], skills:['listen'],
      cando:['Menguraikan atribut partisip panjang kembali menjadi Relativsatz',
             'Membedakan Partizip I, Partizip II, dan bentuk ber-zu'] })
]},
{ id:'C2', units:[
  U('de-c2-2','Modal Particles','Partikel Rasa','Lapisan terakhir sebelum terdengar seperti penutur asli.',
    { grammar:['de-g17'], vocab:['de-v-idiom'], phrases:['Ungkapan Sehari-hari'], skills:['listen','speak'],
      cando:['Memakai doch, mal, ja, denn pada tempatnya',
             'Menangkap sikap pembicara dari partikel yang dipilihnya'] }),
  U('de-c2-3','Register','Tingkat Tutur','Bukan lagi benar atau salah, melainkan pantas atau tidak.',
    { grammar:['de-g18'], vocab:['de-v-idiom'], phrases:['Ungkapan Sehari-hari'], skills:['speak','listen'],
      cando:['Memilih kriegen / bekommen / erhalten sesuai lawan bicara',
             'Menghindari idiom lisan dalam tulisan resmi'] })
]}
];

export const PLUS = { grammar: GRAMMAR, vocab: VOCAB, phrases: PHRASES, levels: LEVELS };
