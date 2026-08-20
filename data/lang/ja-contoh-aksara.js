/* ── Contoh kata untuk aksara yang tidak tertutup kosakata ────────
   Pelatih aksara mencari contoh kata dari kosakata dan frasa bahasa
   itu sendiri. Untuk 25 aksara Jepang pencarian itu tidak menemukan
   apa pun — hampir semuanya KATAKANA, yang dipakai untuk kata serapan
   sementara kosakata inti aplikasi ini ditulis hiragana dan kanji.

   Akibatnya papan latih katakana tidak pernah menunjukkan satu kata
   pun: pemelajar melihat bentuk hurufnya, mendengar namanya, lalu
   tidak pernah tahu huruf itu dipakai untuk apa.

   Contoh di sini dipilih tangan dengan satu syarat: hurufnya berada di
   AWAL kata, tempat bunyinya paling jelas terdengar. Yang tidak bisa
   memenuhi syarat itu diberi kata yang memuatnya sejelas mungkin.

   Bacaan memakai Hepburn dengan vokal panjang ditulis ganda
   (nooto, keeki), sama seperti seluruh materi Jepang di aplikasi ini.

   Bentuk: 'aksara': [kata, bacaan, arti]                            */

export const CONTOH = {
  /* ── Hiragana yang belum tertutup ── */
  'ぬ': ['いぬ',       'inu',        'anjing'],
  'ね': ['ねこ',       'neko',       'kucing'],
  'ひ': ['ひと',       'hito',       'orang'],
  'ふ': ['ふゆ',       'fuyu',       'musim dingin'],
  'へ': ['へや',       'heya',       'kamar'],

  /* ── Katakana: kata serapan, hurufnya di awal ── */
  'オ': ['オレンジ',   'orenji',     'jeruk'],
  'カ': ['カメラ',     'kamera',     'kamera'],
  'ク': ['クラス',     'kurasu',     'kelas'],
  'ケ': ['ケーキ',     'keeki',      'kue'],
  'セ': ['セーター',   'seetaa',     'sweter'],
  'チ': ['チーズ',     'chiizu',     'keju'],
  'ツ': ['ツアー',     'tsuaa',      'tur'],
  'ナ': ['ナイフ',     'naifu',      'pisau'],
  'ヌ': ['ヌードル',   'nuudoru',    'mi'],
  'ノ': ['ノート',     'nooto',      'buku catatan'],
  'ハ': ['ハンカチ',   'hankachi',   'saputangan'],
  'ヘ': ['ヘルメット', 'herumetto',  'helm'],
  'ミ': ['ミルク',     'miruku',     'susu'],
  'モ': ['モデル',     'moderu',     'model'],
  'ユ': ['ユーモア',   'yuumoa',     'humor'],
  'ヨ': ['ヨーグルト', 'yooguruto',  'yoghurt'],
  'ロ': ['ロボット',   'robotto',    'robot'],
  'ワ': ['ワイン',     'wain',       'anggur'],

  /* ヤ dan ヲ hampir tidak pernah mengawali kata.
     ヤ diberi kata yang memuatnya di tengah; ヲ memang praktis tidak
     dipakai di luar partikel を, dan itu justru keterangan yang perlu
     diketahui pemelajar. */
  'ヤ': ['タイヤ',     'taiya',      'ban (roda)'],
  'ヲ': ['ヲ',         'wo',         'nyaris tak dipakai — partikel を ditulis hiragana'],
};
