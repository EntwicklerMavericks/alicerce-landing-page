<div align="center">
  <br />
  <img src="public/favicon.svg" alt="Alicerce Logo" width="96" height="96" />
  <h1><b>ALICERCE</b></h1>
  <p><b>FINANÇAS BASEADAS EM OBJETIVOS</b></p>
  <p><i>Landing Page Comercial e Institucional Oficial da Plataforma Alicerce</i></p>

  <p>
    <a href="https://alicerce-landing-page.pages.dev/"><img src="https://img.shields.io/badge/Status-Online%20%E2%9A%A1-34D399?style=for-the-badge&logo=cloudflarepages&logoColor=white" alt="Cloudflare Status" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.7" /></a>
    <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" /></a>
  </p>
  <br />
</div>

---

## 🏛️ Sobre o Projeto

O **Alicerce Landing Page** é a porta de entrada pública, institucional e comercial da plataforma **Alicerce Finance System** — um ecossistema de gestão patrimonial executiva focado em **projeções temporais de 12 meses**, **inteligência de consumo consciente** e **simulação de cenários financeiros**.

Desenvolvida com padrão de engenharia **10/10, production-ready**, esta landing page combina alta performance, acessibilidade (WCAG), SEO técnico aprimorado e uma experiência visual deslumbrante baseada na estética **Vidro Vulcânico e Dourado Champagne Luxe**.

---

## 🚀 Principais Seções e Recursos

### 1. 🎯 **Hero Section com Mockup Executivo**
- Apresentação da proposta de valor central: *"Esqueça planilhas genéricas. Construa patrimônio real com inteligência de projeção."*
- Mockup interativo em tempo real da interface do aplicativo com indicadores de **Saldo Real Consolidado**, **Projeção Fim do Mês (Forecast)** e **Economia Evitada Acumulada**.

### 2. ⚡ **Contraste Problema x Solução**
- Comparativo visual visceral entre a frustração do controle tradicional de gastos (olhar o passado, planilhas quebradas, compras por impulso) vs a **Abordagem Estruturada do Alicerce** (olhar o futuro em 365 dias, quarentena de desejos e sandbox what-if).

### 3. 🧩 **Módulos Estruturais Interativos**
- Apresentação guiada por abas dos 5 pilares reais do Alicerce:
  - **Motor de Forecast 12 Meses**: Projeção de fluxo de caixa cumulativo para os próximos 365 dias divididos em 4 zonas de saúde.
  - **Wishlist & Esfriamento Consciente**: Quarentena obrigatória de 7 a 30 dias para compras emocionais.
  - **Simulador What-If de Cenários**: Teste de variabilidade de aportes e imprevistos em ambiente imutável.
  - **Radar de Vencimentos 30D**: Visão unificada de boletos, faturas fechadas e recorrências.
  - **Projetos de Longo Prazo**: Acompanhamento físico e financeiro de reformas e grandes sonhos por etapas.

### 4. 🧮 **Calculadora Interativa de Esfriamento Consciente**
- Componente funcional onde o visitante simula ao vivo o impacto de recusar um impulso de compra (ex: R$ 3.500,00) e calcula a projeção desse patrimônio rendendo em 12 meses.

### 5. 🛡️ **Arquitetura, Segurança & Privacidade**
- Destaque para a precisão matemática em `Decimal` (sem arredondamentos de ponto flutuante), isolamento multi-tenant por workspace e compromisso de **privacidade absoluta (zero venda de dados)**.

---

## 🎨 Design System & Tokens

A landing page utiliza a mesma linguagem visual do aplicativo principal Alicerce:

| Token | Cor / Valor | Aplicação |
| :--- | :--- | :--- |
| **`--bg-deep`** | `#18070A` | Fundo principal Bordô Vulcânico Profundo |
| **`--color-bordo-primary`** | `#A13D63` | Elementos de destaque, botões secundários e glows |
| **`--color-gold-primary`** | `#C9A74E` | Gradientes de títulos premium e botões de conversão |
| **`--color-gold-light`** | `#EBD9B6` | Textos de destaque e legendas da marca |
| **`--color-emerald-primary`** | `#34D399` | Indicadores de liquidez, superávit e troféu de economia |
| **`--bg-card`** | `rgba(255, 255, 255, 0.03)` | Superfície glassmorphic com `backdrop-filter: blur(16px)` |

---

## 🛠️ Arquitetura do Código

```text
alicerce-landing-page/
├── public/
│   ├── _redirects          # Regra de roteamento SPA para Cloudflare Pages
│   └── favicon.svg         # Ícone oficial da casinha Alicerce (Vetor SVG)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx  # Navegação sticky, logo corporativa e menu mobile
│   │   │   └── Footer.tsx  # Rodapé com mapa do site e avisos legais
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSolutionSection.tsx
│   │   │   ├── ModulesSection.tsx
│   │   │   ├── InteractivePreviewSection.tsx
│   │   │   ├── DifferentiationSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   └── CtaFinalSection.tsx
│   │   └── ui/
│   │       ├── AlicerceLogo.tsx # Componente de marca unificado
│   │       ├── Button.tsx       # Botões primários com tracking de eventos
│   │       └── Card.tsx         # Cards glassmorphic reutilizáveis
│   ├── styles/
│   │   ├── tokens.css      # Variáveis de design system
│   │   └── globals.css     # Reset CSS, utilitários no-scrollbar e animações
│   ├── App.tsx
│   └── main.tsx
├── index.html              # Meta tags SEO, Open Graph e Google Fonts
├── tsconfig.json           # TypeScript strict mode
├── vite.config.ts          # Configuração de build do Vite
└── package.json
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- **Node.js**: v20+ ou v24+
- **npm**: v10+

### Passo a Passo

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/EntwicklerMavericks/alicerce-landing-page.git
   cd alicerce-landing-page
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev -- --port 5174
   ```

4. Acessar no navegador: `http://localhost:5174/`

---

## ⚡ Deploy no Cloudflare Pages

O projeto está configurado para deploy contínuo nativo no **Cloudflare Pages**:

1. Conecte o repositório `EntwicklerMavericks/alicerce-landing-page` no painel **Cloudflare Pages**.
2. Configurações de Build:
   - **Framework preset**: `Vite` *(ou `None`)*
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: `NODE_VERSION` = `20`

---

## 📝 Licença

Desenvolvido para **Alicerce Finance System**. Todos os direitos reservados.