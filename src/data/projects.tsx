

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
];

