import { H1, H2, H3, P } from '@/components/Typography'
import Card from '@/components/Card'

export default function MagiaDivina() {
  return (
    <div className="container mx-auto px-4 py-12">
      <H1>A Magia Divina</H1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <H2>O que é Magia Divina?</H2>
          <P>
            A Magia Divina é um conjunto de conhecimentos e práticas sagradas que permitem ao praticante trabalhar conscientemente com as energias divinas. Baseada nos ensinamentos da Umbanda Sagrada, ela oferece ferramentas para o desenvolvimento espiritual e o serviço ao próximo.
          </P>
        </section>

        <section className="mb-8">
          <H2>Os Graus de Magia</H2>
          <P>
            O conhecimento da Magia Divina está organizado em diversos graus, cada um focando em aspectos específicos do trabalho espiritual. Os principais graus incluem:
          </P>
          
          <Card variant="lavanda" padding="md">
            <H3>Principais Graus</H3>
            <ul className="space-y-2 font-router text-gray-text">
              <li>• Magia Sagrada das Sete Chamas</li>
              <li>• Magia Sagrada das Sete Pedras</li>
              <li>• Magia Sagrada das Sete Ervas Sagradas</li>
              <li>• Magia Sagrada dos Sete Raios</li>
              <li>• Magia Sagrada dos Sete Símbolos</li>
              <li>• E muitos outros graus avançados</li>
            </ul>
          </Card>
        </section>

        <section className="mb-8">
          <H2>Princípios Fundamentais</H2>
          <P>
            A Magia Divina fundamenta-se no respeito às leis divinas, na ética espiritual e no compromisso com o bem. Todo praticante deve desenvolver-se integralmente, buscando equilíbrio entre conhecimento, prática e virtude.
          </P>
        </section>

        <Card variant="lilas-quase-branco" padding="md">
          <H3>Como Começar?</H3>
          <P>
            Para iniciar-se na Magia Divina, é necessário buscar um Mago Iniciador certificado pelo Colégio. Consulte nossa seção de membros para encontrar um iniciador próximo a você.
          </P>
          <a 
            href="/membros" 
            className="inline-block bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-2 transition-colors"
          >
            Buscar Iniciadores
          </a>
        </Card>
      </div>
    </div>
  )
}
