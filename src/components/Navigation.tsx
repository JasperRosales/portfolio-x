import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "improvements", label: "Improvements" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Recognitions" },
  { id: "contact", label: "Contact" },
];

function NavLink({ id, label, onClick }: { id: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </a>
  );
}

function HamburgerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-[#e5e5e5]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="text-lg font-bold text-foreground/70 text-shadow-2xs hover:text-primary transition-colors">
            Portfolio
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.id} id={item.id} label={item.label} />
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden pb-3 flex flex-col gap-3 border-t border-[#e5e5e5]/50 mt-2 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navigation;
