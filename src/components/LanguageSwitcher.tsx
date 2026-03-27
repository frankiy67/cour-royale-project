import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const change = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
  };

  return (
    <div className="flex items-center gap-1">
      {LANGS.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => change(code)}
          title={label}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 20,
            opacity: i18n.language === code ? 1 : 0.45,
            transition: 'opacity 0.2s',
            padding: '2px 4px',
            lineHeight: 1,
          }}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
