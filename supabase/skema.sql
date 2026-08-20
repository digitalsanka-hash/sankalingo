-- ══════════════════════════════════════════════════════════════════
--  SankaLingo GO — skema penyelarasan kemajuan
--
--  Jalankan SEKALI di Supabase → SQL Editor → New query → Run.
--  Aman dijalankan ulang: semuanya memakai IF NOT EXISTS / OR REPLACE.
--
--  Yang disimpan di sini HANYA kemajuan belajar (pelajaran selesai,
--  kartu hafalan, XP, catatan). Tidak ada materi pelajaran, tidak ada
--  data pribadi selain email yang dikelola Supabase Auth sendiri.
-- ══════════════════════════════════════════════════════════════════

-- ── 1. Tabel ──────────────────────────────────────────────────────
create table if not exists public.kemajuan (
  user_id    uuid        primary key references auth.users (id) on delete cascade,
  data       jsonb       not null default '{}'::jsonb,
  diperbarui timestamptz not null default now()
);

comment on table  public.kemajuan is 'Kemajuan belajar SankaLingo GO, satu baris per pengguna.';
comment on column public.kemajuan.data is 'Isi localStorage fasih.v1 apa adanya.';

-- ── 2. Row Level Security ─────────────────────────────────────────
--  INI PENGAMAN SESUNGGUHNYA, bukan kerahasiaan kunci anon. Kunci anon
--  memang dipasang di sisi peramban dan bisa dilihat siapa pun; yang
--  mencegah orang membaca data orang lain adalah keempat aturan ini.
alter table public.kemajuan enable row level security;

drop policy if exists "baca milik sendiri"  on public.kemajuan;
drop policy if exists "tulis milik sendiri" on public.kemajuan;
drop policy if exists "ubah milik sendiri"  on public.kemajuan;
drop policy if exists "hapus milik sendiri" on public.kemajuan;

create policy "baca milik sendiri" on public.kemajuan
  for select using (auth.uid() = user_id);

create policy "tulis milik sendiri" on public.kemajuan
  for insert with check (auth.uid() = user_id);

create policy "ubah milik sendiri" on public.kemajuan
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "hapus milik sendiri" on public.kemajuan
  for delete using (auth.uid() = user_id);

-- ── 3. Cap waktu otomatis ─────────────────────────────────────────
--  Supaya kolom diperbarui tidak bisa dibohongi dari sisi peramban.
create or replace function public.sentuh_diperbarui()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.diperbarui := now();
  return new;
end;
$$;

drop trigger if exists kemajuan_sentuh on public.kemajuan;
create trigger kemajuan_sentuh
  before insert or update on public.kemajuan
  for each row execute function public.sentuh_diperbarui();

-- ── 4. Pemeriksaan ────────────────────────────────────────────────
--  Setelah Run, jalankan ini untuk memastikan RLS benar-benar menyala.
--  Kolom rowsecurity harus bernilai true.
--
--     select tablename, rowsecurity
--     from pg_tables where schemaname = 'public' and tablename = 'kemajuan';
--
--  Dan ini harus mengembalikan empat baris aturan:
--
--     select policyname, cmd from pg_policies
--     where schemaname = 'public' and tablename = 'kemajuan';
