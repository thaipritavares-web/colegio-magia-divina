'use client'

import { H1, H2, P } from '@/components/Typography'
import Card, { CardGrid } from '@/components/Card'
import ProgressBar from '@/components/ProgressBar'
import { useState } from 'react'

export default function Afiliar() {
  const [selectedType, setSelectedType] = useState<'iniciador' | 'iniciado' | null>(null)
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nomeCompleto: '',
    email: '',
    telCelular: '',
    telefoneFixo: '',
    numeroIdentidade: '',
    
    // Endereço
    pais: 'BR',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    estado: '',
    cidade: ''
  })
  
  const [cepLoading, setCepLoading] = useState(false)
  const [cepError, setCepError] = useState<string | null>(null)
  const [addressMode, setAddressMode] = useState<'auto' | 'manual'>('auto')

  const handleSelectType = (type: 'iniciador' | 'iniciado') => {
    setSelectedType(type)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const buscarCEP = async () => {
    if (!formData.cep || formData.cep.length < 8) return

    setCepLoading(true)
    setCepError(null)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${formData.cep.replace(/\D/g, '')}/json/`)
      const data = await response.json()

      if (data.erro) {
        setCepError('CEP não encontrado. Preencha manualmente.')
        setAddressMode('manual')
      } else {
        setFormData(prev => ({
          ...prev,
          logradouro: data.logradouro || '',
          bairro: data.bairro || '',
          cidade: data.localidade || '',
          estado: data.uf || ''
        }))
        setAddressMode('auto')
      }
    } catch (error) {
      setCepError('Erro ao buscar CEP. Preencha manualmente.')
      setAddressMode('manual')
    } finally {
      setCepLoading(false)
    }
  }

  // Estados brasileiros
  const estadosBR = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espírito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
  ]

  const paises = [
    { code: 'BR', name: 'Brasil' },
    { code: 'PT', name: 'Portugal' },
    { code: 'AR', name: 'Argentina' },
    { code: 'UY', name: 'Uruguai' },
    { code: 'PY', name: 'Paraguai' },
    { code: 'CL', name: 'Chile' },
    { code: 'BO', name: 'Bolívia' },
    { code: 'PE', name: 'Peru' },
    { code: 'CO', name: 'Colômbia' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'EC', name: 'Equador' },
    { code: 'GY', name: 'Guiana' },
    { code: 'SR', name: 'Suriname' },
    { code: 'GF', name: 'Guiana Francesa' },
    { code: 'MX', name: 'México' },
    { code: 'US', name: 'Estados Unidos' },
    { code: 'CA', name: 'Canadá' },
    { code: 'ES', name: 'Espanha' },
    { code: 'FR', name: 'França' },
    { code: 'IT', name: 'Itália' },
    { code: 'DE', name: 'Alemanha' },
    { code: 'GB', name: 'Reino Unido' },
    { code: 'CH', name: 'Suíça' },
    { code: 'BE', name: 'Bélgica' },
    { code: 'NL', name: 'Holanda' },
    { code: 'AT', name: 'Áustria' },
    { code: 'IE', name: 'Irlanda' },
    { code: 'SE', name: 'Suécia' },
    { code: 'NO', name: 'Noruega' },
    { code: 'DK', name: 'Dinamarca' },
    { code: 'FI', name: 'Finlândia' },
    { code: 'PL', name: 'Polônia' },
    { code: 'CZ', name: 'República Tcheca' },
    { code: 'GR', name: 'Grécia' },
    { code: 'JP', name: 'Japão' },
    { code: 'CN', name: 'China' },
    { code: 'KR', name: 'Coreia do Sul' },
    { code: 'AU', name: 'Austrália' },
    { code: 'NZ', name: 'Nova Zelândia' },
    { code: 'ZA', name: 'África do Sul' }
  ]

  const isBrasil = formData.pais === 'BR'

  if (selectedType === null) {
    return (
      <div className="container mx-auto px-4 py-12">
        <H1>Afilie-se ao Colégio</H1>

        <CardGrid columns={2} className="mb-8">
          {/* Card Mago Iniciador */}
          <Card variant="lavanda">
            <div className="flex justify-center mb-4">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#5A5AA4">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <H2 className="text-center mb-2">Mago Iniciador(a)</H2>
            
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-[#5A5AA4]">R$ 250,00</span>
              <span className="text-lg text-[#26377F]">/ano</span>
            </div>

            <P className="text-center mb-4">
              Professor de Magia Divina afiliado ao Colégio Tradição, autorizado a ministrar cursos e atender magos iniciados.
            </P>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#5A5AA4" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm">Autorização para ministrar cursos</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#5A5AA4" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm">Material didático atualizado</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#5A5AA4" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm">Curso preparatório</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#5A5AA4" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm">Cursos de reciclagem</span>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => handleSelectType('iniciador')}
                className="bg-roxo-medio hover:bg-azul-escuro text-white px-8 py-3 transition-colors font-medium rounded"
              >
                Afilie-se como Mago Iniciador
              </button>
            </div>
          </Card>

          {/* Card Mago Iniciado */}
          <Card variant="white" className="bg-white/70 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#26377F" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <H2 className="text-center mb-2 text-[#1B223F]">Mago Iniciado(a)</H2>
            
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-[#26377F]">R$ 200,00</span>
              <span className="text-lg text-[#1B223F]">/ano</span>
            </div>

            <P className="text-center mb-4 text-[#1B223F]">
              Praticantes que concluíram um ou mais graus de Magia Divina e atendem ao público com seu conhecimento.
            </P>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#26377F" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm text-[#1B223F]">Material didático atualizado</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#26377F" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm text-[#1B223F]">Consulta com Iniciadores e Mestres</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#26377F" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm text-[#1B223F]">Acesso a eventos internos</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#26377F" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="text-sm text-[#1B223F]">Acesso a eventos magísticos</span>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => handleSelectType('iniciado')}
                className="bg-roxo-medio hover:bg-azul-escuro text-white px-8 py-3 transition-colors font-medium rounded"
              >
                Afilie-se como Mago Iniciado
              </button>
            </div>
          </Card>
        </CardGrid>
      </div>
    )
  }

  // FORMULÁRIO ETAPA 1 - DADOS PESSOAIS
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <button 
          onClick={() => setSelectedType(null)}
          className="text-[#26377F] hover:text-[#5A5AA4] flex items-center gap-2 mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar
        </button>
        <H1>Afiliação de Mago {selectedType === 'iniciador' ? 'Iniciador' : 'Iniciado'}</H1>
      </div>

      {/* BARRA DE PROGRESSO */}
      <ProgressBar currentStep={1} totalSteps={5} />

      <Card variant="white" className="max-w-4xl mx-auto">
        <div className="mb-6">
          <H2>Dados Pessoais</H2>
          <P className="text-[#26377F]">
            Preencha seus dados pessoais e de contato
          </P>
        </div>
        <form className="space-y-6">
          {/* 1. Nome Completo */}
          <div>
            <label className="block text-sm font-medium text-[#1B223F] mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              value={formData.nomeCompleto}
              onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
              className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
              required
            />
          </div>

          {/* 2. Email */}
          <div>
            <label className="block text-sm font-medium text-[#1B223F] mb-2">
              E-mail *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
              required
            />
          </div>

          {/* 3. Telefones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                Telefone Celular *
              </label>
              <input
                type="tel"
                value={formData.telCelular}
                onChange={(e) => handleInputChange('telCelular', e.target.value)}
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                Telefone Fixo
              </label>
              <input
                type="tel"
                value={formData.telefoneFixo}
                onChange={(e) => handleInputChange('telefoneFixo', e.target.value)}
                placeholder="(00) 0000-0000"
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
              />
            </div>
          </div>

          {/* 4. País */}
          <div>
            <label className="block text-sm font-medium text-[#1B223F] mb-2">
              País *
            </label>
            <select
              value={formData.pais}
              onChange={(e) => {
                handleInputChange('pais', e.target.value)
                // Reset campos de endereço ao mudar país
                setFormData(prev => ({
                  ...prev,
                  cep: '',
                  logradouro: '',
                  numero: '',
                  bairro: '',
                  complemento: '',
                  estado: '',
                  cidade: ''
                }))
                setAddressMode('auto')
                setCepError(null)
              }}
              className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
              required
            >
              {paises.map(p => (
                <option key={p.code} value={p.code}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* 5. CEP / Código Postal */}
          {isBrasil ? (
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                CEP *
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.cep}
                  onChange={(e) => handleInputChange('cep', e.target.value)}
                  placeholder="00000-000"
                  maxLength={9}
                  className="flex-1 px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                  required
                />
                <button
                  type="button"
                  onClick={buscarCEP}
                  disabled={cepLoading || formData.cep.length < 8}
                  className="px-6 py-2 bg-[#5A5AA4] hover:bg-[#26377F] text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {cepLoading ? 'Buscando...' : '🔍 Buscar'}
                </button>
              </div>
              {cepError && (
                <p className="text-sm text-red-600 mt-1">{cepError}</p>
              )}
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                Código Postal / ZIP *
              </label>
              <input
                type="text"
                value={formData.cep}
                onChange={(e) => handleInputChange('cep', e.target.value)}
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
          )}

          {/* 6. Logradouro + Número */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                {isBrasil ? 'Logradouro' : 'Rua/Avenida'} *
              </label>
              <input
                type="text"
                value={formData.logradouro}
                onChange={(e) => handleInputChange('logradouro', e.target.value)}
                readOnly={isBrasil && addressMode === 'auto'}
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] disabled:bg-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                Número *
              </label>
              <input
                type="text"
                value={formData.numero}
                onChange={(e) => handleInputChange('numero', e.target.value)}
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
          </div>

          {/* 7. Bairro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                {isBrasil ? 'Bairro' : 'Bairro/Distrito'} *
              </label>
              <input
                type="text"
                value={formData.bairro}
                onChange={(e) => handleInputChange('bairro', e.target.value)}
                readOnly={isBrasil && addressMode === 'auto'}
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] disabled:bg-gray-100"
                required
              />
            </div>
          </div>

          {/* 8. Complemento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                Complemento
              </label>
              <input
                type="text"
                value={formData.complemento}
                onChange={(e) => handleInputChange('complemento', e.target.value)}
                placeholder="Apto, Bloco, etc."
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
              />
            </div>
          </div>

          {/* 9. Estado + Cidade */}
          {isBrasil ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1B223F] mb-2">
                  Estado *
                </label>
                <select
                  value={formData.estado}
                  onChange={(e) => {
                    handleInputChange('estado', e.target.value)
                    handleInputChange('cidade', '') // Reset cidade
                  }}
                  disabled={addressMode === 'auto'}
                  className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] disabled:bg-gray-100"
                  required
                >
                  <option value="">Selecione o estado</option>
                  {estadosBR.map(e => (
                    <option key={e.uf} value={e.uf}>{e.nome}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B223F] mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                  readOnly={addressMode === 'auto'}
                  placeholder={formData.estado ? 'Digite a cidade' : 'Selecione o estado primeiro'}
                  disabled={!formData.estado}
                  className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] disabled:bg-gray-100"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1B223F] mb-2">
                  Estado/Província *
                </label>
                <input
                  type="text"
                  value={formData.estado}
                  onChange={(e) => handleInputChange('estado', e.target.value)}
                  className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B223F] mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                  className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                  required
                />
              </div>
            </div>
          )}

          {/* Número de Identidade (CPF/RG/Passaporte) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1B223F] mb-2">
                {isBrasil ? 'CPF' : 'Documento de Identidade'} *
              </label>
              <input
                type="text"
                value={formData.numeroIdentidade}
                onChange={(e) => handleInputChange('numeroIdentidade', e.target.value)}
                placeholder={isBrasil ? '000.000.000-00' : 'Passaporte ou ID'}
                className="w-full px-4 py-2 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-between pt-6 border-t border-[#C6C0E1]">
            <button
              type="button"
              onClick={() => setSelectedType(null)}
              className="px-6 py-2 border border-[#26377F] text-[#26377F] rounded hover:bg-[#ECE0F0] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#5A5AA4] hover:bg-[#26377F] text-white rounded transition-colors"
            >
              Próxima Etapa →
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}
