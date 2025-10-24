import { H3, P, Link } from '@/components/Typography'

export default function Footer() {
  return (
    <footer className="bg-azul-marinho text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Coluna 1 */}
          <div>
            <H3 variant="default" className="mb-4">Colégio de Magia Divina</H3>
            <P variant="secondary" size="sm" className="mb-0 text-gray-300">
              Instituição oficial de ensino e preservação da Magia Divina.
            </P>
          </div>
          
          {/* Coluna 2 */}
          <div>
            <H3 variant="default" className="mb-4">Links Úteis</H3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-colegio" variant="light">
                  Sobre o Colégio
                </Link>
              </li>
              <li>
                <Link href="/afilie-se" variant="light">
                  Afiliar-se
                </Link>
              </li>
              <li>
                <Link href="/membros" variant="light">
                  Consulta de Membros
                </Link>
              </li>
              <li>
                <Link href="/faq" variant="light">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 */}
          <div>
            <H3 variant="default" className="mb-4">Contato</H3>
            <P variant="secondary" size="sm" className="mb-0 text-gray-300">
              Para mais informações sobre afiliação e cursos,<br />
              consulte um Mago Iniciador em sua região.
            </P>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-azul-escuro mt-8 pt-8 text-center">
          <P variant="secondary" size="sm" className="mb-0 text-gray-300">
            © 2025 Colégio Tradição de Magia Divina. Todos os direitos reservados.
          </P>
        </div>
      </div>
    </footer>
  )
}
