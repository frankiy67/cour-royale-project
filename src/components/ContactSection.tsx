import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";

const CONTACTS = [
  {
    icon: "🏢",
    labelKey: "bureaux_label",
    name: "Bernard VALLAT",
    phone: "+33 (0)6 07 08 80 79",
    phoneTel: "tel:+33607088079",
    email: "bv@semeuse.eu",
  },
  {
    icon: "📋",
    labelKey: "salles_label",
    name: "Elisabeth FIXARI-VALLAT",
    phone: "+33 (0)6 84 53 75 05",
    phoneTel: "tel:+33684537505",
    email: "efv@semeuse.eu",
  },
];

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 py-10 md:py-16"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t('contact.label')}
          </p>
          <h2 className="font-playfair text-foreground text-3xl md:text-[48px] mb-4">
            {t('contact.titre')}
          </h2>
          <p className="font-inter text-muted-foreground">
            {t('contact.adresse')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {CONTACTS.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <span className="text-[40px] mb-4 block">{c.icon}</span>
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                {t(`contact.${c.labelKey}`)}
              </p>
              <h3 className="font-playfair text-foreground text-2xl mb-4">{c.name}</h3>
              <a href={c.phoneTel} className="block font-inter text-muted-foreground hover:text-foreground transition-colors mb-1">
                {c.phone}
              </a>
              <a href={`mailto:${c.email}`} className="block font-inter text-muted-foreground hover:text-accent transition-colors">
                {c.email}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center">
          <a
            href="https://maps.app.goo.gl/HkFNm8q4cKfhznJB6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-inter text-sm border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all"
          >
            {t('contact.voir_maps')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
