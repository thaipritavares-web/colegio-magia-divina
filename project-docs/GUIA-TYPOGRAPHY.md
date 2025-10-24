# 🎨 GUIA RÁPIDO - COMPONENTES TYPOGRAPHY

## 📦 IMPORTAÇÃO

```tsx
import { H1, H2, H3, P, CustomLink } from '@/components/Typography'
```

---

## 🎯 USO BÁSICO

### Títulos e Textos
```tsx
// Página simples
<H1>Título Principal</H1>
<H2 className="mt-12 mb-6">Seção</H2>
<P>Seu texto aqui.</P>
```

---

## 🎨 VARIANTES

### H1, H2, H3
```tsx
<H1>Padrão azul-marinho</H1>
<H1 variant="gradient">Gradiente</H1>

<H3>Padrão (azul-marinho em fundo claro)</H3>
<H3 variant="white">Branco (em cards coloridos)</H3>
```

### Parágrafos
```tsx
<P>Padrão cinza</P>
<P variant="secondary">Cinza mais claro</P>
<P variant="light">Claro (footer)</P>
```

### Links
```tsx
<CustomLink href="/pagina">Link padrão</CustomLink>
<CustomLink href="/pagina" variant="light">Link claro</CustomLink>
```

---

## 📏 TAMANHOS

```tsx
<H1>Padrão</H1>
<P size="sm">Pequeno</P>
<P size="lg">Grande</P>
<P size="xl">Extra grande</P>
```

---

## 🎴 EXEMPLO COMPLETO - CARD

```tsx
<Card variant="lavanda">
  <H3>Título do Card</H3>
  <P className="mb-6">
    Descrição do conteúdo do card.
  </P>
  <CustomLink href="/link">Saiba mais →</CustomLink>
</Card>
```

---

## ⚠️ O QUE NÃO FAZER

```tsx
// ❌ NÃO adicione classes de cor
<H1 className="text-roxo-medio">Título</H1>

// ❌ NÃO adicione classes de fonte
<P className="font-router-bold">Texto</P>

// ✅ Use variantes
<H1 variant="gradient">Título</H1>
```

---

## ✅ O QUE PODE FAZER

```tsx
// ✅ Classes de layout
<H1 className="mb-8 text-center">Título</H1>

// ✅ Classes de espaçamento
<P className="mt-4 mb-6">Texto</P>

// ✅ Classes utilitárias
<P className="max-w-3xl mx-auto">Texto</P>
```

---

## 🏷️ QUANDO USAR CADA COMPONENTE

| Componente | Uso |
|-----------|-----|
| `<H1>` | Título da página (1 por página) |
| `<H2>` | Títulos de seção |
| `<H3>` | Subtítulos em cards |
| `<P>` | Parágrafos e textos |
| `<CustomLink>` | Links internos |

---

## 🎯 EXEMPLOS PRÁTICOS

### Página de conteúdo
```tsx
export default function Pagina() {
  return (
    <div className="container mx-auto px-4 py-16">
      <H1>Título da Página</H1>
      
      <section className="mb-12">
        <H2>Seção 1</H2>
        <P size="lg">
          Introdução da seção com texto maior.
        </P>
      </section>

      <Card>
        <H3>Card de Destaque</H3>
        <P>Conteúdo do card.</P>
      </Card>
    </div>
  )
}
```

### Footer (fundo escuro)
```tsx
<footer className="bg-azul-marinho">
  <H3 variant="white">Título</H3>
  <P variant="light" size="sm">Texto claro</P>
  <CustomLink href="/link" variant="light">Link</CustomLink>
</footer>
```

---

**🚀 Pronto! Use os componentes e esqueça os estilos inline!**
