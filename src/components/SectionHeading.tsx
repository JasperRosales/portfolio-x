import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  const still = useReducedMotion();
  const words = title.split(" ");
  return (
    <div className="mb-10 md:mb-14 max-w-2xl">
      <h2 className="emboss text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1]" aria-label={title}>
        {words.map((w, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.22em] last:mr-0">
            <motion.span
              className="inline-block"
              initial={still ? false : { y: "110%", rotate: 6 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </h2>
      {lead && (
        <motion.p
          initial={still ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 text-base md:text-lg text-[var(--ink-3)] leading-relaxed"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
