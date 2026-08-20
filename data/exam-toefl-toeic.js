/* TOEIC Listening & Reading. TOEFL pindah ke data/exam-toefl.js
   karena formatnya berubah total pada 21 Januari 2026. */

export const TOEIC = {
id: 'toeic', name: 'TOEIC', full: 'Test of English for International Communication',
tagline: 'Standar dunia kerja: rekrutmen, promosi, dan penempatan di perusahaan multinasional.',
overview: {
  durasi: 'Listening & Reading: 2 jam · Speaking & Writing: 1 jam 20 menit (terpisah)',
  bagian: 'L&R: 100 soal listening + 100 soal reading, semua pilihan ganda',
  skor: 'L&R 10–990 (masing-masing 5–495) · S&W 0–400',
  jenis: 'Bahasa Inggris bisnis dan situasi kerja sehari-hari.',
  masa: 'Umumnya diakui 2 tahun',
  catatan: 'Tidak ada nilai minus untuk jawaban salah — isi semua nomor.'
},
mitos: [
  ['TOEIC lebih mudah dari IELTS.', 'Berbeda, bukan lebih mudah. TOEIC menuntut kecepatan ekstrem: 100 soal reading dalam 75 menit.'],
  ['Kosakata bisnis saja cukup.', 'Sebagian besar soal justru situasi sehari-hari di tempat kerja: jadwal, pengumuman, keluhan.'],
  ['Boleh mengosongkan jawaban.', 'Jangan. Tidak ada pengurangan nilai, jadi tebakan tetap menguntungkan.']
],
sections: [
{ id:'l1', name:'Listening Part 1 — Photographs', dur:'6 soal',
  format:'Satu foto, empat kalimat dibacakan. Pilih yang paling tepat menggambarkan foto.',
  strategies:['Amati foto: siapa, sedang apa, di mana, benda apa yang menonjol.','Waspada bunyi mirip: "walking" vs "working", "sitting" vs "setting".','Pilihan pasif seperti "The chairs are being arranged" hanya benar bila ada orang yang mengerjakan.'],
  trapsId:['Kalimat yang menyebut benda yang tidak ada di foto.','Kata kerja yang benar tetapi pelakunya salah.'] },
{ id:'l2', name:'Listening Part 2 — Question-Response', dur:'25 soal',
  format:'Satu pertanyaan, tiga jawaban. Tidak ada teks di lembar soal.',
  strategies:['Tangkap kata tanya pertama — itu menentukan jenis jawaban.','Jawaban tidak langsung sering benar: "When is the meeting?" → "It was cancelled."','Hindari pilihan yang mengulang bunyi pertanyaan; itu biasanya jebakan.'],
  trapsId:['Pengulangan kata dari pertanyaan.','Jawaban yang benar secara tata bahasa tetapi tidak nyambung.'] },
{ id:'l3', name:'Listening Part 3 — Conversations', dur:'39 soal · 13 percakapan',
  format:'Percakapan 2–3 orang, tiga soal per percakapan. Sebagian disertai grafik.',
  strategies:['Baca ketiga soal sebelum audio dimulai.','Soal pertama biasanya tentang topik/tempat, soal terakhir tentang tindakan berikutnya.','Untuk soal bergrafik, hubungkan informasi audio dengan tabel — jawabannya tidak diucapkan langsung.'],
  trapsId:['Perubahan rencana di tengah percakapan.','Angka yang disebut dua kali dengan nilai berbeda.'] },
{ id:'l4', name:'Listening Part 4 — Talks', dur:'30 soal · 10 monolog',
  format:'Pengumuman, pesan telepon, iklan radio, pidato singkat.',
  strategies:['Kenali jenis monolog dari kalimat pertama — itu memandu ekspektasi.','Pesan telepon hampir selalu punya soal "Why is the speaker calling?"','Catat angka dan nama tempat dengan simbol.'],
  trapsId:['Instruksi ganda: "press one… but if you already have an account, press two".'] },
{ id:'r5', name:'Reading Part 5 — Incomplete Sentences', dur:'30 soal',
  format:'Kalimat rumpang, empat pilihan. Menguji tata bahasa dan kosakata.',
  strategies:['Lihat pilihan dulu: kalau empat pilihan satu akar kata, ini soal kelas kata — cukup lihat posisi rumpang.','Target 20 detik per soal. Ini bagian tercepat untuk menabung waktu.','Hafalkan preposisi melekat dan pola kata kerja — dua kategori terbesar di bagian ini.'],
  trapsId:['Pilihan yang benar artinya tetapi salah kelas katanya.'] },
{ id:'r6', name:'Reading Part 6 — Text Completion', dur:'16 soal · 4 teks',
  format:'Surel atau memo dengan empat rumpang, salah satunya kalimat utuh.',
  strategies:['Untuk rumpang kalimat, cek rujukan: kalimat yang benar harus nyambung dengan kalimat sebelum dan sesudah.','Perhatikan tenses seluruh teks, bukan hanya kalimat rumpang.'],
  trapsId:['Kalimat yang benar isinya tetapi mengulang informasi yang sudah ada.'] },
{ id:'r7', name:'Reading Part 7 — Reading Comprehension', dur:'54 soal · teks tunggal, ganda, dan rangkap tiga',
  format:'Iklan, surel berantai, jadwal, artikel. Bagian terpanjang dan paling menentukan skor.',
  strategies:['Baca soal dulu, lalu cari. Jangan membaca seluruh teks.','Untuk teks ganda/rangkap tiga, minimal satu soal menuntut menggabungkan dua dokumen — tandai hubungannya.','Sisakan 25 menit khusus untuk Part 7; banyak peserta kehabisan waktu di sini.','Soal "What is implied?" menuntut inferensi, bukan kutipan langsung.'],
  trapsId:['Tanggal dan harga yang berubah di dokumen kedua.','Nama orang yang mirip di surel berantai.'] }
],
bands: [
  { band:'905–990', label:'International Proficiency', writing:'Setara C1–C2', speaking:'Mampu memimpin rapat dan negosiasi.' },
  { band:'785–900', label:'Working Proficiency Plus', writing:'Setara B2–C1', speaking:'Mampu menangani sebagian besar situasi kerja.' },
  { band:'605–780', label:'Limited Working Proficiency', writing:'Setara B1–B2', speaking:'Mampu berkomunikasi pada tugas rutin.' },
  { band:'405–600', label:'Elementary Proficiency Plus', writing:'Setara A2–B1', speaking:'Terbatas pada topik akrab.' },
  { band:'255–400', label:'Elementary Proficiency', writing:'Setara A2', speaking:'Percakapan dasar.' },
  { band:'10–250', label:'Basic', writing:'Setara A1', speaking:'Sangat terbatas.' }
],
convert: {
  listeningRaw: [[96,495],[90,470],[80,420],[70,365],[60,310],[50,255],[40,200],[30,150],[20,95]],
  readingRaw: [[96,495],[90,460],[80,405],[70,350],[60,300],[50,245],[40,190],[30,140],[20,85]]
},
readings: [
{ id:'tc-r1', level:'B1', title:'Part 7 — Double Passage: Venue Booking', words: 300,
  text:`EMAIL 1
From: r.hartono@meridianconsult.co.id
To: bookings@ravenhallcentre.com
Subject: Conference room availability — 14 October

Dear Bookings Team,

I am organising a one-day training session for 45 participants on Tuesday 14 October. We would need a room with projection facilities from 08:30 to 17:00, plus a separate area for catering.

Could you confirm availability and send a quotation? We would also like to know whether parking is included.

Kind regards,
Rina Hartono
Meridian Consulting

EMAIL 2
From: bookings@ravenhallcentre.com
To: r.hartono@meridianconsult.co.id
Subject: RE: Conference room availability — 14 October

Dear Ms Hartono,

Thank you for your enquiry. The Wentworth Suite is available on 14 October and seats up to 60 people theatre-style. The daily rate is £480, which includes projection equipment, wi-fi, and use of the adjoining foyer for refreshments.

Please note that our car park holds only 20 vehicles and is allocated on a first-come basis; however, the multi-storey car park on Bridge Street is a four-minute walk away.

Catering is charged separately at £14 per person for the full-day package. Should you confirm before 30 September, we can apply a 10% discount to the room rate.

Best wishes,
Tom Ellery
Ravenhall Centre`,
  questions: [
    { t:'mcq', q:'Apa tujuan surel pertama?', opts:['membatalkan pemesanan','menanyakan ketersediaan ruang','mengeluhkan layanan','meminta pengembalian dana'], a:1 },
    { t:'mcq', q:'Berapa kapasitas Wentworth Suite?', opts:['45','50','60','20'], a:2 },
    { t:'mcq', q:'Berapa total biaya katering untuk 45 peserta?', opts:['£480','£630','£450','£140'], a:1, why:'45 × £14 = £630.' },
    { t:'mcq', q:'Apa yang TIDAK termasuk dalam tarif ruangan?', opts:['proyektor','wi-fi','foyer','katering'], a:3 },
    { t:'mcq', q:'Bila Ms Hartono memesan pada 25 September, berapa tarif ruangannya?', opts:['£480','£432','£440','£528'], a:1, why:'Diskon 10% berlaku sebelum 30 September: 480 − 48 = 432.' },
    { t:'mcq', q:'Apa yang disiratkan tentang parkir?', opts:['gratis dan luas','mungkin tidak cukup untuk semua peserta','tidak tersedia','harus dipesan lebih dulu'], a:1 }
  ]
}
],
listenings: [
{ id:'tc-l1', level:'B1', title:'Part 3 — Conversation: Delayed Shipment',
  lines: [
    'Hi Marco, have you heard anything about the shipment from the Surabaya supplier?',
    'I just got off the phone with them. It left the port on Monday, but customs are holding it for inspection.',
    'That is a problem. The retail launch is on the twelfth.',
    'I know. They estimate release by Thursday, which still gives us four days.',
    'Four days is tight. Can we ask the warehouse to work an extra shift on Friday?',
    'I will email Priya about that now. If she agrees, we should still make the deadline.'
  ],
  questions: [
    { t:'mcq', q:'Apa masalah utamanya?', opts:['barang hilang','tertahan di bea cukai','harga naik','pemasok membatalkan'], a:1 },
    { t:'mcq', q:'Kapan barang diperkirakan dilepas?', opts:['Senin','Kamis','Jumat','Tanggal dua belas'], a:1 },
    { t:'mcq', q:'Apa yang akan dilakukan penutur pria berikutnya?', opts:['menelepon bea cukai','mengirim surel ke Priya','pergi ke gudang','membatalkan peluncuran'], a:1 }
  ]
}
],
speaking: {
  task1: [
    'Read the announcement aloud clearly (Part 1: Read a text aloud).',
    'Describe the picture in as much detail as you can (Part 2).',
    'Respond to questions about your commuting habits (Part 3).',
    'Respond using information provided in a schedule (Part 4).',
    'Propose a solution to a customer complaint (Part 5).',
    'Express and support an opinion about flexible working hours (Part 6).'
  ],
  formula: [
    'Read aloud: perhatikan jeda di koma dan nada turun di akhir kalimat.',
    'Describe picture: mulai dari gambaran umum → orang → benda → dugaan tempat.',
    'Propose solution: akui masalah → tawarkan dua langkah → tutup dengan tindak lanjut.'
  ]
},
writing: {
  tasks: [
    { type:'Write a sentence based on a picture', hint:'Wajib memakai dua kata yang diberikan. Satu kalimat saja, tata bahasa benar.' },
    { type:'Respond to a written request (email)', hint:'8 menit. Wajib menjawab SEMUA permintaan di surel. Salam pembuka dan penutup wajib.' },
    { type:'Write an opinion essay', hint:'30 menit, 300 kata. Struktur: posisi → dua alasan berkembang → simpulan.' }
  ],
  model: `Dear Mr Okafor,

Thank you for your message regarding the training schedule.

To answer your questions: the session will begin at 9 a.m. in Meeting Room B, and lunch will be provided at 12.30. Participants should bring their own laptops, as the room has only six desktop machines.

Regarding your request to join remotely, this is possible — I will send a video link the day before.

Please let me know if you need anything else.

Best regards,
Rina Hartono`,
  checklist: [
    'Surel: sudah menjawab SEMUA pertanyaan yang diminta?',
    'Surel: ada salam pembuka dan penutup?',
    'Esai: posisi jelas di paragraf pertama?',
    'Esai: dua alasan dengan contoh konkret?',
    'Tata bahasa dasar: -s jamak, artikel, kecocokan subjek?'
  ]
},
quickBank: [
  { t:'mcq', q:'Skor TOEIC Listening & Reading berkisar', opts:['0–120','10–990','0–9','200–800'], a:1 },
  { t:'mcq', q:'Bagian dengan soal terbanyak adalah', opts:['Part 5','Part 3','Part 7','Part 1'], a:2 },
  { t:'mcq', q:'Berapa waktu untuk 100 soal Reading?', opts:['45 menit','60 menit','75 menit','90 menit'], a:2 },
  { t:'mcq', q:'Jawaban salah pada TOEIC', opts:['mengurangi nilai','tidak mengurangi nilai','membatalkan bagian','dihitung setengah'], a:1 },
  { t:'mcq', q:'Part 2 menguji', opts:['foto','tanggapan atas pertanyaan','teks panjang','tata bahasa'], a:1 },
  { t:'mcq', q:'The manager asked all staff ___ the new procedure.', opts:['follow','to follow','following','followed'], a:1 },
  { t:'mcq', q:'The shipment will arrive ___ Friday morning.', opts:['in','at','on','by the'], a:2 },
  { t:'mcq', q:'Please submit the report ___ the end of the week.', opts:['until','by','since','during'], a:1 },
  { t:'mcq', q:'All employees are ___ for the annual bonus.', opts:['eligible','eligibly','eligibility','elect'], a:0 },
  { t:'mcq', q:'The invoice must be paid ___ 30 days of receipt.', opts:['within','inside','among','between'], a:0 },
  { t:'mcq', q:'We regret to inform you that your application was ___.', opts:['success','successful','unsuccessful','succeeding'], a:2 },
  { t:'mcq', q:'The new policy will take ___ next month.', opts:['affect','effect','effective','affected'], a:1 },
  { t:'mcq', q:'Ms Tan, ___ joined last year, now leads the team.', opts:['which','who','whom','whose'], a:1 },
  { t:'mcq', q:'Sales have increased ___ 12% since January.', opts:['of','by','in','to'], a:1 },
  { t:'mcq', q:'Please ___ the attached document before the meeting.', opts:['review','reviewing','reviewed','to reviewing'], a:0 }
]
};
