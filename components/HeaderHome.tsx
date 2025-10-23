'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

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
    <header className="bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-10">
        
        {/* LINHA 1: Menu + Login à direita */}
        <nav className="flex justify-end items-center gap-8 mb-[60px]">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-azul-escuro hover:text-roxo-medio transition-all duration-300 font-router text-base px-3 py-2 rounded hover:shadow-[0_2px_8px_rgba(236,224,240,0.8)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão Login */}
          <Link
            href="/auth/login"
            className="hidden md:inline-block bg-roxo-medio hover:bg-azul-escuro text-white px-7 py-2.5 rounded-md font-router-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-azul-escuro"
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
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mb-8 pb-4 border-b border-lilas-claro">
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

        {/* LINHA 2: Logo + Título à esquerda */}
        <div className="flex items-start gap-8">
          <div className="w-[200px] h-[200px] flex-shrink-0">
            <Image
              src="/images/logo_sem_texto.png"
              alt="Logo Colégio Tradição de Magia Divina"
              width={200}
              height={200}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="pt-5">
            {/* Título */}
            <h1 className="text-[64px] font-kaushian text-azul-escuro leading-tight mb-5">
              Colégio Tradição de Magia Divina
            </h1>
            
            {/* LINHA 3: Subtítulo */}
            <p className="text-lg font-router-thin text-gray-text leading-relaxed max-w-[650px]">
              Subtítulo que define o contexto, compartilha mais informações sobre o site ou, de modo geral, estimula as pessoas a continuar conferindo a página.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
