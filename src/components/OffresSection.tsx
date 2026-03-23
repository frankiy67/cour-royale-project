import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

const OFFERS = [
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_040_rsdern",
    surface: "80 m²", title: "BÂTIMENT DU MOULIN · LOTS CB9 & CB10",
    desc: "2 grandes salles avec chacune sa porte donnant sur l'extérieur.",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/MOULIN_002_jrv9yh",
    link: "https://www.semeuse.eu/fr/articles.php?id=15075551344292",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_030_ae5zus",
    surface: "17 m²", title: "BUREAU INDIVIDUEL",
    desc: "1 bureau de 12 m² au rez-de-chaussée + Parties communes de 5 m² comprenant 1 cabinet de toilette et 1 coin café.",
    link: "https://www.semeuse.eu/fr/articles.php?id=15075551594292",
    span: "",
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_033_giqqp6",
    surface: "122 m²", title: "BÂTIMENT DE L'HORLOGE · LOT D14",
    desc: "Au rez de chaussée, 11 m² (entrée + dégagement). À l'étage, 111 m² (6 bureaux + dégagement + 2 cabinets de toilette).",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HORLOGE_002_dwursl",
    link: "https://www.semeuse.eu/fr/articles.php?id=15075551094292",
    span: "",
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_041_qi8egu",
    surface: "99 m²", title: "BÂTIMENT DE LA HALLE · LOT H7",
    desc: "Au rez de chaussée, 2 bureaux cloisonnés + 1 open space + 1 salle de réunion vitrée + 2 cabinets de toilette et un dégagement.",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HALLE_lot7_002_cpwrsp",
    link: "https://www.semeuse.eu/fr/articles.php?id=152104165720835",
    span: "md:col-span-2",
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_039_ioasxr",
    surface: "43 m²", title: "BÂTIMENT DE LA HALLE · LOT H6",
    desc: "Bureau modulable dans le bâtiment de la Halle.",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HALLE_002_hudnb2",
    span: "",
  },
  {
    img: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_031_l0tnhc",
    surface: "17 m²", title: "BÂTIMENT DE LA HALLE · LOT H4",
    desc: "Bureau individuel dans le bâtiment de la Halle.",
    plan: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HALLE_002_hudnb2",
    span: "",
  },
];

function PlanModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        src={src}
        alt="Plan du lot"
        className="max-w-3xl w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onClose} className="absolute top-6 right-6 text-white text-3xl" aria-label="Fermer">✕</button>
    </motion.div>
  );
}

export default function OffresSection() {
  const [planSrc, setPlanSrc] = useState<string | null>(null);

  return (
    <section id="nosoffres" className="bg-white relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        <span className="absolute top-12 right-12 font-playfair text-[120px] leading-none text-foreground/[0.06] select-none hidden md:block">03</span>

        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">LOCAUX PROFESSIONNELS</p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px] leading-tight mb-6">
            Des espaces pensés<br />pour votre activité
          </h2>
          <p className="font-inter text-muted-foreground text-[17px] max-w-2xl mx-auto">
            Sur une surface totale de 3500 m² avec stationnement, la Cour de la Semeuse
            regroupe au total 22 lots modulables, destinés à l'accueil d'entreprises du
            secteur tertiaire.
          </p>
        </motion.div>

        {/* Plan masse */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center mb-16">
          <img
            src="https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/HALLE_001_p3hisg"
            alt="Plan d'ensemble La Cour de la Semeuse"
            className="max-w-[860px] w-full rounded-xl shadow-lg"
            loading="lazy"
          />
          <p className="font-inter text-muted-foreground text-sm mt-3">Plan d'ensemble · La Cour de la Semeuse</p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4">
          {OFFERS.map((o, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${o.span}`}
            >
              <img src={o.img} alt={o.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Default info */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="font-playfair text-white text-4xl md:text-5xl block mb-1">{o.surface}</span>
                <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/80">{o.title}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/85 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="font-playfair text-white text-3xl mb-1">{o.surface}</span>
                <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/70 mb-3">{o.title}</span>
                <p className="font-inter text-white/80 text-sm leading-relaxed mb-4">{o.desc}</p>
                <div className="flex items-center gap-3">
                  {o.link && (
                    <a href={o.link} target="_blank" rel="noopener noreferrer" className="font-inter text-xs text-accent hover:text-white transition-colors">
                      En savoir plus →
                    </a>
                  )}
                  {o.plan && (
                    <button onClick={(e) => { e.stopPropagation(); setPlanSrc(o.plan!); }} className="font-inter text-xs text-white/60 hover:text-white ml-auto" aria-label="Voir le plan">
                      📐
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <a href="#contact" className="inline-block font-inter text-sm border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all">
            Nous contacter pour une visite
          </a>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {planSrc && <PlanModal src={planSrc} onClose={() => setPlanSrc(null)} />}
      </AnimatePresence>
    </section>
  );
}
