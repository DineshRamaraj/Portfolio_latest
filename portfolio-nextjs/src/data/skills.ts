export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Front-End',
    icon: 'palette',
    skills: [
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3-alt' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Tailwind CSS', icon: 'wind' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'React.js', icon: 'react' }
    ]
  },
  {
    id: 'backend',
    title: 'Back-End',
    icon: 'server',
    skills: [
      { name: 'Node.js', icon: 'node-js' },
      { name: 'Express.js', icon: 'project-diagram' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'MySQL', icon: 'database' },
      { name: 'SQLite', icon: 'table' },
      { name: 'MongoDB', icon: 'leaf' }
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'C/C++', icon: 'copyright' },
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'python' },
      { name: 'JavaScript', icon: 'js' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: 'tools',
    skills: [
      { name: 'VS Code', icon: 'code' },
      { name: 'Git', icon: 'git-alt' },
      { name: 'GitHub', icon: 'github' }
    ]
  },
  {
    id: 'backend-concepts',
    title: 'Backend Concepts',
    icon: 'network-wired',
    skills: [
      { name: 'REST APIs' },
      { name: 'API Integration' },
      { name: 'Authentication' },
      { name: 'Authorization' },
      { name: 'MVC Architecture' }
    ]
  }
];
