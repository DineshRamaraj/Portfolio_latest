export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  technology: string;
  link?: string;
}

export const educationList: Education[] = [
  {
    id: 'ccbp',
    degree: 'Full Stack Web Development',
    institution: 'NXTWAVE CCBP 4.0 Academy',
    location: 'Online',
    startDate: 'October 2023',
    endDate: 'Present',
    description: 'Industry Ready Certification Program focused on Full-Stack Web Development with immersive hands-on and reverse-engineered curriculum.',
    icon: 'code'
  },
  {
    id: 'mca',
    degree: 'Master of Computer Application (MCA)',
    institution: 'Srinivasan College of Arts And Science',
    location: 'Perambalur',
    startDate: 'June 2021',
    endDate: 'April 2023',
    grade: 'CGPA: 7.5/10',
    icon: 'graduation-cap'
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Srinivasan College of Arts And Science',
    location: 'Perambalur',
    startDate: 'June 2018',
    endDate: 'March 2021',
    grade: 'CGPA: 7.0/10',
    icon: 'laptop-code'
  }
];

export const certifications: Certification[] = [
  {
    id: 'static-website',
    title: 'Build Your Own Static Website',
    issuer: 'CCBP',
    technology: 'HTML & CSS',
    link: 'https://certificates.ccbp.in/academy/static-website?id=CMLOLLZXVV'
  },
  {
    id: 'dynamic-web',
    title: 'Build Your Own Dynamic Web Application',
    issuer: 'CCBP',
    technology: 'JavaScript',
    link: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=KERDANYNWA'
  },
  {
    id: 'databases',
    title: 'Introduction to Databases',
    issuer: 'CCBP',
    technology: 'SQL',
    link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=MBHXLLPTDH'
  },
  {
    id: 'react',
    title: 'React.js Certification',
    issuer: 'CCBP',
    technology: 'React.js'
  },
  {
    id: 'node',
    title: 'Node.js Certification',
    issuer: 'CCBP',
    technology: 'Node.js'
  },
  {
    id: 'python',
    title: 'Programming Foundations in Python',
    issuer: 'CCBP',
    technology: 'Python',
    link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=RJAZNNFAJK'
  }
];
