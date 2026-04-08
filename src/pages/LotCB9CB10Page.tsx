import { useTranslation } from "react-i18next";
import LotPage from "@/components/LotPage";
import { PLANS, LOTS_PHOTOS } from "@/constants/images";

export default function LotCB9CB10Page() {
  const { t } = useTranslation();
  return (
    <LotPage
      head={{
        title: "Local pro 80 m² — Lot CB9 & CB10 | La Cour de la Semeuse, Schiltigheim",
        description: "Local professionnel de 80 m² (CB9 & CB10) au rez-de-chaussée du bâtiment du Moulin. Accès plain-pied, parking privé, à Schiltigheim.",
        canonical: "https://semeuse.netlify.app/lots/cb9-cb10",
      }}
      badges={[
        { label: "Bâtiment du Moulin · CB9 & CB10" },
        { label: t("pages_lots.acces_plain_pied"), variant: "muted" },
      ]}
      heading={<>{t("local_pro")} — <span className="text-accent">80 m²</span></>}
      descriptionKey="desc_cb9"
      equipementsKey="equipements_cb9"
      plans={[
        { labelKey: "plan_masse", title: "Bâtiment C — Le Moulin (vert)", src: PLANS.MOULIN_MASSE },
        { labelKey: "plan_sol",   title: "Lot CB9 & CB10 — RDC",         src: PLANS.MOULIN_CB9 },
      ]}
      photos={[...LOTS_PHOTOS.CB9]}
    />
  );
}
