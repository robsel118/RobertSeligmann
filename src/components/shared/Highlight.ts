import styled from 'styled-components'

interface HighlightedProps {
  inset: string
}

export const Highlighted = styled.span<HighlightedProps>`
  box-shadow: inset 0 ${props => props.inset || '-0.5rem'} rgb(180, 224, 232);
`
