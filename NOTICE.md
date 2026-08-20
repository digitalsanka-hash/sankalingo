# Atribusi & lisensi pihak ketiga

SankaLingo GO memakai beberapa karya pihak ketiga. Berkas ini mendaftarkannya beserta
kewajiban yang menyertainya. **Wajib ikut disertakan** kalau aplikasi ini
didistribusikan atau dijual.

---

## Data urutan goresan kana & aksara Han

- **Sumber:** proyek [KanjiVG](http://kanjivg.tagaini.net) oleh Ulrich Apel dkk.
- **Lisensi:** Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0)
- **Dipakai di:** `data/lang/strokes-kana.js` (92 kana),
  `data/lang/strokes-hanzi.js` (34 aksara Han)
- **Perubahan:** jalur SVG diambil dari berkas asli, diformat ulang menjadi
  larik JavaScript, dan diberi keterangan bantu ingat dalam bahasa Indonesia.
  Koordinat tetap memakai kotak 109 × 109 seperti aslinya.

**Kewajiban ShareAlike.** Kedua berkas di atas beserta seluruh perubahannya
tetap berlisensi **CC BY-SA 3.0**, dan siapa pun berhak menerimanya di bawah
lisensi yang sama. Kewajiban ini melekat pada berkas data goresannya — bukan
pada seluruh aplikasi, selama aplikasi hanya menghimpunnya (*Collection*) dan
bukan menjadikannya karya turunan menyeluruh.

Teks atribusi yang harus tampil kepada pengguna:

> Data urutan goresan berasal dari KanjiVG (Ulrich Apel dkk.), berlisensi
> CC BY-SA 3.0. Data telah diubah bentuk penyimpanannya.
> http://kanjivg.tagaini.net · https://creativecommons.org/licenses/by-sa/3.0/

---

## Catatan: satu aksara dibuang

Aksara 你 sebelumnya memakai data dari **hanzi-writer-data**. Repo itu
berlisensi MIT untuk KODEnya, tetapi DATA goresannya diturunkan dari
*Make Me a Hanzi*, yang tunduk pada **Arphic Public License** — lisensi
copyleft dengan kewajiban tersendiri.

Satu aksara tidak sepadan dengan kewajiban lisensi tambahan, jadi data
goresannya dihapus. Aksara 你 tetap diajarkan sebagai kosakata; hanya
animasi urutan goresannya yang tidak tersedia.

Seluruh jalur goresan yang tersisa berasal dari satu sumber saja: KanjiVG.

## Huruf

| Huruf | Lisensi |
|---|---|
| Plus Jakarta Sans | SIL Open Font License 1.1 |
| Fraunces | SIL Open Font License 1.1 |
| JetBrains Mono | SIL Open Font License 1.1 |

OFL 1.1 mengizinkan pemakaian komersial, termasuk menyertakan huruf di dalam
aplikasi. Yang dilarang: menjual hurufnya sendiri secara terpisah. Kalau huruf
disajikan sendiri (bukan lewat Google Fonts), sertakan berkas OFL-nya.

---

## Data goresan aksara Arab

Dibangkitkan sendiri untuk proyek ini: huruf dirender besar, rangkanya diambil
dengan penipisan Zhang-Suen, rangka itu diurai jadi ruas antar-simpul lalu
dirangkai kembali, dan hasilnya disederhanakan dengan Ramer-Douglas-Peucker.

**Bentuk huruf acuannya: Amiri**, karya Khaled Hosny, berlisensi
[SIL Open Font License 1.1](https://scripts.sil.org/OFL) — lisensi yang memang
mengizinkan karya turunan. Berkas hurufnya sendiri TIDAK ikut disertakan dan
tidak dimuat aplikasi; ia hanya dipakai sekali di komputer pengembang untuk
membangkitkan jalur goresannya.

Versi sebelumnya diturunkan dari huruf **Tahoma** milik Microsoft dan sudah
diganti seluruhnya. Penggantinya diuji lebih dulu dengan mengukur jarak
rata-rata tiap piksel tinta huruf ke jalur terdekat: 5,15 satuan pada data lama,
2,36 pada data baru — lebih rapat pada seluruh 28 huruf, dengan jumlah goresan
(badan + titik) tetap sesuai kaidah ejaan Arab.

---

## Suara

Diisi setelah perenderan audio selesai. Wajib memuat, untuk tiap bahasa: nama
mesin TTS, nama model/checkpoint, lisensinya, dan asal audio contohnya berikut
lisensinya.

| Bahasa | Mesin | Model | Lisensi bobot | Audio contoh | Lisensi contoh |
|---|---|---|---|---|---|
| _(belum diisi)_ | | | | | |

---

## Nama ujian

TOEFL, IELTS, TOEIC, JLPT, TOPIK, HSK, DELE, DELF, DALF, Goethe-Zertifikat, dan
TORFL adalah merek dagang milik penyelenggaranya masing-masing. SankaLingo GO tidak
berafiliasi, tidak disponsori, dan tidak disahkan oleh penyelenggara mana pun.
Nama-nama itu dipakai semata untuk menyebut ujian yang materinya dipersiapkan.

Seluruh soal di dalam aplikasi ditulis sendiri. Tidak ada soal ujian resmi yang
disalin.
