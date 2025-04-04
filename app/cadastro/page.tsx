"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function CadastroPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para dar continuidade ao processo.",
    })

    setIsSubmitting(false)
    // Reset form
    event.currentTarget.reset()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Solicitar Locação</h1>
          <p className="text-gray-600">
            Preencha o formulário abaixo para solicitar a locação de um táxi. Nossa equipe entrará em contato para dar
            continuidade ao processo.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Dados Pessoais</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input id="nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input id="cpf" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço Completo *</Label>
                <Input id="endereco" required />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Informações Profissionais</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cnh">Número da CNH *</Label>
                  <Input id="cnh" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria da CNH *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="b">B</SelectItem>
                      <SelectItem value="c">C</SelectItem>
                      <SelectItem value="d">D</SelectItem>
                      <SelectItem value="e">E</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condutax">Número do CONDUTAX *</Label>
                <Input id="condutax" required />
              </div>

              <div className="space-y-2">
                <Label>Experiência como taxista *</Label>
                <RadioGroup defaultValue="menos-1-ano">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="menos-1-ano" id="menos-1-ano" />
                    <Label htmlFor="menos-1-ano">Menos de 1 ano</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3-anos" id="1-3-anos" />
                    <Label htmlFor="1-3-anos">1 a 3 anos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-5-anos" id="3-5-anos" />
                    <Label htmlFor="3-5-anos">3 a 5 anos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mais-5-anos" id="mais-5-anos" />
                    <Label htmlFor="mais-5-anos">Mais de 5 anos</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Preferências de Locação</h2>

              <div className="space-y-2">
                <Label>Tipo de veículo de interesse *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economico">Econômico</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações ou Requisitos Especiais</Label>
                <Textarea id="observacoes" rows={4} />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="termos" required />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="termos" className="text-sm font-normal">
                    Concordo com os termos de serviço e política de privacidade *
                  </Label>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Campos marcados com * são obrigatórios.</p>
          <p className="mt-2">
            Após o envio do formulário, nossa equipe analisará suas informações e entrará em contato para dar
            continuidade ao processo de locação.
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

