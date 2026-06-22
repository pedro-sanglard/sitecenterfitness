/**
 * Perguntas frequentes — reusadas na secao FAQ (accordion) e no Concierge Chat.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Nunca treinei, posso ir?",
    answer:
      "Com certeza! A Center Fitness foi feita exatamente para quem está começando. " +
      "Nos seus primeiros dias um professor te acompanha de perto, mostra cada " +
      "equipamento e monta um treino no seu ritmo. Você nunca fica perdido.",
  },
  {
    question: "Qual o valor?",
    answer:
      "Temos planos trimestrais e semestrais que cabem no seu bolso. Como cada " +
      "objetivo é diferente, o melhor é falar com um professor pelo WhatsApp para " +
      "encontrar o plano ideal para você — e já agendar sua aula experimental guiada.",
  },
  {
    question: "Tem plano fidelidade?",
    answer:
      "Trabalhamos com planos flexíveis, sem letras miúdas. Você escolhe o período " +
      "que faz sentido e a gente cuida do resto. Fale com um professor e a gente " +
      "explica todas as condições com transparência.",
  },
  {
    question: "Atende idosos e quem está em reabilitação?",
    answer:
      "Sim! Temos musculação adaptada para idosos com foco em saúde e qualidade de " +
      "vida, além de acompanhamento para reabilitação. Tudo com atenção e segurança.",
  },
];
