import Link from 'next/link'

import { getAllPosts } from '~/lib/blog'

type Post = {
  slug: string
}

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <div>
      <h1>Works</h1>
      {allPosts.length > 0 &&
        allPosts.map((post) => (
          <Link href={`/works/${post.slug}`} key={post.slug}>
            <a>{post.slug}</a>
          </Link>
        ))}
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
