import styled from 'styled-components'
import { fonts } from '../../theme'

const Paragraph = styled.p`
  color: ${props => props.theme.textColor};
  font-family: ${fonts.muli};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  margin: 3rem 0;
  line-height: 150%;
`

export default Paragraph
