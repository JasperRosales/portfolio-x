import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { timeline, kindStyle, type MilestoneKind } from "@/data/timeline";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AchievementsViewer from "@/components/AchievementsViewer";

const kinds = Object.keys(kindStyle) as MilestoneKind[];

export default function AchievementsSection() {
  const [open, setOpen] = useState<number | null>(null);
  const still = useReducedMotion();
  const counts = kinds.map((k) => ({ k, n: timeline.filter((m) => m.kind === k).length }));

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <SectionHeading
        title="Achievements"
        lead="Certifications, awards, events I ran, and roles I've held, on one timeline."
      />

      <Reveal className="nm-lg rounded-[40px] p-6 sm:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {counts.map(({ k, n }) => (
            <button
              key={k}
              type="button"
              onClick={() => setOpen(timeline.findIndex((m) => m.kind === k))}
              className="nm-btn rounded-3xl p-5 text-left"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[var(--ink-2)]">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: kindStyle[k].color }} />
                {k === "Certification" ? "Certifications" : k === "Leadership" ? "Leadership" : `${k}s`}
              </span>
              <span className="mt-3 block font-display text-5xl font-extrabold text-black leading-none">{n}</span>
            </button>
          ))}
        </div>

        {/* Preview of the timeline: dots light up along the groove */}
        <div className="relative mt-10 sm:mt-12 h-16">
          <div className="nm-in-sm absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 rounded-full" />
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-black origin-left w-full"
            initial={still ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
          <div className="absolute inset-0 flex items-center justify-between">
            {timeline.map((m, i) => (
              <motion.button
                key={m.id}
                type="button"
                aria-label={`Open ${m.title}`}
                onClick={() => setOpen(i)}
                initial={still ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * (1.4 / timeline.length), type: "spring", stiffness: 500, damping: 18 }}
                whileHover={{ scale: 1.5 }}
                className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full ring-[3px] ring-[var(--clay)]"
                style={{ background: kindStyle[m.kind].color }}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-[var(--ink-3)] max-w-md">
            Tap any dot, or open the full timeline to step through each one.
          </p>
          <button type="button" onClick={() => setOpen(0)} className="nm-ink rounded-full px-8 py-4 font-semibold self-start sm:self-auto">
            View achievements
          </button>
        </div>
      </Reveal>

      {open !== null && <AchievementsViewer start={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
