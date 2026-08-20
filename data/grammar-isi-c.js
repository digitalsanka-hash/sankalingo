/* ── Isian latihan & contoh: C1 dan C2 ────────────────────────────
   Di tingkat C, materinya sudah lengkap penjelasannya tapi latihannya
   paling tipis — C2 rata-rata hanya SATU soal per topik. Satu soal
   tidak bisa membedakan paham dari tebak beruntung, jadi tiap topik
   di sini dinaikkan ke minimal empat soal dan dua contoh.

   Soalnya sengaja tidak semuanya pilihan ganda. Di tingkat ini yang
   diuji adalah PILIHAN antara dua bentuk yang sama-sama benar tata
   bahasanya tapi berbeda kesannya — itu hanya terlihat lewat soal
   terjemahan dan isian, bukan lewat menebak dari empat pilihan.

   Digabung ke topik aslinya di js/data.js. Berkas grammar-c.js tidak
   disentuh sama sekali.                                              */

export const ISI_C = {

/* ══ C1 ══════════════════════════════════════════════════════════ */

'c1-01': { drills: [
  { t: 'mcq', q: 'Under no circumstances ___ the door be left unlocked.', opts: ['should', 'it should', 'should it', 'we should'], a: 0 },
  { t: 'fill', q: 'Seldom ___ we seen such a rapid change. (kata bantu)', a: ['have'] },
]},

'c1-02': {
  drills: [
    { t: 'mcq', q: 'The board recommends that the policy ___ reviewed annually.', opts: ['is', 'be', 'was', 'will be'], a: 1 },
    { t: 'fill', q: 'It is essential that every member ___ (attend) the briefing.', a: ['attend'] },
    { t: 'trans', id: 'Dia bersikeras agar laporannya diperbaiki.', a: ['He insisted that the report be revised.', 'She insisted that the report be revised.'] },
  ],
},

'c1-03': {
  drills: [
    { t: 'mcq', q: 'The temple is believed ___ built in the ninth century.', opts: ['to be', 'to have been', 'being', 'to been'], a: 1 },
    { t: 'fill', q: '___ been warned, the crew proceeded with care. (bentuk perfect participle pasif)', a: ['Having'] },
    { t: 'trans', id: 'Naskah itu diperkirakan telah hilang.', a: ['The manuscript is thought to have been lost.', 'The manuscript is believed to have been lost.'] },
  ],
},

'c1-04': {
  drills: [
    { t: 'mcq', q: '___ the results to prove inconclusive, the trial would be repeated.', opts: ['Was', 'Were', 'If were', 'Should be'], a: 1 },
    { t: 'fill', q: '___ we known the risk, we would have acted sooner.', a: ['Had'] },
    { t: 'trans', id: 'Seandainya pemerintah bertindak sekarang, biayanya akan turun.', a: ['Were the government to act now, costs would fall.', 'If the government acted now, costs would fall.'] },
  ],
},

'c1-05': {
  drills: [
    { t: 'mcq', q: '___ though the task appeared, it was completed in a day.', opts: ['Difficult', 'More difficult', 'The difficult', 'Difficulty'], a: 0 },
    { t: 'mcq', q: 'Which best concedes then counters?', opts: ['The cost is high and the returns are good.', 'Admittedly the cost is high; nevertheless, the returns justify it.', 'The cost is high because the returns are good.', 'The cost is high so the returns justify it.'], a: 1 },
    { t: 'trans', id: 'Meskipun mahal, program itu membuahkan hasil.', a: ['Expensive as it is, the programme delivers results.', 'Although it is expensive, the programme delivers results.'] },
  ],
},

'c1-06': {
  drills: [
    { t: 'mcq', q: 'The candidates ___ for interview will be contacted.', opts: ['selecting', 'selected', 'who selected', 'to select'], a: 1 },
    { t: 'fill', q: 'She was the first person ___ arrive. (bentuk sesudah urutan)', a: ['to'] },
    { t: 'trans', id: 'Orang yang berdiri di dekat pintu itu manajernya.', a: ['The man standing near the door is the manager.', 'The person standing near the door is the manager.'] },
  ],
},

'c1-07': {
  ex: [
    ['The rapidly growing urban population of Southeast Asia relies on imported food.', 'Penduduk kota Asia Tenggara yang tumbuh cepat bergantung pada pangan impor.'],
    ['A recently published study on air quality in coastal cities has drawn criticism.', 'Sebuah kajian yang baru terbit tentang mutu udara di kota pesisir menuai kritik.'],
  ],
  drills: [
    { t: 'mcq', q: 'In "the long-term effects of rising sea levels on coastal communities", the head noun is:', opts: ['sea levels', 'effects', 'communities', 'long-term'], a: 1 },
    { t: 'trans', id: 'Program penelitian yang didanai pemerintah itu sudah meluas.', a: ['The government-funded research programmes have expanded.', 'Government-funded research programmes have expanded.'] },
  ],
},

'c1-08': {
  drills: [
    { t: 'mcq', q: 'The forecast ___ well be wrong; the data are old.', opts: ['may', 'must', 'shall', 'ought'], a: 0 },
    { t: 'mcq', q: 'We have missed the train, so we ___ as well walk.', opts: ['had', 'might', 'should', 'would'], a: 1 },
    { t: 'trans', id: 'Sebaiknya kamu memeriksa ulang angkanya.', a: ['You had better double-check the figures.', "You'd better double-check the figures."] },
  ],
},

'c1-09': {
  drills: [
    { t: 'mcq', q: 'Which follows "Three causes were identified." most smoothly?', opts: ['Cost is the most decisive of these three factors.', 'Of these three, cost is the most decisive.', 'The most decisive is cost of these three.', 'Cost, of these three, the most decisive is.'], a: 1 },
    { t: 'mcq', q: 'Which applies the end-weight principle?', opts: ['That the scheme would fail was obvious.', 'It was obvious that the scheme would fail.', 'Obvious was that the scheme would fail.', 'The scheme would fail was obvious.'], a: 1 },
    { t: 'fill', q: '___ this problem there is no simple answer. (kata depan yang dipindah ke depan)', a: ['To'] },
  ],
},

'c1-10': {
  drills: [
    { t: 'mcq', q: 'Choose the most formal.', opts: ["We didn't get the data.", 'We did not obtain the data.', "We couldn't get hold of the data.", 'The data? Never got it.'], a: 1 },
    { t: 'mcq', q: 'Formal equivalent of "find out":', opts: ['check up', 'discover', 'look into it', 'figure out'], a: 1 },
    { t: 'trans', id: 'Data itu diperoleh dari tiga sumber.', a: ['The data were obtained from three sources.', 'The data was obtained from three sources.'] },
  ],
},

'c1-11': {
  drills: [
    { t: 'mcq', q: '"Two methods were tried. ___ proved faster." (yang kedua)', opts: ['The former', 'The latter', 'The last', 'The other one'], a: 1 },
    { t: 'mcq', q: 'Which repairs a vague "this"?', opts: ['This is a problem.', 'This trend is a problem.', 'That is a problem.', 'It is a problem.'], a: 1 },
    { t: 'fill', q: 'He asked me to revise it, and I did ___. (substitusi untuk kata kerja)', a: ['so'] },
  ],
},

'c1-12': {
  drills: [
    { t: 'mcq', q: 'Prices are ___ to rise once the subsidy ends.', opts: ['bound', 'due of', 'liable of', 'sure of'], a: 0 },
    { t: 'mcq', q: 'Small firms ___ to gain most from the reform.', opts: ['stand', 'stay', 'hold', 'come'], a: 0 },
    { t: 'trans', id: 'Saya akhirnya sempat membaca laporannya.', a: ['I finally got round to reading the report.', 'I finally got around to reading the report.'] },
  ],
},

'c1-13': {
  drills: [
    { t: 'mcq', q: 'Attendance rose by a ___ 2% — hardly worth reporting.', opts: ['dramatic', 'marginal', 'substantial', 'sharp'], a: 1 },
    { t: 'mcq', q: 'Costs were in ___ of one million pounds.', opts: ['excess', 'more', 'above', 'over than'], a: 0 },
    { t: 'fill', q: '___ students applied this year than last. (lebih sedikit, benda terhitung)', a: ['Fewer'] },
  ],
},

'c1-14': {
  drills: [
    { t: 'mcq', q: 'It is ___ this assumption that the argument fails.', opts: ['precise', 'precisely', 'exact', 'exactly of'], a: 1 },
    { t: 'mcq', q: 'By no means ___ the only explanation.', opts: ['this is', 'is this', 'this be', 'it is'], a: 1 },
    { t: 'trans', id: 'Yang mencolok adalah kecepatan perubahannya.', a: ['What is striking is the speed of the change.', "What's striking is the speed of the change."] },
  ],
},

'c1-15': {
  drills: [
    { t: 'mcq', q: 'Smith (2019) ___ that the effect is temporary.', opts: ['argued', 'argues', 'has argued', 'was arguing'], a: 1 },
    { t: 'mcq', q: 'In the methods section: "We ___ 200 participants."', opts: ['survey', 'surveyed', 'have surveyed', 'are surveying'], a: 1 },
    { t: 'fill', q: 'Research ___ shown that sleep aids memory. (merangkum banyak studi)', a: ['has'] },
  ],
},

'c1-16': {
  drills: [
    { t: 'mcq', q: 'The proposal was rejected on the ___ that it was unaffordable.', opts: ['grounds', 'ground of', 'reason', 'basis that of'], a: 0 },
    { t: 'mcq', q: 'The reform was introduced with a view ___ cutting waste.', opts: ['to', 'of', 'for', 'at'], a: 0 },
    { t: 'trans', id: 'Dari segi biaya, rencananya masuk akal.', a: ['In terms of cost, the plan is realistic.', 'In terms of cost, the plan is reasonable.'] },
  ],
},

'c1-17': {
  drills: [
    { t: 'mcq', q: 'Which reporting verb signals the strongest evidence?', opts: ['claims', 'alleges', 'demonstrates', 'suggests'], a: 2 },
    { t: 'mcq', q: 'The author ___ the accepted view, offering new data.', opts: ['challenges', 'agrees', 'notes', 'mentions'], a: 0 },
    { t: 'fill', q: 'The paper ___ the earlier findings, showing they were flawed. (menolak)', a: ['refutes', 'disputes', 'challenges'] },
  ],
},

'c1-18': {
  drills: [
    { t: 'mcq', q: 'Which is free of a dangling modifier?', opts: ['Running late, the bus was missed.', 'Running late, I missed the bus.', 'Running late, the missing bus happened.', 'The bus, running late, was missed by me.'], a: 1 },
    { t: 'mcq', q: '"She almost drove her children to school every day" means she ___.', opts: ['drove them nearly every day', 'nearly drove but did not', 'drove them all day', 'drove almost to school'], a: 1 },
    { t: 'trans', id: 'Saya hanya makan nasi.', a: ['I ate only rice.', 'I only ate rice.'] },
  ],
},

'c1-19': {
  drills: [
    { t: 'mcq', q: 'Which list is parallel?', opts: ['reading, writing, and to speak', 'to read, writing, and speaking', 'reading, writing, and speaking', 'read, writing, and to speak'], a: 2 },
    { t: 'mcq', q: 'The course is designed not only to inform ___ to inspire.', opts: ['but also', 'but too', 'and also', 'as well'], a: 0 },
    { t: 'fill', q: 'She is responsible for planning, budgeting, and ___ (report). (bentuk sejajar)', a: ['reporting'] },
  ],
},

'c1-20': {
  ex: [
    ['Each student has their own laptop.', 'Tiap murid punya laptopnya sendiri.'],
    ['The data were collected in March and analysed in April.', 'Datanya dikumpulkan bulan Maret dan dianalisis bulan April.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which sentence has NO error?', opts: ['He depend on his parents.', 'He depends on his parents.', 'He depends from his parents.', 'He depend from his parents.'], a: 1 },
    { t: 'fill', q: 'Perbaiki comma splice: "It was late, we went home." → It was late, ___ we went home.', a: ['so', 'and'] },
  ],
},

/* ══ C2 ══════════════════════════════════════════════════════════ */

'c2-01': {
  ex: [
    ["I'm loving this course.", 'Saya sedang sangat menikmati kursus ini.'],
    ['She has been meaning to call you.', 'Dia dari tadi berniat meneleponmu.'],
    ['You have been eating my biscuits.', 'Kamu ternyata memakani biskuit saya.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which suggests the activity may still continue?', opts: ['I have read the report.', 'I have been reading the report.', 'I read the report.', 'I had read the report.'], a: 1 },
    { t: 'mcq', q: '"I have lived here for ten years" differs from "I have been living here" mainly in that the second suggests ___.', opts: ['a longer time', 'something temporary', 'a finished action', 'a formal register'], a: 1 },
    { t: 'trans', id: 'Dia dari tadi berniat meneleponmu.', a: ['She has been meaning to call you.', 'He has been meaning to call you.'] },
  ],
},

'c2-02': {
  ex: [
    ['Such was the impact that policy changed within weeks.', 'Begitu besar dampaknya sampai kebijakannya berubah dalam hitungan pekan.'],
    ['Only after the audit did the errors emerge.', 'Baru sesudah pemeriksaan itulah kesalahannya muncul.'],
  ],
  drills: [
    { t: 'mcq', q: 'So great ___ the demand that stock ran out.', opts: ['was', 'it was', 'has', 'that was'], a: 0 },
    { t: 'fill', q: 'Only when the rain stopped ___ we leave. (kata bantu)', a: ['did'] },
    { t: 'trans', id: 'Begitu kuat argumennya sampai tidak ada yang membantah.', a: ['So strong was the argument that nobody objected.', 'Such was the argument that nobody objected.'] },
  ],
},

'c2-03': {
  ex: [
    ['The delay should be temporary.', 'Keterlambatannya semestinya sementara.'],
    ['That will be the courier at the door.', 'Itu pasti kurirnya di pintu.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which expresses the highest certainty about the present?', opts: ['That could be the courier.', 'That will be the courier.', 'That might be the courier.', 'That may be the courier.'], a: 1 },
    { t: 'mcq', q: 'Small firms ___ to benefit from the change.', opts: ['stand', 'stay', 'are standing', 'hold'], a: 0 },
    { t: 'trans', id: 'Biayanya bisa saja berlipat dua.', a: ['Costs could conceivably double.', 'Costs may well double.'] },
  ],
},

'c2-04': {
  ex: [
    ['Having established the cause, we can consider solutions.', 'Setelah sebabnya dipastikan, kita bisa membahas jalan keluarnya.'],
    ['That said, the objection deserves an answer.', 'Meski begitu, keberatan itu layak dijawab.'],
  ],
  drills: [
    { t: 'mcq', q: 'Best marker to move to a new point:', opts: ['And also', 'Let me turn to', 'Anyway so', 'Like I said before'], a: 1 },
    { t: 'mcq', q: 'Which closes one point before opening another?', opts: ['That said, …', 'For example, …', 'Because of this, …', 'Such as …'], a: 0 },
    { t: 'fill', q: 'This ___ the question of who should pay. (menimbulkan)', a: ['raises'] },
  ],
},

'c2-05': {
  ex: [
    ['The report drew a firm conclusion.', 'Laporannya menarik kesimpulan yang tegas.'],
    ['Heavy rain delayed the flight.', 'Hujan lebat menunda penerbangannya.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which collocation is standard?', opts: ['strong rain', 'heavy rain', 'big rain', 'thick rain'], a: 1 },
    { t: 'mcq', q: 'We must ___ a decision before Friday.', opts: ['do', 'make', 'take', 'give'], a: 1 },
    { t: 'trans', id: 'Kopinya terlalu kental buat saya.', a: ['The coffee is too strong for me.'] },
  ],
},

'c2-06': {
  ex: [
    ['The results were not entirely disappointing.', 'Hasilnya tidak sepenuhnya mengecewakan.'],
    ['We had a slight problem with the budget.', 'Kami punya sedikit masalah dengan anggarannya.'],
  ],
  drills: [
    { t: 'mcq', q: 'In British understatement, "not bad" usually means:', opts: ['quite poor', 'rather good', 'acceptable only', 'terrible'], a: 1 },
    { t: 'mcq', q: '"We had a slight problem" after a major failure is an example of:', opts: ['hyperbole', 'understatement', 'simile', 'metaphor'], a: 1 },
    { t: 'trans', id: 'Hasilnya lumayan bagus.', a: ['The results were not bad at all.', 'The results were quite good.'] },
  ],
},

'c2-07': {
  ex: [
    ['The scheme, introduced in 2019 and funded by local taxes, has halved waiting times.', 'Program itu, yang diperkenalkan pada 2019 dan didanai pajak daerah, memangkas waktu tunggu separuhnya.'],
    ['The report, though long, is clearly organised.', 'Laporannya, meski panjang, tersusun jelas.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which sentence is best balanced?', opts: ['The scheme which was introduced in 2019 and which was funded by taxes and which has halved waiting times is good.', 'The scheme, introduced in 2019 and funded by taxes, has halved waiting times.', 'The scheme introduced 2019 funded taxes halved waiting times.', 'Introduced in 2019 the scheme funded by taxes it has halved waiting times.'], a: 1 },
    { t: 'mcq', q: 'A sentence over 40 words should usually be:', opts: ['kept for emphasis', 'split into two', 'made passive', 'given more clauses'], a: 1 },
    { t: 'fill', q: 'Aturan praktis: satu gagasan utama per ___.', a: ['kalimat', 'sentence'] },
  ],
},

'c2-08': {
  ex: [
    ['I am writing to express my concern regarding the delay.', 'Saya menulis untuk menyampaikan keprihatinan mengenai keterlambatan itu.'],
    ['I would be grateful if you could confirm the date.', 'Saya akan berterima kasih bila Anda bisa memastikan tanggalnya.'],
  ],
  drills: [
    { t: 'mcq', q: 'Correct closing for "Dear Sir or Madam":', opts: ['Yours sincerely', 'Yours faithfully', 'Best wishes', 'Cheers'], a: 1 },
    { t: 'mcq', q: 'Correct closing for "Dear Mr Tan":', opts: ['Yours faithfully', 'Yours sincerely', 'Regards mate', 'Thanks a lot'], a: 1 },
    { t: 'trans', id: 'Saya menulis untuk menanyakan lowongan itu.', a: ['I am writing to enquire about the vacancy.', 'I am writing to inquire about the vacancy.'] },
  ],
},

'c2-09': {
  ex: [
    ['Many students struggle financially.', 'Banyak mahasiswa kesulitan secara keuangan.'],
    ['Financial hardship is common among students.', 'Kesulitan keuangan lazim di kalangan mahasiswa.'],
  ],
  drills: [
    { t: 'mcq', q: 'Best paraphrase of "Costs rose sharply."', opts: ['Costs went up sharply.', 'There was a marked increase in costs.', 'Costs rose in a sharp way.', 'Sharply the costs rose.'], a: 1 },
    { t: 'mcq', q: 'Which paraphrase changes the MEANING (so is wrong)?', opts: ['A ban was introduced by the authorities.', 'The authorities banned it.', 'The authorities considered banning it.', 'A prohibition was imposed.'], a: 2 },
    { t: 'trans', id: 'Pemerintah melarang kantong plastik.', a: ['A ban on plastic bags was introduced by the government.', 'The government banned plastic bags.'] },
  ],
},

'c2-10': {
  ex: [
    ['I want to go. → "I wanna go."', 'Saya mau pergi. (bentuk ucapan cepat)'],
    ['next day → "nexday"', 'hari berikutnya (bunyi /t/ hilang)'],
  ],
  drills: [
    { t: 'mcq', q: 'In fast speech, "Did you eat?" sounds most like:', opts: ['did-you-eat', 'dijeat', 'did-yu-it', 'dyd you eat'], a: 1 },
    { t: 'mcq', q: '"ten boys" often sounds like "tem boys". This is:', opts: ['elision', 'assimilation', 'linking', 'stress shift'], a: 1 },
    { t: 'fill', q: 'Kata fungsi seperti "of" dilemahkan menjadi bunyi ___ (schwa). Tulis lambangnya.', a: ['ə', 'schwa'] },
  ],
},

'c2-11': {
  ex: [
    ['Are you coming?  ↗', 'Kamu ikut? (nada naik = sungguh bertanya)'],
    ['You are coming.  ↘', 'Kamu ikut. (nada turun = sudah diputuskan)'],
  ],
  drills: [
    { t: 'mcq', q: 'A yes/no question in English usually ends with:', opts: ['a falling tone', 'a rising tone', 'no tone change', 'a flat tone'], a: 1 },
    { t: 'mcq', q: 'In a list, the final item usually takes:', opts: ['a rising tone', 'a falling tone', 'the same rise', 'no stress'], a: 1 },
    { t: 'mcq', q: 'Stressing "SHE didn\'t take it" implies:', opts: ['someone else took it', 'she took something else', 'she borrowed it', 'nobody took it'], a: 0 },
  ],
},

'c2-12': {
  ex: [
    ['We regret to inform you that your application was unsuccessful.', 'Dengan menyesal kami sampaikan bahwa lamaran Anda belum berhasil.'],
    ['Give me a hand with this, would you?', 'Bantu saya sebentar, ya?'],
  ],
  drills: [
    { t: 'mcq', q: 'Most formal:', opts: ['Give me a hand.', 'Could you help me?', 'I would be grateful for your assistance.', 'Help me out.'], a: 2 },
    { t: 'mcq', q: 'Which mixes registers badly?', opts: ['Dear Sir, I am writing to enquire…', 'Dear Sir, wanna know about the job…', 'Hi Tom, quick question…', 'Dear Dr Lee, I would be grateful…'], a: 1 },
    { t: 'trans', id: 'Bisakah Anda membantu saya?', a: ['Could you help me?', 'Would you be able to help me?'] },
  ],
},

'c2-13': {
  why: 'Kritik akademik bukan sekadar menyatakan tidak setuju: keberatannya harus disertai alasan, dan biasanya didahului pengakuan atas kelebihan tulisan yang dikritik. Tanpa dua hal itu, kritiknya terbaca sebagai serangan, bukan pembahasan.',
  ex: [
    ['While thorough, the study overlooks regional variation.', 'Meski menyeluruh, kajian itu mengabaikan keragaman antardaerah.'],
    ['The sample size limits the generalisability of the findings.', 'Ukuran sampelnya membatasi keberlakuan temuannya.'],
  ],
  drills: [
    { t: 'mcq', q: 'Most academic critique:', opts: ['This study is bad.', 'The author is wrong.', 'While persuasive, the argument rests on a single case.', 'I do not agree at all.'], a: 2 },
    { t: 'mcq', q: 'Which names a concrete limitation?', opts: ['The study is unconvincing.', 'The sample size limits generalisability.', 'The writing is poor.', 'The topic is boring.'], a: 1 },
    { t: 'trans', id: 'Meski menyeluruh, kajian itu mengabaikan biaya.', a: ['While thorough, the study overlooks cost.', 'Although thorough, the study overlooks cost.'] },
  ],
},

'c2-14': {
  ex: [
    ['At a societal level, this reflects a broader shift in how work is valued.', 'Pada tataran masyarakat, ini mencerminkan pergeseran yang lebih luas soal bagaimana kerja dinilai.'],
    ['That said, the pattern may not hold in smaller economies.', 'Meski begitu, polanya mungkin tidak berlaku di perekonomian yang lebih kecil.'],
  ],
  drills: [
    { t: 'mcq', q: 'A strong Part 3 answer usually begins with:', opts: ['a personal story', 'a clear position', 'a long definition', 'a question back'], a: 1 },
    { t: 'mcq', q: 'Which raises the level of abstraction?', opts: ['My brother did that too.', 'At a societal level, this reflects a broader shift.', 'It happened last week.', 'I like it.'], a: 1 },
    { t: 'fill', q: 'Rumus jawaban: posisi + alasan + contoh + ___.', a: ['batasan', 'limitation'] },
  ],
},

'c2-15': {
  ex: [
    ['My personal list: articles, plural -s, the preposition after "depend".', 'Daftar pribadi saya: kata sandang, -s jamak, kata depan sesudah "depend".'],
    ['I depend on my parents.', 'Saya bergantung pada orang tua saya.'],
  ],
  drills: [
    { t: 'mcq', q: 'Most effective against fossilised errors:', opts: ['reading more books', 'keeping a personal error list and checking for it', 'listening to podcasts', 'learning more vocabulary'], a: 1 },
    { t: 'mcq', q: 'Correct preposition: "It depends ___ the context."', opts: ['of', 'on', 'from', 'to'], a: 1 },
    { t: 'trans', id: 'Itu bergantung pada keadaannya.', a: ['It depends on the situation.', 'That depends on the circumstances.'] },
  ],
},

'c2-16': {
  ex: [
    ['Well, I suppose the main issue — at least for me — is cost.', 'Yah, saya rasa persoalan utamanya — setidaknya bagi saya — adalah biaya.'],
    ['She went — sorry, she had gone — before we arrived.', 'Dia pergi — maaf, dia sudah pergi — sebelum kami tiba.'],
  ],
  drills: [
    { t: 'mcq', q: 'Fluency is judged mainly by:', opts: ['speaking very fast', 'speaking in natural chunks with few unnatural pauses', 'never pausing', 'using long words'], a: 1 },
    { t: 'mcq', q: 'A smooth self-correction in a speaking test is:', opts: ['penalised heavily', 'viewed positively', 'ignored completely', 'a reason to restart'], a: 1 },
    { t: 'mcq', q: 'Which is a natural filler rather than a hesitation?', opts: ['Errr… errr…', 'Well, I suppose…', '……… (silence)', 'Emmmmmm'], a: 1 },
  ],
},

};
