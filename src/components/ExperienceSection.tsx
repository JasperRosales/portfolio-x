import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Users, GraduationCap, ChevronDown, MapPin } from "lucide-react";
import { workExperience, otherExperience, education } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";

type Track = "Work" | "Leadership" | "Education";

interface Entry {
  key: string;
  track: Track;
  date: string;
  start: number;
  title: string;
  org: string;
  location?: string;
  points: string[];
}

const trackStyle: Record<Track, { color: string; icon: typeof Briefcase }> = {
  Work: { color: "#0091ff", icon: Briefcase },
  Leadership: { color: "#30a46c", icon: Users },
  Education: { color: "#8e4ec6", icon: GraduationCap },
};

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
function startOf(range: string) {
  const [m, y] = range.split(" - ")[0].trim().split(/\s+/);
  return Number(y) * 12 + Math.max(0, months.indexOf(m.slice(0, 3).toLowerCase()));
}

const entries: Entry[] = [
  ...workExperience.map((j) => ({ key: `w-${j.title}-${j.date}`, track: "Work" as const, date: j.date, start: startOf(j.date), title: j.title, org: j.subtitle, location: j.location, points: j.achievements })),
  ...otherExperience.map((j) => ({ key: `l-${j.title}-${j.date}`, track: "Leadership" as const, date: j.date, start: startOf(j.date), title: j.title, org: j.subtitle, location: j.location, points: j.achievements })),
  ...education.map((e) => ({ key: `e-${e.institution}`, track: "Education" as const, date: e.period, start: startOf(e.period), title: e.institution, org: e.degree, location: e.location, points: e.achievements ?? [] })),
].sort((a, b) => b.start - a.start);

const filters = ["All", "Work", "Leadership", "Education"] as const;
type Filter = (typeof filters)[number];

function Item({ e, side }: { e: Entry; side: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const still = useReducedMotion();
  const { color, icon: Icon } = trackStyle[e.track];
  const shown = open ? e.points : e.points.slice(0, 2);
  const hidden = e.points.length - 2;

  return (
    <li className={`relative grid md:grid-cols-2 md:gap-16 pl-16 md:pl-0`}>
      {/* Node on the line */}
      <motion.span
        aria-hidden
        initial={still ? false : { scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ type: "spring", stiffness: 420, damping: 20 }}
        className="nm absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-12 h-12 rounded-full grid place-items-center z-10"
      >
        <span className="w-8 h-8 rounded-full grid place-items-center text-white" style={{ background: color }}>
          <Icon size={15} strokeWidth={2.4} />
        </span>
      </motion.span>

      {/* Opposite side: the date, large, facing the line (desktop only) */}
      <motion.div
        aria-hidden
        initial={still ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`hidden md:block pt-5 ${side === "left" ? "md:col-start-2 md:row-start-1 pl-4" : "md:col-start-1 md:row-start-1 text-right pr-4"}`}
      >
        <p className="deboss font-display font-extrabold text-6xl lg:text-7xl leading-none tracking-tight">{e.date.split(" - ")[0].split(" ").pop()}</p>
        <p className="mt-3 text-sm font-semibold text-[var(--ink-3)]">{e.date}</p>
      </motion.div>

      <motion.article
        initial={still ? false : { opacity: 0, x: side === "left" ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`nm rounded-[28px] p-6 sm:p-7 md:row-start-1 ${side === "right" ? "md:col-start-2" : "md:col-start-1"}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: color }}>{e.track}</span>
          <span className="nm-in-sm rounded-full px-3 py-1 text-xs font-bold text-black">{e.date}</span>
        </div>
        <h4 className="mt-4 text-xl sm:text-2xl font-bold leading-tight">{e.title}</h4>
        <p className="mt-1 font-medium text-[var(--ink-2)]">{e.org}</p>
        {e.location && (
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--ink-3)]"><MapPin size={13} /> {e.location}</p>
        )}
        {e.points.length > 0 && (
          <ul className="mt-5 grid gap-2.5">
            <AnimatePresence initial={false}>
              {shown.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink-3)] overflow-hidden"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                  {p}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
        {hidden > 0 && (
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}
            className="nm-btn mt-5 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold">
            {open ? "Show less" : `Show ${hidden} more`}
            <ChevronDown size={15} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </motion.article>
    </li>
  );
}

export default function ExperienceSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = useMemo(() => entries.filter((e) => filter === "All" || e.track === filter), [filter]);
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div className="[&>div]:mb-0">
          <SectionHeading title="Experience" lead="Client work, leadership roles, and school, newest first." />
        </div>
        <div role="group" aria-label="Filter timeline" className="nm-in self-start md:self-end rounded-full p-1.5 flex flex-wrap gap-1">
          {filters.map((f) => {
            const active = filter === f;
            return (
              <button key={f} type="button" aria-pressed={active} onClick={() => setFilter(f)} className="relative rounded-full px-4 py-2.5 text-sm font-semibold">
                {active && <motion.span layoutId="exp-pill" className="nm-ink absolute inset-0 rounded-full" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                <span className={`relative flex items-center gap-2 ${active ? "text-white" : "text-[var(--ink-3)] hover:text-black"}`}>
                  {f !== "All" && <span className="w-2 h-2 rounded-full" style={{ background: trackStyle[f].color }} />}
                  {f}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <ol ref={ref} className="relative grid gap-10 md:gap-14">
        {/* The line: a groove, with a black fill that grows as you scroll */}
        <span aria-hidden className="nm-in-sm absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-2.5 rounded-full" />
        <motion.span
          aria-hidden
          style={{ scaleY: fill }}
          className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 rounded-full bg-black origin-top"
        />
        {list.map((e, i) => (
          <Item key={`${filter}-${e.key}`} e={e} side={i % 2 === 0 ? "left" : "right"} />
        ))}
      </ol>
    </section>
  );
}
