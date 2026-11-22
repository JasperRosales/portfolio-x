import { BadgeCheck, Award, CalendarDays, Users } from "lucide-react";
import { timeline, kindStyle } from "@/data/timeline";
import SectionHeading from "@/components/SectionHeading";
import TimelinePanel from "@/components/TimelinePanel";

const kinds = {
  Certification: { color: kindStyle.Certification.color, icon: BadgeCheck },
  Award: { color: kindStyle.Award.color, icon: Award },
  Event: { color: kindStyle.Event.color, icon: CalendarDays },
  Leadership: { color: kindStyle.Leadership.color, icon: Users },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-8">
      <SectionHeading title="Achievements" lead="Certifications, awards, events I ran, and roles I've held, on one timeline." />
      <TimelinePanel
        title="Achievements"
        cta="View achievements"
        hint="Tap any dot, or open the full timeline to step through each one."
        items={timeline}
        kinds={kinds}
        plural={{ Certification: "Certifications", Award: "Awards", Event: "Events", Leadership: "Leadership" }}
      />
    </section>
  );
}
