# Panduan Penulisan Set Simulasi TOEFL ITP

Berkas ini adalah kontrak untuk siapa pun (manusia atau agen) yang menulis
satu set simulasi. Ikuti persis. Set yang tidak lolos
`node tools/cek-itp.mjs data/itp/itp-NN.js` tidak diterima.

## Yang ditiru dan yang tidak

**Ditiru 100%:** blueprint ITP Level 1 (jumlah butir, urutan bagian, jenis
soal, pola distraktor, kurva kesulitan). **Tidak ditiru:** soal asli ETS —
itu berhak cipta. Semua kalimat, dialog, ceramah, dan bacaan harus **karangan
sendiri**. Jangan menyadur buku persiapan (Longman, Barron's, Cambridge).

## Blueprint per set (140 butir)

| Bagian | Butir | Waktu | Isi |
|---|---|---|---|
| Section 1 · Listening Comprehension | 50 | 35 mnt | Part A 30 dialog pendek · Part B 2 percakapan panjang × 4 soal · Part C 3 ceramah × 4 soal |
| Section 2 · Structure and Written Expression | 40 | 25 mnt | Structure 15 kalimat rumpang · Written Expression 25 identifikasi kesalahan |
| Section 3 · Reading Comprehension | 50 | 55 mnt | 5 bacaan × 10 soal |

## Skema berkas

Nama berkas `data/itp/itp-NN.js`, ekspor `ITP_NN` (dua digit). Semua teks
soal, pilihan, dialog, dan bacaan dalam **bahasa Inggris**. Kolom `why`
dalam **bahasa Indonesia** — itu penjelasan yang dibaca pemelajar Indonesia
di layar analisis, dan harus menyebut *kenapa* jawaban lain salah bila
relevan.

```js
export const ITP_07 = {
  id: 'itp-07',
  judul: 'Set 7',

  listening: {
    partA: [
      { lines: ['M: I thought the chemistry lab was supposed to end at four.',
                'W: It was, but the instructor let us go early for once.',
                'N: What does the woman mean?'],
        q: 'What does the woman mean?',
        opts: ['The lab finished before four o\'clock.',
               'The instructor arrived late.',
               'The lab was cancelled.',
               'The lab lasted longer than usual.'],
        a: 0,
        why: '"Let us go early" = membolehkan pulang lebih awal. Pilihan D justru kebalikannya; B dan C tidak disebut.' },
      // … 30 butir
    ],
    partB: [
      { title: 'Conversation 1 — A student and a professor',
        lines: ['M: …', 'W: …', /* 8–16 baris */],
        questions: [ { q, opts, a, why }, /* × 4 */ ] },
      // 2 percakapan
    ],
    partC: [
      { title: 'Talk 1 — A lecture in a geology class',
        lines: ['N: Listen to part of a lecture in a geology class.', 'W: …', /* 6–14 baris */],
        questions: [ /* × 4 */ ] },
      // 3 ceramah
    ],
  },

  structure: [
    { q: 'Not until the late nineteenth century ___ widely available in American homes.',
      opts: ['electric lighting became', 'did electric lighting become',
             'electric lighting did become', 'when electric lighting became'],
      a: 1,
      why: 'Kalimat diawali negatif "Not until…" → subjek dan kata kerja bantu dibalik (inversi): did + subject + verb.' },
    // 15 butir
  ],

  written: [
    { q: 'The {{committee}} have decided that the proposal {{should be}} reviewed {{before}} it is {{submitted}}.',
      a: 0,
      fix: 'committee has',
      why: '"The committee" di sini bertindak sebagai satu badan → kata kerja tunggal: has decided.' },
    // 25 butir — TANPA opts; pilihannya diturunkan dari empat segmen {{…}}
  ],

  reading: [
    { title: 'The Dust Bowl',
      text: `Paragraf satu …

Paragraf dua …

Paragraf tiga …`,
      questions: [ { q, opts, a, why }, /* × 10 */ ] },
    // 5 bacaan
  ],
};
```

Aturan skema yang diperiksa mesin:

- Baris dialog diawali `M: ` (pria), `W: ` (wanita), atau `N: ` (narator).
- Part A: 3–5 baris; baris terakhir **selalu narator** yang membacakan
  pertanyaan, diakhiri `?`. Kolom `q` = kalimat pertanyaan yang sama.
- Part B: 8–16 baris, 120–230 kata. Part C: 6–14 baris, 120–220 kata, baris
  pertama narator pengantar ("Listen to part of a talk…").
- Structure: tepat satu rumpang `___`.
- Written Expression: tepat empat segmen `{{…}}`, `a` = indeks segmen
  yang salah (0–3), `fix` = bentuk benarnya. **Jangan tulis `opts`.**
- Reading: 250–380 kata, 3–6 paragraf dipisah baris kosong, 10 soal.
- Semua pilihan ganda: **4 pilihan berbeda**, `a` indeks 0–3.
- Sebaran kunci per bagian: tiap huruf 15–35%, tidak ada kunci sama
  lebih dari 3 kali berturut-turut. **Acak kuncinya sendiri saat menulis** —
  jangan menaruh jawaban benar selalu di A.
- Tidak ada teks soal kembar di dalam set.

## Kalibrasi kesulitan — ini bagian yang paling penting

ITP Level 1 dirancang untuk rentang skor 310–677, dengan sebagian besar
peserta 450–570. Artinya set harus punya **kurva**: butir awal tiap bagian
bisa dijawab peserta B1, butir akhir menuntut C1. Tanpa kurva, skornya
tidak berarti.

### Part A (dialog pendek) — 30 butir, dari mudah ke sulit

Tiap butir dua kalimat (kadang tiga), lalu narator bertanya. Pertanyaan
yang lazim: *What does the woman mean? · What will the man probably do? ·
What does the man suggest? · What does the woman imply? · What had the man
assumed? · Where does this conversation probably take place?*

Sebaran wajib per set (kira-kira):

| Butir | Yang diuji | Contoh mekanisme |
|---|---|---|
| 1–8 | Makna langsung, sinonim, pengulangan detail | Distraktor: kata yang **bunyinya mirip** (*sail/sale, week/weak*) |
| 9–18 | Idiom & ungkapan | *give it a shot, on the fence, hit the books, not my cup of tea, out of the question* — distraktor menafsirkan **harfiah** |
| 19–24 | Implikasi, nada, maksud tersirat | Jawaban tidak diucapkan; harus disimpulkan dari nada (setuju/ragu/kaget) |
| 25–30 | Struktur tersirat: pengandaian, penyesalan, perbandingan, past intention | *"I would have come if…", "I meant to…", "Not as hard as I'd expected"* — distraktor membalik makna |

Jangan menulis pertanyaan yang jawabannya terdengar utuh di dialog. Distraktor
terbaik memakai kata yang **memang terdengar** di dialog tapi dengan makna
yang salah.

### Part B (2 percakapan panjang × 4 soal)

Konteks kampus: mahasiswa–dosen soal tugas/riset, mahasiswa–staf (registrar,
perpustakaan, asrama, karier), dua mahasiswa merencanakan sesuatu. Empat soal:
1 gagasan utama/tujuan, 2 detail, 1 inferensi/langkah berikutnya.

### Part C (3 ceramah × 4 soal)

Satu **kuliah akademik** (sains/sejarah/seni), satu **pengumuman/tur kampus**,
satu **ceramah atau siaran** (museum, radio kampus, orientasi). Baris
pertama narator: *"Listen to part of a lecture in a biology class."* Empat
soal: 1 topik utama, 2 detail, 1 inferensi/organisasi ("Why does the speaker
mention…").

### Structure (15) — daftar butir tata bahasa ETS

Tiap set memakai **minimal 12 dari 15 titik ini**, masing-masing paling
banyak dua kali:

1. Subjek + kata kerja yang hilang (kalimat tanpa verba utama)
2. Inversi sesudah negatif/pembatas di awal (*Not until, Rarely, Only after, Seldom*)
3. Appositive dan reduced relative clause (*Jupiter, the largest planet, …*)
4. Klausa relatif (*which / whose / in which / of which*)
5. Participial phrase pembuka (*Having finished…, Located in…*)
6. Paralelisme dalam daftar dan korelatif (*not only… but also, both… and*)
7. Perbandingan & superlatif (*the more…, the more…; as… as; than*)
8. Subjunctive sesudah *suggest / recommend / essential that*
9. Klausa pengandaian dan inversi (*Had it not been for…, Were it…*)
10. Kata benda tak terhitung & kuantor (*much / a great deal of / a number of*)
11. Gerund vs infinitif sesudah kata kerja/preposisi tertentu
12. Kalimat pasif dan bentuk *it is … that* (cleft)
13. Konjungsi & preposisi (*despite / although / because of / whereas*)
14. Klausa nomina sebagai subjek (*That the earth is round …, What matters …*)
15. Urutan kata sifat & pewatas (*such a…, so… that, too… to*)

Distraktor Structure yang khas ETS: (a) kalimat jadi punya dua verba, (b)
kalimat tanpa subjek, (c) urutan kata terbalik, (d) bentuk kata benar tapi
fungsinya salah (*because* vs *because of*).

### Written Expression (25) — kesalahan yang harus tersebar

Tiap set memuat **minimal 14 dari 18 jenis ini**, masing-masing maksimal 3 kali:

subject–verb agreement · bentuk kata (noun/adjective/adverb salah) ·
paralelisme rusak · pronoun agreement/reference · artikel (*a/an/the*
hilang/salah) · preposisi salah · tense/aspect · comparative/superlative
(*more better*) · singular/plural (*one of the reason*) · redundansi
(*repeat again*) · urutan kata (*enough big*) · kata kerja sesudah modal
(*can went*) · *make/do*, *raise/rise*, *lie/lay* · relative pronoun salah
(*which* untuk orang) · gerund/infinitif · kata penghubung (*although… but*)
· double negative · possessive (*it's/its*).

Butir 1–8 kesalahan yang jelas, 9–18 menengah, 19–25 halus (misalnya
*"the number of… are"*, *"neither… or"*, *"differ than"*).

### Reading (5 bacaan × 10 soal) — dari mudah ke sulit

Topik gaya ETS: sejarah Amerika, sains alam (biologi, geologi, astronomi,
ekologi), seni dan arsitektur Amerika, ilmu sosial, teknologi. Nada
ensiklopedis-akademik, kalimat 18–30 kata, kosakata akademik (*prevalent,
subsequent, attribute, comprise, notwithstanding*). Bacaan 1 termudah
(kalimat lebih pendek, kosakata umum), bacaan 5 tersulit (argumen berlapis,
kosakata jarang).

Sepuluh soal per bacaan mengikuti kuota ini:

| Jenis | Jumlah | Bentuk pertanyaan |
|---|---|---|
| Main idea / purpose | 1 | *What does the passage mainly discuss? · The author's main purpose is to…* |
| Detail | 3 | *According to the passage, … · Which of the following is mentioned as…* |
| NOT / EXCEPT | 1 | *All of the following are mentioned EXCEPT…* |
| Vocabulary in context | 2 | *The word "X" in line/paragraph N is closest in meaning to…* — kutip katanya persis, dan kata itu HARUS ada di teks |
| Reference | 1 | *The word "it/they/this" in paragraph N refers to…* |
| Inference | 1 | *It can be inferred from the passage that… · The author implies…* |
| Organization / where | 1 | *Why does the author mention X? · The paragraph following this one most probably discusses…* |

Pilihan vocabulary harus empat kata yang **semuanya masuk akal secara
gramatikal** di kalimat itu; yang benar sinonim, yang lain makna berdekatan
tapi salah. Pilihan detail harus memakai kata dari teks — jangan mengarang
pilihan yang jelas-jelas tidak dibahas.

## Yang dilarang keras

- Menyalin kalimat dari soal ETS, buku persiapan, atau Wikipedia.
- Pertanyaan yang jawabannya bisa ditebak tanpa mendengar/membaca.
- Pilihan "all of the above" / "none of the above" — tidak ada di ITP.
- Nama orang, merek, atau tempat yang sensitif; humor; opini politik.
- Kalimat yang benar secara tata bahasa di butir Written Expression
  (harus ada tepat satu kesalahan, dan hanya di salah satu segmen).
- Kunci yang tidak seimbang. Sebelum selesai, hitung sendiri.

## Sebelum menyerahkan

```
node tools/cek-itp.mjs data/itp/itp-NN.js
```

harus mencetak `OK — 140 butir`. Kalau ada cacat, perbaiki sampai bersih.
Baru kemudian baca ulang **lima butir acak dari tiap bagian** dan tanya:
apakah peserta yang cermat bisa menjawab ini tanpa menebak? Kalau tidak,
soalnya ambigu — perbaiki.
