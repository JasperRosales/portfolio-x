export default function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="mb-10 md:mb-14 max-w-2xl">
      <h2 className="emboss text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base md:text-lg text-[var(--ink-3)] leading-relaxed">{lead}</p>}
    </div>
  );
}
