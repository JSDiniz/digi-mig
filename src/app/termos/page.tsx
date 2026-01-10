import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/legal/terms-content"

export const metadata: Metadata = {
  title: "Termos de Serviço - DigiMig",
  description: "Termos e condições de uso dos serviços da DigiMig.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <TermsContent />
      </main>
      <Footer />
    </div>
  )
}
