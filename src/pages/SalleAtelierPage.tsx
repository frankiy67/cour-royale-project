import { ArrowLeft, Check, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";

const PLANS = [
  {
    src: "/salles/salle-atelier-1.jpg",
    labelKey: "plan_masse",
    caption: "Bâtiment du Moulin — Salle Atelier",
  },
  {
    src: "/salles/salle-atelier-2.jpg",
    labelKey: "plan_sol",
    caption: "Salle 1 + Salle 2 + Espace pause",
  },
];

const PHOTOS = [
  { src: "/salles/salle-atelier-4.jpg", alt: "Salle Atelier — fenêtres hautes et cloisons vitrées" },
  { src: "/salles/salle-atelier-5.jpg", alt: "Salle Atelier — espace convivial kitchenette" },
  { src: "/salles/salle-atelier-6.jpg", alt: "Salle Atelier — configuration conférence" },
];

const EQUIPEMENTS = [
  "2 paper boards, vidéoprojecteur, écran",
  "Espace convivial de 35 m² avec petite cuisine équipée pour vos pauses et repas",
  "Kitchenette : réfrigérateur, deux plaques de cuisson, machines à café et vaisselle",
  "Parking dans la cour le week-end (en semaine : 2 places dédiées)",
  "Accès de plain-pied, accès handicapé",
  "Situation au calme dans la cour intérieure",
  "Configuration des salles à la carte",
  "Possibilité de prendre les repas sur place",
  "Nombreux restaurants à quelques minutes à pied",
  "Accès direct à la zone piétonne du vieux Schiltigheim",
];

export default function SalleAtelierPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/#salles"
            className="flex items-center gap-2 font-inter text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('pages_lots.retour_salles')}
          </Link>
          <span className="font-playfair text-foreground text-lg hidden sm:block">
            La Cour de la Semeuse
          </span>
          <a
            href="/#contact"
            className="font-inter text-xs bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            {t('pages_lots.demander_visite')}
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
              Bâtiment du Moulin · Salle Atelier
            </span>
            <span className="font-inter text-xs uppercase tracking-[0.2em] text-muted-foreground bg-muted px-3 py-1 rounded-full">
              Accès plain-pied
            </span>
          </div>
          <h1 className="font-playfair text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
            Location de salle — <span className="text-accent">30 m²</span>
          </h1>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Au cœur de la Semeuse, en accès de plain-pied, 2 salles sont disponibles en location
            à la journée ou en week-end pour accueillir vos réunions, ateliers et séminaires.
            Possibilité d'adapter la configuration des salles en fonction de votre évènement
            (réunion, conférence, sans tables).
          </p>
        </motion.div>

        {/* Plans */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">{t('pages_lots.plans')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PLANS.map((p) => (
              <div key={p.src} className="bg-card rounded-xl border border-border">
                <div className="px-4 py-3 border-b border-border rounded-t-xl">
                  <p className="font-inter text-xs uppercase tracking-wider text-muted-foreground">
                    {t(`pages_lots.${p.labelKey}`)}
                  </p>
                  <p className="font-inter text-sm text-foreground font-medium mt-0.5">{p.caption}</p>
                </div>
                <div className="p-4 bg-white rounded-b-xl">
                  <img
                    src={p.src}
                    alt={`${t(`pages_lots.${p.labelKey}`)} — Salle Atelier`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photos */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">{t('pages_lots.photos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PHOTOS.map((p) => (
              <div key={p.src} className="rounded-xl overflow-hidden bg-[#f5f5f0]">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Équipements + Contact */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-playfair text-foreground text-2xl mb-5">{t('pages_lots.equipements')}</h2>
            <ul className="space-y-3">
              {EQUIPEMENTS.map((eq) => (
                <li key={eq} className="flex items-start gap-3 font-inter text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {eq}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-white text-2xl mb-3">{t('pages_lots.interesse_salle')}</h2>
              <p className="font-inter text-white/70 text-sm leading-relaxed mb-6">
                {t('pages_lots.contactez')}
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
              {t('pages_lots.demander_visite')}
            </a>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
