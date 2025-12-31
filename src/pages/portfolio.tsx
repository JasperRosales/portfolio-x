import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  VscFolderOpened,
  VscGithubInverted,
  VscLink,
  VscCode,
  VscDatabase,
  VscServer,
  VscTools,
  VscRocket,
  VscOrganization,
  VscCloud,
  VscCheck,
  VscEye,
} from 'react-icons/vsc';
import {
  PageWrapper,
  Section,
  SectionTitle,
  AnimatedCard,
  SkillBadge,
} from '../components/shared';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: 'CICS Community',
    description: 'A GitHub community platform for students and future members.',
    fullDescription: 'Founded and lead a community GitHub along with co-officers to further enhance and supply knowledge for students and future members of the CICS community. Making it a platform for teaching distributed source management and documentation for students and professors.',
    category: 'Community Platform',
    techStack: ['Git', 'GitHub', 'Documentation', 'Source Management'],
    githubUrl: 'https://github.com/JasperRosales',
    features: [
      'Community-driven knowledge sharing',
      'Source management training platform',
      'Documentation for students and professors',
      'Collaborative learning environment',
    ],
  },
  {
    title: 'Fit-Tech',
    description: 'A fitness tracking and technology integration application.',
    fullDescription: 'Developed a comprehensive fitness tracking application that integrates with various health technologies to provide users with a complete view of their fitness journey.',
    category: 'Health & Fitness',
    techStack: ['Golang', 'PostgreSQL', 'Docker', 'REST APIs'],
    githubUrl: 'https://github.com/JasperRosales',
    features: [
      'User authentication and profiles',
      'Fitness progress tracking',
      'Integration with health devices',
      'Dashboard analytics',
    ],
  },
  {
    title: 'E-Commerce Web Application',
    description: 'Full-featured online store with 500+ active users.',
    fullDescription: 'Led the development of an e-commerce web application that boosted user engagement by 40% and supports seamless browsing and transactions for 500+ active users.',
    category: 'E-Commerce',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Microservices'],
    githubUrl: 'https://github.com/JasperRosales',
    features: [
      'User engagement increased by 40%',
      '500+ active users supported',
      'Secure payment integration',
      'Inventory management system',
      'Scalable and maintainable architecture',
    ],
  },
  {
    title: 'Microservices Backend',
    description: 'Distributed microservices architecture with message brokers.',
    fullDescription: 'Built a scalable microservices backend using Golang, incorporating RabbitMQ and Kafka for event-driven communication between services.',
    category: 'Backend',
    techStack: ['Golang', 'RabbitMQ', 'Kafka', 'PostgreSQL', 'MongoDB', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/JasperRosales',
    features: [
      'Event-driven architecture',
      'Message queue integration',
      'CI/CD with GitHub Actions',
      'Multi-database support',
      'Containerized deployment',
    ],
  },
];

const categories = ['All', 'Community Platform', 'Health & Fitness', 'E-Commerce', 'Backend'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageWrapper>
      <div className="min-h-screen">
        {/* Header */}
        <Section className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Portfolio</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my projects and technical achievements
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Category Filter */}
        <Section className="pb-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-[rgb(var(--card))] border border-[rgb(var(--border))] hover:bg-accent'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* Projects Grid */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <AnimatedCard className="h-full flex flex-col group">
                    {/* Project Header */}
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

                    {/* Project Content */}
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.fullDescription}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1 mb-4">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
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

                      {/* Tech Stack */}
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <VscCode className="text-6xl text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCard className="bg-primary/5 border-primary/20">
                <VscRocket className="text-5xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Interested in working together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                    <VscLink />
                </motion.a>
              </AnimatedCard>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

