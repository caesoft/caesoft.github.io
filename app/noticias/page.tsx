import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { formatBRDate } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Últimas notícias e comunicados do curso de Bacharelado em Engenharia de Software da UEPA.',
}

export default async function NoticiasPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 container mx-auto px-4">
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-caesoft-light title-quanta mb-2">Notícias</h1>
        <p className="text-light-muted max-w-3xl text-justify">Acompanhe as novidades, eventos e comunicados.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/noticias/${post.slug}`} className="group block">
            <article className="rounded-xl border border-purple-soft bg-card-dark p-5 hover-glow transition-all h-full flex flex-col">
              {post.coverImage && (
                <img src={post.coverImage} alt="" className="w-full h-44 object-cover rounded-lg mb-4" />
              )}
              <h2 className="text-xl font-semibold text-light group-hover:text-caesoft-green transition-colors mb-1">{post.title}</h2>
              {post.categories?.length ? (
                <div className="mb-2 flex flex-wrap gap-2">
                  {post.categories.map((c) => (
                    <span key={c} className="px-2.5 py-1 text-[11px] rounded-full border border-purple-soft text-light-muted bg-white/5">
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}
              <p className="text-light-subtle text-sm mb-3">{post.description}</p>
              <div className="mt-auto flex items-center justify-between text-xs text-light-muted">
                <span>{post.author}</span>
                <time dateTime={post.createdAt}>{formatBRDate(post.createdAt)}</time>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
    <Footer />
    </>
  )
}
