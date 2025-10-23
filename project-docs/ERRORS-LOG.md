# REGISTRO DE ERROS E SOLUÇÕES

---

## INSTRUÇÕES DE USO

Este arquivo serve para documentar:
- Erros que ocorreram durante o desenvolvimento
- Como foram resolvidos
- Lições aprendidas para evitar no futuro

**Adicionar novos erros sempre no TOPO (mais recentes primeiro)**

---

## 2025-10-19 - 23:45
### ❌ ERRO #1: Componentes Header e Footer não existem (IMPORTS QUEBRADOS)

**O que foi pedido:**
Análise profunda do código das páginas criadas em conversas anteriores.

**O que deu errado:**
O arquivo `layout.tsx` importa componentes que não existem no projeto:
```typescript
import Header from '@/components/Header'
import Footer from '@/components/Footer'
```

**Código problemático:**
```typescript
// /app/layout.tsx (linhas 3-4)
import Header from '@/components/Header'  // ❌ Arquivo não existe
import Footer from '@/components/Footer'  // ❌ Arquivo não existe
```

**Arquivos afetados:**
- `/app/layout.tsx`
- Todos os arquivos do projeto (build quebrado)

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
1. Criar pasta `/src/components/` (seguir estrutura do PROJECT-GUIDE.md)
2. Criar `/src/components/Header.tsx` completo
3. Criar `/src/components/Footer.tsx` completo
4. Mover `/app/` para `/src/app/` (reestruturação)
5. Atualizar imports no `layout.tsx`

**Lição aprendida:**
- SEMPRE verificar se imports de componentes existem antes de usar
- Seguir rigorosamente a estrutura de pastas do PROJECT-GUIDE.md
- Não referenciar componentes que ainda não foram criados

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🔴 CRÍTICO - Impede build e funcionamento do site

---

## 2025-10-19 - 23:45
### ❌ ERRO #2: Tailwind Config ausente (CLASSES CUSTOMIZADAS NÃO FUNCIONAM)

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
O código usa classes Tailwind customizadas, mas o arquivo `tailwind.config.ts` não foi fornecido no ZIP:
- `bg-lavanda`
- `text-azul-marinho`
- `text-azul-escuro`
- `text-roxo-medio`
- `bg-lilas-branco`
- `shadow-card`
- `shadow-card-hover`
- E outras...

**Código problemático:**
```typescript
// Exemplo: /app/page.tsx (linha 5)
<section className="bg-gradient-to-b from-white via-lilas-branco to-white">
  //                                           ^^^^^^^^^^^^^^
  //                                           Classe não definida!
```

**Arquivos afetados:**
- TODAS as páginas que usam classes customizadas:
  - `/app/page.tsx`
  - `/app/afiliar-se/page.tsx`
  - `/app/sobre-colegio/page.tsx`
  - `/app/rubens-saraceni/page.tsx`
  - `/app/magia-divina/page.tsx`
  - `/app/membros/page.tsx`
  - `/app/faq/page.tsx`
  - `/app/blog/page.tsx`
  - `/app/auth/login/page.tsx`

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
Criar `/tailwind.config.ts` com TODAS as customizações conforme DESIGN-SPECS.md:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-marinho': '#1B223F',
        'azul-escuro': '#26377F',
        'roxo-medio': '#5A5AA4',
        'lilas-claro': '#C6C0E1',
        'lavanda': '#DDCFE8',
        'lilas-quase-branco': '#ECE0F0',
        'gray-text': '#4A5568',      // ← Adicionar (não estava nas specs)
        'gray-medium': '#718096',    // ← Adicionar (não estava nas specs)
      },
      fontFamily: {
        'kaushian': ['Kaushian Script', 'cursive'],
        'router': ['Router', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'card-solid': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-solid-hover': '0 8px 20px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
```

**Lição aprendida:**
- SEMPRE criar `tailwind.config.ts` ANTES de usar classes customizadas
- Documentar TODAS as classes customizadas no config
- Verificar build local antes de assumir que funciona

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🔴 CRÍTICO - Classes CSS não aplicadas = layout quebrado

---

## 2025-10-19 - 23:45
### ❌ ERRO #3: Nome do projeto incorreto em metadata

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Metadata do site usa nome ERRADO e com erro de digitação no nome do fundador.

**Código problemático:**
```typescript
// /app/layout.tsx (linhas 6-9)
export const metadata: Metadata = {
  title: 'Colégio de Magia Divina',        // ❌ ERRADO
  description: '...Rubem Saraceni',        // ❌ ERRADO (falta "s")
}
```

**Arquivos afetados:**
- `/app/layout.tsx`

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
```typescript
// /app/layout.tsx (linhas 6-9)
export const metadata: Metadata = {
  title: 'Colégio Tradição de Magia Divina',  // ✅ CORRETO
  description: 'Instituição dedicada ao ensino e preservação dos conhecimentos da Magia Divina segundo os ensinamentos de Rubens Saraceni',  // ✅ CORRETO
}
```

**Referência oficial:**
PROJECT-GUIDE.md (linha 7):
> "Colégio Tradição de Magia Divina"

DESIGN-SPECS.md (linha 8):
> "Colégio Tradição de Magia Divina"

**Lição aprendida:**
- SEMPRE copiar nomes oficiais da documentação (nunca digitar de memória)
- Conferir metadata antes de qualquer deploy
- Nome do projeto aparece em: SEO, title, Open Graph, etc.

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟠 ALTO - Nome institucional errado prejudica branding e SEO

---

## 2025-10-19 - 23:45
### ❌ ERRO #4: Fonte não documentada sendo usada (Cerulya CF)

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Código usa fonte "Cerulya CF" que NÃO está na especificação oficial.

**Código problemático:**
```css
/* /app/globals.css (linhas 5-20) */
@font-face {
  font-family: 'Cerulya CF';  /* ❌ Fonte não documentada */
  src: url('/fonts/Fontspring-DEMO-cerulyacf-regular.otf') format('opentype');
  /* ... */
}
```

```typescript
// Usado em múltiplos arquivos:
<h1 className="font-cerulya ...">  // ❌ Classe não oficial
```

**DESIGN-SPECS.md especifica:**
> **Fontes Oficiais:**
> - **Kaushian Script** - Título do site "Colégio Tradição de Magia Divina"
> - **Família Router** - Demais textos

**Arquivos afetados:**
- `/app/globals.css` (definição da fonte)
- `/app/afiliar-se/page.tsx` (linha 4)
- `/app/sobre-colegio/page.tsx` (linha 4)
- `/app/rubens-saraceni/page.tsx` (linha 4)
- `/app/magia-divina/page.tsx` (linha 4)
- `/app/membros/page.tsx` (linha 4)
- `/app/faq/page.tsx` (linha 4)
- `/app/blog/page.tsx` (linha 4)
- `/app/auth/login/page.tsx` (linha 59)

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO DECISÃO**

**Soluções possíveis:**

**OPÇÃO A - Usar fonte oficial (Kaushian Script):**
```typescript
// Substituir todas as ocorrências
<h1 className="font-kaushian ...">
```

**OPÇÃO B - Usar Router Bold:**
```typescript
<h1 className="font-router-bold ...">
```

**OPÇÃO C - Documentar Cerulya CF:**
- Adicionar em DESIGN-SPECS.md
- Obter aprovação explícita da Thais
- Atualizar documentação oficial

**Lição aprendida:**
- NÃO usar fontes não documentadas
- SEMPRE consultar DESIGN-SPECS.md antes de adicionar assets
- Qualquer adição visual precisa aprovação e documentação

**Commit de correção:**
[Pendente - aguardando decisão de qual opção usar]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟠 ALTO - Viola especificações de design estabelecidas

---

## 2025-10-19 - 23:45
### ❌ ERRO #5: Rota com nome incorreto (/afiliar-se vs /afilie-se)

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Pasta e rota criadas com nome diferente da especificação.

**Código problemático:**
```
Pasta criada: /app/afiliar-se/    ❌
Deveria ser:  /app/afilie-se/     ✅
```

**FEATURES-SPEC.md especifica (linha 41):**
> "## PÁGINA: /afilie-se"

**PROJECT-GUIDE.md especifica (linha 163):**
> "- Afilie-se"

**Arquivos afetados:**
- Pasta `/app/afiliar-se/` (nome errado)
- `/app/page.tsx` (linha 12): `href="/afiliar-se"`
- `/app/page.tsx` (linha 65): `href="/afiliar-se"`
- Qualquer outro link para esta página

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
1. Renomear pasta: `/app/afiliar-se/` → `/app/afilie-se/`
2. Atualizar TODOS os links:
   - Buscar e substituir: `/afiliar-se` → `/afilie-se`
   - Verificar em TODAS as páginas

**Lição aprendida:**
- SEMPRE verificar nomenclatura exata na documentação
- Nomes de rotas são críticos (SEO, links externos, etc)
- Uma pequena diferença pode causar 404s

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟠 ALTO - URL inconsistente com especificação

---

## 2025-10-19 - 23:45
### ❌ ERRO #6: Estrutura de diretórios não segue padrão documentado

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Estrutura de pastas não segue PROJECT-GUIDE.md.

**Código problemático:**
```
ATUAL (ERRADO):
/app/
  ├── page.tsx
  ├── layout.tsx
  └── ...

DEVERIA SER (PROJECT-GUIDE.md, linhas 48-59):
/src/
  ├── /app/
  ├── /components/
  ├── /lib/
  ├── /types/
  └── /middleware/
```

**Arquivos afetados:**
- TODO o projeto (estrutura inteira)

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
1. Criar pasta `/src/` na raiz
2. Mover `/app/` para `/src/app/`
3. Criar `/src/components/`
4. Criar `/src/lib/`
5. Criar `/src/types/`
6. Criar `/src/middleware/`
7. Atualizar `next.config.js` se necessário
8. Atualizar `tsconfig.json` paths

**Lição aprendida:**
- SEMPRE seguir estrutura documentada desde o início
- Reestruturar depois é mais trabalhoso
- Estrutura correta facilita escalabilidade

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟠 ALTO - Estrutura não padrão dificulta manutenção

---

## 2025-10-19 - 23:45
### ❌ ERRO #7: Sistema de autenticação muito simplificado

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Sistema de autenticação usa senha hardcoded, não Supabase conforme especificado.

**Código problemático:**
```typescript
// /app/api/auth/verify/route.ts (linha 5)
const SITE_PASSWORD = 'colegio@preview'  // ❌ Senha exposta no código
```

**ARCHITECTURE.md especifica:**
- Supabase Auth
- Níveis de permissão (afiliado, staff, admin)
- Sistema robusto de autenticação

**Arquivos afetados:**
- `/app/api/auth/verify/route.ts`
- `/app/api/auth/logout/route.ts`
- `/app/auth/login/page.tsx`

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
1. Criar projeto Supabase
2. Configurar Supabase Auth
3. Implementar login via Supabase
4. Criar sistema de roles (afiliado, staff, admin)
5. Middleware de proteção de rotas
6. Remover senha hardcoded

**Lição aprendida:**
- NÃO usar senhas hardcoded (NUNCA!)
- Protótipos devem usar sistema próximo do real
- Segurança é prioridade desde o início

**Commit de correção:**
[Pendente - requer integração Supabase]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟠 ALTO - Inseguro e não atende arquitetura

---

## 2025-10-19 - 23:45
### ❌ ERRO #8: Página de afiliação incompleta (funcionalidade principal)

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Página `/afiliar-se` tem apenas placeholder "Em breve", mas deveria ter formulário completo em 5 passos.

**Código problemático:**
```typescript
// /app/afiliar-se/page.tsx (linhas 19-21)
<button className="...">
  Em breve  // ❌ Apenas isso!
</button>
```

**FEATURES-SPEC.md especifica (200+ linhas de detalhes):**
- Formulário em 5 passos
- Seleção de tipo (Iniciador R$250 / Iniciado R$200)
- 29 graus de magia (checkboxes + datas)
- Upload de documentos múltiplos
- Integração Mercado Pago
- Sistema de validação
- Nomenclatura automática de arquivos
- Compressão de imagens/PDFs

**Arquivos afetados:**
- `/app/afiliar-se/page.tsx` (incompleto)

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO IMPLEMENTAÇÃO**

**Solução necessária:**
Implementar TODO o formulário conforme FEATURES-SPEC.md:
1. Step 1: Tipo de afiliação
2. Step 2: Dados pessoais (CEP automático)
3. Step 3: Seleção de graus (29 checkboxes + datas)
4. Step 4: Upload de documentos
5. Step 5: Pagamento (Mercado Pago)

**Lição aprendida:**
- Funcionalidade principal NÃO pode ser placeholder
- Implementar incrementalmente, mas com estrutura real
- Esta é a página mais crítica do projeto (70% da complexidade)

**Commit de correção:**
[Pendente - implementação grande]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🔴 CRÍTICO - Funcionalidade principal ausente

---

## 2025-10-19 - 23:45
### ❌ ERRO #9: Classes Tailwind com nomes divergentes da documentação

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Código usa nomes de classes diferentes dos especificados.

**Código problemático:**
```typescript
// USADO NO CÓDIGO:
bg-lilas-branco       // ❌

// DESIGN-SPECS.md (linha 286):
'lilas-quase-branco': '#ECE0F0'  // ✅ Nome correto
```

**Outras divergências:**
- `text-gray-text` (não definido em DESIGN-SPECS.md)
- `text-gray-medium` (não definido em DESIGN-SPECS.md)

**Arquivos afetados:**
- Todos os arquivos que usam essas classes

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
1. Criar `tailwind.config.ts` com nomes EXATOS do DESIGN-SPECS.md
2. Buscar e substituir no código:
   - `lilas-branco` → `lilas-quase-branco`
3. Adicionar cores faltantes (gray-text, gray-medium) ou remover do código

**Lição aprendida:**
- Usar nomenclatura EXATA da documentação
- Não "traduzir" ou "simplificar" nomes de cores
- Consistência é fundamental

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟡 MÉDIO - Inconsistência que pode causar confusão

---

## 2025-10-19 - 23:45
### ❌ ERRO #10: Breakpoints customizados não utilizados

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Código usa breakpoints padrão do Tailwind (`md:`), não os customizados.

**Código problemático:**
```typescript
// /app/page.tsx (linha 29)
<div className="grid md:grid-cols-3 gap-8">
  //                  ^^
  //                  Breakpoint padrão (768px)
```

**DESIGN-SPECS.md especifica (linhas 199-203):**
```typescript
screens: {
  'xs': '320px',
  'sm': '768px',
  'md': '1024px',   // ← CUSTOMIZADO (não 768px)
  'lg': '1440px',
}
```

**Arquivos afetados:**
- Todos os arquivos com classes responsivas

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO CORREÇÃO**

**Solução necessária:**
1. Adicionar breakpoints customizados ao `tailwind.config.ts`
2. Revisar TODAS as classes `md:`, `sm:`, `lg:` no código
3. Ajustar conforme necessário para nova definição
4. Testar em todos os breakpoints: 320px, 768px, 1024px, 1440px

**Lição aprendida:**
- Definir breakpoints customizados logo no início
- Testar responsividade em TODOS os tamanhos especificados
- Não assumir valores padrão do Tailwind

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟡 MÉDIO - Pode afetar responsividade em dispositivos específicos

---

## 2025-10-19 - 23:45
### ❌ ERRO #11: Efeitos visuais não documentados (glass morphism, gradientes)

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Código usa efeitos visuais não mencionados em DESIGN-SPECS.md ou UX-GUIDELINES.md.

**Código problemático:**
```typescript
// /app/page.tsx (linha 31)
<div className="bg-lavanda/40 backdrop-blur-sm border border-white/30">
  //             ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^
  //             Glass morphism não documentado
```

```typescript
// /app/page.tsx (linha 13)
<a className="bg-gradient-to-r from-roxo-medio to-azul-escuro">
  //           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //           Gradiente complexo não documentado
```

**Arquivos afetados:**
- `/app/page.tsx`
- Potencialmente outros

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO DECISÃO**

**Soluções possíveis:**

**OPÇÃO A - Remover efeitos não documentados:**
- Usar apenas cores sólidas conforme paleta
- Remover glass morphism
- Remover gradientes complexos

**OPÇÃO B - Documentar e aprovar:**
- Adicionar em DESIGN-SPECS.md
- Obter aprovação explícita
- Padronizar uso em todo o site

**Lição aprendida:**
- NÃO adicionar efeitos visuais sem documentação
- Efeitos complexos afetam performance e identidade visual
- Sempre consultar DESIGN-SPECS.md antes de adicionar estilo

**Commit de correção:**
[Pendente - aguardando decisão]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟡 MÉDIO - Pode conflitar com identidade visual

---

## 2025-10-19 - 23:45
### ❌ ERRO #12: Quatro páginas críticas apenas com placeholder

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
50% das páginas principais têm apenas "Em desenvolvimento".

**Código problemático:**

**Página /membros:**
```typescript
<p>Sistema de consulta de membros em desenvolvimento.</p>
```
Deveria ter: Busca por CEP + Google Maps + QR Code Scanner

**Página /faq:**
```typescript
<p>Seção de perguntas frequentes em desenvolvimento.</p>
```
Deveria ter: Sistema de busca + FAQs com accordion

**Página /blog:**
```typescript
<p>Blog em desenvolvimento.</p>
```
Deveria ter: Lista de posts + CMS básico

**Arquivos afetados:**
- `/app/membros/page.tsx`
- `/app/faq/page.tsx`
- `/app/blog/page.tsx`
- `/app/afiliar-se/page.tsx`

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO IMPLEMENTAÇÃO**

**Solução necessária:**
Implementar TODAS as funcionalidades conforme especificação:

1. `/membros` - FEATURES-SPEC.md (linhas 459-521)
2. `/faq` - PROJECT-GUIDE.md (linha 127-131)
3. `/blog` - PROJECT-GUIDE.md (linha 117-122)
4. `/afilie-se` - FEATURES-SPEC.md (linhas 41-386)

**Lição aprendida:**
- Não entregar páginas vazias no código
- Implementar estrutura básica funcional, mesmo que simples
- Placeholders dão impressão de projeto incompleto

**Commit de correção:**
[Pendente - múltiplas implementações]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🟠 ALTO - Metade do site não funcional

---

## 2025-10-19 - 23:45
### ❌ ERRO #13: Middleware de autenticação ausente

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Não há proteção de rotas, qualquer pessoa pode acessar qualquer URL.

**Código problemático:**
```
FALTANDO: /src/middleware.ts
FALTANDO: /src/middleware/auth.ts
```

**PROJECT-GUIDE.md especifica (linha 57):**
```
/src/middleware/    # Middleware (autenticação, etc)
```

**Arquivos afetados:**
- TODO o sistema de autenticação

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO IMPLEMENTAÇÃO**

**Solução necessária:**
Criar middleware Next.js 14:

```typescript
// /src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Proteger rotas /dashboard/*
  // Proteger rotas /admin/*
  // Proteger rotas /area-afiliado/*
  // Verificar cookie/token
  // Redirecionar se não autenticado
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/area-afiliado/:path*']
}
```

**Lição aprendida:**
- Proteção de rotas é ESSENCIAL desde o início
- Middleware é obrigatório em aplicações com autenticação
- Não deixar rotas sensíveis acessíveis publicamente

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🔵 BAIXO - Não essencial na fase atual (apenas protótipo)

---

## 2025-10-19 - 23:45
### ❌ ERRO #14: TypeScript types ausentes

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Pasta `/src/types/` não existe, tipos não são reutilizados.

**Código problemático:**
```
FALTANDO: /src/types/mago.ts
FALTANDO: /src/types/afiliacao.ts
FALTANDO: /src/types/graus.ts
FALTANDO: /src/types/user.ts
```

**PROJECT-GUIDE.md especifica (linha 56):**
```
/src/types/         # Tipos TypeScript
```

**Arquivos afetados:**
- TODO o projeto (types duplicados ou ausentes)

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO IMPLEMENTAÇÃO**

**Solução necessária:**
Criar types para entidades principais:

```typescript
// /src/types/mago.ts
export interface Mago {
  id: string
  nome_mago: string
  tipo: 'iniciador' | 'iniciado'
  cpf: string
  email: string
  telefone: string
  // ...
}

// /src/types/graus.ts
export interface GrauMagia {
  id: number
  nome: string
  slug: string
}

// /src/types/afiliacao.ts
export interface Afiliacao {
  id: string
  mago_id: string
  status: 'pendente' | 'aprovado' | 'rejeitado'
  // ...
}
```

**Lição aprendida:**
- Criar types centralizados desde o início
- Evita duplicação e inconsistência
- TypeScript é mais efetivo com types bem definidos

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🔵 BAIXO - Não impede funcionamento, mas melhora qualidade

---

## 2025-10-19 - 23:45
### ❌ ERRO #15: Falta de validação e feedback no formulário de login

**O que foi pedido:**
Análise das páginas do projeto.

**O que deu errado:**
Página de login não segue UX-GUIDELINES.md para validação e feedback.

**Código problemático:**
```typescript
// /app/auth/login/page.tsx
// Feedback de erro genérico, sem microinterações
{error && (
  <div className="bg-red-50 border border-red-200 text-red-700">
    {error}  // ❌ Muito básico
  </div>
)}
```

**UX-GUIDELINES.md especifica:**
- Validação não agressiva
- Microinterações elegantes
- Transições suaves
- Feedback visual contextual

**Arquivos afetados:**
- `/app/auth/login/page.tsx`

**Como foi resolvido:**
**AINDA NÃO RESOLVIDO - AGUARDANDO MELHORIA**

**Solução necessária:**
Melhorar UX do formulário:
1. Adicionar ícone de erro elegante
2. Transição suave ao mostrar erro
3. Shake animation no erro
4. Loading state mais elaborado
5. Feedback visual no campo de senha

**Lição aprendida:**
- Sempre seguir UX-GUIDELINES.md para formulários
- Microinterações melhoram percepção de qualidade
- Feedback visual é tão importante quanto funcionalidade

**Commit de correção:**
[Pendente]

**Tempo perdido:**
[A ser calculado quando corrigido]

**Severidade:** 🔵 BAIXO - Funciona, mas UX pode melhorar

---

## [Adicionar novos erros acima desta linha]

---

## 📊 ESTATÍSTICAS DE ERROS - ATUALIZAÇÃO 2025-10-19

**Total de erros registrados:** 15  
**Tempo total perdido:** [A ser calculado quando corrigidos]  

**Erros por severidade:**
- 🔴 **CRÍTICO:** 3 (impedem funcionamento)
- 🟠 **ALTO:** 7 (violam especificações)
- 🟡 **MÉDIO:** 3 (inconsistências)
- 🔵 **BAIXO:** 2 (melhorias)

**Erros mais comuns:**
1. Não seguir estrutura documentada
2. Usar componentes/assets não documentados
3. Implementação incompleta de funcionalidades

**Última atualização:** 2025-10-19 23:45

---

## ERROS COMUNS E SOLUÇÕES RÁPIDAS

### 🔴 Git: "fatal: not a git repository"
**Problema:** Tentou usar comando git fora da pasta do projeto  
**Solução:**
```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina 2\colegio-tradicao"
```

---

### 🔴 Next.js: "Error: Module not found"
**Problema:** Dependência não instalada  
**Solução:**
```powershell
npm install
```

---

### 🔴 Next.js: "Module not found: Can't resolve '@/components/...'"
**Problema:** Componente importado não existe  
**Solução:**
1. Verificar se arquivo existe na pasta correta
2. Verificar estrutura: deve ser `/src/components/`
3. Criar componente faltante
4. Verificar `tsconfig.json` paths

---

### 🔴 Vercel: Deploy falhou
**Problema:** Build error no Vercel  
**Solução:**
1. Verificar erros no log do Vercel
2. Testar build local: `npm run build`
3. Corrigir erros localmente
4. Commit e push novamente

---

### 🔴 TypeScript: Type errors
**Problema:** Erros de tipagem  
**Solução:**
1. Verificar se tipos estão corretos
2. Adicionar tipos faltantes
3. Nunca usar `any` (exceto em último caso)

---

### 🔴 Tailwind: Classes não funcionam
**Problema:** Classes CSS não aplicadas  
**Solução:**
1. Verificar se `tailwind.config.ts` existe
2. Verificar se arquivo está em `content` do config
3. Adicionar classes customizadas no `extend`
4. Reiniciar servidor de desenvolvimento

---

### 🔴 Imports com @ não funcionam
**Problema:** Alias `@/` não reconhecido
**Solução:**
Verificar `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## NOTAS

- Documentar TODOS os erros, mesmo os pequenos
- Erros documentados = aprendizado permanente
- Se um erro se repetir 3x, criar regra em DECISIONS.md para prevenir
- **ESTES 15 ERROS devem ser corrigidos ANTES de prosseguir com desenvolvimento**
