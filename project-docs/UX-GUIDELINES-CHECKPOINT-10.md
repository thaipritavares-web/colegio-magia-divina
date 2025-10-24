# ADENDO UX-GUIDELINES - CHECKPOINT #10

**Data:** 23/10/2025  
**Tema:** Hierarquia de Cores Tipográfica Otimizada

---

## 🎨 ATUALIZAÇÃO: HIERARQUIA DE CORES E TIPOGRAFIA

### ⚠️ IMPORTANTE

Esta seção **SUBSTITUI** as especificações anteriores de hierarquia tipográfica.  
Use estas especificações para TODAS as implementações futuras.

---

## 🎯 PROBLEMA IDENTIFICADO (Audit UX - Checkpoint #10)

**Antes da correção:**
- ❌ H1/H2 em roxo claro (#5A5AA4) - **pouco contraste**
- ❌ Textos em azul escuro (#26377F) - **contraste forte demais**
- ❌ Resultado: **Textos chamavam MAIS atenção que títulos**
- ❌ Hierarquia visual **invertida**

**Impacto:** Usuário não conseguia escanear a página eficientemente.

---

## ✅ SOLUÇÃO IMPLEMENTADA

### Sistema de Cores Hierárquico

```
FLUXO DE ATENÇÃO VISUAL (do mais forte ao mais fraco):

H1 (#1B223F azul-marinho) ━━━━━ Contraste MÁXIMO
    ↓
H2 (#26377F azul-escuro)  ━━━━━ Contraste ALTO
    ↓
H3 (#FFFFFF branco)       ━━━━━ Contraste MÁXIMO (em cards)
    ↓
Texto (#4A5568 cinza)     ━━━━━ Leitura confortável
    ↓
Texto secundário (#718096) ━━━━ Menos destaque
```

---

## 📐 ESPECIFICAÇÕES TÉCNICAS

### H1 - Título Principal da Página

**Uso:** Apenas 1 por página, título principal

```tsx
// Implementação padrão
<h1 className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-azul-marinho mb-8" 
    style={{letterSpacing: '-1px'}}>
  Título da Página
</h1>
```

**Especificações:**
- **Cor:** `#1B223F` (azul-marinho) - Variável `--azul-marinho`
- **Peso:** `300` (thin) - Classe `font-router-thin`
- **Tamanho:** 
  - Mobile (< 768px): `3xl` (30px / 1.875rem)
  - Tablet (768-1024px): `4xl` (36px / 2.25rem)
  - Desktop (> 1024px): `5xl` (48px / 3rem)
- **Espaçamento:** `letter-spacing: -1px` (mais compacto)
- **Margem inferior:** `mb-8` (32px)

**CSS equivalente:**
```css
h1 {
  font-family: 'Router', sans-serif;
  font-weight: 300;
  color: #1B223F;
  letter-spacing: -1px;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  h1 { font-size: 1.875rem; } /* 30px */
}
@media (min-width: 768px) and (max-width: 1024px) {
  h1 { font-size: 2.25rem; } /* 36px */
}
@media (min-width: 1024px) {
  h1 { font-size: 3rem; } /* 48px */
}
```

---

### H2 - Títulos de Seção

**Uso:** Múltiplos por página, divide seções de conteúdo

```tsx
// Implementação padrão
<h2 className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6 mt-12">
  Título da Seção
</h2>
```

**Especificações:**
- **Cor:** `#26377F` (azul-escuro) - Variável `--azul-escuro`
- **Peso:** `300` (thin) - Classe `font-router-thin`
- **Tamanho:** 
  - Mobile: `2xl` (24px / 1.5rem)
  - Desktop: `3xl` (30px / 1.875rem)
- **Margem inferior:** `mb-6` (24px)
- **Margem superior:** `mt-12` (48px) - Espaço entre seções

**CSS equivalente:**
```css
h2 {
  font-family: 'Router', sans-serif;
  font-weight: 300;
  color: #26377F;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  h2 { font-size: 1.5rem; } /* 24px */
}
@media (min-width: 768px) {
  h2 { font-size: 1.875rem; } /* 30px */
}
```

---

### H3 - Títulos dentro de Cards/Caixas

**Uso:** Dentro de elementos com background colorido (lavanda, lilás-quase-branco)

```tsx
// Implementação padrão
<h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
    style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
  Título do Card
</h3>
```

**Especificações:**
- **Cor:** `#FFFFFF` (branco) - **APENAS dentro de cards coloridos**
- **Peso:** `700` (bold) - Classe `font-router-bold`
- **Tamanho:** 
  - Mobile: `xl` (20px / 1.25rem)
  - Desktop: `2xl` (24px / 1.5rem)
- **text-shadow:** `0 1px 2px rgba(0, 0, 0, 0.1)` - Sutil para legibilidade
- **Margem inferior:** `mb-4` (16px)

**CSS equivalente:**
```css
/* H3 dentro de cards coloridos */
.card h3,
.card-white h3 {
  font-family: 'Router', sans-serif;
  font-weight: 700;
  color: #FFFFFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .card h3 { font-size: 1.25rem; } /* 20px */
}
@media (min-width: 768px) {
  .card h3 { font-size: 1.5rem; } /* 24px */
}
```

**⚠️ IMPORTANTE:** H3 branco APENAS em cards com fundo colorido:
- ✅ Dentro de `.card` (fundo lavanda #DDCFE8)
- ✅ Dentro de `.card-white` (fundo lilás-quase-branco #ECE0F0)
- ❌ **NÃO usar** em fundo branco (usar azul-marinho)

---

### Texto Corpo Principal

**Uso:** Parágrafos, descrições, conteúdo principal

```tsx
// Implementação padrão
<p className="text-base font-router text-gray-text leading-relaxed mb-4">
  Texto do conteúdo principal da página.
</p>
```

**Especificações:**
- **Cor:** `#4A5568` (gray-text) - Variável `--gray-text`
- **Peso:** `400` (regular) - Padrão
- **Tamanho:** `base` (16px / 1rem)
- **Line-height:** `leading-relaxed` (1.625)
- **Margem inferior:** `mb-4` (16px)

**CSS equivalente:**
```css
p {
  font-family: 'Router', sans-serif;
  font-weight: 400;
  color: #4A5568;
  font-size: 1rem;
  line-height: 1.625;
  margin-bottom: 1rem;
}
```

---

### Texto Secundário

**Uso:** Labels, legendas, texto de apoio

```tsx
// Implementação padrão
<span className="text-sm font-router text-gray-medium">
  Texto secundário
</span>
```

**Especificações:**
- **Cor:** `#718096` (gray-medium) - Variável `--gray-medium`
- **Peso:** `400` (regular)
- **Tamanho:** `sm` (14px / 0.875rem)

---

## 🎨 CONTEXTOS DE USO

### Cards com Fundo Colorido

```tsx
// Card Lavanda
<div className="bg-lavanda p-8">
  <h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
      style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
    Principais Graus
  </h3>
  <p className="text-base font-router text-gray-text leading-relaxed">
    Conteúdo do card em cinza para leitura confortável.
  </p>
</div>

// Card Lilás Quase Branco
<div className="bg-lilas-quase-branco p-8">
  <h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
      style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
    Como Começar?
  </h3>
  <p className="text-base font-router text-gray-text leading-relaxed">
    Texto do conteúdo.
  </p>
</div>
```

---

## 📊 TABELA RESUMO - HIERARQUIA COMPLETA

| Elemento | Cor | HEX | Weight | Tamanho (Mobile/Desktop) | Uso |
|----------|-----|-----|--------|--------------------------|-----|
| **H1** | Azul-marinho | `#1B223F` | 300 (thin) | 30px / 48px | Título da página (1x) |
| **H2** | Azul-escuro | `#26377F` | 300 (thin) | 24px / 30px | Seções (múltiplos) |
| **H3** | Branco | `#FFFFFF` | 700 (bold) | 20px / 24px | Cards coloridos |
| **Texto** | Cinza-texto | `#4A5568` | 400 (regular) | 16px | Corpo principal |
| **Secundário** | Cinza-médio | `#718096` | 400 (regular) | 14px | Labels, apoio |

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

Ao criar uma nova página, verificar:

- [ ] H1 usa `text-azul-marinho` + `font-router-thin`
- [ ] H2 usa `text-azul-escuro` + `font-router-thin`
- [ ] H3 dentro de cards usa `text-white` + `font-router-bold` + `text-shadow`
- [ ] Textos corpo usam `text-gray-text` + `font-router`
- [ ] Cards têm `border-radius: 0` (quadrados)
- [ ] Responsividade testada (320px, 768px, 1024px, 1440px)
- [ ] Contraste validado (mínimo AA WCAG)

---

## 🎯 BENEFÍCIOS DA HIERARQUIA

1. **Escaneabilidade:** Olho vai H1 → H2 → H3 → Texto
2. **Contraste:** Títulos escuros em fundo claro = máxima legibilidade
3. **Destaque:** H3 branco "salta" das caixas coloridas
4. **Leitura:** Texto cinza confortável, não compete com títulos
5. **Acessibilidade:** Contraste adequado para WCAG AA/AAA

---

## 📐 EXEMPLO COMPLETO DE PÁGINA

```tsx
export default function ExemploPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* H1 - Título Principal */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-router-thin text-azul-marinho mb-8" 
          style={{letterSpacing: '-1px'}}>
        A Magia Divina
      </h1>

      {/* H2 - Seção */}
      <h2 className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6 mt-12">
        O que é Magia Divina?
      </h2>

      {/* Texto Corpo */}
      <p className="text-base font-router text-gray-text leading-relaxed mb-4">
        A Magia Divina é um conjunto de conhecimentos e práticas sagradas que 
        permitem ao praticante trabalhar conscientemente com as energias divinas.
      </p>

      {/* H2 - Nova Seção */}
      <h2 className="text-2xl md:text-3xl font-router-thin text-azul-escuro mb-6 mt-12">
        Os Graus de Magia
      </h2>

      <p className="text-base font-router text-gray-text leading-relaxed mb-4">
        O conhecimento da Magia Divina está organizado em diversos graus.
      </p>

      {/* Card com H3 Branco */}
      <div className="bg-lavanda p-8 mt-6">
        <h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
            style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
          Principais Graus
        </h3>
        <p className="text-base font-router text-gray-text leading-relaxed">
          • Magia Sagrada das Sete Chamas<br/>
          • Magia Sagrada das Sete Pedras<br/>
          • Magia Sagrada das Sete Ervas Sagradas
        </p>
      </div>

      {/* Card Lilás */}
      <div className="bg-lilas-quase-branco p-8 mt-6">
        <h3 className="text-xl md:text-2xl font-router-bold text-white mb-4"
            style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
          Como Começar?
        </h3>
        <p className="text-base font-router text-gray-text leading-relaxed mb-4">
          Para iniciar-se na Magia Divina, é necessário buscar um Mago Iniciador 
          certificado pelo Colégio.
        </p>
        <a href="/membros" 
           className="inline-block bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-3 transition-colors">
          Buscar Iniciadores
        </a>
      </div>

    </div>
  )
}
```

---

## 🔄 PÁGINAS QUE PRECISAM ATUALIZAÇÃO

### Prioridade ALTA:
- [ ] `app/magia-divina/page.tsx` - 4 H2s incorretos
- [ ] `app/afilie-se/page.tsx` - 2 H2s incorretos

### Prioridade MÉDIA:
- [ ] `app/sobre-colegio/page.tsx` - Validar hierarquia
- [ ] `app/rubens-saraceni/page.tsx` - Validar H3 em card

### OK (Placeholders):
- [x] `app/membros/page.tsx`
- [x] `app/faq/page.tsx`
- [x] `app/blog/page.tsx`

---

## 📅 HISTÓRICO DE MUDANÇAS

**Checkpoint #10 (23/10/2025):**
- ✅ Auditoria UX completa
- ✅ Nova hierarquia de cores definida
- ✅ H3 branco em cards aprovado
- ✅ Sistema de fontes unificado
- 🔄 Aguardando implementação

**Checkpoint #7 (20/10/2025):**
- Hierarquia inicial com roxo-medio
- Identificado problema de contraste

---

**ESTE ADENDO DEVE SER INSERIDO NO UX-GUIDELINES.md APÓS A SEÇÃO DE CHECKPOINTS.**

---

**Data de criação:** 23/10/2025  
**Autor:** Checkpoint #10 - Auditoria UX  
**Status:** ✅ Aprovado, aguardando implementação
