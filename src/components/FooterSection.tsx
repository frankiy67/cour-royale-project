import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-accent">
      <div className="h-0.5 bg-white/20" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <p className="font-playfair italic text-white text-2xl mb-2">LA SEMEUSE</p>
          <p className="font-inter text-white/35 text-[12px] leading-relaxed">
            © 2026 La Cour de la Semeuse<br />Tous droits réservés
          </p>
          <p className="font-inter text-white/25 text-[11px] mt-3">
            20 Place de la Liberté · BP 70123<br />F-67303 Schiltigheim
          </p>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-center gap-4">
          <div>
            <p className="font-inter text-white/40 text-[10px] uppercase tracking-widest mb-1">Bureaux</p>
            <p className="font-inter text-white/70 text-sm">Bernard VALLAT</p>
            <a href="tel:+33607088079" className="block font-inter text-white/50 text-sm hover:text-white transition-colors">
              +33 (0)6 07 08 80 79
            </a>
            <a href="mailto:bv@semeuse.eu" className="block font-inter text-white/50 text-sm hover:text-accent transition-colors">
              bv@semeuse.eu
            </a>
          </div>
          <div>
            <p className="font-inter text-white/40 text-[10px] uppercase tracking-widest mb-1">Salles de réunion</p>
            <p className="font-inter text-white/70 text-sm">Elisabeth FIXARI-VALLAT</p>
            <a href="tel:+33684537505" className="block font-inter text-white/50 text-sm hover:text-white transition-colors">
              +33 (0)6 84 53 75 05
            </a>
            <a href="mailto:efv@semeuse.eu" className="block font-inter text-white/50 text-sm hover:text-accent transition-colors">
              efv@semeuse.eu
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href="https://www.linkedin.com/in/fixari-vallat-elisabeth-68ab57116/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-white/55 text-sm hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <Link
            to="/mentions-legales"
            className="font-inter text-white/55 text-sm hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
          <a
            href="https://maps.app.goo.gl/PpYypRFnj4y5LKq96"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-white/55 text-sm hover:text-white transition-colors"
          >
            Google Maps
          </a>
        </div>

      </div>
    </footer>
  );
}
