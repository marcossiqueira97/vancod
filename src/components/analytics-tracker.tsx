import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Registra uma visita a cada rota. Falha de envio não interfere na navegação.
export function AnalyticsTracker() {
  const { pathname } = useLocation();
  const previous = useRef<string | null>(null);

  useEffect(() => {
    // Em navegação interna, a origem é a página anterior do próprio site, não o referrer original.
    const referrer = previous.current ? window.location.origin + previous.current : document.referrer;
    previous.current = pathname;

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname, referrer }),
      keepalive: true,
    }).catch((err) => console.warn('[analytics] visita não registrada:', err));
  }, [pathname]);

  return null;
}
