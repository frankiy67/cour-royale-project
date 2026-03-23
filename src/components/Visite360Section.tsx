import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

// Google Maps Street View embed — La Cour de la Semeuse
const STREET_VIEW_SRC = "https://maps.app.goo.gl/yi94hrcCaxgUnxpY6";

// Direct link to open Street View in Google Maps
const STREET_VIEW_LINK =
  "https://www.google.com/maps/@48.6066812,7.7535506,3a,90y,0h,90t/data=!3m4!1e1!3m2!1s0x4796c86563010631:0x992197e6674c7d08!2e0";

export default function Visite360Section() {
  return (
    <section id="visite360" className="bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            DÉCOUVREZ LE SITE
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px] leading-tight mb-6">
            Visite 360° interactive
          </h2>
          <p className="font-inter text-muted-foreground text-[17px] max-w-xl mx-auto">
            Explorez La Cour de la Semeuse depuis chez vous. Naviguez dans la rue,
            découvrez l'entrée et l'environnement immédiat du site.
          </p>
        </motion.div>

        {/* Street View iframe */}
        <motion.div
          variants={fadeInUp}
          className="w-full rounded-2xl overflow-hidden shadow-2xl border border-border/30"
        >
          <iframe
            src={STREET_VIEW_SRC}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Visite virtuelle 360° — La Cour de la Semeuse, Schiltigheim"
          />
        </motion.div>

        {/* External link */}
        <motion.div variants={fadeInUp} className="text-center mt-8">
          <a
            href={STREET_VIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
          >
            <span>🗺️</span>
            Ouvrir dans Google Maps
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
