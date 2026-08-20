# SankaLingo GO — English Lab

Platform belajar bahasa Inggris untuk penutur bahasa Indonesia. Berjalan sepenuhnya di
peramban: tanpa server aplikasi, tanpa akun, tanpa basis data. Seluruh kemajuan belajar
disimpan di `localStorage`.

## Menjalankan

```bash
node server.js
```

Buka `http://localhost:4321`. Tidak ada dependensi yang perlu dipasang — `npm start`
hanya memanggil server statis bawaan Node.

Peramban yang disarankan: **Chrome atau Edge**. Modul berbicara memakai Web Speech API
(pengenalan ucapan) yang belum tersedia di Firefox/Safari; sisa aplikasi tetap berjalan.

## Isi

| Bagian | Jumlah |
|---|---|
| Entri kosakata (kata, frasa kerja, idiom, kolokasi) | ±1.360 |
| Topik tata bahasa A1–C2 | 120 |
| Butir latihan tata bahasa | 341 |
| Unit kurikulum | 44 |
| Pelajaran | ±290 |
| Bacaan bertingkat + bergaya ujian | 9 |
| Butir dikte & simakan | ±55 |
| Soal ujian (IELTS/TOEFL/TOEIC) | ±170 |
| Trik & metode belajar | 62 |
| Rencana harian | 6 (30/60/90 hari + sprint IELTS/TOEFL/TOEIC) |

## Modul

- **Kurikulum CEFR A1→C2** — 6 level, 44 unit. Tiap unit: pelajaran tata bahasa,
  paket kosakata, latihan keterampilan, dan ujian unit.
- **Tata bahasa** — tiap topik menjelaskan *mengapa penutur Indonesia keliru di titik itu*,
  lalu rumus, catatan, contoh, jebakan khas, dan latihan.
- **Kosakata + SRS** — kartu hafalan dengan algoritma SM-2 termodifikasi; jatuh tempo
  dihitung per hari agar sesi harian terasa jelas.
- **Menyimak** — dikte bertingkat, simakan panjang, dan latihan khusus angka & ejaan
  (13 vs 30) yang menjadi penyebab kehilangan nilai terbesar.
- **Berbicara** — shadowing, kartu IELTS Part 2 dengan pewaktu 1+2 menit, dan penilaian
  pengucapan otomatis lewat pengenalan ucapan.
- **Membaca** — bacaan A1–C1 plus teks bergaya IELTS/TOEFL/TOEIC, dengan penghitung
  kecepatan baca (kata/menit).
- **Menulis** — tugas berpewaktu, jawaban model, dan pemeriksa heuristik yang menandai
  kesalahan khas penutur Indonesia (comma splice, "despite of", "informations", dsb.).
- **Pelafalan** — bagan IPA, delapan kelompok bunyi tersulit bagi penutur Indonesia,
  pasangan minimal, aturan tekanan kata, dan bunyi bersambung.
- **Ujian** — peta format, strategi per bagian, deskriptor band, tabel konversi skor,
  bank soal, dan simulasi berpewaktu dengan analisis kesalahan.
- **Rencana & penempatan** — tes penempatan 30 soal → level CEFR, lalu rencana harian
  berisi daftar centang.

## Struktur berkas

```
index.html            kerangka halaman
assets/css/           tokens → base → components → views
js/
  app.js              router hash, navigasi, palet pencarian, tema
  state.js            localStorage, XP, rentetan, kemajuan
  srs.js              algoritma pengulangan berjarak
  speech.js           TTS + pengenalan ucapan + penilaian
  quiz.js             mesin latihan (mcq/fill/order/trans/dictate/speak)
  ui.js               perkakas DOM, toast, modal, grafik SVG
  data.js             agregator seluruh data + indeks pencarian
  views/              satu berkas per kelompok layar
data/                 seluruh materi (kosakata, grammar, kurikulum, ujian, dll.)
server.js             server statis tanpa dependensi
```

## Pintasan papan tik

| Tombol | Fungsi |
|---|---|
| `/` atau `Ctrl+K` | palet pencarian |
| `g` lalu `h c g v r e p s` | pindah halaman |
| `Spasi` | balik kartu hafalan |
| `1`–`4` | nilai kartu (Lupa/Sulit/Bagus/Mudah) |
| `A`–`D` | jawab pilihan ganda |

## Catatan teknis

- Tanpa proses build. Seluruh berkas adalah ES module yang dimuat langsung peramban.
- Data materi disimpan sebagai tuple ringkas lalu dipetakan ke objek di `js/data.js`,
  agar berkas tetap kecil dan mudah ditambah.
- Skor simulasi ujian adalah **perkiraan**, bukan skor resmi. Deskriptor band dan tabel
  konversi disertakan sebagai rujukan belajar.
- Pemeriksa tulisan bersifat heuristik (pencocokan pola), bukan penilai IELTS.
