# ESPECIFICAÇÕES DE DESIGN

**Última atualização:** 2025-10-23 (Checkpoint #9.5)

---

## 🎨 BASEADO NAS IMAGENS FORNECIDAS

### Imagem 1: Header da Home (HeaderHome.tsx)

**Características observadas:**
- Logo circular centralizada com símbolos coloridos (roda de cores)
- Título em fonte estilizada: "Colégio Tradição de Magia Divina"
  - Fonte: Kaushian Script (cursiva elegante)
  - Cor: Azul escuro (`#1B223F` ou `#26377F`)
- Subtítulo explicativo abaixo
  - Texto: "Subtítulo que define o contexto, compartilha mais informações sobre o site ou, de modo geral, estimula as pessoas a continuar conferindo a página."
  - Cor: Texto mais claro
- Menu de navegação superior:
  - Itens: Sobre o Colégio | Rubens Saraceni | A Magia Divina | Membros | FAQ | Blog | Afilie-se
  - **Login** (botão destacado à direita)
  - Cor dos links: `#26377F` (Azul Escuro)
  - Botão Login: `#5A5AA4` (Roxo/Azul Médio) com texto branco
- Background: `#ECE0F0` (Lilás Quase Branco) ou similar muito claro

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  Sobre │ Rubens │ Magia │ Membros │ FAQ │ Blog │ Afilie-se │ [Login] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                        ╭─────────╮                          │
│                        │  Logo   │                          │
│                        │ Circular│                          │
│                        ╰─────────╯                          │
│                                                             │
│           Colégio Tradição de Magia Divina                  │
│                   (Kaushian Script)                         │
│                                                             │
│         Subtítulo explicativo do colégio...                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### Imagem 2: Header Padrão (Header.tsx - demais páginas)

**Características observadas:**
- Logo circular MENOR à esquerda
- Texto "COLÉGIO TRADIÇÃO DE MAGIA DIVINA" abaixo da logo
  - Fonte: Router (não cursiva)
  - Tamanho menor que na home
  - Cor: Azul escuro
- Menu horizontal à direita (mesmos itens da home)
- Mais compacto que o HeaderHome
- Background: `#ECE0F0` (Lilás Quase Branco)

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ╭───╮  COLÉGIO        Sobre│Rubens│Magia│Membros│FAQ│Blog│Afilie-se│[Login]│
│  │Logo│  TRADIÇÃO                                            │
│  ╰───╯  DE MAGIA DIVINA                                      │
└─────────────────────────────────────────────────────────────┘
```

---

### Imagem 3: Footer (Footer.tsx - todas as páginas)

**Características observadas:**
- Background: `#1B223F` (Azul Marinho Escuro) - muito escuro
- Texto: `#C6C0E1` (Lilás Claro) - contraste adequado
- **3 Colunas:**

**Coluna 1: Sobre**
- Título: "Colégio Tradição de Magia Divina"
- Texto descritivo: "Instituição dedicada ao ensino e preservação dos conhecimentos da Magia Divina segundo os ensinamentos de Rubens Saraceni"

**Coluna 2: Links Rápidos**
- Título: "Links Rápidos"
- Links:
  - Sobre o Colégio
  - Rubens Saraceni
  - A Magia Divina
  - Consulta de Membros
  - FAQ
  - Afilie-se

**Coluna 3: Contato**
- Título: "Contato"
- Email: contato@colegiotradição.com.br (ou similar)
- Atendimento: Seg-Sex, 9h-18h

**Rodapé final:**
- Centralizado
- Texto: "© 2025 Colégio Tradição de Magia Divina. Todos os direitos reservados."
- Cor: `#C6C0E1` (mesmo do texto)

**Layout:**
```
┌────────────────────────────────────────────────────────────────────┐
│  [Fundo: #1B223F - Azul Marinho Escuro]                           │
│  [Texto: #C6C0E1 - Lilás Claro]                                   │
│                                                                    │
│  ┌──────────────┬──────────────┬──────────────┐                   │
│  │   COLUNA 1   │   COLUNA 2   │   COLUNA 3   │                   │
│  │              │              │              │                   │
│  │ Colégio      │ Links Ráp.   │ Contato      │                   │
│  │ Tradição...  │              │              │                   │
│  │              │ • Sobre      │ Email:       │                   │
│  │ Instituição  │ • Rubens     │ contato@...  │                   │
│  │ dedicada...  │ • Magia Div. │              │                   │
│  │              │ • Membros    │ Atendimento: │                   │
│  │              │ • FAQ        │ Seg-Sex      │                   │
│  │              │ • Afilie-se  │ 9h-18h       │                   │
│  └──────────────┴──────────────┴──────────────┘                   │
│                                                                    │
│  ─────────────────────────────────────────────────────────────    │
│                                                                    │
│     © 2025 Colégio Tradição de Magia Divina. Todos direitos.      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 PALETA APLICADA

### Cores Primárias (das imagens):
- **#1B223F** - Azul Marinho Escuro
  - Footer background
  - Textos principais
  
- **#26377F** - Azul Escuro
  - Links no menu
  - Hover states
  
- **#5A5AA4** - Roxo/Azul Médio
  - Botão "Login" (destaque)
  - CTAs principais
  
- **#C6C0E1** - Lilás Claro
  - Texto do footer
  - Texto secundário
  
- **#ECE0F0** - Lilás Quase Branco
  - Background header/headerHome
  - Seções alternadas

---

## 🔤 TIPOGRAFIA

### Família de Fontes

**Kaushan Script** - Apenas para o nome do colégio
- Uso: Título principal "Colégio Tradição de Magia Divina" no HeaderHome
- Estilo: Cursiva elegante, manuscrita
- Cor: Azul escuro (`#1B223F` ou `#26377F`)

**Router** - Para todo o resto do site
- Uso: Corpo de texto, títulos, menus, botões
- Variações disponíveis: Thin (300), Regular (400), Medium (500), Bold (700)

### Pesos de Fonte Router

| Weight | Valor | Classe Tailwind | Uso |
|--------|-------|-----------------|-----|
| **Thin** | 300 | `font-router-thin` | H1, H2 (títulos principais) |
| **Regular** | 400 | `font-router` | H3, corpo de texto, parágrafos |
| **Medium** | 500 | `font-router-medium` | H4, botões, links importantes |
| **Bold** | 700 | `font-router-bold` | CTAs muito fortes, avisos críticos |

### Hierarquia de Títulos

```tsx
// H1 - Título Principal da Página
// Desktop: 56px | Tablet: 48px | Mobile: 40px
className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-roxo-medio mb-8"
style={{letterSpacing: '-1px'}}
// Uso: Nome da página, hero titles

// H2 - Título de Seção
// Desktop: 40px | Tablet: 32px | Mobile: 28px
className="text-2xl md:text-3xl lg:text-4xl font-router-thin text-roxo-medio mb-6"
// Uso: Divisões principais da página

// H3 - Subtítulo / Título de Card
// Desktop: 28px | Tablet: 24px | Mobile: 20px
className="text-xl md:text-2xl font-router text-azul-marinho mb-4"
// Uso: Cards, blocos de conteúdo, subsections

// H4 - Texto de Destaque
// Desktop/Mobile: 20px
className="text-lg font-router-medium text-azul-escuro mb-3"
// Uso: Pequenos destaques, labels importantes

// Corpo de Texto
// Desktop/Mobile: 16px
className="text-base font-router text-azul-marinho"
// Uso: Parágrafos, conteúdo geral
```

---

## 📏 MEDIDAS E ESPAÇAMENTOS (Estimados)

### Header Home:
- Altura total: ~400-500px (com logo grande)
- Logo: ~150-200px diâmetro
- Título: ~48-60px font-size
- Subtítulo: ~18-20px font-size
- Menu superior: ~16px font-size
- Padding vertical: ~32px
- Padding horizontal: ~48-64px

### Header Padrão:
- Altura total: ~100-120px
- Logo: ~60-80px diâmetro
- Texto logo: ~14-16px font-size
- Menu: ~16px font-size
- Padding: ~16-24px

### Footer:
- Altura mínima: ~300-400px
- Padding vertical: ~48-64px
- Padding horizontal: ~48-64px
- Espaçamento entre colunas: ~32-48px
- Tamanho texto: ~14-16px
- Títulos colunas: ~18-20px font-size

---

## 🎯 COMPONENTES VISUAIS ESPECÍFICOS

### Logo:
- Circular
- Símbolos coloridos ao redor (representando as magias)
- Centro: pentagrama ou símbolo central
- Paleta: todas as cores da identidade visual

### Botão Login:
- Background: `#5A5AA4`
- Texto: Branco (`#FFFFFF`)
- Border-radius: ~8px (rounded-lg)
- Padding: ~12px 24px
- Hover: `#26377F` (mais escuro)
- Transição suave

### Links de Navegação:
- Cor padrão: `#26377F`
- Hover: `#5A5AA4` ou sublinhado
- Font-weight: normal ou medium
- Spacing entre links: ~24-32px

---

## 📱 RESPONSIVIDADE VISUAL

### Mobile (320px - 768px):
- **HeaderHome:**
  - Logo menor (~100px)
  - Título menor (~32px)
  - Menu → Hamburger
  
- **Header:**
  - Logo à esquerda
  - Hamburger à direita
  - Texto "COLÉGIO..." pode ser oculto ou reduzido
  
- **Footer:**
  - 3 colunas → 1 coluna (stack vertical)
  - Centralizadas
  - Espaçamento entre seções: ~32px

### Tablet (768px - 1024px):
- HeaderHome: Intermediário
- Header: Similar ao desktop, talvez menu compactado
- Footer: 2 colunas + 1 coluna embaixo

### Desktop (1024px+):
- Layout conforme imagens fornecidas
- Todas as 3 colunas visíveis no footer
- Menu completo horizontal

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### HeaderHome.tsx:
- [ ] Logo circular centralizada
- [ ] Título em Kaushian Script
- [ ] Subtítulo descritivo
- [ ] Menu superior horizontal
- [ ] Botão Login destacado
- [ ] Background `#ECE0F0`
- [ ] Responsivo (hamburger em mobile)

### Header.tsx:
- [ ] Logo menor à esquerda
- [ ] Texto institucional abaixo da logo
- [ ] Menu horizontal à direita
- [ ] Botão Login destacado
- [ ] Background `#ECE0F0`
- [ ] Responsivo (hamburger em mobile)

### Footer.tsx:
- [ ] Background `#1B223F`
- [ ] Texto `#C6C0E1`
- [ ] 3 colunas (Sobre | Links | Contato)
- [ ] Copyright centralizado
- [ ] Links funcionais
- [ ] Responsivo (1 coluna em mobile)

---

## 🎨 ARQUIVO TAILWIND CONFIG

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Oficial Colégio Tradição
        'azul-marinho': '#1B223F',
        'azul-escuro': '#26377F',
        'roxo-medio': '#5A5AA4',
        'lilas-claro': '#C6C0E1',
        'lavanda': '#DDCFE8',
        'lilas-quase-branco': '#ECE0F0',
      },
      fontFamily: {
        'kaushian': ['Kaushian Script', 'cursive'],
        'router': ['Router', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
```

---

**FIM DAS ESPECIFICAÇÕES DE DESIGN**
