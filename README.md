# Center Fitness — Landing Page

Landing page institucional e de captação da **Center Fitness** (Abre Campo/MG).
Foco em **conversão via WhatsApp**, **acolhimento** e **acessibilidade (WCAG AA)**.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** (design system com as cores da marca)
- Export estático (`output: 'export'`) para hospedagem em qualquer CDN/host estático
- Sem bibliotecas JS pesadas — animações via CSS / IntersectionObserver

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em ./out
```

## Estrutura

- `app/` — layout, página principal (SPA com âncoras) e política de privacidade
- `components/` — seções (Hero, Método, Serviços, Prova Social, FAQ, Localização),
  Header, Footer, widgets globais (WhatsApp FAB, Concierge Chat, Cookie Banner)
- `lib/` — configuração central, helpers de analytics e dados (FAQ, serviços)

## ⚠️ Placeholders a substituir antes de publicar

Edite `lib/config.ts`:

| Item | Variável |
|------|----------|
| Número do WhatsApp | `WHATSAPP_NUMBER` |
| ID do Google Analytics 4 | `GA4_ID` |
| ID do Meta Pixel | `META_PIXEL_ID` |
| URL do embed do Google Maps | `GOOGLE_MAPS_EMBED_URL` |

Outros: fotos/vídeo reais do espaço e da equipe (atualmente placeholders), depoimentos
reais do Google Reviews (`components/ProvaSocial.tsx`), valores dos planos
(`components/ConciergeChat.tsx`) e revisão jurídica da política de privacidade.

## Design System

| Elemento | HEX | Uso |
|----------|-----|-----|
| Background | `#ffffff` | Fundo principal |
| Brand / Ação | `#2a2f47` | CTAs, H1/H2, navegação |
| Texto principal | `#000000` | Corpo de texto |
| Apoio | `#999999` | Bordas, placeholders, divisores |

Tipografia: **Inter**. Altura de linha de parágrafos: **150%**. Áreas de toque: **mín. 44×44px**.

## Tracking & LGPD

GA4 e Meta Pixel são carregados **apenas após o consentimento** no banner de cookies.
Cada clique em CTA do WhatsApp dispara um evento de **conversão** (`lib/analytics.ts`).
