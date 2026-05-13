import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { execSync } from 'node:child_process'

export type PostFrontMatter = {
  title: string
  author: string
  description: string
  categories?: string[]
  coverImage?: string
  createdAt?: string
}

export type PostMeta = {
  slug: string
  title: string
  author: string
  description: string
  categories: string[]
  coverImage?: string
  createdAt: string
  updatedAt: string
}

export type Post = PostMeta & {
  contentHtml: string
}

function getPostsDirectory(): string {
  return path.join(process.cwd(), 'content', 'noticias')
}

function normalizeCoverImage(coverImage?: string): string | undefined {
  if (!coverImage) return undefined
  if (coverImage.startsWith('http://') || coverImage.startsWith('https://')) return coverImage
  return coverImage.startsWith('/') ? coverImage : `/${coverImage}`
}

function getGitDatesForFile(absoluteFilePath: string): { createdAt?: string; updatedAt?: string } {
  try {
    const file = `"${absoluteFilePath.replace(/"/g, '\\"')}"`
    // First commit (creation)
    const createdAt = execSync(`git log --diff-filter=A --follow --format=%aI -1 -- ${file}`, {
      stdio: ['ignore', 'pipe', 'ignore'],
      cwd: process.cwd(),
      encoding: 'utf8',
    })
      .toString()
      .trim()

    // Last commit (update)
    const updatedAt = execSync(`git log -1 --format=%aI -- ${file}`, {
      stdio: ['ignore', 'pipe', 'ignore'],
      cwd: process.cwd(),
      encoding: 'utf8',
    })
      .toString()
      .trim()
    return {
      createdAt: createdAt || undefined,
      updatedAt: updatedAt || undefined,
    }
  } catch {
    return {}
  }
}

export function getAllPostSlugs(): string[] {
  const dir = getPostsDirectory()
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const dir = getPostsDirectory()
  const fullPath = path.join(dir, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const fm = data as PostFrontMatter

  // HTML content
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  // Dates
  const gitDates = getGitDatesForFile(fullPath)
  const createdAt = fm.createdAt || gitDates.createdAt || new Date().toISOString()
  const updatedAt = gitDates.updatedAt || createdAt

  const categories = Array.isArray(fm.categories)
    ? (fm.categories as unknown as string[])
    : []

  const post: Post = {
    slug,
    title: fm.title ?? slug,
    author: fm.author ?? 'Desconhecido',
    description: fm.description ?? '',
    categories,
    coverImage: normalizeCoverImage(fm.coverImage),
    createdAt,
    updatedAt,
    contentHtml,
  }

  return post
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s)))
  const metas = (posts.filter(Boolean) as Post[]).map<PostMeta>(({ contentHtml, ...meta }) => meta)
  // sort newest first by createdAt
  metas.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return metas
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  const set = new Set<string>()
  for (const p of posts) {
    for (const c of p.categories) set.add(c)
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}
