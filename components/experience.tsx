'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Co-Founder',
    company: 'Digital Media Company',
    period: 'Jul 2021 – Present',
    location: 'Beijing & Tianjin, China',
    description: 'Launched publisher-centric SaaS tools solving ROI tracking gaps for 20+ affiliate partners. Optimized influencer partnerships to help advertisers increase conversion rates by 50%.',
    achievements: [
      'Built automated dashboards reducing campaign analysis time by 40%',
      'Grew Tianjin Fire Station Douyin to 800K+ followers (#1 government account)',
      'Implemented A/B testing for 30+ campaigns, lifting conversions by 22%',
    ],
  },
  {
    title: 'Director of Commercial Channel Partnerships',
    company: 'Mundo Media Limited',
    period: 'Aug 2015 – Apr 2019',
    location: 'Beijing/Toronto, APAC',
    description: 'Managed 150+ APAC media resources, negotiating hybrid-CPA deals with top gaming publishers. Trained 10+ account managers on lifecycle strategies.',
    achievements: [
      'Scaled APAC revenue 120% YoY by onboarding CPI leaders (Baidu, Sungy, UC, Lift)',
      'Increased revenue-per-partner by 35% through KPI alignment',
      'Identified and resolved attribution gaps, recovering 100% disputed revenue',
    ],
  },
  {
    title: 'Publisher Manager (APAC)',
    company: 'Mundo Media Limited',
    period: 'Mar 2015 – Apr 2019',
    location: 'Beijing, China',
    description: 'Negotiated CPC/CPA deals with top publishers, training account managers on Salesforce pipelines and lifecycle strategies.',
    achievements: [
      'Negotiated hybrid-CPA deals with top gaming publishers',
      'Trained 10+ account managers on lifecycle strategies',
      'Directly supported $15M+ revenue portfolios',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-green-600 font-medium mb-5">Experience</div>
        <h2 className="text-4xl font-semibold tracking-tight mb-12">
          Professional Journey
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-slate-600">{exp.company}</p>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}