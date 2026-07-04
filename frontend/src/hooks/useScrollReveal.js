import { useCallback, useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const observerRef = useRef(null);
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = options;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('is-visible');
            observerRef.current?.unobserve(target);
          }
        });
      },
      { threshold, rootMargin },
    );

    return () => observerRef.current?.disconnect();
  }, [threshold, rootMargin]);

  const revealRef = useCallback((node) => {
    if (node) observerRef.current?.observe(node);
  }, []);

  return revealRef;
}