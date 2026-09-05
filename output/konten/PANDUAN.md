# Konten 30 Hari — SankaLingo GO

120 konten (30 hari x 4 slot), 262 gambar 1080x1350.
Tiap hari punya folder sendiri: buka `hari-NN/`, baca `caption.md`, unggah.

## Struktur harian

| Slot | Isi | Tujuan |
|---|---|---|
| 1 | Gambar tunggal | Edukasi cepat — satu aturan, satu daftar |
| 2 | **Carousel** (5-7 slide) | Bahan utama hari itu, paling banyak disimpan |
| 3 | Gambar tunggal | Koreksi kesalahan atau konten relatable |
| 4 | Gambar tunggal | Jualan |

Tiap hari minimal satu carousel. Semua caption dan tagar sudah lengkap di `caption.md`.

## Alur lima pekan

| Pekan | Hari | Tema | Kenapa urutannya begini |
|---|---|---|---|
| 1 | 1-7 | Aksara dan langkah pertama | Hangeul, hiragana, Kiril, Arab. Yang terlihat mustahil ternyata paling cepat — ini yang paling menarik orang baru |
| 2 | 8-14 | Jebakan tata bahasa | Kebiasaan bahasa Indonesia yang menyeret di bahasa mana pun. Membangun kepercayaan: kita tahu masalah aslinya |
| 3 | 15-21 | Kosakata terpakai dan ujian | Email kerja, kalimat turis, strategi IELTS/JLPT/TOPIK/HSK. Mulai menyentuh alasan orang benar-benar belajar |
| 4 | 22-28 | Bahasa dan uang | Lowongan, kerja jarak jauh, CV, jalur per negara. Ini pekan yang paling menggerakkan pembelian |
| 5 | 29-30 | Penutup | Rangkuman penuh dan penawaran. Termasuk satu konten "ini bukan untuk semua orang" |

## Waktu unggah yang disarankan

- Slot 1 — pagi (07.00-08.00)
- Slot 2 (carousel) — siang (11.30-12.30)
- Slot 3 — sore (16.00-17.00)
- Slot 4 (jualan) — malam (19.30-21.00)

Kalau cuma sanggup dua per hari: pakai slot 2 (carousel) dan slot 4 (jualan).

## Catatan

- Perbandingan harga memakai angka sendiri, bukan mengarang harga pesaing.
- Tidak ada testimoni palsu dan tidak ada jumlah pengguna yang dikarang.
- Klaim isi aplikasi (9.052 entri, 326 pelajaran, 767 latihan, 10 simulasi ujian) memakai angka nyata.
- Simulasi ujian ditulis sendiri; yang ditiru formatnya, bukan soal aslinya. Ini disebut terang-terangan di hari 30.

## Membuat ulang

```
node konten/buat.mjs        # semua pekan
node konten/buat.mjs 3      # pekan tertentu
```

Sumbernya di `konten/pekan1.mjs` sampai `pekan5.mjs`, tampilannya di `konten/template.mjs`.
