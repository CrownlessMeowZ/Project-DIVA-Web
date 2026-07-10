import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from './app-context';

function normalizeLang(language) {
  return language?.startsWith('vi') ? 'vi' : 'en';
}

export function AppProvider({ children }) {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem('diva-theme') || 'dark');

  const lang = useMemo(() => normalizeLang(i18n.language), [i18n.language]);

  const setLang = useCallback((code) => {
    void i18n.changeLanguage(code);
  }, [i18n]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('diva-theme', theme);
    } catch {
      // storage unavailable
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('diva-lang', lang);
    } catch {
      // storage unavailable
    }
  }, [lang]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, lang, setLang, t }),
    [theme, lang, setLang, t],
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

