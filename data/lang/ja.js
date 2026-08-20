/* BAHASA JEPANG — hiragana & katakana lengkap dengan urutan goresan,
   pelafalan, trik mengingat, frasa, tata bahasa dasar, dan JLPT.

   Jalur goresan diambil dari KanjiVG (CC BY-SA 3.0) sehingga bentuk dan
   urutannya sesuai standar tulisan tangan Jepang. */

import { HIRAGANA, KATAKANA, KANA_BOX, KANA_MIRIP } from './strokes-kana.js';

import { KANJI, KANJI_GRUP } from './ja-kanji.js';

const kana = map => Object.entries(map).map(([c, [rom, trick, strokes]]) =>
  ({ c, rom, trick, strokes, box: KANA_BOX }));

export const JA = {
code:'ja', name:'Jepang', native:'日本語', dir:'ltr',

intro: {
  headline:'Tiga sistem tulisan, satu logika yang rapi.',
  body:`Bahasa Jepang memakai tiga aksara sekaligus. Hiragana untuk kata asli Jepang dan
akhiran tata bahasa, katakana untuk kata serapan dan nama asing, kanji untuk akar makna.
Kelihatannya rumit, padahal justru inilah yang membuat kalimat Jepang mudah dipenggal:
kanji menandai isi, hiragana menandai fungsinya.

Kabar baiknya bagi penutur Indonesia: bunyi bahasa Jepang hampir seluruhnya ada di bahasa kita.
Suku katanya terbuka (konsonan + vokal), persis seperti "ka-mu-la-gi". Tidak ada bunyi
kerongkongan, tidak ada nada seperti Mandarin, tidak ada tekanan kata seperti Inggris.`,
  facts:[
    'Hiragana 46 huruf dasar, katakana 46 huruf dasar — bunyinya sama persis, hanya bentuknya berbeda.',
    'Kelima vokal a-i-u-e-o dibaca sama seperti bahasa Indonesia.',
    'Urutan kalimat Subjek–Objek–Kata Kerja; kata kerja selalu di akhir.',
    'Partikel (は, を, に, で) menandai peran kata, sehingga urutan kata cukup longgar.'
  ],
  hardForId:[
    'Panjang vokal membedakan makna: おばさん (bibi) ≠ おばあさん (nenek).',
    'Konsonan rangkap (っ) berarti jeda satu ketukan: きて (datang) ≠ きって (perangko).',
    'Huruf ん dihitung satu ketukan penuh, bukan sekadar bunyi "n" nempel.',
    'Ragam sopan (です・ます) dan ragam biasa harus dipilih sadar sejak kalimat pertama.',
    'Kanji tidak bisa ditebak bunyinya — satu kanji sering punya dua cara baca atau lebih.'
  ]
},

kanji: KANJI,
kanjiGrup: KANJI_GRUP,

scripts: [
{
  id:'hiragana', name:'Hiragana', native:'ひらがな', count:46,
  note:'Bentuknya membulat dan mengalir, berasal dari tulisan tangan kursif kanji. Dipakai untuk kata asli Jepang, akhiran kata kerja, dan partikel. Inilah aksara yang wajib dikuasai pertama.',
  chars: kana(HIRAGANA)
},
{
  id:'katakana', name:'Katakana', native:'カタカナ', count:46,
  note:'Bentuknya bersudut dan tegas, diambil dari potongan kanji. Dipakai untuk kata serapan (コーヒー kopi), nama asing, nama ilmiah, dan penekanan. Karena banyak kata serapan dari bahasa Inggris, katakana sering jadi jalan masuk tercepat membaca papan nama di Jepang.',
  chars: kana(KATAKANA)
}
],

mirip: KANA_MIRIP,

compound: {
  tense: [
    ['゛ dakuten','ka→ga','Dua coretan kecil di kanan atas mengubah konsonan jadi bersuara: か→が, さ→ざ, た→だ, は→ば.'],
    ['゜ handakuten','ha→pa','Lingkaran kecil hanya untuk baris は: は→ぱ, ひ→ぴ, ふ→ぷ.'],
    ['っ sokuon','kite→kitte','Tsu KECIL berarti konsonan berikutnya ditahan satu ketukan.'],
    ['ゃゅょ yoon','ki+ya→kya','Ya/yu/yo kecil menyatu dengan huruf sebelumnya jadi satu suku kata.'],
    ['ー chouon','ko→koo','Garis panjang hanya di katakana, memanjangkan vokal: コーヒー.']
  ],
  vowels: [
    ['が ざ だ ば','ga za da ba','Baris bersuara hasil dakuten.'],
    ['ぱ ぴ ぷ ぺ ぽ','pa pi pu pe po','Baris p hasil handakuten.'],
    ['きゃ きゅ きょ','kya kyu kyo','Contoh yoon.'],
    ['じゃ じゅ じょ','ja ju jo','Yoon dari baris じ.']
  ]
},

syllable: {
  rules: [
    ['Setiap huruf = satu suku kata utuh (konsonan + vokal), bukan satu bunyi.','か = ka, bukan k'],
    ['Kecuali ん yang berdiri sendiri sebagai satu ketukan.','ほん = ho-n (2 ketukan)','Kecuali n yang berdiri sendiri sebagai satu ketukan.'],
    ['Vokal panjang dihitung dua ketukan.','おばあさん = o-ba-a-sa-n'],
    ['っ menahan konsonan berikutnya selama satu ketukan.','きって = ki-t-te','menahan konsonan berikutnya selama satu ketukan.']
  ],
  demo: [
    { block:'にほん', parts:['に','ほ','ん'], rom:'ni-ho-n', layout:'Jepang' },
    { block:'コーヒー', parts:['コ','ー','ヒ','ー'], rom:'ko-o-hi-i', layout:'kopi' },
    { block:'がっこう', parts:['が','っ','こ','う'], rom:'ga-k-ko-u', layout:'sekolah' },
    { block:'きって', parts:['き','っ','て'], rom:'ki-t-te', layout:'perangko' },
    { block:'せんせい', parts:['せ','ん','せ','い'], rom:'se-n-se-i', layout:'guru' },
    { block:'インドネシア', parts:['イ','ン','ド','ネ','シ','ア'], rom:'i-n-do-ne-shi-a', layout:'Indonesia' }
  ],
  batchim:`Bahasa Jepang tidak punya konsonan penutup selain ん. Karena itu kata serapan
selalu ditambah vokal: "milk" jadi ミルク (mi-ru-ku), "text" jadi テキスト (te-ki-su-to).
Memahami pola ini membuat ratusan kata katakana bisa ditebak artinya tanpa dihafal.`
},

phonology: {
  triples: [
    ['Vokal pendek vs panjang','おじさん / おじいさん','Paman vs kakek. Panjang = dua ketukan penuh, bukan sekadar ditekan.'],
    ['っ (konsonan rangkap)','きて / きって','"Datang" vs "perangko". Ada jeda satu ketukan sebelum konsonan.'],
    ['ん sebagai ketukan penuh','かん / かん','ん dihitung setara satu suku kata dalam irama.'],
    ['ら baris','ら り る れ ろ','Antara R dan L Indonesia; lidah menyentuh sekilas, tidak bergetar.'],
    ['ふ','fu','Bukan F Inggris — bibir tidak menyentuh gigi, udara ditiup seperti meniup lilin.']
  ],
  liaison: [
    ['です','de-su','"u" di akhir hampir tidak terdengar: "des".'],
    ['ます','ma-su','Sama: terdengar "mas".'],
    ['しています','shi-te-i-ma-su','Dalam percakapan sering jadi "shitemasu".'],
    ['そうですか','so-o-des-ka','Vokal panjang di awal, "u" luluh di akhir.'],
    ['ありがとうございます','a-ri-ga-to-o-go-za-i-mas','Kalimat sopan terpanjang yang paling sering dipakai.']
  ],
  notes: [
    'Bahasa Jepang berirama ketukan (mora), bukan tekanan. Tiap huruf mendapat durasi sama.',
    'Ada aksen nada tinggi-rendah, tetapi salah aksen jarang membuat salah paham — panjang vokal jauh lebih penting.',
    'Vokal i dan u sering diluluhkan di antara konsonan tak bersuara: すき terdengar "ski".'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['おはようございます','ohayou gozaimasu','Selamat pagi (sopan)'],
    ['こんにちは','konnichiwa','Halo / selamat siang'],
    ['こんばんは','konbanwa','Selamat malam'],
    ['はじめまして','hajimemashite','Salam kenal'],
    ['よろしくお願いします','yoroshiku onegaishimasu','Mohon kerja samanya (dipakai sangat luas)']
  ]},
  { g:'Sopan santun', items:[
    ['ありがとうございます','arigatou gozaimasu','Terima kasih (sopan)'],
    ['すみません','sumimasen','Maaf / permisi / terima kasih (serbaguna)'],
    ['ごめんなさい','gomen nasai','Maaf (kesalahan pribadi)'],
    ['大丈夫です','daijoubu desu','Tidak apa-apa / saya baik-baik saja'],
    ['お願いします','onegaishimasu','Tolong ya']
  ]},
  { g:'Bertahan hidup', items:[
    ['いくらですか','ikura desu ka','Berapa harganya?'],
    ['これをください','kore o kudasai','Tolong yang ini'],
    ['トイレはどこですか','toire wa doko desu ka','Di mana toilet?'],
    ['助けてください','tasukete kudasai','Tolong saya'],
    ['日本語が少しわかります','nihongo ga sukoshi wakarimasu','Saya mengerti bahasa Jepang sedikit'],
    ['もう一度お願いします','mou ichido onegaishimasu','Tolong ulangi sekali lagi'],
    ['ゆっくり話してください','yukkuri hanashite kudasai','Tolong bicara pelan-pelan']
  ]},
  { g:'Perkenalan', items:[
    ['私は○○です','watashi wa ○○ desu','Saya ○○'],
    ['インドネシアから来ました','indonesia kara kimashita','Saya datang dari Indonesia'],
    ['学生です','gakusei desu','Saya pelajar'],
    ['趣味は読書です','shumi wa dokusho desu','Hobi saya membaca']
  ]}
],

numbers: {
  note:'Jepang memakai dua sistem angka, dan pemilihan kata bantu bilangan (josuushi) bergantung pada bentuk benda.',
  sino: { title:'Sistem Sino-Jepang', use:'angka umum, harga, tanggal, menit, nomor',
    list:[['一','ichi','1'],['二','ni','2'],['三','san','3'],['四','shi/yon','4'],['五','go','5'],
          ['六','roku','6'],['七','shichi/nana','7'],['八','hachi','8'],['九','kyuu','9'],['十','juu','10'],
          ['百','hyaku','100'],['千','sen','1.000'],['万','man','10.000']] },
  native: { title:'Sistem asli Jepang', use:'menghitung benda umum 1–10',
    list:[['ひとつ','hitotsu','1'],['ふたつ','futatsu','2'],['みっつ','mittsu','3'],['よっつ','yottsu','4'],
          ['いつつ','itsutsu','5'],['むっつ','muttsu','6'],['ななつ','nanatsu','7'],['やっつ','yattsu','8'],
          ['ここのつ','kokonotsu','9'],['とお','too','10']] },
  clock:'Jam memakai 時 (ji) dengan angka Sino, menit memakai 分 (fun/pun): 三時三十分 = pukul 3.30.'
},

grammar: [
{ id:'ja-g1', level:'A1', title:'Pola AはBです', titleId:'Kalimat "A adalah B"',
  why:'Pola pertama dan paling sering dipakai. Sekali dikuasai, kamu bisa memperkenalkan apa pun.',
  form:'A は B です。\nNegatif: A は B ではありません / じゃないです。\nTanya: A は B ですか。',
  notes:['は sebagai partikel dibaca "wa", bukan "ha".',
         'です adalah penanda sopan, bukan kata kerja "adalah" sungguhan.',
         'Tanda tanya tidak dipakai; か sudah menandai pertanyaan.'],
  ex:[['私は学生です。','Saya seorang pelajar.','watashi wa gakusei desu.'],
      ['これは本ですか。','Apakah ini buku?','kore wa hon desu ka.'],
      ['彼は先生ではありません。','Dia bukan guru.','kare ha sensei de ha a ri ma se n 。']],
  traps:[['私わ学生です。','私は学生です。','Partikel ditulis は walau dibaca "wa".']],
  drills:[
    { t:'mcq', q:'Partikel topik は dibaca…', opts:['ha','wa','ba','a'], a:1 },
    { t:'mcq', q:'"Ini bukan kopi" =', opts:['これはコーヒーです','これはコーヒーですか','これはコーヒーではありません','これがコーヒー'], a:2 }
  ]},
{ id:'ja-g2', level:'A1', title:'Partikel を・に・で', titleId:'Tiga Partikel Inti',
  why:'Partikel menentukan peran kata. Salah partikel mengubah arti kalimat sepenuhnya.',
  form:'を = objek langsung\nに = arah, waktu tepat, keberadaan\nで = tempat berlangsungnya aksi, alat',
  notes:['を hanya dipakai sebagai partikel dan dibaca "o".',
         '学校に行きます = pergi KE sekolah. 学校で勉強します = belajar DI sekolah.',
         'に untuk waktu tepat (7時に), tidak dipakai untuk hari ini/besok.'],
  ex:[['ご飯を食べます。','Makan nasi.','gohan o tabemasu.'],
      ['七時に起きます。','Bangun jam tujuh.','shichi-ji ni okimasu.'],
      ['図書館で勉強します。','Belajar di perpustakaan.','toshokan de benkyou shimasu.']],
  traps:[['学校で行きます。','学校に行きます。','Kata kerja gerak memakai に.']],
  drills:[
    { t:'mcq', q:'"Menonton film di bioskop" memakai partikel', opts:['に','で','を','は'], a:1 },
    { t:'mcq', q:'Partikel objek langsung adalah', opts:['は','が','を','に'], a:2 }
  ]},
{ id:'ja-g3', level:'A2', title:'Bentuk ます dan bentuk kamus', titleId:'Dua Ragam Kata Kerja',
  why:'Semua tata bahasa lanjutan bercabang dari dua bentuk ini. Menguasainya lebih awal menghemat berbulan-bulan.',
  form:'Bentuk sopan: たべます, いきます, します\nBentuk kamus: たべる, いく, する\nLampau sopan: たべました\nNegatif sopan: たべません',
  notes:['Kamus dan buku pelajaran memakai bentuk kamus; percakapan sopan memakai ます.',
         'Kata kerja Jepang hanya punya dua "waktu": lampau dan non-lampau.',
         'Tidak ada perubahan menurut orang — たべます sama untuk saya, kamu, mereka.'],
  ex:[['毎日コーヒーを飲みます。','Saya minum kopi setiap hari.','mainichi koohii o nomimasu.'],
      ['昨日映画を見ました。','Kemarin saya menonton film.','kinou eiga o mimashita.'],
      ['明日は行きません。','Besok saya tidak pergi.','ashita wa ikimasen.']],
  traps:[['私は行きますた。','私は行きました。','Bentuk lampau ます → ました.']],
  drills:[
    { t:'mcq', q:'Bentuk lampau sopan dari 食べます adalah', opts:['食べました','食べません','食べる','食べて'], a:0 },
    { t:'mcq', q:'Berapa "waktu" yang dimiliki kata kerja Jepang?', opts:['satu','dua','tiga','empat'], a:1 }
  ]}
],

vocab: [
{ id:'ja-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['人','hito','orang'],['水','mizu','air'],['ご飯','gohan','nasi / makanan'],
    ['家','ie','rumah'],['学校','gakkou','sekolah'],['友達','tomodachi','teman'],
    ['時間','jikan','waktu'],['お金','okane','uang'],['仕事','shigoto','pekerjaan'],
    ['今日','kyou','hari ini'],['明日','ashita','besok'],['昨日','kinou','kemarin'],
    ['今','ima','sekarang'],['ここ','koko','di sini'],['そこ','soko','di situ'],
    ['これ','kore','ini'],['それ','sore','itu'],['何','nani','apa'],
    ['誰','dare','siapa'],['どこ','doko','di mana'],['いつ','itsu','kapan'],
    ['なぜ','naze','mengapa'],['どう','dou','bagaimana'],['いくら','ikura','berapa'],
    ['行く','iku','pergi'],['来る','kuru','datang'],['食べる','taberu','makan'],
    ['飲む','nomu','minum'],['見る','miru','melihat'],['聞く','kiku','mendengar'],
    ['する','suru','melakukan'],['ある','aru','ada (benda mati)'],['いる','iru','ada (makhluk hidup)'],
    ['いい','ii','bagus'],['大きい','ookii','besar'],['小さい','chiisai','kecil'],
    ['多い','ooi','banyak'],['少ない','sukunai','sedikit'],['新しい','atarashii','baru'],
    ['おいしい','oishii','enak'],['高い','takai','mahal / tinggi'],['安い','yasui','murah']
  ]}
],

exam: {
  id:'jlpt', name:'JLPT', full:'Japanese-Language Proficiency Test (日本語能力試験)',
  tagline:'Standar internasional kecakapan bahasa Jepang, lima tingkat dari N5 sampai N1.',
  overview:{
    tingkat:'N5 (paling dasar) → N1 (paling tinggi)',
    durasi:'N1 165 menit · N2 155 · N3 140 · N4 115 · N5 90',
    skor:'N1–N3 tiga bagian bernilai (masing-masing 0–60, total 0–180). N4–N5 dua bagian (0–120 dan 0–60).',
    penilaian:'Harus lulus AMBANG TOTAL dan ambang MINIMUM tiap bagian. Satu bagian di bawah ambang = tidak lulus, sebesar apa pun total skormu.'
  },
  levels:[
    ['N5','±800 kosakata · 100 kanji','Memahami kalimat dan ungkapan dasar yang ditulis dengan hiragana, katakana, dan kanji sederhana.'],
    ['N4','±1.500 kosakata · 300 kanji','Memahami percakapan sehari-hari yang diucapkan pelan.'],
    ['N3','±3.750 kosakata · 650 kanji','Jembatan antara dasar dan mahir; memahami berita ringan dan percakapan alami.'],
    ['N2','±6.000 kosakata · 1.000 kanji','Memahami surat kabar dan percakapan berkecepatan normal. Ambang umum untuk bekerja di Jepang.'],
    ['N1','±10.000 kosakata · 2.000 kanji','Memahami teks abstrak, kuliah akademik, dan bahasa media tanpa bantuan.']
  ],
  sections:[
    { name:'Language Knowledge (文字・語彙)', items:'Huruf & kosakata', note:'N3–N5 diujikan sebagai bagian terpisah; N1–N2 digabung dengan tata bahasa dan membaca.' },
    { name:'Language Knowledge (文法)・Reading (読解)', items:'Tata bahasa & bacaan', note:'Bagian terpanjang; N1 110 menit, N2 105 menit.' },
    { name:'Listening (聴解)', items:'Simakan', note:'N1 55 menit · N2 50 · N3 40 · N4 35 · N5 30. Audio diputar sekali.' }
  ],
  tactics:[
    { title:'Ambang per bagian adalah jebakan utama', budget:'—',
      steps:['Hitung kekuatanmu per bagian, bukan total. Listening lemah bisa menggagalkan meski Reading sempurna.',
             'Latih bagian terlemah minimal 40% dari waktu belajarmu.',
             'Simulasi harus utuh — mengerjakan hanya bagian favorit menyesatkan.'],
      why:'Banyak peserta gagal dengan total tinggi karena satu bagian di bawah ambang minimum.' },
    { title:'Kanji: hafalkan lewat komponen, bukan coretan', budget:'20 mnt/hari',
      steps:['Pecah kanji jadi radikal: 語 = 言 (bicara) + 五 (lima) + 口 (mulut).',
             'Buat cerita pendek dari komponennya; ini jauh lebih kuat daripada mengulang menulis.',
             'Pelajari kanji bersama kata jadinya, bukan sendirian: 学 lewat 学校 dan 学生.'],
      why:'Menulis berulang tanpa makna adalah cara paling lambat menghafal kanji.' },
    { title:'Listening: prediksi dari pilihan jawaban', budget:'—',
      steps:['Baca pilihan jawaban selama petunjuk dibacakan.',
             'Untuk soal bergambar, bandingkan perbedaan antar gambar dulu — di situlah kunci soalnya.',
             'Perhatikan akhiran kalimat: itu menentukan siapa yang melakukan apa.'],
      why:'Audio hanya sekali; peserta yang membaca pilihan lebih dulu menang telak.' },
    { title:'Bacaan: cari partikel, bukan kata', budget:'—',
      steps:['Temukan は dan が untuk menemukan subjek kalimat panjang.',
             'Kalimat Jepang bisa sangat panjang — potong pada tiap partikel dan tanda baca.',
             'Kata kerja di akhir menentukan makna; baca ujung kalimat lebih dulu bila bingung.'],
      why:'Struktur kalimat Jepang terbaca dari partikelnya, bukan dari urutan katanya.' }
  ],
  sources:[
    ['JLPT — situs resmi','https://www.jlpt.jp/e/'],
    ['Komposisi bagian & waktu tiap level','https://www.jlpt.jp/e/guideline/testsections.html'],
    ['Penyekoran, ambang lulus, laporan skor','https://www.jlpt.jp/e/guideline/results.html']
  ]
}
};
