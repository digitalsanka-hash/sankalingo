/* ── Isian latihan: A1, A2, B1 dan B2 ─────────────────────────────
   Menaikkan tiap topik ke minimal empat soal. Empat dipilih bukan
   angka sembarangan: dengan tiga soal pilihan ganda, menebak asal
   sudah memberi peluang lulus yang lumayan; dengan empat soal dan
   sedikitnya satu soal isian atau terjemahan — yang tidak bisa
   ditebak — skor 80% baru berarti paham.

   Karena itu tambahannya diutamakan berupa soal ISIAN dan TERJEMAHAN,
   bukan menambah pilihan ganda lagi.

   Digabung ke topik aslinya di js/data.js; berkas grammar aslinya
   tidak disentuh.                                                    */

export const ISI_AB = {

/* ══ A1 ══════════════════════════════════════════════════════════ */

'a1-10': { drills: [
  { t: 'fill', q: '___ shoes over there are mine. (jauh, jamak)', a: ['Those'] },
  { t: 'trans', id: 'Buku ini milik saya.', a: ['This book is mine.', 'This is my book.'] },
]},

'a1-11': { drills: [
  { t: 'fill', q: 'He ___ speak three languages. (bisa)', a: ['can'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['She can to swim.', 'She cans swim.', 'She can swim.', 'She can swims.'], a: 2 },
]},

'a1-12': { drills: [
  { t: 'fill', q: '___ open the window, please. (bentuk perintah sopan)', a: ['Please'] },
  { t: 'trans', id: 'Mari kita mulai sekarang.', a: ["Let's start now.", 'Let us start now.'] },
]},

'a1-15': { drills: [
  { t: 'fill', q: 'She lives ___ Jakarta. (kota)', a: ['in'] },
  { t: 'mcq', q: 'The keys are ___ the table.', opts: ['in', 'on', 'at', 'to'], a: 1 },
]},

'a1-16': { drills: [
  { t: 'fill', q: 'Susun: a ___ ___ table. (small / wooden)', a: ['small wooden'] },
  { t: 'mcq', q: 'Which order is correct?', opts: ['a red big car', 'a big red car', 'a car big red', 'red a big car'], a: 1 },
]},

/* ══ A2 ══════════════════════════════════════════════════════════ */

'a2-02': { drills: [
  { t: 'fill', q: 'While she ___ (cook), the phone rang.', a: ['was cooking'] },
  { t: 'mcq', q: 'At 8 p.m. yesterday we ___ dinner.', opts: ['have', 'were having', 'had have', 'are having'], a: 1 },
]},

'a2-07': { drills: [
  { t: 'mcq', q: 'The bag looks heavy — I ___ carry it for you.', opts: ['am carrying', 'will', 'carry', 'am going to'], a: 1 },
  { t: 'trans', id: 'Dia tidak akan setuju.', a: ['He will not agree.', "He won't agree.", "She won't agree."] },
]},

'a2-08': { drills: [
  { t: 'fill', q: 'She has bought paint — she ___ ___ ___ paint the room. (niat)', a: ['is going to'] },
  { t: 'trans', id: 'Saya akan membuka usaha tahun depan.', a: ['I am going to start a business next year.', "I'm going to open a business next year."] },
]},

'a2-09': { drills: [
  { t: 'fill', q: 'We ___ (fly) to Bali on Saturday — the tickets are booked.', a: ['are flying'] },
  { t: 'mcq', q: 'Which is a fixed personal arrangement?', opts: ['I will see the dentist.', 'I am seeing the dentist at four.', 'I see the dentist.', 'I would see the dentist.'], a: 1 },
]},

'a2-11': { drills: [
  { t: 'fill', q: 'This is the ___ (bad) film I have ever seen.', a: ['worst'] },
  { t: 'trans', id: 'Ini restoran terbaik di kota.', a: ['This is the best restaurant in town.', 'This is the best restaurant in the city.'] },
]},

'a2-12': { drills: [
  { t: 'fill', q: 'He is not ___ tall ___ his brother.', a: ['as tall as'] },
  { t: 'mcq', q: 'Which means they are equal?', opts: ['She is taller than him.', 'She is as tall as him.', 'She is not as tall as him.', 'She is the tallest.'], a: 1 },
]},

'a2-14': { drills: [
  { t: 'fill', q: 'She is ___ late. (selalu — perhatikan letaknya sesudah "is")', a: ['always'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['I go often to the gym.', 'I often go to the gym.', 'Often I to the gym go.', 'I go to the gym often to.'], a: 1 },
]},

'a2-17': { drills: [
  { t: 'fill', q: 'Take an umbrella — it ___ rain later. (mungkin)', a: ['might', 'may', 'could'] },
  { t: 'mcq', q: 'Which shows the LEAST certainty?', opts: ['It will rain.', 'It might rain.', 'It is raining.', 'It must be raining.'], a: 1 },
]},

'a2-18': { drills: [
  { t: 'fill', q: 'I saw ___ at the market yesterday. (mereka)', a: ['them'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['She gave to me it.', 'She gave it to me.', 'She gave me it to.', 'She me gave it.'], a: 1 },
]},

'a2-20': { drills: [
  { t: 'fill', q: 'You are coming, ___ you?', a: ["aren't"] },
  { t: 'mcq', q: 'I am right, ___?', opts: ["amn't I", 'aren\'t I', 'am I not right', 'is it'], a: 1 },
]},

/* ══ B1 ══════════════════════════════════════════════════════════ */

'b1-02': { drills: [
  { t: 'fill', q: 'When I arrived, they ___ already ___ (leave).', a: ['had left'] },
  { t: 'trans', id: 'Dia sudah pergi sebelum saya sampai.', a: ['He had left before I arrived.', 'She had gone before I arrived.'] },
]},

'b1-03': { drills: [
  { t: 'mcq', q: 'She was tired because she ___ all night.', opts: ['had worked', 'had been working', 'has worked', 'was working'], a: 1 },
  { t: 'fill', q: 'It ___ ___ ___ (rain) for hours before the match was called off.', a: ['had been raining'] },
  { t: 'trans', id: 'Mereka sudah menunggu berjam-jam saat bantuan datang.', a: ['They had been waiting for hours when help arrived.'] },
]},

'b1-04': { drills: [
  { t: 'fill', q: 'By nine tonight I ___ ___ (finish) the report.', a: ['will have finished'] },
  { t: 'trans', id: 'Jam segini besok saya sedang terbang ke Jakarta.', a: ['This time tomorrow I will be flying to Jakarta.', "This time tomorrow I'll be flying to Jakarta."] },
]},

'b1-07': { drills: [
  { t: 'fill', q: 'If I ___ ___ (know), I would have told you.', a: ['had known'] },
  { t: 'trans', id: 'Kalau dia belajar, dia pasti lulus.', a: ['If he had studied, he would have passed.', 'If she had studied, she would have passed.'] },
]},

'b1-10': { drills: [
  { t: 'mcq', q: 'My brother, ___ lives in Bandung, is a teacher.', opts: ['that', 'who', 'which', 'what'], a: 1 },
  { t: 'fill', q: 'The report, ___ was published in May, caused a stir. (benda, tak boleh that)', a: ['which'] },
  { t: 'trans', id: 'Ibu saya, yang berumur enam puluh, masih bekerja.', a: ['My mother, who is sixty, still works.'] },
]},

'b1-11': { drills: [
  { t: 'fill', q: '"I have finished." → She said she ___ ___ (finish).', a: ['had finished'] },
  { t: 'trans', id: 'Dia bilang dia sedang sibuk.', a: ['He said he was busy.', 'She said she was busy.'] },
]},

'b1-12': { drills: [
  { t: 'fill', q: '"Where do you live?" → He asked me where I ___.', a: ['lived'] },
  { t: 'mcq', q: 'Which reported question is correct?', opts: ['She asked where was the bank.', 'She asked where the bank was.', 'She asked where did the bank be.', 'She asked where is the bank.'], a: 1 },
]},

'b1-13': { drills: [
  { t: 'mcq', q: 'I ___ to the noise now; it does not bother me.', opts: ['used', 'am used', 'use', 'was used'], a: 1 },
  { t: 'trans', id: 'Dulu saya biasa bangun pagi.', a: ['I used to get up early.', 'I used to wake up early.'] },
]},

'b1-14': { drills: [
  { t: 'fill', q: 'He has not eaten all day — he ___ be hungry. (pasti)', a: ['must'] },
  { t: 'trans', id: 'Itu pasti bukan dia.', a: ["That can't be him.", "It can't be him.", "That can't be her."] },
]},

'b1-15': { drills: [
  { t: 'fill', q: 'The window is broken — someone ___ ___ ___ (break) it. (pasti sudah)', a: ['must have broken'] },
  { t: 'trans', id: 'Dia pasti sudah lupa.', a: ['He must have forgotten.', 'She must have forgotten.'] },
]},

'b1-17': { drills: [
  { t: 'fill', q: 'My parents never ___ me stay out late. (mengizinkan)', a: ['let'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['She made me to wait.', 'She made me wait.', 'She made me waiting.', 'She made to me wait.'], a: 1 },
]},

'b1-18': { drills: [
  { t: 'mcq', q: 'Which is correct?', opts: ['Please look after him.', 'Please look him after.', 'Please look after he.', 'Please after look him.'], a: 0 },
  { t: 'fill', q: 'The TV is too loud — turn ___ down. (kata ganti wajib di tengah)', a: ['it'] },
]},

'b1-19': { drills: [
  { t: 'fill', q: 'She plays ___ piano beautifully.', a: ['the'] },
  { t: 'mcq', q: 'Which needs NO article?', opts: ['___ Alps', '___ Philippines', '___ Indonesia', '___ Nile'], a: 2 },
]},

/* ══ B2 ══════════════════════════════════════════════════════════ */

'b2-01': { drills: [
  { t: 'fill', q: 'If I ___ (be) more careful, I would not have lost it. (campuran)', a: ['had been'] },
  { t: 'trans', id: 'Kalau saya tidak selelah ini, saya pasti sudah ikut kemarin.', a: ['If I were not so tired, I would have joined yesterday.', "If I weren't so tired, I would have joined yesterday."] },
]},

'b2-02': { drills: [
  { t: 'fill', q: 'I wish you ___ stop interrupting me. (jengkel pada kebiasaan)', a: ['would'] },
  { t: 'trans', id: 'Andai saya sudah tahu lebih awal.', a: ['I wish I had known earlier.', 'If only I had known earlier.'] },
]},

'b2-03': { drills: [
  { t: 'fill', q: 'The temple ___ said to be a thousand years old.', a: ['is'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['He is thought to have live abroad.', 'He is thought to have lived abroad.', 'He is thought to lived abroad.', 'He thought to have lived abroad.'], a: 1 },
]},

'b2-04': { drills: [
  { t: 'fill', q: 'I am going to ___ my hair cut tomorrow.', a: ['have', 'get'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['I had repaired my car.', 'I had my car repaired.', 'I had my car repair.', 'I had repair my car.'], a: 1 },
]},

'b2-05': { drills: [
  { t: 'fill', q: 'The person to ___ I spoke was very helpful. (formal)', a: ['whom'] },
  { t: 'trans', id: 'Kami mewawancarai lima puluh staf, sebagian besar setuju.', a: ['We interviewed fifty staff, most of whom agreed.'] },
]},

'b2-06': { drills: [
  { t: 'fill', q: '___ (finish) the report, she went home. (lebih dulu terjadi)', a: ['Having finished'] },
  { t: 'trans', id: 'Karena ditulis dengan tergesa, laporannya penuh kesalahan.', a: ['Written in haste, the report was full of errors.'] },
]},

'b2-07': { drills: [
  { t: 'mcq', q: 'He stopped ___ a cigarette on the way. (berhenti untuk merokok)', opts: ['smoking', 'to smoke', 'smoke', 'having smoked'], a: 1 },
  { t: 'trans', id: 'Ingat mengunci pintunya.', a: ['Remember to lock the door.'] },
]},

'b2-08': { drills: [
  { t: 'fill', q: 'I look forward to ___ (hear) from you.', a: ['hearing'] },
  { t: 'mcq', q: 'Which is correct?', opts: ['He suggested to go early.', 'He suggested going early.', 'He suggested me to go early.', 'He suggested go early.'], a: 1 },
]},

'b2-09': { drills: [
  { t: 'mcq', q: 'She ___ leave when the phone rang.', opts: ['was about to', 'is about to', 'will', 'has been about'], a: 0 },
  { t: 'fill', q: 'We ___ ___ ___ call you, but we ran out of time. (niat yang batal)', a: ['were going to'] },
  { t: 'trans', id: 'Saya berniat melamar, tapi tenggatnya lewat.', a: ['I was going to apply, but the deadline passed.'] },
]},

'b2-10': { drills: [
  { t: 'mcq', q: 'The entrance was free, so we ___ pay.', opts: ["needn't have", "didn't need to", 'not needed to', 'needn\'t to'], a: 1 },
  { t: 'fill', q: 'You ___ ___ brought food — there was plenty. (terlanjur dibawa)', a: ["needn't have"] },
  { t: 'trans', id: 'Kamu tak perlu menunggu, tapi terima kasih sudah menunggu.', a: ["You needn't have waited, but thank you for waiting."] },
]},

'b2-11': { drills: [
  { t: 'fill', q: '___ I need most is time. (pola cleft dengan what)', a: ['What'] },
  { t: 'trans', id: 'Yang membuat saya kesal adalah keterlambatannya.', a: ['What annoyed me was the delay.', 'What upset me was the delay.'] },
]},

'b2-12': { drills: [
  { t: 'mcq', q: 'Which adds emphasis correctly?', opts: ['I do agreed with you.', 'I did agreed with you.', 'I do agree with you.', 'I am do agree with you.'], a: 2 },
  { t: 'fill', q: 'She ___ apologise, actually — you missed it. (penekanan lampau)', a: ['did'] },
  { t: 'trans', id: 'Saya memang menyukainya.', a: ['I do like it.', 'I did like it.'] },
]},

'b2-13': { drills: [
  { t: 'mcq', q: '— I have never been to Japan. — ___ .', opts: ['So have I', 'Neither have I', 'So do I', 'Neither do I'], a: 1 },
  { t: 'fill', q: 'He asked me to check it and I did ___. (substitusi kata kerja)', a: ['so'] },
  { t: 'trans', id: '— Saya suka kopi. — Saya juga.', a: ['— I like coffee. — So do I.'] },
]},

'b2-14': { drills: [
  { t: 'mcq', q: 'The harder you work, ___.', opts: ['the luckier you get', 'you get luckier', 'the more lucky you get it', 'luckier you get'], a: 0 },
  { t: 'fill', q: '___ sooner we start, the better. (kata yang hilang)', a: ['The'] },
  { t: 'trans', id: 'Semakin banyak saya membaca, semakin sedikit yang saya tahu.', a: ['The more I read, the less I know.'] },
]},

'b2-15': { drills: [
  { t: 'mcq', q: 'The film was ___ perfect.', opts: ['very', 'absolutely', 'quite a', 'more'], a: 1 },
  { t: 'fill', q: 'I was ___ exhausted after the trip. (penguat untuk kata sifat mutlak)', a: ['absolutely', 'completely', 'totally'] },
  { t: 'trans', id: 'Airnya benar-benar membeku.', a: ['The water was absolutely freezing.'] },
]},

'b2-16': { drills: [
  { t: 'mcq', q: '___, the two studies reached opposite conclusions.', opts: ['Similarly', 'By contrast', 'Moreover', 'Therefore'], a: 1 },
  { t: 'fill', q: '___ balance, the benefits outweigh the costs. (kata depan)', a: ['On'] },
  { t: 'trans', id: 'Singkatnya, hasilnya tidak meyakinkan.', a: ['In short, the results were inconclusive.', 'To sum up, the results were inconclusive.'] },
]},

'b2-17': { drills: [
  { t: 'mcq', q: 'Which is best hedged for academic writing?', opts: ['Sugar causes obesity.', 'Sugar may contribute to obesity.', 'Sugar always causes obesity.', 'Sugar definitely causes obesity.'], a: 1 },
  { t: 'fill', q: 'The results ___ to support the hypothesis. (tampaknya)', a: ['appear', 'seem', 'tend'] },
  { t: 'trans', id: 'Kebijakan ini tampaknya mengurangi kemacetan.', a: ['The policy appears to reduce congestion.', 'The policy seems to reduce congestion.'] },
]},

'b2-18': { drills: [
  { t: 'fill', q: 'Bentuk benda dari "improve" adalah ___.', a: ['improvement'] },
  { t: 'trans', id: 'Keputusan itu diambil setelah pembahasan panjang.', a: ['The decision was taken after a long discussion.', 'The decision was made after lengthy discussion.'] },
]},

'b2-20': { drills: [
  { t: 'mcq', q: 'Which uses the apostrophe correctly?', opts: ["The student's are late.", "The students' results improved.", 'The students results improved.', "The student's results improved's."], a: 1 },
  { t: 'fill', q: 'Sambungkan tanpa kata sambung: "It was late___ we went home." (tanda baca)', a: [';'] },
  { t: 'trans', id: 'Setelah rapat, kami pergi makan siang.', a: ['After the meeting, we went for lunch.'] },
]},

'b2-21': { drills: [
  { t: 'mcq', q: 'Which is a compound sentence?', opts: ['She left early.', 'She left early because she was tired.', 'She left early, and he stayed behind.', 'Leaving early, she missed the news.'], a: 2 },
  { t: 'fill', q: 'Kalimat majemuk bertingkat memakai kata sambung seperti because, although, dan ___.', a: ['if', 'when'] },
  { t: 'trans', id: 'Meskipun hujan, kami tetap berangkat.', a: ['Although it was raining, we still left.', 'Even though it was raining, we still went.'] },
]},

'b2-22': { drills: [
  { t: 'mcq', q: 'I had ___ unforgettable experience in Bali.', opts: ['a', 'an', 'some', 'the'], a: 1 },
  { t: 'fill', q: 'How many ___ have you been there? (berapa kali)', a: ['times'] },
  { t: 'trans', id: 'Dia punya banyak pengalaman di bidang ini.', a: ['He has a lot of experience in this field.', 'She has extensive experience in this field.'] },
]},

};
