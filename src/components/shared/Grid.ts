import styled from 'styled-components'
import mediaMin from '@theme/media'
import mixins from '@theme/mixins'

const Grid = styled.div<{ cols: number }>`
  margin: 1.5rem 0;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  flex-direction: column;

  ${mixins.flexCenter};
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
