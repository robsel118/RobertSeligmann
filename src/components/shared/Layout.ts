import styled, { keyframes } from "styled-components"
import { breakpoints } from "../../theme"

const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const Layout = styled.div`
  min-height: 100vh;
  padding: 1.25rem 2rem;
  margin: 2rem auto;
  opacity: 0;
  animation: ${FadeIn} 0.5s 0.3s ease-in-out forwards;

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
    margin: 75px auto;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
    margin: 75px auto;
  }
`

export default Layout
