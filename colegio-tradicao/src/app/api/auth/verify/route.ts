import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Senha definida (em produção, use variável de ambiente)
const SITE_PASSWORD = 'colegio@preview'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === SITE_PASSWORD) {
      // Definir cookie de autenticação (válido por 7 dias)
      cookies().set('site-authenticated', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/',
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: 'Senha incorreta' })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Erro no servidor' }, { status: 500 })
  }
}
