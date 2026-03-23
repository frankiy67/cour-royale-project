import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

const BG = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_upscayl_4x_upscayl-standard-4x_pxdhb4";

const PHOTOS = [
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_035_mkantt", alt: "Façade de La Semeuse avec camion de livraison, années 1930" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_036_dngedy", alt: "Machines de mouture de la coopérative agricole La Semeuse" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_037_ylhtwp", alt: "Cour de La Semeuse avec cheval et charrette, début XXe siècle" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_038_bb25dj", alt: "Ouvrier au travail dans le moulin de La Semeuse" },
];

const FILMSTRIP = [
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_ezo57h", cap: "La Semeuse, années 1930" },
  ...PHOTOS.map((p) => ({ src: p.src, cap: "" })),
];

const TIMELINE = [
  {
    year: "1910",
    title: "Fondation",
    desc: "Création de La Compagnie des Produits Agricoles « La Semeuse » à Schiltigheim. La coopérative sert les nombreuses petites exploitations agricoles de la commune : vaches, poulets, porcs élevés dans les fermes environnantes.",
    accent: false,
  },
  {
    year: "Années 1920–30",
    title: "Essor de la coopérative",
    desc: "La Semeuse s'impose comme un centre névralgique du commerce agricole alsacien. Le Moulin, le Bâtiment de l'Horloge et la Halle sont construits et animés par des dizaines d'ouvriers et d'artisans.",
    accent: false,
  },
  {
    year: "Années 1960–70",
    title: "Transition",
    desc: "L'urbanisation croissante et la mécanisation transforment le paysage agricole de Schiltigheim. La coopérative entame sa reconversion tout en préservant son patrimoine bâti remarquable.",
    accent: false,
  },
  {
    year: "Années 1990",
    title: "Naissance du parc d'entreprises",
    desc: "Les anciens bâtiments agricoles — Moulin, Horloge, Halle — sont réhabilités et transformés en espaces de travail modulables, accueillant les premières entreprises du secteur tertiaire.",
    accent: false,
  },
  {
    year: "Aujourd'hui",
    title: "Un lieu vivant et connecté",
    desc: "22 lots professionnels sur 3 500 m² accueillent des entreprises dans un cadre historique unique, à deux pas de Strasbourg et des institutions européennes.",
    accent: true,
  },
];

export default function HistoriqueSection() {
  return (
    <section
      id="historique"
      className="relative bg-cover bg-center bg-scroll md:bg-fixed"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(22,12,6,0.87)" }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Left column — text + timeline */}
        <motion.div variants={fadeInUp} className="relative">
          <span className="absolute -top-8 -left-4 font-playfair text-[120px] leading-none text-white/[0.06] select-none hidden md:block">02</span>
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone mb-4">HISTORIQUE</p>
          <h2 className="font-playfair text-white text-3xl md:text-[52px] leading-tight mb-6">
            Depuis 1910,<br />une histoire alsacienne
          </h2>
          <p className="font-inter text-white/70 text-[16px] leading-[1.9] mb-10 max-w-lg">
            Juste avant la Première Guerre mondiale, en 1910, est créée La Compagnie
            des Produits Agricoles « La Semeuse » à Schiltigheim. Plus d'un siècle
            plus tard, ses bâtiments historiques — réhabilités, vivants, connectés —
            accueillent une nouvelle génération d'entrepreneurs alsaciens.
          </p>

          {/* Timeline */}
          <div className="relative pl-5 border-l border-white/15">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className={`relative mb-8 last:mb-0 ${idx === TIMELINE.length - 1 ? "" : ""}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors ${
                    item.accent
                      ? "bg-accent border-accent"
                      : "bg-transparent border-stone/50"
                  }`}
                />
                <span
                  className={`font-inter text-[10px] uppercase tracking-[0.2em] block mb-0.5 ${
                    item.accent ? "text-accent" : "text-stone/80"
                  }`}
                >
                  {item.year}
                </span>
                <h4 className="font-playfair text-white text-[17px] mb-1.5">{item.title}</h4>
                <p className="font-inter text-white/55 text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column — photo stack */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-3">
          {PHOTOS.map((p) => (
            <div key={p.src} className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-36 md:h-44 object-cover sepia hover:sepia-0 hover:scale-[1.03] transition-all duration-700"
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
                alt={p.cap || "Photo historique La Cour de la Semeuse"}
                className="h-[200px] w-auto object-cover rounded-lg sepia"
                loading="lazy"
              />
              {p.cap && (
                <span className="absolute bottom-3 left-3 font-inter text-[11px] text-white/60">
                  {p.cap}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
