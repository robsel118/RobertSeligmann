import styled from 'styled-components/macro'
import { FadeIn } from '@theme/animation'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

const Content = styled.div`
  ${mixins.contentSpace};
  max-width: 80vw;
  counter-reset: section;
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;
  grid-area: content-start / content-start / content-end / content-end;
  padding: 2rem 2rem;
  ${mediaMin.laptop`
    padding: 0 2rem;
  `}
`

export default Content
