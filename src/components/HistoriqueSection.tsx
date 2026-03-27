import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useFadeInUp";
import { useTranslation } from "react-i18next";

const BG =
  "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_upscayl_4x_upscayl-standard-4x_pxdhb4";

const CAROUSEL_SLIDES = [
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_034_ezo57h", caption: "La Semeuse, années 1930" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_035_mkantt", caption: "Façade de La Semeuse avec camion de livraison, années 1930" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_036_dngedy", caption: "Machines de mouture de la coopérative agricole La Semeuse" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_037_ylhtwp", caption: "Cour de La Semeuse avec cheval et charrette, début XXe siècle" },
  { src: "https://res.cloudinary.com/di0psrssi/image/upload/f_auto,q_auto/LA_SEMEUSE_038_bb25dj", caption: "Ouvrier au travail dans le moulin de La Semeuse" },
];

const TIMELINE_KEYS = [
  { year: "1910",        key: "fondation",     accent: false },
  { year: "1920–30",     key: "essor",         accent: false },
  { year: "1960–70",     key: "transition",    accent: false },
  { year: "1989",        key: "rehabilitation", accent: false },
  { year: "1990s",       key: "parc",          accent: false },
  { year: "aujourd_hui", key: "vivant",        accent: true  },
];

export default function HistoriqueSection() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [timelineIdx, setTimelineIdx] = useState(0);
  const [timelinePaused, setTimelinePaused] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const next = useCallback(() => setCurrent((c) => (c + 1) % CAROUSEL_SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length), []);

  useEffect(() => {
    if (carouselPaused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [carouselPaused, next]);

  const advanceTimeline = useCallback(() => {
    setTimelineIdx((i) => (i + 1) % TIMELINE_KEYS.length);
  }, []);

  useEffect(() => {
    if (timelinePaused) return;
    const id = setInterval(advanceTimeline, 6000);
    return () => clearInterval(id);
  }, [timelinePaused, advanceTimeline]);

  const handleTimelineClick = (idx: number) => {
    setTimelineIdx(idx);
    setTimelinePaused(true);
    if (pauseRef.current) clearTimeout(pauseRef.current);
    pauseRef.current = setTimeout(() => setTimelinePaused(false), 6000);
  };

  const currentItem = TIMELINE_KEYS[timelineIdx];
  const currentYear = currentItem.year === "aujourd_hui"
    ? t('historique.aujourd_hui')
    : currentItem.year;

  return (
    <section
      id="historique"
      className="relative bg-cover bg-center bg-scroll md:bg-fixed"
      style={{ backgroundImage: `url(${BG})` }}
      ref={ref}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(22,12,6,0.87)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Top: text + carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left — heading + description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute -top-8 -left-4 font-playfair text-[120px] leading-none text-white/[0.06] select-none hidden md:block">02</span>
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-stone mb-4">
              {t('historique.label')}
            </p>
            <h2 className="font-playfair text-white text-3xl md:text-[52px] leading-tight mb-6">
              {t('historique.titre')}
            </h2>
            <p className="font-inter text-white/70 text-[16px] leading-[1.9] max-w-lg">
              {t('historique.texte')}
            </p>
          </motion.div>

          {/* Right — historical photo carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative group overflow-hidden rounded-lg shadow-xl aspect-[4/3]"
              onMouseEnter={() => setCarouselPaused(true)}
              onMouseLeave={() => setCarouselPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={CAROUSEL_SLIDES[current].src}
                  alt={CAROUSEL_SLIDES[current].caption}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover sepia"
                />
              </AnimatePresence>

              {/* Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-12 pb-4 px-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-inter text-white/80 text-xs md:text-sm font-light"
                  >
                    {CAROUSEL_SLIDES[current].caption}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Photo précédente"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={next}
                aria-label="Photo suivante"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {CAROUSEL_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Photo ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent scale-110" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Horizontal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="overflow-x-auto pb-2 pt-4">
            <div className="relative flex items-start justify-between min-w-[640px] px-2">
              {/* Horizontal line */}
              <div className="absolute top-[18px] left-8 right-8 h-px bg-white/20" />

              {TIMELINE_KEYS.map((item, idx) => {
                const yearLabel = item.year === "aujourd_hui"
                  ? t('historique.aujourd_hui')
                  : item.year;
                const titleLabel = t(`historique.etapes.${item.key}.titre`);
                return (
                  <div key={idx} className="relative flex flex-col items-center flex-1">
                    {/* Dot */}
                    <button
                      onClick={() => handleTimelineClick(idx)}
                      aria-label={`${yearLabel} — ${titleLabel}`}
                      className={`relative z-10 w-9 h-9 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        timelineIdx === idx
                          ? "bg-accent border-accent shadow-lg shadow-accent/30 scale-110"
                          : "bg-transparent border-stone/40 hover:border-stone"
                      }`}
                    />

                    {/* Year + title — clickable label */}
                    <button
                      onClick={() => handleTimelineClick(idx)}
                      className="mt-3 text-center cursor-pointer px-1 w-full"
                    >
                      <span
                        className={`font-inter text-[10px] uppercase tracking-[0.15em] block transition-colors ${
                          timelineIdx === idx ? "text-accent" : "text-stone/70"
                        }`}
                      >
                        {yearLabel}
                      </span>
                      <span
                        className={`font-playfair text-[13px] block mt-0.5 transition-colors leading-tight ${
                          timelineIdx === idx ? "text-white" : "text-white/60"
                        }`}
                      >
                        {titleLabel}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description panel — always visible, transitions on step change */}
          <div className="mt-6 max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={timelineIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 rounded-xl p-6 border border-white/10"
              >
                <h4 className="font-playfair text-white text-xl mb-2">
                  {currentYear} · {t(`historique.etapes.${currentItem.key}.titre`)}
                </h4>
                <p className="font-inter text-white/70 text-sm leading-relaxed">
                  {t(`historique.etapes.${currentItem.key}.texte`)}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
