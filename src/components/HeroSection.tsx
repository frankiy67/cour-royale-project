import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Reliable static hero — served via Cloudinary CDN, no external dependency
const HERO_IMG =
  "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto,w_1920/exterieur_achwfd";

// 360° Photo Sphere embed — kept as optional feature, lazy-loaded only when user asks
const VIRTUAL_TOUR_SRC =
  "https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1sCIHM0ogKEICAgIC4_-WeqAE!2e10!3e11!4shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2YvLpNrQoxHo0zAZZp2xJx8ktSr4XiwHAmUhyNuYXNpA4Fg21bIonC0YODXUJaU_3FqhOll6gSiaUA1BpD0oNQ065xflGtu4BMMOvfNOjnsKVfA6wMTE8crWNIixhC6x9uYh_zP1w!5e10!7i13312!8i6656";

export default function HeroSection() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/*
         * Static Cloudinary image as hero background.
         * fetchpriority="high" tells the browser to preload this as the LCP element.
         * The iframe-based approach was replaced because:
         *   - The Photo Sphere panorama (pano ID CIHM0ogKEICAgIC4_-WeqAE) no longer
         *     exists on Google's servers, causing a solid black frame.
         *   - User-contributed Photo Spheres can be removed at any time, making them
         *     unreliable as a primary hero background.
         *   - A full-screen iframe severely damages LCP and mobile scroll UX.
         */}
        <img
          src={HERO_IMG}
          alt="Façade extérieure de La Cour de la Semeuse, Schiltigheim"
          className="absolute inset-0 w-full h-full object-cover"
          // @ts-expect-error — fetchpriority is valid HTML but not yet in React's types
          fetchpriority="high"
        />

        {/* Gradient overlays — pointer-events-none so they don't block content */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

        {/* 360° tour trigger — top-right badge, now a real button */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          className="absolute top-20 right-6 z-10"
        >
          <button
            onClick={() => setTourOpen(true)}
            className="bg-white/90 backdrop-blur-sm text-foreground font-inter text-xs px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Ouvrir la visite virtuelle 360°"
          >
            🔄 Visite 360° interactive
          </button>
        </motion.div>

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

      {/* 360° Virtual Tour modal — iframe only mounts when the user explicitly opens it */}
      <AnimatePresence>
        {tourOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-black/92 flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setTourOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={VIRTUAL_TOUR_SRC}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Visite virtuelle 360° de La Cour de la Semeuse"
              />
            </motion.div>

            <p className="font-inter text-white/50 text-xs mt-4 text-center">
              Visite 360° · La Cour de la Semeuse, Schiltigheim
            </p>

            <button
              onClick={() => setTourOpen(false)}
              className="absolute top-4 right-5 text-white/70 hover:text-white text-3xl leading-none transition-colors"
              aria-label="Fermer la visite virtuelle"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
