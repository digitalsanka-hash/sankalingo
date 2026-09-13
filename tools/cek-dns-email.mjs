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

/* ── SPF: mengizinkan server Resend mengirim atas nama domainmu ─── */
const spfNama = `send.${domain}`;
const spf = await txt(spfNama);
const spfBaris = spf?.find(s => s.toLowerCase().startsWith('v=spf1'));
lapor(`SPF   di  ${spfNama}`, !!spfBaris, spfBaris || 'catatan TXT v=spf1 belum terbaca');

/* ── MX: ke mana laporan pantulan dikirim ────────────────────────── */
const mxr = await mx(spfNama);
lapor(`MX    di  ${spfNama}`, !!mxr?.length,
  mxr?.length ? mxr.map(m => `${m.exchange} (prioritas ${m.priority})`).join(', ')
              : 'catatan MX belum terbaca');

/* ── DKIM: tanda tangan yang membuktikan surat benar dari kamu ──── */
const dkimNama = `resend._domainkey.${domain}`;
const dkim = await txt(dkimNama);
const dkimBaris = dkim?.find(s => s.includes('p=') || s.toLowerCase().includes('k=rsa'));
lapor(`DKIM  di  ${dkimNama}`, !!dkimBaris, dkimBaris || 'catatan TXT DKIM belum terbaca');

/* ── Bentuk CNAME: sebagian akun Resend memakai ini, bukan TXT ──── */
const cnameCalon = [`send.${domain}`, `rsend.${domain}`, `resend._domainkey.${domain}`];
const cnames = [];
for (const n of cnameCalon) { const c = await cname(n); if (c) cnames.push(`${n} → ${c}`); }
if (cnames.length) {
  console.log('\nBentuk CNAME terbaca (akun Resend model baru):');
  cnames.forEach(c => console.log('  · ' + c));
}

/* ── DMARC: tidak wajib, tapi menaikkan peluang masuk kotak masuk ── */
const dmarc = (await txt(`_dmarc.${domain}`))?.find(s => s.toLowerCase().startsWith('v=dmarc1'));
console.log(`[${dmarc ? OK : ' opsi '}] DMARC di  _dmarc.${domain}`);
if (dmarc) console.log(`         ${potong(dmarc)}`);
else console.log('         belum ada. Boleh dilewati dulu; tambahkan nanti: v=DMARC1; p=none;');

/* ── Yang tidak boleh salah: domain harus benar-benar ada ────────── */
const apex = await coba(() => r.resolve4(domain.split('.').slice(-2).join('.')));
if (!apex) console.log(`\n! Domain ${domain} tidak menjawab sama sekali — periksa ejaannya.`);

console.log(`\n${siap} dari ${total} catatan wajib sudah terbaca.`);
if (siap === total) {
  console.log('Semua siap. Buka Resend → Domains → tekan Verify.');
} else if (cnames.length) {
  console.log('Akunmu tampaknya memakai bentuk CNAME. Cocokkan tiap baris di layar');
  console.log('Resend dengan yang terbaca di atas — yang belum ada, itu yang kurang.');
} else {
  console.log('Yang bertanda BELUM itu yang masih harus ditambahkan di Hostinger →');
  console.log('Domains → DNS / Nameservers → Manage DNS records.');
}
console.log('');
