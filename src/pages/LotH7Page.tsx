import { ArrowLeft, Check, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/hooks/useFadeInUp";

const CLD = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/";

const PLAN_MASSE = `${CLD}HALLE_001_p3hisg`;
const PLAN_SOL   = `${CLD}HALLE_lot7_002_cpwrsp`;

const PHOTOS = [
  { src: `${CLD}LA_SEMEUSE_009_bmozjp`, alt: "Façade extérieure — Bâtiment de la Halle" },
  { src: `${CLD}LA_SEMEUSE_016_a9puue`, alt: "Intérieur — carrelage et lumière naturelle" },
];

const EQUIPEMENTS = [
  "Open space modulable",
  "2 bureaux fermés",
  "Salle de réunions",
  "Toilettes privatifs",
  "Accès plain-pied",
  "Stationnement dans la cour",
];

export default function LotH7Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/#nosoffres"
            className="flex items-center gap-2 font-inter text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux offres
          </Link>
          <span className="font-playfair text-foreground text-lg hidden sm:block">
            La Cour de la Semeuse
          </span>
          <a
            href="/#contact"
            className="font-inter text-xs bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            Demander une visite
          </a>
        </div>
      </nav>

      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-12 md:py-20"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex flex-wrap items-start gap-4 mb-4">
            <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
              Bâtiment de la Halle · H7
            </span>
            <span className="font-inter text-xs uppercase tracking-[0.2em] text-muted-foreground bg-muted px-3 py-1 rounded-full">
              Accès plain-pied
            </span>
          </div>
          <h1 className="font-playfair text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
            Locaux professionnels — <span className="text-accent">99 m²</span>
          </h1>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Lot H7 : Open space, 2 bureaux fermés, salle de réunions, dégagement, toilettes.
            Entrée directe depuis la cour. Configuration idéale pour une équipe de 8 à 12
            personnes avec espaces de collaboration et de concentration distincts.
          </p>
        </motion.div>

        {/* Plans */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">Plans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <p className="font-inter text-xs uppercase tracking-wider text-muted-foreground">Plan de masse</p>
                <p className="font-inter text-sm text-foreground font-medium mt-0.5">Bâtiment E — La Halle (orange)</p>
              </div>
              <img
                src={PLAN_MASSE}
                alt="Plan de masse — Bâtiment de la Halle"
                className="w-full object-contain p-4 bg-white"
                loading="lazy"
              />
            </div>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <p className="font-inter text-xs uppercase tracking-wider text-muted-foreground">Plan de sol</p>
                <p className="font-inter text-sm text-foreground font-medium mt-0.5">Lot H7 — RDC (orange)</p>
              </div>
              <img
                src={PLAN_SOL}
                alt="Plan de sol — Lot H7 RDC"
                className="w-full object-contain p-4 bg-white"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Photos */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PHOTOS.map((p) => (
              <div key={p.src} className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Équipements + Contact */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-playfair text-foreground text-2xl mb-5">Équipements</h2>
            <ul className="space-y-3">
              {EQUIPEMENTS.map((eq) => (
                <li key={eq} className="flex items-center gap-3 font-inter text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {eq}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-white text-2xl mb-3">Intéressé par ce local ?</h2>
              <p className="font-inter text-white/70 text-sm leading-relaxed mb-6">
                Contactez-nous pour organiser une visite ou obtenir plus d'informations sur
                les conditions de location.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+33607088079"
                  className="flex items-center gap-3 font-inter text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +33 6 07 08 80 79
                </a>
                <div className="flex items-center gap-3 font-inter text-sm text-white/80">
                  <MapPin className="w-4 h-4 text-accent" />
                  20 Place de la Liberté, Schiltigheim
                </div>
              </div>
            </div>
            <a
              href="/#contact"
              className="block text-center font-inter text-sm bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Demander une visite
            </a>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
