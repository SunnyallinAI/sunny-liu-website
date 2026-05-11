import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import RecruiterCTA from '@/components/recruiter-cta'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <RecruiterCTA />
      <Footer />
    </main>
  )
}