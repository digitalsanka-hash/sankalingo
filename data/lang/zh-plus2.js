/* MANDARIN — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk 25 topik yang sudah ada (zh-g1..zh-g12, zh-p1..zh-p13).
      Tiap topik cuma punya dua latihan — 50 latihan untuk 25 topik,
      sementara topik bahasa Inggris rata-rata 4,7. Dua latihan tidak
      cukup untuk satu aturan yang punya beberapa bentuk. Ditambah tiga
      per topik.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (zh-q1..zh-q5). Semuanya tata bahasa dasar yang
      belum tertutup zh-g* maupun zh-p*, dan tiap satunya punya titik
      gelincir yang khas penutur Indonesia:
        q1 的・得・地 — tiga huruf berbeda, satu bunyi
        q2 会・能・可以 — tiga kata untuk satu kata "bisa"
        q3 补语 — hasil perbuatan wajib ditempel ke kata kerjanya
        q4 就・才 — cepat menurut penutur, atau lambat
        q5 有点儿・一点儿 — keluhan atau perbandingan

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema uang, bank, dan sewa —
      tema harian yang belum ada di paket mana pun. Grup frasa "Belanja &
      Menawar" sudah ada, jadi yang ditambah di sini sengaja BUKAN
      belanja, melainkan urusan uang di luar toko.

   Awalan id: tata bahasa zh-q, kosakata zh-qv-, supaya tidak pernah
   bentrok dengan zh-g*, zh-p*, zh-v*, zh-pv*.
   Romanisasi memakai Hanyu Pinyin bertanda nada.                       */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK YANG SUDAH ADA ═══════════════ */
grammar: [

{ id:'zh-g1', drills:[
  { t:'mcq', q:'"Dia tinggi" =', opts:['他是高','他很高','他是很高','他高是'], a:1,
    why:'Kata sifat TIDAK memakai 是. Penopangnya 很, yang di sini tidak berarti "sangat".' },
  { t:'mcq', q:'Bentuk ingkar dari 是 adalah', opts:['没是','不是','无是','别是'], a:1,
    why:'是 selalu diingkarkan dengan 不, tidak pernah dengan 没.' },
  { t:'fill', q:'我___学生。(Saya seorang mahasiswa)', a:['是'],
    why:'Kata benda memerlukan 是 sebagai penghubung.' } ] },

{ id:'zh-g2', drills:[
  { t:'mcq', q:'"Sebuah buku" =', opts:['一书','一本书','一个书','一张书'], a:1,
    why:'Buku memakai kata bantu 本.' },
  { t:'mcq', q:'Kata bantu bilangan yang paling umum dan paling aman adalah', opts:['本','个','张','辆'], a:1,
    why:'个 bisa menyelamatkan ketika kata bantunya lupa.' },
  { t:'mcq', q:'"Sebuah mobil" =', opts:['一个车','一辆车','一本车','一只车'], a:1,
    why:'Kendaraan beroda memakai 辆.' } ] },

{ id:'zh-g3', drills:[
  { t:'mcq', q:'"Besok saya makan di rumah" =', opts:['我吃饭在家明天','我明天在家吃饭','明天我吃饭在家','我在家明天吃饭'], a:1,
    why:'Urutannya: subjek – waktu – tempat – kata kerja.' },
  { t:'mcq', q:'Antara waktu dan tempat, yang lebih dulu adalah', opts:['tempat','waktu','bebas','bergantung kata kerjanya'], a:1,
    why:'Waktu selalu mendahului tempat.' },
  { t:'mcq', q:'Frasa 在 + tempat diletakkan', opts:['sesudah kata kerja','sebelum kata kerja','di akhir kalimat','sebelum subjek'], a:1,
    why:'Berbeda dengan bahasa Indonesia yang menaruh "di rumah" di belakang.' } ] },

{ id:'zh-g4', drills:[
  { t:'mcq', q:'了 di akhir kalimat menandai', opts:['waktu lampau','perubahan keadaan','pengalaman','pengulangan'], a:1,
    why:'下雨了 = sekarang jadi hujan, padahal tadi tidak.' },
  { t:'mcq', q:'Perbedaan 我吃了饭 dan 我吃饭了 adalah', opts:['tidak ada bedanya','yang pertama menekankan perbuatan selesai, yang kedua perubahan keadaan','yang pertama akan datang','yang kedua bentuk tanya'], a:1,
    why:'了 sesudah kata kerja menandai penyelesaian; 了 di akhir menandai perubahan.' },
  { t:'mcq', q:'Ingkar dari 我吃了 adalah', opts:['我不吃了','我没吃','我没吃了','我不了吃'], a:1,
    why:'没 sudah membawa makna "belum terjadi", jadi 了 dilepas.' } ] },

{ id:'zh-g5', drills:[
  { t:'mcq', q:'"Di atas meja ada buku" =', opts:['书在桌子上','桌子上有书','桌子上是书','有书桌子上'], a:1,
    why:'有 dipakai ketika yang diberitakan adalah barangnya, bukan letaknya.' },
  { t:'mcq', q:'"Buku itu ada di atas meja" =', opts:['桌子上有书','书在桌子上','书有桌子上','桌子上书在'], a:1,
    why:'在 dipakai ketika barangnya sudah diketahui dan yang ditanyakan letaknya.' },
  { t:'mcq', q:'Ingkar dari 有 adalah', opts:['不有','没有','别有','无有'], a:1,
    why:'有 satu-satunya kata kerja yang diingkarkan dengan 没, bukan 不.' } ] },

{ id:'zh-g6', drills:[
  { t:'mcq', q:'吧 menyatakan', opts:['pertanyaan tegas','ajakan atau dugaan','penyangkalan','keheranan'], a:1,
    why:'我们走吧 = ayo pergi; 他是学生吧 = dia mahasiswa, kan?' },
  { t:'mcq', q:'"Kalau kamu?" =', opts:['你吗','你呢','你吧','你了'], a:1,
    why:'呢 dipakai untuk membalikkan pertanyaan yang sama.' },
  { t:'mcq', q:'吗 TIDAK boleh dipakai bersama', opts:['是','很','什么','不'], a:2,
    why:'Kalimat yang sudah memakai kata tanya seperti 什么 tidak lagi memerlukan 吗.' } ] },

{ id:'zh-g7', drills:[
  { t:'mcq', q:'"门开着" berarti', opts:['pintu sedang dibuka','pintu dalam keadaan terbuka','pintu akan dibuka','pintu ditutup'], a:1,
    why:'着 menyatakan keadaan yang berlanjut, bukan perbuatan yang sedang berjalan.' },
  { t:'mcq', q:'"Saya sedang makan" =', opts:['我吃着饭','我正在吃饭','我吃饭了','我会吃饭'], a:1,
    why:'正在 untuk perbuatan yang sedang berjalan.' },
  { t:'mcq', q:'"她穿着红衣服" menekankan', opts:['dia sedang memakai baju','dia mengenakan baju merah saat itu','dia akan memakai baju','dia membeli baju'], a:1,
    why:'着 di sini menyatakan keadaan berpakaian, bukan proses memakainya.' } ] },

{ id:'zh-g8', drills:[
  { t:'mcq', q:'"Saya pernah ke Beijing" =', opts:['我去了北京','我去过北京','我在去北京','我又去北京'], a:1,
    why:'过 menandai pengalaman seumur hidup.' },
  { t:'mcq', q:'Untuk pengulangan yang SUDAH terjadi dipakai', opts:['再','又','还','就'], a:1,
    why:'又 untuk yang sudah lewat, 再 untuk yang akan datang.' },
  { t:'mcq', q:'Ingkar dari 我去过北京 adalah', opts:['我不去过北京','我没去过北京','我没去了北京','我不过去北京'], a:1,
    why:'Pengalaman diingkarkan dengan 没…过.' } ] },

{ id:'zh-g9', drills:[
  { t:'mcq', q:'Kalimat 把 menuntut adanya', opts:['kata tanya','hasil atau akibat pada kata kerjanya','partikel 吗','kata sifat'], a:1,
    why:'把书看 salah; harus 把书看完 — ada hasilnya.' },
  { t:'mcq', q:'Urutan kalimat 把 yang benar adalah', opts:['S + V + 把 + O','S + 把 + O + V + hasil','把 + S + V + O','S + O + 把 + V'], a:1,
    why:'Objeknya ditarik ke depan kata kerja.' },
  { t:'mcq', q:'Kalimat 把 dipakai ketika penutur ingin menekankan', opts:['siapa pelakunya','apa yang terjadi PADA objeknya','waktu kejadian','tempat kejadian'], a:1,
    why:'Fokusnya pada perlakuan terhadap objek.' } ] },

{ id:'zh-g10', drills:[
  { t:'mcq', q:'Pelaku dalam kalimat 被 diletakkan', opts:['sebelum 被','sesudah 被','di akhir kalimat','sebelum subjek'], a:1,
    why:'书被他拿走了 — pelakunya menyusul 被.' },
  { t:'mcq', q:'Kalimat 被 dalam Mandarin sehari-hari sering bernada', opts:['gembira','netral','merugikan penutur','resmi'], a:2,
    why:'Berbeda dengan bahasa Indonesia, pasif Mandarin cenderung dipakai untuk hal yang tidak diinginkan.' },
  { t:'mcq', q:'Padanan 被 yang lebih santai dalam percakapan adalah', opts:['把','让 atau 叫','给予','使得'], a:1,
    why:'书让他拿走了 sama artinya, lebih lisan.' } ] },

{ id:'zh-g11', drills:[
  { t:'mcq', q:'"Dia lebih tinggi daripada saya" =', opts:['他比我很高','他比我高','他很比我高','他比我更很高'], a:1,
    why:'Dalam kalimat 比, kata 很 tidak dipakai.' },
  { t:'mcq', q:'"Sama seperti" =', opts:['跟…一样','比…一样','和…比较','对…一样'], a:0,
    why:'跟 A 一样 menyatakan kesamaan.' },
  { t:'mcq', q:'"Tidak setinggi dia" =', opts:['我不比他高','我没有他那么高','我比他不高','我不有他高'], a:1,
    why:'没有…那么 adalah bentuk baku untuk "tidak se-…".' } ] },

{ id:'zh-g12', drills:[
  { t:'mcq', q:'Dalam 虽然…但是…, bagian kedua', opts:['boleh dihilangkan','tetap wajib ada','diganti 因为','ditaruh di depan'], a:1,
    why:'Berbeda dengan bahasa Indonesia, Mandarin mempertahankan kedua belah pasangan.' },
  { t:'mcq', q:'"Bukan hanya … tetapi juga …" =', opts:['虽然…但是','不但…而且','因为…所以','如果…就'], a:1,
    why:'不但…而且 menambahkan, bukan mempertentangkan.' },
  { t:'mcq', q:'Pasangan penghubung sebab-akibat adalah', opts:['虽然…但是','不但…而且','因为…所以','越…越'], a:2,
    why:'因为…所以 dipakai berpasangan, dua-duanya disebut.' } ] },

{ id:'zh-p1', drills:[
  { t:'mcq', q:'Pola 连…都/也 dipakai untuk', opts:['membandingkan','menekankan hal yang paling tak terduga','menyatakan waktu','bertanya'], a:1,
    why:'连小孩都知道 = anak kecil pun tahu.' },
  { t:'mcq', q:'Kata yang mengikuti bagian kedua pola ini adalah', opts:['都 atau 也','就','才','却'], a:0,
    why:'连 selalu berpasangan dengan 都 atau 也.' },
  { t:'fill', q:'他___名字都忘了。(bahkan namanya pun lupa)', a:['连'],
    why:'连 menandai hal yang paling tak terduga.' } ] },

{ id:'zh-p2', drills:[
  { t:'mcq', q:'除了…以外，都… berarti', opts:['selain itu juga','semuanya kecuali itu','sesudah itu','sebelum itu'], a:1,
    why:'Dengan 都, maknanya MENGECUALIKAN.' },
  { t:'mcq', q:'除了…以外，还… berarti', opts:['kecuali','selain itu masih ada lagi','sebelum','sesudah'], a:1,
    why:'Dengan 还, maknanya MENAMBAHKAN.' },
  { t:'mcq', q:'Yang MENENTUKAN arti pola ini adalah', opts:['kata bendanya','kata di klausa kedua: 都 atau 还','panjang kalimat','ada tidaknya 以外'], a:1,
    why:'Bentuk depannya sama persis; artinya berlawanan.' } ] },

{ id:'zh-p3', drills:[
  { t:'mcq', q:'Pola 是…的 menekankan', opts:['apakah perbuatannya terjadi','waktu, tempat, atau cara perbuatan yang sudah terjadi','rencana masa depan','kemungkinan'], a:1,
    why:'Peristiwanya sudah diketahui; yang ditanyakan rinciannya.' },
  { t:'mcq', q:'"Saya datang kemarin (bukan hari lain)" =', opts:['我昨天来了','我是昨天来的','我昨天来的是','我来了昨天'], a:1,
    why:'是 mendahului bagian yang ditekankan, 的 menutup kalimat.' },
  { t:'mcq', q:'Pola ini TIDAK dipakai untuk', opts:['peristiwa lampau','cara datang','tempat kejadian','rencana besok'], a:3,
    why:'是…的 hanya untuk yang sudah terjadi.' } ] },

{ id:'zh-p4', drills:[
  { t:'mcq', q:'一…就… menyatakan', opts:['dua hal sekaligus','begitu yang pertama terjadi, yang kedua langsung menyusul','sebab akibat jangka panjang','pilihan'], a:1,
    why:'Jeda antara keduanya nyaris tidak ada.' },
  { t:'mcq', q:'Subjek kedua klausa dalam pola ini', opts:['harus sama','boleh sama boleh berbeda','harus berbeda','harus dihilangkan'], a:1,
    why:'我一到就打电话 (sama) dan 他一走我就来 (berbeda) dua-duanya sah.' },
  { t:'fill', q:'我一下班___回家。(begitu pulang kerja langsung pulang)', a:['就'],
    why:'Pasangan wajib 一…就….' } ] },

{ id:'zh-p5', drills:[
  { t:'mcq', q:'"Semakin lama semakin mahal" =', opts:['越贵越长','越来越贵','很来很贵','更来更贵'], a:1,
    why:'越来越 + kata sifat menyatakan perubahan bertahap.' },
  { t:'mcq', q:'Pola 越…越… menghubungkan', opts:['satu kata sifat','dua hal yang naik bersamaan','dua hal yang bertentangan','waktu dan tempat'], a:1,
    why:'越吃越想吃 = semakin makan semakin ingin makan.' },
  { t:'mcq', q:'Yang salah adalah', opts:['越来越好','越走越快','越很好','越忙越累'], a:2,
    why:'越 tidak pernah digabung dengan 很.' } ] },

{ id:'zh-p6', drills:[
  { t:'mcq', q:'Yang paling resmi dan paling sering dipakai untuk hal abstrak adalah', opts:['叫','让','使','请'], a:2,
    why:'使人感动 — biasanya untuk perasaan dan akibat abstrak.' },
  { t:'mcq', q:'"Ibu menyuruh saya pulang" (sehari-hari) =', opts:['妈妈使我回家','妈妈让我回家','妈妈把我回家','妈妈被我回家'], a:1,
    why:'让 paling lazim untuk menyuruh maupun mengizinkan.' },
  { t:'mcq', q:'叫 dibandingkan 让 terdengar', opts:['lebih resmi','lebih lisan dan lebih memerintah','lebih halus','lebih tertulis'], a:1,
    why:'叫 berkesan lebih langsung.' } ] },

{ id:'zh-p7', drills:[
  { t:'mcq', q:'即使…也… dipakai untuk keadaan yang', opts:['sudah nyata','diandaikan, belum tentu terjadi','sudah lampau','sedang berlangsung'], a:1,
    why:'Andaikan pun terjadi, hasilnya tetap sama.' },
  { t:'mcq', q:'尽管…还是… dipakai untuk keadaan yang', opts:['diandaikan','sungguh-sungguh terjadi','akan datang','tidak mungkin'], a:1,
    why:'尽管 mengakui kenyataan, 即使 mengandaikan.' },
  { t:'mcq', q:'Kesalahan yang paling sering adalah menukar keduanya karena bahasa Indonesia', opts:['memakai satu kata "meskipun" untuk dua-duanya','tidak punya kata penghubung','memakai dua kata berbeda','tidak memakai penghubung'], a:0,
    why:'"Meskipun" menutupi bedanya, jadi tidak ada dorongan alami untuk membedakan.' } ] },

{ id:'zh-p8', drills:[
  { t:'mcq', q:'不管 / 无论 menuntut klausa pertamanya berisi', opts:['kata sifat','kata tanya atau pilihan 还是','angka','kata kerja bantu'], a:1,
    why:'不管你去哪儿 atau 不管去还是不去 — harus ada ruang pilihan.' },
  { t:'mcq', q:'Klausa keduanya diawali', opts:['都 atau 也','就','才','却'], a:0,
    why:'…都一样 adalah pasangan wajibnya.' },
  { t:'mcq', q:'Antara 不管 dan 无论, yang lebih tertulis adalah', opts:['不管','无论','sama saja','tidak ada yang tertulis'], a:1,
    why:'无论 lebih sering di ragam tulis; 不管 lebih lisan.' } ] },

{ id:'zh-p9', drills:[
  { t:'mcq', q:'被…给… — kata 给 di sini', opts:['wajib','menambah tekanan, boleh dilepas','mengubah arti','menandai penerima'], a:1,
    why:'书被他给拿走了 — 给 memperkuat nada.' },
  { t:'mcq', q:'Pelaku dalam kalimat 被 boleh', opts:['tidak selalu disebut','selalu wajib','hanya berupa orang','hanya berupa benda'], a:0,
    why:'钱包被偷了 — pencurinya tidak diketahui.' },
  { t:'mcq', q:'Padanan pasif ragam tulis yang lebih resmi adalah', opts:['让','叫','受到 atau 遭到','把'], a:2,
    why:'受到批评, 遭到反对 — lazim di berita dan laporan.' } ] },

{ id:'zh-p10', drills:[
  { t:'mcq', q:'之所以…是因为… menyusun kalimat dengan urutan', opts:['sebab dulu baru akibat','akibat dulu baru sebab','waktu dulu','tempat dulu'], a:1,
    why:'Kebalikan dari 因为…所以….' },
  { t:'mcq', q:'由于…因此… paling lazim dijumpai di', opts:['obrolan warung','laporan dan artikel','lagu','pesan singkat'], a:1,
    why:'Ini pasangan ragam tulis.' },
  { t:'mcq', q:'Alasan pola ini dipakai adalah untuk', opts:['memperpendek kalimat','menonjolkan akibatnya lebih dulu','menghindari 因为','bertanya'], a:1,
    why:'Yang mau ditekankan diletakkan di depan.' } ] },

{ id:'zh-p11', drills:[
  { t:'mcq', q:'关于 dipakai untuk', opts:['sikap terhadap sesuatu','pokok pembicaraan','peralihan topik','sebab'], a:1,
    why:'关于这个问题 — menyebut topiknya, biasanya di awal kalimat.' },
  { t:'mcq', q:'对于 menekankan', opts:['topik','sikap atau pengaruh terhadap pihak tertentu','waktu','tempat'], a:1,
    why:'对于我来说 = bagi saya.' },
  { t:'mcq', q:'至于 dipakai ketika penutur', opts:['mengulang topik lama','beralih ke pokok berikutnya','menyimpulkan','membantah'], a:1,
    why:'至于价格… = adapun soal harganya….' } ] },

{ id:'zh-p12', drills:[
  { t:'mcq', q:'却 diletakkan', opts:['di awal kalimat','sesudah subjek, sebelum kata kerja','di akhir kalimat','sebelum subjek'], a:1,
    why:'他却不来 benar; 却他不来 salah.' },
  { t:'mcq', q:'反而 menyatakan hasil yang', opts:['sesuai dugaan','justru berlawanan dengan dugaan','belum pasti','sudah lama'], a:1,
    why:'吃了药反而更难受 = sesudah minum obat malah tambah tidak enak.' },
  { t:'mcq', q:'竟然 menyatakan', opts:['kepastian','keheranan atas hal di luar dugaan','kebiasaan','sebab'], a:1,
    why:'他竟然来了 = tak disangka dia datang.' } ] },

{ id:'zh-p13', drills:[
  { t:'mcq', q:'Dalam ragam tulis, 之 adalah padanan tertulis dari', opts:['的','了','在','是'], a:0,
    why:'成功之路 = jalan menuju keberhasilan.' },
  { t:'mcq', q:'其 dalam ragam tulis berarti', opts:['ini','miliknya / -nya','di sana','tidak'], a:1,
    why:'其原因 = sebabnya.' },
  { t:'mcq', q:'Ciri ragam tulis Mandarin adalah', opts:['kalimat panjang bertele-tele','kata satu suku kata dan pola ringkas','banyak partikel akhir','banyak kata seru'], a:1,
    why:'Ragam tulis justru lebih padat, bukan lebih panjang.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'zh-q1', level:'1', title:'的・得・地', titleId:'Tiga Huruf, Satu Bunyi',
  why:'Tiga huruf ini semuanya dibaca de, dan bahasa Indonesia tidak punya satu pun pembeda yang menyerupainya. Akibatnya penutur Indonesia memilih 的 untuk semuanya — dan itulah kesalahan tulis yang paling sering ditemui pada karangan pemelajar. Bedanya bukan bunyi, melainkan APA yang disambungkan: 的 menyambung ke kata benda, 得 menilai hasil perbuatan, 地 mengubah kata sifat jadi keterangan cara.',
  form:'的 — sebelum KATA BENDA: 我的书, 漂亮的花, 他买的车\n得 — sesudah KATA KERJA, menilai hasilnya: 跑得很快, 说得好\n地 — sebelum KATA KERJA, menerangkan caranya: 慢慢地走, 认真地听\nRumus cepat: 的 + 名词 · 动词 + 得 · 地 + 动词',
  notes:['Kalau ragu, lihat apa yang ada DI SEBELAH KANANNYA: kata benda pilih 的, kata kerja pilih 地, dan kalau kata kerjanya di sebelah kiri pilih 得.',
         '得 juga dibaca děi yang berarti "harus" — huruf sama, bunyi dan arti berbeda sama sekali.',
         'Dalam pesan singkat orang Tionghoa sendiri sering menulis 的 untuk ketiganya, tapi dalam ujian dan tulisan resmi tetap dibedakan.',
         'Pola 得 hampir selalu diikuti penilaian: 很快, 不好, 非常清楚.',
         'Kata sifat dua suku kata memakai 地 lebih sering daripada yang satu suku kata: 慢慢地, 高兴地.'],
  ex:[['这是我的书。','Ini buku saya.','zhè shì wǒ de shū.'],
      ['他跑得很快。','Dia berlari dengan cepat.','tā pǎo de hěn kuài.'],
      ['她慢慢地走过来。','Dia berjalan mendekat perlahan-lahan.','tā mànmàn de zǒu guòlái.'],
      ['你说得很清楚。','Kamu bicaranya jelas sekali.','nǐ shuō de hěn qīngchu.'],
      ['他认真地听老师讲课。','Dia mendengarkan pelajaran dengan sungguh-sungguh.','tā rènzhēn de tīng lǎoshī jiǎngkè.'],
      ['这是他买的车。','Ini mobil yang dia beli.','zhè shì tā mǎi de chē.']],
  traps:[['他跑的很快','他跑得很快','Menilai hasil perbuatan memakai 得.'],
         ['慢慢的走','慢慢地走','Menerangkan cara berbuat memakai 地.'],
         ['我得书','我的书','Sebelum kata benda selalu 的.'],
         ['他说的好','他说得好','Sesudah kata kerja, penilaiannya memakai 得.']],
  drills:[
    { t:'mcq', q:'"Dia berlari dengan cepat" =', opts:['他跑的很快','他跑得很快','他跑地很快','他的跑很快'], a:1,
      why:'Penilaian atas hasil perbuatan memakai 得.' },
    { t:'mcq', q:'"Berjalan perlahan-lahan" =', opts:['慢慢的走','慢慢得走','慢慢地走','慢慢走的'], a:2,
      why:'Menerangkan CARA berbuat memakai 地.' },
    { t:'fill', q:'这是我___书。(ini buku saya)', a:['的'],
      why:'Sebelum kata benda memakai 的.' },
    { t:'mcq', q:'Cara paling cepat memilih di antara ketiganya adalah melihat', opts:['nadanya','apa yang ada di sebelah kanannya','panjang kalimatnya','ada tidaknya subjek'], a:1,
      why:'Kata benda pilih 的; kata kerja di kanan pilih 地; kata kerja di kiri pilih 得.' },
    { t:'mcq', q:'Huruf 得 juga bisa dibaca děi yang berarti', opts:['sangat','harus','tidak','sudah'], a:1,
      why:'我得走了 = saya harus pergi.' } ] },

{ id:'zh-q2', level:'1', title:'会・能・可以', titleId:'Tiga Kata untuk Satu Kata "Bisa"',
  why:'Bahasa Indonesia memakai satu kata "bisa" untuk keterampilan, kemampuan sesaat, maupun izin. Mandarin membelahnya jadi tiga, dan karena tidak ada dorongan alami untuk membedakannya, penutur Indonesia memilih salah satunya secara acak. Akibatnya sering terdengar aneh: 我可以游泳 dipakai untuk maksud "saya bisa berenang" padahal artinya "saya diizinkan berenang".',
  form:'会 — KETERAMPILAN yang dipelajari: 我会游泳, 他会说中文\n能 — kemampuan atau keadaan yang MEMUNGKINKAN saat ini: 我今天不能来\n可以 — IZIN: 可以进来吗？\nIngkar: 不会 / 不能 / 不可以\n会 juga menandai KEMUNGKINAN masa depan: 明天会下雨',
  notes:['会 dipakai untuk apa yang sudah dipelajari; bayi tidak 会走 sampai ia belajar berjalan.',
         '能 sering menyangkut keadaan sesaat: sakit, sibuk, tangannya penuh.',
         '可以 dan 能 sama-sama bisa untuk izin, tapi 不可以 terdengar lebih tegas melarang daripada 不能.',
         '会 untuk kemungkinan cuaca dan ramalan tidak ada hubungannya dengan keterampilan — konteks yang membedakan.',
         'Untuk menolak ajakan, 不能 lebih halus daripada 不可以 karena menunjuk keadaan, bukan aturan.'],
  ex:[['我会说一点儿中文。','Saya bisa bicara sedikit bahasa Mandarin.','wǒ huì shuō yìdiǎnr zhōngwén.'],
      ['今天我不能来。','Hari ini saya tidak bisa datang.','jīntiān wǒ bù néng lái.'],
      ['可以进来吗？','Boleh saya masuk?','kěyǐ jìnlái ma?'],
      ['明天会下雨。','Besok akan hujan.','míngtiān huì xià yǔ.'],
      ['这里不可以抽烟。','Di sini tidak boleh merokok.','zhèlǐ bù kěyǐ chōuyān.'],
      ['他的手受伤了，不能写字。','Tangannya terluka, tidak bisa menulis.','tā de shǒu shòushāng le, bù néng xiě zì.']],
  traps:[['我可以游泳 untuk maksud keterampilan','我会游泳','可以 berarti diizinkan, bukan terampil.'],
         ['我会来 untuk maksud "saya sempat datang"','我能来','Keadaan yang memungkinkan memakai 能.'],
         ['明天能下雨','明天会下雨','Ramalan dan kemungkinan memakai 会.'],
         ['这里不能抽烟 (sebagai larangan tegas)','这里不可以抽烟','Larangan berdasarkan aturan memakai 不可以.']],
  drills:[
    { t:'mcq', q:'"Saya bisa berenang (terampil)" =', opts:['我可以游泳','我会游泳','我能游泳吗','我不能游泳'], a:1,
      why:'Keterampilan yang dipelajari memakai 会.' },
    { t:'mcq', q:'"Boleh saya masuk?" =', opts:['我会进来吗','可以进来吗','我能会进来吗','进来会吗'], a:1,
      why:'Meminta izin memakai 可以.' },
    { t:'mcq', q:'"Hari ini saya tidak bisa datang (ada urusan)" =', opts:['今天我不会来','今天我不能来','今天我不可以来','今天我会不来'], a:1,
      why:'Keadaan yang menghalangi memakai 能.' },
    { t:'fill', q:'明天___下雨。(besok akan hujan)', a:['会'],
      why:'Kemungkinan masa depan memakai 会.' },
    { t:'mcq', q:'Larangan berdasarkan aturan paling tegas dinyatakan dengan', opts:['不会','不能','不可以','没有'], a:2,
      why:'不可以 menunjuk aturan, bukan keadaan.' } ] },

{ id:'zh-q3', level:'2', title:'补语 — 结果补语 & 趋向补语', titleId:'Hasil Perbuatan Ditempel ke Kata Kerja',
  why:'Bahasa Indonesia menyatakan hasil dengan kata terpisah — "sudah selesai membaca", "berhasil mendengar". Mandarin menempelkannya langsung ke kata kerja: 看完, 听懂, 找到. Penutur Indonesia yang belum tahu ini akan berhenti di 我看书了 dan tidak pernah bisa mengatakan "saya sudah SELESAI membaca bukunya" — dan pada kalimat 把 mereka akan tersandung, karena 把 memang menuntut adanya pelengkap hasil.',
  form:'HASIL (结果补语): 动词 + 完/懂/到/好/见/错\n  看完 selesai membaca · 听懂 mengerti dengar · 找到 ketemu · 做好 selesai dibuat · 看见 terlihat · 说错 salah bicara\nARAH (趋向补语): 动词 + 来/去/上/下/出/回/进 + 来/去\n  出去 keluar · 回来 kembali · 拿出来 mengeluarkan · 走进去 masuk berjalan\nIngkar: 没 + 动词 + 补语 → 没听懂\nBentuk kemungkinan: 动词 + 得/不 + 补语 → 听得懂 / 听不懂',
  notes:['Pelengkap hasil menempel langsung; tidak boleh ada apa pun di antaranya.',
         '听懂 dan 听见 berbeda: 见 hanya soal terdengar, 懂 soal mengerti.',
         'Bentuk kemungkinan 听不懂 jauh lebih sering dipakai daripada 不能听懂.',
         'Kalimat 把 hampir selalu memerlukan pelengkap: 把门关上, 把作业做完.',
         '来 dan 去 dipilih menurut posisi penutur: 进来 kalau penutur di dalam, 进去 kalau di luar.'],
  ex:[['我看完这本书了。','Saya sudah selesai membaca buku ini.','wǒ kàn wán zhè běn shū le.'],
      ['对不起，我没听懂。','Maaf, saya tidak mengerti apa yang didengar.','duìbuqǐ, wǒ méi tīng dǒng.'],
      ['我找到钥匙了。','Saya sudah menemukan kuncinya.','wǒ zhǎo dào yàoshi le.'],
      ['请把门关上。','Tolong tutup pintunya.','qǐng bǎ mén guān shàng.'],
      ['他从包里拿出来一本书。','Dia mengeluarkan sebuah buku dari tasnya.','tā cóng bāo lǐ ná chūlái yì běn shū.'],
      ['这个字我看不清楚。','Huruf ini tidak bisa saya lihat dengan jelas.','zhège zì wǒ kàn bu qīngchu.']],
  traps:[['我看书完了','我看完这本书了','Pelengkap menempel langsung ke kata kerjanya.'],
         ['我不听懂','我没听懂','Pelengkap hasil diingkarkan dengan 没.'],
         ['我不能听懂','我听不懂','Bentuk kemungkinannya menyisipkan 不 di antaranya.'],
         ['把门关','把门关上','Kalimat 把 menuntut pelengkap hasil.']],
  drills:[
    { t:'mcq', q:'"Saya sudah selesai membaca buku ini" =', opts:['我看书完了','我看完这本书了','我完看这本书了','我这本书看完'], a:1,
      why:'Pelengkap hasil menempel langsung ke kata kerja.' },
    { t:'mcq', q:'"Saya tidak mengerti (yang didengar)" =', opts:['我不听懂','我没听懂','我听不了懂','我不能听懂'], a:1,
      why:'Pelengkap hasil diingkarkan dengan 没.' },
    { t:'mcq', q:'Bentuk kemungkinan ingkar dari 听懂 adalah', opts:['不听懂','听不懂','没听懂','听得懂'], a:1,
      why:'不 disisipkan di antara kata kerja dan pelengkapnya.' },
    { t:'fill', q:'请把门关___。(tolong tutup pintunya)', a:['上'],
      why:'Kalimat 把 menuntut pelengkap hasil.' },
    { t:'mcq', q:'Kalau penutur berada DI DALAM ruangan, ia menyuruh orang masuk dengan', opts:['进去','进来','出来','出去'], a:1,
      why:'来 menunjuk arah menuju penutur.' } ] },

{ id:'zh-q4', level:'2', title:'就・才', titleId:'Cepat atau Lambat Menurut Penutur',
  why:'Keduanya sering diterjemahkan "baru" atau "lalu", sehingga tampak seperti sinonim. Padahal keduanya menyampaikan SIKAP penutur yang berlawanan: 就 berarti lebih cepat atau lebih mudah daripada dugaan, 才 berarti lebih lambat atau lebih sulit. Kalimat yang sama dengan 就 terdengar puas, dengan 才 terdengar mengeluh — dan penutur Indonesia yang menukarnya tanpa sadar mengubah nada kalimatnya.',
  form:'就 — lebih cepat / mudah / sesuai dugaan: 他七点就来了 (jam tujuh sudah datang)\n才 — lebih lambat / sulit / kurang dari harapan: 他九点才来 (jam sembilan baru datang)\nLetak: keduanya sesudah subjek dan keterangan, sebelum kata kerja\n就 boleh diikuti 了; 才 hampir tidak pernah diikuti 了\nSyarat: 只要…就… (asal saja) vs 只有…才… (hanya kalau)',
  notes:['Waktu yang sama bisa memakai keduanya — yang berubah adalah penilaian penutur, bukan faktanya.',
         '才 tidak diikuti 了 karena 了 menandai penyelesaian, sedangkan 才 justru menekankan keterlambatan.',
         '只要…就… berarti syaratnya ringan; 只有…才… berarti syaratnya berat dan satu-satunya.',
         '就 juga berarti "langsung": 我就来 = saya segera datang.',
         '才 juga menyatakan jumlah yang sedikit: 才三个人 = cuma tiga orang.'],
  ex:[['他七点就来了。','Jam tujuh dia sudah datang.','tā qī diǎn jiù lái le.'],
      ['他九点才来。','Jam sembilan dia baru datang.','tā jiǔ diǎn cái lái.'],
      ['只要你努力，就能成功。','Asal kamu berusaha, pasti bisa berhasil.','zhǐyào nǐ nǔlì, jiù néng chénggōng.'],
      ['只有努力，才能成功。','Hanya dengan berusaha, barulah bisa berhasil.','zhǐyǒu nǔlì, cái néng chénggōng.'],
      ['我马上就来。','Saya segera datang.','wǒ mǎshàng jiù lái.'],
      ['来了才三个人。','Yang datang cuma tiga orang.','lái le cái sān gè rén.']],
  traps:[['他九点才来了','他九点才来','才 hampir tidak pernah diikuti 了.'],
         ['只要努力才能成功','只要努力就能成功','只要 berpasangan dengan 就.'],
         ['只有努力就能成功','只有努力才能成功','只有 berpasangan dengan 才.'],
         ['就他七点来了','他七点就来了','就 diletakkan sesudah keterangan waktu, sebelum kata kerja.']],
  drills:[
    { t:'mcq', q:'"Jam sembilan dia BARU datang" (penutur merasa terlambat) =', opts:['他九点就来了','他九点才来','他九点来了就','他就九点来'], a:1,
      why:'才 menandai lebih lambat daripada harapan.' },
    { t:'mcq', q:'"Asal kamu berusaha, pasti berhasil" =', opts:['只要你努力，才能成功','只要你努力，就能成功','只有你努力，就能成功','只要你努力，都能成功'], a:1,
      why:'只要 berpasangan dengan 就.' },
    { t:'mcq', q:'才 hampir tidak pernah diikuti', opts:['了','不','很','的'], a:0,
      why:'才 menekankan keterlambatan, 了 menandai penyelesaian — keduanya bertabrakan.' },
    { t:'fill', q:'只有努力，___能成功。(hanya dengan berusaha barulah berhasil)', a:['才'],
      why:'只有 berpasangan dengan 才.' },
    { t:'mcq', q:'Yang berubah antara 就 dan 才 pada waktu yang sama adalah', opts:['faktanya','penilaian penutur atas cepat lambatnya','tata bahasanya','waktunya'], a:1,
      why:'Peristiwanya sama; sikap penuturlah yang berbeda.' } ] },

{ id:'zh-q5', level:'1', title:'有点儿・一点儿・一下', titleId:'Sedikit Mengeluh, Sedikit Membandingkan',
  why:'Ketiganya diterjemahkan "sedikit" dalam bahasa Indonesia, jadi penutur Indonesia memakainya bergantian. Padahal 有点儿 selalu bernada MENGELUH dan berdiri sebelum kata sifat, 一点儿 menyatakan perbandingan dan berdiri sesudahnya, dan 一下 menyatakan perbuatan sebentar. Menukar 有点儿 dan 一点儿 langsung terdengar salah bagi penutur asli meski artinya masih bisa ditebak.',
  form:'有点儿 + 形容词 — sebelum kata sifat, bernada TIDAK ENAK: 有点儿贵, 有点儿累\n形容词 + 一点儿 — sesudah kata sifat, PERBANDINGAN: 便宜一点儿, 快一点儿\n动词 + 一下 — perbuatan SEBENTAR: 看一下, 等一下\n一点儿 + 名词 — sedikit barang: 一点儿水',
  notes:['有点儿 hampir tidak pernah dipakai untuk hal yang menyenangkan; 有点儿高兴 terdengar janggal.',
         '一点儿 sesudah kata sifat selalu berarti "lebih … sedikit", bukan "agak".',
         '一下 melembutkan permintaan: 帮我一下 jauh lebih sopan daripada 帮我.',
         'Dalam ragam selatan dan Taiwan, 儿 sering dilepas: 有点, 一点.',
         '差一点儿 artinya berbeda lagi: hampir saja — 差一点儿迟到 = hampir saja terlambat.'],
  ex:[['这件衣服有点儿贵。','Baju ini agak mahal.','zhè jiàn yīfu yǒudiǎnr guì.'],
      ['能不能便宜一点儿？','Bisa lebih murah sedikit?','néng bu néng piányi yìdiǎnr?'],
      ['请等一下。','Tolong tunggu sebentar.','qǐng děng yíxià.'],
      ['我今天有点儿累。','Hari ini saya agak lelah.','wǒ jīntiān yǒudiǎnr lèi.'],
      ['请说慢一点儿。','Tolong bicara lebih pelan sedikit.','qǐng shuō màn yìdiǎnr.'],
      ['我差一点儿迟到了。','Saya hampir saja terlambat.','wǒ chà yìdiǎnr chídào le.']],
  traps:[['这个一点儿贵','这个有点儿贵','Sebelum kata sifat memakai 有点儿.'],
         ['便宜有点儿','便宜一点儿','Sesudah kata sifat memakai 一点儿.'],
         ['我有点儿高兴','我很高兴','有点儿 bernada tidak enak, jadi janggal untuk hal yang menyenangkan.'],
         ['等一点儿','等一下','Perbuatan sebentar memakai 一下.']],
  drills:[
    { t:'mcq', q:'"Baju ini agak mahal" =', opts:['这件衣服一点儿贵','这件衣服有点儿贵','这件衣服贵有点儿','这件衣服一下贵'], a:1,
      why:'Sebelum kata sifat dan bernada mengeluh memakai 有点儿.' },
    { t:'mcq', q:'"Bisa lebih murah sedikit?" =', opts:['能不能有点儿便宜','能不能便宜一点儿','能不能便宜一下','能不能一点儿便宜'], a:1,
      why:'Perbandingan diletakkan SESUDAH kata sifat.' },
    { t:'mcq', q:'"Tolong tunggu sebentar" =', opts:['请等有点儿','请等一点儿','请等一下','请一下等'], a:2,
      why:'Perbuatan sebentar memakai 一下 sesudah kata kerja.' },
    { t:'fill', q:'请说慢___。(tolong bicara lebih pelan sedikit)', a:['一点儿'],
      why:'Sesudah kata sifat memakai 一点儿.' },
    { t:'mcq', q:'差一点儿迟到了 berarti', opts:['sedikit terlambat','hampir saja terlambat','terlambat sebentar','sengaja terlambat'], a:1,
      why:'差一点儿 berarti nyaris terjadi — dan tidak jadi terjadi.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'zh-qv-qian', title:'钱和银行', titleId:'Uang, Bank & Sewa', level:'1', words:[
  ['钱','qián','uang'],
  ['现金','xiànjīn','uang tunai'],
  ['零钱','língqián','uang receh'],
  ['银行','yínháng','bank'],
  ['银行卡','yínhángkǎ','kartu bank'],
  ['信用卡','xìnyòngkǎ','kartu kredit'],
  ['密码','mìmǎ','kata sandi'],
  ['账户','zhànghù','rekening'],
  ['存钱','cún qián','menyimpan uang'],
  ['取钱','qǔ qián','mengambil uang'],
  ['转账','zhuǎnzhàng','transfer'],
  ['汇率','huìlǜ','kurs'],
  ['换钱','huàn qián','menukar uang'],
  ['手续费','shǒuxùfèi','biaya administrasi'],
  ['利息','lìxī','bunga'],
  ['贷款','dàikuǎn','pinjaman'],
  ['还钱','huán qián','mengembalikan uang'],
  ['借钱','jiè qián','meminjam uang'],
  ['工资','gōngzī','gaji'],
  ['奖金','jiǎngjīn','bonus'],
  ['付款','fùkuǎn','pembayaran'],
  ['收据','shōujù','kuitansi'],
  ['发票','fāpiào','faktur pajak'],
  ['账单','zhàngdān','tagihan'],
  ['房租','fángzū','sewa rumah'],
  ['押金','yājīn','uang jaminan'],
  ['水电费','shuǐdiànfèi','biaya air dan listrik'],
  ['网费','wǎngfèi','biaya internet'],
  ['合同','hétong','kontrak'],
  ['签字','qiān zì','menandatangani'],
  ['房东','fángdōng','pemilik rumah'],
  ['租房','zū fáng','menyewa rumah'],
  ['搬家','bān jiā','pindah rumah'],
  ['邮局','yóujú','kantor pos'],
  ['寄','jì','mengirim'],
  ['包裹','bāoguǒ','paket kiriman'],
  ['快递','kuàidì','jasa pengiriman cepat'],
  ['地址','dìzhǐ','alamat'],
  ['预算','yùsuàn','anggaran'],
  ['存折','cúnzhé','buku tabungan']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Bank & Kantor Pos', items:[
  ['我想开一个账户。','wǒ xiǎng kāi yí gè zhànghù.','Saya ingin membuka rekening.'],
  ['我要取钱。','wǒ yào qǔ qián.','Saya mau mengambil uang.'],
  ['今天的汇率是多少？','jīntiān de huìlǜ shì duōshao?','Berapa kursnya hari ini?'],
  ['要收手续费吗？','yào shōu shǒuxùfèi ma?','Apakah ada biaya administrasi?'],
  ['请输入密码。','qǐng shūrù mìmǎ.','Silakan masukkan kata sandinya.'],
  ['我想寄一个包裹。','wǒ xiǎng jì yí gè bāoguǒ.','Saya ingin mengirim satu paket.'],
  ['寄到印尼要几天？','jì dào yìnní yào jǐ tiān?','Berapa hari kirim ke Indonesia?'],
  ['请给我一张收据。','qǐng gěi wǒ yì zhāng shōujù.','Tolong berikan kuitansinya.']
] },
{ g:'Sewa Kamar & Tagihan', items:[
  ['房租一个月多少钱？','fángzū yí gè yuè duōshao qián?','Sewanya berapa sebulan?'],
  ['押金要几个月？','yājīn yào jǐ gè yuè?','Uang jaminannya berapa bulan?'],
  ['水电费包括在里面吗？','shuǐdiànfèi bāokuò zài lǐmiàn ma?','Apakah biaya air dan listrik sudah termasuk?'],
  ['可以看看房子吗？','kěyǐ kànkan fángzi ma?','Boleh saya lihat rumahnya?'],
  ['合同是一年的吗？','hétong shì yì nián de ma?','Kontraknya setahun?'],
  ['什么时候可以搬进来？','shénme shíhou kěyǐ bān jìnlái?','Kapan saya bisa pindah masuk?'],
  ['空调坏了，请修一下。','kōngtiáo huài le, qǐng xiū yíxià.','Pendingin ruangannya rusak, tolong diperbaiki.'],
  ['这个月的账单来了吗？','zhège yuè de zhàngdān lái le ma?','Tagihan bulan ini sudah datang?']
] }
]

};
