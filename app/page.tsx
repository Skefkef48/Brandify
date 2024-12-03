'use client'

import { useRef } from 'react'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { ServicesTags } from "@/components/services-tags"
import { Team } from "@/components/team"
import { Projects } from "@/components/projects"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ background: '#121212' }}>
      <Header 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          services: () => scrollToSection(servicesRef),
          team: () => scrollToSection(teamRef),
          projects: () => scrollToSection(projectsRef),
          pricing: () => scrollToSection(pricingRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      <main>
        <Hero onAboutClick={() => scrollToSection(aboutRef)} />
        <AboutUs ref={aboutRef} />
        <Services ref={servicesRef} />
        <ServicesTags />
        <Team ref={teamRef} />
        <Projects ref={projectsRef} />
        <Pricing ref={pricingRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  )
}

