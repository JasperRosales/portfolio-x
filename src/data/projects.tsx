import type { IconType } from "react-icons";
import {
  FaPrescriptionBottleAlt,
  FaStore,
  FaPaw,
  FaStar,
  FaSeedling,
  FaRobot,
  FaProjectDiagram,
  FaTerminal,
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
  /** App icon shown in place of a screenshot */
  logo?: string;
  /** Private repository: no code link is shown */
  isPrivate?: boolean;
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
    cover: "/projects/script-doctor/08_result_top.webp",
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
    cover: "/projects/quack-overflow/2-debug-conversation.webp",
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
    title: "Zoih",
    tagline: "Coding agents in your pocket",
    description:
      "An Android app that turns my PC into a programming assistant I can drive from my phone, with any coding agent.",
    fullDescription:
      "Zoih connects to a PC over SSH through a private Tailscale network and runs a coding agent CLI headless in the chosen project: Claude Code, Copilot, OpenCode, Antigravity, or a custom command. Answers and tool calls stream back as a chat. It also has a live shell, an SFTP file browser, and usage limits for every agent. It started as a TypeScript CLI agent and grew into a native app.",
    icon: FaTerminal,
    tint: "#ff801f",
    logo: "/projects/zoih/logo.webp",
    platform: "Android",
    isPrivate: true,
    techStack: ["Kotlin", "Jetpack Compose", "SSH", "Tailscale", "TypeScript"],
    features: [
      "Streams answers and tool calls from Claude Code, Copilot, OpenCode or Antigravity",
      "Separate chat and session per project and agent",
      "Read-only, Edits or Full autonomy chosen up front",
      "Live shell with a pseudo-terminal and an SFTP file browser",
      "Connection banner that explains what's wrong",
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
    cover: "/projects/petpal/home.webp",
    logo: "/projects/petpal/logo.webp",
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
    title: "Astra",
    tagline: "A journal where every entry becomes a star",
    description:
      "Journal entries become stars in your own night sky, forming constellations you can explore, search and replay.",
    fullDescription:
      "Mood sets each star's colour and importance sets its brightness. Entries that share a name link into labelled constellations. Pan and zoom the sky, scrub the timeline to see it on any past day, or press play to watch it form star by star. Built for a website hackathon with plain HTML, CSS and Canvas, with no frameworks and no backend.",
    icon: FaStar,
    tint: "#6e56cf",
    cover: "/projects/astra/desktop-sky.webp",
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
    title: "Isha",
    tagline: "A personal assistant that runs your day from your phone",
    description:
      "A native Android assistant that reads your mail, deadlines and budget, acts in your apps, and keeps working offline.",
    fullDescription:
      "Isha is a personal assistant built for daily life rather than coding. It chats with Groq and Gemini, acts in Gmail, Calendar, Classroom, Drive and Notion through Composio, and asks for approval before anything consequential. When the phone is offline it switches to a small on-device model. Deadlines, a mail digest and the budget all sync to the phone, so they work without a connection.",
    icon: FaRobot,
    tint: "#f76b15",
    cover: "/projects/isha/home.webp",
    logo: "/projects/isha/logo.webp",
    platform: "Android",
    isPrivate: true,
    techStack: ["Kotlin", "Jetpack Compose", "Gemini API", "Groq", "Composio", "MediaPipe"],
    features: [
      "Tool calls across Gmail, Calendar, Classroom, Drive and Notion, with an approval card",
      "Offline mode with on-device models such as Gemma 3 and Qwen 2.5",
      "Budget tracking by chat, plus a Classroom deadline view",
      "Push replies, exact-time reminders and a daily briefing",
      "Voice mode, home-screen widget, and Share to isha",
      "Practice exams generated from your notes, PDFs or slides",
    ],
  },
  {
    title: "Cann",
    tagline: "Automation pipelines across 1,000+ apps",
    description:
      "Chain app actions into flows that run on demand, once, every few minutes, or daily, straight from an Android phone.",
    fullDescription:
      "Cann builds automations on top of Composio. A flow is a list of tool calls that run in order, and each step can use earlier results. Describe a flow in plain words and the AI finds the right tools and builds the steps for you. Flows run manually or on a schedule with WorkManager, and results land in a Runs tab and as notifications.",
    icon: FaProjectDiagram,
    tint: "#ff8a3d",
    cover: "/projects/cann/flow-editor.webp",
    logo: "/projects/cann/logo.webp",
    platform: "Android",
    isPrivate: true,
    techStack: ["Kotlin", "Jetpack Compose", "WorkManager", "Composio"],
    features: [
      "Flows that run manually, once, every N minutes, or daily",
      "Pass results between steps with templates like {{step1.path}}",
      "Build or edit a flow by describing it in plain words",
      "Connect app accounts with managed OAuth",
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
    cover: "/projects/flori/home.webp",
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
    title: "GasNet",
    tagline: "Decision support and POS for an LPG distributor",
    description:
      "An admin dashboard and staff point-of-sale for CJG LPG Trading, with AI insights on sales and inventory.",
    fullDescription:
      "GasNet runs day-to-day operations for CJG LPG Trading's cylinder distribution. Staff record sales and print receipts from the POS, while the admin dashboard tracks branches, inventory, transactions and sales targets. An analytics page uses Gemini to turn the numbers into sales recommendations.",
    icon: FaStore,
    tint: "#0091ff",
    cover: "/projects/gasnet/gn_admin_analytics.webp",
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
];
