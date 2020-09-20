import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logosvg from '@images/logo.svg'

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
  margin : 0 0;
  mask-size: ${({height}) => height} ${({width}) => width};
  width: ${({height}) => height};
  height: ${({width}) => width};
  transition: background-color 0.3s ease;
  background-color: var(--cl-text-main-dk);
  &:hover{
    background-color: var(--cl-text-main);
  }
  mask-repeat: no-repeat;
  -webkit-mask-image: url(${logosvg});
  mask-image: url(${logosvg});     
`

const Logo:React.FC<LogoImgProps> = ({ height = "48px", width = "48px", filter}) => (
  <Link to="/" >
    <LogoImg height={height} width={width} filter={filter}/>
  </Link>
)

export default Logo
