/* BAHASA KOREA — modul lengkap: aksara Hangul dengan urutan goresan,
   aturan penyusunan suku kata, pelafalan, trik mengingat, frasa,
   tata bahasa dasar, dan spesifikasi TOPIK.

   Koordinat goresan memakai kotak 100×100 (kiri-atas 0,0). */

export const KO = {
code:'ko', name:'Korea', native:'한국어', dir:'ltr',

intro: {
  headline:'Hangul bukan aksara warisan — ia dirancang.',
  body:`Pada 1443 Raja Sejong memerintahkan pembuatan aksara yang bisa dipelajari rakyat biasa
dalam hitungan jam. Hasilnya Hangul: 24 huruf dasar yang bentuknya meniru posisi lidah, gigi,
dan bibir saat mengucapkannya. Inilah satu-satunya aksara besar di dunia yang diketahui siapa
perancangnya dan mengapa bentuknya begitu — dan itulah sebabnya Hangul jauh lebih cepat
dikuasai daripada aksara Jepang atau Tionghoa.`,
  facts:[
    '24 huruf dasar: 14 konsonan + 10 vokal. Sisanya gabungan.',
    'Huruf disusun jadi blok suku kata, bukan berderet seperti huruf Latin.',
    'Konsonan digambar mengikuti bentuk alat ucap; vokal digambar dari tiga lambang: titik (langit), garis datar (bumi), garis tegak (manusia).',
    'Bahasa Korea memakai urutan Subjek–Objek–Kata Kerja: "Saya nasi makan".'
  ],
  hardForId:[
    'Ada tiga jenis konsonan yang bagi telinga Indonesia terdengar sama: biasa (ㄱ), diaspirasi (ㅋ), dan ditegangkan (ㄲ). Ini pembeda makna.',
    'Perbedaan ㅓ dan ㅗ, serta ㅡ dan ㅜ, tidak ada padanannya di bahasa Indonesia.',
    'Kata kerja selalu di akhir kalimat.',
    'Ada dua sistem angka yang dipakai untuk hal berbeda (asli Korea dan serapan Tionghoa).'
  ]
},

/* ── Aksara ───────────────────────────────────────────────────── */
scripts: [
{
  id:'jamo-c', name:'Konsonan Dasar', native:'자음', count:14,
  note:'Bentuk dasarnya meniru alat ucap: ㄱ pangkal lidah menempel langit-langit, ㄴ ujung lidah menyentuh gusi, ㅁ mulut tertutup, ㅅ bentuk gigi, ㅇ tenggorokan terbuka. Sisanya adalah bentuk dasar itu ditambah garis.',
  chars: [
    { c:'ㄱ', rom:'g / k', ipa:'/k/', name:'giyeok',
      trick:'Gambar pangkal lidah yang naik menempel langit-langit — seperti siku menghadap bawah.',
      pos:'Di awal suku kata dibaca /k/ lembut, di akhir dibaca /k/ tertahan.',
      strokes:['M12 26 L84 26 L62 82'] },
    { c:'ㄴ', rom:'n', ipa:'/n/', name:'nieun',
      trick:'Ujung lidah menyentuh gusi atas lalu turun — bentuknya persis huruf L.',
      strokes:['M20 24 L20 78 L86 78'] },
    { c:'ㄷ', rom:'d / t', ipa:'/t/', name:'digeut',
      trick:'ㄴ diberi atap. Lidah di tempat yang sama dengan ㄴ, tapi udara ditahan.',
      strokes:['M16 26 L84 26','M16 28 L16 78 L84 78'] },
    { c:'ㄹ', rom:'r / l', ipa:'/ɾ/, /l/', name:'rieul',
      trick:'Lidah bergulung seperti jalur berkelok. Di awal suku kata terdengar seperti R, di akhir seperti L.',
      strokes:['M16 24 L80 24 L80 44','M16 46 L80 46','M16 46 L16 76 L84 76'] },
    { c:'ㅁ', rom:'m', ipa:'/m/', name:'mieum',
      trick:'Mulut yang tertutup rapat — kotak.',
      strokes:['M18 26 L18 78','M18 26 L84 26 L84 78','M18 78 L84 78'] },
    { c:'ㅂ', rom:'b / p', ipa:'/p/', name:'bieup',
      trick:'ㅁ dengan dua tiang menonjol ke atas — mulut yang terbuka sedikit lalu meletup.',
      strokes:['M16 22 L16 80','M84 22 L84 80','M16 52 L84 52','M16 80 L84 80'] },
    { c:'ㅅ', rom:'s', ipa:'/s/', name:'siot',
      trick:'Bentuk gigi seri — udara mendesis lewat celahnya.',
      strokes:['M50 24 L16 80','M52 40 L86 80'] },
    { c:'ㅇ', rom:'– / ng', ipa:'/ŋ/', name:'ieung',
      trick:'Tenggorokan yang terbuka. Di AWAL suku kata ia diam (hanya dudukan vokal); di AKHIR dibaca "ng".',
      strokes:['M50 20 A31 31 0 1 1 49.6 20'] },
    { c:'ㅈ', rom:'j', ipa:'/tɕ/', name:'jieut',
      trick:'ㅅ diberi topi — lidah menempel lebih lebar sehingga jadi bunyi J.',
      strokes:['M14 30 L86 30','M50 30 L20 80','M52 44 L86 80'] },
    { c:'ㅊ', rom:'ch', ipa:'/tɕʰ/', name:'chieut',
      trick:'ㅈ ditambah satu coretan di atas. Coretan tambahan = tambahan embusan udara.',
      strokes:['M50 12 L50 22','M14 36 L86 36','M50 36 L20 84','M52 50 L86 84'] },
    { c:'ㅋ', rom:'k', ipa:'/kʰ/', name:'kieuk',
      trick:'ㄱ ditambah garis = ㄱ yang diembuskan kuat. Letakkan telapak di depan mulut: harus terasa angin.',
      strokes:['M12 26 L84 26 L62 82','M20 54 L74 54'] },
    { c:'ㅌ', rom:'t', ipa:'/tʰ/', name:'tieut',
      trick:'ㄷ ditambah garis tengah = ㄷ yang diembuskan.',
      strokes:['M16 24 L84 24','M16 50 L84 50','M16 24 L16 78 L84 78'] },
    { c:'ㅍ', rom:'p', ipa:'/pʰ/', name:'pieup',
      trick:'ㅂ yang direbahkan = ㅂ yang diembuskan.',
      strokes:['M12 32 L88 32','M32 32 L32 76','M68 32 L68 76','M12 76 L88 76'] },
    { c:'ㅎ', rom:'h', ipa:'/h/', name:'hieut',
      trick:'Topi kecil di atas lingkaran tenggorokan — udara keluar bebas jadi bunyi H.',
      strokes:['M50 10 L50 20','M28 28 L72 28','M50 40 A18 18 0 1 1 49.6 40'] }
  ]
},
{
  id:'jamo-v', name:'Vokal Dasar', native:'모음', count:10,
  note:'Semua vokal dibangun dari tiga lambang: garis tegak (manusia), garis datar (bumi), dan coretan pendek (matahari). Letak coretan menentukan bunyinya.',
  chars: [
    { c:'ㅏ', rom:'a', ipa:'/a/', name:'a',
      trick:'Coretan di KANAN garis tegak = matahari terbit di timur = bunyi terang "a".',
      strokes:['M44 10 L44 90','M44 50 L68 50'] },
    { c:'ㅑ', rom:'ya', ipa:'/ja/', name:'ya',
      trick:'Dua coretan = tambahan bunyi "y" di depan. Berlaku untuk semua vokal.',
      strokes:['M44 10 L44 90','M44 36 L68 36','M44 64 L68 64'] },
    { c:'ㅓ', rom:'eo', ipa:'/ʌ/', name:'eo',
      trick:'Coretan di KIRI = matahari terbenam = bunyi gelap, antara "a" dan "o". Bibir TIDAK dibulatkan.',
      strokes:['M32 50 L56 50','M56 10 L56 90'] },
    { c:'ㅕ', rom:'yeo', ipa:'/jʌ/', name:'yeo',
      trick:'ㅓ dengan dua coretan.',
      strokes:['M32 36 L56 36','M32 64 L56 64','M56 10 L56 90'] },
    { c:'ㅗ', rom:'o', ipa:'/o/', name:'o',
      trick:'Coretan di ATAS garis datar = matahari tinggi. Bibir DIBULATKAN — inilah bedanya dengan ㅓ.',
      strokes:['M50 28 L50 58','M10 58 L90 58'] },
    { c:'ㅛ', rom:'yo', ipa:'/jo/', name:'yo',
      trick:'ㅗ dengan dua coretan.',
      strokes:['M36 28 L36 58','M64 28 L64 58','M10 58 L90 58'] },
    { c:'ㅜ', rom:'u', ipa:'/u/', name:'u',
      trick:'Coretan di BAWAH = matahari tenggelam. Bibir dibulatkan kecil seperti meniup lilin.',
      strokes:['M10 42 L90 42','M50 42 L50 72'] },
    { c:'ㅠ', rom:'yu', ipa:'/ju/', name:'yu',
      trick:'ㅜ dengan dua coretan.',
      strokes:['M10 42 L90 42','M36 42 L36 72','M64 42 L64 72'] },
    { c:'ㅡ', rom:'eu', ipa:'/ɯ/', name:'eu',
      trick:'Garis bumi saja. Bunyinya seperti "e" pada "empat" tetapi bibir MELEBAR, bukan membulat.',
      strokes:['M8 50 L92 50'] },
    { c:'ㅣ', rom:'i', ipa:'/i/', name:'i',
      trick:'Manusia berdiri tegak. Bunyi "i" seperti bahasa Indonesia.',
      strokes:['M50 8 L50 92'] }
  ]
}
],

/* Huruf gabungan — tidak perlu goresan baru, cukup aturan. */
compound: {
  tense: [
    ['ㄲ','kk','ㄱ ditulis dua kali. Bunyi ditegangkan: tenggorokan dikencangkan, tanpa embusan.'],
    ['ㄸ','tt','ㄷ ganda.'], ['ㅃ','pp','ㅂ ganda.'],
    ['ㅆ','ss','ㅅ ganda.'], ['ㅉ','jj','ㅈ ganda.']
  ],
  vowels: [
    ['ㅐ','ae','ㅏ + ㅣ. Bunyi antara "a" dan "e".'],
    ['ㅔ','e','ㅓ + ㅣ. Praktis sama dengan ㅐ di Korea modern.'],
    ['ㅒ','yae','ㅑ + ㅣ'], ['ㅖ','ye','ㅕ + ㅣ'],
    ['ㅘ','wa','ㅗ + ㅏ'], ['ㅚ','oe','ㅗ + ㅣ'], ['ㅙ','wae','ㅗ + ㅐ'],
    ['ㅝ','wo','ㅜ + ㅓ'], ['ㅟ','wi','ㅜ + ㅣ'], ['ㅞ','we','ㅜ + ㅔ'],
    ['ㅢ','ui','ㅡ + ㅣ. Sering dibaca "i" saja kecuali di suku kata pertama.']
  ]
},

/* Aturan menyusun blok suku kata. */
syllable: {
  rules: [
    ['Vokal tegak (ㅏㅓㅣㅐㅔ) → konsonan di KIRI, vokal di KANAN.','가 = ㄱ + ㅏ','Vokal tegak (aeoiaee) → konsonan di KIRI, vokal di KANAN.'],
    ['Vokal datar (ㅗㅜㅡㅛㅠ) → konsonan di ATAS, vokal di BAWAH.','고 = ㄱ + ㅗ','Vokal datar (oueuyoyu) → konsonan di ATAS, vokal di BAWAH.'],
    ['Ada konsonan penutup (batchim) → diletakkan di BAWAH blok.', '각 = ㄱ + ㅏ + ㄱ'],
    ['Suku kata yang dimulai bunyi vokal WAJIB memakai ㅇ sebagai dudukan.','아 = ㅇ + ㅏ (dibaca "a", bukan "nga")','Suku kata yang dimulai bunyi vokal WAJIB memakai ng sebagai dudukan.']
  ],
  demo: [
    { block:'한', parts:['ㅎ','ㅏ','ㄴ'], rom:'han', layout:'kiri-kanan + bawah' },
    { block:'국', parts:['ㄱ','ㅜ','ㄱ'], rom:'guk', layout:'atas-bawah + bawah' },
    { block:'어', parts:['ㅇ','ㅓ','ng'], rom:'eo', layout:'kiri-kanan' },
    { block:'말', parts:['ㅁ','ㅏ','ㄹ'], rom:'mal', layout:'kiri-kanan + bawah' },
    { block:'서', parts:['ㅅ','ㅓ','s'], rom:'seo', layout:'kiri-kanan' },
    { block:'울', parts:['ㅇ','ㅜ','ㄹ'], rom:'ul', layout:'atas-bawah + bawah' }
  ],
  batchim:`Konsonan penutup hanya punya tujuh bunyi akhir: ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ.
Huruf lain yang berada di posisi penutup dibaca menjadi salah satu dari tujuh itu —
misalnya ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ di posisi akhir semuanya dibaca /t/ tertahan.`
},

/* ── Pelafalan ────────────────────────────────────────────────── */
phonology: {
  triples: [
    ['가 / 카 / 까','g — k(h) — kk','Biasa, diembuskan, ditegangkan. Uji dengan kertas di depan mulut: hanya ㅋ yang menggerakkannya.'],
    ['ㄷ / ㅌ / ㄸ','d — t(h) — tt',''],
    ['ㅂ / ㅍ / ㅃ','b — p(h) — pp',''],
    ['ㅈ / ㅊ / ㅉ','j — ch — jj',''],
    ['ㅅ / ㅆ','s — ss','ㅆ lebih tegang dan lebih panjang.']
  ],
  liaison: [
    ['한국어','han-gu-geo','Konsonan penutup pindah ke suku kata berikutnya yang berawal ㅇ.'],
    ['맛있어요','ma-si-sseo-yo','ㅅ penutup pindah dan berbunyi penuh.'],
    ['좋아요','jo-a-yo','ㅎ luluh dan hampir hilang di antara vokal.'],
    ['입니다','im-ni-da','ㅂ berubah jadi /m/ di depan ㄴ — asimilasi wajib.'],
    ['같이','ga-chi','ㅌ + ㅣ berubah jadi "chi" — palatalisasi.']
  ],
  notes: [
    'Bahasa Korea tidak mengenal tekanan kata seperti bahasa Inggris; iramanya rata.',
    'Konsonan penutup TIDAK dilepaskan: 학 dibaca "hak" dengan mulut berhenti, bukan "ha-ka".',
    'Perbedaan ㅓ (bibir rileks) dan ㅗ (bibir bulat) menentukan makna: 서울 Seoul ≠ 소울.'
  ]
},

/* ── Frasa inti ───────────────────────────────────────────────── */
phrases: [
  { g:'Sapaan', items:[
    ['안녕하세요','annyeonghaseyo','Halo (sopan, dipakai kapan saja)'],
    ['안녕히 가세요','annyeonghi gaseyo','Selamat jalan (kepada yang pergi)'],
    ['안녕히 계세요','annyeonghi gyeseyo','Selamat tinggal (kepada yang tinggal)'],
    ['반갑습니다','bangapseumnida','Senang berjumpa'],
    ['오랜만이에요','oraenmanieyo','Lama tak jumpa']
  ]},
  { g:'Sopan santun', items:[
    ['감사합니다','gamsahamnida','Terima kasih (formal)'],
    ['고마워요','gomawoyo','Terima kasih (santai)'],
    ['죄송합니다','joesonghamnida','Maaf (formal)'],
    ['괜찮아요','gwaenchanayo','Tidak apa-apa'],
    ['실례합니다','sillyehamnida','Permisi']
  ]},
  { g:'Bertahan hidup', items:[
    ['얼마예요?','eolmayeyo?','Berapa harganya?'],
    ['이거 주세요','igeo juseyo','Tolong yang ini'],
    ['화장실이 어디예요?','hwajangsiri eodiyeyo?','Di mana toilet?'],
    ['도와주세요','dowajuseyo','Tolong saya'],
    ['한국어를 조금 해요','hangugeoreul jogeum haeyo','Saya bisa bahasa Korea sedikit'],
    ['천천히 말해 주세요','cheoncheonhi malhae juseyo','Tolong bicara pelan-pelan'],
    ['이해 못 했어요','ihae mot haesseoyo','Saya tidak mengerti']
  ]},
  { g:'Perkenalan', items:[
    ['제 이름은 ○○이에요','je ireumeun ○○ieyo','Nama saya ○○'],
    ['인도네시아에서 왔어요','indonesiaeseo wasseoyo','Saya dari Indonesia'],
    ['학생이에요','haksaengieyo','Saya pelajar'],
    ['만나서 반가워요','mannaseo bangawoyo','Senang bertemu denganmu']
  ]}
],

/* ── Angka: dua sistem ────────────────────────────────────────── */
numbers: {
  note:'Korea memakai DUA sistem angka. Salah pilih sistem adalah kesalahan paling sering pemula.',
  sino: { title:'Sino-Korea (serapan Tionghoa)',
    use:'uang, tanggal, bulan, menit, nomor telepon, alamat, angka di atas 100',
    list:[['일','il','1'],['이','i','2'],['삼','sam','3'],['사','sa','4'],['오','o','5'],
          ['육','yuk','6'],['칠','chil','7'],['팔','pal','8'],['구','gu','9'],['십','sip','10'],
          ['백','baek','100'],['천','cheon','1.000'],['만','man','10.000']] },
  native: { title:'Asli Korea', use:'menghitung benda, umur, jam',
    list:[['하나','hana','1'],['둘','dul','2'],['셋','set','3'],['넷','net','4'],['다섯','daseot','5'],
          ['여섯','yeoseot','6'],['일곱','ilgop','7'],['여덟','yeodeol','8'],['아홉','ahop','9'],['열','yeol','10']] },
  clock:'Jam memakai angka ASLI, menit memakai angka SINO: 세 시 삼십 분 = jam 3 lewat 30 menit.'
},

/* ── Tata bahasa dasar ────────────────────────────────────────── */
grammar: [
{ id:'ko-g1', level:'A1', title:'Urutan Kata: S-O-V', titleId:'Kata Kerja di Akhir',
  why:'Bahasa Indonesia S-P-O, Korea S-O-V. Kata kerja SELALU di akhir kalimat — ini perubahan cara berpikir, bukan sekadar hafalan.',
  form:'Subjek + Objek + Kata Kerja\n저는 밥을 먹어요 = Saya nasi makan',
  notes:['Keterangan waktu dan tempat diletakkan sebelum kata kerja.',
         'Karena kata kerja di akhir, makna kalimat baru jelas di detik terakhir — biasakan mendengar sampai habis.',
         'Subjek sering dihilangkan bila sudah jelas dari konteks.'],
  ex:[['저는 학생이에요.','Saya seorang pelajar.','jeoneun haksaengieyo.'],
      ['저는 커피를 마셔요.','Saya minum kopi.','jeoneun keopireul masyeoyo.'],
      ['내일 학교에 가요.','Besok (saya) pergi ke sekolah.','naeil hakgyoe gayo.']],
  traps:[['저는 먹어요 밥을.','저는 밥을 먹어요.','Kata kerja tidak boleh di tengah.']],
  drills:[
    { t:'mcq', q:'Susunan yang benar untuk "Saya membaca buku":', opts:['저는 읽어요 책을','저는 책을 읽어요','책을 저는 읽어요','읽어요 저는 책을'], a:1 },
    { t:'mcq', q:'Di mana posisi kata kerja dalam kalimat Korea?', opts:['awal','tengah','akhir','bebas'], a:2 }
  ]},
{ id:'ko-g2', level:'A1', title:'Topic vs Subject: 은/는 dan 이/가', titleId:'Partikel Topik & Subjek',
  why:'Partikel adalah tulang punggung bahasa Korea dan tidak ada padanannya di bahasa Indonesia.',
  form:'은 (setelah konsonan) / 는 (setelah vokal) = penanda TOPIK\n이 (setelah konsonan) / 가 (setelah vokal) = penanda SUBJEK',
  notes:['은/는 memperkenalkan atau membandingkan topik: "Kalau soal saya, …".',
         '이/가 menunjuk pelaku yang baru diperkenalkan atau yang ditegaskan.',
         'Aturan praktis pemula: pakai 은/는 untuk diri sendiri dan topik pembicaraan.'],
  ex:[['저는 인도네시아 사람이에요.','Saya orang Indonesia.','jeoneun indonesia saramieyo.'],
      ['날씨가 좋아요.','Cuacanya bagus.','nalssiga johayo.'],
      ['이것은 책이에요.','Ini adalah buku.','igeoteun chaekieyo.']],
  traps:[['저가 학생이에요.','저는 학생이에요.','저 diikuti 는, bukan 가.']],
  drills:[
    { t:'mcq', q:'저 + partikel topik = ', opts:['저가','저는','저을','저이'], a:1 },
    { t:'mcq', q:'책 (berakhiran konsonan) + partikel subjek = ', opts:['책가','책이','책는','책을'], a:1 }
  ]},
{ id:'ko-g3', level:'A1', title:'Tingkat Kesopanan', titleId:'Ragam Bahasa',
  why:'Salah tingkat kesopanan di Korea jauh lebih fatal daripada salah tata bahasa.',
  form:'-습니다/ㅂ니다 = formal resmi\n-아요/어요 = sopan sehari-hari (paling aman)\n-아/어 = akrab (hanya kepada teman dekat & yang lebih muda)',
  notes:['Pemula cukup menguasai bentuk -아요/어요; dipakai di 90% situasi.',
         'Bentuk formal dipakai di berita, presentasi, dan kepada atasan.',
         'Jangan memakai bentuk akrab kepada orang yang baru dikenal, sekalipun seumur.'],
  ex:[['감사합니다.','Terima kasih. (formal)','gamsahapnida.'],
      ['고마워요.','Terima kasih. (sopan)','gomawoyo.'],
      ['고마워.','Makasih. (akrab)','gomawo.']],
  traps:[['Memakai 반말 kepada orang asing.','Pakai -아요/어요.','Dianggap kasar meski niatnya ramah.']],
  drills:[
    { t:'mcq', q:'Bentuk paling aman bagi pemula:', opts:['-습니다','-아요/어요','-아/어','-지'], a:1 }
  ]},
{ id:'ko-g4', level:'A2', title:'Partikel Objek 을/를 dan Tempat 에/에서', titleId:'Partikel Objek & Tempat',
  why:'Tanpa partikel yang tepat, kalimat Korea terdengar seperti daftar kata.',
  form:'을 (setelah konsonan) / 를 (setelah vokal) = objek langsung\n에 = arah atau waktu (ke, pada)\n에서 = tempat terjadinya aksi (di)',
  notes:['에 untuk tujuan dan keberadaan; 에서 untuk tempat kegiatan berlangsung.','학교에 가요 = pergi KE sekolah. 학교에서 공부해요 = belajar DI sekolah.','e untuk tujuan dan keberadaan; eseo untuk tempat kegiatan berlangsung.'],
  ex:[['빵을 먹어요.','Makan roti.','ppangeul meokeoyo.'],
      ['집에 가요.','Pulang ke rumah.','jipe gayo.'],
      ['카페에서 일해요.','Bekerja di kafe.','kapeeseo ilhaeyo.']],
  traps:[['집에서 가요.','집에 가요.','Kata kerja gerak memakai 에.']],
  drills:[
    { t:'mcq', q:'"Belajar di perpustakaan" memakai partikel', opts:['에','에서','을','는'], a:1 },
    { t:'mcq', q:'커피 + partikel objek = ', opts:['커피을','커피를','커피가','커피에'], a:1 }
  ]}
],

/* ── Kosakata inti ────────────────────────────────────────────── */
vocab: [
{ id:'ko-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['사람','saram','orang'],['물','mul','air'],['밥','bap','nasi / makanan'],
    ['집','jip','rumah'],['학교','hakgyo','sekolah'],['친구','chingu','teman'],
    ['시간','sigan','waktu'],['돈','don','uang'],['일','il','pekerjaan / hari'],
    ['오늘','oneul','hari ini'],['내일','naeil','besok'],['어제','eoje','kemarin'],
    ['지금','jigeum','sekarang'],['여기','yeogi','di sini'],['거기','geogi','di situ'],
    ['이것','igeot','ini'],['그것','geugeot','itu'],['무엇','mueot','apa'],
    ['누구','nugu','siapa'],['어디','eodi','di mana'],['언제','eonje','kapan'],
    ['왜','wae','mengapa'],['어떻게','eotteoke','bagaimana'],['얼마','eolma','berapa'],
    ['가다','gada','pergi'],['오다','oda','datang'],['먹다','meokda','makan'],
    ['마시다','masida','minum'],['보다','boda','melihat'],['듣다','deutda','mendengar'],
    ['하다','hada','melakukan'],['있다','itda','ada / punya'],['없다','eopda','tidak ada'],
    ['좋다','jota','bagus'],['크다','keuda','besar'],['작다','jakda','kecil'],
    ['많다','manta','banyak'],['적다','jeokda','sedikit'],['새','sae','baru'],
    ['맛있다','masitda','enak'],['비싸다','bissada','mahal'],['싸다','ssada','murah']
  ]}
],

/* ── Ujian TOPIK ──────────────────────────────────────────────── */
exam: {
  id:'topik', name:'TOPIK', full:'Test of Proficiency in Korean (한국어능력시험)',
  tagline:'Standar resmi pemerintah Korea untuk kuliah, kerja, dan visa.',
  overview:{
    tingkat:'TOPIK I mencakup level 1–2; TOPIK II mencakup level 3–6',
    skor:'TOPIK I maksimum 200 poin (Listening 100 + Reading 100). TOPIK II maksimum 300 poin (Listening 100 + Writing 100 + Reading 100).',
    penilaian:'Tidak ada nilai minimum per bagian — kelemahan di satu bagian bisa ditutup bagian lain.',
    hasil:'Level ditentukan dari TOTAL skor, bukan lulus/tidak lulus.'
  },
  levels:[
    ['Level 1','TOPIK I · ≥80 dari 200','Bertahan pada situasi paling dasar: memperkenalkan diri, memesan makanan, ±800 kosakata.'],
    ['Level 2','TOPIK I · ≥140 dari 200','Urusan sehari-hari: kantor pos, bank, telepon; ±1.500–2.000 kosakata.'],
    ['Level 3','TOPIK II · ≥120 dari 300','Kehidupan sehari-hari tanpa kesulitan besar; mampu memakai ragam formal dan santai.'],
    ['Level 4','TOPIK II · ≥150 dari 300','Mampu mengikuti berita dan bekerja pada tugas umum; syarat kelulusan dan jurusan kompetitif (Level 3 umumnya cukup untuk masuk).'],
    ['Level 5','TOPIK II · ≥190 dari 300','Mampu berfungsi di bidang profesional dan akademik.'],
    ['Level 6','TOPIK II · ≥230 dari 300','Nyaris setara penutur terdidik pada hampir semua bidang.']
  ],
  sections:[
    { name:'Listening (듣기)', items:'TOPIK I 30 soal · TOPIK II 50 soal', note:'Pilihan ganda; audio diputar sekali (sebagian soal awal dua kali di TOPIK I).' },
    { name:'Reading (읽기)', items:'TOPIK I 40 soal · TOPIK II 50 soal', note:'Iklan, jadwal, artikel, esai — dari sangat pendek sampai panjang.' },
    { name:'Writing (쓰기)', items:'TOPIK II saja · 4 soal', note:'Dua isian kalimat, satu karangan 200–300 huruf, satu esai 600–700 huruf.' }
  ],
  tactics:[
    { title:'Menulis: hitung huruf, bukan kata', budget:'50 menit',
      steps:['Esai panjang menuntut 600–700 huruf Korea (bukan kata) — latih menghitungnya di kertas.',
             'Sisakan 30 menit khusus untuk esai panjang; dua soal isian cukup 5 menit.',
             'Pakai ragam tulisan -ㄴ다/-는다, bukan -아요/어요.'],
      why:'Peserta Indonesia paling sering kehabisan waktu di soal terakhir yang justru bernilai terbesar.' },
    { title:'Reading: baca soal dulu, cari kata kunci', budget:'70 menit',
      steps:['Soal disusun dari mudah ke sulit; kerjakan berurutan tetapi jangan menempel.',
             'Untuk soal iklan/tabel, cari angka dan nama — jawabannya hampir selalu di situ.',
             'Untuk soal "urutkan kalimat", cari kalimat yang tidak punya kata rujukan (이, 그, 저) — itu kalimat pertama.'],
      why:'Reading TOPIK II 50 soal dalam 70 menit; strategi urutan menyelamatkan 10 menit.' },
    { title:'Listening: tulis pilihan yang gugur', budget:'—',
      steps:['Coret pilihan yang salah saat audio berjalan, jangan menunggu selesai.',
             'Perhatikan bentuk akhir kalimat — itu menandai maksud penutur (mengajak, menolak, menyarankan).'],
      why:'Audio hanya sekali; mencoret lebih cepat daripada mengingat.' }
  ],
  sources:[
    ['TOPIK — situs resmi (NIIED)','https://www.topik.go.kr'],
    ['Struktur & skor TOPIK I / II','https://www.topik.go.kr/TWGUID/TWGUID0010.do']
  ]
}
};
