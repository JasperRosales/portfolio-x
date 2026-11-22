import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import TimelineViewer, { type KindStyles, type TimelineItem } from "@/components/TimelineViewer";

/** Summary card: counts per kind, a row of tappable dots, and a button that opens the full timeline. */
export default function TimelinePanel({
  title,
  cta,
  hint,
  items,
  kinds,
  plural,
}: {
  title: string;
  cta: string;
  hint: string;
  items: TimelineItem[];
  kinds: KindStyles;
  plural: Record<string, string>;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const still = useReducedMotion();
  const keys = Object.keys(kinds);

  return (
    <>
      <Reveal className="nm-lg rounded-[40px] p-6 sm:p-10">
        <div className={`grid grid-cols-2 gap-4 sm:gap-5 ${keys.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
          {keys.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setOpen(items.findIndex((m) => m.kind === k))}
              className="nm-btn rounded-3xl p-5 text-left"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[var(--ink-2)]">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: kinds[k].color }} />
                {plural[k] ?? k}
              </span>
              <span className="mt-3 block font-display text-5xl font-extrabold text-black leading-none">
                {items.filter((m) => m.kind === k).length}
              </span>
            </button>
          ))}
        </div>

        <div className="relative mt-10 sm:mt-12 h-16">
          <div className="nm-in-sm absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 rounded-full" />
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-black origin-left w-full"
            initial={still ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
          <div className={`absolute inset-0 flex items-center ${items.length > 8 ? "justify-between" : "justify-around"}`}>
            {items.map((m, i) => (
              <motion.button
                key={m.id}
                type="button"
                aria-label={`Open ${m.title}`}
                onClick={() => setOpen(i)}
                initial={still ? false : { scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * (1.4 / items.length), type: "spring", stiffness: 500, damping: 18 }}
                whileHover={{ scale: 1.5 }}
                className={`rounded-full ring-[3px] ring-[var(--clay)] ${items.length > 12 ? "w-3.5 h-3.5 sm:w-5 sm:h-5" : "w-5 h-5 sm:w-7 sm:h-7"}`}
                style={{ background: kinds[m.kind].color }}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-[var(--ink-3)] max-w-md">{hint}</p>
          <button type="button" onClick={() => setOpen(0)} className="nm-ink rounded-full px-8 py-4 font-semibold self-start sm:self-auto">
            {cta}
          </button>
        </div>
      </Reveal>

      {open !== null && <TimelineViewer title={title} items={items} kinds={kinds} start={open} onClose={() => setOpen(null)} />}
    </>
  );
}
