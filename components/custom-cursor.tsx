'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverText, setHoverText] = useState('')

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10)
      cursorY.set(e.clientY - 10)
    }

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e)

      const target = e.target as HTMLElement
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select')
      setIsHovering(!!isInteractive)
      
      if (isInteractive) {
        const isLink = target.closest('a')
        if (isLink) {
          setHoverText('Ir')
        } else {
          setHoverText('')
        }
      } else {
        setHoverText('')
      }
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

    const timeout = setTimeout(() => setIsVisible(true), 500)

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

  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => {
        const delay = i * 0.025
        const scale = 1 - i * 0.12
        const opacity = 0.35 - i * 0.06
        const size = 12 - i * 2
        
        return (
          <motion.div
            key={i}
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              x: cursorX.get() + delay * 50,
              y: cursorY.get() + delay * 50,
            }}
            transition={{ type: 'spring', stiffness: 150 - i * 20, damping: 20 }}
          >
            <motion.div
              animate={{
                scale: isHidden ? 0 : scale,
                opacity: isHidden ? 0 : opacity,
              }}
              transition={{ duration: 0.15 }}
              className="rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: 'var(--color-accent)',
              }}
            />
          </motion.div>
        )
      })}

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
            opacity: isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="relative"
        >
          <div
            className="rounded-full"
            style={{
              width: 12,
              height: 12,
              backgroundColor: isHovering ? 'var(--color-accent)' : 'white',
              boxShadow: isHovering ? '0 0 20px var(--color-accent)' : 'none',
            }}
          />
          
          {isHovering && hoverText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%' }}
              exit={{ opacity: 0, scale: 0.8, x: '-50%' }}
              className="absolute top-full left-1/2 mt-2 whitespace-nowrap"
            >
              <span 
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: 'var(--color-accent)', 
                  color: '#0a0f0c' 
                }}
              >
                {hoverText} →
              </span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 1.5 : isHovering ? 3 : 2.5,
            opacity: isHidden ? 0 : isHovering ? 0.15 : 0.08,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full"
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'var(--color-accent)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
    </>
  )
}