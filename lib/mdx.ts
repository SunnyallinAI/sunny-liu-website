import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

export async function serializeMDX(source: string) {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })
}