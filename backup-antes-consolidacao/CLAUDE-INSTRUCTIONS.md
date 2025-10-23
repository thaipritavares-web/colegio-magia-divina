# INSTRUÇÕES PERMANENTES PARA CLAUDE - COLÉGIO TRADIÇÃO

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

## ⚠️ REGRAS ABSOLUTAS

### 🔍 ANTES DE QUALQUER RESPOSTA QUE ENVOLVA CÓDIGO:

**Você DEVE ler (nesta ordem):**
1. `/project-docs/PROJECT-GUIDE.md`
2. `/project-docs/ARCHITECTURE.md`
3. `/project-docs/DECISIONS.md`
4. `/project-docs/CODE-STANDARDS.md`
5. O arquivo COMPLETO que vai modificar

**Depois de ler, você DEVE:**
- Explicar exatamente O QUE vai modificar
- Indicar ONDE está (arquivo e linha aproximada)
- Listar O QUE MAIS pode ser afetado
- Identificar componentes/páginas que dependem disso
- **AGUARDAR aprovação explícita de Thais**

---

## 🛠️ AO MODIFICAR CÓDIGO

### ✅ SEMPRE:
- Usar `str_replace` para mudanças cirúrgicas (modificar apenas linhas específicas)
- Modificar APENAS o que foi solicitado explicitamente
- Colocar em `/outputs/` APENAS arquivos modificados
- Seguir padrões do `CODE-STANDARDS.md`
- Manter TypeScript strict mode
- Comentar código complexo
- Testar mentalmente antes de executar

### ❌ NUNCA:
- Reescrever arquivos inteiros
- Adicionar funcionalidades não solicitadas
- "Melhorar" código sem autorização
- Modificar estilos de outras seções
- Usar `any` em TypeScript (exceto em último caso)
- Quebrar responsividade mobile
- Ignorar decisões registradas em DECISIONS.md

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
      className={`px-6 py-3 rounded-lg ${
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

### Formato de resposta padrão:

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

## 🔄 SISTEMA DE CHECKPOINTS

### Gatilhos para checkpoint automático:
- A cada 3-5 interações significativas
- Conversa com mais de 15 mensagens
- Antes de mudanças grandes
- Quando Thais digitar: "CHECKPOINT AGORA"

### Processo de checkpoint:
1. Pausar trabalho atual
2. Gerar TODOS os arquivos atualizados
3. Colocar em `/outputs/checkpoint-[HHMMSS]/`
4. Criar CHECKPOINT-SUMMARY.md
5. Informar Thais
6. Aguardar confirmação de salvamento
7. Continuar de onde parou

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

- [ ] Li toda documentação relevante?
- [ ] Entendi 100% do que foi pedido?
- [ ] Identifiquei todos os arquivos afetados?
- [ ] Verifiquei conflitos com decisões anteriores?
- [ ] Expliquei claramente o que vou fazer?
- [ ] Recebi aprovação explícita de Thais?
- [ ] Vou modificar APENAS o solicitado?
- [ ] Vou usar str_replace (não reescrever)?
- [ ] Vou seguir CODE-STANDARDS.md?
- [ ] Testei mentalmente o código?

**Se respondeu NÃO em qualquer item: NÃO PROSSIGA**

---

## 🎓 PRINCÍPIOS FUNDAMENTAIS

1. **Thais tem controle total** - Ela aprova tudo antes de executar
2. **Modificações cirúrgicas** - Apenas o necessário, nada mais
3. **Documentação é lei** - Sempre consultar antes de agir
4. **Clareza acima de tudo** - Se não está claro, perguntar
5. **Segurança em camadas** - Checkpoints, Git, backups
6. **Código para humanos** - Fácil de ler e manter

---

## ✅ CONFIRMAÇÃO

**Ao receber estas instruções, confirme que:**
- Entendeu todas as regras
- Seguirá o protocolo rigorosamente
- Sempre consultará a documentação
- Aguardará aprovação antes de executar
- Modificará apenas o solicitado

**Essas instruções substituem qualquer comportamento padrão.**

**Prioridade máxima: Seguir este protocolo.**
