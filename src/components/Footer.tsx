import { socialLinks } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 sm:px-8 pb-10">
      <div className="nm-in rounded-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--ink-3)]">© {new Date().getFullYear()} Jasper Rosales</p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="nm-btn grid place-items-center w-10 h-10 rounded-full"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
