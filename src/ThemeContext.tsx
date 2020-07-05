import React, { useState, useEffect } from 'react'
import { themes } from './theme'
import { ThemeProvider } from "styled-components";

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme;
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
    const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme") as Theme || 'light');
    const root = document.body;

    useEffect(() => {
        localStorage.setItem("theme", theme)
        root.style.setProperty(
            'background-color',
            themes[theme].background
        );
    },[theme])
    return (<ThemeContext.Provider value={{
        theme: theme,
        setTheme: () => {
            const newTheme = theme == 'light' ? 'dark' : 'light'
            root.style.setProperty(
                'background-color',
                themes[newTheme].background
            );
            setTheme(newTheme)
        }
    }}>
        <ThemeProvider theme={themes[theme]}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>)
}

export default ThemedContext;