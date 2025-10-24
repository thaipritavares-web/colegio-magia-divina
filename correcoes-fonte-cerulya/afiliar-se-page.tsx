export default function Afiliar() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-router-thin text-roxo-medio mb-8" style={{letterSpacing: '-1px'}}>
        Afiliar-se ao ColÃ©gio
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-lavanda p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Mago Iniciador</h2>
          <p className="text-azul-escuro mb-4">
            Profissionais habilitados a ministrar cursos e iniciar novos praticantes nos diversos graus de Magia Divina.
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <p className="text-sm text-azul-escuro">
              <strong>Requisitos:</strong> FormaÃ§Ã£o completa em graus avanÃ§ados de Magia Divina e aprovaÃ§Ã£o do ColÃ©gio.
            </p>
          </div>
          <button className="w-full bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-3 rounded-lg transition-colors font-medium">
            Em breve
          </button>
        </div>

        <div className="bg-lavanda p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-azul-marinho mb-4">Mago Iniciado</h2>
          <p className="text-azul-escuro mb-4">
            Praticantes que concluÃ­ram um ou mais graus de Magia Divina e atendem ao pÃºblico com seu conhecimento.
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <p className="text-sm text-azul-escuro">
              <strong>Requisitos:</strong> ConclusÃ£o de pelo menos um grau de Magia Sagrada com certificado vÃ¡lido.
            </p>
          </div>
          <button className="w-full bg-roxo-medio hover:bg-azul-escuro text-white px-6 py-3 rounded-lg transition-colors font-medium">
            Em breve
          </button>
        </div>
      </div>

      <div className="bg-lilas-branco p-6 rounded-lg text-center">
        <p className="text-azul-escuro">
          Sistema de afiliaÃ§Ã£o em desenvolvimento. Em breve vocÃª poderÃ¡ realizar sua inscriÃ§Ã£o online com pagamento via cartÃ£o de crÃ©dito ou PIX.
        </p>
      </div>
    </div>
  )
}
