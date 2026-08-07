import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { i18n } from '../data/i18n';
import type { Lang } from '../data/i18n';

type Theme = 'dark' | 'light';

interface AppContextValue {
  lang: Lang;
  theme: Theme;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('ph-lang');
      return stored === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem('ph-theme');
      return stored === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  // Aplicar tema e idioma al documento
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang;
    document.title = i18n[lang].title;
    try {
      localStorage.setItem('ph-theme', theme);
      localStorage.setItem('ph-lang', lang);
    } catch (e) {
      /* noop */
    }
  }, [theme, lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <AppContext.Provider value={{ lang, theme, menuOpen, setMenuOpen, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp debe usarse dentro de AppProvider');
  return ctx;
}
