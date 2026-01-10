"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function TermsContent() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Termos de Serviço</h1>
          <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <Card className="bg-card">
            <CardContent className="p-8 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bem-vindo à DigiMig. Estes Termos de Serviço regem o uso de nossos serviços de desenvolvimento web,
                  landing pages, automação de processos e aplicativos web/mobile. Ao contratar nossos serviços, você
                  concorda com estes termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Serviços Oferecidos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">A DigiMig oferece os seguintes serviços:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Desenvolvimento de websites responsivos e modernos</li>
                  <li>Criação de landing pages otimizadas para conversão</li>
                  <li>Automação de processos empresariais</li>
                  <li>Desenvolvimento de aplicativos web e mobile</li>
                  <li>Consultoria em tecnologia e soluções digitais</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Responsabilidades do Cliente</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">O cliente é responsável por:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>
                    Fornecer todas as informações, conteúdos e materiais necessários para o desenvolvimento do projeto
                  </li>
                  <li>Responder às solicitações de feedback e aprovações dentro dos prazos acordados</li>
                  <li>Garantir que possui os direitos necessários sobre todo o conteúdo fornecido</li>
                  <li>Realizar os pagamentos conforme acordado no contrato</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Após o pagamento integral dos serviços, o cliente terá propriedade completa do produto final
                  desenvolvido. A DigiMig mantém o direito de usar o projeto em seu portfólio, salvo acordo em
                  contrário. Códigos, frameworks e bibliotecas de terceiros permanecem sob suas respectivas licenças
                  originais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Prazos e Entregas</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os prazos de entrega são estimativas baseadas no escopo acordado. Atrasos causados por falta de
                  informações do cliente, mudanças no escopo ou fatores fora do controle da DigiMig podem resultar em
                  ajustes nos prazos. Comunicaremos qualquer alteração de prazo com antecedência.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Pagamentos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os valores e condições de pagamento serão definidos em proposta comercial específica. Geralmente,
                  solicitamos um adiantamento no início do projeto e o saldo final antes da entrega. Projetos não serão
                  entregues até a quitação total dos valores acordados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Garantia e Suporte</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Oferecemos garantia contra bugs e erros de programação por um período definido após a entrega
                  (geralmente 30 dias). Alterações de escopo, novas funcionalidades ou melhorias solicitadas após a
                  entrega serão orçadas separadamente. Serviços de manutenção contínua podem ser contratados à parte.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig não será responsável por danos indiretos, lucros cessantes ou perdas de dados. Nossa
                  responsabilidade máxima limita-se ao valor total pago pelo cliente pelo serviço específico. Não nos
                  responsabilizamos por problemas causados por ações de terceiros, modificações não autorizadas ou uso
                  inadequado do produto entregue.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Cancelamento e Reembolso</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O cliente pode solicitar o cancelamento do projeto a qualquer momento. Neste caso, será cobrado
                  proporcionalmente ao trabalho já realizado, incluindo custos de terceiros já incorridos. Adiantamentos
                  não são reembolsáveis após o início dos trabalhos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Alterações nos Termos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig reserva-se o direito de modificar estes termos a qualquer momento. Mudanças substanciais
                  serão comunicadas aos clientes com antecedência razoável. O uso continuado de nossos serviços após
                  alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões relacionadas a estes Termos de Serviço, entre em contato conosco através do email
                  contato@digimig.com.br ou pela página de contato em nosso website.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
