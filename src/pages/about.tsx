import { motion } from 'framer-motion';
import { VscCheck, VscStarEmpty } from 'react-icons/vsc';
import {
  PageWrapper,
  Section,
  SectionTitle,
  SkillBadge,
  AnimatedCard,
} from '../components/shared';
import { allSkills, softSkills } from '../data/skills';
import { certifications } from '../data/certifications';

export default function About() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A highly motivated and versatile student leader with experience in organizational leadership, 
                event management, and digital communication. Demonstrates strong capabilities in team leadership, 
                financial reporting, and digital graphics design. Adept at cross-functional collaboration and 
                public communication in hybrid environments. Has developed technical competencies and a strong 
                foundation in software development, particularly in Java for backend development with Spring Boot 
                and Rust for systems-level programming.
              </p>
            </motion.div>
          </div>
        </Section>

        <Section>
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Technical Skills</SectionTitle>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <AnimatedCard className="h-full">
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.03 }}
                    >
                      <SkillBadge name={skill.name} icon={skill.icon} />
                    </motion.div>
                  ))}
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </Section>

        <Section className="bg-[rgb(var(--muted))]/30">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Soft Skills</SectionTitle>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center mt-8"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SkillBadge
                    name={skill}
                    icon={<VscCheck className="text-primary" />}
                    className="bg-primary/10 border-primary/20"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        <Section className='mb-6'>
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Certifications</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnimatedCard className="h-full flex flex-col">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <VscStarEmpty className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-sm text-primary">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 flex-1">
                      {cert.description}
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

