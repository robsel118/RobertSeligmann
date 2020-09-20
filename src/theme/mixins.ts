import { css } from 'styled-components'
import mediaMin from '@theme/media'

const mixins = {
  display: css`
    font-family: var(--ff-display);
    font-size: var(--fs-h3);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
  `,
  inlineLink: css`
    text-decoration: none;
    color: var(--cl-text-main);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: inset 0 -0.2rem var(--cl-primary);
    &:hover {
      color: var(--cl-text-main-lt);
      box-shadow: inset 0 -0.7rem var(--cl-primary);
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
  `,
  contentSpace: css`
    margin: 0 1rem;
    ${mediaMin.laptop`
      max-width: 800px;
      margin: 0 auto;
      padding: 0;`}

    ${mediaMin.desktop`
      max-width: 1000px;
      margin: 0 auto;
  `}
  `,
  heading: css`
    font-family: var(--ff-alt);
    font-size: var(--fs-h3);
    color: var(--cl-text-main);
    ${mediaMin.laptop`font-size: var(--fs-h1)`}
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
