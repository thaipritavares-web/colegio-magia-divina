import { H1, H2, H3, P } from '@/components/Typography'
import Card from '@/components/Card'

export default function SobreColegio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <H1>Sobre o Colégio Tradição de Magia Divina</H1>

      <div className="max-w-4xl">
        <section className="mb-12">
          <H2>Nossa Missão</H2>
          <P size="lg">
            O Colégio Tradição de Magia Divina foi fundado com o propósito de preservar e transmitir os ensinamentos sagrados da Magia Divina, conforme revelados por Rubens Saraceni. Nossa missão é formar magos conscientes, éticos e preparados para trabalhar com as energias divinas em prol do bem.
          </P>
        </section>

        <section className="mb-12">
          <H2>História</H2>
          <P size="lg">
            Fundado sob a orientação espiritual de Rubens Saraceni, o Colégio representa a institucionalização dos conhecimentos da Magia Divina, oferecendo formação estruturada e certificada para praticantes em todo o Brasil.
          </P>
        </section>

        <section className="mb-12">
          <H2>Estrutura</H2>
          <P size="lg">
            O Colégio conta com uma rede de Magos Iniciadores qualificados para ministrar os diversos graus de Magia Sagrada, desde as Sete Chamas até os níveis mais avançados de conhecimento.
          </P>
        </section>

        <Card>
          <H3>Valores</H3>
          <ul className="space-y-3 font-router text-gray-text text-lg">
            <li className="flex items-start">
              <span className="text-roxo-medio mr-3 text-xl">•</span>
              <span>Respeito aos ensinamentos ancestrais</span>
            </li>
            <li className="flex items-start">
              <span className="text-roxo-medio mr-3 text-xl">•</span>
              <span>Ética e responsabilidade espiritual</span>
            </li>
            <li className="flex items-start">
              <span className="text-roxo-medio mr-3 text-xl">•</span>
              <span>Comprometimento com o desenvolvimento pessoal</span>
            </li>
            <li className="flex items-start">
              <span className="text-roxo-medio mr-3 text-xl">•</span>
              <span>Serviço à comunidade</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
