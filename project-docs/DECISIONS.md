# 🎯 DECISÕES DO PROJETO - REGISTRO COMPLETO

**Última atualização:** 20/10/2025 - Checkpoint #7

---

## 📋 ÍNDICE

1. [Decisões de Arquitetura](#decisões-de-arquitetura)
2. [Decisões de Design](#decisões-de-design)
3. [Decisões de UX](#decisões-de-ux)
4. [Decisões Técnicas](#decisões-técnicas)
5. [Decisões Pendentes](#decisões-pendentes)

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

### ✅ Roteamento

**Decisão:** Usar App Router do Next.js 14  
**Estrutura de Pastas:**
```
/app
  /afilie-se
  /blog
  /faq
  /magia-divina
  /membros
  /rubens-saraceni
  /sobre-colegio
  /auth/login
```

**Data:** Checkpoint #1  
**Status:** ✅ Implementado

---

### ⏳ Backend e Banco de Dados

**Decisão:** Supabase para autenticação e database  
**Motivo:**
- Auth pronta out-of-the-box
- PostgreSQL robusto
- API automática
- Fácil integração

**Data:** Checkpoint #3  
**Status:** ⏳ Pendente de implementação

---

## 🎨 DECISÕES DE DESIGN

### ✅ Paleta de Cores (ATUALIZADA - Checkpoint #7)

**Decisão:** Tons de azul, roxo e lilás (SEM dourado)  
**Cores Definidas:**
```css
--azul-marinho: #1B223F       /* Textos principais, rodapé */
--azul-escuro: #26377F        /* Links, hover, menu */
--roxo-medio: #5A5AA4         /* CTAs, botões */
--lilas-claro: #C6C0E1        /* Texto secundário */
--lavanda: #DDCFE8            /* Cards, blocos */
--lilas-quase-branco: #ECE0F0 /* Header, seções alternadas */
--branco: #FFFFFF             /* Fundo principal */
```

**Correção:** Paleta antiga com "dourado" foi descartada  
**Motivo:** Representam espiritualidade, serenidade e elegância  
**Data:** Checkpoint #2 (definida), Checkpoint #7 (corrigida)  
**Status:** ✅ Implementado e corrigido

---

### ✅ Tipografia

**Decisão:** Router Thin + Kaushan Script  
**Uso:**
- **Router Thin:** Corpo do texto, títulos, menus
- **Kaushan Script:** Nome do colégio (apenas)

**Motivo:**
- Router: Elegante e legível
- Kaushan: Manuscrita, espiritual, única

**Data:** Checkpoint #2  
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
- **SEM bordas arredondadas** (sem `rounded-lg/xl`)
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

### ✅ Hierarquia de Títulos (NOVO - Checkpoint #7)

**Decisão:** Títulos com tamanhos responsivos diferenciados

**Sistema:**
```tsx
// H1 - Título da Página
className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-roxo-medio mb-8"
style={{letterSpacing: '-1px'}}

// H2 - Título de Seção  
className="text-2xl md:text-3xl lg:text-4xl font-router-thin text-roxo-medio mb-6"

// H3 - Subtítulo/Card
className="text-xl md:text-2xl font-router text-azul-marinho mb-4"
```

**Motivo:**
- Melhor hierarquia visual
- Responsividade adequada em mobile
- Facilita escaneamento da página

**Data:** Checkpoint #7  
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
**Status:** ✅ Implementado e corrigido

---

### ✅ Menu de Navegação (ATUALIZADO - Checkpoint #7)

**Decisão:** Menu sempre visível no topo direito com indicador de página atual  

**Links:**
1. Página Inicial
2. Sobre o Colégio
3. Rubens Saraceni
4. Magia Divina
5. Membros
6. FAQ
7. Blog
8. Afilie-se

**NOVO - Indicador de Página Atual:**
```tsx
// Link da página atual
className="bg-lavanda/30 px-3 py-1 text-azul-marinho font-medium transition-colors"

// Links normais
className="text-azul-escuro hover:text-roxo-medio transition-colors"
```

**Motivo:** 
- Usuário sabe onde está
- Feedback visual claro
- Fundo sutil (efeito botão)

**Data:** Checkpoint #2 (inicial), Checkpoint #7 (indicador)  
**Status:** 🔄 Aguardando implementação

---

### ✅ Espaçamentos Padronizados (NOVO - Checkpoint #7)

**Decisão:** Sistema consistente de espaçamentos

**Padrões:**
```tsx
// Containers principais
className="container mx-auto px-4 py-16"

// Seções hero
className="py-20"

// Grid de cards
className="grid md:grid-cols-3 gap-8"

// Stack de conteúdo
className="space-y-8"
```

**Motivo:**
- Consistência visual entre páginas
- Ritmo visual harmonioso
- Manutenção facilitada

**Data:** Checkpoint #7  
**Status:** 🔄 Aguardando implementação

---

### ✅ Animações de Entrada (NOVO - Checkpoint #7)

**Decisão:** Scroll reveal com fade-in + slide

**Especificações:**
- Cards aparecem ao entrar na viewport
- Efeito: `opacity 0→100` + `translateY 40px→0`
- Duração: 700ms
- Implementação: Intersection Observer API

**Componente:**
```tsx
<FadeInSection>
  <div className="card">
    {/* conteúdo */}
  </div>
</FadeInSection>
```

**Motivo:**
- Experiência mais dinâmica
- Direciona atenção do usuário
- Moderna e elegante

**Data:** Checkpoint #7  
**Status:** 🔄 Aguardando implementação

---

### ✅ Contraste e Legibilidade (NOVO - Checkpoint #7)

**Decisão:** Melhorar contraste mantendo estilo

**Ajustes:**
```tsx
// ANTES
bg-lavanda/40 text-gray-text

// DEPOIS
bg-lavanda/60 text-azul-marinho
```

**Motivo:**
- Acessibilidade (WCAG)
- Melhor legibilidade
- Mantém elegância visual

**Data:** Checkpoint #7  
**Status:** 🔄 Aguardando implementação

---

### ⏳ Busca de Membros

**Decisão:** Busca por nome, estado e cidade  
**Motivo:** Principal funcionalidade do site  
**Status:** ⏳ Pendente de implementação

---

## 🔧 DECISÕES TÉCNICAS

### ✅ Tailwind Config

**Decisão:** Extender tema padrão com cores customizadas  
```typescript
theme: {
  extend: {
    colors: {
      'azul-marinho': '#1B223F',
      'azul-escuro': '#26377F',
      'roxo-medio': '#5A5AA4',
      'lilas-claro': '#C6C0E1',
      'lavanda': '#DDCFE8',
      'lilas-branco': '#ECE0F0',
    }
  }
}
```

**Data:** Checkpoint #1 (inicial), Checkpoint #7 (atualizado)  
**Status:** ✅ Implementado

---

### ✅ Gerenciamento de Estado no Cliente

**Decisão:** 'use client' para LayoutClient  
**Motivo:** usePathname() requer componente cliente  
**Data:** Checkpoint #6  
**Status:** ✅ Implementado

---

### ✅ Importação de Fontes

**Decisão:** Fontes locais em `/public/fonts`  
**Motivo:**
- Controle total
- Sem dependência de CDN
- Melhor performance

**Data:** Checkpoint #2  
**Status:** ✅ Implementado

---

### ✅ Componente de Animação (NOVO - Checkpoint #7)

**Decisão:** Criar `FadeInSection.tsx` reutilizável  
**Tecnologia:** Intersection Observer API  
**Motivo:**
- Reutilizável em todo o site
- Performance otimizada
- Fácil manutenção

**Data:** Checkpoint #7  
**Status:** 🔄 Aguardando criação

---

### ⏳ Autenticação

**Decisão:** Supabase Auth  
**Funcionalidades:**
- Login/Registro
- Reset de senha
- Proteção de rotas

**Status:** ⏳ Pendente de implementação

---

### ⏳ Pagamentos

**Decisão:** Mercado Pago  
**Motivo:**
- Popular no Brasil
- API bem documentada
- Suporte a PIX

**Status:** ⏳ Pendente de implementação

---

## ❓ DECISÕES PENDENTES

### 1. Estrutura do Banco de Dados

**Questão:** Schema exato das tabelas  
**Tabelas Necessárias:**
- users
- members (afiliados)
- payments
- blog_posts
- etc.

**Próximo Passo:** Criar schema SQL

---

### 2. Sistema de Aprovação

**Questão:** Como aprovar novos membros?  
**Opções:**
- A) Automático após pagamento
- B) Aprovação manual do admin
- C) Híbrido (pré-aprovação + pagamento)

**Próximo Passo:** Definir fluxo

---

### 3. Dashboard

**Questão:** Funcionalidades do dashboard de afiliados  
**Possibilidades:**
- Certificado digital
- Histórico de pagamentos
- Atualização de dados
- Download de materiais

**Próximo Passo:** Especificar requisitos

---

### 4. Blog

**Questão:** CMS ou gerenciamento manual?  
**Opções:**
- A) Markdown no código
- B) CMS headless (Strapi/Contentful)
- C) Admin customizado

**Próximo Passo:** Avaliar necessidades

---

### 5. Hospedagem Final

**Questão:** Migrar para Vercel ou manter Hostgator?  
**Considerações:**
- Vercel: Otimizado para Next.js
- Hostgator: Já pago, tradicional

**Próximo Passo:** Testar performance

---

## 📊 IMPACTO DAS DECISÕES

### ✅ Decisões que Aceleraram o Desenvolvimento:
1. Tailwind CSS (prototipação rápida)
2. Next.js App Router (estrutura clara)
3. TypeScript (menos bugs)
4. Fontes locais (sem problemas de CDN)
5. **NOVO:** Componente FadeInSection reutilizável

### ⚠️ Decisões que Criaram Trabalho Extra:
1. Headers duplos (mas valeu a pena)
2. Renomeação de rota (erro inicial corrigido)
3. **NOVO:** Correção de paleta de cores (dourado removido)
4. **NOVO:** Correção de logo (arquivo errado)

### 🎯 Decisões Críticas para o Sucesso:
1. Sistema de busca eficiente
2. Autenticação segura
3. Integração de pagamento confiável
4. **NOVO:** UX refinada e consistente

---

## 🔄 HISTÓRICO DE MUDANÇAS

### Checkpoint #7: (ATUAL)
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

### Checkpoint #6:
- ✅ Implementado sistema de headers duplos
- ✅ Corrigida rota de afiliação
- ✅ Removida font-cerulya
- ✅ Ajustado metadata
- ✅ Paleta de cores corrigida (sem dourado)

### Checkpoint #5:
- Primeiras correções de configuração

### Checkpoint #3-4:
- Documentação completa
- Especificações detalhadas

### Checkpoint #1-2:
- Decisões iniciais de stack e design

---

## 📋 RESUMO DAS DECISÕES DO CHECKPOINT #7

| # | Decisão | Tipo | Status |
|---|---------|------|--------|
| 1 | Logo correto (Logo_Horizontal_Cores_01.svg) | Correção | 🔄 |
| 2 | Visual quadrado (sem rounded) | Design | 🔄 |
| 3 | Sombras com hover | Design | 🔄 |
| 4 | Bordas lilás nos cards | Design | 🔄 |
| 5 | Espaçamentos padronizados | UX | 🔄 |
| 6 | Títulos responsivos | UX | 🔄 |
| 7 | Contraste melhorado | UX | 🔄 |
| 8 | Indicador página atual | UX | 🔄 |
| 9 | Animação de entrada | UX | 🔄 |
| 10 | Hierarquia de títulos | Design | 🔄 |

**Legenda:**
- ✅ Implementado
- 🔄 Aguardando implementação
- ⏳ Pendente

---

**Última Revisão:** 20/10/2025 - Checkpoint #7  
**Próxima Revisão:** Após implementação do Checkpoint #7
