import { motion } from "framer-motion";
import {
  PageWrapper,
  Section,
  SectionTitle,
  SkillBadge,
  AnimatedCard,
} from "../components/shared";
import { allSkills } from "../data/skills";
import { keyAchievements } from "../data/achievements";
import { certificates } from "../data/certificates";
import LightRays from "../components/LightRays";

export default function About() {
  return (
    <>
      <div className="fixed inset-0 z-3 pointer-events-none">
        <LightRays
          raysOrigin="top-right"
          raysColor="#FFCC62"
          raysSpeed={1.0}
          lightSpread={1.2}
          rayLength={2.5}
          followMouse={false}
          noiseAmount={0.05}
          distortion={0.02}
        />
      </div>

      <PageWrapper>
        <div className="min-h-screen">
          <Section className="pt-24 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2 flex justify-center"
                >
                  <motion.div
                    className="relative p-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] rounded-xl" />
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[320px] md:h-100 rounded-xl shadow-2xl overflow-hidden">
                      <img
                        src="/Jasper.jpg"
                        alt="Jasper Rosales"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-1/2 z-20 flex flex-col gap-2"
                >
                  <span className="text-lg sm:text-sm text-gray-300 tracking-widest uppercase animate-pulse">
                    What's up
                  </span>

                  <h1 className="text-2xl sm:text-4xl drop-shadow-lg">
                    <span className="text-white tracking-wide">It's</span>{" "}
                    <span className="font-extrabold text-white">
                      Jasper Rosales
                    </span>
                  </h1>

                  <p className="text-xl sm:text-lg font-semibold text-white">
                    Aspiring Software Engineer
                  </p>

                  <p className="text-sm sm:text-xs font-semibold text-white">
                    Adores learning, cooking, animation, weapon arts, <br />
                    and exploring new skills. Open for collaborations!
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href="/Jasper_Rosales_CV.pdf"
                      target="_blank"
                      className="px-3 py-1 border-2 border-white text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-all"
                    >
                      Download my CV
                    </a>
                    <a
                      href="/resume-portfolio"
                      target="_blank"
                      className="px-3 py-1 border-2 border-white text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-all"
                    >
                      View my Portfolio
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </Section>

          <Section>
            <div className="max-w-6xl mx-auto text-center">
              <SectionTitle>About Me</SectionTitle>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                A highly motivated and versatile person with experience in
                organizational leadership, event management, and digital
                communication. Demonstrates strong capabilities in team
                leadership, software development, and digital graphics design.
                Adept at cross-functional collaboration and public communication
                in hybrid environments. Has developed technical competencies and
                a strong foundation in software engineering through formal
                education and practical experience.
              </p>
            </div>
          </Section>

          <Section>
            <div className="max-w-6xl mx-auto">
              <SectionTitle>Technical Skills</SectionTitle>
              <AnimatedCard className="mt-12">
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <SkillBadge {...skill} />
                    </motion.div>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </Section>

          <Section className="pb-24">
            <div className="max-w-6xl mx-auto">
              <SectionTitle>Key Achievements</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {keyAchievements.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AnimatedCard className="h-full flex flex-col items-center text-center p-6">
                      <div className="mb-4 text-primary">{a.icon}</div>
                      <div className="text-xl font-bold text-primary mb-2">
                        {a.title}
                      </div>
                      <p className="text-sm text-muted-foreground text-justify">
                        {a.description}
                      </p>
                    </AnimatedCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section className="pb-24">
            <div className="max-w-6xl mx-auto">
              <SectionTitle>Certificates</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {certificates.map((a, i) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AnimatedCard className="h-full flex flex-col items-center text-center p-6">
                      <div className="mb-4 text-primary">{a.icon}</div>
                      <div className="text-xl font-bold text-primary mb-2">
                        {a.name}
                      </div>
                      <div className="text-xs text-amber-400 font-medium mb-2">
                        {a.issuer}
                      </div>
                      <p className="text-sm text-muted-foreground text-justify">
                        {a.description}
                      </p>
                    </AnimatedCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </PageWrapper>
    </>
  );
}
