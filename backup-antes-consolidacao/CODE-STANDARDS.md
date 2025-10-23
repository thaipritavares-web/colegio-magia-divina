# PADRÕES DE CÓDIGO - COLÉGIO TRADIÇÃO

**Última atualização:** 2025-10-18

---

## 🎨 TAILWIND CSS

### Princípios:
- **Mobile-first SEMPRE**
- Classes base = mobile (< 640px)
- Adicionar breakpoints progressivamente

### Breakpoints (usar nesta ordem):
```css
/* Base: mobile (padrão, sem prefixo) */
className="text-sm px-4"

/* sm: ≥ 640px (mobile landscape) */
className="text-sm sm:text-base"

/* md: ≥ 768px (tablet) */
className="text-sm md:text-lg"

/* lg: ≥ 1024px (desktop) */
className="text-sm lg:text-xl"

/* xl: ≥ 1280px (desktop large) */
className="text-sm xl:text-2xl"

/* 2xl: ≥ 1536px (desktop extra large) */
className="text-sm 2xl:text-3xl"
```

### Padrões de espaçamento:
```typescript
// Usar escala do Tailwind (múltiplos de 4)
padding: p-4 p-6 p-8 p-12 p-16
margin: m-4 m-6 m-8 m-12 m-16
gap: gap-4 gap-6 gap-8

// Evitar valores arbitrários quando possível
❌ className="p-[13px]"
✅ className="p-3" // 12px
```

### Cores:
```typescript
// Usar palette do Tailwind
// [A definir cores específicas do projeto após design]

// Exemplo de padrão:
primary: bg-blue-600 text-white
secondary: bg-gray-200 text-gray-800
accent: bg-purple-500 text-white
```

### Classes utilitárias preferidas:
```typescript
// Container responsivo
<div className="container mx-auto px-4">

// Grid responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flex com responsividade
<div className="flex flex-col md:flex-row items-center gap-4">

// Texto responsivo
<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
```

### ❌ EVITAR:
- CSS customizado inline
- Arquivos CSS separados (exceto se absolutamente necessário)
- !important
- Valores arbitrários excessivos

---

## ⚛️ COMPONENTES REACT

### Estrutura padrão:

```typescript
// 1. Imports
import { useState } from 'react';
import OtherComponent from './OtherComponent';

// 2. Interface de props (sempre tipar)
interface ComponentNameProps {
  title: string;
  items: string[];
  onAction?: () => void; // opcional com ?
}

// 3. Componente (export default)
export default function ComponentName({ 
  title, 
  items, 
  onAction 
}: ComponentNameProps) {
  // 4. Hooks no topo
  const [state, setState] = useState(false);
  
  // 5. Funções auxiliares
  const handleClick = () => {
    setState(true);
    onAction?.();
  };
  
  // 6. Return com JSX
  return (
    <div className="container">
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
```

### Regras:
- ✅ Um componente por arquivo
- ✅ Props com TypeScript interfaces
- ✅ Desestruturar props no parâmetro
- ✅ Export default
- ✅ Nome do arquivo = nome do componente
- ✅ "use client" apenas quando necessário

### Quando usar "use client":
```typescript
// ✅ Precisa de "use client"
- useState, useEffect, outros hooks
- Event handlers (onClick, onChange)
- Browser APIs (window, document)
- Bibliotecas client-side

// ❌ NÃO precisa de "use client"
- Componentes estáticos
- Fetch de dados no servidor
- Componentes que só recebem props
```

### Exemplo Server Component (padrão):
```typescript
// Sem "use client" no topo
export default function AboutPage() {
  return (
    <div>
      <h1>Sobre Nós</h1>
      <p>Conteúdo estático</p>
    </div>
  );
}
```

### Exemplo Client Component:
```typescript
"use client"; // Necessário para useState

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Contador: {count}
    </button>
  );
}
```

---

## 📝 TYPESCRIPT

### Configuração (strict mode):
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### Padrões de tipagem:

```typescript
// ✅ SEMPRE tipar props
interface Props {
  name: string;
  age: number;
  optional?: boolean;
}

// ✅ Tipar retorno de funções
function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

// ✅ Tipar estados
const [user, setUser] = useState<User | null>(null);

// ✅ Tipar arrays
const items: string[] = ['item1', 'item2'];
const users: User[] = [{ id: 1, name: 'João' }];

// ❌ EVITAR 'any'
const data: any = fetchData(); // Ruim

// ✅ Usar tipos específicos
interface ApiResponse {
  data: User[];
  status: number;
}
const response: ApiResponse = fetchData(); // Bom
```

### Tipos comuns úteis:

```typescript
// Tipo para eventos
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e);
};

// Tipo para formulários
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

// Tipo para inputs
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

---

## 📁 NOMENCLATURA

### Componentes:
```
✅ PascalCase
Header.tsx
HeroSection.tsx
ContactForm.tsx
```

### Páginas (Next.js App Router):
```
✅ kebab-case para pastas/arquivos
/app/page.tsx (home)
/app/sobre-nos/page.tsx
/app/contato/page.tsx
```

### Funções:
```typescript
✅ camelCase
fetchUserData()
handleSubmit()
calculateTotal()
```

### Constantes:
```typescript
✅ UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';
const MAX_ITEMS = 100;
```

### Variáveis:
```typescript
✅ camelCase
const userName = 'João';
const isActive = true;
```

---

## 🔧 NEXT.JS 14 (APP ROUTER)

### Estrutura de pastas:

```
/app/
├── page.tsx              (home - /)
├── layout.tsx            (layout raiz)
├── sobre/
│   └── page.tsx          (/sobre)
├── contato/
│   └── page.tsx          (/contato)
└── api/
    └── contact/
        └── route.ts      (API route)
```

### Layout raiz:

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Colégio Tradição de Magia Divina',
  description: 'Site institucional',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

### Página:

```typescript
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Colégio Tradição',
  description: 'Bem-vindo ao Colégio Tradição',
};

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}
```

### Regras App Router:
- ✅ Server Components por padrão
- ✅ Metadata export em cada página
- ✅ layout.tsx para estrutura compartilhada
- ✅ loading.tsx para estados de carregamento
- ✅ error.tsx para tratamento de erros
- ❌ NÃO usar Pages Router (antigo)

---

## 💬 COMENTÁRIOS

### Quando comentar:
```typescript
// ✅ Lógica complexa
// Calcula desconto progressivo: 5% até 100, 10% acima de 100
const discount = amount > 100 ? amount * 0.1 : amount * 0.05;

// ✅ Workarounds ou decisões não-óbvias
// Usando setTimeout para evitar race condition no Safari
setTimeout(() => setIsReady(true), 0);

// ✅ TODOs importantes
// TODO: Adicionar validação de CPF quando API estiver pronta

// ❌ Óbvio demais
// Incrementa contador
setCount(count + 1);
```

### Documentar componentes:
```typescript
/**
 * Botão reutilizável com variantes de estilo
 * 
 * @param text - Texto do botão
 * @param onClick - Função executada ao clicar
 * @param variant - Estilo: 'primary' | 'secondary'
 * @example
 * <Button text="Clique aqui" onClick={handleClick} variant="primary" />
 */
export default function Button({ text, onClick, variant }: ButtonProps) {
  // ...
}
```

---

## 🎯 BOAS PRÁTICAS

### DRY (Don't Repeat Yourself):
```typescript
// ❌ Repetição
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
  Botão 1
</button>
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
  Botão 2
</button>

// ✅ Componente reutilizável
<Button text="Botão 1" />
<Button text="Botão 2" />
```

### Componentes pequenos e focados:
```typescript
// ❌ Componente fazendo muita coisa
function MegaComponent() {
  // 300 linhas de código
}

// ✅ Dividir em componentes menores
function Header() { /* ... */ }
function Hero() { /* ... */ }
function Features() { /* ... */ }

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
}
```

### Conditional rendering limpo:
```typescript
// ✅ Ternário simples
{isLoading ? <Spinner /> : <Content />}

// ✅ && para renderização condicional
{error && <ErrorMessage text={error} />}

// ✅ Early return
if (isLoading) return <Spinner />;
if (error) return <ErrorMessage text={error} />;
return <Content />;
```

---

## 🗄️ SUPABASE

### Configuração inicial:

```typescript
// lib/supabase/client.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClientComponentClient();
```

```typescript
// lib/supabase/server.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createClient = () => {
  return createServerComponentClient({ cookies });
};
```

### Autenticação:

```typescript
// ✅ Login
const handleLogin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.error('Erro ao fazer login:', error.message);
    return;
  }
  
  // Verificar role e redirecionar
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .single();
    
  if (profile.role === 'afiliado') router.push('/dashboard/afiliado');
  if (profile.role === 'staff') router.push('/dashboard/staff');
  if (profile.role === 'admin') router.push('/dashboard/admin');
};

// ✅ Logout
const handleLogout = async () => {
  await supabase.auth.signOut();
  router.push('/');
};

// ✅ Verificar usuário atual
const { data: { user } } = await supabase.auth.getUser();
```

### Queries no banco:

```typescript
// ✅ SELECT simples
const { data, error } = await supabase
  .from('afiliados')
  .select('*')
  .eq('status_pagamento', 'ativo');

// ✅ SELECT com JOIN
const { data, error } = await supabase
  .from('certificados')
  .select(`
    *,
    afiliados (
      nome,
      email
    )
  `)
  .eq('afiliado_id', userId);

// ✅ INSERT
const { data, error } = await supabase
  .from('pedidos_afiliacao')
  .insert({
    nome: 'João Silva',
    email: 'joao@email.com',
    status: 'pendente',
  })
  .select();

// ✅ UPDATE
const { data, error } = await supabase
  .from('afiliados')
  .update({ status_pagamento: 'ativo' })
  .eq('user_id', userId);

// ✅ DELETE
const { data, error } = await supabase
  .from('pedidos_afiliacao')
  .delete()
  .eq('id', pedidoId);
```

### Tipos TypeScript com Supabase:

```typescript
// types/database.types.ts (gerado automaticamente)
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          role: 'afiliado' | 'staff' | 'admin';
          nome: string;
          created_at: string;
        };
        Insert: {
          id: string;
          role: 'afiliado' | 'staff' | 'admin';
          nome: string;
        };
        Update: {
          role?: 'afiliado' | 'staff' | 'admin';
          nome?: string;
        };
      };
      // ... outras tabelas
    };
  };
}

// Usar tipos nas queries
const { data } = await supabase
  .from('profiles')
  .select('*')
  .returns<Database['public']['Tables']['profiles']['Row'][]>();
```

### Storage (arquivos):

```typescript
// ✅ Upload de arquivo
const uploadCertificate = async (file: File, afiliadoId: string) => {
  const fileName = `${afiliadoId}/${Date.now()}_${file.name}`;
  
  const { data, error } = await supabase.storage
    .from('certificados')
    .upload(fileName, file);
    
  if (error) throw error;
  
  // Obter URL pública
  const { data: { publicUrl } } = supabase.storage
    .from('certificados')
    .getPublicUrl(fileName);
    
  return publicUrl;
};

// ✅ Download de arquivo
const { data, error } = await supabase.storage
  .from('certificados')
  .download('path/to/file.pdf');

// ✅ Deletar arquivo
const { data, error } = await supabase.storage
  .from('certificados')
  .remove(['path/to/file.pdf']);
```

### Realtime (se necessário):

```typescript
// ✅ Escutar mudanças em tempo real
const channel = supabase
  .channel('pedidos_afiliacao')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'pedidos_afiliacao',
    },
    (payload) => {
      console.log('Novo pedido:', payload.new);
      // Atualizar UI
    }
  )
  .subscribe();

// Limpar subscription
channel.unsubscribe();
```

### Row Level Security (RLS):

```sql
-- Sempre usar RLS nas tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Políticas exemplo:
CREATE POLICY "Usuários veem apenas seu perfil"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Staff vê todos os afiliados"
  ON afiliados FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('staff', 'admin')
    )
  );
```

### Tratamento de erros:

```typescript
// ✅ Sempre verificar erro
const { data, error } = await supabase
  .from('afiliados')
  .select('*');

if (error) {
  console.error('Erro ao buscar afiliados:', error.message);
  // Mostrar mensagem ao usuário
  toast.error('Erro ao carregar dados');
  return;
}

// Usar data com segurança
if (data) {
  setAfiliados(data);
}
```

### Padrões de nomenclatura Supabase:

```typescript
// ✅ Tabelas: plural, snake_case
pedidos_afiliacao
certificados_emitidos

// ✅ Colunas: snake_case
user_id
created_at
status_pagamento

// ✅ Buckets Storage: plural
certificados
documentos
imagens_perfil

// ✅ Funções no código: camelCase
const getPedidosAfiliacao = async () => { ... }
const updateStatusPagamento = async () => { ... }
```

---

## 🚀 PERFORMANCE

### Otimizações básicas:
```typescript
// ✅ Imagens otimizadas (Next.js Image)
import Image from 'next/image';

<Image 
  src="/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600}
  priority // Para LCP (Largest Contentful Paint)
/>

// ✅ Lazy loading
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Carregando...</p>
});

// ✅ Memoização quando necessário
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);
```

---

## ✅ CHECKLIST DE CÓDIGO LIMPO

Antes de finalizar qualquer componente/página:

- [ ] TypeScript sem erros
- [ ] Sem warnings no console
- [ ] Responsivo (mobile-first)
- [ ] Nomes descritivos
- [ ] Sem código duplicado
- [ ] Comentários em partes complexas
- [ ] Props tipadas
- [ ] Tailwind usado corretamente
- [ ] Acessibilidade básica (alt em imagens, labels em inputs)
- [ ] Testado em diferentes tamanhos de tela

---

## 📚 REFERÊNCIAS RÁPIDAS

- **Next.js 14:** https://nextjs.org/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev
- **Supabase:** https://supabase.com/docs
- **Supabase Auth (Next.js):** https://supabase.com/docs/guides/auth/auth-helpers/nextjs

---

**Sempre consulte este arquivo antes de escrever código!**
