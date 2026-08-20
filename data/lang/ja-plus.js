/* JEPANG — MATERI TAMBAHAN (PLUS)

   Menutup celah tingkat N1. Berkas kursus asli (ja-course.js) hanya punya satu
   unit N1 yang mendaur ulang materi N2 (敬語 + kosakata abstrak). Di sini
   ditambahkan delapan pola tata bahasa N1 sejati, tiga paket kosakata
   (media & akademik, 四字熟語, 慣用句), dan dua grup frasa dunia kerja.

   Semua entri memakai romaji karena aksara Jepang tidak bisa ditebak bunyinya.
   Tiap topik menjelaskan KENAPA penutur Indonesia sering keliru — itu yang
   tidak diberikan buku JLPT terbitan Jepang, karena mereka menulis untuk
   pembaca berbahasa Inggris atau Mandarin. */

export const PLUS = {

grammar: [

{ id:'ja-p1', level:'N1', title:'〜を余儀なくされる', titleId:'Terpaksa karena Keadaan',
  why:'Bahasa Indonesia memakai satu kata "terpaksa" untuk semua situasi. Bahasa Jepang memisahkan dengan tegas: dipaksa ORANG memakai させられる, dipaksa KEADAAN memakai を余儀なくされる. Salah pilih membuat kalimat berita terdengar seperti curhat pribadi.',
  form:'名詞(kata benda tindakan) + を余儀なくされる … pihak yang terkena terpaksa melakukannya\n名詞(kata benda tindakan) + を余儀なくさせる … keadaan itu yang memaksa\nContoh kata benda yang lazim: 中止 · 変更 · 延期 · 閉鎖 · 撤退 · 辞任 · 入院',
  notes:['余儀 berarti "jalan lain"; 余儀なく = tanpa jalan lain. Jadi maknanya bukan sekadar berat, tetapi benar-benar tidak ada pilihan.',
         'Yang mendahului harus kata benda tindakan (漢語), bukan kata kerja. Bentuk 動詞 + の を余儀なくされる tidak dipakai.',
         'Ragam tulis dan berita. Dalam percakapan sehari-hari orang Jepang memakai 〜しなければならなくなった.',
         'Pelakunya adalah keadaan: cuaca, penyakit, kondisi keuangan, peraturan. Kalau pelakunya manusia, gunakan 使役受身.'],
  ex:[['台風のため、大会は中止を余儀なくされた。','Karena topan, turnamen itu terpaksa dibatalkan.','taifuu no tame, taikai wa chuushi o yoginaku sareta.'],
      ['経営の悪化により、工場は閉鎖を余儀なくされた。','Akibat memburuknya keuangan, pabrik itu terpaksa ditutup.','keiei no akka ni yori, koujou wa heisa o yoginaku sareta.'],
      ['記録的な大雨が計画の変更を余儀なくさせた。','Hujan deras yang memecahkan rekor memaksa rencana itu diubah.','kirokuteki na ooame ga keikaku no henkou o yoginaku saseta.']],
  traps:[['社長に残業を余儀なくされた。','社長に残業させられた。','Yang memaksa adalah orang, jadi wajib 使役受身. 余儀なくされる hanya untuk keadaan.'],
         ['国に帰るのを余儀なくされた。','帰国を余儀なくされた。','Yang mendahului harus kata benda tindakan, bukan kata kerja bentuk kamus + の.'],
         ['大会は中止を余儀なくさせた。','大会は中止を余儀なくされた。','大会 adalah pihak yang terkena, jadi bentuknya pasif される, bukan させる.']],
  drills:[
    { t:'mcq', q:'「台風のため、大会は中止＿＿。」', opts:['を余儀なくされた','を余儀なくさせた','を余儀なくした','を余儀なくなった'], a:0,
      why:'大会 adalah pihak yang dipaksa keadaan, jadi memakai bentuk pasif を余儀なくされた.' },
    { t:'mcq', q:'「部長に休日出勤＿＿。」(dipaksa atasan)', opts:['を余儀なくされた','を余儀なくさせた','させられた','させた'], a:2,
      why:'Yang memaksa adalah manusia, maka dipakai 使役受身 させられた, bukan 余儀なくされる.' }
  ]},

{ id:'ja-p2', level:'N1', title:'〜に至る / 〜に至って / 〜に至るまで', titleId:'Berujung Sampai Pada',
  why:'Penutur Indonesia menerjemahkan 至る sebagai "sampai" lalu memakainya seperti まで biasa. Padahal 至る bukan penanda jarak atau waktu — ia menandai HASIL AKHIR dari proses panjang, dan hampir selalu tentang hal besar atau serius.',
  form:'名詞 / 動詞辞書形 + に至る … akhirnya berujung pada\n動詞辞書形 / 名詞 + に至って(は) … baru setelah sampai tahap itu (bernada terlambat)\n名詞 + に至るまで … sampai bahkan (menekankan luasnya cakupan)',
  notes:['〜に至る memerlukan proses yang panjang di depannya: 三年の交渉を経て, 議論を重ねた末に, dan sejenisnya.',
         '〜に至って sering dipasangkan dengan ようやく atau 初めて, dan menyiratkan kritik: terlalu lambat baru bertindak.',
         '〜に至るまで menekankan lingkup yang luar biasa luas, biasanya berpasangan dengan 〜から di depannya.',
         'Semuanya ragam tulis. Dalam percakapan orang memakai 〜ことになった atau 〜まで.'],
  ex:[['三年の交渉を経て、両社は合併するに至った。','Setelah tiga tahun negosiasi, kedua perusahaan akhirnya sampai pada penggabungan.','sannen no koushou o hete, ryousha wa gappei suru ni itatta.'],
      ['事故が起きるに至って、ようやく安全対策が見直された。','Baru setelah kecelakaan terjadi, langkah keselamatan akhirnya ditinjau ulang.','jiko ga okiru ni itatte, youyaku anzen taisaku ga minaosareta.'],
      ['服装から言葉遣いに至るまで細かく指導された。','Dari cara berpakaian sampai cara bertutur pun diarahkan secara rinci.','fukusou kara kotobazukai ni itaru made komakaku shidou sareta.']],
  traps:[['駅に至るまで歩いた。','駅まで歩いた。','至る bukan penanda jarak. Untuk batas tempat biasa cukup まで.'],
         ['離婚に至るになった。','離婚するに至った。','至る sendiri yang dilampaukan menjadi 至った; tidak ditambah になる.'],
         ['朝ご飯を食べるに至った。','朝ご飯を食べた。','至る hanya untuk hasil akhir yang besar atau serius, bukan kejadian sehari-hari.']],
  drills:[
    { t:'mcq', q:'「三年の交渉を経て、両社は合併する＿＿。」', opts:['に至るまで','に至った','に至っては','に至らない'], a:1,
      why:'Proses panjang yang berujung pada satu hasil besar dinyatakan dengan 〜に至った.' },
    { t:'mcq', q:'「服装から言葉遣い＿＿細かく指導された。」', opts:['に至って','に至った','に至らず','に至るまで'], a:3,
      why:'Pola 〜から〜に至るまで menegaskan cakupan yang sangat luas.' }
  ]},

{ id:'ja-p3', level:'N1', title:'〜ならでは', titleId:'Hanya Ada pada X',
  why:'Kata "khas" dalam bahasa Indonesia bisa netral bahkan sinis ("khas dia, selalu telat"). ならでは TIDAK PERNAH begitu — ia wajib memuji. Penutur Indonesia yang memakainya untuk menyindir menghasilkan kalimat yang terdengar salah rasa bagi orang Jepang.',
  form:'名詞 + ならではの + 名詞 … yang hanya ada pada X\n名詞 + ならではだ … itu memang hanya X yang bisa\n名詞 + ならでは + 動詞ない (jarang, ragam sastra)',
  notes:['Hanya kata benda yang boleh berada di depan ならでは: nama tempat, orang, musim, lembaga, profesi.',
         'Sebelum kata benda berikutnya wajib ada の. Menghilangkannya adalah kesalahan paling sering.',
         'Selalu bernada pujian atau kekaguman. Untuk kecenderungan netral atau negatif pakai 〜らしい atau 〜特有の.',
         'Sangat sering muncul di iklan pariwisata dan ulasan makanan, jadi mudah dikenali begitu kamu hafal polanya.'],
  ex:[['京都ならではの町並みが今も残っている。','Deretan bangunan yang hanya ada di Kyoto masih bertahan sampai kini.','kyouto naradewa no machinami ga ima mo nokotte iru.'],
      ['この味は母ならではだ。','Rasa seperti ini hanya ibu yang bisa.','kono aji wa haha naradewa da.'],
      ['職人ならではの技が光る一品です。','Ini karya yang memancarkan keahlian khas seorang perajin.','shokunin naradewa no waza ga hikaru ippin desu.']],
  traps:[['彼ならではの遅刻だ。','彼らしい遅刻だ。','ならでは wajib memuji; kebiasaan terlambat adalah kritik, jadi memakai らしい.'],
         ['京都ならでは町並み','京都ならではの町並み','Sebelum kata benda berikutnya harus ada の.'],
         ['安いならではの店だ。','安さならではの店だ。','Hanya kata benda yang boleh mendahului; kata sifat dibendakan dulu.']],
  drills:[
    { t:'mcq', q:'「京都＿＿の町並みが残っている。」', opts:['らしく','ながら','ならでは','どころか'], a:2,
      why:'ならではの + kata benda menandai sesuatu yang hanya ada di tempat itu, dengan nada memuji.' },
    { t:'mcq', q:'Kalimat yang JANGGAL memakai ならでは adalah', opts:['彼ならではの遅刻癖だ','職人ならではの技だ','この季節ならではの味だ','老舗ならではの心遣いだ'], a:0,
      why:'Kebiasaan terlambat adalah celaan, sedangkan ならでは hanya dipakai untuk memuji.' }
  ]},

{ id:'ja-p4', level:'N1', title:'〜いかんによらず / 〜いかんを問わず', titleId:'Tanpa Memandang Apa Pun',
  why:'Dalam bahasa Indonesia "apa pun alasannya" tidak butuh penanda apa-apa, sehingga penutur Indonesia lupa partikel の dan menulis 理由がいかんによらず. Selain itu mereka mencampurnya dengan にかかわらず biasa, padahal いかん hanya boleh menempel pada kata benda.',
  form:'名詞 + の + いかんによらず / いかんにかかわらず / いかんを問わず … tanpa memandang\n名詞 + の + いかんでは / いかんによって … tergantung pada\n名詞 + いかんだ … bergantung pada hal itu',
  notes:['如何 (いかん) adalah kata benda klasik yang berarti "bagaimana keadaannya".',
         'Karena いかん kata benda, penghubungnya の — bukan が dan bukan は.',
         'によらず, にかかわらず, を問わず ketiganya berarti "tanpa memandang" dan boleh saling ganti.',
         'いかんでは justru kebalikannya: "tergantung". Bacalah sampai kata terakhir sebelum memilih jawaban di ujian.',
         'Bahasa pengumuman resmi, syarat dan ketentuan, serta peraturan perusahaan. Tidak pernah dipakai lisan santai.'],
  ex:[['理由のいかんによらず、返金はいたしかねます。','Apa pun alasannya, kami tidak dapat mengembalikan uang.','riyuu no ikan ni yorazu, henkin wa itashikanemasu.'],
      ['合否のいかんを問わず、結果は郵送でお知らせします。','Lulus atau tidak, hasilnya kami kabarkan lewat pos.','gouhi no ikan o towazu, kekka wa yuusou de oshirase shimasu.'],
      ['今後の努力のいかんでは、合格も十分可能だ。','Tergantung usahamu selanjutnya, lulus pun sangat mungkin.','kongo no doryoku no ikan de wa, goukaku mo juubun kanou da.']],
  traps:[['理由がいかんによらず','理由のいかんによらず','いかん adalah kata benda, jadi penghubungnya の.'],
         ['安いいかんによらず','値段のいかんによらず','いかん tidak bisa menempel pada kata sifat; ubah dulu menjadi kata benda.'],
         ['結果のいかんによらず合格できる','結果のいかんでは合格できる','Kalau maknanya "tergantung", yang dipakai いかんでは, bukan によらず.']],
  drills:[
    { t:'mcq', q:'「理由＿＿、返金はいたしかねます。」', opts:['がいかんによらず','をいかんによらず','はいかんによらず','のいかんによらず'], a:3,
      why:'いかん kata benda sehingga disambung dengan の.' },
    { t:'mcq', q:'「努力＿＿、合格も可能だ。」(tergantung usaha)', opts:['のいかんを問わず','のいかんでは','のいかんによらず','のいかんにかかわらず'], a:1,
      why:'Hanya いかんでは yang berarti "tergantung"; tiga pilihan lain justru berarti "tanpa memandang".' }
  ]},

{ id:'ja-p5', level:'N1', title:'〜べからず / 〜べからざる', titleId:'Larangan Ragam Klasik',
  why:'Begitu melihat arti "dilarang", penutur Indonesia langsung memakainya dalam percakapan. Padahal べからず adalah bahasa papan pengumuman zaman Meiji — memakainya ke teman terdengar seperti berbicara dengan gaya undang-undang. Kesalahan kedua: menambahkan ない, padahal べからず sudah negatif.',
  form:'動詞辞書形 + べからず … dilarang (papan pengumuman, peribahasa)\n動詞辞書形 + べからざる + 名詞 … yang tidak boleh / tak tergantikan\nする → すべからず (klasik) atau するべからず',
  notes:['べからず berasal dari べし (harus) + ず (tidak). Jadi harfiahnya "tidak boleh".',
         'Sudah bermakna negatif, maka tidak pernah ditambah ない.',
         'Sebelum kata benda bentuknya berubah menjadi べからざる: 欠くべからざる存在, 許すべからざる行為.',
         'Untuk larangan lisan sehari-hari pakai 〜てはいけない atau 〜ないでください.',
         'Sering muncul di JLPT lewat peribahasa 初心忘るべからず — pesan Zeami agar tidak melupakan niat awal.'],
  ex:[['初心忘るべからず。','Jangan lupakan niat awalmu.','shoshin wasuru bekarazu.'],
      ['ここにゴミを捨てるべからず。','Dilarang membuang sampah di sini.','koko ni gomi o suteru bekarazu.'],
      ['彼はチームに欠くべからざる存在だ。','Dia sosok yang tak tergantikan bagi tim.','kare wa chiimu ni kaku bekarazaru sonzai da.']],
  traps:[['タバコを吸うべからずない。','タバコを吸うべからず。','べからず sudah bermakna larangan, tidak ditambah ない lagi.'],
         ['友達に「遅刻するべからず」と言った。','友達に「遅刻しないで」と言った。','べからず bahasa papan pengumuman; janggal diucapkan kepada teman.'],
         ['欠くべからず存在','欠くべからざる存在','Di depan kata benda bentuknya べからざる.']],
  drills:[
    { t:'mcq', q:'Bentuk larangan klasik dari する adalah', opts:['すべからず','するべからずない','しべからず','せべからず'], a:0,
      why:'する memakai bentuk klasik す sehingga menjadi すべからず; bentuk するべからず juga diterima.' },
    { t:'mcq', q:'「彼はチームに欠く＿＿存在だ。」', opts:['べからず','べきではない','べからざる','べからずの'], a:2,
      why:'Ketika menerangkan kata benda, べからず berubah menjadi べからざる.' }
  ]},

{ id:'ja-p6', level:'N1', title:'〜もさることながら', titleId:'Yang Itu Pun Benar, tapi Ini Lebih',
  why:'Diterjemahkan "tidak hanya... tetapi juga...", lalu penutur Indonesia memakainya seperti だけでなく yang netral. Padahal もさることながら memberi bobot lebih pada bagian KEDUA. Kalau informasi penting ditaruh di depan, penekanan kalimatnya jadi terbalik.',
  form:'名詞 + もさることながら、〜 … A memang begitu, tetapi B lebih menonjol lagi\nKata sifat dibendakan dulu: 安い → 安さ, 美しい → 美しさ',
  notes:['Bagian pertama sekadar diakui, bagian kedua itulah yang ingin ditonjolkan pembicara.',
         'Hanya kata benda yang boleh mendahului. Kata sifat diubah dengan さ, kata kerja dengan こと.',
         'Umumnya untuk hal positif atau netral: ulasan, pidato, artikel, kata sambutan.',
         'Selalu menyambung ke klausa berikutnya; tidak bisa mengakhiri kalimat.',
         'Bandingkan: 〜はもとより menekankan "sudah pasti", 〜のみならず sekadar menambah. もさることながら menimbang lalu mengangkat yang kedua.'],
  ex:[['この店は味もさることながら、店員の対応がすばらしい。','Rasanya memang enak, tetapi pelayanan pegawainya lebih luar biasa lagi.','kono mise wa aji mo saru koto nagara, tenin no taiou ga subarashii.'],
      ['価格もさることながら、燃費の良さが人気の理由だ。','Harganya memang bagus, tetapi iritnya bahan bakar itulah alasan popularitasnya.','kakaku mo saru koto nagara, nenpi no yosa ga ninki no riyuu da.'],
      ['本人の努力もさることながら、家族の支えが大きかった。','Usaha dirinya memang besar, tetapi dukungan keluarganya lebih besar lagi.','honnin no doryoku mo saru koto nagara, kazoku no sasae ga ookikatta.']],
  traps:[['安いもさることながら','安さもさることながら','Wajib kata benda; 安い dibendakan lebih dulu menjadi 安さ.'],
         ['料理もさることながらだ。','料理もさることながら、雰囲気もいい。','Pola ini selalu menyambung ke klausa kedua, tidak boleh mengakhiri kalimat.'],
         ['遅刻もさることながら、無断欠勤もする。','遅刻はもちろん、無断欠勤までする。','もさることながら bernada mengapresiasi, tidak cocok untuk menumpuk keluhan.']],
  drills:[
    { t:'mcq', q:'Bentuk yang benar sebelum もさることながら adalah', opts:['安い','安さ','安く','安くて'], a:1,
      why:'Hanya kata benda yang boleh mendahului, jadi 安い diubah menjadi 安さ.' },
    { t:'mcq', q:'Dalam 「AもさることながらB」, penekanan jatuh pada', opts:['A saja','A dan B sama kuat','tidak ada penekanan','B'], a:3,
      why:'A hanya diakui sekilas; B adalah bagian yang ingin ditonjolkan pembicara.' }
  ]},

{ id:'ja-p7', level:'N1', title:'〜きらいがある', titleId:'Kecenderungan yang Kurang Baik',
  why:'Melihat kanji 嫌, penutur Indonesia langsung mengira artinya "benci" atau "tidak suka", lalu menulis 納豆が嫌いがある. Padahal きらい di sini berarti kecondongan, dan yang lebih penting: kecondongan itu SELALU negatif, jadi tidak boleh dipakai untuk memuji.',
  form:'動詞辞書形 / 動詞ない形 + きらいがある\n名詞 + の + きらいがある\nSering didahului どうも, 少し, ともすると',
  notes:['きらい di pola ini ditulis hiragana dan tidak ada hubungannya dengan 嫌いだ (tidak suka).',
         'Hanya untuk kecenderungan buruk. Kecenderungan netral atau baik memakai 〜傾向がある.',
         'Menggambarkan watak atau kebiasaan yang berulang, bukan kejadian sekali.',
         'Sering dipakai untuk menegur secara halus, termasuk terhadap lembaga dan media.'],
  ex:[['彼は物事を悲観的に考えるきらいがある。','Dia cenderung memandang segala hal secara pesimis.','kare wa monogoto o hikanteki ni kangaeru kirai ga aru.'],
      ['最近の報道は一面的になるきらいがある。','Pemberitaan belakangan ini cenderung berat sebelah.','saikin no houdou wa ichimenteki ni naru kirai ga aru.'],
      ['彼女は人の話を最後まで聞かないきらいがある。','Dia cenderung tidak mendengarkan orang sampai selesai.','kanojo wa hito no hanashi o saigo made kikanai kirai ga aru.']],
  traps:[['彼は納豆が嫌いがある。','彼は納豆が嫌いだ。','きらいがある bukan berarti tidak suka; untuk itu cukup 嫌いだ.'],
         ['彼は努力するきらいがある。','彼は努力する傾向がある。','きらいがある hanya untuk hal buruk; kecenderungan baik memakai 傾向がある.'],
         ['昨日は遅刻するきらいがあった。','彼は遅刻するきらいがある。','Pola ini menggambarkan watak yang berulang, bukan satu kejadian kemarin.']],
  drills:[
    { t:'mcq', q:'「彼は物事を悲観的に考える＿＿。」', opts:['ことだ','ものだ','きらいがある','はずがない'], a:2,
      why:'きらいがある menyatakan kecenderungan yang dinilai kurang baik.' },
    { t:'mcq', q:'Kalimat yang SALAH adalah', opts:['彼は毎日努力するきらいがある','彼は決めつけるきらいがある','彼は人の話を聞かないきらいがある','報道は一面的になるきらいがある'], a:0,
      why:'Berusaha keras adalah hal baik, sedangkan きらいがある hanya untuk kecenderungan buruk.' }
  ]},

{ id:'ja-p8', level:'N1', title:'〜を踏まえて', titleId:'Berpijak pada Hal yang Sudah Ada',
  why:'Kata Indonesia "berdasarkan" membuat penutur Indonesia memilih に基づいて untuk segala konteks, sehingga kalimat rapat terdengar legalistik. 踏まえて lebih tepat di dunia kerja: ia berarti menimbang dulu apa yang sudah ada, lalu menyusun langkah baru — persis yang dituntut di rapat Jepang.',
  form:'名詞 + を踏まえて … dengan berpijak pada\n名詞 + を踏まえた + 名詞 … yang berpijak pada\n名詞 + を踏まえ … ragam tulis, tanpa て',
  notes:['踏まえる harfiahnya "menginjak dengan mantap", jadi maknanya berpijak pada sesuatu yang sudah pasti.',
         'Objeknya harus hal yang sudah diketahui: hasil, data, masukan, kenyataan, pengalaman. Bukan harapan atau dugaan.',
         'Hanya kata benda yang boleh mendahului. Kalimat dibendakan dulu dengan こと atau diganti kata bendanya.',
         'Beda dengan に基づいて: 基づいて berarti mengikuti aturan atau data secara langsung, sedangkan 踏まえて berarti mempertimbangkannya lalu memutuskan sendiri.',
         'Satu kalimat paling berguna di kantor Jepang: ご意見を踏まえて修正いたします。'],
  ex:[['前回の議論を踏まえて、案を修正しました。','Berpijak pada diskusi sebelumnya, saya merevisi usulannya.','zenkai no giron o fumaete, an o shuusei shimashita.'],
      ['調査結果を踏まえた提案をお願いします。','Tolong buat usulan yang berpijak pada hasil survei.','chousa kekka o fumaeta teian o onegai shimasu.'],
      ['現状を踏まえ、計画を見直す必要がある。','Dengan menimbang keadaan sekarang, rencana perlu ditinjau ulang.','genjou o fumae, keikaku o minaosu hitsuyou ga aru.']],
  traps:[['皆さんが言ったを踏まえて','皆さんのご意見を踏まえて','を踏まえて hanya menempel pada kata benda.'],
         ['法律を踏まえて処分する。','法律に基づいて処分する。','Penerapan aturan secara langsung memakai に基づいて.'],
         ['来年の予想を踏まえて決めた。','今年の実績を踏まえて決めた。','Yang dipijak harus hal yang sudah pasti, bukan perkiraan masa depan.']],
  drills:[
    { t:'mcq', q:'「前回のご意見＿＿、案を修正しました。」', opts:['をこめて','をもって','にわたって','を踏まえて'], a:3,
      why:'を踏まえて berarti berpijak pada masukan yang sudah ada lalu menyusun langkah berikutnya.' },
    { t:'mcq', q:'"Menjatuhkan sanksi sesuai undang-undang" yang tepat adalah', opts:['法律を踏まえて処分する','法律に基づいて処分する','法律をめぐって処分する','法律にわたって処分する'], a:1,
      why:'Menerapkan aturan secara langsung memakai に基づいて; 踏まえて untuk menimbang lalu memutuskan sendiri.' }
  ]}

],

vocab: [

{ id:'ja-pv-media', title:'Kosakata Media & Akademik', level:'N1',
  note:'Inilah kata yang memenuhi kolom opini surat kabar dan bagian membaca N1 — abstrak, ringkas, dan hampir tidak pernah muncul di percakapan sehari-hari.',
  words:[
    ['媒体','baitai','media perantara / sarana penyampai'],
    ['報道','houdou','pemberitaan'],
    ['世論','yoron','opini publik'],
    ['見解','kenkai','pandangan resmi'],
    ['是正','zesei','pembetulan (kekeliruan atau kebijakan)'],
    ['顕著','kencho','sangat menonjol (な)'],
    ['著しい','ichijirushii','mencolok, tajam (い)'],
    ['概念','gainen','konsep'],
    ['前提','zentei','premis, syarat awal'],
    ['根拠','konkyo','landasan, dasar bukti'],
    ['裏付け','urazuke','bukti penguat'],
    ['仮説','kasetsu','hipotesis'],
    ['検証','kenshou','pengujian, verifikasi'],
    ['実証','jisshou','pembuktian dengan data'],
    ['考察','kousatsu','telaah, pembahasan'],
    ['論理','ronri','logika'],
    ['統計','toukei','statistik'],
    ['指標','shihyou','indikator'],
    ['把握','haaku','penguasaan pemahaman atas keadaan'],
    ['懸念','kenen','kekhawatiran'],
    ['促進','sokushin','pendorongan, percepatan'],
    ['抑制','yokusei','pengendalian, penekanan'],
    ['施策','shisaku','kebijakan konkret'],
    ['措置','sochi','langkah resmi, tindakan'],
    ['遂行','suikou','pelaksanaan tugas sampai tuntas'],
    ['普及','fukyuu','penyebarluasan'],
    ['潜在','senzai','terpendam, laten'],
    ['妥当','datou','patut, masuk akal (な)'],
    ['曖昧','aimai','kabur, tidak tegas (な)'],
    ['一貫','ikkan','taat asas, konsisten'],
    ['及ぼす','oyobosu','menimbulkan (pengaruh)'],
    ['相次ぐ','aitsugu','terjadi beruntun'],
    ['陥る','ochiiru','terjerumus ke keadaan buruk'],
    ['露呈','rotei','tersingkapnya kelemahan']
  ]},

{ id:'ja-pv-yoji', title:'四字熟語 — Peribahasa Empat Kanji', level:'N1',
  note:'Empat kanji yang memadatkan satu pelajaran hidup; sering muncul di pidato, esai, dan wawancara kerja, dan biasanya tidak bisa ditebak dari arti kanjinya satu per satu.',
  words:[
    ['一石二鳥','isseki nichou','sekali dayung dua pulau terlampaui'],
    ['十人十色','juunin toiro','lain orang lain selera'],
    ['一期一会','ichigo ichie','pertemuan sekali seumur hidup, maka hargailah'],
    ['臨機応変','rinki ouhen','luwes menyesuaikan keadaan'],
    ['自業自得','jigou jitoku','menuai akibat perbuatan sendiri'],
    ['温故知新','onko chishin','menimba hal baru dari yang lama'],
    ['意気投合','iki tougou','langsung cocok dan sepaham'],
    ['半信半疑','hanshin hangi','setengah percaya setengah ragu'],
    ['単刀直入','tantou chokunyuu','langsung ke pokok persoalan'],
    ['試行錯誤','shikou sakugo','mencoba dan keliru sampai ketemu caranya'],
    ['一日千秋','ichijitsu senshuu','menanti tak sabar, sehari terasa seribu tahun'],
    ['優柔不断','yuujuu fudan','plin-plan, sulit memutuskan'],
    ['弱肉強食','jakuniku kyoushoku','yang kuat memangsa yang lemah'],
    ['大同小異','daidou shoui','berbeda tipis, pada dasarnya sama'],
    ['因果応報','inga ouhou','setiap perbuatan berbuah balasannya'],
    ['有言実行','yuugen jikkou','menepati apa yang sudah diucapkan'],
    ['不言実行','fugen jikkou','bekerja tanpa banyak bicara'],
    ['我田引水','gaden insui','menarik segalanya demi keuntungan sendiri'],
    ['四苦八苦','shiku hakku','bersusah payah setengah mati'],
    ['一長一短','icchou ittan','ada kelebihan ada kekurangan'],
    ['起死回生','kishi kaisei','membalikkan keadaan dari ambang kekalahan'],
    ['言語道断','gongo doudan','keterlaluan, tak termaafkan'],
    ['本末転倒','honmatsu tentou','mendahulukan yang bukan pokok'],
    ['前代未聞','zendai mimon','belum pernah terdengar sebelumnya'],
    ['日進月歩','nisshin geppo','maju pesat dari hari ke hari'],
    ['一心不乱','isshin furan','khusyuk, tidak terpecah perhatiannya'],
    ['適材適所','tekizai tekisho','orang yang tepat di tempat yang tepat'],
    ['自画自賛','jiga jisan','memuji hasil kerja sendiri'],
    ['千載一遇','senzai ichiguu','kesempatan langka sekali seumur hidup'],
    ['順風満帆','junpuu manpan','berjalan mulus tanpa hambatan']
  ]},

{ id:'ja-pv-kanyou', title:'慣用句 — Ungkapan Idiomatik', level:'N1',
  note:'Sebagian besar memakai anggota tubuh dan artinya tidak bisa ditebak dari kata pembentuknya, sehingga inilah bagian yang paling sering menjatuhkan peserta N1 di soal simakan.',
  words:[
    ['顔が広い','kao ga hiroi','luas pergaulannya, banyak kenalan'],
    ['顔を立てる','kao o tateru','menjaga muka orang lain'],
    ['顔から火が出る','kao kara hi ga deru','malu bukan main'],
    ['頭が上がらない','atama ga agaranai','merasa berutang budi sehingga tak berani membantah'],
    ['頭を抱える','atama o kakaeru','pusing tujuh keliling memikirkan masalah'],
    ['手を貸す','te o kasu','mengulurkan bantuan'],
    ['手が離せない','te ga hanasenai','sedang sibuk, tak bisa ditinggal'],
    ['腹を割る','hara o waru','bicara terus terang dari hati'],
    ['骨が折れる','hone ga oreru','melelahkan, menguras tenaga'],
    ['耳が痛い','mimi ga itai','teguran yang mengena telak'],
    ['口が堅い','kuchi ga katai','pandai menyimpan rahasia'],
    ['口が軽い','kuchi ga karui','mulutnya bocor'],
    ['目を通す','me o toosu','membaca sekilas dari awal sampai akhir'],
    ['目が高い','me ga takai','jeli menilai mutu'],
    ['鼻が高い','hana ga takai','bangga'],
    ['首を長くする','kubi o nagaku suru','menanti dengan tidak sabar'],
    ['足を運ぶ','ashi o hakobu','menyempatkan diri datang'],
    ['足が出る','ashi ga deru','anggaran jebol'],
    ['腰が低い','koshi ga hikui','rendah hati, tidak sombong'],
    ['舌を巻く','shita o maku','kagum sampai tak berkata-kata'],
    ['気が置けない','ki ga okenai','akrab sehingga tak perlu sungkan'],
    ['気が進まない','ki ga susumanai','kurang berminat, berat hati'],
    ['水を差す','mizu o sasu','merusak suasana yang sedang baik'],
    ['油を売る','abura o uru','bermalas-malasan di jam kerja'],
    ['猫の手も借りたい','neko no te mo karitai','sibuk luar biasa sampai butuh bantuan siapa saja'],
    ['峠を越す','touge o kosu','melewati puncak krisis'],
    ['図に乗る','zu ni noru','besar kepala setelah dipuji'],
    ['念を押す','nen o osu','menegaskan ulang agar tidak keliru'],
    ['折り合いをつける','oriai o tsukeru','mencapai titik temu'],
    ['拍車をかける','hakusha o kakeru','memacu, mempercepat laju'],
    ['白羽の矢が立つ','shiraha no ya ga tatsu','terpilih sebagai orang yang ditunjuk'],
    ['心を鬼にする','kokoro o oni ni suru','mengeraskan hati demi kebaikan orang itu']
  ]}

],

phrases: [

{ g:'Rapat Formal', items:[
  ['定刻になりましたので、始めさせていただきます','teikoku ni narimashita node, hajimesasete itadakimasu','Waktunya sudah tiba, izinkan kami memulai'],
  ['本日の議題は三点ございます','honjitsu no gidai wa santen gozaimasu','Agenda hari ini ada tiga poin'],
  ['お手元の資料をご覧ください','otemoto no shiryou o goran kudasai','Silakan lihat dokumen di hadapan Anda'],
  ['一点よろしいでしょうか','itten yoroshii deshou ka','Boleh saya menyampaikan satu hal?'],
  ['確認させていただきたいのですが','kakunin sasete itadakitai no desu ga','Ada yang ingin saya pastikan'],
  ['おっしゃる通りだと思います','ossharu toori da to omoimasu','Saya rasa memang seperti yang Anda sampaikan'],
  ['恐れ入りますが、補足させてください','osoreirimasu ga, hosoku sasete kudasai','Mohon maaf, izinkan saya menambahkan'],
  ['その点については持ち帰らせてください','sono ten ni tsuite wa mochikaerasete kudasai','Untuk poin itu, izinkan kami bahas dulu secara internal'],
  ['前回の議論を踏まえて、案を修正しました','zenkai no giron o fumaete, an o shuusei shimashita','Berpijak pada diskusi lalu, usulannya sudah kami revisi'],
  ['異論がなければ、この方向で進めます','iron ga nakereba, kono houkou de susumemasu','Bila tidak ada keberatan, kami lanjutkan ke arah ini'],
  ['次回までに詳細を詰めてまいります','jikai made ni shousai o tsumete mairimasu','Rinciannya akan kami rampungkan sebelum pertemuan berikutnya'],
  ['本日はお時間をいただきありがとうございました','honjitsu wa ojikan o itadaki arigatou gozaimashita','Terima kasih atas waktu Anda hari ini']
]},

{ g:'Presentasi', items:[
  ['本日は貴重なお時間をいただき、ありがとうございます','honjitsu wa kichou na ojikan o itadaki, arigatou gozaimasu','Terima kasih atas waktu berharga Anda hari ini'],
  ['本日は三つの観点からご説明いたします','honjitsu wa mittsu no kanten kara gosetsumei itashimasu','Hari ini saya akan menjelaskan dari tiga sudut pandang'],
  ['まず結論から申し上げます','mazu ketsuron kara moushiagemasu','Saya sampaikan kesimpulannya lebih dulu'],
  ['こちらのグラフをご覧ください','kochira no gurafu o goran kudasai','Silakan lihat grafik berikut'],
  ['調査結果を踏まえた提案でございます','chousa kekka o fumaeta teian de gozaimasu','Ini usulan yang berpijak pada hasil survei'],
  ['数字が示す通り、増加が顕著です','suuji ga shimesu toori, zouka ga kencho desu','Sebagaimana ditunjukkan angkanya, kenaikannya sangat menonjol'],
  ['補足いたしますと、前提が二つございます','hosoku itashimasu to, zentei ga futatsu gozaimasu','Sebagai tambahan, ada dua syarat awal'],
  ['次のスライドに移ります','tsugi no suraido ni utsurimasu','Kita lanjut ke salindia berikutnya'],
  ['以上で私の発表を終わります','ijou de watashi no happyou o owarimasu','Sekian presentasi saya'],
  ['ご質問がありましたら、お願いいたします','goshitsumon ga arimashitara, onegai itashimasu','Bila ada pertanyaan, silakan sampaikan'],
  ['ご指摘ありがとうございます。後ほど確認いたします','goshiteki arigatou gozaimasu. nochihodo kakunin itashimasu','Terima kasih atas koreksinya, akan saya periksa nanti'],
  ['説明が不十分でしたら、おっしゃってください','setsumei ga fujuubun deshitara, osshatte kudasai','Bila penjelasan saya kurang, mohon beri tahu']
]}

],

levels: [
  { id:'N1', units:[
      { id:'ja-n1-p1', title:'Compulsion & Extremity', titleId:'Keterpaksaan & Ujung Keadaan',
        goal:'Pola N1 yang menyatakan terpaksa, berujung pada, dan hanya ada pada X.',
        grammar:["ja-p1","ja-p2","ja-p3"], vocab:["ja-pv-media"],
        phrases:["Rapat Formal"], skills:["listen","speak"],
        cando:["Membedakan ざるを得ない dari しかない","Membaca 至る dan ならでは di teks berita"] },
      { id:'ja-n1-p2', title:'Formal Negation', titleId:'Penyangkalan Ragam Resmi',
        goal:'Bentuk klasik yang bertahan di dokumen resmi dan papan pengumuman.',
        grammar:["ja-p4","ja-p5","ja-p6"], vocab:["ja-pv-yoji"],
        phrases:["Rapat Formal"], skills:["listen","speak"],
        cando:["Mengenali larangan ragam klasik べからず","Memakai 四字熟語 yang lazim"] },
      { id:'ja-n1-p3', title:'Tendency & Basis', titleId:'Kecenderungan & Landasan',
        goal:'Dua pola terakhir N1 plus ungkapan idiomatik yang sering muncul di simakan.',
        grammar:["ja-p7","ja-p8"], vocab:["ja-pv-kanyou"],
        phrases:["Presentasi"], skills:["listen","speak"],
        cando:["Memakai きらいがある untuk kecenderungan negatif","Menangkap 慣用句 saat menyimak"] }
  ]}
]

};
