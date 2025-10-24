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
  const [cepSuccess, setCepSuccess] = useState(false)
  const [addressMode, setAddressMode] = useState<'auto' | 'manual'>('auto')
  
  // Estados para endereço profissional (apenas Mago Iniciador)
  const [mesmoEndereco, setMesmoEndereco] = useState(true)
  const [enderecoProf, setEnderecoProf] = useState({
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    estado: '',
    cidade: ''
  })
  const [cepProfLoading, setCepProfLoading] = useState(false)
  const [cepProfError, setCepProfError] = useState<string | null>(null)
  const [cepProfSuccess, setCepProfSuccess] = useState(false)

  const handleSelectType = (type: 'iniciador' | 'iniciado') => {
    setSelectedType(type)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleEnderecoProfChange = (field: string, value: string) => {
    setEnderecoProf(prev => ({ ...prev, [field]: value }))
  }

  // Busca CEP automática ao sair do campo
  const buscarCEP = async () => {
    const cep = formData.cep.replace(/\D/g, '')
    if (!cep || cep.length < 8) return

    setCepLoading(true)
    setCepError(null)
    setCepSuccess(false)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) {
        setCepError('CEP não encontrado. Preencha manualmente.')
        setAddressMode('manual')
        setCepSuccess(false)
      } else {
        setFormData(prev => ({
          ...prev,
          logradouro: data.logradouro || '',
          bairro: data.bairro || '',
          cidade: data.localidade || '',
          estado: data.uf || ''
        }))
        setAddressMode('auto')
        setCepSuccess(true)
        setCepError(null)
      }
    } catch (error) {
      setCepError('Erro ao buscar CEP. Preencha manualmente.')
      setAddressMode('manual')
      setCepSuccess(false)
    } finally {
      setCepLoading(false)
    }
  }

  // Busca CEP profissional
  const buscarCEPProf = async () => {
    const cep = enderecoProf.cep.replace(/\D/g, '')
    if (!cep || cep.length < 8) return

    setCepProfLoading(true)
    setCepProfError(null)
    setCepProfSuccess(false)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) {
        setCepProfError('CEP não encontrado. Preencha manualmente.')
        setCepProfSuccess(false)
      } else {
        setEnderecoProf(prev => ({
          ...prev,
          logradouro: data.logradouro || '',
          bairro: data.bairro || '',
          cidade: data.localidade || '',
          estado: data.uf || ''
        }))
        setCepProfSuccess(true)
        setCepProfError(null)
      }
    } catch (error) {
      setCepProfError('Erro ao buscar CEP. Preencha manualmente.')
      setCepProfSuccess(false)
    } finally {
      setCepProfLoading(false)
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

  // FORMULÁRIO ETAPA 1 - DADOS PESSOAIS (OTIMIZADO)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <button 
          onClick={() => setSelectedType(null)}
          className="text-[#26377F] hover:text-[#5A5AA4] flex items-center gap-2 mb-3"
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

      {/* CONTAINER ALARGADO: max-w-4xl → max-w-6xl */}
      <Card variant="white" className="max-w-6xl mx-auto">
        {/* ELIMINAR ESPAÇO - mb-4 removido */}
        <div>
          <H2>Dados Pessoais</H2>
          <P className="text-[#26377F]">
            Preencha seus dados pessoais e de contato
          </P>
        </div>
        
        {/* ESPAÇAMENTO REDUZIDO: space-y-6 → space-y-3 */}
        <form className="space-y-3 mt-4">
          
          {/* GRID DE 12 COLUNAS PARA CONTROLE PRECISO */}
          {/* Nome Completo (80%) + CPF (20%) na mesma linha */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-9">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                value={formData.nomeCompleto}
                onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
            <div className="col-span-12 md:col-span-3">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                CPF *
              </label>
              <input
                type="text"
                value={formData.numeroIdentidade}
                onChange={(e) => handleInputChange('numeroIdentidade', e.target.value)}
                placeholder="000.000.000-00"
                maxLength={14}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
          </div>

          {/* Email (33%) + Telefone Celular (33%) + Telefone Fixo (33%) na mesma linha */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-4">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                E-mail *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                Telefone Celular *
              </label>
              <input
                type="tel"
                value={formData.telCelular}
                onChange={(e) => handleInputChange('telCelular', e.target.value)}
                placeholder="(00) 00000-0000"
                maxLength={15}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                Telefone Fixo
              </label>
              <input
                type="tel"
                value={formData.telefoneFixo}
                onChange={(e) => handleInputChange('telefoneFixo', e.target.value)}
                placeholder="(00) 0000-0000"
                maxLength={14}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
              />
            </div>
          </div>

          {/* País (20%) + CEP (12%) na mesma linha */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-2">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                País *
              </label>
              <select
                value={formData.pais}
                onChange={(e) => {
                  handleInputChange('pais', e.target.value)
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
                  setCepSuccess(false)
                }}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              >
                {paises.map(p => (
                  <option key={p.code} value={p.code}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* CEP reduzido em 75%: agora 2 colunas (~17%) */}
            {isBrasil ? (
              <div className="col-span-12 md:col-span-2">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  CEP *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.cep}
                    onChange={(e) => {
                      handleInputChange('cep', e.target.value)
                      setCepSuccess(false)
                      setCepError(null)
                    }}
                    onBlur={buscarCEP}
                    placeholder="00000-000"
                    maxLength={9}
                    className="w-full px-3 py-1.5 pr-10 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                    required
                  />
                  {/* Indicador visual inline */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    {cepLoading && (
                      <svg className="animate-spin h-5 w-5 text-[#5A5AA4]" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                    )}
                    {cepSuccess && !cepLoading && (
                      <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    )}
                    {cepError && !cepLoading && (
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M15 9l-6 6M9 9l6 6"/>
                      </svg>
                    )}
                  </div>
                </div>
                {cepError && (
                  <p className="text-xs text-red-600 mt-1">{cepError}</p>
                )}
              </div>
            ) : (
              <div className="col-span-12 md:col-span-2">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  Código Postal *
                </label>
                <input
                  type="text"
                  value={formData.cep}
                  onChange={(e) => handleInputChange('cep', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                  required
                />
              </div>
            )}
          </div>

          {/* Logradouro (60%) + Número (10%) + Bairro (30%) na mesma linha */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-7">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                {isBrasil ? 'Logradouro' : 'Rua/Avenida'} *
              </label>
              <input
                type="text"
                value={formData.logradouro}
                onChange={(e) => handleInputChange('logradouro', e.target.value)}
                readOnly={isBrasil && addressMode === 'auto'}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] read-only:bg-gray-50"
                required
              />
            </div>
            <div className="col-span-12 md:col-span-1">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                Nº *
              </label>
              <input
                type="text"
                value={formData.numero}
                onChange={(e) => handleInputChange('numero', e.target.value)}
                maxLength={6}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                required
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <label className="block text-sm font-medium text-[#1B223F] mb-1">
                {isBrasil ? 'Bairro' : 'Bairro/Distrito'} *
              </label>
              <input
                type="text"
                value={formData.bairro}
                onChange={(e) => handleInputChange('bairro', e.target.value)}
                readOnly={isBrasil && addressMode === 'auto'}
                className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] read-only:bg-gray-50"
                required
              />
            </div>
          </div>

          {/* Complemento (35%) + Estado (25%) + Cidade (40%) na mesma linha */}
          {isBrasil ? (
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  value={formData.complemento}
                  onChange={(e) => handleInputChange('complemento', e.target.value)}
                  placeholder="Apto, Bloco, etc."
                  className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  Estado *
                </label>
                <select
                  value={formData.estado}
                  onChange={(e) => {
                    handleInputChange('estado', e.target.value)
                    handleInputChange('cidade', '')
                  }}
                  disabled={addressMode === 'auto'}
                  className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] disabled:bg-gray-50"
                  required
                >
                  <option value="">Selecione</option>
                  {estadosBR.map(e => (
                    <option key={e.uf} value={e.uf}>{e.nome}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-12 md:col-span-5">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  Cidade *
                </label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                  readOnly={addressMode === 'auto'}
                  placeholder={formData.estado ? 'Digite a cidade' : 'Selecione o estado'}
                  disabled={!formData.estado}
                  className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] read-only:bg-gray-50 disabled:bg-gray-100"
                  required
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  Estado/Província *
                </label>
                <input
                  type="text"
                  value={formData.estado}
                  onChange={(e) => handleInputChange('estado', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                  required
                />
              </div>
              <div className="col-span-12 md:col-span-5">
                <label className="block text-sm font-medium text-[#1B223F] mb-1">
                  Cidade *
                </label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange('cidade', e.target.value)}
                  className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                  required
                />
              </div>
            </div>
          )}

          {/* ENDEREÇO PROFISSIONAL (APENAS MAGO INICIADOR) */}
          {selectedType === 'iniciador' && (
            <div className="mt-6 pt-6 border-t border-[#C6C0E1]">
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mesmoEndereco}
                    onChange={(e) => setMesmoEndereco(e.target.checked)}
                    className="w-4 h-4 text-[#5A5AA4] border-[#C6C0E1] rounded focus:ring-2 focus:ring-[#5A5AA4]"
                  />
                  <span className="text-sm font-medium text-[#1B223F]">
                    Este endereço é onde você ministra Magia Divina?
                  </span>
                </label>
              </div>

              {!mesmoEndereco && (
                <div className="p-4 bg-[#ECE0F0] rounded-lg">
                  <h3 className="text-sm font-bold text-[#1B223F] mb-3">
                    📍 Endereço Profissional (visível para alunos)
                  </h3>
                  <div className="space-y-3">
                    {/* CEP Profissional */}
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-12 md:col-span-3">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          CEP *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={enderecoProf.cep}
                            onChange={(e) => {
                              handleEnderecoProfChange('cep', e.target.value)
                              setCepProfSuccess(false)
                              setCepProfError(null)
                            }}
                            onBlur={buscarCEPProf}
                            placeholder="00000-000"
                            maxLength={9}
                            className="w-full px-3 py-1.5 pr-10 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                            required
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            {cepProfLoading && (
                              <svg className="animate-spin h-4 w-4 text-[#5A5AA4]" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                              </svg>
                            )}
                            {cepProfSuccess && !cepProfLoading && (
                              <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M9 12l2 2 4-4"/>
                              </svg>
                            )}
                            {cepProfError && !cepProfLoading && (
                              <svg className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M15 9l-6 6M9 9l6 6"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        {cepProfError && (
                          <p className="text-xs text-red-600 mt-1">{cepProfError}</p>
                        )}
                      </div>
                    </div>

                    {/* Logradouro + Número Prof */}
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-12 md:col-span-7">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          Logradouro *
                        </label>
                        <input
                          type="text"
                          value={enderecoProf.logradouro}
                          onChange={(e) => handleEnderecoProfChange('logradouro', e.target.value)}
                          className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                          required
                        />
                      </div>
                      <div className="col-span-12 md:col-span-1">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          Nº *
                        </label>
                        <input
                          type="text"
                          value={enderecoProf.numero}
                          onChange={(e) => handleEnderecoProfChange('numero', e.target.value)}
                          maxLength={6}
                          className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                          required
                        />
                      </div>
                    </div>

                    {/* Bairro + Complemento Prof */}
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-12 md:col-span-4">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          Bairro *
                        </label>
                        <input
                          type="text"
                          value={enderecoProf.bairro}
                          onChange={(e) => handleEnderecoProfChange('bairro', e.target.value)}
                          className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                          required
                        />
                      </div>
                      <div className="col-span-12 md:col-span-4">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          Complemento
                        </label>
                        <input
                          type="text"
                          value={enderecoProf.complemento}
                          onChange={(e) => handleEnderecoProfChange('complemento', e.target.value)}
                          placeholder="Apto, Bloco, etc."
                          className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                        />
                      </div>
                    </div>

                    {/* Estado + Cidade Prof */}
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-12 md:col-span-4">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          Estado *
                        </label>
                        <select
                          value={enderecoProf.estado}
                          onChange={(e) => {
                            handleEnderecoProfChange('estado', e.target.value)
                            handleEnderecoProfChange('cidade', '')
                          }}
                          className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4]"
                          required
                        >
                          <option value="">Selecione</option>
                          {estadosBR.map(e => (
                            <option key={e.uf} value={e.uf}>{e.nome}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-12 md:col-span-5">
                        <label className="block text-xs font-medium text-[#1B223F] mb-1">
                          Cidade *
                        </label>
                        <input
                          type="text"
                          value={enderecoProf.cidade}
                          onChange={(e) => handleEnderecoProfChange('cidade', e.target.value)}
                          placeholder={enderecoProf.estado ? 'Digite a cidade' : 'Selecione o estado'}
                          disabled={!enderecoProf.estado}
                          className="w-full px-3 py-1.5 border border-[#C6C0E1] rounded focus:outline-none focus:ring-2 focus:ring-[#5A5AA4] disabled:bg-gray-100"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Botões */}
          <div className="flex justify-between pt-4 border-t border-[#C6C0E1]">
            <button
              type="button"
              onClick={() => setSelectedType(null)}
              className="px-5 py-2 border border-[#26377F] text-[#26377F] rounded hover:bg-[#ECE0F0] transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#5A5AA4] hover:bg-[#26377F] text-white rounded transition-colors text-sm font-medium"
            >
              Próxima Etapa →
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}
