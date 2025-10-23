# WORKFLOW - PROCESSO DE TRABALHO

---

## 🔄 SISTEMA DE CHECKPOINTS (ANTI-PERDA)

### ⚠️ GATILHOS PARA CHECKPOINT OBRIGATÓRIO

**Claude fará checkpoint automático a cada:**
- 3-5 interações significativas
- Conversa ultrapassando 15 mensagens
- Antes de mudanças grandes/complexas
- Quando você digitar: **"CHECKPOINT AGORA"**

### 📊 COMO FUNCIONA O CHECKPOINT

```
🔔 CHECKPOINT #[número]

Salvando progresso atual...

📝 Arquivos gerados em /outputs/checkpoint-[HHMMSS]/

✅ O QUE FOI FEITO ATÉ AGORA:
- [resumo]
- [resumo]

📦 DOWNLOAD:
[Link computer:// para checkpoint-[HHMMSS].zip]

📋 PRÓXIMO PASSO:
1. Baixe o ZIP (link acima)
2. Extraia em /project-docs/
3. Confirme: "Checkpoint salvo"
4. Continuamos de onde paramos
```

**OBRIGATÓRIO:** Claude DEVE criar arquivo ZIP e fornecer link computer:// para download.

### 🔗 RECUPERAR CONTEXTO EM NOVA CONVERSA

**Se o chat terminar, inicie a próxima conversa com:**
```
"Continue do Checkpoint #[X] de [DATA]"
```

Claude irá:
1. Ler CHECKPOINT-SUMMARY.md
2. Ler toda a documentação
3. Resumir onde paramos
4. Continuar de onde parou

---

## 🚀 ANTES DE COMEÇAR QUALQUER ALTERAÇÃO

### ✅ CHECKLIST PRÉ-ALTERAÇÃO (VOCÊ)

- [ ] Fazer backup da versão atual funcionando
- [ ] Commitar tudo no Git antes de começar
- [ ] Anotar o que pretendo mudar

**Comandos Git:**

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git add .
git commit -m "Backup antes de [descrição da mudança]"
```

---

## 🤖 COMANDO PADRÃO PARA IA

**COPIE E COLE SEMPRE antes de pedir qualquer alteração:**

```
🔒 PROTOCOLO DE ALTERAÇÃO

Antes de fazer qualquer mudança:

1. Leia /project-docs/PROJECT-GUIDE.md
2. Leia /project-docs/DECISIONS.md
3. Leia /project-docs/ARCHITECTURE.md
4. Leia o arquivo [NOME DO ARQUIVO] COMPLETO que você vai modificar

Depois de ler, me responda:
- O QUE exatamente você vai modificar (seja específico)
- ONDE está essa modificação (arquivo e linha aproximada)
- O QUE MAIS pode ser afetado por essa mudança
- Quais componentes/páginas dependem disso

⚠️ AGUARDE MINHA APROVAÇÃO EXPLÍCITA antes de executar.

Regras obrigatórias:
- Modifique APENAS o que eu pedi
- NÃO adicione funcionalidades extras
- NÃO "melhore" nada que eu não pedi
- NÃO mude estilos de outras seções
- Coloque em /outputs/ APENAS arquivos modificados
```

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

**Thais deve poder copiar e colar direto no PowerShell sem editar.**

---

## 🤖 CHECKLIST QUE CLAUDE DEVE SEGUIR

### Antes de cada resposta que envolva código:
- [ ] Li toda a documentação relevante?
- [ ] Li CLAUDE-INSTRUCTIONS.md?
- [ ] Entendi completamente o que foi pedido?
- [ ] Identifiquei TODOS os arquivos que serão afetados?
- [ ] Verifiquei se há conflitos com decisões anteriores?
- [ ] Expliquei ao usuário o que vou fazer?
- [ ] Recebi aprovação explícita?

### Durante a execução:
- [ ] Estou modificando APENAS o solicitado?
- [ ] Estou usando str_replace para edições cirúrgicas?
- [ ] Estou seguindo os padrões do CODE-STANDARDS.md?
- [ ] Estou colocando apenas arquivos modificados em /outputs/?

### Depois da execução:
- [ ] Revisei se não adicionei nada extra?
- [ ] Verifiquei se não removi nada importante?
- [ ] Documentei a mudança se for significativa?
- [ ] Hora de fazer checkpoint?

### Ao criar checkpoint:
- [ ] Criei pasta checkpoint-[HHMMSS]?
- [ ] Copiei TODOS os arquivos para a pasta?
- [ ] Criei CHECKPOINT-SUMMARY.md?
- [ ] **Criei arquivo ZIP do checkpoint?**
- [ ] **Forneci link computer:// para download do ZIP?**

---

## ✅ CHECKLIST PÓS-EXECUÇÃO (VOCÊ)

Depois que Claude executar:

- [ ] Verificar se apenas o solicitado foi alterado
- [ ] Copiar arquivos de /outputs/ para o projeto
- [ ] Testar localmente no navegador
- [ ] Verificar se nada mais quebrou
- [ ] Se OK: Commit no Git
- [ ] Se NOK: Reverter e documentar erro

**Commits:**

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git add .
git commit -m "Implementado: [descrição]"
```

**Se deu errado:**

```powershell
git checkout -- .
```

---

## 📤 PROCESSO DE DEPLOY

### QUANDO FAZER DEPLOY:
- ✅ Após 3-5 mudanças pequenas bem-sucedidas
- ✅ Após 1 mudança grande bem testada
- ✅ Ao final do dia de trabalho (se houver mudanças)
- ❌ NUNCA após cada alteração pequena

### COMANDOS:

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git status
git add .
git commit -m "Descrição clara do que mudou"
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
- Usar comando padrão para IA
- Claude explica o que vai fazer
- Você aprova
- Claude executa
- Testar
- Commit
- Próxima etapa

### 3. TESTAR CONJUNTO:
- Após todas etapas, testar tudo junto
- Se OK: Deploy
- Se NOK: Reverter etapa problemática

---

## 🆘 SE ALGO DER ERRADO

### 1. NÃO ENTRE EM PÂNICO

### 2. DOCUMENTE O ERRO:
- Abrir `/project-docs/ERRORS-LOG.md`
- Anotar: data, o que foi pedido, o que quebrou

### 3. REVERTER:

**Ver últimos commits:**
```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
git log --oneline
```

**Voltar para commit específico:**
```powershell
git checkout [hash-do-commit]
```

**Ou voltar tudo para último commit:**
```powershell
git checkout -- .
```

### 4. ALTERNATIVA - USAR BACKUP:
- Copiar arquivos de `/backups/[data-funcionando]/`

---

## 💾 ROTINA DE BACKUPS

### DIÁRIO (se trabalhou no projeto):

```powershell
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"
mkdir "backups\2025-10-19-funcionando"
Copy-Item -Path "colegio-tradicao\*" -Destination "backups\2025-10-19-funcionando\" -Recurse
```

### SEMPRE QUE ALGO IMPORTANTE FUNCIONAR:
- Fazer backup imediatamente
- Nomear descritivo: `2025-10-19-formulario-funcionando\`

---

## 📋 COMANDOS ÚTEIS DO GIT (POWERSHELL)

```powershell
git status
git log --oneline
git add .
git commit -m "Sua mensagem"
git push origin main
git checkout -- .
git diff
git branch
git checkout -b nome-da-branch
```

---

## 🎯 RESUMO DO FLUXO IDEAL

```
1. Backup + Git commit
   ↓
2. Pedir mudança para Claude (com protocolo)
   ↓
3. Claude lê documentação
   ↓
4. Claude explica o que vai fazer
   ↓
5. Você aprova
   ↓
6. Claude executa (apenas o solicitado)
   ↓
7. Arquivos vão para /outputs/
   ↓
8. Você copia para o projeto
   ↓
9. Testa localmente
   ↓
10. OK? → Git commit
    NOK? → Git checkout (reverter)
   ↓
11. A cada 3-5 mudanças → CHECKPOINT
   ↓
12. Ao final do dia → Deploy (git push)
```

---

## 📦 FORMATO DE CHECKPOINT OBRIGATÓRIO

Todo checkpoint DEVE conter:

1. ✅ Pasta `checkpoint-[HHMMSS]/` com todos os arquivos
2. ✅ Arquivo `CHECKPOINT-SUMMARY.md` dentro da pasta
3. ✅ Arquivo `checkpoint-[HHMMSS].zip` compactado
4. ✅ Link `computer://` para download do ZIP

**Thais não deve precisar navegar em pastas manualmente - apenas baixar o ZIP e extrair.**

