import { H1, P } from '@/components/Typography'
import { SimpleCard } from '@/components/Card'

export default function Membros() {
  return (
    <div className="container mx-auto px-4 py-12">
      <H1>Consulta de Membros</H1>

      <SimpleCard>
        <P size="xl" className="text-center mb-4">
          Sistema de consulta de membros em desenvolvimento.
        </P>
        <P className="text-center mb-0">
          Em breve você poderá buscar Magos Iniciadores e Iniciados por localização.
        </P>
      </SimpleCard>
    </div>
  )
}
