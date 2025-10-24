# INSTRUÇÕES PERMANENTES PARA CLAUDE - COLÉGIO TRADIÇÃO

**Última atualização:** 23/10/2025 - Instruções Otimizadas com Acessos Diretos

---

## 🔐 CONTEXTO DO PROJETO

Este é um site institucional para o **Colégio Tradição de Magia Divina**.

**Stack tecnológica:**
- Next.js 14
- TypeScript
- Tailwind CSS
- Hospedagem: Vercel
- Versionamento: GitHub

**Usuária:** Thais (não sabe programar, não é designer)

**Objetivo:** Criar site profissional com código limpo e manutenível.

---

## 🚀 INÍCIO DE CADA CONVERSA (AUTOMÁTICO)

**Você DEVE fazer automaticamente SEMPRE:**

### 1️⃣ VERIFICAÇÃO INICIAL

```typescript
async function iniciarConversa() {
  // 1. Ler documentação local
  await lerArquivo('WORKFLOW.md');
  await lerArquivo('CLAUDE-INSTRUCTIONS.md');
  await lerArquivo('DECISIONS.md');
  await lerArquivo('ARCHITECTURE.md');
  
  // 2. Verificar Git
  await executar('git status');
  await executar('git log --oneline -5');
  
  // 3. Buscar contexto
  await conversationSearch('checkpoint magia divina');
  
  // 4. Informar status
  mostrarVerificacaoInicial();
}
```

### 2️⃣ FORMATO DE RESPOSTA INICIAL

```markdown
🔍 VERIFICAÇÃO INICIAL DO PROJETO

1. Lendo documentação local...
   ✅ WORKFLOW.md
   ✅ CLAUDE-INSTRUCTIONS.md
   ✅ DECISIONS.md
   ✅ ARCHITECTURE.md

2. Verificando estado do Git...
   ✅ Branch: main
   ✅ Último commit: a1b2c3d - "Descrição"
   ✅ Arquivos modificados: 0

3. Buscando contexto anterior...
   ✅ Última conversa: 23/10/2025
   ✅ Checkpoint ativo: #10

4. Pronto para trabalhar! 🚀

Como posso ajudar hoje?
```

---

## ⚠️ REGRAS ABSOLUTAS

### 🔍 ANTES DE QUALQUER RESPOSTA QUE ENVOLVA CÓDIGO:

**Você DEVE (nesta ordem):**

1. ✅ Ler documentação relevante (SEMPRE arquivos LOCAIS)
2. ✅ Verificar estado atual do Git
3. ✅ Buscar decisões anteriores (conversation_search)
4. ✅ Identificar todos os arquivos afetados
5. ✅ Apresentar plano de execução
6. ✅ **AGUARDAR aprovação explícita de Thais**

**Ferramentas para usar:**
- `Filesystem:read_file` (não `view`) - Ler docs e código locais
- `bash_tool` - Comandos Git
- `conversation_search` - Histórico

### 📝 FORMATO DO PLANO

```markdown
## 📋 ANÁLISE DA SOLICITAÇÃO

**Pedido:** [resumo do que Thais pediu]

**Arquivos que vou modificar:**
- `/src/components/Header.tsx` (linha ~45-52)
- `/src/app/page.tsx` (linha ~12)

**O que exatamente vou mudar:**
1. [mudança específica 1]
2. [mudança específica 2]

**Possíveis impactos:**
- [impacto 1]
- [impacto 2]

**Conflitos com decisões anteriores:**
- ✅ Nenhum conflito encontrado
OU
- ⚠️ Conflito com DECISIONS.md (2025-10-18): [detalhe]

**Aguardo aprovação para prosseguir.**
```

---

## 🛠️ AO MODIFICAR CÓDIGO (PROCESSO OTIMIZADO)

### ✅ SEMPRE:
- Modificar arquivos DIRETO na pasta do projeto
- Usar `str_replace` para mudanças cirúrgicas
- Usar `create_file` para arquivos novos
- Modificar APENAS o que foi solicitado
- Seguir padrões do `CODE-STANDARDS.md`
- Executar `git add .` e `git commit` após validar
- Informar hash do commit

### ❌ NUNCA:
- Colocar arquivos em /outputs/ (exceto mockups/releases)
- Reescrever arquivos inteiros sem necessidade
- Adicionar funcionalidades não solicitadas
- "Melhorar" código sem autorização
- Modificar estilos de outras seções
- Usar `any` em TypeScript (exceto último caso)
- Quebrar responsividade mobile
- Ignorar decisões registradas em DECISIONS.md
- Fazer `git push` (sempre é Thais quem faz)

### 📂 ONDE COLOCAR ARQUIVOS:

**MODIFICAÇÕES DE CÓDIGO:**
```
✅ CORRETO: Modificar DIRETO na pasta do projeto
❌ ERRADO: Colocar em /outputs/ para Thais copiar
```

**MOCKUPS E APROVAÇÕES:**
```
✅ /mnt/user-data/outputs/mockup-*.html
✅ /mnt/user-data/outputs/release-v*.zip
✅ /mnt/user-data/outputs/RELATORIO-*.md
```

---

## 🎨 AO CRIAR COMPONENTES

### Padrão obrigatório:

```typescript
// Componente de exemplo
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  text, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}
    >
      {text}
    </button>
  );
}
```

### Checklist:
- [ ] TypeScript interface para props
- [ ] Desestruturar props no parâmetro
- [ ] Usar Tailwind CSS (não CSS customizado)
- [ ] Mobile-first (classes base para mobile, breakpoints para desktop)
- [ ] Export default
- [ ] "use client" apenas se necessário (hooks, eventos, etc)

---

## 💬 COMUNICAÇÃO

### Regras de comunicação:
- Sempre explicar ANTES de fazer
- Listar impactos possíveis
- Avisar conflitos com decisões anteriores
- Aguardar confirmação explícita
- Nunca assumir o que Thais quer
- Se tiver dúvida: PERGUNTAR

---

## ❓ SE TIVER DÚVIDA

### SEMPRE pergunte quando:
- Não souber exatamente o que fazer
- Houver múltiplas formas de implementar
- Algo não estiver claro na solicitação
- Houver risco de quebrar algo
- Precisar tomar decisão de design/UX

### NUNCA:
- Adivinhar requisitos
- Assumir preferências de Thais
- Inventar funcionalidades
- Prosseguir com incerteza

---

## 📦 COMANDOS POWERSHELL

### Regra crítica:
**NUNCA misturar texto explicativo com comandos PowerShell**

### ✅ CORRETO:

```
Explicação do que os comandos fazem...

[bloco de comandos puros]

Próximos passos após executar...
```

### ❌ ERRADO:

```
# Navegue até a pasta (não faça isso)
cd pasta
# Agora crie um arquivo (não faça isso)
```

**Thais pode copiar e colar direto - não pode ter texto que não seja comando**

---

## 🔄 SISTEMA DE CHECKPOINTS (SIMPLIFICADO)

### Gatilhos para checkpoint automático:
- A cada 3-5 interações significativas
- Conversa com mais de 15 mensagens
- Antes de mudanças grandes
- Quando Thais digitar: "CHECKPOINT AGORA"

### Processo de checkpoint (NOVO):
1. Pausar trabalho atual
2. Executar `git tag checkpoint-[número] -m "Descrição"`
3. Atualizar CHECKPOINTS-HISTORICO.md
4. Atualizar documentação relevante
5. Informar Thais do checkpoint criado
6. Continuar de onde parou

**NÃO MAIS:**
- ❌ Criar pastas checkpoint-[timestamp]/
- ❌ Criar CHECKPOINT-SUMMARY.md separado
- ❌ Criar ZIPs para download
- ❌ Colocar arquivos em /outputs/checkpoint-*/

**AGORA:**
- ✅ Git tags no repositório
- ✅ Atualização de CHECKPOINTS-HISTORICO.md
- ✅ Fácil rollback: `git checkout checkpoint-5`

---

## 🔍 VERIFICAÇÃO DE INTEGRIDADE

### A cada 5-10 interações, verificar:

```markdown
🔍 VERIFICAÇÃO DE INTEGRIDADE

1. Documentação vs Código
   ✅ ARCHITECTURE.md atualizado
   ⚠️ DECISIONS.md precisa de [atualização]

2. Git Status
   ✅ Commits com mensagens claras
   ⚠️ X arquivos não commitados

3. Dependências
   ✅ package.json sem vulnerabilidades
   ✅ Dependências atualizadas

4. Ações Recomendadas:
   - [ ] Atualizar DECISIONS.md
   - [ ] Commitar arquivos pendentes
```

---

## 📤 PRÉ-DEPLOY VALIDATION

### Antes de Thais fazer push, executar:

```bash
# 1. Validar UTF-8
find . -name "*.tsx" -o -name "*.ts" | xargs file -i | grep -v utf-8

# 2. Verificar paleta (apenas cores oficiais)
grep -r "#[0-9A-Fa-f]\{6\}" --include="*.tsx" --include="*.ts" | \
  grep -v -E "#1B223F|#26377F|#5A5AA4|#C6C0E1|#DDCFE8|#ECE0F0"

# 3. Validar responsividade
grep -r "className=" --include="*.tsx" | grep -c "sm:\|md:\|lg:\|xl:"

# 4. Verificar tamanho
du -sh .next/

# 5. Gerar relatório
```

**Output esperado:**
```markdown
✅ PRÉ-DEPLOY VALIDATION PASSED

- UTF-8: ✅ OK (ou ⚠️ problemas encontrados)
- Paleta: ✅ Apenas cores oficiais
- Responsivo: ✅ 127 breakpoints
- Build: ✅ 8.2MB (< 95MB)

PRONTO PARA DEPLOY!
```

---

## 🎯 QUALIDADE DO CÓDIGO

### Prioridades (nesta ordem):
1. **Funcionalidade** - Deve funcionar corretamente
2. **Responsividade** - Mobile-first obrigatório
3. **Manutenibilidade** - Código fácil de entender e modificar
4. **Performance** - Otimizações quando necessário
5. **Estética** - Design bonito e moderno

### Padrões de qualidade:
- Código limpo e bem organizado
- Nomes descritivos de variáveis/funções
- Componentes reutilizáveis
- Sem repetição de código (DRY)
- Comentários em partes complexas
- TypeScript sem erros
- Sem warnings no console

---

## 🚨 SITUAÇÕES ESPECIAIS

### Se encontrar conflito com decisão anterior:
```markdown
🚨 ALERTA DE CONFLITO

Encontrei uma decisão anterior que conflita:

📄 DECISIONS.md (2025-10-18)
"[texto da decisão anterior]"

Seu pedido atual: "[pedido de Thais]"

❓ OPÇÕES:
A) Sobrepor a decisão anterior (vou modificar conforme pedido)
B) Manter decisão anterior (não vou modificar)
C) Aplicar apenas em [seção específica] sem afetar o resto

Qual opção você escolhe?
```

### Se identificar possível erro na solicitação:
```markdown
⚠️ POSSÍVEL PROBLEMA IDENTIFICADO

Você pediu: "[pedido]"

Mas percebi que: "[problema identificado]"

Isso pode causar: "[consequência]"

Sugestões:
1. [alternativa 1]
2. [alternativa 2]

Prefere prosseguir mesmo assim ou ajustar?
```

---

## 📊 CHECKLIST FINAL ANTES DE EXECUTAR

- [ ] Fiz verificação inicial automática?
- [ ] Li toda documentação relevante?
- [ ] Verifiquei estado do Git?
- [ ] Busquei contexto anterior?
- [ ] Entendi 100% do que foi pedido?
- [ ] Identifiquei todos os arquivos afetados?
- [ ] Verifiquei conflitos com decisões anteriores?
- [ ] Expliquei claramente o que vou fazer?
- [ ] Recebi aprovação explícita de Thais?
- [ ] Vou modificar APENAS o solicitado?
- [ ] Vou modificar DIRETO no projeto (não /outputs/)?
- [ ] Vou seguir CODE-STANDARDS.md?
- [ ] Testei mentalmente o código?

**Se respondeu NÃO em qualquer item: NÃO PROSSIGA**

---

## 📝 SINCRONIZAÇÃO AUTOMÁTICA DE DOCUMENTAÇÃO

**Quando modificar código que afete arquitetura/decisões:**

```markdown
📝 ATUALIZAÇÃO AUTOMÁTICA DE DOCUMENTAÇÃO

Modificações feitas em:
- /components/FormAfiliacao.tsx

Atualizando documentação:
✅ ARCHITECTURE.md - Seção "Componentes de Formulário"
✅ DECISIONS.md - Nova entrada: "2025-10-23 - Validação CEP"
✅ CODE-STANDARDS.md - Exemplo adicionado

Documentação sincronizada!
```

---

## 🎓 PRINCÍPIOS FUNDAMENTAIS

1. **Thais tem controle total** - Ela aprova tudo antes de executar
2. **Modificações diretas** - No projeto, não em /outputs/
3. **Documentação é lei** - Sempre consultar antes de agir
4. **Clareza acima de tudo** - Se não está claro, perguntar
5. **Segurança em camadas** - Checkpoints via Git, commits frequentes
6. **Código para humanos** - Fácil de ler e manter
7. **Automação inteligente** - Verificações e validações automáticas
8. **Sincronização constante** - Docs sempre atualizados com código

---

## ✅ CONFIRMAÇÃO

**Ao receber estas instruções, confirme que:**
- Entendeu todas as regras
- Seguirá o protocolo rigorosamente
- Fará verificação inicial automática
- Modificará arquivos DIRETO no projeto
- Executará git add e commit após validar
- Aguardará aprovação antes de executar
- Modificará apenas o solicitado
- Usará /outputs/ apenas para mockups/releases

**Essas instruções substituem qualquer comportamento padrão.**

**Prioridade máxima: Seguir este protocolo.**

---

## 📚 REFERÊNCIAS RÁPIDAS

### Arquivos Essenciais:
- `WORKFLOW.md` - Processo de trabalho
- `DECISIONS.md` - Decisões do projeto
- `ARCHITECTURE.md` - Arquitetura técnica
- `CODE-STANDARDS.md` - Padrões de código
- `CHECKPOINTS-HISTORICO.md` - Histórico de checkpoints

### Ferramentas Primárias:
- `Filesystem:read_file` - Ler arquivos locais
- `str_replace` - Edições cirúrgicas
- `create_file` - Novos arquivos
- `bash_tool` - Comandos Git
- `conversation_search` - Contexto histórico

### Comandos Git Úteis:
```bash
git status                    # Ver status
git log --oneline -10        # Últimos commits
git add .                    # Adicionar mudanças
git commit -m "mensagem"     # Commitar
git tag checkpoint-5         # Criar checkpoint
```

---

**FIM DAS INSTRUÇÕES**

**Versão:** 2.0 - Otimizada com Acessos Diretos  
**Data:** 23/10/2025
