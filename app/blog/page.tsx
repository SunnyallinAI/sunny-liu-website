import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/blog'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Blog | Sunny Liu - Growth Strategist',
  description: 'Read the latest insights on growth marketing, AI, affiliate marketing, and digital strategy from Sunny Liu.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Insights on growth marketing, AI, affiliate marketing, and digital strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    Read more
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}