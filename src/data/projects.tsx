import type { IconType } from "react-icons";
import { FaCode, FaPencilRuler, FaGraduationCap, FaServer, FaMobileAlt, FaInternetExplorer } from "react-icons/fa";

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
    githubUrl: "https://github.com/cicsbalayan",
    liveUrl: "https://cics-main-page.vercel.app/",
    features: [
      "Community-driven knowledge sharing",
      "Source management training platform",
      "Documentation for students and professors",
      "Collaborative learning environment",
    ],
  },
  {
    title: "CICS Digital Showcase",
    description: "A Website showcasing student projects and achievements in CICS.",
    fullDescription:
      "A website that showcases student projects and achievements in CICS. The platform serves as a digital portfolio for students to present their work, fostering a sense of community and recognition within the academic environment.",
    icon: FaGraduationCap,
    category: "Community Platform",
    type: "application",
    techStack: ["Nextjs", "Vercel","Git", "GitHub", "Documentation", "Source Management"],
    githubUrl: "https://github.com/cicsbalayan/digital-showcase-web",
    liveUrl: "https://digital-showcase-web.vercel.app/",
    features: [
      "Source management training platform",
      "Sharing and showcasing student projects",
      "Documentation for students",
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
    title: "GasNet",
    description:
      "An AI-Driven Decision Support and Point-of-Sales System for CJG LPG Trading",
    fullDescription:
      "Developed GasNet, an AI-driven decision support and point-of-sales system for CJG LPG Trading. The system leverages AI services to provide actionable insights and streamline sales processes. It features a user-friendly interface designed to enhance decision-making and improve operational efficiency.",
    icon: FaMobileAlt,
    category: "Software Solution",
    type: "application",
    techStack: ["Flutter", "Postgres", "Drift","Supabase"],
    githubUrl: "not available",
    features: [
      "AI-driven decision support",
      "Point-of-sales functionality",
      "User-friendly interface",
      "Operational efficiency improvements",
    ],
  },
  {
    title: "Project C.L.E.A.R",
    description:
      "A solution to transparent and efficient fund tracking and management system for the CICS Student Council. This allows the students to see how the funds are managed.",
    fullDescription:
      "Developed Project C.L.E.A.R, a transparent and efficient fund tracking and management system for the CICS Student Council. The system allows students to visualize and monitor how funds are allocated and utilized, promoting accountability and informed decision-making.",
    icon: FaInternetExplorer,
    category: "Organizational Tool",
    type: "application",
    techStack: ["React", "Javascript", "Redis", "Upstash", "Make", "Supabase"],
    githubUrl: "https://github.com/cicsbalayan/ProjectClear-Client",
    features: [
      "Transparent fund tracking",
      "Efficient fund management",
      "User-friendly interface for students",
      "Real-time updates on fund allocation and utilization",
    ],
  },
  {
    title: "Portfolio Y",
    description:
      "A portfolio that showcase my designer skills and projects in a minimalist design approach.",
    fullDescription:
      "Designed and developed Portfolio Y, a personal portfolio website that showcases my design skills and projects with a minimalist design approach. The portfolio emphasizes clean aesthetics, intuitive navigation, and a focus on visual storytelling to effectively present my work and creative process.",
    icon: FaPencilRuler,
    category: "Portfolio Website",
    type: "application",
    techStack: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/JasperRosales/portfolio-y",
    liveUrl: "https://portfolio-y-asper.vercel.app/",
    features: [
      "Showcases my design skills and projects in my college journey",
      "Includes my work inside and outside of college",
      "Uses multiple design elements to create a visually appealing and engaging experience",
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
    techStack: ["Dart", "Flutter", "Supabase"],
    githubUrl: "https://github.com/JasperRosales/barangay-tuyon-app",
    features: [
      "Local announcements and notifications",
      "Resident Information management",
      "Community engagement and program management",
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
  },
  {
    title: "Protect The Baby",
    description:
      "A 2D arcade survival game where players defend Baby Shark from incoming threats.",
    fullDescription:
      "Built Protect the Baby as a fast-paced arcade game project centered on responsive controls, quick reactions, and simple but engaging gameplay loops. The project demonstrates interactive frontend engineering and polished player feedback patterns.",
    icon: FaCode,
    category: "Game Application",
    type: "application",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS", "Node.js", "Vercel"],
    githubUrl: "https://github.com/JasperRosales/protect-the-baby",
    liveUrl: "https://protect-the-baby.vercel.app",
    features: [
      "Arcade-style survival gameplay",
      "Responsive control and interaction system",
      "Deployable browser-based game experience",
    ],
  },
  {
    title: "Fit Tech Client",
    description: "A virtual try-on web application for fitting clothes and exploring outfit combinations.",
    fullDescription:
      "A virtual try-on web application for fitting clothes and exploring outfit combinations. The project emphasizes user experience, interactive design, and responsive layouts for a seamless virtual fitting experience.",
    icon: FaCode,
    category: "Web Application",
    type: "application",
    techStack: ["Next.js", "TypeScript", "API Integration", "Shadcn", "Vercel"],
    githubUrl: "https://github.com/JasperRosales/fit-tech-client",
    liveUrl: "https://fit-tech-client.vercel.app",
    features: [
      "Virtual try-on interface for clothing",
      "Interactive outfit combination exploration",
      "Responsive design for various devices",
    ],
  },
  {
    title: "Resume Analyzer",
    description:
      "AI-powered resume analyzer that evaluates resumes against job descriptions.",
    fullDescription:
      "Resume Analyzer is an AI-assisted web project for ATS-oriented resume reviews. It provides compatibility insights, skill gap detection, and practical recommendations to improve candidate alignment with target roles.",
    icon: FaCode,
    category: "Web Application / AI",
    type: "application",
    techStack: ["Next.js", "TypeScript", "Node.js", "Shadcn", "Vercel"],
    githubUrl: "https://github.com/JasperRosales/resume_analyzer",
    liveUrl: "https://resume-analyzer-beta-seven.vercel.app",
    features: [
      "ATS compatibility feedback",
      "Role-specific skill gap detection",
      "Actionable resume improvement recommendations",
    ],
  },
  {
    title: "CV Builder",
    description:
      "A modern ATS-friendly CV builder with live editing and PDF export.",
    fullDescription:
      "Built CV Builder as a practical resume product with ATS-conscious structure, real-time editing, and local persistence. The application demonstrates end-user productivity tooling and polished frontend workflow management.",
    icon: FaCode,
    category: "Productivity Tool",
    type: "application",
    techStack: ["Next.js", "TypeScript", "Node.js", "Shadcn", "Tailwind CSS"],
    githubUrl: "https://github.com/JasperRosales/cv_builder",
    liveUrl: "https://cv-builder-six-eta.vercel.app",
    features: [
      "Live CV editing experience",
      "PDF export support",
      "ATS-friendly document structure",
    ],
  },
  {
    title: "Invoice Generator",
    description:
      "A modern invoice management platform for freelancers and small businesses.",
    fullDescription:
      "Invoice Generator is a business utility platform for creating, managing, and exporting professional invoices. It emphasizes secure access, structured client billing workflows, and a clean interface for daily operations.",
    icon: FaCode,
    category: "Business Tool",
    type: "application",
    techStack: ["Next.js", "TypeScript", "Node.js", "Shadcn", "Vercel"],
    githubUrl: "https://github.com/JasperRosales/invoice-generator",
    liveUrl: "https://invoice-generator-three-nu.vercel.app",
    features: [
      "Professional invoice generation",
      "Client and billing record management",
      "Export-ready document workflows",
    ],
  },
  {
    title: "Flori",
    description:
      "An under-development flower information app focused on meanings and discovery.",
    fullDescription:
      "Flori is an evolving app concept that presents flowers and their meanings through a simple browsing experience. The project explores content-driven interfaces and structured information delivery in an accessible format.",
    icon: FaCode,
    category: "Learning / App Prototype",
    type: "education",
    techStack: ["TypeScript", "Next.js", "React.js", "Node.js", "Shadcn"],
    githubUrl: "https://github.com/JasperRosales/Flori",
    features: [
      "Flower meaning discovery concept",
      "Content-first UI experimentation",
      "Prototype-driven feature iteration",
    ],
  },
];
