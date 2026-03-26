import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CAROUSEL_IMAGES = [
  { src: "/caroussel/1.jpg" },
  { src: "/caroussel/2.png" },
  { src: "/caroussel/3.png" },
  { src: "/caroussel/4.png" },
  { src: "/caroussel/5.png" },
  { src: "/caroussel/6.jpg" },
  { src: "/caroussel/7.jpg" },
  { src: "/caroussel/8.jpg" },
  { src: "/caroussel/9.jpg" },
  { src: "/caroussel/10.jpg" },
  { src: "/caroussel/11.jpg" },
];

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
    link: "/lots/cb9-cb10",
  },
  {
    surface: "17 m²",
    title: "BÂTIMENT DE LA HALLE · H4",
    desc: "1 bureau de 12 m² au rez-de-chaussée + parties communes de 5 m² comprenant 1 cabinet de toilette et 1 coin café.",
    link: "/lots/h4",
  },
  {
    surface: "122 m²",
    title: "BÂTIMENT DE L'HORLOGE · D14",
    desc: "Au rez-de-chaussée 11 m² (entrée + dégagement). À l'étage 111 m² (6 bureaux + dégagement + 2 cabinets de toilette).",
    link: "/lots/d14",
  },
  {
    surface: "99 m²",
    title: "BÂTIMENT DE LA HALLE · H7",
    desc: "Au rez-de-chaussée, 2 bureaux cloisonnés + 1 open space + 1 salle de réunion vitrée + 2 cabinets de toilette.",
    link: "/lots/h7",
  },
];

export default function BureauxSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="nosoffres" className="bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        {/* Top: text left + carousel right */}
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

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative group rounded-xl shadow-xl bg-[#f5f0eb] overflow-hidden flex items-center justify-center"
              style={{ aspectRatio: "4/3", maxHeight: "480px" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={CAROUSEL_IMAGES[current].src}
                  alt={`Bureaux La Cour de la Semeuse — vue ${current + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-contain object-center"
                />
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Photo précédente"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={next}
                aria-label="Photo suivante"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Photo ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Intro text before lot cards */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-inter text-muted-foreground text-center mt-8 mb-4"
        >
          Découvrez ci-dessous quelques unes de nos propositions :
        </motion.p>

        {/* Surface cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {LOTS.map((lot, i) => (
            <Link
              key={i}
              to={lot.link}
              className="relative block p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="font-playfair text-3xl font-semibold text-accent block mb-3">
                {lot.surface}
              </span>
              <p className="font-inter text-sm text-muted-foreground font-light leading-relaxed mb-4">
                {lot.desc}
              </p>
              <span className="font-inter text-xs text-muted-foreground hover:text-foreground">
                En savoir plus →
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
