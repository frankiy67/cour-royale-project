import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  {
    code: 'fr',
    label: 'Français',
    flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/fr.svg',
  },
  {
    code: 'en',
    label: 'English',
    flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/gb.svg',
  },
  {
    code: 'de',
    label: 'Deutsch',
    flag: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/de.svg',
  },
];

const Flag = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: 22, height: 16, objectFit: 'cover', borderRadius: 2, flexShrink: 0 }}
  />
);

interface Props {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: Props) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find(l => l.code === i18n.language) || LANGS[0];

  const change = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const btnColor    = scrolled ? '#2c1810'               : 'white';
  const btnBorder   = scrolled ? '1px solid rgba(139,21,21,0.3)' : '1px solid rgba(255,255,255,0.5)';
  const btnBg       = scrolled ? 'rgba(245,240,235,0.9)' : 'rgba(255,255,255,0.15)';

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 100 }}>
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          background: btnBg,
          backdropFilter: 'blur(4px)',
          border: btnBorder,
          borderRadius: 6,
          padding: '5px 10px',
          cursor: 'pointer',
          color: btnColor,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.5px',
          transition: 'background 0.3s, border-color 0.3s, color 0.3s',
        }}
      >
        <Flag src={current.flag} alt={current.label} />
        <span>{current.code.toUpperCase()}</span>
        <span style={{
          fontSize: 9,
          opacity: 0.6,
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s',
          display: 'inline-block',
        }}>▼</span>
      </button>

      {/* Menu déroulant */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          background: 'white',
          borderRadius: 8,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          overflow: 'hidden',
          minWidth: 150,
          border: '1px solid rgba(0,0,0,0.08)',
        }}>
          {LANGS.map(({ code, flag, label }) => (
            <button
              key={code}
              onClick={() => change(code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '10px 14px',
                background: i18n.language === code ? '#f5f0eb' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
                color: '#2c1810',
                fontWeight: i18n.language === code ? 600 : 400,
                textAlign: 'left',
              }}
            >
              <Flag src={flag} alt={label} />
              <span>{label}</span>
              {i18n.language === code && (
                <span style={{ marginLeft: 'auto', color: '#8B1515', fontSize: 13 }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
