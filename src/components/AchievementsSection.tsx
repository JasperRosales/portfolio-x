import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { keyAchievements } from "@/data/achievements";
import { REPO_URL, useGithubCredentials, type Credential } from "@/data/credentials";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type Shown = Credential & { kind: "certificate" | "badge" };

export default function AchievementsSection() {
  const { certificates, badges } = useGithubCredentials();
  const [shown, setShown] = useState<Shown | null>(null);
  const still = useReducedMotion();

  // Certificate rail: arrow buttons for desktop, where there's no swipe
  const railRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const updateEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);
  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges, certificates.length]);
  const scrollRail = (dir: 1 | -1) => {
    const el = railRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 28), behavior: still ? "auto" : "smooth" });
  };

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <SectionHeading title="Achievements" />

      {/* Highlights — an editorial ledger instead of a card grid */}
      <ol className="grid md:grid-cols-2 gap-x-12">
        {keyAchievements.map((a, i) => (
          <motion.li
            key={a.title}
            initial={still ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group flex gap-5 py-6 border-t border-black/10"
          >
              <span className="deboss font-display text-5xl md:text-6xl font-extrabold leading-none tabular-nums w-[2.4ch] shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2.5">
                  <span className="nm-ink w-8 h-8 rounded-full grid place-items-center text-sm shrink-0 group-hover:rotate-12 transition-transform">
                    {a.icon}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{a.title}</h3>
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-3)]">{a.description}</p>
              </span>
          </motion.li>
        ))}
      </ol>

      {/* Certificates — framed prints on a scroll rail */}
      <div className="mt-20 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-3)]">Verified by HackerRank</p>
          <h3 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
            Certificates <span className="text-[var(--ink-3)] font-bold">/{certificates.length}</span>
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="nm-btn rounded-full px-4 py-2 text-sm font-semibold inline-flex items-center gap-2"
          >
            <FaGithub /> Synced from GitHub <FiArrowUpRight />
          </a>
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            disabled={edges.start}
            aria-label="Previous certificate"
            className="nm-btn w-10 h-10 rounded-full grid place-items-center text-lg disabled:opacity-35 disabled:pointer-events-none"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            disabled={edges.end}
            aria-label="Next certificate"
            className="nm-ink w-10 h-10 rounded-full grid place-items-center text-lg disabled:opacity-35 disabled:pointer-events-none"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        onScroll={updateEdges}
        className="no-scrollbar -mx-5 sm:-mx-8 mt-8 px-5 sm:px-8 pt-4 pb-10 flex gap-7 overflow-x-auto snap-x snap-mandatory">
        {certificates.map((c, i) => (
          <motion.button
            key={c.file}
            type="button"
            onClick={() => setShown({ ...c, kind: "certificate" })}
            initial={still ? false : { opacity: 0, y: 40, rotate: i % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
            whileHover={still ? undefined : { rotate: 0, y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ type: "spring", stiffness: 160, damping: 20, delay: still ? 0 : i * 0.06 }}
            className="nm-lg snap-start shrink-0 w-[78vw] max-w-[360px] sm:w-[360px] rounded-[26px] p-3 text-left cursor-zoom-in"
          >
            <span className="nm-in-sm block rounded-[18px] p-2">
              <img
                src={c.src}
                alt={`${c.issuer} ${c.name} certificate`}
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[1.414] object-cover rounded-xl"
              />
            </span>
            <span className="flex items-center justify-between gap-3 px-2 pt-3 pb-1">
              <span className="min-w-0">
                <span className="block font-bold text-black leading-tight truncate">{c.name}</span>
                <span className="block text-sm text-[var(--ink-3)]">{c.issuer}</span>
              </span>
              <span className="nm-ink w-9 h-9 rounded-full grid place-items-center shrink-0">
                <FiArrowUpRight />
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      {/* Badges — a pressed-in medal wall */}
      <div className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-3)]">Cisco · Oracle · HackerRank</p>
        <h3 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
          Course Badges <span className="text-[var(--ink-3)] font-bold">/{badges.length}</span>
        </h3>
      </div>

      <Reveal className="nm-in mt-8 rounded-[36px] p-5 sm:p-8">
        <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-5">
          {badges.map((b, i) => (
            <motion.li
              key={b.file}
              initial={still ? false : { opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: still ? 0 : (i % 9) * 0.04 }}
            >
              <button
                type="button"
                onClick={() => setShown({ ...b, kind: "badge" })}
                title={b.name}
                aria-label={`${b.name} badge`}
                className="nm-btn group relative block w-full aspect-square rounded-full p-2 sm:p-2.5 cursor-zoom-in hover:-translate-y-1.5"
              >
                <img
                  src={b.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                />
              </button>
            </motion.li>
          ))}
        </ul>
      </Reveal>

      <Lightbox item={shown} onClose={() => setShown(null)} />
    </section>
  );
}

function Lightbox({ item, onClose }: { item: Shown | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/90"
        >
          <motion.figure
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className={`w-full flex flex-col items-center gap-4 ${item.kind === "certificate" ? "max-w-4xl" : "max-w-xs"}`}
          >
            <img
              src={item.src}
              alt={item.name}
              className={`block max-w-full object-contain rounded-xl ${item.kind === "certificate" ? "max-h-[75vh] w-auto" : "w-full aspect-square"}`}
            />
            <figcaption className="w-full flex items-center justify-between gap-3">
              <span className="min-w-0">
                <span className="block font-bold text-white leading-tight">{item.name}</span>
                <span className="block text-sm text-neutral-400">{item.issuer}</span>
              </span>
              <span className="flex gap-2 shrink-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="w-10 h-10 rounded-full grid place-items-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <FaGithub />
                </a>
                <button type="button" onClick={onClose} aria-label="Close" className="w-10 h-10 rounded-full grid place-items-center bg-white text-black">
                  <FiX />
                </button>
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
