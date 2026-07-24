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
    name: 'Magistri Dev',
    position: 'Founder & Consultant',
    startDate: '2024-01-01',
    summary:
      'Independent practice owning technical delivery and client relationship management—from sales conversation through implementation and ongoing support.',
    highlights: [
      'Sourced, scoped, and delivered an enterprise CRM for a DMCA enforcement company—owning the full engagement from initial sales through technical implementation and handoff.',
      'Deployed Retail AI to streamline customer service workflows for medical practices, configuring LLM-based tooling against live environments and iterating with non-technical stakeholders.',
      'Build and deliver custom web and mobile applications end-to-end across industries, maintaining post-launch relationships for support, iteration, and account expansion.',
      'Operate at the intersection of technical delivery and client relationship management—handling scoping, project communication, and outcome accountability without a support layer.',
      'Built client solutions with TypeScript, React, Node.js, PostgreSQL, AWS, and Google Cloud, owning architecture, development, and GitHub Actions CI/CD end-to-end.',
      'Managed up to five concurrent client projects, balancing delivery timelines, relationships, and technical execution.',
    ],
  },
  {
    name: 'The Creative Bomb',
    position: 'Solutions Engineer',
    startDate: '2024-09-01',
    endDate: '2026-03-01',
    summary:
      'Customer-facing technologist supporting sales and delivery for an early-stage product company (remote, Miami FL).',
    highlights: [
      'Built functional prototypes to support sales and conducted live product demos that translated early-stage features into customer-ready presentations.',
      'Resolved bugs and iterated on live custom solutions in production—owning issues end-to-end from triage through resolution.',
      'Built and maintained AI-assisted workflows with Claude Code, GitHub Copilot, and Cursor to automate repetitive work across engineering and customer-facing efforts.',
      'Owned end-to-end delivery of customer-facing web and mobile apps with React, React Native, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL.',
      'Architected payment infrastructure via Stripe and RevenueCat, including subscription lifecycle management and event-driven backend processing.',
      'Championed production observability with Sentry—alerting, error triage, and performance profiling to resolve issues before they impacted customers.',
      'Designed and maintained CI/CD pipelines with GitHub Actions and Expo EAS for lower overhead and zero-downtime releases.',
    ],
  },
  {
    name: '2U Inc.',
    position: 'Software Engineer',
    url: 'https://2u.com',
    startDate: '2020-07-01',
    endDate: '2024-05-01',
    summary:
      'Enterprise SaaS engineering on high-traffic education platforms, partnering with product and stakeholders on scalable features.',
    highlights: [
      'Collaborated with product managers, designers, and business stakeholders to translate requirements into scalable technical architectures.',
      'Built and integrated with external APIs, third-party systems, and imperfect data sources under real-world constraints.',
      'Led company-wide Datadog observability rollout—drove adoption across teams, authored documentation, and reduced MTTR by 30%.',
      'Delivered high-impact enterprise SaaS features end-to-end with React, TypeScript, Golang, Node.js, and PostgreSQL.',
      'Performed research and authored ATAMs (Architecture Tradeoff Analysis Method) to evaluate infrastructure, technology, and tooling decisions.',
      'Designed and built Golang microservices supporting high-traffic, customer-facing platforms with reliability and performance under load.',
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
      'Owned end-to-end success of 300+ engineers navigating complex technical coursework—onboarding, adoption, and outcomes.',
      'Built working prototypes and delivered live technical presentations that turned abstract concepts into hands-on learning.',
      'Developed help content, documentation, and instructional materials that scaled individual support into self-serve cohort resources.',
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
  {
    name: 'Live Events',
    position: 'Emcee',
    startDate: '2013-01-01',
    summary:
      'Weddings, bar/bat mitzvahs, and corporate events—hosting 100+ live events over 13 years.',
    highlights: [
      'Set the tone, energized rooms, and guided event flow from first moment to last—creating memorable audience experiences.',
    ],
  },
];

export default work;
