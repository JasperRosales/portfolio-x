import { Boxes, Workflow, Database, MessagesSquare } from "lucide-react";
import { improvements } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const icons = [Boxes, Workflow, Database, MessagesSquare];

export default function ImprovementsSection() {
  return (
    <section id="improvements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-20">
      <SectionHeading
        title="What I help with"
        lead="Software and systems that let companies move faster, see their real numbers, and spend less time on manual work."
      />
      <Reveal className="nm-lg rounded-[40px] p-3 sm:p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {improvements.map((area, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={area.title} delay={0.15 + i * 0.1} className="rounded-[30px] p-6 sm:p-7 hover:shadow-[inset_5px_5px_10px_var(--clay-lo),inset_-5px_-5px_10px_var(--clay-hi)] transition-shadow duration-300">
              <div className="nm-in w-16 h-16 rounded-full grid place-items-center">
                <div className="nm-sm w-10 h-10 rounded-full grid place-items-center text-black">
                  <Icon size={18} strokeWidth={2.2} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{area.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)]">{area.description}</p>
            </Reveal>
          );
        })}
      </Reveal>
    </section>
  );
}
