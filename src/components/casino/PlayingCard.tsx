import type { SectionCard } from "@/data/sections";

/**
 * Card faces fill their parent. The parent sets the size and a font-size of
 * width / 10, and everything inside is measured in em so cards scale cleanly
 * from the 40px nav hand up to the full-size table cards.
 */

export function Spade({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" className={className} aria-hidden fill="currentColor">
      <path d="M50 2C38 24 4 40 4 66c0 15 11 25 24 25 8 0 14-3 18-9-1 10-5 18-13 25h34c-8-7-12-15-13-25 4 6 10 9 18 9 13 0 24-10 24-25C96 40 62 24 50 2Z" />
    </svg>
  );
}

function Corner({ rank, flip }: { rank: string; flip?: boolean }) {
  return (
    <span
      className={`absolute flex flex-col items-center leading-none text-[var(--card-ink)] ${
        flip ? "right-[0.55em] bottom-[0.55em] rotate-180" : "left-[0.55em] top-[0.55em]"
      }`}
    >
      <span className="font-card font-bold text-[1.55em] tracking-[-0.04em]">{rank}</span>
      <Spade className="mt-[0.15em] w-[1.05em]" />
    </span>
  );
}

export function CardFace({ card, compact }: { card: SectionCard; compact?: boolean }) {
  const Icon = card.icon;
  return (
    <span className="card-face absolute inset-0 rounded-[0.7em] overflow-hidden">
      <Corner rank={card.rank} />
      <Corner rank={card.rank} flip />
      {!compact && (
        <span className="absolute inset-[1.15em_1.9em] rounded-[0.35em] border-[0.06em] border-[var(--gold-lo)]/60 flex flex-col items-center justify-center text-center">
          <span className="absolute inset-[0.25em] rounded-[0.25em] border-[0.04em] border-[var(--gold-lo)]/40" />
          <Spade className="absolute w-[5.6em] text-[var(--card-ink)] opacity-[0.05]" />
          <span className="relative grid place-items-center w-[2.6em] h-[2.6em] rounded-full bg-[var(--card-ink)] text-[var(--gold-hi)] shadow-[0_0.2em_0.5em_rgba(0,0,0,0.3)]">
            <Icon className="w-[1.25em] h-[1.25em]" strokeWidth={1.8} />
          </span>
          <span className="relative mt-[0.6em] font-card font-bold text-[1.05em] leading-none text-[var(--card-ink)]">{card.label}</span>
          <span className="relative mt-[0.4em] px-[0.4em] text-[0.52em] uppercase tracking-[0.14em] leading-snug text-[var(--card-ink)]/60">
            {card.blurb}
          </span>
        </span>
      )}
    </span>
  );
}

export function CardBack() {
  return (
    <span className="card-back absolute inset-0 rounded-[0.7em] overflow-hidden">
      <span className="absolute inset-[0.5em] rounded-[0.4em] border-[0.06em] border-[var(--gold)]/70 card-lattice" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[3.4em] h-[3.4em] rounded-full bg-[var(--back-deep)] border-[0.08em] border-[var(--gold)] shadow-[0_0_0_0.25em_var(--back),0_0_0_0.32em_var(--gold-lo)]">
        <span className="font-card italic font-bold text-[1.35em] text-[var(--gold-hi)] tracking-[-0.03em]">JR</span>
      </span>
    </span>
  );
}
