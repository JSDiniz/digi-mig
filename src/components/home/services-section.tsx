"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Globe, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    description: "Criação de landing pages modernas e responsivas, com design focado em conversão e CTA integrado.",
  },
  {
    icon: Globe,
    title: "Websites Institucionais",
    description:
      "Websites profissionais com estrutura simples e objetiva. Design moderno, responsivo e com SEO básico.",
  },
  {
    icon: Wrench,
    title: "Suporte e Manutenção Mensal",
    description: "Atualizações de conteúdo, correções de bugs, melhorias contínuas e suporte técnico.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluções digitais enxutas, modernas e eficientes para pequenos e médios negócios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
