/* ARAB — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk sepuluh topik inti ar-g1..ar-g10. Tiap topik inti cuma
      punya dua latihan, sementara ar-p1..ar-p8 sudah punya empat dan
      topik bahasa Inggris rata-rata 4,7. Yang timpang justru topik
      DASARNYA. Ditambah tiga per topik inti.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (ar-q1..ar-q5). Semuanya tata bahasa dasar yang
      belum tertutup ar-g* maupun ar-p*, dan tiap satunya punya titik
      gelincir yang khas penutur Indonesia:
        q1 العدد     — bilangan, yang justru MEMBALIK jenis kelaminnya
        q2 النفي     — lima cara menyangkal untuk satu kata "tidak"
        q3 الأمر     — bentuk perintah yang tidak diajarkan di mana pun
        q4 الإشارة والموصول — "ini/itu" dan "yang"
        q5 حروف الجر — kata kerja yang menuntut huruf jar tertentu

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema uang dan kesehatan
      sehari-hari. Grup "Belanja" dan "Keadaan Darurat" sudah ada, jadi
      yang ditambah di sini sengaja urusan bank dan kunjungan dokter
      biasa — dua keperluan yang belum tertutup sama sekali.

   Awalan id: tata bahasa ar-q, kosakata ar-qv-, supaya tidak pernah
   bentrok dengan ar-g*, ar-p*, ar-v*, ar-pv*.                          */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK INTI ═════════════════════════ */
grammar: [

{ id:'ar-g1', drills:[
  { t:'mcq', q:'"الْبَيْتُ كَبِيرٌ" tidak memerlukan', opts:['kata sifat','kata kerja "adalah"','kata sandang','kata ganti'], a:1,
    why:'Kalimat nominal Arab tidak punya kata kerja penghubung sama sekali.' },
  { t:'mcq', q:'Khabar dalam kalimat nominal berharakat akhir', opts:['fathah','dhammah','kasrah','sukun'], a:1,
    why:'Mubtada dan khabar dua-duanya marfu, jadi berharakat dhammah.' },
  { t:'mcq', q:'Mubtada biasanya berupa kata yang', opts:['nakirah (tak tentu)','marifah (tertentu)','berjamak','berkata kerja'], a:1,
    why:'Yang dibicarakan harus sudah dikenal; karena itu biasanya ber-ال.' } ] },

{ id:'ar-g2', drills:[
  { t:'mcq', q:'Penanda muannats yang paling umum adalah', opts:['ال','ة','ون','ين'], a:1,
    why:'تَاء مَرْبُوطَة di akhir kata menandai jenis perempuan.' },
  { t:'mcq', q:'Kata sifat dalam bahasa Arab harus mengikuti kata bendanya dalam hal', opts:['jenis kelamin saja','jumlah saja','jenis, jumlah, kepastian, dan kasus','tidak perlu mengikuti'], a:2,
    why:'Empat hal sekaligus — inilah yang paling sering terlewat.' },
  { t:'mcq', q:'Kata شَمْس berjenis', opts:['mudzakkar','muannats meski tanpa ة','tergantung kalimat','netral'], a:1,
    why:'Sebagian kata muannats tanpa ة dan harus dihafal: شمس، نار، أرض، يد.' } ] },

{ id:'ar-g3', drills:[
  { t:'mcq', q:'Akar ك-ت-ب berkaitan dengan makna', opts:['membaca','menulis','berbicara','berjalan'], a:1,
    why:'Semua turunannya berputar di sekitar tulis-menulis.' },
  { t:'mcq', q:'Pola مَفْعَل seperti مَكْتَب menyatakan', opts:['pelaku','tempat','alat','waktu lampau'], a:1,
    why:'مَكْتَب = tempat menulis, yaitu meja atau kantor.' },
  { t:'mcq', q:'Pola فَاعِل seperti كَاتِب menyatakan', opts:['tempat','pelaku','sasaran','alat'], a:1,
    why:'كَاتِب = orang yang menulis, yaitu penulis.' } ] },

{ id:'ar-g4', drills:[
  { t:'mcq', q:'Pada huruf syamsiyah, lam pada ال', opts:['dibaca jelas','tidak dibaca dan huruf berikutnya bertasydid','dihapus tulisannya','diganti nun'], a:1,
    why:'الشَّمْس ditulis dengan lam tapi dibaca asy-syams.' },
  { t:'mcq', q:'الْقَمَر dibaca', opts:['aq-qamar','al-qamar','a-qamar','an-qamar'], a:1,
    why:'ق huruf qamariyah, jadi lamnya dibaca jelas.' },
  { t:'mcq', q:'Kata yang sudah ber-ال tidak boleh', opts:['berjamak','bertanwin','bersifat','berkasus'], a:1,
    why:'ال dan tanwin dua-duanya penanda kepastian yang berlawanan — tidak pernah bersamaan.' } ] },

{ id:'ar-g5', drills:[
  { t:'mcq', q:'Akhiran ـِي pada كِتَابِي berarti', opts:['bukumu','bukunya','bukuku','buku kami'], a:2,
    why:'Kata ganti milik melekat langsung di akhir kata bendanya.' },
  { t:'mcq', q:'هُمَا berarti', opts:['mereka (banyak)','mereka berdua','kalian','kami'], a:1,
    why:'Bahasa Arab punya bentuk khusus untuk DUA orang, yang tidak ada dalam bahasa Indonesia.' },
  { t:'mcq', q:'Untuk berbicara kepada satu perempuan dipakai', opts:['أَنْتَ','أَنْتِ','أَنْتُمَا','أَنْتُنَّ'], a:1,
    why:'Harakat akhirnya membedakan lawan bicara laki-laki dan perempuan.' } ] },

{ id:'ar-g6', drills:[
  { t:'mcq', q:'Urutan baku kalimat berkata kerja adalah', opts:['subjek – kata kerja – objek','kata kerja – subjek – objek','objek – kata kerja – subjek','kata kerja – objek – subjek'], a:1,
    why:'Berbeda dengan bahasa Indonesia, kata kerjanya di depan.' },
  { t:'mcq', q:'Kalau subjeknya jamak dan disebut SESUDAH kata kerja, kata kerjanya', opts:['ikut jamak','tetap tunggal','dihilangkan','berulang'], a:1,
    why:'كَتَبَ الطُّلَّابُ — kata kerjanya tetap tunggal.' },
  { t:'mcq', q:'Fail (pelaku) berharakat akhir', opts:['fathah','dhammah','kasrah','sukun'], a:1,
    why:'Pelaku selalu marfu.' } ] },

{ id:'ar-g7', drills:[
  { t:'mcq', q:'يَكْتُبُ menyatakan perbuatan', opts:['sudah selesai','sedang atau akan berlangsung','yang diperintahkan','yang diandaikan'], a:1,
    why:'Mudhari mencakup sekarang dan yang akan datang.' },
  { t:'mcq', q:'Awalan kata kerja mudhari ada empat, yaitu', opts:['ا ن ي ت','ك ت ب م','ل م ن ق','و ف ي ه'], a:0,
    why:'Dihafal sebagai أَنَيْتُ.' },
  { t:'mcq', q:'"Dia belum menulis" =', opts:['لَا يَكْتُبُ','لَمْ يَكْتُبْ','لَنْ يَكْتُبَ','مَا كَتَبَ'], a:1,
    why:'لَمْ diikuti mudhari majzum tapi artinya lampau.' } ] },

{ id:'ar-g8', drills:[
  { t:'mcq', q:'Dalam susunan idhafah, kata pertama (mudhaf)', opts:['wajib ber-ال','tidak boleh ber-ال maupun bertanwin','selalu bertanwin','selalu berjamak'], a:1,
    why:'Kepastiannya diambil dari kata kedua.' },
  { t:'mcq', q:'Kata kedua (mudhaf ilaih) berharakat akhir', opts:['dhammah','fathah','kasrah','sukun'], a:2,
    why:'Mudhaf ilaih selalu majrur.' },
  { t:'mcq', q:'"Rumah direktur" =', opts:['الْبَيْتُ الْمُدِيرُ','بَيْتُ الْمُدِيرِ','الْبَيْتُ مُدِيرٌ','بَيْتٌ الْمُدِيرِ'], a:1,
    why:'Mudhaf tanpa ال, mudhaf ilaih ber-ال dan berkasrah.' } ] },

{ id:'ar-g9', drills:[
  { t:'mcq', q:'Jamak mudzakkar salim berakhiran', opts:['ـَات','ـُونَ atau ـِينَ','ـَان','ـَة'], a:1,
    why:'مُسْلِمُونَ ketika marfu, مُسْلِمِينَ ketika bukan.' },
  { t:'mcq', q:'Jamak taksir adalah jamak yang', opts:['beraturan','mengubah bentuk dalam kata itu sendiri','hanya untuk perempuan','hanya untuk benda mati'], a:1,
    why:'كِتَاب jadi كُتُب — polanya harus dihafal.' },
  { t:'mcq', q:'Jamak untuk BENDA MATI diperlakukan sebagai', opts:['jamak laki-laki','muannats tunggal','jamak perempuan','mutsanna'], a:1,
    why:'الْكُتُبُ جَمِيلَةٌ — kata sifatnya tunggal berbentuk perempuan.' } ] },

{ id:'ar-g10', drills:[
  { t:'mcq', q:'Wazan II (فَعَّلَ) biasanya menyatakan', opts:['saling melakukan','menjadikan atau melakukan dengan sungguh','meminta','menerima'], a:1,
    why:'عَلِمَ tahu, عَلَّمَ mengajar — menjadikan orang lain tahu.' },
  { t:'mcq', q:'Wazan X (اسْتَفْعَلَ) biasanya menyatakan', opts:['meminta atau menganggap','saling','menjadikan','pasif'], a:0,
    why:'اسْتَغْفَرَ = memohon ampun.' },
  { t:'mcq', q:'Wazan VI (تَفَاعَلَ) biasanya menyatakan', opts:['perbuatan sendiri','perbuatan saling','perintah','larangan'], a:1,
    why:'تَعَاوَنَ = saling menolong.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'ar-q1', level:'2', title:'العَدَد', titleId:'Bilangan yang Membalik Jenisnya',
  why:'Bahasa Indonesia menyebut angka tanpa perubahan apa pun: tiga buku, tiga anak. Bahasa Arab justru MEMBALIK jenis kelamin bilangan tiga sampai sepuluh: kalau bendanya laki-laki, bilangannya berbentuk perempuan, dan sebaliknya. Aturan ini tidak punya padanan sama sekali dalam bahasa mana pun yang dikenal penutur Indonesia, jadi hampir selalu dilewati — padahal ia muncul di setiap kalimat yang menyebut jumlah.',
  form:'1 & 2: sifat yang MENGIKUTI bendanya — كِتَابٌ وَاحِدٌ، كِتَابَانِ\n3–10: bilangan BERLAWANAN jenis, bendanya jamak majrur — ثَلَاثَةُ كُتُبٍ، ثَلَاثُ بَنَاتٍ\n11–99: bendanya TUNGGAL manshub — أَحَدَ عَشَرَ كِتَابًا، عِشْرُونَ كِتَابًا\n100 ke atas: bendanya tunggal majrur — مِائَةُ كِتَابٍ',
  notes:['Aturan pembalikan hanya berlaku untuk 3–10; di luar itu tidak ada pembalikan.',
         'Jenis bilangan ditentukan oleh bentuk TUNGGAL bendanya, bukan bentuk jamaknya.',
         'Angka 1 dan 2 sebenarnya tidak perlu disebut, karena bentuk kata bendanya sudah menunjukkannya.',
         'Untuk 11–99 bendanya kembali TUNGGAL — ini kejutan kedua yang sering tak diduga.',
         'Dalam bahasa sehari-hari harakat akhirnya sering tidak diucapkan, tapi pilihan bentuk bilangannya tetap terdengar.'],
  ex:[['عِنْدِي ثَلَاثَةُ كُتُبٍ.','Saya punya tiga buku.','indi thalathatu kutubin.'],
      ['فِي الصَّفِّ ثَلَاثُ بَنَاتٍ.','Di kelas ada tiga anak perempuan.','fi as-saffi thalathu banatin.'],
      ['اِشْتَرَيْتُ خَمْسَةَ أَقْلَامٍ.','Saya membeli lima pena.','isytaraitu khamsata aqlamin.'],
      ['فِي الْمَكْتَبَةِ عِشْرُونَ كِتَابًا.','Di perpustakaan ada dua puluh buku.','fi al-maktabati isyruna kitaban.'],
      ['عِنْدَهُ كِتَابَانِ فَقَطْ.','Dia hanya punya dua buku.','indahu kitabani faqath.'],
      ['حَضَرَ مِائَةُ طَالِبٍ.','Seratus mahasiswa hadir.','hadhara miatu thalibin.']],
  traps:[['ثَلَاثُ كُتُبٍ','ثَلَاثَةُ كُتُبٍ','كِتَاب laki-laki, jadi bilangannya justru berbentuk perempuan.'],
         ['ثَلَاثَةُ بَنَاتٍ','ثَلَاثُ بَنَاتٍ','بِنْت perempuan, jadi bilangannya berbentuk laki-laki.'],
         ['عِشْرُونَ كُتُبٍ','عِشْرُونَ كِتَابًا','Mulai sebelas, bendanya kembali tunggal.'],
         ['ثَلَاثَةُ كِتَابٍ','ثَلَاثَةُ كُتُبٍ','Untuk 3–10 bendanya jamak.']],
  drills:[
    { t:'mcq', q:'"Tiga buku" =', opts:['ثَلَاثُ كُتُبٍ','ثَلَاثَةُ كُتُبٍ','ثَلَاثَةُ كِتَابٍ','ثَلَاثُ كِتَابًا'], a:1,
      why:'كِتَاب laki-laki, jadi bilangannya berbentuk perempuan dan bendanya jamak.' },
    { t:'mcq', q:'"Tiga anak perempuan" =', opts:['ثَلَاثَةُ بَنَاتٍ','ثَلَاثُ بَنَاتٍ','ثَلَاثَةُ بِنْتٍ','ثَلَاثُ بِنْتًا'], a:1,
      why:'بِنْت perempuan, jadi bilangannya berbentuk laki-laki.' },
    { t:'mcq', q:'Sesudah bilangan 20, kata bendanya berbentuk', opts:['jamak majrur','tunggal manshub','jamak marfu','mutsanna'], a:1,
      why:'عِشْرُونَ كِتَابًا — tunggal dan berharakat fathah.' },
    { t:'fill', q:'اِشْتَرَيْتُ خَمْسَةَ ___. (lima pena — أَقْلَام)', a:['أَقْلَامٍ'],
      why:'Bilangan 3–10 diikuti jamak majrur.' },
    { t:'mcq', q:'Aturan pembalikan jenis berlaku untuk bilangan', opts:['1–2','3–10','11–20','semua bilangan'], a:1,
      why:'Di luar 3–10 tidak ada pembalikan.' } ] },

{ id:'ar-q2', level:'1', title:'النَّفْي', titleId:'Lima Cara Menyangkal',
  why:'Bahasa Indonesia menyangkal dengan satu kata: "tidak" atau "bukan". Bahasa Arab memilih alat penyangkal menurut WAKTU dan JENIS kalimatnya — لا، ما، لم، لن، ليس — dan tiap satunya menuntut bentuk kata kerja yang berbeda. Penutur Indonesia yang memakai لا untuk semuanya akan selalu terdengar salah waktu, karena لا hanya menyangkal masa kini.',
  form:'لَا + mudhari marfu — menyangkal masa kini: لَا أَكْتُبُ\nلَمْ + mudhari majzum — menyangkal LAMPAU: لَمْ أَكْتُبْ\nمَا + madhi — menyangkal lampau (ragam lain): مَا كَتَبْتُ\nلَنْ + mudhari manshub — menyangkal MASA DEPAN: لَنْ أَكْتُبَ\nلَيْسَ — menyangkal kalimat NOMINAL: لَيْسَ الْبَيْتُ كَبِيرًا',
  notes:['لَمْ berbentuk masa kini tapi bermakna lampau — inilah yang paling membingungkan.',
         'لَيْسَ membuat khabar berubah jadi manshub (berharakat fathah), bukan lagi marfu.',
         'لَا juga dipakai untuk LARANGAN dengan mudhari majzum: لَا تَكْتُبْ = jangan menulis.',
         'مَا dan لَمْ sama-sama menyangkal lampau; لَمْ lebih lazim di ragam baku modern.',
         'Untuk menyangkal kata benda dipakai غَيْر: غَيْرُ مُمْكِنٍ = tidak mungkin.'],
  ex:[['لَا أَعْرِفُ هَذَا الرَّجُلَ.','Saya tidak kenal orang ini.','la arifu hadha ar-rajula.'],
      ['لَمْ أَذْهَبْ إِلَى السُّوقِ.','Saya tidak pergi ke pasar.','lam adzhab ila as-suqi.'],
      ['لَنْ أَنْسَى هَذَا الْيَوْمَ.','Saya tidak akan melupakan hari ini.','lan ansa hadha al-yauma.'],
      ['لَيْسَ الطَّقْسُ بَارِدًا الْيَوْمَ.','Cuacanya tidak dingin hari ini.','laisa at-thaqsu baridan al-yauma.'],
      ['لَا تَتَكَلَّمْ بِصَوْتٍ عَالٍ.','Jangan bicara dengan suara keras.','la tatakallam bi shautin alin.'],
      ['مَا رَأَيْتُهُ مُنْذُ سَنَةٍ.','Saya tidak melihatnya sejak setahun.','ma raituhu mundzu sanatin.']],
  traps:[['لَا ذَهَبْتُ','لَمْ أَذْهَبْ','Menyangkal lampau memakai لَمْ + mudhari majzum.'],
         ['لَا سَأَذْهَبُ','لَنْ أَذْهَبَ','Menyangkal masa depan memakai لَنْ.'],
         ['لَيْسَ الْبَيْتُ كَبِيرٌ','لَيْسَ الْبَيْتُ كَبِيرًا','لَيْسَ membuat khabarnya manshub.'],
         ['لَمْ أَذْهَبُ','لَمْ أَذْهَبْ','Sesudah لَمْ kata kerjanya majzum, berharakat sukun.']],
  drills:[
    { t:'mcq', q:'"Saya tidak pergi (kemarin)" =', opts:['لَا أَذْهَبُ','لَمْ أَذْهَبْ','لَنْ أَذْهَبَ','لَيْسَ أَذْهَبُ'], a:1,
      why:'Menyangkal lampau memakai لَمْ.' },
    { t:'mcq', q:'"Saya tidak akan pergi" =', opts:['لَا أَذْهَبُ','لَمْ أَذْهَبْ','لَنْ أَذْهَبَ','مَا ذَهَبْتُ'], a:2,
      why:'Masa depan disangkal dengan لَنْ + mudhari manshub.' },
    { t:'mcq', q:'لَيْسَ membuat khabar berharakat', opts:['dhammah','fathah','kasrah','sukun'], a:1,
      why:'لَيْسَ الْبَيْتُ كَبِيرًا.' },
    { t:'fill', q:'___ أَذْهَبْ إِلَى السُّوقِ أَمْسِ. (saya tidak pergi kemarin)', a:['لَمْ'],
      why:'Kata kerjanya berharakat sukun, jadi alat penyangkalnya لَمْ.' },
    { t:'mcq', q:'Untuk menyangkal kalimat nominal dipakai', opts:['لَا','لَمْ','لَنْ','لَيْسَ'], a:3,
      why:'Kalimat tanpa kata kerja disangkal dengan لَيْسَ.' } ] },

{ id:'ar-q3', level:'2', title:'فِعْل الأَمْر', titleId:'Bentuk Perintah',
  why:'Perintah dalam bahasa Indonesia dibentuk begitu saja dari kata dasarnya: "tulis!", "buka!". Bahasa Arab menempuh tiga langkah — ambil bentuk mudhari, buang huruf awalnya, lalu tambahkan hamzah kalau huruf sisanya bersukun. Karena langkahnya tidak kelihatan dari hasil jadinya, pemelajar cenderung menghafal satu per satu tanpa pernah bisa membentuk sendiri kata perintah baru.',
  form:'Langkah 1: ambil mudhari majzum — يَكْتُبُ jadi يَكْتُبْ\nLangkah 2: buang huruf mudhara-ah (ي) — كْتُبْ\nLangkah 3: kalau awalnya bersukun, tambahkan hamzah washal — اُكْتُبْ\nHarakat hamzah mengikuti harakat tengah: dhammah jika tengahnya dhammah, kasrah selainnya\nLARANGAN: لَا + mudhari majzum — لَا تَكْتُبْ',
  notes:['Kalau sesudah membuang huruf awal ternyata sudah berharakat, hamzah tidak diperlukan: يُعَلِّمُ jadi عَلِّمْ.',
         'Bentuk perintah berubah menurut lawan bicara: اُكْتُبْ (lk), اُكْتُبِي (pr), اُكْتُبَا (dua), اُكْتُبُوا (jamak).',
         'Larangan BUKAN bentuk perintah yang disangkal, melainkan mudhari majzum yang didahului لَا.',
         'Beberapa kata perintah dipakai sehari-hari tanpa disadari asal-usulnya: تَفَضَّلْ, اِسْمَعْ, اِجْلِسْ.',
         'Untuk permintaan sopan sering dipakai مِنْ فَضْلِكَ, bukan mengubah bentuk kata perintahnya.'],
  ex:[['اُكْتُبِ الدَّرْسَ.','Tulislah pelajarannya.','uktubi ad-darsa.'],
      ['اِفْتَحِ الْبَابَ مِنْ فَضْلِكَ.','Tolong buka pintunya.','iftahi al-baba min fadhlika.'],
      ['اِجْلِسْ هُنَا.','Duduklah di sini.','ijlis huna.'],
      ['لَا تَنْسَ الْمَوْعِدَ.','Jangan lupa janjinya.','la tansa al-mauida.'],
      ['اُكْتُبِي اسْمَكِ.','Tulislah namamu. (kepada perempuan)','uktubi ismaki.'],
      ['تَفَضَّلُوا بِالدُّخُولِ.','Silakan masuk. (kepada banyak orang)','tafadhdhalu bid-dukhuli.']],
  traps:[['لَا اُكْتُبْ','لَا تَكْتُبْ','Larangan memakai mudhari, bukan bentuk perintah.'],
         ['اُكْتُبْ untuk perempuan','اُكْتُبِي','Bentuk perintah ikut berubah menurut lawan bicara.'],
         ['يَكْتُبْ sebagai perintah','اُكْتُبْ','Huruf awalnya harus dibuang dulu.'],
         ['اِكْتُبْ','اُكْتُبْ','Harakat hamzah mengikuti harakat tengah, di sini dhammah.']],
  drills:[
    { t:'mcq', q:'Bentuk perintah dari يَكْتُبُ adalah', opts:['يَكْتُبْ','اُكْتُبْ','اِكْتِبْ','كَتَبْ'], a:1,
      why:'Huruf awal dibuang, hamzah ditambahkan dengan harakat mengikuti tengahnya.' },
    { t:'mcq', q:'"Jangan menulis" =', opts:['لَا اُكْتُبْ','لَا تَكْتُبْ','لَمْ تَكْتُبْ','لَنْ تَكْتُبَ'], a:1,
      why:'Larangan memakai لَا + mudhari majzum.' },
    { t:'mcq', q:'Bentuk perintah kepada seorang perempuan berakhiran', opts:['ـْ','ـِي','ـُوا','ـَا'], a:1,
      why:'اُكْتُبِي — dengan ya di akhirnya.' },
    { t:'fill', q:'___ الْبَابَ مِنْ فَضْلِكَ. (bukalah pintunya — dari يَفْتَحُ)', a:['اِفْتَحِ'],
      why:'Tengahnya berharakat fathah, jadi hamzahnya berkasrah.' },
    { t:'mcq', q:'Hamzah tidak diperlukan kalau sesudah huruf awal dibuang, huruf sisanya', opts:['bersukun','sudah berharakat','berjamak','bertasydid'], a:1,
      why:'يُعَلِّمُ jadi عَلِّمْ, tanpa hamzah.' } ] },

{ id:'ar-q4', level:'1', title:'أَسْمَاء الإِشَارَة وَالمَوْصُول', titleId:'Ini, Itu, dan "Yang"',
  why:'Bahasa Indonesia cukup dengan "ini", "itu", dan "yang" tanpa perubahan apa pun. Bahasa Arab mengubah ketiganya menurut jenis kelamin dan jumlah — dan yang paling sering menjebak, susunan هَذَا الْكِتَابُ ("buku ini") berbeda artinya dari هَذَا كِتَابٌ ("ini sebuah buku") hanya karena ada tidaknya ال. Satu huruf mengubah kalimat penunjuk menjadi kalimat lengkap.',
  form:'PENUNJUK DEKAT: هَذَا (lk), هَذِهِ (pr), هَذَانِ (dua lk), هَؤُلَاءِ (jamak berakal)\nPENUNJUK JAUH: ذَلِكَ (lk), تِلْكَ (pr), أُولَئِكَ (jamak berakal)\nKATA SAMBUNG "yang": الَّذِي (lk), الَّتِي (pr), الَّذِينَ (jamak lk berakal)\nهَذَا كِتَابٌ = ini sebuah buku (kalimat lengkap)\nهَذَا الْكِتَابُ = buku ini (baru sebagian kalimat)',
  notes:['الَّذِي hanya dipakai kalau kata yang diterangkan MARIFAH; kalau nakirah, penghubungnya tidak ditulis sama sekali.',
         'Untuk jamak benda mati dipakai bentuk perempuan tunggal: هَذِهِ الْكُتُبُ.',
         'هَذِهِ ditulis dengan alif yang tidak dibaca; ejaannya tidak mencerminkan bunyinya.',
         'Penunjuk selalu mendahului kata bendanya, tidak pernah sesudahnya.',
         'Dalam ragam sehari-hari sering dipendekkan jadi هاد atau هاي, tapi tulisan baku tetap penuh.'],
  ex:[['هَذَا كِتَابٌ جَدِيدٌ.','Ini buku baru.','hadha kitabun jadidun.'],
      ['هَذَا الْكِتَابُ جَدِيدٌ.','Buku ini baru.','hadha al-kitabu jadidun.'],
      ['هَذِهِ سَيَّارَتِي.','Ini mobil saya.','hadhihi sayyarati.'],
      ['الرَّجُلُ الَّذِي يَتَكَلَّمُ مُدَرِّسٌ.','Lelaki yang sedang bicara itu guru.','ar-rajulu alladhi yatakallamu mudarrisun.'],
      ['تِلْكَ الْمَدِينَةُ بَعِيدَةٌ.','Kota itu jauh.','tilka al-madinatu baidatun.'],
      ['هَذِهِ الْكُتُبُ مُفِيدَةٌ.','Buku-buku ini bermanfaat.','hadhihi al-kutubu mufidatun.']],
  traps:[['هَذَا الْكِتَابُ artinya "ini buku"','هَذَا كِتَابٌ artinya "ini buku"','Dengan ال maknanya berubah jadi "buku ini".'],
         ['هَذَا سَيَّارَة','هَذِهِ سَيَّارَةٌ','سَيَّارَة muannats, jadi penunjuknya هَذِهِ.'],
         ['رَجُلٌ الَّذِي يَتَكَلَّمُ','رَجُلٌ يَتَكَلَّمُ','Kata nakirah tidak memakai الَّذِي.'],
         ['هَؤُلَاءِ الْكُتُبُ','هَذِهِ الْكُتُبُ','Jamak benda mati diperlakukan sebagai perempuan tunggal.']],
  drills:[
    { t:'mcq', q:'"Buku ini baru" =', opts:['هَذَا كِتَابٌ جَدِيدٌ','هَذَا الْكِتَابُ جَدِيدٌ','الْكِتَابُ هَذَا جَدِيدٌ','هَذِهِ الْكِتَابُ جَدِيدٌ'], a:1,
      why:'Dengan ال, penunjuk dan kata benda menyatu jadi satu frasa.' },
    { t:'mcq', q:'Penunjuk untuk سَيَّارَة adalah', opts:['هَذَا','هَذِهِ','هَؤُلَاءِ','ذَلِكَ'], a:1,
      why:'Berakhiran ة, jadi muannats.' },
    { t:'mcq', q:'الَّذِي dipakai hanya kalau kata yang diterangkan', opts:['nakirah','marifah','berjamak','berkata kerja'], a:1,
      why:'Kata nakirah tidak memakai penghubung sama sekali.' },
    { t:'fill', q:'___ الْكُتُبُ مُفِيدَةٌ. (buku-buku ini bermanfaat)', a:['هَذِهِ'],
      why:'Jamak benda mati diperlakukan sebagai perempuan tunggal.' },
    { t:'mcq', q:'Penunjuk jauh untuk perempuan adalah', opts:['ذَلِكَ','تِلْكَ','أُولَئِكَ','هَذِهِ'], a:1,
      why:'تِلْكَ الْمَدِينَةُ = kota itu.' } ] },

{ id:'ar-q5', level:'2', title:'حُرُوف الجَرّ', titleId:'Kata Kerja dan Huruf Jar Pasangannya',
  why:'Banyak kata kerja Arab tidak berdiri sendiri: maknanya baru lengkap kalau ditempeli huruf jar tertentu, dan huruf itu TIDAK bisa ditebak dari bahasa Indonesia. بَحَثَ عَنْ berarti mencari, tapi بَحَثَ فِي berarti meneliti. Penutur Indonesia yang menerjemahkan kata demi kata akan memasangkan huruf yang salah dan mengubah artinya tanpa sadar.',
  form:'Huruf jar utama: مِنْ (dari) · إِلَى (ke) · عَنْ (tentang, dari) · فِي (di) · عَلَى (atas) · بِ (dengan) · لِ (untuk) · كَ (seperti)\nSesudah huruf jar, kata bendanya MAJRUR (berkasrah atau bertanwin kasrah)\nPasangan yang harus dihafal: بَحَثَ عَنْ (mencari) · حَصَلَ عَلَى (memperoleh) · شَكَرَ لِ (berterima kasih atas) · رَغِبَ فِي (menginginkan) · قَدَرَ عَلَى (mampu)',
  notes:['Huruf jar بِ dan لِ dan كَ menempel langsung pada katanya, tanpa spasi.',
         'Kata ganti melekat berubah bentuk sesudah huruf jar: عَلَيْهِ bukan عَلَىهُ.',
         'بَحَثَ عَنْ = mencari; بَحَثَ فِي = meneliti. Huruf jarnya yang mengubah makna, bukan kata kerjanya.',
         'مِنْ juga menyatakan sebagian: كَثِيرٌ مِنَ الطُّلَّابِ = banyak dari mahasiswa.',
         'Sesudah إِلَى dan عَلَى, alif maqsurah berubah jadi ya ketika bertemu kata ganti.'],
  ex:[['أَبْحَثُ عَنْ مِفْتَاحِي.','Saya sedang mencari kunci saya.','abhatsu an miftahi.'],
      ['حَصَلْتُ عَلَى الشَّهَادَةِ.','Saya memperoleh ijazahnya.','hashaltu ala asy-syahadati.'],
      ['أَشْكُرُكَ عَلَى مُسَاعَدَتِكَ.','Terima kasih atas bantuanmu.','asykuruka ala musaadatika.'],
      ['ذَهَبْتُ إِلَى الْمُسْتَشْفَى.','Saya pergi ke rumah sakit.','dzahabtu ila al-mustasyfa.'],
      ['هَذَا الْكِتَابُ لِأَخِي.','Buku ini untuk saudara laki-laki saya.','hadha al-kitabu li akhi.'],
      ['كَتَبْتُ بِالْقَلَمِ.','Saya menulis dengan pena.','katabtu bil-qalami.']],
  traps:[['أَبْحَثُ فِي مِفْتَاحِي','أَبْحَثُ عَنْ مِفْتَاحِي','بَحَثَ فِي berarti meneliti, bukan mencari.'],
         ['حَصَلْتُ فِي الشَّهَادَةِ','حَصَلْتُ عَلَى الشَّهَادَةِ','حَصَلَ selalu berpasangan dengan عَلَى.'],
         ['ذَهَبْتُ الْمُسْتَشْفَى','ذَهَبْتُ إِلَى الْمُسْتَشْفَى','Tujuan wajib memakai إِلَى.'],
         ['بِ الْقَلَمِ','بِالْقَلَمِ','بِ menempel langsung tanpa spasi.']],
  drills:[
    { t:'mcq', q:'"Saya mencari kunci saya" =', opts:['أَبْحَثُ فِي مِفْتَاحِي','أَبْحَثُ عَنْ مِفْتَاحِي','أَبْحَثُ عَلَى مِفْتَاحِي','أَبْحَثُ مِفْتَاحِي'], a:1,
      why:'بَحَثَ عَنْ berarti mencari.' },
    { t:'mcq', q:'حَصَلَ berpasangan dengan huruf jar', opts:['فِي','عَلَى','مِنْ','إِلَى'], a:1,
      why:'حَصَلَ عَلَى = memperoleh.' },
    { t:'mcq', q:'Kata benda sesudah huruf jar berharakat', opts:['dhammah','fathah','kasrah','sukun'], a:2,
      why:'Semua yang didahului huruf jar menjadi majrur.' },
    { t:'fill', q:'ذَهَبْتُ ___ الْمُسْتَشْفَى. (ke rumah sakit)', a:['إِلَى'],
      why:'Tujuan ditandai إِلَى.' },
    { t:'mcq', q:'Perbedaan بَحَثَ عَنْ dan بَحَثَ فِي terletak pada', opts:['kata kerjanya','huruf jarnya, yang mengubah maknanya','jumlahnya','waktunya'], a:1,
      why:'عَنْ untuk mencari, فِي untuk meneliti.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'ar-qv-mal', title:'المَال وَالصِّحَّة', titleId:'Uang, Bank & Ke Dokter', level:'1', words:[
  ['مَال','mal','uang, harta'],
  ['نُقُود','nuqud','uang tunai'],
  ['بَنْك','bank','bank'],
  ['حِسَاب','hisab','rekening'],
  ['بِطَاقَة','bithaqah','kartu'],
  ['رَقْم سِرِّي','raqm sirri','kata sandi'],
  ['صَرَّاف آلِي','sarraf ali','mesin ATM'],
  ['سَحْب','sahb','penarikan uang'],
  ['إِيدَاع','idaa','penyetoran'],
  ['تَحْوِيل','tahwil','transfer'],
  ['عُمْلَة','umlah','mata uang'],
  ['سِعْر الصَّرْف','sir as-sarf','kurs'],
  ['رَسْم','rasm','biaya administrasi'],
  ['فَاتُورَة','fatura','tagihan'],
  ['إِيصَال','ishal','kuitansi'],
  ['رَاتِب','ratib','gaji'],
  ['قَرْض','qardh','pinjaman'],
  ['دَيْن','dain','utang'],
  ['تَوْفِير','taufir','tabungan'],
  ['مِيزَانِيَّة','mizaniyyah','anggaran'],
  ['طَبِيب','thabib','dokter'],
  ['عِيَادَة','iyadah','klinik'],
  ['مُسْتَشْفَى','mustasyfa','rumah sakit'],
  ['مَوْعِد','mauid','janji temu'],
  ['صَيْدَلِيَّة','shaidaliyyah','apotek'],
  ['دَوَاء','dawa','obat'],
  ['وَصْفَة','washfah','resep dokter'],
  ['أَلَم','alam','rasa sakit'],
  ['حُمَّى','humma','demam'],
  ['سُعَال','sual','batuk'],
  ['زُكَام','zukam','pilek'],
  ['صُدَاع','sudaa','sakit kepala'],
  ['غَثَيَان','ghatsayan','mual'],
  ['حَسَاسِيَّة','hasasiyyah','alergi'],
  ['تَحْلِيل','tahlil','pemeriksaan laboratorium'],
  ['حُقْنَة','huqnah','suntikan'],
  ['رَاحَة','rahah','istirahat'],
  ['تَأْمِين','tamin','asuransi'],
  ['طَوَارِئ','thawari','gawat darurat'],
  ['شِفَاء','syifa','kesembuhan']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Bank & Urusan Uang', items:[
  ['أُرِيدُ فَتْحَ حِسَابٍ.','uridu fatha hisabin.','Saya ingin membuka rekening.'],
  ['أُرِيدُ سَحْبَ مَبْلَغٍ.','uridu sahba mablaghin.','Saya ingin menarik sejumlah uang.'],
  ['كَمْ سِعْرُ الصَّرْفِ الْيَوْمَ؟','kam sir as-sarfi al-yauma?','Berapa kursnya hari ini?'],
  ['هَلْ هُنَاكَ رَسْمٌ؟','hal hunaka rasmun?','Apakah ada biaya administrasinya?'],
  ['أَيْنَ أَقْرَبُ صَرَّافٍ آلِيٍّ؟','aina aqrabu sarrafin aliyyin?','Di mana ATM terdekat?'],
  ['أُرِيدُ تَحْوِيلَ الْمَالِ.','uridu tahwila al-mali.','Saya ingin mentransfer uang.'],
  ['مِنْ فَضْلِكَ أَعْطِنِي إِيصَالًا.','min fadhlika athini ishalan.','Tolong berikan kuitansinya.'],
  ['نَسِيتُ رَقْمِي السِّرِّيَّ.','nasitu raqmi as-sirriyya.','Saya lupa kata sandi saya.']
] },
{ g:'Di Klinik & Apotek', items:[
  ['عِنْدِي مَوْعِدٌ مَعَ الطَّبِيبِ.','indi mauidun maa at-thabibi.','Saya punya janji dengan dokter.'],
  ['أَشْعُرُ بِأَلَمٍ هُنَا.','asyuru bi alamin huna.','Saya merasa sakit di sini.'],
  ['عِنْدِي حُمَّى مُنْذُ يَوْمَيْنِ.','indi humma mundzu yaumaini.','Saya demam sejak dua hari.'],
  ['هَلْ عِنْدَكَ حَسَاسِيَّةٌ؟','hal indaka hasasiyyatun?','Apakah Anda punya alergi?'],
  ['أَحْتَاجُ إِلَى وَصْفَةٍ.','ahtaju ila washfatin.','Saya perlu resep dokter.'],
  ['كَيْفَ آخُذُ هَذَا الدَّوَاءَ؟','kaifa akhudzu hadha ad-dawaa?','Bagaimana cara minum obat ini?'],
  ['هَلْ هَذَا الدَّوَاءُ بِوَصْفَةٍ؟','hal hadha ad-dawau bi washfatin?','Apakah obat ini harus pakai resep?'],
  ['عِنْدِي تَأْمِينٌ صِحِّيٌّ.','indi taminun shihhiyyun.','Saya punya asuransi kesehatan.']
] }
]

};
