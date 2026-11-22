import { certificates } from "@/data/certificates";
import { keyAchievements } from "@/data/achievements";
import SectionHeading from "@/components/SectionHeading";

export default function CertsAndAchievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-20">
      <SectionHeading title="Recognitions" lead="Certifications earned and moments I'm proud of." />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-6">Certificates</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {certificates.map((cert) => (
              <div key={cert.id} className="nm rounded-[28px] p-5">
                <div className="flex items-center gap-3">
                  <div className="nm-in-sm w-11 h-11 rounded-full grid place-items-center text-black text-lg shrink-0">
                    {cert.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-black leading-tight">{cert.name}</p>
                    <p className="text-sm text-[var(--ink-3)]">{cert.issuer}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-3)]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="nm-in rounded-[36px] p-4 sm:p-6">
          <h3 className="text-2xl font-bold px-2 pt-1 mb-5">Key achievements</h3>
          <ul className="grid gap-4">
            {keyAchievements.map((a) => (
              <li key={a.title} className="nm-sm rounded-3xl p-5 flex gap-4">
                <div className="nm-ink w-11 h-11 rounded-full grid place-items-center text-lg shrink-0">{a.icon}</div>
                <div>
                  <p className="font-display font-bold text-lg text-black leading-snug">{a.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-3)]">{a.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
