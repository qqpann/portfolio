export type Post = {
  // Slug from file name
  slug: string

  // Meta info
  title: string
  excerpt: string
  date: string
  ogImage: string
  coverImage: string

  // Markdown content
  content: string
}
