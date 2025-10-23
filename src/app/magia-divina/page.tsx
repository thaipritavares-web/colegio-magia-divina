export default function MagiaDivina() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-router-thin text-roxo-medio mb-8" style={{letterSpacing: '-1px'}}>
        A Magia Divina
      </h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">O que é Magia Divina?</h2>
          <p className="text-azul-escuro leading-relaxed">
            A Magia Divina é um conjunto de conhecimentos e práticas sagradas que permitem ao praticante trabalhar conscientemente com as energias divinas. Baseada nos ensinamentos da Umbanda Sagrada, ela oferece ferramentas para o desenvolvimento espiritual e o serviço ao próximo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Os Graus de Magia</h2>
          <p className="text-azul-escuro leading-relaxed mb-4">
            O conhecimento da Magia Divina está organizado em diversos graus, cada um focando em aspectos específicos do trabalho espiritual. Os principais graus incluem:
          </p>
          <div className="bg-lavanda p-6 rounded-lg">
            <ul className="space-y-2 text-azul-escuro">
              <li>• Magia Sagrada das Sete Chamas</li>
              <li>• Magia Sagrada das Sete Pedras</li>
              <li>• Magia Sagrada das Sete Ervas Sagradas</li>
              <li>• Magia Sagrada das Sete Raios</li>
              <li>• Magia Sagrada das Sete Símbolos</li>
              <li>• E muitos outros graus avançados</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Princípios Fundamentais</h2>
          <p className="text-azul-escuro leading-relaxed">
            A Magia Divina fundamenta-se no respeito às leis divinas, na ética espiritual e no compromisso com o bem. Todo praticante deve desenvolver-se integralmente, buscando equilíbrio entre conhecimento, prática e virtude.
          </p>
        </section>

        <section className="bg-lilas-branco p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Como Começar?</h2>
          <p className="text-azul-escuro mb-4">
            Para iniciar-se na Magia Divina, é necessário buscar um Mago Iniciador certificado pelo Colégio. Consulte nossa seção de membros para encontrar um iniciador próximo a você.
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
