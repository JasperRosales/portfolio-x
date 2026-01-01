import { motion } from 'framer-motion';
import { VscLocation, VscOrganization, VscTarget } from 'react-icons/vsc';
import {
  PageWrapper,
  Section,
  SectionTitle,
  TimelineItem,
  AnimatedCard,
  SkillBadge,
} from '../components/shared';
import { workExperience, education } from '../data/experience';
import { resumeCertifications } from '../data/certifications';
import { keyAchievements } from '../data/achievements';

export default function Resume() {
  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Section className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my experience and educational background in my journey as an aspiring software engineer and as a person.
              </p>
            </motion.div>
          </div>
        </Section>

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

        <Section className="bg-[rgb(var(--muted))]/30">
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

        <Section>
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Certifications</SectionTitle>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {resumeCertifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnimatedCard className="flex flex-row items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <VscOrganization className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pb-24">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Key Achievements</SectionTitle>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnimatedCard className="h-full flex flex-col items-center text-center p-6">
                    <div className="mb-4">
                      {achievement.icon}
                    </div>
                    <div className="text-xl font-bold text-primary mb-2 text-center">
                      {achievement.title}
                    </div>
                    <p className="text-sm text-muted-foreground text-justify">
                      {achievement.description}
                    </p>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

