import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Spade } from "./PlayingCard";

/** Section heading with the card's rank as a medallion. */
export function SectionTitle({ rank, eyebrow, title, lead }: { rank: string; eyebrow: string; title: string; lead?: string }) {
  const still = useReducedMotion();
  return (
    <div className="mb-10 md:mb-14">
      <motion.div
        initial={still ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex items-center gap-3"
      >
        <span className="card-face relative w-9 h-12 rounded-md shrink-0 flex flex-col items-center justify-center text-[var(--card-ink)] shadow-[0_8px_16px_-8px_rgba(0,0,0,0.8)]">
          <span className="font-card font-bold text-[15px] leading-none">{rank}</span>
          <Spade className="w-[10px] mt-0.5" />
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={still ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-card font-bold text-[clamp(2.4rem,7vw,4.6rem)] leading-[0.95] tracking-[-0.02em]"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          initial={still ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-2)]"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}

/** Fades content up as it scrolls into the page. */
export function Rise({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const still = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={still ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Overlays render into <body>: pages are 3D-transformed while the camera
 * moves, and a transformed ancestor would trap position: fixed.
 */
export function Overlay({ children, onClose, label }: { children: ReactNode; onClose: () => void; label: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center p-3 sm:p-6 bg-[rgba(2,10,7,0.88)] backdrop-blur-sm"
    >
      {children}
    </motion.div>,
    document.body,
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-10">{children}</div>;
}
