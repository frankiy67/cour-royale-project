import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useCountUp } from "@/hooks/useCountUp";

const IMG = "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/coursintermediaire_wkg8ni";

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center py-8">
      <span className="font-playfair text-accent text-4xl md:text-5xl">
        {count.toLocaleString("fr-FR")} {suffix}
      </span>
      <span className="font-inter text-muted-foreground text-sm mt-2 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function AccueilSection() {
  return (
    <section id="accueil" className="bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
      >
        {/* Left 60% */}
        <motion.div variants={fadeInUp} className="lg:col-span-3 relative">
          <span className="absolute -top-8 -left-4 font-playfair text-[120px] leading-none text-foreground/[0.06] select-none">
            01
          </span>
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">BIENVENUE</p>
          <h2 className="font-playfair italic text-foreground text-3xl md:text-[42px] leading-snug mb-8">
            Au cœur de l'Alsace,<br />
            dans un endroit calme et original,<br />
            profitez d'une opportunité exceptionnelle.
          </h2>
          <p className="font-inter text-muted-foreground text-[17px] leading-[1.8] mb-8 max-w-xl">
            La Cour de la Semeuse, à Schiltigheim, vous propose en location des espaces
            adaptables et évolutifs pour implanter votre entreprise ou pour l'organisation
            de rencontres ponctuelles. Idéalement située au plus proche de Strasbourg et
            des institutions européennes, avec tous les avantages urbains de l'Eurométropole.
          </p>
          <a
            href="#nosoffres"
            className="inline-block font-inter text-sm bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Voir nos offres
          </a>
        </motion.div>

        {/* Right 40% */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <img
            src={IMG}
            alt="Cour intérieure de La Semeuse"
            className="w-full h-[400px] lg:h-[520px] object-cover rounded-tl-3xl"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone/40 pb-16">
        <StatCounter target={3500} suffix="m²" label="Surface totale" />
        <StatCounter target={22} suffix="lots" label="Espaces modulables" />
        <StatCounter target={2} suffix="salles" label="De réunion équipées" />
      </div>
    </section>
  );
}
