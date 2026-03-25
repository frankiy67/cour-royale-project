import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const OFFICE_IMAGE = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/interieur2_c6cvtm";

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

  return (
    <section id="nosoffres" className="bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
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
            <img
              src={OFFICE_IMAGE}
              alt="Bureaux professionnels — La Cour de la Semeuse"
              className="w-full rounded-lg shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>

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
