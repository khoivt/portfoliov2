import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'sir.vukhoi@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Jayce Vu, I am reaching out to you because...',

    oldPortfolio: 'https://www.vukhoi.me',
    upworkProfile:
        'https://www.upwork.com/freelancers/~01939ce8a6740a2da3?mp_source=share',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/khoivt' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/khoivt' },
    { name: 'facebook', url: 'https://www.facebook.com/vukhoi0212' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

// TODO: update projects

export const PROJECTS: IProject[] = [
    {
        title: 'Rikunabi Next',
        slug: 'rikunabi-next',
        liveUrl: 'https://next.rikunabi.com/job_search/area-hokkaido/',
        year: 2025,
        description: `
      A comprehensive job board system that aggregates job listings from Indeed and provides advanced filtering capabilities by industry field. Built as a modern recruitment platform to connect job seekers with relevant opportunities. <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🔍 Job Aggregation: Automatically collects job listings from Indeed API</li>
        <li>🏷️ Field Filtering: Advanced filtering system to sort jobs by industry, location, and experience level</li>
        <li>🔗 OpenAPI: Designed and documented OpenAPI endpoints for seamless integration</li>
        <li>🖥️ Device Optimization: Fully responsive design optimized for both PC and smartphone (SP)</li>
        <li>🚀 SEO Optimization: Advanced SEO implementation for better search engine visibility</li>
        <li>⚡ Real-time Search: Fast job search with instant results and auto-suggestions</li>
        <li>📊 Job Analytics: Dashboard for tracking application trends and job market insights</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Integrated Indeed Job Search API for real-time job data collection</li>
        <li>Implemented advanced filtering algorithms for precise job matching</li>
        <li>Built scalable backend architecture to handle large job datasets</li>
        <li>Developed responsive UI components with shadcn for consistent user experience</li>
        <li>Configured efficient caching strategies for optimal performance</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsible for all frontend development and user interface:
      <ul>
        <li>🎨 UI Development: Built responsive and interactive user interfaces using Next.js and Tailwind CSS</li>
        <li>🔍 Search Interface: Developed advanced job search and filtering components with real-time updates</li>
        <li>📱 Responsive Design: Optimized UI for seamless experience across PC and mobile devices</li>
        <li>🔄 State Management: Implemented efficient client-side data management and API integration</li>
        <li>⚡ Performance: Optimized frontend performance with lazy loading and component optimization</li>
        <li>🎯 User Experience: Created intuitive navigation and user flows for job seekers</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'MSW',
            'Storybook',
            'Jest',
            'CSS Modules',
            'TypeScript',
            'React Hook Form',
        ],
        thumbnail: '/projects/thumbnail/rikunabi-next.webp',
        longThumbnail: '/projects/long/rikunabi-next.webp',
        images: ['/projects/images/rikunabi-next.webp'],
    },
    {
        title: 'Fitness Coach',
        slug: 'fitness-coach',
        techStack: ['Systeme.io'],
        thumbnail: '/projects/thumbnail/jake-force.jpg',
        longThumbnail: '/projects/long/jake-force.jpg',
        images: [
            '/projects/images/jake-force-1.jpg',
            '/projects/images/jake-force-2.jpg',
        ],
        liveUrl: 'https://vukhoi.systeme.io/fitness-coach',
        year: 2025,
        description: `A professional fitness coach homepage showcasing Jake Force's expertise, training programs, and fitness books. Built using Systeme.io with focus on conversion optimization, responsive design for PC and mobile, SEO optimization, and fast loading speed.`,
        role: `Funnel Builder & Web Designer - Designed marketing funnels using Systeme.io, created responsive landing pages, optimized SEO and page speed, implemented conversion-focused design principles.`,
    },
    {
        title: 'Everstar Creator',
        slug: 'everstar-creator',
        techStack: ['Next.js', 'GoogleAPI', 'Tailwind CSS', 'i18n', 'GSAP'],
        thumbnail: '/projects/thumbnail/everstar-creator.jpg',
        longThumbnail: '/projects/long/everstar-creator.jpg',
        images: [
            '/projects/images/everstar-creator-1.png',
            '/projects/images/everstar-creator-2.png',
            '/projects/images/everstar-creator-3.png',
        ],
        liveUrl: 'https://everstarcreator.vercel.app/',
        year: 2025,
        description:
            'Everstar Creator is a web platform developed to provide attractive job opportunities for KOLs working on social media platforms like TikTok. Built with Next.js, GoogleAPI, and Tailwind CSS, this platform connects content creators with suitable job opportunities. Features multi-language support for Korean, Vietnamese, and English. Integrated with Google API to collect form submissions and store data in Google Sheets.',
        role: `Full-Stack Developer - Responsible for end-to-end web development including responsive UI design, animations, SEO optimization, and Google API integration to store data in Google Sheets.`,
    },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Everstar Global',
        duration: 'May 2025 - Present',
    },
    {
        title: 'Software Engineer (Frontend)',
        company: 'FPT Software',
        duration: 'Oct 2022 - May 2025',
    },
    {
        title: 'Software Engineer (Part-time)',
        company: 'Evotek JSC',
        duration: 'Apr 2021 - Sep 2021',
    },
];
