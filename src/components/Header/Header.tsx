import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'
import Logo from '@components/shared/Logo'
import ThemeToggleButton from '@components/shared/ThemeToggleButton'
import {  NavLinkcontainer, HeaderContainer, ContentRow, LinkList, Navlink, CollapsibleMenu, CollapseButton, Line, ResumeButton } from './styles'

export const Header = () => {

  const [expanded, setExpanded] = useState(false)

  return (<HeaderContainer id="top">
    <ContentRow >
      <Logo filter="invert(100%)"/>
      <NavLinkcontainer>
        <LinkList>
          <Navlink><Link to="/#about" aria-label="Navigate to about section">About</Link></Navlink>
          <Navlink><Link to="/#work" aria-label="Navigate to work section">Work</Link></Navlink>
          <Navlink><Link to="/#featured" aria-label="Navigate to project section">Projects</Link></Navlink>
          <Navlink><Link to="/#contact" aria-label="Navigate to contact section">Contact</Link></Navlink>
          <Navlink><ResumeButton aria-label="View Resume">Resume</ResumeButton></Navlink>
        </LinkList>
        <CollapseButton expanded={expanded}>
          <Menu onClick={()=>{setExpanded(!expanded)}}  size="28"/>
        </CollapseButton>
      </NavLinkcontainer>
    </ContentRow>
    <CollapsibleMenu expanded={expanded}>
          <Navlink><Link to="/#about" aria-label="Navigate to about section">About</Link></Navlink>
          <Navlink><Link to="/#work" aria-label="Navigate to work section">Work</Link></Navlink>
          <Navlink><Link to="/#featured" aria-label="Navigate to featured section">Projects</Link></Navlink>
          <Navlink><Link to="/#contact" aria-label="Navigate to contact section">Contact</Link></Navlink>
          <Navlink><ResumeButton aria-label="View Resume">Resume</ResumeButton></Navlink>

        <Line/>
        <Navlink><ThemeToggleButton /></Navlink>
    </CollapsibleMenu>
  </HeaderContainer>
  )
}
export default Header