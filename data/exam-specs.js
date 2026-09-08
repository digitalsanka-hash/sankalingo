/* ────────────────────────────────────────────────────────────────
   SPESIFIKASI RESMI UJIAN — diverifikasi ke sumber penerbit ujian
   pada 15 Agustus 2026. Berkas ini adalah satu-satunya sumber
   kebenaran untuk jumlah soal, waktu, dan skor; halaman informasi
   maupun mesin simulasi membacanya dari sini.

   Sumber:
   · IELTS Academic — ielts.org (format Listening/Reading/Writing/
     Speaking dan "Understanding your score")
   · TOEFL iBT — ets.org "TOEFL iBT Test Content" + laman pembaruan
     Januari 2026 (skala 1–6, desain adaptif bertahap)
   · TOEIC Listening & Reading — ETS "Examinee Handbook, Paper
     Delivered" (nomor soal tiap bagian) + laman format resmi

   CATATAN JUJUR: isi soal di aplikasi ini ditulis sendiri, bukan
   soal asli ujian (soal asli berhak cipta). Yang direplikasi 100%
   adalah FORMATNYA: jumlah soal, urutan bagian, batas waktu, jenis
   soal, dan cara penyekoran.
   ──────────────────────────────────────────────────────────────── */

export const SOURCES = [
  ['IELTS Academic — format Listening', 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening'],
  ['IELTS Academic — format Reading', 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-reading'],
  ['IELTS Academic — format Writing', 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing'],
  ['IELTS Academic — format Speaking', 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-speaking'],
  ['IELTS — Understanding your score', 'https://ielts.org/take-a-test/preparation-resources/understanding-your-score'],
  ['TOEFL iBT — Test Content', 'https://www.ets.org/toefl/test-takers/ibt/about/content.html'],
  ['TOEFL iBT — pembaruan Januari 2026', 'https://toeflaccess.ets.org/help/en/articles/11758550-toefl-ibt-updates-coming-january-2026'],
  ['TOEIC L&R — Examinee Handbook (ETS)', 'https://www.ets.org/pdfs/toeic/toeic-listening-reading-test-examinee-handbook.pdf'],
  ['TOEIC L&R — format resmi', 'https://www.ets.org/toeic/about/listening-reading.html'],
  ['TOEFL ITP — Test Content (Level 1)', 'https://www.ets.org/toefl/institutions/itp/about/content.html'],
  ['TOEFL ITP — Scores & CEFR mapping', 'https://www.ets.org/toefl/institutions/itp/scores.html']
];

export const VERIFIED_ON = '15 Agustus 2026';

/* ── IELTS Academic ───────────────────────────────────────────── */
export const SPEC_IELTS = {
  id: 'ielts',
  totalTime: '2 jam 45 menit (Listening + Reading + Writing berturut-turut; Speaking terpisah)',
  scoring: 'Band 1–9 per bagian. Nilai akhir = rata-rata empat bagian, dibulatkan ke setengah band terdekat.',
  rounding: 'Rata-rata berakhiran .25 dibulatkan NAIK ke setengah band; berakhiran .75 dibulatkan NAIK ke band penuh. Contoh: 6,5 / 6,5 / 5,0 / 7,0 → rata-rata 6,25 → band 6,5.',
  sections: [
    { id:'listening', name:'Listening', minutes:30, extra:'+10 menit memindahkan jawaban (versi kertas)',
      items:40, marks:'1 poin per jawaban benar; ejaan atau tata bahasa salah = tidak dapat poin',
      parts:[
        { n:1, name:'Part 1 — percakapan sehari-hari', items:10, note:'Dua penutur, situasi sosial (mis. memesan, mendaftar).' },
        { n:2, name:'Part 2 — monolog umum', items:10, note:'Satu penutur, situasi sosial (mis. pidato tentang fasilitas kota).' },
        { n:3, name:'Part 3 — diskusi akademik', items:10, note:'Sampai empat penutur, konteks pendidikan/pelatihan.' },
        { n:4, name:'Part 4 — kuliah', items:10, note:'Satu penutur, monolog akademik.' }
      ],
      qTypes:['Pilihan ganda','Matching','Pelabelan denah/peta/diagram','Melengkapi formulir/catatan/tabel/bagan alir/ringkasan','Melengkapi kalimat','Jawaban singkat'],
      facts:['Rekaman diputar HANYA SATU KALI.','Aksen penutur beragam (Inggris, Australia, Amerika, Selandia Baru).','Batas jumlah kata pada soal isian wajib dipatuhi.']
    },
    { id:'reading', name:'Reading', minutes:60, extra:'Tanpa waktu tambahan untuk memindahkan jawaban',
      items:40, marks:'1 poin per jawaban benar',
      parts:[
        { n:1, name:'Passage 1', items:13, note:'Teks umum, biasanya paling mudah.' },
        { n:2, name:'Passage 2', items:13, note:'Tingkat kesulitan menengah.' },
        { n:3, name:'Passage 3', items:14, note:'Paling padat dan paling sulit.' }
      ],
      qTypes:['Pilihan ganda','True / False / Not Given','Yes / No / Not Given','Matching information','Matching headings','Matching features','Matching sentence endings','Melengkapi kalimat','Melengkapi ringkasan/catatan/tabel/bagan alir','Melabeli diagram','Jawaban singkat'],
      facts:['Total panjang tiga teks 2.150–2.750 kata.','Teks dari buku, jurnal, majalah, koran, dan sumber daring untuk pembaca umum.','Jawaban harus dipindah ke lembar jawaban di dalam 60 menit itu juga.']
    },
    { id:'writing', name:'Writing', minutes:60, items:2,
      marks:'Empat kriteria: Task Achievement/Response · Coherence and Cohesion · Lexical Resource · Grammatical Range and Accuracy',
      parts:[
        { n:1, name:'Task 1 — deskripsi visual', items:1, minutes:20, words:150,
          note:'Menjelaskan grafik, tabel, bagan, atau diagram dalam prosa. Tanpa opini pribadi.' },
        { n:2, name:'Task 2 — esai argumentatif', items:1, minutes:40, words:250,
          note:'Membahas sudut pandang, argumen, atau masalah. Bobot DUA KALI Task 1.' }
      ],
      facts:['Task 2 menyumbang dua kali lipat dibanding Task 1.','Kurang dari jumlah kata minimum langsung memotong nilai.','Waktu yang disarankan: 20 menit Task 1, 40 menit Task 2.']
    },
    { id:'speaking', name:'Speaking', minutes:14, items:3,
      marks:'Empat kriteria: Fluency and Coherence · Lexical Resource · Grammatical Range and Accuracy · Pronunciation',
      parts:[
        { n:1, name:'Part 1 — perkenalan & wawancara', minutes:'4–5', note:'Pertanyaan umum: rumah, keluarga, pekerjaan, studi, minat.' },
        { n:2, name:'Part 2 — giliran panjang', minutes:'3–4', note:'Kartu topik, 1 menit persiapan dengan kertas dan pensil, lalu bicara ±2 menit, disusul 1–2 pertanyaan lanjutan.' },
        { n:3, name:'Part 3 — diskusi', minutes:'4–5', note:'Pembahasan abstrak yang berkaitan dengan topik Part 2.' }
      ],
      facts:['Total 11–14 menit, tatap muka dengan penguji manusia.','Aksen tidak dinilai; kejelasan yang dinilai.','Boleh meminta penguji mengulang pertanyaan.']
    }
  ],
  /* Konversi jumlah benar → band (perkiraan resmi yang lazim dipakai). */
  convert: {
    listening: [[39,9],[37,8.5],[35,8],[32,7.5],[30,7],[26,6.5],[23,6],[18,5.5],[16,5],[13,4.5],[10,4],[8,3.5],[6,3]],
    reading:   [[39,9],[37,8.5],[35,8],[33,7.5],[30,7],[27,6.5],[23,6],[19,5.5],[15,5],[13,4.5],[10,4],[8,3.5],[6,3]]
  },
  bandScale: [
    [9,'Expert user','Penguasaan penuh: tepat, akurat, dan lancar.'],
    [8,'Very good user','Nyaris lancar sepenuhnya; kesalahan sesekali dan tidak sistematis.'],
    [7,'Good user','Penguasaan operasional; menangani bahasa kompleks dengan baik meski kadang keliru.'],
    [6,'Competent user','Penguasaan efektif; mampu memakai bahasa yang cukup kompleks.'],
    [5,'Modest user','Penguasaan sebagian; mampu berkomunikasi dasar di bidangnya.'],
    [4,'Limited user','Kompetensi terbatas pada situasi yang akrab.'],
    [3,'Extremely limited user','Hanya menangkap makna umum; komunikasi sering terputus.'],
    [2,'Intermittent user','Sangat sulit memahami bahasa Inggris.'],
    [1,'Non-user','Praktis tidak berbahasa Inggris selain kata lepas.']
  ]
};

/* ── TOEFL iBT (format baru sejak 21 Januari 2026) ────────────── */
export const SPEC_TOEFL = {
  id: 'toefl',
  totalTime: 'Sekitar 2 jam (di luar petunjuk)',
  scoring: 'Empat skor bagian dan satu skor keseluruhan pada skala 1–6. Skor keseluruhan = rata-rata empat bagian, dibulatkan ke setengah band terdekat.',
  rounding: 'Selama masa transisi dua tahun, peserta JUGA menerima skor keseluruhan setara pada skala lama 0–120.',
  newIn2026: [
    'Skala skor baru 1–6 menggantikan 0–120 (skala lama tetap dilaporkan sebagai pembanding selama dua tahun).',
    'Reading dan Listening kini ADAPTIF BERTAHAP: tingkat kesulitan berubah di tengah bagian mengikuti performa.',
    'Jenis tugas baru yang lebih dekat ke kehidupan kampus: Complete the Words, Read in Daily Life, Build a Sentence, Write an Email, Listen and Repeat, Take an Interview.',
    'Hasil keluar dalam 72 jam.',
    'Audio memakai headphone stereo; isi dirancang mengurangi bias budaya.'
  ],
  sections: [
    { id:'reading', name:'Reading', minutes:30, items:50, adaptive:true,
      marks:'35 poin mentah; modul adaptif menentukan tingkat kesulitan paruh kedua',
      parts:[
        { n:1, name:'Complete the Words', note:'Melengkapi kata yang sengaja dipotong di dalam kalimat — menguji ejaan, bentuk kata, dan pengenalan kosakata.' },
        { n:2, name:'Read in Daily Life', note:'Teks pendek sehari-hari kampus: pengumuman, surel, papan informasi, jadwal.' },
        { n:3, name:'Read an Academic Passage', note:'Satu bacaan akademik panjang dengan soal pemahaman, inferensi, kosakata dalam konteks, dan ringkasan.' }
      ],
      facts:['50 butir dalam 30 menit — rata-rata 36 detik per butir.','Bagian ini adaptif: menjawab benar membuat soal berikutnya lebih sulit dan bernilai lebih.']
    },
    { id:'listening', name:'Listening', minutes:29, items:47, adaptive:true,
      marks:'35 poin mentah',
      parts:[
        { n:1, name:'Listen and Choose a Response', note:'Mendengar satu ujaran singkat lalu memilih tanggapan yang paling wajar.' },
        { n:2, name:'Listen to a Conversation', note:'Percakapan kampus antara mahasiswa dengan dosen atau staf.' },
        { n:3, name:'Listen to an Announcement', note:'Pengumuman kampus: perubahan jadwal, aturan perpustakaan, kegiatan.' },
        { n:4, name:'Listen to an Academic Talk', note:'Kuliah singkat dengan struktur gagasan utama dan contoh.' }
      ],
      facts:['Audio diputar SATU KALI.','Mencatat diperbolehkan dan sangat dianjurkan.','Bagian ini juga adaptif.']
    },
    { id:'speaking', name:'Speaking', minutes:8, items:11,
      marks:'Dinilai gabungan penilai manusia dan mesin; kejelasan dan kelancaran sangat menentukan',
      parts:[
        { n:1, name:'Listen and Repeat', note:'Mendengar kalimat lalu mengulanginya persis — menguji pelafalan, irama, dan ingatan kerja.' },
        { n:2, name:'Take an Interview', note:'Menjawab rangkaian pertanyaan wawancara secara lisan, seperti percakapan kampus sungguhan.' }
      ],
      facts:['Hanya 8 menit untuk 11 butir — jawaban pendek, padat, dan langsung.','Jangan diam lebih dari 3 detik; keheningan panjang menurunkan skor delivery.']
    },
    { id:'writing', name:'Writing', minutes:23, items:12,
      marks:'Dinilai atas kejelasan gagasan, pengembangan, dan ketepatan bahasa',
      parts:[
        { n:1, name:'Build a Sentence', note:'Menyusun kata menjadi kalimat yang benar — menguji tata bahasa dan urutan kata secara langsung.' },
        { n:2, name:'Write an Email', note:'Menulis surel pendek sesuai situasi kampus dengan salam, maksud, rincian, dan penutup.' },
        { n:3, name:'Write for an Academic Discussion', note:'Menanggapi papan diskusi dosen dan dua mahasiswa; minimal ±100 kata dengan sudut pandang baru.' }
      ],
      facts:['12 butir dalam 23 menit — sebagian besar butir sangat pendek.','Academic Discussion menuntut menambah gagasan baru, bukan mengulang pendapat mahasiswa lain.']
    }
  ],
  bandScale: [
    [6,'Advanced','Menguasai bahasa akademik dengan lancar dan tepat.'],
    [5,'High-Intermediate','Efektif pada sebagian besar tugas akademik; kesalahan tidak mengganggu.'],
    [4,'Intermediate','Mampu menangani tugas akademik yang akrab.'],
    [3,'Low-Intermediate','Terbatas; gagasan sering kurang berkembang.'],
    [2,'Basic','Hanya tugas sangat sederhana.'],
    [1,'Below Basic','Belum mampu menangani tugas akademik.']
  ],
  /* Peta setara 1–6 ke skala lama 0–120 (dipakai selama masa transisi). */
  legacyMap: [[6,'115–120'],[5,'94–114'],[4,'71–93'],[3,'46–70'],[2,'25–45'],[1,'0–24']]
};

/* ── TOEIC Listening & Reading ────────────────────────────────── */
export const SPEC_TOEIC = {
  id: 'toeic',
  totalTime: 'Sekitar 2 jam mengerjakan soal; total ±2,5 jam bersama kuesioner latar belakang',
  scoring: 'Listening 5–495 dan Reading 5–495, dijumlahkan menjadi total 10–990. Tidak ada pengurangan nilai untuk jawaban salah.',
  rounding: 'Jumlah jawaban benar dikonversi ke skala terstandar agar hasil antar-sesi ujian sebanding.',
  sections: [
    { id:'listening', name:'Section I — Listening', minutes:45, items:100,
      marks:'Skala 5–495',
      parts:[
        { n:1, name:'Part 1 — Photographs', items:6, range:'Soal 1–6',
          note:'Empat kalimat dibacakan untuk satu foto; pilih yang paling tepat menggambarkannya. Pilihan A–D, tidak tercetak.' },
        { n:2, name:'Part 2 — Question-Response', items:25, range:'Soal 7–31',
          note:'Satu pertanyaan atau pernyataan dan TIGA tanggapan (A–C). Tidak ada teks tercetak sama sekali.' },
        { n:3, name:'Part 3 — Conversations', items:39, range:'Soal 32–70',
          note:'13 percakapan, masing-masing 3 soal. Sebagian disertai grafik/tabel.' },
        { n:4, name:'Part 4 — Talks', items:30, range:'Soal 71–100',
          note:'10 monolog (pesan telepon, pengumuman, iklan), masing-masing 3 soal.' }
      ],
      facts:['Audio diputar satu kali.','Part 2 hanya punya TIGA pilihan, bukan empat.','Aksen Amerika, Inggris, Kanada, dan Australia dipakai bergantian.']
    },
    { id:'reading', name:'Section II — Reading', minutes:75, items:100,
      marks:'Skala 5–495',
      parts:[
        { n:5, name:'Part 5 — Incomplete Sentences', items:30, range:'Soal 101–130',
          note:'Kalimat rumpang dengan empat pilihan. Menguji tata bahasa dan kosakata.' },
        { n:6, name:'Part 6 — Text Completion', items:16, range:'Soal 131–146',
          note:'Empat teks (surel, memo, pengumuman), masing-masing 4 rumpang; salah satunya berupa kalimat utuh.' },
        { n:7, name:'Part 7 — Reading Comprehension', items:54, range:'Soal 147–200',
          note:'Teks tunggal, ganda, dan rangkap tiga: iklan, surel berantai, jadwal, artikel, pesan instan.' }
      ],
      facts:['75 menit untuk 100 soal — rata-rata 45 detik per soal.','Part 7 adalah bagian terbesar; sisakan sekitar 55 menit untuknya.','Waktu diatur sendiri: boleh melompat antar bagian di dalam Section II.']
    }
  ],
  bandScale: [
    ['905–990','International Proficiency','Setara C1–C2; mampu memimpin rapat dan bernegosiasi.'],
    ['785–900','Working Proficiency Plus','Setara B2–C1; menangani hampir semua situasi kerja.'],
    ['605–780','Limited Working Proficiency','Setara B1–B2; mampu pada tugas rutin.'],
    ['405–600','Elementary Proficiency Plus','Setara A2–B1; terbatas pada topik akrab.'],
    ['255–400','Elementary Proficiency','Setara A2; percakapan dasar.'],
    ['10–250','Basic','Setara A1; sangat terbatas.']
  ],
  convert: {
    listening: [[96,495],[90,470],[85,445],[80,420],[75,395],[70,365],[65,340],[60,310],[55,285],[50,255],[45,230],[40,200],[35,175],[30,150],[25,120],[20,95]],
    reading:   [[96,495],[92,475],[88,455],[84,430],[80,405],[75,380],[70,350],[65,325],[60,300],[55,275],[50,245],[45,220],[40,190],[35,165],[30,140],[25,110],[20,85]]
  }
};

/* ── TOEFL ITP (Institutional Testing Program, Level 1) ────────── */
export const SPEC_ITP = {
  id: 'itp',
  totalTime: 'Sekitar 2 jam (115 menit mengerjakan soal, di luar petunjuk)',
  scoring: 'Tiga skor bagian pada skala 31–68 (Reading 31–67), lalu skor total 310–677. Total = (Listening + Structure + Reading) × 10 ÷ 3. Tidak ada pengurangan nilai untuk jawaban salah.',
  rounding: 'Contoh: Listening 52 + Structure 50 + Reading 48 = 150 → 150 × 10 ÷ 3 = 500. Skor 500 lazim dipakai sebagai ambang S2 dan beasiswa dalam negeri; 550 untuk sebagian kampus luar negeri.',
  sections: [
    { id:'listening', name:'Section 1 — Listening Comprehension', minutes:35, items:50,
      marks:'Skala 31–68. Pertanyaan DIBACAKAN, tidak tercetak; hanya pilihan jawaban yang tercetak.',
      parts:[
        { n:'A', name:'Part A — Short Conversations', items:30, range:'Soal 1–30',
          note:'Dialog dua kalimat antara pria dan wanita, lalu narator bertanya. Menguji idiom, makna tersirat, dan kata yang bunyinya mirip.' },
        { n:'B', name:'Part B — Longer Conversations', items:8, range:'Soal 31–38',
          note:'Dua percakapan panjang bersuasana kampus, masing-masing empat soal.' },
        { n:'C', name:'Part C — Talks', items:12, range:'Soal 39–50',
          note:'Tiga ceramah atau kuliah singkat, masing-masing empat soal.' }
      ],
      facts:['Audio diputar SATU KALI dan waktunya diatur rekaman — tidak bisa dipercepat.',
             'Pertanyaan tidak tercetak di lembar soal: kamu harus mendengar pertanyaannya.',
             'Tidak boleh mencatat pada versi kertas.']
    },
    { id:'structure', name:'Section 2 — Structure and Written Expression', minutes:25, items:40,
      marks:'Skala 31–68',
      parts:[
        { n:1, name:'Structure', items:15, range:'Soal 1–15',
          note:'Kalimat rumpang dengan empat pilihan; pilih yang membuat kalimatnya benar secara tata bahasa.' },
        { n:2, name:'Written Expression', items:25, range:'Soal 16–40',
          note:'Kalimat dengan empat bagian bergaris bawah (A–D); pilih bagian yang SALAH.' }
      ],
      facts:['25 menit untuk 40 soal — rata-rata 37 detik per soal.',
             'Written Expression tidak meminta perbaikan, hanya menunjuk bagian yang salah.',
             'Kesalahan yang paling sering diuji: kesesuaian subjek–kata kerja, bentuk kata, paralelisme, dan artikel.']
    },
    { id:'reading', name:'Section 3 — Reading Comprehension', minutes:55, items:50,
      marks:'Skala 31–67',
      parts:[
        { n:1, name:'Lima bacaan', items:50, range:'Soal 1–50',
          note:'Sekitar lima bacaan akademik (sejarah Amerika, sains, seni, ilmu sosial), masing-masing ±10 soal.' }
      ],
      qTypes:['Gagasan utama / tujuan','Detail','NOT / EXCEPT','Kosakata dalam konteks','Rujukan kata ganti','Inferensi','Organisasi / kenapa penulis menyebut'],
      facts:['55 menit untuk 50 soal — rata-rata 66 detik per soal, termasuk membaca teksnya.',
             'Bacaan disusun dari yang termudah ke yang tersulit.',
             'Soal kosakata selalu mengutip kata yang ada di teks — jawabannya harus cocok di konteks itu.']
    }
  ],
  /* Konversi jumlah benar → skala bagian. Ini tabel perkiraan yang lazim
     dipublikasikan untuk ITP Level 1; tiap sesi resmi punya penyetaraan
     sendiri, jadi selisih 1–2 poin adalah hal biasa. */
  convert: {
    listening: [[50,68],[49,67],[48,66],[47,65],[46,63],[45,62],[44,61],[43,60],[42,59],[41,58],
                [40,57],[39,57],[38,56],[37,55],[36,54],[35,54],[34,53],[33,52],[32,52],[31,51],
                [30,51],[29,50],[28,49],[27,49],[26,48],[25,48],[24,47],[23,47],[22,46],[21,45],
                [20,45],[19,44],[18,43],[17,42],[16,41],[15,41],[14,39],[13,38],[12,37],[11,35],
                [10,33],[9,32],[8,32],[7,31]],
    structure: [[40,68],[39,67],[38,65],[37,63],[36,61],[35,60],[34,58],[33,57],[32,56],[31,55],
                [30,54],[29,53],[28,52],[27,51],[26,50],[25,49],[24,48],[23,47],[22,46],[21,45],
                [20,44],[19,43],[18,42],[17,41],[16,40],[15,40],[14,38],[13,37],[12,36],[11,35],
                [10,33],[9,31]],
    reading:   [[50,67],[49,66],[48,65],[47,63],[46,61],[45,60],[44,59],[43,58],[42,57],[41,56],
                [40,55],[39,54],[38,54],[37,53],[36,52],[35,52],[34,51],[33,50],[32,49],[31,48],
                [30,48],[29,47],[28,46],[27,46],[26,45],[25,44],[24,43],[23,43],[22,42],[21,41],
                [20,40],[19,39],[18,39],[17,38],[16,37],[15,36],[14,35],[13,34],[12,32],[11,31]]
  },
  /* Peta skor total → CEFR yang dipublikasikan ETS untuk ITP Level 1. */
  bandScale: [
    ['627–677','C1','Mahir: menangani teks akademik padat dan percakapan cepat dengan mudah.'],
    ['543–626','B2','Menengah atas: ambang umum kampus luar negeri dan beasiswa bergengsi.'],
    ['460–542','B1','Menengah: ambang lazim S2 dan beasiswa dalam negeri (skor 500 ada di rentang ini).'],
    ['337–459','A2','Dasar: mengerti kalimat sederhana; belum siap perkuliahan berbahasa Inggris.'],
    ['310–336','di bawah A2','Skor terendah yang bisa dilaporkan.']
  ],
  cefrPerBagian: {
    listening: [[64,'C1'],[54,'B2'],[47,'B1'],[38,'A2']],
    structure: [[65,'C1'],[53,'B2'],[43,'B1'],[32,'A2']],
    reading:   [[64,'C1'],[55,'B2'],[48,'B1'],[31,'A2']]
  }
};

export const SPECS = { ielts: SPEC_IELTS, toefl: SPEC_TOEFL, toeic: SPEC_TOEIC, itp: SPEC_ITP };

/* Skor total ITP dari tiga skala bagian. Dibulatkan ke bilangan bulat
   terdekat seperti laporan resmi. */
export const itpTotal = (l, s, r) => Math.round((l + s + r) * 10 / 3);

/* Dasar skala resmi tiap ujian, dipakai ketika jumlah benarnya di bawah
   baris terendah tabel konversi. */
const DASAR = {
  ielts: { nilai: 0, bulat: 0.5 },   /* band 0 = tidak dikerjakan sama sekali */
  toeic: { nilai: 5, bulat: 5 },     /* skor terendah tiap bagian TOEIC = 5   */
  itp:   { nilai: 31, bulat: 1 }     /* skala bagian ITP dimulai dari 31       */
};

/* Konversi jumlah benar → skor, memakai tabel di atas.
 *
 * Tabelnya tidak menutup jumlah benar yang rendah, dan baris terakhirnya
 * dulu dikembalikan apa adanya untuk SEMUA nilai di bawahnya. Akibatnya
 * peserta yang tidak menjawab satu soal pun tetap dilaporkan:
 *
 *     IELTS  0 dari 40 benar  →  Band 3,0
 *     TOEIC  0 dari 200 benar →  95 + 85 = 180
 *
 * dan band IELTS 1 sampai 2,5 mustahil keluar berapa pun hasilnya.
 *
 * Di bawah baris terendah, skornya kini DIINTERPOLASI lurus turun ke dasar
 * skala resmi. Tidak ada tabel yang dikarang: yang dipakai tetap titik
 * terendah tabel yang sudah ada, ditarik ke titik (0 benar, dasar skala).
 */
export function convertScore(examId, sectionId, correct) {
  const table = SPECS[examId]?.convert?.[sectionId];
  if (!table) return null;
  for (const [raw, score] of table) if (correct >= raw) return score;

  const [rawTerendah, skorTerendah] = table[table.length - 1];
  const d = DASAR[examId];
  if (!d || rawTerendah <= 0) return skorTerendah;

  const n = Math.max(0, correct);
  const nilai = d.nilai + (skorTerendah - d.nilai) * (n / rawTerendah);
  return Math.round(nilai / d.bulat) * d.bulat;
}

/** Pembulatan band IELTS: .25 → naik setengah, .75 → naik penuh. */
export function ieltsOverall(bands) {
  const avg = bands.reduce((a, b) => a + b, 0) / bands.length;
  return Math.round(avg * 2) / 2;
}
