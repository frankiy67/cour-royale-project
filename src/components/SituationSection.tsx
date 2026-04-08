import { motion } from "framer-motion";
import { Car, Bus, Train, Plane } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";

const TRANSPORTS_CONFIG = [
  { Icon: Car,   key: "autoroute", href: "https://maps.app.goo.gl/Ah12SLQPovQmF8C26" },
  { Icon: Bus,   key: "tram",      href: "https://maps.app.goo.gl/P9haAyoEikpAeEri6" },
  { Icon: Train, key: "tgv",       href: "https://maps.app.goo.gl/crosncjNEQRZxSVi8" },
  { Icon: Plane, key: "aeroport",  href: "https://maps.app.goo.gl/VE74Kz61WFJYPevk9" },
];

export default function SituationSection() {
  const { t } = useTranslation();

  return (
    <section id="situation" className="bg-background py-12 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t('situation.label')}
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[52px] leading-tight mb-6">
            {t('situation.titre')}
          </h2>
          <p className="font-inter text-foreground/70 text-[17px] leading-[1.9] max-w-2xl mx-auto">
            {t('situation.texte')}
          </p>
        </motion.div>

        {/* Transport cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TRANSPORTS_CONFIG.map(({ Icon, key, href }, i) => (
            <motion.a
              key={key}
              variants={fadeInUp}
              custom={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-8 rounded-xl border border-border bg-card hover:shadow-md transition-shadow cursor-pointer"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h4 className="font-playfair text-foreground text-xl font-medium mb-2">
                {t(`situation.${key}.titre`)}
              </h4>
              <p className="font-inter text-sm text-foreground/60">
                {t(`situation.${key}.desc`)}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Google Maps button */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-12">
          <a
            href="https://maps.app.goo.gl/HkFNm8q4cKfhznJB6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm border border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all"
          >
            {t('situation.voir_maps')}
          </a>
        </motion.div>

        {/* Footer text */}
        <motion.p
          variants={fadeInUp}
          className="font-inter text-center text-foreground/60 text-[16px] leading-[1.9] max-w-2xl mx-auto"
        >
          {t('situation.parking')}
        </motion.p>
      </motion.div>
    </section>
  );
}
