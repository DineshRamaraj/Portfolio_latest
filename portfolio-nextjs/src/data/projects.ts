export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
  github?: string;
  category: "full-stack" | "frontend" | "backend" | "ai" | "personal";
  featured: boolean;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "rhinoagents",
    title: "RhinoAgents",
    description:
      "Architected and deployed autonomous AI agent systems that streamline complex business workflows and enhance operational efficiency.",
    highlights: [
      "Engineered AI-powered customer support modules efficiently resolving 40% of inquiries without human intervention.",
      "Implemented standardized prompt-based workflows to automate internal notifications and decision processes.",
      "Designed robust REST APIs to seamlessly integrate AI workflows with existing enterprise automation pipelines.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI Agents",
      "Prompt Engineering",
      "REST APIs",
    ],
    link: "https://www.rhinoagents.com",
    category: "ai",
    featured: true,
    icon: "robot",
  },
  {
    id: "nxttrendz",
    title: "NxtTrendz (E-Commerce)",
    description:
      "Built a feature-rich e-commerce platform replicating core functionalities of major retailers like Amazon, focusing on performance and user experience.",
    highlights: [
      "Implemented secure authentication and protected routes, ensuring safe user access to profile and order history.",
      "Optimized product filtering and search capabilities using advanced API query parameters, improving result relevance by 25%.",
      "Designed a responsive, mobile-first UI with smooth navigation transitions using React Router.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "CSS Modules",
      "Authentication",
      "Rest API",
    ],
    link: "https://dinnxttrendz.ccbp.tech/",
    category: "full-stack",
    featured: true,
    icon: "shopping-cart",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const projectsByCategory = (category: string) =>
  category === "all"
    ? projects
    : projects.filter((p) => p.category === category);
