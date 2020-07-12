import styled from 'styled-components/macro'
import { breakpoints } from '../../theme/styles'
import { FadeIn } from '../../theme/animation'

const Content = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;
  grid-area: content-start / content-start / content-end / content-end;

  @media (min-width: ${breakpoints.lg}) {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1000px;
    margin: 0 auto;
  }
`

export default Content
