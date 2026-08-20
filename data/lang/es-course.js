/* KURSUS SPANYOL — enam tingkat DELE A1–C2. */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const G = (id, level, title, titleId, why, form, notes, ex, traps, drills) =>
  ({ id, level, title, titleId, why, form, notes, ex, traps, drills });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

const VOCAB = [
V('es-v-num','Angka, Waktu & Hari','A1',
  'Angka Spanyol paling teratur di Eropa — hanya 16–29 yang ditulis menyatu.',
  [['uno','uno','satu'],['dos','dos','dua'],['tres','tres','tiga'],['cuatro','kuatro','empat'],
   ['cinco','sinko','lima'],['seis','seis','enam'],['siete','siete','tujuh'],['ocho','ocho','delapan'],
   ['nueve','nueve','sembilan'],['diez','dies','sepuluh'],['veinte','veinte','dua puluh'],
   ['cien','sien','seratus'],['mil','mil','seribu'],['la hora','la ora','jam'],
   ['el minuto','el minuto','menit'],['el día','el dia','hari'],['la semana','la semana','minggu'],
   ['el mes','el mes','bulan'],['el año','el anyo','tahun'],['lunes','lunes','Senin'],
   ['martes','martes','Selasa'],['miércoles','mierkoles','Rabu'],['jueves','khueves','Kamis'],
   ['viernes','viernes','Jumat'],['sábado','sabado','Sabtu'],['domingo','domingo','Minggu'],
   ['la mañana','la manyana','pagi'],['la tarde','la tarde','sore'],['la noche','la noche','malam'],
   ['ahora','aora','sekarang']]),

V('es-v-fam','Keluarga & Orang','A1',
  'Kata benda Spanyol umumnya bisa ditebak gendernya dari huruf terakhir: -o maskulin, -a feminin.',
  [['la familia','la familia','keluarga'],['el padre','el padre','ayah'],['la madre','la madre','ibu'],
   ['el hermano','el ermano','saudara laki-laki'],['la hermana','la ermana','saudara perempuan'],
   ['el hijo','el ikho','anak laki-laki'],['la hija','la ikha','anak perempuan'],
   ['el abuelo','el abuelo','kakek'],['la abuela','la abuela','nenek'],
   ['el esposo','el esposo','suami'],['la esposa','la esposa','istri'],['el niño','el ninyo','anak'],
   ['el hombre','el ombre','laki-laki'],['la mujer','la mukher','perempuan'],
   ['el amigo','el amigo','teman'],['el profesor','el profesor','guru'],
   ['el estudiante','el estudiante','pelajar'],['el médico','el mediko','dokter'],
   ['el compañero','el kompanyero','rekan'],['el vecino','el vesino','tetangga'],
   ['el nombre','el nombre','nama'],['la edad','la edad','umur'],['el país','el pais','negara'],
   ['España','espanya','Spanyol'],['Indonesia','indonesia','Indonesia'],['la gente','la khente','orang-orang'],
   ['el señor','el senyor','tuan'],['la señora','la senyora','nyonya'],
   ['los padres','los padres','orang tua'],['el trabajo','el trabakho','pekerjaan']]),

V('es-v-food','Makanan & Minuman','A1',
  'Kosakata pertama yang terpakai di bar dan restoran Spanyol.',
  [['la comida','la komida','makanan'],['el pan','el pan','roti'],['la carne','la karne','daging'],
   ['el pescado','el peskado','ikan'],['el pollo','el poyo','ayam'],['el huevo','el uevo','telur'],
   ['la leche','la leche','susu'],['el agua','el agua','air'],['el café','el kafe','kopi'],
   ['el té','el te','teh'],['el zumo','el sumo','jus'],['la cerveza','la serbesa','bir'],
   ['la sopa','la sopa','sup'],['la ensalada','la ensalada','salad'],['el queso','el keso','keju'],
   ['la verdura','la verdura','sayuran'],['la fruta','la fruta','buah'],['la manzana','la mansana','apel'],
   ['el azúcar','el asukar','gula'],['la sal','la sal','garam'],['rico','riko','enak'],
   ['dulce','dulse','manis'],['salado','salado','asin'],['picante','pikante','pedas'],
   ['tengo hambre','tengo ambre','saya lapar'],['tengo sed','tengo sed','saya haus'],
   ['el desayuno','el desayuno','sarapan'],['el almuerzo','el almuerso','makan siang'],
   ['la cena','la sena','makan malam'],['el restaurante','el restaurante','restoran']]),

V('es-v-place','Tempat & Arah','A2',
  'Bertanya arah dan menyebut lokasi.',
  [['la casa','la kasa','rumah'],['el piso','el piso','apartemen'],['la escuela','la eskuela','sekolah'],
   ['la universidad','la universidad','universitas'],['la oficina','la ofisina','kantor'],
   ['la tienda','la tienda','toko'],['el mercado','el merkado','pasar'],
   ['el hospital','el ospital','rumah sakit'],['la farmacia','la farmasia','apotek'],
   ['el banco','el banko','bank'],['el correo','el korreo','kantor pos'],
   ['la estación','la estasion','stasiun'],['el aeropuerto','el aeropuerto','bandara'],
   ['el hotel','el otel','hotel'],['el baño','el banyo','toilet'],['el parque','el parke','taman'],
   ['la biblioteca','la biblioteka','perpustakaan'],['la calle','la kaye','jalan'],
   ['la ciudad','la siudad','kota'],['el pueblo','el pueblo','desa'],['izquierda','iskierda','kiri'],
   ['derecha','derecha','kanan'],['recto','rekto','lurus'],['aquí','aki','di sini'],
   ['allí','ayi','di sana'],['cerca','serka','dekat'],['lejos','lekhos','jauh'],
   ['al lado de','al lado de','di samping'],['enfrente de','enfrente de','di seberang'],
   ['entre','entre','di antara']]),

V('es-v-verb','Kata Kerja Inti','A2',
  'Tiga kelompok: -ar, -er, -ir. Kelompok -ar paling banyak dan paling teratur.',
  [['ser','ser','menjadi (tetap)'],['estar','estar','berada / keadaan'],['tener','tener','punya'],
   ['ir','ir','pergi'],['venir','venir','datang'],['hacer','aser','melakukan'],
   ['decir','desir','berkata'],['ver','ver','melihat'],['oír','oir','mendengar'],
   ['hablar','ablar','berbicara'],['leer','leer','membaca'],['escribir','eskribir','menulis'],
   ['comer','komer','makan'],['beber','beber','minum'],['comprar','komprar','membeli'],
   ['vender','vender','menjual'],['trabajar','trabakhar','bekerja'],['estudiar','estudiar','belajar'],
   ['vivir','vivir','tinggal'],['dormir','dormir','tidur'],['levantarse','levantarse','bangun'],
   ['conocer','konoser','mengenal'],['saber','saber','tahu'],['poder','poder','bisa'],
   ['querer','kerer','ingin / mencintai'],['esperar','esperar','menunggu'],
   ['empezar','empesar','memulai'],['terminar','terminar','mengakhiri'],
   ['ayudar','ayudar','membantu'],['dar','dar','memberi']]),

V('es-v-abs','Gagasan & Kerja','B1',
  'Kosakata untuk membaca berita dan menulis esai DELE B1–B2.',
  [['la sociedad','la sosiedad','masyarakat'],['la cultura','la kultura','budaya'],
   ['la economía','la ekonomia','ekonomi'],['la política','la politika','politik'],
   ['el medio ambiente','el medio ambiente','lingkungan'],['la educación','la edukasion','pendidikan'],
   ['la tecnología','la teknolokhia','teknologi'],['la información','la informasion','informasi'],
   ['el problema','el problema','masalah'],['la solución','la solusion','solusi'],
   ['la razón','la rason','alasan'],['el resultado','el resultado','hasil'],
   ['la influencia','la influensia','pengaruh'],['el cambio','el kambio','perubahan'],
   ['el desarrollo','el desaroyo','perkembangan'],['la diferencia','la diferensia','perbedaan'],
   ['la relación','la relasion','hubungan'],['la opinión','la opinion','pendapat'],
   ['la manera','la manera','cara'],['la condición','la kondision','syarat'],
   ['la oportunidad','la oportunidad','kesempatan'],['la responsabilidad','la responsabilidad','tanggung jawab'],
   ['el derecho','el derecho','hak'],['el deber','el deber','kewajiban'],['el valor','el valor','nilai'],
   ['la reunión','la reunion','rapat'],['el informe','el informe','laporan'],
   ['el contrato','el kontrato','kontrak'],['el sueldo','el sueldo','gaji'],['la empresa','la empresa','perusahaan']])
];

const GRAMMAR = [
G('es-g4','A1','Presente irregular','Kata Kerja Tak Beraturan',
  'Kata kerja tersering justru tak beraturan — tetapi polanya berkelompok.',
  'e→ie: querer → quiero · o→ue: poder → puedo · e→i: pedir → pido\nBentuk nosotros TIDAK berubah',
  ['Perubahan vokal terjadi pada semua bentuk kecuali nosotros dan vosotros.',
   'ser, estar, ir, tener, hacer sepenuhnya tak beraturan dan wajib dihafal.',
   'Kelompok "sepatu": bentuk yang berubah membentuk pola seperti sepatu di tabel.'],
  [['Quiero un café.','Saya mau kopi.'],
   ['No puedo ir hoy.','Saya tidak bisa pergi hari ini.'],
   ['Nosotros queremos ayudar.','Kami ingin membantu.']],
  [['Nosotros quieremos','Nosotros queremos','Bentuk nosotros tidak mengalami perubahan vokal.']],
  [{t:'mcq',q:'poder untuk yo adalah',opts:['podo','puedo','puedes','podemos'],a:1},
   {t:'mcq',q:'Bentuk yang TIDAK berubah vokalnya adalah',opts:['yo','tú','él','nosotros'],a:3}]),

G('es-g5','A1','Gustar','Pola "Suka" yang Terbalik',
  'Struktur gustar terbalik dari bahasa Indonesia — yang disukai menjadi subjek kalimat.',
  'Me gusta + tunggal · Me gustan + jamak\nme, te, le, nos, os, les',
  ['Me gusta el café = kopi menyenangkanku.',
   'Me gustan los libros — kata kerjanya menyesuaikan benda, bukan orangnya.',
   'Pola sama untuk: encantar, interesar, doler, parecer.'],
  [['Me gusta la música.','Saya suka musik.'],
   ['Me gustan las películas.','Saya suka film-film.'],
   ['Le duele la cabeza.','Kepalanya sakit.']],
  [['Yo gusto el café','Me gusta el café','Yang disukai menjadi subjek.']],
  [{t:'mcq',q:'"Saya suka buku-buku" =',opts:['Me gusta los libros','Me gustan los libros','Yo gusto libros','Me gusto libros'],a:1},
   {t:'mcq',q:'Kata kerja gustar menyesuaikan',opts:['orangnya','benda yang disukai','waktu','tempat'],a:1}]),

G('es-g6','A2','Pretérito indefinido','Lampau Selesai',
  'Bentuk lampau yang paling sering dipakai untuk menceritakan kejadian.',
  '-ar: hablé, hablaste, habló · -er/-ir: comí, comiste, comió',
  ['Dipakai untuk kejadian selesai pada waktu tertentu.',
   'ser dan ir punya bentuk lampau yang SAMA: fui.',
   'Penanda waktu: ayer, la semana pasada, en 2020.'],
  [['Ayer comí en un restaurante.','Kemarin saya makan di restoran.'],
   ['Fui a España en 2019.','Saya ke Spanyol pada 2019.'],
   ['¿Qué hiciste el fin de semana?','Apa yang kamu lakukan akhir pekan?']],
  [['Ayer como en un restaurante','Ayer comí en un restaurante','Penanda ayer menuntut bentuk lampau.']],
  [{t:'mcq',q:'Bentuk lampau ser dan ir adalah',opts:['berbeda','sama (fui)','tidak ada','fue saja'],a:1},
   {t:'mcq',q:'hablar untuk yo dalam lampau adalah',opts:['hablo','hablé','hablaba','hablaré'],a:1}]),

G('es-g7','A2','Imperfecto vs indefinido','Dua Bentuk Lampau',
  'Sama seperti bahasa Prancis: satu untuk latar, satu untuk kejadian.',
  'Imperfecto = kebiasaan, latar, keadaan (hablaba, comía)\nIndefinido = kejadian selesai (hablé, comí)',
  ['Cuando era niño, jugaba al fútbol — kebiasaan.',
   'Ayer jugué al fútbol — kejadian tunggal.',
   'Dalam cerita, imperfecto melukis latar dan indefinido menggerakkan alur.'],
  [['Llovía cuando salí.','Sedang hujan ketika saya keluar.'],
   ['Cuando era joven, vivía en Bali.','Waktu muda, saya tinggal di Bali.'],
   ['Terminé el trabajo ayer.','Saya menyelesaikan pekerjaan kemarin.']],
  [['Ayer llovía mucho y salí (untuk kejadian tunggal)','Ayer llovió mucho','Kejadian selesai memakai indefinido.']],
  [{t:'mcq',q:'Kebiasaan masa lalu memakai',opts:['indefinido','imperfecto','presente','futuro'],a:1},
   {t:'mcq',q:'"Sedang hujan" sebagai latar =',opts:['llovió','llovía','llueve','lloverá'],a:1}]),

G('es-g8','B1','Subjuntivo presente','Subjungtif Sekarang',
  'Pembatas antara B1 dan B2. Muncul setelah keinginan, keraguan, dan emosi.',
  'Ambil bentuk yo present, ganti akhiran: hablo → hable · como → coma\nPemicu: querer que, esperar que, dudar que, es importante que, ojalá',
  ['Jika kalimatnya menyatakan FAKTA, tetap indikatif.',
   'Setelah cuando yang menunjuk masa depan, dipakai subjuntif: cuando llegues.',
   'Hafalkan daftar pemicunya, bukan tabelnya.'],
  [['Espero que estés bien.','Semoga kamu baik-baik saja.'],
   ['Quiero que vengas mañana.','Saya ingin kamu datang besok.'],
   ['Cuando llegues, llámame.','Kalau kamu sampai, telepon saya.']],
  [['Quiero que vienes','Quiero que vengas','Setelah querer que wajib subjuntif.']],
  [{t:'mcq',q:'Setelah esperar que dipakai',opts:['indikatif','subjuntif','infinitif','imperatif'],a:1},
   {t:'mcq',q:'hablar dalam subjuntif untuk yo =',opts:['hablo','hable','hablé','hablaba'],a:1}]),

G('es-g9','B2','Condicional & si','Kondisional & Pengandaian',
  'Tiga pola pengandaian yang wajib untuk DELE B2.',
  'si + presente → futuro\nsi + imperfecto de subjuntivo → condicional\nsi + pluscuamperfecto subj. → condicional compuesto',
  ['Si tengo tiempo, iré — kemungkinan nyata.',
   'Si tuviera tiempo, iría — tidak nyata sekarang.',
   'Condicional juga dipakai untuk kesopanan: me gustaría…'],
  [['Si tengo tiempo, iré contigo.','Kalau ada waktu, saya ikut denganmu.'],
   ['Si fuera rico, viajaría por el mundo.','Kalau saya kaya, saya akan keliling dunia.'],
   ['Me gustaría un café, por favor.','Saya ingin kopi, tolong.']],
  [['Si sería rico','Si fuera rico','Setelah si tidak dipakai condicional.']],
  [{t:'mcq',q:'Pengandaian tak nyata memakai',opts:['presente','imperfecto de subjuntivo','futuro','condicional'],a:1},
   {t:'mcq',q:'Bentuk sopan meminta adalah',opts:['quiero','me gustaría','voy a','puedo'],a:1}]),

G('es-g10','B2','Por vs Para','Dua Kata untuk "Untuk"',
  'Kesalahan klasik yang bertahan sampai tingkat mahir.',
  'POR = sebab, pertukaran, durasi, melalui\nPARA = tujuan, penerima, tenggat, pendapat',
  ['Gracias por tu ayuda — sebab.',
   'Este regalo es para ti — penerima.',
   'Estudio para aprender — tujuan.'],
  [['Lo hice por ti.','Saya melakukannya demi kamu.'],
   ['Este libro es para ti.','Buku ini untukmu.'],
   ['Salgo para Madrid mañana.','Besok saya berangkat menuju Madrid.']],
  [['Gracias para tu ayuda','Gracias por tu ayuda','Ucapan terima kasih memakai por.']],
  [{t:'mcq',q:'"Terima kasih atas bantuanmu" memakai',opts:['por','para','de','en'],a:0},
   {t:'mcq',q:'Tujuan atau penerima memakai',opts:['por','para','a','con'],a:1}])
];

const PHRASES = [
{ g:'Di Restoran', items:[
  ['La carta, por favor','la karta por favor','Menunya, tolong'],
  ['Quisiera…','kisiera','Saya ingin…'],
  ['¿Qué me recomienda?','ke me rekomienda','Apa yang Anda sarankan?'],
  ['La cuenta, por favor','la kuenta por favor','Bill, tolong'],
  ['Estaba muy rico','estaba muy riko','Tadi enak sekali'],
  ['Sin azúcar','sin asukar','Tanpa gula']
]},
{ g:'Belanja', items:[
  ['¿Cuánto cuesta?','kuanto kuesta','Berapa harganya?'],
  ['Es muy caro','es muy karo','Ini mahal sekali'],
  ['¿Tiene otra talla?','tiene otra taya','Ada ukuran lain?'],
  ['¿Puedo pagar con tarjeta?','puedo pagar kon tarkheta','Bisa bayar pakai kartu?'],
  ['Me lo llevo','me lo yevo','Saya ambil ini']
]},
{ g:'Transportasi', items:[
  ['¿Dónde está la estación?','donde esta la estasion','Di mana stasiunnya?'],
  ['Un billete para Madrid','un biyete para madrid','Satu tiket ke Madrid'],
  ['¿A qué hora sale?','a ke ora sale','Jam berapa berangkat?'],
  ['¿Tengo que cambiar?','tengo ke kambiar','Perlu ganti kendaraan?'],
  ['Pare aquí, por favor','pare aki por favor','Berhenti di sini, tolong']
]},
{ g:'Keadaan Darurat', items:[
  ['¡Socorro!','sokoro','Tolong!'],
  ['Llame a una ambulancia','yame a una ambulansia','Panggil ambulans'],
  ['No me siento bien','no me siento bien','Saya merasa tidak enak'],
  ['¿Dónde está el hospital?','donde esta el ospital','Di mana rumah sakit?'],
  ['He perdido mi pasaporte','e perdido mi pasaporte','Paspor saya hilang'],
  ['Estoy perdido','estoy perdido','Saya tersesat']
]}
];

export const COURSE = {
  levels: [
  { id:'A1', name:'DELE A1', nameId:'Pemula', exam:'DELE A1', hours:70,
    target:'Memperkenalkan diri dan memakai ungkapan paling dasar. Pelafalan hampir tanpa hambatan.',
    cando:['Membaca semua kata Spanyol dengan benar','Membedakan ser dan estar',
           'Mengonjugasikan kata kerja beraturan','Memakai pola gustar'],
    units:[
      U('es-a1-1','Sounds & Letters','Bunyi & Huruf Khusus','Aturan baca yang hampir seluruhnya konsisten.',
        { script:['especiales'], grammar:['es-g2'], phrases:['Sapaan'], skills:['speak'],
          cando:['Membaca ñ, ll, j, qu, c dengan benar','Menempatkan tekanan kata'] }),
      U('es-a1-2','Ser & Estar','Ser dan Estar','Kesalahan paling sering dan paling terdengar.',
        { grammar:['es-g1'], vocab:['es-v-fam'], phrases:['Perkenalan'], skills:['listen','speak'],
          cando:['Memilih ser atau estar dengan tepat','Memperkenalkan diri'] }),
      U('es-a1-3','Gustar','Pola Gustar','Struktur terbalik yang wajib dikuasai sejak awal.',
        { grammar:['es-g5','es-g4'], vocab:['es-v-food','es-v-num'], phrases:['Di Restoran'], skills:['listen'],
          cando:['Menyatakan suka dengan gustar','Mengonjugasikan kata kerja tak beraturan'] })
    ]},

  { id:'A2', name:'DELE A2', nameId:'Dasar', exam:'DELE A2 · syarat kewarganegaraan Spanyol', hours:110,
    target:'Menangani situasi rutin dan bercerita tentang masa lalu.',
    cando:['Memakai pretérito indefinido','Membedakan imperfecto dan indefinido',
           'Berbelanja dan bepergian'],
    units:[
      U('es-a2-1','Past Simple','Lampau Selesai','Bentuk lampau yang paling sering dipakai.',
        { grammar:['es-g6'], vocab:['es-v-verb'], phrases:['Belanja'], skills:['listen','speak'],
          cando:['Menceritakan kejadian kemarin','Memakai bentuk fui'] }),
      U('es-a2-2','Two Past Tenses','Dua Bentuk Lampau','Latar versus kejadian.',
        { grammar:['es-g7'], vocab:['es-v-place'], phrases:['Transportasi'], skills:['listen'],
          cando:['Memilih imperfecto atau indefinido','Menyusun cerita berlatar'] })
    ]},

  { id:'B1', name:'DELE B1', nameId:'Menengah', exam:'DELE B1', hours:190,
    target:'Mandiri dalam perjalanan dan menyampaikan pengalaman serta rencana.',
    cando:['Memakai subjuntif setelah pemicunya','Menyampaikan pendapat',
           'Menulis surat semi-formal'],
    units:[
      U('es-b1-1','Subjunctive','Subjungtif Sekarang','Pembatas antara B1 dan B2.',
        { grammar:['es-g8'], vocab:['es-v-abs'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Mengenali pemicu subjuntif','Membentuk subjuntif kata kerja umum'] })
    ]},

  { id:'B2', name:'DELE B2', nameId:'Menengah Atas', exam:'DELE B2 · ambang kuliah', hours:290,
    target:'Berdiskusi topik kompleks; ambang umum masuk universitas berbahasa Spanyol.',
    cando:['Memakai tiga pola pengandaian','Membedakan por dan para',
           'Menulis esai berargumen'],
    units:[
      U('es-b2-1','Conditionals','Kondisional & Pengandaian','Tiga pola si.',
        { grammar:['es-g9'], vocab:['es-v-abs'], phrases:['Di Restoran'], skills:['listen','speak'],
          cando:['Menyusun tiga pola pengandaian','Meminta dengan sopan'] }),
      U('es-b2-2','Por vs Para','Por dan Para','Kesalahan yang bertahan sampai tingkat mahir.',
        { grammar:['es-g10'], vocab:['es-v-abs'], phrases:['Belanja'], skills:['listen'],
          cando:['Memilih por atau para dengan tepat'] })
    ]},

  { id:'C1', name:'DELE C1', nameId:'Mahir', exam:'DELE C1', hours:400,
    target:'Memahami teks panjang dan berargumen dengan luwes.',
    cando:['Membaca artikel opini','Menyusun argumen kompleks','Mengikuti kuliah penuh'],
    units:[
      U('es-c1-1','Academic Spanish','Spanyol Akademik','Kosakata abstrak dan gaya tulis formal.',
        { vocab:['es-v-abs'], grammar:['es-g9'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Memakai kosakata abstrak','Menulis esai berargumen'] })
    ]},

  { id:'C2', name:'DELE C2', nameId:'Sangat Mahir', exam:'DELE C2', hours:560,
    target:'Menguasai nuansa dan ragam; setara penutur terdidik.',
    cando:['Memahami sastra dan ragam daerah','Menerjemahkan dua arah','Berdebat dengan nuansa'],
    units:[
      U('es-c2-1','Mastery','Penguasaan','Menyatukan seluruh keterampilan.',
        { vocab:['es-v-abs'], grammar:['es-g10'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Menguasai ragam gaya','Menulis setara penutur terdidik'] })
    ]}
  ],
  grammar: GRAMMAR,
  vocab: VOCAB,
  phrases: PHRASES
};
