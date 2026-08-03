import { createContext, useContext, useEffect, useState } from 'react';
import { i18n } from '../data/i18n';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('ph-lang') || 'es';
    } catch {
      return 'es';
    }
  });
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('ph-theme') || 'dark';
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
    } catch (e) {}
  }, [theme, lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <AppContext.Provider value={{ lang, theme, menuOpen, setMenuOpen, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
