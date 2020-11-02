import styled from 'styled-components'
import media from '../../theme/media'

const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  ${media.tablet`grid-template-columns: repeat(${props=> props.columns}, 1fr);`}
`

export default Grid;