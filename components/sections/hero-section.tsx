"use client"

import { Button } from "@/components/ui/button"
import { Code, Github, Instagram, Linkedin, MessageCircle, BookOpen, ShoppingBag } from "lucide-react"
import { Section } from "@/components/section"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <Section id="home" className="graph-bg">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Image 
              src="purplelogo.png" 
              alt="CAESoft Logo" 
              width={96}
              height={96}
              className="w-24 h-24 object-contain mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">CAESoft</span>
            </h1>
            <p className="text-lg text-light-dimmed mb-8">Universidade do Estado do Pará</p>
          </div>

          <div className="animate-slide-in-right">
            <p className="text-lg md:text-xl text-light-dimmed mb-8 leading-relaxed">
              Conectando estudantes, promovendo conhecimento e construindo o futuro da tecnologia no Pará
            </p>

            {/* Redes Sociais */}
            <div className="mb-8">
              <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/caesoft-uepa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-caesoft-purple/20 to-caesoft-green/20 border border-caesoft-purple/30 rounded-xl hover:border-caesoft-purple/60 hover:shadow-lg hover:shadow-caesoft-purple/30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn do CAESoft"
              >
                <Linkedin size={20} className="text-caesoft-light group-hover:text-caesoft-purple transition-colors duration-300" />
              </a>
              <a
                href="https://github.com/caesoft"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-caesoft-purple/20 to-caesoft-green/20 border border-caesoft-green/30 rounded-xl hover:border-caesoft-green/60 hover:shadow-lg hover:shadow-caesoft-green/30 transition-all duration-300 hover:scale-110"
                aria-label="GitHub do CAESoft"
              >
                <Github size={20} className="text-caesoft-light group-hover:text-caesoft-green transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/caesoft.uepa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-caesoft-purple/20 to-caesoft-green/20 border border-purple-soft rounded-xl hover:border-caesoft-purple/60 hover:shadow-lg hover:shadow-caesoft-purple/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram do CAESoft"
              >
                <Instagram size={20} className="text-caesoft-light group-hover:text-gradient transition-colors duration-300" />
              </a>
              <a
                href="https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-caesoft-purple/20 to-caesoft-green/20 border border-caesoft-green/30 rounded-xl hover:border-caesoft-green/60 hover:shadow-lg hover:shadow-caesoft-green/30 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp do CAESoft"
              >
                <MessageCircle size={20} className="text-caesoft-light group-hover:text-caesoft-green transition-colors duration-300" />
              </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/guia-do-calouro">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-caesoft-purple to-caesoft-green hover:from-caesoft-purple/90 hover:to-caesoft-green/90 text-white font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <BookOpen size={20} />
                  Acesse o Guia do Calouro
                </Button>
              </Link>
              <Link href="/loja">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-500/90 hover:to-amber-600/90 text-white font-medium px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <ShoppingBag size={20} />
                  Loja
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
