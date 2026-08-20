# Kenapa `vercel.json` seperti itu

JSON tidak punya komentar, dan Vercel **menolak** berkas yang memuat
properti di luar skemanya — termasuk `"comment"`. Berkas ini menampung
penjelasan yang dulu (keliru) ditaruh di dalam `vercel.json` sendiri.

> Kalau `vercel.json` memuat properti asing, deploy gagal dengan
> `Invalid vercel.json - should NOT have additional property`. Pesannya
> jelas, tapi baru muncul saat deploy — bukan saat berkasnya ditulis.

## Aturan cache

Aplikasi ini punya pekerja layanan (`sw.js`) yang menyimpan seluruh
kerangkanya. Dua lapis penyimpanan yang saling menimpa itulah yang
membuat aturan di bawah perlu dipikirkan, bukan disalin begitu saja.

| Berkas | Aturan | Alasan |
|---|---|---|
| `index.html`, `sw.js`, `manifest.webmanifest` | selalu periksa ulang | Kerangka aplikasi **wajib** bisa berubah kapan saja. Kalau ikut disimpan lama, pengguna terjebak di versi lama dan tidak ada cara memperbaikinya dari jauh — termasuk memperbaiki pekerja layanan yang rusak. |
| `js/`, `data/`, `assets/css/` | selalu periksa ulang | Kode dan materi. Pekerja layanan sudah punya cadangan luringnya sendiri, jadi memeriksa ulang **tidak** mengurangi kemampuan luring — ia hanya memastikan pengguna daring selalu dapat yang terbaru. |
| `assets/merek/`, `assets/icon*` | simpan 7 hari | Lambang dan ikon jarang berubah dan namanya stabil. |

Pola "selalu periksa ulang" bukan berarti selalu mengunduh ulang:
peramban mengirim permintaan bersyarat dan server menjawab `304 Not
Modified` bila isinya sama. Yang dihemat tetap besar; yang dicegah
adalah terjebak versi lama.

## Header keamanan

Dipasang untuk semua jalur:

- `X-Content-Type-Options: nosniff` — peramban tidak boleh menebak tipe berkas
- `X-Frame-Options: DENY` — halaman tidak bisa disematkan di situs lain
- `Referrer-Policy: strict-origin-when-cross-origin` — alamat halaman tidak bocor ke situs lain
- `Permissions-Policy` — kamera, lokasi, pembayaran, dan USB dimatikan

Mikrofon **tidak** dimatikan: latihan berbicara memakainya lewat
Web Speech API.

## Kenapa `framework: null` dan `buildCommand: null`

Situs ini statis murni — tidak ada proses build. Kalau Vercel dibiarkan
menebak, ia bisa mengenali `package.json` sebagai proyek Node lalu
mencoba menjalankan `server.js`. Karena itu `package.json` juga tidak
ikut diunggah (lihat `.vercelignore`), sehingga tidak ada yang bisa
ditebak sama sekali.
