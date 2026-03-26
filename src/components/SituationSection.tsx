import { motion } from "framer-motion";
import { Car, Bus, Train, Plane } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";

const TRANSPORTS = [
  { Icon: Car,   label: "Autoroute",  detail: "Accès direct depuis l'autoroute",    href: "https://maps.app.goo.gl/Ah12SLQPovQmF8C26" },
  { Icon: Bus,   label: "Tram & Bus", detail: "Réseau Eurométropole à proximité",   href: "https://maps.app.goo.gl/P9haAyoEikpAeEri6" },
  { Icon: Train, label: "Gare TGV",   detail: "Strasbourg à 15 minutes",            href: "https://maps.app.goo.gl/crosncjNEQRZxSVi8" },
  { Icon: Plane, label: "Aéroport",   detail: "Entzheim à 30 minutes",              href: "https://maps.app.goo.gl/VE74Kz61WFJYPevk9" },
];

export default function SituationSection() {
  return (
    <section id="situation" className="bg-background py-12 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            ACCESSIBILITÉ
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[52px] leading-tight mb-6">
            Idéalement situé
          </h2>
          <p className="font-inter text-foreground/70 text-[17px] leading-[1.9] max-w-2xl mx-auto">
            La Cour de la Semeuse est située dans le quartier historique de Schiltigheim,
            au centre de cette ville de 31&nbsp;450 habitants. Vous profitez d'un environnement
            urbain calme et convivial avec tous les avantages de l'Eurométropole.
          </p>
        </motion.div>

        {/* Transport cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TRANSPORTS.map(({ Icon, label, detail, href }, i) => (
            <motion.a
              key={label}
              variants={fadeInUp}
              custom={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-8 rounded-xl border border-border bg-card hover:shadow-md transition-shadow cursor-pointer"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h4 className="font-playfair text-foreground text-xl font-medium mb-2">{label}</h4>
              <p className="font-inter text-sm text-foreground/60">{detail}</p>
            </motion.a>
          ))}
        </div>

        {/* Google Maps button */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-12">
          <a
            href="https://maps.app.goo.gl/HkFNm8q4cKfhznJB6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm border border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all"
          >
            📍 Voir sur Google Maps
          </a>
        </motion.div>

        {/* Footer text */}
        <motion.p
          variants={fadeInUp}
          className="font-inter text-center text-foreground/60 text-[16px] leading-[1.9] max-w-2xl mx-auto"
        >
          L'accès est facilité par la présence d'un grand parking privé central donnant
          directement sur les locaux. De nombreux restaurants et hôtels sont situés
          à proximité immédiate du site.
        </motion.p>
      </motion.div>
    </section>
  );
}
