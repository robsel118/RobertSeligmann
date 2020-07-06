import styled from 'styled-components'
import { fonts } from '../../theme'

export const Paragraph = styled.p`
  color: ${props => props.theme.textColor};
  font-family: ${fonts.muli};
  font-size: 1.1rem;
  letter-spacing: 0.04rem;
  margin: 3rem 0;
  line-height: 150%;
`

export const Title = styled.p`
  font-family: ${fonts.teko};
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  color: ${props => props.theme.textColor};
`
