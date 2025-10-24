# 🔬 PLANO CIRÚRGICO DE CORREÇÃO - UX

**Data:** 23/10/2025  
**Objetivo:** Corrigir problemas críticos SEM quebrar o que funciona  
**Abordagem:** Mudanças incrementais testáveis

---

## ⚠️ PRINCÍPIOS CIRÚRGICOS

1. ✅ **Um problema por vez** - Testar após cada correção
2. ✅ **Backup antes de tudo** - Git commit antes de iniciar
3. ✅ **Teste visual** - Abrir todas as páginas após cada mudança
4. ✅ **Rollback fácil** - Cada correção é um commit separado

---

## 📋 CHECKLIST PRÉ-OPERAÇÃO

```powershell
# 1. Backup do estado atual
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git add .
git commit -m "chore: Backup antes de correções UX cirúrgicas"
git push

# 2. Criar branch de trabalho
git checkout -b fix/ux-audit-corrections

# 3. Verificar que site está funcionando
npm run dev
# Abrir http://localhost:3000
# Testar: Home, Sobre, Magia Divina, Login
```

✅ **Só prossiga se o site estiver funcionando perfeitamente**

---

## 🔴 CORREÇÃO #1: SISTEMA DE FONTES (CRÍTICO)

**Problema:** @font-face duplicados, famílias separadas  
**Impacto:** ALTO - Mas NÃO quebra nada visualmente agora  
**Tempo:** 30 minutos  
**Risco:** 🟡 MÉDIO (precisa testar bem)

### Passo 1.1: Refatorar globals.css

**Arquivo:** `app/globals.css`

**⚠️ ATENÇÃO:** Vamos substituir APENAS a seção @font-face (linhas 5-66)

**Localizar:**
```css
/* Kaushan Script */
@font-face {
  font-family: 'Kaushan Script';
  ...
}

/* Router - Regular */
@font-face {
  ...
}
... (todo o bloco até linha 66)
```

**Substituir por:**
```css
/* ============================================
   FONTES - Sistema unificado Router
   ============================================ */

/* Kaushan Script - Apenas para título principal */
@font-face {
  font-family: 'Kaushan Script';
  src: url('/fonts/kaushan-script-v19-latin-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Router - Família ÚNICA com múltiplos weights */

/* Router ExtraLight (200) */
@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Extralight.otf') format('opentype');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

/* Router Thin (300) */
@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Thin.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

/* Router Regular (400) - PADRÃO */
@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Router Medium (500) */
@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Router Bold (700) */
@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Passo 1.2: Atualizar tailwind.config.ts

**Arquivo:** `tailwind.config.ts`

**Localizar (linhas 21-26):**
```typescript
fontFamily: {
  'kaushian': ['Kaushan Script', 'cursive'],
  'router': ['Router', 'sans-serif'],
  'router-thin': ['Router Thin', 'sans-serif'],
  'router-bold': ['Router Bold', 'sans-serif'],
},
```

**Substituir por:**
```typescript
fontFamily: {
  'kaushian': ['Kaushan Script', 'cursive'],
  'router': ['Router', 'sans-serif'],
},
```

### Passo 1.3: Adicionar classes CSS customizadas

**Arquivo:** `app/globals.css`

**Adicionar APÓS a seção @font-face (linha ~67):**

```css
/* ============================================
   CLASSES DE FONTE CUSTOMIZADAS
   ============================================ */

.font-router-thin {
  font-family: 'Router', sans-serif;
  font-weight: 300;
}

.font-router-medium {
  font-family: 'Router', sans-serif;
  font-weight: 500;
}

.font-router-bold {
  font-family: 'Router', sans-serif;
  font-weight: 700;
}
```

### ✅ Teste da Correção #1

```powershell
# 1. Parar o servidor (Ctrl+C)
# 2. Reiniciar
npm run dev

# 3. Abrir TODAS as páginas e verificar fontes:
# - Home: Texto deve parecer IGUAL
# - Sobre: H1 e H2 devem parecer IGUAIS
# - Login: Título deve parecer IGUAL
# - Magia Divina: Textos devem parecer IGUAIS
```

**❓ Alguma coisa quebrou?**
- ❌ SIM → `git restore app/globals.css tailwind.config.ts`
- ✅ NÃO → Prosseguir para commit

### 📝 Commit da Correção #1

```powershell
git add app/globals.css tailwind.config.ts
git commit -m "fix(fonts): Refatora sistema de fontes para família única

- Remove famílias separadas (Router Thin, Router Bold)
- Unifica em família 'Router' com weights 200, 300, 400, 500, 700
- Adiciona classes CSS customizadas para compatibilidade
- Adiciona font-router-medium (weight 500)

BREAKING: Nenhum (mantém classes existentes)
TESTED: Todas as páginas verificadas visualmente"

git push origin fix/ux-audit-corrections
```

---

## 🔴 CORREÇÃO #2: SISTEMA DE SOMBRAS (CRÍTICO)

**Problema:** Sombras usam preto em vez de azul-marinho  
**Impacto:** MÉDIO - Mudança visual sutil mas importante  
**Tempo:** 45 minutos  
**Risco:** 🟡 MÉDIO (muitas substituições)

### Passo 2.1: Atualizar tailwind.config.ts

**Arquivo:** `tailwind.config.ts`

**Localizar (linhas 27-32):**
```typescript
boxShadow: {
  'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  'card-solid': '0 4px 12px rgba(0, 0, 0, 0.15)',
  'card-solid-hover': '0 8px 20px rgba(0, 0, 0, 0.2)',
},
```

**Substituir por:**
```typescript
boxShadow: {
  // Sistema padronizado - Checkpoint #8
  'card': '0 2px 8px rgba(27, 34, 63, 0.08)',
  'card-hover': '0 8px 16px rgba(27, 34, 63, 0.12)',
  'card-solid': '0 4px 12px rgba(27, 34, 63, 0.10)',
  'card-solid-hover': '0 8px 20px rgba(27, 34, 63, 0.15)',
  
  // Sombras adicionais
  'header': '0 2px 8px rgba(27, 34, 63, 0.08)',
  'button': '0 2px 4px rgba(27, 34, 63, 0.10)',
  'button-hover': '0 4px 8px rgba(27, 34, 63, 0.15)',
  'modal': '0 20px 40px rgba(27, 34, 63, 0.20)',
},
```

### Passo 2.2: Remover override em globals.css

**Arquivo:** `app/globals.css`

**Localizar (linhas 147-153):**
```css
/* Cards com glass effect - OVERRIDE para garantir consistência */
.card, [class*="card"] {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 20px rgba(91, 90, 164, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

**❌ DELETAR COMPLETAMENTE** esse bloco

**⚠️ IMPORTANTE:** NÃO deletar nada mais, apenas essas 7 linhas

### ✅ Teste da Correção #2

```powershell
# 1. Parar o servidor (Ctrl+C)
# 2. Reiniciar
npm run dev

# 3. Testar VISUALMENTE:
# - Home: Cards devem ter sombra mais SUAVE e AZULADA
# - Sobre: Card violeta deve ter sombra suave
# - Rubens: Card violeta deve ter sombra suave
# - Headers: Sombra deve continuar sutil

# 4. Compare:
# Antes: Sombra mais FORTE e PRETA
# Depois: Sombra mais SUAVE e AZULADA
```

**❓ Sombras ficaram invisíveis ou muito fracas?**
- ❌ SIM → Problema. Restaurar e investigar
- ✅ NÃO → Perfeito! Commit

### 📝 Commit da Correção #2

```powershell
git add app/globals.css tailwind.config.ts
git commit -m "fix(shadows): Corrige sistema de sombras conforme UX-GUIDELINES

- Substitui rgba(0,0,0) por rgba(27,34,63) (azul-marinho)
- Ajusta opacidades: 0.08, 0.10, 0.12, 0.15, 0.20
- Remove override conflitante em globals.css
- Adiciona sombras para header, button, modal

Ref: DECISIONS.md Checkpoint #8
TESTED: Todas as páginas com cards verificadas"

git push origin fix/ux-audit-corrections
```

---

## 🟡 CORREÇÃO #3: NOMENCLATURA DE CORES

**Problema:** `lilas-branco` usado em 3 lugares  
**Impacto:** BAIXO - Não quebra nada (fallback funciona)  
**Tempo:** 5 minutos  
**Risco:** 🟢 BAIXO (substituição simples)

### Substituições Exatas

**Arquivo 1:** `app/page.tsx` (linha 5)

**Antes:**
```tsx
<section className="bg-gradient-to-b from-white via-lilas-branco to-white py-20">
```

**Depois:**
```tsx
<section className="bg-gradient-to-b from-white via-lilas-quase-branco to-white py-20">
```

**Arquivo 2:** `app/magia-divina/page.tsx` (linha 40)

**Antes:**
```tsx
<section className="bg-lilas-branco p-6 ">
```

**Depois:**
```tsx
<section className="bg-lilas-quase-branco p-6 ">
```

**Arquivo 3:** `app/auth/login/page.tsx` (linha 45)

**Antes:**
```tsx
<div className="min-h-screen bg-gradient-to-b from-lilas-branco via-white to-lavanda flex items-center justify-center px-4">
```

**Depois:**
```tsx
<div className="min-h-screen bg-gradient-to-b from-lilas-quase-branco via-white to-lavanda flex items-center justify-center px-4">
```

### ✅ Teste da Correção #3

```powershell
# Visual deve ser IDÊNTICO (não há mudança perceptível)
# Apenas corrige nomenclatura

# Testar que não quebrou:
# - Home (hero section)
# - Magia Divina (seção CTA)
# - Login (background)
```

### 📝 Commit da Correção #3

```powershell
git add app/page.tsx app/magia-divina/page.tsx app/auth/login/page.tsx
git commit -m "fix(colors): Padroniza nomenclatura lilas-branco → lilas-quase-branco

- page.tsx: Hero section gradient
- magia-divina/page.tsx: CTA section
- auth/login/page.tsx: Background gradient

Conforme tailwind.config.ts definido
TESTED: Visual idêntico, nomenclatura corrigida"

git push origin fix/ux-audit-corrections
```

---

## 🟡 CORREÇÃO #4: HIERARQUIA H2/H3

**Problema:** 2 páginas com hierarquia incorreta  
**Impacto:** MÉDIO - Inconsistência visual  
**Tempo:** 15 minutos  
**Risco:** 🟢 BAIXO (substituição controlada)

### Correção 4.1: Página Magia Divina

**Arquivo:** `app/magia-divina/page.tsx`

**Localizar TODOS os H2 (linhas 10, 17, 34, 41):**

**Antes:**
```tsx
<h2 className="text-2xl font-bold text-azul-marinho mb-4">
```

**Depois:**
```tsx
<h2 className="text-2xl md:text-3xl font-router-thin text-roxo-medio mb-6">
```

**⚠️ IMPORTANTE:** São 4 substituições na mesma página

### Correção 4.2: Página Afilie-se

**Arquivo:** `app/afilie-se/page.tsx`

**Localizar os 2 H2 (linhas 10, 25):**

**Antes:**
```tsx
<h2 className="text-2xl font-bold text-azul-marinho mb-4">
```

**Depois:**
```tsx
<h2 className="text-2xl md:text-3xl font-router-thin text-roxo-medio mb-6">
```

### ✅ Teste da Correção #4

```powershell
# Testar VISUALMENTE:

# Página Magia Divina:
# - Títulos devem ficar ROXOS (em vez de azul escuro)
# - Títulos devem ficar mais FINOS (thin em vez de bold)
# - Devem ser maiores em desktop

# Página Afilie-se:
# - Mesma mudança visual nos 2 H2
```

**❓ Títulos ficaram grandes demais?**
- Se sim, verificar se usou `lg:text-4xl` (está correto)
- Se ainda grande, remover `lg:text-4xl` temporariamente

### 📝 Commit da Correção #4

```powershell
git add app/magia-divina/page.tsx app/afilie-se/page.tsx
git commit -m "fix(typography): Padroniza hierarquia H2 em 2 páginas

magia-divina/page.tsx:
- H2: text-2xl → text-2xl md:text-3xl
- font-bold → font-router-thin
- text-azul-marinho → text-roxo-medio

afilie-se/page.tsx:
- Mesmas correções nos 2 H2

Conforme DESIGN-SPECS.md hierarquia de títulos
TESTED: Visual consistente com demais páginas"

git push origin fix/ux-audit-corrections
```

---

## 🟡 CORREÇÃO #5: PADDING RESPONSIVO HEADERS

**Problema:** px-20 fixo em mobile (muito grande)  
**Impacto:** MÉDIO - UX em mobile  
**Tempo:** 5 minutos  
**Risco:** 🟢 BAIXO

### Correção 5.1: Header.tsx

**Arquivo:** `components/Header.tsx`

**Localizar (linha 22):**
```tsx
<div className="max-w-[1440px] mx-auto px-20 py-5">
```

**Substituir por:**
```tsx
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 py-5">
```

### Correção 5.2: HeaderHome.tsx

**Arquivo:** `components/HeaderHome.tsx`

**Localizar (linha 22):**
```tsx
<div className="max-w-[1440px] mx-auto px-20 py-10">
```

**Substituir por:**
```tsx
<div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 py-10">
```

### ✅ Teste da Correção #5

```powershell
# Testar em MOBILE (DevTools)

# 1. Abrir DevTools (F12)
# 2. Toggle device toolbar (Ctrl+Shift+M)
# 3. Selecionar iPhone SE (375px)

# Antes: Conteúdo muito espremido (80px de padding)
# Depois: Conteúdo com respiro (16px mobile, 32px tablet, 80px desktop)

# Verificar:
# - Mobile (320-768px): Padding pequeno ✅
# - Tablet (768-1024px): Padding médio ✅
# - Desktop (1024px+): Padding grande ✅
```

### 📝 Commit da Correção #5

```powershell
git add components/Header.tsx components/HeaderHome.tsx
git commit -m "fix(responsive): Ajusta padding de headers para mobile

Header.tsx & HeaderHome.tsx:
- px-20 → px-4 md:px-8 lg:px-20

Mobile (320px): 16px padding
Tablet (768px): 32px padding
Desktop (1024px+): 80px padding

TESTED: Verificado em iPhone SE, iPad, Desktop"

git push origin fix/ux-audit-corrections
```

---

## ✅ FINALIZAÇÃO E MERGE

### Checklist Final

```powershell
# 1. Testar TODAS as páginas uma última vez
npm run dev

# Abrir e verificar:
[ ] Home - Fontes, sombras, gradiente
[ ] Sobre Colégio - H1, H2, cards
[ ] Rubens Saraceni - H1, H2, cards
[ ] Magia Divina - H1, H2 corrigidos, cores
[ ] Membros - H1, card
[ ] FAQ - H1, card
[ ] Blog - H1, card
[ ] Afilie-se - H1, H2 corrigidos, cards
[ ] Login - Fontes, sombra, background

# 2. Testar responsividade
[ ] Mobile (320px) - Headers não espremidos
[ ] Tablet (768px) - Layout intermediário
[ ] Desktop (1440px) - Layout completo

# 3. Verificar console do navegador
[ ] Sem erros de fonte
[ ] Sem warnings de Tailwind
```

### Merge para Main

```powershell
# 1. Voltar para main
git checkout main

# 2. Merge da branch
git merge fix/ux-audit-corrections

# 3. Push para produção
git push origin main

# 4. Deletar branch (opcional)
git branch -d fix/ux-audit-corrections
git push origin --delete fix/ux-audit-corrections
```

### 📊 Resultado Esperado

**Antes:**
- Score: 62/100 🟡
- 2 problemas críticos ❌
- 3 problemas médios ⚠️

**Depois:**
- Score: 88/100 🟢
- 0 problemas críticos ✅
- 0 problemas médios ✅
- Site 100% conforme documentação ✅

---

## 🚨 PLANO DE EMERGÊNCIA

### Se algo der errado:

**Opção 1 - Restaurar arquivo específico:**
```powershell
git restore <arquivo>
```

**Opção 2 - Restaurar commit específico:**
```powershell
git log --oneline  # Ver commits
git reset --hard <hash-do-commit-bom>
```

**Opção 3 - Restaurar tudo:**
```powershell
git reset --hard origin/main
```

---

## 📋 RESUMO EXECUTIVO

| # | Correção | Risco | Tempo | Impacto Visual |
|---|----------|-------|-------|----------------|
| 1 | Fontes | 🟡 | 30min | Nenhum |
| 2 | Sombras | 🟡 | 45min | Sutil |
| 3 | Nomenclatura | 🟢 | 5min | Nenhum |
| 4 | Hierarquia | 🟢 | 15min | Títulos roxos |
| 5 | Padding | 🟢 | 5min | Mobile melhor |

**Total:** 1h40min  
**Score:** 62 → 88 (+26 pontos)  
**Risco geral:** 🟡 MÉDIO-BAIXO

---

## ✅ PRONTO PARA COMEÇAR

**Comando inicial:**
```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git status
git add .
git commit -m "chore: Backup antes de correções UX"
git push
git checkout -b fix/ux-audit-corrections
```

**Quer que eu gere os arquivos modificados prontos para você copiar?** 📋
