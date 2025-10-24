import { H1, H2, P } from '@/components/Typography'
import Card, { CardGrid } from '@/components/Card'

export default function Afiliar() {
  return (
    <div className="container mx-auto px-4 py-12">
      <H1>Afilie-se ao Colégio</H1>

      <CardGrid columns={2} className="mb-8">
        {/* Card Mago Iniciador - Mantém lavanda */}
        <Card variant="lavanda">
          {/* Ícone estrela preenchida */}
          <div className="flex justify-center mb-4">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#5A5AA4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <H2 className="text-center mb-2">Mago Iniciador(a)</H2>
          
          {/* Preço */}
          <div className="text-center mb-4">
            <span className="text-3xl font-bold text-[#5A5AA4]">R$ 250,00</span>
            <span className="text-lg text-[#26377F]">/ano</span>
          </div>

          {/* Descrição */}
          <P className="text-center mb-4">
            Professor de Magia Divina afiliado ao Colégio Tradição, autorizado a ministrar cursos e atender magos iniciados.
          </P>

          {/* Lista de benefícios */}
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

          {/* CTA - BOTÃO AJUSTADO */}
          <div className="flex justify-center">
            <button className="bg-roxo-medio hover:bg-azul-escuro text-white px-8 py-3 transition-colors font-medium rounded">
              Afilie-se como Mago Iniciador
            </button>
          </div>
        </Card>

        {/* Card Mago Iniciado - BRANCO SEMI-TRANSPARENTE SEM BORDA */}
        <Card variant="white" className="bg-white/70 backdrop-blur-sm">
          {/* Ícone estrela vazada - AZUL ESCURO */}
          <div className="flex justify-center mb-4">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#26377F" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <H2 className="text-center mb-2 text-[#1B223F]">Mago Iniciado(a)</H2>
          
          {/* Preço - AZUL ESCURO */}
          <div className="text-center mb-4">
            <span className="text-3xl font-bold text-[#26377F]">R$ 200,00</span>
            <span className="text-lg text-[#1B223F]">/ano</span>
          </div>

          {/* Descrição */}
          <P className="text-center mb-4 text-[#1B223F]">
            Praticantes que concluíram um ou mais graus de Magia Divina e atendem ao público com seu conhecimento.
          </P>

          {/* Lista de benefícios - ÍCONES AZUL ESCURO */}
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

          {/* CTA - BOTÃO AJUSTADO */}
          <div className="flex justify-center">
            <button className="bg-roxo-medio hover:bg-azul-escuro text-white px-8 py-3 transition-colors font-medium rounded">
              Afilie-se como Mago Iniciado
            </button>
          </div>
        </Card>
      </CardGrid>
    </div>
  )
}
