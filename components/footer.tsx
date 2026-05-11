import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="font-semibold text-lg mb-2">SUNNY LIU</div>
            <p className="text-slate-600 text-sm">
              Global Growth Strategist
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/sunny-liu-b54761ab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-green-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-green-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sunny@sunnyliu.com"
              className="text-slate-600 hover:text-green-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center justify-end gap-2 text-slate-600 text-sm">
            <MapPin size={14} />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Sunny Liu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}