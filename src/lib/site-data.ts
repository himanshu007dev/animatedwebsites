export type Program = {
  id: string
  name: string
  tagline: string
  sessions: string
  focus: string
}

export const programs: Program[] = [
  {
    id: 'strength',
    name: 'Strength',
    tagline: 'Absolute force. Barbell first, ego last.',
    sessions: '4 sessions / week',
    focus: 'Squat · Bench · Deadlift · Press',
  },
  {
    id: 'hypertrophy',
    name: 'Hypertrophy',
    tagline: 'Tissue built through volume you can actually recover from.',
    sessions: '5 sessions / week',
    focus: 'Progressive overload blocks',
  },
  {
    id: 'conditioning',
    name: 'Conditioning',
    tagline: 'Engine work that carries into every other lift.',
    sessions: '3 sessions / week',
    focus: 'Intervals · Zone 2 · Sled',
  },
  {
    id: 'mobility',
    name: 'Mobility',
    tagline: 'Range you own, not range you borrow.',
    sessions: 'Daily 12 min',
    focus: 'Hips · T-spine · Ankles',
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    tagline: 'Lift heavy on Monday, run long on Sunday.',
    sessions: '6 sessions / week',
    focus: 'Strength + endurance periodisation',
  },
]

export type Coach = {
  name: string
  role: string
  detail: string
  stat: string
}

export const coaches: Coach[] = [
  {
    name: 'Mara Ellison',
    role: 'Head of Strength',
    detail: '11 years coaching powerlifters. Built 40+ national qualifiers.',
    stat: '205kg DL',
  },
  {
    name: 'Dane Oyelaran',
    role: 'Performance Lead',
    detail: 'Ex pro rugby S&C. Specialises in return-to-load programming.',
    stat: '9 yrs pro S&C',
  },
  {
    name: 'Iker Ruiz',
    role: 'Conditioning Coach',
    detail: 'Endurance physiologist. Designs every engine block in the app.',
    stat: '2:31 marathon',
  },
]

export const testimonials = [
  {
    quote:
      "Six months in and I've added 60kg to my total without a single missed week from injury. The programming is unreasonably good.",
    name: 'Priya N.',
    meta: 'Member since 2024',
  },
  {
    quote:
      "The dashboard is the first tracker I've actually kept using. It tells me what to do, then shows me it worked.",
    name: 'Tom B.',
    meta: 'Hybrid track',
  },
]

export const tiers = [
  {
    name: 'Core',
    price: 'INR2900',
    period: '/ month',
    blurb: 'Full programme library and the training dashboard.',
    features: [
      'All 5 training tracks',
      'Adaptive weekly volume',
      'Progress dashboard',
      'Form video library',
    ],
    highlight: false,
  },
  {
    name: 'Signature',
    price: 'INR8900',
    period: '/ month',
    blurb: 'Everything in Core plus a coach in your corner.',
    features: [
      'Everything in Core',
      '1:1 coach, weekly check-ins',
      'Form review within 24h',
      'Custom deload planning',
      'Nutrition framework',
    ],
    highlight: true,
  },
]
