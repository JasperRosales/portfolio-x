import { motion } from 'framer-motion';
import {
  VscLocation,
  VscOrganization,
  VscTarget,
  VscCode,
  VscLightbulb,
  VscHeart,
} from 'react-icons/vsc';
import {
  PageWrapper,
  Section,
  SectionTitle,
  TimelineItem,
  AnimatedCard,
  SkillBadge,
} from '../components/shared';

const workExperience = [
  {
    date: 'May 2025 - Present',
    title: 'Vice President',
    subtitle: 'College of Informatics and Computing Sciences - SC Balayan',
    location: 'Batangas State University, Balayan, Batangas',
    achievements: [
      'Manage the organization to be functional and efficient during events and outside activities',
      'Maintain efficiency and morale of the CICS organization',
      'Lead cross-functional collaboration and public communication in hybrid environments',
      'Oversee high-impact activities and foster organizational efficiency',
    ],
    techStack: ['Leadership', 'Event Management', 'Team Management'],
  },
  {
    date: 'April 2024 - Present',
    title: 'Freelance Developer',
    subtitle: 'Self-Employed',
    location: 'Balayan, Batangas, Philippines',
    achievements: [
      'Delivered scalable, client-focused software solutions by combining strong problem-solving and analytical skills',
      'Improved system performance and project outcomes for multiple clients',
      'Communicated technical concepts clearly with non-technical stakeholders, enabling faster decision-making',
      'Reduced revisions and delivery timelines through effective communication',
      'Managed projects independently with strong time management and adaptability',
      'Consistently meeting deadlines while maintaining high-quality standards',
    ],
    techStack: ['Golang', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'Java', 'Rust'],
  },
  {
    date: 'Sep 2024 - Present',
    title: 'Committee Chairperson on Digital Graphics',
    subtitle: 'Supreme Student Council Alangilan - Balayan',
    location: 'Balayan, Batangas',
    achievements: [
      'Designed various publication/posting materials of the Supreme Student Council',
      'Designed the highlight of the school event during the 31st foundation day 2025',
      'Made announcements for the school with suitable and informative designs',
      'Managed time effectively to meet design deadlines',
    ],
    techStack: ['Digital Graphics', 'Adobe Creative Suite', 'Design', 'Time Management'],
  },
  {
    date: 'Aug 2024 - May 2025',
    title: 'Second Class Officer',
    subtitle: 'BatStateU TNEU - Balayan ROTC Unit',
    location: 'Balayan, Batangas',
    achievements: [
      'Finished the ROTC Course and became an officer',
      'First to be promoted to a position fitted for technical skills',
      'Managed events regarding the ROTC and the Page of the Unit itself',
      'Volunteered in donations and crisis activities to help people in need',
    ],
    techStack: ['Team Leadership', 'Event Management', 'Volunteer Management'],
  },
  {
    date: 'Aug 2024 - May 2025',
    title: 'Business Manager',
    subtitle: 'College of Informatics and Computing Sciences - SC Balayan',
    location: 'Batangas State University, Balayan, Batangas',
    achievements: [
      'Audited excel spreadsheets and reports for the financial status and activities',
      'Managed the receipt of each activity',
      'Maintained accurate financial reporting for the organization',
    ],
    techStack: ['Microsoft Excel', 'Financial Reporting', 'Accounting'],
  },
];

const education = [
  {
    institution: 'Batangas State University',
    degree: 'Bachelor of Science in Business Analytics',
    period: 'August 2023 - Present',
    location: 'Batangas, Philippines',
    coursework: [
      'Business Analytics',
      'Web Development',
      'Mobile Development',
      'AI Integration',
      'Data Structures and Algorithms',
      'System Design and Architecture',
    ],
  },
];

const resumeCertifications = [
  {
    name: 'C Essentials I',
    issuer: 'Cisco',
    date: '2024',
  },
  {
    name: 'C++ Essentials II',
    issuer: 'Cisco',
    date: '2024',
  },
  {
    name: 'CS50 Introduction to Computer Science',
    issuer: 'Harvard',
    date: '2024',
  },
  {
    name: 'AWS S3 Basics',
    issuer: 'Amazon',
    date: '2024',
  },
  {
    name: 'Oracle Java Foundations',
    issuer: 'Oracle',
    date: '2024',
  },
];

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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <AnimatedCard className="h-full">
                  <VscCode className="text-4xl text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary mb-2 text-center">HackerRank Achiever</div>
                  <p className="text-sm text-muted-foreground text-justify">Earned Java and Go certifications and badges through HackerRank's competitive programming platform</p>
                </AnimatedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <AnimatedCard className="h-full">
                  <VscOrganization className="text-4xl text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary mb-2 text-center">31st Founding Anniversary Organizer</div>
                  <p className="text-sm text-muted-foreground text-justify">Served as Technical Head for the 31st Founding Anniversary event, overseeing all technical aspects and event coordination</p>
                </AnimatedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <AnimatedCard className="h-full">
                  <VscLightbulb className="text-4xl text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary mb-2 text-center">Maze Mastery Coding Champion</div>
                  <p className="text-sm text-muted-foreground text-justify">Won the Maze Mastery coding competition with my team, competing against students from freshman to senior year levels</p>
                </AnimatedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <AnimatedCard className="h-full">
                  <VscOrganization className="text-4xl text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary mb-2 text-center">CICS Github Community Founder</div>
                  <p className="text-sm text-muted-foreground text-justify">Founded the College of Informatics and Computing Sciences Balayan Github Community, managing merges and repositories for student collaboration</p>
                </AnimatedCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <AnimatedCard className="h-full">
                  <VscHeart className="text-4xl text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary mb-2 text-center">SSC Service Awardee</div>
                  <p className="text-sm text-muted-foreground text-justify">Recognized for completing 1 year of dedicated service to the Supreme Student Council on Balayan campus</p>
                </AnimatedCard>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

