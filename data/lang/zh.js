/* BAHASA MANDARIN — pinyin, nada, goresan hanzi, tata bahasa, HSK 3.0.
   Koordinat goresan: kotak 100×100. */

import { HANZI, HANZI_BOX } from './strokes-hanzi.js';

/* Goresan buatan tangan (untuk delapan goresan dasar yang tidak ada di kamus aksara). */
const C = (c, rom, trick, strokes, meaning) => ({ c, rom, trick, strokes, name: meaning });

/* Aksara sungguhan memakai jalur goresan dari kamus KanjiVG / hanzi-writer. */
const H = (c, rom, trick, meaning) =>
  ({ c, rom, trick, name: meaning, box: HANZI_BOX, strokes: HANZI[c] || [] });

export const ZH = {
code:'zh', name:'Mandarin', native:'中文', dir:'ltr',

intro: {
  headline:'Tata bahasanya paling sederhana. Yang berat: nada dan aksara.',
  body:`Bahasa Mandarin tidak punya konjugasi, tidak punya jenis kelamin kata, tidak punya
bentuk jamak, dan tidak punya perubahan kata kerja menurut waktu. "我去" bisa berarti saya
pergi, saya akan pergi, atau saya sudah pergi — keterangan waktulah yang menentukan.

Dua hal yang benar-benar menuntut kerja keras: NADA dan AKSARA. Satu suku kata yang sama
dengan nada berbeda adalah kata yang berbeda sama sekali. Dan aksara Han tidak memberi
petunjuk bunyi seperti huruf Latin — harus dikenali satu per satu, meski komponennya berulang.

Kabar baik untuk penutur Indonesia: struktur kalimat Mandarin (Subjek–Predikat–Objek)
sama persis dengan bahasa Indonesia.`,
  facts:[
    'Empat nada + satu nada netral. Nada adalah bagian dari kata, bukan hiasan.',
    'Pinyin adalah sistem resmi penulisan bunyi dengan huruf Latin — dipakai di seluruh dunia.',
    'Aksara dibangun dari komponen berulang (radikal); 214 radikal membuka ribuan aksara.',
    'HSK 3.0 (berlaku penuh sedunia 1 Juli 2026) membagi kecakapan jadi 3 tingkat / 9 band.'
  ],
  hardForId:[
    'Nada. "mā" ibu, "má" rami, "mǎ" kuda, "mà" memaki — hanya nadanya berbeda.',
    'Bunyi yang tak ada di bahasa Indonesia: zh, ch, sh, r (lidah ditekuk ke belakang) dan j, q, x (lidah rata di depan).',
    'Perbedaan bunyi beraspirasi dan tidak: b/p, d/t, g/k — bukan soal bersuara, tetapi soal embusan udara.',
    'Kata bantu bilangan (量词) wajib: bukan "三书" tetapi "三本书".',
    'Aksara harus ditulis dengan urutan goresan yang benar, kalau tidak bentuknya melenceng dan sulit dibaca.'
  ]
},

scripts: [
{
  id:'strokes', name:'Delapan Goresan Dasar', native:'笔画', count:8,
  note:'Semua aksara Han — sesederhana 一 sampai serumit 龘 — dibangun dari delapan jenis goresan ini. Kuasai delapan bentuk ini dulu; sesudahnya menulis aksara hanya soal menyusun.',
  chars: [
    C('一','héng — mendatar','Selalu ditarik dari KIRI ke KANAN, tidak pernah sebaliknya.',['M14 50 L86 50'],'goresan datar'),
    C('丨','shù — tegak','Selalu dari ATAS ke BAWAH.',['M50 12 L50 88'],'goresan tegak'),
    C('丿','piě — sapuan kiri','Dari kanan atas menyapu ke kiri bawah, makin tipis.',['M74 16 C58 42 40 66 22 86'],'sapuan kiri'),
    C('丶','diǎn — titik','Titik pendek miring, ditekan lalu diangkat.',['M42 34 L60 56'],'titik'),
    C('㇏','nà — sapuan kanan','Dari kiri atas ke kanan bawah, makin tebal lalu berhenti.',['M26 18 C42 44 62 68 82 84'],'sapuan kanan'),
    C('㇀','tí — sentakan naik','Dari kiri bawah menyentak ke kanan atas.',['M20 78 L78 34'],'sentakan naik'),
    C('𠃌','zhé — belokan','Satu goresan yang berbelok tanpa mengangkat pena.',['M22 24 L74 24 L74 78'],'belokan'),
    C('亅','gōu — kait','Goresan tegak yang diakhiri kaitan kecil ke kiri.',['M56 14 L56 74 L34 84'],'kait')
  ]
},
{
  id:'numbers', name:'Angka 1–10', native:'数字', count:11,
  note:'Sepuluh aksara pertama yang wajib dikuasai. Semuanya sederhana, dan sudah cukup untuk membaca harga, tanggal, dan nomor.',
  chars: [
    H('一','yī','Satu garis = satu.','satu'),
    H('二','èr','Dua garis, yang bawah lebih panjang.','dua'),
    H('三','sān','Tiga garis, urut dari atas.','tiga'),
    H('四','sì','Kotak dengan dua kaki di dalam. Bingkai ditutup TERAKHIR.','empat'),
    H('五','wǔ','Datar, tegak-belok, datar penutup.','lima'),
    H('六','liù','Titik di atas, datar, dua kaki.','enam'),
    H('七','qī','Sentakan naik lalu belokan berkait.','tujuh'),
    H('八','bā','Dua kaki menyebar, kiri dulu.','delapan'),
    H('九','jiǔ','Sapuan kiri lalu belokan berkait.','sembilan'),
    H('十','shí','Palang: datar dulu, baru tegak.','sepuluh'),
    H('百','bǎi','一 di atas 白 — seratus.','seratus')
  ]
},
{
  id:'basic', name:'Aksara Inti', native:'常用字', count:24,
  note:'Dua puluh empat aksara yang muncul paling sering. Perhatikan aturan urutannya: atas sebelum bawah, kiri sebelum kanan, mendatar sebelum tegak, bingkai ditutup paling akhir.',
  chars: [
    H('人','rén','Dua kaki manusia berjalan.','orang'),
    H('大','dà','Manusia merentangkan tangan = besar.','besar'),
    H('小','xiǎo','Satu tegak dengan dua titik kecil.','kecil'),
    H('口','kǒu','Mulut terbuka — kotak. Bingkai ditutup terakhir.','mulut'),
    H('日','rì','Matahari — kotak dengan satu garis di tengah.','matahari / hari'),
    H('月','yuè','Bulan sabit dengan dua garis.','bulan'),
    H('山','shān','Tiga puncak gunung.','gunung'),
    H('水','shuǐ','Aliran air dengan cipratan kiri-kanan.','air'),
    H('火','huǒ','Api dengan dua percikan.','api'),
    H('木','mù','Pohon: palang, batang, dua akar.','pohon / kayu'),
    H('土','tǔ','Dua garis datar dan satu tegak — tanah.','tanah'),
    H('中','zhōng','Kotak ditembus garis tegak = tengah.','tengah'),
    H('上','shàng','Tegak, sentakan, datar = atas.','atas'),
    H('下','xià','Datar, tegak, titik = bawah.','bawah'),
    H('不','bù','Datar lalu sapuan dan tegak — penanda "tidak".','tidak'),
    H('我','wǒ','Aksara "saya" — 7 goresan, wajib dikuasai.','saya'),
    H('你','nǐ','Radikal orang di kiri + 尔 di kanan.','kamu'),
    H('好','hǎo','Perempuan + anak = baik.','baik'),
    H('是','shì','日 di atas, 疋 di bawah = adalah.','adalah'),
    H('有','yǒu','Sapuan, datar, lalu 月 = punya.','punya / ada'),
    H('天','tiān','二 di atas 人 = langit.','langit / hari'),
    H('去','qù','土 di atas, 厶 di bawah = pergi.','pergi'),
    H('来','lái','Datang — 7 goresan simetris.','datang')
  ]
}
],

compound: {
  tense: [
    ['ā á ǎ à a','nada 1–4 + netral','Tanda nada selalu diletakkan di atas vokal utama.'],
    ['zh ch sh r','lidah ditekuk','Ujung lidah ditarik ke belakang menyentuh langit-langit keras.'],
    ['j q x','lidah rata di depan','Berbeda total dari zh ch sh — lidah datar, ujungnya di gigi bawah.'],
    ['b/p, d/t, g/k','embusan','Bukan bersuara vs tidak, melainkan tanpa embusan vs dengan embusan.'],
    ['ü','u bulat','Bibir seperti mengucapkan "u" tetapi lidah pada posisi "i". Ditulis u setelah j, q, x, y.']
  ],
  vowels: [
    ['a o e i u ü','enam vokal dasar','Semua bunyi Mandarin dibangun dari enam vokal ini.'],
    ['ai ei ao ou','vokal rangkap','Dibaca meluncur, bukan dua bunyi terpisah.'],
    ['an en ang eng','vokal bersengau','-n ujung lidah di gusi, -ng pangkal lidah di langit-langit.'],
    ['ian uan üan','vokal rangkap bersengau','Perhatikan ian dibaca mendekati "yen".']
  ]
},

syllable: {
  rules: [
    ['Setiap suku kata = satu inisial + satu final + satu nada.','hǎo = h + ao + nada 3'],
    ['Ada suku kata tanpa inisial; ditulis dengan y atau w di depan.','yī, wǔ'],
    ['Ada a → tandai a. Tidak ada a → tandai o atau e. Untuk -iu dan -ui tandai vokal TERAKHIR: liù, guì, xiū, duì (karena -iu = iou, -ui = uei yang dipendekkan).','hǎo, xiè, liù'],
    ['Nada 3 berturut-turut: yang pertama berubah jadi nada 2.','nǐ hǎo dibaca ní hǎo']
  ],
  demo: [
    { block:'你好', parts:['nǐ','hǎo'], rom:'ní hǎo', layout:'halo' },
    { block:'中国', parts:['zhōng','guó'], rom:'zhōngguó', layout:'Tiongkok' },
    { block:'谢谢', parts:['xiè','xie'], rom:'xièxie', layout:'terima kasih' },
    { block:'老师', parts:['lǎo','shī'], rom:'lǎoshī', layout:'guru' },
    { block:'学生', parts:['xué','sheng'], rom:'xuésheng', layout:'pelajar' },
    { block:'再见', parts:['zài','jiàn'], rom:'zàijiàn', layout:'sampai jumpa' }
  ],
  batchim:`URUTAN GORESAN — enam aturan yang menutupi hampir semua aksara:
1. Atas sebelum bawah.  2. Kiri sebelum kanan.  3. Mendatar sebelum tegak.
4. Sapuan kiri sebelum sapuan kanan.  5. Bagian luar sebelum bagian dalam.
6. Bingkai kotak ditutup PALING AKHIR (口 ditulis 3 goresan: kiri, atas+kanan, lalu bawah).`
},

phonology: {
  triples: [
    ['mā má mǎ mà','ibu · rami · kuda · memaki','Bukti bahwa nada adalah bagian kata. Salah nada = salah kata.','妈，麻，马，骂'],
    ['zhī / jī','lidah tekuk vs lidah rata','Kesalahan nomor satu penutur Indonesia.','知，鸡'],
    ['sì / shì','empat vs adalah','s lidah rata, sh lidah ditekuk.','四，是'],
    ['bā / pā','tanpa embusan vs dengan embusan','Uji dengan kertas di depan mulut: hanya p menggerakkannya.','八，趴'],
    ['nü / nu','ü bibir bulat lidah depan','女 nǚ (perempuan) berbeda dari 努 nǔ.','女，努']
  ],
  liaison: [
    ['你好','ní hǎo','Nada 3 + nada 3 → yang pertama jadi nada 2.'],
    ['不是','bú shì','不 berubah dari nada 4 jadi nada 2 di depan nada 4.'],
    ['一个','yí ge','一 berubah nada mengikuti kata sesudahnya.'],
    ['我们','wǒmen','Suku kata kedua kehilangan nada, jadi nada netral.'],
    ['谢谢','xièxie','Pengulangan: suku kata kedua netral dan lebih pendek.']
  ],
  notes: [
    'Nada 1 datar tinggi, nada 2 naik, nada 3 turun lalu naik, nada 4 turun tajam.',
    'Dalam kalimat cepat, nada 3 penuh jarang muncul — biasanya hanya bagian turunnya.',
    'Nada netral tidak punya tanda dan diucapkan pendek serta ringan.'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['你好','nǐ hǎo','Halo'],
    ['您好','nín hǎo','Halo (sopan, kepada yang lebih tua)'],
    ['早上好','zǎoshang hǎo','Selamat pagi'],
    ['再见','zàijiàn','Sampai jumpa'],
    ['很高兴认识你','hěn gāoxìng rènshi nǐ','Senang berkenalan denganmu']
  ]},
  { g:'Sopan santun', items:[
    ['谢谢','xièxie','Terima kasih'],
    ['不客气','bú kèqi','Sama-sama'],
    ['对不起','duìbuqǐ','Maaf'],
    ['没关系','méi guānxi','Tidak apa-apa'],
    ['请','qǐng','Silakan / tolong']
  ]},
  { g:'Bertahan hidup', items:[
    ['多少钱','duōshao qián','Berapa harganya?'],
    ['我要这个','wǒ yào zhège','Saya mau yang ini'],
    ['洗手间在哪里','xǐshǒujiān zài nǎlǐ','Di mana toilet?'],
    ['请帮我','qǐng bāng wǒ','Tolong bantu saya'],
    ['我听不懂','wǒ tīng bu dǒng','Saya tidak mengerti'],
    ['请说慢一点','qǐng shuō màn yìdiǎn','Tolong bicara pelan-pelan'],
    ['我会说一点中文','wǒ huì shuō yìdiǎn zhōngwén','Saya bisa bahasa Mandarin sedikit']
  ]},
  { g:'Perkenalan', items:[
    ['我叫○○','wǒ jiào ○○','Nama saya ○○'],
    ['我是印尼人','wǒ shì yìnní rén','Saya orang Indonesia'],
    ['我是学生','wǒ shì xuésheng','Saya pelajar'],
    ['我在学中文','wǒ zài xué zhōngwén','Saya sedang belajar bahasa Mandarin']
  ]}
],

numbers: {
  note:'Angka Mandarin sangat teratur: 11 = sepuluh satu, 21 = dua sepuluh satu. Tidak ada bentuk tak beraturan sama sekali.',
  sino: { title:'Angka dasar', use:'semua keperluan',
    list:[['一','yī','1'],['二','èr','2'],['三','sān','3'],['四','sì','4'],['五','wǔ','5'],
          ['六','liù','6'],['七','qī','7'],['八','bā','8'],['九','jiǔ','9'],['十','shí','10'],
          ['百','bǎi','100'],['千','qiān','1.000'],['万','wàn','10.000']] },
  native: { title:'Kata bantu bilangan', use:'wajib di antara angka dan benda',
    list:[['个','ge','umum, untuk apa saja'],['本','běn','buku'],['张','zhāng','benda lembaran'],
          ['只','zhī','hewan kecil'],['杯','bēi','gelas'],['件','jiàn','pakaian / urusan'],
          ['辆','liàng','kendaraan'],['位','wèi','orang (sopan)'],['条','tiáo','benda panjang'],['些','xiē','beberapa']] },
  clock:'Jam: 点 (diǎn) untuk jam, 分 (fēn) untuk menit. 三点半 = pukul setengah empat (jam 3 lewat 30).'
},

grammar: [
{ id:'zh-g1', level:'A1', title:'Pola 是 dan sifat tanpa 是', titleId:'Kalimat "Adalah"',
  why:'Kesalahan paling sering pemula: memakai 是 di depan kata sifat. Dalam bahasa Mandarin kata sifat sudah berfungsi sebagai predikat.',
  form:'A 是 B。 (A adalah B — untuk kata benda)\nA 很 + kata sifat。 (A itu … — TANPA 是)',
  notes:['很 di sini bukan "sangat", melainkan penyangga wajib.',
         'Negatif: 不是 untuk kata benda, 不 + kata sifat untuk sifat.',
         'Pertanyaan: tambahkan 吗 di akhir, atau pakai bentuk 是不是.'],
  ex:[['我是学生。','Saya seorang pelajar.','wǒ shì xuésheng 。'],
      ['他很高。','Dia tinggi.','tā hěn gāo.'],
      ['这个不贵。','Ini tidak mahal.','zhège bù guì 。']],
  traps:[['他是高。','他很高。','Kata sifat tidak memakai 是.']],
  drills:[
    { t:'mcq', q:'"Dia cantik" =', opts:['她是漂亮','她很漂亮','她是很漂亮','她漂亮是'], a:1 },
    { t:'mcq', q:'Negatif dari 是 adalah', opts:['没是','不是','无是','别是'], a:1 }
  ]},
{ id:'zh-g2', level:'A1', title:'Kata Bantu Bilangan 量词', titleId:'Wajib Ada di Antara Angka dan Benda',
  why:'Tidak ada padanannya di bahasa Indonesia modern, tetapi tidak boleh dilewatkan.',
  form:'Angka + kata bantu + kata benda\n三本书 = tiga (buah) buku',
  notes:['个 (ge) adalah kata bantu serbaguna; kalau ragu, pakai 个.',
         'Kata bantu dipilih menurut bentuk benda: 张 untuk lembaran, 条 untuk benda panjang.',
         '这 dan 那 juga butuh kata bantu: 这本书, bukan 这书.'],
  ex:[['我有三个朋友。','Saya punya tiga teman.','wǒ yǒu sān gè péngyou.'],
      ['他买了两本书。','Dia membeli dua buku.','tā mǎi le liǎng běn shū.'],
      ['这张纸很薄。','Kertas ini tipis.','zhè zhāng zhǐ hěn báo.']],
  traps:[['三书','三本书','Angka tidak boleh langsung menempel ke benda.']],
  drills:[
    { t:'mcq', q:'Kata bantu untuk buku adalah', opts:['个','本','张','条'], a:1 },
    { t:'mcq', q:'"Dua ekor kucing" =', opts:['两猫','两只猫','两本猫','二只猫'], a:1 }
  ]},
{ id:'zh-g3', level:'A2', title:'Urutan Keterangan', titleId:'Waktu dan Tempat Sebelum Kata Kerja',
  why:'Bahasa Indonesia menaruh keterangan di akhir; Mandarin menaruhnya SEBELUM kata kerja.',
  form:'Subjek + waktu + tempat + cara + Kata Kerja + Objek',
  notes:['明天我去 dan 我明天去 sama-sama benar; yang salah adalah menaruh waktu di akhir.',
         'Tempat memakai 在: 我在图书馆学习.',
         'Urutan besar ke kecil juga berlaku untuk alamat dan tanggal: tahun–bulan–hari.'],
  ex:[['我明天去北京。','Besok saya pergi ke Beijing.','wǒ míngtiān qù Běijīng.'],
      ['他在家吃饭。','Dia makan di rumah.','tā zài jiā chīfàn.'],
      ['我们八点在学校见面。','Kita bertemu jam delapan di sekolah.','wǒmen bā diǎn zài xuéxiào jiànmiàn.']],
  traps:[['我去北京明天。','我明天去北京。','Keterangan waktu tidak boleh di akhir.']],
  drills:[
    { t:'mcq', q:'Susunan yang benar:', opts:['我学习在图书馆','我在图书馆学习','学习我在图书馆','我图书馆在学习'], a:1 },
    { t:'mcq', q:'Keterangan waktu diletakkan', opts:['di akhir kalimat','sebelum kata kerja','setelah objek','bebas'], a:1 }
  ]},
{ id:'zh-g4', level:'A2', title:'了 sebagai Penanda Perubahan', titleId:'Partikel 了',
  why:'了 sering salah dipahami sebagai "bentuk lampau". Sebenarnya ia menandai penyelesaian atau perubahan keadaan.',
  form:'Kata kerja + 了 = aksi selesai\nKalimat + 了 = keadaan berubah',
  notes:['我吃了饭 = saya sudah makan (aksi selesai).',
         '下雨了 = mulai hujan (keadaan berubah), bukan lampau.',
         'Negatif memakai 没有 dan 了 DIHILANGKAN: 我没吃饭.'],
  ex:[['我买了一本书。','Saya membeli sebuah buku.','wǒ mǎi le yī běn shū.'],
      ['天黑了。','Hari sudah gelap.','tiān hēi le.'],
      ['我没看那部电影。','Saya belum menonton film itu.','wǒ méi kàn nà bù diànyǐng.']],
  traps:[['我没吃了饭。','我没吃饭。','Bentuk negatif tidak memakai 了.']],
  drills:[
    { t:'mcq', q:'Negatif dari 我吃了饭 adalah', opts:['我不吃了饭','我没吃饭','我没吃了饭','我不吃饭了'], a:1 },
    { t:'mcq', q:'下雨了 berarti', opts:['dulu hujan','mulai hujan','akan hujan','tidak hujan'], a:1 }
  ]}
],

vocab: [
{ id:'zh-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['人','rén','orang'],['水','shuǐ','air'],['饭','fàn','nasi / makanan'],
    ['家','jiā','rumah / keluarga'],['学校','xuéxiào','sekolah'],['朋友','péngyou','teman'],
    ['时间','shíjiān','waktu'],['钱','qián','uang'],['工作','gōngzuò','pekerjaan'],
    ['今天','jīntiān','hari ini'],['明天','míngtiān','besok'],['昨天','zuótiān','kemarin'],
    ['现在','xiànzài','sekarang'],['这里','zhèlǐ','di sini'],['那里','nàlǐ','di sana'],
    ['这个','zhège','ini'],['那个','nàge','itu'],['什么','shénme','apa'],
    ['谁','shéi','siapa'],['哪里','nǎlǐ','di mana'],['什么时候','shénme shíhou','kapan'],
    ['为什么','wèishénme','mengapa'],['怎么','zěnme','bagaimana'],['多少','duōshao','berapa'],
    ['去','qù','pergi'],['来','lái','datang'],['吃','chī','makan'],
    ['喝','hē','minum'],['看','kàn','melihat / membaca'],['听','tīng','mendengar'],
    ['做','zuò','melakukan'],['有','yǒu','punya / ada'],['在','zài','berada di'],
    ['好','hǎo','baik'],['大','dà','besar'],['小','xiǎo','kecil'],
    ['多','duō','banyak'],['少','shǎo','sedikit'],['新','xīn','baru'],
    ['好吃','hǎochī','enak'],['贵','guì','mahal'],['便宜','piányi','murah']
  ]}
],

exam: {
  id:'hsk', name:'HSK 3.0', full:'汉语水平考试 — Chinese Proficiency Test (standar 2021)',
  tagline:'Standar resmi Tiongkok. Sejak 1 Juli 2026 berlaku penuh di seluruh dunia dengan 9 band.',
  overview:{
    struktur:'Tiga tingkat, sembilan band: Dasar (1–3), Menengah (4–6), Lanjut (7–9)',
    kosakata:'Total sekitar 11.000 kata untuk seluruh band; band 7–9 diujikan sebagai satu ujian gabungan',
    aksara:'Sekitar 300 aksara baru per band pada tingkat dasar dan menengah',
    perubahan:'Menggantikan HSK lama yang hanya 6 level; band 1–4 kini lebih menuntut, band 5–6 lebih bertahap'
  },
  levels:[
    ['Band 1','±500 kata','Ungkapan paling dasar: menyapa, memperkenalkan diri, angka.'],
    ['Band 2','±1.300 kata','Percakapan sederhana tentang keseharian.'],
    ['Band 3','±2.200 kata','Bertahan dalam perjalanan dan urusan rutin di Tiongkok.'],
    ['Band 4','±3.200 kata','Diskusi topik umum; ambang umum untuk kuliah S1 berbahasa Mandarin.'],
    ['Band 5','±4.300 kata','Membaca surat kabar dan menonton film tanpa takarir.'],
    ['Band 6','±5.400 kata','Memahami hampir semua isi lisan dan tulisan.'],
    ['Band 7–9','±11.000 kata','Ujian gabungan untuk penutur tingkat lanjut, termasuk penerjemah dan akademisi.']
  ],
  sections:[
    { name:'听力 Listening', items:'Bergantung band', note:'Audio percakapan dan monolog; band tinggi memakai kecepatan penutur asli.' },
    { name:'阅读 Reading', items:'Bergantung band', note:'Dari kalimat pendek berpinyin (band 1) sampai artikel panjang tanpa pinyin.' },
    { name:'书写 Writing', items:'Mulai band 3', note:'Menyusun kalimat, lalu mengarang; menulis aksara dengan tangan diuji pada versi kertas.' },
    { name:'口语 Speaking', items:'HSKK terpisah', note:'Ujian lisan diselenggarakan sebagai HSKK tingkat dasar, menengah, dan lanjut.' }
  ],
  tactics:[
    { title:'Kuasai radikal sebelum menghafal aksara', budget:'15 mnt/hari',
      steps:['Pelajari 100 radikal terpenting lebih dulu — itu menutupi mayoritas aksara umum.',
             'Saat bertemu aksara baru, pecah jadi radikal + komponen bunyi.',
             'Contoh: 妈 = 女 (perempuan, makna) + 马 (mǎ, bunyi). Langsung tertebak bunyi dan maknanya.'],
      why:'Menghafal aksara sebagai gambar utuh membuat 2.000 aksara mustahil; lewat radikal jadi mungkin.' },
    { title:'Latih nada berpasangan, bukan satu-satu', budget:'10 mnt/hari',
      steps:['Latih semua kombinasi dua suku kata: 1-1, 1-2, 1-3, 1-4, 2-1, dan seterusnya.',
             'Rekam dirimu, bandingkan dengan audio asli, tandai kombinasi yang paling meleset.',
             'Nada 3 + nada 3 harus otomatis berubah jadi 2 + 3.'],
      why:'Dalam percakapan nada tidak pernah berdiri sendiri; melatihnya terpisah tidak berpindah ke ucapan nyata.' },
    { title:'Reading: jangan baca pinyin bila sudah ada aksara', budget:'—',
      steps:['Tutup baris pinyin sejak band 2; membacanya membuat otak berhenti mengenali aksara.',
             'Baca ulang teks yang sudah dipahami untuk membangun kecepatan.',
             'Kenali pola dua-aksara: sebagian besar kata Mandarin modern terdiri dari dua aksara.'],
      why:'Ketergantungan pinyin adalah penyebab utama peserta mandek di band 3.' },
    { title:'Writing: hafalkan urutan goresan sejak awal', budget:'—',
      steps:['Selalu tulis dengan urutan yang benar, bahkan saat mencorat-coret.',
             'Urutan salah membuat bentuk aksara melenceng dan tidak terbaca mesin maupun manusia.',
             'Enam aturan dasar menutupi hampir semua kasus — ada di tab Aksara.'],
      why:'Urutan goresan yang salah sangat sulit diperbaiki setelah jadi kebiasaan.' }
  ],
  sources:[
    ['Chinese Test — situs resmi HSK','https://www.chinesetest.cn'],
    ['Standar Kecakapan Bahasa Tionghoa untuk Pendidikan Internasional (2021)','http://www.moe.gov.cn'],
    ['Ringkasan perubahan HSK 3.0','https://www.hackingchinese.com/the-new-hsk-3-0-what-you-need-to-know/']
  ]
}
};
