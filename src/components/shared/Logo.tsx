import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logosvg from '../../images/logo.svg'
import { breakpoints } from '../../theme/styles'
import { checkPropTypes } from 'prop-types'

interface LogoImgProps {
  height?: string;
  width?: string;
  filter?: string;
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
  filter: ${props => props.filter || props.theme.inverted}
`

const Logo:React.FC<LogoImgProps> = ({ height = "3.2rem", width = "2.8rem", filter}) => (
  <Link to="/" >
    <LogoImg height={height} width={width} filter={filter}/>
  </Link>
)


export default Logo
