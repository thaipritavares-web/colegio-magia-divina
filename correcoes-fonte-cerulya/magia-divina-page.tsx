export default function MagiaDivina() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-router-thin text-roxo-medio mb-8" style={{letterSpacing: '-1px'}}>
        A Magia Divina
      </h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">O que Ã© Magia Divina?</h2>
          <p className="text-azul-escuro leading-relaxed">
            A Magia Divina Ã© um conjunto de conhecimentos e prÃ¡ticas sagradas que permitem ao praticante trabalhar conscientemente com as energias divinas. Baseada nos ensinamentos da Umbanda Sagrada, ela oferece ferramentas para o desenvolvimento espiritual e o serviÃ§o ao prÃ³ximo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Os Graus de Magia</h2>
          <p className="text-azul-escuro leading-relaxed mb-4">
            O conhecimento da Magia Divina estÃ¡ organizado em diversos graus, cada um focando em aspectos especÃ­ficos do trabalho espiritual. Os principais graus incluem:
          </p>
          <div className="bg-lavanda p-6 rounded-lg">
            <ul className="space-y-2 text-azul-escuro">
              <li>â€¢ Magia Sagrada das Sete Chamas</li>
              <li>â€¢ Magia Sagrada das Sete Pedras</li>
              <li>â€¢ Magia Sagrada das Sete Ervas Sagradas</li>
              <li>â€¢ Magia Sagrada das Sete Raios</li>
              <li>â€¢ Magia Sagrada das Sete SÃ­mbolos</li>
              <li>â€¢ E muitos outros graus avanÃ§ados</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">PrincÃ­pios Fundamentais</h2>
          <p className="text-azul-escuro leading-relaxed">
            A Magia Divina fundamenta-se no respeito Ã s leis divinas, na Ã©tica espiritual e no compromisso com o bem. Todo praticante deve desenvolver-se integralmente, buscando equilÃ­brio entre conhecimento, prÃ¡tica e virtude.
          </p>
        </section>

        <section className="bg-lilas-branco p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Como ComeÃ§ar?</h2>
          <p className="text-azul-escuro mb-4">
            Para iniciar-se na Magia Divina, Ã© necessÃ¡rio buscar um Mago Iniciador certificado pelo ColÃ©gio. Consulte nossa seÃ§Ã£o de membros para encontrar um iniciador prÃ³ximo a vocÃª.
          </p>
          <a 
            href="/membros" 
            className="inline-block bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-2 rounded-lg transition-colors"
          >
            Buscar Iniciadores
          </a>
        </section>
      </div>
    </div>
  )
}
