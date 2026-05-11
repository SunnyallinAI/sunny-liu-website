'use client'

import { motion } from 'framer-motion'
import { Building2, Users, TrendingUp, Calendar } from 'lucide-react'

export default function RecruiterCTA() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to Opportunities
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              I&apos;m actively seeking senior growth leadership roles where I can drive
              measurable impact and scale businesses to new heights.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Building2 size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Open to</div>
                  <div className="font-medium">Full-time Roles</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Focus</div>
                  <div className="font-medium">Growth Leadership</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Team Size</div>
                  <div className="font-medium">5-50 People</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Start Date</div>
                  <div className="font-medium">Immediate</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Schedule a Call
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="border border-slate-600 hover:border-green-400 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
            <div className="space-y-4">
              {[
                { value: '$2M+', label: 'Monthly Ad Spend Managed' },
                { value: '45%', label: 'ROI Improvement' },
                { value: '15', label: 'Markets Expanded' },
                { value: '8', label: 'Team Members Led' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-slate-400">{stat.label}</span>
                  <span className="text-2xl font-semibold text-green-400">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}