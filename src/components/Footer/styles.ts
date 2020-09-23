import styled from 'styled-components'
import mixins from '@theme/mixins'

export const FooterContainer = styled.footer.attrs({
  id: 'contact',
})`
  grid-area: footer-start / footer-start / footer-end / footer-end;
  position: relative;
  margin: 2.5rem 0 3rem 0;
  width: 100%;
`

export const Content = styled.div`
  ${mixins.contentSpace};
  ${mixins.grid};
  grid-template-rows: auto auto;
  max-width: 80vw;
  margin: 0 auto;
  padding: 0 1rem;
`
export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1.5rem 0;
  a {
    margin-right: 1rem;
  }
`

export const TextWrapper = styled.div`
  h1 {
    font-family: var(--ff-alt);
    font-size: var(--fs-h1);
  }
  a {
    ${mixins.inlineLink}
  }
`
