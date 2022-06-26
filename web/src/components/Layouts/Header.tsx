/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { DarkModeSwitch } from '~/components/DarkModeSwitch/DarkModeSwitch'

const navItems = [
  { name: 'Fork on GitHub', href: 'https://github.com/qqpann/portfolio' },
]

export const Header = () => {
  return (
    <Popover className="sticky top-0 z-50 bg-white/70 dark:bg-slate-800/70 backdrop-blur shadow-sm">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <span className="sr-only">Top</span>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-solid border-2 border-orange-200 relative">
                <Image
                  className="rounded-full"
                  src="/assets/profile_taka.png"
                  alt=""
                  layout="fill"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <DarkModeSwitch />
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <a className="text-base font-medium text-basic-color-100 hover:text-gray-900 dark:hover:text-gray-300">
                {item.name}
              </a>
            </Link>
          ))}
        </Popover.Group>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-900 divide-y-2 divide-gray-50 dark:divide-slate-500">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-full border-solid border-2 border-orange-200 relative">
                  <Image
                    className="rounded-full"
                    src="/assets/profile_taka.png"
                    alt=""
                    layout="fill"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white dark:bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <DarkModeSwitch />
                {navItems.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a className="text-base font-medium text-basic-color-200 hover:text-gray-700">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
