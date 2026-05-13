"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { FileText, BookOpen, Calendar, MessageCircle, Users, Library, Calculator, MessageSquare, ExternalLink } from "lucide-react"

export const ResourcesSection = () => {
  const resources = [
    {
      icon: ExternalLink,
      title: "SIGAA",
      description: "Portal acadêmico para matrículas, notas e histórico escolar",
      link: "https://sigaa.uepa.br",
      external: true
    },
    {
      icon: BookOpen,
      title: "PPC do Curso",
      description: "Projeto Pedagógico do Curso de Engenharia de Software",
      link: "https://drive.google.com/file/d/1xpjfaVOdWzTOClDeGv5gXGOmgJgjCc4N/view?usp=drive_link",
      external: true
    },
    {
      icon: Calculator,
      title: "Resolução de Atividades Complementares",
      description: "Detalhes sobre as atividades complementares do curso",
      link: "https://drive.google.com/file/d/1fxje6407EnBsab_yC0YJ0zx9ou6BMXMM/view?usp=drive_link",
      external: true
    },
    {
      icon: Library,
      title: "Planilha Biblioteca",
      description: "Acervo digital e catálogo de livros disponíveis",
      link: "https://docs.google.com/spreadsheets/d/1aNedZ8eR4B0BmTRznf-DFXySyfStcaUO7w0dTd0XtBI/edit?usp=sharing",
      external: true
    },
    {
      icon: FileText,
      title: "Regulamento Biblioteca",
      description: "Normas e regulamentações para uso da biblioteca",
      link: "https://docs.google.com/document/d/162w5iYMEwGCOiqg1avuauMHi3q5FqgkzSksQFK_rpec/edit?usp=sharing",
      external: true
    },
    {
      icon: FileText,
      title: "Documentos do CAEsoft",
      description: "Estatuto, atas, relatórios e outros documentos do CAEsoft",
      link: "https://drive.google.com/drive/folders/1F630z1nOCDCizRGC5aAVKaovXPBy-6wx?usp=sharing",
      external: true
    },
    {
      icon: FileText,
      title: "Guia do Estágio",
      description: "Guia desenvolvido pelo professor Gleisson Mendes sobre o processo de estágio.",
      link: "https://drive.google.com/drive/folders/1WBWHWh4fRgikgVkjKJR3gehtPdd2bCea?usp=sharing",
      external: true
    }
  ]

  return (
    <Section id="resources" className="bg-gradient-to-br from-caesoft-navy/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              <span className="text-gradient">Recursos</span> para Estudantes
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Tudo que você precisa para ter sucesso na sua jornada acadêmica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {resources.map((resource, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center">
                    <resource.icon
                      className="text-caesoft-purple mr-3 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <h3 className="text-xl font-semibold text-caesoft-light">{resource.title}</h3>
                  </div>
                  <p className="text-light-dimmed">
                    {resource.description}
                  </p>
                  <div className="mt-auto h-4" />
                  <Button
                    variant="outline"
                    className="w-full border-caesoft-purple text-caesoft-purple hover:bg-caesoft-purple hover:text-white bg-transparent"
                    onClick={() => window.open(resource.link, "_blank")}
                  >
                    Acessar
                    <resource.icon className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-caesoft-light mb-6 text-center">
              <span className="text-gradient">Comunidades</span> Estudantis
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center">
                    <MessageCircle
                      className="text-green-400 mr-3 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <h3 className="text-xl font-semibold text-caesoft-light">Comunidade WhatsApp</h3>
                  </div>
                  <p className="text-light-dimmed">
                    Participe da nossa comunidade no WhatsApp para tirar dúvidas e trocar experiências com outros estudantes.
                  </p>
                  <div className="mt-auto h-4" />
                  <Button
                    variant="outline"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc", "_blank")}
                  >
                    Entrar na Comunidade
                    <MessageCircle className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center">
                    <MessageSquare
                      className="text-purple-400 mr-3 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <h3 className="text-xl font-semibold text-caesoft-light">Comunidade Discord</h3>
                  </div>
                  <p className="text-light-dimmed">
                    Participe da nossa comunidade no Discord para networking e discussões técnicas em tempo real.
                  </p>
                  <div className="mt-auto h-4" />
                  <Button
                    variant="outline"
                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("https://discord.gg/23qVdpmbZ8", "_blank")}
                  >
                    Entrar no Discord
                    <MessageSquare className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Precisa de Ajuda?</h3>
                <p className="text-light-dimmed mb-6">
                  Nossa equipe está sempre disponível para apoiar os estudantes. Entre em contato conosco através dos
                  nossos canais oficiais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white"
                    onClick={() => window.open("https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc", "_blank")}
                  >
                    WhatsApp CAESoft
                  </Button>
                  <Button
                    variant="outline"
                    className="border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("mailto:caesoft@aluno.uepa.br", "_blank")}
                  >
                    Email Institucional
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}

