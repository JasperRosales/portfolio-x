import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { improvements } from "@/data/services";
import { projects } from "@/data/projects";
import { orgProjects } from "@/data/org-projects";
import { otherExperience } from "@/data/experience";
import { useGithubCredentials } from "@/data/credentials";
import type { SectionId } from "@/data/sections";
import { Spade } from "@/components/casino/PlayingCard";
import { Page, Rise } from "@/components/casino/ui";
import OffTheClock from "@/components/sections/OffTheClock";
import LuxeCard, { Ornament, type Suit } from "@/components/casino/LuxeCard";

const SUITS: { s: Suit; name: string; red: boolean }[] = [
  { s: "♠", name: "spades", red: false },
  { s: "♥", name: "hearts", red: true },
  { s: "♦", name: "diamonds", red: true },
  { s: "♣", name: "clubs", red: false },
];

/** The portrait as the ace of spades; it tilts toward the pointer. */
function PortraitCard() {
  const still = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 16 });
  const sry = useSpring(ry, { stiffness: 160, damping: 16 });
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (still || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 22);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 22);
  };

  return (
    <div className="[perspective:1100px] mx-auto w-[min(76vw,360px)]" onPointerMove={onMove} onPointerLeave={() => { rx.set(0); ry.set(0); }}>
      <motion.div
        initial={still ? false : { rotateY: 180, rotateZ: -10, y: 40, opacity: 0 }}
        animate={{ rotateY: 0, rotateZ: -3, y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX: srx, rotateY: sry, fontSize: 36 }}
        className="card-face relative aspect-[5/7] rounded-[22px] p-[18px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] [transform-style:preserve-3d]"
      >
        <span className="absolute left-3 top-3 flex flex-col items-center leading-none text-[var(--card-ink)]">
          <span className="font-card font-bold text-[34px]">A</span>
          <Spade className="w-5 mt-1" />
        </span>
        <span className="absolute right-3 bottom-3 rotate-180 flex flex-col items-center leading-none text-[var(--card-ink)]">
          <span className="font-card font-bold text-[34px]">A</span>
          <Spade className="w-5 mt-1" />
        </span>
        <div className="absolute inset-[48px_38px] rounded-[14px] overflow-hidden border-2 border-[var(--gold-lo)]/70 bg-[var(--felt-deep)]">
          <img src="/Jasper.webp" alt="Portrait of Jasper Rosales" className="w-full h-full object-cover" />
          <span className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-black/80 to-transparent">
            <span className="block font-card font-bold text-[var(--ivory)] text-lg leading-tight">Jasper Rosales</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[var(--gold-hi)]">Ace developer</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function StatChip({ value, label, color, delay }: { value: number | string; label: string; color: string; delay: number }) {
  const still = useReducedMotion();
  return (
    <motion.div
      initial={still ? false : { opacity: 0, y: -60, rotate: -90 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 180, damping: 14, delay }}
      className="flex flex-col items-center text-center will-change-transform"
    >
      <span className="chip relative w-24 h-24 sm:w-28 sm:h-28 grid place-items-center" style={{ ["--chip" as string]: color }}>
        <span className="relative z-10 font-card font-bold text-3xl sm:text-4xl text-[var(--ivory)] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          {value}
        </span>
      </span>
      <span className="mt-3 text-sm font-semibold text-[var(--text-2)] max-w-[9rem] leading-snug">{label}</span>
    </motion.div>
  );
}

export default function HomeSection({ go }: { go: (id: SectionId) => void }) {
  const still = useReducedMotion();
  const { certificates, badges } = useGithubCredentials();
  const fade = (delay: number) =>
    still ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay } };

  return (
    <Page>
      <section className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-10 items-center min-h-[calc(100svh-190px)]">
        <div>
          <motion.div {...fade(0.3)} className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold)]/30 bg-black/20 px-4 py-2 text-sm text-[var(--text-2)]">
            {/* the pulse is fenced in a clipped layer so it doesn't promote the rest of the page */}
            <span className="relative grid place-items-center w-6 h-6 -m-1.5 rounded-full overflow-hidden will-change-transform">
              <span className="ping-soft absolute inset-[7px] rounded-full bg-[#3ddc84]" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#3ddc84]" />
            </span>
            Open for freelance work
          </motion.div>

          <motion.h1
            {...fade(0.42)}
            className="mt-7 font-card font-bold tracking-[-0.03em] leading-[0.88] text-[clamp(3.4rem,13vw,7.5rem)]"
          >
            <span className="block text-[var(--text)]">Jasper</span>
            <span className="block italic gold-text pb-2">Rosales</span>
          </motion.h1>

          <motion.p {...fade(0.6)} className="mt-6 max-w-md text-lg md:text-xl leading-relaxed text-[var(--text-2)]">
            I build web and Android software that helps companies run cleaner operations and make decisions from
            real numbers. President of CICS Balayan, and the developer behind most of its tools.
          </motion.p>

          <motion.div {...fade(0.75)} className="mt-9 flex flex-wrap gap-3.5">
            <button type="button" onClick={() => go("projects")} className="btn-gold px-7 py-3.5">
              See my projects <ArrowRight size={17} />
            </button>
            <button type="button" onClick={() => go("contact")} className="btn-line px-7 py-3.5">
              Get in touch
            </button>
          </motion.div>
        </div>

        <PortraitCard />
      </section>

      <OffTheClock />

      <section className="mt-24">
        <Rise>
          <p className="eyebrow">What I bring to the table</p>
          <h2 className="mt-2 font-card font-bold text-[clamp(2rem,5vw,3.2rem)] leading-tight">Four of a kind</h2>
        </Rise>
        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {improvements.map((item, i) => {
            const suit = SUITS[i % SUITS.length];
            return (
              <Rise key={item.title} delay={i * 0.08} className="h-full">
                <LuxeCard rank="A" suit={suit.s} label={`Ace of ${suit.name}`} className="h-full">
                  <span className={`block text-center text-5xl leading-none ${suit.red ? "text-[var(--card-red)]" : "text-[var(--card-ink)]"} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                    {suit.s}
                  </span>
                  <h3 className="mt-5 text-center font-card text-[1.35rem] font-bold leading-snug">{item.title}</h3>
                  <Ornament suit={suit.s} className="my-4 px-4" />
                  <p className="text-center text-[15px] leading-relaxed">{item.description}</p>
                </LuxeCard>
              </Rise>
            );
          })}
        </div>
      </section>

      <section className="mt-24">
        <Rise>
          <p className="eyebrow">The pot so far</p>
          <h2 className="mt-2 font-card font-bold text-[clamp(2rem,5vw,3.2rem)] leading-tight">Chips on the table</h2>
        </Rise>
        <div className="panel mt-8 p-8 sm:p-10 grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4 justify-items-center">
          <StatChip value={projects.length} label="Personal builds" color="#b3202a" delay={0} />
          <StatChip value={orgProjects.length} label="CICS Balayan projects" color="#1f4fa8" delay={0.08} />
          <StatChip value={certificates.length} label="HackerRank certificates" color="#141414" delay={0.16} />
          <StatChip value={badges.length} label="Course badges" color="#2f8f4e" delay={0.24} />
          <StatChip value={otherExperience.length} label="Leadership roles" color="#8c6a22" delay={0.32} />
        </div>
      </section>
    </Page>
  );
}
