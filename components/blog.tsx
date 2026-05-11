import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'

export default async function Blog() {
  const posts = (await getBlogPosts()).slice(0, 3)

  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div>
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-green-600 font-medium mb-5">Blog</div>
            <h2 className="text-4xl font-semibold tracking-tight">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            View all posts
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-50 overflow-hidden">
                  {post.image ? (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <span className="text-sm">{post.title}</span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">📝</span>
                    </div>
                  )}
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            View all posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
