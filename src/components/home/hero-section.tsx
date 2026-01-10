"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles size={16} />
              Agência Digital Moderna
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            Transformamos ideias em <span className="text-primary text-glow">experiências digitais</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto"
          >
            Desenvolvimento de websites modernos, landing pages de alta conversão, automação de processos e aplicativos
            web/mobile com tecnologia de ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg group">
              <Link href="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
              <Link href="/servicos">Ver Serviços</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
    </section>
  )
}
