import { socialLinks } from "@/data/contact";
import { Spade } from "@/components/casino/PlayingCard";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-8 pb-12 pt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--gold)]/20 pt-6">
        <p className="flex items-center gap-2 text-sm text-[var(--text-3)]">
          <Spade className="w-3.5 text-[var(--gold)]" /> © {new Date().getFullYear()} Jasper Rosales · The house always ships
        </p>
        <div className="flex gap-2.5">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
              className="btn-line w-10 h-10">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
