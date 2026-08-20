/* KURSUS PRANCIS — enam tingkat DELF A1–B2 dan DALF C1–C2. */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const G = (id, level, title, titleId, why, form, notes, ex, traps, drills) =>
  ({ id, level, title, titleId, why, form, notes, ex, traps, drills });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

const VOCAB = [
V('fr-v-num','Angka, Waktu & Hari','A1',
  'Angka 70–99 dihitung dengan cara tak lazim — wajib dilatih terpisah.',
  [['un','en','satu'],['deux','dø','dua'],['trois','trwa','tiga'],['quatre','katr','empat'],
   ['cinq','senk','lima'],['six','sis','enam'],['sept','set','tujuh'],['huit','wit','delapan'],
   ['neuf','nøf','sembilan'],['dix','dis','sepuluh'],['vingt','ven','dua puluh'],
   ['soixante-dix','swasant dis','tujuh puluh'],['quatre-vingts','katr ven','delapan puluh'],
   ['cent','san','seratus'],['mille','mil','seribu'],["l'heure",'lør','jam'],
   ['la minute','la minut','menit'],['le jour','lø zyur','hari'],['la semaine','la sømen','minggu'],
   ['le mois','lø mwa','bulan'],["l'année",'lane','tahun'],['lundi','lendi','Senin'],
   ['mardi','mardi','Selasa'],['mercredi','merkrødi','Rabu'],['jeudi','zyødi','Kamis'],
   ['vendredi','vandrødi','Jumat'],['samedi','samdi','Sabtu'],['dimanche','dimansy','Minggu'],
   ['le matin','lø maten','pagi'],['le soir','lø swar','sore']]),

V('fr-v-fam','Keluarga & Orang','A1',
  'Hafalkan kata benda bersama kata sandangnya — gender menentukan seluruh kalimat.',
  [['la famille','la famiy','keluarga'],['le père','lø per','ayah'],['la mère','la mer','ibu'],
   ['le frère','lø frer','saudara laki-laki'],['la sœur','la sør','saudara perempuan'],
   ['le fils','lø fis','anak laki-laki'],['la fille','la fiy','anak perempuan'],
   ['le grand-père','lø gran per','kakek'],['la grand-mère','la gran mer','nenek'],
   ["l'homme",'lom','laki-laki'],['la femme','la fam','perempuan / istri'],
   ["l'enfant",'lanfan','anak'],["l'ami",'lami','teman'],['le professeur','lø profesør','guru'],
   ["l'étudiant",'letudyan','mahasiswa'],['le médecin','lø medsen','dokter'],
   ['le collègue','lø koleg','rekan kerja'],['le voisin','lø vwazen','tetangga'],
   ['le nom','lø non','nama'],["l'âge",'lazy','umur'],['le pays','lø pei','negara'],
   ['la France','la frans','Prancis'],["l'Indonésie",'lendonezi','Indonesia'],
   ['les gens','le zyan','orang-orang'],['le monsieur','lø møsyø','tuan'],
   ['la dame','la dam','nyonya'],['le mari','lø mari','suami'],['les parents','le paran','orang tua'],
   ['le métier','lø metye','profesi'],["l'adresse",'ladres','alamat']]),

V('fr-v-food','Makanan & Minuman','A1',
  'Banyak kata makanan Prancis sudah dipakai di Indonesia — modal awal yang besar.',
  [['la nourriture','la nurityur','makanan'],['le pain','lø pen','roti'],['la viande','la vyand','daging'],
   ['le poisson','lø pwason','ikan'],["l'œuf",'løf','telur'],['le lait','lø le','susu'],
   ["l'eau",'lo','air'],['le café','lø kafe','kopi'],['le thé','lø te','teh'],['le jus','lø zyu','jus'],
   ['le vin','lø ven','anggur'],['la soupe','la sup','sup'],['la salade','la salad','salad'],
   ['le fromage','lø fromazy','keju'],['le légume','lø legum','sayuran'],['le fruit','lø frwi','buah'],
   ['la pomme','la pom','apel'],['le sucre','lø sukr','gula'],['le sel','lø sel','garam'],
   ['le beurre','lø bør','mentega'],['délicieux','delisyø','lezat'],['sucré','sukre','manis'],
   ['salé','sale','asin'],['épicé','epise','pedas'],["j'ai faim",'zye fen','saya lapar'],
   ["j'ai soif",'zye swaf','saya haus'],['le petit-déjeuner','lø pøti dezyøne','sarapan'],
   ['le déjeuner','lø dezyøne','makan siang'],['le dîner','lø dine','makan malam'],
   ['le restaurant','lø restoran','restoran']]),

V('fr-v-place','Tempat & Arah','A2',
  'Bertanya arah adalah keterampilan bertahan hidup pertama di Prancis.',
  [['la maison','la mezon','rumah'],["l'appartement",'lapartøman','apartemen'],
   ["l'école",'lekol','sekolah'],["l'université",'luniversite','universitas'],
   ['le bureau','lø buro','kantor'],['le magasin','lø magazen','toko'],['le marché','lø marsye','pasar'],
   ["l'hôpital",'lopital','rumah sakit'],['la pharmacie','la farmasi','apotek'],
   ['la banque','la bank','bank'],['la poste','la post','kantor pos'],['la gare','la gar','stasiun'],
   ["l'aéroport",'laeropor','bandara'],["l'hôtel",'lotel','hotel'],
   ['les toilettes','le twalet','toilet'],['le parc','lø park','taman'],
   ['la bibliothèque','la bibliotek','perpustakaan'],['la rue','la ru','jalan'],
   ['la ville','la vil','kota'],['le village','lø vilazy','desa'],['à gauche','a gosy','di kiri'],
   ['à droite','a drwat','di kanan'],['tout droit','tu drwa','lurus'],['ici','isi','di sini'],
   ['là-bas','la ba','di sana'],['près de','pre dø','dekat'],['loin de','lwen dø','jauh dari'],
   ['à côté de','a kote dø','di samping'],['en face de','an fas dø','di seberang'],
   ['entre','antr','di antara']]),

V('fr-v-verb','Kata Kerja Inti','A2',
  'Tiga kelompok kata kerja: -er, -ir, -re. Kelompok -er paling banyak dan paling teratur.',
  [['être','etr','menjadi / ada'],['avoir','avwar','punya'],['aller','ale','pergi'],
   ['venir','vønir','datang'],['faire','fer','melakukan'],['dire','dir','berkata'],
   ['voir','vwar','melihat'],['entendre','antandr','mendengar'],['parler','parle','berbicara'],
   ['lire','lir','membaca'],['écrire','ekrir','menulis'],['manger','manzye','makan'],
   ['boire','bwar','minum'],['acheter','asyøte','membeli'],['vendre','vandr','menjual'],
   ['travailler','travaye','bekerja'],['étudier','etudye','belajar'],['habiter','abite','tinggal'],
   ['dormir','dormir','tidur'],['se lever','sø løve','bangun'],['rencontrer','rankontre','bertemu'],
   ['attendre','atandr','menunggu'],['commencer','komanse','memulai'],['finir','finir','menyelesaikan'],
   ['comprendre','komprandr','memahami'],['savoir','savwar','tahu'],['aider','ede','membantu'],
   ['donner','done','memberi'],['prendre','prandr','mengambil'],['pouvoir','puvwar','bisa']]),

V('fr-v-abs','Gagasan & Kerja','B1',
  'Kosakata untuk membaca berita dan menulis esai DELF B1–B2.',
  [['la société','la sosyete','masyarakat'],['la culture','la kultur','budaya'],
   ["l'économie",'lekonomi','ekonomi'],['la politique','la politik','politik'],
   ["l'environnement",'lanvironman','lingkungan'],["l'éducation",'ledukasyon','pendidikan'],
   ['la technologie','la teknolozyi','teknologi'],["l'information",'lenformasyon','informasi'],
   ['le problème','lø problem','masalah'],['la solution','la solusyon','solusi'],
   ['la raison','la rezon','alasan'],['le résultat','lø rezulta','hasil'],
   ["l'influence",'lenfluans','pengaruh'],['le changement','lø syanzyman','perubahan'],
   ['le développement','lø devlopman','perkembangan'],['la différence','la diferans','perbedaan'],
   ['la relation','la relasyon','hubungan'],["l'opinion",'lopinyon','pendapat'],
   ['le moyen','lø mwayen','cara'],['la condition','la kondisyon','syarat'],
   ["l'occasion",'lokazyon','kesempatan'],['la responsabilité','la responsabilite','tanggung jawab'],
   ['le droit','lø drwa','hak'],['le devoir','lø døvwar','kewajiban'],['la valeur','la valør','nilai'],
   ['le travail','lø travay','pekerjaan'],['la réunion','la reunyon','rapat'],
   ['le rapport','lø rapor','laporan'],['le contrat','lø kontra','kontrak'],['le salaire','lø saler','gaji']])
];

const GRAMMAR = [
G('fr-g4','A1','Le présent','Konjugasi Sekarang',
  'Tiga kelompok kata kerja. Kelompok -er mencakup 90% kata kerja Prancis.',
  '-er: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent\n-ir: je finis · -re: je vends',
  ['Akhiran -e, -es, -ent semuanya diam — ketiganya terdengar sama.',
   'être dan avoir tak beraturan dan harus dihafal lebih dulu.',
   'vous dipakai untuk orang banyak DAN untuk kesopanan.'],
  [['Je parle indonésien.','Saya berbicara bahasa Indonesia.'],
   ['Nous habitons à Jakarta.','Kami tinggal di Jakarta.'],
   ['Ils finissent le travail.','Mereka menyelesaikan pekerjaan itu.']],
  [['Je parles français','Je parle français','Akhiran untuk je adalah -e.']],
  [{t:'mcq',q:'Akhiran -er untuk nous adalah',opts:['-ez','-ons','-ent','-es'],a:1},
   {t:'mcq',q:'Berapa akhiran yang terdengar sama pada kelompok -er?',opts:['dua','tiga','empat','semua'],a:1}]),

G('fr-g5','A1','Articles & partitifs','Kata Sandang & Partitif',
  'Prancis punya kata sandang khusus untuk jumlah tak tentu — tidak ada padanannya di bahasa Indonesia.',
  'le / la / les = tertentu\nun / une / des = tak tentu\ndu / de la / des = sebagian (partitif)',
  ['Je mange du pain = saya makan roti (sebagian).',
   'Setelah negasi, semuanya berubah jadi de: je ne mange pas de pain.',
   'Partitif wajib — tidak boleh dihilangkan seperti dalam bahasa Indonesia.'],
  [['Je bois du café.','Saya minum kopi.'],
   ['Elle mange de la salade.','Dia makan salad.'],
   ["Je n'ai pas de temps.",'Saya tidak punya waktu.']],
  [['Je mange pain','Je mange du pain','Partitif wajib dipakai.']],
  [{t:'mcq',q:'Setelah negasi, du berubah menjadi',opts:['de','des','le','la'],a:0},
   {t:'mcq',q:'"Saya minum air" =',opts:["Je bois l'eau","Je bois de l'eau","Je bois eau","Je bois une eau"],a:1}]),

G('fr-g6','A2','Futur proche & passé récent','Masa Depan Dekat & Baru Saja',
  'Dua bentuk paling sering dipakai dalam percakapan — jauh lebih sering daripada futur simple.',
  'aller + infinitif = akan segera\nvenir de + infinitif = baru saja',
  ['Je vais partir = saya akan berangkat.',
   'Je viens de manger = saya baru saja makan.',
   'Keduanya memakai kata kerja bantu dalam bentuk sekarang.'],
  [['Je vais téléphoner.','Saya akan menelepon.'],
   ['Il vient de sortir.','Dia baru saja keluar.'],
   ['Nous allons manger.','Kami akan makan.']],
  [['Je vais mangé','Je vais manger','Setelah aller memakai bentuk dasar.']],
  [{t:'mcq',q:'"Saya baru saja tiba" =',opts:["Je vais arriver","Je viens d'arriver","J'arrive","J'arrivais"],a:1},
   {t:'mcq',q:'Futur proche memakai kata kerja bantu',opts:['être','avoir','aller','venir'],a:2}]),

G('fr-g7','A2','Les pronoms COD/COI','Kata Ganti Objek',
  'Kata ganti objek diletakkan SEBELUM kata kerja — kebalikan dari bahasa Indonesia.',
  'COD: me, te, le/la, nous, vous, les\nCOI: me, te, lui, nous, vous, leur',
  ['Je le vois = saya melihatnya.',
   'Je lui parle = saya berbicara kepadanya.',
   'Dalam bentuk lampau, kata ganti tetap sebelum kata bantu: je l\'ai vu.'],
  [['Je le connais.','Saya mengenalnya.'],
   ['Elle nous aide.','Dia membantu kami.'],
   ['Je leur ai téléphoné.','Saya sudah menelepon mereka.']],
  [['Je vois le','Je le vois','Kata ganti objek diletakkan sebelum kata kerja.']],
  [{t:'mcq',q:'Kata ganti objek diletakkan',opts:['setelah kata kerja','sebelum kata kerja','di akhir kalimat','bebas'],a:1},
   {t:'mcq',q:'"Saya berbicara kepadanya" =',opts:['Je le parle','Je lui parle','Je parle lui','Je la parle'],a:1}]),

G('fr-g8','B1','Imparfait vs passé composé','Dua Bentuk Lampau',
  'Perbedaan ini menentukan apakah ceritamu terdengar alami atau kaku.',
  'Passé composé = kejadian selesai, satu titik waktu\nImparfait = latar, kebiasaan, keadaan berlangsung',
  ['Quand j\'étais petit, je jouais au foot — kebiasaan, imparfait.',
   'Hier, j\'ai joué au foot — kejadian tunggal, passé composé.',
   'Dalam cerita, imparfait melukis latar dan passé composé menggerakkan alur.'],
  [["Il pleuvait quand je suis sorti.",'Sedang hujan ketika saya keluar.'],
   ["Quand j'étais jeune, j'habitais à Bali.",'Waktu muda, saya tinggal di Bali.'],
   ["J'ai fini mon travail hier.",'Saya menyelesaikan pekerjaan kemarin.']],
  [["Hier j'allais au cinéma (kejadian tunggal)","Hier je suis allé au cinéma",'Kejadian tunggal memakai passé composé.']],
  [{t:'mcq',q:'Kebiasaan di masa lalu memakai',opts:['passé composé','imparfait','futur','présent'],a:1},
   {t:'mcq',q:'"Sedang hujan" sebagai latar memakai',opts:['il a plu','il pleuvait','il pleuvra','il pleut'],a:1}]),

G('fr-g9','B1','Le subjonctif','Modus Subjungtif',
  'Muncul setelah ungkapan keinginan, keraguan, dan emosi. Pembatas B1 ke B2.',
  'que + subjonctif setelah: il faut que, je veux que, bien que, pour que, avant que',
  ['Il faut que tu viennes — bentuk subjonctif dari venir.',
   'Setelah je pense que (yakin) tetap indikatif.',
   'Hafalkan pemicunya, bukan tabel konjugasinya.'],
  [["Il faut que tu partes maintenant.",'Kamu harus pergi sekarang.'],
   ["Je veux qu'il vienne.",'Saya ingin dia datang.'],
   ["Bien qu'il soit fatigué, il travaille.",'Meski lelah, dia tetap bekerja.']],
  [["Il faut que tu pars","Il faut que tu partes",'Setelah il faut que wajib subjonctif.']],
  [{t:'mcq',q:'Setelah il faut que dipakai',opts:['indikatif','subjonctif','infinitif','imperatif'],a:1},
   {t:'mcq',q:'Setelah je pense que dipakai',opts:['indikatif','subjonctif','conditionnel','imperatif'],a:0}]),

G('fr-g10','B2','Conditionnel & hypothèses','Kondisional & Pengandaian',
  'Tiga pola pengandaian yang wajib dikuasai untuk DELF B2.',
  'si + présent → futur\nsi + imparfait → conditionnel présent\nsi + plus-que-parfait → conditionnel passé',
  ['Si j\'ai le temps, je viendrai — kemungkinan nyata.',
   'Si j\'avais le temps, je viendrais — tidak nyata sekarang.',
   'Conditionnel juga dipakai untuk kesopanan: je voudrais…'],
  [["Si j'ai le temps, je viendrai.",'Kalau ada waktu, saya akan datang.'],
   ["Si j'étais riche, je voyagerais.",'Kalau saya kaya, saya akan bepergian.'],
   ["Je voudrais un café, s'il vous plaît.",'Saya ingin kopi, tolong.']],
  [["Si je serais riche","Si j'étais riche",'Setelah si tidak dipakai conditionnel.']],
  [{t:'mcq',q:'Setelah si untuk pengandaian tak nyata dipakai',opts:['présent','imparfait','futur','conditionnel'],a:1},
   {t:'mcq',q:'Bentuk sopan meminta adalah',opts:['je veux','je voudrais','je vais','je peux'],a:1}])
];

const PHRASES = [
{ g:'Di Restoran', items:[
  ['La carte, sil vous plaît','la kart sil vu ple','Menunya, tolong'],
  ['Je voudrais…','zyø vudre','Saya ingin…'],
  ['Quest-ce que vous recommandez ?','kes kø vu rekomande','Apa yang Anda sarankan?'],
  ["L'addition, s'il vous plaît",'ladisyon sil vu ple','Bill, tolong'],
  ["C'était délicieux",'sete delisyø','Tadi lezat sekali'],
  ['Sans sucre','san sukr','Tanpa gula']
]},
{ g:'Belanja', items:[
  ["C'est combien ?",'se kombyen','Berapa harganya?'],
  ["C'est trop cher",'se tro syer','Ini terlalu mahal'],
  ['Avez-vous une autre taille ?','ave vu un otr tay','Ada ukuran lain?'],
  ['Je peux payer par carte ?','zyø pø peye par kart','Bisa bayar pakai kartu?'],
  ['Je le prends','zyø lø pran','Saya ambil ini']
]},
{ g:'Transportasi', items:[
  ['Où est la gare ?','u e la gar','Di mana stasiunnya?'],
  ['Un billet pour Paris','an biye pur pari','Satu tiket ke Paris'],
  ['À quelle heure part le train ?','a kel ør par lø tren','Jam berapa keretanya berangkat?'],
  ['Je dois changer ?','zyø dwa syanzye','Perlu ganti kereta?'],
  ['Arrêtez-vous ici','arete vu isi','Berhenti di sini']
]},
{ g:'Keadaan Darurat', items:[
  ['Au secours !','o søkur','Tolong!'],
  ['Appelez une ambulance','aple un ambulans','Panggil ambulans'],
  ['Je ne me sens pas bien','zyø nø mø san pa byen','Saya merasa tidak enak'],
  ["Où est l'hôpital ?",'u e lopital','Di mana rumah sakit?'],
  ["J'ai perdu mon passeport",'zye perdu mon paspor','Paspor saya hilang'],
  ['Je suis perdu','zyø swi perdu','Saya tersesat']
]}
];

export const COURSE = {
  levels: [
  { id:'A1', name:'DELF A1', nameId:'Pemula', exam:'DELF A1', hours:80,
    target:'Memperkenalkan diri dan memakai ungkapan sehari-hari yang paling dasar.',
    cando:['Membaca dengan aturan bunyi Prancis','Memakai kata sandang dan partitif',
           'Mengonjugasikan kata kerja -er','Menyebut angka termasuk 70–99'],
    units:[
      U('fr-a1-1','Sounds','Bunyi & Aksen','Aturan baca yang membuat semua kata bisa dilafalkan.',
        { script:['accents'], grammar:['fr-g1'], phrases:['Sapaan'], skills:['speak'],
          cando:['Melafalkan vokal sengau','Memahami huruf akhir yang tidak dibaca'] }),
      U('fr-a1-2','Articles','Kata Sandang & Partitif','Sistem yang tidak ada di bahasa Indonesia.',
        { grammar:['fr-g5'], vocab:['fr-v-food'], phrases:['Di Restoran'], skills:['listen','speak'],
          cando:['Memakai du, de la, des','Mengubah menjadi de setelah negasi'] }),
      U('fr-a1-3','Present Tense','Konjugasi Sekarang','Tiga kelompok kata kerja.',
        { grammar:['fr-g4'], vocab:['fr-v-fam','fr-v-num'], phrases:['Perkenalan'], skills:['listen'],
          cando:['Mengonjugasikan kata kerja -er, -ir, -re','Menyebut angka 70–99'] })
    ]},

  { id:'A2', name:'DELF A2', nameId:'Dasar', exam:'DELF A2', hours:120,
    target:'Menangani urusan rutin dan menjelaskan lingkungan sekitar.',
    cando:['Menyatakan rencana dekat dan kejadian baru saja','Memakai kata ganti objek',
           'Menyangkal dengan ne … pas'],
    units:[
      U('fr-a2-1','Near Future','Masa Depan Dekat','Bentuk yang paling sering dipakai penutur asli.',
        { grammar:['fr-g6','fr-g2'], vocab:['fr-v-verb'], phrases:['Belanja'], skills:['listen','speak'],
          cando:['Memakai aller + infinitif','Menyangkal dengan ne … pas'] }),
      U('fr-a2-2','Object Pronouns','Kata Ganti Objek','Diletakkan sebelum kata kerja.',
        { grammar:['fr-g7'], vocab:['fr-v-place'], phrases:['Transportasi'], skills:['listen'],
          cando:['Membedakan COD dan COI','Menempatkan kata ganti dengan benar'] })
    ]},

  { id:'B1', name:'DELF B1', nameId:'Menengah', exam:'DELF B1', hours:200,
    target:'Mandiri dalam perjalanan dan menyampaikan pendapat sederhana.',
    cando:['Membedakan imparfait dan passé composé','Memakai subjonctif setelah pemicunya',
           'Bercerita tentang masa lalu'],
    units:[
      U('fr-b1-1','Past Tenses','Dua Bentuk Lampau','Penentu apakah ceritamu terdengar alami.',
        { grammar:['fr-g8','fr-g3'], vocab:['fr-v-abs'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Memilih imparfait atau passé composé','Menyusun cerita berlatar'] }),
      U('fr-b1-2','Subjunctive','Modus Subjungtif','Pembatas antara B1 dan B2.',
        { grammar:['fr-g9'], vocab:['fr-v-abs'], phrases:['Belanja'], skills:['listen'],
          cando:['Mengenali pemicu subjonctif','Membentuk subjonctif kata kerja umum'] })
    ]},

  { id:'B2', name:'DELF B2', nameId:'Menengah Atas', exam:'DELF B2 · ambang kuliah', hours:300,
    target:'Berargumen dan berdiskusi; ambang masuk universitas Prancis.',
    cando:['Memakai tiga pola pengandaian','Mempertahankan pendapat dalam debat',
           'Menulis esai berargumen'],
    units:[
      U('fr-b2-1','Conditionals','Kondisional & Pengandaian','Tiga pola si yang wajib dikuasai.',
        { grammar:['fr-g10'], vocab:['fr-v-abs'], phrases:['Di Restoran'], skills:['listen','speak'],
          cando:['Menyusun tiga pola pengandaian','Meminta dengan sangat sopan'] })
    ]},

  { id:'C1', name:'DALF C1', nameId:'Mahir', exam:'DALF C1', hours:420,
    target:'Memahami teks panjang dan berargumen dengan luwes.',
    cando:['Membaca artikel opini','Menyusun argumen kompleks','Mengikuti kuliah penuh'],
    units:[
      U('fr-c1-1','Academic French','Prancis Akademik','Kosakata abstrak dan gaya tulis formal.',
        { vocab:['fr-v-abs'], grammar:['fr-g10'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Memakai kosakata abstrak','Menulis esai berargumen'] })
    ]},

  { id:'C2', name:'DALF C2', nameId:'Sangat Mahir', exam:'DALF C2', hours:600,
    target:'Menguasai nuansa; setara penutur terdidik.',
    cando:['Memahami sastra dan ragam gaya','Menerjemahkan dua arah','Berdebat dengan nuansa halus'],
    units:[
      U('fr-c2-1','Mastery','Penguasaan','Menyatukan seluruh keterampilan.',
        { vocab:['fr-v-abs'], grammar:['fr-g10'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Menguasai ragam gaya','Menulis setara penutur terdidik'] })
    ]}
  ],
  grammar: GRAMMAR,
  vocab: VOCAB,
  phrases: PHRASES
};
