"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { Code, Users, Lightbulb, Download, BookOpen, GraduationCap, UserCheck, ExternalLink, FileText } from "lucide-react"

const disciplinesBySemester = [
  {
    semester: "1º Semestre",
    subjects: [
      "Matemática Discreta (80h)",
      "Fundamentos de Sistemas de Informação (60h)",
      "Fundamentos de Sistemas Operacionais (60h)",
      "Linguagens Formais (80h)",
      "Programação Estruturada (80h)",
      "Inglês Instrumental (40h)"
    ]
  },
  {
    semester: "2º Semestre", 
    subjects: [
      "Estatística Aplicada a Informática (60h)",
      "Análise Orientada a Objetos (80h)",
      "Modelagem de Dados (60h)",
      "Estrutura de Dados, Pesquisa e Ordenação (80h)",
      "Programação Web (80h)"
    ]
  },
  {
    semester: "3º Semestre",
    subjects: [
      "Fundamentos de Engenharia de Software (60h)",
      "Programação Orientada a Objetos I (80h)",
      "Banco de Dados I (80h)",
      "Análise e Projeto de Algoritmos (80h)",
      "Microcontroladores e Microprocessadores (80h)",
      "Inovação Tecnológica e Empreendedorismo (60h)"
    ]
  },
  {
    semester: "4º Semestre",
    subjects: [
      "Programação Orientada a Objetos II (80h)",
      "Análise e Projeto de Software (80h)",
      "Banco de Dados II (80h)",
      "Sistemas Multirrobóticos (60h)",
      "Projeto Integrado I (80h)"
    ]
  },
  {
    semester: "5º Semestre",
    subjects: [
      "Processos de Desenvolvimento de Software (80h)",
      "Arquitetura de Software (60h)",
      "Gerência de Projetos (80h)",
      "Robótica Móvel (60h)",
      "Cultura, Sociedade e Tecnologia (60h)",
      "Fundamentos de Redes de Computadores (80h)"
    ]
  },
  {
    semester: "6º Semestre",
    subjects: [
      "Fundamentos de Sistemas Embarcados (60h)",
      "Gestão de Infraestrutura de Redes (60h)",
      "Governança de TIC (80h)",
      "Programação Mobile (60h)",
      "Compiladores e Interpretadores (80h)",
      "Projeto Integrado II (80h)"
    ]
  },
  {
    semester: "7º Semestre",
    subjects: [
      "Projeto de Redes e Segurança (80h)",
      "Estimativa de Software (80h)",
      "Realidade Virtual (60h)",
      "Interação Humano-Computador (80h)",
      "Optativa (80h)"
    ]
  },
  {
    semester: "8º Semestre",
    subjects: [
      "Design de Produtos Interativos com Internet das Coisas (40h)",
      "Teste de Software (80h)",
      "Análise e Visualização de Dados (80h)",
      "Mineração de Dados (80h)",
      "Optativa (80h)",
      "Trabalho de Conclusão de Curso (120h)"
    ]
  }
]

const professors = [
  { 
    name: "Anderson Jorge Serra da Costa", 
    title: "Mestre", 
    specialization: "Ciência da Computação (UFPA)", 
    lattes: "http://lattes.cnpq.br/7707885586024191" 
  },
  { 
    name: "Antônio Marcos Cardoso Silva", 
    title: "Mestre", 
    specialization: "Informática (UFPR)", 
    lattes: "https://lattes.cnpq.br/3949852619017976" 
  },
  { 
    name: "Carlos Benedito Barreiros Gutierrez", 
    title: "Doutor e Mestre", 
    specialization: "Dr., Me. Ciências Ambientais (UFPA)", 
    lattes: "https://lattes.cnpq.br/0920214717536195"  
  },
  { 
    name: "Gleisson Amaral Mendes", 
    title: "Mestre e Especialista", 
    specialization: "Me. Engenharia Industrial (UFPA), Es. Redes de Computadores (Unama)", 
    lattes: "https://lattes.cnpq.br/7781175809341535"  
  },
  { 
    name: "Ítalo Flexa Di Paolo", 
    title: "Doutor e Mestre", 
    specialization: "Dr. Engenharia Elétrica: Computação Aplicada (UFPA), Me. Engenharia Elétrica: Sistemas de Energia Elétrica (UFPA)", 
    lattes: "https://lattes.cnpq.br/7195767161641034"  
  },
  { 
    name: "Jairo Fadul de Lima", 
    title: "Mestre e Especialista", 
    specialization: "Me. Engenharia de Processos (UFPA), Es. Análise de Sistemas (UFPA)", 
    lattes: "https://lattes.cnpq.br/5482391365956398"  
  },
  { 
    name: "Paulo Sérgio Rodrigues Lima", 
    title: "Doutor, Mestre e Especialista", 
    specialization: "Dr. Engenharia Elétrica com ênfase em Computação Aplicada (UFPA), Me. Ciências da Computação (UFRGS), Es. Analytics e Business Intelligence (PUC-MG)", 
    lattes: "https://lattes.cnpq.br/2188563656904692"  
  },
  { 
    name: "Renato Ferreira Carr", 
    title: "Mestre e Especialista", 
    specialization: "Me. Ciencias de la Computación (Universidad de la Habana), Me. Educação (Unesa), Es. Direito Educacional (FUI), Es. Engenharia de Segurança do Trabalho (PUC-GO), Es. Telecomunicações (Unesa), Es. Análise de Sistemas (Unesa)", 
    lattes: ""  
  },
  { 
    name: "Thiago Nicolau Magalhães de Souza Conte", 
    title: "Doutor, Mestre e Especialista", 
    specialization: "Dr. Engenharia Elétrica - Inteligência Computacional (UFPA), Me. Engenharia Elétrica (UFPA), Es. Docência para a Educação Profissional (SENAC), Es. Desenvolvimento de Sistemas Baseado em Software Livre (Unama)", 
    lattes: "https://lattes.cnpq.br/0783374325529116"  
  },
  { 
    name: "Wanderson Alexandre da Silva Quinto", 
    title: "Doutor, Mestre e Especialista", 
    specialization: "Dr. Psicologia (UFPA), Me. Engenharia Elétrica (UFPA), Es. Habilidades e Competências Docentes (FACI), Es. Redes de Computadores (UFPA)", 
    lattes: "https://lattes.cnpq.br/4429230658129917"
  },
  { 
    name: "Marta de Oliveira Barreiros", 
    title: "Doutora", 
    specialization: "Sistemas de Informação (Facimp), Me. Biotecnologia (UFPA) e Dr. Engenharia Elétrica (UFMA).", 
    lattes: "https://lattes.cnpq.br/2695239794047991"
  },
  { 
    name: "Leno Rodrigues Martins", 
    title: "Doutor", 
    specialization: "Engenharia da Computação (2013), mestre (2016) e doutor (2020) em Engenharia Elétrica, todos pela UFPA.", 
    lattes: "https://lattes.cnpq.br/0564896752552040"
  },
  { 
    name: "Armando Jose de Sá Santos", 
    title: "Mestre", 
    specialization: "Análise de Sistemas - Universidade Estácio de Sá (2009). Mestre em Ciência e Engenharia de Materiais pela Universidade Federal de São Carlos - UFSCar (2024)", 
    lattes: "https://lattes.cnpq.br/6286321140581380"
  },
  { 
    name: "Claudio Maciel de Souza Coutinho", 
    title: "Mestre", 
    specialization: "Mestrado em Engenharia Elétrica - UFPA (2015), Bacharelado em Engenharia da Computação - UFPA (2012).", 
    lattes: "https://lattes.cnpq.br/2859593183875050"
  }
]

const optionalSubjects = [
  "Disciplinas Optativas (160h total)",
  "Educação Socioambiental (80h)",
  "Língua Brasileira de Sinais (80h)",
  "Direitos Humanos e dos Povos Tradicionais (80h)",
  "Acessibilidade e Inclusão Digital (80h)",
  "Tecnologia em Contexto Social (80h)",
  "Tópicos Especiais em Redes de Computadores (80h)",
  "Tópicos Especiais em Banco de Dados (80h)",
  "Tópicos Especiais em Engenharia de Software (80h)",
  "Inteligência Computacional (80h)",
  "Multimídia e Interatividade (80h)",
  "Marketing Relacional (80h)",
  "Agilidade em Software (80h)",
  "Gerência da Conectividade Computacional (80h)",
  "Introdução em Desenvolvimento de Jogos Digitais (80h)",
  "Tópicos Especiais em Computação (80h)",
  "Logistica e Supply Chain (80h)",
  "Tecnologias Assistivas (80h)"
]

export const AboutCourseSection = () => {
  return (
    <Section id="course" className="bg-gradient-to-br from-caesoft-navy/50 to-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-caesoft-light mb-4 md:mb-6">
              Bacharelado em <span className="text-gradient">Engenharia de Software</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              O Bacharel em Engenharia de Software contará com uma formação voltada para o desenvolvimento do raciocínio lógico e conhecimentos matemáticos, científicos, tecnológicos e instrumentais computacionais que estimulam sua atuação crítica e criativa na identificação e resolução de problemas voltados aos diversos setores da sociedade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Code className="text-caesoft-purple mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-caesoft-light mb-3">8 Semestres</h3>
                <p className="text-light-dimmed">
                  Curso com duração de 4 anos, totalizando 3.880 horas aula distribuídas em 8 semestres.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="text-caesoft-green mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-caesoft-light mb-3">4 Campi</h3>
                <p className="text-light-dimmed">
                  Turmas em Ananindeua, Castanhal, Redenção, Parauapebas e + pelo Forma Pará.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Lightbulb className="text-caesoft-light mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-caesoft-light mb-3">Reconhecido</h3>
                <p className="text-light-dimmed">
                  Curso reconhecido pelo MEC com formação sólida para pesquisa, desenvolvimento, empreendedorismo e empregabilidade.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Course Objective */}
          <div className="mb-6 md:mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Objetivo Geral</h3>
                <p className="text-light-dimmed leading-relaxed text-lg">
                  Formar profissionais da área de Computação e Informática para atuação em pesquisa, gestão, desenvolvimento, uso e avaliação de tecnologias de informação aplicadas nas organizações com uma formação alicerçada nos pilares, tecnológicos, organizacionais e humanísticos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Professional Profile */}
          <div className="mb-6 md:mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Perfil Profissional</h3>
                <p className="text-light-dimmed leading-relaxed text-lg mb-4">
                  O curso é indicado para todo interessado no desenvolvimento de atividades com implementações tecnológicas na área da Computação.
                  <br></br>
                   O interessado deve ter pensamento crítico e sensível aos efeitos que a tecnologia possa desencadear no ser humano e intenção de alcançar o desenvolvimento da tecnologia na sua sociedade.
                </p>
                <p className="text-light-dimmed leading-relaxed text-lg">
                  Assim, o graduado obtém uma formação sólida para atuar na pesquisa e no desenvolvimento na área de Engenharia de Software e noutras áreas relacionadas à Computação.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Access Requirements */}
          <div className="mb-6 md:mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Requisitos e Formas de Acesso</h3>
                <div className="space-y-4">
                  <p className="text-light-dimmed leading-relaxed">
                    O acesso se dá por meio do vestibular próprio da Universidade do Estado do Pará, geralmente com a nota do <strong className="text-caesoft-green">Exame Nacional do Ensino Médio (ENEM)</strong>, conforme o ingresso nos Cursos de Graduação da Instituição.
                  </p>
                  <p className="text-light-dimmed leading-relaxed">
                    Os critérios de seleção e distribuição de vagas são definidos por edital elaborado pela Pró-Reitoria de Graduação – PROGRAD. O planejamento, a coordenação e avaliação dos Processos de ingresso/acesso são de competência da Comissão Permanente de Acesso ao Ensino Superior – COPAES.
                  </p>
                  <p className="text-light-dimmed leading-relaxed">
                    O bacharelado é um <strong className="text-caesoft-purple">curso regular</strong>, acessível aos candidatos que concluíram o Ensino Médio ou equivalente e que tenham sido classificados em processo seletivo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Structure */}
          <div className="mb-6 md:mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="!bg-caesoft-purple hover:!brightness-110 !text-white !border-caesoft-purple px-4 py-2 transition-all duration-200">
                3.880h Total
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-green hover:!brightness-110 !text-white !border-caesoft-green px-4 py-2 transition-all duration-200">
                3.160h Disciplinas
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-navy hover:!brightness-110 !text-white !border-caesoft-navy px-4 py-2 transition-all duration-200">
                600h Atividades Complementares
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-purple/80 hover:!brightness-110 !text-white !border-caesoft-purple/80 px-4 py-2 transition-all duration-200">
                192h Estágio
              </Badge>
            </div>
          </div>

          {/* Disciplines Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-12">
            {disciplinesBySemester.map((semester, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft">
                <CardHeader>
                  <CardTitle className="text-caesoft-light flex items-center gap-2">
                    <BookOpen className="text-caesoft-purple" size={20} />
                    {semester.semester}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx} className="text-light-dimmed text-sm flex items-start gap-2">
                        <span className="w-2 h-2 bg-caesoft-purple rounded-full mt-2 flex-shrink-0"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Optional Subjects */}
          <Card className="glass-effect-light border-purple-soft mb-4 md:mb-8">
            <CardHeader>
              <CardTitle className="text-caesoft-light flex items-center gap-2">
                <Code className="text-caesoft-green" size={20} />
                Disciplinas Optativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {optionalSubjects.map((subject, idx) => (
                  <div key={idx} className="text-light-dimmed text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-caesoft-green rounded-full flex-shrink-0"></span>
                    {subject}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professors */}
          <Card className="glass-effect-light border-purple-soft mb-4 md:mb-8">
            <CardHeader>
              <CardTitle className="text-caesoft-light flex items-center gap-2">
                <GraduationCap className="text-caesoft-purple" size={20} />
                Corpo Docente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {professors.map((prof, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-caesoft-light font-semibold">{prof.name}</h4>
                    <p className="text-caesoft-green text-sm">{prof.title}</p>
                    <p className="text-light-dimmed text-xs">{prof.specialization}</p>
                    <div className="mt-2 self-end">
                      <a href={prof.lattes} target="_blank" rel="noopener noreferrer">
                        <img src="/lattes-icon2.png" alt="Lattes" className="w-4 h-4" />
                      </a>
                   </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Academic Structure */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardHeader>
                <CardTitle className="text-caesoft-light flex items-center gap-2">
                  <UserCheck className="text-caesoft-green" size={20} />
                  Colegiado do Curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Coordenação:</span> Responsável pela gestão acadêmica e administrativa do curso
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Representação:</span> Docentes e discentes do curso
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Função:</span> Deliberações acadêmicas e pedagógicas
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft">
              <CardHeader>
                <CardTitle className="text-caesoft-light flex items-center gap-2">
                  <Users className="text-caesoft-purple" size={20} />
                  NDE - Núcleo Docente Estruturante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Composição:</span> Docentes com titulação acadêmica obtida em programas de pós-graduação stricto sensu
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Função:</span> Acompanhamento, atualização e consolidação do PPC
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Regime:</span> Tempo integral ou parcial
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button 
                size="lg" 
                className="bg-caesoft-green hover:bg-caesoft-green/90 text-caesoft-navy w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/file/d/1xpjfaVOdWzTOClDeGv5gXGOmgJgjCc4N/view?usp=drive_link', '_blank')}
              >
                <Download className="mr-2" size={16} />
                Baixar PPC Completo
              </Button>
              
              <Button 
                size="lg" 
                className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/file/d/1fxje6407EnBsab_yC0YJ0zx9ou6BMXMM/view?usp=drive_link', '_blank')}
              >
                <FileText className="mr-2" size={16} />
                Atividades Complementares
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-caesoft-light text-caesoft-light bg-transparent hover:bg-caesoft-light hover:text-caesoft-navy w-full sm:w-auto"
                onClick={() => window.open('https://ccnt.uepa.br/bacharelado-em-engenharia-de-software/', '_blank')}
              >
                <ExternalLink className="mr-2" size={16} />
                Saiba Mais no CCNT
              </Button>
            </div>
            <p className="text-light-dimmed text-sm">
              Acesse documentos oficiais e informações completas sobre o curso.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

