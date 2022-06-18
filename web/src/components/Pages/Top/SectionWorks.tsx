import Link from 'next/link'

import { Post } from '~/types'

interface Props {
  posts: Post[]
}
export const Works = ({ posts }: Props) => {
  return (
    <>
      <h1>Works</h1>
      {posts.length > 0 &&
        posts.map((post) => (
          <Link href={`/works/${post.slug}`} key={post.slug}>
            <a>{post.slug}</a>
          </Link>
        ))}
    </>
  )
}
