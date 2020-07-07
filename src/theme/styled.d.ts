import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    cardBackground: string
    cardBackgroundHover: string
    cardShadowFlat: string
    cardShadowPressed: string
    iconShadowFlat: string
    iconShadowPressed: string
    buttonBackground: string
    textColor: string
    linkColor: string
    linkColorHover: string
    buttonColor: string
    inverted: string
  }
}
