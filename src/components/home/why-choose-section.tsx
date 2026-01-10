"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Shield, Lightbulb, Target } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Rocket,
    title: "Tecnologia Moderna",
    description: "Utilizamos as tecnologias mais atuais: React, Next.js, TypeScript, Node.js...",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Desenvolvimento orientado a conversão e performance do seu negócio.",
  },
  {
    icon: Lightbulb,
    title: "Código Escalável",
    description: "Soluções prontas para crescer junto com o seu projeto.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Código limpo, testado e preparado para produção.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Por que escolher a DigiMig?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprometimento com excelência e inovação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 text-primary">
                    <reason.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-pretty">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
