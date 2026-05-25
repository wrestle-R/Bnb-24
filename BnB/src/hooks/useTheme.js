import { useEffect, useState } from 'react'

const THEME_KEY = 'bnb_theme'

export function getPreferredTheme() {
  if (typeof window === 'undefined') return 'dark'

  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return 'dark'
}

export function applyTheme(theme) {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  root.classList.toggle('light', theme === 'light')
  root.dataset.theme = theme

  if (typeof window !== 'undefined') {
    localStorage.setItem(THEME_KEY, theme)
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme, isLight: theme === 'light' }
}
