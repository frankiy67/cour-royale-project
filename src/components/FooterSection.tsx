export default function FooterSection() {
  return (
    <footer className="bg-foreground">
      <div className="h-0.5 bg-accent" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <p className="font-playfair italic text-white text-2xl mb-2">LA SEMEUSE</p>
          <p className="font-inter text-white/40 text-[13px]">© 2024 La Cour de la Semeuse · Tous droits réservés</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-inter text-white/60 text-sm">20 Place de la Liberté</p>
          <p className="font-inter text-white/60 text-sm">BP 70123 · F-67303 Schiltigheim</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <a href="#" className="font-inter text-white/60 text-sm hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="font-inter text-white/60 text-sm hover:text-white transition-colors">Viadeo</a>
          <a href="https://www.semeuse.eu/fr/articles.php?id=12940708363620" target="_blank" rel="noopener noreferrer" className="font-inter text-white/60 text-sm hover:text-white transition-colors">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
