-- ══════════════════════════════════════════════════════════════════
--  SankaLingo GO — lisensi, profil, dan hak akses
--
--  Jalankan SESUDAH skema.sql, di Supabase → SQL Editor → Run.
--  Aman dijalankan ulang.
--
--  Model jualannya: bayar sekali, akses selamanya. Pembeli menerima
--  KODE AKSES, lalu menukarnya di dalam aplikasi. Kode dipilih daripada
--  "daftar email pembeli" karena pembeli sering membayar dengan satu
--  email dan memakai aplikasi dengan email lain; kode memutus kaitan itu.
--
--  YANG MENJAGA PINTU INI ADALAH RLS DAN EDGE FUNCTION, bukan tampilan.
--  Menu admin yang disembunyikan di peramban hanya kenyamanan; setiap
--  tindakan admin diperiksa ulang di sisi server (lihat
--  supabase/functions/panel-admin).
-- ══════════════════════════════════════════════════════════════════

-- ── 1. Profil ─────────────────────────────────────────────────────
create table if not exists public.profil (
  user_id      uuid        primary key references auth.users (id) on delete cascade,
  email        text,
  admin        boolean     not null default false,
  kode         text,
  -- null = selamanya. Kolomnya tetap ada supaya kelak bisa menjual
  -- paket berjangka tanpa mengubah bentuk tabel.
  akses_sampai timestamptz,
  dibuat       timestamptz not null default now(),
  terlihat     timestamptz
);

comment on table public.profil is 'Satu baris per pengguna: hak akses dan penanda admin.';

-- ── 2. Kode lisensi ───────────────────────────────────────────────
create table if not exists public.kode_lisensi (
  kode            text        primary key,
  maks_pakai      integer     not null default 1,
  terpakai        integer     not null default 0,
  catatan         text,
  -- Ditandai saat kode sudah diberikan ke calon pembeli, supaya satu
  -- kode tidak terkirim ke dua orang.
  dipesan_untuk   text,
  dipesan_pada    timestamptz,
  bulan_aktif     integer,          -- null = selamanya
  dibuat          timestamptz not null default now(),
  terakhir_dipakai timestamptz
);

comment on table public.kode_lisensi is 'Stok kode akses. Tidak pernah dibaca langsung dari peramban.';

-- ── 3. Row Level Security ─────────────────────────────────────────
alter table public.profil       enable row level security;
alter table public.kode_lisensi enable row level security;

drop policy if exists "profil baca sendiri" on public.profil;
drop policy if exists "profil ubah sendiri" on public.profil;

-- Pengguna boleh MEMBACA barisnya sendiri (dipakai untuk tahu apakah
-- aksesnya aktif dan apakah ia admin), tetapi TIDAK boleh menulisnya.
-- Kalau menulis diizinkan, siapa pun bisa mengangkat dirinya jadi admin
-- atau memberi dirinya akses selamanya lewat satu panggilan REST.
create policy "profil baca sendiri" on public.profil
  for select using (auth.uid() = user_id);

-- kode_lisensi sengaja TANPA kebijakan sama sekali. RLS menyala tanpa
-- kebijakan berarti tidak ada satu pun baris yang terbaca atau tertulis
-- dari peramban; hanya service role (Edge Function) yang bisa.

-- ── 4. Profil dibuat otomatis saat akun lahir ─────────────────────
create or replace function public.buat_profil()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profil (user_id, email)
  values (new.id, new.email)
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists auth_buat_profil on auth.users;
create trigger auth_buat_profil
  after insert on auth.users
  for each row execute function public.buat_profil();

-- Akun yang sudah terlanjur ada sebelum tabel ini dibuat.
insert into public.profil (user_id, email)
select id, email from auth.users
on conflict (user_id) do nothing;

-- ── 5. Penukaran kode (atomik) ────────────────────────────────────
--  Dijalankan hanya oleh Edge Function. Dibuat security definer supaya
--  bisa menyentuh kode_lisensi yang tertutup RLS, dan memakai satu
--  UPDATE bersyarat sehingga dua penukaran serentak tidak bisa
--  melewati batas maks_pakai.
create or replace function public.tebus_kode(p_kode text, p_user uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  k       public.kode_lisensi%rowtype;
  sampai  timestamptz;
begin
  update public.kode_lisensi
     set terpakai         = terpakai + 1,
         terakhir_dipakai = now()
   where kode = upper(trim(p_kode))
     and terpakai < maks_pakai
  returning * into k;

  if not found then
    return jsonb_build_object('ok', false, 'sebab', 'tidak-sah');
  end if;

  sampai := case when k.bulan_aktif is null
                 then null
                 else now() + (k.bulan_aktif || ' months')::interval end;

  update public.profil
     set kode = k.kode, akses_sampai = sampai
   where user_id = p_user;

  return jsonb_build_object('ok', true, 'sampai', sampai);
end;
$$;

create or replace function public.kembalikan_kode(p_kode text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.kode_lisensi
     set terpakai = greatest(0, terpakai - 1)
   where kode = upper(trim(p_kode));
end;
$$;

revoke all on function public.tebus_kode(text, uuid)   from public, anon, authenticated;
revoke all on function public.kembalikan_kode(text)    from public, anon, authenticated;

-- ── 6. Jadikan diri sendiri admin ─────────────────────────────────
--  Sekali saja, ganti dengan email yang kamu pakai masuk ke aplikasi:
--
--     update public.profil set admin = true
--     where email = 'email-kamu@contoh.com';
--
--  Tidak ada cara lain menjadi admin. Kolomnya tidak bisa ditulis dari
--  peramban karena kebijakan di atas hanya mengizinkan select.

-- ── 7. Pemeriksaan ────────────────────────────────────────────────
--     select tablename, rowsecurity from pg_tables
--     where schemaname = 'public' and tablename in ('profil','kode_lisensi');
--     -- keduanya harus true
--
--     select count(*) from pg_policies
--     where schemaname = 'public' and tablename = 'kode_lisensi';
--     -- harus 0: tidak ada jalan dari peramban ke stok kode
