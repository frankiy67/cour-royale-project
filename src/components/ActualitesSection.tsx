import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

// Update these items with real news when available — no backend required
const NEWS = [
  {
    date: "Janvier 2026",
    tag: "DISPONIBILITÉ",
    title: "Nouveau lot disponible — Bâtiment de la Halle",
    desc: "Un bureau individuel de 17 m² se libère au sein du Bâtiment de la Halle. Idéal pour une installation rapide, seul ou à deux, avec accès aux parties communes.",
    cta: { label: "Nous contacter", href: "#contact" },
  },
  {
    date: "Novembre 2025",
    tag: "AMÉNAGEMENT",
    title: "Rénovation des espaces communs du Bâtiment de l'Horloge",
    desc: "Les couloirs et espaces communs ont été entièrement rénovés : nouvel éclairage LED basse consommation, peintures fraîches et signalétique modernisée.",
    cta: null,
  },
  {
    date: "Septembre 2025",
    tag: "ÉVÉNEMENT",
    title: "Journées Portes Ouvertes — une cinquantaine de visiteurs",
    desc: "Nous avons accueilli une cinquantaine de visiteurs lors de nos journées portes ouvertes annuelles. Merci à tous les participants et à nos locataires pour leur accueil chaleureux.",
    cta: null,
  },
];

const TAG_COLORS: Record<string, string> = {
  DISPONIBILITÉ: "text-accent border-accent/40",
  AMÉNAGEMENT:   "text-[#1A5C8B] border-[#1A5C8B]/30",
  ÉVÉNEMENT:     "text-emerald-700 border-emerald-700/30",
};

export default function ActualitesSection() {
  return (
    <section id="actualites" className="bg-white relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        {/* Section watermark */}
        <span className="absolute top-12 right-12 font-playfair text-[120px] leading-none text-foreground/[0.05] select-none hidden md:block">
          07
        </span>

        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            ACTUALITÉS
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px] leading-tight mb-6">
            Dernières nouvelles
          </h2>
          <p className="font-inter text-muted-foreground text-[17px] max-w-xl mx-auto">
            Disponibilités, travaux, événements — suivez la vie de La Cour de la Semeuse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {NEWS.map((n) => (
            <motion.article
              key={n.title}
              variants={fadeInUp}
              className="bg-background rounded-2xl p-8 border border-border/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 flex flex-col"
            >
              {/* Tag + date */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span
                  className={`font-inter text-[10px] uppercase tracking-[0.18em] border px-2.5 py-1 rounded-full ${
                    TAG_COLORS[n.tag] ?? "text-accent border-accent/40"
                  }`}
                >
                  {n.tag}
                </span>
                <span className="font-inter text-[12px] text-muted-foreground">{n.date}</span>
              </div>

              {/* Content */}
              <h3 className="font-playfair text-foreground text-xl leading-snug mb-3">
                {n.title}
              </h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed flex-1">
                {n.desc}
              </p>

              {/* Optional CTA */}
              {n.cta && (
                <a
                  href={n.cta.href}
                  className="mt-6 inline-flex items-center gap-1.5 font-inter text-xs text-accent hover:text-foreground transition-colors group"
                >
                  {n.cta.label}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
