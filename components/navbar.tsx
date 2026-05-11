export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <div className="font-semibold tracking-tight text-lg">
          SUNNY LIU
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://www.linkedin.com/in/sunny-liu-b54761ab"
          target="_blank"
          className="rounded-full border border-green-500 text-green-700 px-5 py-2 text-sm font-medium hover:bg-green-50 transition"
        >
          LinkedIn
        </a>
      </div>
    </header>
  )
}
