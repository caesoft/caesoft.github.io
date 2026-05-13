"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Linkedin, Users, Award } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef, useCallback } from 'react';

interface DirectorMember {
  id: number
  name: string
  position: string
  description: string
  photo: string
  linkedinUrl: string
}

const directors: DirectorMember[] = [
  {
    id: 1,
    name: "Ryan Souza",
    position: "Fundador e Presidente",
    description: "Fundador do CAESoft e líder estudantil, responsável pela visão estratégica e coordenação geral das atividades do centro acadêmico.",
    photo: "/ryan.png",
    linkedinUrl: "https://www.linkedin.com/in/theunrealryan/"
  },
  {
    id: 2,
    name: "Jorge Hermes",
    position: "Diretor de Desenvolvimento",
    description: "Especialista em desenvolvimento de projetos e tecnologia, responsável pela aceleração de iniciativas tecnológicas e arquitetura de soluções.",
    photo: "jorgehermes.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jhermesn/"
  },
  {
    id: 3,
    name: "Isabelle Campos",
    position: "Cofundadora e Vice Presidente",
    description: "Atua no apoio à presidência e na coordenação de projetos estratégicos, auxiliando na gestão administrativa e acadêmica do centro.",
    photo: "/belle.jpg",
    linkedinUrl: "https://www.linkedin.com/in/isabelle-campos-7b5b22331"
  },
  {
    id: 4,
    name: "Thaylan Fonseca",
    position: "Organizador de Eventos e Desenvolvedor Front-End",
    description: "Responsável pela organização e coordenação de eventos, workshops, palestras e atividades acadêmicas do CAESoft.",
    photo: "/thaylanfonseca.jpg",
    linkedinUrl: "https://www.linkedin.com/in/thaylanbf1/ "
  },
  {
    id: 5,
    name: "Jonathan Nascimento",
    position: "Tesoureiro",
    description: "Responsável pela gestão financeira do centro acadêmico, controlando orçamentos, recursos e planejamento financeiro.",
    photo: "/jonathan.jpg",
    linkedinUrl: "http://linkedin.com/in/jonathan-nascimento-60874832b"
  },
  {
    "id": 6,
    "name": "Caio Amaral",
    "position": "Ajudante",
    "description": "Responsável por apoiar nas atividades operacionais e administrativas do CAESoft.",
    "photo": "/caio.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/cnnamarall/"
  },
  {
    "id": 7,
    "name": "Claudio Henrique",
    "position": "Designer",
    "description": "Responsável pela criação de identidade visual, design gráfico e material de comunicação do CAESoft.",
    "photo": "/claudio.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/claudiohen-rique/"
  },
  {
    "id": 8,
    "name": "Guilherme Miranda",
    "position": "Ajudante",
    "description": "Auxilia nas diversas atividades do centro acadêmico, prestando apoio nas demandas diárias.",
    "photo": "/guilherme.jpg",
    "linkedinUrl": "#"
  },
  {
    "id": 9,
    "name": "Iam Melo",
    "position": "Social Media",
    "description": "Responsável pela comunicação digital, gestão das redes sociais e criação de conteúdo online do CAESoft.",
    "photo": "/iam.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/iam-melo"
  },
  {
    "id": 10,
    "name": "Marcos Okita",
    "position": "Desenvolvedor",
    "description": "Atua no desenvolvimento de sistemas e soluções tecnológicas para o CAESoft.",
    "photo": "/okita.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/marcos-okitaa/"
  },
  {
    "id": 11,
    "name": "Matheus Willian",
    "position": "Desenvolvedor",
    "description": "Responsável pelo desenvolvimento de plataformas e soluções técnicas dentro do CAESoft.",
    "photo": "/matheusWillian.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/mkwillian/"
  },
  {
    "id": 12,
    "name": "Valdemiro Facundo",
    "position": "Gestor Multimídia",
    "description": "Responsável pela criação de conteúdo multimídia, como vídeos e animações, para as atividades do CAESoft.",
    "photo": "/valdemirofacundo.png",
    "linkedinUrl": "https://www.linkedin.com/in/valdemiro-f-51637a282/"
  },
  {
    "id": 13,
    "name": "Erllon Olivier",
    "position": "Multimídia",
    "description": "Auxilia na criação de conteúdo multimídia e na gestão de vídeos e outros materiais audiovisuais.",
    "photo": "/erllon.jpg",
    "linkedinUrl": "#"
  },
  {
    "id": 14,
    "name": "Luyze Marques",
    "position": "Secretária",
    "description": "Apoia as atividades administrativas e operacionais do CAESoft, prestando auxílio conforme a necessidade.",
    "photo": "luyze.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/luyzee-marques/"
  },
    {
    "id": 15,
    "name": "Joice Neves",
    "position": "Gestora Multimídia",
    "description": "Auxilia na criação de conteúdo multimídia e na gestão de vídeos e outros materiais audiovisuais.",
    "photo": "joice.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/joice-neves-2b6438341/"
  },
    {
    "id": 16,
    "name": "José Matheus",
    "position": "Desenvolvedor",
    "description": "Responsável pelo desenvolvimento de plataformas e soluções técnicas dentro do CAESoft.",
    "photo": "/josematheus.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/matheuz-rodrigues-dev/"
  }
]

export const DirectorshipSection = () => {
  const swiperRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleUserInteraction = useCallback(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {

      swiperRef.current.autoplay.stop();
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          swiperRef.current.autoplay.start();
        }
      }, 1000);
    }
  }, []);

  return (
    <Section id="directorship" className="bg-navy-lighter/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-caesoft-purple mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light">
                Direção <span className="text-gradient">Atual</span>
              </h2>
            </div>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Conheça os estudantes que representam e lideram o CAESoft na gestão atual
            </p>
          </div>

          {/* Carrossel de cards */}
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            simulateTouch={true}
            allowTouchMove={true}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
            onTouchStart={handleUserInteraction}
            onSliderMove={handleUserInteraction}
            onTransitionStart={handleUserInteraction}
            >
              {directors.map((director) => (
                <SwiperSlide key={director.id} className="py-4">
                  <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[450px]">
                    <CardContent className="p-6 text-center  h-full">
                      {/* Foto circular */}
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-caesoft-purple to-caesoft-green p-1">
                          <div className="w-full h-full rounded-full bg-navy-dark overflow-hidden">
                            <Image
                              src={director.photo}
                              alt={director.name}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Nome */}
                      <h3 className="text-xl font-bold text-caesoft-light mb-2">
                        {director.name}
                      </h3>

                      {/* Cargo */}
                      <Badge
                        variant="secondary"
                        className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft mb-4"
                      >
                        {director.position}
                      </Badge>

                      {/* Descrição */}
                      <p className="text-light-dimmed text-sm leading-relaxed mb-6">
                        {director.description}
                      </p>

                      {/* Link LinkedIn */}
                      <a
                        href={director.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-caesoft-purple to-caesoft-green text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <Linkedin size={16} />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Estatística adicional */}
          <div className="text-center mt-16">
            <Card className="glass-effect-light border-purple-soft max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-caesoft-green mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-caesoft-light">Gestão Ativa</h3>
                </div>
                <p className="text-light-dimmed text-sm">
                  Nossa diretoria trabalha dedicadamente para representar mais de
                  <span className="font-bold text-caesoft-purple"> 200+ estudantes</span> do curso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};