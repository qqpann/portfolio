import { Twitter, GitHub } from '~/components/Icons'
import { me } from '~/variables/me'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  // {
  //   name: 'Facebook',
  //   href: '#',
  //   icon: Facebook,
  // },
  // {
  //   name: 'Instagram',
  //   href: '#',
  //   icon: Instagram,
  // },
  {
    name: 'Twitter',
    href: me.twitterUrl,
    icon: Twitter,
  },
  {
    name: 'GitHub',
    href: me.githubUrl,
    icon: GitHub,
  },
]

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 Qiushi Pan
          </p>
        </div>
      </div>
    </footer>
  )
}
