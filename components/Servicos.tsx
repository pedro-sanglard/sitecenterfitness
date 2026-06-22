import ScrollReveal from "./ScrollReveal";
import { SERVICES, type ServiceItem } from "@/lib/services";

// Icones SVG por servico (path interno de um <svg> 24x24, stroke).
const ICONS: Record<ServiceItem["icon"], React.ReactNode> = {
  senior: <path d="M12 7a2 2 0 100-4 2 2 0 000 4zM10 22v-6l-2-2 1-5 3 1 3-1M14 22v-7" />,
  rehab: <path d="M9 11l-4 4a2 2 0 102.8 2.8l4-4M15 13l4-4a2 2 0 10-2.8-2.8l-4 4M8.5 8.5l7 7" />,
  strength: <path d="M6 7v10M4 9v6M18 7v10M20 9v6M6 12h12" />,
  teen: <path d="M12 7a2 2 0 100-4 2 2 0 000 4zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M9 11l3 3 3-3" />,
};

/**
 * Secao 3 — Grade de Servicos.
 * Grid 1 coluna (mobile) / 2 colunas (desktop). Cards brancos com borda cinza.
 * Texto imediatamente proximo ao icone (Lei da Proximidade).
 */
export default function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-brand/5 py-16 sm:py-24">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Treinos para cada momento da sua vida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink">
            Seja qual for o seu objetivo, temos um caminho guiado para você.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ScrollReveal key={service.title} className="h-full">
              <article className="flex h-full items-start gap-4 rounded-xl border border-muted bg-surface p-6">
                {/* Icone colado ao texto (proximidade) */}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                  <svg
                    className="h-6 w-6 text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[service.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-brand">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-ink">{service.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
