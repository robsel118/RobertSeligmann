import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logosvg from '../../images/logo.svg'
import { breakpoints } from '../../theme/styles'

interface LogoImgProps {
  height: string;
  width: string;
}
const LogoImg = styled.div<LogoImgProps>`
  cursor: pointer;
  float: left;
  margin: auto 0px;
  background-image: url(${logosvg});
  width: ${props => props.height};
  height: ${props => props.width};
  background-repeat: no-repeat;
  filter: ${props => props.theme.inverted};
  align-self: flex-start;
`

const Logo = ({height = "2rem", width = "2.1rem"}) => (
  <Link to="/">
    <LogoImg height={height} width={width} />
  </Link>
)

export default Logo
