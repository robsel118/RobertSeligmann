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

export const Context = React.createContext<ThemeContextType>(defaultTheme)

interface ThemeContextProps {
    children: React.ReactNode
}
const ThemeContext = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const root = document.body;

    useEffect(() => {
        console.log("switching theme")
        root.style.setProperty(
            'background-color',
            themes[theme].background
        );
    },[theme])
    return (<Context.Provider value={{
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
    </Context.Provider>)
}

export default ThemeContext;