/* ── Sistem kata kerja Jepang ─────────────────────────────────────
   Kejutan pertamanya: bahasa Jepang TIDAK PUNYA KALA MASA DEPAN.
   Hanya ada dua, lampau dan bukan-lampau. 行きます berarti "pergi" dan
   "akan pergi" sekaligus; yang membedakan hanya keterangan waktunya.

   Kejutan kedua: yang berubah pada kata kerja Jepang bukan hanya waktu,
   tapi juga TINGKAT KESOPANAN — dan bagi pendengar Jepang, salah
   tingkat kesopanan jauh lebih terasa daripada salah waktu. Karena itu
   dua sumbu ini diajarkan bersama, tidak terpisah.                     */

export const VERBA = {
  kode: 'ja',
  judul: 'Dua kala, dua tingkat kesopanan',
  ringkas: 'Jepang hanya punya LAMPAU dan BUKAN-LAMPAU — tidak ada kala masa depan. Tapi tiap kata kerja punya dua ragam: sopan (です・ます) dan biasa. Memilih ragam yang salah lebih terasa daripada salah waktu.',

  bedaBesar: [
    'Tidak ada kala masa depan: 明日行きます (besok pergi) memakai bentuk yang sama dengan 毎日行きます (setiap hari pergi).',
    'Kata kerja SELALU di akhir kalimat. Urutannya Subjek–Objek–Kata kerja, bukan S-P-O seperti bahasa Indonesia.',
    'Kesopanan menempel pada kata kerjanya: ます sopan, る biasa. Bukan pilihan gaya — salah pakai terasa kasar atau kaku.',
    'Kata kerja dibagi tiga golongan (I, II, tak beraturan) yang menentukan cara berubahnya.',
  ],

  sistem: [
    {
      nama: 'Bukan-lampau (辞書形 / ます形)',
      namaId: 'Sekarang & masa depan',
      rumus: 'ragam biasa: 〜る  ·  ragam sopan: 〜ます',
      inti: 'Satu bentuk untuk kebiasaan, kebenaran umum, DAN masa depan. Waktunya ditentukan keterangan.',
      kapan: [
        'Kebiasaan: 毎朝コーヒーを飲みます。',
        'Masa depan: 明日東京へ行きます。',
        'Kebenaran umum: 水は百度で沸きます。',
      ],
      ex: [
        ['毎日日本語を勉強します。', 'mainichi nihongo o benkyoushimasu.', 'Saya belajar bahasa Jepang setiap hari.'],
        ['明日友達に会います。', 'ashita tomodachi ni aimasu.', 'Besok saya bertemu teman.'],
        ['彼は毎晩本を読む。', 'kare wa maiban hon o yomu.', 'Dia membaca buku tiap malam.'],
      ],
      jebakan: [
        ['明日行きますでしょう。', '明日行きます。', 'Tidak perlu penanda masa depan tambahan; bentuknya sudah mencakupnya.'],
        ['私は食べますご飯を。', '私はご飯を食べます。', 'Kata kerja wajib di akhir kalimat.'],
      ],
    },
    {
      nama: 'Lampau (〜ました / 〜た)',
      namaId: 'Lampau',
      rumus: 'sopan: 〜ました  ·  biasa: 〜た',
      inti: 'Peristiwa yang sudah terjadi, atau keadaan yang sudah tercapai.',
      kapan: [
        'Kejadian selesai: 昨日映画を見ました。',
        'Bentuk negatif lampau: 〜ませんでした / 〜なかった.',
      ],
      ex: [
        ['昨日映画を見ました。', 'kinou eiga o mimashita.', 'Kemarin saya menonton film.'],
        ['朝ご飯を食べませんでした。', 'asagohan o tabemasen deshita.', 'Saya tidak sarapan.'],
        ['彼は先週来た。', 'kare wa senshuu kita.', 'Dia datang pekan lalu.'],
      ],
      jebakan: [
        ['昨日行きませんした。', '昨日行きませんでした。', 'Negatif lampau sopan: ませんでした.'],
        ['昨日食べました、そして今も食べています。', '今も食べています。', 'Lampau menutup peristiwanya; kalau masih berlangsung pakai ています.'],
      ],
    },
    {
      nama: 'て形 + いる',
      namaId: 'Sedang / keadaan',
      rumus: 'bentuk て + いる (sopan: ています)',
      inti: 'Dua makna sekaligus: sedang berlangsung, ATAU keadaan yang bertahan sesudah tindakannya. Mana yang berlaku tergantung kata kerjanya.',
      kapan: [
        'Sedang berlangsung: 今、本を読んでいます。',
        'Keadaan yang bertahan: 結婚しています。 (sudah menikah, dan masih)',
        'Kebiasaan yang berulang lama: 銀行で働いています。',
      ],
      ex: [
        ['今、雨が降っています。', 'ima, ame ga futte imasu.', 'Sekarang sedang hujan.'],
        ['母は台所にいます。', 'haha wa daidokoro ni imasu.', 'Ibu ada di dapur.'],
        ['東京に住んでいます。', 'Toukyou ni sunde imasu.', 'Saya tinggal di Tokyo.'],
      ],
      jebakan: [
        ['私は結婚しました、今も。', '私は結婚しています。', '"Sudah menikah dan masih" memakai ています, bukan lampau.'],
        ['読んている', '読んでいる', 'Bentuk て dari 読む adalah 読んで.'],
      ],
    },
    {
      nama: 'Golongan kata kerja',
      namaId: 'Tiga golongan',
      rumus: 'Gol. I: 〜u  ·  Gol. II: 〜iru / 〜eru  ·  Tak beraturan: する, 来る',
      inti: 'Cara satu kata kerja berubah ditentukan golongannya. Ini yang harus dikenali lebih dulu sebelum menghafal bentuk.',
      kapan: [
        'Golongan I (五段): 書く→書きます, 飲む→飲みます, 話す→話します',
        'Golongan II (一段): 食べる→食べます, 見る→見ます',
        'Tak beraturan: する→します, 来る→来ます',
      ],
      ex: [
        ['書く → 書きます → 書いた', 'kaku → kakimasu → kaita', 'menulis'],
        ['食べる → 食べます → 食べた', 'taberu → tabemasu → tabeta', 'makan'],
        ['する → します → した', 'suru → shimasu → shita', 'melakukan'],
      ],
      jebakan: [
        ['帰る adalah golongan II karena berakhiran える', '帰る golongan I', 'Beberapa kata berakhiran いる/える tetap golongan I: 帰る, 入る, 走る, 知る.'],
      ],
    },
    {
      nama: 'Ragam sopan vs biasa',
      namaId: 'Kepada siapa berbicara',
      rumus: 'ます形 kepada orang luar & atasan  ·  辞書形 kepada teman & keluarga',
      inti: 'Sumbu kedua yang sama pentingnya dengan waktu. Pemelajar sebaiknya menguasai ragam sopan lebih dulu — aman di semua keadaan.',
      kapan: [
        'Sopan: kepada orang yang baru dikenal, atasan, pelanggan.',
        'Biasa: kepada teman dekat, keluarga, dan di dalam pikiran sendiri.',
        'Di satu percakapan, jangan berganti-ganti ragam tanpa alasan.',
      ],
      ex: [
        ['行きます / 行く', 'ikimasu / iku', 'pergi (sopan / biasa)'],
        ['食べません / 食べない', 'tabemasen / tabenai', 'tidak makan (sopan / biasa)'],
        ['来ました / 来た', 'kimashita / kita', 'datang (sopan / biasa)'],
      ],
      jebakan: [
        ['先生、明日来る？', '先生、明日来ますか。', 'Kepada guru dipakai ragam sopan.'],
      ],
    },
  ],

  tabel: {
    judul: 'Empat bentuk pokok — 食べる (taberu, makan)',
    kolom: ['Bentuk', 'Sopan', 'Biasa', 'Arti'],
    baris: [
      ['Bukan-lampau positif', '食べます',        '食べる',   'makan / akan makan'],
      ['Bukan-lampau negatif', '食べません',      '食べない', 'tidak makan'],
      ['Lampau positif',       '食べました',      '食べた',   'sudah makan'],
      ['Lampau negatif',       '食べませんでした','食べなかった','tidak makan (dulu)'],
      ['Sedang',               '食べています',    '食べている','sedang makan'],
      ['Ajakan',               '食べましょう',    '食べよう', 'mari makan'],
      ['Ingin',                '食べたいです',    '食べたい', 'ingin makan'],
    ],
  },

  catatan: [
    'Perhatikan: tidak ada satu baris pun untuk "akan makan" — bentuk bukan-lampau sudah mencakupnya.',
    'Bentuk て adalah kunci: dari sana lahir ています (sedang), てください (tolong), てもいい (boleh), dan banyak lagi. Menghafalnya lebih dulu sangat menghemat waktu.',
    'Partikel は・が・を・に・で menentukan peran kata dalam kalimat, dan tidak bisa ditebak dari bahasa Indonesia — harus dipelajari bersama kata kerjanya.',
  ],
};
