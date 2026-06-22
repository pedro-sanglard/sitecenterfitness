import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metodo from "@/components/Metodo";
import Servicos from "@/components/Servicos";
import ProvaSocial from "@/components/ProvaSocial";
import FAQ from "@/components/FAQ";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ConciergeChat from "@/components/ConciergeChat";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Metodo />
        <Servicos />
        <ProvaSocial />
        <FAQ />
        <Localizacao />
      </main>
      <Footer />

      {/* Widgets globais */}
      <ConciergeChat />
      <WhatsAppFAB />
      <CookieBanner />
    </>
  );
}
