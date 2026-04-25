'use client';

import { useEffect, useState } from 'react';

export function useInView(rootMargin = '200px') {
  const [inView, setInView] = useState(false);
  const [el, setEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [el, rootMargin]);

  return [setEl, inView] as const;
}

