import CtaButton from "./CtaButton";

/**
 * Secao 1 — Hero / Dobra 1.
 * Headline exata exigida na spec, sub-headline empatica e CTA largo.
 * Imagem de fundo placeholder (gradiente da marca) com Alt Text via aria-label.
 */
export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
      aria-label="Pessoas comuns e sorridentes treinando com auxílio de um professor na Center Fitness"
    >
      {/* Camada de fundo (placeholder). Substituir por imagem/video WebP real com lazy load. */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand via-brand to-[#3b4163]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="section-container relative z-10 py-20 text-center text-white">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          A academia que não te deixa desistir
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Aqui você é acolhido desde o primeiro dia. Nada de se sentir perdido
          entre as máquinas: um professor caminha ao seu lado, no seu ritmo, com
          paciência e empatia — até o treino virar parte da sua vida.
        </p>

        {/* Gatilho de reciprocidade — oferta guiada em vez de mensalidade */}
        <p className="mx-auto mt-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
          🎟️ Comece com o seu Passaporte 3 Dias Guiados — aula experimental guiada
        </p>

        {/* CTA largo / flutuante. 100% de largura no mobile com margens laterais. */}
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center px-4">
          <CtaButton
            source="hero"
            fullWidthMobile
            className="!px-8 !py-4 text-lg"
          />
          <span className="mt-3 text-sm text-white/80">
            Resposta rápida pelo WhatsApp. Sem compromisso.
          </span>
        </div>
      </div>
    </section>
  );
}
