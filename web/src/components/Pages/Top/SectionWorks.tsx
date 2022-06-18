import Link from 'next/link'

import { WorksCard } from '~/components/WorksCard'
import { Post } from '~/types'

interface Props {
  posts: Post[]
}
export const Works = ({ posts }: Props) => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Works
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            My works are here.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.length > 0 &&
            posts.map((post) => (
              <Link href={`/works/${post.slug}`} key={post.slug}>
                <a>
                  <WorksCard post={post} />
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
