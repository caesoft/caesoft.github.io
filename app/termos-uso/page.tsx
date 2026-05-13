import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Users, AlertCircle, CheckCircle, Scale } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site CAESoft - Centro Acadêmico de Engenharia de Software da UEPA. Condições claras e transparentes para uso do nosso site.',
  openGraph: {
    title: 'Termos de Uso | CAESoft UEPA',
    description: 'Conheça os termos de uso do site do Centro Acadêmico de Engenharia de Software da UEPA. Condições transparentes e claras.',
    url: 'https://caesoft.github.io/termos-uso',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy-light to-navy-darker">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="outline" className="mb-8 border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent">
            <ArrowLeft size={16} className="mr-2" />
            Voltar ao Início
          </Button>
        </Link>

        {/* Título */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-12 h-12 text-caesoft-purple mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Termos de Uso
            </h1>
          </div>
          <p className="text-light-dimmed text-lg max-w-2xl mx-auto">
            Condições claras e transparentes para uso do nosso site
          </p>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12 space-y-8">
            
            {/* Data de atualização */}
            <div className="text-center text-light-muted text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div>

            {/* Seções */}
            <div className="space-y-6">
              
              {/* Aceitação dos Termos */}
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-caesoft-green mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-light mb-4">Aceitação dos Termos</h2>
                  <p className="text-light-dimmed leading-relaxed">
                    Ao acessar e usar este site do CAESoft - Centro Acadêmico de Engenharia de Software da UEPA, 
                    você concorda em cumprir estes termos de uso. Se você não concordar com qualquer parte destes 
                    termos, pedimos que não continue usando nosso site.
                  </p>
                </div>
              </div>

              {/* Natureza do Site */}
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-caesoft-purple mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-light mb-3">Natureza do Site</h3>
                  <p className="text-light-dimmed leading-relaxed mb-4">
                    Este é um site institucional e informativo do Centro Acadêmico de Engenharia de Software 
                    da Universidade do Estado do Pará (UEPA). Nosso objetivo é:
                  </p>
                  <ul className="text-light-dimmed space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-purple rounded-full mr-3"></span>
                      Divulgar informações sobre o curso de Engenharia de Software
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-purple rounded-full mr-3"></span>
                      Promover atividades e eventos do centro acadêmico
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-purple rounded-full mr-3"></span>
                      Conectar estudantes e interessados na área
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-purple rounded-full mr-3"></span>
                      Fornecer recursos educacionais e informativos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Privacidade e Coleta de Dados */}
              <div className="bg-caesoft-green/10 border border-caesoft-green/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-caesoft-green mb-3 flex items-center">
                  <Scale className="w-5 h-5 mr-2" />
                  Privacidade e Coleta de Dados
                </h3>
                <p className="text-light-dimmed leading-relaxed">
                  <strong className="text-caesoft-green">Garantimos que não coletamos nenhuma informação pessoal</strong>{" "}
                  dos visitantes deste site. Não utilizamos cookies de rastreamento, ferramentas de analytics 
                  ou qualquer outro mecanismo que capture dados dos usuários. Este site é puramente informativo 
                  e respeita completamente sua privacidade.
                </p>
              </div>

              {/* Uso Adequado */}
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-caesoft-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-light mb-3">Uso Adequado</h3>
                  <p className="text-light-dimmed leading-relaxed mb-4">
                    Você concorda em usar este site apenas para fins legítimos e de acordo com estes termos. 
                    É proibido:
                  </p>
                  <ul className="text-light-dimmed space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Usar o site para qualquer finalidade ilegal ou não autorizada
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Tentar acessar áreas restritas ou comprometer a segurança do site
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Reproduzir ou distribuir conteúdo sem autorização
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Usar o site de forma que possa prejudicar seu funcionamento
                    </li>
                  </ul>
                </div>
              </div>

              {/* Propriedade Intelectual */}
              <div className="flex items-start space-x-4">
                <Scale className="w-6 h-6 text-caesoft-purple mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-light mb-3">Propriedade Intelectual</h3>
                  <p className="text-light-dimmed leading-relaxed">
                    Todo o conteúdo presente neste site, incluindo textos, imagens, logos e design, 
                    é propriedade do CAESoft e da UEPA, protegido pelas leis de direitos autorais. 
                    O uso do conteúdo para fins educacionais e informativos é permitido, desde que 
                    seja devidamente creditado.
                  </p>
                </div>
              </div>

              {/* Modificações */}
              <div className="bg-navy-light/30 border border-caesoft-purple/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-caesoft-purple mb-3">Modificações dos Termos</h3>
                <p className="text-light-dimmed">
                  Reservamo-nos o direito de modificar estes termos de uso a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após sua publicação nesta página. 
                  É responsabilidade do usuário verificar periodicamente os termos atualizados.
                </p>
              </div>

              {/* Contato */}
              <div className="bg-caesoft-green/10 border border-caesoft-green/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-caesoft-green mb-3">Entre em Contato</h3>
                <p className="text-light-dimmed">
                  Para dúvidas sobre estes termos de uso ou sobre o CAESoft, entre em contato conosco:
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-light-dimmed">
                    <strong>E-mail:</strong> 
                    <a href="mailto:caesoft@aluno.uepa.br" className="text-caesoft-green hover:underline ml-1">
                      caesoft@aluno.uepa.br
                    </a>
                  </p>
                  <p className="text-light-dimmed">
                    <strong>Instituição:</strong> Universidade do Estado do Pará - UEPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
