/* IELTS — Academic & General Training.
   Berisi peta ujian, strategi tiap bagian, deskriptor band, tabel konversi,
   bank soal reading/listening, kartu speaking, dan tugas writing + model. */

export const IELTS = {
id: 'ielts', name: 'IELTS', full: 'International English Language Testing System',
tagline: 'Standar utama untuk kuliah dan migrasi ke Inggris, Australia, Kanada, Selandia Baru.',
overview: {
  durasi: '2 jam 45 menit (tanpa jeda antar bagian)',
  bagian: 'Listening 30 mnt · Reading 60 mnt · Writing 60 mnt · Speaking 11–14 mnt',
  skor: 'Band 0–9, kelipatan 0,5. Skor akhir = rata-rata empat bagian, dibulatkan.',
  jenis: 'Academic (kuliah) dan General Training (kerja/migrasi). Listening & Speaking identik.',
  masa: 'Berlaku 2 tahun',
  komputer: 'Tersedia versi kertas dan komputer; hasil komputer keluar 3–5 hari.'
},
mitos: [
  ['Aksen British wajib.', 'Salah. Penguji menilai kejelasan, bukan aksen. Aksen Indonesia yang jelas tetap band 8.'],
  ['Kata sulit menaikkan band.', 'Hanya bila dipakai tepat. Kata sulit salah pakai justru menurunkan lexical resource.'],
  ['Writing harus panjang.', 'Task 2 minimal 250 kata. Di atas 320 kata biasanya menambah kesalahan, bukan nilai.'],
  ['Speaking harus setuju dengan penguji.', 'Penguji tidak menilai isi pendapat, hanya bahasanya.'],
  ['Boleh mengarang data.', 'Boleh — contoh yang dikarang tidak dinilai kebenarannya, asal masuk akal.']
],
sections: [
{
  id: 'listening', name: 'Listening', dur: '30 menit + 10 menit transfer (kertas)',
  format: '4 bagian, 40 soal. Part 1 percakapan sehari-hari · Part 2 monolog umum · Part 3 diskusi akademik · Part 4 kuliah.',
  strategies: [
    'Baca soal SEBELUM audio diputar. Waktu jeda adalah waktu paling berharga.',
    'Garis bawahi kata kunci dan perhatikan batas kata (NO MORE THAN TWO WORDS).',
    'Jawaban hampir selalu muncul berurutan. Kalau terlewat, lompat — jangan mundur.',
    'Waspadai koreksi penutur: "It\'s on Tuesday — sorry, Wednesday." Jawabannya yang terakhir.',
    'Ejaan salah = nilai nol. Latih ejaan nama, angka, dan alamat.',
    'Angka: 13 vs 30 dibedakan lewat tekanan (thirTEEN vs THIRty).',
    'Isi semua nomor. Tidak ada pengurangan nilai untuk jawaban salah.'
  ],
  trapsId: [
    'Distraktor: penutur menyebut tiga tanggal, hanya satu yang benar.',
    'Parafrase: soal berkata "cost", audio berkata "price/fee/charge".',
    'Bentuk jamak sering menentukan benar-salah: "ticket" vs "tickets".'
  ]
},
{
  id: 'reading', name: 'Reading', dur: '60 menit, tanpa waktu transfer tambahan',
  format: '3 bacaan, 40 soal. Academic: teks jurnal/majalah ilmiah. General: iklan, panduan, artikel.',
  strategies: [
    'Jangan membaca seluruh teks dulu. Baca soal, lalu cari (scan) jawabannya.',
    'Alokasi waktu: 17 · 20 · 23 menit. Bacaan ketiga paling sulit.',
    'True/False/Not Given: NG berarti teks tidak menyinggung sama sekali. False berarti teks menyatakan kebalikannya.',
    'Yes/No/Not Given menguji PENDAPAT penulis, bukan fakta.',
    'Matching Headings: baca kalimat pertama dan terakhir tiap paragraf lebih dulu.',
    'Jawaban selalu berurutan kecuali pada Matching Headings dan Matching Information.',
    'Salin jawaban persis seperti di teks untuk soal isian.'
  ],
  trapsId: [
    'Kata mutlak (always, never, all, only) sering menandai pernyataan False.',
    'Sinonim adalah kunci: teks jarang memakai kata yang sama dengan soal.',
    '"Not Given" bukan berarti kamu tidak menemukannya — pastikan dulu.'
  ]
},
{
  id: 'writing', name: 'Writing', dur: '60 menit (Task 1: 20 mnt · Task 2: 40 mnt)',
  format: 'Academic Task 1: deskripsi grafik/diagram/peta 150 kata. General Task 1: surat 150 kata. Task 2: esai argumentatif 250 kata (bobot dua kali lipat).',
  strategies: [
    'Kerjakan Task 2 lebih dulu bila kamu sering kehabisan waktu — bobotnya dua kali Task 1.',
    'Task 1 Academic: WAJIB ada kalimat overview. Tanpa overview, band maksimal 5 untuk Task Achievement.',
    'Task 1 jangan memberi opini atau menebak sebab. Cukup laporkan data.',
    'Task 2 struktur aman: pendahuluan (parafrase + posisi) → 2 paragraf isi → simpulan.',
    'Satu paragraf satu gagasan utama, ditopang penjelasan dan contoh.',
    'Sisakan 4 menit untuk memeriksa artikel, -s jamak, dan kecocokan subjek-kata kerja.',
    'Hitungan kata: kurang dari batas minimum langsung dipotong nilainya.'
  ],
  trapsId: [
    'Menyalin kalimat soal mentah-mentah tidak dihitung sebagai kata milikmu.',
    'Menulis dua sisi padahal soal meminta satu posisi = keluar tugas.',
    'Menghafal esai jadi mudah terdeteksi dan diberi nilai sangat rendah.'
  ]
},
{
  id: 'speaking', name: 'Speaking', dur: '11–14 menit, tatap muka dengan penguji',
  format: 'Part 1 perkenalan & topik akrab (4–5 mnt) · Part 2 kartu topik, 1 mnt siap + 2 mnt bicara · Part 3 diskusi abstrak (4–5 mnt).',
  strategies: [
    'Part 1: jawab 2–3 kalimat. Jangan hanya "Yes" atau "No", jangan pula berpidato.',
    'Part 2: pakai satu menit persiapan untuk menulis kata kunci, bukan kalimat lengkap.',
    'Part 2: bicaralah sampai penguji menghentikan. Berhenti di detik ke-45 menurunkan nilai.',
    'Part 3: naikkan ke tingkat umum — sebab, akibat, perbandingan lintas generasi/negara.',
    'Perbaikan diri yang halus itu wajar dan tidak mengurangi nilai.',
    'Jangan hafalkan jawaban; penguji terlatih mengenalinya.',
    'Kalau tidak paham, minta pengulangan: "Sorry, could you rephrase that?" — tidak dikurangi nilai.'
  ],
  trapsId: [
    'Diam terlalu lama menurunkan fluency; pakai pengisi alami "Well, let me think…".',
    'Jawaban terlalu pendek membuat penguji kehabisan bahan menilai.',
    'Aksen tidak dinilai, tetapi kejelasan bunyi akhir kata dinilai.'
  ]
}
],

/* Deskriptor band ringkas — empat kriteria writing & speaking. */
bands: [
  { band: 9, label: 'Expert', writing: 'Sepenuhnya menjawab tugas; kohesi tanpa terasa; kosakata dan tata bahasa nyaris tanpa cela.', speaking: 'Bicara mengalir penuh, kesalahan sangat jarang, pelafalan mudah dipahami sepenuhnya.' },
  { band: 8, label: 'Very good', writing: 'Menjawab tugas dengan baik; ide dikembangkan penuh; kesalahan jarang dan tidak sistematis.', speaking: 'Lancar dengan sesekali ragu; kosakata luas termasuk idiom; kesalahan sesekali saja.' },
  { band: 7, label: 'Good', writing: 'Menjawab semua bagian tugas; posisi jelas sepanjang esai; ragam struktur baik dengan sebagian kalimat bebas kesalahan.', speaking: 'Bicara panjang tanpa banyak usaha; kosakata luwes; ragam struktur baik.' },
  { band: 6, label: 'Competent', writing: 'Menjawab tugas walau sebagian kurang berkembang; penghubung dipakai tetapi kadang mekanis; kesalahan ada tapi makna tetap jelas.', speaking: 'Bersedia bicara panjang meski kadang kehilangan koherensi; kosakata cukup untuk membahas topik panjang.' },
  { band: 5, label: 'Modest', writing: 'Menjawab sebagian tugas; ide kurang jelas; kosakata terbatas dan sering salah; kesalahan tata bahasa sering.', speaking: 'Bisa melanjutkan percakapan tetapi sering ragu; kosakata terbatas pada topik akrab.' },
  { band: 4, label: 'Limited', writing: 'Jawaban tidak menjawab tugas; gagasan sulit diikuti; kesalahan mengganggu makna.', speaking: 'Hanya mampu bicara tentang topik akrab; jeda panjang dan sering salah.' }
],

/* Konversi jumlah benar → band (Academic Reading & Listening, perkiraan resmi). */
convert: {
  listening: [[39,9],[37,8.5],[35,8],[32,7.5],[30,7],[26,6.5],[23,6],[18,5.5],[16,5],[13,4.5],[10,4],[8,3.5],[6,3]],
  readingAcademic: [[39,9],[37,8.5],[35,8],[33,7.5],[30,7],[27,6.5],[23,6],[19,5.5],[15,5],[13,4.5],[10,4],[8,3.5],[6,3]],
  readingGeneral: [[40,9],[39,8.5],[37,8],[36,7.5],[34,7],[32,6.5],[30,6],[27,5.5],[23,5],[19,4.5],[15,4],[12,3.5],[9,3]]
},

/* ── Bank bacaan ──────────────────────────────────────────────── */
readings: [
{
  id: 'ie-r1', level: 'B2', title: 'The Return of the Night Train',
  words: 410,
  text: `For most of the twentieth century, the sleeper train was the backbone of long-distance travel across Europe. Passengers boarded in one capital at dusk and stepped onto a platform in another shortly after breakfast, having crossed three borders without noticing. By the early 2000s, however, the model appeared finished. Budget airlines undercut rail fares by a wide margin, and several national operators withdrew their night services entirely, citing losses that ran into tens of millions of euros a year.

The reversal since 2019 has therefore surprised many transport analysts. Austria's national operator, which had quietly bought up carriages abandoned by its German counterpart, now runs an expanding network under a single brand. Sweden reintroduced a Stockholm–Hamburg service with state support, and a private consortium has announced routes linking Brussels to Prague. Bookings on several corridors have exceeded forecasts by thirty per cent.

Three forces explain the shift. The first is environmental: a night train journey typically produces around a tenth of the emissions of the equivalent flight, a figure that has become widely known among younger travellers. The second is the changing economics of aviation, where carbon pricing and higher fuel costs have narrowed the gap in ticket prices. The third, and perhaps most underestimated, is time. A traveller who sleeps on board arrives rested and saves the cost of a hotel night, an advantage that conventional cost comparisons ignore entirely.

Obstacles remain considerable. Rolling stock is expensive: a single modern sleeping carriage costs several million euros and takes years to deliver. Track access charges differ sharply between countries, and a train crossing four networks must satisfy four sets of signalling rules. Staff costs are higher than on daytime services because crews must be replaced en route. Critics argue that without continued subsidy, the revival will stall once novelty fades.

Supporters counter that aviation has been subsidised for decades through untaxed fuel, and that comparing the two modes without accounting for this is misleading. What is not disputed is that demand exists. Whether it proves durable will depend less on passenger enthusiasm than on whether governments treat cross-border rail as infrastructure worth funding rather than a service expected to pay for itself.`,
  questions: [
    { t:'mcq', q:'Menurut bacaan, mengapa kereta malam hampir punah pada awal 2000-an?', opts:['Penumpang tidak menyukai tidur di kereta','Maskapai murah menawarkan tarif jauh lebih rendah','Rel kereta rusak parah','Pemerintah melarang layanan malam'], a:1, why:'Paragraf 1: budget airlines undercut rail fares.' },
    { t:'mcq', q:'Operator negara mana yang membeli gerbong bekas dari negara tetangga?', opts:['Swedia','Belgia','Austria','Republik Ceko'], a:2, why:'Paragraf 2 menyebut Austria membeli gerbong yang ditinggalkan Jerman.' },
    { t:'mcq', q:'Keuntungan yang menurut penulis paling diremehkan adalah', opts:['emisi lebih rendah','harga tiket','waktu dan hemat hotel','kenyamanan kursi'], a:2, why:'"the third, and perhaps most underestimated, is time".' },
    { t:'mcq', q:'TRUE / FALSE / NOT GIVEN: Satu gerbong tidur modern berharga beberapa juta euro.', opts:['TRUE','FALSE','NOT GIVEN'], a:0, why:'Dinyatakan langsung di paragraf 4.' },
    { t:'mcq', q:'TRUE / FALSE / NOT GIVEN: Sebagian besar penumpang kereta malam berusia di bawah 30 tahun.', opts:['TRUE','FALSE','NOT GIVEN'], a:2, why:'Teks hanya menyebut "younger travellers" mengetahui data emisi — tidak ada angka usia penumpang.' },
    { t:'mcq', q:'YES / NO / NOT GIVEN: Penulis berpendapat perbandingan biaya pesawat dan kereta selama ini tidak adil.', opts:['YES','NO','NOT GIVEN'], a:0, why:'Paragraf akhir: membandingkan tanpa memperhitungkan subsidi bahan bakar itu menyesatkan.' },
    { t:'fill', q:'Pemesanan di beberapa koridor melampaui perkiraan sebesar ___ per cent.', a:['thirty','30'], why:'Paragraf 2.' },
    { t:'fill', q:'Perjalanan kereta malam menghasilkan sekitar ___ emisi penerbangan setara. (dua kata)', a:['a tenth','one tenth'], why:'Paragraf 3.' }
  ]
},
{
  id: 'ie-r2', level: 'C1', title: 'Why Cities Are Planting Fewer Trees Than They Announce',
  words: 380,
  text: `Announcements of municipal tree-planting campaigns have become a fixture of urban politics. A city declares that it will plant a million saplings within a decade; the figure is reported widely; and the matter is largely forgotten. Auditors who return to these schemes several years later, however, frequently find a gap between the number planted and the number surviving, and a larger gap still between both figures and the canopy cover actually gained.

The discrepancy arises from three sources. Mortality is the most obvious. Street trees in dense districts face compacted soil, restricted root volume, road salt and mechanical damage; survival rates below sixty per cent in the first five years are common, and in the harshest sites barely half of that. Because most schemes count planting rather than establishment, a tree that dies in year three still appears in the headline total.

The second source is substitution. Where a mature tree is removed for construction and replaced with several saplings, the arithmetic looks favourable but the ecological accounting does not. A single tree of eighty years may hold as much leaf area as several hundred young ones and provides shade, water interception and habitat that saplings cannot match for decades. Counting stems rather than canopy therefore flatters the result.

The third is location. Planting is cheapest where land is available, which is rarely where heat and pollution are worst. Studies across several European and North American cities have found that new planting tends to concentrate in wealthier districts with existing green space, widening rather than narrowing the disparity in canopy cover between neighbourhoods.

None of this argues against planting. It argues for measuring differently. Cities that have shifted to canopy-cover targets, verified by aerial survey, report slower headline progress but more durable gains, in part because the metric forces attention to maintenance budgets. Watering a young tree for three summers is unglamorous work that no mayor announces, yet it determines whether the announcement meant anything at all.`,
  questions: [
    { t:'mcq', q:'Menurut penulis, masalah utama kampanye penanaman pohon adalah', opts:['biayanya terlalu mahal','cara pengukurannya keliru','warga menolak pohon','bibitnya bermutu rendah'], a:1, why:'"It argues for measuring differently."' },
    { t:'mcq', q:'Mengapa mengganti satu pohon tua dengan beberapa bibit dianggap menyesatkan?', opts:['Bibit lebih mahal','Luas daun pohon tua jauh lebih besar','Bibit tumbuh terlalu cepat','Pohon tua tidak memberi keteduhan'], a:1, why:'Paragraf 3.' },
    { t:'mcq', q:'Penanaman baru cenderung terpusat di', opts:['distrik terpanas','kawasan industri','wilayah yang lebih makmur','pinggir jalan raya'], a:2, why:'Paragraf 4.' },
    { t:'mcq', q:'TRUE / FALSE / NOT GIVEN: Semua kota kini memakai target tutupan kanopi.', opts:['TRUE','FALSE','NOT GIVEN'], a:1, why:'Teks hanya menyebut "cities that have shifted", jadi tidak semua — pernyataan bertentangan.' },
    { t:'mcq', q:'Kata "flatters" pada paragraf 3 paling dekat maknanya dengan', opts:['membuat tampak lebih baik dari kenyataan','memperjelas','memperlambat','menghitung ulang'], a:0 },
    { t:'fill', q:'Tingkat kelangsungan hidup pohon jalanan sering di bawah ___ per cent dalam lima tahun pertama.', a:['sixty','60'] }
  ]
}
],

/* ── Bank simakan (dibacakan oleh mesin suara) ─────────────────── */
listenings: [
{
  id: 'ie-l1', level: 'B1', title: 'Part 1 — Booking a Language Course',
  lines: [
    'Good morning, Brightside Language Centre, how can I help?',
    'Hello, I would like to enrol in the evening English course.',
    'Certainly. Could I take your full name, please?',
    'It is Dewi Anggraini. That is D-E-W-I, then A-N-G-G-R-A-I-N-I.',
    'Thank you. And which level are you interested in?',
    'Upper intermediate, I think. I took a placement test last month and scored sixty-eight.',
    'That places you in level five. Classes run on Tuesdays and Thursdays from half past six.',
    'How much is the fee?',
    'The full term is two hundred and forty pounds, but if you pay before the fifteenth of April there is a ten per cent discount.',
    'And how many weeks does the term last?',
    'Twelve weeks, with a one-week break in the middle.'
  ],
  questions: [
    { t:'fill', q:'Nama keluarga peserta: ___', a:['Anggraini'], why:'Dieja huruf per huruf di audio.' },
    { t:'mcq', q:'Kelas berlangsung pada hari', opts:['Senin dan Rabu','Selasa dan Kamis','Rabu dan Jumat','Kamis dan Sabtu'], a:1 },
    { t:'fill', q:'Kelas dimulai pukul ___ (tulis dalam angka, contoh 6.30)', a:['6.30','18.30','6:30','half past six'] },
    { t:'fill', q:'Biaya penuh satu term: £___', a:['240'] },
    { t:'mcq', q:'Diskon diberikan bila membayar sebelum', opts:['5 April','15 April','15 Mei','10 April'], a:1 },
    { t:'fill', q:'Lama satu term: ___ minggu', a:['12','twelve'] }
  ]
},
{
  id: 'ie-l2', level: 'B2', title: 'Part 4 — Lecture: Urban Heat Islands',
  lines: [
    'Today we are looking at the urban heat island effect, which describes the tendency of cities to be warmer than the countryside around them.',
    'The difference is typically between two and five degrees Celsius, although in extreme cases it reaches eight.',
    'Three factors dominate. First, dark surfaces such as asphalt absorb far more solar radiation than vegetation.',
    'Second, the geometry of tall buildings traps heat in what researchers call urban canyons.',
    'Third, waste heat from vehicles and air conditioning adds directly to the load, and this component is growing fastest.',
    'The effect is strongest at night, because concrete releases stored heat slowly after sunset.',
    'Mitigation falls into two categories: increasing reflectivity, for example by painting roofs white, and increasing evaporation through trees and water features.',
    'Trials in Los Angeles found that reflective pavement lowered surface temperature by around six degrees, though the effect on air temperature was smaller.'
  ],
  questions: [
    { t:'mcq', q:'Selisih suhu kota dan desa biasanya', opts:['1–2 derajat','2–5 derajat','5–8 derajat','8–10 derajat'], a:1 },
    { t:'fill', q:'Istilah untuk celah panas di antara gedung tinggi: urban ___', a:['canyons','canyon'] },
    { t:'mcq', q:'Komponen yang tumbuh paling cepat adalah', opts:['aspal gelap','geometri gedung','panas buangan kendaraan dan AC','vegetasi'], a:2 },
    { t:'mcq', q:'Efek paling kuat terjadi pada', opts:['siang hari','sore hari','malam hari','pagi hari'], a:2 },
    { t:'fill', q:'Uji coba di Los Angeles menurunkan suhu permukaan sekitar ___ derajat.', a:['six','6'] }
  ]
}
],

/* ── Speaking ─────────────────────────────────────────────────── */
speaking: {
  part1: [
    'Let\'s talk about your hometown. Where is it and what is it known for?',
    'Do you work or are you a student? Why did you choose that field?',
    'How often do you use public transport?',
    'What kind of music do you listen to when you are busy?',
    'Do you prefer cooking at home or eating out? Why?',
    'How do you usually spend your weekends?',
    'Is there a park near your home? How often do you go there?',
    'Do you enjoy taking photographs? What do you photograph most?',
    'What is the weather like in your city at this time of year?',
    'Do you read newspapers or get news from your phone?',
    'How important is punctuality in your culture?',
    'What did you enjoy most about your school days?'
  ],
  part2: [
    { card: 'Describe a skill you learned that took a long time to master.',
      bullets: ['what the skill is','how you learned it','what made it difficult','and explain how it has been useful to you'],
      lexis: ['pick something up', 'get the hang of it', 'trial and error', 'stick with it', 'pay off', 'muscle memory'] },
    { card: 'Describe a decision you made that you now think was wrong.',
      bullets: ['what the decision was','when you made it','why you made it','and explain what you would do differently'],
      lexis: ['in hindsight', 'rush into', 'weigh up the options', 'with the benefit of experience', 'a valuable lesson'] },
    { card: 'Describe a place in your city that has changed a lot.',
      bullets: ['where it is','what it used to be like','how it has changed','and explain how you feel about the change'],
      lexis: ['run-down', 'regenerated', 'a far cry from', 'lose its character', 'mixed feelings'] },
    { card: 'Describe an app or website you use very often.',
      bullets: ['what it is','what you use it for','how often you use it','and explain why it is so useful'],
      lexis: ['user-friendly', 'intuitive interface', 'save me a great deal of time', 'can\'t do without it', 'a real time-saver'] },
    { card: 'Describe a person who has influenced how you work or study.',
      bullets: ['who the person is','how you know them','what they do','and explain what you learned from them'],
      lexis: ['look up to', 'lead by example', 'rub off on me', 'instil discipline', 'set the bar high'] },
    { card: 'Describe a time when you had to solve a problem quickly.',
      bullets: ['what the problem was','when it happened','what you did','and explain how you felt afterwards'],
      lexis: ['think on my feet', 'under pressure', 'come up with a workaround', 'a close call', 'relieved'] },
    { card: 'Describe a tradition in your country that you value.',
      bullets: ['what the tradition is','when it takes place','what people do','and explain why it matters to you'],
      lexis: ['hand down through generations', 'bring people together', 'deep-rooted', 'a sense of belonging'] },
    { card: 'Describe a book, film, or series that changed how you see something.',
      bullets: ['what it was','when you experienced it','what it was about','and explain how it changed your view'],
      lexis: ['thought-provoking', 'shift my perspective', 'stay with me', 'eye-opening', 'resonate with me'] }
  ],
  part3: [
    'Do you think schools should teach practical skills as well as academic subjects?',
    'Why do some people find it hard to learn new skills as adults?',
    'How has technology changed the way people learn?',
    'Should governments invest more in public transport or in roads?',
    'Do you think cities are becoming more similar to each other?',
    'What responsibility do individuals have for reducing waste?',
    'Is it better for young people to work before university?',
    'How might work change in the next twenty years?',
    'Do traditional festivals still matter in modern societies?',
    'Should news be free for everyone to access?'
  ],
  formula: [
    'POSISI — jawab langsung dalam satu kalimat.',
    'ALASAN — jelaskan mengapa, satu sampai dua kalimat.',
    'CONTOH — beri contoh konkret atau perbandingan.',
    'BATASAN — akui pengecualian: "That said, in rural areas the picture may differ."'
  ]
},

/* ── Writing ──────────────────────────────────────────────────── */
writing: {
  task1Academic: [
    { id:'ie-w1', type:'line graph',
      prompt:'The graph below shows the number of visitors to three museums in London between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      data:'Museum A: 3.2m (2010) → 5.8m (2015) → 5.6m (2020). Museum B: 4.9m → 4.2m → 3.1m. Museum C: 1.1m → 2.0m → 4.4m.',
      plan:['Parafrase soal','Overview: A tertinggi sepanjang periode, C tumbuh paling pesat, B satu-satunya yang menurun','Rincian 1: A dan C','Rincian 2: B'],
      model:`The line graph compares visitor numbers at three London museums over a ten-year period from 2010 to 2020.

Overall, Museum A attracted the largest audience throughout, while Museum C recorded by far the steepest growth. Museum B was the only venue to see a continuous decline.

In 2010, Museum B led with 4.9 million visitors, ahead of Museum A at 3.2 million. Over the following five years this position reversed: Museum A climbed sharply to 5.8 million while Museum B slipped to 4.2 million. Museum A then levelled off, finishing marginally lower at 5.6 million.

Museum C followed a very different trajectory. Starting from just 1.1 million, it nearly doubled by 2015 and then accelerated, reaching 4.4 million by 2020 — a fourfold increase over the decade. Museum B, by contrast, fell steadily to 3.1 million, ending the period in last place, some 1.8 million below its starting figure.` },
    { id:'ie-w2', type:'process',
      prompt:'The diagram shows how instant coffee is produced. Summarise the information by selecting and reporting the main features.',
      data:'Tahapan: harvesting → drying → roasting → grinding → brewing → freeze-drying → packaging.',
      plan:['Parafrase','Overview: tujuh tahap, dari panen sampai pengemasan, seluruhnya linear','Tahap 1–4','Tahap 5–7'],
      model:`The diagram illustrates the seven stages involved in producing instant coffee, from harvesting the beans to packaging the finished product.

Overall, the process is linear rather than cyclical, and can be divided into a preparation phase, in which raw beans are treated, and a processing phase, in which liquid coffee is converted into granules.

To begin with, ripe cherries are harvested and then dried, either in the sun or mechanically. Once dried, the beans are roasted at high temperature, which develops their flavour, before being ground into a fine powder.

In the second phase, the ground coffee is brewed with hot water to produce a concentrated liquid. This liquid is then freeze-dried, a stage in which the water is removed under low temperature and pressure, leaving soluble granules. Finally, the granules are sealed into jars and labelled for distribution.` }
  ],
  task1General: [
    { id:'ie-g1', type:'formal letter',
      prompt:'You recently stayed at a hotel and were unhappy with the service. Write a letter to the manager. In your letter: explain why you were staying there, describe the problems, and say what action you would like the manager to take.',
      plan:['Dear Sir or Madam','Alasan menginap','Dua masalah spesifik + dampaknya','Permintaan konkret','Yours faithfully'],
      model:`Dear Sir or Madam,

I am writing to express my dissatisfaction with my recent stay at your hotel from 3 to 6 March, during which I was attending a conference at the nearby exhibition centre.

Two matters caused particular difficulty. Firstly, although I had requested a quiet room when booking, I was allocated a room directly above the loading bay, where deliveries began at five each morning. Despite raising this at reception on two occasions, no alternative was offered. Secondly, the promised breakfast service was unavailable on both the second and third mornings, which meant I arrived at the conference without having eaten.

Given that the room rate was advertised as including breakfast, I would be grateful if you could refund the breakfast charges for the two affected days and review your room allocation procedure for guests who make specific requests.

I look forward to your response.

Yours faithfully,
Dewi Anggraini` }
  ],
  task2: [
    { id:'ie-t2a', type:'opinion',
      prompt:'Some people believe that university education should be free for all students. Others argue that students should pay the full cost. Discuss both views and give your own opinion.',
      plan:['Pendahuluan: parafrase + posisi jelas','Paragraf 1: pandangan gratis + alasan + contoh','Paragraf 2: pandangan berbayar + alasan','Paragraf 3: posisi saya + jalan tengah','Simpulan'],
      model:`Whether higher education should be funded by the state or paid for by students themselves remains a contested question. While the case for full fees rests on sound economic logic, I believe a substantially subsidised system serves society better.

Those who favour free tuition argue primarily on grounds of access. Where fees are high, capable students from low-income families are deterred from applying, or graduate carrying debt that shapes their career choices for a decade. Countries that have removed tuition fees, such as Germany, report broader socio-economic representation in their universities than comparable systems that rely on fees. Since an educated population generates higher tax revenues and lower welfare costs, the investment is arguably recovered in full.

The opposing view is not without merit. University graduates earn considerably more over a lifetime than those who do not attend, and it can seem unjust for taxpayers who never studied to subsidise those who did. Fees also impose discipline: institutions competing for fee-paying students have an incentive to improve teaching, and students who pay tend to choose courses with more care.

On balance, however, I find the access argument more compelling, provided the system is designed carefully. A model in which tuition is publicly funded but places are competitive preserves both fairness and quality, while income-contingent repayment offers a reasonable compromise where full subsidy is unaffordable.

In conclusion, although charging students has a defensible economic rationale, the wider social returns of an accessible university system outweigh it. Governments should therefore aim to keep direct costs to students as low as their budgets permit.` },
    { id:'ie-t2b', type:'problem-solution',
      prompt:'In many cities, traffic congestion is becoming worse. What are the causes of this problem and what measures could be taken to solve it?',
      plan:['Pendahuluan','Sebab: kepemilikan mobil naik + transportasi umum lemah','Solusi: tarif kemacetan + investasi transportasi umum','Simpulan'],
      model:`Congestion has become a defining feature of urban life in much of the world. Its causes are relatively well understood, and a number of measures have proved effective where governments have been willing to apply them.

The principal cause is the rapid growth in private car ownership, which has consistently outpaced investment in road capacity and, more importantly, in alternatives. As incomes rise, car ownership is treated as a marker of status as much as a practical choice. A second cause is urban sprawl: as housing spreads outward while employment remains concentrated in the centre, commuting distances lengthen and journeys that could once be walked now require a vehicle. Weak or unreliable public transport compounds both problems, since commuters will not abandon their cars for a service that is slower and less predictable.

Two measures appear most effective. The first is congestion charging, under which drivers pay to enter the central district at peak times. London and Singapore both reduced traffic volumes by around fifteen per cent after introducing such schemes, and the revenue was reinvested in buses. The second is sustained investment in rapid transit. Bus rapid transit corridors, in particular, can be built far more quickly and cheaply than metro lines, which matters in fast-growing cities that cannot wait a decade for results.

In conclusion, congestion stems from rising car use, dispersed development and inadequate alternatives. Pricing road space while simultaneously improving public transport addresses both the demand and the supply side, and is more likely to succeed than either measure alone.` },
    { id:'ie-t2c', type:'advantages-disadvantages',
      prompt:'More and more people are working from home. Do the advantages of this development outweigh the disadvantages?',
      plan:['Pendahuluan + posisi','Keuntungan','Kerugian','Penimbangan + simpulan'], model:'' },
    { id:'ie-t2d', type:'two-part question',
      prompt:'Many young people leave their home towns to study or work in large cities. Why does this happen? What effects does it have on the areas they leave behind?',
      plan:['Pendahuluan','Sebab','Dampak','Simpulan'], model:'' }
  ],
  checklist: [
    'Sudah ada kalimat overview (Task 1 Academic)?',
    'Posisi saya konsisten dari pendahuluan sampai simpulan?',
    'Tiap paragraf isi punya satu gagasan utama + penjelasan + contoh?',
    'Minimal 250 kata (Task 2) dan 150 kata (Task 1)?',
    'Sudah memeriksa artikel a/an/the?',
    'Sudah memeriksa -s jamak dan -s orang ketiga?',
    'Tidak ada comma splice?',
    'Tidak menyalin kalimat soal mentah-mentah?',
    'Ragam bahasa formal (tanpa singkatan don\'t/isn\'t)?',
    'Ada minimal dua kalimat kompleks dan satu kalimat pendek?'
  ]
},

/* Bank soal campuran untuk latihan cepat. */
quickBank: [
  { t:'mcq', q:'IELTS Reading Academic terdiri atas berapa bacaan?', opts:['2','3','4','5'], a:1 },
  { t:'mcq', q:'Berapa lama waktu Writing Task 2 yang disarankan?', opts:['20 menit','30 menit','40 menit','60 menit'], a:2 },
  { t:'mcq', q:'Pernyataan yang bertentangan dengan teks diberi label', opts:['TRUE','FALSE','NOT GIVEN','NONE'], a:1 },
  { t:'mcq', q:'Yes/No/Not Given menguji', opts:['fakta','pendapat penulis','ejaan','kosakata'], a:1 },
  { t:'mcq', q:'Skor akhir IELTS dinyatakan dalam', opts:['persen','band 0–9','poin 0–120','skala 10–990'], a:1 },
  { t:'mcq', q:'Berapa menit persiapan di Speaking Part 2?', opts:['30 detik','1 menit','2 menit','3 menit'], a:1 },
  { t:'mcq', q:'Jawaban Listening yang salah eja dinilai', opts:['benar','setengah benar','salah','tergantung penguji'], a:2 },
  { t:'mcq', q:'Bobot Writing Task 2 dibandingkan Task 1 adalah', opts:['sama','dua kali','tiga kali','setengah'], a:1 }
]
};
