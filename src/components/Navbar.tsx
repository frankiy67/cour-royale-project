import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "ACCUEIL",    href: "#accueil",    id: "accueil" },
  { label: "HISTORIQUE", href: "#historique", id: "historique" },
  { label: "BUREAUX",    href: "#nosoffres",  id: "nosoffres" },
  { label: "SALLES",     href: "#salles",     id: "salles" },
  { label: "SITUATION",  href: "#situation",  id: "situation" },
  { label: "GALERIE",    href: "#galerie",    id: "galerie" },
  { label: "ACTUALITÉS", href: "#actualites", id: "actualites" },
  { label: "VISITE 360°",href: "#visite360",  id: "visite360" },
  { label: "CONTACT",    href: "#contact",    id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Detect scroll to switch navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently crossing the viewport midpoint
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Fire when the section's top edge crosses ~40% from the top of the viewport
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const desktopLinkClass = (id: string) => {
    const isActive = activeSection === id;
    return [
      "font-inter text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
      "pb-0.5 border-b",
      isActive
        ? "text-accent border-accent"
        : scrolled
          ? "text-foreground border-transparent hover:text-accent hover:border-accent/40"
          : "text-white/80 border-transparent hover:text-white hover:border-white/40",
    ].join(" ");
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo — links to top */}
          <a
            href="#"
            aria-label="La Cour de la Semeuse — retour en haut de page"
            className={`font-playfair italic text-xl md:text-2xl tracking-wide transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            LA SEMEUSE
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={l.href} className={desktopLinkClass(l.id)}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger — animates into ✕ when open */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                scrolled ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                scrolled ? "bg-foreground" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-foreground/97 backdrop-blur-sm flex flex-col items-center justify-center gap-7"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.id}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                className={`font-inter text-sm uppercase tracking-[0.28em] transition-colors ${
                  activeSection === l.id
                    ? "text-accent"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
