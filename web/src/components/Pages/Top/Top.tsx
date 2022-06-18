import { SelfIntroduction } from './SectionSelf'
import { Works } from './SectionWorks'

import { Layout } from '~/components/Layouts/Layout'
import { Post } from '~/types'

type Props = {
  posts: Post[]
}
export const Top = ({ posts }: Props) => {
  return (
    <Layout>
      <SelfIntroduction />
      <Works posts={posts} />
    </Layout>
  )
}
