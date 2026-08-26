/* ── Bahan ajar bertahap: Jerman ──────────────────────────────────
   Bagian "Pahami dulu" untuk tiap topik: konsepnya dijelaskan DULU,
   selangkah demi selangkah dengan contoh kecil, sebelum pemelajar
   bertemu rumus dan latihan.

   Yang memicu berkas ini: keluhan nyata pemakai — pelajaran berisi
   rumus setengah baris dan tiga catatan, lalu langsung menilai. Itu
   kartu contekan, bukan pengajaran. Urutan yang benar mengikuti pola
   PPP yang dipakai kurikulum bahasa internasional (CEFR):
   presentation (paham) → practice (latihan) → production.

   Bentuk: id topik -> daftar bagian [judul, paragraf, contoh?]
   dengan contoh = [kalimat Jerman, arti, romanisasi|null].
   Ditempelkan ke topik oleh pasangAjar() di js/course.js.            */

export const AJAR = {

'de-g1': [
  ['Setiap kata benda punya jenis kelamin',
   'Dalam bahasa Indonesia, "meja" ya "meja" saja. Dalam bahasa Jerman, setiap kata benda lahir dengan salah satu dari tiga jenis kelamin: maskulin (der), feminin (die), atau netral (das). Ini bukan tentang makna — tidak ada yang "laki-laki" dari sebuah meja. Ini sifat bawaan kata yang harus dihafal bersama katanya.',
   ['der Tisch, die Lampe, das Bett', 'meja, lampu, tempat tidur', null]],
  ['Mengapa tidak boleh diabaikan',
   'Jenis kelamin menentukan bentuk hampir semua kata di sekitarnya: kata sandang, kata sifat, kata ganti. Salah memilih der/die/das membuat seluruh kalimat ikut salah, dan penutur asli langsung mendengarnya. Karena itu jangan pernah menghafal "Tisch = meja"; hafalkan "der Tisch".',
   ['der Tisch → er ist groß', 'meja itu → ia besar', null]],
  ['Ada pola yang bisa dipegang',
   'Untunglah sebagian akhiran hampir selalu menentukan jenisnya: -ung, -heit, -keit, -schaft, -ion selalu feminin (die Zeitung, die Nation); -chen dan -lein selalu netral (das Mädchen); -er untuk pelaku biasanya maskulin (der Lehrer). Kata majemuk mengikuti kata TERAKHIRNYA: die Haustür karena die Tür.',
   ['die Wohnung, das Mädchen, der Arbeiter', 'apartemen, gadis, pekerja', null]],
],

'de-g2': [
  ['Satu aturan yang mengatur semua kalimat',
   'Kalimat berita bahasa Jerman punya satu hukum besi: kata kerja yang berkonjugasi SELALU berdiri di posisi kedua. Bukan kata kedua — posisi kedua. Satu posisi bisa diisi beberapa kata sekaligus, misalnya keterangan waktu "heute Morgen".',
   ['Ich lerne Deutsch.', 'Saya belajar bahasa Jerman.', null]],
  ['Apa pun boleh di depan, kata kerja tidak bergeser',
   'Kalau kalimat dibuka dengan keterangan — waktu, tempat, apa pun — subjeknya pindah ke BELAKANG kata kerja, karena posisi kedua sudah milik kata kerja. Di sinilah penutur Indonesia paling sering tergelincir: kita terbiasa "Hari ini saya pergi", lalu menulis "Heute ich gehe". Yang benar: "Heute gehe ich".',
   ['Heute gehe ich nach Hause.', 'Hari ini saya pulang.', null]],
  ['Anak kalimat main dengan aturan lain',
   'Begitu ada kata seperti weil, dass, atau wenn, kata kerjanya justru lari ke UJUNG anak kalimat. Dua aturan ini berpasangan: kalimat utama = posisi kedua, anak kalimat = posisi terakhir. Menguasai keduanya membuat kalimatmu langsung terdengar Jerman.',
   ['Ich bleibe zu Hause, weil ich müde bin.', 'Saya tinggal di rumah karena saya lelah.', null]],
],

'de-g3': [
  ['Kasus: peran kata dalam kalimat diberi seragam',
   'Bahasa Indonesia menunjukkan siapa melakukan apa lewat urutan kata. Bahasa Jerman menandainya lewat KASUS: bentuk kata sandang berubah menurut peran kata bendanya. Nominativ untuk pelaku, Akkusativ untuk sasaran langsung perbuatan.',
   ['Der Mann sieht den Hund.', 'Lelaki itu melihat anjing itu.', null]],
  ['Hanya der yang berubah',
   'Kabar baiknya: di Akkusativ, hanya kata maskulin yang berubah bentuk — der menjadi den, ein menjadi einen. Die, das, dan jamak tidak berubah sama sekali. Jadi seluruh perhatianmu cukup ke kata benda maskulin.',
   ['Ich sehe den Tisch, die Lampe, das Bett.', 'Saya melihat meja, lampu, tempat tidur itu.', null]],
  ['Karena kasus, urutan jadi bebas',
   'Karena den sudah berteriak "akulah sasarannya", bahasa Jerman boleh membalik urutan tanpa mengubah makna: "Den Hund sieht der Mann" tetap berarti lelaki itu yang melihat. Inilah alasan kasus itu ada — ia membebaskan urutan kata.',
   ['Den Hund sieht der Mann.', 'Anjing itu dilihat si lelaki (penekanan pada anjing).', null]],
],

'de-g4': [
  ['Satu kata kerja, dua keping',
   'Banyak kata kerja Jerman terdiri dari awalan + kata kerja dasar: aufstehen (bangun), einkaufen (berbelanja), anrufen (menelepon). Maknanya sering tidak bisa ditebak dari bagian-bagiannya — aufstehen bukan sekadar "berdiri ke atas".',
   ['aufstehen, einkaufen, anrufen', 'bangun, berbelanja, menelepon', null]],
  ['Di kalimat utama, awalannya terlempar ke ujung',
   'Saat dikonjugasikan, awalannya lepas dan pindah ke UJUNG kalimat. Ini terasa aneh bagi penutur Indonesia — kata kerjanya terbelah dua, dan kamu baru tahu makna penuhnya setelah kalimat selesai. "Ich stehe ... auf" — barulah jelas ia bangun tidur.',
   ['Ich stehe um sieben Uhr auf.', 'Saya bangun jam tujuh.', null]],
  ['Kapan ia menyatu kembali',
   'Dalam anak kalimat, kata kerja pindah ke ujung dan menyatu lagi: "...weil ich um sieben aufstehe". Dengan zu, sisipannya di tengah: aufzustehen. Ciri awalan yang bisa lepas: ia BERTEKANAN saat diucapkan — AUFstehen lepas, tapi ver-, be-, ent- yang tak bertekanan tidak pernah lepas.',
   ['..., weil ich früh aufstehe.', '..., karena saya bangun pagi.', null]],
],

'de-g5': [
  ['Kata kerja berubah menurut pelakunya',
   'Dalam bahasa Indonesia, "makan" tetap "makan" siapa pun pelakunya. Kata kerja Jerman mengganti akhirannya untuk tiap pelaku. Ambil batangnya (infinitif minus -en), lalu pasang akhiran: wohnen → wohn- → ich wohne.',
   ['wohnen → ich wohne', 'tinggal → saya tinggal', null]],
  ['Enam akhiran yang sangat teratur',
   'Polanya rapi dan berlaku untuk ribuan kata kerja: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Perhatikan: wir dan sie/Sie kembali ke bentuk infinitif. Hafalkan sebagai nyanyian enam baris, bukan tabel.',
   ['ich wohne, du wohnst, er wohnt', 'saya / kamu / dia tinggal', null]],
  ['Segelintir yang membandel',
   'Beberapa kata kerja sering dipakai mengubah vokal batangnya KHUSUS pada du dan er/sie/es: fahren → du fährst, sprechen → du sprichst, lesen → du liest. Dan dua kata kerja terpenting — sein (ich bin, du bist) dan haben (ich habe, du hast) — sepenuhnya hafalan. Justru karena paling sering dipakai, mereka paling cepat melekat.',
   ['fahren → er fährt nach Berlin', 'berkendara → dia berkendara ke Berlin', null]],
],

'de-g6': [
  ['Kata kerja pembantu niat dan kemampuan',
   'Modalverben menyatakan SIKAP terhadap perbuatan: können (bisa), müssen (harus), wollen (mau), dürfen (boleh), sollen (sebaiknya/disuruh), mögen (suka). Bahasa Indonesia juga punya kata-kata ini, jadi konsepnya tidak asing — yang baru adalah tata letaknya.',
   ['Ich kann schwimmen.', 'Saya bisa berenang.', null]],
  ['Modal di posisi dua, kata kerja utama di ujung',
   'Modal mengambil posisi kedua dan dikonjugasikan; kata kerja utamanya berdiri di UJUNG kalimat dalam bentuk dasar. Ini "kurung kata kerja" (Satzklammer) — pola yang sama akan kamu temui lagi di Perfekt dan pasif. Kuasai di sini, dan dua topik lain jadi gratis.',
   ['Ich muss heute lange arbeiten.', 'Hari ini saya harus bekerja lama.', null]],
  ['Dua jebakan makna',
   'Pertama: modal berkonjugasi aneh — ich kann (bukan ich könne), tanpa akhiran di ich dan er. Kedua, yang lebih berbahaya: "nicht müssen" berarti TIDAK PERLU, bukan tidak boleh. Larangan memakai "nicht dürfen". Salah memilih di sini mengubah izin menjadi larangan.',
   ['Du musst nicht kommen.', 'Kamu tidak perlu datang (bukan: dilarang datang).', null]],
],

'de-g7': [
  ['Bentuk lampau yang dipakai orang mengobrol',
   'Untuk bercerita tentang kemarin, bahasa Jerman lisan hampir selalu memakai Perfekt, bukan bentuk lampau tulis. Rumusnya dua keping: haben atau sein di posisi kedua + Partizip II di ujung kalimat — kurung kata kerja lagi, persis pola modal.',
   ['Ich habe Pizza gegessen.', 'Saya (sudah) makan pizza.', null]],
  ['Membentuk Partizip II',
   'Kata kerja teratur: ge- + batang + -t (machen → gemacht, wohnen → gewohnt). Kata kerja kuat mengganti vokal dan berakhiran -en (essen → gegessen, trinken → getrunken) — dihafal per kata, seperti daftar kata kerja tak beraturan Inggris. Kata berawalan be-/ver-/er- tidak diberi ge-: besuchen → besucht.',
   ['machen → gemacht · essen → gegessen', 'membuat → dibuat · makan → dimakan', null]],
  ['haben atau sein?',
   'Sebagian besar kata kerja memakai haben. Sein dipakai oleh kata kerja PERPINDAHAN (gehen, fahren, kommen, fliegen) dan PERUBAHAN KEADAAN (aufstehen, einschlafen, sterben) — plus sein dan bleiben sendiri. Uji cepat: kalau perbuatannya memindahkan atau mengubah si pelaku, pakai sein.',
   ['Ich bin nach Bali geflogen.', 'Saya terbang ke Bali.', null]],
],

'de-g8': [
  ['Kasus ketiga: si penerima',
   'Kalau Akkusativ menandai sasaran langsung, Dativ menandai PENERIMA atau pihak yang kena imbas: memberi KEPADA siapa, membantu SIAPA. Bahasa Indonesia memakai "kepada" atau tidak menandainya sama sekali; bahasa Jerman mengubah kata sandangnya: der→dem, die→der, das→dem, jamak→den + -n.',
   ['Ich gebe dem Mann das Buch.', 'Saya memberikan buku itu kepada lelaki itu.', null]],
  ['Kata kerja yang langsung minta Dativ',
   'Beberapa kata kerja umum menuntut Dativ tanpa kata depan, dan ini harus dihafal karena dari sudut pandang Indonesia mereka terlihat seperti objek biasa: helfen, danken, gehören, gefallen, antworten.',
   ['Ich helfe dir gern.', 'Saya senang membantumu.', null]],
  ['Kata depan yang selalu Dativ',
   'Sembilan kata depan SELALU diikuti Dativ, apa pun yang terjadi: aus, bei, mit, nach, seit, von, zu, gegenüber, ab. Hafalkan sebagai satu deret — begitu melihat "mit", tanganmu otomatis menulis dem/der/den.',
   ['mit dem Bus · bei der Arbeit', 'naik bus · di tempat kerja', null]],
],

'de-g9': [
  ['Anak kalimat menendang kata kerja ke ujung',
   'Kata sambung seperti weil, dass, wenn, ob membuka anak kalimat — dan di dalamnya kata kerja berkonjugasi pindah ke POSISI TERAKHIR. "Ich bin müde" menjadi "..., weil ich müde bin". Satu gerakan itu saja; sisanya tidak berubah.',
   ['Ich weiß, dass du recht hast.', 'Saya tahu bahwa kamu benar.', null]],
  ['Jangan tertukar dengan kata sambung biasa',
   'Und, aber, oder, denn TIDAK mengubah urutan — mereka menyambung dua kalimat utama biasa. Bandingkan: "denn ich bin müde" (urutan normal) vs "weil ich müde bin" (kata kerja di ujung). Artinya sama-sama "karena"; tata letaknya yang berbeda.',
   ['Ich gehe, denn ich bin müde. / ..., weil ich müde bin.', 'Saya pergi, karena saya lelah.', null]],
  ['Kalau anak kalimat di depan',
   'Anak kalimat boleh dipindah ke depan. Ia lalu menghitung sebagai posisi PERTAMA, sehingga kalimat utama harus langsung membuka dengan kata kerjanya: "Weil ich müde bin, gehe ich nach Hause." Dua kata kerja bertemu di tengah, dipisah koma — tanda kalimatmu benar.',
   ['Weil ich müde bin, gehe ich nach Hause.', 'Karena lelah, saya pulang.', null]],
],

'de-g10': [
  ['Kata sifat ikut berpakaian',
   'Kata sifat SEBELUM kata benda mendapat akhiran: ein kleines Kind, der kleine Hund. Kata sifat setelah sein tidak: das Kind ist klein. Jadi akhiran hanya urusan posisi atributif — di depan kata benda.',
   ['Das Kind ist klein. → das kleine Kind', 'Anak itu kecil. → anak yang kecil itu', null]],
  ['Prinsipnya: penanda jenis harus muncul tepat sekali',
   'Sistem ini terlihat menakutkan (tiga tabel!), tapi punya satu logika: JENIS KELAMIN harus ditandai tepat satu kali. Kalau kata sandangnya sudah menandai (der, das terlihat), kata sifat cukup akhiran lemah -e/-en. Kalau sandangnya buta (ein tidak menunjukkan jenis), kata sifat yang memikul penanda: ein kleinES Kind — es dari das.',
   ['der kleine Hund · ein kleiner Hund', 'anjing kecil itu · seekor anjing kecil', null]],
  ['Cara belajar yang tidak menyiksa',
   'Jangan menghafal tabel; hafalkan FRASA UTUH yang sering dipakai — mein bester Freund, ein schöner Tag, die ganze Familie — lalu biarkan polanya mengendap. Menulis perlu tabel; berbicara perlu frasa yang sudah jadi.',
   ['ein schöner Tag · mein bester Freund', 'hari yang indah · sahabat saya', null]],
],

'de-g11': [
  ['Pasif: sorotan pindah ke perbuatannya',
   'Pasif dipakai ketika pelakunya tidak penting atau tidak diketahui. Rumusnya werden + Partizip II: "Das Haus wird gebaut" — rumah itu sedang dibangun, entah oleh siapa. Kalau pelakunya perlu disebut, pakai von + Dativ.',
   ['Das Haus wird von der Firma gebaut.', 'Rumah itu dibangun oleh perusahaan itu.', null]],
  ['Konjunktiv II: dunia seandainya',
   'Untuk berandai-andai dan menyopankan permintaan, Jerman memakai Konjunktiv II. Bentuk praktisnya würde + infinitif untuk hampir semua kata kerja, plus empat bentuk pendek yang wajib hafal: wäre (sein), hätte (haben), könnte (können), müsste (müssen).',
   ['Wenn ich Zeit hätte, würde ich reisen.', 'Andai punya waktu, saya akan bepergian.', null]],
  ['Sopan santun sehari-hari',
   'Konjunktiv II adalah bahasa kesopanan Jerman: "Ich hätte gern einen Kaffee" di kafe, "Könnten Sie mir helfen?" di kantor. Kalimat-kalimat ini dipakai setiap hari — hafalkan utuh, dan kamu langsung terdengar sopan.',
   ['Könnten Sie mir bitte helfen?', 'Bisakah Anda menolong saya?', null]],
],

'de-g12': [
  ['Tiga keluarga penyambung, tiga tata letak',
   'Penyambung kalimat Jerman terbagi tiga menurut apa yang mereka lakukan pada kata kerja: (1) aber/denn/und — tidak mengubah apa-apa; (2) weil/dass/obwohl — kata kerja ke ujung; (3) deshalb/trotzdem/dann — mereka sendiri mengisi posisi pertama, jadi kata kerja langsung menyusul, lalu subjek.',
   ['Er ist krank, deshalb bleibt er zu Hause.', 'Dia sakit, karena itu dia tinggal di rumah.', null]],
  ['Keluarga ketiga yang paling sering salah',
   'Deshalb, trotzdem, dann, außerdem adalah KETERANGAN, bukan kata sambung — mereka menempati posisi pertama kalimat kedua. Sesudahnya wajib kata kerja, baru subjek. Menulis "deshalb er bleibt" adalah kesalahan posisi-kedua klasik.',
   ['..., trotzdem geht sie zur Arbeit.', '..., meski begitu dia tetap berangkat kerja.', null]],
  ['Pasangan dua arah',
   'Untuk gaya yang lebih matang ada penyambung berpasangan: entweder...oder (atau...atau), nicht nur...sondern auch (bukan hanya...tapi juga), zwar...aber (memang...tapi), je...desto (semakin...semakin). Pasangan ini membuat argumen tertulismu terdengar B2 ke atas.',
   ['Je mehr ich lese, desto besser verstehe ich.', 'Semakin banyak saya membaca, semakin baik saya paham.', null]],
],

'de-g13': [
  ['Anak kalimat yang menjelaskan kata benda',
   'Relativsatz menempel pada kata benda untuk menjelaskannya — persis "yang" dalam bahasa Indonesia. Bedanya, kata "yang"-nya berubah-ubah: der/die/das mengikuti JENIS kata yang dijelaskan, dan kata kerjanya pergi ke ujung.',
   ['Der Mann, der dort steht, ist mein Lehrer.', 'Lelaki yang berdiri di sana itu guru saya.', null]],
  ['Jenis dari depan, kasus dari dalam',
   'Kata ganti relatif mengambil jenis kelamin dari kata yang dijelaskan, tetapi KASUSNYA ditentukan perannya di DALAM anak kalimat: der Mann, DEN ich sehe (dia sasaran "sehe" → Akkusativ), der Mann, DEM ich helfe (helfen minta Dativ). Dua sumber informasi, satu kata.',
   ['Das Buch, das ich lese, ist spannend.', 'Buku yang sedang saya baca itu seru.', null]],
  ['Dengan kata depan, kata depan ikut pindah',
   'Kalau kata kerjanya berpasangan dengan kata depan, kata depan itu berdiri DI DEPAN kata ganti relatif: die Frau, MIT DER ich arbeite (bekerja dengan). Jangan tinggalkan kata depannya di belakang seperti bahasa Inggris lisan — bahasa Jerman tidak mengenal itu.',
   ['die Frau, mit der ich arbeite', 'perempuan yang bekerja bersama saya', null]],
],

'de-g14': [
  ['Bahasa resmi menimbun kata benda',
   'Bahasa akademik dan birokrasi Jerman mengubah kata kerja menjadi kata benda: "als sie ankam" (ketika ia tiba) menjadi "bei ihrer Ankunft" (pada kedatangannya). Gaya ini disebut Nominalstil — padat, dingin, dan tak terhindarkan di surat resmi, koran, dan ujian C1.',
   ['bei ihrer Ankunft', 'pada saat kedatangannya', null]],
  ['Cara membentuknya',
   'Tiga jalan utama: infinitif dijadikan das (lesen → das Lesen), akhiran -ung untuk proses (prüfen → die Prüfung), dan kata depan pengganti anak kalimat: wegen (karena), trotz (meskipun), bei (ketika), nach (setelah) + Genitiv/Dativ.',
   ['wegen des Regens = weil es regnet', 'karena hujan', null]],
  ['Keterampilan dua arah',
   'Yang diuji di C1 bukan menghafal, melainkan MENGUBAH dua arah: verbal ke nominal dan sebaliknya. Latih dengan kalimat sendiri: "obwohl er krank war" ⇄ "trotz seiner Krankheit". Membaca koran Jerman jadi jauh lebih mudah begitu pola ini terlihat.',
   ['trotz seiner Krankheit = obwohl er krank war', 'meski ia sakit', null]],
],

'de-g15': [
  ['Melaporkan omongan tanpa ikut bertanggung jawab',
   'Konjunktiv I adalah alat berita Jerman untuk mengutip: "Der Minister sagte, er HABE keine Zeit" — menterinya yang bilang, penulisnya netral, tidak menjamin benar. Bahasa Indonesia tidak memberi jarak seperti ini, jadi rasanya baru.',
   ['Er sagte, er habe keine Zeit.', 'Ia mengatakan (bahwa) ia tak punya waktu.', null]],
  ['Bentuknya dari batang + e',
   'Konjunktiv I dibentuk dari batang infinitif + akhiran ber-e: er habe, er komme, er wisse. Sein spesial: sei, seien. Yang lazim dipakai hampir hanya bentuk orang ketiga — dan itulah yang muncul di koran setiap hari.',
   ['sein → sei · haben → habe', 'jadi: er sei, er habe', null]],
  ['Kalau bentuknya kembar, mundur ke Konjunktiv II',
   'Untuk jamak, Konjunktiv I sering identik dengan bentuk biasa (sie haben = sie haben) — tidak kelihatan bedanya. Aturan gantinya: pakai Konjunktiv II — "sie hätten". Membaca berita Jerman tanpa mengenal pola ini berarti kehilangan sinyal "ini kutipan, bukan fakta".',
   ['Sie sagten, sie hätten nichts gewusst.', 'Mereka berkata tidak tahu apa-apa.', null]],
],

'de-g16': [
  ['Anak kalimat dipadatkan jadi satu atribut',
   'Bahasa tulis Jerman suka memadatkan anak kalimat penjelas menjadi partisip di depan kata benda: "der Mann, der dort wartet" menjadi "der dort wartende Mann". Semua informasinya masih ada — hanya dilipat.',
   ['der dort wartende Mann', 'lelaki yang menunggu di sana', null]],
  ['Dua arah waktu',
   'Partizip I (batang + -end) berarti SEDANG: das schlafende Kind — anak yang sedang tidur. Partizip II berarti SUDAH/DI-: das reparierte Auto — mobil yang sudah diperbaiki. Keduanya memakai akhiran kata sifat biasa.',
   ['das schlafende Kind · das reparierte Auto', 'anak yang tertidur · mobil yang telah diperbaiki', null]],
  ['Kunci membaca teks akademik',
   'Atribut ini bisa panjang: "die von der Regierung im letzten Jahr beschlossenen Maßnahmen". Cara membacanya: temukan kata sandang (die) dan kata bendanya (Maßnahmen), lalu baca isian tengahnya sebagai anak kalimat. Tanpa keterampilan ini, kalimat koran Jerman terasa seperti tembok.',
   ['die von der Regierung beschlossenen Maßnahmen', 'langkah-langkah yang diputuskan pemerintah', null]],
],

'de-g17': [
  ['Bumbu kecil yang membawa nada',
   'Doch, mal, ja, eben, halt — kata-kata mungil ini tidak menambah fakta, tetapi menambah NADA: melunakkan perintah, menyatakan keheranan, mengajak sepakat. Tanpa mereka bahasa Jermanmu benar tapi kaku, seperti robot yang sopan.',
   ['Komm doch mal vorbei!', 'Mampirlah sesekali! (ramah, mengundang)', null]],
  ['Kata yang sama, dua wajah',
   'Tiap partikel punya makna kamus yang berbeda dari makna rasanya: ja artinya "ya", tapi "Das ist ja teuer!" berarti "wah, mahal ternyata!" — keheranan, bukan persetujuan. Doch membantah sangkalan: "Du kommst nicht?" — "Doch!" (justru datang!).',
   ['Das ist ja interessant!', 'Wah, menarik ternyata!', null]],
  ['Cara menyerapnya',
   'Partikel rasa tidak bisa dihafal dari tabel — mereka diserap dari percakapan. Dengar dialog film, tandai tiap doch/mal/eben, dan tirulah kalimat utuhnya. Mulai dari dua yang paling aman: "mal" untuk melunakkan permintaan, "doch" untuk mengajak.',
   ['Warte mal! · Setz dich doch!', 'Tunggu sebentar! · Duduklah!', null]],
],

'de-g18': [
  ['Satu bahasa, beberapa baju',
   'Jerman membedakan tajam ragam resmi dan santai — dan pilihan pertama yang menentukan segalanya adalah du atau Sie. Salah baju lebih terasa daripada salah tata bahasa: menyapa dosen dengan du sama canggungnya dengan menyapa teman dekat pakai "Bapak yang terhormat".',
   ['Kannst du...? (akrab) · Könnten Sie...? (resmi)', 'Bisakah kamu…? · Bisakah Anda…?', null]],
  ['Ragam mengubah kosakata dan tata bahasa',
   'Ragam resmi memakai Nominalstil, pasif, dan Konjunktiv; ragam santai memakai kalimat pendek, partikel rasa, dan singkatan lisan (ich hab, so\'n). Kata pun berganti: bekommen (netral) vs kriegen (santai).',
   ['Ich habe es bekommen. / Ich hab\'s gekriegt.', 'Saya menerimanya. (resmi / santai)', null]],
  ['Membaca situasinya',
   'Aturan praktis: Sie untuk orang asing dewasa, kantor, toko, birokrasi; du untuk keluarga, teman, sesama mahasiswa, anak-anak, dan internet. Kalau ragu, mulai dari Sie — orang Jerman akan menawarkan du ("Wir können uns duzen") saat mereka siap.',
   ['Wollen wir uns duzen?', 'Bagaimana kalau kita saling ber-"du"?', null]],
],

'de-q1': [
  ['Sekelompok kata depan bermuka dua',
   'Sembilan kata depan — an, auf, hinter, in, neben, über, unter, vor, zwischen — bisa diikuti Akkusativ ATAU Dativ. Bahasa Indonesia memakai dua kata berbeda ("ke" dan "di"), Jerman memakai satu kata depan dengan dua kasus. Kasusnya yang membawa makna.',
   ['in die Küche / in der Küche', 'ke dapur / di dapur', null]],
  ['Gerak = Akkusativ, tempat = Dativ',
   'Ada PERPINDAHAN tempat → Akkusativ ("wohin?" — ke mana?). Tidak ada perpindahan, hanya keberadaan → Dativ ("wo?" — di mana?). Uji dengan pertanyaan: kalau jawabannya arah, tulis die/den; kalau letak, tulis der/dem.',
   ['Ich gehe ins Kino. / Ich bin im Kino.', 'Saya pergi ke bioskop. / Saya di bioskop.', null]],
  ['Empat pasang kata kerja penanda',
   'Pasangan ini merangkum semuanya: stellen/stehen, legen/liegen, setzen/sitzen, hängen/hängen. Yang pertama memindahkan (Akkusativ), yang kedua berada (Dativ): "Ich stelle die Tasse auf DEN Tisch" lalu "Die Tasse steht auf DEM Tisch".',
   ['Ich lege das Buch auf den Tisch. Es liegt auf dem Tisch.', 'Saya taruh buku ke meja. Buku itu ada di meja.', null]],
],

'de-q2': [
  ['Bentuk lampau untuk membaca',
   'Perfekt untuk mengobrol; Präteritum untuk membaca. Koran, novel, dongeng, laporan — semuanya bercerita dalam Präteritum. Tanpa mengenalnya kamu bisa bicara tentang kemarin tapi tak bisa membaca cerita kemarin.',
   ['Er ging langsam nach Hause.', 'Ia berjalan pelan pulang.', null]],
  ['Dua pola pembentukan',
   'Kata kerja teratur: batang + -te (machen → machte). Kata kerja kuat mengganti vokal tanpa -te (gehen → ging, kommen → kam). Bentuk ich dan er selalu KEMBAR: ich ging, er ging. Dan empat kata ini dipakai dalam Präteritum bahkan saat mengobrol: war, hatte, serta semua modal (konnte, musste, wollte).',
   ['ich war, ich hatte, ich konnte', 'saya (dulu) ada, punya, bisa', null]],
  ['Plusquamperfekt: lampau sebelum lampau',
   'Untuk kejadian yang terjadi SEBELUM kejadian lampau lain: hatte/war + Partizip II. Pasangan setianya kata sambung nachdem: "Nachdem ich gegessen hatte, ging ich schlafen" — makan dulu, lalu tidur, dua-duanya kemarin.',
   ['Nachdem ich gegessen hatte, ging ich schlafen.', 'Setelah makan, saya pergi tidur.', null]],
],

'de-q3': [
  ['Tiga lawan bicara, tiga bentuk perintah',
   'Perintah Jerman berubah menurut siapa yang disuruh: du (akrab tunggal), ihr (akrab jamak), Sie (resmi). Bahasa Indonesia cukup "duduklah!" untuk siapa saja — Jerman memilih dulu bajunya, baru menyuruh.',
   ['Komm! · Kommt! · Kommen Sie!', 'Datanglah! (akrab / jamak / resmi)', null]],
  ['Bentuk du: buang akhirannya',
   'Ambil bentuk du, buang -st dan kata gantinya: du kommst → Komm! Kata kerja yang mengubah e→i mempertahankan perubahannya: nehmen → Nimm!, lesen → Lies! Tapi perubahan a→ä TIDAK terbawa: fahren → Fahr! (bukan Fähr!).',
   ['nehmen → Nimm das Buch!', 'ambil → Ambil buku itu!', null]],
  ['Bentuk Sie dan pelunak',
   'Bentuk resmi mempertahankan kata gantinya dengan urutan terbalik: "Kommen Sie!" Perintah polos terdengar tajam di telinga Jerman — bubuhkan bitte, atau lunakkan dengan mal: "Warten Sie mal bitte." Kata kerja terpisah melempar awalannya ke ujung: "Stehen Sie auf!"',
   ['Setzen Sie sich, bitte.', 'Silakan duduk.', null]],
],

'de-q4': [
  ['Dua alat sangkal untuk dua sasaran',
   'Jerman membagi tugas menyangkal: KEIN menyangkal kata benda tak tentu ("bukan/tidak punya..."), NICHT menyangkal sisanya — kata kerja, kata sifat, kata benda tertentu. Bahasa Indonesia memakai "tidak/bukan" tanpa aturan tempat, jadi pembagian ini perlu dilatih sadar.',
   ['Ich habe kein Auto.', 'Saya tidak punya mobil.', null]],
  ['kein: pengganti ein',
   'Di mana pun kamu bisa berkata ein/eine — atau tanpa sandang sama sekali — sangkalannya kein: "Das ist ein Problem" → "Das ist kein Problem". Kein berdeklinasi persis seperti ein: keinen, keinem, keine.',
   ['Ich trinke keinen Kaffee.', 'Saya tidak minum kopi.', null]],
  ['nicht dan tempat duduknya',
   'Nicht menyangkal kalimat dari belakang: ia berdiri SETELAH objek tertentu ("Ich kenne den Mann nicht") tetapi SEBELUM kata sifat, kata depan, dan bagian yang ditekankan ("nicht müde", "nicht ins Kino"). Menjawab pertanyaan bersangkal dengan "iya, justru": doch — "Kommst du nicht?" "Doch!"',
   ['Ich kenne den Mann nicht.', 'Saya tidak kenal lelaki itu.', null]],
],

'de-q5': [
  ['Lebih: tambah -er, jangan pakai mehr',
   'Perbandingan Jerman SELALU dengan akhiran -er, sepanjang apa pun katanya: interessanter, bukan "mehr interessant". Pembandingnya diperkenalkan dengan als: größer als ich. Godaan menerjemahkan "lebih menarik" kata demi kata harus ditahan.',
   ['Berlin ist größer als Bonn.', 'Berlin lebih besar daripada Bonn.', null]],
  ['Paling: am -sten atau der -ste',
   'Superlatif punya dua bentuk sesuai posisi: berdiri sendiri → am schönsten ("Im Mai ist es am schönsten"); di depan kata benda → der/die/das schönste ("der schönste Tag"). Kata sifat pendek satu suku sering ber-umlaut: alt → älter → am ältesten.',
   ['der längste Fluss · am längsten', 'sungai terpanjang · paling panjang', null]],
  ['Sama dan tak beraturan',
   'Kesamaan memakai so...wie: "so groß wie ich" — dan pembandingnya wie, bukan als. Tiga tak beraturan yang wajib hafal: gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten (untuk menyatakan kesukaan: "Ich trinke lieber Tee").',
   ['Ich trinke lieber Tee als Kaffee.', 'Saya lebih suka teh daripada kopi.', null]],
],

};
