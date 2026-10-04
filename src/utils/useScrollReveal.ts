import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * Automatically observes incoming sections, headers, and cards as the user scrolls down,
 * applying a smooth fade-in and slide-up animation.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Selector for all incoming text blocks, cards, and sections
    const targetSelectors = [
      '.section-header',
      '.neutral-card',
      '.green-card',
      '.metrics-grid',
      '.footer-cta-ribbon',
      '.exp-detail-card',
      '.tools-marquee-container',
      '.faq-trigger-btn',
      '.tool-status-callout',
      '.reveal-on-scroll',
    ].join(', ');

    const elements = document.querySelectorAll(targetSelectors);

    elements.forEach((el) => {
      // Mark for scroll reveal
      el.classList.add('scroll-reveal-init');
    });

    // Check if element is already in initial viewport on page load
    const revealInView = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Element is currently visible within viewport window
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('scroll-reveal-visible');
        }
      });
    };

    // Run once immediately for above-the-fold content
    revealInView();

    // Setup IntersectionObserver for smooth scroll-triggered reveal
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-reveal-visible');
              // Unobserve once revealed to keep performance optimal
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('scroll-reveal-visible')) {
          observer?.observe(el);
        }
      });
    } else {
      // Fallback: reveal all if observer is unsupported
      elements.forEach((el) => el.classList.add('scroll-reveal-visible'));
    }

    const handleScroll = () => {
      // Periodic check for any dynamically updated or filtered elements
      revealInView();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
}
