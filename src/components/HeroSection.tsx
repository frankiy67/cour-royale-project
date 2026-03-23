export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1!6m8!1m7!1sCIHM0ogKEICAgIC4_-WeqAE!2e10!3e11!4shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2YvLpNrQoxHo0zAZZp2xJx8ktSr4XiwHAmUhyNuYXNpA4Fg21bIonC0YODXUJaU_3FqhOll6gSiaUA1BpD0oNQ065xflGtu4BMMOvfNOjnsKVfA6wMTE8crWNIixhC6x9uYh_zP1w!5e10!7i13312!8i6656"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Visite virtuelle 360° de La Cour de la Semeuse"
      />

      {/* Bottom gradient only */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Badge top-right */}
      <div className="absolute top-20 right-6 z-10">
        <span className="bg-white text-foreground font-inter text-xs px-4 py-2 rounded-full shadow-lg">
          🔄 Visite 360° interactive
        </span>
      </div>

      {/* Centered content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 pointer-events-none">
        <p className="font-inter uppercase text-[13px] tracking-[0.3em] text-stone mb-4">
          SCHILTIGHEIM · ALSACE · FRANCE
        </p>
        <h1 className="font-playfair text-white text-center leading-[1.1]">
          <span className="block text-[40px] md:text-[80px]">La Cour</span>
          <span className="block text-[40px] md:text-[80px]">de la Semeuse</span>
        </h1>
        <p className="font-inter text-white/70 text-lg mt-4">
          Espaces professionnels en location
        </p>

        <div className="mt-12 flex flex-col items-center gap-2 animate-bounce-arrow">
          <span className="text-white text-2xl">↓</span>
          <span className="font-inter text-white/60 text-sm">Découvrir nos espaces</span>
        </div>
      </div>
    </section>
  );
}
