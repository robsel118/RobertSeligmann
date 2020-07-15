import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    surface: string
    primary: string
    onBackground: string
    onBackgroundHover: string
    onPrimary: string
    onPrimaryHover: string
    inverted: string
    textLink: string
    textLinkHover: string
    reverse: string
  }
}
