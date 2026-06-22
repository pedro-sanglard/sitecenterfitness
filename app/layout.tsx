import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/config";

// Fonte sem serifa moderna e legivel, self-hosted via next/font (sem custo de rede extra)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BUSINESS.name} — A academia que não te deixa desistir | ${BUSINESS.city}/${BUSINESS.state}`,
  description:
    "Academia em Abre Campo/MG com acolhimento e resultados guiados. " +
    "Onboarding assistido para iniciantes, idosos e quem está voltando a treinar. " +
    "Agende sua aula experimental guiada.",
  keywords: [
    "academia Abre Campo",
    "musculação Abre Campo",
    "Center Fitness",
    "academia para iniciantes",
    "musculação para idosos",
  ],
  openGraph: {
    title: `${BUSINESS.name} — A academia que não te deixa desistir`,
    description:
      "Acolhimento e resultados guiados em Abre Campo/MG. Agende sua aula experimental.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a2f47",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
