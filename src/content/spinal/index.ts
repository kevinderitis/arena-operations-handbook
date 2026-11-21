import type { Procedure } from '../../types/documentation';

const img = (slug: string, n: number) =>
  `/images/spinal/${slug}-step-${String(n).padStart(2, '0')}.png`;

export const spinalProcedures: Procedure[] = [
  {
    id: 'spinal-importing-reservations',
    slug: 'importing-reservations-into-spinal',
    department: 'spinal',
    title: 'Importing reservations into Spinal',
    description: 'Import new reservations from Bedlink into Spinal so they appear in the daily operations dashboard.',
    keywords: ['bedlink', 'import', 'reservation', 'spinal', 'sync'],
    estimatedDuration: '5-10 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-21',
    prerequisites: [
      'Access to the Bedlink extranet with receptionist permissions.',
      'Access to Spinal with import permissions.',
      'A stable internet connection.',
    ],
    introduction: 'New reservations created in Bedlink must be imported into Spinal so they appear in the daily operations dashboard and can be managed for check-in and check-out.',
    steps: [
      { title: 'Open Bedlink and locate new reservations', description: 'Log into Bedlink and navigate to the reservations list. Filter by the most recent bookings that have not yet been imported.', images: [{ src: img('importing-reservations-into-spinal', 1), alt: 'Bedlink reservations list', caption: 'Bedlink reservations list' }], callouts: [{ type: 'info', content: 'Confirm the exact filter and date range with the operations manager.' }] },
      { title: 'Copy or export the reservation details', description: 'Select the reservation and copy the required guest and booking details, or use the export option if available.', images: [{ src: img('importing-reservations-into-spinal', 2), alt: 'Reservation details', caption: 'Reservation details' }] },
      { title: 'Open Spinal import screen', description: 'In Spinal, open the import/reservation entry screen where new reservations are added. Before creating a new reservation, search by the guest/reservation name to check whether it is already loaded, to avoid creating duplicates.', images: [{ src: img('importing-reservations-into-spinal', 3), alt: 'Spinal import screen', caption: 'Spinal import screen' }], callouts: [{ type: 'important', content: 'Always search by reservation/guest name first; if it already exists, do not create a duplicate.' }] },
      { title: 'Enter the reservation data', description: 'Fill in the guest name, dates, room type, number of guests and any notes. Double-check all fields before saving.', images: [{ src: img('importing-reservations-into-spinal', 4), alt: 'Enter reservation data', caption: 'Entering reservation data' }], substeps: [
        'Press the button to load a new reservation.',
        'Choose the source (e.g. Booking, Agoda, etc.).',
        'Enter the customer name.',
        'Enter the date (must be completed before step 5).',
        'Assign the room.',
        'Enter the reservation amount.',
        'If applicable, enter the payment type.',
        'Save.',
      ], callouts: [{ type: 'warning', content: 'Always verify arrival and departure dates to avoid overbooking. The date in step 4 must be completed before proceeding to step 5.' }, { type: 'important', content: 'Step 4 (date) must be completed before proceeding to step 5.' }] },
      { title: 'Save and verify', description: 'Save the reservation and confirm it appears in the Spinal daily view.', callouts: [{ type: 'tip', content: 'Cross-check the reservation number against Bedlink.' }] },
    ],
    notes: ['PLACEHOLDER: Add department-specific notes here.'],
    commonMistakes: ['Importing the same reservation twice.', 'Mismatched arrival/departure dates.'],
    troubleshooting: [
      { problem: 'Reservation not appearing in Spinal', solution: 'Refresh the page and check filters; confirm the save succeeded.' },
      { problem: 'Duplicate reservation', solution: 'Search by reservation number before importing.' },
    ],
    checklist: [
      { id: 'c1', label: 'Bedlink reservation identified' },
      { id: 'c2', label: 'Data entered in Spinal' },
      { id: 'c3', label: 'Reservation verified in daily view' },
    ],
    relatedProcedures: ['bedlink-check-new-reservations'],
  },
  {
    id: 'spinal-extending-reservations',
    slug: 'extending-guest-reservations',
    department: 'spinal',
    title: 'Extending guest reservations',
    description: 'Extend an existing guest reservation directly in Spinal.',
    keywords: ['extend', 'reservation', 'spinal', 'dates'],
    estimatedDuration: '5 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-21',
    prerequisites: ['Access to Spinal.'],
    introduction: 'When a guest extends their stay, the departure date must be updated in Spinal so availability and housekeeping are kept accurate.',
    steps: [
      { title: 'Locate the reservation', description: 'Find the reservation in Spinal by guest name or number.', images: [{ src: img('extending-guest-reservations', 1), alt: 'Find reservation', caption: 'Finding the reservation' }] },
      { title: 'Update departure date', description: 'Change the check-out date to the new date. Press the button to add the extension days, then save.', images: [{ src: img('extending-guest-reservations', 2), alt: 'Update departure date', caption: 'Updating departure date' }], callouts: [{ type: 'warning', content: 'Check room availability for the extended nights.' }, { type: 'important', content: 'Press the button to add the extension days before saving.' }] },
    ],
    notes: ['Confirm room availability for the extended nights before saving.'],
    commonMistakes: ['Extending without checking availability.', 'Forgetting to save the new date.'],
    troubleshooting: [
      { problem: 'New date not saved', solution: 'Ensure the extension button was pressed before saving.' },
    ],
    checklist: [
      { id: 'c1', label: 'Reservation located' },
      { id: 'c2', label: 'Departure date updated' },
    ],
    relatedProcedures: ['spinal-daily-checkins-checkouts'],
  },
  {
    id: 'spinal-daily-checkins-checkouts',
    slug: 'daily-check-ins-check-outs',
    department: 'spinal',
    title: 'Managing Daily Check-ins & Check-outs',
    description: 'Process guest arrivals and departures for the current day in Spinal.',
    keywords: ['check-in', 'check-out', 'daily', 'spinal'],
    estimatedDuration: '15-30 min',
    difficulty: 'Intermediate',
    lastUpdated: '2026-11-21',
    prerequisites: ['Spinal access', "Today's reservation list"],
    introduction: 'Daily check-ins and check-outs are processed in Spinal to keep room status and guest records accurate for the day.',
    steps: [
      { title: 'Open daily view', description: 'Open the daily check-in/check-out view from the button.', images: [{ src: img('daily-check-ins-check-outs', 1), alt: 'Daily view', caption: 'Daily view' }] },
      { title: 'Verify check-ins', description: 'Review and verify the arriving guests for the day.', images: [{ src: img('daily-check-ins-check-outs', 2), alt: 'Verify check-ins', caption: 'Verifying check-ins' }], callouts: [{ type: 'important', content: 'Confirm ID and payment before check-in.' }] },
      { title: 'Verify check-outs', description: 'Review and verify the departing guests for the day.', images: [{ src: img('daily-check-ins-check-outs', 3), alt: 'Verify check-outs', caption: 'Verifying check-outs' }], callouts: [{ type: 'warning', content: 'Follow no-show policy before releasing rooms.' }] },
    ],
    notes: ['Flag no-shows according to policy before releasing rooms.'],
    commonMistakes: ['Processing a check-in without verifying payment.', 'Forgetting to flag no-shows.'],
    troubleshooting: [
      { problem: 'Guest not in daily view', solution: 'Check filters and search by reservation number.' },
    ],
    checklist: [
      { id: 'c1', label: 'All arrivals processed' },
      { id: 'c2', label: 'All departures processed' },
      { id: 'c3', label: 'No-shows flagged' },
    ],
    relatedProcedures: ['front-desk-guest-check-in', 'front-desk-guest-check-out'],
  },
];
