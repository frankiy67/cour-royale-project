// Central image path registry — import from here, never hardcode paths in components

// ── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_IMG = "/images/hero/hero.webp";

// ── Branding ─────────────────────────────────────────────────────────────────
export const LOGO_SEMEUSE        = "/images/logo-semeuse.svg";
export const LOGO_SEMEUSE_WHITE  = "/images/logo-semeuse-white.svg";
export const PORTRAIT_SEMEUSE    = "/images/semeuse-portrait.webp";
export const PORTE_SEMEUSE       = "/images/porte-semeuse.webp";

// ── Backgrounds ──────────────────────────────────────────────────────────────
export const BUREAUX_BG          = "/images/bureaux-bg.webp";
export const HISTORIQUE_BG       = "/images/historique/historique-bg.webp";

// ── Historique carousel ───────────────────────────────────────────────────────
export const HISTORIQUE_SLIDES = [
  { src: "/images/historique/historique-1.webp", caption: "La Semeuse, années 1930" },
  { src: "/images/historique/historique-2.webp", caption: "Façade de La Semeuse avec camion de livraison, années 1930" },
  { src: "/images/historique/historique-3.webp", caption: "Machines de mouture de la coopérative agricole La Semeuse" },
  { src: "/images/historique/historique-4.webp", caption: "Cour de La Semeuse avec cheval et charrette, début XXe siècle" },
  { src: "/images/historique/historique-5.webp", caption: "Ouvrier au travail dans le moulin de La Semeuse" },
] as const;

// ── Bureaux carousel ─────────────────────────────────────────────────────────
export const BUREAUX_CAROUSEL = [
  "/caroussel/2.webp",
  "/caroussel/3.webp",
  "/caroussel/4.webp",
  "/caroussel/5.webp",
] as const;

// ── Plans ─────────────────────────────────────────────────────────────────────
export const PLANS = {
  MOULIN_MASSE:   "/images/plans/plan-moulin-masse.webp",
  MOULIN_CB9:     "/images/plans/plan-moulin-cb9.webp",
  HORLOGE_MASSE:  "/images/plans/plan-horloge-masse.webp",
  HORLOGE_D14:    "/images/plans/plan-horloge-d14.webp",
  HALLE_MASSE:    "/images/plans/plan-halle-masse.webp",
  HALLE_H4:       "/images/plans/plan-halle-h4.webp",
  HALLE_H7:       "/images/plans/plan-halle-h7.webp",
} as const;

// ── Lots photos ───────────────────────────────────────────────────────────────
export const LOTS_PHOTOS = {
  CB9: [
    { src: "/images/lots/80m2-1.webp",  alt: "Entrée vitrée / fenêtres" },
    { src: "/images/lots/80m2-2.webp",  alt: "Vue de la cour / ensemble du bâtiment" },
    { src: "/images/lots/80m2-3.webp",  alt: "Façade avec enseignes" },
  ],
  H4: [
    { src: "/images/lots/17m2-1.webp",  alt: "Bureau individuel — vue principale" },
    { src: "/images/lots/17m2-2.webp",  alt: "Bureau individuel — fenêtres sur cour" },
    { src: "/images/lots/17m2-3.webp",  alt: "Bureau individuel — intérieur" },
  ],
  H7: [
    { src: "/images/lots/99m2-1.webp",  alt: "Intérieur avec cloisons vitrées / open space" },
    { src: "/images/lots/99m2-2.webp",  alt: "Intérieur bureaux cloisonnés" },
    { src: "/images/lots/99m2-3.webp",  alt: "Intérieur vue dégagée" },
  ],
  D14: [
    { src: "/images/lots/122m2-1.webp", alt: "Bureaux lumineux — vue principale" },
    { src: "/images/lots/122m2-2.webp", alt: "Espace de travail — rampants apparents" },
    { src: "/images/lots/122m2-3.webp", alt: "Vue sur la cour — fenêtres hauteur intégrale" },
  ],
} as const;

// ── Galerie ────────────────────────────────────────────────────────────────────
export const GALERIE_IMAGES = [
  { src: "/galerie/galerie-1.webp", alt: "La Cour de la Semeuse — vue intérieure" },
  { src: "/galerie/galerie-2.webp", alt: "La Cour de la Semeuse — espace de travail" },
  { src: "/galerie/galerie-3.webp", alt: "La Cour de la Semeuse — bureaux" },
  { src: "/galerie/galerie-4.webp", alt: "La Cour de la Semeuse — cour" },
  { src: "/galerie/galerie-5.webp", alt: "La Cour de la Semeuse — bâtiments" },
  { src: "/galerie/seumeuse.webp",  alt: "La Semeuse — vue d'ensemble" },
] as const;

// ── Salles ─────────────────────────────────────────────────────────────────────
export const SALLES_PHOTOS = {
  GRANDE_SALLE: {
    plans: [
      { src: "/salles/grande-salle-1.webp", labelKey: "plan_masse", caption: "Bâtiment du Moulin — Grande Salle" },
      { src: "/salles/grande-salle-2.webp", labelKey: "plan_sol",   caption: "Salle 1 + Salle 2 + Espace pause" },
    ],
    photos: [
      { src: "/salles/grande-salle-4.webp", alt: "Grande Salle — salle lumineuse avec porte-fenêtre" },
      { src: "/salles/grande-salle-5.webp", alt: "Grande Salle — espace convivial kitchenette" },
      { src: "/salles/grande-salle-6.webp", alt: "Grande Salle — configuration conférence" },
    ],
  },
  SALLE_ATELIER: {
    plans: [
      { src: "/salles/salle-atelier-1.webp", labelKey: "plan_masse", caption: "Bâtiment du Moulin — Salle Atelier" },
      { src: "/salles/salle-atelier-2.webp", labelKey: "plan_sol",   caption: "Salle 1 + Salle 2 + Espace pause" },
    ],
    photos: [
      { src: "/salles/salle-atelier-4.webp", alt: "Salle Atelier — fenêtres hautes et cloisons vitrées" },
      { src: "/salles/salle-atelier-5.webp", alt: "Salle Atelier — espace convivial kitchenette" },
      { src: "/salles/salle-atelier-6.webp", alt: "Salle Atelier — configuration conférence" },
    ],
  },
} as const;
