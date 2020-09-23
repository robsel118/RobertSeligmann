import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme?: () => void
}

interface ThemedContextProps {
  children: React.ReactNode
}

const defaultTheme: ThemeContextType = {
  theme: 'light',
}

export const ThemeContext = React.createContext<ThemeContextType>(defaultTheme)

const ThemedContext = ({ children }: ThemedContextProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  // OnComponentMount
  useEffect(() => {
    const currentTheme: Theme =
      (localStorage.getItem('theme') as Theme) || 'light'
      document.documentElement.setAttribute('data-theme', currentTheme)
      setTheme(currentTheme)

  }, [])

  // OnComponentUpdate
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: () => {
          const newTheme = theme == 'light' ? 'dark' : 'light'

          document.documentElement.setAttribute('data-theme', newTheme)
          setTheme(newTheme)
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemedContext
