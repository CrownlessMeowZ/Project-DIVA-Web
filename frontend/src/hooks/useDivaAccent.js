import { useCallback, useEffect } from 'react';

const STORAGE_KEY = 'diva-accent';

function applyAccent(color) {
  if (color) {
    document.documentElement.style.setProperty('--page-accent', color);
  } else {
    document.documentElement.style.removeProperty('--page-accent');
  }
}

export function useDivaAccent() {
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) applyAccent(saved);
  }, []);

  const setAccent = useCallback((color) => {
    if (!color) return;
    try {
      localStorage.setItem(STORAGE_KEY, color);
    } catch {
      // storage unavailable
    }
    applyAccent(color);
  }, []);

  return { setAccent };
}