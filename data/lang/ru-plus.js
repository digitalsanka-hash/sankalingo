/* RUSIA — MATERI TAMBAHAN (celah B1/B2 menuju TORFL-1 dan TORFL-2).

   Berkas asli (ru.js, ru-course.js) berhenti pada kasus dasar dan pengenalan
   aspek. Yang belum ada justru bagian yang menahan peserta di ambang ТРКИ-2:
   pemilihan aspek pada kasus sulit, kata kerja gerak berprefiks, причастие,
   деепричастие, pengandaian, perintah, kalimat tak langsung, dan konjungsi
   чтобы / если бы.

   Kode baru memakai awalan p supaya tidak pernah bentrok dengan ru-g1..ru-g10
   dan ru-v-*. Romanisasi memakai tanda tekanan (á é í ó ú ý) karena tekanan
   dalam bahasa Rusia tidak ditandai dalam tulisan dan mengubah bunyi vokal. */

export const PLUS = {

grammar: [

{
  id:'ru-p1',
  level:'B2',
  title:'Вид глагола: трудные случаи',
  titleId:'Aspek Kata Kerja Lanjutan',
  why:'Bahasa Indonesia menandai selesai atau belum dengan kata bantu lepas (sudah, sedang, belum) yang boleh dipakai di mana saja. Dalam bahasa Rusia pilihannya melekat pada kata kerjanya sendiri dan ada tempat-tempat yang sudah dipatok: sesudah kata kerja fase, di dalam larangan, dan pada pertanyaan pengalaman. Di situlah nilai TORFL-2 paling banyak jatuh.',
  form:'начать / стать / продолжать / кончить / перестать + INFINITIF IMPERFEKTIF (tanpa kecuali)\nне + imperatif imperfektif = larangan · не + imperatif perfektif = peringatan\nнельзя + imperfektif = terlarang · нельзя + perfektif = mustahil\nPertanyaan pengalaman (pernah atau belum) = lampau imperfektif',
  notes:[
    'Kata kerja fase — начать, стать, продолжать, кончить, перестать, прекратить — selalu diikuti infinitif imperfektif. Bentuk perfektif sesudahnya selalu salah.',
    'Lampau imperfektif dipakai untuk menanyakan apakah suatu peristiwa pernah terjadi, tanpa peduli hasilnya: Вы читали Толстого? Yang ditanya kejadiannya, bukan tuntasnya.',
    'Lampau perfektif menyisakan hasil yang masih berlaku sekarang; lampau imperfektif bisa berarti hasilnya sudah dibatalkan. Он открыл окно = jendelanya masih terbuka. Он открывал окно = sempat dibuka, lalu ditutup lagi.',
    'Larangan langsung memakai imperfektif (Не бери!). Bila maksudnya memperingatkan supaya sesuatu tidak terjadi tanpa sengaja, barulah perfektif: Не упади! Не забудьте паспорт!',
    'Kata keterangan menjadi petunjuk: обычно, часто, всегда, долго menarik imperfektif; вдруг, наконец, сразу, уже menarik perfektif.'
  ],
  ex:[
    ['Он начал читать роман вчера.','Dia mulai membaca novel itu kemarin.','On náchal chitát román vcherá.'],
    ['Вы читали «Войну и мир»?','Apakah Anda pernah membaca Perang dan Damai?','Vy chitáli «Vaynú i mir»?'],
    ['Он открывал окно, но сейчас оно закрыто.','Dia sempat membuka jendela, tetapi sekarang jendelanya tertutup.','On atkryvál aknó, no seychás anó zakrýta.'],
    ['Эту дверь нельзя открывать.','Pintu ini tidak boleh dibuka.','Étu dvyer nelzyá atkryvát.'],
    ['Эту дверь нельзя открыть — она сломана.','Pintu ini tidak bisa dibuka, rusak.','Étu dvyer nelzyá atkrýt — aná slómana.']
  ],
  traps:[
    ['Он начал прочитать книгу.','Он начал читать книгу.','Sesudah начать wajib infinitif imperfektif; hasilnya belum ada saat baru dimulai.'],
    ['Не возьми это!','Не бери это!','Larangan langsung memakai imperatif imperfektif. Не возьми berarti peringatan supaya tidak terambil tanpa sengaja.'],
    ['Я уже делал домашнее задание.','Я уже сделал домашнее задание.','Kalau yang dimaksud pekerjaannya sudah jadi, уже menuntut perfektif.'],
    ['Я каждый день прочитал газету.','Я каждый день читал газету.','каждый день menandai kebiasaan, jadi wajib imperfektif.']
  ],
  drills:[
    { t:'mcq', q:'Sesudah начать, продолжать, dan перестать dipakai infinitif', opts:['perfektif','imperfektif','bebas keduanya','bentuk lampau'], a:1, why:'Kata kerja fase menyoroti prosesnya, bukan hasilnya, sehingga selalu imperfektif.' },
    { t:'mcq', q:'"Jangan ambil itu!" sebagai larangan =', opts:['Не возьми это!','Не взять это!','Не бери это!','Не брал это!'], a:2, why:'бери adalah imperatif imperfektif dari брать — bentuk baku untuk melarang.' },
    { t:'mcq', q:'«Он открывал окно» paling tepat berarti', opts:['jendela sempat dibuka lalu ditutup lagi','jendela dibuka dan sampai sekarang masih terbuka','jendela akan dibuka nanti','jendela gagal dibuka'],a:0, why:'Lampau imperfektif tidak menjamin hasilnya bertahan; hasilnya bisa sudah dibatalkan.' }
  ]
},

{
  id:'ru-p2',
  level:'B1',
  title:'Глаголы движения с приставками',
  titleId:'Kata Kerja Gerak Berprefiks',
  why:'Bahasa Indonesia memakai kata terpisah untuk arah — datang, pergi, masuk, keluar, mampir — lalu menempelkan preposisi bebas. Bahasa Rusia memampatkan arah ke dalam prefiks, dan prefiks itu yang MENENTUKAN preposisi berikutnya. Penutur Indonesia biasanya hafal arti prefiksnya tetapi memasang preposisi yang salah.',
  form:'при- datang · у- pergi meninggalkan · в(о)- masuk · вы- keluar\nпод- mendekat · от- menjauh · до- sampai ke · за- mampir · пере- menyeberang, pindah · про- lewat\nprefiks + идти/ехать = PERFEKTIF · prefiks + ходить/-езжать = IMPERFEKTIF',
  notes:[
    'Prefiks memilih preposisinya: прийти В школу (akusatif), уйти ИЗ школы (genitif), подойти К окну (datif), отойти ОТ окна (genitif), дойти ДО угла (genitif).',
    'Pembedaan jalan kaki dan berkendara tetap berlaku: приходить/прийти untuk berjalan, приезжать/приехать untuk berkendara. Perpindahan antarkota dan antarnegara selalu memakai batang -ехать.',
    'Bentuk imperfektifnya memakai batang -ходить atau -езжать — bukan -ездить: уезжать, приезжать, выезжать, заезжать.',
    'Ejaan berubah sesudah prefiks: идти menjadi -йти (прийти, уйти, войти, выйти), dan muncul о penyambung sebelum gugus konsonan (войти, войду, обойти).',
    'по- berbeda dari yang lain: ia tidak menyatakan arah melainkan permulaan gerak — пойти berarti mulai berangkat, bukan tiba.'
  ],
  ex:[
    ['Он пришёл домой в семь часов.','Dia sampai di rumah pukul tujuh.','On prishyól damóy v syem chasóf.'],
    ['Она уехала из Москвы вчера.','Dia berangkat meninggalkan Moskwa kemarin.','Aná uyékhala iz Maskvý vcherá.'],
    ['Подойдите к окну, пожалуйста.','Tolong mendekat ke jendela.','Padaydítye k aknú, pazhálusta.'],
    ['Мы переехали в новую квартиру.','Kami pindah ke apartemen baru.','My pereyékhali v nóvuyu kvartíru.'],
    ['Зайди ко мне после работы.','Mampirlah ke tempatku sesudah kerja.','Zaydí ka mnye pósle rabóty.']
  ],
  traps:[
    ['Я пришёл из Индонезии.','Я приехал из Индонезии.','Jarak antarnegara memakai batang -ехать; -идти hanya untuk jalan kaki.'],
    ['Я вышел в комнату.','Я вошёл в комнату.','вы- berarti keluar. Masuk memakai в(о)-, dan bentuknya вошёл.'],
    ['Он подошёл окну.','Он подошёл к окну.','Prefiks под- selalu berpasangan dengan preposisi к + datif.'],
    ['Мы уехали в Москву из дома в семь.','Мы выехали из дома в семь.','у- menyoroti meninggalkan tempat; kalau titik tolaknya disebut dengan из dipakai вы-.']
  ],
  drills:[
    { t:'mcq', q:'"Saya datang dari Indonesia" (jarak jauh) =', opts:['Я пришёл из Индонезии','Я приехал из Индонезии','Я ушёл из Индонезии','Я хожу из Индонезии'], a:1, why:'Perjalanan antarnegara memakai batang -ехать, dan при- menandai tiba.' },
    { t:'mcq', q:'Prefiks под- menuntut preposisi', opts:['в + akusatif','из + genitif','к + datif','о + preposisional'], a:2, why:'подойти к окну, подойти к столу — pasangannya tetap к + datif.' },
    { t:'mcq', q:'Bentuk imperfektif dari уехать adalah', opts:['уезжать','уездить','уходить','уйти'], a:0, why:'Imperfektif berprefiks memakai batang -езжать, bukan -ездить.' }
  ]
},

{
  id:'ru-p3',
  level:'B2',
  title:'Причастия',
  titleId:'Kata Sifat Verbal',
  why:'Bahasa Indonesia menyelesaikan semuanya dengan satu kata: yang. "Orang yang membaca" dan "buku yang dibaca" memakai penanda yang sama, tanpa penunjuk waktu maupun pelaku. Bahasa Rusia punya empat причастие berbeda yang sekaligus menandai waktu, pelaku atau sasaran, dan harus menyesuaikan kasus. Ini isi utama bacaan TORFL-2 ke atas.',
  form:'Aktif kini: bentuk jamak ke-3 kini − т + щий → читают → читающий\nAktif lampau: infinitif − ть + вший → читать → читавший, прочитать → прочитавший\nPasif kini: bentuk jamak ke-1 kini + ый → читаем → читаемый\nPasif lampau: perfektif transitif + нн / енн / т → прочитать → прочитанный, построить → построенный, открыть → открытый',
  notes:[
    'Причастие berperilaku seperti kata sifat: harus sesuai jenis kelamin, jumlah, DAN kasus kata benda yang diterangkan. Inilah yang paling sering lolos dari perhatian.',
    'Bentuk pendek pasif lampau dipakai sebagai predikat: Письмо написано. Дверь открыта. Работа сделана. Bentuk panjangnya menerangkan kata benda, bukan menjadi predikat.',
    'Pasif lampau hampir selalu berasal dari kata kerja perfektif transitif; pasif kini hanya dari imperfektif transitif (читаемый, любимый, уважаемый).',
    'Kelompok причастие yang berdiri sesudah kata benda diapit koma: Книга, лежащая на столе, моя.',
    'Dalam percakapan orang Rusia lebih memilih anak kalimat который. Причастие adalah ragam tulis dan berita — dan justru itu yang diujikan.'
  ],
  ex:[
    ['Студент, читающий газету, — мой брат.','Mahasiswa yang sedang membaca koran itu saudara saya.','Studyént, chitáyushchiy gazyétu, — moy brat.'],
    ['Книга, прочитанная вчера, лежит на столе.','Buku yang dibaca kemarin itu ada di atas meja.','Kníga, prachítannaya vcherá, lezhít na stalyé.'],
    ['Мы говорили с человеком, работавшим в Москве.','Kami berbicara dengan orang yang dulu bekerja di Moskwa.','My gavaríli s chelavyékam, rabótavshim v Maskvyé.'],
    ['Письмо уже написано.','Suratnya sudah ditulis.','Pismó uzhé napísana.'],
    ['Это самый читаемый журнал в стране.','Ini majalah yang paling banyak dibaca di negeri ini.','Éta sámiy chitáyemiy zhurnál v straryé.']
  ],
  traps:[
    ['Мужчина, который читающий газету, мой отец.','Мужчина, читающий газету, мой отец.','Который dan причастие tidak boleh ditumpuk; pilih salah satu.'],
    ['Книга, прочитанный вчера, лежит на столе.','Книга, прочитанная вчера, лежит на столе.','Причастие menyesuaikan jenis kelamin kata bendanya; книга feminin.'],
    ['Дверь открытая.','Дверь открыта.','Sebagai predikat dipakai bentuk pendek pasif lampau.'],
    ['Я говорил с человеком, работавший в Москве.','Я говорил с человеком, работавшим в Москве.','с человеком berkasus instrumental, jadi причастие ikut instrumental.']
  ],
  drills:[
    { t:'mcq', q:'читают → причастие aktif bentuk kini adalah', opts:['читавший','читающий','читаемый','прочитанный'], a:1, why:'Ambil bentuk jamak ke-3 kini читают, buang -т, tambahkan -щий.' },
    { t:'mcq', q:'"Suratnya sudah ditulis" =', opts:['Письмо написанное','Письмо написан','Письмо написана','Письмо написано'], a:3, why:'письмо netral, jadi bentuk pendeknya berakhiran -о.' },
    { t:'mcq', q:'Причастие pasif lampau umumnya dibentuk dari kata kerja', opts:['imperfektif taktransitif','imperfektif transitif','semua kata kerja','perfektif transitif'], a:3, why:'Hasil yang selesai dan berobjek — прочитать, построить, открыть — itulah sumbernya.' }
  ]
},

{
  id:'ru-p4',
  level:'B2',
  title:'Деепричастия',
  titleId:'Keterangan Verbal',
  why:'Dalam bahasa Indonesia kalimat seperti "Sambil menunggu bus, topi saya terbang" terasa wajar karena pelaku anak kalimat boleh berbeda dari subjek induknya. Dalam bahasa Rusia hal itu kesalahan berat: pelaku деепричастие WAJIB sama dengan subjek kalimat utama. Ini kesalahan nomor satu penutur Indonesia pada karangan TORFL-2.',
  form:'Imperfektif (serentak): batang jamak ke-3 kini + -я → читают → читая, говорят → говоря\nPerfektif (lebih dulu terjadi): infinitif − ть + -в → прочитать → прочитав, сказать → сказав\nKhusus: идти → идя · прийти → придя · быть → будучи',
  notes:[
    'Aturan mutlak: pelaku деепричастие harus sama dengan subjek kalimat utama. Kalau pelakunya berbeda, gunakan anak kalimat dengan когда, так как, после того как.',
    'Bentuk imperfektif menyatakan dua perbuatan yang berlangsung serentak; bentuk perfektif menyatakan perbuatan yang selesai lebih dulu.',
    'Kalimat tanpa subjek nominatif (мне стало грустно, у меня болит голова) tidak boleh dipasangi деепричастие sama sekali.',
    'Beberapa kata kerja tidak punya bentuk ini dalam bahasa modern: писать, петь, пить, ждать, бежать, мочь. Untuk kata-kata itu pakai anak kalimat biasa.',
    'Negatif cukup dengan menaruh не di depan: не зная, не подумав, не сказав ни слова.'
  ],
  ex:[
    ['Читая книгу, он делал заметки.','Sambil membaca buku, dia membuat catatan.','Chitáya knígu, on dyélal zamyétki.'],
    ['Прочитав письмо, она заплакала.','Setelah membaca surat itu, dia menangis.','Prachitáf pismó, aná zaplákala.'],
    ['Не зная адреса, я позвонил другу.','Karena tidak tahu alamatnya, saya menelepon teman.','Ne znáya ádresa, ya pazvaníl drúgu.'],
    ['Придя домой, он сразу лёг спать.','Begitu sampai rumah, dia langsung tidur.','Pridyá damóy, on srázu lyok spat.'],
    ['Он ушёл, не сказав ни слова.','Dia pergi tanpa mengucapkan sepatah kata pun.','On ushyól, ne skazáf ni slóva.']
  ],
  traps:[
    ['Подъезжая к станции, у меня слетела шляпа.','Когда я подъезжал к станции, у меня слетела шляпа.','Pelaku деепричастие harus sama dengan subjek kalimat utama; di sini subjeknya шляпа.'],
    ['Прочитав книгу, мне стало грустно.','Когда я прочитал книгу, мне стало грустно.','Kalimat tanpa subjek nominatif tidak boleh memakai деепричастие.'],
    ['Пиша письмо, я слушал музыку.','Когда я писал письмо, я слушал музыку.','писать tidak punya деепричастие dalam bahasa Rusia modern.'],
    ['Прочитая книгу, он лёг спать.','Прочитав книгу, он лёг спать.','Bentuk perfektif memakai akhiran -в, bukan -я.']
  ],
  drills:[
    { t:'mcq', q:'прочитать → деепричастие yang benar', opts:['прочитая','прочитав','прочитавший','прочитанный'], a:1, why:'Perfektif membuang -ть lalu menambah -в.' },
    { t:'mcq', q:'Syarat mutlak pemakaian деепричастие adalah', opts:['harus ada dua kata kerja perfektif','kalimatnya harus berbentuk lampau','pelakunya sama dengan subjek kalimat utama','harus didahului когда'], a:2, why:'Inilah aturan yang paling sering dilanggar dan paling mahal nilainya.' },
    { t:'mcq', q:'Kata kerja yang TIDAK punya деепричастие', opts:['говорить','делать','читать','писать'], a:3, why:'Bentuk пиша tidak dipakai dalam bahasa Rusia modern.' }
  ]
},

{
  id:'ru-p5',
  level:'B1',
  title:'Условное наклонение (бы)',
  titleId:'Pengandaian',
  why:'Kata "kalau" dan "seandainya" dalam bahasa Indonesia tidak mengubah kata kerjanya sedikit pun, sehingga penutur Indonesia menulis если бы я буду — memakai bentuk depan. Ditambah lagi, "kalau" dan "apakah" sering tertukar, sehingga если dipakai untuk melaporkan pertanyaan. Dua kekeliruan ini muncul hampir di setiap karangan pemula.',
  form:'бы + kata kerja bentuk LAMPAU — untuk waktu apa pun\nЕсли бы + lampau …, … бы + lampau → pengandaian tidak nyata\nЕсли + bentuk nyata (tanpa бы) → syarat yang mungkin terjadi',
  notes:[
    'Bentuk lampau di sini bukan penanda waktu, melainkan penanda ketidaknyataan. Waktunya ditentukan konteks atau kata seperti сейчас, тогда, вчера.',
    'Syarat yang masih mungkin terjadi tidak pernah memakai бы: Если будет время, я приду.',
    'бы juga memperhalus permintaan dan keinginan: Я хотел бы…, Мне хотелось бы…, Не могли бы вы…',
    'Letak бы longgar: Я бы это сделал dan Я это сделал бы sama-sama benar; yang penting бы berdiri dekat kata yang ditekankan.',
    'Untuk "apakah" di dalam kalimat tak langsung dipakai ли, bukan если.'
  ],
  ex:[
    ['Если бы у меня было время, я бы поехал в Россию.','Seandainya saya punya waktu, saya akan pergi ke Rusia.','Yésli by u minyá býla vryémya, ya by payékhal v Rasíyu.'],
    ['Если будет время, я приеду.','Kalau nanti ada waktu, saya akan datang.','Yésli búdet vryémya, ya priyédu.'],
    ['Я хотел бы заказать столик на двоих.','Saya ingin memesan meja untuk dua orang.','Ya khatyél by zakazát stólik na dvaíkh.'],
    ['Не могли бы вы говорить медленнее?','Bisakah Anda bicara lebih pelan?','Ne maglí by vy gavarít myédlenneye?'],
    ['Без твоей помощи я бы не справился.','Tanpa bantuanmu saya tidak akan berhasil.','Byes tvayéy pómashchi ya by ne správilsya.']
  ],
  traps:[
    ['Если бы я буду знать, я бы сказал.','Если бы я знал, я бы сказал.','Sesudah если бы wajib bentuk lampau, tidak pernah bentuk depan.'],
    ['Я не знаю, если он придёт.','Я не знаю, придёт ли он.','Untuk "apakah" dipakai ли; если hanya untuk syarat.'],
    ['Если бы я имею деньги, я купил бы машину.','Если бы у меня были деньги, я купил бы машину.','Kepemilikan memakai у меня + genitif, dan pengandaian menuntut bentuk lampau.'],
    ['Если бы ты придёшь завтра, я буду рад.','Если ты придёшь завтра, я буду рад.','Kalau kejadiannya masih mungkin, jangan memakai бы sama sekali.']
  ],
  drills:[
    { t:'mcq', q:'Sesudah если бы kata kerjanya berbentuk', opts:['depan','sekarang','lampau','infinitif'], a:2, why:'Bentuk lampau di sini menandai ketidaknyataan, bukan waktu.' },
    { t:'mcq', q:'"Saya tidak tahu apakah dia akan datang" =', opts:['Я не знаю, если он придёт','Я не знаю, придёт ли он','Я не знаю, чтобы он придёт','Я не знаю, что он придёт'], a:1, why:'ли berdiri di posisi kedua, sesudah kata yang ditanyakan.' },
    { t:'mcq', q:'Syarat yang masih mungkin terjadi ditandai dengan', opts:['если tanpa бы','если бы','чтобы','ли'], a:0, why:'бы hanya dipakai kalau syaratnya bertentangan dengan kenyataan.' }
  ]
},

{
  id:'ru-p6',
  level:'B1',
  title:'Повелительное наклонение',
  titleId:'Kalimat Perintah',
  why:'Perintah dalam bahasa Indonesia cukup memakai kata dasarnya — baca, tunggu, masuk — sehingga penutur Indonesia menyangka infinitif Rusia bisa dipakai begitu saja (Читать это!). Selain itu, sopan atau kasar dalam bahasa Rusia sering ditentukan oleh ASPEK, bukan oleh kata tolong: Проходите terdengar ramah, Пройдите terdengar seperti perintah petugas.',
  form:'Ambil batang jamak ke-3 bentuk kini:\n berakhir vokal → + й : читают → читай(те), работают → работай(те)\n berakhir konsonan, tekanan di akhiran → + и : говорят → говори(те), пишут → пиши(те)\n berakhir konsonan, tekanan di batang → + ь : будут → будь(те), готовят → готовь(те)\nSopan atau kepada banyak orang: tambahkan -те',
  notes:[
    'Permintaan sekali dan konkret memakai perfektif: Откройте окно. Дайте, пожалуйста, меню.',
    'Tawaran, persilakan, dan ajakan memakai imperfektif — inilah bentuk yang terdengar ramah: Проходите! Садитесь! Берите ещё!',
    'Larangan memakai imperfektif (Не открывай!), sedangkan не + perfektif berarti peringatan supaya sesuatu tidak terjadi tanpa sengaja (Не забудьте паспорт! Не упадите!).',
    'Bentuk tak beraturan yang wajib dihafal: дай(те), ешь(те), пей(те), ляг(те), и поезжай(те) — bentuk едь tidak ada dalam bahasa baku.',
    'Ajakan "mari kita" memakai давай(те): Давайте пойдём в кафе, atau Давайте говорить по-русски.'
  ],
  ex:[
    ['Откройте, пожалуйста, окно.','Tolong buka jendelanya.','Atkróyte, pazhálusta, aknó.'],
    ['Проходите, садитесь!','Silakan masuk, silakan duduk!','Prakhadítye, sadítyes!'],
    ['Не забудьте паспорт.','Jangan sampai lupa paspor.','Ne zabúdtye pásport.'],
    ['Давайте пойдём в кафе.','Ayo kita ke kafe.','Daváyte paydyóm v kafé.'],
    ['Поезжайте прямо, потом направо.','Jalan lurus, lalu belok kanan.','Payezzháyte pryáma, patóm napráva.']
  ],
  traps:[
    ['Читать это, пожалуйста!','Прочитайте это, пожалуйста!','Perintah kepada orang tidak memakai infinitif dalam percakapan biasa.'],
    ['Не открой окно!','Не открывай окно!','Larangan memakai imperatif imperfektif.'],
    ['Едьте прямо.','Поезжайте прямо.','ехать tidak punya imperatif sendiri; bentuk bakunya поезжай(те).'],
    ['Пройдите, садитесь!','Проходите, садитесь!','Perfektif di sini terdengar seperti perintah petugas; persilakan memakai imperfektif.']
  ],
  drills:[
    { t:'mcq', q:'работают → bentuk perintah sopan adalah', opts:['работайте','работите','работьте','работать'], a:0, why:'Batangnya работа- berakhir vokal, jadi tinggal ditambah й lalu -те.' },
    { t:'mcq', q:'Imperatif dari ехать yang baku', opts:['едьте','ехайте','поезжайте','едете'], a:2, why:'Bahasa Rusia baku memakai поезжайте; едьте dan ехайте dianggap salah.' },
    { t:'mcq', q:'Persilakan yang ramah — Silakan masuk, silakan duduk — memakai aspek', opts:['imperfektif','perfektif','infinitif','lampau'], a:0, why:'Проходите dan садитесь berbentuk imperfektif; bentuk perfektifnya terdengar memerintah.' }
  ]
},

{
  id:'ru-p7',
  level:'B2',
  title:'Косвенная речь',
  titleId:'Kalimat Tak Langsung',
  why:'Di sini bahasa Indonesia justru menolong: sama seperti bahasa Rusia, waktunya tidak digeser. Yang menyesatkan adalah kebiasaan bahasa Inggris yang diajarkan di sekolah (he said he WAS working), sehingga penutur Indonesia menggeser kata kerjanya ke lampau tanpa perlu. Kekeliruan kedua: memakai если untuk melaporkan pertanyaan ya-tidak, padahal yang dipakai ли.',
  form:'Berita: …, что + kata kerja TETAP seperti ucapan aslinya\nPertanyaan berkata tanya: …, где / когда / почему / кто + …\nPertanyaan ya-tidak: …, + kata yang ditanyakan + ли + …\nPerintah: …, чтобы + kata kerja bentuk LAMPAU',
  notes:[
    'Bahasa Rusia tidak mengenal pergeseran waktu. «Я работаю» tetap работает ketika dilaporkan, meski kalimat induknya lampau.',
    'ли tidak pernah berdiri di awal anak kalimat. Ia menempati posisi kedua, tepat sesudah kata yang ditanyakan: приду ли я, работает ли он, дома ли она.',
    'Perintah yang dilaporkan memakai чтобы + bentuk lampau, atau попросить кого-то + infinitif: Он попросил меня подождать.',
    'Kata ganti orang tetap harus disesuaikan, dan kata waktu diselaraskan dengan logika: сегодня bisa menjadi в тот день.',
    'Koma sebelum что, чтобы, dan anak kalimat berли selalu wajib — tanda baca ini ikut dinilai pada bagian menulis.'
  ],
  ex:[
    ['Он сказал, что он работает в банке.','Dia bilang dia bekerja di bank.','On skazál, shto on rabótayet v bánke.'],
    ['Она спросила, где я живу.','Dia bertanya di mana saya tinggal.','Aná sprasíla, gdye ya zhivú.'],
    ['Он спросил, приду ли я завтра.','Dia bertanya apakah saya akan datang besok.','On sprasíl, pridú li ya závtra.'],
    ['Мама сказала, чтобы я купил хлеб.','Ibu menyuruh saya membeli roti.','Máma skazála, shtóby ya kupíl khlyep.'],
    ['Он попросил меня подождать.','Dia meminta saya menunggu.','On paprasíl minyá padazhdát.']
  ],
  traps:[
    ['Он сказал, что он работал в банке.','Он сказал, что он работает в банке.','Kalau maksudnya dia masih bekerja di sana, waktunya tidak digeser seperti dalam bahasa Inggris.'],
    ['Он спросил, если я приду.','Он спросил, приду ли я.','Pertanyaan ya-tidak memakai ли; если hanya untuk syarat.'],
    ['Он сказал, чтобы я приду.','Он сказал, чтобы я пришёл.','Sesudah чтобы wajib bentuk lampau.'],
    ['Она спросила, ли я студент.','Она спросила, студент ли я.','ли tidak boleh berdiri di awal anak kalimat.']
  ],
  drills:[
    { t:'mcq', q:'Ucapan «Я работаю» dilaporkan menjadi', opts:['Он сказал, что он работал','Он сказал, что он работает','Он сказал, чтобы он работал','Он сказал, если он работает'], a:1, why:'Bahasa Rusia tidak menggeser waktu; bentuk kininya dipertahankan.' },
    { t:'mcq', q:'Pertanyaan ya-tidak dalam kalimat tak langsung memakai', opts:['если','что','ли','чтобы'], a:2, why:'ли berdiri sesudah kata yang ditanyakan, bukan di awal.' },
    { t:'mcq', q:'Perintah yang dilaporkan memakai', opts:['ли + bentuk depan','что + bentuk kini','если + infinitif','чтобы + bentuk lampau'], a:3, why:'чтобы mengandung бы, sehingga kata kerjanya berbentuk lampau.' }
  ]
},

{
  id:'ru-p8',
  level:'B2',
  title:'Союзы чтобы и если бы',
  titleId:'Konjungsi Maksud dan Andai',
  why:'Kata "supaya" dan "agar" dalam bahasa Indonesia diikuti kalimat biasa, pelakunya sama atau berbeda tidak jadi soal: saya datang supaya bisa bicara, saya ingin supaya kamu datang. Bahasa Rusia memisahkan dua hal itu dengan tegas — pelaku sama menuntut infinitif, pelaku berbeda menuntut bentuk lampau. Salah pilih di sini langsung terdengar seperti bahasa orang asing.',
  form:'Pelaku SAMA → чтобы + INFINITIF : Я пришёл, чтобы поговорить.\nPelaku BERBEDA → чтобы + bentuk LAMPAU : Я хочу, чтобы ты пришёл.\nFakta → что · Maksud dan keinginan → чтобы · Syarat nyata → если · Andai → если бы',
  notes:[
    'чтобы sebenarnya gabungan что + бы. Karena mengandung бы, kata kerjanya berbentuk lampau — persis seperti pada pengandaian.',
    'Sesudah хотеть, просить, требовать, советовать, нужно, надо dengan pelaku berbeda selalu dipakai чтобы + bentuk lampau.',
    'Kalau pelakunya sama, чтобы sering malah tidak diperlukan: Я хочу поехать в Россию, bukan Я хочу, чтобы я поехал.',
    'Bentuk resmi untuk karangan: для того чтобы (supaya), вместо того чтобы (alih-alih), несмотря на то что (meskipun), в то время как (sementara itu).',
    'Jangan tertukar: потому что menjawab pertanyaan kenapa, sedangkan поэтому menyatakan akibat. Я не пошёл, потому что было поздно ≠ Было поздно, поэтому я не пошёл.'
  ],
  ex:[
    ['Я пришёл, чтобы поговорить с тобой.','Saya datang untuk berbicara denganmu.','Ya prishyól, shtóby pagavarít s tabóy.'],
    ['Я хочу, чтобы ты приехал в Москву.','Saya ingin kamu datang ke Moskwa.','Ya khachú, shtóby ty priyékhal v Maskvú.'],
    ['Я знаю, что он уже приехал.','Saya tahu dia sudah datang.','Ya znáyu, shto on uzhé priyékhal.'],
    ['Я не пошёл, потому что было поздно.','Saya tidak jadi pergi karena sudah larut.','Ya ne pashyól, patamú shto býla pózna.'],
    ['Вместо того чтобы спорить, давайте решим проблему.','Alih-alih berdebat, mari kita selesaikan masalahnya.','Vmyésta tavó shtóby spórit, daváyte reshím prablyému.']
  ],
  traps:[
    ['Я хочу, чтобы ты придёшь.','Я хочу, чтобы ты пришёл.','Sesudah чтобы kata kerjanya wajib berbentuk lampau.'],
    ['Я хочу, чтобы я поехал в Россию.','Я хочу поехать в Россию.','Kalau pelakunya sama, cukup infinitif tanpa чтобы.'],
    ['Я знаю, чтобы он приехал.','Я знаю, что он приехал.','Fakta dilaporkan dengan что; чтобы hanya untuk maksud dan keinginan.'],
    ['Было поздно, потому что я не пошёл.','Было поздно, поэтому я не пошёл.','поэтому menyatakan akibat; потому что menyatakan sebab.']
  ],
  drills:[
    { t:'mcq', q:'"Saya ingin kamu datang" =', opts:['Я хочу, что ты придёшь','Я хочу, чтобы ты придёшь','Я хочу, чтобы ты пришёл','Я хочу тебя прийти'], a:2, why:'Pelakunya berbeda, jadi чтобы diikuti bentuk lampau пришёл.' },
    { t:'mcq', q:'Kalau pelakunya sama, чтобы diikuti', opts:['infinitif','bentuk lampau','bentuk depan','bentuk kini'], a:0, why:'Я пришёл, чтобы поговорить — satu pelaku, satu subjek, infinitif.' },
    { t:'mcq', q:'Untuk melaporkan fakta dipakai', opts:['чтобы','если бы','ли','что'], a:3, why:'что membawa kenyataan; чтобы membawa keinginan yang belum terjadi.' }
  ]
}

],

vocab: [

{
  id:'ru-pv-rabota',
  title:'Работа и карьера',
  level:'B1',
  note:'Kosakata melamar kerja dan kehidupan kantor — bagian wajib pada wawancara TORFL-1 dan percakapan sehari-hari orang dewasa di Rusia.',
  words:[
    ['резюме','rezyumé','daftar riwayat hidup'],
    ['собеседование','sabesyédavaniye','wawancara kerja'],
    ['вакансия','vakánsiya','lowongan'],
    ['должность','dólzhnast','jabatan'],
    ['профессия','prafyésiya','profesi'],
    ['специальность','spetsiálnast','bidang keahlian'],
    ['опыт','ópyt','pengalaman'],
    ['навык','návyk','keterampilan'],
    ['карьера','karyéra','karier'],
    ['достижение','dastizhéniye','pencapaian'],
    ['заявление','zayavlyéniye','surat permohonan'],
    ['анкета','ankyéta','formulir isian'],
    ['стажировка','stazhiróvka','magang'],
    ['испытательный срок','ispytátelniy srok','masa percobaan'],
    ['сотрудник','satrúdnik','karyawan'],
    ['начальник','nachálnik','atasan'],
    ['руководитель','rukavadítel','pimpinan'],
    ['подчинённый','padchinyónniy','bawahan'],
    ['коллектив','kalektíf','tim sekantor'],
    ['отдел','atdyél','divisi'],
    ['компания','kampániya','perusahaan'],
    ['предприятие','pretpriyátiye','badan usaha'],
    ['нанимать / нанять','nanimát / nanyát','mempekerjakan'],
    ['увольняться / уволиться','uvalnyátsa / uvólitsa','mengundurkan diri'],
    ['увольнение','uvalnyéniye','pemberhentian'],
    ['сокращение','sakrashchéniye','pemangkasan pegawai'],
    ['повышение','pavyshéniye','kenaikan jabatan'],
    ['премия','prémiya','bonus'],
    ['оклад','aklát','gaji pokok'],
    ['налог','nalók','pajak'],
    ['отпуск','ótpusk','cuti'],
    ['больничный','balníchniy','cuti sakit'],
    ['командировка','kamandiróvka','perjalanan dinas'],
    ['сверхурочные','svyerkhuróchnyye','lembur'],
    ['смена','smyéna','sif kerja'],
    ['график работы','gráfik rabóty','jadwal kerja'],
    ['задача','zadácha','tugas'],
    ['срок','srok','tenggat'],
    ['совещание','savyeshchániye','rapat'],
    ['переговоры','peregavóry','perundingan'],
    ['презентация','prezentátsiya','presentasi'],
    ['клиент','kliyént','klien']
  ]
},

{
  id:'ru-pv-smi',
  title:'СМИ и мнение',
  level:'B2',
  note:'Bahan bacaan TORFL-2 hampir seluruhnya berita dan tulisan berpendapat. Tanpa kosakata ini, teksnya tidak bisa dibaca meski tata bahasanya sudah dikuasai.',
  words:[
    ['СМИ','es-em-í','media massa (средства массовой информации)'],
    ['новости','nóvasti','berita'],
    ['газета','gazyéta','surat kabar'],
    ['журнал','zhurnál','majalah'],
    ['статья','statyá','artikel'],
    ['заголовок','zagalóvak','judul berita'],
    ['источник','istóchnik','sumber'],
    ['журналист','zhurnalíst','wartawan'],
    ['интервью','intervyú','wawancara media'],
    ['репортаж','reportásh','reportase'],
    ['телеканал','telekanál','saluran televisi'],
    ['передача','peredácha','acara siaran'],
    ['выпуск новостей','výpusk navastyéy','siaran berita'],
    ['реклама','rekláma','iklan'],
    ['слух','slukh','desas-desus'],
    ['ложь','losh','kebohongan'],
    ['правда','právda','kebenaran'],
    ['факт','fakt','fakta'],
    ['доказательство','dakazátelstva','bukti'],
    ['точка зрения','tóchka zryéniya','sudut pandang'],
    ['взгляд','vzglyat','pandangan'],
    ['убеждение','ubezhdéniye','keyakinan'],
    ['обсуждение','apsuzhdéniye','pembahasan'],
    ['спор','spor','perdebatan'],
    ['аргумент','argumyént','argumen'],
    ['довод','dóvat','dalih'],
    ['согласие','saglásiye','persetujuan'],
    ['возражение','vazrazhéniye','sanggahan'],
    ['критика','krítika','kritik'],
    ['вывод','vývat','kesimpulan'],
    ['опрос','aprós','jajak pendapat'],
    ['большинство','balshinstvó','mayoritas'],
    ['меньшинство','menshinstvó','minoritas'],
    ['утверждать','utverzhdát','menyatakan dengan yakin'],
    ['отрицать','atritsát','menyangkal'],
    ['сообщать / сообщить','saapshchát / saapshchít','memberitakan'],
    ['обсуждать / обсудить','apsuzhdát / apsudít','membahas'],
    ['преувеличивать','preuvelíchivat','melebih-lebihkan'],
    ['достоверный','dastavyérniy','tepercaya'],
    ['объективный','abyektívniy','objektif'],
    ['предвзятый','predvzyátiy','berat sebelah']
  ]
},

{
  id:'ru-pv-akad',
  title:'Академическая лексика',
  level:'C1',
  note:'Kosakata kuliah, penelitian, dan karangan ilmiah — dasar TORFL-3 dan syarat bertahan di ruang kuliah universitas Rusia.',
  words:[
    ['наука','naúka','ilmu'],
    ['научный','naúchniy','ilmiah'],
    ['учёный','uchyóniy','ilmuwan'],
    ['исследование','islyédavaniye','penelitian'],
    ['исследовать','islyédavat','meneliti'],
    ['область','óblast','bidang kajian'],
    ['теория','teóriya','teori'],
    ['гипотеза','gipótyeza','hipotesis'],
    ['метод','myétat','metode'],
    ['анализ','anális','analisis'],
    ['данные','dánnyye','data'],
    ['таблица','tablítsa','tabel'],
    ['график','gráfik','grafik'],
    ['пример','primyér','contoh'],
    ['термин','tyérmin','istilah'],
    ['определение','apredelyéniye','definisi'],
    ['значение','znachéniye','makna'],
    ['предположение','pretpalazhéniye','dugaan'],
    ['введение','vvedyéniye','pendahuluan'],
    ['содержание','sadyerzhániye','daftar isi'],
    ['глава','glavá','bab'],
    ['заключение','zaklyuchéniye','penutup'],
    ['ссылка','ssýlka','rujukan'],
    ['цитата','tsitáta','kutipan'],
    ['диссертация','disertátsiya','disertasi'],
    ['диплом','diplóm','skripsi'],
    ['курсовая работа','kursaváya rabóta','makalah semester'],
    ['лекция','lyéktsiya','kuliah'],
    ['семинар','seminár','seminar'],
    ['кафедра','káfedra','jurusan'],
    ['факультет','fakultyét','fakultas'],
    ['преподаватель','prepadavátel','dosen'],
    ['аспирант','aspiránt','mahasiswa pascasarjana'],
    ['экзамен','ekzámen','ujian'],
    ['зачёт','zachyót','ujian lulus atau tidak'],
    ['оценка','atsénka','nilai'],
    ['подтвердить','patverdít','mengukuhkan'],
    ['опровергнуть','apravyérgnut','membantah'],
    ['сравнить','sravnít','membandingkan'],
    ['рассмотреть','rasmatryét','meninjau'],
    ['выделить','výdelit','menyoroti'],
    ['обосновать','abasnavát','melandasi dengan alasan'],
    ['сформулировать','sfarmulíravat','merumuskan']
  ]
},

],

phrases: [

{ g:'Kantor & Wawancara Kerja', items:[
  ['Я хотел бы устроиться на работу','ya khatyél by ustróitsa na rabótu','Saya ingin melamar kerja'],
  ['Расскажите о себе','rasskazhítye a sebyé','Ceritakan tentang diri Anda'],
  ['У меня три года опыта','u minyá tri góda ópyta','Saya punya pengalaman tiga tahun'],
  ['Я работаю в отделе продаж','ya rabótayu v atdyéle pradásh','Saya bekerja di divisi penjualan'],
  ['Какие у меня будут обязанности?','kakíye u minyá búdut abyázannasti?','Apa saja tugas saya nanti?'],
  ['Когда я могу приступить к работе?','kagdá ya magú pristupít k rabóte?','Kapan saya bisa mulai bekerja?'],
  ['Давайте назначим встречу','daváyte naznáchim fstryéchu','Mari kita atur pertemuan'],
  ['Я подготовил отчёт','ya padgatóvil atchyót','Saya sudah menyiapkan laporannya'],
  ['Пришлите, пожалуйста, документы','prishlítye, pazhálusta, dakumyénty','Tolong kirimkan dokumennya'],
  ['Извините, я опоздал','izvinítye, ya apazdál','Maaf, saya terlambat'],
  ['Мне нужно взять отпуск','mnye núzhna vzyat ótpusk','Saya perlu mengambil cuti'],
  ['С уважением','s uvazhéniyem','Hormat saya (penutup surat)']
]},

{ g:'Berpendapat & Menulis Esai', items:[
  ['По-моему, это неправильно','pa-móyemu, éta neprávilna','Menurut saya, itu keliru'],
  ['На мой взгляд…','na moy vzglyat','Menurut pandangan saya…'],
  ['Я с вами согласен','ya s vámi saglásen','Saya setuju dengan Anda'],
  ['Я не совсем согласен','ya ne safsyém saglásen','Saya kurang setuju'],
  ['С одной стороны… с другой стороны…','s adnóy staraný… s drugóy staraný…','Di satu sisi… di sisi lain…'],
  ['Во-первых, во-вторых, наконец','va-pyérvykh, va-ftarýkh, nakanyéts','Pertama, kedua, terakhir'],
  ['Дело в том, что…','dyéla f tom, shto…','Persoalannya adalah…'],
  ['Другими словами…','drugími slavámi','Dengan kata lain…'],
  ['Приведу пример','privedú primyér','Saya beri satu contoh'],
  ['Насколько я знаю…','naskólka ya znáyu','Sepanjang yang saya tahu…'],
  ['Это зависит от ситуации','éta zavísit at situátsyi','Itu bergantung pada keadaannya'],
  ['Тем не менее…','tyem ne myéneye','Meskipun demikian…'],
  ['Таким образом, можно сделать вывод','takím óbrazam, mózhna zdyélat vývat','Dengan demikian dapat ditarik kesimpulan']
]}

],

levels: [
  { id:'B1', units:[
      { id:'ru-b1-p1', title:'Verbs of Motion', titleId:'Kata Kerja Gerak Berprefiks',
        goal:'Prefiks mengubah arah dan tuntas-tidaknya gerakan — ciri khas Rusia yang tak ada padanannya.',
        grammar:["ru-p2","ru-p6"], vocab:["ru-pv-rabota"],
        phrases:["Kantor & Wawancara Kerja"], skills:["listen","speak"],
        cando:["Membedakan идти/ходить beserta prefiksnya","Membentuk kalimat perintah yang sopan"] },
      { id:'ru-b1-p2', title:'Conditionals', titleId:'Pengandaian',
        goal:'Bentuk бы yang dipakai untuk berandai sekaligus memperhalus permintaan.',
        grammar:["ru-p5"], vocab:["ru-pv-rabota"],
        phrases:["Kantor & Wawancara Kerja"], skills:["listen","speak"],
        cando:["Menyusun kalimat andai dengan бы","Memperhalus permintaan di lingkungan kerja"] }
  ]},
  { id:'B2', units:[
      { id:'ru-b2-p1', title:'Aspect in Depth', titleId:'Aspek Tingkat Lanjut',
        goal:'Pilihan aspek yang menentukan makna, bukan sekadar waktu.',
        grammar:["ru-p1","ru-p8"], vocab:["ru-pv-smi"],
        phrases:["Berpendapat & Menulis Esai"], skills:["listen","speak"],
        cando:["Memilih aspek menurut maksud, bukan menurut waktu","Memakai чтобы dengan benar"] },
      { id:'ru-b2-p2', title:'Participles', titleId:'Kata Sifat & Keterangan Verbal',
        goal:'Причастие dan деепричастие — dua bentuk yang memenuhi teks tulis Rusia.',
        grammar:["ru-p3","ru-p4","ru-p7"], vocab:["ru-pv-smi"],
        phrases:["Berpendapat & Menulis Esai"], skills:["listen","speak"],
        cando:["Menguraikan причастие kembali jadi anak kalimat","Meneruskan ucapan orang lain"] }
  ]},
  { id:'C1', units:[
      { id:'ru-c1-p1', title:'Academic Russian', titleId:'Kosakata Akademik',
        goal:'Lapisan kata yang memenuhi kuliah, jurnal, dan makalah Rusia.',
        grammar:[], vocab:["ru-pv-akad"],
        phrases:["Berpendapat & Menulis Esai"], skills:["listen","speak"],
        cando:["Membaca abstrak dan pendahuluan makalah","Mengikuti kuliah tanpa terjemahan"] }
  ]}
]

};
