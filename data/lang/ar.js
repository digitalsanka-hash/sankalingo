/* BAHASA ARAB — 28 huruf dengan empat bentuk sambung, urutan goresan
   kanan-ke-kiri, harakat, akar tiga huruf, dan ujian selaras CEFR. */

const A = (c, rom, trick, strokes, forms, name) => ({ c, rom, trick, strokes, forms, name });

export const AR = {
code:'ar', name:'Arab', native:'العربية', dir:'rtl',

intro: {
  headline:'Ditulis kanan ke kiri, dan setiap huruf berubah bentuk menurut tempatnya.',
  body:`Dua hal membuat aksara Arab terasa asing pada awalnya: arah tulisan dari kanan ke kiri,
dan huruf yang berubah bentuk tergantung posisinya dalam kata — terpisah, di awal, di tengah,
atau di akhir. Kelihatannya berarti empat kali beban hafalan, padahal tidak: perubahannya
mengikuti pola yang teratur, dan kerangka dasar tiap huruf selalu sama.

Keuntungan besar bagi penutur Indonesia: ratusan kata sudah kamu kenal — kitab, kursi, waktu,
sabar, hikmah, syukur semuanya serapan Arab. Dan sistem AKAR TIGA HURUF membuat satu akar
membuka belasan kata sekaligus: dari k-t-b lahir kataba (menulis), kitāb (buku),
maktab (kantor), maktabah (perpustakaan), kātib (penulis).`,
  facts:[
    '28 huruf, semuanya konsonan. Vokal pendek ditulis sebagai tanda kecil (harakat) yang sering dihilangkan.',
    'Enam huruf tidak pernah menyambung ke huruf sesudahnya: ا د ذ ر ز و.',
    'Tidak ada huruf besar dan kecil.',
    'Angka ditulis dari kiri ke kanan meskipun tulisannya kanan ke kiri.'
  ],
  hardForId:[
    'Bunyi kerongkongan yang tidak ada di bahasa Indonesia: ع (ain), ح (ha tebal), غ (ghain), ق (qaf).',
    'Huruf tebal (tafkhim): ص ض ط ظ — lidah dinaikkan, bunyinya "berat".',
    'Perbedaan س / ص, ت / ط, د / ض, ذ / ظ menentukan makna.',
    'Vokal panjang vs pendek membedakan kata: كَتَبَ (menulis) vs كَاتِب (penulis).',
    'Kalimat Arab baku sering berpola Kata Kerja–Subjek–Objek, berbeda dari bahasa Indonesia.'
  ]
},

scripts: [
{
  id:'huruf', name:'28 Huruf Hijaiyah', native:'الحروف', count:28,
  note:'Ditulis dari KANAN ke KIRI. Badan huruf digores lebih dulu — selalu mulai dari sisi kanan — baru titiknya. Angka pada lingkaran menunjukkan urutan itu. Empat bentuk sambung ditampilkan di bawah tiap huruf.',
  chars: [
    A('ا','alif','Garis tegak lurus tanpa titik — huruf paling sederhana. Tidak menyambung ke kiri.',
      ['M51.9 90.7 L53.2 71.2 L48.1 23 L49.7 9.6'], ['ا','ا','ـا','ـا'], 'alif'),
    A('ب','ba','Perahu dengan satu titik di BAWAH.',
      ['M89.5 37.9 L90.1 32.4 L86.7 18.3 L89.5 37.9 L84.8 42.4 L60.1 50.1 L47.4 51.5 L28.8 50.7 L18 46.8 L11.6 39.9 L12.2 29.3 L16 23.8 L13.3 27.4 L11.6 39.9 L17.7 46.5 L26.6 49.9','M49.4 73.0 L56.4 80.0'], ['ب','بـ','ـبـ','ـب'], 'ba'),
    A('ت','ta','Perahu dengan DUA titik di atas.',
      ['M89.5 58.2 L90.1 52.6 L86.7 38.5 L89.5 58.2 L84.8 62.6 L60.1 70.4 L47.4 71.8 L28.8 70.9 L18 67 L11.6 60.1 L12.2 49.6 L16 44 L13.3 47.6 L11.6 60.1 L17.7 66.8 L26.6 70.1','M49.3 26.5 L56.3 33.5','M43.0 27.4 L50.0 34.4'], ['ت','تـ','ـتـ','ـت'], 'ta'),
    A('ث','tsa','Perahu dengan TIGA titik di atas.',
      ['M89.5 63.6 L90.1 58 L86.7 43.9 L89.5 63.6 L84.8 68 L60.1 75.8 L47.4 77.2 L28.8 76.3 L18 72.5 L11.6 65.5 L12.2 55 L16 49.4 L13.3 53 L11.6 65.5 L17.7 72.2 L26.6 75.5','M49.7 31.8 L56.7 38.8','M44.8 32.5 L51.8 39.5','M40.1 34.1 L47.1 41.1'], ['ث','ثـ','ـثـ','ـث'], 'tsa'),
    A('ج','jim','Mangkuk melengkung dengan satu titik di dalam.',
      ['M85.8 82.5 L62.2 86.8 L49.3 86.5 L34.3 83.7 L22.2 76.8 L17.6 71 L15 64.1 L15.3 51.7 L17.3 44.5 L27.4 30.4 L41.8 21.5 L45.3 16.3 L67.1 14.3 L72.6 10.9 L69.1 13.5 L45 16.1 L41.8 21.5 L29.1 28.7 L19.9 39.1 L17.1 45.1 L15.9 67.3 L22.2 76.8 L31.7 82.5 L17.9 17.8 L21.7 14.3 L28.6 12.6 L43.5 14.6 L45 16.1 L44.1 17.5 L43.8 14.6 L36.6 13.5 L19.9 15.5 L17.9 17.5','M42.7 50.4 L49.7 57.4'], ['ج','جـ','ـجـ','ـج'], 'jim'),
    A('ح','ha','Sama seperti jim tetapi TANPA titik.',
      ['M85.8 82.5 L62.2 86.8 L49.3 86.5 L34.3 83.7 L22.2 76.8 L17.6 71 L15 64.1 L15.3 51.7 L17.3 44.5 L27.4 30.4 L41.8 21.5 L45.3 16.3 L67.1 14.3 L72.6 10.9 L69.1 13.5 L45 16.1 L41.8 21.5 L29.1 28.7 L19.9 39.1 L17.1 45.1 L15.9 67.3 L22.2 76.8 L31.7 82.5 L17.9 17.8 L21.7 14.3 L28.6 12.6 L43.5 14.6 L45 16.1 L44.1 17.5 L43.8 14.6 L36.6 13.5 L19.9 15.5 L17.9 17.5'], ['ح','حـ','ـحـ','ـح'], 'ha (tebal)'),
    A('خ','kha','Jim dengan satu titik di ATAS.',
      ['M77.2 84.8 L59.3 88.1 L42.2 86.8 L29.5 81.1 L23.6 71.9 L24.7 57 L33.5 44.5 L43.8 38.4 L46.4 34.5 L61.7 33.2 L67.2 30.3 L64.5 32.3 L46.2 34.3 L43.8 38.4 L34.1 43.9 L27.1 51.8 L25 56.3 L24.1 73.2 L28.2 79.8 L36.1 84.8 L25.6 35.6 L28.5 32.9 L33.7 31.6 L46.2 34.3 L45.5 35.3 L45.3 33.2 L39.8 32.3 L27.1 33.8 L25.6 35.3','M41.0 9.4 L48.0 16.4'], ['خ','خـ','ـخـ','ـخ'], 'kha'),
    A('د','dal','Sudut lancip menghadap kiri. Tidak menyambung ke kiri.',
      ['M76.5 49.2 L67.5 34.5 L49.4 21 L62.4 29.4 L73.1 41.8 L78.2 56.5 L78.2 66.6 L72.6 72.8 L56.8 78.5 L41 81.3 L31.4 81.3 L27.4 79.6'], ['د','د','ـد','ـد'], 'dal'),
    A('ذ','dzal','Dal dengan satu titik di atas.',
      ['M66 66.2 L59.9 56.6 L49.7 49.1 L58.2 54.9 L63.9 61.7 L66.7 68.9 L67 76.7 L63.6 80.4 L56.5 83.2 L44.6 85.5 L36.4 84.5','M43.3 12.2 L50.3 19.2'], ['ذ','ذ','ـذ','ـذ'], 'dzal'),
    A('ر','ra','Sabit turun ke kiri bawah. Tidak menyambung ke kiri.',
      ['M80.7 53 L81.2 41.8 L72.9 22.7 L70.8 11 L72.9 23.2 L78.1 32.7 L80.7 53 L76.8 61.3 L65.2 75.1 L52.2 83.8 L44.4 86.4 L26.6 84.2 L18.4 81.2 L26.6 83.8'], ['ر','ر','ـر','ـر'], 'ra'),
    A('ز','zai','Ra dengan satu titik di atas.',
      ['M69.2 67.7 L69.4 60.7 L63 41.5 L64.3 49.1 L67.6 55 L69.2 67.7 L65.9 74.2 L57.6 83.1 L49.5 87.7 L44.1 88.5 L30.3 85.2 L35.4 86.9','M47.5 11.4 L54.5 18.4'], ['ز','ز','ـز','ـز'], 'zai'),
    A('س','sin','Tiga gigi kecil lalu mangkuk.',
      ['M89.9 22.5 L89.4 33.6 L83.8 36.6 L79.2 35.4 L68.4 40.8 L61.9 41.5 L60.4 43.8 L60.1 57.2 L57.6 62.1 L50.9 68.5 L39.3 73.1 L23.2 73.4 L16.5 70.6 L12.1 65.9 L9.8 55.4 L15.4 39.7 L10.8 63.6 L14.4 68.8 L21.4 72.6 L59.6 39.7 L61.9 41.5 L58.9 38.4 L58.6 31.5 L59.6 39.7 L79.2 35.4 L77.6 32 L78.4 26.4 L80.2 35.6'], ['س','سـ','ـسـ','ـس'], 'sin'),
    A('ش','syin','Sin dengan tiga titik di atas.',
      ['M86.8 39.7 L86.6 49.6 L81.1 52.7 L76.9 51.5 L67.6 56.3 L61 57.2 L59.6 59.3 L59.3 71.7 L56.3 77.1 L50.8 82.1 L40.2 86.3 L25.3 86.6 L19.1 84 L15.1 79.7 L13.2 75.7 L13.2 68.1 L17.9 55.8 L13.9 77.6 L17.2 82.3 L23.6 85.8 L58.9 55.6 L61 57.2 L58.2 54.4 L57.9 48 L58.9 55.6 L76.9 51.5 L75.4 48.5 L76.1 43.3 L77.8 51.8','M71.2 19.8 L78.2 26.8','M66.5 20.5 L73.5 27.5','M66.1 10.2 L73.1 17.2'], ['ش','شـ','ـشـ','ـش'], 'syin'),
    A('ص','shad','Lingkaran kecil lalu mangkuk — huruf TEBAL.',
      ['M88.9 34 L88.5 38.9 L79.3 44.4 L61.5 46.2 L61.3 44 L63.2 40.5 L73.2 33.3 L83.4 30.3 L88.9 33.8 L85.5 30.9 L88.5 38.7 L86.9 40.3 L88.5 38.9 L80.4 44 L75.4 45.2 L69.5 35.8 L68.5 36.4 L75.2 32.3 L63.2 40.5 L61.5 46.2 L50.5 45.4 L49.3 56.4 L46.6 61.8 L33.8 68.9 L19.9 69.5 L12.3 64.4 L10.2 55.4 L14.5 41.7 L10.5 60.3 L12.3 64.4 L17.6 68.7 L48.1 43.2 L50.5 45.4 L47.4 42.1 L47 36.6 L48.3 43.4'], ['ص','صـ','ـصـ','ـص'], 'shad'),
    A('ض','dhad','Shad dengan satu titik di atas — huruf TEBAL.',
      ['M88.9 42.1 L87.7 47.9 L79.3 52.6 L61.5 54.4 L61.3 52.1 L63.2 48.7 L70.9 42.9 L83.4 38.5 L88.9 41.9 L85.5 39.1 L88.5 46.8 L86.9 48.5 L88.5 47 L84.8 50.1 L75.4 53.4 L69.5 44 L68.5 44.6 L75.2 40.5 L63.2 48.7 L61.5 54.4 L50.5 53.6 L49.3 64.6 L47.2 69.1 L43.4 72.8 L33.8 77.1 L19.9 77.7 L12.3 72.6 L10.2 63.6 L14.5 49.9 L10.5 68.5 L12.3 72.6 L17.6 76.9 L48.1 51.3 L50.5 53.6 L47.4 50.3 L47 44.8 L48.3 51.5','M63.4 18.8 L70.4 25.8'], ['ض','ضـ','ـضـ','ـض'], 'dhad'),
    A('ط','tha','Kotak lonjong dengan tiang tegak — huruf TEBAL.',
      ['M81.9 64.4 L80.7 72 L72.5 77.9 L47.2 84.7 L40.7 85 L39 83.2 L40.5 78.2 L44.9 73.2 L41.3 10.1 L42.8 34.4 L59 64.4 L74.8 60 L81.9 64.4 L76.9 60.3 L80.4 72.6 L65.7 80.3 L59.5 64.1 L44.9 72.6 L40.5 77.9 L40.5 85.5 L30.2 86.1 L15.2 82 L62.8 62.9'], ['ط','طـ','ـطـ','ـط'], 'tha'),
    A('ظ','zha','Tha dengan satu titik di atas — huruf TEBAL.',
      ['M81.9 64.4 L80.7 72 L72.5 77.9 L47.2 84.7 L40.7 85 L39 83.2 L40.5 78.2 L44.9 73.2 L41.3 10.1 L42.8 34.4 L59 64.4 L74.8 60 L81.9 64.4 L76.9 60.3 L80.4 72.6 L65.7 80.3 L59.5 64.1 L44.9 72.6 L40.5 77.9 L40.5 85.5 L30.2 86.1 L15.2 82 L62.8 62.9','M65.7 30.9 L72.7 37.9'], ['ظ','ظـ','ـظـ','ـظ'], 'zha'),
    A('ع','ain','Bunyi khas Arab dari pangkal kerongkongan. Bentuknya seperti mata.',
      ['M78.6 82.2 L60.7 87.5 L48.6 88 L35.7 85.6 L25.3 78.7 L21.4 69.4 L22.6 55.1 L25.7 47 L35.7 32.3 L26.4 28.5 L23.8 22.5 L27.4 17 L33.8 12 L37.2 11.3 L43.6 13.2 L32.9 12.5 L24.1 21.8 L24.5 26.6 L35.2 33.2 L34.5 34.9 L36 32 L42.9 30.4 L50.5 26.1 L56.4 20.4 L32.6 38 L26.4 45.6 L24.3 50.1 L21.9 71.3 L23.3 75.6 L30.5 83.2 L40.2 86.8 L70 85.3 L75 83.7'], ['ع','عـ','ـعـ','ـع'], 'ain'),
    A('غ','ghain','Ain dengan satu titik — bunyinya seperti "r" Prancis.',
      ['M73.6 84 L60 88.1 L48.8 88.7 L38.2 86.7 L29.6 81 L26.4 73.4 L27 63.1 L30 54.9 L38.2 42.7 L29.6 38.8 L28.4 34.7 L33.3 28.2 L37.6 25.7 L44.7 27 L35.9 26.4 L28.6 33.9 L29 38 L37.8 43.5 L37.2 44.9 L38.4 42.5 L51.8 36.9 L55.3 32.9 L35.7 47.4 L30.6 53.7 L28.8 57.5 L26.8 74.9 L28.2 78.9 L32.7 84 L42 87.7 L70.6 85.1','M29.6 9.3 L36.6 16.3'], ['غ','غـ','ـغـ','ـغ'], 'ghain'),
    A('ف','fa','Lingkaran kecil dengan ekor dan satu titik di atas.',
      ['M90.4 55.2 L85.8 49.7 L79.9 54.4 L73.6 53.1 L73.6 46.9 L79.9 42.2 L82.4 42.2 L85 45.1 L85.8 49.7 L83.2 52.3 L85.8 49.5 L90.4 55.2 L90.2 61.4 L84.8 67.3 L72.9 73.5 L55.8 78.7 L39.8 80.8 L23 79.7 L15.2 76.4 L9.8 69.4 L10.3 61.1 L13.7 54.1 L10.8 71.7 L17 77.4 L23 79.5 L73.4 52.6 L74.4 53.6 L73.6 46.6 L78 43 L84.2 43.8 L82.2 53.4','M60.8 16.5 L67.8 23.5'], ['ف','فـ','ـفـ','ـف'], 'fa'),
    A('ق','qaf','Seperti fa tetapi berekor mangkuk dan DUA titik. Bunyinya dari pangkal lidah.',
      ['M78.1 57.2 L76.7 53.8 L73.1 51.3 L64.6 54.1 L60 52.7 L58.6 48.4 L60.9 42.2 L67.4 39.7 L71.1 42.5 L72.8 51.6 L71.6 43.4 L68.5 40.2 L62.9 41.1 L59.8 43.6 L59.8 52.4 L77.9 56.9 L77.3 68.2 L71.4 75.9 L61.5 82.4 L49.3 86.1 L38.8 86.1 L27.2 80.7 L23 73.6 L23.8 60.3 L30.6 47 L23.3 74.5 L32 83.8','M63.0 11.8 L70.0 18.8','M55.0 13.3 L62.0 20.3'], ['ق','قـ','ـقـ','ـق'], 'qaf'),
    A('ك','kaf','Seperti tanda centang besar dengan coretan kecil di dalam.',
      ['M75.6 65.1 L66.4 9.4 L75.6 65.1 L75.6 79.7 L70.9 84.2 L61.9 86.4 L26.9 86.1','M41.5 42.7 L41.5 60.1'], ['ك','كـ','ـكـ','ـك'], 'kaf'),
    A('ل','lam','Tiang tinggi dengan mangkuk di bawah.',
      ['M70 76.7 L72 73.7 L72.5 66.9 L67.6 9.6 L31.3 58.2 L28.3 65.5 L27.8 74.5 L32.1 82.5 L42.5 86.3 L58.6 84.4 L69.5 77.8 L62.4 83 L33.2 83.3 L28.9 78.1 L29.4 62.3 L33 55.5'], ['ل','لـ','ـلـ','ـل'], 'lam'),
    A('م','mim','Lingkaran kecil dengan ekor turun.',
      ['M57.8 24.6 L55.7 26.4 L42.2 28 L40.9 26.7 L42.2 19.3 L49.9 14.6 L55.9 17.7 L58 24.1 L55.9 26.2 L57.8 24.3 L53.6 15.6 L45.1 16.4 L42.5 18.8 L42.5 28 L35.6 37.5 L44.1 80.7 L44.6 90.4 L48 27.2'], ['م','مـ','ـمـ','ـم'], 'mim'),
    A('ن','nun','Mangkuk dalam dengan satu titik di atas.',
      ['M75.5 59.3 L67.6 34.5 L67.6 27.6 L68 36.4 L75.5 59.3 L74.8 70.4 L68.3 78.3 L61.8 82.2 L52 84.8 L40.5 85.1 L30.1 80.6 L24.8 72.1 L25.5 60 L30.7 49.2 L25.8 75 L29.4 79.9 L35 83.2','M44.6 11.7 L51.6 18.7'], ['ن','نـ','ـنـ','ـن'], 'nun'),
    A('ه','ha','Lingkaran kecil — bentuknya paling berubah-ubah antar posisi.',
      ['M72.6 49.4 L65.7 37.5 L58.1 30.6 L51.9 28.1 L49.4 19.9 L51.9 28.1 L39.3 33.1 L34.3 36.8 L29.9 44.4 L27.4 53.8 L27.4 67.6 L34.3 75.1 L46.9 77.6 L62.5 72.6 L71.3 63.8 L72.6 49.4 L65.7 37.5 L60 31.8 L60.7 33.1 L45 30.6 L36.8 34.3 L33.7 37.5 L28.1 49.4 L29.9 45.6 L28.7 70.1 L31.2 73.2 L60.7 73.8 L70.1 65.7'], ['ه','هـ','ـهـ','ـه'], 'ha'),
    A('و','waw','Lingkaran dengan ekor turun ke kiri. Tidak menyambung ke kiri.',
      ['M78.7 54.6 L80 38.9 L77.9 36.7 L64.4 38.9 L59.6 36.3 L59.1 26.3 L62.2 21.9 L70.5 18.4 L76.5 23.7 L77.9 36.7 L75.7 22.4 L73.5 19.8 L65.7 20.2 L60.4 24.1 L59.6 35.9 L78.7 54.6 L74.8 62.4 L62.6 76.8 L48.7 86.8 L30.8 87.6 L17.4 85.5'], ['و','و','ـو','ـو'], 'waw'),
    A('ي','ya','Perahu dengan DUA titik di bawah.',
      ['M76.8 13.6 L69.1 14.6 L62 18.6 L55.8 25.3 L53.2 33.3 L54.5 38.6 L58.2 41 L76.1 44.2 L76.6 50.3 L67.3 57.2 L53.5 62 L34.1 62.8 L23.4 56.6 L20.5 51.1 L20.2 42.3 L22.9 33.3 L27.9 24.7 L20.2 49.7 L24.7 58 L31.1 61.7','M45.7 80.4 L52.7 87.4','M37.5 82.1 L44.5 89.1'], ['ي','يـ','ـيـ','ـي'], 'ya')
  ]
}
],

compound: {
  tense: [
    ['َ fathah','a pendek','Garis miring DI ATAS huruf.'],
    ['ِ kasrah','i pendek','Garis miring DI BAWAH huruf.'],
    ['ُ dhammah','u pendek','Lingkaran kecil di atas huruf.'],
    ['ْ sukun','tanpa vokal','Lingkaran kecil menandai huruf mati.'],
    ['ّ syaddah','konsonan ganda','Huruf dibaca dobel: مُدَرِّس mudarris.']
  ],
  vowels: [
    ['ا','ā panjang','Alif memanjangkan bunyi a.'],
    ['و','ū panjang','Waw memanjangkan bunyi u.'],
    ['ي','ī panjang','Ya memanjangkan bunyi i.'],
    ['ً ٍ ٌ tanwin','an / in / un','Vokal ganda di akhir kata, menandai kata benda tak tentu.'],
    ['ال','al- (kata sandang)','Menandai kata tertentu; pada 14 "huruf syamsiyah" lam-nya tidak dibaca: الشمس asy-syams.']
  ]
},

syllable: {
  rules: [
    ['Ditulis dan dibaca dari KANAN ke KIRI.','كتب dibaca ka-ta-ba dari kanan'],
    ['Huruf menyambung ke kiri, kecuali enam huruf: ا د ذ ر ز و.','بابا vs بارد','Huruf menyambung ke kiri, kecuali enam huruf: a d dz r z u.'],
    ['Bentuk huruf berubah menurut posisi: terpisah, awal, tengah, akhir.','ه هـ ـهـ ـه'],
    ['Titik adalah pembeda utama; badan huruf sering sama persis.','ب ت ث hanya berbeda titik']
  ],
  demo: [
    { block:'كِتَاب', parts:['ك','ت','ا','ب'], rom:'kitāb', layout:'buku' },
    { block:'مَكْتَب', parts:['م','ك','ت','ب'], rom:'maktab', layout:'kantor / meja' },
    { block:'سَلَام', parts:['س','ل','ا','م'], rom:'salām', layout:'damai' },
    { block:'مَدْرَسَة', parts:['م','د','ر','س','ة'], rom:'madrasah', layout:'sekolah' },
    { block:'شُكْرًا', parts:['ش','ك','ر','ا'], rom:'syukran', layout:'terima kasih' },
    { block:'بَيْت', parts:['ب','ي','ت'], rom:'bayt', layout:'rumah' }
  ],
  batchim:`AKAR TIGA HURUF adalah kunci efisiensi bahasa Arab. Satu akar dimasukkan ke pola
tetap untuk menghasilkan puluhan kata:

akar ك-ت-ب (menulis)  →  كَتَبَ kataba (dia menulis) · كِتَاب kitāb (buku)
                        مَكْتَب maktab (kantor) · مَكْتَبَة maktabah (perpustakaan)
                        كَاتِب kātib (penulis) · مَكْتُوب maktūb (yang tertulis)

Menguasai 10 pola dan 100 akar memberi sekitar seribu kata — jauh lebih cepat daripada
menghafal kata satu per satu.`
},

phonology: {
  triples: [
    ['س / ص','sin vs shad','Keduanya "s", tetapi shad diucapkan dengan lidah dinaikkan sehingga terdengar berat.'],
    ['ت / ط','ta vs tha','Sama, tha "berat".'],
    ['د / ض','dal vs dhad','Dhad adalah bunyi khas Arab; bahasa Arab disebut "bahasa dhad".'],
    ['ه / ح / خ','ha ringan / ha tebal / kha','ه seperti "h" Indonesia, ح dari tengah kerongkongan, خ bergesek seperti berdehem.'],
    ['ك / ق','kaf vs qaf','Qaf jauh lebih ke belakang, dari pangkal lidah menyentuh anak tekak.']
  ],
  liaison: [
    ['الشَّمْس','asy-syams','Kata sandang ال melebur pada huruf syamsiyah.'],
    ['القَمَر','al-qamar','Pada huruf qamariyah, lam tetap dibaca.'],
    ['بِسْمِ اللهِ','bismillāh','Dua kata menyatu dalam pengucapan.'],
    ['مُدَرِّس','mudarris','Syaddah membuat huruf ر dibaca ganda.'],
    ['كِتَابٌ','kitābun','Tanwin di akhir kata menandai kata benda tak tentu.']
  ],
  notes: [
    'Vokal pendek biasanya tidak ditulis pada teks umum; pembaca menebaknya dari pola kata.',
    'Al-Qur\'an dan buku pelajaran memakai harakat lengkap; koran dan buku dewasa tidak.',
    'Panjang vokal wajib dijaga: perbedaan a dan ā mengubah makna sepenuhnya.'
  ]
},

phrases: [
  { g:'Sapaan', items:[
    ['السَّلَامُ عَلَيْكُم','as-salaamu alaykum','Semoga keselamatan atasmu (salam utama)'],
    ['وَعَلَيْكُمُ السَّلَام',"wa'alaykumu as-salaam",'Dan atasmu keselamatan (jawaban)'],
    ['صَبَاحُ الخَيْر','shabaahu al-khayr','Selamat pagi'],
    ['مَسَاءُ الخَيْر',"masaa'u al-khayr",'Selamat sore'],
    ['كَيْفَ حَالُك؟','kayfa haaluk?','Apa kabar?']
  ]},
  { g:'Sopan santun', items:[
    ['شُكْرًا','syukran','Terima kasih'],
    ['عَفْوًا','afwan','Sama-sama / maaf'],
    ['مِنْ فَضْلِك','min fadhlik','Tolong / silakan'],
    ['آسِف','aasif','Maaf'],
    ['لَا بَأْس',"laa ba's",'Tidak apa-apa']
  ]},
  { g:'Bertahan hidup', items:[
    ['كَمِ الثَّمَن؟','kami ats-tsaman?','Berapa harganya?'],
    ['أُرِيدُ هَذَا','uriidu hadzaa','Saya mau yang ini'],
    ['أَيْنَ الحَمَّام؟','ayna al-hammaam?','Di mana kamar mandi?'],
    ['سَاعِدْنِي',"saa'idnii",'Tolong saya'],
    ['لَا أَفْهَم','laa afham','Saya tidak mengerti'],
    ['تَكَلَّمْ بِبُطْء',"takallam bibuth'",'Tolong bicara pelan'],
    ['أَتَكَلَّمُ العَرَبِيَّةَ قَلِيلًا','atakallamu al-arabiyyata qaliilan','Saya bisa bahasa Arab sedikit']
  ]},
  { g:'Perkenalan', items:[
    ['اِسْمِي ○○','ismii ○○','Nama saya ○○'],
    ['أَنَا مِنْ إِنْدُونِيسِيَا','anaa min induuniisiyaa','Saya dari Indonesia'],
    ['أَنَا طَالِب','anaa thaalib','Saya pelajar (laki-laki)'],
    ['أَنَا طَالِبَة','anaa thaalibah','Saya pelajar (perempuan)']
  ]}
],

numbers: {
  note:'Angka Arab ditulis dari kiri ke kanan meski kalimatnya kanan ke kiri. Angka "Arab Timur" (١٢٣) masih dipakai di banyak negara.',
  sino: { title:'Angka 1–10', use:'seluruh keperluan',
    list:[['١ وَاحِد','wāḥid','1'],['٢ اِثْنَان','iṡnān','2'],['٣ ثَلَاثَة','ṡalāṡah','3'],
          ['٤ أَرْبَعَة','arbaʿah','4'],['٥ خَمْسَة','khamsah','5'],['٦ سِتَّة','sittah','6'],
          ['٧ سَبْعَة','sabʿah','7'],['٨ ثَمَانِيَة','ṡamāniyah','8'],['٩ تِسْعَة','tisʿah','9'],
          ['١٠ عَشَرَة','ʿasyarah','10'],['١٠٠ مِئَة','mi\'ah','100'],['١٠٠٠ أَلْف','alf','1.000']] },
  native: { title:'Kata yang sudah masuk bahasa Indonesia', use:'pengingat bahwa kamu sudah punya modal',
    list:[['كِتَاب','kitāb','kitab'],['كُرْسِيّ','kursī','kursi'],['وَقْت','waqt','waktu'],
          ['صَبْر','ṣabr','sabar'],['حِكْمَة','ḥikmah','hikmah'],['شُكْر','syukr','syukur'],
          ['عَقْل','ʿaql','akal'],['قَلْب','qalb','kalbu'],['دُنْيَا','dunyā','dunia'],['خَبَر','khabar','kabar']] },
  clock:'Jam memakai kata سَاعَة (sāʿah): السَّاعَة الثَّالِثَة = pukul tiga.'
},

grammar: [
{ id:'ar-g1', level:'A1', title:'Kalimat Nominal (جملة اسمية)', titleId:'Kalimat Tanpa Kata Kerja',
  why:'Bahasa Arab tidak memakai kata "adalah" pada kalimat berita masa kini — persis seperti bahasa Indonesia.',
  form:'Mubtada (subjek) + Khabar (keterangan)\nالبَيْتُ كَبِيرٌ = rumah itu besar',
  notes:['Subjek memakai kata sandang ال; keterangan tidak.',
         'Untuk masa lampau baru dipakai kata kerja كَانَ (kāna).',
         'Negatif memakai لَيْسَ (laisa).'],
  ex:[['الطَّالِبُ مُجْتَهِدٌ.','Pelajar itu rajin.','ath-thaalibu mujtahidun.'],
      ['أَنَا مُدَرِّسٌ.','Saya seorang guru.','anaa mudarrisun.'],
      ['البَيْتُ كَبِيرٌ.','Rumah itu besar.','al-baytu kabiirun.']],
  traps:[['البيت هو كبير','البيت كبير','Tidak perlu kata penghubung "adalah".']],
  drills:[
    { t:'mcq', q:'Kalimat nominal Arab masa kini memakai kata kerja?', opts:['ya, selalu','tidak','hanya untuk jamak','hanya untuk perempuan'], a:1 },
    { t:'mcq', q:'Negatif kalimat nominal memakai', opts:['لا','ليس','ما','لم'], a:1 }
  ]},
{ id:'ar-g2', level:'A1', title:'Gender: مذكر dan مؤنث', titleId:'Kata Berjenis Kelamin',
  why:'Semua kata benda Arab berjenis kelamin, dan kata sifatnya harus mengikuti.',
  form:'Perempuan biasanya diakhiri ة (ta marbutah)\nطَالِب (pelajar laki-laki) → طَالِبَة (pelajar perempuan)',
  notes:['Kata sifat mengikuti gender kata bendanya: طَالِبَةٌ مُجْتَهِدَةٌ.',
         'Beberapa kata perempuan tanpa ة: شَمْس (matahari), أُمّ (ibu), يَد (tangan).',
         'Kata sifat juga mengikuti ketentuan ال: البَيْتُ الكَبِيرُ.'],
  ex:[['مُدَرِّسٌ جَدِيدٌ','guru laki-laki yang baru','mudarrisun jadiidun'],
      ['مُدَرِّسَةٌ جَدِيدَةٌ','guru perempuan yang baru','mudarrisahun jadiidahun'],
      ['السَّيَّارَةُ الجَمِيلَةُ','mobil yang indah itu','as-sayyaarahu al-jamiilahu']],
  traps:[['طالبة مجتهد','طالبة مجتهدة','Kata sifat harus ikut gender.']],
  drills:[
    { t:'mcq', q:'Penanda kata benda perempuan yang paling umum adalah', opts:['ال','ة','ون','ي'], a:1 },
    { t:'mcq', q:'"Guru perempuan yang rajin" =', opts:['مدرس مجتهد','مدرسة مجتهد','مدرسة مجتهدة','مدرس مجتهدة'], a:2 }
  ]},
{ id:'ar-g3', level:'A2', title:'Akar Tiga Huruf & Pola', titleId:'Sistem Akar Kata',
  why:'Ini alat paling efisien dalam bahasa Arab. Sekali paham, kosakatamu tumbuh berlipat tanpa menghafal satu per satu.',
  form:'Akar (3 konsonan) + pola = kata baru\nف-ع-ل adalah lambang pola: فَاعِل = pelaku, مَفْعُول = objek, مَفْعَل = tempat',
  notes:['كَتَبَ menulis → كَاتِب penulis → مَكْتَب tempat menulis (kantor).',
         'دَرَسَ belajar → دَارِس pelajar → مَدْرَسَة tempat belajar (sekolah).',
         'Begitu mengenali polanya, arti kata baru bisa ditebak tanpa kamus.'],
  ex:[['عَمِلَ / عَامِل / مَعْمَل','bekerja / pekerja / pabrik','amila / aamil / mamal'],
      ['طَبَخَ / طَابِخ / مَطْبَخ','memasak / juru masak / dapur','thabakha / thaabikh / mathbakh'],
      ['لَعِبَ / لَاعِب / مَلْعَب','bermain / pemain / lapangan','laiba / laaib / malab']],
  traps:[['Menghafal kata satu per satu.','Kenali akar dan polanya.','Jauh lebih lambat dan mudah lupa.']],
  drills:[
    { t:'mcq', q:'Pola مَفْعَل umumnya menandai', opts:['pelaku','tempat','waktu lampau','sifat'], a:1 },
    { t:'mcq', q:'Dari akar ك-ت-ب, "perpustakaan" adalah', opts:['كاتب','مكتب','مكتبة','مكتوب'], a:2 }
  ]}
],

vocab: [
{ id:'ar-core', title:'Kata Inti Sehari-hari', level:'A1', icon:'cards',
  words:[
    ['إِنْسَان','insaan','manusia'],['مَاء',"maa'",'air'],['طَعَام',"tha'aam",'makanan'],
    ['بَيْت','bayt','rumah'],['مَدْرَسَة','madrasah','sekolah'],['صَدِيق','shadiiq','teman'],
    ['وَقْت','waqt','waktu'],['مَال','maal','uang / harta'],['عَمَل','amal','pekerjaan'],
    ['اليَوْم','al-yawm','hari ini'],['غَدًا','ghadan','besok'],['أَمْس','ams','kemarin'],
    ['الآن','al-aan','sekarang'],['هُنَا','hunaa','di sini'],['هُنَاك','hunaak','di sana'],
    ['هَذَا','hadzaa','ini'],['ذَلِك','dzalik','itu'],['مَاذَا','maadzaa','apa'],
    ['مَنْ','man','siapa'],['أَيْنَ','ayna','di mana'],['مَتَى','mataa','kapan'],
    ['لِمَاذَا','limaadzaa','mengapa'],['كَيْفَ','kayfa','bagaimana'],['كَمْ','kam','berapa'],
    ['ذَهَبَ','dzahaba','pergi'],['جَاءَ',"jaa'a",'datang'],['أَكَلَ','akala','makan'],
    ['شَرِبَ','syariba','minum'],['نَظَرَ','nazhara','melihat'],['سَمِعَ',"sami'a",'mendengar'],
    ['فَعَلَ',"fa'ala",'melakukan'],['عِنْدَ','inda','punya / di sisi'],['كَبِير','kabiir','besar'],
    ['صَغِير','shaghiir','kecil'],['جَيِّد','jayyid','bagus'],['كَثِير','katsiir','banyak'],
    ['قَلِيل','qaliil','sedikit'],['جَدِيد','jadiid','baru'],['قَدِيم','qadiim','lama'],
    ['لَذِيذ','ladziidz','enak'],['غَالٍ','ghaalin','mahal'],['رَخِيص','rakhiish','murah']
  ]}
],

exam: {
  id:'alpt', name:'Ujian Bahasa Arab', full:'Arabic Language Proficiency Test / ujian setara CEFR',
  tagline:'Kecakapan bahasa Arab umumnya diukur pada skala CEFR A1–C2; beberapa lembaga memakai ALPT, ALT, atau ujian internal universitas.',
  overview:{
    skala:'A1 sampai C2 mengikuti Kerangka Acuan Umum Eropa (CEFR)',
    bagian:'Umumnya empat: menyimak, membaca, menulis, berbicara',
    ragam:'Ujian biasanya menguji Arab Baku Modern (فصحى), bukan dialek daerah',
    catatan:'Tidak ada satu ujian tunggal sedunia seperti IELTS; periksa ujian mana yang diminta lembaga tujuanmu'
  },
  levels:[
    ['A1','Pemula','Mengenali huruf, membaca kata berharakat, memperkenalkan diri.'],
    ['A2','Dasar','Percakapan rutin, membaca teks pendek berharakat.'],
    ['B1','Menengah','Mengikuti percakapan sehari-hari dan membaca berita sederhana tanpa harakat.'],
    ['B2','Menengah atas','Membaca surat kabar dan mengikuti diskusi; ambang umum kuliah di Timur Tengah.'],
    ['C1','Mahir','Memahami teks klasik dan akademik, menulis esai berargumen.'],
    ['C2','Sangat mahir','Menguasai ragam klasik dan modern, termasuk sastra dan hukum.']
  ],
  sections:[
    { name:'الاستماع Menyimak', items:'Bervariasi', note:'Dialog dan siaran berita dalam Arab Baku Modern.' },
    { name:'القراءة Membaca', items:'Bervariasi', note:'Teks tanpa harakat pada tingkat B1 ke atas — inilah lompatan tersulit.' },
    { name:'الكتابة Menulis', items:'Bervariasi', note:'Dari mengisi formulir sampai esai berargumen.' },
    { name:'المحادثة Berbicara', items:'Wawancara', note:'Sebagian ujian menilai kemampuan berdialek selain Arab baku.' }
  ],
  tactics:[
    { title:'Lepas dari harakat sedini mungkin', budget:'—',
      steps:['Mulai membaca teks tanpa harakat sejak level A2 akhir, walaupun terasa lambat.',
             'Tebak vokal dari pola kata, bukan dari tanda baca.',
             'Baca ulang teks yang sudah dipahami tanpa harakat untuk melatih pengenalan pola.'],
      why:'Semua teks nyata — koran, buku, papan nama — tidak berharakat. Terlalu lama bergantung harakat membuat mandek di B1.' },
    { title:'Bangun kosakata lewat akar, bukan daftar', budget:'15 mnt/hari',
      steps:['Setiap kata baru, tulis akar tiga hurufnya.',
             'Cari empat turunan lain dari akar yang sama.',
             'Satu akar = lima kata sekali belajar.'],
      why:'Ini keunggulan struktural bahasa Arab yang tidak dimiliki bahasa lain.' },
    { title:'Latih bunyi kerongkongan secara terpisah', budget:'10 mnt/hari',
      steps:['Latih pasangan: ه/ح, ك/ق, س/ص, ت/ط.',
             'Rekam dan bandingkan; telinga Indonesia perlu waktu untuk membedakannya.',
             'Jangan menumpuk kosakata sebelum bunyi ini stabil.'],
      why:'Salah bunyi tebal/tipis mengubah makna, dan sulit diperbaiki setelah jadi kebiasaan.' }
  ],
  sources:[
    ['Kerangka CEFR untuk bahasa Arab — Council of Europe','https://www.coe.int/en/web/common-european-framework-reference-languages'],
    ['Arabic Language Proficiency Test (ALPT)','https://www.arabacademy.com']
  ]
}
};
