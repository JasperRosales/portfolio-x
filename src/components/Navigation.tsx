import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Home, Wrench, FolderKanban, Briefcase, Trophy, Mail, X } from "lucide-react";

const items = [
  { id: "hero", label: "Home", icon: Home },
  { id: "improvements", label: "Services", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-[var(--clay)]/90"
          />
        )}
      </AnimatePresence>

      <nav aria-label="Sections" className="fixed z-50 right-5 bottom-5 sm:right-8 sm:bottom-8 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.ul key="menu" className="flex flex-col items-end gap-3 mb-1">
              {items.map((item, i) => {
                const Icon = item.icon;
                const here = active === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24, scale: 0.6 }}
                    animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: (items.length - 1 - i) * 0.04, type: "spring", stiffness: 420, damping: 26 } }}
                    exit={{ opacity: 0, y: 16, scale: 0.7, transition: { delay: i * 0.02, duration: 0.15 } }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={here ? "true" : undefined}
                      className={`${here ? "nm-ink" : "nm-btn"} flex items-center gap-3 rounded-full pl-5 pr-2 py-2 font-semibold`}
                    >
                      {item.label}
                      <span className={`${here ? "bg-white/15" : "nm-in-sm"} w-9 h-9 rounded-full grid place-items-center`}>
                        <Icon size={16} />
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="nm-ink relative w-16 h-16 rounded-full grid place-items-center"
        >
          <svg className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] -rotate-90" viewBox="0 0 76 76" aria-hidden>
            <circle cx="38" cy="38" r="36" fill="none" stroke="var(--clay-lo)" strokeWidth="2.5" opacity=".5" />
            <motion.circle cx="38" cy="38" r="36" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength: progress }} />
          </svg>
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="jr" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="font-display font-extrabold text-lg">
                JR
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>
    </>
  );
}

export { Navigation };
