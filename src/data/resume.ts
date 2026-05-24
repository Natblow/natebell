export const siteMetadata = {
  name: 'Nathan Bellow',
  title: 'Software Engineer',
  email: 'nate@bellowmedia.com',
  phone: '(514) 709-0835',
  location: 'Montréal, QC',
  linkedin: 'https://linkedin.com/in/nathanbellow',
  github: 'https://github.com/Natblow',
  resumePath: '/resume.pdf',
} as const

export interface SkillGroup {
  id: string
  labelKey: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    labelKey: 'skills.groups.languages',
    items: ['Ruby', 'JavaScript/TypeScript', 'SQL', 'Elixir', 'C', 'Java', 'PHP'],
  },
  {
    id: 'frameworks',
    labelKey: 'skills.groups.frameworks',
    items: ['Ruby on Rails', 'Sinatra', 'Rack', 'Vue.js', 'React', 'Phoenix'],
  },
  {
    id: 'infra',
    labelKey: 'skills.groups.infra',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'AWS', 'Docker', 'CI/CD', 'Heroku', 'Render', 'Fly.io'],
  },
  {
    id: 'practices',
    labelKey: 'skills.groups.practices',
    items: ['System Design', 'Code Review', 'Agile / Scrum', 'Pair Programming', 'Performance Profiling'],
  },
]

export interface EducationEntry {
  id: string
  period: string
  institution: string
  programKey: string
  locationKey: string
  url: string
}

export const education: EducationEntry[] = [
  {
    id: 'openclassrooms',
    period: 'Jan 2020 – Apr 2022',
    institution: 'OpenClassrooms University',
    programKey: 'education.openclassrooms.program',
    locationKey: 'education.openclassrooms.location',
    url: 'https://openclassrooms.com',
  },
]

export interface ExperienceEntry {
  id: string
  company: string
  location?: string
  locationKey?: string
  positionKey: string
  period: string
  highlightKeys: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'cocooning',
    company: 'Cocooning Finance',
    location: 'Laval, QC',
    positionKey: 'experience.cocooning.position',
    period: 'Oct 2024 – Present',
    highlightKeys: [
      'experience.cocooning.h1',
      'experience.cocooning.h2',
      'experience.cocooning.h3',
    ],
  },
  {
    id: 'illuxi',
    company: 'Illuxi',
    location: 'Montréal, QC',
    positionKey: 'experience.illuxi.position',
    period: 'Apr 2022 – Sep 2024',
    highlightKeys: [
      'experience.illuxi.h1',
      'experience.illuxi.h2',
      'experience.illuxi.h3',
      'experience.illuxi.h4',
    ],
  },
  {
    id: 'agency-of-learning',
    company: 'Agency of Learning',
    locationKey: 'experience.remote',
    positionKey: 'experience.agency.position',
    period: 'Nov 2023 – Feb 2024',
    highlightKeys: ['experience.agency.h1'],
  },
  {
    id: 'bellow-media',
    company: 'Bellow Media',
    location: 'Montréal, QC',
    positionKey: 'experience.bellow.position',
    period: '2019 – 2022',
    highlightKeys: ['experience.bellow.h1', 'experience.bellow.h2'],
  },
]

export const communityItems = [
  { id: 'conferences', key: 'community.conferences' },
  { id: 'mentor', key: 'community.mentor' },
] as const
