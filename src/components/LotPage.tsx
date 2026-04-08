import { Link } from "react-router-dom";
import { Check, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";
import Head from "@/components/Head";

interface Plan {
  labelKey: string;
  title: string;
  src: string;
}

interface Photo {
  src: string;
  alt: string;
}

interface Badge {
  label: string;
  variant?: "accent" | "muted";
}

interface HeadMeta {
  title: string;
  description: string;
  canonical: string;
}

interface LotPageProps {
  head: HeadMeta;
  badges: Badge[];
  /** Full h1 content rendered as ReactNode */
  heading: React.ReactNode;
  descriptionKey: string;
  equipementsKey: string;
  plans: Plan[];
  photos: Photo[];
  /** Optional extra content rendered between heading and plans (e.g. niveaux for D14) */
  extra?: React.ReactNode;
}

export default function LotPage({
  head,
  badges,
  heading,
  descriptionKey,
  equipementsKey,
  plans,
  photos,
  extra,
}: LotPageProps) {
  const { t } = useTranslation();
  const equipements = t(equipementsKey, { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Head {...head} />

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/#bureaux"
            className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("pages_lots.retour")}
          </Link>
          <span className="font-playfair text-lg font-medium hidden sm:block">
            La Cour de la Semeuse
          </span>
          <Link
            to="/#contact"
            className="bg-accent text-white font-inter text-sm px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            {t("pages_lots.demander_visite")}
          </Link>
        </div>
      </header>

      <motion.main
        role="main"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-12 md:py-20"
      >
        {/* Badges */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-4">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`font-inter text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                b.variant === "muted"
                  ? "text-muted-foreground bg-muted"
                  : "text-accent bg-accent/10"
              }`}
            >
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* Titre + description */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h1 className="font-playfair text-foreground text-3xl md:text-5xl font-light tracking-tight mb-4">
            {heading}
          </h1>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {t(descriptionKey)}
          </p>
        </motion.div>

        {/* Extra content (e.g. niveaux) */}
        {extra}

        {/* Plans */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">
            {t("pages_lots.plans")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((p) => (
              <div
                key={p.labelKey}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-border">
                  <p className="font-inter text-xs uppercase tracking-wider text-muted-foreground">
                    {t(`pages_lots.${p.labelKey}`)}
                  </p>
                  <p className="font-inter text-sm text-foreground font-medium mt-0.5">
                    {p.title}
                  </p>
                </div>
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-auto object-contain block p-4 bg-white"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Photos */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="font-playfair text-foreground text-2xl mb-6">
            {t("pages_lots.photos")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.map((p) => (
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
            <h2 className="font-playfair text-foreground text-2xl mb-5">
              {t("pages_lots.equipements")}
            </h2>
            <ul className="space-y-3">
              {equipements.map((eq, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-inter text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {eq}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-white text-xl mb-2">
                {t("pages_lots.interesse")}
              </h2>
              <p className="font-inter text-white/75 text-sm leading-relaxed mb-4">
                {t("pages_lots.contactez")}
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
              {t("pages_lots.demander_visite")}
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
