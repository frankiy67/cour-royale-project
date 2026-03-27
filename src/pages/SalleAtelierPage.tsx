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

export default function SalleAtelierPage() {
  const { t } = useTranslation();
  const equipements = t('equipements_salle_atelier', { returnObjects: true }) as string[];

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
            {t('pages_salles.retour')}
          </Link>
          <span className="font-playfair text-foreground text-lg hidden sm:block">
            La Cour de la Semeuse
          </span>
          <a
            href="/#contact"
            className="font-inter text-xs bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            {t('pages_salles.demander_visite')}
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
              {t('pages_salles.acces_plain_pied')}
            </span>
          </div>
          <h1 className="font-playfair text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
            {t('location_salle')} — <span className="text-accent">30 m²</span>
          </h1>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {t('desc_salle_atelier')}
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
                    {t(`pages_salles.${p.labelKey}`)}
                  </p>
                  <p className="font-inter text-sm text-foreground font-medium mt-0.5">{p.caption}</p>
                </div>
                <div className="p-4 bg-white rounded-b-xl">
                  <img
                    src={p.src}
                    alt={`${t(`pages_salles.${p.labelKey}`)} — Salle Atelier`}
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
          <h2 className="font-playfair text-foreground text-2xl mb-6">{t('pages_salles.photos')}</h2>
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
            <h2 className="font-playfair text-foreground text-2xl mb-5">{t('pages_salles.equipements')}</h2>
            <ul className="space-y-3">
              {equipements.map((eq, i) => (
                <li key={i} className="flex items-start gap-3 font-inter text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  {eq}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-white text-2xl mb-3">{t('pages_salles.interesse')}</h2>
              <p className="font-inter text-white/70 text-sm leading-relaxed mb-6">
                {t('pages_salles.contactez')}
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
              {t('pages_salles.demander_visite')}
            </a>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
