import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

const PLAN_MODAL_IMG = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LOCATION_SALLES_002_bxkza1";

const SALLES = [
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/sallereunion1_b2ftou",
    badge: "45 m²", badgeColor: "bg-accent",
    title: "Salle 1",
    capacities: [
      { h: "RÉUNION", v: "14 pers. max" },
      { h: "CONFÉRENCE", v: "30 pers. max" },
      { h: "SANS TABLES", v: "25 pers. max" },
    ],
    text: "Avec un espace convivial de 35 m² comprenant une petite cuisine équipée pour vos pauses et repas et 2 cabinets de toilette. Accès de plain-pied / Accès handicapé.",
    ctaColor: "bg-accent hover:bg-accent/90",
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/salle_reunion2_jlivyx",
    badge: "30 m²", badgeColor: "bg-[#1A5C8B]",
    title: "Salle 2",
    capacities: [
      { h: "RÉUNION", v: "10 pers. max" },
      { h: "CONFÉRENCE", v: "16 pers. max" },
      { h: "SANS TABLES", v: "14 pers. max" },
    ],
    text: "Avec un espace convivial de 35 m² comprenant une petite cuisine équipée pour vos pauses et repas et 2 cabinets de toilette. Accès de plain-pied / Accès handicapé.",
    ctaColor: "bg-[#1A5C8B] hover:bg-[#1A5C8B]/90",
  },
];

const STRIP = [
  "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_029_blanc_ertkh3",
  "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/sallereunion1_b2ftou",
  "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/salle_reunion2_jlivyx",
];

export default function SallesSection() {
  const [planOpen, setPlanOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="salles" className="bg-light-grey relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        <span className="absolute top-12 left-12 font-playfair text-[120px] leading-none text-foreground/[0.06] select-none hidden md:block">04</span>

        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">SALLES DE RÉUNION ÉQUIPÉES</p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px] leading-tight mb-6">
            Vos événements professionnels,<br />dans un cadre unique
          </h2>
          <p className="font-inter text-muted-foreground text-[17px] max-w-2xl mx-auto">
            Location de salles à la journée et au week-end pour évènements professionnels,
            réunions, ateliers et séminaires.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col items-center mb-16">
          <img
            src="https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LOCATION_SALLES_001_atanln"
            alt="Localisation des salles de réunion"
            className="max-w-[760px] w-full rounded-xl shadow-lg"
            loading="lazy"
          />
          <p className="font-inter text-muted-foreground text-sm mt-3">Localisation des salles · Bâtiment du Moulin</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SALLES.map((s) => (
            <motion.div key={s.title} variants={fadeInUp} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img src={s.img} alt={s.title} className="w-full h-[320px] object-cover" loading="lazy" />
                <span className={`absolute top-4 right-4 ${s.badgeColor} text-white font-inter text-sm px-4 py-1.5 rounded-full`}>
                  {s.badge}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-foreground text-[28px] mb-6">{s.title}</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {s.capacities.map((c) => (
                    <div key={c.h} className="text-center">
                      <p className="font-inter text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{c.h}</p>
                      <p className="font-inter text-sm font-semibold text-foreground">{c.v}</p>
                    </div>
                  ))}
                </div>
                <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">{s.text}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <button onClick={() => setPlanOpen(true)} className="font-inter text-sm border border-border text-foreground px-5 py-2 rounded-lg hover:bg-secondary transition-colors">
                    Voir le plan 📐
                  </button>
                  <a href="#contact" className={`font-inter text-sm text-white px-6 py-2 rounded-lg transition-colors ${s.ctaColor}`}>
                    Demander un devis
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Configurations */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center mb-16">
          <img
            src="https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LOCATION_SALLES_003_whviyq"
            alt="Configurations disponibles"
            className="max-w-[800px] w-full rounded-xl shadow-lg"
            loading="lazy"
          />
          <p className="font-inter text-muted-foreground text-sm mt-3">Configurations disponibles selon vos besoins</p>
        </motion.div>

        {/* Horizontal strip */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 mb-12 cursor-grab" style={{ scrollbarWidth: "none" }}>
          {STRIP.map((src, i) => (
            <img key={i} src={src} alt="Salle de réunion" className="h-[280px] w-auto object-cover rounded-xl flex-shrink-0" loading="lazy" />
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center">
          <a href="#contact" className="inline-block font-inter text-sm border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all">
            Nous contacter pour une réservation
          </a>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {planOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setPlanOpen(false)}
          >
            <img src={PLAN_MODAL_IMG} alt="Plan des salles" className="max-w-3xl w-full max-h-[80vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
            <button onClick={() => setPlanOpen(false)} className="absolute top-6 right-6 text-white text-3xl" aria-label="Fermer">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
