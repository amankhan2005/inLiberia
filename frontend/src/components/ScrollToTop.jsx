// ScrollToTop.jsx
// A small, reusable React + Tailwind "Scroll to Top" component.
// Usage: import ScrollToTop from './ScrollToTop'; place <ScrollToTop /> near the root of your app (e.g. in App.jsx or layout).

import React, { useEffect, useState } from 'react';

export default function ScrollToTop({
  threshold = 250, // number of pixels scrolled before button appears
  bottom = '4rem', // distance from bottom (can be tailwind classes or CSS value)
  right = '1.25rem', // distance from right
  size = 48, // button size in px
  ariaLabel = 'Scroll to top',
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > threshold) setVisible(true);
      else setVisible(false);
    }

    // initial check
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  function handleClick() {
    // Smooth scroll to top. Works in modern browsers.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Inline styles for dynamic placement (keeps tailwind optional)
  const wrapperStyle = {
    position: 'fixed',
    right,
    bottom,
    zIndex: 9999,
  };

  return (
    <div style={wrapperStyle} aria-hidden={!visible}>
      <button
        onClick={handleClick}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`flex items-center justify-center rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition transform-gpu ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        style={{
          width: size,
          height: size,
          background: 'linear-gradient(135deg, #06b6d4, #0ea5a4)',
          color: 'white',
        }}
      >
        {/* simple chevron-up SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          style={{ width: size * 0.5, height: size * 0.5 }}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

/*
Tips / Notes:
- Put <ScrollToTop /> at the top level of your app (near App.jsx or your Layout component) so it appears on every page.
- If you're using Next.js and want to scroll on route change, add:

  import { useRouter } from 'next/router';
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo({ top: 0 });
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

- You can customize styling with Tailwind classes by replacing inline styles.
- Accessibility: button has aria-label and focus styles. The wrapper uses aria-hidden when hidden.
*/
