# 📋 PLANO DE CORREÇÕES INCREMENTAIS
## Colégio Tradição de Magia Divina

**Data:** 24/10/2025  
**Baseado em:** DIAGNOSTICO-COMPLETO-PROJETO.md  
**Metodologia:** Correções incrementais com validação a cada etapa

---

## 🎯 FILOSOFIA DO PLANO

### Princípios:
1. ✅ **Uma correção por vez** - Testar antes de próxima
2. ✅ **Commits frequentes** - Git tag a cada 3-5 correções
3. ✅ **Validação obrigatória** - Checklist pós-correção
4. ✅ **Documentação simultânea** - Atualizar CHANGELOG.md

### Estimativa Total:
- **Correções:** 12 identificadas
- **Tempo:** 40-60 horas
- **Duração:** 2-4 semanas (10h/semana)

---

## 📅 CRONOGRAMA SEMANAL

### **SEMANA 1: Fundações Críticas**
**Foco:** Sistema de fontes + Validação de componentes  
**Tempo:** 10 horas  
**Entregas:** globals.css completo + Typography.tsx validado

### **SEMANA 2: Formulário de Afiliação (Parte 1)**
**Foco:** Steps 1-2 do formulário  
**Tempo:** 12 horas  
**Entregas:** Seleção de tipo + Dados pessoais funcionais

### **SEMANA 3: Formulário de Afiliação (Parte 2)**
**Foco:** Steps 3-5 do formulário  
**Tempo:** 18 horas  
**Entregas:** Graus + Upload + Pagamento funcionais

### **SEMANA 4: Páginas Secundárias + Refatoração**
**Foco:** Membros, FAQ, Blog + Estrutura /src/  
**Tempo:** 10 horas  
**Entregas:** Estruturas básicas + Refatoração completa

---

## 🔴 SEMANA 1: FUNDAÇÕES CRÍTICAS

### **DIA 1 - Segunda-feira (2h)**

#### ✅ **CORREÇÃO #1: globals.css - Sistema de Fontes**

**Problema identificado:**
- Arquivo com apenas 7 linhas
- Faltam @font-face com weights
- Faltam classes .font-router-thin, .font-router-medium, .font-router-bold

**Solução:**
```bash
# 1. Backup do arquivo atual
cp app/globals.css backups/globals.css.bak

# 2. Aplicar correção completa
# (Claude gerará arquivo completo)

# 3. Validar fonts
npm run dev
# Abrir http://localhost:3000
# Verificar fontes carregando corretamente
```

**Checklist pós-correção:**
- [ ] Arquivo tem 60+ linhas
- [ ] 5 @font-face para Router (weights 200, 300, 400, 500, 700)
- [ ] 1 @font-face para Kaushan Script
- [ ] 3 classes customizadas (.font-router-thin, medium, bold)
- [ ] Body com gradiente de fundo fixo
- [ ] Testado no navegador (fonts carregam)
- [ ] Commit: "fix: Adiciona sistema completo de fontes (globals.css)"

**Tempo estimado:** 30 minutos

---

#### ✅ **CORREÇÃO #2: Validar Typography.tsx**

**Ação:**
1. Ler `/components/Typography.tsx`
2. Comparar com `DESIGN-SPECS.md` (Checkpoint #10)
3. Se conforme: ✅ Documentar
4. Se NÃO conforme: ❌ Corrigir

**Verificações obrigatórias:**

**H1:**
```tsx
// Esperado
className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-azul-marinho mb-8"
style={{letterSpacing: '-1px'}}
```

**H2:**
```tsx
// Esperado
className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6 mt-12"
```

**H3:**
```tsx
// Esperado (APENAS em cards)
className="text-xl md:text-2xl font-router-bold text-white mb-4"
style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}
```

**P (parágrafo):**
```tsx
// Esperado
className="text-base font-router text-gray-text leading-relaxed"
```

**Checklist pós-validação:**
- [ ] H1 conforme spec
- [ ] H2 conforme spec
- [ ] H3 conforme spec
- [ ] P conforme spec
- [ ] Variantes (size="lg", size="xl") funcionam
- [ ] Commit: "docs: Valida Typography.tsx vs. DESIGN-SPECS.md"
- OU
- [ ] Commit: "fix: Corrige Typography.tsx conforme DESIGN-SPECS.md"

**Tempo estimado:** 1 hora

---

### **DIA 2 - Terça-feira (2h)**

#### ✅ **CORREÇÃO #3: Cards com border-radius: 0**

**Problema identificado:**
- Especificação: "Cards QUADRADOS (border-radius: 0)"
- Código atual: Não especifica explicitamente

**Arquivos afetados:**
- `/app/page.tsx` (3 cards)
- `/app/rubens-saraceni/page.tsx` (possivelmente)
- `/app/sobre-colegio/page.tsx` (possivelmente)
- `/app/magia-divina/page.tsx` (possivelmente)

**Solução:**
```tsx
// ANTES
<div className="bg-lavanda/40 backdrop-blur-sm border border-white/30 p-8 ...">

// DEPOIS
<div className="bg-lavanda/40 backdrop-blur-sm border border-white/30 p-8 ..." style={{borderRadius: 0}}>
```

**Checklist pós-correção:**
- [ ] Identificar TODOS os cards (buscar: "bg-lavanda", "p-8", "p-12")
- [ ] Adicionar `style={{borderRadius: 0}}` em cada card
- [ ] Testar visualmente em http://localhost:3000
- [ ] Cards aparecem completamente quadrados
- [ ] Commit: "fix: Adiciona border-radius: 0 em todos os cards"

**Tempo estimado:** 30 minutos

---

#### ✅ **CORREÇÃO #4: Gerar Mockup HTML para Aprovação**

**Objetivo:**
- Validar hierarquia visual H1/H2/H3
- Confirmar cores e weights
- Aprovar antes de continuar

**Ação:**
```bash
# Claude gerará mockup-aprovacao-hierarquia.html
# Com exemplos de:
# - H1 azul-marinho thin
# - H2 azul-escuro thin
# - H3 branco bold (em cards)
# - Texto cinza regular
```

**Checklist:**
- [ ] Mockup HTML gerado
- [ ] Aberto no navegador
- [ ] Thais aprova visualmente
- [ ] Screenshot salvo em /outputs/
- [ ] Commit: "docs: Mockup de aprovação da hierarquia tipográfica"

**Tempo estimado:** 1 hora

---

### **DIA 3 - Quarta-feira (2h)**

#### ✅ **CHECKPOINT #11 - Primeiro Checkpoint da Correção**

**Ação:**
```bash
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"

# 1. Status
git status

# 2. Adicionar tudo
git add .

# 3. Commit consolidado
git commit -m "chore: Checkpoint #11 - Correções de fontes e tipografia

- fix: Sistema completo de fontes em globals.css
- docs: Validação de Typography.tsx vs. DESIGN-SPECS.md
- fix: Cards com border-radius: 0 explícito
- docs: Mockup de aprovação da hierarquia tipográfica

Conforme DIAGNOSTICO-COMPLETO-PROJETO.md (24/10/2025)
Correções #1-4 implementadas e validadas"

# 4. Criar tag
git tag checkpoint-11

# 5. Push
git push origin main
git push origin checkpoint-11
```

**Atualizar documentação:**
```markdown
# CHECKPOINTS-HISTORICO.md
## Checkpoint #11 (24/10/2025)
**Tema:** Correções de Fontes e Tipografia

**Correções:**
- ✅ #1: Sistema completo de fontes (globals.css)
- ✅ #2: Validação Typography.tsx
- ✅ #3: Cards border-radius: 0
- ✅ #4: Mockup de aprovação

**Status:** ✅ Concluído e validado
```

**Checklist:**
- [ ] Git commit feito
- [ ] Git tag checkpoint-11 criada
- [ ] Push para GitHub
- [ ] CHECKPOINTS-HISTORICO.md atualizado
- [ ] CHANGELOG.md atualizado

**Tempo estimado:** 30 minutos

---

#### ✅ **CORREÇÃO #5: Validar Componentes Header e Footer**

**Ação:**
1. Ler `/components/Header.tsx`
2. Ler `/components/HeaderHome.tsx`
3. Ler `/components/Footer.tsx`
4. Comparar com especificações

**Verificações:**

**HeaderHome:**
- [ ] Logo 200x200px sem texto
- [ ] Nome do colégio em Kaushan Script
- [ ] Visual impactante

**Header:**
- [ ] Logo horizontal (Logo_Horizontal_Cores_01.svg)
- [ ] Menu à direita
- [ ] Links: Home, Sobre, Rubens, Magia Divina, Membros, FAQ, Blog, Afilie-se, Login
- [ ] Indicador de página atual (`bg-lavanda/30` se ativo)
- [ ] Hover com efeito

**Footer:**
- [ ] Fundo azul-marinho (#1B223F)
- [ ] Links em branco/lilás claro
- [ ] Informações de contato
- [ ] Copyright

**Checklist pós-validação:**
- [ ] Componentes conformes OU
- [ ] Lista de correções necessárias criada
- [ ] Commit se conforme: "docs: Valida Header e Footer vs. specs"

**Tempo estimado:** 1,5 horas

---

### **DIA 4-5 - Quinta/Sexta (4h total)**

#### ✅ **CORREÇÃO #6: Análise e Validação de TODAS as Páginas**

**Objetivo:** Identificar TODAS as divergências antes de corrigir

**Páginas a analisar:**
1. `/app/page.tsx` (Home)
2. `/app/sobre-colegio/page.tsx`
3. `/app/rubens-saraceni/page.tsx`
4. `/app/magia-divina/page.tsx`
5. `/app/membros/page.tsx`
6. `/app/faq/page.tsx`
7. `/app/blog/page.tsx`
8. `/app/afilie-se/page.tsx`

**Para cada página, verificar:**
- [ ] H1, H2, H3 com cores/weights corretos
- [ ] Cards com `border-radius: 0`
- [ ] Paleta de cores oficial
- [ ] Glass morphism aplicado corretamente
- [ ] Sombras padronizadas
- [ ] Responsividade (4 breakpoints)

**Gerar relatório:**
```markdown
# RELATORIO-ANALISE-PAGINAS.md

## Página: /

### Conforme:
- ✅ Paleta de cores
- ✅ Glass morphism

### Divergências:
- ⚠️ H3 não explicitamente branco em cards
- ⚠️ border-radius não especificado

---

## Página: /sobre-colegio

### Conforme:
- ...

### Divergências:
- ...
```

**Checklist:**
- [ ] Todas 8 páginas analisadas
- [ ] Relatório gerado
- [ ] Lista consolidada de correções
- [ ] Commit: "docs: Relatório de análise de todas as páginas"

**Tempo estimado:** 4 horas

---

## 🟠 SEMANA 2: FORMULÁRIO DE AFILIAÇÃO (PARTE 1)

### **DIA 6-7 - Segunda/Terça (6h total)**

#### ✅ **IMPLEMENTAÇÃO #1: /afilie-se - Step 1 (Tipo de Afiliação)**

**Especificação:** `FEATURES-SPEC.md` (linhas 48-89)

**Componentes a criar:**
1. `/app/afilie-se/components/StepIndicator.tsx`
2. `/app/afilie-se/components/Step1TipoAfiliacao.tsx`
3. `/app/afilie-se/context/AfiliacaoContext.tsx` (estado global)

**Funcionalidades:**
- [ ] Card "Mago Iniciador" (R$250/ano)
- [ ] Card "Mago Iniciado" (R$200/ano)
- [ ] Seleção visual (border highlight)
- [ ] Botão "Próximo" habilitado apenas se selecionado
- [ ] Navegação entre steps

**Checklist pós-implementação:**
- [ ] Step 1 funcional
- [ ] Seleção visual clara
- [ ] Navegação funciona
- [ ] Responsivo em 4 breakpoints
- [ ] Commit: "feat: Implementa Step 1 do formulário de afiliação"
- [ ] Testado localmente

**Tempo estimado:** 6 horas

---

### **DIA 8-10 - Quarta/Quinta/Sexta (6h total)**

#### ✅ **IMPLEMENTAÇÃO #2: /afilie-se - Step 2 (Dados Pessoais)**

**Especificação:** `FEATURES-SPEC.md` (linhas 90-156)

**Componentes a criar:**
1. `/app/afilie-se/components/Step2DadosPessoais.tsx`
2. `/lib/validations/cpf.ts`
3. `/lib/validations/email.ts`
4. `/lib/api/viacep.ts`

**Funcionalidades:**
- [ ] Form com react-hook-form + zod
- [ ] Campos: Nome, CPF, Email, Telefone, Endereço completo
- [ ] Máscaras (CPF, CEP, Telefone)
- [ ] CEP automático (ViaCEP)
- [ ] Validação em tempo real
- [ ] Estados: select searchable (React-Select)
- [ ] Cidades: carregadas via API IBGE

**Checklist pós-implementação:**
- [ ] Step 2 funcional
- [ ] Validações funcionam
- [ ] CEP preenche endereço automaticamente
- [ ] Responsivo em 4 breakpoints
- [ ] Commit: "feat: Implementa Step 2 (dados pessoais) com CEP automático"
- [ ] Testado localmente

**Tempo estimado:** 6 horas

---

## 🟠 SEMANA 3: FORMULÁRIO DE AFILIAÇÃO (PARTE 2)

### **DIA 11-13 - Segunda/Terça/Quarta (9h total)**

#### ✅ **IMPLEMENTAÇÃO #3: /afilie-se - Step 3 (Graus de Magia)**

**Especificação:** `FEATURES-SPEC.md` (linhas 157-234)

**Componentes a criar:**
1. `/app/afilie-se/components/Step3GrausMagia.tsx`
2. `/app/afilie-se/components/GrauMagiaCard.tsx` (29x)
3. `/lib/data/graus-magia.ts` (lista dos 29 graus)

**Funcionalidades:**
- [ ] Grid com 29 graus
- [ ] Checkbox + campo de data para cada grau
- [ ] Data de conclusão obrigatória se checkbox marcado
- [ ] Validação: pelo menos 1 grau selecionado
- [ ] Visual elegante (cards com ícones)
- [ ] Sistema de títulos automático:
  - 1-6 graus: "Mago"
  - 7-20 graus: "Mago do Arco Íris"
  - 21+ graus: "Mestre Mago"

**Checklist pós-implementação:**
- [ ] Step 3 funcional
- [ ] 29 graus exibidos
- [ ] Seleção + data funciona
- [ ] Títulos calculados corretamente
- [ ] Responsivo em 4 breakpoints
- [ ] Commit: "feat: Implementa Step 3 (29 graus de magia) com sistema de títulos"
- [ ] Testado localmente

**Tempo estimado:** 9 horas

---

### **DIA 14-16 - Quinta/Sexta/Sábado (9h total)**

#### ✅ **IMPLEMENTAÇÃO #4: /afilie-se - Step 4 (Upload de Documentos)**

**Especificação:** `FEATURES-SPEC.md` (linhas 235-315)

**Componentes a criar:**
1. `/app/afilie-se/components/Step4Upload.tsx`
2. `/app/api/upload/route.ts` (API route)
3. `/lib/upload/compress.ts` (sharp + pdf-lib)
4. `/lib/upload/sftp.ts` (ssh2-sftp-client)

**Funcionalidades:**
- [ ] Drag & Drop + Click
- [ ] Upload foto (obrigatório)
- [ ] Upload CPF/documento (obrigatório)
- [ ] Upload certificados (1 por grau selecionado)
- [ ] Compressão automática (imagens: 80%, PDFs: compress)
- [ ] Preview inline
- [ ] Tags: "chamas", "pedras", etc
- [ ] Nomenclatura: `{CPF}_{grau1}_{grau2}_{...}.pdf`
- [ ] Validação: todos graus cobertos por certificados

**Checklist pós-implementação:**
- [ ] Step 4 funcional
- [ ] Upload SFTP funciona
- [ ] Compressão reduz 70-80%
- [ ] Preview funciona
- [ ] Validação de cobertura OK
- [ ] Responsivo em 4 breakpoints
- [ ] Commit: "feat: Implementa Step 4 (upload com compressão automática)"
- [ ] Testado localmente

**Tempo estimado:** 9 horas

---

## 🟡 SEMANA 4: CONCLUSÃO E REFATORAÇÃO

### **DIA 17-18 - Segunda/Terça (6h total)**

#### ✅ **IMPLEMENTAÇÃO #5: /afilie-se - Step 5 (Pagamento)**

**Especificação:** `FEATURES-SPEC.md` (linhas 316-386)

**Componentes a criar:**
1. `/app/afilie-se/components/Step5Pagamento.tsx`
2. `/app/api/pagamento/criar/route.ts`
3. `/app/api/pagamento/webhook/route.ts`
4. `/lib/mercadopago/client.ts`

**Funcionalidades:**
- [ ] Resumo da afiliação
- [ ] Valor correto (R$200 ou R$250)
- [ ] Botão "Pagar com Mercado Pago"
- [ ] Preferência de pagamento criada
- [ ] Redirect para MP
- [ ] Webhook processa pagamento aprovado
- [ ] Cria usuário Supabase
- [ ] Salva dados MySQL
- [ ] Envia email confirmação

**Checklist pós-implementação:**
- [ ] Step 5 funcional
- [ ] Pagamento sandbox testado
- [ ] Webhook funcionando
- [ ] Dados salvos no banco
- [ ] Email enviado
- [ ] Commit: "feat: Implementa Step 5 (pagamento Mercado Pago)"
- [ ] Testado em sandbox

**Tempo estimado:** 6 horas

---

### **DIA 19 - Quarta (2h)**

#### ✅ **CHECKPOINT #12 - Formulário Completo**

**Ação:**
```bash
git add .
git commit -m "feat: Formulário de afiliação completo (Steps 1-5)

- Step 1: Tipo de afiliação
- Step 2: Dados pessoais + CEP automático
- Step 3: 29 graus de magia + títulos
- Step 4: Upload com compressão automática
- Step 5: Pagamento Mercado Pago

Conforme FEATURES-SPEC.md
Funcionalidade principal 100% implementada"

git tag checkpoint-12
git push origin main
git push origin checkpoint-12
```

**Atualizar documentação:**
- [ ] CHECKPOINTS-HISTORICO.md
- [ ] CHANGELOG.md
- [ ] PROGRESS-TRACKING.md

**Tempo estimado:** 1 hora

---

### **DIA 20 - Quinta (2h)**

#### ✅ **IMPLEMENTAÇÃO #6-8: Páginas Secundárias (Estrutura Básica)**

**Páginas:**
1. `/membros` - Lista básica (sem busca avançada por CEP ainda)
2. `/faq` - Accordion simples
3. `/blog` - Lista de posts placeholder

**Abordagem:**
- Implementar estrutura MÍNIMA funcional
- Melhorar incrementalmente depois
- Remover "Em desenvolvimento"

**Checklist:**
- [ ] `/membros` tem lista
- [ ] `/faq` tem accordion
- [ ] `/blog` tem estrutura
- [ ] Commit: "feat: Estrutura básica de membros, faq e blog"

**Tempo estimado:** 2 horas

---

### **DIA 21 - Sexta (opcional - se tiver tempo)**

#### ⚠️ **REFATORAÇÃO #1: /app/ → /src/app/**

**AVISO:** Quebra imports temporariamente!

**Passos:**
```bash
# 1. Criar /src/
mkdir src

# 2. Mover /app/
mv app src/

# 3. Mover /components/
mv components src/

# 4. Atualizar imports (busca e substitui)
# De: '@/components/...' ou '../components/...'
# Para: '@/components/...' (mesmo caminho, tsconfig resolve)

# 5. Atualizar tsconfig.json paths
# 6. Testar build
npm run build

# 7. Se OK, commit
git commit -m "refactor: Reestrutura projeto (/app → /src/app)"
```

**Checklist:**
- [ ] Pasta /src/ criada
- [ ] /app/ movido para /src/app/
- [ ] /components/ movido para /src/components/
- [ ] Imports atualizados
- [ ] Build funciona
- [ ] Commit feito

**Tempo estimado:** 3 horas (SE tiver tempo)

---

## 📊 RESUMO DO PLANO

### Correções Totais: 12
1. ✅ globals.css (fontes)
2. ✅ Typography.tsx (validação)
3. ✅ Cards border-radius: 0
4. ✅ Mockup aprovação
5. ✅ Header/Footer validação
6. ✅ Análise de páginas
7. ✅ Step 1 (tipo afiliação)
8. ✅ Step 2 (dados pessoais)
9. ✅ Step 3 (graus magia)
10. ✅ Step 4 (upload)
11. ✅ Step 5 (pagamento)
12. ✅ Páginas secundárias
13. ⚠️ Refatoração /src/ (opcional)

### Checkpoints: 2
- Checkpoint #11 (Dia 3)
- Checkpoint #12 (Dia 19)

### Tempo Total Estimado: 46-56 horas
- Semana 1: 10h
- Semana 2: 12h
- Semana 3: 18h
- Semana 4: 6-10h

---

## ✅ VALIDAÇÃO FINAL

**Após TODAS as correções:**

### Checklist Pré-Deploy:
- [ ] UTF-8 validado (testar: São, José, Tradição)
- [ ] Paleta oficial 100% aplicada
- [ ] Responsivo em 320px, 768px, 1024px, 1440px
- [ ] Fontes com weights corretos
- [ ] Formulário afiliação 100% funcional
- [ ] Páginas secundárias com estrutura básica
- [ ] Build sem erros (`npm run build`)
- [ ] Documentação atualizada
- [ ] CHANGELOG.md completo

### Deploy:
```bash
git push origin main
# Vercel fará deploy automático
# Testar em: https://colegio-magia-divina.vercel.app
```

---

**FIM DO PLANO DE CORREÇÕES INCREMENTAIS**

**Próximos passos:** Iniciar Semana 1 - Dia 1 - Correção #1 (globals.css)
