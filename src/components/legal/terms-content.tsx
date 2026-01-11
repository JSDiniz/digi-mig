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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Termos de Serviço
          </h1>

          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <Card className="bg-card">
            <CardContent className="p-8 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bem-vindo à DigiMig. Estes Termos de Serviço regem o uso de
                  nossos serviços, plataformas digitais e soluções tecnológicas.
                  Ao acessar, contratar ou utilizar qualquer serviço da
                  DigiMig, você concorda integralmente com estes termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Serviços Oferecidos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig oferece, entre outros, os seguintes serviços:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Desenvolvimento de websites e landing pages</li>
                  <li>Desenvolvimento de aplicativos web e mobile</li>
                  <li>Criação e operação de plataformas SaaS</li>
                  <li>Automação de processos e fluxos de comunicação</li>
                  <li>Integrações com APIs e serviços de terceiros</li>
                  <li>Consultoria em tecnologia e soluções digitais</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  3. Responsabilidades do Cliente
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O cliente ou usuário compromete-se a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Fornecer informações corretas e atualizadas</li>
                  <li>Utilizar as plataformas de forma lícita e ética</li>
                  <li>Obter consentimento de seus usuários finais quando aplicável</li>
                  <li>Não utilizar os serviços para fins ilegais ou abusivos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  4. Propriedade Intelectual
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todo o conteúdo, código-fonte, interfaces e soluções
                  desenvolvidas permanecem protegidos por direitos autorais.
                  A titularidade será definida conforme contrato ou proposta
                  comercial específica.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  5. Prazos, Disponibilidade e Manutenção
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig envida esforços para manter seus serviços
                  disponíveis, mas não garante operação ininterrupta. Poderão
                  ocorrer manutenções programadas ou indisponibilidades
                  temporárias.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  6. Pagamentos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Valores, planos, formas de pagamento e condições serão
                  definidos em proposta comercial, contrato ou página específica
                  do serviço contratado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  7. Limitação de Responsabilidade
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig não se responsabiliza por danos indiretos, perdas de
                  dados, lucros cessantes ou falhas decorrentes do uso
                  inadequado das plataformas ou serviços disponibilizados.
                </p>
              </section>

              {/* 🔐 COMUNICAÇÃO E CONSENTIMENTOS */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  8. Comunicação, Notificações e Mensagens Automatizadas
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  As plataformas desenvolvidas e operadas pela DigiMig podem
                  realizar o envio de comunicações automáticas ou manuais por
                  meios digitais, como WhatsApp, email, SMS ou notificações
                  internas.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essas comunicações possuem caráter informativo, operacional
                  ou de aviso, incluindo, mas não se limitando a:
                </p>

                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Confirmações de ações realizadas na plataforma</li>
                  <li>Lembretes, atualizações ou alertas importantes</li>
                  <li>Avisos sobre status de serviços ou agendamentos</li>
                  <li>Solicitações de confirmação ou validação de informações</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  O envio dessas mensagens ocorre como parte necessária da
                  execução do serviço contratado ou mediante consentimento
                  do usuário final, não sendo utilizadas para fins de spam.
                </p>

                {/* 🔑 DIFERENCIAÇÃO DE MARKETING */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O envio de comunicações de caráter promocional, publicitário
                  ou de marketing, como ofertas, campanhas, descontos ou
                  divulgações de serviços, ocorre exclusivamente mediante
                  consentimento opcional, livre e informado do usuário final.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  A recusa ou revogação do consentimento para comunicações
                  promocionais não impede o recebimento de mensagens
                  operacionais essenciais para a execução dos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  9. Proteção de Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig realiza o tratamento de dados pessoais conforme a
                  legislação vigente, em especial a Lei Geral de Proteção de
                  Dados (LGPD), atuando como controladora ou operadora,
                  conforme o contexto do serviço prestado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  10. Alterações nos Termos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estes Termos de Serviço podem ser alterados a qualquer momento.
                  O uso contínuo dos serviços após alterações representa a
                  aceitação da versão atualizada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas ou solicitações relacionadas a estes Termos,
                  entre em contato pelo email contato@digimig.com.br ou através
                  de nossos canais oficiais.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
