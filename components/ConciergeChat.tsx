"use client";

import { useEffect, useRef, useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";
import { whatsappUrl } from "@/lib/config";
import { trackConversion } from "@/lib/analytics";

interface Message {
  from: "bot" | "user";
  text: string;
}

interface Option {
  label: string;
  // Retorna respostas do bot e (opcional) novas opcoes
  next: () => { reply: string[]; options?: Option[]; handoff?: boolean };
}

const PLANOS_REPLY = [
  "Temos planos pensados para caber no seu bolso 💪",
  "• Trimestral — ideal para criar o hábito com acompanhamento próximo.\n• Semestral — melhor custo-benefício, para quem já decidiu transformar a rotina.",
  "Os valores variam conforme a sua meta. Quer que um professor te passe o valor certinho e já agende sua aula experimental guiada?",
];

// Monta o menu inicial de opcoes do concierge.
function buildMainOptions(): Option[] {
  return [
    {
      label: "Nunca treinei, e agora?",
      next: () => ({
        reply: [
          "Relaxa, você está no lugar certo! 🤗",
          FAQ_ITEMS[0].answer,
        ],
        options: backOrTalk(),
      }),
    },
    {
      label: "Ver planos e valores",
      next: () => ({ reply: PLANOS_REPLY, options: backOrTalk(true) }),
    },
    {
      label: "Tirar uma dúvida",
      next: () => ({
        reply: ["Claro! Sobre o que você quer saber?"],
        options: faqOptions(),
      }),
    },
    {
      label: "Falar com um professor",
      next: () => ({
        reply: ["Perfeito! Vou te levar direto para o WhatsApp 😊"],
        handoff: true,
      }),
    },
  ];
}

function faqOptions(): Option[] {
  const opts: Option[] = FAQ_ITEMS.map((item) => ({
    label: item.question,
    next: () => ({ reply: [item.answer], options: backOrTalk() }),
  }));
  opts.push({
    label: "← Voltar ao início",
    next: () => ({ reply: ["Como posso te ajudar?"], options: buildMainOptions() }),
  });
  return opts;
}

function backOrTalk(highlightTalk = false): Option[] {
  return [
    {
      label: highlightTalk
        ? "Quero falar com um professor"
        : "Falar com um professor",
      next: () => ({
        reply: ["Vou te levar para o WhatsApp agora mesmo 😊"],
        handoff: true,
      }),
    },
    {
      label: "← Voltar ao início",
      next: () => ({ reply: ["Como posso te ajudar?"], options: buildMainOptions() }),
    },
  ];
}

const GREETING: Message[] = [
  { from: "bot", text: "Oi! Eu sou o concierge da Center Fitness 👋" },
  { from: "bot", text: "Estou aqui para te ajudar sem pressão. Como posso ajudar?" },
];

export default function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(GREETING);
  const [options, setOptions] = useState<Option[]>(() => buildMainOptions());
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function choose(opt: Option) {
    const result = opt.next();
    setMessages((prev) => [
      ...prev,
      { from: "user", text: opt.label },
      ...result.reply.map((text) => ({ from: "bot" as const, text })),
    ]);

    if (result.handoff) {
      trackConversion("concierge");
      setOptions([]);
      window.open(whatsappUrl(), "_blank", "noopener,noreferrer");
      return;
    }
    setOptions(result.options ?? buildMainOptions());
  }

  return (
    <>
      {/* Botao do concierge (acima do FAB do WhatsApp) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar assistente" : "Abrir assistente Center Fitness"}
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cta-hover"
      >
        {open ? (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        )}
      </button>

      {/* Painel do chat */}
      {open && (
        <div
          role="dialog"
          aria-label="Assistente Center Fitness"
          className="fixed bottom-40 right-5 z-40 flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-muted bg-surface shadow-2xl animate-fade-in-up"
        >
          {/* Cabecalho */}
          <div className="flex items-center gap-3 bg-brand px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold">
              CF
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Concierge Center Fitness</p>
              <p className="text-xs text-white/80">Responde na hora • acolhedor</p>
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 space-y-2 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm ${
                  m.from === "bot"
                    ? "bg-brand/10 text-ink"
                    : "ml-auto bg-brand text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Opcoes (botoes de fluxo guiado) */}
          {options.length > 0 && (
            <div className="flex flex-col gap-2 border-t border-muted/40 p-3">
              {options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => choose(opt)}
                  className="touch-target w-full rounded-lg border border-brand px-3 py-2 text-left text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
