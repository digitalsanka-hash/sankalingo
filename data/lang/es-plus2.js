/* SPANYOL — PERLUASAN KEDUA

   Tiga penambahan, dan alasannya diukur bukan dikira:

   1. LATIHAN untuk sepuluh topik inti es-g1..es-g10. Tiap topik inti
      cuma punya dua latihan, sementara es-p1..es-p8 sudah punya empat
      dan topik bahasa Inggris rata-rata 4,7. Yang timpang justru topik
      DASARNYA. Ditambah tiga per topik inti.

      Latihan ini MENYAMBUNG ke topik yang sudah ada, bukan membuat topik
      baru: js/course.js gabung() menggabungkan topik ber-id sama.

   2. LIMA TOPIK BARU (es-q1..es-q5). Semuanya tata bahasa dasar yang
      belum tertutup es-g* maupun es-p*, dan tiap satunya punya titik
      gelincir yang khas penutur Indonesia:
        q1 pretérito perfecto — bentuk lampau ketiga yang belum diajarkan
        q2 pronombres de objeto — dua kata ganti berturut-turut
        q3 imperativo — perintah yang berubah total saat disangkal
        q4 verbos reflexivos — "se" yang mengubah makna kata kerjanya
        q5 comparativos — perbandingan

   3. SATU PAKET KOSAKATA + DUA GRUP FRASA bertema uang dan kesehatan
      sehari-hari. Grup "Belanja" dan "Keadaan Darurat" sudah ada, jadi
      yang ditambah di sini urusan bank dan kunjungan dokter biasa.

   Awalan id: tata bahasa es-q, kosakata es-qv-, supaya tidak pernah
   bentrok dengan es-g*, es-p*, es-v*, es-pv*.
   Kolom kedua adalah ancar-ancar bunyi dengan ejaan Indonesia.         */

export const PLUS2 = {

/* ══ LATIHAN TAMBAHAN UNTUK TOPIK INTI ═════════════════════════ */
grammar: [

{ id:'es-g1', drills:[
  { t:'mcq', q:'"Saya orang Indonesia" =', opts:['Estoy indonesio','Soy indonesio','Tengo indonesio','Hay indonesio'], a:1,
    why:'Asal, sifat tetap, dan jati diri memakai ser.' },
  { t:'mcq', q:'"Saya lelah" =', opts:['Soy cansado','Estoy cansado','Tengo cansado','Hay cansado'], a:1,
    why:'Keadaan sementara memakai estar.' },
  { t:'mcq', q:'Perbedaan es aburrido dan está aburrido adalah', opts:['tidak ada','yang pertama membosankan, yang kedua sedang bosan','yang pertama lampau','yang kedua jamak'], a:1,
    why:'Kata sifat yang sama berubah makna menurut ser atau estar.' } ] },

{ id:'es-g2', drills:[
  { t:'mcq', q:'Bentuk yo dari hablar adalah', opts:['hablo','hablas','habla','hablamos'], a:0,
    why:'Kelompok -ar memakai akhiran -o untuk yo.' },
  { t:'mcq', q:'Bentuk nosotros dari comer adalah', opts:['comemos','coméis','comen','como'], a:0,
    why:'Kelompok -er memakai -emos.' },
  { t:'mcq', q:'Kata ganti subjek dalam bahasa Spanyol', opts:['selalu wajib','sering dihilangkan karena akhirannya sudah menunjukkan pelakunya','tidak ada','hanya untuk jamak'], a:1,
    why:'Hablo español sudah jelas berarti "saya berbicara".' } ] },

{ id:'es-g3', drills:[
  { t:'mcq', q:'Subjuntivo muncul sesudah ungkapan yang menyatakan', opts:['kepastian','keinginan, keraguan, atau perasaan','waktu lampau','kebiasaan'], a:1,
    why:'Quiero que…, dudo que…, me alegra que….' },
  { t:'mcq', q:'Sesudah creo que dipakai', opts:['subjuntivo','indicativo','infinitivo','imperativo'], a:1,
    why:'Yang diyakini memakai indicativo; no creo que baru subjuntivo.' },
  { t:'mcq', q:'Subjuntivo muncul hanya kalau kedua klausa', opts:['punya subjek yang sama','punya subjek yang berbeda','berbentuk lampau','berbentuk tanya'], a:1,
    why:'Kalau subjeknya sama, dipakai infinitif: Quiero salir.' } ] },

{ id:'es-g4', drills:[
  { t:'mcq', q:'Bentuk yo dari tener adalah', opts:['teno','tengo','tiengo','tenemo'], a:1,
    why:'Termasuk kelompok yang menyisipkan g pada bentuk yo.' },
  { t:'mcq', q:'Kata kerja yang mengubah e jadi ie mengubahnya pada', opts:['semua bentuk','semua kecuali nosotros dan vosotros','hanya yo','hanya jamak'], a:1,
    why:'quiero, quieres, quiere, queremos, queréis, quieren.' },
  { t:'mcq', q:'Bentuk yo dari ir adalah', opts:['io','voy','vo','iro'], a:1,
    why:'ir termasuk yang paling menyimpang dan harus dihafal utuh.' } ] },

{ id:'es-g5', drills:[
  { t:'mcq', q:'Dalam pola gustar, yang menjadi subjek gramatikalnya adalah', opts:['orangnya','benda yang disukai','kata kerjanya','kata depannya'], a:1,
    why:'Me gusta el libro — bukunya yang menjadi subjek.' },
  { t:'mcq', q:'"Saya suka buku-buku ini" =', opts:['Me gusta estos libros','Me gustan estos libros','Yo gusto estos libros','Me gusto estos libros'], a:1,
    why:'Kata kerjanya mengikuti benda yang disukai, jadi jamak.' },
  { t:'mcq', q:'Kata kerja lain yang berpola sama adalah', opts:['hablar','encantar, interesar, doler','comer','vivir'], a:1,
    why:'Me duele la cabeza mengikuti pola yang persis sama.' } ] },

{ id:'es-g6', drills:[
  { t:'mcq', q:'Pretérito indefinido dipakai untuk', opts:['kebiasaan','peristiwa selesai pada waktu tertentu','keadaan','masa depan'], a:1,
    why:'Ayer comí en casa.' },
  { t:'mcq', q:'Bentuk yo dari hablar dalam indefinido adalah', opts:['hablo','hablé','hablaba','hablaré'], a:1,
    why:'Tanda tekanan di akhir yang membedakannya dari hablo.' },
  { t:'mcq', q:'Bentuk indefinido dari ser dan ir', opts:['berbeda','sama persis','tidak ada','hanya untuk yo'], a:1,
    why:'fui, fuiste, fue — konteks yang membedakan.' } ] },

{ id:'es-g7', drills:[
  { t:'mcq', q:'Imperfecto dipakai untuk', opts:['peristiwa sekali selesai','latar, kebiasaan, dan keadaan','masa depan','perintah'], a:1,
    why:'Cuando era niño, jugaba en la calle.' },
  { t:'mcq', q:'"Sedang makan ketika telepon berbunyi" — bagian "sedang makan" memakai', opts:['indefinido','imperfecto','futuro','subjuntivo'], a:1,
    why:'Latar memakai imperfecto, peristiwanya indefinido.' },
  { t:'mcq', q:'Kata keterangan yang menandai imperfecto adalah', opts:['ayer','siempre, todos los días, mientras','anoche','de repente'], a:1,
    why:'Semuanya menunjuk pengulangan atau latar.' } ] },

{ id:'es-g8', drills:[
  { t:'mcq', q:'Bentuk subjuntivo dibentuk dari', opts:['bentuk infinitif','bentuk yo present lalu tukar vokal akhirannya','bentuk lampau','bentuk perintah'], a:1,
    why:'tengo jadi tenga; hablo jadi hable.' },
  { t:'mcq', q:'Kata kerja -ar dalam subjuntivo memakai vokal', opts:['a','e','i','o'], a:1,
    why:'hablar jadi hable — vokalnya bertukar.' },
  { t:'mcq', q:'Sesudah ojalá selalu dipakai', opts:['indicativo','subjuntivo','infinitivo','imperativo'], a:1,
    why:'Ojalá venga — menyatakan harapan.' } ] },

{ id:'es-g9', drills:[
  { t:'mcq', q:'Kalimat si + presente diikuti', opts:['condicional','futuro atau presente','imperfecto de subjuntivo','pluscuamperfecto'], a:1,
    why:'Si tienes tiempo, vamos al cine.' },
  { t:'mcq', q:'Kalimat si + imperfecto de subjuntivo diikuti', opts:['presente','condicional simple','futuro','imperativo'], a:1,
    why:'Si tuviera tiempo, iría.' },
  { t:'mcq', q:'Sesudah si TIDAK PERNAH dipakai', opts:['presente','imperfecto de subjuntivo','presente de subjuntivo','pluscuamperfecto'], a:2,
    why:'Si venga salah; yang benar si viene atau si viniera.' } ] },

{ id:'es-g10', drills:[
  { t:'mcq', q:'"Untuk kamu (penerima)" =', opts:['por ti','para ti','a ti','de ti'], a:1,
    why:'para menandai tujuan dan penerima.' },
  { t:'mcq', q:'"Terima kasih atas bantuanmu" =', opts:['Gracias para tu ayuda','Gracias por tu ayuda','Gracias a tu ayuda','Gracias de tu ayuda'], a:1,
    why:'por menandai sebab dan alasan.' },
  { t:'mcq', q:'Ungkapan waktu seperti "pada pagi hari" memakai', opts:['para la mañana','por la mañana','a la mañana','de la mañana'], a:1,
    why:'por dipakai untuk bagian hari.' } ] },

/* ══ TOPIK BARU ════════════════════════════════════════════════ */

{ id:'es-q1', level:'A2', title:'El pretérito perfecto', titleId:'Bentuk Lampau Ketiga',
  why:'Pemelajar sudah belajar indefinido (comí) dan imperfecto (comía), lalu bertemu bentuk ketiga yang belum pernah diajarkan: he comido. Yang membingungkan bukan bentuknya, melainkan kapan dipakainya — dan jawabannya bergantung pada KATA KETERANGAN WAKTU. Hoy, esta semana, este año, ya, todavía no menuntut perfecto; ayer, la semana pasada menuntut indefinido. Penutur Indonesia yang tidak tahu ini akan memakai indefinido untuk segalanya, dan di Spanyol itu langsung terdengar salah.',
  form:'haber (he, has, ha, hemos, habéis, han) + participio\nParticipio: -ar → -ado (hablado) · -er/-ir → -ido (comido, vivido)\nTak beraturan: hacer → hecho · decir → dicho · ver → visto · escribir → escrito\n              poner → puesto · volver → vuelto · abrir → abierto · romper → roto\nDipakai bersama: hoy, esta mañana, esta semana, este año, ya, todavía no, alguna vez, nunca\nTidak boleh disisipi apa pun antara haber dan participio',
  notes:['Di Amerika Latin, indefinido sering dipakai di tempat perfecto — perbedaan ini terutama berlaku di Spanyol.',
         'Participio dalam pretérito perfecto TIDAK berubah menurut jenis atau jumlah; ia berubah hanya kalau dipakai sebagai kata sifat.',
         'Kata ganti objek berdiri sebelum haber, bukan di antara haber dan participio: Lo he visto.',
         'Untuk menanyakan pengalaman seumur hidup dipakai alguna vez: ¿Has estado alguna vez en España?',
         'todavía no + perfecto adalah cara baku mengatakan "belum": Todavía no he comido.'],
  ex:[['Hoy he comido en casa.','Hari ini saya makan di rumah.','oi e komido en kasa'],
      ['¿Has estado alguna vez en España?','Kamu pernah ke Spanyol?','as estado alguna bes en espanya'],
      ['Todavía no he terminado.','Saya belum selesai.','todabia no e terminado'],
      ['Esta semana hemos trabajado mucho.','Minggu ini kami bekerja keras.','esta semana emos trabahado mucho'],
      ['Lo he visto esta mañana.','Saya melihatnya tadi pagi.','lo e bisto esta manyana'],
      ['¿Ya has hecho la tarea?','Kamu sudah mengerjakan tugasnya?','ya as echo la tarea']],
  traps:[['Hoy comí en casa (di Spanyol)','Hoy he comido en casa','hoy menuntut pretérito perfecto.'],
         ['He la visto','La he visto','Kata ganti berdiri sebelum haber.'],
         ['Hemos comida','Hemos comido','Participio tidak berubah dalam bentuk ini.'],
         ['Ayer he comido','Ayer comí','ayer menuntut indefinido.']],
  drills:[
    { t:'mcq', q:'"Hari ini saya sudah makan" =', opts:['Hoy comí','Hoy he comido','Hoy comía','Hoy había comido'], a:1,
      why:'hoy menuntut pretérito perfecto.' },
    { t:'mcq', q:'Participio dari hacer adalah', opts:['hacido','hacado','hecho','hicho'], a:2,
      why:'Termasuk yang tak beraturan dan paling sering dipakai.' },
    { t:'mcq', q:'"Saya sudah melihatnya" =', opts:['He lo visto','Lo he visto','He visto lo','Lo visto he'], a:1,
      why:'Kata ganti objek berdiri sebelum haber.' },
    { t:'fill', q:'Todavía no ___ terminado. (saya belum selesai)', a:['he'],
      why:'todavía no berpasangan dengan pretérito perfecto.' },
    { t:'mcq', q:'Kata keterangan yang menuntut indefinido, bukan perfecto, adalah', opts:['hoy','esta semana','ayer','todavía no'], a:2,
      why:'ayer menunjuk waktu yang sudah tertutup.' } ] },

{ id:'es-q2', level:'B1', title:'Pronombres de objeto', titleId:'Dua Kata Ganti Berturut-turut',
  why:'Bahasa Indonesia menyebutkan bendanya kembali atau menghilangkannya: "Saya memberikannya kepada dia" — dan urusan selesai. Bahasa Spanyol menaruh dua kata ganti berturut-turut di depan kata kerja, dengan urutan yang tetap, lalu mengubah le jadi se ketika bertemu lo — perubahan yang tidak punya alasan makna sama sekali, murni karena bunyi. Penutur Indonesia hampir selalu menulis le lo di sini, dan itu tidak pernah benar.',
  form:'Objek langsung: me, te, lo/la, nos, os, los/las\nObjek tak langsung: me, te, le, nos, os, les\nURUTAN: tak langsung DULU, baru langsung — Me lo dio\nle/les + lo/la/los/las → se lo, se la — Se lo di (bukan le lo di)\nLetak: sebelum kata kerja bertasrif, atau MENEMPEL di belakang infinitif, gerundio, dan perintah positif\n  Voy a dárselo · Dámelo · Estoy dándoselo',
  notes:['se di sini tidak ada hubungannya dengan se refleksif — bentuknya kebetulan sama.',
         'Kalau menempel di belakang, tanda tekanan sering muncul supaya bunyinya tidak berpindah: dámelo, dárselo.',
         'Dalam perintah menyangkal, kata gantinya kembali ke depan: No me lo des.',
         'Di Spanyol tengah, le sering dipakai untuk lelaki sebagai objek langsung — disebut leísmo dan diterima untuk orang.',
         'Kalau objek tak langsungnya disebut lengkap, kata gantinya TETAP dipakai: Le di el libro a María.'],
  ex:[['Me lo dio ayer.','Dia memberikannya kepada saya kemarin.','me lo dio ayer'],
      ['Se lo dije a María.','Saya mengatakannya kepada María.','se lo dihe a maria'],
      ['¿Puedes dármelo?','Bisa kamu berikan itu kepada saya?','pwedes darmelo'],
      ['No me lo des ahora.','Jangan berikan itu kepada saya sekarang.','no me lo des aora'],
      ['Estoy leyéndolo.','Saya sedang membacanya.','estoi leyendolo'],
      ['Le di el libro a María.','Saya memberikan buku itu kepada María.','le di el libro a maria']],
  traps:[['Le lo di','Se lo di','le berubah jadi se ketika bertemu lo.'],
         ['Lo me dio','Me lo dio','Tak langsung mendahului langsung.'],
         ['Puedes me lo dar','Puedes dármelo','Kalau menempel, keduanya menempel di belakang infinitif.'],
         ['No dámelo','No me lo des','Dalam perintah menyangkal, kata gantinya kembali ke depan.']],
  drills:[
    { t:'mcq', q:'"Saya mengatakannya kepadanya" =', opts:['Le lo dije','Se lo dije','Lo le dije','Lo se dije'], a:1,
      why:'le berubah jadi se di depan lo.' },
    { t:'mcq', q:'Urutan dua kata ganti adalah', opts:['langsung dulu','tak langsung dulu','bebas','bergantung kata kerjanya'], a:1,
      why:'Me lo dio — tak langsung selalu mendahului.' },
    { t:'mcq', q:'"Bisakah kamu memberikannya kepadaku?" =', opts:['¿Puedes me lo dar?','¿Puedes dármelo?','¿Puedes dar me lo?','¿Puedes darlo me?'], a:1,
      why:'Kalau menempel di infinitif, keduanya menempel sekaligus.' },
    { t:'fill', q:'No ___ lo des ahora. (jangan berikan kepada saya)', a:['me'],
      why:'Dalam perintah menyangkal, kata gantinya kembali ke depan kata kerja.' },
    { t:'mcq', q:'Perubahan le menjadi se terjadi karena', opts:['alasan makna','alasan bunyi saja','alasan kesopanan','alasan waktu'], a:1,
      why:'le lo terdengar janggal, jadi bentuknya berubah.' } ] },

{ id:'es-q3', level:'A2', title:'El imperativo', titleId:'Perintah yang Berubah Saat Disangkal',
  why:'Bahasa Indonesia menyangkal perintah dengan menambahkan satu kata: "ambil" jadi "jangan ambil". Bahasa Spanyol mengubah kata kerjanya seluruhnya: toma jadi no tomes — bentuk perintah menyangkal diambil dari subjuntivo, bukan dari bentuk perintah positifnya. Karena kedua bentuk itu kelihatan tidak berhubungan, penutur Indonesia sering menyangkal bentuk positifnya begitu saja, dan hasilnya salah.',
  form:'POSITIF tú: sama dengan bentuk él/ella — habla, come, escribe\n  Tak beraturan: di, haz, ve, pon, sal, sé, ten, ven\nPOSITIF usted / ustedes: bentuk subjuntivo — hable, hablen\nMENYANGKAL (semua): no + subjuntivo — no hables, no coma, no hablen\nKata ganti MENEMPEL pada perintah positif: dímelo\nKata ganti KEMBALI KE DEPAN pada perintah menyangkal: no me lo digas',
  notes:['Bentuk perintah positif tú dan bentuk él/ella persis sama — habla berarti "dia bicara" maupun "bicaralah".',
         'Delapan bentuk tak beraturan tú harus dihafal; semuanya kata kerja yang paling sering dipakai.',
         'Bentuk usted memakai subjuntivo baik untuk perintah positif maupun menyangkal.',
         'Dalam bahasa Spanyol, perintah terdengar jauh lebih biasa daripada dalam bahasa Indonesia — tidak perlu ditambah pelembut setiap kali.',
         'Bentuk nosotros dipakai untuk mengajak: vamos, hagámoslo.'],
  ex:[['Habla más despacio, por favor.','Bicaralah lebih pelan.','abla mas despasio, por fabor'],
      ['No hables tan rápido.','Jangan bicara secepat itu.','no ables tan rapido'],
      ['Ven aquí.','Ke sini.','ben aki'],
      ['No vengas ahora.','Jangan datang sekarang.','no bengas aora'],
      ['Dímelo, por favor.','Katakan itu kepada saya.','dimelo, por fabor'],
      ['Pase usted, por favor.','Silakan masuk.','pase usted, por fabor']],
  traps:[['No habla tan rápido','No hables tan rápido','Perintah menyangkal memakai subjuntivo.'],
         ['No ven aquí','No vengas aquí','Bentuk positif tak beraturan tidak dipakai untuk menyangkal.'],
         ['No dímelo','No me lo digas','Kata ganti kembali ke depan saat disangkal.'],
         ['Habla usted','Hable usted','Bentuk usted memakai subjuntivo.']],
  drills:[
    { t:'mcq', q:'"Jangan bicara secepat itu" =', opts:['No habla tan rápido','No hables tan rápido','No hablas tan rápido','No hablar tan rápido'], a:1,
      why:'Perintah menyangkal diambil dari subjuntivo.' },
    { t:'mcq', q:'Bentuk perintah positif tú dari venir adalah', opts:['viene','ven','vengas','venir'], a:1,
      why:'Termasuk delapan bentuk tak beraturan.' },
    { t:'mcq', q:'Pada perintah positif, kata ganti objek', opts:['berdiri di depan','menempel di belakang kata kerjanya','dihilangkan','diulang'], a:1,
      why:'Dímelo.' },
    { t:'fill', q:'No me lo ___. (jangan katakan itu kepada saya — decir)', a:['digas'],
      why:'Perintah menyangkal memakai subjuntivo.' },
    { t:'mcq', q:'Bentuk perintah untuk usted diambil dari', opts:['bentuk él/ella','subjuntivo','infinitif','indefinido'], a:1,
      why:'Hable usted, baik positif maupun menyangkal.' } ] },

{ id:'es-q4', level:'B1', title:'Verbos reflexivos y el se', titleId:'Se yang Mengubah Makna',
  why:'Bahasa Indonesia menandai perbuatan yang kembali ke pelakunya dengan "diri sendiri", dan sering tidak menandainya sama sekali: "saya mandi". Bahasa Spanyol memakai se, dan yang mengejutkan, se sering MENGUBAH ARTI kata kerjanya, bukan sekadar menandai. ir berarti pergi, tetapi irse berarti berangkat meninggalkan tempat; dormir berarti tidur, tetapi dormirse berarti tertidur. Penutur Indonesia yang menganggap se cuma hiasan akan kehilangan separuh maknanya.',
  form:'Kata ganti: me, te, se, nos, os, se — diletakkan seperti kata ganti objek\nlevantarse: me levanto, te levantas, se levanta, nos levantamos, se levantan\nMengubah makna: ir/irse · dormir/dormirse · comer/comerse · quedar/quedarse · llevar/llevarse\nSaling: se abrazaron = mereka berpelukan\nTanpa pelaku tertentu: Se habla español · Se venden pisos\nMenempel di belakang infinitif dan gerundio: voy a levantarme',
  notes:['Bagian tubuh dan pakaian memakai kata sandang, bukan kata milik: Me lavo las manos, bukan mis manos.',
         'se impersonal (Se habla español) tidak ada hubungannya dengan refleksif meski bentuknya sama.',
         'Kata gantinya harus ikut berubah menurut pelakunya — me levanto, te levantas — dan ini yang sering lupa.',
         'irse hampir selalu berarti pergi meninggalkan, sedangkan ir sekadar menyatakan tujuan.',
         'Dalam bentuk perintah positif, kata gantinya menempel: levántate.'],
  ex:[['Me levanto a las seis.','Saya bangun jam enam.','me lebanto a las seis'],
      ['Me lavo las manos.','Saya mencuci tangan saya.','me labo las manos'],
      ['Me voy, hasta luego.','Saya pergi dulu, sampai jumpa.','me boi, asta luego'],
      ['Se durmió en el sofá.','Dia tertidur di sofa.','se durmio en el sofa'],
      ['Aquí se habla español.','Di sini orang berbahasa Spanyol.','aki se abla espanyol'],
      ['Voy a levantarme temprano.','Saya akan bangun pagi-pagi.','boi a lebantarme temprano']],
  traps:[['Me lavo mis manos','Me lavo las manos','Bagian tubuh memakai kata sandang.'],
         ['Me levanto, te levanto a las seis','Me levanto, te levantas a las seis','Kata gantinya ikut berubah menurut pelakunya.'],
         ['Voy a me levantar','Voy a levantarme','Kata ganti menempel di belakang infinitif.'],
         ['Se durmió berarti dia tidur','Se durmió berarti dia tertidur','se mengubah makna kata kerjanya.']],
  drills:[
    { t:'mcq', q:'"Saya mencuci tangan saya" =', opts:['Me lavo mis manos','Me lavo las manos','Lavo mis manos','Me lavo la mano mía'], a:1,
      why:'Bagian tubuh memakai kata sandang, bukan kata milik.' },
    { t:'mcq', q:'Perbedaan dormir dan dormirse adalah', opts:['tidak ada','dormir tidur, dormirse tertidur','dormirse lebih sopan','dormirse bentuk lampau'], a:1,
      why:'se mengubah maknanya, bukan sekadar menandai.' },
    { t:'mcq', q:'"Saya akan bangun pagi-pagi" =', opts:['Voy a me levantar','Voy a levantarme','Voy a levantar me','Voy levantarme a'], a:1,
      why:'Kata ganti menempel di belakang infinitif.' },
    { t:'fill', q:'___ levanto a las seis. (saya bangun jam enam)', a:['Me'],
      why:'Kata gantinya menyesuaikan pelakunya.' },
    { t:'mcq', q:'Aquí se habla español berarti', opts:['dia bicara sendiri','di sini orang berbahasa Spanyol','bahasa Spanyol bicara','saya bicara Spanyol'], a:1,
      why:'se impersonal menyatakan perbuatan tanpa pelaku tertentu.' } ] },

{ id:'es-q5', level:'A2', title:'Comparativos y superlativos', titleId:'Perbandingan',
  why:'Bahasa Indonesia membandingkan dengan "lebih … daripada" dan "paling", tanpa mengubah kata sifatnya. Bahasa Spanyol menyusunnya sebagai más … que, lalu menyimpan empat kecualian yang justru paling sering dipakai — bueno jadi mejor, malo jadi peor. Ditambah lagi ada akhiran -ísimo yang tidak punya padanan sama sekali dalam bahasa Indonesia: bukan "sangat mahal", melainkan satu kata carísimo.',
  form:'Lebih: más + kata sifat + que — Es más alto que yo\nKurang: menos + kata sifat + que — Es menos caro que ese\nSama: tan + kata sifat + como — Es tan alto como yo\nSuperlatif: el/la/los/las + más + kata sifat + de — la ciudad más bonita de España\nKecualian: bueno → mejor · malo → peor · grande → mayor · pequeño → menor\n-ísimo: carísimo, buenísimo, facilísimo — menyatakan tingkat paling tinggi',
  notes:['Untuk membandingkan dipakai que; untuk menyatakan sama dipakai como. Menukarnya kesalahan yang paling sering.',
         'más bueno dan más malo dipakai hanya untuk sifat batin seseorang, bukan untuk mutu barang.',
         'mayor dan menor lebih sering menunjuk umur daripada ukuran: mi hermano mayor.',
         'Superlatif memakai de, bukan en: el mejor de la clase.',
         'Sebelum angka dipakai más de, bukan más que: más de veinte personas.'],
  ex:[['Es más alto que yo.','Dia lebih tinggi daripada saya.','es mas alto ke yo'],
      ['Es tan caro como el otro.','Ini semahal yang satunya.','es tan karo komo el otro'],
      ['Es la ciudad más bonita de España.','Ini kota terindah di Spanyol.','es la siudad mas bonita de espanya'],
      ['Este libro es mejor que ese.','Buku ini lebih baik daripada itu.','este libro es mehor ke ese'],
      ['Mi hermano mayor vive en Madrid.','Kakak laki-laki saya tinggal di Madrid.','mi ermano mayor bibe en madrid'],
      ['Este café está buenísimo.','Kopi ini enak sekali.','este kafe esta bwenisimo']],
  traps:[['más alto como yo','más alto que yo','Membandingkan memakai que.'],
         ['tan alto que yo','tan alto como yo','Menyatakan sama memakai como.'],
         ['más bueno que ese (untuk mutu)','mejor que ese','bueno punya bentuk perbandingan sendiri.'],
         ['más que veinte personas','más de veinte personas','Sebelum angka dipakai de.']],
  drills:[
    { t:'mcq', q:'"Dia lebih tinggi daripada saya" =', opts:['Es más alto como yo','Es más alto que yo','Es tan alto que yo','Es el más alto que yo'], a:1,
      why:'Membandingkan memakai que.' },
    { t:'mcq', q:'"Ini semahal yang satunya" =', opts:['Es tan caro que el otro','Es tan caro como el otro','Es más caro como el otro','Es tanto caro como el otro'], a:1,
      why:'Menyatakan kesamaan memakai como.' },
    { t:'mcq', q:'Bentuk perbandingan dari bueno adalah', opts:['más bueno','mejor','buenísimo','el bueno'], a:1,
      why:'Termasuk kecualian yang harus dihafal.' },
    { t:'fill', q:'Es la ciudad más bonita ___ España. (di Spanyol)', a:['de'],
      why:'Superlatif memakai de, bukan en.' },
    { t:'mcq', q:'Akhiran -ísimo menyatakan', opts:['bentuk kecil','tingkat yang paling tinggi','bentuk lampau','bentuk jamak'], a:1,
      why:'carísimo = mahal sekali.' } ] }

],

/* ══ KOSAKATA ══════════════════════════════════════════════════ */
vocab: [
{ id:'es-qv-dinero', title:'El dinero y la salud', titleId:'Uang, Bank & Ke Dokter', level:'A2', words:[
  ['el dinero','el dinero','uang'],
  ['el efectivo','el efektibo','uang tunai'],
  ['el banco','el banko','bank'],
  ['la cuenta','la kwenta','rekening'],
  ['la tarjeta','la tarheta','kartu'],
  ['el PIN','el pin','kode PIN'],
  ['el cajero automático','el kahero automatiko','mesin ATM'],
  ['sacar dinero','sakar dinero','menarik uang'],
  ['ingresar','ingresar','menyetor'],
  ['la transferencia','la transferensia','transfer'],
  ['la moneda','la moneda','mata uang'],
  ['el tipo de cambio','el tipo de kambio','kurs'],
  ['la comisión','la komision','biaya administrasi'],
  ['la factura','la faktura','tagihan'],
  ['el recibo','el resibo','struk'],
  ['el sueldo','el sweldo','gaji'],
  ['el préstamo','el prestamo','pinjaman'],
  ['la deuda','la deuda','utang'],
  ['los ahorros','los aoros','tabungan'],
  ['el presupuesto','el presupwesto','anggaran'],
  ['el médico','el mediko','dokter'],
  ['el consultorio','el konsultorio','praktik dokter'],
  ['el hospital','el ospital','rumah sakit'],
  ['la cita','la sita','janji temu'],
  ['la farmacia','la farmasia','apotek'],
  ['el medicamento','el medikamento','obat'],
  ['la receta','la reseta','resep dokter'],
  ['el dolor','el dolor','rasa sakit'],
  ['la fiebre','la fiebre','demam'],
  ['la tos','la tos','batuk'],
  ['el resfriado','el resfriado','pilek'],
  ['el dolor de cabeza','el dolor de kabesa','sakit kepala'],
  ['las náuseas','las nauseas','mual'],
  ['la alergia','la alerhia','alergi'],
  ['el análisis','el analisis','pemeriksaan laboratorium'],
  ['la inyección','la inyeksion','suntikan'],
  ['el descanso','el deskanso','istirahat'],
  ['el seguro médico','el seguro mediko','asuransi kesehatan'],
  ['urgencias','urhensias','unit gawat darurat'],
  ['la recuperación','la rekuperasion','kesembuhan']
] }
],

/* ══ FRASA ═════════════════════════════════════════════════════ */
phrases: [
{ g:'Di Bank & Urusan Uang', items:[
  ['Quisiera abrir una cuenta.','kisiera abrir una kwenta','Saya ingin membuka rekening.'],
  ['¿Dónde está el cajero más cercano?','donde esta el kahero mas serkano','Di mana ATM terdekat?'],
  ['¿Cuál es el tipo de cambio hoy?','kwal es el tipo de kambio oi','Berapa kursnya hari ini?'],
  ['¿Hay alguna comisión?','ai alguna komision','Apakah ada biaya administrasinya?'],
  ['Quiero sacar dinero.','kiero sakar dinero','Saya ingin menarik uang.'],
  ['¿Puedo hacer una transferencia?','pwedo aser una transferensia','Bisakah saya melakukan transfer?'],
  ['¿Me da un recibo, por favor?','me da un resibo, por fabor','Boleh minta struknya?'],
  ['He olvidado mi PIN.','e olbidado mi pin','Saya lupa kode PIN saya.']
] },
{ g:'Di Klinik & Apotek', items:[
  ['Quisiera pedir una cita.','kisiera pedir una sita','Saya ingin membuat janji.'],
  ['Me duele aquí.','me dwele aki','Saya sakit di sini.'],
  ['Tengo fiebre desde hace dos días.','tengo fiebre desde ase dos dias','Saya demam sejak dua hari.'],
  ['¿Tiene alguna alergia?','tiene alguna alerhia','Apakah Anda punya alergi?'],
  ['Necesito una receta.','nesesito una reseta','Saya perlu resep dokter.'],
  ['¿Cómo tomo este medicamento?','komo tomo este medikamento','Bagaimana cara minum obat ini?'],
  ['¿Se vende sin receta?','se bende sin reseta','Apakah ini bisa dibeli tanpa resep?'],
  ['Tengo seguro médico.','tengo seguro mediko','Saya punya asuransi kesehatan.']
] }
]

};
