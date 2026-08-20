/* ── Bacaan ujian ──────────────────────────────────────────────────
   Teks bacaan asli untuk bagian membaca pada simulasi ujian. Ditulis
   khusus untuk aplikasi ini — bukan salinan soal ujian resmi — dengan
   panjang, jenis teks, dan bentuk pertanyaan yang mengikuti kisi-kisi
   penyelenggara masing-masing.

   Tiap bacaan: { id, level, jenis, judul, teks, rom, arti, soal[] }
   Soal berbentuk pilihan ganda 4 opsi; `a` menunjuk indeks jawaban benar,
   `why` menjelaskan mengapa — dipakai saat peserta meninjau hasilnya.     */

const B = (id, level, jenis, judul, teks, rom, arti, soal) =>
  ({ id, level, jenis, judul, teks, rom, arti, soal });

export const BACAAN = {

/* ── Korea ────────────────────────────────────────────────────── */
ko: [
B('ko-r1', 'A1', 'Pengumuman', '도서관 안내',
`한국 도서관은 아침 아홉 시에 문을 엽니다. 저녁 여섯 시에 문을 닫습니다.
월요일부터 금요일까지 엽니다. 토요일과 일요일은 쉽니다.
책은 두 주 동안 빌릴 수 있습니다. 학생증이 필요합니다.`,
`hanguk doseogwaneun achim ahop sie muneul yeomnida. jeonyeok yeoseot sie muneul datseumnida.
woryoilbuteo geumyoilkkaji yeomnida. toyoilgwa iryoireun swimnida.
chaegeun du ju dongan billil su itseumnida. haksaengjeungi piryohamnida.`,
`Perpustakaan buka pukul sembilan pagi dan tutup pukul enam sore. Buka Senin sampai Jumat,
libur Sabtu dan Minggu. Buku bisa dipinjam selama dua minggu. Kartu pelajar diperlukan.`,
[
  { q: '도서관은 몇 시에 문을 엽니까?', opts: ['여섯 시', '아홉 시', '두 시', '다섯 시'], a: 1,
    why: '아침 아홉 시에 문을 엽니다 — pukul sembilan pagi.' },
  { q: '도서관이 쉬는 날은 언제입니까?', opts: ['월요일', '금요일', '토요일과 일요일', '수요일'], a: 2,
    why: '토요일과 일요일은 쉽니다 — libur Sabtu dan Minggu.' },
  { q: '책을 얼마 동안 빌릴 수 있습니까?', opts: ['하루', '한 주', '두 주', '한 달'], a: 2,
    why: '두 주 동안 = selama dua minggu.' },
  { q: '책을 빌리려면 무엇이 필요합니까?', opts: ['학생증', '여권', '돈', '사진'], a: 0,
    why: '학생증이 필요합니다 — butuh kartu pelajar.' }
]),

B('ko-r2', 'B1', 'Esai', '한국의 배달 문화',
`한국은 배달 문화가 매우 발달한 나라이다. 밤늦게도 음식을 주문할 수 있고,
한강 공원처럼 주소가 없는 곳까지 배달이 온다. 이런 문화는 1990년대부터 빠르게 자랐다.
그러나 최근에는 문제도 생겼다. 일회용 그릇이 늘면서 쓰레기가 많아진 것이다.
그래서 다시 쓸 수 있는 그릇을 쓰는 가게가 조금씩 늘고 있다.`,
`hangugeun baedal munhwaga maeu baldalhan naraida. bamneutgedo eumsigeul jumunhal su itgo,
hangang gongwoncheoreom jusoga eomneun gotkkaji baedari onda. ireon munhwaneun 1990nyeondaebuteo ppareuge jaratda.
geureona choegeuneneun munjedo saenggyeotda. ilhoeyong geureusi neulmyeonseo sseuregiga manajin geosida.
geuraeseo dasi sseul su inneun geureuseul sseuneun gagega jogeumssik neulgo itda.`,
`Korea adalah negara dengan budaya pesan-antar yang sangat maju. Makanan bisa dipesan sampai larut
malam, bahkan ke tempat tanpa alamat seperti Taman Sungai Han. Budaya ini tumbuh cepat sejak 1990-an.
Namun belakangan muncul masalah: wadah sekali pakai bertambah sehingga sampah menumpuk.
Karena itu, toko yang memakai wadah pakai ulang mulai bertambah sedikit demi sedikit.`,
[
  { q: '이 글의 중심 내용은 무엇입니까?',
    opts: ['배달 음식의 가격', '배달 문화의 성장과 문제', '한강 공원 소개', '식당 창업 방법'], a: 1,
    why: 'Paragraf pertama menjelaskan pertumbuhannya, paragraf kedua masalahnya.' },
  { q: '배달 문화는 언제부터 빠르게 자랐습니까?',
    opts: ['1970년대', '1990년대', '2010년대', '2020년대'], a: 1,
    why: '1990년대부터 빠르게 자랐다.' },
  { q: '최근에 생긴 문제는 무엇입니까?',
    opts: ['배달이 느려졌다', '가격이 올랐다', '쓰레기가 많아졌다', '가게가 줄었다'], a: 2,
    why: '일회용 그릇이 늘면서 쓰레기가 많아진 것이다.' },
  { q: '가게들은 어떻게 대응하고 있습니까?',
    opts: ['배달을 그만둔다', '다시 쓸 수 있는 그릇을 쓴다', '값을 내린다', '밤에 문을 닫는다'], a: 1,
    why: '다시 쓸 수 있는 그릇을 쓰는 가게가 늘고 있다.' }
])
],

/* ── Jepang ───────────────────────────────────────────────────── */
ja: [
B('ja-r1', 'N5', 'Pesan', 'メモ',
`たなかさんへ
あした、九時に えきの まえで あいましょう。
バスで びじゅつかんに 行きます。
ひるごはんは びじゅつかんの レストランで 食べます。
きっぷは わたしが かいますから、お金は いりません。
やまだ`,
`tanaka-san e
ashita, ku-ji ni eki no mae de aimashou.
basu de bijutsukan ni ikimasu.
hirugohan wa bijutsukan no resutoran de tabemasu.
kippu wa watashi ga kaimasu kara, okane wa irimasen.
yamada`,
`Untuk Tanaka. Besok bertemu jam sembilan di depan stasiun. Kita ke museum naik bus.
Makan siang di restoran museum. Tiket saya yang beli, jadi tidak perlu bawa uang. Yamada.`,
[
  { q: 'どこで あいますか。', opts: ['びじゅつかんの まえ', 'えきの まえ', 'レストラン', 'バスてい'], a: 1,
    why: 'えきの まえで あいましょう。' },
  { q: 'なにで びじゅつかんに 行きますか。', opts: ['でんしゃ', 'タクシー', 'バス', 'あるいて'], a: 2,
    why: 'バスで びじゅつかんに 行きます。' },
  { q: 'たなかさんは お金が いりますか。', opts: ['はい、いります', 'いいえ、いりません', 'すこし いります', 'わかりません'], a: 1,
    why: 'きっぷは わたしが かいますから、お金は いりません。' },
  { q: 'ひるごはんは どこで 食べますか。', opts: ['えき', 'いえ', 'びじゅつかんの レストラン', 'こうえん'], a: 2,
    why: 'びじゅつかんの レストランで 食べます。' }
]),

B('ja-r2', 'N3', 'Artikel', 'コンビニの二十四時間営業',
`日本のコンビニは長い間、二十四時間開いているのが当たり前だった。
しかし最近、夜に店を閉める店舗が増えている。理由は人手不足である。
夜に働く人を見つけるのが難しく、店長が一人で長時間働くことも多かった。
本部は最初この動きに反対していたが、今は店ごとに決められるようになった。
利用者からは「不便になった」という声もあるが、「働く人のことを考えると仕方ない」という意見も多い。`,
`nihon no konbini wa nagai aida, nijuuyo-jikan aite iru no ga atarimae datta.
shikashi saikin, yoru ni mise o shimeru tenpo ga fuete iru. riyuu wa hitode-busoku de aru.
yoru ni hataraku hito o mitsukeru no ga muzukashiku, tenchou ga hitori de choujikan hataraku koto mo ookatta.
honbu wa saisho kono ugoki ni hantai shite ita ga, ima wa mise goto ni kimerareru you ni natta.
riyousha kara wa "fuben ni natta" to iu koe mo aru ga, "hataraku hito no koto o kangaeru to shikata nai" to iu iken mo ooi.`,
`Minimarket Jepang lama dianggap wajar buka 24 jam. Belakangan makin banyak gerai tutup malam hari
karena kekurangan tenaga kerja. Sulit mencari pekerja malam, dan kepala toko sering bekerja sendirian
berjam-jam. Kantor pusat semula menentang, kini tiap toko boleh memutuskan sendiri. Sebagian pelanggan
merasa jadi tidak praktis, tetapi banyak juga yang menganggapnya wajar demi para pekerja.`,
[
  { q: '夜に店を閉める店舗が増えている理由は何ですか。',
    opts: ['客が少ないから', '人手不足だから', '電気代が高いから', '法律が変わったから'], a: 1,
    why: '理由は人手不足である。' },
  { q: '本部の態度はどう変わりましたか。',
    opts: ['最初から賛成していた', '反対から、店ごとに決められるように変わった',
           '今も強く反対している', '何も言っていない'], a: 1,
    why: '最初は反対 → 今は店ごとに決められる。' },
  { q: '利用者の意見について正しいものはどれですか。',
    opts: ['全員が反対している', '全員が賛成している',
           '不便だという声も、仕方ないという声もある', '意見は出ていない'], a: 2,
    why: 'Dua pendapat disebut berdampingan di kalimat terakhir.' },
  { q: 'この文章の主題は何ですか。',
    opts: ['コンビニの商品', '二十四時間営業の見直し', '店長の給料', '日本の交通'], a: 1,
    why: 'Seluruh teks membahas berubahnya kebiasaan buka 24 jam.' }
])
],

/* ── Mandarin ─────────────────────────────────────────────────── */
zh: [
B('zh-r1', 'HSK 2', 'Pesan singkat', '给同屋的留言',
`小李：
我今天下午三点去机场接我妹妹。
晚上我们在家吃饭，你也一起吃吧。
冰箱里有鸡蛋和菜，米在桌子上。
如果你六点以前回来，请先做米饭。
谢谢！
王明`,
`Xiǎo Lǐ: wǒ jīntiān xiàwǔ sān diǎn qù jīchǎng jiē wǒ mèimei.
wǎnshang wǒmen zài jiā chīfàn, nǐ yě yīqǐ chī ba.
bīngxiāng lǐ yǒu jīdàn hé cài, mǐ zài zhuōzi shang.
rúguǒ nǐ liù diǎn yǐqián huílái, qǐng xiān zuò mǐfàn. xièxie! Wáng Míng`,
`Xiao Li: hari ini pukul tiga sore aku ke bandara menjemput adik perempuanku. Malam kita makan
di rumah, ikut makan ya. Di kulkas ada telur dan sayur, berasnya di atas meja. Kalau kamu pulang
sebelum jam enam, tolong masak nasinya dulu. Terima kasih! Wang Ming.`,
[
  { q: '王明下午去哪儿？', opts: ['学校', '机场', '商店', '医院'], a: 1,
    why: '去机场接我妹妹。' },
  { q: '王明去接谁？', opts: ['妈妈', '朋友', '妹妹', '老师'], a: 2, why: '接我妹妹。' },
  { q: '米在哪儿？', opts: ['冰箱里', '桌子上', '椅子下', '门后'], a: 1, why: '米在桌子上。' },
  { q: '王明请小李做什么？', opts: ['去机场', '买菜', '做米饭', '打电话'], a: 2,
    why: '请先做米饭。' }
]),

B('zh-r2', 'HSK 4', 'Artikel', '共享单车在中国',
`共享单车最早出现在中国的大城市。用手机扫一下二维码，车锁就开了，用完停在路边就可以。
它解决了从地铁站到家的"最后一公里"问题，很受年轻人欢迎。
不过，问题也随之而来。很多人把车随便停在人行道上，影响别人走路。
后来，政府规定了停车的地方，公司也用技术限制乱停车。现在情况比以前好多了。`,
`gòngxiǎng dānchē zuìzǎo chūxiàn zài Zhōngguó de dà chéngshì. yòng shǒujī sǎo yīxià èrwéimǎ,
chēsuǒ jiù kāi le, yòng wán tíng zài lùbiān jiù kěyǐ. tā jiějué le cóng dìtiězhàn dào jiā de
"zuìhòu yī gōnglǐ" wèntí, hěn shòu niánqīngrén huānyíng. bùguò, wèntí yě suí zhī ér lái.
hěn duō rén bǎ chē suíbiàn tíng zài rénxíngdào shang, yǐngxiǎng biéren zǒulù. hòulái, zhèngfǔ
guīdìng le tíngchē de dìfang, gōngsī yě yòng jìshù xiànzhì luàn tíngchē. xiànzài qíngkuàng bǐ yǐqián hǎo duō le.`,
`Sepeda berbagi mula-mula muncul di kota besar Tiongkok. Pindai kode QR dengan ponsel, kuncinya
terbuka; selesai dipakai tinggal parkir di pinggir jalan. Ini menjawab masalah "satu kilometer
terakhir" dari stasiun ke rumah dan digemari anak muda. Namun masalah menyusul: banyak orang
memarkir sembarangan di trotoar sehingga mengganggu pejalan kaki. Kemudian pemerintah menetapkan
tempat parkir dan perusahaan memakai teknologi untuk membatasi parkir liar. Kini keadaannya jauh lebih baik.`,
[
  { q: '共享单车解决了什么问题？',
    opts: ['坐地铁太贵', '从地铁站到家的最后一公里', '路上太堵', '汽车太多'], a: 1,
    why: '解决了……"最后一公里"问题。' },
  { q: '后来出现了什么问题？',
    opts: ['车太贵了', '没有人用', '很多人乱停车', '手机不能用'], a: 2,
    why: '很多人把车随便停在人行道上。' },
  { q: '政府做了什么？', opts: ['禁止共享单车', '规定了停车的地方', '降低价格', '增加地铁'], a: 1,
    why: '政府规定了停车的地方。' },
  { q: '现在的情况怎么样？', opts: ['比以前好', '比以前差', '和以前一样', '文章没说'], a: 0,
    why: '现在情况比以前好多了。' }
])
],

/* ── Arab ─────────────────────────────────────────────────────── */
ar: [
B('ar-r1', 'A1', 'Perkenalan', 'أُسْرَتي',
`اسْمي سارَة. أَنا مِنْ إِنْدونيسيا. أَسْكُنُ في جاكَرْتا.
أَبي مُدَرِّس وَأُمّي طَبيبَة. لي أَخٌ واحِدٌ وَأُخْتانِ.
أَخي طالِبٌ في الجامِعَة. أَنا أَدْرُسُ اللُّغَةَ العَرَبِيَّة كُلَّ يَوْم.`,
`ismi Sarah. ana min Indunisiya. askunu fi Jakarta.
abi mudarris wa ummi tabibah. li akhun wahidun wa ukhtani.
akhi talibun fi al-jami'ah. ana adrusu al-lughah al-arabiyyah kulla yaum.`,
`Nama saya Sarah. Saya dari Indonesia, tinggal di Jakarta. Ayah saya guru dan ibu saya dokter.
Saya punya satu saudara laki-laki dan dua saudara perempuan. Kakak saya mahasiswa di universitas.
Saya belajar bahasa Arab setiap hari.`,
[
  { q: 'مِنْ أَيْنَ سارَة؟', opts: ['مِنْ مِصْر', 'مِنْ إِنْدونيسيا', 'مِنَ السُّعودِيَّة', 'مِنْ ماليزيا'], a: 1,
    why: 'أَنا مِنْ إِنْدونيسيا.' },
  { q: 'ما مِهْنَةُ الأُمّ؟', opts: ['مُدَرِّسَة', 'طَبيبَة', 'مُهَنْدِسَة', 'طالِبَة'], a: 1,
    why: 'أُمّي طَبيبَة.' },
  { q: 'كَمْ أُخْتاً لِسارَة؟', opts: ['واحِدَة', 'اِثْنَتانِ', 'ثَلاثٌ', 'لا أُخْت'], a: 1,
    why: 'لي … وَأُخْتانِ — bentuk mutsanna berarti dua.' },
  { q: 'ماذا تَدْرُسُ سارَة؟', opts: ['الرِّياضِيّات', 'اللُّغَةَ العَرَبِيَّة', 'الطِّبّ', 'التّاريخ'], a: 1,
    why: 'أَدْرُسُ اللُّغَةَ العَرَبِيَّة كُلَّ يَوْم.' }
]),

B('ar-r2', 'B1', 'Artikel', 'القَهْوَةُ وَالثَّقافَة',
`بَدَأَتِ القَهْوَةُ رِحْلَتَها مِنَ اليَمَن قَبْلَ قُرونٍ طَويلَة.
ثُمَّ اِنْتَقَلَتْ إِلى مِصْرَ وَتُرْكِيا، وَبَعْدَ ذَلِكَ إِلى أوروبّا.
في المُجْتَمَعِ العَرَبِيِّ، تَقْديمُ القَهْوَةِ لِلضَّيْفِ عَلامَةُ كَرَمٍ وَاحْتِرام.
وَما زالَتْ بُيوتُ القَهْوَةِ اليَوْمَ مَكاناً لِلِّقاءِ وَالنِّقاشِ في كُلِّ مَدينَة.`,
`bada'ati al-qahwatu rihlataha mina al-Yaman qabla qurunin tawilah.
tsumma intaqalat ila Misra wa Turkiya, wa ba'da dzalika ila Urubba.
fi al-mujtama'i al-arabiyyi, taqdimu al-qahwati lid-dayfi alamatu karamin wa ihtiram.
wa ma zalat buyutu al-qahwati al-yauma makanan lil-liqa'i wan-niqasyi fi kulli madinah.`,
`Kopi memulai perjalanannya dari Yaman berabad-abad lalu, lalu berpindah ke Mesir dan Turki,
kemudian ke Eropa. Dalam masyarakat Arab, menyuguhkan kopi kepada tamu adalah tanda kemurahan
hati dan penghormatan. Hingga kini kedai kopi tetap menjadi tempat bertemu dan berdiskusi di setiap kota.`,
[
  { q: 'مِنْ أَيْنَ بَدَأَتِ القَهْوَة؟', opts: ['مِنْ مِصْر', 'مِنَ اليَمَن', 'مِنْ تُرْكِيا', 'مِنْ أوروبّا'], a: 1,
    why: 'بَدَأَتِ … مِنَ اليَمَن.' },
  { q: 'ماذا تَعْني القَهْوَةُ لِلضَّيْف؟', opts: ['الرِّبْح', 'الكَرَمُ وَالاِحْتِرام', 'العَمَل', 'السَّفَر'], a: 1,
    why: 'تَقْديمُ القَهْوَةِ لِلضَّيْفِ عَلامَةُ كَرَمٍ وَاحْتِرام.' },
  { q: 'ما دَوْرُ بُيوتِ القَهْوَةِ اليَوْم؟',
    opts: ['مَكانٌ لِلنَّوْم', 'مَكانٌ لِلِّقاءِ وَالنِّقاش', 'مَدْرَسَة', 'مَتْحَف'], a: 1,
    why: 'مَكاناً لِلِّقاءِ وَالنِّقاشِ.' },
  { q: 'ما تَرْتيبُ رِحْلَةِ القَهْوَة؟',
    opts: ['أوروبّا ← اليَمَن ← مِصْر', 'اليَمَن ← مِصْرَ وَتُرْكِيا ← أوروبّا',
           'تُرْكِيا ← اليَمَن ← أوروبّا', 'مِصْر ← أوروبّا ← اليَمَن'], a: 1,
    why: 'Urutannya disebut berturut-turut di dua kalimat pertama.' }
])
],

/* ── Rusia ────────────────────────────────────────────────────── */
ru: [
B('ru-r1', 'A1', 'Perkenalan', 'Мой день',
`Меня зовут Антон. Я студент. Я живу в Москве.
Утром я встаю в семь часов и пью кофе. Потом я иду в университет.
Занятия начинаются в девять. Днём я обедаю в столовой.
Вечером я читаю книги или смотрю фильмы. Я ложусь спать в одиннадцать.`,
`Menya zovut Anton. Ya student. Ya zhivu v Moskve.
Utrom ya vstayu v sem chasov i pyu kofe. Potom ya idu v universitet.
Zanyatiya nachinayutsya v devyat. Dnyom ya obedayu v stolovoy.
Vecherom ya chitayu knigi ili smotryu filmy. Ya lozhus spat v odinnadtsat.`,
`Nama saya Anton, mahasiswa, tinggal di Moskow. Pagi bangun pukul tujuh dan minum kopi,
lalu ke kampus. Kuliah mulai pukul sembilan. Siang makan di kantin. Malam membaca buku atau
menonton film. Tidur pukul sebelas.`,
[
  { q: 'Где живёт Антон?', opts: ['В Петербурге', 'В Москве', 'В Казани', 'В Сочи'], a: 1,
    why: 'Я живу в Москве.' },
  { q: 'Во сколько он встаёт?', opts: ['В шесть', 'В семь', 'В девять', 'В одиннадцать'], a: 1,
    why: 'Я встаю в семь часов.' },
  { q: 'Где он обедает?', opts: ['Дома', 'В кафе', 'В столовой', 'В парке'], a: 2,
    why: 'Днём я обедаю в столовой.' },
  { q: 'Что он делает вечером?',
    opts: ['Работает', 'Читает или смотрит фильмы', 'Занимается спортом', 'Готовит'], a: 1,
    why: 'Вечером я читаю книги или смотрю фильмы.' }
]),

B('ru-r2', 'B1', 'Artikel', 'Белые ночи',
`Каждое лето в Петербург приезжают тысячи туристов, чтобы увидеть белые ночи.
С конца мая до середины июля солнце почти не заходит, и ночью на улице светло, как вечером.
В это время в городе проходят концерты и фестивали, а мосты через Неву разводят ночью,
чтобы пропустить корабли. Многие жители говорят, что летом трудно спать,
но никто не жалуется: белые ночи бывают только раз в году.`,
`Kazhdoye leto v Peterburg priyezzhayut tysyachi turistov, chtoby uvidet belyye nochi.
S kontsa maya do serediny iyulya solntse pochti ne zakhodit, i nochyu na ulitse svetlo, kak vecherom.
V eto vremya v gorode prokhodyat kontserty i festivali, a mosty cherez Nevu razvodyat nochyu,
chtoby propustit korabli. Mnogiye zhiteli govoryat, chto letom trudno spat,
no nikto ne zhaluyetsya: belyye nochi byvayut tolko raz v godu.`,
`Setiap musim panas ribuan turis datang ke Petersburg untuk melihat malam putih. Dari akhir Mei
sampai pertengahan Juli matahari nyaris tak terbenam, dan malam hari di jalan terang seperti sore.
Saat itu kota menggelar konser dan festival, sedangkan jembatan di atas Sungai Neva dibuka malam
hari agar kapal lewat. Banyak penduduk bilang sulit tidur di musim panas, tetapi tak ada yang
mengeluh: malam putih hanya ada sekali setahun.`,
[
  { q: 'Когда бывают белые ночи?',
    opts: ['С марта до мая', 'С конца мая до середины июля', 'В августе', 'Зимой'], a: 1,
    why: 'С конца мая до середины июля.' },
  { q: 'Почему разводят мосты?',
    opts: ['Чтобы починить их', 'Чтобы пропустить корабли', 'Из-за туристов', 'Из-за концертов'], a: 1,
    why: 'чтобы пропустить корабли.' },
  { q: 'Что говорят жители?',
    opts: ['Что летом трудно спать', 'Что туристов мало', 'Что мосты мешают', 'Что ночи тёмные'], a: 0,
    why: 'Многие жители говорят, что летом трудно спать.' },
  { q: 'Какое отношение жителей к белым ночам?',
    opts: ['Они сердятся', 'Они не жалуются', 'Им всё равно', 'Они уезжают'], a: 1,
    why: 'но никто не жалуется.' }
])
],

/* ── Jerman ───────────────────────────────────────────────────── */
de: [
B('de-r1', 'A1', 'Iklan', 'Wohnung zu vermieten',
`Schöne Wohnung in Berlin-Kreuzberg, 2 Zimmer, 55 m².
Küche und Bad neu. Balkon nach Süden. 4. Stock, kein Aufzug.
Miete: 780 Euro plus 120 Euro Nebenkosten. Kaution: zwei Monatsmieten.
Frei ab 1. September. Keine Haustiere. Besichtigung nur am Wochenende.
Kontakt: Frau Berger, Telefon 030 1234567.`,
'',
`Apartemen bagus di Berlin-Kreuzberg, 2 kamar, 55 m². Dapur dan kamar mandi baru. Balkon menghadap
selatan. Lantai 4, tanpa lift. Sewa 780 euro plus 120 euro biaya tambahan. Deposit dua bulan sewa.
Kosong mulai 1 September. Tidak boleh hewan peliharaan. Peninjauan hanya akhir pekan.`,
[
  { q: 'Wie viel kostet die Wohnung insgesamt pro Monat?',
    opts: ['780 Euro', '900 Euro', '120 Euro', '1560 Euro'], a: 1,
    why: '780 + 120 Nebenkosten = 900 Euro.' },
  { q: 'Wann kann man die Wohnung ansehen?',
    opts: ['Jeden Tag', 'Nur am Wochenende', 'Nur montags', 'Nach Vereinbarung'], a: 1,
    why: 'Besichtigung nur am Wochenende.' },
  { q: 'Was ist NICHT erlaubt?', opts: ['Kochen', 'Haustiere', 'Besuch', 'Rauchen im Hof'], a: 1,
    why: 'Keine Haustiere.' },
  { q: 'Wie hoch ist die Kaution?',
    opts: ['780 Euro', '1560 Euro', '120 Euro', '900 Euro'], a: 1,
    why: 'zwei Monatsmieten = 2 × 780 = 1560 Euro.' }
]),

B('de-r2', 'B1', 'Artikel', 'Das Fahrrad in deutschen Städten',
`In vielen deutschen Städten ist das Fahrrad längst kein Freizeitgerät mehr, sondern ein Verkehrsmittel.
Münster gilt als Fahrradhauptstadt: Dort gibt es mehr Fahrräder als Einwohner.
Immer mehr Städte bauen breite Radwege und richten Fahrradstraßen ein, auf denen Autos nur Gäste sind.
Kritiker meinen, dadurch gehe Platz für Autos verloren. Befürworter antworten, dass ein Radweg
auf derselben Fläche deutlich mehr Menschen befördern kann als eine Autospur.`,
'',
`Di banyak kota Jerman, sepeda sudah lama bukan alat rekreasi melainkan alat transportasi.
Münster dianggap ibu kota sepeda: jumlah sepedanya melebihi jumlah penduduk. Makin banyak kota
membangun jalur sepeda lebar dan menetapkan jalan sepeda, tempat mobil hanya menumpang. Pengkritik
menilai ruang untuk mobil jadi berkurang. Pendukung menjawab bahwa pada luas yang sama, jalur
sepeda mengangkut jauh lebih banyak orang daripada satu lajur mobil.`,
[
  { q: 'Warum gilt Münster als Fahrradhauptstadt?',
    opts: ['Es hat die längsten Radwege', 'Es gibt dort mehr Fahrräder als Einwohner',
           'Autos sind verboten', 'Es ist die größte Stadt'], a: 1,
    why: 'Dort gibt es mehr Fahrräder als Einwohner.' },
  { q: 'Was ist eine Fahrradstraße?',
    opts: ['Eine Straße nur für Busse', 'Eine Straße, auf der Autos nur Gäste sind',
           'Ein Parkplatz für Räder', 'Eine Straße ohne Ampeln'], a: 1,
    why: 'Fahrradstraßen … auf denen Autos nur Gäste sind.' },
  { q: 'Was sagen die Kritiker?',
    opts: ['Radwege sind zu teuer', 'Es geht Platz für Autos verloren',
           'Radfahren ist gefährlich', 'Es gibt zu wenige Räder'], a: 1,
    why: 'dadurch gehe Platz für Autos verloren.' },
  { q: 'Womit antworten die Befürworter?',
    opts: ['Mit Zahlen zur Beförderungsleistung', 'Mit dem Umweltschutz',
           'Mit der Gesundheit', 'Mit den Kosten'], a: 0,
    why: 'ein Radweg … kann deutlich mehr Menschen befördern als eine Autospur.' }
])
],

/* ── Prancis ──────────────────────────────────────────────────── */
fr: [
B('fr-r1', 'A1', 'Surel', 'Un message de Camille',
`Salut Marc,
Je suis à Lyon depuis lundi. L’hôtel est petit mais très propre.
Le matin, je visite la vieille ville et l’après-midi je travaille au bureau.
Jeudi soir, je rentre à Paris en train. Le train arrive à vingt heures.
Est-ce que tu peux venir à la gare ? J’ai deux grosses valises.
À jeudi ! Camille`,
'',
`Hai Marc, aku di Lyon sejak Senin. Hotelnya kecil tapi sangat bersih. Pagi aku berkeliling kota tua,
sore bekerja di kantor. Kamis malam aku kembali ke Paris naik kereta; keretanya tiba pukul delapan
malam. Bisakah kamu datang ke stasiun? Aku bawa dua koper besar. Sampai Kamis! Camille.`,
[
  { q: 'Depuis quand Camille est-elle à Lyon ?',
    opts: ['Depuis dimanche', 'Depuis lundi', 'Depuis jeudi', 'Depuis mardi'], a: 1,
    why: 'Je suis à Lyon depuis lundi.' },
  { q: 'Que fait-elle le matin ?',
    opts: ['Elle travaille', 'Elle visite la vieille ville', 'Elle dort', 'Elle prend le train'], a: 1,
    why: 'Le matin, je visite la vieille ville.' },
  { q: 'À quelle heure arrive le train ?',
    opts: ['À 8 heures', 'À 20 heures', 'À 18 heures', 'À 22 heures'], a: 1,
    why: 'Le train arrive à vingt heures.' },
  { q: 'Pourquoi Camille demande-t-elle de l’aide ?',
    opts: ['Elle est malade', 'Elle a deux grosses valises',
           'Elle ne connaît pas la gare', 'Elle n’a pas d’argent'], a: 1,
    why: 'J’ai deux grosses valises.' }
]),

B('fr-r2', 'B1', 'Artikel', 'Le pain quotidien',
`En France, la baguette fait partie du quotidien : on en achète plus de six milliards par an.
Pourtant, le nombre de boulangeries diminue depuis cinquante ans, surtout à la campagne.
Dans certains villages, la boulangerie a fermé et les habitants doivent faire dix kilomètres pour
acheter du pain. Des solutions apparaissent : camions-boulangeries, distributeurs automatiques
ouverts la nuit, ou boulangeries gérées par la commune elle-même.
En 2022, la baguette a été inscrite au patrimoine immatériel de l’UNESCO.`,
'',
`Di Prancis, baguette bagian dari keseharian: lebih dari enam miliar dibeli setiap tahun. Namun
jumlah toko roti menurun selama lima puluh tahun, terutama di desa. Di sebagian desa toko rotinya
tutup dan warga harus menempuh sepuluh kilometer untuk membeli roti. Muncul beberapa jalan keluar:
truk roti keliling, mesin penjual otomatis yang buka malam hari, atau toko roti yang dikelola desa
sendiri. Pada 2022 baguette masuk daftar warisan takbenda UNESCO.`,
[
  { q: 'Combien de baguettes achète-t-on par an ?',
    opts: ['Six millions', 'Plus de six milliards', 'Cinquante millions', 'Dix milliards'], a: 1,
    why: 'plus de six milliards par an.' },
  { q: 'Quel problème le texte décrit-il ?',
    opts: ['Le pain coûte trop cher', 'Le nombre de boulangeries diminue',
           'Les Français mangent moins de pain', 'La farine manque'], a: 1,
    why: 'le nombre de boulangeries diminue depuis cinquante ans.' },
  { q: 'Quelle solution n’est PAS citée ?',
    opts: ['Camions-boulangeries', 'Distributeurs automatiques',
           'Boulangeries communales', 'Livraison par la poste'], a: 3,
    why: 'Tiga yang pertama disebut; pengiriman lewat pos tidak.' },
  { q: 'Que s’est-il passé en 2022 ?',
    opts: ['La baguette est entrée au patrimoine de l’UNESCO', 'Le prix a été fixé par l’État',
           'Les boulangeries ont fermé', 'Une nouvelle recette est née'], a: 0,
    why: 'la baguette a été inscrite au patrimoine immatériel de l’UNESCO.' }
])
],

/* ── Spanyol ──────────────────────────────────────────────────── */
es: [
B('es-r1', 'A1', 'Pengumuman', 'Aviso del gimnasio',
`AVISO A LOS SOCIOS
El gimnasio abre de lunes a viernes de 7:00 a 22:00 y los sábados de 9:00 a 14:00.
Los domingos permanece cerrado.
Del 1 al 15 de agosto la piscina estará cerrada por limpieza.
Las clases de yoga cambian al martes y jueves a las 19:00.
Para cancelar tu plaza, avisa con 24 horas de antelación.`,
'',
`PENGUMUMAN UNTUK ANGGOTA. Gym buka Senin–Jumat 07.00–22.00 dan Sabtu 09.00–14.00. Minggu tutup.
Tanggal 1–15 Agustus kolam renang tutup untuk pembersihan. Kelas yoga pindah ke Selasa dan Kamis
pukul 19.00. Untuk membatalkan tempat, beri tahu 24 jam sebelumnya.`,
[
  { q: '¿Cuándo está cerrado el gimnasio?',
    opts: ['Los sábados', 'Los domingos', 'Los lunes', 'Nunca'], a: 1,
    why: 'Los domingos permanece cerrado.' },
  { q: '¿Por qué cierra la piscina en agosto?',
    opts: ['Por vacaciones', 'Por limpieza', 'Por obras', 'Por falta de socios'], a: 1,
    why: 'estará cerrada por limpieza.' },
  { q: '¿Qué días hay yoga ahora?',
    opts: ['Lunes y miércoles', 'Martes y jueves', 'Viernes y sábado', 'Todos los días'], a: 1,
    why: 'cambian al martes y jueves.' },
  { q: '¿Con cuánto tiempo hay que avisar para cancelar?',
    opts: ['12 horas', '24 horas', '48 horas', 'Una semana'], a: 1,
    why: 'avisa con 24 horas de antelación.' }
]),

B('es-r2', 'B1', 'Artikel', 'La siesta que casi nadie duerme',
`Cuando se habla de España, muchos extranjeros piensan en la siesta. Sin embargo, los estudios
muestran que menos de un veinte por ciento de los españoles duerme la siesta a diario.
La costumbre nació en el campo, cuando la gente trabajaba desde muy temprano y evitaba el calor
del mediodía. Hoy los horarios de oficina y los desplazamientos largos hacen imposible volver a casa.
Lo que sí permanece es la pausa larga del mediodía en pueblos pequeños y en muchos comercios,
que cierran entre las dos y las cinco.`,
'',
`Bila bicara tentang Spanyol, banyak orang asing membayangkan siesta. Padahal penelitian menunjukkan
kurang dari dua puluh persen orang Spanyol tidur siang setiap hari. Kebiasaan ini lahir di desa,
ketika orang bekerja sejak sangat pagi dan menghindari panas tengah hari. Kini jam kantor dan
perjalanan jauh membuat pulang ke rumah mustahil. Yang bertahan adalah jeda panjang tengah hari di
desa kecil dan di banyak toko, yang tutup antara pukul dua sampai lima.`,
[
  { q: '¿Qué dicen los estudios sobre la siesta?',
    opts: ['Casi todos la duermen', 'Menos del 20 % la duerme a diario',
           'Solo la duermen los jóvenes', 'Ha desaparecido del todo'], a: 1,
    why: 'menos de un veinte por ciento … duerme la siesta a diario.' },
  { q: '¿Dónde nació la costumbre?',
    opts: ['En las ciudades', 'En el campo', 'En las oficinas', 'En la costa'], a: 1,
    why: 'La costumbre nació en el campo.' },
  { q: '¿Por qué hoy es difícil dormir la siesta?',
    opts: ['Hace menos calor', 'Los horarios y los desplazamientos largos',
           'Está prohibido', 'La gente no quiere'], a: 1,
    why: 'los horarios de oficina y los desplazamientos largos hacen imposible volver a casa.' },
  { q: '¿Qué sí se mantiene?',
    opts: ['La siesta en las ciudades', 'La pausa larga del mediodía en pueblos y comercios',
           'El trabajo desde muy temprano', 'El cierre los domingos'], a: 1,
    why: 'Lo que sí permanece es la pausa larga del mediodía…' }
])
]
};

export const bacaanUntuk = code => BACAAN[code] || [];
