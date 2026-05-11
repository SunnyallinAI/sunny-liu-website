'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-green-600 font-medium mb-5">About</div>

          <h2 className="text-4xl font-semibold tracking-tight mb-8">
            Bridging Western Tech Innovation with APAC Markets
          </h2>

          <p className="text-slate-600 leading-8 text-lg mb-6">
            I am a 10-year APAC growth leader specializing in gaming and app publisher monetization. Built 150+ APAC publisher partnerships (e-commerce/gaming), driving $36M+ revenue via CPA/CPI campaigns.
          </p>

          <p className="text-slate-600 leading-8 text-lg mb-6">
            Certified Tencent/Baidu consultant with MBA in Data-Driven Decision Making. Fluent in Mandarin/English with deep understanding of hybrid-casual mechanics and mobile user acquisition.
          </p>

          <p className="text-slate-600 leading-8 text-lg">
            Passionate gamer with proven track record of scaling publisher networks and SaaS tools across APAC markets. Specialized in data-driven strategies that deliver measurable results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-3xl font-semibold text-green-600 mb-2">10+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-3xl font-semibold text-green-600 mb-2">$36M+</div>
            <div className="text-slate-600">Revenue Generated</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-3xl font-semibold text-green-600 mb-2">150+</div>
            <div className="text-slate-600">Publisher Partnerships</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-3xl font-semibold text-green-600 mb-2">120%</div>
            <div className="text-slate-600">YoY Revenue Growth</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}