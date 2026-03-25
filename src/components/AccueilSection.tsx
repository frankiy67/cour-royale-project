import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useCountUp } from "@/hooks/useCountUp";

const STREET_VIEW_SRC =
  "https://www.google.com/maps/embed?pb=!1m0!3m2!1sfr!2sfr!4v1711000000000!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzRfLVdlcUFF!2m2!1d48.6069155571112!2d7.753805796110078!3f59.815569287643115!4f4.637306181296552!5f0.7820865974627469";

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
        className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 gap-12 items-start lg:[grid-template-columns:35%_65%]"
      >
        {/* Left 35% */}
        <motion.div variants={fadeInUp} className="relative">
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

        {/* Right 65% — Street View interactif */}
        <motion.div variants={fadeInUp}>
          <div className="w-full aspect-[4/3] max-h-[350px] lg:aspect-[16/10] lg:max-h-[520px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={STREET_VIEW_SRC}
              style={{ border: "none", width: "100%", height: "100%", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Street View — La Cour de la Semeuse, Schiltigheim"
            />
          </div>
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
