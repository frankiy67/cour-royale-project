import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGES = [
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/interieur1_idllc0", alt: "Intérieur bureau 1", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/interieur2_c6cvtm", alt: "Intérieur bureau 2", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_032_gkt87f", alt: "Vue des locaux", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_033_giqqp6", alt: "Bâtiment de l'Horloge", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_039_ioasxr", alt: "Bâtiment de la Halle", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_040_rsdern", alt: "Bâtiment du Moulin", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_041_qi8egu", alt: "Halle intérieure", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_031_l0tnhc", alt: "Bureau individuel", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/coursintermediaire_wkg8ni", alt: "Cour intermédiaire", sepia: false },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_ezo57h", alt: "Photo historique 1930", sepia: true },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_035_mkantt", alt: "Façade historique", sepia: true },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_037_ylhtwp", alt: "Cour historique", sepia: true },
];

export default function GalerieSection() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="galerie" className="bg-white relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        <span className="absolute top-12 left-12 font-playfair text-[120px] leading-none text-foreground/[0.06] select-none hidden md:block">06</span>

        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">GALERIE</p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px]">Découvrez nos espaces</h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="break-inside-avoid mb-3 overflow-hidden rounded-lg cursor-zoom-in group"
              onClick={() => setIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-105 ${
                  img.sepia ? "sepia hover:sepia-0" : ""
                }`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={IMAGES.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  );
}
