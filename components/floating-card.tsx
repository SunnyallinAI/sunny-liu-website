'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FloatingCard({
  children,
  className = '',
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}