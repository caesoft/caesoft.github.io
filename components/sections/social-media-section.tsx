"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Instagram, Github, Linkedin, Calendar, Users, Trophy, BookOpen, MessageCircle, Gamepad2 } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { useRef, useCallback } from 'react'

export const SocialMediaSection = () => {
  const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@caesoft.uepa",
      description: "Acompanhe nosso dia a dia, eventos e conquistas",
      color: "from-pink-500 to-purple-600",
      stats: "Seguindo e crescendo",
      url: "https://www.instagram.com/caesoft.uepa"
    },
    {
      name: "GitHub",
      icon: Github,
      handle: "@caesoft",
      description: "Projetos desenvolvidos pelos estudantes",
      color: "from-gray-700 to-gray-900",
      stats: "Repositórios ativos",
      url: "https://github.com/caesoft"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      handle: "CAESoft UEPA",
      description: "Networking profissional e oportunidades",
      color: "from-blue-600 to-blue-800",
      stats: "Conexões profissionais",
      url: "https://www.linkedin.com/in/caesoft-uepa/"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      handle: "Comunidade CAESoft",
      description: "Grupo para dúvidas e networking",
      color: "from-green-500 to-green-700",
      stats: "200+ membros",
      url: "https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc"
    },
    {
      name: "Discord",
      icon: Gamepad2,
      handle: "Servidor CAESoft",
      description: "Discussões técnicas em tempo real",
      color: "from-indigo-500 to-purple-600",
      stats: "Comunidade ativa",
      url: "https://discord.gg/23qVdpmbZ8"
    }
  ]

  const activities = [
    {
      icon: Calendar,
      title: "Eventos Regulares",
      description: "Workshops, palestras e encontros mensais",
      highlight: "Programação contínua"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Grupos de estudo e projetos colaborativos",
      highlight: "200+ estudantes"
    },
    {
      icon: Trophy,
      title: "Competições",
      description: "Hackathons e maratonas de programação",
      highlight: "Participação ativa"
    },
    {
      icon: BookOpen,
      title: "Recursos Acadêmicos",
      description: "Material de estudo e suporte acadêmico",
      highlight: "Biblioteca digital"
    }
  ]

  const participations = [
    {
      image: "/participacoes/1feiravocacionalcaesoft.png",
      caption: "Primeira Feira Vocacional da UEPA com apresentação dos membros do CAESoft"
    },
    {
      image: "/participacoes/1feiravocacionaluepa.png",
      caption: "Primeira Feira Vocacional da UEPA Campus Ananindeua com apoio ativo do CAESoft"
    },
    {
      image: "/participacoes/orgflisolananindeua.png",
      caption: "FliSol Ananindeua com participação ativa na organização e apoio à realização do evento"
    },
    {
      image: "/participacoes/awsugbelem.png",
      caption: "AWS User Group Belém com apoio da Universidade do Estado do Pará e CAESoft"
    },
    {
      image: "/participacoes/feiravocacionalidealbatistacampos.png",
      caption: "Feira Vocacional Ideal Batista Campos"
    },
    {
      image: "/participacoes/feiravocacionalrosanabastos.png",
      caption: "Participação na Feira Vocacional do grupo Rosana Bastos"
    },
    {
      image: "/participacoes/feiravocacionalidealalmirante.png",
      caption: "Participação na Feira Vocacional do Ideal Almirante Barroso"
    },
    {
      image: "/participacoes/orgpynorte.png",
      caption: "Apoio ao Evento da Python Norte"
    },
    {
      image: "/participacoes/feiravocacionalidealcn.png",
      caption: "Participação na Feira Vocacional do Ideal Cidade Nova"
    },
    {
      image: "/participacoes/nivelamentocalouros.png",
      caption: "Nivelamento para calouros do BES 2025 organizado pelo CAESoft com apoio da UEPA Ananindeua"
    },
  ]

  const swiperRef = useRef<any>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleUserInteraction = useCallback(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop()

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          swiperRef.current.autoplay.start()
        }
      }, 1000)
    }
  }, [])

  return (
    <Section id="social-media">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Conecte-se <span className="text-gradient">Conosco</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Acompanhe nossas atividades e faça parte da nossa comunidade através das redes sociais
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-caesoft-light mb-8 text-center">
              Nossas Redes Sociais
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialMedia.map((social, index) => (
                <Card
                  key={index}
                  className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon size={28} className="text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-caesoft-light mb-2">
                      {social.name}
                    </h4>
                    <p className="text-caesoft-purple font-medium mb-3">
                      {social.handle}
                    </p>
                    <p className="text-light-dimmed text-sm mb-4">
                      {social.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-caesoft-green/20 text-caesoft-green border border-green-soft"
                    >
                      {social.stats}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Atividades */}
          <div>
            <h3 className="text-2xl font-bold text-caesoft-light mb-8 text-center">
              Principais Atividades
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <Card
                  key={index}
                  className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-caesoft-purple to-caesoft-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <activity.icon size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-caesoft-light mb-2">
                      {activity.title}
                    </h4>
                    <p className="text-light-dimmed text-sm mb-3">
                      {activity.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft text-xs"
                    >
                      {activity.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mural de Participações */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-caesoft-light mb-8 text-center">
              Nossas Atividades
            </h3>
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              grabCursor={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                waitForTransition: true,
              }}
              className="pb-10"
              onTouchStart={handleUserInteraction}
              onSliderMove={handleUserInteraction}
              onTransitionStart={handleUserInteraction}
            >
              {participations.map((item, index) => (
                <SwiperSlide key={index} className="py-2">
                  <Card className="glass-effect-light border-purple-soft overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative w-full h-[28rem] md:h-[36rem]">
                        <Image
                          src={item.image}
                          alt={item.caption}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 800px"
                          priority={index === 0}
                        />
                      </div>
                      <div className="p-4 text-center">
                        <p className="text-light-dimmed text-sm">{item.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-caesoft-light mb-4">
                  Faça Parte da Nossa Comunidade!
                </h4>
                <p className="text-light-dimmed mb-6 max-w-2xl mx-auto">
                  Siga-nos nas redes sociais para ficar por dentro de todas as novidades, 
                  eventos e oportunidades que oferecemos aos estudantes de Engenharia de Software.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft px-4 py-2"
                  >
                    Networking
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-caesoft-green/20 text-caesoft-green border border-green-soft px-4 py-2"
                  >
                    Oportunidades
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-navy-lighter/20 text-caesoft-light border border-purple-soft px-4 py-2"
                  >
                    Conhecimento
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
} 