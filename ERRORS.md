# 🐛 ERRORS.md - Catálogo de Erros e Lições Aprendidas

**Projeto:** Site Colégio Tradição de Magia Divina  
**Última atualização:** 2025-10-15

> 📚 **Propósito:** Documentar TODOS os erros cometidos para garantir que nunca se repitam.  
> Cada erro deve ter: descrição, causa raiz, solução permanente e status.

---

## 📊 ESTATÍSTICAS

- **Total de erros catalogados:** 2
- **Erros resolvidos:** 0
- **Erros em correção:** 2
- **Taxa de erro atual:** 100% (v3.1)
- **Meta:** < 10%

---

## 🔴 ERROS ATIVOS (Pendentes de Correção)

### **ERRO-001: Fonte alterada sem autorização**

**ID:** ERR-001  
**Data:** 2025-10-15  
**Release:** v3.1.0  
**Severidade:** 🔴 ALTA (Quebra identidade visual)  
**Status:** 🔴 Pendente de correção

**Descrição:**
- Fonte Kaushan Script foi substituída por outra fonte no título principal
- Mudança feita sem consultar DECISIONS.md
- Mudança feita sem avisar ou pedir aprovação do usuário

**Impacto:**
- Perda da identidade visual aprovada
- Usuário precisou reportar o erro
- Perda de confiança no processo

**Causa Raiz:**
- Claude não consultou DECISIONS.md antes de implementar
- Não houve checklist de validação pré-release
- Não houve mockup para aprovação visual prévia

**Como o erro foi descoberto:**
- Usuário testou release localmente e identificou visualmente

**Solução Permanente Implementada:**
1. ✅ Criar DECISIONS.md com fonte especificada
2. ✅ Adicionar checklist obrigatório que força leitura de DECISIONS.md
3. ✅ Workflow com mockup obrigatório para mudanças visuais
4. ⏳ Claude deve SEMPRE avisar se mudança afeta decisão anterior

**Correção para v3.1.1:**
- Restaurar Kaushan Script no título
- Validar em mockup HTML antes da release
- Documentar no CHANGELOG

**Lição Aprendida:**
> ⚠️ NUNCA alterar decisões de design (fontes, cores, layout) sem:
> 1. Consultar DECISIONS.md
> 2. Avisar usuário explicitamente
> 3. Obter aprovação antes de implementar

---

### **ERRO-002: Formulário de afiliação quebrado ao clicar**

**ID:** ERR-002  
**Data:** 2025-10-15  
**Release:** v3.1.0  
**Severidade:** 🔴 CRÍTICA (100% da funcionalidade inacessível)  
**Status:** 🔴 Pendente de investigação

**Descrição:**
- Ao clicar em qualquer tipo de afiliação (Iniciador ou Iniciado), ocorre erro
- Erro impede acesso a TODO o formulário
- Usuário não conseguiu testar nenhuma funcionalidade implementada

**Impacto:**
- 100% da nova funcionalidade inacessível
- Impossível validar se outras implementações estão corretas
- Taxa de erro da release: 100%
- Perda de tempo e créditos de IA

**Causa Raiz:**
- ⏳ A INVESTIGAR (erro JavaScript não identificado)
- Possíveis causas:
  - Import incorreto de componente
  - Função onClick mal configurada
  - Estado (state) não inicializado
  - Erro de sintaxe em JSX
  - Dependência faltando

**Como o erro foi descoberto:**
- Usuário testou release localmente
- Erro apareceu imediatamente ao tentar usar funcionalidade principal

**Solução Permanente (A IMPLEMENTAR):**
1. ⏳ Investigar erro específico no console do navegador
2. ⏳ Testar componente isoladamente antes de integrar
3. ⏳ Adicionar error boundaries no React
4. ⏳ Implementar testes unitários para componentes críticos
5. ⏳ Validação funcional obrigatória antes de gerar release

**Correção para v3.1.1:**
- ⏳ Identificar erro no console (F12)
- ⏳ Corrigir código
- ⏳ Testar em mockup funcional
- ⏳ Validar antes de release final

**Lição Aprendida:**
> ⚠️ NUNCA entregar release sem:
> 1. Testar funcionalidade principal localmente
> 2. Verificar console do navegador (F12) em busca de erros
> 3. Validar que componentes interativos funcionam
> 
> **ADICIONAR AO WORKFLOW:** Teste funcional obrigatório antes da release

---

## ✅ ERROS RESOLVIDOS (Histórico)

_Nenhum erro resolvido ainda. Esta seção será preenchida conforme corrigimos os erros catalogados._

---

## 📋 TEMPLATE PARA NOVOS ERROS

```markdown
### **ERRO-XXX: [Título breve do erro]**

**ID:** ERR-XXX  
**Data:** YYYY-MM-DD  
**Release:** vX.X.X  
**Severidade:** 🔴 CRÍTICA / 🟡 ALTA / 🟢 MÉDIA / ⚪ BAIXA  
**Status:** 🔴 Pendente / 🟡 Em correção / ✅ Resolvido

**Descrição:**
- O que aconteceu exatamente
- Comportamento observado vs esperado

**Impacto:**
- Como afetou o usuário
- Funcionalidades comprometidas
- Tempo/recursos perdidos

**Causa Raiz:**
- Por que o erro aconteceu
- Qual processo falhou

**Como o erro foi descoberto:**
- Quem encontrou
- Em que momento do processo

**Solução Permanente Implementada:**
1. Mudança no processo
2. Mudança no código
3. Mudança na documentação

**Correção:**
- O que foi feito para corrigir
- Em qual release foi resolvido

**Lição Aprendida:**
> Resumo do aprendizado para evitar recorrência
```

---

## 📈 CATEGORIAS DE ERROS

### **Por Tipo:**
- **Design/Visual:** 1 erro (ERR-001)
- **Funcional/Lógica:** 1 erro (ERR-002)
- **Performance:** 0 erros
- **Segurança:** 0 erros
- **Deploy/Infraestrutura:** 0 erros

### **Por Severidade:**
- 🔴 **CRÍTICA:** 1 (ERR-002)
- 🟡 **ALTA:** 1 (ERR-001)
- 🟢 **MÉDIA:** 0
- ⚪ **BAIXA:** 0

### **Por Causa Raiz:**
- **Falta de validação:** 2 (ERR-001, ERR-002)
- **Falta de documentação:** 1 (ERR-001)
- **Falta de testes:** 1 (ERR-002)
- **Erro de código:** 1 (ERR-002 - a confirmar)

---

## 🎯 PLANO DE AÇÃO

### **Imediato (v3.1.1):**
1. ✅ Catalogar erros da v3.1
2. ⏳ Investigar ERR-002 (erro do formulário)
3. ⏳ Corrigir ERR-001 (fonte) e ERR-002
4. ⏳ Testar correções em mockup
5. ⏳ Validar funcionalmente antes da release

### **Curto Prazo:**
1. ⏳ Implementar checklist obrigatório
2. ⏳ Adicionar testes funcionais ao workflow
3. ⏳ Criar processo de validação visual e funcional
4. ⏳ Meta: Reduzir taxa de erro para < 30%

### **Médio Prazo:**
1. ⏳ Implementar testes automatizados
2. ⏳ Error boundaries em componentes críticos
3. ⏳ Validação contínua em CI/CD
4. ⏳ Meta: Reduzir taxa de erro para < 10%

---

## 💡 PREVENÇÃO DE ERROS

### **Checklist Pré-Release (Obrigatório):**
- [ ] Ler DECISIONS.md completamente
- [ ] Ler ERRORS.md (este arquivo)
- [ ] Gerar mockup para mudanças visuais
- [ ] Testar funcionalidade principal localmente
- [ ] Verificar console do navegador (F12)
- [ ] Validar encoding UTF-8
- [ ] Verificar responsividade
- [ ] Atualizar CHANGELOG.md

### **Sinais de Alerta:**
- ⚠️ Mudança em fonte/cores sem mencionar DECISIONS.md
- ⚠️ Código não testado localmente antes da release
- ⚠️ Formulário/componente interativo sem validação funcional
- ⚠️ Release sem mockup para mudanças visuais
- ⚠️ Alteração em decisões anteriores sem avisar usuário

---

**Última atualização:** 2025-10-15  
**Próxima revisão:** Após cada correção ou nova release
