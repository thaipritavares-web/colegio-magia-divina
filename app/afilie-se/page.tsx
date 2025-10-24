import { H1, H3, P } from '@/components/Typography'
import Card, { CardGrid, SimpleCard } from '@/components/Card'

export default function Afiliar() {
  return (
    <div className="container mx-auto px-4 py-12">
      <H1>Afiliar-se ao Colégio</H1>

      <CardGrid columns={2} className="mb-8">
        {/* Card Mago Iniciador */}
        <Card>
          <H3>Mago Iniciador</H3>
          <P>
            Profissionais habilitados a ministrar cursos e iniciar novos praticantes nos diversos graus de Magia Divina.
          </P>
          <div className="bg-white p-4 mb-4" style={{borderRadius: 0}}>
            <P size="sm" className="mb-0">
              <strong>Requisitos:</strong> Formação completa em graus avançados de Magia Divina e aprovação do Colégio.
            </P>
          </div>
          <button className="w-full bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-3 transition-colors font-medium">
            Em breve
          </button>
        </Card>

        {/* Card Mago Iniciado */}
        <Card>
          <H3>Mago Iniciado</H3>
          <P>
            Praticantes que concluíram um ou mais graus de Magia Divina e atendem ao público com seu conhecimento.
          </P>
          <div className="bg-white p-4 mb-4" style={{borderRadius: 0}}>
            <P size="sm" className="mb-0">
              <strong>Requisitos:</strong> Conclusão de pelo menos um grau de Magia Sagrada com certificado válido.
            </P>
          </div>
          <button className="w-full bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-3 transition-colors font-medium">
            Em breve
          </button>
        </Card>
      </CardGrid>

      <SimpleCard variant="lilas-quase-branco">
        <P className="text-center mb-0">
          Sistema de afiliação em desenvolvimento. Em breve você poderá realizar sua inscrição online com pagamento via cartão de crédito ou PIX.
        </P>
      </SimpleCard>
    </div>
  )
}
