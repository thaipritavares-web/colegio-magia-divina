'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
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
    <header className="bg-white shadow-sm sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto px-20 py-5">
        <div className="flex items-center justify-between">
          
          {/* Logo à esquerda */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Logo_Horizontal_Cores_01.svg"
              alt="Colégio de Tradição de Magia Divina"
              width={480}
              height={96}
              className="h-20 md:h-24 w-auto"
              priority
           />
          </Link>

          {/* Menu Desktop à direita */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-azul-escuro hover:text-roxo-medio transition-all duration-300 font-router text-base px-3 py-2 rounded hover:shadow-[0_2px_8px_rgba(236,224,240,0.8)]"
              >
                {item.label}
              </Link>
            ))}
            
            <Link
              href="/auth/login"
              className="bg-roxo-medio hover:bg-azul-escuro text-white px-7 py-2.5 rounded-md font-router-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Login
            </Link>
          </nav>

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
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-lilas-claro">
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
