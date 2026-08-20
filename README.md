# SankaLingo GO

Laboratorium bahasa untuk penutur Indonesia. Sembilan bahasa, tanpa
proses build, jalan penuh tanpa internet.

**Yang membedakan:** hampir semua bahan belajar bahasa menjelaskan
aturan bahasa asingnya. Aplikasi ini menjelaskan **kenapa penutur
Indonesia keliru** di titik itu — karena bahasa kita tidak punya kala,
tidak punya jenis kelamin kata benda, tidak mengubah bentuk kata
kerjanya, dan tidak membedakan tuntas dari tidak tuntas.

---

## Isi

### Bahasa Inggris

| | |
|---|---|
| Kurikulum CEFR | A1–C2 · 44 unit · 326 pelajaran |
| Tata bahasa | 162 topik · 767 latihan · 302 jebakan khas penutur Indonesia |
| Sistem kala | petak 12 tenses utuh (3 waktu × 4 rupa) + pasif + pengenal bentuk |
| Kosakata | 1.364 kata, semuanya dengan IPA dan kalimat contoh |
| Ujian | IELTS · TOEFL · TOEIC — strategi, bank soal, simulasi, konversi skor |

### Delapan bahasa lain

Arab · Jerman · Spanyol · Prancis · Jepang · Korea · Rusia · Mandarin

| | |
|---|---|
| Kosakata | 3.754 kata, semuanya dengan pengucapan dan kalimat contoh |
| Sistem kata kerja | tiap bahasa punya halamannya sendiri |
| Aksara | pelatih Hangul, Kana, Hanzi, Hijaiyah, Kiril |
| Kartu hafalan | SRS SM-2, lintas bahasa |

Halaman **sistem kata kerja** memuat hal yang jarang dikatakan terus
terang: Mandarin **tidak punya kala sama sekali**, Jepang **tidak punya
kala masa depan**, dan Rusia lebih peduli apakah suatu peristiwa
**tuntas** daripada kapan ia terjadi.

---

## Menjalankan

```bash
node server.js
```

Buka `http://localhost:4321`. Tidak ada `npm install`, tidak ada proses
build — berkasnya disajikan apa adanya.

## Menyebarkan

Situs statis; bisa ditaruh di hosting statis mana pun. Panduan
lengkapnya ada di [`DEPLOY.md`](DEPLOY.md) dan
[`output/SankaLingo-GO-Panduan-Deploy.pdf`](output/SankaLingo-GO-Panduan-Deploy.pdf).

Supabase **opsional** — aplikasi jalan penuh tanpanya. Ia hanya dipakai
untuk memindahkan kemajuan belajar antar perangkat.

---

## Perkakas pemeriksa

Materinya dijaga mesin, bukan pembacaan ulang. Tiap alat ditulis
**sebelum** bahan yang diperiksanya.

```bash
node tools/validasi-grammar.mjs   # 162 topik: kunci jawaban, jebakan, kelompok tema
node tools/validasi-kata.mjs      # kosakata: tiap kata punya contoh, contoh memuat katanya
node tools/validasi-verba.mjs     # sistem kala & kata kerja 9 bahasa
node tools/validasi-pakai.mjs     # 2.643 contoh pemakaian
node tools/audit-kontras.mjs      # kontras warna WCAG AA, kedua tema
node tools/audit-luring.mjs       # kelengkapan kerangka luring
```

Pemeriksa kosakata harus memahami tata bahasa sungguhan, karena
pencocokan lugu justru menolak kalimat yang paling benar:

- kata kerja terpisah Jerman — `abfahren` muncul sebagai "**fährt** … **ab**"
- jamak berumlaut — `Hand` → `Hände`
- konjugasi Korea lewat aritmetika suku Hangul — `아프다` → `아파요`
- harakat Arab yang berubah mengikuti kasus, dan kata sandang `ال`
- **jamak taksir** Arab lewat pencocokan akar tiga konsonan — `قَدَم` → `أَقْدَام`

Pengucapan untuk Korea, Arab, dan Rusia **dihitung mesin** dari
aksaranya (`node tools/validasi-kata.mjs --isi`), sehingga ejaannya
tidak pernah menyimpang dari yang dipakai mesin suara.

---

## Bentuk

Modul ES tanpa kerangka kerja, tanpa alat bangun. Perutean lewat hash
(`#/<kode-bahasa>/<bagian>`). Kemajuan belajar di `localStorage`.
Pekerja layanan menyimpan seluruh kerangka aplikasi, jadi aplikasinya
tetap terbuka penuh tanpa jaringan.

```
data/          materi (per bahasa di data/lang/)
js/            aplikasi; js/views/ satu berkas per halaman
assets/css/    token → dasar → komponen → tampilan
tools/         pemeriksa mutu materi
supabase/      skema penyelarasan (opsional)
```
