/* BAHASA SPANYOL — huruf khusus, aturan baca, ser/estar, subjuntivo, DELE. */

const S = (c, rom, trick, strokes, name) => ({ c, rom, trick, strokes, name });

export const ES = {
code:'es', name:'Spanyol', native:'Español', dir:'ltr',

intro: {
  headline:'Bahasa Eropa yang paling mudah dibaca orang Indonesia.',
  body:`Kalau kamu bisa membaca bahasa Indonesia, kamu praktis sudah bisa membaca bahasa Spanyol.
Vokalnya lima dan tetap: a-e-i-o-u, sama persis. Hampir setiap huruf dibaca konsisten. Tidak ada
vokal sengau seperti Prancis, tidak ada nada seperti Mandarin, tidak ada aksara baru.

Yang menuntut kerja: kata kerja berubah menurut siapa pelakunya (enam bentuk untuk setiap waktu),
dua kata kerja untuk "adalah" (ser dan estar) yang tidak bisa saling ganti, dan modus subjuntivo
yang tidak punya padanan di bahasa Indonesia.

Dengan lebih dari 490 juta penutur asli, Spanyol adalah bahasa dengan penutur asli terbanyak
kedua di dunia setelah Mandarin.`,
  facts:[
    '27 huruf: 26 huruf Latin + ñ.',
    'Lima vokal saja, dan bunyinya persis seperti bahasa Indonesia.',
    'Tanda tanya dan seru dibuka terbalik: ¿Cómo estás? ¡Hola!',
    'Dua jenis kelamin kata: masculino (el) dan femenino (la).'
  ],
  hardForId:[
    'Konjugasi kata kerja: satu kata kerja punya enam bentuk per waktu, dan ada belasan waktu.',
    'ser vs estar — dua kata untuk "adalah" dengan makna berbeda.',
    'Subjuntivo: modus untuk keraguan, harapan, dan emosi.',
    'r bergetar ganda (rr) vs r tunggal: pero (tetapi) vs perro (anjing).',
    'Gender kata benda memengaruhi kata sandang dan kata sifat.'
  ]
},

scripts: [
{
  id:'especiales', name:'Huruf & Tanda Khusus', native:'Letras especiales', count:7,
  note:'Bahasa Spanyol hanya menambah satu huruf (ñ) pada abjad Latin, ditambah aksen tekanan dan tanda baca terbalik yang khas.',
  chars: [
    S('ñ','ñ','N dengan tilde. Dibaca "ny" seperti pada "nyanyi". Huruf resmi tersendiri dalam abjad Spanyol.',
      ['M28 48 L28 86','M28 58 C34 48 52 46 56 58 L56 86','M32 26 C38 20 46 30 52 24'],'eñe'),
    S('á','á','Aksen menandai suku kata bertekanan, bukan mengubah bunyi.',
      ['M30 60 C34 50 52 50 54 62 L54 84','M54 66 C40 62 26 68 28 78 C30 86 48 88 54 80','M44 24 L58 34'],'a dengan tilde'),
    S('é','é','Sama: hanya menandai tekanan.',
      ['M26 62 C26 50 44 46 50 56 C54 64 40 70 26 68 C26 80 42 86 56 80','M44 24 L58 34'],'e dengan tilde'),
    S('í','í','Titik pada i hilang bila diberi aksen.',
      ['M50 48 L50 84','M42 24 L56 34'],'i dengan tilde'),
    S('ó','ó','Menandai tekanan pada o.',
      ['M50 48 C36 48 30 58 30 68 C30 78 38 86 50 86 C62 86 70 78 70 68 C70 58 64 48 50 48','M44 24 L58 34'],'o dengan tilde'),
    S('ú','ú','Menandai tekanan pada u.',
      ['M28 48 L28 72 C28 82 44 86 52 76','M54 48 L54 84','M44 24 L58 34'],'u dengan tilde'),
    S('¿','¿','Tanda tanya terbalik membuka kalimat. Wajib, bukan pilihan.',
      ['M40 30 C40 18 62 16 66 30 C70 44 52 48 50 62','M50 74 L50 84'],'tanda tanya pembuka')
  ]
}
],

compound: {
  tense: [
    ['h','selalu diam','hola dibaca "ola", hospital dibaca "ospital".'],
    ['j','seperti "kh"','José = "khose", trabajo = "trabakho".'],
    ['g + e/i','seperti "kh"','gente = "khente". Tetapi ga, go, gu dibaca "g" biasa.'],
    ['ll','seperti "y"','llamar = "yamar", calle = "kaye".'],
    ['ñ','seperti "ny"','España = "espanya".'],
    ['c + e/i','seperti "s"','cinco = "sinko" (Amerika Latin), "thinko" (Spanyol).'],
    ['z','seperti "s"','zapato = "sapato" di Amerika Latin.'],
    ['qu','seperti "k"','que = "ke", quién = "kien". u tidak dibaca.'],
    ['v','seperti "b"','vaca dan baca terdengar hampir sama.'],
    ['rr','r bergetar kuat','perro = anjing, pero = tetapi. Bedanya penting.']
  ],
  vowels: [
    ['a e i o u','lima vokal tetap','Dibaca persis seperti bahasa Indonesia, tanpa variasi.'],
    ['Diftong','ai ei oi au eu','baile, seis, hoy, causa — dua vokal satu suku kata.'],
    ['Hiatus','a-í, e-ó','día, león — dipisah jadi dua suku kata.'],
    ['Aksen','menandai tekanan','Bila tekanan menyimpang dari aturan, ditandai dengan aksen.']
  ]
},

syllable: {
  rules: [
    ['Kata berakhir vokal, n, atau s → tekanan di suku kata KEDUA DARI BELAKANG.','ca-SA, jo-ven, li-bros'],
    ['Kata berakhir konsonan lain → tekanan di suku kata TERAKHIR.','ha-BLAR, ciu-DAD'],
    ['Bila menyimpang dari dua aturan itu, ditandai aksen.','ca-FÉ, LÁ-piz, mú-si-ca'],
    ['Kalimat tanya dan seru dibuka tanda terbalik.','¿Qué tal? ¡Qué bien!']
  ],
  demo: [
    { block:'Hola', parts:['Ho','la'], rom:'ola', layout:'halo' },
    { block:'¿Cómo estás?', parts:['Có','mo','es','tás'], rom:'komo estas', layout:'apa kabar?' },
    { block:'Gracias', parts:['Gra','cias'], rom:'grasias', layout:'terima kasih' },
    { block:'España', parts:['Es','pa','ña'], rom:'espanya', layout:'Spanyol' },
    { block:'trabajo', parts:['tra','ba','jo'], rom:'trabakho', layout:'pekerjaan' },
    { block:'calle', parts:['ca','lle'], rom:'kaye', layout:'jalan' }
  ],
  batchim:`SER vs ESTAR — dua kata untuk "adalah", dan memilih salah mengubah makna:

  SER   → sifat tetap: identitas, asal, profesi, waktu, bahan
          Soy indonesio. · Es médico. · Son las tres.
  ESTAR → keadaan sementara & lokasi
          Estoy cansado. · Está en casa. · Estamos listos.

  Bandingkan:
  Es aburrido  = dia orang yang membosankan (sifat)
  Está aburrido = dia sedang bosan (keadaan)
  Es guapo     = dia tampan (sifat)
  Está guapo   = dia terlihat tampan hari ini (keadaan)`
},

phonology: {
  triples: [
    ['r / rr','pero vs perro','r tunggal satu sentuhan; rr digetarkan penuh. Ini membedakan makna.'],
    ['b / v','beber vs vivir','Praktis sama bunyinya dalam bahasa Spanyol modern.'],
    ['c / z / s','cinco, zapato, sopa','Di Amerika Latin ketiganya "s"; di Spanyol, c dan z jadi "th".'],
    ['ll / y','calle vs cayó','Di sebagian besar wilayah keduanya sama-sama "y".'],
    ['j / g','jugar vs gente','Keduanya bunyi "kh" dari kerongkongan.']
  ],
  liaison: [
    ['los amigos','lo-sa-mi-gos','Konsonan akhir menyambung ke vokal berikutnya.'],
    ['¿Cómo estás?','ko-moes-tas','Dua kata melebur dalam ucapan cepat.'],
    ['mi hijo','mi-i-kho','h diam, jadi vokalnya bersambung.'],
    ['está aquí','es-ta-ki','Dua a bersebelahan melebur jadi satu.'],
    ['muchas gracias','mu-cha-gra-sias','s akhir sering melemah di banyak dialek.']
  ],
  notes: [
    'Bunyi Spanyol hampir seluruhnya ada di bahasa Indonesia — inilah bahasa Eropa termudah untuk dilafalkan.',
    'Yang perlu dilatih khusus hanya rr bergetar dan bunyi j/g yang seperti "kh".',
    'Ritme Spanyol berbasis suku kata, sama seperti bahasa Indonesia, bukan berbasis tekanan seperti Inggris.'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['Hola','ola','Halo'],
    ['Buenos días','buenos dias','Selamat pagi'],
    ['Buenas tardes','buenas tardes','Selamat sore'],
    ['Hasta luego','asta luego','Sampai jumpa'],
    ['Mucho gusto','mucho gusto','Senang berkenalan']
  ]},
  { g:'Sopan santun', items:[
    ['Gracias','grasias','Terima kasih'],
    ['De nada','de nada','Sama-sama'],
    ['Por favor','por favor','Tolong / silakan'],
    ['Perdón','perdon','Maaf / permisi'],
    ['No pasa nada','no pasa nada','Tidak apa-apa']
  ]},
  { g:'Bertahan hidup', items:[
    ['¿Cuánto cuesta?','kuanto kuesta','Berapa harganya?'],
    ['Quiero esto','kiero esto','Saya mau ini'],
    ['¿Dónde está el baño?','donde esta el banyo','Di mana toilet?'],
    ['Ayúdame, por favor','ayudame por favor','Tolong saya'],
    ['No entiendo','no entiendo','Saya tidak mengerti'],
    ['Habla más despacio','abla mas despasio','Tolong bicara lebih pelan'],
    ['Hablo un poco de español','ablo un poko de espanyol','Saya bisa sedikit bahasa Spanyol']
  ]},
  { g:'Perkenalan', items:[
    ['Me llamo ○○','me yamo ○○','Nama saya ○○'],
    ['Soy de Indonesia','soy de indonesia','Saya dari Indonesia'],
    ['Soy estudiante','soy estudiante','Saya mahasiswa'],
    ['Estoy aprendiendo español','estoy aprendiendo espanyol','Saya sedang belajar bahasa Spanyol']
  ]}
],

numbers: {
  note:'Angka Spanyol sangat teratur. Hanya 16–29 yang ditulis menyatu; sisanya memakai pola "puluhan y satuan".',
  sino: { title:'Angka 1–12', use:'dasar',
    list:[['uno','uno','1'],['dos','dos','2'],['tres','tres','3'],['cuatro','kuatro','4'],
          ['cinco','sinko','5'],['seis','seis','6'],['siete','siete','7'],['ocho','ocho','8'],
          ['nueve','nueve','9'],['diez','dies','10'],['once','onse','11'],['doce','dose','12']] },
  native: { title:'Pola puluhan', use:'sangat teratur',
    list:[['veinte','20','dua puluh'],['veintiuno','21','ditulis menyatu'],
          ['treinta y uno','31','pakai "y" mulai 31'],['cuarenta','40','empat puluh'],
          ['cien','100','seratus'],['mil','1.000','seribu']] },
  clock:'Jam memakai bentuk feminin: son las tres y media = pukul setengah empat (03.30).'
},

grammar: [
{ id:'es-g1', level:'A1', title:'Ser dan Estar', titleId:'Dua Kata untuk "Adalah"',
  why:'Kesalahan paling sering dan paling terasa. Memilih yang salah bukan sekadar janggal — maknanya berubah.',
  form:'SER: identitas, asal, profesi, sifat tetap, waktu\nESTAR: keadaan sementara, lokasi, perasaan',
  notes:['Ingat rumus: SER untuk siapa/apa kamu, ESTAR untuk bagaimana/di mana kamu.',
         'Lokasi SELALU estar, walau permanen: Yakarta está en Java.',
         'Beberapa kata sifat berubah makna: listo (pintar/siap), aburrido (membosankan/bosan).'],
  ex:[['Soy indonesio.','Saya orang Indonesia. (identitas)'],
      ['Estoy cansado.','Saya lelah. (keadaan)'],
      ['El libro está en la mesa.','Buku itu di atas meja. (lokasi)']],
  traps:[['Soy en casa.','Estoy en casa.','Lokasi selalu memakai estar.']],
  drills:[
    { t:'mcq', q:'"Saya di rumah" =', opts:['Soy en casa','Estoy en casa','Ser en casa','Está en casa'], a:1 },
    { t:'mcq', q:'Profesi memakai', opts:['ser','estar','keduanya','tidak keduanya'], a:0 }
  ]},
{ id:'es-g2', level:'A1', title:'Konjugasi Kata Kerja Beraturan', titleId:'Tiga Kelompok -ar / -er / -ir',
  why:'Kata kerja Spanyol berubah menurut pelakunya. Ini beban terbesar di awal, tetapi polanya sangat teratur.',
  form:'hablar → hablo, hablas, habla, hablamos, habláis, hablan\ncomer → como, comes, come, comemos, coméis, comen\nvivir → vivo, vives, vive, vivimos, vivís, viven',
  notes:['Karena akhirannya sudah menandai pelaku, kata ganti (yo, tú) sering dihilangkan.',
         'Kelompok -er dan -ir hampir sama, berbeda hanya pada bentuk kami dan kalian.',
         'Kuasai tiga pola ini dulu; kata kerja tak beraturan datang belakangan.'],
  ex:[['Hablo español.','Saya berbicara bahasa Spanyol.'],
      ['¿Dónde vives?','Kamu tinggal di mana?'],
      ['Comemos a las dos.','Kami makan jam dua.']],
  traps:[['Yo hablar español.','Yo hablo español.','Kata kerja harus dikonjugasikan, tidak boleh bentuk dasar.']],
  drills:[
    { t:'mcq', q:'"Kamu makan" (comer) =', opts:['comes','comas','comer','como'], a:0 },
    { t:'mcq', q:'Mengapa kata ganti sering dihilangkan?', opts:['untuk sopan','karena akhiran sudah menandai pelaku','karena dilarang','agar singkat saja'], a:1 }
  ]},
{ id:'es-g3', level:'B1', title:'Subjuntivo', titleId:'Modus Keraguan dan Harapan',
  why:'Tidak ada padanannya di bahasa Indonesia, dan inilah pembatas antara tingkat menengah dan mahir.',
  form:'Dipakai setelah ungkapan harapan, keraguan, emosi, dan perintah tak langsung\nQuiero que vengas. · Espero que estés bien.',
  notes:['Pemicu utama: querer que, esperar que, dudar que, es importante que, ojalá.',
         'Bentuknya: ambil bentuk "yo" present, ganti akhirannya — hablo → hable, como → coma.',
         'Kalau kalimatnya menyatakan FAKTA, pakai indikatif; kalau menyatakan keinginan atau keraguan, pakai subjuntivo.'],
  ex:[['Espero que estés bien.','Semoga kamu baik-baik saja.'],
      ['Quiero que vengas mañana.','Saya ingin kamu datang besok.'],
      ['Es importante que estudies.','Penting bahwa kamu belajar.']],
  traps:[['Quiero que vienes.','Quiero que vengas.','Setelah "quiero que" wajib subjuntivo.']],
  drills:[
    { t:'mcq', q:'Setelah "espero que" dipakai bentuk', opts:['indikatif','subjuntivo','infinitif','imperatif'], a:1 },
    { t:'mcq', q:'"Saya ingin kamu belajar" =', opts:['Quiero que estudias','Quiero que estudies','Quiero estudiar tú','Quiero que estudiar'], a:1 }
  ]}
],

vocab: [
{ id:'es-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['la persona','persona','orang'],['el agua','agua','air'],['la comida','komida','makanan'],
    ['la casa','kasa','rumah'],['la escuela','eskuela','sekolah'],['el amigo','amigo','teman'],
    ['el tiempo','tiempo','waktu / cuaca'],['el dinero','dinero','uang'],['el trabajo','trabakho','pekerjaan'],
    ['hoy','oy','hari ini'],['mañana','manyana','besok / pagi'],['ayer','ayer','kemarin'],
    ['ahora','aora','sekarang'],['aquí','aki','di sini'],['allí','ayi','di sana'],
    ['esto','esto','ini'],['eso','eso','itu'],['qué','ke','apa'],
    ['quién','kien','siapa'],['dónde','donde','di mana'],['cuándo','kuando','kapan'],
    ['por qué','por ke','mengapa'],['cómo','komo','bagaimana'],['cuánto','kuanto','berapa'],
    ['ir','ir','pergi'],['venir','venir','datang'],['comer','komer','makan'],
    ['beber','beber','minum'],['ver','ver','melihat'],['escuchar','eskuchar','mendengar'],
    ['hacer','aser','melakukan'],['tener','tener','punya'],['ser','ser','menjadi (tetap)'],
    ['bueno','bueno','bagus'],['grande','grande','besar'],['pequeño','pekenyo','kecil'],
    ['mucho','mucho','banyak'],['poco','poko','sedikit'],['nuevo','nuevo','baru'],
    ['rico','riko','enak / kaya'],['caro','karo','mahal'],['barato','barato','murah']
  ]}
],

exam: {
  id:'dele', name:'DELE', full:'Diplomas de Español como Lengua Extranjera (Instituto Cervantes)',
  tagline:'Diploma resmi Kementerian Pendidikan Spanyol. Berlaku seumur hidup dan diakui di seluruh dunia berbahasa Spanyol.',
  overview:{
    tingkat:'A1 · A2 · B1 · B2 · C1 · C2',
    bagian:'Empat, dikelompokkan jadi dua grup nilai: (1) Membaca + Menulis, (2) Menyimak + Berbicara',
    kelulusan:'Minimal 30 dari 50 pada SETIAP grup; hasilnya hanya "apto" (lulus) atau "no apto"',
    kegunaan:'A2 untuk kewarganegaraan Spanyol; B2/C1 untuk kuliah dan kerja profesional'
  },
  levels:[
    ['A1','Pemula','Ungkapan sehari-hari paling dasar dan perkenalan diri.'],
    ['A2','Dasar','Situasi rutin; syarat kewarganegaraan Spanyol.'],
    ['B1','Menengah','Mandiri dalam perjalanan; menyampaikan pengalaman dan rencana.'],
    ['B2','Menengah atas','Berdiskusi topik kompleks; ambang umum masuk universitas.'],
    ['C1','Mahir','Memahami teks panjang dan berargumen dengan luwes.'],
    ['C2','Sangat mahir','Menguasai nuansa dan ragam; setara penutur terdidik.']
  ],
  sections:[
    { name:'Comprensión de lectura', items:'Membaca', note:'Digabung nilainya dengan menulis dalam satu grup.' },
    { name:'Expresión e interacción escritas', items:'Menulis', note:'Surel, laporan, esai berargumen sesuai tingkat.' },
    { name:'Comprensión auditiva', items:'Menyimak', note:'Digabung nilainya dengan berbicara.' },
    { name:'Expresión e interacción orales', items:'Berbicara', note:'Presentasi singkat, dialog, dan tanya jawab dengan penguji.' }
  ],
  tactics:[
    { title:'Nilai digabung per GRUP, bukan per bagian', budget:'—',
      steps:['Membaca + Menulis satu grup; Menyimak + Berbicara grup lain.',
             'Kelemahan menulis bisa ditutup kekuatan membaca — dan sebaliknya.',
             'Tetapi kedua grup harus sama-sama mencapai 30/50.'],
      why:'Memahami pengelompokan ini mengubah cara membagi waktu belajar secara signifikan.' },
    { title:'Kuasai ser/estar sampai otomatis sebelum B1', budget:'15 mnt/hari',
      steps:['Tulis 10 kalimat sehari, lima dengan ser dan lima dengan estar.',
             'Perhatikan kata sifat yang berubah makna: listo, aburrido, rico, verde.',
             'Uji diri dengan menerjemahkan kalimat Indonesia yang mengandung "adalah".'],
      why:'Kesalahan ser/estar paling cepat terdengar penguji lisan dan paling sering muncul di tulisan.' },
    { title:'Latih rr bergetar secara terpisah', budget:'5 mnt/hari',
      steps:['Latih pasangan: pero/perro, caro/carro, coro/corro.',
             'Mulai dari bunyi "d" cepat berulang, lalu tambah embusan udara.',
             'Penutur Indonesia punya keunggulan di sini — r kita sudah bergetar.'],
      why:'Perbedaan r dan rr membedakan makna, dan mudah dikuasai penutur Indonesia.' },
    { title:'Subjuntivo: hafalkan pemicunya, bukan tabelnya', budget:'—',
      steps:['Buat daftar 15 ungkapan pemicu: quiero que, espero que, dudo que, es importante que, ojalá…',
             'Latih dengan mengubah kalimat fakta menjadi kalimat harapan.',
             'Baca banyak — subjuntivo paling mudah diserap lewat pola yang sering dilihat.'],
      why:'Menghafal tabel konjugasi tanpa pemicunya membuat subjuntivo tidak pernah keluar saat berbicara.' }
  ],
  sources:[
    ['Instituto Cervantes — DELE','https://examenes.cervantes.es/es/dele/que-es'],
    ['Kerangka CEFR','https://www.coe.int/en/web/common-european-framework-reference-languages']
  ]
}
};
