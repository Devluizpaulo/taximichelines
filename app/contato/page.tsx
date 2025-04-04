"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Agradecemos seu contato. Responderemos o mais breve possível.",
    })

    setIsSubmitting(false)
    // Reset form
    event.currentTarget.reset()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-gray-600">
            Estamos à disposição para esclarecer suas dúvidas e fornecer mais informações sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-yellow-500 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-gray-600">(11) 5555-5555</p>
                  <p className="text-gray-600">WhatsApp: (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-yellow-500 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <p className="text-gray-600">contato@michelines.com.br</p>
                  <p className="text-gray-600">suporte@michelines.com.br</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-yellow-500 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-gray-600">Av. Exemplo, 1234</p>
                  <p className="text-gray-600">Bairro - São Paulo/SP</p>
                  <p className="text-gray-600">CEP: 00000-000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-yellow-500 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                  <p className="text-gray-600">Suporte 24h para emergências</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Localização</h3>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">Mapa de Localização</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input id="nome" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="informacoes">Informações sobre locação</SelectItem>
                      <SelectItem value="suporte">Suporte técnico</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                      <SelectItem value="sugestoes">Sugestões</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea id="mensagem" rows={5} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

