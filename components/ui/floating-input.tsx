'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FloatingInputProps {
  label: string
  type?: 'text' | 'email' | 'tel'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

interface FloatingTextareaProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  rows?: number
}

export function FloatingInput({ label, type = 'text', value, onChange, required }: FloatingInputProps) {
  const [focused, setFocused] = useState(false)
  const isFloated = focused || value.length > 0
  const inputId = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="peer w-full bg-transparent border-b-2 px-0 pt-5 pb-3 text-base outline-none transition-colors duration-200"
        style={{
          borderColor: focused ? 'var(--color-accent)' : 'var(--color-border)',
          color: 'var(--color-text-primary)',
        }}
      />
      <label
        htmlFor={inputId}
        className="absolute left-0 pointer-events-none"
        style={{
          top: isFloated ? '-16px' : '16px',
          fontSize: isFloated ? '12px' : '14px',
          color: isFloated ? 'var(--color-accent)' : 'var(--color-text-muted)',
          transition: 'top 0.2s ease-out, font-size 0.2s ease-out, color 0.2s ease-out',
        }}
      >
        {label}
      </label>
      {focused && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: 'var(--color-accent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  )
}

export function FloatingTextarea({ label, value, onChange, required, rows = 4 }: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false)
  const isFloated = focused || value.length > 0
  const inputId = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="relative">
      <textarea
        id={inputId}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className="w-full bg-transparent border-b-2 px-0 py-3 text-base outline-none resize-none transition-colors duration-200"
        style={{
          borderColor: focused ? 'var(--color-accent)' : 'var(--color-border)',
          color: 'var(--color-text-primary)',
        }}
      />
      <label
        htmlFor={inputId}
        className="absolute left-0 pointer-events-none"
        style={{
          top: isFloated ? '-16px' : '16px',
          fontSize: isFloated ? '12px' : '14px',
          color: isFloated ? 'var(--color-accent)' : 'var(--color-text-muted)',
          transition: 'top 0.2s ease-out, font-size 0.2s ease-out, color 0.2s ease-out',
        }}
      >
        {label}
      </label>
      {focused && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: 'var(--color-accent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  )
}