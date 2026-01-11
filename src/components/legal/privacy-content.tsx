"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function PrivacyContent() {
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
            Política de Privacidade
          </h1>

          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <Card className="bg-card">
            <CardContent className="p-8 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig respeita sua privacidade e está comprometida em
                  proteger os dados pessoais tratados por meio de seus sites,
                  plataformas digitais, aplicações e serviços. Esta Política
                  descreve como coletamos, utilizamos, armazenamos e protegemos
                  essas informações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Coleta de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos coletar os seguintes dados pessoais:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Dados de identificação: nome, email, telefone</li>
                  <li>Informações profissionais ou empresariais</li>
                  <li>Dados de navegação: IP, navegador, páginas acessadas</li>
                  <li>Informações fornecidas em formulários</li>
                  <li>
                    Dados necessários para execução de serviços ou uso das
                    plataformas
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Uso das Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os dados coletados poderão ser utilizados para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Operar e disponibilizar nossos serviços e plataformas</li>
                  <li>Responder solicitações e contatos</li>
                  <li>Executar obrigações contratuais</li>
                  <li>Enviar comunicações operacionais e informativas</li>
                  <li>Melhorar funcionalidades e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos cookies e tecnologias semelhantes para melhorar a
                  navegação, analisar o uso do site e personalizar conteúdos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O usuário pode configurar seu navegador para bloquear cookies,
                  ciente de que algumas funcionalidades podem ser afetadas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  5. Compartilhamento de Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig não comercializa dados pessoais. O compartilhamento
                  poderá ocorrer apenas quando necessário, com:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provedores de infraestrutura e tecnologia</li>
                  <li>Serviços de pagamento e autenticação</li>
                  <li>Ferramentas de análise e monitoramento</li>
                  <li>Autoridades legais, quando exigido por lei</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Segurança</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Adotamos medidas técnicas e organizacionais para proteger os
                  dados pessoais contra acessos não autorizados, vazamentos,
                  perdas ou alterações indevidas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os dados pessoais são mantidos apenas pelo tempo necessário
                  para cumprir as finalidades para as quais foram coletados,
                  respeitando prazos legais e contratuais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Direitos do Titular</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos termos da LGPD, o titular dos dados pode exercer seus
                  direitos, incluindo acesso, correção, exclusão, portabilidade
                  e revogação do consentimento.
                </p>
              </section>

              {/* 🔔 COMUNICAÇÕES OPERACIONAIS */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  9. Comunicações Digitais e Mensagens Automatizadas
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As plataformas, sistemas e serviços desenvolvidos ou operados
                  pela DigiMig podem realizar comunicações com usuários por
                  meios digitais, incluindo WhatsApp, email, SMS e notificações
                  internas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essas comunicações possuem caráter informativo, operacional ou
                  transacional, como confirmações, lembretes, avisos,
                  atualizações de status ou solicitações de validação.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O envio ocorre com base no consentimento do titular ou quando
                  necessário para a execução do serviço contratado, sempre em
                  conformidade com a LGPD, sendo vedado o uso para spam ou
                  marketing não autorizado.
                </p>
              </section>

              {/* 📢 MARKETING (CONSENTIMENTO OPCIONAL) */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  9.1 Comunicações de Marketing e Promoções
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O envio de comunicações com finalidade promocional, comercial
                  ou de marketing, como ofertas, descontos, campanhas e
                  divulgações de serviços, ocorrerá somente mediante
                  consentimento específico e opcional do titular dos dados.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O titular poderá revogar esse consentimento a qualquer momento,
                  por meio dos canais de comunicação disponibilizados, sem
                  prejuízo do uso dos serviços contratados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  10. Alterações nesta Política
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta Política pode ser atualizada periodicamente. A versão
                  vigente estará sempre disponível em nossos canais oficiais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para dúvidas relacionadas a esta Política de Privacidade,
                  entre em contato pelo email contato@digimig.com.br.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
