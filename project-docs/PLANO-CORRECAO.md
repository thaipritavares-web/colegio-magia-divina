# 🛠️ PLANO DE CORREÇÃO - ERROS IDENTIFICADOS

**Data:** 2025-10-19  
**Total de erros:** 15  
**Status:** Aguardando aprovação para iniciar correções

---

## 📊 RESUMO EXECUTIVO

### Distribuição por Severidade:

| Severidade | Quantidade | Ação |
|-----------|-----------|------|
| 🔴 CRÍTICO | 3 | Corrigir IMEDIATAMENTE |
| 🟠 ALTO | 7 | Corrigir antes de qualquer desenvolvimento |
| 🟡 MÉDIO | 3 | Corrigir em seguida |
| 🔵 BAIXO | 2 | Melhorias futuras |

---

## 🎯 ESTRATÉGIA DE CORREÇÃO

### Abordagem em 4 Fases:

**FASE 1 - CRÍTICOS** (Impedem build)  
**FASE 2 - ALTOS** (Violam especificações)  
**FASE 3 - MÉDIOS** (Inconsistências)  
**FASE 4 - BAIXOS** (Melhorias)

---

## 🔴 FASE 1 - CORREÇÕES CRÍTICAS (URGENTE)

**Tempo estimado:** 2-3 horas  
**Prioridade:** MÁXIMA

### ERRO #1: Componentes Header e Footer faltando

**Arquivos a criar:**
- `/src/components/Header.tsx`
- `/src/components/Footer.tsx`
- `/src/components/HeaderHome.tsx` (para página inicial)

**Ações:**
1. Criar pasta `/src/components/`
2. Implementar Header conforme DESIGN-SPECS.md
3. Implementar Footer conforme DESIGN-SPECS.md
4. Implementar HeaderHome (logo grande + Kaushian Script)
5. Atualizar imports no `layout.tsx`

**Arquivos afetados:**
- `/app/layout.tsx` (atualizar imports)
- `/app/page.tsx` (usar HeaderHome)

---

### ERRO #2: Tailwind Config ausente

**Arquivo a criar:**
- `/tailwind.config.ts`

**Ações:**
1. Criar arquivo na raiz do projeto
2. Adicionar TODAS as cores do DESIGN-SPECS.md
3. Adicionar shadows customizados (card, card-hover, etc)
4. Adicionar breakpoints customizados (320px, 768px, 1024px, 1440px)
5. Adicionar fontFamily (Kaushian Script, Router)
6. Configurar `content` paths corretamente

**Conteúdo completo:**
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
        'gray-text': '#4A5568',
        'gray-medium': '#718096',
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

---

### ERRO #6: Estrutura de diretórios errada

**Ações:**
1. Criar pasta `/src/` na raiz
2. Mover `/app/` para `/src/app/`
3. Criar `/src/components/`
4. Criar `/src/lib/`
5. Criar `/src/types/`
6. Criar `/src/middleware/` (vazio por enquanto)
7. Atualizar `tsconfig.json` paths
8. Atualizar `next.config.js` se necessário

**Estrutura final:**
```
/colegio-tradicao/
  ├── /src/
  │   ├── /app/
  │   ├── /components/
  │   ├── /lib/
  │   ├── /types/
  │   └── /middleware/
  ├── /public/
  ├── tailwind.config.ts
  ├── tsconfig.json
  └── package.json
```

---

## 🟠 FASE 2 - CORREÇÕES ALTAS (IMPORTANTE)

**Tempo estimado:** 3-4 horas  
**Prioridade:** ALTA

### ERRO #3: Nome do projeto incorreto

**Arquivo a modificar:**
- `/src/app/layout.tsx` (linhas 7-8)

**Ação:**
Usar `str_replace`:
```typescript
// ANTES:
title: 'Colégio de Magia Divina',
description: '...Rubem Saraceni',

// DEPOIS:
title: 'Colégio Tradição de Magia Divina',
description: '...Rubens Saraceni',
```

---

### ERRO #4: Fonte Cerulya CF não documentada

**Arquivos a modificar:**
- `/src/app/globals.css` (remover Cerulya)
- Todos os arquivos com `font-cerulya` (9 arquivos)

**Decisão necessária:**
- **OPÇÃO A:** Substituir por `font-kaushian` (título principal)
- **OPÇÃO B:** Substituir por `font-router-bold` (demais)
- **OPÇÃO C:** Documentar Cerulya e manter

**⚠️ AGUARDANDO DECISÃO DE THAIS**

---

### ERRO #5: Rota incorreta (/afiliar-se)

**Ações:**
1. Renomear pasta: `/src/app/afiliar-se/` → `/src/app/afilie-se/`
2. Buscar e substituir em TODOS os arquivos:
   - `/afiliar-se` → `/afilie-se`
   - Verificar: page.tsx, links, etc

**Arquivos com links:**
- `/src/app/page.tsx` (2 ocorrências)
- Outros possíveis links

---

### ERRO #7: Sistema de autenticação simplificado

**Ação TEMPORÁRIA (não urgente):**
Por enquanto, deixar como está (senha hardcoded).

**Ação FUTURA:**
- Integrar Supabase Auth
- Implementar roles
- Middleware de proteção

**Status:** BAIXA PRIORIDADE (protótipo funcional)

---

### ERRO #8: Página de afiliação incompleta

**Status:** FUNCIONALIDADE GRANDE - Implementar separadamente

**Ação POR ENQUANTO:**
Atualizar texto do placeholder para:
```typescript
<div className="...">
  <p>Sistema de afiliação em desenvolvimento.</p>
  <p>Formulário completo será implementado em breve com:</p>
  <ul>
    <li>✓ Seleção de tipo (Iniciador/Iniciado)</li>
    <li>✓ Formulário de dados pessoais</li>
    <li>✓ Seleção de 29 graus de magia</li>
    <li>✓ Upload de documentos</li>
    <li>✓ Pagamento via Mercado Pago</li>
  </ul>
</div>
```

**Ação FUTURA:**
Implementar formulário completo (projeto separado)

---

### ERRO #12: Quatro páginas com placeholder

**Ação POR ENQUANTO:**
Melhorar texto dos placeholders para serem mais informativos.

**Ação FUTURA:**
Implementar funcionalidades completas.

---

## 🟡 FASE 3 - CORREÇÕES MÉDIAS (AJUSTES)

**Tempo estimado:** 1-2 horas  
**Prioridade:** MÉDIA

### ERRO #9: Classes Tailwind divergentes

**Ações:**
1. Buscar e substituir: `lilas-branco` → `lilas-quase-branco`
2. Verificar se `gray-text` e `gray-medium` estão no config
3. Testar todas as páginas após mudança

---

### ERRO #10: Breakpoints não utilizados

**Ações:**
1. Após criar `tailwind.config.ts`, breakpoints estarão corretos
2. Revisar classes `md:` no código (agora será 1024px, não 768px)
3. Ajustar layouts se necessário
4. Testar em 320px, 768px, 1024px, 1440px

---

### ERRO #11: Efeitos visuais não documentados

**Decisão necessária:**
- **OPÇÃO A:** Remover glass morphism e gradientes complexos
- **OPÇÃO B:** Documentar e aprovar oficialmente

**⚠️ AGUARDANDO DECISÃO DE THAIS**

**Por enquanto:** MANTER como está (não causa problemas funcionais)

---

## 🔵 FASE 4 - MELHORIAS (FUTURO)

**Tempo estimado:** 2-3 horas  
**Prioridade:** BAIXA

### ERRO #13: Middleware ausente

**Ação FUTURA:**
Criar quando implementar autenticação real com Supabase.

---

### ERRO #14: TypeScript types ausentes

**Ação FUTURA:**
Criar types quando implementar funcionalidades reais.

Por enquanto, criar estrutura básica:
```typescript
// /src/types/index.ts
export interface Mago {
  id: string
  nome: string
  tipo: 'iniciador' | 'iniciado'
}

export interface GrauMagia {
  id: number
  nome: string
  slug: string
}
```

---

### ERRO #15: UX do formulário de login

**Ação FUTURA:**
Melhorar microinterações quando implementar autenticação real.

---

## 📋 CHECKLIST DE EXECUÇÃO

### Antes de começar:
- [ ] Ler ERRORS-LOG.md completo
- [ ] Entender TODAS as correções necessárias
- [ ] Fazer backup do código atual
- [ ] Criar branch Git: `git checkout -b correcoes-analise`
- [ ] Commitar estado atual: `git commit -m "Antes das correções"`

---

### FASE 1 - CRÍTICOS:

- [ ] **ERRO #1:** Criar Header.tsx e Footer.tsx
- [ ] **ERRO #2:** Criar tailwind.config.ts
- [ ] **ERRO #6:** Reestruturar para /src/
- [ ] Testar build: `npm run build`
- [ ] Commit: `git commit -m "Fix: Correções críticas (erros #1, #2, #6)"`

---

### FASE 2 - ALTOS:

- [ ] **ERRO #3:** Corrigir nome do projeto no metadata
- [ ] **ERRO #4:** DECISÃO sobre fonte Cerulya (aguardar Thais)
- [ ] **ERRO #5:** Renomear /afiliar-se para /afilie-se
- [ ] **ERRO #8:** Melhorar placeholder da página de afiliação
- [ ] **ERRO #12:** Melhorar placeholders das outras páginas
- [ ] Commit: `git commit -m "Fix: Correções altas (erros #3, #5, #8, #12)"`

---

### FASE 3 - MÉDIOS:

- [ ] **ERRO #9:** Corrigir nomes de classes Tailwind
- [ ] **ERRO #10:** Verificar breakpoints após tailwind.config
- [ ] **ERRO #11:** DECISÃO sobre glass morphism (aguardar Thais)
- [ ] Commit: `git commit -m "Fix: Correções médias (erros #9, #10)"`

---

### FASE 4 - BAIXOS (Futuro):

- [ ] **ERRO #13:** Criar middleware básico
- [ ] **ERRO #14:** Criar types básicos
- [ ] **ERRO #15:** Melhorar UX login
- [ ] Commit: `git commit -m "Feat: Melhorias (erros #13, #14, #15)"`

---

### Finalização:

- [ ] Testar TODAS as páginas no navegador
- [ ] Testar em 320px, 768px, 1024px, 1440px
- [ ] Build final: `npm run build`
- [ ] Merge: `git checkout main && git merge correcoes-analise`
- [ ] Push: `git push origin main`
- [ ] Atualizar ERRORS-LOG.md com commits de correção

---

## ⚠️ DECISÕES NECESSÁRIAS ANTES DE PROSSEGUIR

### DECISÃO #1: Fonte Cerulya CF

**Pergunta:** Manter fonte Cerulya CF ou usar apenas Kaushian Script + Router?

**Opções:**
- **A)** Substituir Cerulya por Kaushian Script (títulos principais)
- **B)** Substituir Cerulya por Router Bold (títulos)
- **C)** Documentar Cerulya como fonte oficial e manter

**Impacto:** 9 arquivos precisam ser modificados

**Recomendação:** Opção A (usar Kaushian conforme especificação)

---

### DECISÃO #2: Glass Morphism e Gradientes

**Pergunta:** Manter efeitos visuais complexos (glass morphism, gradientes) ou remover?

**Opções:**
- **A)** Remover e usar apenas cores sólidas da paleta
- **B)** Documentar em DESIGN-SPECS.md e manter
- **C)** Simplificar (remover glass, manter gradientes simples)

**Impacto:** Visual do site

**Recomendação:** Decisão de Thais (preferência visual)

---

## 🎯 PRÓXIMOS PASSOS

### Após aprovação deste plano:

1. **Thais decide sobre DECISÃO #1 e #2**
2. **Claude inicia FASE 1 (Críticos)**
   - Criar componentes
   - Criar tailwind.config
   - Reestruturar pastas
3. **Teste local do build**
4. **Claude continua FASE 2 (Altos)**
5. **Checkpoint após FASE 2**
6. **Claude continua FASE 3 e 4**
7. **Teste final completo**
8. **Deploy**

---

## 📊 MÉTRICAS ESTIMADAS

| Fase | Tempo | Arquivos Modificados | Arquivos Criados |
|------|-------|---------------------|------------------|
| **FASE 1** | 2-3h | 2 | 4 |
| **FASE 2** | 3-4h | 12+ | 0 |
| **FASE 3** | 1-2h | 10+ | 0 |
| **FASE 4** | 2-3h | 3 | 5 |
| **TOTAL** | **8-12h** | **27+** | **9** |

---

## ✅ CRITÉRIOS DE SUCESSO

Após todas as correções, o projeto deve:

- [ ] ✅ Build roda sem erros (`npm run build`)
- [ ] ✅ Sem erros no console do navegador
- [ ] ✅ Todas as páginas renderizam corretamente
- [ ] ✅ Responsivo em 320px, 768px, 1024px, 1440px
- [ ] ✅ Header e Footer aparecem em todas as páginas
- [ ] ✅ Cores conforme paleta oficial
- [ ] ✅ Fontes conforme especificação
- [ ] ✅ Nome do projeto correto
- [ ] ✅ Rotas conforme documentação
- [ ] ✅ Estrutura de pastas conforme PROJECT-GUIDE.md
- [ ] ✅ Tailwind config completo e funcional

---

## 🆘 SE ALGO DER ERRADO

### Durante as correções:

1. **NÃO entre em pânico**
2. **Reverter para último commit funcional:**
   ```powershell
   git checkout -- .
   ```
3. **Documentar erro em ERRORS-LOG.md**
4. **Tentar novamente com abordagem diferente**

---

## 📝 NOTAS IMPORTANTES

- Este plano segue rigorosamente WORKFLOW.md
- Cada fase deve ser commitada separadamente
- Testar após cada fase antes de prosseguir
- AGUARDAR aprovação explícita de Thais antes de cada fase
- Usar `str_replace` para modificações (não reescrever arquivos)
- Seguir CODE-STANDARDS.md em todas as alterações

---

**FIM DO PLANO DE CORREÇÃO**

**Status:** ⏸️ Aguardando decisões e aprovação para iniciar

**Próximo passo:** Thais deve:
1. Revisar este plano
2. Decidir sobre fonte Cerulya (DECISÃO #1)
3. Decidir sobre glass morphism (DECISÃO #2)
4. Aprovar início da FASE 1
