'use client'

import { usePathname } from 'next/navigation'
import HeaderHome from './HeaderHome'
import Header from './Header'
import Footer from './Footer'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      {isHome ? <HeaderHome /> : <Header />}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
