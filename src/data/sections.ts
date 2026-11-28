import type { LucideIcon } from "lucide-react";
import { Home, GraduationCap, Briefcase, Layers, Mail } from "lucide-react";

export type SectionId = "home" | "education" | "experience" | "projects" | "contact";

/** A camera pose used when a section's page comes into view. */
export interface Angle {
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  z: number;
  x: string;
  y: string;
}

export interface SectionCard {
  id: SectionId;
  label: string;
  rank: string;
  blurb: string;
  icon: LucideIcon;
  /** Where the camera swings in from when this page opens */
  angle: Angle;
}

/** The hand: a royal flush in spades. */
export const sectionCards: SectionCard[] = [
  {
    id: "home",
    label: "Home",
    rank: "A",
    blurb: "Who's at the table",
    icon: Home,
    angle: { rotateX: 32, rotateY: 0, rotateZ: 0, z: -420, x: "0%", y: "18%" },
  },
  {
    id: "education",
    label: "Education",
    rank: "K",
    blurb: "School, awards, certificates",
    icon: GraduationCap,
    angle: { rotateX: 0, rotateY: -38, rotateZ: 0, z: -360, x: "-22%", y: "0%" },
  },
  {
    id: "experience",
    label: "Experience",
    rank: "Q",
    blurb: "Work and leadership",
    icon: Briefcase,
    angle: { rotateX: -34, rotateY: 0, rotateZ: 0, z: -380, x: "0%", y: "-16%" },
  },
  {
    id: "projects",
    label: "Projects",
    rank: "J",
    blurb: "My builds and CICS Balayan",
    icon: Layers,
    angle: { rotateX: 14, rotateY: 26, rotateZ: -7, z: -320, x: "16%", y: "6%" },
  },
  {
    id: "contact",
    label: "Contact",
    rank: "10",
    blurb: "Place your bet",
    icon: Mail,
    angle: { rotateX: 0, rotateY: 40, rotateZ: 0, z: -360, x: "22%", y: "0%" },
  },
];

export const isSectionId = (v: string): v is SectionId => sectionCards.some((c) => c.id === v);
