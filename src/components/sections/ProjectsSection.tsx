import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, X, Lock, GitCommitHorizontal, ArrowUpRight } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { projectDetails, type ProjectImageDetail } from "@/data/project-details";
import { orgProjects, ORG_URL, type OrgProject } from "@/data/org-projects";
import { Overlay, Page, SectionTitle } from "@/components/casino/ui";
import LuxeCard, { Ornament, isRedSuit, type Suit } from "@/components/casino/LuxeCard";

/** Each filter is a suit, and its cards are dealt A, 2, 3… in order. */
const FILTERS: { id: ProjectCategory; suit: Suit; blurb: string }[] = [
  { id: "Hackathon", suit: "♦", blurb: "Built against the clock, for prizes and judges." },
  { id: "Personal", suit: "♣", blurb: "Apps I build for myself and use every day." },
  { id: "Client", suit: "♥", blurb: "Work for a business, and the tools I build for the CICS Balayan campus community." },
];
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

type Item = { kind: "mine"; p: Project } | { kind: "org"; p: OrgProject };

const isRealUrl = (v?: string): v is string => !!v && v.startsWith("http");

const dealIn = (i: number, still: boolean) =>
  still
    ? {}
    : {
        initial: { opacity: 0, y: -140, rotate: (i % 2 ? 1 : -1) * 12, scale: 0.85 },
        animate: { opacity: 1, y: 0, rotate: 0, scale: 1 },
        exit: { opacity: 0, y: 50, scale: 0.92, transition: { duration: 0.2 } },
        transition: { type: "spring" as const, stiffness: 170, damping: 19, delay: 0.1 + i * 0.06 },
      };

function ExtLink({ href, children, solid }: { href: string; children: React.ReactNode; solid?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
      className={solid ? "btn-ink px-4 py-2 text-sm" : "luxe-btn"}>
      {children}
    </a>
  );
}

function ProjectCard({ project, index, suit, onSelect }: { project: Project; index: number; suit: Suit; onSelect: () => void }) {
  const still = !!useReducedMotion();
  const Icon = project.icon;
  const android = project.platform === "Android";

  return (
    <LuxeCard
      layout
      {...dealIn(index, still)}
      rank={RANKS[index % RANKS.length]}
      suit={suit}
      stack
      label={project.badge ?? project.category}
      className="h-full"
    >
      <button type="button" onClick={onSelect} aria-label={`Open details for ${project.title}`}
        className="luxe-window block w-full aspect-[16/10] text-left">
        {project.cover && android ? (
          <span className="absolute inset-0" style={{ background: `radial-gradient(circle at 70% 10%, color-mix(in srgb, ${project.tint} 55%, var(--felt)), var(--felt-deep) 75%)` }}>
            <span className="felt-grain absolute inset-0 opacity-60" />
            <span className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[34%] aspect-[9/19.5] rounded-[18px] border-[5px] border-black bg-black overflow-hidden shadow-[0_24px_48px_-16px_rgba(0,0,0,.7)] rotate-[-4deg] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-1">
              <img src={project.cover} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
            </span>
          </span>
        ) : project.cover ? (
          <img src={project.cover} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
        ) : (
          <span className="absolute inset-0 grid place-items-center" style={{ background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${project.tint} 45%, var(--felt)), var(--felt-deep) 72%)` }}>
            <span className="felt-grain absolute inset-0 opacity-60" />
            {project.logo ? (
              <img src={project.logo} alt="" className="relative w-24 h-24 rounded-[26px] object-cover shadow-[0_16px_30px_-10px_rgba(0,0,0,.7)] transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <span className="relative w-24 h-24 rounded-[26px] grid place-items-center text-white text-5xl" style={{ background: project.tint }}><Icon /></span>
            )}
          </span>
        )}
        <span className="absolute right-2.5 top-2.5 rounded-full bg-black/75 text-[var(--gold-hi)] px-2.5 py-0.5 text-[11px] font-semibold">{project.platform}</span>
      </button>

      <div className="mt-6 flex items-center gap-3">
        <span className="w-9 h-9 shrink-0 rounded-[10px] grid place-items-center text-white text-base overflow-hidden ring-1 ring-black/10" style={{ background: project.tint }}>
          {project.logo ? <img src={project.logo} alt="" className="w-full h-full object-cover" /> : <Icon />}
        </span>
        <h3 className="font-card text-[1.6rem] font-bold leading-tight">{project.title}</h3>
      </div>
      <p className="mt-2 font-card italic text-[1.05rem] leading-snug text-[#5a4a33]">{project.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed line-clamp-3">{project.description}</p>

      <Ornament suit={suit} className="mt-5" />

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((t) => <span key={t} className="tag !text-xs !py-1">{t}</span>)}
      </div>

      <div className="mt-auto pt-6 flex flex-wrap items-center gap-2">
        <button type="button" onClick={onSelect} className="luxe-btn">Details</button>
        {isRealUrl(project.liveUrl) && <ExtLink href={project.liveUrl} solid><ExternalLink size={14} /> Live</ExtLink>}
        {isRealUrl(project.githubUrl) && <ExtLink href={project.githubUrl}><Github size={14} /> Code</ExtLink>}
        {project.isPrivate && (
          <span className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-[#7a6a52]"><Lock size={13} /> Private</span>
        )}
      </div>
    </LuxeCard>
  );
}

function OrgCard({ p, index, suit }: { p: OrgProject; index: number; suit: Suit }) {
  const still = !!useReducedMotion();
  const repoUrl = `${ORG_URL}/${p.repo}`;
  const monogram = p.title.split(" ").map((w) => w[0]).slice(0, 3).join("");

  return (
    <LuxeCard
      layout
      {...dealIn(index, still)}
      rank={RANKS[index % RANKS.length]}
      suit={suit}
      stack
      label="CICS Balayan"
      className="h-full"
    >
      <div className="luxe-window aspect-[16/10] grid place-items-center"
        style={{ background: `radial-gradient(circle at 30% 15%, color-mix(in srgb, ${p.tint} 60%, var(--felt)), var(--felt-deep) 78%)` }}>
        <span className="felt-grain absolute inset-0 opacity-60" />
        <span aria-hidden className="absolute -right-3 -bottom-12 text-[9.5rem] leading-none text-white/10 transition-transform duration-700 group-hover:-rotate-12">{suit}</span>
        <span className="relative font-card italic font-bold text-[3.4rem] text-[var(--ivory)] [text-shadow:0_4px_14px_rgba(0,0,0,.5)]">{monogram}</span>
        <span className="absolute left-2.5 top-2.5 max-w-[85%] truncate rounded-full bg-black/70 text-[var(--gold-hi)] px-2.5 py-0.5 text-[11px] font-semibold">
          cicsbalayan/{p.repo}
        </span>
        <a href={`${repoUrl}/commits?author=JasperRosales`} target="_blank" rel="noopener noreferrer"
          className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-full bg-[var(--ivory)] text-[var(--card-ink)] px-2.5 py-1 text-[11px] font-bold shadow-[0_4px_10px_rgba(0,0,0,.4)] hover:bg-[var(--gold-hi)] transition-colors">
          <GitCommitHorizontal size={13} /> {p.commits} commits by me
        </a>
      </div>

      <h3 className="mt-6 font-card text-[1.6rem] font-bold leading-tight">{p.title}</h3>
      <p className="mt-2 font-card italic text-[1.05rem] leading-snug text-[#5a4a33]">{p.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed">{p.description}</p>

      <Ornament suit={suit} className="mt-5" />

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.techStack.map((t) => <span key={t} className="tag !text-xs !py-1">{t}</span>)}
      </div>

      <div className="mt-auto pt-6 flex flex-wrap items-center gap-2">
        {p.liveUrl && <ExtLink href={p.liveUrl} solid><ExternalLink size={14} /> Live</ExtLink>}
        <ExtLink href={repoUrl}><Github size={14} /> Code</ExtLink>
      </div>
    </LuxeCard>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const [image, setImage] = useState<ProjectImageDetail | null>(null);
  const details = projectDetails[project.title];
  const closeImage = useCallback(() => setImage(null), []);
  const suit = FILTERS.find((f) => f.id === project.category)!.suit;

  return (
    <Overlay onClose={image ? closeImage : onClose} label={project.title}>
      <motion.div
        initial={{ y: 40, rotateX: 18, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        style={{ transformPerspective: 1200 }}
        className="luxe max-w-3xl w-full"
        data-tone="ivory"
      >
        <div className="luxe-edge">
          <div className="luxe-stock max-h-[88vh] overflow-y-auto">
            <span aria-hidden className="luxe-frame" />
            <div className="sticky top-0 z-10 px-6 sm:px-9 pt-7 pb-4 flex items-start justify-between gap-4 bg-[var(--stock-tl)]/95 backdrop-blur-sm">
              <div>
                <p className="luxe-label !justify-start !px-0 before:!hidden">
                  {suit} {project.category}{project.badge ? ` · ${project.badge}` : ""} · {project.platform}
                </p>
                <h3 className="mt-2 font-card text-3xl sm:text-4xl font-bold leading-none">{project.title}</h3>
              </div>
              <button type="button" onClick={onClose} aria-label="Close project details" className="btn-ink w-11 h-11 shrink-0"><X size={18} /></button>
            </div>

            <div className="px-6 sm:px-9 pb-10 pt-3">
              <p className="font-card italic text-xl text-[#5a4a33]">{project.tagline}</p>
              <p className="mt-3 leading-relaxed">{project.fullDescription}</p>

              {details?.imageGallery.length ? (
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {details.imageGallery.map((img) => (
                    <figure key={img.imageSrc}>
                      <button type="button" onClick={() => setImage(img)} className="luxe-window block w-full cursor-zoom-in" aria-label={`Enlarge: ${img.imageAlt}`}>
                        <img src={img.imageSrc} alt={img.imageAlt} loading="lazy" className="w-full h-44 object-cover object-top" />
                      </button>
                      <figcaption className="pt-3 px-1 text-sm leading-relaxed text-[#6b5c45]">{img.imageDescription}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}

              <Ornament suit={suit} className="mt-8" />
              <h4 className="mt-6 font-card text-xl font-bold">What it does</h4>
              <ul className="mt-3 grid gap-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className={`mt-[1px] shrink-0 ${isRedSuit(suit) ? "text-[var(--card-red)]" : "text-[var(--card-ink)]"}`}>{suit}</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.techStack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {isRealUrl(project.liveUrl) && <ExtLink href={project.liveUrl} solid><ExternalLink size={16} /> Open live site</ExtLink>}
                {isRealUrl(project.githubUrl) && <ExtLink href={project.githubUrl}><Github size={16} /> View code</ExtLink>}
                {project.isPrivate && (
                  <span className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-[#7a6a52]"><Lock size={15} /> Source code is private</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {image && (
          <motion.div
            key="img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-black/92 p-4"
            onClick={(e) => { e.stopPropagation(); closeImage(); }}
          >
            <button type="button" onClick={closeImage} aria-label="Close image" className="btn-gold absolute top-4 right-4 w-11 h-11"><X size={18} /></button>
            <figure className="max-w-[95vw] flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <img src={image.imageSrc} alt={image.imageAlt} className="max-h-[82vh] w-auto max-w-full object-contain rounded-xl" />
              <figcaption className="text-sm text-[var(--text-2)] text-center max-w-3xl">{image.imageDescription}</figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Overlay>
  );
}

const allItems: Item[] = [
  ...projects.map((p) => ({ kind: "mine" as const, p })),
  ...orgProjects.map((p) => ({ kind: "org" as const, p })),
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("Hackathon");
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const current = FILTERS.find((f) => f.id === filter)!;
  const visible = allItems.filter((it) => it.p.category === filter);

  return (
    <Page>
      <SectionTitle
        rank="J"
        eyebrow="Jack of spades"
        title="Projects"
        lead="Three suits: hackathon entries, my own apps, and work for clients, including the tools I build with the CICS Balayan GitHub community."
      />

      <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-3">
        {FILTERS.map((f) => {
          const on = filter === f.id;
          const count = allItems.filter((it) => it.p.category === f.id).length;
          return (
            <button key={f.id} type="button" role="tab" aria-selected={on} onClick={() => setFilter(f.id)}
              className="relative rounded-full pl-2 pr-5 py-2 text-sm font-bold">
              {on ? (
                <motion.span layoutId="suit-pill" className="btn-gold absolute inset-0" transition={{ type: "spring", stiffness: 420, damping: 32 }} />
              ) : (
                <span className="absolute inset-0 rounded-full border border-[var(--gold)]/35 bg-black/25" />
              )}
              <span className={`relative flex items-center gap-2.5 ${on ? "text-[var(--card-ink)]" : "text-[var(--text-2)] hover:text-[var(--text)]"}`}>
                <span className={`grid place-items-center w-8 h-8 rounded-full text-base ${on ? "bg-[var(--card-ink)]" : "bg-[var(--ivory)]"} ${isRedSuit(f.suit) ? "text-[var(--card-red)]" : on ? "text-[var(--gold-hi)]" : "text-[var(--card-ink)]"}`}>
                  {f.suit}
                </span>
                {f.id}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-black/15" : "bg-white/10"}`}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 mb-10 flex flex-wrap items-center justify-between gap-3 min-h-[40px]">
        <AnimatePresence mode="wait">
          <motion.p key={filter} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            className="font-card italic text-lg text-[var(--text-2)]">
            {current.blurb}
          </motion.p>
        </AnimatePresence>
        {filter === "Client" && (
          <a href={ORG_URL} target="_blank" rel="noopener noreferrer" className="btn-line px-4 py-2 text-sm">
            <Github size={15} /> github.com/cicsbalayan <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9">
        <AnimatePresence mode="popLayout">
          {visible.map((it, i) =>
            it.kind === "mine" ? (
              <ProjectCard key={`${filter}-${it.p.title}`} project={it.p} index={i} suit={current.suit} onSelect={() => setSelected(it.p)} />
            ) : (
              <OrgCard key={`${filter}-${it.p.repo}`} p={it.p} index={i} suit={current.suit} />
            ),
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>{selected && <ProjectDialog key={selected.title} project={selected} onClose={close} />}</AnimatePresence>
    </Page>
  );
}
