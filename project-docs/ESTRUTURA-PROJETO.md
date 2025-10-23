# 🏗️ ESTRUTURA DO PROJETO (FONTE ÚNICA DA VERDADE)

**Última atualização:** 23/10/2025  
**Status:** ✅ Estrutura validada com screenshot  
**Validação:** Baseada em imagem real da estrutura de pastas

---

## ⚠️ DIVERGÊNCIA IMPORTANTE

A estrutura REAL do projeto **difere da documentação original**.

**Documentado em PROJECT-GUIDE.md (original):**
```
❌ ESPERADO (mas não implementado):
/colegio-tradicao/
  └── /src/
      ├── /app/
      ├── /components/
      ├── /lib/
      ├── /types/
      └── /middleware/
```

**Realidade (validada 23/10/2025):**
```
✅ ESTRUTURA REAL:
/colegio-tradicao/
  ├── /app/           # Direto na raiz
  ├── /components/    # Direto na raiz
  ├── /lib/           # Direto na raiz
  └── middleware.ts   # Direto na raiz
```

**Decisão:** Manter estrutura atual (sem `/src/`). Funciona perfeitamente e não causa problemas.

---

## 📂 ESTRUTURA COMPLETA ATUAL

```
colegio-tradicao/
│
├── 📁 .next/                           # Build do Next.js (auto-gerado)
├── 📁 app/                             # ✅ Páginas Next.js (App Router)
│   ├── layout.tsx                      # Layout principal
│   ├── page.tsx                        # Home page
│   ├── globals.css                     # Estilos globais + fontes
│   ├── 📁 afilie-se/                   # Página de afiliação
│   │   └── page.tsx
│   ├── 📁 auth/
│   │   └── 📁 login/
│   │       └── page.tsx
│   ├── 📁 blog/
│   │   └── page.tsx
│   ├── 📁 faq/
│   │   └── page.tsx
│   ├── 📁 magia-divina/
│   │   └── page.tsx
│   ├── 📁 membros/
│   │   └── page.tsx
│   ├── 📁 rubens-saraceni/
│   │   └── page.tsx
│   └── 📁 sobre-colegio/
│       └── page.tsx
│
├── 📁 backups/                         # ✅ Backups manuais do projeto
│
├── 📁 cache/                           # Cache de build (Next.js)
│
├── 📁 components/                      # ✅ Componentes React reutilizáveis
│   ├── Header.tsx                      # Header padrão (páginas internas)
│   ├── HeaderHome.tsx                  # Header especial (home)
│   ├── Footer.tsx                      # Footer (todas as páginas)
│   └── LayoutClient.tsx                # Client component para alternar headers
│
├── 📁 correcoes-fonte-cerulya/         # ✅ Correções realizadas (histórico)
│
├── 📁 lib/                             # ✅ Funções utilitárias e helpers
│
├── 📁 node_modules/                    # Dependências npm (auto-gerado)
│
├── 📁 outputs/                         # ✅ Arquivos gerados pela IA
│
├── 📁 project-docs/                    # ✅ Documentação completa do projeto
│   ├── PROJECT-GUIDE.md                # ⭐ Guia principal
│   ├── WORKFLOW.md                     # ⭐ Processo de trabalho
│   ├── ARCHITECTURE.md
│   ├── FEATURES-SPEC.md
│   ├── CODE-STANDARDS.md
│   ├── DESIGN-SPECS.md
│   ├── UX-GUIDELINES.md
│   ├── DECISIONS.md
│   ├── CONTEXT-LOG.md
│   ├── PROGRESS-TRACKING.md
│   ├── NEXT-STEPS.md
│   ├── ERRORS-LOG.md
│   ├── GRAUS-MAGIA-MAPEAMENTO.md
│   ├── CLAUDE-INSTRUCTIONS.md
│   └── [outros arquivos de documentação]
│
├── 📁 public/                          # ✅ Assets estáticos (servidos diretamente)
│   ├── 📁 fonts/
│   │   ├── Router-Thin.woff2
│   │   ├── Router-Normal.woff2
│   │   ├── Router-Bold.woff2
│   │   └── KaushanScript-Regular.woff2
│   ├── 📁 images/
│   │   ├── Logo_Horizontal_Cores_01.svg
│   │   ├── Logo_Circular.svg
│   │   └── [outras imagens]
│   └── 📁 icons/
│       └── [ícones]
│
├── 📁 server/                          # Servidor (propósito não documentado)
│
├── 📁 static/                          # Arquivos estáticos adicionais
│
├── 📄 .gitignore                       # ✅ Arquivos ignorados pelo Git
├── 📄 app-build-manifest.json          # Manifest do build (auto-gerado)
├── 📄 build-manifest.json              # Manifest do build (auto-gerado)
├── 📄 middleware.ts                    # ✅ Middleware do Next.js
├── 📄 next-env.d.ts                    # TypeScript env (auto-gerado)
├── 📄 next.config.js                   # ✅ Configuração do Next.js
├── 📄 package.json                     # ✅ Dependências e scripts
├── 📄 package-lock.json                # Lock de dependências (auto-gerado)
├── 📄 postcss.config.js                # ✅ Configuração PostCSS
├── 📄 react-loadable-manifest.json     # Manifest React (auto-gerado)
├── 📄 tailwind.config.ts               # ✅ Configuração Tailwind CSS
├── 📄 trace                            # Trace do Next.js (auto-gerado)
└── 📄 tsconfig.json                    # ✅ Configuração TypeScript
```

---

## 📋 HISTÓRICO DE MUDANÇAS NA ESTRUTURA

### 23/10/2025 - Estrutura Validada e Documentada
- ✅ Confirmado: `/app/` está na raiz (não em `/src/app/`)
- ✅ Confirmado: `/components/` está na raiz (não em `/src/components/`)
- ✅ Confirmado: `/lib/` está na raiz (não em `/src/lib/`)
- ✅ Confirmado: `middleware.ts` está na raiz (não em `/src/middleware/`)
- ⚠️ Nota: Difere do PROJECT-GUIDE.md original
- ✅ Decisão: Manter estrutura atual (funciona perfeitamente)

### 20/10/2025 - Checkpoint #6 (Criação dos componentes essenciais)
- ✅ Criado: `/components/Header.tsx`
- ✅ Criado: `/components/Footer.tsx`
- ✅ Criado: `/components/HeaderHome.tsx`
- ✅ Criado: `/components/LayoutClient.tsx`
- ✅ Criado: `tailwind.config.ts`
- ✅ Criado: `middleware.ts`

### 19/10/2025 - Checkpoint #5 (Análise)
- 📊 Identificado: Estrutura difere da documentação
- 📊 Documentado: Falta pasta `/src/`
- 📊 Documentado: Falta pasta `/types/`

### Início do Projeto
- ✅ Estrutura Next.js 14 criada
- ✅ Estrutura App Router configurada

---

## 🔍 ANÁLISE: POR QUE NÃO TEM /src/?

### Possíveis razões:

1. **Next.js 14 suporta ambas estruturas:**
   - Com `/src/app/` (recomendado para projetos grandes)
   - Sem `/src/`, direto na raiz (válido e funcional)

2. **Funcionalidade não é afetada:**
   - Ambas as estruturas funcionam igualmente
   - Next.js detecta automaticamente

3. **Preferência de implementação:**
   - Estrutura mais simples para protótipo
   - Menos aninhamento de pastas

### Decisão tomada:

**✅ MANTER estrutura atual (sem /src/)**

**Motivos:**
- Já está funcionando
- Não causa problemas técnicos
- Mudar agora seria retrabalho desnecessário
- Next.js suporta oficialmente

---

## 📁 PASTAS EXTRAS NÃO DOCUMENTADAS

### 1. `/server/` 
**Status:** ❓ Propósito não documentado  
**Ação:** Investigar conteúdo e documentar

### 2. `/static/`
**Status:** ❓ Diferente de `/public/`?  
**Ação:** Verificar se é necessário ou pode ser consolidado com `/public/`

### 3. `/cache/`
**Status:** ✅ Cache de build do Next.js  
**Ação:** Adicionar ao `.gitignore` se não estiver

### 4. `/backups/`
**Status:** ✅ Backups manuais  
**Ação:** Manter, é útil para recuperação

### 5. `/outputs/`
**Status:** ✅ Outputs da IA  
**Ação:** Manter, usado no workflow

### 6. `/correcoes-fonte-cerulya/`
**Status:** ✅ Histórico de correções  
**Ação:** Pode ser movido para `/project-docs/archive/` posteriormente

---

## ❌ PASTA /types/ AUSENTE

**Documentado:** Deveria existir `/src/types/` (ou `/types/`)  
**Realidade:** NÃO EXISTE

**Consequência:**
- Types TypeScript não centralizados
- Definições de interface espalhadas nos componentes

**Ação futura:**
1. Criar `/types/` na raiz
2. Criar arquivos:
   - `types/mago.ts`
   - `types/afiliacao.ts`
   - `types/graus.ts`
   - `types/user.ts`
   - `types/index.ts`

**Prioridade:** 🟡 Baixa (não impede funcionamento)

---

## 🎯 ESTRUTURA RECOMENDADA FUTURA

Quando o projeto crescer, considerar:

```
colegio-tradicao/
├── app/                    # Atual - manter
├── components/             # Atual - manter
│   ├── ui/                # NOVO - componentes UI puros
│   ├── forms/             # NOVO - componentes de formulário
│   └── layouts/           # NOVO - layouts compartilhados
├── lib/                    # Atual - manter
│   ├── utils/             # NOVO - utilitários
│   ├── hooks/             # NOVO - custom hooks
│   └── api/               # NOVO - chamadas API
├── types/                  # NOVO - TypeScript types
├── public/                 # Atual - manter
├── middleware.ts           # Atual - manter
└── [configs]               # Atual - manter
```

**Quando fazer essa reestruturação:**
- Quando tiver 20+ componentes
- Quando tiver 10+ custom hooks
- Quando complexidade aumentar

**Por enquanto:** Estrutura atual está adequada ✅

---

## 📝 COMANDOS ÚTEIS PARA NAVEGAÇÃO

### PowerShell:

```powershell
# Ir para raiz do projeto
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"

# Ver estrutura de pastas
tree /F

# Ver apenas pastas (sem arquivos)
tree /A /D

# Contar arquivos por pasta
Get-ChildItem -Recurse | Measure-Object

# Buscar arquivo específico
Get-ChildItem -Recurse -Filter "Header.tsx"

# Ver tamanho das pastas
Get-ChildItem | Select-Object Name, @{Name="Size MB";Expression={[math]::Round((Get-ChildItem $_.FullName -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB, 2)}}
```

---

## ✅ VALIDAÇÕES REALIZADAS

### Checkpoint #6 (20/10/2025):
- [x] Componentes criados em `/components/` (correto)
- [x] Páginas em `/app/` (correto)
- [x] Configs na raiz (correto)
- [x] Fontes em `/public/fonts/` (correto)
- [x] Imagens em `/public/images/` (correto)

### Checkpoint atual (23/10/2025):
- [x] Estrutura validada com screenshot
- [x] Todos os paths corrigidos na documentação
- [x] Divergência com PROJECT-GUIDE.md documentada
- [x] Decisão de manter estrutura atual registrada

---

## 🔄 MAPEAMENTO: DOCUMENTAÇÃO vs REALIDADE

| Documento | Diz | Realidade | Status |
|-----------|-----|-----------|--------|
| **PROJECT-GUIDE.md** | `/src/app/` | `/app/` | ⚠️ Diverge |
| **PROJECT-GUIDE.md** | `/src/components/` | `/components/` | ⚠️ Diverge |
| **PROJECT-GUIDE.md** | `/src/lib/` | `/lib/` | ⚠️ Diverge |
| **PROJECT-GUIDE.md** | `/src/types/` | Não existe | ❌ Falta criar |
| **PROJECT-GUIDE.md** | `/src/middleware/` | `middleware.ts` (raiz) | ⚠️ Diverge |
| **CHECKPOINT-6.md** | Criou em `/src/` | Criou na raiz | ⚠️ Doc incorreta |

**Ação:** Este arquivo (`ESTRUTURA-PROJETO.md`) é agora a **FONTE ÚNICA DA VERDADE**

---

## 🎯 PRÓXIMAS AÇÕES

### Imediato:
1. ✅ Estrutura validada e documentada
2. ⏳ Investigar conteúdo de `/server/` e `/static/`
3. ⏳ Decidir se mantém ou remove pastas extras

### Curto prazo:
1. Criar pasta `/types/`
2. Centralizar tipos TypeScript
3. Atualizar imports nos componentes

### Longo prazo:
1. Considerar reestruturação quando projeto crescer
2. Avaliar necessidade de `/src/` futuramente

---

## ⚠️ NOTAS CRÍTICAS

1. **Sempre usar paths corretos:**
   - ✅ `/components/Header.tsx`
   - ❌ `/src/components/Header.tsx`

2. **Ao criar novos arquivos:**
   - Componentes → `/components/`
   - Páginas → `/app/`
   - Utils → `/lib/`
   - Types → `/types/` (quando criar)

3. **Nunca assumir /src/:**
   - Estrutura real não tem essa pasta
   - Sempre validar paths antes de criar arquivos

4. **Este arquivo é a fonte da verdade:**
   - Em caso de dúvida sobre estrutura, consultar aqui
   - Não confiar em PROJECT-GUIDE.md para estrutura de pastas

---

**FIM DO DOCUMENTO DE ESTRUTURA**

**Mantido por:** Claude AI + Thais  
**Atualizar quando:** Criar/remover pastas ou arquivos importantes

