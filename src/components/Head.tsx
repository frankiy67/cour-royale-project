import { useEffect } from "react";

interface HeadProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function Head({ title, description, canonical }: HeadProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    return () => {
      document.title = "La Cour de la Semeuse — Bureaux & Salles de réunion à Schiltigheim";
    };
  }, [title, description, canonical]);

  return null;
}
