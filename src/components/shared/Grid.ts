import styled from 'styled-components'
import { breakpoints } from '@theme/styles'

interface GridProps {
  cols: number
}

const Grid = styled.div<GridProps>`
  margin: 1.5rem 0;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-betweeen;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
    justify-content: space-betweeen;
  }
`

export default Grid
