import { css, CSSObject } from 'styled-components'

const breakpoints: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

// As seen in
// https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
export const mediaMin = Object.keys(breakpoints).reduce(
  (accumulator: Record<string, any>, label: string) => {
    const emSize = breakpoints[label] / 16
    accumulator[label] = (...args: [TemplateStringsArray | CSSObject]) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
export default mediaMin
