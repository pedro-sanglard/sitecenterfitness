import ScrollReveal from "./ScrollReveal";

// Depoimentos PLACEHOLDER — estrutura pronta para integrar com Google Reviews.
const TESTIMONIALS = [
  {
    name: "Dona Marília, 67 anos",
    text:
      "Tinha medo de academia, achava que era só para jovens. Aqui me trataram " +
      "com tanto carinho que hoje não falto um dia. Minhas dores nas costas sumiram.",
    initials: "M",
  },
  {
    name: "Rafael, 19 anos",
    text:
      "Já tinha desistido de várias academias. O professor me acompanhou de perto " +
      "e finalmente criei o hábito. Ganhei massa e confiança.",
    initials: "R",
  },
  {
    name: "Cláudia, 41 anos",
    text:
      "Voltei a treinar depois de uma lesão no joelho. Me senti segura o tempo " +
      "todo, com cargas certas e gente que entende. Recomendo demais!",
    initials: "C",
  },
  {
    name: "Seu Antônio, 72 anos",
    text:
      "Nunca imaginei levantar peso nessa idade. Hoje subo escada sem cansar e " +
      "faço amizades aqui. A Center Fitness mudou minha rotina.",
    initials: "A",
  },
];

/**
 * Secao 4 — Prova Social. Carrossel CSS (scroll-snap), sem libs JS.
 */
export default function ProvaSocial() {
  return (
    <section id="prova" className="scroll-mt-20 py-16 sm:py-24">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Histórias de quem não desistiu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink">
            Pessoas reais de Abre Campo que encontraram acolhimento e resultados.
          </p>
        </ScrollReveal>

        {/* Carrossel: 1 card por vez no mobile, varios no desktop */}
        <ScrollReveal>
          <ul
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
            aria-label="Depoimentos de alunos"
          >
            {TESTIMONIALS.map((t) => (
              <li
                key={t.name}
                className="w-[85%] shrink-0 snap-center sm:w-[45%] lg:w-[31%]"
              >
                <figure className="flex h-full flex-col rounded-xl border border-muted bg-surface p-6">
                  <div className="mb-4 flex items-center gap-3">
                    {/* Foto placeholder (avatar com inicial). Substituir por foto real. */}
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </span>
                    <figcaption className="font-semibold text-brand">
                      {t.name}
                    </figcaption>
                  </div>
                  <blockquote className="text-ink">
                    <p>&ldquo;{t.text}&rdquo;</p>
                  </blockquote>
                  <div className="mt-4 text-amber-500" aria-label="5 de 5 estrelas">
                    ★★★★★
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <p className="mt-2 text-center text-sm text-muted">
          Arraste para o lado para ver mais depoimentos →
        </p>
      </div>
    </section>
  );
}
