# 📋 CHANGELOG - Colégio Tradição de Magia Divina

Histórico de versões e mudanças do projeto.

---

## [v3.2.0] - 24/10/2025 - 🚧 EM DESENVOLVIMENTO

### ✨ Formulário de Afiliação - Etapa 1: Dados Pessoais

**Especificação Completa Documentada** ([Decisão #029](DECISIONS.md))
- Criado documento técnico completo: `ETAPA1-DADOS-PESSOAIS-SPEC.md`
- Definidas 6 correções críticas de UX identificadas pela usuária
- Estabelecidas regras de dimensionamento inteligente de campos
- Especificada lógica condicional de endereço profissional para Mago Iniciador

**Correções Planejadas:**

1. **Barra de Progresso das Etapas**
   - Posicionamento: Logo abaixo do título H1
   - 6 etapas com ícones: 👤 ⭐ 📄 📸 ✓ 💳
   - Estados visuais: ativo (roxo #5A5AA4), concluído (verde + ✓), futuro (cinza #C6C0E1)
   - 3 propostas de design para aprovação

2. **Otimização de Espaço dos Campos**
   - Dimensionamento baseado no conteúdo esperado
   - Nome Completo: 60% (não 100%)
   - E-mail: 50%
   - Telefones: 30% cada
   - Redução de espaçamento vertical: `space-y-6` → `space-y-4`
   - Container: `max-w-4xl` → `max-w-5xl`
   - Objetivo: eliminar barra de rolagem em desktop

3. **Busca Automática de CEP**
   - Trigger ao sair do campo (onBlur) - não mais botão manual
   - Indicadores visuais de loading/sucesso/erro
   - Feedback claro em caso de falha
   - Mensagem: "CEP não encontrado. Preencha manualmente."

4. **Endereço Profissional Condicional (Mago Iniciador)**
   - Checkbox obrigatório: "Este endereço é onde você ministra Magia Divina?"
   - Se SIM: usa endereço residencial (finaliza etapa)
   - Se NÃO: abre seção com campos idênticos ao endereço residencial
   - Título: "Preencha aqui o endereço que deseja deixar visível para alunos..."
   - Mesma lógica Brasil (ViaCEP) vs Internacional
   - Validação obrigatória da resposta

5. **Redução de Espaçamento Vertical**
   - Entre campos: 24px → 16px
   - Padding interno: 8px → 6px
   - Margem de labels: 8px → 4px

6. **Alargamento do Container**
   - De 896px → 1024px
   - Para reduzir scroll em desktops

### 📐 Estrutura de Dados

**Interface FormDataEtapa1:**
```typescript
{
  nomeCompleto: string
  email: string
  telCelular: string
  telefoneFixo: string
  numeroIdentidade: string
  enderecoResidencial: EnderecoData
  
  // Apenas para Mago Iniciador:
  enderecoMesmoProfissional?: boolean | null
  enderecoProfissional?: EnderecoData
}
```

### 🎨 Design System
- Etapa ativa: #5A5AA4 (Roxo Médio)
- Etapa concluída: #A8E6CF (Verde suave) + ícone ✓
- Etapa futura: #C6C0E1 (Lilás Claro)
- Loading CEP: spinner animado roxo
- Sucesso CEP: círculo verde com ✓
- Erro CEP: círculo vermelho com ✕

### 📝 Arquivos a Criar/Modificar
- `app/afilie-se/page.tsx` - Implementação das correções
- `components/StepProgress.tsx` - Barra de progresso reutilizável
- `lib/validators.ts` - Validações (CPF, email, telefone)
- `lib/viacep.ts` - Busca automática de CEP

### 🎯 Objetivos
- ✅ Eliminar scroll em desktop (1920x1080, 1366x768)
- ✅ Campos proporcionais ao conteúdo
- ✅ UX fluida com busca automática
- ✅ Diferenciação clara Iniciador vs Iniciado
- ✅ Validações em tempo real
- ✅ Feedback visual imediato

### ⏳ Status
- 📋 Especificação: **COMPLETA**
- 💻 Implementação: **PENDENTE**
- 🧪 Testes: **PENDENTE**

---

## [v3.1.2] - 24/10/2025

### ✨ Melhorias na Página de Afiliação

**Cards de Seleção de Tipo de Afiliação** ([Decisão #028](DECISIONS.md))
- Corrigido título da página: "Afiliar-se" → "Afilie-se ao Colégio"
- Promovidos títulos dos cards de H3 para H2 (maior hierarquia visual)
- Adicionados ícones de estrela distintos:
  - Mago Iniciador: estrela preenchida (#5A5AA4)
  - Mago Iniciado: estrela vazada (#26377F)
- Implementados preços centralizados e destacados:
  - Mago Iniciador: R$ 250,00/ano
  - Mago Iniciado: R$ 200,00/ano
- Adicionadas listas de benefícios com ícones de check
- Diferenciação visual dos cards:
  - Mago Iniciador: fundo lavanda (#DDCFE8) + elementos roxo/azul médio (#5A5AA4)
  - Mago Iniciado: fundo branco semi-transparente (70% opacidade) + elementos azul escuro (#26377F)
- Botões CTA otimizados:
  - Textos específicos: "Afilie-se como Mago Iniciador/Iniciado"
  - Largura ajustada ao conteúdo (removido w-full)
  - Centralizados nos cards
- Removida caixa informativa "Sistema em desenvolvimento"

### 🎨 Design System
- Card branco com transparência: `bg-white/70 backdrop-blur-sm`
- Botões dimensionados: `px-8 py-3` (ajuste ao texto)
- Ícones SVG inline para estrelas e checks
- Paleta oficial mantida em todos os elementos

### 📝 Arquivos Modificados
- `app/afilie-se/page.tsx` - Reestruturação completa dos cards

### 🎯 Impacto
- ✅ Diferenciação clara entre tipos de afiliação
- ✅ Hierarquia visual aprimorada
- ✅ Interface mais limpa e profissional
- ✅ Melhor escaneabilidade do conteúdo
- ✅ CTA mais elegante e focado

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
