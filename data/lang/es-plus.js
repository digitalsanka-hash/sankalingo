/* SPANYOL — MATERI TAMBAHAN B2 / C1 (DELE).

   Berkas ini menambal dua celah kurikulum Spanyol:

   1. es-g3 dan es-g8 sama-sama mengajarkan subjuntivo presente. Delapan topik
      di bawah menggantikan bobot yang hilang itu dengan lanjutannya yang
      sebenarnya diuji di DELE B2–C1: subjuntivo imperfecto, condicional
      compuesto, pengandaian tipe 2 dan 3, kalimat tak langsung, perifrasis
      verbal, ser/estar tingkat lanjut, pasiva refleja, dan konektor wacana.
   2. Kosakata di atas B1 sebelumnya hanya satu paket (es-v-abs). Tiga paket
      baru menutupi dunia kerja, opini/media, dan bahasa akademik.

   Semua id memakai awalan es-p / es-pv supaya tidak pernah bentrok dengan
   es-g1..es-g10, es-core, dan es-v-*.

   Sudut pandang berkas ini: setiap topik menerangkan MENGAPA penutur bahasa
   Indonesia keliru, bukan sekadar apa yang benar. */

export const PLUS = {

grammar: [

/* ─────────────────────────────────────────────────────────────
   1. Subjuntivo imperfecto — mesin seluruh tingkat B2 ke atas
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p1',
  level:'B2',
  title:'Pretérito imperfecto de subjuntivo',
  titleId:'Subjuntivo Bentuk Lampau',
  why:'Bahasa Indonesia tidak menyelaraskan waktu antara induk kalimat dan anak kalimat — "Saya ingin kamu datang" dan "Saya ingin kamu datang (waktu itu)" memakai bentuk kata kerja yang sama persis. Akibatnya penutur Indonesia terus memakai subjuntivo presente walau kata kerja induknya sudah lampau, dan kalimatnya langsung terdengar salah di telinga penguji DELE.',
  form:'Ambil bentuk ELLOS pretérito indefinido, buang -ron, tambahkan akhiran:\n  hablaron  → hablara, hablaras, hablara, habláramos, hablarais, hablaran\n  comieron  → comiera, comieras, comiera, comiéramos, comierais, comieran\n  tuvieron  → tuviera …   ·  fueron → fuera …   ·  hicieron → hiciera …\nAda dua rangkaian akhiran yang sama artinya: -ra dan -se (hablara = hablase).',
  notes:[
    'Rumus bentuk ellos itu berlaku untuk SEMUA kata kerja tanpa kecuali — termasuk yang tak beraturan. Kalau kamu tahu dijeron, kamu otomatis tahu dijera.',
    'Penyelarasan waktu: kata kerja induk lampau (quería, pidió, era necesario) menuntut subjuntivo imperfecto di anak kalimat. Quiero que vengas → Quería que vinieras.',
    'Bentuk nosotros SELALU beraksen: habláramos, comiéramos, fuéramos, tuviéramos. Aksen ini sering hilang dalam tulisan dan dihitung salah.',
    'Tiga pemakaian yang tidak bergantung pada waktu: setelah como si (selalu subjuntivo), setelah ojalá untuk harapan yang mustahil sekarang, dan sebagai bentuk sopan — Quisiera hablar con el director.'
  ],
  ex:[
    ['Quería que vinieras a la reunión.','Saya ingin kamu datang ke rapat itu.',''],
    ['Me pidió que le enviara el informe.','Dia meminta saya mengirimkan laporan itu kepadanya.',''],
    ['Habla como si fuera el jefe.','Dia bicara seolah-olah dia bosnya.',''],
    ['Ojalá tuviéramos más tiempo.','Andai saja kita punya lebih banyak waktu.',''],
    ['Quisiera hacer una pregunta.','Saya ingin mengajukan satu pertanyaan. (halus)','']
  ],
  traps:[
    ['Quería que vengas mañana.','Quería que vinieras al día siguiente.','Kata kerja induk lampau (quería) menarik anak kalimat ke subjuntivo imperfecto. Bahasa Indonesia tidak mengenal penyelarasan waktu, jadi langkah ini paling sering terlewat.'],
    ['Habla como si es médico.','Habla como si fuera médico.','Setelah como si tidak pernah dipakai indikatif — selalu subjuntivo imperfecto atau pluscuamperfecto.'],
    ['Ojalá tengo más dinero.','Ojalá tuviera más dinero.','Ojalá tidak pernah diikuti indikatif. Dengan subjuntivo presente (tenga) artinya harapan yang masih mungkin; dengan imperfecto (tuviera) artinya mustahil sekarang.'],
    ['Si nosotros hablaramos mejor…','Si nosotros habláramos mejor…','Bentuk nosotros subjuntivo imperfecto wajib beraksen di suku kata ketiga dari belakang.']
  ],
  drills:[
    { t:'mcq', q:'Subjuntivo imperfecto dibentuk dari bentuk mana?',
      opts:['bentuk yo presente','bentuk ellos pretérito indefinido','bentuk infinitif','bentuk nosotros presente'], a:1,
      why:'Buang -ron dari bentuk ellos, lalu tambahkan -ra atau -se. Berlaku untuk semua kata kerja, termasuk yang tak beraturan.' },
    { t:'mcq', q:'"Dia meminta saya menunggu" — Me pidió que …',
      opts:['espero','espere','esperara','esperaré'], a:2,
      why:'pidió lampau, jadi anak kalimatnya subjuntivo imperfecto: esperara (dari esperaron).' },
    { t:'mcq', q:'Setelah como si dipakai bentuk',
      opts:['subjuntivo imperfecto','indikatif presente','futuro','infinitif'], a:0,
      why:'como si tidak pernah menerima indikatif — hanya subjuntivo imperfecto atau pluscuamperfecto.' },
    { t:'mcq', q:'Subjuntivo imperfecto dari ser untuk yo adalah',
      opts:['sea','sería','era','fuera'], a:3,
      why:'ser dan ir sama-sama berpangkal pada fueron → fuera. sea adalah subjuntivo presente, sería condicional, era imperfecto indikatif.' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   2. Condicional compuesto
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p2',
  level:'B2',
  title:'El condicional compuesto',
  titleId:'Kondisional Lampau (Seharusnya Sudah)',
  why:'Bahasa Indonesia menyampaikan penyesalan dengan kata bantu — "seharusnya sudah", "pasti sudah", "kalau saja tadi" — sementara bentuk kata kerjanya tetap. Karena itu penutur Indonesia cenderung memakai condicional sederhana (iría) untuk semua pengandaian, padahal kejadian yang sudah lewat menuntut habría + partisipio.',
  form:'habría, habrías, habría, habríamos, habríais, habrían + PARTISIPIO\n  habría hablado · habrías comido · habríamos vivido\nPartisipio tak beraturan yang sering muncul:\n  hacer → hecho · decir → dicho · ver → visto · escribir → escrito\n  poner → puesto · volver → vuelto · abrir → abierto · romper → roto',
  notes:[
    'Makna utama: akibat yang tidak jadi terjadi di masa lalu. Si hubiera salido antes, habría llegado a tiempo.',
    'Makna kedua: masa depan dilihat dari titik lampau. Dijo que para el viernes ya habría terminado — waktu itu dia menduga hari Jumat sudah selesai.',
    'Makna ketiga: dugaan tentang masa lalu. Habrían sido las diez cuando llamó — mungkin sekitar jam sepuluh waktu dia menelepon.',
    'Kata ganti klitik (me, te, lo, se) diletakkan di DEPAN habría, tidak boleh menyisip di tengah: te habría llamado, bukan habría te llamado.',
    'Dalam percakapan Spanyol sehari-hari, hubiera llamado sering menggantikan habría llamado pada bagian akibat. Sebaliknya tidak berlaku: bagian si tidak pernah memakai habría.'
  ],
  ex:[
    ['Si hubiera salido antes, habría llegado a tiempo.','Kalau tadi saya berangkat lebih awal, saya pasti sampai tepat waktu.',''],
    ['Te habría llamado, pero me quedé sin batería.','Saya tadi mau menelponmu, tapi baterai saya habis.',''],
    ['Dijo que para el viernes ya habría terminado el informe.','Dia bilang, pada hari Jumat laporannya sudah selesai.',''],
    ['Yo no habría firmado ese contrato.','Kalau saya, saya tidak akan menandatangani kontrak itu.',''],
    ['Habría preferido otra fecha, la verdad.','Sejujurnya saya lebih suka tanggal yang lain.','']
  ],
  traps:[
    ['Habría estudiar más.','Habría estudiado más.','Setelah habría wajib partisipio (-ado / -ido), tidak boleh infinitif.'],
    ['Yo habría hacido el trabajo.','Yo habría hecho el trabajo.','Partisipio hacer tak beraturan: hecho. Menyeragamkannya jadi hacido adalah salah satu kesalahan yang paling cepat terdengar.'],
    ['Habría te llamado ayer.','Te habría llamado ayer.','Klitik tidak pernah menyisip antara habría dan partisipio; letaknya di depan seluruh gugus.'],
    ['Nosotros habriamos venido.','Nosotros habríamos venido.','Semua bentuk condicional beraksen pada -ía: habría, habríamos, habrían.']
  ],
  drills:[
    { t:'mcq', q:'Condicional compuesto dibentuk dari',
      opts:['habría + partisipio','había + partisipio','habré + partisipio','haya + partisipio'], a:0,
      why:'había + partisipio = pluscuamperfecto; habré = futuro perfecto; haya = perfecto de subjuntivo.' },
    { t:'mcq', q:'Partisipio dari escribir adalah',
      opts:['escribido','escrito','escribiendo','escribiese'], a:1,
      why:'escribir tak beraturan: escrito. Bandingkan describir → descrito.' },
    { t:'mcq', q:'"Kalau saya tahu, saya sudah menelponmu" — bagian akibatnya',
      opts:['te llamaría','te llamaba','te habría llamado','te llamaré'], a:2,
      why:'Akibat yang sudah lewat dan tidak jadi terjadi memakai condicional compuesto.' },
    { t:'mcq', q:'Letak kata ganti me / te / lo pada condicional compuesto adalah',
      opts:['di antara habría dan partisipio','digabung ke ujung partisipio','di akhir kalimat','di depan habría'], a:3,
      why:'Klitik selalu mendahului kata kerja bantu yang terkonjugasi: se lo habría dicho.' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   3. Pengandaian tipe 2 dan tipe 3
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p3',
  level:'B2',
  title:'Oraciones condicionales: tipo 2 y tipo 3',
  titleId:'Pengandaian Tak Nyata: Sekarang dan Masa Lalu',
  why:'Satu kata "kalau" dalam bahasa Indonesia menanggung tiga makna sekaligus — mungkin nyata, tidak nyata sekarang, dan tidak nyata dulu — dan pembedanya hanya konteks. Karena itu penutur Indonesia memilih bentuk Spanyol seperti mengundi. Padahal di DELE B2, salah tipe berarti maknanya berubah, bukan sekadar janggal.',
  form:'TIPE 2 (tak nyata sekarang / masa depan)\n  si + imperfecto de subjuntivo  →  condicional simple\n  Si tuviera dinero, viajaría a España.\n\nTIPE 3 (tak nyata di masa lalu)\n  si + pluscuamperfecto de subjuntivo  →  condicional compuesto\n  Si hubiera salido antes, no habría perdido el tren.\n\nCAMPURAN (sebab lampau, akibat sekarang)\n  si + pluscuamperfecto de subjuntivo  →  condicional simple\n  Si hubiera estudiado medicina, ahora sería médico.',
  notes:[
    'Aturan tunggal yang menyelamatkan banyak nilai: setelah si TIDAK PERNAH ada condicional (sería, habría), futuro (será), maupun subjuntivo presente (sea). Ketiganya otomatis salah.',
    'hubiera dan hubiese sepenuhnya bertukar tempat. Pilih satu dan konsisten.',
    'Urutannya boleh dibalik. Bila anak kalimat si berada di belakang, komanya hilang: Viajaría a España si tuviera dinero.',
    'Bentuk ringkasnya sering muncul di teks DELE: De haberlo sabido, no habría venido. · Yo que tú, no firmaría. · En tu lugar, hablaría con él.',
    'Jangan campur dengan por si (acaso), yang justru memakai indikatif: Llévate el paraguas por si llueve.'
  ],
  ex:[
    ['Si tuviera más tiempo, aprendería otro idioma.','Kalau saya punya lebih banyak waktu, saya akan belajar bahasa lain.',''],
    ['Si hubiéramos reservado antes, habríamos pagado la mitad.','Kalau kita memesan lebih awal, kita sudah bayar setengahnya saja.',''],
    ['Si hubiera aceptado aquel puesto, ahora viviría en Madrid.','Kalau dulu saya menerima jabatan itu, sekarang saya tinggal di Madrid.',''],
    ['De haberlo sabido, no habría venido.','Kalau saya tahu, saya tidak akan datang.',''],
    ['Yo que tú, no diría nada todavía.','Kalau saya jadi kamu, saya belum akan bilang apa-apa.','']
  ],
  traps:[
    ['Si habría estudiado, habría aprobado.','Si hubiera estudiado, habría aprobado.','Bagian si memakai hubiera (subjuntivo), bagian akibat memakai habría (condicional). Bunyinya mirip sehingga sangat sering tertukar — dan tertukarnya selalu ke arah ini.'],
    ['Si tenga dinero, viajaría.','Si tuviera dinero, viajaría.','Setelah si tidak pernah dipakai subjuntivo PRESENTE. Pemelajar yang baru menguasai tenga cenderung menempelkannya ke mana-mana.'],
    ['Si mañana lloverá, no saldré.','Si mañana llueve, no saldré.','Kondisi nyata masa depan tetap memakai presente indikatif setelah si; futuro hanya boleh di bagian akibat. "Kalau besok akan hujan" tidak bisa diterjemahkan kata per kata.'],
    ['Si sería posible, me gustaría cambiar la fecha.','Si fuera posible, me gustaría cambiar la fecha.','Condicional dilarang setelah si, termasuk dalam permintaan sopan.']
  ],
  drills:[
    { t:'mcq', q:'Pola pengandaian tak nyata di masa lalu (tipe 3) adalah',
      opts:['si + presente → futuro','si + imperfecto subj. → condicional','si + pluscuamperfecto subj. → condicional compuesto','si + condicional → condicional'], a:2,
      why:'Si hubiera salido antes, no habría perdido el tren.' },
    { t:'mcq', q:'Bentuk mana yang TIDAK boleh muncul langsung setelah si?',
      opts:['presente indikatif','imperfecto de subjuntivo','pluscuamperfecto de subjuntivo','condicional'], a:3,
      why:'Setelah si tidak pernah ada condicional maupun futuro; keduanya hanya untuk bagian akibat.' },
    { t:'mcq', q:'"Kalau dulu aku belajar kedokteran, sekarang aku dokter" =',
      opts:['Si hubiera estudiado medicina, ahora sería médico','Si estudiara medicina, ahora habría sido médico','Si estudio medicina, ahora soy médico','Si habría estudiado medicina, ahora sería médico'], a:0,
      why:'Sebabnya di masa lalu (hubiera estudiado), akibatnya di masa kini (sería) — inilah pengandaian campuran.' },
    { t:'mcq', q:'"De haberlo sabido, no habría venido" sepadan dengan',
      opts:['Si lo habría sabido, no habría venido','Si lo hubiera sabido, no habría venido','Si lo supiera, no vendría','Si lo sabré, no vendré'], a:1,
      why:'de + infinitif compuesto adalah bentuk ringkas pengandaian tipe 3.' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   4. Estilo indirecto
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p4',
  level:'B2',
  title:'El estilo indirecto',
  titleId:'Kalimat Tak Langsung',
  why:'Melaporkan ucapan orang dalam bahasa Indonesia nyaris tanpa biaya: "Dia bilang dia capek" memakai bentuk kata kerja yang sama dengan ucapan aslinya, dan kata "bahwa" boleh dibuang. Dalam bahasa Spanyol, que wajib ada dan hampir setiap kata kerja bergeser waktunya. Bagian Comprensión auditiva DELE penuh dengan pergeseran ini.',
  form:'Kata pengantar LAMPAU (dijo, comentó, preguntó) menggeser:\n  presente        → imperfecto        «Estoy cansado»  → Dijo que estaba cansado.\n  indefinido / perfecto → pluscuamperfecto  «Llegué ayer» → Dijo que había llegado el día anterior.\n  futuro          → condicional        «Vendré»         → Dijo que vendría.\n  imperativo      → imperfecto de subj. «¡Llámame!»      → Dijo que lo llamara.\n  presente de subj. → imperfecto de subj.\n  imperfecto, pluscuamperfecto, condicional → TETAP',
  notes:[
    'Kalau kata pengantarnya masih presente (dice que, comenta que), tidak ada pergeseran sama sekali: Dice que está cansado.',
    'Penunjuk waktu dan tempat ikut bergeser: hoy → aquel día, mañana → al día siguiente, ayer → el día anterior, aquí → allí, este → ese. Kata kerja venir/traer sering berubah jadi ir/llevar karena sudut pandangnya pindah.',
    'Pertanyaan ya/tidak dilaporkan dengan si: «¿Tienes tiempo?» → Me preguntó si tenía tiempo. Pertanyaan berkata tanya mempertahankan kata tanyanya: Me preguntó dónde vivía.',
    'Kata tanya TETAP BERAKSEN di dalam kalimat tak langsung walau tanda tanyanya hilang: No sé dónde vive. · Pregunta qué quieres.',
    'Kalau isi ucapannya masih berlaku sekarang, penutur asli sering tidak menggeser: Dijo que está enfermo (dan sampai sekarang masih sakit). Di ujian tertulis, pilih bentuk yang bergeser kecuali konteksnya jelas menuntut sebaliknya.'
  ],
  ex:[
    ['Dijo que estaba muy ocupado aquella semana.','Dia bilang dia sangat sibuk minggu itu.',''],
    ['Me pidió que le mandara el contrato firmado.','Dia minta saya mengirimkan kontrak yang sudah ditandatangani.',''],
    ['Me preguntó si había leído el informe.','Dia bertanya apakah saya sudah membaca laporannya.',''],
    ['Nos aseguró que al día siguiente ya lo habría resuelto.','Dia meyakinkan kami bahwa besoknya masalah itu sudah beres.',''],
    ['No recuerdo quién dijo eso.','Saya tidak ingat siapa yang mengatakan itu.','']
  ],
  traps:[
    ['Dijo estaba cansado.','Dijo que estaba cansado.','Konjungsi que WAJIB dalam bahasa Spanyol. Bahasa Indonesia boleh menghilangkan "bahwa", dan kebiasaan itu terbawa.'],
    ['Me dijo que ven mañana.','Me dijo que viniera al día siguiente.','Perintah yang dilaporkan berubah menjadi subjuntivo imperfecto, dan mañana bergeser jadi al día siguiente.'],
    ['No sé donde vive.','No sé dónde vive.','Kata tanya di dalam pertanyaan tak langsung tetap beraksen. Tanpa aksen, donde berarti "tempat di mana", bukan pertanyaan.'],
    ['Me preguntó que si tenía tiempo.','Me preguntó si tenía tiempo.','Pertanyaan ya/tidak cukup memakai si; menambahkan que di depannya adalah ragam lisan yang tidak diterima dalam tulisan ujian.']
  ],
  drills:[
    { t:'mcq', q:'Dengan kata pengantar lampau, presente indikatif bergeser menjadi',
      opts:['futuro','condicional','pluscuamperfecto','imperfecto'], a:3,
      why:'«Estoy cansado» → Dijo que estaba cansado.' },
    { t:'mcq', q:'«Vendré mañana» dilaporkan menjadi',
      opts:['Dijo que vendrá mañana','Dijo que vendría al día siguiente','Dijo que viene mañana','Dijo que venga mañana'], a:1,
      why:'futuro → condicional, dan mañana → al día siguiente.' },
    { t:'mcq', q:'Perintah «¡Llámame!» dilaporkan menjadi',
      opts:['Me dijo que lo llamara','Me dijo que llámame','Me dijo que lo llamo','Me dijo que llamarme'], a:0,
      why:'Imperatif berubah jadi subjuntivo imperfecto setelah kata pengantar lampau.' },
    { t:'mcq', q:'Pertanyaan ya/tidak dilaporkan dengan kata',
      opts:['que','qué','si','sí'], a:2,
      why:'si tanpa aksen. sí beraksen berarti "ya", dan qué beraksen adalah kata tanya "apa".' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   5. Perífrasis verbales
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p5',
  level:'B2',
  title:'Las perífrasis verbales',
  titleId:'Gugus Kata Kerja (baru saja, masih, sudah sekian lama)',
  why:'Kata-kata yang paling sering dipakai orang Indonesia — sudah, baru saja, masih, lagi, keburu, terlanjur — semuanya kata keterangan yang ditempel di depan kata kerja. Bahasa Spanyol tidak punya padanan satu kata untuk kebanyakan darinya; yang dipakai adalah gugus kata kerja bantu. Tanpa menguasai gugus ini, kalimat terdengar seperti terjemahan mesin.',
  form:'acabar de + infinitif   baru saja      Acabo de llegar.\nvolver a + infinitif    lagi / mengulang  Volvió a llamar.\nsoler + infinitif       biasanya       Suelo levantarme temprano.\nponerse a + infinitif   mulai mendadak Se puso a llover.\ndejar de + infinitif    berhenti       Dejé de fumar.\nestar a punto de + inf. hampir         Está a punto de salir.\nseguir + GERUNDIO       masih          Sigue lloviendo.\nllevar + waktu + GERUNDIO  sudah sekian lama  Llevo tres años estudiando español.\nandar + GERUNDIO        sibuk-sibuk    Anda buscando piso.',
  notes:[
    'Perhatikan preposisinya, karena itulah yang paling sering hilang: acabar DE, volver A, ponerse A, dejar DE, estar A PUNTO DE. Sementara soler, seguir, dan llevar tidak memakai preposisi sama sekali.',
    'seguir dan llevar menuntut GERUNDIO (-ando / -iendo), tidak pernah infinitif. Sigue lloviendo, bukan sigue a llover.',
    'Untuk lama waktu yang masih berjalan, bahasa Spanyol punya tiga jalan yang sama artinya: Llevo tres años aquí. · Estoy aquí desde hace tres años. · Hace tres años que estoy aquí. Yang tidak ada: "desde tres años".',
    'deber + infinitif berarti kewajiban (Debes avisarle), sedangkan deber DE + infinitif berarti dugaan (Debe de estar durmiendo). Satu preposisi mengubah makna sepenuhnya.',
    'llevar + PARTISIPIO menghitung hasil yang sudah terkumpul, dan partisipionya menyesuaikan benda: Llevo leídas cien páginas.'
  ],
  ex:[
    ['Acabo de hablar con el director.','Saya baru saja bicara dengan direkturnya.',''],
    ['Llevo tres años estudiando español.','Saya sudah tiga tahun belajar bahasa Spanyol.',''],
    ['Sigue lloviendo desde ayer.','Hujannya masih turun sejak kemarin.',''],
    ['Suelo desayunar sobre las ocho.','Saya biasanya sarapan sekitar jam delapan.',''],
    ['Debe de estar en una reunión.','Dia pasti sedang rapat. (dugaan)','']
  ],
  traps:[
    ['Estudio español desde tres años.','Llevo tres años estudiando español.','desde diikuti TITIK waktu (desde 2020, desde marzo), bukan LAMA waktu. Untuk lama waktu pakai llevar + gerundio atau desde hace.'],
    ['Sigue a llover.','Sigue lloviendo.','seguir menuntut gerundio. Kesalahan ini muncul karena "masih hujan" diterjemahkan lurus jadi "masih + kata kerja dasar".'],
    ['Acabo llegar de Yakarta.','Acabo de llegar de Yakarta.','Perifrasis acabar de wajib memakai de. Tanpa de, acabar berarti "menyelesaikan".'],
    ['Debe estar durmiendo, no contesta.','Debe de estar durmiendo, no contesta.','Untuk DUGAAN dipakai deber de; deber tanpa de menyatakan kewajiban.']
  ],
  drills:[
    { t:'mcq', q:'"Saya baru saja sampai" =',
      opts:['Acabo llegar','Acabo de llegar','Acabo a llegar','Acabo llegando'], a:1,
      why:'acabar de + infinitif. Preposisi de tidak boleh hilang.' },
    { t:'mcq', q:'"Hujannya masih turun" =',
      opts:['Sigue lloviendo','Sigue a llover','Sigue llover','Sigue llovido'], a:0,
      why:'seguir selalu diikuti gerundio.' },
    { t:'mcq', q:'"Saya sudah tiga tahun belajar bahasa Spanyol" =',
      opts:['Estudio español desde tres años','Estoy tres años estudiando español','Soy tres años estudiando español','Llevo tres años estudiando español'], a:3,
      why:'llevar + lama waktu + gerundio. Alternatifnya: Estudio español desde hace tres años.' },
    { t:'mcq', q:'Gugus untuk kebiasaan ("saya biasanya bangun pagi") adalah',
      opts:['ponerse a','dejar de','soler','volver a'], a:2,
      why:'soler + infinitif: Suelo levantarme temprano. soler hanya hidup di presente dan imperfecto.' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   6. Ser / estar tingkat lanjut
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p6',
  level:'C1',
  title:'Ser y estar: usos avanzados',
  titleId:'Ser dan Estar Tingkat Lanjut',
  why:'Di tingkat A1 penutur Indonesia menghafal satu aturan penyelamat: "lokasi selalu estar". Di tingkat C1 aturan itu justru menjebak, karena lokasi ACARA memakai ser. Ditambah lagi, bahasa Indonesia sama sekali tidak memakai kata kerja penghubung ("Rumah itu besar"), sehingga tidak ada rasa bawaan untuk memilih di antara dua kata yang sama-sama berarti "adalah".',
  form:'ACARA vs BENDA\n  La reunión ES en la sala 3.   (rapat = acara)\n  La sala ESTÁ en el primer piso. (ruangan = benda)\n\nPARTISIPIO\n  ser + partisipio  = peristiwa: La puerta fue abierta por el conserje.\n  estar + partisipio = hasil/keadaan: La puerta estaba abierta.\n\nPROFESI\n  ser + profesi   = identitas tetap: Es arquitecta.\n  estar de + kerja = pekerjaan sementara: Está de camarero este verano.\n\nHARGA & SUHU\n  Es caro. (penilaian tetap)   ¿A cuánto está el kilo? (harga naik-turun)',
  notes:[
    'Kata sifat yang berubah makna adalah inti soal DELE C1: listo (pintar / siap), aburrido (membosankan / bosan), rico (kaya / enak), verde (hijau / mentah), malo (jahat / sakit), vivo (cerdik / hidup), orgulloso (sombong / bangga), atento (perhatian / sedang menyimak), molesto (menjengkelkan / terganggu), delicado (halus / dalam kondisi rawan).',
    'Rumus cepat untuk lokasi: kalau subjeknya bisa "diselenggarakan", pakai ser. Konser, rapat, pesta, ujian, pertandingan — semuanya ser.',
    'Bentuk pasif dengan ser menonjolkan PERBUATANNYA; estar + partisipio menonjolkan HASILNYA. La casa fue construida en 1920 (peristiwa) vs La casa ya está construida (hasil).',
    'Ungkapan tetap yang tidak boleh ditukar: es evidente que, es necesario que, es una lástima que — semuanya ser. Sedangkan está claro que dan está visto que memakai estar dan diikuti indikatif.',
    'estar por + infinitif berarti belum dikerjakan (La carta está por escribir); estar para + infinitif berarti siap/hampir (Está para salir).'
  ],
  ex:[
    ['El concierto es en el Teatro Real.','Konsernya di Teatro Real.',''],
    ['El Teatro Real está en el centro.','Teatro Real terletak di pusat kota.',''],
    ['Este verano está de camarero en Ibiza.','Musim panas ini dia kerja sementara jadi pelayan di Ibiza.',''],
    ['El informe todavía está por revisar.','Laporannya masih belum diperiksa.',''],
    ['No es que sea aburrido, es que está aburrido.','Bukan dia orangnya membosankan, dia memang sedang bosan.','']
  ],
  traps:[
    ['La reunión está en la sala 3.','La reunión es en la sala 3.','Lokasi ACARA memakai ser. Aturan "lokasi selalu estar" hanya berlaku untuk benda dan orang, dan justru inilah aturan yang paling erat dipegang penutur Indonesia.'],
    ['La puerta fue abierta toda la noche.','La puerta estuvo abierta toda la noche.','ser + partisipio menyatakan peristiwa dibukanya pintu oleh seseorang; keadaan pintu yang terbuka semalaman memakai estar.'],
    ['Este mes soy de camarero.','Este mes estoy de camarero.','Pekerjaan sementara memakai estar de. Dengan ser, artinya menjadi identitas profesi tetap.'],
    ['La sopa es fría, no puedo comerla.','La sopa está fría, no puedo comerla.','Suhu makanan adalah keadaan. Es fría hanya benar untuk hidangan yang memang disajikan dingin, seperti gazpacho.']
  ],
  drills:[
    { t:'mcq', q:'"Konsernya di Teatro Real" =',
      opts:['El concierto está en el Teatro Real','El concierto es en el Teatro Real','El concierto hay en el Teatro Real','El concierto tiene en el Teatro Real'], a:1,
      why:'Konser adalah acara, dan lokasi acara memakai ser.' },
    { t:'mcq', q:'"Supnya dingin (sudah tidak panas)" =',
      opts:['La sopa está fría','La sopa es fría','La sopa tiene frío','La sopa hace frío'], a:0,
      why:'Suhu adalah keadaan sesaat → estar.' },
    { t:'mcq', q:'"La casa fue construida en 1920" menekankan',
      opts:['keadaan rumah sekarang','lokasi rumah','peristiwa pembangunannya','pemilik rumah'], a:2,
      why:'ser + partisipio adalah pasif peristiwa. Untuk hasilnya dipakai La casa está construida.' },
    { t:'mcq', q:'"Bekerja sementara sebagai pelayan" =',
      opts:['ser camarero','ser de camarero','tener camarero','estar de camarero'], a:3,
      why:'estar de + pekerjaan menandai sifat sementaranya.' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   7. Pasiva refleja & se impersonal
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p7',
  level:'C1',
  title:'La pasiva refleja y el se impersonal',
  titleId:'Kalimat Pasif dengan se',
  why:'Bahasa Indonesia sangat gemar bentuk pasif — di-, ter-, ke-an muncul di hampir setiap paragraf berita. Penutur Indonesia menerjemahkannya lurus jadi ser + partisipio, dan hasilnya kaku serta jarang dipakai orang Spanyol. Bahasa Spanyol sehari-hari memilih se + kata kerja.',
  form:'PASIVA REFLEJA (pelakunya tidak disebut, subjeknya BENDA)\n  se + kata kerja orang ketiga + benda — kata kerjanya menyesuaikan JUMLAH benda\n  Se vende un piso.  ·  Se venden pisos.\n  Aquí se habla español.  ·  Se publicaron los resultados.\n\nSE IMPERSONAL (tidak ada subjek sama sekali, kata kerja selalu TUNGGAL)\n  Se vive bien en este barrio.\n  Se busca a los responsables.  (dengan a + orang, tetap tunggal)\n\nSE DE INVOLUNTARIEDAD (kejadian tak sengaja)\n  se + me/te/le/nos/os/les + kata kerja\n  Se me rompió el vaso.  ·  Se nos olvidó la cita.',
  notes:[
    'Bandingkan dengan bahasa Indonesia: "Gelasnya pecah" juga menghilangkan pelakunya, persis seperti Se me rompió el vaso. Bedanya, bahasa Spanyol tetap menyebut siapa yang terkena lewat me/te/le.',
    'Kunci pasiva refleja: kata kerjanya mengikuti benda, bukan pembicara. Se necesitan camareros (jamak), Se necesita un camarero (tunggal). Papan "Se necesita camareros" memang beredar di jalan, tetapi dinilai salah di ujian.',
    'Kalau yang dikenai perbuatan adalah ORANG dan didahului a, kalimatnya jadi impersonal dan kata kerjanya tetap tunggal: Se detuvo a los sospechosos, bukan Se detuvieron.',
    'ser + partisipio tidak salah, hanya berbeda ragam: lazim di berita dan teks resmi (El acuerdo fue firmado ayer), janggal dalam percakapan.',
    'Urutan klitik tidak pernah berubah: se selalu di depan me/te/le. Se me olvidó, tidak pernah me se olvidó.'
  ],
  ex:[
    ['Aquí se habla español y catalán.','Di sini orang berbicara bahasa Spanyol dan Katalan.',''],
    ['Se venden pisos en esta zona.','Apartemen dijual di daerah ini.',''],
    ['Se vive muy bien en este barrio.','Hidup di lingkungan ini enak sekali.',''],
    ['Se me rompió el vaso sin querer.','Gelasnya pecah, saya tidak sengaja.',''],
    ['Se nos olvidó avisar al cliente.','Kami lupa memberi tahu kliennya.','']
  ],
  traps:[
    ['Aquí es hablado español.','Aquí se habla español.','Terjemahan lurus dari "di sini bahasa Spanyol dibicarakan". Bahasa Spanyol sehari-hari memakai pasiva refleja, bukan ser + partisipio.'],
    ['Se vende pisos.','Se venden pisos.','Dalam pasiva refleja kata kerja menyesuaikan jumlah benda: pisos jamak, maka venden.'],
    ['Me se olvidó la cita.','Se me olvidó la cita.','Urutan klitik selalu se + me. Susunan me se tidak ada dalam bahasa Spanyol baku.'],
    ['Se detuvieron a los sospechosos.','Se detuvo a los sospechosos.','Dengan a + orang, kalimatnya impersonal dan kata kerjanya tetap tunggal.']
  ],
  drills:[
    { t:'mcq', q:'"Rumah-rumah dijual" =',
      opts:['Se vende casas','Se venden casas','Es vendida casas','Son vendido casas'], a:1,
      why:'Pasiva refleja menyesuaikan jumlah: casas jamak → venden.' },
    { t:'mcq', q:'"Di sini orang hidup enak" (tanpa subjek) =',
      opts:['Se vive bien aquí','Se viven bien aquí','Es vivido bien aquí','Están viviendo bien aquí'], a:0,
      why:'se impersonal selalu memakai kata kerja tunggal.' },
    { t:'mcq', q:'"Gelasnya pecah, saya tidak sengaja" =',
      opts:['Yo rompí el vaso','Me se rompió el vaso','El vaso fue roto por mí','Se me rompió el vaso'], a:3,
      why:'se de involuntariedad: se + me + kata kerja. Urutannya tidak pernah me se.' },
    { t:'mcq', q:'Dalam percakapan Spanyol sehari-hari, bentuk pasif yang paling lazim adalah',
      opts:['ser + partisipio','estar + partisipio','pasiva refleja dengan se','gerundio'], a:2,
      why:'ser + partisipio memang benar, tetapi ragamnya jurnalistik dan resmi.' }
  ]
},

/* ─────────────────────────────────────────────────────────────
   8. Conectores del discurso
   ───────────────────────────────────────────────────────────── */
{
  id:'es-p8',
  level:'C1',
  title:'Los conectores del discurso',
  titleId:'Konektor Wacana untuk Esai dan Debat',
  why:'Bahasa Indonesia lazim memasangkan dua penghubung sekaligus — "meskipun … tetapi …", "karena … maka …" — dan pasangan itu terbawa utuh ke dalam esai Spanyol, di mana ia langsung dihitung salah. Selain itu beberapa konektor Spanyol menuntut subjuntivo, sesuatu yang tidak punya penanda apa pun di bahasa Indonesia.',
  form:'MENAMBAH   además · asimismo · es más · por otra parte · no solo… sino también\nSEBAB      ya que · puesto que · dado que · debido a (que) · a causa de\nAKIBAT     por (lo) tanto · por consiguiente · en consecuencia · de ahí que (+SUBJ)\nBERTENTANGAN  sin embargo · no obstante · en cambio · por el contrario · si bien\nSYARAT     siempre que (+SUBJ) · a menos que (+SUBJ) · con tal de que (+SUBJ)\nMENYUSUN   en primer lugar · a continuación · por último · en definitiva\nMENJELASKAN  es decir · o sea · dicho de otro modo · en concreto',
  notes:[
    'Satu hubungan cukup satu penghubung. Aunque llueve, salgo — tidak boleh ditambah pero. Begitu pula Como llueve, no salgo, tanpa por eso di belakangnya.',
    'aunque + INDIKATIF mengakui fakta (Aunque llueve, salgo = memang sedang hujan). aunque + SUBJUNTIVO menyerahkan kemungkinan (Aunque llueva, saldré = kalaupun nanti hujan).',
    'de ahí que dan a menos que SELALU menuntut subjuntivo. Sebaliknya ya que, puesto que, dado que, dan si bien selalu indikatif.',
    'debido a diikuti kata benda (debido al mal tiempo); debido a QUE diikuti klausa berkata kerja (debido a que hacía mal tiempo). Aturan yang sama berlaku untuk a pesar de dan a pesar de que.',
    'sin embargo dan no obstante membuka kalimat baru atau berdiri setelah titik koma, dan selalu diapit koma. pero justru tidak boleh membuka kalimat dalam ragam tulis formal.'
  ],
  ex:[
    ['Aunque llueva, la reunión se celebrará igualmente.','Kalaupun hujan, rapatnya tetap diadakan.',''],
    ['El precio subió; no obstante, la demanda no bajó.','Harganya naik; meski begitu, permintaannya tidak turun.',''],
    ['Debido al mal tiempo, se canceló el vuelo.','Karena cuaca buruk, penerbangannya dibatalkan.',''],
    ['No presentó pruebas; de ahí que nadie lo creyera.','Dia tidak menunjukkan bukti; karena itulah tidak ada yang percaya.',''],
    ['En definitiva, se trata de una cuestión de prioridades.','Pada akhirnya, ini soal prioritas.','']
  ],
  traps:[
    ['Aunque llueve, pero salgo.','Aunque llueve, salgo.','Bahasa Indonesia memasangkan "meskipun … tetapi …"; bahasa Spanyol hanya menerima satu penghubung untuk satu hubungan makna.'],
    ['Aunque mañana llueve, saldré.','Aunque mañana llueva, saldré.','Peristiwa yang belum tentu terjadi menuntut subjuntivo setelah aunque.'],
    ['Debido a que el mal tiempo, se canceló el vuelo.','Debido al mal tiempo, se canceló el vuelo.','debido a diikuti kata benda. Bentuk debido a que hanya dipakai bila disusul klausa berkata kerja.'],
    ['De ahí que es importante revisarlo.','De ahí que sea importante revisarlo.','de ahí que selalu menuntut subjuntivo, tanpa kecuali.']
  ],
  drills:[
    { t:'mcq', q:'"Aunque mañana llueva, saldré" memakai subjuntivo karena',
      opts:['aunque selalu menuntut subjuntivo','hujannya belum tentu terjadi','ada kata mañana','kalimatnya panjang'], a:1,
      why:'aunque + indikatif mengakui fakta; aunque + subjuntivo menyerahkan kemungkinan yang belum pasti.' },
    { t:'mcq', q:'Konektor yang SELALU diikuti subjuntivo adalah',
      opts:['de ahí que','sin embargo','por lo tanto','ya que'], a:0,
      why:'de ahí que sea… Tiga lainnya diikuti indikatif.' },
    { t:'mcq', q:'"Meskipun hujan, tetapi saya tetap pergi" diterjemahkan menjadi',
      opts:['Aunque llueve, pero salgo','Aunque llueve, sin embargo salgo','Aunque llueve, salgo','Pero aunque llueve, salgo'], a:2,
      why:'Satu hubungan makna cukup satu penghubung; pasangan aunque + pero tidak ada dalam bahasa Spanyol.' },
    { t:'mcq', q:'"Karena cuaca buruk" (diikuti kata benda) =',
      opts:['Debido a que el mal tiempo','Debido que el mal tiempo','Porque el mal tiempo','Debido al mal tiempo'], a:3,
      why:'debido a + kata benda; a + el melebur jadi al. porque hanya boleh diikuti klausa berkata kerja.' }
  ]
}

],

vocab: [

{
  id:'es-pv-trab',
  title:'Dunia Kerja & Profesional',
  level:'B2',
  note:'Bagian menulis DELE B2 hampir selalu meminta surel kantor atau surat keluhan; kosakata inilah yang membedakan jawaban yang lulus dari yang terdengar seperti murid SMA.',
  words:[
    ['el puesto de trabajo','el puesto de trabakho','posisi / jabatan'],
    ['la plantilla','la plantiya','jumlah karyawan tetap'],
    ['el currículum','el kurikulum','daftar riwayat hidup'],
    ['la entrevista','la entrevista','wawancara'],
    ['el contrato indefinido','el kontrato indefinido','kontrak tetap'],
    ['la nómina','la nomina','slip gaji'],
    ['el convenio colectivo','el konvenio kolektivo','perjanjian kerja bersama'],
    ['la jornada laboral','la khornada laboral','jam kerja harian'],
    ['el horario flexible','el orario fleksible','jam kerja luwes'],
    ['el teletrabajo','el teletrabakho','kerja jarak jauh'],
    ['la baja laboral','la bakha laboral','cuti sakit'],
    ['el ascenso','el asenso','kenaikan jabatan'],
    ['el despido','el despido','pemutusan hubungan kerja'],
    ['la indemnización','la indemnisasion','pesangon / ganti rugi'],
    ['la formación','la formasion','pelatihan'],
    ['el plazo','el plaso','tenggat waktu'],
    ['el presupuesto','el presupuesto','anggaran'],
    ['la factura','la faktura','faktur / tagihan'],
    ['el proveedor','el proveedor','pemasok'],
    ['el cliente','el kliente','klien'],
    ['la sucursal','la sukursal','kantor cabang'],
    ['la sede','la sede','kantor pusat'],
    ['el sindicato','el sindikato','serikat pekerja'],
    ['el desempleo','el desempleo','pengangguran'],
    ['la jubilación','la khubilasion','masa pensiun'],
    ['el autónomo','el autonomo','pekerja lepas'],
    ['el rendimiento','el rendimiento','kinerja / hasil kerja'],
    ['la competencia','la kompetensia','persaingan / kompetensi'],
    ['contratar','kontratar','merekrut'],
    ['solicitar','solisitar','mengajukan / melamar'],
    ['negociar','negosiar','bernegosiasi'],
    ['cumplir un plazo','kumplir un plaso','memenuhi tenggat']
  ]
},

{
  id:'es-pv-op',
  title:'Opini, Media & Debat',
  level:'B2',
  note:'Teks bacaan DELE B2–C1 sebagian besar diambil dari surat kabar dan kolom opini; tanpa kosakata ini, isi bacaannya kabur walau tata bahasanya sudah dikuasai.',
  words:[
    ['el titular','el titular','judul berita'],
    ['la portada','la portada','halaman muka'],
    ['el reportaje','el reportakhe','laporan mendalam'],
    ['la rueda de prensa','la rueda de prensa','konferensi pers'],
    ['el redactor','el redaktor','redaktur'],
    ['la fuente','la fuente','sumber'],
    ['el bulo','el bulo','kabar bohong / hoaks'],
    ['la desinformación','la desinformasion','disinformasi'],
    ['la veracidad','la verasidad','keakuratan / kebenaran isi'],
    ['la encuesta','la enkuesta','jajak pendapat / survei'],
    ['la cifra','la sifra','angka / data'],
    ['el editorial','el editorial','tajuk rencana'],
    ['la columna de opinión','la kolumna de opinion','kolom opini'],
    ['el debate','el debate','debat'],
    ['el argumento','el argumento','argumen'],
    ['la postura','la postura','sikap / pendirian'],
    ['el punto de vista','el punto de vista','sudut pandang'],
    ['el enfoque','el enfoke','pendekatan / cara pandang'],
    ['las pruebas','las pruebas','bukti'],
    ['el sesgo','el sesgo','bias / kecondongan'],
    ['la polémica','la polemika','kontroversi'],
    ['el rechazo','el rechaso','penolakan'],
    ['el apoyo','el apoyo','dukungan'],
    ['la crítica','la kritika','kritik'],
    ['el prejuicio','el prekhuisio','prasangka'],
    ['la libertad de expresión','la libertad de ekspresion','kebebasan berpendapat'],
    ['los medios de comunicación','los medios de komunikasion','media massa'],
    ['la red social','la red sosial','media sosial'],
    ['difundir','difundir','menyebarkan'],
    ['denunciar','denunsiar','mengecam / melaporkan'],
    ['cuestionar','kuestionar','mempertanyakan'],
    ['matizar','matisar','meluruskan dengan nuansa'],
    ['sostener','sostener','berpendirian / mempertahankan pendapat']
  ]
},

{
  id:'es-pv-akad',
  title:'Kosakata Akademik',
  level:'C1',
  note:'Kosakata untuk mengikuti kuliah, menulis makalah, dan menghadapi bagian tertulis DELE C1 — ranahnya sepenuhnya berbeda dari bahasa Spanyol percakapan.',
  words:[
    ['el ámbito','el ambito','ranah / bidang kajian'],
    ['el planteamiento','el planteamiento','perumusan masalah'],
    ['la hipótesis','la ipotesis','hipotesis'],
    ['el marco teórico','el marko teoriko','kerangka teori'],
    ['la metodología','la metodolokhia','metodologi'],
    ['la muestra','la muestra','sampel'],
    ['la variable','la variable','variabel'],
    ['los datos','los datos','data'],
    ['el hallazgo','el ayasgo','temuan'],
    ['la conclusión','la konklusion','simpulan'],
    ['el resumen','el resumen','ringkasan / abstrak'],
    ['la reseña','la resenya','resensi / tinjauan pustaka'],
    ['la fuente primaria','la fuente primaria','sumber primer'],
    ['la cita','la sita','kutipan'],
    ['la bibliografía','la bibliografia','daftar pustaka'],
    ['el anexo','el anekso','lampiran'],
    ['la tesis','la tesis','tesis / disertasi'],
    ['el ensayo','el ensayo','esai'],
    ['la ponencia','la ponensia','makalah yang dipresentasikan'],
    ['el congreso','el kongreso','konferensi ilmiah'],
    ['la asignatura','la asignatura','mata kuliah'],
    ['la beca','la beka','beasiswa'],
    ['la matrícula','la matrikula','pendaftaran kuliah'],
    ['la licenciatura','la lisensiatura','jenjang sarjana'],
    ['el máster','el master','jenjang magister'],
    ['el doctorado','el doktorado','program doktor'],
    ['la aportación','la aportasion','sumbangan pemikiran'],
    ['plantear','plantear','mengemukakan / merumuskan'],
    ['analizar','analisar','menganalisis'],
    ['demostrar','demostrar','membuktikan'],
    ['destacar','destakar','menonjolkan / menegaskan'],
    ['profundizar','profundisar','mendalami'],
    ['llevar a cabo','yevar a kabo','melaksanakan']
  ]
}

],

phrases: [

{ g:'Rapat & Surel Kerja', items:[
  ['Le escribo en relación con su solicitud','le eskribo en relasion kon su solisitud','Saya menulis sehubungan dengan permohonan Anda'],
  ['Adjunto le envío el informe','adkhunto le envio el informe','Terlampir saya kirimkan laporannya'],
  ['¿Le parece bien el jueves por la mañana?','le parese bien el khueves por la manyana','Apakah Kamis pagi cocok bagi Anda?'],
  ['¿Podríamos aplazar la reunión?','podriamos aplasar la reunion','Bisakah rapatnya kita tunda?'],
  ['Disculpe la demora en responder','diskulpe la demora en responder','Maaf atas keterlambatan menjawab'],
  ['Tomo nota de sus comentarios','tomo nota de sus komentarios','Masukan Anda saya catat'],
  ['Se lo confirmo mañana sin falta','se lo konfirmo manyana sin falta','Besok pasti saya konfirmasikan'],
  ['Le agradezco de antemano su ayuda','le agradesko de antemano su ayuda','Terima kasih sebelumnya atas bantuan Anda'],
  ['Quedo a la espera de su respuesta','kedo a la espera de su respuesta','Saya menunggu jawaban Anda'],
  ['Un cordial saludo','un kordial saludo','Salam hormat (penutup surel)']
]},

{ g:'Berargumen & Berdebat', items:[
  ['Desde mi punto de vista…','desde mi punto de vista','Dari sudut pandang saya…'],
  ['A mi juicio, el problema es otro','a mi khuisio el problema es otro','Menurut hemat saya, masalahnya lain'],
  ['Estoy de acuerdo hasta cierto punto','estoy de akuerdo asta sierto punto','Saya setuju sampai batas tertentu'],
  ['No comparto esa opinión','no komparto esa opinion','Saya tidak sependapat'],
  ['Cabe señalar que…','kabe senyalar ke','Perlu dicatat bahwa…'],
  ['Conviene matizar que…','konviene matisar ke','Perlu diperjelas bahwa…'],
  ['Por un lado… por otro lado…','por un lado por otro lado','Di satu sisi… di sisi lain…'],
  ['Habría que tener en cuenta que…','abria ke tener en kuenta ke','Perlu dipertimbangkan bahwa…'],
  ['¿A qué te refieres exactamente?','a ke te refieres eksaktamente','Maksudmu persisnya apa?'],
  ['Eso depende del contexto','eso depende del konteksto','Itu tergantung konteksnya'],
  ['En resumidas cuentas…','en resumidas kuentas','Singkat kata…'],
  ['Todo apunta a que…','todo apunta a ke','Semua menunjukkan bahwa…']
]}

],

levels: [
  { id:'B2', units:[
      { id:'es-b2-p1', title:'Past Subjunctive', titleId:'Subjuntivo Lampau',
        goal:'Bentuk -ra/-se yang membuka seluruh pengandaian tak nyata.',
        grammar:["es-p1","es-p3"], vocab:["es-pv-trab"],
        phrases:["Rapat & Surel Kerja"], skills:["listen","speak"],
        cando:["Membentuk subjuntivo imperfecto","Menyusun pengandaian tak nyata sekarang dan lampau"] },
      { id:'es-b2-p2', title:'Conditional & Reported', titleId:'Kondisional & Kalimat Tak Langsung',
        goal:'Menyatakan seharusnya sudah, dan meneruskan ucapan orang lain.',
        grammar:["es-p2","es-p4"], vocab:["es-pv-op"],
        phrases:["Berargumen & Berdebat"], skills:["listen","speak"],
        cando:["Memakai condicional compuesto untuk penyesalan","Menggeser waktu di kalimat tak langsung"] },
      { id:'es-b2-p3', title:'Verb Periphrases', titleId:'Gugus Kata Kerja',
        goal:'acabar de, seguir + gerundio, llevar + tiempo — yang tak terterjemahkan kata per kata.',
        grammar:["es-p5"], vocab:["es-pv-trab"],
        phrases:["Rapat & Surel Kerja"], skills:["listen","speak"],
        cando:["Memakai acabar de untuk kejadian baru saja","Menyatakan lama berlangsung dengan llevar"] }
  ]},
  { id:'C1', units:[
      { id:'es-c1-p1', title:'Ser, Estar & Passive', titleId:'Ser, Estar & Pasif',
        goal:'Perbedaan halus yang tetap menjebak sampai tingkat mahir, plus pasif dengan se.',
        grammar:["es-p6","es-p7"], vocab:["es-pv-akad"],
        phrases:["Berargumen & Berdebat"], skills:["listen","speak"],
        cando:["Memilih ser/estar pada kata sifat yang berubah makna","Memakai pasif dengan se"] },
      { id:'es-c1-p2', title:'Discourse Connectors', titleId:'Konektor Wacana',
        goal:'Penanda alur untuk esai dan debat tingkat C1.',
        grammar:["es-p8"], vocab:["es-pv-akad"],
        phrases:["Berargumen & Berdebat"], skills:["listen","speak"],
        cando:["Menyusun esai berargumen dengan konektor baku","Membantah pendapat secara santun"] }
  ]}
]

};
