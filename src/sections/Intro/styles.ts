import styled from 'styled-components'

import mixins from '@theme/mixins'
import mediaMin from '@theme/media'

export const CTA = styled.div`
  ${mediaMin.mobile`
   grid-column: 1 / -1;
   grid-row: 2 / auto;
   `}
  ${mediaMin.laptop`
   grid-column: 1 / -1;
   grid-row: 2 / auto;`}
`

export const IntroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const IntroContainer = styled.div`
  width: 100%;
`

export const IntroWrapper = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  min-height: calc(100vmin - 64px);
  position: relative;
`

export const Statement = styled.div`
  position: relative;

  p {
    line-height: var(--lh-xl);

    a {
      ${mixins.inlineLink}
    }
  }
  h1 {
    font-size: var(--fs-utlra);

    color: var(--cl-text-main-dk);
    margin: 0;
    font-weight: 600;

    strong {
      color: var(--cl-primary);
      font-weight: 500;
    }
  }
  h2 {
    color: var(--cl-text-main-dk);
    font-size: var(--fs-h2);
    ${mediaMin.mobile` font-size: var(--fs-h2);`}
    margin: 0;
  }
  hr {
    width: 200px;
    margin: 1rem 0;
    border-top: 0.5px solid var(--cl-text-main);
    border-bottom: none;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  a {
    min-height: var(--min-press-size);
    margin-right: 1rem;
    ${mixins.flexCenter};
  }
`
