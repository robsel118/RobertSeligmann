import styled from 'styled-components/macro'
import { FadeIn } from '@theme/animation'
import media from '@theme/media'
import mixins from '@theme/mixins'

const Content = styled.main`
  ${mixins.contentSpace};
  max-width: 80vw;
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;
  grid-area: content-start / content-start / content-end / content-end;
  padding: 2rem 2rem;
  ${media.laptop`
    padding: 0 2rem;
  `}

`

export default Content
