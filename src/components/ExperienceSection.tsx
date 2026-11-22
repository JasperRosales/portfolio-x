import { motion } from "framer-motion";
import {
  workExperience,
  otherExperience,
  education,
  type Experience,
} from "@/data/experience";

interface TimelineItemProps {
  date?: string;
  title: string;
  subtitle?: string;
  location?: string;
  achievements: string[];
}

function TimelineItem({ date, title, subtitle, location, achievements }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative pl-12"
    >
      <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-black/30" />
      <div className="absolute left-4 w-3 top-5 h-3 rounded-full ring-2 opacity-65 z-10" />

      <div className="bg-card border border-[#e5e5e5] rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {subtitle && <p className="text-primary text-xs">{subtitle}</p>}
          </div>
          {date && (
            <span className="text-xs text-muted-foreground mt-2 sm:mt-0">{date}</span>
          )}
        </div>
        {location && (
          <div className="text-sm text-muted-foreground mb-4">{location}</div>
        )}
        <ul className="space-y-2 mb-4">
          {achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start text-sm text-justify gap-2 text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function renderExperience(items: Experience[], keyPrefix: string) {
  return items.map((job) => (
    <TimelineItem
      key={`${keyPrefix}-${job.title}-${job.date}`}
      date={job.date}
      title={job.title}
      subtitle={job.subtitle}
      location={job.location}
      achievements={job.achievements}
    />
  ));
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="text-primary">Experience & Education</span>
        </h2>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Professional Experience</h3>
        <div className="space-y-8">{renderExperience(workExperience, "work")}</div>

        <h3 className="text-2xl font-semibold mt-12 mb-4">
          Other Experience
        </h3>
        <div className="space-y-8">{renderExperience(otherExperience, "other")}</div>

        <h3 className="text-2xl font-semibold mt-12 mb-4">Education</h3>
        <div className="space-y-8">
          {education.map((edu) => (
            <TimelineItem
              key={edu.institution + edu.period}
              title={edu.institution}
              subtitle={edu.degree}
              date={edu.period}
              location={edu.location}
              achievements={edu.achievements ?? []}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
