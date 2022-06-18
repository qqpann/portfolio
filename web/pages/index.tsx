import { Top } from '~/components/Pages/Top'
import { getAllPosts } from '~/lib/blog'
import { Post } from '~/types'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return <Top posts={allPosts} />
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts<Post>([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return { props: { allPosts } }
}
