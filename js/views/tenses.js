/* ── Halaman sistem kala & kata kerja ─────────────────────────────
   Dua tampilan dari satu berkas:

   · renderTenses()  — petak 12 kala bahasa Inggris.
   · renderVerba()   — sistem kata kerja bahasa lain.

   Keduanya digabung karena menjawab pertanyaan yang sama dari dua
   sisi: "bagaimana bahasa ini menandai waktu?" — dan jawabannya
   ternyata sangat berbeda antarbahasa. Mandarin tidak menandainya sama
   sekali, Jepang tidak punya masa depan, Rusia lebih peduli tuntas atau
   tidak daripada kapan. Menaruhnya berdampingan membuat perbedaan itu
   terlihat, bukan cuma dihafal.                                        */

import { $, $$, html, raw, esc } from '../ui.js';
import { TENSES, WAKTU, RUPA, DEPAN_LAIN, PASIF, PENGENAL, tenseById } from '../../data/tenses-en.js';
import { grammarById } from '../data.js';

/* Tombol suara: bahasa Inggris memakai mesin bawaan, bahasa lain lewat
   mesin berlapis di js/voice.js dengan romanisasi sebagai cadangan. */
const spk = (teks, code, rom) => code === 'en'
  ? `<button class="speak-btn" data-say="${esc(teks)}" aria-label="Dengarkan">🔊</button>`
  : `<button class="speak-btn" data-say-lang="${esc(teks)}" data-say-code="${esc(code)}"
       data-rom="${esc(rom || '')}" aria-label="Dengarkan">🔊</button>`;

/* ══ Bahasa Inggris: petak 12 kala ═══════════════════════════════ */

export function renderTenses(fokus) {
  const pilih = fokus && tenseById(fokus) ? fokus : null;

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Sistem kala</span>
      <h1>12 Tenses Bahasa Inggris</h1>
      <p>Tiga waktu dikali empat rupa. Bahasa Indonesia <b>tidak mengubah kata kerjanya sama sekali</b> —
         "saya makan" dipakai untuk kemarin, sekarang, dan besok. Karena itu kala bukan sekadar hafalan
         bentuk, melainkan kebiasaan berpikir yang harus dibangun dari nol.</p>
    </div>
  </div>

  <div class="tense-grid" role="table" aria-label="Petak 12 kala">
    <div class="tense-grid__h" role="row">
      <span></span>
      ${RUPA.map(r => `<span role="columnheader"><b>${esc(r.nama)}</b><i>${esc(r.namaId)}</i></span>`).join('')}
    </div>
    ${WAKTU.map(w => `
      <div class="tense-grid__r" role="row">
        <span class="tense-grid__w" role="rowheader"><b>${esc(w.nama)}</b><i>${esc(w.namaId)}</i></span>
        ${RUPA.map(r => {
          const t = TENSES.find(x => x.waktu === w.id && x.rupa === r.id);
          if (!t) return '<span></span>';
          return `<button class="tense-cell${pilih === t.id ? ' is-active' : ''}" data-t="${t.id}"
            aria-label="${esc(t.nama)}">
            <b>${esc(t.namaId)}</b>
            <code>${esc(t.rumus)}</code>
          </button>`;
        }).join('')}
      </div>`).join('')}
  </div>

  <p class="small muted" style="margin:var(--s-3) 0 var(--s-6)">
    Klik satu petak untuk melihat rumus lengkap, kapan dipakai, jebakan khas penutur Indonesia,
    dan tautan ke latihannya.</p>

  <div id="tenseDetail"></div>

  <section class="card" style="margin-top:var(--s-6)">
    <div class="card__title">Mengenali kala dari bentuknya</div>
    <p class="small soft" style="margin:.4rem 0 var(--s-4)">Dibaca dari atas ke bawah — yang cocok pertama itulah kalanya.</p>
    <div class="tense-key">
      ${PENGENAL.map(([bentuk, nama]) =>
        `<div class="tense-key__r"><code>${esc(bentuk)}</code><span>${esc(nama)}</span></div>`).join('')}
    </div>
  </section>

  <section class="card" style="margin-top:var(--s-5)">
    <div class="card__title">Menyatakan masa depan tanpa kala masa depan</div>
    <p class="small soft" style="margin:.4rem 0 var(--s-4)">
      Semua ini bermakna masa depan tapi secara tata bahasa bukan kala tersendiri —
      karena itu tidak masuk petak di atas.</p>
    <div class="stack stack--sm">
      ${DEPAN_LAIN.map(d => `<div class="tense-alt">
        <div class="row row--between">
          <b>${esc(d.nama)}</b>
          <a class="badge" href="#/grammar/${d.topik}">latihan →</a>
        </div>
        <div class="small" style="color:var(--brand-text)">${esc(d.namaId)}</div>
        <p class="small soft" style="margin:.3rem 0">${esc(d.inti)}</p>
        <div class="ex"><span class="en">${esc(d.ex[0])} ${raw(spk(d.ex[0], 'en'))}</span>
          <span class="id-txt">${esc(d.ex[1])}</span></div>
      </div>`).join('')}
    </div>
  </section>

  <section class="card" style="margin-top:var(--s-5)">
    <div class="card__title">Bentuk pasif di tiap kala</div>
    <div class="tbl-wrap" style="margin-top:var(--s-4)">
      <table class="tbl">
        <thead><tr><th>Kala</th><th>Rumus pasif</th><th>Contoh</th></tr></thead>
        <tbody>${PASIF.map(([k, r, c]) =>
          `<tr><td>${esc(k)}</td><td><code>${esc(r)}</code></td><td>${esc(c)}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>`;

  const gambarDetail = id => {
    const t = tenseById(id);
    if (!t) return;
    const g = grammarById(t.topik);
    $('#tenseDetail').innerHTML = html`
      <article class="card card--focus" id="tDetail">
        <div class="row row--between" style="align-items:flex-start">
          <div>
            <div class="card__title" style="font-size:var(--fs-xl)">${esc(t.nama)}</div>
            <div class="card__sub">${esc(t.namaId)}</div>
          </div>
          ${raw(g ? `<a class="btn btn--primary btn--sm" href="#/grammar/${t.topik}">
            Latihan · ${g.drills.length} soal →</a>` : '')}
        </div>

        <p style="margin:var(--s-4) 0 var(--s-5)">${esc(t.inti)}</p>

        <div class="tense-forms">
          <div><span>Positif</span><code>${esc(t.rumus)}</code></div>
          <div><span>Negatif</span><code>${esc(t.rumusNeg)}</code></div>
          <div><span>Tanya</span><code>${esc(t.rumusTanya)}</code></div>
        </div>

        <div class="note note--warn" style="margin-top:var(--s-5)">
          <strong>Bedanya dengan bahasa Indonesia</strong>${esc(t.beda)}
        </div>

        <div class="split-2" style="margin-top:var(--s-5)">
          <div>
            <div class="card__title" style="font-size:var(--fs-md)">Kapan dipakai</div>
            <ul class="stack stack--sm" style="margin-top:.6rem">
              ${t.kapan.map(k => `<li class="row" style="align-items:flex-start;gap:.6rem">
                <span style="color:var(--brand-text)">▸</span><span class="small">${esc(k)}</span></li>`).join('')}
            </ul>
          </div>
          <div>
            <div class="card__title" style="font-size:var(--fs-md)">Kata penanda</div>
            <div class="row" style="flex-wrap:wrap;gap:6px;margin-top:.6rem">
              ${t.penanda.map(p => `<span class="badge">${esc(p)}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="card__title" style="font-size:var(--fs-md);margin-top:var(--s-5)">Contoh</div>
        <div class="ex-list" style="margin-top:.6rem">
          ${t.ex.map(([en, id]) => `<div class="ex">
            <span class="en">${esc(en)} ${raw(spk(en, 'en'))}</span>
            <span class="id-txt">${esc(id)}</span></div>`).join('')}
        </div>

        <div class="card__title" style="font-size:var(--fs-md);margin-top:var(--s-5)">
          ⚠ Jebakan khas penutur Indonesia</div>
        <div class="ex-list" style="margin-top:.6rem">
          ${t.jebakan.map(([bad, good, why]) => `<div class="ex ex--bad">
            <span class="en">${esc(bad)}</span>
            <span class="en" style="color:var(--ok);text-decoration:none">✓ ${esc(good)}</span>
            <span class="id-txt">${esc(why)}</span></div>`).join('')}
        </div>
      </article>`;
  };

  $$('.tense-cell').forEach(b => b.onclick = () => {
    $$('.tense-cell').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    gambarDetail(b.dataset.t);
    $('#tDetail')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (pilih) gambarDetail(pilih);
  else gambarDetail(TENSES[0].id);
}

/* ══ Bahasa lain: sistem kata kerja ══════════════════════════════ */

export function renderVerba(code, V, namaBahasa) {
  if (!V) return $('#main').innerHTML =
    '<div class="empty"><div class="empty__ico">📘</div><p>Sistem kata kerja untuk bahasa ini belum tersedia.</p></div>';

  $('#main').innerHTML = html`
  <div class="page-head">
    <div class="page-head__txt">
      <span class="eyebrow">Sistem kata kerja · ${esc(namaBahasa)}</span>
      <h1>${esc(V.judul)}</h1>
      <p>${esc(V.ringkas)}</p>
    </div>
  </div>

  <div class="note note--warn" style="margin-bottom:var(--s-6)">
    <strong>Yang paling berbeda dari bahasa Indonesia</strong>
    ${raw(V.bedaBesar.map(b => `<div>• ${esc(b)}</div>`).join(''))}
  </div>

  <div class="tabs" id="vbTabs" role="tablist" style="margin-bottom:var(--s-5)">
    ${V.sistem.map((s, i) =>
      `<button class="${i === 0 ? 'is-active' : ''}" data-i="${i}" role="tab"
        aria-selected="${i === 0}">${esc(s.namaId)}</button>`).join('')}
  </div>

  <div id="vbBody"></div>

  <section class="card" style="margin-top:var(--s-6)">
    <div class="card__title">${esc(V.tabel.judul)}</div>
    <div class="tbl-wrap" style="margin-top:var(--s-4)">
      <table class="tbl">
        <thead><tr>${V.tabel.kolom.map(k => `<th>${esc(k)}</th>`).join('')}</tr></thead>
        <tbody>${V.tabel.baris.map(b =>
          `<tr>${b.map((sel, i) => i === 0
            ? `<td><b>${esc(sel)}</b></td>`
            : `<td class="mono">${esc(sel)}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>

  <section class="note note--ok" style="margin-top:var(--s-5)">
    <strong>Catatan penting</strong>
    ${raw(V.catatan.map(c => `<div>• ${esc(c)}</div>`).join(''))}
  </section>`;

  const gambar = i => {
    const s = V.sistem[i];
    $('#vbBody').innerHTML = html`
      <article class="card">
        <div class="card__title" style="font-size:var(--fs-xl)">${esc(s.nama)}</div>
        <div class="card__sub">${esc(s.namaId)}</div>
        <div class="formula" style="margin-top:var(--s-4)">${esc(s.rumus)}</div>
        <p style="margin-top:var(--s-4)">${esc(s.inti)}</p>

        <div class="card__title" style="font-size:var(--fs-md);margin-top:var(--s-5)">Kapan dipakai</div>
        <ul class="stack stack--sm" style="margin-top:.6rem">
          ${s.kapan.map(k => `<li class="row" style="align-items:flex-start;gap:.6rem">
            <span style="color:var(--brand-text)">▸</span><span class="small">${esc(k)}</span></li>`).join('')}
        </ul>

        <div class="card__title" style="font-size:var(--fs-md);margin-top:var(--s-5)">Contoh</div>
        <div class="ex-list" style="margin-top:.6rem">
          ${s.ex.map(([asli, baca, arti]) => `<div class="ex">
            <span class="en">${esc(asli)} ${raw(spk(asli, code, baca))}</span>
            <span class="mono xs" style="color:var(--info)">${esc(baca)}</span>
            <span class="id-txt">${esc(arti)}</span></div>`).join('')}
        </div>

        ${raw(s.jebakan?.length ? `
          <div class="card__title" style="font-size:var(--fs-md);margin-top:var(--s-5)">⚠ Jebakan</div>
          <div class="ex-list" style="margin-top:.6rem">
            ${s.jebakan.map(([bad, good, why]) => `<div class="ex ex--bad">
              <span class="en">${esc(bad)}</span>
              <span class="en" style="color:var(--ok);text-decoration:none">✓ ${esc(good)}</span>
              <span class="id-txt">${esc(why)}</span></div>`).join('')}
          </div>` : '')}
      </article>`;
  };

  gambar(0);
  $$('#vbTabs button').forEach(b => b.onclick = () => {
    $$('#vbTabs button').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
    b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
    gambar(+b.dataset.i);
  });
}
