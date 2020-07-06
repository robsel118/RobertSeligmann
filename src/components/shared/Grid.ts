import styled from 'styled-components'
import { breakpoints } from '../../theme'

interface GridProps {
  cols: number
}

const Grid = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
    grid-row-gap: 1rem;
    justify-content: space-betweeen;
  }
`

export default Grid
