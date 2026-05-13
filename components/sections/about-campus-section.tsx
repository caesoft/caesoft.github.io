"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { Building, MapPin, Users, BookOpen, Laptop, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const AboutCampusSection = () => {
  return (
    <Section id="campus">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Nosso <span className="text-gradient">Campus</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Conheça a infraestrutura moderna do Campus XXII da UEPA em Ananindeua que apoia nossa formação acadêmica
            </p>
          </div>

          {/* Mapa do Google */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.720209288347!2d-48.408057!3d-1.3442936999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46142af21ed2d%3A0x7fa4f155a5eecf6c!2sUEPA%20-%20Universidade%20do%20Estado%20do%20Par%C3%A1%20-%20Campus%20XXII%20Ananindeua!5e0!3m2!1spt-BR!2sbr!4v1750889741737!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Campus XXII UEPA Ananindeua"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="text-caesoft-purple mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Infraestrutura Moderna</h3>
                  </div>
                  <p className="text-light-dimmed leading-relaxed">
                    Campus moderno com salas de aula equipadas, laboratórios avançados e 
                    infraestrutura de qualidade para os cursos de Engenharia de Software, Engenharia Florestal, Licenciatura em Matemática e Bacharelado em Biomedicina.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-caesoft-green mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Localização Estratégica</h3>
                  </div>
                  <p className="text-light-dimmed leading-relaxed">
                    Localizado na região metropolitana de Belém, ao lado da Usina da Paz do Icuí, 
                    com fácil acesso e próximo a importantes centros urbanos da região.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Laptop className="text-caesoft-blue mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Laboratórios Especializados</h3>
                  </div>
                  <p className="text-light-dimmed leading-relaxed">
                    Laboratórios modernos equipados com tecnologia de ponta para apoiar os cursos oferecidos, 
                    proporcionando experiência prática aos estudantes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-caesoft-blue mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">Contato do Campus</h3>
                  </div>
                  <div className="space-y-3 text-light-dimmed">
                    <div>
                      <p className="text-caesoft-light font-semibold mb-1">Coordenadora Geral:</p>
                      <p className="text-sm">Camila Claíde Souza do Vale</p>
                    </div>
                    <div>
                      <p className="text-caesoft-light font-semibold mb-1">Coordenador Administrativo:</p>
                      <p className="text-sm">Fábio Barros Neves</p>
                    </div>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">📞</span>
                      (91) 98521-3114
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">📧</span>
                      campusananindeua@uepa.br
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">📍</span>
                      Avenida Independência, S/N
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">🏢</span>
                      Ao lado da Usina da Paz do Icuí
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">🏙️</span>
                      Ananindeua - PA
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ExternalLink className="text-caesoft-green mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-caesoft-light">SIGAA</h3>
                  </div>
                  <p className="text-light-dimmed mb-4">
                    Acesse o Sistema Integrado de Gestão de Atividades Acadêmicas para matrícula, notas e todas as informações acadêmicas.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("https://sigaa.uepa.br", "_blank")}
                  >
                    Acessar SIGAA
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-caesoft-purple">2</div>
                  <div className="text-sm text-light-dimmed">Laboratórios</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-caesoft-green">4</div>
                  <div className="text-sm text-light-dimmed">Cursos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção sobre a UEPA */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-caesoft-light mb-6">
              Sobre a <span className="text-gradient">UEPA</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <Users className="text-caesoft-purple mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">17.000+</h4>
                  <p className="text-light-dimmed text-sm">Estudantes</p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <BookOpen className="text-caesoft-green mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">132</h4>
                  <p className="text-light-dimmed text-sm">Cursos Oferecidos</p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <Building className="text-caesoft-blue mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">23</h4>
                  <p className="text-light-dimmed text-sm">Campi no Estado</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cursos oferecidos no Campus XXII */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-caesoft-light mb-8">
              Cursos do <span className="text-gradient">Campus XXII</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <Laptop className="text-caesoft-purple mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">Engenharia de Software</h4>
                  <p className="text-light-dimmed text-sm">Bacharelado</p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <Building className="text-caesoft-green mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">Engenharia Florestal</h4>
                  <p className="text-light-dimmed text-sm">Bacharelado</p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <BookOpen className="text-caesoft-blue mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">Licenciatura em Matemática</h4>
                  <p className="text-light-dimmed text-sm">Licenciatura</p>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <Users className="text-caesoft-gold mx-auto mb-4" size={48} />
                  <h4 className="text-lg font-semibold text-caesoft-light mb-2">Biomedicina</h4>
                  <p className="text-light-dimmed text-sm">Bacharelado - Modular (Forma Pará)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

