"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, children, className = "" }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Much more aggressive settings for mobile, especially for content-heavy sections
    const isContentHeavySection = id === 'course' || id === 'about-caesoft' || id === 'resources'
    
    const observerOptions = {
      threshold: isMobile ? (isContentHeavySection ? 0.01 : 0.03) : 0.1, // Very low threshold for mobile content-heavy sections
      rootMargin: isMobile ? 
        (isContentHeavySection ? "100px 0px -50px 0px" : "80px 0px -30px 0px") : 
        "20px 0px -10px 0px", // Start animation much earlier on mobile
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      observerOptions,
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isMobile])

  const getMinHeight = () => {
    if (!isMobile) return 'min-h-screen'
    
    // Hero section needs full height on mobile
    if (id === 'home') return 'min-h-screen'
    
    // Other sections can use smaller height on mobile
    return 'min-h-[60vh]'
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${getMinHeight()} flex items-center justify-center ${isMobile ? 'py-10' : 'py-20'} transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  )
}
