import { certificates } from "@/data/certificates";
import { keyAchievements } from "@/data/achievements";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <SectionHeading title="Achievements" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyAchievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 0.08} className="nm rounded-[28px] p-6">
            <span className="nm-ink w-11 h-11 rounded-full grid place-items-center text-lg">{a.icon}</span>
            <h3 className="mt-5 text-lg font-bold leading-snug">{a.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-3)]">{a.description}</p>
          </Reveal>
        ))}
      </div>

      <h3 className="mt-16 mb-6 text-2xl font-bold">Certifications</h3>
      <Reveal className="nm-in rounded-[32px] p-4 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((c) => (
          <div key={c.id} className="nm-sm rounded-2xl px-4 py-3.5 flex items-center gap-3">
            <span className="nm-in-sm w-10 h-10 shrink-0 rounded-full grid place-items-center text-black">{c.icon}</span>
            <span className="min-w-0">
              <span className="block font-semibold text-black leading-tight">{c.name}</span>
              <span className="block text-sm text-[var(--ink-3)]">{c.issuer}</span>
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
