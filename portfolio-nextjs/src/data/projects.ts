export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
  github?: string;
  category: 'full-stack' | 'frontend' | 'backend' | 'ai' | 'personal';
  featured: boolean;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'rhinoagents',
    title: 'RhinoAgents',
    description: 'Developed AI agents to automate tasks, optimize workflows, and enhance overall process efficiency.',
    highlights: [
      'Developed AI-powered modules to automate customer support, reducing manual workload by 40%',
      'Implemented prompt-based workflows to standardize internal processes and automated notifications',
      'Designed and consumed REST APIs for AI workflows and automation pipelines'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Agents', 'Prompt Engineering'],
    link: 'https://www.rhinoagents.com',
    category: 'ai',
    featured: true,
    icon: 'robot'
  },
  {
    id: 'nxttrendz',
    title: 'NxtTrendz (E-Commerce)',
    description: 'Designed a fully functional clone of leading e-Commerce platforms such as Amazon and Flipkart.',
    highlights: [
      'Implemented dynamic routing for pages (Login, Products, Product Details) using React Router, increasing page interaction rates by 30%',
      'Improved product API calls using query parameters and pagination, boosting search efficiency by 25%'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    link: 'https://dinnxttrendz.ccbp.tech/',
    category: 'full-stack',
    featured: true,
    icon: 'shopping-cart'
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const projectsByCategory = (category: string) => 
  category === 'all' ? projects : projects.filter(p => p.category === category);
