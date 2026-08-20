/* ── Topik tata bahasa tambahan: C1 & C2 ──────────────────────────
   Di tingkat ini yang membedakan bukan lagi "benar atau salah", tapi
   apakah kalimatnya terdengar seperti ditulis penutur asli. Karena itu
   topik di bawah lebih banyak soal PILIHAN daripada aturan — dan tiap
   satunya dipilih karena tidak terwakili 36 topik C yang sudah ada.

   Bentuknya sama dengan berkas grammar lama.                         */

export const PLUS_C1 = [

{
  id: 'c1-21', level: 'C1',
  title: 'Absolute Constructions',
  titleId: 'Konstruksi absolut',
  why: 'Klausa tanpa kata sambung dan tanpa kata kerja bantu — "The meeting over, we left". Bentuk ini padat dan sangat lazim di tulisan resmi Inggris, tapi tidak punya padanan struktural di bahasa Indonesia sehingga hampir tidak pernah dipakai pemelajar.',
  form: '(with) + kata benda + participle / kata sifat / frasa depan , kalimat utama',
  notes: [
    'Berbeda dari klausa participle biasa: absolut punya SUBJEKNYA SENDIRI.',
    '"Weather permitting, we will start at dawn" — subjeknya weather, bukan we.',
    'with sering ditambahkan di ragam yang sedikit lebih santai.',
    'Karena subjeknya berbeda, konstruksi ini justru MENGHINDARI dangling participle.',
  ],
  ex: [
    ['The meeting over, the delegates dispersed.', 'Rapatnya usai, para delegasi membubarkan diri.'],
    ['Weather permitting, the flight will depart on time.', 'Kalau cuaca mengizinkan, penerbangannya berangkat tepat waktu.'],
    ['His work finished, he allowed himself a rest.', 'Pekerjaannya selesai, dia mengizinkan dirinya beristirahat.'],
    ['With the data collected, analysis could begin.', 'Dengan data yang sudah terkumpul, analisisnya bisa dimulai.'],
  ],
  traps: [
    ['The meeting was over, we left.', 'The meeting over, we left.', 'Konstruksi absolut membuang kata kerja bantunya.'],
    ['Being the meeting over, we left.', 'The meeting over, we left.', 'Tidak perlu being di depan subjeknya.'],
    ['Walking home, the rain started.', 'As I was walking home, the rain started.', 'Tanpa subjek sendiri, participle-nya menggantung ke subjek yang salah.'],
  ],
  drills: [
    { t: 'mcq', q: 'Choose the absolute construction.', opts: ['Because the work was done, we left.', 'The work done, we left.', 'Doing the work, we left.', 'We left after the work.'], a: 1 },
    { t: 'mcq', q: '___ permitting, the ceremony will be held outdoors.', opts: ['Weather', 'The weather is', 'If weather', 'Being weather'], a: 0 },
    { t: 'mcq', q: 'Which avoids a dangling participle?', opts: ['Having finished, the report was filed.', 'The report finished, we filed it.', 'Finishing, the report was filed.', 'To finish, the report was filed.'], a: 1 },
    { t: 'fill', q: 'His arguments ___ (exhaust), he fell silent. (bentuk participle)', a: ['exhausted'] },
    { t: 'trans', id: 'Pekerjaan itu selesai, mereka pulang.', a: ['The work finished, they went home.', 'The work done, they went home.'] },
  ],
},

{
  id: 'c1-22', level: 'C1',
  title: 'Sequence of Tenses Beyond Reported Speech',
  titleId: 'Rantai kala di kalimat majemuk',
  why: 'Pergeseran kala bukan cuma soal kalimat tak langsung. Begitu kalimat utamanya lampau, seluruh klausa bawahannya ikut bergeser — kecuali untuk kebenaran umum. Pemelajar yang hanya menghafal aturan reported speech tetap keliru di kalimat majemuk biasa.',
  form: 'Kalimat utama lampau → klausa bawahan ikut mundur satu langkah',
  notes: [
    'She said she was tired — bukan "is tired", walau saat ini masih lelah.',
    'Kebenaran umum boleh tidak bergeser: "He explained that water boils at 100°C."',
    'Kalau kalimat utamanya masih berlaku sekarang, pergeserannya boleh tidak dilakukan.',
    'Modal juga bergeser: will→would, can→could, may→might; must dan should tidak berubah.',
  ],
  ex: [
    ['I thought you were coming with us.', 'Saya kira kamu ikut dengan kami.'],
    ['She explained that water boils at 100 degrees.', 'Dia menjelaskan bahwa air mendidih pada 100 derajat.'],
    ['We assumed the office would be closed.', 'Kami mengira kantornya akan tutup.'],
    ['He realised he had left his keys behind.', 'Dia sadar dia telah meninggalkan kuncinya.'],
  ],
  traps: [
    ['I thought you are coming.', 'I thought you were coming.', 'Kalimat utama lampau menarik klausa bawahannya mundur.'],
    ['She said she will help.', 'She said she would help.', 'will bergeser jadi would.'],
    ['He explained that the earth was round.', 'He explained that the earth is round.', 'Kebenaran umum boleh tetap di bentuk sekarang.'],
  ],
  drills: [
    { t: 'mcq', q: 'I did not know you ___ here.', opts: ['are working', 'were working', 'will work', 'have work'], a: 1 },
    { t: 'mcq', q: 'The teacher explained that light ___ faster than sound.', opts: ['travelled', 'travels', 'had travelled', 'would travel'], a: 1 },
    { t: 'mcq', q: 'We hoped the parcel ___ by Friday.', opts: ['will arrive', 'would arrive', 'arrives', 'has arrived'], a: 1 },
    { t: 'fill', q: 'She said she ___ (can) not come to the meeting.', a: ['could'] },
    { t: 'trans', id: 'Saya kira kamu sudah tahu.', a: ['I thought you already knew.', 'I thought you had already known.'] },
  ],
},

{
  id: 'c1-23', level: 'C1',
  title: 'Presupposition & Implicature',
  titleId: 'Yang tersirat di balik kalimat',
  why: 'Kata seperti still, already, even, manage to, fail to menyelundupkan anggapan yang tidak dinyatakan. Di ujian menulis dan berbicara, memilih kata ini secara sadar adalah beda antara jawaban yang terkendali dan yang tidak sengaja menuduh.',
  form: 'Kata pemicu anggapan: still · already · even · manage to · fail to · admit',
  notes: [
    '"Have you stopped smoking?" sudah menganggap bahwa dulunya merokok.',
    'manage to menganggap ada kesulitan; fail to menganggap seharusnya berhasil.',
    'even menyiratkan bahwa itu di luar dugaan.',
    'Anggapan bertahan walau kalimatnya dinegatifkan — inilah cara mengujinya.',
  ],
  ex: [
    ['She managed to finish on time.', 'Dia berhasil menyelesaikannya tepat waktu — tersirat: sulit.'],
    ['The report fails to address the main issue.', 'Laporannya tidak menyentuh persoalan utamanya — tersirat: seharusnya.'],
    ['Even the experts were surprised.', 'Bahkan para ahli pun terkejut.'],
    ['He admitted that the data were incomplete.', 'Dia mengakui bahwa datanya tidak lengkap.'],
  ],
  traps: [
    ['The author fails to mention his own name.', 'The author does not mention his own name.', 'fail to menuduh; pakai kalau memang bermaksud mengkritik.'],
    ['She managed to open the door easily.', 'She opened the door easily.', 'manage to bertentangan dengan easily.'],
    ['He admitted that he was the best candidate.', 'He said that he was the best candidate.', 'admit menyiratkan hal yang memberatkan.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which word implies the task was difficult?', opts: ['She happened to finish it.', 'She managed to finish it.', 'She tended to finish it.', 'She chose to finish it.'], a: 1 },
    { t: 'mcq', q: '"The study fails to consider cost." This implies that the study ___.', opts: ['considered cost well', 'should have considered cost', 'is about cost', 'was successful'], a: 1 },
    { t: 'mcq', q: 'Which is most neutral for an academic summary?', opts: ['The author admits that…', 'The author fails to…', 'The author states that…', 'The author claims falsely that…'], a: 2 },
    { t: 'fill', q: '"Are you ___ working there?" — menyiratkan dulu bekerja di sana dan diduga masih.', a: ['still'] },
    { t: 'trans', id: 'Bahkan penulisnya pun tidak yakin.', a: ['Even the author was not sure.', "Even the author wasn't certain."] },
  ],
},

{
  id: 'c1-24', level: 'C1',
  title: 'Noun Complement Clauses',
  titleId: 'Klausa penjelas kata benda',
  why: 'the fact that, the idea that, the claim that — klausa yang MENJELASKAN ISI kata bendanya, bukan menyifatinya. Bentuknya mirip klausa relatif sehingga sering tertukar, padahal that di sini tidak boleh diganti which.',
  form: 'kata benda abstrak + that + kalimat lengkap',
  notes: [
    'Bedanya dengan klausa relatif: di sini that TIDAK berperan sebagai subjek atau objek.',
    'Karena itu that tidak bisa diganti which atau dihilangkan dalam ragam resmi.',
    'Kata benda yang lazim: fact, idea, belief, claim, possibility, suggestion, evidence, assumption.',
    'Setelah suggestion, proposal, demand dipakai bentuk dasar: "the suggestion that he be replaced".',
  ],
  ex: [
    ['The fact that she resigned surprised everyone.', 'Kenyataan bahwa dia mengundurkan diri mengejutkan semua orang.'],
    ['There is no evidence that the drug is harmful.', 'Tidak ada bukti bahwa obat itu berbahaya.'],
    ['The claim that the data were falsified is serious.', 'Tuduhan bahwa datanya dipalsukan itu serius.'],
    ['The suggestion that he be dismissed was rejected.', 'Usulan agar dia diberhentikan ditolak.'],
  ],
  traps: [
    ['The fact which she resigned surprised us.', 'The fact that she resigned surprised us.', 'Klausa penjelas memakai that, tidak bisa which.'],
    ['There is evidence the drug is harmful, that we found.', 'There is evidence that the drug is harmful.', 'that-nya menempel langsung pada kata bendanya.'],
    ['The suggestion that he is replaced was rejected.', 'The suggestion that he be replaced was rejected.', 'Sesudah suggestion dipakai bentuk dasar.'],
  ],
  drills: [
    { t: 'mcq', q: 'The idea ___ money brings happiness is questionable.', opts: ['which', 'that', 'what', 'whose'], a: 1 },
    { t: 'mcq', q: 'Which is a noun complement clause?', opts: ['The book that I read was long.', 'The fact that he lied was clear.', 'The man that called was rude.', 'The house that we bought is old.'], a: 1 },
    { t: 'mcq', q: 'The committee rejected the proposal that the rule ___ changed.', opts: ['is', 'be', 'was', 'will be'], a: 1 },
    { t: 'fill', q: 'There is little evidence ___ the method works.', a: ['that'] },
    { t: 'trans', id: 'Kenyataan bahwa dia terlambat tidak mengejutkan.', a: ['The fact that he was late was not surprising.', 'The fact that she was late was not surprising.'] },
  ],
},

];

export const PLUS_C2 = [

{
  id: 'c2-17', level: 'C2',
  title: 'Lexical Bundles in Academic English',
  titleId: 'Rangkaian baku akademik',
  why: 'Tulisan akademik Inggris dibangun dari potongan siap pakai — "on the basis of", "it should be noted that", "with regard to". Penutur asli memasangnya utuh; pemelajar merakitnya kata per kata dan hasilnya terbaca kaku walau tanpa kesalahan.',
  form: 'Rangkaian 3–5 kata yang dipakai utuh, bukan dirakit',
  notes: [
    'Rangkaian pengantar: it should be noted that, it is worth noting that.',
    'Rangkaian penunjuk: on the basis of, in the context of, with regard to.',
    'Rangkaian pembatas: to a certain extent, in most cases, for the most part.',
    'Mengubah satu kata di dalamnya biasanya merusak: "in the base of" tidak ada.',
  ],
  ex: [
    ['It should be noted that the sample was small.', 'Perlu dicatat bahwa sampelnya kecil.'],
    ['The conclusion rests on the basis of limited data.', 'Kesimpulannya bersandar pada data yang terbatas.'],
    ['With regard to cost, the difference is negligible.', 'Berkenaan dengan biaya, selisihnya dapat diabaikan.'],
    ['To a certain extent, both explanations are valid.', 'Sampai batas tertentu, kedua penjelasannya sahih.'],
  ],
  traps: [
    ['In the base of this evidence…', 'On the basis of this evidence…', 'Rangkaiannya tetap: on the basis of.'],
    ['With regards of cost…', 'With regard to cost…', 'Bentuk bakunya tunggal dan memakai to.'],
    ['It should be noted the sample was small.', 'It should be noted that the sample was small.', 'that tidak dihilangkan dalam ragam akademik.'],
  ],
  drills: [
    { t: 'mcq', q: 'Choose the standard bundle.', opts: ['in the base of', 'on the basis of', 'at the basis for', 'by the base of'], a: 1 },
    { t: 'mcq', q: '___ regard to funding, no decision has been made.', opts: ['In', 'With', 'By', 'For'], a: 1 },
    { t: 'mcq', q: 'Which is most appropriate in a research paper?', opts: ['You should know that…', 'It should be noted that…', 'Just so you know…', 'Everybody knows that…'], a: 1 },
    { t: 'fill', q: 'To a certain ___, the results support the theory.', a: ['extent'] },
    { t: 'trans', id: 'Perlu dicatat bahwa datanya terbatas.', a: ['It should be noted that the data are limited.', 'It should be noted that the data is limited.'] },
  ],
},

{
  id: 'c2-18', level: 'C2',
  title: 'Idiom Opacity & Dead Metaphor',
  titleId: 'Kiasan yang sudah mati',
  why: 'Banyak ungkapan Inggris sudah kehilangan gambar aslinya — "in the light of", "a case in point", "bear in mind". Memakainya harus utuh, dan menerjemahkannya kata per kata ke bahasa Indonesia hampir selalu menghasilkan kalimat yang salah.',
  form: 'Ungkapan beku: bentuknya tidak boleh diubah',
  notes: [
    'Kiasan mati tidak lagi terasa kiasan bagi penutur asli — jangan dijelaskan gambarnya.',
    'Bentuknya beku: "bear in mind", bukan "bear on mind" atau "bring in mind".',
    'Kiasan hidup masih bisa diolah; kiasan mati tidak.',
    'Di tulisan resmi, ungkapan yang terlalu bergambar justru menurunkan mutu.',
  ],
  ex: [
    ['In the light of new evidence, the policy was revised.', 'Mengingat bukti baru, kebijakannya direvisi.'],
    ['Bear in mind that the deadline is fixed.', 'Ingatlah bahwa tenggatnya tidak bisa diubah.'],
    ['This is a case in point.', 'Ini contoh yang tepat untuk hal itu.'],
    ['The proposal fell short of expectations.', 'Usulannya tidak memenuhi harapan.'],
  ],
  traps: [
    ['Bear on mind the deadline.', 'Bear in mind the deadline.', 'Bentuknya beku: in mind.'],
    ['In the lights of new evidence…', 'In the light of new evidence…', 'Tidak dijamakkan.'],
    ['This is a case on point.', 'This is a case in point.', 'Kata depannya in.'],
  ],
  drills: [
    { t: 'mcq', q: 'Choose the fixed form.', opts: ['bear on mind', 'bear in mind', 'bring in mind', 'carry in mind'], a: 1 },
    { t: 'mcq', q: '___ the light of the findings, the theory was revised.', opts: ['On', 'At', 'In', 'By'], a: 2 },
    { t: 'mcq', q: 'Which is standard?', opts: ['fell short from expectations', 'fell short of expectations', 'fell short to expectations', 'fell short with expectations'], a: 1 },
    { t: 'fill', q: 'This example is a case in ___.', a: ['point'] },
    { t: 'trans', id: 'Ingatlah bahwa waktunya terbatas.', a: ['Bear in mind that time is limited.', 'Keep in mind that time is limited.'] },
  ],
},

{
  id: 'c2-19', level: 'C2',
  title: 'Pragmatic Softening & Face-work',
  titleId: 'Melunakkan tanpa melemahkan',
  why: 'Di tingkat ini kesantunan bukan lagi soal kata "please", melainkan soal menyusun kalimat agar lawan bicara punya ruang menolak tanpa malu. Terjemahan langsung dari bahasa Indonesia sering terdengar menuntut, padahal maksudnya ramah.',
  form: 'Kala lampau + modal + pembatas: I was wondering whether you might…',
  notes: [
    'Kala lampau menjauhkan permintaan dari saat ini sehingga terasa lebih longgar.',
    'Menumpuk pelunak dibolehkan: "I was just wondering whether you might possibly…".',
    'Ketidaksetujuan dilunakkan dengan pengakuan lebih dulu: "I take your point, although…".',
    'Terlalu banyak pelunak di tulisan akademik justru melemahkan — pakai secukupnya.',
  ],
  ex: [
    ['I was wondering whether you might be free tomorrow.', 'Saya ingin tahu apakah Anda barangkali senggang besok.'],
    ['It might be worth reconsidering that point.', 'Barangkali ada baiknya poin itu ditimbang ulang.'],
    ['I take your point, although the data suggest otherwise.', 'Saya paham maksud Anda, meski datanya menunjukkan hal lain.'],
    ['Would it be possible to move the meeting?', 'Mungkinkah rapatnya digeser?'],
  ],
  traps: [
    ['I want you to move the meeting.', 'Would it be possible to move the meeting?', 'Bentuk langsung terdengar menuntut.'],
    ['You are wrong about the figures.', 'I am not sure the figures are right.', 'Ketidaksetujuan langsung menutup percakapan.'],
    ['I was wondering that you might help.', 'I was wondering whether you might help.', 'Sesudah wonder dipakai whether atau if.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which is the most tentative?', opts: ['Move the deadline.', 'Can you move the deadline?', 'I was wondering whether the deadline might be moved.', 'You must move the deadline.'], a: 2 },
    { t: 'mcq', q: 'I was wondering ___ you could help.', opts: ['that', 'whether', 'what', 'which'], a: 1 },
    { t: 'mcq', q: 'Which softens disagreement best?', opts: ['That is wrong.', 'I take your point, although…', 'No, absolutely not.', 'You clearly misunderstood.'], a: 1 },
    { t: 'fill', q: 'It ___ be worth checking the source again. (pelunak modal)', a: ['might', 'may', 'could'] },
    { t: 'trans', id: 'Mungkinkah kita menjadwalkan ulang?', a: ['Would it be possible to reschedule?', 'Might it be possible to reschedule?'] },
  ],
},

{
  id: 'c2-20', level: 'C2',
  title: 'Semantic Prosody',
  titleId: 'Aura kata',
  why: 'Beberapa kata membawa muatan baik atau buruk yang tidak tercatat di kamus. cause hampir selalu diikuti hal buruk; bring about netral. Memakai kata dengan aura yang salah membuat kalimat terasa aneh tanpa kesalahan yang bisa ditunjuk.',
  form: 'Kata yang menarik pasangan bermuatan tetap',
  notes: [
    'cause menarik akibat buruk: cause damage, cause delay, cause harm.',
    'commit menarik pelanggaran: commit a crime, commit fraud — bukan "commit a success".',
    'utterly, sheer, rife hampir selalu berpasangan dengan hal negatif.',
    'Untuk akibat baik dipakai bring about, lead to, atau result in.',
  ],
  ex: [
    ['The storm caused extensive damage.', 'Badai itu menyebabkan kerusakan luas.'],
    ['The reform brought about lasting improvement.', 'Pembaruan itu membawa perbaikan yang bertahan.'],
    ['Corruption was rife in the sector.', 'Korupsi merajalela di sektor itu.'],
    ['The policy led to higher enrolment.', 'Kebijakan itu menghasilkan pendaftaran yang lebih tinggi.'],
  ],
  traps: [
    ['The reform caused great improvement.', 'The reform brought about great improvement.', 'cause menarik akibat buruk.'],
    ['He committed a great achievement.', 'He achieved a great deal.', 'commit menarik pelanggaran.'],
    ['Opportunities were rife in the region.', 'Opportunities were abundant in the region.', 'rife berpasangan dengan hal negatif.'],
  ],
  drills: [
    { t: 'mcq', q: 'The new law ___ a sharp fall in accidents.', opts: ['caused', 'brought about', 'committed', 'inflicted'], a: 1 },
    { t: 'mcq', q: 'Which collocates naturally with "cause"?', opts: ['cause happiness', 'cause success', 'cause delays', 'cause improvement'], a: 2 },
    { t: 'mcq', q: 'Poverty was ___ in the district.', opts: ['rife', 'abundant', 'plentiful', 'rich'], a: 0 },
    { t: 'fill', q: 'The scandal ___ serious damage to their reputation. (kata kerja beraura negatif)', a: ['caused', 'did'] },
    { t: 'trans', id: 'Kebijakan itu membawa perbaikan besar.', a: ['The policy brought about significant improvement.', 'The policy led to significant improvement.'] },
  ],
},

];
