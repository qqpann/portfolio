import { Post } from '~/types'

const __post = {
  title: 'Boost your conversion rate',
  href: '#',
  category: { name: 'Article', href: '#' },
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  imageUrl:
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  readingTime: '6 min',
  author: {
    name: 'Roel Aufderehar',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
}

type Props = {
  post: Post
}
export const WorksCard = ({ post }: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={__post.imageUrl}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={__post.category.href} className="hover:underline">
              {__post.category.name}
            </a>
          </p>
          <a href={__post.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{post.slug}</p>
            <p className="mt-3 text-base text-gray-500">{`${post.content}`}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={__post.datetime}>{__post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{__post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
