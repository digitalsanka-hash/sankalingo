/* ── Sistem kata kerja Arab ───────────────────────────────────────
   Arab hanya punya dua kala pokok: الماضي (lampau) dan المضارع
   (sekarang-depan). Sedikit — tapi jangan tertipu, karena beban
   sebenarnya ada di dua tempat lain.

   Pertama: AKAR TIGA HURUF. Hampir semua kata Arab tumbuh dari akar
   tiga konsonan. ك-ت-ب melahirkan كَتَبَ (menulis), كِتَاب (buku),
   مَكْتَب (kantor), كَاتِب (penulis). Memahami akar berarti membuka
   puluhan kata sekaligus.

   Kedua: WAZAN (pola/bentuk kata kerja I–X). Akar yang sama dimasukkan
   ke pola berbeda dan maknanya berubah dengan cara yang teratur:
   عَلِمَ (mengetahui) → عَلَّمَ (mengajar) → تَعَلَّمَ (belajar).

   Dan yang tidak ada di bahasa Indonesia maupun Inggris: bentuk DUAL,
   khusus untuk tepat dua orang.                                        */

export const VERBA = {
  kode: 'ar',
  judul: 'Dua kala, akar tiga huruf, sepuluh pola',
  ringkas: 'Kalanya hanya dua: lampau dan sekarang-depan. Yang menuntut kerja adalah akar tiga huruf dan pola (wazan) I–X yang mengubah makna secara teratur — plus bentuk dual untuk tepat dua orang.',

  bedaBesar: [
    'Tidak ada infinitif seperti "to write". Kata kerja dikutip dalam bentuk lampau orang ketiga tunggal: كَتَبَ = "dia (lk) menulis".',
    'Kata kerja berubah menurut orang, jumlah, DAN jenis kelamin — termasuk bentuk dual untuk tepat dua orang.',
    'Masa depan dibentuk dengan awalan سَـ atau kata سَوْفَ pada bentuk sekarang, bukan kala tersendiri.',
    'Kalimat nominal (tanpa kata kerja) sangat lazim: هُوَ طَالِب = "dia mahasiswa" — tidak ada padanan "adalah".',
  ],

  sistem: [
    {
      nama: 'الماضي',
      namaId: 'Kala lampau',
      rumus: 'akar + akhiran (تُ، تَ، تِ، ـَ، ـَتْ، نَا، ...)',
      inti: 'Peristiwa yang sudah selesai. Bentuk dasar yang dipakai untuk mengutip kata kerja di kamus.',
      kapan: [
        'Kejadian selesai: كَتَبْتُ الرِّسَالَة. (Saya menulis surat itu.)',
        'Dengan قَدْ menjadi lebih tegas selesainya: قَدْ كَتَبَ.',
        'Bentuk negatifnya memakai مَا atau لَمْ + bentuk sekarang jussif.',
      ],
      ex: [
        ['كَتَبْتُ رِسَالَة أَمْس.', 'katabtu risaalah ams.', 'Kemarin saya menulis surat.'],
        ['ذَهَبَ إِلَى السُّوق.', 'dzahaba ila as-suuq.', 'Dia pergi ke pasar.'],
        ['دَرَسْنَا اللُّغَة العَرَبِيَّة.', 'darasnaa al-lughah al-arabiyyah.', 'Kami belajar bahasa Arab.'],
      ],
      jebakan: [
        ['أَنَا كَتَبَ', 'أَنَا كَتَبْتُ', 'Akhiran harus cocok dengan pelakunya.'],
        ['مَا كَتَبْتُ / لَمْ أَكْتُبْ', 'keduanya benar', 'مَا + lampau, atau لَمْ + bentuk sekarang jussif.'],
      ],
    },
    {
      nama: 'المضارع',
      namaId: 'Kala sekarang–depan',
      rumus: 'awalan (أَ، تَ، يَ، نَ) + akar',
      inti: 'Satu bentuk untuk sekarang, kebiasaan, DAN masa depan. Awalannya menandai pelakunya.',
      kapan: [
        'Sedang / kebiasaan: أَكْتُبُ كُلَّ يَوْم. (Saya menulis tiap hari.)',
        'Masa depan: سَأَكْتُبُ غَدًا. (Besok saya akan menulis.)',
        'Negatif sekarang: لَا أَكْتُبُ.',
      ],
      ex: [
        ['أَدْرُسُ اللُّغَة العَرَبِيَّة.', 'adrusu al-lughah al-arabiyyah.', 'Saya belajar bahasa Arab.'],
        ['يَذْهَبُ إِلَى المَدْرَسَة.', 'yadzhabu ila al-madrasah.', 'Dia pergi ke sekolah.'],
        ['نَسْكُنُ فِي جَاكَرْتَا.', 'naskunu fii Jaakartaa.', 'Kami tinggal di Jakarta.'],
      ],
      jebakan: [
        ['أَنَا يَكْتُبُ', 'أَنَا أَكْتُبُ', 'Awalan أَ untuk "saya", يَ untuk "dia (lk)".'],
        ['لَا كَتَبْتُ', 'مَا كَتَبْتُ', 'لَا menegatifkan bentuk sekarang, bukan lampau.'],
      ],
    },
    {
      nama: 'المستقبل',
      namaId: 'Masa depan',
      rumus: 'سَـ + مضارع (dekat)  ·  سَوْفَ + مضارع (jauh/tegas)',
      inti: 'Bukan kala tersendiri — hanya awalan yang ditempelkan pada bentuk sekarang.',
      kapan: [
        'Dekat: سَأَذْهَبُ غَدًا. (Besok saya akan pergi.)',
        'Jauh atau tegas: سَوْفَ نَنْجَحُ. (Kita pasti akan berhasil.)',
        'Negatif: لَنْ + bentuk sekarang subjungtif — لَنْ أَذْهَبَ.',
      ],
      ex: [
        ['سَأَزُورُكَ غَدًا.', 'sa-azuuruka ghadan.', 'Besok saya akan mengunjungimu.'],
        ['سَوْفَ يَعُودُ قَرِيبًا.', 'saufa ya\'uudu qariiban.', 'Dia akan segera kembali.'],
        ['لَنْ أَنْسَى.', 'lan ansaa.', 'Saya tidak akan lupa.'],
      ],
      jebakan: [
        ['سَ كَتَبْتُ', 'سَأَكْتُبُ', 'Awalan سَـ hanya dipasang pada bentuk sekarang.'],
        ['لَا أَذْهَبُ غَدًا', 'لَنْ أَذْهَبَ غَدًا', 'Negatif masa depan memakai لَنْ.'],
      ],
    },
    {
      nama: 'الجذر والوزن',
      namaId: 'Akar & pola',
      rumus: 'akar 3 huruf dimasukkan ke pola I–X',
      inti: 'Mesin utama bahasa Arab. Satu akar menghasilkan banyak kata dengan hubungan makna yang teratur.',
      kapan: [
        'Pola I فَعَلَ — makna dasar: عَلِمَ (mengetahui)',
        'Pola II فَعَّلَ — membuat jadi / intensif: عَلَّمَ (mengajar)',
        'Pola V تَفَعَّلَ — untuk diri sendiri: تَعَلَّمَ (belajar)',
        'Pola X اِسْتَفْعَلَ — meminta: اِسْتَعْلَمَ (meminta keterangan)',
      ],
      ex: [
        ['كَتَبَ — كَاتِب — مَكْتَب — كِتَاب', 'kataba — kaatib — maktab — kitaab', 'menulis — penulis — kantor — buku'],
        ['دَرَسَ — دَرَّسَ — مَدْرَسَة — مُدَرِّس', 'darasa — darrasa — madrasah — mudarris', 'belajar — mengajar — sekolah — pengajar'],
        ['عَمِلَ — عَامِل — مَعْمَل', 'amila — aamil — ma\'mal', 'bekerja — pekerja — pabrik'],
      ],
      jebakan: [
        ['Menghafal tiap kata terpisah', 'Menghafal akarnya', 'Satu akar membuka puluhan kata sekaligus — jauh lebih hemat.'],
      ],
    },
    {
      nama: 'المثنى',
      namaId: 'Bentuk dual',
      rumus: 'kata benda + ـَانِ / ـَيْنِ  ·  kata kerja + ـَا',
      inti: 'Bentuk khusus untuk TEPAT DUA. Tidak ada padanannya di bahasa Indonesia maupun Inggris.',
      kapan: [
        'Dua orang: الطَّالِبَانِ (dua mahasiswa)',
        'Kata kerjanya ikut: كَتَبَا (mereka berdua menulis)',
        'Untuk tiga atau lebih barulah dipakai bentuk jamak.',
      ],
      ex: [
        ['الطَّالِبَانِ يَدْرُسَانِ.', 'ath-thaalibaani yadrusaani.', 'Kedua mahasiswa itu belajar.'],
        ['كِتَابَانِ جَدِيدَانِ.', 'kitaabaani jadiidaani.', 'Dua buku baru.'],
        ['ذَهَبَا إِلَى السُّوق.', 'dzahabaa ila as-suuq.', 'Mereka berdua pergi ke pasar.'],
      ],
      jebakan: [
        ['الطُّلَّاب (untuk dua orang)', 'الطَّالِبَانِ', 'Jamak dipakai mulai dari tiga.'],
      ],
    },
  ],

  tabel: {
    judul: 'كَتَبَ (menulis) — lampau & sekarang',
    kolom: ['Pelaku', 'الماضي (lampau)', 'المضارع (sekarang)', 'Arti'],
    baris: [
      ['أَنَا (saya)',            'كَتَبْتُ',   'أَكْتُبُ',   'saya menulis'],
      ['أَنْتَ (kamu lk)',        'كَتَبْتَ',   'تَكْتُبُ',   'kamu menulis'],
      ['أَنْتِ (kamu pr)',        'كَتَبْتِ',   'تَكْتُبِينَ','kamu menulis'],
      ['هُوَ (dia lk)',           'كَتَبَ',     'يَكْتُبُ',   'dia menulis'],
      ['هِيَ (dia pr)',           'كَتَبَتْ',   'تَكْتُبُ',   'dia menulis'],
      ['هُمَا (mereka berdua)',   'كَتَبَا',    'يَكْتُبَانِ','mereka berdua menulis'],
      ['نَحْنُ (kami)',           'كَتَبْنَا',  'نَكْتُبُ',   'kami menulis'],
      ['هُمْ (mereka lk)',        'كَتَبُوا',   'يَكْتُبُونَ','mereka menulis'],
    ],
  },

  catatan: [
    'Perhatikan baris هُمَا — bentuk dual ini tidak punya padanan sama sekali di bahasa Indonesia; "mereka berdua" kita ungkapkan dengan menambah kata, Arab mengubah bentuknya.',
    'Harakat (fathah, kasrah, dammah) menentukan makna dan sering tidak ditulis dalam teks sehari-hari. Karena itu semua contoh di aplikasi ini diberi harakat penuh.',
    'Kalimat nominal tanpa kata kerja sangat lazim dan benar: هٰذَا بَيْتٌ = "ini rumah". Jangan memaksakan kata kerja "adalah".',
  ],
};
