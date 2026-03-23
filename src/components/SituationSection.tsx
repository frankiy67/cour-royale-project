import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

const BG = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/exterieur_achwfd";

const BADGES = [
  { emoji: "🚗", text: "Autoroute · accès direct" },
  { emoji: "🚋", text: "Tram & Bus · réseau Eurométropole" },
  { emoji: "🚄", text: "Gare TGV Strasbourg · 15 min" },
  { emoji: "✈️", text: "Aéroport Entzheim · 30 min" },
];

export default function SituationSection() {
  return (
    <section
      id="situation"
      className="relative bg-cover bg-center bg-scroll md:bg-fixed"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(28,16,8,0.78)" }} />
      <span className="absolute top-12 right-12 font-playfair text-[120px] leading-none text-white/[0.08] select-none hidden md:block z-10">05</span>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone mb-4">SITUATION</p>
          <h2 className="font-playfair text-white text-3xl md:text-[52px] leading-tight">
            Au cœur de Schiltigheim,<br />aux portes de Strasbourg
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <p className="font-inter text-white/75 text-[17px] leading-[1.9] mb-6">
              La cour de la Semeuse est située dans le quartier historique de Schiltigheim.
              Au centre de cette ville de 31 450 habitants, vous profitez d'un environnement
              urbain calme et convivial. De nombreux restaurants et hôtels sont situés à
              proximité immédiate du site. Vous bénéficiez également d'un tissu commercial
              dynamique et de nombreuses opportunités de services.
            </p>
            <p className="font-inter text-white/75 text-[17px] leading-[1.9] mb-6">
              L'accès à la Cour de la Semeuse est facilité par la présence d'un grand
              parking privé central donnant directement sur les locaux. L'autoroute
              dessert facilement Schiltigheim. Le réseau des transports en commun de
              l'Eurométropole offre également la possibilité de venir par le tram ou
              le bus.
            </p>
            <p className="font-inter text-white/75 text-[17px] leading-[1.9] mb-8">
              La gare TGV de Strasbourg n'est qu'à un quart d'heure et l'aéroport de
              Strasbourg/Entzheim à une demi-heure.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {BADGES.map((b) => (
                <span key={b.text} className="font-inter text-sm text-white border border-white/30 bg-white/10 px-4 py-2 rounded-full">
                  {b.emoji} {b.text}
                </span>
              ))}
            </div>

            <a href="#contact" className="inline-block font-inter text-sm border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-foreground transition-all">
              Nous contacter
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.7!2d7.7535506!3d48.6066812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c86563010631%3A0x992197e6674c7d08!2sLa%20Semeuse!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps La Semeuse"
              />
            </div>
            <a
              href="https://goo.gl/maps/hRAjZgzE9vw"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start font-inter text-sm border border-white/30 text-white px-5 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              🔍 Voir en Street View
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
