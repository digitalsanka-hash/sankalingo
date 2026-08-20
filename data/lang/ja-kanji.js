/* ── Kanji JLPT N5 ────────────────────────────────────────────────
   105 kanji tingkat dasar, disusun menurut TEMA bukan urutan coretan.

   Aplikasi ini sendiri menasihati di halaman ujian JLPT: "Kanji —
   hafalkan lewat komponen, bukan coretan." Modul ini menuruti nasihat
   itu. Tiap kanji diberi:
     · arti pokoknya dalam bahasa Indonesia
     · on'yomi (bacaan serapan Tionghoa, ditulis katakana) dan kun'yomi
       (bacaan asli Jepang, ditulis hiragana) — pembedaan inilah yang
       paling sering membuat pemula tersesat
     · uraian komponennya: dari gambar apa bentuk itu berasal, atau
       potongan mana yang bisa dikenali kembali di kanji lain
     · dua sampai tiga kata contoh yang benar-benar terpakai

   Bacaan Latin TIDAK ditulis di sini. Semuanya dihitung saat jalan oleh
   js/translit.js dari kananya, supaya tidak ada dua sumber kebenaran
   yang bisa saling menyimpang.                                        */

const urai = (b) => {
  const [k, arti, on, kun, coret, komponen, kata] = b;
  return {
    k, arti, coret, komponen,
    on:  on  ? on.split('|')  : [],
    kun: kun ? kun.split('|') : [],
    kata: kata ? kata.split(';').map(x => x.split('|')) : []
  };
};

const G = (id, nama, catatan, butir) => ({ id, nama, catatan, kanji: butir.map(urai) });

export const KANJI_GRUP = [

G('angka', 'Angka & Uang',
  'Empat belas kanji ini menutup hampir setiap harga, tanggal, dan nomor yang akan kamu baca di Jepang. 一二三 memang segamblang kelihatannya — tetapi bacaannya berganti-ganti tergantung kata di belakangnya, dan justru itulah kesulitan sebenarnya.',
[
['一','satu','イチ|イツ','ひと-つ',1,'Satu garis mendatar. Pictogram paling murni dalam seluruh kanji.','一つ|ひとつ|satu buah;一月|いちがつ|Januari;一人|ひとり|satu orang (bacaan tak beraturan)'],
['二','dua','ニ','ふた-つ',2,'Dua garis mendatar. Yang atas dibuat lebih pendek supaya tidak tertukar dengan 三.','二つ|ふたつ|dua buah;二人|ふたり|dua orang;二月|にがつ|Februari'],
['三','tiga','サン','みっ-つ',3,'Tiga garis. Yang tengah paling pendek — itu penanda bentuknya.','三つ|みっつ|tiga buah;三月|さんがつ|Maret;三人|さんにん|tiga orang'],
['四','empat','シ','よっ-つ|よん',5,'Mulut 口 dengan dua kaki di dalamnya. Sejak angka inilah bentuknya berhenti berupa garis bertumpuk.','四つ|よっつ|empat buah;四月|しがつ|April;四時|よじ|pukul empat'],
['五','lima','ゴ','いつ-つ',4,'Dua garis mendatar dijembatani coretan yang menyilang di tengah.','五つ|いつつ|lima buah;五月|ごがつ|Mei;五分|ごふん|lima menit'],
['六','enam','ロク','むっ-つ',4,'Sebuah tutup dengan dua kaki yang melebar di bawahnya.','六つ|むっつ|enam buah;六月|ろくがつ|Juni;六時|ろくじ|pukul enam'],
['七','tujuh','シチ','なな-つ',2,'Bentuk kail. Mudah tertukar dengan 十 — perhatikan lengkungnya.','七つ|ななつ|tujuh buah;七月|しちがつ|Juli;七時|しちじ|pukul tujuh'],
['八','delapan','ハチ','やっ-つ',2,'Dua coretan yang membuka ke bawah. Karena membuka, angka ini dianggap bertuah di Jepang dan Tiongkok.','八つ|やっつ|delapan buah;八月|はちがつ|Agustus;八百屋|やおや|toko sayur'],
['九','sembilan','キュウ|ク','ここの-つ',2,'Coretan melengkung yang berbalik arah. Dua bacaan on-nya sama-sama lazim, jadi hafalkan per kata.','九つ|ここのつ|sembilan buah;九月|くがつ|September;九時|くじ|pukul sembilan'],
['十','sepuluh','ジュウ','とお',2,'Palang: satu garis tegak menyilang satu garis datar.','十|とお|sepuluh;十月|じゅうがつ|Oktober;十分|じゅっぷん|sepuluh menit'],
['百','seratus','ヒャク','',6,'Angka 一 duduk di atas 白 (putih). Bunyinya berubah-ubah: 三百 sanbyaku, 六百 roppyaku, 八百 happyaku.','百|ひゃく|seratus;三百|さんびゃく|tiga ratus;八百|はっぴゃく|delapan ratus'],
['千','seribu','セン','ち',3,'Mirip 十, dengan satu coretan miring menyilang di atasnya.','千|せん|seribu;三千|さんぜん|tiga ribu;千円|せんえん|seribu yen'],
['万','sepuluh ribu','マン|バン','',3,'Jepang berhitung per SEPULUH RIBU, bukan per seribu. 100.000 dibaca 十万 — sepuluh buah 万. Inilah sumber salah hitung terbesar bagi pemula.','一万|いちまん|sepuluh ribu;十万|じゅうまん|seratus ribu;万年筆|まんねんひつ|pena tinta'],
['円','yen; bulat','エン','まる-い',4,'Sebuah bingkai dengan garis di dalamnya. Makna aslinya "bulat" — mata uangnya dinamai dari bentuk koinnya.','円|えん|yen;千円|せんえん|seribu yen;円い|まるい|bulat']
]),

G('waktu', 'Hari, Bulan & Waktu',
  'Tujuh kanji unsur (日月火水木金土) merangkap nama tujuh hari — persis seperti nama hari dalam banyak bahasa Eropa yang juga diambil dari benda langit. Sekali dikuasai, kalender Jepang langsung terbaca.',
[
['日','matahari; hari','ニチ|ジツ','ひ|か',4,'Gambar matahari: dulu sebuah lingkaran bertitik di tengah, lama-lama diluruskan menjadi kotak bergaris.','日本|にほん|Jepang;今日|きょう|hari ini (tak beraturan);日曜日|にちようび|hari Minggu'],
['月','bulan','ゲツ|ガツ','つき',4,'Gambar bulan sabit. Kanji yang sama dipakai untuk bulan di langit dan bulan di kalender.','月曜日|げつようび|hari Senin;一月|いちがつ|Januari;今月|こんげつ|bulan ini'],
['火','api','カ','ひ',4,'Gambar nyala api dengan percikan di kiri-kanannya.','火曜日|かようび|hari Selasa;火事|かじ|kebakaran;花火|はなび|kembang api'],
['水','air','スイ','みず',4,'Gambar aliran sungai dengan cipratan di kedua sisinya.','水曜日|すいようび|hari Rabu;水|みず|air;お水|おみず|air (sopan)'],
['木','pohon; kayu','モク|ボク','き',4,'Gambar pohon: batang tegak, dahan melintang, akar melebar.','木曜日|もくようび|hari Kamis;木|き|pohon;大木|たいぼく|pohon besar'],
['金','emas; uang; logam','キン|コン','かね',8,'Sebuah atap menaungi butiran logam di dalam tanah. Dari "logam mulia" maknanya melebar menjadi "uang".','金曜日|きんようび|hari Jumat;お金|おかね|uang;金|きん|emas'],
['土','tanah','ド|ト','つち',3,'Gundukan tanah di atas permukaan yang datar.','土曜日|どようび|hari Sabtu;土|つち|tanah;お土産|おみやげ|oleh-oleh (tak beraturan)'],
['曜','hari dalam pekan','ヨウ','',18,'Matahari 日 di kiri, sisanya penunjuk bunyi. Hampir hanya muncul di nama tujuh hari — cukup dikenali, tak perlu bisa ditulis.','曜日|ようび|nama hari;何曜日|なにようび|hari apa;水曜日|すいようび|hari Rabu'],
['年','tahun','ネン','とし',6,'Berasal dari gambar orang memanggul panenan — satu panen, satu tahun.','今年|ことし|tahun ini (tak beraturan);来年|らいねん|tahun depan;一年|いちねん|satu tahun'],
['時','jam; waktu','ジ','とき',10,'Matahari 日 di kiri, kuil 寺 di kanan sebagai penunjuk bunyi. Dulu waktu memang dibacakan dari lonceng kuil.','時間|じかん|waktu / jam;何時|なんじ|pukul berapa;時々|ときどき|kadang-kadang'],
['分','menit; membagi','ブン|フン','わ-ける',4,'Pisau 刀 membelah sesuatu menjadi dua 八. Dari "membagi" lahir "menit" — pembagian jam.','分|ふん|menit;何分|なんぷん|berapa menit;分かる|わかる|mengerti'],
['半','setengah','ハン','なか-ば',5,'Sesuatu yang dibelah tepat di tengah oleh garis tegak.','半分|はんぶん|separuh;一時半|いちじはん|pukul setengah dua;半年|はんとし|setengah tahun'],
['今','sekarang','コン|キン','いま',4,'Sebuah atap menutupi satu titik — saat ini, di sini.','今|いま|sekarang;今日|きょう|hari ini;今晩|こんばん|malam ini'],
['毎','setiap','マイ','',6,'Berasal dari gambar ibu 母 berhiaskan sanggul. Kini hampir hanya dipakai sebagai awalan "tiap-tiap".','毎日|まいにち|setiap hari;毎年|まいとし|setiap tahun;毎朝|まいあさ|setiap pagi']
]),

G('alam', 'Alam',
  'Kanji-kanji tertua dan paling gamblang. Hampir semuanya masih menyerupai benda yang digambarnya, jadi kelompok inilah yang paling cepat melekat.',
[
['山','gunung','サン','やま',3,'Tiga puncak berjajar. Nyaris tak berubah sejak tiga ribu tahun lalu.','山|やま|gunung;富士山|ふじさん|Gunung Fuji;火山|かざん|gunung api'],
['川','sungai','セン','かわ',3,'Tiga garis air yang mengalir turun.','川|かわ|sungai;小川|おがわ|anak sungai;山川|やまかわ|gunung dan sungai'],
['田','sawah','デン','た',5,'Petak sawah dilihat dari atas, lengkap dengan pematangnya. Muncul di ribuan nama keluarga Jepang.','田|た|sawah;田んぼ|たんぼ|petak sawah;山田|やまだ|Yamada (nama orang)'],
['天','langit','テン','あま',4,'Orang 大 dengan satu garis di atas kepalanya — yang berada di atas manusia.','天気|てんき|cuaca;天|てん|langit;天ぷら|てんぷら|tempura'],
['気','udara; perasaan','キ|ケ','',6,'Berasal dari gambar uap yang mengepul. Maknanya melebar dari "udara" ke "suasana hati" — sama seperti kata "hawa" dalam bahasa kita.','天気|てんき|cuaca;元気|げんき|sehat, bersemangat;気持ち|きもち|perasaan'],
['雨','hujan','ウ','あめ',8,'Awan dengan empat titik air jatuh di bawahnya.','雨|あめ|hujan;大雨|おおあめ|hujan lebat;雨天|うてん|cuaca hujan'],
['花','bunga','カ','はな',7,'Rumput 艹 di atas, penunjuk bunyi 化 di bawah.','花|はな|bunga;花火|はなび|kembang api;生け花|いけばな|seni merangkai bunga'],
['魚','ikan','ギョ','さかな|うお',11,'Gambar ikan yang ditegakkan: kepala di atas, badan bersisik, ekor menjadi empat titik di bawah.','魚|さかな|ikan;金魚|きんぎょ|ikan mas koki;人魚|にんぎょ|putri duyung'],
['犬','anjing','ケン','いぬ',4,'Kanji 大 (besar) dengan satu titik tambahan — menurut tafsir lama, telinga anjing yang tegak.','犬|いぬ|anjing;子犬|こいぬ|anak anjing;番犬|ばんけん|anjing penjaga']
]),

G('orang', 'Orang & Keluarga',
  'Sebutan keluarga dalam bahasa Jepang punya dua bentuk: satu untuk keluarga SENDIRI (merendah) dan satu untuk keluarga ORANG LAIN (meninggikan). 父 chichi berarti "ayah saya", お父さん otousan berarti "ayah Anda". Salah pilih terdengar kasar.',
[
['人','orang','ジン|ニン','ひと',2,'Gambar orang berdiri dilihat dari samping — dua kaki menopang badan.','人|ひと|orang;日本人|にほんじん|orang Jepang;三人|さんにん|tiga orang'],
['男','laki-laki','ダン|ナン','おとこ',7,'Sawah 田 di atas tenaga 力 di bawah — yang mengerahkan tenaga di sawah.','男|おとこ|laki-laki;男の子|おとこのこ|anak laki-laki;長男|ちょうなん|anak sulung laki-laki'],
['女','perempuan','ジョ|ニョ','おんな|め',3,'Gambar orang bersimpuh dengan tangan bersilang di pangkuan.','女|おんな|perempuan;女の子|おんなのこ|anak perempuan;彼女|かのじょ|dia (perempuan)'],
['子','anak','シ|ス','こ',3,'Gambar bayi berselimut: kepala besar, tangan terbuka, kaki terbungkus.','子ども|こども|anak;男子|だんし|anak laki-laki;椅子|いす|kursi (tak beraturan)'],
['父','ayah','フ','ちち|とう',4,'Berasal dari gambar tangan memegang kapak — kepala keluarga.','父|ちち|ayah saya;お父さん|おとうさん|ayah (Anda);父母|ふぼ|orang tua'],
['母','ibu','ボ','はは|かあ',5,'Gambar perempuan bersimpuh dengan dua titik dada — yang menyusui.','母|はは|ibu saya;お母さん|おかあさん|ibu (Anda);母国|ぼこく|tanah air'],
['友','teman','ユウ','とも',4,'Dua tangan yang saling menggenggam.','友だち|ともだち|teman;友人|ゆうじん|teman (formal);親友|しんゆう|sahabat karib'],
['先','sebelum; ujung','セン','さき',6,'Kaki yang melangkah lebih dulu di atas orang. Dari "duluan" lahir 先生 — "yang lahir lebih dulu", yakni guru.','先生|せんせい|guru;先週|せんしゅう|pekan lalu;お先に|おさきに|permisi duluan'],
['生','hidup; lahir','セイ|ショウ','い-きる|う-まれる|なま',5,'Gambar tunas yang menyembul dari tanah. Inilah kanji dengan bacaan terbanyak di seluruh N5 — jangan dihafal sendirian, hafalkan per kata.','学生|がくせい|pelajar;生まれる|うまれる|lahir;生ビール|なまビール|bir segar'],
['名','nama','メイ|ミョウ','な',6,'Malam 夕 dan mulut 口 — dalam gelap orang saling menyebut nama supaya dikenali.','名前|なまえ|nama;有名|ゆうめい|terkenal;名字|みょうじ|nama keluarga']
]),

G('tubuh', 'Anggota Badan',
  'Enam kanji ini muncul jauh melampaui makna harfiahnya: 口 juga berarti pintu masuk, 手 juga berarti orang yang mengerjakan, 目 juga menandai nomor urut.',
[
['手','tangan','シュ','て',4,'Gambar telapak dengan jari-jarinya yang terentang.','手|て|tangan;上手|じょうず|pandai (tak beraturan);切手|きって|perangko'],
['足','kaki; cukup','ソク','あし|た-りる',7,'Lutut 口 di atas telapak kaki di bawah. Makna keduanya "mencukupi" — kaki yang menopang.','足|あし|kaki;足りる|たりる|cukup;一足|いっそく|sepasang (alas kaki)'],
['目','mata','モク','め',5,'Gambar mata yang ditegakkan; garis di dalamnya adalah pupilnya.','目|め|mata;目次|もくじ|daftar isi;一つ目|ひとつめ|yang pertama'],
['耳','telinga','ジ','みみ',6,'Gambar daun telinga lengkap dengan lekuk dalamnya.','耳|みみ|telinga;耳鼻科|じびか|THT;早耳|はやみみ|cepat tahu kabar'],
['口','mulut; lubang','コウ|ク','くち',3,'Gambar mulut yang terbuka. Sebagai komponen ia berarti lubang atau bicara.','口|くち|mulut;入口|いりぐち|pintu masuk;出口|でぐち|pintu keluar'],
['力','tenaga','リョク|リキ','ちから',2,'Gambar lengan yang menegangkan otot — menurut tafsir lain, sebuah bajak.','力|ちから|tenaga;電力|でんりょく|daya listrik;力持ち|ちからもち|orang kuat']
]),

G('arah', 'Arah & Letak',
  'Bahasa Jepang meletakkan penunjuk tempat SESUDAH bendanya: 机の上 (meja-nya-atas) = "di atas meja". Urutannya kebalikan dari bahasa Indonesia, jadi kelompok ini perlu dilatih dalam frasa utuh, bukan per kata.',
[
['上','atas; naik','ジョウ','うえ|あ-げる|のぼ-る',3,'Sebuah titik di atas garis dasar.','上|うえ|atas;上手|じょうず|pandai;上がる|あがる|naik'],
['下','bawah; turun','カ|ゲ','した|さ-げる|くだ-さる',3,'Sebuah titik di bawah garis dasar — 上 yang dibalik.','下|した|bawah;地下|ちか|bawah tanah;下さい|ください|tolong (beri saya)'],
['中','tengah; dalam','チュウ','なか',4,'Garis yang menembus tepat di tengah kotak.','中|なか|dalam;中国|ちゅうごく|Tiongkok;一日中|いちにちじゅう|sepanjang hari'],
['外','luar','ガイ|ゲ','そと|ほか',5,'Malam 夕 dan ramalan 卜 — meramal di luar waktu yang pantas.','外|そと|luar;外国|がいこく|luar negeri;外国人|がいこくじん|orang asing'],
['前','depan; sebelum','ゼン','まえ',9,'Menunjuk ruang sekaligus waktu: 駅の前 depan stasiun, 三時前 sebelum pukul tiga.','前|まえ|depan;名前|なまえ|nama;午前|ごぜん|sebelum tengah hari'],
['後','belakang; sesudah','ゴ|コウ','あと|うし-ろ|のち',9,'Pasangan 前. Bacaannya bercabang: うしろ untuk ruang, あと dan ご untuk waktu.','後ろ|うしろ|di belakang;午後|ごご|sesudah tengah hari;後で|あとで|nanti'],
['左','kiri','サ','ひだり',5,'Tangan di atas tukang 工. Coretan pertamanya MENDATAR — inilah bedanya dari 右.','左|ひだり|kiri;左手|ひだりて|tangan kiri;左側|ひだりがわ|sisi kiri'],
['右','kanan','ウ|ユウ','みぎ',5,'Tangan di atas mulut 口. Coretan pertamanya MIRING, kebalikan dari 左 — satu-satunya cara membedakan keduanya saat menulis.','右|みぎ|kanan;右手|みぎて|tangan kanan;右側|みぎがわ|sisi kanan'],
['間','antara; jeda','カン|ケン','あいだ|ま',12,'Matahari 日 mengintip dari sela pintu gerbang 門.','時間|じかん|waktu;人間|にんげん|manusia;間|あいだ|antara'],
['東','timur','トウ','ひがし',8,'Matahari 日 tersangkut di balik pohon 木 — matahari yang sedang terbit.','東|ひがし|timur;東京|とうきょう|Tokyo;東口|ひがしぐち|pintu timur'],
['西','barat','セイ|サイ','にし',6,'Berasal dari gambar sarang burung — burung pulang ke sarang saat matahari terbenam.','西|にし|barat;西口|にしぐち|pintu barat;関西|かんさい|wilayah Kansai'],
['南','selatan','ナン','みなみ',9,'Bagi Jepang, selatan adalah arah yang hangat. 南口 minamiguchi tertulis di hampir setiap stasiun.','南|みなみ|selatan;南口|みなみぐち|pintu selatan;東南|とうなん|tenggara'],
['北','utara','ホク','きた',5,'Dua orang yang saling membelakangi — dari gagasan "punggung", dan punggung menghadap utara ketika orang menghadap matahari.','北|きた|utara;北口|きたぐち|pintu utara;東北|とうほく|wilayah Tohoku']
]),

G('sifat', 'Sifat & Ukuran',
  'Kanji sifat hampir selalu muncul bersama okurigana — ekor hiragana yang menunjukkan bentuknya: 大きい ookii, 大きな ookina, 大学 daigaku. Yang berubah ekornya, bukan kanjinya.',
[
['大','besar','ダイ|タイ','おお-きい',3,'Gambar orang yang merentangkan kedua tangan selebar-lebarnya.','大きい|おおきい|besar;大学|だいがく|universitas;大人|おとな|orang dewasa (tak beraturan)'],
['小','kecil','ショウ','ちい-さい|こ|お',3,'Tiga coretan pendek — sesuatu yang terpecah menjadi butiran.','小さい|ちいさい|kecil;小学校|しょうがっこう|sekolah dasar;小川|おがわ|anak sungai'],
['高','tinggi; mahal','コウ','たか-い',10,'Gambar menara bertingkat. Satu kanji untuk dua makna yang di bahasa kita terpisah — "gedung tinggi" dan "harga tinggi".','高い|たかい|tinggi / mahal;高校|こうこう|SMA;背が高い|せがたかい|badannya tinggi'],
['安','murah; tenang','アン','やす-い',6,'Perempuan 女 di bawah atap — rumah yang tenteram. Dari "tenang" lahir "murah", yakni harga yang tidak mencemaskan.','安い|やすい|murah;安心|あんしん|lega;安全|あんぜん|aman'],
['新','baru','シン','あたら-しい',13,'Kayu 木 dan kapak 斤 — kayu yang baru saja ditebang.','新しい|あたらしい|baru;新聞|しんぶん|surat kabar;新幹線|しんかんせん|Shinkansen'],
['古','lama; tua','コ','ふる-い',5,'Sepuluh 十 mulut 口 — cerita yang sudah melewati sepuluh keturunan.','古い|ふるい|lama;中古|ちゅうこ|bekas;古本|ふるほん|buku bekas'],
['多','banyak','タ','おお-い',6,'Dua kanji 夕 (petang) bertumpuk — petang demi petang yang bertambah.','多い|おおい|banyak;多分|たぶん|mungkin;多数|たすう|jumlah besar'],
['少','sedikit','ショウ','すく-ない|すこ-し',4,'Kanji 小 dengan satu coretan yang mengiris — kecil yang dikurangi lagi.','少し|すこし|sedikit;少ない|すくない|hanya sedikit;少々|しょうしょう|sebentar (sopan)'],
['長','panjang; kepala','チョウ','なが-い',8,'Gambar orang berambut panjang. Dari "panjang" lahir "yang paling senior" — 社長 direktur.','長い|ながい|panjang;社長|しゃちょう|direktur;長崎|ながさき|Nagasaki'],
['白','putih','ハク|ビャク','しろ-い',5,'Matahari 日 dengan seberkas sinar di atasnya.','白い|しろい|putih;白|しろ|warna putih;面白い|おもしろい|menarik']
]),

G('kerja', 'Kata Kerja Sehari-hari',
  'Tujuh belas kanji ini menyusun hampir semua kalimat percakapan dasar. Perhatikan pasangan yang berlawanan — 行く/来る, 出る/入る, 上がる/下がる — bahasa Jepang sangat menyukai pasangan semacam itu.',
[
['行','pergi; melakukan','コウ|ギョウ','い-く|おこな-う',6,'Gambar persimpangan jalan. Dari "berjalan" lahir juga makna "menyelenggarakan".','行く|いく|pergi;旅行|りょこう|bepergian;銀行|ぎんこう|bank'],
['来','datang','ライ','く-る',7,'Gambar tanaman gandum yang matang — panen yang tiba. Bentuk kerjanya tak beraturan: 来る kuru, 来ます kimasu, 来ない konai.','来る|くる|datang;来年|らいねん|tahun depan;来週|らいしゅう|pekan depan'],
['帰','pulang','キ','かえ-る',10,'Berarti pulang ke tempat asal — rumah, kampung, negeri. Bukan sekadar "pergi ke".','帰る|かえる|pulang;帰国|きこく|pulang ke negeri asal;お帰り|おかえり|selamat datang kembali'],
['出','keluar','シュツ','で-る|だ-す',5,'Gambar kaki melangkah keluar dari lubang, digambarkan sebagai dua gunung bertumpuk.','出る|でる|keluar;出口|でぐち|pintu keluar;出す|だす|mengeluarkan'],
['入','masuk','ニュウ','はい-る|い-れる',2,'Dua coretan yang menyempit ke atas. Mudah tertukar dengan 人 — perhatikan coretan mana yang menimpa yang lain.','入る|はいる|masuk;入口|いりぐち|pintu masuk;入れる|いれる|memasukkan'],
['見','melihat','ケン','み-る',7,'Mata 目 di atas kaki 儿 — mata yang berjalan mengamati.','見る|みる|melihat;見せる|みせる|memperlihatkan;意見|いけん|pendapat'],
['聞','mendengar; bertanya','ブン|モン','き-く',14,'Telinga 耳 di dalam gerbang 門 — menguping di balik pintu. Satu kanji untuk "mendengar" sekaligus "bertanya".','聞く|きく|mendengar / bertanya;新聞|しんぶん|surat kabar;聞こえる|きこえる|terdengar'],
['言','berkata','ゲン|ゴン','い-う|こと',7,'Mulut 口 dengan gelombang suara yang keluar darinya.','言う|いう|berkata;言葉|ことば|kata / bahasa;方言|ほうげん|dialek'],
['話','berbicara; cerita','ワ','はな-す|はなし',13,'Ucapan 言 bertemu lidah 舌.','話す|はなす|berbicara;電話|でんわ|telepon;会話|かいわ|percakapan'],
['読','membaca','ドク','よ-む',14,'Ucapan 言 di kiri — dulu membaca selalu berarti membaca dengan suara.','読む|よむ|membaca;読書|どくしょ|kegiatan membaca;音読み|おんよみ|bacaan on'],
['書','menulis','ショ','か-く',10,'Gambar tangan menggenggam kuas di atas lembaran.','書く|かく|menulis;辞書|じしょ|kamus;書店|しょてん|toko buku'],
['食','makan','ショク','た-べる|く-う',9,'Sebuah tutup di atas wadah berisi makanan.','食べる|たべる|makan;食事|しょくじ|santapan;食堂|しょくどう|kantin'],
['飲','minum','イン','の-む',12,'Wadah makanan 食 di kiri, mulut yang menganga 欠 di kanan.','飲む|のむ|minum;飲み物|のみもの|minuman;飲食|いんしょく|makan minum'],
['買','membeli','バイ','か-う',12,'Jaring 罒 di atas kerang 貝 — kerang dulu dipakai sebagai uang di Tiongkok kuno.','買う|かう|membeli;買い物|かいもの|belanja;売買|ばいばい|jual beli'],
['立','berdiri','リツ','た-つ',5,'Gambar orang berdiri di atas tanah, kedua kakinya menapak.','立つ|たつ|berdiri;立派|りっぱ|megah;国立|こくりつ|milik negara'],
['休','istirahat','キュウ','やす-む',6,'Orang 亻 bersandar pada pohon 木 — gambar yang langsung terbaca.','休む|やすむ|istirahat / absen;休み|やすみ|libur;休日|きゅうじつ|hari libur'],
['会','bertemu; perkumpulan','カイ','あ-う',6,'Atap yang mempertemukan orang-orang di bawahnya.','会う|あう|bertemu;会社|かいしゃ|perusahaan;会話|かいわ|percakapan']
]),

G('tempat', 'Tempat & Benda',
  'Kanji-kanji yang akan kamu lihat di papan penunjuk, kartu nama, dan tiket. Beberapa di antaranya — 駅, 電, 校 — nyaris tak pernah berdiri sendiri, selalu menempel pada kanji lain.',
[
['国','negeri','コク','くに',8,'Batas wilayah 囗 melingkupi giok 玉 — yang berharga dan dijaga.','国|くに|negeri;中国|ちゅうごく|Tiongkok;外国|がいこく|luar negeri'],
['語','bahasa; kata','ゴ','かた-る',14,'Ucapan 言 di kiri. Nyaris selalu menjadi akhiran nama bahasa: 日本語, インドネシア語.','日本語|にほんご|bahasa Jepang;英語|えいご|bahasa Inggris;単語|たんご|kosakata'],
['学','belajar','ガク','まな-ぶ',8,'Anak 子 di bawah atap sekolah.','学校|がっこう|sekolah;学生|がくせい|pelajar;大学|だいがく|universitas'],
['校','sekolah','コウ','',10,'Kayu 木 di kiri sebagai penanda bangunan. Hampir tak pernah berdiri sendiri.','学校|がっこう|sekolah;高校|こうこう|SMA;校長|こうちょう|kepala sekolah'],
['社','perkumpulan; kuil','シャ','やしろ',7,'Altar 礻 dan tanah 土 — mula-mula berarti tempat pemujaan, kini juga berarti perusahaan.','会社|かいしゃ|perusahaan;社会|しゃかい|masyarakat;神社|じんじゃ|kuil Shinto'],
['店','toko','テン','みせ',8,'Bangunan beratap 广 dengan barang yang digelar di dalamnya.','店|みせ|toko;書店|しょてん|toko buku;喫茶店|きっさてん|kedai kopi'],
['駅','stasiun','エキ','',14,'Kuda 馬 di kiri — dulu tempat berganti kuda tunggangan, kini stasiun kereta.','駅|えき|stasiun;東京駅|とうきょうえき|Stasiun Tokyo;駅前|えきまえ|depan stasiun'],
['道','jalan','ドウ','みち',12,'Kepala 首 di atas tanda perjalanan — kepala yang menuju suatu arah. Dari sini lahir 柔道, 書道: "jalan" sebagai laku hidup.','道|みち|jalan;北海道|ほっかいどう|Hokkaido;柔道|じゅうどう|judo'],
['車','kendaraan','シャ','くるま',7,'Gambar pedati dilihat dari atas: bak di tengah, poros dan roda di kedua sisi.','車|くるま|mobil;電車|でんしゃ|kereta listrik;自動車|じどうしゃ|kendaraan bermotor'],
['電','listrik','デン','',13,'Hujan 雨 di atas — asalnya berarti petir, lalu menjadi lambang listrik.','電車|でんしゃ|kereta listrik;電話|でんわ|telepon;電気|でんき|listrik / lampu'],
['本','buku; asal; batang','ホン','もと',5,'Pohon 木 dengan satu garis menandai pangkalnya — akar, asal-usul. Dari sinilah 日本 "asal matahari".','本|ほん|buku;日本|にほん|Jepang;一本|いっぽん|satu batang'],
['何','apa','カ','なに|なん',7,'Orang 亻 memikul beban; sekarang hampir hanya dipakai untuk bertanya. Bunyinya berubah di depan t/d/n: 何時 nanji, tetapi 何色 naniiro.','何|なに|apa;何時|なんじ|pukul berapa;何人|なんにん|berapa orang']
])
];

/* Daftar rata — untuk pencarian, kartu hafalan, dan soal ujian. */
export const KANJI = KANJI_GRUP.flatMap(g => g.kanji.map(k => ({ ...k, grup: g.id })));
export const cariKanji = c => KANJI.find(k => k.k === c) || null;
