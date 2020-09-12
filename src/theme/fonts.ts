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

enum FontWeight {
  NORMAL = 'normal',
  ITALIC = 'italic',
}
interface FontFace {
  name: string
  normal: Record<number, Array<any>>
  italic: Record<number, Array<any>>
}

const inter: FontFace = {
  name: 'Inter',
  normal: interNormalFont,
  italic: interItalicFont,
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

const Fonts = css`
  ${interNormal + interItalic}
`

export default Fonts
