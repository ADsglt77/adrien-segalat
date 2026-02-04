export interface TimelineItem {
  date: string
  organization: string
  role?: string
  description?: string
  type: 'formation' | 'work'
}

export const timelineData: TimelineItem[] = [
  {
    date: '2020/2023',
    organization: 'Lycée Turgot (Limoges)',
    role: 'Seconde (option SI-CIT), Première (Maths/NSI/Physique-Chimie), Terminale (Maths/NSI)',
    description: 'Baccalauréat général mention Très Bien',
    type: 'formation',
  },
  {
    date: 'Mars 2020',
    organization: 'Police Nationale',
    role: 'Stage de trois jours',
    type: 'work',
  },
  {
    date: 'Juin 2021',
    organization: 'Flexocolor',
    role: "Stage d'une semaine",
    description:
      'Photogravure, découverte métier + journée avec gestionnaire informatique + responsable site web',
    type: 'work',
  },
  {
    date: '2023/2024',
    organization: 'Lycée Valadon (Limoges)',
    role: 'BTS SIO (Services Informatiques aux Organisations)',
    description: 'Option "Certification"',
    type: 'formation',
  },
  {
    date: 'Mai/Juin 2024',
    organization: 'Broussaud Textile',
    role: 'Stage de cinq semaines',
    description: 'Symfony/PHP, migration API REST vers GraphQL, découverte rôle dev en entreprise',
    type: 'work',
  },
  {
    date: 'Depuis Mai 2024',
    organization: 'Super U (Aixe-Sur-Vienne / Limoges)',
    role: 'Job étudiant (Grande surface)',
    type: 'work',
  },
  {
    date: 'Janvier/Février 2025',
    organization: 'Condat Basket Club',
    role: 'Stage de sept semaines',
    description: 'Site vitrine + dashboard, NuxtJS/Vue/TypeScript/Prisma',
    type: 'work',
  },
]
