/* TOEFL iBT — format baru yang berlaku sejak 21 Januari 2026.
   Struktur, jumlah butir, waktu, dan skala skor mengikuti data/exam-specs.js
   yang diverifikasi ke ETS. Isi soal ditulis sendiri. */

export const TOEFL = {
id: 'toefl', name: 'TOEFL iBT', full: 'Test of English as a Foreign Language (Internet-Based Test)',
tagline: 'Standar utama universitas Amerika Serikat dan Kanada. Format baru berlaku sejak 21 Januari 2026.',
badgeNote: 'Format 2026',

mitos: [
  ['TOEFL masih bernilai 0–120.', 'Sejak Januari 2026 skor utamanya 1–6 per bagian dan keseluruhan. Skala 0–120 hanya dilaporkan sebagai pembanding selama masa transisi dua tahun.'],
  ['Soalnya sama untuk semua orang.', 'Reading dan Listening kini adaptif bertahap — kesulitan berubah di tengah bagian mengikuti performamu.'],
  ['Masih ada Integrated Writing (baca–dengar–tulis).', 'Tidak lagi. Writing kini berisi Build a Sentence, Write an Email, dan Write for an Academic Discussion.'],
  ['Speaking masih empat tugas 45–60 detik.', 'Tidak lagi. Speaking kini 11 butir dalam 8 menit: Listen and Repeat dan Take an Interview.'],
  ['Harus beraksen Amerika.', 'Tidak. Yang dinilai kejelasan, bukan aksen.'],
  ['Tidak boleh mencatat.', 'Boleh, dan sangat dianjurkan — terutama di Listening.']
],

/* Soal contoh untuk jenis tugas baru 2026. */
tasks2026: {
  completeWords: [
    { q:'The results were highly sig______ , suggesting a real effect.', a:'significant', hint:'kata sifat, akhiran -ant' },
    { q:'Students must submit their applic______ before Friday.', a:'application', hint:'kata benda, akhiran -tion' },
    { q:'The professor spoke very clear______ during the lecture.', a:'clearly', hint:'kata keterangan, akhiran -ly' },
    { q:'This method greatly improved the effic______ of the process.', a:'efficiency', hint:'kata benda, akhiran -ency' },
    { q:'The committee will eval______ each proposal next week.', a:'evaluate', hint:'kata kerja, akhiran -ate' },
    { q:'Her argument was based on question______ assumptions.', a:'questionable', hint:'kata sifat, akhiran -able' },
    { q:'The library extended its opening hours indefin______ .', a:'indefinitely', hint:'kata keterangan' },
    { q:'Poor sleep can be detri______ to academic performance.', a:'detrimental', hint:'kata sifat' }
  ],
  dailyLife: [
    { title:'Pengumuman Perpustakaan',
      text:`NOTICE — Main Library, Level 3

Group study rooms 3A–3F will be closed from Monday 14 to Wednesday 16 for electrical work. Bookings already made for those dates have been cancelled automatically and the booking credit returned to your account.

Alternative rooms are available on Level 1 (rooms 1A–1D), but these must be booked in person at the front desk; the online system does not list them.

Level 3 quiet study desks remain open as usual.`,
      questions: [
        { t:'mcq', q:'What should a student with a Monday booking do?', opts:['Nothing — the booking was cancelled and credit returned','Email the library to cancel','Go to room 3A anyway','Pay again online'], a:0 },
        { t:'mcq', q:'How can Level 1 rooms be booked?', opts:['Online','In person at the front desk','By phone','They cannot be booked'], a:1 },
        { t:'mcq', q:'What remains available on Level 3?', opts:['Group rooms','Quiet study desks','The front desk','Nothing'], a:1 }
      ] },
    { title:'Surel dari Dosen',
      text:`From: Dr. Alvarez
Subject: Change to Thursday seminar

Dear all,

Thursday's seminar will now run from 14:00 to 15:30 instead of 13:00 to 14:30, as the room was double-booked. Please note the reading (Chapter 4, not Chapter 3) has also changed — I sent the wrong chapter last week.

Bring one written question about the reading. I will collect these at the start.

Best,
S. Alvarez`,
      questions: [
        { t:'mcq', q:'Why was the seminar time changed?', opts:['The lecturer is unavailable','The room was double-booked','Too few students enrolled','A public holiday'], a:1 },
        { t:'mcq', q:'Which chapter should students read?', opts:['Chapter 3','Chapter 4','Both chapters','Neither'], a:1 },
        { t:'mcq', q:'What must students bring?', opts:['A written question','A printed chapter','Their laptop','A signed form'], a:0 }
      ] }
  ],
  buildSentence: [
    { words:['the','results','were','published','in','a','journal','last','month'], a:'the results were published in a journal last month' },
    { words:['she','has','been','studying','linguistics','for','three','years'], a:'she has been studying linguistics for three years' },
    { words:['few','students','had','completed','the','assignment','before','the','deadline'], a:'few students had completed the assignment before the deadline' },
    { words:['the','professor','explained','the','theory','to','us','clearly'], a:'the professor explained the theory to us clearly' },
    { words:['not','only','did','costs','rise','but','quality','also','fell'], a:'not only did costs rise but quality also fell' },
    { words:['having','reviewed','the','data','the','committee','changed','its','recommendation'], a:'having reviewed the data the committee changed its recommendation' }
  ],
  emails: [
    { situation:'Kamu tidak bisa hadir ujian susulan karena bentrok dengan jadwal kerja. Tulis surel kepada dosen: jelaskan situasinya, usulkan dua waktu alternatif, dan minta konfirmasi.',
      model:`Dear Dr. Alvarez,

I am writing about the make-up examination scheduled for Friday at 10:00. Unfortunately, I work a fixed shift on Friday mornings and cannot attend at that time.

Would either Thursday afternoon or Monday morning be possible instead? I am free from 13:00 on both days and can come to your office at whichever time suits you.

I would be grateful if you could confirm which option works.

Thank you for your understanding,
Rina Hartono` },
    { situation:'Kamu ingin meminjam alat laboratorium untuk proyek akhir. Tulis surel kepada staf lab: sebutkan alat yang dibutuhkan, kapan, untuk apa, dan tanyakan prosedurnya.',
      model:`Dear Lab Office,

I am a final-year student working on a project measuring water turbidity, and I would like to borrow a portable turbidity meter for two weeks from 3 September.

Could you tell me what the borrowing procedure is, and whether a supervisor's signature is required? I am happy to complete any form in advance.

Thank you for your help,
Rina Hartono` }
  ],
  discussions: [
    { professor:'Should universities require every student to take at least one course outside their own faculty?',
      studentA:'Yes — narrow specialists struggle later. A physicist who has never written an essay is at a disadvantage in any job that requires persuasion.',
      studentB:'No — degrees are already crowded. Forcing an unrelated course means cutting something in the major, and students resent requirements they did not choose.',
      model:`I lean towards Student A's position, but for a reason neither has raised. The value of an outside course is not mainly the content; it is exposure to a different standard of evidence. A biology student who sits in a history seminar learns that "proof" there means weighing contested sources, not repeating an experiment. That contrast is difficult to acquire inside one faculty.

Student B is right that timetables are crowded, but the fix is design rather than exemption: a single elective in the first year costs little and comes before students have specialised enough to resent it.` }
  ],
  interview: [
    'Tell me about a place you often study. Why do you go there?',
    'What subject did you find most difficult at school, and how did you handle it?',
    'Do you prefer working alone or with a group? Why?',
    'Describe a time you had to explain something complicated to someone.',
    'What would you change about how your subject is taught?',
    'How do you usually decide what to read first when you have a lot of material?'
  ],
  repeat: [
    'The lecture will begin at half past two in the main hall.',
    'Please submit your assignment before the end of the week.',
    'Researchers collected samples from three different sites.',
    'The library closes early on public holidays.',
    'Her explanation was clear, detailed and easy to follow.',
    'We should consider the long-term consequences of this decision.'
  ]
},

/* Bacaan akademik & kuliah — tetap relevan untuk bagian Academic Passage
   dan Academic Talk pada format baru. */
readings: [
{ id:'tf-r1', level:'C1', title:'Convergent Evolution in Desert Plants', words: 420,
  text:`Plants growing in the world's arid regions face a common set of problems: intense solar radiation, extreme temperature swings between day and night, and water that arrives rarely and departs quickly. Faced with the same pressures, unrelated lineages have arrived repeatedly at strikingly similar solutions — a pattern biologists call convergent evolution.

The most familiar example is the resemblance between American cacti and African euphorbias. Both groups have thick, ribbed, water-storing stems, spines in place of leaves, and a waxy outer layer that limits evaporation. Yet they belong to families that separated long before the continents reached their present positions, and their flowers, which are conservative structures and therefore reliable indicators of ancestry, are entirely different. The similarity is functional, not familial.

Underlying much of this convergence is a shared biochemical strategy known as crassulacean acid metabolism, or CAM. Ordinary plants open the pores in their leaves during daylight to admit carbon dioxide, losing water in the process. CAM plants reverse the schedule: they open their pores at night, when the air is cooler and more humid, store the carbon as an acid, and process it during the day with the pores sealed. The saving is substantial — CAM species can require less than a fifth of the water that comparable plants use to fix the same amount of carbon.

The strategy carries a cost. Storing and releasing acid limits how quickly a plant can grow, which is why CAM species are typically slow-growing and long-lived rather than fast colonisers. Where rainfall is merely seasonal rather than scarce, plants using conventional metabolism outcompete them easily. CAM is therefore best understood not as an improvement but as a trade: reduced growth in exchange for survival under conditions that would otherwise be lethal.

That trade-off explains a puzzle that once troubled botanists. CAM has evolved independently on at least thirty separate occasions across distantly related families, which seemed improbable for so specialised a mechanism. The current explanation is that the genetic machinery involved is not new. The enzymes exist already in most plants, used for other purposes; what changes is the timing of their activation. Evolution, in other words, was not required to invent the solution, only to reschedule it.`,
  questions: [
    { t:'mcq', q:'Menurut bacaan, bunga dipakai untuk menentukan garis keturunan karena', opts:['bentuknya mencolok','strukturnya konservatif','warnanya beragam','mudah diawetkan'], a:1 },
    { t:'mcq', q:'Berapa banyak air yang dibutuhkan tumbuhan CAM dibanding tumbuhan biasa?', opts:['setengahnya','sepertiganya','kurang dari seperlima','sama saja'], a:2 },
    { t:'mcq', q:'Kelemahan utama strategi CAM adalah', opts:['tidak tahan panas','pertumbuhan lambat','butuh tanah subur','rentan hama'], a:1 },
    { t:'mcq', q:'Kata "lethal" paling dekat maknanya dengan', opts:['mematikan','menguntungkan','sementara','langka'], a:0 },
    { t:'mcq', q:'Teka-teki yang membingungkan ahli botani terpecahkan karena', opts:['CAM ternyata satu kali berevolusi','enzimnya sudah ada, hanya waktunya berubah','kaktus dan euphorbia sekerabat','iklim gurun berubah'], a:1 },
    { t:'mcq', q:'Mana yang TIDAK disebutkan sebagai tekanan di daerah kering?', opts:['radiasi matahari kuat','perbedaan suhu siang-malam','air yang cepat hilang','tanah bergaram tinggi'], a:3 }
  ]
},
{ id:'tf-r2', level:'C1', title:'Why Cities Rebuilt Their Tram Networks', words: 390,
  text:`Between 1950 and 1975 most cities in Western Europe and North America removed their tram networks. The reasoning at the time was consistent: trams were slow, they blocked motor traffic, and the rails were expensive to maintain. Buses were cheaper to buy, required no fixed infrastructure, and could be rerouted overnight. Within a generation, thousands of kilometres of track were lifted.

Since the 1990s a substantial number of those same cities have rebuilt tram lines at far greater cost than removal ever saved. Explaining this reversal requires separating three arguments that are often confused.

The first is capacity. A modern tram carries roughly three times as many passengers as an articulated bus and requires one driver rather than three. Where a corridor already carries heavy demand, the labour cost per passenger falls sharply. This argument is strong but narrow: it applies only above a demand threshold that most bus routes never reach.

The second is permanence, and it is more interesting. Rails cannot be moved cheaply, which is precisely their advantage. Because a tram line signals a commitment lasting decades, developers build along it. Studies of several French cities found property investment concentrating within four hundred metres of new tram corridors within five years of opening — an effect not observed along equivalent bus routes, however frequent the service.

The third argument, ride quality, is frequently dismissed as trivial and probably should not be. Surveys consistently find that passengers rate an identical journey more highly on rail than on rubber tyres, and that this preference translates into measurable modal shift among people who own cars. Since the purpose of the investment is usually to persuade drivers to leave their cars behind, a preference that changes behaviour is not a trivial consideration.

None of this establishes that trams are universally superior. It establishes something narrower: that the calculations made in the 1960s counted construction and maintenance costs accurately while omitting land value, labour productivity and passenger preference entirely. The rebuilt networks are less a reversal of policy than a correction of accounting.`,
  questions: [
    { t:'mcq', q:'Mengapa trem dibongkar pada 1950–1975?', opts:['Penumpang menolaknya','Dianggap lambat, menghalangi lalu lintas, dan mahal dirawat','Kotanya menyusut','Rel tidak tersedia'], a:1 },
    { t:'mcq', q:'Keunggulan "permanence" bekerja karena', opts:['rel lebih murah','rel tidak bisa dipindah sehingga menandakan komitmen','trem lebih cepat','bus mudah rusak'], a:1 },
    { t:'mcq', q:'Efek investasi properti terjadi dalam jarak', opts:['100 meter','400 meter','1 kilometer','4 kilometer'], a:1 },
    { t:'mcq', q:'Menurut penulis, argumen kapasitas bersifat', opts:['salah','kuat tetapi sempit','tidak relevan','paling penting'], a:1 },
    { t:'mcq', q:'Kesimpulan penulis adalah bahwa perhitungan 1960-an', opts:['sepenuhnya keliru','benar tetapi mengabaikan beberapa faktor','terlalu mahal','tidak pernah dilakukan'], a:1 },
    { t:'mcq', q:'Sikap penulis terhadap kualitas perjalanan adalah', opts:['menganggapnya sepele','menganggapnya layak diperhitungkan','menolaknya','tidak membahasnya'], a:1 }
  ]
}
],

listenings: [
{ id:'tf-l1', level:'C1', title:'Academic Talk — The Economics of Coffee Certification',
  lines: [
    'Today I want to look at certification schemes in the coffee trade, and specifically at whether they achieve what they promise.',
    'The basic idea is straightforward. A certifying body sets standards, farms that meet them can display a label, and consumers pay a premium for that label.',
    'Now, the first thing to notice is where that premium actually goes. Studies from Central America suggest that between forty and seventy per cent of it is absorbed by intermediaries — cooperatives, exporters, and the certifying bodies themselves.',
    'The second issue is who can afford to be certified in the first place. Audit fees and record-keeping requirements favour larger, better-organised farms.',
    'So there is a selection effect: the farmers who most need higher prices are often the least able to obtain certification.',
    'That said, the evidence is not uniformly negative. Certified cooperatives generally show better access to credit, and crucially, more stable prices, which matters enormously when world coffee prices swing by fifty per cent in a year.',
    'So my conclusion is a qualified one. Certification transfers less money to farmers than consumers assume, but it reduces volatility, and for a smallholder, predictability may be worth more than an extra few cents per kilo.'
  ],
  questions: [
    { t:'mcq', q:'Berapa bagian premi yang diserap perantara?', opts:['10–20%','20–40%','40–70%','70–90%'], a:2 },
    { t:'mcq', q:'Mengapa petani kecil sulit tersertifikasi?', opts:['tidak mau','biaya audit dan pencatatan','lahan terlalu subur','tidak ada pembeli'], a:1 },
    { t:'mcq', q:'Manfaat yang diakui dosen adalah', opts:['harga jauh lebih tinggi','akses kredit dan harga lebih stabil','panen lebih banyak','pajak lebih rendah'], a:1 },
    { t:'mcq', q:'Sikap dosen terhadap sertifikasi adalah', opts:['menolak sepenuhnya','mendukung tanpa syarat','mendukung dengan catatan','tidak berpendapat'], a:2 }
  ]
},
{ id:'tf-l2', level:'B2', title:'Campus Conversation — Changing a Module',
  lines: [
    'Hi, I was hoping to switch from Statistics II to Research Methods this term. Is that still possible?',
    'It is, but the deadline is Friday, and Research Methods is nearly full. Have you completed the prerequisite?',
    'I did Statistics I last year, if that counts.',
    'That covers it, yes. The bigger problem is the timetable — Research Methods runs Tuesday at eleven, which clashes with your language elective.',
    'Ah. Could I move the elective instead?',
    'You could, but the language department handles its own changes, and they usually need two weeks. That would put you past Friday.',
    'So realistically I would have to drop the elective.',
    'Or keep Statistics II this term and take Research Methods in the spring, when there are two sessions to choose from. Honestly, that is what I would suggest.'
  ],
  questions: [
    { t:'mcq', q:'Why does the student want to speak to the adviser?', opts:['To drop a course entirely','To switch modules','To complain about a grade','To register late'], a:1 },
    { t:'mcq', q:'What is the main obstacle?', opts:['A missing prerequisite','A timetable clash','A fee','A full waiting list only'], a:1 },
    { t:'mcq', q:'What does the adviser recommend?', opts:['Dropping the elective','Taking Research Methods in spring','Emailing the language department','Appealing the deadline'], a:1 },
    { t:'mcq', q:"What does the adviser imply about the language department?", opts:['It is unhelpful','It works too slowly for this deadline','It has closed','It shares the same system'], a:1 }
  ]
}
],

quickBank: [
  { t:'mcq', q:'Sejak Januari 2026, skor utama TOEFL iBT memakai skala', opts:['0–120','1–6','10–990','0–9'], a:1, why:'Empat skor bagian dan satu skor keseluruhan pada skala 1–6.' },
  { t:'mcq', q:'Skor keseluruhan TOEFL dihitung dengan', opts:['menjumlahkan empat bagian','rata-rata empat bagian, dibulatkan ke setengah band','nilai tertinggi','nilai Reading saja'], a:1 },
  { t:'mcq', q:'Bagian mana yang kini adaptif bertahap?', opts:['Speaking dan Writing','Reading dan Listening','Semua bagian','Tidak ada'], a:1 },
  { t:'mcq', q:'Berapa butir Reading dan berapa waktunya?', opts:['20 butir / 35 menit','50 butir / 30 menit','30 butir / 54 menit','40 butir / 60 menit'], a:1 },
  { t:'mcq', q:'Berapa butir Listening dan berapa waktunya?', opts:['28 butir / 41 menit','47 butir / 29 menit','30 butir / 36 menit','40 butir / 30 menit'], a:1 },
  { t:'mcq', q:'Speaking format 2026 berisi', opts:['4 tugas dalam 16 menit','11 butir dalam 8 menit','6 tugas dalam 20 menit','2 tugas dalam 10 menit'], a:1 },
  { t:'mcq', q:'Writing format 2026 TIDAK lagi memuat', opts:['Build a Sentence','Write an Email','Integrated Writing (baca–dengar–tulis)','Academic Discussion'], a:2 },
  { t:'mcq', q:'Jenis tugas Speaking yang baru adalah', opts:['Listen and Repeat & Take an Interview','Independent & Integrated','Read Aloud & Describe','Summarise & Argue'], a:0 },
  { t:'mcq', q:'Skala lama 0–120 kini', opts:['dihapus sepenuhnya','tetap dilaporkan sebagai pembanding selama dua tahun','dipakai untuk Speaking saja','diganti 10–990'], a:1 },
  { t:'mcq', q:'Hasil TOEFL kini keluar dalam', opts:['24 jam','72 jam','7 hari','14 hari'], a:1 },
  { t:'mcq', q:'Audio Listening diputar', opts:['sekali','dua kali','tiga kali','sesuai permintaan'], a:0 },
  { t:'mcq', q:'Mencatat selama ujian', opts:['dilarang','diperbolehkan dan dianjurkan','hanya di Reading','hanya di Writing'], a:1 },
  { t:'mcq', q:'Vocabulary in context: "The findings were compelling." ≈', opts:['convincing','confusing','complete','common'], a:0 },
  { t:'mcq', q:'"The species is abundant in the region." ≈', opts:['rare','plentiful','dangerous','tiny'], a:1 },
  { t:'mcq', q:'"Researchers were reluctant to conclude." ≈', opts:['eager','unwilling','able','quick'], a:1 },
  { t:'mcq', q:'"The theory was subsequently revised." ≈', opts:['immediately','later','rarely','partly'], a:1 },
  { t:'mcq', q:'"A negligible amount remained." ≈', opts:['huge','tiny','unclear','toxic'], a:1 },
  { t:'mcq', q:'"The process is inherently unstable." ≈', opts:['by nature','rarely','visibly','recently'], a:0 },
  { t:'mcq', q:'Neither of the two explanations ___ satisfactory.', opts:['are','is','were','have been'], a:1 },
  { t:'mcq', q:'The data ___ collected over a ten-year period.', opts:['was','were','is','has'], a:1 },
  { t:'mcq', q:'It is essential that each participant ___ informed consent.', opts:['gives','give','gave','giving'], a:1 },
  { t:'mcq', q:'Not until the 1980s ___ the theory widely accepted.', opts:['was','it was','did','has'], a:0 },
  { t:'mcq', q:'The results, ___ were unexpected, prompted a second trial.', opts:['that','which','who','what'], a:1 },
  { t:'mcq', q:'___ the sample was small, the findings were consistent.', opts:['Despite','Although','However','Therefore'], a:1 }
]
};
