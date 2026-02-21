import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-3xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            A comprehensive collection of all my projects and side ventures.
          </p>



          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="bg-[#ffffff] border border-[#e5e5e5] rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-primary">{project.category}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                 
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 text-muted-foreground text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#ffffff] border border-[#e5e5e5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#ffffff] p-4 border-b border-[#e5e5e5] flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                  <span className="text-sm text-primary">{selectedProject.category}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-justify mb-6">
                  {selectedProject.fullDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="text-2xl">*</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground underline underline-offset-4 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e5e5] rounded-lg hover:bg-muted transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

