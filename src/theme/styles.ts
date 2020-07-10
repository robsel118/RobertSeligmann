require('typeface-muli')

require('typeface-teko')

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

export const fonts = {
  muli: 'Nunito-sans, sans-serif',
  teko: 'Teko, sans-serif',
}

export const themes = {
  light: {
    background: 'white',
    cardBackground: 'white',
    cardBackgroundHover: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
    cardShadowFlat: '9px 9px 17px #bfbfbf, -9px -9px 17px #ffffff',
    cardShadowPressed:
      'inset 9px 9px 17px #bfbfbf, inset -9px -9px 17px #ffffff',
    iconShadowFlat: '5px 5px 12px #bfbfbf, -5px -5px 12px  #ffffff',
    iconShadowPressed:
      'inset 5px 5px 12px #bfbfbf, inset -5px -5px 12px #ffffff',
    buttonBackground: '#5E81AC',
    textColor: '#333',
    linkColor: '#9a9a9a',
    linkColorHover: '#333333',
    buttonColor: '#ECEFF4',
    inverted: 'invert(0%)',
    highlight: '#CDEEF2',
    highlightHover: '#B4DDE3',
    bw: 'black',
  },
  dark: {
    background: '#474747',
    cardBackground: '#474747',
    cardBackgroundHover: 'linear-gradient(145deg, #404040, #4c4c4c)',
    cardShadowFlat: '9px 9px 17px #3c3c3c, -9px -9px 17px #525252',
    cardShadowPressed:
      'inset 9px 9px 17px #3c3c3c, inset -9px -9px 17px #525252',
    iconShadowFlat: '5px 5px 12px #353535, -5px -5px 12px #595959',
    iconShadowPressed:
      'inset 5px 5px 12px #353535, inset -5px -5px 12px #595959',
    buttonBackground: '#5E81AC',
    textColor: 'white',
    linkColor: '#e6e6e6',
    linkColorHover: 'white',
    buttonColor: '#ECEFF4',
    inverted: 'invert(100%)',
    highlight: '#4AAD52 ',
    highlightHover: '#488B49',
    bw: 'white',
  },
}
