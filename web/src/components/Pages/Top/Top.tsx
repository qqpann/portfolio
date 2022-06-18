import { SelfIntroduction } from './SectionSelf'
import { Works } from './SectionWorks'

import { Post } from '~/types'

type Props = {
  posts: Post[]
}
export const Top = ({ posts }: Props) => {
  return (
    <div>
      <SelfIntroduction />
      <Works posts={posts} />
    </div>
  )
}
