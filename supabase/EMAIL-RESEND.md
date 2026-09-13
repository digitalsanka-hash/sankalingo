# Mengaktifkan Email Otomatis (Resend)

Setelah ini selesai, tiga hal jalan sendiri:

1. **Pembeli bayar di Scalev → kode akses masuk ke emailnya**, tanpa kamu sentuh.
2. **Tombol "Kirim sekarang"** di panel admin benar-benar mengirim, bukan
   cuma membuka draf.
3. **Email lupa kata sandi** tidak lagi dibatasi tiga per jam dan tidak
   lagi mendarat di spam.

Kodenya sudah siap semua. Yang tersisa cuma dua hal yang harus kamu
kerjakan di dasbor: **DNS** dan **dua rahasia**.

---

## Kenapa DNS dulu

Resend tidak akan mengirim apa pun sebelum kamu membuktikan bahwa
`sankalingogo.com` memang milikmu. Pembuktiannya berupa beberapa baris
catatan DNS. Selama itu belum terbaca, semua pengiriman ditolak dengan
kode **403** — bukan gagal diam-diam, tapi ditolak terang-terangan.

> **Kamu sudah pernah melakukan ini.** `finplansanka.com` terverifikasi
> di Resend waktu kamu memasangnya sebagai pengirim email Supabase.
> Langkahnya sama persis, cuma nama domainnya yang berbeda.

---

## Langkah 1 — Tambahkan domain di Resend

1. Buka **resend.com** → masuk → menu **Domains** → **Add Domain**.
2. Ketik **`sankalingogo.com`** (apex, tanpa `mail.` di depan — sama
   seperti Finplan, dan satu lapis lebih sedikit untuk salah).
3. Pilih region terdekat kalau ditanya. **Singapore** paling dekat.
4. Resend menampilkan tabel berisi beberapa baris catatan DNS.

**Berhenti di sini dan kirim saya tangkapan layar tabel itu.**

Ini bukan basa-basi. Resend memakai dua bentuk tabel yang berbeda
tergantung akun — ada yang memberi **TXT + MX**, ada yang memberi
**CNAME**. Kali lalu saya menebak bentuknya dan salah, lalu kamu yang
kebingungan di Hostinger. Dari tangkapan layarnya saya bisa sebutkan
persis kolom mana diisi apa.

Kalau mau jalan duluan tanpa menunggu saya, bagian berikut menerangkan
cara membaca tabel itu sendiri.

---

## Langkah 2 — Salin ke Hostinger

**hPanel → Domains → `sankalingogo.com` → DNS / Nameservers → Manage DNS records.**

Tiap baris di layar Resend punya tiga bagian yang harus dipindahkan:

| Kolom Resend | Kolom Hostinger | Jebakannya |
|---|---|---|
| Type | **Type** | TXT, MX, atau CNAME — harus sama persis |
| Name / Host | **Name** | ⚠️ Lihat catatan di bawah |
| Value / Content | **Value** / Points to | Salin **seluruhnya**, jangan ada yang terpotong |
| Priority (hanya MX) | **Priority** | Biasanya `10` |

### Jebakan nama — ini yang paling sering bikin gagal

Resend menulis nama **lengkap**, Hostinger minta **potongannya saja**.
Buang `.sankalingogo.com` di belakangnya:

| Ditulis Resend | Diisi di Hostinger |
|---|---|
| `send.sankalingogo.com` | `send` |
| `resend._domainkey.sankalingogo.com` | `resend._domainkey` |
| `sankalingogo.com` (apex) | `@` |

Kalau kamu menempelkan nama lengkapnya, Hostinger diam-diam membuat
`send.sankalingogo.com.sankalingogo.com` — catatan yang tidak akan
pernah ditemukan Resend, dan tidak ada pesan galat apa pun.

### Jebakan nilai DKIM

Baris DKIM panjang sekali (ratusan huruf, diawali `p=` atau `v=DKIM1`).
Salin lewat tombol salin di Resend, jangan disorot pakai tetikus —
satu huruf hilang membuatnya tidak sah, dan tidak ada yang memberi tahu.

---

## Langkah 3 — Periksa sendiri, jangan menebak

Setelah disimpan di Hostinger, jalankan dari folder proyek:

```bash
node tools/cek-dns-email.mjs sankalingogo.com
```

Ia bertanya langsung ke DNS publik dan menyebut satu per satu mana yang
sudah terbaca dan mana yang belum. Tombol **Verify** di Resend cuma
bilang berhasil atau gagal — ia tidak pernah menyebut baris mana yang
kurang.

DNS butuh waktu menyebar: biasanya beberapa menit, kadang sampai satu
jam. Kalau baru saja disimpan dan masih "BELUM", tunggu lalu ulangi.

Kalau sudah **3 dari 3**, kembali ke Resend → Domains → tekan **Verify**.
Statusnya harus berubah jadi **Verified**.

---

## Langkah 4 — Ambil kunci API

Resend → **API Keys** → **Create API Key** → beri nama `sankalingo` →
akses **Sending access** sudah cukup → **Create**.

Kunci itu diawali `re_` dan **hanya ditampilkan sekali**. Salin sekarang.

---

## Langkah 5 — Pasang dua rahasia di Supabase

Dari folder `fasih`, satu perintah:

```bash
npx supabase secrets set RESEND_API_KEY=re_GANTI_DENGAN_KUNCIMU RESEND_FROM="SankaLingo GO <kode@sankalingogo.com>" --project-ref zedamoledhrxsmgtpbvv
```

Dua hal yang menentukan berhasil-tidaknya:

- Bagian setelah `@` di `RESEND_FROM` **harus** domain yang tadi kamu
  verifikasi. Kalau tertulis `@gmail.com`, Resend menolak dengan **422**.
- Bagian sebelum `@` bebas — `kode`, `halo`, `noreply`, apa saja. Tidak
  perlu kotak surat sungguhan; ini alamat pengirim, bukan penerima.

Kalau CLI-nya minta login, ingat: satu token untuk satu akun. SankaLingo
ada di akun **digitalsanka-hash**, terpisah dari Finplan.

```bash
npx supabase login
```

---

## Langkah 6 — Pasang ulang dua fungsi

Keduanya kini membaca surat dari berkas bersama, jadi harus ikut
dipasang ulang:

```bash
npx supabase functions deploy panel-admin --project-ref zedamoledhrxsmgtpbvv
```

```bash
npx supabase functions deploy webhook-scalev --no-verify-jwt --project-ref zedamoledhrxsmgtpbvv
```

`--no-verify-jwt` hanya untuk webhook, dan itu memang harus: Scalev
memanggilnya tanpa membawa JWT. Yang menjaganya adalah tanda tangan
HMAC, bukan JWT.

---

## Langkah 7 — Uji tanpa menunggu ada pembeli

1. Buka aplikasi → **Panel Admin** → tab **Kode**.
2. Ambil satu kode yang masih **siap**, tekan **Kirim**.
3. Isi **emailmu sendiri**, lalu tekan **Kirim sekarang**.

Tombol itu hanya muncul kalau kedua rahasia sudah terpasang. Kalau yang
terlihat cuma "Buka email", berarti Langkah 5 belum berhasil.

Yang seharusnya terjadi: surat masuk dalam beberapa detik, dan kodenya
berubah status jadi **sudah dikirim**.

Kalau gagal, pesannya menyebut sebabnya, bukan "gagal mengirim":

| Kode | Artinya | Perbaikannya |
|---|---|---|
| **401** | Kunci API salah atau sudah dicabut | Buat kunci baru, pasang ulang |
| **403** | Domain belum Verified | Kembali ke Langkah 3 |
| **422** | Pengirim tidak cocok dengan domain | Betulkan `RESEND_FROM` |
| **503** | Rahasianya belum terpasang | Ulangi Langkah 5 |

Catatan pengiriman ada di **Resend → Logs**, lengkap dengan sebab
penolakannya kalau ada.

---

## Langkah 8 — Email lupa kata sandi (opsional, tapi sangat dianjurkan)

Tanpa ini, Supabase mengirim lewat servernya sendiri: **tiga email per
jam untuk seluruh proyek**, dan sering masuk spam. Orang yang lupa kata
sandi akan mengira aplikasinya rusak.

**Supabase → Project Settings → Authentication → SMTP Settings → Enable
Custom SMTP:**

| Kolom | Isi |
|---|---|
| Host | `smtp.resend.com` |
| Port | `465` |
| Username | `resend` |
| Password | kunci `re_...` yang sama |
| Sender email | `kode@sankalingogo.com` |
| Sender name | `SankaLingo GO` |

Simpan, lalu coba "lupa kata sandi" dari halaman masuk.

---

## Yang berubah di kode (sudah selesai, tidak perlu kamu kerjakan)

- `supabase/functions/_shared/surat.ts` — isi surat dan pengiriman
  Resend, satu tempat. Dulu ditulis dua kali di webhook dan panel admin;
  dua salinan yang harus diubah berbarengan selalu berakhir berbeda.
- `panel-admin` dapat tindakan `kirim_email`. Kode ditandai terkirim
  **sesudah** Resend menerima — kalau ditandai lebih dulu lalu gagal,
  kode itu hilang dari daftar "siap" tanpa pernah sampai ke siapa pun.
- Panel admin menyembunyikan tombol "Kirim sekarang" selama rahasianya
  belum ada. Tombol yang menjanjikan lalu gagal lebih buruk daripada
  tombol yang tidak ada.
- Draf manual (email/WhatsApp/salin) **tetap ada**. Ia tidak bergantung
  pada apa pun, jadi ia yang menolong waktu Resend bermasalah atau
  pembeli cuma punya nomor WhatsApp.
