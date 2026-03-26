import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-playfair text-xl font-medium text-accent mb-4">{title}</h2>
      <div className="font-inter text-sm text-foreground leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar minimaliste */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link to="/" className="font-playfair italic text-foreground text-lg">
            La Cour de la Semeuse
          </Link>
        </div>
      </nav>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-inter text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        {/* Titre principal */}
        <h1 className="font-playfair text-4xl md:text-5xl font-light text-foreground text-center mb-14">
          Mentions légales
        </h1>

        {/* Informations générales */}
        <Section title="Informations générales">
          <p><span className="text-muted-foreground">Nom du titulaire du site :</span> La Semeuse</p>
          <p><span className="text-muted-foreground">Adresse du siège social :</span> La Semeuse, 20 Place de la Liberté · BP 70123 · F-67303 Schiltigheim</p>
        </Section>

        {/* Contacts */}
        <Section title="Contacts">
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-foreground mb-1">Location de bureaux</p>
              <p>Contact : Bernard VALLAT</p>
              <p>
                Tél.{" "}
                <a href="tel:+33607088079" className="hover:text-accent transition-colors">
                  +33 (0)6 07 08 80 79
                </a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:bv@semeuse.eu" className="hover:text-accent transition-colors">
                  bv@semeuse.eu
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Location de salles de réunions</p>
              <p>Contact : Elisabeth FIXARI-VALLAT</p>
              <p>
                Tél.{" "}
                <a href="tel:+33684537505" className="hover:text-accent transition-colors">
                  +33 (0)6 84 53 75 05
                </a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:efv@semeuse.eu" className="hover:text-accent transition-colors">
                  efv@semeuse.eu
                </a>
              </p>
            </div>
          </div>
        </Section>

        {/* Informations juridiques */}
        <Section title="Informations juridiques">
          <p>Forme sociale : Société SCI</p>
          <p>RC STRASBOURG 352 740 039</p>
          <p>Numéro de gestion : 89 D 586</p>
          <p>Directeur de publication : Monsieur Bernard VALLAT-EVRARD</p>
        </Section>

        {/* Données personnelles */}
        <Section title="Données personnelles (CNIL)">
          <p>
            Le site se veut être respectueux de la Loi Informatique et Libertés. Conformément à celle-ci,
            l'utilisateur dispose d'un droit d'accès, de modification, de rectification et de suppression
            des données qui le concerne (article 34 de la Loi Informatique et Libertés du 6 janvier 1978,
            modifiée par la loi du 6 août 2004).
          </p>
          <p>L'utilisateur peut exercer ce droit en adressant un courrier à :</p>
          <p className="pl-4 border-l-2 border-border text-muted-foreground">
            La Semeuse, 20 Place de la Liberté · BP 70123 · F-67303 Schiltigheim
          </p>
        </Section>

        {/* Responsabilité */}
        <Section title="Responsabilité">
          <p>La responsabilité de La Semeuse SCI ne pourrait être engagée pour ce qui concerne :</p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
            <li>les interruptions ou pannes du site ;</li>
            <li>
              la qualité d'affichage (optimisée pour un écran à partir de 1024 pixels de largeur et plus)
              qui dépend de la configuration matérielle utilisée par l'internaute ;
            </li>
            <li>les anomalies, erreurs ou bugs des informations, produits, services, logiciels fournis sur le site.</li>
          </ul>
          <p className="mt-4">La responsabilité de l'éditeur ne pourrait être engagée pour ce qui concerne :</p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
            <li>
              les dommages indirects et/ou immatériels, prévisibles ou imprévisibles (incluant la perte de
              profits) découlant de la fourniture et/ou de l'utilisation ou de l'impossibilité totale ou
              partielle d'utiliser les services fournis sur le site ;
            </li>
            <li>le contenu des sites vers lesquels le site renvoie par l'intermédiaire de liens hypertextes.</li>
          </ul>
        </Section>

        {/* Propriété intellectuelle */}
        <Section title="Propriété intellectuelle">
          <p>
            Les éléments constitutifs d'un site Internet bénéficient, au même titre que les autres œuvres
            de l'esprit, de la protection par le droit de la propriété intellectuelle. Sont concernés les
            points suivants :
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
            <li>
              la société propriétaire du site reste titulaire de tous les droits de propriété intellectuelle
              relatifs au site et des droits d'usage y afférant ;
            </li>
            <li>
              l'accès au site ne confère aucun droit sur les droits de propriété intellectuelle relatifs au
              site qui restent la propriété exclusive de la société titulaire du site ;
            </li>
            <li>
              les éléments accessibles sur le site (textes, photographies, images, icônes, sons, vidéos,
              logiciels, bases de données...) sont protégés par des droits de propriété intellectuelle
              (voire industrielle si dépôt de marque) ;
            </li>
            <li>
              sauf dispositions explicites, il est interdit de reproduire, modifier, transmettre, publier,
              adapter, sur quelque support que ce soit ou exploiter de quelque manière que ce soit, tout ou
              partie du site sans l'autorisation écrite préalable de la société titulaire du site ;
            </li>
            <li>
              la violation de ces dispositions pourra faire l'objet de toute action en justice appropriée,
              notamment d'une action en contrefaçon.
            </li>
          </ul>
        </Section>
      </main>
    </div>
  );
}
