import styled from 'styled-components'
import mixins from '@theme/mixins'

export const FooterContainer = styled.div`
  grid-area: footer-start / footer-start / footer-end / footer-end;
  position: relative;
  margin: 1rem 0 3rem 0;
  width: 100%;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  max-width: 80vw;
  margin: 0 auto;
  ${mixins.contentSpace};
  padding: 0 1rem;
`
export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.5rem 0;
  ${mixins.muli}
  a {
    margin-right: 1rem;
  }
`

export const TextWrapper = styled.div`
  p:first-child {
    ${mixins.heading}
  }
  a {
    ${mixins.inlineLink}
  }
`
