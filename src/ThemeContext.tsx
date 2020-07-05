import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './theme'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme?: () => void
}

const defaultTheme: ThemeContextType = {
  theme: 'light',
}

export const ThemeContext = React.createContext<ThemeContextType>(defaultTheme)

interface ThemedContextProps {
  children: React.ReactNode
}

const ThemedContext = ({ children }: ThemedContextProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  // OnComponentMount
  useEffect(() => {
    const currentTheme: Theme =
      (localStorage.getItem('theme') as Theme) || 'light'
    setTheme(currentTheme)
  }, [])

  // OnComponentUpdate
  useEffect(() => {
    localStorage.setItem('theme', theme)

    // update the root body element color
    document.body.style.setProperty(
      'background-color',
      themes[theme].background
    )
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: () => {
          const newTheme = theme == 'light' ? 'dark' : 'light'
          setTheme(newTheme)
        },
      }}
    >
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemedContext
