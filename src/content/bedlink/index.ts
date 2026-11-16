import type { Procedure } from '../../types/documentation';

const img = (slug: string, n: number) =>
  `/images/bedlink/${slug}-step-${String(n).padStart(2, '0')}.png`;

export const bedlinkProcedures: Procedure[] = [
  {
    id: 'bedlink-checking-reservations',
    slug: 'checking-reservations',
    department: 'bedlink',
    title: 'Checking reservations',
    description: 'Review and verify reservations in Bedlink before importing or acting on them.',
    keywords: ['bedlink', 'reservations', 'checking', 'verify'],
    estimatedDuration: '5-10 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-16',
    prerequisites: ['Access to the Bedlink extranet with receptionist permissions.'],
    introduction: 'PLACEHOLDER: Replace with real steps and screenshots.',
    steps: [
      { title: 'Open Bedlink reservations', description: 'Log into Bedlink and navigate to the reservations list.', images: [{ src: img('checking-reservations', 1), alt: 'Reservations list', caption: 'Screenshot pending' }] },
      { title: 'Filter and search', description: 'Filter by date, status or guest name to find the relevant reservation.' },
      { title: 'Verify details', description: 'Check guest name, dates, room type and number of guests.', callouts: [{ type: 'important', content: 'Confirm details before importing into Spinal.' }] },
    ],
    checklist: [
      { id: 'c1', label: 'Reservation located' },
      { id: 'c2', label: 'Details verified' },
    ],
    relatedProcedures: ['spinal-importing-reservations-into-spinal'],
  },
  {
    id: 'bedlink-checking-room-rates',
    slug: 'checking-room-rates',
    department: 'bedlink',
    title: 'Checking room rates',
    description: 'Verify current room rates in Bedlink before quoting or adjusting prices.',
    keywords: ['rates', 'prices', 'bedlink', 'rooms'],
    estimatedDuration: '3 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-16',
    prerequisites: ['Access to Bedlink.'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Open rate overview', description: 'Navigate to the rates section in Bedlink.', images: [{ src: img('checking-room-rates', 1), alt: 'Rates', caption: 'Screenshot pending' }] },
      { title: 'Select room type and dates', description: 'Choose the room type and date range to review.' },
      { title: 'Confirm current rate', description: 'Verify the displayed rate matches the published price list.', callouts: [{ type: 'important', content: 'Do not quote rates not present in Bedlink.' }] },
    ],
    checklist: [{ id: 'c1', label: 'Rate verified for selected dates' }],
    relatedProcedures: [],
  },
  {
    id: 'bedlink-responding-guest-messages',
    slug: 'responding-to-guest-messages',
    department: 'bedlink',
    title: 'Responding to guest messages',
    description: 'Reply to guest messages received through Bedlink channels.',
    keywords: ['messages', 'guest', 'bedlink', 'communication'],
    estimatedDuration: '5-10 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-16',
    prerequisites: ['Access to Bedlink messaging.'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Open messages inbox', description: 'Navigate to the messages section in Bedlink.', images: [{ src: img('responding-to-guest-messages', 1), alt: 'Inbox', caption: 'Screenshot pending' }] },
      { title: 'Select a conversation', description: 'Open the guest conversation to read the full thread.' },
      { title: 'Compose reply', description: 'Write a clear, polite response addressing the guest request.' },
      { title: 'Send and log', description: 'Send the message and note any follow-up actions.', callouts: [{ type: 'tip', content: 'Use saved replies for common questions.' }] },
    ],
    checklist: [
      { id: 'c1', label: 'Message read' },
      { id: 'c2', label: 'Reply sent' },
      { id: 'c3', label: 'Follow-up noted' },
    ],
    relatedProcedures: [],
  },
];
