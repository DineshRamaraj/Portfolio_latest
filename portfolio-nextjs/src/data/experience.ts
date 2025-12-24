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
    id: "markteer",
    title: "Full Stack Developer (MERN Stack)",
    company: "Markteer Media",
    startDate: "January 2025",
    endDate: "Present",
    current: true,
    responsibilities: [
      "Engineer and maintain scalable RESTful APIs using Node.js and Express.js, enabling high-performance backend operations.",
      "Architect modern front-end applications with React.js and Next.js, implementing SEO best practices for improved visibility.",
      "Design and optimize MongoDB database schemas with advanced indexing strategies to handle large-scale data efficiently.",
      "Spearhead the integration of AI agents and prompt engineering workflows to automate customer engagement pipelines.",
      "Implement rigorous API validation and error handling protocols to ensure system reliability and security.",
    ],
  },
  {
    id: "cloud-garage",
    title: "Front-End Developer Intern (React JS)",
    company: "Cloud Garage LLP",
    startDate: "October 2022",
    endDate: "June 2023",
    current: false,
    responsibilities: [
      "Contributed to the development of responsive user interfaces, resulting in a 15% improvement in user engagement metrics.",
      "Collaborated with design teams using Figma to translate high-fidelity prototypes into pixel-perfect React components.",
      "Optimized development workflows through Continuous Integration (CI) practices and effective Git version control.",
    ],
  },
];
