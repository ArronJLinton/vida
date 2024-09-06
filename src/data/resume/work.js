/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: '2U',
    position: 'Software Engineer',
    url: 'https://2u.com',
    startDate: '2020-08-01',
    endDate: '2024-05-01',
    summary: 'Through global online learning platform edX, 2U connects millions of people to high-quality, career-relevant education in partnership with leading universities and industry experts. As a Software Engineer, I worked in a full stack capacity delivering software solutions for student, instructor, and internal staff facing needs.',
    highlights: [
      'Lead the development of an Instructional Staff Portal to streamline scheduling and reporting; this initiative saved the company $100k+ in staff overpayment and generated a revenue stream of $500k.',
      'Significantly increased efficiency by 30% in incident resolution and debugging by implementing DataDog for client (React) and server-side error tracking (Golang and NodeJS), monitoring, and analytics.',
      'Increased visibility in support cases by implementing Photo Upload functionality with AWS S3 and Cognito.',
      'Integrated the Zoom API using websockets to capture real-time data.',
      'Pitched, designed, developed, deployed, and maintained an npm package consoldiating survey functionality across all platforms.',
    ],
  },
  {
    name: 'University of Washington - Seattle',
    position: 'Lead Instructor',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2018-07-01',
    endDate: '2020-07-01',
    summary: 'Delivered content based on fundamentals of Full Stack Development and offered mentorship, support, and guidance for students.',
    highlights: [
      'Successfully graduated 55 students from the inaugural University of Washington Coding Bootcamp.',
      'Worked closely with over 300+ Coding Bootcamp students to build and polish their craft within the Web Development ecosystem.',
      'Collaborated closely with the academic team to maintain and update curriculum according to market trends.',
    ],
  },
  {
    name: 'Munca Technologies',
    position: 'Lead Software Engineer',
    url: 'https://muncatech.com',
    startDate: '2019-04-01',
    endDate: '2020-12-01',
    summary: 'Munca Technologies Inc partners with universities, municipalities and local communities to provide optimal transportation options to enhance well-being, improve affordability, extend outreach, and leverage and extend technology for the betterment of the communities we serve.',
    highlights: [
      'Spearheaded the development of the company\'s greenfield mobile application.',
      'Used React Native to build the iOS and Android application.',
      'Implemented native configurations via Xcode and Android Studio.',
      'Implemented CI/CD with Microsoft AppCenter for managing iOS and Android Build Systems, Analytics, and Testing.',
      'Worked with Apollo Client for interacting with GraphQL API.',
    ],
  },
  {
    name: 'Magistri Dev',
    position: 'Consultant, Software Engineering',
    // url: 'http://enveritas.org',
    startDate: '2017-07-01',
    // endDate: '2018-01-01',
    summary: 'Worked with clients to establish and build their web and mobile presence.',
    highlights: [
      'Delivered a Tow Request mobile application for iOS and Android using React Native, delivering seamless user experiences across both platforms.',
      'Built a custom CRM platform and Customer Dashboard using React.',
      'Integrated third-party services and APIs, including payment gateways (Square API) and social media authentication, enhancing app functionality and user engagement.',
      'Designed and implemented core features such as push notifications, photo upload, and real-time data synchronization using Firebase.',
      'Managed the entire development lifecycle, from initial concept and wireframing to app deployment on the App Store and Google Play Store.',
      'Successfully delivered 2 custom eCommerce platforms using Shopify, which included integrations with Third-Party Distributors.',
    ],
  },
  {
    name: 'Trilogy Education Services',
    position: 'Backend Engineer',
    url: 'https://matroid.com',
    startDate: '2017-06-01',
    endDate: '2017-09-01',
    summary: 'Worked on an internal facing tool for gathering data from public domains.',
    highlights: [
      'Created a Web Scraper using Node, Express, Nightmare.js, and Cheerio.',
      'Streamlined the process for gathering course performance insights.',
      'Increased efficiency for performance reporting by 30% for the Data Analytics Team.',
    ],
  },
];

export default work;
