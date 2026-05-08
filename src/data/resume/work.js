/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string|undefined} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'The Creative Bomb',
    position: 'Solutions Engineer',
    startDate: '2024-09-01',
    summary:
      'Customer-facing technologist partnering with Sales across the full deal cycle for an early-stage product company (remote, Miami FL).',
    highlights: [
      'Partner with Sales on discovery, solution positioning, and deal strategy with strong technical credibility.',
      'Deliver live demos, proof-of-concepts, and tailored walkthroughs that translate early-stage features into customer-ready narratives.',
      'Resolve bugs and iterate on live custom solutions in production—triage through resolution end-to-end.',
      'Build AI-assisted workflows with Claude Code, GitHub Copilot, and Cursor to automate work and improve consistency.',
      'Ship customer-facing web and mobile apps with React, React Native, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL.',
      'Architect Stripe and RevenueCat payment flows, including subscriptions and event-driven backend processing.',
      'Drive observability with Sentry—alerting, error triage, and performance profiling.',
      'Maintain CI/CD with GitHub Actions and Expo EAS for reliable, low-overhead releases.',
    ],
  },
  {
    name: 'Magistri Dev',
    position: 'Founder & Consultant',
    startDate: '2024-01-01',
    summary:
      'Independent practice owning sales through delivery—business development, engineering, and ongoing client technical support.',
    highlights: [
      'Run the full sales and implementation lifecycle from prospecting and discovery through delivery and support.',
      'Delivered a custom CRM for The Takedown (DMCA enforcement)—sole point of contact from deal to deployment.',
      'Guide clients on LLM APIs, agentic frameworks, and integration patterns to pick the right AI tools.',
      'Managed up to five concurrent client projects across timelines, relationships, and execution.',
      'Built solutions with TypeScript, React, Node.js, PostgreSQL, AWS, and Google Cloud end-to-end.',
    ],
  },
  {
    name: '2U Inc.',
    position: 'Software Engineer',
    url: 'https://2u.com',
    startDate: '2020-07-01',
    endDate: '2024-05-01',
    summary:
      'Enterprise SaaS engineering on edX-connected platforms, partnering with product and stakeholders on scalable features.',
    highlights: [
      'Translated business requirements into scalable architectures with PMs, designers, and stakeholders.',
      'Led Datadog observability rollout—documentation and adoption across teams; reduced mean time to resolution (MTTR) by about 30%.',
      'Shipped high-impact features with React, TypeScript, Golang, Node.js, and PostgreSQL.',
      'Built Salesforce Lightning Web Components (LWC) with Apex for internal workflows and integrated systems of record.',
      'Authored ATAMs (Architecture Tradeoff Analysis Method) for infrastructure and tooling decisions.',
      'Designed and built Golang microservices for high-traffic, customer-facing platforms with reliability and performance focus.',
    ],
  },
  {
    name: 'University of Washington',
    position: 'Lead Instructor',
    url: 'https://www.washington.edu/',
    startDate: '2018-07-01',
    endDate: '2020-07-01',
    summary:
      'Instruction and mentorship for large cohorts in full stack web development (Coding Bootcamp).',
    highlights: [
      'Owned outcomes for 300+ engineers navigating complex technical coursework—onboarding, adoption, and completion.',
      'Built prototypes and delivered live technical presentations that turned abstract concepts into hands-on learning.',
      'Scaled support with help content, documentation, and instructional materials for self-serve cohort success.',
    ],
  },
  {
    name: 'Verizon & TEKsystems',
    position: 'Account Executive & Technical Recruiter',
    startDate: '2013-01-01',
    endDate: '2018-06-01',
    summary:
      'B2B enterprise sales, quota attainment, client relationship management, and technical talent acquisition—foundation for customer-facing technical roles.',
    highlights: [
      'Direct customer ownership, high-volume outreach, and relationship-driven retention prior to engineering-focused positions.',
    ],
  },
];

export default work;
