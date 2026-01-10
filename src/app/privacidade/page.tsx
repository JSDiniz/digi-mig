import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PrivacyContent } from "@/components/legal/privacy-content"

export const metadata: Metadata = {
  title: "Política de Privacidade - DigiMig",
  description: "Política de privacidade e proteção de dados da DigiMig.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  )
}
