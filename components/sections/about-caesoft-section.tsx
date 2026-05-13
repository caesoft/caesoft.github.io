"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Users, Lightbulb, Award, GraduationCap } from "lucide-react"

export const AboutCaesoftSection = () => {
  return (
    <Section id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Sobre o <span className="text-gradient">CAESoft</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Representando e apoiando os estudantes de Engenharia de Software da UEPA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="text-caesoft-purple mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Nossa História</h3>
                  </div>
                  <p className="text-light-dimmed leading-relaxed">
                    Fundado com o objetivo de representar e unir os estudantes de Engenharia de Software, o CAESoft
                    tem sido um pilar fundamental na vida acadêmica dos alunos da UEPA.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="text-caesoft-green mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Nosso Propósito</h3>
                  </div>
                  <p className="text-light-dimmed leading-relaxed">
                    Promover a integração entre estudantes, facilitar o acesso a recursos acadêmicos e representar os
                    interesses dos alunos junto à coordenação do curso.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="text-caesoft-purple mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Nossas Atividades</h3>
                  </div>
                  <p className="text-light-dimmed leading-relaxed mb-4">
                    Desenvolvemos diversas atividades para fortalecer a comunidade acadêmica e promover
                    oportunidades de crescimento pessoal e profissional.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft"
                    >
                      Representação Estudantil
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-caesoft-green/20 text-caesoft-green border border-green-soft"
                    >
                      Eventos Acadêmicos
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-navy-lighter/20 text-caesoft-light border border-purple-soft"
                    >
                      Apoio ao Estudante
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-caesoft-purple to-caesoft-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                  <GraduationCap size={64} className="text-white" />
                </div>
                <p className="text-light-dimmed">
                  Mais de <span className="font-bold text-caesoft-purple">200+</span> estudantes representados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

