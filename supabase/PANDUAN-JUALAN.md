# Menyalakan sistem lisensi & panel admin

Empat langkah. Semuanya di Supabase, tidak ada yang perlu diubah di kode.

## 1. Jalankan skema

Supabase → SQL Editor → New query → tempel isi `supabase/lisensi.sql` → **Run**.

Aman dijalankan ulang. Sesudahnya periksa:

```sql
select tablename, rowsecurity from pg_tables
where schemaname = 'public' and tablename in ('profil','kode_lisensi');
-- keduanya harus true

select count(*) from pg_policies
where schemaname = 'public' and tablename = 'kode_lisensi';
-- harus 0
```

Angka **0** di pemeriksaan kedua itu memang yang diinginkan: RLS menyala tanpa
satu pun kebijakan berarti tidak ada jalan sama sekali dari peramban ke stok
kode. Yang bisa menyentuhnya hanya service role, dan service role tinggal di
dalam Edge Function.

## 2. Pasang kedua Edge Function

Butuh [Supabase CLI](https://supabase.com/docs/guides/cli) sekali pasang:

```bash
supabase login
supabase link --project-ref zedamoledhrxsmgtpbvv
supabase functions deploy panel-admin
supabase functions deploy tebus-lisensi
```

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, dan `SUPABASE_SERVICE_ROLE_KEY` sudah
tersedia sendiri di lingkungan Edge Function — tidak perlu diisi manual, dan
**jangan pernah** menyalin service role ke `js/awan-config.js`. Kunci itu
melewati seluruh RLS; begitu ia sampai ke peramban, semua penjagaan di atas
tidak ada artinya lagi.

## 3. Jadikan dirimu admin

Masuk dulu ke aplikasi lewat Pengaturan → *Selaraskan antar perangkat*, supaya
akunmu lahir. Lalu sekali saja di SQL Editor:

```sql
update public.profil set admin = true where email = 'email-kamu@contoh.com';
```

Tidak ada cara lain menjadi admin. Kolom `admin` tidak bisa ditulis dari
peramban — kebijakan RLS-nya hanya mengizinkan `select`.

## 2b. Pasang fungsi pendaftaran

Pendaftaran memakai Edge Function ketiga. Tanpa ini, tab **Daftar**
akan menjawab "layanan pendaftaran sedang tidak menjawab".

```bash
supabase functions deploy daftar-lisensi --no-verify-jwt
```

`--no-verify-jwt` wajib: fungsi inilah satu-satunya yang dipanggil oleh
orang yang belum punya akun, jadi ia tidak mungkin membawa JWT. Urutan
kerjanya menjaga diri sendiri — kode diperiksa dulu, akun dibuat
belakangan, dan kalau penukaran kode gagal akun yang baru dibuat
dihapus lagi.

Sekalian matikan konfirmasi email di dasbor (Authentication →
Providers → Email → Confirm email = off) supaya pembeli tidak disuruh
membuka email hanya untuk masuk. Fungsi pendaftaran sudah menandai
email terkonfirmasi, tetapi orang yang mengganti kata sandi lewat
pemulihan tetap melewati jalur email biasa.

## 3b. Nyalakan kotak saran

Sekali jalan, di SQL Editor yang sama:

```sql
-- tempel seluruh isi supabase/saran.sql
```

Lalu pasang ulang panel-admin supaya bisa membacanya:

```bash
supabase functions deploy panel-admin
```

Sebelum ini dikerjakan, tombol "Saran" di aplikasi tetap muncul dan
tetap menerima tulisan pemakai — isinya diantre di perangkat mereka dan
terkirim sendiri begitu tabelnya ada. Yang belum jalan hanya
pembacaannya di panel admin, dan panel akan mengatakannya sendiri.

## 4. Buka panelnya

Pengaturan → **Panel admin**, atau langsung ke `#/admin`.

Di sana kamu bisa mencetak kode akses, menandai kode yang sudah dikirim ke
pembeli, memberi akses selamanya, dan menghapus akun.

---

## Alur jualannya

1. Cetak sekumpulan kode di panel (misal 20, masa aktif *Selamanya*)
2. Pembeli bayar lewat Scalev
3. Salin satu kode, kirim lewat WhatsApp/email, lalu tekan **Tandai terkirim**
   dan isi namanya — supaya satu kode tidak pernah terkirim ke dua orang
4. Pembeli masuk ke aplikasi dengan emailnya, lalu menempel kodenya
5. Kode terpakai; barisnya berubah jadi *terpakai* di panel

Menandai terkirim itu bukan formalitas: tanpa itu, satu kode gampang terkirim
dua kali dan pembeli kedua akan menemukan kodenya sudah mati.

Kelak alur ini bisa disambung otomatis lewat webhook Scalev (Finplan sudah
punya contohnya di `supabase/functions/scalev-webhook`). Selama pembelinya
masih sedikit, cara manual justru lebih cepat dan lebih mudah diperiksa.

---

## Yang BELUM dijaga sistem ini

Perlu dibaca sekali, jangan sampai salah kira.

Seluruh isi pelajaran masih berupa berkas statis di `/data/*.js`, dan berkas
itu bisa diunduh siapa pun tanpa membayar:

```
curl https://www.sankalingogo.com/data/lang/ja-course.js   → HTTP 200
```

Membuat repo GitHub jadi privat **tidak** mengubah hal ini, karena yang
menyajikan berkas itu adalah Vercel, bukan GitHub.

Jadi yang dijaga sistem lisensi ini adalah: stok kode, data pengguna lain, dan
kemampuan admin. Ketiganya dijaga sungguhan oleh RLS dan Edge Function.

Yang **belum** dijaga adalah isi pelajarannya sendiri. Untuk itu isinya harus
dipindahkan ke Supabase dan hanya dikirim ke pembeli yang sudah masuk, lalu
disimpan di perangkat supaya tetap bisa dipakai luring. Selama itu belum
dikerjakan, gerbangnya bersifat lunak: ia menghalangi orang kebanyakan, bukan
orang yang mau membuka DevTools.


---

# Kirim kode otomatis: Scalev → Resend

Sesudah ini, pembeli yang membayar di Scalev menerima kodenya sendiri
lewat email dalam hitungan detik. Kamu tidak membuka apa pun.

Urutannya penting: domain dulu (paling lama menunggu), baru sisanya.

## 1. Domain pengirim

Resend hanya mengizinkan `onboarding@resend.dev` mengirim ke alamat
pemilik akun. Untuk mengirim ke pembeli, kamu butuh domain sendiri.

- Sudah punya domain? Pakai subdomain saja, misal `mail.domainmu.com`.
  Memakai subdomain menjaga reputasi domain utama kalau ada masalah
  pengiriman.
- Belum punya? Beli yang murah (~Rp150–200 ribu/tahun) di Niagahoster,
  Domainesia, atau Cloudflare Registrar.

## 2. Akun Resend

1. Daftar di https://resend.com (paket gratis: 3.000 email/bulan,
   100/hari — cukup untuk ratusan pembeli)
2. **Domains → Add Domain** → masukkan `mail.domainmu.com`
3. Resend menampilkan beberapa data DNS (MX, SPF berupa TXT, dan
   DKIM). Salin semuanya ke pengaturan DNS domainmu.
4. Tunggu sampai statusnya **Verified** — biasanya 5–30 menit.
5. **API Keys → Create API Key** → hak akses cukup *Sending access*.
   Salin kuncinya sekarang; ia hanya ditampilkan sekali.

Jangan tempel kunci itu ke berkas mana pun di repositori ini. Ia
dipasang sebagai secret di langkah 4.

## 3. Tabel penerima pesanan

SQL Editor → tempel seluruh isi `supabase/webhook.sql` → Run.

Isinya dua hal: tabel `pesanan_scalev` (riwayat + penjaga anti-kembar)
dan fungsi `ambil_kode_siap` yang mengunci satu kode agar dua pesanan
yang tiba bersamaan tidak memperebutkan kode yang sama.

## 4. Rahasia

```bash
supabase secrets set SCALEV_WEBHOOK_SIGNING_SECRET=<isi dari Scalev, langkah 6>
supabase secrets set RESEND_API_KEY=<kunci dari langkah 2>
supabase secrets set RESEND_FROM="SankaLingo GO <kode@mail.domainmu.com>"
supabase secrets set APP_URL=https://www.sankalingogo.com
supabase secrets set ADMIN_EMAIL=<emailmu>
```

`ADMIN_EMAIL` dipakai untuk satu hal saja: memberitahumu kalau ada
pesanan masuk sementara stok kode habis — uang sudah diterima tetapi
barangnya belum berangkat, dan itu harus kamu ketahui menit itu juga.

Punya produk lain di Scalev yang sama? Tambahkan saringan:

```bash
supabase secrets set SCALEV_PRODUK="SankaLingo"
```

## 5. Pasang fungsinya

```bash
supabase functions deploy webhook-scalev --no-verify-jwt
```

`--no-verify-jwt` wajib: Scalev tidak mungkin membawa JWT-mu. Yang
menjaga endpoint ini bukan JWT melainkan tanda tangan HMAC di langkah
berikutnya — dan tanpa secret terpasang, fungsinya menolak semua
permintaan dengan 503.

## 6. Daftarkan webhook di Scalev

URL:

```
https://zedamoledhrxsmgtpbvv.supabase.co/functions/v1/webhook-scalev
```

Event: **`payment.received`** — inilah yang menyala saat status
pembayaran menjadi `paid` atau `settled`. Jangan pakai `order.created`:
pesanan yang dibuat belum tentu dibayar.

Scalev memberi *signing secret*. Salin, lalu pasang sebagai
`SCALEV_WEBHOOK_SIGNING_SECRET` (langkah 4) dan deploy ulang.

## 7. Uji

Pastikan stok ada:

```sql
select count(*) from public.kode_lisensi where dipesan_untuk is null and terpakai < maks_pakai;
```

Lalu beli produkmu sendiri dengan nominal terkecil, pakai email lain.
Dalam hitungan detik email kode harus masuk. Periksa jejaknya:

```sql
select order_id, email, kode, status, catatan, dibuat
from public.pesanan_scalev order by dibuat desc limit 10;
```

Arti statusnya:

| status | artinya |
|---|---|
| `terkirim` | beres, email berangkat |
| `stok_habis` | pesanan masuk saat tidak ada kode siap — cetak kode lalu kirim manual |
| `gagal_kirim` | kode sudah dipesan atas nama pembeli tetapi Resend menolak; `catatan` berisi sebabnya |

`gagal_kirim` akan sembuh sendiri kalau Scalev mengirim ulang — kode
yang sama dipakai lagi, tidak membakar kode kedua.
