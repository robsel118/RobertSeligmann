import { css } from 'styled-components'
import { fonts } from '@theme/styles'

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
  // highlightedLink: (inset: number) => {
  //   return css`
  //     box-shadow: inset 0 ${inset || '-0.6rem '}
  //       ${props => props.theme.highlight};
  //     color: ${props => props.theme.textColor};
  //     text-decoration: none;
  //     &:hover {
  //       box-shadow: inset 0 ${inset || '-0.6rem '}
  //         ${props => props.theme.highlightHover};
  //     }
  //   `
  // },
}

export default mixins
