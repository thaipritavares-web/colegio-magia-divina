import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-azul-marinho text-lilas-claro mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-router font-bold text-white mb-4">Colégio Tradição de Magia Divina</h3>
            <p className="text-sm font-router-thin leading-relaxed">
              Instituição dedicada ao ensino e preservação dos conhecimentos da Magia Divina segundo os ensinamentos de Rubens Saraceni.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-router font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3 text-sm font-router-thin">
              <li>
                <Link href="/sobre-colegio" className="hover:text-white transition-colors">
                  Sobre o Colégio
                </Link>
              </li>
              <li>
                <Link href="/rubens-saraceni" className="hover:text-white transition-colors">
                  Rubens Saraceni
                </Link>
              </li>
              <li>
                <Link href="/magia-divina" className="hover:text-white transition-colors">
                  A Magia Divina
                </Link>
              </li>
              <li>
                <Link href="/membros" className="hover:text-white transition-colors">
                  Consulta de Membros
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/afiliar-se" className="hover:text-white transition-colors">
                  Afiliar-se
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-router font-bold text-white mb-4">Contato</h3>
            <p className="text-sm font-router-thin leading-relaxed">
              Email: contato@colegiomagiadivina.com.br<br />
              Atendimento: Seg-Sex, 9h-18h
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-azul-escuro mt-10 pt-8 text-center text-sm font-router-thin">
          <p>&copy; {new Date().getFullYear()} Colégio Tradição de Magia Divina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
