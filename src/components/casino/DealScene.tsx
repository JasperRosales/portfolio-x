import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Transition,
} from "framer-motion";
import { sectionCards, type SectionId } from "@/data/sections";
import { CardBack, CardFace } from "./PlayingCard";

/**
 * The opening scene: a felt table seen through a camera rig made of three
 * nested layers, so every shot is just a different pose of the same rig.
 *
 *   dolly  (screen space) — push in / pull out, raise the frame
 *   orbit  (around the target) — tilt toward the table, spin around it
 *   pan    (table space) — slide the table so the target sits at the centre
 *
 * Steps: 0 establishing shot · 1 shuffle · 2 deal · 3 flip · 4 your pick.
 */

type Step = 0 | 1 | 2 | 3 | 4;

interface Pose {
  z: number;
  lift: number;
  tilt: number;
  spin: number;
  px: number;
  py: number;
}

interface Size {
  vw: number;
  vh: number;
  cw: number;
  ch: number;
  persp: number;
}

export function measure(): Size {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const narrow = vw < 640;
  const cw = Math.round(Math.min(Math.max(vw * (narrow ? 0.205 : 0.15), 68), 172, vh * 0.2));
  return { vw, vh, cw, ch: Math.round(cw * 1.4), persp: narrow ? 900 : 1300 };
}

function useSize() {
  const [size, setSize] = useState(measure);
  useEffect(() => {
    const onResize = () => setSize(measure());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

const DECK_COUNT = 14;
/** How far in the camera starts when it pulls back out of a card */
const RETURN_ZOOM = 0.8;

const focusDepth = ({ vh, ch, persp }: Size) => persp * (1 - ch / (vh * 1.25));

/**
 * Where a card sits on screen at the start of a return or swap shot, so a page
 * can hand over to the table on exactly the same card.
 */
export function focusFrame(size: Size = measure()) {
  const { vw, vh, cw, ch, persp } = size;
  const s = persp / (persp - focusDepth(size) * RETURN_ZOOM);
  return { w: cw * s, h: ch * s, cx: vw / 2, cy: vh * 0.42 + vh * 0.08 * s };
}
const ease: Transition["ease"] = [0.65, 0, 0.25, 1];

function layout({ cw, ch }: Size) {
  const spacing = cw * (cw < 100 ? 0.84 : 0.92);
  const deck = { x: 0, y: -ch * 1.05 };
  const hand = sectionCards.map((_, i) => {
    const off = i - 2;
    return { x: off * spacing, y: ch * 0.5 + off * off * cw * 0.055, rot: off * 5 };
  });
  return { deck, hand };
}

export default function DealScene({
  mode,
  returnFrom,
  swapTo,
  onPick,
}: {
  /** intro: the full deal · return: pull back to your hand · swap: trade one card for another */
  mode: "intro" | "return" | "swap";
  returnFrom?: SectionId;
  swapTo?: SectionId;
  onPick: (id: SectionId) => void;
}) {
  const still = !!useReducedMotion();
  const size = useSize();
  const { cw, ch, persp } = size;
  const { deck, hand } = useMemo(() => layout(size), [size]);

  const [step, setStep] = useState<Step>(mode !== "intro" || still ? 4 : 0);
  const [skipped, setSkipped] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [flourish, setFlourish] = useState(false);
  /**
   * While the camera is moving, scene layers carry will-change so the browser
   * stops re-rasterising them at every zoom step. Once the camera settles on
   * the hand the hint comes off and everything is redrawn crisp, once.
   */
  const [settled, setSettled] = useState(still);
  const interactive = mode !== "swap";

  // Intro timeline
  useEffect(() => {
    if (step === 4) return;
    const at = [700, 2050, 3750, 4950];
    const timers = at.map((ms, i) => window.setTimeout(() => setStep((s) => (s < i + 1 ? ((i + 1) as Step) : s)), ms));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = () => {
    setSkipped(true);
    setStep(4);
  };

  // ----- Camera poses -----
  const poses = useMemo(() => {
    const focusZ = focusDepth(size);
    return {
      wide: { z: -cw * 3.4, lift: 0, tilt: 64, spin: -30, px: 0, py: ch * 0.55 },
      push: { z: -cw * 2.2, lift: 0, tilt: 58, spin: -14, px: 0, py: ch * 0.75 },
      dealer: { z: -cw * 1.1, lift: -ch * 0.15, tilt: 44, spin: 4, px: 0, py: ch * 0.05 },
      hand: { z: 0, lift: 0, tilt: 30, spin: 0, px: 0, py: -ch * 0.42 },
      focus: (i: number): Pose => ({ z: focusZ, lift: 0, tilt: 0, spin: -hand[i].rot, px: -hand[i].x, py: -hand[i].y }),
      /** Over-the-shoulder shot for a swap; it orbits toward the card being drawn */
      peek: (from: number, to: number): Pose => {
        const a = hand[from];
        const b = hand[to];
        const dir = Math.sign(to - from) || 1;
        const far = Math.abs(to - from) >= 3;
        return {
          z: -cw * (far ? 0.85 : 0.35),
          lift: 0,
          tilt: far ? 56 : 46,
          spin: -dir * (far ? 17 : 11),
          px: -(a.x + b.x) / 2,
          py: -(a.y + b.y) / 2 + ch * 0.12,
        };
      },
    };
  }, [cw, ch, persp, hand, size]);

  const returnIndex = returnFrom ? sectionCards.findIndex((c) => c.id === returnFrom) : -1;
  const swapIndex = swapTo ? sectionCards.findIndex((c) => c.id === swapTo) : -1;
  const swapping = mode === "swap" && returnIndex >= 0 && swapIndex >= 0;

  let pose: Pose;
  let camT: Transition;
  let dollyT: Transition | undefined;
  if (picked !== null) {
    pose = poses.focus(picked);
    // Line the card up first, then push in, so it never swings out of frame
    camT = { duration: still ? 0 : 0.55, ease: [0.45, 0, 0.2, 1] };
    dollyT = { duration: still ? 0 : 0.6, delay: still ? 0 : 0.35, ease: [0.7, 0, 0.9, 0.6] };
  } else if (swapping) {
    pose = poses.peek(returnIndex, swapIndex);
    camT = { duration: 0.85, ease };
  } else if (step === 0) {
    pose = poses.wide;
    camT = { duration: 0 };
  } else if (step === 1) {
    pose = poses.push;
    camT = { duration: 1.5, ease };
  } else if (step === 2) {
    pose = poses.dealer;
    camT = { duration: 1.4, ease };
  } else {
    pose = poses.hand;
    camT = { duration: still ? 0 : skipped ? 0.8 : mode === "return" ? 1.1 : 1.3, ease };
  }
  const initialPose =
    mode !== "intro" && returnIndex >= 0 ? { ...poses.focus(returnIndex), z: poses.focus(returnIndex).z * RETURN_ZOOM } : poses.wide;

  // Hand-held camera: a little drift with the mouse once you can pick
  const swayX = useMotionValue(0);
  const swayY = useMotionValue(0);
  const sx = useSpring(swayX, { stiffness: 60, damping: 18 });
  const sy = useSpring(swayY, { stiffness: 60, damping: 18 });
  const onPointerMove = (e: React.PointerEvent) => {
    if (still || !interactive || step !== 4 || picked !== null || e.pointerType !== "mouse") return;
    swayY.set((e.clientX / window.innerWidth - 0.5) * 7);
    swayX.set(-(e.clientY / window.innerHeight - 0.5) * 5);
  };

  const pick = (i: number, auto = false) => {
    if (step !== 4 || picked !== null || (!auto && !interactive)) return;
    swayX.set(0);
    swayY.set(0);
    setPicked(i);
    window.setTimeout(() => onPick(sectionCards[i].id), still ? 0 : 950);
  };

  // Swap: pull back, flip the new card up off the felt, then dive into it
  useEffect(() => {
    if (!swapping) return;
    const t1 = window.setTimeout(() => setFlourish(true), 300);
    const t2 = window.setTimeout(() => pick(swapIndex, true), 880);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard: Esc skips the intro, number keys pick a card
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && step < 4) skip();
      const n = Number(e.key);
      if (step === 4 && n >= 1 && n <= 5) pick(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const caption =
    swapping ? `${sectionCards[returnIndex].label} back to the hand. Drawing ${sectionCards[swapIndex].label}.` :
    step === 0 ? "Welcome to the table" :
    step === 1 ? "Shuffling the deck" :
    step === 2 ? "Dealing your hand" :
    step === 3 ? "Turning them over" : "Royal flush. Pick a card.";

  const tableW = Math.max(size.vw * 1.7, cw * 15);
  const tableH = tableW * 0.6;

  return (
    <div
      onPointerMove={onPointerMove}
      className={`fixed inset-0 overflow-hidden bg-[var(--room)] select-none ${settled && picked === null ? "" : "rig-moving"}`}
      style={{ perspective: persp, perspectiveOrigin: "50% 42%" }}
    >
      {/* sway */}
      <motion.div className="wc absolute left-1/2 top-1/2 [transform-style:preserve-3d]" style={{ rotateX: sx, rotateY: sy }}>
        {/* dolly */}
        <motion.div
          className="wc [transform-style:preserve-3d]"
          initial={{ z: initialPose.z, y: initialPose.lift }}
          animate={{ z: pose.z, y: pose.lift }}
          transition={dollyT ?? camT}
        >
          {/* orbit */}
          <motion.div
            className="wc [transform-style:preserve-3d]"
            initial={{ rotateX: initialPose.tilt, rotateZ: initialPose.spin }}
            animate={{ rotateX: pose.tilt, rotateZ: pose.spin }}
            transition={camT}
            onAnimationComplete={() => {
              if (step === 4 && picked === null && !swapping) setSettled(true);
            }}
          >
            {/* pan */}
            <motion.div
              className="wc [transform-style:preserve-3d]"
              initial={{ x: initialPose.px, y: initialPose.py }}
              animate={{ x: pose.px, y: pose.py }}
              transition={camT}
            >
              <Table w={tableW} h={tableH} cw={cw} ch={ch} hand={hand} deck={deck} />

              {/* the rest of the deck */}
              {Array.from({ length: DECK_COUNT }, (_, i) => {
                const side = i % 2 ? 1 : -1;
                return (
                  <motion.div
                    key={`d${i}`}
                    className="wc absolute rounded-[0.7em] shadow-[0_0.1em_0.3em_rgba(0,0,0,0.35)]"
                    style={{ left: -cw / 2, top: -ch / 2, width: cw, height: ch, fontSize: cw / 10 }}
                    initial={{ x: deck.x, y: deck.y, z: i * 0.9, rotateZ: (i % 3) - 1 }}
                    animate={
                      step === 1 && !skipped
                        ? {
                            x: [deck.x, deck.x + side * cw * 0.62, deck.x],
                            z: [i * 0.9, i * 0.9 + 4, (DECK_COUNT - i) * 0.9],
                            rotateZ: [(i % 3) - 1, side * 9, (i % 3) - 1],
                          }
                        : { x: deck.x, y: deck.y, z: i * 0.9 }
                    }
                    transition={{ duration: 1.05, delay: (i % 7) * 0.035, ease: "easeInOut" }}
                  >
                    <CardBack flat />
                  </motion.div>
                );
              })}

              {/* your hand */}
              {sectionCards.map((card, i) => {
                const h = hand[i];
                const topZ = DECK_COUNT * 0.9 + (sectionCards.length - i) * 0.9;
                const dealt = step >= 2;
                const faceUp = step >= 3;
                const isHover = interactive && hovered === i && step === 4 && picked === null;
                const flipping = flourish && i === swapIndex && picked === null;
                const gone = picked !== null && picked !== i;
                const chosen = picked === i;

                const side = i % 2 ? -1 : 1;
                const target = !dealt
                  ? step === 1 && !skipped
                    ? {
                        x: [deck.x, deck.x + side * cw * 0.62, deck.x],
                        y: deck.y,
                        z: [topZ, topZ + 4, topZ],
                        rotateZ: [0, side * 9, 0],
                        opacity: 1,
                      }
                    : { x: deck.x, y: deck.y, z: topZ, rotateZ: 0, opacity: 1 }
                  : gone
                  ? { x: h.x * 1.4, y: h.y + ch * 2.4, z: 0, rotateZ: h.rot * 3, opacity: 0 }
                  : flipping
                  ? { x: h.x, y: h.y - ch * 0.3, z: cw * 0.8, rotateZ: 0, opacity: 1 }
                  : {
                      x: h.x,
                      y: h.y - (isHover ? ch * 0.16 : 0),
                      z: step === 2 && !skipped ? [topZ, cw * 0.95, 1] : chosen ? cw * 0.1 : isHover ? cw * 0.28 : 1,
                      rotateZ: step === 2 && !skipped ? h.rot + 360 : h.rot,
                      opacity: 1,
                    };

                const t: Transition =
                  step === 1 && !skipped
                    ? { duration: 1.05, delay: (i % 7) * 0.035 + 0.12, ease: "easeInOut" }
                    : step === 2 && !skipped
                    ? { duration: 0.72, delay: 0.25 + i * 0.2, ease: [0.3, 0.7, 0.2, 1] }
                    : gone
                    ? { duration: 0.6, ease: [0.5, 0, 0.75, 0] }
                    : { type: "spring", stiffness: 260, damping: 24 };

                return (
                  <motion.button
                    key={card.id}
                    type="button"
                    disabled={!interactive || step !== 4 || picked !== null}
                    onClick={() => pick(i)}
                    onPointerEnter={() => setHovered(i)}
                    onPointerLeave={() => setHovered((v) => (v === i ? null : v))}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered((v) => (v === i ? null : v))}
                    aria-label={`${card.label}: ${card.blurb}`}
                    className="wc absolute [transform-style:preserve-3d] rounded-[0.7em] disabled:cursor-default focus-visible:outline-none"
                    style={{ left: -cw / 2, top: -ch / 2, width: cw, height: ch, fontSize: cw / 10 }}
                    initial={mode !== "intro" ? { x: h.x, y: h.y, z: 1, rotateZ: h.rot } : { x: deck.x, y: deck.y, z: topZ, rotateZ: 0 }}
                    animate={target}
                    transition={t}
                  >
                    {/* shadow on the felt */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-[0.7em] bg-black/30 shadow-[0_0_0.9em_0.35em_rgba(0,0,0,0.5)]"
                      animate={{ opacity: isHover ? 0.7 : 0.45, x: isHover ? cw * 0.1 : cw * 0.03, y: isHover ? ch * 0.12 : ch * 0.03 }}
                      style={{ z: -1 }}
                    />
                    <motion.span
                      className="wc absolute inset-0 [transform-style:preserve-3d]"
                      initial={{ rotateY: mode !== "intro" ? 0 : 180 }}
                      animate={{
                        // the dealer's flip: a full turn that flashes the back
                        rotateY: flourish && i === swapIndex ? 360 : faceUp ? 0 : 180,
                        z: step === 3 && !skipped ? [0, cw * 0.45, 0] : 0,
                      }}
                      transition={
                        flourish && i === swapIndex
                          ? { duration: 0.62, ease: [0.55, 0, 0.3, 1] }
                          : step === 3 && !skipped
                          ? { duration: 0.6, delay: i * 0.12, ease: "easeInOut" }
                          : { duration: skipped ? 0.4 : 0 }
                      }
                    >
                      <CardFace card={card} />
                      <CardBack />
                      <span
                        aria-hidden
                        className={`absolute -inset-[0.12em] rounded-[0.8em] border-[0.14em] border-[var(--gold-hi)] transition-opacity duration-200 ${
                          isHover ? "opacity-100" : "opacity-0"
                        } [backface-visibility:hidden] shadow-[0_0_1.4em_rgba(244,221,152,0.55)]`}
                      />
                    </motion.span>
                  </motion.button>
                );
              })}

              {picked !== null && !still && <ChipToss h={hand[picked]} cw={cw} ch={ch} />}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lamp, vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_38%,transparent_35%,rgba(2,8,6,0.75)_100%)]" />

      {/* Overlay UI */}
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        <header className="flex items-start justify-between gap-4 px-5 sm:px-8 pt-5 sm:pt-7">
          <motion.div
            initial={still ? false : { opacity: 0, y: -10 }}
            animate={picked !== null || swapping ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
            transition={picked !== null ? { duration: 0.25 } : { duration: 0.8, delay: 0.2 }}
          >
            <p className="eyebrow">Software developer · Balayan, Batangas</p>
            <h1 className="mt-1 font-card text-[clamp(1.9rem,5.5vw,3.6rem)] font-bold leading-[0.95] tracking-[-0.02em]">
              <span className="shimmer">Jasper Rosales</span>
            </h1>
          </motion.div>
          <AnimatePresence>
            {step < 4 && (
              <motion.button
                key="skip"
                type="button"
                onClick={skip}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto btn-line px-4 py-2 text-sm"
              >
                Skip intro
              </motion.button>
            )}
          </AnimatePresence>
        </header>

        <div className="mt-auto pb-7 sm:pb-9 text-center px-5">
          <AnimatePresence mode="wait">
            {picked === null && (
              <motion.p
                key={caption}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className={`font-card italic text-[clamp(1.15rem,3vw,1.75rem)] ${step === 4 ? "text-[var(--gold-hi)]" : "text-[var(--text-2)]"}`}
              >
                {caption}
              </motion.p>
            )}
          </AnimatePresence>
          {step === 4 && picked === null && !swapping && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              className="mt-2 text-sm text-[var(--text-3)]"
            >
              Each card opens a part of the portfolio. You can swap cards any time.
            </motion.p>
          )}
        </div>
      </div>

      {/* Fade to the page once the camera reaches the card */}
      <AnimatePresence>
        {picked !== null && (
          <motion.div
            key="fade"
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[var(--felt-deep)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: still ? 0 : 0.72 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- The table and its props ---------- */

function Table({
  w,
  h,
  cw,
  ch,
  hand,
  deck,
}: {
  w: number;
  h: number;
  cw: number;
  ch: number;
  hand: { x: number; y: number; rot: number }[];
  deck: { x: number; y: number };
}) {
  const rail = Math.max(cw * 0.42, 34);
  const arcR = Math.abs(deck.y) + ch * 2.05;
  return (
    <>
      {/*
        Shadows here are gradients, not blurred box-shadows: when the camera
        zooms into a card these layers raster at up to ~8x, and a blur kernel
        scales with that.
      */}
      {/* shadow the table casts */}
      <div
        aria-hidden
        className="wc absolute rounded-[50%]"
        style={{
          left: -w / 2 - rail * 2.2,
          top: -h / 2 - rail * 2.2 + ch * 0.2 + 60,
          width: w + rail * 4.4,
          height: h + rail * 4.4,
          background: "radial-gradient(closest-side, rgba(0,0,0,.8) 78%, rgba(0,0,0,.35) 90%, transparent)",
          transform: "translateZ(-3px)",
        }}
      />
      {/* leather rail */}
      <div
        aria-hidden
        className="wc absolute rounded-[50%]"
        style={{
          left: -w / 2 - rail,
          top: -h / 2 - rail + ch * 0.2,
          width: w + rail * 2,
          height: h + rail * 2,
          background: "radial-gradient(ellipse at 50% 30%, var(--rail-hi), var(--rail) 70%)",
          boxShadow: "0 0 0 2px #120805",
          transform: "translateZ(-2px)",
        }}
      />
      {/* felt */}
      <div
        aria-hidden
        className="wc absolute rounded-[50%] overflow-hidden"
        style={{
          left: -w / 2,
          top: -h / 2 + ch * 0.2,
          width: w,
          height: h,
          background:
            "radial-gradient(ellipse closest-side, transparent 84%, rgba(0,0,0,.5) 100%), radial-gradient(ellipse 55% 45% at 50% 45%, var(--felt-hi), var(--felt) 45%, var(--felt-deep) 100%)",
          boxShadow: "inset 0 0 0 3px var(--gold-lo)",
          transform: "translateZ(-1px)",
        }}
      >
        <div className="felt-grain absolute inset-0 opacity-70" />
      </div>

      {/* Printed felt markings */}
      <svg
        aria-hidden
        className="absolute overflow-visible pointer-events-none"
        style={{ left: 0, top: 0, width: 1, height: 1 }}
      >
        <defs>
          <path id="felt-arc" d={`M ${-arcR * 0.8} ${deck.y + arcR * 0.6} A ${arcR} ${arcR} 0 0 0 ${arcR * 0.8} ${deck.y + arcR * 0.6}`} />
        </defs>
        <text fill="rgba(216,180,90,0.55)" style={{ fontFamily: "var(--font-card)" }} fontWeight={700} letterSpacing={cw * 0.04} fontSize={cw * 0.15}>
          <textPath href="#felt-arc" startOffset="50%" textAnchor="middle">
            ROYAL FLUSH PAYS IN SHIPPED SOFTWARE · THE HOUSE ALWAYS SHIPS
          </textPath>
        </text>
        {hand.map((p, i) => (
          <rect
            key={i}
            x={p.x - cw * 0.56}
            y={p.y - ch * 0.56}
            width={cw * 1.12}
            height={ch * 1.12}
            rx={cw * 0.1}
            fill="none"
            stroke="rgba(216,180,90,0.38)"
            strokeWidth={1.5}
            strokeDasharray="6 5"
            transform={`rotate(${p.rot} ${p.x} ${p.y})`}
          />
        ))}
        <rect
          x={deck.x - cw * 0.62}
          y={deck.y - ch * 0.6}
          width={cw * 1.24}
          height={ch * 1.2}
          rx={cw * 0.12}
          fill="rgba(0,0,0,0.12)"
          stroke="rgba(216,180,90,0.5)"
          strokeWidth={1.5}
        />
        <text
          x={deck.x}
          y={deck.y + ch * 0.78}
          fill="rgba(216,180,90,0.6)"
          style={{ fontFamily: "var(--font-card)" }}
          fontStyle="italic"
          fontSize={cw * 0.13}
          textAnchor="middle"
        >
          Dealer
        </text>
      </svg>

      {/* chip stacks */}
      <ChipStack x={deck.x - cw * 1.6} y={deck.y + ch * 0.1} d={cw * 0.55} n={7} color="#b3202a" />
      <ChipStack x={deck.x - cw * 1.05} y={deck.y + ch * 0.38} d={cw * 0.55} n={4} color="#1f4fa8" />
      <ChipStack x={deck.x + cw * 1.5} y={deck.y + ch * 0.05} d={cw * 0.55} n={9} color="#141414" />
      <ChipStack x={deck.x + cw * 2.15} y={deck.y + ch * 0.32} d={cw * 0.55} n={5} color="#2f8f4e" />
      <ChipStack x={deck.x + cw * 1.1} y={deck.y + ch * 0.45} d={cw * 0.55} n={3} color="#b3202a" />
    </>
  );
}

/** Placing the bet: a chip is tossed onto the card you chose. */
function ChipToss({ h, cw, ch }: { h: { x: number; y: number; rot: number }; cw: number; ch: number }) {
  const d = cw * 0.42;
  return (
    <motion.div
      aria-hidden
      className="chip absolute"
      style={{ left: -d / 2, top: -d / 2, width: d, height: d, ["--chip" as string]: "#b3202a" }}
      initial={{ x: h.x + cw * 1.2, y: h.y + ch * 2.6, z: cw * 1.2, rotateZ: 0, opacity: 0 }}
      animate={{ x: h.x, y: h.y + ch * 0.66, z: [cw * 1.2, cw * 1.9, 3], rotateZ: 600, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.6, 0.35, 1], opacity: { duration: 0.1 } }}
    />
  );
}

function ChipStack({ x, y, d, n, color }: { x: number; y: number; d: number; n: number; color: string }) {
  return (
    <div aria-hidden className="absolute [transform-style:preserve-3d]" style={{ left: x - d / 2, top: y - d / 2, width: d, height: d }}>
      {Array.from({ length: n }, (_, i) => (
        <div
          key={i}
          className="wc chip absolute inset-0"
          style={{
            ["--chip" as string]: color,
            transform: `translateZ(${i * d * 0.085}px) rotate(${i * 23}deg)`,
            boxShadow: i === 0 ? "0 6px 14px rgba(0,0,0,.55)" : "0 0 0 1px rgba(0,0,0,.35)",
          }}
        />
      ))}
    </div>
  );
}
