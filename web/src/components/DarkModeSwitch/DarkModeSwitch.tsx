import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

export const DarkModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  const toggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="relative z-10">
      <button
        className="focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggle}
        aria-label="Toggle dark mode"
      >
        {loading ? (
          <div className="animate-pulse w-6 h-6 rounded-full bg-slate-400/30"></div>
        ) : resolvedTheme === 'dark' ? (
          <SunIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
