'use client'

import { motion } from 'framer-motion'

export default function RecruiterCTA() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open to Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            I&apos;m looking for new opportunities
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m open to growth leadership roles where I can drive measurable impact and scale businesses to new heights.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}