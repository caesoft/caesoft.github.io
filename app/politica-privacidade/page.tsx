import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Database, Lock } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do CAESoft - Centro Acadêmico de Engenharia de Software da UEPA. Transparência total sobre como protegemos sua privacidade.',
  openGraph: {
    title: 'Política de Privacidade | CAESoft UEPA',
    description: 'Conheça nossa política de privacidade. O CAESoft tem compromisso fundamental com a proteção da privacidade dos visitantes.',
    url: 'https://caesoft.github.io/politica-privacidade',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaPrivacidade() {
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
            <Shield className="w-12 h-12 text-caesoft-green mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-light-dimmed text-lg max-w-2xl mx-auto">
            Transparência total sobre como protegemos sua privacidade
          </p>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect-light border border-primary-soft rounded-2xl p-8 md:p-12 space-y-8">
            
            {/* Data de atualização */}
            <div className="text-center text-light-muted text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div>

            {/* Seção principal */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Eye className="w-6 h-6 text-caesoft-green mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-light mb-4">Nossa Filosofia de Privacidade</h2>
                  <p className="text-light-dimmed leading-relaxed">
                    O CAESoft - Centro Acadêmico de Engenharia de Software da UEPA - tem o compromisso fundamental 
                    com a proteção da privacidade dos visitantes de nosso site. Nossa abordagem é simples e transparente: 
                    <strong className="text-caesoft-green"> nós não coletamos informações pessoais dos usuários</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Database className="w-6 h-6 text-caesoft-purple mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-light mb-3">Informações que NÃO Coletamos</h3>
                  <ul className="text-light-dimmed space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-green rounded-full mr-3"></span>
                      Dados pessoais (nome, e-mail, telefone)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-green rounded-full mr-3"></span>
                      Informações de localização
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-green rounded-full mr-3"></span>
                      Histórico de navegação
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-green rounded-full mr-3"></span>
                      Cookies de rastreamento
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-caesoft-green rounded-full mr-3"></span>
                      Dados de uso detalhados
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Lock className="w-6 h-6 text-caesoft-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-light mb-3">Nosso Compromisso</h3>
                  <p className="text-light-dimmed leading-relaxed">
                    Este site é puramente informativo, desenvolvido para divulgar as atividades do Centro Acadêmico 
                    de Engenharia de Software da UEPA. Não utilizamos ferramentas de analytics, cookies de rastreamento 
                    ou qualquer outro mecanismo que colete dados dos visitantes.
                  </p>
                </div>
              </div>

              <div className="bg-navy-light/30 border border-caesoft-green/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-caesoft-green mb-3">Contato e Dúvidas</h3>
                <p className="text-light-dimmed">
                  Se você tiver alguma dúvida sobre nossa política de privacidade ou sobre o funcionamento 
                  do nosso site, entre em contato conosco através do e-mail: 
                  <a href="mailto:caesoft@aluno.uepa.br" className="text-caesoft-green hover:underline ml-1">
                    caesoft@aluno.uepa.br
                  </a>
                </p>
              </div>

              <div className="bg-caesoft-purple/10 border border-caesoft-purple/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-caesoft-purple mb-3">Atualizações desta Política</h3>
                <p className="text-light-dimmed">
                  Esta política de privacidade pode ser atualizada periodicamente para refletir mudanças 
                  em nossos procedimentos ou na legislação aplicável. Quaisquer alterações serão publicadas 
                  nesta página com a data de atualização correspondente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 