import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Coffee, Accessibility, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SALLES_CONFIG = [
  {
    streetView: "https://www.google.com/maps/embed?pb=!3m2!1sfr!2ses!4v1774528258171!5m2!1sfr!2ses!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzRfN1dHdHdF!2m2!1d48.60727012360972!2d7.754067003094562!3f241.6594706068541!4f-16.674969401854767!5f0.7820865974627469",
    nameKey: "grande.nom",
    surfaceKey: "grande.surface",
    href: "/salles/grande-salle",
    capacities: [
      { labelKey: "grande.reunion",   value: "14 pers." },
      { labelKey: "grande.conference", value: "30 pers." },
      { labelKey: "grande.sans_tables", value: "25 pers." },
    ],
  },
  {
    streetView: "https://www.google.com/maps/embed?pb=!4v1774528306559!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzRfNVh0OXdF!2m2!1d48.60726489968282!2d7.754183046163066!3f221.6485153129953!4f-20.353343534820198!5f0.7820865974627469",
    nameKey: "atelier.nom",
    surfaceKey: "atelier.surface",
    href: "/salles/salle-atelier",
    capacities: [
      { labelKey: "atelier.reunion",    value: "10 pers." },
      { labelKey: "atelier.conference",  value: "16 pers." },
      { labelKey: "atelier.sans_tables", value: "14 pers." },
    ],
  },
];

export default function SallesSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="salles" className="bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t('salles.label')}
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            {t('salles.titre')}
          </h2>
          <p className="font-inter text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t('salles.texte')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {SALLES_CONFIG.map((s, i) => (
            <motion.div
              key={s.nameKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500"
            >
              {/* Street View iframe — not wrapped in Link so it stays interactive */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                <iframe
                  src={s.streetView}
                  style={{ border: 0, width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Street View — ${t(`salles.${s.nameKey}`)}`}
                />
              </div>

              {/* Card body — wrapped in Link so clicking title/text navigates */}
              <Link to={s.href} className="block p-8 hover:bg-secondary/30 transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-playfair text-3xl font-medium">{t(`salles.${s.nameKey}`)}</h3>
                  <span className="bg-secondary px-4 py-1.5 rounded text-sm font-medium text-muted-foreground font-inter">
                    {t(`salles.${s.surfaceKey}`)}
                  </span>
                </div>

                {/* Capacities */}
                <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-border">
                  {s.capacities.map((c) => (
                    <div key={c.labelKey} className="text-center">
                      <p className="font-inter text-[9px] uppercase tracking-wider text-muted-foreground mb-1">
                        {t(`salles.${c.labelKey}`)}
                      </p>
                      <p className="font-inter text-sm font-semibold text-foreground">{c.value}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {(['feature_1', 'feature_2'] as const).map((fk) => (
                    <li key={fk} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="font-inter font-light text-sm">{t(`salles.${fk}`)}</span>
                    </li>
                  ))}
                </ul>

                <span className="font-inter text-sm text-accent">
                  {t('salles.en_savoir_plus')}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Equipment icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-muted-foreground"
        >
          {[
            { icon: Monitor,      labelKey: "equipements.videoprojecteur" },
            { icon: Coffee,       labelKey: "equipements.cafe" },
            { icon: Accessibility, labelKey: "equipements.pmr" },
            { icon: Users,        labelKey: "equipements.modulable" },
          ].map((item) => (
            <div key={item.labelKey} className="flex items-center gap-2 text-sm font-inter">
              <item.icon className="w-4 h-4 text-accent" />
              {t(`salles.${item.labelKey}`)}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
