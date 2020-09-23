import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'
import Logo from '@components/shared/Logo'
import ThemeToggleButton from '@components/shared/ThemeToggleButton'
import {  NavLinkcontainer, HeaderContainer, ContentRow, LinkList, Navlink, CollapsibleMenu, CollapseButton, Line } from './styles'

export const Header = () => {

  const [expanded, setExpanded] = useState(false)

  return (<HeaderContainer id="top">
    <ContentRow >
      <Logo filter="invert(100%)"/>
      <NavLinkcontainer>
        <LinkList>
          <Navlink><Link to="/#about">About</Link></Navlink>
          <Navlink><Link to="/#work">Work</Link></Navlink>
          <Navlink><Link to="/#featured">Projects</Link></Navlink>
          <Navlink><Link to="/">Contact</Link></Navlink>
          <Navlink><ThemeToggleButton /></Navlink>
        </LinkList>
        <CollapseButton expanded={expanded}>
          <Menu onClick={()=>{setExpanded(!expanded)}} color="white"  size="28"/>
        </CollapseButton>
      </NavLinkcontainer>
    </ContentRow>
    <CollapsibleMenu expanded={expanded}>
    <Navlink><Link to="/#about">About</Link></Navlink>
          <Navlink><Link to="/#work">Work</Link></Navlink>
          <Navlink><Link to="/#featured">Featured</Link></Navlink>
          <Navlink><Link to="/">Contact</Link></Navlink>
        <Line/>
        <Navlink><ThemeToggleButton /></Navlink>
    </CollapsibleMenu>
  </HeaderContainer>
  )
}
export default Header