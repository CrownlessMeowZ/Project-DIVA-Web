import { useCallback, useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = options;
  const observerRef = useRef(null);
  const pendingRef = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold, rootMargin },
    );
    observerRef.current = observer;
    pendingRef.current.forEach((node) => observer.observe(node));
    pendingRef.current.clear();

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [threshold, rootMargin]);

  const revealRef = useCallback((node) => {
    if (!node) return;
    if (observerRef.current) observerRef.current.observe(node);
    else pendingRef.current.add(node);
  }, []);

  return revealRef;
}