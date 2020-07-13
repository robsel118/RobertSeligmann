import styled from 'styled-components/macro'
import { FadeIn } from '@theme/animation'
import mediaMin from '@theme/media'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Content = styled.div`
  counter-reset: section;
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;
  grid-area: content-start / content-start / content-end / content-end;
  ${mediaMin.lg`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  `}

  ${mediaMin.xl`
    max-width: 1000px;
    margin: 0 auto;
  `}
`

export default Content
