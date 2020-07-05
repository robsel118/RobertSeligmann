import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import  logosvg from "../../images/logo.svg"

const LogoImg = styled.div`
  position: relative;
  background-image: url(${logosvg});
  width: 36px;
  height: 34px;
  fill: red;
  background-repeat: no-repeat;
  filter: ${props => props.theme.inverted}
`

const Logo = () => (
  <Link to="/">
    <LogoImg />
  </Link>
)

export default Logo
