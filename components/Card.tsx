// components/Card.tsx
// Componente de Card reutilizÃ¡vel - Checkpoint #10
// Cards quadrados com H3 branco

import React from 'react'

// ============================================================================
// CARD - CONTAINER COM FUNDO COLORIDO
// ============================================================================
interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'lavanda' | 'lilas-quase-branco' | 'white'
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean // Habilitar efeito hover
}

export default function Card({ 
  children, 
  className = '', 
  variant = 'lavanda',
  padding = 'lg',
  hover = true
}: CardProps) {
  
  // Cores de fundo por variante
  const bgClasses = {
    'lavanda': 'bg-lavanda',
    'lilas-quase-branco': 'bg-lilas-quase-branco',
    'white': 'bg-white'
  }
  
  // Tamanhos de padding
  const paddingClasses = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10'
  }
  
  // Classes de hover
  const hoverClasses = hover 
    ? 'shadow-card-solid hover:shadow-card-solid-hover transition-all duration-300 hover:-translate-y-1'
    : 'shadow-card-solid'
  
  return (
    <section 
      className={`${bgClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      style={{ borderRadius: 0 }} // Sempre quadrado
    >
      {children}
    </section>
  )
}

// ============================================================================
// CARD SIMPLES (sem hover, para conteÃºdo estÃ¡tico)
// ============================================================================
interface SimpleCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'lavanda' | 'lilas-quase-branco' | 'white'
}

export function SimpleCard({ 
  children, 
  className = '', 
  variant = 'lavanda'
}: SimpleCardProps) {
  return <Card variant={variant} hover={false} className={className}>{children}</Card>
}

// ============================================================================
// CARD GRID (para layout de mÃºltiplos cards)
// ============================================================================
interface CardGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CardGrid({ 
  children, 
  columns = 2, 
  gap = 'lg',
  className = '' 
}: CardGridProps) {
  
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  }
  
  return (
    <div className={`grid grid-cols-1 ${gridClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

// ============================================================================
// OBSERVAÃ‡Ã•ES E EXEMPLOS
// ============================================================================
/*
CARDS - SEMPRE QUADRADOS (border-radius: 0)

VARIANTES:
- lavanda (#DDCFE8) - Mais comum, fundos de destaque
- lilas-quase-branco (#ECE0F0) - Fundos mais suaves
- white (#FFFFFF) - Cards brancos sobre fundo colorido

EXEMPLOS DE USO:

// Card padrÃ£o (lavanda com hover)
<Card>
  <H3>TÃ­tulo do Card</H3>
  <P>ConteÃºdo aqui...</P>
</Card>

// Card sem hover (para conteÃºdo estÃ¡tico)
<SimpleCard variant="lilas-quase-branco">
  <P>Sistema em desenvolvimento...</P>
</SimpleCard>

// Grid de cards
<CardGrid columns={2}>
  <Card>
    <H3>Mago Iniciador</H3>
    <P>DescriÃ§Ã£o...</P>
  </Card>
  <Card>
    <H3>Mago Iniciado</H3>
    <P>DescriÃ§Ã£o...</P>
  </Card>
</CardGrid>

// Card com padding customizado
<Card padding="sm" variant="white">
  <P size="sm">Texto menor em card branco</P>
</Card>

HIERARQUIA DENTRO DO CARD:
Sempre usar H3 (que serÃ¡ branco automaticamente) seguido de P (cinza)

<Card>
  <H3>TÃ­tulo</H3>  â† Branco (#FFFFFF) com text-shadow
  <P>Texto</P>     â† Cinza (#4A5568) para contraste
</Card>
*/
