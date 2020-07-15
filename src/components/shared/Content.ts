import styled from 'styled-components/macro'
import { FadeIn } from '@theme/animation'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Content = styled.div`
  max-width: 80vw;
  counter-reset: section;
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;
  grid-area: content-start / content-start / content-end / content-end;
  ${mixins.contentSpace};
  ${mediaMin.lg`
    padding: 0 2rem;
  `}
`

export default Content
