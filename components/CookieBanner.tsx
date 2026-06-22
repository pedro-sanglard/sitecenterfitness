"use client";

import { useEffect, useState } from "react";
import { GA4_ID, META_PIXEL_ID } from "@/lib/config";

const CONSENT_KEY = "cf_cookie_consent";

/**
 * Carrega os scripts de GA4 e Meta Pixel SOMENTE apos o consentimento (LGPD).
 * Injeta os scripts via DOM para nao bloquear o carregamento inicial (<3s).
 */
function loadTrackingScripts() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga4-script")) return; // evita duplicar

  // --- Google Analytics 4 ---
  if (GA4_ID && !GA4_ID.includes("XXXX")) {
    const ga = document.createElement("script");
    ga.id = "ga4-script";
    ga.async = true;
    ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(ga);

    const inline = document.createElement("script");
    inline.id = "ga4-inline";
    inline.innerHTML =
      `window.dataLayer = window.dataLayer || [];` +
      `function gtag(){dataLayer.push(arguments);}` +
      `gtag('js', new Date());` +
      `gtag('config', '${GA4_ID}');`;
    document.head.appendChild(inline);
  }

  // --- Meta Pixel ---
  if (META_PIXEL_ID && !META_PIXEL_ID.includes("0000")) {
    const fb = document.createElement("script");
    fb.id = "meta-pixel";
    fb.innerHTML =
      `!function(f,b,e,v,n,t,s)` +
      `{if(f.fbq)return;n=f.fbq=function(){n.callMethod?` +
      `n.callMethod.apply(n,arguments):n.queue.push(arguments)};` +
      `if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';` +
      `n.queue=[];t=b.createElement(e);t.async=!0;` +
      `t.src=v;s=b.getElementsByTagName(e)[0];` +
      `s.parentNode.insertBefore(t,s)}(window,document,'script',` +
      `'https://connect.facebook.net/en_US/fbevents.js');` +
      `fbq('init', '${META_PIXEL_ID}');fbq('track', 'PageView');`;
    document.head.appendChild(fb);
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      loadTrackingScripts();
    } else if (consent !== "rejected") {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadTrackingScripts();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies e privacidade"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-muted bg-surface p-4 shadow-[0_-4px_14px_rgba(0,0,0,0.1)]"
    >
      <div className="section-container flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink">
          Usamos cookies para medir conversões e melhorar sua experiência. Ao
          aceitar, você concorda com o uso de dados para eventos de conversão e
          remarketing.{" "}
          <a
            href="/privacidade"
            className="font-medium text-brand underline underline-offset-2"
          >
            Saiba mais
          </a>
          .
        </p>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <button
            type="button"
            onClick={reject}
            className="touch-target flex-1 rounded-lg border border-muted px-4 py-2 text-sm font-medium text-brand sm:flex-none"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="btn-cta flex-1 !px-4 !py-2 text-sm sm:flex-none"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
