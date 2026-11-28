/**
 * Projects in the CICS Balayan GitHub organization (github.com/cicsbalayan)
 * that I contributed to. Commit counts are from GitHub's commit search
 * (author:JasperRosales) as of November 2026. Work built for the campus and
 * its offices counts as client work; Forma was a hackathon entry.
 */
import type { ProjectCategory } from "./projects";

export interface OrgProject {
  title: string;
  category: ProjectCategory;
  repo: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  commits: number;
  /** Accent colour for the card face */
  tint: string;
}

export const ORG_URL = "https://github.com/cicsbalayan";

export const orgProjects: OrgProject[] = [
  {
    title: "DP Blast Generator",
    category: "Client",
    repo: "db-blast-generator",
    tagline: "Display-picture blasts for every student org",
    description:
      "Upload a photo, rotate and zoom it, pick an SSC, CICS or CET frame, and add your name and year level for a ready-made caption. Everything renders in the browser with the Canvas API.",
    techStack: ["Next.js", "TypeScript", "Canvas API", "shadcn/ui"],
    liveUrl: "https://db-blast-generator.vercel.app",
    commits: 33,
    tint: "#6e56cf",
  },
  {
    title: "ALIANCICS Digital Showcase",
    category: "Client",
    repo: "digital-showcase-web",
    tagline: "A student-run gallery of apps and projects",
    description:
      "Students add their own apps through a pull request, so the showcase doubles as a hands-on Git and GitHub lesson for the community.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://digital-showcase-web.vercel.app",
    commits: 32,
    tint: "#0091ff",
  },
  {
    title: "Medical Certificate System",
    category: "Client",
    repo: "Automated-Medical-Certificate-System-",
    tagline: "Automated certificates for the campus nurse office",
    description:
      "Students fill in a medical form online, the nurse office reviews it on an admin page, and the system produces the signed medical certificate.",
    techStack: ["JavaScript", "HTML", "CSS", "Vercel Functions"],
    liveUrl: "https://automated-medical-certificate-syste.vercel.app",
    commits: 31,
    tint: "#e5484d",
  },
  {
    title: "PiTech",
    category: "Client",
    repo: "PiTech",
    tagline: "A phone-and-PC photo booth for events",
    description:
      "A logged-in phone becomes the booth camera and a PC becomes its live preview over WebRTC with Supabase Realtime signaling. Photos are framed, zoomed, saved and exported at 1080 × 1080.",
    techStack: ["React", "TypeScript", "WebRTC", "Supabase", "Framer Motion"],
    liveUrl: "https://pitech.vercel.app",
    commits: 30,
    tint: "#f5b300",
  },
  {
    title: "CICS Balayan Website",
    category: "Client",
    repo: "cics-main-page",
    tagline: "The college's home on the web",
    description:
      "The main site of the College of Informatics and Computing Sciences, Balayan campus, where students reach the organization's and department's services online.",
    techStack: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    liveUrl: "https://cics-main-page.vercel.app",
    commits: 13,
    tint: "#30a46c",
  },
  {
    title: "Atty",
    category: "Client",
    repo: "Atty",
    tagline: "Faster attendance for school events",
    description:
      "Admins sign in with a PIN and record attendance by SR-Code. A Next.js server forwards requests to a Google Apps Script API over Google Sheets, so the secrets never reach the browser.",
    techStack: ["Next.js", "TypeScript", "Apps Script", "Google Sheets"],
    liveUrl: "https://atty-balayan.vercel.app",
    commits: 10,
    tint: "#ff801f",
  },
  {
    title: "Guide Gave Me You",
    category: "Client",
    repo: "map-view",
    tagline: "A 3D campus map for freshmen",
    description:
      "Explore the campus in 3D, search for buildings and offices, and jump the camera straight to them with details for each location.",
    techStack: ["Next.js", "Three.js", "TypeScript", "shadcn/ui"],
    liveUrl: "https://guide-gave-me-you.vercel.app",
    commits: 9,
    tint: "#12a594",
  },
  {
    title: "Forma",
    category: "Hackathon",
    repo: "hackathon-gitogether",
    tagline: "AI virtual fitting for online shops",
    description:
      "Built at the GitTogether hackathon: virtual try-on and personalised outfit suggestions to help retailers sell more and keep shoppers engaged.",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Framer Motion"],
    liveUrl: "https://hackathon-gitogether.vercel.app",
    commits: 8,
    tint: "#d6409f",
  },
];
