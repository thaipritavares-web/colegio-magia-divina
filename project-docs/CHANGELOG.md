# 📋 CHANGELOG - Colégio Tradição de Magia Divina

Histórico de versões e mudanças do projeto.

---

## [v3.1.1] - 24/10/2025

### ✨ Melhorias UX

**Indicador Visual de Página Ativa no Menu** ([Decisão #027](DECISIONS.md))
- Implementado fundo branco semi-transparente (50%) para página ativa no menu de navegação
- Adicionada sombra branca pronunciada (`shadow-[0_2px_12px_rgba(255,255,255,0.9)]`) para destaque visual
- Aplicado negrito automático (`font-router-bold`) no link da página atual
- Adicionado `whitespace-nowrap` para evitar quebra de linha nos links do menu
- Mantida consistência de cor (texto em azul-escuro #26377F)

### 📝 Arquivos Modificados
- `components/Header.tsx` - Sistema de detecção de página ativa e estilos visuais

### 🔗 Commits
- `6b51e40` - feat(header): adiciona indicador visual elegante para página ativa
- `d77d2d1` - docs(decisions): registra decisão #027 sobre indicador visual de página ativa

### 🎯 Impacto
- ✅ Navegação mais intuitiva
- ✅ Feedback visual claro ao usuário
- ✅ Mantém elegância da identidade visual
- ✅ Não afeta HeaderHome (página inicial usa layout diferenciado)

---

## [v3.1.0] - 23/10/2025

### ⚠️ Versão com Problemas Críticos de Qualidade
- Taxa de erro: 100% (todos os itens implementados apresentaram problemas)
- Fontes não aplicadas corretamente
- Formulário de afiliação quebrado
- Inconsistências de encoding UTF-8

### 🔍 Análise Realizada
- Checkpoint #10 documentado em `UX-GUIDELINES-CHECKPOINT-10.md`
- Plano cirúrgico de correções criado
- Sistema de controle de qualidade estabelecido

### 📚 Decisão Importante
**Não implementar sem análise prévia** - Estabelecido workflow obrigatório de análise antes de qualquer correção para evitar repetição de erros sistemáticos.

---

## [v3.0.0] - 19/10/2025

### 🎉 Versão Completa e Definitiva

### ✅ Melhorias Visuais
- Fonte Cerulya CF para títulos
- Sistema de sombras aprimorado
- Cards com sombras arco-íris/dourada

### 🔒 Segurança
- Proteção de senha implementada
- Remoção de credenciais sensíveis do código

### 🎨 UX/UI
- Preenchimento automático de CEP
- Sistema de busca em Estado/Cidade
- Seleção visual de Graus de Magia
- Sistema de tags para certificados
- Card de reconhecimento com design premium

### 🚀 Deploy
- Otimizado para Vercel
- Exclusão de node_modules do deploy
- Script `deploy-seguro.ps1` criado

---

## Convenções de Versionamento

**Formato:** `vX.Y.Z`
- **X (Major):** Mudanças grandes, breaking changes
- **Y (Minor):** Novas features, melhorias significativas
- **Z (Patch):** Correções de bugs, ajustes pequenos

**Categorias:**
- ✨ **Melhorias/Features:** Novas funcionalidades
- 🐛 **Correções:** Bug fixes
- 🔒 **Segurança:** Updates de segurança
- 📝 **Documentação:** Melhorias na documentação
- 🎨 **UI/UX:** Melhorias visuais
- ⚡ **Performance:** Otimizações
- 🔧 **Manutenção:** Refatorações, limpeza de código

---

**Última Atualização:** 24/10/2025
