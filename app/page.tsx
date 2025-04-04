import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, MapPin, Car, Shield, Wrench, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[600px] bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="container mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-center justify-between">
          {/* Texto */}
          <div className="max-w-2xl text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dirija com a melhor locadora de táxis de São Paulo
            </h1>
            <p className="text-lg md:text-xl text-white">
              Veículos novos, suporte completo e as melhores condições para motoristas de táxi.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Solicitar Locação
            </Button>
          </div>

          {/* Imagem */}
          <div className="relative w-full md:w-[45%] max-w-lg">
            <Image
              src="/logo.png"
              alt="Frota de Táxis"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Bem-vindo à Michelines</h2>
            <p className="text-lg text-gray-600 mb-8">
              Há mais de 40 anos oferecendo as melhores condições para motoristas de táxi em São Paulo. Nossa frota é
              composta por veículos novos e revisados, garantindo segurança e conforto para você e seus passageiros.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Car className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Frota Nova</h3>
                <p className="text-gray-600">Veículos novos e em excelente estado para seu trabalho diário.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Suporte Completo</h3>
                <p className="text-gray-600">
                  Suporte administrativo, jurídico e mecânico para você focar no que importa.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Parceria Dtáxi</h3>
                <p className="text-gray-600">Acesso ao aeroporto de Congonhas através da nossa parceria exclusiva.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte Administrativo</h3>
                <p className="text-gray-600">
                  Cuidamos de toda a burocracia para que você possa focar no seu trabalho. Documentação, licenças e
                  renovações são por nossa conta.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte Jurídico</h3>
                <p className="text-gray-600">
                  Assistência jurídica para questões relacionadas ao seu trabalho como taxista, garantindo tranquilidade
                  no seu dia a dia.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suporte Mecânico</h3>
                <p className="text-gray-600">
                  Manutenção preventiva e corretiva para manter seu veículo sempre em perfeitas condições, evitando
                  paradas não programadas.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Car className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Parceria Dtáxi</h3>
                <p className="text-gray-600">
                  Acesso exclusivo ao aeroporto de Congonhas através da nossa parceria com a Dtáxi, ampliando suas
                  oportunidades de corridas.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/servicos">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Dicas para Taxistas</h2>
            <Link href="/blog" className="text-blue-600 hover:underline flex items-center">
              Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Como se tornar um taxista de sucesso"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Como se tornar um taxista de sucesso em São Paulo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Descubra os passos essenciais para iniciar sua carreira como taxista na maior cidade do Brasil e
                  garantir um bom rendimento mensal.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/blog/como-se-tornar-taxista-sucesso">
                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                    Ler artigo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Dicas para economizar combustível"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Dicas para economizar combustível no dia a dia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Aprenda técnicas de direção econômica e hábitos que podem reduzir significativamente o consumo de
                  combustível do seu táxi.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/blog/dicas-economizar-combustivel">
                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                    Ler artigo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Segurança no táxi"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Segurança no táxi: como proteger você e seus passageiros</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Medidas de segurança essenciais para garantir tranquilidade durante o trabalho e oferecer um serviço
                  de qualidade aos clientes.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href="/blog/seguranca-taxi-proteger-passageiros">
                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                    Ler artigo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se à Michelines e tenha acesso aos melhores veículos e suporte completo para sua carreira como
            taxista.
          </p>
          <Link href="/cadastro">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Cadastre-se Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <PhoneCall className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600">(11) 5555-5555</p>
                <p className="text-gray-600">WhatsApp: (11) 99999-9999</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                <p className="text-gray-600">contato@michelines.com.br</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Endereço</h3>
                <p className="text-gray-600">Av. Exemplo, 1234</p>
                <p className="text-gray-600">São Paulo - SP</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/contato">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Ver informações de contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

