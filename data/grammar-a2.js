/* Tata bahasa tingkat A2 — 20 topik. */

export const GRAMMAR_A2 = [
{
  id: 'a2-01', level: 'A2', title: 'Past Simple: Questions & Negatives', titleId: 'Tanya & Sangkal Lampau',
  why: 'Aturan emas: begitu "did" muncul, kata kerja utama kembali polos. Ini kesalahan lampau paling sering.',
  form: 'Did + S + V1 ? · S + didn\'t + V1\nWas/Were + S …? · S + wasn\'t/weren\'t …',
  notes: [
    'did sudah membawa tanda lampau, jadi kata kerja utama tidak boleh ikut berubah.',
    'Untuk to be tidak dipakai did: "Were you tired?" bukan "Did you were tired?".',
    'Jawaban singkat: Yes, I did. / No, he didn\'t.'
  ],
  ex: [
    ['Did you finish the report?', 'Apakah kamu menyelesaikan laporannya?'],
    ['She didn\'t answer my message.', 'Dia tidak membalas pesan saya.'],
    ['Where did they go last night?', 'Ke mana mereka pergi tadi malam?']
  ],
  traps: [
    ['Did you went there?', 'Did you go there?', 'did + V1.'],
    ['I didn\'t saw him.', 'I didn\'t see him.', 'didn\'t + V1.'],
    ['Did you were happy?', 'Were you happy?', 'to be tidak memakai did.']
  ],
  drills: [
    { t:'mcq', q:'___ she call you yesterday?', opts:['Did','Does','Was','Do'], a:0, why:'Lampau + kata kerja aksi.' },
    { t:'mcq', q:'They ___ come to the meeting.', opts:['didn\'t','don\'t','weren\'t','doesn\'t'], a:0 },
    { t:'fill', q:'What time ___ the film start? (kemarin)', a:'did' },
    { t:'trans', id:'Saya tidak melihatnya kemarin.', a:['I didn\'t see him yesterday.','I didn\'t see her yesterday.'] }
  ]
},
{
  id: 'a2-02', level: 'A2', title: 'Past Continuous', titleId: 'Sedang Berlangsung di Masa Lampau',
  why: 'Menyusun latar cerita. Wajib untuk IELTS Speaking Part 2 yang menuntut bercerita.',
  form: 'was / were + V-ing',
  notes: [
    'Menggambarkan aksi yang sedang berjalan pada suatu titik waktu lampau.',
    'Sering dipasangkan dengan while (untuk aksi panjang) dan when (untuk aksi pendek).',
    'Bisa menyatakan dua aksi sejajar: "She was cooking while I was studying."'
  ],
  ex: [
    ['At 8 p.m. I was watching the news.', 'Jam 8 malam saya sedang menonton berita.'],
    ['They were waiting when the rain started.', 'Mereka sedang menunggu saat hujan mulai.']
  ],
  traps: [['I was study when he called.', 'I was studying when he called.', 'was + V-ing.']],
  drills: [
    { t:'mcq', q:'I ___ dinner when you rang.', opts:['cooked','was cooking','cook','have cooked'], a:1 },
    { t:'fill', q:'They ___ (wait) at the station at nine.', a:['were waiting'] },
    { t:'trans', id:'Saya sedang tidur ketika kamu datang.', a:['I was sleeping when you came.','I was sleeping when you arrived.'] }
  ]
},
{
  id: 'a2-03', level: 'A2', title: 'Past Simple vs Past Continuous', titleId: 'Lampau Sederhana vs Berlangsung',
  why: 'Pola "aksi panjang dipotong aksi pendek" hampir pasti muncul di soal pilihan ganda.',
  form: 'Aksi panjang (was/were + V-ing) + when + aksi pendek (V2)\nWhile + aksi panjang, aksi pendek',
  notes: [
    'when biasanya diikuti past simple; while biasanya diikuti past continuous.',
    'Rangkaian kejadian berurutan semuanya past simple: "I woke up, made coffee, and left."'
  ],
  ex: [
    ['I was crossing the road when a car stopped.', 'Saya sedang menyeberang saat sebuah mobil berhenti.'],
    ['While she was cooking, the phone rang.', 'Saat dia memasak, teleponnya berbunyi.']
  ],
  traps: [['While I studied, he called.', 'While I was studying, he called.', 'while menuntut aksi berdurasi.']],
  drills: [
    { t:'mcq', q:'She ___ TV when the lights went out.', opts:['watched','was watching','watches','has watched'], a:1 },
    { t:'mcq', q:'While we ___, it started to rain.', opts:['walked','were walking','walk','have walked'], a:1 },
    { t:'fill', q:'He ___ (break) his leg while he was playing football.', a:['broke'] },
    { t:'mcq', q:'Mana rangkaian yang benar?', opts:['I woke up, was making coffee, and left.','I woke up, made coffee, and left.','I was waking up, made coffee, and was leaving.','I wake up, made coffee, and left.'], a:1 }
  ]
},
{
  id: 'a2-04', level: 'A2', title: 'Present Perfect: have/has + V3', titleId: 'Perfect Sekarang',
  why: 'Tenses ini TIDAK ADA di bahasa Indonesia, jadi harus dibangun dari nol. Kuncinya: masa lalu yang masih terhubung ke sekarang.',
  form: 'S + have/has + V3\nNegatif: haven\'t / hasn\'t + V3 · Tanya: Have/Has + S + V3?',
  notes: [
    'Tiga pemakaian: pengalaman hidup (I have been to Japan), hasil yang masih terasa (I have lost my key), dan durasi sampai kini (I have lived here for 5 years).',
    'JANGAN dipakai bersama waktu lampau yang sudah selesai (yesterday, last week, in 2019).',
    'Kata bantu khas: ever, never, already, yet, just, so far, recently.'
  ],
  ex: [
    ['I have finished my homework.', 'Saya sudah menyelesaikan PR saya.'],
    ['She has never eaten sushi.', 'Dia belum pernah makan sushi.'],
    ['Have you ever been to Singapore?', 'Pernahkah kamu ke Singapura?']
  ],
  traps: [
    ['I have gone to Bali last year.', 'I went to Bali last year.', 'last year = waktu selesai → past simple.'],
    ['She has went home.', 'She has gone home.', 'Perfect memakai V3.'],
    ['I have ate.', 'I have eaten.', 'V3 dari eat adalah eaten.']
  ],
  drills: [
    { t:'mcq', q:'I ___ my keys. I can\'t find them.', opts:['lost','have lost','was losing','lose'], a:1, why:'Akibatnya masih terasa sekarang.' },
    { t:'mcq', q:'___ you ever ___ a plane?', opts:['Did / fly','Have / flown','Have / flew','Do / fly'], a:1 },
    { t:'fill', q:'She ___ (write) three emails so far.', a:['has written'] },
    { t:'mcq', q:'Mana yang SALAH?', opts:['I have seen that film.','I have seen that film yesterday.','I saw that film yesterday.','I have just seen it.'], a:1 }
  ]
},
{
  id: 'a2-05', level: 'A2', title: 'Present Perfect vs Past Simple', titleId: 'Perfect vs Lampau',
  why: 'Perbedaan ini menyumbang banyak poin di TOEFL Structure dan TOEIC Part 5.',
  form: 'Waktu selesai & disebut → past simple\nWaktu belum selesai / tidak disebut → present perfect',
  notes: [
    'Tanya "When?" selalu dijawab past simple: "When did you arrive?"',
    'this morning/today masih berjalan → perfect; kalau harinya sudah lewat → past simple.',
    'Bahasa Inggris Amerika lebih longgar; untuk ujian internasional pakai aturan British.'
  ],
  ex: [
    ['I have visited Bali twice.', 'Saya sudah dua kali ke Bali.'],
    ['I visited Bali in 2022.', 'Saya ke Bali pada 2022.']
  ],
  traps: [['When have you arrived?', 'When did you arrive?', 'when menuntut waktu selesai.']],
  drills: [
    { t:'mcq', q:'He ___ in Jakarta since 2019.', opts:['lives','lived','has lived','is living'], a:2 },
    { t:'mcq', q:'We ___ the museum last Sunday.', opts:['have visited','visited','visit','has visited'], a:1 },
    { t:'mcq', q:'___ you finished yet?', opts:['Did','Have','Do','Are'], a:1 },
    { t:'trans', id:'Saya sudah dua kali menonton film itu.', a:['I have watched that film twice.','I have seen that film twice.'] }
  ]
},
{
  id: 'a2-06', level: 'A2', title: 'for / since / ago', titleId: 'Durasi & Titik Waktu',
  why: 'Tiga kata pendek yang membedakan kalimat natural dan kalimat terjemahan.',
  form: 'for + lama waktu (for three years)\nsince + titik mulai (since 2019, since Monday)\nago + jarak dari sekarang, dengan past simple (three years ago)',
  notes: [
    'since hampir selalu berpasangan dengan present perfect.',
    'ago tidak pernah dipakai dengan perfect: bukan "I have started ago".',
    '"How long have you…?" dijawab dengan for atau since.'
  ],
  ex: [
    ['I have worked here for five years.', 'Saya bekerja di sini selama lima tahun.'],
    ['She has been ill since Monday.', 'Dia sakit sejak Senin.'],
    ['They moved here two years ago.', 'Mereka pindah ke sini dua tahun lalu.']
  ],
  traps: [
    ['I live here since 2020.', 'I have lived here since 2020.', 'since menuntut perfect.'],
    ['I have come here 3 days ago.', 'I came here 3 days ago.', 'ago memakai past simple.']
  ],
  drills: [
    { t:'mcq', q:'We have known each other ___ 2015.', opts:['for','since','ago','from'], a:1 },
    { t:'mcq', q:'She finished ___ ten minutes.', opts:['since','ago','for','in'], a:2, why:'"ten minutes ago" — pilihan ini melengkapi pola ago.' },
    { t:'fill', q:'I have studied English ___ six years.', a:'for' },
    { t:'trans', id:'Saya sudah menunggu sejak pagi.', a:['I have been waiting since this morning.','I have waited since this morning.'] }
  ]
},
{
  id: 'a2-07', level: 'A2', title: 'Future with will', titleId: 'Masa Depan dengan will',
  why: 'Bahasa Indonesia memakai "akan" untuk semua masa depan; bahasa Inggris membedakan will, going to, dan present continuous.',
  form: 'S + will + V1 · won\'t + V1 · Will + S + V1?',
  notes: [
    'will untuk keputusan spontan, janji, tawaran, ramalan tanpa bukti.',
    'Modal, jadi tidak ada -s dan tidak diikuti to.',
    'Sering dipadukan: I think / probably / maybe + will.'
  ],
  ex: [
    ['I\'ll help you with that.', 'Saya akan membantumu.'],
    ['It will probably rain tonight.', 'Mungkin akan hujan malam ini.'],
    ['She won\'t agree.', 'Dia tidak akan setuju.']
  ],
  traps: [['She will goes.', 'She will go.', 'Modal + V1.']],
  drills: [
    { t:'mcq', q:'Don\'t worry, I ___ pick you up.', opts:['will','am going to','going to','will to'], a:0, why:'Tawaran spontan.' },
    { t:'fill', q:'I think it ___ (be) fine tomorrow.', a:['will be'] },
    { t:'trans', id:'Saya tidak akan lupa.', a:['I won\'t forget.','I will not forget.'] }
  ]
},
{
  id: 'a2-08', level: 'A2', title: 'be going to', titleId: 'Rencana & Bukti',
  why: 'Dipakai untuk rencana yang sudah dipikirkan sebelumnya — jauh lebih sering dalam percakapan nyata daripada will.',
  form: 'am / is / are + going to + V1',
  notes: [
    'Rencana yang sudah diputuskan sebelum berbicara.',
    'Ramalan berdasar bukti yang terlihat: "Look at those clouds — it\'s going to rain."',
    'Dalam ucapan sehari-hari terdengar "gonna" (jangan dipakai dalam tulisan formal).'
  ],
  ex: [
    ['I\'m going to study medicine.', 'Saya berencana kuliah kedokteran.'],
    ['They are going to move to Bandung.', 'Mereka akan pindah ke Bandung.']
  ],
  traps: [['I am going to sleep now, I decide it now.', 'I\'ll sleep now.', 'Keputusan spontan pakai will.']],
  drills: [
    { t:'mcq', q:'Look at the sky! It ___ rain.', opts:['will','is going to','goes to','shall'], a:1, why:'Ada bukti terlihat.' },
    { t:'mcq', q:'We\'ve booked tickets. We ___ visit Japan in May.', opts:['will','are going to','go','would'], a:1 },
    { t:'fill', q:'She ___ ___ ___ start a business next year.', a:['is going to'] }
  ]
},
{
  id: 'a2-09', level: 'A2', title: 'Present Continuous for Future', titleId: 'Jadwal Pasti',
  why: 'Bentuk yang paling natural untuk janji temu — penutur asli memakainya terus-menerus.',
  form: 'am / is / are + V-ing + keterangan waktu masa depan',
  notes: [
    'Dipakai untuk rencana yang sudah terjadwal dengan orang/tempat tertentu.',
    'Harus ada penanda waktu agar tidak rancu dengan "sekarang".',
    'Untuk jadwal resmi (kereta, bioskop) pakai simple present: "The train leaves at 7."'
  ],
  ex: [
    ['I\'m meeting the dentist at four.', 'Saya ada janji dengan dokter gigi jam empat.'],
    ['We\'re flying to Medan on Friday.', 'Kami terbang ke Medan hari Jumat.']
  ],
  traps: [['The film is starting at 8 every day.', 'The film starts at 8 every day.', 'Jadwal tetap → simple present.']],
  drills: [
    { t:'mcq', q:'The train ___ at 6:15 every morning.', opts:['is leaving','leaves','will leave','left'], a:1 },
    { t:'mcq', q:'I ___ my friends tonight.', opts:['meet','am meeting','met','have met'], a:1 },
    { t:'trans', id:'Saya bertemu klien besok pagi.', a:['I am meeting the client tomorrow morning.','I\'m meeting a client tomorrow morning.'] }
  ]
},
{
  id: 'a2-10', level: 'A2', title: 'Comparatives', titleId: 'Perbandingan',
  why: 'Wajib untuk IELTS Task 1 dan segala perbandingan di speaking.',
  form: '1 suku kata: + er (cheaper)\n2 suku kata berakhiran -y: y→ier (easier)\n3+ suku kata: more + adj (more expensive)\nTak beraturan: good→better, bad→worse, far→further',
  notes: [
    'Kata pembanding selalu diikuti than.',
    'Jangan gandakan: bukan "more cheaper".',
    'Untuk menegaskan: much / far / a lot + comparative (much better).'
  ],
  ex: [
    ['This phone is cheaper than that one.', 'Ponsel ini lebih murah dari yang itu.'],
    ['Reading is more useful than scrolling.', 'Membaca lebih berguna daripada menggulir layar.'],
    ['Her English is much better now.', 'Bahasa Inggrisnya jauh lebih baik sekarang.']
  ],
  traps: [
    ['more cheaper', 'cheaper', 'Cukup satu penanda perbandingan.'],
    ['She is taller from me.', 'She is taller than me.', 'Pembanding memakai than.']
  ],
  drills: [
    { t:'mcq', q:'Jakarta is ___ than Bandung.', opts:['bigger','more big','biggest','more bigger'], a:0 },
    { t:'mcq', q:'This exercise is ___ than the last one.', opts:['difficulter','more difficult','most difficult','difficult'], a:1 },
    { t:'fill', q:'Health is ___ (good) than wealth.', a:'better' },
    { t:'trans', id:'Kota ini lebih ramai daripada kampung saya.', a:['This city is busier than my village.','This city is more crowded than my village.'] }
  ]
},
{
  id: 'a2-11', level: 'A2', title: 'Superlatives', titleId: 'Paling',
  why: 'Pasangan comparative; sering muncul saat mendeskripsikan grafik dan pengalaman.',
  form: 'the + adj-est (the cheapest) · the most + adj (the most expensive)\nTak beraturan: the best, the worst, the furthest',
  notes: [
    'Hampir selalu memakai "the".',
    'Sering diikuti in (tempat) atau of (kelompok): the best in the class, the tallest of them all.',
    'Bisa dipertegas: one of the most important factors.'
  ],
  ex: [
    ['This is the cheapest option.', 'Ini pilihan termurah.'],
    ['She is the most experienced teacher here.', 'Dia guru paling berpengalaman di sini.']
  ],
  traps: [['He is most tall.', 'He is the tallest.', 'Superlatif pendek memakai -est + the.']],
  drills: [
    { t:'mcq', q:'It was ___ day of my life.', opts:['the happiest','the most happy','happier','happiest'], a:0 },
    { t:'mcq', q:'This is one of ___ museums in Asia.', opts:['the most famous','most famous','the famousest','more famous'], a:0 },
    { t:'fill', q:'Which is ___ (good) restaurant here?', a:['the best'] }
  ]
},
{
  id: 'a2-12', level: 'A2', title: 'as … as', titleId: 'Sama … dengan',
  why: 'Membuat perbandingan terasa lebih halus dan natural.',
  form: 'as + adj/adv + as · not as/so + adj + as',
  notes: [
    '"as … as" = setara. "not as … as" = kurang dari.',
    'Bisa dipakai untuk kata keterangan: "He runs as fast as I do."',
    'Ungkapan berguna: twice as expensive as, half as long as.'
  ],
  ex: [
    ['This bag is as good as the branded one.', 'Tas ini sebagus yang bermerek.'],
    ['The test wasn\'t as hard as I expected.', 'Tesnya tidak sesulit yang saya kira.']
  ],
  traps: [['as cheaper as', 'as cheap as', 'Bentuk dasar di antara as … as.']],
  drills: [
    { t:'mcq', q:'My room isn\'t ___ yours.', opts:['as big as','as bigger as','so big than','big as'], a:0 },
    { t:'fill', q:'Coffee here is twice ___ expensive ___ at home.', a:['as ... as','as as'], why:'Pola: twice as … as.' },
    { t:'trans', id:'Ujian ini tidak sesulit yang lalu.', a:['This test isn\'t as difficult as the last one.'] }
  ]
},
{
  id: 'a2-13', level: 'A2', title: 'Adverbs of Manner', titleId: 'Keterangan Cara',
  why: 'Menaikkan nilai lexical resource dengan cepat, dan sering diuji lewat pilihan adjective vs adverb.',
  form: 'adj + ly (quick→quickly) · y→ily (easy→easily)\nTak beraturan: good→well, fast→fast, hard→hard, late→late',
  notes: [
    'Kata sifat menerangkan benda; kata keterangan menerangkan kata kerja.',
    'hardly BUKAN bentuk keterangan dari hard — artinya "nyaris tidak".',
    'Setelah kata kerja indra (look, sound, taste, feel, seem) pakai kata sifat: "It sounds good", bukan "well".'
  ],
  ex: [
    ['She speaks English fluently.', 'Dia berbicara bahasa Inggris dengan lancar.'],
    ['He drives carefully.', 'Dia menyetir dengan hati-hati.'],
    ['This soup tastes good.', 'Sup ini terasa enak.']
  ],
  traps: [
    ['He speaks English good.', 'He speaks English well.', 'Menerangkan kata kerja → adverb.'],
    ['She works hardly.', 'She works hard.', 'hardly = nyaris tidak.']
  ],
  drills: [
    { t:'mcq', q:'Please drive ___.', opts:['slow','slowly','slower','slowest'], a:1 },
    { t:'mcq', q:'The cake smells ___.', opts:['deliciously','delicious','deliciousy','well'], a:1, why:'Kata kerja indra + kata sifat.' },
    { t:'fill', q:'He plays the guitar very ___ (good).', a:'well' },
    { t:'mcq', q:'I ___ ever watch TV.', opts:['hard','hardly','hardy','harder'], a:1 }
  ]
},
{
  id: 'a2-14', level: 'A2', title: 'Adverbs of Frequency', titleId: 'Keterangan Frekuensi',
  why: 'Letaknya diatur ketat — sering salah taruh oleh penutur Indonesia.',
  form: 'always > usually > often > sometimes > rarely > never\nSebelum kata kerja utama, SESUDAH to be',
  notes: [
    '"I always go" tetapi "I am always late".',
    'sometimes boleh di awal kalimat: "Sometimes I walk to work."',
    'never sudah bermakna negatif — jangan digabung dengan not.'
  ],
  ex: [
    ['She usually arrives early.', 'Dia biasanya datang lebih awal.'],
    ['He is never late.', 'Dia tidak pernah terlambat.']
  ],
  traps: [
    ['I go always to the gym.', 'I always go to the gym.', 'Sebelum kata kerja utama.'],
    ['I don\'t never smoke.', 'I never smoke.', 'Negatif ganda.']
  ],
  drills: [
    { t:'mcq', q:'Mana yang benar?', opts:['She is often late.','She often is late.','Often she is late not.','She late often is.'], a:0 },
    { t:'order', words:['I','usually','have','breakfast','at','seven'], a:'I usually have breakfast at seven', id:'Saya biasanya sarapan jam tujuh.' },
    { t:'fill', q:'They ___ go to the cinema. (tidak pernah)', a:'never' }
  ]
},
{
  id: 'a2-15', level: 'A2', title: 'Quantifiers', titleId: 'Kata Jumlah',
  why: 'Salah pilih much/many langsung terdengar sebagai kesalahan dasar.',
  form: 'many / few / a few + terhitung\nmuch / little / a little + tak terhitung\nsome (kalimat positif) · any (negatif & tanya)\na lot of / plenty of / enough → keduanya',
  notes: [
    'a few = sedikit tapi cukup; few = sedikit sekali (nada negatif). Sama untuk a little vs little.',
    'some dipakai di kalimat tanya bila menawarkan: "Would you like some tea?"',
    'much jarang dipakai di kalimat positif; ganti dengan a lot of.'
  ],
  ex: [
    ['There aren\'t many seats left.', 'Tidak banyak kursi tersisa.'],
    ['I have a little free time today.', 'Saya punya sedikit waktu luang hari ini.'],
    ['Do you have any questions?', 'Apakah ada pertanyaan?']
  ],
  traps: [
    ['I have much friends.', 'I have a lot of friends.', 'much untuk tak terhitung & jarang di kalimat positif.'],
    ['I don\'t have some money.', 'I don\'t have any money.', 'Negatif memakai any.']
  ],
  drills: [
    { t:'mcq', q:'There isn\'t ___ sugar left.', opts:['many','much','a few','few'], a:1 },
    { t:'mcq', q:'She has ___ close friends — about three.', opts:['a few','few','much','little'], a:0 },
    { t:'fill', q:'Would you like ___ coffee?', a:'some' },
    { t:'mcq', q:'We didn\'t buy ___ vegetables.', opts:['some','any','much of','a'], a:1 }
  ]
},
{
  id: 'a2-16', level: 'A2', title: 'should / must / have to', titleId: 'Saran & Keharusan',
  why: 'Perbedaan mustn\'t dan don\'t have to nyaris selalu keluar di TOEIC.',
  form: 'should + V1 (saran) · must + V1 (keharusan kuat/aturan)\nhave to / has to + V1 (kewajiban dari luar)\nmustn\'t = dilarang · don\'t have to = tidak wajib',
  notes: [
    'mustn\'t ≠ don\'t have to. "You mustn\'t smoke" = dilarang. "You don\'t have to come" = boleh tidak datang.',
    'Bentuk lampau must adalah had to.',
    'shouldn\'t = sebaiknya jangan.'
  ],
  ex: [
    ['You should rest more.', 'Kamu sebaiknya lebih banyak istirahat.'],
    ['Passengers must wear a seatbelt.', 'Penumpang wajib memakai sabuk pengaman.'],
    ['I don\'t have to work on Sundays.', 'Saya tidak wajib bekerja hari Minggu.']
  ],
  traps: [
    ['You must to go.', 'You must go.', 'Modal tanpa to.'],
    ['I mustn\'t come, it\'s optional.', 'I don\'t have to come, it\'s optional.', 'mustn\'t berarti dilarang.']
  ],
  drills: [
    { t:'mcq', q:'You ___ take photos here. It\'s forbidden.', opts:['don\'t have to','mustn\'t','shouldn\'t have','needn\'t'], a:1 },
    { t:'mcq', q:'It\'s Saturday, so I ___ get up early.', opts:['mustn\'t','don\'t have to','shouldn\'t','can\'t'], a:1 },
    { t:'fill', q:'You look tired. You ___ go to bed.', a:'should' },
    { t:'trans', id:'Kamu harus membawa paspormu.', a:['You must bring your passport.','You have to bring your passport.'] }
  ]
},
{
  id: 'a2-17', level: 'A2', title: 'may / might / could (possibility)', titleId: 'Kemungkinan',
  why: 'Membuat kalimat terdengar hati-hati dan akademis — nilai plus di Writing Task 2.',
  form: 'may / might / could + V1 = mungkin\nmay not / might not = mungkin tidak',
  notes: [
    'might sedikit lebih ragu daripada may.',
    'couldn\'t bukan "mungkin tidak" — artinya "tidak mungkin/tidak bisa".',
    'Untuk esai: "This may lead to…" jauh lebih aman daripada klaim mutlak.'
  ],
  ex: [
    ['It might rain later.', 'Mungkin nanti hujan.'],
    ['This may cause serious problems.', 'Ini mungkin menimbulkan masalah serius.']
  ],
  traps: [['Maybe it will rain, maybe not, maybe yes.', 'It might rain.', 'Modal lebih ringkas daripada mengulang maybe.']],
  drills: [
    { t:'mcq', q:'She ___ be at home; her car is outside.', opts:['might','mustn\'t','can','shall'], a:0 },
    { t:'fill', q:'Taking notes ___ help you remember. (mungkin)', a:['may','might','could'] },
    { t:'trans', id:'Kebijakan ini mungkin mengurangi polusi.', a:['This policy may reduce pollution.','This policy might reduce pollution.'] }
  ]
},
{
  id: 'a2-18', level: 'A2', title: 'Object Pronouns & Word Order', titleId: 'Kata Ganti Objek & Urutan',
  why: 'Urutan baku bahasa Inggris adalah S-V-O; menggeser objek membuat kalimat sulit dipahami.',
  form: 'me, you, him, her, it, us, them\nS + V + O + (tempat) + (waktu)',
  notes: [
    'Keterangan tempat mendahului keterangan waktu: "I met her at the mall yesterday."',
    'Setelah preposisi selalu objek: between you and me (bukan "and I").',
    'Kata kerja seperti give/send/tell bisa dua objek: "He gave me a book" = "He gave a book to me".'
  ],
  ex: [
    ['I saw them at the station.', 'Saya melihat mereka di stasiun.'],
    ['She sent me a message this morning.', 'Dia mengirimi saya pesan pagi ini.']
  ],
  traps: [
    ['I met yesterday her.', 'I met her yesterday.', 'Objek langsung menempel kata kerja.'],
    ['Between you and I', 'Between you and me', 'Setelah preposisi memakai objek.']
  ],
  drills: [
    { t:'mcq', q:'Can you help ___?', opts:['I','me','my','mine'], a:1 },
    { t:'order', words:['She','bought','a','gift','for','us','yesterday'], a:'She bought a gift for us yesterday', id:'Dia membelikan kami hadiah kemarin.' },
    { t:'mcq', q:'Mana yang benar?', opts:['He gave to me a pen.','He gave me a pen.','He gave a pen me.','He me gave a pen.'], a:1 }
  ]
},
{
  id: 'a2-19', level: 'A2', title: 'Gerund vs Infinitive (dasar)', titleId: 'V-ing vs to + V',
  why: 'Bahasa Indonesia tidak membedakannya, sehingga "I enjoy to read" jadi kesalahan langganan.',
  form: 'V-ing setelah: enjoy, finish, avoid, mind, suggest, practise, keep, consider, miss, imagine\nto + V1 setelah: want, need, decide, hope, plan, promise, agree, learn, offer, refuse\nSetelah preposisi SELALU V-ing: good at swimming',
  notes: [
    'Sebagai subjek kalimat pakai V-ing: "Reading improves vocabulary."',
    'Beberapa kata kerja boleh keduanya dengan arti sama: like, love, hate, start, begin, continue.',
    'stop + V-ing = berhenti melakukan; stop + to V = berhenti untuk melakukan.'
  ],
  ex: [
    ['I enjoy listening to podcasts.', 'Saya menikmati mendengarkan podcast.'],
    ['She decided to move abroad.', 'Dia memutuskan pindah ke luar negeri.'],
    ['He is good at solving problems.', 'Dia pandai memecahkan masalah.']
  ],
  traps: [
    ['I enjoy to read.', 'I enjoy reading.', 'enjoy + V-ing.'],
    ['I want going home.', 'I want to go home.', 'want + to V.'],
    ['She is interested in learn English.', 'She is interested in learning English.', 'Setelah preposisi → V-ing.']
  ],
  drills: [
    { t:'mcq', q:'They avoid ___ during rush hour.', opts:['to drive','driving','drive','drove'], a:1 },
    { t:'mcq', q:'We hope ___ you soon.', opts:['seeing','to see','see','saw'], a:1 },
    { t:'fill', q:'She is afraid of ___ (fly).', a:'flying' },
    { t:'mcq', q:'___ every day improves fluency.', opts:['Speak','To speaking','Speaking','Spoke'], a:2 }
  ]
},
{
  id: 'a2-20', level: 'A2', title: 'Question Tags', titleId: 'Kalimat Tanya Penegas',
  why: 'Membuat percakapan terdengar natural; sering muncul di listening TOEIC Part 2.',
  form: 'Positif + tag negatif · Negatif + tag positif\nYou\'re Indonesian, aren\'t you? · She doesn\'t smoke, does she?',
  notes: [
    'Tag memakai kata bantu yang sama dengan kalimat utama.',
    'Bila tidak ada kata bantu, pakai do/does/did.',
    'Pengecualian: I am … , aren\'t I? · Let\'s go, shall we? · Imperatif + will you?'
  ],
  ex: [
    ['You live in Bogor, don\'t you?', 'Kamu tinggal di Bogor, kan?'],
    ['He hasn\'t called, has he?', 'Dia belum menelepon, kan?']
  ],
  traps: [['You are ready, isn\'t it?', 'You are ready, aren\'t you?', '"isn\'t it" bukan tag serbaguna.']],
  drills: [
    { t:'mcq', q:'She works here, ___?', opts:['isn\'t she','doesn\'t she','does she','not she'], a:1 },
    { t:'mcq', q:'They didn\'t come, ___?', opts:['did they','didn\'t they','do they','were they'], a:0 },
    { t:'fill', q:'Let\'s take a break, ___ we?', a:'shall' }
  ]
}
];
