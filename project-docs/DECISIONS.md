# 🎯 DECISÕES DO PROJETO - REGISTRO COMPLETO

**Última atualização:** 24/10/2025 - Checkpoint #10

---

## 📋 ÍNDICE

1. [Decisões de Arquitetura](#decisões-de-arquitetura)
2. [Decisões de Design](#decisões-de-design)
3. [Decisões de UX](#decisões-de-ux)
4. [Decisões Técnicas](#decisões-técnicas)
5. [Histórico de Checkpoints](#histórico-de-checkpoints)

---

## 🏗️ DECISÕES DE ARQUITETURA

### ✅ Framework e Stack

**Decisão:** Next.js 14 com App Router + TypeScript + Tailwind CSS  
**Motivo:** 
- SEO nativo e server-side rendering
- TypeScript para type safety
- Tailwind para desenvolvimento rápido
- App Router para estrutura moderna

**Data:** Início do projeto  
**Status:** ✅ Implementado

---

### ✅ Estrutura de Headers

**Decisão:** Dois headers diferentes (HeaderHome e Header)  
**Motivo:**
- Home precisa de visual impactante com logo grande
- Páginas internas precisam de header compacto
- Melhor experiência do usuário

**Implementação:**
```tsx
// LayoutClient.tsx alterna entre os headers
{pathname === '/' ? <HeaderHome /> : <Header />}
```

**Data:** Checkpoint #6  
**Status:** ✅ Implementado

---

## 🎨 DECISÕES DE DESIGN

### ✅ Paleta de Cores Oficial

**Decisão:** Paleta baseada em tons de azul, roxo e lilás

**Cores Principais:**
```css
--azul-marinho: #1B223F       /* Títulos H1, textos fortes */
--azul-escuro: #26377F        /* Títulos H2, links */
--roxo-medio: #5A5AA4         /* Botões CTA, destaques */
--lilas-claro: #C6C0E1        /* Bordas, detalhes */
--lavanda: #DDCFE8            /* Fundos de cards */
--lilas-quase-branco: #ECE0F0 /* Fundos suaves */
--gray-text: #4A5568          /* Texto corpo */
--gray-medium: #718096        /* Texto secundário */
--branco: #FFFFFF             /* Fundo principal */
```

**Correção:** Paleta antiga com "dourado" foi descartada  
**Motivo:** Representam espiritualidade, serenidade e elegância  
**Data:** Checkpoint #2 (definida), Checkpoint #7 (corrigida)  
**Status:** ✅ Implementado e corrigido

---

### ✅ Sistema de Fontes (ATUALIZADO - Checkpoint #10)

**Decisão:** Sistema unificado com família Router única

**Estrutura:**
```css
/* Família ÚNICA Router com múltiplos weights */
@font-face {
  font-family: 'Router';
  font-weight: 200; /* ExtraLight */
}
@font-face {
  font-family: 'Router';
  font-weight: 300; /* Thin */
}
@font-face {
  font-family: 'Router';
  font-weight: 400; /* Regular - PADRÃO */
}
@font-face {
  font-family: 'Router';
  font-weight: 500; /* Medium */
}
@font-face {
  font-family: 'Router';
  font-weight: 700; /* Bold */
}
```

**Classes CSS Customizadas:**
```css
.font-router-thin   { font-family: 'Router'; font-weight: 300; }
.font-router-medium { font-family: 'Router'; font-weight: 500; }
.font-router-bold   { font-family: 'Router'; font-weight: 700; }
```

**Tailwind Config:**
```typescript
fontFamily: {
  'kaushian': ['Kaushan Script', 'cursive'],
  'router': ['Router', 'sans-serif'], // Apenas uma família
}
```

**Uso:**
- **Router (weights variados):** Corpo do texto, títulos, menus
- **Kaushan Script:** Nome do colégio na home (apenas)

**Correção:** Sistema anterior tinha famílias separadas (Router Thin, Router Bold)  
**Motivo:** 
- Melhor controle de weights
- Adiciona font-router-medium
- Evita duplicações e conflitos
- Facilita manutenção

**Data:** Checkpoint #2 (inicial), Checkpoint #10 (refatorado)  
**Status:** ✅ Implementado

---

### ✅ Hierarquia de Cores Tipográfica (NOVO - Checkpoint #10)

**Decisão:** Sistema de cores otimizado para contraste e hierarquia visual

**Problema Identificado:**
- Títulos H1/H2 em roxo claro (#5A5AA4) tinham pouco contraste
- Textos em azul escuro (#26377F) chamavam MAIS atenção que títulos
- Hierarquia visual invertida prejudicava UX

**Solução Implementada:**

```tsx
// H1 - Título Principal da Página
// Cor: #1B223F (azul-marinho) - Contraste MÁXIMO
// Peso: 300 (thin)
className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-azul-marinho mb-8"
style={{letterSpacing: '-1px'}}

// H2 - Títulos de Seção
// Cor: #26377F (azul-escuro) - Contraste ALTO
// Peso: 300 (thin)
className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6"

// H3 - Títulos dentro de Cards/Caixas
// Cor: #FFFFFF (branco) - Contraste MÁXIMO sobre fundos coloridos
// Peso: 700 (bold)
// Efeito: text-shadow sutil para legibilidade
className="text-xl md:text-2xl font-router-bold text-white mb-4"
style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}

// Texto Corpo
// Cor: #4A5568 (gray-text) - Leitura confortável
// Peso: 400 (regular)
className="text-base font-router text-gray-text leading-relaxed"

// Texto Secundário
// Cor: #718096 (gray-medium) - Menos destaque
// Peso: 400 (regular)
className="text-sm font-router text-gray-medium"
```

**Fluxo Visual:**
```
MAIS CONTRASTE (mais atenção)
    ↓
H1 - #1B223F (azul-marinho, quase preto)
H2 - #26377F (azul escuro forte)
H3 - #FFFFFF (branco sobre caixas coloridas)
Texto - #4A5568 (cinza para leitura)
    ↓
MENOS CONTRASTE (menos atenção)
```

**Benefícios:**
- ✅ Hierarquia visual correta (títulos > textos)
- ✅ H3 branco "salta" das caixas coloridas (lavanda/lilás)
- ✅ Melhor escaneabilidade da página
- ✅ Contraste adequado para acessibilidade
- ✅ Leitura confortável com textos em cinza

**Mockup Aprovado:** mockup-h3-branco.html  
**Data:** Checkpoint #10 (23/10/2025)  
**Status:** ✅ Implementado

---

### ✅ Cores do Footer (24/10/2025)

**Decisão:** Todos os textos do footer devem ser brancos (#FFFFFF)

**Elementos afetados:**
- Títulos H3 das colunas (já branco via Typography)
- Parágrafos descritivos (P)
- Links de navegação (Link)
- Copyright

**Implementação:**
```tsx
// Footer.tsx - Parágrafos
<P variant="secondary" size="sm" className="mb-0 text-white">

// Footer.tsx - Links
<Link href="/..." variant="light" className="text-white hover:text-lilas-claro">

// Footer.tsx - Copyright
<P variant="secondary" size="sm" className="mb-0 text-white">
```

**Motivo:**
- Melhor legibilidade sobre fundo azul-marinho (#1B223F)
- Consistência visual total no footer
- Contraste adequado para acessibilidade
- Segue especificação do mockup oficial

**Mockup de Referência:** image.png (footer oficial)  
**Data:** 24/10/2025  
**Commit:** 121ef92  
**Status:** ✅ Implementado

---

### ✅ Logo (ATUALIZADO - Checkpoint #7)

**Decisão:**
- **Home:** Logo sem texto (200x200px)
- **Páginas internas:** `Logo_Horizontal_Cores_01.svg` (tamanho adequado)

**Correção:** Logo nas páginas internas estava incorreto  
**Motivo:** Hierarquia visual e identidade visual correta  
**Data:** Checkpoint #6 (inicial), Checkpoint #7 (corrigido)  
**Status:** 🔄 Aguardando correção

---

### ✅ Estilo Visual (ATUALIZADO - Checkpoint #7)

**Decisão:** Visual quadrado + Glass morphism + Sombras  

**Especificações:**
- **SEM bordas arredondadas** (border-radius: 0)
- **COM glass morphism:** `bg-lavanda/60 backdrop-blur-sm`
- **COM sombras hover:** `hover:-translate-y-2 shadow-card hover:shadow-card-hover`
- **COM bordas lilás:** `border border-lilas-claro`

**Motivo:**
- Visual mais elegante e refinado
- Efeito de "saltar da tela" no hover
- Melhor contraste e legibilidade

**Exemplo:**
```tsx
className="bg-lavanda/60 backdrop-blur-sm border border-lilas-claro p-8 
transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-card-hover"
```

**Data:** Checkpoint #5 (inicial), Checkpoint #7 (refinado)  
**Status:** 🔄 Aguardando implementação

---

### ✅ Hierarquia de Títulos Responsivos (Checkpoint #7)

**Decisão:** Títulos com tamanhos responsivos diferenciados

**Sistema:**
```tsx
// H1 - Título da Página
className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-azul-marinho mb-8"
style={{letterSpacing: '-1px'}}

// H2 - Título de Seção  
className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6"

// H3 - Subtítulo/Card
className="text-xl md:text-2xl font-router-bold text-white mb-4"
```

**Motivo:**
- Melhor hierarquia visual
- Responsividade adequada em mobile
- Facilita escaneamento da página

**Data:** Checkpoint #7 (inicial), Checkpoint #10 (refinado)  
**Status:** 🔄 Aguardando implementação

---

## 👤 DECISÕES DE UX

### ✅ Nomenclatura da Rota de Afiliação

**Decisão:** `/afilie-se` (não `/afiliar-se`)  
**Motivo:**
- Imperativo ("Afilie-se!")
- Chamada à ação direta
- Mais curto e objetivo

**Data:** Checkpoint #6  
**Status:** ✅ Implementado

---

### ✅ Fundo do Site

**Decisão:** Gradiente lilás suave fixo

**Implementação:**
```css
body {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(236, 224, 240, 0.95));
  background-attachment: fixed;
}
```

**Motivo:**
- Visual suave e espiritual
- Não interfere na legibilidade
- Identidade visual consistente

**Data:** Checkpoint #3  
**Status:** ✅ Implementado

---

### ✅ Indicador de Página Atual (Decisão #027 - 24/10/2025)

**Decisão:** Implementar fundo branco semi-transparente com sombra pronunciada como indicador de página ativa

**Implementação:**
```tsx
const pathname = usePathname()

<Link
  className={pathname === item.href 
    ? "bg-white/50 shadow-[0_2px_12px_rgba(255,255,255,0.9)] font-router-bold text-azul-escuro rounded-md whitespace-nowrap" 
    : "text-azul-escuro hover:bg-white/30 hover:text-roxo-medio"
  }
>
```

**Motivo:**
- Melhor orientação do usuário
- Padrão de UX estabelecido
- Reduz confusão na navegação
- Elegante e sutil

**Data:** 24/10/2025  
**Status:** ✅ Implementado

---

### ✅ Cards de Seleção de Afiliação (Decisão #028 - 24/10/2025)

**Contexto:** Página `/afilie-se` precisa apresentar claramente as duas opções de afiliação

**Decisões Tomadas:**

**1. Hierarquia Visual:**
- Títulos promovidos de H3 para H2
- Título da página: "Afilie-se ao Colégio"
- Ícones de estrela: preenchida (Iniciador) e vazada (Iniciado)

**2. Diferenciação dos Cards:**
```tsx
// Card Mago Iniciador (Esquerda)
- Fundo: #DDCFE8 (Lavanda)
- Elementos: #5A5AA4 (Roxo/Azul Médio)
- Estrela: preenchida
- Preço: R$ 250,00/ano

// Card Mago Iniciado (Direita)
- Fundo: rgba(255,255,255,0.7) com backdrop-blur-sm
- Elementos: #26377F (Azul Escuro)
- Estrela: vazada
- Preço: R$ 200,00/ano
```

**3. Listas de Benefícios:**
- Ícones SVG inline de check em círculo
- Spacing consistente (space-y-2)
- Texto em text-sm

**4. Botões CTA:**
- Textos específicos: "Afilie-se como Mago Iniciador/Iniciado"
- Largura ajustada (px-8) ao invés de w-full
- Centralizados com flex justify-center
- Mesmo estilo: bg-roxo-medio hover:bg-azul-escuro

**5. Remoções:**
- Excluída caixa "Sistema em desenvolvimento"
- Removido import de SimpleCard não utilizado

**Motivo:**
- Diferenciação visual clara entre tipos de afiliação
- Hierarquia adequada (H2 para títulos de card)
- Interface mais limpa e profissional
- Botões mais elegantes e focados
- Melhor escaneabilidade do conteúdo

**Impacto UX:**
- ✅ Usuário identifica rapidamente as diferenças
- ✅ Decisão facilitada pela apresentação visual
- ✅ CTAs mais diretos e menos intrusivos
- ✅ Design responsivo mantido

**Data:** 24/10/2025  
**Status:** ✅ Implementado

---

## 🔧 DECISÕES TÉCNICAS

### ✅ Middleware de Autenticação

**Decisão:** Proteção temporária com senha única

**Implementação:**
```typescript
// middleware.ts
if (pathname !== '/auth/login' && !isAuthenticated) {
  return NextResponse.redirect(new URL('/auth/login', request.url))
}
```

**Motivo:**
- Site em desenvolvimento
- Proteção simples e eficaz
- Será substituído por sistema completo

**Data:** Checkpoint #6  
**Status:** ✅ Implementado

---

### ✅ Sistema de Sombras Padronizado (Checkpoint #8)

**Decisão:** Sombras baseadas em azul marinho (#1B223F)

**Especificações:**
```typescript
boxShadow: {
  'card': '0 2px 8px rgba(27, 34, 63, 0.08)',
  'card-hover': '0 8px 16px rgba(27, 34, 63, 0.12)',
  'button': '0 2px 4px rgba(27, 34, 63, 0.10)',
  'button-hover': '0 4px 8px rgba(27, 34, 63, 0.15)',
  'modal': '0 20px 40px rgba(27, 34, 63, 0.20)',
}
```

**Motivo:**
- Consistência visual
- Sombras sutis e elegantes
- Alinhado com paleta de cores

**Data:** Checkpoint #8  
**Status:** 🔄 Aguardando implementação

---

## 📅 HISTÓRICO DE CHECKPOINTS

### Checkpoint #10 (23/10/2025) - ATUAL

**Tema:** Auditoria UX e Refatoração de Hierarquia de Cores

**Decisões:**
- ✅ Auditoria completa de todas as páginas
- ✅ Sistema de fontes unificado (família Router única)
- ✅ Nova hierarquia de cores tipográfica
- ✅ H3 branco em cards para máximo contraste
- ✅ Textos em cinza (#4A5568) para leitura confortável
- 🔄 Correção de nomenclaturas (lilas-branco → lilas-quase-branco)

**Arquivos Documentados:**
- DECISIONS.md (atualizado)
- UX-GUIDELINES.md (atualizado)
- DESIGN-SPECS.md (atualizado)
- AUDITORIA-UX-COMPLETA.md (criado)
- PLANO-CIRURGICO-CORRECOES.md (criado)

**Status:** 🔄 Documentado, aguardando implementação

---

### Checkpoint #9.5 (23/10/2025)

**Tema:** Consolidação de Documentação

**Ações:**
- ✅ Backup de documentação antiga
- ✅ Criação de CHECKPOINTS-HISTORICO.md
- ✅ Atualização de DESIGN-SPECS.md
- ✅ Criação de PROGRESS-TRACKING.md

**Status:** ✅ Concluído

---

### Checkpoint #8 (Outubro 2025)

**Tema:** Sistema de Sombras Padronizado

**Decisões:**
- ✅ Sombras baseadas em azul-marinho
- ✅ Opacidades padronizadas (0.08, 0.10, 0.12, 0.15, 0.20)
- ✅ Transições suaves de 300ms

**Status:** 🔄 Aguardando implementação

---

### Checkpoint #7 (20/10/2025)

**Tema:** Refinamento Visual e UX

**Decisões:**
- 🔄 Correção do logo nas páginas internas
- 🔄 Visual quadrado (sem rounded)
- 🔄 Sombras com hover
- 🔄 Bordas lilás nos cards
- 🔄 Espaçamentos padronizados
- 🔄 Títulos responsivos
- 🔄 Contraste melhorado
- 🔄 Indicador de página atual no menu
- 🔄 Animação de entrada (scroll reveal)
- 🔄 Hierarquia de títulos refinada

**Status:** 🔄 Aguardando implementação

---

### Checkpoint #6 (Outubro 2025)

**Tema:** Implementação Inicial

**Ações:**
- ✅ Implementado sistema de headers duplos
- ✅ Corrigida rota de afiliação
- ✅ Removida font-cerulya
- ✅ Ajustado metadata
- ✅ Paleta de cores corrigida (sem dourado)

**Status:** ✅ Concluído

---

### Checkpoint #5 (Outubro 2025)
- Primeiras correções de configuração

### Checkpoint #3-4 (Outubro 2025)
- Documentação completa
- Especificações detalhadas

### Checkpoint #1-2 (Início)
- Decisões iniciais de stack e design

---

## 📋 RESUMO DAS DECISÕES RECENTES

| # | Decisão | Tipo | Data | Status |
|---|---------|------|------|--------|
| 028 | Cards de seleção de afiliação | UX/Design | 24/10/2025 | ✅ |
| 027 | Indicador visual de página ativa | UX | 24/10/2025 | ✅ |
| - | Cores do Footer (textos brancos) | Design | 24/10/2025 | ✅ |
| - | Hierarquia de cores tipográfica | Design | 23/10/2025 | 🔄 |
| - | Sistema de fontes unificado | Técnico | 23/10/2025 | 🔄 |

**Legenda:**
- ✅ Implementado
- 🔄 Aguardando implementação
- ⏳ Pendente

---

## 🎯 PRÓXIMOS PASSOS

**Checkpoint #11 (Previsto):**
1. Implementar correções do Checkpoint #10
2. Testar em todos os breakpoints (320px, 768px, 1024px, 1440px)
3. Validar contraste e acessibilidade
4. Implementar correções pendentes do Checkpoint #7
5. Sistema de sombras (Checkpoint #8)

---

**Última Revisão:** 24/10/2025 - v3.1.2  
**Próxima Revisão:** Após implementação do Checkpoint #10
