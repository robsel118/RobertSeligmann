import { css } from 'styled-components'

import InterRegularWoff from '@fonts/Inter/Inter-Regular.woff'
import InterRegularWoff2 from '@fonts/Inter/Inter-Regular.woff2'
import InterMediumWoff from '@fonts/Inter/Inter-Medium.woff'
import InterMediumWoff2 from '@fonts/Inter/Inter-Medium.woff2'
import InterSemiBoldWoff from '@fonts/Inter/Inter-SemiBold.woff'
import InterSemiBoldWoff2 from '@fonts/Inter/Inter-SemiBold.woff2'

import InterRegularItalicWoff from '@fonts/Inter/Inter-Italic.woff'
import InterRegularItalicWoff2 from '@fonts/Inter/Inter-Italic.woff2'
import InterMediumItalicWoff from '@fonts/Inter/Inter-MediumItalic.woff'
import InterMediumItalicWoff2 from '@fonts/Inter/Inter-MediumItalic.woff2'
import InterSemiBoldItalicWoff from '@fonts/Inter/Inter-SemiBoldItalic.woff'
import InterSemiBoldItalicWoff2 from '@fonts/Inter/Inter-SemiBoldItalic.woff2'

import FiraCodeRegularWoff from '@fonts/FiraCode/FiraCode-Regular.woff'
import FiraCodeRegularWoff2 from '@fonts/FiraCode/FiraCode-Regular.woff2'
import FiraCodeMediumWoff from '@fonts/FiraCode/FiraCode-Medium.woff'
import FiraCodeMediumWoff2 from '@fonts/FiraCode/FiraCode-Medium.woff2'
import FiraCodeSemiBoldWoff from '@fonts/FiraCode/FiraCode-SemiBold.woff'
import FiraCodeSemiBoldWoff2 from '@fonts/FiraCode/FiraCode-SemiBold.woff2'

import TekoRegularWoff from '@fonts/Teko/Teko-Regular.woff'
import TekoRegularWoff2 from '@fonts/Teko/Teko-Regular.woff2'
import TekoMediumWoff from '@fonts/Teko/Teko-Medium.woff'
import TekoMediumWoff2 from '@fonts/Teko/Teko-Medium.woff2'
import TekoSemiBoldWoff from '@fonts/Teko/Teko-SemiBold.woff'
import TekoSemiBoldWoff2 from '@fonts/Teko/Teko-SemiBold.woff2'

const interNormalFont = {
  400: [InterRegularWoff, InterRegularWoff2],
  500: [InterMediumWoff, InterMediumWoff2],
  600: [InterSemiBoldWoff, InterSemiBoldWoff2],
}

const interItalicFont = {
  400: [InterRegularItalicWoff, InterRegularItalicWoff2],
  500: [InterMediumItalicWoff, InterMediumItalicWoff2],
  600: [InterSemiBoldItalicWoff, InterSemiBoldItalicWoff2],
}

const firaCodeNormalFont = {
  400: [FiraCodeRegularWoff, FiraCodeRegularWoff2],
  500: [FiraCodeMediumWoff, FiraCodeMediumWoff2],
  600: [FiraCodeSemiBoldWoff, FiraCodeSemiBoldWoff2],
}

const tekoCodeNormalFont = {
  400: [TekoRegularWoff, TekoRegularWoff2],
  500: [TekoMediumWoff, TekoMediumWoff2],
  600: [TekoSemiBoldWoff, TekoSemiBoldWoff2],
}

enum FontWeight {
  NORMAL = 'normal',
  ITALIC = 'italic',
}

interface FontFace {
  name: string
  normal: Record<number, Array<any>>
  italic?: Record<number, Array<any>>
}

const inter: FontFace = {
  name: 'Inter',
  normal: interNormalFont,
  italic: interItalicFont,
}

const firaCode: FontFace = {
  name: 'Fira Code',
  normal: firaCodeNormalFont,
}

const teko: FontFace = {
  name: 'Teko',
  normal: tekoCodeNormalFont,
}

const generateFontFace = (
  family: FontFace,
  style: FontWeight = FontWeight.NORMAL
): string =>
  Object.entries(family[style]).reduce((styles: string, [weight, formats]) => {
    const [woff, woff2] = formats

    return (styles += `
    @font-face {
      font-family: '${family.name}';
      src: url(${woff2}) format('woff2'),
          url(${woff}) format('woff');
      font-weight: ${weight};
      font-style: ${style};
      font-display: auto;
    }
  `)
  }, '')

const interNormal = generateFontFace(inter, FontWeight.NORMAL)
const interItalic = generateFontFace(inter, FontWeight.ITALIC)

const firaCodeNormal = generateFontFace(firaCode, FontWeight.NORMAL)
const tekoNormal = generateFontFace(teko, FontWeight.NORMAL)

const Fonts = css`
  ${interNormal + interItalic + firaCodeNormal + tekoNormal}
`

export default Fonts
