'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Publisher SaaS Tools Platform',
    description: 'Built ROI tracking tools for 20+ affiliate partners, reducing campaign analysis time by 40% through automated dashboards.',
    tags: ['Salesforce', 'SQL', 'Google Analytics', 'Appsflyer'],
    image: '/projects/saas-tools.jpg',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'APAC Publisher Network',
    description: 'Scaled APAC publisher network to 150+ partners (AliExpress/Lazada), driving 120% YoY revenue growth.',
    tags: ['CPA/CPI', 'Programmatic', 'DSP', 'Cross-border'],
    image: '/projects/publisher-network.jpg',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'Tianjin Fire Station Douyin',
    description: 'Grew government Douyin account to 800K+ followers (#1 ranked) via viral content strategies and A/B testing.',
    tags: ['Social Media', 'Content Strategy', 'A/B Testing', 'Viral Marketing'],
    image: '/projects/douyin-campaign.jpg',
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-green-600 font-medium mb-5">Projects</div>
        <h2 className="text-4xl font-semibold tracking-tight mb-12">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="text-sm">{project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-600 hover:text-green-600 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-600 hover:text-green-600 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}