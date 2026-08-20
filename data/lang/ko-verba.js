/* ── Sistem kata kerja Korea ──────────────────────────────────────
   Korea punya kala yang cukup jelas — lampau, sekarang, depan — dan
   itu bagian yang mudah. Yang berat adalah sumbu kedua: TINGKAT
   BICARA (존댓말). Satu kalimat yang sama harus berganti akhiran
   tergantung siapa lawan bicaranya dan siapa yang sedang dibicarakan.

   Bagi penutur Indonesia sumbu ini sebenarnya tidak asing — kita juga
   membedakan "kamu / Anda / Bapak". Bedanya, di Korea perbedaan itu
   menempel pada KATA KERJANYA dan wajib, bukan pilihan.

   Satu lagi yang khas: ada kata kerja terhormat terpisah untuk orang
   yang dihormati — 먹다 menjadi 드시다, 자다 menjadi 주무시다.          */

export const VERBA = {
  kode: 'ko',
  judul: 'Kala sederhana, kesopanan berlapis',
  ringkas: 'Kalanya hanya tiga dan mudah dibentuk. Yang menuntut latihan adalah tingkat bicara: akhiran kata kerja berubah menurut siapa lawan bicara dan siapa yang dibicarakan.',

  bedaBesar: [
    'Kata kerja SELALU di akhir kalimat, dan bentuk kamusnya (〜다) hampir tidak pernah dipakai apa adanya dalam percakapan.',
    'Tingkat bicara wajib dipilih di tiap kalimat: 해요체 (sopan santai) paling aman bagi pemelajar.',
    'Ada kehormatan ganda: kepada LAWAN BICARA (akhiran) dan kepada ORANG YANG DIBICARAKAN (sisipan 〜시〜).',
    'Kata sifat berkonjugasi seperti kata kerja — 예쁘다 (cantik) berubah persis seperti 먹다 (makan).',
  ],

  sistem: [
    {
      nama: '현재 시제',
      namaId: 'Kala sekarang',
      rumus: 'akar + 아요 / 어요 / 해요  (sopan santai)',
      inti: 'Kebiasaan, keadaan sekarang, dan kebenaran umum. Juga dipakai untuk masa depan dekat yang sudah pasti.',
      kapan: [
        'Kebiasaan: 매일 운동해요. (Saya berolahraga tiap hari.)',
        'Keadaan sekarang: 지금 학교에 있어요.',
        'Rencana dekat yang pasti: 내일 가요. (Besok saya pergi.)',
      ],
      ex: [
        ['저는 매일 한국어를 공부해요.', 'jeoneun maeil hangukeoreul gongbuhaeyo.', 'Saya belajar bahasa Korea tiap hari.'],
        ['지금 밥을 먹어요.', 'jigeum bapeul meokeoyo.', 'Sekarang saya makan.'],
        ['그 책이 재미있어요.', 'geu chaeki jaemiiteoyo.', 'Buku itu menarik.'],
      ],
      jebakan: [
        ['저는 학생이에요를 공부해요.', '저는 학생이에요.', 'Satu kalimat satu kata kerja penutup.'],
        ['먹다요', '먹어요', 'Bentuk kamus 〜다 tidak langsung ditempeli 요.'],
      ],
    },
    {
      nama: '과거 시제',
      namaId: 'Kala lampau',
      rumus: 'akar + 았/었 + 어요',
      inti: 'Peristiwa yang sudah terjadi. Pemilihan 았 atau 었 ditentukan vokal terakhir akar katanya.',
      kapan: [
        'Vokal akar ㅏ atau ㅗ → 았어요: 갔어요, 봤어요',
        'Vokal lain → 었어요: 먹었어요, 마셨어요',
        '하다 → 했어요',
      ],
      ex: [
        ['어제 영화를 봤어요.', 'eoje yeonghwareul bwateoyo.', 'Kemarin saya menonton film.'],
        ['아침을 먹었어요.', 'achimeul meokeoteoyo.', 'Saya sudah sarapan.'],
        ['숙제를 다 했어요.', 'sukjereul da haeteoyo.', 'Saya sudah menyelesaikan semua PR.'],
      ],
      jebakan: [
        ['어제 가요.', '어제 갔어요.', 'Ada keterangan lampau, kata kerjanya harus lampau juga.'],
        ['먹았어요', '먹었어요', 'Vokal ㅓ pada 먹 menuntut 었, bukan 았.'],
      ],
    },
    {
      nama: '미래 시제',
      namaId: 'Kala depan',
      rumus: 'akar + (으)ㄹ 거예요  ·  akar + 겠어요',
      inti: 'Dua bentuk dengan rasa berbeda: 〜ㄹ 거예요 untuk rencana, 〜겠어요 untuk niat mendadak atau dugaan.',
      kapan: [
        'Rencana: 내일 갈 거예요. (Besok saya akan pergi.)',
        'Niat saat itu juga: 제가 하겠습니다. (Biar saya yang kerjakan.)',
        'Dugaan: 맛있겠어요! (Kelihatannya enak!)',
      ],
      ex: [
        ['주말에 부산에 갈 거예요.', 'jumale Busane gal geoyeyo.', 'Akhir pekan saya akan ke Busan.'],
        ['제가 도와드리겠습니다.', 'jega dowadeurigeteumnida.', 'Saya akan membantu Anda.'],
        ['비가 오겠어요.', 'biga ogeteoyo.', 'Sepertinya akan hujan.'],
      ],
      jebakan: [
        ['내일 갈 거예요를 했어요.', '내일 갈 거예요.', 'Bentuk masa depan sudah lengkap sendiri.'],
        ['갈 것이에요 (percakapan)', '갈 거예요', 'Dalam percakapan dipakai bentuk pendeknya.'],
      ],
    },
    {
      nama: '말 단계',
      namaId: 'Tingkat bicara',
      rumus: '합쇼체 〜습니다 · 해요체 〜아요/어요 · 해체 〜아/어',
      inti: 'Menentukan seberapa resmi dan sopan kalimatnya. Salah tingkat lebih terasa daripada salah tata bahasa.',
      kapan: [
        '합쇼체 (paling resmi): pidato, berita, militer, pelanggan.',
        '해요체 (sopan santai): PALING AMAN untuk pemelajar; dipakai hampir di semua keadaan sehari-hari.',
        '해체 (akrab): kepada teman sebaya dekat dan adik.',
      ],
      ex: [
        ['감사합니다.', 'gamsahamnida.', 'Terima kasih. (resmi)'],
        ['고마워요.', 'gomawoyo.', 'Terima kasih. (sopan santai)'],
        ['고마워.', 'gomawo.', 'Makasih. (akrab)'],
      ],
      jebakan: [
        ['선생님, 밥 먹어?', '선생님, 식사하셨어요?', 'Kepada guru dipakai tingkat sopan dan kata kerja terhormat.'],
      ],
    },
    {
      nama: '높임말',
      namaId: 'Kata kerja terhormat',
      rumus: 'sisipan 〜(으)시〜  ·  kata kerja khusus',
      inti: 'Menghormati ORANG YANG DIBICARAKAN, bukan lawan bicara. Beberapa kata kerja punya bentuk terhormat tersendiri.',
      kapan: [
        'Sisipan umum: 가다 → 가시다, 읽다 → 읽으시다',
        'Kata khusus: 먹다 → 드시다, 자다 → 주무시다, 있다 → 계시다, 말하다 → 말씀하시다',
        'TIDAK dipakai untuk diri sendiri.',
      ],
      ex: [
        ['할아버지께서 주무세요.', 'halabeojikkeseo jumuseyo.', 'Kakek sedang tidur.'],
        ['선생님이 오셨어요.', 'seonsaengnimi osyeoteoyo.', 'Guru sudah datang.'],
        ['식사하셨어요?', 'siksahasyeoteoyo?', 'Apakah Anda sudah makan?'],
      ],
      jebakan: [
        ['저는 진지를 드세요.', '저는 밥을 먹어요.', 'Bentuk terhormat tidak dipakai untuk diri sendiri.'],
      ],
    },
  ],

  tabel: {
    judul: 'Satu kata kerja di semua kala & tingkat — 가다 (pergi)',
    kolom: ['Kala', '합쇼체 (resmi)', '해요체 (sopan)', '해체 (akrab)'],
    baris: [
      ['Sekarang',  '갑니다',      '가요',        '가'],
      ['Lampau',    '갔습니다',    '갔어요',      '갔어'],
      ['Depan',     '갈 겁니다',   '갈 거예요',   '갈 거야'],
      ['Negatif',   '안 갑니다',   '안 가요',     '안 가'],
      ['Tanya',     '갑니까?',     '가요?',       '가?'],
      ['Ajakan',    '갑시다',      '가요',        '가자'],
      ['Terhormat', '가십니다',    '가세요',      '—'],
    ],
  },

  catatan: [
    'Pemelajar sebaiknya menguasai kolom 해요체 lebih dulu sampai lancar — ia benar di hampir semua keadaan dan tidak pernah terdengar kasar.',
    'Perhatikan baris Ajakan: di 해요체, bentuk ajakan sama persis dengan bentuk biasa (가요) — nadanya yang membedakan.',
    'Partikel 은/는, 이/가, 을/를 dipilih menurut ada-tidaknya konsonan penutup pada kata sebelumnya, bukan menurut makna.',
  ],
};
