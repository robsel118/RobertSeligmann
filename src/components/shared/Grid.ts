import styled from 'styled-components'
import { breakpoints } from '@theme/styles'
import mediaMin from '@theme/media'

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

  ${mediaMin.md`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-betweeen;
  `}

  ${mediaMin.lg`
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
    justify-content: space-betweeen;
  `}
`

export default Grid
