import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import { timeline } from "@/data/timeline";

const stack = [
  "Kotlin", "Jetpack Compose", "React", "Next.js", "TypeScript", "Node.js", "Go",
  "Spring Boot", "PostgreSQL", "Supabase", "Redis", "Docker", "Kafka", "Gemini API", "Tailwind CSS",
];

function Letters({ word, className, delay }: { word: string; className: string; delay: number }) {
  const still = useReducedMotion();
  return (
    <span className={`block ${className}`} aria-hidden>
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
          initial={still ? false : { y: "0.6em", rotateX: -80, opacity: 0 }}
          animate={{ y: 0, rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function Ticks() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
      {Array.from({ length: 72 }, (_, i) => (
        <line
          key={i}
          x1="100" y1="3" x2="100" y2={i % 6 === 0 ? 11 : 7}
          stroke="#000" strokeOpacity={i % 6 === 0 ? 0.55 : 0.22} strokeWidth={i % 6 === 0 ? 1.2 : 0.8}
          transform={`rotate(${i * 5} 100 100)`}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const still = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 80]);
  const nameX = useTransform(scrollY, [0, 600], [0, -60]);

  const fade = (delay: number) =>
    still ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay } };

  return (
    <section id="hero" className="relative pt-16 pb-16 md:pt-24 md:pb-20 scroll-mt-4 min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-10 items-center">
        <div>
          <motion.div {...fade(0)} className="nm-in-sm inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-[var(--ink-2)]">
            <span className="relative grid place-items-center w-2.5 h-2.5">
              <span className="ping-soft absolute inset-0 rounded-full bg-[#30a46c]" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#30a46c]" />
            </span>
            Open for freelance work
          </motion.div>

          <motion.h1
            style={still ? undefined : { x: nameX }}
            aria-label="Jasper Rosales"
            className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.86] text-[clamp(4.25rem,19vw,9.5rem)] [perspective:800px]"
          >
            <Letters word="Jasper" className="deboss" delay={0.15} />
            <Letters word="Rosales" className="emboss" delay={0.45} />
          </motion.h1>

          <motion.p {...fade(0.9)} className="mt-8 max-w-md text-lg md:text-xl leading-relaxed text-[var(--ink-2)]">
            I build web and Android software that helps companies run cleaner
            operations and make decisions from real numbers.
          </motion.p>

          <motion.div {...fade(1.05)} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="nm-ink rounded-full px-7 py-3.5 font-semibold">See my work</a>
            <a href="#contact" className="nm-btn rounded-full px-7 py-3.5 font-semibold">Get in touch</a>
          </motion.div>
        </div>

        <motion.div
          style={still ? undefined : { y: photoY }}
          initial={still ? false : { opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-[min(82vw,430px)] aspect-square"
        >
          <div className="nm-lg absolute inset-0 rounded-full" />
          <div className="spin-slow absolute inset-[2.5%]"><Ticks /></div>
          <div className="nm-in absolute inset-[9%] rounded-full" />
          <div className="spin-rev absolute inset-[9%]" aria-hidden>
            <span className="absolute left-1/2 -top-[7px] -ml-[7px] w-3.5 h-3.5 rounded-full bg-black ring-4 ring-[var(--clay)]" />
          </div>
          <div className="nm absolute inset-[15%] rounded-full p-2">
            <img src="/Jasper.webp" alt="Portrait of Jasper Rosales" className="w-full h-full rounded-full object-cover" />
          </div>
          <div className="bob nm absolute -left-3 bottom-[6%] rounded-2xl px-4 py-3">
            <p className="font-display text-3xl font-extrabold text-black leading-none">{projects.length}</p>
            <p className="text-xs text-[var(--ink-3)] mt-1">featured projects</p>
          </div>
          <div className="bob-late nm absolute -right-3 top-[8%] rounded-2xl px-4 py-3">
            <p className="font-display text-3xl font-extrabold text-black leading-none">{timeline.length}</p>
            <p className="text-xs text-[var(--ink-3)] mt-1">milestones</p>
          </div>
        </motion.div>
      </div>

      <motion.div {...fade(1.2)} className="nm-in mt-16 md:mt-20 mx-5 sm:mx-8 lg:mx-auto lg:max-w-6xl lg:w-[calc(100%-4rem)] rounded-full overflow-hidden py-3.5">
        <div className="marquee flex w-max gap-3 pr-3">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="nm-sm rounded-full px-4 py-1.5 text-sm font-semibold text-black whitespace-nowrap" aria-hidden={i >= stack.length}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
