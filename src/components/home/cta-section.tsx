"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Entre em contato e descubra como podemos impulsionar seu negócio digital.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg group">
            <Link href="/contato">
              Solicitar Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
