"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Linkedin, Users, Award} from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide,  } from 'swiper/react';
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
    name: "Lucas Rego",
    position: "Presidente",
    description: "Responsável por liderar o centro acadêmico, representando os estudantes em reuniões e eventos, e coordenando as atividades gerais do CAESoft.",
    photo: "foto-lucasrego.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lucas-rego-conduru-649a5a364/"
  },
  {
    id: 2,
    name: "Jorge Hermes",
    position: "Diretor de Desenvolvimento",
    description: "Especialista em desenvolvimento de projetos e tecnologia, responsável pela aceleração de iniciativas tecnológicas e arquitetura de soluções.",
    photo: "foto-jhermes.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jhermesn/"
  },
  {
    id: 3,
    name: "Roberta Letícia",
    position: "Vice-Presidente",
    description: "Auxilia o presidente na liderança do centro acadêmico, assumindo responsabilidades em reuniões e eventos, e apoiando a coordenação das atividades do CAESoft.",
    photo: "foto-robertalet.jpg",
    linkedinUrl: "https://www.linkedin.com/in/roberta-sousa-713b16392?trk=contact-info"
  },
  {
    id: 4,
    name: "Icaro Mateus",
    position: "Recepcionista do CAESoft",
    description: "Responsável por receber e acolher os estudantes, visitantes e membros do CAESoft, garantindo um ambiente amigável e organizado para todos que frequentam o centro acadêmico.",
    photo: "https://images.pexels.com/photos/7893725/pexels-photo-7893725.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/icaro-matheus-silva/"
    // TODO: Adicionar foto do Icaro quando possível, atualmente usando uma imagem genérica de recepcionista.
  },
  {
    "id": 5,
    "name": "João Vitor Reis",
    "position": "Mídia e Desenvolvedor Front-end",
    "description": "Responsável pela gestão de mídias sociais, criação de conteúdo digital e desenvolvimento front-end para as plataformas do CAESoft.",
    "photo": "foto-joaovitor.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/joaovitor-reis/"
  },
  {
    "id": 6,
    "name": "Nina Fernandes",
    "position": "Mídia",
    "description": "Responsável pela gestão de mídias sociais, criação de conteúdo digital e estratégias de comunicação para o CAESoft.",
    "photo": "foto-nina.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/ninagf/"
  },
  {
    "id": 7,
    "name": "Jhenifer Amparo",
    "position": "Secretária",
    "description": "Responsável por auxiliar nas atividades administrativas, organização de reuniões e eventos, e suporte geral às operações do CAESoft.",
    "photo": "foto-jhenifer.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/jhenifer-amparo-a68a14355/"
  },
  {
    "id": 8,
    "name": "José Roberto",
    "position": "Secretário",
    "description": "Auxilia nas atividades administrativas, organização de reuniões e eventos, e suporte geral às operações do CAESoft.",
    "photo": "foto-roberto.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/jos%C3%A9-roberto-80b02a383/"
  },
  {
    "id": 9,
    "name": "Matheus Luz",
    "position": "Tesoureiro",
    "description": "Responsável pela gestão financeira do CAESoft, incluindo orçamento, controle de despesas e arrecadação de fundos para as atividades do centro acadêmico.",
    "photo": "foto-matheusluz.jpg",
    "linkedinUrl": "https://www.linkedin.com/in/matheusluzsilva/"
  },
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
                    <CardContent className="p-6 text-center h-full">
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