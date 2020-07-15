require('typeface-muli')
require('typeface-teko')
require('typeface-roboto')
import { hex2rgba } from '@utils/'

export const color = {
  caribbeanGreen: '#06d6a0',
  blue: '#B4DDE3',
}

export const fonts = {
  muli: 'Muli, sans-serif',
  teko: 'Teko, sans-serif',
  roboto: 'Roboto, sans-serif',
}

export const fontSizes = {
  xs: '0.6rem',
  sm: '0.8rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '2.5rem',
}

export const themes = {
  light: {
    linkColor: '#9a9a9a',
    linkColorHover: '#333333',
    background: '#FFFFF',
    surface: '#FFFFFF',
    primary: color.blue,
    onBackground: '#5E5E5E',
    onBackgroundHover: '#333333',
    onPrimary: '#5E5E5E',
    onPrimaryHover: '#333333',
    inverted: 'invert(0%)',
    reverse: '#000000',
  },
  dark: {
    linkColor: '#e6e6e6',
    linkColorHover: '#FFFFFF',
    background: '#091B34',
    surface: hex2rgba('#294B63', 0.3),
    primary: color.caribbeanGreen, //carabean green
    onBackground: '#CCD6F9',
    onBackgroundHover: '#FFFFFF',
    onPrimary: '#CCD6F9',
    onPrimaryHover: '#FFFFFF',
    inverted: 'invert(100%)',
    reverse: '#FFFFFF',
  },
}
