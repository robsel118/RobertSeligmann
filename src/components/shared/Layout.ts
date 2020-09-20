import styled from 'styled-components'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export default Layout
