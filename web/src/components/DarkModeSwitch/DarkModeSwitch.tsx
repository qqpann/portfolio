import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { useDidMount, useToggle } from 'rooks'

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const toggle = () => {
    if (theme === 'system' || theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="relative z-10">
      <button
        className="focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggle}
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
