/**
 * Configuracao central da Center Fitness.
 *
 * IMPORTANTE (placeholders a substituir):
 *  - WHATSAPP_NUMBER: numero real com DDI+DDD (so digitos).
 *  - GA4_ID / META_PIXEL_ID: IDs reais de tracking.
 *  - GOOGLE_MAPS_EMBED_URL: URL real do embed do Google Maps.
 */

// Numero do WhatsApp em formato internacional, apenas digitos (DDI 55 + DDD + numero).
// FICTICIO — substituir pelo numero real da academia.
export const WHATSAPP_NUMBER = "5531988776655";

// Mensagem pre-preenchida exigida na spec.
export const WHATSAPP_MESSAGE =
  "Olá, vi o site e quero agendar minha aula experimental!";

// Copy padrao de todos os CTAs principais.
export const CTA_LABEL = "Fale com um Professor";

// IDs de tracking — PLACEHOLDERS.
export const GA4_ID = "G-XXXXXXXXXX";
export const META_PIXEL_ID = "000000000000000";

// Dados da empresa / SEO local.
export const BUSINESS = {
  name: "Center Fitness",
  city: "Abre Campo",
  state: "MG",
  address: "Rua São João, 162",
  fullAddress: "Rua São João, 162 — Abre Campo, MG",
};

// URL do embed do Google Maps — PLACEHOLDER (apontando para o endereco).
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Rua São João, 162, Abre Campo - MG") +
  "&output=embed";

/**
 * Monta a URL do WhatsApp com a mensagem pre-preenchida.
 */
export function whatsappUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
