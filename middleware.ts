import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Permitir acesso à página de login
  if (request.nextUrl.pathname === '/auth/login') {
    return NextResponse.next()
  }

  // Verificar se tem o cookie de autenticação
  const authCookie = request.cookies.get('site-authenticated')

  if (!authCookie || authCookie.value !== 'true') {
    // Redirecionar para página de login
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|otf|ttf|woff|woff2)$).*)',
  ],
}
