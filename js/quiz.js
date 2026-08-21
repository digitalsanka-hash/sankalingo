/* ── Mesin latihan serbaguna ─────────────────────────────────────
   Jenis soal yang didukung:
     mcq     { q, opts:[], a:idx, why }
     fill    { q:'I ___ to school', a:'go' | ['go','walk'], why }
     order   { words:[], a:'kalimat benar' }
     dictate { text }                     — didikte lewat TTS
     trans   { id:'kalimat Indonesia', a:'English sentence' }
     speak   { text }                     — diucapkan pengguna
   Semua soal boleh punya: level, tag, why (pembahasan).            */

import { el, html, raw, esc, shuffle, toast, beep, bump } from './ui.js';
import { say, listen, stopListening, scoreSpeech, sttReady, ttsReady } from './speech.js';
import { norm, similarity, cocokKalimat } from './teks.js';
import { addXP, state, recordQuiz } from './state.js';

export function checkAnswer(item, given) {
  switch (item.t) {
    case 'mcq':  return Number(given) === Number(item.a);
    case 'fill': {
      const keys = Array.isArray(item.a) ? item.a : [item.a];
      return keys.some(k => norm(k) === norm(given));
    }
    case 'order': return norm(item.a) === norm(given);
    case 'trans':
    case 'dictate': {
      const keys = Array.isArray(item.a) ? item.a : [item.a ?? item.text];
      /* Dikte dinilai ketat: kartunya berbunyi "tulis PERSIS apa yang kamu
         dengar", jadi kata yang hilang tidak boleh lolos hanya karena
         kalimatnya panjang. Terjemah tetap longgar — kalimat Indonesia
         yang sama sah diterjemahkan dengan jumlah kata berbeda, dan
         variasinya sudah ditampung daftar kunci. */
      return keys.some(k => cocokKalimat(k, given, item.tol ?? 88,
                                         { ketat: item.t === 'dictate' }));
    }
    case 'speak': return scoreSpeech(item.text, given).score >= (item.tol ?? 70);
    default: return false;
  }
}

/**
 * Jalankan sesi latihan.
 * @returns Promise<{right,total,pct,log}>
 */
export function runQuiz(mount, items, opts = {}) {
  const {
    title = 'Latihan', xpPerItem = 6, skill = '', quizKey = '',
    onDone = null, showWhy = true, shuffleOpts = true
  } = opts;

  return new Promise(resolve => {
    let i = 0, right = 0;
    const log = [];
    const list = items.map(it => {
      if (it.t === 'mcq' && shuffleOpts && !it.noShuffle) {
        const idx = it.opts.map((o, k) => k);
        const sh = shuffle(idx);
        return { ...it, opts: sh.map(k => it.opts[k]), a: sh.indexOf(it.a) };
      }
      return it;
    });

    mount.innerHTML = '';
    const head = el('div', { class: 'lesson-top' });
    const bar = el('div', { class: 'bar' }, el('i', { style: 'width:0%' }));
    const count = el('span', { class: 'small muted nowrap' });
    head.append(bar, count);
    const body = el('div', { class: 'lesson-step' });
    mount.append(head, body);

    render();

    function render() {
      const it = list[i];
      bar.firstChild.style.width = `${(i / list.length) * 100}%`;
      count.textContent = `${i + 1} / ${list.length}`;
      body.innerHTML = '';
      body.append(card(it));
      body.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    function next(ok, given) {
      log.push({ item: list[i], given, ok });
      if (ok) { right++; addXP(xpPerItem, skill); }
      i++;
      if (i < list.length) render();
      else finish();
    }

    function finish() {
      bar.firstChild.style.width = '100%';
      const pct = Math.round((right / list.length) * 100);
      if (quizKey) recordQuiz(quizKey, pct);
      const bonus = pct === 100 ? 25 : pct >= 80 ? 12 : 0;
      if (bonus) addXP(bonus, skill);
      const wrong = log.filter(l => !l.ok);
      body.innerHTML = html`
        <div class="card card--pad-lg t-c stack">
          <div style="display:grid;place-items:center">${raw(ringHtml(pct))}</div>
          <h2>${pct >= 80 ? 'Mantap!' : pct >= 60 ? 'Lumayan — ulangi lagi' : 'Perlu diulang'}</h2>
          <p class="soft">${right} dari ${list.length} benar${bonus ? ` · bonus +${bonus} XP` : ''}</p>
          ${raw(wrong.length ? `<div class="note note--warn" style="text-align:left">
              <strong>Yang perlu diulang</strong>
              <ul style="margin-top:.4rem;display:grid;gap:.3rem">
                ${wrong.slice(0, 8).map(w => `<li>• ${esc(promptOf(w.item))} → <b>${esc(answerOf(w.item))}</b></li>`).join('')}
              </ul></div>` : '')}
          <div class="row" style="justify-content:center">
            <button class="btn btn--soft" data-retry>Ulangi</button>
            <button class="btn btn--primary" data-done>Selesai</button>
          </div>
        </div>`;
      body.querySelector('[data-retry]').onclick = () => {
        i = 0; right = 0; log.length = 0; render();
      };
      body.querySelector('[data-done]').onclick = () => {
        const res = { right, total: list.length, pct, log };
        onDone?.(res); resolve(res);
      };
      bump(document.querySelector('#xpChip b'));
    }

    /* ── kartu per jenis soal ─────────────────────────────────── */
    function card(it) {
      const wrap = el('div', { class: 'q-card' });
      const tagRow = el('div', { class: 'row', style: 'margin-bottom:.8rem' });
      if (it.level) tagRow.append(el('span', { class: `badge badge--lv lv-${it.level}` }, it.level));
      if (it.tag) tagRow.append(el('span', { class: 'badge' }, it.tag));
      tagRow.append(el('span', { class: 'badge badge--brand' }, typeLabel(it.t)));
      wrap.append(tagRow);

      if (it.t === 'mcq')     buildMCQ(wrap, it);
      if (it.t === 'fill')    buildFill(wrap, it);
      if (it.t === 'order')   buildOrder(wrap, it);
      if (it.t === 'trans')   buildTrans(wrap, it);
      if (it.t === 'dictate') buildDictate(wrap, it);
      if (it.t === 'speak')   buildSpeak(wrap, it);
      return wrap;
    }

    function verdict(wrap, ok, it, given) {
      if (state().settings.sound) beep(ok);
      const fb = el('div', { class: `feedback feedback--${ok ? 'ok' : 'bad'}` });
      fb.innerHTML = html`
        <h4>${ok ? '✓ Benar' : '✕ Belum tepat'}</h4>
        ${raw(ok ? '' : `<p>Jawaban: <b>${esc(answerOf(it))}</b></p>`)}
        ${raw(showWhy && it.why ? `<p class="small soft" style="margin-top:.4rem">${esc(it.why)}</p>` : '')}`;
      const nx = el('button', { class: 'btn btn--primary', style: 'margin-top:.9rem' },
        i + 1 < list.length ? 'Lanjut →' : 'Lihat hasil');
      nx.onclick = () => next(ok, given);
      fb.append(nx);
      wrap.append(fb);
      nx.focus();
    }

    function buildMCQ(wrap, it) {
      wrap.append(el('div', { class: 'q-prompt', html: markBlank(it.q) }));
      if (it.sub) wrap.append(el('div', { class: 'q-sub' }, it.sub));
      if (it.audio && ttsReady()) {
        const b = el('button', { class: 'btn btn--soft btn--sm', style: 'margin-top:.7rem' }, '🔊 Dengar');
        b.onclick = () => say(it.audio);
        wrap.append(b);
        if (state().settings.autoSpeak) setTimeout(() => say(it.audio), 260);
      }
      const opts = el('div', { class: 'opts' });
      it.opts.forEach((o, k) => {
        const b = el('button', { class: 'opt', type: 'button' },
          el('span', { class: 'opt__key' }, 'ABCDEFGH'[k]), el('span', {}, o));
        b.onclick = () => {
          const ok = k === it.a;
          [...opts.children].forEach((c, ci) => {
            c.disabled = true;
            if (ci === it.a) c.classList.add('is-right');
            else if (ci === k) c.classList.add('is-wrong');
          });
          verdict(wrap, ok, it, o);
        };
        opts.append(b);
      });
      wrap.append(opts);
      const keyHandler = e => {
        const idx = 'abcdefgh'.indexOf(e.key.toLowerCase());
        if (idx >= 0 && idx < it.opts.length && !opts.children[idx].disabled) opts.children[idx].click();
      };
      document.addEventListener('keydown', keyHandler, { once: false });
      wrap.addEventListener('DOMNodeRemoved', () => document.removeEventListener('keydown', keyHandler));
    }

    function buildFill(wrap, it) {
      wrap.append(el('div', { class: 'q-prompt', html: markBlank(it.q) }));
      if (it.sub) wrap.append(el('div', { class: 'q-sub' }, it.sub));
      const inp = el('input', { class: 'input', style: 'margin-top:1rem', placeholder: 'ketik jawabanmu…', autocomplete: 'off' });
      const go = el('button', { class: 'btn btn--primary', style: 'margin-top:.8rem' }, 'Periksa');
      const submit = () => {
        if (!inp.value.trim()) return;
        inp.disabled = true; go.remove();
        verdict(wrap, checkAnswer(it, inp.value), it, inp.value);
      };
      go.onclick = submit;
      inp.onkeydown = e => { if (e.key === 'Enter') submit(); };
      wrap.append(inp, go);
      setTimeout(() => inp.focus(), 60);
    }

    function buildOrder(wrap, it) {
      wrap.append(el('div', { class: 'q-prompt' }, 'Susun jadi kalimat yang benar:'));
      if (it.id) wrap.append(el('div', { class: 'q-sub' }, `Arti: ${it.id}`));
      const slot = el('div', { class: 'formula', style: 'margin-top:1rem;min-height:3rem' });
      const bank = el('div', { class: 'pill-row', style: 'margin-top:.9rem' });
      let chosen = [];
      const paint = () => {
        slot.textContent = chosen.join(' ') || '—';
        bank.innerHTML = '';
        pool.forEach((w, k) => {
          if (used.has(k)) return;
          const b = el('button', { class: 'btn btn--soft btn--sm' }, w);
          b.onclick = () => { used.add(k); chosen.push(w); paint(); };
          bank.append(b);
        });
      };
      /* Satu butir data yang lupa `words` dulu menghentikan SELURUH sesi
         latihan, bukan cuma soal itu: shuffle(undefined) melempar
         TypeError di dalam render(), tepat sesudah body dikosongkan, jadi
         layar tinggal kosong tanpa tombol dan runQuiz tidak pernah
         selesai — kemajuan sesi hilang seluruhnya. Persis itu yang
         terjadi pada topik a1-26, pelajaran keempat unit PERTAMA.

         Kalau larik katanya hilang, kata-katanya dipecah dari kuncinya
         sendiri. Latihannya jadi lebih mudah (urutan kata kunci terlihat
         apa adanya sebelum diacak), tetapi jauh lebih baik daripada
         pemelajar menabrak dinding. */
      const kataButir = Array.isArray(it.words) && it.words.length
        ? it.words
        : String(Array.isArray(it.a) ? it.a[0] : it.a ?? '').trim().split(/\s+/).filter(Boolean);
      const pool = shuffle(kataButir), used = new Set();
      const undo = el('button', { class: 'btn btn--ghost btn--sm' }, '↶ Hapus terakhir');
      undo.onclick = () => {
        if (!chosen.length) return;
        const last = chosen.pop();
        const k = [...pool.keys()].find(k => pool[k] === last && used.has(k));
        used.delete(k); paint();
      };
      const go = el('button', { class: 'btn btn--primary' }, 'Periksa');
      go.onclick = () => {
        go.remove(); undo.remove();
        verdict(wrap, checkAnswer(it, chosen.join(' ')), it, chosen.join(' '));
      };
      wrap.append(slot, bank, el('div', { class: 'row', style: 'margin-top:1rem' }, undo, go));
      paint();
    }

    function buildTrans(wrap, it) {
      wrap.append(el('div', { class: 'q-prompt' }, 'Terjemahkan ke bahasa Inggris:'));
      wrap.append(el('div', { class: 'q-sub', style: 'font-size:1.05rem;color:var(--text)' }, it.id));
      const ta = el('textarea', { class: 'textarea', style: 'margin-top:1rem;min-height:88px', placeholder: 'Tulis dalam bahasa Inggris…' });
      const go = el('button', { class: 'btn btn--primary', style: 'margin-top:.8rem' }, 'Periksa');
      go.onclick = () => {
        if (!ta.value.trim()) return;
        ta.disabled = true; go.remove();
        const ok = checkAnswer(it, ta.value);
        const s = similarity(Array.isArray(it.a) ? it.a[0] : it.a, ta.value);
        const fbNote = el('p', { class: 'small muted' }, `Kemiripan dengan kunci: ${s}%`);
        verdict(wrap, ok, it, ta.value);
        wrap.querySelector('.feedback').append(fbNote);
      };
      wrap.append(ta, go);
    }

    function buildDictate(wrap, it) {
      wrap.append(el('div', { class: 'q-prompt' }, 'Dengarkan lalu tulis persis apa yang kamu dengar.'));
      const row = el('div', { class: 'row', style: 'margin-top:.9rem' });
      const play = el('button', { class: 'btn btn--soft' }, '🔊 Putar');
      const slow = el('button', { class: 'btn btn--ghost btn--sm' }, '🐢 Pelan');
      play.onclick = () => say(it.text);
      slow.onclick = () => say(it.text, { rate: 0.62 });
      row.append(play, slow);
      const ta = el('textarea', { class: 'textarea', style: 'margin-top:.9rem;min-height:80px', placeholder: 'Tulis di sini…' });
      const go = el('button', { class: 'btn btn--primary', style: 'margin-top:.8rem' }, 'Periksa');
      go.onclick = () => {
        ta.disabled = true; go.remove();
        const ok = checkAnswer({ ...it, a: it.text }, ta.value);
        const s = similarity(it.text, ta.value);
        verdict(wrap, ok, { ...it, a: it.text, why: it.why || `Teks asli: “${it.text}”` }, ta.value);
        wrap.querySelector('.feedback').append(el('p', { class: 'small muted' }, `Akurasi: ${s}%`));
      };
      wrap.append(row, ta, go);
      if (state().settings.autoSpeak) setTimeout(() => say(it.text), 320);
    }

    function buildSpeak(wrap, it) {
      wrap.append(el('div', { class: 'q-prompt' }, 'Ucapkan kalimat ini:'));
      wrap.append(el('div', { class: 'q-sub', style: 'font-size:1.15rem;color:var(--text);margin-top:.5rem' }, it.text));
      const listenBtn = el('button', { class: 'btn btn--soft btn--sm', style: 'margin-top:.6rem' }, '🔊 Contoh');
      listenBtn.onclick = () => say(it.text);
      const heard = el('div', { class: 'heard', style: 'margin-top:1rem' }, '…');
      const rec = el('button', { class: 'rec-btn', title: 'Tekan lalu bicara' }, '🎙');
      const skip = el('button', { class: 'btn btn--ghost btn--sm' }, 'Lewati');
      const manual = el('button', { class: 'btn btn--soft btn--sm' }, '✓ Saya sudah mengucapkannya');
      const hint = el('p', { class: 'xs muted t-c' }, 'Tekan tombol lalu ucapkan kalimatnya.');
      skip.onclick = () => next(false, '');
      manual.onclick = () => {
        rec.disabled = true;
        verdict(wrap, true, { ...it, a: it.text,
          why: 'Dinilai sendiri — penilaian otomatis tidak dipakai untuk soal ini.' }, '(dinilai sendiri)');
      };

      if (!sttReady()) {
        heard.textContent = 'Peramban ini belum mendukung pengenalan ucapan. Pakai Chrome atau Edge — '
          + 'atau tetap ucapkan dengan suara, lalu tekan “Saya sudah mengucapkannya”.';
        rec.disabled = true;
      }

      rec.onclick = async () => {
        rec.classList.add('is-rec'); rec.disabled = true;
        heard.textContent = 'Mendengarkan…'; hint.textContent = 'Bicara sekarang…';
        try {
          const said = await listen({ onPartial: t => heard.textContent = t });
          rec.classList.remove('is-rec');
          if (!said) {
            heard.textContent = 'Tidak ada suara terdengar. Coba lagi, atau nilai sendiri.';
            rec.disabled = false; hint.textContent = 'Dekatkan mikrofon dan bicara lebih keras.';
            return;
          }
          const { score, marks } = scoreSpeech(it.text, said);
          heard.innerHTML = marks.map(m => `<span class="${m.ok ? 'w-ok' : 'w-bad'}">${esc(m.w)}</span>`).join(' ');
          verdict(wrap, score >= (it.tol ?? 70), { ...it, a: it.text, why: `Skor pengucapan: ${score}%` }, said);
        } catch (e) {
          rec.classList.remove('is-rec'); rec.disabled = false;
          heard.innerHTML = `<span style="color:var(--bad)">${esc(e.message)}</span>`;
          hint.textContent = e.code === 'network'
            ? 'Latihan tetap bisa dilanjutkan dengan penilaian sendiri.'
            : 'Perbaiki lalu tekan tombol mikrofon lagi.';
        }
      };

      wrap.append(listenBtn, heard, el('div', { class: 'stack', style: 'margin-top:1rem' }, rec, hint,
        el('div', { class: 'row', style: 'justify-content:center' }, manual, skip)));
    }
  });
}

/* ── bantuan tampilan ────────────────────────────────────────── */
const typeLabel = t => ({ mcq: 'Pilihan ganda', fill: 'Isian', order: 'Susun kalimat',
  trans: 'Terjemah', dictate: 'Dikte', speak: 'Ucapkan' }[t] || t);

export const promptOf = it => it.q || it.id || it.text || '(soal)';
export const answerOf = it => it.t === 'mcq' ? it.opts[it.a]
  : Array.isArray(it.a) ? it.a[0] : (it.a ?? it.text ?? '');

const markBlank = q => esc(q).replace(/_{2,}/g, '<span class="blank">&nbsp;&nbsp;&nbsp;</span>');

function ringHtml(pct) {
  const size = 120, stroke = 11, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const col = pct >= 80 ? 'var(--ok)' : pct >= 60 ? 'var(--warn)' : 'var(--bad)';
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${col}" stroke-width="${stroke}"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}"/>
    </svg><div class="ring__val"><b>${pct}%</b><span>skor</span></div></div>`;
}
