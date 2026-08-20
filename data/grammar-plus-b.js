/* ── Topik tata bahasa tambahan: B1 & B2 ──────────────────────────
   Tiap topik di sini sudah diperiksa TIDAK menumpuk dengan 44 topik
   B1/B2 yang sudah ada. Contohnya: "modal perfect" di bawah ini soal
   PENYESALAN dan KRITIK (should have, needn't have), bukan dugaan masa
   lalu yang sudah dibahas b1-15; dan "kata penghubung" di sini soal
   penambahan, urutan, dan contoh — b1-21 sudah memegang pertentangan
   dan akibat.

   Bentuknya sama dengan berkas grammar lama.                         */

export const PLUS_B1 = [

{
  id: 'b1-23', level: 'B1',
  title: 'unless / provided that / as long as / in case',
  titleId: 'Syarat selain if',
  why: 'unless berarti "kecuali kalau" dan sudah memuat makna negatif, jadi menambahkan not membalik arti kalimatnya. in case juga bukan "kalau" melainkan "berjaga-jaga kalau" — beda yang sering hilang dalam terjemahan.',
  form: 'unless = if … not  ·  provided / as long as = asalkan  ·  in case = berjaga-jaga kalau',
  notes: [
    'unless tidak pernah digabung dengan not di klausa yang sama.',
    'in case menyatakan persiapan, bukan syarat: "Take an umbrella in case it rains" — payungnya dibawa SEBELUM hujan.',
    'provided (that) dan as long as menekankan syarat yang harus dipenuhi.',
    'Semuanya mengikuti aturan klausa waktu: tidak memakai will di dalamnya.',
  ],
  ex: [
    ["We will go unless it rains.", 'Kami akan pergi kecuali kalau hujan.'],
    ['You can borrow it as long as you return it tomorrow.', 'Kamu boleh meminjamnya asalkan dikembalikan besok.'],
    ['Take a jacket in case it gets cold.', 'Bawa jaket berjaga-jaga kalau jadi dingin.'],
    ['I will help provided that you ask politely.', 'Saya akan membantu asalkan kamu memintanya dengan sopan.'],
  ],
  traps: [
    ["Unless you don't hurry, we will be late.", 'Unless you hurry, we will be late.', 'unless sudah negatif; tidak ditambah don\'t.'],
    ['Take an umbrella in case it will rain.', 'Take an umbrella in case it rains.', 'Klausa syarat tidak memakai will.'],
    ['I will come unless I am invited.', 'I will come if I am invited.', 'unless membalik makna — periksa maksudnya dulu.'],
  ],
  drills: [
    { t: 'mcq', q: 'I will not sign ___ I read the contract first.', opts: ['unless', 'if', 'in case', 'provided'], a: 0 },
    { t: 'mcq', q: 'Save your file ___ the computer crashes.', opts: ['unless', 'in case', 'as long as', 'if not'], a: 1 },
    { t: 'mcq', q: 'Which sentence means "if you do not hurry"?', opts: ['Unless you hurry', "Unless you don't hurry", 'As long as you hurry', 'In case you hurry'], a: 0 },
    { t: 'fill', q: 'You may stay ___ long as you keep quiet.', a: ['as'] },
    { t: 'trans', id: 'Kami akan berangkat kecuali kalau ada kabar buruk.', a: ['We will leave unless there is bad news.', "We'll leave unless there is bad news."] },
  ],
},

{
  id: 'b1-24', level: 'B1',
  title: 'Modal Perfect: should have / needn\'t have',
  titleId: 'Penyesalan & kritik masa lalu',
  why: 'Untuk menyatakan penyesalan atau menyalahkan, bahasa Indonesia memakai "seharusnya" tanpa mengubah bentuk kata kerjanya. Inggris menuntut modal + have + V3, dan pemelajar hampir selalu lupa have-nya.',
  form: 'should / shouldn\'t / could / needn\'t + have + V3',
  notes: [
    'should have = seharusnya melakukan, tapi tidak dilakukan.',
    'shouldn\'t have = tidak seharusnya melakukan, tapi terlanjur dilakukan.',
    'could have = sebenarnya mampu, tapi tidak dilakukan.',
    'Dalam ucapan, "have" sering terdengar seperti "of" — tapi menulisnya TETAP have.',
  ],
  ex: [
    ['I should have studied harder.', 'Saya seharusnya belajar lebih giat.'],
    ["You shouldn't have told him.", 'Kamu tidak seharusnya memberitahunya.'],
    ['She could have won the race.', 'Dia sebenarnya bisa memenangkan lombanya.'],
    ["We needn't have hurried; the train was late.", 'Kami tak perlu buru-buru; keretanya terlambat.'],
  ],
  traps: [
    ['I should studied harder.', 'I should have studied harder.', 'Modal masa lalu wajib memakai have + V3.'],
    ['You should have went earlier.', 'You should have gone earlier.', 'Sesudah have dipakai bentuk ketiga, bukan kedua.'],
    ['I should of called you.', 'I should have called you.', '"of" hanya bunyi ucapannya; tulisannya have.'],
  ],
  drills: [
    { t: 'mcq', q: 'You look tired. You ___ to bed earlier.', opts: ['should go', 'should have gone', 'should had gone', 'should of gone'], a: 1 },
    { t: 'mcq', q: 'The exam was easy. I ___ so much.', opts: ["needn't have studied", "didn't need study", 'need not studied', "shouldn't study"], a: 0 },
    { t: 'mcq', q: 'Which is correct?', opts: ['She could have came.', 'She could have come.', 'She could came.', 'She could of come.'], a: 1 },
    { t: 'fill', q: 'I am sorry — I ___ have said that. (tidak seharusnya)', a: ["shouldn't", 'should not'] },
    { t: 'trans', id: 'Kamu seharusnya menelepon saya.', a: ['You should have called me.', 'You should have phoned me.'] },
  ],
},

{
  id: 'b1-25', level: 'B1',
  title: 'Present Simple for Schedules & Narrative',
  titleId: 'Bentuk sekarang untuk jadwal & cerita',
  why: 'Bentuk sekarang tidak selalu berarti kebiasaan. Untuk jadwal resmi (kereta, film, kelas) dan untuk menceritakan alur cerita, Inggris justru memakai simple present — pemakaian yang tidak pernah diajarkan bersama "kebiasaan".',
  form: 'Jadwal tetap · alur cerita · petunjuk langkah · judul berita',
  notes: [
    'Jadwal: "The train leaves at six" — meski peristiwanya besok.',
    'Alur cerita dan sinopsis film selalu memakai bentuk sekarang.',
    'Petunjuk memasak dan langkah kerja juga: "First you mix the flour…".',
    'Judul berita memakainya untuk peristiwa yang sudah terjadi.',
  ],
  ex: [
    ['The plane takes off at 7.15 tomorrow.', 'Pesawatnya lepas landas pukul 7.15 besok.'],
    ['In the film, the hero loses everything and starts again.', 'Dalam film itu, tokohnya kehilangan segalanya lalu mulai lagi.'],
    ['First you boil the water, then you add the rice.', 'Pertama airnya direbus, lalu berasnya dimasukkan.'],
    ['The course begins on Monday.', 'Kursusnya mulai hari Senin.'],
  ],
  traps: [
    ['The train will leave at six according to the timetable.', 'The train leaves at six according to the timetable.', 'Jadwal resmi memakai bentuk sekarang.'],
    ['In the story, he went to the city and met her.', 'In the story, he goes to the city and meets her.', 'Ringkasan cerita memakai bentuk sekarang.'],
    ['First you will mix the eggs.', 'First you mix the eggs.', 'Petunjuk langkah memakai bentuk sekarang.'],
  ],
  drills: [
    { t: 'mcq', q: 'The concert ___ at eight — it says so on the ticket.', opts: ['will start', 'starts', 'is starting to', 'started'], a: 1 },
    { t: 'mcq', q: 'In the novel, the family ___ to a new town.', opts: ['moved', 'moves', 'will move', 'has moved'], a: 1 },
    { t: 'mcq', q: 'Which is best for a recipe?', opts: ['You will add the salt.', 'You added the salt.', 'You add the salt.', 'You are adding the salt.'], a: 2 },
    { t: 'fill', q: 'Our flight ___ (leave) at midnight, according to the schedule.', a: ['leaves'] },
    { t: 'trans', id: 'Bisnya berangkat pukul enam pagi.', a: ['The bus leaves at six in the morning.', 'The bus departs at six in the morning.'] },
  ],
},

{
  id: 'b1-26', level: 'B1',
  title: 'Verbs with Two Objects',
  titleId: 'Kata kerja berobjek dua',
  why: 'give, send, show, buy bisa punya dua objek, dan urutannya menentukan apakah to/for dipakai. Bahasa Indonesia bebas ("berikan saya buku itu" / "berikan buku itu kepada saya"), Inggris tidak — apalagi kalau objeknya kata ganti.',
  form: 'give + orang + benda   ·   give + benda + to + orang',
  notes: [
    'Tanpa to: orangnya lebih dulu. Dengan to: bendanya lebih dulu.',
    'buy, make, cook memakai for, bukan to: "I bought a gift for her."',
    'Kalau bendanya berupa kata ganti (it, them), bentuk dengan to hampir wajib: "Give it to me."',
    'explain, describe, suggest TIDAK boleh berpola "explain me" — selalu "explain to me".',
  ],
  ex: [
    ['She gave me a book.', 'Dia memberi saya sebuah buku.'],
    ['She gave a book to me.', 'Dia memberikan sebuah buku kepada saya.'],
    ['He bought a present for his sister.', 'Dia membeli hadiah untuk adiknya.'],
    ['Please explain the rule to me.', 'Tolong jelaskan aturannya kepada saya.'],
  ],
  traps: [
    ['Please explain me this word.', 'Please explain this word to me.', 'explain tidak boleh langsung diikuti orang.'],
    ['Give me it.', 'Give it to me.', 'Kalau bendanya kata ganti, dipakai bentuk dengan to.'],
    ['He bought to me a coffee.', 'He bought me a coffee.', 'buy memakai for, atau langsung tanpa kata depan.'],
  ],
  drills: [
    { t: 'mcq', q: 'Could you ___ how this works?', opts: ['explain me', 'explain to me', 'explain for me', 'me explain'], a: 1 },
    { t: 'mcq', q: 'I made ___ a cake for her birthday.', opts: ['to her', 'for she', 'her', 'she'], a: 2 },
    { t: 'mcq', q: 'The book is heavy. Please give ___.', opts: ['me it', 'it me', 'it to me', 'to me it'], a: 2 },
    { t: 'fill', q: 'She sent a message ___ her manager.', a: ['to'] },
    { t: 'trans', id: 'Tolong jelaskan masalahnya kepada saya.', a: ['Please explain the problem to me.', 'Could you explain the problem to me?'] },
  ],
},

{
  id: 'b1-27', level: 'B1',
  title: 'Comparative Modifiers',
  titleId: 'Menakar perbandingan',
  why: 'Bahasa Indonesia menakar dengan "jauh lebih", "sedikit lebih", "agak". Inggris punya kata khusus yang HANYA boleh dipakai dengan perbandingan (far, much, slightly) dan yang tidak boleh (very). "Very better" adalah kesalahan yang sangat sering muncul.',
  form: 'much / far / a lot / slightly / a bit / a little + comparative',
  notes: [
    'very TIDAK boleh dipakai dengan bentuk perbandingan — pakai much atau far.',
    'a bit dan slightly untuk selisih kecil; far dan much untuk selisih besar.',
    'even + comparative menekankan tambahan: "even better".',
    'nowhere near dan not nearly menyangkal perbandingan dengan tegas.',
  ],
  ex: [
    ['This road is much safer than the old one.', 'Jalan ini jauh lebih aman daripada yang lama.'],
    ['The second test was slightly easier.', 'Ujian kedua sedikit lebih mudah.'],
    ['Her explanation was far clearer.', 'Penjelasannya jauh lebih jelas.'],
    ['Today is even hotter than yesterday.', 'Hari ini bahkan lebih panas daripada kemarin.'],
  ],
  traps: [
    ['This is very better than that.', 'This is much better than that.', 'very tidak dipakai dengan bentuk perbandingan.'],
    ['He is more taller than me.', 'He is much taller than me.', 'Tidak ada more + -er.'],
    ['It is a bit more cheap.', 'It is a bit cheaper.', 'Kata sifat pendek memakai -er, bukan more.'],
  ],
  drills: [
    { t: 'mcq', q: 'This laptop is ___ faster than my old one.', opts: ['very', 'much', 'so', 'too'], a: 1 },
    { t: 'mcq', q: 'The room is ___ bigger — just a few metres.', opts: ['far', 'much', 'slightly', 'a lot'], a: 2 },
    { t: 'mcq', q: 'Which is correct?', opts: ['more better', 'much better', 'very better', 'so better'], a: 1 },
    { t: 'fill', q: 'The exam was ___ harder than I expected. (jauh)', a: ['far', 'much', 'a lot'] },
    { t: 'trans', id: 'Rumah ini jauh lebih murah.', a: ['This house is much cheaper.', 'This house is far cheaper.'] },
  ],
},

{
  id: 'b1-28', level: 'B1',
  title: 'Quantifiers with "of"',
  titleId: 'Penakar dengan "of"',
  why: 'most students dan most of the students tidak sama artinya, dan of hanya muncul kalau bendanya sudah tertentu. Pemelajar Indonesia cenderung memasang of di semua tempat karena "dari" terasa selalu perlu.',
  form: 'most / some / many + benda umum   ·   most / some / many + OF + the / my / these + benda',
  notes: [
    'Tanpa of = pernyataan umum: "Most students work hard."',
    'Dengan of = kelompok tertentu: "Most of the students in my class work hard."',
    'of WAJIB sebelum kata ganti: "some of them", bukan "some them".',
    'all boleh tanpa of di depan the: "all the students" sama benarnya dengan "all of the students".',
  ],
  ex: [
    ['Most people enjoy weekends.', 'Kebanyakan orang menikmati akhir pekan.'],
    ['Most of my friends live abroad.', 'Kebanyakan teman saya tinggal di luar negeri.'],
    ['Some of them arrived late.', 'Sebagian dari mereka datang terlambat.'],
    ['None of the answers was correct.', 'Tidak satu pun jawabannya benar.'],
  ],
  traps: [
    ['Most of people like music.', 'Most people like music.', 'Pernyataan umum tidak memakai of.'],
    ['Some them were absent.', 'Some of them were absent.', 'Sebelum kata ganti, of wajib.'],
    ['Many of student failed.', 'Many students failed.', 'of menuntut kata sandang tertentu dan bentuk jamak.'],
  ],
  drills: [
    { t: 'mcq', q: '___ children like sweets.', opts: ['Most of', 'Most', 'Most of the all', 'The most of'], a: 1 },
    { t: 'mcq', q: '___ my colleagues speak English.', opts: ['Most', 'Most of', 'The most', 'Most of the'], a: 1 },
    { t: 'mcq', q: 'I know ___ personally.', opts: ['some them', 'some of them', 'some of they', 'of some them'], a: 1 },
    { t: 'fill', q: 'Many ___ the books were damaged.', a: ['of'] },
    { t: 'trans', id: 'Sebagian besar murid di kelas saya rajin.', a: ['Most of the students in my class are hard-working.', 'Most of the students in my class work hard.'] },
  ],
},

{
  id: 'b1-29', level: 'B1',
  title: 'Relative Adverbs: where / when / why',
  titleId: 'Kata sambung tempat & waktu',
  why: 'Daftar lama sudah punya klausa relatif dengan who/which/that, tapi bukan bentuk keterangannya. Pemakaian "the place which I was born" alih-alih "where" adalah kesalahan lanjutan yang khas.',
  form: 'tempat + where · waktu + when · alasan + why',
  notes: [
    'where menggantikan "in which / at which": "the town where I grew up".',
    'when menggantikan "on which / at which" untuk waktu.',
    'why hanya dipakai sesudah reason: "the reason why".',
    'Kalau sesudahnya ada kata depan, pakai which: "the house which I live IN".',
  ],
  ex: [
    ['This is the town where I was born.', 'Ini kota tempat saya dilahirkan.'],
    ['I remember the day when we met.', 'Saya ingat hari saat kami bertemu.'],
    ['That is the reason why he left.', 'Itulah alasan mengapa dia pergi.'],
    ['The office where she works is nearby.', 'Kantor tempat dia bekerja ada di dekat sini.'],
  ],
  traps: [
    ['This is the house which I live.', 'This is the house where I live.', 'Tempat memakai where, atau which + in.'],
    ['I remember the day which we met.', 'I remember the day when we met.', 'Waktu memakai when.'],
    ['The reason because he left is unclear.', 'The reason why he left is unclear.', 'Sesudah reason dipakai why, bukan because.'],
  ],
  drills: [
    { t: 'mcq', q: 'That is the restaurant ___ we had dinner.', opts: ['which', 'where', 'when', 'that'], a: 1 },
    { t: 'mcq', q: 'Do you remember the year ___ we moved?', opts: ['where', 'which', 'when', 'why'], a: 2 },
    { t: 'mcq', q: 'Nobody knows the reason ___ she resigned.', opts: ['because', 'why', 'where', 'which'], a: 1 },
    { t: 'fill', q: 'This is the village ___ my grandparents lived.', a: ['where'] },
    { t: 'trans', id: 'Ini sekolah tempat saya belajar.', a: ['This is the school where I studied.', 'This is the school where I study.'] },
  ],
},

{
  id: 'b1-30', level: 'B1',
  title: 'Partitives & Measure Phrases',
  titleId: 'Satuan untuk benda tak terhitung',
  why: 'advice, information, furniture, news tidak bisa dihitung dan tidak bisa diberi a atau -s. Untuk menghitungnya harus ada satuan — a piece of advice. Ini kesalahan yang sangat sering muncul dalam tulisan pemelajar Indonesia.',
  form: 'a piece / bit / item / slice / bottle / loaf  +  of  +  benda tak terhitung',
  notes: [
    'Tak terhitung yang paling sering keliru: advice, information, news, furniture, luggage, equipment, research, knowledge.',
    'Semuanya memakai kata kerja tunggal: "The news is good."',
    'Satuan umum: a piece of, a bit of, an item of, a great deal of.',
    'Beberapa kata berubah arti kalau dihitung: "a coffee" berarti secangkir kopi.',
  ],
  ex: [
    ['She gave me a piece of advice.', 'Dia memberi saya sebuah nasihat.'],
    ['I need some information about the course.', 'Saya butuh informasi tentang kursusnya.'],
    ['The news was surprising.', 'Beritanya mengejutkan.'],
    ['We bought two items of furniture.', 'Kami membeli dua perabot.'],
  ],
  traps: [
    ['She gave me many advices.', 'She gave me a lot of advice.', 'advice tidak bisa dijamakkan.'],
    ['I have an information for you.', 'I have some information for you.', 'information tidak memakai a.'],
    ['The news are good.', 'The news is good.', 'news berbentuk jamak tapi dianggap tunggal.'],
  ],
  drills: [
    { t: 'mcq', q: 'Can I ask you for ___ advice?', opts: ['an', 'some', 'a few', 'many'], a: 1 },
    { t: 'mcq', q: 'He gave me three ___ of information.', opts: ['piece', 'pieces', 'informations', 'peaces'], a: 1 },
    { t: 'mcq', q: 'The furniture in this room ___ new.', opts: ['are', 'is', 'were', 'have'], a: 1 },
    { t: 'fill', q: 'I would like a ___ of bread, please. (potong)', a: ['slice', 'piece'] },
    { t: 'trans', id: 'Dia memberi saya beberapa nasihat bagus.', a: ['She gave me some good advice.', 'He gave me some good advice.'] },
  ],
},

{
  id: 'b1-31', level: 'B1',
  title: 'Adjective + Preposition + Gerund',
  titleId: 'Sifat + kata depan + -ing',
  why: 'good at, interested in, afraid of, tired of — dan sesudah kata depan itu kata kerjanya WAJIB berbentuk -ing, tidak pernah to. Dua kesalahan menumpuk di sini: salah kata depan, lalu salah bentuk kata kerja.',
  form: 'kata sifat + kata depan + V-ing',
  notes: [
    'Sesudah SEMUA kata depan, kata kerja berbentuk -ing. Tanpa perkecualian.',
    'Pasangan yang harus dihafal: good/bad at, interested in, afraid of, keen on, tired of, used to, capable of, responsible for.',
    'Awas: "used to do" (dulu biasa) berbeda dari "used to doing" (sudah terbiasa).',
    'Kata depan tidak bisa ditebak dari bahasa Indonesia — harus dihafal berpasangan.',
  ],
  ex: [
    ['She is good at solving problems.', 'Dia pandai memecahkan masalah.'],
    ['I am interested in learning Japanese.', 'Saya tertarik belajar bahasa Jepang.'],
    ['He is afraid of flying.', 'Dia takut naik pesawat.'],
    ['We are used to working late.', 'Kami sudah terbiasa bekerja sampai malam.'],
  ],
  traps: [
    ['She is good at to cook.', 'She is good at cooking.', 'Sesudah kata depan selalu bentuk -ing.'],
    ['I am interested to learn Japanese.', 'I am interested in learning Japanese.', 'interested memakai in.'],
    ['He is afraid to spiders.', 'He is afraid of spiders.', 'afraid memakai of.'],
  ],
  drills: [
    { t: 'mcq', q: 'I am not very good ___ remembering names.', opts: ['in', 'at', 'on', 'for'], a: 1 },
    { t: 'mcq', q: 'She is tired ___ waiting.', opts: ['of', 'with', 'from', 'to'], a: 0 },
    { t: 'mcq', q: 'Which is correct?', opts: ['keen on to travel', 'keen to travelling', 'keen on travelling', 'keen in travel'], a: 2 },
    { t: 'fill', q: 'He is responsible ___ managing the team.', a: ['for'] },
    { t: 'trans', id: 'Saya tertarik bekerja di luar negeri.', a: ['I am interested in working abroad.', "I'm interested in working abroad."] },
  ],
},

{
  id: 'b1-32', level: 'B1',
  title: 'Linking Words: Addition, Sequence & Example',
  titleId: 'Penghubung: tambahan, urutan, contoh',
  why: 'Topik b1-21 sudah memegang pertentangan dan akibat. Yang belum ada justru penghubung yang paling sering dibutuhkan saat menulis: menambahkan, mengurutkan, dan memberi contoh — masing-masing punya aturan tanda baca sendiri.',
  form: 'in addition / moreover / furthermore · first, then, finally · for example / such as',
  notes: [
    'moreover dan furthermore diikuti koma dan memulai kalimat baru.',
    'as well as diikuti kata benda atau -ing, bukan kalimat penuh.',
    'such as diikuti CONTOH, for example bisa memulai kalimat sendiri.',
    'besides berarti "lagi pula"; beside berarti "di samping" — dua kata berbeda.',
  ],
  ex: [
    ['The course is short. Moreover, it is free.', 'Kursusnya singkat. Lagi pula, gratis.'],
    ['She speaks French as well as Spanish.', 'Dia berbahasa Prancis dan juga Spanyol.'],
    ['Bring warm clothes, such as a jacket and gloves.', 'Bawa pakaian hangat, seperti jaket dan sarung tangan.'],
    ['First, mix the flour. Then, add the eggs.', 'Pertama, campurkan tepungnya. Lalu, masukkan telurnya.'],
  ],
  traps: [
    ['Beside, the price is too high.', 'Besides, the price is too high.', 'besides = lagi pula; beside = di samping.'],
    ['She sings as well as she dances well.', 'She sings as well as dancing.', 'as well as diikuti kata benda atau -ing.'],
    ['For example fruits like apple.', 'For example, fruits such as apples.', 'for example diikuti koma.'],
  ],
  drills: [
    { t: 'mcq', q: 'The hotel is cheap. ___, it is close to the beach.', opts: ['Beside', 'Besides', 'Except', 'Instead'], a: 1 },
    { t: 'mcq', q: 'He plays several instruments, ___ the piano and the guitar.', opts: ['such as', 'as such', 'like as', 'for'], a: 0 },
    { t: 'mcq', q: 'Which is correct?', opts: ['She works as well as studying.', 'She works as well as she study.', 'She works as well studying.', 'She works so well as studying.'], a: 0 },
    { t: 'fill', q: '___, the report is far too long. (lagi pula, resmi)', a: ['Moreover', 'Furthermore'] },
    { t: 'trans', id: 'Selain itu, harganya terlalu mahal.', a: ['Moreover, the price is too high.', 'Besides, the price is too high.', 'In addition, the price is too high.'] },
  ],
},

];

export const PLUS_B2 = [

{
  id: 'b2-23', level: 'B2',
  title: 'whatever / whoever / whenever',
  titleId: 'Apa pun, siapa pun',
  why: 'Bentuk -ever memadatkan "apa pun yang", "siapa pun yang" menjadi satu kata, dan sesudahnya TIDAK memakai that atau kata sambung lagi. Pemelajar sering menambahkan yang tidak perlu.',
  form: 'whatever / whoever / whenever / wherever / however + klausa',
  notes: [
    'Bisa berarti "tidak peduli apa pun" atau "apa saja yang".',
    'however + kata sifat berarti "sebagaimanapun": "however difficult it is".',
    'Tidak pernah diikuti that: "whatever that you want" salah.',
    'no matter what / who / how adalah padanan yang lebih santai.',
  ],
  ex: [
    ['Take whatever you need.', 'Ambil apa pun yang kamu butuhkan.'],
    ['Whoever finishes first wins.', 'Siapa pun yang selesai lebih dulu menang.'],
    ['However hard he tried, he failed.', 'Sekeras apa pun dia mencoba, dia gagal.'],
    ['Call me whenever you like.', 'Telepon saya kapan pun kamu mau.'],
  ],
  traps: [
    ['Whatever that you say is fine.', 'Whatever you say is fine.', '-ever tidak diikuti that.'],
    ['However he is rich, he is unhappy.', 'However rich he is, he is unhappy.', 'however langsung diikuti kata sifatnya.'],
    ['Whoever want to come is welcome.', 'Whoever wants to come is welcome.', 'whoever dianggap tunggal.'],
  ],
  drills: [
    { t: 'mcq', q: '___ you decide, I will support you.', opts: ['Whatever', 'Whatever that', 'What ever that', 'Whichever that'], a: 0 },
    { t: 'mcq', q: '___ expensive it is, I will buy it.', opts: ['However', 'Whatever', 'Whenever', 'Whoever'], a: 0 },
    { t: 'mcq', q: 'Which is correct?', opts: ['Whoever arrive first', 'Whoever arrives first', 'Whoever is arrive first', 'Whoever do arrive first'], a: 1 },
    { t: 'fill', q: '___ you go, take a map with you. (di mana pun)', a: ['Wherever'] },
    { t: 'trans', id: 'Siapa pun yang bertanya, jawab dengan jujur.', a: ['Whoever asks, answer honestly.', 'Whoever asks you, answer honestly.'] },
  ],
},

{
  id: 'b2-24', level: 'B2',
  title: 'Inversion in Conditionals',
  titleId: 'Pengandaian tanpa if',
  why: 'Dalam tulisan resmi, if sering dihapus dan kata bantunya dipindah ke depan. Bentuk ini muncul terus di teks IELTS dan surat resmi, tapi jarang diajarkan sehingga pemelajar tidak mengenalinya sebagai pengandaian.',
  form: 'Had + S + V3  ·  Were + S + to V  ·  Should + S + V',
  notes: [
    'Had I known = If I had known (tipe tiga).',
    'Were I you = If I were you (tipe dua).',
    'Should you need = If you should need (tipe satu, sopan).',
    'Bentuk terbalik ini TIDAK memakai if — memakai keduanya sekaligus adalah kesalahan.',
  ],
  ex: [
    ['Had I known, I would have helped.', 'Kalau saya tahu, saya pasti membantu.'],
    ['Were I in your position, I would accept.', 'Kalau saya di posisimu, saya akan menerimanya.'],
    ['Should you need help, please call.', 'Kalau Anda perlu bantuan, silakan telepon.'],
    ['Had the weather been better, we would have gone.', 'Kalau cuacanya lebih baik, kami pasti pergi.'],
  ],
  traps: [
    ['If had I known, I would have come.', 'Had I known, I would have come.', 'Bentuk terbalik tidak memakai if.'],
    ["Hadn't I known, I would have failed.", 'Had I not known, I would have failed.', 'Bentuk terbalik tidak memakai singkatan negatif.'],
    ['Should you needed help, call me.', 'Should you need help, call me.', 'Sesudah should dipakai bentuk dasar.'],
  ],
  drills: [
    { t: 'mcq', q: '___ I known earlier, I would have told you.', opts: ['If', 'Had', 'Have', 'Would'], a: 1 },
    { t: 'mcq', q: '___ you require assistance, please contact us.', opts: ['Should', 'Would', 'Had', 'Were'], a: 0 },
    { t: 'mcq', q: 'Which is correct?', opts: ['Were I you, I would resign.', 'Was I you, I would resign.', 'If were I you, I would resign.', 'Were if I you, I would resign.'], a: 0 },
    { t: 'fill', q: '___ the company to close, many would lose their jobs. (Were)', a: ['Were'] },
    { t: 'trans', id: 'Seandainya saya tahu, saya pasti datang.', a: ['Had I known, I would have come.', 'Had I known, I would have gone.'] },
  ],
},

{
  id: 'b2-25', level: 'B2',
  title: 'Anticipatory "it"',
  titleId: 'It sebagai subjek semu',
  why: 'Inggris tidak suka subjek yang panjang di depan kalimat, jadi dipakai "it" kosong dan isinya digeser ke belakang. Bahasa Indonesia tidak punya mekanisme ini, sehingga pemelajar menulis kalimat yang benar tata bahasanya tapi berat dibaca.',
  form: 'It + be + kata sifat + to V / that klausa',
  notes: [
    '"To learn a language takes time" benar, tapi "It takes time to learn a language" jauh lebih lazim.',
    'Pola tetap: It is important that… , It seems that… , It appears that…',
    'Sesudah beberapa kata sifat dipakai subjunctive: "It is essential that he be present."',
    'it di sini kosong — tidak menunjuk apa pun, jadi tidak bisa diterjemahkan jadi "itu".',
  ],
  ex: [
    ['It is difficult to explain this in one sentence.', 'Sulit menjelaskan ini dalam satu kalimat.'],
    ['It seems that nobody noticed.', 'Tampaknya tidak ada yang menyadarinya.'],
    ['It is important that everyone attends.', 'Penting bahwa semua orang hadir.'],
    ['It took three hours to finish the report.', 'Butuh tiga jam untuk menyelesaikan laporannya.'],
  ],
  traps: [
    ['Is difficult to explain.', 'It is difficult to explain.', 'Inggris menuntut subjek, walau kosong.'],
    ['It is important everyone attends.', 'It is important that everyone attends.', 'that tidak dihilangkan dalam ragam resmi.'],
    ['That is difficult to explain this.', 'It is difficult to explain this.', 'Subjek semu memakai it, bukan that.'],
  ],
  drills: [
    { t: 'mcq', q: '___ is essential to check the data first.', opts: ['That', 'It', 'This', 'There'], a: 1 },
    { t: 'mcq', q: 'Which sounds most natural in academic writing?', opts: ['To finish the task on time was hard.', 'It was hard to finish the task on time.', 'Was hard to finish the task.', 'The finishing was hard on time.'], a: 1 },
    { t: 'mcq', q: '___ appears that the results were wrong.', opts: ['There', 'That', 'It', 'This'], a: 2 },
    { t: 'fill', q: '___ takes patience to learn grammar well.', a: ['It'] },
    { t: 'trans', id: 'Sulit mengatakan mana yang lebih baik.', a: ['It is difficult to say which is better.', "It's hard to say which is better."] },
  ],
},

{
  id: 'b2-26', level: 'B2',
  title: 'Concessive Clauses',
  titleId: 'Klausa pengakuan',
  why: 'although, though, even though, despite, in spite of semuanya diterjemahkan "meskipun", tapi despite dan in spite of diikuti KATA BENDA sedangkan although diikuti KALIMAT. Ini kesalahan yang paling sering merusak nilai menulis IELTS.',
  form: 'although / though / even though + kalimat   ·   despite / in spite of + benda atau V-ing',
  notes: [
    'despite TIDAK diikuti of: "despite of" selalu salah.',
    'Untuk memakai despite dengan kalimat, sisipkan "the fact that".',
    'whereas dan while membandingkan dua hal, bukan mengakui: "He is tall whereas she is short."',
    'though bisa diletakkan di akhir kalimat dalam ragam santai: "It was hard, though."',
  ],
  ex: [
    ['Although it was raining, we went out.', 'Meskipun hujan, kami tetap keluar.'],
    ['Despite the rain, we went out.', 'Meskipun hujan, kami tetap keluar.'],
    ['In spite of being tired, she kept working.', 'Meskipun lelah, dia terus bekerja.'],
    ['He earns little, whereas his brother earns a lot.', 'Dia berpenghasilan kecil, sedangkan kakaknya besar.'],
  ],
  traps: [
    ['Despite of the rain, we went out.', 'Despite the rain, we went out.', 'despite tidak pernah diikuti of.'],
    ['Although the rain, we went out.', 'Although it was raining, we went out.', 'although diikuti kalimat penuh.'],
    ['Despite she was tired, she worked.', 'Despite the fact that she was tired, she worked.', 'Untuk kalimat, sisipkan the fact that.'],
  ],
  drills: [
    { t: 'mcq', q: '___ the traffic, we arrived on time.', opts: ['Although', 'Despite of', 'Despite', 'Even though'], a: 2 },
    { t: 'mcq', q: '___ he studied hard, he did not pass.', opts: ['Despite', 'In spite of', 'Although', 'Whereas of'], a: 2 },
    { t: 'mcq', q: 'Which is correct?', opts: ['In spite of he was ill', 'In spite of being ill', 'In spite he was ill', 'Despite of being ill'], a: 1 },
    { t: 'fill', q: 'Despite the ___ that it was late, they continued. (kata yang hilang)', a: ['fact'] },
    { t: 'trans', id: 'Meskipun lelah, saya menyelesaikan pekerjaannya.', a: ['Although I was tired, I finished the work.', 'Despite being tired, I finished the work.'] },
  ],
},

{
  id: 'b2-27', level: 'B2',
  title: 'Adverb Scope: only, even, also',
  titleId: 'Jangkauan kata keterangan',
  why: 'Letak only mengubah ARTI kalimat, bukan cuma rasanya. "I only saw her" dan "Only I saw her" berbeda jauh. Bahasa Indonesia menandai fokus dengan tekanan suara, Inggris dengan letak kata — jadi tulisan pemelajar sering bermakna lain dari yang dimaksud.',
  form: 'only / even / also diletakkan TEPAT sebelum bagian yang difokuskan',
  notes: [
    'Only I saw her = tidak ada orang lain yang melihatnya.',
    'I only saw her = saya cuma melihat, tidak berbuat lain.',
    'I saw only her = saya tidak melihat orang lain.',
    'also biasanya sebelum kata kerja utama; too dan as well di akhir kalimat.',
  ],
  ex: [
    ['Only she knew the password.', 'Hanya dia yang tahu kata sandinya.'],
    ['She only borrowed the book.', 'Dia cuma meminjam bukunya (tidak membelinya).'],
    ['She borrowed only one book.', 'Dia meminjam hanya satu buku.'],
    ['He even apologised.', 'Dia bahkan minta maaf.'],
  ],
  traps: [
    ['I only can help you tomorrow.', 'I can only help you tomorrow.', 'only diletakkan sesudah kata bantu.'],
    ['She speaks also French.', 'She also speaks French.', 'also diletakkan sebelum kata kerja utama.'],
    ['Also I agree with you.', 'I also agree with you.', 'also jarang memulai kalimat dalam ragam baku.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which means "nobody else saw it"?', opts: ['I only saw it.', 'Only I saw it.', 'I saw only it.', 'I saw it only.'], a: 1 },
    { t: 'mcq', q: 'Choose the natural position: She ___ works on Sundays.', opts: ['also', 'too', 'as well', 'even also'], a: 0 },
    { t: 'mcq', q: 'Which is correct?', opts: ['I only can stay an hour.', 'I can only stay an hour.', 'Only I can stay an hour meaning time.', 'I can stay only an hour ago.'], a: 1 },
    { t: 'fill', q: 'He did not just complain — he ___ walked out. (bahkan)', a: ['even'] },
    { t: 'trans', id: 'Hanya dua orang yang hadir.', a: ['Only two people attended.', 'Only two people came.'] },
  ],
},

{
  id: 'b2-28', level: 'B2',
  title: 'Delexical Verbs: make / do / take / have',
  titleId: 'Kata kerja kosong makna',
  why: 'make a decision, do research, take a break, have a look — kata kerjanya nyaris tanpa makna sendiri dan pasangannya harus dihafal. Bahasa Indonesia memakai "melakukan" untuk hampir semuanya, jadi "do a mistake" terasa benar padahal salah.',
  form: 'make / do / take / have + kata benda tertentu',
  notes: [
    'make untuk yang dihasilkan: a decision, a mistake, progress, an effort, noise.',
    'do untuk pekerjaan dan kegiatan: homework, research, the dishes, business, exercise.',
    'take untuk yang diambil atau dijalani: a break, a photo, a shower, an exam, a risk.',
    'have untuk pengalaman: a look, a rest, a meeting, breakfast, fun, a problem.',
  ],
  ex: [
    ['We need to make a decision today.', 'Kita perlu mengambil keputusan hari ini.'],
    ['She is doing research on climate change.', 'Dia sedang meneliti perubahan iklim.'],
    ["Let's take a short break.", 'Mari istirahat sebentar.'],
    ['Can I have a look at your notes?', 'Boleh saya lihat catatanmu?'],
  ],
  traps: [
    ['I did a mistake in the report.', 'I made a mistake in the report.', 'mistake berpasangan dengan make.'],
    ['We must make our homework.', 'We must do our homework.', 'homework berpasangan dengan do.'],
    ['She made a photo of the building.', 'She took a photo of the building.', 'photo berpasangan dengan take.'],
  ],
  drills: [
    { t: 'mcq', q: 'He ___ great progress this year.', opts: ['did', 'made', 'took', 'had'], a: 1 },
    { t: 'mcq', q: 'Please ___ a seat and wait.', opts: ['make', 'do', 'take', 'get'], a: 2 },
    { t: 'mcq', q: 'They are ___ business in Singapore.', opts: ['making', 'doing', 'taking', 'having'], a: 1 },
    { t: 'fill', q: 'Can we ___ a meeting on Friday? (kata kerja yang tepat)', a: ['have', 'hold'] },
    { t: 'trans', id: 'Saya membuat kesalahan besar.', a: ['I made a big mistake.', 'I made a serious mistake.'] },
  ],
},

{
  id: 'b2-29', level: 'B2',
  title: 'Comparing Future Forms',
  titleId: 'Membandingkan bentuk masa depan',
  why: 'will, be going to, present continuous, dan present simple semuanya bisa berarti masa depan, tapi memilih yang salah mengubah kesan: janji, rencana, jadwal, atau ramalan. Bahasa Indonesia cukup memakai "akan" untuk semuanya.',
  form: 'will = keputusan saat itu · going to = niat & bukti · present continuous = janji temu · present simple = jadwal',
  notes: [
    'will untuk keputusan mendadak, janji, dan tawaran.',
    'be going to untuk niat yang sudah ada, dan ramalan berdasarkan bukti yang terlihat.',
    'Present continuous untuk janji yang sudah diatur dengan orang lain.',
    'Present simple hanya untuk jadwal resmi yang tidak bisa diubah sendiri.',
  ],
  ex: [
    ['The phone is ringing — I will answer it.', 'Teleponnya berbunyi — biar saya angkat.'],
    ['Look at those clouds! It is going to rain.', 'Lihat awannya! Sebentar lagi hujan.'],
    ['I am meeting the client at three.', 'Saya ada janji dengan klien pukul tiga.'],
    ['The train leaves at 6.40.', 'Keretanya berangkat pukul 6.40.'],
  ],
  traps: [
    ['I am going to answer it — I did not know it was ringing.', 'I will answer it.', 'Keputusan mendadak memakai will.'],
    ['I will meet the client at three; it is in my diary.', 'I am meeting the client at three.', 'Janji yang sudah diatur memakai present continuous.'],
    ['The train will leave at 6.40 by the timetable.', 'The train leaves at 6.40.', 'Jadwal resmi memakai present simple.'],
  ],
  drills: [
    { t: 'mcq', q: 'That box looks heavy. I ___ help you.', opts: ['am helping', 'will', 'am going to', 'help'], a: 1 },
    { t: 'mcq', q: 'She has bought the tickets — she ___ to Bali next week.', opts: ['will fly', 'is flying', 'flies', 'would fly'], a: 1 },
    { t: 'mcq', q: 'Careful! You ___ drop it.', opts: ['will', 'are going to', 'are dropping', 'drop'], a: 1 },
    { t: 'fill', q: 'The film ___ (start) at eight, according to the website.', a: ['starts'] },
    { t: 'trans', id: 'Saya sudah punya rencana membuka usaha tahun depan.', a: ['I am going to start a business next year.', "I'm going to open a business next year."] },
  ],
},

{
  id: 'b2-30', level: 'B2',
  title: 'Conditional Alternatives: otherwise / but for',
  titleId: 'Pengandaian tersirat',
  why: 'Syarat tidak selalu ditandai if. otherwise, but for, without, and, or bisa membawa makna pengandaian penuh dalam kalimat pendek. Pemelajar yang hanya mengenal if kehilangan setengah maknanya saat membaca teks resmi.',
  form: 'otherwise = kalau tidak · but for / without + benda = kalau bukan karena',
  notes: [
    'otherwise menyambung akibat kalau syaratnya tidak dipenuhi.',
    'but for diikuti kata benda dan hampir selalu berpasangan dengan would have.',
    'Kalimat perintah + and/or menyimpan pengandaian: "Hurry up, or you will miss it."',
    'without + V-ing juga bisa menggantikan if not.',
  ],
  ex: [
    ['Leave now; otherwise you will be late.', 'Berangkat sekarang; kalau tidak kamu akan terlambat.'],
    ['But for your help, I would have failed.', 'Kalau bukan karena bantuanmu, saya pasti gagal.'],
    ['Without water, nothing grows.', 'Tanpa air, tidak ada yang tumbuh.'],
    ['Study hard and you will pass.', 'Belajarlah giat, maka kamu akan lulus.'],
  ],
  traps: [
    ['But for you helped me, I would have failed.', 'But for your help, I would have failed.', 'but for diikuti kata benda.'],
    ['Hurry up, otherwise you will not miss the bus.', 'Hurry up, otherwise you will miss the bus.', 'otherwise sudah memuat "kalau tidak".'],
    ['Without to study, you will fail.', 'Without studying, you will fail.', 'Sesudah without dipakai bentuk -ing.'],
  ],
  drills: [
    { t: 'mcq', q: 'Take the map; ___ you will get lost.', opts: ['unless', 'otherwise', 'but for', 'in case of'], a: 1 },
    { t: 'mcq', q: '___ his advice, I would have made a mistake.', opts: ['Without of', 'But for', 'Otherwise', 'Unless'], a: 1 },
    { t: 'mcq', q: 'Which means "if you do not hurry, you will miss it"?', opts: ['Hurry up and you will miss it.', 'Hurry up, or you will miss it.', 'Hurry up but you will miss it.', 'Hurry up so you will miss it.'], a: 1 },
    { t: 'fill', q: '___ studying, you cannot pass. (tanpa)', a: ['Without'] },
    { t: 'trans', id: 'Kalau bukan karena hujan, kami pasti sudah pergi.', a: ['But for the rain, we would have gone.', 'Without the rain, we would have gone.'] },
  ],
},

];
