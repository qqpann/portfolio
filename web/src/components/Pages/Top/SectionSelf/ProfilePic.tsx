import Image from 'next/image'

import { GitHub, Twitter } from '~/components/Icons'
import { me } from '~/variables/me'

const person = {
  ...me,
  role: 'Coder, Gamer, Researcher',
}
const socials = [
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
export const ProfilePic = () => {
  return (
    <div className="text-center">
      <div className="space-y-6">
        <div className="mx-auto rounded-full h-40 w-40 relative xl:w-56 xl:h-56">
          <Image
            className="rounded-full"
            src={person.imageUrl}
            layout="fill"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1 text-basic-color-200">
            <h3>{person.name}</h3>
            <p className="text-indigo-600">{person.role}</p>
          </div>
          <ul role="list" className="flex justify-center space-x-5">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
