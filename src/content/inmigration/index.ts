import type { Procedure } from '../../types/documentation';

const img = (slug: string, n: number) =>
  `/images/inmigration/${slug}-step-${String(n).padStart(2, '0')}.png`;

export const inmigrationProcedures: Procedure[] = [
  {
    id: 'inm-tm30-guest',
    slug: 'tm30-guest',
    department: 'inmigration',
    title: 'TM30 guest',
    description: 'Register guest arrival with immigration using the TM30 form.',
    keywords: ['tm30', 'immigration', 'guest', 'registration'],
    estimatedDuration: '10-15 min',
    difficulty: 'Intermediate',
    lastUpdated: '2026-11-21',
    prerequisites: ['Guest passport details', 'Access to the immigration system'],
    introduction: 'Guest arrivals must be registered with immigration through the TM30 form within the required timeframe. The passport photo is collected during check-in and sent to the immigration group.',
    steps: [
      { title: 'Collect guest details', description: 'Gather passport and arrival information from the guest.', images: [{ src: img('tm30-guest', 1), alt: 'Guest details', caption: 'Collecting guest details' }] },
      { title: 'Open TM30 form', description: 'Navigate to the TM30 registration screen.', images: [{ src: img('tm30-guest', 2), alt: 'TM30 form', caption: 'TM30 form' }] },
      { title: 'Enter and submit', description: 'Fill in the form and submit to immigration.', callouts: [{ type: 'important', content: 'Verify all details before submitting.' }] },
    ],
    notes: ['Submit within the required timeframe after guest arrival.'],
    commonMistakes: ['Submitting with incorrect passport details.', 'Missing the submission deadline.'],
    troubleshooting: [
      { problem: 'Form rejected', solution: 'Check the details and resubmit.' },
    ],
    relatedProcedures: ['front-desk-guest-check-in'],
  },
];
