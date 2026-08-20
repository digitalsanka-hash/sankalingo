/* Tata bahasa tingkat A1 — 20 topik pondasi.
   t = topik: { id, level, title, titleId, why, form, notes[], ex[[en,id]],
                traps[[salah, benar, sebab]], drills[] } */

export const GRAMMAR_A1 = [
{
  id: 'a1-01', level: 'A1', title: 'Verb to be (am / is / are)', titleId: 'Kata Kerja "Adalah"',
  why: 'Bahasa Indonesia tidak punya kata "adalah" yang wajib. Inilah kesalahan nomor satu pemula: "I hungry" bukan kalimat.',
  form: 'I + am · He/She/It + is · You/We/They + are\nNegatif: + not  →  I am not / isn\'t / aren\'t\nTanya: Am I …? Is he …? Are they …?',
  notes: [
    'Setiap kalimat Inggris WAJIB punya kata kerja. Kalau tidak ada kata kerja aksi, pakai to be.',
    'Singkatan lisan: I\'m, he\'s, she\'s, it\'s, you\'re, we\'re, they\'re.',
    'Jangan pakai to be bersama kata kerja aksi bentuk dasar: bukan "I am go", tapi "I go".'
  ],
  ex: [
    ['I am a teacher.', 'Saya seorang guru.'],
    ['She is from Surabaya.', 'Dia berasal dari Surabaya.'],
    ['They are not ready yet.', 'Mereka belum siap.'],
    ['Are you okay?', 'Kamu baik-baik saja?']
  ],
  traps: [
    ['I hungry.', 'I am hungry.', 'Tanpa to be, kalimat tidak punya kata kerja.'],
    ['He is work in Jakarta.', 'He works in Jakarta.', 'Sudah ada kata kerja aksi (work), to be tidak dipakai.'],
    ['My name Budi.', 'My name is Budi.', 'Kalimat identitas selalu butuh is.']
  ],
  drills: [
    { t:'mcq', q:'She ___ a nurse.', opts:['is','are','am','be'], a:0, why:'She → is.' },
    { t:'mcq', q:'They ___ not at home.', opts:['are','is','am','be'], a:0, why:'They → are.' },
    { t:'fill', q:'I ___ twenty years old.', a:'am', why:'I selalu berpasangan dengan am.' },
    { t:'mcq', q:'Mana yang benar?', opts:['I am go to school.','I go to school.','I am going school.','I going to school.'], a:1, why:'Kata kerja aksi tidak memakai to be dalam simple present.' },
    { t:'order', words:['Are','you','a','student','?'], a:'Are you a student ?', id:'Apakah kamu seorang siswa?' },
    { t:'trans', id:'Dia (perempuan) bukan guru.', a:['She is not a teacher.','She isn\'t a teacher.'] }
  ]
},
{
  id: 'a1-02', level: 'A1', title: 'Subject Pronouns', titleId: 'Kata Ganti Subjek',
  why: 'Bahasa Indonesia sering membuang subjek ("Sudah makan?"). Dalam bahasa Inggris subjek hampir selalu wajib.',
  form: 'I · you · he · she · it · we · they',
  notes: [
    'Benda dan hewan umumnya "it"; bayi juga boleh "it" bila jenis kelaminnya tidak disebut.',
    'Kalimat Inggris tanpa subjek hanya sah untuk perintah: "Sit down."',
    'Cuaca, waktu, dan jarak memakai subjek kosong "it": It is raining. It is five o\'clock.'
  ],
  ex: [
    ['We live in Bandung.', 'Kami tinggal di Bandung.'],
    ['It is very hot today.', 'Hari ini sangat panas.'],
    ['He works at a bank.', 'Dia bekerja di bank.']
  ],
  traps: [
    ['Is raining.', 'It is raining.', 'Bahasa Inggris butuh subjek walau tidak bermakna.'],
    ['Already eat?', 'Have you eaten?', 'Subjek tidak boleh hilang di kalimat tanya biasa.']
  ],
  drills: [
    { t:'mcq', q:'___ is my sister.', opts:['She','Her','Hers','She\'s not'], a:0, why:'Posisi subjek → she.' },
    { t:'fill', q:'___ is windy outside.', a:'It', why:'Cuaca memakai subjek kosong "It".' },
    { t:'mcq', q:'Budi and I → ___', opts:['we','they','us','our'], a:0, why:'Saya + orang lain = we.' },
    { t:'trans', id:'Mereka sedang menunggu di luar.', a:['They are waiting outside.'] }
  ]
},
{
  id: 'a1-03', level: 'A1', title: 'Articles a / an / the', titleId: 'Kata Sandang',
  why: 'Bahasa Indonesia tidak punya artikel sama sekali, jadi ini titik buta permanen. Penguji IELTS langsung mencatat kesalahan artikel.',
  form: 'a + bunyi konsonan · an + bunyi vokal · the + benda yang sudah jelas/spesifik',
  notes: [
    'Yang menentukan a/an adalah BUNYI, bukan huruf: a university (bunyi /j/), an hour (h tidak dibunyikan).',
    'Sebut pertama kali → a/an. Sebut lagi → the. "I saw a dog. The dog was black."',
    'Benda tunggal terhitung hampir tidak pernah berdiri sendiri tanpa artikel.',
    'Tanpa artikel untuk: nama orang, kebanyakan nama negara/kota, dan benda jamak/tak terhitung umum (Books are useful).'
  ],
  ex: [
    ['I bought a book yesterday.', 'Saya membeli sebuah buku kemarin.'],
    ['She waited for an hour.', 'Dia menunggu satu jam.'],
    ['The book on the table is mine.', 'Buku di atas meja itu milik saya.'],
    ['Water is essential for life.', 'Air itu penting bagi kehidupan.']
  ],
  traps: [
    ['I am teacher.', 'I am a teacher.', 'Pekerjaan tunggal butuh a/an.'],
    ['I go to the school every day.', 'I go to school every day.', 'Bila maksudnya kegiatan belajar, "school" tanpa the.'],
    ['She is an university student.', 'She is a university student.', 'university berbunyi /juː/ = bunyi konsonan.']
  ],
  drills: [
    { t:'mcq', q:'He is ___ engineer.', opts:['an','a','the','—'], a:0, why:'engineer diawali bunyi vokal.' },
    { t:'mcq', q:'She waited for ___ hour.', opts:['an','a','the','—'], a:0, why:'h pada hour tidak dibunyikan.' },
    { t:'fill', q:'I saw a cat. ___ cat was white.', a:'The', why:'Penyebutan kedua → the.' },
    { t:'mcq', q:'___ money can\'t buy happiness.', opts:['—','A','An','The'], a:0, why:'Benda tak terhitung dalam makna umum tanpa artikel.' },
    { t:'mcq', q:'Mana yang benar?', opts:['I am student.','I am a student.','I am the student.','I student.'], a:1, why:'Tunggal terhitung + belum spesifik → a.' },
    { t:'trans', id:'Saya butuh sebuah payung.', a:['I need an umbrella.'] }
  ]
},
{
  id: 'a1-04', level: 'A1', title: 'Plural Nouns', titleId: 'Kata Benda Jamak',
  why: 'Bahasa Indonesia menandai jamak dengan pengulangan atau angka; bahasa Inggris WAJIB memakai -s walau sudah ada angka.',
  form: 'buku → book + s · bus → buses · baby → babies · knife → knives\nTak beraturan: man→men, woman→women, child→children, foot→feet, tooth→teeth, person→people, mouse→mice',
  notes: [
    'Setelah angka lebih dari satu, -s tetap wajib: three books, bukan "three book".',
    'Akhiran -s dibunyikan /s/ (books), /z/ (dogs), atau /ɪz/ (buses) — penting untuk speaking.',
    'Benda tak terhitung tidak punya bentuk jamak: information, advice, furniture, equipment, money, luggage.'
  ],
  ex: [
    ['I have three brothers.', 'Saya punya tiga saudara laki-laki.'],
    ['The children are playing outside.', 'Anak-anak sedang bermain di luar.'],
    ['She gave me some useful advice.', 'Dia memberi saya nasihat berguna.']
  ],
  traps: [
    ['I have two book.', 'I have two books.', 'Angka >1 tetap butuh -s.'],
    ['Many informations', 'A lot of information', 'information tak terhitung.'],
    ['Two childs', 'Two children', 'Bentuk jamak tak beraturan.']
  ],
  drills: [
    { t:'fill', q:'She has five ___ (box).', a:'boxes', why:'Akhiran -x → tambah -es.' },
    { t:'mcq', q:'Mana yang benar?', opts:['three woman','three womans','three women','three womens'], a:2, why:'woman → women.' },
    { t:'mcq', q:'He gave me a lot of ___.', opts:['informations','information','informationes','an information'], a:1, why:'Tak terhitung, tidak berbentuk jamak.' },
    { t:'fill', q:'My ___ (foot) hurt after the walk.', a:'feet', why:'foot → feet.' },
    { t:'trans', id:'Ada banyak orang di sini.', a:['There are many people here.','There are a lot of people here.'] }
  ]
},
{
  id: 'a1-05', level: 'A1', title: 'Simple Present', titleId: 'Waktu Sekarang Sederhana',
  why: 'Bentuk paling sering dipakai. Kesulitan utama orang Indonesia: huruf -s pada he/she/it yang tak ada padanannya di bahasa kita.',
  form: 'I/You/We/They + V1 · He/She/It + V1-s\nNegatif: don\'t / doesn\'t + V1\nTanya: Do / Does + S + V1?',
  notes: [
    'Dipakai untuk kebiasaan, fakta umum, dan jadwal tetap.',
    'Setelah does/doesn\'t, kata kerja kembali ke bentuk dasar: "He doesn\'t work" bukan "doesn\'t works".',
    'Kata bantu waktu: always, usually, often, sometimes, never, every day.'
  ],
  ex: [
    ['I work in a hospital.', 'Saya bekerja di rumah sakit.'],
    ['She watches TV every night.', 'Dia menonton TV setiap malam.'],
    ['Water boils at 100°C.', 'Air mendidih pada 100°C.'],
    ['Do you speak English?', 'Apakah kamu bisa berbahasa Inggris?']
  ],
  traps: [
    ['He go to school.', 'He goes to school.', 'Subjek orang ketiga tunggal butuh -s.'],
    ['She doesn\'t likes coffee.', 'She doesn\'t like coffee.', 'Setelah doesn\'t, kata kerja bentuk dasar.'],
    ['Do she work here?', 'Does she work here?', 'She → does.']
  ],
  drills: [
    { t:'mcq', q:'My father ___ a taxi.', opts:['drive','drives','driving','is drive'], a:1, why:'Orang ketiga tunggal → drives.' },
    { t:'mcq', q:'They ___ live in Medan.', opts:['doesn\'t','don\'t','isn\'t','aren\'t'], a:1, why:'They → don\'t.' },
    { t:'fill', q:'___ he like spicy food?', a:'Does', why:'He → Does.' },
    { t:'mcq', q:'Mana yang benar?', opts:['She don\'t know.','She doesn\'t knows.','She doesn\'t know.','She not know.'], a:2, why:'doesn\'t + V1.' },
    { t:'order', words:['She','usually','wakes','up','at','six'], a:'She usually wakes up at six', id:'Dia biasanya bangun jam enam.' },
    { t:'trans', id:'Saya tidak minum kopi.', a:['I don\'t drink coffee.','I do not drink coffee.'] }
  ]
},
{
  id: 'a1-06', level: 'A1', title: 'Present Continuous', titleId: 'Sedang Berlangsung',
  why: 'Bahasa Indonesia memakai "sedang"; bahasa Inggris mengubah bentuk kata kerjanya, dan to be-nya sering hilang saat ditulis pemula.',
  form: 'am / is / are + V-ing\nNegatif: am/is/are + not + V-ing\nTanya: Am/Is/Are + S + V-ing?',
  notes: [
    'Untuk aksi yang terjadi SEKARANG atau rencana dekat yang sudah pasti.',
    'Ejaan -ing: make→making, sit→sitting, lie→lying.',
    'Kata kerja keadaan (know, want, like, need, believe, belong) biasanya TIDAK dipakai bentuk -ing.'
  ],
  ex: [
    ['I am studying English now.', 'Saya sedang belajar bahasa Inggris sekarang.'],
    ['They are having dinner.', 'Mereka sedang makan malam.'],
    ['We are meeting the client tomorrow.', 'Kami akan bertemu klien besok.']
  ],
  traps: [
    ['I studying now.', 'I am studying now.', 'to be tidak boleh hilang.'],
    ['I am knowing the answer.', 'I know the answer.', 'know adalah kata kerja keadaan.'],
    ['She is go to the market.', 'She is going to the market.', 'Setelah to be harus V-ing.']
  ],
  drills: [
    { t:'mcq', q:'Look! The baby ___.', opts:['sleep','sleeps','is sleeping','sleeping'], a:2, why:'Aksi sedang berlangsung.' },
    { t:'fill', q:'They ___ (wait) for the bus right now.', a:['are waiting'], why:'They + are + V-ing.' },
    { t:'mcq', q:'Mana yang SALAH?', opts:['I am reading.','She is running.','He is wanting a car.','We are cooking.'], a:2, why:'want adalah kata kerja keadaan.' },
    { t:'trans', id:'Saya sedang tidak bekerja hari ini.', a:['I am not working today.','I\'m not working today.'] }
  ]
},
{
  id: 'a1-07', level: 'A1', title: 'Simple Present vs Continuous', titleId: 'Kebiasaan vs Sedang',
  why: 'Dua bentuk ini paling sering tertukar di ujian pilihan ganda TOEIC dan TOEFL bagian struktur.',
  form: 'Kebiasaan / fakta → simple present\nSaat ini / sementara → present continuous',
  notes: [
    'Petunjuk simple present: every day, usually, always, on Mondays, never.',
    'Petunjuk continuous: now, right now, at the moment, today, this week, Look!, Listen!',
    '"I work in a bank" = pekerjaan tetap. "I am working in a bank" = sementara ini saja.'
  ],
  ex: [
    ['I usually take the bus, but today I am walking.', 'Saya biasanya naik bus, tapi hari ini saya jalan kaki.'],
    ['She teaches maths. This week she is teaching science.', 'Dia mengajar matematika. Minggu ini dia mengajar IPA.']
  ],
  traps: [
    ['Now I go to the office.', 'Now I am going to the office.', 'Kata "now" menuntut bentuk continuous.'],
    ['I am going to church every Sunday.', 'I go to church every Sunday.', 'Kebiasaan rutin → simple present.']
  ],
  drills: [
    { t:'mcq', q:'Listen! Someone ___ the piano.', opts:['plays','is playing','play','played'], a:1, why:'Listen! menandakan saat ini.' },
    { t:'mcq', q:'My brother ___ tennis every Saturday.', opts:['is playing','plays','play','playing'], a:1, why:'every Saturday = kebiasaan.' },
    { t:'fill', q:'At the moment I ___ (read) a novel.', a:['am reading'], why:'at the moment → continuous.' },
    { t:'mcq', q:'Water ___ at zero degrees.', opts:['is freezing','freezes','freeze','froze'], a:1, why:'Fakta ilmiah → simple present.' }
  ]
},
{
  id: 'a1-08', level: 'A1', title: 'There is / There are', titleId: 'Ada / Terdapat',
  why: 'Padanan langsung kata "ada". Pemula sering menulis "In my city have many malls" — terjemahan harfiah yang salah.',
  form: 'There is + benda tunggal / tak terhitung\nThere are + benda jamak\nNegatif: There isn\'t / There aren\'t',
  notes: [
    'Bentuk lampau: There was / There were.',
    'Untuk pertanyaan: Is there…? Are there…?',
    'Jangan pakai "have" untuk menyatakan keberadaan tempat.'
  ],
  ex: [
    ['There is a bank near my house.', 'Ada bank dekat rumah saya.'],
    ['There are twenty students in the class.', 'Ada dua puluh siswa di kelas.'],
    ['There isn\'t any milk left.', 'Susunya sudah habis.']
  ],
  traps: [
    ['In Jakarta have many malls.', 'There are many malls in Jakarta.', 'Keberadaan memakai there is/are, bukan have.'],
    ['There is many people.', 'There are many people.', 'people jamak → are.']
  ],
  drills: [
    { t:'mcq', q:'___ three cats in the garden.', opts:['There is','There are','It is','They are'], a:1, why:'three cats = jamak.' },
    { t:'fill', q:'___ ___ some water in the bottle.', a:['There is'], why:'water tak terhitung → is.' },
    { t:'trans', id:'Ada banyak restoran di kota saya.', a:['There are many restaurants in my city.','There are a lot of restaurants in my city.'] },
    { t:'mcq', q:'Mana yang benar?', opts:['My city has many park.','In my city have many parks.','There are many parks in my city.','Have many parks in my city.'], a:2, why:'Pola keberadaan yang benar.' }
  ]
},
{
  id: 'a1-09', level: 'A1', title: 'Possessives', titleId: 'Kepemilikan',
  why: 'Apostrof (\'s) tidak ada di bahasa Indonesia dan sering salah tempat.',
  form: 'my, your, his, her, its, our, their + benda\nBudi\'s car (tunggal) · the students\' books (jamak berakhiran -s)\nmine, yours, his, hers, ours, theirs (berdiri sendiri)',
  notes: [
    '"its" = kepunyaan; "it\'s" = it is. Ini kesalahan yang bahkan penutur asli lakukan.',
    'Untuk benda mati, lebih alami memakai "of": the roof of the house.',
    'Setelah kata ganti kepemilikan, tidak ada artikel: bukan "the my book", tapi "my book".'
  ],
  ex: [
    ['This is my sister\'s phone.', 'Ini ponsel kakak perempuan saya.'],
    ['The teachers\' room is upstairs.', 'Ruang guru ada di lantai atas.'],
    ['That book is mine.', 'Buku itu milik saya.']
  ],
  traps: [
    ['The book of Budi', 'Budi\'s book', 'Untuk orang, pakai \'s.'],
    ['Its raining.', 'It\'s raining.', 'it\'s = it is.'],
    ['The my car', 'My car', 'Tidak ada artikel sebelum kata ganti kepemilikan.']
  ],
  drills: [
    { t:'mcq', q:'This is ___ book. (milik Sari)', opts:['Sari book','Sari\'s book','Sari book\'s','the book Sari'], a:1, why:'Nama orang + \'s.' },
    { t:'mcq', q:'___ a beautiful day.', opts:['Its','It\'s','Its\'','It is\''], a:1, why:'It\'s = It is.' },
    { t:'fill', q:'That laptop is ___ (milik saya).', a:['mine'], why:'Berdiri sendiri → mine.' },
    { t:'trans', id:'Mobil orang tua saya berwarna merah.', a:['My parents\' car is red.'] }
  ]
},
{
  id: 'a1-10', level: 'A1', title: 'Demonstratives this/that/these/those', titleId: 'Ini / Itu',
  why: 'Sederhana tapi berpasangan dengan bentuk jamak yang sering dilupakan.',
  form: 'this (ini, tunggal) · these (ini, jamak)\nthat (itu, tunggal) · those (itu, jamak)',
  notes: [
    'Dekat → this/these. Jauh → that/those.',
    'Kata benda setelahnya harus cocok bentuknya: these books, bukan "these book".',
    'Di telepon: "This is Budi speaking."'
  ],
  ex: [
    ['This is my desk.', 'Ini meja saya.'],
    ['These shoes are too small.', 'Sepatu-sepatu ini terlalu kecil.'],
    ['Those buildings are new.', 'Bangunan-bangunan itu baru.']
  ],
  traps: [['These book is mine.', 'This book is mine.', 'these harus diikuti benda jamak.']],
  drills: [
    { t:'mcq', q:'___ apples look fresh.', opts:['This','That','These','It'], a:2, why:'apples jamak & dekat → These.' },
    { t:'fill', q:'___ is my friend, Andi.', a:'This', why:'Memperkenalkan orang di dekat kita.' },
    { t:'mcq', q:'Mana yang benar?', opts:['those car','those cars','that cars','these car'], a:1, why:'those + jamak.' }
  ]
},
{
  id: 'a1-11', level: 'A1', title: 'Can / Can\'t', titleId: 'Bisa / Tidak Bisa',
  why: 'Modal pertama yang perlu dikuasai — dan modal TIDAK PERNAH diikuti "to".',
  form: 'S + can + V1 · S + can\'t (cannot) + V1 · Can + S + V1?',
  notes: [
    'Menyatakan kemampuan, izin, dan permintaan sopan.',
    'Tidak ada -s pada he/she/it: "She can swim", bukan "She cans".',
    'Untuk permintaan lebih sopan pakai could: "Could you help me?"'
  ],
  ex: [
    ['I can speak a little English.', 'Saya bisa berbahasa Inggris sedikit.'],
    ['He can\'t come tonight.', 'Dia tidak bisa datang malam ini.'],
    ['Can you repeat that, please?', 'Bisakah kamu mengulanginya?']
  ],
  traps: [
    ['She can to swim.', 'She can swim.', 'Modal + kata kerja dasar, tanpa to.'],
    ['He cans drive.', 'He can drive.', 'Modal tidak berubah bentuk.']
  ],
  drills: [
    { t:'mcq', q:'She ___ play the guitar.', opts:['can to','cans','can','is can'], a:2, why:'Modal + V1.' },
    { t:'fill', q:'___ you help me, please?', a:'Can', why:'Permintaan.' },
    { t:'trans', id:'Saya tidak bisa berenang.', a:['I can\'t swim.','I cannot swim.'] }
  ]
},
{
  id: 'a1-12', level: 'A1', title: 'Imperatives', titleId: 'Kalimat Perintah',
  why: 'Satu-satunya kalimat Inggris yang boleh tanpa subjek — dan bentuk yang muncul di petunjuk soal ujian.',
  form: 'V1 … · Don\'t + V1 … · Let\'s + V1 …',
  notes: [
    'Tambahkan "please" agar sopan: "Please sit down."',
    '"Let\'s" = mari kita, ajakan untuk penutur + pendengar.',
    'Petunjuk ujian selalu imperatif: Choose the correct answer. Read the passage.'
  ],
  ex: [
    ['Close the door, please.', 'Tolong tutup pintunya.'],
    ['Don\'t touch that.', 'Jangan sentuh itu.'],
    ['Let\'s start now.', 'Ayo mulai sekarang.']
  ],
  traps: [['You close the door!', 'Close the door, please.', 'Subjek "you" membuat kalimat terdengar kasar.']],
  drills: [
    { t:'mcq', q:'___ late for class.', opts:['Not be','Don\'t be','No be','Isn\'t'], a:1, why:'Negatif imperatif: Don\'t + V1.' },
    { t:'fill', q:'___ go to the beach this weekend!', a:['Let\'s'], why:'Ajakan.' },
    { t:'trans', id:'Jangan lupa paspormu.', a:['Don\'t forget your passport.'] }
  ]
},
{
  id: 'a1-13', level: 'A1', title: 'Question Words', titleId: 'Kata Tanya',
  why: 'Urutan kata tanya bahasa Inggris terbalik dari bahasa Indonesia; ini penyebab kalimat tanya berantakan.',
  form: 'Kata tanya + kata bantu + subjek + kata kerja\nWhat / Where / When / Who / Why / How / Which / Whose / How much / How many / How long / How often',
  notes: [
    'Wajib ada kata bantu (do/does/did/is/are/can): "Where do you live?" bukan "Where you live?".',
    'Kecuali bila kata tanya itu sendiri subjeknya: "Who called you?" (tanpa did).',
    'How much untuk tak terhitung, how many untuk terhitung.'
  ],
  ex: [
    ['Where do you work?', 'Kamu bekerja di mana?'],
    ['How long does it take?', 'Berapa lama waktunya?'],
    ['Who wrote this letter?', 'Siapa yang menulis surat ini?']
  ],
  traps: [
    ['Where you live?', 'Where do you live?', 'Butuh kata bantu do.'],
    ['How much books do you have?', 'How many books do you have?', 'books terhitung → how many.']
  ],
  drills: [
    { t:'mcq', q:'___ does the film start?', opts:['What','When','Who','Which'], a:1, why:'Menanyakan waktu.' },
    { t:'mcq', q:'___ do you go to the gym?', opts:['How often','How much','How long','How many'], a:0, why:'Menanyakan frekuensi.' },
    { t:'fill', q:'___ ___ you live?', a:['Where do'], why:'Kata tanya + do.' },
    { t:'order', words:['How','many','languages','do','you','speak','?'], a:'How many languages do you speak ?', id:'Berapa bahasa yang kamu kuasai?' }
  ]
},
{
  id: 'a1-14', level: 'A1', title: 'Prepositions of Time', titleId: 'Preposisi Waktu',
  why: 'in/on/at tidak punya aturan padanan di bahasa Indonesia, jadi harus dihafal berdasarkan pola.',
  form: 'at + jam & waktu tepat (at 7 p.m., at night)\non + hari & tanggal (on Monday, on 17 August)\nin + bulan, tahun, musim, bagian hari (in July, in 2026, in the morning)',
  notes: [
    'Pengecualian penting: at night, at noon, at midnight, at the weekend (BrE) / on the weekend (AmE).',
    'Tidak pakai preposisi sebelum: today, tomorrow, yesterday, next week, last month, every day.',
    'Urutan menyempit: in (luas) → on (hari) → at (jam).'
  ],
  ex: [
    ['The meeting is at three o\'clock.', 'Rapatnya jam tiga.'],
    ['I was born in 1998.', 'Saya lahir tahun 1998.'],
    ['We travel on Sundays.', 'Kami bepergian setiap Minggu.']
  ],
  traps: [
    ['I will call you in tomorrow.', 'I will call you tomorrow.', 'tomorrow tanpa preposisi.'],
    ['She arrives in Monday.', 'She arrives on Monday.', 'Hari → on.']
  ],
  drills: [
    { t:'mcq', q:'The class starts ___ 8 a.m.', opts:['in','on','at','by'], a:2, why:'Jam → at.' },
    { t:'mcq', q:'My birthday is ___ March.', opts:['at','on','in','to'], a:2, why:'Bulan → in.' },
    { t:'fill', q:'We have a meeting ___ Friday.', a:'on', why:'Hari → on.' },
    { t:'mcq', q:'Mana yang benar?', opts:['I saw him in yesterday.','I saw him yesterday.','I saw him on yesterday.','I saw him at yesterday.'], a:1, why:'yesterday tanpa preposisi.' }
  ]
},
{
  id: 'a1-15', level: 'A1', title: 'Prepositions of Place', titleId: 'Preposisi Tempat',
  why: 'Sama seperti waktu, in/on/at tempat harus dilatih sampai otomatis.',
  form: 'in = di dalam ruang/wilayah · on = di permukaan · at = di titik/lokasi kegiatan',
  notes: [
    'at the bus stop, at school, at work, at home — titik kegiatan.',
    'in Jakarta, in the room, in the car — di dalam.',
    'on the table, on the wall, on the bus/train — permukaan atau kendaraan besar.'
  ],
  ex: [
    ['She is at the office.', 'Dia sedang di kantor.'],
    ['The keys are on the table.', 'Kuncinya di atas meja.'],
    ['They live in a small village.', 'Mereka tinggal di desa kecil.']
  ],
  traps: [
    ['I am in home.', 'I am at home.', 'home memakai at.'],
    ['He is in the bus.', 'He is on the bus.', 'Kendaraan umum besar → on.']
  ],
  drills: [
    { t:'mcq', q:'The picture is ___ the wall.', opts:['in','on','at','to'], a:1, why:'Permukaan → on.' },
    { t:'mcq', q:'I\'ll meet you ___ the station.', opts:['in','on','at','by'], a:2, why:'Titik pertemuan → at.' },
    { t:'trans', id:'Buku itu ada di dalam tas.', a:['The book is in the bag.'] }
  ]
},
{
  id: 'a1-16', level: 'A1', title: 'Adjectives: Order & Position', titleId: 'Letak Kata Sifat',
  why: 'Bahasa Indonesia menaruh sifat SETELAH benda (rumah besar); bahasa Inggris sebaliknya (big house).',
  form: 'Kata sifat + kata benda · atau to be + kata sifat\nUrutan: opini → ukuran → usia → bentuk → warna → asal → bahan → benda',
  notes: [
    'Kata sifat bahasa Inggris tidak berubah bentuk untuk jamak: two big houses, bukan "bigs".',
    'Urutan alami: a beautiful small old round brown Javanese wooden table.',
    'Praktisnya cukup ingat: opini dulu, bahan terakhir.'
  ],
  ex: [
    ['She has a beautiful red dress.', 'Dia punya gaun merah yang indah.'],
    ['The room is clean.', 'Ruangannya bersih.'],
    ['They bought two large wooden chairs.', 'Mereka membeli dua kursi kayu besar.']
  ],
  traps: [
    ['A house big', 'A big house', 'Sifat mendahului benda.'],
    ['Two bigs cars', 'Two big cars', 'Kata sifat tidak dijamakkan.']
  ],
  drills: [
    { t:'mcq', q:'Mana urutan yang benar?', opts:['a red small bag','a small red bag','a bag red small','a red bag small'], a:1, why:'Ukuran sebelum warna.' },
    { t:'order', words:['She','has','long','black','hair'], a:'She has long black hair', id:'Dia berambut hitam panjang.' },
    { t:'trans', id:'Itu mobil Jepang baru.', a:['That is a new Japanese car.'] }
  ]
},
{
  id: 'a1-17', level: 'A1', title: 'Countable & Uncountable', titleId: 'Terhitung & Tak Terhitung',
  why: 'Menentukan pilihan much/many, a/some, dan bentuk jamak. Salah di sini merembet ke banyak kesalahan lain.',
  form: 'Terhitung: a book / two books · many / a few\nTak terhitung: water, rice, money, advice, news · much / a little\nKeduanya: some, any, a lot of, plenty of',
  notes: [
    'Kata yang tak terhitung di Inggris tapi terasa terhitung di Indonesia: information, advice, furniture, equipment, luggage, homework, news, traffic, bread.',
    'Untuk menghitungnya pakai wadah: a piece of advice, two slices of bread, a bottle of water.',
    '"news" berakhiran -s tetapi tunggal: The news is good.'
  ],
  ex: [
    ['I need some information.', 'Saya butuh informasi.'],
    ['How many chairs do we have?', 'Berapa kursi yang kita punya?'],
    ['There isn\'t much time left.', 'Tidak banyak waktu tersisa.']
  ],
  traps: [
    ['Many furnitures', 'A lot of furniture', 'furniture tak terhitung.'],
    ['The news are bad.', 'The news is bad.', 'news tunggal.'],
    ['I have a homework.', 'I have homework.', 'homework tak terhitung.']
  ],
  drills: [
    { t:'mcq', q:'How ___ sugar do you want?', opts:['many','much','a few','number of'], a:1, why:'sugar tak terhitung.' },
    { t:'mcq', q:'Mana yang benar?', opts:['two advices','two pieces of advice','two advice','a advice'], a:1, why:'Pakai satuan piece.' },
    { t:'fill', q:'There are ___ (banyak) students in the hall.', a:['many','a lot of'], why:'students terhitung.' },
    { t:'mcq', q:'The news ___ shocking.', opts:['are','is','were','have'], a:1, why:'news tunggal.' }
  ]
},
{
  id: 'a1-18', level: 'A1', title: 'Simple Past: to be & regular verbs', titleId: 'Waktu Lampau Dasar',
  why: 'Bahasa Indonesia menandai waktu lewat kata keterangan ("kemarin"); bahasa Inggris WAJIB mengubah kata kerjanya.',
  form: 'was / were · V1 + ed\nNegatif: didn\'t + V1 · wasn\'t / weren\'t\nTanya: Did + S + V1? · Was/Were + S …?',
  notes: [
    'Setelah did/didn\'t, kata kerja kembali ke bentuk dasar: "I didn\'t go", bukan "didn\'t went".',
    'Ejaan -ed: stop→stopped, study→studied, like→liked.',
    'Bunyi -ed ada tiga: /t/ (worked), /d/ (played), /ɪd/ (wanted).'
  ],
  ex: [
    ['I worked late yesterday.', 'Saya bekerja sampai larut kemarin.'],
    ['They were at the beach last week.', 'Mereka di pantai minggu lalu.'],
    ['Did you call her?', 'Apakah kamu meneleponnya?']
  ],
  traps: [
    ['Yesterday I go to Bali.', 'Yesterday I went to Bali.', 'Penanda waktu lampau menuntut kata kerja lampau.'],
    ['She didn\'t went.', 'She didn\'t go.', 'didn\'t + V1.'],
    ['I was study last night.', 'I studied last night.', 'was + V1 bukan pola yang sah.']
  ],
  drills: [
    { t:'mcq', q:'We ___ the film last night.', opts:['watch','watched','watching','were watch'], a:1, why:'last night → lampau.' },
    { t:'mcq', q:'He ___ come to the party.', opts:['didn\'t','doesn\'t','wasn\'t','not'], a:0, why:'Lampau negatif → didn\'t.' },
    { t:'fill', q:'They ___ (be) very tired after the trip.', a:['were'], why:'They → were.' },
    { t:'trans', id:'Saya tidak menonton TV kemarin.', a:['I didn\'t watch TV yesterday.'] }
  ]
},
{
  id: 'a1-19', level: 'A1', title: 'Irregular Verbs (Top 50)', titleId: 'Kata Kerja Tak Beraturan',
  why: 'Lima puluh kata kerja tak beraturan menutupi lebih dari 80% pemakaian sehari-hari. Hafalkan sekali, dipakai seumur hidup.',
  form: 'V1 – V2 – V3\nbe was/were been · go went gone · do did done · have had had · say said said\nget got got(ten) · make made made · know knew known · think thought thought\ntake took taken · see saw seen · come came come · want wanted wanted (beraturan)\ngive gave given · find found found · tell told told · become became become\nleave left left · feel felt felt · put put put · bring brought brought\nbegin began begun · keep kept kept · hold held held · write wrote written\nstand stood stood · hear heard heard · let let let · mean meant meant\nset set set · meet met met · run ran run · pay paid paid · sit sat sat\nspeak spoke spoken · lie lay lain · lead led led · read read read\ngrow grew grown · lose lost lost · fall fell fallen · send sent sent\nbuild built built · understand understood understood · draw drew drawn\nbreak broke broken · spend spent spent · cut cut cut · rise rose risen\ndrive drove driven · buy bought bought · wear wore worn · choose chose chosen',
  notes: [
    'read–read–read ejaannya sama tetapi bunyinya berubah: /riːd/ → /red/ → /red/.',
    'Bentuk V3 dipakai untuk perfect tense dan kalimat pasif — jadi menghafalnya berguna dua kali.',
    'Kelompokkan yang berpola sama: bring/think/buy → -ought; keep/sleep/feel → -pt/-lt.'
  ],
  ex: [
    ['I went to Bali last year.', 'Saya pergi ke Bali tahun lalu.'],
    ['She has written three books.', 'Dia telah menulis tiga buku.'],
    ['They bought a new house.', 'Mereka membeli rumah baru.']
  ],
  traps: [['He goed home.', 'He went home.', 'go tak beraturan.']],
  drills: [
    { t:'fill', q:'V2 dari "buy" adalah ___.', a:'bought' },
    { t:'fill', q:'V3 dari "write" adalah ___.', a:'written' },
    { t:'mcq', q:'V2 dari "think"', opts:['thinked','thought','thank','thunk'], a:1 },
    { t:'fill', q:'V3 dari "break" adalah ___.', a:'broken' },
    { t:'mcq', q:'V2 dari "take"', opts:['took','taken','taked','takes'], a:0 }
  ]
},
{
  id: 'a1-20', level: 'A1', title: 'Conjunctions and / but / or / because / so', titleId: 'Kata Sambung Dasar',
  why: 'Menyambung kalimat pendek jadi kalimat panjang — langkah pertama menaikkan skor coherence.',
  form: 'and (dan) · but (tetapi) · or (atau) · because (karena) · so (jadi) · then (lalu)',
  notes: [
    'because + kalimat lengkap: "because it was raining" (bukan "because of raining").',
    'because of + kata benda: "because of the rain".',
    'Jangan pakai "but" dan "although" bersamaan dalam satu kalimat.'
  ],
  ex: [
    ['I was tired, so I went to bed early.', 'Saya lelah, jadi saya tidur lebih awal.'],
    ['She studies hard because she wants a scholarship.', 'Dia belajar keras karena ingin beasiswa.'],
    ['We can walk or take a taxi.', 'Kita bisa jalan kaki atau naik taksi.']
  ],
  traps: [
    ['Although it was late, but we continued.', 'Although it was late, we continued.', 'Satu penghubung saja per hubungan.'],
    ['Because of it was raining', 'Because it was raining', 'because of diikuti kata benda.']
  ],
  drills: [
    { t:'mcq', q:'I stayed home ___ I was sick.', opts:['so','because','but','or'], a:1, why:'Menyatakan sebab.' },
    { t:'mcq', q:'It was expensive, ___ I bought it anyway.', opts:['because','so','but','and'], a:2, why:'Kontras.' },
    { t:'fill', q:'The road was flooded, ___ we turned back.', a:'so', why:'Menyatakan akibat.' },
    { t:'trans', id:'Saya suka teh tetapi saya tidak suka kopi.', a:['I like tea but I don\'t like coffee.'] }
  ]
}
];
