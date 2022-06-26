import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { CameraIcon } from '@heroicons/react/solid'

import { Layout } from '~/components/Layouts/Layout'
import { Post } from '~/types'

type Props = {
  post: Post
}
export const WorksPage = ({ post }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />
  if (router.isFallback) return <>Loading...</>
  return (
    <Layout>
      <article className="mb-32">
        <div className="overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 dark:bg-gray-400/10 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Works
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-basic-color-200 sm:text-4xl">
                  {post.title}
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <div className="w-full h-48 sm:h-72 lg:h-96 rounded-lg shadow-lg object-cover object-center relative">
                        <Image
                          src={post.coverImage ?? '/assets/404_dinosaur.jpg'}
                          alt=""
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Screenshot by Qiushi Pan</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-basic-color-100">{post.excerpt}</p>
                  <div
                    className="mt-5 prose prose-indigo text-basic-color-100 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
