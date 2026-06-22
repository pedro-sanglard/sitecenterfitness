import type { Metadata } from "next";
import { BUSINESS } from "@/lib/config";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${BUSINESS.name}`,
  robots: { index: false, follow: true },
};

/**
 * Politica de Privacidade (LGPD). Texto base — revisar/ajustar com base juridica
 * antes da publicacao final (PLACEHOLDER de conteudo).
 */
export default function PrivacidadePage() {
  return (
    <main className="section-container max-w-3xl py-16">
      <a href="/" className="touch-target text-sm font-medium text-brand underline">
        ← Voltar ao site
      </a>
      <h1 className="mt-6 text-3xl font-bold">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-muted">Última atualização: junho de 2026</p>

      <div className="mt-8 space-y-6 text-ink">
        <section>
          <h2 className="text-xl font-semibold">1. Quem somos</h2>
          <p className="mt-2">
            {BUSINESS.name}, localizada na {BUSINESS.fullAddress}. Esta política
            descreve como tratamos os dados coletados por meio deste site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Dados que coletamos</h2>
          <p className="mt-2">
            Este site não possui formulários de cadastro. O contato principal
            ocorre pelo WhatsApp (ambiente externo, operado pela Meta). Ao clicar
            nos botões de contato, você é direcionado ao WhatsApp, onde os dados
            que você compartilhar são tratados conforme a política da Meta.
          </p>
          <p className="mt-2">
            Coletamos, de forma anônima e agregada, dados de navegação por meio de
            cookies de medição (Google Analytics 4) e de marketing (Meta Pixel),
            somente após o seu consentimento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            3. Finalidade do uso (eventos de conversão e retargeting)
          </h2>
          <p className="mt-2">
            Utilizamos esses dados para medir cliques nos botões de contato como
            eventos de conversão, entender a origem das visitas, otimizar nossas
            campanhas e gerir o custo por lead. Os dados também podem alimentar
            públicos de remarketing no Google Ads e no Meta (Facebook/Instagram).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Consentimento e cookies</h2>
          <p className="mt-2">
            Os scripts de medição e marketing só são carregados após o seu aceite
            no banner de cookies. Você pode recusar a qualquer momento; nesse caso,
            nenhum cookie de tracking é ativado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Seus direitos (LGPD)</h2>
          <p className="mt-2">
            Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode
            solicitar acesso, correção ou exclusão dos seus dados. Para isso, entre
            em contato conosco pelo WhatsApp ou pessoalmente em nossa unidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política? Fale com a {BUSINESS.name} pelo WhatsApp
            disponível no site ou visite-nos na {BUSINESS.address}.
          </p>
        </section>
      </div>
    </main>
  );
}
