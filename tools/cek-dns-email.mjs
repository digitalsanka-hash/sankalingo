/* Pemeriksa DNS untuk pengiriman email (Resend).

   Dipakai supaya tidak perlu menebak. Tombol "Verify" di Resend hanya
   bilang berhasil atau gagal; kalau gagal ia tidak menyebut catatan
   MANA yang belum terbaca. Berkas ini menanyakannya langsung ke DNS
   publik dan menyebutkan satu per satu.

   Jalankan:
     node tools/cek-dns-email.mjs sankalingogo.com
     node tools/cek-dns-email.mjs mail.sankalingogo.com   (kalau pakai subdomain)

   Catatan: perubahan DNS butuh waktu menyebar — biasanya beberapa
   menit di Hostinger, kadang sampai satu jam. Kalau baru saja disimpan
   dan di sini masih "belum terbaca", tunggu sebentar lalu ulangi.      */

import { Resolver } from 'node:dns/promises';

const domain = (process.argv[2] || 'sankalingogo.com').replace(/^https?:\/\//, '').replace(/\/.*$/, '');

/* Resolver publik, bukan DNS bawaan komputer: yang menentukan Resend
   bisa membaca catatanmu adalah DNS publik, dan cache lokal sering
   masih menyimpan jawaban lama. */
const r = new Resolver();
r.setServers(['8.8.8.8', '1.1.1.1']);

const coba = async (fn) => { try { return await fn(); } catch { return null; } };
const txt = async (n) => (await coba(() => r.resolveTxt(n)))?.map(x => x.join('')) ?? null;
const mx = async (n) => (await coba(() => r.resolveMx(n))) ?? null;
const cname = async (n) => (await coba(() => r.resolveCname(n)))?.[0] ?? null;

const OK = '  OK  ';
const NO = ' BELUM';
const potong = (s, n = 62) => (s.length > n ? s.slice(0, n) + '…' : s);

console.log(`\nMemeriksa pengiriman email untuk: ${domain}\n`);

let siap = 0, total = 0;
const lapor = (nama, ada, isi) => {
  total++; if (ada) siap++;
  console.log(`[${ada ? OK : NO}] ${nama}`);
  if (isi) console.log(`         ${potong(isi)}`);
};

/* Resend memakai DUA bentuk tabel yang berbeda tergantung akun, dan
   keduanya sah:
     bentuk lama  — TXT v=spf1 + MX, keduanya di send.<domain>
     bentuk CNAME — dua CNAME (rsend dan send) yang menunjuk ke mta.net
   Akun yang dipakai proyek ini memakai bentuk CNAME. Alat ini menerima
   kedua-duanya supaya tidak melaporkan gagal pada setelan yang benar. */
const cnameSend = await cname(`send.${domain}`);
const cnameRsend = await cname(`rsend.${domain}`);
/* Bentuknya ditebak dari yang sudah terpasang — tetapi sebelum ada
   satu pun catatan, tidak ada yang bisa ditebak. Karena itu bentuknya
   boleh dipaksa dari baris perintah, supaya daftar periksanya sudah
   benar sejak sebelum baris pertama ditambahkan:
     node tools/cek-dns-email.mjs sankalingogo.com cname                */
const paksa = (process.argv[3] || '').toLowerCase();
const bentukCname = paksa === 'cname' ? true
                  : paksa === 'txt' ? false
                  : !!(cnameSend || cnameRsend);

if (bentukCname) {
  lapor(`CNAME di  rsend.${domain}`, !!cnameRsend, cnameRsend || 'belum terbaca');
  lapor(`CNAME di  send.${domain}`, !!cnameSend, cnameSend || 'belum terbaca');
} else {
  const spfNama = `send.${domain}`;
  const spf = await txt(spfNama);
  const spfBaris = spf?.find(s => s.toLowerCase().startsWith('v=spf1'));
  lapor(`SPF   di  ${spfNama}`, !!spfBaris, spfBaris || 'catatan TXT v=spf1 belum terbaca');

  const mxr = await mx(spfNama);
  lapor(`MX    di  ${spfNama}`, !!mxr?.length,
    mxr?.length ? mxr.map(m => `${m.exchange} (prioritas ${m.priority})`).join(', ')
                : 'catatan MX belum terbaca');
}

/* ── DKIM: tanda tangan yang membuktikan surat benar dari kamu ────
   Sama di kedua bentuk, dan selalu TXT. */
const dkimNama = `resend._domainkey.${domain}`;
const dkim = await txt(dkimNama);
const dkimBaris = dkim?.find(s => s.includes('p=') || s.toLowerCase().includes('k=rsa'));
lapor(`DKIM  di  ${dkimNama}`, !!dkimBaris,
  dkimBaris ? dkimBaris.slice(0, 40) + `… (${dkimBaris.length} huruf)`
            : 'catatan TXT DKIM belum terbaca');

/* Nilai DKIM yang terpotong waktu disalin adalah kegagalan yang paling
   sulit dilihat: catatannya ADA, jadi semua alat bilang "terbaca",
   tetapi tanda tangannya tidak pernah cocok. Kunci RSA 1024-bit yang
   utuh panjangnya sekitar 216 huruf. */
if (dkimBaris && dkimBaris.length < 180) {
  console.log(`         ! Hanya ${dkimBaris.length} huruf — kemungkinan terpotong waktu disalin.`);
  console.log('           Salin ulang dari Resend memakai tombol salin, jangan disorot tetikus.');
}

/* ── DMARC: tidak wajib, tapi menaikkan peluang masuk kotak masuk ── */
const dmarc = (await txt(`_dmarc.${domain}`))?.find(s => s.toLowerCase().startsWith('v=dmarc1'));
console.log(`[${dmarc ? OK : ' opsi '}] DMARC di  _dmarc.${domain}`);
if (dmarc) console.log(`         ${potong(dmarc)}`);
else console.log('         belum ada. Boleh dilewati dulu; tambahkan nanti: v=DMARC1; p=none;');

/* Peringatan salah eja hanya masuk akal kalau TIDAK ADA satu pun catatan
   yang terbaca. Sebelumnya ia bersandar pada resolve4 di apex, dan itu
   sempat gagal sesaat pada domain yang jelas-jelas hidup — sehingga alat
   yang gunanya memberi kepastian justru menyalakan alarm palsu tepat di
   bawah baris yang semuanya OK. */
if (siap === 0 && !dmarc) {
  const apex = await coba(() => r.resolve4(domain.split('.').slice(-2).join('.')));
  if (!apex) console.log(`\n! Domain ${domain} tidak menjawab sama sekali — periksa ejaannya.`);
}

console.log(`\nBentuk setelan: ${bentukCname ? 'CNAME' : 'TXT + MX'}`);
console.log(`${siap} dari ${total} catatan wajib sudah terbaca.`);
if (siap === total) {
  console.log('Semua siap. Buka Resend → Domains → tekan Verify.');
} else {
  console.log('Yang bertanda BELUM itu yang masih harus ditambahkan di Hostinger →');
  console.log('Domains → DNS / Nameservers → Manage DNS records.');
  console.log('Kalau baru saja disimpan, tunggu beberapa menit lalu ulangi perintah ini.');
}
console.log('');
