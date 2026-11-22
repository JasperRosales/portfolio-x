import { useEffect, useState } from "react";

/**
 * Certificates and course badges live in the GitHub profile repo
 * (github.com/JasperRosales/JasperRosales). Images are served straight from it,
 * and the folder listings are re-read at runtime so anything newly pushed there
 * shows up here without a redeploy. The lists below are the fallback / labels.
 */
export const PROFILE_REPO = "JasperRosales/JasperRosales";
const RAW = `https://raw.githubusercontent.com/${PROFILE_REPO}/main`;
export const REPO_URL = `https://github.com/${PROFILE_REPO}`;

export interface Credential {
  file: string;
  name: string;
  issuer: string;
  src: string;
  href: string;
}

type Folder = "certificates" | "badges";

const make = (folder: Folder, file: string, name: string, issuer: string): Credential => ({
  file,
  name,
  issuer,
  src: `${RAW}/${folder}/${encodeURIComponent(file)}`,
  href: `${REPO_URL}/blob/main/${folder}/${encodeURIComponent(file)}`,
});

const CERTS: [string, string][] = [
  ["software_engineer_certificate_page-0001.jpg", "Software Engineer"],
  ["sql_advanced_certificate_page-0001.jpg", "SQL (Advanced)"],
  ["frontend_developer_react certificate_page-0001.jpg", "Frontend Developer (React)"],
  ["problem_solving_intermediate certificate_page-0001.jpg", "Problem Solving (Intermediate)"],
  ["javascript_intermediate certificate_page-0001.jpg", "JavaScript (Intermediate)"],
];

const BADGES: [string, string, string][] = [
  ["c-essentials-1.jpg", "C Essentials 1", "Cisco"],
  ["c-essentials-2.png", "C Essentials 2", "Cisco"],
  ["c-advanced.png", "C Advanced", "Cisco"],
  ["python-essentials-1.1.png", "Python Essentials 1", "Cisco"],
  ["python-essentials-2.png", "Python Essentials 2", "Cisco"],
  ["javascript-essentials-1.png", "JavaScript Essentials 1", "Cisco"],
  ["javascript-essentials-2.png", "JavaScript Essentials 2", "Cisco"],
  ["html-essentials.png", "HTML Essentials", "Cisco"],
  ["css-essentials.png", "CSS Essentials", "Cisco"],
  ["oracle-java-foundations.jpeg", "Oracle Java Foundations", "Oracle"],
  ["java.png", "Java", "HackerRank"],
  ["sql.png", "SQL", "HackerRank"],
  ["data-analytics-essentials.png", "Data Analytics Essentials", "Cisco"],
  ["introduction-to-data-science.png", "Introduction to Data Science", "Cisco"],
  ["introduction-to-modern-ai.png", "Introduction to Modern AI", "Cisco"],
  ["introduction-to-cybersecurity.png", "Introduction to Cybersecurity", "Cisco"],
  ["endpoint-security.png", "Endpoint Security", "Cisco"],
  ["introduction-to-iot.png", "Introduction to IoT", "Cisco"],
  ["networking-basics.png", "Networking Basics", "Cisco"],
  ["networking-devices-and-initial-configuration.png", "Networking Devices & Initial Configuration", "Cisco"],
  ["network-addressing-and-basic-troubleshooting.png", "Network Addressing & Basic Troubleshooting", "Cisco"],
  ["operating-systems-basics.png", "Operating Systems Basics", "Cisco"],
  ["english-for-it-1.png", "English for IT 1", "Cisco"],
  ["english-for-it-2.png", "English for IT 2", "Cisco"],
  ["creating-compelling-reports.png", "Creating Compelling Reports", "Cisco"],
  ["ai-at-work-analyze-customer-reviews.png", "AI at Work: Analyze Customer Reviews", "Cisco"],
  ["introduction-to-greenhouse-gas-accounting-for-it.png", "Greenhouse Gas Accounting for IT", "Cisco"],
];

export const staticCertificates = CERTS.map(([f, n]) => make("certificates", f, n, "HackerRank"));
export const staticBadges = BADGES.map(([f, n, i]) => make("badges", f, n, i));

const IMAGE = /\.(png|jpe?g|webp|gif|svg)$/i;

/** "frontend_developer_react certificate_page-0001.jpg" → "Frontend Developer React" */
function prettify(file: string) {
  return file
    .replace(IMAGE, "")
    .replace(/[_ ]?certificate[_ ]?page-\d+$/i, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function listFolder(folder: Folder, signal: AbortSignal): Promise<string[] | null> {
  const key = `gh:${PROFILE_REPO}:${folder}`;
  try {
    const cached = sessionStorage.getItem(key);
    if (cached) return JSON.parse(cached);
  } catch { /* storage unavailable */ }
  try {
    const res = await fetch(`https://api.github.com/repos/${PROFILE_REPO}/contents/${folder}`, { signal });
    if (!res.ok) return null;
    const entries: { name: string; type: string }[] = await res.json();
    const names = entries.filter((e) => e.type === "file" && IMAGE.test(e.name)).map((e) => e.name);
    try { sessionStorage.setItem(key, JSON.stringify(names)); } catch { /* ignore */ }
    return names;
  } catch {
    return null;
  }
}

/** Keeps the curated order/labels, drops files removed from the repo, appends new ones. */
function merge(folder: Folder, known: Credential[], live: string[] | null, issuer: string) {
  if (!live) return known;
  const set = new Set(live);
  const kept = known.filter((c) => set.has(c.file));
  const seen = new Set(kept.map((c) => c.file));
  const added = live.filter((f) => !seen.has(f)).map((f) => make(folder, f, prettify(f), issuer));
  return [...kept, ...added];
}

export function useGithubCredentials() {
  const [certificates, setCertificates] = useState(staticCertificates);
  const [badges, setBadges] = useState(staticBadges);

  useEffect(() => {
    const ctrl = new AbortController();
    listFolder("certificates", ctrl.signal).then((l) => setCertificates(merge("certificates", staticCertificates, l, "HackerRank")));
    listFolder("badges", ctrl.signal).then((l) => setBadges(merge("badges", staticBadges, l, "Course badge")));
    return () => ctrl.abort();
  }, []);

  return { certificates, badges };
}
