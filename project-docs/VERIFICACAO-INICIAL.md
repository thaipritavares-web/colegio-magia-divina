# VERIFICAÇÃO INICIAL - TEMPLATE

**Documento:** Template para verificação automática no início de cada conversa  
**Data de criação:** 23/10/2025  
**Versão:** 1.0

---

## 🎯 OBJETIVO

Este documento serve como template e guia para Claude executar a verificação inicial automática no início de cada conversa.

---

## 📋 TEMPLATE DE VERIFICAÇÃO

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
   ✅ Arquivos modificados: [número]

3. Buscando contexto de conversas anteriores...
   ✅ Última conversa: [data]
   ✅ Checkpoint ativo: #[número]

4. Pronto para trabalhar! 🚀

Como posso ajudar hoje?
```

---

## 🔧 IMPLEMENTAÇÃO TÉCNICA

### Passo 1: Ler Documentação Local

```typescript
// Arquivos obrigatórios para ler
const arquivosEssenciais = [
  'project-docs/WORKFLOW.md',
  'project-docs/CLAUDE-INSTRUCTIONS.md',
  'project-docs/DECISIONS.md',
  'project-docs/ARCHITECTURE.md'
];

for (const arquivo of arquivosEssenciais) {
  await Filesystem.read_file(arquivo);
}
```

### Passo 2: Verificar Estado do Git

```bash
# Branch atual
git branch --show-current

# Último commit
git log --oneline -1

# Arquivos modificados
git status --short | wc -l
```

### Passo 3: Buscar Contexto Anterior

```typescript
// Buscar conversas anteriores sobre checkpoints
await conversation_search({
  query: "checkpoint magia divina",
  max_results: 3
});

// Buscar conversas sobre decisões recentes
await conversation_search({
  query: "decisão DECISIONS.md",
  max_results: 3
});
```

### Passo 4: Apresentar Resultado

Formatar a resposta usando o template acima com os dados coletados.

---

## 📊 COMANDOS ÚTEIS

### Git Status Detalhado

```bash
# Branch atual
git branch --show-current

# Último commit (hash curto + mensagem)
git log --oneline -1

# Últimos 5 commits
git log --oneline -5

# Arquivos modificados
git status --short

# Contagem de arquivos modificados
git status --short | wc -l

# Ver diferenças não commitadas
git diff --stat

# Ver arquivos staged
git diff --cached --name-only
```

### Verificação de Integridade

```bash
# Verificar encoding UTF-8
file -i **/*.{tsx,ts,css} 2>/dev/null | grep -v utf-8

# Verificar tamanho do build
du -sh .next/ 2>/dev/null || echo "Build não existe"

# Contar componentes
find components/ -name "*.tsx" | wc -l

# Contar páginas
find app/ -name "page.tsx" | wc -l
```

---

## 🔍 CHECKLIST DE VERIFICAÇÃO

### ✅ Documentação Lida:
- [ ] WORKFLOW.md
- [ ] CLAUDE-INSTRUCTIONS.md
- [ ] DECISIONS.md
- [ ] ARCHITECTURE.md

### ✅ Git Verificado:
- [ ] Branch atual identificada
- [ ] Último commit lido
- [ ] Arquivos modificados contados
- [ ] Estado do repositório conhecido

### ✅ Contexto Recuperado:
- [ ] Conversas anteriores buscadas
- [ ] Checkpoint atual identificado
- [ ] Decisões recentes encontradas

### ✅ Status Apresentado:
- [ ] Resultado formatado
- [ ] Informação clara e concisa
- [ ] Pronto para trabalhar

---

## 🎨 VARIAÇÕES DO TEMPLATE

### Situação 1: Primeira conversa do dia

```markdown
🔍 VERIFICAÇÃO INICIAL DO PROJETO

1. Lendo documentação local...
   ✅ WORKFLOW.md
   ✅ CLAUDE-INSTRUCTIONS.md
   ✅ DECISIONS.md
   ✅ ARCHITECTURE.md

2. Verificando estado do Git...
   ✅ Branch: main
   ✅ Último commit: a1b2c3d - "Correções de UX"
   ✅ Arquivos modificados: 0
   ✅ Repositório limpo!

3. Buscando contexto anterior...
   ✅ Última conversa: 22/10/2025
   ✅ Checkpoint ativo: #10
   ✅ Próximo passo: Implementar correções UX

4. Pronto para trabalhar! 🚀

Vamos continuar com as correções de UX do Checkpoint #10?
```

### Situação 2: Arquivos modificados pendentes

```markdown
🔍 VERIFICAÇÃO INICIAL DO PROJETO

1. Lendo documentação local...
   ✅ WORKFLOW.md
   ✅ CLAUDE-INSTRUCTIONS.md
   ✅ DECISIONS.md
   ✅ ARCHITECTURE.md

2. Verificando estado do Git...
   ✅ Branch: main
   ✅ Último commit: b2c3d4e - "Atualização Header"
   ⚠️ Arquivos modificados: 3
   - components/Footer.tsx
   - app/page.tsx
   - project-docs/DECISIONS.md

3. Buscando contexto anterior...
   ✅ Última conversa: Hoje
   ✅ Checkpoint ativo: #10

4. ⚠️ ATENÇÃO: Há arquivos modificados não commitados.

Deseja:
A) Commitar essas mudanças agora?
B) Continuar sem commitar?
C) Ver o diff das mudanças?
```

### Situação 3: Nova conversa após muitos dias

```markdown
🔍 VERIFICAÇÃO INICIAL DO PROJETO

1. Lendo documentação local...
   ✅ WORKFLOW.md
   ✅ CLAUDE-INSTRUCTIONS.md
   ✅ DECISIONS.md
   ✅ ARCHITECTURE.md

2. Verificando estado do Git...
   ✅ Branch: main
   ✅ Último commit: c3d4e5f - "Deploy v3.0"
   ✅ Arquivos modificados: 0

3. Buscando contexto anterior...
   ✅ Última conversa: 15/10/2025 (8 dias atrás)
   ✅ Checkpoint ativo: #8
   📋 Resumo do último checkpoint:
      - Sistema de fontes unificado
      - Hierarquia de cores definida
      - Documentação atualizada

4. Pronto para retomar! 🚀

Passaram 8 dias desde nossa última conversa. Gostaria de:
A) Continuar do Checkpoint #8?
B) Fazer uma revisão geral do projeto?
C) Começar algo novo?
```

---

## 🚨 ALERTAS E AVISOS

### Quando Avisar sobre Problemas:

```markdown
⚠️ PROBLEMAS DETECTADOS

Git:
- ❌ Muitos arquivos modificados não commitados (10+)
- ⚠️ Último commit há mais de 7 dias

Documentação:
- ⚠️ DECISIONS.md não atualizado há 5 dias
- ⚠️ ARCHITECTURE.md pode estar desatualizado

Recomendações:
1. Commitar mudanças pendentes
2. Atualizar documentação
3. Fazer checkpoint de segurança
```

---

## 📝 NOTAS DE IMPLEMENTAÇÃO

### Frequência da Verificação:
- **SEMPRE** no início de cada conversa
- **OPCIONAL** a cada 10-15 interações (verificação de integridade)

### Tempo de Execução:
- Leitura de docs: ~5 segundos
- Comandos Git: ~2 segundos
- Busca de contexto: ~3 segundos
- **Total:** ~10 segundos

### Tratamento de Erros:
```typescript
try {
  // Executar verificação
  await executarVerificacao();
} catch (error) {
  console.log("⚠️ Verificação parcial:");
  console.log("- Alguns arquivos podem estar inacessíveis");
  console.log("- Continuando mesmo assim...");
}
```

---

## ✅ CHECKLIST FINAL

Antes de apresentar a verificação inicial:

- [ ] Todos os 4 documentos essenciais foram lidos?
- [ ] Estado do Git foi verificado?
- [ ] Contexto anterior foi buscado?
- [ ] Template foi preenchido com dados reais?
- [ ] Resposta está clara e formatada?
- [ ] Ofereceu ajuda ou próximos passos?

---

## 🔗 REFERÊNCIAS

- **WORKFLOW.md** - Processo completo de trabalho
- **CLAUDE-INSTRUCTIONS.md** - Instruções detalhadas
- **CHECKPOINTS-HISTORICO.md** - Histórico de checkpoints

---

**FIM DO TEMPLATE**

**Versão:** 1.0  
**Data:** 23/10/2025
