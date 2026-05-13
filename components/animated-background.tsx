"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      connections: number[]
      color: string
      size: number
    }> = []

    for (let i = 0; i < 70; i++) {
      const colors = [
        "rgba(89, 62, 255, 0.7)",
        "rgba(13, 239, 124, 0.6)",
        "rgba(236, 242, 249, 0.4)",
      ]

      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        connections: [],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 130) {
            const opacity = ((130 - distance) / 130) * 0.25
            const connectionColor =
              i % 2 === 0
                ? `rgba(89, 62, 255, ${opacity})`
                : `rgba(13, 239, 124, ${opacity * 0.8})`

            ctx.strokeStyle = connectionColor
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node, index) => {
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
        if (index % 7 === 0) {
          ctx.shadowColor = index % 2 === 0 ? "#593EFF" : "#0DEF7C"
          ctx.shadowBlur = 15
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-50" style={{ pointerEvents: "none" }} />
}
