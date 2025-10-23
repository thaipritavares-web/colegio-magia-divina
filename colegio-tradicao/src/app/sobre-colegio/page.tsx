export default function SobreColegio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-router-thin text-roxo-medio mb-8" style={{letterSpacing: '-1px'}}>
        Sobre o Colégio Tradição de Magia Divina
      </h1>

      <div className="max-w-4xl">
        <section className="mb-12">
          <h2 className="text-3xl font-router-thin text-roxo-medio mb-6">Nossa Missão</h2>
          <p className="font-router-thin text-gray-text leading-relaxed text-lg">
            O Colégio Tradição de Magia Divina foi fundado com o propósito de preservar e transmitir os ensinamentos sagrados da Magia Divina, conforme revelados por Rubens Saraceni. Nossa missão é formar magos conscientes, éticos e preparados para trabalhar com as energias divinas em prol do bem.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-router-thin text-roxo-medio mb-6">História</h2>
          <p className="font-router-thin text-gray-text leading-relaxed text-lg">
            Fundado sob a orientação espiritual de Rubens Saraceni, o Colégio representa a institucionalização dos conhecimentos da Magia Divina, oferecendo formação estruturada e certificada para praticantes em todo o Brasil.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-router-thin text-roxo-medio mb-6">Estrutura</h2>
          <p className="font-router-thin text-gray-text leading-relaxed text-lg">
            O Colégio conta com uma rede de Magos Iniciadores qualificados para ministrar os diversos graus de Magia Sagrada, desde as Sete Chamas até os níveis mais avançados de conhecimento.
          </p>
        </section>

        <section className="bg-lavanda p-10 shadow-card-solid hover:shadow-card-solid-hover transition-all duration-300">
          <h2 className="text-3xl font-router-thin text-azul-marinho mb-6">Valores</h2>
          <ul className="space-y-3 font-router-thin text-gray-text text-lg">
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
        </section>
      </div>
    </div>
  )
}
