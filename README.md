# Medium Vitória Prado - Landing Page Espiritual Premium

> **Desenvolvido por Célio Cleiton, Engenheiro de Software.**

Uma plataforma web moderna, mística e de alta performance desenvolvida para a Medium Vitória Prado. Este projeto une design de luxo, espiritualidade e tecnologia de ponta para oferecer uma experiência imersiva e converter visitantes em consulentes.

![Project Banner](/FOTO%20Vitoria%20Prado.webp)

## 🌟 Visão Geral

O objetivo deste projeto é fornecer uma presença digital autoritária e elegante para os serviços espirituais da Medium Vitória Prado, com foco em:
*   **Amarração Amorosa** 
*   **União de Casais**
*   **Limpeza Espiritual**
*   **Astrologia e Búzios**

A interface foi cuidadosamente projetada para transmitir confiança, mistério e exclusividade, utilizando uma paleta de cores escura com detalhes em dourado (`#d4af37`), animações sutis e uma hierarquia visual clara.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as tecnologias mais modernas do ecossistema React:

*   **[Next.js 15+](https://nextjs.org/)**: Framework React para produção, utilizando App Router e Server Components para máxima performance e SEO.
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para código robusto e manutenível.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Estilização utilitária para um design system consistente e responsivo.
*   **[Shadcn/UI](https://ui.shadcn.com/)**: Componentes de interface reutilizáveis e acessíveis.
*   **[Lucide React](https://lucide.dev/)**: Ícones leves e elegantes.
*   **[Framer Motion / CSS Animations]**: Micro-interações e animações de entrada para engajamento.

## 📂 Estrutura do Projeto

A arquitetura do projeto segue as melhores práticas do Next.js App Router:

```bash
Medium Vitória Prado/
├── app/                    # Rotas e Layouts (App Router)
│   ├── layout.tsx          # Layout Global (Fontes, Metadata, Analytics)
│   ├── page.tsx            # Página Principal (Landing Page)
│   ├── globals.css         # Estilos Globais e Variáveis CSS
│   ├── sitemap.ts          # Geração dinâmica de sitemap.xml
│   └── robots.ts           # Configuração de robots.txt
├── components/             # Componentes React
│   ├── ui/                 # Componentes Base (Botões, Cards, etc.)
│   └── sections/           # Seções da Landing Page
│       ├── Header.tsx      # Navegação e Logo
│       ├── Hero.tsx        # Seção Principal (Dobra 1)
│       ├── Services.tsx    # Cards de Serviços
│       ├── About.tsx       # Quem Sou (História)
│       ├── Ritual.tsx      # Destaque "Chora Nos Meus Pés"
│       ├── NatureOffering.tsx # Mesa de Oferenda (Novo!)
│       ├── LoveUnion.tsx   # Vídeo de Amarração
│       ├── Testimonials.tsx # Prova Social
│       ├── Gallery.tsx     # Galeria de Fotos
│       └── Footer.tsx      # Rodapé e Links
└── public/                 # Assets Estáticos (Imagens, Vídeos, Fontes)
```

## ✨ Funcionalidades e Destaques

1.  **SEO Otimizado**:
    *   Metadata completa (Open Graph, Twitter Cards).
    *   Sitemap XML e Robots.txt configurados.
    *   Tags semânticas HTML5 (`header`, `main`, `section`, `article`).
    *   Performance otimizada (Core Web Vitals).

2.  **Design "Mystic Luxury"**:
    *   Fundo escuro profundo (`#0a0510`, `#150c1f`).
    *   Detalhes em Ouro (`#d4af37`).
    *   Fontes Premium: *Luxury* (Títulos), *Mystic* (Subtítulos) e *Body* (Texto).

3.  **Conversão Focada**:
    *   CTAs (Chamadas para Ação) estratégicos em todas as seções.
    *   Botão flutuante do WhatsApp.
    *   Player de vídeo customizado para demos de rituais.

## 🛠️ Como Executar Localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/Medium Vitória Prado.git
    cd Medium Vitória Prado
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📦 Build e Deploy

Para gerar a versão de produção:

```bash
npm run build
npm start
```

O projeto está otimizado para deploy na **Vercel**, mas pode ser hospedado em qualquer plataforma que suporte Node.js ou exportação estática.

---

© 2025 Medium Vitória Prado. Todos os direitos reservados.
Desenvolvido com foco em soluções tecnológicas para transformar.