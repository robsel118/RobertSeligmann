import styled from 'styled-components'
import mixins from '@theme/mixins'
import mediaMin from '@theme/media'
import { fontSizes } from '@theme/styles'

export const AboutText = styled.div`
  p {
    ${mixins.muli};
    font-size: ${fontSizes.lg};
    a {
      ${mixins.inlineLink};
    }
  }
`

export const Grid = styled.div`
  margin: 1.5rem 0;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  flex-direction: column;
  min-height: calc(100vmin - 170px);
  ${mixins.flexCenter};
  ${mediaMin.tablet`
  ${mixins.grid()}
  justify-content: space-betweeen;
`}
`
