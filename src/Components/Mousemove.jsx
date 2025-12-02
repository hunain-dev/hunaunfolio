'use client'
import React, { useEffect, useRef } from 'react'

const Mousemove = () => {
  const canvasRef = useRef(null)
  const trailRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(null)
  const lastPointTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
      
      const now = Date.now()
      // Throttle: add point only every 16ms (~60fps)
      if (now - lastPointTimeRef.current >= 16) {
        // Add new point to trail
        trailRef.current.push({
          x: e.clientX,
          y: e.clientY,
          time: now
        })
        lastPointTimeRef.current = now
        
        // Keep only recent points (last 600ms)
        trailRef.current = trailRef.current.filter(
          point => now - point.time < 600
        )
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const trail = trailRef.current
      if (trail.length < 2) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      // Draw ribbon trail
      for (let i = 0; i < trail.length - 1; i++) {
        const current = trail[i]
        const next = trail[i + 1]
        const progress = i / trail.length
        
        // Color interpolation
        const colors = ['black',]
        const colorIndex = Math.floor(progress * (colors.length - 1))
        const color1 = colors[colorIndex]
        
        // Calculate opacity based on age
        const age = Date.now() - current.time
        const maxAge = 600
        const opacity = Math.max(0, 1 - (age / maxAge))
        
        // Calculate thickness
        const baseThickness = 45
        const thickness = baseThickness * (1 - progress) * opacity
        
        ctx.beginPath()
        ctx.moveTo(current.x, current.y)
        ctx.lineTo(next.x, next.y)
        ctx.strokeStyle = color1
        ctx.lineWidth = thickness
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.globalAlpha = opacity
        ctx.stroke()
      }
      
      ctx.globalAlpha = 1
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0  left-0 h-screen w-screen pointer-events-none'
      style={{ background: 'transparent', zIndex: 9999 }}
    />
  )
}

export default Mousemove