import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeInUp } from "@/hooks/useFadeInUp";
import LotPage from "@/components/LotPage";
import { PLANS, LOTS_PHOTOS } from "@/constants/images";

const NIVEAUX = [
  { etageKey: "rez_chaussee" as const, surface: "11 m²",  desc: "Entrée + dégagement" },
  { etageKey: "etage"        as const, surface: "111 m²", desc: "6 bureaux · dégagement · 2 toilettes" },
];

export default function LotD14Page() {
  const { t } = useTranslation();

  const niveauxEl = (
    <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4 mb-12">
      {NIVEAUX.map((n) => (
        <div key={n.etageKey} className="bg-card rounded-xl border border-border p-5">
          <p className="font-inter text-xs uppercase tracking-widest text-muted-foreground mb-1">
            {t(`pages_lots.${n.etageKey}`)}
          </p>
          <p className="font-playfair text-2xl text-accent font-semibold mb-1">{n.surface}</p>
          <p className="font-inter text-sm text-muted-foreground">{n.desc}</p>
        </div>
      ))}
    </motion.div>
  );

  return (
    <LotPage
      head={{
        title: "Bureaux 122 m² sur 2 niveaux — Lot D14 | La Cour de la Semeuse",
        description: "Locaux professionnels de 122 m² sur deux niveaux (D14) dans le bâtiment de l'Horloge. Rampants apparents, lumineux, à Schiltigheim.",
        canonical: "https://semeuse.netlify.app/lots/d14",
      }}
      badges={[
        { label: "Bâtiment de l'Horloge · D14" },
        { label: t("pages_lots.deux_niveaux"), variant: "muted" },
      ]}
      heading={
        <>{t("locaux_pro")} — <span className="text-accent">122 m²</span> {t("sur_deux_etages")}</>
      }
      descriptionKey="desc_d14"
      equipementsKey="equipements_d14"
      plans={[
        { labelKey: "plan_masse", title: "Bâtiment D — L'Horloge (bleu)", src: PLANS.HORLOGE_MASSE },
        { labelKey: "plan_sol",   title: "Lot D14 — 1er étage",           src: PLANS.HORLOGE_D14 },
      ]}
      photos={[...LOTS_PHOTOS.D14]}
      extra={niveauxEl}
    />
  );
}
