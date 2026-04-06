'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Loader({ onComplete }: { onComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      onComplete?.()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--color-bg)' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/logo-sin-fondo.svg"
              alt="Itherum"
              className="h-16 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-heading font-bold text-2xl mt-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Itherum
          </motion.h1>

          <motion.div
            className="mt-8 h-0.5 w-48 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              className="h-full rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}