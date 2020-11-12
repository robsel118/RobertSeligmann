import styled from 'styled-components'
import media from '../../theme/media'

const Grid = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  ${media.tablet`grid-template-columns: ${props=> props.columns};`}
`

export default Grid;