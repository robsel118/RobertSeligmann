import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logosvg from '../../images/logo.svg'

const LogoImg = styled.div`
  cursor: pointer;
  position: relative;
  float: left;
  background-image: url(${logosvg});
  width: 36px;
  height: 34px;
  background-repeat: no-repeat;
  filter: ${props => props.theme.inverted};
`

const Logo = () => (
  <Link to="/">
    <LogoImg />
  </Link>
)

export default Logo
