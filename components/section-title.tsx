'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center mb-12' : 'mb-8'}
    >
      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}