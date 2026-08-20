/* KURSUS RUSIA — enam tingkat TORFL (elementer → TORFL-4). */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const G = (id, level, title, titleId, why, form, notes, ex, traps, drills) =>
  ({ id, level, title, titleId, why, form, notes, ex, traps, drills });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

const VOCAB = [
V('ru-v-num','Angka, Waktu & Hari','A1',
  'Angka Rusia ikut berubah menurut kasus, dan kata benda sesudahnya menyesuaikan.',
  [['один','adín','satu'],['два','dva','dua'],['три','tri','tiga'],['четыре','chetýre','empat'],
   ['пять','pyat','lima'],['шесть','shest','enam'],['семь','syem','tujuh'],['восемь','vósyem','delapan'],
   ['девять','dyévyat','sembilan'],['десять','dyésyat','sepuluh'],['сто','sto','seratus'],
   ['тысяча','týsyacha','seribu'],['час','chas','jam'],['минута','minúta','menit'],
   /* Dulu di sini ada день 'hari', padahal день sudah ada lagi di deret
      waktu-hari di bawah sebagai 'siang'. Satu kata muncul dua kali dalam
      SATU paket: pemelajar melihat entri yang sama dua kali, dan kartu
      hafalan — yang membuang kembar — hanya menyimpan yang pertama,
      sehingga makna 'siang' tidak pernah sampai kepadanya.

      Diganti сутки, yang justru pembedaan sungguhan dalam bahasa Rusia:
      сутки adalah hari penuh 24 jam (karena itu ia sederet dengan jam,
      menit, minggu, bulan, tahun), sedangkan день adalah siang — bagian
      hari yang terang, lawan утро, вечер, dan ночь. */
   ['сутки','sútki','hari (24 jam)'],['неделя','nedélya','minggu'],['месяц','myésyats','bulan'],
   ['год','got','tahun'],['понедельник','panedyélnik','Senin'],['вторник','ftórnik','Selasa'],
   ['среда','sredá','Rabu'],['четверг','chetvyérk','Kamis'],['пятница','pyátnitsa','Jumat'],
   ['суббота','subóta','Sabtu'],['воскресенье','vaskresyénye','Minggu'],['утро','útra','pagi'],
   ['день','dyen','siang; hari'],['вечер','vyécher','sore'],['ночь','noch','malam'],['сейчас','seychás','sekarang']]),

V('ru-v-fam','Keluarga & Orang','A1',
  'Nama Rusia selalu tiga bagian: nama depan, patronim, dan nama keluarga.',
  [['семья','semyá','keluarga'],['отец','atyéts','ayah'],['мать','mat','ibu'],['папа','pápa','ayah (akrab)'],
   ['мама','máma','ibu (akrab)'],['брат','brat','saudara laki-laki'],['сестра','sestrá','saudara perempuan'],
   ['сын','syn','anak laki-laki'],['дочь','doch','anak perempuan'],['дедушка','dyédushka','kakek'],
   ['бабушка','bábushka','nenek'],['муж','mush','suami'],['жена','zhená','istri'],
   ['ребёнок','rebyónak','anak'],['мужчина','mushchína','laki-laki'],['женщина','zhénshchina','perempuan'],
   ['друг','druk','teman'],['учитель','uchítel','guru'],['студент','studyént','mahasiswa'],
   ['врач','vrach','dokter'],['инженер','inzhinyér','insinyur'],['коллега','kalyéga','rekan kerja'],
   ['имя','ímya','nama'],['фамилия','famíliya','nama keluarga'],['возраст','vózrast','umur'],
   ['страна','straná','negara'],['Россия','Rasíya','Rusia'],['Индонезия','Indanéziya','Indonesia'],
   ['человек','chelavyék','orang'],['сосед','sasyét','tetangga']]),

V('ru-v-food','Makanan & Minuman','A2',
  'Kosakata warung dan pasar — langsung terpakai begitu mendarat.',
  [['еда','yedá','makanan'],['хлеб','khlyep','roti'],['мясо','myása','daging'],['рыба','rýba','ikan'],
   ['курица','kúritsa','ayam'],['яйцо','yaytsó','telur'],['молоко','malakó','susu'],
   ['вода','vadá','air'],['чай','chay','teh'],['кофе','kófe','kopi'],['сок','sok','jus'],
   ['суп','sup','sup'],['салат','salát','salad'],['картошка','kartóshka','kentang'],
   ['овощи','óvashchi','sayuran'],['фрукты','frúkty','buah'],['яблоко','yáblaka','apel'],
   ['сахар','sákhar','gula'],['соль','sol','garam'],['масло','másla','mentega/minyak'],
   ['вкусно','fkúsna','enak'],['сладкий','slátkiy','manis'],['солёный','salyóniy','asin'],
   ['острый','óstriy','pedas'],['голодный','galódniy','lapar'],['завтрак','záftrak','sarapan'],
   ['обед','abyét','makan siang'],['ужин','úzhin','makan malam'],['ресторан','restarán','restoran'],
   ['кафе','kafé','kafe']]),

V('ru-v-place','Tempat & Arah','A2',
  'Kata tempat hampir selalu muncul bersama preposisi tertentu — hafalkan berpasangan.',
  [['дом','dom','rumah'],['школа','shkóla','sekolah'],['университет','universityét','universitas'],
   ['работа','rabóta','tempat kerja'],['магазин','magazín','toko'],['рынок','rýnak','pasar'],
   ['больница','balnítsa','rumah sakit'],['аптека','aptyéka','apotek'],['банк','bank','bank'],
   ['вокзал','vagzál','stasiun kereta'],['аэропорт','aerapórt','bandara'],['гостиница','gastínitsa','hotel'],
   ['туалет','tualyét','toilet'],['парк','park','taman'],['библиотека','bibliatyéka','perpustakaan'],
   ['улица','úlitsa','jalan'],['город','górat','kota'],['деревня','deryévnya','desa'],
   ['слева','slyéva','di kiri'],['справа','správa','di kanan'],['прямо','pryáma','lurus'],
   ['здесь','zdyes','di sini'],['там','tam','di sana'],['рядом','ryádam','di dekat'],
   ['далеко','dalekó','jauh'],['близко','blíska','dekat'],['внутри','vnutrí','di dalam'],
   ['снаружи','snarúzhi','di luar'],['между','myézhdu','antara'],['напротив','naprótiv','di seberang']]),

V('ru-v-verb','Kata Kerja Berpasangan','B1',
  'Setiap kata kerja Rusia punya pasangan: belum selesai dan sudah selesai. Hafalkan berdua.',
  [['читать / прочитать','chitát / prachitát','membaca'],['писать / написать','pisát / napisát','menulis'],
   ['делать / сделать','dyélat / zdyélat','melakukan'],['говорить / сказать','gavarít / skazát','berbicara'],
   ['идти / пойти','ittí / paytí','pergi (jalan kaki)'],['ехать / поехать','yékhat / payékhat','pergi (berkendara)'],
   ['есть / съесть','yest / syest','makan'],['пить / выпить','pit / výpit','minum'],
   ['смотреть / посмотреть','smatryét / pasmatryét','menonton'],['слушать / послушать','slúshat / paslúshat','mendengarkan'],
   ['покупать / купить','pakupát / kupít','membeli'],['работать / поработать','rabótat / parabótat','bekerja'],
   ['учить / выучить','uchít / výuchit','menghafal'],['изучать / изучить','izuchát / izuchít','mempelajari'],
   ['спать / поспать','spat / paspát','tidur'],['вставать / встать','fstavát / fstat','bangun'],
   ['встречать / встретить','fstrechát / fstryétit','bertemu'],['ждать / подождать','zhdat / padazhdát','menunggu'],
   ['открывать / открыть','atkryvát / atkrýt','membuka'],['закрывать / закрыть','zakryvát / zakrýt','menutup'],
   ['начинать / начать','nachinát / nachát','memulai'],['кончать / кончить','kanchát / kónchit','mengakhiri'],
   ['понимать / понять','panimát / panyát','memahami'],['знать','znat','tahu'],
   ['помогать / помочь','pamagát / pamóch','membantu'],['давать / дать','davát / dat','memberi'],
   ['брать / взять','brat / vzyat','mengambil'],['жить','zhit','tinggal'],
   ['любить','lyubít','menyukai'],['хотеть','khatyét','ingin']]),

V('ru-v-abs','Gagasan & Kerja','B2',
  'Kosakata untuk membaca berita dan menulis esai TORFL.',
  [['общество','ópshchestva','masyarakat'],['культура','kultúra','budaya'],['экономика','ikanómika','ekonomi'],
   ['политика','palítika','politik'],['природа','priróda','alam'],['образование','abrazavániye','pendidikan'],
   ['технология','tekhnalógiya','teknologi'],['информация','infarmátsiya','informasi'],
   ['проблема','prablyéma','masalah'],['решение','reshéniye','solusi'],['причина','prichína','sebab'],
   ['результат','rezultát','hasil'],['влияние','vliyániye','pengaruh'],['изменение','izmenyéniye','perubahan'],
   ['развитие','razvítiye','perkembangan'],['разница','ráznitsa','perbedaan'],['отношение','atnashéniye','hubungan'],
   ['мнение','mnyéniye','pendapat'],['способ','spósap','cara'],['условие','uslóviye','syarat'],
   ['возможность','vazmózhnast','kesempatan'],['ответственность','atvyétstvennast','tanggung jawab'],
   ['право','právo','hak'],['обязанность','abyázannast','kewajiban'],['ценность','tsénnast','nilai'],
   ['работа','rabóta','pekerjaan'],['встреча','fstryécha','pertemuan'],['отчёт','atchyót','laporan'],
   ['договор','dagavór','kontrak'],['зарплата','zarpláta','gaji']])
];

const GRAMMAR = [
G('ru-g4','A1','Род существительных','Jenis Kelamin Kata Benda',
  'Semua kata benda Rusia berjenis kelamin, dan hampir selalu bisa ditebak dari huruf terakhirnya.',
  'Konsonan → maskulin (стол)\n-а / -я → feminin (книга)\n-о / -е → netral (окно)\n-ь → bisa keduanya, harus dihafal',
  ['Kata sifat menyesuaikan: новый стол, новая книга, новое окно.',
   'Kata berakhiran -ь paling sering feminin, tetapi banyak pengecualian.',
   'Jenis kelamin menentukan seluruh akhiran kasus.'],
  [['новый дом','rumah baru (maskulin)','novyy dom'],
   ['новая машина','mobil baru (feminin)','novaya masyina'],
   ['новое окно','jendela baru (netral)','novoye okno']],
  [['новый книга','новая книга','книга berakhiran -а → feminin.']],
  [{t:'mcq',q:'Kata berakhiran -о berjenis',opts:['maskulin','feminin','netral','jamak'],a:2},
   {t:'mcq',q:'"Buku baru" =',opts:['новый книга','новая книга','новое книга','новые книга'],a:1}]),

G('ru-g5','A1','Винительный падеж','Kasus Akusatif',
  'Kasus pertama yang harus dikuasai: menandai objek langsung.',
  'Feminin -а → -у (книга → книгу)\nMaskulin benda mati tidak berubah\nMaskulin bernyawa memakai bentuk genitif',
  ['Я читаю книгу — objeknya berubah akhiran.',
   'Я вижу стол — benda mati maskulin tetap.',
   'Я вижу брата — makhluk hidup maskulin memakai bentuk genitif.'],
  [['Я читаю книгу.','Saya membaca buku.','Ya citayu knigu.'],
   ['Он покупает хлеб.','Dia membeli roti.','On pokupayet khleb.'],
   ['Я жду сестру.','Saya menunggu saudara perempuan.','Ya zydu sestru.']],
  [['Я читаю книга','Я читаю книгу','Objek langsung feminin berakhiran -у.']],
  [{t:'mcq',q:'книга sebagai objek langsung menjadi',opts:['книга','книгу','книге','книги'],a:1},
   {t:'mcq',q:'Maskulin bernyawa dalam akusatif memakai bentuk',opts:['nominatif','genitif','datif','instrumental'],a:1}]),

G('ru-g6','A2','Предложный падеж','Kasus Preposisional',
  'Selalu didahului preposisi. Dipakai untuk menyatakan tempat dan topik.',
  'в / на + preposisional = di\nо + preposisional = tentang\nAkhiran umum: -е (в школе, о книге)',
  ['в untuk ruang tertutup, на untuk permukaan dan acara.',
   'на работе, на уроке — pengecualian yang harus dihafal.',
   'Kasus ini paling mudah karena akhirannya hampir selalu -е.'],
  [['Я живу в Москве.','Saya tinggal di Moskwa.','Ya zyivu v Moskve.'],
   ['Книга на столе.','Bukunya di atas meja.','Kniga na stole.'],
   ['Мы говорим о работе.','Kami berbicara tentang pekerjaan.','My govorim o rabote.']],
  [['Я живу в Москва','Я живу в Москве','Setelah в untuk tempat memakai preposisional.']],
  [{t:'mcq',q:'"Di sekolah" =',opts:['в школа','в школе','в школу','о школе'],a:1},
   {t:'mcq',q:'Preposisi о menuntut kasus',opts:['akusatif','genitif','preposisional','instrumental'],a:2}]),

G('ru-g7','A2','Родительный падеж','Kasus Genitif',
  'Kasus paling sering muncul: kepemilikan, penyangkalan, jumlah, dan setelah banyak preposisi.',
  'Kepemilikan: книга брата\nPenyangkalan: нет времени\nSetelah angka 2–4: два стола',
  ['нет selalu diikuti genitif: у меня нет денег.',
   'Setelah 5 ke atas memakai genitif jamak: пять столов.',
   'Preposisi из, от, до, без, для menuntut genitif.'],
  [['Это книга брата.','Ini buku saudara laki-laki.','Eto kniga brata.'],
   ['У меня нет времени.','Saya tidak punya waktu.','U menya net vremeni.'],
   ['Я из Индонезии.','Saya dari Indonesia.','Ya iz Indonezii.']],
  [['У меня нет время','У меня нет времени','Setelah нет wajib genitif.']],
  [{t:'mcq',q:'Setelah нет dipakai kasus',opts:['nominatif','akusatif','genitif','datif'],a:2},
   {t:'mcq',q:'Setelah angka 5 ke atas dipakai',opts:['nominatif tunggal','genitif tunggal','genitif jamak','akusatif'],a:2}]),

G('ru-g8','B1','Глаголы движения','Kata Kerja Gerak',
  'Rusia membedakan gerak searah dan gerak berulang — pembeda yang tidak ada di bahasa lain.',
  'идти searah jalan kaki · ходить berulang jalan kaki\nехать searah berkendara · ездить berulang berkendara',
  ['Я иду в школу = sedang menuju sekolah sekarang.',
   'Я хожу в школу = saya biasa ke sekolah.',
   'Awalan mengubah arah: при- datang, у- pergi, вы- keluar.'],
  [['Я иду домой.','Saya sedang pulang.','Ya idu domoy.'],
   ['Я хожу в спортзал три раза в неделю.','Saya ke gim tiga kali seminggu.','Ya khozyu v sportzal tri raza v nedelyu.'],
   ['Мы едем в Москву.','Kami sedang menuju Moskwa.','My yedem v Moskvu.']],
  [['Я хожу домой сейчас','Я иду домой сейчас','Gerak searah saat ini memakai идти.']],
  [{t:'mcq',q:'Kebiasaan berulang jalan kaki memakai',opts:['идти','ходить','ехать','ездить'],a:1},
   {t:'mcq',q:'"Kami sedang menuju Moskwa" (berkendara) =',opts:['Мы ездим','Мы едем','Мы идём','Мы ходим'],a:1}]),

G('ru-g9','B1','Дательный & Творительный','Datif & Instrumental',
  'Dua kasus terakhir: penerima dan alat/pendamping.',
  'Datif = penerima (мне, брату) · dipakai setelah нравиться, помогать\nInstrumental = alat/pendamping (с другом, ручкой)',
  ['Мне нравится — konstruksi paling sering dipakai untuk "saya suka".',
   'с + instrumental = bersama.',
   'работать инженером = bekerja sebagai insinyur.'],
  [['Мне нравится этот город.','Saya menyukai kota ini.','Mne nravitsya etot gorod.'],
   ['Я пишу ручкой.','Saya menulis dengan pena.','Ya pisyu ruckoy.'],
   ['Я иду с другом.','Saya pergi bersama teman.','Ya idu s drugom.']],
  [['Я нравится этот город','Мне нравится этот город','Dengan нравиться, ORANGnya datif (мне) dan BENDA yang disukai jadi subjek. Penutur Indonesia sering memakai pola "saya suka" apa adanya.']],
  [{t:'mcq',q:'"Saya suka" memakai kasus',opts:['nominatif','datif','genitif','akusatif'],a:1},
   {t:'mcq',q:'"Dengan teman" =',opts:['с друга','с другом','с другу','с друге'],a:1}]),

G('ru-g10','B2','Вид глагола','Aspek Kata Kerja',
  'Inti bahasa Rusia. Salah aspek mengubah makna, bukan sekadar waktu.',
  'Imperfektif = proses, kebiasaan, belum selesai\nPerfektif = selesai, sekali, ada hasil',
  ['Perfektif tidak punya bentuk sekarang — hanya lampau dan depan.',
   'Kata keterangan menolong: часто, всегда → imperfektif; вдруг, уже → perfektif.',
   'Dalam larangan selalu memakai imperfektif: не читай!'],
  [['Я читал книгу.','Saya sedang membaca buku (belum tentu selesai).','Ya cital knigu.'],
   ['Я прочитал книгу.','Saya selesai membaca buku.','Ya procital knigu.'],
   ['Я буду писать письмо.','Saya akan menulis surat (prosesnya).','Ya budu pisat pismo.']],
  [['Я буду прочитать','Я прочитаю','Perfektif tidak dipakai dengan буду.']],
  [{t:'mcq',q:'Perfektif punya bentuk waktu',opts:['sekarang saja','lampau dan depan','ketiganya','tidak punya'],a:1},
   {t:'mcq',q:'"Saya selesai membaca" =',opts:['я читал','я прочитал','я читаю','я буду читать'],a:1}])
];

const PHRASES = [
{ g:'Di Restoran', items:[
  ['Меню, пожалуйста','menyú, pazhálusta','Menunya, tolong'],
  ['Я буду это','ya búdu éta','Saya pesan ini'],
  ['Что вы посоветуете?','shto vy pasavyétuyete?','Apa yang Anda sarankan?'],
  ['Счёт, пожалуйста','shchyot, pazhálusta','Bill, tolong'],
  ['Очень вкусно','óchen fkúsna','Enak sekali'],
  ['Без сахара','byes sákhara','Tanpa gula']
]},
{ g:'Belanja', items:[
  ['Сколько стоит?','skólka stóit?','Berapa harganya?'],
  ['Это дорого','éta dóraga','Ini mahal'],
  ['Есть скидка?','yest skítka?','Ada diskon?'],
  ['Можно посмотреть?','mózhna pasmatryét?','Boleh saya lihat?'],
  ['Я возьму это','ya vazmú éta','Saya ambil ini']
]},
{ g:'Transportasi', items:[
  ['Где метро?','gdye metró?','Di mana metro?'],
  ['Как доехать до центра?','kak dayékhat da tséntra?','Bagaimana ke pusat kota?'],
  ['Сколько времени займёт?','skólka vryémeni zaymyót?','Berapa lama?'],
  ['Остановите здесь','astanavíte zdyes','Berhenti di sini'],
  ['Один билет, пожалуйста','adín bilyét, pazhálusta','Satu tiket, tolong']
]},
{ g:'Keadaan Darurat', items:[
  ['Помогите!','pamagítye!','Tolong!'],
  ['Вызовите скорую','výzavitye skóruyu','Panggil ambulans'],
  ['Мне плохо','mnye plókha','Saya merasa tidak enak'],
  ['Где больница?','gdye balnítsa?','Di mana rumah sakit?'],
  ['Я потерял паспорт','ya pateryál pásport','Paspor saya hilang'],
  ['Я заблудился','ya zabludílsya','Saya tersesat']
]}
];

export const COURSE = {
  levels: [
  { id:'A1', name:'Элементарный', nameId:'Elementer', exam:'TORFL Elementer (A1) · ±780 kata', hours:80,
    target:'Membaca Kiril dengan lancar dan bertahan pada situasi paling dasar.',
    cando:['Membaca dan menulis 33 huruf Kiril','Memperkenalkan diri',
           'Menyebut angka, waktu, dan hari','Mengenali jenis kelamin kata benda'],
    units:[
      U('ru-a1-1','Cyrillic','Abjad Kiril','Menguasai 33 huruf, terutama enam huruf yang menipu.',
        { script:['kiril'], grammar:['ru-g1'], phrases:['Sapaan'], skills:['speak'],
          cando:['Membaca kata Rusia tanpa transliterasi','Mengenali huruf В Н Р С У Х'] }),
      U('ru-a1-2','Gender','Jenis Kelamin & Perkenalan','Dasar seluruh sistem akhiran Rusia.',
        { grammar:['ru-g4'], vocab:['ru-v-fam'], phrases:['Perkenalan'], skills:['listen','speak'],
          cando:['Menebak jenis kelamin dari huruf terakhir','Menyesuaikan kata sifat'] }),
      U('ru-a1-3','Numbers','Angka & Waktu','Menyebut angka dengan bentuk kata benda yang tepat.',
        { vocab:['ru-v-num'], grammar:['ru-g5'], phrases:['Sopan santun'], skills:['listen'],
          cando:['Menyebut jam dan tanggal','Memakai kasus akusatif'] })
    ]},

  { id:'A2', name:'Базовый', nameId:'Dasar', exam:'TORFL Dasar (A2) · ±1.300 kata', hours:120,
    target:'Mengurus kebutuhan sehari-hari dan bepergian di kota Rusia.',
    cando:['Memakai kasus preposisional dan genitif','Bertanya arah dan memesan makanan',
           'Menyatakan kepemilikan dan penyangkalan'],
    units:[
      U('ru-a2-1','Location','Menyatakan Tempat','Kasus preposisional dan preposisi в / на.',
        { grammar:['ru-g6'], vocab:['ru-v-place'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Menyatakan lokasi dengan benar','Membedakan в dan на'] }),
      U('ru-a2-2','Genitive','Kasus Genitif','Kasus yang paling sering muncul di teks nyata.',
        { grammar:['ru-g7'], vocab:['ru-v-food'], phrases:['Di Restoran','Belanja'], skills:['listen','speak'],
          cando:['Menyatakan kepemilikan','Menyangkal dengan нет'] })
    ]},

  { id:'B1', name:'ТРКИ-1', nameId:'Menengah', exam:'TORFL-1 (B1) · ±2.300 kata', hours:200,
    target:'Syarat umum masuk program sarjana di Rusia.',
    cando:['Memakai kata kerja gerak dengan benar','Menguasai kasus datif dan instrumental',
           'Bercerita tentang kegiatan sehari-hari'],
    units:[
      U('ru-b1-1','Motion Verbs','Kata Kerja Gerak','Pembeda khas Rusia: searah versus berulang.',
        { grammar:['ru-g8'], vocab:['ru-v-verb'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Memilih идти/ходить dan ехать/ездить','Memahami awalan arah','Memilih idti/khodit dan yekhat/yezdit'] }),
      U('ru-b1-2','Dative & Instrumental','Datif & Instrumental','Dua kasus terakhir yang melengkapi sistem.',
        { grammar:['ru-g9'], vocab:['ru-v-abs'], phrases:['Keadaan Darurat'], skills:['listen'],
          cando:['Memakai мне нравится','Menyatakan alat dan pendamping','Memakai mne nravitsya'] })
    ]},

  { id:'B2', name:'ТРКИ-2', nameId:'Menengah Atas', exam:'TORFL-2 (B2) · ±5.000 kata', hours:300,
    target:'Mampu kuliah di sebagian besar jurusan dan bekerja profesional.',
    cando:['Menguasai aspek kata kerja','Membaca artikel surat kabar',
           'Menulis surat resmi dan karangan'],
    units:[
      U('ru-b2-1','Aspect','Aspek Kata Kerja','Bagian tersulit yang paling menahan peserta.',
        { grammar:['ru-g10','ru-g3'], vocab:['ru-v-abs'], phrases:['Di Restoran'], skills:['listen','speak'],
          cando:['Memilih imperfektif atau perfektif','Memahami larangan dan hasil'] })
    ]},

  { id:'C1', name:'ТРКИ-3', nameId:'Mahir', exam:'TORFL-3 (C1) · ±7.000 kata', hours:400,
    target:'Setara pekerja media, penerjemah, dan akademisi.',
    cando:['Memahami teks abstrak','Berdiskusi tentang isu sosial','Menulis esai berargumen'],
    units:[
      U('ru-c1-1','Academic Russian','Rusia Akademik','Kosakata abstrak dan gaya tulis formal.',
        { vocab:['ru-v-abs'], grammar:['ru-g10'], phrases:['Belanja'], skills:['listen','speak'],
          cando:['Memakai kosakata abstrak','Menyusun argumen tertulis'] })
    ]},

  { id:'C2', name:'ТРКИ-4', nameId:'Sangat Mahir', exam:'TORFL-4 (C2) · ±8.000+ kata', hours:600,
    target:'Nyaris setara penutur asli terdidik; syarat mengajar bahasa Rusia.',
    cando:['Memahami sastra dan ragam gaya','Menerjemahkan dua arah','Mengajar bahasa Rusia'],
    units:[
      U('ru-c2-1','Mastery','Penguasaan','Menyatukan seluruh keterampilan.',
        { vocab:['ru-v-abs'], grammar:['ru-g10'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Menguasai nuansa gaya','Menulis setara penutur terdidik'] })
    ]}
  ],
  grammar: GRAMMAR,
  vocab: VOCAB,
  phrases: PHRASES
};
