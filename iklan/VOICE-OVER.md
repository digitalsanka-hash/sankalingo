# Tujuh Naskah Voice Over — Iklan SankaLingo GO

Tiap naskah punya **blok "Salin ini"** — teks polos, satu kalimat satu
baris, tanpa tanda apa pun. Tinggal blok itu yang disalin ke pengisi
suara atau ke ElevenLabs. Pergantian baris sudah jadi jeda alami, jadi
tidak perlu tanda jeda tambahan.

Rincian waktu, arahan visual, dan teks layar ada di bawah tiap blok —
untuk editor video, bukan untuk dibacakan.

Durasi dihitung pada tempo **2,3 kata per detik** dan diperiksa mesin
lewat `node tools/cek-vo.mjs iklan/VOICE-OVER.md`. Kalau naskah
disunting, jalankan lagi.

## Bagian demo aplikasi

Tiap naskah punya bagian **DEMO** yang panjangnya sengaja diberi ruang,
karena di situ rekaman layar aplikasi diputar. Aturannya satu: **narasi
menyebut apa yang persis sedang terlihat.** Kalau suara bilang "tekan,
lalu dengar", penonton harus melihat tombol ditekan pada detik itu juga.
Narasi yang mendahului atau tertinggal dari gambar membuat demo terasa
seperti daftar fitur, bukan bukti.

Enam bahan rekaman yang dipakai berulang di tujuh naskah:

| Kode | Yang direkam | Muncul di |
|---|---|---|
| **D1 · Suara** | Kartu kamus dibuka, tombol suara ditekan di tiap bentuk kata — dasar, sopan, lampau — dan bunyinya berbeda-beda | VO 1, 4, 7 |
| **D2 · Menulis** | Goresan beranimasi bernomor, lalu jari menelusuri di layar, lalu nilai keluar | VO 3, 5, 6, 7 |
| **D3 · Latihan** | Jawaban salah dipilih, lalu kotak penjelasan terbuka — menyebut kebiasaan bahasa Indonesia yang menyeretnya | VO 1, 4, 6 |
| **D4 · Jalur** | Peta 44 unit digulir, unit terkunci terbuka satu per satu | VO 1, 4, 6 |
| **D5 · Kartu ulang** | Layar "jatuh tempo hari ini", kartu dinilai, jadwal berikutnya muncul | VO 4, 6 |
| **D6 · Ujian** | Simulasi berjalan, penghitung waktu, nilai per bagian keluar di akhir | VO 1, 3, 5 |

Rekam keenamnya sekali dalam kualitas tinggi, lalu potong ulang untuk
tiap iklan. Tidak perlu merekam per naskah.

## Benang merah semua hook

Ketujuh hook berdiri di satu gagasan: **bahasa adalah keterampilan yang
tidak pernah kedaluwarsa.** Perangkat lunak berganti, tren berganti,
sertifikat mati dua tahun — bahasa yang sudah masuk ke kepalamu menempel
seumur hidup dan terus membuka pintu. Tiap hook menyerang gagasan itu
dari sudut berbeda, supaya tujuh iklan tidak terdengar seperti satu
iklan yang diulang.

Bentuknya selalu sama: **satu kalimat pendek yang mendarat sebelum detik
ketiga, lalu satu kalimat pembalik.** Kalimat pertama sengaja di bawah
tujuh kata — itu batas yang muat dalam tiga detik.

## Peta elemen

| Unsur | VO 1 | VO 2 | VO 3 | VO 4 | VO 5 | VO 6 | VO 7 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Durasi | 75s | 60s | 80s | 110s | 70s | 100s | 50s |
| Hook jangka panjang | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Masalah mereka | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Harapan kalau bisa | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ |
| Suara tiap bentuk kata | ✓ | — | — | ✓ | — | — | ✓ |
| **Diajarkan menulis aksara** | — | — | ✓✓ | — | ✓ | ✓ | ✓ |
| Latihan menjelaskan sebab | ✓ | — | ✓ | ✓ | ✓ | ✓ | — |
| Kartu ulang terjadwal | — | — | — | ✓ | — | ✓ | — |
| Simulasi ujian | ✓ | — | ✓ | — | ✓ | — | ✓ |
| Fleksibel | ✓ | ✓ | — | ✓ | — | ✓ | ✓ |
| Banding nongkrong | — | ✓ | — | — | — | ✓ | — |
| Sekali bayar | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

# VO 1 — "Keahlian usang"

**75 detik · sasaran: pekerja 24–35, pelamar kerja · nada: tenang, menusuk**

### Salin ini

```
Lima tahun lagi, keahlianmu bisa usang.
Bahasa yang kamu kuasai hari ini, tidak.

Masalahnya, sekarang bahasa itu juga yang menutup pintumu.
Satu baris di iklan lowongan: English proficiency required.
Sistem menyaring di menit pertama, dan lima tahun pengalamanmu tidak sempat dilihat.
Tidak ada email yang memberi tahu. Yang ada cuma sepi.

Bayangkan syarat itu berhenti jadi tembok.
Lowongan yang dulu kamu lewati, sekarang kamu buka.

Ini SankaLingo GO.
Buka satu kata, dan tiap bentuknya ada tombol suaranya sendiri.
Bentuk dasar, bentuk sopan, bentuk lampau. Tekan, dengar, tiru.
Bukan cuma kata dasarnya, seperti kamus biasa.

Salah menjawab latihan, penjelasannya terbuka.
Bukan cuma bilang salah, tapi menyebut kebiasaan bahasa Indonesia mana yang menyeretmu.
Kita tidak menandai waktu di kata kerja, jadi kita lupa memakainya.
Sekali paham sebabnya, kesalahan itu tidak terulang.

Empat puluh empat unit, tiga ratus dua puluh enam pelajaran berurutan.
Sepuluh simulasi ujian di dalamnya: IELTS, TOEFL, TOEIC, JLPT.
Semua dibuka dari HP, kapan saja. Tiga puluh menit sehari sudah cukup.

Seratus sembilan puluh sembilan ribu. Sekali bayar, bukan langganan.
sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:07 | Hook | Meja kerja, orang berhenti mengetik | `Lima tahun lagi.` |
| 0:07–0:24 | Masalah | Layar lowongan digulir, sorot baris syarat bahasa | `"English proficiency required"` |
| 0:24–0:31 | Harapan | Kursor menekan tombol Lamar | — |
| 0:31–0:45 | **DEMO D1 · Suara** | Kartu kamus, tombol suara ditekan tiga kali berturut-turut | `tiap bentuk ada suaranya` |
| 0:45–1:00 | **DEMO D3 · Latihan** | Jawaban salah dipilih, kotak penjelasan terbuka | — |
| 1:00–1:09 | **DEMO D4 + D6** | Peta unit digulir, potong ke simulasi ujian | `326 pelajaran · 10 simulasi` |
| 1:09–1:15 | CTA | Tombol | `Rp199.000 · sekali bayar` |

---

# VO 2 — "Habis semalam"

**60 detik · sasaran: retargeting, sudah pernah lihat iklan lain · nada: santai, akrab**

### Salin ini

```
Uang nongkrong habis dalam semalam.
Bahasa dibeli sekali, kepakai seumur hidup.

Sabtu kemarin habis seratus ribu buat kopi dan makan.
Besoknya tidak ada yang tersisa. Tidak apa-apa, semua orang begitu.
Tapi coba bandingkan sebentar.

Seratus sembilan puluh sembilan ribu, sekali bayar, lima bahasa.
Dua ratus sembilan puluh sembilan ribu untuk sembilan bahasa.
Itu sekitar empat puluh ribu per bahasa. Sekali seumur hidup.

Dan yang bikin angka ini masuk akal bukan murahnya.
Tapi tidak adanya lanjutan.
Tidak ada langganan bulanan yang jalan terus walaupun kamu sibuk.
Tidak ada level dua yang tiba-tiba dijual lagi.
Tidak ada bahasa yang dikunci sampai kamu bayar tambahan.

Belajar bahasa itu memang berhenti dan mulai lagi.
Ada bulan yang rajin, ada bulan yang hilang sama sekali.
Berhenti setahun, balik lagi. Akunmu masih ada, riwayat belajarmu masih ada.
Sekali bayar, dan selesai di situ.

sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:06 | Hook | Meja kafe, gelas kosong | `Habis semalam.` |
| 0:06–0:20 | Banding | Struk kafe → potong ke layar HP | — |
| 0:20–0:33 | Harga | Dua kartu harga bersebelahan | `Rp199.000 / Rp299.000` |
| 0:33–0:47 | Pembeda | Tiga baris "tidak ada" muncul satu per satu | tiga baris itu |
| 0:47–0:56 | Fleksibel | Kalender melompat setahun, aplikasi tetap terbuka | — |
| 0:56–1:00 | CTA | Tombol | `sankalingogo.com` |

---

# VO 3 — "Dua puluh tahun"

**80 detik · sasaran: dingin, umpan rasa penasaran · nada: bersemangat, tidak berlebihan**

### Salin ini

```
Satu bahasa bisa mengubah dua puluh tahun ke depan hidupmu.
Mulainya cuma satu jam.

Huruf Korea bisa kamu baca dalam satu jam. Ini bukan gimmick, ini sejarah.
Hangeul tidak tumbuh perlahan selama ribuan tahun seperti aksara lain.
Ia diciptakan abad kelima belas, dengan tujuan yang ditulis terang-terangan:
supaya rakyat biasa bisa belajar membaca dengan cepat.
Bentuk hurufnya meniru posisi mulut waktu mengucapkannya.

Tapi membaca saja belum cukup.
Aksara yang cuma dilihat akan hilang dalam seminggu.
Yang menempel itu yang pernah ditulis tanganmu sendiri.

Jadi di SankaLingo GO, kamu diajarkan menulis hurufnya.
Urutan goresannya dianimasikan, satu per satu, dengan nomor di titik mulai.
Lalu giliranmu. Kamu telusuri sendiri di layar, pakai jari.
Dan dinilai. Bukan bentuknya harus sempurna, tapi arahnya benar dan urutannya benar.
Karena dua hal itu yang paling sering salah kalau orang belajar menulis tanpa panduan.
Salah arah, ulangi. Sampai tanganmu hafal tanpa berpikir.

Hiragana. Katakana. Hangeul. Kanji. Hanzi. Huruf Kiril. Sampai huruf hijaiyah.

Setelah aksaranya duduk, pelajarannya menyambung berurutan.
Sampai simulasi TOPIK, JLPT, dan HSK — lengkap dengan ambang nilai tiap bagiannya.

Mulai seratus sembilan puluh sembilan ribu. Sekali bayar, selamanya.
sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:06 | Hook | Wajah, lalu potong keras ke ㄱ ㄴ ㄷ | `1 jam` besar |
| 0:06–0:24 | Sejarah | Huruf disambung jadi 한글, papan nama Korea terbaca | — |
| 0:24–0:32 | Jembatan | Huruf memudar hilang dari layar | `Dilihat saja, hilang.` |
| 0:32–1:00 | **DEMO D2 · Menulis** | Goresan beranimasi bernomor → jari menelusuri → nilai keluar → satu percobaan salah arah diulang | `Ditelusuri. Dinilai.` |
| 1:00–1:07 | Cakupan | Tujuh aksara berganti cepat layar penuh | nama aksara mengikuti suara |
| 1:07–1:14 | **DEMO D6 · Ujian** | Peta unit → simulasi berjalan → nilai per bagian | `TOPIK · JLPT · HSK` |
| 1:14–1:20 | CTA | Tombol | `Rp199.000 · sekali bayar` |

> Bagian menulis adalah bagian terkuat iklan ini — 28 detik, sepertiga
> durasinya. Jangan dipotong jadi lima detik. Sertakan satu percobaan
> yang salah arah lalu diulang sampai benar; itu yang membuktikan
> aplikasinya benar-benar menilai, bukan sekadar memutar animasi.

---

# VO 4 — "Tidak pernah kedaluwarsa"

**110 detik · sasaran: dingin, emosional · nada: pelan, hampir bicara empat mata**

### Salin ini

```
Bahasa itu keterampilan yang tidak pernah kedaluwarsa.
Dan setahun lagi, kamu ada di salah satu dari dua tempat.

Yang pertama: kamu sudah bisa membaca, mendengar, dan menjawab dalam bahasa yang hari ini masih terasa asing.
Belum fasih, dan tidak apa-apa. Tapi sudah berguna.
Cukup untuk melamar. Cukup untuk bepergian. Cukup untuk mengerti tanpa terjemahan.

Yang kedua: kamu persis di tempat yang sama seperti hari ini.
Mengucapkan kalimat yang sama. Nanti, kalau sudah longgar.

Bedanya bukan bakat. Bukan umur. Bukan pintar atau tidak.
Bedanya apa yang kamu lakukan bulan ini.

Ini yang akan kamu buka tiap hari.
Satu kata, dan tiap bentuknya ada tombol suaranya sendiri.
Bentuk dasar, bentuk sopan, bentuk lampau. Tekan, dengar, tiru.
Karena membaca romaji tidak pernah cukup untuk tahu bunyinya.

Salah menjawab latihan, penjelasannya terbuka.
Bukan cuma bilang salah, tapi menyebut kebiasaan bahasa Indonesia mana yang menyeretmu di titik itu.
Kesalahan yang kamu pahami sebabnya tidak terulang minggu depan.

Dan kata yang kamu buka masuk sendiri ke kartu ulangan.
Dijadwalkan kembali persis sebelum kamu lupa.
Bukan terlalu cepat, bukan terlalu lambat.
Kamu tidak perlu menebak kapan waktunya mengulang.

Empat puluh empat unit, tiga ratus dua puluh enam pelajaran yang menumpuk.
Kamu selalu tahu sedang di mana dan apa berikutnya.

Semua dibuka dari HP, kapan saja. Tiga puluh menit sehari sudah cukup.
Berhenti kapan saja, lanjut kapan saja. Akunmu tidak hilang.

Seratus sembilan puluh sembilan ribu. Sekali bayar, bukan langganan.
Dan tidak akan basi seperti keahlian yang lain.
Setahun itu akan lewat dengan atau tanpa kamu memutuskan.

sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:07 | Hook | Satu orang di meja, diam | `Tidak pernah kedaluwarsa.` |
| 0:07–0:26 | Gambaran pertama | Potongan: membaca, bepergian, wawancara | — |
| 0:26–0:36 | Gambaran kedua | Orang yang sama, meja yang sama, tidak berubah | — |
| 0:36–0:45 | Sebab | Kalender bergulir cepat | — |
| 0:45–1:00 | **DEMO D1 · Suara** | Kartu kamus, tiga tombol suara ditekan berurutan | `tiap bentuk ada suaranya` |
| 1:00–1:15 | **DEMO D3 · Latihan** | Jawaban salah, kotak penjelasan terbuka | — |
| 1:15–1:32 | **DEMO D5 · Kartu ulang** | Layar jatuh tempo, kartu dinilai, jadwal berikutnya muncul | `dijadwalkan otomatis` |
| 1:32–1:42 | **DEMO D4 · Jalur** | Peta 44 unit digulir | `326 pelajaran berurutan` |
| 1:42–1:50 | CTA | HP di tangan → tombol | `Rp199.000 sekali bayar` |

---

# VO 5 — "Sertifikat mati"

**70 detik · sasaran: pemburu beasiswa, calon mahasiswa luar negeri · nada: tegas, seperti orang yang pernah gagal**

### Salin ini

```
Sertifikat bahasa mati dua tahun.
Bahasanya tidak pernah mati.

Dan justru sertifikat itu yang menjatuhkan pelamar beasiswa, bukan nilainya.
IPK tiga koma delapan. Esai kuat. Rekomendasi lengkap.
Tersaring minggu pertama karena sertifikat bahasanya belum ada.
Pendaftaran cuma buka beberapa minggu.
Sementara dari nol ke IELTS enam setengah itu berbulan-bulan.

Urutannya harus dibalik. Bahasa duluan, selalu.
Bukan karena paling penting, tapi karena paling lama.

Di dalam SankaLingo GO ada sepuluh simulasi ujian.
IELTS, TOEFL, TOEIC, JLPT, TOPIK, HSK, Goethe, DELF, DELE, TORFL.
Format dan cara penilaiannya ditiru, termasuk ambang nilai tiap bagian.
Bagian itu yang menggagalkan banyak orang meski total nilainya sudah cukup.

Dan untuk ujian Asia, kamu diajarkan menulis aksaranya dulu.
Urutan goresannya dianimasikan, lalu kamu telusuri sendiri, lalu dinilai.
Karena JLPT dan HSK menguji karakter, dan karakter tidak bisa dihafal dari melihat saja.

Latihannya pun menjelaskan kenapa kamu salah, bukan cuma bahwa kamu salah.

Seratus sembilan puluh sembilan ribu, sekali bayar.
Ujiannya boleh diulang nanti. Kemampuannya tidak basi.
sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:06 | Hook | Sertifikat, tanggal kedaluwarsa disorot | `Berlaku 2 tahun` |
| 0:06–0:24 | Masalah | Berkas pendaftaran, kolom sertifikat kosong | — |
| 0:24–0:32 | Harapan | Urutan langkah dibalik di layar | `Bahasa duluan` |
| 0:32–0:50 | **DEMO D6 · Ujian** | Sepuluh nama ujian ditumpuk → simulasi berjalan → nilai per bagian | daftar ujian |
| 0:50–1:04 | **DEMO D2 · Menulis** | Goresan kanji beranimasi → jari menelusuri → nilai | `Ditelusuri. Dinilai.` |
| 1:04–1:10 | CTA | Tombol | `Rp199.000 · sekali bayar` |

---

# VO 6 — "Investasi paling awet"

**100 detik · sasaran: orang yang pernah berhenti di tengah jalan · nada: hangat, membela**

### Salin ini

```
Bahasa itu investasi paling awet yang bisa kamu beli.
Dan kamu berhenti bukan karena bodoh.

Nonton penjelasan sampai paham, terus blank waktu disuruh bikin kalimat.
Hafal hari ini, lupa tiga hari lagi.
Unduh lima aplikasi, buka dua hari, berhenti.
Itu bukan tanda kamu tidak berbakat. Itu tanda tidak ada urutannya.

Dan uang bukan masalahnya.
Nongkrong dua kali sabtu malam habis dua ratus ribu, besoknya tidak ada yang tersisa.
Tidak apa-apa. Tapi coba bandingkan sebentar.

Di SankaLingo GO, urutannya sudah disusun.
Empat puluh empat unit, tiga ratus dua puluh enam pelajaran yang berdiri di atas pelajaran sebelumnya.
Kamu selalu tahu sedang di mana dan apa berikutnya.
Itu yang bikin orang bertahan sampai bulan ketiga. Bukan motivasi.

Untuk bahasa beraksara lain, kamu mulai dari cara menulis hurufnya.
Urutan goresannya dianimasikan, lalu kamu telusuri sendiri dengan jari.
Dan dinilai: arahnya benar, urutannya benar. Salah, ulangi sampai tanganmu hafal.

Tujuh ratus enam puluh tujuh latihan.
Dan tiap kali kamu salah, penjelasannya terbuka.
Menyebut kebiasaan bahasa Indonesia mana yang menyeretmu di titik itu.
Itu bedanya dengan aplikasi yang cuma bilang salah lalu memberi jawaban benar.

Soal lupa tadi. Kata yang kamu buka masuk sendiri ke kartu ulangan,
dan dijadwalkan kembali persis sebelum kamu melupakannya.
Kamu tidak perlu mengingat kapan waktunya mengulang.

Tiga puluh menit sehari, dibuka dari HP.
Berhenti sebulan, balik lagi. Riwayat belajarmu masih ada.

Seratus sembilan puluh sembilan ribu. Sekali bayar, selamanya.
sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:08 | Hook | Tangan menutup buku, lalu membukanya lagi | `Bukan kamu. Caranya.` |
| 0:08–0:25 | Masalah | Tumpukan aplikasi bahasa yang tidak dibuka | — |
| 0:25–0:36 | Banding | Struk kafe → potong ke aplikasi | — |
| 0:36–0:52 | **DEMO D4 · Jalur** | Peta 44 unit digulir, unit terbuka satu per satu | `326 pelajaran berurutan` |
| 0:52–1:08 | **DEMO D2 · Menulis** | Goresan beranimasi → jari menelusuri → salah → diulang → benar | `Ditelusuri. Dinilai.` |
| 1:08–1:26 | **DEMO D3 · Latihan** | Jawaban salah, kotak penjelasan terbuka | `767 latihan` |
| 1:26–1:36 | **DEMO D5 · Kartu ulang** | Layar jatuh tempo, jadwal berikutnya muncul | `dijadwalkan otomatis` |
| 1:36–1:40 | CTA | Kalender melompat, aplikasi tetap terbuka → tombol | `Rp199.000 sekali bayar` |

---

# VO 7 — "Yang tetap"

**50 detik · sasaran: retargeting panas, sudah buka halaman jualan · nada: cepat, percaya diri**

### Salin ini

```
Software berganti. Tren berganti.
Bahasa yang kamu kuasai, tetap.

Sembilan bahasa. Satu kali bayar. Tidak ada yang dikunci.
Inggris, Jepang, Korea, Mandarin, Arab, Jerman, Prancis, Spanyol, Rusia.

Sembilan ribu lima puluh dua entri kamus,
dan tiap bentuk kata punya tombol suaranya sendiri. Tekan, dengar, tiru.

Cara menulis hurufnya juga diajarkan.
Goresannya dianimasikan, kamu telusuri sendiri dengan jari, lalu dinilai.

Tiga ratus dua puluh enam pelajaran berurutan.
Sepuluh simulasi ujian resmi, lengkap dengan ambang nilai tiap bagiannya.
Semua dibuka dari HP, tanpa unduh dari toko aplikasi. Tidak ada langganan.

Mulai dari satu bahasa yang kamu butuhkan sekarang.
Yang delapan lagi menunggu, dan tidak perlu beli apa-apa lagi.

Dua ratus sembilan puluh sembilan ribu untuk sembilannya.
sankalingogo.com
```

### Rincian waktu

| Waktu | Bagian | Visual | Teks layar |
|---|---|---|---|
| 0:00–0:05 | Hook | Ikon aplikasi lama berjatuhan | `Yang tetap.` |
| 0:05–0:13 | Daftar bahasa | Sembilan aksara berganti cepat layar penuh | nama bahasa mengikuti suara |
| 0:13–0:24 | **DEMO D1 · Suara** | Kartu kamus, tombol suara ditekan tiga kali | `9.052 entri` |
| 0:24–0:33 | **DEMO D2 · Menulis** | Goresan → jari menelusuri → nilai | `Ditelusuri. Dinilai.` |
| 0:33–0:44 | Isi lain | Peta unit → simulasi ujian | `326 pelajaran · 10 simulasi` |
| 0:44–0:50 | CTA | Tombol | `9 bahasa · Rp299.000 · sekali bayar` |

---

## Catatan rekaman

- **Hook jangan diburu.** Kalimat pertama tiap naskah sengaja di bawah
  tujuh kata supaya mendarat sebelum detik ketiga — lalu beri jeda satu
  ketukan sebelum kalimat pembaliknya. Jeda itu yang membuatnya bekerja.
- **Bagian DEMO turunkan tempo sedikit.** Di situ mata penonton sibuk
  membaca layar. Narasi yang tetap cepat membuat keduanya bertabrakan.
  Tempo hitungan durasi sudah memperhitungkan ini secara rata-rata,
  tetapi pengisi suara sebaiknya melambat sedikit dan menebusnya di
  bagian masalah.
- **Narasi harus sinkron dengan layar.** Kalau suara bilang "tekan, lalu
  dengar", tombol harus ditekan pada detik itu juga. Ini yang
  membedakan demo dari daftar fitur.
- **Angka dieja penuh** di naskah ("seratus sembilan puluh sembilan
  ribu") karena pengisi suara membaca "199rb" dengan tempo
  berbeda-beda. Yang di layar tetap ditulis `Rp199.000`.
- **Sebagian besar orang menonton tanpa suara.** Takarir wajib, dan
  kalimat hook harus muncul sebagai teks sejak detik nol.
- **Jangan menambah klaim** di luar naskah ini. Tidak ada jumlah
  pengguna, tidak ada testimoni, tidak ada janji "pasti fasih dalam
  sebulan". Semua yang disebut di sini ada di dalam aplikasi dan bisa
  direkam layarnya — termasuk penilaian goresan dan penjadwalan kartu.
- **Kalau harga naik**, ketujuh naskah disunting berbarengan.
- **Sesudah menyunting**, jalankan `node tools/cek-vo.mjs
  iklan/VOICE-OVER.md` supaya durasinya tidak melenceng diam-diam.

## Versi pendek

Butuh potongan 15 atau 30 detik untuk uji dingin? Jangan menulis naskah
baru — potong dari yang sudah ada. Ambil hook dan CTA-nya utuh, lalu
sisipkan **satu** bagian DEMO di antaranya. Yang paling kuat berdiri
sendiri: D2 (menulis) dari VO 3, dan D3 (latihan menjelaskan sebab) dari
VO 6.

## Urutan uji yang disarankan

Jalankan tiga dulu dengan anggaran sama: **VO 1** (karier), **VO 4**
(emosional), **VO 2** (harga). Ketiganya menyerang sudut berbeda, jadi
hasilnya memberi tahu sudut mana yang laku — bukan sekadar naskah mana
yang lebih enak didengar. Baru setelah itu perbanyak yang menang, dan
uji **VO 3** sebagai penantang: demo menulisnya adalah satu-satunya
bagian yang tidak bisa ditiru pesaing lewat tangkapan layar.
