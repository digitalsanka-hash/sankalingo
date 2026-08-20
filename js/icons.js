/* Set ikon garis (stroke 1.6, kotak 24) — menggantikan emoji di seluruh antarmuka.
   Dipakai lewat ico('nama') atau atribut data-ico="nama" yang diisi saat render. */

const P = {
  home:        'M3 10.5 12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5',
  map:         'M9 4 3 6.5v14L9 18l6 2.5 6-2.5v-14L15 6.5 9 4Zm0 0v14m6-11.5V21',
  grammar:     'M4 19V5a1 1 0 0 1 1-1h11l4 4v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm12-15v5h5M8 12h8M8 16h5',
  cards:       'M8 6h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-4 2v9a2 2 0 0 0 2 2h9',
  repeat:      'M4 10a8 8 0 0 1 13.7-5.6L20 7M20 14a8 8 0 0 1-13.7 5.6L4 17m16-10V4m0 3h-3M4 17v3m0-3h3',
  headphones:  'M4 15v-3a8 8 0 0 1 16 0v3M4 15a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Zm16 0a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z',
  mic:         'M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3Zm7 9a7 7 0 0 1-14 0m7 7v3m-3 0h6',
  book:        'M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Zm0 15A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5Z',
  pen:         'M15.5 4.5 19.5 8.5M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z',
  speaker:     'M11 5 6.5 9H3v6h3.5L11 19V5Zm4 3.5a4.5 4.5 0 0 1 0 7m2.5-10a8 8 0 0 1 0 13',
  target:      'M12 3a9 9 0 1 0 9 9m-9-5a5 5 0 1 0 5 5m-5-1.5a1.5 1.5 0 1 0 1.5 1.5M14 10l3-3V4l3 3h-3',
  calendar:    'M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm4-4v4m8-4v4M4 11h16M9 15h2m4 0h2',
  compass:     'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z',
  bulb:        'M9 18h6m-5 3h4M12 3a6 6 0 0 1 4 10.5V16H8v-2.5A6 6 0 0 1 12 3Z',
  chart:       'M4 20V10m5 10V4m5 16v-7m5 7V7',
  settings:    'M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm8.5 3a8.5 8.5 0 0 0-.15-1.5l2-1.5-2-3.4-2.3 1a8.4 8.4 0 0 0-2.6-1.5L15 3H9l-.45 2.6a8.4 8.4 0 0 0-2.6 1.5l-2.3-1-2 3.4 2 1.5a8.6 8.6 0 0 0 0 3l-2 1.5 2 3.4 2.3-1a8.4 8.4 0 0 0 2.6 1.5L9 21h6l.45-2.6a8.4 8.4 0 0 0 2.6-1.5l2.3 1 2-3.4-2-1.5c.1-.5.15-1 .15-1.5Z',
  search:      'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm5 12 4.5 4.5',
  flame:       'M12 3s5 4 5 8a5 5 0 0 1-10 0c0-1.6.8-3 1.5-4 .3 1.2 1 2 1.8 2 .9 0 1.2-1 .7-2.4-.4-1.4 0-3.6 1-3.6Z',
  spark:       'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z',
  check:       'M4.5 12.5 9.5 17.5 19.5 6.5',
  x:           'M6 6l12 12M18 6 6 18',
  chevronR:    'M9 5l7 7-7 7',
  chevronL:    'M15 5l-7 7 7 7',
  play:        'M7 4.5 19 12 7 19.5v-15Z',
  pause:       'M8 5h3v14H8V5Zm5 0h3v14h-3V5Z',
  clock:       'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 4v5.5l3.5 2',
  turtle:      'M4 16h16M6 16a6 6 0 0 1 12 0M9 16V9m6 7V9m-9 7 -1.5 3M18 16l1.5 3M20 11h1.5',
  flag:        'M6 21V4m0 0h11l-2 3.5L17 11H6',
  bookmark:    'M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1Z',
  layers:      'M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5',
  grid:        'M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z',
  list:        'M4 6h16M4 12h16M4 18h16',
  info:        'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5v.5m0 3V17',
  warn:        'M12 4 2.5 20h19L12 4Zm0 6v5m0 2.5v.5',
  quote:       'M9 7c-2.5 1-4 3.3-4 6v4h5v-5H7c0-2 .8-3.4 2.5-4L9 7Zm9 0c-2.5 1-4 3.3-4 6v4h5v-5h-3c0-2 .8-3.4 2.5-4L18 7Z',
  globe:       'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 0c-3 3-3 15 0 18m0-18c3 3 3 15 0 18M3.5 9h17m-17 6h17',
  brain:       'M9 5a3 3 0 0 0-3 3 3 3 0 0 0-1 5.5A3 3 0 0 0 8 19a3 3 0 0 0 4 .5V4.5A3 3 0 0 0 9 5Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 1 5.5A3 3 0 0 1 16 19a3 3 0 0 1-4 .5',
  stethoscope: 'M6 3v5a4 4 0 0 0 8 0V3M8 3H5m6 0h3m-4 12v1a4 4 0 0 0 8 0v-2.5m0 0a2 2 0 1 0 0-.1Z',
  download:    'M12 4v10m0 0-4-4m4 4 4-4M4 18h16',
  upload:      'M12 20V10m0 0-4 4m4-4 4 4M4 6h16',
  trash:       'M5 7h14M9 7V5h6v2m-8 0 1 13h8l1-13',
  volume:      'M11 5 6.5 9H3v6h3.5L11 19V5Zm4.5 4a4 4 0 0 1 0 6',
  timer:       'M12 6a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 4v4.5l3 1.5M9 2h6',
  award:       'M12 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-3 9.5L7.5 21l4.5-2.5L16.5 21 15 12.5',
  route:       'M6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm12 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6 8v5a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3',
  sun:         'M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0-4v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4',
  moon:        'M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z',
  eye:         'M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  users:       'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9c0-3 2.7-5 6-5s6 2 6 5m2-14a3.5 3.5 0 0 1 0 7m2 7c0-2.6-1.4-4.2-3.5-4.8'
};

/* ikon kenyamanan & keterjangkauan */
Object.assign(P, {
  sliders:   'M4 7h9m4 0h3M4 12h3m4 0h9M4 17h9m4 0h3M13 4v6M7 9v6M13 14v6',
  'wifi-off':'M3 3l18 18M9.5 17.5 12 20l2.5-2.5a3.5 3.5 0 0 0-5 0ZM6 13.5a10 10 0 0 1 3-2M2.5 9.5A15 15 0 0 1 7 6.6m14.5 2.9a15 15 0 0 0-8-3.9M18 13.5a10 10 0 0 0-2.2-1.6',
  lightbulb: 'M9 18h6m-5 3h4M12 3a6 6 0 0 1 4 10.5V16H8v-2.5A6 6 0 0 1 12 3Z',
  accessible:'M12 3.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM6 8.5l6 1.3 6-1.3M12 9.8V14m0 0-3 6.5M12 14l3 6.5',
  contrast:  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v18',
  'text-size':'M3 6h10M8 6v13M13 11h8m-4 0v8',
  hand:      'M8 13V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5a1.5 1.5 0 0 1 3 0V12m0-1a1.5 1.5 0 0 1 3 0v1m0 0a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-1.6a6 6 0 0 1-4.7-2.3L5 15.5a1.6 1.6 0 0 1 2.4-2.1L8 14',
  keyboard:  'M3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Zm4 3h.01M11 10h.01M15 10h.01M17 10h.01M7 14h10',
  refresh:   'M4 10a8 8 0 0 1 13.7-5.6L20 7m0-3v3h-3M20 14a8 8 0 0 1-13.7 5.6L4 17m0 3v-3h3',
  shield:    'M12 3 5 6v6c0 4.2 2.8 7.8 7 9 4.2-1.2 7-4.8 7-9V6l-7-3Zm-2.5 9 2 2 4-4'
});

/** Kembalikan markup SVG untuk satu ikon. */
export function ico(name, { size = 20, cls = '', stroke = 1.6 } = '') {
  const d = P[name];
  if (!d) return '';
  return `<svg class="ico ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
}

export const hasIcon = name => !!P[name];

/** Isi semua elemen [data-ico] pada sebuah wadah. */
export function paintIcons(root = document) {
  root.querySelectorAll('[data-ico]').forEach(n => {
    if (n.dataset.icoDone) return;
    n.innerHTML = ico(n.dataset.ico, { size: +(n.dataset.icoSize || 20) }) + n.innerHTML;
    n.dataset.icoDone = '1';
  });
}
