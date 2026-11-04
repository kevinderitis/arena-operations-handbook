import type { NavGroup, DepartmentMeta } from '../types/documentation';

export const departments: DepartmentMeta[] = [
  {
    id: 'bed24',
    label: 'BED24',
    path: 'bed24',
    description: 'Reservation import, availability, rates and guest messaging.',
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
    id: 'cleaning',
    label: 'CLEANING',
    path: 'cleaning',
    description: 'Room turnover, cleaning standards and hostel preparation.',
    icon: 'Sparkles',
  },
];

export const navigation: NavGroup[] = [
  {
    id: 'bed24',
    title: 'BED24',
    department: 'bed24',
    items: [
      { id: 'bed24-importing-reservations', title: 'Importing Reservations into Spinal', slug: 'importing-reservations', department: 'bed24' },
      { id: 'bed24-extending-reservations', title: 'Extending Guest Reservations', slug: 'extending-guest-reservations', department: 'bed24' },
      { id: 'bed24-checking-rates', title: 'Checking Room Rates', slug: 'checking-room-rates', department: 'bed24' },
      { id: 'bed24-managing-availability', title: 'Managing Room Availability', slug: 'managing-room-availability', department: 'bed24' },
      { id: 'bed24-responding-messages', title: 'Responding to Guest Messages', slug: 'responding-to-guest-messages', department: 'bed24' },
    ],
  },
  {
    id: 'spinal',
    title: 'SPINAL',
    department: 'spinal',
    items: [
      { id: 'spinal-dashboard-overview', title: 'Spinal Dashboard Overview', slug: 'spinal-dashboard-overview', department: 'spinal' },
      { id: 'spinal-daily-checkins-checkouts', title: 'Managing Daily Check-ins & Check-outs', slug: 'daily-check-ins-check-outs', department: 'spinal' },
      { id: 'spinal-managing-views', title: 'Managing Views & Reservation Filters', slug: 'managing-views-reservation-filters', department: 'spinal' },
      { id: 'spinal-understanding-reservations', title: 'Understanding Reservations & Customer Profiles', slug: 'understanding-reservations-customer-profiles', department: 'spinal' },
    ],
  },
  {
    id: 'front-desk',
    title: 'FRONT DESK',
    department: 'front-desk',
    items: [
      { id: 'fd-guest-check-in', title: 'Guest Check-in Procedure', slug: 'guest-check-in', department: 'front-desk' },
      { id: 'fd-guest-check-out', title: 'Guest Check-out & Early Check-out', slug: 'guest-check-out-early-check-out', department: 'front-desk' },
      { id: 'fd-stripe-payment-links', title: 'Creating Stripe Payment Links', slug: 'creating-stripe-payment-links', department: 'front-desk' },
      { id: 'fd-guest-profiles-contracts-keys', title: 'Managing Guest Profiles, Contracts & Keys', slug: 'managing-guest-profiles-contracts-keys', department: 'front-desk' },
      { id: 'fd-communication-no-shows', title: 'Managing Communication Channels & No-shows', slug: 'managing-communication-channels-no-shows', department: 'front-desk' },
      { id: 'fd-renting-motorbikes', title: 'Renting Motorbikes to Guests', slug: 'renting-motorbikes-to-guests', department: 'front-desk' },
      { id: 'fd-managing-payment-cards', title: 'Managing Payment Cards', slug: 'managing-payment-cards', department: 'front-desk' },
      { id: 'fd-purchase-vouchers-cash', title: 'Managing Purchase Vouchers & Cash', slug: 'managing-purchase-vouchers-cash', department: 'front-desk' },
    ],
  },
  {
    id: 'cleaning',
    title: 'CLEANING',
    department: 'cleaning',
    items: [
      { id: 'cl-room-cleaning-turnover', title: 'Room Cleaning & Check-out Turnover', slug: 'room-cleaning-check-out-turnover', department: 'cleaning' },
      { id: 'cl-morning-preparation', title: 'Morning Hostel Preparation', slug: 'morning-hostel-preparation', department: 'cleaning' },
    ],
  },
];
