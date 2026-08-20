/* ── Sistem kata kerja Jerman ─────────────────────────────────────
   Jerman punya enam kala, tapi yang paling sering membingungkan
   pemelajar justru bukan jumlahnya melainkan LETAK kata kerjanya.

   Aturan yang mengatur hampir seluruh kalimat Jerman: kata kerja
   berkonjugasi selalu di POSISI KEDUA pada kalimat berita — apa pun
   yang berada di posisi pertama. Kalau keterangan waktu dimajukan ke
   depan, subjeknya harus mundur ke belakang kata kerja. Bagi penutur
   Indonesia ini terasa terbalik dan butuh latihan sadar.

   Dan bila kalimatnya memakai kata kerja kedua (modal, Perfekt, masa
   depan), kata kerja itu terlempar ke UJUNG kalimat — kadang jauh
   sekali dari pasangannya. Inilah "kurung kata kerja" (Satzklammer).  */

export const VERBA = {
  kode: 'de',
  judul: 'Enam kala, dan hukum posisi kedua',
  ringkas: 'Kalanya enam, tapi yang menentukan benar-salahnya kalimat adalah LETAK: kata kerja berkonjugasi selalu di posisi kedua, dan kata kerja kedua terlempar ke ujung kalimat.',

  bedaBesar: [
    'Kata kerja berkonjugasi WAJIB di posisi kedua kalimat berita. Kalau depannya diisi keterangan, subjeknya pindah ke belakang kata kerja.',
    'Perfekt (haben/sein + Partizip II) dipakai untuk BERBICARA; Präteritum lebih untuk tulisan dan cerita. Bukan beda makna, beda ragam.',
    'Beberapa kata kerja memisahkan diri: aufstehen → ich stehe früh auf. Awalannya terbang ke ujung kalimat.',
    'Kata kerja gerak & perubahan keadaan memakai sein, bukan haben, di Perfekt: ich bin gegangen.',
  ],

  sistem: [
    {
      nama: 'Präsens',
      namaId: 'Kala sekarang',
      rumus: 'akar + e/st/t/en/t/en',
      inti: 'Sekarang, kebiasaan, kebenaran umum — DAN masa depan yang jelas dari keterangan waktunya.',
      kapan: [
        'Kebiasaan: Ich arbeite jeden Tag.',
        'Sekarang: Was machst du?',
        'Masa depan dengan keterangan: Morgen fahre ich nach Berlin.',
      ],
      ex: [
        ['Ich lerne Deutsch.', 'ikh lerne doytsy', 'Saya belajar bahasa Jerman.'],
        ['Er arbeitet in Berlin.', 'er arbaitet in berlin', 'Dia bekerja di Berlin.'],
        ['Morgen fahren wir nach München.', 'morgen faren vir nakh myunkhen', 'Besok kami pergi ke München.'],
      ],
      jebakan: [
        ['Morgen ich fahre nach Berlin.', 'Morgen fahre ich nach Berlin.', 'Kata kerja tetap di posisi kedua; subjeknya yang mundur.'],
        ['Er arbeite hier.', 'Er arbeitet hier.', 'Orang ketiga tunggal berakhiran -t.'],
      ],
    },
    {
      nama: 'Perfekt',
      namaId: 'Lampau percakapan',
      rumus: 'haben / sein + Partizip II (di ujung kalimat)',
      inti: 'Bentuk lampau yang dipakai saat BERBICARA. Inilah yang harus dikuasai lebih dulu.',
      kapan: [
        'Hampir semua percakapan lampau: Ich habe gegessen.',
        'Kata kerja gerak & perubahan keadaan memakai sein: Ich bin gefahren.',
        'Partizip II biasanya ge- + akar + -t (beraturan) atau -en (tak beraturan).',
      ],
      ex: [
        ['Ich habe einen Film gesehen.', 'ikh habe ainen film gezeen', 'Saya sudah menonton film.'],
        ['Wir sind nach Berlin gefahren.', 'vir zint nakh berlin gefaren', 'Kami pergi ke Berlin.'],
        ['Hast du schon gegessen?', 'hast du syon gegesen', 'Kamu sudah makan?'],
      ],
      jebakan: [
        ['Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', 'Kata kerja gerak memakai sein.'],
        ['Ich habe gesehen einen Film.', 'Ich habe einen Film gesehen.', 'Partizip II harus di ujung kalimat.'],
      ],
    },
    {
      nama: 'Präteritum',
      namaId: 'Lampau tulisan',
      rumus: 'akar + te (beraturan)  ·  perubahan vokal (tak beraturan)',
      inti: 'Lampau untuk tulisan, berita, dan cerita. Dalam percakapan hanya dipakai untuk sein, haben, dan modal.',
      kapan: [
        'Cerita & tulisan: Er ging nach Hause.',
        'Selalu dipakai walau lisan: war, hatte, konnte, musste, wollte.',
      ],
      ex: [
        ['Ich war gestern krank.', 'ikh var gestern krank', 'Kemarin saya sakit.'],
        ['Sie hatte keine Zeit.', 'zi hate kaine tsait', 'Dia tidak punya waktu.'],
        ['Er ging langsam nach Hause.', 'er ging langzam nakh hauze', 'Dia berjalan pelan pulang.'],
      ],
      jebakan: [
        ['Ich habe gestern krank gewesen.', 'Ich war gestern krank.', 'sein lebih lazim dalam Präteritum walau lisan.'],
        ['Ich habe gekonnt schwimmen.', 'Ich konnte schwimmen.', 'Modal dipakai dalam Präteritum.'],
      ],
    },
    {
      nama: 'Futur I',
      namaId: 'Kala depan',
      rumus: 'werden + infinitif (di ujung kalimat)',
      inti: 'Masa depan yang ditegaskan, ramalan, dan janji. Untuk masa depan biasa, Präsens lebih lazim.',
      kapan: [
        'Ramalan: Es wird morgen regnen.',
        'Janji tegas: Ich werde dir helfen.',
        'Untuk masa depan sehari-hari orang Jerman lebih sering memakai Präsens + keterangan waktu.',
      ],
      ex: [
        ['Ich werde dir helfen.', 'ikh verde dir helfen', 'Saya akan membantumu.'],
        ['Es wird bald regnen.', 'es virt balt regnen', 'Sebentar lagi akan hujan.'],
        ['Wir werden das schaffen.', 'vir verden das syafen', 'Kita akan berhasil.'],
      ],
      jebakan: [
        ['Ich werde helfen dir.', 'Ich werde dir helfen.', 'Infinitif di ujung kalimat.'],
        ['Ich will morgen kommen (maksud: akan)', 'Ich werde morgen kommen.', 'wollen berarti "mau", bukan "akan".'],
      ],
    },
    {
      nama: 'Trennbare Verben',
      namaId: 'Kata kerja terpisah',
      rumus: 'awalan terbang ke ujung kalimat',
      inti: 'Kata kerja seperti aufstehen, anrufen, einkaufen terbelah dua saat dipakai.',
      kapan: [
        'Präsens: Ich stehe um sechs auf.',
        'Perfekt: Ich bin um sechs aufgestanden. (ge- masuk di tengah)',
        'Awalan yang lazim memisah: auf-, an-, aus-, ein-, mit-, zu-, ab-.',
      ],
      ex: [
        ['Ich rufe dich später an.', 'ikh rufe dikh syperter an', 'Saya akan meneleponmu nanti.'],
        ['Wir kaufen heute ein.', 'vir kaufen hoyte ain', 'Hari ini kami berbelanja.'],
        ['Der Zug kommt um acht an.', 'der tsuk komt um akht an', 'Keretanya tiba pukul delapan.'],
      ],
      jebakan: [
        ['Ich anrufe dich.', 'Ich rufe dich an.', 'Awalannya harus dipisah dan diletakkan di ujung.'],
        ['Ich habe angerufen dich.', 'Ich habe dich angerufen.', 'Partizip di ujung, objek sebelum itu.'],
      ],
    },
    {
      nama: 'Konjunktiv II',
      namaId: 'Pengandaian & kesopanan',
      rumus: 'würde + infinitif  ·  wäre, hätte, könnte',
      inti: 'Untuk pengandaian, saran, dan permintaan sopan. Sangat sering dipakai sehari-hari.',
      kapan: [
        'Pengandaian: Wenn ich Zeit hätte, würde ich kommen.',
        'Permintaan sopan: Könnten Sie mir helfen?',
        'Saran: Ich würde das nicht machen.',
      ],
      ex: [
        ['Ich hätte gern einen Kaffee.', 'ikh hete gern ainen kafe', 'Saya mau kopi. (sopan)'],
        ['Könnten Sie mir helfen?', 'kynten zi mir helfen', 'Bisakah Anda membantu saya?'],
        ['Wenn ich reich wäre, würde ich reisen.', 'ven ikh raikh vere, vyurde ikh raizen', 'Kalau saya kaya, saya akan bepergian.'],
      ],
      jebakan: [
        ['Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Bentuk pertama terdengar menuntut.'],
        ['Wenn ich Zeit habe, würde ich kommen.', 'Wenn ich Zeit hätte, würde ich kommen.', 'Kedua sisinya memakai Konjunktiv.'],
      ],
    },
  ],

  tabel: {
    judul: 'lernen (belajar) — enam kala',
    kolom: ['Kala', 'Bentuk', 'Arti'],
    baris: [
      ['Präsens',        'ich lerne',                 'saya belajar'],
      ['Perfekt',        'ich habe gelernt',          'saya sudah belajar (lisan)'],
      ['Präteritum',     'ich lernte',                'saya belajar (tulisan)'],
      ['Plusquamperfekt','ich hatte gelernt',         'saya telah belajar (sebelum kejadian lain)'],
      ['Futur I',        'ich werde lernen',          'saya akan belajar'],
      ['Futur II',       'ich werde gelernt haben',   'saya akan sudah belajar'],
      ['Konjunktiv II',  'ich würde lernen',          'saya akan belajar (andai)'],
    ],
  },

  catatan: [
    'Urutan belajar yang paling menghemat waktu: Präsens → Perfekt → Präteritum untuk sein/haben/modal → Konjunktiv II. Futur II hampir tidak pernah dibutuhkan.',
    'Kata kerja berkonjugasi di posisi kedua; kata kerja kedua di ujung. Dua aturan ini menjelaskan sebagian besar kesalahan urutan kata.',
    'Setelah kata sambung weil, dass, wenn, obwohl — kata kerjanya pindah ke UJUNG anak kalimat: Ich bleibe zu Hause, weil ich krank bin.',
  ],
};
