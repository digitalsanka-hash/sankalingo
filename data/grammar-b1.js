/* Tata bahasa tingkat B1 — 22 topik. */

export const GRAMMAR_B1 = [
{
  id: 'b1-01', level: 'B1', title: 'Present Perfect Continuous', titleId: 'Perfect Berlangsung',
  why: 'Menekankan DURASI kegiatan yang masih berjalan — jawaban favorit penguji untuk pertanyaan "How long…?".',
  form: 'have / has + been + V-ing',
  notes: [
    'Menyoroti lamanya proses, bukan hasil akhirnya.',
    'Bandingkan: "I have read three books" (hasil) vs "I have been reading all day" (proses).',
    'Kata kerja keadaan (know, be, like) tidak dipakai dalam bentuk ini.'
  ],
  ex: [
    ['I have been studying English for three years.', 'Saya sudah belajar bahasa Inggris tiga tahun.'],
    ['She has been working since 8 a.m.', 'Dia sudah bekerja sejak jam 8 pagi.'],
    ['It has been raining all morning.', 'Hujan turun sepanjang pagi.']
  ],
  traps: [
    ['I have been knowing him for years.', 'I have known him for years.', 'know kata kerja keadaan.'],
    ['I am studying here since 2020.', 'I have been studying here since 2020.', 'since menuntut bentuk perfect.']
  ],
  drills: [
    { t:'mcq', q:'They ___ for two hours and still aren\'t finished.', opts:['have waited','have been waiting','are waiting','waited'], a:1 },
    { t:'mcq', q:'I ___ her since childhood.', opts:['have been knowing','have known','am knowing','know'], a:1 },
    { t:'fill', q:'How long ___ you ___ (work) here?', a:['have been working','have you been working'] },
    { t:'trans', id:'Dia sudah menunggu selama satu jam.', a:['He has been waiting for an hour.','She has been waiting for an hour.'] }
  ]
},
{
  id: 'b1-02', level: 'B1', title: 'Past Perfect', titleId: 'Lampau dari Lampau',
  why: 'Menyusun urutan cerita. Tanpa ini, narasi IELTS Part 2 terasa datar.',
  form: 'had + V3',
  notes: [
    'Menandai kejadian yang lebih dulu terjadi di antara dua kejadian lampau.',
    'Sering dipasangkan dengan before, after, by the time, already, when.',
    'Kalau urutannya sudah jelas dari kata before/after, past simple pun diterima.'
  ],
  ex: [
    ['When I arrived, the train had already left.', 'Saat saya tiba, keretanya sudah berangkat.'],
    ['She had never flown before that trip.', 'Dia belum pernah naik pesawat sebelum perjalanan itu.']
  ],
  traps: [['When I arrived, the train already left.', '… had already left.', 'Kejadian lebih dulu → past perfect.']],
  drills: [
    { t:'mcq', q:'By the time we got there, the show ___.', opts:['started','has started','had started','was starting'], a:2 },
    { t:'fill', q:'He told me he ___ (lose) his wallet.', a:['had lost'] },
    { t:'mcq', q:'Mana urutan yang tepat?', opts:['I ate after I had washed my hands.','I had eaten after I washed my hands.','I eat after I had washed.','I had ate after washing.'], a:0 }
  ]
},
{
  id: 'b1-03', level: 'B1', title: 'Past Perfect Continuous', titleId: 'Durasi Sebelum Lampau',
  why: 'Menjelaskan sebab dari keadaan lampau — kalimat sebab-akibat yang terdengar canggih.',
  form: 'had been + V-ing',
  notes: [
    'Menekankan berapa lama sesuatu berlangsung sebelum titik lampau.',
    'Sering menerangkan kenapa keadaan lampau terjadi: "He was tired because he had been driving all night."'
  ],
  ex: [
    ['She had been working there for a decade before she resigned.', 'Dia sudah bekerja di sana satu dekade sebelum mengundurkan diri.'],
    ['The ground was wet; it had been raining.', 'Tanahnya basah; sebelumnya hujan.']
  ],
  traps: [['He was tired because he drove all night.', '… because he had been driving all night.', 'Menjelaskan durasi sebelumnya.']],
  drills: [
    { t:'mcq', q:'They ___ for hours when the rescue team arrived.', opts:['walked','had been walking','were walk','have walked'], a:1 },
    { t:'fill', q:'I ___ ___ ___ (study) for six hours before the exam started.', a:['had been studying'] }
  ]
},
{
  id: 'b1-04', level: 'B1', title: 'Future Continuous & Future Perfect', titleId: 'Masa Depan Lanjutan',
  why: 'Menaikkan variasi tenses — kriteria penilaian grammatical range di IELTS.',
  form: 'will be + V-ing (sedang berlangsung nanti)\nwill have + V3 (selesai sebelum titik waktu nanti)\nwill have been + V-ing (durasi sampai titik nanti)',
  notes: [
    '"This time tomorrow I will be flying to Tokyo."',
    '"By 2030 the city will have doubled in size."',
    'Future perfect sangat berguna untuk esai prediksi.'
  ],
  ex: [
    ['At 9 p.m. I will be studying.', 'Jam 9 malam saya akan sedang belajar.'],
    ['By next June, she will have graduated.', 'Sampai Juni depan, dia sudah lulus.']
  ],
  traps: [['By 2030 the population will double.', 'By 2030 the population will have doubled.', '"By + waktu" menuntut future perfect.']],
  drills: [
    { t:'mcq', q:'This time next week I ___ on a beach.', opts:['will lie','will be lying','will have lain','lie'], a:1 },
    { t:'mcq', q:'By the end of the year, we ___ the project.', opts:['will finish','will have finished','finish','will be finishing'], a:1 },
    { t:'fill', q:'By 2035, sea levels ___ ___ ___ (rise) further.', a:['will have risen'] }
  ]
},
{
  id: 'b1-05', level: 'B1', title: 'Zero & First Conditional', includes:'if', titleId: 'Pengandaian Nyata',
  why: 'Kesalahan klasik: memakai will di anak kalimat if. Sekali paham, hilang selamanya.',
  form: 'Zero: If + present, present (fakta selalu benar)\nFirst: If + present, will + V1 (kemungkinan nyata di masa depan)',
  notes: [
    'Setelah if JANGAN pakai will: "If it rains" bukan "If it will rain".',
    'Aturan sama berlaku untuk when, as soon as, until, before, after.',
    'Boleh mengganti will dengan may/might/can/should sesuai derajat kepastian.'
  ],
  ex: [
    ['If you heat water, it boils.', 'Jika air dipanaskan, ia mendidih.'],
    ['If it rains, we will cancel the trip.', 'Jika hujan, kami akan membatalkan perjalanan.'],
    ['I\'ll call you as soon as I arrive.', 'Saya akan menelepon begitu saya tiba.']
  ],
  traps: [
    ['If it will rain, we stay home.', 'If it rains, we will stay home.', 'will hanya di induk kalimat.'],
    ['When I will finish, I call you.', 'When I finish, I will call you.', 'Sama untuk when.']
  ],
  drills: [
    { t:'mcq', q:'If you ___ hard, you will pass.', opts:['will study','study','studied','are studying'], a:1 },
    { t:'mcq', q:'We\'ll leave as soon as the rain ___.', opts:['will stop','stops','stopped','is stopping'], a:1 },
    { t:'fill', q:'If she ___ (not hurry), she will miss the bus.', a:['doesn\'t hurry'] },
    { t:'trans', id:'Kalau kamu belajar tiap hari, kamu akan cepat maju.', a:['If you study every day, you will improve quickly.'] }
  ]
},
{
  id: 'b1-06', level: 'B1', title: 'Second Conditional', titleId: 'Pengandaian Tidak Nyata',
  why: 'Bentuk wajib untuk pertanyaan hipotetis IELTS Speaking Part 3.',
  form: 'If + past simple, would + V1',
  notes: [
    'Bentuk lampau di sini bukan berarti masa lalu — melainkan "tidak nyata sekarang".',
    'Untuk be, bahasa formal memakai were untuk semua subjek: "If I were you…".',
    'would bisa diganti could/might untuk melembutkan.'
  ],
  ex: [
    ['If I had more time, I would learn Japanese.', 'Kalau saya punya lebih banyak waktu, saya akan belajar bahasa Jepang.'],
    ['If I were you, I would take the test earlier.', 'Kalau saya jadi kamu, saya akan ikut tes lebih awal.']
  ],
  traps: [
    ['If I would have money, I would travel.', 'If I had money, I would travel.', 'would tidak muncul setelah if.'],
    ['If I was you', 'If I were you', 'Ungkapan baku memakai were.']
  ],
  drills: [
    { t:'mcq', q:'If I ___ rich, I would open a school.', opts:['am','was','were','would be'], a:2 },
    { t:'mcq', q:'She ___ move abroad if she got the job.', opts:['will','would','wills','would to'], a:1 },
    { t:'fill', q:'If we ___ (live) closer, we would meet often.', a:'lived' },
    { t:'trans', id:'Kalau saya punya mobil, saya akan mengantarmu.', a:['If I had a car, I would drive you.','If I had a car, I would take you.'] }
  ]
},
{
  id: 'b1-07', level: 'B1', title: 'Third Conditional', titleId: 'Penyesalan Masa Lalu',
  why: 'Menyatakan penyesalan — muncul di speaking dan menaikkan nilai kompleksitas kalimat.',
  form: 'If + had + V3, would have + V3',
  notes: [
    'Membicarakan sesuatu yang TIDAK terjadi di masa lalu.',
    'Bisa dipendekkan tanpa if: "Had I known, I would have called."',
    'Ganti would dengan could/might untuk kemungkinan.'
  ],
  ex: [
    ['If I had studied harder, I would have passed.', 'Kalau saya belajar lebih giat, saya pasti lulus.'],
    ['She wouldn\'t have missed the flight if she had left earlier.', 'Dia tidak akan ketinggalan pesawat kalau berangkat lebih awal.']
  ],
  traps: [['If I would have known…', 'If I had known…', 'would tidak dipakai setelah if.']],
  drills: [
    { t:'mcq', q:'If they ___ earlier, they would have caught the train.', opts:['left','had left','would leave','have left'], a:1 },
    { t:'mcq', q:'I ___ you if I had had your number.', opts:['would call','would have called','called','had called'], a:1 },
    { t:'fill', q:'If it ___ (not rain), we would have gone out.', a:['hadn\'t rained','had not rained'] }
  ]
},
{
  id: 'b1-08', level: 'B1', title: 'Passive Voice', titleId: 'Kalimat Pasif',
  why: 'Bahasa Indonesia gemar bentuk pasif (di-), jadi konsepnya sudah familier — tinggal polanya yang harus tepat.',
  form: 'be (sesuai tenses) + V3 (+ by pelaku)\nis made · was built · has been sent · will be done · can be seen',
  notes: [
    'Dipakai bila pelaku tidak penting, tidak diketahui, atau ingin disembunyikan.',
    'Gaya akademik dan laporan sangat menyukai pasif: "The data were collected in 2024."',
    'Hanya kata kerja bertransitif (punya objek) yang bisa dipasifkan.'
  ],
  ex: [
    ['The bridge was built in 1998.', 'Jembatan itu dibangun tahun 1998.'],
    ['English is spoken all over the world.', 'Bahasa Inggris dituturkan di seluruh dunia.'],
    ['The report has been submitted.', 'Laporannya sudah dikirim.']
  ],
  traps: [
    ['The book was wrote by him.', 'The book was written by him.', 'Pasif memakai V3.'],
    ['The accident was happened.', 'The accident happened.', 'happen tidak bertransitif.']
  ],
  drills: [
    { t:'mcq', q:'The letters ___ yesterday.', opts:['were sent','was sent','sent','have sent'], a:0 },
    { t:'mcq', q:'This road ___ next year.', opts:['will repair','will be repaired','is repairing','repairs'], a:1 },
    { t:'fill', q:'Rice ___ (grow) in many parts of Asia.', a:['is grown'] },
    { t:'trans', id:'Laporan itu sedang diperiksa.', a:['The report is being checked.','The report is being reviewed.'] }
  ]
},
{
  id: 'b1-09', level: 'B1', title: 'Defining Relative Clauses', titleId: 'Anak Kalimat Penjelas',
  why: 'Alat utama menggabungkan kalimat pendek jadi kalimat kompleks — inti nilai grammar band 7.',
  form: 'who (orang) · which (benda) · that (keduanya) · whose (kepemilikan) · where (tempat) · when (waktu)',
  notes: [
    'Tidak memakai koma karena informasinya penting untuk mengenali bendanya.',
    'that boleh menggantikan who/which dalam klausa penjelas.',
    'Bila kata ganti itu berperan sebagai objek, boleh dihilangkan: "The book (that) I bought…".',
    'Jangan ulangi objeknya: bukan "The book that I bought it".'
  ],
  ex: [
    ['The man who called you is my uncle.', 'Pria yang meneleponmu adalah paman saya.'],
    ['This is the house where I grew up.', 'Ini rumah tempat saya dibesarkan.'],
    ['I know a student whose father is a pilot.', 'Saya kenal seorang siswa yang ayahnya pilot.']
  ],
  traps: [
    ['The book which I bought it was cheap.', 'The book which I bought was cheap.', 'Objek tidak diulang.'],
    ['The woman which helped me', 'The woman who helped me', 'Orang memakai who/that.']
  ],
  drills: [
    { t:'mcq', q:'The phone ___ I bought last week is broken.', opts:['who','whose','that','where'], a:2 },
    { t:'mcq', q:'She is the teacher ___ students won the contest.', opts:['who','whose','which','whom'], a:1 },
    { t:'fill', q:'That is the café ___ we first met.', a:'where' },
    { t:'trans', id:'Orang yang tinggal di sebelah adalah dokter.', a:['The person who lives next door is a doctor.'] }
  ]
},
{
  id: 'b1-10', level: 'B1', title: 'Non-defining Relative Clauses', titleId: 'Keterangan Tambahan',
  why: 'Menambahkan informasi ekstra tanpa memutus alur — sangat berguna di writing akademik.',
  form: ', who … , · , which … , (selalu dengan koma, tidak boleh that)',
  notes: [
    'Informasinya bisa dibuang tanpa merusak makna inti.',
    'that TIDAK PERNAH dipakai di sini.',
    'which bisa merujuk seluruh kalimat: "He passed the test, which surprised everyone."'
  ],
  ex: [
    ['My brother, who lives in Bali, is a chef.', 'Kakak saya, yang tinggal di Bali, seorang koki.'],
    ['The museum, which opened in 2020, is free.', 'Museum itu, yang dibuka tahun 2020, gratis.']
  ],
  traps: [['My father, that works abroad, …', 'My father, who works abroad, …', 'that dilarang di klausa berkoma.']],
  drills: [
    { t:'mcq', q:'Jakarta, ___ is the capital, has 10 million people.', opts:['that','which','who','where'], a:1 },
    { t:'mcq', q:'Mana yang benar?', opts:['She failed, that upset her.','She failed, which upset her.','She failed which upset her.','She failed, who upset her.'], a:1 }
  ]
},
{
  id: 'b1-11', level: 'B1', title: 'Reported Speech: Statements', titleId: 'Kalimat Tidak Langsung',
  why: 'Muncul di listening dan reading; juga alat untuk mengutip sumber di writing.',
  form: 'said (that) + kalimat dengan tenses mundur satu langkah\npresent→past · past→past perfect · will→would · can→could · must→had to',
  notes: [
    'Kata ganti dan keterangan waktu ikut bergeser: today→that day, tomorrow→the next day, here→there.',
    'Bila isinya masih benar sampai sekarang, pergeseran boleh tidak dilakukan.',
    'say tidak butuh objek; tell wajib: "He told me that…".'
  ],
  ex: [
    ['She said (that) she was tired.', 'Dia bilang dia lelah.'],
    ['He told me he would come the next day.', 'Dia bilang dia akan datang keesokan harinya.']
  ],
  traps: [
    ['He said me that…', 'He told me that… / He said that…', 'say tanpa objek orang.'],
    ['She said she is busy.', 'She said she was busy.', 'Tenses mundur satu langkah.']
  ],
  drills: [
    { t:'mcq', q:'"I am busy," she said. → She said she ___ busy.', opts:['is','was','has been','will be'], a:1 },
    { t:'mcq', q:'"I will call you." → He said he ___ call me.', opts:['will','would','shall','can'], a:1 },
    { t:'fill', q:'"I can help." → She said she ___ help.', a:'could' }
  ]
},
{
  id: 'b1-12', level: 'B1', title: 'Reported Questions & Commands', titleId: 'Melaporkan Tanya & Perintah',
  why: 'Susunan katanya kembali ke urutan kalimat berita — ini yang paling sering keliru.',
  form: 'asked (+ objek) + if/whether + S + V (untuk yes/no)\nasked + kata tanya + S + V (untuk wh-)\ntold / asked + objek + to + V1 (perintah)',
  notes: [
    'Tidak ada do/does/did di kalimat laporan.',
    'Tanda tanya hilang.',
    'Larangan: told me not to + V1.'
  ],
  ex: [
    ['She asked if I was ready.', 'Dia bertanya apakah saya siap.'],
    ['He asked where I lived.', 'Dia bertanya di mana saya tinggal.'],
    ['The teacher told us to be quiet.', 'Guru menyuruh kami diam.']
  ],
  traps: [
    ['He asked where did I live.', 'He asked where I lived.', 'Urutan kembali ke kalimat berita.'],
    ['She asked me that I was ok.', 'She asked me if I was ok.', 'Yes/no memakai if/whether.']
  ],
  drills: [
    { t:'mcq', q:'She asked me ___ I liked the food.', opts:['that','if','what','did'], a:1 },
    { t:'mcq', q:'He asked what time ___.', opts:['does the film start','did the film start','the film started','the film did start'], a:2 },
    { t:'fill', q:'"Don\'t be late." → She told me ___ ___ be late.', a:['not to'] }
  ]
},
{
  id: 'b1-13', level: 'B1', title: 'used to / would / be used to', titleId: 'Kebiasaan Lama & Terbiasa',
  why: 'Tiga bentuk mirip dengan arti berbeda jauh — jebakan klasik soal pilihan ganda.',
  form: 'used to + V1 = dulu biasa (sekarang tidak lagi)\nwould + V1 = kebiasaan lampau berulang (bukan keadaan)\nbe/get used to + V-ing/kata benda = terbiasa dengan',
  notes: [
    'Untuk keadaan lampau hanya used to yang boleh: "I used to be shy" (bukan "would be shy").',
    'be used to diikuti V-ing karena "to" di sini preposisi.',
    'Negatif: didn\'t use to (tanpa d).'
  ],
  ex: [
    ['I used to smoke, but I quit.', 'Dulu saya merokok, tapi sudah berhenti.'],
    ['Every summer we would visit our grandparents.', 'Setiap musim panas kami mengunjungi kakek-nenek.'],
    ['I\'m used to waking up early.', 'Saya sudah terbiasa bangun pagi.']
  ],
  traps: [
    ['I am used to wake up early.', 'I am used to waking up early.', '"to" di sini preposisi → V-ing.'],
    ['I used to have a car when I was young — I still have it.', 'I have had a car since I was young.', 'used to berarti sudah tidak lagi.']
  ],
  drills: [
    { t:'mcq', q:'She ___ live in Surabaya, but now she\'s in Jakarta.', opts:['used to','is used to','uses to','would be'], a:0 },
    { t:'mcq', q:'He isn\'t used to ___ in cold weather.', opts:['work','working','worked','works'], a:1 },
    { t:'fill', q:'I didn\'t ___ ___ like vegetables.', a:['use to'] }
  ]
},
{
  id: 'b1-14', level: 'B1', title: 'Modals of Deduction (present)', titleId: 'Menyimpulkan',
  why: 'Menunjukkan tingkat keyakinan — kemampuan yang dinilai tinggi dalam speaking.',
  form: 'must be (pasti) · might/may/could be (mungkin) · can\'t be (pasti bukan)',
  notes: [
    'Lawan dari must be BUKAN mustn\'t be, melainkan can\'t be.',
    'Bisa digabung continuous: "He must be working right now."',
    'Sangat berguna menjawab pertanyaan gambar di TOEIC Part 1.'
  ],
  ex: [
    ['She must be tired after that flight.', 'Dia pasti lelah setelah penerbangan itu.'],
    ['That can\'t be his brother — they look nothing alike.', 'Itu pasti bukan adiknya — sama sekali tidak mirip.']
  ],
  traps: [['That mustn\'t be true.', 'That can\'t be true.', 'Penyangkalan dugaan memakai can\'t.']],
  drills: [
    { t:'mcq', q:'The lights are off. They ___ be at home.', opts:['must','can\'t','should','have to'], a:1 },
    { t:'mcq', q:'He\'s been studying all night. He ___ be exhausted.', opts:['can\'t','must','shouldn\'t','may not'], a:1 },
    { t:'fill', q:'I\'m not sure — she ___ be in a meeting.', a:['might','may','could'] }
  ]
},
{
  id: 'b1-15', level: 'B1', title: 'Modals of Deduction (past)', titleId: 'Menyimpulkan Masa Lalu',
  why: 'Bentuk "must have + V3" memberi kesan penguasaan tata bahasa tingkat lanjut.',
  form: 'must have + V3 (pasti sudah) · can\'t have + V3 (pasti tidak) · might/could have + V3 (mungkin)\nshould have + V3 (seharusnya — tapi tidak terjadi)',
  notes: [
    'should have menyatakan penyesalan atau kritik.',
    'needn\'t have + V3 = sebenarnya tidak perlu, tapi terlanjur dilakukan.',
    'Dalam ucapan cepat terdengar "must\'ve", "should\'ve" — bukan "must of".'
  ],
  ex: [
    ['He must have forgotten the meeting.', 'Dia pasti lupa rapatnya.'],
    ['You should have told me earlier.', 'Kamu seharusnya memberi tahu saya lebih awal.']
  ],
  traps: [['I should of gone.', 'I should have gone.', '"of" salah dengar dari "\'ve".']],
  drills: [
    { t:'mcq', q:'The road is wet. It ___ rained.', opts:['must have','can\'t have','should have','would have'], a:0 },
    { t:'mcq', q:'You failed? You ___ studied more.', opts:['must have','should have','can\'t have','needn\'t have'], a:1 },
    { t:'fill', q:'She ___ ___ ___ (not see) my message.', a:['can\'t have seen','may not have seen'] }
  ]
},
{
  id: 'b1-16', level: 'B1', title: 'too / enough / so / such', titleId: 'Terlalu, Cukup, Begitu',
  why: 'Susunan katanya kaku dan sering tertukar dalam terjemahan langsung.',
  form: 'too + adj (+ for sb) + to V1\nadj + enough / enough + kata benda\nso + adj/adv + that … · such + (a) + adj + kata benda + that …',
  notes: [
    'too selalu bernada negatif: melebihi batas.',
    'enough SESUDAH kata sifat tapi SEBELUM kata benda: "old enough", "enough money".',
    'so + kata sifat, such + kata benda.'
  ],
  ex: [
    ['The coffee is too hot to drink.', 'Kopinya terlalu panas untuk diminum.'],
    ['She isn\'t old enough to vote.', 'Dia belum cukup umur untuk memilih.'],
    ['It was such a long film that I fell asleep.', 'Filmnya begitu panjang sampai saya tertidur.']
  ],
  traps: [
    ['She is enough old.', 'She is old enough.', 'enough setelah kata sifat.'],
    ['It was so a good film.', 'It was such a good film.', 'Ada kata benda → such.']
  ],
  drills: [
    { t:'mcq', q:'This bag is ___ heavy for me to carry.', opts:['too','so','such','enough'], a:0 },
    { t:'mcq', q:'It was ___ an interesting book.', opts:['so','such','too','very much'], a:1 },
    { t:'fill', q:'We don\'t have ___ time to finish.', a:'enough' },
    { t:'trans', id:'Dia terlalu lelah untuk keluar.', a:['He is too tired to go out.','She is too tired to go out.'] }
  ]
},
{
  id: 'b1-17', level: 'B1', title: 'make / let / help / get someone to do', titleId: 'Menyuruh & Membiarkan',
  why: 'Setiap kata kerja punya pola berbeda; salah pola langsung terdengar janggal.',
  form: 'make + sb + V1 (memaksa) · let + sb + V1 (mengizinkan)\nhelp + sb + (to) V1 · get + sb + to V1 (membujuk) · have + sb + V1 (menugaskan)',
  notes: [
    'Dalam bentuk pasif, make berubah memakai to: "He was made to apologise."',
    'allow/permit memakai pola berbeda: allow sb TO do.',
    'have something done = menyuruh orang lain mengerjakan: "I had my car repaired."'
  ],
  ex: [
    ['My boss made me rewrite the report.', 'Bos saya menyuruh saya menulis ulang laporannya.'],
    ['Let me explain.', 'Biar saya jelaskan.'],
    ['I got my brother to help me.', 'Saya membujuk adik saya untuk membantu.']
  ],
  traps: [
    ['She made me to wait.', 'She made me wait.', 'make + V1 tanpa to.'],
    ['My parents let me to go.', 'My parents let me go.', 'let + V1 tanpa to.']
  ],
  drills: [
    { t:'mcq', q:'They made him ___ the truth.', opts:['to tell','tell','telling','told'], a:1 },
    { t:'mcq', q:'I\'ll get someone ___ the door.', opts:['fix','to fix','fixing','fixed'], a:1 },
    { t:'fill', q:'I had my laptop ___ (repair) yesterday.', a:'repaired' }
  ]
},
{
  id: 'b1-18', level: 'B1', title: 'Phrasal Verb Grammar', titleId: 'Tata Letak Frasa Kerja',
  why: 'Tahu artinya saja tidak cukup — posisi objeknya juga diuji.',
  form: 'Dapat dipisah: turn the TV on / turn it on (kata ganti WAJIB di tengah)\nTidak dapat dipisah: look after him (bukan "look him after")',
  notes: [
    'Kalau objeknya kata ganti (it, them, him), frasa kerja yang bisa dipisah HARUS dipisah.',
    'Frasa kerja tiga kata umumnya tidak dapat dipisah: put up with it, look forward to it.',
    'Setelah "look forward to" pakai V-ing karena to di situ preposisi.'
  ],
  ex: [
    ['Turn it off, please.', 'Tolong matikan itu.'],
    ['I look forward to hearing from you.', 'Saya menantikan kabar darimu.']
  ],
  traps: [
    ['Turn off it.', 'Turn it off.', 'Kata ganti diletakkan di tengah.'],
    ['I look forward to hear from you.', 'I look forward to hearing from you.', 'to preposisi → V-ing.']
  ],
  drills: [
    { t:'mcq', q:'The lamp is on. Please ___.', opts:['turn off it','turn it off','off turn it','turn off'], a:1 },
    { t:'mcq', q:'I can\'t put up ___ this noise.', opts:['with','on','to','for'], a:0 },
    { t:'fill', q:'I look forward to ___ (meet) you.', a:'meeting' }
  ]
},
{
  id: 'b1-19', level: 'B1', title: 'Articles: advanced patterns', titleId: 'Artikel Tingkat Lanjut',
  why: 'Artikel tetap jadi penyumbang kesalahan terbesar sampai level tinggi.',
  form: 'the + sungai/laut/pegunungan/kepulauan/negara jamak (the Nile, the Alps, the Philippines)\ntanpa the + benua/negara tunggal/kota/gunung tunggal (Asia, Indonesia, Jakarta, Mount Merapi)\nthe + superlatif, urutan, alat musik, benda unik (the best, the first, the piano, the sun)',
  notes: [
    'Benda jamak dalam makna umum tanpa artikel: "Cars pollute cities."',
    'the + kata sifat = kelompok orang: the poor, the elderly.',
    'Bandingkan: "go to bed" (untuk tidur) vs "go to the bed" (ke ranjang tertentu).'
  ],
  ex: [
    ['The Philippines is an archipelago.', 'Filipina adalah negara kepulauan.'],
    ['She plays the violin beautifully.', 'Dia memainkan biola dengan indah.'],
    ['The rich should pay more tax.', 'Orang kaya seharusnya membayar pajak lebih.']
  ],
  traps: [
    ['I live in the Indonesia.', 'I live in Indonesia.', 'Negara tunggal tanpa the.'],
    ['She plays piano.', 'She plays the piano.', 'Alat musik memakai the.']
  ],
  drills: [
    { t:'mcq', q:'We sailed down ___ Mekong.', opts:['—','a','the','an'], a:2 },
    { t:'mcq', q:'___ elderly need better support.', opts:['A','An','The','—'], a:2 },
    { t:'mcq', q:'He went to ___ bed at ten.', opts:['the','a','—','an'], a:2 }
  ]
},
{
  id: 'b1-20', level: 'B1', title: 'Dependent Prepositions', titleId: 'Preposisi Melekat',
  why: 'Tidak ada logikanya — harus dihafal berpasangan. Kesalahan di sini langsung terdengar.',
  form: 'depend ON · interested IN · good AT · afraid OF · married TO · listen TO\nsimilar TO · different FROM · responsible FOR · consist OF · belong TO\nfocus ON · rely ON · apply FOR (pekerjaan) / TO (institusi) · succeed IN\nsuffer FROM · benefit FROM · result IN · lead TO · contribute TO · aware OF',
  notes: [
    'Hafalkan dalam frasa utuh, bukan kata per kata.',
    'lead to / contribute to diikuti kata benda atau V-ing.',
    'discuss, enter, answer, marry TIDAK diikuti preposisi: "discuss the issue".'
  ],
  ex: [
    ['It depends on the weather.', 'Itu tergantung cuaca.'],
    ['Air pollution leads to health problems.', 'Polusi udara menyebabkan masalah kesehatan.'],
    ['She is good at negotiating.', 'Dia pandai bernegosiasi.']
  ],
  traps: [
    ['We discussed about the plan.', 'We discussed the plan.', 'discuss tanpa preposisi.'],
    ['Different than mine', 'Different from mine', 'Bentuk baku memakai from.']
  ],
  drills: [
    { t:'mcq', q:'She is responsible ___ the budget.', opts:['of','for','to','on'], a:1 },
    { t:'mcq', q:'Poor sleep can result ___ low focus.', opts:['to','in','on','of'], a:1 },
    { t:'fill', q:'I\'m not interested ___ politics.', a:'in' },
    { t:'mcq', q:'Mana yang benar?', opts:['We discussed about it.','We discussed it.','We discussed on it.','We discussed for it.'], a:1 }
  ]
},
{
  id: 'b1-21', level: 'B1', title: 'Linking Words: contrast & result', titleId: 'Kata Penghubung Kontras',
  why: 'Salah satu penyumbang nilai coherence terbesar — dan sumber kesalahan tanda baca.',
  form: 'although / even though / though + kalimat\ndespite / in spite of + kata benda / V-ing\nhowever ; nevertheless (setelah titik atau titik koma)\ntherefore / thus / consequently (akibat)',
  notes: [
    'despite TIDAK diikuti "of": despite the rain, bukan "despite of the rain".',
    'however diikuti koma: "However, the cost is high."',
    'Jangan pakai although dan but bersamaan.'
  ],
  ex: [
    ['Although it was expensive, we bought it.', 'Meskipun mahal, kami membelinya.'],
    ['Despite the rain, the match continued.', 'Meski hujan, pertandingan berlanjut.'],
    ['The plan is costly; however, it works.', 'Rencana itu mahal; namun berhasil.']
  ],
  traps: [
    ['Despite of the traffic', 'Despite the traffic', 'despite tanpa of.'],
    ['Although he was tired, but he continued.', 'Although he was tired, he continued.', 'Cukup satu penghubung.']
  ],
  drills: [
    { t:'mcq', q:'___ the high price, sales rose.', opts:['Although','Despite','However','Because'], a:1 },
    { t:'mcq', q:'___ she studied hard, she failed.', opts:['Despite','In spite of','Although','However'], a:2 },
    { t:'fill', q:'It was raining. ___, we went out.', a:['However','Nevertheless'] },
    { t:'trans', id:'Meskipun lelah, dia tetap belajar.', a:['Although he was tired, he kept studying.','Despite being tired, he kept studying.'] }
  ]
},
{
  id: 'b1-22', level: 'B1', title: 'Subject–Verb Agreement', titleId: 'Kecocokan Subjek & Kata Kerja',
  why: 'Bahasa Indonesia tidak mengenal konsep ini sama sekali, sehingga kesalahannya bertahan sampai level tinggi.',
  form: 'Subjek tunggal → kata kerja -s · Subjek jamak → kata kerja polos',
  notes: [
    'Frasa panjang di antara subjek dan kata kerja tidak mengubah aturannya: "The list of items IS long."',
    'each, every, everyone, somebody, neither, either → tunggal.',
    '"a number of" → jamak; "the number of" → tunggal.',
    'Kata benda kolektif (team, government, family) tunggal di Amerika, boleh jamak di Inggris.'
  ],
  ex: [
    ['The list of participants is ready.', 'Daftar pesertanya sudah siap.'],
    ['Everyone has to sign in.', 'Semua orang harus melapor.'],
    ['A number of students were absent.', 'Sejumlah siswa tidak hadir.']
  ],
  traps: [
    ['The quality of the products are poor.', '… is poor.', 'Subjeknya "quality" (tunggal).'],
    ['Everyone are ready.', 'Everyone is ready.', 'everyone tunggal.']
  ],
  drills: [
    { t:'mcq', q:'The number of applicants ___ risen.', opts:['have','has','are','were'], a:1 },
    { t:'mcq', q:'Neither of the answers ___ correct.', opts:['are','is','were','have'], a:1 },
    { t:'fill', q:'The team ___ (be) playing well this season.', a:['is','are'] },
    { t:'mcq', q:'Mana yang benar?', opts:['The box of tools are heavy.','The box of tools is heavy.','The box of tool are heavy.','The boxes of tools is heavy.'], a:1 }
  ]
}
];
