import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact/contact-page-content"

export const metadata: Metadata = {
  title: "Contato - DigiMig",
  description: "Entre em contato para solicitar um orçamento ou tirar suas dúvidas.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  )
}
