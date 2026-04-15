import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Bug Bounty", href: "#bounty" },
  { label: "Proyectos", href: "#projects" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isMobileOpen
          ? "bg-background border-b border-border"
          : isScrolled
            ? "glass shadow-lg shadow-background/50"
            : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-mono text-lg font-semibold tracking-tight text-foreground">
          Curiosidades<span className="text-primary">DeHackers</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://curiosidadesdehackers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 transition-all"
          >
            Web Principal
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 relative z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu - solid background */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden bg-background border-t border-border"
          >
            <div className="section-container h-full overflow-y-auto py-8 flex flex-col items-center gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                  onClick={() => scrollTo(item.href)}
                  className="w-full max-w-xs px-4 py-4 text-base font-medium text-foreground hover:text-primary transition-colors text-center rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                href="https://curiosidadesdehackers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full max-w-xs px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary/90 transition-all"
              >
                Web Principal
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
