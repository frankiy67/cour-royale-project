import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Users, Monitor, Coffee, Accessibility } from "lucide-react";

const PLAN_MODAL_IMG = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LOCATION_SALLES_002_bxkza1";

const SALLES = [
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/sallereunion1_b2ftou",
    surface: "45 m²",
    name: "Grande Salle",
    capacities: [
      { h: "RÉUNION", v: "14 pers." },
      { h: "CONFÉRENCE", v: "30 pers." },
      { h: "SANS TABLES", v: "25 pers." },
    ],
    features: [
      "Espace convivial de 35 m² avec cuisine équipée",
      "2 cabinets de toilette",
      "Accès de plain-pied / Accès handicapé",
      "Porte-fenêtre sur la cour · Parking week-end",
    ],
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/salle_reunion2_jlivyx",
    surface: "30 m²",
    name: "Salle Atelier",
    capacities: [
      { h: "RÉUNION", v: "10 pers." },
      { h: "CONFÉRENCE", v: "16 pers." },
      { h: "SANS TABLES", v: "14 pers." },
    ],
    features: [
      "Espace convivial de 35 m² avec cuisine équipée",
      "2 cabinets de toilette",
      "Accès de plain-pied / Accès handicapé",
      "2 places de parking semaine",
    ],
  },
];

export default function SallesSection() {
  const [planOpen, setPlanOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="salles" className="bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">NOS ESPACES</p>
          <h2 className="font-playfair text-foreground text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Salles de réunion équipées
          </h2>
          <p className="font-inter text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Location de salles à la journée et au week-end pour événements professionnels,
            réunions, ateliers et séminaires.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {SALLES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-playfair text-3xl font-medium">{s.name}</h3>
                  <span className="bg-secondary px-4 py-1.5 rounded text-sm font-medium text-muted-foreground font-inter">
                    {s.surface}
                  </span>
                </div>

                {/* Capacities */}
                <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-border">
                  {s.capacities.map((c) => (
                    <div key={c.h} className="text-center">
                      <p className="font-inter text-[9px] uppercase tracking-wider text-muted-foreground mb-1">{c.h}</p>
                      <p className="font-inter text-sm font-semibold text-foreground">{c.v}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {s.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="font-inter font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setPlanOpen(true)}
                    className="font-inter text-sm border border-border text-foreground px-5 py-2 rounded hover:bg-secondary transition-colors"
                  >
                    Voir le plan 📐
                  </button>
                  <a
                    href="#contact"
                    className="font-inter text-sm bg-foreground text-white px-6 py-2 rounded hover:bg-foreground/90 transition-opacity uppercase tracking-wider"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-muted-foreground"
        >
          {[
            { icon: Monitor, label: "Vidéoprojecteur" },
            { icon: Coffee, label: "Espace café" },
            { icon: Accessibility, label: "Accès PMR" },
            { icon: Users, label: "Modulable" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-inter">
              <item.icon className="w-4 h-4 text-accent" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {planOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setPlanOpen(false)}
          >
            <img
              src={PLAN_MODAL_IMG}
              alt="Plan des salles"
              className="max-w-3xl w-full max-h-[80vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setPlanOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Fermer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
