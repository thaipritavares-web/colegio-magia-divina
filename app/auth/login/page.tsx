'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        router.push('/')
        router.refresh()
      } else {
        setError('Senha incorreta. Tente novamente.')
        setPassword('')
      }
    } catch (err) {
      setError('Erro ao verificar senha. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-lilas-quase-branco via-white to-lavanda flex items-center justify-center px-4">
      <div 
        className="bg-white/80 backdrop-blur-sm border border-lavanda p-12 shadow-card-solid max-w-md w-full"
        style={{ borderRadius: 0 }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/images/logo_sem_texto.png" 
            alt="Logo Colégio" 
            width={120} 
            height={120}
            className="object-contain"
          />
        </div>

        {/* Título */}
        <h1 
          className="text-4xl md:text-5xl font-router-thin text-roxo-medio text-center mb-2" 
          style={{ letterSpacing: '-1px' }}
        >
          Colégio Tradição de Magia Divina
        </h1>
        <p className="text-center text-gray-text font-router mb-8">
          Site em desenvolvimento - Acesso restrito
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="password" 
              className="block text-azul-escuro font-router mb-2"
            >
              Senha de Acesso
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-lavanda focus:border-roxo-medio focus:outline-none focus:ring-2 focus:ring-roxo-medio/20 font-router"
              style={{ borderRadius: 0 }}
              placeholder="Digite a senha"
              disabled={loading}
              autoFocus
            />
          </div>

          {error && (
            <div 
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 font-router text-sm"
              style={{ borderRadius: 0 }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-gradient-to-r from-roxo-medio to-azul-escuro hover:from-azul-escuro hover:to-roxo-medio text-white px-6 py-3 font-router-bold transition-all duration-300 hover:scale-102 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ borderRadius: 0 }}
          >
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>

        {/* Rodapé */}
        <p className="text-center text-gray-medium font-router text-sm mt-8">
          Para obter acesso, entre em contato com o administrador
        </p>
      </div>
    </div>
  )
}
