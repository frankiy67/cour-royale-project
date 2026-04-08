import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGES = [
  { src: "/galerie/galerie-1.webp", alt: "La Cour de la Semeuse — vue intérieure" },
  { src: "/galerie/galerie-2.webp", alt: "La Cour de la Semeuse — espace de travail" },
  { src: "/galerie/galerie-3.webp", alt: "La Cour de la Semeuse — bureaux" },
  { src: "/galerie/galerie-4.webp", alt: "La Cour de la Semeuse — cour" },
  { src: "/galerie/galerie-5.webp", alt: "La Cour de la Semeuse — bâtiments" },
  { src: "/galerie/seumeuse.webp", alt: "La Semeuse — vue d'ensemble" },
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
                className="w-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
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
