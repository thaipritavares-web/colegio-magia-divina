'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) {
    // Header da HOME: Menu no topo, logo grande embaixo
    return (
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Menu Superior */}
          <nav className="flex items-center justify-between py-4">
            <div className="flex gap-6 text-sm flex-1">
              <Link 
                href="/sobre-colegio" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                Sobre o Colégio
              </Link>
              <Link 
                href="/rubens-saraceni" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                Rubens Saraceni
              </Link>
              <Link 
                href="/magia-divina" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                A Magia Divina
              </Link>
              <Link 
                href="/membros" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                Membros
              </Link>
              <Link 
                href="/faq" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                FAQ
              </Link>
              <Link 
                href="/blog" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                Blog
              </Link>
              <Link 
                href="/afiliar-se" 
                className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
              >
                Afiliar-se
              </Link>
            </div>
            
            <Link 
              href="/login" 
              className="bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-2 rounded font-router transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Login
            </Link>
          </nav>

          {/* Logo e Título Grande (Home) */}
          <div className="flex items-center justify-center gap-6 py-12">
            <Image 
              src="/images/logo_sem_texto.png" 
              alt="Logo Colégio" 
              width={200} 
              height={200}
              className="object-contain"
            />
            <h1 className="text-5xl font-cerulya text-azul-marinho">
              Colégio Tradição<br/>de Magia Divina
            </h1>
          </div>
        </div>
      </header>
    )
  }

  // Header das PÁGINAS INTERNAS: Logo horizontal com menu na mesma linha
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Horizontal */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Logo_Horizontal_Cores_01.svg" 
              alt="Colégio Tradição de Magia Divina" 
              width={280} 
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Menu de Navegação */}
          <nav className="flex items-center gap-6 text-sm">
            <Link 
              href="/sobre-colegio" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              Sobre o Colégio
            </Link>
            <Link 
              href="/rubens-saraceni" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              Rubens Saraceni
            </Link>
            <Link 
              href="/magia-divina" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              A Magia Divina
            </Link>
            <Link 
              href="/membros" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              Membros
            </Link>
            <Link 
              href="/faq" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              FAQ
            </Link>
            <Link 
              href="/blog" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              Blog
            </Link>
            <Link 
              href="/afiliar-se" 
              className="text-azul-escuro hover:text-roxo-medio transition-colors font-router"
            >
              Afiliar-se
            </Link>
            
            <Link 
              href="/login" 
              className="bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-2 rounded font-router transition-all duration-300 hover:scale-105 hover:shadow-lg ml-4"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
