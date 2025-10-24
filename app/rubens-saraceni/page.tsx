import { H1, H2, P } from '@/components/Typography'
import Card from '@/components/Card'

export default function RubensSaraceni() {
  return (
    <div className="container mx-auto px-4 py-16">
      <H1>Rubens Saraceni</H1>

      <div className="max-w-4xl">
        <section className="mb-12">
          <H2>Mentor Espiritual</H2>
          <P size="lg">
            Rubens Saraceni é o fundador e mentor espiritual do Colégio Tradição de Magia Divina. Através de sua conexão com o sagrado, recebeu e sistematizou os ensinamentos que formam a base da Magia Divina como conhecemos hoje.
          </P>
        </section>

        <section className="mb-12">
          <H2>Obra e Legado</H2>
          <P size="lg">
            Autor de dezenas de livros sobre Umbanda e Magia Divina, Rubens Saraceni dedica sua vida à transmissão dos conhecimentos sagrados. Seu trabalho revolucionou a compreensão da Umbanda e estabeleceu bases sólidas para a prática da Magia Divina.
          </P>
        </section>

        <section className="mb-12">
          <H2>Ensinamentos</H2>
          <P size="lg">
            Os ensinamentos de Rubens Saraceni abrangem desde os fundamentos da cosmogonia umbandista até as práticas mais avançadas de magia ritual, sempre enfatizando a ética, o respeito e o desenvolvimento espiritual consciente.
          </P>
        </section>

        <Card>
          <H2 className="mt-0">Principais Obras</H2>
          <P size="lg">
            Entre suas principais obras estão os livros que abordam os diversos aspectos da Magia Divina, incluindo os rituais das Sete Chamas, Pedras, Ervas e demais graus de conhecimento.
          </P>
        </Card>
      </div>
    </div>
  )
}
