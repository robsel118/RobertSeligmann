import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../theme/styles'
import { FadeIn } from '../../theme/animation'

const Layout = styled.div`
  /* min-height: 100vh; */
  padding: 1.25rem 1rem;
  margin: 0;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
    margin: 0 auto;
  }
`

export default Layout
