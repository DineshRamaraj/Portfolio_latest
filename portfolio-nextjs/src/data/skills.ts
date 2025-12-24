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
    id: "frontend",
    title: "Front-End",
    icon: "palette",
    skills: [
      { name: "React.js", icon: "fab fa-react" },
      { name: "Next.js", icon: "fas fa-layer-group" },
      { name: "TypeScript", icon: "fas fa-code" },
      { name: "JavaScript (ES6+)", icon: "fab fa-js" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fas fa-server" },
      { name: "RESTful APIs", icon: "fas fa-network-wired" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB", icon: "fas fa-leaf" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-database" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", icon: "fab fa-github" },
      { name: "VS Code", icon: "fas fa-code" },
      { name: "Postman", icon: "fas fa-paper-plane" },
      { name: "Vercel", icon: "fas fa-cloud-upload-alt" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", icon: "fab fa-python" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "C++", icon: "fab fa-cuttlefish" }, // using cuttlefish as C++ often uses C icon or custom, but let's check standard fontawesome
    ],
  },
  {
    id: "core",
    title: "Core Concepts",
    icon: "brain",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "OOPs" },
      { name: "System Design" },
    ],
  },
];
