import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";

export default function Hero() {
  const still = useReducedMotion();
  const rise = (delay: number) =>
    still
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-10 items-center">
        <div>
          <motion.div {...rise(0)} className="nm-in-sm inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-[var(--ink-2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-black shadow-[0_0_0_3px_var(--clay),0_0_0_4px_var(--clay-lo)]" />
            Open for freelance work
          </motion.div>

          <h1 className="mt-8 font-display font-extrabold tracking-[-0.045em] leading-[0.86] text-[clamp(4.25rem,19vw,9.5rem)]">
            <motion.span {...rise(0.1)} className="deboss block">Jasper</motion.span>
            <motion.span {...rise(0.2)} className="emboss block">Rosales</motion.span>
          </h1>

          <motion.p {...rise(0.3)} className="mt-8 max-w-md text-lg md:text-xl leading-relaxed text-[var(--ink-2)]">
            I build software that helps companies run cleaner operations and
            make decisions from real numbers.
          </motion.p>

          <motion.div {...rise(0.4)} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="nm-ink rounded-full px-7 py-3.5 font-semibold">
              See my work
            </a>
            <a href="#contact" className="nm-btn rounded-full px-7 py-3.5 font-semibold">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          {...(still ? {} : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9, delay: 0.15 } })}
          className="relative mx-auto w-[min(82vw,420px)] aspect-square"
        >
          <div className="nm-lg absolute inset-0 rounded-full" />
          <div className="nm-in absolute inset-[7%] rounded-full" />
          <div className="nm absolute inset-[13%] rounded-full p-2">
            <img
              src="/Jasper.jpg"
              alt="Portrait of Jasper Rosales"
              className="w-full h-full rounded-full object-cover grayscale contrast-[1.08]"
            />
          </div>
          <div className="nm absolute -left-2 bottom-[8%] rounded-2xl px-4 py-3">
            <p className="font-display text-3xl font-extrabold text-black leading-none">{projects.length}</p>
            <p className="text-xs text-[var(--ink-3)] mt-1">projects built</p>
          </div>
          <div className="nm absolute -right-2 top-[10%] rounded-2xl px-4 py-3">
            <p className="font-display text-3xl font-extrabold text-black leading-none">{certificates.length}</p>
            <p className="text-xs text-[var(--ink-3)] mt-1">certifications</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
