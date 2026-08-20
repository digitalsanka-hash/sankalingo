/* ── Antarmuka kenyamanan ─────────────────────────────────────────
   Tiga bagian yang dipasang sekali di kerangka aplikasi:
   1. tombol bulat + panel cepat (ukuran teks, tema, kontras, gerak)
   2. bilah tab bawah untuk layar kecil
   3. spanduk saat sambungan internet putus                            */

import { $, $$, esc, toast } from './ui.js';
import { ico } from './icons.js';
import { comfort, setComfort, resetComfort, pantauJaringan,
         bisaDipasang, onBisaDipasang, pasangAplikasi, sudahTerpasang } from './comfort.js';

/* ── 1 · Panel cepat ──────────────────────────────────────────── */
const UKURAN = [85, 95, 100, 115, 130, 145, 160, 170];

export function pasangPanelCepat() {
  if ($('#comfortFab')) return;

  const fab = document.createElement('button');
  fab.id = 'comfortFab';
  fab.className = 'comfort-fab';
  fab.type = 'button';
  fab.setAttribute('aria-haspopup', 'dialog');
  fab.setAttribute('aria-expanded', 'false');
  fab.setAttribute('aria-label', 'Atur kenyamanan tampilan');
  fab.title = 'Kenyamanan tampilan (Alt+K)';
  fab.innerHTML = ico('sliders', { size: 20 }) || '⚙';
  document.body.append(fab);

  const pop = document.createElement('div');
  pop.id = 'comfortPop';
  pop.className = 'comfort-pop';
  pop.setAttribute('role', 'dialog');
  pop.setAttribute('aria-label', 'Kenyamanan tampilan');
  pop.hidden = true;
  document.body.append(pop);

  const gambar = () => {
    const c = comfort();
    const seg = (nama, kunci, opsi) => `
      <div class="cf-row">
        <span class="cf-lbl" id="lbl-${kunci}">${nama}</span>
        <div class="seg" role="group" aria-labelledby="lbl-${kunci}" data-seg="${kunci}">
          ${opsi.map(([v, l]) => `<button type="button" data-v="${v}" class="${String(c[kunci]) === String(v) ? 'is-on' : ''}"
             aria-pressed="${String(c[kunci]) === String(v)}">${l}</button>`).join('')}
        </div>
      </div>`;
    const sakelar = (nama, kunci, ket) => `
      <label class="switch-row">
        <span>${nama}${ket ? `<br><small class="xs muted">${ket}</small>` : ''}</span>
        <input type="checkbox" data-sw="${kunci}" ${c[kunci] ? 'checked' : ''} />
      </label>`;

    pop.innerHTML = `
      <h4>${ico('sliders', { size: 15 })} Kenyamanan tampilan</h4>
      <div class="cf-row">
        <span class="cf-lbl" id="lbl-skala">Ukuran teks</span>
        <div class="size-row" role="group" aria-labelledby="lbl-skala">
          <button type="button" id="cfMin" aria-label="Perkecil teks">−</button>
          <output id="cfOut">${c.skala}%</output>
          <button type="button" id="cfPlus" aria-label="Perbesar teks">+</button>
        </div>
      </div>
      ${seg('Tampilan', 'tema', [['dark', 'Gelap'], ['light', 'Terang'], ['sistem', 'Sistem']])}
      ${seg('Huruf', 'huruf', [['bawaan', 'Bawaan'], ['mudah', 'Mudah'], ['serif', 'Serif'], ['disleksia', 'Disleksia']])}
      ${seg('Jarak baris', 'baris', [['rapat', 'Rapat'], ['normal', 'Normal'], ['longgar', 'Longgar']])}
      ${seg('Kontras', 'kontras', [['normal', 'Normal'], ['tinggi', 'Tinggi']])}
      ${seg('Gerak', 'gerak', [['auto', 'Normal'], ['kurangi', 'Kurangi']])}
      ${seg('Ukuran tombol', 'sentuh', [['normal', 'Normal'], ['besar', 'Besar']])}
      <hr style="margin:.2rem 0">
      ${sakelar('Mode tenang', 'tenang', 'Sembunyikan XP, rentetan, dan lencana')}
      ${sakelar('Tip bantuan di halaman', 'bantuan', '')}
      <div class="row" style="gap:var(--s-2);margin-top:var(--s-2)">
        <button class="btn btn--ghost btn--sm" id="cfReset">Kembalikan bawaan</button>
        <a class="btn btn--soft btn--sm" href="#/pengaturan" id="cfMore">Semua pengaturan →</a>
      </div>`;

    $$('[data-seg]', pop).forEach(g => $$('button', g).forEach(b => b.onclick = () => {
      const v = b.dataset.v;
      setComfort({ [g.dataset.seg]: v });
      gambar();
    }));
    $$('[data-sw]', pop).forEach(sw => sw.onchange = () => setComfort({ [sw.dataset.sw]: sw.checked }));

    const geser = d => {
      const c2 = comfort();
      const idx = UKURAN.findIndex(x => x >= c2.skala);
      const baru = UKURAN[Math.min(UKURAN.length - 1, Math.max(0, (idx < 0 ? UKURAN.length - 1 : idx) + d))];
      setComfort({ skala: baru });
      gambar();
      $(d > 0 ? '#cfPlus' : '#cfMin', pop)?.focus();
    };
    $('#cfMin', pop).onclick = () => geser(-1);
    $('#cfPlus', pop).onclick = () => geser(1);
    $('#cfReset', pop).onclick = () => { resetComfort(); gambar(); toast('Tampilan dikembalikan ke bawaan.', 'ok'); };
    $('#cfMore', pop).onclick = () => tutup();
  };

  const buka = () => {
    gambar();
    pop.hidden = false;
    fab.setAttribute('aria-expanded', 'true');
    $('button, input', pop)?.focus();
  };
  const tutup = () => { pop.hidden = true; fab.setAttribute('aria-expanded', 'false'); };
  const alih = () => (pop.hidden ? buka() : tutup());

  fab.onclick = e => { e.stopPropagation(); alih(); };
  document.addEventListener('click', e => {
    if (!pop.hidden && !e.target.closest('#comfortPop') && !e.target.closest('#comfortFab')) tutup();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !pop.hidden) { tutup(); fab.focus(); }
    if (e.altKey && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); alih(); }
  });
}

/* ── 2 · Bilah tab bawah (layar kecil) ────────────────────────── */
export function gambarTabbar(code, items, aktif) {
  let bar = $('#tabbar');
  if (!bar) {
    bar = document.createElement('nav');
    bar.id = 'tabbar';
    bar.className = 'tabbar';
    bar.setAttribute('aria-label', 'Navigasi cepat');
    document.body.append(bar);
  }
  bar.innerHTML = items.map(it => it.act
    ? `<button type="button" data-act="${it.act}" data-tb="${esc(it.key)}">
         ${ico(it.ico, { size: 20 })}<span>${esc(it.label)}</span></button>`
    : `<a href="#/${code}${it.to ? '/' + it.to : ''}" data-tb="${esc(it.key)}">
         ${ico(it.ico, { size: 20 })}${it.badge ? `<span class="tb-dot" data-due-tab hidden>0</span>` : ''}
         <span>${esc(it.label)}</span></a>`).join('');
  $$('[data-tb]', bar).forEach(n => n.classList.toggle('is-active', n.dataset.tb === aktif));
}

export function setTabbarDue(n) {
  const d = $('#tabbar [data-due-tab]');
  if (!d) return;
  d.textContent = n > 99 ? '99+' : n;
  d.hidden = !n;
}

/* ── 3 · Spanduk luring ───────────────────────────────────────── */
export function pasangSpandukLuring() {
  const bar = document.createElement('div');
  bar.className = 'offline-bar';
  bar.id = 'offlineBar';
  bar.hidden = true;
  bar.setAttribute('role', 'status');
  bar.innerHTML = `${ico('wifi-off', { size: 15 })}
    <span><b>Sedang luring.</b> Semua materi dan kemajuanmu tetap jalan — hanya suara daring
    dan pengenalan ucapan yang libur sampai internet kembali.</span>`;
  $('.topbar')?.after(bar);
  pantauJaringan(daring => { bar.hidden = daring; });
}

/* ── 4 · Ajakan memasang aplikasi ─────────────────────────────── */
export function pasangAjakanInstal() {
  const tampil = () => {
    if (sudahTerpasang() || localStorage.getItem('fasih.tolakPasang') === '1') return;
    if (!bisaDipasang() || $('#installBar')) return;
    const bar = document.createElement('div');
    bar.id = 'installBar';
    bar.className = 'offline-bar';
    bar.style.background = 'var(--brand-soft)';
    bar.style.color = 'var(--text)';
    bar.innerHTML = `${ico('download', { size: 15 })}
      <span><b>Pasang SankaLingo GO di perangkatmu</b> — terbuka seperti aplikasi biasa dan jalan tanpa internet.</span>
      <button class="btn btn--primary btn--sm" id="doInstall" style="margin-left:auto">Pasang</button>
      <button class="icon-btn" id="noInstall" aria-label="Nanti saja">✕</button>`;
    $('.topbar')?.after(bar);
    $('#doInstall', bar).onclick = async () => {
      const hasil = await pasangAplikasi();
      if (hasil === 'accepted') toast('SankaLingo GO terpasang. Cari ikonnya di layar utama.', 'ok');
      bar.remove();
    };
    $('#noInstall', bar).onclick = () => {
      try { localStorage.setItem('fasih.tolakPasang', '1'); } catch {}
      bar.remove();
    };
  };
  onBisaDipasang(ada => { if (ada) tampil(); });
  setTimeout(tampil, 3000);
}

/* ── 5 · Tip bantuan per halaman ──────────────────────────────── */
export function tipBantuan(kunci, teks) {
  if (!comfort().bantuan) return '';
  let ditutup = [];
  try { ditutup = JSON.parse(localStorage.getItem('fasih.tipTutup') || '[]'); } catch {}
  if (ditutup.includes(kunci)) return '';
  return `<div class="help-hint" data-tip="${esc(kunci)}">
    ${ico('lightbulb', { size: 17 })}
    <span>${teks}</span>
    <button class="help-hint__x" type="button" data-tip-close aria-label="Sembunyikan tip ini">×</button>
  </div>`;
}

export function pasangPenutupTip() {
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-tip-close]');
    if (!b) return;
    const box = b.closest('[data-tip]');
    const kunci = box?.dataset.tip;
    if (kunci) {
      let arr = [];
      try { arr = JSON.parse(localStorage.getItem('fasih.tipTutup') || '[]'); } catch {}
      if (!arr.includes(kunci)) arr.push(kunci);
      try { localStorage.setItem('fasih.tipTutup', JSON.stringify(arr)); } catch {}
    }
    box?.remove();
  });
}

export function lupakanTipTertutup() {
  try { localStorage.removeItem('fasih.tipTutup'); } catch {}
}
