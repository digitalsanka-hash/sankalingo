/* Tata bahasa tingkat B2 — 22 topik. */

export const GRAMMAR_B2 = [
{
  id: 'b2-01', level: 'B2', title: 'Mixed Conditionals', titleId: 'Pengandaian Campuran',
  why: 'Menghubungkan masa lalu dengan sekarang. Satu kalimat seperti ini bisa menaikkan kesan grammatical range.',
  form: 'Lalu → sekarang: If + had + V3, would + V1\nSekarang → lalu: If + past simple, would have + V3',
  notes: [
    '"If I had studied medicine, I would be a doctor now." (sebab lampau, akibat kini)',
    '"If I were more careful, I wouldn\'t have lost it." (sifat kini, akibat lampau)',
    'Penanda waktu (now, today, back then) menentukan campurannya.'
  ],
  ex: [
    ['If she had taken the job, she would be in Sydney now.', 'Kalau dia menerima pekerjaan itu, sekarang dia ada di Sydney.'],
    ['If he weren\'t so shy, he would have spoken up.', 'Kalau dia tidak pemalu, dia pasti sudah bersuara.']
  ],
  traps: [['If I had studied, I would have been a doctor now.', '… I would be a doctor now.', 'Akibat masa kini memakai would + V1.']],
  drills: [
    { t:'mcq', q:'If I had saved money, I ___ a house now.', opts:['would have','would have had','would own','owned'], a:2 },
    { t:'mcq', q:'If she ___ a better planner, she wouldn\'t have missed it.', opts:['were','had been','is','would be'], a:0 },
    { t:'fill', q:'If they had left earlier, they ___ ___ here by now.', a:['would be'] }
  ]
},
{
  id: 'b2-02', level: 'B2', title: 'wish / if only', titleId: 'Berandai-andai',
  why: 'Alat menyatakan penyesalan dan harapan — kalimat andalan IELTS Speaking Part 3.',
  form: 'wish + past simple = andai sekarang berbeda\nwish + had + V3 = andai dulu berbeda\nwish + would + V1 = jengkel pada kebiasaan orang lain',
  notes: [
    '"I wish I had more time" — sekarang waktunya kurang.',
    '"I wish I had studied" — penyesalan masa lalu.',
    '"I wish you would stop interrupting" — keluhan, tidak dipakai untuk diri sendiri.'
  ],
  ex: [
    ['I wish I spoke French.', 'Andai saya bisa berbahasa Prancis.'],
    ['She wishes she hadn\'t sold the car.', 'Dia menyesal telah menjual mobilnya.']
  ],
  traps: [['I wish I have more money.', 'I wish I had more money.', 'wish menuntut bentuk mundur.']],
  drills: [
    { t:'mcq', q:'I wish I ___ taller.', opts:['am','was being','were','will be'], a:2 },
    { t:'mcq', q:'He wishes he ___ the exam last year.', opts:['passed','had passed','passes','would pass'], a:1 },
    { t:'fill', q:'I wish it ___ (stop) raining.', a:['would stop'] }
  ]
},
{
  id: 'b2-03', level: 'B2', title: 'Reporting Passive', titleId: 'Pasif Pelaporan',
  why: 'Gaya berita dan akademik. Sangat menaikkan nilai formalitas tulisan.',
  form: 'It is said/believed/thought that + kalimat\nS + is said/believed + to + V1 / to have + V3',
  notes: [
    'Dipakai saat sumbernya umum atau tidak penting.',
    '"It is widely believed that…" pembuka esai yang aman.',
    'Bentuk lampau: "He is said to have left the country."'
  ],
  ex: [
    ['It is believed that stress affects memory.', 'Diyakini bahwa stres memengaruhi ingatan.'],
    ['The company is reported to have lost millions.', 'Perusahaan itu dilaporkan merugi jutaan.']
  ],
  traps: [['It is said the pollution is bad by people.', 'It is said that pollution is bad.', 'Pelaku tidak perlu disebut.']],
  drills: [
    { t:'mcq', q:'It ___ that the policy will change.', opts:['is expected','expects','is expecting','expected'], a:0 },
    { t:'mcq', q:'He is thought ___ abroad.', opts:['to live','living','lives','that he lives'], a:0 },
    { t:'trans', id:'Dipercaya bahwa olahraga mengurangi stres.', a:['It is believed that exercise reduces stress.'] }
  ]
},
{
  id: 'b2-04', level: 'B2', title: 'Causative: have / get something done', titleId: 'Menyuruh Orang Lain',
  why: 'Menjelaskan jasa yang kita bayar — sering muncul di TOEIC dan percakapan sehari-hari.',
  form: 'have / get + objek + V3',
  notes: [
    'Menekankan bahwa orang lain yang mengerjakan, bukan kita.',
    'Bandingkan: "I cut my hair" (saya potong sendiri) vs "I had my hair cut" (di salon).',
    'Bisa untuk kejadian buruk: "He had his wallet stolen."'
  ],
  ex: [
    ['I had my car serviced last week.', 'Mobil saya diservis minggu lalu.'],
    ['She got her documents translated.', 'Dokumennya diterjemahkan.']
  ],
  traps: [['I cut my hair yesterday at the salon.', 'I had my hair cut yesterday.', 'Kalau orang lain yang memotong, pakai kausatif.']],
  drills: [
    { t:'mcq', q:'We need to ___ the roof repaired.', opts:['make','have','let','do'], a:1 },
    { t:'fill', q:'She had her passport ___ (renew).', a:'renewed' },
    { t:'trans', id:'Saya menyervis motor saya kemarin (di bengkel).', a:['I had my motorbike serviced yesterday.'] }
  ]
},
{
  id: 'b2-05', level: 'B2', title: 'Relative Clauses with Prepositions & Quantifiers', titleId: 'Klausa Relatif Formal',
  why: 'Ciri khas tulisan akademik: "many of which", "in which", "to whom".',
  form: 'preposisi + which / whom (formal)\nquantifier + of + which / whom: some of which, both of whom, most of which',
  notes: [
    'Gaya percakapan menaruh preposisi di akhir: "the man I spoke to". Gaya formal di depan: "the man to whom I spoke".',
    'Setelah preposisi memakai whom, bukan who.',
    '"The study surveyed 200 people, most of whom were students."'
  ],
  ex: [
    ['This is the report on which the decision was based.', 'Ini laporan yang menjadi dasar keputusan itu.'],
    ['He has three sisters, all of whom are teachers.', 'Dia punya tiga saudari, semuanya guru.']
  ],
  traps: [['the person to who I wrote', 'the person to whom I wrote', 'Setelah preposisi memakai whom.']],
  drills: [
    { t:'mcq', q:'The results, ___ of which were surprising, are attached.', opts:['some','which','that','who'], a:0 },
    { t:'mcq', q:'This is the tool with ___ we measured the data.', opts:['that','which','who','what'], a:1 },
    { t:'fill', q:'She interviewed 50 staff, most of ___ agreed.', a:'whom' }
  ]
},
{
  id: 'b2-06', level: 'B2', title: 'Participle Clauses', titleId: 'Klausa Partisip',
  why: 'Memadatkan dua kalimat jadi satu — persis yang dicari penguji sebagai tanda kelancaran menulis.',
  form: 'V-ing (aktif) · V3 (pasif) · Having + V3 (lebih dulu terjadi)',
  notes: [
    '"Because he felt tired, he left." → "Feeling tired, he left."',
    '"The house, which was built in 1920, …" → "The house, built in 1920, …"',
    'Subjek klausa partisip harus SAMA dengan subjek induk, kalau tidak jadi dangling modifier.'
  ],
  ex: [
    ['Walking home, I saw an accident.', 'Saat berjalan pulang, saya melihat kecelakaan.'],
    ['Written in 1965, the novel still feels modern.', 'Ditulis pada 1965, novel itu masih terasa modern.'],
    ['Having finished the report, she went home.', 'Setelah menyelesaikan laporan, dia pulang.']
  ],
  traps: [['Walking home, the rain started.', 'While I was walking home, the rain started.', 'Hujan tidak berjalan pulang — subjeknya harus sama.']],
  drills: [
    { t:'mcq', q:'___ in Java, the temple attracts many tourists.', opts:['Locating','Located','Locate','It locates'], a:1 },
    { t:'mcq', q:'___ the test, he felt relieved.', opts:['Having finished','Finish','Finished being','Having finish'], a:0 },
    { t:'mcq', q:'Mana yang SALAH?', opts:['Feeling ill, she stayed home.','Feeling ill, the meeting was cancelled.','Having eaten, we left.','Built in 1900, it still stands.'], a:1 }
  ]
},
{
  id: 'b2-07', level: 'B2', title: 'Gerund vs Infinitive: perubahan makna', titleId: 'Arti Berubah',
  why: 'Beberapa kata kerja berubah arti total tergantung bentuk sesudahnya.',
  form: 'stop doing (berhenti melakukan) / stop to do (berhenti untuk melakukan)\nremember doing (ingat pernah) / remember to do (ingat untuk)\nforget · regret · try · mean · go on — pola serupa',
  notes: [
    'try doing = coba cara lain; try to do = berusaha keras.',
    'regret doing = menyesal telah; regret to say = dengan menyesal memberitahukan.',
    'mean doing = berarti; mean to do = bermaksud.'
  ],
  ex: [
    ['I stopped smoking last year.', 'Saya berhenti merokok tahun lalu.'],
    ['He stopped to smoke.', 'Dia berhenti sejenak untuk merokok.'],
    ['Remember to lock the door.', 'Ingat untuk mengunci pintu.']
  ],
  traps: [['I stopped to smoke five years ago and never smoked again.', 'I stopped smoking five years ago.', 'Berhenti dari kebiasaan → V-ing.']],
  drills: [
    { t:'mcq', q:'I regret ___ you that we cannot proceed.', opts:['telling','to tell','tell','told'], a:1 },
    { t:'mcq', q:'She remembers ___ him at a conference.', opts:['to meet','meeting','meet','met'], a:1 },
    { t:'mcq', q:'Try ___ the other browser; it may work.', opts:['to use','using','use','used'], a:1 }
  ]
},
{
  id: 'b2-08', level: 'B2', title: 'Verb Patterns with Objects', titleId: 'Pola Kata Kerja + Objek',
  why: 'Sumber kesalahan tersembunyi di tulisan tingkat menengah.',
  form: 'advise / allow / encourage / persuade / remind / warn + sb + to V1\nsuggest / recommend + V-ing atau that + S + (should) V1\nlook forward to / object to / be committed to + V-ing',
  notes: [
    'suggest TIDAK memakai pola "suggest me to do". Yang benar: "suggest that I do" atau "suggest doing".',
    'explain dan describe juga tidak memakai objek orang langsung: "explain the rule TO me".',
    'Setelah recommend, kata kerja bentuk dasar dalam gaya formal: "I recommend that he apply."'
  ],
  ex: [
    ['She advised me to rest.', 'Dia menyarankan saya beristirahat.'],
    ['I suggest starting earlier.', 'Saya menyarankan memulai lebih awal.'],
    ['He explained the process to us.', 'Dia menjelaskan prosesnya kepada kami.']
  ],
  traps: [
    ['He suggested me to go.', 'He suggested that I go. / He suggested going.', 'suggest tidak memakai objek + to.'],
    ['She explained me the rule.', 'She explained the rule to me.', 'explain butuh "to".']
  ],
  drills: [
    { t:'mcq', q:'The doctor recommended ___ more water.', opts:['to drink','drinking','drink to','drank'], a:1 },
    { t:'mcq', q:'Mana yang benar?', opts:['He suggested me to apply.','He suggested that I apply.','He suggested me applying.','He suggested to me apply.'], a:1 },
    { t:'fill', q:'Please remind me ___ (call) the client.', a:['to call'] }
  ]
},
{
  id: 'b2-09', level: 'B2', title: 'Future in the Past', titleId: 'Masa Depan dari Sudut Lampau',
  why: 'Wajib untuk bercerita: rencana lampau yang tidak terlaksana.',
  form: 'was / were going to + V1 · would + V1 · was about to + V1',
  notes: [
    '"I was going to call you, but I forgot."',
    'was about to = nyaris saja terjadi.',
    'Dalam reported speech, will berubah jadi would.'
  ],
  ex: [
    ['We were going to travel, but the flight was cancelled.', 'Kami berencana bepergian, tapi penerbangannya dibatalkan.'],
    ['She was about to leave when he arrived.', 'Dia hampir pergi saat dia datang.']
  ],
  traps: [['I will go yesterday but I was sick.', 'I was going to go yesterday but I was sick.', 'Rencana lampau memakai was going to.']],
  drills: [
    { t:'mcq', q:'I ___ apply, but the deadline passed.', opts:['will','was going to','am going to','would have'], a:1 },
    { t:'fill', q:'He ___ ___ ___ ___ (be about / speak) when the mic failed.', a:['was about to speak'] }
  ]
},
{
  id: 'b2-10', level: 'B2', title: 'needn\'t have vs didn\'t need to', titleId: 'Tidak Perlu (Dua Rasa)',
  why: 'Perbedaannya halus dan sering jadi soal jebakan.',
  form: 'didn\'t need to + V1 = tidak perlu, jadi TIDAK dilakukan\nneedn\'t have + V3 = sebenarnya tidak perlu, tapi TERLANJUR dilakukan',
  notes: [
    '"I didn\'t need to buy milk" — saya tidak membelinya.',
    '"I needn\'t have bought milk" — saya sudah beli, ternyata sia-sia.',
    'Bandingkan juga dengan "should have" yang bernada menyesal.'
  ],
  ex: [
    ['You needn\'t have waited — the meeting was cancelled.', 'Kamu tak perlu menunggu — rapatnya dibatalkan.'],
    ['I didn\'t need to take a taxi; the bus was fine.', 'Saya tidak perlu naik taksi; busnya cukup.']
  ],
  traps: [['I needn\'t have gone, so I stayed home.', 'I didn\'t need to go, so I stayed home.', 'Kalau tidak dilakukan → didn\'t need to.']],
  drills: [
    { t:'mcq', q:'You ___ cooked — we already ate out.', opts:['didn\'t need to','needn\'t have','shouldn\'t','mustn\'t have'], a:1 },
    { t:'mcq', q:'She ___ pay; entry was free, so she kept her money.', opts:['needn\'t have','didn\'t need to','mustn\'t','shouldn\'t have'], a:1 }
  ]
},
{
  id: 'b2-11', level: 'B2', title: 'Cleft Sentences', titleId: 'Kalimat Penekan',
  why: 'Cara elegan menonjolkan informasi — sangat membantu skor coherence.',
  form: 'It is / was + fokus + that/who …\nWhat + S + V + is/was + fokus\nThe reason why … is that …',
  notes: [
    '"It was the price that put me off."',
    '"What surprised me was the noise."',
    '"All I need is time." — variasi lain yang natural.'
  ],
  ex: [
    ['It was her attitude that impressed the panel.', 'Sikapnyalah yang membuat panel terkesan.'],
    ['What we need is a clear plan.', 'Yang kita butuhkan adalah rencana yang jelas.']
  ],
  traps: [['What I need is more time is important.', 'What I need is more time.', 'Jangan menumpuk dua predikat.']],
  drills: [
    { t:'mcq', q:'___ really matters is consistency.', opts:['It','What','That','Which'], a:1 },
    { t:'mcq', q:'___ was the traffic that made us late.', opts:['What','It','There','That'], a:1 },
    { t:'trans', id:'Yang saya suka dari kota ini adalah makanannya.', a:['What I like about this city is the food.'] }
  ]
},
{
  id: 'b2-12', level: 'B2', title: 'Emphasis with do / does / did', titleId: 'Penegasan',
  why: 'Trik kecil yang membuat kalimat terdengar hidup dan berkarakter.',
  form: 'S + do/does/did + V1 (bentuk dasar)',
  notes: [
    '"I do agree with you." — menegaskan persetujuan.',
    '"She did call, but you were out."',
    'Kata kerja setelahnya harus polos, tanpa -s atau -ed.'
  ],
  ex: [
    ['I do believe this is the best option.', 'Saya sungguh percaya ini pilihan terbaik.'],
    ['He did try, but it was too late.', 'Dia memang sudah mencoba, tapi terlambat.']
  ],
  traps: [['She does likes it.', 'She does like it.', 'Setelah does, kata kerja polos.']],
  drills: [
    { t:'mcq', q:'I ___ understand your point.', opts:['do','am','does','did do'], a:0 },
    { t:'fill', q:'He ___ (memang) finish it on time.', a:'did' }
  ]
},
{
  id: 'b2-13', level: 'B2', title: 'Ellipsis & Substitution', titleId: 'Penghematan Kata',
  why: 'Menghindari pengulangan — salah satu tanda tulisan matang.',
  form: 'so / neither / one / do so / the former – the latter',
  notes: [
    '"I think so." menggantikan seluruh klausa.',
    '"I have a black pen and a red one."',
    '"So do I" / "Neither do I" untuk menyetujui.'
  ],
  ex: [
    ['— I love durian. — So do I.', '— Saya suka durian. — Saya juga.'],
    ['She didn\'t come and neither did he.', 'Dia tidak datang dan begitu pula dia.']
  ],
  traps: [['I like it too much.', 'I like it a lot.', '"too much" bernada negatif/berlebihan.']],
  drills: [
    { t:'mcq', q:'— I don\'t eat meat. — ___.', opts:['So do I','Neither do I','So am I','Neither I do'], a:1 },
    { t:'mcq', q:'This pen is dry; give me another ___.', opts:['it','one','that','some'], a:1 }
  ]
},
{
  id: 'b2-14', level: 'B2', title: 'the more … the more', titleId: 'Semakin … Semakin',
  why: 'Struktur khas yang langsung terdengar mahir bila dipakai tepat.',
  form: 'The + comparative + S + V, the + comparative + S + V',
  notes: [
    '"The more you practise, the better you get."',
    'Bisa dipendekkan: "The sooner, the better."',
    'Perhatikan artikel "the" wajib di kedua bagian.'
  ],
  ex: [
    ['The harder you work, the luckier you become.', 'Semakin keras kamu bekerja, semakin beruntung kamu.'],
    ['The more expensive the phone, the longer the support.', 'Makin mahal ponselnya, makin panjang dukungannya.']
  ],
  traps: [['More you study, more you know.', 'The more you study, the more you know.', '"the" wajib.']],
  drills: [
    { t:'mcq', q:'___ you sleep, the sharper you think.', opts:['More','The more','Much more','The most'], a:1 },
    { t:'trans', id:'Semakin cepat kita mulai, semakin baik.', a:['The sooner we start, the better.'] }
  ]
},
{
  id: 'b2-15', level: 'B2', title: 'Gradable & Non-gradable Adjectives', titleId: 'Kata Sifat Bertingkat',
  why: '"Very excellent" terdengar salah bagi penutur asli; ini aturannya.',
  form: 'Bertingkat: very / quite / extremely + big, tired, hot\nMutlak: absolutely / completely / totally + perfect, freezing, exhausted, impossible',
  notes: [
    'Kata sifat mutlak sudah mengandung makna "sangat".',
    'really cocok untuk keduanya.',
    'Contoh pasangan: tired/exhausted, cold/freezing, good/excellent, bad/awful, hungry/starving.'
  ],
  ex: [
    ['I was absolutely exhausted.', 'Saya benar-benar kelelahan.'],
    ['The film was quite interesting.', 'Filmnya cukup menarik.']
  ],
  traps: [['very excellent', 'absolutely excellent', 'excellent sudah mutlak.']],
  drills: [
    { t:'mcq', q:'The water was ___ freezing.', opts:['very','absolutely','more','quite a'], a:1 },
    { t:'mcq', q:'Mana yang benar?', opts:['very perfect','absolutely perfect','more perfect','quite perfect a'], a:1 }
  ]
},
{
  id: 'b2-16', level: 'B2', title: 'Academic Discourse Markers', titleId: 'Penanda Wacana Akademik',
  why: 'Penghubung yang tepat membuat esai mengalir; yang salah membuatnya terasa dipaksakan.',
  form: 'Menambah: moreover, furthermore, in addition, what is more\nMembandingkan: similarly, likewise, by contrast, conversely\nMenegaskan: indeed, in fact, notably\nMenyimpulkan: overall, in short, to sum up, on balance',
  notes: [
    'Jangan menumpuk penghubung: "Moreover, in addition, …" itu berlebihan.',
    'Firstly/Secondly cukup dipakai sekali; jangan sampai Fifthly.',
    'Hindari "Last but not least" dalam tulisan akademik — terlalu klise.'
  ],
  ex: [
    ['Moreover, the cost is far lower.', 'Lebih jauh lagi, biayanya jauh lebih rendah.'],
    ['By contrast, rural areas saw no change.', 'Sebaliknya, wilayah pedesaan tidak berubah.']
  ],
  traps: [['Beside that, …', 'Besides that, … / In addition, …', '"beside" berarti di samping.']],
  drills: [
    { t:'mcq', q:'___, the policy reduced traffic by 20%.', opts:['Beside','Furthermore','Although','Despite'], a:1 },
    { t:'mcq', q:'___, urban incomes rose while rural incomes fell.', opts:['By contrast','Moreover','Therefore','Likewise'], a:0 }
  ]
},
{
  id: 'b2-17', level: 'B2', title: 'Hedging', titleId: 'Bahasa Hati-hati',
  why: 'Klaim mutlak dianggap lemah dalam tulisan akademik. Hedging justru menaikkan nilai.',
  form: 'may / might / could · tend to · appear to · seem to\nrelatively · somewhat · arguably · in most cases · it is likely that',
  notes: [
    'Ganti "always/never" dengan "in most cases / rarely".',
    'Ganti "will cause" dengan "may lead to".',
    'Ganti "everyone knows" dengan "it is widely accepted that".'
  ],
  ex: [
    ['Screen time may contribute to poor sleep.', 'Waktu layar mungkin berkontribusi pada tidur buruk.'],
    ['Students tend to perform better with feedback.', 'Siswa cenderung berkinerja lebih baik dengan umpan balik.']
  ],
  traps: [['Technology always destroys jobs.', 'Technology may displace certain jobs.', 'Klaim mutlak mudah dibantah.']],
  drills: [
    { t:'mcq', q:'Versi paling akademik:', opts:['Everyone knows sugar is bad.','Sugar is always harmful.','Excessive sugar intake may harm health.','Sugar destroys the body.'], a:2 },
    { t:'trans', id:'Kebijakan ini cenderung mengurangi kemacetan.', a:['This policy tends to reduce congestion.','This policy is likely to reduce congestion.'] }
  ]
},
{
  id: 'b2-18', level: 'B2', title: 'Nominalisation', titleId: 'Pembendaan',
  why: 'Ciri utama gaya akademik: mengubah kata kerja jadi kata benda agar kalimat padat.',
  form: 'decide → decision · analyse → analysis · grow → growth\nfail → failure · move → movement · improve → improvement',
  notes: [
    '"The government decided to raise taxes and this made people angry." → "The government\'s decision to raise taxes provoked public anger."',
    'Jangan berlebihan; kalimat bisa jadi kaku dan sulit dibaca.',
    'IELTS Task 1 sangat cocok: "a sharp rise in sales" lebih ringkas daripada "sales rose sharply".'
  ],
  ex: [
    ['The rejection of the proposal surprised many.', 'Penolakan usulan itu mengejutkan banyak orang.'],
    ['There was a steady improvement in results.', 'Terjadi peningkatan hasil yang stabil.']
  ],
  traps: [['The improve of the system', 'The improvement of the system', 'Bentuk kata benda yang benar.']],
  drills: [
    { t:'fill', q:'Bentuk benda dari "analyse" adalah ___.', a:'analysis' },
    { t:'fill', q:'Bentuk benda dari "fail" adalah ___.', a:'failure' },
    { t:'mcq', q:'Versi paling akademik:', opts:['They decided fast and it helped.','Their quick decision proved helpful.','They decide quick, helping.','Deciding they fast helped.'], a:1 }
  ]
},
{
  id: 'b2-19', level: 'B2', title: 'Word Formation', titleId: 'Pembentukan Kata',
  why: 'Satu akar kata bisa jadi empat kata. Ini cara tercepat melipatgandakan kosakata.',
  form: 'Awalan: un-, in-, im-, ir-, il-, dis-, mis-, over-, under-, re-\nAkhiran benda: -tion, -ment, -ness, -ity, -ance\nAkhiran sifat: -able, -ful, -less, -ive, -ous, -al\nAkhiran kerja: -ise/-ize, -en, -ify',
  notes: [
    'Awalan negatif mengikuti huruf awal: im- sebelum p/b/m (impossible), ir- sebelum r (irregular), il- sebelum l (illegal).',
    'Ujian TOEIC Part 5 sangat sering menguji kelas kata dari satu akar.',
    'Latih pola: succeed → success → successful → successfully.'
  ],
  ex: [
    ['His success was unexpected.', 'Keberhasilannya tak terduga.'],
    ['The instructions were unclear.', 'Petunjuknya tidak jelas.']
  ],
  traps: [['unpossible', 'impossible', 'Sebelum p memakai im-.']],
  drills: [
    { t:'fill', q:'Bentuk sifat dari "success" adalah ___.', a:'successful' },
    { t:'mcq', q:'Lawan dari "regular" adalah', opts:['unregular','inregular','irregular','disregular'], a:2 },
    { t:'fill', q:'Bentuk benda dari "decide" adalah ___.', a:'decision' },
    { t:'mcq', q:'The manager approved the ___ quickly.', opts:['propose','proposal','proposing','proposed'], a:1 }
  ]
},
{
  id: 'b2-20', level: 'B2', title: 'Punctuation', titleId: 'Tanda Baca',
  why: 'Tanda baca dinilai langsung di IELTS Writing. Comma splice adalah kesalahan paling umum.',
  form: 'Koma: setelah frasa pembuka, memisahkan daftar, mengapit keterangan tambahan\nTitik koma: menyambung dua kalimat setara\nApostrof: kepemilikan & singkatan (bukan jamak)',
  notes: [
    'Comma splice: "It was late, we went home." → pakai titik, titik koma, atau "so".',
    'Jangan pakai apostrof untuk jamak: "1990s", bukan "1990\'s".',
    'Penghubung seperti however diikuti koma, dan didahului titik atau titik koma.'
  ],
  ex: [
    ['After the meeting, we revised the plan.', 'Setelah rapat, kami merevisi rencananya.'],
    ['The cost is high; however, the benefits are clear.', 'Biayanya tinggi; namun manfaatnya jelas.']
  ],
  traps: [
    ['It was raining, we stayed inside.', 'It was raining, so we stayed inside.', 'Dua kalimat penuh tidak boleh hanya dipisah koma.'],
    ['The 90\'s were great.', 'The 90s were great.', 'Jamak tanpa apostrof.']
  ],
  drills: [
    { t:'mcq', q:'Mana yang benar (menyambung dua kalimat setara)?', opts:['I was tired, I went to bed.','I was tired; I went to bed.','I was tired I went to bed.','I was tired: went to bed.'], a:1 },
    { t:'mcq', q:'Mana yang benar (koma sesudah penghubung)?', opts:['However the price is high.','However, the price is high.','However; the price is high.','However the price, is high.'], a:1 }
  ]
},
{
  id: 'b2-21', level: 'B2', title: 'Sentence Variety', titleId: 'Ragam Kalimat',
  why: 'Penguji menghitung ragam struktur. Semua kalimat pendek = nilai tertahan di band 6.',
  form: 'Sederhana: 1 klausa · Majemuk setara: and/but/so\nMajemuk bertingkat: because/although/if/when + klausa\nKompleks-kompleks: gabungan keduanya',
  notes: [
    'Target ideal: campuran panjang pendek. Kalimat pendek untuk menegaskan.',
    'Mulai kalimat dengan variasi: keterangan, klausa partisip, klausa if.',
    'Aturan praktis: dalam satu paragraf, minimal satu kalimat kompleks dan satu kalimat pendek.'
  ],
  ex: [
    ['Although costs rose, demand remained stable, which surprised analysts.', 'Meskipun biaya naik, permintaan tetap stabil, dan itu mengejutkan analis.'],
    ['The result was clear.', 'Hasilnya jelas.']
  ],
  traps: [['Panjang terus tanpa titik.', 'Selingi kalimat pendek.', 'Kalimat 60 kata menurunkan nilai coherence.']],
  drills: [
    { t:'mcq', q:'Mana kalimat kompleks?', opts:['The city grew fast.','The city grew fast and prices rose.','Because the city grew fast, prices rose.','Prices rose. The city grew.'], a:2 },
    { t:'order', words:['Although','it','was','expensive',',','we','bought','it'], a:'Although it was expensive , we bought it', id:'Meskipun mahal, kami membelinya.' }
  ]
},
{
  id: 'b2-22', level: 'B2', title: 'Countability Shifts', titleId: 'Kata Benda Berpindah Jenis',
  why: 'Kata yang biasanya tak terhitung bisa jadi terhitung dengan arti berbeda — jebakan halus.',
  form: 'experience (pengalaman umum, tak terhitung) / an experience (satu kejadian)\npaper (kertas) / a paper (makalah) · time / times · work / works',
  notes: [
    '"I have experience" = punya jam terbang. "I had a strange experience" = satu kejadian.',
    '"coffee" tak terhitung, tapi "two coffees" lazim saat memesan.',
    'Ini bukan pengecualian acak — maknanya benar-benar berubah.'
  ],
  ex: [
    ['She has ten years of experience.', 'Dia punya pengalaman sepuluh tahun.'],
    ['It was an unforgettable experience.', 'Itu pengalaman tak terlupakan.']
  ],
  traps: [['I have many experiences in teaching.', 'I have a lot of experience in teaching.', 'Jam terbang → tak terhitung.']],
  drills: [
    { t:'mcq', q:'He has extensive ___ in marketing.', opts:['experiences','experience','an experience','the experiences'], a:1 },
    { t:'mcq', q:'She published ___ on climate policy.', opts:['a paper','paper','papers of','the paper of'], a:0 }
  ]
}
];
