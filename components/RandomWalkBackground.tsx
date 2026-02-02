'use client'

import { useEffect, useRef, useState } from 'react'

interface RandomWalkBackgroundProps {
  start?: boolean
}

export default function RandomWalkBackground({ start = false }: RandomWalkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const pathRef = useRef<Array<{ x: number; y: number }>>([])
  const isCompleteRef = useRef(false)
  const fadeProgressRef = useRef(0)

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Reset when dimensions change or start changes
    if (start && pathRef.current.length === 0) {
      pathRef.current = []
      isCompleteRef.current = false
      fadeProgressRef.current = 0

      // Start position on the left side, random Y
      const startY = dimensions.height / 2 + (Math.random() - 0.5) * 200
      pathRef.current = [{ x: 0, y: startY }]
    }

    const drawRandomWalk = () => {
      if (!start) return

      const current = pathRef.current[pathRef.current.length - 1]
      
      // If we've reached the right side, start fading
      if (current.x >= dimensions.width && !isCompleteRef.current) {
        isCompleteRef.current = true
      }

      // Continue generating points until we reach the right
      if (!isCompleteRef.current) {
        const stepSize = 1.5
        const nextX = current.x + stepSize
        const randomValue = Math.random()
        const verticalStep = randomValue < 0.55 ? -15 : 15
        const nextY = current.y + verticalStep
        
        const clampedY = Math.max(0, Math.min(dimensions.height, nextY))
        pathRef.current.push({ x: nextX, y: clampedY })
      } else {
        fadeProgressRef.current += 0.00375
        if (fadeProgressRef.current >= 1) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          return
        }
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw the path
      if (isCompleteRef.current && pathRef.current.length > 0 && fadeProgressRef.current < 1) {
        // Fade effect: remove points from left to right
        const maxX = pathRef.current[pathRef.current.length - 1].x
        const fadeThreshold = fadeProgressRef.current * maxX
        
        let fadeStartIndex = pathRef.current.length
        for (let i = 0; i < pathRef.current.length; i++) {
          if (pathRef.current[i].x >= fadeThreshold) {
            fadeStartIndex = i
            break
          }
        }

        if (fadeStartIndex < pathRef.current.length - 1) {
          ctx.strokeStyle = '#ff6b35'
          ctx.lineWidth = 1.5
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'
          
          ctx.beginPath()
          ctx.moveTo(pathRef.current[fadeStartIndex].x, pathRef.current[fadeStartIndex].y)
          
          for (let i = fadeStartIndex + 1; i < pathRef.current.length; i++) {
            ctx.lineTo(pathRef.current[i].x, pathRef.current[i].y)
          }
          
          ctx.stroke()
        }
      } else if (!isCompleteRef.current && pathRef.current.length > 0) {
        // Draw the full path
        ctx.strokeStyle = '#ff6b35'
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        
        ctx.beginPath()
        ctx.moveTo(pathRef.current[0].x, pathRef.current[0].y)
        
        for (let i = 1; i < pathRef.current.length; i++) {
          ctx.lineTo(pathRef.current[i].x, pathRef.current[i].y)
        }
        
        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(drawRandomWalk)
    }

    if (start) {
      drawRandomWalk()
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, start])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}
