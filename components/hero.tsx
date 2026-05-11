import Image from 'next/image'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-36 pb-28">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            APAC Growth Leader | Gaming & App Publisher Monetization Expert
          </div>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Global{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
              Growth
            </span>{' '}
            Strategist
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">
            10+ years scaling publisher networks and SaaS tools. Built 150+ APAC publisher partnerships, driving $36M+ revenue via CPA/CPI campaigns. Bridging Western tech innovation with APAC markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="rounded-full bg-green-600 hover:bg-green-700 transition text-white px-7 py-3 font-medium shadow-lg shadow-green-200"
            >
              View Experience
            </a>

            <a
              href="#projects"
              className="rounded-full border border-slate-300 hover:border-green-500 hover:text-green-700 transition px-7 py-3 font-medium"
            >
              Explore Projects
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-[40px] bg-gradient-to-br from-green-100 to-emerald-50 border border-white shadow-2xl overflow-hidden relative">
            <Image
              src="/profile.jpg"
              alt="Sunny Liu"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
