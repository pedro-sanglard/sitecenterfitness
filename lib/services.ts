/**
 * Grade de servicos da Center Fitness (Secao 3).
 * O campo `icon` referencia um id de icone SVG humanizado renderizado em Servicos.tsx.
 */
export interface ServiceItem {
  title: string;
  description: string;
  icon: "senior" | "rehab" | "strength" | "teen";
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Musculação para Idosos",
    description:
      "Treinos adaptados com foco em saúde, mobilidade e independência. " +
      "Ritmo respeitoso e acompanhamento atento em cada exercício.",
    icon: "senior",
  },
  {
    title: "Reabilitação",
    description:
      "Retorno seguro aos movimentos após lesões ou pausas, com cargas " +
      "controladas e professores que orientam de perto.",
    icon: "rehab",
  },
  {
    title: "Hipertrofia",
    description:
      "Quer ganhar massa e definição? Montamos um plano progressivo e " +
      "guiado para você evoluir sem se machucar.",
    icon: "strength",
  },
  {
    title: "Adolescentes",
    description:
      "Acolhimento para os mais jovens criarem o hábito do treino com " +
      "orientação correta, segurança e motivação constante.",
    icon: "teen",
  },
];
