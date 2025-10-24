'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { P } from '@/components/Typography'

export default function HeaderHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Sobre o Colégio', href: '/sobre-colegio' },
    { label: 'Rubens Saraceni', href: '/rubens-saraceni' },
    { label: 'A Magia Divina', href: '/magia-divina' },
    { label: 'Membros', href: '/membros' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Afilie-se', href: '/afilie-se' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[rgba(255,255,255,0.95)] to-[rgba(236,224,240,0.95)] backdrop-blur-md shadow-header">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 py-6">
        
        {/* Layout Principal: Logo+Título à esquerda | Menu+Login à direita */}
        <div className="flex items-center justify-between gap-8">
          
          {/* LADO ESQUERDO: Logo + Título */}
          <div className="flex items-start gap-6">
            <div className="w-[140px] h-[140px] flex-shrink-0">
              <Image
                src="/images/logo sem texto.svg"
                alt="Logo Colégio Tradição de Magia Divina"
                width={140}
                height={140}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="pt-2">
              {/* Título - Kaushan Script */}
              <h1 className="text-[48px] md:text-[56px] font-kaushian text-azul-escuro leading-tight mb-3">
                Colégio Tradição de Magia Divina
              </h1>
              
              {/* Subtítulo */}
              <P size="base" className="mb-0 max-w-[550px] text-gray-medium">
                Subtítulo que define o contexto, compartilha mais informações sobre o site ou, de modo geral, estimula as pessoas a continuar conferindo a página.
              </P>
            </div>
          </div>

          {/* LADO DIREITO: Menu + Login (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-azul-escuro hover:text-roxo-medio transition-all duration-300 font-router text-sm px-3 py-2 rounded hover:shadow-[0_2px_8px_rgba(236,224,240,0.8)] whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Botão Login */}
            <Link
              href="/auth/login"
              className="bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-2.5 rounded-md font-router-bold transition-all duration-300 shadow-button hover:shadow-button-hover hover:-translate-y-0.5 whitespace-nowrap"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-azul-escuro"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-lilas-claro pt-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-azul-escuro hover:text-roxo-medio transition-colors font-router text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="bg-roxo-medio hover:bg-azul-escuro text-white px-8 py-3 rounded-lg font-router-bold transition-all shadow-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
