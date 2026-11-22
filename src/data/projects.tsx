import type { IconType } from "react-icons";
import {
  FaPrescriptionBottleAlt,
  FaStore,
  FaPaw,
  FaExchangeAlt,
  FaStar,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaSeedling,
  FaCameraRetro,
} from "react-icons/fa";
import { GiPlasticDuck } from "react-icons/gi";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: IconType;
  /** Hex colour used for the card's accent glow and icon key */
  tint: string;
  cover?: string;
  platform: "Web" | "Android";
  badge?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    title: "Script Doctor",
    tagline: "Reads a doctor's handwriting before it causes harm",
    description:
      "Photograph a handwritten prescription and get a transcription, plain-language directions, and on-device safety checks.",
    fullDescription:
      "An Android app built for DSH Hacks V2 (AI x Healthcare). It transcribes each medication line with Gemini vision, explains the directions in plain language, admits uncertainty with confidence ratings and alternate readings, then runs safety rules on the device: error-prone abbreviations, dose-format traps, look-alike drug pairs, and high-alert drugs. Everything rolls up into a single risk level.",
    icon: FaPrescriptionBottleAlt,
    tint: "#e5484d",
    cover: "/projects/script-doctor/08_result_top.png",
    platform: "Android",
    badge: "DSH Hacks V2",
    techStack: ["Kotlin Multiplatform", "Compose", "Gemini API", "Ktor"],
    githubUrl: "https://github.com/JasperRosales/script-doctor",
    features: [
      "Structured transcription of drug, strength, route, frequency and duration",
      "Confidence rating and alternate readings for every medication",
      "On-device checks for ISMP abbreviations, trailing zeros, and look-alike drugs",
      "Risk banner: low risk, verify before use, or confirm with prescriber",
      "Local scan history",
    ],
  },
  {
    title: "Quack Overflow",
    tagline: "The AI rubber duck that refuses to give you the answer",
    description:
      "A Socratic debugging partner: paste your code, explain the bug, and an animated duck asks questions until you find it yourself.",
    fullDescription:
      "Built for Next Byte Hacks V5. Beginners paste errors into AI tools, copy the fix, and learn nothing. Quack only asks questions. Every reply goes through a two-stage leak guard, a deterministic near-copy detector and an AI judge, so the duck never hands over the fix. Code runs in the browser and every solved bug lands in a journal.",
    icon: GiPlasticDuck,
    tint: "#f5b300",
    cover: "/projects/quack-overflow/2-debug-conversation.png",
    platform: "Web",
    badge: "Next Byte Hacks V5",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Pyodide", "Monaco"],
    githubUrl: "https://github.com/JasperRosales/quack-overflow",
    liveUrl: "https://quack-overflow-bice.vercel.app",
    features: [
      "Question-only duck chat with a four-step hint ladder",
      "Leak guard using Smith-Waterman alignment plus an LLM judge",
      "Runs Python and JavaScript in sandboxed Web Workers",
      "Bug journal that spots your repeat mistakes",
      "Voice mode and Lighthouse accessibility score of 100",
    ],
  },
  {
    title: "GasNet",
    tagline: "Decision support and POS for an LPG distributor",
    description:
      "An admin dashboard and staff point-of-sale for CJG LPG Trading, with AI insights on sales and inventory.",
    fullDescription:
      "GasNet runs day-to-day operations for CJG LPG Trading's cylinder distribution. Staff record sales and print receipts from the POS, while the admin dashboard tracks branches, inventory, transactions and sales targets. An analytics page uses Gemini to turn the numbers into sales recommendations.",
    icon: FaStore,
    tint: "#0091ff",
    cover: "/projects/gasnet/gn_admin_analytics.png",
    platform: "Web",
    badge: "Client work",
    techStack: ["React", "TypeScript", "Vite", "Supabase", "Gemini API"],
    liveUrl: "https://gasnet-admin-demo.vercel.app",
    features: [
      "Staff POS with receipts and transaction history",
      "Branch dashboard with KPIs and sales targets",
      "AI-generated sales insights and recommendations",
      "Inventory, product catalog, and report export",
    ],
  },
  {
    title: "PetPal",
    tagline: "A pixel pet that grows from your real steps",
    description:
      "An offline-first habit game. Raise a pet with your steps and battle friends nearby over Bluetooth or a hotspot.",
    fullDescription:
      "PetPal turns habits into a game with no account and no internet needed. Your pet levels up from real step counts, learns moves, and fights friends in local 1v1 or 2v2 battles over Bluetooth or LAN. There's also a co-op ten-floor raid dungeon. Pet and move docs are generated straight from the game data.",
    icon: FaPaw,
    tint: "#30a46c",
    platform: "Android",
    techStack: ["Kotlin Multiplatform", "Compose", "Room", "Koin", "Bluetooth"],
    githubUrl: "https://github.com/JasperRosales/petpal",
    features: [
      "Pet growth driven by the step sensor",
      "Local battles over Bluetooth or LAN, 1v1 and Duo 2v2",
      "Co-op raid dungeon with a boss floor",
      "In-app updates from GitHub releases",
    ],
  },
  {
    title: "Revice",
    tagline: "A magic remote for any device",
    description:
      "Pair your phone with a TV or tablet over Wi-Fi, present slides from your phone, and send files both ways.",
    fullDescription:
      "Revice pairs devices on the same network with a 4-digit code. No server and no account: devices find each other with mDNS and talk over TCP. Send a PDF deck to the big screen and drive it from your phone with a laser pointer, next-slide preview and timer, or share any file in either direction. It also runs on Android TV.",
    icon: FaExchangeAlt,
    tint: "#8e4ec6",
    platform: "Android",
    techStack: ["Kotlin", "Jetpack Compose", "mDNS", "TCP sockets"],
    githubUrl: "https://github.com/JasperRosales/revice",
    features: [
      "Present PDFs with volume keys or a Bluetooth clicker",
      "Laser pointer, blank screen, preview and timer",
      "Two-way file transfer with Share to Revice",
      "Works on Android TV and Google TV",
    ],
  },
  {
    title: "Astra",
    tagline: "A journal where every entry becomes a star",
    description:
      "Journal entries become stars in your own night sky, forming constellations you can explore, search and replay.",
    fullDescription:
      "Mood sets each star's colour and importance sets its brightness. Entries that share a name link into labelled constellations. Pan and zoom the sky, scrub the timeline to see it on any past day, or press play to watch it form star by star. Built for a website hackathon with plain HTML, CSS and Canvas, with no frameworks and no backend.",
    icon: FaStar,
    tint: "#6e56cf",
    cover: "/projects/astra/desktop-sky.png",
    platform: "Web",
    badge: "Hackathon",
    techStack: ["JavaScript", "Canvas 2D", "HTML", "CSS"],
    githubUrl: "https://github.com/JasperRosales/astra",
    liveUrl: "https://jasperrosales.github.io/astra/",
    features: [
      "Entries become stars coloured by mood",
      "Constellations, search, and a sky report",
      "Timeline scrubbing and star-by-star replay",
      "Export, import, and save the sky as a PNG",
    ],
  },
  {
    title: "Workflow",
    tagline: "CV builder and resume analyzer in one place",
    description:
      "Build an ATS-friendly CV with live editing, then score it against a job description with AI.",
    fullDescription:
      "Workflow combines two tools job seekers usually juggle. The CV builder has live editing, drag-and-drop sections and PDF export. The resume analyzer compares a resume to a job description, scores ATS fit, finds skill gaps, and suggests what to change.",
    icon: FaFileAlt,
    tint: "#12a594",
    cover: "/projects/resume-analyzer/overview.png",
    platform: "Web",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JasperRosales/workflow",
    liveUrl: "https://resume-analyzer-beta-seven.vercel.app",
    features: [
      "Live CV editing with drag-and-drop sections",
      "PDF export",
      "ATS scoring and keyword matching",
      "Skill-gap report with recommendations",
    ],
  },
  {
    title: "Invoice Generator",
    tagline: "Professional invoices without an account",
    description:
      "A privacy-first invoice tool for freelancers. Everything stays in the browser, then exports to PDF.",
    fullDescription:
      "Create invoices with company and client details, unlimited line items, tax, discounts and shipping, then export to PDF or JSON. Nothing is saved to a server or cookie. Two templates with a custom accent colour and a live preview as you type.",
    icon: FaFileInvoiceDollar,
    tint: "#f76b15",
    cover: "/projects/invoice-generator/overview.png",
    platform: "Web",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "react-pdf"],
    githubUrl: "https://github.com/JasperRosales/invoice-generator",
    liveUrl: "https://invoice-generator-three-nu.vercel.app",
    features: [
      "Live preview with two templates",
      "Tax, percent or flat discounts, and shipping",
      "PDF download plus JSON export and import",
      "No storage: data stays in memory",
    ],
  },
  {
    title: "Flori",
    tagline: "The language of flowers",
    description:
      "A flower encyclopedia with meanings, colour codes, and care guides for 120 blooms.",
    fullDescription:
      "Flori helps people explore flowers and what they mean. Search by name, colour or feeling, open any flower for its full story, including what each colour and stem count says, and learn how to water and care for it.",
    icon: FaSeedling,
    tint: "#46a758",
    cover: "/projects/flori/home.png",
    platform: "Web",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/JasperRosales/Flori",
    liveUrl: "https://flori-lovat.vercel.app",
    features: [
      "Search by name, colour, or meaning",
      "Colour and stem-count meanings",
      "Watering, sunlight and care guides",
      "Favourites for quick access",
    ],
  },
  {
    title: "Last Seen",
    tagline: "Moments kept as Polaroids, offline",
    description:
      "A private photo journal that turns moments into timestamped Polaroid-style memories stored only on your phone.",
    fullDescription:
      "Last Seen is an offline-first photo journal. Capture a moment, add a note, and it becomes a nostalgic Polaroid with an automatic timestamp. Favourite and organize memories. Everything lives in local SQLite, with no account, backend, or cloud upload.",
    icon: FaCameraRetro,
    tint: "#d6409f",
    platform: "Android",
    techStack: ["React Native", "Expo", "TypeScript", "SQLite"],
    githubUrl: "https://github.com/JasperRosales/last-seen",
    features: [
      "Polaroid-style cards with automatic timestamps",
      "Personal notes and favourites",
      "Local SQLite storage, no cloud",
    ],
  },
];
