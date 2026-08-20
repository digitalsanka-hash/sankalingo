/* Bahan latihan empat keterampilan: membaca, menyimak (dikte),
   berbicara (shadowing & prompt), dan menulis (kerangka + model). */

/* ── READING: bacaan bertingkat + soal ────────────────────────── */
export const READINGS = [
{ id:'rd-a1-1', level:'A1', title:'A Day at the Market', words:120, minutes:2,
  text:`Every Saturday morning, Sari goes to the market near her house. She leaves home at six o'clock because the vegetables are fresher early. First she buys spinach and tomatoes. Then she visits the fish seller, who always keeps two fish for her. The market is noisy and crowded, but Sari likes it. She knows most of the sellers by name, and they know her. She never uses a shopping list. She looks at what is fresh and decides there. By eight o'clock she is home again, and her bag is full. Her mother makes soup, and the whole family eats together at noon.`,
  questions:[
    { t:'mcq', q:'When does Sari go to the market?', opts:['Every morning','Saturday morning','Sunday evening','Every noon'], a:1 },
    { t:'mcq', q:'Why does she leave early?', opts:['The market closes early','Vegetables are fresher','It is cooler','The bus is cheaper'], a:1 },
    { t:'mcq', q:'Does Sari use a shopping list?', opts:['Yes, always','No, never','Only sometimes','Only for fish'], a:1 },
    { t:'fill', q:'The fish seller keeps ___ fish for her.', a:['two','2'] }
  ]},
{ id:'rd-a2-1', level:'A2', title:'The Bicycle That Changed a Town', words:190, minutes:3,
  text:`Ten years ago, the small town of Pangkal had one main problem: the school was six kilometres from the nearest village. Many children stopped going after primary school because the walk took too long.

A retired teacher named Pak Yusuf noticed that the town had dozens of broken bicycles. He asked people to donate them and spent his weekends repairing them in his garage. In the first year he fixed twelve bicycles and lent them to students, on one condition: they had to return the bicycle in good order and teach one younger student how to repair a puncture.

The idea spread. Today the workshop has thirty volunteers, and more than four hundred bicycles have passed through it. School attendance in the surrounding villages has risen sharply, and several former students now run repair shops of their own.

Pak Yusuf says the bicycles were never the point. "A bicycle is only metal," he told a local newspaper. "What changed was that children believed the school was reachable."`,
  questions:[
    { t:'mcq', q:'What was the main problem in Pangkal?', opts:['No teachers','The school was far away','No bicycles','Bad weather'], a:1 },
    { t:'mcq', q:'What condition did Pak Yusuf set?', opts:['Pay a small fee','Return it and teach someone to repair','Attend his class','Buy a new tyre'], a:1 },
    { t:'mcq', q:'How many bicycles did he fix in the first year?', opts:['Twelve','Thirty','Four hundred','Six'], a:0 },
    { t:'mcq', q:'What does Pak Yusuf believe really changed?', opts:['The roads','The bicycles','The children\'s belief','The school building'], a:2 },
    { t:'fill', q:'The workshop now has ___ volunteers.', a:['thirty','30'] }
  ]},
{ id:'rd-b1-1', level:'B1', title:'Why We Remember Songs Better Than Facts', words:260, minutes:4,
  text:`Most people can recall the words of a song they have not heard for twenty years, yet forget a phone number within seconds. This is not a failure of memory but a consequence of how memory works.

Songs combine several features that memory strongly favours. The first is rhythm, which divides information into predictable chunks. Instead of remembering forty separate words, the brain stores a handful of patterns. The second is melody, which adds a second, parallel cue: if the words fail, the tune often retrieves them. The third is rhyme, which narrows the possibilities. If you have forgotten a word but know it rhymes with "rain", you have already eliminated most of the language.

Repetition matters too, but not in the way many students assume. Listening to a song a hundred times works partly because the listening is spread over years rather than crammed into one afternoon. Psychologists call this spaced repetition, and it is one of the most reliably demonstrated effects in the study of learning.

There is a practical lesson here for language learners. Material that is rhythmic, emotionally charged, and revisited at intervals will stick; material that is flat, isolated, and reviewed once will not. This explains why learners often remember song lyrics and film lines far more easily than the vocabulary lists they studied for hours.

The conclusion is not that lists are useless. It is that a list reviewed six times across three weeks will outperform the same list studied six times in one evening — every time.`,
  questions:[
    { t:'mcq', q:'According to the text, rhythm helps memory because it', opts:['makes songs enjoyable','divides information into chunks','slows the words down','adds emotion'], a:1 },
    { t:'mcq', q:'What does rhyme do?', opts:['Adds melody','Reduces the possible words','Increases repetition','Creates emotion'], a:1 },
    { t:'mcq', q:'Why is listening to a song 100 times effective?', opts:['It is loud','The listening is spread over time','Songs are short','The brain likes music only'], a:1 },
    { t:'mcq', q:'TRUE/FALSE/NOT GIVEN: The writer says vocabulary lists are useless.', opts:['TRUE','FALSE','NOT GIVEN'], a:1 },
    { t:'fill', q:'The psychological effect described is called ___ repetition.', a:['spaced'] }
  ]},
{ id:'rd-b2-1', level:'B2', title:'The Quiet Economics of Repair', words:300, minutes:5,
  text:`For most of the twentieth century, repairing a broken appliance was ordinary. A television might be opened, tested and returned to service several times before it was finally discarded. Today the same fault usually results in replacement, and the reason is only partly technological.

Manufacturing costs have fallen dramatically, while skilled labour has become relatively more expensive. When a new kettle costs less than an hour of a technician's time, repair stops making economic sense for the consumer, regardless of whether it makes sense environmentally. Design choices have reinforced the pattern: components glued rather than screwed, batteries sealed into casings, and diagnostic software restricted to authorised service centres.

Recent legislation in the European Union has begun to push in the opposite direction. Manufacturers of certain appliances must now supply spare parts for a defined period and make repair information available to independent workshops. Early assessments suggest modest but real effects: repair rates for washing machines rose in the first two years after the rules took effect, though from a low base.

Critics argue that such rules raise prices for everyone in order to benefit a minority who choose repair. Supporters reply that the true cost of disposable goods is simply paid elsewhere — in waste management, in raw material extraction, and in the loss of the repair trades themselves, which once provided stable skilled work in ordinary towns.

What is striking is how quickly the assumption changed. Within two generations, repair moved from being the obvious response to breakage to being an eccentric one. Reversing that assumption may require more than spare parts; it may require rebuilding a workforce that largely no longer exists.`,
  questions:[
    { t:'mcq', q:'Why has repair become uneconomic for consumers?', opts:['Products last longer','Labour costs more relative to goods','Parts are unavailable','People dislike old items'], a:1 },
    { t:'mcq', q:'Which design choice is NOT mentioned?', opts:['Glued components','Sealed batteries','Restricted diagnostic software','Non-standard voltages'], a:3 },
    { t:'mcq', q:'What effect did EU rules have on washing machine repairs?', opts:['No effect','A modest rise','A sharp fall','Unclear results'], a:1 },
    { t:'mcq', q:'YES/NO/NOT GIVEN: The writer believes spare parts alone will restore repair culture.', opts:['YES','NO','NOT GIVEN'], a:1, why:'Paragraf akhir: mungkin butuh membangun kembali tenaga kerja.' },
    { t:'mcq', q:'The phrase "an eccentric one" suggests repair is now seen as', opts:['normal','unusual','expensive','illegal'], a:1 }
  ]},
{ id:'rd-c1-1', level:'C1', title:'The Limits of Measuring Learning', words:330, minutes:6,
  text:`Any system that rewards a measurement will eventually distort the thing being measured. In education this principle has a long and uncomfortable history, and it applies with particular force to language testing.

A standardised test is a sample. It asks a limited number of questions in limited conditions and infers a general ability from the result. The inference is usually sound: someone who reads a dense academic passage accurately under time pressure can probably read similar material outside the examination hall. Problems arise not from the inference itself but from what happens once the score acquires institutional weight.

When a score determines admission, employment or migration, preparation shifts from the underlying ability towards the sample. Learners rehearse question formats rather than reading widely; institutions teach strategies rather than language. The measured score rises while the ability it was meant to represent stagnates — a phenomenon documented across systems as different as Japanese university entrance and American school accountability.

This does not make testing worthless, and the alternative frequently proposed — continuous teacher assessment — carries its own well-documented biases. The reasonable conclusion is narrower: a test score should be treated as evidence, not as the thing itself, and its predictive value should be checked periodically against outcomes that matter.

For the individual learner the practical implication is clearer still. Preparation that improves only test technique produces a score that will not survive contact with a lecture hall or a client meeting. Preparation that builds genuine reading speed, listening resilience and productive range improves both the score and the ability behind it. The two strategies look similar from the outside and diverge sharply in their results.`,
  questions:[
    { t:'mcq', q:'The main argument of the passage is that', opts:['tests should be abolished','measurement can distort what it measures','teachers assess better than tests','scores predict nothing'], a:1 },
    { t:'mcq', q:'What happens when a score acquires institutional weight?', opts:['Tests get harder','Preparation targets the sample, not the ability','Scores fall','Teachers resign'], a:1 },
    { t:'mcq', q:'The writer\'s view of continuous teacher assessment is that it', opts:['is clearly superior','has its own biases','should replace tests','is cheaper'], a:1 },
    { t:'mcq', q:'"diverge sharply in their results" implies the two strategies', opts:['are identical','look different but work the same','look similar but end differently','both fail'], a:2 },
    { t:'mcq', q:'YES/NO/NOT GIVEN: The writer thinks test scores should be the sole basis for admission.', opts:['YES','NO','NOT GIVEN'], a:1 }
  ]}
];

/* ── LISTENING: dikte bertingkat (dibacakan mesin suara) ──────── */
export const DICTATIONS = [
{ level:'A1', items:[
  'My name is Andi and I live in Bandung.',
  'The shop opens at nine in the morning.',
  'She has two brothers and one sister.',
  'I usually walk to work on Fridays.',
  'How much does this ticket cost?',
  'There are five people in my family.',
  'We eat dinner at seven every evening.',
  'The bus stop is near the market.',
  'He can speak English and Japanese.',
  'Please close the window before you leave.'
]},
{ level:'A2', items:[
  'I have been waiting for the train for twenty minutes.',
  'She didn\'t come to the meeting because she was ill.',
  'We are going to visit my grandmother next weekend.',
  'This restaurant is cheaper than the one near the station.',
  'You should take an umbrella; it might rain later.',
  'He has already finished the report.',
  'They were watching television when the power went out.',
  'I enjoy reading books about history and travel.',
  'The hotel was much better than we expected.',
  'Could you tell me where the nearest pharmacy is?'
]},
{ level:'B1', items:[
  'If the flight is delayed again, we will miss the connection.',
  'The report has been reviewed by three separate departments.',
  'She said she had never seen anything like it before.',
  'Although the price rose sharply, demand remained stable.',
  'I used to cycle to school, but now I take the bus.',
  'The building, which was completed in 1978, needs renovation.',
  'By the time we arrived, the presentation had already started.',
  'He asked me whether I would be available on Thursday.',
  'The results suggest a strong link between sleep and memory.',
  'They are considering moving the office to a cheaper district.'
]},
{ level:'B2', items:[
  'Had we known about the delay, we would have rescheduled the meeting.',
  'The proposal was rejected on the grounds that it was too costly.',
  'Not only did the scheme reduce waste, it also created local jobs.',
  'It is widely believed that early intervention produces better outcomes.',
  'The company is reported to have lost a substantial share of the market.',
  'Having reviewed the evidence, the committee revised its recommendation.',
  'What surprised the researchers most was the speed of the change.',
  'Despite considerable investment, productivity has remained flat.',
  'The findings may have been affected by the small sample size.',
  'Were the government to act now, the long-term costs would fall.'
]},
{ level:'C1', items:[
  'Rarely does a single measure address both the cause and the symptom.',
  'The argument rests on an assumption that the data do not support.',
  'Critics contend that the policy benefits precisely those who need it least.',
  'Such was the demand that the organisers were forced to add a second session.',
  'The distinction, while subtle, has considerable practical consequences.',
  'Only after the audit was completed did the discrepancies become apparent.',
  'Far from resolving the dispute, the ruling intensified it.',
  'The scheme goes some way towards addressing the underlying inequality.',
  'It would be premature to draw firm conclusions from a single trial.',
  'Notwithstanding these limitations, the study represents a significant advance.'
]}
];

/* ── SPEAKING: shadowing & prompt harian ──────────────────────── */
export const SHADOWING = [
{ level:'A1', title:'Perkenalan', lines:[
  'Hi, I\'m Rina. Nice to meet you.',
  'I\'m from Makassar, in the east of Indonesia.',
  'I work as a nurse at a small clinic.',
  'In my free time I like cooking and swimming.'
]},
{ level:'A2', title:'Menceritakan Akhir Pekan', lines:[
  'Last weekend was pretty busy, actually.',
  'On Saturday I helped my parents clean the house.',
  'Then in the evening we went out for dinner.',
  'On Sunday I just stayed home and rested.'
]},
{ level:'B1', title:'Menyampaikan Pendapat', lines:[
  'Personally, I think public transport should be the priority.',
  'The main reason is that roads simply cannot keep expanding.',
  'In my city, for example, a new flyover filled up within a year.',
  'That said, it only works if the buses are frequent and reliable.'
]},
{ level:'B2', title:'Presentasi Singkat', lines:[
  'Thank you all for coming. I\'ll keep this brief.',
  'There are three points I\'d like to cover this morning.',
  'First, where we are; second, what changed; and third, what I\'m proposing.',
  'I\'ll take questions at the end, so please hold them for now.'
]},
{ level:'C1', title:'Berdebat dengan Sopan', lines:[
  'I see the logic of that, but I\'d push back on one point.',
  'The evidence you\'re citing comes from a fairly narrow sample.',
  'Admittedly, my own position has the same weakness.',
  'Perhaps the honest answer is that we don\'t yet know.'
]}
];

export const SPEAKING_PROMPTS = [
{ level:'A1', items:['Describe your family.','What do you do every morning?','Talk about your favourite food.','Describe your room.','What is the weather like today?','Talk about your best friend.'] },
{ level:'A2', items:['Describe your last holiday.','Talk about a film you enjoyed.','Compare living in a city and a village.','Describe your daily commute.','Talk about a skill you want to learn.','Describe a shop you like.'] },
{ level:'B1', items:['Describe a problem you solved recently.','Talk about a change in your city.','Explain why you chose your job or course.','Describe a person you admire.','Talk about how you use your phone.','Describe a memorable meal.'] },
{ level:'B2', items:['Should working hours be shorter? Why?','How has social media changed friendships?','Is tourism good for local communities?','Should school uniforms be compulsory?','How can cities reduce waste?','Is remote work here to stay?'] },
{ level:'C1', items:['To what extent should the state fund the arts?','Does economic growth necessarily improve wellbeing?','How should societies balance privacy and security?','Is expertise losing authority in public debate?','What are the limits of individual responsibility for the environment?','Should university education be primarily vocational?'] }
];

/* ── WRITING: kerangka, model, dan pemeriksa ──────────────────── */
export const WRITING_TASKS = [
{ id:'wr-01', level:'A2', type:'Pesan singkat', minutes:10, words:60,
  prompt:'Tulis pesan kepada temanmu untuk membatalkan janji dan mengusulkan waktu lain.',
  frame:['Sapaan','Minta maaf + alasan singkat','Usul waktu baru','Penutup ramah'],
  model:`Hi Dimas,

I\'m really sorry, but I can\'t make it tomorrow — my sister is arriving from Medan and I have to pick her up.

Could we meet on Saturday afternoon instead? Around three would work well for me.

Sorry again, and let me know if that suits you.

Rina`},
{ id:'wr-02', level:'B1', type:'Surel semi-formal', minutes:15, words:120,
  prompt:'Tulis surel kepada manajer kursus untuk meminta pindah kelas malam ke kelas akhir pekan.',
  frame:['Alasan menulis','Situasi saat ini','Permintaan spesifik','Penutup sopan'],
  model:`Dear Ms Halim,

I am writing to ask whether it would be possible to transfer from the Tuesday evening class to the Saturday morning group.

My employer has recently changed my shift pattern, and I now finish work at eight on weekday evenings, which means I have missed the last three sessions.

If a place is available in the Saturday group, I would be grateful if you could move me from the start of next month. I am happy to pay any administrative fee involved.

Thank you for your help.

Kind regards,
Rina Hartono`},
{ id:'wr-03', level:'B2', type:'Esai pendapat', minutes:40, words:250,
  prompt:'Some people think children should start learning a foreign language in primary school. Others believe it is better to wait until secondary school. Discuss both views and give your opinion.',
  frame:['Parafrase + posisi','Pandangan 1 + alasan + contoh','Pandangan 2 + alasan','Posisi saya + simpulan'],
  model:`The age at which foreign language instruction should begin is a question on which reasonable people disagree. While there are practical arguments for postponing it, I believe an early start offers advantages that are difficult to recover later.

Those who favour primary-school instruction point mainly to pronunciation. Younger learners acquire unfamiliar sounds with noticeably less effort, and the window in which this comes easily appears to narrow well before adolescence. A child who hears and produces English at seven is unlikely ever to struggle with the sounds that trouble adult learners for decades.

The opposing argument is not merely conservative. Primary timetables are already crowded, and adding a language often means reducing time for literacy in the mother tongue. There is also a supply problem: in many districts, primary teachers have not been trained to teach a foreign language, and poor early instruction can leave learners with habits that are hard to correct.

On balance, I support an early start, but with a condition attached. The benefit depends almost entirely on teacher quality; a well-taught two hours a week from age seven is worth more than five badly taught ones. Where trained teachers are unavailable, delaying is the honest choice.

In conclusion, early exposure offers real and lasting advantages, particularly for pronunciation, but these are realised only where instruction is competent. Policy should therefore expand primary language teaching at the pace at which qualified teachers can be trained.`},
{ id:'wr-04', level:'B2', type:'Laporan data', minutes:20, words:170,
  prompt:'Laporkan data berikut: pengguna transportasi umum di tiga kota (2015 → 2025). Kota A: 22% → 41%. Kota B: 35% → 30%. Kota C: 12% → 13%.',
  frame:['Parafrase','Overview','Rincian A','Rincian B & C'],
  model:`The table compares the proportion of residents using public transport in three cities over a ten-year period.

Overall, City A saw by far the most significant change, almost doubling its share, while City B was the only city to record a decline. City C remained essentially unchanged.

In 2015, City B had the highest usage at 35 per cent, ahead of City A at 22 per cent. By 2025 these positions had reversed: City A rose steeply to 41 per cent, overtaking City B, which fell by five percentage points to 30 per cent.

City C presents a very different picture. Beginning from the lowest base at 12 per cent, it finished at 13 per cent, a marginal increase of just one percentage point and the smallest change of the three.`},
{ id:'wr-05', level:'C1', type:'Esai solusi', minutes:40, words:280,
  prompt:'Many graduates struggle to find work in their field. What are the causes, and what can be done?',
  frame:['Pendahuluan','Sebab 1 & 2','Solusi 1 & 2','Simpulan'], model:'' }
];

/* Pemeriksa tulisan sederhana — heuristik, bukan penilai resmi. */
export const WRITING_RULES = [
  { id:'contr', re:/\b(don't|isn't|can't|won't|didn't|it's|I'm|we're|they're)\b/gi,
    msg:'Singkatan tidak lazim dalam tulisan akademik. Tulis lengkap (do not, it is).', kind:'warn' },
  { id:'veryvery', re:/\bvery\s+very\b|\breally\s+really\b/gi,
    msg:'Pengulangan penguat melemahkan tulisan.', kind:'bad' },
  { id:'iThink', re:/\bI think\b/gi,
    msg:'Ganti dengan ungkapan yang lebih akademis: "In my view", "It could be argued that".', kind:'warn' },
  { id:'alot', re:/\ba lot of\b/gi,
    msg:'"a lot of" informal. Ganti: "a considerable number of", "many", "a substantial proportion of".', kind:'warn' },
  { id:'thing', re:/\b(thing|things|stuff)\b/gi,
    msg:'Kata terlalu umum. Ganti dengan kata benda spesifik (factor, aspect, issue).', kind:'warn' },
  { id:'absolute', re:/\b(always|never|all people|everyone knows|nobody)\b/gi,
    msg:'Klaim mutlak mudah dibantah. Lembutkan: "in most cases", "rarely", "many people".', kind:'warn' },
  { id:'becauseof', re:/\bbecause of\s+(it|they|he|she)\s+(is|are|was|were)\b/gi,
    msg:'Setelah "because of" pakai kata benda, bukan klausa.', kind:'bad' },
  { id:'despiteof', re:/\bdespite of\b/gi,
    msg:'Tulis "despite" tanpa "of", atau "in spite of".', kind:'bad' },
  { id:'althoughbut', re:/\balthough\b[^.]{0,80}\bbut\b/gi,
    msg:'Jangan memakai "although" dan "but" dalam satu hubungan.', kind:'bad' },
  { id:'informationPl', re:/\binformations\b|\badvices\b|\bequipments\b|\bfurnitures\b/gi,
    msg:'Kata benda tak terhitung tidak berbentuk jamak.', kind:'bad' },
  { id:'discussAbout', re:/\bdiscuss(ed|es)?\s+about\b/gi,
    msg:'"discuss" tidak diikuti "about".', kind:'bad' },
  { id:'moreEr', re:/\bmore\s+\w+er\b/gi,
    msg:'Perbandingan ganda: pilih salah satu (cheaper ATAU more expensive).', kind:'bad' },
  { id:'nowadays', re:/\bnowadays\b/gi,
    msg:'Terlalu sering dipakai. Variasikan: "in recent years", "at present", "today".', kind:'warn' },
  { id:'firstly', re:/\b(firstly|secondly|thirdly|fourthly|fifthly)\b/gi,
    msg:'Batasi penanda urutan maksimal dua kali per esai.', kind:'warn' },
  { id:'longSent', test: s => s.split(' ').length > 45,
    msg:'Kalimat lebih dari 45 kata — pecah agar tetap jelas.', kind:'warn' }
];
