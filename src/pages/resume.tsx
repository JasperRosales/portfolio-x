import { motion } from 'framer-motion';
import { VscLocation, VscTarget } from 'react-icons/vsc';
import { Section, SectionTitle, TimelineItem, SkillBadge } from '../components/shared';
import { workExperience, education } from '../data/experience';
import LightRays from '../components/LightRays';

export default function Resume() {
  return (
    <>
      <div className="fixed inset-0 z-[3] pointer-events-none">
        <LightRays
          raysOrigin="top-right"
          raysColor="#FFCC62"
          raysSpeed={1.1}
          lightSpread={1.1}
          rayLength={2.3}
          followMouse={false}
          noiseAmount={0.04}
          distortion={0.02}
        />
      </div>

      <div className="min-h-screen">
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Experience</SectionTitle>
          <div className="mt-8">
            {workExperience.map((job, index) => (
              <TimelineItem
                key={job.title}
                date={job.date}
                title={job.title}
                subtitle={job.subtitle}
                isLast={index === workExperience.length - 1}
              >
                <div className="mt-4 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <VscLocation className="text-primary" />
                      {job.location}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.05 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <VscTarget className="text-primary mt-0.5 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.techStack.map((tech) => (
                      <SkillBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-background -mx-6 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Education</SectionTitle>
          <div className="mt-8">
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.institution}
                date={edu.period}
                title={edu.institution}
                subtitle={edu.degree}
                isLast={index === education.length - 1}
              >
                <div className="mt-4 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <VscLocation className="text-primary" />
                      {edu.location}
                    </div>
                  </div>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <VscTarget className="text-primary mt-0.5 shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <SkillBadge key={course} name={course} />
                      ))}
                    </div>
                  </div>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </Section>
      </div>
    </>
  );
}
