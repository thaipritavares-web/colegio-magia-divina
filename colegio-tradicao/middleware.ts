import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Permitir acesso às rotas de API de autenticação
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  // Permitir acesso à página de login
  if (request.nextUrl.pathname.startsWith('/auth/login')) {
    return NextResponse.next()
  }

  // Permitir acesso a arquivos estáticos
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/images') ||
    request.nextUrl.pathname.startsWith('/fonts')
  ) {
    return NextResponse.next()
  }

  // Verificar se o usuário está autenticado
  const isAuthenticated = request.cookies.get('site-authenticated')?.value === 'true'

  if (!isAuthenticated) {
    // Redirecionar para a página de login
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
