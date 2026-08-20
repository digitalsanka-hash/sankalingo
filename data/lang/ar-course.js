/* KURSUS ARAB — enam tingkat CEFR A1–C2 (Arab Baku Modern). */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const G = (id, level, title, titleId, why, form, notes, ex, traps, drills) =>
  ({ id, level, title, titleId, why, form, notes, ex, traps, drills });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

const VOCAB = [
V('ar-v-num','Angka, Waktu & Hari','A1',
  'Angka Arab ditulis kiri ke kanan meski kalimatnya kanan ke kiri.',
  [['وَاحِد','wahid','satu'],['اِثْنَان','itsnan','dua'],['ثَلَاثَة','tsalatsah','tiga'],
   ['أَرْبَعَة','arba\'ah','empat'],['خَمْسَة','khamsah','lima'],['سِتَّة','sittah','enam'],
   ['سَبْعَة','sab\'ah','tujuh'],['ثَمَانِيَة','tsamaniyah','delapan'],['تِسْعَة','tis\'ah','sembilan'],
   ['عَشَرَة','asyarah','sepuluh'],['مِئَة','mi\'ah','seratus'],['أَلْف','alf','seribu'],
   ['سَاعَة','sa\'ah','jam'],['دَقِيقَة','daqiqah','menit'],['يَوْم','yaum','hari'],
   ['أُسْبُوع','usbu\'','minggu'],['شَهْر','syahr','bulan'],['سَنَة','sanah','tahun'],
   ['الأَحَد','al-ahad','Minggu'],['الاِثْنَيْن','al-itsnain','Senin'],['الثُّلَاثَاء','ats-tsulatsa','Selasa'],
   ['الأَرْبِعَاء','al-arbi\'a','Rabu'],['الخَمِيس','al-khamis','Kamis'],['الجُمُعَة','al-jum\'ah','Jumat'],
   ['السَّبْت','as-sabt','Sabtu'],['صَبَاح','shabah','pagi'],['ظُهْر','zhuhr','tengah hari'],
   ['مَسَاء','masa','sore'],['لَيْل','lail','malam'],['الآن','al-an','sekarang']]),

V('ar-v-fam','Keluarga & Orang','A1',
  'Banyak kata ini sudah masuk bahasa Indonesia — modal awal yang jarang disadari.',
  [['عَائِلَة','a\'ilah','keluarga'],['أَب','ab','ayah'],['أُم','umm','ibu'],['أَخ','akh','saudara laki-laki'],
   ['أُخْت','ukht','saudara perempuan'],['اِبْن','ibn','anak laki-laki'],['بِنْت','bint','anak perempuan'],
   ['جَد','jadd','kakek'],['جَدَّة','jaddah','nenek'],['زَوْج','zauj','suami'],['زَوْجَة','zaujah','istri'],
   ['رَجُل','rajul','laki-laki'],['اِمْرَأَة','imra\'ah','perempuan'],['طِفْل','thifl','anak kecil'],
   ['صَدِيق','shadiq','teman'],['مُدَرِّس','mudarris','guru'],['طَالِب','thalib','pelajar'],
   ['طَبِيب','thabib','dokter'],['مُهَنْدِس','muhandis','insinyur'],['مُوَظَّف','muwazhzhaf','pegawai'],
   ['اِسْم','ism','nama'],['عُمْر','umr','umur'],['بَلَد','balad','negara'],
   ['مِصْر','mishr','Mesir'],['إِنْدُونِيسِيَا','indunisiya','Indonesia'],['نَاس','nas','orang-orang'],
   ['جَار','jar','tetangga'],['ضَيْف','dhaif','tamu'],['أُسْتَاذ','ustadz','ustaz / dosen'],
   ['شَيْخ','syaikh','syekh']]),

V('ar-v-food','Makanan & Minuman','A2',
  'Kosakata bertahan hidup di rumah makan dan pasar.',
  [['طَعَام','tha\'am','makanan'],['شَرَاب','syarab','minuman'],['خُبْز','khubz','roti'],
   ['أَرُز','aruzz','nasi'],['لَحْم','lahm','daging'],['دَجَاج','dajaj','ayam'],['سَمَك','samak','ikan'],
   ['بَيْض','baidh','telur'],['حَلِيب','halib','susu'],['مَاء','ma\'','air'],['شَاي','syai','teh'],
   ['قَهْوَة','qahwah','kopi'],['عَصِير','ashir','jus'],['فَاكِهَة','fakihah','buah'],
   ['تُفَّاح','tuffah','apel'],['مَوْز','mauz','pisang'],['خُضَار','khudhar','sayuran'],
   ['سُكَّر','sukkar','gula'],['مِلْح','milh','garam'],['زَيْت','zait','minyak'],
   ['حَار','harr','pedas / panas'],['حُلْو','hulw','manis'],['مَالِح','malih','asin'],
   ['لَذِيذ','ladzidz','enak'],['جَائِع','ja\'i','lapar'],['عَطْشَان','athsyan','haus'],
   ['فُطُور','futhur','sarapan'],['غَدَاء','ghada','makan siang'],['عَشَاء','asya','makan malam'],
   ['مَطْعَم','math\'am','restoran']]),

V('ar-v-place','Tempat & Arah','A2',
  'Bertanya arah dan menyebut lokasi.',
  [['بَيْت','bait','rumah'],['مَدْرَسَة','madrasah','sekolah'],['جَامِعَة','jami\'ah','universitas'],
   ['مَكْتَب','maktab','kantor'],['سُوق','suq','pasar'],['مَتْجَر','matjar','toko'],
   ['مُسْتَشْفَى','mustasyfa','rumah sakit'],['صَيْدَلِيَّة','shaidaliyyah','apotek'],['بَنْك','bank','bank'],
   ['مَطَار','mathar','bandara'],['مَحَطَّة','mahaththah','stasiun'],['فُنْدُق','funduq','hotel'],
   ['حَمَّام','hammam','kamar mandi'],['حَدِيقَة','hadiqah','taman'],['مَكْتَبَة','maktabah','perpustakaan'],
   ['مَسْجِد','masjid','masjid'],['شَارِع','syari\'','jalan'],['مَدِينَة','madinah','kota'],
   ['قَرْيَة','qaryah','desa'],['فَوْق','fauq','atas'],['تَحْت','tahta','bawah'],
   ['أَمَام','amama','depan'],['خَلْف','khalfa','belakang'],['بَيْن','baina','antara'],
   ['يَمِين','yamin','kanan'],['يَسَار','yasar','kiri'],['قَرِيب','qarib','dekat'],
   ['بَعِيد','ba\'id','jauh'],['هُنَا','huna','di sini'],['هُنَاك','hunak','di sana']]),

V('ar-v-verb','Kata Kerja Inti','A2',
  'Kata kerja Arab ditulis dalam bentuk lampau orang ketiga — itulah bentuk kamusnya.',
  [['ذَهَبَ','dzahaba','pergi'],['جَاءَ','ja\'a','datang'],['رَجَعَ','raja\'a','kembali'],
   ['أَكَلَ','akala','makan'],['شَرِبَ','syariba','minum'],['نَظَرَ','nazhara','melihat'],
   ['سَمِعَ','sami\'a','mendengar'],['تَكَلَّمَ','takallama','berbicara'],['قَرَأَ','qara\'a','membaca'],
   ['كَتَبَ','kataba','menulis'],['اِشْتَرَى','isytara','membeli'],['بَاعَ','ba\'a','menjual'],
   ['عَمِلَ','amila','bekerja'],['دَرَسَ','darasa','belajar'],['نَامَ','nama','tidur'],
   ['اِسْتَيْقَظَ','istaiqazha','bangun'],['جَلَسَ','jalasa','duduk'],['وَقَفَ','waqafa','berdiri'],
   ['فَتَحَ','fataha','membuka'],['أَغْلَقَ','aghlaqa','menutup'],['سَأَلَ','sa\'ala','bertanya'],
   ['أَجَابَ','ajaba','menjawab'],['فَهِمَ','fahima','memahami'],['عَرَفَ','arafa','mengetahui'],
   ['أَرَادَ','arada','menginginkan'],['اِسْتَطَاعَ','istatha\'a','mampu'],['بَدَأَ','bada\'a','memulai'],
   ['اِنْتَهَى','intaha','selesai'],['سَاعَدَ','sa\'ada','membantu'],['اِنْتَظَرَ','intazhara','menunggu']]),

V('ar-v-abs','Gagasan & Kerja','B1',
  'Kosakata untuk berdiskusi dan membaca berita.',
  [['مُجْتَمَع','mujtama\'','masyarakat'],['ثَقَافَة','tsaqafah','budaya'],['اِقْتِصَاد','iqtishad','ekonomi'],
   ['سِيَاسَة','siyasah','politik'],['بِيئَة','bi\'ah','lingkungan'],['تَعْلِيم','ta\'lim','pendidikan'],
   ['تِقْنِيَة','tiqniyah','teknologi'],['مَعْلُومَات','ma\'lumat','informasi'],['مُشْكِلَة','musykilah','masalah'],
   ['حَل','hall','solusi'],['سَبَب','sabab','sebab'],['نَتِيجَة','natijah','hasil'],
   ['تَأْثِير','ta\'tsir','pengaruh'],['تَغْيِير','taghyir','perubahan'],['تَطْوِير','tathwir','pengembangan'],
   ['فَرْق','farq','perbedaan'],['عَلَاقَة','alaqah','hubungan'],['رَأْي','ra\'y','pendapat'],
   ['سَبِيل','sabil','cara / jalan'],['شَرْط','syarth','syarat'],['فُرْصَة','furshah','kesempatan'],
   ['مَسْؤُولِيَّة','mas\'uliyyah','tanggung jawab'],['حَق','haqq','hak'],['وَاجِب','wajib','kewajiban'],
   ['قِيمَة','qimah','nilai'],['عَمَل','amal','pekerjaan'],['اِجْتِمَاع','ijtima\'','rapat'],
   ['تَقْرِير','taqrir','laporan'],['عَقْد','aqd','kontrak'],['رَاتِب','ratib','gaji']])
];

const GRAMMAR = [
G('ar-g4','A1','ال التَّعْرِيف','Kata Sandang al-',
  'Menentukan apakah kata benda tertentu atau tidak. Bunyinya berubah pada separuh huruf.',
  'ال + kata benda = kata tertentu\nHuruf syamsiyah (14): lam melebur\nHuruf qamariyah (14): lam tetap dibaca',
  ['الشَّمْس dibaca "asy-syams" — lam tidak terdengar.',
   'القَمَر dibaca "al-qamar" — lam terdengar jelas.',
   'Huruf syamsiyah: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.'],
  [['البَيْت','al-bait — rumah itu','al-bayt'],
   ['الشَّمْس','asy-syams — matahari itu','asy-syams'],
   ['الطَّالِب','ath-thalib — pelajar itu','ath-thaalib']],
  [['al-syams','asy-syams','ش termasuk huruf syamsiyah.']],
  [{t:'mcq',q:'الشمس dibaca',opts:['al-syams','asy-syams','as-syams','al-samsu'],a:1},
   {t:'mcq',q:'Berapa jumlah huruf syamsiyah?',opts:['10','12','14','16'],a:2}]),

G('ar-g5','A1','الضَّمَائِر','Kata Ganti',
  'Bahasa Arab membedakan jenis kelamin bahkan pada kata ganti "kamu" dan "mereka".',
  'أَنَا saya · أَنْتَ kamu (lk) · أَنْتِ kamu (pr)\nهُوَ dia (lk) · هِيَ dia (pr)\nنَحْنُ kami · هُمْ mereka (lk) · هُنَّ mereka (pr)',
  ['Kata ganti kepemilikan menempel di belakang kata: كِتَابِي (buku saya).',
   'كِتَابُكَ = bukumu (laki-laki), كِتَابُكِ = bukumu (perempuan).',
   'Salah jenis kelamin terdengar sangat jelas bagi penutur asli.'],
  [['أَنَا طَالِب.','Saya pelajar (laki-laki).','anaa thaalib.'],
   ['أَنْتِ طَالِبَة.','Kamu pelajar (perempuan).','anti thaalibah.'],
   ['هَذَا كِتَابِي.','Ini buku saya.','hadzaa kitaabii.']],
  [['أَنْتَ طَالِبَة','أَنْتِ طَالِبَة','Kata ganti harus cocok jenis kelaminnya.']],
  [{t:'mcq',q:'"Kamu" untuk perempuan adalah',opts:['أَنْتَ','أَنْتِ','هِيَ','أَنَا'],a:1},
   {t:'mcq',q:'"Buku saya" =',opts:['كِتَابُكَ','كِتَابِي','كِتَابُهُ','الكِتَاب'],a:1}]),

G('ar-g6','A2','الجُمْلَة الفِعْلِيَّة','Kalimat Berkata Kerja',
  'Arab baku sering menaruh kata kerja di DEPAN — kebalikan dari bahasa Indonesia.',
  'Kata Kerja + Pelaku + Objek\nكَتَبَ الطَّالِبُ الدَّرْسَ.',
  ['Urutan Kata Kerja–Subjek–Objek adalah bentuk baku tulisan.',
   'Dalam percakapan, urutan Subjek–Kata Kerja juga lazim.',
   'Kata kerja menyesuaikan jenis kelamin pelakunya.'],
  [['ذَهَبَ الوَلَدُ إِلَى المَدْرَسَةِ.','Anak laki-laki itu pergi ke sekolah.','dzahaba al-waladu ilaa al-madrasahi.'],
   ['قَرَأَتْ البِنْتُ الكِتَابَ.','Anak perempuan itu membaca buku.','qaraat al-bintu al-kitaaba.'],
   ['يَدْرُسُ الطُّلَّابُ اللُّغَةَ.','Para pelajar mempelajari bahasa itu.','yadrusu ath-thullaabu al-lughaha.']],
  [['ذَهَبَتْ الوَلَدُ','ذَهَبَ الوَلَدُ','Pelaku laki-laki memakai kata kerja bentuk laki-laki.']],
  [{t:'mcq',q:'Urutan baku kalimat berkata kerja adalah',opts:['S-P-O','P-S-O','O-P-S','S-O-P'],a:1},
   {t:'mcq',q:'Kata kerja menyesuaikan',opts:['jumlah saja','jenis kelamin pelaku','waktu saja','tidak menyesuaikan'],a:1}]),

G('ar-g7','A2','الماضي & المضارع','Lampau & Sekarang',
  'Dua bentuk waktu utama. Lampau memakai akhiran, sekarang memakai awalan.',
  'Lampau: كَتَبَ · كَتَبْتُ · كَتَبْتَ\nSekarang: يَكْتُبُ · أَكْتُبُ · تَكْتُبُ',
  ['Bentuk kamus adalah lampau orang ketiga laki-laki: كَتَبَ.',
   'Awalan sekarang: أ (saya), تـ (kamu/dia pr), يـ (dia lk), نـ (kami).',
   'Negatif lampau memakai مَا, negatif sekarang memakai لَا.'],
  [['كَتَبْتُ رِسَالَة.','Saya menulis surat.','katabtu risaalah.'],
   ['أَذْهَبُ إِلَى العَمَل.','Saya pergi ke tempat kerja.','adzhabu ilaa al-amal.'],
   ['لَا أَفْهَمُ.','Saya tidak mengerti.','laa afhamu.']],
  [['أَنَا كَتَبَ','أَنَا كَتَبْتُ','Bentuk lampau untuk "saya" berakhiran ـتُ.']],
  [{t:'mcq',q:'Awalan bentuk sekarang untuk "saya" adalah',opts:['يـ','تـ','أ','نـ'],a:2},
   {t:'mcq',q:'Negatif bentuk sekarang memakai',opts:['مَا','لَا','لَمْ','لَنْ'],a:1}]),

G('ar-g8','B1','الإِضَافَة','Susunan Milik',
  'Cara Arab menyatakan kepemilikan antar kata benda — tanpa kata "milik".',
  'Kata 1 (tanpa ال) + Kata 2 (dengan ال)\nبَابُ البَيْتِ = pintu rumah itu',
  ['Kata pertama TIDAK PERNAH memakai ال.',
   'Kata kedua berkasus genitif (berbaris kasrah).',
   'Bisa berantai: بَابُ بَيْتِ المُدَرِّسِ = pintu rumah guru itu.'],
  [['كِتَابُ الطَّالِبِ','buku pelajar itu','kitaabu ath-thaalibi'],
   ['مِفْتَاحُ السَّيَّارَةِ','kunci mobil itu','miftaahu as-sayyaarahi'],
   ['مُدِيرُ المَدْرَسَةِ','kepala sekolah itu','mudiiru al-madrasahi']],
  [['الكِتَابُ الطَّالِبِ','كِتَابُ الطَّالِبِ','Kata pertama tidak memakai ال.']],
  [{t:'mcq',q:'Dalam إضافة, kata pertama',opts:['selalu memakai ال','tidak pernah memakai ال','boleh keduanya','memakai tanwin'],a:1},
   {t:'mcq',q:'"Pintu rumah" =',opts:['البَابُ البَيْتِ','بَابُ البَيْتِ','بَابٌ بَيْتٌ','البَابُ بَيْتٍ'],a:1}]),

G('ar-g9','B1','الجَمْع','Bentuk Jamak',
  'Arab punya jamak beraturan dan jamak "pecah" yang harus dihafal per kata.',
  'Jamak laki-laki: ـُونَ / ـِينَ\nJamak perempuan: ـَات\nJamak taksir: pola berubah (كِتَاب → كُتُب)',
  ['Sebagian besar kata benda memakai jamak taksir — hafalkan bersama katanya.',
   'Benda mati jamak diperlakukan sebagai perempuan tunggal.',
   'مُدَرِّس → مُدَرِّسُونَ · مُدَرِّسَة → مُدَرِّسَات · بَيْت → بُيُوت.'],
  [['الكُتُبُ جَدِيدَة.','Buku-buku itu baru.','al-kutubu jadiidah.'],
   ['المُدَرِّسُونَ هُنَا.','Para guru ada di sini.','al-mudarrisuuna hunaa.'],
   ['الطَّالِبَاتُ يَدْرُسْنَ.','Para pelajar perempuan sedang belajar.','ath-thaalibaatu yadrusna.']],
  [['كِتَابَات (untuk buku)','كُتُب','كتاب memakai jamak taksir.']],
  [{t:'mcq',q:'Jamak dari بَيْت adalah',opts:['بَيْتَات','بُيُوت','بَيْتُونَ','بَيْتِين'],a:1},
   {t:'mcq',q:'Benda mati jamak diperlakukan sebagai',opts:['laki-laki jamak','perempuan tunggal','laki-laki tunggal','perempuan jamak'],a:1}]),

G('ar-g10','B2','أَوْزَان الفِعْل','Sepuluh Pola Kata Kerja',
  'Satu akar dimasukkan ke sepuluh pola menghasilkan sepuluh makna berbeda — inilah efisiensi Arab.',
  'I فَعَلَ dasar · II فَعَّلَ intensif/kausatif · III فَاعَلَ timbal balik\nIV أَفْعَلَ kausatif · V تَفَعَّلَ refleksif · VII اِنْفَعَلَ pasif\nVIII اِفْتَعَلَ · X اِسْتَفْعَلَ meminta',
  ['عَلِمَ tahu → عَلَّمَ mengajar → تَعَلَّمَ belajar → اِسْتَعْلَمَ meminta informasi.',
   'Mengenali pola membuat kata baru bisa ditebak tanpa kamus.',
   'Pola X sering berarti meminta atau menganggap.'],
  [['كَتَبَ / كَاتَبَ / اِكْتَتَبَ','menulis / berkirim surat / mendaftar','kataba / kaataba / iktataba'],
   ['خَرَجَ / أَخْرَجَ / اِسْتَخْرَجَ','keluar / mengeluarkan / mengekstrak','kharaja / akhraja / istakhraja'],
   ['قَبِلَ / قَابَلَ / اِسْتَقْبَلَ','menerima / bertemu / menyambut','qabila / qaabala / istaqbala']],
  [['Menghafal tiap kata terpisah','Kenali akar + polanya','Jauh lebih lambat dan mudah lupa.']],
  [{t:'mcq',q:'Pola X (اِسْتَفْعَلَ) sering berarti',opts:['dasar','meminta','timbal balik','pasif'],a:1},
   {t:'mcq',q:'Dari عَلِمَ, "mengajar" adalah',opts:['أَعْلَمَ','عَلَّمَ','تَعَلَّمَ','اِسْتَعْلَمَ'],a:1}])
];

const PHRASES = [
{ g:'Di Rumah Makan', items:[
  ['القَائِمَة مِنْ فَضْلِك','al-qa\'imah min fadhlik','Tolong menunya'],
  ['أُرِيدُ هَذَا','uridu hadza','Saya mau ini'],
  ['بِدُونِ سُكَّر','bidunis sukkar','Tanpa gula'],
  ['الحِسَاب مِنْ فَضْلِك','al-hisab min fadhlik','Tolong tagihannya'],
  ['هَل هَذَا حَلَال؟','hal hadza halal?','Apakah ini halal?'],
  ['لَذِيذ جِدًّا','ladzidz jiddan','Enak sekali']
]},
{ g:'Belanja', items:[
  ['كَم الثَّمَن؟','kamits tsaman?','Berapa harganya?'],
  ['غَالٍ جِدًّا','ghalin jiddan','Terlalu mahal'],
  ['هَل يُمْكِن التَّخْفِيض؟','hal yumkinut takhfidh?','Bisa kurang?'],
  ['أُرِيدُ حَجْمًا أَكْبَر','uridu hajman akbar','Saya mau ukuran lebih besar'],
  ['سَآخُذُهُ','sa\'akhudzuhu','Saya ambil ini']
]},
{ g:'Transportasi', items:[
  ['أَيْنَ المَحَطَّة؟','ainal mahaththah?','Di mana stasiunnya?'],
  ['كَم يَسْتَغْرِق؟','kam yastaghriq?','Berapa lama?'],
  ['إِلَى المَطَار مِنْ فَضْلِك','ilal mathar min fadhlik','Ke bandara, tolong'],
  ['قِف هُنَا مِنْ فَضْلِك','qif huna min fadhlik','Tolong berhenti di sini'],
  ['هَل هَذَا الطَّرِيق صَحِيح؟','hal hadzath thariq shahih?','Apakah ini jalan yang benar?']
]},
{ g:'Keadaan Darurat', items:[
  ['النَّجْدَة','an-najdah','Tolong!'],
  ['اِتَّصِل بِالإِسْعَاف','ittashil bil is\'af','Panggil ambulans'],
  ['أَنَا مَرِيض','ana maridh','Saya sakit'],
  ['أَيْنَ المُسْتَشْفَى؟','ainal mustasyfa?','Di mana rumah sakit?'],
  ['فَقَدْتُ جَوَازَ سَفَرِي','faqadtu jawaza safari','Paspor saya hilang'],
  ['ضَلَلْتُ الطَّرِيق','dhalaltuth thariq','Saya tersesat']
]}
];

export const COURSE = {
  levels: [
  { id:'A1', name:'A1', nameId:'Pemula', exam:'CEFR A1', hours:80,
    target:'Membaca huruf hijaiyah berharakat dan menyusun kalimat paling dasar.',
    cando:['Membaca dan menulis 28 huruf dalam empat bentuk sambung',
           'Membaca kata berharakat dengan benar','Memperkenalkan diri','Menyebut angka dan waktu'],
    units:[
      U('ar-a1-1','The Alphabet','Huruf Hijaiyah','Menguasai 28 huruf beserta bentuk sambungnya.',
        { script:['huruf'], grammar:['ar-g4'], phrases:['Sapaan'], skills:['speak'],
          cando:['Menulis 28 huruf dengan urutan goresan benar','Mengenali empat bentuk sambung'] }),
      U('ar-a1-2','Pronouns','Kata Ganti & Perkenalan','Kalimat pertama yang bisa langsung dipakai.',
        { grammar:['ar-g5','ar-g1'], vocab:['ar-v-fam'], phrases:['Perkenalan'], skills:['listen','speak'],
          cando:['Memakai kata ganti sesuai jenis kelamin','Menyusun kalimat nominal'] }),
      U('ar-a1-3','Numbers','Angka & Waktu','Menyebut angka, jam, dan hari.',
        { vocab:['ar-v-num'], grammar:['ar-g2'], phrases:['Sopan santun'], skills:['listen'],
          cando:['Menyebut angka 1–1.000','Menyebut hari dan waktu'] })
    ]},

  { id:'A2', name:'A2', nameId:'Dasar', exam:'CEFR A2', hours:120,
    target:'Mengurus keperluan sehari-hari: makan, belanja, bepergian.',
    cando:['Menyusun kalimat berkata kerja','Membedakan bentuk lampau dan sekarang',
           'Memesan makanan dan menawar harga'],
    units:[
      U('ar-a2-1','Verb Sentences','Kalimat Berkata Kerja','Urutan kata yang khas Arab baku.',
        { grammar:['ar-g6'], vocab:['ar-v-verb'], phrases:['Belanja'], skills:['listen','speak'],
          cando:['Menyusun kalimat Kata Kerja–Subjek–Objek','Menyesuaikan kata kerja dengan pelaku'] }),
      U('ar-a2-2','Tenses','Lampau & Sekarang','Dua bentuk waktu utama.',
        { grammar:['ar-g7'], vocab:['ar-v-food','ar-v-place'], phrases:['Di Rumah Makan','Transportasi'],
          skills:['listen','speak'],
          cando:['Membentuk kata kerja lampau dan sekarang','Menyangkal dengan لا dan ما'] })
    ]},

  { id:'B1', name:'B1', nameId:'Menengah', exam:'CEFR B1', hours:180,
    target:'Mengikuti percakapan sehari-hari dan membaca teks tanpa harakat.',
    cando:['Memakai susunan milik (idhafah)','Membentuk jamak dengan benar',
           'Membaca teks pendek tanpa harakat'],
    units:[
      U('ar-b1-1','Possession','Susunan Milik','Struktur idhafah yang muncul di setiap teks.',
        { grammar:['ar-g8'], vocab:['ar-v-abs'], phrases:['Transportasi'], skills:['listen'],
          cando:['Menyusun idhafah bertingkat','Mengenali kasus genitif'] }),
      U('ar-b1-2','Plurals','Bentuk Jamak','Jamak beraturan dan jamak pecah.',
        { grammar:['ar-g9'], vocab:['ar-v-abs'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Membentuk tiga jenis jamak','Menyesuaikan kata sifat pada jamak'] })
    ]},

  { id:'B2', name:'B2', nameId:'Menengah Atas', exam:'CEFR B2', hours:250,
    target:'Membaca surat kabar dan mengikuti diskusi; ambang kuliah di Timur Tengah.',
    cando:['Menguasai sepuluh pola kata kerja','Menebak makna kata baru dari akarnya',
           'Membaca artikel tanpa kamus'],
    units:[
      U('ar-b2-1','Verb Patterns','Sepuluh Pola Kata Kerja','Alat paling efisien dalam bahasa Arab.',
        { grammar:['ar-g10','ar-g3'], vocab:['ar-v-abs'], phrases:['Belanja'], skills:['listen','speak'],
          cando:['Mengenali pola I–X','Menurunkan kata baru dari satu akar'] })
    ]},

  { id:'C1', name:'C1', nameId:'Mahir', exam:'CEFR C1', hours:350,
    target:'Memahami teks klasik dan akademik serta menulis esai berargumen.',
    cando:['Membaca teks tanpa harakat dengan lancar','Menulis esai berargumen',
           'Memahami ragam klasik'],
    units:[
      U('ar-c1-1','Academic Arabic','Arab Akademik','Kosakata abstrak dan gaya tulisan ilmiah.',
        { vocab:['ar-v-abs'], grammar:['ar-g10'], phrases:['Keadaan Darurat'], skills:['listen','speak'],
          cando:['Memakai kosakata abstrak','Menyusun argumen tertulis'] })
    ]},

  { id:'C2', name:'C2', nameId:'Sangat Mahir', exam:'CEFR C2', hours:500,
    target:'Menguasai ragam klasik dan modern, termasuk sastra dan hukum.',
    cando:['Membaca sastra klasik','Menerjemahkan dua arah','Berdebat dalam bahasa Arab baku'],
    units:[
      U('ar-c2-1','Mastery','Penguasaan','Menyatukan seluruh keterampilan.',
        { vocab:['ar-v-abs'], grammar:['ar-g10'], phrases:['Transportasi'], skills:['listen','speak'],
          cando:['Memahami teks klasik','Menulis dengan gaya baku sempurna'] })
    ]}
  ],
  grammar: GRAMMAR,
  vocab: VOCAB,
  phrases: PHRASES
};
