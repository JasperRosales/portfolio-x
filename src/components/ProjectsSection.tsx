import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, FolderCode } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { projectDetails, type ProjectImageDetail } from "@/data/project-details";
import SectionHeading from "@/components/SectionHeading";

const areaByCategory: Record<string, string> = {
  "Community Platform": "Community building",
  "Software Solution": "Business operations",
  "Organizational Tool": "Business operations",
  "Business Tool": "Business improvement",
  "Productivity Tool": "Productivity",
  "Web Application": "Business services",
  "Web Application / AI": "AI services",
  "Game Application": "User engagement",
  "Learning / Blockchain": "Blockchain",
  "Learning / Infrastructure": "Infrastructure",
  "Learning / Messaging": "Messaging",
  "Learning / App Prototype": "Prototype",
  "Fashion Technology": "Fashion tech",
  "Fun App": "Experiment",
};

const filters = [
  { id: "all", label: "All" },
  { id: "application", label: "Products" },
  { id: "education", label: "Practice" },
] as const;
type FilterId = (typeof filters)[number]["id"];

const isRealUrl = (v?: string): v is string => !!v && v.startsWith("http");

function LinkKey({ href, children, ink }: { href: string; children: React.ReactNode; ink?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`${ink ? "nm-ink" : "nm-btn"} inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  const Icon = project.icon ?? FolderCode;
  return (
    <article className="nm rounded-[30px] p-6 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="nm-in w-14 h-14 rounded-2xl grid place-items-center text-black text-xl shrink-0">
          <Icon />
        </div>
        <span className="nm-in-sm rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--ink-2)]">
          {areaByCategory[project.category] ?? project.category}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-bold tracking-tight leading-tight">
        <button type="button" onClick={onSelect} className="text-left hover:underline underline-offset-4 decoration-2">
          {project.title}
        </button>
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-3)] line-clamp-3">{project.description}</p>
      <div className="mt-auto pt-6 flex flex-wrap gap-3">
        <button type="button" onClick={onSelect} className="nm-btn rounded-full px-4 py-2 text-sm font-semibold">
          Details
        </button>
        {isRealUrl(project.liveUrl) && (
          <LinkKey href={project.liveUrl} ink>
            <ExternalLink size={15} /> Live
          </LinkKey>
        )}
        {isRealUrl(project.githubUrl) && (
          <LinkKey href={project.githubUrl}>
            <Github size={15} /> Code
          </LinkKey>
        )}
      </div>
    </article>
  );
}

function ImageViewer({ image, onClose }: { image: ProjectImageDetail; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] grid place-items-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button type="button" onClick={onClose} aria-label="Close image" className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full bg-white text-black">
        <X size={18} />
      </button>
      <figure className="max-w-[95vw] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img src={image.imageSrc} alt={image.imageAlt} className="max-h-[82vh] w-auto max-w-full object-contain rounded-xl" />
        <figcaption className="text-sm text-neutral-300 text-center max-w-3xl">{image.imageDescription}</figcaption>
      </figure>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [image, setImage] = useState<ProjectImageDetail | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.type === filter);
  const details = selected ? projectDetails[selected.title] : undefined;

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (image) setImage(null);
      else setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, image]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
        <div className="[&>div]:mb-0">
          <SectionHeading title="Projects" lead="Products built for real companies and communities, plus the practice work behind them." />
        </div>
        <div role="group" aria-label="Filter projects" className="nm-in self-start md:self-end rounded-full p-1.5 flex gap-1.5">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active ? "nm-ink" : "text-[var(--ink-3)] hover:text-black"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} onSelect={() => setSelected(p)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center p-3 sm:p-6 bg-[var(--clay)]/85 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="nm-lg rounded-[36px] max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 z-10 bg-[var(--clay)] px-6 sm:px-8 pt-6 pb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="nm-in-sm inline-block rounded-full px-3 py-1.5 text-xs font-semibold">
                    {areaByCategory[selected.category] ?? selected.category}
                  </span>
                  <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">{selected.title}</h3>
                </div>
                <button type="button" onClick={() => setSelected(null)} aria-label="Close project details" className="nm-btn w-11 h-11 shrink-0 rounded-full grid place-items-center">
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 sm:px-8 pb-8">
                <p className="text-[var(--ink-2)] leading-relaxed">{selected.fullDescription}</p>

                {details?.imageGallery.length ? (
                  <div className="mt-8 grid sm:grid-cols-2 gap-5">
                    {details.imageGallery.map((img) => (
                      <figure key={img.imageSrc} className="nm-in rounded-3xl p-2.5">
                        <button type="button" onClick={() => setImage(img)} className="block w-full cursor-zoom-in" aria-label={`Enlarge: ${img.imageAlt}`}>
                          <img src={img.imageSrc} alt={img.imageAlt} loading="lazy" className="w-full h-44 object-cover rounded-[18px]" />
                        </button>
                        <figcaption className="p-3 text-sm leading-relaxed text-[var(--ink-3)]">{img.imageDescription}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}

                <h4 className="mt-8 text-xl font-bold">What it does</h4>
                <ul className="mt-4 grid gap-2.5">
                  {selected.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[var(--ink-3)] leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {selected.techStack.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {selected.techStack.map((t) => (
                      <span key={t} className="nm-sm rounded-full px-3.5 py-1.5 text-sm font-medium text-black">{t}</span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  {isRealUrl(selected.liveUrl) && (
                    <LinkKey href={selected.liveUrl} ink>
                      <ExternalLink size={16} /> Open live site
                    </LinkKey>
                  )}
                  {isRealUrl(selected.githubUrl) && (
                    <LinkKey href={selected.githubUrl}>
                      <Github size={16} /> View code
                    </LinkKey>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{image && <ImageViewer image={image} onClose={() => setImage(null)} />}</AnimatePresence>
    </section>
  );
}
