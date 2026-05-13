"use client"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowUpRight } from "lucide-react"

export const AiAssistantSection = () => {
  return (
    <Section id="ai-assistant">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Assistente de IA <span className="text-gradient">CAESoft</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Tire suas dúvidas sobre o curso de Engenharia de Software e a UEPA com nosso assistente de IA treinado.
            </p>
          </div>

          <div className="bg-navy-dark rounded-lg shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-4">
                <Sparkles className="text-caesoft-purple mr-3" size={24} />
                <h3 className="text-xl font-semibold text-caesoft-light">Converse com o Assistente</h3>
              </div>
              <p className="text-light-dimmed mb-6">
                Para interagir com o assistente, você precisa estar logado na sua conta OpenAI. Se o chat não carregar,
                clique no botão abaixo para abri-lo em uma nova aba.
              </p>
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe
                  src="https://chatgpt.com/g/g-68784402a7c88191a1a63c6d3d909a22-assistente-de-engenharia-de-software-da-uepa"
                  className="w-full h-[600px] border-0 rounded-md"
                  title="Assistente de IA do CAESoft"
                ></iframe>
              </div>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                >
                  <a
                    href="https://chatgpt.com/g/g-68784402a7c88191a1a63c6d3d909a22-assistente-de-engenharia-de-software-da-uepa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar em nova aba
                    <ArrowUpRight className="ml-2" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
