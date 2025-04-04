import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Sobre a Michelines</h1>
          <p className="text-gray-600">
            Conheça nossa história, missão e os diferenciais que fazem da Michelines a melhor opção para motoristas de
            táxi em São Paulo.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-6">Nossa História</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Fundada em 2010, a Michelines nasceu com o objetivo de oferecer uma alternativa de qualidade para
                  motoristas de táxi em São Paulo, combinando veículos em excelente estado com suporte completo para os
                  profissionais.
                </p>
                <p className="text-gray-600 mb-4">
                  Ao longo dos anos, expandimos nossa frota e aprimoramos nossos serviços, sempre ouvindo as
                  necessidades dos motoristas e buscando soluções para facilitar seu trabalho diário.
                </p>
                <p className="text-gray-600">
                  Hoje, somos reconhecidos como uma das principais locadoras de táxis da cidade, com uma frota moderna e
                  uma equipe dedicada a proporcionar a melhor experiência para nossos parceiros.
                </p>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=480"
                  alt="História da Michelines"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Missão, Visão e Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Missão</h3>
                <p className="text-gray-600">
                  Proporcionar aos motoristas de táxi as melhores condições de trabalho, com veículos de qualidade e
                  suporte completo, contribuindo para a excelência no transporte público de São Paulo.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a melhor locadora de táxis do Brasil, referência em qualidade de serviços e
                  satisfação dos motoristas parceiros.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Valores</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Excelência no atendimento</li>
                  <li>• Transparência nas relações</li>
                  <li>• Compromisso com a qualidade</li>
                  <li>• Respeito aos profissionais</li>
                  <li>• Responsabilidade social</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Nossos Diferenciais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=320&width=480"
                  alt="Diferenciais da Michelines"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Frota Nova e Bem Mantida</h3>
                      <p className="text-gray-600">Veículos com no máximo 3 anos de uso, revisados regularmente.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Suporte 24 Horas</h3>
                      <p className="text-gray-600">Assistência disponível a qualquer hora para emergências.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Condições Flexíveis</h3>
                      <p className="text-gray-600">Planos adaptados às necessidades de cada motorista.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Parcerias Estratégicas</h3>
                      <p className="text-gray-600">Acesso a pontos privilegiados como o aeroporto de Congonhas.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Equipe Especializada</h3>
                      <p className="text-gray-600">Profissionais com ampla experiência no setor de táxis.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

