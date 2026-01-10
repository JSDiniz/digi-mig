import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "DigiMig - Transformamos ideias em experiências digitais",
  description: "Agência digital especializada em desenvolvimento web, landing pages, automação e aplicativos.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
