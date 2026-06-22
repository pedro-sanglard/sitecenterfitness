import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    title: "Boas-vindas sem julgamento",
    description:
      "Você chega e é recebido por um professor que entende o seu momento. " +
      "Conversamos sobre seus objetivos e seus receios — com calma.",
    icon: (
      <path d="M12 21s-6.5-4.35-9-8.5C1.5 9 3 5.5 6.5 5.5c2 0 3.5 1.5 4 2.5.5-1 2-2.5 4-2.5C18 5.5 19.5 9 18 12.5 15.5 16.65 12 21 12 21z" />
    ),
  },
  {
    title: "Primeiros dias assistidos de perto",
    description:
      "Nada de te largar na sala. Nos primeiros treinos um professor mostra " +
      "cada equipamento e ajusta tudo para você se sentir seguro.",
    icon: (
      <path d="M16 11a4 4 0 10-8 0M3 20a7 7 0 0118 0M12 7v0" />
    ),
  },
  {
    title: "Onboarding Guiado",
    description:
      "Um plano feito para o seu corpo e sua rotina, com acompanhamento " +
      "próximo até o treino virar hábito. Sem pressa, com constância.",
    icon: (
      <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    ),
  },
];

/**
 * Secao 2 — O Método Center Fitness. Quebra a objecao de "ficar perdido".
 */
export default function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-20 py-16 sm:py-24">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            O Método Center Fitness
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink">
            Acreditamos que ninguém deveria se sentir intimidado ao começar. Por
            isso criamos um jeito acolhedor de te receber e te manter treinando.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} className="h-full">
              <div className="flex h-full flex-col items-center rounded-xl border border-muted/60 p-6 text-center">
                {/* Icone humanizado */}
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <svg
                    className="h-7 w-7 text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </svg>
                </span>
                <span
                  className="mb-2 text-sm font-semibold text-muted"
                  aria-hidden="true"
                >
                  Passo {i + 1}
                </span>
                <h3 className="text-xl font-semibold text-brand">{step.title}</h3>
                <p className="mt-2 text-ink">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
