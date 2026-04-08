# La Cour de la Semeuse

Site web officiel de **La Cour de la Semeuse** — location de bureaux et salles de réunion à Schiltigheim (Alsace), aux portes de Strasbourg.

## Stack technique

- **React 18** + **TypeScript**
- **Vite 5** (bundler)
- **Tailwind CSS** + **shadcn/ui** (composants)
- **Framer Motion** (animations)
- **Cloudinary** (optimisation d'images)

## Développement local

```bash
npm install
npm run dev        # Démarre le serveur sur http://localhost:8080
```

## Production

```bash
npm run build      # Génère le dossier dist/
npm run preview    # Prévisualise le build en local
```

## Déploiement

Le site est déployé sur **Netlify** via `netlify.toml`.
Toute push sur `main` déclenche un déploiement automatique.

## Contact

- Bureaux : Bernard VALLAT — bv@semeuse.eu
- Salles de réunion : Elisabeth FIXARI-VALLAT — efv@semeuse.eu
