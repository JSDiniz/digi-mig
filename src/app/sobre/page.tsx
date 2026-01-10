import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/about/about-page-content"

export const metadata: Metadata = {
  title: "Sobre - DigiMig",
  description: "Conheça a DigiMig, agência digital focada em tecnologia moderna e resultados.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  )
}
