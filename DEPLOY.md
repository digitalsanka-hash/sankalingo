# Menaruh SankaLingo GO di internet

SankaLingo GO adalah **situs statis**: tanpa build, tanpa kode server, tanpa basis
data yang wajib. `server.js` hanya penyaji berkas untuk pengembangan lokal dan
**tidak ikut dipakai di produksi**.

Ukuran yang benar-benar diunggah: **±2,2 MB dalam 115 berkas**.

---

## Sebelum mulai — dua hal yang berubah dari rencana lama

**Tidak ada berkas audio.** Rencana lama merekam seluruh materi memakai F5-TTS,
dan itulah yang dulu menjadi gerbang lisensi terberat karena bobot modelnya
berlisensi nonkomersial. Rencana itu **sudah ditinggalkan**. Aplikasi sekarang
memakai Web Speech API bawaan peramban, jadi:

- tidak ada satu pun berkas audio yang perlu diunggah
- **tidak ada kewajiban lisensi TTS sama sekali** — bebas dijual

Sisa jalur F5-TTS (`tools/render_f5.py`, `models.json`, `ref/`) disimpan tetapi
tidak aktif, dan sudah dikecualikan dari unggahan.

**Yang masih perlu diperhatikan:** data goresan kana & hanzi berasal dari KanjiVG
(**CC BY-SA 3.0**, berbagi-serupa) — atribusinya sudah ada di `NOTICE.md` dan
halaman Panduan. Nama ujian (TOEFL, IELTS, JLPT, dst.) adalah merek dagang;
penyangkalannya juga sudah terpasang. Goresan Arab dibangkitkan dari huruf Amiri
(SIL OFL) sehingga bebas dipakai.

---

## Bagian 1 — Deploy ke Vercel

### Yang perlu disiapkan

- Akun Vercel (gratis) — daftar di <https://vercel.com>
- Akun GitHub (gratis), kalau ingin pembaruan otomatis

### Jalur A — lewat GitHub (disarankan)

Setiap kali kamu mengubah materi lalu `git push`, situs ikut diperbarui sendiri.

```bash
cd "D:/ASDP/02. PROJEK/files/fasih"
git init
git add .
git commit -m "SankaLingo GO siap deploy"
```

`.gitignore` sudah menyingkirkan `.venv-tts/` (4,6 GB) — pastikan `git status`
tidak menyebutnya sebelum commit.

Lalu buat repositori kosong di GitHub, dan:

```bash
git remote add origin https://github.com/NAMA-ANDA/sankalingo.git
git branch -M main
git push -u origin main
```

Di Vercel: **Add New → Project → Import** repositori itu. Isian yang muncul:

| Isian | Nilai |
|---|---|
| Framework Preset | **Other** |
| Root Directory | `.` |
| Build Command | *kosongkan* |
| Output Directory | *kosongkan* |
| Install Command | *kosongkan* |

Tekan **Deploy**. Sekitar satu menit, situs hidup di `nama-proyek.vercel.app`.

### Jalur B — tanpa GitHub

```bash
npm i -g vercel
cd "D:/ASDP/02. PROJEK/files/fasih"
vercel
```

Ikuti pertanyaannya; jawab **no** saat ditanya apakah ingin mengubah pengaturan
build. Untuk menerbitkan versi produksi:

```bash
vercel --prod
```

### Yang sudah disiapkan untukmu

- **`vercel.json`** — aturan cache dan pengamanan dasar. `index.html`, `sw.js`,
  `js/`, dan `data/` sengaja **tidak** disimpan lama; kalau disimpan, pengguna
  terjebak di versi lama dan tidak ada cara memperbaikinya dari jauh. Kemampuan
  luring tetap utuh karena pekerja layanan punya cadangannya sendiri.
- **`.vercelignore`** — menyingkirkan `.venv-tts/` (4,6 GB), `tools/`,
  `PAKET LENGKAP/`, dan `server.js`.

### Memakai domain sendiri

Vercel → Project → **Settings → Domains → Add**. Tambahkan rekaman DNS yang
ditampilkan di penyedia domainmu. Sertifikat HTTPS dipasang otomatis.

---

## Bagian 2 — Supabase (opsional)

### Perlukah?

| Keadaan | Jawaban |
|---|---|
| Dipakai sendiri, satu perangkat | **Tidak perlu.** Lewati bagian ini. |
| Dijual / dipakai banyak orang | **Perlu**, kalau kamu ingin kemajuan pengguna selamat saat ganti HP |

Tanpa Supabase, aplikasi tetap jalan penuh — kemajuan tersimpan di localStorage
peramban. Yang hilang hanya kemampuan berpindah perangkat. Kartu penyelarasan di
halaman Pengaturan otomatis tersembunyi selama Supabase belum dikonfigurasi.

### Langkah

**1. Buat proyek.** <https://supabase.com> → New Project. Pilih wilayah
**Southeast Asia (Singapore)** — paling dekat dari Indonesia. Simpan kata sandi
basis data yang kamu buat (tidak dipakai aplikasi, tetapi diperlukan kalau kelak
ingin masuk lewat psql).

**2. Jalankan skema.** Buka **SQL Editor → New query**, tempel seluruh isi
`supabase/skema.sql`, tekan **Run**. Skrip ini membuat satu tabel `kemajuan`,
menyalakan Row Level Security, dan memasang empat aturan akses.

**3. Pastikan RLS benar-benar menyala.** Masih di **SQL Editor → New query**,
tempel seluruh isi `supabase/periksa.sql`, tekan **Run**.

Perintah itu tidak mengubah apa pun — ia hanya bertanya. Yang harus terlihat:

| rls_menyala | jumlah_aturan | kesimpulan |
|---|---|---|
| `true` | `4` | AMAN — RLS menyala dan keempat aturan terpasang. |

Kalau kesimpulannya bukan "AMAN", **jangan lanjut**. Kunci `anon` yang nanti
dipasang di aplikasi bisa dilihat setiap pengunjung — memang begitu
rancangannya. Yang mencegah orang memakai kunci itu untuk membaca kemajuan
belajar seluruh pengguna hanyalah RLS. Kalau RLS mati, kunci publik itu berubah
jadi pintu terbuka ke seluruh tabel.

Hasil kosong berarti tabelnya belum ada — `skema.sql` belum jalan sampai
selesai; ulangi langkah 2.

**4. Nyalakan masuk dengan email.** **Authentication → Providers → Email**:
pastikan aktif. Matikan *Confirm email* kalau ingin pengguna langsung bisa masuk
dengan kode tanpa langkah konfirmasi terpisah.

**5. Ubah templat emailnya — LANGKAH YANG PALING MUDAH TERLEWAT.**

Aplikasi ini memakai **kode enam angka**, bukan tautan ajaib. Alasannya teknis
dan penting: token tautan ajaib datang di bagian **hash** alamat
(`#access_token=…`), dan aplikasi ini memakai hash itu untuk peruteannya
(`#/en/grammar`). Keduanya bertabrakan — tautan ajaib akan merusak halaman yang
sedang dibuka.

Tetapi templat bawaan Supabase mengirim TAUTAN. Kalau tidak diubah, pengguna
tidak akan pernah menerima kode, dan tombol "Masuk" akan gagal tanpa pesan yang
menjelaskan apa pun.

Buka **Authentication → Emails → Magic Link**, lalu ganti isinya sehingga memuat
`{{ .Token }}`:

```html
<h2>Kode masuk SankaLingo GO</h2>
<p>Masukkan kode ini di aplikasi:</p>
<p style="font-size:28px;letter-spacing:6px;font-weight:700">{{ .Token }}</p>
<p>Kode berlaku satu jam. Abaikan email ini kalau kamu tidak memintanya.</p>
```

Yang menentukan hanya satu hal: **`{{ .Token }}` harus ada**. Selebihnya bebas.

**6. Salin kunci.** Ambil dua nilai:

- **Project URL** → **Settings → General**, atau susun dari alamat dasbornya:
  `dashboard/project/ABCDEFG/…` → `https://ABCDEFG.supabase.co`
- **Kunci publik** → **Settings → API Keys** → bagian **Publishable key**,
  bentuknya `sb_publishable_…`

Nama kuncinya sudah berganti. Supabase dulu menyebutnya **anon public** (JWT
panjang berawalan `eyJ…`); sekarang namanya **Publishable key**
(`sb_publishable_…`). Keduanya berperan sama dan sama-sama aman dipasang di
peramban. Yang lama masih tersedia di tab *Legacy anon, service_role API keys*
— pakai yang baru, yang lama sedang dihentikan.

Di halaman yang sama ada **Secret key** (`sb_secret_…`, dulu `service_role`).
**Jangan pernah** memasangnya di aplikasi: ia menembus seluruh RLS yang baru
kamu nyalakan.

Tempel ke `js/awan-config.js`:

```js
export const AWAN = {
  url:  'https://abcdefghijkl.supabase.co',
  anon: 'eyJhbGciOi…'
};
```

**7. Deploy ulang** (`git push` atau `vercel --prod`).

### Soal keamanan kunci — jangan panik

Kunci **anon** memang dipasang di sisi peramban dan bisa dilihat siapa pun yang
membuka kode sumber halaman. **Itu memang rancangannya.** Yang menjaga data
adalah Row Level Security di sisi Supabase, bukan kerahasiaan kunci: setiap
permintaan diperiksa terhadap `auth.uid()`, sehingga seseorang yang memegang
kunci anon tetap tidak bisa membaca baris milik orang lain.

Yang **tidak boleh** dipasang di sisi peramban adalah kunci **service_role** —
kunci itu menembus seluruh RLS.

### Cara memakainya sebagai pengguna

Halaman **Pengaturan → Selaraskan antar perangkat**: masukkan email, terima kode
enam angka, masuk. Di perangkat kedua, masuk dengan email yang sama.

Penggabungan dilakukan **per bidang**, bukan timpa-menimpa: pelajaran diambil
gabungannya, kartu hafalan mengambil yang riwayat ulangannya lebih panjang, XP
mengambil yang tertinggi (bukan dijumlah, supaya tidak menggelembung setiap kali
diselaraskan). Belajar di ponsel saat laptop mati tidak akan menghapus apa pun.

---

## Bagian 3 — Setelah hidup

### Periksa ini satu per satu

- [ ] Situs terbuka di alamat `.vercel.app`
- [ ] Berpindah bahasa berjalan (`#/de/kurikulum`, `#/ja/kanji`)
- [ ] Tombol suara berbunyi
- [ ] Matikan internet → muat ulang → aplikasi **tetap terbuka** (PWA)
- [ ] Di ponsel: muncul tawaran "Tambahkan ke Layar Utama"
- [ ] Kalau memakai Supabase: masuk dengan email di dua perangkat, pastikan
      kemajuan berpindah

### Saat memperbarui materi

Ubah berkas di `data/`, lalu **naikkan nomor versi di `sw.js`**:

```js
const VERSI = 'fasih-v10';   // dari v9
```

Tanpa itu, pengguna lama akan terus melihat materi versi sebelumnya sampai
cadangan luringnya kedaluwarsa sendiri.

### Kalau perubahan tidak muncul

Pekerja layanan bisa menyajikan berkas lama walaupun strateginya jaringan-dulu.
Di peramban: DevTools → Application → Service Workers → **Unregister**, lalu
Storage → **Clear site data**. Ini jebakan yang paling sering memakan waktu saat
mengembangkan.

---

## Biaya

| Layanan | Paket gratis | Cukup untuk |
|---|---|---|
| Vercel Hobby | 100 GB lalu lintas/bulan | ribuan pengunjung |
| Supabase Free | 500 MB basis data, 50.000 pengguna aktif/bulan | sangat lega — satu baris kemajuan hanya beberapa KB |

Keduanya tidak meminta kartu kredit untuk paket gratis.

**Satu hal yang perlu diketahui:** proyek Supabase gratis **dijeda otomatis
setelah tujuh hari tanpa aktivitas**. Membangunkannya cukup dengan membuka
dasbor Supabase, tetapi selama dijeda penyelarasan akan gagal. Kalau aplikasi
dipakai orang lain, jadwalkan agar ada permintaan sekali sepekan, atau naikkan
ke paket berbayar.
