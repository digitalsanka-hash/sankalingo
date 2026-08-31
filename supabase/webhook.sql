-- ── Penerimaan pesanan otomatis dari Scalev ──────────────────────
--
-- Jalankan di SQL Editor, sekali saja, setelah supabase/lisensi.sql.
--
-- Dua hal yang dijaga di sini, dan keduanya harus di basis data
-- bukan di kode fungsi:
--
--   1. SATU PESANAN = SATU KODE. Scalev mengirim ulang webhook kalau
--      jawabannya lambat atau gagal, dan sebuah event bisa datang dua
--      kali tanpa ada yang salah. Tanpa penjagaan, pembeli yang sama
--      menerima dua kode dan stokmu bocor diam-diam. order_id dibuat
--      UNIQUE supaya percobaan kedua ditolak oleh basis data sendiri,
--      bukan oleh pemeriksaan di kode yang bisa kalah balapan.
--
--   2. SATU KODE = SATU PEMBELI. Dua pesanan yang tiba bersamaan bisa
--      sama-sama membaca kode "siap" yang sama. Karena itu pengambilan
--      kode dilakukan lewat fungsi dengan FOR UPDATE SKIP LOCKED:
--      pesanan kedua otomatis melompat ke kode berikutnya.

create table if not exists public.pesanan_scalev (
  id           bigint generated always as identity primary key,
  order_id     text not null unique,
  email        text,
  nama         text,
  telepon      text,
  kode         text references public.kode_lisensi(kode),
  status       text not null default 'terkirim'
               check (status in ('terkirim', 'stok_habis', 'gagal_kirim')),
  catatan      text,
  muatan       jsonb,
  dibuat       timestamptz not null default now()
);

create index if not exists pesanan_scalev_dibuat_idx on public.pesanan_scalev (dibuat desc);

alter table public.pesanan_scalev enable row level security;
-- Tanpa satu pun policy: hanya service role (Edge Function) yang bisa
-- menyentuhnya. Peramban tidak punya urusan dengan tabel ini.

-- ── Ambil satu kode yang siap, kunci barisnya ────────────────────
create or replace function public.ambil_kode_siap(p_untuk text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_kode text;
begin
  select kode into v_kode
  from public.kode_lisensi
  where terpakai < maks_pakai
    and dipesan_untuk is null
  order by dibuat
  for update skip locked      -- pesanan serentak melompat ke kode lain
  limit 1;

  if v_kode is null then
    return null;              -- stok habis; pemanggil yang memutuskan
  end if;

  update public.kode_lisensi
     set dipesan_untuk = p_untuk
   where kode = v_kode;

  return v_kode;
end;
$$;

-- Fungsi ini memakai security definer, jadi haknya harus dicabut dari
-- peran publik: kalau tidak, siapa pun yang punya kunci publishable
-- bisa memanggilnya dan menghabiskan stok kodemu.
revoke all on function public.ambil_kode_siap(text) from public, anon, authenticated;

-- Periksa hasilnya:
--   select count(*) from public.kode_lisensi where dipesan_untuk is null and terpakai < maks_pakai;
-- Angka itu adalah stok yang bisa dikirim otomatis.
