# 🗺️ Roadmap ACRUX Portfólio

Este documento detalha as etapas de desenvolvimento do portfólio da ACRUX utilizando Next.js 14+, Tailwind CSS e Framer Motion.

## 🟢 Fase 1: Setup e Design System
- [x] Inicializar o projeto Next.js com App Router.
- [x] Configurar o arquivo `tailwind.config.ts` com a paleta de cores da marca.
- [x] Configurar fontes e estilos globais e estrutura de pastas.

## 🟡 Fase 2: Estrutura de Componentes
- [x] **Layout Base**: Navbar transparente com efeito glassmorphism.
- [x] **Hero Section**: Título de alto impacto ("Guiamos quem vai além") e animação de entrada.
- [x] **Footer**: Informações de rodapé e links.
- [x] **Sobre Nós**: Grid layout explicando a visão da ACRUX.
- [x] **Serviços/Portfólio**: Cards interativos para exibir projetos.
- [x] **Contato**: Seção com links sociais e formulário.

## 🔵 Fase 3: Experiência do Usuário (UX)
- [x] Implementar scroll suave entre as seções.
- [x] Adicionar animações de revelação (Reveal on Scroll) com Framer Motion.
- [x] Otimização de imagens com `next/image`.
- [x] Implementar modo escuro (Dark Mode) nativo.

## 🔴 Fase 4: SEO e Performance
- [ ] Configurar Metadata API (Título, Descrição, OG Images).
- [ ] Validar acessibilidade (Aria-labels e contraste).
- [ ] Otimizar Core Web Vitals (LCP, FID, CLS).

## 🚀 Fase 5: Deploy
- [ ] Configurar Continuous Deployment (CD) na Vercel.
- [ ] Configuração de domínio customizado.

---

### 🛠️ Estrutura de Pastas Sugerida
- `/public`: Assets estáticos (logos, ícones).
- `/src/app`: Rotas e Layouts (App Router).
- `/src/components`: Componentes UI reutilizáveis.
- `/src/lib`: Configurações de bibliotecas de terceiros.
- `/src/hooks`: Hooks customizados (ex: useScroll).
- `/src/types`: Definições de TypeScript.

### 📝Observação:
- `Criei placeholders para as imagens (/placeholder-project-1.jpg, etc.). Você precisará adicionar imagens reais na pasta public com esses nomes ou ajustar os caminhos no código.`