"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  User,
  FileText,
  Car,
  Bell,
  AlertCircle,
  Trash2,
  Edit,
  Search,
  Mail,
  RefreshCw,
  UserPlus,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Mock data for demonstration
const mockSolicitacoes = [
  {
    id: 1,
    nome: "João Silva",
    telefone: "(11) 99999-9999",
    email: "joao.silva@email.com",
    data: "10/04/2023",
    status: "pendente",
    nova: true,
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    telefone: "(11) 98888-8888",
    email: "maria.oliveira@email.com",
    data: "09/04/2023",
    status: "aprovado",
    nova: false,
  },
  {
    id: 3,
    nome: "Carlos Santos",
    telefone: "(11) 97777-7777",
    email: "carlos.santos@email.com",
    data: "08/04/2023",
    status: "reprovado",
    nova: false,
  },
  {
    id: 4,
    nome: "Ana Pereira",
    telefone: "(11) 96666-6666",
    email: "ana.pereira@email.com",
    data: "07/04/2023",
    status: "pendente",
    nova: true,
  },
  {
    id: 5,
    nome: "Roberto Almeida",
    telefone: "(11) 95555-5555",
    email: "roberto.almeida@email.com",
    data: "06/04/2023",
    status: "aprovado",
    nova: false,
  },
  {
    id: 6,
    nome: "Fernanda Lima",
    telefone: "(11) 94444-4444",
    email: "fernanda.lima@email.com",
    data: "05/04/2023",
    status: "pendente",
    nova: true,
  },
  {
    id: 7,
    nome: "Paulo Mendes",
    telefone: "(11) 93333-3333",
    email: "paulo.mendes@email.com",
    data: "04/04/2023",
    status: "pendente",
    nova: false,
  },
  {
    id: 8,
    nome: "Luciana Costa",
    telefone: "(11) 92222-2222",
    email: "luciana.costa@email.com",
    data: "03/04/2023",
    status: "aprovado",
    nova: false,
  },
]

const mockContratos = [
  {
    id: 1,
    motorista: "João Silva",
    veiculo: "Toyota Corolla",
    placa: "ABC-1234",
    inicio: "15/01/2023",
    fim: "15/01/2024",
    status: "ativo",
    telefone: "(11) 99999-9999",
    email: "joao.silva@email.com",
    cpf: "123.456.789-00",
    endereco: "Rua das Flores, 123 - São Paulo/SP",
    condutax: "12345678",
    observacoes: "Prefere veículos brancos",
  },
  {
    id: 2,
    motorista: "Maria Oliveira",
    veiculo: "Honda Civic",
    placa: "DEF-5678",
    inicio: "10/02/2023",
    fim: "10/02/2024",
    status: "ativo",
    telefone: "(11) 98888-8888",
    email: "maria.oliveira@email.com",
    cpf: "987.654.321-00",
    endereco: "Av. Paulista, 1000 - São Paulo/SP",
    condutax: "87654321",
    observacoes: "Trabalha principalmente na zona sul",
  },
  {
    id: 3,
    motorista: "Pedro Souza",
    veiculo: "Hyundai HB20",
    placa: "GHI-9012",
    inicio: "05/03/2023",
    fim: "05/03/2024",
    status: "ativo",
    telefone: "(11) 97777-7777",
    email: "pedro.souza@email.com",
    cpf: "111.222.333-44",
    endereco: "Rua Augusta, 500 - São Paulo/SP",
    condutax: "11223344",
    observacoes: "Prefere veículos automáticos",
  },
  {
    id: 4,
    motorista: "Ana Costa",
    veiculo: "Chevrolet Onix",
    placa: "JKL-3456",
    inicio: "20/11/2022",
    fim: "20/11/2023",
    status: "ativo",
    telefone: "(11) 96666-6666",
    email: "ana.costa@email.com",
    cpf: "444.555.666-77",
    endereco: "Rua Oscar Freire, 300 - São Paulo/SP",
    condutax: "44556677",
    observacoes: "Trabalha principalmente com o aeroporto",
  },
  {
    id: 5,
    motorista: "Carlos Santos",
    veiculo: "Nissan Versa",
    placa: "MNO-7890",
    inicio: "15/12/2022",
    fim: "15/12/2023",
    status: "inativo",
    telefone: "(11) 95555-5555",
    email: "carlos.santos@email.com",
    cpf: "777.888.999-00",
    endereco: "Av. Rebouças, 700 - São Paulo/SP",
    condutax: "77889900",
    observacoes: "Contrato encerrado a pedido do motorista",
  },
]

const mockNotificacoes = [
  {
    id: 1,
    titulo: "Nova solicitação",
    mensagem: "João Silva enviou uma solicitação de locação",
    data: "10/04/2023",
    lida: false,
  },
  {
    id: 2,
    titulo: "Nova solicitação",
    mensagem: "Ana Pereira enviou uma solicitação de locação",
    data: "07/04/2023",
    lida: false,
  },
  {
    id: 3,
    titulo: "Contrato próximo do vencimento",
    mensagem: "O contrato de Ana Costa vence em 30 dias",
    data: "05/04/2023",
    lida: true,
  },
  {
    id: 4,
    titulo: "Nova solicitação",
    mensagem: "Fernanda Lima enviou uma solicitação de locação",
    data: "05/04/2023",
    lida: false,
  },
  {
    id: 5,
    titulo: "Pagamento pendente",
    mensagem: "Pedro Souza está com o pagamento atrasado",
    data: "03/04/2023",
    lida: true,
  },
  {
    id: 6,
    titulo: "Manutenção agendada",
    mensagem: "Veículo de Maria Oliveira agendado para revisão",
    data: "02/04/2023",
    lida: true,
  },
]

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState(mockNotificacoes)
  const [solicitacoes, setSolicitacoes] = useState(mockSolicitacoes)
  const [contratos, setContratos] = useState(mockContratos)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")
  const [selectedClient, setSelectedClient] = useState<any>(null)
  const [messageText, setMessageText] = useState("")
  const [showAddClientDialog, setShowAddClientDialog] = useState(false)
  const [newClient, setNewClient] = useState({
    nome: "",
    telefone: "",
    email: "",
    cpf: "",
    endereco: "",
    cnh: "",
    categoria: "",
    condutax: "",
    experiencia: "menos-1-ano",
    veiculo: "",
    observacoes: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mock authentication
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true)
    } else {
      alert("Credenciais inválidas. Tente: admin / 1234")
    }
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, lida: true })))
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    setSolicitacoes(solicitacoes.map((s) => (s.id === id ? { ...s, status: newStatus, nova: false } : s)))

    toast({
      title: "Status atualizado",
      description: `Solicitação ${id} foi ${newStatus === "aprovado" ? "aprovada" : "reprovada"} com sucesso.`,
    })

    // Se aprovado, adicionar aos contratos
    if (newStatus === "aprovado") {
      const solicitacao = solicitacoes.find((s) => s.id === id)
      if (solicitacao) {
        const novoContrato = {
          id: contratos.length + 1,
          motorista: solicitacao.nome,
          veiculo: "Toyota Corolla", // Valor padrão
          placa: `ABC-${Math.floor(1000 + Math.random() * 9000)}`,
          inicio: new Date().toLocaleDateString("pt-BR"),
          fim: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString("pt-BR"),
          status: "ativo",
          telefone: solicitacao.telefone,
          email: solicitacao.email,
          cpf: "000.000.000-00", // Valor padrão
          endereco: "Endereço não informado", // Valor padrão
          condutax: "00000000", // Valor padrão
          observacoes: "",
        }
        setContratos([...contratos, novoContrato])
      }
    }
  }

  const handleDeleteSolicitacao = (id: number) => {
    setSolicitacoes(solicitacoes.filter((s) => s.id !== id))
    toast({
      title: "Solicitação excluída",
      description: `Solicitação ${id} foi excluída com sucesso.`,
    })
  }

  const handleDeleteContrato = (id: number) => {
    setContratos(contratos.filter((c) => c.id !== id))
    toast({
      title: "Contrato excluído",
      description: `Contrato ${id} foi excluído com sucesso.`,
    })
  }

  const handleSendMessage = (type: "whatsapp" | "email") => {
    if (!selectedClient) return

    if (messageText.trim() === "") {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, digite uma mensagem.",
        variant: "destructive",
      })
      return
    }

    // Simulação de envio
    toast({
      title: "Mensagem enviada",
      description: `Mensagem enviada com sucesso para ${selectedClient.nome} via ${type === "whatsapp" ? "WhatsApp" : "E-mail"}.`,
    })

    setMessageText("")
    setSelectedClient(null)
  }

  const handleAddClient = () => {
    // Validação básica
    if (!newClient.nome || !newClient.telefone || !newClient.email) {
      toast({
        title: "Erro ao cadastrar",
        description: "Por favor, preencha os campos obrigatórios.",
        variant: "destructive",
      })
      return
    }

    // Adicionar nova solicitação
    const novaSolicitacao = {
      id: solicitacoes.length + 1,
      nome: newClient.nome,
      telefone: newClient.telefone,
      email: newClient.email,
      data: new Date().toLocaleDateString("pt-BR"),
      status: "pendente",
      nova: true,
    }

    setSolicitacoes([...solicitacoes, novaSolicitacao])

    // Adicionar notificação
    const novaNotificacao = {
      id: notifications.length + 1,
      titulo: "Nova solicitação",
      mensagem: `${newClient.nome} foi cadastrado manualmente`,
      data: new Date().toLocaleDateString("pt-BR"),
      lida: false,
    }

    setNotifications([...notifications, novaNotificacao])

    toast({
      title: "Cliente cadastrado",
      description: "Novo cliente foi cadastrado com sucesso.",
    })

    // Resetar formulário
    setNewClient({
      nome: "",
      telefone: "",
      email: "",
      cpf: "",
      endereco: "",
      cnh: "",
      categoria: "",
      condutax: "",
      experiencia: "menos-1-ano",
      veiculo: "",
      observacoes: "",
    })

    setShowAddClientDialog(false)
  }

  const filteredSolicitacoes = solicitacoes.filter((s) => {
    const matchesSearch =
      s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.telefone.includes(searchTerm) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "todos" || s.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const filteredContratos = contratos.filter((c) => {
    const matchesSearch =
      c.motorista.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.telefone.includes(searchTerm) ||
      c.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "todos" || c.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pendente":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Pendente
          </Badge>
        )
      case "aprovado":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            Aprovado
          </Badge>
        )
      case "reprovado":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
            Reprovado
          </Badge>
        )
      case "ativo":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            Ativo
          </Badge>
        )
      case "inativo":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
            Inativo
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const unreadNotifications = notifications.filter((n) => !n.lida).length

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Painel Administrativo</CardTitle>
            <CardDescription className="text-center">Faça login para acessar o painel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Usuário</Label>
                  <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                Entrar
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            <p className="w-full">Para demonstração, use: admin / 1234</p>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Painel Administrativo - Michelines</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </Button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10 border">
                <div className="p-3 border-b flex justify-between items-center">
                  <h3 className="font-semibold">Notificações</h3>
                  <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                    Marcar todas como lidas
                  </Button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">Nenhuma notificação</div>
                  ) : (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 border-b hover:bg-gray-50 ${!notif.lida ? "bg-blue-50" : ""}`}
                      >
                        <div className="flex gap-3 items-start">
                          <div
                            className={`rounded-full p-2 ${!notif.lida ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
                          >
                            {notif.titulo.includes("solicitação") ? (
                              <User className="h-4 w-4" />
                            ) : (
                              <AlertCircle className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{notif.titulo}</h4>
                            <p className="text-sm text-gray-600">{notif.mensagem}</p>
                            <p className="text-xs text-gray-400 mt-1">{notif.data}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
            Sair
          </Button>
        </div>
      </div>

      <Alert className="mb-8 border-blue-200 bg-blue-50">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-800">Bem-vindo ao painel administrativo</AlertTitle>
        <AlertDescription className="text-blue-700">
          Você tem {solicitacoes.filter((s) => s.nova).length} novas solicitações de locação pendentes de análise.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total de Solicitações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{solicitacoes.length}</div>
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <span className="text-yellow-600 font-medium">
                {solicitacoes.filter((s) => s.status === "pendente").length} pendentes
              </span>{" "}
              •
              <span className="text-green-600 font-medium ml-2">
                {solicitacoes.filter((s) => s.status === "aprovado").length} aprovadas
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Contratos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{contratos.filter((c) => c.status === "ativo").length}</div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <span className="text-blue-600 font-medium">
                {
                  contratos.filter((c) => {
                    const [dia, mes, ano] = c.fim.split("/")
                    const dataFim = new Date(`${ano}-${mes}-${dia}`)
                    const hoje = new Date()
                    const diff = Math.floor((dataFim.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24))
                    return diff <= 30 && c.status === "ativo"
                  }).length
                }{" "}
                próximos do vencimento
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Veículos na Frota</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">12</div>
              <Car className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <span className="text-green-600 font-medium">10 em operação</span> •
              <span className="text-orange-600 font-medium ml-2">2 em manutenção</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="pendente">Pendentes</SelectItem>
              <SelectItem value="aprovado">Aprovados</SelectItem>
              <SelectItem value="reprovado">Reprovados</SelectItem>
              <SelectItem value="ativo">Ativos</SelectItem>
              <SelectItem value="inativo">Inativos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Dialog open={showAddClientDialog} onOpenChange={setShowAddClientDialog}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="mr-2 h-4 w-4" />
              Cadastrar Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
              <DialogDescription>Preencha os dados do novo cliente para cadastrá-lo no sistema.</DialogDescription>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dados Pessoais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={newClient.nome}
                      onChange={(e) => setNewClient({ ...newClient, nome: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF *</Label>
                    <Input
                      id="cpf"
                      value={newClient.cpf}
                      onChange={(e) => setNewClient({ ...newClient, cpf: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={newClient.telefone}
                      onChange={(e) => setNewClient({ ...newClient, telefone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newClient.email}
                      onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço Completo</Label>
                  <Input
                    id="endereco"
                    value={newClient.endereco}
                    onChange={(e) => setNewClient({ ...newClient, endereco: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Informações Profissionais</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cnh">Número da CNH</Label>
                    <Input
                      id="cnh"
                      value={newClient.cnh}
                      onChange={(e) => setNewClient({ ...newClient, cnh: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria da CNH</Label>
                    <Select
                      value={newClient.categoria}
                      onValueChange={(value) => setNewClient({ ...newClient, categoria: value })}
                    >
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
                  <Label htmlFor="condutax">Número do CONDUTAX</Label>
                  <Input
                    id="condutax"
                    value={newClient.condutax}
                    onChange={(e) => setNewClient({ ...newClient, condutax: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Experiência como taxista</Label>
                  <RadioGroup
                    value={newClient.experiencia}
                    onValueChange={(value) => setNewClient({ ...newClient, experiencia: value })}
                  >
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
                <h3 className="text-lg font-medium">Preferências de Locação</h3>
                <div className="space-y-2">
                  <Label>Tipo de veículo de interesse</Label>
                  <Select
                    value={newClient.veiculo}
                    onValueChange={(value) => setNewClient({ ...newClient, veiculo: value })}
                  >
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
                  <Textarea
                    id="observacoes"
                    rows={4}
                    value={newClient.observacoes}
                    onChange={(e) => setNewClient({ ...newClient, observacoes: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddClientDialog(false)}>
                Cancelar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddClient}>
                Cadastrar Cliente
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="solicitacoes">
        <TabsList className="mb-6">
          <TabsTrigger value="solicitacoes">Solicitações</TabsTrigger>
          <TabsTrigger value="contratos">Contratos</TabsTrigger>
        </TabsList>

        <TabsContent value="solicitacoes">
          <Card>
            <CardHeader>
              <CardTitle>Solicitações de Locação</CardTitle>
              <CardDescription>Gerencie as solicitações de novos motoristas</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredSolicitacoes.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                  <h3 className="text-lg font-medium mb-1">Nenhuma solicitação encontrada</h3>
                  <p>Tente ajustar os filtros ou adicionar novos clientes.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSolicitacoes.map((solicitacao) => (
                      <TableRow key={solicitacao.id} className={solicitacao.nova ? "bg-blue-50" : ""}>
                        <TableCell>
                          {solicitacao.id}
                          {solicitacao.nova && (
                            <Badge className="ml-2 bg-blue-100 text-blue-800 border-blue-200">Nova</Badge>
                          )}
                        </TableCell>
                        <TableCell>{solicitacao.nome}</TableCell>
                        <TableCell>{solicitacao.telefone}</TableCell>
                        <TableCell>{solicitacao.email}</TableCell>
                        <TableCell>{solicitacao.data}</TableCell>
                        <TableCell>{getStatusBadge(solicitacao.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <MessageSquare className="h-4 w-4" />
                                  <span className="sr-only">Mensagem</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Enviar Mensagem</DialogTitle>
                                  <DialogDescription>
                                    Envie uma mensagem para {solicitacao.nome} via WhatsApp ou E-mail.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label>Destinatário</Label>
                                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                                      <User className="h-4 w-4 text-gray-500" />
                                      <span>{solicitacao.nome}</span>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Contato</Label>
                                    <div className="flex gap-2">
                                      <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 flex-1">
                                        <Phone className="h-4 w-4 text-gray-500" />
                                        <span>{solicitacao.telefone}</span>
                                      </div>
                                      <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 flex-1">
                                        <Mail className="h-4 w-4 text-gray-500" />
                                        <span>{solicitacao.email}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="message">Mensagem</Label>
                                    <Textarea
                                      id="message"
                                      rows={5}
                                      placeholder="Digite sua mensagem aqui..."
                                      value={messageText}
                                      onChange={(e) => setMessageText(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button
                                    variant="outline"
                                    className="gap-2"
                                    onClick={() => {
                                      setSelectedClient(solicitacao)
                                      handleSendMessage("email")
                                    }}
                                  >
                                    <Mail className="h-4 w-4" />
                                    Enviar E-mail
                                  </Button>
                                  <Button
                                    className="gap-2 bg-green-600 hover:bg-green-700"
                                    onClick={() => {
                                      setSelectedClient(solicitacao)
                                      handleSendMessage("whatsapp")
                                    }}
                                  >
                                    <Phone className="h-4 w-4" />
                                    Enviar WhatsApp
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            {solicitacao.status === "pendente" && (
                              <>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 text-green-600"
                                  onClick={() => handleStatusChange(solicitacao.id, "aprovado")}
                                >
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="sr-only">Aprovar</span>
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 text-red-600"
                                  onClick={() => handleStatusChange(solicitacao.id, "reprovado")}
                                >
                                  <XCircle className="h-4 w-4" />
                                  <span className="sr-only">Reprovar</span>
                                </Button>
                              </>
                            )}

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-more-vertical"
                                  >
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="5" r="1" />
                                    <circle cx="12" cy="19" r="1" />
                                  </svg>
                                  <span className="sr-only">Mais opções</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  className="text-red-600 cursor-pointer"
                                  onClick={() => handleDeleteSolicitacao(solicitacao.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contratos">
          <Card>
            <CardHeader>
              <CardTitle>Contratos Ativos</CardTitle>
              <CardDescription>Gerencie os contratos de locação</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredContratos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                  <h3 className="text-lg font-medium mb-1">Nenhum contrato encontrado</h3>
                  <p>Tente ajustar os filtros ou aprovar novas solicitações.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Motorista</TableHead>
                      <TableHead>Veículo</TableHead>
                      <TableHead>Placa</TableHead>
                      <TableHead>Início</TableHead>
                      <TableHead>Término</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContratos.map((contrato) => (
                      <TableRow key={contrato.id}>
                        <TableCell>{contrato.id}</TableCell>
                        <TableCell>{contrato.motorista}</TableCell>
                        <TableCell>{contrato.veiculo}</TableCell>
                        <TableCell>{contrato.placa}</TableCell>
                        <TableCell>{contrato.inicio}</TableCell>
                        <TableCell>{contrato.fim}</TableCell>
                        <TableCell>{getStatusBadge(contrato.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <FileText className="h-4 w-4" />
                                  <span className="sr-only">Ver Detalhes</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle>Detalhes do Contrato #{contrato.id}</DialogTitle>
                                  <DialogDescription>
                                    Informações completas do contrato de {contrato.motorista}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                                  <div className="space-y-4">
                                    <h3 className="font-medium">Dados do Motorista</h3>
                                    <div className="space-y-2">
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Nome:</span>
                                        <span className="font-medium">{contrato.motorista}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">CPF:</span>
                                        <span className="font-medium">{contrato.cpf}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Telefone:</span>
                                        <span className="font-medium">{contrato.telefone}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">E-mail:</span>
                                        <span className="font-medium">{contrato.email}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Endereço:</span>
                                        <span className="font-medium">{contrato.endereco}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Condutax:</span>
                                        <span className="font-medium">{contrato.condutax}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h3 className="font-medium">Dados do Contrato</h3>
                                    <div className="space-y-2">
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Veículo:</span>
                                        <span className="font-medium">{contrato.veiculo}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Placa:</span>
                                        <span className="font-medium">{contrato.placa}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Data de Início:</span>
                                        <span className="font-medium">{contrato.inicio}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Data de Término:</span>
                                        <span className="font-medium">{contrato.fim}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Status:</span>
                                        <span>{getStatusBadge(contrato.status)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Valor Mensal:</span>
                                        <span className="font-medium">R$ 2.500,00</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-span-1 md:col-span-2 space-y-2">
                                    <h3 className="font-medium">Observações</h3>
                                    <p className="text-gray-700 border p-3 rounded-md bg-gray-50 min-h-[80px]">
                                      {contrato.observacoes || "Nenhuma observação registrada."}
                                    </p>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline">Imprimir Contrato</Button>
                                  <Button className="bg-blue-600 hover:bg-blue-700">Editar Contrato</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <MessageSquare className="h-4 w-4" />
                                  <span className="sr-only">Mensagem</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Enviar Mensagem</DialogTitle>
                                  <DialogDescription>
                                    Envie uma mensagem para {contrato.motorista} via WhatsApp ou E-mail.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <Label>Destinatário</Label>
                                    <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50">
                                      <User className="h-4 w-4 text-gray-500" />
                                      <span>{contrato.motorista}</span>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Contato</Label>
                                    <div className="flex gap-2">
                                      <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 flex-1">
                                        <Phone className="h-4 w-4 text-gray-500" />
                                        <span>{contrato.telefone}</span>
                                      </div>
                                      <div className="flex items-center gap-2 p-2 border rounded-md bg-gray-50 flex-1">
                                        <Mail className="h-4 w-4 text-gray-500" />
                                        <span>{contrato.email}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="message">Mensagem</Label>
                                    <Textarea
                                      id="message"
                                      rows={5}
                                      placeholder="Digite sua mensagem aqui..."
                                      value={messageText}
                                      onChange={(e) => setMessageText(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button
                                    variant="outline"
                                    className="gap-2"
                                    onClick={() => {
                                      setSelectedClient(contrato)
                                      handleSendMessage("email")
                                    }}
                                  >
                                    <Mail className="h-4 w-4" />
                                    Enviar E-mail
                                  </Button>
                                  <Button
                                    className="gap-2 bg-green-600 hover:bg-green-700"
                                    onClick={() => {
                                      setSelectedClient(contrato)
                                      handleSendMessage("whatsapp")
                                    }}
                                  >
                                    <Phone className="h-4 w-4" />
                                    Enviar WhatsApp
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-more-vertical"
                                  >
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="5" r="1" />
                                    <circle cx="12" cy="19" r="1" />
                                  </svg>
                                  <span className="sr-only">Mais opções</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                                <DropdownMenuItem className="cursor-pointer">
                                  <Edit className="h-4 w-4 mr-2" />
                                  Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                  <RefreshCw className="h-4 w-4 mr-2" />
                                  Renovar Contrato
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  className="text-red-600 cursor-pointer"
                                  onClick={() => handleDeleteContrato(contrato.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

