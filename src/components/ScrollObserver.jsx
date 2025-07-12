'use client';
import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
