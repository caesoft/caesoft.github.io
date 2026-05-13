import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import { formatBRDate } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Notícia' }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 container mx-auto px-4">
      <nav className="mb-8">
        <Link href="/noticias">
          <Button variant="outline" className="border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para notícias
          </Button>
        </Link>
      </nav>

      <div className="glass-effect-light border border-primary-soft rounded-2xl p-6 md:p-10">
      <article>
        <header className="mb-6">
        {post.coverImage && (
          <img src={post.coverImage} alt="" className="w-full max-h-[420px] object-cover rounded-xl border border-purple-soft mb-8 shadow-lg" />
        )}

          {post.categories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.categories.map((c) => (
                <span key={c} className="px-3 py-1 text-xs rounded-full border border-purple-soft text-light-muted bg-white/5">
                  {c}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold title-quanta text-light mb-2">{post.title}</h1>
          <div className="text-light-muted text-sm flex items-center gap-3">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.createdAt}>Publicado em {formatBRDate(post.createdAt)}</time>
            {post.updatedAt !== post.createdAt && (
              <>
                <span>•</span>
                <time dateTime={post.updatedAt}>Atualizado em {formatBRDate(post.updatedAt)}</time>
              </>
            )}
          </div>
        </header>

        <hr className="my-8 border-purple-soft" />

        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-caesoft-green prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-purple-soft prose-img:shadow-lg prose-strong:text-light prose-blockquote:border-l-caesoft-purple prose-li:text-light prose-li:marker:text-light prose-hr:border-purple-soft prose-pre:bg-[#0b0b1f] prose-pre:border prose-pre:border-purple-soft prose-mark:bg-caesoft-purple/20 prose-mark:text-light prose-mark:px-1 prose-mark:rounded" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        {post.categories.length > 0 && (
          <footer className="mt-10 hidden">
            <div className="flex flex-wrap gap-2">
              {post.categories.map((c) => (
                <span key={c} className="px-3 py-1 text-xs rounded-full border border-purple-soft text-light-muted bg-white/5">
                  {c}
                </span>
              ))}
            </div>
          </footer>
        )}
      </article>
      </div>
    </main>
    </>
  )
}
