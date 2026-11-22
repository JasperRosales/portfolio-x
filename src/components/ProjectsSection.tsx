import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";
import { projectDetails, type ProjectImageDetail } from "@/data/project-details";

// Reframed as the business/technology area each project improves.
const areaByCategory: Record<string, string> = {
  "Community Platform": "Community Building",
  "Software Solution": "Business Operations",
  "Organizational Tool": "Business Operations",
  "Business Tool": "Business Improvement",
  "Productivity Tool": "Business Productivity",
  "Web Application": "Business Services",
  "Web Application / AI": "Business Services",
  "Game Application": "User Engagement",
  "Learning / Blockchain": "Education & Innovation",
  "Learning / Infrastructure": "Operational Learning",
  "Learning / Messaging": "Operational Learning",
  "Learning / App Prototype": "Product Exploration",
  "Fashion Technology": "Business Growth",
  "Fun App": "Business Growth",
};

function isRealUrl(value: string | undefined): value is string {
  return !!value && value.startsWith("http");
}

interface ProjectCardProps {
  project: Project;
  area: string;
  index: number;
  onSelect: () => void;
}

function ProjectCard({ project, area, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onSelect}
      className="bg-[#ffffff] border border-[#e5e5e5] rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-all duration-300 group"
    >
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
        {project.title}
      </h3>
      <span className="inline-flex w-fit max-w-full rounded-full bg-primary/10 px-2.5 py-1 mt-3 text-xs font-medium leading-none text-primary">
        {area}
      </span>
      <p className="text-muted-foreground text-sm mt-4 line-clamp-3">
        {project.description}
      </p>
      <div className="mt-5 flex gap-3 flex-wrap">
        {isRealUrl(project.githubUrl) && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-3 py-2 border border-[#e5e5e5] rounded-lg text-sm hover:bg-muted transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            View Code
          </a>
        )}
        {isRealUrl(project.liveUrl) && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-3 py-2 border border-[#e5e5e5] rounded-lg text-sm hover:bg-muted transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function FullscreenImageModal({
  image,
  onClose,
}: {
  image: ProjectImageDetail | null;
  onClose: () => void;
}) {
  if (!image) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          className="relative max-w-[95vw] w-full flex flex-col items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            aria-label="Close fullscreen image"
          >
            <FaTimes />
          </button>
          <img
            src={image.imageSrc}
            alt={image.imageAlt}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
          <p className="text-sm text-neutral-200 text-center max-w-3xl">
            {image.imageDescription}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<ProjectImageDetail | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
    setFullscreenImage(null);
  };

  const selectedDetails = selectedProject
    ? projectDetails[selectedProject.title]
    : undefined;

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Improvements & <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-4 mb-8 max-w-2xl">
          Products and projects built to solve real problems for companies
          and people.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              area={areaByCategory[project.category] ?? project.category}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#ffffff] border border-[#e5e5e5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#ffffff] p-4 border-b border-[#e5e5e5] flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold leading-snug">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Close project details"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-justify mb-6">
                  {selectedProject.fullDescription}
                </p>

                {selectedDetails?.imageGallery.length ? (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Project Images</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {selectedDetails.imageGallery.map((image) => (
                        <div
                          key={`${selectedProject.title}-${image.imageSrc}`}
                          className="rounded-lg border border-[#e5e5e5] overflow-hidden bg-background"
                        >
                          <button
                            type="button"
                            onClick={() => setFullscreenImage(image)}
                            className="w-full cursor-zoom-in"
                          >
                            <img
                              src={image.imageSrc}
                              alt={image.imageAlt}
                              className="w-full h-44 object-cover"
                              loading="lazy"
                            />
                          </button>
                          <p className="p-3 text-sm text-justify text-muted-foreground">
                            {image.imageDescription}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What It Delivers</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 flex-wrap">
                  {isRealUrl(selectedProject.githubUrl) && (
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
                  {isRealUrl(selectedProject.liveUrl) && (
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

      <FullscreenImageModal
        image={fullscreenImage}
        onClose={() => setFullscreenImage(null)}
      />
    </section>
  );
}
