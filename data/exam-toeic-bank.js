/* Bank simakan TOEIC per bagian, mengikuti proporsi resmi:
   Part 1 (6) · Part 2 (25) · Part 3 (39, 13 percakapan × 3) · Part 4 (30, 10 monolog × 3). */

/* Part 1 — Photographs. Foto digambarkan dengan teks agar bisa dilatih
   tanpa gambar; empat pernyataan dibacakan, pilih yang paling tepat. */
export const TOEIC_P1 = [
{ scene:'Seorang pria berdiri di dekat mesin fotokopi sambil memegang setumpuk kertas.',
  opts:['He is repairing a machine.','He is holding some documents.','He is sitting at a desk.','He is opening a window.'],
  a:1, why:'Hanya "holding some documents" yang benar-benar terlihat.' },
{ scene:'Beberapa orang duduk mengelilingi meja rapat, satu orang berdiri menunjuk layar.',
  opts:['They are entering a room.','A woman is turning off the lights.','One person is pointing at a screen.','They are moving chairs.'],
  a:2, why:'Kalimat lain menyebut aksi yang tidak terjadi.' },
{ scene:'Sepeda-sepeda diparkir berjajar di rak sepeda di tepi jalan, tidak ada orang.',
  opts:['Bicycles have been parked in a row.','People are riding bicycles.','A man is locking a bicycle.','Bicycles are being repaired.'],
  a:0, why:'Pasif berlangsung ("are being repaired") butuh pelaku yang terlihat.' },
{ scene:'Seorang perempuan memegang cangkir sambil melihat ke luar jendela kafe.',
  opts:['She is pouring coffee into a cup.','She is looking out of a window.','She is washing some dishes.','She is putting on a coat.'],
  a:1 },
{ scene:'Kotak-kotak bertumpuk di gudang, sebuah forklift berada di sebelahnya tanpa pengemudi.',
  opts:['Boxes are stacked next to a forklift.','A worker is driving a forklift.','Boxes are being unloaded from a truck.','Shelves are empty.'],
  a:0, why:'Tidak ada orang, jadi semua kalimat berpelaku salah.' },
{ scene:'Dua pekerja mengenakan helm memeriksa gambar rencana di lokasi konstruksi.',
  opts:['They are examining a document.','They are climbing a ladder.','They are removing their helmets.','They are painting a wall.'],
  a:0 }
];

/* Part 2 — Question-Response. Tiga pilihan saja (A–C), tanpa teks tercetak. */
export const TOEIC_P2 = [
['Where did you put the sales report?',['On your desk, next to the folder.','Yes, I reported it.','About twenty copies.'],0],
['When will the new manager start?',['In the marketing department.','Not until next month.','She managed it well.'],1],
['Who is handling the Ortega account now?',['Priya took it over last week.','At the head office.','Yes, please do.'],0],
['Why was the meeting postponed?',['In the second conference room.','Because two clients could not attend.','It lasted about an hour.'],1],
['How do I get to the warehouse from here?',['It arrived this morning.','Take the second exit on the left.','About fifty boxes.'],1],
['Would you like coffee or tea?',['Yes, I would.','Either is fine, thanks.','At three o\'clock.'],1],
['Didn\'t you already send the invoice?',['I thought Rina did.','To the accounting office.','Invoices are printed weekly.'],0],
['The printer on level two is broken again.',['I\'ll call maintenance.','Two copies, please.','It prints in colour.'],0],
['How long have you worked in logistics?',['In the north branch.','A little over six years.','Every Tuesday.'],1],
['Should we book the larger room?',['The booking form is online.','Only if more than thirty people come.','It was booked yesterday.'],1],
['Have the samples arrived yet?',['They\'re still at customs.','A sample of the fabric.','Yes, I like them.'],0],
['What time does the store close on Sundays?',['At six, I think.','On the corner of Mill Street.','About forty customers.'],0],
['Could you review this contract before Friday?',['I reviewed it last year.','I\'m afraid my schedule is full.','The contract is on page four.'],1],
['Isn\'t the training session in room 3B?',['They moved it to 4A.','For new employees.','It lasted two days.'],0],
['Where can I find the safety manual?',['Safety is important here.','There\'s a copy in every workstation.','Last Thursday.'],1],
['Do you want me to order more paper?',['We still have three boxes.','The order was delivered.','Paper, please.'],0],
['Why is the shipment delayed?',['To the Surabaya branch.','A storm closed the port.','Twelve pallets.'],1],
['How much did the repair cost?',['Just under two hundred.','Last Wednesday.','The technician did it.'],0],
['Who approved this expense?',['It was approved by finance.','Expenses are due Friday.','About four hundred.'],0],
['Are you attending the conference in Bali?',['I attended last year.','Yes, if the budget allows.','In the main hall.'],1],
['This spreadsheet has an error in column D.',['Let me take a look.','Column D is hidden.','Spreadsheets are useful.'],0],
['Would you mind moving your car?',['Not at all, I\'ll do it now.','Yes, I mind driving.','It\'s a blue sedan.'],0],
['What should we do about the double booking?',['The room seats sixty.','Let\'s move the smaller group.','It was booked online.'],1],
['When is the deadline for the proposal?',['We proposed it already.','The end of this week.','In the shared folder.'],1],
['Has anyone seen the projector remote?',['I think it\'s in the drawer.','The projector works fine.','Yes, remotely.'],0]
];

/* Part 3 — Conversations (tiga soal per percakapan). */
export const TOEIC_P3 = [
{ id:'p3-1', title:'Pengiriman tertahan bea cukai',
  lines:['Hi Marco, have you heard anything about the shipment from the Surabaya supplier?',
    'I just got off the phone with them. It left the port on Monday, but customs are holding it for inspection.',
    'That is a problem. The retail launch is on the twelfth.',
    'I know. They estimate release by Thursday, which still gives us four days.',
    'Four days is tight. Can we ask the warehouse to work an extra shift on Friday?',
    'I will email Priya about that now. If she agrees, we should still make the deadline.'],
  questions:[
    { t:'mcq', q:'What is the main problem?', opts:['The goods were lost','The shipment is held at customs','Prices increased','The supplier cancelled'], a:1 },
    { t:'mcq', q:'When is the shipment expected to be released?', opts:['Monday','Thursday','Friday','The twelfth'], a:1 },
    { t:'mcq', q:'What will the man do next?', opts:['Call customs','Email Priya','Visit the warehouse','Cancel the launch'], a:1 }]},
{ id:'p3-2', title:'Wawancara kerja dijadwalkan ulang',
  lines:['Good morning, this is Dela from Aksara Consulting. I am calling about your interview on Wednesday.',
    'Oh, hello. Is there a problem?',
    'Not exactly. The hiring manager has to travel, so we would like to move it to Thursday at the same time, eleven o\'clock.',
    'Thursday morning is difficult. I have a class until half past eleven. Could we do the afternoon?',
    'Let me check. There is a slot at two o\'clock. Would that suit you?',
    'Two would be perfect. Should I bring anything?',
    'Just a copy of your portfolio. Everything else we already have on file.'],
  questions:[
    { t:'mcq', q:'Why is the woman calling?', opts:['To cancel an interview','To reschedule an interview','To offer a job','To request documents'], a:1 },
    { t:'mcq', q:'What time is the interview finally set for?', opts:['Wednesday at eleven','Thursday at eleven','Thursday at two','Friday at two'], a:2 },
    { t:'mcq', q:'What should the man bring?', opts:['His portfolio','His degree certificate','A reference letter','Nothing'], a:0 }]},
{ id:'p3-3', title:'Keluhan tagihan',
  lines:['I am calling about invoice 4412. We were charged twice for the same delivery.',
    'I am sorry about that. Could you confirm the delivery date?',
    'The eighth of March. The invoice shows two identical lines of four hundred each.',
    'I see it. It looks like the order was entered twice when the system was updated.',
    'Can you issue a credit note?',
    'Yes. I will process it today, and it should appear on your account within three working days.'],
  questions:[
    { t:'mcq', q:'What is the caller complaining about?', opts:['A late delivery','A duplicate charge','A damaged product','A wrong address'], a:1 },
    { t:'mcq', q:'What caused the problem?', opts:['A system update entered the order twice','The driver made an error','The customer ordered twice','A price change'], a:0 },
    { t:'mcq', q:'What will happen within three working days?', opts:['A refund cheque arrives','A credit note appears on the account','A new invoice is sent','The goods are collected'], a:1 }]},
{ id:'p3-4', title:'Renovasi kantor',
  lines:['Have you seen the notice about the renovation on level five?',
    'No, when does it start?',
    'The first of next month, and it runs for about six weeks.',
    'Where will the finance team sit?',
    'They are moving down to level two, into the old training rooms.',
    'That will be crowded. What about the training sessions?',
    'Those will run online until the work finishes.'],
  questions:[
    { t:'mcq', q:'How long will the renovation take?', opts:['Two weeks','Four weeks','About six weeks','Two months'], a:2 },
    { t:'mcq', q:'Where will the finance team move to?', opts:['Level five','Level two','A different building','Home'], a:1 },
    { t:'mcq', q:'What will happen to training sessions?', opts:['They are cancelled','They move online','They move to level five','They are shortened'], a:1 }]},
{ id:'p3-5', title:'Memilih pemasok',
  lines:['We have two quotations for the packaging. Which do you prefer?',
    'The cheaper one is about fifteen per cent lower, but their lead time is three weeks.',
    'And the other?',
    'Ten days, but they require a minimum order of five thousand units.',
    'We only need three thousand this quarter.',
    'We could order five thousand and store the rest. Storage would cost less than the delay.',
    'Let\'s do that, but ask them for a discount on the larger volume first.'],
  questions:[
    { t:'mcq', q:'What are the speakers deciding?', opts:['Which supplier to use','Where to store goods','How much to charge','Whom to hire'], a:0 },
    { t:'mcq', q:'What is the drawback of the cheaper supplier?', opts:['Poor quality','A three-week lead time','A high minimum order','No warranty'], a:1 },
    { t:'mcq', q:'What does the woman suggest doing first?', opts:['Placing the order immediately','Asking for a volume discount','Renting a warehouse','Cancelling the order'], a:1 }]}
];

/* Part 4 — Talks (tiga soal per monolog). */
export const TOEIC_P4 = [
{ id:'p4-1', title:'Pesan telepon dari bengkel',
  lines:['Hello Mr Lee, this is Thomas from Bright Auto calling about your car repair.',
    'We told you the part would take until next week, but it arrived early and the repair is finished.',
    'We close in about twenty minutes today, so you are welcome to collect the car any time tomorrow.',
    'If you need a lift to the workshop, let me know and I can arrange one.',
    'One more thing: the total came to slightly less than the estimate, so please ignore the figure we quoted.'],
  questions:[
    { t:'mcq', q:'Why is the speaker calling?', opts:['To postpone a repair','To say the repair is complete','To request payment','To order a part'], a:1 },
    { t:'mcq', q:'When can Mr Lee collect the car?', opts:['Today, within twenty minutes','Tomorrow','Next week','After payment'], a:1 },
    { t:'mcq', q:'What does the speaker say about the cost?', opts:['It is higher than the estimate','It is lower than the estimate','It is unchanged','It must be paid in cash'], a:1 }]},
{ id:'p4-2', title:'Pengumuman di bandara',
  lines:['Attention passengers travelling to Singapore on flight GA 828.',
    'Because of heavy rain at the destination airport, departure has been delayed by approximately ninety minutes.',
    'The new boarding time is displayed on the screens near gate twelve.',
    'Passengers with onward connections should speak to a member of staff at the service desk in the departure hall.',
    'Refreshment vouchers are available at the same desk for passengers holding a boarding pass.'],
  questions:[
    { t:'mcq', q:'Why is the flight delayed?', opts:['A technical fault','Bad weather at the destination','Staff shortage','A security check'], a:1 },
    { t:'mcq', q:'How long is the delay?', opts:['Thirty minutes','About ninety minutes','Two hours','Twelve minutes'], a:1 },
    { t:'mcq', q:'What should passengers with connections do?', opts:['Wait at gate twelve','Go to the service desk','Re-book online','Collect their luggage'], a:1 }]},
{ id:'p4-3', title:'Pelatihan karyawan baru',
  lines:['Welcome to your first day. I will run through the schedule quickly.',
    'This morning covers the safety procedures, which are compulsory for everyone regardless of department.',
    'After lunch you will be split into two groups: those joining the production floor go with Ari, and office staff stay here with me.',
    'Your access cards are being printed and will be handed out at the end of the day.',
    'Until then, please use the visitor passes on the table by the door.'],
  questions:[
    { t:'mcq', q:'What happens in the morning?', opts:['Department tours','Safety procedures','Card collection','Lunch'], a:1 },
    { t:'mcq', q:'What happens after lunch?', opts:['Everyone goes home','The group splits in two','A test is given','Cards are printed'], a:1 },
    { t:'mcq', q:'What should new staff use during the day?', opts:['Access cards','Visitor passes','A signed form','Nothing'], a:1 }]},
{ id:'p4-4', title:'Iklan radio toko perabot',
  lines:['Looking to refresh your home this season? Meridian Furniture is holding its biggest clearance of the year.',
    'Every sofa and dining set is reduced by at least thirty per cent, and delivery within the city is free on orders above two million rupiah.',
    'The sale runs from Friday to Sunday only, at our Jalan Kenanga showroom.',
    'Bring this advertisement, or mention it in store, for an additional five per cent off any single item.'],
  questions:[
    { t:'mcq', q:'What is being advertised?', opts:['A new showroom','A clearance sale','A delivery service','A design consultation'], a:1 },
    { t:'mcq', q:'When does the sale end?', opts:['Friday','Saturday','Sunday','Monday'], a:2 },
    { t:'mcq', q:'How can customers get an extra discount?', opts:['Order online','Mention the advertisement','Pay in cash','Buy two items'], a:1 }]},
{ id:'p4-5', title:'Pengumuman rapat perusahaan',
  lines:['Before we finish, two announcements.',
    'First, the quarterly results will be published on the intranet on Monday rather than Friday, because the audit is still in progress.',
    'Second, the parking area behind the building will be resurfaced next week.',
    'Staff who normally park there should use the lot on Jalan Melati, and the shuttle will run every fifteen minutes from seven to nine in the morning.',
    'Please share this with anyone who is not here today.'],
  questions:[
    { t:'mcq', q:'Why are the results delayed?', opts:['The audit is unfinished','The intranet is down','A holiday','Staff are absent'], a:0 },
    { t:'mcq', q:'What will happen to the parking area?', opts:['It will close permanently','It will be resurfaced','It will be enlarged','It will be sold'], a:1 },
    { t:'mcq', q:'How often will the shuttle run?', opts:['Every ten minutes','Every fifteen minutes','Every half hour','Once an hour'], a:1 }]}
];

/* Part 6 — Text Completion: satu teks, empat rumpang, salah satunya kalimat utuh. */
export const TOEIC_P6 = [
{ id:'p6-1', title:'Surel kepada pemimpin proyek',
  text:`To: Project Leads
From: James Pak
Subject: Training Courses

In the coming weeks, we will be organising several training sessions for ___1___ employees. At Meridian, we believe that with proper support from senior leaders, less experienced staff can quickly ___2___ a deep understanding of the design process.

___3___ Attendance will be recorded, and the sessions will count towards your annual development hours.

Please confirm your availability ___4___ Friday.`,
  gaps:[
    { t:'mcq', q:'Rumpang 1', opts:['newly hired','new hiring','newly hire','hire new'], a:0 },
    { t:'mcq', q:'Rumpang 2', opts:['develop','developing','development','developed'], a:0 },
    { t:'mcq', q:'Rumpang 3 (kalimat utuh)', opts:[
      'Each session will last ninety minutes and will be held in the main hall.',
      'The design process was introduced five years ago.',
      'Senior leaders will not attend the sessions.',
      'Training is available only to managers.'], a:0,
      why:'Kalimat harus menyambung ke kalimat sesudahnya yang membahas kehadiran dan durasi.' },
    { t:'mcq', q:'Rumpang 4', opts:['by','until','since','during'], a:0 }
  ]},
{ id:'p6-2', title:'Pengumuman pemeliharaan sistem',
  text:`NOTICE — Scheduled Maintenance

Our online ordering system will be unavailable on Saturday from 22:00 ___1___ 04:00 on Sunday while servers are upgraded.

During this period, orders can still be placed by telephone. ___2___

We ___3___ apologise for any inconvenience. The upgrade will make the system noticeably ___4___ once it is complete.`,
  gaps:[
    { t:'mcq', q:'Rumpang 1', opts:['until','by','since','from'], a:0 },
    { t:'mcq', q:'Rumpang 2 (kalimat utuh)', opts:[
      'Our customer service line will be staffed throughout the night.',
      'Telephones will also be switched off.',
      'The system was upgraded last year.',
      'Orders cannot be changed after delivery.'], a:0 },
    { t:'mcq', q:'Rumpang 3', opts:['sincere','sincerely','sincerity','more sincere'], a:1 },
    { t:'mcq', q:'Rumpang 4', opts:['fast','faster','fastest','fastly'], a:1 }
  ]}
];
