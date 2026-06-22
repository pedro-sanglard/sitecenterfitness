/**
 * Helpers de tracking de conversao.
 *
 * Os scripts de GA4 e Meta Pixel so sao carregados apos o consentimento LGPD
 * (ver CookieBanner + layout). Estas funcoes verificam a existencia dos objetos
 * globais antes de disparar, evitando erros quando o consentimento nao foi dado.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara um evento de conversao no GA4 e no Meta Pixel.
 * Chamado em TODO clique de CTA do WhatsApp (gestao de CPL / retargeting).
 */
export function trackConversion(source: string): void {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", "conversion", {
      event_category: "engagement",
      event_label: source,
      method: "whatsapp",
    });
  } catch {
    /* tracking nao deve quebrar a navegacao */
  }

  try {
    window.fbq?.("track", "Lead", { source });
  } catch {
    /* idem */
  }
}
