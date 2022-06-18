import Link from 'next/link'

import { Post } from '~/types'

type Props = {
  posts: Post[]
}
export const Top = ({ posts }: Props) => {
  return (
    <div>
      <h1>Works</h1>
      {posts.length > 0 &&
        posts.map((post) => (
          <Link href={`/works/${post.slug}`} key={post.slug}>
            <a>{post.slug}</a>
          </Link>
        ))}
    </div>
  )
}
