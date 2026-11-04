import type { Procedure } from '../../types/documentation';

const img = (slug: string, n: number) =>
  `/images/cleaning/${slug}-step-${String(n).padStart(2, '0')}.png`;

export const cleaningProcedures: Procedure[] = [
  {
    id: 'cl-room-cleaning-turnover',
    slug: 'room-cleaning-check-out-turnover',
    department: 'cleaning',
    title: 'Room Cleaning & Check-out Turnover',
    description: 'Clean and prepare rooms after guest check-out for the next arrival.',
    keywords: ['cleaning', 'turnover', 'room', 'check-out'],
    estimatedDuration: '20-30 min per room',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-04',
    prerequisites: ['Cleaning supplies', 'Room access'],
    introduction: 'PLACEHOLDER: Real steps and standards to be added.',
    steps: [
      { title: 'Inspect room', description: 'Check for damage and leftover items.', images: [{ src: img('room-cleaning-check-out-turnover', 1), alt: 'Inspection', caption: 'Screenshot pending' }] },
      { title: 'Remove linens and trash', description: 'Strip bed and remove all waste.' },
      { title: 'Clean surfaces and bathroom', description: 'Disinfect and clean all surfaces.', callouts: [{ type: 'important', content: 'Follow cleaning chemical safety guidelines.' }] },
      { title: 'Make bed and restock', description: 'Make bed with fresh linens and restock amenities.' },
      { title: 'Final inspection', description: 'Verify room meets standards and mark ready.', images: [{ src: img('room-cleaning-check-out-turnover', 2), alt: 'Final', caption: 'Screenshot pending' }] },
    ],
    checklist: [
      { id: 'c1', label: 'Linens changed' },
      { id: 'c2', label: 'Bathroom cleaned' },
      { id: 'c3', label: 'Room inspected and marked ready' },
    ],
    relatedProcedures: ['fd-guest-check-out', 'cl-morning-preparation'],
  },
  {
    id: 'cl-morning-preparation',
    slug: 'morning-hostel-preparation',
    department: 'cleaning',
    title: 'Morning Hostel Preparation',
    description: 'Prepare common areas and facilities for the day.',
    keywords: ['morning', 'preparation', 'cleaning', 'hostel'],
    estimatedDuration: '30-45 min',
    difficulty: 'Beginner',
    lastUpdated: '2026-11-04',
    prerequisites: ['Cleaning supplies'],
    introduction: 'PLACEHOLDER: Real steps to be added.',
    steps: [
      { title: 'Common areas', description: 'Clean lobby, kitchen and shared spaces.', images: [{ src: img('morning-hostel-preparation', 1), alt: 'Common areas', caption: 'Screenshot pending' }] },
      { title: 'Restock supplies', description: 'Refill toiletries, paper and cleaning materials.' },
      { title: 'Check facilities', description: 'Ensure Wi-Fi, locks and equipment work.', callouts: [{ type: 'tip', content: 'Report maintenance issues immediately.' }] },
      { title: 'Final walkthrough', description: 'Walk through hostel and confirm readiness.' },
    ],
    checklist: [
      { id: 'c1', label: 'Common areas cleaned' },
      { id: 'c2', label: 'Supplies restocked' },
      { id: 'c3', label: 'Facilities checked' },
    ],
    relatedProcedures: ['cl-room-cleaning-turnover'],
  },
];
