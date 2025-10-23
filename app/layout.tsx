import type { Metadata } from 'next'
import './globals.css'
import LayoutClient from '@/components/LayoutClient'

export const metadata: Metadata = {
  title: 'Colégio Tradição de Magia Divina',
  description: 'Instituição dedicada ao ensino e preservação dos conhecimentos da Magia Divina segundo os ensinamentos de Rubens Saraceni',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
