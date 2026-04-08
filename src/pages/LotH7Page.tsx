import { useTranslation } from "react-i18next";
import LotPage from "@/components/LotPage";
import { PLANS, LOTS_PHOTOS } from "@/constants/images";

export default function LotH7Page() {
  const { t } = useTranslation();
  return (
    <LotPage
      head={{
        title: "Bureaux 99 m² — Lot H7 | La Cour de la Semeuse, Schiltigheim",
        description: "Open space ou bureaux cloisonnés de 99 m² (H7) dans la Halle. Accès plain-pied, modulable, parking privé à Schiltigheim.",
        canonical: "https://semeuse.netlify.app/lots/h7",
      }}
      badges={[
        { label: "Bâtiment de la Halle · H7" },
        { label: t("pages_lots.acces_plain_pied"), variant: "muted" },
      ]}
      heading={<>{t("locaux_pro")} — <span className="text-accent">99 m²</span></>}
      descriptionKey="desc_h7"
      equipementsKey="equipements_h7"
      plans={[
        { labelKey: "plan_masse", title: "Bâtiment E — La Halle (orange)", src: PLANS.HALLE_MASSE },
        { labelKey: "plan_sol",   title: "Lot H7 — RDC (orange)",          src: PLANS.HALLE_H7 },
      ]}
      photos={[...LOTS_PHOTOS.H7]}
    />
  );
}
