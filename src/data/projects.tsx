import type { IconType } from "react-icons";
import { FaCode, FaGraduationCap, FaServer, FaMobileAlt } from "react-icons/fa";

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  icon?: IconType;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: string;
  type: "application" | "education";
}

export const projects: Project[] = [
  {
    title: "CICS Community",
    description: "A GitHub community platform for students and future members.",
    fullDescription:
      "Founded and lead a community GitHub along with co-officers to further enhance and supply knowledge for students and future members of the CICS community. Making it a platform for teaching distributed source management and documentation for students and professors.",
    icon: FaGraduationCap,
    category: "Community Platform",
    type: "education",
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
    title: "SmartWardrobe",
    description:
      "A virtual fitting web application for exploring outfit combinations.",
    fullDescription:
      "Developed SmartWardrobe, a web-based virtual fitting application that allows users to visualize and experiment with different clothing combinations in a digital environment. The system focuses on simplifying outfit selection by providing an interactive interface where users can mix and match clothing items without the need for physical try-ons. Designed with a clean and responsive UI, the application enhances user experience by making outfit exploration more accessible and efficient.",
    icon: FaMobileAlt,
    category: "Fashion Technology",
    type: "application",
    techStack: ["React", "JavaScript", "Supabase", "Shadcn UI"],
    githubUrl: "not available",
    liveUrl: "https://smart-wardrobe-asper.vercel.app/",
    features: [
      "Virtual try-on interface for outfit visualization",
      "Mix-and-match clothing combinations",
      "Interactive and user-friendly UI",
      "Responsive design for multiple devices",
    ],
  },
  {
    title: "Blockchain Practice",
    description: "Practice journey for learning blockchain concepts in Go.",
    fullDescription:
      "This project is a practice implementation that explores core blockchain concepts using Go. Includes block creation, proof-of-work consensus, transactions with ECDSA signatures, and UTXO models.",
    icon: FaCode,
    category: "Learning / Blockchain",
    type: "education",
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
    title: "Nginx Practice",
    description:
      "Hands-on practice with Nginx server configuration and deployment.",
    fullDescription:
      "A practical learning project focused on understanding Nginx web server configuration, reverse proxy setup, load balancing, and server optimization techniques.",
    icon: FaServer,
    category: "Learning / Infrastructure",
    type: "education",
    techStack: ["Nginx", "Docker", "Linux", "Server Configuration"],
    githubUrl: "https://github.com/JasperRosales/nginx-practice",
    features: [
      "Nginx configuration fundamentals",
      "Reverse proxy implementation",
      "Load balancing techniques",
      "Server optimization practice",
    ],
  },
  {
    title: "Kafka Practice",
    description:
      "Exploring Apache Kafka for distributed streaming and messaging.",
    fullDescription:
      "A hands-on learning project to understand Apache Kafka's distributed streaming platform, message queuing, and event-driven architecture patterns.",
    category: "Learning / Messaging",
    type: "education",
    techStack: [
      "Apache Kafka",
      "Docker",
      "Event Streaming",
      "Distributed Systems",
    ],
    githubUrl: "https://github.com/JasperRosales/kafka-practice",
    features: [
      "Kafka producer and consumer setup",
      "Topic and partition management",
      "Event streaming patterns",
      "Distributed messaging practice",
    ],
  },
  {
    title: "Flutter Notes",
    description:
      "Learning notes and practice projects for Flutter development.",
    fullDescription:
      "A collection of notes, code samples, and practice projects documenting the learning journey with Flutter for cross-platform mobile development.",
    category: "Learning / Mobile Development",
    type: "education",
    techStack: ["Flutter", "Dart", "Mobile Development", "Cross-platform"],
    githubUrl: "https://github.com/JasperRosales/Flutter-Notes",
    features: [
      "Flutter fundamentals and widgets",
      "State management examples",
      "UI/UX implementation practice",
      "Cross-platform development notes",
    ],
  },
  {
    title: "Astrix",
    description:
      "A fun reading app for daily fortune, tarot, and astronomy themes.",
    fullDescription:
      "Astrix is a simple project that lets users have fun with daily fortune, tarot, and astronomy reading based on different criteria. Currently in an initial state with plans for expansion.",
    category: "Fun App",
    type: "application",
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
    title: "Barangay Tuyon App",
    description: "A community service app for Barangay Tuyon.",
    fullDescription:
      "An application intended to support Barangay Tuyon residents with community announcements and local services.",
    category: "Community App",
    type: "application",
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
    type: "application",
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
    title: "Workflow",
    description: "A workflow management and automation application.",
    fullDescription:
      "Workflow offers an interface for managing workflow processes and automating tasks within a project environment.",
    category: "Productivity Tool",
    type: "application",
    techStack: ["React", "JavaScript"],
    githubUrl: "https://github.com/JasperRosales/workflow-client",
    features: [
      "Process visualization",
      "Task automation interfaces",
      "User workflow dashboards",
    ],
  },
  {
    title: "Redis Weather API",
    description: "Spring Boot REST API with Redis caching for weather data.",
    fullDescription: "A Spring Boot REST API that fetches weather data from Visual Crossing Weather API and implements Redis caching to improve performance and reduce external API calls. Features RESTful endpoint, reactive WebFlux, configurable TTL (30 minutes), comprehensive error handling, input validation, unit tests with Mockito, and automatic retry logic.",
    category: "Backend API / Caching",
    type: "application",
    techStack: ["Java 17", "Spring Boot", "Spring WebFlux", "Redis", "Maven"],
    githubUrl: "https://github.com/JasperRosales/weather-api-spring-redis",
    features: [
      "RESTful weather data retrieval",
      "Redis caching with TTL",
      "Reactive programming with WebFlux",
      "Global exception handling",
      "Unit tests & retry logic"
    ],
  }
];

