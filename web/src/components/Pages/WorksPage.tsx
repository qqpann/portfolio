import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Post } from '~/types'

type Props = {
  post: Post
}
export const WorksPage = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | Next.js Blog Example with</title>
            </Head>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </>
      )}
    </>
  )
}
