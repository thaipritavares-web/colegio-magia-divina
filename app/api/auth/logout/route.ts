import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  // Remover cookie de autenticação
  cookies().delete('site-authenticated')

  return NextResponse.json({ success: true })
}
