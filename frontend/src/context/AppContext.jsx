import { createContext, useContext, useState, useEffect } from 'react';
import { STRINGS } from '../data/strings';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('diva-theme') || 'dark');
  const [lang, setLang]   = useState(() => localStorage.getItem('diva-lang')  || 'en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('diva-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('diva-lang', lang);
  }, [lang]);

  const t = (key) => STRINGS[lang]?.[key] ?? key;

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <AppContext.Provider value={{ theme, setTheme, toggleTheme, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
