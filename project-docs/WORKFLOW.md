# WORKFLOW - PROCESSO DE TRABALHO

**Última atualização:** 23/10/2025 - Workflow Otimizado com Acessos Diretos

---

## 🔍 VERIFICAÇÃO INICIAL AUTOMÁTICA

**Claude SEMPRE faz automaticamente no início de cada conversa:**

```markdown
🔍 VERIFICAÇÃO INICIAL DO PROJETO

1. Lendo documentação local...
   ✅ WORKFLOW.md
   ✅ CLAUDE-INSTRUCTIONS.md  
   ✅ DECISIONS.md
   ✅ ARCHITECTURE.md

2. Verificando estado do Git...
   ✅ Branch atual: [nome]
   ✅ Último commit: [hash] - [mensagem]
   ✅ Arquivos modificados: [lista]

3. Buscando contexto de conversas anteriores...
   ✅ Última conversa: [data]
   ✅ Checkpoint ativo: #[número]

4. Pronto para trabalhar! 🚀
```

**Ferramentas usadas:**
- `Filesystem:read_file` - Lê docs locais DIRETO
- `bash_tool` - Comandos Git
- `conversation_search` - Contexto histórico

---

## 🔄 SISTEMA DE CHECKPOINTS (SIMPLIFICADO)

### ⚠️ GATILHOS PARA CHECKPOINT OBRIGATÓRIO

**Claude fará checkpoint automático a cada:**
- 3-5 interações significativas
- Conversa ultrapassando 15 mensagens
- Antes de mudanças grandes/complexas
- Quando você digitar: **"CHECKPOINT AGORA"**

### 📊 NOVO FORMATO DE CHECKPOINT (Git Tags)

```markdown
🔔 CHECKPOINT #[número]

Salvando progresso via Git...

✅ Mudanças commitadas:
- [arquivo 1]
- [arquivo 2]

📌 Tag criada: checkpoint-[número]
📝 Documentação atualizada:
- CHECKPOINTS-HISTORICO.md
- DECISIONS.md (se aplicável)
- Outros arquivos relevantes

🔗 Para recuperar este checkpoint:
git checkout checkpoint-[número]

✅ Checkpoint salvo no GitHub!
```

**VANTAGENS do novo sistema:**
- ✅ Checkpoint versionado no Git
- ✅ Fácil rollback via `git checkout`
- ✅ Sem necessidade de ZIPs manuais
- ✅ Histórico completo no GitHub

### 🔗 RECUPERAR CHECKPOINT EM NOVA CONVERSA

**Se o chat terminar, inicie a próxima conversa com:**
```
"Continue do Checkpoint #[X] de [DATA]"
```

Claude irá:
1. Ler CHECKPOINTS-HISTORICO.md
2. Verificar estado do Git
3. Buscar contexto anterior
4. Continuar de onde parou

---

## 🚀 PROCESSO DE MODIFICAÇÃO (OTIMIZADO)

### FASE 1: ANÁLISE (Claude faz automaticamente)
```
1. Ler documentação relevante (arquivos locais)
2. Verificar estado atual do código (arquivos locais)  
3. Buscar decisões anteriores (conversation_search)
4. Identificar todos os arquivos afetados
5. Apresentar plano de execução para Thais
```

**Ferramentas:**
- `Filesystem:read_file` - Ler docs e código
- `conversation_search` - Histórico de decisões
- `bash_tool` com `git diff` - Ver mudanças pendentes

### FASE 2: EXECUÇÃO (Após aprovação de Thais)

```
1. Modificar arquivos DIRETO na pasta do projeto
2. Validar sintaxe e estrutura
3. Gerar preview (se aplicável)
4. Aguardar teste de Thais
```

**Ferramentas:**
- `str_replace` - Modificações cirúrgicas
- `create_file` - Novos arquivos
- **IMPORTANTE:** Não precisa mais de /outputs/ para transferência!

### FASE 3: VERSIONAMENTO (Claude Assistido)

```
1. Claude executa: git add .
2. Claude executa: git commit -m "[descrição]"
3. Claude informa commit hash
4. Thais executa apenas: git push origin main
```

**Comandos que Thais ainda faz:**
```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git push origin main
```

**Comandos que Claude faz automaticamente:**
- `git add .`
- `git commit -m "[mensagem]"`
- `git status`
- `git log`

---

## 🤖 COMANDO PADRÃO PARA IA

**NÃO PRECISA MAIS COPIAR/COLAR - Claude faz automaticamente:**

Claude automaticamente:
1. ✅ Lê documentação relevante
2. ✅ Verifica estado do Git
3. ✅ Busca contexto anterior
4. ✅ Analisa impactos
5. ✅ Apresenta plano
6. ✅ Aguarda aprovação

**Você apenas precisa:**
- Descrever o que quer
- Aprovar o plano apresentado

---

## ⚠️ REGRA CRÍTICA: COMANDOS POWERSHELL

**Quando fornecer comandos PowerShell para Thais:**

### ✅ CORRETO:
```powershell
cd "C:\caminho\do\projeto"
comando1
comando2
comando3
```

### ❌ ERRADO:
```
Primeiro navegue até a pasta (não faça isso):
cd "C:\caminho"

Agora execute o comando (não faça isso):
comando1
```

**REGRA:** Comandos PowerShell devem conter APENAS comandos puros, SEM texto explicativo misturado.

---

## 🤖 CHECKLIST QUE CLAUDE DEVE SEGUIR

### No início da conversa:
- [ ] Fiz verificação inicial automática?
- [ ] Li toda documentação relevante?
- [ ] Verifiquei estado do Git?
- [ ] Busquei contexto de conversas anteriores?

### Antes de cada modificação:
- [ ] Entendi completamente o que foi pedido?
- [ ] Identifiquei TODOS os arquivos que serão afetados?
- [ ] Verifiquei se há conflitos com decisões anteriores?
- [ ] Expliquei ao usuário o que vou fazer?
- [ ] Recebi aprovação explícita?

### Durante a execução:
- [ ] Estou modificando APENAS o solicitado?
- [ ] Estou usando str_replace para edições cirúrgicas?
- [ ] Estou seguindo os padrões do CODE-STANDARDS.md?
- [ ] Estou modificando arquivos DIRETO no projeto?

### Depois da execução:
- [ ] Revisei se não adicionei nada extra?
- [ ] Verifiquei se não removi nada importante?
- [ ] Documentei a mudança se for significativa?
- [ ] Executei git add e git commit?
- [ ] Informei o hash do commit?
- [ ] Hora de fazer checkpoint?

### Ao criar checkpoint:
- [ ] Executei git tag checkpoint-[número]?
- [ ] Atualizei CHECKPOINTS-HISTORICO.md?
- [ ] Atualizei documentação relevante?
- [ ] Informei como recuperar o checkpoint?

---

## ✅ CHECKLIST PÓS-EXECUÇÃO (VOCÊ)

Depois que Claude executar:

- [ ] Verificar se apenas o solicitado foi alterado
- [ ] Testar localmente no navegador
- [ ] Verificar se nada mais quebrou  
- [ ] Se OK: git push origin main
- [ ] Se NOK: git reset HEAD~1 (desfaz commit)

**Push (único comando que você precisa):**

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git push origin main
```

**Se deu errado (desfazer último commit):**

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git reset HEAD~1
```

---

## 📤 PROCESSO DE DEPLOY

### QUANDO FAZER DEPLOY:
- ✅ Após 3-5 mudanças pequenas bem-sucedidas
- ✅ Após 1 mudança grande bem testada
- ✅ Ao final do dia de trabalho (se houver mudanças)
- ❌ NUNCA após cada alteração pequena

### PRÉ-DEPLOY VALIDATION (Claude faz automaticamente):

```bash
# Claude executará antes do push:

1. Validar encoding UTF-8
2. Verificar paleta de cores
3. Validar responsividade
4. Verificar tamanho do build
5. Gerar relatório
```

**Output:**
```markdown
✅ PRÉ-DEPLOY VALIDATION PASSED

- UTF-8: ✅ OK
- Paleta: ✅ Apenas cores oficiais
- Responsivo: ✅ 127 breakpoints encontrados  
- Build: ✅ 8.2MB (< 95MB)

PRONTO PARA DEPLOY!

Execute:
git push origin main
```

### COMANDOS:

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git push origin main
```

*(Vercel fará deploy automático)*

---

## 🔄 PROCESSO PARA MUDANÇAS GRANDES

### 1. PLANEJAR:
- Listar todas as partes que serão afetadas
- Dividir em etapas pequenas
- Estimar tempo de cada etapa

### 2. EXECUTAR UMA ETAPA POR VEZ:
- Claude analisa automaticamente
- Claude explica o que vai fazer
- Você aprova
- Claude executa e commita
- Testar
- Próxima etapa

### 3. TESTAR CONJUNTO:
- Após todas etapas, testar tudo junto
- Se OK: git push
- Se NOK: git reset HEAD~[n] (reverter n commits)

---

## 🆘 SE ALGO DER ERRADO

### 1. NÃO ENTRE EM PÂNICO

### 2. DOCUMENTE O ERRO:
- Claude atualizará `/project-docs/ERRORS-LOG.md`
- Ou você pode anotar: data, o que foi pedido, o que quebrou

### 3. REVERTER:

**Ver últimos commits:**
```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git log --oneline -10
```

**Desfazer último commit (mantém mudanças locais):**
```powershell
git reset HEAD~1
```

**Voltar para commit específico (PERDE mudanças):**
```powershell
git checkout [hash-do-commit]
```

**Voltar para um checkpoint:**
```powershell
git checkout checkpoint-[número]
```

### 4. ALTERNATIVA - USAR BACKUP:
- Copiar arquivos de `/backups/[data-funcionando]/`

---

## 💾 ROTINA DE BACKUPS

### Git É SEU BACKUP PRINCIPAL
- Checkpoints via Git tags
- Commits frequentes
- Histórico completo no GitHub

### BACKUP MANUAL (Opcional, para segurança extra):

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
mkdir "backups\2025-10-23-funcionando"
Copy-Item -Path "*" -Destination "backups\2025-10-23-funcionando\" -Recurse -Exclude node_modules,.next,backups
```

---

## 🔍 VERIFICAÇÃO DE INTEGRIDADE PERIÓDICA

**A cada 5-10 interações, Claude DEVE fazer:**

```markdown
🔍 VERIFICAÇÃO DE INTEGRIDADE

1. Comparando documentação com código real...
   ✅ ARCHITECTURE.md está atualizado
   ⚠️ DECISIONS.md precisa incluir [decisão recente]

2. Verificando Git...
   ✅ Todos os commits possuem mensagens claras
   ⚠️ 3 arquivos modificados não commitados

3. Verificando dependências...
   ✅ package.json sem vulnerabilidades
   ✅ Todas as dependências atualizadas

4. Ações recomendadas:
   - [ ] Atualizar DECISIONS.md
   - [ ] Commitar arquivos pendentes
```

---

## 📋 COMANDOS QUE VOCÊ AINDA PRECISA EXECUTAR

### COMANDOS ESSENCIAIS:

```powershell
# 1. PUSH (após Claude commitar)
git push origin main

# 2. PULL (começar novo dia de trabalho)
git pull origin main

# 3. VERIFICAR STATUS (ocasionalmente)  
git status
git log --oneline -10

# 4. RODAR PROJETO LOCALMENTE
npm run dev
```

### COMANDOS QUE CLAUDE EXECUTA AUTOMATICAMENTE:
- ✅ `git add .`
- ✅ `git commit -m "[mensagem]"`
- ✅ `git diff`
- ✅ `git log`
- ✅ `git status`
- ✅ `git tag checkpoint-[número]`

---

## 📋 COMANDOS ÚTEIS DO GIT (REFERÊNCIA)

```powershell
# Status e histórico
git status
git log --oneline -10
git log --graph --oneline --all

# Commits
git add .
git commit -m "Sua mensagem"
git commit --amend  # Editar último commit

# Push/Pull
git push origin main
git pull origin main

# Reverter
git reset HEAD~1         # Desfaz último commit (mantém arquivos)
git reset --hard HEAD~1  # Desfaz último commit (APAGA mudanças)
git checkout -- .        # Descarta todas as mudanças locais

# Checkpoints
git tag                     # Listar tags
git checkout checkpoint-5   # Voltar para checkpoint
git checkout main          # Voltar para main

# Branches
git branch
git checkout -b nome-da-branch
git merge nome-da-branch
```

---

## 🎯 RESUMO DO NOVO FLUXO

```
1. Claude faz verificação inicial automática
   ↓
2. Você pede mudança
   ↓
3. Claude lê documentação LOCAL
   ↓
4. Claude explica o que vai fazer
   ↓
5. Você aprova
   ↓
6. Claude modifica arquivos DIRETO no projeto
   ↓
7. Claude executa git add e git commit
   ↓
8. Você testa localmente (npm run dev)
   ↓
9. OK? → git push origin main
   NOK? → git reset HEAD~1
   ↓
10. A cada 3-5 mudanças → CHECKPOINT (git tag)
   ↓
11. Deploy automático no Vercel!
```

---

## 🚀 GANHOS DE EFICIÊNCIA

| Tarefa | Antes | Agora | Economia |
|--------|-------|-------|----------|
| Modificar arquivo | 5 min | 1 min | **80%** |
| Fazer checkpoint | 3 min | 30 seg | **83%** |
| Sincronizar docs | 5 min | Auto | **100%** |
| Deploy | 10 min | 2 min | **80%** |

---

## 📝 OBSERVAÇÕES IMPORTANTES

### Sobre /outputs/

**ANTES:** Todos os arquivos iam para /outputs/ e você copiava manualmente

**AGORA:** 
- ✅ Claude modifica DIRETO no projeto
- ❌ /outputs/ NÃO é mais usado para código
- ✅ /outputs/ ainda usado para:
  - Mockups HTML para aprovação
  - Releases finais (.zip)
  - Relatórios de análise

### Sobre Checkpoints

**ANTES:**
- Pastas checkpoint-[timestamp]/
- Arquivo CHECKPOINT-SUMMARY.md
- ZIPs para download manual

**AGORA:**
- Git tags (checkpoint-1, checkpoint-2, etc)
- Documentação atualizada em CHECKPOINTS-HISTORICO.md
- Versionado no GitHub
- Fácil rollback: `git checkout checkpoint-5`

### Sobre Documentação

**SEMPRE ATUALIZADA:**
- Claude lê docs LOCAIS
- Claude atualiza docs automaticamente quando necessário
- Sincronização automática entre código e documentação

---

## ✅ FIM DO WORKFLOW

**Última atualização:** 23/10/2025  
**Versão:** 2.0 - Workflow Otimizado com Acessos Diretos
---

## 🐛 TROUBLESHOOTING DE ERROS

**PROTOCOLO OBRIGATÓRIO:**

Quando você reportar qualquer erro, Claude DEVE seguir o protocolo documentado em:

📄 **`/project-docs/TROUBLESHOOTING-PROTOCOL.md`**

### Resumo do Protocolo (5 Fases Obrigatórias):

1. **LEVANTAR HIPÓTESES** - Listar NO MÍNIMO 5 possíveis causas
2. **INVESTIGAR TODAS** - Verificar cada hipótese SEM implementar nada
3. **RANQUEAR** - Ordenar por probabilidade (ALTÍSSIMA → BAIXA)
4. **DIAGNOSTICAR** - Identificar causa raiz com evidências
5. **PROPOR SOLUÇÃO** - APENAS depois das fases 1-4

### ⚠️ PROIBIDO:
❌ Tentar soluções antes de análise completa
❌ "Vamos reinstalar e ver se funciona"
❌ Implementar antes de investigar todas hipóteses

### ✅ OBRIGATÓRIO:
✅ Análise científica completa
✅ Diagnóstico com evidências
✅ Uma solução (a certa) após análise

**Para detalhes completos, sempre consultar o arquivo TROUBLESHOOTING-PROTOCOL.md**

