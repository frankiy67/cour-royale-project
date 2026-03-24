import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STREET_VIEW_URL =
  "https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE0wNUVCMzRQdHdPRnJfTUJKbHhCZnZGN3lwRHI3RjJ2OGxIYkg3!2m2!1d48.6066812!2d7.7535506!3f0!4f0!5f0.7820865974627469&output=embed";

export default function StreetViewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src={STREET_VIEW_URL}
          width="100%"
          height="520"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Street View — La Cour de la Semeuse, Schiltigheim"
        />
      </motion.div>
    </section>
  );
}
