/* ── Perluasan Arab: tingkat B2, C1, C2 ───────────────────────────
   Arab adalah satu-satunya bahasa yang tingkat atasnya masih kosong:
   B2, C1, dan C2 sama-sama menunjuk ar-g10 (pola kata kerja) dan paket
   kosakata B1 yang sama, dengan frasa yang diambil dari pelajaran
   pemula — halaman C2 secara harfiah mengajarkan frasa transportasi.

   Ada satu lubang yang lebih besar lagi: SELURUH materi Arab tidak
   memuat satu pun topik I'RAB. Padahal justru harakat akhir katalah
   yang menandai peran kata dalam kalimat, dan tanpa itu bahasa Arab
   baku tidak bisa dibaca dengan benar. Berkas ini membukanya di B2.

   Susunannya mengikuti urutan yang lazim dipakai pengajaran Arab baku:

     B2  i'rab, kana & inna beserta saudaranya, dan al-mansubat
     C1  bentuk pasif, kalimat syarat, serta masdar dan turunannya
     C2  ungkapan idiomatik dan pembedaan fusha vs 'ammiyyah

   Kolom romanisasi TIDAK ditulis tangan. Semuanya dihitung dari
   js/translit.js, supaya ejaannya persis sama dengan yang diajarkan
   halaman huruf hijaiyah (tha, shad, dzal — bukan diakritik akademis).  */

const V = (id, title, level, note, words) => ({ id, title, level, note, words });
const U = (id, title, titleId, goal, o = {}) => ({ id, title, titleId, goal, ...o });

/* ── Tata bahasa ─────────────────────────────────────────────── */
const GRAMMAR = [

{ id:'ar-p1', level:'B2', title:'الإِعْرَاب', titleId:'Harakat Akhir & Peran Kata',
  why:'Inilah yang membedakan membaca Arab dari menebak Arab. Bahasa Indonesia menandai peran kata lewat URUTAN; bahasa Arab menandainya lewat HARAKAT DI UJUNG KATA. Selama harakat akhir diabaikan, kalimat panjang akan selalu terasa mengambang.',
  form:'Tiga keadaan, masing-masing dengan tandanya:\n' +
       '· مَرْفُوع (rafa\') — tanda ـُ  · pelaku, subjek, khabar\n' +
       '· مَنْصُوب (nashab) — tanda ـَ  · objek, keterangan\n' +
       '· مَجْرُور (jarr)   — tanda ـِ  · sesudah kata depan, dan mudhaf ilaih',
  notes:[
    'Kata benda tak tentu memakai TANWIN: ـٌ ـً ـٍ. Kata bertakrif (ber-ال) memakai harakat tunggal: ـُ ـَ ـِ.',
    'كَتَبَ الطَّالِبُ الدَّرْسَ — الطالبُ pelakunya (rafa\'), الدرسَ objeknya (nashab). Balikkan harakatnya, maka pelajarannya yang menulis pelajar.',
    'Sesudah kata depan SELALU jarr: فِي البَيْتِ، مِنَ المَدْرَسَةِ.',
    'Dalam percakapan sehari-hari harakat akhir sering tidak dibaca (waqf). Tetapi di teks resmi, berita, dan Al-Qur\'an ia menentukan makna.',
    'Inilah alasan seluruh materi Arab di aplikasi ini ditulis berharakat penuh.'
  ],
  ex:[
    ['كَتَبَ الطَّالِبُ الدَّرْسَ.','Pelajar itu menulis pelajaran.','kataba ath-thaalibu ad-darsa.'],
    ['ذَهَبْتُ إِلَى المَدْرَسَةِ.','Saya pergi ke sekolah.','dzahabtu ilaa al-madrasati.'],
    ['قَرَأَ المُدَرِّسُ كِتَابًا جَدِيدًا.','Guru itu membaca sebuah buku baru.','qaraa al-mudarrisu kitaaban jadiidan.'],
    ['البَيْتُ كَبِيرٌ وَنَظِيفٌ.','Rumah itu besar dan bersih.','al-baytu kabiirun wanazhiifun.']
  ],
  traps:[
    ['ذَهَبْتُ إِلَى المَدْرَسَةُ','ذَهَبْتُ إِلَى المَدْرَسَةِ','Sesudah kata depan إلى wajib jarr — berharakat kasrah, bukan dhammah.'],
    ['كَتَبَ الطَّالِبَ الدَّرْسُ','كَتَبَ الطَّالِبُ الدَّرْسَ','Harakat tertukar membalik maknanya menjadi "pelajaran menulis pelajar".'],
    ['قَرَأْتُ كِتَابٌ','قَرَأْتُ كِتَابًا','Objek wajib nashab; tanwin fathah, bukan tanwin dhammah.']
  ],
  drills:[
    { t:'mcq', q:'Objek kalimat (المفعول به) selalu berkeadaan',
      opts:['مرفوع','منصوب','مجرور','tanpa harakat'], a:1 },
    { t:'mcq', q:'Sesudah kata depan فِي, kata bendanya menjadi',
      opts:['مرفوع','منصوب','مجرور','bebas'], a:2 },
    { t:'mcq', q:'"ذَهَبَ الوَلَدُ" — mengapa الولد berharakat dhammah?',
      opts:['karena objek','karena pelaku','karena sesudah kata depan','karena jamak'], a:1 },
    { t:'fill', q:'قَرَأْتُ كِتَابـ__ (objek, tak tentu)', a:['ًا','ا','an'],
      why:'Objek tak tentu memakai tanwin fathah.' }
  ] },

{ id:'ar-p2', level:'B2', title:'كَانَ وَإِنَّ وَأَخَوَاتُهُمَا', titleId:'Kana & Inna Beserta Saudaranya',
  why:'Dua kelompok kata ini MENGUBAH harakat kalimat nominal yang sudah kamu kuasai sejak A1 — dan mengubahnya ke arah yang berlawanan. Inilah ujian sesungguhnya apakah i\'rab sudah kamu pahami atau baru kamu hafal.',
  form:'Kalimat dasar:      البَيْتُ كَبِيرٌ        (keduanya rafa\')\n' +
       'Dengan كَانَ:        كَانَ البَيْتُ كَبِيرًا   (yang KEDUA jadi nashab)\n' +
       'Dengan إِنَّ:        إِنَّ البَيْتَ كَبِيرٌ    (yang PERTAMA jadi nashab)',
  notes:[
    'Saudara كان: أَصْبَحَ (menjadi, di pagi hari), صَارَ (menjadi), لَيْسَ (bukan), مَا زَالَ (masih), ظَلَّ (tetap).',
    'Saudara إنّ: أَنَّ (bahwa), لَكِنَّ (tetapi), لَعَلَّ (semoga), كَأَنَّ (seakan-akan), لَيْتَ (andai).',
    'Cara mengingat yang paling ampuh: كان menekan yang BELAKANG, إنّ menekan yang DEPAN.',
    'لَيْسَ berperilaku seperti كان meski maknanya menyangkal: لَيْسَ الجَوُّ بَارِدًا.',
    'Sesudah لَكِنَّ wajib nashab; tetapi لَكِنْ (tanpa tasydid) tidak mengubah apa pun.'
  ],
  ex:[
    ['كَانَ الجَوُّ جَمِيلًا.','Cuacanya tadi indah.','kaana al-jawwu jamiilan.'],
    ['إِنَّ اللُّغَةَ العَرَبِيَّةَ جَمِيلَةٌ.','Sungguh bahasa Arab itu indah.','inna al-lughata al-arabiyyata jamiilahun.'],
    ['لَيْسَ الطَّرِيقُ طَوِيلًا.','Jalannya tidak panjang.','laysa ath-thariiqu thawiilan.'],
    ['أَعْتَقِدُ أَنَّ الاِمْتِحَانَ صَعْبٌ.','Saya rasa ujiannya sulit.',"a'taqidu anna al-imtihaana sha'bun."]
  ],
  traps:[
    ['كَانَ الجَوُّ جَمِيلٌ','كَانَ الجَوُّ جَمِيلًا','كان membuat bagian KEDUA nashab.'],
    ['إِنَّ البَيْتُ كَبِيرٌ','إِنَّ البَيْتَ كَبِيرٌ','إنّ membuat bagian PERTAMA nashab.'],
    ['لَيْسَ الجَوُّ بَارِدٌ','لَيْسَ الجَوُّ بَارِدًا','ليس ikut aturan كان, bukan aturan إنّ.']
  ],
  drills:[
    { t:'mcq', q:'كَانَ mengubah keadaan bagian mana?',
      opts:['yang pertama','yang kedua','keduanya','tidak mengubah'], a:1 },
    { t:'mcq', q:'إِنَّ mengubah keadaan bagian mana?',
      opts:['yang pertama','yang kedua','keduanya','tidak mengubah'], a:0 },
    { t:'mcq', q:'Mana yang BUKAN saudara كان?',
      opts:['أَصْبَحَ','صَارَ','لَكِنَّ','لَيْسَ'], a:2,
      why:'لكنّ termasuk saudara إنّ, bukan saudara كان.' },
    { t:'mcq', q:'"لَيْسَ الطَّرِيقُ ___" — bentuk yang benar',
      opts:['طَوِيلٌ','طَوِيلًا','طَوِيلٍ','طَوِيل'], a:1 }
  ] },

{ id:'ar-p3', level:'B2', title:'المَنْصُوبَات', titleId:'Keterangan Berharakat Fathah',
  why:'Sekelompok keterangan yang di bahasa Indonesia butuh kata bantu ("dengan", "sebagai", "secara"), tetapi di bahasa Arab cukup ditandai satu harakat. Menguasainya membuat kalimatmu langsung terdengar seperti tulisan Arab, bukan terjemahan.',
  form:'· الحَال — keadaan pelaku saat kejadian: جَاءَ مُسْرِعًا (datang sambil bergegas)\n' +
       '· التَّمْيِيز — penjelas ukuran: اِشْتَرَيْتُ كِيلُو سُكَّرًا (sekilo GULA)\n' +
       '· المَفْعُول المُطْلَق — penegas kata kerja: فَرِحْتُ فَرَحًا شَدِيدًا\n' +
       '· المَفْعُول لِأَجْلِهِ — alasan: قُمْتُ اِحْتِرَامًا لَهُ (berdiri KARENA menghormatinya)',
  notes:[
    'Semuanya berharakat fathah, dan semuanya menjawab pertanyaan yang berbeda.',
    'الحال hampir selalu tak tentu (bertanwin) sementara pelakunya tertentu — itulah penandanya.',
    'المفعول المطلق memakai masdar dari kata kerjanya sendiri; inilah cara Arab menegaskan, menggantikan kata "sangat".',
    'شُكْرًا، عَفْوًا، أَهْلًا، مَرْحَبًا yang kamu pakai sejak A1 sebenarnya adalah المفعول المطلق yang kata kerjanya dibuang.'
  ],
  ex:[
    ['جَاءَ الوَلَدُ مُسْرِعًا.','Anak itu datang sambil bergegas.',"jaa'a al-waladu musri'an."],
    ['شَرِبْتُ كُوبًا مَاءً.','Saya minum segelas air.',"syaribtu kuuban maa'an."],
    ['فَرِحْتُ فَرَحًا شَدِيدًا.','Saya sangat gembira.','farihtu farahan syadiidan.'],
    ['قُمْتُ اِحْتِرَامًا لِلْمُدَرِّسِ.','Saya berdiri untuk menghormati guru.','qumtu ihtiraaman lilmudarrisi.']
  ],
  traps:[
    ['جَاءَ الوَلَدُ مُسْرِعٌ','جَاءَ الوَلَدُ مُسْرِعًا','الحال wajib nashab dan tak tentu.'],
    ['فَرِحْتُ كَثِيرًا جِدًّا','فَرِحْتُ فَرَحًا شَدِيدًا','Cara Arab menegaskan adalah mengulang masdar kata kerjanya, bukan menumpuk kata "sangat".'],
    ['شُكْرٌ','شُكْرًا','Bentuk yang benar memang nashab — ia sisa dari المفعول المطلق.']
  ],
  drills:[
    { t:'mcq', q:'"جَاءَ مُسْرِعًا" — مُسْرِعًا berkedudukan sebagai',
      opts:['مفعول به','حال','تمييز','مضاف إليه'], a:1 },
    { t:'mcq', q:'Seluruh المنصوبات ditandai harakat',
      opts:['dhammah','fathah','kasrah','sukun'], a:1 },
    { t:'mcq', q:'"شُكْرًا" berharakat fathah karena aslinya',
      opts:['objek','حال','مفعول مطلق','تمييز'], a:2 },
    { t:'fill', q:'جَاءَ الوَلَدُ مُسْرِعـ__ (حال)', a:['ًا','ا','an'] }
  ] },

{ id:'ar-p4', level:'C1', title:'المَبْنِي لِلْمَجْهُول', titleId:'Bentuk Pasif',
  why:'Bahasa Arab tidak punya kata bantu untuk pasif. Yang berubah adalah VOKAL DI DALAM kata kerjanya sendiri — dan pelakunya wajib dihapus sepenuhnya. Tanpa memahami ini, kalimat berita Arab akan terbaca terbalik.',
  form:'Lampau:   كَتَبَ → كُتِبَ    (vokal pertama ـُ, vokal sebelum akhir ـِ)\n' +
       'Sekarang: يَكْتُبُ → يُكْتَبُ  (vokal pertama ـُ, vokal sebelum akhir ـَ)\n\n' +
       'Objek kalimat aktif naik menjadi نَائِب الفَاعِل — dan ikut menjadi rafa\'.',
  notes:[
    'Pelaku TIDAK BOLEH disebut. Kalau ingin menyebutnya, kalimatnya harus tetap aktif.',
    'Untuk menyebut perantara dipakai مِنْ قِبَلِ, tetapi ini serapan gaya Eropa dan dihindari dalam tulisan yang baik.',
    'كُتِبَ الدَّرْسُ — الدرسُ kini rafa\' karena ia menggantikan kedudukan pelaku.',
    'Bentuk ini sangat lazim di berita: أُعْلِنَ (diumumkan), ذُكِرَ (disebutkan), قُتِلَ (terbunuh), اُفْتُتِحَ (diresmikan).'
  ],
  ex:[
    ['كُتِبَ الدَّرْسُ.','Pelajaran itu telah ditulis.','kutiba ad-darsu.'],
    ['تُفْتَحُ الأَبْوَابُ فِي الصَّبَاحِ.','Pintu-pintu dibuka pada pagi hari.','tuftahu al-abwaabu fii ash-shabaahi.'],
    ['أُعْلِنَتِ النَّتِيجَةُ أَمْسِ.','Hasilnya diumumkan kemarin.',"u'linati an-natiijatu amsi."],
    ['ذُكِرَ أَنَّ الاِجْتِمَاعَ سَيُؤَجَّلُ.','Disebutkan bahwa rapat akan ditunda.',"dzukira anna al-ijtimaa'a sayuwajjalu."]
  ],
  traps:[
    ['كُتِبَ الدَّرْسُ مِنَ الطَّالِبِ','كَتَبَ الطَّالِبُ الدَّرْسَ','Kalau pelakunya ingin disebut, kalimatnya harus aktif.'],
    ['كُتِبَ الدَّرْسَ','كُتِبَ الدَّرْسُ','Objek yang naik menjadi نائب الفاعل ikut menjadi rafa\'.'],
    ['يُكْتِبُ','يُكْتَبُ','Pasif bentuk sekarang: vokal sebelum akhir adalah fathah, bukan kasrah.']
  ],
  drills:[
    { t:'mcq', q:'Bentuk pasif lampau dari كَتَبَ adalah',
      opts:['كَاتَبَ','كُتِبَ','كَتَّبَ','اِكْتَتَبَ'], a:1 },
    { t:'mcq', q:'Di kalimat pasif, pelakunya',
      opts:['disebut dengan مِن','wajib dihapus','tetap di tempatnya','menjadi jarr'], a:1 },
    { t:'mcq', q:'نَائِب الفَاعِل berkeadaan',
      opts:['مرفوع','منصوب','مجرور','tanpa harakat'], a:0 },
    { t:'fill', q:'Bentuk pasif sekarang dari يَفْتَحُ adalah ___.', a:['يُفْتَحُ','يفتح'] }
  ] },

{ id:'ar-p5', level:'C1', title:'جُمْلَة الشَّرْط', titleId:'Kalimat Syarat',
  why:'Tiga kata syarat yang di bahasa Indonesia sama-sama "kalau", tetapi di bahasa Arab menyatakan tiga tingkat kemungkinan yang berbeda. Salah memilih berarti salah menyampaikan seberapa mungkin sesuatu terjadi.',
  form:'إِذَا — kemungkinan besar terjadi; diikuti kata kerja LAMPAU\n' +
       'إِنْ  — mungkin terjadi, netral; diikuti مجزوم\n' +
       'لَوْ  — TIDAK terjadi (pengandaian); jawabannya memakai لَـ',
  notes:[
    'إِذَا جَاءَ زَيْدٌ سَأُخْبِرُهُ — saya memang menunggu Zaid datang.',
    'لَوْ جَاءَ زَيْدٌ لَأَخْبَرْتُهُ — Zaid TIDAK datang; ini penyesalan.',
    'Sesudah إِذَا dan لَوْ, kata kerjanya berbentuk lampau meski maknanya masa depan.',
    'إِنْ membuat kata kerjanya مجزوم: إِنْ تَدْرُسْ تَنْجَحْ — dua-duanya berharakat sukun.',
    'Jawaban لَوْ hampir selalu diawali لَـ; inilah penanda paling mudah untuk mengenalinya.'
  ],
  ex:[
    ['إِذَا دَرَسْتَ نَجَحْتَ.','Kalau kamu belajar, kamu akan lulus.','idzaa darasta najahta.'],
    ['إِنْ تَدْرُسْ تَنْجَحْ.','Jika kamu belajar, kamu lulus.','in tadrus tanjah.'],
    ['لَوْ دَرَسْتَ لَنَجَحْتَ.','Andai kamu belajar, kamu pasti sudah lulus.','law darasta lanajahta.'],
    ['لَوْلَا المَطَرُ لَخَرَجْنَا.','Kalau bukan karena hujan, kami pasti sudah keluar.','lawlaa al-matharu lakharajnaa.']
  ],
  traps:[
    ['لَوْ دَرَسْتَ نَجَحْتَ','لَوْ دَرَسْتَ لَنَجَحْتَ','Jawaban لو wajib diawali لـ.'],
    ['إِذَا يَجِيءُ زَيْدٌ','إِذَا جَاءَ زَيْدٌ','Sesudah إذا dipakai bentuk lampau, meski maknanya nanti.'],
    ['إِنْ تَدْرُسُ تَنْجَحُ','إِنْ تَدْرُسْ تَنْجَحْ','إن menuntut مجزوم — keduanya bersukun.']
  ],
  drills:[
    { t:'mcq', q:'Mana yang menyatakan sesuatu yang TIDAK terjadi?',
      opts:['إِذَا','إِنْ','لَوْ','مَتَى'], a:2 },
    { t:'mcq', q:'Jawaban لَوْ biasanya diawali',
      opts:['فَـ','لَـ','وَ','بِـ'], a:1 },
    { t:'mcq', q:'"إِنْ تَدْرُسْ تَنْجَحْ" — kedua kata kerjanya berkeadaan',
      opts:['مرفوع','منصوب','مجزوم','مجرور'], a:2 },
    { t:'fill', q:'لَوْ دَرَسْتَ __نَجَحْتَ (huruf jawab)', a:['لَ','ل','la'] }
  ] },

{ id:'ar-p6', level:'C1', title:'المَصْدَر وَالمُشْتَقَّات', titleId:'Masdar & Kata Turunan',
  why:'Dari satu akar tiga huruf, bahasa Arab membangkitkan pelaku, sasaran, tempat, alat, dan nama perbuatannya — semuanya dengan pola yang tetap. Menguasai polanya berarti bisa MENEBAK arti ribuan kata yang belum pernah kamu lihat.',
  form:'Akar كتب (menulis) melahirkan:\n' +
       '· المَصْدَر    كِتَابَة   — nama perbuatannya\n' +
       '· اِسْم الفَاعِل كَاتِب    — pelakunya (pola فَاعِل)\n' +
       '· اِسْم المَفْعُول مَكْتُوب — yang dikenainya (pola مَفْعُول)\n' +
       '· اِسْم المَكَان مَكْتَب   — tempatnya (pola مَفْعَل)\n' +
       '· اِسْم الآلَة  مِكْتَاب   — alatnya (pola مِفْعَال)',
  notes:[
    'Pola مَفْعَل untuk tempat: مَدْرَسَة (tempat belajar), مَطْبَخ (tempat memasak), مَلْعَب (tempat bermain).',
    'Pola مِفْعَال / مِفْعَل untuk alat: مِفْتَاح (pembuka = kunci), مِقَصّ (gunting), مِيزَان (timbangan).',
    'Masdar sangat sering menggantikan anak kalimat: أُرِيدُ أَنْ أَذْهَبَ = أُرِيدُ الذَّهَابَ.',
    'Gaya tulis Arab resmi lebih menyukai masdar daripada anak kalimat — sejajar dengan gaya nominal bahasa Jerman.',
    'Masdar bentuk pertama tidak beraturan dan harus dihafal; bentuk kedua sampai kesepuluh polanya tetap.'
  ],
  ex:[
    ['أُرِيدُ الذَّهَابَ إِلَى المَكْتَبَةِ.','Saya ingin pergi ke perpustakaan.','uriidu adz-dzahaaba ilaa al-maktabati.'],
    ['الكَاتِبُ مَشْهُورٌ وَكِتَابُهُ مَقْرُوءٌ.','Penulisnya terkenal dan bukunya banyak dibaca.',"al-kaatibu masyhuurun wakitaabuhu maqruu'un."],
    ['المِفْتَاحُ فِي المَطْبَخِ.','Kuncinya ada di dapur.','al-miftaahu fii al-mathbakhi.'],
    ['دِرَاسَةُ اللُّغَةِ تَحْتَاجُ صَبْرًا.','Mempelajari bahasa membutuhkan kesabaran.','diraasatu al-lughati tahtaaju shabran.']
  ],
  traps:[
    ['مَكْتُوب (maksudnya: kantor)','مَكْتَب','مَفْعُول = yang dikenai; مَفْعَل = tempat.'],
    ['أُرِيدُ أَنْ الذَّهَابَ','أُرِيدُ الذَّهَابَ','Masdar sudah menggantikan أن + kata kerja; keduanya tidak dipakai bersamaan.'],
    ['كَاتِب (maksudnya: yang ditulis)','مَكْتُوب','فَاعِل adalah pelakunya, bukan sasarannya.']
  ],
  drills:[
    { t:'mcq', q:'Pola اسم المكان (tempat) adalah',
      opts:['فَاعِل','مَفْعُول','مَفْعَل','مِفْعَال'], a:2 },
    { t:'mcq', q:'مِفْتَاح berpola مِفْعَال, jadi maknanya',
      opts:['pelaku','tempat','alat','perbuatan'], a:2 },
    { t:'mcq', q:'"مَكْتُوب" berarti',
      opts:['penulis','yang ditulis','tempat menulis','alat tulis'], a:1 },
    { t:'fill', q:'Akar درس + pola مَفْعَل → tempat belajar = ___.', a:['مَدْرَسَة','مدرسة'] }
  ] },

{ id:'ar-p7', level:'C2', title:'التَّعْبِيرَات الاِصْطِلَاحِيَّة', titleId:'Ungkapan Idiomatik',
  why:'Idiom tidak bisa diterjemahkan kata per kata dan tidak pernah muncul di daftar tata bahasa mana pun. Justru inilah yang membuat tulisan terasa hidup — dan yang membuat teks Arab asli terasa asing meski setiap katanya sudah dikenal.',
  form:'Tiga jenis yang perlu dibedakan:\n' +
       '· penghubung wacana — عَلَى الرَّغْمِ مِنْ، فَضْلًا عَنْ، لَا سِيَّمَا\n' +
       '· kiasan tetap    — عَلَى قَدَمٍ وَسَاق، حَجَر الزَّاوِيَة\n' +
       '· ungkapan santun — جَدِيرٌ بِالذِّكْر، عَلَى حَدِّ عِلْمِي',
  notes:[
    'عَلَى الرَّغْمِ مِنْ diikuti kata benda; أَمَّا … فَـ dipakai untuk berpindah pokok bahasan.',
    'نَاهِيكَ عَنْ berarti "apalagi", dipakai untuk menambah bobot argumen.',
    'بَيْنَ عَشِيَّةٍ وَضُحَاهَا = dalam semalam. Harfiahnya "antara petang dan pagi".',
    'Idiom Arab jauh lebih lazim di TULISAN daripada di percakapan — kebalikan dari kebanyakan bahasa Eropa.',
    'Hati-hati: banyak idiom yang lazim di satu negara terasa asing di negara lain. Yang di daftar ini dipilih dari ragam baku yang dipakai di seluruh dunia Arab.'
  ],
  ex:[
    ['عَلَى الرَّغْمِ مِنَ المَطَرِ خَرَجْنَا.','Meskipun hujan, kami tetap keluar.','alaa ar-raghmi mina al-mathari kharajnaa.'],
    ['العَمَلُ عَلَى قَدَمٍ وَسَاقٍ.','Pekerjaannya sedang berjalan penuh.','al-amalu alaa qadamin wasaaqin.'],
    ['هَذَا هُوَ حَجَرُ الزَّاوِيَةِ فِي المَشْرُوعِ.','Inilah batu penjuru proyek tersebut.',"hadzaa huwa hajaru az-zaawiyati fii al-masyruu'i."],
    ['جَدِيرٌ بِالذِّكْرِ أَنَّ الاِجْتِمَاعَ أُلْغِيَ.','Perlu disebutkan bahwa rapatnya dibatalkan.',"jadiirun bialdzdzikri anna al-ijtimaa'a ulghiya."]
  ],
  traps:[
    ['عَلَى الرَّغْمِ مِنْ أَنْ المَطَرَ','عَلَى الرَّغْمِ مِنَ المَطَرِ','Sesudahnya kata benda ber-jarr, bukan anak kalimat.'],
    ['بِرَغْمِ ذَلِكَ فِي الرِّسَالَةِ الرَّسْمِيَّةِ','عَلَى الرَّغْمِ مِنْ ذَلِكَ','Bentuk pendek terasa santai; surat resmi memakai bentuk penuh.'],
    ['نَاهِيكَ (dipakai sendiri)','نَاهِيكَ عَنْ','Ungkapan ini selalu berpasangan dengan عن.']
  ],
  drills:[
    { t:'mcq', q:'"بَيْنَ عَشِيَّةٍ وَضُحَاهَا" berarti',
      opts:['setiap hari','dalam semalam','sepanjang tahun','sesekali'], a:1 },
    { t:'mcq', q:'عَلَى الرَّغْمِ مِنْ diikuti oleh',
      opts:['kata kerja','kata benda ber-jarr','anak kalimat','kata sifat'], a:1 },
    { t:'mcq', q:'"حَجَر الزَّاوِيَة" bermakna',
      opts:['penghalang','batu penjuru, hal terpenting','pojok ruangan','permulaan'], a:1 },
    { t:'fill', q:'نَاهِيكَ ___ ذَلِكَ (apalagi)', a:['عَنْ','عن'] }
  ] },

{ id:'ar-p8', level:'C2', title:'الفُصْحَى وَالعَامِّيَّة', titleId:'Fusha & Ragam Sehari-hari',
  why:'Bahasa Arab hidup dalam dua lapisan sekaligus, dan penutur asli berpindah di antaranya sepanjang hari. Menguasai fusha saja membuatmu bisa membaca segalanya tetapi terdengar seperti pembaca berita di warung kopi.',
  form:'الفُصْحَى   — tulisan, berita, khotbah, pendidikan · sama di seluruh dunia Arab\n' +
       'العَامِّيَّة — percakapan sehari-hari · berbeda tiap negara\n\n' +
       'Yang berubah bukan hanya kosakata, tetapi juga harakat akhir (hilang) dan susunan kalimat.',
  notes:[
    'مَاذَا تُرِيدُ؟ (fusha) · إِيش بِدَّك؟ (Syam) · عَايِز إِيه؟ (Mesir) — tiga cara menanyakan hal yang sama.',
    'Di ragam sehari-hari, i\'rab akhir kata TIDAK dibaca sama sekali. Itulah sebabnya penutur asli pun harus belajar i\'rab di sekolah.',
    'Ragam Mesir paling luas dipahami karena film dan lagunya; ragam Syam dianggap paling dekat ke fusha.',
    'Untuk pemelajar asing, urutan yang benar tetap: kuasai fusha dulu, baru satu ragam daerah sesuai keperluan.',
    'Di media modern lahir lapisan ketiga — fusha sederhana yang dipakai talk show dan media sosial.'
  ],
  ex:[
    ['مَاذَا تُرِيدُ؟','Kamu mau apa? (fusha)','maadzaa turiidu?'],
    ['كَيْفَ حَالُكَ؟','Apa kabar? (fusha)','kayfa haaluka?'],
    ['لَا أَعْرِفُ.','Saya tidak tahu. (fusha)',"laa a'rifu."],
    ['أَيْنَ تَذْهَبُ؟','Kamu mau ke mana? (fusha)','ayna tadzhabu?']
  ],
  traps:[
    ['Memakai ragam daerah dalam surat resmi','Memakai fusha','Tulisan resmi seluruh dunia Arab memakai fusha tanpa kecuali.'],
    ['Memakai fusha penuh berharakat saat mengobrol santai','Fusha sederhana tanpa harakat akhir','Fusha berharakat penuh di percakapan terdengar seperti membaca naskah.'],
    ['Mencampur beberapa ragam daerah sekaligus','Pilih satu ragam','Campuran ragam justru menyulitkan lawan bicara.']
  ],
  drills:[
    { t:'mcq', q:'Ragam yang dipakai seluruh dunia Arab untuk tulisan adalah',
      opts:['العامية','الفصحى','ragam Mesir','ragam Syam'], a:1 },
    { t:'mcq', q:'Di ragam sehari-hari, harakat akhir kata',
      opts:['dibaca penuh','tidak dibaca','berubah jadi fathah','ditulis saja'], a:1 },
    { t:'mcq', q:'Bagi pemelajar asing, urutan yang disarankan adalah',
      opts:['ragam daerah dulu','fusha dulu','keduanya bersamaan','tidak penting'], a:1 },
    { t:'mcq', q:'Ragam daerah yang paling luas dipahami adalah',
      opts:['Maghribi','Mesir','Teluk','Irak'], a:1 }
  ] }
];

/* ── Kosakata ────────────────────────────────────────────────── */
const VOCAB = [

V('ar-pv-media','Media & Pendapat','B2',
  'Kosakata yang menyusun bagian menulis dan berbicara tingkat B2: menyatakan pendapat, menimbang dua sisi, lalu menyimpulkan.',
  [['رَأْي',"ra'i",'pendapat'],['مَوْقِف','mawqif','sikap; pendirian'],['حُجَّة','hujjah','argumen'],
   ['دَلِيل','daliil','bukti'],['سَبَب','sabab','sebab'],['نَتِيجَة','natiijah','hasil; akibat'],
   ['مِثَال','mitsaal','contoh'],['مُقَارَنَة','muqaaranah','perbandingan'],['حَلّ','hall','solusi'],
   ['مُشْكِلَة','musykilah','masalah'],['تَطَوُّر','tathawwur','perkembangan'],['تَغْيِير','taghyiir','perubahan'],
   ['تَأْثِير',"ta'tsiir",'pengaruh'],['أَثَر','atsar','dampak'],['اِسْتِطْلَاع',"istithlaa'",'jajak pendapat'],
   ['دِرَاسَة','diraasah','studi'],['إِحْصَاء',"ihshaa'",'statistik'],['نِسْبَة','nisbah','persentase'],
   ['أَغْلَبِيَّة','aghlabiyyah','mayoritas'],['أَقَلِّيَّة','aqalliyyah','minoritas'],['اِدَّعَى',"idda'aa",'mengklaim'],
   ['شَكَّ','syakka','meragukan'],['وَافَقَ','waafaqa','menyetujui'],['رَفَضَ','rafadha','menolak'],
   ['عَلَّلَ','allala','memberi alasan'],['لَخَّصَ','lakhkhasha','merangkum'],['صَحِيفَة','shahiifah','surat kabar'],
   ['مَقَال','maqaal','artikel'],['خَبَر','khabar','berita'],['إِعْلَام',"i'laam",'media'],
   ['قَارِئ','qaariy','pembaca'],['مُشَاهِد','musyaahid','pemirsa']]),

V('ar-pv-akad','Bahasa Ilmiah','C1',
  'Kosakata makalah, kuliah, dan jurnal — lapisan yang paling sering membuat pemelajar tersendat saat membaca teks Arab akademik.',
  [['بَحْث','bahts','penelitian'],['أُطْرُوحَة','uthruuhah','disertasi'],['فَرَضِيَّة','faradhiyyah','hipotesis'],
   ['بُرْهَان','burhaan','bukti; dalil'],['مَنْهَج','manhaj','metode'],['تَحْلِيل','tahliil','analisis'],
   ['نَتَائِج','nataayij','hasil-hasil'],['اِسْتِنْتَاج','istintaaj','kesimpulan'],['شَرْط','syarth','syarat'],
   ['اِفْتِرَاض','iftiraadh','asumsi'],['عَلَاقَة','alaaqah','hubungan'],['تَنَاقُض','tanaaqudh','kontradiksi'],
   ['اِسْتِثْنَاء',"istitsnaa'",'pengecualian'],['هَدَف','hadaf','tujuan'],['مُصْطَلَح','mushthalah','istilah'],
   ['تَعْرِيف',"ta'riif",'definisi'],['مَصْدَر','mashdar','sumber'],['اِقْتِبَاس','iqtibaas','kutipan'],
   ['مُقَدِّمَة','muqaddimah','pendahuluan'],['خَاتِمَة','khaatimah','penutup'],['مَرْجِع',"marji'",'rujukan'],
   ['نَظَرِيَّة','nazhariyyah','teori'],['تَطْبِيق','tathbiiq','penerapan'],['مُلَاحَظَة','mulaahazhah','pengamatan'],
   ['عَيِّنَة','ayyinah','sampel'],['بَيَانَات','bayaanaat','data'],['جَدْوَل','jadwal','tabel'],
   ['نَاقَشَ','naaqasya','membahas'],['أَثْبَتَ','atsbata','membuktikan'],['أَوْضَحَ','awdhaha','memperjelas'],
   ['اِسْتَنْتَجَ','istantaja','menyimpulkan'],['يَتَنَاوَل','yatanaawal','membahas; mengulas']]),

V('ar-pv-idiom','Ungkapan & Peribahasa','C2',
  'Ungkapan tetap yang maknanya tidak bisa dijumlahkan dari kata-katanya. Perhatikan: berbeda dari kebanyakan bahasa Eropa, idiom Arab justru lebih lazim di TULISAN daripada di percakapan.',
  [['عَلَى قَدَمٍ وَسَاق','alaa qadamin wasaaq','sedang berjalan penuh'],
   ['بَيْنَ عَشِيَّةٍ وَضُحَاهَا','bayna asyiyyahin wadhuhaahaa','dalam semalam'],
   ['رَأْسًا عَلَى عَقِب',"ra'san alaa aqib",'terbalik sama sekali'],
   ['عَلَى أَحَرَّ مِنَ الجَمْر','alaa aharra mina al-jamr','menanti dengan tak sabar'],
   ['مِنَ الأَلِفِ إِلَى اليَاء',"mina al-alifi ilaa al-yaa'",'dari awal sampai akhir'],
   ['حَجَر الزَّاوِيَة','hajar az-zaawiyah','batu penjuru; hal terpenting'],
   ['نُقْطَة تَحَوُّل','nuqthah tahawwul','titik balik'],
   ['خَطّ أَحْمَر','khathth ahmar','batas yang tak boleh dilanggar'],
   ['فِي المُتَنَاوَل','fii al-mutanaawal','terjangkau'],
   ['عَلَى المَحَكّ','alaa al-mahakk','sedang dipertaruhkan'],
   ['بِلَا شَكّ','bilaa syakk','tanpa ragu'],
   ['فِي نِهَايَةِ المَطَاف','fii nihaayati al-mathaaf','pada akhirnya'],
   ['عَلَى حَدٍّ سَوَاء',"alaa haddin sawaa'",'sama saja; setara'],
   ['مِنْ نَاحِيَةٍ أُخْرَى','min naahiyahin ukhraa','di sisi lain'],
   ['بِعِبَارَةٍ أُخْرَى',"bi'ibaarahin ukhraa",'dengan kata lain'],
   ['عَلَى سَبِيلِ المِثَال','alaa sabiili al-mitsaal','sebagai contoh'],
   ['فِي الوَاقِع',"fii al-waaqi'",'pada kenyataannya'],
   ['بِشَكْلٍ عَامّ','bisyaklin aamm','secara umum'],
   ['عَلَى الرَّغْمِ مِنْ','alaa ar-raghmi min','meskipun'],
   ['فَضْلًا عَنْ','fadhlan an','di samping itu'],
   ['نَاهِيكَ عَنْ','naahiika an','apalagi'],
   ['بِفَضْلِ','bifadhli','berkat'],
   ['جَدِيرٌ بِالذِّكْر','jadiirun bialdzdzikr','perlu disebutkan'],
   ['لَا سِيَّمَا','laa siyyamaa','terutama'],
   ['عَلَى أَيِّ حَال','alaa ayyi haal','bagaimanapun juga'],
   ['مَا زَالَ','maa zaala','masih'],
   ['عَلَى حَدِّ عِلْمِي','alaa haddi ilmii','sepanjang pengetahuan saya'],
   ['فِي هَذَا الصَّدَد','fii hadzaa ash-shadad','dalam hal ini']])
];

/* ── Frasa ───────────────────────────────────────────────────── */
const PHRASES = [
{ g:'Berdiskusi & Berpendapat', items:[
  ['فِي رَأْيِي …',"fii ra'yii …",'Menurut pendapat saya …'],
  ['أَعْتَقِدُ أَنَّ …',"a'taqidu anna …",'Saya rasa bahwa …'],
  ['لَا أَتَّفِقُ مَعَكَ فِي هَذَا.',"laa attafiqu ma'aka fii hadzaa.",'Saya tidak sependapat dalam hal ini.'],
  ['أُوَافِقُكَ الرَّأْيَ.',"uwaafiquka ar-ra'ya.",'Saya sependapat dengan Anda.'],
  ['مِنْ نَاحِيَةٍ … وَمِنْ نَاحِيَةٍ أُخْرَى …','min naahiyahin … wamin naahiyahin ukhraa …','Di satu sisi … di sisi lain …'],
  ['هَلْ لِي أَنْ أُقَاطِعَكَ؟',"hal lii an uqaathi'aka?",'Boleh saya menyela?'],
  ['خُلَاصَةُ القَوْلِ …','khulaashatu al-qawli …','Kesimpulannya …']
]},
{ g:'Rapat & Presentasi', items:[
  ['شُكْرًا عَلَى حُسْنِ اسْتِمَاعِكُم.',"syukran alaa husni astimaa'ikum.",'Terima kasih atas perhatian Anda.'],
  ['أَنْتَقِلُ الآنَ إِلَى النُّقْطَةِ التَّالِيَةِ.','antaqilu al-aana ilaa an-nuqthati at-taaliyati.','Saya lanjut ke poin berikutnya.'],
  ['كَمَا يَتَّضِحُ مِنَ الرَّسْمِ البَيَانِيِّ …','kamaa yattadhihu mina ar-rasmi al-bayaaniyyi …','Sebagaimana terlihat dari grafik …'],
  ['هَلْ لِي أَنْ أَطْلُبَ رَأْيَكُم؟',"hal lii an athluba ra'yakum?",'Bolehkah saya meminta pendapat Anda?'],
  ['سَأَتَوَاصَلُ مَعَكُمْ بِهَذَا الشَّأْنِ.',"saatawaashalu ma'akum bihadzaa asy-sya'ni.",'Saya akan menghubungi Anda mengenai hal ini.'],
  ['نَرَى أَنَّ ذَلِكَ مَعْقُولٌ.',"naraa anna dzalika ma'quulun.",'Kami menilai itu masuk akal.'],
  ['هَلْ يُمْكِنُنَا العَوْدَةُ إِلَى هَذِهِ النُّقْطَةِ؟','hal yumkinunaa al-awdatu ilaa hadzihi an-nuqthati?','Bisakah kita kembali ke poin ini?']
]},
{ g:'Ungkapan Sehari-hari', items:[
  ['هَذَا يَعْتَمِدُ.',"hadzaa ya'tamidu.",'Tergantung.'],
  ['لَا عَجَبَ!','laa ajaba!','Pantas saja!'],
  ['لَا تَقْلَقْ.','laa taqlaq.','Jangan khawatir.'],
  ['كَانَ ذَلِكَ وَشِيكًا.','kaana dzalika wasyiikan.','Nyaris saja.'],
  ['فِي ذَلِكَ شَيْءٌ مِنَ الصَّوَابِ.',"fii dzalika syay'un mina ash-shawaabi.",'Ada benarnya juga.'],
  ['هَيَّا بِنَا نَبْدَأُ.','hayyaa binaa nabdau.','Ayo kita mulai.'],
  ['بِالتَّوْفِيقِ!','bialttawfiiqi!','Semoga berhasil!']
]}
];

/* ── Unit tambahan untuk tingkat yang sudah ada ──────────────── */
const LEVELS = [
{ id:'B2', units:[
  U('ar-b2-2','I\'rab','Harakat Akhir & Peran Kata',
    'Yang membedakan membaca Arab dari menebak Arab.',
    { grammar:['ar-p1'], vocab:['ar-pv-media'], phrases:['Berdiskusi & Berpendapat'],
      skills:['listen','speak'],
      cando:['Membedakan rafa\', nashab, dan jarr beserta tandanya',
             'Membaca kalimat berharakat penuh tanpa tertukar pelaku dan objek'] }),
  U('ar-b2-3','Kana & Inna','Kana & Inna Beserta Saudaranya',
    'Dua kelompok kata yang mengubah harakat kalimat nominal ke arah berlawanan.',
    { grammar:['ar-p2','ar-p3'], vocab:['ar-pv-media'], phrases:['Berdiskusi & Berpendapat'],
      skills:['listen','speak'],
      cando:['Menerapkan aturan كان pada bagian kedua dan إنّ pada bagian pertama',
             'Memakai حال dan تمييز sebagai keterangan'] })
]},
{ id:'C1', units:[
  U('ar-c1-2','Passive Voice','Bentuk Pasif',
    'Pasif Arab mengubah vokal DI DALAM kata kerja, bukan menambah kata bantu.',
    { grammar:['ar-p4'], vocab:['ar-pv-akad'], phrases:['Rapat & Presentasi'],
      skills:['listen','speak'],
      cando:['Membentuk pasif lampau dan sekarang','Mengenali bentuk pasif yang lazim di berita'] }),
  U('ar-c1-3','Conditionals','Kalimat Syarat',
    'Tiga kata syarat untuk tiga tingkat kemungkinan yang berbeda.',
    { grammar:['ar-p5'], vocab:['ar-pv-akad'], phrases:['Rapat & Presentasi'],
      skills:['listen','speak'],
      cando:['Memilih إذا, إن, atau لو sesuai tingkat kemungkinannya',
             'Mengenali jawaban لو dari huruf لـ'] }),
  U('ar-c1-4','Derived Nouns','Masdar & Kata Turunan',
    'Satu akar melahirkan pelaku, sasaran, tempat, dan alat — semua berpola tetap.',
    { grammar:['ar-p6'], vocab:['ar-pv-akad'], phrases:['Rapat & Presentasi'],
      skills:['listen','speak'],
      cando:['Menebak makna kata baru dari polanya','Mengganti anak kalimat dengan masdar'] })
]},
{ id:'C2', units:[
  U('ar-c2-2','Idioms','Ungkapan Idiomatik',
    'Yang membuat teks Arab asli terasa asing meski setiap katanya sudah dikenal.',
    { grammar:['ar-p7'], vocab:['ar-pv-idiom'], phrases:['Ungkapan Sehari-hari'],
      skills:['listen','speak'],
      cando:['Memakai penghubung wacana baku dalam tulisan',
             'Mengenali kiasan tetap yang lazim di surat kabar'] }),
  U('ar-c2-3','Fusha & Dialect','Fusha & Ragam Sehari-hari',
    'Dua lapisan bahasa yang hidup berdampingan, dan kapan memakai yang mana.',
    { grammar:['ar-p8'], vocab:['ar-pv-idiom'], phrases:['Ungkapan Sehari-hari'],
      skills:['listen','speak'],
      cando:['Memilih ragam sesuai lawan bicara dan media',
             'Memahami mengapa harakat akhir hilang di percakapan'] })
]}
];

export const PLUS = { grammar: GRAMMAR, vocab: VOCAB, phrases: PHRASES, levels: LEVELS };
