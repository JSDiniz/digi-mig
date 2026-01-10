"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Shield,
  TrendingUp,
  Lightbulb,
  Heart,
  Sliders,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Qualidade",
    description:
      "Entregamos soluções bem construídas, com código limpo, design moderno e alta performance.",
  },
  {
    icon: Shield,
    title: "Transparência",
    description:
      "Prezamos por comunicação clara, prazos definidos e processos honestos do início ao fim.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description:
      "Cada projeto é pensado para gerar conversão, visibilidade e retorno para o cliente.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Utilizamos tecnologias modernas e boas práticas para criar soluções atuais, eficientes e seguras.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    description:
      "Tratamos cada projeto como único, com responsabilidade, atenção aos detalhes e dedicação total.",
  },
  {
    icon: Sliders,
    title: "Simplicidade",
    description:
      "Criamos soluções objetivas, sem complicações desnecessárias, focadas no que realmente importa para o negócio.",
  },
];

const technologies = [
  "ReactJS",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "TypeORM",
  "PostgreSQL",
  "React Native",
];

export function AboutPageContent() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Sobre a DigiMig
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            A DigiMig é uma agência digital especializada em desenvolvimento web
            e soluções digitais modernas, criada com o propósito de transformar
            ideias em experiências digitais eficientes e orientadas a
            resultados.
          </p>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Fundada por um Desenvolvedor Full Stack, a DigiMig une tecnologia de
            ponta, design moderno e estratégia digital para criar soluções que
            ajudam empresas e profissionais a fortalecer sua presença online e
            gerar mais oportunidades de negócio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20 space-y-8"
        >
          <Card className="bg-card">
            <CardContent className="p-8 md:p-12">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada projeto é desenvolvido com foco em qualidade, performance e
                conversão, utilizando boas práticas de código, interfaces
                modernas e soluções escaláveis, sempre alinhadas às reais
                necessidades de cada cliente.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nossa Missão
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Criar soluções digitais modernas e eficientes que transformem
                ideias em resultados, ajudando empresas e profissionais a
                conquistarem presença online com performance, design e
                tecnologia de qualidade.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nossa Visão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como uma agência digital de referência em
                desenvolvimento web, oferecendo soluções simples, inteligentes e
                escaláveis, focadas em crescimento real para os clientes.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 text-primary">
                      <value.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance">
            Stack Tecnológica
          </h2>
          <Card className="bg-card">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6 text-center">
                Trabalhamos com as principais tecnologias do mercado, entre
                elas:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
