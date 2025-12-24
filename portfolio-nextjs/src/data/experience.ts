export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 'markteer',
    title: 'Full Stack Developer (MERN Stack)',
    company: 'Markteer Media',
    startDate: 'January 2025',
    endDate: 'Present',
    current: true,
    responsibilities: [
      'Engineered and maintained 10+ RESTful APIs using Node.js and Express.js, improving backend performance and scalability',
      'Architected and optimized React.js and Next.js applications with SEO improvements, enhancing user experience',
      'Designed MongoDB schemas with optimized indexing and aggregation pipelines to improve query efficiency',
      'Collaborated on AI agent and prompt-based workflows, enabling scalable and automated customer engagement',
      'Implemented API integration, request validation, and error handling following REST architecture best practices'
    ]
  },
  {
    id: 'cloud-garage',
    title: 'Front-End Developer Intern (React JS)',
    company: 'Cloud Garage LLP',
    startDate: 'October 2022',
    endDate: 'June 2023',
    current: false,
    responsibilities: [
      'Acquired foundational design and development skills, contributing to a team project that improved the user interface for a web application by 15%',
      'Gained hands-on experience with Figma and Continuous Integration, improving the efficiency of project design collaboration by 20%'
    ]
  }
];
