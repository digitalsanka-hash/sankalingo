/* BAHASA RUSIA — 33 huruf Kiril dengan urutan goresan, pelafalan,
   kasus, aspek kata kerja, dan ujian TORFL. */

const R = (c, low, rom, trick, strokes, group) => ({ c, rom, trick, strokes, name: low + ' · ' + group });

export const RU = {
code:'ru', name:'Rusia', native:'Русский', dir:'ltr',

intro: {
  headline:'Sepertiga hurufnya sudah kamu kenal. Yang menipu justru itu.',
  body:`Abjad Kiril punya 33 huruf, dan bagi pembaca huruf Latin ia terbagi tiga kelompok:
huruf yang sama bentuk dan bunyinya (А К М О Т), huruf yang bentuknya sama tetapi bunyinya
BERBEDA — inilah jebakannya (В = v, Н = n, Р = r, С = s, У = u, Х = kh), dan huruf yang
benar-benar baru (Б Г Д Ж З И Л П Ф Ц Ч Ш Щ Э Ю Я).

Setelah abjad dikuasai — biasanya cukup satu minggu — membaca bahasa Rusia justru mudah,
karena ejaannya konsisten. Tantangan sebenarnya ada di tata bahasa: enam kasus yang mengubah
akhiran kata benda, dan aspek kata kerja (selesai vs belum selesai) yang tidak ada padanannya
di bahasa Indonesia.`,
  facts:[
    '33 huruf: 21 konsonan, 10 vokal, dan 2 tanda tanpa bunyi (ъ ь).',
    'Ejaan sangat teratur — sekali tahu aturannya, hampir semua kata bisa dibaca.',
    'Tidak ada kata sandang seperti "the" atau "a".',
    'Urutan kata longgar karena akhiran kata sudah menandai perannya.'
  ],
  hardForId:[
    'Enam kasus: nominatif, genitif, datif, akusatif, instrumental, preposisional. Akhiran kata benda berubah semua.',
    'Aspek kata kerja: setiap kata kerja punya pasangan (belum selesai / sudah selesai).',
    'Tekanan kata tidak ditandai dan bisa jatuh di mana saja — dan mengubah bunyi vokal.',
    'Bunyi ы tidak ada di bahasa Indonesia maupun Inggris.',
    'Konsonan lunak (ditandai ь atau vokal е ё и ю я) mengubah cara lidah menempel.'
  ]
},

scripts: [
{
  id:'kiril', name:'Abjad Kiril', native:'Кириллица', count:33,
  note:'Ditampilkan dalam bentuk huruf besar cetak. Perhatikan kelompoknya: "sama" aman ditebak, "menipu" wajib dihafal ulang, "baru" perlu latihan menulis.',
  chars: [
    R('А','а','a','Sama seperti Latin. Dua kaki dan palang.',['M50 16 L24 84','M50 16 L76 84','M34 62 L66 62'],'sama'),
    R('Б','б','b','Seperti angka 6 bersudut: tiang, atap, perut bawah.',['M30 18 L30 84','M30 18 L74 18','M30 48 L60 48 C74 48 78 60 74 72 C70 82 46 84 30 84'],'baru'),
    R('В','в','v','JEBAKAN: bentuknya B tapi dibaca V. Dua perut.',['M30 16 L30 84','M30 16 L62 16 C74 16 76 32 62 46 L30 46','M30 46 L64 46 C78 46 80 68 64 82 L30 84'],'menipu'),
    R('Г','г','g','Seperti L terbalik — hanya dua goresan.',['M28 18 L28 84','M28 18 L74 18'],'baru'),
    R('Д','д','d','Rumah beratap dengan dua kaki kecil.',['M38 20 L66 20','M38 20 C38 48 32 66 22 74','M66 20 L74 74','M16 74 L84 74','M26 74 L26 88','M74 74 L74 88'],'baru'),
    R('Е','е','ye','Sama seperti E Latin, dibaca "ye" bila bertekanan.',['M30 18 L30 84','M30 18 L74 18','M30 50 L64 50','M30 84 L74 84'],'sama'),
    R('Ё','ё','yo','E dengan dua titik = "yo". Selalu bertekanan.',['M30 24 L30 84','M30 24 L74 24','M30 52 L64 52','M30 84 L74 84','M40.0 9.0 L40.0 17.0','M60.0 9.0 L60.0 17.0'],'baru'),
    R('Ж','ж','zh','Seperti kupu-kupu — tiang tengah dengan dua sayap.',['M50 16 L50 84','M50 50 L20 18','M50 50 L20 84','M50 50 L80 18','M50 50 L80 84'],'baru'),
    R('З','з','z','Seperti angka 3 — dua busur.',['M28 26 C36 14 66 14 70 30 C72 42 58 48 46 48','M46 48 C64 48 76 56 74 70 C70 86 34 88 26 74'],'baru'),
    R('И','и','i','Seperti N terbalik — diagonalnya naik dari kiri bawah.',['M28 18 L28 84','M72 18 L72 84','M28 84 L72 18'],'baru'),
    R('Й','й','y','И dengan topi lengkung — bunyi "y" pendek.',['M28 26 L28 84','M72 26 L72 84','M28 84 L72 26','M36 14 C44 22 56 22 64 14'],'baru'),
    R('К','к','k','Sama seperti K Latin.',['M28 18 L28 84','M70 18 L34 52','M34 52 L74 84'],'sama'),
    R('Л','л','l','Seperti gerbang miring.',['M20 86 C26 58 30 26 40 20 L76 20','M76 20 L76 86'],'baru'),
    R('М','м','m','Sama seperti M Latin.',['M24 84 L24 18','M24 18 L50 60','M50 60 L76 18','M76 18 L76 84'],'sama'),
    R('Н','н','n','JEBAKAN: bentuknya H tapi dibaca N.',['M28 18 L28 84','M72 18 L72 84','M28 50 L72 50'],'menipu'),
    R('О','о','o','Sama seperti O Latin. Tanpa tekanan dibaca mendekati "a".',['M50 16 C28 16 20 40 20 50 C20 64 30 84 50 84 C70 84 80 64 80 50 C80 40 72 16 50 16'],'sama'),
    R('П','п','p','Seperti gerbang — dua tiang dan satu atap.',['M28 18 L74 18','M28 18 L28 84','M74 18 L74 84'],'baru'),
    R('Р','р','r','JEBAKAN: bentuknya P tapi dibaca R (bergetar).',['M30 18 L30 84','M30 18 L62 18 C78 18 80 44 62 50 L30 50'],'menipu'),
    R('С','с','s','JEBAKAN: bentuknya C tapi dibaca S.',['M74 28 C64 14 26 18 24 50 C22 82 62 90 76 72'],'menipu'),
    R('Т','т','t','Sama seperti T Latin.',['M18 18 L82 18','M50 18 L50 84'],'sama'),
    R('У','у','u','JEBAKAN: bentuknya Y tapi dibaca U.',['M26 18 L52 56','M76 18 L38 88'],'menipu'),
    R('Ф','ф','f','Seperti tiang menembus dua lingkaran.',['M50 12 L50 88','M50 26 C28 26 22 38 22 48 C22 60 30 70 50 70','M50 26 C72 26 78 38 78 48 C78 60 70 70 50 70'],'baru'),
    R('Х','х','kh','JEBAKAN: bentuknya X tapi dibaca "kh" (berdehem).',['M24 18 L76 84','M76 18 L24 84'],'menipu'),
    R('Ц','ц','ts','П dengan ekor kecil di kanan bawah.',['M28 18 L28 78','M70 18 L70 78','M22 78 L78 78','M76 78 L76 90'],'baru'),
    R('Ч','ч','ch','Seperti angka 4 tanpa alas.',['M28 18 L28 46 C28 56 40 58 66 56','M70 18 L70 84'],'baru'),
    R('Ш','ш','sh','Tiga tiang di atas satu alas.',['M20 18 L20 80','M50 18 L50 80','M80 18 L80 80','M20 80 L80 80'],'baru'),
    R('Щ','щ','shch','Ш dengan ekor — bunyi "sh" panjang dan lembut.',['M18 18 L18 76','M46 18 L46 76','M74 18 L74 76','M14 76 L78 76','M76 76 L76 90'],'baru'),
    R('Ъ','ъ','—','Tanda keras. Tidak berbunyi; memisahkan konsonan dari vokal.',['M20 20 L48 20','M48 20 L48 84','M48 50 L66 50 C80 50 82 68 68 80 C62 84 54 84 48 84'],'baru'),
    R('Ы','ы','y','Vokal khas Rusia: seperti "i" tetapi lidah ditarik ke belakang.',['M24 18 L24 84','M24 48 L44 48 C58 48 60 66 46 80 C40 84 30 84 24 84','M72 18 L72 84'],'baru'),
    R('Ь','ь','—','Tanda lunak. Melunakkan konsonan sebelumnya.',['M32 18 L32 84','M32 50 L54 50 C70 50 72 68 56 80 C50 84 38 84 32 84'],'baru'),
    R('Э','э','e','Seperti С terbalik dengan palang.',['M26 28 C36 14 74 18 76 50 C78 82 38 88 24 72','M50 50 L76 50'],'baru'),
    R('Ю','ю','yu','И dan О yang disambung palang.',['M26 18 L26 84','M26 50 L44 50','M62 18 C46 18 42 34 42 50 C42 68 48 84 62 84 C76 84 82 66 82 50 C82 34 76 18 62 18'],'baru'),
    R('Я','я','ya','JEBAKAN: seperti R terbalik, dibaca "ya".',['M72 18 L72 84','M72 18 L42 18 C26 18 24 46 42 50 L72 50','M42 50 L24 84'],'menipu')
  ]
}
],

compound: {
  tense: [
    ['ь tanda lunak','melunakkan','Konsonan sebelumnya diucapkan dengan lidah menempel lebih lebar: мать berbeda dari мат.'],
    ['ъ tanda keras','memisahkan','Jarang; memisahkan awalan dari akar: объект.'],
    ['Tekanan','berpindah-pindah','Tidak ditandai dalam tulisan biasa; harus dihafal bersama katanya.'],
    ['Vokal tanpa tekanan','melemah','о tanpa tekanan dibaca mendekati "a": молоко ≈ "malako".'],
    ['Konsonan akhir','menjadi tak bersuara','друг dibaca "druk", город dibaca "gorat".']
  ],
  vowels: [
    ['а э ы о у','vokal keras','Dipakai setelah konsonan keras.'],
    ['я е и ё ю','vokal lunak','Melunakkan konsonan sebelumnya; di awal kata dibaca ya, ye, i, yo, yu.'],
    ['ы','vokal khas','Tidak ada di bahasa Indonesia. Ucapkan "i" sambil menarik lidah ke belakang.'],
    ['ё','selalu bertekanan','Sering ditulis sebagai е di teks biasa, tetapi selalu dibaca "yo".']
  ]
},

syllable: {
  rules: [
    ['Satu kata satu tekanan; vokal bertekanan diucapkan penuh.','молокó'],
    ['Vokal tanpa tekanan melemah; о menjadi seperti а.','хорошо ≈ "kharasho"','Vokal tanpa tekanan melemah; o menjadi seperti a.'],
    ['Konsonan bersuara di akhir kata jadi tak bersuara.','хлеб dibaca "khlep"'],
    ['Vokal lunak (я е и ё ю) melunakkan konsonan di depannya.','нет = n lunak + et','Vokal lunak (ya ye i yo yu) melunakkan konsonan di depannya.']
  ],
  demo: [
    { block:'Привет', parts:['П','р','и','в','е','т'], rom:'privét', layout:'halo (santai)' },
    { block:'Спасибо', parts:['С','п','а','с','и','б','о'], rom:'spasíba', layout:'terima kasih' },
    { block:'Россия', parts:['Р','о','с','с','и','я'], rom:'rasíya', layout:'Rusia' },
    { block:'Москва', parts:['М','о','с','к','в','а'], rom:'maskvá', layout:'Moskwa' },
    { block:'Хорошо', parts:['Х','о','р','о','ш','о'], rom:'kharashó', layout:'bagus' },
    { block:'Друг', parts:['Д','р','у','г'], rom:'druk', layout:'teman' }
  ],
  batchim:`ENAM KASUS mengubah akhiran kata benda menurut perannya dalam kalimat.
Contoh kata книга (buku):
  Nominatif (subjek)        книга      Книга здесь. — Bukunya di sini.
  Genitif (kepemilikan)     книги      Нет книги. — Tidak ada buku.
  Datif (penerima)          книге      Дай книге… — kepada buku…
  Akusatif (objek)          книгу      Я читаю книгу. — Saya membaca buku.
  Instrumental (alat)       книгой     с книгой — dengan buku
  Preposisional (tempat)    книге      о книге — tentang buku
Inilah sebabnya urutan kata bahasa Rusia bisa longgar: perannya sudah ditandai akhiran.`
},

phonology: {
  triples: [
    ['ы / и','vokal keras vs lunak','мы (kami) vs ми. Lidah ditarik ke belakang untuk ы.','мы, ми'],
    ['ш / щ','sh pendek vs sh panjang lembut','шар (bola) vs щи (sup kubis).'],
    ['х / к','kh vs k','х berdesah dari pangkal lidah, seperti berdehem halus.'],
    ['р','r bergetar','Lidah bergetar seperti "r" bahasa Indonesia — ini justru keunggulanmu.'],
    ['л / ль','l keras vs l lunak','лук (bawang) vs люк (lubang got).']
  ],
  liaison: [
    ['молоко','malakó','Dua о pertama melemah jadi "a".'],
    ['хорошо','kharashó','Pola pelemahan yang sama.'],
    ['что','shto','Ejaan tak beraturan yang wajib dihafal.'],
    ['его','yevó','г dibaca "v" pada akhiran ini.'],
    ['здравствуйте','zdrástvuyte','в di tengah tidak diucapkan.']
  ],
  notes: [
    'Tekanan adalah nyawa pelafalan Rusia: salah tekanan membuat kata sulit dikenali.',
    'Kamus menandai tekanan dengan aksen; teks biasa tidak.',
    'Bunyi "r" bergetar Indonesia hampir identik dengan р Rusia — modal yang jarang dimiliki penutur Inggris.'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['Здравствуйте','zdrástvuyte','Halo (sopan)'],
    ['Привет','privét','Hai (santai)'],
    ['Доброе утро','dóbraye útra','Selamat pagi'],
    ['До свидания','da svidániya','Sampai jumpa'],
    ['Очень приятно','óchen priyátna','Senang berkenalan']
  ]},
  { g:'Sopan santun', items:[
    ['Спасибо','spasíba','Terima kasih'],
    ['Пожалуйста','pazhálusta','Silakan / sama-sama'],
    ['Извините','izvinítye','Maaf / permisi'],
    ['Ничего','nichevó','Tidak apa-apa'],
    ['Будьте добры','búdtye dabrý','Tolong (sangat sopan)']
  ]},
  { g:'Bertahan hidup', items:[
    ['Сколько стоит?','skólka stóit?','Berapa harganya?'],
    ['Я хочу это','ya khachú éta','Saya mau ini'],
    ['Где туалет?','gdye tualyét?','Di mana toilet?'],
    ['Помогите','pamagítye','Tolong saya'],
    ['Я не понимаю','ya nye panimáyu','Saya tidak mengerti'],
    ['Говорите медленнее','gavarítye myédlyenneye','Tolong bicara lebih pelan'],
    ['Я немного говорю по-русски','ya nyemnóga gavaryú pa-rússki','Saya bisa sedikit bahasa Rusia']
  ]},
  { g:'Perkenalan', items:[
    ['Меня зовут ○○','minyá zavút ○○','Nama saya ○○'],
    ['Я из Индонезии','ya iz indanézii','Saya dari Indonesia'],
    ['Я студент','ya studyént','Saya mahasiswa'],
    ['Мне двадцать лет','mnye dvátsat lyet','Umur saya dua puluh tahun']
  ]}
],

numbers: {
  note:'Angka Rusia ikut berubah menurut kasus, dan kata benda setelahnya berubah bentuk mengikuti angkanya.',
  sino: { title:'Angka 1–10', use:'dasar',
    list:[['один','adín','1'],['два','dva','2'],['три','tri','3'],['четыре','chetýre','4'],
          ['пять','pyat','5'],['шесть','shest','6'],['семь','syem','7'],['восемь','vósyem','8'],
          ['девять','dyévyat','9'],['десять','dyésyat','10'],['сто','sto','100'],['тысяча','týsyacha','1.000']] },
  native: { title:'Aturan bentuk benda setelah angka', use:'wajib dipatuhi',
    list:[['1','+ nominatif tunggal','один стол'],['2–4','+ genitif tunggal','два стола'],
          ['5–20','+ genitif jamak','пять столов'],['21','kembali ke pola 1','двадцать один стол'],
          ['22–24','kembali ke pola 2–4','двадцать два стола']] },
  clock:'Jam memakai час (chas): два часа = pukul dua. Perhatikan bentuknya ikut aturan angka di atas.'
},

grammar: [
{ id:'ru-g1', level:'A1', title:'Kalimat Tanpa "Adalah"', titleId:'Kalimat Nominal',
  why:'Bahasa Rusia masa kini tidak memakai kata kerja "adalah" — persis seperti bahasa Indonesia.',
  form:'Subjek + (tanpa kata kerja) + keterangan\nЯ студент = Saya mahasiswa',
  notes:['Untuk masa lampau dipakai был/была/было.',
         'Tidak ada kata sandang; Я студент berarti "saya seorang mahasiswa".',
         'Negatif memakai не sebelum kata yang disangkal.'],
  ex:[['Я студент.','Saya mahasiswa.','Ya student.'],
      ['Это книга.','Ini buku.','Eto kniga.'],
      ['Он не врач.','Dia bukan dokter.','On ne vrac.']],
  traps:[['Я есть студент.','Я студент.','есть tidak dipakai dalam kalimat identitas biasa.']],
  drills:[
    { t:'mcq', q:'"Ini rumah" =', opts:['Это есть дом','Это дом','Дом это есть','Есть это дом'], a:1 },
    { t:'mcq', q:'Negatif memakai kata', opts:['нет','не','ни','но'], a:1 }
  ]},
{ id:'ru-g2', level:'A2', title:'Enam Kasus', titleId:'Akhiran yang Berubah',
  why:'Ini inti tata bahasa Rusia. Tanpa kasus, kalimat tidak bisa dipahami — bukan sekadar terdengar salah.',
  form:'Nominatif · Genitif · Datif · Akusatif · Instrumental · Preposisional',
  notes:['Kasus menandai PERAN kata, sehingga urutan kata bisa dibalik tanpa mengubah makna.',
         'Akusatif untuk objek langsung; genitif untuk kepemilikan dan penyangkalan.',
         'Preposisional selalu didahului preposisi (в, на, о).'],
  ex:[['Я читаю книгу.','Saya membaca buku. (akusatif)','Ya citayu knigu.'],
      ['Это книга брата.','Ini buku milik saudara. (genitif)','Eto kniga brata.'],
      ['Я живу в Москве.','Saya tinggal di Moskwa. (preposisional)','Ya zyivu v Moskve.']],
  traps:[['Я читаю книга.','Я читаю книгу.','Objek langsung memakai akusatif.']],
  drills:[
    { t:'mcq', q:'Objek langsung memakai kasus', opts:['nominatif','genitif','akusatif','datif'], a:2 },
    { t:'mcq', q:'Berapa jumlah kasus dalam bahasa Rusia?', opts:['4','5','6','7'], a:2 }
  ]},
{ id:'ru-g3', level:'B1', title:'Aspek Kata Kerja', titleId:'Selesai vs Belum Selesai',
  why:'Setiap kata kerja Rusia punya PASANGAN. Memilih yang salah mengubah makna, bukan sekadar waktu.',
  form:'Imperfektif (proses / kebiasaan) ↔ Perfektif (selesai / sekali)\nчитать ↔ прочитать · писать ↔ написать',
  notes:['Imperfektif menjawab "apa yang kamu lakukan"; perfektif menjawab "apa yang berhasil kamu selesaikan".',
         'Perfektif tidak punya bentuk sekarang — hanya lampau dan depan.',
         'Kata keterangan membantu memilih: часто (sering) → imperfektif; вдруг (tiba-tiba) → perfektif.'],
  ex:[['Я читал книгу.','Saya sedang membaca buku (belum tentu selesai).','Ya cital knigu.'],
      ['Я прочитал книгу.','Saya sudah selesai membaca buku.','Ya procital knigu.'],
      ['Я буду писать письмо.','Saya akan menulis surat (prosesnya).','Ya budu pisat pismo.']],
  traps:[['Я буду прочитать.','Я прочитаю.','Perfektif tidak dipakai dengan буду.']],
  drills:[
    { t:'mcq', q:'"Saya sudah selesai membaca" memakai bentuk', opts:['читать','прочитать','читаю','читал'], a:1 },
    { t:'mcq', q:'Perfektif punya bentuk waktu', opts:['sekarang saja','lampau dan depan','ketiganya','tidak punya'], a:1 }
  ]}
],

vocab: [
{ id:'ru-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['человек','chelavyék','orang'],['вода','vadá','air'],['еда','yedá','makanan'],
    ['дом','dom','rumah'],['школа','shkóla','sekolah'],['друг','druk','teman'],
    ['время','vryémya','waktu'],['деньги','dyéngi','uang'],['работа','rabóta','pekerjaan'],
    ['сегодня','sivódnya','hari ini'],['завтра','závtra','besok'],['вчера','vcherá','kemarin'],
    ['сейчас','seychás','sekarang'],['здесь','zdyes','di sini'],['там','tam','di sana'],
    ['это','éta','ini'],['тот','tot','itu'],['что','shto','apa'],
    ['кто','kto','siapa'],['где','gdye','di mana'],['когда','kagdá','kapan'],
    ['почему','pachemú','mengapa'],['как','kak','bagaimana'],['сколько','skólka','berapa'],
    ['идти','ittí','pergi / berjalan'],['приходить','prikhadít','datang'],['есть','yest','makan'],
    ['пить','pit','minum'],['смотреть','smatryét','melihat'],['слушать','slúshat','mendengar'],
    ['делать','dyélat','melakukan'],['быть','byt','menjadi / ada'],['знать','znat','tahu'],
    ['хороший','kharóshiy','bagus'],['большой','balshóy','besar'],['маленький','málenkiy','kecil'],
    ['много','mnóga','banyak'],['мало','mála','sedikit'],['новый','nóviy','baru'],
    ['вкусно','vkúsna','enak'],['дорого','dóraga','mahal'],['дёшево','dyóshiva','murah']
  ]}
],

exam: {
  id:'torfl', name:'TORFL / ТРКИ', full:'Test of Russian as a Foreign Language (Тест по русскому языку как иностранному)',
  tagline:'Ujian negara Rusia, enam tingkat yang diselaraskan dengan CEFR.',
  overview:{
    tingkat:'Elementer (A1) · Dasar (A2) · TORFL-1 (B1) · TORFL-2 (B2) · TORFL-3 (C1) · TORFL-4 (C2)',
    bagian:'Lima: kosakata & tata bahasa, membaca, menyimak, menulis, berbicara',
    kelulusan:'Harus mencapai ambang minimum di SETIAP bagian; umumnya sekitar 66%',
    kegunaan:'TORFL-1 syarat masuk universitas Rusia; kewarganegaraan memerlukan tingkat dasar'
  },
  levels:[
    ['Elementer (A1)','±780 kata','Bertahan dalam situasi paling dasar.'],
    ['Dasar (A2)','±1.300 kata','Kebutuhan sehari-hari; syarat izin kerja di sebagian kasus.'],
    ['TORFL-1 (B1)','±2.300 kata','Syarat umum masuk program sarjana di Rusia.'],
    ['TORFL-2 (B2)','±5.000 kata','Mampu kuliah di sebagian besar jurusan dan bekerja profesional.'],
    ['TORFL-3 (C1)','±7.000 kata','Setara pekerja media, penerjemah, dan akademisi.'],
    ['TORFL-4 (C2)','±8.000+ kata','Nyaris setara penutur asli terdidik; syarat mengajar bahasa Rusia.']
  ],
  sections:[
    { name:'Лексика и грамматика', items:'Kosakata & tata bahasa', note:'Bagian terbesar; kasus dan aspek kata kerja mendominasi.' },
    { name:'Чтение', items:'Membaca', note:'Teks dari iklan sampai artikel; tanpa tanda tekanan.' },
    { name:'Аудирование', items:'Menyimak', note:'Dialog dan siaran; diputar terbatas.' },
    { name:'Письмо', items:'Menulis', note:'Surat, formulir, dan karangan sesuai tingkat.' },
    { name:'Говорение', items:'Berbicara', note:'Wawancara dengan penguji, termasuk bermain peran.' }
  ],
  tactics:[
    { title:'Kuasai kasus lewat preposisi, bukan tabel', budget:'20 mnt/hari',
      steps:['Hafalkan preposisi bersama kasus yang dituntutnya: в + preposisional untuk tempat, в + akusatif untuk arah.',
             'Latih dalam frasa utuh (в школе, в школу), bukan tabel akhiran kosong.',
             'Buat 10 kalimat sehari yang memakai kasus berbeda untuk kata yang sama.'],
      why:'Menghafal tabel enam kasus tanpa konteks hampir selalu gagal berpindah ke ucapan.' },
    { title:'Belajar kata kerja selalu berpasangan', budget:'—',
      steps:['Catat imperfektif dan perfektif bersama sejak awal: читать/прочитать.',
             'Tandai kata keterangan pemicu: часто, всегда → imperfektif; вдруг, уже → perfektif.',
             'Latih menceritakan satu hari: proses memakai imperfektif, hasil memakai perfektif.'],
      why:'Aspek adalah bagian tersulit yang paling sering menahan peserta di B1.' },
    { title:'Catat tekanan sejak kata pertama', budget:'—',
      steps:['Selalu tandai tekanan saat menulis kata baru.',
             'Ucapkan keras-keras; tekanan yang salah membuat kata tak dikenali penutur asli.',
             'Waspadai kata yang tekanannya berpindah saat berubah kasus: рука → руки.'],
      why:'Tekanan tidak ditandai dalam teks nyata; menghafalnya belakangan jauh lebih sulit.' }
  ],
  sources:[
    ['TORFL — sistem ujian negara Rusia','https://www.russia.study'],
    ['Deskripsi tingkat TORFL & CEFR','https://www.coe.int/en/web/common-european-framework-reference-languages']
  ]
}
};
