"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Globe, Wrench, Code, Palette, Database, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    description: "Criação de landing pages modernas e responsivas focadas em gerar conversão para o seu negócio.",
    features: [
      "Design focado em conversão",
      "CTA integrado (WhatsApp, formulário)",
      "SEO básico incluído",
      "Performance otimizada",
      "Totalmente responsivo",
    ],
  },
  {
    icon: Globe,
    title: "Websites Institucionais",
    description: "Websites profissionais para empresas com estrutura simples, objetiva e design moderno.",
    features: [
      "Páginas: Home, Sobre, Serviços e Contato",
      "Design moderno e responsivo",
      "SEO básico incluído",
      "Boa performance e velocidade",
      "Fácil atualização de conteúdo",
    ],
  },
  {
    icon: Wrench,
    title: "Suporte e Manutenção Mensal",
    description: "Mantenha seu site sempre atualizado e funcionando perfeitamente com nosso suporte técnico.",
    features: [
      "Atualizações simples de conteúdo",
      "Correções de bugs",
      "Pequenas melhorias contínuas",
      "Suporte técnico",
      "Monitoramento de performance",
    ],
  },
]

const technologies = [
  { icon: Code, name: "React & Next.js" },
  { icon: Palette, name: "TypeScript" },
  { icon: Database, name: "Node.js & PostgreSQL" },
  { icon: Smartphone, name: "React Native" },
]

export function ServicesPageContent() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Nossos Serviços</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Soluções digitais enxutas, modernas e eficientes, focadas em gerar presença online e conversão
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Tecnologias que Utilizamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card hover:bg-card/80 transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <tech.icon size={24} />
                    </div>
                    <p className="font-medium leading-tight h-[2.5em]">{tech.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
