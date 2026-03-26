import { Link } from "react-router-dom";
import { Check, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/hooks/useFadeInUp";

const CLD = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/";

const PLANS = [
  { label: "PLAN DE MASSE", title: "Bâtiment E — La Halle (orange)", src: `${CLD}HALLE_001_p3hisg` },
  { label: "PLAN DE SOL",   title: "Lot H7 — RDC (orange)",          src: `${CLD}HALLE_lot7_002_cpwrsp` },
];

const PHOTOS = [
  { src: "/images/lots/99m2-1.jpg", alt: "Intérieur avec cloisons vitrées / open space" },
  { src: "/images/lots/99m2-2.jpg", alt: "Intérieur bureaux cloisonnés" },
  { src: "/images/lots/99m2-3.jpg", alt: "Intérieur vue dégagée" },
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
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Retour aux offres
          </Link>
          <span className="font-playfair text-lg font-medium hidden sm:block">La Cour de la Semeuse</span>
          <Link to="/#contact" className="bg-accent text-white font-inter text-sm px-4 py-2 rounded hover:bg-accent/90 transition-colors">
            Demander une visite
          </Link>
        </div>
      </header>

      <motion.main
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-12 md:py-20"
      >
        {/* Badges */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-4">
          <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
            Bâtiment de la Halle · H7
          </span>
          <span className="font-inter text-xs uppercase tracking-[0.2em] text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Accès plain-pied
          </span>
        </motion.div>

        {/* Titre + description */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h1 className="font-playfair text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
            Locaux professionnels — <span className="text-accent">99 m²</span>
          </h1>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Lot H7 : Open space, 2 bureaux fermés, salle de réunions, dégagement, toilettes. Entrée directe
            depuis la cour. Configuration idéale pour une équipe de 8 à 12 personnes avec espaces de
            collaboration et de concentration distincts.
          </p>
        </motion.div>

        {/* Plans */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">Plans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PLANS.map((p) => (
              <div key={p.label} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="px-4 py-3 border-b border-border">
                  <p className="font-inter text-xs uppercase tracking-wider text-muted-foreground">{p.label}</p>
                  <p className="font-inter text-sm text-foreground font-medium mt-0.5">{p.title}</p>
                </div>
                <img src={p.src} alt={p.title} className="w-full h-auto object-contain block p-4 bg-white" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photos */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PHOTOS.map((p) => (
              <div key={p.src} className="rounded-xl overflow-hidden bg-[#f5f5f0]">
                <img src={p.src} alt={p.alt} className="w-full h-auto block" loading="lazy" />
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
              <h2 className="font-playfair text-white text-xl mb-2">Intéressé par ce local ?</h2>
              <p className="font-inter text-white/75 text-sm leading-relaxed mb-4">
                Contactez-nous pour organiser une visite ou obtenir plus d'informations sur les conditions de location.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 font-inter text-sm text-white/80">
                  <Phone className="w-4 h-4 text-accent" />
                  +33 6 07 08 80 79
                </div>
                <div className="flex items-center gap-2 font-inter text-sm text-white/80">
                  <MapPin className="w-4 h-4 text-accent" />
                  20 Place de la Liberté, Schiltigheim
                </div>
              </div>
            </div>
            <Link
              to="/#contact"
              className="block text-center font-inter text-sm bg-accent text-white px-6 py-3 rounded hover:bg-accent/90 transition-colors"
            >
              Demander une visite
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
