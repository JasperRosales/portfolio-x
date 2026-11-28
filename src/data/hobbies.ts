import type { LucideIcon } from "lucide-react";
import { Mountain, Compass, Swords, BookOpen, Music, Telescope } from "lucide-react";

export interface Hobby {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** Pocket number on the wheel, in European wheel order after zero */
  pocket: number;
  red: boolean;
  tags?: string[];
}

export const favouriteTrack = { title: "All of a Sudden", artist: "Eyji" };

export const hobbies: Hobby[] = [
  {
    title: "Hiking",
    tagline: "The long way up",
    description: "Trails, climbs and the view from the top. Time outdoors is how I reset away from the screen.",
    icon: Mountain,
    pocket: 32,
    red: true,
  },
  {
    title: "Adventures",
    tagline: "Random exploration",
    description: "Picking a direction with no plan and seeing where it leads. New places, side streets and detours on purpose.",
    icon: Compass,
    pocket: 15,
    red: false,
    tags: ["Random exploration"],
  },
  {
    title: "Weapon practice",
    tagline: "Kusarigama, katana and arnis",
    description: "Training with the kusarigama, the katana and arnis. Drills that reward patience, timing and focus.",
    icon: Swords,
    pocket: 19,
    red: true,
    tags: ["Kusarigama", "Katana", "Arnis"],
  },
  {
    title: "Studying new things",
    tagline: "Always a beginner at something",
    description: "Picking up new subjects just because they're interesting, in tech and well outside it.",
    icon: BookOpen,
    pocket: 4,
    red: false,
  },
  {
    title: "Music",
    tagline: `Favourite track: ${favouriteTrack.title}`,
    description: `Something is always playing while I work, and my favourite track is ${favouriteTrack.title} by ${favouriteTrack.artist}.`,
    icon: Music,
    pocket: 21,
    red: true,
    tags: [`${favouriteTrack.title} · ${favouriteTrack.artist}`],
  },
  {
    title: "Astronomy",
    tagline: "Looking up",
    description: "Constellations, planets and dark skies. You can see it in Astra, my journal that turns entries into stars.",
    icon: Telescope,
    pocket: 2,
    red: false,
  },
];
