import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1sCIHM0ogKEICAgIC4_-WeqAE!2e10!3e11!4shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2YvLpNrQoxHo0zAZZp2xJx8ktSr4XiwHAmUhyNuYXNpA4Fg21bIonC0YODXUJaU_3FqhOll6gSiaUA1BpD0oNQ065xflGtu4BMMOvfNOjnsKVfA6wMTE8crWNIixhC6x9uYh_zP1w!5e10!7i13312!8i6656"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Visite virtuelle 360° de La Cour de la Semeuse"
      />

      {/* Gradient overlays — pointer-events-none so iframe stays interactive */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      {/* Badge top-right */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        className="absolute top-20 right-6 z-10 pointer-events-none"
      >
        <span className="bg-white/90 backdrop-blur-sm text-foreground font-inter text-xs px-4 py-2 rounded-full shadow-lg select-none">
          🔄 Visite 360° interactive
        </span>
      </motion.div>

      {/* Main content — sits above gradients, pointer-events-auto so CTAs are clickable */}
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

        {/* CTA buttons — pointer-events-auto to restore click/keyboard access */}
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
