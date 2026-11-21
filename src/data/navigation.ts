import type { NavGroup, DepartmentMeta } from '../types/documentation';

export const departments: DepartmentMeta[] = [
  {
    id: 'bedlink',
    label: 'BEDLINK',
    path: 'bedlink',
    description: 'Reservations, room rates and guest messaging via Bedlink.',
    icon: 'BedDouble',
  },
  {
    id: 'spinal',
    label: 'SPINAL',
    path: 'spinal',
    description: 'Daily operations, check-ins, check-outs and reservation management.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'front-desk',
    label: 'FRONT DESK',
    path: 'front-desk',
    description: 'Guest services, payments, keys, communication and rentals.',
    icon: 'ConciergeBell',
  },
  {
    id: 'inmigration',
    label: 'INMIGRATION',
    path: 'inmigration',
    description: 'Immigration procedures and guest registration.',
    icon: 'FileText',
  },
  {
    id: 'cleaning',
    label: 'CLEANING',
    path: 'cleaning',
    description: 'Room turnover, cleaning standards and hostel preparation.',
    icon: 'Sparkles',
  },
];

export const navigation: NavGroup[] = [
  {
    id: 'bedlink',
    title: 'BEDLINK',
    department: 'bedlink',
    items: [
      { id: 'bedlink-check-new-reservations', title: 'Check new reservations', slug: 'check-new-reservations', department: 'bedlink' },
      { id: 'bedlink-cancel-reservations', title: 'Cancel reservations', slug: 'cancel-reservations', department: 'bedlink' },
      { id: 'bedlink-responding-guest-messages', title: 'Responding to guest messages', slug: 'responding-to-guest-messages', department: 'bedlink' },
      { id: 'bedlink-check-room-rates-availability', title: 'Check room rates and availability', slug: 'check-room-rates-and-availability', department: 'bedlink' },
    ],
  },
  {
    id: 'spinal',
    title: 'SPINAL',
    department: 'spinal',
    items: [
      { id: 'spinal-dashboard-overview', title: 'Spinal dashboard overview', slug: 'spinal-dashboard-overview', department: 'spinal' },
      { id: 'spinal-importing-reservations', title: 'Importing reservations into Spinal', slug: 'importing-reservations-into-spinal', department: 'spinal' },
      { id: 'spinal-extending-reservations', title: 'Extending guest reservations', slug: 'extending-guest-reservations', department: 'spinal' },
      { id: 'spinal-daily-checkins-checkouts', title: 'Managing Daily Check-ins & Check-outs', slug: 'daily-check-ins-check-outs', department: 'spinal' },
    ],
  },
  {
    id: 'front-desk',
    title: 'FRONT DESK',
    department: 'front-desk',
    items: [
      { id: 'fd-guest-check-in', title: 'Guest check in procedure', slug: 'guest-check-in', department: 'front-desk' },
      { id: 'fd-guest-check-out', title: 'Guest check out and early check out', slug: 'guest-check-out-early-check-out', department: 'front-desk' },
      { id: 'fd-stripe-payment-links', title: 'Creating stripe Payment links', slug: 'creating-stripe-payment-links', department: 'front-desk' },
      { id: 'fd-guest-profiles-contracts-keys', title: 'Managing Guest profiles, contracts and keys', slug: 'managing-guest-profiles-contracts-keys', department: 'front-desk' },
      { id: 'fd-renting-motorbikes', title: 'Renting motorbikes to guests', slug: 'renting-motorbikes-to-guests', department: 'front-desk' },
      { id: 'fd-managing-payment-cards', title: 'Managing payment cards', slug: 'managing-payment-cards', department: 'front-desk' },
      { id: 'fd-purchase-vouchers-cash', title: 'Managing purchase vouchers and cash', slug: 'managing-purchase-vouchers-cash', department: 'front-desk' },
    ],
  },
  {
    id: 'inmigration',
    title: 'INMIGRATION',
    department: 'inmigration',
    items: [
      { id: 'inm-tm30-guest', title: 'TM30 guest', slug: 'tm30-guest', department: 'inmigration' },
    ],
  },
  {
    id: 'cleaning',
    title: 'CLEANING',
    department: 'cleaning',
    items: [
      { id: 'cl-room-cleaning-turnover', title: 'Room cleaning and checkout turnover', slug: 'room-cleaning-check-out-turnover', department: 'cleaning' },
      { id: 'cl-morning-preparation', title: 'Morning hostel preparation', slug: 'morning-hostel-preparation', department: 'cleaning' },
    ],
  },
];
