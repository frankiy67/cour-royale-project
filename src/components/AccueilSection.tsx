import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useCountUp } from "@/hooks/useCountUp";
import { useTranslation } from "react-i18next";

const STREET_VIEW_SRC =
  "https://www.google.com/maps/embed?pb=!1m0!3m2!1sfr!2sfr!4v1711000000000!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzRfLVdlcUFF!2m2!1d48.6069155571112!2d7.753805796110078!3f59.815569287643115!4f4.637306181296552!5f0.7820865974627469";

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center py-8">
      <span className="font-playfair text-accent text-4xl md:text-5xl">
        {count.toLocaleString("fr-FR")} {suffix}
      </span>
      <span className="font-inter text-muted-foreground text-sm mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function AccueilSection() {
  const { t } = useTranslation();

  return (
    <section id="accueil" className="bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-10"
      >
        {/* Bloc 1 — Texte centré pleine largeur */}
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t('bienvenue.label')}
          </p>
          <h2 className="font-playfair italic text-foreground text-3xl md:text-[44px] leading-snug mb-8">
            {t('bienvenue.titre')}
          </h2>
          <p className="font-inter text-muted-foreground text-[17px] leading-[1.8] mb-10 max-w-2xl mx-auto">
            {t('bienvenue.texte')}
          </p>
          <a
            href="#nosoffres"
            className="inline-block font-inter text-sm bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            {t('bienvenue.cta')}
          </a>
        </motion.div>

        {/* Bloc 2 — Street View pleine largeur */}
        <motion.div variants={fadeInUp}>
          <div className="w-full aspect-[16/9] max-h-[300px] md:aspect-[21/9] md:max-h-[520px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={STREET_VIEW_SRC}
              style={{ border: "none", width: "100%", height: "100%", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Street View — La Cour de la Semeuse, Schiltigheim"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone/40 pb-16">
        <StatCounter target={3500} suffix="m²" label={t('stats.surface')} />
        <StatCounter target={22} suffix="lots" label={t('stats.lots')} />
        <StatCounter target={2} suffix="salles" label={t('stats.salles')} />
      </div>
    </section>
  );
}
