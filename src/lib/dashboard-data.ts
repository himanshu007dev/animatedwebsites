export type SetEntry = {
  id: string
  label: string
  target: string
  done: boolean
}

export const todaySession = {
  title: 'Lower — Heavy Squat',
  block: 'Block 3 · Week 2',
  duration: '62 min',
  sets: [
    { id: 's1', label: 'Back squat', target: '5 × 3 @ 140kg', done: true },
    { id: 's2', label: 'Pause squat', target: '3 × 5 @ 105kg', done: true },
    {
      id: 's3',
      label: 'Romanian deadlift',
      target: '4 × 8 @ 110kg',
      done: false,
    },
    { id: 's4', label: 'Walking lunge', target: '3 × 20 steps', done: false },
    { id: 's5', label: 'Hanging leg raise', target: '3 × 12', done: false },
  ] as SetEntry[],
}

export const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']

export const volumeByWeek: Record<string, { day: string; value: number }[]> = {
  'Week 1': [
    { day: 'Mon', value: 8.2 },
    { day: 'Tue', value: 4.1 },
    { day: 'Wed', value: 0 },
    { day: 'Thu', value: 9.4 },
    { day: 'Fri', value: 6.0 },
    { day: 'Sat', value: 11.2 },
    { day: 'Sun', value: 0 },
  ],
  'Week 2': [
    { day: 'Mon', value: 9.6 },
    { day: 'Tue', value: 5.2 },
    { day: 'Wed', value: 2.4 },
    { day: 'Thu', value: 10.8 },
    { day: 'Fri', value: 7.1 },
    { day: 'Sat', value: 12.6 },
    { day: 'Sun', value: 0 },
  ],
  'Week 3': [
    { day: 'Mon', value: 11.1 },
    { day: 'Tue', value: 6.4 },
    { day: 'Wed', value: 3.0 },
    { day: 'Thu', value: 12.2 },
    { day: 'Fri', value: 8.4 },
    { day: 'Sat', value: 13.9 },
    { day: 'Sun', value: 1.2 },
  ],
  'Week 4': [
    { day: 'Mon', value: 6.0 },
    { day: 'Tue', value: 3.2 },
    { day: 'Wed', value: 0 },
    { day: 'Thu', value: 5.8 },
    { day: 'Fri', value: 4.0 },
    { day: 'Sat', value: 7.4 },
    { day: 'Sun', value: 0 },
  ],
}

export const rings = [
  { label: 'Volume', value: 78, unit: '%' },
  { label: 'Intensity', value: 64, unit: '%' },
  { label: 'Recovery', value: 91, unit: '%' },
]

export const personalRecords = [
  { lift: 'Back squat', value: '165kg', delta: '+7.5kg', when: '12 days ago' },
  { lift: 'Deadlift', value: '205kg', delta: '+5kg', when: '3 weeks ago' },
  { lift: 'Bench press', value: '115kg', delta: '+2.5kg', when: '5 weeks ago' },
  {
    lift: 'Strict press',
    value: '72.5kg',
    delta: '+2.5kg',
    when: '6 weeks ago',
  },
]

export const recentSessions = [
  {
    name: 'Upper — Press focus',
    date: 'Yesterday',
    tonnage: '9.6t',
    rpe: '7.5',
  },
  { name: 'Engine — Zone 2', date: 'Tue', tonnage: '—', rpe: '5.0' },
  { name: 'Lower — Volume', date: 'Mon', tonnage: '12.4t', rpe: '8.0' },
  { name: 'Mobility flow', date: 'Sun', tonnage: '—', rpe: '3.0' },
]
