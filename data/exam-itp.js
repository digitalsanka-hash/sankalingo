/* TOEFL ITP — Institutional Testing Program, Level 1.

   Ujian kertas-dan-pensil yang paling banyak dipakai kampus dan lembaga
   beasiswa di Indonesia. Struktur, jumlah butir, waktu, dan skala skor
   mengikuti data/exam-specs.js (SPEC_ITP) yang diverifikasi ke ETS.

   Isi soalnya ada di sepuluh set terpisah — data/itp/itp-01.js sampai
   itp-10.js — dan dimuat hanya ketika satu set dibuka, karena tiap set
   berisi 140 butir dan tidak perlu ikut memberatkan halaman lain.        */

const dua = n => String(n).padStart(2, '0');

export const ITP = {
  id: 'itp',
  name: 'TOEFL ITP',
  full: 'TOEFL Institutional Testing Program — Level 1',
  tagline: 'Ujian kertas yang paling banyak disyaratkan kampus, S2, dan beasiswa di Indonesia. Tiga bagian, 140 soal, skor 310–677.',
  badgeNote: '10 set penuh',

  jumlahSet: 10,

  /* Memuat satu set (1–10). Berkasnya dipisah supaya halaman ujian tidak
     memuat 1.400 butir sekaligus. */
  async muatSet(n) {
    const kode = dua(n);
    const modul = await import(`./itp/itp-${kode}.js`);
    const set = modul[`ITP_${kode}`];
    if (!set) throw new Error(`Set ITP ${kode} tidak ditemukan`);
    return set;
  },

  mitos: [
    ['TOEFL ITP sama dengan TOEFL iBT.', 'Berbeda. ITP ujian kertas tiga bagian (Listening, Structure, Reading) tanpa Speaking dan Writing, skala 310–677. iBT ujian komputer empat bagian dengan skala 1–6. Sebagian besar kampus luar negeri hanya menerima iBT; ITP dipakai lembaga di dalam negeri.'],
    ['Pertanyaan Listening bisa dibaca di lembar soal.', 'Tidak. Di ITP hanya PILIHAN JAWABAN yang tercetak — pertanyaannya dibacakan sekali oleh narator. Kalau tidak menyimak pertanyaannya, empat pilihan itu tidak ada gunanya.'],
    ['Jawaban salah mengurangi nilai.', 'Tidak ada pengurangan. Soal kosong dan soal salah sama-sama bernilai nol, jadi semua soal wajib diisi.'],
    ['Skor 500 berarti 500 soal benar atau 50%.', 'Bukan. 500 adalah skor total hasil konversi: (Listening + Structure + Reading) × 10 ÷ 3. Skor 500 kira-kira setara menjawab benar 60–65% tiap bagian.'],
    ['Written Expression meminta memperbaiki kalimat.', 'Tidak. Kamu hanya menunjuk bagian bergaris bawah (A–D) yang salah. Tahu bentuk benarnya membantu, tapi tidak ditanya.'],
    ['Reading-nya boleh dikerjakan sambil mengerjakan Structure.', 'Tidak. Tiap bagian punya waktu sendiri dan pengawas melarang membuka bagian lain. Kalau Structure selesai lebih cepat, sisa waktunya hangus.']
  ],

  /* Latihan cepat: pemanasan sebelum masuk simulasi penuh. */
  quickBank: [
    { t:'mcq', q:'TOEFL ITP Level 1 terdiri dari berapa bagian?', opts:['Dua: Listening dan Reading','Tiga: Listening, Structure & Written Expression, Reading','Empat: Listening, Structure, Reading, Writing','Lima, termasuk Speaking'], a:1, why:'Tiga bagian, total 140 soal, sekitar 115 menit.' },
    { t:'mcq', q:'Skor total ITP dihitung dengan cara', opts:['menjumlahkan tiga skala bagian','(Listening + Structure + Reading) × 10 ÷ 3','rata-rata tiga bagian dikali 10','skor Reading dikali 10'], a:1, why:'Tiga skala bagian dijumlah, dikali 10, dibagi 3. Rentangnya 310–677.' },
    { t:'mcq', q:'Di bagian Listening ITP, yang tercetak di lembar soal adalah', opts:['pertanyaan dan pilihan jawaban','pertanyaan saja','pilihan jawaban saja','transkrip percakapan'], a:2, why:'Pertanyaan dibacakan narator satu kali; hanya empat pilihan yang tercetak.' },
    { t:'mcq', q:'Berapa soal dan berapa menit untuk Structure and Written Expression?', opts:['40 soal / 25 menit','50 soal / 35 menit','50 soal / 55 menit','30 soal / 25 menit'], a:0, why:'15 Structure + 25 Written Expression = 40 soal dalam 25 menit.' },
    { t:'mcq', q:'Not until the 1920s ___ to vote in national elections in the United States.', opts:['women were allowed','were women allowed','women allowed','allowing women'], a:1, why:'"Not until" di awal kalimat memaksa inversi: were + women + allowed.' },
    { t:'mcq', q:'___ of the two proposals was accepted by the committee.', opts:['None','Neither','Both','Either of'], a:1, why:'"of the two" → neither (untuk dua hal). "None" dipakai untuk tiga atau lebih.' },
    { t:'mcq', q:'The committee recommended that the budget ___ revised before the next meeting.', opts:['is','was','be','will be'], a:2, why:'Sesudah recommend that → subjunctive: bentuk dasar "be".' },
    { t:'mcq', q:'Jupiter, ___ planet in the solar system, has at least ninety known moons.', opts:['the largest','which the largest','is the largest','largest'], a:0, why:'Appositive: frasa benda tanpa kata kerja yang menjelaskan Jupiter. "is the largest" membuat dua verba.' },
    { t:'mcq', q:'Pilih bagian yang SALAH: The number of students who [A] applies for financial aid [B] has [C] risen sharply [D] over the past decade.', opts:['A — applies','B — has','C — risen','D — over'], a:0, noShuffle:true, why:'Klausa relatif "who … " merujuk ke "students" (jamak) → apply. "The number … has" sudah benar.' },
    { t:'mcq', q:'Pilih bagian yang SALAH: Because of [A] the storm, the ferry [B] service was [C] cancel [D] for two days.', opts:['A — Because of','B — service','C — cancel','D — for'], a:2, noShuffle:true, why:'Pasif: was cancelled. "Because of" + frasa benda sudah benar.' },
    { t:'mcq', q:'Pilih bagian yang SALAH: The lecture was [A] so interesting [B] as we stayed [C] to ask questions [D] afterwards.', opts:['A — so interesting','B — as','C — to ask','D — afterwards'], a:1, noShuffle:true, why:'Pola "so … that": so interesting THAT we stayed.' },
    { t:'mcq', q:'The word "prevalent" in an academic passage is closest in meaning to', opts:['rare','widespread','ancient','harmful'], a:1, why:'prevalent = umum, tersebar luas.' },
    { t:'mcq', q:'"The findings were subsequently confirmed by two independent teams." — "subsequently" berarti', opts:['immediately','partly','later','secretly'], a:2, why:'subsequently = kemudian, sesudah itu.' },
    { t:'mcq', q:'Skor ITP berapa yang ETS petakan sebagai batas bawah CEFR B2?', opts:['460','500','543','627'], a:2, why:'B1 = 460–542, B2 = 543–626, C1 = 627–677.' }
  ],

  /* Bacaan dan simakan lepas tidak dipakai — semuanya ada di dalam set. */
  readings: [],
  listenings: []
};
