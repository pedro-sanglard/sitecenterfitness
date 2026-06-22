import { FAQ_ITEMS } from "@/lib/faq";
import CtaButton from "./CtaButton";
import ScrollReveal from "./ScrollReveal";

/**
 * Secao 5 — FAQ em accordion nativo (<details>/<summary>).
 * Abre/fecha com transicao CSS ease-in-out 300ms (ver grid-template-rows).
 */
export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-brand/5 py-16 sm:py-24">
      <div className="section-container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Ainda com dúvidas? A gente entende.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink">
            Perguntas que todo mundo tem antes de começar — respondidas sem enrolação.
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-muted bg-surface"
            >
              <summary className="touch-target flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-brand">
                {item.question}
                <svg
                  className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 ease-in-out group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              {/* Animacao de altura via grid-template-rows (ease-in-out 300ms) */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-ink">{item.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center px-4">
          <p className="mb-4 text-center text-ink">
            Ficou com outra dúvida? Fale direto com um professor.
          </p>
          <CtaButton source="faq" fullWidthMobile />
        </div>
      </div>
    </section>
  );
}
