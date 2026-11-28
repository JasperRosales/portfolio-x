import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { RotateCw, Play } from "lucide-react";
import { favouriteTrack, hobbies } from "@/data/hobbies";
import LuxeCard, { Ornament } from "@/components/casino/LuxeCard";
import { Rise } from "@/components/casino/ui";

const SEG = 360 / hobbies.length;

/** Point on a circle, measured clockwise from 12 o'clock. */
const pt = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [r * Math.sin(a), -r * Math.cos(a)].map((n) => +n.toFixed(2)).join(" ");
};
const wedge = (r0: number, r1: number, a0: number, a1: number) =>
  `M ${pt(r0, a0)} L ${pt(r1, a0)} A ${r1} ${r1} 0 0 1 ${pt(r1, a1)} L ${pt(r0, a1)} A ${r0} ${r0} 0 0 0 ${pt(r0, a0)} Z`;

/**
 * "Off the clock": a roulette wheel whose pockets are the things I do away
 * from the keyboard. It spins once when it scrolls into view; spin again or
 * bet on a pocket to deal a different card.
 */
export default function OffTheClock() {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  const wheelRot = useMotionValue(0);
  const ballRot = useMotionValue(0);
  const ballDrop = useMotionValue(0);
  const ballTop = useTransform(ballDrop, (d) => `${5.6 + 6.4 * d}%`);

  const [landed, setLanded] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);

  const spin = (target?: number) => {
    if (spinning) return;
    let i = target ?? Math.floor(Math.random() * hobbies.length);
    if (target === undefined && i === landed) i = (i + 1 + Math.floor(Math.random() * (hobbies.length - 1))) % hobbies.length;
    if (still) {
      setLanded(i);
      return;
    }
    setSpinning(true);
    const long = target === undefined;
    const turns = long ? 4 : 2;
    const duration = long ? 3.6 : 2.4;
    // Bring the pocket's centre to 12 o'clock, where the ball comes to rest
    const centre = i * SEG + SEG / 2;
    const cur = wheelRot.get();
    const next = Math.ceil(cur / 360) * 360 + turns * 360 + ((360 - centre) % 360);
    animate(wheelRot, next, { duration, ease: [0.12, 0.55, 0.18, 1] });
    animate(ballRot, ballRot.get() - (turns + 2) * 360, { duration, ease: [0.2, 0.6, 0.22, 1] });
    ballDrop.set(0);
    animate(ballDrop, [0, 0, 1, 0.55, 1, 0.85, 1], {
      duration,
      times: [0, 0.62, 0.78, 0.84, 0.9, 0.95, 1],
      ease: "easeInOut",
    }).then(() => {
      setSpinning(false);
      setLanded(i);
    });
  };

  useEffect(() => {
    if (!inView) return;
    const t = window.setTimeout(() => spin(), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const hobby = landed !== null ? hobbies[landed] : null;

  return (
    <section className="mt-24">
      <Rise>
        <p className="eyebrow">Off the clock</p>
        <h2 className="mt-2 font-card font-bold text-[clamp(2rem,5vw,3.2rem)] leading-tight">The person behind the hand</h2>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-[var(--text-2)]">
          What I'm up to away from the keyboard. Spin the wheel, or bet on a pocket.
        </p>
      </Rise>

      <div ref={ref} className="mt-10 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
        {/* Wheel */}
        <div className="flex flex-col items-center">
          <div className="relative w-[min(84vw,430px)] aspect-square drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]">
            <WheelRim />
            <motion.div className="absolute inset-0" style={{ rotate: wheelRot }}>
              <WheelHead landed={spinning ? null : landed} />
            </motion.div>
            {/* the ball */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ rotate: ballRot }}>
              <motion.span
                className="absolute left-1/2 w-[3.6%] aspect-square -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff,#e9e2d0_45%,#a8a092)] shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                style={{ top: ballTop }}
              />
            </motion.div>
            {/* marker */}
            <svg viewBox="0 0 20 16" className="absolute left-1/2 -top-[3%] w-[6%] -translate-x-1/2 drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]" aria-hidden>
              <path d="M0 0 H20 L10 16 Z" fill="url(#marker-gold)" />
              <defs>
                <linearGradient id="marker-gold" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#f4dd98" />
                  <stop offset="1" stopColor="#8c6a22" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <button type="button" onClick={() => spin()} disabled={spinning} className="btn-gold mt-8 px-7 py-3.5 disabled:opacity-60">
            <RotateCw size={17} className={spinning ? "animate-spin" : ""} />
            {spinning ? "No more bets…" : "Spin the wheel"}
          </button>
        </div>

        {/* Dealt card + bets */}
        <div>
          <div className="relative min-h-[360px] sm:min-h-[340px] [perspective:1200px]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              {hobby ? (
                <motion.div
                  key={hobby.title}
                  initial={still ? { opacity: 0 } : { rotateY: -90, opacity: 0.4 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={still ? { opacity: 0 } : { rotateY: 90, opacity: 0.4 }}
                  transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full"
                >
                  <LuxeCard tone="noir" rank={String(hobby.pocket)} suit={hobby.red ? "♥" : "♠"} label={`Pocket ${hobby.pocket} · ${hobby.red ? "Red" : "Black"}`} className="h-full min-h-[360px] sm:min-h-[340px]">
                    <div className="flex items-center gap-4">
                      <span className="grid place-items-center w-14 h-14 rounded-full shrink-0 text-[var(--card-ink)] bg-[linear-gradient(180deg,var(--gold-hi),var(--gold)_60%,#a8802f)] shadow-[0_0_0_3px_#1b1712,0_0_0_4px_rgba(216,180,90,.5)]">
                        <hobby.icon size={24} strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-card text-[1.8rem] font-bold leading-tight">{hobby.title}</h3>
                        <p className="font-card italic text-[1.05rem] text-[var(--gold-hi)]/85">{hobby.tagline}</p>
                      </div>
                    </div>
                    <Ornament suit={hobby.red ? "♥" : "♠"} className="mt-6" />
                    <p className="mt-5 text-[16px] leading-relaxed text-[var(--text-2)]">{hobby.description}</p>
                    {hobby.tags && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {hobby.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                      </div>
                    )}
                  </LuxeCard>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={still ? { opacity: 0 } : { rotateY: -90, opacity: 0.4 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={still ? { opacity: 0 } : { rotateY: 90, opacity: 0.4 }}
                  transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                  className="relative h-full min-h-[360px] sm:min-h-[340px]"
                >
                  <span className="luxe-back !transform-none" />
                  <span className="absolute inset-0 grid place-items-center text-center px-8">
                    <span>
                      <span className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-[var(--back-deep)] border-2 border-[var(--gold)] shadow-[0_0_0_6px_var(--back),0_0_0_7px_var(--gold-lo)]">
                        <span className="font-card italic font-bold text-2xl text-[var(--gold-hi)]">JR</span>
                      </span>
                      <span className="mt-6 block font-card italic text-2xl text-[var(--ivory)]">
                        {spinning ? "Rien ne va plus" : "Place your bets"}
                      </span>
                      <span className="mt-1 block text-sm text-[var(--ivory)]/70">
                        {spinning ? "The ball is rolling…" : "Spin the wheel to deal a card."}
                      </span>
                    </span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">Or bet on a pocket</p>
          <div className="mt-3 grid grid-cols-6 gap-2 sm:gap-3">
            {hobbies.map((h, i) => {
              const on = landed === i && !spinning;
              return (
                <button
                  key={h.title}
                  type="button"
                  onClick={() => spin(i)}
                  disabled={spinning}
                  aria-label={`Bet on ${h.title}`}
                  aria-pressed={on}
                  title={h.title}
                  className="group flex flex-col items-center gap-1.5 disabled:cursor-wait"
                >
                  <span
                    className={`chip relative w-full max-w-[60px] aspect-square grid place-items-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-45 ${
                      on ? "-translate-y-1 ring-2 ring-[var(--gold-hi)] ring-offset-2 ring-offset-[var(--felt-deep)]" : ""
                    }`}
                    style={{ ["--chip" as string]: h.red ? "#a3202b" : "#15110d" }}
                  >
                    <h.icon className="relative z-10 w-[38%] h-[38%] text-[var(--ivory)]" strokeWidth={2} />
                  </span>
                  <span className={`hidden sm:block text-[11px] font-semibold leading-tight text-center ${on ? "text-[var(--gold-hi)]" : "text-[var(--text-3)]"}`}>
                    {h.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <NowPlaying />
    </section>
  );
}

/** The static bowl: wooden rim, ball track and deflectors. */
function WheelRim() {
  return (
    <svg viewBox="-200 -200 400 400" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="rim-wood" r="0.5">
          <stop offset="0.82" stopColor="#5a3020" />
          <stop offset="1" stopColor="#24110a" />
        </radialGradient>
        <radialGradient id="rim-track" r="0.5">
          <stop offset="0.75" stopColor="#0f0a07" />
          <stop offset="1" stopColor="#2c1c12" />
        </radialGradient>
      </defs>
      <circle r="199" fill="url(#rim-wood)" />
      <circle r="190" fill="none" stroke="#d8b45a" strokeOpacity=".7" strokeWidth="2" />
      <circle r="186" fill="url(#rim-track)" />
      <circle r="159" fill="none" stroke="#8c6a22" strokeWidth="1.5" />
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} d="M0 -5 L3 0 L0 5 L-3 0 Z" fill="#d8b45a" transform={`rotate(${i * 45 + 22.5}) translate(0 -172) scale(1.6)`} />
      ))}
    </svg>
  );
}

/** The spinning head: pockets, icons, cone and turret. */
function WheelHead({ landed }: { landed: number | null }) {
  return (
    <svg viewBox="-200 -200 400 400" className="absolute inset-0 w-full h-full">
      <defs>
        <radialGradient id="cone" r="0.5">
          <stop offset="0" stopColor="#7a4a26" />
          <stop offset="1" stopColor="#3a1f10" />
        </radialGradient>
        <radialGradient id="turret" r="0.5" cx="0.4" cy="0.35">
          <stop offset="0" stopColor="#fff2c4" />
          <stop offset="0.5" stopColor="#d8b45a" />
          <stop offset="1" stopColor="#7a5a1c" />
        </radialGradient>
      </defs>
      {hobbies.map((h, i) => {
        const a0 = i * SEG;
        const a1 = a0 + SEG;
        const c = a0 + SEG / 2;
        const lit = landed === i;
        return (
          <g key={h.title}>
            <path d={wedge(70, 158, a0, a1)} fill={h.red ? "#a3202b" : "#15110d"} stroke="#8c6a22" strokeWidth="1.2" />
            {lit && <path d={wedge(70, 158, a0, a1)} fill="#f4dd98" opacity=".18" />}
            <path d={wedge(146, 158, a0, a1)} fill="#000" opacity=".25" />
            <g transform={`rotate(${c}) translate(0 -110)`}>
              <h.icon x={-13} y={-13} width={26} height={26} color="#f3ecd9" strokeWidth={1.8} />
            </g>
            <text
              transform={`rotate(${c}) translate(0 -136)`}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#f3ecd9"
              fontSize="15"
              fontWeight="700"
              style={{ fontFamily: "var(--font-card)" }}
            >
              {h.pocket}
            </text>
          </g>
        );
      })}
      <circle r="70" fill="url(#cone)" stroke="#d8b45a" strokeWidth="2" />
      <circle r="56" fill="none" stroke="#d8b45a" strokeOpacity=".35" />
      <circle r="40" fill="none" stroke="#d8b45a" strokeOpacity=".25" />
      {[45, 135, 225, 315].map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <rect x="-2.5" y="-46" width="5" height="40" rx="2.5" fill="url(#turret)" />
          <circle cy="-48" r="6.5" fill="url(#turret)" />
        </g>
      ))}
      <circle r="14" fill="url(#turret)" stroke="#5a4212" strokeWidth="1" />
    </svg>
  );
}

/** Favourite track, on a spinning record. */
function NowPlaying() {
  const query = encodeURIComponent(`${favouriteTrack.title} ${favouriteTrack.artist}`);
  return (
    <Rise className="mt-10">
      <LuxeCard tone="noir" tilt={false} bodyClassName="px-6 sm:px-9 py-6">
        <div className="flex items-center gap-5 sm:gap-8">
          <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
            <div className="vinyl absolute inset-0 rounded-full">
              <span className="absolute inset-[32%] rounded-full bg-[radial-gradient(circle,#c22a36,#7d1622)] grid place-items-center border border-[var(--gold)]/60">
                <span className="font-card italic font-bold text-[10px] sm:text-xs text-[var(--gold-hi)]">JR</span>
              </span>
              <span className="absolute left-1/2 top-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold-hi)]" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">Now playing · favourite track</p>
            <p className="mt-1 font-card text-2xl sm:text-3xl font-bold leading-tight text-[var(--text)] truncate">{favouriteTrack.title}</p>
            <p className="font-card italic text-lg text-[var(--gold-hi)]/85">{favouriteTrack.artist}</p>
          </div>

          <div aria-hidden className="hidden sm:flex items-end gap-1 h-10 shrink-0">
            {[0, 0.3, 0.15, 0.45, 0.6, 0.2, 0.38].map((d, i) => (
              <span key={i} className="eq-bar w-1.5 h-full rounded-full bg-[linear-gradient(180deg,var(--gold-hi),var(--gold-lo))]" style={{ animationDelay: `-${d}s` }} />
            ))}
          </div>

          <a
            href={`https://www.youtube.com/results?search_query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${favouriteTrack.title} by ${favouriteTrack.artist} on YouTube`}
            className="btn-gold w-12 h-12 sm:w-auto sm:h-auto sm:px-5 sm:py-3 shrink-0"
          >
            <Play size={16} className="fill-current" />
            <span className="hidden sm:inline">Listen</span>
          </a>
        </div>
      </LuxeCard>
    </Rise>
  );
}
