/* Metode belajar, rencana harian, dan tes penempatan. */

/* ── 60 trik & metode belajar ─────────────────────────────────── */
export const TRICKS = [
{ g:'Ingatan', t:'Pengulangan Berjarak', d:'Ulangi materi pada hari 1, 3, 7, 16, 35. Otak menyimpan lebih kuat saat hampir lupa. Ini yang dipakai modul Kartu Hafalan di aplikasi ini.' },
{ g:'Ingatan', t:'Recall Aktif', d:'Tutup catatan dan paksa diri mengingat. Membaca ulang terasa produktif tapi hasilnya jauh lebih rendah daripada mengingat aktif.' },
{ g:'Ingatan', t:'Jangkar Kata Kunci', d:'Kaitkan kata Inggris dengan kata Indonesia yang bunyinya mirip + gambar konyol. "Ambitious" → "ambil bis" seseorang bercita-cita mengejar bis. Semakin aneh, semakin lekat.' },
{ g:'Ingatan', t:'Chunking', d:'Hafalkan frasa, bukan kata tunggal. "make a decision" satu potongan, bukan tiga kata terpisah.' },
{ g:'Ingatan', t:'Efek Posisi', d:'Yang di awal dan akhir sesi paling diingat. Taruh materi tersulit di dua posisi itu, bukan di tengah.' },
{ g:'Ingatan', t:'Interleaving', d:'Campur jenis latihan dalam satu sesi (grammar + kosakata + listening) alih-alih memblok satu jenis. Terasa lebih sulit, hasilnya lebih tahan lama.' },
{ g:'Ingatan', t:'Elaborasi', d:'Setelah belajar kata baru, buat satu kalimat tentang dirimu sendiri. Informasi yang terhubung ke diri sendiri paling sulit dilupakan.' },
{ g:'Ingatan', t:'Ajarkan Ulang', d:'Jelaskan aturan grammar seolah kepada anak SD. Kalau tersendat, di situlah lubang pemahamanmu.' },
{ g:'Ingatan', t:'Tidur Sebagai Alat', d:'Belajar 20 menit sebelum tidur lalu ulangi 5 menit setelah bangun. Konsolidasi memori terjadi saat tidur.' },
{ g:'Ingatan', t:'Kartu Dua Arah', d:'Latih Inggris→Indonesia untuk pemahaman, lalu Indonesia→Inggris untuk produksi. Arah kedua jauh lebih sulit dan jauh lebih berguna.' },

{ g:'Menyimak', t:'Shadowing', d:'Putar audio, ikuti bicara dengan jeda setengah detik, tirukan irama dan nadanya. Metode tunggal paling ampuh untuk pelafalan sekaligus listening.' },
{ g:'Menyimak', t:'Dikte Bertahap', d:'Dengar → tulis → dengar lagi → perbaiki → baru lihat teks. Kesalahanmu adalah peta bunyi yang belum kamu kuasai.' },
{ g:'Menyimak', t:'Naik Kecepatan', d:'Dengarkan pada 0,75× sampai paham, lalu 1×, lalu 1,25×. Kembali ke 1× akan terasa lambat.' },
{ g:'Menyimak', t:'Dengar Dua Lapis', d:'Putaran pertama: tangkap gagasan utama. Putaran kedua: kejar detail. Jangan lakukan keduanya sekaligus.' },
{ g:'Menyimak', t:'Prediksi Sebelum Dengar', d:'Baca soal dan tebak jenis jawabannya (angka? nama? tempat?). Otak yang siap menangkap jauh lebih banyak.' },
{ g:'Menyimak', t:'Latih Angka', d:'13 vs 30, 40 vs 14 adalah penyebab kehilangan nilai terbanyak di listening. Latih khusus sepuluh menit.' },
{ g:'Menyimak', t:'Podcast Beriring', d:'Dengarkan podcast saat perjalanan tanpa target memahami 100%. Tujuannya membiasakan telinga pada irama, bukan menerjemahkan.' },
{ g:'Menyimak', t:'Subtitle Tiga Tahap', d:'Tonton dengan subtitle Indonesia → subtitle Inggris → tanpa subtitle. Jangan lompat langsung ke tanpa subtitle.' },

{ g:'Berbicara', t:'Rekam Satu Menit', d:'Rekam dirimu bicara satu menit tiap hari, dengarkan, tandai satu hal untuk diperbaiki besok. Perbaikan sadar mengalahkan latihan buta.' },
{ g:'Berbicara', t:'Monolog Cermin', d:'Ceritakan harimu di depan cermin dua menit. Tanpa lawan bicara, tanpa rasa malu, tetap melatih kelancaran.' },
{ g:'Berbicara', t:'Frasa Pengulur Waktu', d:'Hafalkan lima frasa seperti "That\'s an interesting question" agar tidak diam total saat berpikir.' },
{ g:'Berbicara', t:'Aturan Tiga Kalimat', d:'Jangan jawab satu kata. Latih menjawab minimal tiga kalimat: jawaban, alasan, contoh.' },
{ g:'Berbicara', t:'Bicara Sendiri Sepanjang Hari', d:'Narasikan kegiatanmu dalam hati berbahasa Inggris: "I\'m boiling water. I need to buy sugar." Gratis dan tanpa batas.' },
{ g:'Berbicara', t:'Jangan Terjemahkan', d:'Menyusun kalimat Indonesia lalu menerjemahkan membuat bicara lambat dan janggal. Belajar frasa utuh agar bisa langsung keluar.' },
{ g:'Berbicara', t:'Ganti Kata yang Macet', d:'Kalau lupa kata "screwdriver", katakan "the tool you use to turn screws". Kemampuan mengitari kata adalah tanda kefasihan, bukan kelemahan.' },
{ g:'Berbicara', t:'Latih Tekanan Kalimat', d:'Ucapkan kalimat yang sama dengan penekanan berbeda. Ini melatih intonasi yang dinilai penguji.' },
{ g:'Berbicara', t:'Kelompok Bicara Mingguan', d:'Satu jam bicara dengan sesama pembelajar seminggu sekali lebih berguna daripada tujuh jam menonton video.' },

{ g:'Membaca', t:'Baca Ekstensif', d:'Baca bahan yang 95% kata-katanya sudah kamu tahu. Kalau harus buka kamus tiap kalimat, bahannya terlalu sulit.' },
{ g:'Membaca', t:'Skimming Terarah', d:'Baca kalimat pertama dan terakhir tiap paragraf untuk peta isi. Baru masuk detail bila diperlukan.' },
{ g:'Membaca', t:'Scanning Kata Kunci', d:'Untuk mencari fakta, gerakkan mata mencari bentuk kata (angka, huruf kapital), jangan membaca kata per kata.' },
{ g:'Membaca', t:'Tebak dari Konteks', d:'Sebelum membuka kamus, tebak arti dari kalimat sekitar. Tebakan yang meleset pun memperkuat ingatan saat kamu tahu jawabannya.' },
{ g:'Membaca', t:'Baca Kembali Bahan Lama', d:'Membaca ulang artikel yang sudah dipahami membangun kecepatan, bukan pemahaman. Keduanya perlu.' },
{ g:'Membaca', t:'Satu Artikel Dua Cara', d:'Baca cepat untuk gagasan (3 menit), lalu baca teliti untuk bahasa (10 menit). Panen dua hasil dari satu bahan.' },
{ g:'Membaca', t:'Buru Kolokasi', d:'Saat membaca, garis bawahi pasangan kata, bukan kata tunggal. "heavy rain", "draw a conclusion".' },

{ g:'Menulis', t:'Kerangka Dulu, Selalu', d:'Lima menit membuat kerangka menghemat dua puluh menit menulis dan menaikkan nilai koherensi.' },
{ g:'Menulis', t:'Satu Paragraf Satu Gagasan', d:'Kalimat pertama menyatakan gagasan, sisanya menjelaskan dan mencontohkan. Sederhana dan efektif.' },
{ g:'Menulis', t:'Tulis Dulu, Perbaiki Nanti', d:'Memperbaiki sambil menulis membunuh alur. Tulis sampai selesai, baru periksa.' },
{ g:'Menulis', t:'Daftar Kesalahan Pribadi', d:'Catat lima kesalahan yang paling sering kamu buat dan periksa khusus lima itu di akhir. Jauh lebih efektif daripada "periksa semuanya".' },
{ g:'Menulis', t:'Salin & Ubah', d:'Ambil paragraf model yang bagus, tiru strukturnya dengan topik berbeda. Ini cara penulis belajar sejak dulu.' },
{ g:'Menulis', t:'Baca Keras Saat Memeriksa', d:'Telinga menangkap kalimat janggal yang dilewati mata.' },
{ g:'Menulis', t:'Kurangi, Jangan Tambah', d:'Coret kata yang tidak menambah makna. Tulisan padat selalu terbaca lebih mahir daripada tulisan panjang.' },
{ g:'Menulis', t:'Timer Wajib', d:'Selalu berlatih dengan batas waktu ujian. Menulis tanpa timer tidak melatih keterampilan yang sebenarnya diuji.' },

{ g:'Kosakata', t:'Aturan 80/20', d:'2.000 kata paling sering menutupi sekitar 80% percakapan sehari-hari. Kuasai itu dulu sebelum mengejar kata langka.' },
{ g:'Kosakata', t:'Satu Akar Empat Kata', d:'Dari "success" ambil succeed, successful, successfully. Satu jam kerja, empat kata dapat.' },
{ g:'Kosakata', t:'Kartu Berkalimat', d:'Jangan hafal "diligent = rajin". Hafal "She is a diligent student." Kata dalam konteks bertahan jauh lebih lama.' },
{ g:'Kosakata', t:'Kelompok Tema, Bukan Abjad', d:'Belajar kata sekelompok tema (dapur, bandara, rapat) karena otak menyimpan berdasarkan jaringan makna.' },
{ g:'Kosakata', t:'Hindari Sinonim Serentak', d:'Belajar happy, glad, delighted, joyful sekaligus justru membuat semuanya tercampur. Beri jarak.' },
{ g:'Kosakata', t:'Kata Pasif jadi Aktif', d:'Kata yang kamu kenali tapi tak pernah pakai adalah kosakata pasif. Paksa pakai lima kali dalam tulisan untuk memindahkannya jadi aktif.' },
{ g:'Kosakata', t:'Buku Catatan Perburuan', d:'Catat kata yang kamu temui dari bacaan nyata, bukan dari daftar. Kata yang kamu temui sendiri lebih relevan dengan kebutuhanmu.' },

{ g:'Ujian', t:'Simulasi Waktu Penuh', d:'Kerjakan satu ujian utuh tanpa jeda, tanpa kamus, sekali seminggu. Stamina adalah keterampilan tersendiri.' },
{ g:'Ujian', t:'Analisis Kesalahan', d:'Menghitung skor tidak menaikkan skor. Yang menaikkan adalah menuliskan MENGAPA tiap soal salah dan mengelompokkannya.' },
{ g:'Ujian', t:'Jangan Menempel di Satu Soal', d:'Tandai dan lanjut. Satu soal sulit yang menyita 4 menit bisa merugikan tiga soal mudah.' },
{ g:'Ujian', t:'Isi Semua Nomor', d:'Tidak ada nilai minus di IELTS, TOEFL, dan TOEIC. Kosong sama dengan salah, tebakan punya peluang.' },
{ g:'Ujian', t:'Kenali Parafrase', d:'Jawaban benar hampir tidak pernah memakai kata yang sama persis dengan soal. Curigai pilihan yang terlalu mirip.' },
{ g:'Ujian', t:'Rutinitas Hari-H', d:'Latih pada jam yang sama dengan jam ujian. Tubuh punya ritme, dan otak bekerja paling baik pada jam yang biasa dilatih.' },
{ g:'Ujian', t:'Pemanasan Sebelum Masuk', d:'Dengarkan lima menit audio Inggris sebelum ujian dimulai agar telinga tidak "dingin" saat soal pertama.' },

{ g:'Kebiasaan', t:'Aturan Dua Menit', d:'Kalau malas, janjikan hanya dua menit. Memulai adalah bagian tersulit; biasanya kamu lanjut jauh lebih lama.' },
{ g:'Kebiasaan', t:'Rantai Jangan Putus', d:'Tandai kalender tiap hari belajar. Rantai yang panjang menciptakan tekanan positif untuk tidak memutusnya.' },
{ g:'Kebiasaan', t:'Tempel di Kebiasaan Lama', d:'Kaitkan belajar dengan kebiasaan yang sudah ada: "setelah menyeduh kopi, buka kartu hafalan".' },
{ g:'Kebiasaan', t:'Jangan Bolos Dua Kali', d:'Sekali bolos itu kecelakaan, dua kali berturut-turut adalah awal kebiasaan baru. Aturan tunggal ini menyelamatkan banyak rencana belajar.' },
{ g:'Kebiasaan', t:'Sesi Pendek Lebih Sering', d:'Empat sesi 25 menit dalam seminggu mengalahkan satu sesi 3 jam. Otak butuh jarak, bukan durasi.' },
{ g:'Kebiasaan', t:'Ukur Proses, Bukan Hasil', d:'Target "belajar 25 menit" sepenuhnya dalam kendalimu; target "naik satu band" tidak. Kejar yang pertama, yang kedua mengikuti.' }
];

/* ── Rencana belajar ──────────────────────────────────────────── */
const T = (title, min, kind) => ({ title, min, kind });

const CORE_DAY = [
  T('Kartu hafalan: kosakata jatuh tempo', 10, 'vocab'),
  T('Satu pelajaran grammar + latihannya', 15, 'grammar'),
  T('Dikte / simakan pendek', 10, 'listening'),
  T('Bicara satu menit dan rekam', 5, 'speaking')
];

const buildDays = (n, pattern) => Array.from({ length: n }, (_, i) => {
  const d = i + 1;
  const p = pattern(d);
  return { day: d, focus: p.focus, tasks: p.tasks };
});

export const PLANS = [
{
  id: 'plan-30', name: '30 Hari Fondasi', nameEn: '30-Day Foundation', days: 30, minutes: 40,
  for: 'Pemula sampai A2 yang ingin membangun kebiasaan dan dasar yang benar.',
  outcome: 'Menguasai 20 topik grammar A1, 300 kata inti, dan kebiasaan belajar harian.',
  build: () => buildDays(30, d => {
    if (d % 7 === 0) return { focus: 'Ulasan mingguan', tasks: [
      T('Ujian kilat 20 soal dari materi minggu ini', 20, 'test'),
      T('Tinjau semua kartu yang salah', 15, 'vocab'),
      T('Tulis 5 kalimat memakai grammar minggu ini', 10, 'writing')] };
    return { focus: `Grammar A1 #${Math.min(20, Math.ceil(d * 20 / 26))} + kosakata`, tasks: CORE_DAY };
  })
},
{
  id: 'plan-60', name: '60 Hari Menengah', nameEn: '60-Day Intermediate', days: 60, minutes: 60,
  for: 'A2–B1 yang ingin naik ke B2 dan siap masuk persiapan ujian.',
  outcome: 'Menguasai seluruh tenses, pengandaian, pasif, klausa relatif, dan 800 kata.',
  build: () => buildDays(60, d => {
    if (d % 10 === 0) return { focus: 'Simulasi bagian', tasks: [
      T('Simulasi satu bagian ujian dengan timer', 35, 'test'),
      T('Analisis kesalahan dan kelompokkan', 15, 'review'),
      T('Perbaiki lima kesalahan teratas', 10, 'grammar')] };
    if (d % 5 === 0) return { focus: 'Hari menulis', tasks: [
      T('Tulis satu esai/laporan dengan timer', 30, 'writing'),
      T('Periksa dengan daftar 10 kesalahan', 10, 'review'),
      T('Kartu hafalan', 10, 'vocab')] };
    return { focus: `Grammar B1 + keterampilan`, tasks: [...CORE_DAY, T('Baca satu artikel pendek', 15, 'reading')] };
  })
},
{
  id: 'plan-90', name: '90 Hari Mahir', nameEn: '90-Day Advanced', days: 90, minutes: 75,
  for: 'B1–B2 yang menargetkan IELTS 7+/TOEFL 100+/TOEIC 850+.',
  outcome: 'Menguasai struktur C1, 1.500 kata akademik, dan empat simulasi ujian penuh.',
  build: () => buildDays(90, d => {
    if (d % 30 === 0) return { focus: 'Simulasi ujian penuh', tasks: [
      T('Simulasi ujian utuh tanpa jeda', 150, 'test'),
      T('Analisis kesalahan menyeluruh', 30, 'review')] };
    if (d % 7 === 0) return { focus: 'Ulasan & speaking', tasks: [
      T('Speaking Part 2 + rekam + dengar ulang', 20, 'speaking'),
      T('Tinjau kartu sulit', 15, 'vocab'),
      T('Tulis satu paragraf argumen', 20, 'writing')] };
    if (d % 3 === 0) return { focus: 'Hari akademik', tasks: [
      T('Baca teks akademik + soal', 25, 'reading'),
      T('Kuliah simakan + catatan', 20, 'listening'),
      T('Kartu hafalan akademik', 15, 'vocab'),
      T('Satu topik grammar C1', 15, 'grammar')] };
    return { focus: 'Rotasi empat keterampilan', tasks: [...CORE_DAY,
      T('Baca artikel + tandai kolokasi', 15, 'reading'),
      T('Latihan menulis terarah', 20, 'writing')] };
  })
},
{
  id: 'plan-ielts', name: 'Sprint IELTS 45 Hari', nameEn: 'IELTS 45-Day Sprint', days: 45, minutes: 90,
  for: 'B2 ke atas dengan tanggal ujian sudah dipesan.',
  outcome: 'Menguasai keempat bagian IELTS, enam simulasi, dan bank kalimat siap pakai.',
  build: () => buildDays(45, d => {
    const cycle = d % 5;
    if (d % 15 === 0) return { focus: 'Simulasi penuh', tasks: [
      T('IELTS lengkap dengan timer', 165, 'test'), T('Analisis band tiap bagian', 30, 'review')] };
    if (cycle === 1) return { focus: 'Listening', tasks: [
      T('Dua bagian listening + koreksi', 30, 'listening'),
      T('Latih angka, ejaan, dan parafrase', 15, 'listening'),
      T('Kartu hafalan', 15, 'vocab')] };
    if (cycle === 2) return { focus: 'Reading', tasks: [
      T('Satu bacaan penuh dengan timer 20 menit', 20, 'reading'),
      T('Latihan True/False/Not Given', 20, 'reading'),
      T('Kolokasi dari bacaan', 15, 'vocab')] };
    if (cycle === 3) return { focus: 'Writing Task 1', tasks: [
      T('Satu Task 1 dengan timer 20 menit', 20, 'writing'),
      T('Bandingkan dengan model, tandai selisih', 20, 'review'),
      T('Bahasa grafik: 15 kata', 15, 'vocab')] };
    if (cycle === 4) return { focus: 'Writing Task 2', tasks: [
      T('Satu Task 2 dengan timer 40 menit', 40, 'writing'),
      T('Periksa dengan daftar 10 butir', 15, 'review')] };
    return { focus: 'Speaking', tasks: [
      T('Part 1 sepuluh pertanyaan, rekam', 20, 'speaking'),
      T('Part 2 satu kartu penuh dua menit', 15, 'speaking'),
      T('Part 3 tiga pertanyaan abstrak', 20, 'speaking'),
      T('Dengar ulang rekaman, tandai satu perbaikan', 10, 'review')] };
  })
},
{
  id: 'plan-toefl', name: 'Sprint TOEFL 40 Hari', nameEn: 'TOEFL 40-Day Sprint', days: 40, minutes: 90,
  for: 'B2 ke atas yang menargetkan skor 90–110.',
  outcome: 'Menguasai empat tugas speaking, dua tugas writing, dan teknik mencatat.',
  build: () => buildDays(40, d => {
    const c = d % 4;
    if (d % 10 === 0) return { focus: 'Simulasi penuh', tasks: [
      T('TOEFL lengkap dengan timer', 120, 'test'), T('Analisis skor tiap bagian', 25, 'review')] };
    if (c === 1) return { focus: 'Reading akademik', tasks: [
      T('Dua bacaan + 20 soal, 35 menit', 35, 'reading'),
      T('Latihan soal sisipan kalimat & ringkasan', 20, 'reading'),
      T('Kartu AWL', 15, 'vocab')] };
    if (c === 2) return { focus: 'Listening & catatan', tasks: [
      T('Satu kuliah + catatan pohon', 20, 'listening'),
      T('Satu percakapan kampus', 15, 'listening'),
      T('Rangkum kuliah dari catatan saja', 15, 'speaking')] };
    if (c === 3) return { focus: 'Speaking 4 tugas', tasks: [
      T('Task 1 tiga kali dengan stopwatch', 20, 'speaking'),
      T('Task 2 & 3 masing-masing satu kali', 25, 'speaking'),
      T('Task 4 rangkum kuliah', 15, 'speaking')] };
    return { focus: 'Writing', tasks: [
      T('Integrated: baca-dengar-tulis, 20 menit', 25, 'writing'),
      T('Academic Discussion, 10 menit', 15, 'writing'),
      T('Bandingkan dengan model', 15, 'review')] };
  })
},
{
  id: 'plan-toeic', name: 'Sprint TOEIC 30 Hari', nameEn: 'TOEIC 30-Day Sprint', days: 30, minutes: 60,
  for: 'A2–B2 yang mengejar skor 700–900 untuk keperluan kerja.',
  outcome: 'Menguasai tujuh bagian, kecepatan Part 5, dan strategi Part 7.',
  build: () => buildDays(30, d => {
    const c = d % 3;
    if (d % 10 === 0) return { focus: 'Simulasi L&R penuh', tasks: [
      T('200 soal dengan timer 2 jam', 120, 'test'), T('Analisis per bagian', 25, 'review')] };
    if (c === 1) return { focus: 'Listening Part 1–4', tasks: [
      T('Part 1 & 2 latihan cepat', 20, 'listening'),
      T('Part 3 & 4 dengan pra-baca soal', 25, 'listening'),
      T('Kosakata kantor', 15, 'vocab')] };
    if (c === 2) return { focus: 'Part 5 & 6 kecepatan', tasks: [
      T('40 soal Part 5, target 20 detik/soal', 15, 'grammar'),
      T('Dua teks Part 6', 15, 'reading'),
      T('Preposisi melekat & kelas kata', 20, 'grammar')] };
    return { focus: 'Part 7 stamina', tasks: [
      T('Satu set teks ganda + rangkap tiga', 30, 'reading'),
      T('Analisis soal yang salah', 15, 'review'),
      T('Kartu hafalan bisnis', 15, 'vocab')] };
  })
}
];

/* ── Tes penempatan (30 soal, bobot naik per level) ───────────── */
export const PLACEMENT = [
{ lv:'A1', t:'mcq', q:'She ___ a teacher.', opts:['is','are','am','be'], a:0 },
{ lv:'A1', t:'mcq', q:'I ___ coffee every morning.', opts:['drinks','drink','drinking','am drink'], a:1 },
{ lv:'A1', t:'mcq', q:'There ___ four people in my family.', opts:['is','are','has','have'], a:1 },
{ lv:'A1', t:'mcq', q:'He is ___ engineer.', opts:['a','an','the','—'], a:1 },
{ lv:'A1', t:'mcq', q:'They ___ to the beach yesterday.', opts:['go','goes','went','gone'], a:2 },
{ lv:'A2', t:'mcq', q:'I ___ never been to Japan.', opts:['have','has','am','did'], a:0 },
{ lv:'A2', t:'mcq', q:'This bag is ___ than that one.', opts:['cheap','cheaper','cheapest','more cheap'], a:1 },
{ lv:'A2', t:'mcq', q:'She ___ TV when I called.', opts:['watched','was watching','watches','has watched'], a:1 },
{ lv:'A2', t:'mcq', q:'You ___ smoke here. It is forbidden.', opts:['don\'t have to','mustn\'t','shouldn\'t have','needn\'t'], a:1 },
{ lv:'A2', t:'mcq', q:'I enjoy ___ to music.', opts:['listen','to listen','listening','listened'], a:2 },
{ lv:'B1', t:'mcq', q:'If it ___ tomorrow, we will stay home.', opts:['will rain','rains','rained','is raining'], a:1 },
{ lv:'B1', t:'mcq', q:'The bridge ___ in 1998.', opts:['built','was built','has built','is building'], a:1 },
{ lv:'B1', t:'mcq', q:'The man ___ called you is my uncle.', opts:['which','who','whose','whom'], a:1 },
{ lv:'B1', t:'mcq', q:'She said she ___ tired.', opts:['is','was','has been','will be'], a:1 },
{ lv:'B1', t:'mcq', q:'By the time we arrived, the film ___.', opts:['started','has started','had started','was starting'], a:2 },
{ lv:'B1', t:'mcq', q:'I have lived here ___ 2019.', opts:['for','since','ago','during'], a:1 },
{ lv:'B2', t:'mcq', q:'If I ___ harder, I would have passed.', opts:['studied','had studied','study','would study'], a:1 },
{ lv:'B2', t:'mcq', q:'I had my car ___ last week.', opts:['repair','repaired','repairing','to repair'], a:1 },
{ lv:'B2', t:'mcq', q:'___ in 1920, the building still stands.', opts:['Building','Built','To build','Builds'], a:1 },
{ lv:'B2', t:'mcq', q:'He suggested ___ earlier.', opts:['me to leave','to leave','leaving','that leave'], a:2 },
{ lv:'B2', t:'mcq', q:'It is believed ___ the site is ancient.', opts:['that','which','what','of'], a:0 },
{ lv:'B2', t:'mcq', q:'___ the high cost, the project went ahead.', opts:['Although','Despite','However','Because'], a:1 },
{ lv:'C1', t:'mcq', q:'Never ___ such a change in so short a time.', opts:['I have seen','have I seen','I saw','did I saw'], a:1 },
{ lv:'C1', t:'mcq', q:'It is essential that every applicant ___ the form.', opts:['submits','submit','submitted','submitting'], a:1 },
{ lv:'C1', t:'mcq', q:'___ we known earlier, we would have acted.', opts:['If','Had','Have','Should'], a:1 },
{ lv:'C1', t:'mcq', q:'The scheme goes some way ___ solving the issue.', opts:['to','towards','for','at'], a:1 },
{ lv:'C1', t:'mcq', q:'Which is most academic?', opts:['Everyone knows sugar is bad.','Sugar always harms you.','Excessive sugar intake may harm health.','Sugar destroys the body.'], a:2 },
{ lv:'C2', t:'mcq', q:'So great ___ the demand that stock ran out.', opts:['was','were','is','did'], a:0 },
{ lv:'C2', t:'mcq', q:'"Not bad", said with a positive tone, usually means', opts:['poor','average','quite good','unfinished'], a:2 },
{ lv:'C2', t:'mcq', q:'Which collocation is correct?', opts:['do a decision','make a decision','take a decision quickly is do','pay a decision'], a:1 }
];

export const placementResult = score => {
  if (score >= 28) return { level:'C2', note:'Nyaris sempurna. Fokusmu kini nuansa, kolokasi, dan retorika.' };
  if (score >= 25) return { level:'C1', note:'Sangat mahir. Perkuat struktur bertanda dan gaya akademik.' };
  if (score >= 20) return { level:'B2', note:'Menengah atas. Ini level yang dituntut kebanyakan universitas.' };
  if (score >= 15) return { level:'B1', note:'Menengah. Titik lompat terbesar ada di pengandaian dan pasif.' };
  if (score >= 9)  return { level:'A2', note:'Dasar. Selesaikan sistem tenses dan perbandingan.' };
  return { level:'A1', note:'Pemula. Mulai dari to be, artikel, dan present tense.' };
};
