import { socialLinks } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-[#e5e5e5]/50 mt-16 md:mt-24">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Improving technology and businesses with reliable digital systems
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
