/* KOREA — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk topik inti ko-g1..ko-g18. Tiap topik inti cuma punya
      dua latihan, sementara topik bahasa Inggris rata-rata 4,7. Dua
      latihan tidak cukup untuk satu aturan yang punya beberapa bentuk —
      pemelajar menjawab dua soal lalu topiknya dianggap selesai.
      Ditambah tiga per topik.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (ko-q1..ko-q5). Semuanya tata bahasa TOPIK Level 1–3
      yang belum tertutup ko-g1..g18 maupun ko-p1..p8, dan tiap satunya
      punya titik gelincir yang khas penutur Indonesia.

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema belanja dan uang —
      satu-satunya tema harian yang belum ada di paket mana pun.

   Awalan id: tata bahasa ko-q, kosakata ko-qv-, supaya tidak pernah
   bentrok dengan ko-g*, ko-p*, ko-v*, ko-pv*.
   Romanisasi memakai Alih Aksara Baku (Revised Romanization).          */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK INTI ═════════════════════════ */
grammar: [

{ id:'ko-g1', drills:[
  { t:'mcq', q:'Urutan yang benar untuk "Saya makan nasi" adalah', opts:['저는 먹어요 밥을','저는 밥을 먹어요','밥을 저는 먹어요 아니','먹어요 저는 밥을'], a:1,
    why:'Korea memakai S-O-V: kata kerjanya selalu paling belakang.' },
  { t:'mcq', q:'Kalimat Korea yang benar SELALU diakhiri', opts:['objek','kata kerja atau kata sifat','subjek','keterangan tempat'], a:1,
    why:'Predikat — kata kerja atau kata sifat — wajib di posisi terakhir.' },
  { t:'mcq', q:'"Dia membaca buku di perpustakaan" — kata kerjanya diletakkan', opts:['sesudah subjek','sebelum objek','paling akhir','sebelum keterangan tempat'], a:2,
    why:'Keterangan tempat pun tetap mendahului kata kerja: 그는 도서관에서 책을 읽어요.' } ] },

{ id:'ko-g2', drills:[
  { t:'mcq', q:'"제 이름은 리나예요" — 은 di sini menandai', opts:['objek','topik pembicaraan','tempat','waktu'], a:1,
    why:'은/는 menandai TOPIK: hal yang sedang dibicarakan.' },
  { t:'mcq', q:'Menjawab pertanyaan "siapa yang datang?", partikel yang dipakai adalah', opts:['는','가','를','에'], a:1,
    why:'이/가 menunjuk siapa PELAKUNYA — itu informasi barunya.' },
  { t:'fill', q:'책___ 재미있어요. (buku ini menarik — sebagai topik)', a:['은'],
    why:'책 berakhir konsonan, jadi partikel topiknya 은.' } ] },

{ id:'ko-g3', drills:[
  { t:'mcq', q:'Ragam yang dipakai saat berbicara di depan umum atau kepada atasan adalah', opts:['-아/어','-아요/어요','-습니다/ㅂ니다','-다'], a:2,
    why:'-습니다/ㅂ니다 adalah ragam formal resmi.' },
  { t:'mcq', q:'Ragam -아요/어요 dipakai untuk', opts:['pidato resmi','percakapan sopan sehari-hari','buku pelajaran','teman sangat akrab'], a:1,
    why:'Ini ragam sopan biasa — paling sering dipakai sehari-hari.' },
  { t:'mcq', q:'Kesalahan yang paling sering: memakai ragam akrab kepada', opts:['adik','teman sebaya','orang yang baru dikenal','anak kecil'], a:2,
    why:'Kepada orang yang baru dikenal, ragam akrab terdengar tidak sopan.' } ] },

{ id:'ko-g4', drills:[
  { t:'mcq', q:'"Saya belajar DI perpustakaan" memakai', opts:['도서관에','도서관에서','도서관을','도서관은'], a:1,
    why:'에서 dipakai untuk tempat terjadinya KEGIATAN.' },
  { t:'mcq', q:'"Saya pergi KE sekolah" memakai', opts:['학교에서','학교를','학교에','학교는'], a:2,
    why:'에 menandai TUJUAN atau lokasi keberadaan, bukan tempat kegiatan.' },
  { t:'fill', q:'커피___ 마셔요. (minum kopi — partikel objek)', a:['를'],
    why:'커피 berakhir vokal, jadi partikel objeknya 를.' } ] },

{ id:'ko-g5', drills:[
  { t:'mcq', q:'학생 + bentuk sopan "adalah" =', opts:['학생예요','학생이에요','학생에요','학생이예요'], a:1,
    why:'학생 berakhir konsonan, jadi memakai 이에요.' },
  { t:'mcq', q:'의사 + bentuk sopan "adalah" =', opts:['의사예요','의사이에요','의사에요','의사이예요'], a:0,
    why:'의사 berakhir vokal, jadi memakai 예요.' },
  { t:'mcq', q:'Bentuk formal dari 학생이에요 adalah', opts:['학생입니다','학생습니다','학생이습니다','학생ㅂ니다'], a:0,
    why:'Ragam formalnya 입니다, dipakai apa pun huruf akhirnya.' } ] },

{ id:'ko-g6', drills:[
  { t:'mcq', q:'"Saya tidak punya uang" =', opts:['돈이 있어요','돈이 없어요','돈을 안 해요','돈이 아니에요'], a:1,
    why:'없어요 dipakai untuk ketiadaan dan ketidakpunyaan sekaligus.' },
  { t:'mcq', q:'있다/없다 memakai partikel', opts:['을/를','이/가','에서','와/과'], a:1,
    why:'Yang ada atau tidak ada ditandai 이/가, bukan partikel objek.' },
  { t:'mcq', q:'Bentuk hormat dari 있어요 untuk orang yang dihormati adalah', opts:['있으세요','계세요','있어세요','있읍니다'], a:1,
    why:'Untuk keberadaan ORANG yang dihormati dipakai 계시다.' } ] },

{ id:'ko-g7', drills:[
  { t:'mcq', q:'"Saya tidak makan (karena tidak mau)" =', opts:['못 먹어요','안 먹어요','먹지 못해요','안 먹지요'], a:1,
    why:'안 menandai PILIHAN untuk tidak melakukan.' },
  { t:'mcq', q:'"Saya tidak bisa datang (ada halangan)" =', opts:['안 가요','못 가요','가지 않아요','안 갈래요'], a:1,
    why:'못 menandai ketidakmampuan atau halangan di luar kehendak.' },
  { t:'mcq', q:'Untuk kata kerja 하다 seperti 공부하다, penyangkalannya', opts:['안 공부하다','공부 안 해요','안 공부해요 saja','못 공부 해요'], a:1,
    why:'안 disisipkan di antara kata bendanya dan 하다: 공부 안 해요.' } ] },

{ id:'ko-g8', drills:[
  { t:'mcq', q:'가다 dalam bentuk lampau sopan =', opts:['가았어요','갔어요','가었어요','갔이에요'], a:1,
    why:'Vokal ㅏ bertemu 았어요 lalu meluluh jadi 갔어요.' },
  { t:'mcq', q:'먹다 dalam bentuk lampau sopan =', opts:['먹았어요','먹었어요','먹였어요','먹앗어요'], a:1,
    why:'Vokal akar ㅓ bukan ㅏ/ㅗ, jadi memakai 었어요.' },
  { t:'mcq', q:'하다 dalam bentuk lampau sopan =', opts:['핬어요','하았어요','했어요','하었어요'], a:2,
    why:'하다 tidak beraturan: bentuk lampaunya 했어요.' } ] },

{ id:'ko-g9', drills:[
  { t:'mcq', q:'"Saya akan pergi" =', opts:['갈 거예요','가 거예요','갈거에요','가을 거예요'], a:0,
    why:'가다 berakhir vokal, jadi langsung ditambah ㄹ 거예요.' },
  { t:'mcq', q:'먹다 + bentuk masa depan =', opts:['먹 거예요','먹을 거예요','먹ㄹ 거예요','머글 거예요'], a:1,
    why:'Akar berakhir konsonan menyisipkan 으: 먹을 거예요.' },
  { t:'mcq', q:'(으)ㄹ 거예요 selain masa depan juga menyatakan', opts:['perintah','dugaan','larangan','kebiasaan'], a:1,
    why:'Bisa berarti "mungkin/sepertinya", tergantung konteks.' } ] },

{ id:'ko-g10', drills:[
  { t:'mcq', q:'"Saya ingin makan" =', opts:['먹고 싶어요','먹고 싶다요','먹어 싶어요','먹을 싶어요'], a:0,
    why:'고 싶다 menempel langsung pada AKAR kata kerja.' },
  { t:'mcq', q:'고 싶다 hanya boleh dipakai untuk', opts:['orang ketiga','diri sendiri dan lawan bicara','benda','semua orang tanpa batas'], a:1,
    why:'Untuk orang ketiga dipakai 고 싶어하다, karena keinginan orang lain tidak bisa kita ketahui langsung.' },
  { t:'mcq', q:'"Dia ingin pulang" =', opts:['그는 집에 가고 싶어요','그는 집에 가고 싶어해요','그는 집에 가고 싶다','그는 집에 가고 싶습니다'], a:1,
    why:'Orang ketiga memakai 고 싶어하다.' } ] },

{ id:'ko-g11', drills:[
  { t:'mcq', q:'Kalimat "Karena hujan, ayo tidak pergi" memakai', opts:['비가 와서','비가 오니까','비가 오고','비가 와도'], a:1,
    why:'Kalau bagian keduanya ajakan atau perintah, sebabnya WAJIB (으)니까.' },
  { t:'mcq', q:'아/어서 TIDAK boleh diikuti', opts:['pernyataan','ajakan atau perintah','pertanyaan','bentuk lampau'], a:1,
    why:'Itu perbedaan utamanya dengan (으)니까.' },
  { t:'mcq', q:'Bagian sebelum 아/어서 tidak boleh diberi', opts:['partikel','penanda lampau 았/었','kata sifat','keterangan'], a:1,
    why:'Waktu ditandai di bagian akhir kalimat saja: 늦어서 죄송해요.' } ] },

{ id:'ko-g12', drills:[
  { t:'mcq', q:'"Mahal tetapi enak" =', opts:['비싸지만 맛있어요','비싸고 맛있어요','비싸서 맛있어요','비싸면 맛있어요'], a:0,
    why:'지만 menyatakan pertentangan langsung.' },
  { t:'mcq', q:'는데 berbeda dari 지만 karena ia juga bisa', opts:['menyatakan sebab','memberi latar sebelum kalimat utama','menyatakan syarat','menyatakan tujuan'], a:1,
    why:'는데 sering dipakai untuk memberi konteks, bukan cuma melawankan.' },
  { t:'mcq', q:'Kata sifat 좋다 + 는데 menjadi', opts:['좋는데','좋은데','좋으는데','좋다는데'], a:1,
    why:'Kata sifat memakai (으)ㄴ데, kata kerja memakai 는데.' } ] },

{ id:'ko-g13', drills:[
  { t:'mcq', q:'"Kalau hujan, saya tidak pergi" =', opts:['비가 오면 안 가요','비가 와서 안 가요','비가 오니까 안 가요','비가 오지만 안 가요'], a:0,
    why:'(으)면 menyatakan syarat atau pengandaian.' },
  { t:'mcq', q:'먹다 + (으)면 =', opts:['먹면','먹으면','머그면','먹어면'], a:1,
    why:'Akar berakhir konsonan menyisipkan 으.' },
  { t:'mcq', q:'"Kalau sudah selesai, hubungi saya" — bagian pertamanya', opts:['끝나면','끝나서','끝나고','끝나는데'], a:0,
    why:'Syarat waktu yang belum terjadi memakai (으)면.' } ] },

{ id:'ko-g14', drills:[
  { t:'mcq', q:'"Saya sedang makan" =', opts:['먹고 있어요','먹어 있어요','먹는 있어요','먹고 이에요'], a:0,
    why:'고 있다 menempel pada akar kata kerja.' },
  { t:'mcq', q:'Bentuk hormat dari 고 있다 adalah', opts:['고 있으세요','고 계세요','고 있어세요','고 있읍니다'], a:1,
    why:'Untuk orang yang dihormati dipakai 고 계시다.' },
  { t:'mcq', q:'고 있다 TIDAK dipakai untuk', opts:['kegiatan yang berlangsung','kebiasaan yang berulang','kata sifat','pekerjaan yang sedang dikerjakan'], a:2,
    why:'Kata sifat tidak memakai bentuk berlangsung dalam bahasa Korea.' } ] },

{ id:'ko-g15', drills:[
  { t:'mcq', q:'"Tolong tunggu sebentar" =', opts:['기다려 주세요','기다리 주세요','기다리고 주세요','기다려서 주세요'], a:0,
    why:'Kata kerja diubah ke bentuk 아/어 dulu, baru ditambah 주세요.' },
  { t:'mcq', q:'주세요 lebih sopan daripada', opts:['주십시오','주세요 tidak ada bandingannya','줘','주시겠어요'], a:2,
    why:'줘 adalah bentuk akrab; 주세요 sopan; 주십시오 paling formal.' },
  { t:'mcq', q:'"Tolong ajarkan" — 가르치다 menjadi', opts:['가르치 주세요','가르쳐 주세요','가르치어 주세요','가르치고 주세요'], a:1,
    why:'가르치 + 어 meluluh jadi 가르쳐.' } ] },

{ id:'ko-g16', drills:[
  { t:'mcq', q:'"Saya harus belajar" =', opts:['공부해야 돼요','공부하야 돼요','공부해서 돼요','공부하고 돼요'], a:0,
    why:'Bentuk 아/어 dulu, baru 야 되다.' },
  { t:'mcq', q:'아/어야 되다 dan 아/어야 하다 bedanya', opts:['artinya berbeda jauh','되다 lebih lisan, 하다 lebih tulisan','하다 lebih sopan','되다 hanya untuk lampau'], a:1,
    why:'Artinya sama; 되다 terasa lebih lisan.' },
  { t:'mcq', q:'"Tidak perlu pergi" =', opts:['안 가야 돼요','가지 않아야 돼요','안 가도 돼요','가면 안 돼요'], a:2,
    why:'아/어도 되다 = boleh; 안 가도 돼요 = tidak pergi pun tidak apa-apa.' } ] },

{ id:'ko-g17', drills:[
  { t:'mcq', q:'가다 dalam bentuk hormat =', opts:['가세요','가으세요','가시요','갑시다'], a:0,
    why:'Akar berakhir vokal langsung ditambah 시: 가 + 시 + 어요 → 가세요.' },
  { t:'mcq', q:'먹다 punya bentuk hormat khusus, yaitu', opts:['먹으세요','드세요','먹시다','잡수요'], a:1,
    why:'먹다 diganti kata hormatnya sendiri: 드시다 atau 잡수시다.' },
  { t:'mcq', q:'Bentuk hormat TIDAK boleh dipakai untuk', opts:['orang tua','guru','diri sendiri','atasan'], a:2,
    why:'Merendahkan diri sendiri: tidak pernah memakai (으)시 untuk perbuatan sendiri.' } ] },

{ id:'ko-g18', drills:[
  { t:'mcq', q:'Menyampaikan ulang pernyataan orang lain memakai', opts:['-다고 해요','-냐고 해요','-자고 해요','-라고 해요'], a:0,
    why:'-다고 하다 untuk pernyataan.' },
  { t:'mcq', q:'Menyampaikan ulang PERTANYAAN memakai', opts:['-다고','-냐고','-자고','-라고'], a:1,
    why:'-냐고 하다 untuk pertanyaan.' },
  { t:'mcq', q:'Menyampaikan ulang AJAKAN memakai', opts:['-다고','-냐고','-자고','-라고'], a:2,
    why:'-자고 하다 untuk ajakan; -라고 하다 untuk perintah.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'ko-q1', level:'1', title:'부터 / 까지 / 에서', titleId:'Dari dan Sampai',
  why:'Bahasa Indonesia memakai satu kata "dari" untuk waktu maupun tempat — "dari jam tujuh", "dari Jakarta". Bahasa Korea membedakannya: 부터 untuk WAKTU, 에서 untuk TEMPAT. Karena tidak ada dorongan alami untuk membedakannya, penutur Indonesia hampir selalu memakai 부터 untuk keduanya.',
  form:'WAKTU: 시간 + 부터 = mulai dari (waktu)\nTEMPAT: 장소 + 에서 = dari (tempat)\nBATAS: 시간/장소 + 까지 = sampai (waktu maupun tempat)\nPasangan lazim: A부터 B까지 (waktu) · A에서 B까지 (tempat)',
  notes:['까지 dipakai untuk waktu MAUPUN tempat, jadi hanya sisi "dari"-nya yang perlu dibedakan.',
         '에서 punya dua tugas: "dari (tempat asal)" dan "di (tempat kegiatan)". Konteks yang membedakan.',
         '부터 juga bisa dipakai untuk urutan, bukan hanya waktu: 처음부터 = dari awal.',
         '까지 bisa berarti "bahkan": 너까지? = bahkan kamu juga?',
         'Untuk jarak dan ongkos, pasangannya selalu 에서...까지: 집에서 회사까지.'],
  ex:[['아홉 시부터 여섯 시까지 일해요.','Saya bekerja dari jam sembilan sampai jam enam.','ahop sibuteo yeoseot sikkaji ilhaeyo.'],
      ['서울에서 부산까지 가요.','Saya pergi dari Seoul sampai Busan.','seoureseo busankkaji gayo.'],
      ['월요일부터 금요일까지 수업이 있어요.','Ada kelas dari Senin sampai Jumat.','woryoilbuteo geumyoilkkaji sueobi isseoyo.'],
      ['처음부터 다시 하세요.','Silakan ulangi dari awal.','cheoeumbuteo dasi haseyo.'],
      ['집에서 학교까지 멀어요.','Dari rumah sampai sekolah jauh.','jibeseo hakgyokkaji meoreoyo.'],
      ['내일까지 끝내야 돼요.','Harus selesai sampai besok.','naeilkkaji kkeutnaeya dwaeyo.']],
  traps:[['서울부터 부산까지','서울에서 부산까지','Tempat memakai 에서, bukan 부터.'],
         ['아홉 시에서 여섯 시까지','아홉 시부터 여섯 시까지','Waktu memakai 부터, bukan 에서.'],
         ['집에서 학교에서','집에서 학교까지','Sisi "sampai" selalu 까지, tidak diulang 에서.'],
         ['월요일에서 금요일까지','월요일부터 금요일까지','Hari termasuk waktu, jadi 부터.']],
  drills:[
    { t:'mcq', q:'"Dari Seoul sampai Busan" =', opts:['서울부터 부산까지','서울에서 부산까지','서울에서 부산부터','서울까지 부산에서'], a:1,
      why:'Tempat memakai 에서...까지.' },
    { t:'mcq', q:'"Dari jam tiga sampai jam lima" =', opts:['세 시에서 다섯 시까지','세 시부터 다섯 시까지','세 시까지 다섯 시부터','세 시에 다섯 시까지'], a:1,
      why:'Waktu memakai 부터...까지.' },
    { t:'fill', q:'집___ 회사까지 한 시간 걸려요. (dari rumah)', a:['에서'],
      why:'집 adalah tempat, jadi memakai 에서.' },
    { t:'mcq', q:'"Ulangi dari awal" =', opts:['처음에서 다시','처음부터 다시','처음까지 다시','처음에 다시'], a:1,
      why:'부터 juga menandai titik mulai sebuah urutan.' },
    { t:'mcq', q:'까지 dipakai untuk', opts:['hanya waktu','hanya tempat','waktu maupun tempat','hanya urutan'], a:2,
      why:'Hanya sisi "dari"-nya yang dibedakan; "sampai" selalu 까지.' } ] },

{ id:'ko-q2', level:'1', title:'하고 · 와/과 · (이)랑', titleId:'Tiga Cara Menyatakan Dan',
  why:'Bahasa Indonesia memisahkan "dan" (menyambung benda) dari "dengan" (menyertai). Bahasa Korea memakai partikel yang SAMA untuk keduanya, tetapi punya tiga bentuk yang berbeda ragamnya. Penutur Indonesia biasanya menghafal satu bentuk saja lalu memakainya di semua situasi, termasuk di tulisan resmi tempat bentuk itu terdengar terlalu santai.',
  form:'하고 — lisan, boleh sesudah konsonan maupun vokal\n와 (sesudah vokal) / 과 (sesudah konsonan) — tulisan & resmi\n(이)랑 — akrab; 랑 sesudah vokal, 이랑 sesudah konsonan\nKetiganya berarti "dan" DAN "dengan", tergantung kata kerjanya',
  notes:['Untuk menyambung dua kata benda, ketiganya sama artinya — yang berbeda hanya ragamnya.',
         'Kalau kata kerjanya 같이 atau 함께 (bersama), partikel yang sama berarti "dengan", bukan "dan".',
         '와/과 hampir tidak dipakai dalam percakapan santai; ia terdengar seperti bahasa berita.',
         '(이)랑 tidak boleh dipakai kepada atasan atau di tulisan resmi.',
         'Untuk menyambung KALIMAT, bukan kata benda, dipakai 그리고 atau akhiran -고 — bukan partikel ini.'],
  ex:[['빵하고 우유를 샀어요.','Saya membeli roti dan susu.','ppanghago uyureul sasseoyo.'],
      ['친구와 같이 갔어요.','Saya pergi bersama teman.','chinguwa gachi gasseoyo.'],
      ['커피랑 케이크 주세요.','Tolong kopi dan kue.','keopirang keikeu juseyo.'],
      ['한국어와 일본어를 배워요.','Saya belajar bahasa Korea dan Jepang.','hangugeowa ilboneoreul baewoyo.'],
      ['동생하고 같이 살아요.','Saya tinggal bersama adik.','dongsaenghago gachi sarayo.'],
      ['선생님과 이야기했습니다.','Saya berbicara dengan guru.','seonsaengnimgwa iyagihaetseumnida.']],
  traps:[['빵과 우유 주세요 (di kedai)','빵하고 우유 주세요','와/과 terdengar terlalu resmi untuk memesan di kedai.'],
         ['친구랑 갔습니다','친구와 갔습니다','Ragam akrab (이)랑 tidak cocok dipasangkan dengan akhiran formal -습니다.'],
         ['커피과 케이크','커피와 케이크','커피 berakhir vokal, jadi memakai 와.'],
         ['비가 와요 그리고 추워요 하고','비가 오고 추워요','Untuk menyambung KALIMAT dipakai -고, bukan partikel benda.']],
  drills:[
    { t:'mcq', q:'커피 + partikel "dan" ragam tulisan =', opts:['커피과','커피와','커피이랑','커피하고요'], a:1,
      why:'커피 berakhir vokal, jadi 와.' },
    { t:'mcq', q:'책 + partikel "dan" ragam tulisan =', opts:['책와','책과','책랑','책이하고'], a:1,
      why:'책 berakhir konsonan, jadi 과.' },
    { t:'mcq', q:'Bentuk yang paling akrab adalah', opts:['하고','와/과','(이)랑','semuanya sama'], a:2,
      why:'(이)랑 dipakai di antara teman dekat.' },
    { t:'mcq', q:'"Saya pergi bersama teman" — partikelnya berarti', opts:['dan','dengan','dari','sampai'], a:1,
      why:'Kata kerja 같이 가다 membuat partikelnya berarti "dengan".' },
    { t:'mcq', q:'Untuk menyambung dua KALIMAT dipakai', opts:['하고 sebagai partikel','akhiran -고','와/과','(이)랑'], a:1,
      why:'Partikel ini hanya menyambung kata benda; kalimat disambung akhiran -고.' } ] },

{ id:'ko-q3', level:'2', title:'보다 (더) — Perbandingan', titleId:'Membandingkan Dua Hal',
  why:'Susunan perbandingan bahasa Indonesia dan Korea berkebalikan. Kita berkata "A lebih besar DARIPADA B" — pembandingnya di belakang. Korea berkata "A는 B보다 커요" — pembandingnya di TENGAH, sebelum kata sifatnya. Penutur Indonesia yang menerjemahkan berurutan hampir selalu menaruh 보다 di tempat yang salah.',
  form:'A는/은 + B보다 + (더) + kata sifat\n보다 menempel pada hal yang DIBANDINGKAN (B)\n더 = lebih (boleh dihilangkan, maknanya tetap)\n덜 = kurang · 제일/가장 = paling',
  notes:['보다 selalu menempel langsung pada kata bendanya, tanpa spasi: 저보다, 이것보다.',
         '더 sebenarnya boleh dihilangkan karena 보다 sendiri sudah berarti "dibanding". Menyertakannya membuat maknanya lebih tegas.',
         'Untuk "paling" dipakai 제일 atau 가장, dan 보다 tidak ikut: 제일 커요.',
         'Urutan A dan B boleh dibalik untuk penekanan, tetapi 보다 tetap menempel pada pembandingnya.',
         'Kesalahan lain yang sering: menambahkan 보다 pada kata sifatnya, bukan pada kata bendanya.'],
  ex:[['이 가방이 저 가방보다 비싸요.','Tas ini lebih mahal daripada tas itu.','i gabangi jeo gabangboda bissayo.'],
      ['서울이 부산보다 더 커요.','Seoul lebih besar daripada Busan.','seouri busanboda deo keoyo.'],
      ['오늘이 어제보다 추워요.','Hari ini lebih dingin daripada kemarin.','oneuri eojeboda chuwoyo.'],
      ['저는 커피보다 차를 좋아해요.','Saya lebih suka teh daripada kopi.','jeoneun keopiboda chareul joahaeyo.'],
      ['이게 제일 좋아요.','Ini yang paling bagus.','ige jeil joayo.'],
      ['생각보다 쉬웠어요.','Lebih mudah daripada yang saya kira.','saenggakboda swiwosseoyo.']],
  traps:[['이 가방이 비싸요 저 가방보다','이 가방이 저 가방보다 비싸요','보다 dan pembandingnya harus mendahului kata sifat.'],
         ['서울이 부산 보다 커요','서울이 부산보다 커요','보다 ditulis menempel pada kata bendanya.'],
         ['이게 보다 제일 좋아요','이게 제일 좋아요','Bentuk "paling" tidak memakai 보다.'],
         ['저는 차보다 커피를 좋아해요 (maksudnya lebih suka teh)','저는 커피보다 차를 좋아해요','보다 menempel pada yang KALAH, bukan yang dipilih.']],
  drills:[
    { t:'mcq', q:'"Seoul lebih besar daripada Busan" =', opts:['서울이 커요 부산보다','서울이 부산보다 커요','부산보다 서울이 커요만','서울보다 부산이 커요'], a:1,
      why:'Susunannya A는 B보다 kata sifat.' },
    { t:'mcq', q:'보다 menempel pada', opts:['kata sifatnya','hal yang dibandingkan','subjeknya','kata kerjanya'], a:1,
      why:'보다 selalu menempel pada pembandingnya.' },
    { t:'mcq', q:'"Paling murah" =', opts:['제일 싸요','싸보다 제일','제일 싸보다','더 싸보다'], a:0,
      why:'Bentuk superlatif memakai 제일/가장 tanpa 보다.' },
    { t:'fill', q:'오늘이 어제___ 더워요. (daripada kemarin)', a:['보다'],
      why:'보다 menempel langsung pada 어제.' },
    { t:'mcq', q:'"Saya lebih suka teh daripada kopi" =', opts:['차보다 커피를 좋아해요','커피보다 차를 좋아해요','커피를 차보다 좋아해요만','차를 커피 좋아해요보다'], a:1,
      why:'보다 menempel pada yang KALAH, yaitu kopi.' } ] },

{ id:'ko-q4', level:'2', title:'(으)ㄹ 수 있다 / 없다', titleId:'Bisa dan Tidak Bisa',
  why:'Kata "bisa" dalam bahasa Indonesia menutup dua hal sekaligus: KEMAMPUAN ("saya bisa berenang") dan IZIN ("boleh saya duduk di sini?"). Bahasa Korea memisahkannya tegas — (으)ㄹ 수 있다 hanya untuk kemampuan, sedangkan izin memakai 아/어도 되다. Penutur Indonesia yang memakai 수 있다 untuk meminta izin terdengar seperti sedang menanyakan kesanggupan fisik lawan bicara.',
  form:'Akar berakhir VOKAL + ㄹ 수 있어요 / 없어요\nAkar berakhir KONSONAN + 을 수 있어요 / 없어요\nIzin: akar + 아/어도 돼요?\nLarangan: 으면 안 돼요',
  notes:['수 ditulis terpisah dari 있다: ㄹ 수 있어요, bukan ㄹ수있어요.',
         '없다 dipakai apa adanya untuk "tidak bisa" — tidak perlu ditambah 안.',
         '못 juga berarti tidak bisa, tetapi menekankan halangan dari luar; 수 없다 lebih netral.',
         'Untuk izin, jawabannya 네, 돼요 (boleh) atau 아니요, 안 돼요 (tidak boleh).',
         'ㄹ pada akar yang sudah berakhir ㄹ tidak digandakan: 만들다 → 만들 수 있어요.'],
  ex:[['저는 수영할 수 있어요.','Saya bisa berenang.','jeoneun suyeonghal su isseoyo.'],
      ['한국어를 읽을 수 있어요?','Bisakah kamu membaca bahasa Korea?','hangugeoreul ilgeul su isseoyo?'],
      ['오늘은 갈 수 없어요.','Hari ini saya tidak bisa pergi.','oneureun gal su eopseoyo.'],
      ['여기 앉아도 돼요?','Boleh saya duduk di sini?','yeogi anjado dwaeyo?'],
      ['여기서 사진을 찍으면 안 돼요.','Tidak boleh memotret di sini.','yeogiseo sajineul jjigeumyeon an dwaeyo.'],
      ['이거 만들 수 있어요.','Saya bisa membuat ini.','igeo mandeul su isseoyo.']],
  traps:[['여기 앉을 수 있어요? (maksudnya minta izin)','여기 앉아도 돼요?','수 있다 menanyakan kesanggupan, bukan izin.'],
         ['갈 수 안 있어요','갈 수 없어요','Lawan dari 있다 adalah 없다; tidak perlu 안.'],
         ['읽을수있어요','읽을 수 있어요','수 ditulis terpisah.'],
         ['만들을 수 있어요','만들 수 있어요','Akar yang sudah berakhir ㄹ tidak ditambah 을.']],
  drills:[
    { t:'mcq', q:'가다 + "bisa" =', opts:['가을 수 있어요','갈 수 있어요','가 수 있어요','가ㄹ수있어요'], a:1,
      why:'Akar berakhir vokal langsung ditambah ㄹ 수 있어요.' },
    { t:'mcq', q:'먹다 + "tidak bisa" =', opts:['먹 수 없어요','먹을 수 없어요','먹ㄹ 수 없어요','먹을 수 안 있어요'], a:1,
      why:'Akar berakhir konsonan menyisipkan 을; lawan 있다 adalah 없다.' },
    { t:'mcq', q:'"Boleh saya masuk?" =', opts:['들어갈 수 있어요?','들어가도 돼요?','들어갈 수 없어요?','들어가면 안 돼요?'], a:1,
      why:'Izin memakai 아/어도 되다.' },
    { t:'mcq', q:'만들다 + "bisa" =', opts:['만들을 수 있어요','만들 수 있어요','만드ㄹ 수 있어요','만들를 수 있어요'], a:1,
      why:'Akar yang sudah berakhir ㄹ tidak digandakan.' },
    { t:'mcq', q:'"Tidak boleh merokok di sini" memakai', opts:['수 없어요','으면 안 돼요','아도 돼요','고 싶어요'], a:1,
      why:'Larangan memakai (으)면 안 되다.' } ] },

{ id:'ko-q5', level:'3', title:'아/어 보다 — Mencoba', titleId:'Mencoba Melakukan',
  why:'Bahasa Indonesia menyatakan "coba" dengan kata terpisah di depan kata kerja — "coba makan", "coba pakai". Bahasa Korea menempelkannya sebagai akhiran, dan bentuknya sama persis dengan kata kerja 보다 (melihat). Karena itu pemelajar Indonesia sering membacanya sebagai "melihat" dan bingung dengan kalimat seperti 먹어 봤어요 yang secara harfiah terbaca "makan lalu melihat".',
  form:'Akar + 아/어 + 보다\nAjakan mencoba: 아/어 보세요\nPernah mencoba (pengalaman): 아/어 봤어요\nBelum pernah: 아/어 본 적이 없어요',
  notes:['보다 di sini sudah kehilangan arti "melihat" — ia menjadi penanda mencoba.',
         'Bentuk lampaunya 봤어요 berarti "pernah", bukan "sudah melihat".',
         'Tidak dipakai bersama 보다 sendiri: 봐 보다 tidak lazim.',
         '아/어 보세요 adalah cara paling halus menyarankan sesuatu — lebih lembut daripada perintah biasa.',
         'Untuk pengalaman yang lebih tegas dipakai (으)ㄴ 적이 있다: 가 본 적이 있어요.'],
  ex:[['이거 한번 먹어 보세요.','Coba makan ini sekali.','igeo hanbeon meogeo boseyo.'],
      ['한국에 가 봤어요?','Pernah pergi ke Korea?','hanguge ga bwasseoyo?'],
      ['이 옷을 입어 봐도 돼요?','Boleh saya coba pakai baju ini?','i oseul ibeo bwado dwaeyo?'],
      ['김치를 만들어 봤어요.','Saya pernah mencoba membuat kimchi.','gimchireul mandeureo bwasseoyo.'],
      ['한번 생각해 보세요.','Coba pikirkan sekali.','hanbeon saenggakhae boseyo.'],
      ['아직 해 본 적이 없어요.','Saya belum pernah mencobanya.','ajik hae bon jeogi eopseoyo.']],
  traps:[['먹고 보세요','먹어 보세요','Bentuk 아/어 dulu, bukan -고.'],
         ['가 봤어요 diartikan "sudah melihat"','가 봤어요 = "pernah pergi"','보다 di sini penanda mencoba, bukan melihat.'],
         ['입어 보다 돼요?','입어 봐도 돼요?','Izin tetap memakai 아/어도 되다, dipasang setelah 봐.'],
         ['해 보 적이 없어요','해 본 적이 없어요','Bentuk lampau penghubungnya 본, bukan 보.']],
  drills:[
    { t:'mcq', q:'"Coba makan ini" =', opts:['먹고 보세요','먹어 보세요','먹을 보세요','먹어서 보세요'], a:1,
      why:'Akar diubah ke bentuk 아/어 dulu.' },
    { t:'mcq', q:'가 봤어요 artinya', opts:['sudah melihat','pernah pergi','akan pergi','sedang pergi'], a:1,
      why:'아/어 보다 dalam bentuk lampau berarti pengalaman.' },
    { t:'mcq', q:'"Boleh saya coba pakai?" =', opts:['입어 봐도 돼요?','입어 보 돼요?','입고 봐도 돼요?','입어 볼 수 없어요?'], a:0,
      why:'봐 + 도 돼요 untuk meminta izin mencoba.' },
    { t:'mcq', q:'"Belum pernah mencoba" =', opts:['해 보 적이 없어요','해 본 적이 없어요','해서 본 적이 없어요','하고 본 적이 없어요'], a:1,
      why:'Bentuk lampau penghubungnya 본.' },
    { t:'mcq', q:'아/어 보세요 dipakai untuk', opts:['memerintah dengan tegas','menyarankan dengan halus','melarang','bertanya'], a:1,
      why:'Ini cara paling lembut menyarankan sesuatu.' } ] },

],

/* ══ KOSAKATA — BELANJA & UANG ═════════════════════════════════ */
vocab: [
{ id:'ko-qv-belanja', title:'쇼핑과 돈', titleId:'Belanja & Uang', level:'2', icon:'🛒',
  blurb:'Empat puluh kata yang benar-benar dipakai saat berbelanja, membayar, menawar, dan mengurus uang di Korea.',
  words:[
    ['돈','don','uang'],
    ['가격','gagyeok','harga'],
    ['값','gap','harga (lisan)'],
    ['비싸다','bissada','mahal'],
    ['싸다','ssada','murah'],
    ['사다','sada','membeli'],
    ['팔다','palda','menjual'],
    ['시장','sijang','pasar'],
    ['가게','gage','toko'],
    ['백화점','baekhwajeom','pusat perbelanjaan'],
    ['편의점','pyeonuijeom','minimarket'],
    ['손님','sonnim','pelanggan'],
    ['직원','jigwon','pegawai'],
    ['현금','hyeongeum','uang tunai'],
    ['카드','kadeu','kartu'],
    ['계산','gyesan','pembayaran'],
    ['계산하다','gyesanhada','membayar'],
    ['영수증','yeongsujeung','struk'],
    ['거스름돈','geoseureumdon','uang kembalian'],
    ['할인','harin','diskon'],
    ['세일','seil','obral'],
    ['공짜','gongjja','gratis'],
    ['깎다','kkakda','menawar'],
    ['교환','gyohwan','tukar barang'],
    ['환불','hwanbul','pengembalian uang'],
    ['봉투','bongtu','kantong'],
    ['사이즈','saijeu','ukuran'],
    ['색깔','saekkkal','warna'],
    ['입어 보다','ibeo boda','mencoba memakai'],
    ['맞다','matda','pas / cocok'],
    ['고르다','goreuda','memilih'],
    ['주문하다','jumunhada','memesan'],
    ['배달','baedal','pengantaran'],
    ['무료 배송','muryo baesong','ongkir gratis'],
    ['통장','tongjang','buku rekening'],
    ['은행','eunhaeng','bank'],
    ['송금','songgeum','transfer uang'],
    ['저금하다','jeogeumhada','menabung'],
    ['빌리다','billida','meminjam'],
    ['갚다','gapda','melunasi']
  ] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Toko & Kasir', items:[
  ['이거 얼마예요?','igeo eolmayeyo?','Ini berapa harganya?'],
  ['좀 깎아 주세요.','jom kkakka juseyo.','Tolong kurangi sedikit harganya.'],
  ['너무 비싸요.','neomu bissayo.','Terlalu mahal.'],
  ['카드로 계산할게요.','kadeuro gyesanhalgeyo.','Saya bayar dengan kartu.'],
  ['현금으로 할게요.','hyeongeumeuro halgeyo.','Saya bayar tunai.'],
  ['영수증 주세요.','yeongsujeung juseyo.','Tolong struknya.'],
  ['봉투 주세요.','bongtu juseyo.','Tolong kantongnya.'],
  ['그냥 구경하는 거예요.','geunyang gugyeonghaneun geoyeyo.','Saya lihat-lihat dulu.']
] },
{ g:'Ukuran, Tukar & Kembali', items:[
  ['다른 사이즈 있어요?','dareun saijeu isseoyo?','Ada ukuran lain?'],
  ['입어 봐도 돼요?','ibeo bwado dwaeyo?','Boleh saya coba pakai?'],
  ['조금 커요.','jogeum keoyo.','Sedikit kebesaran.'],
  ['조금 작아요.','jogeum jagayo.','Sedikit kekecilan.'],
  ['교환할 수 있어요?','gyohwanhal su isseoyo?','Bisa ditukar?'],
  ['환불해 주세요.','hwanbulhae juseyo.','Tolong dikembalikan uangnya.'],
  ['이거 할인해요?','igeo harinhaeyo?','Ini ada diskonnya?'],
  ['거스름돈 주세요.','geoseureumdon juseyo.','Tolong uang kembaliannya.']
] }
]

};
