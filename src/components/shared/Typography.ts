import styled from 'styled-components'
import { fonts } from '../../theme/styles'

export const Paragraph = styled.p`
  color: ${props => props.theme.textColor};
  font-family: ${fonts.muli};
  font-size: 1.1rem;
  letter-spacing: 0.03rem;
  margin: 2rem 0;
  line-height: 150%;
`

export const Title = styled.p`
  font-family: ${fonts.teko};
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;
  color: ${props => props.theme.textColor};
`
export const TextContent = styled.div`
  max-width: 50rem;
  margin: 3rem 0;
`
