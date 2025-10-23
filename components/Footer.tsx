export default function Footer() {
  return (
    <footer className="bg-azul-marinho text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-router-bold text-lg mb-4">Colégio de Magia Divina</h3>
            <p className="font-router-thin text-sm">
              Instituição oficial de ensino e preservação da Magia Divina.
            </p>
          </div>
          
          <div>
            <h3 className="font-router-bold text-lg mb-4">Links Úteis</h3>
            <ul className="font-router-thin text-sm space-y-2">
              <li><a href="/sobre-colegio" className="hover:text-lilas-claro transition">Sobre o Colégio</a></li>
              <li><a href="/afilie-se" className="hover:text-lilas-claro transition">Afiliar-se</a></li>
              <li><a href="/consulta-membros" className="hover:text-lilas-claro transition">Consulta de Membros</a></li>
              <li><a href="/faq" className="hover:text-lilas-claro transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-router-bold text-lg mb-4">Contato</h3>
            <p className="font-router-thin text-sm">
              Para mais informações sobre afiliação e cursos,<br />
              consulte um Mago Iniciador em sua região.
            </p>
          </div>
        </div>
        
        <div className="border-t border-azul-escuro mt-8 pt-8 text-center">
          <p className="font-router-thin text-sm">
            © 2025 Colégio Tradição de Magia Divina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
