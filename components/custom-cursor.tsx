'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 800 })
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 800 })

  const trail1X = useSpring(cursorX, { damping: 25, stiffness: 400 })
  const trail1Y = useSpring(cursorY, { damping: 25, stiffness: 400 })
  const trail2X = useSpring(cursorX, { damping: 28, stiffness: 350 })
  const trail2Y = useSpring(cursorY, { damping: 28, stiffness: 350 })
  const trail3X = useSpring(cursorX, { damping: 31, stiffness: 300 })
  const trail3Y = useSpring(cursorY, { damping: 31, stiffness: 300 })

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
    }

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e)
      const target = e.target as HTMLElement
      const isInteractive = target.closest(
        'button, a, [role="button"], input, textarea, select, [data-cursor-hover]'
      )
      setIsHovering(!!isInteractive)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => {
      setIsHidden(false)
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    document.body.style.cursor = 'none'

    const timeout = setTimeout(() => setIsVisible(true), 300)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'auto'
      clearTimeout(timeout)
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  if (!isVisible && isHidden) return null

  const trailDots = [
    { x: trail1X, y: trail1Y, size: 4.5, opacity: 0.35 },
    { x: trail2X, y: trail2Y, size: 3, opacity: 0.25 },
    { x: trail3X, y: trail3Y, size: 1.5, opacity: 0.15 },
  ]

  return (
    <>
      {trailDots.map((dot, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[99998]"
          style={{
            x: dot.x,
            y: dot.y,
          }}
        >
          <motion.div
            animate={{
              opacity: isHidden ? 0 : dot.opacity,
            }}
            className="rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              backgroundColor: 'var(--color-accent)',
            }}
          />
        </motion.div>
      ))}

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 8,
            height: 8,
            backgroundColor: isHovering ? 'var(--color-accent)' : '#ffffff',
            boxShadow: isHovering
              ? '0 0 10px var(--color-accent)'
              : '0 0 6px rgba(255,255,255,0.4)',
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 1.2 : isHovering ? 2 : 1.5,
          opacity: isClicking ? 0.25 : isHovering ? 0.12 : 0.05,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 28,
            height: 28,
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </>
  )
}