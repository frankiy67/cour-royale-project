import { useTranslation } from "react-i18next";
import LotPage from "@/components/LotPage";
import { PLANS, LOTS_PHOTOS } from "@/constants/images";

export default function LotH4Page() {
  const { t } = useTranslation();
  return (
    <LotPage
      head={{
        title: "Bureau 17 m² — Lot H4 | La Cour de la Semeuse, Schiltigheim",
        description: "Bureau individuel de 17 m² (H4) au rez-de-chaussée de la Halle. Accès plain-pied, lumière naturelle, parking privé à Schiltigheim.",
        canonical: "https://semeuse.netlify.app/lots/h4",
      }}
      badges={[
        { label: "Bâtiment de la Halle · H4" },
        { label: t("pages_lots.acces_plain_pied"), variant: "muted" },
      ]}
      heading={<>{t("local_pro")} — <span className="text-accent">17 m²</span></>}
      descriptionKey="desc_h4"
      equipementsKey="equipements_h4"
      plans={[
        { labelKey: "plan_masse", title: "Bâtiment E — La Halle (orange)", src: PLANS.HALLE_MASSE },
        { labelKey: "plan_sol",   title: "Lot H4 — RDC (jaune)",           src: PLANS.HALLE_H4 },
      ]}
      photos={[...LOTS_PHOTOS.H4]}
    />
  );
}
