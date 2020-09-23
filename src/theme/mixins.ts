import { css } from 'styled-components'
import media from '@theme/media'

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
    color: var(--cl-primary);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    position: relative;
    &:before {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--cl-primary);
      position: absolute;
      left: 0;
      bottom: 0px;
      transform-origin: center;
      transform: scale(0);
      transition: 0.3s ease-in-out;
    }
    &:hover:before {
      transform: scale(1);
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
    ${media.laptop`
      max-width: 800px;
      margin: 0 auto;
      padding: 0;`}

    ${media.desktop`
      max-width: 1000px;
      margin: 0 auto;
  `}
  `,
  heading: css`
    font-family: var(--ff-alt);
    font-size: var(--fs-h3);
    color: var(--cl-text-main);
    ${media.laptop`font-size: var(--fs-h1)`}
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
