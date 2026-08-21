/* ── Cetak biru ujian resmi ────────────────────────────────────────
   Struktur, jumlah soal, durasi, dan cara penilaian delapan ujian bahasa,
   disalin dari ketentuan penyelenggara resminya. Angka di berkas ini
   menentukan bentuk simulasi: kalau ujian aslinya 40 soal dalam 60 menit,
   simulasinya juga begitu — termasuk tekanan waktunya.

   Yang ditiru: format, proporsi tiap bagian, durasi, ambang kelulusan.
   Isi soalnya sendiri disusun dari materi SankaLingo GO (kosakata, tata bahasa,
   frasa, bacaan) — bukan salinan soal ujian sungguhan, yang memang
   dilindungi hak cipta penyelenggaranya.

   SUMBER (ditinjau 16 Agustus 2026):
   · TOPIK   — topik.go.kr, NIIED, panduan penyelenggaraan TOPIK I & II
   · JLPT    — jlpt.jp, Japan Foundation & JEES, "Guideline for the JLPT"
   · HSK     — chinesetest.cn, Hanban/CLEC, silabus HSK 1–6
   · Goethe  — goethe.de, Prüfungsordnung & Modellsätze A1–C1
   · DELF    — france-education-international.fr, kisi-kisi DELF/DALF
   · DELE    — examenes.cervantes.es, Instituto Cervantes
   · TORFL   — Pusat Sertifikasi Negara Rusia (ТРКИ), gost-test.ru
   · Arab    — diselaraskan CEFR; ALPT tidak menerbitkan kisi-kisi terbuka  */

/** kind menentukan bagaimana soal dibangkitkan dari materi bahasa itu:
 *  listen  — audio diputar, peserta memilih jawaban
 *  read    — bacaan + pertanyaan
 *  grammar — tata bahasa & penggunaan
 *  vocab   — kosakata
 *  write   — tugas menulis (dinilai sendiri memakai rubrik) */

const S = (id, name, kind, count, minutes, points, note) =>
  ({ id, name, kind, count, minutes, points, note });

export const BLUEPRINTS = {

  /* ── Korea · TOPIK ────────────────────────────────────────────── */
  topik: {
    nama: 'TOPIK', penuh: 'Test of Proficiency in Korean · 한국어능력시험',
    catatan: 'Tidak ada nilai minimum per bagian. Tingkat ditentukan dari TOTAL skor.',
    tingkat: [
      { id: 'topik1', nama: 'TOPIK I', untuk: 'Level 1–2 · pemula',
        total: 200, ambang: [['Level 1', 80], ['Level 2', 140]],
        sections: [
          S('l', 'Listening · 듣기', 'listen', 30, 40, 100,
            'Audio diputar sekali; sebagian soal awal dua kali. Pilihan ganda 4 opsi.'),
          S('r', 'Reading · 읽기', 'read', 40, 60, 100,
            'Iklan, jadwal, pengumuman, paragraf pendek. Dikerjakan tanpa jeda setelah listening.')
        ] },
      { id: 'topik2', nama: 'TOPIK II', untuk: 'Level 3–6 · menengah & mahir',
        total: 300, ambang: [['Level 3', 120], ['Level 4', 150], ['Level 5', 190], ['Level 6', 230]],
        sections: [
          S('l', 'Listening · 듣기', 'listen', 50, 60, 100, 'Audio diputar sekali saja.'),
          S('w', 'Writing · 쓰기', 'write', 4, 50, 100,
            'Dua isian kalimat, satu karangan 200–300 huruf, satu esai 600–700 huruf.'),
          S('r', 'Reading · 읽기', 'read', 50, 70, 100, 'Dari iklan pendek sampai esai panjang.')
        ] }
    ]
  },

  /* ── Jepang · JLPT ────────────────────────────────────────────── */
  jlpt: {
    nama: 'JLPT', penuh: 'Japanese-Language Proficiency Test · 日本語能力試験',
    catatan: 'Selain total, tiap bagian penilaian punya ambang minimum sendiri. ' +
             'Gagal di satu bagian berarti tidak lulus walau totalnya cukup.',
    tingkat: [
      { id: 'n5', nama: 'N5', untuk: 'Dasar', total: 180, lulus: 80, minBagian: 19,
        sections: [
          S('v', '文字・語彙 · Huruf & Kosakata', 'vocab', 25, 20, 60, 'Bacaan kanji, penulisan, konteks, padanan.'),
          S('g', '文法・読解 · Tata Bahasa & Membaca', 'grammar', 20, 40, 60, 'Digabung satu sesi dengan bacaan pendek.'),
          S('l', '聴解 · Menyimak', 'listen', 24, 30, 60, 'Pemahaman tugas, poin utama, dan respons cepat.')
        ] },
      { id: 'n4', nama: 'N4', untuk: 'Dasar atas', total: 180, lulus: 90, minBagian: 19,
        sections: [
          S('v', '文字・語彙', 'vocab', 30, 25, 60, ''),
          S('g', '文法・読解', 'grammar', 30, 55, 60, ''),
          S('l', '聴解', 'listen', 28, 35, 60, '')
        ] },
      { id: 'n3', nama: 'N3', untuk: 'Menengah', total: 180, lulus: 95, minBagian: 19,
        sections: [
          S('v', '文字・語彙', 'vocab', 35, 30, 60, ''),
          S('g', '文法・読解', 'grammar', 39, 70, 60, ''),
          S('l', '聴解', 'listen', 28, 40, 60, '')
        ] },
      { id: 'n2', nama: 'N2', untuk: 'Menengah atas', total: 180, lulus: 90, minBagian: 19,
        sections: [
          S('g', '言語知識・読解', 'grammar', 48, 105, 120, 'Kosakata, tata bahasa, dan membaca jadi satu sesi.'),
          S('l', '聴解', 'listen', 32, 50, 60, '')
        ] },
      { id: 'n1', nama: 'N1', untuk: 'Mahir', total: 180, lulus: 100, minBagian: 19,
        sections: [
          S('g', '言語知識・読解', 'grammar', 55, 110, 120, ''),
          S('l', '聴解', 'listen', 36, 55, 60, '')
        ] }
    ]
  },

  /* ── Mandarin · HSK ───────────────────────────────────────────── */
  hsk: {
    nama: 'HSK', penuh: '汉语水平考试 · Hanyu Shuiping Kaoshi',
    catatan: 'HSK 1–2 bernilai 200 (lulus 120). HSK 3–6 bernilai 300 (lulus 180). ' +
             'Semua soal beraksara Han; HSK 1–2 disertai pinyin.',
    tingkat: [
      { id: 'hsk1', nama: 'HSK 1', untuk: '150 kata', total: 200, lulus: 120,
        sections: [ S('l', '听力 · Menyimak', 'listen', 20, 15, 100, 'Tiap audio diputar dua kali.'),
                    S('r', '阅读 · Membaca', 'read', 20, 17, 100, 'Semua kalimat berpinyin.') ] },
      { id: 'hsk2', nama: 'HSK 2', untuk: '300 kata', total: 200, lulus: 120,
        sections: [ S('l', '听力', 'listen', 35, 25, 100, 'Diputar dua kali.'),
                    S('r', '阅读', 'read', 25, 22, 100, '') ] },
      { id: 'hsk3', nama: 'HSK 3', untuk: '600 kata', total: 300, lulus: 180,
        sections: [ S('l', '听力', 'listen', 40, 35, 100, ''),
                    S('r', '阅读', 'read', 30, 30, 100, ''),
                    S('w', '书写 · Menulis', 'write', 10, 15, 100, 'Menyusun kalimat dan menulis aksara.') ] },
      { id: 'hsk4', nama: 'HSK 4', untuk: '1.200 kata', total: 300, lulus: 180,
        sections: [ S('l', '听力', 'listen', 45, 30, 100, 'Mulai HSK 4 audio hanya sekali.'),
                    S('r', '阅读', 'read', 40, 40, 100, ''),
                    S('w', '书写', 'write', 15, 25, 100, '') ] },
      { id: 'hsk5', nama: 'HSK 5', untuk: '2.500 kata', total: 300, lulus: 180,
        sections: [ S('l', '听力', 'listen', 45, 30, 100, ''),
                    S('r', '阅读', 'read', 45, 45, 100, ''),
                    S('w', '书写', 'write', 10, 40, 100, 'Menyusun kalimat & mengarang dari gambar.') ] },
      { id: 'hsk6', nama: 'HSK 6', untuk: '5.000 kata', total: 300, lulus: 180,
        sections: [ S('l', '听力', 'listen', 50, 35, 100, ''),
                    S('r', '阅读', 'read', 50, 50, 100, ''),
                    S('w', '书写', 'write', 1, 45, 100, 'Membaca 1.000 aksara 10 menit, lalu meringkas 400 aksara.') ] }
    ]
  },

  /* ── Jerman · Goethe-Zertifikat ───────────────────────────────── */
  goethe: {
    nama: 'Goethe-Zertifikat', penuh: 'Goethe-Institut · ujian bahasa Jerman resmi',
    catatan: 'Mulai B1 tiap modul dinilai terpisah (masing-masing 100 poin, lulus 60) ' +
             'dan boleh diulang sendiri-sendiri.',
    tingkat: [
      { id: 'a1', nama: 'A1 · Start Deutsch 1', untuk: 'Pemula', total: 100, lulus: 60,
        sections: [ S('l', 'Hören', 'listen', 15, 20, 25, ''),
                    S('r', 'Lesen', 'read', 15, 25, 25, ''),
                    S('w', 'Schreiben', 'write', 2, 20, 25, 'Mengisi formulir dan menulis pesan pendek.') ] },
      { id: 'a2', nama: 'A2', untuk: 'Dasar', total: 100, lulus: 60,
        sections: [ S('l', 'Hören', 'listen', 20, 30, 25, ''),
                    S('r', 'Lesen', 'read', 20, 30, 25, ''),
                    S('w', 'Schreiben', 'write', 2, 30, 25, '') ] },
      /* minBagian 60 = 60% poin tiap modul. Tanpa ini, `nilai()` di
         js/mockgen.js hanya memeriksa TOTAL, sehingga peserta yang
         mendapat nol di satu modul tetap dinyatakan "Lulus" — padahal
         aturan yang dicetak aplikasi di layar hasil yang sama berbunyi
         "mulai B1 tiap modul dinilai terpisah, masing-masing lulus 60". */
      { id: 'b1', nama: 'B1', untuk: 'Menengah', total: 100, lulus: 60, minBagian: 60,
        sections: [ S('r', 'Lesen', 'read', 30, 65, 100, 'Lima bagian: blog, iklan, pendapat, aturan.'),
                    S('l', 'Hören', 'listen', 30, 40, 100, 'Empat bagian; sebagian diputar dua kali.'),
                    S('w', 'Schreiben', 'write', 3, 60, 100, 'Surel pribadi, forum daring, surel formal.') ] },
      { id: 'b2', nama: 'B2', untuk: 'Menengah atas', total: 100, lulus: 60, minBagian: 60,
        sections: [ S('r', 'Lesen', 'read', 30, 65, 100, ''),
                    S('l', 'Hören', 'listen', 30, 40, 100, ''),
                    S('w', 'Schreiben', 'write', 2, 75, 100, 'Komentar forum dan pesan formal.') ] },
      { id: 'c1', nama: 'C1', untuk: 'Mahir', total: 100, lulus: 60, minBagian: 60,
        sections: [ S('r', 'Lesen', 'read', 30, 70, 100, ''),
                    S('l', 'Hören', 'listen', 30, 40, 100, ''),
                    S('w', 'Schreiben', 'write', 2, 80, 100, '') ] }
    ]
  },

  /* ── Prancis · DELF & DALF ────────────────────────────────────── */
  delf: {
    nama: 'DELF / DALF', penuh: 'Diplôme d’études en langue française · France Éducation International',
    catatan: 'Empat bagian, masing-masing 25 poin. Lulus bila total ≥50/100 ' +
             'DAN tidak ada bagian di bawah 5/25.',
    tingkat: [
      { id: 'a1', nama: 'DELF A1', untuk: 'Pemula', total: 100, lulus: 50, minBagian: 5,
        sections: [ S('l', 'Compréhension de l’oral', 'listen', 12, 20, 25, 'Rekaman diputar dua kali.'),
                    S('r', 'Compréhension des écrits', 'read', 12, 30, 25, ''),
                    S('w', 'Production écrite', 'write', 2, 30, 25, 'Isi formulir + tulis 40 kata.') ] },
      { id: 'a2', nama: 'DELF A2', untuk: 'Dasar', total: 100, lulus: 50, minBagian: 5,
        sections: [ S('l', 'Compréhension de l’oral', 'listen', 14, 25, 25, ''),
                    S('r', 'Compréhension des écrits', 'read', 14, 30, 25, ''),
                    S('w', 'Production écrite', 'write', 2, 45, 25, 'Dua tulisan pendek 60–80 kata.') ] },
      { id: 'b1', nama: 'DELF B1', untuk: 'Menengah', total: 100, lulus: 50, minBagian: 5,
        sections: [ S('l', 'Compréhension de l’oral', 'listen', 16, 25, 25, ''),
                    S('r', 'Compréhension des écrits', 'read', 16, 45, 25, ''),
                    S('w', 'Production écrite', 'write', 1, 45, 25, 'Esai pendapat 160–180 kata.') ] },
      { id: 'b2', nama: 'DELF B2', untuk: 'Menengah atas', total: 100, lulus: 50, minBagian: 5,
        sections: [ S('l', 'Compréhension de l’oral', 'listen', 18, 30, 25, ''),
                    S('r', 'Compréhension des écrits', 'read', 18, 60, 25, ''),
                    S('w', 'Production écrite', 'write', 1, 60, 25, 'Tulisan argumentatif 250 kata.') ] },
      { id: 'c1', nama: 'DALF C1', untuk: 'Mahir', total: 100, lulus: 50, minBagian: 5,
        sections: [ S('l', 'Compréhension de l’oral', 'listen', 20, 40, 25, ''),
                    S('r', 'Compréhension des écrits', 'read', 20, 50, 25, ''),
                    S('w', 'Production écrite', 'write', 2, 100, 25, 'Sintesis + esai argumentatif.') ] }
    ]
  },

  /* ── Spanyol · DELE ───────────────────────────────────────────── */
  dele: {
    nama: 'DELE', penuh: 'Diplomas de Español como Lengua Extranjera · Instituto Cervantes',
    catatan: 'Dinilai dua kelompok: Grupo 1 (membaca + menulis) dan Grupo 2 (menyimak + berbicara). ' +
             'Tiap kelompok bernilai 50 poin dan harus mencapai 30 — lulus di satu kelompok saja tidak cukup.',
    tingkat: [
      { id: 'a1', nama: 'DELE A1', untuk: 'Pemula', total: 100, lulus: 60, minBagian: 15,
        sections: [ S('r', 'Comprensión de lectura', 'read', 25, 45, 25, 'Empat tugas.'),
                    S('l', 'Comprensión auditiva', 'listen', 25, 20, 25, ''),
                    S('w', 'Expresión escrita', 'write', 2, 25, 25, '') ] },
      { id: 'a2', nama: 'DELE A2', untuk: 'Dasar', total: 100, lulus: 60, minBagian: 15,
        sections: [ S('r', 'Comprensión de lectura', 'read', 30, 60, 25, ''),
                    S('l', 'Comprensión auditiva', 'listen', 30, 35, 25, ''),
                    S('w', 'Expresión escrita', 'write', 2, 45, 25, '') ] },
      { id: 'b1', nama: 'DELE B1', untuk: 'Menengah', total: 100, lulus: 60, minBagian: 15,
        sections: [ S('r', 'Comprensión de lectura', 'read', 30, 70, 25, 'Lima tugas.'),
                    S('l', 'Comprensión auditiva', 'listen', 30, 40, 25, 'Lima tugas.'),
                    S('w', 'Expresión escrita', 'write', 2, 60, 25, '') ] },
      { id: 'b2', nama: 'DELE B2', untuk: 'Menengah atas', total: 100, lulus: 60, minBagian: 15,
        sections: [ S('r', 'Comprensión de lectura', 'read', 36, 70, 25, ''),
                    S('l', 'Comprensión auditiva', 'listen', 30, 40, 25, ''),
                    S('w', 'Expresión escrita', 'write', 2, 80, 25, '') ] },
      { id: 'c1', nama: 'DELE C1', untuk: 'Mahir', total: 100, lulus: 60, minBagian: 15,
        sections: [ S('r', 'Comprensión de lectura y uso de la lengua', 'read', 40, 90, 25, ''),
                    S('l', 'Comprensión auditiva y uso de la lengua', 'listen', 30, 50, 25, ''),
                    S('w', 'Expresión escrita', 'write', 2, 80, 25, '') ] }
    ]
  },

  /* ── Rusia · ТРКИ / TORFL ─────────────────────────────────────── */
  torfl: {
    nama: 'ТРКИ · TORFL', penuh: 'Тест по русскому языку как иностранному',
    catatan: 'Lima subtes. Ambang lulus 66% DI SETIAP subtes — bukan rata-rata. ' +
             'Satu subtes gagal boleh diulang dalam dua tahun.',
    tingkat: [
      { id: 'a1', nama: 'Элементарный · A1', untuk: 'Dasar sekali', total: 100, lulus: 66, minBagian: 66,
        sections: [ S('g', 'Лексика · Грамматика', 'grammar', 30, 50, 100, '100 butir pada ujian asli.'),
                    S('r', 'Чтение', 'read', 15, 50, 100, ''),
                    S('l', 'Аудирование', 'listen', 15, 30, 100, ''),
                    S('w', 'Письмо', 'write', 2, 50, 100, '') ] },
      { id: 'a2', nama: 'Базовый · A2', untuk: 'Dasar', total: 100, lulus: 66, minBagian: 66,
        sections: [ S('g', 'Лексика · Грамматика', 'grammar', 35, 50, 100, ''),
                    S('r', 'Чтение', 'read', 18, 50, 100, ''),
                    S('l', 'Аудирование', 'listen', 18, 30, 100, ''),
                    S('w', 'Письмо', 'write', 2, 50, 100, '') ] },
      { id: 'b1', nama: 'ТРКИ-I · B1', untuk: 'Ambang masuk universitas Rusia',
        total: 100, lulus: 66, minBagian: 66,
        sections: [ S('g', 'Лексика · Грамматика', 'grammar', 40, 60, 100, '165 butir pada ujian asli.'),
                    S('r', 'Чтение', 'read', 20, 50, 100, ''),
                    S('l', 'Аудирование', 'listen', 20, 35, 100, ''),
                    S('w', 'Письмо', 'write', 2, 60, 100, '') ] },
      { id: 'b2', nama: 'ТРКИ-II · B2', untuk: 'Kerja & studi lanjut', total: 100, lulus: 66, minBagian: 66,
        sections: [ S('g', 'Лексика · Грамматика', 'grammar', 45, 90, 100, ''),
                    S('r', 'Чтение', 'read', 25, 60, 100, ''),
                    S('l', 'Аудирование', 'listen', 25, 40, 100, ''),
                    S('w', 'Письмо', 'write', 2, 60, 100, '') ] }
    ]
  },

  /* ── Arab ─────────────────────────────────────────────────────── */
  arab: {
    nama: 'Ujian Bahasa Arab (selaras CEFR)',
    penuh: 'ALPT dan ujian bahasa Arab lain tidak menerbitkan kisi-kisi terbuka',
    catatan: 'Berbeda dari tujuh ujian lain di aplikasi ini, tidak ada satu format Arab ' +
             'yang dipakai seluruh dunia dan diumumkan terbuka. Simulasi ini karena itu ' +
             'disusun mengikuti deskriptor CEFR — bukan mengaku meniru ALPT.',
    tingkat: [
      { id: 'a1', nama: 'A1', untuk: 'Pemula', total: 100, lulus: 60,
        sections: [ S('v', 'المفردات · Kosakata', 'vocab', 20, 20, 25, ''),
                    S('g', 'القواعد · Tata Bahasa', 'grammar', 15, 20, 25, ''),
                    S('l', 'الاستماع · Menyimak', 'listen', 15, 20, 25, ''),
                    S('r', 'القراءة · Membaca', 'read', 10, 25, 25, '') ] },
      { id: 'a2', nama: 'A2', untuk: 'Dasar', total: 100, lulus: 60,
        sections: [ S('v', 'المفردات', 'vocab', 25, 25, 25, ''),
                    S('g', 'القواعد', 'grammar', 20, 25, 25, ''),
                    S('l', 'الاستماع', 'listen', 18, 25, 25, ''),
                    S('r', 'القراءة', 'read', 14, 30, 25, '') ] },
      { id: 'b1', nama: 'B1', untuk: 'Menengah', total: 100, lulus: 60,
        sections: [ S('v', 'المفردات', 'vocab', 30, 25, 25, ''),
                    S('g', 'القواعد', 'grammar', 25, 30, 25, ''),
                    S('l', 'الاستماع', 'listen', 20, 30, 25, ''),
                    S('r', 'القراءة', 'read', 18, 40, 25, '') ] },
      { id: 'b2', nama: 'B2', untuk: 'Menengah atas', total: 100, lulus: 60,
        sections: [ S('v', 'المفردات', 'vocab', 35, 30, 25, ''),
                    S('g', 'القواعد', 'grammar', 30, 35, 25, ''),
                    S('l', 'الاستماع', 'listen', 24, 35, 25, ''),
                    S('r', 'القراءة', 'read', 22, 45, 25, '') ] }
    ]
  }
};

/** Ujian mana untuk bahasa mana. */
export const UJIAN_BAHASA = {
  ko: 'topik', ja: 'jlpt', zh: 'hsk', de: 'goethe',
  fr: 'delf', es: 'dele', ru: 'torfl', ar: 'arab'
};

export const blueprintUntuk = code => BLUEPRINTS[UJIAN_BAHASA[code]] || null;

export function tingkatUntuk(code, id) {
  const b = blueprintUntuk(code);
  if (!b) return null;
  return b.tingkat.find(t => t.id === id) || b.tingkat[0];
}

/** Total menit satu tingkat — dipakai untuk memperingatkan sebelum mulai. */
export const menitTotal = t => (t?.sections || []).reduce((a, s) => a + s.minutes, 0);
export const soalTotal  = t => (t?.sections || []).reduce((a, s) => a + s.count, 0);
