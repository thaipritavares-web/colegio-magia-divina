# 📋 CHANGELOG - Colégio Tradição de Magia Divina

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [Não Lançado]

### 🔄 Em Desenvolvimento
- Correções para v3.1.1 (ERR-001 e ERR-002)
- Implementação de novo workflow com documentação obrigatória

---

## [3.1.0] - 2025-10-15

### ✨ Adicionado
- **Formulário de afiliação completo** (6 etapas multi-step)
  - **MOTIVO:** Implementar requisitos completos do documento técnico v3
  - **DECISÃO:** Usar estrutura wizard com progress bar
  - **PROBLEMA:** Formulário apresentou erro ao clicar (ERR-002)

- **Sistema de 29 graus de magia** com seleção visual
  - **MOTIVO:** Permitir escolha detalhada dos graus concluídos
  - **DECISÃO:** Checkbox para cada grau + campo de data
  - **STATUS:** Não testado devido ao erro do formulário

- **Phosphor Icons** aplicados em todo formulário
  - **MOTIVO:** Melhorar UX com ícones consistentes
  - **DECISÃO:** Biblioteca @phosphor-icons/react
  - **STATUS:** Não validado devido ao erro do formulário

- **Máscaras e validações** (CPF, CEP, telefone)
  - **MOTIVO:** Melhorar experiência do usuário
  - **DECISÃO:** Validação em tempo real
  - **STATUS:** Não testado devido ao erro do formulário

- **CEP automático** ao completar ou dar TAB
  - **MOTIVO:** Facilitar preenchimento de endereço
  - **DECISÃO:** Integração com API ViaCEP
  - **STATUS:** Não testado devido ao erro do formulário

- **Sistema de títulos** (Mago, Mago do Arco Íris, Mestre Mago)
  - **MOTIVO:** Reconhecer graduação por quantidade de graus
  - **DECISÃO:** Cálculo automático baseado em número de graus
  - **STATUS:** Não testado devido ao erro do formulário

- **Card de reconhecimento especial** (21+ graus)
  - **MOTIVO:** Valorizar magos com alto nível de iniciação
  - **DECISÃO:** Fundo branco com sombra arco-íris/dourada
  - **STATUS:** Não testado devido ao erro do formulário

- **Segurança de upload** (bloqueio de executáveis)
  - **MOTIVO:** Proteger sistema contra arquivos maliciosos
  - **DECISÃO:** Validação de MIME type e extensão
  - **STATUS:** Não testado devido ao erro do formulário

### 🔧 Modificado
- **Título do site** alterado para linha única
  - **MOTIVO:** Feedback visual do usuário (evitar quebra de linha)
  - **DECISÃO:** Ajustar CSS para manter em uma linha
  - **PROBLEMA:** Fonte Kaushan Script foi alterada sem autorização (ERR-001)

### 🐛 Problemas Conhecidos
- **🔴 CRÍTICO - ERR-002:** Formulário de afiliação quebrado ao clicar
  - Erro JavaScript impede acesso a TODA funcionalidade
  - Taxa de erro desta release: 100%
  - Causa raiz: A investigar
  - Solução: v3.1.1

- **🔴 ALTO - ERR-001:** Fonte alterada sem autorização
  - Kaushan Script substituída por outra fonte
  - Perda de identidade visual aprovada
  - Causa raiz: Não consultou DECISIONS.md
  - Solução: v3.1.1 (restaurar Kaushan Script)

### 📚 Notas Técnicas
- Dependência adicionada: `@phosphor-icons/react`
- Integração preparada com API ViaCEP
- Upload configurado mas não testado (aguardando correção ERR-002)
- Sistema de pagamento: Estrutura preparada (pendente integração)

### 🔗 Links Relevantes
- [Documento de Requisitos Técnicos v3](documento anexado na conversa)
- [Discussão sobre formulário de afiliação](conversas anteriores catalogadas)

### ⚠️ Lições Aprendidas
1. **NUNCA alterar fontes sem consultar DECISIONS.md**
2. **SEMPRE testar funcionalidades críticas antes de release**
3. **OBRIGATÓRIO:** Seguir PRE-RELEASE-CHECKLIST.md
4. **OBRIGATÓRIO:** Gerar mockup para validação visual prévia

---

## [3.0.0] - 2025-10-15

### ✨ Versão Completa e Definitiva (descrição do GitHub)
- Implementação completa do site estático
- Sistema de navegação funcional
- Páginas: Sobre, Rubens Saraceni, Magia Divina, Membros, FAQ, Blog
- Footer com informações completas
- Paleta de cores oficial aplicada
- Fontes Cerulya CF e Router implementadas

### 📚 Notas Técnicas
- Framework: Next.js 14
- TypeScript + Tailwind CSS
- Deploy: GitHub + Vercel configurados
- Script: deploy-seguro.ps1

### ⚠️ Observações
- Não há registro detalhado das funcionalidades específicas
- Falta documentação de decisões técnicas
- Sem catálogo de erros desta versão

---

## [2.2.0] - 2025-10-14 (não implementada corretamente)

### 🔧 Modificado (planejado mas não efetivado)
- **REQ-010:** Novo layout cabeçalho HOME
  - Menu + Login na mesma linha, alinhados à direita
  - Logo à esquerda (200x200px)
  - Título grande ao lado do logo
  - Subtítulo embaixo do título
  - Layout horizontal
  - **STATUS:** Não implementado conforme especificado

- **REQ-013:** Substituir fonte Cerulya por Kaushan Script
  - Remover Cerulya CF
  - Instalar Kaushan Script (arquivo .woff2 fornecido)
  - Aplicar no título principal da Home
  - Corrigir problemas de acentuação
  - **STATUS:** Não implementado

- **REQ-014:** Efeito hover nos links do menu
  - Fundo cinza claro (#f5f5f5) ao passar o mouse
  - Sombra suave (rgba(0, 0, 0, 0.08))
  - Bordas arredondadas (4px)
  - Transição suave (0.3s)
  - **STATUS:** Não implementado

### ⚠️ Problemas
- Release teve problemas de deploy
- Node_modules ultrapassou limite de 100MB do GitHub
- Melhorias planejadas não foram efetivamente implementadas

---

## [1.0.0] - 2025-10-15

### ✨ Adicionado
- Criação do repositório inicial
- Estrutura de arquivos base do projeto
- `.gitignore` com proteções de segurança
- `WORKFLOW.md` com padrões e instruções completas (versão 1.0)
- `CHANGELOG.md` para histórico de versões

### 📚 Notas Técnicas
- Projeto configurado com paleta oficial de cores
- Fontes definidas: Cerulya CF e Router
- Encoding UTF-8 obrigatório em todos os arquivos
- Repositório preparado para desenvolvimento colaborativo

---

## 📝 Template para Próximas Releases

```markdown
## [X.X.X] - YYYY-MM-DD

### ✨ Adicionado
- **Feature X**
  - **MOTIVO:** Por que implementamos
  - **DECISÃO:** Qual abordagem escolhemos
  - **STATUS:** Funcionando / Com problemas

### 🔧 Modificado
- **Mudança Y**
  - **MOTIVO:** Por que alteramos
  - **DECISÃO:** Como foi implementado
  - **PROBLEMA:** Se houver algum issue

### 🐛 Corrigido
- **Bug Z** (ERR-XXX)
  - **PROBLEMA:** Descrição do bug
  - **CAUSA:** Causa raiz identificada
  - **SOLUÇÃO:** Como foi resolvido

### 🔄 Removido
- **Componente descontinuado**
  - **MOTIVO:** Por que foi removido

### ⚠️ Problemas Conhecidos
- Lista de issues identificadas mas não resolvidas
- Link para ERRORS.md para detalhes

### 📚 Notas Técnicas
- Decisões técnicas importantes
- Mudanças de arquitetura
- Dependências adicionadas/removidas
- Breaking changes

### 🔗 Links Relevantes
- [Mockup aprovado](computer://...)
- [Discussão](link para conversa)
- [Documento de requisitos](link)

### 💡 Lições Aprendidas
- O que funcionou bem
- O que precisa melhorar
- Ajustes no processo
```

---

## 🔢 Convenções de Versionamento

### MAJOR.MINOR.PATCH

- **MAJOR (X.0.0):** Mudanças incompatíveis com versões anteriores
  - Exemplo: Reestruturação completa, mudança de framework
  
- **MINOR (0.X.0):** Adição de funcionalidades mantendo compatibilidade
  - Exemplo: Novo formulário, nova página, novo recurso
  
- **PATCH (0.0.X):** Correções de bugs mantendo compatibilidade
  - Exemplo: Corrigir validação, ajustar CSS, fix de bug

### Exemplos:
- `1.0.0` → Release inicial
- `1.1.0` → Adicionado sistema de blog
- `1.1.1` → Corrigido bug no formulário de contato
- `2.0.0` → Reestruturação completa do backend
- `3.1.1` → Correção de erros da v3.1.0 (próxima release)

---

## 📊 Estatísticas do Projeto

### Releases Totais: 4
- Major: 3 (v1.0, v2.0, v3.0)
- Minor: 1 (v3.1)
- Patch: 0 (próximo: v3.1.1)

### Taxa de Erro por Release:
- v1.0.0: Não medido
- v2.2.0: Não implementada corretamente
- v3.0.0: Não medido
- v3.1.0: 🔴 100% (2 erros críticos)
- **Meta para v3.1.1:** < 10%

### Tempo Médio entre Releases:
- A calcular após estabelecer cadência regular

---

**Repositório:** github.com/thaipritavares-web/colegio-magia-divina  
**Última atualização:** 2025-10-15  
**Versão do formato:** 2.0 (com motivos e decisões detalhadas)
