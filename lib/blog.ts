import fs from 'fs'
import path from 'path'

const blogDirectory = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  image?: string
  content: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(blogDirectory)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(blogDirectory, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      // Extract frontmatter
      const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/)
      if (!frontmatterMatch) {
        throw new Error(`No frontmatter found in ${file}`)
      }

      const frontmatter = frontmatterMatch[1]
      const slug = file.replace('.mdx', '')

      // Parse frontmatter
      const title = frontmatter.match(/title:\s*"([^"]+)"/)?.[1] || ''
      const date = frontmatter.match(/date:\s*"([^"]+)"/)?.[1] || ''
      const description = frontmatter.match(/description:\s*"([^"]+)"/)?.[1] || ''
      const tags = frontmatter.match(/tags:\s*\[([^\]]+)\]/)?.[1]?.split(',').map(t => t.trim().replace(/"/g, '')) || []
      const author = frontmatter.match(/author:\s*"([^"]+)"/)?.[1] || ''
      const image = frontmatter.match(/image:\s*"([^"]+)"/)?.[1]

      return {
        slug,
        title,
        date,
        excerpt: description,
        tags,
        author,
        image,
        content: content.replace(frontmatterMatch[0], '').trim(),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getRelatedPosts(currentSlug: string, tags: string[]): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts
    .filter((post) => post.slug !== currentSlug && post.tags.some(tag => tags.includes(tag)))
    .slice(0, 3)
}