import { Post } from '~/types'

type Props = {
  post: Post
}
export const WorksCard = ({ post }: Props) => {
  return <div>{post.slug}</div>
}
