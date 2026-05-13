"use client"

import { useEffect } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollGear } from "@/components/scroll-gear"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutCaesoftSection } from "@/components/sections/about-caesoft-section"
import { AiAssistantSection } from "@/components/sections/ai-assistant-section"
import { SocialMediaSection } from "@/components/sections/social-media-section"
import { DirectorshipSection } from "@/components/sections/directorship-section"
import { AboutCourseSection } from "@/components/sections/about-course-section"
import { AboutCampusSection } from "@/components/sections/about-campus-section"
import { ResourcesSection } from "@/components/sections/resources-section"
import { PartnersSection } from "@/components/sections/partners-section"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
    
    window.addEventListener("beforeunload", handleBeforeUnload)
    
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return (
    <div className="relative min-h-screen z-10">
      <AnimatedBackground />
      <ScrollGear />
      <ScrollProgress />
      <Navbar />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutCaesoftSection />
      <SocialMediaSection />
      <DirectorshipSection />
      <AboutCourseSection />
      <AiAssistantSection />
      <AboutCampusSection />
      <ResourcesSection />
      <PartnersSection />
      
      <Footer />
    </div>
  )
}
