const skills = [
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React Native',
    competency: 4,
    category: ['Javascript', 'Mobile Development'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Backend Engineering', 'Javascript'],
  },
  {
    title: 'Express.js',
    competency: 3,
    category: ['Backend Engineering', 'Javascript'],
  },
  {
    title: 'Golang',
    competency: 3,
    category: ['Backend Engineering', 'Languages'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Salesforce (LWC & Apex)',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Web Development', 'DevOps'],
  },
  {
    title: 'Google Cloud',
    competency: 3,
    category: ['Web Development', 'DevOps'],
  },
  {
    title: 'Datadog',
    competency: 3,
    category: ['Web Development', 'DevOps'],
  },
  {
    title: 'Sentry',
    competency: 3,
    category: ['Web Development', 'DevOps'],
  },
  {
    title: 'GitHub Actions / CI-CD',
    competency: 3,
    category: ['Web Development', 'DevOps'],
  },
  {
    title: 'Stripe & RevenueCat',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'AI-assisted development (Cursor, Copilot, Claude)',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#2d8a6e',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
