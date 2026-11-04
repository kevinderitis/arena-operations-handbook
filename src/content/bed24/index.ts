import type { Procedure } from '../../types/documentation';

const img = (slug: string, n: number) =>
  `/images/bed24/${slug}-step-${String(n).padStart(2, '0')}.png`;

export const bed24Procedures: Procedure[] = [
  {
    id: 'bed24-importing-reservations',
    slug: 'importing-reservations',
    department: 'bed24',
    title: 'Importing Reservations into Spinal',
    description:
      'Import new reservations from BED24 into Spinal so they appear in the daily operations dashboard.',
    keywords: ['bed24', 'import', 'reservation', 'spinal', 'sync'],
    estimatedDuration: '5-10 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-04',
    prerequisites: [
      'Access to the BED24 extranet with receptionist permissions.',
      'Access to Spinal with import permissions.',
      'A stable internet connection.',
    ],
    introduction:
      'This procedure explains how to pull new reservations created in BED24 into Spinal. ' +
      'PLACEHOLDER: Replace these steps with the real workflow once screenshots are available.',
    steps: [
      {
        title: 'Open BED24 and locate new reservations',
        description:
          'Log into BED24 and navigate to the reservations list. Filter by the most recent bookings that have not yet been imported.',
        images: [{ src: img('importing-reservations', 1), alt: 'BED24 reservations list', caption: 'Screenshot pending: BED24 reservations list' }],
        callouts: [{ type: 'info', content: 'PLACEHOLDER instruction. Confirm the exact filter with the operations manager.' }],
      },
      {
        title: 'Copy or export the reservation details',
        description:
          'Select the reservation and copy the required guest and booking details, or use the export option if available.',
        images: [{ src: img('importing-reservations', 2), alt: 'Reservation details', caption: 'Screenshot pending' }],
      },
      {
        title: 'Open Spinal import screen',
        description:
          'In Spinal, open the import/reservation entry screen where new reservations are added.',
        images: [{ src: img('importing-reservations', 3), alt: 'Spinal import screen', caption: 'Screenshot pending' }],
      },
      {
        title: 'Enter the reservation data',
        description:
          'Fill in the guest name, dates, room type, number of guests and any notes. Double-check all fields before saving.',
        callouts: [{ type: 'warning', content: 'Always verify arrival and departure dates to avoid overbooking.' }],
      },
      {
        title: 'Save and verify',
        description:
          'Save the reservation and confirm it appears in the Spinal daily view.',
        callouts: [{ type: 'tip', content: 'Cross-check the reservation number against BED24.' }],
      },
    ],
    notes: ['PLACEHOLDER: Add department-specific notes here.'],
    commonMistakes: [
      'Importing the same reservation twice.',
      'Mismatched arrival/departure dates.',
    ],
    troubleshooting: [
      { problem: 'Reservation not appearing in Spinal', solution: 'Refresh the page and check filters; confirm the save succeeded.' },
      { problem: 'Duplicate reservation', solution: 'Search by reservation number before importing.' },
    ],
    checklist: [
      { id: 'c1', label: 'BED24 reservation identified' },
      { id: 'c2', label: 'Data entered in Spinal' },
      { id: 'c3', label: 'Reservation verified in daily view' },
    ],
    relatedProcedures: ['spinal-understanding-reservations', 'spinal-daily-checkins-checkouts'],
  },
  {
    id: 'bed24-extending-reservations',
    slug: 'extending-guest-reservations',
    department: 'bed24',
    title: 'Extending Guest Reservations',
    description: 'Extend an existing guest reservation in BED24 and reflect the change in Spinal.',
    keywords: ['extend', 'reservation', 'bed24', 'dates'],
    estimatedDuration: '5 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-04',
    prerequisites: ['Access to BED24 and Spinal.'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Locate the reservation', description: 'Find the reservation in BED24 by guest name or number.', images: [{ src: img('extending-guest-reservations', 1), alt: 'Find reservation', caption: 'Screenshot pending' }] },
      { title: 'Update departure date', description: 'Change the check-out date to the new date and save.', callouts: [{ type: 'warning', content: 'Check room availability for the extended nights.' }] },
      { title: 'Update Spinal', description: 'Mirror the new departure date in Spinal.', images: [{ src: img('extending-guest-reservations', 2), alt: 'Spinal update', caption: 'Screenshot pending' }] },
      { title: 'Notify housekeeping', description: 'Inform cleaning staff about the changed turnover date.' },
    ],
    checklist: [
      { id: 'c1', label: 'BED24 updated' },
      { id: 'c2', label: 'Spinal updated' },
      { id: 'c3', label: 'Housekeeping notified' },
    ],
    relatedProcedures: ['bed24-managing-availability', 'spinal-daily-checkins-checkouts'],
  },
  {
    id: 'bed24-checking-rates',
    slug: 'checking-room-rates',
    department: 'bed24',
    title: 'Checking Room Rates',
    description: 'Verify current room rates in BED24 before quoting or adjusting prices.',
    keywords: ['rates', 'prices', 'bed24'],
    estimatedDuration: '3 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-04',
    prerequisites: ['Access to BED24.'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Open rate overview', description: 'Navigate to the rates section in BED24.', images: [{ src: img('checking-room-rates', 1), alt: 'Rates', caption: 'Screenshot pending' }] },
      { title: 'Select room type and dates', description: 'Choose the room type and date range to review.' },
      { title: 'Confirm current rate', description: 'Verify the displayed rate matches the published price list.', callouts: [{ type: 'important', content: 'Do not quote rates not present in BED24.' }] },
    ],
    checklist: [{ id: 'c1', label: 'Rate verified for selected dates' }],
    relatedProcedures: ['bed24-managing-availability'],
  },
  {
    id: 'bed24-managing-availability',
    slug: 'managing-room-availability',
    department: 'bed24',
    title: 'Managing Room Availability',
    description: 'Open or close room availability in BED24 for specific dates.',
    keywords: ['availability', 'rooms', 'bed24', 'open', 'close'],
    estimatedDuration: '5 min',
    difficulty: 'Intermediate',
    lastUpdated: '2026-11-04',
    prerequisites: ['Access to BED24 with rate/availability permissions.'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Open availability calendar', description: 'Go to the availability view in BED24.', images: [{ src: img('managing-room-availability', 1), alt: 'Availability', caption: 'Screenshot pending' }] },
      { title: 'Select dates and rooms', description: 'Choose the dates and room types to update.' },
      { title: 'Set availability', description: 'Open or close availability as needed and save.', callouts: [{ type: 'warning', content: 'Closing availability affects online bookings immediately.' }] },
      { title: 'Verify changes', description: 'Confirm the calendar reflects the new status.' },
    ],
    checklist: [
      { id: 'c1', label: 'Dates selected' },
      { id: 'c2', label: 'Availability updated' },
      { id: 'c3', label: 'Changes verified' },
    ],
    relatedProcedures: ['bed24-checking-rates', 'bed24-importing-reservations'],
  },
  {
    id: 'bed24-responding-messages',
    slug: 'responding-to-guest-messages',
    department: 'bed24',
    title: 'Responding to Guest Messages',
    description: 'Reply to guest messages received through BED24 channels.',
    keywords: ['messages', 'guest', 'bed24', 'communication'],
    estimatedDuration: '5-10 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-04',
    prerequisites: ['Access to BED24 messaging.'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Open messages inbox', description: 'Navigate to the messages section in BED24.', images: [{ src: img('responding-to-guest-messages', 1), alt: 'Inbox', caption: 'Screenshot pending' }] },
      { title: 'Select a conversation', description: 'Open the guest conversation to read the full thread.' },
      { title: 'Compose reply', description: 'Write a clear, polite response addressing the guest request.' },
      { title: 'Send and log', description: 'Send the message and note any follow-up actions.', callouts: [{ type: 'tip', content: 'Use saved replies for common questions.' }] },
    ],
    checklist: [
      { id: 'c1', label: 'Message read' },
      { id: 'c2', label: 'Reply sent' },
      { id: 'c3', label: 'Follow-up noted' },
    ],
    relatedProcedures: ['front-desk-managing-communication-channels-no-shows'],
  },
];
