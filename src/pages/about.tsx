import { motion } from 'framer-motion';
import {
  VscCode,
  VscDatabase,
  VscServer,
  VscTools,
  VscCoffee,
  VscTerminal,
  VscCheck,
  VscStarEmpty,
  VscOrganization,
} from 'react-icons/vsc';
import {
  PageWrapper,
  Section,
  SectionTitle,
  SkillBadge,
  AnimatedCard,
} from '../components/shared';

const allSkills = [
  { name: 'Golang', icon: <VscCode /> },
  { name: 'Java', icon: <VscCoffee /> },
  { name: 'Rust', icon: <VscTerminal /> },
  { name: 'Spring Boot', icon: <VscLeaf /> },
  { name: 'RESTful APIs', icon: <VscApi /> },
  { name: 'GraphQL', icon: <VscGraph /> },
  { name: 'Microservices', icon: <VscServer /> },
  { name: 'RabbitMQ', icon: <VscRabbit /> },
  { name: 'Kafka', icon: <VscKafka /> },
  { name: 'PostgreSQL', icon: <VscDatabase /> },
  { name: 'MongoDB', icon: <VscMongodb /> },
  { name: 'Docker', icon: <VscDocker /> },
  { name: 'GitHub Actions', icon: <VscGithubAction /> },
  { name: 'Git', icon: <VscGitCustom /> },
  { name: 'Maven', icon: <VscTools /> },
  { name: 'Testing', icon: <VscCheck /> },
];

const softSkills = [
  'Problem-solving',
  'Analytical Thinking',
  'Attention to Detail',
  'Effective Communication',
  'Team Collaboration',
  'Time Management',
  'Adaptability',
  'Critical Thinking',
];

const certifications = [
  {
    name: 'C Essentials I',
    issuer: 'Cisco',
    description: 'Programming fundamentals and problem-solving',
  },
  {
    name: 'C++ Essentials II',
    issuer: 'Cisco',
    description: 'Advanced programming concepts',
  },
  {
    name: 'CS50 Introduction to Computer Science',
    issuer: 'Harvard',
    description: 'Comprehensive computer science foundation',
  },
  {
    name: 'AWS S3 Basics',
    issuer: 'Amazon',
    description: 'Cloud storage fundamentals',
  },
  {
    name: 'Oracle Java Foundations',
    issuer: 'Oracle',
    description: 'Java programming certification',
  },
];

function VscLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function VscApi() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </svg>
  );
}

function VscGraph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 11h2v6H7v-6zm4-4h2v10h-2V7zm4 3h2v7h-2v-7z" />
    </svg>
  );
}

function VscRabbit() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  );
}

function VscKafka() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    </svg>
  );
}

function VscMongodb() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function VscDocker() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    </svg>
  );
}

function VscGithubAction() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.68 9.68 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function VscGitCustom() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.41 16.09L12 15.45v-3.72l5.09 2.63c-.85.44-1.77.78-2.68.91zM6.41 6.35L12 9.09v3.75L7.24 12.5c.59-.34 1.27-.55 2-.61.11-.02.22-.03.33-.05v-3.36c-.56 0-1.1.14-1.58.37l-1.58-1.9zm10.23 4.64c-.03-.53-.15-1.04-.34-1.51l-1.43.86c.26.64.4 1.34.4 2.06v.43c0 .55-.45 1-1 1H14v-3.01c.24-.03.48-.06.72-.12.56-.14 1.09-.39 1.58-.61.08-.04.16-.08.24-.12v-.03z" />
    </svg>
  );
}

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

