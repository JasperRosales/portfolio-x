import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCode } from "react-icons/fa";
import { allSkills, pins } from "../data/skills";
import { PinList } from "@/components/animate-ui/components/community/pin-list";

export default function About() {
  const [showSkillsModal, setShowSkillsModal] = useState(false);

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

  // Combine all skills with pinned status
  const allSkillsWithPinned = allSkills.map((skill, index) => ({
    id: index,
    name: skill.name,
    info: "Technology",
    icon: () => skill.icon,
    pinned: pins.some((p) => p.name === skill.name),
  }));

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-3xl text-shadow-2xs font-bold mb-8">
            About <span className="text-primary">Me</span>
          </h1>
          
          {/* Two Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Card - Larger - Personal Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 bg-card border border-[#e5e5e5] dark:border-white/10 rounded-2xl p-6 sm:p-8"
            >
              {/* Who I Am Section */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  I'm a passionate Full Stack Developer and Software Engineer based in the Philippines. 
                  With a strong foundation in both frontend and backend development, I specialize in 
                  building scalable applications using modern technologies.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  My journey in software development started with a curiosity for building things that 
                  solve real-world problems. Since then, I've worked on various projects ranging from 
                  web applications to mobile apps, always focusing on writing clean, maintainable code.
                </p>
              </motion.div>

              {/* What I Do Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Web Development",
                      description: "Build responsive, performant web applications using modern frameworks like React and Next.js",
                    },
                    {
                      title: "Backend Development",
                      description: "Create robust APIs and microservices using Go, Java, and Node.js",
                    },
                    {
                      title: "Database Design",
                      description: "Design and optimize databases with PostgreSQL, MongoDB, and other database technologies",
                    },
                    {
                      title: "DevOps",
                      description: "Set up CI/CD pipelines, containerize applications with Docker, and manage cloud infrastructure",
                    },
                    {
                      title: "Mobile Development",
                      description: "Develop cross-platform mobile applications using React Native",
                    },
                    {
                      title: "Technical Writing",
                      description: "Create clear documentation and technical specifications for projects",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-muted/30 border border-[#e5e5e5] dark:border-white/10 rounded-xl p-4 hover:border-primary/50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Card - Smaller - Skills with PinList */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-1"
            >
              {/* Desktop - Show PinList with expand button */}
              <div className="hidden lg:block bg-card border border-[#e5e5e5] dark:border-white/10 rounded-2xl p-4">
                <PinList
                  className="h-full"
                  items={allSkillsWithPinned}
                  labels={{ pinned: "Pinned Skills", unpinned: "All Skills" }}
                  showExpandButton={true}
                  expandButtonLabel="Show All Skills"
                />
              </div>

              {/* Mobile - Show Button to Open Modal */}
              <button
                onClick={() => setShowSkillsModal(true)}
                className="lg:hidden w-full bg-card border border-[#e5e5e5] dark:border-white/10 rounded-2xl p-6 text-left hover:border-primary/50 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-4">My Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {allSkills.slice(0, 6).map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-lg text-sm"
                    >
                      <span className="text-primary">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                  {allSkills.length > 6 && (
                    <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      +{allSkills.length - 6} more
                    </span>
                  )}
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Skills Modal */}
      <AnimatePresence>
        {showSkillsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowSkillsModal(false)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-[#e5e5e5] dark:border-white/10 rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[80vh] overflow-hidden"
            >
              <div className="sticky top-0 bg-card p-4 border-b border-[#e5e5e5] dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCode className="text-primary" />
                  <h3 className="text-xl font-semibold">All Skills</h3>
                </div>
                <button
                  onClick={() => setShowSkillsModal(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(80vh-70px)]">
                <div className="grid grid-cols-2 gap-3">
                  {allSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl"
                    >
                      <div className="text-primary text-xl flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-sm truncate">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

