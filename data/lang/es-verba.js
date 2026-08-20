/* ── Sistem kata kerja Spanyol ────────────────────────────────────
   Spanyol berbagi persoalan besar dengan Prancis — dua kala lampau
   yang harus dipilih (pretérito vs imperfecto) — tapi menambahkan satu
   yang khas dan langsung terasa sejak pelajaran pertama: DUA KATA
   KERJA "ADALAH".

   ser dan estar sama-sama berarti "adalah", dan bahasa Indonesia
   bahkan tidak memakai kata itu sama sekali. Memilih yang salah bukan
   cuma janggal — kadang mengubah arti: es aburrido (dia membosankan)
   versus está aburrido (dia sedang bosan).

   Kabar baiknya: kata gantinya boleh dibuang. Karena akhirannya sudah
   menandai pelakunya, "hablo" sudah berarti "saya berbicara" tanpa yo. */

export const VERBA = {
  kode: 'es',
  judul: 'Dua lampau, dua "adalah"',
  ringkas: 'Seperti Prancis, lampaunya ada dua yang harus dipilih. Khas Spanyol: dua kata kerja untuk "adalah" — ser untuk yang tetap, estar untuk yang sementara — dan salah pilih bisa mengubah arti.',

  bedaBesar: [
    'Kata ganti subjek boleh dibuang: akhiran kata kerjanya sudah menandai pelakunya. "Hablo español" tanpa yo sudah lengkap.',
    'Dua kata kerja "adalah": ser (sifat tetap, identitas) vs estar (keadaan sementara, letak).',
    'Dua kala lampau: pretérito (kejadian selesai) vs imperfecto (latar & kebiasaan).',
    'Subjuntivo hidup dan sering dipakai sehari-hari, jauh lebih sering daripada padanannya di Inggris.',
  ],

  sistem: [
    {
      nama: 'Presente',
      namaId: 'Kala sekarang',
      rumus: '-ar: o/as/a/amos/áis/an  ·  -er: o/es/e/emos/éis/en  ·  -ir: o/es/e/imos/ís/en',
      inti: 'Sekarang, kebiasaan, kebenaran umum, dan masa depan dekat.',
      kapan: [
        'Kebiasaan: Trabajo todos los días.',
        'Sekarang: ¿Qué haces?',
        'Masa depan dekat: Mañana salgo temprano.',
      ],
      ex: [
        ['Hablo español un poco.', 'ablo espanyol un poko', 'Saya bisa sedikit bahasa Spanyol.'],
        ['Vivimos en Yakarta.', 'bibimos en yakarta', 'Kami tinggal di Jakarta.'],
        ['¿Dónde trabajas?', 'donde trabahas', 'Kamu bekerja di mana?'],
      ],
      jebakan: [
        ['Yo soy hablo español.', 'Hablo español.', 'Tidak ada kata kerja bantu, dan yo boleh dibuang.'],
        ['Nosotros vivir aquí.', 'Nosotros vivimos aquí.', 'Infinitif harus dikonjugasikan.'],
      ],
    },
    {
      nama: 'ser vs estar',
      namaId: 'Dua kata "adalah"',
      rumus: 'ser: soy/eres/es/somos/sois/son  ·  estar: estoy/estás/está/estamos/estáis/están',
      inti: 'ser untuk identitas & sifat tetap; estar untuk keadaan sementara & letak.',
      kapan: [
        'ser: asal, pekerjaan, sifat, waktu — Soy indonesio. Es médico.',
        'estar: letak, perasaan, keadaan sesaat — Estoy cansado. Está en casa.',
        'Beberapa kata sifat berubah arti: es listo (pintar) vs está listo (siap).',
      ],
      ex: [
        ['Soy estudiante.', 'soy estudiante', 'Saya mahasiswa.'],
        ['Estoy cansado hoy.', 'estoy kansado oy', 'Hari ini saya lelah.'],
        ['La comida está fría.', 'la komida esta fria', 'Makanannya dingin.'],
      ],
      jebakan: [
        ['Soy cansado.', 'Estoy cansado.', 'Lelah adalah keadaan sementara → estar.'],
        ['Estoy indonesio.', 'Soy indonesio.', 'Kebangsaan itu tetap → ser.'],
        ['El café es frío (maksud: sedang dingin)', 'El café está frío.', 'Suhu saat ini → estar.'],
      ],
    },
    {
      nama: 'Pretérito indefinido',
      namaId: 'Lampau peristiwa',
      rumus: '-ar: é/aste/ó/amos/asteis/aron  ·  -er/-ir: í/iste/ió/imos/isteis/ieron',
      inti: 'Peristiwa selesai pada waktu tertentu — yang menggerakkan cerita.',
      kapan: [
        'Kejadian selesai: Ayer comí en un restaurante.',
        'Rangkaian peristiwa: Entró, saludó y se sentó.',
        'Rentang waktu yang tertutup: Viví allí tres años.',
      ],
      ex: [
        ['Ayer fui al mercado.', 'ayer fui al merkado', 'Kemarin saya pergi ke pasar.'],
        ['Comimos a las ocho.', 'komimos a las otyo', 'Kami makan pukul delapan.'],
        ['Ella escribió una carta.', 'eya eskribio una karta', 'Dia menulis sepucuk surat.'],
      ],
      jebakan: [
        ['Ayer comía en un restaurante.', 'Ayer comí en un restaurante.', 'Kejadian sekali & selesai memakai pretérito.'],
        ['Viví allí tres años (masih tinggal)', 'Vivo allí desde hace tres años.', 'Kalau masih berlanjut, bukan pretérito.'],
      ],
    },
    {
      nama: 'Imperfecto',
      namaId: 'Lampau latar',
      rumus: '-ar: aba/abas/aba/ábamos/abais/aban  ·  -er/-ir: ía/ías/ía/íamos/íais/ían',
      inti: 'Latar, kebiasaan lampau, gambaran, dan kegiatan yang sedang berjalan.',
      kapan: [
        'Kebiasaan lampau: Cuando era niño, jugaba al fútbol.',
        'Gambaran: Hacía calor y la calle estaba vacía.',
        'Sedang berjalan saat kejadian lain: Dormía cuando llamaste.',
      ],
      ex: [
        ['Cuando era niño vivía en Bandung.', 'kuando era ninyo bibia en bandung', 'Waktu kecil saya tinggal di Bandung.'],
        ['Llovía toda la mañana.', 'yobia toda la manyana', 'Hujan turun sepanjang pagi.'],
        ['Siempre estudiábamos juntos.', 'siempre estudiabamos huntos', 'Kami selalu belajar bersama.'],
      ],
      jebakan: [
        ['Cuando fui niño…', 'Cuando era niño…', 'Keadaan lampau memakai imperfecto.'],
        ['Ayer llovía todo el día y paró (kejadian tunggal)', 'Ayer llovió todo el día.', 'Rentang tertutup memakai pretérito.'],
      ],
    },
    {
      nama: 'Futuro & condicional',
      namaId: 'Depan & pengandaian',
      rumus: 'futuro: infinitif + é/ás/á/emos/éis/án  ·  condicional: infinitif + ía…',
      inti: 'Akhiran ditempel langsung pada infinitif — salah satu bagian termudah bahasa Spanyol.',
      kapan: [
        'Masa depan: Mañana hablaré con él.',
        'Dugaan sekarang: ¿Dónde estará? (Kira-kira di mana ya dia?)',
        'Pengandaian & kesopanan: Me gustaría un café.',
        'Masa depan dekat sehari-hari lebih sering: ir a + infinitif — Voy a salir.',
      ],
      ex: [
        ['Mañana iré al médico.', 'manyana ire al mediko', 'Besok saya akan ke dokter.'],
        ['Me gustaría un café, por favor.', 'me gustaria un kafe por fabor', 'Saya mau kopi, tolong.'],
        ['Voy a estudiar esta noche.', 'boy a estudiar esta notye', 'Malam ini saya akan belajar.'],
      ],
      jebakan: [
        ['Voy a ir a estudiar.', 'Voy a estudiar.', 'Cukup satu ir.'],
        ['Quiero un café (di restoran)', 'Me gustaría un café.', 'Bentuk pertama terdengar menuntut.'],
      ],
    },
    {
      nama: 'Subjuntivo',
      namaId: 'Modus keinginan & keraguan',
      rumus: 'akar yo presente + akhiran berlawanan (-ar → e, -er/-ir → a)',
      inti: 'Dipakai jauh lebih sering daripada di bahasa Inggris — wajib sesudah banyak ungkapan sehari-hari.',
      kapan: [
        'Keinginan: Quiero que vengas.',
        'Keraguan: No creo que sea verdad.',
        'Masa depan sesudah cuando: Cuando llegues, llámame.',
        'Ungkapan tak pribadi: Es importante que estudies.',
      ],
      ex: [
        ['Espero que estés bien.', 'espero ke estes bien', 'Semoga kamu baik-baik saja.'],
        ['Quiero que me ayudes.', 'kiero ke me ayudes', 'Saya ingin kamu membantu saya.'],
        ['Cuando llegues, avísame.', 'kuando yeges abisame', 'Kalau sudah sampai, kabari saya.'],
      ],
      jebakan: [
        ['Quiero que vienes.', 'Quiero que vengas.', 'Sesudah querer que wajib subjuntivo.'],
        ['Cuando llegas, avísame.', 'Cuando llegues, avísame.', 'cuando untuk masa depan menuntut subjuntivo.'],
      ],
    },
  ],

  tabel: {
    judul: 'hablar (berbicara) — kala pokok',
    kolom: ['Kala', 'Bentuk (yo)', 'Arti'],
    baris: [
      ['Presente',       'hablo',            'saya berbicara'],
      ['Pretérito',      'hablé',            'saya berbicara (selesai)'],
      ['Imperfecto',     'hablaba',          'saya sedang/biasa berbicara'],
      ['Pret. perfecto', 'he hablado',       'saya sudah berbicara'],
      ['Pluscuamperf.',  'había hablado',    'saya telah berbicara (sebelumnya)'],
      ['Futuro',         'hablaré',          'saya akan berbicara'],
      ['Condicional',    'hablaría',         'saya akan berbicara (andai)'],
      ['Subjuntivo',     'que hable',        'agar saya berbicara'],
    ],
  },

  catatan: [
    'Uji cepat ser/estar: kalau sifatnya bisa berubah besok, hampir selalu estar. Kalau menyangkut siapa dia, ser.',
    'Uji cepat pretérito/imperfecto: pretérito menjawab "apa yang terjadi?", imperfecto menjawab "bagaimana keadaannya?".',
    'Kata kerja tak beraturan yang wajib lebih dulu: ser, estar, ir, tener, hacer, poder, querer, decir. Delapan ini paling sering muncul.',
  ],
};
