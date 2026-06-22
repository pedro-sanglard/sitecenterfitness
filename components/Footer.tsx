import { BUSINESS } from "@/lib/config";

/**
 * Footer. Sem links de redes sociais/blog (Lei de Hick — acao unica = WhatsApp).
 * Mantem apenas a Politica de Privacidade (LGPD).
 */
export default function Footer() {
  return (
    <footer className="bg-brand py-10 text-white">
      <div className="section-container flex flex-col items-center gap-4 text-center">
        <span className="text-xl font-extrabold">
          Center<span className="text-white/70">Fitness</span>
        </span>
        <address className="not-italic text-sm text-white/80">
          {BUSINESS.fullAddress}
        </address>
        <a
          href="/privacidade"
          className="touch-target text-sm text-white underline underline-offset-4 hover:opacity-80"
        >
          Política de Privacidade e Uso de Dados
        </a>
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
