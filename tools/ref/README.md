# Audio contoh untuk F5-TTS

F5-TTS bukan mesin yang punya "suara bawaan". Ia bekerja secara *zero-shot voice
cloning*: setiap kali menyintesis, ia butuh satu potong audio contoh beserta
transkripnya, lalu menirukan suara itu. Tanpa audio contoh, tidak ada suara —
`ref_file` dan `ref_text` adalah argumen wajib pada `F5TTS.infer()`.

Folder ini menyimpan satu audio contoh per bahasa. Perender
(`tools/render_f5.py`) membacanya lewat `tools/models.json`.

## Yang dibutuhkan tiap bahasa

| Syarat | Nilai |
|---|---|
| Format | WAV, mono |
| Laju cuplik | 24000 Hz (perender akan mengubahnya bila berbeda) |
| Durasi | **di bawah 12 detik** — dokumentasi resmi F5-TTS |
| Akhiran | sisakan ±1 detik hening di ujung, supaya kata terakhir tidak terpotong |
| Isi | satu-dua kalimat utuh, diucapkan **penutur asli** bahasa itu |
| Transkrip | teks persis apa yang diucapkan, ditulis di `tools/models.json` |
| Kualitas | tanpa musik, tanpa gema, tanpa suara latar |

Suara pada audio contoh inilah yang akan terdengar di seluruh aplikasi untuk
bahasa itu. Pilih yang jernih, tempo sedang, dan nada netral — ini suara
"guru" yang akan didengar pengguna ribuan kali.

## Dari mana mengambilnya secara sah

Urut dari yang paling mudah dipertanggungjawabkan:

1. **Rekaman sendiri dari penutur asli** yang memberi izin. Paling bersih,
   tanpa pertanyaan lisensi.
2. **Mozilla Common Voice** — <https://commonvoice.mozilla.org/datasets>.
   Berlisensi **CC0** (domain publik), punya semua bahasa yang dipakai SankaLingo GO,
   dan setiap klip sudah disertai transkripnya. Unduh paket bahasanya, ambil
   satu klip yang jernih, salin transkripnya.
3. **Lingua Libre** — <https://lingualibre.org>. Rekaman penutur asli,
   CC-BY-SA 4.0. Klipnya pendek-pendek; sambung beberapa bila perlu.
4. **Wikimedia Commons**, kategori rekaman pengucapan. Perhatikan
   lisensinya satu per satu — beragam.

Jangan memakai potongan film, lagu, berita, atau audiobook komersial.

## Menyiapkan berkasnya

```bash
ffmpeg -i asli.mp3 -ac 1 -ar 24000 -t 10 -af "apad=pad_dur=1" tools/ref/ko.wav
```

- `-ac 1` mono
- `-ar 24000` 24 kHz, laju yang dipakai F5-TTS
- `-t 10` potong maksimal 10 detik
- `apad=pad_dur=1` tambahkan 1 detik hening di akhir

Lalu daftarkan di `tools/models.json`:

```json
"ko": {
  "ref_audio": "ko.wav",
  "ref_text": "transkrip persis dari audio itu"
}
```

## Kalau transkripnya tidak ada

`ref_text` boleh dikosongkan — F5-TTS akan mentranskrip sendiri memakai
Whisper large-v3-turbo. Tiga akibatnya: butuh VRAM tambahan, ada jeda di awal,
dan transkrip yang meleset akan merusak hasil sintesis. Untuk perenderan
massal seperti di sini, **selalu tulis transkripnya manual**. Sekali kerja,
dipakai ribuan kali.

## Memeriksa hasil

Render 20 butir dulu sebelum menjalankan seluruh korpus:

```bash
python tools/render_f5.py --bahasa ko --batas 20
```

Dengarkan hasilnya di `audio/ko/`. Kalau suaranya serak, terlalu cepat, atau
logatnya aneh, ganti audio contohnya — bukan setelan modelnya.
