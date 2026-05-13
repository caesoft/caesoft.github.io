import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Users, Heart, MessageCircle, Star, Coffee, Code, Lightbulb, Target, Sparkles } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Guia do Calouro',
  description: 'Guia completo para calouros de Engenharia de Software da UEPA. Dicas, informações e tudo que você precisa saber para começar bem no curso.',
  openGraph: {
    title: 'Guia do Calouro',
    description: 'Tudo que você precisa saber para começar bem no curso de Engenharia de Software da UEPA. Dicas de veteranos e informações essenciais.',
    url: 'https://caesoft.github.io/guia-do-calouro',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GuiaDoCalouro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy-light to-navy-darker">
      <Navbar />
      {/* Header */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link href="/">
        </Link>

        {/* Título */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-caesoft-purple mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Guia do Calouro
            </h1>
          </div>
          <p className="text-light-dimmed text-lg max-w-2xl mx-auto">
            Bem-vindo(a) ao curso de Engenharia de Software da UEPA! 
            Este guia foi feito com carinho pelos veteranos para ajudar você nessa nova jornada.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Mensagem de Boas-Vindas */}
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-caesoft-purple mr-4" />
              <h2 className="text-3xl font-bold text-light">Seja Muito Bem-Vindo(a)!</h2>
            </div>
            <p className="text-light-dimmed leading-relaxed text-lg">
              Parabéns pela aprovação! Você está entrando em um dos cursos mais inovadores e promissores 
              da UEPA. A Engenharia de Software vai muito além de programar - você aprenderá a criar 
              soluções que transformam o mundo. E o melhor: você não está sozinho(a) nessa jornada!
            </p>
          </div>

          {/* Links Importantes */}
          <div className="bg-caesoft-green/10 border border-caesoft-green/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-caesoft-green mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Grupos da Turma
            </h3>
            <div className="space-y-4">
              <a
                href="https://chat.whatsapp.com/Bg3f66ZtfvS7jnyd2VEYMI"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-xl border border-caesoft-green/30 hover:border-caesoft-green hover:bg-caesoft-green/20 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">📢 Grupo de Avisos Oficiais da Turma 2025</h4>
                <p className="text-light-dimmed">
                  Comunicados importantes sobre aulas, eventos e atividades da turma 2025.
                </p>
              </a>
              <a
                href="https://chat.whatsapp.com/EvLGlkzKM6b76prSD8P0CC"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-xl border border-caesoft-green/30 hover:border-caesoft-green hover:bg-caesoft-green/20 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">💬 Grupo Geral da Turma 2025</h4>
                <p className="text-light-dimmed">
                  Aqui sua turma pode conversar, tirar dúvidas e fazer amizades. Ambiente descontraído!
                </p>
              </a>
              <a
                href="https://chat.whatsapp.com/HmzE25syoPP91ITemUJ6vb"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded-xl border border-caesoft-green/30 hover:border-caesoft-green hover:bg-caesoft-green/20 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">👥 Grupo Geral de Engenharia de Software da UEPA Ananindeua</h4>
                <p className="text-light-dimmed">
                  Aqui você pode conversar, tirar dúvidas e fazer amizades com outros alunos de Engenharia de Software da UEPA Ananindeua.
                </p>
              </a>
            </div>
          </div>

          {/* Primeiros Passos */}
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-caesoft-purple" />
              Primeiros Passos
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-caesoft-purple rounded-full flex items-center justify-center text-white font-bold">1</span>
                <div>
                  <h4 className="text-lg font-semibold text-light mb-2">Matrícula e Documentação</h4>
                  <p className="text-light-dimmed">
                    Fique atento aos prazos! A matrícula é feita online no SIGAA. Guarde todos os comprovantes 
                    e tenha sempre uma cópia dos documentos importantes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-caesoft-purple rounded-full flex items-center justify-center text-white font-bold">2</span>
                <div>
                  <h4 className="text-lg font-semibold text-light mb-2">Conheça o Campus</h4>
                  <p className="text-light-dimmed">
                    O campus XXII da UEPA fica em Ananindeua, Pará.
                    Reserve um dia para explorar: biblioteca, laboratórios e áreas de convivência.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-caesoft-purple rounded-full flex items-center justify-center text-white font-bold">3</span>
                <div>
                  <h4 className="text-lg font-semibold text-light mb-2">Entre nos Grupos</h4>
                  <p className="text-light-dimmed">
                    Não seja tímido(a)! Entre nos grupos do WhatsApp e se apresente. A turma é super receptiva 
                    e todo mundo está disposto a ajudar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-caesoft-purple rounded-full flex items-center justify-center text-white font-bold">4</span>
                <div>
                  <h4 className="text-lg font-semibold text-light mb-2">Participe do CAESoft</h4>
                  <p className="text-light-dimmed">
                    O Centro Acadêmico é a voz dos estudantes! Participe das reuniões, eventos e atividades. 
                    É uma ótima forma de conhecer pessoas e contribuir para melhorias no curso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dicas de Ouro dos Veteranos */}
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 mr-3 text-caesoft-gold" />
              Dicas de Ouro dos Veteranos
            </h3>
            
            {/* Comentário Veterano 1 */}
            <div className="mb-6 p-6 bg-caesoft-purple/10 rounded-xl border border-caesoft-purple/20">
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 text-caesoft-gold mr-2" />
                <span className="font-semibold text-caesoft-purple"><a href="https://jhermesn.dev" target="_blank" rel="noopener noreferrer">Jorge Hermes</a> - 2024.2</span>
              </div>
              <p className="text-light-dimmed italic">
                "Minha maior dica é: estude desde sempre como se fosse para o mercado de trabalho, pois é exatamente isso que você vai fazer.
                Consiga notas altas e seja um aluno exemplar, pois isso vai te ajudar a conseguir um estágio bem cedo.
                Além disso, participe de eventos, workshops, palestras e projetos, pois isso vai te ajudar a se destacar e a se conectar com outros alunos e profissionais do mercado.
                E por último, desde sempre busque conhecimento e seja curioso, crie projetos e compartilhe-os no GitHub, no LinkedIn e no Instagram, pois isso vai te ajudar a se destacar e rapidamente conseguir oportunidades melhores."
              </p>
            </div>

            {/* Comentário Veterano 2 */}
            <div className="mb-6 p-6 bg-caesoft-purple/10 rounded-xl border border-caesoft-purple/20">
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 text-caesoft-gold mr-2" />
                <span className="font-semibold text-caesoft-purple"><a href="https://www.linkedin.com/in/thaylanbf1" target="_blank" rel="noopener noreferrer">Thaylan Fonseca</a> - 2024.2</span>
              </div>
              <p className="text-light-dimmed italic">
                "A melhor dica que posso dar a vocês é: confiem mais em si mesmos. Digo isso com propriedade, como alguém que já duvidou inúmeras vezes da própria capacidade. Com o tempo, percebi que o nosso potencial não desaparece, ele apenas se esconde, esperando o momento, o espaço e a coragem certos para aparecer. Acreditem: vocês têm força, talento e valor. Muitas vezes, tudo o que falta é se permitir acreditar, mesmo quando o medo aperta e quando há pessoas ao redor que não enxergam o que vocês carregam por dentro."
              </p>
            </div>

          </div>

          {/* Sobre o Curso */}
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-caesoft-green" />
              O Que Esperar do Curso
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">🎯 Foco Prático</h4>
                <p className="text-light-dimmed">
                  Desde o primeiro semestre você já começa a programar! O curso tem forte base prática, 
                  com projetos reais e metodologias usadas no mercado.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">💡 Inovação Constante</h4>
                <p className="text-light-dimmed">
                  Grade curricular atualizada com as tecnologias mais recentes. Você aprenderá desenvolvimento 
                  web, mobile, inteligência artificial, DevOps e muito mais.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">🤝 Networking</h4>
                <p className="text-light-dimmed">
                  Parcerias com empresas locais proporcionam palestras, workshops e oportunidades de estágio. 
                  O CAESoft sempre traz profissionais do mercado para compartilhar experiências.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-caesoft-green mb-2">🚀 Oportunidades</h4>
                <p className="text-light-dimmed">
                  Muitos alunos conseguem estágios já nos primeiros semestres. O mercado de TI em Belém e no mundo 
                  está crescendo e há demanda por profissionais qualificados.
                </p>
              </div>
            </div>
          </div>

          {/* Sistema de Avaliação */}
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-caesoft-blue" />
              Como Funciona o Sistema de Avaliação
            </h3>
            <div className="space-y-6">
              <div className="bg-caesoft-green/10 border border-caesoft-green/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-caesoft-green mb-3">✅ Cenário Ideal</h4>
                <p className="text-light-dimmed">
                  Se você tirar <strong>8,0 na primeira avaliação</strong> e <strong>8,0 na segunda avaliação</strong>, 
                  parabéns! Você já está aprovado e <strong>não precisa fazer a terceira prova</strong>.
                </p>
              </div>
              
              <div className="bg-caesoft-blue/10 border border-caesoft-blue/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-caesoft-blue mb-3">📚 Terceira Avaliação</h4>
                <p className="text-light-dimmed mb-3">
                  Se a soma das duas primeiras notas for <strong>menor que 16,0</strong>, você fará a terceira prova.
                </p>
                <p className="text-light-dimmed">
                  <strong>Importante:</strong> Para ser aprovado na terceira avaliação, você precisa atingir 
                  <strong>18,0 pontos no total das três provas</strong> (média final 6,0).
                </p>
              </div>

              <div className="bg-caesoft-purple/10 border border-caesoft-purple/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-caesoft-purple mb-3">📖 Exemplos Práticos</h4>
                <div className="space-y-3 text-light-dimmed">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Primeira: 8,0 + Segunda: 8,0 = <strong>Aprovado sem terceira prova</strong></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-2">⚠</span>
                    <span>Primeira: 6,0 + Segunda: 5,0 = 11,0 → Precisa de 7,0 na terceira para somar 18,0</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-2">⚠</span>
                    <span>Primeira: 7,0 + Segunda: 4,0 = 11,0 → Precisa de 7,0 na terceira para somar 18,0</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Primeira: 5,0 + Segunda: 3,0 = 8,0 → Precisa de 10,0 na terceira (impossível, máximo é 10,0)</span>
                  </div>
                </div>
              </div>

              <div className="bg-caesoft-gold/10 border border-caesoft-gold/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-caesoft-gold mb-3">💡 Dica dos Veteranos</h4>
                <p className="text-light-dimmed">
                  Sempre se esforce para tirar boas notas nas duas primeiras avaliações. Além de evitar o estresse 
                  da terceira prova, você mantém um histórico acadêmico forte, que é muito valorizado em processos 
                  seletivos de estágio e emprego!
                </p>
              </div>
            </div>
          </div>

          {/* Recursos Essenciais */}
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-light mb-6 flex items-center">
              <Coffee className="w-6 h-6 mr-3 text-caesoft-purple" />
              Recursos e Ferramentas Essenciais
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <h4 className="font-semibold text-caesoft-purple mb-2">📚 Biblioteca Digital</h4>
                <p className="text-light-dimmed text-sm">
                  A UEPA oferece acesso a diversas bases de dados acadêmicas. Peça orientação na assessoria pedagógica!
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl">
                <h4 className="font-semibold text-caesoft-purple mb-2">💻 Laboratórios</h4>
                <p className="text-light-dimmed text-sm">
                  laboratórios equipados com computadores modernos, disponíveis para estudo e projetos.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h4 className="font-semibold text-caesoft-purple mb-2">🎓 Monitoria</h4>
                <p className="text-light-dimmed text-sm">
                  Várias disciplinas oferecem monitoria. Aproveite para tirar dúvidas e reforçar o conteúdo.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h4 className="font-semibold text-caesoft-purple mb-2">🏃 Atividades Complementares</h4>
                <p className="text-light-dimmed text-sm">
                  Participar de eventos, cursos e projetos conta como horas complementares. Comece cedo, pois você precisa de 600 horas complementares!
                </p>
              </div>
            </div>
          </div>

          {/* Material do Nivelamento */}
          <div className="bg-caesoft-gold/10 border border-caesoft-gold/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-caesoft-gold mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              Material do Nivelamento
            </h3>
            <p className="text-light-dimmed mb-6">
              Preparamos recursos essenciais para você começar o curso com o pé direito. Não se preocupe se não dominar tudo - você aprenderá ao longo do curso!
            </p>
            <a href="https://drive.google.com/drive/u/0/folders/1O6s49U1shpVsLIedCh0rJ2MaLVxzUo2j" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mb-8 border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent">
                <BookOpen size={16} className="mr-2" />
                Acessar Material do Nivelamento
              </Button>
            </a>
          </div>

          {/* Mensagem Final */}
          <div className="bg-gradient-to-r from-caesoft-purple/20 to-caesoft-green/20 border border-caesoft-purple/30 rounded-2xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-caesoft-purple mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-light mb-4">Você Faz Parte da Nossa História!</h3>
            <p className="text-light-dimmed mb-6">
              O curso de Engenharia de Software da UEPA é jovem e cheio de energia. Cada turma 
              contribui para construir essa trajetória de sucesso. Seja protagonista dessa história!
            </p>
            <p className="text-lg font-semibold text-gradient">
              Bem-vindo(a) à família de Engenharia de Software da UEPA! 💜💚
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
} 