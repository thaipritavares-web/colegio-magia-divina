export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-router-thin text-roxo-medio mb-8" style={{letterSpacing: '-1px'}}>
        Blog
      </h1>

      <div className="bg-lavanda p-8 rounded-lg text-center">
        <p className="text-xl text-azul-escuro mb-4">
          Blog em desenvolvimento.
        </p>
        <p className="text-azul-escuro">
          Em breve você poderá acessar artigos, notícias e conteúdos sobre Magia Divina.
        </p>
      </div>
    </div>
  )
}
