# ✅ PRE-RELEASE-CHECKLIST.md

**Projeto:** Site Colégio Tradição de Magia Divina  
**Última atualização:** 2025-10-15

> 🚨 **OBRIGATÓRIO:** Claude DEVE seguir este checklist ANTES de gerar qualquer release.  
> Nenhuma release pode ser entregue sem TODOS os itens marcados como ✅.

---

## 📚 FASE 1: LEITURA OBRIGATÓRIA

**Objetivo:** Garantir contexto completo antes de implementar

- [ ] **1.1** Li o arquivo `DECISIONS.md` completamente
- [ ] **1.2** Li o arquivo `ERRORS.md` para evitar erros recorrentes
- [ ] **1.3** Li o `CHANGELOG.md` das últimas 3 releases
- [ ] **1.4** Revisei as conversas anteriores sobre os requisitos desta release
- [ ] **1.5** Identifiquei todas as decisões técnicas relacionadas aos requisitos

**⚠️ BLOQUEANTE:** Se qualquer item acima não estiver marcado, NÃO prosseguir.

---

## 🔍 FASE 2: ANÁLISE DE MUDANÇAS

**Objetivo:** Mapear TODAS as mudanças planejadas e identificar conflitos

- [ ] **2.1** Listei TODAS as mudanças que vou implementar
- [ ] **2.2** Verifiquei se alguma mudança afeta decisões em DECISIONS.md
- [ ] **2.3** Identifiquei mudanças que podem ser polêmicas ou não óbvias
- [ ] **2.4** Preparei justificativa para cada mudança proposta

**Se encontrei mudanças que afetam DECISIONS.md:**
- [ ] **2.5** Avisei o usuário EXPLICITAMENTE sobre cada mudança
- [ ] **2.6** Expliquei o MOTIVO de cada mudança
- [ ] **2.7** Aguardei APROVAÇÃO EXPLÍCITA do usuário
- [ ] **2.8** Documentei aprovação antes de prosseguir

**⚠️ BLOQUEANTE:** Se mudanças não foram aprovadas, NÃO prosseguir.

---

## 🎨 FASE 3: DECISÃO DE MOCKUP

**Objetivo:** Determinar se mockup é necessário baseado na análise de custo/benefício

### **Fazer MOCKUP se:**
- [ ] **3.1** Mudanças visuais (layout, cores, fontes, espaçamento)
- [ ] **3.2** Nova página ou seção importante
- [ ] **3.3** Novo formulário ou componente interativo complexo
- [ ] **3.4** Múltiplas alterações visuais na mesma release
- [ ] **3.5** Qualquer coisa que o usuário precise "ver" para aprovar

### **Pular MOCKUP se:**
- [ ] **3.6** Correção de bug pontual em lógica (não visual)
- [ ] **3.7** Mudança apenas em backend/API
- [ ] **3.8** Ajuste de texto/conteúdo simples sem mudança de layout
- [ ] **3.9** Correção de validação de campo (sem mudança visual)

**Decisão:**
- [ ] **MOCKUP NECESSÁRIO** → Ir para FASE 4
- [ ] **MOCKUP NÃO NECESSÁRIO** → Pular para FASE 5

---

## 🖼️ FASE 4: GERAÇÃO E APROVAÇÃO DE MOCKUP

**Objetivo:** Validar mudanças visuais ANTES de gerar código complexo

### **4.1 Gerar Mockup HTML Standalone**
- [ ] Criar arquivo HTML completo e independente
- [ ] Incluir CSS inline ou em `<style>`
- [ ] Usar CDN para bibliotecas (sem node_modules)
- [ ] Simular dados realistas no mockup
- [ ] Testar que mockup abre sem erros no navegador

### **4.2 Características do Mockup**
- [ ] Paleta de cores oficial aplicada
- [ ] Fontes corretas (Kaushan Script + Router)
- [ ] Responsivo (testar em 320px, 768px, 1024px, 1440px)
- [ ] Encoding UTF-8 correto (testar: São, José, Tradução)
- [ ] Interatividade básica (se aplicável - JavaScript simples)

### **4.3 Entrega do Mockup**
- [ ] Salvei mockup em `/mnt/user-data/outputs/mockup-vX.X.X.html`
- [ ] Forneci link para o usuário baixar
- [ ] Expliquei o que foi implementado no mockup
- [ ] Listei o que o usuário deve validar

### **4.4 Aguardar Aprovação**
- [ ] Usuário baixou e testou o mockup
- [ ] Usuário aprovou o mockup
- [ ] Se reprovou: implementei ajustes e repeti 4.1-4.4

**⚠️ BLOQUEANTE:** Se mockup não foi aprovado, NÃO gerar release final.

---

## 💻 FASE 5: GERAÇÃO DO CÓDIGO FINAL

**Objetivo:** Implementar release final com base em requisitos e mockup aprovado

### **5.1 Implementação**
- [ ] Implementei EXATAMENTE o que foi aprovado no mockup (se aplicável)
- [ ] Segui todas as decisões em DECISIONS.md
- [ ] Apliquei a paleta de cores oficial
- [ ] Usei as fontes corretas (Kaushan Script + Router)
- [ ] Encoding UTF-8 em todos os arquivos

### **5.2 Código Limpo**
- [ ] Código bem organizado e comentado
- [ ] Sem console.log() ou código de debug
- [ ] Sem código comentado desnecessário
- [ ] Imports organizados

### **5.3 Validações Técnicas**
- [ ] Máscaras de entrada funcionando (se aplicável)
- [ ] Validações de formulário implementadas (se aplicável)
- [ ] CEP automático configurado (se aplicável)
- [ ] Upload de arquivos com validações de segurança (se aplicável)

---

## 🧪 FASE 6: TESTES LOCAIS (Claude)

**Objetivo:** Garantir que código funciona ANTES de entregar

- [ ] **6.1** Testei código localmente (se possível no ambiente Claude)
- [ ] **6.2** Verifiquei que não há erros de sintaxe
- [ ] **6.3** Validei que imports estão corretos
- [ ] **6.4** Confirmei que componentes críticos estão funcionais
- [ ] **6.5** Verifiquei console do navegador (sem erros JavaScript)

**Se não consegui testar localmente:**
- [ ] **6.6** Revisei código cuidadosamente linha por linha
- [ ] **6.7** Verifiquei padrões de erro em ERRORS.md
- [ ] **6.8** Confirmei que não cometi erros similares aos catalogados

---

## 📦 FASE 7: PREPARAÇÃO DA RELEASE

**Objetivo:** Empacotar release de forma otimizada e segura

### **7.1 Estrutura de Arquivos**
- [ ] Estrutura de pastas correta
- [ ] Todos os arquivos necessários incluídos
- [ ] `.gitignore` presente e correto
- [ ] `package.json` com dependências corretas

### **7.2 Otimização**
- [ ] Imagens otimizadas (WebP quando possível)
- [ ] Tamanho total < 95MB
- [ ] Nenhum arquivo individual > 50MB
- [ ] Sem `node_modules/` na release
- [ ] Sem `.next/` na release
- [ ] Sem arquivos de log ou temporários

### **7.3 Segurança**
- [ ] Sem credenciais ou senhas no código
- [ ] Sem dados sensíveis expostos
- [ ] `.gitignore` protegendo arquivos críticos
- [ ] Validações de upload implementadas

---

## 📝 FASE 8: DOCUMENTAÇÃO

**Objetivo:** Atualizar documentação para manter contexto

### **8.1 CHANGELOG.md**
- [ ] Adicionei seção para esta versão (vX.X.X)
- [ ] Listei TUDO que foi adicionado
- [ ] Listei TUDO que foi modificado
- [ ] Listei TUDO que foi corrigido
- [ ] Documentei MOTIVO de cada mudança importante
- [ ] Listei problemas conhecidos (se houver)
- [ ] Adicionei notas técnicas relevantes

### **8.2 DECISIONS.md**
- [ ] Adicionei novas decisões técnicas (se houver)
- [ ] Atualizei decisões modificadas (com histórico)

### **8.3 ERRORS.md**
- [ ] Atualizei status de erros corrigidos
- [ ] Adicionei lições aprendidas desta release

### **8.4 README.md (se necessário)**
- [ ] Atualizei instruções de instalação
- [ ] Atualizei documentação de features
- [ ] Adicionei screenshots (se aplicável)

---

## 🚀 FASE 9: ENTREGA FINAL

**Objetivo:** Entregar release com instruções claras

### **9.1 Arquivo ZIP**
- [ ] Criei arquivo `release-vX.X.X.zip` otimizado
- [ ] Salvei em `/mnt/user-data/outputs/`
- [ ] Testei que ZIP extrai corretamente

### **9.2 Instruções de Deploy**
- [ ] Forneci comandos de instalação (máximo 3 comandos)
- [ ] Instruções claras e testáveis
- [ ] Mencionei tempo estimado de instalação

### **9.3 Comunicação com Usuário**
- [ ] Expliquei o que foi implementado
- [ ] Listei mudanças importantes
- [ ] Avisei sobre breaking changes (se houver)
- [ ] Forneci link para download
- [ ] Pedi feedback específico sobre o que testar

---

## ✅ VALIDAÇÃO FINAL

Antes de marcar este checklist como completo:

- [ ] **TODOS** os itens obrigatórios estão marcados
- [ ] **TODAS** as aprovações necessárias foram obtidas
- [ ] **TODA** a documentação foi atualizada
- [ ] Estou **CONFIANTE** que esta release funciona

**Taxa de confiança nesta release:** ___% (meta: > 90%)

---

## 🚨 SE ALGUM ITEM NÃO ESTIVER MARCADO

**NÃO GERE A RELEASE!**

Em vez disso:
1. Identifique o que está faltando
2. Complete o item pendente
3. Volte e marque o item
4. Continue o checklist

---

## 📊 MÉTRICAS DE QUALIDADE

Para acompanhar evolução:

- **Checklist completo:** Sim / Não
- **Mockup gerado:** Sim / Não / Não aplicável
- **Mockup aprovado na 1ª tentativa:** Sim / Não / N/A
- **Erros encontrados pelo usuário:** [número]
- **Taxa de erro:** [%]

**Meta:** Taxa de erro < 10%

---

## 💡 LEMBRETE FINAL

> Este checklist existe para:
> 1. ✅ Evitar repetir erros do passado
> 2. ✅ Economizar tempo e créditos de IA
> 3. ✅ Entregar releases de alta qualidade
> 4. ✅ Manter confiança e fluidez no projeto
> 
> **Seguir este checklist rigorosamente = Sucesso do projeto** 🎯

---

**Última atualização:** 2025-10-15  
**Próxima revisão:** Após feedback da primeira release com este checklist
