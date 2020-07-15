import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    linkColor: string
    linkColorHover: string
    background: string
    surface: string
    primary: string
    onBackground: string
    onBackgroundHover: string
    onPrimary: string
    onPrimaryHover: string
    inverted: string
    reverse: string
  }
}
