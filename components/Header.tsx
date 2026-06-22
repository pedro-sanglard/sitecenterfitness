"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";
import { BUSINESS } from "@/lib/config";

const NAV_LINKS = [
  { href: "#metodo", label: "O Método" },
  { href: "#servicos", label: "Serviços" },
  { href: "#prova", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#local", label: "Localização" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-muted/30 bg-surface/95 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <a
          href="#topo"
          className="touch-target text-xl font-extrabold text-brand"
          aria-label={`${BUSINESS.name} — início`}
        >
          Center<span className="text-ink">Fitness</span>
        </a>

        {/* Navegacao desktop */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="touch-target text-sm font-medium text-brand transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          <CtaButton source="header_desktop" className="!px-4 !py-2 text-sm" />
        </nav>

        {/* Botao hamburguer (mobile) */}
        <button
          type="button"
          className="touch-target md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7 text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-muted/30 bg-surface md:hidden"
          aria-label="Principal (mobile)"
        >
          <ul className="section-container flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="touch-target block w-full py-3 text-base font-medium text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-1 py-3">
              <CtaButton source="header_mobile" fullWidthMobile />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
