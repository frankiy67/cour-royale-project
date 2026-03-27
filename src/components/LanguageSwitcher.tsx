import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGS.find(l => l.code === i18n.language) || LANGS[0];

  const change = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setOpen(false);
  };

  // Fermer si clic en dehors
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 100 }}>
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 6,
          padding: '4px 10px',
          cursor: 'pointer',
          color: 'inherit',
          fontSize: 14,
          transition: 'border-color 0.2s',
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1 }}>{current.flag}</span>
        <span style={{ fontWeight: 500 }}>{current.code.toUpperCase()}</span>
        <span style={{
          fontSize: 10,
          opacity: 0.7,
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
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          minWidth: 140,
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
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { if (i18n.language !== code) (e.currentTarget as HTMLElement).style.background = '#faf7f4'; }}
              onMouseLeave={e => { if (i18n.language !== code) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <span style={{ fontSize: 20, lineHeight: 1 }}>{flag}</span>
              <span>{label}</span>
              {i18n.language === code && (
                <span style={{ marginLeft: 'auto', color: '#8B1515', fontSize: 12 }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
