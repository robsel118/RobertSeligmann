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
  position: relative;
  float: left;
  display: block;
  font-size: 100%;
  margin : 0.5rem 0;
  background-image: url(${logosvg});
  width: ${props => props.height};
  height: ${props => props.width};
  background-repeat: no-repeat;
  filter: ${props => props.theme.inverted};
  ;

`

const Logo = ({ height = "3.2rem", width = "2.8rem" }) => (
  <Link to="/" >
    <LogoImg height={height} width={width} />
  </Link>
)

export default Logo
