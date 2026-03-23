import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

const BG = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_upscayl_4x_upscayl-standard-4x_pxdhb4";
const PHOTOS = [
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_035_mkantt", alt: "Façade vintage avec camion" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_036_dngedy", alt: "Machines de mouture" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_037_ylhtwp", alt: "Cour avec cheval et charrette" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_038_bb25dj", alt: "Ouvrier dans le moulin" },
];
const FILMSTRIP = [
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_ezo57h", cap: "La Semeuse, années 1930" },
  ...PHOTOS.map(p => ({ src: p.src, cap: "" })),
];

export default function HistoriqueSection() {
  return (
    <section
      id="historique"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(28,16,8,0.82)" }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left */}
        <motion.div variants={fadeInUp} className="relative">
          <span className="absolute -top-8 -left-4 font-playfair text-[120px] leading-none text-white/[0.08] select-none">02</span>
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone mb-4">HISTORIQUE</p>
          <h2 className="font-playfair text-white text-3xl md:text-[52px] leading-tight mb-8">
            Depuis 1910,<br />une histoire alsacienne
          </h2>
          <p className="font-inter text-white/75 text-[17px] leading-[1.9] mb-8 max-w-lg">
            Juste avant la Première Guerre mondiale, en 1910, est créée La Compagnie
            des Produits agricoles « LA SEMEUSE » à Schiltigheim. En ce début du 20ème
            siècle, s'épanouissent de nombreuses petites exploitations agricoles sur la
            commune de Schiltigheim et alentour : vaches, poulets, porcs sont élevés
            dans de petites fermes.
          </p>
          <a
            href="https://www.semeuse.eu/fr/articles.php?id=150876426312464"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-inter text-sm border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-foreground transition-all"
          >
            En savoir plus →
          </a>
        </motion.div>

        {/* Right – photo stack */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-3">
          {PHOTOS.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-lg">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-40 object-cover sepia hover:sepia-0 hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Filmstrip */}
      <div className="relative z-10 overflow-hidden py-8">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {[...FILMSTRIP, ...FILMSTRIP].map((p, i) => (
            <div key={i} className="flex-shrink-0 mx-2 relative">
              <img
                src={p.src}
                alt={p.cap || "Photo historique La Semeuse"}
                className="h-[220px] w-auto object-cover rounded-lg sepia"
                loading="lazy"
              />
              {p.cap && (
                <span className="absolute bottom-3 left-3 font-inter text-xs text-white/70">{p.cap}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
