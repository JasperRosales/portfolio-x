

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: string;
}

export const projects: Project[] = [
  {
    title: 'CICS Community',
    description: 'A GitHub community platform for students and future members.',
    fullDescription: 'Founded and lead a community GitHub along with co-officers to further enhance and supply knowledge for students and future members of the CICS community. Making it a platform for teaching distributed source management and documentation for students and professors.',
    category: 'Community Platform',
    techStack: ['Git', 'GitHub', 'Documentation', 'Source Management'],
    githubUrl: 'https://github.com/JasperRosales',
    features: [
      'Community-driven knowledge sharing',
      'Source management training platform',
      'Documentation for students and professors',
      'Collaborative learning environment',
    ],
  },
  {
    title: 'Taskaru',
    description: 'A task management web application to organize and prioritize your tasks effectively.',
    fullDescription: 'Taskaru is a task management web application designed to help users organize and prioritize their tasks effectively. Features include task categorization, due dates, priority levels, and progress tracking.',
    category: 'Web Application',
    techStack: ['React', 'TypeScript', 'Golang', 'NeonDB', 'Vercel'],
    githubUrl: 'https://github.com/JasperRosales/taskaru',
    liveUrl: 'https://taskaru.app',
    features: [
      'Task organization and categorization',
      'Priority-based task sorting',
      'Progress tracking and analytics',
      'Collaborative task management',
      'Mail notifications and reminders',
    ],
  },
  {
    title: 'Astrix',
    description: 'A fun reading app for daily fortune, tarot, and astronomy themes.',
    fullDescription: 'Astrix is a simple project that lets users have fun with daily fortune, tarot, and astronomy reading based on different criteria. Currently in an initial state with plans for expansion.',
    category: 'Fun App',
    techStack: ['JavaScript', 'React', 'Vite'],
    githubUrl: 'https://github.com/JasperRosales/Astrix',
    features: [
      'Tarot reading generator',
      'Astrology and astronomy-based fun facts',
      'Daily fortune prompts',
      'Interactive UI experiences',
    ],
  },
  {
    title: 'Go Blockchain Practice',
    description: 'Practice journey for learning blockchain concepts in Go.',
    fullDescription: 'This project is a practice implementation that explores core blockchain concepts using Go. Includes block creation, proof-of-work consensus, transactions with ECDSA signatures, and UTXO models. Eventually intended to be part of an upgrade for a financial manager system. ',
    category: 'Learning / Blockchain',
    techStack: ['Go', 'Cryptography', 'CLI'],
    githubUrl: 'https://github.com/JasperRosales/go-blockchain-practice',
    features: [
      'Blockchain core features (blocks, PoW)',
      'Wallet creation and transaction signing',
      'Command-line usage and exploration',
      'Educational implementation for Go developers',
    ],
  },
  {
    title: 'Taskaru Client',
    description: 'Mobile client for Taskaru with API integration.',
    fullDescription: 'A mobile application built with TypeScript and Golang backend support. Designed to interface with the Taskaru API for task management on mobile devices.',
    category: 'Mobile App',
    techStack: ['TypeScript', 'React Native', 'Golang'],
    githubUrl: 'https://github.com/JasperRosales/taskaru-client',
    features: [
      'Task viewing and management',
      'Sync with backend APIs',
      'Responsive mobile interface',
    ],
  },
  {
    title: 'CommitThis',
    description: 'A platform for sharing ideas and collaborating with others.',
    fullDescription: 'CommitThis is designed for people to share their ideas and let others collaborate on them, emphasizing teamwork and communication.',
    category: 'Collaboration Platform',
    techStack: ['Web', 'JavaScript'],
    githubUrl: 'https://github.com/JasperRosales/CommitThis',
    features: [
      'Idea posting and sharing',
      'Collaboration features',
      'Communication tools for teams',
    ],
  },
  {
    title: 'Barangay Tuyon App',
    description: 'A community service app for Barangay Tuyon.',
    fullDescription: 'An application intended to support Barangay Tuyon residents with community announcements and local services. (Description placeholder — update when available)',
    category: 'Community App',
    techStack: ['React', 'Firebase'],
    githubUrl: 'https://github.com/JasperRosales/barangay-tuyon-app',
    features: [
      'Local announcements and notifications',
      'Resident service access',
      'Community engagement tools',
    ],
  },
  {
    title: 'Quick Pitch.io',
    description: 'A simple pitch idea platform.',
    fullDescription: 'Quick Pitch.io is a lightweight platform for users to quickly share pitches or ideas and gather initial feedback. (Placeholder description — update with real details.)',
    category: 'Web Tool',
    techStack: ['Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/JasperRosales/quick-pitch.io',
    features: [
      'Idea submission',
      'Fast feedback loop',
      'Simple pitch templates',
    ],
  },
  {
  title: 'Fit Tech',
  description: 'An AI-powered e-commerce clothing application with virtual dressing and GCash payments.',
  fullDescription:
    'Fit Tech is an e-commerce clothing platform enhanced with AI features that allow users to virtually try on outfits before purchasing. The application focuses on improving online shopping confidence through virtual fitting technology while supporting seamless local payments via GCash.',
  category: 'E-commerce / AI',
  techStack: [
    'React',
    'TypeScript',
    'AI / LLM',
    'E-commerce',
    'Payment Integration',
    'GCash',
  ],
  githubUrl: 'https://github.com/JasperRosales/fit-tech-client',
  features: [
    'AI-powered virtual clothing try-on',
    'Online clothing catalog and checkout',
    'GCash payment integration',
    'User accounts and order tracking',
    'Enhanced shopping experience with fit visualization',
  ],
},
  {
    title: 'SSC Budget Manager',
    description: 'A system for managing SSC budgets and finances.',
    fullDescription: 'SSC Budget Manager is a financial management system for tracking budgets, expenses, and reports within the SSC framework. (Placeholder — update with actual project details.)',
    category: 'Finance Tool',
    techStack: ['Web', 'TypeScript'],
    githubUrl: 'https://github.com/JasperRosales/ssc-budget-manager',
    features: [
      'Budget overview',
      'Expense tracking',
      'Reporting dashboard',
    ],
  },
  {
    title: 'Workflow Client',
    description: 'Frontend client for workflow automation.',
    fullDescription: 'Workflow Client offers an interface for managing workflow processes and automating tasks within a project environment. (Placeholder — refine with specifics.)',
    category: 'Productivity Tool',
    techStack: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/JasperRosales/workflow-client',
    features: [
      'Process visualization',
      'Task automation interfaces',
      'User workflow dashboards',
    ],
  },
  {
    title: 'SSC Tools',
    description: 'Utility tools for SSC operations.',
    fullDescription: 'SSC Tools combines multiple utilities to assist with SSC tasks like reporting, data manipulation, and admin tasks. (Placeholder — update with actual details.)',
    category: 'Utilities',
    techStack: ['JavaScript', 'Golang', 'React'],
    githubUrl: 'https://github.com/JasperRosales/ssc-tools',
    features: [
      'Utility toolbox',
      'Quick access components',
      'Data handling helpers',
    ],
  },
];
