import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HERO_IMG = "/images/hero/hero.webp";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero background image */}
      <img
        src={HERO_IMG}
        alt="Cour intérieure de La Cour de la Semeuse, Schiltigheim"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-inter uppercase text-[11px] md:text-[13px] tracking-[0.35em] text-stone mb-4 text-center"
        >
          {t('hero.location')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-white text-center leading-[1.08] mb-5"
        >
          <span className="block text-[38px] md:text-[74px] lg:text-[90px]">La Cour</span>
          <span className="block text-[38px] md:text-[74px] lg:text-[90px]">de la Semeuse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.8, ease: "easeOut" }}
          className="font-inter text-white/65 text-sm md:text-[17px] mb-10 text-center tracking-wide"
        >
          {t('hero.soustitre')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12 pointer-events-auto"
        >
          <a
            href="#bureaux"
            className="font-inter text-sm bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/30 min-w-[180px] text-center"
          >
            {t('hero.cta_offres')}
          </a>
          <a
            href="#contact"
            className="font-inter text-sm border border-white/70 text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-foreground hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[180px] text-center"
          >
            {t('hero.cta_contact')}
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors mt-8 pointer-events-auto"
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="Découvrir le contenu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" }}>
            {t('hero.decouvrir')}
          </span>
        </motion.button>
      </div>
    </section>
  );
}
