/* ── Sistem kata kerja Prancis ────────────────────────────────────
   Prancis punya banyak kala, tapi satu pilihan menentukan hampir
   seluruh cerita masa lalu: PASSÉ COMPOSÉ atau IMPARFAIT.

   Keduanya diterjemahkan sama ke bahasa Indonesia — "saya makan",
   "saya sedang makan" — sehingga penutur Indonesia tidak punya rasa
   bawaan untuk memilih. Padahal pilihannya bukan soal waktu melainkan
   soal SUDUT PANDANG: peristiwa yang maju (passé composé) versus latar
   yang diam (imparfait). Satu cerita Prancis yang baik selalu memakai
   keduanya berselang-seling.

   Beban kedua: kata kerjanya dibagi tiga golongan (-er, -ir, -re) plus
   sederet kata tak beraturan yang justru paling sering dipakai.        */

export const VERBA = {
  kode: 'fr',
  judul: 'Passé composé vs imparfait — pilihan yang menentukan',
  ringkas: 'Banyak kala, tapi kuncinya satu: memilih antara passé composé (peristiwa yang maju) dan imparfait (latar yang diam). Keduanya diterjemahkan sama ke bahasa Indonesia, jadi harus dipilih sadar.',

  bedaBesar: [
    'Dua kala lampau yang harus dipilih di tiap kalimat — bahasa Indonesia tidak membedakannya sama sekali.',
    'Passé composé memakai avoir ATAU être; yang memakai être harus disesuaikan jenis kelamin & jumlahnya: elle est allée.',
    'Kata kerja dibagi tiga golongan menurut akhiran infinitifnya (-er, -ir, -re), masing-masing berpola sendiri.',
    'Subjonctif wajib sesudah ungkapan tertentu (il faut que, bien que, vouloir que) — bukan pilihan gaya.',
  ],

  sistem: [
    {
      nama: 'Présent',
      namaId: 'Kala sekarang',
      rumus: '-er: e/es/e/ons/ez/ent  ·  -ir: is/is/it/issons/issez/issent',
      inti: 'Sekarang, kebiasaan, kebenaran umum. Juga dipakai untuk masa depan dekat dengan keterangan waktu.',
      kapan: [
        'Kebiasaan: Je travaille tous les jours.',
        'Sekarang: Qu\'est-ce que tu fais ?',
        'Masa depan dekat: Je pars demain.',
      ],
      ex: [
        ['Je parle français.', 'zye parl fransε', 'Saya berbicara bahasa Prancis.'],
        ['Nous habitons à Paris.', 'nu abiton a pari', 'Kami tinggal di Paris.'],
        ['Ils finissent le travail.', 'il finis le travay', 'Mereka menyelesaikan pekerjaannya.'],
      ],
      jebakan: [
        ['Je suis parle français.', 'Je parle français.', 'Présent tidak memakai kata kerja bantu.'],
        ['Nous habiter à Paris.', 'Nous habitons à Paris.', 'Infinitif harus dikonjugasikan.'],
      ],
    },
    {
      nama: 'Passé composé',
      namaId: 'Lampau peristiwa',
      rumus: 'avoir / être + participe passé',
      inti: 'Peristiwa yang MAJU — kejadian, tindakan, perubahan. Ini yang menggerakkan cerita.',
      kapan: [
        'Kejadian selesai: J\'ai mangé au restaurant.',
        'Rangkaian peristiwa: Il est entré, a pris son sac et est parti.',
        '17 kata kerja gerak & perubahan memakai être (aller, venir, partir, arriver, naître, mourir…).',
      ],
      ex: [
        ['J\'ai fini mon travail.', 'zye fini mon travay', 'Saya sudah menyelesaikan pekerjaan saya.'],
        ['Elle est allée au marché.', 'el et ale o marsye', 'Dia (pr) pergi ke pasar.'],
        ['Nous sommes arrivés hier.', 'nu som arive yer', 'Kami tiba kemarin.'],
      ],
      jebakan: [
        ['Elle est allé au marché.', 'Elle est allée au marché.', 'Dengan être, participe-nya disesuaikan jenis kelamin.'],
        ['J\'ai allé à Paris.', 'Je suis allé à Paris.', 'aller termasuk kata kerja yang memakai être.'],
      ],
    },
    {
      nama: 'Imparfait',
      namaId: 'Lampau latar',
      rumus: 'akar nous bentuk présent + ais/ais/ait/ions/iez/aient',
      inti: 'Latar yang DIAM — keadaan, kebiasaan lampau, gambaran suasana, dan kegiatan yang sedang berjalan.',
      kapan: [
        'Kebiasaan lampau: Quand j\'étais petit, je jouais au foot.',
        'Gambaran & suasana: Il faisait beau, les oiseaux chantaient.',
        'Sedang berlangsung saat kejadian lain: Je dormais quand tu as appelé.',
      ],
      ex: [
        ['Quand j\'étais jeune, j\'habitais à Lyon.', 'kan zyete zyœn, zyabite a lion', 'Waktu muda saya tinggal di Lyon.'],
        ['Il pleuvait tout le matin.', 'il pløve tu le matɛn', 'Hujan turun sepanjang pagi.'],
        ['Nous regardions la télé.', 'nu regardion la tele', 'Kami sedang menonton TV.'],
      ],
      jebakan: [
        ['Hier, je mangeais au restaurant à midi.', 'Hier, j\'ai mangé au restaurant à midi.', 'Kejadian sekali dan selesai memakai passé composé.'],
        ['Quand j\'ai été petit…', 'Quand j\'étais petit…', 'Keadaan lampau memakai imparfait.'],
      ],
    },
    {
      nama: 'Futur',
      namaId: 'Kala depan',
      rumus: 'futur simple: infinitif + ai/as/a/ons/ez/ont  ·  futur proche: aller + infinitif',
      inti: 'Dua bentuk: futur proche untuk yang dekat & pasti, futur simple untuk yang lebih jauh atau resmi.',
      kapan: [
        'Dekat & pasti: Je vais partir. (Saya mau berangkat.)',
        'Lebih jauh / resmi: Je partirai demain.',
        'Sesudah quand, dès que — Prancis memakai futur, berbeda dari Inggris: Quand il arrivera…',
      ],
      ex: [
        ['Je vais appeler le médecin.', 'zye ve aple le medsɛn', 'Saya akan menelepon dokter.'],
        ['Nous partirons à huit heures.', 'nu partiron a yit œr', 'Kami akan berangkat pukul delapan.'],
        ['Quand il arrivera, nous mangerons.', 'kant il arivra, nu manzyron', 'Saat dia tiba, kami akan makan.'],
      ],
      jebakan: [
        ['Quand il arrive, nous mangerons.', 'Quand il arrivera, nous mangerons.', 'Berbeda dari Inggris: Prancis MEMAKAI futur sesudah quand.'],
        ['Je vais à partir.', 'Je vais partir.', 'aller + infinitif tanpa à.'],
      ],
    },
    {
      nama: 'Subjonctif',
      namaId: 'Modus keinginan & keraguan',
      rumus: 'que + akar ils bentuk présent + e/es/e/ions/iez/ent',
      inti: 'Wajib sesudah ungkapan keinginan, keharusan, perasaan, dan keraguan. Bukan pilihan gaya.',
      kapan: [
        'Keharusan: Il faut que tu viennes.',
        'Keinginan: Je veux qu\'il parte.',
        'Keraguan & perasaan: Je doute qu\'il vienne. · Je suis content que tu sois là.',
      ],
      ex: [
        ['Il faut que tu partes maintenant.', 'il fo ke tyu part mɛntnan', 'Kamu harus pergi sekarang.'],
        ['Je veux qu\'elle vienne.', 'zye vø kel vyen', 'Saya ingin dia datang.'],
        ['Bien qu\'il soit tard, je continue.', 'byɛn kil swa tar, zye kontinyu', 'Meskipun sudah larut, saya lanjut.'],
      ],
      jebakan: [
        ['Il faut que tu viens.', 'Il faut que tu viennes.', 'Sesudah il faut que wajib subjonctif.'],
        ['J\'espère qu\'il vienne.', 'J\'espère qu\'il viendra.', 'espérer justru TIDAK memakai subjonctif.'],
      ],
    },
  ],

  tabel: {
    judul: 'parler (berbicara) — kala pokok',
    kolom: ['Kala', 'Bentuk (je)', 'Arti'],
    baris: [
      ['Présent',        'je parle',           'saya berbicara'],
      ['Passé composé',  'j\'ai parlé',        'saya (sudah) berbicara'],
      ['Imparfait',      'je parlais',         'saya sedang/biasa berbicara'],
      ['Plus-que-parfait','j\'avais parlé',    'saya telah berbicara (sebelumnya)'],
      ['Futur proche',   'je vais parler',     'saya akan berbicara (segera)'],
      ['Futur simple',   'je parlerai',        'saya akan berbicara'],
      ['Conditionnel',   'je parlerais',       'saya akan berbicara (andai)'],
      ['Subjonctif',     'que je parle',       'agar saya berbicara'],
    ],
  },

  catatan: [
    'Uji cepat memilih lampau: kalau kalimatnya menjawab "lalu apa yang terjadi?" pakai passé composé; kalau menjawab "bagaimana suasananya?" pakai imparfait.',
    'Dalam satu cerita, keduanya berselang-seling: imparfait melukis latar, passé composé menggerakkan peristiwa.',
    'Kata kerja tak beraturan yang wajib lebih dulu: être, avoir, aller, faire, pouvoir, vouloir, venir, prendre. Delapan ini menutupi sebagian besar percakapan.',
  ],
};
