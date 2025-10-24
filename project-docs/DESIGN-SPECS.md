# ESPECIFICAÇÕES DE DESIGN

**Última atualização:** 2025-10-23 (Checkpoint #10)

---

## 🎨 SISTEMA DE DESIGN - COLÉGIO TRADIÇÃO

### Princípios de Design

1. **Elegância Espiritual:** Visual refinado que transmite serenidade
2. **Hierarquia Clara:** Usuário sabe onde olhar primeiro
3. **Acessibilidade:** Contraste adequado (WCAG AA mínimo)
4. **Consistência:** Padrões visuais repetíveis
5. **Responsividade:** Funciona em todos os dispositivos

---

## 🎨 PALETA DE CORES OFICIAL

### Cores Primárias

```css
:root {
  /* Cores de Marca */
  --azul-marinho: #1B223F;       /* Títulos H1, Footer, textos fortes */
  --azul-escuro: #26377F;        /* Títulos H2, Links, Menu */
  --roxo-medio: #5A5AA4;         /* Botões CTA, Hover, Destaques */
  
  /* Cores de Suporte */
  --lilas-claro: #C6C0E1;        /* Bordas, Divisores */
  --lavanda: #DDCFE8;            /* Fundos de Cards */
  --lilas-quase-branco: #ECE0F0; /* Fundos Suaves, Headers */
  
  /* Cores de Texto */
  --gray-text: #4A5568;          /* Texto Corpo Principal */
  --gray-medium: #718096;        /* Texto Secundário */
  
  /* Cores Estruturais */
  --branco: #FFFFFF;             /* Fundo Principal, H3 em Cards */
}
```

### Mapeamento Tailwind

```typescript
// tailwind.config.ts
colors: {
  'azul-marinho': '#1B223F',
  'azul-escuro': '#26377F',
  'roxo-medio': '#5A5AA4',
  'lilas-claro': '#C6C0E1',
  'lavanda': '#DDCFE8',
  'lilas-quase-branco': '#ECE0F0',
  'gray-text': '#4A5568',
  'gray-medium': '#718096',
}
```

### Uso das Cores

| Cor | Uso Principal | Onde Aplicar |
|-----|---------------|--------------|
| **Azul Marinho** | Títulos H1, Rodapé | Máximo contraste e presença |
| **Azul Escuro** | Títulos H2, Links | Hierarquia secundária |
| **Roxo Médio** | Botões CTA, Hover | Ações e interações |
| **Lilás Claro** | Bordas, Detalhes | Sutileza e elegância |
| **Lavanda** | Fundos de Cards | Destaque suave |
| **Lilás Quase Branco** | Fundos Headers | Leveza e clareza |
| **Cinza Texto** | Corpo de Texto | Leitura confortável |
| **Cinza Médio** | Texto Secundário | Informações de apoio |
| **Branco** | Fundo, H3 em Cards | Contraste máximo |

---

## 🔤 TIPOGRAFIA

### Sistema de Fontes (Checkpoint #10)

**Família Única com Múltiplos Weights:**

```css
/* Router - Família ÚNICA */
@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Extralight.otf');
  font-weight: 200;
}

@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Thin.otf');
  font-weight: 300;
}

@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router.otf');
  font-weight: 400; /* Padrão */
}

@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Medium.otf');
  font-weight: 500;
}

@font-face {
  font-family: 'Router';
  src: url('/fonts/fonnts.com-Router_Bold.otf');
  font-weight: 700;
}

/* Kaushan Script - Apenas título da home */
@font-face {
  font-family: 'Kaushan Script';
  src: url('/fonts/kaushan-script-v19-latin-regular.woff2');
  font-weight: 400;
}
```

### Classes CSS Customizadas

```css
.font-router-thin {
  font-family: 'Router', sans-serif;
  font-weight: 300;
}

.font-router-medium {
  font-family: 'Router', sans-serif;
  font-weight: 500;
}

.font-router-bold {
  font-family: 'Router', sans-serif;
  font-weight: 700;
}
```

### Configuração Tailwind

```typescript
// tailwind.config.ts
fontFamily: {
  'kaushian': ['Kaushan Script', 'cursive'],
  'router': ['Router', 'sans-serif'], // Apenas UMA família
}
```

---

## 📐 HIERARQUIA TIPOGRÁFICA (Checkpoint #10)

### H1 - Título Principal

```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-azul-marinho mb-8" 
    style={{letterSpacing: '-1px'}}>
  Título da Página
</h1>
```

**Especificações:**
- **Cor:** `#1B223F` (azul-marinho)
- **Peso:** 300 (thin)
- **Tamanho:** 30px / 36px / 48px (mobile/tablet/desktop)
- **Letter-spacing:** -1px
- **Uso:** 1 por página

---

### H2 - Títulos de Seção

```tsx
<h2 className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6 mt-12">
  Título da Seção
</h2>
```

**Especificações:**
- **Cor:** `#26377F` (azul-escuro)
- **Peso:** 300 (thin)
- **Tamanho:** 24px / 30px (mobile/desktop)
- **Uso:** Múltiplos por página

---

### H3 - Títulos em Cards

```tsx
<h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
    style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
  Título do Card
</h3>
```

**Especificações:**
- **Cor:** `#FFFFFF` (branco) - **APENAS em cards coloridos**
- **Peso:** 700 (bold)
- **Tamanho:** 20px / 24px (mobile/desktop)
- **Text-shadow:** Sutil para legibilidade
- **Uso:** Dentro de `.card` ou `.card-white`

**⚠️ IMPORTANTE:** H3 branco APENAS sobre fundos coloridos (lavanda, lilás-quase-branco)

---

### Texto Corpo

```tsx
<p className="text-base font-router text-gray-text leading-relaxed mb-4">
  Texto do conteúdo principal.
</p>
```

**Especificações:**
- **Cor:** `#4A5568` (gray-text)
- **Peso:** 400 (regular)
- **Tamanho:** 16px
- **Line-height:** 1.625

---

### Texto Secundário

```tsx
<span className="text-sm font-router text-gray-medium">
  Informação secundária
</span>
```

**Especificações:**
- **Cor:** `#718096` (gray-medium)
- **Peso:** 400 (regular)
- **Tamanho:** 14px

---

## 📊 TABELA RESUMO - TIPOGRAFIA

| Elemento | Cor | Weight | Mobile | Desktop | Uso |
|----------|-----|--------|--------|---------|-----|
| H1 | Azul-marinho<br/>`#1B223F` | 300<br/>(thin) | 30px | 48px | Título página (1x) |
| H2 | Azul-escuro<br/>`#26377F` | 300<br/>(thin) | 24px | 30px | Seções (múltiplos) |
| H3 | Branco<br/>`#FFFFFF` | 700<br/>(bold) | 20px | 24px | Cards coloridos |
| Texto | Cinza-texto<br/>`#4A5568` | 400<br/>(regular) | 16px | 16px | Corpo principal |
| Secundário | Cinza-médio<br/>`#718096` | 400<br/>(regular) | 14px | 14px | Apoio/labels |

---

## 🎨 COMPONENTES VISUAIS

### Footer

**Especificações (ATUALIZADO - 24/10/2025):**
```tsx
<footer className="bg-azul-marinho text-white py-12 mt-16">
  {/* Títulos H3 */}
  <H3 variant="default" className="mb-4">
    Colégio de Magia Divina
  </H3>
  
  {/* Parágrafos - TODOS BRANCOS */}
  <P variant="secondary" size="sm" className="mb-0 text-white">
    Instituição oficial de ensino e preservação da Magia Divina.
  </P>
  
  {/* Links - BRANCOS com hover lilás-claro */}
  <Link href="/sobre-colegio" variant="light" 
        className="text-white hover:text-lilas-claro">
    Sobre o Colégio
  </Link>
  
  {/* Copyright - BRANCO */}
  <P variant="secondary" size="sm" className="mb-0 text-white">
    © 2025 Colégio Tradição de Magia Divina. Todos os direitos reservados.
  </P>
</footer>
```

**Características:**
- ✅ Fundo: `#1B223F` (azul-marinho)
- ✅ Títulos H3: Brancos (via Typography variant="default")
- ✅ Parágrafos: Brancos (`text-white` override)
- ✅ Links: Brancos com hover lilás-claro (`#C6C0E1`)
- ✅ Copyright: Branco
- ✅ Padding vertical: 48px (py-12)
- ✅ Grid: 3 colunas em desktop (md:grid-cols-3)
- ✅ Borda superior no copyright: `border-azul-escuro`

**Motivo da decisão:**
- Máxima legibilidade sobre fundo azul-marinho escuro
- Conformidade com mockup oficial
- Contraste adequado para acessibilidade (WCAG AAA)

**Commit:** 121ef92  
**Status:** ✅ Implementado

---

### Cards

**Especificações:**
```tsx
// Card Lavanda
<div className="bg-lavanda p-8" style={{borderRadius: 0}}>
  <h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
      style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
    Título
  </h3>
  <p className="text-base font-router text-gray-text">Conteúdo</p>
</div>

// Card Lilás Quase Branco
<div className="bg-lilas-quase-branco p-8" style={{borderRadius: 0}}>
  <h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
      style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
    Título
  </h3>
  <p className="text-base font-router text-gray-text">Conteúdo</p>
</div>
```

**Características:**
- ✅ **border-radius: 0** (quadrados)
- ✅ Padding: 32px (p-8)
- ✅ H3 branco com text-shadow
- ✅ Texto corpo em cinza

---

**Ver arquivo completo para mais especificações de botões, links, espaçamentos, sombras e responsividade.**

---

**Última Revisão:** 23/10/2025 - Checkpoint #10  
**Próxima Revisão:** Após implementação do Checkpoint #10
