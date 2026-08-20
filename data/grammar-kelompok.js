/* ── Pengelompokan tema topik tata bahasa ─────────────────────────
   Sesudah materinya naik dari 120 ke 162 topik, indeks datar jadi
   sepanjang 41 layar — bisa dicari kalau sudah tahu namanya, tapi tidak
   bisa DITELUSURI kalau belum. Tingkat CEFR menjawab "seberapa sulit",
   bukan "tentang apa". Kelompok inilah yang menjawabnya.

   Temanya dipilih dari sudut pandang orang yang bertanya, bukan dari
   tata nama buku tata bahasa. "Pengandaian" berdiri sendiri walau
   secara teknis ia sejenis klausa, karena orang mencarinya sebagai satu
   hal utuh. Begitu juga "Pasif & kalimat laporan": keduanya digabung
   karena sama-sama soal memindahkan siapa pelakunya.                  */

export const KELOMPOK = [
  { id: 'dasar',  nama: 'Dasar kalimat',              ikon: '🧱' },
  { id: 'kala',   nama: 'Kala & aspek',               ikon: '⏳' },
  { id: 'modal',  nama: 'Modal',                      ikon: '🎚' },
  { id: 'andai',  nama: 'Pengandaian',                ikon: '🔀' },
  { id: 'klausa', nama: 'Klausa & kalimat majemuk',   ikon: '🔗' },
  { id: 'kerja',  nama: 'Pola kata kerja',            ikon: '🏃' },
  { id: 'benda',  nama: 'Kata benda & penentu',       ikon: '📦' },
  { id: 'sifat',  nama: 'Kata sifat & keterangan',    ikon: '🎨' },
  { id: 'depan',  nama: 'Kata depan & ungkapan tetap', ikon: '🧷' },
  { id: 'pasif',  nama: 'Pasif & kalimat laporan',    ikon: '🔁' },
  { id: 'wacana', nama: 'Wacana, ragam & gaya',       ikon: '💬' },
  { id: 'tanda',  nama: 'Tanda baca & bunyi',         ikon: '✒️' },
];

export const KELOMPOK_TOPIK = {
  /* ── A1 ── */
  'a1-01': 'dasar',  'a1-02': 'dasar',  'a1-03': 'benda',  'a1-04': 'benda',
  'a1-05': 'kala',   'a1-06': 'kala',   'a1-07': 'kala',   'a1-08': 'dasar',
  'a1-09': 'benda',  'a1-10': 'benda',  'a1-11': 'modal',  'a1-12': 'dasar',
  'a1-13': 'dasar',  'a1-14': 'depan',  'a1-15': 'depan',  'a1-16': 'sifat',
  'a1-17': 'benda',  'a1-18': 'kala',   'a1-19': 'kerja',  'a1-20': 'klausa',
  'a1-21': 'kerja',  'a1-22': 'kerja',  'a1-23': 'benda',  'a1-24': 'depan',
  'a1-25': 'depan',  'a1-26': 'dasar',

  /* ── A2 ── */
  'a2-01': 'kala',   'a2-02': 'kala',   'a2-03': 'kala',   'a2-04': 'kala',
  'a2-05': 'kala',   'a2-06': 'depan',  'a2-07': 'kala',   'a2-08': 'kala',
  'a2-09': 'kala',   'a2-10': 'sifat',  'a2-11': 'sifat',  'a2-12': 'sifat',
  'a2-13': 'sifat',  'a2-14': 'sifat',  'a2-15': 'benda',  'a2-16': 'modal',
  'a2-17': 'modal',  'a2-18': 'dasar',  'a2-19': 'kerja',  'a2-20': 'dasar',
  'a2-21': 'sifat',  'a2-22': 'dasar',  'a2-23': 'benda',  'a2-24': 'benda',
  'a2-25': 'dasar',  'a2-26': 'klausa', 'a2-27': 'klausa', 'a2-28': 'kerja',
  'a2-29': 'benda',  'a2-30': 'modal',

  /* ── B1 ── */
  'b1-01': 'kala',   'b1-02': 'kala',   'b1-03': 'kala',   'b1-04': 'kala',
  'b1-05': 'andai',  'b1-06': 'andai',  'b1-07': 'andai',  'b1-08': 'pasif',
  'b1-09': 'klausa', 'b1-10': 'klausa', 'b1-11': 'pasif',  'b1-12': 'pasif',
  'b1-13': 'kerja',  'b1-14': 'modal',  'b1-15': 'modal',  'b1-16': 'sifat',
  'b1-17': 'kerja',  'b1-18': 'kerja',  'b1-19': 'benda',  'b1-20': 'depan',
  'b1-21': 'wacana', 'b1-22': 'dasar',  'b1-23': 'andai',  'b1-24': 'modal',
  'b1-25': 'kala',   'b1-26': 'kerja',  'b1-27': 'sifat',  'b1-28': 'benda',
  'b1-29': 'klausa', 'b1-30': 'benda',  'b1-31': 'depan',  'b1-32': 'wacana',

  /* ── B2 ── */
  'b2-01': 'andai',  'b2-02': 'andai',  'b2-03': 'pasif',  'b2-04': 'pasif',
  'b2-05': 'klausa', 'b2-06': 'klausa', 'b2-07': 'kerja',  'b2-08': 'kerja',
  'b2-09': 'kala',   'b2-10': 'modal',  'b2-11': 'wacana', 'b2-12': 'wacana',
  'b2-13': 'wacana', 'b2-14': 'sifat',  'b2-15': 'sifat',  'b2-16': 'wacana',
  'b2-17': 'wacana', 'b2-18': 'wacana', 'b2-19': 'benda',  'b2-20': 'tanda',
  'b2-21': 'wacana', 'b2-22': 'benda',  'b2-23': 'klausa', 'b2-24': 'andai',
  'b2-25': 'dasar',  'b2-26': 'klausa', 'b2-27': 'sifat',  'b2-28': 'kerja',
  'b2-29': 'kala',   'b2-30': 'andai',

  /* ── C1 ── */
  'c1-01': 'wacana', 'c1-02': 'modal',  'c1-03': 'pasif',  'c1-04': 'andai',
  'c1-05': 'klausa', 'c1-06': 'klausa', 'c1-07': 'benda',  'c1-08': 'modal',
  'c1-09': 'wacana', 'c1-10': 'wacana', 'c1-11': 'wacana', 'c1-12': 'kerja',
  'c1-13': 'benda',  'c1-14': 'wacana', 'c1-15': 'kala',   'c1-16': 'depan',
  'c1-17': 'pasif',  'c1-18': 'sifat',  'c1-19': 'wacana', 'c1-20': 'tanda',
  'c1-21': 'klausa', 'c1-22': 'kala',   'c1-23': 'wacana', 'c1-24': 'klausa',

  /* ── C2 ── */
  'c2-01': 'kala',   'c2-02': 'wacana', 'c2-03': 'modal',  'c2-04': 'wacana',
  'c2-05': 'depan',  'c2-06': 'wacana', 'c2-07': 'klausa', 'c2-08': 'wacana',
  'c2-09': 'wacana', 'c2-10': 'tanda',  'c2-11': 'tanda',  'c2-12': 'wacana',
  'c2-13': 'wacana', 'c2-14': 'wacana', 'c2-15': 'tanda',  'c2-16': 'wacana',
  'c2-17': 'depan',  'c2-18': 'depan',  'c2-19': 'wacana', 'c2-20': 'depan',
};

export const kelompokDari = id => KELOMPOK_TOPIK[id] || null;
export const namaKelompok = k => KELOMPOK.find(x => x.id === k)?.nama || k;
