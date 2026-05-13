"use client"

import { Button } from "@/components/ui/button"
import { Code, Mail, Phone, MapPin, Github, Instagram, Linkedin, ExternalLink, MessageCircle, ArrowUp } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/caesoft", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/caesoft.uepa", label: "Instagram" },
    { icon: MessageCircle, href: "https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/caesoft-uepa/", label: "LinkedIn" },
  ]

  const quickLinks = [
    { label: "Sobre o CAESoft", href: "#about" },
    { label: "Curso", href: "#course" },
    { label: "Campus", href: "#campus" },
    { label: "Recursos", href: "#resources" },
    { label: "SIGAA", href: "https://sigaa.uepa.br" },
    { label: "Comunidade WhatsApp", href: "https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc" },
  ]

  const contactInfo = [
    { icon: Mail, text: "caesoft@aluno.uepa.br", href: "mailto:caesoft@aluno.uepa.br" },
    { icon: Phone, text: "+55 (91) 98363-8964", href: "tel:+5591983638964" },
    { icon: MapPin, text: "UEPA - Campus XXII, Ananindeua/PA", href: "#campus" },
  ]

  return (
    <footer className="relative">
      {/* Gradiente separador */}
      <div className="h-px bg-gradient-to-r from-transparent via-caesoft-purple/30 to-transparent"></div>
      
      <div className="glass-effect-light border-t border-primary-soft">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Logo e Descrição */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/purplelogo.png" 
                  alt="CAESoft Logo" 
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gradient">CAESoft</h3>
                  <p className="text-sm text-light-dimmed">UEPA</p>
                </div>
              </div>
              <p className="text-light-dimmed text-sm leading-relaxed">
                Centro Acadêmico de Engenharia de Software da Universidade do Estado do Pará, 
                conectando estudantes e promovendo o conhecimento tecnológico.
              </p>
              
              {/* Redes Sociais */}
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-navy-light/50 border border-primary-soft flex items-center justify-center text-light-dimmed hover:text-caesoft-green hover:border-caesoft-green/50 hover:bg-caesoft-green/10 transition-all duration-300 hover-glow"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-light">Links Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-light-dimmed hover:text-caesoft-green transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                      <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-light">Contato</h4>
              <ul className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-light-dimmed hover:text-caesoft-green transition-colors duration-300 text-sm group"
                    >
                      <contact.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>{contact.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Botão Voltar ao Topo */}
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="mt-4 border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent"
              >
                <ArrowUp size={16} className="mr-2" />
                Voltar ao Topo
              </Button>
            </div>
          </div>

          {/* Separador */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-caesoft-purple/20 to-transparent"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4">
            <p className="text-light-muted text-sm">
              © {currentYear} Desenvolvido por <a href="https://www.jhermesn.dev" className="text-caesoft-green hover:text-caesoft-green/80 transition-colors duration-300">Jorge Hermes</a>, <a href="https://github.com/marcellosant" className="text-caesoft-green hover:text-caesoft-green/80 transition-colors duration-300">Marcello Santos</a> e <a href="https://github.com/valdemirofacundo" className="text-caesoft-green hover:text-caesoft-green/80 transition-colors duration-300">Valdemiro Facundo</a> para o <a href="https://caesoft.github.io" className="text-caesoft-green hover:text-caesoft-green/80 transition-colors duration-300">CAESoft</a> - Centro Acadêmico de Engenharia de Software da UEPA. 
              Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidade" className="text-light-muted hover:text-caesoft-green transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-light-muted hover:text-caesoft-green transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 