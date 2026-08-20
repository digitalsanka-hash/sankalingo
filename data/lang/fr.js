/* BAHASA PRANCIS — huruf beraksen, aturan pelafalan, liaison,
   tata bahasa dasar, dan DELF/DALF. */

const F = (c, rom, trick, strokes, name) => ({ c, rom, trick, strokes, name });

export const FR = {
code:'fr', name:'Prancis', native:'Français', dir:'ltr',

intro: {
  headline:'Mudah dibaca dengan mata, sulit dibaca dengan mulut.',
  body:`Bagi penutur Indonesia, teks Prancis terlihat ramah: banyak kata mirip bahasa Inggris dan
banyak serapan yang sudah kita pakai (restoran, montir, ambulans, trotoar, bengkel). Masalahnya
muncul saat dibaca keras — bahasa Prancis membuang banyak bunyi di akhir kata, menyambungkan kata
satu dengan berikutnya (liaison), dan punya vokal sengau yang tidak ada di bahasa kita.

Aturannya sebenarnya konsisten. Setelah menguasai sekitar dua puluh aturan baca, kamu bisa
melafalkan hampir semua kata Prancis dengan benar tanpa mendengarnya lebih dulu.`,
  facts:[
    '26 huruf Latin + huruf beraksen: é è ê ë à â ù û î ï ô ç œ.',
    'Konsonan di akhir kata umumnya TIDAK dibaca: petit → "pəti".',
    'Dua jenis kelamin kata benda: masculin (le) dan féminin (la).',
    'Kata sifat umumnya diletakkan SETELAH kata benda: une voiture rouge.'
  ],
  hardForId:[
    'Vokal sengau: on, an, in, un — udara keluar lewat hidung, tidak ada padanannya di bahasa Indonesia.',
    'Huruf r Prancis dari pangkal tenggorokan, bukan getaran ujung lidah.',
    'Liaison: konsonan mati "hidup" kembali saat kata berikutnya diawali vokal.',
    'Banyak huruf ditulis tetapi tidak dibaca — parlent dan parle terdengar sama persis.',
    'Gender kata benda harus dihafal; kata sifat dan kata sandang mengikutinya.'
  ]
},

scripts: [
{
  id:'accents', name:'Huruf Beraksen', native:'Lettres accentuées', count:8,
  note:'Aksen di bahasa Prancis bukan hiasan: ia mengubah bunyi, kadang mengubah makna, dan tidak boleh dihilangkan dalam tulisan resmi.',
  chars: [
    F('é','é','Accent aigu — miring ke KANAN. Dibaca "e" tertutup seperti pada "sate".',
      ['M26 62 C26 50 44 46 50 56 C54 64 40 70 26 68 C26 80 42 86 56 80','M46 24 L60 34'],'e aigu'),
    F('è','è','Accent grave — miring ke KIRI. Dibaca "e" terbuka seperti pada "bebek".',
      ['M26 62 C26 50 44 46 50 56 C54 64 40 70 26 68 C26 80 42 86 56 80','M58 24 L44 34'],'e grave'),
    F('ê','ê','Accent circonflexe — topi. Menandai huruf s yang hilang dari bahasa lama: forêt = forest.',
      ['M26 62 C26 50 44 46 50 56 C54 64 40 70 26 68 C26 80 42 86 56 80','M40 32 L50 22 L60 32'],'e circonflexe'),
    F('à','à','Menandai beda makna: a (punya) vs à (ke).',
      ['M30 60 C34 50 52 50 54 62 L54 84','M54 66 C40 62 26 68 28 78 C30 86 48 88 54 80','M60 24 L46 34'],'a grave'),
    F('ç','ç','Cédille — ekor kecil. Membuat c dibaca "s" di depan a, o, u: garçon.',
      ['M66 54 C58 44 36 46 36 64 C36 82 58 84 66 74','M50 82 C50 92 42 94 38 88'],'c cedille'),
    F('ù','ù','Hanya muncul pada kata où (di mana), membedakannya dari ou (atau).',
      ['M28 50 L28 72 C28 82 44 86 52 76','M54 50 L54 84','M58 22 L44 32'],'u grave'),
    F('î','î','Circonflexe pada i — juga menandai s yang hilang: île = isle.',
      ['M50 48 L50 84','M40 30 L50 20 L60 30'],'i circonflexe'),
    F('œ','œ','Ligatur o dan e menyatu: sœur, cœur, œuf.',
      ['M36 50 C22 50 18 62 18 68 C18 78 26 86 36 86 C44 86 48 78 48 68 C48 58 44 50 36 50','M48 68 C48 56 62 50 70 58 C76 66 62 72 48 70 C48 82 62 88 76 82'],'e dans l\'o')
  ]
}
],

compound: {
  tense: [
    ['-e, -es, -ent akhir','tidak dibaca','parle, parles, parlent semuanya terdengar "parl".'],
    ['Konsonan akhir','umumnya diam','petit → "pəti", grand → "gran", trop → "tro".'],
    ['c, r, f, l akhir','biasanya dibaca','Ingat kata CaReFuL: sac, cher, chef, mal.'],
    ['ou','dibaca "u"','vous = "vu", nous = "nu".'],
    ['u','bibir bulat, lidah depan','tu, rue — bukan "u" Indonesia.'],
    ['oi','dibaca "wa"','moi = "mwa", trois = "trwa".'],
    ['ai / ei','dibaca "e"','mais = "me", peine = "pen".'],
    ['eu','antara e dan o','deux, feu — bibir bulat, lidah di posisi "e".'],
    ['gn','dibaca "ny"','montagne = "montany".'],
    ['ch','dibaca "sy"','chat = "sya", chercher = "syersye".']
  ],
  vowels: [
    ['an / en','sengau "an"','enfant, temps — udara lewat hidung, tanpa bunyi n di ujung.'],
    ['on','sengau "on"','bon, maison.'],
    ['in / ain / ein','sengau "en"','vin, pain, plein.'],
    ['un','sengau "en" bulat','brun, lundi. Di Prancis modern sering menyatu dengan in.'],
    ['Sengau hilang','bila diikuti vokal atau n ganda','bonne dibaca "bon" biasa, bukan sengau.']
  ]
},

syllable: {
  rules: [
    ['Konsonan akhir kata umumnya tidak dibaca.','petit, grand, beaucoup'],
    ['LIAISON: konsonan mati dibaca bila kata berikutnya mulai vokal.','les amis → "lezami"'],
    ['Tekanan selalu di suku kata TERAKHIR frasa, tidak pernah pindah.','restaurant → restau-RANT'],
    ['Kata sifat umumnya SETELAH kata benda.','une voiture rouge']
  ],
  demo: [
    { block:'Bonjour', parts:['Bon','jour'], rom:'bonzyur', layout:'selamat siang' },
    { block:'Merci beaucoup', parts:['Mer','ci','beau','coup'], rom:'mersi boku', layout:'terima kasih banyak' },
    { block:"S'il vous plaît", parts:['Sil','vous','plaît'], rom:'sil vu ple', layout:'tolong / silakan' },
    { block:'les amis', parts:['les','amis'], rom:'lezami', layout:'para teman (liaison)' },
    { block:"Qu'est-ce que c'est ?", parts:['Quest','ce','que','cest'], rom:'kes kə se', layout:'ini apa?' },
    { block:'aujourd\'hui', parts:['au','jour','d\'hui'], rom:'ozyurdwi', layout:'hari ini' }
  ],
  batchim:`LIAISON — aturan yang membuat bahasa Prancis terdengar mengalir:

  les amis      → "le-Z-ami"     (s jadi z)
  un enfant     → "un-N-anfan"   (n dibunyikan)
  grand homme   → "gran-T-om"    (d jadi t)
  vous avez     → "vu-Z-ave"

Liaison WAJIB antara kata sandang dan kata benda, kata ganti dan kata kerja.
Liaison DILARANG setelah "et" dan sebelum h aspiré (les héros, tanpa liaison).`
},

phonology: {
  triples: [
    ['u / ou','tu vs tout','u = bibir bulat lidah depan; ou = "u" biasa Indonesia.'],
    ['é / è','été vs père','é tertutup (seperti "sate"), è terbuka (seperti "bebek").'],
    ['r Prancis','rue, Paris','Dari pangkal tenggorokan, seperti berkumur halus — bukan getaran lidah.'],
    ['on / an','bon vs banc','Dua vokal sengau berbeda; latih dengan menutup hidung untuk merasakan bedanya.'],
    ['e caduc','petit ≈ "pti"','e lemah sering hilang dalam ucapan cepat.']
  ],
  liaison: [
    ['les amis','lezami','s mati jadi berbunyi z.'],
    ['nous avons','nuzavon','Liaison wajib antara kata ganti dan kata kerja.'],
    ["c'est-à-dire",'setadir','Tiga kata menyatu jadi satu arus bunyi.'],
    ["il y a",'ilya','Ungkapan tersering dalam bahasa Prancis: "ada".'],
    ["je ne sais pas",'zyø sɛ pa','Dalam percakapan sering jadi "sye pa".']
  ],
  notes: [
    'Tekanan Prancis jatuh di akhir frasa, bukan di dalam kata — inilah yang memberi irama khasnya.',
    'Jangan menekan tiap kata seperti bahasa Inggris; Prancis mengalir rata lalu naik di ujung.',
    'Vokal sengau harus dilatih terpisah; ini pembeda utama pemula dan penutur lancar.'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['Bonjour','bonzyur','Selamat pagi / siang'],
    ['Bonsoir','bonswar','Selamat malam'],
    ['Salut','salu','Hai (santai)'],
    ['Au revoir','o rəvwar','Sampai jumpa'],
    ['Enchanté','ansyante','Senang berkenalan']
  ]},
  { g:'Sopan santun', items:[
    ['Merci beaucoup','mersi boku','Terima kasih banyak'],
    ['De rien','də ryen','Sama-sama'],
    ["S'il vous plaît",'sil vu ple','Tolong / silakan'],
    ['Excusez-moi','ekskuze mwa','Permisi'],
    ['Pardon','pardon','Maaf']
  ]},
  { g:'Bertahan hidup', items:[
    ["C'est combien ?",'se kombyen','Berapa harganya?'],
    ['Je voudrais ça','zyø vudre sa','Saya mau yang ini'],
    ['Où sont les toilettes ?','u son le twalet','Di mana toilet?'],
    ["Aidez-moi, s'il vous plaît",'ede mwa sil vu ple','Tolong saya'],
    ['Je ne comprends pas','zyø nə kompran pa','Saya tidak mengerti'],
    ['Parlez plus lentement','parle plu lantəman','Tolong bicara lebih pelan'],
    ['Je parle un peu français','zyø parl en pø franse','Saya bisa sedikit bahasa Prancis']
  ]},
  { g:'Perkenalan', items:[
    ["Je m'appelle ○○",'zyø mapel ○○','Nama saya ○○'],
    ["Je viens d'Indonésie",'zyø vyen dendonezi','Saya dari Indonesia'],
    ['Je suis étudiant','zyø sui etudyan','Saya mahasiswa'],
    ["J'apprends le français",'zyapran lə franse','Saya belajar bahasa Prancis']
  ]}
],

numbers: {
  note:'Angka 70–99 Prancis dihitung dengan cara tak lazim: 70 = enam puluh sepuluh, 80 = empat kali dua puluh, 90 = empat kali dua puluh sepuluh.',
  sino: { title:'Angka 1–12', use:'dasar',
    list:[['un','en','1'],['deux','dø','2'],['trois','trwa','3'],['quatre','katr','4'],
          ['cinq','senk','5'],['six','sis','6'],['sept','set','7'],['huit','wit','8'],
          ['neuf','nøf','9'],['dix','dis','10'],['onze','onz','11'],['douze','duz','12']] },
  native: { title:'Angka besar yang menjebak', use:'wajib dihafal terpisah',
    list:[['soixante-dix','70','60 + 10'],['soixante et onze','71','60 + 11'],
          ['quatre-vingts','80','4 × 20'],['quatre-vingt-un','81','4 × 20 + 1'],
          ['quatre-vingt-dix','90','4 × 20 + 10'],['quatre-vingt-dix-neuf','99','4 × 20 + 19']] },
  clock:'Jam memakai heures: il est trois heures et demie = pukul setengah empat (03.30).'
},

grammar: [
{ id:'fr-g1', level:'A1', title:'Gender & Kata Sandang', titleId:'le / la / les',
  why:'Semua kata benda Prancis berjenis kelamin, dan kata sifat serta kata sandang mengikutinya.',
  form:'le (maskulin) · la (feminin) · l\' (di depan vokal) · les (jamak)\nun / une / des untuk yang belum tentu',
  notes:['Gender bisa mengubah makna: le livre = buku · la livre = pon (500 g).','Hafalkan kata benda bersama kata sandangnya: "la table", bukan "table".',
         'Petunjuk: -tion, -té, -ette hampir selalu feminin; -age, -ment, -eau hampir selalu maskulin.',
         'Kata sifat menyesuaikan gender dan jumlah: un petit garçon, une petite fille.'],
  ex:[['le livre','buku itu (maskulin)'],
      ['la table','meja itu (feminin)'],
      ["l'ami / les amis",'teman itu / para teman']],
  traps:[["Je suis étudiant à la université","Je suis étudiant à l'université","Sebelum vokal, la/le menjadi l'. Penutur Indonesia sering melewatkannya karena bahasa Indonesia tidak punya elisi."]],
  drills:[
    { t:'mcq', q:'Kata berakhiran -tion umumnya', opts:['maskulin','feminin','netral','bebas'], a:1 },
    { t:'mcq', q:'"para teman" =', opts:['le amis','la amis','les amis','l\'amis'], a:2 }
  ]},
{ id:'fr-g2', level:'A1', title:'Negasi ne … pas', titleId:'Menyangkal dengan Dua Kata',
  why:'Negasi Prancis mengapit kata kerja — pola yang tidak ada di bahasa Indonesia maupun Inggris.',
  form:'Subjek + ne + kata kerja + pas\nJe ne parle pas anglais.',
  notes:['ne menjadi n\' di depan vokal: je n\'ai pas.',
         'Dalam percakapan santai, ne sering dihilangkan: "je sais pas".',
         'Variasi: ne … jamais (tidak pernah), ne … rien (tidak ada apa-apa), ne … plus (tidak lagi).'],
  ex:[['Je ne sais pas.','Saya tidak tahu.'],
      ["Il n'aime pas le café.",'Dia tidak suka kopi.'],
      ['Nous ne mangeons jamais ici.','Kami tidak pernah makan di sini.']],
  traps:[['Je pas parle.','Je ne parle pas.','Kata kerja harus diapit ne dan pas.']],
  drills:[
    { t:'mcq', q:'"Saya tidak mengerti" =', opts:['Je comprends pas ne','Je ne comprends pas','Ne je comprends pas','Je pas comprends'], a:1 },
    { t:'mcq', q:'"tidak pernah" =', opts:['ne … pas','ne … jamais','ne … rien','ne … plus'], a:1 }
  ]},
{ id:'fr-g3', level:'A2', title:'Passé composé', titleId:'Bentuk Lampau Utama',
  why:'Bentuk lampau yang paling sering dipakai dalam percakapan. Kesulitannya: memilih avoir atau être.',
  form:'Subjek + avoir/être (sekarang) + participe passé\nJ\'ai mangé. / Je suis allé.',
  notes:['Sebagian besar kata kerja memakai avoir.',
         'Kata kerja gerak dan perubahan keadaan memakai être: aller, venir, partir, arriver, naître, mourir, rester, devenir.',
         'Dengan être, participe menyesuaikan gender dan jumlah: elle est allée, ils sont allés.'],
  ex:[["J'ai mangé au restaurant.",'Saya makan di restoran.'],
      ['Elle est allée à Paris.','Dia (perempuan) pergi ke Paris.'],
      ['Nous avons vu le film.','Kami menonton film itu.']],
  traps:[["J'ai allé.",'Je suis allé.','aller termasuk kata kerja gerak → memakai être.']],
  drills:[
    { t:'mcq', q:'Kata kerja aller memakai bantu', opts:['avoir','être','faire','aller'], a:1 },
    { t:'mcq', q:'"Kami sudah melihat" =', opts:['Nous sommes vu','Nous avons vu','Nous avons vus','Nous sommes vus'], a:1 }
  ]}
],

vocab: [
{ id:'fr-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['la personne','la person','orang'],["l'eau",'lo','air'],['la nourriture','la nurityur','makanan'],
    ['la maison','la mezon','rumah'],["l'école",'lekol','sekolah'],["l'ami",'lami','teman'],
    ['le temps','lə tan','waktu'],["l'argent",'larzyan','uang'],['le travail','lə travay','pekerjaan'],
    ["aujourd'hui",'ozyurdwi','hari ini'],['demain','dəmen','besok'],['hier','yer','kemarin'],
    ['maintenant','mentənan','sekarang'],['ici','isi','di sini'],['là','la','di sana'],
    ['ceci','səsi','ini'],['cela','səla','itu'],['quoi','kwa','apa'],
    ['qui','ki','siapa'],['où','u','di mana'],['quand','kan','kapan'],
    ['pourquoi','purkwa','mengapa'],['comment','koman','bagaimana'],['combien','kombyen','berapa'],
    ['aller','ale','pergi'],['venir','vənir','datang'],['manger','manzye','makan'],
    ['boire','bwar','minum'],['voir','vwar','melihat'],['écouter','ekute','mendengar'],
    ['faire','fer','melakukan'],['avoir','avwar','punya'],['être','etr','menjadi / ada'],
    ['bon','bon','bagus'],['grand','gran','besar'],['petit','pəti','kecil'],
    ['beaucoup','boku','banyak'],['peu','pø','sedikit'],['nouveau','nuvo','baru'],
    ['délicieux','delisyø','enak'],['cher','syer','mahal'],['pas cher','pa syer','murah']
  ]}
],

exam: {
  id:'delf', name:'DELF / DALF', full:'Diplôme d\'Études en Langue Française · Diplôme Approfondi de Langue Française',
  tagline:'Diploma resmi Kementerian Pendidikan Prancis. Berlaku SEUMUR HIDUP, tidak ada masa kedaluwarsa.',
  overview:{
    tingkat:'DELF A1 · A2 · B1 · B2, lalu DALF C1 · C2',
    bagian:'Empat pada setiap tingkat: compréhension de l\'oral, compréhension des écrits, production écrite, production orale',
    kelulusan:'Total minimal 50 dari 100, dan minimal 5 dari 25 pada SETIAP bagian',
    kegunaan:'B2 umumnya disyaratkan untuk kuliah di universitas Prancis; A2/B1 untuk kewarganegaraan'
  },
  levels:[
    ['DELF A1','Pemula','Memperkenalkan diri, mengisi formulir, ungkapan paling dasar.'],
    ['DELF A2','Dasar','Menangani urusan rutin dan menjelaskan lingkungan sekitar.'],
    ['DELF B1','Menengah','Mandiri dalam perjalanan; menyampaikan pendapat sederhana.'],
    ['DELF B2','Menengah atas','Berargumen dan berdiskusi; ambang masuk universitas Prancis.'],
    ['DALF C1','Mahir','Memahami teks panjang dan menyusun argumen kompleks.'],
    ['DALF C2','Sangat mahir','Menguasai nuansa; setara penutur terdidik.']
  ],
  sections:[
    { name:"Compréhension de l'oral", items:'Menyimak', note:'Rekaman diputar dua kali pada tingkat rendah, sekali pada B2 ke atas.' },
    { name:'Compréhension des écrits', items:'Membaca', note:'Iklan, artikel, dan pada B2 teks berargumen.' },
    { name:'Production écrite', items:'Menulis', note:'Surel, surat pembaca, esai berargumen sesuai tingkat.' },
    { name:'Production orale', items:'Berbicara', note:'Wawancara, monolog, dan pada B2 debat dengan penguji.' }
  ],
  tactics:[
    { title:'Ambang 5/25 per bagian adalah jebakan sesungguhnya', budget:'—',
      steps:['Total 50 saja tidak cukup — satu bagian di bawah 5 langsung menggugurkan.',
             'Hitung skor tiap bagian di setiap latihan, bukan total saja.',
             'Bagian tertulis biasanya penyelamat; bagian menyimak biasanya penjatuh.'],
      why:'Peserta sering gagal dengan total tinggi karena satu bagian di bawah ambang minimum.' },
    { title:'Latih vokal sengau sebelum menumpuk kosakata', budget:'10 mnt/hari',
      steps:['Latih pasangan: bon/banc, vin/vent, un/on.',
             'Tutup hidung saat mengucapkannya — bunyinya harus berubah, itu tanda sengaunya benar.',
             'Rekam dan bandingkan dengan penutur asli.'],
      why:'Vokal sengau adalah pembeda utama yang langsung terdengar penguji lisan.' },
    { title:'Production orale B2: siapkan struktur debat', budget:'30 mnt persiapan',
      steps:['Rumus: pendapat → dua argumen dengan contoh → akui pandangan lawan → simpulkan.',
             'Hafalkan sepuluh penghubung: d\'abord, ensuite, en revanche, néanmoins, en somme.',
             'Penguji akan menantangmu — siapkan satu kalimat untuk mengakui sebagian ("Certes, mais…").'],
      why:'Di B2, kemampuan mempertahankan pendapat dinilai lebih tinggi daripada kelancaran semata.' }
  ],
  sources:[
    ['France Éducation international — DELF/DALF','https://www.france-education-international.fr/diplome/delf-tout-public'],
    ['Kerangka CEFR','https://www.coe.int/en/web/common-european-framework-reference-languages']
  ]
}
};
