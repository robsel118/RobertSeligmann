import { css } from 'styled-components'
import { fonts, fontSizes } from '@theme/styles'
import mediaMin from '@theme/media'

const mixins = {
  muli: css`
    font-family: ${fonts.muli};
    letter-spacing: 0.03em;
    line-height: 150%;
    font-size: ${fontSizes.md};
  `,
  teko: css`
    font-family: ${fonts.teko};
    font-size: ${fontSizes.xxl};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
  `,
  roboto: css`
    font-family: ${fonts.roboto};
    font-size: ${fontSizes.md};
    letter-spacing: 0.01rem;
  `,
  inlineLink: css`
    text-decoration: none;
    color: ${({ theme }) => theme.textLink};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 -0.2rem ${({ theme }) => theme.primary};
    &:hover {
      box-shadow: inset 0 -0.7rem ${({ theme }) => theme.primary};
    }
  `,
  grid: (md?: string) => {
    return css`
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 3rem;
      grid-row-gap: 2rem;
      ${mediaMin.md`grid-template-columns: ${md || 'repeat(2, 1fr)'}`}
    `
  },
  contentSpace: css`
    ${mediaMin.lg`
      max-width: 800px;
      margin: 0 auto;
      padding: 0;`}

    ${mediaMin.xl`
      max-width: 1000px;
      margin: 0 auto;
  `}
  `,
  heading: css`
    font-family: ${fonts.muli};
    font-size: ${fontSizes.xl};
    ${mediaMin.sm`font-size: ${fontSizes.xxl};`}
    ${mediaMin.lg`font-size: ${fontSizes.xxxl};`}
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  transitionAll: css`
    transition: all 0.3s ease-in-out;
  `,
}

export default mixins
