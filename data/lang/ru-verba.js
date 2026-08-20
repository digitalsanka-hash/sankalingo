/* ── Sistem kata kerja Rusia ──────────────────────────────────────
   Rusia hanya punya TIGA kala — lampau, sekarang, depan. Lebih sedikit
   daripada Inggris. Tapi itu justru menyesatkan, karena sumbu utamanya
   bukan kala melainkan ASPEK (вид).

   Hampir setiap kata kerja Rusia hidup BERPASANGAN: satu tidak tuntas
   (несовершенный) dan satu tuntas (совершенный). Bukan dua bentuk dari
   satu kata — dua kata yang harus dihafal berdua, seperti menghafal
   "makan" dan "menghabiskan" sebagai satu pasangan.

   Akibat yang mengejutkan: kata kerja tuntas TIDAK PUNYA bentuk
   sekarang. Kalau dikonjugasikan seperti bentuk sekarang, artinya
   justru masa depan.                                                   */

export const VERBA = {
  kode: 'ru',
  judul: 'Aspek: sumbu yang lebih penting daripada kala',
  ringkas: 'Rusia cuma punya tiga kala, tapi tiap kata kerja punya DUA ASPEK yang harus dihafal berpasangan. Kata kerja tuntas tidak punya bentuk sekarang — konjugasi "sekarang"-nya justru bermakna masa depan.',

  bedaBesar: [
    'Aspek harus dipilih di SETIAP kalimat. Tidak ada pilihan netral — bahasa Indonesia tidak punya sumbu ini sama sekali.',
    'Kata kerja tuntas tidak punya bentuk sekarang: я напишу berarti "saya akan menulis (sampai selesai)", bukan "saya menulis".',
    'Bentuk lampau tidak berubah menurut orang, tapi berubah menurut JENIS KELAMIN dan jumlah: он читал / она читала / они читали.',
    'Kata kerja gerak punya lapisan tambahan: идти (satu arah) vs ходить (berulang / bolak-balik).',
  ],

  sistem: [
    {
      nama: 'Несовершенный вид',
      namaId: 'Aspek tidak tuntas',
      rumus: 'proses · kebiasaan · pengulangan · tanpa memandang selesai',
      inti: 'Memandang peristiwa sebagai proses atau kebiasaan. Tidak mempersoalkan apakah selesai.',
      kapan: [
        'Kebiasaan: Я каждый день читаю. (Saya membaca tiap hari.)',
        'Proses yang berjalan: Вчера я читал весь вечер. (Kemarin saya membaca sepanjang malam.)',
        'Sesudah начать, продолжать, кончить selalu aspek ini.',
        'Bentuk larangan: Не читай! (Jangan membaca!)',
      ],
      ex: [
        ['Я читал книгу вчера.', 'Ya cital knigu vcera.', 'Kemarin saya membaca buku (prosesnya).'],
        ['Она каждый день пишет письма.', 'Ona kazydyy den pisyet pisma.', 'Dia menulis surat setiap hari.'],
        ['Мы смотрели фильм два часа.', 'My smotreli film dva casa.', 'Kami menonton film dua jam.'],
      ],
      jebakan: [
        ['Я прочитал каждый день.', 'Я читал каждый день.', 'Kebiasaan berulang memakai aspek tidak tuntas.'],
        ['Не напиши!', 'Не пиши!', 'Larangan memakai aspek tidak tuntas.'],
      ],
    },
    {
      nama: 'Совершенный вид',
      namaId: 'Aspek tuntas',
      rumus: 'satu kali · selesai · ada hasilnya',
      inti: 'Memandang peristiwa sebagai satu kesatuan yang tuntas dan berhasil.',
      kapan: [
        'Selesai dengan hasil: Я прочитал книгу. (Bukunya habis saya baca.)',
        'Kejadian sekali: Он написал письмо. (Dia menulis surat itu sampai jadi.)',
        'Rangkaian kejadian berurutan dalam cerita.',
      ],
      ex: [
        ['Я прочитал книгу.', 'Ya procital knigu.', 'Saya sudah membaca bukunya sampai habis.'],
        ['Он написал письмо и ушёл.', 'On napisal pismo i usyol.', 'Dia menulis surat lalu pergi.'],
        ['Она купила хлеб.', 'Ona kupila khleb.', 'Dia membeli roti.'],
      ],
      jebakan: [
        ['Я прочитаю сейчас.', 'Я читаю сейчас.', 'Aspek tuntas tidak punya makna "sedang sekarang".'],
        ['Я два часа прочитал.', 'Я два часа читал.', 'Lamanya waktu menuntut aspek tidak tuntas.'],
      ],
    },
    {
      nama: 'Прошедшее время',
      namaId: 'Kala lampau',
      rumus: 'akar + л / ла / ло / ли',
      inti: 'Satu-satunya kala yang berubah menurut jenis kelamin dan jumlah, bukan menurut orang.',
      kapan: [
        'Laki-laki: он читал · Perempuan: она читала',
        'Netral: оно читало · Jamak: они читали',
        'Berlaku untuk kedua aspek: читал (proses) vs прочитал (tuntas).',
      ],
      ex: [
        ['Он работал вчера.', 'On rabotal vcera.', 'Dia (lk) bekerja kemarin.'],
        ['Она работала вчера.', 'Ona rabotala vcera.', 'Dia (pr) bekerja kemarin.'],
        ['Мы работали вчера.', 'My rabotali vcera.', 'Kami bekerja kemarin.'],
      ],
      jebakan: [
        ['Она читал книгу.', 'Она читала книгу.', 'Bentuk lampau harus cocok dengan jenis kelamin subjeknya.'],
        ['Я читала (kata penutur laki-laki)', 'Я читал', 'Untuk "я", akhirannya mengikuti jenis kelamin penuturnya sendiri.'],
      ],
    },
    {
      nama: 'Будущее время',
      namaId: 'Kala depan',
      rumus: 'tidak tuntas: буду + infinitif  ·  tuntas: konjugasi biasa',
      inti: 'Dua cara membentuk masa depan, dan pilihannya ditentukan aspek — bukan selera.',
      kapan: [
        'Tidak tuntas (majemuk): Я буду читать. (Saya akan membaca / sedang membaca nanti.)',
        'Tuntas (sederhana): Я прочитаю. (Saya akan membacanya sampai habis.)',
      ],
      ex: [
        ['Завтра я буду работать.', 'Zavtra ya budu rabotat.', 'Besok saya akan bekerja.'],
        ['Я напишу письмо завтра.', 'Ya napisyu pismo zavtra.', 'Besok saya akan menulis suratnya (sampai jadi).'],
        ['Мы будем смотреть фильм.', 'My budem smotret film.', 'Kami akan menonton film.'],
      ],
      jebakan: [
        ['Я буду прочитать.', 'Я прочитаю.', 'буду hanya dipakai dengan aspek tidak tuntas.'],
        ['Я буду написать письмо.', 'Я напишу письмо.', 'Sama: aspek tuntas tidak memakai буду.'],
      ],
    },
    {
      nama: 'Глаголы движения',
      namaId: 'Kata kerja gerak',
      rumus: 'идти (satu arah, sekali)  ·  ходить (berulang, bolak-balik)',
      inti: 'Lapisan tambahan khas Rusia: arah dan keberulangan gerakan ikut menentukan kata kerjanya.',
      kapan: [
        'Satu arah sekarang: Я иду в школу. (Saya sedang berjalan ke sekolah.)',
        'Kebiasaan/bolak-balik: Я хожу в школу каждый день.',
        'Sama untuk: ехать/ездить (berkendara), лететь/летать (terbang), нести/носить (membawa).',
      ],
      ex: [
        ['Я иду домой.', 'Ya idu domoy.', 'Saya sedang berjalan pulang.'],
        ['Я хожу в спортзал три раза в неделю.', 'Ya khozyu v sportzal tri raza v nedelyu.', 'Saya ke gym tiga kali sepekan.'],
        ['Мы едем в Москву.', 'My yedem v Moskvu.', 'Kami sedang menuju Moskwa.'],
      ],
      jebakan: [
        ['Я хожу в школу сейчас.', 'Я иду в школу сейчас.', 'Sedang berjalan satu arah memakai идти.'],
      ],
    },
  ],

  tabel: {
    judul: 'Satu pasangan aspek di semua kala — писать / написать (menulis)',
    kolom: ['Kala', 'Tidak tuntas', 'Tuntas', 'Beda maknanya'],
    baris: [
      ['Sekarang', 'я пишу',          '— tidak ada —',   'Aspek tuntas tak punya bentuk sekarang'],
      ['Lampau',   'я писал',         'я написал',       'sedang menulis / selesai menulis'],
      ['Depan',    'я буду писать',   'я напишу',        'akan menulis / akan selesai menulis'],
      ['Perintah', 'пиши!',           'напиши!',         'menulislah / selesaikan menulisnya'],
      ['Larangan', 'не пиши!',        '— hampir tak dipakai —', 'Larangan selalu tidak tuntas'],
    ],
  },

  catatan: [
    'Kolom "Sekarang" pada aspek tuntas sengaja kosong — itu bukan kelalaian, memang tidak ada. Konjugasi напишу terlihat seperti bentuk sekarang tapi bermakna masa depan.',
    'Hafalkan kata kerja BERPASANGAN sejak awal: делать/сделать, читать/прочитать, покупать/купить. Menghafal satu saja berarti setengah kata.',
    'Awalan (при-, у-, вы-, пере-) sering mengubah aspek sekaligus maknanya: писать → переписать (menulis ulang).',
  ],
};
