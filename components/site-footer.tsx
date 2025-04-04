import Link from "next/link"
import { CarTaxiFrontIcon as Taxi, Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Taxi className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold text-white">Michelines</span>
            </Link>
            <p className="text-sm">
              Locadora de táxis com a melhor frota e suporte completo para motoristas em São Paulo.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-blue-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-blue-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/cadastro" className="text-sm hover:text-blue-400 transition-colors">
                  Solicitar Locação
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos#administrativo" className="text-sm hover:text-blue-400 transition-colors">
                  Suporte Administrativo
                </Link>
              </li>
              <li>
                <Link href="/servicos#juridico" className="text-sm hover:text-blue-400 transition-colors">
                  Suporte Jurídico
                </Link>
              </li>
              <li>
                <Link href="/servicos#mecanico" className="text-sm hover:text-blue-400 transition-colors">
                  Suporte Mecânico
                </Link>
              </li>
              <li>
                <Link href="/servicos#dtaxi" className="text-sm hover:text-blue-400 transition-colors">
                  Parceria Dtáxi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <address className="not-italic text-sm space-y-2">
              <p>Av. Exemplo, 1234</p>
              <p>São Paulo - SP</p>
              <p>CEP: 00000-000</p>
              <p>Telefone: (11) 5555-5555</p>
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Email: contato@michelines.com.br</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Michelines Locadora de Táxis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

