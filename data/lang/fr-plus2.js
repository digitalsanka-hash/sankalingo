/* PRANCIS — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk sepuluh topik inti fr-g1..fr-g10. Tiap topik inti
      cuma punya dua latihan, sementara fr-p1..fr-p8 sudah punya empat
      dan topik bahasa Inggris rata-rata 4,7. Yang timpang justru topik
      DASARNYA. Ditambah tiga per topik inti.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (fr-q1..fr-q5). Semuanya tata bahasa dasar yang
      belum tertutup fr-g* maupun fr-p*, dan tiap satunya punya titik
      gelincir yang khas penutur Indonesia:
        q1 futur simple — masa depan yang sebenarnya, bukan futur proche
        q2 y dan en    — dua kata ganti yang tidak ada padanannya
        q3 accord du participe passé — kesesuaian yang tak terdengar
        q4 place des adjectifs — letaknya mengubah artinya
        q5 comparatif  — perbandingan

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema uang dan kesehatan
      sehari-hari. Grup "Belanja" dan "Keadaan Darurat" sudah ada, jadi
      yang ditambah di sini urusan bank dan kunjungan dokter biasa.

   Awalan id: tata bahasa fr-q, kosakata fr-qv-, supaya tidak pernah
   bentrok dengan fr-g*, fr-p*, fr-v*, fr-pv*.
   Kolom kedua adalah ancar-ancar bunyi dengan ejaan Indonesia.         */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK INTI ═════════════════════════ */
grammar: [

{ id:'fr-g1', drills:[
  { t:'mcq', q:'Kata sandang tertentu untuk kata benda jamak adalah', opts:['le','la','les','l'], a:2,
    why:'les dipakai untuk jamak, apa pun jenis kelaminnya.' },
  { t:'mcq', q:'Sebelum kata yang diawali huruf hidup, le dan la berubah jadi', opts:['les','l’ (apostrof)','un','de'], a:1,
    why:'Bentuknya l’: l’hôtel, l’ami.' },
  { t:'mcq', q:'Kata benda berakhiran -tion hampir selalu berjenis', opts:['laki-laki','perempuan','netral','dua-duanya'], a:1,
    why:'la nation, la question, la situation.' } ] },

{ id:'fr-g2', drills:[
  { t:'mcq', q:'Penyangkalan baku bahasa Prancis memakai', opts:['satu kata','dua kata yang mengapit kata kerja','tiga kata','akhiran khusus'], a:1,
    why:'ne … pas mengapit kata kerja yang ditasrifkan.' },
  { t:'mcq', q:'Dalam percakapan sehari-hari, yang sering dihilangkan adalah', opts:['pas','ne','kata kerjanya','subjeknya'], a:1,
    why:'Je sais pas — ne hilang dalam lisan, tapi tetap ditulis.' },
  { t:'mcq', q:'"Saya tidak pernah" =', opts:['je ne pas jamais','je ne jamais pas','je ne … jamais','je pas jamais'], a:2,
    why:'jamais menggantikan pas, tidak ditumpuk.' } ] },

{ id:'fr-g3', drills:[
  { t:'mcq', q:'Passé composé dibentuk dengan', opts:['avoir atau être + participe passé','être + infinitif','avoir + infinitif','aller + infinitif'], a:0,
    why:'J’ai mangé; je suis allé.' },
  { t:'mcq', q:'Kata kerja gerak dan perubahan keadaan memakai', opts:['avoir','être','aller','faire'], a:1,
    why:'aller, venir, partir, arriver, naître, mourir — semuanya dengan être.' },
  { t:'mcq', q:'Semua kata kerja pronominal memakai', opts:['avoir','être','faire','aller'], a:1,
    why:'Je me suis levé — tanpa kecuali.' } ] },

{ id:'fr-g4', drills:[
  { t:'mcq', q:'Kata kerja kelompok pertama berakhiran', opts:['-ir','-re','-er','-oir'], a:2,
    why:'parler, manger, aimer — kelompok terbesar dan paling teratur.' },
  { t:'mcq', q:'Bentuk nous dari parler adalah', opts:['parlons','parlez','parlent','parle'], a:0,
    why:'Akhiran -ons untuk nous pada hampir semua kata kerja.' },
  { t:'mcq', q:'Bentuk ils/elles dari parler adalah', opts:['parlent, dibaca sama dengan parle','parlez','parlons','parlé'], a:0,
    why:'Akhiran -ent tidak dibunyikan sama sekali.' } ] },

{ id:'fr-g5', drills:[
  { t:'mcq', q:'"Saya minum air" memakai', opts:['de l’eau','l’eau','une eau','des eau'], a:0,
    why:'Jumlah yang tak terhitung memakai partitif de l’.' },
  { t:'mcq', q:'Dalam kalimat menyangkal, du/de la/des berubah jadi', opts:['le','de','un','les'], a:1,
    why:'Je ne mange pas de pain.' },
  { t:'mcq', q:'Sesudah kata beaucoup dipakai', opts:['du','de','le','des'], a:1,
    why:'beaucoup de pain, beaucoup de livres.' } ] },

{ id:'fr-g6', drills:[
  { t:'mcq', q:'Futur proche dibentuk dengan', opts:['aller + infinitif','être + participe','avoir + infinitif','venir de + infinitif'], a:0,
    why:'Je vais partir = saya akan berangkat.' },
  { t:'mcq', q:'Passé récent dibentuk dengan', opts:['aller + infinitif','venir de + infinitif','être en train de','avoir + participe'], a:1,
    why:'Je viens de manger = saya baru saja makan.' },
  { t:'mcq', q:'"Saya sedang makan" =', opts:['je vais manger','je viens de manger','je suis en train de manger','j’ai mangé'], a:2,
    why:'être en train de menyatakan yang sedang berlangsung.' } ] },

{ id:'fr-g7', drills:[
  { t:'mcq', q:'Kata ganti objek langsung diletakkan', opts:['sesudah kata kerja','sebelum kata kerja','di akhir kalimat','sebelum subjek'], a:1,
    why:'Je le vois — berbeda dengan bahasa Indonesia.' },
  { t:'mcq', q:'"Saya memberikannya kepadanya" — kata ganti tak langsungnya adalah', opts:['le','lui','y','en'], a:1,
    why:'lui menggantikan à + orang.' },
  { t:'mcq', q:'Urutan dua kata ganti pada je le lui donne adalah', opts:['tak langsung dulu','langsung dulu lalu tak langsung untuk orang ketiga','bebas','selalu tak langsung dulu'], a:1,
    why:'me/te/nous/vous mendahului, tetapi lui/leur menyusul le/la/les.' } ] },

{ id:'fr-g8', drills:[
  { t:'mcq', q:'Imparfait dipakai untuk', opts:['kejadian sekali selesai','latar, kebiasaan, dan keadaan','masa depan','perintah'], a:1,
    why:'Il faisait beau, je lisais souvent.' },
  { t:'mcq', q:'Passé composé dipakai untuk', opts:['kebiasaan','kejadian yang memajukan cerita','keadaan cuaca','sifat orang'], a:1,
    why:'Peristiwa yang terjadi lalu selesai.' },
  { t:'mcq', q:'Dalam satu kalimat, biasanya imparfait menjadi', opts:['peristiwa utamanya','latarnya, disela peristiwa dalam passé composé','penyangkalannya','penutupnya'], a:1,
    why:'Je dormais quand le téléphone a sonné.' } ] },

{ id:'fr-g9', drills:[
  { t:'mcq', q:'Subjonctif muncul sesudah ungkapan yang menyatakan', opts:['kepastian','keinginan, perasaan, atau keraguan','waktu lampau','kebiasaan'], a:1,
    why:'Il faut que…, je veux que…, je doute que….' },
  { t:'mcq', q:'Sesudah je pense que dipakai', opts:['subjonctif','indicatif','infinitif','participe'], a:1,
    why:'Pikiran yang diyakini memakai indicatif; yang disangkal baru subjonctif.' },
  { t:'mcq', q:'Bentuk subjonctif dari être untuk je adalah', opts:['suis','sois','serai','étais'], a:1,
    why:'que je sois.' } ] },

{ id:'fr-g10', drills:[
  { t:'mcq', q:'Kalimat si + imparfait diikuti', opts:['futur simple','conditionnel présent','passé composé','subjonctif'], a:1,
    why:'Si j’avais le temps, je viendrais.' },
  { t:'mcq', q:'Kalimat si + présent diikuti', opts:['conditionnel','futur simple atau présent','imparfait','subjonctif'], a:1,
    why:'Si tu veux, je viens.' },
  { t:'mcq', q:'Sesudah si TIDAK PERNAH dipakai', opts:['présent','imparfait','futur atau conditionnel','plus-que-parfait'], a:2,
    why:'Ini kesalahan yang paling sering: si je serais salah.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'fr-q1', level:'A2', title:'Le futur simple', titleId:'Masa Depan yang Sesungguhnya',
  why:'Yang diajarkan lebih dulu adalah futur proche (je vais partir), dan itu memang paling sering dipakai berbicara. Tetapi begitu pemelajar membaca berita, ramalan cuaca, jadwal, atau surat resmi, yang muncul adalah futur simple — bentuk yang belum pernah dilihatnya. Kelebihan bentuk ini justru terletak pada satu hal yang mengejutkan: akhirannya persis akhiran kata kerja avoir, dan dasarnya adalah bentuk infinitif itu sendiri.',
  form:'Dasar: INFINITIF utuh + akhiran -ai, -as, -a, -ons, -ez, -ont\nparler → je parlerai, tu parleras, il parlera, nous parlerons\nKata kerja -re membuang e: prendre → je prendrai\nDasar tak beraturan yang wajib dihafal:\n  être → ser- · avoir → aur- · aller → ir- · faire → fer- · venir → viendr-\n  pouvoir → pourr- · vouloir → voudr- · devoir → devr- · voir → verr- · savoir → saur-',
  notes:['Akhirannya sama persis dengan bentuk avoir sekarang — ai, as, a, ons, ez, ont.',
         'Futur proche terasa lebih dekat dan lebih pasti; futur simple lebih jauh dan lebih tertulis.',
         'Sesudah quand, dès que, lorsque, bahasa Prancis memakai futur — berbeda dengan bahasa Indonesia yang memakai bentuk biasa.',
         'Dasar tak beraturan futur simple sama dengan dasar conditionnel, jadi menghafalnya sekali dipakai dua kali.',
         'Dalam ramalan cuaca dan jadwal, futur simple hampir selalu yang dipakai.'],
  ex:[['Demain, je partirai à huit heures.','Besok saya akan berangkat jam delapan.','demen, zye partire a wit ör'],
      ['Il fera beau ce week-end.','Akhir pekan ini cuacanya akan cerah.','il fera bo se wikend'],
      ['Nous serons là à midi.','Kami akan ada di sana jam dua belas.','nu seron la a midi'],
      ['Quand tu arriveras, appelle-moi.','Kalau kamu sudah sampai, telepon saya.','kan tu arivera, apel-mwa'],
      ['Tu pourras venir demain ?','Kamu bisa datang besok?','tu pura venir demen'],
      ['Ils verront le résultat la semaine prochaine.','Mereka akan melihat hasilnya minggu depan.','il veron le rezulta la semen prosyen']],
  traps:[['je serai dari dasar être- ','je serai dari dasar ser-','Dasarnya ser-, bukan être-.'],
         ['Quand tu arrives, appelle-moi','Quand tu arriveras, appelle-moi','Sesudah quand, bahasa Prancis memakai futur.'],
         ['je allerai','j’irai','aller memakai dasar ir-.'],
         ['je prendreai','je prendrai','Kata kerja -re membuang huruf e.']],
  drills:[
    { t:'mcq', q:'Futur simple dari partir untuk je adalah', opts:['je pars','je partirai','je vais partir','je partais'], a:1,
      why:'Infinitif utuh + akhiran -ai.' },
    { t:'mcq', q:'Dasar futur dari être adalah', opts:['êtr-','ser-','aur-','fer-'], a:1,
      why:'je serai, tu seras.' },
    { t:'mcq', q:'Akhiran futur simple sama persis dengan bentuk sekarang kata kerja', opts:['être','avoir','aller','faire'], a:1,
      why:'ai, as, a, ons, ez, ont.' },
    { t:'fill', q:'Quand tu ___, appelle-moi. (kalau kamu sampai — arriver)', a:['arriveras'],
      why:'Sesudah quand, bahasa Prancis memakai futur.' },
    { t:'mcq', q:'Dasar futur dari aller adalah', opts:['aller-','all-','ir-','ail-'], a:2,
      why:'j’irai, tu iras.' } ] },

{ id:'fr-q2', level:'B1', title:'Les pronoms y et en', titleId:'Dua Kata Ganti Tanpa Padanan',
  why:'Bahasa Indonesia mengulang saja kata bendanya, atau menghilangkannya begitu saja: "Kamu pergi ke Paris?" — "Ya, saya pergi." Bahasa Prancis tidak membolehkan keduanya: ia menuntut sebuah kata ganti kecil yang menggantikan seluruh frasa — y untuk yang didahului à, en untuk yang didahului de atau jumlah. Karena tidak ada padanannya, penutur Indonesia cenderung menghilangkannya, dan kalimatnya terdengar terpotong bagi penutur asli.',
  form:'y menggantikan à + benda atau tempat: Je pense à mon travail → J’y pense\n  Tu vas à Paris ? → Oui, j’y vais\nen menggantikan de + benda, atau jumlah: Tu veux du café ? → Oui, j’en veux\n  Il parle de son voyage → Il en parle\n  J’ai trois livres → J’en ai trois\nLetak: SEBELUM kata kerja, sama seperti kata ganti objek lain\nDengan jumlah, angkanya tetap disebut di belakang: J’en ai deux',
  notes:['y hanya untuk benda dan tempat; untuk orang dipakai lui, leur, atau à + kata ganti tegas.',
         'en wajib muncul kalau jumlahnya disebut: J’en ai trois, bukan J’ai trois.',
         'Dalam bentuk perintah positif, keduanya pindah ke belakang: Vas-y ! Prends-en !',
         'Vas-y menambahkan huruf s yang tidak ada pada perintah biasa va, semata karena bunyi.',
         'Il y a mengandung y yang sama, meski sudah membeku jadi satu ungkapan.'],
  ex:[['Tu vas à Paris ? — Oui, j’y vais.','Kamu pergi ke Paris? — Ya, saya ke sana.','tu va a pari — wi, zyi ve'],
      ['Tu veux du café ? — Oui, j’en veux.','Kamu mau kopi? — Ya, saya mau.','tu vö du kafe — wi, zyan vö'],
      ['J’ai trois livres. — J’en ai trois.','Saya punya tiga buku. — Saya punya tiga.','zye trwa livr — zyan e trwa'],
      ['Il parle de son voyage. — Il en parle.','Dia bicara tentang perjalanannya. — Dia membicarakannya.','il parl de son vwayazy — il an parl'],
      ['Vas-y !','Ayo ke sana!','va-zi'],
      ['Je pense à mon travail. — J’y pense.','Saya memikirkan pekerjaan saya. — Saya memikirkannya.','zye pans a mon travay — zyi pans']],
  traps:[['Oui, je vais','Oui, j’y vais','Frasa yang digantikan tidak boleh dihilangkan begitu saja.'],
         ['J’ai trois','J’en ai trois','Kalau jumlahnya disebut, en tetap wajib.'],
         ['Je pense y à mon travail','J’y pense','y menggantikan frasanya, bukan menemaninya.'],
         ['Va-y !','Vas-y !','Huruf s ditambahkan demi bunyi.']],
  drills:[
    { t:'mcq', q:'"Kamu pergi ke Paris? — Ya, saya ke sana" =', opts:['Oui, je vais','Oui, j’y vais','Oui, j’en vais','Oui, je la vais'], a:1,
      why:'y menggantikan à + tempat.' },
    { t:'mcq', q:'"Saya mau (kopi)" =', opts:['J’y veux','J’en veux','Je le veux','Je veux'], a:1,
      why:'en menggantikan du café.' },
    { t:'mcq', q:'"Saya punya tiga" =', opts:['J’ai trois','J’en ai trois','J’y ai trois','Je les ai trois'], a:1,
      why:'Kalau jumlahnya disebut, en tetap wajib.' },
    { t:'fill', q:'Je pense à mon travail. — J ___ pense.', a:['y'],
      why:'y menggantikan à + benda.' },
    { t:'mcq', q:'Untuk menggantikan à + ORANG dipakai', opts:['y','en','lui atau leur','le atau la'], a:2,
      why:'y hanya untuk benda dan tempat.' } ] },

{ id:'fr-q3', level:'B1', title:'L’accord du participe passé', titleId:'Kesesuaian yang Tidak Terdengar',
  why:'Ini aturan yang paling sering diabaikan penutur Indonesia, dan alasannya masuk akal: sebagian besar perubahannya TIDAK TERDENGAR sama sekali. Mangé, mangée, mangés, mangées dibunyikan sama persis. Karena telinga tidak menolongnya, satu-satunya jalan adalah mengetahui aturannya — dan aturan itu berbeda menurut kata bantunya, bahkan menurut letak objeknya.',
  form:'Dengan être: participe SELALU sesuai subjek — Elle est allée, ils sont partis\nDengan avoir: TIDAK sesuai subjek — Elle a mangé\n  KECUALI kalau objek langsung berdiri SEBELUM kata kerja:\n  La pomme que j’ai mangée · Je les ai vues\nKata kerja pronominal: sesuai subjek kalau objeknya langsung — Elle s’est levée\n  Tidak sesuai kalau objeknya tak langsung — Elle s’est lavé les mains',
  notes:['Aturan avoir hanya berlaku kalau objeknya SUDAH disebut lebih dulu — lewat que, lewat kata ganti, atau dalam pertanyaan.',
         'Sebagian besar kesesuaian tidak terdengar; yang terdengar hanya pada participe berakhiran konsonan seperti fait, mis, écrit.',
         'Kalimat elle s’est lavé les mains tidak sesuai karena tangannya objek langsung, dan ia berdiri SESUDAH kata kerja.',
         'Untuk kata kerja pronominal yang saling, aturannya sama: ils se sont écrit tidak sesuai karena écrire à quelqu’un.',
         'Dalam ujian tulis, inilah bagian yang paling sering dinilai; dalam percakapan hampir tidak ada akibatnya.'],
  ex:[['Elle est allée au marché.','Dia pergi ke pasar.','el et ale o marsye'],
      ['Ils sont partis hier.','Mereka berangkat kemarin.','il son parti yer'],
      ['Elle a mangé une pomme.','Dia makan sebuah apel.','el a manzye un pom'],
      ['La pomme qu’elle a mangée était bonne.','Apel yang dia makan itu enak.','la pom kel a manzye ete bon'],
      ['Je les ai vues hier.','Saya melihat mereka kemarin. (perempuan)','zye lez e vu yer'],
      ['Elle s’est lavé les mains.','Dia mencuci tangannya.','el se lave le men']],
  traps:[['Elle est allé','Elle est allée','Dengan être, participe sesuai subjek.'],
         ['Elle a mangée une pomme','Elle a mangé une pomme','Dengan avoir, tidak sesuai kalau objeknya di belakang.'],
         ['Je les ai vu','Je les ai vues','Objek langsung mendahului kata kerja, jadi harus sesuai.'],
         ['Elle s’est lavée les mains','Elle s’est lavé les mains','Objek langsungnya les mains, dan itu di belakang.']],
  drills:[
    { t:'mcq', q:'"Dia (perempuan) pergi" =', opts:['Elle est allé','Elle est allée','Elle a allé','Elle a allée'], a:1,
      why:'Dengan être, participe sesuai subjek.' },
    { t:'mcq', q:'"Dia makan sebuah apel" =', opts:['Elle a mangée une pomme','Elle a mangé une pomme','Elle est mangée une pomme','Elle a mangés une pomme'], a:1,
      why:'Dengan avoir dan objek di belakang, tidak ada kesesuaian.' },
    { t:'mcq', q:'"Saya melihat mereka (perempuan) kemarin" =', opts:['Je les ai vu','Je les ai vues','Je les ai vu hier','Je leur ai vues'], a:1,
      why:'Objek langsung mendahului kata kerja, jadi participe menyesuaikan.' },
    { t:'fill', q:'La pomme qu’elle a ___ était bonne. (manger)', a:['mangée'],
      why:'Objeknya la pomme berdiri sebelum kata kerja.' },
    { t:'mcq', q:'Alasan aturan ini sering diabaikan adalah', opts:['jarang muncul','perubahannya hampir tidak terdengar','hanya untuk sastra','tidak pernah diujikan'], a:1,
      why:'mangé dan mangée dibunyikan sama persis.' } ] },

{ id:'fr-q4', level:'A2', title:'La place et l’accord des adjectifs', titleId:'Letak Kata Sifat Mengubah Artinya',
  why:'Dalam bahasa Indonesia kata sifat selalu di belakang kata bendanya dan tidak pernah berubah bentuk. Bahasa Prancis melakukan dua hal yang berbeda sekaligus: kata sifatnya berubah menurut jenis dan jumlah, dan sebagian kecil justru berdiri DI DEPAN. Yang paling menjebak, beberapa kata sifat berubah ARTI menurut letaknya — un homme grand berarti lelaki jangkung, tetapi un grand homme berarti tokoh besar.',
  form:'Umumnya SESUDAH kata benda: une voiture rouge, un livre intéressant\nSEBELUM kata benda: beau, joli, jeune, vieux, grand, petit, gros, bon, mauvais, nouveau\nKesesuaian: + e untuk perempuan, + s untuk jamak — un petit chat, une petite chatte, des petits chats\nBerubah arti menurut letak:\n  un grand homme (tokoh besar) vs un homme grand (lelaki jangkung)\n  un ancien professeur (mantan) vs un bâtiment ancien (kuno)\n  ma propre chambre (sendiri) vs une chambre propre (bersih)',
  notes:['Kata sifat yang mendahului kata benda umumnya pendek dan sering dipakai.',
         'Sebelum kata benda jamak, des berubah jadi de: de beaux jardins.',
         'beau, nouveau, vieux punya bentuk khusus di depan huruf hidup: bel, nouvel, vieil.',
         'Kata sifat warna dan kebangsaan SELALU di belakang.',
         'Kalau dua kata sifat menerangkan satu benda, biasanya dihubungkan dengan et: une maison grande et blanche.'],
  ex:[['une voiture rouge','sebuah mobil merah','un vwatur ruzy'],
      ['une petite maison','sebuah rumah kecil','un ptit mezon'],
      ['un grand homme','seorang tokoh besar','en gran tom'],
      ['un homme grand','seorang lelaki jangkung','en om gran'],
      ['un bel appartement','sebuah apartemen yang indah','en bel apartman'],
      ['de beaux jardins','taman-taman yang indah','de bo zyarden']],
  traps:[['une rouge voiture','une voiture rouge','Warna selalu di belakang.'],
         ['un petit maison','une petite maison','maison perempuan, jadi kata sifatnya ikut berubah.'],
         ['un beau appartement','un bel appartement','Sebelum huruf hidup dipakai bentuk bel.'],
         ['des beaux jardins','de beaux jardins','Sebelum kata sifat jamak, des berubah jadi de.']],
  drills:[
    { t:'mcq', q:'"Sebuah mobil merah" =', opts:['une rouge voiture','une voiture rouge','un voiture rouge','une voiture rouges'], a:1,
      why:'Kata sifat warna selalu di belakang.' },
    { t:'mcq', q:'un grand homme berarti', opts:['lelaki jangkung','tokoh besar','lelaki tua','lelaki gemuk'], a:1,
      why:'Di depan kata benda, grand berarti besar dalam arti kiasan.' },
    { t:'mcq', q:'Bentuk beau sebelum kata berawalan huruf hidup adalah', opts:['beau','bel','belle','beaux'], a:1,
      why:'un bel appartement.' },
    { t:'fill', q:'une ___ maison (rumah kecil — petit)', a:['petite'],
      why:'maison perempuan, jadi ditambah e.' },
    { t:'mcq', q:'Sebelum kata sifat jamak yang mendahului kata benda, des berubah jadi', opts:['de','du','les','d'], a:0,
      why:'de beaux jardins.' } ] },

{ id:'fr-q5', level:'A2', title:'Comparatif et superlatif', titleId:'Perbandingan',
  why:'Bahasa Indonesia membandingkan dengan "lebih … daripada" dan "paling", tanpa mengubah apa pun. Bahasa Prancis menyusunnya berbeda — plus … que — lalu menyimpan dua kecualian yang justru paling sering dipakai: bon jadi meilleur, sementara bien jadi mieux. Penutur Indonesia hampir selalu memakai plus bon, yang salah, dan menukar meilleur dengan mieux karena bahasa Indonesia memakai satu kata "baik" untuk keduanya.',
  form:'Lebih: plus + kata sifat + que — Il est plus grand que moi\nKurang: moins + kata sifat + que — Elle est moins rapide que lui\nSama: aussi + kata sifat + que — Il est aussi grand que moi\nSuperlatif: le/la/les plus + kata sifat — la plus belle ville\nKecualian: bon → meilleur (kata sifat) · bien → mieux (kata keterangan)\n           mauvais → pire · mal → pis',
  notes:['meilleur menerangkan kata benda; mieux menerangkan kata kerja. Ini kunci membedakannya.',
         'plus bon dan plus bien dua-duanya salah dalam bahasa Prancis baku.',
         'Dalam superlatif, kata sandangnya ikut menyesuaikan: le plus grand, la plus grande.',
         'Kalau kata sifatnya berdiri di belakang kata benda, kata sandangnya diulang: la ville la plus belle.',
         'Untuk membandingkan jumlah dipakai plus de, moins de, autant de: plus de livres.'],
  ex:[['Il est plus grand que moi.','Dia lebih tinggi daripada saya.','il e plu gran ke mwa'],
      ['Elle est aussi rapide que lui.','Dia secepat dia.','el et osi rapid ke lwi'],
      ['C’est la plus belle ville de France.','Ini kota terindah di Prancis.','se la plu bel vil de frans'],
      ['Ce restaurant est meilleur que l’autre.','Restoran ini lebih baik daripada yang satunya.','se restoran e meyör ke lotr'],
      ['Il parle mieux que moi.','Dia bicara lebih baik daripada saya.','il parl myö ke mwa'],
      ['J’ai plus de livres que toi.','Saya punya lebih banyak buku daripada kamu.','zye plu de livr ke twa']],
  traps:[['plus bon','meilleur','bon punya bentuk perbandingan sendiri.'],
         ['plus bien','mieux','bien pun punya bentuknya sendiri.'],
         ['Il parle meilleur que moi','Il parle mieux que moi','Yang diterangkan kata kerja, jadi mieux.'],
         ['plus grand de moi','plus grand que moi','Pembandingnya diperkenalkan dengan que.']],
  drills:[
    { t:'mcq', q:'"Dia lebih tinggi daripada saya" =', opts:['Il est plus grand de moi','Il est plus grand que moi','Il est plus grand comme moi','Il est le plus grand que moi'], a:1,
      why:'Pembandingnya diperkenalkan dengan que.' },
    { t:'mcq', q:'Bentuk perbandingan dari bon adalah', opts:['plus bon','meilleur','mieux','le bon'], a:1,
      why:'bon termasuk kecualian.' },
    { t:'mcq', q:'"Dia bicara lebih baik daripada saya" =', opts:['Il parle meilleur que moi','Il parle mieux que moi','Il parle plus bien que moi','Il parle le mieux que moi'], a:1,
      why:'Yang diterangkan kata kerja, jadi memakai mieux.' },
    { t:'fill', q:'C’est la ___ belle ville de France. (paling)', a:['plus'],
      why:'Superlatif memakai le/la/les plus.' },
    { t:'mcq', q:'Perbedaan meilleur dan mieux adalah', opts:['tingkat kesopanannya','meilleur untuk kata benda, mieux untuk kata kerja','waktunya','jumlahnya'], a:1,
      why:'Bahasa Indonesia memakai satu kata "baik" untuk keduanya.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'fr-qv-argent', title:'L’argent et la santé', titleId:'Uang, Bank & Ke Dokter', level:'A2', words:[
  ['l’argent','larzyan','uang'],
  ['les espèces','lez espes','uang tunai'],
  ['la banque','la bank','bank'],
  ['le compte','le kont','rekening'],
  ['la carte bancaire','la kart banker','kartu bank'],
  ['le code','le kod','kode PIN'],
  ['le distributeur','le distributör','mesin ATM'],
  ['retirer','retire','menarik uang'],
  ['déposer','depoze','menyetor'],
  ['le virement','le virman','transfer'],
  ['la monnaie','la mone','mata uang, uang receh'],
  ['le taux de change','le to de syanzy','kurs'],
  ['les frais','le fre','biaya administrasi'],
  ['la facture','la faktur','tagihan'],
  ['le reçu','le resu','struk'],
  ['le salaire','le saler','gaji'],
  ['le prêt','le pre','pinjaman'],
  ['la dette','la det','utang'],
  ['l’épargne','leparny','tabungan'],
  ['le budget','le budzye','anggaran'],
  ['le médecin','le medsen','dokter'],
  ['le cabinet','le kabine','praktik dokter'],
  ['l’hôpital','lopital','rumah sakit'],
  ['le rendez-vous','le rande-vu','janji temu'],
  ['la pharmacie','la farmasi','apotek'],
  ['le médicament','le medikaman','obat'],
  ['l’ordonnance','lordonans','resep dokter'],
  ['la douleur','la dulör','rasa sakit'],
  ['la fièvre','la fyevr','demam'],
  ['la toux','la tu','batuk'],
  ['le rhume','le rum','pilek'],
  ['le mal de tête','le mal de tet','sakit kepala'],
  ['la nausée','la noze','mual'],
  ['l’allergie','lalerzyi','alergi'],
  ['l’analyse','lanaliz','pemeriksaan laboratorium'],
  ['la piqûre','la pikur','suntikan'],
  ['le repos','le repo','istirahat'],
  ['la mutuelle','la mutuel','asuransi kesehatan tambahan'],
  ['les urgences','lez urzyans','unit gawat darurat'],
  ['la guérison','la gerizon','kesembuhan']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Bank & Urusan Uang', items:[
  ['Je voudrais ouvrir un compte.','zye vudre uvrir en kont','Saya ingin membuka rekening.'],
  ['Où est le distributeur le plus proche ?','u e le distributör le plu prosy','Di mana ATM terdekat?'],
  ['Quel est le taux de change aujourd’hui ?','kel e le to de syanzy ozyurdwi','Berapa kursnya hari ini?'],
  ['Y a-t-il des frais ?','ya-t-il de fre','Apakah ada biaya administrasinya?'],
  ['Je voudrais retirer de l’argent.','zye vudre retire de larzyan','Saya ingin menarik uang.'],
  ['Puis-je faire un virement ?','pwi-zye fer en virman','Bisakah saya melakukan transfer?'],
  ['Je peux avoir un reçu, s’il vous plaît ?','zye pö avwar en resu, sil vu ple','Boleh minta struknya?'],
  ['J’ai oublié mon code.','zye ublije mon kod','Saya lupa kode PIN saya.']
] },
{ g:'Di Klinik & Apotek', items:[
  ['Je voudrais prendre rendez-vous.','zye vudre prandr rande-vu','Saya ingin membuat janji.'],
  ['J’ai mal ici.','zye mal isi','Saya sakit di sini.'],
  ['J’ai de la fièvre depuis deux jours.','zye de la fyevr depwi dö zyur','Saya demam sejak dua hari.'],
  ['Avez-vous des allergies ?','ave-vu dez alerzyi','Apakah Anda punya alergi?'],
  ['J’ai besoin d’une ordonnance.','zye bezwen dun ordonans','Saya perlu resep dokter.'],
  ['Comment prendre ce médicament ?','koman prandr se medikaman','Bagaimana cara minum obat ini?'],
  ['C’est disponible sans ordonnance ?','se disponibl san ordonans','Apakah ini bisa tanpa resep?'],
  ['J’ai une assurance santé.','zye un asurans sante','Saya punya asuransi kesehatan.']
] }
]

};
