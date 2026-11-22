import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { projectDetails, type ProjectImageDetail } from "@/data/project-details";
import SectionHeading from "@/components/SectionHeading";

const filters = ["All", "Web", "Android"] as const;
type FilterId = (typeof filters)[number];

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

function ProjectCard({ project, wide, onSelect }: { project: Project; wide: boolean; onSelect: () => void }) {
  const still = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const imgX = useTransform(sry, [-8, 8], [10, -10]);
  const imgY = useTransform(srx, [-8, 8], [-10, 10]);
  const Icon = project.icon;
  const tint = { ["--tint" as string]: project.tint };

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (still || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <motion.article
      layout
      initial={still ? false : { opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={`nm rounded-[32px] p-3 flex flex-col ${wide ? "md:col-span-2" : ""}`}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-label={`Open details for ${project.title}`}
        className={`nm-in relative block w-full overflow-hidden rounded-[24px] ${wide ? "aspect-[16/8]" : "aspect-[16/10]"}`}
      >
        {project.cover && project.platform === "Android" ? (
          <span className="absolute inset-0" style={{ background: `radial-gradient(circle at 70% 10%, color-mix(in srgb, ${project.tint} 40%, var(--clay)), var(--clay) 75%)` }}>
            <span className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(#000 1.2px, transparent 1.2px)", backgroundSize: "18px 18px" }} />
            <motion.span style={still ? undefined : { x: imgX, y: imgY }} className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[34%] max-w-[190px] aspect-[9/19.5] rounded-[26px] border-[6px] border-black bg-black overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,.5)] rotate-[-4deg]">
              <img src={project.cover} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
            </motion.span>
          </span>
        ) : project.cover ? (
          <motion.img
            src={project.cover}
            alt=""
            loading="lazy"
            style={still ? undefined : { x: imgX, y: imgY, scale: 1.12 }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center" style={{ background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${project.tint} 35%, var(--clay)), var(--clay) 70%)` }}>
            <span className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(#000 1.2px, transparent 1.2px)", backgroundSize: "18px 18px" }} />
            <motion.span style={still ? undefined : { x: imgX, y: imgY }} className="relative text-white text-6xl w-28 h-28 rounded-[30px] grid place-items-center glow" >
              <span className="absolute inset-0 rounded-[30px]" style={{ background: `linear-gradient(145deg, ${project.tint}, color-mix(in srgb, ${project.tint} 60%, #000))`, ...tint }} />
              <Icon className="relative" />
            </motion.span>
          </span>
        )}
        <span className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-black/80 text-white backdrop-blur px-3 py-1 text-xs font-semibold">{project.platform}</span>
          {project.badge && <span className="rounded-full bg-white/85 text-black backdrop-blur px-3 py-1 text-xs font-semibold">{project.badge}</span>}
        </span>
      </button>

      <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 shrink-0 rounded-xl grid place-items-center text-white text-lg glow"
            style={{ background: `linear-gradient(145deg, ${project.tint}, color-mix(in srgb, ${project.tint} 60%, #000))`, ...tint }}>
            <Icon />
          </span>
          <h3 className="text-2xl font-bold tracking-tight leading-tight">{project.title}</h3>
        </div>
        <p className="mt-3 font-medium text-black">{project.tagline}</p>
        <p className={`mt-2 text-[15px] leading-relaxed text-[var(--ink-3)] ${wide ? "" : "line-clamp-3"}`}>{project.description}</p>
        <div className="mt-auto pt-6 flex flex-wrap gap-3">
          <button type="button" onClick={onSelect} className="nm-btn rounded-full px-4 py-2 text-sm font-semibold">Details</button>
          {isRealUrl(project.liveUrl) && (
            <LinkKey href={project.liveUrl} ink><ExternalLink size={15} /> Live</LinkKey>
          )}
          {isRealUrl(project.githubUrl) && (
            <LinkKey href={project.githubUrl}><Github size={15} /> Code</LinkKey>
          )}
        </div>
      </div>
    </motion.article>
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
  const [filter, setFilter] = useState<FilterId>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [image, setImage] = useState<ProjectImageDetail | null>(null);

  const visible = projects.filter((p) => filter === "All" || p.platform === filter);
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
          <SectionHeading title="Projects" lead="Ten picks from my GitHub: hackathon builds, client work, and apps I use myself." />
        </div>
        <div role="group" aria-label="Filter projects" className="nm-in self-start md:self-end rounded-full p-1.5 flex gap-1.5">
          {filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className="relative rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {active && <motion.span layoutId="filter-pill" className="nm-ink absolute inset-0 rounded-full" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                <span className={`relative ${active ? "text-white" : "text-[var(--ink-3)] hover:text-black"}`}>{f}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} wide={i === 0 || i === 6} onSelect={() => setSelected(p)} />
          ))}
        </AnimatePresence>
      </motion.div>

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
                    {selected.badge ? `${selected.platform}, ${selected.badge}` : selected.platform}
                  </span>
                  <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">{selected.title}</h3>
                </div>
                <button type="button" onClick={() => setSelected(null)} aria-label="Close project details" className="nm-btn w-11 h-11 shrink-0 rounded-full grid place-items-center">
                  <X size={18} />
                </button>
              </div>

              <div className="px-6 sm:px-8 pb-8">
                <p className="text-lg font-semibold text-black">{selected.tagline}</p>
                <p className="mt-3 text-[var(--ink-2)] leading-relaxed">{selected.fullDescription}</p>

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
