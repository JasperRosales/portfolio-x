import { workExperience, otherExperience, education } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

interface Entry {
  key: string;
  date?: string;
  title: string;
  subtitle?: string;
  location?: string;
  points: string[];
}

function Timeline({ heading, entries }: { heading: string; entries: Entry[] }) {
  if (!entries.length) return null;
  return (
    <div className="mt-14 first:mt-0">
      <h3 className="text-2xl font-bold mb-8">{heading}</h3>
      <ol className="relative pl-10 sm:pl-14">
        <span aria-hidden className="nm-in-sm absolute left-[9px] sm:left-[15px] top-2 bottom-2 w-2.5 rounded-full" />
        {entries.map((e) => (
          <li key={e.key} className="relative pb-8 last:pb-0">
            <span aria-hidden className="nm-sm absolute -left-10 sm:-left-14 top-6 w-7 h-7 sm:w-10 sm:h-10 rounded-full grid place-items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-black" />
            </span>
            <Reveal className="nm rounded-[28px] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h4 className="text-xl font-bold leading-tight">{e.title}</h4>
                  {e.subtitle && <p className="mt-1 text-[var(--ink-2)] font-medium">{e.subtitle}</p>}
                  {e.location && <p className="text-sm text-[var(--ink-3)]">{e.location}</p>}
                </div>
                {e.date && (
                  <span className="nm-in-sm self-start shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold text-black">
                    {e.date}
                  </span>
                )}
              </div>
              {e.points.length > 0 && (
                <ul className="mt-5 grid gap-2.5">
                  {e.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink-3)]">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function ExperienceSection() {
  const toEntries = (list: typeof workExperience, prefix: string): Entry[] =>
    list.map((j) => ({ key: `${prefix}-${j.title}-${j.date}`, date: j.date, title: j.title, subtitle: j.subtitle, location: j.location, points: j.achievements }));

  return (
    <section id="experience" className="max-w-4xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-20">
      <SectionHeading title="Experience" lead="Client work, leadership roles, and where I studied." />
      <Timeline heading="Professional" entries={toEntries(workExperience, "work")} />
      <Timeline heading="Leadership and organizations" entries={toEntries(otherExperience, "other")} />
      <Timeline
        heading="Education"
        entries={education.map((ed) => ({
          key: ed.institution + ed.period,
          date: ed.period,
          title: ed.institution,
          subtitle: ed.degree,
          location: ed.location,
          points: ed.achievements ?? [],
        }))}
      />
    </section>
  );
}
