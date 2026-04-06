'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 800 }
  const cursorXSpring = useSpring(cursorX, { ...springConfig, stiffness: 800 })
  const cursorYSpring = useSpring(cursorY, { ...springConfig, stiffness: 800 })

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverText, setHoverText] = useState('')

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
    }

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e)

      const target = e.target as HTMLElement
      const isInteractive = target.closest(
        'button, a, [role="button"], input, textarea, select, ' +
        '[data-cursor-hover], .accordion-trigger, .carousel-item, ' +
        '.project-card, .faq-item, [data-state="open"], .interactive'
      )
      const isLink = target.closest('a, [href], [data-link]')
      
      setIsHovering(!!isInteractive)
      setHoverText(isLink ? 'Ir' : '')
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

    const forceCursorNone = () => {
      const selectors = [
        'button', 'a', 'input', 'textarea', 'select',
        '[role="button"]', '[data-cursor-hover]',
        '.accordion-trigger', '.carousel-item',
        '.project-card', '.faq-item'
      ]

      selectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            (el as HTMLElement).style.cursor = 'none'
          })
        } catch (e) {
          // Ignore invalid selectors
        }
      })
    }

    forceCursorNone()

    const observer = new MutationObserver(forceCursorNone)
    observer.observe(document.body, { childList: true, subtree: true })

    const timeout = setTimeout(() => setIsVisible(true), 300)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'auto'
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  if (!isVisible && isHidden) return null

  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => {
        const delay = i * 0.02
        const scale = 1 - i * 0.15
        const opacity = 0.4 - i * 0.08
        const size = 10 - i * 1.5

        return (
          <motion.div
            key={i}
            className="fixed top-0 left-0 pointer-events-none z-[99998]"
            style={{
              x: cursorX,
              y: cursorY,
            }}
            animate={{
              x: cursorX.get() + delay * 15,
              y: cursorY.get() + delay * 15,
            }}
            transition={{
              type: 'spring',
              stiffness: 500 - i * 60,
              damping: 30,
            }}
          >
            <motion.div
              animate={{
                scale: isHidden ? 0 : scale,
                opacity: isHidden ? 0 : opacity,
              }}
              transition={{ duration: 0.1 }}
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
        className="fixed top-0 left-0 pointer-events-none z-[100000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHidden ? 0 : isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.7 : 1,
          }}
          transition={{ duration: 0.08 }}
          className="relative"
        >
          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              backgroundColor: isHovering ? 'var(--color-accent)' : '#ffffff',
              boxShadow: isHovering
                ? '0 0 12px var(--color-accent), 0 0 24px var(--color-accent)'
                : '0 0 8px rgba(255,255,255,0.5)',
            }}
          />
        </motion.div>

        {isHovering && hoverText && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3"
          >
            <div
              className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                boxShadow: '0 4px 20px -4px var(--color-accent)',
              }}
            >
              {hoverText} →
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHidden ? 0 : isClicking ? 1.3 : isHovering ? 2 : 1.8,
          opacity: isHidden ? 0 : isClicking ? 0.25 : isHovering ? 0.15 : 0.06,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 32,
            height: 32,
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </>
  )
}