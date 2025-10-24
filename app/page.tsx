import { H2, H3, P } from '@/components/Typography'

export default function Home() {
  return (
    <div>
      {/* Hero Section com gradiente sutil */}
      <section className="bg-gradient-to-b from-white via-lilas-quase-branco to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <P size="xl" className="max-w-3xl mx-auto mb-10">
            Instituição dedicada ao ensino e preservação dos conhecimentos da Magia Divina segundo os ensinamentos de Rubens Saraceni.
          </P>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="/afilie-se" 
              className="bg-gradient-to-r from-roxo-medio to-azul-escuro hover:from-azul-escuro hover:to-roxo-medio text-white px-10 py-4 font-router-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
            >
              AFILIAR-SE
            </a>
            <a 
              href="/sobre-colegio" 
              className="bg-lavanda hover:bg-lilas-claro text-azul-marinho px-10 py-4 font-router transition-all duration-300 hover:scale-102 hover:shadow-lg text-lg"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* Cards de Destaque com Glass Morphism */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-lavanda/40 backdrop-blur-sm border border-white/30 p-8 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-card-hover">
            <H3 variant="default">Magia Divina</H3>
            <P className="mb-6">
              Conheça os princípios e ensinamentos da Magia Divina transmitidos por Rubens Saraceni.
            </P>
            <a 
              href="/magia-divina" 
              className="inline-block text-roxo-medio font-router hover:text-azul-escuro transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-roxo-medio after:transition-all after:duration-300 hover:after:w-full"
            >
              Saiba mais →
            </a>
          </div>

          {/* Card 2 */}
          <div className="group bg-lavanda/40 backdrop-blur-sm border border-white/30 p-8 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-card-hover">
            <H3 variant="default">Consulta de Membros</H3>
            <P className="mb-6">
              Encontre magos iniciadores e iniciados próximos à sua região.
            </P>
            <a 
              href="/membros" 
              className="inline-block text-roxo-medio font-router hover:text-azul-escuro transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-roxo-medio after:transition-all after:duration-300 hover:after:w-full"
            >
              Buscar membros →
            </a>
          </div>

          {/* Card 3 */}
          <div className="group bg-lavanda/40 backdrop-blur-sm border border-white/30 p-8 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-card-hover">
            <H3 variant="default">Torne-se Membro</H3>
            <P className="mb-6">
              Faça parte do Colégio como Mago Iniciador ou Mago Iniciado.
            </P>
            <a 
              href="/afilie-se" 
              className="inline-block text-roxo-medio font-router hover:text-azul-escuro transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-roxo-medio after:transition-all after:duration-300 hover:after:w-full"
            >
              Afiliar-se →
            </a>
          </div>
        </div>
      </section>

      {/* Divisor Elegante */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center my-16">
          <div className="flex-1 border-t border-lavanda"></div>
          <span className="px-6 text-roxo-medio font-router-thin text-lg">✦</span>
          <div className="flex-1 border-t border-lavanda"></div>
        </div>
      </div>

      {/* Seção Sobre Rubens Saraceni com Card Sólido */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-lavanda p-12 shadow-card-solid hover:shadow-card-solid-hover transition-all duration-300 hover:-translate-y-1" style={{borderRadius: 0}}>
          <H2 className="mt-0">Rubens Saraceni</H2>
          <P size="lg" className="mb-6">
            Fundador e mentor espiritual do Colégio Tradição de Magia Divina, Rubens Saraceni dedica sua vida à transmissão dos conhecimentos sagrados da Umbanda e da Magia Divina.
          </P>
          <a 
            href="/rubens-saraceni" 
            className="inline-block text-roxo-medio font-router hover:text-azul-escuro transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-roxo-medio after:transition-all after:duration-300 hover:after:w-full text-lg"
          >
            Conheça sua história →
          </a>
        </div>
      </section>
    </div>
  )
}
