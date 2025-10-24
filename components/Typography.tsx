// components/Typography.tsx
// Sistema de Tipografia Centralizado - ColÃ©gio TradiÃ§Ã£o de Magia Divina
// Checkpoint #10 - Hierarquia de cores padronizada

import React from 'react'

// ============================================================================
// H1 - TÃTULO PRINCIPAL (Kaushan Script)
// ============================================================================
interface H1Props {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient'
}

export function H1({ children, className = '', variant = 'default' }: H1Props) {
  const variantClasses = {
    default: 'text-azul-marinho',
    gradient: 'bg-gradient-to-r from-azul-marinho to-roxo-medio bg-clip-text text-transparent'
  }
  
  return (
    <h1 
      className={`text-3xl md:text-4xl lg:text-5xl font-kaushan ${variantClasses[variant]} leading-tight ${className}`}
      style={{ letterSpacing: '-0.5px' }}
    >
      {children}
    </h1>
  )
}

// ============================================================================
// H2 - TÃTULO DE SEÃ‡ÃƒO (Router Thin)
// ============================================================================
interface H2Props {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'light'
}

export function H2({ children, className = '', variant = 'default' }: H2Props) {
  const variantClasses = {
    default: 'text-azul-escuro',
    light: 'text-roxo-medio'
  }
  
  return (
    <h2 
      className={`text-2xl md:text-3xl font-router-thin ${variantClasses[variant]} leading-snug ${className}`}
    >
      {children}
    </h2>
  )
}

// ============================================================================
// H3 - SUBTÃTULO DENTRO DE CARDS (Router Bold - Branco)
// ============================================================================
interface H3Props {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'medium'
}

export function H3({ children, className = '', variant = 'default' }: H3Props) {
  const variantClasses = {
    default: 'text-white', // Para fundos coloridos (lavanda/lilÃ¡s)
    dark: 'text-azul-marinho', // Para fundos brancos
    medium: 'text-roxo-medio'
  }
  
  const textShadow = variant === 'default' 
    ? { textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' } 
    : {}
  
  return (
    <h3 
      className={`text-xl md:text-2xl font-router-bold ${variantClasses[variant]} leading-snug ${className}`}
      style={textShadow}
    >
      {children}
    </h3>
  )
}

// ============================================================================
// H4 - SUB-SEÃ‡Ã•ES (Router Medium)
// ============================================================================
interface H4Props {
  children: React.ReactNode
  className?: string
}

export function H4({ children, className = '' }: H4Props) {
  return (
    <h4 
      className={`text-lg md:text-xl font-router-medium text-azul-escuro leading-normal ${className}`}
    >
      {children}
    </h4>
  )
}

// ============================================================================
// P - PARÃGRAFO (Router Regular)
// ============================================================================
interface PProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'secondary' | 'dark'
  size?: 'sm' | 'base' | 'lg' | 'xl'
}

export function P({ children, className = '', variant = 'default', size = 'base' }: PProps) {
  const variantClasses = {
    default: 'text-gray-text',
    secondary: 'text-gray-medium',
    dark: 'text-azul-marinho'
  }
  
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl'
  }
  
  return (
    <p 
      className={`${sizeClasses[size]} font-router ${variantClasses[variant]} leading-relaxed ${className}`}
    >
      {children}
    </p>
  )
}

// ============================================================================
// LINK - Links Customizados
// ============================================================================
interface LinkProps {
  children: React.ReactNode
  href: string
  className?: string
  variant?: 'default' | 'primary' | 'light'
  target?: '_blank' | '_self'
}

export function Link({ children, href, className = '', variant = 'default', target = '_self' }: LinkProps) {
  const variantClasses = {
    default: 'text-azul-escuro hover:text-roxo-medio',
    primary: 'text-roxo-medio hover:text-azul-escuro',
    light: 'text-lilas-claro hover:text-white'
  }
  
  return (
    <a 
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`font-router ${variantClasses[variant]} transition-colors duration-300 underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </a>
  )
}

// ============================================================================
// DOCUMENTAÃ‡ÃƒO - HIERARQUIA DE CORES (Checkpoint #10)
// ============================================================================
/*
CORES OFICIAIS:

H1: #1B223F (azul-marinho) - Kaushan Script
    - Contraste MÃXIMO para tÃ­tulos principais
    - Usado: Uma vez por pÃ¡gina (tÃ­tulo principal)

H2: #26377F (azul-escuro) - Router Thin  
    - Contraste ALTO para seÃ§Ãµes
    - Usado: TÃ­tulos de seÃ§Ã£o dentro da pÃ¡gina

H3: #FFFFFF (branco) - Router Bold
    - Contraste MÃXIMO sobre fundos coloridos
    - Usado: APENAS dentro de cards com fundo lavanda/lilÃ¡s-claro
    - text-shadow para legibilidade

H4: #26377F (azul-escuro) - Router Medium
    - Sub-seÃ§Ãµes menores

P: #4A5568 (gray-text) - Router Regular
    - Leitura confortÃ¡vel em fundo branco
    - Usado: Todo texto de corpo padrÃ£o

P secondary: #718096 (gray-medium)
    - Texto menos importante

EXEMPLOS DE USO:

// PÃ¡gina normal
<H1>Sobre o ColÃ©gio</H1>
<H2 className="mt-12 mb-6">Nossa MissÃ£o</H2>
<P>Texto explicativo...</P>

// Card colorido (lavanda/lilÃ¡s)
<div className="bg-lavanda p-8 rounded-lg">
  <H3>Nossos Valores</H3>
  <P>DescriÃ§Ã£o dos valores...</P>
</div>

// Card branco
<div className="bg-white p-8 rounded-lg">
  <H3 variant="dark">TÃ­tulo no Card Branco</H3>
  <P>ConteÃºdo...</P>
</div>

// Variantes
<H1 variant="gradient">TÃ­tulo com Gradiente</H1>
<P variant="secondary" size="sm">Texto secundÃ¡rio menor</P>

IMPORTANTE:
- NÃƒO adicione classes de cor inline (text-azul-*, text-roxo-*)
- NÃƒO adicione classes de fonte inline (font-router-*, font-kaushan)
- USE apenas classes de layout (mb-*, mt-*, text-center, etc)
- USE variantes para casos especiais
*/
