"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, CarTaxiFrontIcon as Taxi } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Taxi className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">Michelines</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Início
          </Link>
          <Link href="/servicos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Serviços
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Sobre Nós
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contato
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:text-blue-600 transition-colors">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Área do Admin
            </Button>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/cadastro">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Solicitar Locação</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Taxi className="h-6 w-6 text-yellow-500" />
                  <span className="text-xl font-bold">Michelines</span>
                </Link>
                <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/servicos"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/sobre"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/contato"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
                <Link
                  href="/admin"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Área do Admin
                </Link>
              </nav>
              <div className="mt-auto border-t pt-4">
                <Link href="/cadastro" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Solicitar Locação</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

