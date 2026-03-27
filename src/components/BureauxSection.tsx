import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CAROUSEL_IMAGES = [
  "/caroussel/2.png",
  "/caroussel/3.png",
  "/caroussel/4.png",
  "/caroussel/5.png",
];

function BureauxCarousel() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length), []);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length), []);

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [hovered, next]);

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-[#f5f0eb] group"
      style={{ height: "420px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={CAROUSEL_IMAGES[current]}
          alt={`Bureaux — vue ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover object-center block"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Flèches */}
      <button
        onClick={prev}
        aria-label="Image précédente"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Image suivante"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Points */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Aller à l'image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function PlanModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        src={src}
        alt="Plan du lot"
        className="max-w-3xl w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onClose} className="absolute top-6 right-6 text-white text-3xl" aria-label="Fermer">✕</button>
    </motion.div>
  );
}

const LOTS_CONFIG = [
  { key: "cb9", plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/MOULIN_002_jrv9yh", link: "/lots/cb9-cb10" },
  { key: "h4",  plan: null,                                                                                   link: "/lots/h4" },
  { key: "d14", plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HORLOGE_002_dwursl", link: "/lots/d14" },
  { key: "h7",  plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HALLE_lot7_002_cpwrsp", link: "/lots/h7" },
];

const BENEFITS_KEYS = ["parking", "cadre", "proximite", "modulable", "charges", "environnement"] as const;

export default function BureauxSection() {
  const { t } = useTranslation();
  const [planSrc, setPlanSrc] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="bureaux"
      className="relative"
      style={{
        backgroundImage: "url('/images/bureaux-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      ref={ref}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(235, 228, 220, 0.82)" }} />
      <div className="relative z-[1] max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* Top: text left + image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
              {t('bureaux.label')}
            </p>
            <h2 className="font-playfair text-foreground text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              {t('bureaux.titre')}
            </h2>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
              {t('bureaux.texte')}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {BENEFITS_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{t(`bureaux.avantages.${key}`)}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block font-inter bg-foreground text-white px-8 py-4 rounded text-sm uppercase tracking-wider hover:bg-foreground/90 transition-opacity"
            >
              {t('bureaux.cta_devis')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BureauxCarousel />
          </motion.div>
        </div>

        {/* Intro cartes */}
        <p className="font-inter text-muted-foreground text-base mt-8 mb-4">
          {t('bureaux.decouvrir')}
        </p>

        {/* Surface cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LOTS_CONFIG.map((lot) => (
            <Link
              key={lot.key}
              to={lot.link}
              className="block p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="font-playfair text-3xl font-semibold text-accent block mb-3">
                {t(`bureaux.lots.${lot.key}.surface`)}
              </span>
              <p className="font-inter text-sm text-muted-foreground font-light leading-relaxed mb-4">
                {t(`bureaux.lots.${lot.key}.desc`)}
              </p>
              <span className="font-inter text-xs text-accent hover:underline">
                {t('bureaux.en_savoir_plus')}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {planSrc && <PlanModal src={planSrc} onClose={() => setPlanSrc(null)} />}
      </AnimatePresence>
    </section>
  );
}
