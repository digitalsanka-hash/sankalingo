/* ── Sistem kala (tenses) bahasa Inggris ──────────────────────────
   Aplikasi ini sudah punya 22 topik tata bahasa yang membahas kala,
   tapi semuanya tersebar dari A1 sampai C2 mengikuti urutan belajar.
   Akibatnya pemelajar bertemu potongan-potongannya satu per satu dan
   TIDAK PERNAH melihat sistemnya sebagai sistem: bahwa tiga waktu
   (lampau · sekarang · depan) dikalikan empat rupa (simple · continuous
   · perfect · perfect continuous) menghasilkan dua belas kala, dan
   bahwa keduabelasnya dibentuk dari pola yang sama.

   Berkas ini menyajikan petaknya utuh.

   KENAPA PENTING KHUSUS UNTUK PENUTUR INDONESIA: bahasa Indonesia
   TIDAK MENGUBAH BENTUK KATA KERJANYA sama sekali. "Saya makan" dipakai
   untuk kemarin, sekarang, dan besok — waktunya ditandai kata terpisah
   (sudah, sedang, akan). Karena itu kala Inggris bukan sekadar hafalan
   bentuk: ia menuntut kebiasaan berpikir yang tidak ada padanannya.
   Tiap butir di bawah karena itu memuat kolom `beda` — apa yang
   dilakukan bahasa Indonesia di tempat yang sama.

   Bentuk tiap butir:
   { id, nama, namaId, waktu, rupa, rumus, rumusNeg, rumusTanya,
     inti, kapan[], penanda[], beda, ex[[en,id]], jebakan[[salah,benar,sebab]],
     topik }  — `topik` menunjuk id topik tata bahasa yang membahasnya
                 secara penuh, supaya halaman ini jadi peta, bukan
                 salinan kedua yang bisa menyimpang.                   */

export const WAKTU = [
  { id: 'present', nama: 'Present', namaId: 'Sekarang' },
  { id: 'past',    nama: 'Past',    namaId: 'Lampau' },
  { id: 'future',  nama: 'Future',  namaId: 'Depan' },
];

export const RUPA = [
  { id: 'simple',     nama: 'Simple',             namaId: 'Sederhana',
    arti: 'Peristiwanya dilihat utuh sebagai satu titik atau satu kebiasaan.' },
  { id: 'continuous', nama: 'Continuous',         namaId: 'Berlangsung',
    arti: 'Peristiwanya dilihat sedang berjalan, belum selesai.' },
  { id: 'perfect',    nama: 'Perfect',            namaId: 'Selesai',
    arti: 'Peristiwanya dihubungkan ke titik waktu lain — hasilnya yang penting.' },
  { id: 'perfectcont',nama: 'Perfect Continuous', namaId: 'Selesai Berlangsung',
    arti: 'Menekankan LAMANYA proses yang menuju titik waktu itu.' },
];

export const TENSES = [

/* ══ SEKARANG ═══════════════════════════════════════════════════ */
{
  id: 'present-simple', waktu: 'present', rupa: 'simple',
  nama: 'Present Simple', namaId: 'Sekarang Sederhana',
  rumus: 'S + V1 (+ -s / -es untuk he/she/it)',
  rumusNeg: 'S + do / does + not + V1',
  rumusTanya: 'Do / Does + S + V1?',
  inti: 'Kebiasaan, kebenaran umum, dan jadwal tetap — bukan "sedang terjadi sekarang".',
  kapan: [
    'Kebiasaan berulang: I go to work at seven.',
    'Kebenaran umum: Water boils at 100 degrees.',
    'Jadwal resmi: The train leaves at six.',
    'Kata kerja keadaan (know, like, want) yang tidak dipakai bentuk -ing.',
  ],
  penanda: ['always', 'usually', 'often', 'every day', 'never', 'sometimes'],
  beda: 'Bahasa Indonesia memakai bentuk yang sama persis ("saya pergi"), jadi -s pada he/she/it adalah tambahan murni yang harus dibiasakan.',
  ex: [
    ['She works in a bank.', 'Dia bekerja di bank.'],
    ['We usually eat at home.', 'Kami biasanya makan di rumah.'],
    ['The shop opens at nine.', 'Tokonya buka pukul sembilan.'],
  ],
  jebakan: [
    ['He work here.', 'He works here.', 'Orang ketiga tunggal wajib -s.'],
    ['She doesn\'t works here.', "She doesn't work here.", 'Sesudah does, kata kerjanya kembali ke bentuk dasar.'],
    ['I am go every day.', 'I go every day.', 'Kebiasaan tidak memakai bentuk berlangsung.'],
  ],
  topik: 'a1-05',
},

{
  id: 'present-continuous', waktu: 'present', rupa: 'continuous',
  nama: 'Present Continuous', namaId: 'Sekarang Berlangsung',
  rumus: 'S + am / is / are + V-ing',
  rumusNeg: 'S + am / is / are + not + V-ing',
  rumusTanya: 'Am / Is / Are + S + V-ing?',
  inti: 'Sedang berjalan saat ini, atau keadaan sementara — juga janji yang sudah diatur.',
  kapan: [
    'Sedang terjadi saat berbicara: I am reading now.',
    'Keadaan sementara: I am staying with my aunt this month.',
    'Janji masa depan yang sudah diatur: I am meeting her at three.',
    'Kebiasaan yang mengganggu, dengan always: He is always losing his keys.',
  ],
  penanda: ['now', 'at the moment', 'currently', 'today', 'this week'],
  beda: 'Indonesia memakai "sedang", kata terpisah. Inggris mengubah kata kerjanya, dan wajib memakai to be — bagian yang paling sering hilang.',
  ex: [
    ['I am waiting for the bus.', 'Saya sedang menunggu bus.'],
    ['They are building a new bridge.', 'Mereka sedang membangun jembatan baru.'],
    ['She is meeting the client tomorrow.', 'Dia ada janji dengan klien besok.'],
  ],
  jebakan: [
    ['I waiting for you.', 'I am waiting for you.', 'to be tidak boleh dihilangkan.'],
    ['I am knowing the answer.', 'I know the answer.', 'Kata kerja keadaan tidak dipakai berbentuk -ing.'],
    ['She is work now.', 'She is working now.', 'Sesudah to be dipakai bentuk -ing.'],
  ],
  topik: 'a1-06',
},

{
  id: 'present-perfect', waktu: 'present', rupa: 'perfect',
  nama: 'Present Perfect', namaId: 'Selesai Sekarang',
  rumus: 'S + have / has + V3',
  rumusNeg: 'S + have / has + not + V3',
  rumusTanya: 'Have / Has + S + V3?',
  inti: 'Peristiwa lampau yang HASILNYA masih terasa sekarang — waktunya tidak disebut.',
  kapan: [
    'Pengalaman hidup: I have been to Japan.',
    'Hasil yang masih berlaku: I have lost my key. (sekarang masih hilang)',
    'Belum/sudah: She has already finished.',
    'Rentang yang belum berakhir: I have lived here for ten years.',
  ],
  penanda: ['just', 'already', 'yet', 'ever', 'never', 'since', 'for'],
  beda: 'Bahasa Indonesia hanya punya "sudah" — dan "sudah" dipakai juga untuk lampau biasa. Karena itu present perfect dan past simple sering tertukar; pembedanya adalah ADA-TIDAKNYA keterangan waktu tertentu.',
  ex: [
    ['I have finished my homework.', 'Saya sudah menyelesaikan PR saya.'],
    ['She has never eaten durian.', 'Dia belum pernah makan durian.'],
    ['We have known each other since 2015.', 'Kami saling kenal sejak 2015.'],
  ],
  jebakan: [
    ['I have finished it yesterday.', 'I finished it yesterday.', 'Waktu tertentu menuntut past simple.'],
    ['I have went there.', 'I have gone there.', 'Sesudah have dipakai bentuk ketiga, bukan kedua.'],
    ['She has lived here since ten years.', 'She has lived here for ten years.', 'since untuk titik mulai, for untuk lamanya.'],
  ],
  topik: 'a2-04',
},

{
  id: 'present-perfect-cont', waktu: 'present', rupa: 'perfectcont',
  nama: 'Present Perfect Continuous', namaId: 'Selesai Berlangsung Sekarang',
  rumus: 'S + have / has + been + V-ing',
  rumusNeg: 'S + have / has + not + been + V-ing',
  rumusTanya: 'Have / Has + S + been + V-ing?',
  inti: 'Menekankan LAMANYA kegiatan yang dimulai di masa lalu dan masih berjalan.',
  kapan: [
    'Menjawab "How long…?": I have been working here for three years.',
    'Menjelaskan keadaan sekarang lewat prosesnya: You look tired — have you been running?',
    'Kegiatan yang baru berhenti dan bekasnya terlihat: It has been raining. (jalanan basah)',
  ],
  penanda: ['for', 'since', 'all day', 'lately', 'recently', 'how long'],
  beda: 'Tidak ada padanannya sama sekali dalam bahasa Indonesia; paling dekat "sudah … sejak/selama", tapi penekanan pada PROSES-nya hilang dalam terjemahan.',
  ex: [
    ['I have been studying English for three years.', 'Saya sudah belajar bahasa Inggris tiga tahun.'],
    ['She has been working since eight.', 'Dia sudah bekerja sejak pukul delapan.'],
    ['It has been raining all morning.', 'Hujan turun sepanjang pagi.'],
  ],
  jebakan: [
    ['I have been knowing him for years.', 'I have known him for years.', 'know adalah kata kerja keadaan.'],
    ['I am studying here since 2020.', 'I have been studying here since 2020.', 'since menuntut bentuk perfect.'],
    ['She has been work all day.', 'She has been working all day.', 'been diikuti bentuk -ing.'],
  ],
  topik: 'b1-01',
},

/* ══ LAMPAU ═════════════════════════════════════════════════════ */
{
  id: 'past-simple', waktu: 'past', rupa: 'simple',
  nama: 'Past Simple', namaId: 'Lampau Sederhana',
  rumus: 'S + V2',
  rumusNeg: 'S + did + not + V1',
  rumusTanya: 'Did + S + V1?',
  inti: 'Peristiwa selesai pada waktu tertentu di masa lalu — waktunya disebut atau jelas.',
  kapan: [
    'Kejadian selesai: I visited Bali last year.',
    'Rangkaian kejadian dalam cerita: He opened the door and walked in.',
    'Kebiasaan lampau yang sudah berhenti: I played football every weekend.',
  ],
  penanda: ['yesterday', 'last week', 'in 2019', 'ago', 'when I was young'],
  beda: 'Bahasa Indonesia menandai lampau dengan kata "kemarin/tadi" tanpa mengubah kata kerjanya, jadi bentuk V2 — terutama 50-an kata kerja tak beraturan — murni hafalan baru.',
  ex: [
    ['We watched a film last night.', 'Kami menonton film tadi malam.'],
    ['She went to the market yesterday.', 'Dia pergi ke pasar kemarin.'],
    ['I did not see him.', 'Saya tidak melihatnya.'],
  ],
  jebakan: [
    ['I didn\'t went there.', "I didn't go there.", 'Sesudah did, kata kerjanya kembali ke bentuk dasar.'],
    ['Did you saw him?', 'Did you see him?', 'Sama: sesudah did dipakai bentuk dasar.'],
    ['I have seen him yesterday.', 'I saw him yesterday.', 'Ada keterangan waktu tertentu → past simple.'],
  ],
  topik: 'a1-18',
},

{
  id: 'past-continuous', waktu: 'past', rupa: 'continuous',
  nama: 'Past Continuous', namaId: 'Lampau Berlangsung',
  rumus: 'S + was / were + V-ing',
  rumusNeg: 'S + was / were + not + V-ing',
  rumusTanya: 'Was / Were + S + V-ing?',
  inti: 'Sedang berjalan pada satu titik di masa lalu — sering jadi latar bagi kejadian lain.',
  kapan: [
    'Latar cerita: It was raining when I left.',
    'Kegiatan panjang yang disela kejadian pendek: I was cooking when the phone rang.',
    'Dua kegiatan berbarengan: She was reading while he was cooking.',
  ],
  penanda: ['while', 'when', 'at that moment', 'all evening'],
  beda: 'Padanan "sedang … ketika" ada, tapi Indonesia tidak mewajibkan penanda apa pun — di Inggris was/were tidak boleh hilang.',
  ex: [
    ['I was sleeping when you called.', 'Saya sedang tidur ketika kamu menelepon.'],
    ['They were waiting at the station.', 'Mereka sedang menunggu di stasiun.'],
    ['What were you doing at ten?', 'Kamu sedang apa pukul sepuluh?'],
  ],
  jebakan: [
    ['I was slept.', 'I was sleeping.', 'Sesudah was dipakai bentuk -ing, bukan V3.'],
    ['While I cooked, the phone rang.', 'While I was cooking, the phone rang.', 'while menuntut bentuk berlangsung.'],
    ['They were waited.', 'They were waiting.', 'Bentuk -ing, bukan bentuk kedua.'],
  ],
  topik: 'a2-02',
},

{
  id: 'past-perfect', waktu: 'past', rupa: 'perfect',
  nama: 'Past Perfect', namaId: 'Selesai Sebelum Lampau',
  rumus: 'S + had + V3',
  rumusNeg: 'S + had + not + V3',
  rumusTanya: 'Had + S + V3?',
  inti: 'Peristiwa yang selesai LEBIH DULU dari peristiwa lampau lainnya — kala untuk menata urutan.',
  kapan: [
    'Menandai mana yang duluan: When I arrived, the train had left.',
    'Alasan di masa lampau: He was tired because he had worked all night.',
    'Dalam kalimat tak langsung, menggantikan present perfect dan past simple.',
  ],
  penanda: ['already', 'before', 'after', 'by the time', 'when'],
  beda: 'Bahasa Indonesia menata urutan dengan kata "sudah/sebelumnya" saja. Kalau urutannya sudah jelas dari kata sambung, penutur Indonesia cenderung merasa had tidak perlu — padahal di ragam baku ia tetap dipakai.',
  ex: [
    ['By the time we got there, the show had finished.', 'Saat kami tiba, pertunjukannya sudah selesai.'],
    ['She had already left when I called.', 'Dia sudah pergi ketika saya menelepon.'],
    ['He realised he had forgotten his passport.', 'Dia sadar telah melupakan paspornya.'],
  ],
  jebakan: [
    ['When I arrived, the train left.', 'When I arrived, the train had left.', 'Tanpa had, artinya kereta berangkat SESUDAH kamu tiba.'],
    ['I had went home.', 'I had gone home.', 'Sesudah had dipakai bentuk ketiga.'],
    ['He had finish before six.', 'He had finished before six.', 'Bentuk ketiga, bukan dasar.'],
  ],
  topik: 'b1-02',
},

{
  id: 'past-perfect-cont', waktu: 'past', rupa: 'perfectcont',
  nama: 'Past Perfect Continuous', namaId: 'Selesai Berlangsung Sebelum Lampau',
  rumus: 'S + had + been + V-ing',
  rumusNeg: 'S + had + not + been + V-ing',
  rumusTanya: 'Had + S + been + V-ing?',
  inti: 'Lamanya proses yang berjalan sampai satu titik di masa lalu.',
  kapan: [
    'Menekankan durasi sebelum kejadian lampau: They had been waiting for hours when help arrived.',
    'Menjelaskan sebab keadaan lampau: Her eyes were red — she had been crying.',
  ],
  penanda: ['for', 'since', 'all day', 'before'],
  beda: 'Kala paling jauh dari bahasa Indonesia: menggabungkan tiga gagasan (lampau + selesai + berlangsung) yang di bahasa kita ditandai paling banyak satu kata.',
  ex: [
    ['They had been waiting for hours when the rescue team arrived.', 'Mereka sudah menunggu berjam-jam saat tim penyelamat tiba.'],
    ['I had been studying for six hours before the exam.', 'Saya sudah belajar enam jam sebelum ujiannya.'],
    ['It had been raining before the match was called off.', 'Hujan sudah turun sebelum pertandingannya dibatalkan.'],
  ],
  jebakan: [
    ['They had waiting for hours.', 'They had been waiting for hours.', 'been tidak boleh hilang.'],
    ['She had been cry.', 'She had been crying.', 'been diikuti bentuk -ing.'],
    ['I had been knowing him.', 'I had known him.', 'Kata kerja keadaan tidak dipakai berbentuk berlangsung.'],
  ],
  topik: 'b1-03',
},

/* ══ DEPAN ══════════════════════════════════════════════════════ */
{
  id: 'future-simple', waktu: 'future', rupa: 'simple',
  nama: 'Future Simple (will)', namaId: 'Depan Sederhana',
  rumus: 'S + will + V1',
  rumusNeg: 'S + will not (won\'t) + V1',
  rumusTanya: 'Will + S + V1?',
  inti: 'Keputusan saat itu juga, janji, tawaran, dan ramalan tanpa bukti di depan mata.',
  kapan: [
    'Keputusan mendadak: The phone is ringing — I will answer it.',
    'Janji: I will call you tonight.',
    'Ramalan berdasar pendapat: I think it will rain.',
    'Tawaran dan permintaan: Will you help me?',
  ],
  penanda: ['tomorrow', 'next week', 'soon', 'I think', 'probably'],
  beda: '"Akan" dalam bahasa Indonesia menutupi will, be going to, present continuous, dan present simple sekaligus. Salah pilih tidak membuat kalimatnya salah tata bahasa, tapi mengubah kesannya — dan inilah yang paling sulit dirasakan.',
  ex: [
    ['I will help you with that.', 'Saya akan membantumu.'],
    ['She will not come tonight.', 'Dia tidak akan datang malam ini.'],
    ['Will you open the window?', 'Maukah kamu membuka jendelanya?'],
  ],
  jebakan: [
    ['I will to help you.', 'I will help you.', 'Sesudah will tidak dipakai to.'],
    ['He will comes tomorrow.', 'He will come tomorrow.', 'Sesudah will dipakai bentuk dasar tanpa -s.'],
    ['I will call you when I will arrive.', 'I will call you when I arrive.', 'Klausa waktu tidak memakai will.'],
  ],
  topik: 'a2-07',
},

{
  id: 'future-continuous', waktu: 'future', rupa: 'continuous',
  nama: 'Future Continuous', namaId: 'Depan Berlangsung',
  rumus: 'S + will be + V-ing',
  rumusNeg: 'S + will not be + V-ing',
  rumusTanya: 'Will + S + be + V-ing?',
  inti: 'Sedang berlangsung pada satu titik di masa depan.',
  kapan: [
    'Kegiatan yang akan sedang berjalan: This time tomorrow I will be flying to Jakarta.',
    'Menanyakan rencana dengan sopan: Will you be using the car tonight?',
  ],
  penanda: ['this time tomorrow', 'at eight tonight', 'all next week'],
  beda: 'Indonesia menggabungkan "akan" dan "sedang" jadi "akan sedang", yang terasa janggal — sehingga bentuk ini jarang dipakai pemelajar walau maknanya sering dibutuhkan.',
  ex: [
    ['This time next week I will be sitting on a beach.', 'Jam segini pekan depan saya sedang duduk di pantai.'],
    ['She will be working late tonight.', 'Dia akan sedang bekerja sampai malam.'],
    ['Will you be joining us?', 'Apakah kamu akan ikut bersama kami?'],
  ],
  jebakan: [
    ['I will being work.', 'I will be working.', 'will + be + bentuk -ing.'],
    ['I will be work at nine.', 'I will be working at nine.', 'Bentuk -ing tidak boleh hilang.'],
    ['This time tomorrow I will fly.', 'This time tomorrow I will be flying.', 'Titik waktu tertentu menuntut bentuk berlangsung.'],
  ],
  topik: 'b1-04',
},

{
  id: 'future-perfect', waktu: 'future', rupa: 'perfect',
  nama: 'Future Perfect', namaId: 'Selesai Sebelum Depan',
  rumus: 'S + will have + V3',
  rumusNeg: 'S + will not have + V3',
  rumusTanya: 'Will + S + have + V3?',
  inti: 'Akan sudah selesai sebelum satu titik di masa depan.',
  kapan: [
    'Tenggat: By Friday I will have finished the report.',
    'Perkiraan pencapaian: By 2030 the city will have doubled in size.',
  ],
  penanda: ['by then', 'by Friday', 'by the time', 'in two years'],
  beda: 'Padanannya "akan sudah" — hampir tidak pernah diucapkan orang Indonesia, sehingga bentuk ini terasa asing walau rumusnya mudah.',
  ex: [
    ['By nine tonight I will have finished the report.', 'Pukul sembilan nanti laporannya akan sudah selesai.'],
    ['She will have left by the time you arrive.', 'Dia akan sudah pergi saat kamu tiba.'],
    ['We will have saved enough by December.', 'Kami akan sudah menabung cukup pada Desember.'],
  ],
  jebakan: [
    ['By Friday I will finish it.', 'By Friday I will have finished it.', 'by + waktu depan menuntut future perfect.'],
    ['I will have finish.', 'I will have finished.', 'Sesudah have dipakai bentuk ketiga.'],
    ['She will has left.', 'She will have left.', 'Sesudah will selalu have, bukan has.'],
  ],
  topik: 'b1-04',
},

{
  id: 'future-perfect-cont', waktu: 'future', rupa: 'perfectcont',
  nama: 'Future Perfect Continuous', namaId: 'Selesai Berlangsung Sebelum Depan',
  rumus: 'S + will have been + V-ing',
  rumusNeg: 'S + will not have been + V-ing',
  rumusTanya: 'Will + S + have been + V-ing?',
  inti: 'Lamanya proses yang akan sudah berjalan sampai satu titik di masa depan. Kala paling jarang dipakai.',
  kapan: [
    'Menekankan durasi sampai tenggat: By June I will have been working here for ten years.',
  ],
  penanda: ['by then … for', 'by next year … for'],
  beda: 'Praktis tidak punya padanan; dalam percakapan sehari-hari penutur asli pun jarang memakainya. Cukup dikenali saat membaca.',
  ex: [
    ['By June I will have been working here for ten years.', 'Pada Juni nanti saya akan sudah bekerja di sini sepuluh tahun.'],
    ['By midnight they will have been driving for twelve hours.', 'Pada tengah malam mereka akan sudah menyetir dua belas jam.'],
  ],
  jebakan: [
    ['By June I will have worked here for ten years and still working.', 'By June I will have been working here for ten years.', 'Untuk menekankan durasi yang berlanjut, dipakai bentuk berlangsung.'],
    ['I will have been work.', 'I will have been working.', 'been diikuti bentuk -ing.'],
    ['I will has been working.', 'I will have been working.', 'Sesudah will selalu have.'],
  ],
  topik: 'b1-04',
},

];

/* ── Bentuk masa depan lain yang BUKAN kala ───────────────────────
   Dipisahkan supaya petak dua-belas kalanya tetap bersih. Semua ini
   menyatakan masa depan, tapi secara tata bahasa bukan kala tersendiri. */
export const DEPAN_LAIN = [
  { nama: 'be going to + V1', namaId: 'Niat & bukti',
    inti: 'Niat yang sudah ada sebelum berbicara, atau ramalan berdasarkan bukti yang TERLIHAT.',
    ex: ['Look at those clouds — it is going to rain.', 'Lihat awannya — sebentar lagi hujan.'],
    topik: 'a2-08' },
  { nama: 'Present Continuous', namaId: 'Janji yang sudah diatur',
    inti: 'Janji temu yang sudah disepakati dengan orang lain, biasanya sudah ada di agenda.',
    ex: ['I am meeting the client at three.', 'Saya ada janji dengan klien pukul tiga.'],
    topik: 'a2-09' },
  { nama: 'Present Simple', namaId: 'Jadwal resmi',
    inti: 'Jadwal yang tidak bisa diubah sendiri: kereta, pesawat, bioskop, kelas.',
    ex: ['The train leaves at 6.40.', 'Keretanya berangkat pukul 6.40.'],
    topik: 'b1-25' },
  { nama: 'was / were going to', namaId: 'Masa depan di masa lalu',
    inti: 'Rencana lampau yang biasanya tidak jadi terlaksana.',
    ex: ['I was going to call you, but I forgot.', 'Saya berniat meneleponmu, tapi lupa.'],
    topik: 'b2-09' },
];

/* ── Kala dalam bentuk pasif ──────────────────────────────────── */
export const PASIF = [
  ['Present Simple',        'is / are + V3',            'The office is cleaned every day.'],
  ['Present Continuous',    'is / are being + V3',      'The road is being repaired.'],
  ['Present Perfect',       'has / have been + V3',     'The letter has been sent.'],
  ['Past Simple',           'was / were + V3',          'The temple was built in 1520.'],
  ['Past Continuous',       'was / were being + V3',    'The car was being washed.'],
  ['Past Perfect',          'had been + V3',            'The report had been finished.'],
  ['Future Simple',         'will be + V3',             'The results will be announced.'],
  ['Future Perfect',        'will have been + V3',      'It will have been completed by June.'],
  ['Modal',                 'modal + be + V3',          'This must be done today.'],
];

/* ── Cara cepat mengenali kala dari bentuknya ─────────────────────
   Dibaca dari atas ke bawah; yang cocok pertama itulah kalanya. */
export const PENGENAL = [
  ['will have been + V-ing', 'Future Perfect Continuous'],
  ['will have + V3',         'Future Perfect'],
  ['will be + V-ing',        'Future Continuous'],
  ['will + V1',              'Future Simple'],
  ['had been + V-ing',       'Past Perfect Continuous'],
  ['had + V3',               'Past Perfect'],
  ['have / has been + V-ing','Present Perfect Continuous'],
  ['have / has + V3',        'Present Perfect'],
  ['was / were + V-ing',     'Past Continuous'],
  ['am / is / are + V-ing',  'Present Continuous'],
  ['V2 (bentuk kedua)',      'Past Simple'],
  ['V1 (+ -s)',              'Present Simple'],
];

export const tenseById = id => TENSES.find(t => t.id === id);
export const tenseGrid = () =>
  WAKTU.map(w => ({ ...w, isi: RUPA.map(r => TENSES.find(t => t.waktu === w.id && t.rupa === r.id)) }));
