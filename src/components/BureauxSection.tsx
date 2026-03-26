import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

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

const BENEFITS = [
  "Parking privé central",
  "Cadre calme et verdoyant",
  "Proximité Strasbourg",
  "Espaces modulables",
  "Charges maîtrisées",
  "Environnement professionnel",
];

const LOTS = [
  {
    surface: "80 m²",
    title: "BÂTIMENT DU MOULIN · CB9 & CB10",
    desc: "2 grandes salles avec chacune sa porte donnant sur l'extérieur.",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/MOULIN_002_jrv9yh",
    link: "/lots/cb9-cb10",
  },
  {
    surface: "17 m²",
    title: "BÂTIMENT DE LA HALLE · H4",
    desc: "1 bureau de 12 m² au rez-de-chaussée + parties communes de 5 m² comprenant 1 cabinet de toilette et 1 coin café.",
    plan: null,
    link: "/lots/h4",
  },
  {
    surface: "122 m²",
    title: "BÂTIMENT DE L'HORLOGE · D14",
    desc: "Au rez-de-chaussée 11 m² (entrée + dégagement). À l'étage 111 m² (6 bureaux + dégagement + 2 cabinets de toilette).",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HORLOGE_002_dwursl",
    link: "/lots/d14",
  },
  {
    surface: "99 m²",
    title: "BÂTIMENT DE LA HALLE · H7",
    desc: "Au rez-de-chaussée, 2 bureaux cloisonnés + 1 open space + 1 salle de réunion vitrée + 2 cabinets de toilette.",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HALLE_lot7_002_cpwrsp",
    link: "/lots/h7",
  },
];

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

export default function BureauxSection() {
  const [planSrc, setPlanSrc] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="nosoffres"
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
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">LOCAUX PROFESSIONNELS</p>
            <h2 className="font-playfair text-foreground text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Bureaux &amp; espaces<br />de travail
            </h2>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
              Implantez votre entreprise dans un cadre unique. La Cour de la Semeuse
              propose 22 lots modulables destinés aux entreprises du secteur tertiaire.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block font-inter bg-foreground text-white px-8 py-4 rounded text-sm uppercase tracking-wider hover:bg-foreground/90 transition-opacity"
            >
              Demander un devis
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
          Découvrez ci-dessous quelques unes de nos propositions :
        </p>

        {/* Surface cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LOTS.map((lot, i) => (
            <div
              key={i}
              className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <span className="font-playfair text-3xl font-semibold text-accent block mb-3">
                {lot.surface}
              </span>
              <p className="font-inter text-sm text-muted-foreground font-light leading-relaxed mb-4">
                {lot.desc}
              </p>
              <div className="flex items-center gap-3">
                {lot.plan && (
                  <button
                    onClick={() => setPlanSrc(lot.plan!)}
                    className="font-inter text-xs text-accent hover:underline"
                  >
                    Voir le plan 📐
                  </button>
                )}
                {lot.link && (
                  <Link
                    to={lot.link}
                    className="font-inter text-xs text-muted-foreground hover:text-foreground ml-auto"
                  >
                    Détails →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {planSrc && <PlanModal src={planSrc} onClose={() => setPlanSrc(null)} />}
      </AnimatePresence>
    </section>

  );
}
