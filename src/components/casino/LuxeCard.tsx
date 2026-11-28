import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from "framer-motion";

export type Suit = "♠" | "♥" | "♦" | "♣";

/** Tilt and sheen follow a mouse; on touch screens they'd only cost layers. */
const finePointer = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
export const isRedSuit = (s?: Suit) => s === "♥" || s === "♦";

/**
 * The card every page is built from: gold-foil edge, textured stock, an
 * engraved double frame with corner flourishes, notched corner indices, and a
 * foil sheen that follows the pointer. Ivory or noir (black and gold).
 */
export default function LuxeCard({
  rank,
  suit,
  tone = "ivory",
  label,
  stack,
  tilt = true,
  className = "",
  bodyClassName,
  children,
  ...motionProps
}: {
  rank?: string;
  suit?: Suit;
  tone?: "ivory" | "noir";
  /** Small-caps line in the top band, between the corner indices */
  label?: ReactNode;
  /** A card back peeks out from behind and fans out on hover */
  stack?: boolean;
  tilt?: boolean;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const still = useReducedMotion();
  const face = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!finePointer || e.pointerType !== "mouse" || !face.current) return;
    const r = face.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    face.current.style.setProperty("--mx", `${px * 100}%`);
    face.current.style.setProperty("--my", `${py * 100}%`);
    if (tilt && !still) {
      ry.set((px - 0.5) * 9);
      rx.set(-(py - 0.5) * 9);
    }
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const hasIndex = !!rank || !!suit;

  return (
    <motion.div
      {...motionProps}
      data-tone={tone}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`luxe group relative ${className}`}
    >
      {stack && <span aria-hidden className="luxe-back" />}
      <motion.div
        ref={face}
        className="luxe-edge relative h-full"
        style={tilt && !still && finePointer ? { rotateX: srx, rotateY: sry, transformPerspective: 1100 } : undefined}
      >
        <div className="luxe-stock h-full flex flex-col">
          <span aria-hidden className="luxe-frame">
            <Flourish className="-right-px -top-px rotate-90" />
            <Flourish className="-left-px -bottom-px -rotate-90" />
            {!hasIndex && (
              <>
                <Flourish className="-left-px -top-px" />
                <Flourish className="-right-px -bottom-px rotate-180" />
              </>
            )}
          </span>
          {hasIndex && (
            <>
              <Index rank={rank} suit={suit} className="luxe-index-tl" />
              <Index rank={rank} suit={suit} className="luxe-index-br" />
            </>
          )}
          <span aria-hidden className="luxe-sheen" />

          <div className={`relative flex-1 flex flex-col ${bodyClassName ?? `px-7 sm:px-9 ${label ? "pt-5" : "pt-14"} pb-14`}`}>
            {label && <div className="luxe-label mb-5">{label}</div>}
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Index({ rank, suit, className }: { rank?: string; suit?: Suit; className: string }) {
  return (
    <span aria-hidden className={`luxe-index ${isRedSuit(suit) ? "is-red" : ""} ${className}`}>
      {rank && <span className="font-card font-bold text-[19px] tracking-[-0.04em]">{rank}</span>}
      {suit && <span className="text-[13px] mt-0.5">{suit}</span>}
    </span>
  );
}

/** Engraved corner flourish, drawn for the top-left corner and rotated into place. */
function Flourish({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 30 30" className={`luxe-flourish ${className}`} aria-hidden>
      <path d="M1 22 V9 Q1 1 9 1 H22" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M5 16 V10 Q5 5 10 5 H16" fill="none" stroke="currentColor" strokeWidth="0.8" opacity=".7" />
      <path d="M10 10 l2.4 -2.4 l2.4 2.4 l-2.4 2.4 z" fill="currentColor" transform="translate(-1.4 1.4)" />
    </svg>
  );
}

/** A centred ornament for breaking up a card: — ◆ — */
export function Ornament({ suit = "♦", className = "" }: { suit?: Suit; className?: string }) {
  return (
    <div aria-hidden className={`luxe-ornament ${className}`}>
      <span />
      <i className={isRedSuit(suit) ? "is-red" : ""}>{suit}</i>
      <span />
    </div>
  );
}
