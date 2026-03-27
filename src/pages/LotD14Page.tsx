import { Link } from "react-router-dom";
import { Check, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";

const CLD = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/";

const NIVEAUX = [
  { etageKey: "rez_chaussee" as const, surface: "11 m²",  desc: "Entrée + dégagement" },
  { etageKey: "etage"        as const, surface: "111 m²", desc: "6 bureaux · dégagement · 2 toilettes" },
];

const PLANS = [
  { labelKey: "plan_masse", title: "Bâtiment D — L'Horloge (bleu)", src: `${CLD}HORLOGE_001_ncbrpf` },
  { labelKey: "plan_sol",   title: "Lot D14 — 1er étage",           src: `${CLD}HORLOGE_002_dwursl` },
];

const PHOTOS = [
  { src: "/images/lots/122m2-1.jpg", alt: "Bureaux lumineux — vue principale" },
  { src: "/images/lots/122m2-2.jpg", alt: "Espace de travail — rampants apparents" },
  { src: "/images/lots/122m2-3.jpg", alt: "Vue sur la cour — fenêtres hauteur intégrale" },
];

const EQUIPEMENTS = [
  "Très bonne isolation",
  "Chauffage radiant économique",
  "Climatisation",
  "VMC",
  "Accès fibre optique sur demande",
  "Stationnement dans la cour : 3 places dédiées",
];

export default function LotD14Page() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/#bureaux" className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t('pages_lots.retour')}
          </Link>
          <span className="font-playfair text-lg font-medium hidden sm:block">La Cour de la Semeuse</span>
          <Link to="/#contact" className="bg-accent text-white font-inter text-sm px-4 py-2 rounded hover:bg-accent/90 transition-colors">
            {t('pages_lots.demander_visite')}
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
            Bâtiment de l'Horloge · D14
          </span>
          <span className="font-inter text-xs uppercase tracking-[0.2em] text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {t('pages_lots.deux_niveaux')}
          </span>
        </motion.div>

        {/* Titre + description */}
        <motion.div variants={fadeInUp} className="mb-10">
          <h1 className="font-playfair text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
            Locaux professionnels — <span className="text-accent">122 m²</span> sur deux étages
          </h1>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Lot D14 : 11 m² au rez-de-chaussée (entrée + dégagement) + 111 m² à l'étage (6 bureaux +
            dégagement + 2 toilettes). Bureaux conviviaux, lumineux, volumes intéressants, rampants
            apparents. Fenêtres hauteur intégrale, vue sur la cour.
          </p>
        </motion.div>

        {/* Niveaux */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-12">
          {NIVEAUX.map((n) => (
            <div key={n.etageKey} className="bg-card rounded-xl border border-border p-5">
              <p className="font-inter text-xs uppercase tracking-widest text-muted-foreground mb-1">{t(`pages_lots.${n.etageKey}`)}</p>
              <p className="font-playfair text-2xl text-accent font-semibold mb-1">{n.surface}</p>
              <p className="font-inter text-sm text-muted-foreground">{n.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Plans */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">{t('pages_lots.plans')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PLANS.map((p) => (
              <div key={p.labelKey} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="px-4 py-3 border-b border-border">
                  <p className="font-inter text-xs uppercase tracking-wider text-muted-foreground">
                    {t(`pages_lots.${p.labelKey}`)}
                  </p>
                  <p className="font-inter text-sm text-foreground font-medium mt-0.5">{p.title}</p>
                </div>
                <img src={p.src} alt={p.title} className="w-full h-auto object-contain block p-4 bg-white" loading="lazy" />
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
                <img src={p.src} alt={p.alt} className="w-full h-auto block" loading="lazy" />
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
                <li key={eq} className="flex items-center gap-3 font-inter text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {eq}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-white text-xl mb-2">{t('pages_lots.interesse')}</h2>
              <p className="font-inter text-white/75 text-sm leading-relaxed mb-4">
                {t('pages_lots.contactez')}
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
              {t('pages_lots.demander_visite')}
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
