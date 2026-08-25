/* JEPANG — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk 21 topik yang sudah ada (ja-g1..ja-g13, ja-p1..ja-p8).
      Tiap topik cuma punya dua latihan — 42 latihan untuk 21 topik,
      sementara topik bahasa Inggris rata-rata 4,7. Dua latihan tidak
      cukup untuk satu aturan yang punya beberapa bentuk. Ditambah tiga
      per topik.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (ja-q1..ja-q5). Semuanya tata bahasa dasar yang
      belum tertutup ja-g* maupun ja-p*, dan tiap satunya punya titik
      gelincir yang khas penutur Indonesia:
        q1 keharusan  — bahasa Jepang tidak punya satu kata untuk "harus"
        q2 kata bantu bilangan — angkanya ikut berubah bunyi
        q3 keinginan  — 〜たい dilarang untuk orang ketiga
        q4 〜ている    — bukan cuma "sedang"
        q5 memberi/menerima — kata kerjanya dipilih menurut arah

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema belanja dan uang —
      tema harian yang belum ada di paket mana pun.

   Awalan id: tata bahasa ja-q, kosakata ja-qv-, supaya tidak pernah
   bentrok dengan ja-g*, ja-p*, ja-v*, ja-pv*.
   Romanisasi memakai Hepburn.                                          */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK YANG SUDAH ADA ═══════════════ */
grammar: [

{ id:'ja-g1', drills:[
  { t:'mcq', q:'"私は学生です" — は di sini menandai', opts:['objek','topik pembicaraan','tempat','alat'], a:1,
    why:'は menandai TOPIK: hal yang sedang dibicarakan. Ditulis は tapi dibaca wa.' },
  { t:'mcq', q:'Bentuk sopan ingkar dari 学生です adalah', opts:['学生でした','学生じゃないです','学生になります','学生ですか'], a:1,
    why:'です jadi じゃないです (santai sopan) atau ではありません (lebih resmi).' },
  { t:'fill', q:'私___田中です。(sebagai topik)', a:['は'],
    why:'Penanda topik ditulis dengan huruf は.' } ] },

{ id:'ja-g2', drills:[
  { t:'mcq', q:'"Saya makan di restoran" memakai', opts:['レストランに','レストランで','レストランを','レストランへ'], a:1,
    why:'で menandai TEMPAT TERJADINYA kegiatan.' },
  { t:'mcq', q:'Partikel penanda objek langsung adalah', opts:['に','で','を','が'], a:2,
    why:'を menandai sasaran perbuatan: パンを食べます.' },
  { t:'fill', q:'七時___起きます。(bangun jam tujuh)', a:['に'],
    why:'に menandai titik WAKTU yang bisa disebut angkanya.' } ] },

{ id:'ja-g3', drills:[
  { t:'mcq', q:'Bentuk kamus dari 食べます adalah', opts:['食べる','食べた','食べて','食べない'], a:0,
    why:'ます dilepas lalu diberi る untuk kata kerja golongan 2.' },
  { t:'mcq', q:'Bentuk ingkar sopan dari 行きます adalah', opts:['行かない','行きません','行きました','行きたい'], a:1,
    why:'Ragam ます diingkarkan jadi ません.' },
  { t:'mcq', q:'Bentuk kamus wajib dipakai sebelum', opts:['です','ことができます','ました','ですか'], a:1,
    why:'ことができる, つもりだ, まえに — semuanya menuntut bentuk kamus, bukan ます.' } ] },

{ id:'ja-g4', drills:[
  { t:'mcq', q:'"Ada seekor kucing" =', opts:['猫があります','猫がいます','猫をいます','猫はあります'], a:1,
    why:'いる untuk yang bernyawa; ある untuk benda mati.' },
  { t:'mcq', q:'"Di atas meja ada buku" =', opts:['机の上に本があります','机の上で本があります','机の上に本がいます','机の上を本があります'], a:0,
    why:'Letak keberadaan ditandai に, dan buku benda mati jadi あります.' },
  { t:'mcq', q:'Kesalahan yang paling sering penutur Indonesia adalah memakai', opts:['ある untuk benda mati','いる untuk orang','ある untuk orang dan hewan','いる untuk tempat'], a:2,
    why:'Bahasa Indonesia memakai satu kata "ada", jadi bedanya tidak terasa.' } ] },

{ id:'ja-g5', drills:[
  { t:'mcq', q:'"Kamar yang tenang" =', opts:['静か部屋','静かな部屋','静かい部屋','静かの部屋'], a:1,
    why:'な形容詞 memerlukan な sebelum kata benda.' },
  { t:'mcq', q:'Bentuk lampau dari 高い adalah', opts:['高いでした','高かった','高くだった','高いた'], a:1,
    why:'い形容詞 berubah sendiri: い jadi かった. Bukan ditambah でした.' },
  { t:'mcq', q:'Bentuk ingkar dari きれい adalah', opts:['きれくない','きれいじゃない','きれいくない','きれかった'], a:1,
    why:'きれい tampak berakhir い tapi な形容詞, jadi memakai じゃない.' } ] },

{ id:'ja-g6', drills:[
  { t:'mcq', q:'て形 dari 書く adalah', opts:['書きて','書いて','書って','書んで'], a:1,
    why:'Kata kerja berakhir く jadi いて (kecuali 行く jadi 行って).' },
  { t:'mcq', q:'て形 dari 待つ adalah', opts:['待て','待って','待ちて','待んで'], a:1,
    why:'Akhiran つ・う・る jadi って.' },
  { t:'mcq', q:'て形 dari 泳ぐ adalah', opts:['泳いて','泳いで','泳って','泳ぎて'], a:1,
    why:'Akhiran ぐ jadi いで — bersuara, beda dengan く.' } ] },

{ id:'ja-g7', drills:[
  { t:'mcq', q:'"Tolong bantu saya" =', opts:['手伝いください','手伝ってください','手伝うください','手伝いたください'], a:1,
    why:'てください selalu memakai て形.' },
  { t:'mcq', q:'"Boleh saya masuk?" =', opts:['入ってもいいですか','入るもいいですか','入りたいですか','入ってはいけませんか'], a:0,
    why:'てもいいですか meminta izin.' },
  { t:'mcq', q:'Larangan "tidak boleh merokok di sini" memakai', opts:['てもいいです','てはいけません','てください','たいです'], a:1,
    why:'てはいけません adalah kebalikan てもいいです.' } ] },

{ id:'ja-g8', drills:[
  { t:'mcq', q:'Bentuk lampau biasa dari 行く adalah', opts:['行いた','行った','行きた','行んだ'], a:1,
    why:'た形 mengikuti pola て形: 行って jadi 行った.' },
  { t:'mcq', q:'"Saya pernah ke Jepang" =', opts:['日本へ行きました','日本へ行ったことがあります','日本へ行っています','日本へ行くことです'], a:1,
    why:'たことがある menyatakan PENGALAMAN, bukan kejadian tertentu.' },
  { t:'mcq', q:'たことがある TIDAK dipakai untuk', opts:['pengalaman seumur hidup','hal langka','kejadian kemarin','hal yang pernah dicoba'], a:2,
    why:'Untuk kejadian yang jelas waktunya, cukup bentuk lampau biasa: 昨日行きました.' } ] },

{ id:'ja-g9', drills:[
  { t:'mcq', q:'Alasan yang terdengar lebih halus dan tidak memaksa memakai', opts:['から','ので','のに','けど'], a:1,
    why:'ので terdengar lebih lembut; から terasa lebih menegaskan.' },
  { t:'mcq', q:'"Karena tenang" dengan 静か =', opts:['静かので','静かなので','静かいので','静かだので'], a:1,
    why:'な形容詞 memerlukan な sebelum ので.' },
  { t:'mcq', q:'Yang bisa berdiri sendiri di akhir jawaban singkat adalah', opts:['ので','から','のに','ため'], a:1,
    why:'"どうして?" — "疲れたから。" から bisa mengakhiri kalimat, ので canggung.' } ] },

{ id:'ja-g10', drills:[
  { t:'mcq', q:'Akibat yang otomatis dan selalu terjadi memakai', opts:['ば','たら','と','なら'], a:2,
    why:'と untuk hukum alam dan mesin: 春になると花が咲く.' },
  { t:'mcq', q:'Pengandaian paling luwes untuk peristiwa masa depan adalah', opts:['と','たら','なら','ば'], a:1,
    why:'たら paling longgar dan paling sering dipakai lisan.' },
  { t:'mcq', q:'なら dipakai ketika', opts:['membuat syarat baru','menanggapi hal yang baru disebut lawan bicara','menyatakan hukum alam','menyatakan kebiasaan'], a:1,
    why:'"京都へ行くなら…" — kalau memang begitu keadaannya.' } ] },

{ id:'ja-g11', drills:[
  { t:'mcq', q:'Bentuk pasif dari 食べる adalah', opts:['食べさせる','食べられる','食べれる','食べさせられる'], a:1,
    why:'Golongan 2 memakai られる.' },
  { t:'mcq', q:'Pelaku dalam kalimat pasif ditandai partikel', opts:['が','を','に','で'], a:2,
    why:'先生に叱られました — pelakunya ditandai に.' },
  { t:'mcq', q:'"雨に降られた" menyatakan', opts:['hujan yang menyenangkan','kerugian karena kehujanan','hujan yang disengaja','ramalan cuaca'], a:1,
    why:'Ini 迷惑の受身: pasif yang menyatakan penutur dirugikan. Bahasa Indonesia tidak punya bentuk ini.' } ] },

{ id:'ja-g12', drills:[
  { t:'mcq', q:'尊敬語 untuk 行く adalah', opts:['まいる','いらっしゃる','いたす','おる'], a:1,
    why:'いらっしゃる meninggikan lawan bicara.' },
  { t:'mcq', q:'謙譲語 untuk 言う adalah', opts:['おっしゃる','申す','ご覧になる','なさる'], a:1,
    why:'申す merendahkan diri sendiri.' },
  { t:'mcq', q:'Kesalahan yang paling sering adalah memakai 尊敬語 untuk', opts:['tamu','atasan','diri sendiri','pelanggan'], a:2,
    why:'Meninggikan diri sendiri justru terdengar kasar — untuk diri sendiri dipakai 謙譲語.' } ] },

{ id:'ja-g13', drills:[
  { t:'mcq', q:'Bentuk 使役 dari 行く adalah', opts:['行かれる','行かせる','行かせられる','行ける'], a:1,
    why:'Golongan 1: akhiran diubah ke deret あ lalu ditambah せる.' },
  { t:'mcq', q:'"Dibuat menunggu lama" (使役受身) dari 待つ adalah', opts:['待たせる','待たれる','待たされる','待てる'], a:2,
    why:'待たせられる biasa disingkat 待たされる dalam percakapan.' },
  { t:'mcq', q:'"させてください" berarti', opts:['tolong suruh saya','izinkan saya melakukannya','saya disuruh','saya tidak mau'], a:1,
    why:'Bentuk 使役 + てください adalah cara sopan meminta izin bertindak.' } ] },

{ id:'ja-p1', drills:[
  { t:'mcq', q:'〜を余儀なくされる menyatakan bahwa perbuatan itu', opts:['dipilih sendiri','terpaksa karena keadaan','dilakukan berulang','sudah direncanakan'], a:1,
    why:'Yang memaksa adalah KEADAAN, bukan orang.' },
  { t:'mcq', q:'Ungkapan ini paling lazim dijumpai di', opts:['percakapan teman','berita dan laporan resmi','lagu anak','pesan singkat'], a:1,
    why:'Ini ragam tulis resmi.' },
  { t:'fill', q:'工事の中止___余儀なくされた。', a:['を'],
    why:'Kata bendanya ditandai を sebelum 余儀なくされる.' } ] },

{ id:'ja-p2', drills:[
  { t:'mcq', q:'〜に至る berarti', opts:['baru mulai','akhirnya sampai pada','hampir gagal','tiba-tiba berhenti'], a:1,
    why:'Menekankan ujung sebuah proses panjang.' },
  { t:'mcq', q:'〜に至るまで menekankan', opts:['batas waktu terdekat','sampai sedetail itu pun','sebab utama','pilihan lain'], a:1,
    why:'服装に至るまで — sampai ke soal pakaian pun.' },
  { t:'mcq', q:'Ragam ungkapan ini adalah', opts:['akrab','resmi tertulis','ragam anak','ragam iklan'], a:1,
    why:'Dipakai di laporan, artikel, dan pidato resmi.' } ] },

{ id:'ja-p3', drills:[
  { t:'mcq', q:'〜ならでは berarti', opts:['walaupun begitu','hanya bisa ada pada X','selain X','sebelum X'], a:1,
    why:'Menunjuk keistimewaan yang khas milik X.' },
  { t:'mcq', q:'Nada ungkapan ini adalah', opts:['mengkritik','memuji','netral','menyesal'], a:1,
    why:'Selalu dipakai untuk hal yang dianggap baik.' },
  { t:'fill', q:'京都___の味わいがある。', a:['ならでは'],
    why:'Rasa yang hanya ada di Kyoto.' } ] },

{ id:'ja-p4', drills:[
  { t:'mcq', q:'〜いかんによらず berarti', opts:['bergantung pada','tanpa memandang','sesudah','sebelum'], a:1,
    why:'Hasilnya tidak berubah apa pun keadaannya.' },
  { t:'mcq', q:'Kata benda sebelum いかん biasanya disambung dengan', opts:['が','の','を','に'], a:1,
    why:'理由のいかんによらず — memakai の.' },
  { t:'mcq', q:'Ungkapan ini paling sering ditemukan di', opts:['obrolan santai','pengumuman resmi dan aturan','komik','lirik lagu'], a:1,
    why:'Bahasa peraturan dan pemberitahuan resmi.' } ] },

{ id:'ja-p5', drills:[
  { t:'mcq', q:'〜べからず paling sering dijumpai pada', opts:['papan larangan','surat cinta','buku resep','percakapan telepon'], a:0,
    why:'Ragam klasik, sisa bahasa lama yang bertahan di papan pengumuman.' },
  { t:'mcq', q:'Bentuk yang menerangkan kata benda adalah', opts:['べからず','べからざる','べきだ','べく'], a:1,
    why:'許すべからざる行為 — perbuatan yang tak termaafkan.' },
  { t:'mcq', q:'Bentuk klasik dari する pada pola ini adalah', opts:['しべからず','するべからず atau すべからず','させべからず','せべからず'], a:1,
    why:'Keduanya sah; すべからず lebih klasik.' } ] },

{ id:'ja-p6', drills:[
  { t:'mcq', q:'A もさることながら B menekankan', opts:['A lebih penting','B lebih menonjol','A dan B sama','A tidak benar'], a:1,
    why:'A diakui benar, tetapi B yang mau ditonjolkan.' },
  { t:'mcq', q:'Nada ungkapan ini adalah', opts:['mengecam','memuji atau menilai positif','ragu-ragu','netral dingin'], a:1,
    why:'Biasanya untuk memuji dua hal sekaligus.' },
  { t:'mcq', q:'Yang mengikuti もさることながら adalah', opts:['alasan','hal kedua yang lebih ditekankan','kesimpulan','pertanyaan'], a:1,
    why:'Bobot kalimatnya jatuh di bagian sesudahnya.' } ] },

{ id:'ja-p7', drills:[
  { t:'mcq', q:'〜きらいがある menyatakan kecenderungan yang', opts:['baik','kurang baik','netral','lucu'], a:1,
    why:'Selalu bernada menilai negatif.' },
  { t:'mcq', q:'Meski ditulis きらい, ungkapan ini TIDAK berarti', opts:['kecenderungan','membenci','sifat','kebiasaan'], a:1,
    why:'Sama bunyinya dengan 嫌い "benci", tapi artinya kecenderungan.' },
  { t:'fill', q:'彼は物事を大げさに言う___がある。', a:['きらい'],
    why:'Dia cenderung membesar-besarkan.' } ] },

{ id:'ja-p8', drills:[
  { t:'mcq', q:'〜を踏まえて berarti', opts:['mengabaikan','berpijak pada','menolak','menunda'], a:1,
    why:'Menjadikan sesuatu sebagai dasar pertimbangan.' },
  { t:'mcq', q:'Ungkapan ini paling lazim dipakai saat', opts:['bercanda','rapat dan laporan','menawar harga','memesan makanan'], a:1,
    why:'Bahasa kerja dan bahasa tulis resmi.' },
  { t:'fill', q:'調査結果___踏まえて計画を立てる。', a:['を'],
    why:'Kata bendanya ditandai を.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'ja-q1', level:'1', title:'ない形・なければなりません', titleId:'Keharusan & Kebolehan',
  why:'Bahasa Indonesia punya satu kata untuk "harus", jadi penutur Indonesia mencari satu kata Jepang yang sepadan — dan tidak menemukannya. Bahasa Jepang menyatakan keharusan sebagai ingkar berganda: "kalau TIDAK melakukan, TIDAK boleh". Karena itu langkah pertamanya bukan menghafal kata "harus", melainkan menguasai ない形 lebih dulu.',
  form:'ない形 — Gol.1: 行く→行かない, 話す→話さない · Gol.2: 食べる→食べない · Tak beraturan: する→しない, 来る→こない\nHARUS: ない形 buang い + ければなりません → 行かなければなりません\nRagam santai: 行かなきゃ / 行かないと\nTIDAK PERLU: ない形 buang い + くてもいいです → 行かなくてもいいです\nTIDAK BOLEH: て形 + はいけません → 行ってはいけません',
  notes:['ある ingkarnya ない, bukan あらない — satu-satunya yang menyimpang.',
         'なければなりません panjang dan kaku; dalam percakapan hampir selalu dipendekkan jadi なきゃ.',
         'なくてもいい bukan larangan, melainkan kebebasan: boleh dilakukan, boleh tidak.',
         'Jangan campur: なくてもいい (tidak perlu) vs てはいけない (tidak boleh) — artinya berlawanan.',
         'Untuk aturan tertulis dipakai 〜なければならない tanpa ます, dan bentuk ini yang muncul di ujian.'],
  ex:[['明日六時に起きなければなりません。','Besok saya harus bangun jam enam.','ashita rokuji ni okinakereba narimasen.'],
      ['靴を脱がなくてもいいです。','Tidak perlu melepas sepatu.','kutsu o nuganakute mo ii desu.'],
      ['ここで写真を撮ってはいけません。','Tidak boleh memotret di sini.','koko de shashin o totte wa ikemasen.'],
      ['もう帰らなきゃ。','Saya sudah harus pulang.','mō kaeranakya.'],
      ['お金を払わなければなりませんか。','Apakah harus membayar?','okane o harawanakereba narimasen ka.'],
      ['今日は来なくてもいいですよ。','Hari ini tidak perlu datang, kok.','kyō wa konakute mo ii desu yo.']],
  traps:[['行くなければなりません','行かなければなりません','Harus lewat ない形 dulu: 行く jadi 行かない.'],
         ['食べなくてはいけません adalah "tidak boleh makan"','食べなくてはいけません adalah "harus makan"','Ingkar berganda: kalau tidak makan tidak boleh — jadi artinya harus.'],
         ['あらない','ない','ある satu-satunya yang ingkarnya berubah bentuk sama sekali.'],
         ['来なければなりません dibaca kinakereba','来なければなりません dibaca konakereba','来る jadi こない, bukan きない.']],
  drills:[
    { t:'mcq', q:'"Saya harus pergi" =', opts:['行くなければなりません','行かなければなりません','行きなければなりません','行ってなければなりません'], a:1,
      why:'Dibentuk dari ない形 行かない.' },
    { t:'mcq', q:'"Tidak perlu datang" =', opts:['来てはいけません','来なくてもいいです','来なければなりません','来たくないです'], a:1,
      why:'なくてもいい menyatakan tidak wajib.' },
    { t:'mcq', q:'Bentuk ない dari ある adalah', opts:['あらない','ありない','ない','あるない'], a:2,
      why:'Satu-satunya kata kerja yang menyimpang total.' },
    { t:'fill', q:'ここでたばこを吸っ___はいけません。(tidak boleh merokok)', a:['て'],
      why:'Larangan memakai て形 + はいけません.' },
    { t:'mcq', q:'なきゃ adalah bentuk pendek dari', opts:['なくてもいい','なければならない','てはいけない','たことがある'], a:1,
      why:'Ragam percakapan untuk keharusan.' } ] },

{ id:'ja-q2', level:'1', title:'助数詞', titleId:'Kata Bantu Bilangan',
  why:'Bahasa Indonesia juga punya kata bantu bilangan — seekor, sebuah, selembar — jadi gagasannya tidak asing. Yang mengejutkan penutur Indonesia adalah ANGKANYA ikut berubah bunyi: 一本 dibaca ippon, 三本 sanbon, 六本 roppon. Karena di bahasa Indonesia angkanya tetap, perubahan ini tidak pernah diduga dan hampir selalu salah dibaca.',
  form:'Umum: 一つ hitotsu, 二つ futatsu, 三つ mittsu … 十 tō\nOrang 〜人: 一人 hitori, 二人 futari, 三人 sannin\nPipih 〜枚: 一枚 ichimai, 三枚 sanmai\nPanjang 〜本: 一本 ippon, 三本 sanbon, 六本 roppon, 八本 happon\nHewan kecil 〜匹: 一匹 ippiki, 三匹 sanbiki, 六匹 roppiki\nLetak dalam kalimat: 名詞 + を + angka + 助数詞 + kata kerja',
  notes:['Angka umum 一つ〜十 bisa menyelamatkan ketika kata bantunya lupa — tidak salah, hanya kurang tepat.',
         'Perubahan bunyi hanya terjadi pada 1, 3, 6, 8, dan 10 — angka lain berbunyi biasa.',
         'Kata bantu bilangan TIDAK memakai partikel の: 三枚の紙 sah, tapi 紙を三枚買う lebih alami.',
         '一人 dan 二人 dibaca istimewa (hitori, futari); mulai tiga baru teratur sannin.',
         'Untuk mesin dan kendaraan dipakai 〜台, untuk buku 〜冊 — dua yang paling sering menyusul dipelajari.'],
  ex:[['紙を三枚ください。','Tolong tiga lembar kertas.','kami o sanmai kudasai.'],
      ['ビールを一本お願いします。','Tolong satu botol bir.','bīru o ippon onegai shimasu.'],
      ['家に猫が二匹います。','Di rumah ada dua ekor kucing.','ie ni neko ga nihiki imasu.'],
      ['学生が六人来ました。','Enam orang mahasiswa datang.','gakusei ga rokunin kimashita.'],
      ['りんごを四つ買いました。','Saya membeli empat apel.','ringo o yottsu kaimashita.'],
      ['傘は何本ありますか。','Ada berapa payung?','kasa wa nanbon arimasu ka.']],
  traps:[['一本 dibaca ichihon','一本 dibaca ippon','Angka 1 dan kata bantu berbunyi p menyatu.'],
         ['二人 dibaca ninin','二人 dibaca futari','Satu dan dua orang memakai bacaan istimewa.'],
         ['紙を三ください','紙を三枚ください','Angka saja tidak cukup — kata bantunya wajib.'],
         ['六匹 dibaca rokuhiki','六匹 dibaca roppiki','Angka 6 juga memicu perubahan bunyi.']],
  drills:[
    { t:'mcq', q:'一本 dibaca', opts:['ichihon','ippon','ichibon','hitohon'], a:1,
      why:'Angka 1 menyatu jadi ip- dan ほん jadi ぽん.' },
    { t:'mcq', q:'Kata bantu untuk benda pipih seperti kertas adalah', opts:['本','枚','匹','台'], a:1,
      why:'枚 untuk lembaran: kertas, tiket, kaus.' },
    { t:'mcq', q:'"Dua orang" =', opts:['にじん','ににん','ふたり','ふたつ'], a:2,
      why:'二人 dibaca futari.' },
    { t:'fill', q:'猫が三___います。(tiga ekor kucing)', a:['匹'],
      why:'Hewan kecil memakai 匹; 三匹 dibaca sanbiki.' },
    { t:'mcq', q:'Urutan yang benar adalah', opts:['三枚紙をください','紙を三枚ください','紙三枚をください','を紙三枚ください'], a:1,
      why:'Kata benda + を + angka + kata bantu + kata kerja.' } ] },

{ id:'ja-q3', level:'2', title:'〜たい・〜がる・ほしい', titleId:'Menyatakan Keinginan',
  why:'"Dia ingin makan" adalah kalimat biasa dalam bahasa Indonesia, tetapi terlarang dalam bahasa Jepang. 〜たい hanya boleh untuk diri sendiri, karena orang Jepang menganggap isi hati orang lain tidak bisa diketahui langsung — untuk orang ketiga dipakai 〜たがっている. Aturan ini tidak punya padanan sama sekali di bahasa Indonesia, jadi hampir semua pemelajar melewatinya tanpa sadar.',
  form:'INGIN MELAKUKAN (diri sendiri): ます-stem + たい → 食べたい\nINGIN MELAKUKAN (orang ketiga): ます-stem + たがっている → 食べたがっている\nINGIN PUNYA (benda): 名詞 + が + ほしい → 水がほしい\nINGIN PUNYA (orang ketiga): ほしがっている\n〜たい berperilaku seperti い形容詞: 食べたくない, 食べたかった',
  notes:['Objek pada 〜たい boleh memakai が maupun を: 水が飲みたい dan 水を飲みたい dua-duanya sah.',
         'Bertanya "mau makan apa?" kepada atasan dengan 何が食べたいですか terdengar kurang sopan — dipakai 何になさいますか.',
         '〜たがる memberi kesan orang itu MEMPERLIHATKAN keinginannya, bukan sekadar merasakannya.',
         'ほしい untuk benda, たい untuk perbuatan — dua-duanya berarti "ingin" dalam bahasa Indonesia.',
         'Menawarkan sesuatu dengan 〜たいですか terdengar menyelidik; lebih baik 〜ませんか.'],
  ex:[['冷たい水が飲みたいです。','Saya ingin minum air dingin.','tsumetai mizu ga nomitai desu.'],
      ['弟は新しい自転車をほしがっています。','Adik saya ingin sepeda baru.','otōto wa atarashii jitensha o hoshigatte imasu.'],
      ['今日はどこにも行きたくないです。','Hari ini saya tidak ingin pergi ke mana pun.','kyō wa doko ni mo ikitakunai desu.'],
      ['子どもが外で遊びたがっています。','Anak itu ingin bermain di luar.','kodomo ga soto de asobitagatte imasu.'],
      ['もっと時間がほしかったです。','Saya ingin punya lebih banyak waktu.','motto jikan ga hoshikatta desu.'],
      ['一緒に映画を見ませんか。','Bagaimana kalau kita menonton film bersama?','issho ni eiga o mimasen ka.']],
  traps:[['彼は行きたいです','彼は行きたがっています','〜たい hanya untuk diri sendiri.'],
         ['水をほしいです','水がほしいです','ほしい menuntut が, bukan を.'],
         ['食べたいじゃないです','食べたくないです','〜たい berubah seperti い形容詞.'],
         ['社長、何が食べたいですか','社長、何になさいますか','Menanyakan keinginan atasan secara langsung terdengar lancang.']],
  drills:[
    { t:'mcq', q:'"Dia ingin pergi" =', opts:['彼は行きたいです','彼は行きたがっています','彼は行きほしいです','彼は行くたいです'], a:1,
      why:'Orang ketiga memakai たがっている.' },
    { t:'mcq', q:'"Saya ingin air" =', opts:['水をほしいです','水がほしいです','水がのみほしいです','水にほしいです'], a:1,
      why:'ほしい selalu berpasangan dengan が.' },
    { t:'mcq', q:'Bentuk ingkar dari 食べたい adalah', opts:['食べたいじゃない','食べたくない','食べたないです','食べたがらない'], a:1,
      why:'〜たい berubah seperti い形容詞.' },
    { t:'fill', q:'映画が見___です。(ingin menonton film)', a:['たい'],
      why:'見ます jadi 見たい.' },
    { t:'mcq', q:'Untuk menawarkan ajakan, yang paling wajar adalah', opts:['行きたいですか','行きませんか','行きたがっていますか','行ってはいけませんか'], a:1,
      why:'〜ませんか adalah ajakan; 〜たいですか terdengar menyelidik.' } ] },

{ id:'ja-q4', level:'2', title:'〜ている', titleId:'Sedang, atau Sudah Jadi Begitu',
  why:'Ini jebakan tunggal terbesar bagi penutur Indonesia. 〜ている diterjemahkan "sedang" di pelajaran pertama, lalu pemelajar memakainya begitu terus — padahal 知っています berarti "tahu" bukan "sedang tahu", 住んでいます berarti "tinggal", dan 結婚しています berarti "sudah menikah", bukan "sedang menikah". Bedanya bukan pada 〜ている, melainkan pada jenis kata kerjanya: kata kerja berdurasi menghasilkan makna SEDANG, kata kerja seketika menghasilkan makna KEADAAN HASIL.',
  form:'て形 + いる\nKata kerja berdurasi → SEDANG: 食べている, 読んでいる, 待っている\nKata kerja seketika → KEADAAN HASIL: 結婚している, 死んでいる, 来ている, 持っている\nKebiasaan → BERULANG: 毎朝走っています\nRagam percakapan: 〜てる (食べてる)',
  notes:['知る istimewa: bentuk positifnya 知っています, tapi ingkarnya 知りません — bukan 知っていません.',
         '住む, 結婚する, 覚える, 太る hampir selalu dipakai dalam bentuk ている karena yang dimaksud keadaannya.',
         'Untuk pekerjaan dipakai bentuk ている: 銀行で働いています.',
         'Kalau maksudnya benar-benar "sedang", kata kerjanya harus berdurasi — kalau tidak, artinya berubah.',
         'ています juga menyatakan hasil yang masih terlihat: 窓が開いています = jendelanya dalam keadaan terbuka.'],
  ex:[['今ご飯を食べています。','Sekarang saya sedang makan.','ima gohan o tabete imasu.'],
      ['姉は結婚しています。','Kakak perempuan saya sudah menikah.','ane wa kekkon shite imasu.'],
      ['彼の名前を知っています。','Saya tahu namanya.','kare no namae o shitte imasu.'],
      ['東京に住んでいます。','Saya tinggal di Tokyo.','tōkyō ni sunde imasu.'],
      ['毎朝公園を走っています。','Setiap pagi saya berlari di taman.','maiasa kōen o hashitte imasu.'],
      ['窓が開いていますよ。','Jendelanya terbuka, lho.','mado ga aite imasu yo.']],
  traps:[['結婚しています berarti sedang menikah','結婚しています berarti sudah menikah','結婚する seketika, jadi ている menunjuk keadaan sesudahnya.'],
         ['知っていません','知りません','知る satu-satunya yang ingkarnya kembali ke bentuk ません.'],
         ['東京に住みます (untuk keadaan sekarang)','東京に住んでいます','住む dipakai dalam bentuk ている untuk keadaan tinggal.'],
         ['父は死にました dipakai untuk keadaan sekarang','父は死んでいます','Yang pertama menyebut peristiwanya, yang kedua keadaannya.']],
  drills:[
    { t:'mcq', q:'結婚しています berarti', opts:['sedang menikah','sudah menikah','akan menikah','pernah menikah'], a:1,
      why:'結婚する kata kerja seketika, jadi ている menunjuk keadaan hasilnya.' },
    { t:'mcq', q:'Bentuk ingkar dari 知っています adalah', opts:['知っていません','知りません','知っていないです','知らなくないです'], a:1,
      why:'知る menyimpang: ingkarnya 知りません.' },
    { t:'mcq', q:'"Saya tinggal di Osaka" =', opts:['大阪に住みます','大阪に住んでいます','大阪で住みます','大阪を住んでいます'], a:1,
      why:'Keadaan tinggal dinyatakan dengan ている.' },
    { t:'fill', q:'今、本を読ん___います。(sedang membaca buku)', a:['で'],
      why:'読む jadi 読んで — akhiran む memakai んで.' },
    { t:'mcq', q:'Yang MENENTUKAN apakah ている berarti "sedang" atau "keadaan" adalah', opts:['partikelnya','jenis kata kerjanya','panjang kalimatnya','ragam bahasanya'], a:1,
      why:'Kata kerja berdurasi jadi "sedang", kata kerja seketika jadi keadaan hasil.' } ] },

{ id:'ja-q5', level:'2', title:'あげる・くれる・もらう', titleId:'Memberi & Menerima',
  why:'Bahasa Indonesia memakai satu kata "memberi" tanpa peduli siapa yang diuntungkan. Bahasa Jepang memilih kata kerjanya menurut ARAH: あげる kalau bergerak menjauh dari saya, くれる kalau bergerak menuju saya, もらう kalau saya yang menerima. Penutur Indonesia hampir selalu memakai あげる untuk semuanya, dan akibatnya terdengar seolah-olah menyombongkan kebaikan sendiri.',
  form:'あげる — saya atau pihak saya MEMBERI ke pihak lain: 私は彼に本をあげた\nくれる — pihak lain MEMBERI ke saya atau pihak saya: 彼が私に本をくれた\nもらう — saya MENERIMA dari pihak lain: 私は彼に本をもらった\nBentuk hormat: さしあげる (naik), くださる (dari atasan ke saya), いただく (saya menerima)\nDengan て形 menyatakan kebaikan hati: 手伝ってくれた, 教えていただいた',
  notes:['くれる TIDAK PERNAH dipakai kalau penerimanya orang lain — itu batas yang paling sering dilanggar.',
         'Pemberi pada もらう boleh ditandai に maupin から; から lebih jelas untuk lembaga.',
         '〜てあげる terhadap atasan terdengar menyombongkan diri, walau maksudnya menolong — lebih aman 〜ましょうか.',
         'Keluarga sendiri dihitung sebagai "pihak saya": 兄が母にくれた tidak wajar, yang wajar 兄が母にあげた kalau dilihat dari luar.',
         'くださる bentuk ます-nya menyimpang: くださいます, bukan くださります.'],
  ex:[['友達が私にプレゼントをくれました。','Teman saya memberi saya hadiah.','tomodachi ga watashi ni purezento o kuremashita.'],
      ['私は妹に本をあげました。','Saya memberi adik saya buku.','watashi wa imōto ni hon o agemashita.'],
      ['先生に辞書をいただきました。','Saya menerima kamus dari guru.','sensei ni jisho o itadakimashita.'],
      ['田中さんが手伝ってくれました。','Tanaka membantu saya.','tanaka-san ga tetsudatte kuremashita.'],
      ['母に作ってもらいました。','Ibu membuatkannya untuk saya.','haha ni tsukutte moraimashita.'],
      ['道を教えてくださってありがとうございます。','Terima kasih sudah menunjukkan jalannya.','michi o oshiete kudasatte arigatō gozaimasu.']],
  traps:[['友達が私に本をあげた','友達が私に本をくれた','Kalau penerimanya saya, wajib くれる.'],
         ['先生に本をあげました','先生に本をさしあげました','Kepada atasan dipakai bentuk hormat さしあげる.'],
         ['部長、手伝ってあげましょうか','部長、お手伝いしましょうか','〜てあげる kepada atasan terdengar menyombongkan kebaikan.'],
         ['くださります','くださいます','Bentuk ます dari くださる menyimpang.']],
  drills:[
    { t:'mcq', q:'"Teman memberi SAYA hadiah" =', opts:['友達が私にプレゼントをあげました','友達が私にプレゼントをくれました','友達が私にプレゼントをもらいました','私が友達にプレゼントをくれました'], a:1,
      why:'Arahnya menuju saya, jadi くれる.' },
    { t:'mcq', q:'"Saya menerima buku dari guru" (hormat) =', opts:['先生に本をあげました','先生に本をいただきました','先生が本をもらいました','先生に本をくれました'], a:1,
      why:'いただく adalah bentuk hormat dari もらう.' },
    { t:'mcq', q:'くれる dipakai ketika penerimanya adalah', opts:['siapa saja','saya atau pihak saya','orang lain','atasan'], a:1,
      why:'Batas yang paling sering dilanggar penutur Indonesia.' },
    { t:'fill', q:'田中さんが手伝って___ました。(Tanaka membantu saya)', a:['くれ'],
      why:'Kebaikan yang mengarah kepada saya memakai くれる.' },
    { t:'mcq', q:'Menawarkan bantuan kepada atasan sebaiknya memakai', opts:['手伝ってあげましょうか','お手伝いしましょうか','手伝ってくれますか','手伝ってもらいますか'], a:1,
      why:'〜てあげる kepada atasan terdengar menyombongkan kebaikan sendiri.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'ja-qv-kaimono', title:'買い物とお金', titleId:'Belanja & Uang', level:'1', words:[
  ['買い物','kaimono','belanja'],
  ['店','mise','toko'],
  ['スーパー','sūpā','swalayan'],
  ['コンビニ','konbini','minimarket'],
  ['デパート','depāto','pusat perbelanjaan'],
  ['市場','ichiba','pasar'],
  ['商品','shōhin','barang dagangan'],
  ['値段','nedan','harga'],
  ['円','en','yen'],
  ['お金','okane','uang'],
  ['現金','genkin','uang tunai'],
  ['カード','kādo','kartu'],
  ['クレジットカード','kurejitto kādo','kartu kredit'],
  ['財布','saifu','dompet'],
  ['レジ','reji','kasir'],
  ['店員','ten-in','pramuniaga'],
  ['お客さん','okyakusan','pelanggan'],
  ['袋','fukuro','kantong'],
  ['レシート','reshīto','struk belanja'],
  ['領収書','ryōshūsho','kuitansi'],
  ['お釣り','otsuri','uang kembalian'],
  ['割引','waribiki','potongan harga'],
  ['セール','sēru','obral'],
  ['安い','yasui','murah'],
  ['高い','takai','mahal'],
  ['無料','muryō','gratis'],
  ['税込み','zeikomi','sudah termasuk pajak'],
  ['消費税','shōhizei','pajak konsumsi'],
  ['支払う','shiharau','membayar'],
  ['買う','kau','membeli'],
  ['売る','uru','menjual'],
  ['選ぶ','erabu','memilih'],
  ['試着する','shichaku suru','mencoba pakaian'],
  ['サイズ','saizu','ukuran'],
  ['交換','kōkan','penukaran barang'],
  ['返品','henpin','pengembalian barang'],
  ['予算','yosan','anggaran'],
  ['貯金','chokin','tabungan'],
  ['銀行','ginkō','bank'],
  ['両替','ryōgae','penukaran uang']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Toko & Kasir', items:[
  ['これはいくらですか。','kore wa ikura desu ka.','Ini berapa harganya?'],
  ['ちょっと高いです。','chotto takai desu.','Sedikit mahal.'],
  ['カードで払えますか。','kādo de haraemasu ka.','Bisa bayar dengan kartu?'],
  ['現金でお願いします。','genkin de onegai shimasu.','Tunai saja.'],
  ['レシートをください。','reshīto o kudasai.','Tolong struknya.'],
  ['袋をください。','fukuro o kudasai.','Tolong kantongnya.'],
  ['見ているだけです。','mite iru dake desu.','Saya lihat-lihat saja.'],
  ['これをください。','kore o kudasai.','Saya ambil yang ini.']
] },
{ g:'Ukuran, Tukar & Kembali', items:[
  ['別のサイズはありますか。','betsu no saizu wa arimasu ka.','Ada ukuran lain?'],
  ['試着してもいいですか。','shichaku shite mo ii desu ka.','Boleh saya coba pakai?'],
  ['少し大きいです。','sukoshi ōkii desu.','Sedikit kebesaran.'],
  ['少し小さいです。','sukoshi chiisai desu.','Sedikit kekecilan.'],
  ['交換できますか。','kōkan dekimasu ka.','Bisa ditukar?'],
  ['返品したいです。','henpin shitai desu.','Saya ingin mengembalikan barang ini.'],
  ['割引はありますか。','waribiki wa arimasu ka.','Ada diskonnya?'],
  ['お釣りをください。','otsuri o kudasai.','Tolong uang kembaliannya.']
] }
]

};
