# DIRETRIZES DE UX - COLÉGIO TRADIÇÃO

**Última atualização:** 2025-10-19 (Checkpoint #3)

---

## 🎯 PRINCÍPIO FUNDAMENTAL

**A EXPERIÊNCIA DO USUÁRIO É PRIORIDADE MÁXIMA**

- Navegação intuitiva e sem fricção
- Processo de afiliação claro e fácil
- Tudo deve ser explicado
- Remover qualquer barreira ou confusão
- Interface moderna e elegante

---

## 🎨 SISTEMA DE SOMBREAMENTOS (OBSOLETO)

**⚠️ AVISO:** Esta seção está obsoleta. Use o **SISTEMA DE SOMBRAS PADRONIZADO** documentado no Checkpoint #8 (final deste documento).

<details>
<summary>Ver sistema antigo (apenas para referência histórica)</summary>

### Níveis de Elevação

Usar cor base `#1B223F` (Azul Marinho Escuro) com opacidade variável:

```css
/* Nível 1 - Cards, blocos de conteúdo */
.shadow-sm {
  box-shadow: 0 1px 2px rgba(27, 34, 63, 0.05);
}

/* Nível 2 - Botões normais, links hover */
.shadow-md {
  box-shadow: 0 4px 6px rgba(27, 34, 63, 0.1);
}

/* Nível 3 - Botões hover, modais */
.shadow-lg {
  box-shadow: 0 10px 15px rgba(27, 34, 63, 0.15);
}

/* Nível 4 - CTAs principais, popups */
.shadow-xl {
  box-shadow: 0 20px 25px rgba(27, 34, 63, 0.2);
}

/* Nível 5 - Menus dropdown, tooltips */
.shadow-2xl {
  box-shadow: 0 25px 50px rgba(27, 34, 63, 0.25);
}
```

### Aplicação por Componente

| Componente | Estado Normal | Hover | Active |
|------------|---------------|-------|--------|
| **Cards** | shadow-sm | shadow-md | - |
| **Botões** | shadow-md | shadow-lg | shadow-sm |
| **Links Header** | none | shadow-md (text-shadow) | - |
| **Modais** | shadow-xl | - | - |
| **Tooltips** | shadow-2xl | - | - |
| **Dropdowns** | shadow-2xl | - | - |

</details>

---

## 🎨 PALETA DE CORES E CONTRASTE

### Uso Harmônico das Cores

| Cor | HEX | Uso Principal | Contraste |
|-----|-----|---------------|-----------|
| Azul Marinho Escuro | `#1B223F` | Textos, rodapé | 13.8:1 (AAA) |
| Azul Escuro | `#26377F` | Links, menu | 8.6:1 (AAA) |
| Roxo/Azul Médio | `#5A5AA4` | Botões CTA | 4.9:1 (AA) |
| Lilás Claro | `#C6C0E1` | Texto secundário | 5.2:1 (AA) |
| Lavanda | `#DDCFE8` | Cards, blocos | - |
| Lilás Quase Branco | `#ECE0F0` | Header, seções | - |
| Branco | `#FFFFFF` | Fundo principal | - |

**Todos os contrastes atendem WCAG 2.1 AA ou AAA**

### Cores de Feedback

```css
/* Sucesso */
--success-border: #10B981;
--success-bg: #F0FDF4;
--success-text: #047857;

/* Erro (suave, não agressivo) */
--error-border: #EF4444;
--error-bg: #FEF2F2;
--error-text: #DC2626;

/* Aviso */
--warning-border: #F59E0B;
--warning-bg: #FFFBEB;
--warning-text: #D97706;

/* Info */
--info-border: #3B82F6;
--info-bg: #EFF6FF;
--info-text: #1D4ED8;
```

---

## 💫 MICROINTERAÇÕES E TRANSIÇÕES

### Timing Padrão

```css
/* Transição suave padrão */
transition: all 300ms ease-in-out;

/* Transição rápida (micro feedback) */
transition: all 150ms ease;

/* Transição lenta (modais, grandes elementos) */
transition: all 400ms ease-in-out;
```

### Estados de Botões

```css
/* Normal */
.button {
  background: #5A5AA4;
  color: white;
  box-shadow: 0 4px 6px rgba(27, 34, 63, 0.1);
  transition: all 300ms ease-in-out;
}

/* Hover */
.button:hover {
  background: #4A4A94; /* 10% mais escuro */
  box-shadow: 0 10px 15px rgba(27, 34, 63, 0.15);
  transform: translateY(-2px);
  cursor: pointer;
}

/* Active (pressionado) */
.button:active {
  background: #3A3A84; /* 20% mais escuro */
  box-shadow: 0 1px 2px rgba(27, 34, 63, 0.05);
  transform: translateY(0);
}

/* Disabled */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

/* Loading */
.button.loading {
  opacity: 0.7;
  cursor: wait;
  position: relative;
}
```

### Estados de Links (Header)

```css
/* Normal */
.header-link {
  color: #26377F;
  text-decoration: none;
  transition: all 300ms ease;
}

/* Hover */
.header-link:hover {
  color: #5A5AA4;
  text-decoration: underline;
  text-shadow: 0 2px 4px rgba(27, 34, 63, 0.1);
}

/* Active */
.header-link:active {
  color: #1B223F;
}

/* Focus (teclado) */
.header-link:focus {
  outline: 2px solid #5A5AA4;
  outline-offset: 2px;
}
```

### Estados de Inputs

```css
/* Normal */
.input {
  border: 1px solid #C6C0E1;
  background: white;
  transition: all 300ms ease;
}

/* Focus */
.input:focus {
  border: 2px solid #5A5AA4;
  box-shadow: 0 0 0 3px rgba(90, 90, 164, 0.1);
  outline: none;
}

/* Success (válido) */
.input.valid {
  border: 2px solid #10B981;
  background: #F0FDF4;
}

/* Error */
.input.error {
  border: 2px solid #EF4444;
  background: #FEF2F2;
}

/* Disabled */
.input:disabled {
  background: #ECE0F0;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Readonly (preenchido automaticamente) */
.input:read-only {
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  cursor: default;
}
```

---

## 📐 OTIMIZAÇÃO DE ESPAÇO VERTICAL

### PRINCÍPIO: EVITAR SCROLL DESNECESSÁRIO

### Tamanhos Inteligentes de Campos

Campos devem ser proporcionais ao conteúdo esperado:

```css
/* Campos curtos */
.input-cpf { width: 180px; } /* 14 caracteres */
.input-cep { width: 140px; } /* 9 caracteres */
.input-numero { width: 100px; } /* 5-6 caracteres */
.input-estado { width: 120px; } /* sigla + nome */
.input-complemento { width: 180px; } /* texto curto */
.input-telefone { width: 180px; } /* 15 caracteres */

/* Campos médios */
.input-bairro { width: 50%; }

/* Campos longos */
.input-nome { width: 100%; }
.input-email { width: 100%; }
.input-logradouro { width: 100%; }
```

**Mobile:** Todos campos = 100% largura

### Agrupamento de Campos em Linhas (Desktop)

**Linha 1 - Identificação:**
```html
<div class="form-row">
  <input class="w-full" placeholder="Nome Completo" />
</div>
```

**Linha 2 - Contato:**
```html
<div class="form-row">
  <input class="w-60%" placeholder="Email" />
  <input class="w-40%" placeholder="Telefone Celular" />
</div>
```

**Linha 3 - Documento (Brasil):**
```html
<div class="form-row">
  <input class="w-30%" placeholder="CPF" />
  <input class="w-30%" placeholder="Telefone Fixo (opcional)" />
</div>
```

**Linha 4 - Endereço (Brasil):**
```html
<div class="form-row">
  <input class="w-20%" placeholder="CEP" />
  <select class="w-20%" placeholder="Estado" />
  <select class="w-60%" placeholder="Cidade" />
</div>
```

**Linha 5 - Rua:**
```html
<div class="form-row">
  <input class="w-60%" placeholder="Logradouro" />
  <input class="w-15%" placeholder="Número" />
  <input class="w-25%" placeholder="Complemento" />
</div>
```

**Linha 6 - Bairro:**
```html
<div class="form-row">
  <input class="w-50%" placeholder="Bairro" />
</div>
```

### Seções Visuais Agrupadas

```html
<!-- Seção 1: Dados Pessoais -->
<section class="form-section">
  <h3>👤 Dados Pessoais</h3>
  <!-- campos relacionados -->
</section>

<!-- Seção 2: Endereço -->
<section class="form-section">
  <h3>📍 Endereço</h3>
  <!-- campos relacionados -->
</section>

<!-- Seção 3: Graus de Magia -->
<section class="form-section">
  <h3>✨ Graus de Magia</h3>
  <p class="helper-text">Selecione os graus que você possui</p>
  <!-- checkboxes + campos condicionais -->
</section>
```

### Espaçamentos Otimizados

```css
/* Entre seções */
.form-section + .form-section {
  margin-top: 48px; /* desktop */
  margin-top: 32px; /* mobile */
}

/* Entre linhas de campos */
.form-row + .form-row {
  margin-top: 16px;
}

/* Gap entre campos na mesma linha */
.form-row {
  display: flex;
  gap: 16px;
}

/* Padding interno das seções */
.form-section {
  padding: 32px; /* desktop */
  padding: 24px; /* mobile */
  background: #FAFAFA;
  border-radius: 12px;
}
```

---

## 📋 FORMULÁRIO DE AFILIAÇÃO

### Multi-Step com Progresso Visual

```html
<!-- Barra de progresso -->
<div class="progress-bar">
  <div class="step active">1. Tipo</div>
  <div class="step">2. Dados</div>
  <div class="step">3. Graus</div>
  <div class="step">4. Documentos</div>
  <div class="step">5. Pagamento</div>
</div>
```

**Cada etapa deve ter:**
- ✅ Título claro: "Passo 1: Escolha seu tipo de afiliação"
- ✅ Descrição explicativa
- ✅ Ajuda contextual (tooltips)
- ✅ Validação em tempo real
- ✅ Botão "Voltar" (exceto primeira etapa)
- ✅ Botão "Próximo" (só habilitado quando válido)
- ✅ Auto-save do progresso

### Validação Não Agressiva

**Comportamento:**
- Validação ao sair do campo (onBlur)
- Validação em tempo real após começar a digitar
- **Estilo suave e elegante** (não agressivo)

**Mensagens de erro elegantes:**

❌ **NÃO fazer:**
- "ERRO! CPF INVÁLIDO!"
- "Campo obrigatório!"
- Texto em vermelho vibrante

✅ **FAZER:**
- "⚠️ Por favor, verifique o CPF digitado"
- "⚠️ Este campo é obrigatório"
- "⚠️ Digite um email válido"
- Texto em vermelho suave (#EF4444)

### Máscaras de Entrada

**Brasil:**
```typescript
CPF: "999.999.999-99"
CEP: "99999-999"
Celular: "(99) 99999-9999"
Fixo: "(99) 9999-9999"
Data: "99/99/9999"
```

**Portugal:**
```typescript
NIF: "999 999 999"
Código Postal: "9999-999"
Telefone: "+351 999 999 999"
```

**Espanha:**
```typescript
DNI/NIE: "99999999-A"
Código Postal: "99999"
Telefone: "+34 999 999 999"
```

**Argentina:**
```typescript
DNI: "99.999.999"
Telefone: "+54 variável"
```

### Placeholders com Exemplos Reais

**Sempre usar formato:** `"Exemplo: [valor realista]"`

```typescript
// Data
placeholder: "Exemplo: 10/10/2025"

// CPF
placeholder: "Exemplo: 123.456.789-00"

// CEP
placeholder: "Exemplo: 01310-100"

// Telefone Celular
placeholder: "Exemplo: (11) 98765-4321"

// Telefone Fixo
placeholder: "Exemplo: (11) 3456-7890"

// Email
placeholder: "Exemplo: seuemail@exemplo.com"

// Logradouro
placeholder: "Exemplo: Rua das Flores"

// Número
placeholder: "Exemplo: 123"

// Complemento
placeholder: "Exemplo: Apto 45"

// Bairro
placeholder: "Exemplo: Centro"

// NIF (Portugal)
placeholder: "Exemplo: 123 456 789"

// DNI (Espanha)
placeholder: "Exemplo: 12345678-A"

// Código Postal (Portugal)
placeholder: "Exemplo: 1000-001"
```

### Campo CEP (Brasil) - Preenchimento Automático

**Fluxo:**

```
1. Usuário digita CEP: "01310-100"
   ↓
2. Ao completar 8 dígitos → trigger automático
   ↓
3. Loading spinner no campo CEP
   Mensagem: "🔄 Buscando endereço..."
   ↓
4. Chama API ViaCEP
   ↓
5a. SUCESSO:
    ✅ Logradouro: preenchido (readonly, fundo cinza claro)
    ✅ Bairro: preenchido (readonly)
    ✅ Cidade: preenchido (readonly)
    ✅ Estado: preenchido (readonly)
    ✅ Número: campo ativo para usuário
    ✅ Complemento: campo ativo (opcional)
    Mensagem: "✓ Endereço encontrado"
    
5b. FALHA:
    ⚠️ Mensagem: "CEP não encontrado. Preencha manualmente."
    ✅ Todos campos ficam editáveis
```

**Botão adicional:**
- "Editar endereço manualmente"
- Remove readonly dos campos preenchidos automaticamente

### Campos com Busca (Select Searchable)

**Biblioteca:** react-select

#### Estado (Brasil):
```typescript
<Select
  placeholder="🔍 Digite ou selecione o estado"
  isSearchable={true}
  options={estadosBrasileiros}
  // Usuário digita: "SP" → filtra "SP - São Paulo"
  // Ou digita: "São" → filtra "São Paulo"
/>
```

#### Cidade (Brasil):
```typescript
<Select
  placeholder="🔍 Digite ou selecione a cidade"
  isSearchable={true}
  isDisabled={!estadoSelecionado}
  options={cidadesDoEstado}
  // Cidades carregadas via API IBGE
  // API: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
/>
```

**Lógica:**
- Se Estado NÃO selecionado: campo desabilitado
- Se Estado selecionado: carrega cidades daquele estado
- Busca case-insensitive, remove acentos

#### País (Internacional):
```typescript
<Select
  placeholder="🔍 Digite ou selecione o país"
  isSearchable={true}
  defaultValue="BR"
  options={paises}
  // Com bandeiras: 🇧🇷 Brasil, 🇵🇹 Portugal, etc
/>
```

### Formulário Adaptativo por País

**Campos mudam conforme país selecionado:**

#### 🇧🇷 Brasil:
- País (select)
- CPF (máscara)
- CEP (máscara + busca automática)
- Logradouro (auto-preenchido)
- Número
- Complemento (opcional)
- Bairro (auto-preenchido)
- Cidade (select searchable, depende de Estado)
- Estado (select searchable)
- Telefone Celular (máscara)
- Telefone Fixo (máscara, opcional)

#### 🇵🇹 Portugal:
- País (select)
- NIF (máscara)
- Código Postal (máscara, sem busca automática)
- Morada
- Número
- Andar/Complemento (opcional)
- Freguesia
- Concelho (select searchable)
- Distrito (select searchable)
- Telefone (máscara +351)

#### 🇪🇸 Espanha:
- País (select)
- DNI/NIE (máscara)
- Código Postal (máscara)
- Dirección
- Número
- Piso/Puerta (opcional)
- Localidad
- Provincia (select searchable)
- Comunidad Autónoma (select searchable)
- Teléfono (máscara +34)

#### 🌎 Outros (América do Sul):
- País (select)
- Documento de Identidade (genérico, sem máscara fixa)
- Código Postal (genérico)
- Endereço completo (textarea)
- Complemento (opcional)
- Bairro/Distrito
- Cidade
- Estado/Província/Região
- Telefone (com código país)

### Validações por Campo

#### CPF (Brasil):
```typescript
validação: {
  - Apenas números
  - Exatamente 11 dígitos
  - Validar dígitos verificadores
  - Rejeitar sequências (111.111.111-11)
}
erro: "⚠️ Por favor, verifique o CPF digitado"
```

#### NIF (Portugal):
```typescript
validação: {
  - Apenas números
  - Exatamente 9 dígitos
  - Validar dígito verificador
}
erro: "⚠️ NIF inválido"
```

#### Email:
```typescript
validação: {
  - Formato: texto@dominio.extensao
  - Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
erro: "⚠️ Digite um email válido"
```

#### Telefone (Brasil):
```typescript
validação: {
  - Celular: (99) 99999-9999
  - Fixo: (99) 9999-9999
  - DDD válido (códigos reais)
}
erro: "⚠️ Telefone inválido. Verifique o DDD e número"
```

#### CEP (Brasil):
```typescript
validação: {
  - Exatamente 8 dígitos
  - Formato: 99999-999
  - Verificar se existe via API ViaCEP
}
erro: "⚠️ CEP não encontrado"
```

#### Data:
```typescript
validação: {
  - Formato: DD/MM/AAAA
  - Data válida (não pode ser 32/13/2025)
  - Data no passado (para datas de conclusão)
  - Idade mínima se for data nascimento (ex: 18 anos)
}
erro: "⚠️ Data inválida. Use o formato DD/MM/AAAA"
```

### Upload de Arquivos

**Drag & Drop + Click:**
```html
<div class="upload-area">
  <p>📤 Arraste o arquivo aqui ou clique para selecionar</p>
  <p class="helper-text">Máx 5MB - Formatos: JPG, PNG, PDF</p>
</div>
```

**Após upload:**
- Preview da imagem/PDF
- Nome do arquivo
- Tamanho
- Barra de progresso durante upload
- Botão para remover
- Ícone ✓ verde quando completo

---

## 💡 TOOLTIPS E AJUDA CONTEXTUAL

### Quando Usar

- Ícone (?) ao lado de termos técnicos
- "Mago Iniciador" vs "Mago Iniciado"
- Campos específicos que precisam explicação

### Comportamento

**Desktop:** Hover para mostrar
**Mobile:** Tap para abrir, tap fora para fechar

### Estilo

```css
.tooltip {
  background: #1B223F;
  color: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 25px 50px rgba(27, 34, 63, 0.25);
  max-width: 250px;
  font-size: 14px;
  line-height: 1.5;
}

/* Seta apontando para elemento */
.tooltip::before {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #1B223F;
}
```

### Exemplos

```typescript
// Campo CPF
<Label>
  CPF 
  <Tooltip text="Documento de identidade brasileiro com 11 dígitos">
    <Icon>?</Icon>
  </Tooltip>
</Label>

// Tipo de Afiliação
<Label>
  Tipo de Afiliação
  <Tooltip text="Iniciador: pode ensinar. Iniciado: praticante autônomo">
    <Icon>?</Icon>
  </Tooltip>
</Label>
```

---

## 📱 RESPONSIVIDADE

### Breakpoints Obrigatórios

```css
/* Mobile pequeno */
@media (min-width: 320px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Desktop large */
@media (min-width: 1440px) { }
```

### Comportamento por Dispositivo

#### Mobile (320px - 768px):
- 1 campo por linha (stack vertical)
- Labels em cima dos campos
- Campos 100% largura
- Altura dos campos: 48px (área de toque)
- Select com interface nativa mobile
- Padding reduzido: 24px

#### Tablet (768px - 1024px):
- 2 campos por linha quando apropriado
- Ex: [Nome] [Sobrenome]
- Ex: [Número] [Complemento]
- Padding: 32px

#### Desktop (1024px+):
- 2-3 campos por linha
- Grid otimizado
- Campos proporcionais ao conteúdo
- Ex: [Logradouro 60%] [Nº 15%] [Compl. 25%]
- Padding: 32-48px

---

## 🧭 NAVEGAÇÃO

### Sticky Header

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 300ms ease;
}

/* Ao rolar, header fica menor e com sombra */
.header.scrolled {
  padding: 12px 0; /* reduz de 24px */
  box-shadow: 0 4px 6px rgba(27, 34, 63, 0.1);
}
```

### Breadcrumbs

```html
<nav class="breadcrumbs">
  <a href="/">Home</a>
  <span>/</span>
  <a href="/afilie-se">Afilie-se</a>
  <span>/</span>
  <span class="current">Dados Pessoais</span>
</nav>
```

### Botão "Voltar ao Topo"

```css
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background: #5A5AA4;
  color: white;
  border-radius: 50%;
  box-shadow: 0 10px 15px rgba(27, 34, 63, 0.15);
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background: #4A4A94;
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(27, 34, 63, 0.2);
}
```

**Comportamento:**
- Aparece após rolar 50vh (50% da altura da tela)
- Ao clicar: smooth scroll até o topo
- Ícone: seta para cima (↑)

### Menu Mobile (Hamburger)

```css
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: white;
  box-shadow: 0 0 50px rgba(27, 34, 63, 0.3);
  transition: right 400ms ease-in-out;
  z-index: 200;
}

.mobile-menu.open {
  right: 0;
}

/* Overlay escuro */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(27, 34, 63, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease;
  z-index: 199;
}

.mobile-menu-overlay.open {
  opacity: 1;
  visibility: visible;
}
```

**Comportamento:**
- Animação suave de abertura (slide-in da direita)
- Overlay escuro semitransparente no fundo
- Fechar ao clicar fora ou no X
- Links grandes (min 44px altura) para facilitar toque
- Scroll interno se menu muito longo

---

## 🔔 MENSAGENS E NOTIFICAÇÕES

### Toasts

**Posição:** Canto superior direito, stack vertical

```html
<!-- Sucesso -->
<div class="toast success">
  <span class="icon">✓</span>
  <span class="message">Afiliação enviada com sucesso!</span>
</div>

<!-- Erro -->
<div class="toast error">
  <span class="icon">✗</span>
  <span class="message">Erro ao enviar. Tente novamente.</span>
  <button class="close">×</button>
</div>

<!-- Info -->
<div class="toast info">
  <span class="icon">ℹ</span>
  <span class="message">Salvando progresso...</span>
</div>

<!-- Warning -->
<div class="toast warning">
  <span class="icon">⚠</span>
  <span class="message">Você tem campos pendentes.</span>
</div>
```

**Estilo:**
```css
.toast {
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(27, 34, 63, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  animation: slideInRight 300ms ease;
}

.toast.success {
  background: #F0FDF4;
  border-left: 4px solid #10B981;
  color: #047857;
}

.toast.error {
  background: #FEF2F2;
  border-left: 4px solid #EF4444;
  color: #DC2626;
}

.toast.info {
  background: #EFF6FF;
  border-left: 4px solid #3B82F6;
  color: #1D4ED8;
}

.toast.warning {
  background: #FFFBEB;
  border-left: 4px solid #F59E0B;
  color: #D97706;
}
```

**Duração:**
- Sucesso: 5s (auto-dismiss)
- Erro: 7s (com botão fechar)
- Info: 3s (auto-dismiss)
- Warning: 6s (auto-dismiss)

### Empty States

Quando não há dados:

```html
<div class="empty-state">
  <div class="icon">📝</div>
  <h3>Nenhum post publicado ainda</h3>
  <p>Comece criando seu primeiro post</p>
  <button class="cta">Criar primeiro post</button>
</div>
```

**Estilo:**
```css
.empty-state {
  text-align: center;
  padding: 64px 24px;
  color: #6B7280;
}

.empty-state .icon {
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 20px;
  color: #1B223F;
  margin-bottom: 8px;
}

.empty-state p {
  font-size: 14px;
  margin-bottom: 24px;
}
```

### Loading States

**Skeleton Screens:**
```html
<div class="skeleton">
  <div class="skeleton-line"></div>
  <div class="skeleton-line short"></div>
  <div class="skeleton-line"></div>
</div>
```

```css
.skeleton-line {
  height: 16px;
  background: linear-gradient(
    90deg,
    #ECE0F0 0%,
    #DDCFE8 50%,
    #ECE0F0 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: 4px;
  margin-bottom: 12px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Spinners:**
```html
<div class="spinner"></div>
```

```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #ECE0F0;
  border-top-color: #5A5AA4;
  border-radius: 50%;
  animation: spin 800ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## ⚠️ CONFIRMAÇÕES CRÍTICAS

Antes de ações destrutivas (excluir, cancelar, etc):

```html
<div class="modal-overlay">
  <div class="modal">
    <h3>Tem certeza?</h3>
    <p>Esta ação não pode ser desfeita.</p>
    <div class="modal-actions">
      <button class="btn-secondary">Cancelar</button>
      <button class="btn-danger">Excluir</button>
    </div>
  </div>
</div>
```

**Estilo:**
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(27, 34, 63, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(27, 34, 63, 0.25);
  max-width: 400px;
  width: 90%;
}

.modal h3 {
  font-size: 20px;
  color: #1B223F;
  margin-bottom: 12px;
}

.modal p {
  color: #6B7280;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.btn-danger {
  background: #EF4444;
  color: white;
}

.btn-danger:hover {
  background: #DC2626;
}
```

---

## 🎯 ACESSIBILIDADE

### Tamanhos Mínimos

- **Texto corpo:** 16px (1rem)
- **Texto pequeno:** 14px (0.875rem) - apenas secundário
- **Botões/links:** min 44x44px (área de toque)
- **Espaçamento entre clicáveis:** min 8px

### Foco do Teclado

```css
/* Focus visível em todos elementos focáveis */
*:focus {
  outline: 2px solid #5A5AA4;
  outline-offset: 2px;
}

/* Remover outline apenas para mouse (não teclado) */
*:focus:not(:focus-visible) {
  outline: none;
}
```

**Navegação por Tab:**
- Ordem lógica e natural
- Skip links para pular navegação
- Todos elementos interativos alcançáveis

### Contraste WCAG 2.1 AA

Todos os textos devem ter contraste mínimo:
- **Texto normal:** 4.5:1
- **Texto grande (18px+):** 3:1
- **Elementos UI:** 3:1

---

## ✅ CHECKLIST FINAL - UX

**Implementar em TODOS os componentes:**

### Visual
- [ ] Hover states com sombreamento elegante
- [ ] Transições suaves (300ms ease-in-out)
- [ ] Paleta de cores harmônica e contrastada
- [ ] Campos proporcionais ao conteúdo
- [ ] Agrupamento visual em seções
- [ ] Espaçamento otimizado (evitar scroll desnecessário)

### Interação
- [ ] Loading states claros (skeleton/spinner)
- [ ] Validação em tempo real não agressiva
- [ ] Mensagens de erro amigáveis e claras
- [ ] Feedback visual imediato
- [ ] Tooltips em termos complexos
- [ ] Confirmação para ações críticas

### Acessibilidade
- [ ] Contraste WCAG AA mínimo
- [ ] Área de toque mín 44px (mobile)
- [ ] Focus visible para navegação teclado
- [ ] Labels descritivos em todos campos
- [ ] Textos alternativos em imagens

### Responsividade
- [ ] Testado em 320px (mobile pequeno)
- [ ] Testado em 768px (tablet)
- [ ] Testado em 1024px (desktop)
- [ ] Testado em 1440px (desktop large)

### Formulário
- [ ] Multi-step com progresso visual
- [ ] Máscaras de entrada aplicadas
- [ ] Validações específicas por campo
- [ ] Placeholders com exemplos reais
- [ ] Auto-save do progresso
- [ ] CEP automático (Brasil)
- [ ] Campos adaptativos por país
- [ ] Select searchable (Estado, Cidade, País)

### Conteúdo
- [ ] Empty states informativos
- [ ] Ajuda contextual disponível
- [ ] Mensagens de sucesso/erro claras
- [ ] Indicadores de loading
- [ ] Toasts/notificações posicionadas

---

**FIM DAS DIRETRIZES DE UX**

---

## 📏 HIERARQUIA DE TÍTULOS PADRONIZADA (Checkpoint #8)

**Última atualização:** 23/10/2025 - Checkpoint #8

### Sistema de Títulos Responsivos

```tsx
// H1 - Título Principal da Página
// Desktop: 56px | Tablet: 48px | Mobile: 40px
className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-roxo-medio mb-8"
style={{letterSpacing: '-1px'}}
// Weight: 300 (Thin)
// Uso: Nome da página, hero titles

// H2 - Título de Seção
// Desktop: 40px | Tablet: 32px | Mobile: 28px
className="text-2xl md:text-3xl lg:text-4xl font-router-thin text-roxo-medio mb-6"
// Weight: 300 (Thin)
// Uso: Divisões principais da página

// H3 - Subtítulo / Título de Card
// Desktop: 28px | Tablet: 24px | Mobile: 20px
className="text-xl md:text-2xl font-router text-azul-marinho mb-4"
// Weight: 400 (Normal/Regular)
// Uso: Cards, blocos de conteúdo, subsections

// H4 - Texto de Destaque
// Desktop/Mobile: 20px
className="text-lg font-router-medium text-azul-escuro mb-3"
// Weight: 500 (Medium)
// Uso: Pequenos destaques, labels importantes
```

### Weights da Fonte Router

```css
/* Router Thin */
font-weight: 300;
/* Uso: H1, H2 - Títulos principais */

/* Router Regular */
font-weight: 400;
/* Uso: H3, corpo de texto */

/* Router Medium */
font-weight: 500;
/* Uso: H4, botões, links importantes */

/* Router Bold */
font-weight: 700;
/* Uso: CTAs muito fortes, avisos críticos */
```

### Quando Usar Cada Título

| Elemento | Uso | Exemplo |
|----------|-----|---------|
| **H1** | Nome da página | "Sobre o Colégio" |
| **H2** | Seções principais | "Nossa História", "Missão e Valores" |
| **H3** | Cards, subsections | "Cursos Oferecidos", "Diretoria" |
| **H4** | Destaques menores | "Contato", "Horários" |

---

## 🎨 SISTEMA DE SOMBRAS PADRONIZADO (Checkpoint #8)

**Última atualização:** 23/10/2025 - Checkpoint #8

### Filosofia das Sombras

**Princípio:** Sombras sutis que sugerem elevação sem peso visual excessivo

**Cor base das sombras:** `rgba(27, 34, 63, ...)` (Azul Marinho)

### Headers

```css
/* Header Normal (sem scroll) */
.header {
  box-shadow: none;
  background: #ECE0F0; /* Lilás Quase Branco */
}

/* Header com Scroll */
.header.scrolled {
  box-shadow: 0 2px 8px rgba(27, 34, 63, 0.08);
  background: #FFFFFF; /* Opcionalmente muda para branco */
}
```

**Motivo:** 
- Headers limpos sem sombra no topo da página
- Sombra aparece ao scrollar para indicar elevação
- Transição suave (300ms)

### Cards e Blocos de Conteúdo

```css
/* Card Normal */
.card {
  box-shadow: 0 2px 8px rgba(27, 34, 63, 0.08);
  transition: all 300ms ease-in-out;
}

/* Card Hover */
.card:hover {
  box-shadow: 0 8px 16px rgba(27, 34, 63, 0.12);
  transform: translateY(-4px);
}
```

**Tailwind Classes:**
```tsx
// Card normal
className="shadow-sm hover:shadow-md"

// Card com elevação maior
className="shadow-md hover:shadow-lg"
```

### Botões

```css
/* Botão Normal */
.button {
  box-shadow: 0 2px 4px rgba(27, 34, 63, 0.1);
}

/* Botão Hover */
.button:hover {
  box-shadow: 0 4px 8px rgba(27, 34, 63, 0.15);
  transform: translateY(-2px);
}

/* Botão Active (pressionado) */
.button:active {
  box-shadow: 0 1px 2px rgba(27, 34, 63, 0.05);
  transform: translateY(0);
}
```

### Modais e Dropdowns

```css
/* Modal */
.modal {
  box-shadow: 0 20px 40px rgba(27, 34, 63, 0.2);
}

/* Dropdown Menu */
.dropdown {
  box-shadow: 0 10px 20px rgba(27, 34, 63, 0.15);
}
```

### Regras de Uso

1. **Nunca usar sombras pretas puras** - Sempre usar azul marinho com opacidade
2. **Sombras crescem com hover** - Indicam interatividade
3. **Headers sem sombra** - Exceto quando scrollado
4. **Cards sempre com sombra** - Mesmo que sutil
5. **Transições suaves** - 300ms ease-in-out

### Opacidades Padronizadas

```
0.05 - Mínima (botão pressionado)
0.08 - Suave (cards normais, header scrolled)
0.10 - Leve (botões normais)
0.12 - Média (cards hover)
0.15 - Pronunciada (botões hover, dropdowns)
0.20 - Forte (modais)
```

---

**Nota:** Estas especificações foram documentadas no Checkpoint #8 e devem ser seguidas rigorosamente em todas as implementações futuras.
