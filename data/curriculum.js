/* Kurikulum CEFR A1–C2.
   Tiap unit = beberapa pelajaran grammar + satu paket kosakata +
   latihan keterampilan + ujian unit. Pelajaran dibangkitkan dari
   definisi ringkas di bawah agar mudah dirawat. */

const U = (id, title, titleId, goal, grammar, vocab, skills = [], cando = []) =>
  ({ id, title, titleId, goal, grammar, vocab, skills, cando });

const LEVEL_DEFS = [
{
  id: 'A1', name: 'Beginner', nameId: 'Pemula', hours: 90,
  blurb: 'Membangun pondasi: to be, present tense, artikel, jamak, dan 400 kata paling sering dipakai.',
  target: 'Bisa memperkenalkan diri, menanyakan arah, berbelanja, dan menulis pesan singkat.',
  ieltsEq: 'IELTS 2.0–3.0 · TOEFL iBT 0–31 · TOEIC 10–250',
  units: [
    U('a1-u1','First Contact','Kontak Pertama','Memperkenalkan diri dan menyapa dengan benar.',
      ['a1-01','a1-02','a1-10'],'survival',['listen','speak'],
      ['Menyebut nama, asal, dan pekerjaan','Menyapa dan berpamitan dengan sopan']),
    U('a1-u2','Naming the World','Menamai Dunia','Menguasai artikel dan bentuk jamak.',
      ['a1-03','a1-04','a1-17'],'survival',['read'],
      ['Memakai a/an/the dengan benar','Membentuk jamak beraturan dan tak beraturan']),
    U('a1-u3','Everyday Routines','Rutinitas Harian','Bercerita tentang kegiatan sehari-hari.',
      ['a1-05','a1-06','a1-07'],'daily',['listen','speak'],
      ['Menjelaskan rutinitas harian','Membedakan kebiasaan dan kegiatan saat ini']),
    U('a1-u4','Places & Things','Tempat & Benda','Menyatakan keberadaan dan kepemilikan.',
      ['a1-08','a1-09','a1-16'],['daily','city'],['read','write'],
      ['Menjelaskan isi rumah atau kota','Menyatakan milik siapa sesuatu']),
    U('a1-u5','Asking & Telling','Bertanya & Menjawab','Menyusun kalimat tanya yang benar.',
      ['a1-11','a1-12','a1-13'],'people',['listen','speak'],
      ['Membuat pertanyaan dengan kata bantu','Memberi dan memahami perintah sederhana']),
    U('a1-u6','Time & Place','Waktu & Tempat','Memakai preposisi in/on/at dengan tepat.',
      ['a1-14','a1-15'],'people',['read'],
      ['Menyebut jadwal dan lokasi','Membuat janji sederhana']),
    U('a1-u7','Talking about the Past','Bercerita Masa Lalu','Membentuk kalimat lampau dasar.',
      ['a1-18','a1-19','a1-20'],'daily',['write','speak'],
      ['Menceritakan kejadian kemarin','Menghafal 50 kata kerja tak beraturan'])
  ]
},
{
  id: 'A2', name: 'Elementary', nameId: 'Dasar', hours: 120,
  blurb: 'Melengkapi seluruh sistem waktu dasar, perbandingan, dan modal — cukup untuk bertahan di negara berbahasa Inggris.',
  target: 'Bisa bercerita, membandingkan, membuat rencana, dan memahami percakapan lambat.',
  ieltsEq: 'IELTS 3.0–4.0 · TOEFL iBT 32–45 · TOEIC 255–400',
  units: [
    U('a2-u1','Past in Detail','Masa Lalu Terperinci','Menceritakan kejadian lampau secara utuh.',
      ['a2-01','a2-02','a2-03'],'daily',['listen','speak'],
      ['Menceritakan liburan atau kejadian','Memakai when/while dengan tepat']),
    U('a2-u2','Present Perfect','Perfect Sekarang','Memahami tenses yang tak ada di bahasa Indonesia.',
      ['a2-04','a2-05','a2-06'],['travel','time'],['read'],
      ['Bercerita pengalaman hidup','Membedakan perfect dan lampau']),
    U('a2-u3','Planning Ahead','Merencanakan','Tiga cara menyatakan masa depan.',
      ['a2-07','a2-08','a2-09'],'travel',['speak','write'],
      ['Membuat rencana perjalanan','Meramalkan dengan will dan going to']),
    U('a2-u4','Comparing','Membandingkan','Perbandingan dan superlatif.',
      ['a2-10','a2-11','a2-12'],'health',['read','write'],
      ['Membandingkan dua tempat atau produk','Menyebut yang paling …']),
    U('a2-u5','How & How Often','Cara & Frekuensi','Kata keterangan dan letaknya.',
      ['a2-13','a2-14','a2-15'],['health','sport'],['listen'],
      ['Menjelaskan cara melakukan sesuatu','Menyatakan seberapa sering']),
    U('a2-u6','Rules & Advice','Aturan & Saran','Modal keharusan dan kemungkinan.',
      ['a2-16','a2-17'],['work','money'],['speak'],
      ['Memberi saran','Menjelaskan aturan tempat kerja']),
    U('a2-u7','Sentence Building','Merakit Kalimat','Urutan kata dan pola kata kerja.',
      ['a2-18','a2-19','a2-20'],'work',['write','listen'],
      ['Menyusun kalimat panjang yang benar','Memakai gerund dan infinitive'])
  ]
},
{
  id: 'B1', name: 'Intermediate', nameId: 'Menengah', hours: 180,
  blurb: 'Titik lompat: pengandaian, pasif, klausa relatif, dan kalimat tidak langsung. Di sinilah bahasa Inggris mulai terasa "nyambung".',
  target: 'Bisa berdiskusi, menulis surat, memahami berita sederhana, dan mengikuti kuliah dasar.',
  ieltsEq: 'IELTS 4.0–5.0 · TOEFL iBT 46–59 · TOEIC 405–600',
  units: [
    U('b1-u1','Perfect Aspects','Aspek Perfect','Menguasai perfect continuous dan past perfect.',
      ['b1-01','b1-02','b1-03'],'work',['listen','write'],
      ['Menjelaskan durasi kegiatan','Menyusun urutan cerita yang jelas']),
    U('b1-u2','Future Range','Ragam Masa Depan','Future continuous dan future perfect.',
      ['b1-04'],'tech',['speak'],
      ['Membuat prediksi bertingkat']),
    U('b1-u3','Conditionals','Pengandaian','Tiga jenis pengandaian utama.',
      ['b1-05','b1-06','b1-07'],'tech',['speak','write'],
      ['Membahas kemungkinan dan penyesalan','Menjawab pertanyaan hipotetis']),
    U('b1-u4','Passive & Relatives','Pasif & Klausa Relatif','Struktur kunci teks akademik.',
      ['b1-08','b1-09','b1-10'],['awl','science'],['read'],
      ['Membaca teks formal','Menggabungkan kalimat pendek']),
    U('b1-u5','Reported Speech','Kalimat Tidak Langsung','Melaporkan ucapan dan pertanyaan.',
      ['b1-11','b1-12'],'awl',['listen'],
      ['Melaporkan isi percakapan','Mengutip sumber']),
    U('b1-u6','Habits & Deduction','Kebiasaan & Kesimpulan','used to dan modal dugaan.',
      ['b1-13','b1-14','b1-15'],['society','money'],['speak'],
      ['Membandingkan dulu dan sekarang','Menyimpulkan dari bukti']),
    U('b1-u7','Structure Boosters','Penguat Struktur','too/enough, kausatif, frasa kerja.',
      ['b1-16','b1-17','b1-18'],'society',['write'],
      ['Menyusun kalimat sebab-akibat','Memakai frasa kerja dengan tepat']),
    U('b1-u8','Accuracy Lab','Laboratorium Ketepatan','Artikel lanjutan, preposisi melekat, kecocokan subjek.',
      ['b1-19','b1-20','b1-21','b1-22'],'band7',['write','read'],
      ['Memangkas kesalahan berulang','Memakai penghubung dengan benar'])
  ]
},
{
  id: 'B2', name: 'Upper-Intermediate', nameId: 'Menengah Atas', hours: 200,
  blurb: 'Level yang dituntut kebanyakan universitas luar negeri. Fokus: kepadatan, ragam struktur, dan gaya akademik.',
  target: 'Bisa menulis esai berargumen, berdiskusi abstrak, dan memahami kuliah penuh.',
  ieltsEq: 'IELTS 5.5–6.5 · TOEFL iBT 60–93 · TOEIC 605–780',
  units: [
    U('b2-u1','Hypothetical Range','Ragam Hipotetis','Mixed conditional dan wish.',
      ['b2-01','b2-02'],'band7',['speak','write'],
      ['Menyatakan penyesalan dan harapan','Menjawab pertanyaan pengandaian kompleks']),
    U('b2-u2','Academic Passive','Pasif Akademik','Pasif pelaporan dan kausatif.',
      ['b2-03','b2-04'],['awl','acadverb'],['read','write'],
      ['Menulis dengan gaya laporan','Menyebut sumber tanpa pelaku']),
    U('b2-u3','Compression','Pemadatan','Klausa relatif formal dan partisip.',
      ['b2-05','b2-06'],['awl','arts'],['read'],
      ['Memadatkan kalimat panjang','Membaca teks padat dengan cepat']),
    U('b2-u4','Verb Patterns','Pola Kata Kerja','Perubahan makna dan pola objek.',
      ['b2-07','b2-08','b2-09'],'trend',['write'],
      ['Memilih gerund atau infinitive dengan tepat']),
    U('b2-u5','Modal Precision','Ketepatan Modal','needn\'t have, penekanan, cleft.',
      ['b2-10','b2-11','b2-12','b2-13'],'trend',['speak'],
      ['Menonjolkan informasi penting','Menyatakan tingkat keharusan dengan tepat']),
    U('b2-u6','Style & Register','Gaya & Ragam','Gradable, penanda wacana, hedging.',
      ['b2-14','b2-15','b2-16','b2-17'],['society','law'],['write'],
      ['Menulis dengan nada akademik','Menghindari klaim mutlak']),
    U('b2-u7','Density','Kepadatan','Nominalisasi dan pembentukan kata.',
      ['b2-18','b2-19'],'society',['read','write'],
      ['Mengubah kata kerja jadi kata benda','Melipatgandakan kosakata dari satu akar']),
    U('b2-u8','Polish','Pemolesan','Tanda baca, ragam kalimat, kata benda berpindah jenis.',
      ['b2-20','b2-21','b2-22'],'traps',['write'],
      ['Menghindari comma splice','Menyeimbangkan panjang kalimat'])
  ]
},
{
  id: 'C1', name: 'Advanced', nameId: 'Mahir', hours: 220,
  blurb: 'Bahasa yang dipakai untuk berargumen, mengkritik, dan menulis akademik yang sesungguhnya.',
  target: 'Bisa menulis esai band 7+, memimpin diskusi, dan memahami teks akademik penuh.',
  ieltsEq: 'IELTS 7.0–8.0 · TOEFL iBT 94–114 · TOEIC 785–900',
  units: [
    U('c1-u1','Marked Structures','Struktur Bertanda','Inversi, subjungtif, pasif lanjutan.',
      ['c1-01','c1-02','c1-03'],'band7',['write','speak'],
      ['Memakai inversi dengan wajar','Menulis rekomendasi formal']),
    U('c1-u2','Conditional Elegance','Pengandaian Elegan','Pengandaian tanpa if dan konsesi.',
      ['c1-04','c1-05'],'band7',['write'],
      ['Menimbang dua sisi argumen']),
    U('c1-u3','Noun Power','Kekuatan Frasa Benda','Klausa terpangkas dan frasa benda kompleks.',
      ['c1-06','c1-07'],['awl','acadverb'],['read'],
      ['Membedah kalimat akademik panjang']),
    U('c1-u4','Nuance','Nuansa','Modal halus, fronting, ragam bahasa.',
      ['c1-08','c1-09','c1-10'],'society',['speak','write'],
      ['Menyesuaikan gaya dengan pembaca']),
    U('c1-u5','Cohesion','Kohesi','Perekat antar kalimat dan pola idiomatik.',
      ['c1-11','c1-12'],'society',['write'],
      ['Menyusun paragraf yang mengalir']),
    U('c1-u6','Data Language','Bahasa Data','Kuantifikasi tepat dan penekanan.',
      ['c1-13','c1-14'],['trend','time'],['write'],
      ['Menjelaskan grafik dengan akurat']),
    U('c1-u7','Scholarly Voice','Suara Ilmiah','Tenses akademik, frasa penghubung, kata kerja pelaporan.',
      ['c1-15','c1-16','c1-17'],'awl',['read','write'],
      ['Mengutip dan menilai sumber']),
    U('c1-u8','Final Audit','Audit Akhir','Ambiguitas, kesejajaran, daftar periksa kesalahan.',
      ['c1-18','c1-19','c1-20'],'traps',['write'],
      ['Memeriksa tulisan secara sistematis'])
  ]
},
{
  id: 'C2', name: 'Proficient', nameId: 'Sangat Mahir', hours: 240,
  blurb: 'Menyempurnakan nuansa: aspek halus, retorika, kolokasi, dan kefasihan seperti penutur asli.',
  target: 'Bisa menulis dan berbicara setara penutur terdidik, memahami sindiran dan implikasi.',
  ieltsEq: 'IELTS 8.5–9.0 · TOEFL iBT 115–120 · TOEIC 905–990',
  units: [
    U('c2-u1','Aspect & Inversion','Aspek & Inversi','Pilihan aspek halus dan inversi lanjutan.',
      ['c2-01','c2-02'],'band7',['speak'],
      ['Menyampaikan nuansa lewat aspek']),
    U('c2-u2','Modality & Discourse','Modalitas & Wacana','Nuansa modal dan pengelolaan wacana.',
      ['c2-03','c2-04'],'society',['speak'],
      ['Mengarahkan alur diskusi panjang']),
    U('c2-u3','Precision','Ketepatan','Kolokasi dan gaya retoris.',
      ['c2-05','c2-06'],['band7','arts'],['read'],
      ['Menangkap ironi dan understatement']),
    U('c2-u4','Long Sentences','Kalimat Panjang','Penggabungan kompleks dan kaidah surat.',
      ['c2-07','c2-08'],'work',['write'],
      ['Menulis surat resmi tanpa cela']),
    U('c2-u5','Paraphrase & Sound','Parafrase & Bunyi','Parafrase mendalam dan bunyi bersambung.',
      ['c2-09','c2-10','c2-11'],'traps',['listen','speak'],
      ['Menangkap ucapan cepat penutur asli']),
    U('c2-u6','Mastery','Penguasaan','Ragam, kritik ilmiah, topik abstrak, kefasihan.',
      ['c2-12','c2-13','c2-14','c2-15','c2-16'],'awl',['speak','write'],
      ['Berdiskusi abstrak dengan lancar','Menghapus kesalahan yang membatu'])
  ]
}
];

/* Topik tata bahasa yang ditambahkan belakangan ditautkan ke unitnya
   lewat berkas terpisah, supaya daftar unit di atas tetap terbaca
   sebagai rancangan aslinya. */
import { grammarUnit } from './curriculum-plus.js';
/* Judul pelajaran diambil dari materinya sendiri. Sebelumnya pelajaran
   dinamai "Grammar 1", "Grammar 2" — 14 judul untuk 326 pelajaran,
   sehingga tiap unit terlihat sama persis di pemutar pelajaran, di
   pencarian, dan di halaman kemajuan. Halaman unit sudah memecahkan ini
   sendiri lewat pencarian judul saat menggambar; sekarang judulnya ada
   di DATANYA, jadi seluruh aplikasi ikut membaik sekaligus. */
import { SEMUA as GRAMMAR_SEMUA } from './grammar-gabung.js';
import { PACKS_1 } from './vocab-1.js';
import { PACKS_2 } from './vocab-2.js';
import { PACKS_3 } from './vocab-3.js';
import { PACKS_4 } from './vocab-4.js';
import { PACKS_5 } from './vocab-5.js';
import { PACKS_6 } from './vocab-6.js';

const PAKET = [...PACKS_1, ...PACKS_2, ...PACKS_3, ...PACKS_4, ...PACKS_5, ...PACKS_6];
const judulTopik = id => GRAMMAR_SEMUA.find(g => g.id === id);
const judulPaket = id => PAKET.find(p => p.id === id);

/* Bangun objek pelajaran lengkap untuk tiap unit. */
const SKILL_LABEL = {
  listen: ['Listening Lab', 'Latihan Menyimak', '🎧'],
  speak:  ['Speaking Lab', 'Latihan Berbicara', '🎙'],
  read:   ['Reading Lab', 'Latihan Membaca', '📖'],
  write:  ['Writing Lab', 'Latihan Menulis', '✍️']
};

/* Kalimat tujuan per keterampilan — ditulis utuh, bukan dirangkai dari
   label di atas. Merangkainya menghasilkan "Melatih latihan menyimak". */
const SKILL_TUJUAN = {
  listen: 'Menuliskan kembali kalimat unit ini dari suara, tanpa melihat teksnya.',
  speak:  'Mengucapkan kalimat unit ini dan mencocokkannya dengan pengenal suara.',
  read:   'Membaca teks setingkat lalu menjawab soal pemahamannya.',
  write:  'Menulis teks pendek memakai kerangka, lalu membandingkannya dengan model.',
};

export const LEVELS = LEVEL_DEFS.map(lv => ({
  ...lv,
  units: lv.units.map((u, ui) => {
    const lessons = [];
    const grammar = grammarUnit(u);
    grammar.forEach((gid, i) => {
      const g = judulTopik(gid);
      lessons.push({
        id: `${u.id}-g${i + 1}`, type: 'grammar', ref: gid, icon: '📐',
        title: g?.titleId || `Grammar ${i + 1}`,
        sub: g?.title || '',
        tujuan: g?.why ? g.why.split('.')[0] + '.' : '',
        xp: 25
      });
    });
    [].concat(u.vocab).forEach((vid, i) => {
      const p = judulPaket(vid);
      lessons.push({
        id: `${u.id}-v${i + 1}`, type: 'vocab', ref: vid, icon: '🗂',
        title: p?.titleId || (i === 0 ? 'Kosakata Unit' : 'Kosakata Tambahan'),
        sub: p?.title || '',
        tujuan: p?.blurb || '',
        xp: 30
      });
    });
    /* Lab keterampilan DIIKATKAN KE UNITNYA, bukan ke tingkatnya.
       Sebelumnya ref-nya cuma kode tingkat, sehingga ketujuh unit A1
       memakai lab yang sama persis — dan berbagi satu catatan skor,
       jadi mengerjakan lab unit 3 menimpa nilai unit 1. */
    u.skills.forEach((s, i) => lessons.push({
      id: `${u.id}-s${i + 1}`, type: s, ref: u.id, icon: SKILL_LABEL[s][2],
      title: `${SKILL_LABEL[s][1]} · ${u.titleId}`,
      sub: SKILL_LABEL[s][0],
      tujuan: SKILL_TUJUAN[s] || '',
      xp: 30
    }));
    lessons.push({ id: `${u.id}-test`, type: 'test', ref: u.id, icon: '🏁',
      title: `Ujian Unit ${ui + 1} · ${u.titleId}`,
      sub: 'Unit test',
      tujuan: 'Menggabungkan seluruh tata bahasa dan kosakata unit ini.',
      xp: 60 });
    return { ...u, grammar, n: ui + 1, level: lv.id, lessons };
  })
}));

export const ALL_UNITS = LEVELS.flatMap(l => l.units);
export const ALL_LESSONS = ALL_UNITS.flatMap(u => u.lessons.map(l => ({ ...l, unit: u.id, level: u.level })));

export const levelById = id => LEVELS.find(l => l.id === id);
export const unitById = id => ALL_UNITS.find(u => u.id === id);

/* Pernyataan "can-do" CEFR ringkas untuk halaman penempatan. */
export const CEFR_CANDO = {
  A1: ['Memahami dan memakai ungkapan sehari-hari yang sangat dasar.',
       'Memperkenalkan diri dan menanyakan hal pribadi sederhana.',
       'Berinteraksi sederhana bila lawan bicara berbicara pelan dan jelas.'],
  A2: ['Memahami kalimat dan ungkapan yang sering dipakai (keluarga, belanja, pekerjaan).',
       'Berkomunikasi dalam tugas sederhana dan rutin.',
       'Menjelaskan latar belakang dan kebutuhan langsung dengan kalimat sederhana.'],
  B1: ['Memahami pokok bahasan teks yang jelas tentang hal yang akrab.',
       'Mengatasi sebagian besar situasi saat bepergian.',
       'Menghasilkan teks sederhana yang terhubung dan menjelaskan alasan pendapat.'],
  B2: ['Memahami gagasan utama teks kompleks, termasuk diskusi teknis di bidangnya.',
       'Berinteraksi dengan lancar dan spontan tanpa ketegangan bagi kedua pihak.',
       'Menulis teks jelas dan rinci serta menjelaskan sudut pandang atas suatu isu.'],
  C1: ['Memahami beragam teks panjang dan menangkap makna tersirat.',
       'Mengungkapkan diri dengan lancar dan spontan tanpa banyak mencari kata.',
       'Memakai bahasa secara luwes dan efektif untuk keperluan sosial, akademik, dan profesional.'],
  C2: ['Memahami dengan mudah hampir semua yang didengar atau dibaca.',
       'Merangkum informasi dari berbagai sumber lisan dan tulis secara koheren.',
       'Mengungkapkan diri secara spontan, sangat lancar, dan tepat dalam nuansa makna.']
};
