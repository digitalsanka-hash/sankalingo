-- ══════════════════════════════════════════════════════════════════
--  SankaLingo GO — pemeriksa keamanan basis data
--
--  Jalankan SESUDAH skema.sql, di Supabase → SQL Editor → New query → Run.
--  Perintah ini TIDAK MENGUBAH APA PUN; ia hanya bertanya.
--
--  KENAPA PERLU DIPERIKSA:
--  Kunci "anon" yang dipasang di aplikasi bisa dilihat setiap pengunjung
--  — memang begitu rancangannya. Yang mencegah orang memakai kunci itu
--  untuk membaca kemajuan belajar SELURUH pengguna hanyalah Row Level
--  Security. Kalau RLS mati, kunci publik itu berubah jadi pintu
--  terbuka ke seluruh tabel.
--
--  Yang HARUS terlihat di hasilnya:
--     rls_menyala    = true
--     jumlah_aturan  = 4
--     kesimpulan     = AMAN ...
-- ══════════════════════════════════════════════════════════════════

select
  coalesce(
    (select rowsecurity from pg_tables
      where schemaname = 'public' and tablename = 'kemajuan'),
    false
  ) as rls_menyala,

  (select count(*) from pg_policies
    where schemaname = 'public' and tablename = 'kemajuan'
  ) as jumlah_aturan,

  case
    when (select count(*) from pg_tables
           where schemaname = 'public' and tablename = 'kemajuan') = 0
      then 'BELUM ADA — tabel kemajuan tidak ditemukan. Jalankan skema.sql lebih dulu.'

    when not coalesce(
           (select rowsecurity from pg_tables
             where schemaname = 'public' and tablename = 'kemajuan'), false)
      then 'BAHAYA — RLS MATI. Data tiap pengguna bisa dibaca pengguna lain. Jangan pasang kunci anon sebelum ini benar.'

    when (select count(*) from pg_policies
           where schemaname = 'public' and tablename = 'kemajuan') < 4
      then 'KURANG — RLS menyala tapi aturannya belum lengkap. Jalankan ulang skema.sql.'

    else 'AMAN — RLS menyala dan keempat aturan terpasang.'
  end as kesimpulan;


-- ── Rincian keempat aturannya ─────────────────────────────────────
--  Harus muncul empat baris: SELECT, INSERT, UPDATE, DELETE — dan
--  kolom syarat setiap barisnya harus menyebut auth.uid().
select
  policyname                       as nama_aturan,
  cmd                              as untuk_perintah,
  coalesce(qual, with_check)       as syarat
from pg_policies
where schemaname = 'public' and tablename = 'kemajuan'
order by cmd;
