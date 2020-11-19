import styled from 'styled-components'

import mixins from '@theme/mixins'
import media from '@theme/media'

export const IntroContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Statement = styled.div`
  p {
    line-height: var(--lh-xl);

    a {
      ${mixins.inlineLink}
    }
  }
  h1 {
    font-size: clamp(var(--fs-2xl), 8vw, var(--fs-5xl));
    color: var(--cl-text-alt);
    margin: 0;
    font-weight: 600;

    strong {
      color: var(--cl-primary);
      font-weight: 500;
    }
  }
  h2 {
    color: var(--cl-text-alt);
    font-size: var(--fs-3xl);
    ${media.mobile` font-size: var(--fs-3xl);`}
    margin: 0;
  }
  hr {
    width: 100px;
    margin: 2rem 0;
    border-top: 3px solid var(--cl-primary);
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
