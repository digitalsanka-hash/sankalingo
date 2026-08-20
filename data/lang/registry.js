/* Daftar bahasa yang didukung platform SankaLingo GO.
   Setiap bahasa punya berkas sendiri di data/lang/<kode>.js dengan skema sama.

   Standar ujian yang dirujuk (diverifikasi 16 Agustus 2026):
   · Mandarin  — HSK 3.0 (Standar Kecakapan Bahasa Tionghoa 2021, 3 tingkat / 9 band;
                 penerapan global penuh 1 Juli 2026; ±11.000 kosakata)
   · Jepang    — JLPT N5–N1 (N1 165 mnt, N2 155, N3 140, N4 115, N5 90;
                 skor berskala, ada ambang lulus per bagian)
   · Korea     — TOPIK I (level 1–2, 200 poin) dan TOPIK II (level 3–6, 300 poin);
                 tanpa nilai minimum per bagian
   · Jerman    — Goethe-Zertifikat A1–C2 (selaras CEFR)
   · Prancis   — DELF A1–B2 dan DALF C1–C2 (selaras CEFR)
   · Spanyol   — DELE A1–C2 (Instituto Cervantes)
   · Rusia     — TORFL / ТРКИ, tingkat elementer sampai TORFL-4 (selaras CEFR)
   · Arab      — ALPT / ujian kecakapan bahasa Arab selaras CEFR (A1–C2)
*/

export const LANGS = [
  { code:'en', name:'Inggris',  native:'English',  script:'Latin',      dir:'ltr',
    accent:'#6c5ce7', exam:'IELTS · TOEFL · TOEIC', home:'#/', ready:true, main:true,
    blurb:'Kurikulum CEFR A1–C2 penuh, tiga ujian internasional, SRS, dan rencana harian.' },

  { code:'ko', name:'Korea',    native:'한국어',   script:'Hangul',     dir:'ltr',
    accent:'#e0457b', exam:'TOPIK I & II', letters:24, ready:true,
    blurb:'Hangul dirancang ilmiah — 24 huruf, bentuknya meniru posisi lidah dan bibir. Bisa dibaca dalam satu jam.' },

  { code:'ja', name:'Jepang',   native:'日本語',    script:'Kana + Kanji', dir:'ltr',
    accent:'#d64545', exam:'JLPT N5–N1', letters:92, ready:true,
    blurb:'Dua abjad suku kata (hiragana & katakana) plus kanji. Tata bahasanya rapi dan sangat teratur.' },

  { code:'zh', name:'Mandarin', native:'中文',      script:'Hanzi + Pinyin', dir:'ltr',
    accent:'#e08a1e', exam:'HSK 1–9 (3.0)', ready:true, letters:0,
    blurb:'Tanpa konjugasi, tanpa jenis kelamin kata. Tantangannya nada dan aksara.' },

  { code:'ar', name:'Arab',     native:'العربية',   script:'Arab',       dir:'rtl',
    accent:'#0f9d76', exam:'ALPT (selaras CEFR)', ready:true, letters:28,
    blurb:'Ditulis kanan ke kiri, huruf berubah bentuk menurut posisinya. Akar tiga huruf membuka ratusan kata sekaligus.' },

  { code:'ru', name:'Rusia',    native:'Русский',   script:'Kiril',      dir:'ltr',
    accent:'#3f7fd1', exam:'TORFL / ТРКИ', ready:true, letters:33,
    blurb:'Abjad Kiril 33 huruf; sepertiganya sudah kamu kenal bentuknya. Tantangannya kasus dan aspek kata kerja.' },

  { code:'de', name:'Jerman',   native:'Deutsch',   script:'Latin',      dir:'ltr',
    accent:'#4a5568', exam:'Goethe-Zertifikat A1–C2', ready:true, letters:30,
    blurb:'Ejaan sangat konsisten: sekali tahu aturannya, semua kata bisa dibaca. Tantangannya kasus dan gender kata benda.' },

  { code:'fr', name:'Prancis',  native:'Français',  script:'Latin',      dir:'ltr',
    accent:'#3b5bdb', exam:'DELF A1–B2 · DALF C1–C2', ready:true, letters:26,
    blurb:'Bacaan mudah dikenali orang Indonesia, tetapi pelafalan dan liaison butuh latihan khusus.' },

  { code:'es', name:'Spanyol',  native:'Español',   script:'Latin',      dir:'ltr',
    accent:'#e04f2a', exam:'DELE A1–C2', ready:true, letters:27,
    blurb:'Pelafalan paling mudah bagi penutur Indonesia — hampir seluruhnya dibaca seperti tulisannya.' }
];

export const langByCode = c => LANGS.find(l => l.code === c);
export const otherLangs = () => LANGS.filter(l => !l.main);
