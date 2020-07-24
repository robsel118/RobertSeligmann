import styled from 'styled-components'

interface BaseProps {
  radius?: any
}

const Bordered = styled.div<BaseProps>`
  border-radius: ${props => props.radius || '51px'};
`
