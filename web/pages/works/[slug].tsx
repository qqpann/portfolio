import { WorksPage } from '~/components/Pages/WorksPage'
import { getPostBySlug, getAllPosts } from '~/lib/blog'
import markdownToHtml from '~/lib/markdownToHtml'
import { Post } from '~/types'

type Props = {
  post: Post
}
const Page = ({ post }: Props) => {
  return <WorksPage post={post} />
}
export default Page

type Params = {
  params: {
    slug: string
  }
}
export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug<Post>(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts<Post>(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
