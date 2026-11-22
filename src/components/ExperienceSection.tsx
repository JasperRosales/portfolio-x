import { Briefcase, Users, GraduationCap } from "lucide-react";
import { workExperience, otherExperience, education } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import TimelinePanel from "@/components/TimelinePanel";
import type { TimelineItem } from "@/components/TimelineViewer";

const kinds = {
  Work: { color: "#0091ff", icon: Briefcase },
  Leadership: { color: "#30a46c", icon: Users },
  Education: { color: "#8e4ec6", icon: GraduationCap },
};

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function startOf(range: string) {
  const [m, y] = range.split(" - ")[0].trim().split(/\s+/);
  return Number(y) * 12 + Math.max(0, months.indexOf(m.slice(0, 3).toLowerCase()));
}

/** Oldest first, so the journey reads left to right. */
const journey: (TimelineItem & { start: number })[] = [
  ...workExperience.map((j) => ({ id: `w-${j.title}-${j.date}`, kind: "Work", title: j.title, org: j.subtitle, date: j.date, location: j.location, points: j.achievements, start: startOf(j.date) })),
  ...otherExperience.map((j) => ({ id: `l-${j.title}-${j.date}`, kind: "Leadership", title: j.title, org: j.subtitle, date: j.date, location: j.location, points: j.achievements, start: startOf(j.date) })),
  ...education.map((e) => ({ id: `e-${e.institution}`, kind: "Education", title: e.institution, org: e.degree, date: e.period, location: e.location, points: e.achievements ?? [], start: startOf(e.period) })),
].sort((a, b) => a.start - b.start);

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <SectionHeading title="My journey" lead="School, client work, and the leadership roles in between, from first to latest." />
      <TimelinePanel
        title="My journey"
        cta="View my journey"
        hint="Tap any dot, or open the full timeline to walk through it in order."
        items={journey}
        kinds={kinds}
        plural={{ Work: "Work", Leadership: "Leadership roles", Education: "Education" }}
      />
    </section>
  );
}
