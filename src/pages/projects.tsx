import { motion } from 'framer-motion';
import { VscFolderOpened, VscGithubInverted, VscLink, VscCheck } from 'react-icons/vsc';
import { Section, AnimatedCard, SkillBadge } from '../components/shared';
import { projects } from '../data/projects';
import LightRays from '../components/LightRays';

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="fixed inset-0 z-[3] pointer-events-none">
        <LightRays
          raysOrigin="top-right"
          raysColor="#FFCC62"
          raysSpeed={1.3}
          lightSpread={0.9}
          rayLength={2.2}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0.06}
          distortion={0.04}
        />
      </div>

      <div className="min-h-screen">
      <Section>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                <AnimatedCard className="h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <VscFolderOpened className="text-2xl" />
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[rgb(var(--muted))] hover:bg-[rgb(var(--muted))]/80 transition-colors"
                        >
                          <VscGithubInverted className="text-lg" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[rgb(var(--muted))] hover:bg-[rgb(var(--muted))]/80 transition-colors"
                        >
                          <VscLink className="text-lg" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.fullDescription}</p>

                    <ul className="space-y-1 mb-4">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <VscCheck className="text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <SkillBadge key={tech} name={tech} className="text-xs px-2 py-1" />
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
      </div>
    </>
  );
}
