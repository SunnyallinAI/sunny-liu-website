import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getRelatedPosts, getBlogPosts } from '@/lib/blog'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Sunny Liu - Growth Strategist`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Simple MDX renderer for basic markdown support
function SimpleMDXRenderer({ content }: { content: string }) {
  // Convert basic markdown to HTML
  const renderContent = (text: string) => {
    // Convert headers
    let html = text.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Convert bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

    // Convert italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')

    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-600 hover:underline">$1</a>')

    // Convert lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Wrap consecutive li elements in ul
    html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')

    // Convert paragraphs
    html = html.replace(/\n\n/g, '</p><p>')
    html = '<p>' + html + '</p>'

    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '')
    html = html.replace(/<p><h/g, '<h')
    html = html.replace(/<\/h([0-9])><\/p>/g, '</h$1>')
    html = html.replace(/<p><ul>/g, '<ul>')
    html = html.replace(/<\/ul><\/p>/g, '</ul>')

    return html
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: renderContent(content) }}
      className="prose prose-lg max-w-none"
    />
  )
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(post.slug, post.tags)

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <SimpleMDXRenderer content={post.content} />

        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-4 rounded-xl border border-slate-100 hover:border-green-200 hover:bg-green-50 transition-all"
                >
                  <h4 className="font-medium group-hover:text-green-600 transition-colors mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </main>
  )
}