import { motion } from "framer-motion";

const HERO_IMG =
  "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto,w_1920/v1774301412/interieur1_idllc0.png";

export default function HeroSection() {
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
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 md:pb-24 px-6 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-inter uppercase text-[11px] md:text-[13px] tracking-[0.35em] text-stone mb-4 text-center"
        >
          SCHILTIGHEIM · ALSACE · FRANCE
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
          Espaces professionnels en location · depuis 1910
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-12 pointer-events-auto"
        >
          <a
            href="#nosoffres"
            className="font-inter text-sm bg-accent text-white px-8 py-3.5 rounded-lg hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/30 min-w-[180px] text-center"
          >
            Voir nos offres
          </a>
          <a
            href="#contact"
            className="font-inter text-sm border border-white/70 text-white px-8 py-3.5 rounded-lg hover:bg-white hover:text-foreground hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-w-[180px] text-center"
          >
            Nous contacter
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-1.5 animate-bounce-arrow"
        >
          <span className="text-white/70 text-xl leading-none">↓</span>
          <span className="font-inter text-white/40 text-[11px] tracking-widest uppercase">Découvrir</span>
        </motion.div>
      </div>
    </section>
  );
}
