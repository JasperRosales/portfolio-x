import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/experience";
import { keyAchievements } from "@/data/achievements";
import { REPO_URL, useGithubCredentials, type Credential } from "@/data/credentials";
import { Overlay, Page, Rise, SectionTitle } from "@/components/casino/ui";
import LuxeCard, { Ornament, isRedSuit, type Suit } from "@/components/casino/LuxeCard";

const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

type Shown = Credential & { kind: "certificate" | "badge" };

export default function EducationSection() {
  const { certificates, badges } = useGithubCredentials();
  const [shown, setShown] = useState<Shown | null>(null);
  const still = useReducedMotion();

  const railRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const updateEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
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
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: still ? "auto" : "smooth" });
  };
  const close = useCallback(() => setShown(null), []);

  return (
    <Page>
      <SectionTitle rank="K" eyebrow="King of spades" title="Education" lead="Where I learned the game, and what I picked up along the way." />

      <div className="grid lg:grid-cols-2 gap-7">
        {education.map((e, i) => {
          const suit: Suit = i === 0 ? "♦" : "♣";
          return (
            <Rise key={e.institution} delay={i * 0.1} className="h-full">
              <LuxeCard rank="K" suit={suit} label={e.period} className="h-full">
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-[var(--card-ink)] text-[var(--gold-hi)] shrink-0 shadow-[0_0_0_3px_var(--stock-tl),0_0_0_4px_var(--frame)]">
                    <GraduationCap size={21} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-card text-2xl sm:text-[1.75rem] font-bold leading-tight">{e.institution}</h3>
                    <p className="mt-1 font-card italic text-[1.05rem] text-[#5a4a33]">{e.degree}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-[#7a6a52]"><MapPin size={14} /> {e.location}</p>
                  </div>
                </div>

                <Ornament suit={suit} className="mt-6" />

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a6a2a]">Coursework</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {e.coursework.map((c) => <span key={c} className="tag !text-xs !py-1">{c}</span>)}
                </div>

                {e.achievements && (
                  <ul className="mt-6 grid gap-2.5">
                    {e.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className={`mt-[1px] shrink-0 ${isRedSuit(suit) ? "text-[var(--card-red)]" : "text-[var(--card-ink)]"}`}>{suit}</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </LuxeCard>
            </Rise>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="mt-20">
        <Rise>
          <p className="eyebrow">Winning hands</p>
          <h3 className="mt-2 font-card font-bold text-[clamp(2rem,5vw,3rem)] leading-tight">Achievements</h3>
        </Rise>
        <p className="mt-2 font-card italic text-lg text-[var(--text-3)]">A straight flush in hearts.</p>
        <ol className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyAchievements.map((a, i) => (
            <motion.li
              key={a.title}
              initial={still ? false : { opacity: 0, y: 50, rotate: (i % 2 ? 1 : -1) * 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: (i % 4) * 0.07 }}
              className="h-full"
            >
              <LuxeCard tone="noir" rank={RANKS[i]} suit="♥" className="h-full">
                <span className="mx-auto grid place-items-center w-12 h-12 rounded-full text-lg text-[var(--card-ink)] bg-[linear-gradient(180deg,var(--gold-hi),var(--gold)_60%,#a8802f)] shadow-[0_0_0_3px_#1b1712,0_0_0_4px_rgba(216,180,90,.5)] transition-transform duration-500 group-hover:rotate-[20deg]">
                  {a.icon}
                </span>
                <h4 className="mt-5 text-center font-card text-[1.2rem] font-bold leading-snug">{a.title}</h4>
                <Ornament suit="♥" className="my-4 px-6" />
                <p className="text-center text-[14px] leading-relaxed text-[var(--text-3)]">{a.description}</p>
              </LuxeCard>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Certificates */}
      <div className="mt-20 flex items-end justify-between gap-4 flex-wrap">
        <Rise>
          <p className="eyebrow">Verified by HackerRank</p>
          <h3 className="mt-2 font-card font-bold text-[clamp(2rem,5vw,3rem)] leading-tight">
            Certificates <span className="text-[var(--text-3)] text-[0.6em]">/{certificates.length}</span>
          </h3>
        </Rise>
        <div className="flex items-center gap-2.5">
          <a href={REPO_URL} target="_blank" rel="noreferrer" className="btn-line px-4 py-2 text-sm">
            <FaGithub /> Synced from GitHub <FiArrowUpRight />
          </a>
          <button type="button" onClick={() => scrollRail(-1)} disabled={edges.start} aria-label="Previous certificate"
            className="btn-line w-10 h-10 text-lg disabled:opacity-30 disabled:pointer-events-none">
            <FiChevronLeft />
          </button>
          <button type="button" onClick={() => scrollRail(1)} disabled={edges.end} aria-label="Next certificate"
            className="btn-gold w-10 h-10 text-lg disabled:opacity-30 disabled:pointer-events-none">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div ref={railRef} onScroll={updateEdges}
        className="no-scrollbar -mx-4 sm:-mx-8 mt-6 px-4 sm:px-8 pt-4 pb-10 flex gap-6 overflow-x-auto snap-x snap-mandatory">
        {certificates.map((c, i) => (
          <motion.div
            key={c.file}
            initial={still ? false : { opacity: 0, y: 40, rotate: i % 2 ? 4 : -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2 }}
            whileHover={still ? undefined : { rotate: 0, y: -8 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 20, delay: still ? 0 : i * 0.06 }}
            className="snap-start shrink-0 w-[80vw] max-w-[380px] sm:w-[380px]"
          >
            <LuxeCard tilt={false} label={c.issuer} bodyClassName="px-6 pt-5 pb-6">
              <button
                type="button"
                onClick={() => setShown({ ...c, kind: "certificate" })}
                className="luxe-window block w-full cursor-zoom-in"
                aria-label={`Enlarge ${c.name} certificate`}
              >
                <img src={c.src} alt={`${c.issuer} ${c.name} certificate`} loading="lazy" decoding="async"
                  className="block w-full aspect-[1.414] object-cover" />
              </button>
              <span className="mt-5 flex items-center justify-between gap-3">
                <span className="font-card text-lg font-bold text-[var(--card-ink)] leading-tight">{c.name}</span>
                <a href={c.href} target="_blank" rel="noreferrer" aria-label={`${c.name} on GitHub`} className="btn-ink w-9 h-9 shrink-0"><FiArrowUpRight /></a>
              </span>
            </LuxeCard>
          </motion.div>
        ))}
      </div>

      {/* Badges as chips */}
      <div className="mt-8">
        <Rise>
          <p className="eyebrow">Cisco · Oracle · HackerRank</p>
          <h3 className="mt-2 font-card font-bold text-[clamp(2rem,5vw,3rem)] leading-tight">
            Course badges <span className="text-[var(--text-3)] text-[0.6em]">/{badges.length}</span>
          </h3>
        </Rise>
        <div className="panel mt-8 p-5 sm:p-8">
          <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-4 sm:gap-5">
            {badges.map((b, i) => (
              <motion.li
                key={b.file}
                initial={still ? false : { opacity: 0, y: -40, rotate: -120 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 16, delay: still ? 0 : (i % 9) * 0.04 }}
              >
                <button
                  type="button"
                  onClick={() => setShown({ ...b, kind: "badge" })}
                  title={b.name}
                  aria-label={`${b.name} badge`}
                  className="group block w-full aspect-square rounded-full p-[3px] bg-[conic-gradient(var(--gold-hi),var(--gold-lo),var(--gold-hi),var(--gold-lo),var(--gold-hi))] shadow-[0_8px_16px_-6px_rgba(0,0,0,0.8)] cursor-zoom-in transition-transform hover:-translate-y-1.5"
                >
                  <span className="block w-full h-full rounded-full bg-[var(--ivory)] p-1.5 sm:p-2">
                    <img src={b.src} alt="" loading="lazy" decoding="async"
                      className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]" />
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {shown && (
          <Overlay key="lightbox" onClose={close} label={shown.name}>
            <motion.figure
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className={`w-full flex flex-col items-center gap-4 ${shown.kind === "certificate" ? "max-w-4xl" : "max-w-xs"}`}
            >
              <img src={shown.src} alt={shown.name}
                className={`block max-w-full object-contain rounded-xl ${shown.kind === "certificate" ? "max-h-[75vh] w-auto" : "w-full aspect-square bg-[var(--ivory)] rounded-full p-4"}`} />
              <figcaption className="w-full flex items-center justify-between gap-3">
                <span className="min-w-0">
                  <span className="block font-bold text-[var(--text)] leading-tight">{shown.name}</span>
                  <span className="block text-sm text-[var(--text-3)]">{shown.issuer}</span>
                </span>
                <span className="flex gap-2 shrink-0">
                  <a href={shown.href} target="_blank" rel="noreferrer" aria-label="View on GitHub" className="btn-line w-10 h-10"><FaGithub /></a>
                  <button type="button" onClick={close} aria-label="Close" className="btn-gold w-10 h-10"><FiX /></button>
                </span>
              </figcaption>
            </motion.figure>
          </Overlay>
        )}
      </AnimatePresence>
    </Page>
  );
}
