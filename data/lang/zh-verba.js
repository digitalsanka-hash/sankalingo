/* ── Sistem kata kerja Mandarin ───────────────────────────────────
   Pelajaran terpentingnya justru berupa hal yang TIDAK ADA.

   Mandarin tidak punya kala. Sama sekali. 我吃 bisa berarti "saya
   makan", "saya sudah makan", atau "saya akan makan" — kata kerjanya
   tidak berubah sedikit pun, persis seperti bahasa Indonesia. Yang
   dipakai Mandarin adalah ASPEK: bukan kapan peristiwanya terjadi,
   melainkan bagaimana peristiwanya dipandang — sudah tuntas, pernah
   dialami, atau sedang berlangsung.

   Untuk penutur Indonesia ini kabar baik dan jebakan sekaligus.
   Kabar baiknya: tidak ada konjugasi yang harus dihafal. Jebakannya:
   了 sering dikira "penanda lampau" — padahal ia menandai PERUBAHAN
   atau penyelesaian, dan bisa muncul di kalimat masa depan.           */

export const VERBA = {
  kode: 'zh',
  judul: 'Aspek, bukan kala',
  ringkas: 'Mandarin TIDAK punya kala. Kata kerjanya tidak pernah berubah bentuk. Waktu ditandai kata keterangan, dan yang diubah adalah aspek — bagaimana peristiwanya dipandang.',

  bedaBesar: [
    'Kata kerja Mandarin tidak berubah sama sekali — tidak ada -s, -ed, -ing, tidak ada bentuk kedua atau ketiga.',
    'Waktu disampaikan oleh kata keterangan (昨天 kemarin, 明天 besok), dan cukup disebut SEKALI di awal kalimat.',
    '了 BUKAN penanda lampau. Ia menandai selesainya tindakan atau berubahnya keadaan — termasuk di kalimat masa depan.',
    'Sama seperti bahasa Indonesia dalam hal tidak berkonjugasi, jadi justru lebih mudah daripada bahasa Inggris di titik ini.',
  ],

  sistem: [
    {
      nama: '了 (le) — penyelesaian & perubahan',
      namaId: 'Tuntas atau berubah',
      rumus: 'kata kerja + 了  ·  kalimat + 了',
      inti: 'Menandai tindakan yang tuntas, atau keadaan yang berubah menjadi baru.',
      kapan: [
        'Tindakan yang sudah tuntas: 我吃了饭。 (Saya sudah makan.)',
        'Perubahan keadaan: 下雨了。 (Hujan sudah mulai turun.)',
        'Juga dipakai untuk masa depan yang tuntas: 明天我下班了就去。 (Besok begitu pulang kerja saya langsung pergi.)',
      ],
      ex: [
        ['我买了三本书。', 'wǒ mǎi le sān běn shū.', 'Saya membeli tiga buku.'],
        ['他走了。', 'tā zǒu le.', 'Dia sudah pergi.'],
        ['天黑了。', 'tiān hēi le.', 'Hari sudah gelap.'],
      ],
      jebakan: [
        ['我昨天了去。', '我昨天去了。', '了 menempel pada kata kerjanya, bukan pada keterangan waktu.'],
        ['我每天吃了饭。', '我每天吃饭。', 'Kebiasaan berulang tidak memakai 了.'],
      ],
    },
    {
      nama: '过 (guo) — pengalaman',
      namaId: 'Pernah mengalami',
      rumus: 'kata kerja + 过',
      inti: 'Pernah mengalami sesuatu, setidaknya sekali — mirip present perfect Inggris untuk pengalaman.',
      kapan: [
        'Pengalaman hidup: 我去过北京。 (Saya pernah ke Beijing.)',
        'Bentuk negatifnya memakai 没: 我没去过。 (Saya belum pernah pergi.)',
      ],
      ex: [
        ['我吃过北京烤鸭。', 'wǒ chī guo Běijīng kǎoyā.', 'Saya pernah makan bebek peking.'],
        ['你去过中国吗？', 'nǐ qù guo Zhōngguó ma?', 'Kamu pernah ke Tiongkok?'],
        ['我没看过这部电影。', 'wǒ méi kàn guo zhè bù diànyǐng.', 'Saya belum pernah menonton film ini.'],
      ],
      jebakan: [
        ['我不去过。', '我没去过。', 'Bentuk negatif untuk pengalaman memakai 没, bukan 不.'],
        ['我去过了北京。', '我去过北京。', '过 dan 了 tidak digabung untuk menyatakan pengalaman.'],
      ],
    },
    {
      nama: '在 / 正在 (zài) — sedang berlangsung',
      namaId: 'Sedang',
      rumus: '在 / 正在 + kata kerja  (+ 呢 di akhir)',
      inti: 'Tindakan yang sedang berjalan saat itu — setara present/past continuous, tapi tanpa menyebut waktunya.',
      kapan: [
        'Sedang berjalan sekarang: 我在吃饭。 (Saya sedang makan.)',
        'Sedang berjalan di masa lalu — kata kerjanya tetap sama: 昨天他在睡觉。',
      ],
      ex: [
        ['我在看书。', 'wǒ zài kàn shū.', 'Saya sedang membaca buku.'],
        ['他们正在开会呢。', 'tāmen zhèngzài kāihuì ne.', 'Mereka sedang rapat.'],
        ['昨天八点我在做饭。', 'zuótiān bā diǎn wǒ zài zuòfàn.', 'Kemarin pukul delapan saya sedang memasak.'],
      ],
      jebakan: [
        ['我在吃了饭。', '我在吃饭。', '在 (sedang) dan 了 (tuntas) bertentangan, tidak dipakai bersama.'],
      ],
    },
    {
      nama: '着 (zhe) — keadaan yang bertahan',
      namaId: 'Dalam keadaan',
      rumus: 'kata kerja + 着',
      inti: 'Bukan tindakan yang berjalan, melainkan KEADAAN yang bertahan sesudah tindakannya.',
      kapan: [
        'Keadaan yang menetap: 门开着。 (Pintunya dalam keadaan terbuka.)',
        'Dua hal berbarengan: 他站着说话。 (Dia berbicara sambil berdiri.)',
      ],
      ex: [
        ['门开着。', 'mén kāi zhe.', 'Pintunya terbuka.'],
        ['她穿着红衣服。', 'tā chuān zhe hóng yīfu.', 'Dia mengenakan baju merah.'],
        ['他笑着说。', 'tā xiào zhe shuō.', 'Dia berkata sambil tersenyum.'],
      ],
      jebakan: [
        ['门在开。', '门开着。', '在 untuk tindakan berjalan; 着 untuk keadaan yang bertahan.'],
      ],
    },
    {
      nama: '要 / 会 / 将 — masa depan',
      namaId: 'Akan',
      rumus: '要 / 会 / 将 + kata kerja',
      inti: 'Masa depan ditandai kata bantu, bukan bentuk kata kerja. 要 = akan segera/berniat, 会 = akan (kemungkinan), 将 = akan (resmi).',
      kapan: [
        'Niat & rencana dekat: 我要走了。 (Saya mau pergi.)',
        'Ramalan atau kemungkinan: 明天会下雨。 (Besok akan hujan.)',
        'Ragam resmi & tulisan: 会议将于明天举行。',
      ],
      ex: [
        ['我明天要去上海。', 'wǒ míngtiān yào qù Shànghǎi.', 'Besok saya akan ke Shanghai.'],
        ['他会来吗？', 'tā huì lái ma?', 'Apakah dia akan datang?'],
        ['明天会更冷。', 'míngtiān huì gèng lěng.', 'Besok akan lebih dingin.'],
      ],
      jebakan: [
        ['我明天去了。', '我明天要去。', '了 tidak dipakai untuk menyatakan rencana masa depan yang belum tuntas.'],
      ],
    },
  ],

  tabel: {
    judul: 'Satu kata kerja, semua waktu — 吃 (chī, makan)',
    kolom: ['Maksud', 'Mandarin', 'Pinyin', 'Indonesia'],
    baris: [
      ['Kebiasaan',      '我每天吃米饭。', 'wǒ měitiān chī mǐfàn.',   'Saya makan nasi setiap hari.'],
      ['Sedang',         '我在吃饭。',     'wǒ zài chīfàn.',          'Saya sedang makan.'],
      ['Tuntas',         '我吃了。',       'wǒ chī le.',              'Saya sudah makan.'],
      ['Pernah',         '我吃过。',       'wǒ chī guo.',             'Saya pernah memakannya.'],
      ['Akan',           '我要吃。',       'wǒ yào chī.',             'Saya akan makan.'],
      ['Kemarin',        '我昨天吃了。',   'wǒ zuótiān chī le.',      'Kemarin saya makan.'],
      ['Belum',          '我还没吃。',     'wǒ hái méi chī.',         'Saya belum makan.'],
    ],
  },

  catatan: [
    'Perhatikan tabel di atas: kata 吃 TIDAK berubah sedikit pun di seluruh baris. Yang berubah hanya kata di sekitarnya.',
    'Negatif: 不 untuk kebiasaan dan masa depan, 没 untuk yang sudah/belum terjadi. Salah pilih mengubah artinya.',
    'Kalau keterangan waktunya sudah jelas (昨天, 明天), penanda aspeknya sering tidak diperlukan lagi.',
  ],
};
