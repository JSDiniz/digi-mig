import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/services/services-page-content"

export const metadata: Metadata = {
  title: "Serviços - DigiMig",
  description:
    "Landing pages de alta conversão, websites institucionais e suporte mensal. Soluções digitais para pequenos e médios negócios.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ServicesPageContent />
      </main>
      <Footer />
    </div>
  )
}
