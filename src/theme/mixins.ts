import { css } from 'styled-components'
import { fonts } from '@theme/styles'
import mediaMin from '@theme/media'

const mixins = {
  muli: css`
    font-family: ${fonts.muli};
    letter-spacing: 0.03em;
    line-height: 150%;
    font-size: 1.1rem;
  `,
  teko: css`
    font-family: ${fonts.teko};
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
  `,
  roboto: css`
    font-family: ${fonts.roboto};
    font-size: 1rem;
    letter-spacing: 0.01rem;
  `,
  inlineLink: css`
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 -0.2rem ${({ theme }) => theme.highlight};
    &:hover {
      box-shadow: inset 0 -0.7rem ${({ theme }) => theme.highlightHover};
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
    font-size: 1.5rem;
    ${mediaMin.sm`font-size: 2rem;`}
    ${mediaMin.lg`font-size: 2.5rem;`}
  `,
}

export default mixins
