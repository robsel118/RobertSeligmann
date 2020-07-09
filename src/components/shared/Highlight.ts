import styled from 'styled-components'
import { Paragraph } from '../shared/Typography'

interface HighlightedProps {
  inset?: string
  href?: string
}

export const Highlighted = styled.span<HighlightedProps>`
  box-shadow: inset 0 ${props => props.inset || '-0.6rem'}
    ${props => props.theme.highlight};
`
export const HighlightedLink = styled(Paragraph).attrs({
  as: 'a',
  target: '_blank',
})<HighlightedProps>`
  box-shadow: inset 0 ${props => props.inset || '-0.6rem'}
    ${props => props.theme.highlight};
  color: ${props => props.theme.textColor};
  text-decoration: none;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 0 ${props => props.inset || '-0.6rem'}
      ${props => props.theme.highlightHover};
  }
`
