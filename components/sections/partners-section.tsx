"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { Building2, Users, Award, ExternalLink, Handshake, Globe, Zap } from "lucide-react"

export const PartnersSection = () => {
  const partners = [
    {
      name: "Devs Norte",
      category: "Comunidade",
      description: "Comunidade de desenvolvedores da região Norte",
      logo: "/devsnorte.png",
      color: "from-blue-500 to-purple-600",
      benefits: ["Networking", "Eventos", "Mentorias"],
      link: "https://t.me/devsnorte"
    },
    {
      name: "TE LIGA NA UEPA",
      category: "Educação",
      description: "Canal do WhatsApp extraoficial para divulgação de eventos e oportunidades.",
      logo: "/teliganauepa.jpg",
      color: "from-purple-500 to-indigo-600",
      benefits: ["Integração", "Projetos", "Capacitação"],
      link: "https://www.whatsapp.com/channel/0029Vb51w8x60eBbVwEEYN2B"
    },
    {
      name: "UEPA Comunidade Acadêmica",
      category: "Educação",
      description: "Servidor do Discord extraoficial da UEPA",
      logo: "/uepa.jpg",
      color: "from-blue-500 to-indigo-600",
      benefits: ["Discord", "Comunidade", "Oportunidades"],
      link: "https://discord.gg/2cShkQTXYk"
    },
    {
      name: "Run as Cloud",
      category: "Comunidade",
      description: "Comunidade de apoio a iniciantes em Cloud Computing",
      logo: "/runascloud.png",
      color: "from-green-500 to-lime-600",
      benefits: ["Networking", "Eventos", "Mentorias", "Cloud Computing", "AWS"],
      link: "https://chat.whatsapp.com/H1m8rW55ibr1hyQ5RB1QFW"
    },
    {
      name: "GruPy Pará",
      category: "Comunidade",
      description: "Comunidade de usuários e desenvolvedores que utilizam Python no Pará",
      logo: "/grupypara.jpg",
      color: "from-caesoft-purple to-caesoft-green",
      benefits: ["Networking", "Eventos", "Mentorias", "Python", "Data Science"],
      link: "https://discord.gg/98eURQMjQp"
    },
    {
      name: "LovelaceTech",
      category: "Comunidade",
      description: "Comunidade dedicada ao empoderamento feminino na tecnologia, promovendo inclusão, networking e desenvolvimento profissional para mulheres na área de TI.",
      logo: "/lovelace.png",
      color: "from-red-500 to-blue-600",
      benefits: ["Networking", "Eventos", "Mentorias", "Inovação", "Empoderamento Feminino"],
      link: "https://www.instagram.com/lovelacetech/"
    },
    {
      name: "Porãygua Dev Group",
      category: "Comunidade",
      description: "Comunidade de desenvolvedores da região amazônica, fomentando a diversidade cultural e tecnológica no desenvolvimento de software.",
      logo: "/poraygua.png",
      color: "from-teal-500 to-orange-600",
      benefits: ["Networking", "Eventos", "Mentorias", "Desenvolvimento", "Diversidade Cultural"],
      link: "https://www.instagram.com/poraygua/"
    },
    {
      name: "CAECOMP - UFPA",
      category: "Educação",
      description: "Centro Acadêmico de Engenharia da Computação da UFPA, representando estudantes e promovendo atividades acadêmicas, eventos e integração entre alunos.",
      logo: "/caecomp.png",
      color: "from-blue-600 to-yellow-500",
      benefits: ["Integração", "Projetos", "Capacitação", "Acadêmico", "Representação Estudantil"],
      link: "http://linktr.ee/caecomp.ufpa"
    },
    {
      name: "XibéSec",
      category: "Segurança",
      description: "Comunidade especializada em segurança da informação e cibersegurança, oferecendo treinamentos, workshops e networking na área de segurança digital. Use o cupom do CAESoft para 20% de desconto na inscrição do evento. Cupom: CAESOFT20",
      logo: "/xibesec.png",
      color: "from-blue-500 to-cyan-600",
      benefits: ["Networking", "Eventos", "Mentorias", "Cybersecurity", "Segurança Digital"],
      link: "https://www.instagram.com/xibesec/"
    },
    {
      name: "LinuxTips",
      category: "Comunidade",
      description: "Comunidade brasileira de usuários e entusiastas Linux, compartilhando conhecimento, dicas e promovendo o uso de software livre e open source. Use o cupom do Ryan Ricardo para 10% de desconto nos treinamentos da plataforma. Cupom: simpatia.dev",
      logo: "/linuxtips.png",
      color: "from-orange-500 to-red-600",
      benefits: ["Networking", "Eventos", "Mentorias", "Linux", "Open Source", "Software Livre"],
      link: "https://linuxtips.io/"
    }
  ]

  const partnershipStats = [
    { icon: Building2, number: "4", label: "Parceiros Ativos" },
    { icon: Users, number: "500+", label: "Membros Conectados" },
    { icon: Award, number: "20+", label: "Eventos Realizados" },
    { icon: Handshake, number: "50+", label: "Oportunidades Criadas" }
  ]

  return (
    <Section id="partners" className="bg-gradient-to-br from-caesoft-navy/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Nossos <span className="text-gradient">Parceiros</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Conectando estudantes com oportunidades reais no mercado de tecnologia
            </p>
          </div>

          {/* Estatísticas de Parcerias */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {partnershipStats.map((stat, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-caesoft-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-sm text-light-dimmed">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grid de Parceiros */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform overflow-hidden`}>
                      {partner.logo.startsWith('http') || partner.logo.startsWith('/') ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <span className="text-white font-bold text-sm">{partner.logo}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-caesoft-light">{partner.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft text-xs"
                      >
                        {partner.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-light-dimmed text-sm leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <Badge 
                        key={benefitIndex}
                        variant="outline" 
                        className="border-caesoft-green/50 text-caesoft-green text-xs"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto h-4" />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full text-caesoft-green hover:text-white hover:bg-caesoft-green/90 transition-all duration-300"
                    onClick={() => window.open(partner.link, "_blank")}
                  >
                    Saber Mais
                    <ExternalLink className="ml-2" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action para Parcerias */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl h-full">
              <CardContent className="p-8 text-center flex flex-col gap-4 h-full">
                <Globe className="w-16 h-16 text-caesoft-purple mx-auto" />
                <h3 className="text-2xl font-bold text-caesoft-light">Para Empresas</h3>
                <p className="text-light-dimmed">
                  Interessado em se tornar parceiro do CAESoft? Oferecemos acesso a talentos qualificados 
                  e oportunidades de colaboração acadêmica.
                </p>
                <div className="mt-auto h-4" />
                <Button className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white">
                  Seja um Parceiro
                  <Building2 className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl h-full">
              <CardContent className="p-8 text-center flex flex-col gap-4 h-full">
                <Zap className="w-16 h-16 text-caesoft-green mx-auto" />
                <h3 className="text-2xl font-bold text-caesoft-light">Para Estudantes</h3>
                <p className="text-light-dimmed">
                  Explore oportunidades exclusivas de estágio, emprego e desenvolvimento profissional 
                  com nossos parceiros.
                </p>
                <div className="mt-auto h-4" />
                <Button 
                  variant="outline"
                  className="border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent"
                  onClick={() => window.open("https://chat.whatsapp.com/IWSacGd7zIiKuZRv2Kl6QG", "_blank")}
                >
                  Ver Oportunidades
                  <Award className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
} 