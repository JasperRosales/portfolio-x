import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "improvements", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Recognitions" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3 sm:px-6">
      <nav className="nm mx-auto max-w-6xl rounded-full pl-2 pr-2 sm:pr-3 h-14 flex items-center justify-between">
        <a href="#hero" className="nm-ink grid place-items-center w-10 h-10 rounded-full font-display font-extrabold text-sm">
          JR
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-2 rounded-full text-sm font-medium text-[var(--ink-3)] hover:text-black hover:shadow-[inset_3px_3px_6px_var(--clay-lo),inset_-3px_-3px_6px_var(--clay-hi)] transition-shadow"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-pressed={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="nm-btn md:hidden grid place-items-center w-10 h-10 rounded-full"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <ul className="nm md:hidden mx-auto max-w-6xl mt-3 rounded-3xl p-3 grid gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-2xl font-medium text-black active:shadow-[inset_3px_3px_6px_var(--clay-lo),inset_-3px_-3px_6px_var(--clay-hi)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export { Navigation };
