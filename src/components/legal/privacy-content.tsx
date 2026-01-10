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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <Card className="bg-card">
            <CardContent className="p-8 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A DigiMig respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política
                  de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações quando você
                  utiliza nossos serviços ou visita nosso website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Coleta de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Coletamos as seguintes informações:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Dados de identificação: nome, email, telefone</li>
                  <li>Informações empresariais: nome da empresa, cargo, setor de atuação</li>
                  <li>Dados de navegação: endereço IP, tipo de navegador, páginas visitadas</li>
                  <li>Informações fornecidas em formulários de contato e orçamento</li>
                  <li>Dados necessários para execução de projetos contratados</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Uso das Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos seus dados para:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Responder solicitações de contato e orçamentos</li>
                  <li>Prestar os serviços contratados</li>
                  <li>Enviar comunicações sobre projetos em andamento</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Cumprir obrigações legais e contratuais</li>
                  <li>Enviar newsletters e materiais informativos (mediante consentimento)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nosso website utiliza cookies para melhorar a experiência de navegação. Cookies são pequenos arquivos
                  de texto armazenados em seu dispositivo. Utilizamos cookies para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Manter suas preferências e configurações</li>
                  <li>Analisar o tráfego e comportamento no site</li>
                  <li>Personalizar conteúdo e anúncios</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades
                  do site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de
                  marketing. Podemos compartilhar dados com:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Prestadores de serviços essenciais (hospedagem, pagamentos, analytics)</li>
                  <li>Autoridades legais quando exigido por lei</li>
                  <li>Parceiros técnicos necessários para execução de projetos (com sua autorização)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todos os terceiros com acesso aos seus dados são obrigados a manter a confidencialidade e segurança
                  das informações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Segurança</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso
                  não autorizado, alteração, divulgação ou destruição. Isso inclui:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Criptografia de dados em trânsito (SSL/TLS)</li>
                  <li>Controle de acesso restrito a informações sensíveis</li>
                  <li>Backups regulares e seguros</li>
                  <li>Monitoramento contínuo de segurança</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta
                  política, exceto quando um período de retenção mais longo for exigido ou permitido por lei. Dados
                  relacionados a projetos finalizados são mantidos conforme obrigações contratuais e legais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Seus Direitos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a exclusão de dados desnecessários ou tratados em desconformidade</li>
                  <li>Revogar consentimento a qualquer momento</li>
                  <li>Solicitar portabilidade de dados</li>
                  <li>Opor-se ao tratamento de dados</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para exercer esses direitos, entre em contato através do email contato@digimig.com.br.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas
                  práticas ou por outros motivos operacionais, legais ou regulatórios. A versão mais recente estará
                  sempre disponível em nosso website com a data da última atualização.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre
                  em contato conosco:
                </p>
                <ul className="list-none text-muted-foreground space-y-1 mt-4">
                  <li>Email: contato@digimig.com.br</li>
                  <li>Website: www.digimig.com.br</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
