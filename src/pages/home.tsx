import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import DealScene from "@/components/casino/DealScene";
import SectionStage from "@/components/casino/SectionStage";
import HomeSection from "@/components/sections/HomeSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { isSectionId, type SectionId } from "@/data/sections";

/**
 * intro  the full deal, then you pick a card
 * table  back at your hand
 * page   reading a card
 * swap   trading the current card for another on the table
 */
type Phase = "intro" | "table" | "page" | "swap";

/** How long the current card takes to land over the page before the table takes over */
const CARD_DOWN_MS = 430;

const readHash = () => {
  const h = window.location.hash.slice(1);
  return isSectionId(h) ? h : null;
};

/**
 * First visit: the deal plays, you pick a card, and the camera dives into it.
 * Moving between cards goes back through the table. A link with a hash
 * (#projects) skips the deal and opens that card.
 */
export default function Home() {
  const still = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(() => (readHash() ? "page" : "intro"));
  const [active, setActive] = useState<SectionId>(() => readHash() ?? "home");
  const [swapTo, setSwapTo] = useState<SectionId | null>(null);
  const [leaving, setLeaving] = useState(false);
  const busy = useRef(false);

  const enter = useCallback((id: SectionId) => {
    busy.current = false;
    setActive(id);
    setSwapTo(null);
    setPhase("page");
    if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  }, []);

  /** Lay the current card down over the page, then hand over to the table. */
  const leavePage = useCallback(
    (then: () => void) => {
      if (busy.current) return;
      busy.current = true;
      if (still) {
        then();
        return;
      }
      setLeaving(true);
      window.setTimeout(() => {
        setLeaving(false);
        then();
      }, CARD_DOWN_MS);
    },
    [still],
  );

  const switchTo = useCallback(
    (id: SectionId) => {
      if (id === active) return;
      if (still) return enter(id);
      leavePage(() => {
        setSwapTo(id);
        setPhase("swap");
      });
    },
    [active, still, enter, leavePage],
  );

  const toTable = useCallback(() => {
    leavePage(() => {
      busy.current = false;
      setPhase("table");
      history.pushState(null, "", window.location.pathname + window.location.search);
    });
  }, [leavePage]);

  // Browser back/forward jumps straight to the page, no table shot
  useEffect(() => {
    const onPop = () => {
      const id = readHash();
      busy.current = false;
      setLeaving(false);
      setSwapTo(null);
      if (id) {
        setActive(id);
        setPhase("page");
      } else {
        setPhase((p) => (p === "intro" ? p : "table"));
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (phase !== "page") {
    return (
      <DealScene
        key={phase === "swap" ? `swap-${active}-${swapTo}` : phase}
        mode={phase === "intro" ? "intro" : phase === "swap" ? "swap" : "return"}
        returnFrom={active}
        swapTo={swapTo ?? undefined}
        onPick={enter}
      />
    );
  }

  const section = {
    home: <HomeSection go={switchTo} />,
    education: <EducationSection />,
    experience: <ExperienceSection />,
    projects: <ProjectsSection />,
    contact: <ContactSection />,
  }[active];

  return (
    <SectionStage active={active} leaving={leaving} onSelect={switchTo} onTable={toTable}>
      {section}
      <Footer />
    </SectionStage>
  );
}
