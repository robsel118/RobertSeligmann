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
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 -0.2rem ${props => props.theme.highlight};
    &:hover {
      box-shadow: inset 0 -0.7rem ${props => props.theme.highlightHover};
    }
  `,
  grid: (md?: string, lg?: string) => {
    return css`
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 3rem;
      grid-row-gap: 2rem;
      ${mediaMin.md`grid-template-columns: ${md || 'repeat(2, 1fr)'}`}
      /* ${mediaMin.lg`grid-template-columns: ${lg || 'repeat(2, 1fr)'}`} */
    `
  },
}

export default mixins
