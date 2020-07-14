import styled from 'styled-components'

const Layout = styled.div`
  width: 100%;
  flex-wrap: wrap;
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export default Layout
