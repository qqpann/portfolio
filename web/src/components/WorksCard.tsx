import Image from 'next/image'

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
  readingTime: '1 min',
}

type Props = {
  post: Post
}
export const WorksCard = ({ post }: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <div className="h-48 w-full object-cover relative">
          <Image
            src={post.coverImage ?? '/assets/404_dinosaur.jpg'}
            layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {__post.category.name}
          </p>
          <div className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {post.title ?? post.slug}
            </h3>
            <div className="mt-3 text-base text-gray-500">{post.excerpt}</div>
          </div>
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
