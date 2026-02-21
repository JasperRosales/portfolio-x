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
    title: "CICS Community",
    description: "A GitHub community platform for students and future members.",
    fullDescription:
      "Founded and lead a community GitHub along with co-officers to further enhance and supply knowledge for students and future members of the CICS community. Making it a platform for teaching distributed source management and documentation for students and professors.",
    category: "Community Platform",
    techStack: ["Git", "GitHub", "Documentation", "Source Management"],
    githubUrl: "https://github.com/JasperRosales",
    features: [
      "Community-driven knowledge sharing",
      "Source management training platform",
      "Documentation for students and professors",
      "Collaborative learning environment",
    ],
  },
  {
    title: "Taskaru",
    description:
      "A mobile task management application to organize and prioritize tasks effectively.",
    fullDescription:
      "Taskaru is a mobile task management application designed to help users organize and prioritize their tasks effectively. Features include task categorization, due dates, priority levels, progress tracking, and reminders.",
    category: "Mobile Application",
    techStack: ["React Native", "TypeScript", "Golang", "NeonDB", "Vercel"],
    githubUrl: "https://github.com/JasperRosales/taskaru",
    features: [
      "Task organization and categorization",
      "Priority-based task sorting",
      "Progress tracking",
      "Collaborative task management",
      "Mail notifications and reminders",
    ],
  },
  {
    title: "Astrix",
    description:
      "A fun reading app for daily fortune, tarot, and astronomy themes.",
    fullDescription:
      "Astrix is a simple project that lets users have fun with daily fortune, tarot, and astronomy reading based on different criteria. Currently in an initial state with plans for expansion.",
    category: "Fun App",
    techStack: ["JavaScript", "React", "Vite"],
    githubUrl: "https://github.com/JasperRosales/Astrix",
    liveUrl: "https://astrix-asper.vercel.app/",
    features: [
      "Tarot reading generator",
      "Astrology and astronomy-based fun facts",
      "Daily fortune prompts",
      "Interactive UI experiences",
    ],
  },
  {
    title: "DualView",
    description:
      "A synchronized presentation web app that lets you control PowerPoint slides from your phone while displaying them on a large screen.",
    fullDescription:
      "DualView is a presenter-focused web application that enables real-time synchronized PowerPoint presentations across devices. It allows a presenter to control slides using their phone while the main presentation is displayed on a larger screen. Built with Supabase as the backend, DualView handles real-time synchronization, session management, and state updates to ensure seamless slide transitions between devices. Designed for classrooms, meetings, and events, the app focuses on simplicity, reliability, and responsive multi-device support.",
    category: "Productivity App",
    techStack: ["Typescript", "React", "Vite", "Supabase"],
    githubUrl: "https://github.com/JasperRosales/DualView", 
    liveUrl: "https://dualview-asper.vercel.app/", 
    features: [
      "Real-time slide synchronization across devices",
      "Phone-based slide controller interface",
      "Large-screen presentation display view",
      "Session-based presentation rooms",
      "Supabase-powered backend for real-time updates",
      "Responsive multi-device design",
    ],
  },

  {
    title: "Go Blockchain Practice",
    description: "Practice journey for learning blockchain concepts in Go.",
    fullDescription:
      "This project is a practice implementation that explores core blockchain concepts using Go. Includes block creation, proof-of-work consensus, transactions with ECDSA signatures, and UTXO models.",
    category: "Learning / Blockchain",
    techStack: ["Go", "Cryptography", "CLI"],
    githubUrl: "https://github.com/JasperRosales/go-blockchain-practice",
    features: [
      "Blockchain core features (blocks, PoW)",
      "Wallet creation and transaction signing",
      "Command-line usage and exploration",
      "Educational implementation for Go developers",
    ],
  },
  {
    title: "CommitThis",
    description: "A platform for sharing ideas and collaborating with others.",
    fullDescription:
      "CommitThis is designed for people to share their ideas and let others collaborate on them, emphasizing teamwork and communication.",
    category: "Collaboration Platform",
    techStack: ["Web", "JavaScript"],
    githubUrl: "https://github.com/JasperRosales/CommitThis",
    features: [
      "Idea posting and sharing",
      "Collaboration features",
      "Communication tools for teams",
    ],
  },
  {
    title: "Barangay Tuyon App",
    description: "A community service app for Barangay Tuyon.",
    fullDescription:
      "An application intended to support Barangay Tuyon residents with community announcements and local services.",
    category: "Community App",
    techStack: ["React", "Firebase"],
    githubUrl: "https://github.com/JasperRosales/barangay-tuyon-app",
    features: [
      "Local announcements and notifications",
      "Resident service access",
      "Community engagement tools",
    ],
  },
  {
    title: "QuickPitch.io",
    description:
      "A web application for improving pitching and presentation skills using AI-powered speech analysis.",
    fullDescription:
      "QuickPitch.io is a web application designed to help users improve their pitching and presentation skills. It generates presentation contexts from PDFs, lessons, or quick topics, allowing users to practice explaining a given subject. The platform uses speech recognition and analysis to evaluate delivery, clarity, and confidence during presentations.",
    category: "Web Application / AI",
    techStack: [
      "React",
      "TypeScript",
      "Golang",
      "Speech Recognition",
      "AI / NLP",
    ],
    githubUrl: "https://github.com/JasperRosales/quick-pitch.io",
    features: [
      "Context-based pitch generation from PDFs, lessons, or topics",
      "Real-time speech recognition during presentations",
      "Speech and delivery analysis for feedback",
      "Practice mode for pitching and discussions",
      "Skill improvement through repeated presentation exercises",
    ],
  },
  {
    title: "Fit Tech",
    description:
      "An AI-powered e-commerce clothing application with virtual dressing and GCash payments.",
    fullDescription:
      "Fit Tech is an e-commerce clothing platform enhanced with AI features that allow users to virtually try on outfits before purchasing. The application supports seamless local payments via GCash.",
    category: "E-commerce / AI",
    techStack: [
      "React",
      "TypeScript",
      "AI / LLM",
      "E-commerce",
      "Payment Integration",
      "GCash",
    ],
    githubUrl: "https://github.com/JasperRosales/fit-tech-client",
    features: [
      "AI-powered virtual clothing try-on",
      "Online clothing catalog and checkout",
      "GCash payment integration",
      "User accounts and order tracking",
      "Enhanced shopping experience with fit visualization",
    ],
  },
  {
    title: "SSC Budget Manager",
    description:
      "A blockchain-enabled system for managing SSC budgets and finances.",
    fullDescription:
      "SSC Budget Manager is a financial management system designed for tracking budgets, expenses, and reports within the SSC framework. It integrates blockchain technology to ensure transparency, data integrity, and immutability of financial records, helping prevent tampering and improve auditability.",
    category: "Finance Tool / Blockchain",
    techStack: [
      "Web",
      "TypeScript",
      "Blockchain",
      "Smart Contracts",
      "Distributed Ledger",
    ],
    githubUrl: "https://github.com/JasperRosales/ssc-budget-manager",
    features: [
      "Budget planning and allocation",
      "Expense tracking with immutable blockchain records",
      "Transparent financial history for auditing",
      "Tamper-resistant budget and expense logs",
      "Financial reporting and dashboards",
    ],
  },
  {
    title: "Workflow",
    description: "A workflow management and automation application.",
    fullDescription:
      "Workflow offers an interface for managing workflow processes and automating tasks within a project environment.",
    category: "Productivity Tool",
    techStack: ["React", "JavaScript"],
    githubUrl: "https://github.com/JasperRosales/workflow-client",
    features: [
      "Process visualization",
      "Task automation interfaces",
      "User workflow dashboards",
    ],
  },
  {
    title: "SSC Tools",
    description: "Utility tools for SSC operations.",
    fullDescription:
      "SSC Tools combines multiple utilities to assist with SSC tasks like reporting, data manipulation, and admin workflows.",
    category: "Utilities",
    techStack: ["JavaScript", "Golang", "React"],
    githubUrl: "https://github.com/JasperRosales/ssc-tools",
    features: [
      "Utility toolbox",
      "Quick access components",
      "Data handling helpers",
    ],
  },
];
