import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Crown, MapPin } from "lucide-react";
import { otherExperience, workExperience, type Experience } from "@/data/experience";
import { Page, Rise, SectionTitle } from "@/components/casino/ui";
import LuxeCard, { Ornament, type Suit } from "@/components/casino/LuxeCard";

const LEAD_RANKS = ["K", "Q", "J", "10", "9", "8", "7"];

function Entry({ e, i, work }: { e: Experience; i: number; work?: boolean }) {
  const still = useReducedMotion();
  const suit: Suit = work ? "♦" : "♠";
  return (
    <motion.li
      initial={still ? false : { opacity: 0, x: -50, rotate: -3 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ type: "spring", stiffness: 140, damping: 18, delay: i * 0.05 }}
      className="relative pl-9 sm:pl-12"
    >
      {/* chip on the timeline */}
      <span
        aria-hidden
        className="chip absolute left-0 top-8 w-[22px] h-[22px] sm:w-7 sm:h-7"
        style={{ ["--chip" as string]: work ? "#b3202a" : "#1f4fa8" }}
      />
      <LuxeCard
        tone="noir"
        rank={work ? "A" : LEAD_RANKS[i % LEAD_RANKS.length]}
        suit={suit}
        label={e.date}
        tilt={false}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-x-6 gap-y-2">
          <div>
            <h4 className="font-card text-2xl sm:text-[1.7rem] font-bold leading-tight">{e.title}</h4>
            <p className="mt-1 font-card italic text-[1.05rem] text-[var(--gold-hi)]/85">{e.subtitle}</p>
          </div>
          <span className="flex items-center gap-1.5 text-sm shrink-0 text-[var(--text-3)]">
            <MapPin size={13} /> {e.location}
          </span>
        </div>

        <Ornament suit={suit} className="mt-5" />

        <ul className="mt-5 grid md:grid-cols-2 gap-x-8 gap-y-2.5">
          {e.achievements.map((a, j) => (
            <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-[var(--text-2)]">
              <span className={`mt-[1px] shrink-0 ${work ? "text-[#ec6a70]" : "text-[var(--gold)]"}`}>{suit}</span>
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {e.techStack.map((t) => <span key={t} className="tag !text-xs !py-1">{t}</span>)}
        </div>
      </LuxeCard>
    </motion.li>
  );
}

function Track({ title, icon: Icon, items, work }: { title: string; icon: typeof Briefcase; items: Experience[]; work?: boolean }) {
  return (
    <div>
      <Rise className="flex items-center gap-3 mb-7">
        <span className="grid place-items-center w-11 h-11 rounded-full bg-[var(--gold)]/15 text-[var(--gold-hi)] border border-[var(--gold)]/30">
          <Icon size={19} />
        </span>
        <h3 className="font-card text-3xl font-bold">{title}</h3>
      </Rise>
      <ol className="relative grid gap-6 before:absolute before:left-[10px] sm:before:left-[13px] before:top-6 before:bottom-6 before:w-px before:bg-gradient-to-b before:from-[var(--gold)]/60 before:via-[var(--gold)]/25 before:to-transparent">
        {items.map((e, i) => <Entry key={e.title + e.date} e={e} i={i} work={work} />)}
      </ol>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <Page>
      <SectionTitle
        rank="Q"
        eyebrow="Queen of spades"
        title="Experience"
        lead="Freelance work for clients, and the student organizations I help run."
      />
      <div className="grid gap-16">
        <Track title="Work" icon={Briefcase} items={workExperience} work />
        <Track title="Leadership" icon={Crown} items={otherExperience} />
      </div>
    </Page>
  );
}
