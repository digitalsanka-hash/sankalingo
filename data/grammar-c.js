/* Tata bahasa tingkat C1 (20 topik) dan C2 (16 topik). */

export const GRAMMAR_C1 = [
{
  id: 'c1-01', level: 'C1', title: 'Inversion after Negative Adverbials', titleId: 'Pembalikan Susunan',
  why: 'Satu kalimat inversi yang tepat langsung menandai penulis tingkat lanjut.',
  form: 'Never / Rarely / Seldom / Not only / No sooner / Little / Under no circumstances + kata bantu + S + V',
  notes: [
    '"Never have I seen such a mess."',
    '"Not only did costs rise, but quality also fell."',
    '"No sooner had she arrived than the meeting began."',
    'Jangan berlebihan — satu atau dua per esai sudah cukup.'
  ],
  ex: [
    ['Rarely does a policy satisfy everyone.', 'Jarang sekali sebuah kebijakan memuaskan semua orang.'],
    ['Under no circumstances should data be shared.', 'Dalam keadaan apa pun data tidak boleh dibagikan.']
  ],
  traps: [['Never I have seen that.', 'Never have I seen that.', 'Setelah adverbia negatif, kata bantu mendahului subjek.']],
  drills: [
    { t:'mcq', q:'Not only ___ the price rise, but service worsened.', opts:['did','was','has','does'], a:0 },
    { t:'mcq', q:'No sooner ___ he left than it rained.', opts:['has','had','did','was'], a:1 },
    { t:'trans', id:'Jarang sekali saya melihat hasil sebaik ini.', a:['Rarely have I seen such good results.'] }
  ]
},
{
  id: 'c1-02', level: 'C1', title: 'Subjunctive & Formal Should', titleId: 'Modus Subjungtif',
  why: 'Gaya formal dokumen, rekomendasi, dan tulisan akademik.',
  form: 'suggest / recommend / insist / demand / propose + that + S + V1 (tanpa -s)\nIt is essential / vital / imperative that + S + V1',
  notes: [
    '"The board recommends that he resign." (bukan resigns)',
    'Alternatif British: "…that he should resign."',
    'Juga muncul pada ungkapan tetap: "God save the King", "Be that as it may".'
  ],
  ex: [
    ['It is vital that every applicant submit the form.', 'Sangat penting setiap pelamar mengirimkan formulir.'],
    ['She insisted that the report be revised.', 'Dia bersikeras laporannya direvisi.']
  ],
  traps: [['It is essential that he submits it.', '… that he submit it.', 'Subjungtif memakai bentuk dasar.']],
  drills: [
    { t:'mcq', q:'The committee demanded that the rule ___ changed.', opts:['is','be','was','being'], a:1 },
    { t:'mcq', q:'It is imperative that she ___ on time.', opts:['arrives','arrive','arriving','arrived'], a:1 }
  ]
},
{
  id: 'c1-03', level: 'C1', title: 'Advanced Passive Structures', titleId: 'Pasif Tingkat Lanjut',
  why: 'Pasif ganda dan pasif dengan gerund adalah ciri tulisan ilmiah.',
  form: 'having been + V3 · being + V3 · modal + have been + V3\nS + is thought to have been + V3',
  notes: [
    '"Having been warned, they proceeded carefully."',
    '"The site is believed to have been abandoned in 1400."',
    '"The results may have been affected by sample size."'
  ],
  ex: [
    ['The manuscript is thought to have been written in 1520.', 'Naskah itu diperkirakan ditulis pada 1520.'],
    ['Being told twice, he still forgot.', 'Meski diberi tahu dua kali, dia tetap lupa.']
  ],
  traps: [['The data may have affected by errors.', 'The data may have been affected by errors.', 'Pasif butuh been.']],
  drills: [
    { t:'mcq', q:'The findings might ___ by the small sample.', opts:['have distorted','have been distorted','been distorted','be distorting'], a:1 },
    { t:'mcq', q:'___ rejected twice, she applied again.', opts:['Have been','Having been','Being had','Been having'], a:1 }
  ]
},
{
  id: 'c1-04', level: 'C1', title: 'Conditionals without if', titleId: 'Pengandaian Tanpa if',
  why: 'Variasi struktur yang dinilai tinggi dan sering muncul di teks akademik.',
  form: 'Had + S + V3 … · Were + S + to V1 … · Should + S + V1 …\nProvided that / As long as / Unless / Suppose',
  notes: [
    '"Had we known, we would have acted."',
    '"Were the government to act now, costs would fall."',
    '"Should you need help, contact us." — gaya surat resmi.',
    'unless = if not, tapi tidak selalu bisa saling ganti.'
  ],
  ex: [
    ['Should you require assistance, please call.', 'Jika Anda memerlukan bantuan, silakan telepon.'],
    ['Were I in charge, I would change the policy.', 'Andai saya yang memimpin, saya akan mengubah kebijakannya.']
  ],
  traps: [['If had I known…', 'Had I known…', 'Inversi tidak memakai if.']],
  drills: [
    { t:'mcq', q:'___ you have questions, email us.', opts:['Should','Would','Had','Were'], a:0 },
    { t:'mcq', q:'___ they invested earlier, profits would be higher now.', opts:['Should','Had','Were','If had'], a:1 }
  ]
},
{
  id: 'c1-05', level: 'C1', title: 'Concession & Contrast (advanced)', titleId: 'Konsesi Tingkat Lanjut',
  why: 'Menunjukkan kemampuan menimbang dua sisi — inti Task 2 band 8.',
  form: 'While / Whereas / Whilst + klausa\nAdmittedly … , yet … · Granted that … · That said, …\nadj + as / though + S + V (Hard as it was, …)',
  notes: [
    '"Difficult though it may seem, the method works."',
    '"Admittedly, the cost is high; nevertheless, the returns justify it."',
    'whereas dipakai untuk kontras dua fakta, bukan untuk konsesi.'
  ],
  ex: [
    ['While automation cuts costs, it also displaces workers.', 'Meski otomatisasi memangkas biaya, ia juga menggeser pekerja.'],
    ['Expensive as it is, the programme delivers results.', 'Meski mahal, program itu memberi hasil.']
  ],
  traps: [['Whereas he was tired, he continued.', 'Although he was tired, he continued.', 'whereas untuk kontras dua hal berbeda.']],
  drills: [
    { t:'mcq', q:'___ the risks, the plan was approved.', opts:['Whereas','Notwithstanding','However','Although'], a:1 },
    { t:'mcq', q:'Hard ___ it was, they finished.', opts:['as','that','when','so'], a:0 }
  ]
},
{
  id: 'c1-06', level: 'C1', title: 'Reduced Relative Clauses', titleId: 'Klausa Relatif Terpangkas',
  why: 'Memadatkan kalimat panjang tanpa kehilangan makna — hemat kata di ujian bertenggat.',
  form: 'the man who is standing → the man standing\nthe report which was written → the report written\nthe first person who arrived → the first person to arrive',
  notes: [
    'Hanya bisa bila kata ganti relatifnya adalah subjek.',
    'Setelah superlatif dan urutan, pakai bentuk to + V1.',
    'Berguna untuk memangkas kata di Task 1 yang dibatasi waktu.'
  ],
  ex: [
    ['The students taking the exam must arrive early.', 'Siswa yang mengikuti ujian harus datang lebih awal.'],
    ['He was the last person to leave.', 'Dia orang terakhir yang pergi.']
  ],
  traps: [['The book writing by him', 'The book written by him', 'Makna pasif → V3.']],
  drills: [
    { t:'mcq', q:'The policy ___ last year has failed.', opts:['introducing','introduced','introduce','was introduced'], a:1 },
    { t:'mcq', q:'She was the only one ___ notice.', opts:['to','who to','for','that to'], a:0 }
  ]
},
{
  id: 'c1-07', level: 'C1', title: 'Complex Noun Phrases', titleId: 'Frasa Benda Kompleks',
  why: 'Kepadatan informasi adalah ciri teks akademik. IELTS Reading penuh dengan ini.',
  form: '(penentu) + (kata sifat) + (kata benda pemodifikasi) + INTI + (frasa preposisi) + (klausa relatif)',
  notes: [
    '"the rapidly growing urban population of Southeast Asia which relies on imported food"',
    'Kuncinya: temukan kata benda INTI untuk memahami kalimatnya.',
    'Dalam menulis, jangan menumpuk lebih dari tiga pemodifikasi.'
  ],
  ex: [
    ['Government-funded research programmes aimed at reducing emissions have expanded.', 'Program riset yang didanai pemerintah untuk menekan emisi telah berkembang.']
  ],
  traps: [['a increasing number problem of', 'an increasing number of problems', 'Urutan pemodifikasi harus rapi.']],
  drills: [
    { t:'mcq', q:'Apa inti dari "the recently published study on urban air quality"?', opts:['recently','published','study','quality'], a:2 },
    { t:'mcq', q:'Mana frasa yang benar?', opts:['a growing rapidly economy','a rapidly growing economy','a growing economy rapidly','rapidly a growing economy'], a:1 }
  ]
},
{
  id: 'c1-08', level: 'C1', title: 'Modal Nuance', titleId: 'Nuansa Modal',
  why: 'Perbedaan halus antara should, ought to, had better, be to — dinilai di speaking tingkat tinggi.',
  form: 'had better + V1 (peringatan, ada konsekuensi)\nought to (kewajiban moral) · be to + V1 (instruksi resmi)\nmay well (sangat mungkin) · might as well (ya sudah, sekalian)',
  notes: [
    '"You had better leave now" lebih mendesak daripada "You should leave".',
    '"Staff are to report by 8 a.m." — bahasa pengumuman.',
    '"We might as well start" — tidak ada alasan menunda.'
  ],
  ex: [
    ['You had better double-check the figures.', 'Sebaiknya kamu periksa ulang angkanya.'],
    ['The results may well change the debate.', 'Hasilnya sangat mungkin mengubah perdebatan.']
  ],
  traps: [['You had better to go.', 'You had better go.', 'had better + V1.']],
  drills: [
    { t:'mcq', q:'You ___ better take an umbrella.', opts:['have','had','would','should'], a:1 },
    { t:'mcq', q:'All candidates ___ to arrive by nine.', opts:['are','have','will','should be'], a:0 }
  ]
},
{
  id: 'c1-09', level: 'C1', title: 'Fronting & Information Order', titleId: 'Penempatan Informasi',
  why: 'Informasi lama di depan, informasi baru di belakang — kunci paragraf yang mengalir.',
  form: 'Frasa keterangan / objek dipindah ke depan untuk menyambung kalimat sebelumnya.',
  notes: [
    '"Of these three factors, cost is the most decisive."',
    'Prinsip end-weight: bagian terpanjang dan terpenting diletakkan di akhir.',
    'Ini yang membuat paragraf terasa "nyambung" tanpa harus menambah penghubung.'
  ],
  ex: [
    ['To this problem there is no simple answer.', 'Untuk masalah ini tidak ada jawaban sederhana.'],
    ['Among the causes listed, deforestation stands out.', 'Di antara sebab yang disebutkan, penggundulan hutan menonjol.']
  ],
  traps: [['There is no simple answer to this problem, and about this problem many wrote.', 'Rapikan: satu gagasan per kalimat.', 'Hindari pengulangan berat.']],
  drills: [
    { t:'mcq', q:'Kalimat mana paling mengalir setelah "Three causes were identified."?', opts:['Cost is the most serious of these.','Of these, cost is the most serious.','The most serious is of these cost.','Cost of these the most serious is.'], a:1 }
  ]
},
{
  id: 'c1-10', level: 'C1', title: 'Register & Formality', titleId: 'Ragam Bahasa',
  why: 'Menulis esai dengan bahasa obrolan langsung menurunkan nilai, sekalipun tata bahasanya benar.',
  form: 'Formal: However / obtain / require / assist / children / a great deal of\nInformal: But / get / need / help / kids / lots of',
  notes: [
    'Hindari singkatan (don\'t, isn\'t) dalam tulisan akademik.',
    'Hindari phrasal verb informal; ganti dengan padanan Latin: find out → discover, put off → postpone.',
    'Hindari "you" umum; ganti dengan "one" atau bentuk pasif.'
  ],
  ex: [
    ['The data were obtained from three sources.', 'Data diperoleh dari tiga sumber.'],
    ['This does not, however, resolve the issue.', 'Namun, ini tidak menyelesaikan masalahnya.']
  ],
  traps: [['A lot of people don\'t like it.', 'Many people object to it.', 'Naikkan ragam bahasa untuk esai.']],
  drills: [
    { t:'mcq', q:'Versi paling formal:', opts:['We got the data from surveys.','The data were collected via surveys.','We picked up data from surveys.','Data got collected by us.'], a:1 },
    { t:'mcq', q:'Padanan formal dari "put off":', opts:['postpone','put away','call off','set off'], a:0 }
  ]
},
{
  id: 'c1-11', level: 'C1', title: 'Cohesion Devices', titleId: 'Perekat Antar Kalimat',
  why: 'Kohesi dinilai terpisah dari koherensi. Rujukan yang rapi menaikkan nilai tanpa menambah kata.',
  form: 'Rujukan: this, these, such, the former, the latter, the above\nSubstitusi: do so, one, the same\nPengulangan bervariasi: the policy → the measure → the initiative',
  notes: [
    'Jangan biarkan "this" berdiri sendiri kalau rujukannya kabur; tulis "this trend", "this shift".',
    'Ganti kata kunci dengan sinonim agar tidak monoton, tapi jangan sampai kabur.',
    'the former = yang pertama disebut; the latter = yang terakhir.'
  ],
  ex: [
    ['Two options exist. The former is cheaper; the latter is faster.', 'Ada dua pilihan. Yang pertama lebih murah; yang kedua lebih cepat.'],
    ['Such measures rarely succeed alone.', 'Langkah semacam itu jarang berhasil sendirian.']
  ],
  traps: [['This is a problem. This is why. This means…', 'Perjelas: This gap is a problem…', '"this" bertumpuk membingungkan pembaca.']],
  drills: [
    { t:'mcq', q:'"Tea and coffee are popular. ___ contains more caffeine."', opts:['The former','The latter','This','Such'], a:1 },
    { t:'mcq', q:'Perbaikan terbaik untuk "This is important."', opts:['This is important.','This finding is important.','It is important this.','Important is this.'], a:1 }
  ]
},
{
  id: 'c1-12', level: 'C1', title: 'Idiomatic Verb Patterns', titleId: 'Pola Kata Kerja Idiomatik',
  why: 'Membedakan penutur mahir dari penutur benar-tapi-kaku.',
  form: 'come to realise · get round to doing · be bound to · be liable to\nstand to gain · go some way towards + V-ing · have a tendency to',
  notes: [
    '"I never got round to reading it."',
    '"Costs are bound to rise."',
    '"This would go some way towards solving the issue." — sangat berguna di Task 2.'
  ],
  ex: [
    ['Prices are bound to increase next year.', 'Harga pasti akan naik tahun depan.'],
    ['The scheme goes some way towards reducing waste.', 'Skema itu cukup membantu mengurangi limbah.']
  ],
  traps: [['I am bound to increase prices maybe.', 'Prices are bound to increase.', 'be bound to = pasti, jangan digabung "maybe".']],
  drills: [
    { t:'mcq', q:'Such a policy would go some way ___ solving the problem.', opts:['to','towards','for','at'], a:1 },
    { t:'mcq', q:'I finally got round ___ the report.', opts:['to write','to writing','writing','write'], a:1 }
  ]
},
{
  id: 'c1-13', level: 'C1', title: 'Quantifying Precisely', titleId: 'Menyebut Jumlah dengan Tepat',
  why: 'IELTS Task 1 menilai akurasi data. Salah kata jumlah = salah fakta.',
  form: 'a marginal / slight / modest / steady / substantial / dramatic increase\nfewer than · no more than · in excess of · approximately · around',
  notes: [
    'fewer untuk terhitung, less untuk tak terhitung.',
    '"a two-fold increase" = dua kali lipat, bukan naik dua persen.',
    'Hindari "very many" atau "so much" dalam tulisan data.'
  ],
  ex: [
    ['Numbers rose by a modest 3%.', 'Angkanya naik tipis 3%.'],
    ['Fewer than half the respondents agreed.', 'Kurang dari separuh responden setuju.']
  ],
  traps: [['Less students attended.', 'Fewer students attended.', 'students terhitung.']],
  drills: [
    { t:'mcq', q:'___ than 20 people replied.', opts:['Less','Fewer','Lesser','Little'], a:1 },
    { t:'mcq', q:'Sales rose ___ 5% to 42%.', opts:['from','by','in','at'], a:0, why:'Pola: rose from 5% to 42%.' }
  ]
},
{
  id: 'c1-14', level: 'C1', title: 'Emphasis & Focus', titleId: 'Penekanan',
  why: 'Menonjolkan argumen tanpa berteriak dengan huruf kapital.',
  form: 'It is precisely … that · What is striking is …\nFar from + V-ing · By no means · in no way',
  notes: [
    '"Far from solving the problem, the policy worsened it."',
    '"By no means is this the only factor."(diikuti inversi)',
    'Gunakan hemat; terlalu banyak penekanan justru melemahkan.'
  ],
  ex: [
    ['What is striking is the speed of the change.', 'Yang mencolok adalah kecepatan perubahannya.'],
    ['Far from being cheap, the scheme cost millions.', 'Alih-alih murah, skema itu menelan jutaan.']
  ],
  traps: [['By no means this is the only factor.', 'By no means is this the only factor.', 'Butuh inversi.']],
  drills: [
    { t:'mcq', q:'___ from improving, conditions deteriorated.', opts:['Far','Long','Apart','Away'], a:0 },
    { t:'mcq', q:'In no way ___ this justify the cost.', opts:['does','do','is','it does'], a:0 }
  ]
},
{
  id: 'c1-15', level: 'C1', title: 'Verb Tense in Academic Writing', titleId: 'Tenses dalam Tulisan Ilmiah',
  why: 'Setiap bagian tulisan ilmiah punya tenses bakunya sendiri.',
  form: 'Fakta umum & temuan mapan → present simple\nMetode & hasil penelitian tertentu → past simple\nRangkuman literatur → present perfect',
  notes: [
    '"Smith (2019) argues…" (pendapat masih berlaku) vs "Smith surveyed 200 people" (kegiatan selesai).',
    '"Research has shown that…" untuk merangkum banyak studi.',
    'Grafik dan tabel dijelaskan dengan present simple: "The chart shows…"'
  ],
  ex: [
    ['The graph illustrates changes between 2000 and 2020.', 'Grafik itu menggambarkan perubahan antara 2000 dan 2020.'],
    ['Researchers have long debated this issue.', 'Peneliti sudah lama memperdebatkan isu ini.']
  ],
  traps: [['The chart showed the data.', 'The chart shows the data.', 'Deskripsi grafik memakai present.']],
  drills: [
    { t:'mcq', q:'The table ___ five categories.', opts:['showed','shows','has shown','was showing'], a:1 },
    { t:'mcq', q:'Recent studies ___ that sleep aids memory.', opts:['showed','have shown','shows','were showing'], a:1 }
  ]
},
{
  id: 'c1-16', level: 'C1', title: 'Prepositional Phrases as Connectors', titleId: 'Frasa Preposisi Penghubung',
  why: 'Memberi variasi selain however dan therefore yang sudah usang.',
  form: 'in light of · with regard to · in terms of · on the grounds that\nat the expense of · in the wake of · by virtue of · with a view to + V-ing',
  notes: [
    '"In light of these findings, the policy should change."',
    '"Growth came at the expense of the environment."',
    '"with a view to reducing costs" — perhatikan V-ing setelah to.'
  ],
  ex: [
    ['In terms of cost, the plan is realistic.', 'Dari segi biaya, rencana itu realistis.'],
    ['The reform was rejected on the grounds that it was unfair.', 'Reformasi itu ditolak dengan alasan tidak adil.']
  ],
  traps: [['with a view to reduce costs', 'with a view to reducing costs', 'to di sini preposisi.']],
  drills: [
    { t:'mcq', q:'___ of the new data, we revised the model.', opts:['In light','In terms','On behalf','At the expense'], a:0 },
    { t:'mcq', q:'The city expanded at the expense ___ farmland.', opts:['for','of','to','with'], a:1 }
  ]
},
{
  id: 'c1-17', level: 'C1', title: 'Reporting Verbs with Attitude', titleId: 'Kata Kerja Pelaporan Bernuansa',
  why: 'Menunjukkan sikap terhadap sumber — kemampuan kunci menulis akademik.',
  form: 'Netral: state, note, report, observe\nSetuju kuat: demonstrate, establish, confirm\nRagu: claim, allege, assert, suggest\nMenolak: dispute, refute, challenge',
  notes: [
    '"Smith claims…" menyiratkan keraguan; "Smith demonstrates…" menyiratkan bukti kuat.',
    'Pola beragam: argue that / criticise sth / accuse sb of doing.',
    'Ini cara halus menyisipkan penilaian tanpa berkata "saya rasa".'
  ],
  ex: [
    ['The author challenges this assumption.', 'Penulis itu menantang asumsi tersebut.'],
    ['The study establishes a clear link.', 'Studi itu memastikan adanya kaitan yang jelas.']
  ],
  traps: [['Smith said that.', 'Smith argues that…', '"said" terlalu netral untuk akademik.']],
  drills: [
    { t:'mcq', q:'Kata paling meragukan:', opts:['demonstrates','confirms','claims','establishes'], a:2 },
    { t:'mcq', q:'The paper ___ the earlier findings.', opts:['refutes','refuse','refutation','refusing'], a:0 }
  ]
},
{
  id: 'c1-18', level: 'C1', title: 'Ambiguity & Modifier Placement', titleId: 'Letak Pemodifikasi',
  why: 'Kata "only" yang salah letak bisa mengubah arti kalimat sepenuhnya.',
  form: 'Letakkan pemodifikasi sedekat mungkin dengan kata yang diterangkan.',
  notes: [
    '"Only I ate rice" ≠ "I only ate rice" ≠ "I ate only rice".',
    'Dangling modifier: "Running late, the bus was missed." → siapa yang terlambat?',
    'Frasa panjang jangan menyisip di antara subjek dan kata kerja.'
  ],
  ex: [
    ['She almost drove her children to school every day.', '(hampir menyetir — bukan yang dimaksud)'],
    ['She drove her children to school almost every day.', 'Dia mengantar anaknya ke sekolah hampir setiap hari.']
  ],
  traps: [['Running late, the bus was missed.', 'Running late, we missed the bus.', 'Subjek harus cocok.']],
  drills: [
    { t:'mcq', q:'Mana yang berarti "hanya nasi yang saya makan"?', opts:['Only I ate rice.','I only ate rice.','I ate only rice.','Rice I only ate.'], a:2 },
    { t:'mcq', q:'Mana yang benar?', opts:['Walking home, the rain began.','Walking home, I felt the rain begin.','Walking home the rain, began.','The rain walking home began.'], a:1 }
  ]
},
{
  id: 'c1-19', level: 'C1', title: 'Parallel Structure', titleId: 'Kesejajaran Bentuk',
  why: 'Daftar yang tidak sejajar terasa janggal dan dihitung sebagai kesalahan tata bahasa.',
  form: 'Elemen dalam satu daftar harus sama bentuknya: semua V-ing, semua kata benda, atau semua to + V1.',
  notes: [
    '"She likes reading, swimming, and cycling." (bukan "…and to cycle")',
    'Berlaku juga pada pasangan: not only … but also …, both … and …',
    'Perhatikan kesejajaran setelah "prefer A to B".'
  ],
  ex: [
    ['The course improves reading, writing, and speaking.', 'Kursus ini meningkatkan membaca, menulis, dan berbicara.'],
    ['He is not only talented but also disciplined.', 'Dia tidak hanya berbakat tetapi juga disiplin.']
  ],
  traps: [['She likes to swim, running, and bike rides.', 'She likes swimming, running, and cycling.', 'Samakan bentuknya.']],
  drills: [
    { t:'mcq', q:'Mana yang sejajar?', opts:['to read, writing, and speak','reading, writing, and speaking','read, to write, speaking','reading, to write, speak'], a:1 },
    { t:'mcq', q:'He is both intelligent ___ hardworking.', opts:['and','also','but','or'], a:0 }
  ]
},
{
  id: 'c1-20', level: 'C1', title: 'Common C1 Error Audit', titleId: 'Audit Kesalahan Umum',
  why: 'Daftar periksa akhir sebelum menyerahkan tulisan. Sepuluh titik yang paling sering menggerus nilai.',
  form: '1 artikel · 2 -s jamak · 3 -s orang ketiga · 4 kesesuaian subjek-kata kerja\n5 tenses konsisten · 6 preposisi melekat · 7 comma splice\n8 kata benda tak terhitung · 9 kesejajaran · 10 pengulangan kata',
  notes: [
    'Sisakan 3 menit di ujian tulis hanya untuk memeriksa sepuluh titik ini.',
    'Baca ulang mundur dari kalimat terakhir — mata jadi lebih peka pada kesalahan.',
    'Kesalahan kecil berulang lebih merusak daripada satu kesalahan besar.'
  ],
  ex: [
    ['Each student has their own laptop.', 'Setiap siswa punya laptopnya sendiri.']
  ],
  traps: [
    ['Informations are important.', 'Information is important.', 'Tak terhitung.'],
    ['He discuss about the issue.', 'He discusses the issue.', 'Dua kesalahan sekaligus: -s dan preposisi.']
  ],
  drills: [
    { t:'mcq', q:'Cari kalimat yang benar:', opts:['Every students has a book.','Every student have a book.','Every student has a book.','Every student has books each ones.'], a:2 },
    { t:'mcq', q:'Cari kalimat yang benar (pola sesudah suggest):', opts:['She suggested me to rest.','She suggested that I rest.','She suggest I rested.','She suggested to me rest.'], a:1 },
    { t:'mcq', q:'Cari kalimat yang benar (the number of + kata kerja):', opts:['The number of cars are rising.','The number of cars is rising.','A number of car is rising.','Numbers of car is rising.'], a:1 }
  ]
}
];

export const GRAMMAR_C2 = [
{
  id: 'c2-01', level: 'C2', title: 'Subtle Aspect Choices', titleId: 'Pilihan Aspek Halus',
  why: 'Pada level ini yang dinilai bukan benar-salah, melainkan nuansa.',
  form: 'I have lived / I have been living · It has rained / It has been raining',
  notes: [
    'Bentuk continuous menyiratkan sementara, belum selesai, atau berkesan emosional.',
    '"You have been eating my biscuits" terdengar menuduh; "You have eaten" hanya menyatakan.',
    'Kata kerja keadaan dalam bentuk continuous mengubah arti: "I\'m thinking" ≠ "I think".'
  ],
  ex: [
    ['I\'m loving this course.', 'Saya sedang sangat menikmati kursus ini.'],
    ['She has been meaning to call you.', 'Dia sudah lama berniat meneleponmu.']
  ],
  traps: [['I am understanding now.', 'I understand now.', 'understand jarang dipakai continuous.']],
  drills: [
    { t:'mcq', q:'Mana yang menyiratkan tuduhan?', opts:['You have eaten my lunch.','You have been eating my lunch.','You ate my lunch.','You eat my lunch.'], a:1 }
  ]
},
{
  id: 'c2-02', level: 'C2', title: 'Advanced Inversion & Fronting', titleId: 'Inversi Lanjutan',
  why: 'Dipakai untuk irama dan penekanan, bukan sekadar pamer struktur.',
  form: 'So + adj + be + S + that … · Such + be + S + that …\nOnly when / Only after + klausa + inversi',
  notes: [
    '"So great was the demand that stock ran out."',
    '"Only after the audit did the errors emerge."',
    'Pastikan kalimatnya tetap mudah dibaca; inversi yang memaksa justru menurunkan nilai.'
  ],
  ex: [
    ['Such was the impact that policy changed within weeks.', 'Begitu besar dampaknya sehingga kebijakan berubah dalam hitungan minggu.']
  ],
  traps: [['Only after the audit the errors emerged.', 'Only after the audit did the errors emerge.', 'Butuh inversi.']],
  drills: [
    { t:'mcq', q:'So loud ___ the noise that we left.', opts:['was','were','is','did'], a:0 },
    { t:'mcq', q:'Only later ___ we realise the cost.', opts:['did','do','have','were'], a:0 }
  ]
},
{
  id: 'c2-03', level: 'C2', title: 'Nuanced Modality', titleId: 'Modalitas Bernuansa',
  why: 'Membedakan kepastian 60% dan 90% lewat pilihan kata.',
  form: 'will (kepastian tinggi) · should (harapan wajar) · may well (mungkin besar)\ncould conceivably · is unlikely to · stands to',
  notes: [
    '"That will be the courier at the door." — kepastian, bukan masa depan.',
    '"The scheme stands to benefit small firms."',
    '"It is unlikely to succeed without funding."'
  ],
  ex: [
    ['The delay should be temporary.', 'Penundaan itu semestinya sementara.'],
    ['Costs could conceivably double.', 'Biayanya bisa saja berlipat dua.']
  ],
  traps: [['That must be the courier maybe.', 'That will be the courier.', 'Jangan campur kepastian dan keraguan.']],
  drills: [
    { t:'mcq', q:'Kepastian tertinggi:', opts:['might','may well','will','could'], a:2 }
  ]
},
{
  id: 'c2-04', level: 'C2', title: 'Discourse Management', titleId: 'Pengelolaan Wacana',
  why: 'Kemampuan mengarahkan pembaca/pendengar — kriteria tertinggi speaking dan writing.',
  form: 'Signposting: Let me turn to … · Having established that … · This raises the question of …\nMenutup topik: That said, … · With that in mind, …',
  notes: [
    'Dalam speaking Part 3, tandai peralihan pikiran agar penguji mudah mengikuti.',
    'Jangan menandai berlebihan — dua sampai tiga penanda per jawaban panjang sudah cukup.',
    'Menyimpang sedikit lalu kembali: "But to return to your question, …"'
  ],
  ex: [
    ['Having established the cause, we can consider solutions.', 'Setelah memastikan penyebabnya, kita bisa membahas solusinya.']
  ],
  traps: [['Firstly, secondly, thirdly, fourthly, fifthly…', 'Batasi 2–3 penanda urutan.', 'Terlalu kaku dan mekanis.']],
  drills: [
    { t:'mcq', q:'Penanda peralihan terbaik:', opts:['Anyway so','This raises the question of','And then and','So so'], a:1 }
  ]
},
{
  id: 'c2-05', level: 'C2', title: 'Collocational Precision', titleId: 'Ketepatan Kolokasi',
  why: 'Di C2, kesalahan yang tersisa hampir selalu soal pasangan kata, bukan tata bahasa.',
  form: 'heavy rain (bukan strong rain) · strong coffee (bukan heavy coffee)\nmake a decision · take a risk · pay attention · draw a conclusion',
  notes: [
    'Pelajari kata dalam pasangan, bukan sendirian.',
    'Kamus kolokasi lebih berguna daripada kamus dwibahasa di level ini.',
    'Bila ragu, pilih pasangan yang pernah kamu baca, bukan yang kamu karang.'
  ],
  ex: [
    ['The report drew a firm conclusion.', 'Laporan itu menarik kesimpulan tegas.']
  ],
  traps: [['do a decision', 'make a decision', 'Kolokasi baku.']],
  drills: [
    { t:'mcq', q:'___ attention to detail.', opts:['Do','Make','Pay','Give up'], a:2 },
    { t:'mcq', q:'___ a risk', opts:['do','take','make','pay'], a:1 }
  ]
},
{
  id: 'c2-06', level: 'C2', title: 'Irony, Understatement, Hyperbole', titleId: 'Gaya Retoris',
  why: 'Dipakai penutur asli terus-menerus; salah tangkap bisa membalik makna teks.',
  form: 'Understatement: "not bad" = bagus · "a slight problem" = masalah besar\nIrony: "Great, another delay."',
  notes: [
    'Bahasa Inggris British sangat gemar understatement.',
    'Dalam listening ujian, nada suara menentukan makna sebenarnya.',
    'Hindari ironi di tulisan akademik — bisa disalahpahami.'
  ],
  ex: [
    ['The results were not entirely disappointing.', 'Hasilnya sebenarnya cukup baik.']
  ],
  traps: [['Menerjemahkan "not bad" sebagai "tidak buruk (biasa saja)".', '"not bad" umumnya berarti bagus.', 'Perhatikan nada.']],
  drills: [
    { t:'mcq', q:'"That went quite well" (nada positif) berarti', opts:['gagal total','biasa saja','sangat baik','tidak terjadi'], a:2 }
  ]
},
{
  id: 'c2-07', level: 'C2', title: 'Complex Coordination', titleId: 'Penggabungan Kompleks',
  why: 'Menyusun kalimat panjang yang tetap jernih adalah tanda penguasaan puncak.',
  form: 'Gabungkan klausa relatif, partisip, dan preposisional tanpa kehilangan subjek utama.',
  notes: [
    'Aturan praktis: satu gagasan utama per kalimat, maksimal dua klausa penunjang.',
    'Jika kalimat melebihi 40 kata, pecah.',
    'Baca keras-keras: kalau kehabisan napas, kalimatnya terlalu panjang.'
  ],
  ex: [
    ['The scheme, introduced in 2019 and funded largely by local taxes, has halved waiting times.', 'Skema itu, diperkenalkan pada 2019 dan sebagian besar didanai pajak daerah, telah memangkas separuh waktu tunggu.']
  ],
  traps: [['Kalimat 70 kata tanpa jeda.', 'Pecah jadi dua.', 'Kejernihan mengalahkan kerumitan.']],
  drills: [
    { t:'mcq', q:'Kalimat terbaik:', opts:['The plan which was made and which was funded and which started worked.','The plan, drawn up in 2020 and funded locally, succeeded.','The plan worked it was made in 2020 funded locally.','Made 2020 funded locally the plan worked.'], a:1 }
  ]
},
{
  id: 'c2-08', level: 'C2', title: 'Formal Letter & Report Conventions', titleId: 'Kaidah Surat & Laporan',
  why: 'Muncul di IELTS General Task 1 dan surat kerja sungguhan.',
  form: 'Dear Sir or Madam → Yours faithfully\nDear Mr Tan → Yours sincerely\nI am writing to … · I would be grateful if you could … · Please do not hesitate to contact me',
  notes: [
    'Jangan campur pembuka formal dengan penutup santai.',
    'Satu paragraf satu tujuan: alasan menulis, rincian, permintaan tindakan.',
    'Hindari singkatan dan tanda seru.'
  ],
  ex: [
    ['I am writing to express my concern regarding the delay.', 'Saya menulis untuk menyampaikan keprihatinan atas keterlambatan itu.']
  ],
  traps: [['Dear Sir, … Yours sincerely', 'Dear Sir or Madam → Yours faithfully', 'Pasangan pembuka-penutup harus tepat.']],
  drills: [
    { t:'mcq', q:'Penutup untuk "Dear Sir or Madam":', opts:['Yours sincerely','Yours faithfully','Best','Cheers'], a:1 }
  ]
},
{
  id: 'c2-09', level: 'C2', title: 'Paraphrasing at Depth', titleId: 'Parafrase Mendalam',
  why: 'Mengganti sinonim saja tidak cukup; struktur kalimat juga harus berubah.',
  form: 'Ubah kelas kata + ubah struktur + ubah sudut pandang aktif/pasif.',
  notes: [
    '"The government banned plastic bags." → "A ban on plastic bags was introduced by the authorities."',
    'Hindari parafrase yang mengubah makna atau menambah klaim baru.',
    'Di Reading, jawaban benar hampir selalu parafrase, bukan kata yang sama.'
  ],
  ex: [
    ['Many students struggle financially.', 'A significant proportion of students face financial hardship.']
  ],
  traps: [['Mengganti kata dengan sinonim kamus yang tidak lazim.', 'Pilih sinonim yang benar-benar dipakai.', 'Kolokasi bisa rusak.']],
  drills: [
    { t:'mcq', q:'Parafrase terbaik dari "Costs rose sharply."', opts:['Costs went up sharp.','There was a steep increase in costs.','Costs raised sharply.','A sharp cost happened.'], a:1 }
  ]
},
{
  id: 'c2-10', level: 'C2', title: 'Pronunciation: Connected Speech', titleId: 'Bunyi Bersambung',
  why: 'Alasan utama listening terasa cepat: penutur asli menyambung dan menghilangkan bunyi.',
  form: 'Linking: an apple → "anapple" · Elision: next day → "nexday"\nAssimilation: ten boys → "tem boys" · Weak forms: to /tə/, of /əv/, and /ən/',
  notes: [
    '"What do you want?" terdengar "Whaddaya want?"',
    'Kata fungsi hampir selalu dilemahkan; kata isi diberi tekanan.',
    'Latihan terbaik: shadowing — ikuti audio dengan jeda setengah detik.'
  ],
  ex: [
    ['I want to go. → "I wanna go."', 'Ucapan santai.']
  ],
  traps: [['Mengucapkan setiap kata terpisah.', 'Sambungkan kata.', 'Terdengar kaku dan lebih sulit dipahami.']],
  drills: [
    { t:'mcq', q:'"Did you eat?" dalam ucapan cepat terdengar seperti', opts:['di-jyu-it','dijeat','dit yu eat','did-you-eat'], a:1 }
  ]
},
{
  id: 'c2-11', level: 'C2', title: 'Stress & Intonation for Meaning', titleId: 'Tekanan & Intonasi',
  why: 'Tekanan yang berbeda mengubah arti kalimat tanpa mengubah satu kata pun.',
  form: 'Tekanan pada kata berbeda = fokus berbeda.\nNada naik = pertanyaan/ragu · nada turun = pernyataan/pasti',
  notes: [
    '"I didn\'t say she stole it" punya tujuh arti tergantung kata mana yang ditekan.',
    'Daftar pilihan diucapkan dengan nada naik, kecuali yang terakhir turun.',
    'Nada datar terdengar tidak tertarik — hal ini dinilai di speaking.'
  ],
  ex: [
    ['I never said HE did it.', 'Saya tidak pernah bilang DIA pelakunya.']
  ],
  traps: [['Intonasi datar sepanjang jawaban.', 'Variasikan nada.', 'Penguji menilai fitur pelafalan.']],
  drills: [
    { t:'mcq', q:'Nada di akhir pertanyaan ya/tidak biasanya', opts:['turun','naik','datar','terputus'], a:1 }
  ]
},
{
  id: 'c2-12', level: 'C2', title: 'Register Shifting', titleId: 'Berpindah Ragam',
  why: 'Kemampuan berganti gaya sesuai lawan bicara adalah puncak kefasihan.',
  form: 'Sama pesan, tiga ragam: akrab → netral → formal.',
  notes: [
    '"Give me a hand" / "Could you help me?" / "I would be grateful for your assistance."',
    'Dalam satu tulisan, jaga konsistensi ragam.',
    'Campuran ragam yang tidak disengaja terdengar aneh bagi penutur asli.'
  ],
  ex: [
    ['We regret to inform you that your application was unsuccessful.', 'Dengan menyesal kami memberitahukan lamaran Anda belum berhasil.']
  ],
  traps: [['Dear Sir, thanks a bunch!', 'Dear Sir, thank you very much.', 'Jaga konsistensi ragam.']],
  drills: [
    { t:'mcq', q:'Paling formal:', opts:['Can you help?','Could you help me?','I would be grateful for your assistance.','Gimme a hand.'], a:2 }
  ]
},
{
  id: 'c2-13', level: 'C2', title: 'Academic Critique Language', titleId: 'Bahasa Kritik Ilmiah',
  why: 'Menilai sumber tanpa terdengar kasar.',
  form: 'The study overlooks … · The sample size limits generalisability\nWhile the argument is persuasive, it rests on … · This assumption is questionable',
  notes: [
    'Kritik selalu disertai alasan, bukan sekadar tidak setuju.',
    'Akui kelebihan dulu, lalu ajukan keberatan.',
    'Hindari kata emosional: "stupid", "terrible".'
  ],
  ex: [
    ['While thorough, the study overlooks regional variation.', 'Meski menyeluruh, studi itu mengabaikan variasi wilayah.']
  ],
  traps: [['This research is bad.', 'This research has notable methodological limitations.', 'Kritik harus spesifik.']],
  drills: [
    { t:'mcq', q:'Kritik paling akademik:', opts:['The study is useless.','The study\'s small sample limits its conclusions.','Bad research.','I hate this study.'], a:1 }
  ]
},
{
  id: 'c2-14', level: 'C2', title: 'Handling Abstract Topics', titleId: 'Membahas Gagasan Abstrak',
  why: 'IELTS Speaking Part 3 dan TOEFL Independent menuntut penalaran abstrak, bukan cerita pribadi.',
  form: 'Naikkan tingkat: contoh pribadi → pola umum → sebab struktural → implikasi',
  notes: [
    'Rumus jawaban: posisi + alasan + contoh + batasan.',
    'Tambahkan pembanding lintas waktu atau lintas negara.',
    'Akhiri dengan implikasi ke depan agar jawaban terdengar tuntas.'
  ],
  ex: [
    ['At a societal level, this reflects a broader shift in how work is valued.', 'Di tingkat masyarakat, ini mencerminkan pergeseran cara kerja dinilai.']
  ],
  traps: [['Jawaban hanya cerita pribadi.', 'Naikkan ke pola umum.', 'Part 3 menilai penalaran abstrak.']],
  drills: [
    { t:'mcq', q:'Jawaban Part 3 terbaik dimulai dengan', opts:['Cerita masa kecil','Posisi jelas lalu alasan','Daftar kata sulit','Pertanyaan balik'], a:1 }
  ]
},
{
  id: 'c2-15', level: 'C2', title: 'Error Fossilisation', titleId: 'Kesalahan yang Membatu',
  why: 'Kesalahan yang sudah otomatis sejak awal belajar adalah penghalang terbesar dari C1 ke C2.',
  form: 'Kenali → catat → latih sadar → periksa ulang → ganti kebiasaan',
  notes: [
    'Buat daftar 5 kesalahan pribadi dan periksa khusus itu setiap kali menulis.',
    'Rekam diri berbicara satu menit, transkripsikan, lalu tandai polanya.',
    'Kesalahan yang membatu hilang hanya lewat perhatian sadar berulang, bukan sekadar banyak latihan.'
  ],
  ex: [
    ['My recurring errors: articles, plural -s, the preposition after "depend".',
     'Kesalahan saya yang berulang: kata sandang, -s jamak, kata depan sesudah "depend".']
  ],
  traps: [['Belajar lebih banyak materi baru tapi mengulang kesalahan lama.', 'Perbaiki dulu daftar pribadimu.', 'Kuantitas tidak menyembuhkan kesalahan yang membatu.']],
  drills: [
    { t:'mcq', q:'Cara paling efektif menghapus kesalahan membatu:', opts:['Membaca lebih banyak','Perhatian sadar + koreksi berulang','Menonton film','Menghafal kata baru'], a:1 }
  ]
},
{
  id: 'c2-16', level: 'C2', title: 'Native-like Fluency Habits', titleId: 'Kebiasaan Berbahasa Fasih',
  why: 'Kefasihan bukan kecepatan, melainkan kemampuan mengalir dan memperbaiki diri secara halus.',
  form: 'Chunking · self-correction halus · pengisi jeda alami · penanda wacana',
  notes: [
    'Bicaralah dalam potongan frasa, bukan kata per kata.',
    'Perbaikan diri yang wajar justru dinilai positif: "…she went — sorry, she had gone."',
    'Pengisi jeda alami: "well", "I mean", "you know" — secukupnya.',
    'Diam sejenak lebih baik daripada "eeeee" panjang.'
  ],
  ex: [
    ['Well, I suppose the main issue — at least for me — is cost.', 'Yah, saya kira isu utamanya — setidaknya bagi saya — adalah biaya.']
  ],
  traps: [['Bicara cepat tapi terputus-putus.', 'Kecepatan sedang dengan frasa utuh.', 'Kelancaran dinilai dari alur, bukan kecepatan.']],
  drills: [
    { t:'mcq', q:'Kefasihan paling dinilai dari', opts:['kecepatan bicara','alur dan potongan frasa','jumlah kata sulit','aksen'], a:1 }
  ]
}
];
