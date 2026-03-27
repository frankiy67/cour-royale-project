import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-accent">
      <div className="h-px bg-white/20" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-center md:text-left">

          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            <img
              src="/images/logo-semeuse-white.svg"
              alt="La Semeuse"
              className="h-14 w-auto mb-5 mx-auto md:mx-0"
            />
            <p className="font-inter text-white/55 text-[13px] leading-relaxed">
              20 Place de la Liberté · BP 70123<br />F-67303 Schiltigheim
            </p>
          </div>

          {/* Col 2 — Bureaux */}
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/55 mb-3">
              Bureaux
            </p>
            <p className="font-inter text-white text-[15px] font-semibold mb-2">
              Bernard VALLAT
            </p>
            <a
              href="tel:+33607088079"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors my-0.5"
            >
              +33 (0)6 07 08 80 79
            </a>
            <a
              href="mailto:bv@semeuse.eu"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors my-0.5"
            >
              bv@semeuse.eu
            </a>
          </div>

          {/* Col 3 — Salles */}
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/55 mb-3">
              Salles de réunion
            </p>
            <p className="font-inter text-white text-[15px] font-semibold mb-2">
              Elisabeth FIXARI-VALLAT
            </p>
            <a
              href="tel:+33684537505"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors my-0.5"
            >
              +33 (0)6 84 53 75 05
            </a>
            <a
              href="mailto:efv@semeuse.eu"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors my-0.5"
            >
              efv@semeuse.eu
            </a>
          </div>

          {/* Col 4 — Liens */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/55 mb-3">
              Liens
            </p>
            <a
              href="https://www.linkedin.com/in/fixari-vallat-elisabeth-68ab57116/"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors mb-2"
            >
              LinkedIn
            </a>
            <Link
              to="/mentions-legales"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors mb-2"
            >
              Mentions légales
            </Link>
            <a
              href="https://maps.app.goo.gl/PpYypRFnj4y5LKq96"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-inter text-white/75 text-[13px] hover:text-white transition-colors mb-2"
            >
              Google Maps
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 py-6 text-center">
          <p className="font-inter text-white/50 text-xs">
            © 2026 La Cour de la Semeuse · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
