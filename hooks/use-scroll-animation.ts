'use client'

import { useScroll, useTransform, useSpring, motionValue } from 'framer-motion'
import { useRef } from 'react'

type Offset = ['start end', 'end start']

export function useScrollAnimation(options?: {
  target?: React.RefObject<HTMLElement>
  offset?: Offset
}) {
  const { scrollYProgress } = useScroll({
    target: options?.target,
    offset: options?.offset ?? ['start end', 'end start']
  })

  const springOptions = { stiffness: 100, damping: 30, restDelta: 0.001 }

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]), springOptions)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]), springOptions)
  const y = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]), springOptions)
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5])

  return { scrollYProgress, scale, opacity, y, rotate }
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as const
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -500 * speed])

  return { ref, y }
}
