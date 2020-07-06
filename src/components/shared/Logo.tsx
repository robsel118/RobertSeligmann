import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logosvg from '../../images/logo.svg'
import { breakpoints } from '../../theme'

const LogoImg = styled.div`
  cursor: pointer;
  /* position: relative; */
  float: left;
  display: inline-block;
  margin-top: auto 0px;
  background-image: url(${logosvg});
  width: 2.1rem;
  height: 2rem;
  background-repeat: no-repeat;
  filter: ${props => props.theme.inverted};
  align-self: flex-start;
`

const Logo = () => (
  <Link to="/">
    <LogoImg />
  </Link>
)

export default Logo
