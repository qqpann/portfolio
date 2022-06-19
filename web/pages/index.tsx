import Head from 'next/head'

import { Top } from '~/components/Pages/Top'
import { getAllPosts } from '~/lib/blog'
import { Post } from '~/types'
import { me } from '~/variables/me'

type Props = {
  allPosts: Post[]
}
const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>{me.name}</title>
        <meta
          name="description"
          content="Portfolio website of Qiushi Pan. He is a coder, gamer, and researcher. His research interest is on AI, especially Reinforcement Learning."
        />
      </Head>
      <Top posts={allPosts} />
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts<Post>([
    'slug',
    'title',
    'excerpt',
    'date',
    'ogImage',
    'coverImage',
    'content',
  ])

  return { props: { allPosts } }
}
