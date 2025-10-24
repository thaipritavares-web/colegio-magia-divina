import { H1, P } from '@/components/Typography'
import { SimpleCard } from '@/components/Card'

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <H1>Perguntas Frequentes (FAQ)</H1>

      <SimpleCard>
        <P size="xl" className="text-center mb-4">
          Seção de perguntas frequentes em desenvolvimento.
        </P>
        <P className="text-center mb-0">
          Em breve você terá acesso a respostas para as dúvidas mais comuns sobre o Colégio e a Magia Divina.
        </P>
      </SimpleCard>
    </div>
  )
}
