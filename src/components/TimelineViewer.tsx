import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MapPin, type LucideIcon } from "lucide-react";

export interface TimelineItem {
  id: string;
  kind: string;
  title: string;
  org?: string;
  date?: string;
  location?: string;
  description?: string;
  points?: string[];
  icon?: ReactNode;
}

export type KindStyles = Record<string, { color: string; icon: LucideIcon }>;

const STEP = 132;

export default function TimelineViewer({
  title,
  items,
  kinds,
  start,
  onClose,
}: {
  title: string;
  items: TimelineItem[];
  kinds: KindStyles;
  start: number;
  onClose: () => void;
}) {
  const [[idx, dir], setState] = useState<[number, number]>([start, 0]);
  const nodes = useRef<(HTMLButtonElement | null)[]>([]);
  const still = useReducedMotion();
  const m = items[idx];
  const { color, icon: Icon } = kinds[m.kind];

  const go = (i: number) => {
    if (i < 0 || i >= items.length || i === idx) return;
    setState([i, i > idx ? 1 : -1]);
  };

  useEffect(() => {
    nodes.current[idx]?.scrollIntoView({ behavior: still ? "auto" : "smooth", inline: "center", block: "nearest" });
  }, [idx, still]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  const width = items.length * STEP;

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} timeline`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[80] bg-[var(--clay)] overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-6 pb-16 min-h-full flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <h2 className="emboss text-3xl sm:text-5xl font-extrabold tracking-tight">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close timeline" className="nm-btn w-12 h-12 rounded-full grid place-items-center">
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--ink-3)]">
          {Object.entries(kinds).map(([k, v]) => (
            <span key={k} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: v.color }} />
              {k}
            </span>
          ))}
        </div>

        <div className="no-scrollbar mt-4 pt-5 pb-2 -mx-5 sm:-mx-8 overflow-x-auto snap-x snap-mandatory">
          <div className="relative h-[178px]" style={{ width: width + 64, paddingInline: 32 }}>
            <div className="nm-in-sm absolute top-[44px] h-3.5 rounded-full" style={{ left: 32, width }} />
            <motion.div
              className="absolute top-[49px] h-1 rounded-full bg-black"
              style={{ left: 32 + STEP / 2 }}
              initial={still ? false : { width: 0 }}
              animate={{ width: idx * STEP }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: still ? 0 : 0.15 }}
            />
            {items.map((t, i) => {
              const c = kinds[t.kind].color;
              const NodeIcon = kinds[t.kind].icon;
              const active = i === idx;
              return (
                <motion.button
                  key={t.id}
                  ref={(el) => { nodes.current[i] = el; }}
                  type="button"
                  onClick={() => go(i)}
                  aria-current={active ? "step" : undefined}
                  aria-label={`${t.kind}: ${t.title}`}
                  initial={still ? false : { opacity: 0, y: 30, scale: 0.4 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: still ? 0 : 0.1 + i * 0.035, type: "spring", stiffness: 380, damping: 22 }}
                  className="snap-center absolute top-0 flex flex-col items-center group"
                  style={{ left: 32 + i * STEP, width: STEP }}
                >
                  <motion.span
                    animate={{ scale: active ? 1.18 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`relative w-[100px] h-[100px] grid place-items-center rounded-full ${active ? "" : "nm-sm"}`}
                    style={active ? { background: c } : undefined}
                  >
                    {active && <span className="glow absolute inset-0 rounded-full" style={{ ["--tint" as string]: c }} />}
                    <span
                      className={`relative w-14 h-14 rounded-full grid place-items-center ${active ? "bg-white/20 text-white" : "nm-in-sm"}`}
                      style={active ? undefined : { color: i < idx ? "#000" : c }}
                    >
                      <NodeIcon size={22} strokeWidth={2.2} />
                    </span>
                  </motion.span>
                  <span className={`mt-4 px-2 text-xs leading-snug line-clamp-2 text-center ${active ? "font-bold text-black" : "text-[var(--ink-3)] group-hover:text-black"}`}>
                    {t.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-6 flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={m.id}
              initial={still ? false : { opacity: 0, x: dir * 80, rotate: dir * 1.5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={still ? { opacity: 0 } : { opacity: 0, x: dir * -80, rotate: dir * -1.5 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="nm-lg rounded-[36px] p-6 sm:p-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start overflow-hidden relative"
            >
              <span aria-hidden className="absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: color }} />
              <div
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-[28px] grid place-items-center text-white text-4xl sm:text-5xl glow"
                style={{ background: `linear-gradient(145deg, ${color}, color-mix(in srgb, ${color} 65%, #000))`, ["--tint" as string]: color }}
              >
                {m.icon ?? <Icon size={44} />}
              </div>
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: color }}>{m.kind}</span>
                  {m.date && <span className="nm-in-sm rounded-full px-3 py-1 text-xs font-bold text-black">{m.date}</span>}
                  <span className="text-xs font-semibold text-[var(--ink-3)]">{idx + 1} of {items.length}</span>
                </div>
                <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.05]">{m.title}</h3>
                {m.org && <p className="mt-2 text-lg font-medium text-[var(--ink-2)]">{m.org}</p>}
                {m.location && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--ink-3)]"><MapPin size={14} /> {m.location}</p>
                )}
                {m.description && <p className="mt-5 max-w-2xl leading-relaxed text-[var(--ink-3)]">{m.description}</p>}
                {m.points && m.points.length > 0 && (
                  <ul className="mt-5 grid gap-2.5 max-w-2xl">
                    {m.points.map((p, i) => (
                      <motion.li
                        key={i}
                        initial={still ? false : { opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06 }}
                        className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink-3)]"
                      >
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button type="button" onClick={() => go(idx - 1)} disabled={idx === 0} className="nm-btn rounded-full pl-3 pr-5 py-3 font-semibold flex items-center gap-1 disabled:opacity-40 disabled:pointer-events-none">
              <ChevronLeft size={18} /> Previous
            </button>
            <button type="button" onClick={() => go(idx + 1)} disabled={idx === items.length - 1} className="nm-ink rounded-full pl-5 pr-3 py-3 font-semibold flex items-center gap-1 disabled:opacity-40 disabled:pointer-events-none">
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
