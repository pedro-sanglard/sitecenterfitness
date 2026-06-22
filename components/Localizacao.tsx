import ScrollReveal from "./ScrollReveal";
import CtaButton from "./CtaButton";
import { BUSINESS, GOOGLE_MAPS_EMBED_URL } from "@/lib/config";

/**
 * Secao 6 — Localizacao e Estrutura.
 * Imagens limpas (placeholders) + Google Maps em iframe com lazy load.
 */
export default function Localizacao() {
  return (
    <section id="local" className="scroll-mt-20 py-16 sm:py-24">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Um espaço limpo, iluminado e acolhedor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink">
            Estamos no coração de {BUSINESS.city}/{BUSINESS.state}. Venha conhecer
            de perto — a porta está sempre aberta.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2">
          {/* Galeria placeholder do espaco. Substituir por fotos WebP reais com Alt Text. */}
          <ScrollReveal className="h-full">
            <div className="grid h-full grid-cols-2 gap-4">
              {[
                "Sala de musculação iluminada da Center Fitness",
                "Área de peso livre e halteres",
                "Espaço de cardio com luz natural",
                "Recepção acolhedora da academia",
              ].map((alt, i) => (
                <div
                  key={i}
                  role="img"
                  aria-label={alt}
                  className="flex aspect-square items-center justify-center rounded-xl border border-muted bg-brand/10 p-4 text-center text-sm text-muted"
                >
                  {alt}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Mapa interativo (lazy load) */}
          <ScrollReveal className="h-full">
            <div className="flex h-full flex-col">
              <div className="overflow-hidden rounded-xl border border-muted">
                <iframe
                  title={`Mapa da ${BUSINESS.name} — ${BUSINESS.fullAddress}`}
                  src={GOOGLE_MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full md:h-full md:min-h-[20rem]"
                  allowFullScreen
                />
              </div>
              <address className="mt-4 not-italic text-ink">
                <strong className="text-brand">{BUSINESS.name}</strong>
                <br />
                {BUSINESS.address}
                <br />
                {BUSINESS.city} — {BUSINESS.state}
              </address>
              <div className="mt-4 max-w-xs px-1">
                <CtaButton source="localizacao" fullWidthMobile />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
