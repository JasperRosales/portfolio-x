import type { ReactNode } from "react";
import { certificates } from "./certificates";
import { keyAchievements } from "./achievements";
import { otherExperience } from "./experience";

export type MilestoneKind = "Certification" | "Award" | "Event" | "Leadership";

export interface Milestone {
  id: string;
  kind: MilestoneKind;
  title: string;
  org?: string;
  /** Shown on the node when known. Add dates here as you confirm them. */
  date?: string;
  description: string;
  points?: string[];
  icon?: ReactNode;
}

export const kindStyle: Record<MilestoneKind, { color: string; label: string }> = {
  Certification: { color: "#0091ff", label: "Certification" },
  Award: { color: "#f5b300", label: "Award" },
  Event: { color: "#d6409f", label: "Event" },
  Leadership: { color: "#30a46c", label: "Leadership" },
};

const cert = (id: string): Milestone => {
  const c = certificates.find((x) => x.id === id)!;
  return { id, kind: "Certification", title: c.name, org: c.issuer, date: c.date, description: c.description, icon: c.icon };
};

const award = (title: string, kind: MilestoneKind, date?: string): Milestone => {
  const a = keyAchievements.find((x) => x.title === title)!;
  return { id: title, kind, title: a.title, date, description: a.description, icon: a.icon };
};

const role = (title: string): Milestone => {
  const r = otherExperience.find((x) => x.title === title)!;
  return {
    id: `${title}-${r.date}`,
    kind: "Leadership",
    title: r.title,
    org: r.subtitle,
    date: r.date.split(" - ")[0],
    description: `${r.title}, ${r.subtitle}.`,
    points: r.achievements,
  };
};

/** In order of the story they tell, left to right. */
export const timeline: Milestone[] = [
  cert("java-hackerrank"),
  cert("cs50-harvard"),
  cert("c-essentials-cisco"),
  cert("js-essentials-cisco"),
  cert("freecodecamp-core-certifications"),
  cert("oracle-java-foundations"),
  cert("sql-hackerrank"),
  cert("go-hackerrank"),
  cert("react-hackerrank"),
  cert("aws-amazon"),
  role("Business Manager"),
  role("Second Class Officer"),
  role("Committee Chairperson on Digital Graphics"),
  award("Maze Mastery Coding Champion", "Award"),
  award("CICS Github Community Founder", "Leadership"),
  award("HackerRank Achiever", "Award"),
  role("Vice President"),
  award("31st Founding Anniversary Organizer", "Event", "2025"),
  role("President"),
  award("32nd Founding Anniversary Organizer", "Event"),
  award("Rank 3 Student Leadership Awardee", "Award", "2026"),
  award("2x SSC Service Awardee", "Award"),
];
