import { Briefcase, GraduationCap } from "lucide-react";
import { workExperience, education } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

interface Entry {
  key: string;
  title: string;
  org: string;
  date: string;
  location: string;
  points: string[];
}

function Column({ heading, icon: Icon, entries }: { heading: string; icon: typeof Briefcase; entries: Entry[] }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
        <span className="nm-in-sm w-11 h-11 rounded-full grid place-items-center"><Icon size={18} /></span>
        {heading}
      </h3>
      <div className="grid gap-6">
        {entries.map((e, i) => (
          <Reveal key={e.key} delay={i * 0.08} className="nm rounded-[28px] p-6 sm:p-7">
            <span className="nm-in-sm inline-block rounded-full px-3 py-1 text-xs font-bold text-black">{e.date}</span>
            <h4 className="mt-4 text-xl font-bold leading-tight">{e.title}</h4>
            <p className="mt-1 font-medium text-[var(--ink-2)]">{e.org}</p>
            <p className="text-sm text-[var(--ink-3)]">{e.location}</p>
            {e.points.length > 0 && (
              <ul className="mt-5 grid gap-2">
                {e.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <SectionHeading title="Experience and education" />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-start">
        <Column
          heading="Experience"
          icon={Briefcase}
          entries={workExperience.map((j) => ({ key: j.title + j.date, title: j.title, org: j.subtitle, date: j.date, location: j.location, points: j.achievements }))}
        />
        <Column
          heading="Education"
          icon={GraduationCap}
          entries={education.map((e) => ({ key: e.institution, title: e.institution, org: e.degree, date: e.period, location: e.location, points: e.achievements ?? [] }))}
        />
      </div>
    </section>
  );
}
