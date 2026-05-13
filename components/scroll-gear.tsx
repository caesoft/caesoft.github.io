"use client"

import { useEffect, useState } from "react"
import { Settings } from "lucide-react"

export function ScrollGear() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollY / maxScroll
      setRotation(scrollProgress * 360)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 opacity-15 pointer-events-none overflow-hidden">
      <Settings
        size={800}
        className="text-caesoft-purple/40 transition-transform duration-100 ease-out"
        style={{
          transform: `rotate(${rotation}deg)`,
          filter: "drop-shadow(0 0 30px rgba(89, 62, 255, 0.3))",
          transformOrigin: "center center",
        }}
      />
    </div>
  )
}
