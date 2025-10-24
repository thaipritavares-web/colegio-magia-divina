import { H1, P } from '@/components/Typography'
import { SimpleCard } from '@/components/Card'

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <H1>Blog</H1>

      <SimpleCard>
        <P size="xl" className="text-center mb-4">
          Blog em desenvolvimento.
        </P>
        <P className="text-center mb-0">
          Em breve você poderá acessar artigos, notícias e conteúdos sobre Magia Divina.
        </P>
      </SimpleCard>
    </div>
  )
}
