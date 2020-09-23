import styled from 'styled-components'
import mixins from '@theme/mixins'

export const Section = styled.section.attrs({
  'data-sal': 'slide-up',
  'data-sal-duration': '300',
  'data-sal-easing': 'ease-out',
})`
  min-height: 100vmin;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export default Section
