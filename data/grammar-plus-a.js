/* ── Topik tata bahasa tambahan: A1 & A2 ──────────────────────────
   Berkas TERPISAH dari grammar-a1.js / grammar-a2.js supaya berkas
   aslinya tidak perlu disentuh dan seluruh penambahan bisa dibatalkan
   dengan menghapus satu berkas. Digabung di js/data.js.

   Yang ditambahkan bukan topik acak. Ini lubang yang benar-benar ada
   di daftar lama, dipilih karena tiap satunya adalah tempat penutur
   Indonesia rutin tergelincir — dan tidak satu pun terwakili oleh 120
   topik sebelumnya:

   · -ed vs -ing (bored / boring) — bahasa kita tidak membedakan "saya
     bosan" dan "membosankan" lewat bentuk kata sifatnya;
   · klausa waktu masa depan ("when I WILL arrive") — kesalahan paling
     awet karena logikanya terasa benar;
   · pertanyaan tak langsung ("Do you know where IS the station") —
     urutan katanya balik lagi padahal seharusnya tidak;
   · kata ganti tak tentu, refleksif, both/either/neither, another/other
     — semuanya tidak punya padanan satu-lawan-satu di bahasa Indonesia.

   Bentuknya sama persis dengan berkas grammar lama:
   { id, level, title, titleId, why, form, notes[], ex[[en,id]],
     traps[[salah,benar,alasan]], drills[] }                          */

export const PLUS_A1 = [

{
  id: 'a1-21', level: 'A1',
  title: 'have got / has got',
  titleId: 'Punya: have got',
  why: 'Cara paling umum menyatakan kepemilikan dalam percakapan Inggris British — dan bentuk tanyanya TIDAK memakai do, berbeda dengan "have" biasa. Di sinilah pemelajar Indonesia hampir selalu salah.',
  form: 'I / you / we / they + have got  ·  he / she / it + has got',
  notes: [
    'Artinya sama dengan "have", tapi terasa lebih akrab dan lisan.',
    'Bentuk tanya membalik have: "Have you got…?" — BUKAN "Do you have got…?".',
    'Bentuk singkatnya sangat lazim: I\'ve got, she\'s got, we haven\'t got.',
    'Untuk kebiasaan tidak dipakai: "I have breakfast at seven" tidak bisa jadi "have got".',
  ],
  ex: [
    ['I have got two brothers.', 'Saya punya dua saudara laki-laki.'],
    ['She has got a new phone.', 'Dia punya telepon baru.'],
    ['Have you got a pen?', 'Kamu punya pulpen?'],
    ["We haven't got much time.", 'Kita tidak punya banyak waktu.'],
  ],
  traps: [
    ['Do you have got a car?', 'Have you got a car?', 'have got sudah jadi kata bantunya sendiri, tidak perlu do.'],
    ['She have got a sister.', 'She has got a sister.', 'Orang ketiga tunggal memakai has.'],
    ['I have got breakfast at 7.', 'I have breakfast at 7.', 'Untuk kebiasaan pakai have biasa, bukan have got.'],
  ],
  drills: [
    { t: 'mcq', q: '___ you got a minute?', opts: ['Do', 'Have', 'Are', 'Does'], a: 1 },
    { t: 'mcq', q: 'He ___ got three children.', opts: ['have', 'has', 'is', 'does'], a: 1 },
    { t: 'mcq', q: 'Which sentence is correct?', opts: ['Do you have got time?', 'You have got time?', 'Have you got time?', 'Has you got time?'], a: 2 },
    { t: 'fill', q: 'They ___ got a big house. (positif)', a: ['have', "'ve", 'have got'] },
    { t: 'trans', id: 'Saya tidak punya uang.', a: ["I haven't got any money.", "I have not got any money.", "I haven't got money."] },
  ],
},

{
  id: 'a1-22', level: 'A1',
  title: 'like / love / hate + V-ing',
  titleId: 'Suka & benci + kata kerja',
  why: 'Sesudah like, love, enjoy, hate, kata kerja berikutnya berakhiran -ing. Bahasa Indonesia memakai bentuk yang sama untuk semua posisi ("suka membaca"), jadi bentuk -ing ini harus dihafal khusus.',
  form: 'like / love / enjoy / hate / don\'t mind + V-ing',
  notes: [
    'enjoy SELALU diikuti -ing, tidak pernah to.',
    'like, love, hate boleh diikuti to + V juga, artinya nyaris sama.',
    'Untuk menyatakan tidak suka: "I don\'t like waiting."',
    'would like berbeda: selalu diikuti to + V — "I would like to go."',
  ],
  ex: [
    ['I like reading before bed.', 'Saya suka membaca sebelum tidur.'],
    ['She enjoys cooking on weekends.', 'Dia senang memasak di akhir pekan.'],
    ["They don't like waiting in line.", 'Mereka tidak suka mengantre.'],
    ['We love travelling by train.', 'Kami suka bepergian dengan kereta.'],
  ],
  traps: [
    ['I enjoy to swim.', 'I enjoy swimming.', 'enjoy tidak pernah diikuti to.'],
    ['She like cooking.', 'She likes cooking.', 'Orang ketiga tunggal butuh -s.'],
    ['I would like going now.', 'I would like to go now.', 'would like memakai to + V, bukan -ing.'],
  ],
  drills: [
    { t: 'mcq', q: 'I enjoy ___ to music.', opts: ['listen', 'to listen', 'listening', 'listens'], a: 2 },
    { t: 'mcq', q: 'She ___ getting up early.', opts: ["don't like", "doesn't like", 'not like', "doesn't likes"], a: 1 },
    { t: 'mcq', q: 'I would like ___ a coffee, please.', opts: ['having', 'have', 'to have', 'to having'], a: 2 },
    { t: 'fill', q: 'They love ___ (play) football on Sundays.', a: ['playing'] },
    { t: 'trans', id: 'Saya tidak suka menunggu.', a: ["I don't like waiting.", "I do not like waiting.", "I don't like to wait."] },
  ],
},

{
  id: 'a1-23', level: 'A1',
  title: 'Possessive Pronouns: mine / yours / his',
  titleId: 'Kata ganti milik',
  why: 'Beda antara my (my book) dan mine (it is mine) sering tertukar, karena bahasa Indonesia memakai "-ku / -mu / punyaku" tanpa perubahan sebesar itu. Salah pakai membuat kalimatnya langsung terdengar keliru.',
  form: 'my → mine · your → yours · his → his · her → hers · our → ours · their → theirs',
  notes: [
    'Kata ganti milik BERDIRI SENDIRI — tidak pernah diikuti kata benda.',
    'my book (my + benda) vs This book is mine (mine sendirian).',
    'its tidak punya bentuk berdiri sendiri; hindari "it\'s" yang artinya "it is".',
    'Untuk orang: "a friend of mine" lebih lazim daripada "my one friend".',
  ],
  ex: [
    ['This bag is mine.', 'Tas ini milik saya.'],
    ['Is this pen yours?', 'Apakah pulpen ini milikmu?'],
    ['Their car is red; ours is blue.', 'Mobil mereka merah; punya kami biru.'],
    ['She is a friend of mine.', 'Dia salah satu teman saya.'],
  ],
  traps: [
    ['This is mine book.', 'This is my book.', 'mine tidak boleh diikuti kata benda.'],
    ['That car is my.', 'That car is mine.', 'Berdiri sendiri harus memakai bentuk mine.'],
    ["The dog hurt it's leg.", 'The dog hurt its leg.', "it's berarti it is; milik memakai its."],
  ],
  drills: [
    { t: 'mcq', q: 'That umbrella is ___.', opts: ['her', 'hers', 'her\'s', 'she'], a: 1 },
    { t: 'mcq', q: 'Is this ___ jacket?', opts: ['yours', 'your', 'you', 'your\'s'], a: 1 },
    { t: 'mcq', q: 'Our house is small but ___ is big.', opts: ['their', 'theirs', 'them', 'they'], a: 1 },
    { t: 'fill', q: 'This phone is not mine, it is ___. (dia laki-laki)', a: ['his'] },
    { t: 'trans', id: 'Buku ini milik kami.', a: ['This book is ours.'] },
  ],
},

{
  id: 'a1-24', level: 'A1',
  title: 'Prepositions of Movement',
  titleId: 'Kata depan arah gerak',
  why: 'Daftar lama sudah punya kata depan waktu dan tempat, tapi bukan arah gerak. Bahasa Indonesia memakai "ke" untuk hampir semuanya, sedangkan Inggris membedakan to, into, onto, through, across — dan salah pilih mengubah gambar yang terbayang.',
  form: 'to (tujuan) · into (masuk ke dalam) · onto (naik ke atas) · through (menembus) · across (menyeberang)',
  notes: [
    'to menandai TUJUAN: go to school, walk to the station.',
    'into menekankan masuk ke dalam ruang: walk into the room.',
    'through berarti menembus dari satu sisi ke sisi lain: through the tunnel.',
    'Perkecualian penting: "go home" tanpa to — bukan "go to home".',
  ],
  ex: [
    ['We walked to the beach.', 'Kami berjalan ke pantai.'],
    ['She came into the room quietly.', 'Dia masuk ke ruangan dengan pelan.'],
    ['The train goes through a long tunnel.', 'Keretanya melewati terowongan panjang.'],
    ['He ran across the street.', 'Dia berlari menyeberangi jalan.'],
  ],
  traps: [
    ['I go to home at six.', 'I go home at six.', 'home tidak memakai to.'],
    ['She walked in the room and sat down.', 'She walked into the room and sat down.', 'Gerak masuk memakai into, bukan in.'],
    ['We drove trough the city.', 'We drove through the city.', 'Ejaannya through.'],
  ],
  drills: [
    { t: 'mcq', q: 'The cat jumped ___ the table.', opts: ['onto', 'at', 'of', 'in'], a: 0 },
    { t: 'mcq', q: 'I usually go ___ every day after work.', opts: ['to home', 'home', 'at home', 'into home'], a: 1 },
    { t: 'mcq', q: 'They swam ___ the river.', opts: ['across', 'on', 'above', 'at'], a: 0 },
    { t: 'fill', q: 'Please come ___ the office, the door is open.', a: ['into', 'in'] },
    { t: 'trans', id: 'Kami berjalan ke stasiun.', a: ['We walked to the station.', 'We walk to the station.'] },
  ],
},

{
  id: 'a1-25', level: 'A1',
  title: 'Telling Time, Days & Dates',
  titleId: 'Jam, hari & tanggal',
  why: 'Menyebut jam dan tanggal punya pola tetap yang tidak bisa diterjemahkan kata per kata dari bahasa Indonesia — termasuk kata depannya (at/on/in) yang berbeda untuk jam, hari, dan bulan.',
  form: 'at + jam · on + hari/tanggal · in + bulan/tahun/musim',
  notes: [
    'at seven o\'clock · on Monday · in July · in 2026.',
    'Menit: "half past seven" (7.30), "a quarter to eight" (7.45).',
    'Tanggal dibaca dengan bilangan urutan: "the fifth of May" atau "May the fifth".',
    'Hari dan bulan SELALU huruf besar: Monday, July — berbeda dengan bahasa Indonesia.',
  ],
  ex: [
    ['The meeting starts at nine o\'clock.', 'Rapatnya mulai pukul sembilan.'],
    ['I was born on the third of June.', 'Saya lahir pada tanggal tiga Juni.'],
    ['We travel in December every year.', 'Kami bepergian pada bulan Desember tiap tahun.'],
    ['The shop opens at half past eight.', 'Tokonya buka pukul setengah sembilan.'],
  ],
  traps: [
    ['I will call you in Monday.', 'I will call you on Monday.', 'Hari memakai on.'],
    ['She was born in 5 May.', 'She was born on 5 May.', 'Tanggal memakai on, bukan in.'],
    ['We meet at july.', 'We meet in July.', 'Bulan memakai in, dan ditulis huruf besar.'],
  ],
  drills: [
    { t: 'mcq', q: 'The class begins ___ eight in the morning.', opts: ['on', 'at', 'in', 'to'], a: 1 },
    { t: 'mcq', q: 'My birthday is ___ September.', opts: ['at', 'on', 'in', 'by'], a: 2 },
    { t: 'mcq', q: 'We have a test ___ Friday.', opts: ['in', 'at', 'on', 'to'], a: 2 },
    { t: 'fill', q: 'It is 7.30 now — it is half ___ seven.', a: ['past'] },
    { t: 'trans', id: 'Rapatnya hari Senin pukul sepuluh.', a: ['The meeting is on Monday at ten.', 'The meeting is at ten on Monday.'] },
  ],
},

{
  id: 'a1-26', level: 'A1',
  title: 'Basic Word Order',
  titleId: 'Urutan kata dasar',
  why: 'Inggris jauh lebih kaku daripada bahasa Indonesia soal urutan. Objek tidak boleh disisipkan antara kata kerja dan kata keterangan, dan keterangan waktu punya tempatnya sendiri. Ini sumber kalimat yang "kata-katanya benar semua tapi terasa aneh".',
  form: 'Subjek + Kata kerja + Objek + Cara + Tempat + Waktu',
  notes: [
    'Urutan bakunya: siapa — berbuat apa — kepada apa — bagaimana — di mana — kapan.',
    'Kata keterangan TIDAK boleh menyela kata kerja dan objeknya.',
    'Keterangan waktu boleh dipindah ke depan kalimat untuk penekanan.',
    'Kata keterangan frekuensi (always, often) diletakkan sebelum kata kerja utama.',
  ],
  ex: [
    ['She reads books quietly at home every night.', 'Dia membaca buku dengan tenang di rumah setiap malam.'],
    ['I often drink coffee in the morning.', 'Saya sering minum kopi di pagi hari.'],
    ['Yesterday we finished the work quickly.', 'Kemarin kami menyelesaikan pekerjaannya dengan cepat.'],
  ],
  traps: [
    ['I like very much this song.', 'I like this song very much.', 'Keterangan tidak boleh menyela kata kerja dan objeknya.'],
    ['She speaks well English.', 'She speaks English well.', 'Objek lebih dulu, baru cara.'],
    ['I go always to the market.', 'I always go to the market.', 'always diletakkan sebelum kata kerja utama.'],
  ],
  drills: [
    { t: 'mcq', q: 'Which sentence is correct?', opts: ['He plays well football.', 'He plays football well.', 'He well plays football.', 'Well he plays football.'], a: 1 },
    { t: 'mcq', q: 'Choose the correct order.', opts: ['I usually am late.', 'I am usually late.', 'Usually I am late for.', 'I am late usually for.'], a: 1 },
    /* `words` WAJIB ada untuk butir 'order' — js/quiz.js membangun bank
       kata dari larik ini. Tanpa larik itu latihan seluruh unit berhenti
       di tengah jalan dengan layar kosong. */
    { t: 'order', q: 'Susun: quietly / she / the letter / read',
      words: ['She', 'read', 'the letter', 'quietly.'],
      a: 'She read the letter quietly.' },
    { t: 'fill', q: 'Perbaiki: "They like very much the film." → They like the film ___ ___.', a: ['very much'] },
    { t: 'trans', id: 'Saya sering makan siang di kantor.', a: ['I often have lunch at the office.', 'I often eat lunch at the office.'] },
  ],
},

];

export const PLUS_A2 = [

{
  id: 'a2-21', level: 'A2',
  title: '-ed vs -ing Adjectives',
  titleId: 'Sifat -ed vs -ing',
  why: 'Kesalahan paling khas penutur Indonesia. "Saya bosan" jadi "I am boring" — yang artinya "saya membosankan". Bahasa kita tidak membedakan perasaan dan penyebabnya lewat bentuk kata sifat, Inggris membedakannya mutlak.',
  form: '-ed = perasaan orangnya  ·  -ing = sifat penyebabnya',
  notes: [
    'I am bored = saya merasa bosan. I am boring = saya orang yang membosankan.',
    'Yang berakhiran -ed hampir selalu untuk manusia; -ing untuk benda, film, pekerjaan, keadaan.',
    'Berlaku untuk banyak pasangan: interested/interesting, tired/tiring, surprised/surprising, confused/confusing, excited/exciting.',
    'Uji cepat: kalau bisa diganti "membuat orang lain…", pakai -ing.',
  ],
  ex: [
    ['I was bored during the lecture.', 'Saya bosan selama kuliahnya.'],
    ['The lecture was boring.', 'Kuliahnya membosankan.'],
    ['She is interested in history.', 'Dia tertarik pada sejarah.'],
    ['The result was surprising.', 'Hasilnya mengejutkan.'],
  ],
  traps: [
    ['I am boring in this class.', 'I am bored in this class.', 'boring berarti kamu yang membosankan orang lain.'],
    ['The trip was very tired.', 'The trip was very tiring.', 'Perjalanannya yang melelahkan, bukan merasa lelah.'],
    ['He is very interesting in football.', 'He is very interested in football.', 'Orang yang tertarik memakai -ed.'],
  ],
  drills: [
    { t: 'mcq', q: 'The film was so ___ that I fell asleep.', opts: ['bored', 'boring', 'bore', 'boredom'], a: 1 },
    { t: 'mcq', q: 'After the long walk we were ___.', opts: ['tiring', 'tire', 'tired', 'tires'], a: 2 },
    { t: 'mcq', q: 'Her explanation was ___ — nobody understood.', opts: ['confused', 'confusing', 'confuse', 'confusion'], a: 1 },
    { t: 'fill', q: 'I am really ___ (excite) about the trip.', a: ['excited'] },
    { t: 'trans', id: 'Pekerjaannya menarik, tapi saya lelah.', a: ['The job is interesting, but I am tired.', "The work is interesting, but I'm tired."] },
  ],
},

{
  id: 'a2-22', level: 'A2',
  title: 'Reflexive Pronouns',
  titleId: 'Kata ganti diri sendiri',
  why: 'Bahasa Indonesia cukup memakai "sendiri" untuk semua orang, sedangkan Inggris punya delapan bentuk yang harus cocok dengan subjeknya. Sering juga dipakai berlebihan di tempat yang seharusnya tidak butuh.',
  form: 'myself · yourself · himself · herself · itself · ourselves · yourselves · themselves',
  notes: [
    'Dipakai kalau pelaku dan sasarannya orang yang sama: "I hurt myself".',
    '"by myself" berarti sendirian atau tanpa bantuan.',
    'Beberapa kata kerja TIDAK memakainya walau di bahasa Indonesia terasa perlu: wash, shave, dress, feel, relax, concentrate.',
    'Bisa dipakai untuk menegaskan: "The manager himself called me."',
  ],
  ex: [
    ['I cut myself while cooking.', 'Saya teriris saat memasak.'],
    ['She lives by herself.', 'Dia tinggal sendirian.'],
    ['They enjoyed themselves at the party.', 'Mereka menikmati pestanya.'],
    ['The director himself opened the meeting.', 'Direkturnya sendiri membuka rapat itu.'],
  ],
  traps: [
    ['I feel myself tired.', 'I feel tired.', 'feel tidak memakai kata ganti diri.'],
    ['She washed herself the dishes.', 'She washed the dishes herself.', 'Untuk menegaskan, letaknya di akhir.'],
    ['We enjoyed ourself.', 'We enjoyed ourselves.', 'Subjek jamak memakai -selves.'],
  ],
  drills: [
    { t: 'mcq', q: 'He taught ___ to play the guitar.', opts: ['him', 'himself', 'his', 'themselves'], a: 1 },
    { t: 'mcq', q: 'Which is correct?', opts: ['I feel myself sick.', 'I feel sick.', 'I feel me sick.', 'I am feeling myself sick.'], a: 1 },
    { t: 'mcq', q: 'Did you paint the room ___?', opts: ['yourself', 'yourselves', 'you', 'your'], a: 0 },
    { t: 'fill', q: 'The children made breakfast by ___.', a: ['themselves'] },
    { t: 'trans', id: 'Saya tinggal sendirian.', a: ['I live by myself.', 'I live alone.', 'I live on my own.'] },
  ],
},

{
  id: 'a2-23', level: 'A2',
  title: 'Indefinite Pronouns',
  titleId: 'Kata ganti tak tentu',
  why: 'something, anyone, nowhere, everybody — gabungan some/any/no/every dengan thing/one/body/where. Aturan positif-negatif-tanyanya sama seperti some/any, dan semuanya dianggap TUNGGAL walau terasa jamak.',
  form: 'some / any / no / every  +  thing / one / body / where',
  notes: [
    'some- untuk kalimat positif, any- untuk negatif dan pertanyaan.',
    'no- sudah bermakna negatif, jadi kata kerjanya TIDAK ikut dinegatifkan.',
    'Semuanya TUNGGAL: "Everybody is here", bukan "are".',
    'Kata sifat diletakkan SESUDAHNYA: "something new", bukan "new something".',
  ],
  ex: [
    ['I heard something strange.', 'Saya mendengar sesuatu yang aneh.'],
    ["I didn't see anyone there.", 'Saya tidak melihat siapa pun di sana.'],
    ['Nobody knows the answer.', 'Tidak ada yang tahu jawabannya.'],
    ['Everything is ready.', 'Semuanya sudah siap.'],
  ],
  traps: [
    ["I didn't see nobody.", "I didn't see anybody.", 'Dua negatif dalam satu kalimat tidak dipakai.'],
    ['Everybody are waiting.', 'Everybody is waiting.', 'Kata ganti tak tentu selalu tunggal.'],
    ['I want new something.', 'I want something new.', 'Kata sifat diletakkan sesudahnya.'],
  ],
  drills: [
    { t: 'mcq', q: 'There is ___ in the box; it is empty.', opts: ['something', 'anything', 'nothing', 'everything'], a: 2 },
    { t: 'mcq', q: 'Did you meet ___ at the station?', opts: ['someone', 'anyone', 'no one', 'everyone'], a: 1 },
    { t: 'mcq', q: 'Everyone ___ already arrived.', opts: ['have', 'has', 'are', 'were'], a: 1 },
    { t: 'fill', q: 'I looked ___ but I could not find my keys. (di mana-mana)', a: ['everywhere'] },
    { t: 'trans', id: 'Tidak ada yang menelepon saya kemarin.', a: ['Nobody called me yesterday.', 'No one called me yesterday.'] },
  ],
},

{
  id: 'a2-24', level: 'A2',
  title: 'both / either / neither / all / none',
  titleId: 'Dua atau semua',
  why: 'Inggris membedakan DUA benda (both, either, neither) dari LEBIH DARI DUA (all, any, none). Bahasa Indonesia memakai "kedua-duanya" dan "semua" tanpa batas dua itu, jadi pilihan katanya sering meleset.',
  form: 'both / either / neither = dua  ·  all / any / none = lebih dari dua',
  notes: [
    'both + jamak: "Both books are good."',
    'either / neither + TUNGGAL: "Neither answer is correct."',
    'neither sudah negatif — kata kerjanya positif.',
    'Berpasangan: both … and …, either … or …, neither … nor …',
  ],
  ex: [
    ['Both of my parents are teachers.', 'Kedua orang tua saya guru.'],
    ['You can take either bus.', 'Kamu boleh naik bus yang mana saja dari kedua itu.'],
    ['Neither of them came.', 'Tidak satu pun dari mereka berdua datang.'],
    ['None of the students failed.', 'Tidak seorang pun dari para murid itu gagal.'],
  ],
  traps: [
    ['Neither of them are here.', 'Neither of them is here.', 'neither dianggap tunggal dalam ragam baku.'],
    ["I don't like neither of them.", 'I like neither of them.', 'neither sudah negatif, tidak ditambah don\'t.'],
    ['Both of the three options are good.', 'All of the three options are good.', 'both hanya untuk dua.'],
  ],
  drills: [
    { t: 'mcq', q: '___ of my two sisters lives in Jakarta.', opts: ['Both', 'All', 'Neither', 'None'], a: 2 },
    { t: 'mcq', q: 'You can have ___ tea or coffee.', opts: ['both', 'either', 'neither', 'all'], a: 1 },
    { t: 'mcq', q: '___ of the five answers was correct.', opts: ['Both', 'Either', 'Neither', 'None'], a: 3 },
    { t: 'fill', q: 'She speaks ___ English and French. (keduanya)', a: ['both'] },
    { t: 'trans', id: 'Kedua jawaban itu benar.', a: ['Both answers are correct.', 'Both of the answers are correct.'] },
  ],
},

{
  id: 'a2-25', level: 'A2',
  title: 'Indirect Questions',
  titleId: 'Pertanyaan tak langsung',
  why: 'Begitu pertanyaan disisipkan di dalam kalimat lain, urutan katanya kembali ke urutan kalimat biasa — tidak dibalik lagi. "Do you know where is the station?" adalah salah satu kalimat salah yang paling sering terdengar dari pemelajar Indonesia.',
  form: 'Could you tell me + where / what / if + SUBJEK + KATA KERJA',
  notes: [
    'Di bagian dalam TIDAK ada pembalikan dan TIDAK ada do/does/did.',
    'Kalau tidak ada kata tanya, pakai if atau whether.',
    'Bentuk ini terdengar jauh lebih sopan daripada pertanyaan langsung.',
    'Tanda tanya dipakai kalau kalimat pembukanya memang pertanyaan.',
  ],
  ex: [
    ['Could you tell me where the station is?', 'Bisakah Anda memberi tahu di mana stasiunnya?'],
    ['I wonder what time the shop opens.', 'Saya ingin tahu pukul berapa tokonya buka.'],
    ['Do you know if she is coming?', 'Kamu tahu apakah dia akan datang?'],
    ['I would like to know how much it costs.', 'Saya ingin tahu berapa harganya.'],
  ],
  traps: [
    ['Do you know where is the bank?', 'Do you know where the bank is?', 'Bagian dalam memakai urutan kalimat biasa.'],
    ['Could you tell me what time does it start?', 'Could you tell me what time it starts?', 'Tidak ada does di dalam pertanyaan tak langsung.'],
    ['I wonder is he ready.', 'I wonder if he is ready.', 'Tanpa kata tanya, pakai if.'],
  ],
  drills: [
    { t: 'mcq', q: 'Can you tell me where ___?', opts: ['is the toilet', 'the toilet is', 'does the toilet', 'is toilet'], a: 1 },
    { t: 'mcq', q: 'I would like to know what time ___.', opts: ['does the train leave', 'the train leaves', 'leaves the train', 'is the train leave'], a: 1 },
    { t: 'mcq', q: 'Do you know ___ he has finished?', opts: ['that', 'what', 'if', 'is'], a: 2 },
    { t: 'fill', q: 'Could you tell me how much this ___? (cost)', a: ['costs'] },
    { t: 'trans', id: 'Bisakah Anda memberi tahu di mana pintu keluarnya?', a: ['Could you tell me where the exit is?', 'Can you tell me where the exit is?'] },
  ],
},

{
  id: 'a2-26', level: 'A2',
  title: 'Future Time Clauses',
  titleId: 'Klausa waktu masa depan',
  why: 'Sesudah when, after, before, as soon as, until, Inggris memakai bentuk SEKARANG untuk peristiwa masa depan — tidak boleh will. Ini kesalahan paling awet penutur Indonesia karena logikanya terasa benar: peristiwanya memang belum terjadi.',
  form: 'when / as soon as / before / after / until + SIMPLE PRESENT , … will …',
  notes: [
    'Larangannya hanya berlaku di klausa waktunya; klausa utamanya tetap will.',
    'Berlaku juga untuk if di kalimat pengandaian tipe satu.',
    'Boleh juga present perfect kalau ingin menekankan selesai: "when I have finished".',
    'when yang berarti "kapan" dalam pertanyaan tetap boleh memakai will.',
  ],
  ex: [
    ['I will call you when I arrive.', 'Saya akan meneleponmu saat saya tiba.'],
    ['We will start as soon as everyone is here.', 'Kami akan mulai begitu semua orang hadir.'],
    ['Wait here until the rain stops.', 'Tunggu di sini sampai hujannya berhenti.'],
    ['After I finish work, I will go home.', 'Sesudah selesai bekerja, saya akan pulang.'],
  ],
  traps: [
    ['I will call you when I will arrive.', 'I will call you when I arrive.', 'Klausa waktu tidak memakai will.'],
    ['We will wait until he will come.', 'We will wait until he comes.', 'until juga memakai bentuk sekarang.'],
    ['As soon as I will get home, I will eat.', 'As soon as I get home, I will eat.', 'Hanya klausa utamanya yang memakai will.'],
  ],
  drills: [
    { t: 'mcq', q: 'I will text you when the meeting ___.', opts: ['will end', 'ends', 'is ending', 'ended'], a: 1 },
    { t: 'mcq', q: 'We will leave as soon as the taxi ___.', opts: ['will arrive', 'arrives', 'arrive', 'is arrive'], a: 1 },
    { t: 'mcq', q: 'Which sentence is correct?', opts: ['Call me before you will go.', 'Call me before you go.', 'Call me before you going.', 'Call me before will you go.'], a: 1 },
    { t: 'fill', q: 'She will cook dinner after she ___ (get) home.', a: ['gets'] },
    { t: 'trans', id: 'Saya akan menunggu sampai kamu selesai.', a: ['I will wait until you finish.', "I'll wait until you finish.", 'I will wait until you are finished.'] },
  ],
},

{
  id: 'a2-27', level: 'A2',
  title: 'Purpose: to / in order to / so that',
  titleId: 'Menyatakan tujuan',
  why: 'Untuk menjawab "buat apa?", Inggris memakai to + kata kerja — bukan for + kata kerja. "I came here for study" adalah kesalahan yang lolos dari kesadaran karena bahasa Indonesia memakai "untuk" di kedua tempat itu.',
  form: 'to + V  ·  in order to + V  ·  so that + subjek + kata kerja',
  notes: [
    'for diikuti KATA BENDA: "for study" salah, "for my studies" benar.',
    'in order to lebih resmi, artinya sama dengan to.',
    'so that dipakai kalau pelakunya berganti: "I spoke slowly so that she could understand."',
    'Bentuk negatifnya: "in order not to" atau "so as not to" — bukan "to not".',
  ],
  ex: [
    ['I came here to learn English.', 'Saya datang ke sini untuk belajar bahasa Inggris.'],
    ['She left early in order to catch the train.', 'Dia pergi lebih awal untuk mengejar kereta.'],
    ['He spoke loudly so that everyone could hear.', 'Dia bicara keras supaya semua orang bisa mendengar.'],
    ['I set an alarm so as not to oversleep.', 'Saya pasang alarm supaya tidak kesiangan.'],
  ],
  traps: [
    ['I came here for study English.', 'I came here to study English.', 'for tidak diikuti kata kerja.'],
    ['She went out for buy bread.', 'She went out to buy bread.', 'Tujuan dengan kata kerja memakai to.'],
    ['I hurried to not be late.', 'I hurried so as not to be late.', 'Bentuk negatifnya bukan "to not".'],
  ],
  drills: [
    { t: 'mcq', q: 'I use this app ___ new words.', opts: ['for learn', 'to learn', 'for learning to', 'to learning'], a: 1 },
    { t: 'mcq', q: 'He saved money ___ he could buy a laptop.', opts: ['to', 'for', 'so that', 'in order'], a: 2 },
    { t: 'mcq', q: 'Which is correct?', opts: ['She called for ask a question.', 'She called to ask a question.', 'She called for asking question.', 'She called ask a question.'], a: 1 },
    { t: 'fill', q: 'I went to the shop ___ buy some milk.', a: ['to'] },
    { t: 'trans', id: 'Saya bangun pagi untuk berolahraga.', a: ['I get up early to exercise.', 'I wake up early to exercise.'] },
  ],
},

{
  id: 'a2-28', level: 'A2',
  title: 'say / tell / speak / talk',
  titleId: 'Empat kata "berkata"',
  why: 'Bahasa Indonesia memakai "bilang" dan "berbicara" untuk keempatnya, tapi Inggris memilih berdasarkan ADA-TIDAKNYA lawan bicara sesudah kata kerjanya. Salah pilih langsung terdengar seperti kesalahan pemula.',
  form: 'tell + orang  ·  say + (to orang)  ·  speak / talk + to orang',
  notes: [
    'tell HARUS diikuti orangnya: "tell me", "tell him".',
    'say tidak langsung diikuti orang: "say to me", bukan "say me".',
    'speak lebih resmi; talk lebih santai. Keduanya memakai to atau with.',
    'Ungkapan tetap: tell a story, tell the truth, tell a lie, say hello.',
  ],
  ex: [
    ['She told me the truth.', 'Dia mengatakan yang sebenarnya kepada saya.'],
    ['He said that he was tired.', 'Dia bilang dia lelah.'],
    ['Can I speak to the manager?', 'Bisakah saya bicara dengan manajernya?'],
    ['We talked about the plan.', 'Kami membicarakan rencananya.'],
  ],
  traps: [
    ['He said me the answer.', 'He told me the answer.', 'say tidak langsung diikuti orang.'],
    ['She told that she was busy.', 'She said that she was busy.', 'tell butuh orangnya.'],
    ['I want to talk you.', 'I want to talk to you.', 'talk memerlukan to.'],
  ],
  drills: [
    { t: 'mcq', q: 'Please ___ me what happened.', opts: ['say', 'tell', 'speak', 'talk'], a: 1 },
    { t: 'mcq', q: 'She ___ she would come later.', opts: ['told', 'said', 'spoke', 'talked'], a: 1 },
    { t: 'mcq', q: 'Do you ___ English?', opts: ['say', 'tell', 'speak', 'talk'], a: 2 },
    { t: 'fill', q: 'He always ___ the truth. (kata kerja yang tepat)', a: ['tells'] },
    { t: 'trans', id: 'Dia memberi tahu saya alamatnya.', a: ['She told me the address.', 'He told me the address.'] },
  ],
},

{
  id: 'a2-29', level: 'A2',
  title: 'another / other / others / the other',
  titleId: 'Yang lain',
  why: 'Semuanya berarti "yang lain" dalam bahasa Indonesia, tapi Inggris membedakan jumlah dan apakah bendanya sudah tertentu. Kesalahan "other people" vs "another people" sangat lazim.',
  form: 'another + tunggal · other + jamak · the other = sisanya yang tertentu · others = kata ganti',
  notes: [
    'another sudah memuat "an", jadi tidak pernah dipakai untuk benda jamak.',
    'the other menunjuk sisa yang jelas: dua tangan, "the other hand".',
    'others berdiri sendiri tanpa kata benda: "Some agree, others do not."',
    'the others = sisanya yang tertentu dan jamak.',
  ],
  ex: [
    ['Would you like another cup of tea?', 'Mau secangkir teh lagi?'],
    ['Other people may disagree.', 'Orang lain mungkin tidak setuju.'],
    ['One is red, the other is blue.', 'Yang satu merah, yang satunya biru.'],
    ['Some students passed; others failed.', 'Sebagian murid lulus; yang lain gagal.'],
  ],
  traps: [
    ['I need another books.', 'I need other books.', 'another hanya untuk benda tunggal.'],
    ['Some like it, other do not.', 'Some like it, others do not.', 'Berdiri sendiri memakai others.'],
    ['Give me the another one.', 'Give me the other one.', 'the tidak digabung dengan another.'],
  ],
  drills: [
    { t: 'mcq', q: 'Can I have ___ piece of cake?', opts: ['other', 'others', 'another', 'the others'], a: 2 },
    { t: 'mcq', q: 'I have two bags: one is here, ___ is in the car.', opts: ['another', 'other', 'the other', 'others'], a: 2 },
    { t: 'mcq', q: 'Some people like tea; ___ prefer coffee.', opts: ['other', 'others', 'another', 'the other'], a: 1 },
    { t: 'fill', q: 'We should ask ___ students too. (jamak, tak tentu)', a: ['other'] },
    { t: 'trans', id: 'Boleh minta satu lagi?', a: ['Can I have another one?', 'May I have another one?'] },
  ],
},

{
  id: 'a2-30', level: 'A2',
  title: 'Requests, Offers & Suggestions',
  titleId: 'Meminta, menawarkan, mengusulkan',
  why: 'Kesopanan dalam bahasa Inggris ditandai oleh bentuk kalimatnya, bukan oleh kata seperti "tolong" saja. Memakai bentuk yang terlalu langsung terdengar kasar walau maksudnya ramah.',
  form: 'Could / Would you… (minta) · Shall I / Would you like… (tawarkan) · Let\'s / How about… (usul)',
  notes: [
    'Could you… lebih sopan daripada Can you…; Would you mind + V-ing paling sopan.',
    'Would you mind dijawab terbalik: "No, not at all" berarti bersedia.',
    'Shall I…? untuk menawarkan bantuan; Would you like…? untuk menawarkan barang.',
    'How about / What about diikuti -ing: "How about going out?"',
  ],
  ex: [
    ['Could you help me with this, please?', 'Bisakah Anda membantu saya dengan ini?'],
    ['Would you mind opening the window?', 'Keberatankah Anda membuka jendelanya?'],
    ['Shall I carry that for you?', 'Perlukah saya bawakan itu untuk Anda?'],
    ['How about meeting at seven?', 'Bagaimana kalau bertemu pukul tujuh?'],
  ],
  traps: [
    ['Would you mind to open the door?', 'Would you mind opening the door?', 'mind diikuti bentuk -ing.'],
    ['How about to go to the beach?', 'How about going to the beach?', 'How about juga diikuti -ing.'],
    ['Do you like some tea?', 'Would you like some tea?', 'Do you like menanyakan kesukaan, bukan menawarkan.'],
  ],
  drills: [
    { t: 'mcq', q: '___ you mind closing the window?', opts: ['Do', 'Would', 'Shall', 'Are'], a: 1 },
    { t: 'mcq', q: '___ like something to drink?', opts: ['Do you', 'Would you', 'Are you', 'Shall you'], a: 1 },
    { t: 'mcq', q: 'How about ___ a break?', opts: ['take', 'to take', 'taking', 'we take'], a: 2 },
    { t: 'fill', q: '___ I open the window for you? (menawarkan bantuan)', a: ['Shall'] },
    { t: 'trans', id: 'Bisakah Anda mengulanginya?', a: ['Could you repeat that?', 'Could you say that again?', 'Would you repeat that?'] },
  ],
},

];
