import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { sectionCards, type SectionCard, type SectionId } from "@/data/sections";
import { CardFace, Spade } from "./PlayingCard";
import { focusFrame } from "./DealScene";

/**
 * Pages live on the felt. Each page comes in from its own camera angle (set
 * per card in data/sections.ts). Leaving a page, its card is dealt down over
 * it, and the table scene picks up from that same card.
 */
export default function SectionStage({
  active,
  leaving,
  onSelect,
  onTable,
  children,
}: {
  active: SectionId;
  /** The page is handing over to the table */
  leaving?: boolean;
  onSelect: (id: SectionId) => void;
  onTable: () => void;
  children: ReactNode;
}) {
  const still = useReducedMotion();
  const card = sectionCards.find((c) => c.id === active)!;
  const [swinging, setSwinging] = useState(true);
  return (
    <div className="fixed inset-0 felt-bg overflow-hidden">
      <div aria-hidden className="felt-grain pointer-events-none absolute inset-0 opacity-60" />

      <TopBar active={active} onSelect={onSelect} onTable={onTable} />

      <div className="absolute inset-x-0 bottom-0 top-[76px] sm:top-[88px]" style={{ perspective: 1400, perspectiveOrigin: "50% 30%" }}>
        <AnimatePresence mode="wait" initial>
          <motion.main
            key={active}
            ref={(el) => el?.focus({ preventScroll: true })}
            // will-change only while the camera swings the page in; dropping it
            // afterwards lets the page re-rasterise crisp at rest
            style={{ willChange: swinging ? "transform, opacity" : "auto" }}
            onAnimationStart={() => setSwinging(true)}
            onAnimationComplete={() => setSwinging(false)}
            tabIndex={-1}
            aria-label={card.label}
            className="page-scroll absolute inset-0 overflow-y-auto overflow-x-hidden outline-none [transform-origin:50%_30%]"
            initial={still ? { opacity: 0 } : { opacity: 0, ...card.angle }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0, x: "0%", y: "0%" }}
            exit={still ? { opacity: 0 } : { opacity: 0, z: -520, rotateX: 18, y: "8%", transition: { duration: 0.38, ease: [0.5, 0, 0.75, 0] } }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>

      {leaving && <CardDown card={card} />}
    </div>
  );
}

/** The current card is laid down over the page, landing where the table shot begins. */
function CardDown({ card }: { card: SectionCard }) {
  const f = focusFrame();
  return (
    <div className="fixed inset-0 z-50" aria-hidden>
      <motion.div
        className="absolute inset-0 felt-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.32, delay: 0.06 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,transparent_40%,rgba(2,8,6,0.6)_100%)]" />
      <motion.div
        className="absolute will-change-transform"
        style={{ left: f.cx - f.w / 2, top: f.cy - f.h / 2, width: f.w, height: f.h, fontSize: f.w / 10 }}
        initial={{ opacity: 0, scale: 1.7, rotate: -9, y: -f.h * 0.25 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.75, 0.25, 1], opacity: { duration: 0.15 } }}
      >
        <span className="absolute inset-0 rounded-[0.7em] shadow-[0_2em_4em_-1em_rgba(0,0,0,0.8)]" />
        <CardFace card={card} />
      </motion.div>
    </div>
  );
}

function TopBar({ active, onSelect, onTable }: { active: SectionId; onSelect: (id: SectionId) => void; onTable: () => void }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 h-[76px] sm:h-[88px] px-3 sm:px-8 flex items-center justify-between gap-3 border-b border-[var(--gold)]/20 bg-[linear-gradient(180deg,rgba(4,17,12,0.97),rgba(4,17,12,0.88))] sm:bg-[linear-gradient(180deg,rgba(4,17,12,0.92),rgba(4,17,12,0.6))] sm:backdrop-blur-md">
      <button
        type="button"
        onClick={onTable}
        className="group flex items-center gap-3 shrink-0 rounded-full pr-2"
        aria-label="Back to the table"
      >
        <span className="relative w-10 h-10 sm:w-11 sm:h-11">
          <span className="chip absolute inset-0 transition-transform duration-500 group-hover:rotate-[200deg]" style={{ ["--chip" as string]: "#7d1622" }} />
          <span className="absolute inset-0 grid place-items-center font-card italic font-bold text-[13px] text-[var(--ivory)] z-10">JR</span>
        </span>
        <span className="hidden md:block text-left leading-tight">
          <span className="block font-card font-bold text-[var(--text)]">Jasper Rosales</span>
          <span className="block text-xs text-[var(--text-3)] group-hover:text-[var(--gold-hi)] transition-colors">Back to the table</span>
        </span>
      </button>

      <nav aria-label="Sections" className="flex items-end gap-1.5 sm:gap-2.5">
        {sectionCards.map((c) => {
          const on = c.id === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelect(c.id)}
              aria-current={on ? "page" : undefined}
              aria-label={c.label}
              className="group flex flex-col items-center gap-1"
            >
              <motion.span
                animate={{ y: on ? -3 : 0, rotate: on ? 0 : -3 }}
                whileHover={{ y: -3, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className={`relative block w-[38px] h-[52px] sm:w-[40px] sm:h-[54px] rounded-[6px] card-face shadow-[0_6px_14px_-6px_rgba(0,0,0,0.8)] ${
                  on ? "ring-2 ring-[var(--gold-hi)] shadow-[0_0_18px_rgba(244,221,152,0.45)]" : ""
                }`}
              >
                <span className="absolute left-[4px] top-[3px] flex flex-col items-center leading-none text-[var(--card-ink)]">
                  <span className="font-card font-bold text-[12px] sm:text-[13px] tracking-[-0.04em]">{c.rank}</span>
                  <Spade className="mt-[1px] w-[8px]" />
                </span>
                <c.icon className="absolute right-[5px] bottom-[5px] w-[14px] h-[14px] text-[var(--card-ink)]/70" strokeWidth={2} />
              </motion.span>
              <span
                className={`hidden sm:block text-[11px] font-semibold tracking-wide transition-colors ${
                  on ? "text-[var(--gold-hi)]" : "text-[var(--text-3)] group-hover:text-[var(--text)]"
                }`}
              >
                {c.label}
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
